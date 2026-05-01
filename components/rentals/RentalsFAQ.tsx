'use client'

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Info, ChevronDown, CreditCard, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const RentalsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Do I need a membership to rent?", a: "No. Rentals are open to the public. Memberships are optional for frequent users who want unlimited access and priority booking." },
    { q: "Can I book for private coaching?", a: "Yes. You book the court, and bring your coach (or use one of ours). Private instruction is permitted on all rented courts." },
    { q: "What happens if I'm late?", a: "We hold your booking for 15 minutes. After that, it may be released to walk-ins. No refunds for missed time." },
    { q: "Is equipment provided?", a: "Yes. Cricket includes bowling machines. Badminton includes nets. All basic gear (bats, rackets, balls, pads) is provided free." },
    { q: "Can I extend my session?", a: "If the court is available, yes. Just pay the difference at the desk. During peak times, extensions may not be possible." },
    { q: "How far in advance can I book?", a: "Book online through RunSwift for real-time availability. Members get 7-14 day advance booking. Peak times fill up quickly." },
    { q: "Can I bring spectators?", a: "Yes, family and friends are welcome to watch from designated spectator areas at no charge." },
  ];

  return (
    <section aria-label="Rentals frequently asked questions" className="py-24 md:py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Left: Policies — expanded with more content to balance */}
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5"
               >
                  <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-8">Booking Policies</h3>
                  <div className="space-y-6">
                     <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <AlertCircle size={16} className="text-dfw-red" /> Cancellation
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           24+ hours notice for full refund. 12-24 hours for 50% credit. No refunds for cancellations within 12 hours. Weather does not affect bookings.
                        </p>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <CheckCircle2 size={16} className="text-green-500" /> Check-In
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Arrive 10 minutes early. Reservations held for 15 mins past start time before being released to walk-ins.
                        </p>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <Info size={16} className="text-blue-500" /> Waivers
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           All participants must sign a liability waiver before play. Minors require parent/guardian signature. Complete it online in advance to save time.
                        </p>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <CreditCard size={16} className="text-purple-500" /> Payment
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           We accept all major credit/debit cards, Apple Pay, Google Pay, and cash. Online bookings require card payment.
                        </p>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="flex items-center gap-2 font-bold text-dfw-navy text-sm uppercase mb-2">
                           <Users size={16} className="text-amber-500" /> Group Bookings
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Groups of 10+ can request discounted rates. Contact us directly for corporate and large group pricing. Split payment available at the counter.
                        </p>
                     </div>
                  </div>
               </motion.div>

               {/* Right: FAQ Accordion */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="lg:col-span-7"
               >
                  <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-8">Rental FAQ</h3>
                  <div className="space-y-2">
                     {faqs.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                           <div key={idx} className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:border-dfw-red/20">
                              <button
                                 onClick={() => setOpenIndex(isOpen ? null : idx)}
                                 aria-expanded={isOpen}
                                 className="w-full flex justify-between items-center p-4 font-bold text-dfw-navy uppercase tracking-wide text-xs text-left hover:bg-gray-100 transition-colors"
                              >
                                 {item.q}
                                 <span className={`transition-transform ${isOpen ? 'rotate-180' : ''} text-gray-400 shrink-0 ml-4`}>
                                    <ChevronDown size={14} />
                                 </span>
                              </button>
                              {isOpen && (
                                 <div className="p-4 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-200">
                                    {item.a}
                                 </div>
                              )}
                           </div>
                        );
                     })}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
  );
};

export default RentalsFAQ;