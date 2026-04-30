import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/metadata'
import AcademyHero from '@/components/academy/AcademyHero'
import AcademyNarrative from '@/components/academy/AcademyNarrative'
import AcademyPrograms from '@/components/academy/AcademyPrograms'
import AcademyCareerPathway from '@/components/academy/AcademyCareerPathway'
import AcademyCoaching from '@/components/academy/AcademyCoaching'
import AcademyExcellence from '@/components/academy/AcademyExcellence'
import AcademyGlobal from '@/components/academy/AcademyGlobal'
import AcademyFAQ from '@/components/academy/AcademyFAQ'
import AcademyCTA from '@/components/academy/AcademyCTA'

export const metadata: Metadata = createPageMetadata({
 title: 'Cricket Academy Fort Worth | Badminton Training Dallas | Youth Sports Programs',
 description: 'Join the DFW Indoor Sports Academy for professional cricket and badminton training. Expert coaches, structured programs for all ages and skill levels in Fort Worth, Texas.',
 keywords: [
 'cricket academy Dallas',
 'badminton training Fort Worth',
 'sports coaching DFW',
 'youth sports academy Texas',
 'professional sports training',
 ],
 path: '/academy',
})

const academyFaqs = [
 {
 question: 'What ages do you accept for Academy programs?',
 answer: 'Our Academy programs are available for ages 6 and up. We have age-appropriate groups: Juniors (6-10), Youth (11-14), Teens (15-17), and Adults (18+). Each group has curriculum designed for their developmental stage.',
 },
 {
 question: 'What is the coach-to-student ratio?',
 answer: 'We maintain small class sizes with a maximum 6:1 student-to-coach ratio for group sessions. Private lessons are 1-on-1 or 2-on-1 for siblings/friends training together.',
 },
 {
 question: 'Do you offer trial sessions?',
 answer: 'Yes! We offer a trial session for new students so they can experience our coaching style and facility. Contact us to schedule a trial—it\'s a great way to see if our Academy is the right fit.',
 },
 {
 question: 'How much does coaching cost?',
 answer: 'Contact CricKingdom Academy for current coaching rates. We offer individual and group programs at various levels. Register through Skonnect for details on available programs and pricing.',
 },
 {
 question: 'How long are the training programs?',
 answer: 'Programs run in 8-12 week sessions aligned with school semesters. Sessions typically meet 1-2 times per week. Summer camps run 1-2 weeks with daily sessions.',
 },
 {
 question: 'Do you offer summer camps?',
 answer: 'Yes! Our summer camps run throughout June, July, and August with half-day and full-day options. Camps combine skill development with fun games and activities. Registration opens in April.',
 },
 {
 question: 'Can my child join mid-session?',
 answer: 'In most cases, yes. We prorate fees for mid-session enrollment when space is available. Contact us to discuss your situation—we\'re flexible and want to accommodate families.',
 },
 {
 question: 'What if my child is a complete beginner?',
 answer: 'Beginners are welcome! Many of our students start with no prior experience. Our coaches are skilled at teaching fundamentals and building confidence. Everyone starts somewhere!',
 },
 {
 question: 'Are your coaches certified?',
 answer: 'Yes! Our coaches include Cricket Australia Level 2 and ICC-certified professionals with international experience and backgrounds in competitive play. All undergo background checks.',
 },
 {
 question: 'Do you prepare kids for competitive tournaments?',
 answer: 'Absolutely! Our competitive track prepares players for local, state, and national tournaments. We work on advanced techniques, match strategy, mental preparation, and physical conditioning.',
 },
]

export default function AcademyPage() {
 const breadcrumbSchema = generateBreadcrumbSchema([
 { name: 'Home', url: '/' },
 { name: 'Academy', url: '/academy' },
 ])

 const serviceSchema = generateServiceSchema({
 name: 'Sports Training Academy',
 description: 'Professional cricket and badminton coaching programs for all ages and skill levels. Expert coaches, structured curriculum at DFW Indoor Sports in Fort Worth, Texas.',
 price: '150',
 })

 const faqSchema = generateFAQSchema(academyFaqs)

 return (
 <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white">
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <AcademyHero />
 <AcademyNarrative />
 <AcademyPrograms />
 <AcademyCareerPathway />
 <AcademyCoaching />
 <AcademyExcellence />
 <AcademyGlobal />
 <AcademyFAQ />
 <AcademyCTA />
 </div>
 )
}