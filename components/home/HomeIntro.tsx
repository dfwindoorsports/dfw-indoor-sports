'use client'

import React from 'react';
import Link from 'next/link';
import { Thermometer, Ruler, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';


const HomeIntro: React.FC = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
   };

   return (
      <section aria-label="About DFW Indoor Sports" className="relative py-24 md:py-32 bg-white overflow-hidden">

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Facility Overview Image */}
            <motion.div
               className="mb-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                     src="/images/home/home-intro-facility-overview.webp"
                     alt="50,000 sq ft indoor cricket lanes and badminton courts at DFW Indoor Sports in Fort Worth Texas"
                     fill
                     sizes="100vw"
                     className="object-cover"
                     priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/60 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                     <p className="text-white/80 text-xs font-mono uppercase tracking-widest">50,000 sq ft of Premier Sports Facilities</p>
                  </div>
               </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

               {/* Left Content — Concise and scannable */}
               <motion.div
                  className="lg:w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
               >
                  <motion.span variants={itemVariants} className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">About Our Facility</motion.span>
                  <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-dfw-navy uppercase leading-[0.95] mb-8">
                     A Place Where <br /> Everyone <span className="text-dfw-navy">Belongs</span>
                  </motion.h2>

                  <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
                     DFW Indoor Sports is more than a facility — it&apos;s a living, breathing community in the heart of Fort Worth. We built this space for families, athletes, and friends to come together through the love of the game.
                  </motion.p>

                  {/* Why Play Here — differentiators, not duplicated info */}
                  <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                           <Thermometer size={22} />
                        </div>
                        <div>
                           <h3 className="font-bold text-dfw-navy text-sm mb-1">Climate-Controlled</h3>
                           <p className="text-sm text-gray-500 leading-relaxed">68–72°F year-round. No Texas heat, no rain delays — perfect conditions every time.</p>
                        </div>
                     </motion.div>
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-red-50 text-dfw-red rounded-xl shrink-0">
                           <Ruler size={22} />
                        </div>
                        <div>
                           <h3 className="font-bold text-dfw-navy text-sm mb-1">50,000 Sq Ft Facility</h3>
                           <p className="text-sm text-gray-500 leading-relaxed">Purpose-built courts and fields with professional lighting and surfaces.</p>
                        </div>
                     </motion.div>
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-xl shrink-0">
                           <Award size={22} />
                        </div>
                        <div>
                           <h3 className="font-bold text-dfw-navy text-sm mb-1">7 Sports Under One Roof</h3>
                           <p className="text-sm text-gray-500 leading-relaxed">Cricket, badminton, soccer, dodgeball, volleyball, pickleball, and baseball.</p>
                        </div>
                     </motion.div>
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                           <ShieldCheck size={22} />
                        </div>
                        <div>
                           <h3 className="font-bold text-dfw-navy text-sm mb-1">Certified Coaches</h3>
                           <p className="text-sm text-gray-500 leading-relaxed">ICC and Cricket Australia certified professionals with international experience.</p>
                        </div>
                     </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                     <Link href="/sports" className="inline-flex items-center gap-2 px-8 py-4 bg-dfw-navy text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-gray-800 transition-colors">
                        Explore Our Sports <ArrowRight size={14} />
                     </Link>
                  </motion.div>
               </motion.div>

               {/* Right: Quick Reference Card — non-duplicated info */}
               <motion.div
                  className="lg:w-2/5 w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <div className="bg-gray-50 border border-gray-200 p-8 md:p-10 rounded-xl shadow-lg">
                     <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase tracking-wider mb-8 border-b border-gray-200 pb-4">
                        Quick Reference
                     </h3>

                     <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                           <div className="w-10 h-10 bg-dfw-red/10 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-dfw-red text-sm font-bold">4</span>
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Core Sports</span>
                              <p className="text-sm font-medium text-dfw-navy leading-snug">
                                 <Link href="/cricket-lanes" className="hover:text-dfw-red transition-colors">Cricket</Link>,{' '}
                                 <Link href="/badminton-courts" className="hover:text-dfw-red transition-colors">Badminton</Link>,{' '}
                                 <Link href="/soccer-fields" className="hover:text-dfw-red transition-colors">Soccer</Link>,{' '}
                                 <Link href="/dodgeball-courts" className="hover:text-dfw-red transition-colors">Dodgeball</Link>
                              </p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start">
                           <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-blue-600 text-sm font-bold">$</span>
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Pricing</span>
                              <p className="text-sm font-medium text-dfw-navy leading-snug">Rentals from $35/hr · Members from $70/mo</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start">
                           <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-green-600 text-sm font-bold">✓</span>
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Equipment</span>
                              <p className="text-sm font-medium text-dfw-navy leading-snug">All gear provided free — bats, rackets, balls, pads, helmets</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-start">
                           <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-amber-600 text-sm font-bold">★</span>
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">Walk-ins Welcome</span>
                              <p className="text-sm font-medium text-dfw-navy leading-snug">No booking required (subject to availability). Book online for guaranteed slots.</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default HomeIntro;