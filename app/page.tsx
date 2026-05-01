import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { createPageMetadata, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/metadata'

// Above-the-fold component - loaded immediately for LCP
import HomeHero from '@/components/home/HomeHero'

// Below-the-fold components - lazy loaded for faster initial hydration
const HomeIntro = dynamic(() => import('@/components/home/HomeIntro'))
const HomeFeatures = dynamic(() => import('@/components/home/HomeFeatures'))
const HomeFacilities = dynamic(() => import('@/components/home/HomeFacilities'))
const HomeMembership = dynamic(() => import('@/components/home/HomeMembership'))
const HomeCoaching = dynamic(() => import('@/components/home/HomeCoaching'))
const HomeEvents = dynamic(() => import('@/components/home/HomeEvents'))
const HomeTestimonials = dynamic(() => import('@/components/home/HomeTestimonials'))
const HomeLocation = dynamic(() => import('@/components/home/HomeLocation'))
const HomeFAQ = dynamic(() => import('@/components/home/HomeFAQ'))
const HomeBottom = dynamic(() => import('@/components/home/HomeBottom'))

export const metadata: Metadata = createPageMetadata({
  title: 'Premier Multi-Sport Indoor Facility in Dallas-Fort Worth',
  description: 'Indoor cricket, badminton, soccer & dodgeball in Fort Worth TX. 50,000 sq ft climate-controlled facility. Memberships from $70/mo. Open 5AM-11PM daily.',
  keywords: [
    'indoor sports Dallas Fort Worth',
    'multi-sport facility DFW',
    'indoor cricket Fort Worth',
    'badminton courts Dallas',
    'indoor soccer DFW',
    'sports facility Texas',
    'court rentals Fort Worth',
    'indoor sports near me',
    'Fort Worth sports facility',
  ],
  path: '/',
})

// Single source of truth for FAQ data — shared between schema and component
import { homeFaqs } from '@/data/home-faqs'

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

      {/* ═══ Customer Journey Flow ═══
        1. Awareness  — Hero hooks with emotion
        2. Orient     — Intro gives quick facts (sports, hours, location, price)
        3. Explore    — Sports cards show what's available
        4. Trust      — Facility quality proves it's legit
        5. Value      — Membership shows it's affordable
        6. Expertise  — Coaching proves world-class instruction
        7. Versatility— Events shows it's not just sports
        8. Proof      — Testimonials from real members
        9. Access     — Location + map for final objection
        10. Answers   — FAQ catches remaining questions
        11. Convert   — Final CTA with offer
      ═══════════════════════════════ */}

      <HomeHero />
      <HomeIntro />
      <HomeFeatures />
      <HomeFacilities />
      <HomeMembership />
      <HomeCoaching />
      <HomeEvents />
      <HomeTestimonials />
      <HomeLocation />
      <HomeFAQ />
      <HomeBottom />
    </>
  )
}