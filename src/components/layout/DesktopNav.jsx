import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigationItems } from '../../data/index.js';
import { DropdownPanel } from './DropdownPanel.jsx';

/**
 * Primary Desktop Navigation bar.
 * Exact 9 items with animated dropdown menus and gold stroke indicators.
 */
export function DesktopNav() {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const handleMouseEnter = (id) => setActiveMenuId(id);
  const handleMouseLeave = () => setActiveMenuId(null);

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navigationItems.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = activeMenuId === item.id;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleMouseEnter(item.id)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setActiveMenuId(null);
              }
            }}
          >
            <button
              type="button"
              aria-haspopup={hasChildren ? 'true' : 'false'}
              aria-expanded={isOpen}
              className={`relative px-2.5 py-1.5 font-heading uppercase text-xs xl:text-[13px] font-bold tracking-wider text-white transition-colors hover:text-white/90 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary rounded-lg ${
                isOpen ? 'text-white' : 'text-white/95'
              }`}
            >
              <span>{item.label}</span>
              {hasChildren && (
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 text-white/70 ${
                    isOpen ? 'rotate-180 text-secondary' : ''
                  }`}
                  aria-hidden="true"
                />
              )}

              {/* Animated underline indicator */}
              <span
                className={`absolute bottom-0 left-2 right-2 h-0.5 bg-accent transition-all duration-300 origin-center ${
                  isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              />
            </button>

            {/* Dropdown menu */}
            {hasChildren && (
              <DropdownPanel
                isOpen={isOpen}
                items={item.children}
                parentLabel={item.label}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
