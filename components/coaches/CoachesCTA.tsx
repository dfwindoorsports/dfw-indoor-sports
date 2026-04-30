'use client'

import React from 'react';
import { motion } from 'framer-motion';

const CoachesCTA: React.FC = () => {
  return (
    <section className="py-32 bg-[#020408] relative overflow-hidden text-center border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-dfw-red/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block"
        >
          Ready To Ascend?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-8 leading-tight"
        >
          Train With <span className="text-white">Giants</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto"
        >
          Secure your consultation today. Spaces in our Elite and Junior development programs are limited.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="https://ams-app.skonnect.io/player/register?center__code=C-A144&sport=1" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dfw-navy transition-all duration-300 shadow-[0_0_40px_-10px_rgba(214,40,40,0.5)]">
            Schedule Consultation
          </a>
          <a href="/contact" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white/5 transition-all">
            Download Prospectus
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachesCTA;