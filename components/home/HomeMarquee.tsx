'use client'

/**
 * HomeMarquee - Static Sports Showcase
 * 
 * Design Philosophy:
 * - Clean, static grid layout instead of animated scrolling
 * - Professional presentation suitable for a local business
 * - Clear, readable typography with simple icons
 * - Responsive grid that works on all devices
 */

import React from 'react';
import Link from 'next/link';
import { Volleyball, Target, Users, Zap } from 'lucide-react';

// Sports items with links and icons
const SPORTS_ITEMS = [
 { name: 'Cricket', href: '/cricket-lanes', icon: Target, description: 'Professional lanes with bowling machines' },
 { name: 'Badminton', href: '/badminton-courts', icon: Volleyball, description: 'Tournament-quality courts' },
 { name: 'Soccer', href: '/soccer-fields', icon: Zap, description: 'Indoor turf fields' },
 { name: 'Dodgeball', href: '/dodgeball-courts', icon: Users, description: 'Group-friendly courts' },
];

const HomeMarquee: React.FC = () => {
 return (
 <section className="bg-dfw-navy py-12 md:py-16 relative z-20">
 <div className="container mx-auto px-4 md:px-6">
 {/* Section Header */}
 <div className="text-center mb-10">
 <h2 className="text-white text-2xl md:text-3xl font-header font-bold uppercase tracking-wide">
 Sports We Offer
 </h2>
 <div className="w-16 h-1 bg-dfw-red mx-auto mt-4" />
 </div>

 {/* Sports Grid */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
 {SPORTS_ITEMS.map((sport) => (
 <Link
 key={sport.name}
 href={sport.href}
 className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-dfw-red/50 rounded-lg p-6 md:p-8 text-center transition-all duration-300"
 >
 <div className="w-12 h-12 mx-auto mb-4 bg-dfw-red/20 rounded-full flex items-center justify-center group-hover:bg-dfw-red/30 transition-colors">
 <sport.icon size={24} className="text-dfw-red" />
 </div>
 <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
 {sport.name}
 </h3>
 <p className="text-gray-400 text-xs md:text-sm hidden md:block">
 {sport.description}
 </p>
 </Link>
 ))}
 </div>
 </div>
 </section>
 );
};

export default HomeMarquee;