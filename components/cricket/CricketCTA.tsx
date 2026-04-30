'use client'

import React from 'react';
import { Calendar, Phone, MapPin, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CricketCTA: React.FC = () => {
   return (
      <section className="py-24 bg-[#006838] dark:bg-black relative overflow-hidden text-center text-white">
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.span
               className="text-[#CC0000] font-mono text-xs font-bold uppercase tracking-widest mb-6 block"
            >
               Game On
            </motion.span>
            <motion.h2
               className="text-4xl md:text-6xl font-header font-bold uppercase mb-8"
            >
               Book Your <span className="text-dfw-red">Lane Today</span>
            </motion.h2>

            <motion.div
               transition={{ delay: 0.2 }}
               className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
               <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#CC0000] text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-lg">
                  Book Online Now
               </a>
               <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-[#006838] transition-colors flex items-center gap-2 justify-center">
                  <PlayCircle size={16} /> Schedule Tour
               </Link>
               <Link href="/memberships" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white/20 transition-colors">
                  Join Membership
               </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-green-100/70 text-xs font-mono uppercase tracking-widest">
               <span className="flex items-center gap-2"><MapPin size={12} className="text-[#CC0000]" /> Fort Worth, TX</span>
               <span className="flex items-center gap-2"><Phone size={12} className="text-[#CC0000]" /> (817) 938-0808</span>
               <span className="flex items-center gap-2"><Calendar size={12} className="text-[#CC0000]" /> Open 7 Days</span>
            </div>
         </div>
      </section>
   );
};

export default CricketCTA;