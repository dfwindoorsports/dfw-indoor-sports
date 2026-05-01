'use client'

import React from 'react';
import { Target, Wind, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipsValue: React.FC = () => {
  return (
    <section aria-label="Membership value proposition" className="py-24 bg-gray-50 border-y border-gray-200 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">ROI Analysis</span>
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">See The Savings</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Compare drop-in costs vs. membership for typical usage scenarios.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {/* Cricket Scenario */}
             <motion.div 
               className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Target className="text-dfw-navy" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy uppercase">Serious Cricketer</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Training 3x Weekly</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Lane Rental (12x/mo)</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Bowling Machine</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>—</span>
                   </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy text-sm">Cricket Unlimited</span>
                      <span className="font-header font-bold text-2xl text-green-600">$129</span>
                   </div>
                   <p className="text-xs text-green-700 font-bold uppercase tracking-wide">Significant Monthly Savings</p>
                </div>
             </motion.div>

             {/* Badminton Scenario */}
             <motion.div 
               transition={{ delay: 0.1 }}
               className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Wind className="text-dfw-navy" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy uppercase">Regular Player</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Playing 3x Weekly</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Court Rental (18 hrs)</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Guest Fees</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>—</span>
                   </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy text-sm">Badminton Membership</span>
                      <span className="font-header font-bold text-2xl text-blue-600">$70</span>
                   </div>
                   <p className="text-xs text-blue-700 font-bold uppercase tracking-wide">Significant Monthly Savings</p>
                </div>
             </motion.div>

             {/* Family Scenario */}
             <motion.div 
               transition={{ delay: 0.2 }}
               className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-6">
                   <Heart className="text-dfw-navy" size={24} />
                   <h3 className="font-header font-bold text-xl text-dfw-navy uppercase">Active Family</h3>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">2 Adults + 2 Kids (2x Wk)</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Family Cricket (4 hrs)</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-500">
                      <span>Badminton (4 hrs)</span>
                      <span>—</span>
                   </div>
                   <div className="flex justify-between font-bold text-dfw-navy pt-2">
                      <span>Monthly Drop-In Cost</span>
                      <span>—</span>
                   </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                   <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-dfw-navy text-sm">Family Gold</span>
                      <span className="font-header font-bold text-2xl text-yellow-600">$129</span>
                   </div>
                   <p className="text-xs text-yellow-700 font-bold uppercase tracking-wide">Significant Monthly Savings</p>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default MembershipsValue;