'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const facilities = [
  { 
    title: 'Cricket Facilities', 
    desc: 'Professional lanes with proper pitch dimensions, bowling machines, safety netting, and video analysis.',
    img: '/images/facilities/cricket-lanes.webp',
    tag: 'International Standard'
  },
  { 
    title: 'Badminton Courts', 
    desc: 'Six BWF-regulation courts with professional flooring, proper ceiling clearance, and shadow-free lighting.',
    img: '/images/hero/badminton-hero.webp',
    tag: 'BWF Approved'
  },
  { 
    title: 'Soccer Fields', 
    desc: 'Climate-controlled indoor turf maintaining consistent playing surface and professional goal systems.',
    img: '/images/hero/soccer-hero.webp',
    tag: 'Pro Turf'
  },
  { 
    title: 'Member Amenities', 
    desc: 'Modern locker rooms, comfortable spectator areas, pro shop, party rooms, and ample free parking.',
    img: '/images/facilities/lounge.webp',
    tag: 'Premium'
  }
];

const HomeFacilities: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section aria-label="Our facilities" className="bg-dfw-navy py-24 md:py-32 relative overflow-hidden">
      
      {/* Background Micro-Detail */}
      <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-dfw-red font-mono text-xs font-bold uppercase tracking-widest mb-4 block">Our Facility</span>
          <h2 className="text-4xl md:text-5xl font-header font-bold text-white uppercase leading-none">
            World-Class <span className="text-gray-500">Indoor</span> <br/> Facilities
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-lg border border-white/10"
            >
              {/* Optimized Next.js Image instead of background-image style */}
              <div className="absolute inset-0">
                <Image
                  src={item.img}
                  alt={`${item.title} at DFW Indoor Sports Fort Worth`}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                 <span className="inline-block px-2 py-1 mb-3 text-[11px] font-bold text-white bg-dfw-red/80 rounded-lg uppercase tracking-widest backdrop-blur-md">
                    {item.tag}
                 </span>
                 <h3 className="text-2xl font-header font-bold text-white uppercase mb-3 leading-none">{item.title}</h3>
                 {/* Always visible on mobile, hover-reveal on desktop */}
                 <p className="text-gray-400 text-xs leading-relaxed mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 border-l border-white/20 pl-3">
                    {item.desc}
                 </p>
                 <div className="w-8 h-1 bg-dfw-red group-hover:w-16 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tour CTA — centered below grid for clarity */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
           <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-dfw-navy transition-all rounded-lg">
              Schedule a Free Facility Tour <ArrowRight size={14} />
           </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFacilities;