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
    return (
        <section className="py-20 bg-[#050911] relative overflow-hidden">
            {/* Subtle texture */}
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/90 font-mono text-[10px] font-medium uppercase tracking-[0.25em] mb-4"
                    >
                        What We Offer
                    </motion.span>

                    <motion.h2
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-header font-bold text-white uppercase tracking-tighter"
                    >
                        Sports & Activities
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sports.map((sport, idx) => (
                        <motion.div
                            key={idx}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                href={sport.link}
                                className="group block h-full"
                            >
                                <div className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-dfw-red/30 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {sport.icon}
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-lg font-header font-bold text-white uppercase tracking-tight mb-3 group-hover:text-dfw-red transition-colors">
                                            {sport.name}
                                        </h3>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <span className="text-xl font-header font-bold text-white">{sport.price}</span>
                                            <span className="text-xs text-gray-500 ml-2">{sport.priceNote}</span>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6 flex-grow">
                                            {sport.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                                                    <span className="w-1 h-1 bg-dfw-red rounded-full shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest font-mono text-gray-400 group-hover:text-dfw-red transition-colors">
                                            Learn More
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
