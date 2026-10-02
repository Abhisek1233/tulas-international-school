import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, PhoneCall } from 'lucide-react';
import { siteInfo } from '../../data/index.js';
import { useFocusTrap } from '../../hooks/index.js';

/**
 * "Eva" Virtual Admission Assistant (Front-End Mock Component).
 * Floating avatar bubble opening an interactive chat panel with quick-reply chips
 * and automated canned admissions responses.
 */
export function EvaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'eva',
      text: 'Namaste! I am Eva, your virtual admission assistant at Tulas International School. How may I assist your family today?',
    },
  ]);

  const containerRef = useFocusTrap(isOpen, () => setIsOpen(false));

  const quickReplies = [
    {
      label: 'Admission Procedure',
      reply: 'The academic session starts in April. Admissions for Class IV to XII involve an aptitude test in Jan/Feb followed by an interaction with the Headmaster.',
    },
    {
      label: 'Fee Structure',
      reply: 'TIS offers transparent annual and term fees covering air-conditioned boarding, organic vegetarian dining, academics, and all 16+ Olympic sports.',
    },
    {
      label: 'Scholarships',
      reply: 'Merit and sports scholarships are available for deserving students excelling in national academics and athletics.',
    },
    {
      label: 'Call Helpline',
      reply: `You can reach our Admissions Desk directly at ${siteInfo.helpline}. Office hours: Mon-Sat, 9:00 AM - 6:00 PM.`,
    },
    {
      label: 'Book Campus Visit',
      reply: 'We warmly welcome parents for a guided tour of our 22-acre Doon Valley campus! Please fill the enquiry form below or call us to fix your appointment.',
    },
  ];

  const handleChipClick = (chip) => {
    // Append user question
    const userMsg = { id: `user-${Date.now()}`, sender: 'user', text: chip.label };
    const evaMsg = { id: `eva-${Date.now() + 1}`, sender: 'eva', text: chip.reply };
    setMessages((prev) => [...prev, userMsg, evaMsg]);
  };

  return (
    <>
      {/* Floating Avatar Trigger Button */}
      <aside aria-label="Virtual Assistant" className="fixed bottom-20 sm:bottom-8 left-6 z-30">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Open Eva virtual admission assistant"
          className="group flex items-center gap-3 bg-surface border-2 border-secondary p-1.5 pr-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {/* Avatar Icon */}
          <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
          </div>

          <div className="hidden sm:block">
            <span className="block font-heading font-extrabold uppercase text-xs text-primary leading-tight">
              Eva • Admissions
            </span>
            <span className="block font-body text-[11px] text-muted leading-tight">
              Virtual Assistant
            </span>
          </div>
        </button>
      </aside>

      {/* Chat Dialogue Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-label="Eva Admissions Assistant"
            className="fixed bottom-24 sm:bottom-24 left-4 sm:left-6 z-40 w-[calc(100vw-32px)] sm:w-96 max-h-[520px] bg-surface border border-border rounded-28 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm uppercase leading-none">
                    Eva Assistant
                  </h4>
                  <span className="text-[10px] text-white/70 font-body">
                    Tulas Admissions AI Desk
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant panel"
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-72 bg-cream/40 dark:bg-surface-card">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-20 text-xs font-body leading-relaxed shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-secondary text-white rounded-br-none'
                        : 'bg-surface border border-border text-text rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Reply Chips */}
            <div className="p-3 border-t border-border bg-surface">
              <p className="font-heading font-bold uppercase text-[10px] text-muted mb-2 tracking-wider">
                Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pb-1">
                {quickReplies.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="px-2.5 py-1 rounded-full bg-secondary/15 hover:bg-secondary/25 text-secondary-dark text-[11px] font-heading font-bold uppercase transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Direct Call Action */}
            <div className="px-4 py-2.5 bg-cream/80 dark:bg-surface border-t border-border flex items-center justify-between text-xs">
              <span className="text-muted font-body text-[11px]">Need human assistance?</span>
              <a
                href={siteInfo.helplineTel}
                className="inline-flex items-center gap-1 font-heading font-bold text-primary hover:underline text-xs uppercase"
              >
                <PhoneCall className="w-3 h-3" />
                Call Helpline
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
