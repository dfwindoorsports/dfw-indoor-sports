import React from 'react';
import { ArrowRight, Calendar, Megaphone, Trophy } from 'lucide-react';
import Link from 'next/link';

const HomeBottom: React.FC = () => {
   return (
      <>
         {/* News / Updates Section */}
         <section aria-label="Latest updates and announcements" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
               <div className="flex justify-between items-end mb-12">
                  <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase">Latest Updates</h2>
                  <Link href="/events" className="hidden md:flex items-center gap-2 text-xs font-bold text-dfw-navy uppercase tracking-widest hover:text-dfw-red transition-colors">View All Events <ArrowRight size={14} aria-hidden="true" /></Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Link href="/academy" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                     <div className="text-dfw-red mb-4"><Megaphone size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2 group-hover:text-dfw-red transition-colors">Academy Enrollment Open</h3>
                     <p className="text-xs text-gray-500 mb-4">CricKingdom Academy registration is now live. Limited spots available for the next session.</p>
                     <span className="text-[11px] text-green-600 uppercase font-mono font-bold">Register Now →</span>
                  </Link>
                  <Link href="/events" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                     <div className="text-blue-600 mb-4"><Trophy size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2 group-hover:text-dfw-red transition-colors">Tournaments & Leagues</h3>
                     <p className="text-xs text-gray-500 mb-4">Join our upcoming badminton and cricket tournaments. All skill levels welcome.</p>
                     <span className="text-[11px] text-blue-600 uppercase font-mono font-bold">See Schedule →</span>
                  </Link>
                  <Link href="/memberships" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                     <div className="text-green-600 mb-4"><Calendar size={20} /></div>
                     <h3 className="font-bold text-dfw-navy uppercase text-sm mb-2 group-hover:text-dfw-red transition-colors">New Member Special</h3>
                     <p className="text-xs text-gray-500 mb-4">First-timers get a waived registration fee when joining any membership plan. Limited availability.</p>
                     <span className="text-[11px] text-dfw-red uppercase font-mono font-bold">Claim Offer →</span>
                  </Link>
               </div>
               {/* Mobile "View All" */}
               <div className="md:hidden mt-6">
                  <Link href="/events" className="flex items-center justify-center gap-2 text-xs font-bold text-dfw-navy uppercase tracking-widest hover:text-dfw-red transition-colors py-3">View All Events <ArrowRight size={14} /></Link>
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section aria-label="Join our community" className="py-24 md:py-32 bg-dfw-navy relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('/textures/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
               <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-6 block">Start Playing Today</span>
               <h2 className="text-4xl md:text-7xl font-header font-bold text-white uppercase mb-8">
                  Join The <span className="text-dfw-red">Community</span>
               </h2>
               <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg mb-10">
                  <p className="text-white text-sm font-bold uppercase mb-4">New Member Package</p>
                  <ul className="text-gray-300 text-xs space-y-2 text-left mx-auto max-w-xs">
                     <li className="flex justify-between"><span>Registration Fee</span> <span className="text-green-400 font-bold">Waived</span></li>
                     <li className="flex justify-between"><span>First Month</span> <span className="text-green-400 font-bold">20% Off</span></li>
                     <li className="flex justify-between"><span>Guest Passes</span> <span className="text-green-400 font-bold">2 Included</span></li>
                  </ul>
               </div>

               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/memberships" className="px-10 py-5 bg-dfw-red text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(214,40,40,0.4)]">
                     Explore Memberships
                  </Link>
                  <Link href="/contact" className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-white hover:text-dfw-navy transition-colors">
                     Schedule a Visit
                  </Link>
               </div>
            </div>

            {/* Trust Footer Strip — visible on ALL devices */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/20 py-4">
               <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-medium font-mono text-gray-500 uppercase tracking-widest">
                  <span>✓ Intl Standard Facilities</span>
                  <span>✓ Certified Coaches</span>
                  <span className="hidden sm:inline">✓ 500+ Active Members</span>
                  <span>✓ 7 Sports</span>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBottom;