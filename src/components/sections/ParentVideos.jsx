import React, { useState } from 'react';
import { parentTestimonials } from '../../data/index.js';
import { PhoneFrame } from '../ui/PhoneFrame.jsx';
import { Reveal, RevealItem } from '../ui/Reveal.jsx';

/**
 * Section K: From The Parents (Video Testimonials)
 * Features exact live wording (User Change #7) and 3 phone-mockup frame video players
 * with single active video playback coordination.
 */
export function ParentVideos() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handlePlayRequest = (id) => {
    setActiveVideoId(id);
  };

  return (
    <section id="testimonials" aria-labelledby="parent-testimonials-heading" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream/40 dark:bg-surface">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading & Quote */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <img
              src={parentTestimonials.openingQuoteIcon}
              alt=""
              width="44"
              height="36"
              className="w-11 h-9 opacity-80 filter saturate-[1.2]"
            />
          </div>

          <h2
            id="parent-testimonials-heading"
            className="font-heading font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight"
          >
            {parentTestimonials.headingLead}{' '}
            <span className="font-display italic font-black text-primary capitalize">
              {parentTestimonials.headingItalic}
            </span>
          </h2>

          <blockquote className="font-body italic text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed border-l-2 border-primary/40 pl-4 py-1 text-left sm:text-center sm:border-l-0 sm:pl-0">
            "{parentTestimonials.quote}"
          </blockquote>
        </div>

        {/* 3 Phone Frame Mockups */}
        <Reveal cascade className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-4">
          {parentTestimonials.videos.map((vid, idx) => {
            const tiltClasses = [
              '-rotate-1 hover:rotate-0',
              'rotate-0 hover:scale-105',
              'rotate-1 hover:rotate-0',
            ];

            return (
              <RevealItem key={vid.id}>
                <div className={`transition-transform duration-300 ${tiltClasses[idx % 3]}`}>
                  <PhoneFrame
                    src={vid.src}
                    poster={vid.poster}
                    title={vid.title}
                    parentName={vid.parent}
                    wardInfo={vid.ward}
                    isActive={activeVideoId === vid.id}
                    onPlayRequest={() => handlePlayRequest(vid.id)}
                  />
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
