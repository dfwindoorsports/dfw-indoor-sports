import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateSportsActivitySchema, generateFAQSchema } from '@/lib/metadata'
import SoccerHero from '@/components/soccer/SoccerHero'
import SoccerIntro from '@/components/soccer/SoccerIntro'
import SoccerFeatures from '@/components/soccer/SoccerFeatures'
import SoccerPricing from '@/components/soccer/SoccerPricing'
import SoccerComparison from '@/components/soccer/SoccerComparison'
import SoccerShowcase from '@/components/soccer/SoccerShowcase'
import SoccerPrograms from '@/components/soccer/SoccerPrograms'
import SoccerBooking from '@/components/soccer/SoccerBooking'
import SoccerLocation from '@/components/soccer/SoccerLocation'
import SoccerExtras from '@/components/soccer/SoccerExtras'
import SoccerFAQ from '@/components/soccer/SoccerFAQ'
import SoccerCTA from '@/components/soccer/SoccerCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Indoor Soccer Fields Fort Worth | Climate-Controlled Turf Fields',
  description: 'Rent indoor soccer fields at DFW Indoor Sports. Premium turf fields perfect for training, league play, or pickup games. Climate-controlled environment in Fort Worth.',
  keywords: [
    'indoor soccer Fort Worth',
    'soccer field rental Dallas',
    'indoor soccer facility DFW',
    'turf soccer fields Texas',
    'futsal courts',
  ],
  path: '/soccer-fields',
})

const soccerFaqs = [
  {
    question: 'Is this indoor soccer or futsal?',
    answer: 'We offer both! Our field is regulation futsal size but can accommodate 5v5, 6v6, or small-sided soccer games. The playing style is indoor/futsal with walls for continuous play. Most players use the terms interchangeably.',
  },
  {
    question: 'What is the field size?',
    answer: 'Our indoor field is full futsal regulation size (25m x 42m / approximately 82ft x 138ft). It comfortably accommodates 5v5 or 6v6 matches with goals and proper boundary lines.',
  },
  {
    question: 'Do you provide soccer balls?',
    answer: 'Yes! Futsal balls and indoor soccer balls are provided free of charge. We have balls for adults and youth sizes. You\'re welcome to bring your own if you prefer.',
  },
  {
    question: 'Are there leagues I can join?',
    answer: 'Yes! We run recreational and competitive leagues for adults and youth throughout the year. Leagues include men\'s, women\'s, and coed divisions at various skill levels. Check our website or call for current league schedules.',
  },
  {
    question: 'Can I book the field for team practice?',
    answer: 'Absolutely! Check RunSwift for current field rental rates and availability. Many teams book recurring weekly slots for practice. Contact us for team pricing and recurring booking options.',
  },
  {
    question: 'What footwear is required?',
    answer: 'Indoor soccer shoes or futsal shoes are required. Flat rubber soles work best on our turf. No outdoor cleats with studs allowed as they damage the surface and can cause injuries.',
  },
  {
    question: 'Can kids play soccer here?',
    answer: 'Yes! We welcome youth players and have youth programs through our Academy. We also host youth birthday parties with soccer options and family-friendly pickup times on weekends.',
  },
  {
    question: 'Is the turf safe for sliding and falls?',
    answer: 'Our premium turf is designed for indoor soccer with proper cushioning and a forgiving surface. Slides and dives are safe—the surface is similar to professional indoor soccer venues.',
  },
  {
    question: 'What is included in field rental?',
    answer: 'Field rental includes exclusive use of the full field, goals, soccer balls, pinnies for team identification, and access to our facility amenities. A staff member is available for any needs during your rental.',
  },
  {
    question: 'Do you provide referees for games?',
    answer: 'For league games and organized tournaments, referees are included. For casual field rentals, referees are available upon request for an additional fee. Contact us to arrange officiating.',
  },
]

export default function SoccerFieldsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
    { name: 'Soccer Fields', url: '/soccer-fields' },
  ])

  const soccerSchema = generateSportsActivitySchema(
    'Indoor Soccer',
    'Climate-controlled indoor soccer fields with premium turf for training, leagues, and recreational play.'
  )

  const faqSchema = generateFAQSchema(soccerFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(soccerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SoccerHero />
      <SoccerIntro />
      <SoccerFeatures />
      <SoccerPricing />
      <SoccerComparison />
      <SoccerShowcase />
      <SoccerPrograms />
      <SoccerExtras />
      <SoccerLocation />
      <SoccerBooking />
      <SoccerFAQ />
      <SoccerCTA />
    </>
  )
}