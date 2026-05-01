'use client'

import React from 'react';
import { Clock, Users, Check, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DodgeballPricing: React.FC = () => {
  return (
    <section aria-label="Dodgeball pricing" className="py-24 bg-white transition-colors duration-300" id="pricing">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
          >
             <h2 className="text-4xl md:text-5xl font-header font-bold text-dodgeball uppercase mb-6">Court Rental & Leagues</h2>
             <p className="text-gray-500">Simple pricing for casual play or competitive seasons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             
             {/* Hourly Rental */}
             <motion.div 
               className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-violet-600"></div>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-2xl font-header font-bold text-dodgeball uppercase">Hourly Rental</h3>
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">Private Court</p>
                   </div>
                   <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center">
                      <Clock size={24} />
                   </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-100">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-dodgeball">View Rates</span>
                      <span className="text-sm text-gray-500 font-medium">/hr</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">Check RunSwift for real-time pricing</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-violet-600" /> Private Regulation Court</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-violet-600" /> All Dodgeballs Included</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-violet-600" /> Safety Equipment Provided</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-violet-600" /> Spectator Seating</li>
                </ul>

                <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-dodgeball text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-violet-800 transition-colors block text-center">Book Court</a>
             </motion.div>

             {/* League */}
             <motion.div 
               transition={{ delay: 0.1 }}
               className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden flex flex-col"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <h3 className="text-2xl font-header font-bold text-dodgeball uppercase">Rec League</h3>
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-1">8-Week Season</p>
                   </div>
                   <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                      <Trophy size={24} />
                   </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-100">
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-header font-bold text-dodgeball">Contact Us</span>
                      <span className="text-sm text-gray-500 font-medium">/player</span>
                   </div>
                   <p className="text-xs text-gray-400 mt-2">Contact us for current league pricing</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-orange-500" /> Weekly Matches (8 Weeks)</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-orange-500" /> Referees Provided</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-orange-500" /> Playoffs & Championship</li>
                   <li className="flex gap-3 text-sm text-gray-600"><Check size={16} className="text-orange-500" /> Team or Individual Sign-up</li>
                </ul>

                <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="w-full py-4 border-2 border-dodgeball text-dodgeball font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-dodgeball hover:text-white transition-colors block text-center">Join League</a>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default DodgeballPricing;