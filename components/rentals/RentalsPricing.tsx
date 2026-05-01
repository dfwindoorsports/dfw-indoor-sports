'use client'

import React from 'react';
import { motion } from 'framer-motion';

const RentalsPricing: React.FC = () => {
  return (
    <section aria-label="Rental pricing" className="py-24 md:py-32 bg-white relative transition-colors duration-300" id="pricing">
         <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
               className="text-3xl font-header font-bold text-dfw-navy uppercase mb-12 text-center"
            >
               Transparent Pricing
            </motion.h2>
            
            <motion.div 
               className="overflow-x-auto rounded-lg shadow-sm border border-gray-200"
            >
               <table className="w-full min-w-[800px] border-collapse">
                  <thead className="bg-dfw-navy text-white">
                     <tr>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Facility</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Standard Rate</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Off-Peak (Mon-Fri 9-4)</th>
                        <th className="p-5 text-left font-header uppercase tracking-wider text-xs">Included Equipment</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-gray-600 divide-y divide-gray-100 bg-white">
                     {[
                        { name: "Cricket Lanes", rate: "View Rates", off: "Book Online", equip: "Bowling machine, balls, protective gear" },
                        { name: "Badminton Courts", rate: "View Rates", off: "Book Online", equip: "Nets, posts, court equipment" },
                        { name: "Soccer Fields", rate: "View Rates", off: "Book Online", equip: "Balls, cones, goals, training aids" },
                        { name: "Dodgeball Courts", rate: "View Rates", off: "Book Online", equip: "All balls, safety equipment" }
                     ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                           <td className="p-5 font-bold text-dfw-navy">{row.name}</td>
                           <td className="p-5 font-mono text-dfw-red font-bold">{row.rate}</td>
                           <td className="p-5 font-mono text-green-600">{row.off}</td>
                           <td className="p-5 text-xs uppercase font-bold text-gray-400">{row.equip}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </motion.div>
            
            <div className="mt-6 flex flex-wrap justify-between items-center text-xs text-gray-500">
               <div className="flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-dfw-navy rounded-full"></span> Peak: Weekday 4-10pm, Weekends</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Off-Peak: Weekday 9am-4pm</span>
               </div>
               <p className="mt-2 md:mt-0">*Members receive 25% off all drop-in rates.</p>
            </div>
         </div>
      </section>
  );
};

export default RentalsPricing;