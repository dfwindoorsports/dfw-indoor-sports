'use client'

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const TopBar: React.FC = () => {
   return (
      <div className="relative bg-[#020408] text-gray-400 font-mono border-b border-white/10 overflow-hidden z-[110]">

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* === Desktop View — Clean, scannable, no visual noise === */}
            <div className="hidden md:flex justify-between items-center h-9 text-[11px] font-medium tracking-[0.12em] uppercase">

               {/* Left: Status + Hours */}
               <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                     <span className="text-gray-300">Open Now</span>
                  </div>

                  <div className="w-[1px] h-3 bg-white/10" aria-hidden="true"></div>

                  <div className="flex items-center gap-1.5 text-gray-400">
                     <Clock size={10} className="text-gray-500" aria-hidden="true" />
                     <span>5 AM – 11 PM Daily</span>
                  </div>
               </div>

               {/* Right: Contact only — clean and direct */}
               <div className="flex items-center gap-5">
                  <a
                     href={`https://maps.google.com/?q=${CONTACT_INFO.address}`}
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                     <MapPin size={10} className="text-gray-500" aria-hidden="true" />
                     <span>Fort Worth, TX</span>
                  </a>

                  <div className="w-[1px] h-3 bg-white/10" aria-hidden="true"></div>

                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                     <Phone size={10} className="text-gray-500" aria-hidden="true" />
                     <span>{CONTACT_INFO.phone}</span>
                  </a>

                  <div className="w-[1px] h-3 bg-white/10" aria-hidden="true"></div>

                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                     <Mail size={10} className="text-gray-500" aria-hidden="true" />
                     <span>Email Us</span>
                  </a>
               </div>
            </div>

            {/* === Mobile View — Single clear CTA === */}
            <div className="md:hidden flex justify-between items-center h-9 text-[11px] font-medium tracking-widest uppercase">
               <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                  <span className="text-gray-300">Open 5AM–11PM</span>
               </div>

               <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
                  <Phone size={10} className="text-dfw-red" aria-hidden="true" />
                  <span>{CONTACT_INFO.phone}</span>
               </a>
            </div>

         </div>
      </div>
   );
};

export default TopBar;