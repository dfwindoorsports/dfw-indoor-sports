'use client'

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const MembershipsPricing: React.FC = () => {
   const [billingCycle, setBillingCycle] = useState<'monthly' | 'halfYearly'>('halfYearly');

   const toggleBilling = () => {
      setBillingCycle(prev => prev === 'monthly' ? 'halfYearly' : 'monthly');
   };

   return (
      <section className="py-24 bg-white relative transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">

            {/* Member Usage Banner */}
            <motion.div
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                  <OptimizedImage
                     src="/images/memberships/memberships-pricing-member-using.webp"
                     alt="Members enjoying facilities at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/80 via-dfw-navy/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-2xl md:text-3xl uppercase">Unlimited Access. Maximum Value.</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Play More, Pay Less • Cricket + Badminton Included</p>
                  </div>
               </div>
            </motion.div>

            <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-4xl md:text-6xl font-header font-bold text-dfw-navy uppercase mb-6">Choose Your Plan</h2>

               {/* Toggle */}
               <div className="flex justify-center items-center gap-4 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-dfw-navy' : 'text-gray-400'}`}>Monthly Flex</span>
                  <button
                     onClick={toggleBilling}
                     className="w-16 h-8 bg-dfw-navy rounded-full relative p-1 transition-colors duration-300 focus:outline-none"
                  >
                     <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'halfYearly' ? 'translate-x-8' : 'translate-x-0'}`}></div>
                  </button>
                  <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${billingCycle === 'halfYearly' ? 'text-dfw-navy' : 'text-gray-400'}`}>
                     6-Months <span className="text-green-500 text-[10px] font-medium ml-1">(Best Value)</span>
                  </span>
               </div>
             </div>

             {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

               {/* Card 1: Badminton */}
               <motion.div
                  className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-blue-500 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Badminton Unlimited</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Court Access Only</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy animate-fade-in-up key-{billingCycle}">
                        ${billingCycle === 'halfYearly' ? '70' : '85'}
                     </span>
                     <span className="text-sm text-gray-500 font-medium">/mo</span>
                     <p className="text-[10px] font-medium text-gray-400 mt-1">
                        {billingCycle === 'halfYearly' ? 'Commit to 6 months. Save $90.' : 'Cancel anytime with 30 days notice.'}
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Unlimited Court Access", "No Hourly Fees", "No Additional Court Fees", "Open Daily 5AM-11PM", "10% Pro Shop Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                           <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships" target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-dfw-navy text-dfw-navy font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white transition-colors block text-center">
                     Select Plan
                  </a>
               </motion.div>

               {/* Card 2: GOLD (Highlighted) */}
               <motion.div
                  transition={{ delay: 0.1 }}
                  className="bg-dfw-navy rounded-lg border border-dfw-navy p-8 shadow-2xl relative group overflow-hidden xl:-mt-8 xl:mb-8 transform xl:scale-105 z-10"
               >
                  <div className="absolute top-0 right-0 bg-dfw-red text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg z-20">Most Popular</div>
                  {/* Background FX */}
                  <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-dfw-red/20 blur-[80px] rounded-full pointer-events-none"></div>

                  <div className="relative z-10">
                     <h3 className="text-2xl font-header font-bold text-white uppercase mb-2">Gold Membership</h3>
                     <p className="text-xs font-mono text-dfw-red uppercase tracking-widest mb-6">Cricket + Badminton Included</p>

                     <div className="mb-6 h-16">
                        <span className="text-5xl font-header font-bold text-white animate-fade-in-up key-{billingCycle}">
                           ${billingCycle === 'halfYearly' ? '109' : '119'}
                        </span>
                        <span className="text-sm text-gray-400 font-medium">/mo</span>
                        <p className="text-[10px] font-medium text-gray-500 mt-1">
                           {billingCycle === 'halfYearly' ? 'Lock in lowest rate.' : 'Monthly flexibility.'}
                        </p>
                     </div>

                     <div className="p-3 bg-white/5 rounded-lg border border-white/10 mb-6 backdrop-blur-sm">
                        <p className="text-xs text-gray-300 leading-relaxed">
                           <strong className="text-white">Includes:</strong> Unlimited Cricket Lanes & Badminton Courts.
                        </p>
                     </div>

                     <ul className="space-y-4 mb-8 min-h-[180px]">
                        {[
                           "Unlimited Cricket + Badminton", "Bowling Machine Included", "10% Store Discount", "10% Academy Discount", "Bowling Machine Included"
                        ].map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                              <Check size={16} className="text-dfw-red mt-0.5 shrink-0" />
                              {feat}
                           </li>
                        ))}
                     </ul>

                     <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships?membershipId=3671" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-dfw-red text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-red-600 transition-colors shadow-lg block text-center">
                        Get Gold Access
                     </a>
                  </div>
               </motion.div>

               {/* Card 3: Cricket Unlimited */}
               <motion.div
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-dfw-navy transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Cricket Unlimited</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Serious Training</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy animate-fade-in-up key-{billingCycle}">
                        $129
                     </span>
                     <span className="text-sm text-gray-500 font-medium">/mo</span>
                     <p className="text-[10px] font-medium text-gray-400 mt-1">
                        Monthly subscription. No long-term commitment.
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Unlimited Lane Access", "Bowling Machine Included", "No Additional Court Fees", "Video Analysis Allowed", "10% Academy Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                           <Check size={16} className="text-dfw-navy mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button className="w-full py-3 border border-dfw-navy text-dfw-navy font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white transition-colors">
                     Select Plan
                  </button>
               </motion.div>

               {/* Card 4: Family */}
               <motion.div
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-green-600 transition-colors"></div>
                  <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Family Gold</h3>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">2 Adults + 2 Kids</p>

                  <div className="mb-6 h-16">
                     <span className="text-4xl font-header font-bold text-dfw-navy animate-fade-in-up key-{billingCycle}">
                        $129
                     </span>
                     <span className="text-sm text-gray-500 font-medium">/mo</span>
                     <p className="text-[10px] font-medium text-gray-400 mt-1">
                        6-month commitment. Covers 4 family members.
                     </p>
                  </div>

                  <ul className="space-y-4 mb-8 min-h-[180px]">
                     {[
                        "Covers 2 Adults + 2 Kids", "Unlimited Cricket + Badminton", "Simultaneous Use", "Bowling Machine Included", "10% Coaching Discount"
                     ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                           <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships?membershipId=3675" target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-dfw-navy text-dfw-navy font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-dfw-navy hover:text-white transition-colors block text-center">
                     Select Plan
                  </a>
               </motion.div>

            </div>

            {/* Fine Print — matches official site */}
            <div className="mt-12 max-w-3xl mx-auto text-center space-y-2">
               <p className="text-xs text-gray-500">• No additional Court/Lane fees for reserving</p>
               <p className="text-xs text-gray-500">• There is a one-time registration fee for all members of $20</p>
               <p className="text-xs text-gray-500">• All prices are before sales tax</p>
               <p className="text-xs text-gray-500">• Registration fee is a one-time fee and is not refundable upon account cancellation</p>
               <p className="text-xs text-red-400/80 font-medium">• Using other members' ID to enter the facility is treated as fraud and will result in a fine of $250. Additionally, membership can be terminated permanently.</p>
            </div>
         </div>
      </section>
   );
};

export default MembershipsPricing;