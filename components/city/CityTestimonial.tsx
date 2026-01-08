'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialProps {
    quote: string
    author: string
    location: string
}

export default function CityTestimonial({ quote, author, location }: TestimonialProps) {
    return (
        <section className="py-24 sm:py-32 bg-[#020408] relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-20" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-dfw-red-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Quote icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dfw-red-500/10 border border-dfw-red-500/20 mb-10"
                    >
                        <Quote className="w-8 h-8 text-dfw-red-400" strokeWidth={1.5} />
                    </motion.div>

                    {/* Quote text */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="relative"
                    >
                        <p className="text-heading-lg sm:text-display text-white leading-relaxed mb-10 font-light">
                            "{quote}"
                        </p>
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                    >
                        {/* Avatar placeholder */}
                        <div className="w-14 h-14 rounded-full glass-premium flex items-center justify-center mb-2">
                            <span className="text-xl font-header font-bold text-white">
                                {author.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>

                        <div className="text-overline text-white tracking-luxury">
                            {author}
                        </div>
                        <div className="text-caption text-white/50">
                            {location}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
