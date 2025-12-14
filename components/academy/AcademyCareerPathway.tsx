'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Star, Trophy } from 'lucide-react';

const AcademyCareerPathway: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#0A111F] py-24 border-y border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-3 block">Roadmap to Excellence</span>
             <h2 className="text-4xl md:text-5xl font-header font-bold text-dfw-navy dark:text-white uppercase leading-none mb-6">
                Career Pathway
             </h2>
             <p className="text-gray-500 dark:text-gray-400">
                A structured journey for players and coaches to reach their highest potential, from grassroot beginnings to professional excellence.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
             {/* Player Pathway */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="bg-dfw-navy dark:bg-white/5 p-6 rounded-lg border-l-4 border-dfw-red">
                   <h3 className="text-2xl font-header font-bold text-white mb-4">Players Pathway</h3>
                   <p className="text-sm text-gray-300 leading-relaxed">
                      The Player Pathway highlights the various levels of cricket that a player can pass through as they progress towards making a career in the game. Players are able to enter the Pathway at any stage, dependent on their ability. The ultimate aim should be of reaching the Elite Player Group, which is the roadmap onto playing professionally for State, Premier Clubs, National Team or even IPL teams.
                   </p>
                </div>

                <div className="flex flex-col items-center justify-end h-[400px] w-full max-w-md mx-auto relative perspective-1000">
                    {/* Elite */}
                    <div className="w-[15%] h-[60px] bg-[#C1382C] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center clip-pyramid-top shadow-lg z-50 mb-[-10px] relative hover:scale-105 transition-transform cursor-pointer">
                        Elite
                    </div>
                    {/* Advance */}
                    <div className="w-[30%] h-[70px] bg-[#E76F26] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center clip-trapezoid shadow-lg z-40 mb-[-10px] relative hover:scale-105 transition-transform cursor-pointer">
                        Advance
                    </div>
                    {/* Intermediate B */}
                    <div className="w-[45%] h-[80px] bg-[#3DA047] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center clip-trapezoid shadow-lg z-30 mb-[-10px] relative hover:scale-105 transition-transform cursor-pointer">
                        Intermediate B
                    </div>
                    {/* Intermediate A */}
                    <div className="w-[60%] h-[90px] bg-[#43A047] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center clip-trapezoid shadow-lg z-20 mb-[-10px] relative hover:scale-105 transition-transform cursor-pointer">
                        Intermediate A
                    </div>
                    {/* Beginners */}
                    <div className="w-[75%] h-[100px] bg-[#1E88E5] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center clip-trapezoid-bottom shadow-lg z-10 relative hover:scale-105 transition-transform cursor-pointer">
                        Beginners
                    </div>
                </div>
             </motion.div>

             {/* Coaches Pathway */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
             >
                <div className="bg-dfw-navy dark:bg-white/5 p-6 rounded-lg border-l-4 border-blue-500">
                   <h3 className="text-2xl font-header font-bold text-white mb-4">Coaches Pathway</h3>
                   <p className="text-sm text-gray-300 leading-relaxed">
                      CricKingdom coaches pathway is designed with the focus to provide a platform to the coaches to enhance their coaching skills based on their experience. CricKingdom is also promoting coaches to travel in India and overseas through various exchange programs, tours and tournaments.
                   </p>
                </div>

                <div className="flex flex-col items-center justify-end h-[400px] w-full max-w-md mx-auto">
                    {/* Mentor */}
                    <div className="w-[25%] h-[60px] bg-[#2E7D32] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center rounded-sm shadow-md mb-2 hover:scale-105 transition-transform cursor-pointer">
                        Mentor
                    </div>
                    {/* Head Coach */}
                    <div className="w-[40%] h-[70px] bg-[#C62828] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center rounded-sm shadow-md mb-2 hover:scale-105 transition-transform cursor-pointer">
                        Head Coach
                    </div>
                    {/* Senior Coach */}
                    <div className="w-[55%] h-[80px] bg-[#EF6C00] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center rounded-sm shadow-md mb-2 hover:scale-105 transition-transform cursor-pointer">
                        Senior Coach
                    </div>
                    {/* Coach */}
                    <div className="w-[70%] h-[90px] bg-[#8BC34A] text-dfw-navy text-[10px] md:text-xs font-bold flex items-center justify-center text-center rounded-sm shadow-md mb-2 hover:scale-105 transition-transform cursor-pointer">
                        Coach
                    </div>
                    {/* Assistant Coach */}
                    <div className="w-[85%] h-[100px] bg-[#1976D2] text-white text-[10px] md:text-xs font-bold flex items-center justify-center text-center rounded-sm shadow-md mb-0 hover:scale-105 transition-transform cursor-pointer">
                        Assistant Coach
                    </div>
                </div>
             </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Beginners */}
             <div className="bg-gray-50 dark:bg-white/5 rounded-lg border-t-4 border-[#1E88E5] p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-header font-bold text-[#1E88E5] mb-6 flex items-center gap-2">
                   <User size={20} /> Beginners
                </h4>
                <ul className="space-y-3">
                   {[
                      "Age 5-8 (Soft ball)",
                      "Basics skills training",
                      "In-house matches",
                      "Carnivals"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                         <span className="w-1.5 h-1.5 bg-[#1E88E5] rounded-full mt-1.5 flex-shrink-0"></span>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Intermediate */}
             <div className="bg-gray-50 dark:bg-white/5 rounded-lg border-t-4 border-[#43A047] p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-header font-bold text-[#43A047] mb-6 flex items-center gap-2">
                   <Users size={20} /> Intermediate
                </h4>
                <ul className="space-y-3">
                   {[
                      "Age 9-12 (Hard ball)",
                      "Basic skills training",
                      "Net practice sessions",
                      "In house matches",
                      "Local tournaments",
                      "Domestic tours",
                      "International tours"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                         <span className="w-1.5 h-1.5 bg-[#43A047] rounded-full mt-1.5 flex-shrink-0"></span>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Advance */}
             <div className="bg-gray-50 dark:bg-white/5 rounded-lg border-t-4 border-[#E76F26] p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-header font-bold text-[#E76F26] mb-6 flex items-center gap-2">
                   <Star size={20} /> Advance
                </h4>
                <ul className="space-y-3">
                   {[
                      "Age 13 & above",
                      "In-house matches",
                      "Club representation",
                      "Net practice sessions",
                      "Fitness/Bio-Mechanics sessions",
                      "One to one specialized sessions",
                      "Celebrity coach sessions",
                      "Tournaments",
                      "Domestic tours",
                      "International tours"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                         <span className="w-1.5 h-1.5 bg-[#E76F26] rounded-full mt-1.5 flex-shrink-0"></span>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Elite */}
             <div className="bg-gray-50 dark:bg-white/5 rounded-lg border-t-4 border-[#C1382C] p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-header font-bold text-[#C1382C] mb-6 flex items-center gap-2">
                   <Trophy size={20} /> Elite
                </h4>
                <ul className="space-y-3">
                   {[
                      "Premier club player",
                      "State/First class player",
                      "National player",
                      "One to one specialized sessions",
                      "Tournaments",
                      "Domestic tours",
                      "International tours",
                      "Fitness/Bio-Mechanic sessions"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                         <span className="w-1.5 h-1.5 bg-[#C1382C] rounded-full mt-1.5 flex-shrink-0"></span>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>
       </div>

       <style jsx global>{`
          .clip-pyramid-top {
            clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          }
          .clip-trapezoid {
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
          }
          .clip-trapezoid-bottom {
             clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
          }
       `}</style>
    </section>
  );
};

export default AcademyCareerPathway;