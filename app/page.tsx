import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { createPageMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/metadata'

// Above-the-fold components - loaded immediately
import HomeHero from '@/components/home/HomeHero'
import HomeMarquee from '@/components/home/HomeMarquee'
import HomeIntro from '@/components/home/HomeIntro'
import HomeFeatures from '@/components/home/HomeFeatures'

// Below-the-fold components - lazy loaded for faster initial page load
const HomeFacilities = dynamic(() => import('@/components/home/HomeFacilities'))
const HomePrograms = dynamic(() => import('@/components/home/HomePrograms'))
const HomeMembership = dynamic(() => import('@/components/home/HomeMembership'))
const HomeCoaching = dynamic(() => import('@/components/home/HomeCoaching'))
const HomeEvents = dynamic(() => import('@/components/home/HomeEvents'))
const HomeTestimonials = dynamic(() => import('@/components/home/HomeTestimonials'))
const HomeLocation = dynamic(() => import('@/components/home/HomeLocation'))
const HomeCTAGrid = dynamic(() => import('@/components/home/HomeCTAGrid'))
const HomeBottom = dynamic(() => import('@/components/home/HomeBottom'))
const HomeFAQ = dynamic(() => import('@/components/home/HomeFAQ'))

export const metadata: Metadata = createPageMetadata({
  title: 'Premier Multi-Sport Indoor Facility in Dallas-Fort Worth',
  description: 'DFW Indoor Sports - State-of-the-art indoor cricket lanes, badminton courts, soccer fields, and dodgeball courts. Professional coaching, memberships, and court rentals in Fort Worth, TX. Open 5AM-11PM daily.',
  keywords: [
    'indoor sports Dallas Fort Worth',
    'multi-sport facility DFW',
    'indoor cricket Fort Worth',
    'badminton courts Dallas',
    'indoor soccer DFW',
    'sports facility Texas',
    'court rentals Fort Worth',
  ],
  path: '/',
})

// FAQ data for schema
const homeFaqs = [
  {
    question: 'What sports do you offer at DFW Indoor Sports?',
    answer: 'We offer four main sports: Indoor Cricket (3 professional lanes with bowling machines), Badminton (6 Olympic-grade BWF-standard courts), Indoor Soccer/Futsal (full-size climate-controlled turf field), and Dodgeball (dedicated courts with foam safety balls). All facilities are purpose-built and tournament-ready.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 16230 Three Wide Drive, Fort Worth, TX 76177. We\'re easily accessible from Dallas (25 min), Arlington (20 min), Plano (35 min), Irving (25 min), and Frisco (40 min). The facility is right off I-35W with plenty of free parking.',
  },
  {
    question: 'What are your hours of operation?',
    answer: 'We\'re open 7 days a week from 5:00 AM to 11:00 PM. These extended hours are designed to accommodate working professionals who want to play before or after work, as well as families on weekends.',
  },
  {
    question: 'Do I need to book a court in advance?',
    answer: 'Walk-ins are welcome based on availability, but we highly recommend booking in advance—especially for weekend slots and peak evening hours (6-9 PM). You can book online 24/7 through our website or call us at (817) 938-0808.',
  },
  {
    question: 'Do you provide sports equipment?',
    answer: 'Yes! We provide all necessary equipment at no extra charge including cricket bats, balls, protective gear (pads, helmets, gloves), badminton rackets, shuttlecocks, soccer balls, and dodgeballs. However, many regular players prefer to bring their own equipment.',
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we have a large free parking lot with over 100 spaces. Parking is never an issue, even during peak weekend hours. The lot is well-lit and secure.',
  },
  {
    question: 'How much does it cost to play?',
    answer: 'Drop-in rates start at $25/hour for cricket lanes, $10/person for badminton open play, and $100/hour for soccer field rental. Monthly memberships start at $70 and offer unlimited access plus priority booking. Check our Memberships page for full pricing details.',
  },
  {
    question: 'Can I try before committing to a membership?',
    answer: 'Absolutely! We encourage first-time visitors to try a drop-in session. This lets you experience our facilities, meet other players, and see if it\'s a good fit. Many players start with drop-in and convert to membership after a few visits.',
  },
  {
    question: 'Is the facility climate-controlled?',
    answer: 'Yes, our entire 50,000 sq ft facility is fully climate-controlled, maintaining a comfortable 68-72°F year-round. No more dealing with Texas heat, rain, or cold—play in perfect conditions every time.',
  },
  {
    question: 'Do you have programs for kids?',
    answer: 'Yes! Our Academy offers programs for ages 6 and up in cricket and badminton. We have seasonal camps, after-school programs, weekend clinics, and private coaching. Our certified coaches work with all skill levels from beginners to competitive players.',
  },
  {
    question: 'Can I host a birthday party or corporate event here?',
    answer: 'Absolutely! We offer birthday party packages starting at $299 and corporate team-building events for groups of all sizes. Our events include dedicated court time, equipment, and optional food/beverage packages. Contact us to customize your event.',
  },
  {
    question: 'Do you offer coaching or lessons?',
    answer: 'Yes, we have professional certified coaches on staff for cricket and badminton. We offer private 1-on-1 lessons, group clinics, and structured Academy programs. Our coaches include former national-level players with extensive teaching experience.',
  },
]

export default function HomePage() {
  const faqSchema = generateFAQSchema(homeFaqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeHero />
      <HomeMarquee />
      <HomeIntro />
      <HomeFeatures />
      <HomeFacilities />
      <HomePrograms />
      <HomeMembership />
      <HomeCoaching />
      <HomeEvents />
      <HomeTestimonials />
      <HomeLocation />
      <HomeFAQ />
      <HomeCTAGrid />
      <HomeBottom />
    </>
  )
}