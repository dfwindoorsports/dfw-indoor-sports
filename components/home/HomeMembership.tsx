'use client'

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeMembership: React.FC = () => {
   return (
      <section aria-label="Membership plans" className="py-24 md:py-32 bg-[#050911] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dfw-red/10 to-transparent pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            <div className="flex flex-col lg:flex-row items-start gap-16">

               {/* Left Text */}
               <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Membership Plans</span>
                  <h2 className="text-4xl md:text-6xl font-header font-bold text-white uppercase leading-none mb-6">
                     Make It Your <br /> <span className="text-dfw-red">Home Base</span>
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg font-light">
                     Membership isn&apos;t just about saving money (though you&apos;ll save a lot). It&apos;s about removing barriers — no counting hours, no hesitation. Just come and play whenever inspiration strikes.
                  </p>

                  {/* Social proof inline */}
                  <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                     <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                           <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-dfw-red to-orange-500 border-2 border-[#050911] flex items-center justify-center text-white text-[10px] font-bold">
                              {String.fromCharCode(64 + i)}
                           </div>
                        ))}
                     </div>
                     <p className="text-sm text-gray-400">Joined by <span className="text-white font-semibold">500+ members</span> across DFW</p>
                  </div>

                  <div className="flex flex-col gap-4 mb-10">
                     {[
                        "Unlimited Court & Lane Access",
                        "No Additional Per-Visit Fees",
                        "Open Daily 5 AM – 11 PM",
                        "All Equipment Provided Free"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><Check size={14} strokeWidth={3} /></div>
                           <p className="text-sm font-medium text-white tracking-wide">{item}</p>
                        </div>
                     ))}
                  </div>
                  <Link href="/memberships" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-gray-200 transition-colors">
                     Compare All Plans <ArrowRight size={14} />
                  </Link>
               </motion.div>

               {/* Right Cards — 3 tiers for price range visibility */}
               <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-3 gap-5">

                  {/* Badminton — Entry level */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                     <h3 className="text-lg font-header font-bold text-white uppercase mb-1">Badminton</h3>
                     <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">Half-Yearly</p>
                     <div className="text-3xl font-header font-bold text-white mb-1">$70<span className="text-sm font-sans font-normal text-gray-400">/mo</span></div>
                     <ul className="text-xs text-gray-400 space-y-2 mt-4 mb-6">
                        <li className="flex items-center gap-2"><Check size={12} className="text-green-500" /> Unlimited badminton</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-green-500" /> No court fees</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-gray-600" /> Cricket not included</li>
                     </ul>
                     <Link href="/memberships" className="block w-full py-2.5 border border-white/20 text-white font-bold uppercase text-[11px] rounded-lg hover:bg-white hover:text-dfw-navy transition-colors text-center">Details</Link>
                  </motion.div>

                  {/* Gold Card — Most popular */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-gradient-to-br from-dfw-red to-red-800 p-6 rounded-2xl shadow-2xl relative overflow-hidden border border-white/10 md:-translate-y-4"
                  >
                     <div className="absolute top-0 right-0 bg-white text-dfw-red text-[10px] font-bold uppercase px-2.5 py-1 rounded-bl-xl">Most Popular</div>
                     <h3 className="text-lg font-header font-bold text-white uppercase mb-1">Gold</h3>
                     <p className="text-[11px] text-white/70 uppercase tracking-widest mb-4">All Access</p>
                     <div className="text-3xl font-header font-bold text-white mb-1">$109<span className="text-sm font-sans font-normal text-white/60">/mo</span></div>
                     <ul className="text-xs text-white/80 space-y-2 mt-4 mb-6">
                        <li className="flex items-center gap-2"><Check size={12} className="text-white" /> Unlimited all sports</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-white" /> Free bowling machines</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-white" /> Priority booking</li>
                     </ul>
                     <Link href="/memberships" className="block w-full py-2.5 bg-black/20 text-white font-bold uppercase text-[11px] rounded-lg hover:bg-black/40 transition-colors border border-white/10 text-center">Details</Link>
                  </motion.div>

                  {/* Family Gold */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                     <h3 className="text-lg font-header font-bold text-white uppercase mb-1">Family Gold</h3>
                     <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">2 Adults + 2 Kids</p>
                     <div className="text-3xl font-header font-bold text-white mb-1">$129<span className="text-sm font-sans font-normal text-gray-400">/mo</span></div>
                     <ul className="text-xs text-gray-400 space-y-2 mt-4 mb-6">
                        <li className="flex items-center gap-2"><Check size={12} className="text-green-500" /> Everything in Gold</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-green-500" /> 4 family members</li>
                        <li className="flex items-center gap-2"><Check size={12} className="text-green-500" /> Best value per person</li>
                     </ul>
                     <Link href="/memberships" className="block w-full py-2.5 border border-white/20 text-white font-bold uppercase text-[11px] rounded-lg hover:bg-white hover:text-dfw-navy transition-colors text-center">Details</Link>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomeMembership;