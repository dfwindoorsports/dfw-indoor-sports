'use client'

import React from 'react';
import { Star, Quote, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
   {
      text: "Love the overall experience! The staff is friendly and the whole vibe just makes me want to come again and again!",
      author: "Abhishek Tiwari",
      role: "Google Review ★★★★★",
      highlight: "Amazing Vibe"
   },
   {
      text: "This facility consistently provides an excellent experience for us. The indoor cricket setup is exceptional, with well-kept grounds and superb lighting. The personnel was pleasant and helpful.",
      author: "Krishna Reddy",
      role: "Google Review ★★★★★",
      highlight: "Exceptional Setup"
   },
   {
      text: "Excellent facility for indoor cricket and badminton. Attentive staff and seamless 24/7 operations. This is indeed a great place for games and fitness activities.",
      author: "James Tiwari",
      role: "Local Guide ★★★★★",
      highlight: "Top-Notch Facility"
   }
];

const HomeTestimonials: React.FC = () => {
   return (
      <section aria-label="What our members say" className="py-24 md:py-32 bg-gradient-to-br from-dfw-navy to-[#050911] relative overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-dfw-red/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
               <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest mb-6 backdrop-blur-sm">
                  <Heart size={12} className="text-dfw-red fill-current" aria-hidden="true" /> Community Stories
               </span>
               <h2 className="text-3xl md:text-5xl font-header font-bold text-white uppercase mb-4">What Our Members Say</h2>
            </motion.div>

            {/* 3 testimonials in a clean 3-col grid — no orphan card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((t, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative group hover:bg-white/10 transition-colors"
                  >
                     {/* Quote icon inside card padding */}
                     <div className="mb-4 text-dfw-red">
                        <Quote size={24} fill="currentColor" />
                     </div>

                     <p className="text-white/60 font-mono text-xs uppercase tracking-widest mb-4">{t.highlight}</p>

                     <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">&quot;{t.text}&quot;</p>

                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dfw-red to-orange-500 flex items-center justify-center text-white font-bold text-xs">
                           {t.author.charAt(0)}
                        </div>
                        <div>
                           <p className="text-white font-bold uppercase text-sm">{t.author}</p>
                           <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Google Reviews link — trust signal */}
            <motion.div
               className="text-center mt-12"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
               <a
                  href="https://www.google.com/maps/place/DFW+Indoor+Sports/@33.0392,-97.3281,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d33.0392!4d-97.3281!9m1!1b1!16s%2Fg%2F11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
               >
                  <Star size={14} className="text-yellow-500" aria-hidden="true" />
                  5.0 Rating on Google — See All Reviews
                  <ExternalLink size={12} />
               </a>
            </motion.div>
         </div>
      </section>
   );
};

export default HomeTestimonials;