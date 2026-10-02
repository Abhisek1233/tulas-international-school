import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function WhyChooseUs() {
  useDocumentTitle('Why Choose Us? | At TIS, You Will Experience');

  return (
    <InnerPageLayout
      title="At TIS, you'll experience"
      subtitle="UNEXPECTED FACT #1"
      tagline="At TIS, school is different. It isn't a chore or a competition – it's an opportunity."
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 6 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            We love school! (Yes, really!)
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            What makes TIS students jump out of bed in the morning? Discover why Tulas International School is the premier choice for holistic, co-educational residential schooling.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default WhyChooseUs;
