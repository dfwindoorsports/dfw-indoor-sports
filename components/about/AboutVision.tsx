'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AboutVision: React.FC = () => {
  return (
    <section aria-label="Our vision" className="bg-gray-50 py-24 md:py-32 relative overflow-hidden border-y border-gray-200">
       <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block"
           >
             The Roadmap
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-header font-bold text-dfw-navy uppercase mb-8"
           >
             What&apos;s Next?
           </motion.h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                 { title: "Expansion", desc: "Additional courts and specialized training centers planned for 2025." },
                 { title: "Tech Integration", desc: "Advanced AI video analysis and wearable tracking for members." },
                 { title: "Global Partnerships", desc: "Exchange programs with international academies." }
              ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all"
                 >
                    <h4 className="text-dfw-navy font-bold uppercase mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                 </motion.div>
              ))}
           </div>
       </div>
    </section>
  );
};

export default AboutVision;