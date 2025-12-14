'use client'

import React from 'react';
import { ChevronRight, Calendar, Users, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SoccerHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#064E3B] overflow-hidden group">
      {/* Background Image with Cinematic Zoom and Parallax Feel */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2600&auto=format&fit=crop")' }}
      ></motion.div>
      
      {/* Advanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B] via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">
         
         {/* Live Availability Ticker - Glassmorphism */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-white/80 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 hover:bg-white/10 transition-colors cursor-default"
         >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold">Status:</span> Open 5 AM - 11 PM Daily
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
         >
           Indoor Soccer Field Rental <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">Fort Worth</span>
         </motion.h1>
         
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
         >
           <p className="max-w-xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-emerald-500 pl-6">
             Reserve professional indoor soccer fields with climate-controlled comfort. Small-sided games on FIFA-approved artificial turf.
           </p>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="mt-6"
         >
            <button 
               onClick={() => document.getElementById('booking-process')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden transition-all hover:bg-gray-100"
            >
               <div className="absolute inset-0 w-1 bg-emerald-500 transition-all duration-300 group-hover:w-full opacity-10"></div>
               <span className="relative flex items-center gap-3">
                 Book Field Now <ArrowRight size={14} />
               </span>
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default SoccerHero;