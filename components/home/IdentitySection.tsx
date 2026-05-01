import React from 'react';

const IdentitySection: React.FC = () => {
   return (
      <section className="relative bg-[#020408] py-24 md:py-40 overflow-hidden border-t border-white/5 select-none">

         {/* Subtle texture background */}
         <div className="absolute inset-0 bg-[url('/textures/stardust.png')] opacity-5"></div>

         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">

            {/* Massive Typography Stack */}
            <div className="relative group cursor-default text-center w-full">

               {/* Line 1: DFW INDOOR */}
               <div className="relative z-20 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <h2 className="text-[13vw] md:text-[12vw] font-header font-bold leading-[0.8] tracking-tighter">
                     <span
                        className="block text-transparent transition-all duration-700 bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-white group-hover:to-gray-400"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
                     >
                        DFW INDOOR
                     </span>
                  </h2>
               </div>

               {/* Line 2: SPORTS (Overlay Effect) */}
               <div className="relative z-10 -mt-[2vw] transition-transform duration-700 ease-out group-hover:translate-y-2">
                  <h2 className="text-[13vw] md:text-[12vw] font-header font-bold leading-[0.8] tracking-tighter relative">
                     {/* Glow Layer */}
                     <span className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-dfw-red/10 blur-3xl transform scale-110 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true">
                        SPORTS
                     </span>

                     {/* Text Layer */}
                     <span className="block text-dfw-red group-hover:tracking-widest transition-all duration-500">
                        SPORTS
                     </span>
                  </h2>
               </div>

            </div>

            {/* Bottom Metadata & Line */}
            <div className="mt-20 md:mt-32 w-full flex flex-col items-center gap-8">
               <div className="w-full max-w-xs md:max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">

               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center">
                  <div className="group/item">
                     <p className="text-[10px] font-medium text-gray-600 font-mono uppercase tracking-widest mb-1 group-hover/item:text-dfw-red transition-colors">Location</p>
                     <p className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">Fort Worth, Texas</p>
                  </div>
                  <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                  <div className="group/item">
                     <p className="text-[10px] font-medium text-gray-600 font-mono uppercase tracking-widest mb-1 group-hover/item:text-dfw-red transition-colors">Est.</p>
                     <p className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">2024</p>
                  </div>
                  <div className="w-px h-8 bg-white/10 hidden md:block"></div>
                  <div className="group/item">
                     <p className="text-[10px] font-medium text-gray-600 font-mono uppercase tracking-widest mb-1 group-hover/item:text-dfw-red transition-colors">Area</p>
                     <p className="text-sm font-bold text-gray-400 group-hover/item:text-white transition-colors">50,000 SQ FT</p>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default IdentitySection;