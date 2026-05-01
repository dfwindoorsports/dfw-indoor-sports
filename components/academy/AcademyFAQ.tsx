'use client'

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyFAQ: React.FC = () => {
  return (
    <section aria-label="Academy frequently asked questions" className="bg-gray-50 py-24 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 
            className="text-3xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
             {[
                { q: "What age can my child start cricket training?", a: "We welcome children as young as 6 years old into our youth development program. Our focus at this age is fun, coordination, and falling in love with the game." },
                { q: "Do I need cricket experience to join?", a: "Absolutely not. CricKingdom welcomes complete beginners with entry-level courses designed to teach the fundamentals from scratch." },
                { q: "Do you help players get recruited for college cricket?", a: "Yes. We provide exposure, video compilation, and athletic profile development to help talented players connect with collegiate programs." },
                { q: "What is the coach-to-student ratio?", a: "We maintain a maximum 1:6 coach-to-student ratio in group sessions to ensure every player receives adequate attention and feedback." },
                { q: "Can girls and women play cricket at CricKingdom?", a: "Absolutely! We are committed to growing the women's game and offer co-ed programs as well as support for female cricketers at all levels." }
             ].map((item, idx) => (
                <motion.details 
                  key={idx} 
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm open:shadow-md transition-all duration-300"
                >
                   <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-dfw-navy uppercase tracking-wide text-sm select-none hover:bg-gray-50 transition-colors">
                      {item.q}
                      <span className="transition-transform group-open:rotate-180 text-gray-400">
                         <ChevronRight size={16} />
                      </span>
                   </summary>
                   <div className="p-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2 ml-4 pl-4 border-l-2 border-dfw-red/20">
                      {item.a}
                   </div>
                </motion.details>
             ))}
          </div>
       </div>
    </section>
  );
};

export default AcademyFAQ;