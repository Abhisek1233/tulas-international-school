import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function OurManagement() {
  useDocumentTitle('Our Management | Board of Directors');

  return (
    <InnerPageLayout
      title="Our Management"
      subtitle="Visionary Governance"
      tagline="A strong school management provides the best learning environment for students"
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 4 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            Board of Management
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Meet the leaders driving educational innovation, academic rigor, and compassionate growth at Tulas International School.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default OurManagement;
