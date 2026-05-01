'use client'

import React from 'react';
import { ChevronRight, Calendar, Users, Check } from 'lucide-react';

const SoccerHero: React.FC = () => {
   return (
      <div className="relative h-[60vh] min-h-[400px] flex items-center bg-soccer overflow-hidden group">
         {/* Background Image with Cinematic Zoom and Parallax Feel */}
         <div
            className="absolute inset-0 bg-cover bg-center opacity-50 scale-105 animate-zoom-slow mix-blend-luminosity"
            style={{ backgroundImage: 'url("/images/sports/soccer-turf.webp")' }}
         ></div>

         {/* Advanced Gradient Overlays for Depth */}
         <div className="absolute inset-0 bg-gradient-to-r from-soccer via-soccer/90 to-transparent z-10"></div>
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-30 mix-blend-overlay z-10"></div>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-soccer to-transparent z-10"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-800 text-emerald-100 font-mono text-[10px] font-medium uppercase tracking-[0.25em] mb-4 animate-fade-in-up cursor-default">
               <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
               <span className="font-bold">Status:</span> Open 5 AM - 11 PM Daily
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase tracking-tighter mb-4 leading-[1.1] animate-slide-up max-w-5xl drop-shadow-2xl">
               Indoor Soccer Field Rental <br />
               <span className="text-white">Fort Worth</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
               <p className="max-w-2xl text-gray-200 text-base md:text-lg font-light leading-relaxed border-l-2 border-emerald-500 pl-6 backdrop-blur-sm">
                  Reserve professional indoor soccer fields with climate-controlled comfort. Small-sided games on professional indoor artificial turf.
               </p>
            </div>

            {/* 3 Prominent CTAs */}
            <div className="flex flex-row flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
               <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 bg-emerald-600 text-white font-bold uppercase tracking-widest text-xs rounded-sm overflow-hidden shadow-[0_0_40px_rgba(5,150,105,0.4)] transition-all hover:shadow-[0_0_60px_rgba(5,150,105,0.6)] hover:-translate-y-1">

                  <span className="relative flex items-center gap-3">Book Field Now <ChevronRight size={14} /></span>
               </a>
               <button
                  onClick={() => document.getElementById('booking-process')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-white text-soccer font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
               >
                  <Calendar size={14} /> View Availability
               </button>
               <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-soccer transition-all flex items-center gap-2"
               >
                  <Users size={14} /> Membership Options
               </button>
            </div>
         </div>
      </div>
   );
};

export default SoccerHero;