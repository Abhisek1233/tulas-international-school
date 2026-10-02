import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { siteInfo } from '../../data/index.js';
import { Button } from '../ui/Button.jsx';

/**
 * Footer Component: Wine/Crimson overlay over aerial campus photo.
 * Contains Google Maps lazy embed, school contact coordinates,
 * mandatory disclosure policy documents, 3 white pill portal actions,
 * social links, back-to-top button, and redesign credits.
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#7B1F38] text-white pt-16 pb-28 sm:pb-32 overflow-hidden border-t-4 border-secondary">
      {/* Background aerial campus photo with wine overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/campus/schooltopview.webp"
          alt="TIS Aerial Campus Overview"
          width="1920"
          height="1080"
          loading="lazy"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A0D1F] via-[#7B1F38]/95 to-[#7B1F38]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/15">
          {/* Left: Google Map Embed */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-heading font-extrabold uppercase text-sm tracking-wider text-secondary flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Campus Location</span>
            </h3>

            <div className="rounded-24 overflow-hidden border border-white/20 aspect-[16/10] bg-black/40 shadow-lg relative">
              <iframe
                title="Tulas International School Location Map"
                src={siteInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.8] contrast-[1.1]"
              />
            </div>

            <div className="pt-1">
              <a
                href={siteInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-secondary hover:text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Center: School Coordinates & Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-48 sm:w-56 mb-2">
              <img
                src="/assets/brand/footer-logo.png"
                alt="Tulas International School Official Crest"
                width="220"
                height="70"
                loading="lazy"
                className="w-full h-auto object-contain filter brightness-110"
              />
            </div>

            <p className="font-body text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-md">
              <strong className="block text-white font-heading uppercase text-xs tracking-wider mb-1">
                Address:
              </strong>
              <a
                href={siteInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                {siteInfo.address}
              </a>
            </p>

            <div className="space-y-1.5 text-xs text-zinc-200 font-body">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Landline No. {siteInfo.landlines.join(', ')}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>
                  Admission Helpline:{' '}
                  <a href={siteInfo.helplineTel} className="font-bold text-white hover:underline">
                    {siteInfo.helpline}
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>
                  Email:{' '}
                  <a href={siteInfo.emailMailto} className="text-secondary hover:underline">
                    {siteInfo.email}
                  </a>
                </span>
              </p>
            </div>

            {/* Quick Policies & Legal Links Grid */}
            <div className="pt-2">
              <span className="block font-heading font-extrabold uppercase text-[11px] tracking-wider text-secondary mb-2">
                Policies & Mandatory Disclosures
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1.5 text-xs font-body text-zinc-300">
                {siteInfo.policies.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.url}
                      target={p.internal ? undefined : '_blank'}
                      rel={p.internal ? undefined : 'noopener noreferrer'}
                      className="hover:text-white transition-colors"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: 3 White Pill Portal Buttons */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="block font-heading font-extrabold uppercase text-xs tracking-wider text-secondary">
                Quick Portals
              </span>

              <div className="flex flex-col gap-2.5">
                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.virtualTour}
                  className="w-full justify-between !py-2.5"
                >
                  <span>Virtual Tour</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </Button>

                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.applyNow}
                  className="w-full justify-between !py-2.5"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </Button>

                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.fedenaLogin}
                  className="w-full justify-between !py-2.5"
                >
                  <span>Fedena Login</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </Button>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-xs font-heading font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
              >
                <ArrowUp className="w-3.5 h-3.5 text-secondary" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Redesign Attribution, and Social Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-300 font-body px-2 sm:px-12 md:px-28">
          <div className="text-center md:text-left space-y-1">
            <p>{siteInfo.copyright}</p>
            <p className="text-secondary font-medium">{siteInfo.credits}</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {siteInfo.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit TIS on ${s.name}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:ring-1 focus-visible:ring-white"
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  width="18"
                  height="18"
                  className="w-4 h-4 filter invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
