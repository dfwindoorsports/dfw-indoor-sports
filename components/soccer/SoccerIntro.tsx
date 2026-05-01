'use client'

import React from 'react';
import { DollarSign, CheckCircle2, MapPin, Clock, Shield, ArrowRight, Sun, CloudRain, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const SoccerIntro: React.FC = () => {
   return (
      <section aria-label="Indoor soccer field details" className="py-24 md:py-32 bg-white relative transition-colors duration-300">
         {/* Background Noise */}
         <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[0.03]"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Soccer Field Overview Image */}
            <motion.div
               className="mb-16"
            >
               <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                     src="/images/soccer/soccer-intro-field-overview.webp"
                     alt="Indoor 5-a-side soccer field with professional artificial turf at DFW Indoor Sports"
                     fill
                     className="object-cover"
                     priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soccer/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Professional Indoor Turf</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Climate-Controlled • Year-Round Play</p>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

               {/* Left: Introduction Narrative */}
               <motion.div
                  transition={{ duration: 0.6 }}
                  className="lg:w-3/5"
               >
                  <div className="inline-flex items-center gap-2 mb-6">
                     <div className="h-[1px] w-8 bg-emerald-600"></div>
                     <span className="text-emerald-900 font-mono text-xs font-bold uppercase tracking-widest">The Texas Challenge</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-header font-bold text-soccer uppercase leading-[0.95] mb-8">
                     Why Indoor Soccer Training <br /> <span className="text-emerald-600">Transforms Players</span>
                  </h2>

                  <div className="prose prose-lg text-gray-600 leading-relaxed mb-10 font-light">
                     <p>
                        Texas soccer players know the challenge: summer heat reaching <strong>105°F</strong> makes outdoor training dangerous. Spring thunderstorms cancel practice without warning. Winter cold affects ball feel and muscle performance. Field availability conflicts with multiple teams competing for limited outdoor space.
                     </p>
                     <p className="border-l-4 border-emerald-500 pl-6 italic text-gray-800 font-medium my-8 bg-emerald-50/50 py-4 rounded-r-md">
                        "Indoor soccer eliminates every obstacle while providing advantages impossible outdoors."
                     </p>
                     <p>
                        Our climate-controlled facility maintains <strong className="text-soccer">perfect 72°F conditions</strong> enabling year-round consistent training. professional artificial turf delivers reliable ball roll and player traction regardless of weather. Small-sided game formats (5v5, 6v6, 7v7) maximize touches on ball—critical for technical development.
                     </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <Sun className="mx-auto text-orange-500 mb-2" size={24} />
                        <p className="text-\[11px\] font-bold uppercase text-gray-500">No Heat Exhaustion</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <CloudRain className="mx-auto text-blue-500 mb-2" size={24} />
                        <p className="text-\[11px\] font-bold uppercase text-gray-500">No Rainouts</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <Wind className="mx-auto text-gray-500 mb-2" size={24} />
                        <p className="text-\[11px\] font-bold uppercase text-gray-500">No Wind Interference</p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Quick Answer Box (AEO Optimized) */}
               <motion.div
                  transition={{ duration: 0.6 }}
                  className="lg:w-2/5 w-full"
               >
                  <div className="bg-soccer p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden text-white border border-white/10 group">
                     {/* Abstract Decor */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                     <h3 className="text-xl font-header font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4 relative z-10 flex justify-between items-center">
                        Quick Facts
                     </h3>

                     <ul className="space-y-6 text-sm relative z-10">
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><DollarSign size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-emerald-200 uppercase text-\[11px\] tracking-widest mb-1">Pricing</span>
                              <p className="font-medium">View rates on RunSwift</p>
                              <p className="text-xs text-gray-400 mt-1">GOLD membership (Cricket + Badminton) $109/mo</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><CheckCircle2 size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-emerald-200 uppercase text-\[11px\] tracking-widest mb-1">Field Size</span>
                              <p className="font-medium">Indoor soccer field</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><Shield size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-emerald-200 uppercase text-\[11px\] tracking-widest mb-1">Surface</span>
                              <p className="font-medium">professional artificial turf</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><MapPin size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-emerald-200 uppercase text-\[11px\] tracking-widest mb-1">Location</span>
                              <p className="font-medium">16230 Three Wide Dr Suite 200, Fort Worth, TX</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start group/item">
                           <div className="mt-1 p-2 bg-white/10 rounded group-hover/item:bg-emerald-500 transition-colors"><Clock size={16} className="text-white" /></div>
                           <div>
                              <span className="block font-bold text-emerald-200 uppercase text-\[11px\] tracking-widest mb-1">Hours</span>
                              <p className="font-medium">Mon-Sun 5:00 AM - 11:00 PM</p>
                           </div>
                        </li>
                     </ul>

                     <a
                        href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer"
                        className="w-full mt-10 py-4 bg-emerald-500 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-emerald-400 transition-colors shadow-lg relative z-10 flex items-center justify-center gap-2 group/btn"
                     >
                        Book Field Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default SoccerIntro;