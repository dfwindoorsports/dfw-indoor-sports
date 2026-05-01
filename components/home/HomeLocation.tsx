'use client'

import React from 'react';
import { MapPin, ArrowRight, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const driveTimeData = [
   { city: 'Fort Worth', time: '10–15 min' },
   { city: 'Arlington', time: '15–20 min' },
   { city: 'Southlake', time: '15–25 min' },
   { city: 'West Dallas', time: '20–30 min' },
   { city: 'Plano', time: '35–40 min' },
   { city: 'Frisco', time: '40–45 min' },
];

const HomeLocation: React.FC = () => {
   return (
      <section aria-label="Our location" className="bg-white py-24 md:py-32 border-b border-gray-100">
         <div className="container mx-auto px-4 md:px-6">

            {/* Building Exterior Image - Wayfinding */}
            <motion.div
               className="mb-12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl">
                  <OptimizedImage
                     src="/images/home/home-location-building-exterior.webp"
                     alt="DFW Indoor Sports building exterior with parking lot and signage in Fort Worth Texas"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <div>
                        <p className="text-white font-header font-bold uppercase text-lg">Find Us Easily</p>
                        <p className="text-white/70 text-xs font-mono">16230 Three Wide Dr Suite 200, Fort Worth TX 76177</p>
                     </div>
                     <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-white text-xs font-bold uppercase">
                        Free Parking
                     </div>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Central Location</span>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">
                     Serving All of DFW
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                     Strategically located in Fort Worth with easy I-35W highway access. Members drive from across the metroplex because the facility quality makes the trip worthwhile.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-4 flex items-center gap-2">
                        <Car size={16} className="text-dfw-red" aria-hidden="true" /> Drive Times from Major Cities
                     </h3>
                     {/* Single column layout for clean readability */}
                     <div className="space-y-0">
                        {driveTimeData.map((item, i) => (
                           <div key={i} className="flex justify-between py-2.5 border-b border-gray-200 last:border-0 text-sm text-gray-600">
                              <span>{item.city}</span>
                              <span className="font-medium text-dfw-navy">{item.time}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <a href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy hover:border-dfw-navy transition-all w-max">
                     Get Directions on Google Maps <ArrowRight size={14} />
                  </a>
               </motion.div>

               <motion.div
                  className="lg:w-1/2 h-[400px] w-full rounded-lg relative overflow-hidden shadow-inner"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  {/* Map loading state */}
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-0">
                     <div className="text-center text-gray-400">
                        <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
                        <p className="text-sm">Loading map…</p>
                     </div>
                  </div>
                  <iframe
                     src="https://www.google.com/maps?q=DFW+Indoor+Sports+16230+Three+Wide+Dr+Suite+200+Fort+Worth+TX+76177&output=embed"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="DFW Indoor Sports Location — 16230 Three Wide Dr, Fort Worth TX"
                     className="absolute inset-0 w-full h-full z-10"
                  ></iframe>
                  <noscript>
                     <a href="https://maps.google.com/?q=16230+Three+Wide+Drive+Suite+200,+Fort+Worth,+TX+76177" target="_blank" rel="noreferrer">
                        View DFW Indoor Sports on Google Maps
                     </a>
                  </noscript>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default HomeLocation;