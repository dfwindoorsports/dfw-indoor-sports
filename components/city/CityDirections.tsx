'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
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
    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-50px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                
            }
        }
    }

    return (
        <section ref={containerRef} className="py-24 sm:py-32 bg-gray-50 dark:bg-[#0a111f] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-grid-dark dark:bg-grid-white pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-overline text-dfw-red-500 tracking-luxury mb-4"
                        >
                            Getting Here
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-display font-header text-dfw-navy dark:text-white uppercase mb-6"
                        >
                            Easy Drive from {city}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 glass-premium px-6 py-3 rounded-full"
                        >
                            <MapPin size={16} className="text-dfw-red-400" />
                            <span className="text-body text-dfw-navy dark:text-white font-medium">{address}</span>
                        </motion.div>
                    </div>

                    {/* Directions List */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {directions.map((dir, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="relative bg-white dark:bg-white/[0.02] p-8 rounded-3xl border border-gray-100 dark:border-white/[0.06] hover:border-dfw-red-500/30 dark:hover:border-dfw-red-500/30 transition-colors duration-500">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                        <h3 className="text-heading font-header text-dfw-navy dark:text-white flex items-center gap-3">
                                            <span className="w-10 h-10 rounded-xl bg-dfw-red-500/10 border border-dfw-red-500/20 flex items-center justify-center">
                                                <MapPin size={18} className="text-dfw-red-500" />
                                            </span>
                                            {dir.area}
                                        </h3>

                                        <div className="flex items-center gap-4">
                                            <span className="glass-premium px-4 py-2 rounded-lg text-caption font-mono text-dfw-navy dark:text-white">
                                                {dir.distance}
                                            </span>
                                            <span className="glass-premium px-4 py-2 rounded-lg text-caption font-mono text-dfw-red-500 font-medium">
                                                {dir.time}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Steps Timeline */}
                                    <ol className="relative border-l-2 border-gray-200 dark:border-white/10 ml-5 space-y-4">
                                        {dir.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="pl-8 relative">
                                                {/* Timeline dot */}
                                                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0a111f] border-2 border-gray-300 dark:border-white/20 group-hover:border-dfw-red-500/50 transition-colors duration-500">
                                                    <span className="absolute inset-1 rounded-full bg-dfw-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </span>

                                                <span className="text-body text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {step}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Google Maps CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 text-center"
                    >
                        <Link
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium group inline-flex items-center gap-3 px-8 py-4 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy text-overline tracking-luxury rounded-xl shadow-luxury-lg focus-premium"
                        >
                            Open in Google Maps
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
