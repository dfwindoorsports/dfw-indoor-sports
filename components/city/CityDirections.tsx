'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface DirectionBlock {
    area: string
    distance: string
    time: string
    steps: string[]
}

export default function CityDirections({ city, address, googleMapsLink, directions }: {
    city: string
    address: string
    googleMapsLink: string
    directions: DirectionBlock[]
}) {
    return (
        <section aria-label="Directions to DFW Indoor Sports" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dfw-red/40 bg-dfw-red/10 backdrop-blur-2xl text-dfw-red font-mono text-\[11px\] font-medium uppercase tracking-[0.25em] mb-4"
                        >
                            Getting Here
                        </motion.span>

                        <motion.h2
                            transition={{ delay: 0.1 }}
                            className="text-2xl md:text-4xl font-header font-bold text-dfw-navy uppercase tracking-tighter mb-4"
                        >
                            Easy Drive from {city}
                        </motion.h2>

                        <motion.div
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
                        >
                            <MapPin size={14} className="text-dfw-red" />
                            <span className="text-sm text-dfw-navy">{address}</span>
                        </motion.div>
                    </div>

                    {/* Directions List */}
                    <div className="space-y-6">
                        {directions.map((dir, idx) => (
                            <motion.div
                                key={idx}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-dfw-red/30 transition-colors">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                        <h3 className="text-lg font-header font-bold text-dfw-navy flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-lg bg-dfw-red/10 border border-dfw-red/20 flex items-center justify-center">
                                                <MapPin size={16} className="text-dfw-red" />
                                            </span>
                                            {dir.area}
                                        </h3>

                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded text-xs font-mono text-dfw-navy">
                                                {dir.distance}
                                            </span>
                                            <span className="px-3 py-1 bg-dfw-red/10 border border-dfw-red/20 rounded text-xs font-mono text-dfw-red font-medium">
                                                {dir.time}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Steps */}
                                    <ol className="relative border-l-2 border-gray-200 ml-5 space-y-3">
                                        {dir.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="pl-6 relative">
                                                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300" />
                                                <span className="text-sm text-gray-600">
                                                    {step}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Google Maps CTA */}
                    <motion.div
                        transition={{ delay: 0.3 }}
                        className="mt-10 text-center"
                    >
                        <Link
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-dfw-navy text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Open in Google Maps
                            <ArrowUpRight size={14} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
