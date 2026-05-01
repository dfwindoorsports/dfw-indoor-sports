'use client'

import React from 'react';
import { ChevronRight, Calendar, Users, Zap, PlayCircle } from 'lucide-react';

const DodgeballHero: React.FC = () => {
   return (
      <div className="relative h-[60vh] min-h-[400px] flex items-center bg-dodgeball overflow-hidden group">
         {/* Background Image with Cinematic Zoom */}
         <div
            className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow mix-blend-luminosity"
            style={{ backgroundImage: 'url("/images/facilities/dodgeball-courts.webp")' }}
         ></div>

         {/* Gradient Overlays */}
         <div className="absolute inset-0 bg-gradient-to-r from-dodgeball via-dodgeball/90 to-transparent z-10"></div>
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dodgeball to-transparent z-10"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-violet-800 text-violet-100 font-mono text-[10px] font-medium uppercase tracking-[0.25em] mb-4 animate-fade-in-up cursor-default">
               <span className="w-2 h-2 rounded-full bg-orange-400"></span>
               <span className="font-bold">Fun Factor:</span> Maximum Adrenaline
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
               Dodgeball Court Rental <br />
               <span className="text-white">Fort Worth</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
               <p className="max-w-2xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-violet-500 pl-6 backdrop-blur-sm">
                  The most fun you'll have getting fit. Professional courts for birthday parties, corporate team building, and high-energy fun.
               </p>

               {/* Micro Stats */}
               <div className="hidden lg:flex gap-6 border-l border-white/10 pl-6">
                  <div>
                     <div className="text-xl font-header font-bold text-white">600</div>
                     <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Cals/Hour</div>
                  </div>
                  <div>
                     <div className="text-xl font-header font-bold text-white">2<span className="text-sm align-top text-orange-500">min</span></div>
                     <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Learning Curve</div>
                  </div>
               </div>
            </div>

            {/* 3 Prominent CTAs */}
            <div className="flex flex-row flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <button className="group relative px-6 py-3 bg-orange-600 text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] hover:-translate-y-1">

                  <span className="relative flex items-center gap-3">Book Court Now <ChevronRight size={14} /></span>
               </button>
               <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-dodgeball font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
               >
                  <Users size={14} /> Party Packages
               </button>
               <button
                  onClick={() => document.getElementById('corporate')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-dodgeball transition-all flex items-center gap-2"
               >
                  <Zap size={14} /> Corporate Events
               </button>
            </div>
         </div>
      </div>
   );
};

export default DodgeballHero;