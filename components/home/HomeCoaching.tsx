'use client'

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeCoaching: React.FC = () => {
 return (
 <section className="py-24 bg-[#0A111F] transition-colors duration-300">
 <div className="container mx-auto px-4 md:px-6">
 <motion.div 
 className="text-center mb-16"
 >
 <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-6">Learn From The Best</h2>
 <p className="text-gray-400 max-w-2xl mx-auto">International expertise. Certified professionals. Results driven.</p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <motion.div 
 transition={{ duration: 0.6 }}
 className="relative rounded-lg overflow-hidden h-[400px] shadow-2xl group"
 >
 <img src="/images/Prashant_Kamble.avif" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Prashant Kamble - Head Coach" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
 <div className="absolute bottom-8 left-8 text-white">
 <div className="flex items-center gap-2 mb-2">
 <ShieldCheck className="text-dfw-red" size={20} />
 <span className="text-xs font-bold uppercase tracking-widest">CricKingdom Academy</span>
 </div>
 <h3 className="text-3xl font-header font-bold uppercase">Prashant Kamble</h3>
 <p className="text-gray-300 text-sm">Head Coach • Cricket Australia Level 2</p>
 </div>
 </motion.div>

 <motion.div 
 transition={{ duration: 0.6 }}
 className="space-y-8"
 >
 <div>
 <h3 className="text-2xl font-header font-bold text-white uppercase mb-4">World Class Standards</h3>
 <p className="text-gray-400 leading-relaxed">
 We partner with Rohit Sharma's CricKingdom to bring international cricket expertise to DFW. Our coaches hold Cricket Australia and ICC Level 2 certifications, ensuring you receive instruction that meets global high-performance standards.
 </p>
 </div>
 
 <div className="grid grid-cols-2 gap-6">
 {[
 { val:"1:6", lbl:"Student Ratio" },
 { val:"Video", lbl:"Analysis Tech" },
 { val:"ICC", lbl:"Certified" },
 { val:"Age 6+", lbl:"To Elite" }
 ].map((item, i) => (
 <div key={i} className="p-4 bg-[#050911] dark:bg-[#0A111F] rounded border border-white/10 transition-colors">
 <div className="text-2xl font-bold text-white mb-1">{item.val}</div>
 <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{item.lbl}</div>
 </div>
 ))}
 </div>

 <Link href="/academy/coaches" className="inline-flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy dark:hover:text-white hover:border-dfw-navy dark:hover:border-white transition-all">
 Meet Our Coaching Team <ArrowRight size={14} />
 </Link>
 </motion.div>
 </div>
 </div>
 </section>
 );
};

export default HomeCoaching;