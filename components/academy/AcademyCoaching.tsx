'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AcademyCoaching: React.FC = () => {
   return (
      <section aria-label="Academy coaching philosophy" className="bg-gray-50 py-24 md:py-32 relative overflow-hidden border-y border-gray-200">

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dfw-navy/10 bg-dfw-navy/5 text-dfw-navy font-mono text-[11px] font-medium uppercase tracking-[0.25em] mb-6">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                     Mentorship First
                  </div>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-8">
                     More Than Coaches. <br /><span className="text-dfw-red">Role Models.</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                     A great coach does more than correct your elbow position. They see your potential when you don&apos;t. They teach you how to handle failure as well as success.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                     Our panel brings decades of professional experience, but their greatest skill is their ability to connect with students. With a low <strong className="text-dfw-navy">1:6 coach-to-student ratio</strong>, every child gets the personal attention they need to thrive.
                  </p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="space-y-6"
                  >
                     <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm relative group hover:border-dfw-red/30 transition-colors">
                        <div className="absolute -left-1 top-6 bottom-6 w-1 bg-dfw-red rounded-r-full"></div>
                        <h3 className="text-xl font-header font-bold text-dfw-navy uppercase mb-2 group-hover:text-dfw-red transition-colors">Rohit Sharma&apos;s Philosophy</h3>
                        <p className="text-sm text-gray-500 leading-relaxed italic">
                           &quot;Emphasis on timing over power. Building match awareness and cricket intelligence. Developing mental toughness alongside technical skills.&quot;
                        </p>
                     </div>
                  </motion.div>

                  <div className="mt-10 grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-dfw-navy/10 flex items-center justify-center text-dfw-navy font-bold text-xs border border-dfw-navy/20 group-hover:border-dfw-red transition-colors">DK</div>
                        <div>
                           <h4 className="text-dfw-navy font-bold uppercase text-sm mb-0.5 group-hover:text-dfw-red transition-colors">Dhawal Kulkarni</h4>
                           <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Global Mentor</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-dfw-navy/10 flex items-center justify-center text-dfw-navy font-bold text-xs border border-dfw-navy/20 group-hover:border-dfw-red transition-colors">CS</div>
                        <div>
                           <h4 className="text-dfw-navy font-bold uppercase text-sm mb-0.5 group-hover:text-dfw-red transition-colors">Chetan Suryawanshi</h4>
                           <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">CEO & Co-Founder</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 relative"
               >
                  {/* Two image cards */}
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                     <div className="bg-gray-200 rounded-lg h-64 w-full overflow-hidden relative group shadow-2xl transform translate-y-8 border border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image src="/images/hero/cricket-hero.webp" fill className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Technical cricket training at DFW Indoor Sports" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute bottom-4 left-4 z-20">
                           <p className="text-dfw-red font-mono text-[11px] font-medium uppercase tracking-widest mb-1">Focus Area</p>
                           <p className="text-white font-bold uppercase text-lg">Technical</p>
                        </div>
                     </div>
                     <div className="bg-gray-200 rounded-lg h-64 w-full overflow-hidden relative group shadow-2xl transform -translate-y-8 border border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                        <Image src="/images/sports/athlete.webp" fill className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Mental conditioning and sports training" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute bottom-4 left-4 z-20">
                           <p className="text-blue-500 font-mono text-[11px] font-medium uppercase tracking-widest mb-1">Focus Area</p>
                           <p className="text-white font-bold uppercase text-lg">Mental</p>
                        </div>
                     </div>
                  </div>
                  {/* Decor */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/40 blur-[100px] -z-10 rounded-full"></div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default AcademyCoaching;