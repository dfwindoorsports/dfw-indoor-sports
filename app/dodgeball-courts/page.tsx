import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema, generateFAQSchema } from '@/lib/metadata'
import DodgeballHero from '@/components/dodgeball/DodgeballHero'
import DodgeballIntro from '@/components/dodgeball/DodgeballIntro'
import DodgeballFeatures from '@/components/dodgeball/DodgeballFeatures'
import DodgeballGameModes from '@/components/dodgeball/DodgeballGameModes'
import DodgeballPricing from '@/components/dodgeball/DodgeballPricing'
import DodgeballPackages from '@/components/dodgeball/DodgeballPackages'
import DodgeballShowcase from '@/components/dodgeball/DodgeballShowcase'
import DodgeballLocation from '@/components/dodgeball/DodgeballLocation'
import DodgeballBooking from '@/components/dodgeball/DodgeballBooking'
import DodgeballFAQ from '@/components/dodgeball/DodgeballFAQ'
import DodgeballCTA from '@/components/dodgeball/DodgeballCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Dodgeball Court Rentals | Fun Indoor Sports in Fort Worth',
  description: 'Rent dodgeball courts at DFW Indoor Sports for parties, events, corporate team building, or league play. Safe indoor environment for all ages in Fort Worth, TX.',
  keywords: [
    'dodgeball court Fort Worth',
    'indoor dodgeball Dallas',
    'dodgeball rental DFW',
    'dodgeball facility Texas',
    'team building activities',
  ],
  path: '/dodgeball-courts',
})

const dodgeballFaqs = [
  {
    question: 'What type of dodgeballs do you use?',
    answer: 'We use foam-covered safety balls specifically designed for indoor dodgeball. They\'re soft enough to be safe for all ages but firm enough for competitive play. No stinging or injuries from ball impacts.',
  },
  {
    question: 'What is the minimum group size for dodgeball?',
    answer: 'We recommend at least 8-10 people for a good dodgeball experience (4-5 per team). However, we can accommodate smaller groups by combining with other players or adjusting game formats.',
  },
  {
    question: 'Is dodgeball safe for kids?',
    answer: 'Absolutely! Our foam safety balls and supervised play environment make it safe for ages 6 and up. It\'s one of our most popular birthday party activities. We adjust rules and intensity based on age groups.',
  },
  {
    question: 'Can we play dodgeball without a booking?',
    answer: 'Drop-in dodgeball is available during scheduled open play times—check our website or call for the current schedule. For guaranteed court time or group events, we recommend booking in advance.',
  },
  {
    question: 'What is included in a dodgeball package?',
    answer: 'Packages include exclusive court time, all dodgeballs, pinnies/team jerseys, a referee/coordinator, and access to our facility amenities. Birthday and corporate packages can include food, drinks, and party room access.',
  },
  {
    question: 'Do you provide team jerseys or pinnies?',
    answer: 'Yes! We provide pinnies in two colors to identify teams. For larger events or tournaments, we can accommodate multiple team colors.',
  },
  {
    question: 'Is dodgeball good for corporate team-building events?',
    answer: 'Dodgeball is one of our most popular corporate activities! It\'s fun, requires teamwork, and gets everyone engaged—even non-athletes. We customize events for groups of 10-100+ with catering options available.',
  },
  {
    question: 'What ages can play dodgeball?',
    answer: 'Players ages 6 and up can participate. We have youth parties, adult leagues, and mixed-age family events. Game intensity is adjusted based on the age group and skill level of participants.',
  },
]

export default function DodgeballCourtsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Dodgeball Courts', url: '/dodgeball-courts' },
  ])

  const dodgeballSchema = generateSportsActivitySchema(
    'Dodgeball',
    'Safe indoor dodgeball courts perfect for team events, parties, corporate activities, and league play.'
  )

  const faqSchema = generateFAQSchema(dodgeballFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dodgeballSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DodgeballHero />
      <DodgeballIntro />
      <DodgeballFeatures />
      <DodgeballGameModes />
      <DodgeballPricing />
      <DodgeballPackages />
      <DodgeballShowcase />
      <DodgeballLocation />
      <DodgeballBooking />
      <DodgeballFAQ />
      <DodgeballCTA />
    </>
  )
}