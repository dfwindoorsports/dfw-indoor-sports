'use client'

import React from 'react';
import { ShieldCheck, ShoppingBag, Trophy, ArrowRight, Video, Target, Shirt } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CricketExtras: React.FC = () => {
  return (
    <section aria-label="Cricket extras and coaching" className="bg-white py-24 border-t border-gray-200 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Academy */}
          <motion.div 
            className="bg-cricket rounded-2xl overflow-hidden relative mb-24 text-white shadow-2xl"
          >
             <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
                <div className="md:w-1/2">
                   <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                      <ShieldCheck size={14} className="text-dfw-red-700" />
                      <span className="text-\[11px\] font-bold uppercase tracking-widest">CricKingdom Academy</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-header font-bold uppercase mb-6">Professional Coaching</h2>
                   <p className="text-green-100 text-lg mb-8 leading-relaxed font-light">
                      Lane rental provides the space; coaching provides the direction. Partnered with Rohit Sharma's CricKingdom to bring international instruction to DFW.
                   </p>
                   <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                         <h4 className="font-bold text-white uppercase text-sm mb-1">Private 1:1</h4>
                         <p className="text-xs text-green-200">Personalized technical correction.</p>
                      </div>
                      <div>
                         <h4 className="font-bold text-white uppercase text-sm mb-1">Group Squads</h4>
                         <p className="text-xs text-green-200">Competitive match scenarios.</p>
                      </div>
                   </div>
                   <Link href="/academy" className="px-8 py-3 bg-dfw-red-700 text-white font-bold uppercase text-xs tracking-widest rounded-lg hover:bg-red-700 transition-colors inline-block">View Programs</Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                   {/* Placeholder for Coach/Action Image */}
                   <div className="relative w-full max-w-md aspect-[4/3] bg-black/20 rounded-lg border border-white/10 backdrop-blur-sm p-2">
                      <Image src="/images/hero/cricket-hero.webp" fill className="object-cover rounded" alt="Professional cricket coaching at DFW Indoor Sports" sizes="(max-width: 768px) 100vw, 50vw" />
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Pro Shop & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Pro Shop */}
             <motion.div 
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-gray-100 rounded-full text-cricket"><ShoppingBag size={24} /></div>
                   <h3 className="text-2xl font-header font-bold text-cricket uppercase">Pro Shop On-Site</h3>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                   Forget equipment? Need an upgrade? Our fully stocked pro shop carries everything from beginner setups to tournament-grade equipment. We also offer professional restringing services.
                </p>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><span className="w-1.5 h-1.5 bg-dfw-red-700 rounded-full"></span> Expert Bat Fitting</li>
                   <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><span className="w-1.5 h-1.5 bg-dfw-red-700 rounded-full"></span> 10% Member Discount</li>
                   <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><span className="w-1.5 h-1.5 bg-dfw-red-700 rounded-full"></span> Top Brands Stocked</li>
                </ul>
                <a href="https://store.dfwindoorsports.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cricket font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all">Visit Store <ArrowRight size={14} /></a>
             </motion.div>

             {/* Additional Services */}
             <motion.div 
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-gray-100 rounded-full text-cricket"><Trophy size={24} /></div>
                   <h3 className="text-2xl font-header font-bold text-cricket uppercase">Beyond Rental</h3>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-green-200 transition-colors group">
                      <h4 className="font-bold text-cricket text-sm uppercase mb-1 flex items-center gap-2">
                         <Target size={14} className="text-dfw-red-700" /> Tournament Prep
                      </h4>
                      <p className="text-xs text-gray-500">Rent multiple lanes for full team warm-ups before big matches.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-green-200 transition-colors group">
                      <h4 className="font-bold text-cricket text-sm uppercase mb-1 flex items-center gap-2">
                         <Video size={14} className="text-dfw-red-700" /> Skills Assessment
                      </h4>
                      <p className="text-xs text-gray-500">Comprehensive evaluation using video analysis and bowling machines.</p>
                   </div>
                   <div className="p-4 bg-gray-50 rounded border border-gray-100 hover:border-green-200 transition-colors group">
                      <h4 className="font-bold text-cricket text-sm uppercase mb-1 flex items-center gap-2">
                         <Shirt size={14} className="text-dfw-red-700" /> Birthday Parties
                      </h4>
                      <p className="text-xs text-gray-500">Cricket-themed parties with coaching and games. Contact us for party pricing.</p>
                   </div>
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default CricketExtras;