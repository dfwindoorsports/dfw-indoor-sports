'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SportCard {
    name: string
    icon: string
    price: string
    priceNote: string
    features: string[]
    link: string
}

export default function CitySportsGrid({ sports }: { sports: SportCard[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                
            }
        }
    }

    return (
        <section className="py-24 sm:py-32 bg-[#020408] relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dfw-red-500/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-overline text-dfw-red-400 tracking-luxury mb-4"
                    >
                        What We Offer
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-display font-header text-white uppercase"
                    >
                        Sports & Activities
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {sports.map((sport, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <Link
                                href={sport.link}
                                className="group block h-full"
                            >
                                <div className="relative h-full glass-premium p-8 rounded-3xl hover-lift overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-dfw-red-500/0 to-dfw-red-500/0 group-hover:from-dfw-red-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500" />

                                    {/* Border glow */}
                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 rounded-3xl border border-dfw-red-500/30" />
                                    </div>

                                    <div className="relative flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                            {sport.icon}
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-heading font-header text-white uppercase mb-4 group-hover:text-dfw-red-400 transition-colors duration-300">
                                            {sport.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-6">
                                            <span className="text-2xl font-header font-bold text-white">{sport.price}</span>
                                            <span className="text-caption text-white/50 ml-2">{sport.priceNote}</span>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-8 flex-grow">
                                            {sport.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-2 text-caption text-white/60">
                                                    <span className="w-1 h-1 bg-dfw-red-500 rounded-full shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-overline tracking-luxury text-white/70 group-hover:text-dfw-red-400 transition-colors duration-300">
                                            Learn More
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
