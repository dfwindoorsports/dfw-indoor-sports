import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema
const partnerFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(100),
    lastName: z.string().min(1, 'Last name is required').max(100),
    company: z.string().min(1, 'Company name is required').max(200),
    email: z.string().email('Invalid email address'),
    level: z.string().min(1, 'Please select a partnership level'),
});

// Initialize Resend client
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Rate limiting map
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

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

// Sanitize input to prevent XSS
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

        const result = partnerFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { firstName, lastName, company, email, level } = result.data;

        // Sanitize all inputs
        const safeData = {
            firstName: sanitize(firstName),
            lastName: sanitize(lastName),
            company: sanitize(company),
            email: sanitize(email),
            level: sanitize(level),
        };

        // Send email via Resend
        if (resend && process.env.CONTACT_EMAIL) {
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [process.env.CONTACT_EMAIL],
                replyTo: safeData.email,
                subject: `[Partnership Inquiry] ${safeData.company} - ${safeData.level}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #D62828; border-bottom: 2px solid #D62828; padding-bottom: 10px;">
              🤝 New Partnership Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Name</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.firstName} ${safeData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Company</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.company}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${safeData.email}">${safeData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Interest Level</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #D62828;">${safeData.level}</td>
              </tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              This inquiry was sent from the DFW Indoor Sports partnership form.
            </p>
          </div>
        `,
            });
        } else {
            console.log('Partnership Inquiry:', safeData);
        }

        return NextResponse.json({
            success: true,
            message: 'Partnership inquiry submitted successfully!'
        });

    } catch (error) {
        console.error('Partnership form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit inquiry. Please try again.' },
            { status: 500 }
        );
    }
}
