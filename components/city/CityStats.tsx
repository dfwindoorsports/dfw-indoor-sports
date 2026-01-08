'use client'

import React from 'react'
import { motion } from 'framer-motion'
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

export default function CityStats({ stats }: { stats: StatProps[] }) {
    return (
        <section className="relative z-20 -mt-16 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {stats.map((stat, index) => {
                        const IconComponent = iconMap[stat.icon]

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col items-center text-center">
                                        {/* Icon */}
                                        <div className="p-3 bg-dfw-red/10 rounded-lg border border-dfw-red/20 mb-4 group-hover:bg-dfw-red/20 transition-colors">
                                            {IconComponent && (
                                                <IconComponent
                                                    className="w-5 h-5 text-dfw-red"
                                                    strokeWidth={1.5}
                                                />
                                            )}
                                        </div>

                                        {/* Value */}
                                        <h3 className="text-2xl font-header font-bold text-white mb-1">
                                            {stat.value}
                                        </h3>

                                        {/* Label */}
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                                            {stat.label}
                                        </p>

                                        {/* Sublabel */}
                                        {stat.sublabel && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                {stat.sublabel}
                                            </p>
                                        )}
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
