'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        question: 'What sports do you offer at DFW Indoor Sports?',
        answer: 'We offer seven sports: Indoor Cricket (professional lanes with bowling machines), Badminton (BWF-standard courts), Indoor Soccer/Futsal (climate-controlled turf field), Dodgeball (dedicated regulation courts), plus Volleyball, Pickleball, and Baseball. All facilities are purpose-built to professional standards.',
    },
    {
        question: 'Where are you located?',
        answer: 'We are located at 16230 Three Wide Drive Suite 200, Fort Worth, TX 76177. We\'re easily accessible from Dallas (25 min), Arlington (20 min), Plano (35 min), Irving (25 min), and Frisco (40 min). The facility is right off I-35W with plenty of free parking.',
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
        answer: 'Yes, we have a large free parking lot available for all visitors. Parking is never an issue.',
    },
    {
        question: 'How much does it cost to play?',
        answer: 'Rental rates are available on our online booking platform. Monthly memberships start at \ for badminton and \ for GOLD (cricket + badminton). Family Gold membership is \/mo. Check our Memberships page for full pricing details or book through RunSwift.',
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
        answer: 'Absolutely! We offer birthday parties, corporate events, and tournament hosting. Our events include customizable sports activities, dedicated party spaces, and catering options. Contact us to plan your event.',
    },
    {
        question: 'Do you offer coaching or lessons?',
        answer: 'Yes, we have professional certified coaches on staff for cricket and badminton. We offer private 1-on-1 lessons, group clinics, and structured Academy programs. Our coaching team includes Cricket Australia Level 2 and ICC-certified professionals with international experience.',
    },
]

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-[#050911]">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 bg-dfw-red/10 text-dfw-red text-xs font-mono uppercase tracking-wider rounded-sm mb-4">
                            Got Questions?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-header font-bold text-gray-900 uppercase mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need to know about DFW Indoor Sports. Can&apos;t find what you&apos;re looking for? Call us at (817) 938-0808.
                        </p>
                    </motion.div>

                    {/* FAQ List */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-5 text-left hover:border-dfw-red/30 text-white transition-colors group"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="font-bold text-gray-900 group-hover:text-dfw-red transition-colors">
                                            {faq.question}
                                        </h3>
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-dfw-red/10 flex items-center justify-center transition-colors">
                                            {openIndex === index ? (
                                                <Minus className="w-4 h-4 text-dfw-red" />
                                            ) : (
                                                <Plus className="w-4 h-4 text-gray-400 group-hover:text-dfw-red" />
                                            )}
                                        </span>
                                    </div>
                                    {openIndex === index && (
                                        <motion.p
                                            
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-gray-400 mt-4 text-sm leading-relaxed pr-12"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-400 mb-4">Still have questions?</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-dfw-red text-white font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-red-700 transition-colors"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// Export FAQ data for schema generation
export const homeFaqs = faqs
