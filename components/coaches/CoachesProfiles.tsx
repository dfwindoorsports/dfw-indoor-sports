'use client'

import React from 'react';
import { Activity, Award, Brain, Globe, Users, Target, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CoachesProfiles: React.FC = () => {
  return (
    <section aria-label="Coaching staff profiles" className="py-24 bg-[#FAFAFA] relative overflow-hidden transition-colors duration-300" id="faculty">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
       <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03]"></div>
       
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="mb-24 md:mb-32 max-w-3xl"
          >
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">The Faculty</span>
             <h2 className="text-5xl md:text-7xl font-header font-bold text-dfw-navy uppercase leading-none mb-6">
                Architects of <br/> Character
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                We recruit for empathy as much as expertise. Meet the mentors who will guide your journey.
             </p>
          </motion.div>

          <div className="space-y-32">
             
             {/* === Profile 01: Prashant === */}
             <motion.div 
               transition={{ duration: 0.8 }}
               className="group relative"
             >
                <div className="absolute -top-20 -left-10 text-[150px] md:text-[200px] font-header font-bold text-gray-200/50 select-none z-0 leading-none">01</div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                   <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
                         <div className="absolute inset-0 bg-dfw-navy/10 mix-blend-multiply z-10"></div>
                         <Image 
                            src="/images/Prashant_Kamble.avif" 
                            alt="Prashant Kamble - Head Coach" 
                            fill
                            className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                         />
                         <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 text-white">
                            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                               <div>
                                  <h3 className="text-3xl font-header font-bold uppercase tracking-wide">Prashant Kamble</h3>
                                  <p className="text-dfw-red font-mono text-xs uppercase tracking-widest">Head Coach</p>
                               </div>
                               <div className="px-2 py-1 border border-white/30 rounded text-\[11px\] font-bold tracking-widest">CA LEVEL 2</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Certification</span>Cricket Australia</div>
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Specialty</span>High Performance</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="lg:col-span-7 pt-8">
                      <div className="flex items-center gap-4 mb-8">
                         <span className="px-3 py-1 bg-dfw-navy text-white text-\[11px\] font-bold uppercase tracking-widest rounded-lg border border-transparent">Elite Tier</span>
                         <span className="h-px w-12 bg-gray-300"></span>
                         <span className="text-gray-400 font-mono text-xs uppercase">Since 2009</span>
                      </div>
                      <div className="relative mb-10 pl-8 border-l-4 border-dfw-red">
                         <Quote size={24} className="text-dfw-red absolute top-0 left-[-40px] opacity-20" />
                         <p className="text-2xl md:text-3xl font-header font-bold text-dfw-navy leading-tight italic">
                            "Technique is the foundation, but intelligence wins matches. We build <span className="text-dfw-red">thinking cricketers</span>."
                         </p>
                      </div>
                      <div className="prose prose-lg text-gray-500 mb-10 leading-relaxed font-light">
                         <p>
                            Prashant leads our coaching operations with elite certification and a journey that began in Australia's rigorous development system. He specializes in optimizing batting technique and mentoring young talent, believing that cricket is learned through understanding, not just repetition.
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                         <div className="space-y-4">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4 flex items-center gap-2"><Activity size={14} className="text-dfw-red" /> Technical Focus</h4>
                            {[{ label: "Batting Biomechanics", val: "95%" }, { label: "Video Analysis", val: "90%" }, { label: "Youth Psychology", val: "88%" }].map((skill, i) => (
                               <div key={i}>
                                  <div className="flex justify-between text-\[11px\] font-bold uppercase text-gray-500 mb-1"><span>{skill.label}</span><span>{skill.val}</span></div>
                                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-dfw-navy transition-all duration-1000 ease-out group-hover:bg-dfw-red" style={{ width: skill.val }}></div></div>
                               </div>
                            ))}
                         </div>
                         <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4">Key Achievement</h4>
                            <div className="flex items-start gap-4">
                               <div className="p-2 bg-gray-50 text-dfw-red rounded-lg border border-gray-100"><Award size={20} /></div>
                               <div><p className="font-bold text-dfw-navy text-sm mb-1">Developed 20+ First Class Cricketers</p><p className="text-xs text-gray-500 leading-relaxed">Through structured pathway programs in Australia and India.</p></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* === Profile 02: Prem === */}
             <motion.div 
               transition={{ duration: 0.8 }}
               className="group relative"
             >
                <div className="absolute -top-20 -right-10 text-[150px] md:text-[200px] font-header font-bold text-gray-200/50 select-none z-0 leading-none text-right w-full">02</div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                   <div className="lg:col-span-7 pt-8 order-2 lg:order-1">
                      <div className="flex items-center gap-4 mb-8">
                         <span className="px-3 py-1 bg-blue-900 text-white text-\[11px\] font-bold uppercase tracking-widest rounded-lg">Operations</span>
                         <span className="h-px w-12 bg-gray-300"></span>
                         <span className="text-gray-400 font-mono text-xs uppercase">Global Exp</span>
                      </div>
                      <div className="relative mb-10 pl-8 border-l-4 border-blue-600">
                         <Quote size={24} className="text-blue-600 absolute top-0 left-[-40px] opacity-20" />
                         <blockquote className="text-2xl md:text-3xl font-header font-bold text-dfw-navy leading-tight italic">
                            "Every player is a unique puzzle. My job is to find the pieces that <span className="text-blue-600">unlock their potential</span>."
                         </blockquote>
                      </div>
                      <div className="prose prose-lg text-gray-500 mb-10 leading-relaxed font-light">
                         <p>
                             With over 15 years of experience across India, Singapore, Japan, and the USA, Prem brings a truly global perspective as Director of Coaching Operations. He ensures coaching quality across all programs and specializes in team tactics, pace bowling mechanics, and long-term athlete development pathways.
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                         <div className="space-y-4">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4 flex items-center gap-2"><Brain size={14} className="text-blue-600" /> Strategic Focus</h4>
                            {[{ label: "Tactical Planning", val: "92%" }, { label: "Bowling Development", val: "94%" }, { label: "Operations Mgmt", val: "90%" }].map((skill, i) => (
                               <div key={i}>
                                  <div className="flex justify-between text-\[11px\] font-bold uppercase text-gray-500 mb-1"><span>{skill.label}</span><span>{skill.val}</span></div>
                                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-900 transition-all duration-1000 ease-out group-hover:bg-blue-600" style={{ width: skill.val }}></div></div>
                               </div>
                            ))}
                         </div>
                         <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4">Key Achievement</h4>
                            <div className="flex items-start gap-4">
                               <div className="p-2 bg-gray-50 text-blue-600 rounded-lg border border-gray-100"><Globe size={20} /></div>
                               <div><p className="font-bold text-dfw-navy text-sm mb-1">Multi-National Experience</p><p className="text-xs text-gray-500 leading-relaxed">Successfully managed academies in 4 different cricket nations.</p></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="lg:col-span-5 relative order-1 lg:order-2">
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
                         <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10"></div>
                         <Image src="/images/Prem_Ahire.avif" alt="Prem Ahire - Director of Coaching Operations" fill className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out" sizes="(max-width: 1024px) 100vw, 40vw" />
                         <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 text-white">
                            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                               <div><h3 className="text-3xl font-header font-bold uppercase tracking-wide">Prem Ahire</h3><p className="text-blue-400 font-mono text-xs uppercase tracking-widest">Director of Coaching Operations</p></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Focus</span>Strategy</div>
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Experience</span>15+ Years</div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* === Profile 03: Anjan === */}
             <motion.div 
               transition={{ duration: 0.8 }}
               className="group relative"
             >
                <div className="absolute -top-20 -left-10 text-[150px] md:text-[200px] font-header font-bold text-gray-200/50 select-none z-0 leading-none">03</div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                   <div className="lg:col-span-5 relative">
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
                         <div className="absolute inset-0 bg-green-900/10 mix-blend-multiply z-10"></div>
                         <Image src="/images/Anjan_Medicherla.avif" alt="Anjan Medicherla - CricKingdom Dallas Academy Mentor" fill className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out" sizes="(max-width: 1024px) 100vw, 40vw" />
                         <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 text-white">
                            <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                               <div><h3 className="text-3xl font-header font-bold uppercase tracking-wide">Anjan Medicherla</h3><p className="text-green-400 font-mono text-xs uppercase tracking-widest">CricKingdom Dallas Academy Mentor</p></div>
                               <div className="px-2 py-1 border border-white/30 rounded text-\[11px\] font-bold tracking-widest">ICC LEVEL 2</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Focus</span>Mentorship</div>
                               <div><span className="block text-gray-500 uppercase text-\[11px\]">Community</span>DFW Region</div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="lg:col-span-7 pt-8">
                      <div className="flex items-center gap-4 mb-8">
                         <span className="px-3 py-1 bg-green-900 text-white text-\[11px\] font-bold uppercase tracking-widest rounded-lg">Mentor</span>
                         <span className="h-px w-12 bg-gray-300"></span>
                         <span className="text-gray-400 font-mono text-xs uppercase">ICC Certified</span>
                      </div>
                      <div className="relative mb-10 pl-8 border-l-4 border-green-600">
                         <Quote size={24} className="text-green-600 absolute top-0 left-[-40px] opacity-20" />
                         <blockquote className="text-2xl md:text-3xl font-header font-bold text-dfw-navy leading-tight italic">
                            "Cricket builds character. I'm here to ensure the next generation in Texas <span className="text-green-600">falls in love</span> with the game."
                         </blockquote>
                      </div>
                      <div className="prose prose-lg text-gray-500 mb-10 leading-relaxed font-light">
                         <p>
                            Anjan bridges the gap between international expertise and the local DFW community. An ICC Level 2 coach, he is deeply embedded in local leagues and excels at introducing the sport to beginners and youth. He connects academy players with real-world opportunities and competitive leagues.
                         </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                         <div className="space-y-4">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4 flex items-center gap-2"><Users size={14} className="text-green-600" /> Mentorship Focus</h4>
                            {[{ label: "Youth Engagement", val: "96%" }, { label: "Community Building", val: "94%" }, { label: "Beginner Instruction", val: "90%" }].map((skill, i) => (
                               <div key={i}>
                                  <div className="flex justify-between text-\[11px\] font-bold uppercase text-gray-500 mb-1"><span>{skill.label}</span><span>{skill.val}</span></div>
                                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-900 transition-all duration-1000 ease-out group-hover:bg-green-600" style={{ width: skill.val }}></div></div>
                               </div>
                            ))}
                         </div>
                         <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                            <h4 className="text-xs font-bold text-dfw-navy uppercase tracking-widest mb-4">Key Achievement</h4>
                            <div className="flex items-start gap-4">
                               <div className="p-2 bg-gray-50 text-green-600 rounded-lg border border-gray-100"><Target size={20} /></div>
                               <div><p className="font-bold text-dfw-navy text-sm mb-1">DFW Community Leader</p><p className="text-xs text-gray-500 leading-relaxed">Instrumental in organizing youth leagues across North Texas.</p></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default CoachesProfiles;