import React, { Suspense, lazy } from 'react';
import { CustomCursor, ScrollProgress } from './components/animation/index.js';
import { TopBar, Header, Footer } from './components/layout/index.js';
import { Hero } from './components/sections/Hero.jsx';
import {
  ApplyTab,
  WhatsAppButton,
  EvaAssistant,
  StickyCtaBar,
} from './components/widgets/index.js';

// React.lazy for all below-the-fold sections to optimize initial bundle size & LCP
const ContactEnquiry = lazy(() =>
  import('./components/sections/ContactEnquiry.jsx').then((m) => ({ default: m.ContactEnquiry }))
);
const StudentVoices = lazy(() =>
  import('./components/sections/StudentVoices.jsx').then((m) => ({ default: m.StudentVoices }))
);
const Sports = lazy(() =>
  import('./components/sections/Sports.jsx').then((m) => ({ default: m.Sports }))
);
const SecretSection = lazy(() =>
  import('./components/sections/SecretSection.jsx').then((m) => ({ default: m.SecretSection }))
);
const StatsBento = lazy(() =>
  import('./components/sections/StatsBento.jsx').then((m) => ({ default: m.StatsBento }))
);
const Rankings = lazy(() =>
  import('./components/sections/Rankings.jsx').then((m) => ({ default: m.Rankings }))
);
const Personalities = lazy(() =>
  import('./components/sections/Personalities.jsx').then((m) => ({ default: m.Personalities }))
);
const Awards = lazy(() =>
  import('./components/sections/Awards.jsx').then((m) => ({ default: m.Awards }))
);
const VirtualTourBanner = lazy(() =>
  import('./components/sections/VirtualTourBanner.jsx').then((m) => ({ default: m.VirtualTourBanner }))
);
const ParentVideos = lazy(() =>
  import('./components/sections/ParentVideos.jsx').then((m) => ({ default: m.ParentVideos }))
);
const GoogleReviews = lazy(() =>
  import('./components/sections/GoogleReviews.jsx').then((m) => ({ default: m.GoogleReviews }))
);
const Collaborations = lazy(() =>
  import('./components/sections/Collaborations.jsx').then((m) => ({ default: m.Collaborations }))
);
const Faq = lazy(() =>
  import('./components/sections/Faq.jsx').then((m) => ({ default: m.Faq }))
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

function SectionFallback() {
  return (
    <div className="py-16 flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const handleScrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 relative flex flex-col selection:bg-secondary selection:text-white">
      {/* Standout Feature 1: Custom Cursor */}
      <CustomCursor />

      {/* Standout Feature 4: Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Utility Helpline Bar */}
      <TopBar onEnquireClick={handleScrollToEnquiry} />

      {/* Sticky Main Crimson Header */}
      <Header />

      {/* Floating Side Tab (Apply Now) */}
      <ApplyTab />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Virtual Admissions Assistant Eva */}
      <EvaAssistant />

      {/* Mobile Sticky CTA Bar */}
      <StickyCtaBar onEnquireClick={handleScrollToEnquiry} />

      {/* Main Single-Page Content Stream (Sections A through N) */}
      <main id="main-content" className="flex-1">
        {/* Section A: Hero (Eager loaded for instant LCP) */}
        <Hero onEnquireClick={handleScrollToEnquiry} />

        <ErrorBoundary fallback={<SectionFallback />}>
          <Suspense fallback={<SectionFallback />}>
            {/* Section B: Contact Us & Enquire Now Form */}
            <ContactEnquiry />

            {/* Section C: Student Voices */}
            <StudentVoices />

            {/* Section D: Sports Grid (16 disciplines) */}
            <Sports />

            {/* Section E: Secret to Making School Awesome */}
            <SecretSection />

            {/* Section F: Stats Bento Grid */}
            <StatsBento />

            {/* Section G: Rankings */}
            <Rankings />

            {/* Section H: Influential Personalities On Campus */}
            <Personalities />

            {/* Section I: Awards & Recognitions */}
            <Awards />

            {/* Section J: Virtual Tour Interactive Banner */}
            <VirtualTourBanner />

            {/* Section K: From The Parents (Video Testimonials) */}
            <ParentVideos />

            {/* Section L: Google Reviews */}
            <GoogleReviews />

            {/* Section M: 12+ Collaborations */}
            <Collaborations />

            {/* Section N: Frequently Asked Questions (18 Questions) */}
            <Faq />
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Section O: Footer with Embedded Location Map */}
      <Footer />
    </div>
  );
}
