import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function HeadmasterProfile() {
  useDocumentTitle("Headmaster's Profile | Leadership");

  return (
    <InnerPageLayout
      title="Principal's Profile"
      subtitle="School Leadership"
      tagline="A Principal shapes dreams, building a foundation for lifelong success"
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 3 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            Mr. Raman Koushal
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Headmaster / Principal, Tulas International School. Dedicated to holistic educational excellence and value-based student mentorship.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default HeadmasterProfile;
