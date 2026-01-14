'use client'

import React from 'react';
import { MapPin, ArrowRight, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const HomeLocation: React.FC = () => {
   return (
      <section className="bg-white dark:bg-[#020408] py-24 border-b border-gray-100 dark:border-white/5 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">

            {/* Building Exterior Image - Wayfinding */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl">
                  <OptimizedImage
                     src="/images/home/home-location-building-exterior.webp"
                     alt="DFW Indoor Sports building exterior with parking lot and signage"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <div>
                        <p className="text-white font-header font-bold uppercase text-lg">Find Us Easily</p>
                        <p className="text-white/70 text-xs font-mono">16230 Three Wide Dr, Fort Worth</p>
                     </div>
                     <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-bold uppercase">
                        Free Parking
                     </div>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
               >
                  <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Central Location</span>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                     Serving All of DFW
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                     Strategically located in Fort Worth with easy highway access. Our members drive from Plano, Frisco, and Dallas because the facility quality makes the trip worthwhile.
                  </p>

                  <div className="bg-gray-50 dark:bg-[#0A111F] p-6 rounded-lg border border-gray-200 dark:border-white/10 mb-8 transition-colors">
                     <h3 className="font-bold text-dfw-navy dark:text-white uppercase text-sm mb-4 flex items-center gap-2"><Car size={16} className="text-dfw-red" aria-hidden="true" /> Drive Times</h3>
                     <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Fort Worth</span> <span>10-15m</span></div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Arlington</span> <span>15-20m</span></div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>Southlake</span> <span>15-25m</span></div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2"><span>West Dallas</span> <span>20-30m</span></div>
                     </div>
                  </div>

                  <a href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all w-max">
                     Get Directions on Google Maps <ArrowRight size={14} />
                  </a>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 h-[400px] w-full rounded-lg relative overflow-hidden shadow-inner group"
               >
                  <iframe
                     src="https://www.google.com/maps?q=DFW+Indoor+Sports+16230+Three+Wide+Dr+Suite+200+Fort+Worth+TX+76177&output=embed"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="DFW Indoor Sports Location"
                     className="absolute inset-0 w-full h-full"
                  ></iframe>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default HomeLocation;