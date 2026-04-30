'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Trophy, Users, Shield, Target, GraduationCap, Car, Clock, Heart, Zap, Star, Home, Building, Plane, Briefcase } from 'lucide-react'

// Icon map to resolve string names to components
const iconMap = {
    CheckCircle, Trophy, Users, Shield, Target, GraduationCap, Car, Clock, Heart, Zap, Star, Home, Building, Plane, Briefcase
}

interface Feature {
    title: string
    description: string
    icon: keyof typeof iconMap
}

interface CityFeaturesProps {
    title: string
    description: string
    features: Feature[]
}

export default function CityFeatures({ title, description, features }: CityFeaturesProps) {
    return (
        <section className="py-20 bg-gray-50 dark:bg-[#050911] relative overflow-hidden">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dfw-red/40 bg-dfw-red/10 backdrop-blur-2xl text-dfw-red font-mono text-[10px] uppercase tracking-[0.25em] mb-4"
                    >
                        Why Choose Us
                    </motion.span>

                    <motion.h2
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase tracking-tighter mb-4"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, idx) => {
                        const IconComponent = iconMap[feature.icon]

                        return (
                            <motion.div
                                key={idx}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-100 dark:border-white/10 hover:border-dfw-red/30 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex gap-5">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-dfw-red/10 border border-dfw-red/20 flex items-center justify-center group-hover:bg-dfw-red group-hover:border-dfw-red transition-all duration-300">
                                                {IconComponent && (
                                                    <IconComponent
                                                        className="w-5 h-5 text-dfw-red group-hover:text-white transition-colors"
                                                        strokeWidth={1.5}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-header font-bold text-dfw-navy dark:text-white uppercase tracking-tight mb-2 group-hover:text-dfw-red transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
