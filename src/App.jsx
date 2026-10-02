import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 selection:bg-secondary selection:text-white">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-surface-card border border-border rounded-28 p-8 shadow-lift text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary-dark font-heading uppercase text-sm tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span>TIS Redesign • Phase 1 Scaffolding Ready</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-primary mb-3">
          Tulas International School
        </h1>

        <p className="font-display italic text-2xl text-text mb-6">
          The Modern Gurukul • Dehradun, Uttarakhand
        </p>

        <p className="font-body text-muted text-base leading-relaxed mb-8">
          Phase 1 scaffolding complete. Pinned Tailwind CSS v3, Framer Motion, brand design tokens,
          Google Fonts (Barlow Semi Condensed, Playfair Display, Kumbh Sans), and automated asset extraction pipelines are verified.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left mb-8">
          <div className="p-3 rounded-20 bg-primary/10 border border-primary/20">
            <span className="block text-xs uppercase font-heading text-primary font-bold">Primary</span>
            <span className="text-xs font-mono font-medium">#B90124</span>
          </div>
          <div className="p-3 rounded-20 bg-secondary/15 border border-secondary/20">
            <span className="block text-xs uppercase font-heading text-secondary-dark font-bold">Secondary</span>
            <span className="text-xs font-mono font-medium">#60BAB1</span>
          </div>
          <div className="p-3 rounded-20 bg-cream border border-border">
            <span className="block text-xs uppercase font-heading text-text font-bold">Cream</span>
            <span className="text-xs font-mono font-medium">#F8F5F0</span>
          </div>
          <div className="p-3 rounded-20 bg-[#C9A24D]/15 border border-[#C9A24D]/30">
            <span className="block text-xs uppercase font-heading text-[#8B6B22] font-bold">Gold Accent</span>
            <span className="text-xs font-mono font-medium">#C9A24D</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-secondary-dark font-medium">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span>Ready for Phase 2: Centralized Data Layer</span>
        </div>
      </motion.main>
    </div>
  );
}
