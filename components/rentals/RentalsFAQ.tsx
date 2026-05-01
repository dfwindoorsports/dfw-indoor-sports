'use client'

import React from 'react';
import { AlertCircle, CheckCircle2, Info, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const RentalsFAQ: React.FC = () => {
  return (
    <section aria-label="Rentals frequently asked questions" className="py-24 bg-white transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Left: Policies */}
               <motion.div 
                  className="lg:col-span-5"
               >
                  <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-8">Booking Policies</h3>
                  <div className="space-y-8">
                     <div>
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <AlertCircle size={16} className="text-dfw-red" /> Cancellation
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                           24+ hours notice for full refund. 12-24 hours for 50% credit. No refunds for cancellations within 12 hours. Weather does not affect bookings.
                        </p>
                     </div>
                     <div>
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <CheckCircle2 size={16} className="text-green-500" /> Check-In
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                           Arrive 10 minutes early. Reservations held for 15 mins past start time before being released to walk-ins.
                        </p>
                     </div>
                     <div>
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <Info size={16} className="text-blue-500" /> Waivers
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                           All participants must sign a liability waiver before play. Minors require parent/guardian signature.
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: FAQ Accordion */}
               <motion.div 
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-7"
               >
                  <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-8">Rental FAQ</h3>
                  <div className="space-y-2">
                     {[
                        { q: "Do I need a membership to rent?", a: "No. Rentals are open to the public. Memberships are optional for frequent users." },
                        { q: "Can I book for private coaching?", a: "Yes. You book the court, and bring your coach (or use one of ours). Private instruction is permitted." },
                        { q: "What happens if I'm late?", a: "We hold your booking for 15 minutes. After that, it may be released to walk-ins. No refunds for missed time." },
                        { q: "Is equipment provided?", a: "Yes. Cricket includes bowling machines. Badminton includes nets. Bring your own personal gear (bats, rackets)." },
                        { q: "Can I extend my session?", a: "If the court is available, yes. Just pay the difference at the desk. During peak times, extensions may not be possible." },
                        { q: "How far in advance can I book?", a: "Book online through RunSwift for real-time availability. Peak times fill up quickly—we recommend booking early." },
                        { q: "Can I bring spectators?", a: "Yes, family and friends are welcome to watch from designated areas." }
                     ].map((item, idx) => (
                        <motion.details 
                           key={idx} 
                           transition={{ delay: idx * 0.05 }}
                           className="group bg-gray-50 rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 open:shadow-md"
                        >
                           <summary className="flex justify-between items-center p-4 cursor-pointer list-none font-bold text-dfw-navy uppercase tracking-wide text-xs select-none hover:bg-gray-100 transition-colors">
                              {item.q}
                              <span className="transition-transform group-open:rotate-180 text-gray-400">
                                 <ChevronDown size={14} />
                              </span>
                           </summary>
                           <div className="p-4 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-200 mt-2">
                              {item.a}
                           </div>
                        </motion.details>
                     ))}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
  );
};

export default RentalsFAQ;