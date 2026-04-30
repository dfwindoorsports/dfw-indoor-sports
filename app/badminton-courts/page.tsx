import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema, generateFAQSchema } from '@/lib/metadata'
import BadmintonHero from '@/components/badminton/BadmintonHero'
import BadmintonIntro from '@/components/badminton/BadmintonIntro'
import BadmintonFeatures from '@/components/badminton/BadmintonFeatures'
import BadmintonPricing from '@/components/badminton/BadmintonPricing'
import BadmintonComparison from '@/components/badminton/BadmintonComparison'
import BadmintonShowcase from '@/components/badminton/BadmintonShowcase'
import BadmintonLocation from '@/components/badminton/BadmintonLocation'
import BadmintonBooking from '@/components/badminton/BadmintonBooking'
import BadmintonPrograms from '@/components/badminton/BadmintonPrograms'
import BadmintonEquip from '@/components/badminton/BadmintonEquip'
import BadmintonFAQ from '@/components/badminton/BadmintonFAQ'
import BadmintonCTA from '@/components/badminton/BadmintonCTA'

export const metadata: Metadata = createPageMetadata({
 title: 'Premium Badminton Courts Fort Worth | Professional Indoor Courts',
 description: 'Book professional BWF-standard badminton courts at DFW Indoor Sports. International standard courts with proper lighting and flooring. Hourly rentals available 5AM-11PM daily.',
 keywords: [
 'badminton courts Fort Worth',
 'indoor badminton Dallas',
 'badminton court rental DFW',
 'professional badminton Texas',
 'BWF standard courts',
 ],
 path: '/badminton-courts',
})

const badmintonFaqs = [
 {
 question: 'What type of badminton courts do you have?',
 answer: 'We have 6 professional BWF-standard badminton courts with proper tournament-standard flooring, regulation net heights, and tournament-quality lighting. The courts meet international competition standards.',
 },
 {
 question: 'Can I rent badminton rackets and shuttlecocks?',
 answer: 'Yes! Basic rackets and shuttlecocks are included free with your court rental or open play session. We have rackets for all ages and skill levels. Serious players typically bring their own equipment.',
 },
 {
 question: 'What is the difference between open play and court rental?',
 answer: 'Open play gives you access to available courts on a rotating basis—great for singles or if you need playing partners. Court rental reserves a dedicated court for your group, ideal for consistent play or training. Check RunSwift for current rates.',
 },
 {
 question: 'Do you offer badminton coaching?',
 answer: 'Yes! We have certified badminton coaches offering private lessons, group clinics, and youth programs. Coaching covers footwork, strokes, game strategy, and competitive preparation for all skill levels.',
 },
 {
 question: 'Are your courts suitable for tournaments?',
 answer: 'Absolutely. Our courts are BWF-standard and regularly host local and regional tournaments. We can accommodate up to 6 simultaneous matches with proper referee stations and spectator areas.',
 },
 {
 question: 'How high are the ceilings?',
 answer: 'Our badminton hall has 30-foot ceilings—well above the BWF minimum of 9 meters (29.5 ft). This means no restrictions on high clears or lob shots, allowing full competitive play.',
 },
 {
 question: 'Can beginners play at your facility?',
 answer: 'Definitely! We welcome players of all skill levels. Open play sessions naturally group players by ability, and our staff can provide basic instruction. Beginner coaching packages are also available.',
 },
 {
 question: 'Do you have badminton programs for kids?',
 answer: 'Yes! Our Academy offers youth badminton programs for ages 6 and up. We have after-school programs, weekend clinics, summer camps, and competitive training for junior players.',
 },
 {
 question: 'What is your cancellation policy for court bookings?',
 answer: 'Cancellations made 24+ hours before your booking receive a full refund or credit. Cancellations 12-24 hours before receive 50% credit. Less than 12 hours notice forfeits payment.',
 },
 {
 question: 'Can I book courts for a group or team practice?',
 answer: 'Yes! You can book multiple courts simultaneously for team training or group sessions. We offer discounted rates for recurring weekly bookings. Contact us for team pricing.',
 },
]

export default function BadmintonCourtsPage() {
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: 'Home', url: '/' },
 { name: 'Rentals', url: '/rentals' },
 { name: 'Badminton Courts', url: '/badminton-courts' },
 ])

 const badmintonSchema = generateSportsActivitySchema(
 'Badminton',
 'BWF-standard professional badminton courts with premium facilities, proper lighting, and professional flooring.'
 )

 const faqSchema = generateFAQSchema(badmintonFaqs)

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(badmintonSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <BadmintonHero />
 <BadmintonIntro />
 <BadmintonFeatures />
 <BadmintonPricing />
 <BadmintonComparison />
 <BadmintonShowcase />
 <BadmintonLocation />
 <BadmintonBooking />
 <BadmintonPrograms />
 <BadmintonEquip />
 <BadmintonFAQ />
 <BadmintonCTA />
 </>
 )
}