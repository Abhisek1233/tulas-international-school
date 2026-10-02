import React from 'react';
import { PhoneCall } from 'lucide-react';
import { siteInfo } from '../../data/index.js';
import { Button } from '../ui/Button.jsx';

/**
 * Top Utility Bar: Full-width Teal background (#60BAB1) with Admissions Helpline on left corner
 * and Enquire Now CTA on right corner.
 */
export function TopBar({ onEnquireClick }) {
  return (
    <aside aria-label="Admissions Announcement" className="bg-secondary text-white text-xs font-heading font-bold uppercase tracking-wider py-1.5 px-4 sm:px-6 lg:px-8 xl:px-12 border-b border-black/10 relative z-40 transition-colors w-full">
      <div className="w-full flex items-center justify-between gap-4">
        {/* Helpline */}
        <a
          href={siteInfo.helplineTel}
          className="inline-flex items-center gap-2 hover:text-black/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
        >
          <PhoneCall className="w-3.5 h-3.5 flex-shrink-0 animate-pulse text-white" />
          <span>ADMISSIONS HELPLINE NO. {siteInfo.helpline}</span>
        </a>

        {/* Enquire CTA */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="black-pill"
            onClick={onEnquireClick}
            className="!py-1 !px-3.5 !text-[11px]"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </aside>
  );
}
