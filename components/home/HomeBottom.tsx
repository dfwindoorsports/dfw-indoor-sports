import React from 'react';
import { ArrowRight, Calendar, Bell, Trophy } from 'lucide-react';
import Link from 'next/link';

const HomeBottom: React.FC = () => {
   return (
      <>
         {/* News Section */}
         <section className="py-24 bg-gray-50 border-t border-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
               <div className="flex justify-between items-end mb-12">
                  <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase">Latest Updates</h2>
                  <Link href="/events" className="hidden md:flex items-center gap-2 text-xs font-bold text-dfw-navy uppercase tracking-widest hover:text-dfw-red transition-colors">View All Events <ArrowRight size={14} aria-hidden="true" /></Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-dfw-red mb-4"><Bell size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2">Academy Enrollment Open</h3>
                     <p className="text-xs text-gray-500 mb-4">CricKingdom spring session registration is now live. Limited spots available.</p>
                     <span className="text-[10px] text-green-600 uppercase font-mono font-bold">Register Now</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-blue-600 mb-4"><Trophy size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2">Tournament Results</h3>
                     <p className="text-xs text-gray-500 mb-4">Congratulations to the winners of our Winter Badminton Championship.</p>
                     <span className="text-[10px] text-blue-600 uppercase font-mono font-bold">Results Posted</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                     <div className="text-green-600 mb-4"><Calendar size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2">New Member Special</h3>
                     <p className="text-xs text-gray-500 mb-4">Join in December to get 20% off first month + waived fees.</p>
                     <span className="text-[10px] text-red-500 uppercase font-mono font-bold">Limited Time</span>
                  </div>
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-32 bg-dfw-navy relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Limited Time Offer</span>
               <h2 className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-8">
                  Join The <span className="text-dfw-red">Community</span>
               </h2>
               <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg mb-10">
                  <p className="text-white text-sm font-bold uppercase mb-4">New Member Package</p>
                  <ul className="text-gray-300 text-xs space-y-2 text-left mx-auto max-w-xs">
                     <li className="flex justify-between"><span>Waived Reg. Fee</span> <span className="text-green-400 font-bold">Free</span></li>
                     <li className="flex justify-between"><span>1st Month Discount</span> <span className="text-green-400 font-bold">20% Off</span></li>
                     <li className="flex justify-between"><span>Guest Passes</span> <span className="text-green-400 font-bold">2 Included</span></li>
                  </ul>
               </div>

               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/memberships" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                     Claim Offer Online
                  </Link>
                  <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-dfw-navy transition-colors">
                     Schedule Visit
                  </Link>
               </div>
            </div>

            {/* Trust Footer Strip */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/20 py-4 hidden md:block">
               <div className="container mx-auto flex justify-center gap-12 text-[10px] font-medium font-mono text-gray-500 uppercase tracking-widest">
                  <span>✓ Intl Standard Facilities</span>
                  <span>✓ Certified Coaches</span>
                  <span>✓ 500+ Active Members</span>
                  <span>✓ 7 Sports</span>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBottom;