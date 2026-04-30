import React from 'react';
import { MessageSquare, Clock, MapPin, Mail, ShieldCheck, UserCheck } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const ContactIntro: React.FC = () => {
   return (
      <section className="py-24 bg-white relative border-b border-gray-100 overflow-hidden">
         {/* Subtle background pattern */}
         <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-[0.03] pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">

            {/* Staff Photo - Trust Builder */}
            <div className="mb-12 flex justify-center">
               <div className="relative w-full max-w-2xl h-[250px] rounded-2xl overflow-hidden shadow-xl">
                  <OptimizedImage
                     src="/images/contact/contact-intro-front-desk.webp"
                     alt="Friendly front desk staff at DFW Indoor Sports ready to help"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dfw-navy/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                     <p className="text-white text-xs font-mono uppercase tracking-widest">Real People. Real Support.</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

               {/* Left: Text */}
               <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 mb-6">
                     <UserCheck size={16} className="text-dfw-navy" />
                     <span className="text-dfw-navy font-mono text-xs font-bold uppercase tracking-widest">Real People, Real Support</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-8 leading-[0.95]">
                     We're Here to <br /> <span className="text-dfw-navy">Solve, Not Stall.</span>
                  </h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed mb-10 font-light">
                     <p>
                        We know how frustrating it is to deal with automated systems when you just want to book a court or ask a question.
                     </p>
                     <p>
                        That's why our front desk is staffed by real humans who know the difference between a cricket pitch and a batting cage. Whether you need to reschedule a lane, plan a corporate event, or find lost gear, we're committed to sorting it out quickly.
                     </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-dfw-navy uppercase tracking-widest">
                     <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                        <ShieldCheck size={14} className="text-green-500" /> Verified Humans
                     </div>
                     <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                        <Clock size={14} className="text-blue-500" /> Rapid Response
                     </div>
                  </div>
               </div>

               {/* Right: Quick Answer Box (AEO Optimized) */}
               <div className="lg:w-1/2 w-full">
                  <div className="bg-[#0A111F] p-10 rounded-xl shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-shadow duration-500 border border-white/10">
                     {/* Decorative background */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/20 transition-colors duration-700"></div>
                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-dfw-red/10 rounded-full blur-[60px] pointer-events-none"></div>
                     <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                     <h3 className="font-header font-bold text-white uppercase text-xl mb-8 flex items-center gap-3 relative z-10">
                        <MessageSquare size={24} className="text-dfw-red" />
                        <span>Quick Facts</span>
                     </h3>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 relative z-10">
                        <div className="group/item">
                           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2 group-hover/item:text-blue-400 transition-colors"><Clock size={12} /> Operating Hours</p>
                           <p className="text-base font-bold text-white">Mon-Sun: 5am - 11pm</p>
                        </div>
                        <div className="group/item">
                           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2 group-hover/item:text-blue-400 transition-colors"><Mail size={12} /> Email Response</p>
                           <p className="text-base font-bold text-white">Within 24 Hours</p>
                        </div>
                        <div className="md:col-span-2 group/item">
                           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2 group-hover/item:text-blue-400 transition-colors"><MapPin size={12} /> HQ Location</p>
                           <p className="text-base font-bold text-white">16230 Three Wide Dr Suite 200, Fort Worth, TX 76177</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default ContactIntro;