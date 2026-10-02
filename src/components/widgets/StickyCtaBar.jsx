import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { siteInfo } from '../../data/index.js';

/**
 * Mobile Sticky Bottom Bar providing rapid one-tap access to Call, WhatsApp,
 * Enquire, and Apply. Automatically hides when the enquiry form enters viewport.
 */
export function StickyCtaBar({ onEnquireClick }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const enquiryEl = document.getElementById('enquiry');
      if (!enquiryEl) {
        setIsVisible(true);
        return;
      }

      const rect = enquiryEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(!inView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Mobile Quick Actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call */}
        <a
          href={siteInfo.helplineTel}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-primary/10 text-primary active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-wide">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={siteInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-500/10 text-emerald-600 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-wide">Chat</span>
        </a>

        {/* Enquire */}
        <button
          type="button"
          onClick={onEnquireClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-secondary/15 text-secondary-dark active:scale-95 transition-transform"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-wide">Enquire</span>
        </button>

        {/* Apply */}
        <a
          href={siteInfo.portals.applyNow}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-primary text-white active:scale-95 transition-transform shadow-sm"
        >
          <ArrowUpRight className="w-4 h-4 mb-0.5" />
          <span className="font-heading font-bold text-[10px] uppercase tracking-wide">Apply</span>
        </a>
      </div>
    </aside>
  );
}
