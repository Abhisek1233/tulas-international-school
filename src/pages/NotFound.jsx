import React from 'react';
import { Link } from 'react-router-dom';
import { InnerPageLayout } from '../components/layout/index.js';
import { Button } from '../components/ui/index.js';
import { useDocumentTitle } from '../hooks/index.js';
import { Home, PhoneCall } from 'lucide-react';

export function NotFound() {
  useDocumentTitle('404 - Page Not Found');

  return (
    <InnerPageLayout
      title="Page Not Found"
      subtitle="404 Error"
      tagline="Let us help you find your way back to Tulas International School"
    >
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <span className="font-heading font-black text-7xl sm:text-9xl text-primary/20 block select-none">
          404
        </span>
        <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-text mt-2 mb-4">
          Oops! The page you are looking for doesn't exist.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-base sm:text-lg">
          The page may have moved or been updated. You can return to our homepage or get in touch with our admissions office.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg" className="inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>Back To Homepage</span>
            </Button>
          </Link>
          <a href="tel:+919837983791">
            <Button variant="outline" size="lg" className="inline-flex items-center gap-2">
              <PhoneCall className="w-5 h-5" />
              <span>Contact Admissions</span>
            </Button>
          </a>
        </div>
      </section>
    </InnerPageLayout>
  );
}

export default NotFound;
