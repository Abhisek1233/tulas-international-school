import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function OurHistory() {
  useDocumentTitle('Our History | Inception Story');

  return (
    <InnerPageLayout
      title="Our History"
      subtitle="History connects the past, present & future."
      tagline="TIS sparks intellectual journeys that connect to the wider world"
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 2 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            Flip The Pages of Our Inception Story
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Founded under the visionary leadership of Shri Sunil Kumar Jain, Tulas International School was born in 2012 out of a deep conviction to shape young minds with purpose.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default OurHistory;
