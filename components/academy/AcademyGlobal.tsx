'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AcademyGlobal: React.FC = () => {
   return (
      <section aria-label="Academy global partnerships" className="bg-white py-24 border-b border-gray-100 transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h2
               className="text-3xl font-header font-bold text-dfw-navy uppercase mb-10"
            >
               Global Footprint
            </motion.h2>
            <motion.p
               transition={{ delay: 0.1 }}
               className="text-gray-500 max-w-2xl mx-auto mb-12"
            >
               Part of an international network of academies sharing knowledge, coaches, and curriculum.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-6">
               {['United States', 'Singapore', 'Japan', 'India', 'Bangladesh'].map((country, i) => (
                  <motion.div
                     key={country}
                     transition={{ delay: i * 0.1 }}
                     className="group relative"
                  >
                     <div className="px-8 py-4 bg-gray-50 rounded-full border border-gray-200 text-sm font-bold uppercase tracking-widest text-gray-600 hover:bg-dfw-navy hover:text-white hover:border-dfw-navy transition-all cursor-default relative z-10 shadow-sm hover:shadow-lg">
                        {country}
                     </div>

                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default AcademyGlobal;