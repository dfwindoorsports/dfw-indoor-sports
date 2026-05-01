'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CurrentPartners: React.FC = () => {
  return (
    <section aria-label="Current partners" className="py-24 md:py-32 bg-[#FAFAFA] border-y border-gray-200 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Our Network</span>
             <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-16 tracking-wide">Proud to Partner With</h2>
          </motion.div>
          
          <motion.div 
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center"
          >
             {/* Partner 1: CricKingdom */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group cursor-default"
             >
                <div className="h-32 w-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6 group-hover:shadow-xl group-hover:border-dfw-red/30 transition-all duration-300">
                   <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-dfw-red rounded-full flex items-center justify-center text-white font-bold font-header text-xl">CK</div>
                      <span className="font-header font-bold text-xl text-dfw-navy">CricKingdom</span>
                   </div>
                </div>
                <p className="text-\[11px\] font-bold uppercase tracking-widest text-gray-400 group-hover:text-dfw-red transition-colors">Academy Partner</p>
             </motion.div>

             {/* Partner 2: Generic Tech */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group cursor-default"
             >
                <div className="h-32 w-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6 group-hover:shadow-xl group-hover:border-dfw-red/30 transition-all duration-300">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border-2 border-gray-800 rounded-lg transform rotate-45"></div>
                      <span className="font-header font-bold text-xl text-gray-700">NEXUS</span>
                   </div>
                </div>
                <p className="text-\[11px\] font-bold uppercase tracking-widest text-gray-400 group-hover:text-dfw-red transition-colors">Tech Sponsor</p>
             </motion.div>

             {/* Partner 3: Generic Health */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group cursor-default"
             >
                <div className="h-32 w-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6 group-hover:shadow-xl group-hover:border-dfw-red/30 transition-all duration-300">
                   <div className="flex items-center gap-2">
                      <div className="w-4 h-8 bg-green-500 rounded-full"></div>
                      <div className="w-4 h-6 bg-green-400 rounded-full"></div>
                      <span className="font-header font-bold text-xl text-gray-700">VITALITY</span>
                   </div>
                </div>
                <p className="text-\[11px\] font-bold uppercase tracking-widest text-gray-400 group-hover:text-dfw-red transition-colors">Wellness Partner</p>
             </motion.div>

             {/* Partner 4: Generic Gear */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="flex flex-col items-center group cursor-default"
             >
                <div className="h-32 w-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-6 mb-6 group-hover:shadow-xl group-hover:border-dfw-red/30 transition-all duration-300">
                   <div className="border-2 border-gray-800 px-4 py-1">
                      <span className="font-header font-bold text-xl text-gray-800 tracking-[0.2em]">TITAN</span>
                   </div>
                </div>
                <p className="text-\[11px\] font-bold uppercase tracking-widest text-gray-400 group-hover:text-dfw-red transition-colors">Equipment Supplier</p>
             </motion.div>
          </motion.div>
          
          <motion.div 
            transition={{ delay: 0.4 }}
            className="mt-16 pt-16 border-t border-gray-200"
          >
             <p className="text-xs text-gray-400 italic">Interested in joining our partner network? <Link href="/contact" className="text-dfw-navy font-bold hover:text-dfw-red underline decoration-dotted underline-offset-4">Get in touch.</Link></p>
          </motion.div>
       </div>
    </section>
  );
};

export default CurrentPartners;