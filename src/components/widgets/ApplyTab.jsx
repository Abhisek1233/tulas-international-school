import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteInfo } from '../../data/index.js';

/**
 * Vertical "APPLY NOW" side tab fixed on the right screen edge.
 * Rotated text, teal background, hover slide-out, hidden on small screens.
 */
export function ApplyTab() {
  return (
    <aside aria-label="Quick Application" className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-30">
      <a
        href={siteInfo.portals.applyNow}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apply for Admission at Tulas International School"
        className="group flex items-center gap-1.5 py-4 px-2.5 bg-secondary text-white font-heading font-black text-xs uppercase tracking-widest rounded-l-20 shadow-2xl transition-all duration-300 hover:bg-secondary-dark hover:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 select-none">
          APPLY NOW
        </span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-0.5" />
      </a>
    </aside>
  );
}
