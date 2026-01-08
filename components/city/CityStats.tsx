'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, MapPin, GraduationCap, Zap, Star, Heart, Home, Building, Plane, Briefcase, Target } from 'lucide-react'

// Icon map to resolve string names to components
const iconMap = {
    Car, Clock, Phone, DollarSign, Trophy, Users, Award, Shield, MapPin, GraduationCap, Zap, Star, Heart, Home, Building, Plane, Briefcase, Target
}

interface StatProps {
    icon: keyof typeof iconMap
    value: string
    label: string
    sublabel?: string
}

// Animated counter component for numeric values
function AnimatedValue({ value }: { value: string }) {
    // Check if value contains a number we can animate
    const numMatch = value.match(/^(\d+)(.*)$/)

    if (numMatch) {
        const num = parseInt(numMatch[1])
        const suffix = numMatch[2] || ''

        return (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="tabular-nums"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {num}
                </motion.span>
                {suffix}
            </motion.span>
        )
    }

    return <span>{value}</span>
}

export default function CityStats({ stats }: { stats: StatProps[] }) {
    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

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
            scale: 0.95,
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
        <section ref={containerRef} className="relative z-20 -mt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {stats.map((stat, index) => {
                        const IconComponent = iconMap[stat.icon]

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative glass-premium p-6 sm:p-8 rounded-2xl hover-lift overflow-hidden">
                                    {/* Gradient border on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 rounded-2xl border border-dfw-red-500/30" />
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-dfw-red-500/0 via-transparent to-dfw-red-500/0 group-hover:from-dfw-red-500/10 group-hover:to-transparent transition-all duration-500" />

                                    <div className="relative flex flex-col items-center text-center">
                                        {/* Icon container */}
                                        <div className="relative mb-4">
                                            {/* Glow ring */}
                                            <div className="absolute inset-0 rounded-full bg-dfw-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />

                                            <div className="relative p-4 bg-dfw-red-500/10 rounded-2xl border border-dfw-red-500/20 group-hover:bg-dfw-red-500/20 group-hover:border-dfw-red-500/40 group-hover:scale-110 transition-all duration-500">
                                                {IconComponent && (
                                                    <IconComponent
                                                        className="w-6 h-6 text-dfw-red-400 group-hover:text-dfw-red-300 transition-colors duration-300"
                                                        strokeWidth={1.5}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Value */}
                                        <h3 className="text-2xl sm:text-3xl font-header font-bold text-white mb-1 tracking-tight">
                                            <AnimatedValue value={stat.value} />
                                        </h3>

                                        {/* Label */}
                                        <p className="text-overline text-white/70 tracking-luxury mb-1">
                                            {stat.label}
                                        </p>

                                        {/* Sublabel */}
                                        {stat.sublabel && (
                                            <p className="text-caption text-white/40">
                                                {stat.sublabel}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
