'use client'

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersTestimonials: React.FC = () => {
   return (
      <section aria-label="Partner testimonials" className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
         <div className="container mx-auto px-4 md:px-6">
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl font-header font-bold text-dfw-navy uppercase mb-16 text-center"
            >
               Success Stories
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-lg relative shadow-sm hover:shadow-md transition-shadow"
               >
                  <Quote className="text-dfw-red mb-4 opacity-50" size={32} />
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                     &quot;Excellent facility for indoor cricket and badminton. Attentive staff and seamless 24/7 operations. This is indeed a great place for games and fitness activities.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gradient-to-br from-dfw-red to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">JT</div>
                     <div>
                        <p className="font-bold text-dfw-navy uppercase text-sm">James Tiwari</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Local Guide ★★★★★</p>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-gray-200 p-8 rounded-lg relative shadow-sm hover:shadow-md transition-shadow"
               >
                  <Quote className="text-dfw-red mb-4 opacity-50" size={32} />
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                     &quot;Excellent indoor cricket nets and badminton facility in Fort Worth! The turf is top-notch, and the facilities are well-maintained. Perfect for cricket enthusiasts and badminton players alike. Highly recommend for junior cricket training sessions!&quot;
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gradient-to-br from-dfw-red to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">PA</div>
                     <div>
                        <p className="font-bold text-dfw-navy uppercase text-sm">Prem Ahire</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Local Guide ★★★★★</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default PartnersTestimonials;