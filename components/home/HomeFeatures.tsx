'use client'

import React from 'react';
import { ArrowRight, Target, Wind, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const HomeFeatures: React.FC = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
   };

   const sports = [
      {
         name: 'Cricket',
         icon: Target,
         image: '/images/home/home-features-lighting.webp',
         description: 'Train on international-standard lanes with bowling machines, video analysis, and ICC-certified coaching.',
         link: '/cricket-lanes',
         linkText: 'Cricket Lanes',
         accentColor: 'bg-dfw-red',
         bgColor: 'bg-red-50',
         textColor: 'text-dfw-red',
         hoverBg: 'group-hover:bg-dfw-red',
         price: 'From $35/hr',
      },
      {
         name: 'Badminton',
         icon: Wind,
         image: '/images/home/home-features-community.webp',
         description: 'Six BWF-regulation courts with professional flooring designed to be kind to your joints while you play.',
         link: '/badminton-courts',
         linkText: 'Badminton Courts',
         accentColor: 'bg-blue-600',
         bgColor: 'bg-blue-50',
         textColor: 'text-blue-600',
         hoverBg: 'group-hover:bg-blue-600',
         price: 'From $30/hr',
      },
      {
         name: 'Soccer',
         icon: Activity,
         image: '/images/home/home-features-turf-closeup.webp',
         description: 'Climate-controlled indoor turf for leagues and casual play. Fast-paced 5-a-side in perfect conditions.',
         link: '/soccer-fields',
         linkText: 'Soccer Fields',
         accentColor: 'bg-green-600',
         bgColor: 'bg-green-50',
         textColor: 'text-green-600',
         hoverBg: 'group-hover:bg-green-600',
         price: 'From $100/hr',
      },
      {
         name: 'Dodgeball',
         icon: Zap,
         image: '/images/home/home-features-climate-control.webp',
         description: 'Pure energy and laughter. The ultimate social sport for parties, team building, or blowing off steam.',
         link: '/dodgeball-courts',
         linkText: 'Dodgeball Courts',
         accentColor: 'bg-purple-600',
         bgColor: 'bg-purple-50',
         textColor: 'text-purple-600',
         hoverBg: 'group-hover:bg-purple-600',
         price: 'From $100/hr',
      }
   ];

   return (
      <section aria-label="Sports we offer" className="bg-gray-50 py-24 md:py-32 relative overflow-hidden">

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            <motion.div
               className="text-center max-w-3xl mx-auto mb-20"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Our Sports</span>
               <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase leading-tight">
                  Find Your Game
               </h2>
               <p className="text-gray-500 mt-4 text-lg font-light">
                  Four ways to move, compete, and connect — all under one roof.
               </p>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
               {sports.map((sport) => {
                  const Icon = sport.icon;
                  return (
                     <motion.div
                        key={sport.name}
                        variants={cardVariants}
                        className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-[420px]"
                     >
                        {/* Color accent bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1 ${sport.accentColor} z-20`} />

                        {/* Background Image */}
                        <div className="absolute inset-0">
                           <OptimizedImage
                              src={sport.image}
                              alt={`${sport.name} facilities at DFW Indoor Sports Fort Worth`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy via-dfw-navy/70 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                           <div className={`w-12 h-12 ${sport.bgColor} ${sport.textColor} rounded-xl flex items-center justify-center mb-4 ${sport.hoverBg} group-hover:text-white transition-colors`}>
                              <Icon size={24} strokeWidth={1.5} />
                           </div>
                           <h3 className="text-xl font-header font-bold text-white uppercase mb-2">{sport.name}</h3>
                           <p className="text-sm text-gray-300 leading-relaxed mb-2">
                              {sport.description}
                           </p>
                           <p className="text-xs text-white/60 font-mono uppercase tracking-wider mb-4">{sport.price}</p>
                           <Link href={sport.link} className={`text-xs font-bold ${sport.textColor} uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all`}>
                              {sport.linkText} <ArrowRight size={14} />
                           </Link>
                        </div>
                     </motion.div>
                  );
               })}
            </motion.div>
         </div>
      </section>
   );
};

export default HomeFeatures;