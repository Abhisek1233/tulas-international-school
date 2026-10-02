import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteInfo } from '../../data/index.js';
import { Button } from '../ui/Button.jsx';

/**
 * Section O: Footer
 * Refined 4-column balanced architecture:
 * 1. Campus Location & Interactive Map Card
 * 2. School Identity, Crest & Direct Contact Coordinates
 * 3. Mandatory Policies & Regulatory Disclosures
 * 4. Quick Portals & Back to Top Action
 * Bottom bar with balanced copyright, designer credits, and social icons.
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#5B0E23] text-white pt-16 pb-24 sm:pb-28 overflow-hidden border-t-4 border-secondary">
      {/* Background aerial campus photo with wine overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/campus/schooltopview.webp"
          alt="TIS Aerial Campus Overview"
          width="1920"
          height="1080"
          loading="lazy"
          className="w-full h-full object-cover mix-blend-overlay opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#360814] via-[#5B0E23]/95 to-[#5B0E23]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Col 1: Campus Location & Google Map Card (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2 text-secondary font-heading font-extrabold uppercase text-xs sm:text-sm tracking-wider">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Campus Location</span>
            </div>

            <div className="rounded-24 overflow-hidden border border-white/20 aspect-[16/10] bg-black/40 shadow-xl relative group">
              <iframe
                title="Tulas International School Location Map"
                src={siteInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />
            </div>

            <div>
              <a
                href={siteInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-secondary text-white text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 hover:scale-105"
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: School Identity & Direct Contact Coordinates (3.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Official School Crest & Name Header */}
            <div className="w-52 sm:w-60 mb-2">
              <img
                src="/assets/brand/footer-logo.png"
                alt="Tula's International School Official Logo"
                width="220"
                height="78"
                loading="lazy"
                className="w-full h-auto object-contain filter brightness-110 drop-shadow-md"
              />
            </div>

            {/* Address */}
            <p className="font-body text-xs sm:text-sm text-zinc-200 leading-relaxed">
              <strong className="block text-white font-heading uppercase text-[11px] tracking-wider mb-1">
                Campus Address:
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

            {/* Contact Rows */}
            <div className="space-y-2 text-xs text-zinc-200 font-body">
              <a
                href={siteInfo.helplineTel}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
              >
                <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  Admission Helpline:{' '}
                  <strong className="text-white group-hover:text-secondary transition-colors">
                    {siteInfo.helpline}
                  </strong>
                </span>
              </a>

              <p className="flex items-center gap-2.5 px-2">
                <Phone className="w-3.5 h-3.5 text-secondary/70 flex-shrink-0" />
                <span>Landline: {siteInfo.landlines.join(', ')}</span>
              </p>

              <a
                href={siteInfo.emailMailto}
                className="flex items-center gap-2.5 px-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>{siteInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Policies & Regulatory Disclosures (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-1.5 text-secondary font-heading font-extrabold uppercase text-xs tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              <span>Policies & Disclosures</span>
            </div>

            <ul className="space-y-2 text-xs font-body text-zinc-300">
              {siteInfo.policies.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.url}
                    target={p.internal ? undefined : '_blank'}
                    rel={p.internal ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary"></span>
                    <span>{p.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Portals & Back to Top (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="block font-heading font-extrabold uppercase text-xs tracking-wider text-secondary">
                Quick Portals
              </span>

              <div className="flex flex-col gap-2">
                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.virtualTour}
                  className="w-full justify-between !py-2 !px-3.5 text-xs"
                >
                  <span>Virtual Tour</span>
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                </Button>

                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.applyNow}
                  className="w-full justify-between !py-2 !px-3.5 text-xs"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                </Button>

                <Button
                  variant="white-pill"
                  size="md"
                  href={siteInfo.portals.fedenaLogin}
                  className="w-full justify-between !py-2 !px-3.5 text-xs"
                >
                  <span>Fedena Login</span>
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                </Button>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border border-white/20 hover:bg-white/10 text-xs font-heading font-bold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95"
              >
                <ArrowUp className="w-3.5 h-3.5 text-secondary" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Redesign Attribution, and Social Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-300 font-body px-2 sm:px-6 md:px-24">
          <div className="text-center md:text-left space-y-1">
            <p className="leading-relaxed">{siteInfo.copyright}</p>
            <p className="text-secondary font-semibold">{siteInfo.credits}</p>
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
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:ring-1 focus-visible:ring-white"
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
