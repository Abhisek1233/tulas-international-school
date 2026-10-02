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
              className={`relative px-3 py-1.5 font-heading uppercase text-xs xl:text-[13px] font-bold tracking-wider text-white transition-all duration-200 hover:bg-white/15 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary rounded-full ${
                isOpen ? 'bg-white/20 text-white shadow-inner' : 'text-white/95'
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

              {/* Animated gold underline indicator */}
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-0.5 bg-accent rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'scale-x-100 opacity-100 shadow-[0_0_8px_rgba(245,130,32,0.9)]' : 'scale-x-0 opacity-0'
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
