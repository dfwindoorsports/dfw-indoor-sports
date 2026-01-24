import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema
const waiverFormSchema = z.object({
    participantName: z.string().min(1, 'Participant name is required').max(200),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number required').max(20),
    emergencyContact: z.string().min(1, 'Emergency contact is required').max(200),
    emergencyPhone: z.string().min(10, 'Emergency phone required').max(20),
    signature: z.string().min(1, 'Signature is required').max(200),
    signatureDate: z.string().min(1, 'Date is required'),
    agreedToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
    isMinor: z.boolean().optional(),
    parentName: z.string().optional(),
    parentSignature: z.string().optional(),
});

// Initialize Resend client
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= MAX_REQUESTS) {
        return true;
    }

    record.count++;
    return false;
}

function sanitize(str: string): string {
    return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        const result = waiverFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const data = result.data;

        // Sanitize all inputs
        const safeData = {
            participantName: sanitize(data.participantName),
            dateOfBirth: sanitize(data.dateOfBirth),
            email: sanitize(data.email),
            phone: sanitize(data.phone),
            emergencyContact: sanitize(data.emergencyContact),
            emergencyPhone: sanitize(data.emergencyPhone),
            signature: sanitize(data.signature),
            signatureDate: sanitize(data.signatureDate),
            isMinor: data.isMinor || false,
            parentName: data.parentName ? sanitize(data.parentName) : null,
            parentSignature: data.parentSignature ? sanitize(data.parentSignature) : null,
        };

        // Send email notification via Resend
        if (resend && process.env.CONTACT_EMAIL) {
            // Send to admin
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [process.env.CONTACT_EMAIL],
                subject: `[Waiver Signed] ${safeData.participantName}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #D62828; border-bottom: 2px solid #D62828; padding-bottom: 10px;">
              ✍️ New Waiver Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Participant</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.participantName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Date of Birth</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.dateOfBirth}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${safeData.email}">${safeData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Phone</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Emergency Contact</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.emergencyContact} (${safeData.emergencyPhone})</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Signed</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-style: italic;">${safeData.signature} on ${safeData.signatureDate}</td>
              </tr>
              ${safeData.isMinor ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Minor Status</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #D62828;">⚠️ Participant is a minor</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Parent/Guardian</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.parentName}</td>
              </tr>
              ` : ''}
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              Waiver submitted on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
            });

            // Send confirmation to participant
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [safeData.email],
                subject: 'Waiver Confirmation - DFW Indoor Sports',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #D62828; text-align: center;">Waiver Confirmed ✓</h1>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Dear ${safeData.participantName},
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for signing the DFW Indoor Sports liability waiver. Your submission has been recorded.
            </p>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #666;"><strong>Signed:</strong> ${safeData.signatureDate}</p>
              <p style="margin: 10px 0 0; color: #666;"><strong>Reference:</strong> ${safeData.email}</p>
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Please keep this email for your records. See you at the facility!
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
              DFW Indoor Sports | 16230 Three Wide Drive Suite 200, Fort Worth, TX 76177
            </p>
          </div>
        `,
            });
        } else {
            console.log('Waiver Submission:', safeData);
        }

        return NextResponse.json({
            success: true,
            message: 'Waiver submitted successfully! Check your email for confirmation.'
        });

    } catch (error) {
        console.error('Waiver form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit waiver. Please try again.' },
            { status: 500 }
        );
    }
}
