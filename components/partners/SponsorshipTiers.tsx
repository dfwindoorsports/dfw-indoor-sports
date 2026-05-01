'use client'

import React, { useState } from 'react';
import { Globe, Shirt, Trophy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SponsorshipTiers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'digital' | 'onsite' | 'full'>('digital');

  return (
    <section aria-label="Sponsorship tier benefits" className="py-24 md:py-32 bg-white transition-colors duration-300" id="benefits">
       <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Opportunities</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-8">Comprehensive Packages</h2>
             
             {/* Enhanced Tab Switcher */}
             <div className="inline-flex bg-gray-100 p-1.5 rounded-full relative">
                {/* Sliding Background */}
                <motion.div 
                   className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-md"
                   initial={false}
                   animate={{
                      left: activeTab === 'digital' ? '6px' : activeTab === 'onsite' ? 'calc(33.33% + 4px)' : 'calc(66.66% + 2px)',
                      width: 'calc(33.33% - 8px)'
                   }}
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.div>

                <button 
                   onClick={() => setActiveTab('digital')}
                   className={`relative z-10 w-24 md:w-40 py-3 text-\[11px\] md:text-xs font-bold uppercase tracking-widest rounded-full transition-colors ${activeTab === 'digital' ? 'text-dfw-navy' : 'text-gray-500 hover:text-dfw-navy'}`}
                >
                   Digital
                </button>
                <button 
                   onClick={() => setActiveTab('onsite')}
                   className={`relative z-10 w-24 md:w-40 py-3 text-\[11px\] md:text-xs font-bold uppercase tracking-widest rounded-full transition-colors ${activeTab === 'onsite' ? 'text-dfw-navy' : 'text-gray-500 hover:text-dfw-navy'}`}
                >
                   On-Site
                </button>
                <button 
                   onClick={() => setActiveTab('full')}
                   className={`relative z-10 w-24 md:w-40 py-3 text-\[11px\] md:text-xs font-bold uppercase tracking-widest rounded-full transition-colors ${activeTab === 'full' ? 'text-dfw-navy' : 'text-gray-500 hover:text-dfw-navy'}`}
                >
                   Full Partner
                </button>
             </div>
          </div>

          <div className="max-w-6xl mx-auto min-h-[400px]">
             <AnimatePresence mode="wait">
                {/* Tier 1: Digital */}
                {activeTab === 'digital' && (
                   <motion.div 
                     key="digital"
                     
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.4 }}
                   >
                      <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                         <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Globe size={24} /></div>
                         <div>
                            <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase">Tier 1: Digital Exposure</h3>
                            <p className="text-sm text-gray-500">Reach our audience before they even step in the door.</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {[
                            { title: "Homepage Logo Placement", desc: "Prominent logo display welcoming every visitor (10k+ monthly impressions) with a direct backlink.", val: "75%", label: "High Visibility" },
                            { title: "Email Marketing", desc: "Logo banner in monthly newsletters sent to 500+ engaged subscribers. High open rates.", val: "50%", label: "Targeted Reach" },
                            { title: "Social Media Recognition", desc: "Regular mentions and partner spotlight posts across Instagram, Facebook, and LinkedIn.", val: "66%", label: "Engagement" },
                            { title: "Sponsored Program Highlight", desc: "Recognition on specific program pages (e.g., Cricket Academy) connecting you to niche demographics.", val: "100%", label: "Contextual Relevance" }
                         ].map((item, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all group">
                               <h4 className="font-bold text-dfw-navy mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                               <p className="text-sm text-gray-500 mb-6 leading-relaxed">{item.desc}</p>
                               <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: item.val }}></div></div>
                               <p className="text-\[11px\] font-medium text-gray-400 mt-2 text-right">{item.label}</p>
                            </div>
                         ))}
                      </div>
                   </motion.div>
                )}

                {/* Tier 2: On-Site */}
                {activeTab === 'onsite' && (
                   <motion.div 
                     key="onsite"
                     
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.4 }}
                   >
                      <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                         <div className="p-3 bg-green-50 text-green-600 rounded-lg"><Shirt size={24} /></div>
                         <div>
                            <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase">Tier 2: Physical Presence</h3>
                            <p className="text-sm text-gray-500">Engage directly with the community on the ground.</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {[
                            { title: "Program T-Shirts", desc: "Logo on official jerseys worn by hundreds of players and staff. Walking advertisements across DFW.", badge: "High Visibility" },
                            { title: "Field & Court Boards", desc: "Branded signage in high-traffic zones (Cricket lanes, Courts). Constant exposure 18 hours a day.", badge: "12-Month Min" },
                            { title: "Marketing Screens", desc: "Digital ads rotating on internal TVs in lobby, lounge, and pro shop areas.", badge: "Dynamic" },
                            { title: "Facility Banners", desc: "Large-format banners at main entrance. Maximum visibility for every single visitor.", badge: "Premium Spot" }
                         ].map((item, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all group">
                               <div className="flex justify-between items-start mb-4">
                                  <h4 className="font-bold text-dfw-navy text-lg group-hover:text-green-600 transition-colors">{item.title}</h4>
                                  <span className="text-\[11px\] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{item.badge}</span>
                               </div>
                               <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                         ))}
                      </div>
                   </motion.div>
                )}

                {/* Tier 3: Full */}
                {activeTab === 'full' && (
                   <motion.div 
                     key="full"
                     
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.4 }}
                   >
                      <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                         <div className="p-3 bg-dfw-navy text-dfw-red rounded-lg"><Trophy size={24} /></div>
                         <div>
                            <h3 className="text-2xl font-header font-bold text-dfw-navy uppercase">Tier 3: Full Partnership</h3>
                            <p className="text-sm text-gray-500">Amplify your reach with comprehensive integration.</p>
                         </div>
                      </div>
                      <div className="bg-dfw-navy rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
                         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
                         <div className="absolute top-0 right-0 w-96 h-96 bg-dfw-red/10 rounded-full blur-[100px] pointer-events-none"></div>
                         
                         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                               <h4 className="font-bold text-2xl uppercase mb-6 text-white border-b border-white/10 pb-4">Presenting Sponsor</h4>
                               <ul className="space-y-4">
                                  {[
                                     { title: "Naming Rights", desc: "League or Tournament Title Sponsor." },
                                     { title: "Category Exclusivity", desc: "Block competitors from advertising." },
                                     { title: "Co-branded Events", desc: "Joint activation days and product launches." }
                                  ].map((item, i) => (
                                     <li key={i} className="flex items-start gap-4">
                                        <div className="p-1 bg-dfw-red/20 rounded text-dfw-red"><CheckCircle2 size={16} /></div>
                                        <div>
                                           <strong className="block text-white text-sm uppercase tracking-wide">{item.title}</strong>
                                           <span className="text-xs text-gray-400">{item.desc}</span>
                                        </div>
                                     </li>
                                  ))}
                               </ul>
                            </div>
                            <div>
                               <h4 className="font-bold text-2xl uppercase mb-6 text-white border-b border-white/10 pb-4">VIP Benefits</h4>
                               <ul className="space-y-4">
                                  {[
                                     { title: "Memberships", desc: "5 Complimentary Gold Memberships." },
                                     { title: "Corporate Events", desc: "Private facility rental privileges." },
                                     { title: "Concierge", desc: "Quarterly strategy and ROI reviews." }
                                  ].map((item, i) => (
                                     <li key={i} className="flex items-start gap-4">
                                        <div className="p-1 bg-dfw-red/20 rounded text-dfw-red"><CheckCircle2 size={16} /></div>
                                        <div>
                                           <strong className="block text-white text-sm uppercase tracking-wide">{item.title}</strong>
                                           <span className="text-xs text-gray-400">{item.desc}</span>
                                        </div>
                                     </li>
                                  ))}
                               </ul>
                            </div>
                         </div>
                         <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col items-center">
                            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">Includes ALL Tier 1 & Tier 2 Benefits</p>
                            <button className="px-10 py-4 bg-dfw-red text-white font-bold uppercase text-xs rounded-lg hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(214,40,40,0.4)]">Request Platinum Proposal</button>
                         </div>
                      </div>
                   </motion.div>
                )}
             </AnimatePresence>
          </div>
       </div>
    </section>
  );
};

export default SponsorshipTiers;