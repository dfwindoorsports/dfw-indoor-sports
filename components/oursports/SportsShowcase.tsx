'use client'

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Static class maps — Tailwind CSS requires full class names at build time
const colorClasses: Record<string, {
  border: string;
  bg: string;
  bgOverlay: string;
  badgeBg: string;
  badgeText: string;
  checkText: string;
  dot: string;
  btn: string;
}> = {
  'dfw-red': {
    border: 'border-dfw-red',
    bg: 'bg-dfw-red',
    bgOverlay: 'bg-dfw-red',
    badgeBg: 'bg-dfw-red/10',
    badgeText: 'text-dfw-red',
    checkText: 'text-dfw-red',
    dot: 'bg-dfw-red',
    btn: 'bg-dfw-red',
  },
  'blue-600': {
    border: 'border-blue-600',
    bg: 'bg-blue-600',
    bgOverlay: 'bg-blue-600',
    badgeBg: 'bg-blue-600/10',
    badgeText: 'text-blue-600',
    checkText: 'text-blue-600',
    dot: 'bg-blue-600',
    btn: 'bg-blue-600',
  },
  'green-600': {
    border: 'border-green-600',
    bg: 'bg-green-600',
    bgOverlay: 'bg-green-600',
    badgeBg: 'bg-green-600/10',
    badgeText: 'text-green-600',
    checkText: 'text-green-600',
    dot: 'bg-green-600',
    btn: 'bg-green-600',
  },
  'purple-600': {
    border: 'border-purple-600',
    bg: 'bg-purple-600',
    bgOverlay: 'bg-purple-600',
    badgeBg: 'bg-purple-600/10',
    badgeText: 'text-purple-600',
    checkText: 'text-purple-600',
    dot: 'bg-purple-600',
    btn: 'bg-purple-600',
  },
};

const sportsData = [
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "The Gentleman's Game, Perfected",
    desc: "Experience the crack of leather on willow in an environment worthy of the game. Our ICC-standard lanes and CricKingdom academy bring professional cricket culture to Texas.",
    image: "/images/hero/cricket-hero.webp",
    features: ["6 Professional Lanes", "Automated Bowling Machines", "Video Analysis Tech"],
    programs: ["CricKingdom Academy", "Adult Leagues", "Elite Training"],
    link: "/cricket-lanes",
    color: "dfw-red"
  },
  {
    id: "badminton",
    title: "Badminton",
    subtitle: "Speed, Agility, Precision",
    desc: "Feel the difference of playing on BWF-approved mats with shadow-free lighting. Whether you're rallying for fitness or training for gold, every smash lands true.",
    image: "/images/hero/badminton-hero.webp",
    features: ["8 BWF Standard Courts", "30ft+ Clear Height", "Anti-Glare LED Lighting"],
    programs: ["Social Drop-In", "Junior Coaching", "Tournament Series"],
    link: "/badminton-courts",
    color: "blue-600"
  },
  {
    id: "soccer",
    title: "Indoor Soccer",
    subtitle: "The Beautiful Game, Year-Round",
    desc: "Forget the rainouts and the heat. Our professional artificial turf offers a fast, consistent surface for technical development and high-energy 5-a-side matches.",
    image: "/images/hero/soccer-hero.webp",
    features: ["Professional Turf", "Wall-Rebound Systems", "Climate Controlled"],
    programs: ["Youth Development", "Adult Rec Leagues", "Team Rentals"],
    link: "/soccer-fields",
    color: "green-600"
  },
  {
    id: "dodgeball",
    title: "Dodgeball",
    subtitle: "Pure Adrenaline & Laughter",
    desc: "The ultimate social sport. Gather your friends, colleagues, or classmates for high-intensity fun that burns calories without feeling like a workout.",
    image: "/images/facilities/dodgeball-courts.webp",
    features: ["Safe Foam Balls", "Regulation Courts", "Referee Services"],
    programs: ["Corporate Events", "Birthday Parties", "Social Leagues"],
    link: "/dodgeball-courts",
    color: "purple-600"
  }
];

const SportsShowcase: React.FC = () => {
  return (
    <section aria-label="Sports showcase" className="bg-gray-50 border-y border-gray-200 transition-colors duration-300" id="sports-showcase">
       {sportsData.map((sport, index) => {
          const c = colorClasses[sport.color];
          return (
           <motion.div 
             key={sport.id} 
             transition={{ duration: 0.6 }}
             className={`py-24 ${index % 2 !== 0 ? 'bg-white' : 'bg-gray-50'} transition-colors duration-300`}
           >
              <div className="container mx-auto px-4 md:px-6">
                 <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual */}
                    <div className="lg:w-1/2 w-full group relative">
                       <div className={`absolute top-4 left-4 w-full h-full border-2 ${c.border} rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 opacity-50`}></div>
                       <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3] border border-gray-200">
                          <Image src={sport.image} alt={`${sport.title} at DFW Indoor Sports`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className={`absolute inset-0 ${c.bgOverlay} opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay`}></div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 w-full">
                       <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${c.badgeBg} ${c.badgeText} font-mono text-\[11px\] font-medium uppercase tracking-widest mb-6`}>
                          {sport.subtitle}
                       </div>
                       <h3 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy uppercase mb-6">
                          {sport.title}
                       </h3>
                       <p className="text-gray-500 text-lg leading-relaxed mb-8">
                          {sport.desc}
                       </p>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                          <div>
                             <h4 className="font-bold text-dfw-navy text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Highlights</h4>
                             <ul className="space-y-2">
                                {sport.features.map((feat, i) => (
                                   <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                      <CheckCircle2 size={14} className={c.checkText} /> {feat}
                                   </li>
                                ))}
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-bold text-dfw-navy text-xs uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">Ways to Play</h4>
                             <ul className="space-y-2">
                                {sport.programs.map((prog, i) => (
                                   <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                      <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`}></div> {prog}
                                   </li>
                                ))}
                             </ul>
                          </div>
                       </div>

                       <div className="flex flex-col sm:flex-row gap-4">
                          <Link href={sport.link} className={`px-8 py-3 ${c.btn} text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:opacity-90 transition-opacity shadow-lg text-center`}>
                             Book {sport.title}
                          </Link>
                          <Link href={sport.link} className="px-8 py-3 border border-gray-300 text-dfw-navy font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-dfw-navy hover:text-white transition-colors flex items-center justify-center gap-2 group">
                             Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                       </div>
                    </div>

                 </div>
              </div>
           </motion.div>
          );
       })}
    </section>
  );
};

export default SportsShowcase;