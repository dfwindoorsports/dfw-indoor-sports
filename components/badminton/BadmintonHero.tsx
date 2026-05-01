'use client'

import React from 'react';
import { ChevronRight, Calendar, Check, PlayCircle } from 'lucide-react';

const BadmintonHero: React.FC = () => {
   return (
      <div className="relative h-[60vh] min-h-[400px] flex items-center bg-badminton overflow-hidden group">
         {/* Background Image with Cinematic Zoom and Parallax Feel */}
         <div
            className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow mix-blend-luminosity"
            style={{ backgroundImage: 'url("/images/hero/badminton-hero.webp")' }}
         ></div>

         {/* Advanced Gradient Overlays for Depth */}
         <div className="absolute inset-0 bg-gradient-to-r from-badminton via-badminton/90 to-transparent z-10"></div>
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-badminton to-transparent z-10"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-800 text-blue-100 font-mono text-\[11px\] font-medium uppercase tracking-[0.25em] mb-4 animate-fade-in-up cursor-default">
               <span className="w-2 h-2 rounded-full bg-blue-400"></span>
               <span className="font-bold">Live:</span> Courts Available Now
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
               BWF Standard <br />
               <span className="text-white">Badminton</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
               <p className="max-w-xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-blue-500 pl-6 backdrop-blur-sm">
                  Experience the precision of tournament-standard flooring and 30ft+ ceilings. Shadow-free lighting and draft-controlled AC for perfect shuttlecock flight.
               </p>

               {/* Micro Stats */}
               <div className="hidden lg:flex gap-6 border-l border-white/10 pl-6">
                  <div>
                     <div className="text-xl font-header font-bold text-white">30ft+</div>
                     <div className="text-\[11px\] font-mono text-gray-400 uppercase tracking-widest">Clear Height</div>
                  </div>
                  <div>
                     <div className="text-xl font-header font-bold text-white">500</div>
                     <div className="text-\[11px\] font-mono text-gray-400 uppercase tracking-widest">Lux Lighting</div>
                  </div>
               </div>
            </div>

            {/* 3 Prominent CTAs */}
            <div className="flex flex-row flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <button className="group relative px-6 py-3 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs rounded-lg overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1">

                  <span className="relative flex items-center gap-3">Book Court Now <ChevronRight size={14} /></span>
               </button>
               <button
                  onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-badminton font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
               >
                  <PlayCircle size={14} /> View Courts
               </button>
               <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:text-badminton transition-all flex items-center gap-2"
               >
                  <Calendar size={14} /> Memberships
               </button>
            </div>
         </div>
      </div>
   );
};

export default BadmintonHero;