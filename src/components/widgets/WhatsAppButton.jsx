import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../../data/index.js';

/**
 * Floating WhatsApp contact button fixed to bottom-right.
 * Links directly to the official admissions WhatsApp channel.
 */
export function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp Helpline" className="fixed bottom-20 sm:bottom-8 right-6 z-30">
      <a
        href={siteInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Admissions on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        {/* Soft pulse aura */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />

        {/* Hover tooltip */}
        <span
          className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-zinc-900 text-white text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md hidden sm:block"
        >
          Chat with Us
        </span>
      </a>
    </aside>
  );
}
