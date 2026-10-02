import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function VisionMission() {
  useDocumentTitle('Vision & Mission | Core Values');

  return (
    <InnerPageLayout
      title="Mission & Vision"
      subtitle="Guiding Principles"
      tagline="We aim to inspire purpose and guide students toward endless possibilities."
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 3 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            To become a center of excellence and a leader among top educational institutions, nurturing compassionate, global citizens.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default VisionMission;
