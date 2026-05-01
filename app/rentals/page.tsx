import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/metadata'
import RentalsHero from '@/components/rentals/RentalsHero'
import RentalsIntro from '@/components/rentals/RentalsIntro'
import RentalsFacilities from '@/components/rentals/RentalsFacilities'
import RentalsPricing from '@/components/rentals/RentalsPricing'
import RentalsValue from '@/components/rentals/RentalsValue'
import RentalsFAQ from '@/components/rentals/RentalsFAQ'
import RentalsCTA from '@/components/rentals/RentalsCTA'

export const metadata: Metadata = createPageMetadata({
  title: 'Court Rentals | Book Cricket, Badminton, Soccer & Dodgeball Courts',
  description: 'Rent professional indoor sports courts at DFW Indoor Sports. Cricket lanes, badminton courts, soccer fields, and dodgeball courts. Affordable hourly rentals, open 5AM-11PM daily.',
  keywords: [
    'court rentals Fort Worth',
    'sports lane rental Dallas',
    'indoor court booking DFW',
    'rent sports facility Texas',
    'hourly court rental',
  ],
  path: '/rentals',
})

const rentalsFaqs = [
  {
    question: 'How do I book a court?',
    answer: 'You can book online 24/7 through our website, call us at (817) 938-0808, or walk in based on availability. Online booking is recommended for guaranteed court time, especially during peak hours.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24+ hours before your booking receive a full refund or credit. Cancellations 12-24 hours before receive 50% credit. Less than 12 hours notice forfeits payment.',
  },
  {
    question: 'Can I extend my booking if the court is open?',
    answer: 'Yes! If the court isn\'t booked after your slot, you can extend on the spot. Just check with staff. We can\'t guarantee availability, so booking ahead is best if you need more time.',
  },
  {
    question: 'Is equipment included with court rental?',
    answer: 'Yes! All basic equipment is included free: cricket gear (bats, balls, pads), badminton rackets and shuttlecocks, soccer balls, and dodgeballs. Bowling machines are also included for cricket lanes.',
  },
  {
    question: 'Can I book recurring weekly slots?',
    answer: 'Absolutely! Many regular players book recurring slots. We offer discounted rates for standing weekly reservations. Contact us to set up recurring bookings.',
  },
  {
    question: 'Do members get priority booking?',
    answer: 'Yes! Members can book 7-14 days in advance (depending on membership level), while drop-in players can book 7 days ahead. Members also get discounted rates on court rentals.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and cash. Online bookings require card payment. We also accept Apple Pay and Google Pay at the facility.',
  },
  {
    question: 'Can I split payment with friends?',
    answer: 'Yes! You can split payment at the counter when paying in person. For online bookings, one person pays and can collect from others. Some groups use Venmo/Zelle to split amongst themselves.',
  },
]

export default function RentalsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rentals', url: '/rentals' },
  ])

  const serviceSchema = generateServiceSchema({
    name: 'Indoor Sports Court Rentals',
    description: 'Hourly rental of professional indoor cricket lanes, badminton courts, soccer fields, and dodgeball courts in Fort Worth, TX. Open 5AM-11PM daily.',
    price: '25',
  })

  const faqSchema = generateFAQSchema(rentalsFaqs)

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-dfw-red selection:text-white transition-colors duration-300">
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
      <RentalsHero />
      <RentalsIntro />
      <RentalsFacilities />
      <RentalsPricing />
      <RentalsValue />
      <RentalsFAQ />
      <RentalsCTA />
    </div>
  )
}