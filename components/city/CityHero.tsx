'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, MapPin, Star } from 'lucide-react'

interface CityHeroProps {
    city: string
    distance: string
    heroImage?: string
    tagline?: string
}

export default function CityHero({ city, distance, heroImage = '/images/hero/sports-action.webp', tagline }: CityHeroProps) {
    return (
        <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#050911] overflow-hidden">
            {/* Dynamic Background with Parallax Feel */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("${heroImage}")` }}
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050911] via-[#050911]/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050911] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
                {/* Location Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-dfw-red/40 bg-dfw-red/10 backdrop-blur-2xl text-dfw-red font-mono text-[10px] uppercase tracking-[0.25em] mb-4 hover:bg-dfw-red/20 transition-colors cursor-default"
                >
                    <MapPin size={12} />
                    <span>Serving {city}, TX</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
                >
                    Indoor Sports <br />
                    <span className="text-white">Near {city}</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4"
                >
                    <p className="max-w-xl text-gray-300 text-base md:text-lg font-light leading-relaxed border-l-2 border-dfw-red pl-6 backdrop-blur-sm">
                        {tagline || `World-class cricket, badminton, and soccer facilities just a short drive from ${city}.`}
                    </p>

                    {/* Drive Time Stats */}
                    <div className="hidden md:flex gap-6 border-l border-white/10 pl-6">
                        <div>
                            <div className="text-xl font-header font-bold text-white">{distance}</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Drive Time</div>
                        </div>
                        <div>
                            <div className="text-xl font-header font-bold text-white">5AM-11PM</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Open Daily</div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-row flex-wrap gap-4 mt-6"
                >
                    <Link
                        href="/rentals"
                        className="group relative px-6 py-3 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(214,40,40,0.4)] transition-all hover:shadow-[0_0_60px_rgba(214,40,40,0.6)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                        <span className="relative flex items-center gap-3">Book a Court <ChevronRight size={14} /></span>
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all flex items-center gap-3"
                    >
                        <MapPin size={14} /> Get Directions
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
