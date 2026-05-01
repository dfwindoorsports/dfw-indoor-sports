'use client'

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HomeCoaching: React.FC = () => {
  return (
    <section aria-label="Professional coaching" className="py-24 md:py-32 bg-white">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Expert Coaching</span>
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">Learn From The Best</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">International expertise. Certified professionals. Results driven.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative rounded-lg overflow-hidden h-[400px] shadow-2xl group"
             >
                <Image src="/images/Prashant_Kamble.avif" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Prashant Kamble - Head Coach at CricKingdom Academy, DFW Indoor Sports" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                   <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-dfw-red" size={20} aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-widest">CricKingdom Academy</span>
                   </div>
                   <h3 className="text-3xl font-header font-bold uppercase">Prashant Kamble</h3>
                   <p className="text-gray-300 text-sm">Head Coach • Cricket Australia Level 2</p>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="space-y-8"
             >
                <div>
                   <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase mb-4">World-Class Standards</h3>
                   <p className="text-gray-600 leading-relaxed">
                      We partner with Rohit Sharma&apos;s CricKingdom to bring international cricket expertise to DFW. Our coaches hold Cricket Australia and ICC Level 2 certifications, ensuring you receive instruction that meets global high-performance standards.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   {[
                      { val: "1:6", lbl: "Coach-to-Student Ratio" },
                      { val: "Video", lbl: "Analysis Technology" },
                      { val: "ICC", lbl: "Certified Coaches" },
                      { val: "Ages 6+", lbl: "All Skill Levels" }
                   ].map((item, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                         <div className="text-2xl font-bold text-dfw-navy mb-1">{item.val}</div>
                         <div className="text-[11px] uppercase font-bold text-gray-400 tracking-widest">{item.lbl}</div>
                      </div>
                   ))}
                </div>

                <Link href="/academy" className="inline-flex items-center gap-2 text-dfw-red font-bold uppercase text-xs tracking-widest border-b border-dfw-red/20 pb-1 hover:text-dfw-navy hover:border-dfw-navy transition-all">
                   Meet Our Coaching Team <ArrowRight size={14} />
                </Link>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default HomeCoaching;