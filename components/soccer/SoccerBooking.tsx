'use client'

import React from 'react';
import { MousePointer2, Phone, UserPlus, CreditCard, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SoccerBooking: React.FC = () => {
   return (
      <section aria-label="Soccer field booking" className="py-24 md:py-32 bg-white transition-colors duration-300" id="booking-process">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-header font-bold text-soccer uppercase mb-6">Three Ways To Reserve Your Soccer Field</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

               {/* Online */}
               <motion.div
                  className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all text-center group"
               >
                  <div className="w-16 h-16 bg-soccer text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                     <MousePointer2 size={28} />
                  </div>
                  <h3 className="text-xl font-header font-bold text-soccer uppercase mb-4">1. Online Booking</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                     Instant Confirmation. Book 24/7. Real-time field availability. Check real-time availability.
                  </p>
                  <div className="text-left text-xs text-gray-500 space-y-2 mb-8 bg-white p-4 rounded border border-gray-100">
                     <div className="flex gap-2"><UserPlus size={14} className="text-emerald-500" /> 1. Select Date & Slot</div>
                     <div className="flex gap-2"><Calendar size={14} className="text-emerald-500" /> 2. Choose Duration</div>
                     <div className="flex gap-2"><CreditCard size={14} className="text-emerald-500" /> 3. Complete Payment</div>
                  </div>
                  <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/rentals" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-soccer text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-emerald-700 transition-colors block text-center">Book Field Online</a>
               </motion.div>

               {/* Phone */}
               <motion.div
                  transition={{ delay: 0.1 }}
                  className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all text-center group"
               >
                  <div className="w-16 h-16 bg-white border-2 border-soccer text-soccer rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                     <Phone size={28} />
                  </div>
                  <h3 className="text-xl font-header font-bold text-soccer uppercase mb-4">2. Phone Reservations</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                     Best for team package inquiries, league registration, or membership info.
                  </p>
                  <div className="mb-8 py-4">
                     <p className="text-2xl font-header font-bold text-gray-800">(817) 938-0808</p>
                     <p className="text-\[11px\] font-medium text-gray-400 uppercase tracking-widest mt-1">Mon-Fri 9AM-9PM | Sat-Sun 8AM-10PM</p>
                  </div>
                  <a href="tel:8179380808" className="block w-full py-3 border border-soccer text-soccer font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-soccer hover:text-white transition-colors">Click To Call</a>
               </motion.div>

               {/* Walk-In */}
               <motion.div
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all text-center group"
               >
                  <div className="w-16 h-16 bg-white border-2 border-gray-300 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                     <Calendar size={28} />
                  </div>
                  <h3 className="text-xl font-header font-bold text-gray-700 uppercase mb-4">3. Walk-In Availability</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                     Subject to real-time openings. Off-peak hours (weekday mornings/afternoons) usually have space. Peak times typically booked.
                  </p>
                  <div className="mb-8 text-xs text-gray-500 bg-white p-4 rounded border border-gray-100">
                     <p className="font-bold text-soccer mb-1">16230 Three Wide Dr Suite 200</p>
                     <p>Fort Worth, TX 76177</p>
                  </div>
                  <button className="w-full py-3 border border-gray-300 text-gray-500 font-bold uppercase text-xs tracking-widest rounded-lg cursor-not-allowed">Check Live Status</button>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default SoccerBooking;