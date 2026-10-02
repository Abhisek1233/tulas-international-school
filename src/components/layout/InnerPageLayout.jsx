import React from 'react';
import { CustomCursor, ScrollProgress } from '../animation/index.js';
import { TopBar, Header, Footer } from './index.js';
import { PageHero, TaglineStrip } from '../ui/index.js';
import {
  ApplyTab,
  WhatsAppButton,
  EvaAssistant,
  StickyCtaBar,
} from '../widgets/index.js';

/**
 * Shared Inner-Page Layout component.
 * Ensures consistent branding across all inner pages with:
 * - TopBar, Header, Footer
 * - PageHero (parallax with dark gradient & h1)
 * - TaglineStrip (crimson band with centered line)
 * - Floating conversion widgets (ApplyTab, WhatsApp, Eva, StickyCtaBar)
 * - Custom cursor and scroll progress
 */
export function InnerPageLayout({
  title,
  subtitle,
  heroImage,
  heroAlt,
  tagline,
  children,
}) {
  const handleEnquireClick = () => {
    window.location.href = '/#enquiry';
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 relative flex flex-col selection:bg-secondary selection:text-white">
      {/* Standout Feature 1: Custom Cursor */}
      <CustomCursor />

      {/* Standout Feature 4: Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Utility Helpline Bar */}
      <TopBar onEnquireClick={handleEnquireClick} />

      {/* Sticky Main Crimson Header */}
      <Header />

      {/* Floating Side Tab (Apply Now) */}
      <ApplyTab />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Virtual Admissions Assistant Eva */}
      <EvaAssistant />

      {/* Mobile Sticky CTA Bar */}
      <StickyCtaBar onEnquireClick={handleEnquireClick} />

      {/* Main Inner-Page Content */}
      <main id="main-content" className="flex-1">
        {/* Full-width Page Hero */}
        <PageHero
          title={title}
          subtitle={subtitle}
          backgroundImage={heroImage}
          alt={heroAlt}
        />

        {/* Crimson Tagline Strip */}
        <TaglineStrip text={tagline} />

        {/* Page Content Body */}
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* Footer with Embedded Location Map */}
      <Footer />
    </div>
  );
}
