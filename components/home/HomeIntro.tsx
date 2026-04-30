'use client'

import React from 'react';
import Link from 'next/link';
import { Sun, Heart, Users, MapPin, Clock, DollarSign } from 'lucide-react';
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
      <section className="relative py-24 md:py-32 bg-[#0A111F] dark:bg-[#020408] transition-colors duration-300 overflow-hidden">


         {/* Clean background - professional local business style */}

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Facility Overview Image */}
            <motion.div
               className="mb-16"
            >
               <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                     src="/images/home/home-intro-facility-overview.webp"
                     alt="50,000 sq ft indoor cricket lanes and badminton courts at DFW Indoor Sports Fort Worth Texas"
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

               {/* Left Content - Human Connection Focus */}
               <motion.div
                  className="lg:w-3/5"
                  variants={containerVariants}
               >
                  <motion.span variants={itemVariants} className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Our Philosophy</motion.span>
                  <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-white uppercase leading-[0.95] mb-8">
                     A Place Where <br /> Everyone <span className="text-white">Belongs</span>
                  </motion.h2>

                  <motion.div variants={itemVariants} className="prose prose-lg text-gray-400 leading-relaxed mb-10">
                     <p>
                        DFW Indoor Sports isn't just a facility; it's a living, breathing community in the heart of Fort Worth. It's the sound of sneakers on the court, the high-fives after a good play, and the friendships formed over a shared love of the game.
                     </p>
                     <p>
                        We built this space for you. Whether you're a parent looking for a safe place for your kids to grow, a professional refining your craft, or friends gathering for a weekend match, we've designed every inch to be welcoming, comfortable, and inspiring.
                     </p>
                  </motion.div>

                  <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-blue-900/20 text-blue-400 rounded-full"><Sun size={24} /></div>
                        <div>
                           <h3 className="font-bold text-white uppercase text-sm mb-1">Comfort First</h3>
                           <p className="text-xs text-gray-400 leading-relaxed">Escape the Texas heat or winter chill. Our climate-controlled space keeps you comfortable year-round.</p>
                        </div>
                     </motion.div>
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-red-900/20 text-red-400 rounded-full"><Heart size={24} /></div>
                        <div>
                           <h3 className="font-bold text-white uppercase text-sm mb-1">Quality You Feel</h3>
                           <p className="text-xs text-gray-400 leading-relaxed">From the flooring to the lighting, we've chosen materials that care for your joints and enhance your game.</p>
                        </div>
                     </motion.div>
                     <motion.div variants={itemVariants} className="flex items-start gap-4">
                        <div className="p-3 bg-green-900/20 text-green-400 rounded-full"><Users size={24} /></div>
                        <div>
                           <h3 className="font-bold text-white uppercase text-sm mb-1">Community Focused</h3>
                           <p className="text-xs text-gray-400 leading-relaxed">We are more than a rental space. We are a hub for leagues, events, and making connections.</p>
                        </div>
                     </motion.div>
                  </motion.div>
               </motion.div>

               {/* Right: Quick Answer Box (AEO Optimized) */}
               <motion.div
                  className="lg:w-2/5 w-full"
                  transition={{ duration: 0.6 }}
               >
                  {/* Simple Info Card - Traditional local business style */}
                  <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl shadow-lg">
                     <h3 className="text-2xl font-header font-bold text-white uppercase tracking-wider mb-8 border-b border-white/10 pb-4">
                        Quick Info
                     </h3>

                     <ul className="space-y-6">
                        <li className="flex gap-4 items-center">
                           <div className="w-10 h-10 bg-dfw-red/20 rounded-full flex items-center justify-center">
                              <Users size={18} className="text-dfw-red" />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Sports We Offer</span>
                              <p className="text-sm font-medium text-white leading-snug">
                                 <Link href="/cricket-lanes" className="hover:text-dfw-red transition-colors">Cricket</Link>,{' '}
                                 <Link href="/badminton-courts" className="hover:text-dfw-red transition-colors">Badminton</Link>,{' '}
                                 <Link href="/soccer-fields" className="hover:text-dfw-red transition-colors">Soccer</Link>,{' '}
                                 <Link href="/dodgeball-courts" className="hover:text-dfw-red transition-colors">Dodgeball</Link>
                              </p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-center">
                           <div className="w-10 h-10 bg-blue-900/20 rounded-full flex items-center justify-center">
                              <MapPin size={18} className="text-blue-400" />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Our Location</span>
                              <p className="text-sm font-medium text-white leading-snug">16230 Three Wide Dr Suite 200, Fort Worth</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-center">
                           <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center">
                              <DollarSign size={18} className="text-green-400" />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Pricing</span>
                              <p className="text-sm font-medium text-white leading-snug">Members from \/mo. Book rentals online.</p>
                           </div>
                        </li>
                        <li className="flex gap-4 items-center">
                           <div className="w-10 h-10 bg-amber-900/20 rounded-full flex items-center justify-center">
                              <Clock size={18} className="text-amber-400" />
                           </div>
                           <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Hours</span>
                              <p className="text-sm font-medium text-white leading-snug">Open Daily 5 AM - 11 PM</p>
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