'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, MapPin, ChevronDown } from 'lucide-react'

interface CityHeroProps {
    city: string
    distance: string
    heroImage?: string
    tagline?: string
}

export default function CityHero({ city, distance, heroImage = '/images/hero/sports-action.webp', tagline }: CityHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

    // Smooth spring physics
    const smoothY = useSpring(contentY, { stiffness: 100, damping: 30 })
    const smoothOpacity = useSpring(contentOpacity, { stiffness: 100, damping: 30 })

    // Stagger animation config
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
            }
        }
    }

    const fadeUpItem = {
        hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                
            }
        }
    }

    return (
        <div ref={containerRef} className="relative w-full h-[100vh] min-h-[700px] bg-[#020408] overflow-hidden">
            {/* ═══════════════════════════════════════════════════════════════
                BACKGROUND LAYERS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="absolute inset-0 z-0">
                {/* Parallax Background Image */}
                <motion.div
                    style={{ y: backgroundY, scale: backgroundScale }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${heroImage}")` }}
                    />
                </motion.div>

                {/* Premium Gradient Stack */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/95 via-[#020408]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-dfw-red-500/15 via-transparent to-blue-600/5 mix-blend-overlay" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 noise-overlay opacity-50" />
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                AMBIENT LIGHTING ORBS
            ═══════════════════════════════════════════════════════════════ */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                    className="absolute -top-[30%] -right-[15%] w-[800px] h-[800px] bg-dfw-red-500/20 rounded-full blur-[150px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 3, delay: 1 }}
                    className="absolute top-[40%] -left-[15%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
                />
                {/* Subtle center glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px]" />
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                MAIN CONTENT
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
                style={{ y: smoothY, opacity: smoothOpacity }}
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
            >
                <motion.div
                    className="max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Location Badge */}
                    <motion.div variants={fadeUpItem}>
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-premium mb-8 group cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dfw-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-dfw-red-500"></span>
                            </span>
                            <MapPin size={14} className="text-dfw-red-400" />
                            <span className="text-overline text-white/90 tracking-luxury">Serving {city}, TX</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUpItem}
                        className="text-display-xl font-header text-white uppercase mb-6 text-balance"
                    >
                        <span className="block text-gradient-white">Indoor Sports</span>
                        <span className="block mt-2">
                            <span className="text-white/40 mr-4">Near</span>
                            <span className="relative">
                                <span className="text-gradient-red">{city}</span>
                                {/* Underline accent */}
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-dfw-red-500 to-dfw-red-600 origin-left rounded-full"
                                />
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subheadline with Stats */}
                    <motion.div
                        variants={fadeUpItem}
                        className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12"
                    >
                        {/* Left bar accent + text */}
                        <div className="flex gap-6 pl-6 border-l-2 border-dfw-red-500/50">
                            <p className="text-body-lg text-white/70 font-light max-w-xl leading-relaxed">
                                {tagline || `World-class cricket, badminton, and soccer facilities just a short drive from ${city}.`}
                            </p>
                        </div>

                        {/* Distance badge */}
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                            <div className="glass-premium px-6 py-4 rounded-xl">
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl font-header font-bold text-white tabular-nums tracking-tight">{distance}</span>
                                    <span className="text-overline text-white/50 tracking-luxury mt-1">Drive Time</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpItem}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/rentals"
                            className="btn-premium group relative px-8 py-4 bg-dfw-red-500 text-white text-overline tracking-luxury rounded-lg overflow-hidden shadow-luxury-red focus-premium"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Book a Court
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="group px-8 py-4 glass-premium text-white text-overline tracking-luxury rounded-lg hover:bg-white/10 transition-all duration-400 flex items-center gap-3 focus-premium"
                        >
                            Get Directions
                            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-dfw-red-500/20 transition-colors">
                                <MapPin size={12} className="text-dfw-red-400" />
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                SCROLL INDICATOR
            ═══════════════════════════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <span className="text-overline text-white/40 tracking-luxury">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-12 rounded-full border border-white/20 flex items-start justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-dfw-red-500 rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020408] to-transparent z-[5]" />
        </div>
    )
}
