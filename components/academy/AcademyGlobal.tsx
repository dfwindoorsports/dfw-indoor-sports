'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AcademyGlobal: React.FC = () => {
 return (
 <section className="bg-[#0A111F] py-24 border-b border-white/5 transition-colors duration-300">
 <div className="container mx-auto px-4 md:px-6 text-center">
 <motion.h2
 className="text-3xl font-header font-bold text-white uppercase mb-10"
 >
 Global Footprint
 </motion.h2>
 <motion.p
 transition={{ delay: 0.1 }}
 className="text-gray-400 max-w-2xl mx-auto mb-12"
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
 <div className="px-8 py-4 bg-[#050911] dark:bg-white/5 rounded-full border border-white/10 text-sm font-bold uppercase tracking-widest text-gray-300 hover:bg-dfw-navy hover:text-white dark:hover:bg-white dark:hover:text-dfw-navy hover:border-dfw-navy dark:hover:border-white transition-all cursor-default relative z-10 shadow-sm hover:shadow-lg">
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