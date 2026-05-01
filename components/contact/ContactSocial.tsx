'use client'

import React, { useState } from 'react';
import { Instagram, Facebook, Video, Linkedin, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSocial: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section aria-label="Social media links" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
       <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="max-w-md text-center md:text-left"
             >
                <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-4">Stay Connected</h2>
                <p className="text-gray-500 text-sm mb-8">
                   Follow us for daily facility updates, member highlights, tournament photos, and training tips.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                   <a href="https://www.instagram.com/dfwindoorsports" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:bg-dfw-red hover:text-white transition-all group border border-gray-200 text-dfw-navy">
                      <Instagram size={20} />
                   </a>
                   <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all group border border-gray-200 text-dfw-navy">
                      <Facebook size={20} />
                   </a>
                   <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:bg-red-600 hover:text-white transition-all group border border-gray-200 text-dfw-navy">
                      <Video size={20} />
                   </a>
                   <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-700 hover:text-white transition-all group border border-gray-200 text-dfw-navy">
                      <Linkedin size={20} />
                   </a>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
             >
                <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2">Join Our Newsletter</h3>
                <p className="text-sm text-gray-500 mb-4">Get monthly updates on programs, events, and special offers.</p>
                <div className="flex gap-2">
                   <input 
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email Address" 
                     className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-dfw-navy focus:outline-none focus:border-dfw-red placeholder:text-gray-400" 
                   />
                   <button 
                     onClick={handleSubscribe}
                     className={`px-4 py-2 rounded-lg font-bold uppercase text-xs tracking-wider transition-colors ${subscribed ? 'bg-green-600 text-white' : 'bg-dfw-red hover:bg-red-600 text-white'}`}
                   >
                      {subscribed ? <Check size={16} /> : 'Sign Up'}
                   </button>
                </div>
             </motion.div>

          </div>
       </div>
    </section>
  );
};

export default ContactSocial;