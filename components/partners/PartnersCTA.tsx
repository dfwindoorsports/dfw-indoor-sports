'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersCTA: React.FC = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      level: 'Interested Level...'
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrorMessage('');

      try {
         const response = await fetch('/api/partners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Failed to submit inquiry');
         }

         setIsSubmitted(true);
         setFormData({ firstName: '', lastName: '', company: '', email: '', level: 'Interested Level...' });
      } catch (error) {
         setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
   };

   return (
      <section className="py-24 bg-dfw-navy relative overflow-hidden" id="contact-partners">
         <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

               <motion.div
                  className="lg:w-1/2 text-center lg:text-left"
               >
                  <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Take The Next Step</span>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase mb-6 leading-tight">
                     Invest in Community. <br /> Grow With Us.
                  </h2>
                  <p className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                     Limited category exclusivity and prime visibility locations are available. Partner with North Texas's premier sports facility today.
                  </p>
                  <div className="flex flex-col gap-6 text-sm text-gray-300">
                     <div className="flex items-center gap-4 justify-center lg:justify-start group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-dfw-red transition-colors"><Mail size={16} /></div>
                        <span>partnerships@dfwindoorsports.com</span>
                     </div>
                     <div className="flex items-center gap-4 justify-center lg:justify-start group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-dfw-red transition-colors"><Phone size={16} /></div>
                        <span>(817) 938-0808</span>
                     </div>
                     <div className="flex items-center gap-4 justify-center lg:justify-start group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-dfw-red transition-colors"><MapPin size={16} /></div>
                        <span>16230 Three Wide Dr Suite 200, Fort Worth</span>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  className="lg:w-1/2 w-full"
               >
                  {isSubmitted ? (
                     <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-white/10 text-center py-24">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                           <CheckCircle2 size={32} className="text-white" />
                        </div>
                        <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-2">Proposal Requested</h3>
                        <p className="text-gray-500">Our partnerships team will review your details and contact you within 24 hours.</p>
                        <button onClick={() => setIsSubmitted(false)} className="mt-8 text-xs font-bold text-dfw-red uppercase tracking-widest hover:text-white transition-colors">Submit Another</button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-xl shadow-2xl space-y-6 relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dfw-red to-red-600"></div>

                        <h3 className="font-header font-bold text-dfw-navy uppercase text-2xl mb-2">Request Proposal</h3>
                        <p className="text-xs text-gray-500 mb-6">Fill out the form below and our partnerships team will be in touch within 24 hours.</p>

                        <div className="grid grid-cols-2 gap-6">
                           <div className="relative group">
                              <input required type="text" className="peer w-full border-b border-gray-300 py-2 text-sm text-dfw-navy focus:outline-none focus:border-dfw-red transition-colors bg-transparent placeholder-transparent" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                              <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dfw-red cursor-text">First Name</label>
                           </div>
                           <div className="relative group">
                              <input required type="text" className="peer w-full border-b border-gray-300 py-2 text-sm text-dfw-navy focus:outline-none focus:border-dfw-red transition-colors bg-transparent placeholder-transparent" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                              <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dfw-red cursor-text">Last Name</label>
                           </div>
                        </div>

                        <div className="relative group">
                           <input required type="text" className="peer w-full border-b border-gray-300 py-2 text-sm text-dfw-navy focus:outline-none focus:border-dfw-red transition-colors bg-transparent placeholder-transparent" id="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                           <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dfw-red cursor-text">Company Name</label>
                        </div>

                        <div className="relative group">
                           <input required type="email" className="peer w-full border-b border-gray-300 py-2 text-sm text-dfw-navy focus:outline-none focus:border-dfw-red transition-colors bg-transparent placeholder-transparent" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                           <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-dfw-red cursor-text">Email Address</label>
                        </div>

                        <div className="relative group">
                           <select id="level" value={formData.level} onChange={handleChange} className="w-full border-b border-gray-300 py-2 text-sm text-gray-500 focus:outline-none focus:border-dfw-red bg-transparent cursor-pointer">
                              <option>Interested Level...</option>
                              <option>Bronze</option>
                              <option>Silver</option>
                              <option>Gold</option>
                              <option>Platinum</option>
                              <option>Custom / Not Sure</option>
                           </select>
                        </div>

                        {errorMessage && (
                           <div className="bg-red-50 border border-red-200 p-3 rounded text-red-600 text-xs">
                              {errorMessage}
                           </div>
                        )}

                        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-dfw-red text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-red-700 transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                           {isSubmitting ? (
                              <><Loader2 size={14} className="animate-spin" /> Submitting...</>
                           ) : (
                              <>Submit Inquiry <Send size={14} className="group-hover:translate-x-1 transition-transform" /></>
                           )}
                        </button>
                     </form>
                  )}
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default PartnersCTA;