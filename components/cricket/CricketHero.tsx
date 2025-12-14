'use client'

import React from 'react';
import { ArrowRight, PlayCircle, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const CricketHero: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center bg-[#006838] overflow-hidden group">
      {/* Background Image with Cinematic Zoom and Parallax Feel */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop")' }}
      ></motion.div>
      
      {/* Advanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#006838] via-[#006838]/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#006838] via-transparent to-transparent z-10"></div>
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC0000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CC0000]"></span>
            </span>
            <span className="font-bold">Live:</span> Lanes Available Now
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] max-w-5xl drop-shadow-2xl"
         >
           ICC Standard <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">Cricket Lanes</span>
         </motion.h1>
         
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
         >
           <p className="max-w-xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-[#CC0000] pl-6">
             Experience the precision of 22-yard pitches and Australian turf. Automated bowling machines and video analysis included with every session.
           </p>
           
           {/* Stats in Hero */}
           <div className="flex gap-6 md:gap-8">
              <div>
                 <div className="text-2xl font-header font-bold text-white">90<span className="text-sm align-top text-red-500">mph</span></div>
                 <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Max Speed</div>
              </div>
              <div>
                 <div className="text-2xl font-header font-bold text-white">22<span className="text-sm align-top text-red-500">yds</span></div>
                 <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Pitch Length</div>
              </div>
           </div>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="mt-6"
         >
            <button 
               onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative px-6 py-3 bg-white text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden transition-all hover:bg-gray-100"
            >
               <div className="absolute inset-0 w-1 bg-[#CC0000] transition-all duration-300 group-hover:w-full opacity-10"></div>
               <span className="relative flex items-center gap-3">
                 Book Lane Now <ArrowRight size={14} />
               </span>
            </button>
         </motion.div>
      </div>
    </div>
  );
};

export default CricketHero;