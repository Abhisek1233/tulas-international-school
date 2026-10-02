import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Shared PageHero component for inner pages.
 * - Full-width high-resolution background with rich dark gradient overlays.
 * - Parallax vertical drift on scroll (collapses if prefers-reduced-motion is true).
 * - Single h1 display title in heavy italic serif (white) anchored at the bottom.
 */
export function PageHero({
  title,
  subtitle,
  backgroundImage = '/assets/campus/schooltopview.webp',
  alt = 'Tulas International School Campus',
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', shouldReduceMotion ? '0%' : '25%']);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] overflow-hidden flex items-end"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[125%] -top-[12.5%]"
      >
        <img
          src={backgroundImage}
          alt={alt}
          fetchPriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
      </motion.div>

      {/* Multi-layered dark vignette gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Hero Content Anchored at Bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        {subtitle && (
          <p className="font-heading font-extrabold uppercase text-xs sm:text-sm tracking-widest text-secondary mb-2 sm:mb-3 drop-shadow">
            {subtitle}
          </p>
        )}
        <h1 className="font-display italic font-black text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight sm:leading-none drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}
