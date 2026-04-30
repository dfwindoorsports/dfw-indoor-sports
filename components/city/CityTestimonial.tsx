'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface TestimonialProps {
 quote: string
 author: string
 location: string
}

export default function CityTestimonial({ quote, author, location }: TestimonialProps) {
 return (
 <section className="py-20 bg-[#050911] relative overflow-hidden">
 {/* Subtle texture */}
 <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay" />

 <div className="container mx-auto px-4 md:px-6 relative z-10">
 <div className="max-w-3xl mx-auto text-center">
 {/* Stars */}
 <motion.div
 className="flex justify-center gap-1 mb-6"
 >
 {[...Array(5)].map((_, i) => (
 <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
 ))}
 </motion.div>

 {/* Quote */}
 <motion.blockquote
 transition={{ delay: 0.1 }}
 >
 <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed mb-8 font-light">
"{quote}"
 </p>
 </motion.blockquote>

 {/* Author */}
 <motion.div
 transition={{ delay: 0.2 }}
 className="flex flex-col items-center gap-1"
 >
 {/* Avatar */}
 <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-2">
 <span className="text-lg font-header font-bold text-white">
 {author.split(' ').map(n => n[0]).join('')}
 </span>
 </div>

 <div className="text-sm font-bold text-white uppercase tracking-wider">
 {author}
 </div>
 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
 {location}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 )
}
