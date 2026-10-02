import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteInfo } from '../../data/index.js';
import { Reveal } from '../ui/Reveal.jsx';

/**
 * Section J: Virtual Tour Interactive Banner
 * Aerial campus background, rotating 360° icon badge, and direct 3D tour launch.
 */
export function VirtualTourBanner() {
  return (
    <section aria-labelledby="virtual-tour-heading" className="py-12 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <a
            href={siteInfo.portals.virtualTour}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dive into our 360 Degree Virtual Campus Tour"
            className="group relative block rounded-28 overflow-hidden aspect-[21/9] sm:aspect-[24/9] bg-black border border-white/20 shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            data-cursor="View"
          >
            {/* Aerial Campus Photo with zoom on hover */}
            <img
              src="/assets/campus/schooltopview.webp"
              alt="Tulas International School Aerial Campus"
              width="1920"
              height="800"
              loading="lazy"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-between text-white">
              {/* Top tag */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-secondary/80 text-white font-heading font-extrabold uppercase text-[11px] sm:text-xs tracking-widest backdrop-blur-sm">
                  Interactive 3D Experience
                </span>
              </div>

              {/* Center / Bottom Title */}
              <div className="space-y-2 max-w-xl">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest uppercase text-secondary block">
                  DIVE INTO OUR...
                </span>
                <h2
                  id="virtual-tour-heading"
                  className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-white group-hover:text-secondary transition-colors"
                >
                  VIRTUAL TOUR
                </h2>
                <p className="font-body text-xs sm:text-sm text-zinc-300 max-w-md hidden sm:block">
                  Explore academic blocks, Olympic sports arenas, boarding houses, and our 22-acre pollution-free valley from anywhere in the world.
                </p>
              </div>

              {/* Rotating 360 Icon Badge */}
              <div className="self-end flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md p-2.5 flex items-center justify-center border border-white/30"
                >
                  <img
                    src="/assets/tour/360.png"
                    alt="360 Degree View"
                    width="44"
                    height="44"
                    className="w-full h-full object-contain filter invert"
                  />
                </motion.div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg group-hover:bg-secondary-dark transition-colors">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
