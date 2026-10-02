import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import {
  CustomCursor,
  ScrollProgress,
} from './components/animation/index.js';
import {
  TopBar,
  Header,
  Footer,
} from './components/layout/index.js';
import {
  ApplyTab,
  WhatsAppButton,
  EvaAssistant,
  StickyCtaBar,
} from './components/widgets/index.js';
import {
  Card,
  SectionHeading,
  Reveal,
  RevealItem,
  GoldUnderline,
  GoldEllipse,
  Button,
  Pill,
} from './components/ui/index.js';
import { siteInfo } from './data/index.js';

export default function App() {
  const [enquiryCount, setEnquiryCount] = useState(0);

  const handleEnquireTrigger = () => {
    setEnquiryCount((prev) => prev + 1);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 relative flex flex-col selection:bg-secondary selection:text-white">
      {/* Standout Feature 1: Custom Cursor */}
      <CustomCursor />

      {/* Standout Feature 4: Scroll Progress */}
      <ScrollProgress />

      {/* Top Utility Bar (Helpline + Enquire CTA) */}
      <TopBar onEnquireClick={handleEnquireTrigger} />

      {/* Main Sticky Crimson Header with Nav & Hamburger */}
      <Header />

      {/* Floating Side Tab (Apply Now) */}
      <ApplyTab />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Virtual Assistant (Eva) */}
      <EvaAssistant />

      {/* Mobile Sticky CTA Bar */}
      <StickyCtaBar onEnquireClick={handleEnquireTrigger} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Reveal cascade yOffset={20}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <Pill variant="teal">Phase 4 Verification • Layout & Floating Elements Active</Pill>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-primary">
              LET'S DO <span className="font-display italic">it</span> With{' '}
              <span className="relative inline-block">
                Tulas
                <GoldUnderline className="absolute -bottom-2 left-0 w-full" />
              </span>
            </h1>
            <p className="font-body text-muted text-base sm:text-lg">
              Education through <GoldEllipse>seamless opportunities</GoldEllipse> in a 22-acre pollution-free valley campus.
            </p>
          </div>
        </Reveal>

        <RevealItem>
          <Card className="max-w-3xl mx-auto space-y-6 text-center">
            <SectionHeading
              eyebrow="GLOBAL ARCHITECTURE"
              title="Layout & Floating"
              italicWord="Components"
              subtitle="TopBar, Sticky Crimson Header with overlapping badge, 9-item DesktopNav, full-screen HamburgerOverlay, ApplyTab, WhatsAppButton, EvaAssistant, StickyCtaBar, and Footer are active."
            />

            <div className="p-4 rounded-20 bg-cream/70 dark:bg-surface border border-border text-left space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary font-heading font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Layout System Verified</span>
              </div>
              <p className="text-xs text-muted font-body">
                Helpline: <strong>{siteInfo.helpline}</strong> | Enquire CTA triggers: <strong>{enquiryCount}</strong>
              </p>
            </div>
          </Card>
        </RevealItem>

        <div id="enquiry" className="py-6 text-center text-xs text-muted font-mono">
          [Enquiry Anchor Target Point]
        </div>
      </main>

      {/* Wine Overlay Footer with Embedded Map */}
      <Footer />
    </div>
  );
}
