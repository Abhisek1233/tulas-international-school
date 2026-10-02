import React from 'react';
import { InnerPageLayout } from '../components/layout/index.js';
import { useDocumentTitle } from '../hooks/index.js';

export function AwardsAchievements() {
  useDocumentTitle('Awards & Achievements | Accreditations');

  return (
    <InnerPageLayout
      title="Awards and Achievements"
      subtitle="Excellence Recognized"
      tagline="We have won various awards for excellence in education and leadership"
      heroImage="/assets/campus/schooltopview.webp"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder scaffold for Step 5 */}
        <div className="text-center py-12">
          <h2 className="font-display italic font-bold text-3xl sm:text-4xl text-primary mb-4">
            Achievements of Tulas International School
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Tulas International School boasts numerous awards and achievements, highlighting our commitment to excellence in academics, sports, and extracurricular activities.
          </p>
        </div>
      </div>
    </InnerPageLayout>
  );
}

export default AwardsAchievements;
