'use client'

import React from 'react';
import { Star, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const CoachesAgeGroups: React.FC = () => {
  return (
    <section aria-label="Coaching age groups" className="py-24 bg-gray-50 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">Coaching for Every Stage</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">We adapt our instruction to match the physical, mental, and social development of each age group.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Youth */}
             <motion.div 
               className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-dfw-navy transition-colors group"
             >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                   <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-dfw-navy uppercase mb-2">Youth (6-12)</h3>
                <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-4">Fun & Fundamentals</p>
                <ul className="space-y-3 text-sm text-gray-600">
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Game-based learning</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Basic technique & movement</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Positive reinforcement</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Social development</li>
                </ul>
             </motion.div>

             {/* Junior */}
             <motion.div 
               transition={{ delay: 0.1 }}
               className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-dfw-navy transition-colors group"
             >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-dfw-navy uppercase mb-2">Junior (13-17)</h3>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-4">Competitive Skill</p>
                <ul className="space-y-3 text-sm text-gray-600">
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Technical refinement</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Strategic education</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Strength & conditioning</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500" /> Pathway development</li>
                </ul>
             </motion.div>

             {/* Adult */}
             <motion.div 
               transition={{ delay: 0.2 }}
               className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:border-dfw-navy transition-colors group"
             >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                   <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-dfw-navy uppercase mb-2">Adult</h3>
                <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mb-4">Recreation & Pro</p>
                <ul className="space-y-3 text-sm text-gray-600">
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Respecting existing knowledge</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Time-efficient training</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Injury prevention</li>
                   <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-500" /> Customized goals</li>
                </ul>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default CoachesAgeGroups;