'use client'

import React from 'react';
import { Check, Star, ArrowRight, Users, Clock, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const SoccerPricing: React.FC = () => {
   return (
      <section aria-label="Soccer field pricing" className="py-24 md:py-32 bg-white transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">

            {/* Soccer Team Game Image */}
            <motion.div
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <OptimizedImage
                     src="/images/soccer/soccer-pricing-team-game.webp"
                     alt="Indoor soccer team game in progress at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soccer/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Field Rental & Membership Options</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Hourly • Seasonal • Unlimited Access</p>
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="text-center max-w-3xl mx-auto mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-header font-bold text-soccer uppercase mb-6">Soccer Field Rental Options</h2>
               <p className="text-gray-500">Flexible pricing for teams and individuals.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

               {/* Hourly */}
               <motion.div
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
               >
                  <div className="mb-4">
                     <h3 className="text-xl font-header font-bold text-gray-900 uppercase">Field Rental</h3>
                     <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Pay Per Session</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-gray-100">
                     <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-header font-bold text-soccer">View Rates</span>
                        <span className="text-sm text-gray-500 font-medium">/hr</span>
                     </div>
                     <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Clock size={12} /> Check RunSwift for real-time pricing</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> 1 Indoor Field</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Professional Artificial Turf</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Goal Systems Included</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Up to 16 Players</li>
                  </ul>
                  <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="w-full py-4 border-2 border-soccer text-soccer font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-soccer hover:text-white transition-colors block text-center">Book Field Now</a>
               </motion.div>

               {/* Membership - Highlighted */}
               <motion.div
                  transition={{ delay: 0.1 }}
                  className="bg-soccer rounded-xl border border-soccer p-8 shadow-2xl relative transform md:-translate-y-6 flex flex-col z-10"
               >
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-\[11px\] font-bold uppercase px-4 py-1.5 rounded-bl-lg shadow-sm">Best Value</div>
                  <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

                  <div className="mb-4 relative z-10">
                     <h3 className="text-2xl font-header font-bold text-white uppercase">Gold Membership</h3>
                     <p className="text-xs font-mono text-emerald-300 uppercase tracking-widest mt-1">Cricket + Badminton</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-emerald-800 relative z-10">
                     <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-header font-bold text-white">$109</span>
                        <span className="text-sm text-emerald-200 font-medium">/mo</span>
                     </div>
                     <p className="text-xs text-emerald-300/80 mt-2">With 6-month commitment</p>
                  </div>

                  <div className="bg-white/10 p-3 rounded mb-6 border border-white/10 relative z-10">
                     <p className="text-xs text-emerald-100 font-bold flex items-center gap-2"><Star size={12} className="text-yellow-400" /> Includes unlimited Cricket + Badminton access</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow relative z-10">
                     <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> <strong className="text-white">UNLIMITED</strong> Field Bookings</li>
                     <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> Unlimited Cricket + Badminton</li>
                     <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> Open Daily 5AM - 11PM</li>
                     <li className="flex gap-3 text-sm text-emerald-50"><Check size={16} className="text-white" /> 10% Store & Academy Discount</li>
                  </ul>
                  <Link href="/memberships" className="w-full py-4 bg-emerald-500 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-emerald-400 transition-colors shadow-lg relative z-10 block text-center">Explore Gold Membership</Link>
               </motion.div>

               {/* Team Package */}
               <motion.div
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
               >
                  <div className="mb-4">
                     <h3 className="text-xl font-header font-bold text-gray-900 uppercase">Team Packages</h3>
                     <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">For Teams & Groups</p>
                  </div>
                  <div className="mb-8 pb-8 border-b border-gray-100">
                     <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-header font-bold text-soccer">Contact Us</span>
                        <span className="text-sm text-gray-500 font-medium"></span>
                     </div>
                     <p className="text-xs text-gray-400 mt-2">Custom pricing for regular bookings</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Flexible Scheduling</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Guaranteed Weekly Slot</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Goals & Equipment Included</li>
                     <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-emerald-600" /> Professional Artificial Turf</li>
                  </ul>
                  <Link href="/contact" className="w-full py-4 border-2 border-gray-200 text-gray-600 font-bold uppercase text-xs tracking-widest rounded-lg hover:border-soccer hover:text-soccer transition-colors flex items-center justify-center gap-2">
                     <Users size={16} /> Request Team Quote
                  </Link>
               </motion.div>

            </div>

            {/* League Pricing */}
            <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                  <h4 className="text-xl font-header font-bold text-soccer uppercase mb-2">League & Tournament Pricing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                     <p><strong className="text-gray-900">Leagues:</strong> Contact us for current season pricing and availability.</p>
                     <p><strong className="text-gray-900">Tournaments:</strong> Contact us for tournament pricing and booking details.</p>
                  </div>
               </div>
               <Link href="/events" className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold uppercase text-xs tracking-widest rounded-lg hover:border-soccer hover:text-soccer transition-colors whitespace-nowrap flex items-center gap-2">
                  <Trophy size={14} /> View League Schedule
               </Link>
            </div>
         </div>
      </section>
   );
};

export default SoccerPricing;