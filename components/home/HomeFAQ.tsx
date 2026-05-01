'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { homeFaqs } from '@/data/home-faqs'
import Link from 'next/link'

// Show top 6 most important FAQs on homepage — reduced from 12 to avoid cognitive overload
const faqs = homeFaqs.slice(0, 6)


export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section aria-label="Frequently asked questions" className="py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-1.5 bg-dfw-red/10 text-dfw-red text-xs font-mono uppercase tracking-wider rounded-lg mb-4">
                            Got Questions?
                        </span>
                        <h2 className="text-4xl md:text-5xl font-header font-bold text-gray-900 uppercase mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Everything you need to know about DFW Indoor Sports. Can&apos;t find what you&apos;re looking for? Call us at (817) 938-0808.
                        </p>
                    </motion.div>

                    {/* FAQ List — proper semantic structure */}
                    <div className="space-y-3" role="list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index
                            const panelId = `faq-panel-${index}`
                            const buttonId = `faq-button-${index}`

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    role="listitem"
                                >
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-dfw-red/30 transition-colors">
                                        <button
                                            id={buttonId}
                                            onClick={() => toggleFAQ(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            className="w-full p-5 text-left group flex items-center justify-between gap-4"
                                        >
                                            <h3 className="font-bold text-gray-900 group-hover:text-dfw-red transition-colors">
                                                {faq.question}
                                            </h3>
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-dfw-red/10 flex items-center justify-center transition-colors" aria-hidden="true">
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4 text-dfw-red" />
                                                ) : (
                                                    <Plus className="w-4 h-4 text-gray-600 group-hover:text-dfw-red" />
                                                )}
                                            </span>
                                        </button>
                                        {/* Answer outside button — proper semantics */}
                                        {isOpen && (
                                            <div
                                                id={panelId}
                                                role="region"
                                                aria-labelledby={buttonId}
                                                className="px-5 pb-5"
                                            >
                                                <p className="text-gray-600 text-sm leading-relaxed pr-12">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* CTA + "See all" link */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mt-12 space-y-4"
                    >
                        <p className="text-gray-500 text-sm">
                            Showing 6 of {homeFaqs.length} questions
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-dfw-red text-white font-bold uppercase text-sm tracking-wider rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                            <a
                                href="tel:8179380808"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-bold uppercase text-sm tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Call (817) 938-0808
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
