import React from 'react';
import { Check } from 'lucide-react';

const MembershipsAddons: React.FC = () => {
  return (
    <section aria-label="Membership add-ons" className="py-24 md:py-32 bg-gray-50 border-t border-gray-200 transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-10 text-center">Customize Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy uppercase">Spouse Add-On</h4>
                   <span className="font-bold text-dfw-red">$49/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Extend full membership benefits to your partner. Requires active primary membership.</p>
                <ul className="text-xs text-gray-400 space-y-2 mb-4">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Full Unlimited Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Same Benefits as Primary</li>
                </ul>
                <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships?membershipId=1443" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 text-xs font-bold uppercase tracking-widest border border-gray-200 text-dfw-navy rounded-lg hover:bg-dfw-navy hover:text-white transition-colors">
                   Get Add-On
                </a>
             </div>
             <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy uppercase">Kids Add-On</h4>
                   <span className="font-bold text-dfw-red">$20/mo</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Per additional child (beyond 2 in Family plan, or added to Gold). Unlimited access.</p>
                <ul className="text-xs text-gray-400 space-y-2 mb-4">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Cricket + Badminton Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Youth Program Access</li>
                </ul>
                <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships?membershipId=1444" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 text-xs font-bold uppercase tracking-widest border border-gray-200 text-dfw-navy rounded-lg hover:bg-dfw-navy hover:text-white transition-colors">
                   Get Add-On
                </a>
             </div>
             <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-colors">
                <div className="flex justify-between items-start mb-4">
                   <h4 className="font-bold text-dfw-navy uppercase">Guest Pass</h4>
                   <span className="font-bold text-dfw-red">$15/day</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Bring a friend to play. Valid for full day access to member's included sports.</p>
                <ul className="text-xs text-gray-400 space-y-2 mb-4">
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Facility Access</li>
                   <li className="flex gap-2"><Check size={12} className="text-green-500" /> Must Accompany Member</li>
                </ul>
                <a href="https://book.runswiftapp.com/facilities/dfw-indoor-sports/memberships?membershipId=1445" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 text-xs font-bold uppercase tracking-widest border border-gray-200 text-dfw-navy rounded-lg hover:bg-dfw-navy hover:text-white transition-colors">
                   Get Day Pass
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};

export default MembershipsAddons;