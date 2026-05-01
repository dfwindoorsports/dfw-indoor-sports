'use client'

import React from 'react';
import { Check, Star, ArrowRight, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const CricketPricing: React.FC = () => {
   return (
      <section aria-label="Cricket pricing" className="py-24 md:py-32 bg-white transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">

            {/* Cricket Players Practice Image */}
            <motion.div
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <OptimizedImage
                     src="/images/cricket/cricket-pricing-players-practice.webp"
                     alt="Cricket players practicing in the lanes at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cricket/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Flexible Pricing for Every Player</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Drop-In • Memberships • Team Packages</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="text-center max-w-3xl mx-auto mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-header font-bold text-cricket uppercase mb-6">Lane Rental Rates</h2>
               <p className="text-gray-500">Flexible pricing for casual hits or serious daily training.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

               {/* Hourly */}
               <motion.div
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
               >
                  <div className="mb-4">
                     <h3 className="text-xl font-header font-bold text-gray-900 uppercase">Lane Rental</h3>
                     <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Pay Per Session</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-gray-100">
                     <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-header font-bold text-cricket">View Rates</span>
                        <span className="text-sm text-gray-500 font-medium"></span>
                     </div>
                     <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12} /> Check RunSwift for real-time pricing</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> 1 ICC Lane</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> <strong>FREE</strong> Bowling Machine</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> Balls & Protective Gear</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> Up to 6 Players</li>
                  </ul>
                  <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="w-full py-4 border-2 border-cricket text-cricket font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-cricket hover:text-white transition-colors block text-center">Book Lane</a>
               </motion.div>

               {/* Membership - Highlighted */}
               <motion.div
                  transition={{ delay: 0.1 }}
                  className="bg-cricket rounded-xl border border-cricket p-8 shadow-2xl relative transform md:-translate-y-6 flex flex-col z-10"
               >
                  <div className="absolute top-0 right-0 bg-dfw-red-700 text-white text-\[11px\] font-bold uppercase px-4 py-1.5 rounded-bl-lg shadow-sm">Best Value</div>
                  <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

                  <div className="mb-4 relative z-10">
                     <h3 className="text-2xl font-header font-bold text-white uppercase">Cricket Unlimited</h3>
                     <p className="text-xs font-mono text-green-200 uppercase tracking-widest mt-1">Monthly Membership</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-green-800 relative z-10">
                     <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-header font-bold text-white">$129</span>
                        <span className="text-sm text-green-200 font-medium">/mo</span>
                     </div>
                     <p className="text-xs text-green-300/80 mt-2">Monthly subscription</p>
                  </div>

                  <div className="bg-white/10 p-3 rounded mb-6 border border-white/10 relative z-10">
                     <p className="text-xs text-green-100 font-bold flex items-center gap-2"><Star size={12} className="text-yellow-400" /> Or get GOLD (Cricket + Badminton) for $109/mo</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow relative z-10">
                     <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> <strong className="text-white">UNLIMITED</strong> Lane Bookings</li>
                     <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> Bowling Machine Included</li>
                     <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> Open Daily 5AM - 11PM</li>
                     <li className="flex gap-3 text-sm text-green-100"><Check size={16} className="text-white" /> 10% Store & Academy Discount</li>
                  </ul>
                  <Link href="/memberships" className="w-full py-4 bg-dfw-red-700 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-red-700 transition-colors shadow-lg relative z-10 block text-center">Start Membership</Link>
               </motion.div>

               {/* Team Package */}
               <motion.div
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 relative group flex flex-col"
               >
                  <div className="mb-4">
                     <h3 className="text-xl font-header font-bold text-gray-900 uppercase">GOLD Membership</h3>
                     <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Cricket + Badminton</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-gray-100">
                     <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-header font-bold text-cricket">$109</span>
                        <span className="text-sm text-gray-500 font-medium">/mo</span>
                     </div>
                     <p className="text-xs text-gray-400 mt-2">Half-yearly subscription</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> Unlimited Cricket Lanes</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> Unlimited Badminton Courts</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> 10% Store Merchandise Discount</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-green-600" /> 10% Academy Coaching Discount</li>
                  </ul>
                  <Link href="/contact" className="w-full py-4 border-2 border-gray-200 text-gray-600 font-bold uppercase text-xs tracking-widest rounded-lg hover:border-cricket hover:text-cricket transition-colors flex items-center justify-center gap-2">
                     <Users size={16} /> Request Quote
                  </Link>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default CricketPricing;