'use client'

import React from 'react';
import { Shield, Thermometer, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const RentalsIntro: React.FC = () => {
  return (
    <section aria-label="Rentals introduction" className="py-24 bg-white relative transition-colors duration-300">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
               
               {/* Left: The Narrative */}
               <motion.div 
                 transition={{ duration: 0.6 }}
                 className="lg:w-1/2"
               >
                  <div className="inline-flex items-center gap-2 mb-6">
                     <Shield size={16} className="text-dfw-red" />
                     <span className="text-dfw-navy font-mono text-xs font-bold uppercase tracking-widest">The DFW Advantage</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase leading-[0.95] mb-8">
                     Why We Beat <br/> Every Other Option
                  </h2>
                  <div className="prose prose-lg text-gray-500 leading-relaxed mb-10">
                     <p>
                        Training in Texas presents unique challenges. Summer temperatures regularly exceed 100°F, making outdoor cricket nets unbearable and badminton courts unplayable. Sudden thunderstorms cancel sessions without warning.
                     </p>
                     <p className="font-semibold text-dfw-navy">
                        DFW Indoor Sports solves every one of these problems.
                     </p>
                     <p>
                        We aren't a converted warehouse with nets hung in the corners. We are a purpose-built facility designed for serious athletes. From our ICC-standard cricket pitch dimensions to our BWF-regulation badminton flooring, every detail is engineered for performance.
                     </p>
                  </div>

                  {/* AEO Quick Answer Box */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 backdrop-blur-sm relative overflow-hidden transition-colors">
                     <div className="absolute top-0 right-0 w-20 h-20 bg-dfw-red/5 rounded-bl-full"></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-4 relative z-10">Rental Quick Facts</h3>
                     <ul className="space-y-3 text-sm text-gray-600 relative z-10">
                        <li className="flex gap-3"><span className="font-bold text-dfw-red min-w-[100px]">Sports:</span> Cricket, Badminton, Soccer, Dodgeball</li>
                        <li className="flex gap-3"><span className="font-bold text-dfw-red min-w-[100px]">Pricing:</span> Check RunSwift for rates</li>
                        <li className="flex gap-3"><span className="font-bold text-dfw-red min-w-[100px]">Included:</span> Facility access, Pro Equipment (Machines/Nets), Climate Control</li>
                        <li className="flex gap-3"><span className="font-bold text-dfw-red min-w-[100px]">Booking:</span> Online via RunSwift</li>
                     </ul>
                  </div>
               </motion.div>

               {/* Right: Feature Highlights */}
               <motion.div 
                 transition={{ duration: 0.6 }}
                 className="lg:w-1/2 relative"
               >
                  <div className="grid grid-cols-1 gap-6">
                     <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 group hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                           <Thermometer size={24} />
                        </div>
                        <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Climate Perfection</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Maintained at 72°F year-round with professional-grade air filtration. No heat exhaustion, no frozen fingers. Just perfect training conditions regardless of Texas weather.
                        </p>
                     </div>

                     <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 group hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-dfw-red/10 text-dfw-red rounded-lg flex items-center justify-center mb-4 group-hover:bg-dfw-red group-hover:text-white transition-colors">
                           <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Pro Equipment Included</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Unlike most facilities, we include the gear. Cricket lanes come with bowling machines. Badminton courts provide professional nets. You bring your game; we provide the infrastructure.
                        </p>
                     </div>

                     <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 group hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                           <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2">Flexible Booking</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Reserve courts online 24/7 with instant confirmation. Real-time availability eliminates phone tag. Check real-time availability.
                        </p>
                     </div>
                  </div>
                  {/* Decor */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-dfw-red/5 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
               </motion.div>
            </div>
         </div>
      </section>
  );
};

export default RentalsIntro;