'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
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
    const containerRef = React.useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-50px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: 'blur(4px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.7,
                
            }
        }
    }

    return (
        <section ref={containerRef} className="py-24 sm:py-32 bg-gray-50 dark:bg-[#050911] relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark pointer-events-none" />

            {/* Gradient accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-dfw-red-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-overline text-dfw-red-500 tracking-luxury mb-4"
                    >
                        Why Choose Us
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-display font-header text-dfw-navy dark:text-white uppercase mb-6"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature, idx) => {
                        const IconComponent = iconMap[feature.icon]

                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="relative h-full bg-white dark:bg-white/[0.02] p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-white/[0.06] hover:border-dfw-red-500/30 dark:hover:border-dfw-red-500/30 hover-lift transition-colors duration-500">
                                    {/* Subtle gradient on hover */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-dfw-red-500/0 to-transparent group-hover:from-dfw-red-500/5 transition-all duration-500" />

                                    <div className="relative flex gap-5">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-14 h-14 rounded-2xl bg-dfw-red-500/10 dark:bg-dfw-red-500/10 border border-dfw-red-500/20 flex items-center justify-center group-hover:bg-dfw-red-500 group-hover:border-dfw-red-500 group-hover:shadow-luxury-red-sm transition-all duration-500">
                                                {IconComponent && (
                                                    <IconComponent
                                                        className="w-6 h-6 text-dfw-red-500 group-hover:text-white transition-colors duration-300"
                                                        strokeWidth={1.5}
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-heading font-header text-dfw-navy dark:text-white uppercase mb-3 group-hover:text-dfw-red-600 dark:group-hover:text-dfw-red-400 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-body text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
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
