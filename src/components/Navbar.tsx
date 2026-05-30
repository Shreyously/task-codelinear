import { useState } from 'react';
import Button from './Button';
import ChevronDown from './icons/ChevronDown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['solutions', 'resources', 'about us'];

  return (
    <nav
      id="navbar"
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-1rem)] max-w-[716px] bg-[rgba(47,47,47,0.7)] backdrop-blur-[15px] rounded-[12px] border border-white/5 shadow-2xl px-[10px] py-[9px]"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="flex h-[29px] items-center justify-between gap-3">
        {/* Left Side — Logo */}
        <a
          href="#"
          className="font-archivo font-medium text-[24px] leading-[28.8px] text-[#E9F4F9] tracking-[0] text-left hover:opacity-80 transition-opacity select-none flex-shrink-0"
        >
          N7
        </a>

        {/* Right Side — Two Groups */}
        <div className="hidden md:flex items-center gap-8 lg:gap-[80px] h-full flex-shrink-0">
          {/* Group 1 — Navigation Links (Frame 11) */}
          <div className="flex items-center gap-[20px] h-full flex-shrink-0">
            {/* Item 1 - Solutions */}
            <div className="group flex items-center gap-[4px] justify-center cursor-pointer select-none flex-shrink-0">
              <span className="font-chivo text-[12px] leading-[15.6px] font-normal uppercase text-[#E9F4F9] tracking-[0] group-hover:text-white/80 transition-colors whitespace-nowrap">
                solutions
              </span>
              <ChevronDown
                className="w-[22px] h-[22px] text-[#E9F4F9] group-hover:translate-y-0.5 transition-transform duration-200 flex-shrink-0"
                style={{ transform: 'rotate(90deg)' }}
              />
            </div>

            {/* Item 2 - Resources */}
            <div className="group flex items-center gap-[4px] justify-center cursor-pointer select-none flex-shrink-0">
              <span className="font-chivo text-[12px] leading-[15.6px] font-normal uppercase text-[#E9F4F9] tracking-[0] group-hover:text-white/80 transition-colors whitespace-nowrap">
                resources
              </span>
              <ChevronDown
                className="w-[22px] h-[22px] text-[#E9F4F9] group-hover:translate-y-0.5 transition-transform duration-200 flex-shrink-0"
                style={{ transform: 'rotate(90deg)' }}
              />
            </div>

            {/* Item 3 - About us */}
            <div className="group flex items-center gap-[4px] justify-center cursor-pointer select-none flex-shrink-0">
              <span className="font-chivo text-[12px] leading-[15.6px] font-normal uppercase text-[#E9F4F9] tracking-[0] group-hover:text-white/80 transition-colors whitespace-nowrap">
                about us
              </span>
            </div>
          </div>

          {/* Group 2 — CTA Button Area (Frame 20) */}
          <div className="flex items-center h-full flex-shrink-0">
            {/* Request Demo Button (Frame 36) */}
            <Button
              href="#contact"
              size="sm"
              variant="secondary"
              className="flex-shrink-0"
              textSize="text-[12px]"
              width="w-[210px]"
            >
              request demo
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            href="#contact"
            size="sm"
            variant="secondary"
            textSize="text-[11px] leading-[1.3]"
            width="w-[118px]"
          >
            request demo
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-[30px] w-[34px] flex-col items-center justify-center gap-1 rounded-[6px] border border-[#E9F4F9]/40 text-[#E9F4F9] transition-colors hover:bg-[#E9F4F9] hover:text-[#003ACF]"
          >
            <span className="h-[1.5px] w-4 bg-current" />
            <span className="h-[1.5px] w-4 bg-current" />
            <span className="h-[1.5px] w-4 bg-current" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={link === 'solutions' ? '#solutions' : '#'}
              className="rounded-lg px-3 py-2 font-chivo text-[12px] uppercase leading-[1.3] text-[#E9F4F9] transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
