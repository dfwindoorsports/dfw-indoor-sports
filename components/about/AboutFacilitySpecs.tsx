'use client'

import React from 'react';
import { Building2, Thermometer, Lightbulb, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import Image from 'next/image';

const AboutFacilitySpecs: React.FC = () => {
   return (
      <section aria-label="Facility specifications" className="bg-gray-50 py-24 relative transition-colors duration-300">
         <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-dfw-red to-transparent"></div>
         <div className="container mx-auto px-4 md:px-6">

            {/* Facility Collage Banner */}
            <motion.div
               className="mb-16"
            >
               <div className="relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl">
                  <OptimizedImage
                     src="/images/about/about-facilityspecs-collage.webp"
                     alt="DFW Indoor Sports facility collage showcasing cricket, badminton, soccer, and lounge areas"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dfw-navy/80 via-dfw-navy/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <p className="text-white font-header font-bold text-2xl md:text-3xl uppercase">50,000 sq ft of Excellence</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Purpose-Built • Climate Controlled • Professional Grade</p>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-16 items-start">
               {/* Left: Sticky Text */}
               <div className="md:w-1/3 md:sticky md:top-32">
                  <motion.div
                  >
                     <div className="inline-flex items-center gap-2 mb-4">
                        <Building2 size={16} className="text-dfw-red" />
                        <span className="text-gray-400 font-mono text-xs font-bold uppercase tracking-widest">Infrastructure v2.0</span>
                     </div>
                     <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase leading-[0.95] mb-6">
                        Designed for <br /> Performance, <br /> Built for <span className="text-dfw-red">Comfort.</span>
                     </h2>
                     <p className="text-gray-500 leading-relaxed text-sm mb-8 border-l-2 border-gray-200 pl-4">
                        50,000 square feet of purpose-built athletic excellence. From professional turf technology to professional safety padding, every detail is calibrated for safety and performance.
                     </p>

                     <div className="space-y-4">
                        <div className="flex items-center gap-4 group">
                           <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dfw-navy group-hover:bg-dfw-red group-hover:text-white transition-colors">
                              <Thermometer size={18} />
                           </div>
                           <div>
                              <p className="font-bold text-dfw-navy uppercase text-xs">Climate Control</p>
                              <p className="text-xs text-gray-400">72°F Constant Year-Round</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                           <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dfw-navy group-hover:bg-dfw-red group-hover:text-white transition-colors">
                              <Lightbulb size={18} />
                           </div>
                           <div>
                              <p className="font-bold text-dfw-navy uppercase text-xs">Pro Lighting</p>
                              <p className="text-xs text-gray-400">500 Lux LED / Anti-Glare</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                           <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dfw-navy group-hover:bg-dfw-red group-hover:text-white transition-colors">
                              <Wifi size={18} />
                           </div>
                           <div>
                              <p className="font-bold text-dfw-navy uppercase text-xs">Connected</p>
                              <p className="text-xs text-gray-400">High-speed WiFi & Video Analysis</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* Right: The Facility Grid (Bento) */}
               <div className="md:w-2/3 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Cricket */}
                     <motion.div
                        className="md:col-span-2 relative h-64 rounded-lg overflow-hidden group border border-white/10"
                     >
                        <Image src="/images/facilities/cricket-lanes.webp" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Cricket lanes at DFW Indoor Sports" sizes="(max-width: 768px) 100vw, 66vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                           <h3 className="font-header text-2xl uppercase mb-1">Cricket Complex</h3>
                           <p className="text-xs font-mono text-gray-300">6 Lanes // Auto-Feeders // Analysis</p>
                        </div>
                     </motion.div>

                     {/* Badminton */}
                     <motion.div
                        transition={{ delay: 0.1 }}
                        className="relative h-64 rounded-lg overflow-hidden group border border-white/10"
                     >
                        <Image src="/images/hero/badminton-hero.webp" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Badminton courts at DFW Indoor Sports" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                           <h3 className="font-header text-2xl uppercase mb-1">Badminton Hall</h3>
                           <p className="text-xs font-mono text-gray-300">6 Courts // Pro Floor</p>
                        </div>
                     </motion.div>

                     {/* Lounge */}
                     <motion.div
                        transition={{ delay: 0.2 }}
                        className="relative h-64 rounded-lg overflow-hidden group border border-white/10"
                     >
                        <Image src="/images/facilities/lounge.webp" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Player lounge and recovery area" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                           <h3 className="font-header text-2xl uppercase mb-1">Player Lounge</h3>
                           <p className="text-xs font-mono text-gray-300">Recovery // Social // Pro Shop</p>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutFacilitySpecs;