import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Award, Trophy, Compass, Users, MessageSquareQuote, ShieldCheck, Sun } from 'lucide-react';
import {
  CustomCursor,
  ScrollProgress,
  ThemeToggle,
} from './components/animation/index.js';
import {
  Button,
  Pill,
  Card,
  SectionHeading,
  Reveal,
  RevealItem,
  GoldUnderline,
  GoldEllipse,
  PhoneFrame,
  Accordion,
  Modal,
} from './components/ui/index.js';
import {
  useCountUp,
  useOtpFlow,
  useMediaQuery,
} from './hooks/index.js';
import {
  siteInfo,
  navigationItems,
  heroSlides,
  sportsData,
  statsData,
  rankingsData,
  sportsAndInfluencers,
  leadersOfIndia,
  awardsData,
  reviewsData,
  faqsData,
  collaborationsData,
  studentVoices,
  parentTestimonials,
  classesList,
  statesList,
} from './data/index.js';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const sportsCount = useCountUp(16, 1200, true);
  const otpFlow = useOtpFlow();

  const metrics = [
    { label: "Top-Level Nav", count: navigationItems.length, icon: Compass },
    { label: "Hero Cutouts", count: heroSlides.length, icon: Sparkles },
    { label: "Curated Sports", count: sportsData.length, icon: Trophy },
    { label: "Bento Stats", count: statsData.length, icon: Award },
    { label: "National Rankings", count: rankingsData.length, icon: Trophy },
    { label: "Influential Leaders", count: sportsAndInfluencers.length + leadersOfIndia.length, icon: Users },
    { label: "Accredited Awards", count: awardsData.length, icon: Award },
    { label: "Verified Reviews", count: reviewsData.length, icon: MessageSquareQuote },
    { label: "Comprehensive FAQs", count: faqsData.length, icon: MessageSquareQuote },
    { label: "Global Partners", count: collaborationsData.length, icon: Compass },
    { label: "Admissions Classes", count: classesList.length, icon: Award },
    { label: "Indian States/UTs", count: statesList.length, icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 relative selection:bg-secondary selection:text-white">
      {/* Standout Feature 1: Custom Cursor */}
      <CustomCursor />

      {/* Standout Feature 4: Scroll Progress */}
      <ScrollProgress />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-primary/95 backdrop-blur-md border-b border-white/10 px-6 py-3 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1 shadow">
            <img src="/assets/brand/schoollogo.png" alt="TIS Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-heading font-extrabold uppercase text-sm sm:text-base tracking-wide block leading-none">
              {siteInfo.name}
            </span>
            <span className="font-display italic text-xs text-white/80">
              {siteInfo.tagline}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" variant="black-pill" onClick={() => setIsModalOpen(true)}>
            Test Modal
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto p-6 sm:p-10 space-y-12">
        <Reveal cascade yOffset={20}>
          <div className="text-center space-y-4">
            <Pill variant="teal">Phase 3 Verification • Custom Hooks & Animations Active</Pill>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-primary">
              LET'S DO <span className="font-display italic">it</span> With{' '}
              <span className="relative inline-block">
                Tulas
                <GoldUnderline className="absolute -bottom-2 left-0 w-full" />
              </span>
            </h1>
            <p className="font-body text-muted text-base sm:text-lg max-w-2xl mx-auto">
              Education through <GoldEllipse>seamless opportunities</GoldEllipse> in a 22-acre pollution-free valley campus.
            </p>
          </div>
        </Reveal>

        {/* Standout Features Checklist */}
        <RevealItem>
          <Card className="space-y-6">
            <SectionHeading
              eyebrow="STANDOUT INNOVATIONS"
              title="4 Required Standout"
              italicWord="Features"
              subtitle="All 4 core differentiator features are fully implemented and running via Framer Motion & CSS variables."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-20 bg-cream/70 dark:bg-surface border border-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase text-primary">1. Custom Cursor</h4>
                  <p className="font-body text-xs text-muted mt-1">
                    Spring follower ring with hardware-accelerated transforms, disabled on touch/reduced-motion, showing "View", "Drag", and "Play" badges.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-20 bg-cream/70 dark:bg-surface border border-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase text-primary">2. Scroll Reveals</h4>
                  <p className="font-body text-xs text-muted mt-1">
                    Reusable `&lt;Reveal&gt;` container using whileInView, staggered children, and transform/opacity only.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-20 bg-cream/70 dark:bg-surface border border-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase text-primary">3. Theme Switcher</h4>
                  <p className="font-body text-xs text-muted mt-1">
                    Animated sun/moon morph, zero-flash inline script, full dark/light CSS variables persisted in localStorage.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-20 bg-cream/70 dark:bg-surface border border-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase text-primary">4. Scroll Progress</h4>
                  <p className="font-body text-xs text-muted mt-1">
                    Smooth reading progress indicator at top using Framer Motion springs and crimson-to-teal gradient.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </RevealItem>

        {/* Animated Count-Up & Media Query verification */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="text-center p-6">
            <span className="block font-heading text-4xl font-extrabold text-primary">{sportsCount}+</span>
            <span className="font-heading uppercase text-xs text-muted tracking-wider">Olympic Sports (useCountUp)</span>
          </Card>
          <Card className="text-center p-6">
            <span className="block font-heading text-4xl font-extrabold text-secondary-dark">
              {isDesktop ? 'DESKTOP' : 'MOBILE'}
            </span>
            <span className="font-heading uppercase text-xs text-muted tracking-wider">Viewport Detection (useMediaQuery)</span>
          </Card>
          <Card className="text-center p-6">
            <span className="block font-heading text-4xl font-extrabold text-primary">
              {otpFlow.isVerified ? 'VERIFIED' : otpFlow.status.toUpperCase()}
            </span>
            <span className="font-heading uppercase text-xs text-muted tracking-wider">Mock OTP State (useOtpFlow)</span>
          </Card>
        </div>

        {/* UI Primitives Showcase */}
        <Reveal>
          <Card className="space-y-6">
            <h3 className="font-heading text-xl font-bold uppercase text-primary">UI Primitives Verification</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary Crimson</Button>
              <Button variant="secondary">Secondary Teal</Button>
              <Button variant="black-pill">Black Pill CTA</Button>
              <Button variant="white-pill">White Pill</Button>
              <Button variant="outline">Outline</Button>
              <Pill variant="crimson">Crimson Tag</Pill>
              <Pill variant="gold">Gold Accent</Pill>
            </div>
          </Card>
        </Reveal>

        {/* Accordion Demonstration */}
        <Reveal>
          <Card className="space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-primary">Accessible Accordion Component</h3>
            <Accordion items={faqsData.slice(0, 3)} />
          </Card>
        </Reveal>

        {/* Phone Frame Video Testimonial Demonstration */}
        <Reveal>
          <Card className="space-y-4 text-center">
            <h3 className="font-heading text-xl font-bold uppercase text-primary">Phone Frame Testimonial Primitive</h3>
            <p className="text-xs text-muted font-body max-w-md mx-auto">
              CSS-drawn phone bezel with notch and single-video playback management.
            </p>
            <div className="pt-4">
              <PhoneFrame
                src={parentTestimonials.videos[0].src}
                poster={parentTestimonials.videos[0].poster}
                title={parentTestimonials.videos[0].title}
                parentName={parentTestimonials.videos[0].parent}
                wardInfo={parentTestimonials.videos[0].ward}
                isActive={false}
              />
            </div>
          </Card>
        </Reveal>
      </main>

      {/* Accessible Modal Dialog */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Accessible Dialog">
        <p className="font-body text-muted text-sm leading-relaxed mb-6">
          Modal with body scroll lock (`useBodyScrollLock`), keyboard focus trap (`useFocusTrap`), and Escape key dismissal verified.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="black-pill" size="sm" onClick={() => setIsModalOpen(false)}>
            Close Dialog
          </Button>
        </div>
      </Modal>
    </div>
  );
}
