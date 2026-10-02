import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from './components/layout/index.js';

// Lazy load each route for optimal code-splitting and bundle performance
const Home = lazy(() => import('./pages/Home.jsx').then((m) => ({ default: m.Home })));
const OurHistory = lazy(() => import('./pages/OurHistory.jsx').then((m) => ({ default: m.OurHistory })));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs.jsx').then((m) => ({ default: m.WhyChooseUs })));
const VisionMission = lazy(() => import('./pages/VisionMission.jsx').then((m) => ({ default: m.VisionMission })));
const AwardsAchievements = lazy(() => import('./pages/AwardsAchievements.jsx').then((m) => ({ default: m.AwardsAchievements })));
const HeadmasterProfile = lazy(() => import('./pages/HeadmasterProfile.jsx').then((m) => ({ default: m.HeadmasterProfile })));
const OurManagement = lazy(() => import('./pages/OurManagement.jsx').then((m) => ({ default: m.OurManagement })));
const NotFound = lazy(() => import('./pages/NotFound.jsx').then((m) => ({ default: m.NotFound })));

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('GlobalErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary mb-3">
            Something went wrong
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-md mb-6">
            An error occurred while loading this page. Please try refreshing or returning to our homepage.
          </p>
          <a
            href="/"
            className="px-6 py-2.5 rounded-full bg-primary text-white font-heading font-bold text-sm tracking-wider uppercase hover:bg-primary-hover transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-hidden="true">
      <div className="w-10 h-10 rounded-full border-3 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="w-full flex-1 flex flex-col"
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about-tis/our-history" element={<OurHistory />} />
            <Route path="/about-tis/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/about-tis/vision-and-mission" element={<VisionMission />} />
            <Route path="/about-tis/awards-and-achievements" element={<AwardsAchievements />} />
            <Route path="/about-tis/headmasters-profile" element={<HeadmasterProfile />} />
            <Route path="/about-tis/our-management" element={<OurManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <GlobalErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </GlobalErrorBoundary>
  );
}
