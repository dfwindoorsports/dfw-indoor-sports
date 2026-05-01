'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const MembershipsGuide: React.FC = () => {
   return (
      <section aria-label="Membership selection guide" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden border-y border-gray-200">
         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Family Membership Image Banner */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
            >
               <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto border border-gray-200">
                  <OptimizedImage
                     src="/images/memberships/memberships-guide-family.webp"
                     alt="Happy family enjoying sports together at DFW Indoor Sports"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                     <p className="text-white font-header font-bold text-xl md:text-2xl uppercase">Find Your Perfect Membership</p>
                     <p className="text-white/70 text-xs font-mono uppercase tracking-widest mt-1">Individual • Family • Group Options</p>
                  </div>
               </div>
            </motion.div>

            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl font-header font-bold text-dfw-navy uppercase mb-12 text-center"
            >
               Which Plan Fits You?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { question: "Play Both Sports?", answer: "If you cross-train or just like variety.", plan: "→ Gold Membership ($109)" },
                  { question: "Cricket Only?", answer: "Training 3+ times a week for competition.", plan: "→ Cricket Unlimited ($129)" },
                  { question: "Badminton Only?", answer: "Want the best value for court time.", plan: "→ Badminton Half-Yearly ($70)" },
                  { question: "Have Kids?", answer: "If 2+ family members play.", plan: "→ Family Gold ($129)" }
               ].map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
                  >
                     <h4 className="font-bold text-dfw-red uppercase mb-2">{item.question}</h4>
                     <p className="text-sm text-gray-500 mb-4">{item.answer}</p>
                     <p className="font-bold text-dfw-navy uppercase text-sm">{item.plan}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default MembershipsGuide;