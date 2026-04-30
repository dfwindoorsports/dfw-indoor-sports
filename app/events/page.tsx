import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/metadata'
import EventsHero from '@/components/events/EventsHero'
import EventsIntro from '@/components/events/EventsIntro'
import EventsPackages from '@/components/events/EventsPackages'
import EventsCorporate from '@/components/events/EventsCorporate'
import EventsTournaments from '@/components/events/EventsTournaments'
import EventsCatering from '@/components/events/EventsCatering'
import EventsFAQ from '@/components/events/EventsFAQ'
import EventsCTA from '@/components/events/EventsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Sports Events Fort Worth | Birthday Parties & Corporate Team Building Dallas',
  description: 'Host your special event at DFW Indoor Sports. Perfect venue for birthday parties, corporate events, tournaments, and team building activities in Fort Worth, TX.',
  keywords: [
    'sports events Fort Worth',
    'birthday party venue Dallas',
    'corporate sports events DFW',
    'sports tournaments Texas',
    'team building events',
  ],
  path: '/events',
})

const eventsFaqs = [
  {
    question: 'What is the minimum group size for events?',
    answer: 'Birthday parties start at 8 guests minimum. Corporate events typically need 10+ participants for a good experience. For smaller groups, we can discuss customized options—just give us a call.',
  },
  {
    question: 'Can you accommodate large groups (50+ people)?',
    answer: 'Absolutely! We regularly host corporate events and tournaments with 50-150+ participants. Our 50,000 sq ft facility has multiple courts and areas that can run simultaneous activities.',
  },
  {
    question: 'Do you provide food and catering?',
    answer: 'Yes! We offer catering packages including pizza, sandwiches, snacks, and beverages. We can also coordinate with outside caterers for larger events. Ask about our catering menu when booking.',
  },
  {
    question: 'What is included in birthday party packages?',
    answer: 'Packages include 2 hours of dedicated court time, choice of sport activities, equipment, a party host/coordinator, party room access, and basic tableware. Food and cake packages are available as add-ons.',
  },
  {
    question: 'How far in advance should I book an event?',
    answer: 'We recommend 2-4 weeks for birthday parties and 4-6 weeks for corporate events, especially during peak seasons. Popular weekend slots book quickly, so earlier is better.',
  },
  {
    question: 'Can we bring our own decorations?',
    answer: 'Yes! You\'re welcome to bring decorations, cake, and personal items. We ask that decorations don\'t interfere with other facility operations and that you clean up after your event.',
  },
  {
    question: 'Is there a private party room?',
    answer: 'Yes, we have a dedicated party/meeting room that comes with event packages. It includes tables, chairs, and is separate from the main facility for cake, gifts, and refreshments.',
  },
  {
    question: 'What about corporate team building options?',
    answer: 'We offer customized team building with dodgeball tournaments, relay races, sports challenges, and more. Events include a facilitator, team gear, scorekeeping, and awards. Perfect for boosting morale and teamwork.',
  },
  {
    question: 'Do you require liability waivers?',
    answer: 'Yes, all participants must sign a liability waiver before playing. For minors, a parent or guardian must sign. Digital waivers can be completed online in advance to save time on event day.',
  },
  {
    question: 'What is your deposit and cancellation policy?',
    answer: 'A 50% deposit is required to secure your event date. Cancellations 7+ days out receive a full refund. Cancellations 3-7 days out receive 50% credit. Less than 3 days forfeits the deposit.',
  },
]

export default function EventsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
  ])

  const faqSchema = generateFAQSchema(eventsFaqs)

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EventsHero />
      <EventsIntro />
      <EventsPackages />
      <EventsCorporate />
      <EventsTournaments />
      <EventsCatering />
      <EventsFAQ />
      <EventsCTA />
    </div>
  )
}