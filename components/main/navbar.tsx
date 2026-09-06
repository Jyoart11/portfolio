"use client";
import { useState } from "react";
import Link from "next/link";

import { CONTACT, NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="w-full h-[64px] fixed top-0 left-0 z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-md"
    >
      <nav
        aria-label="Primary"
        className="w-full h-full flex items-center justify-between max-w-[1240px] mx-auto px-4 md:px-8"
      >
        <Link
          href="#about"
          className="flex items-center gap-3"
          aria-label="Home"
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 font-heading font-semibold text-white text-[14px]"
            aria-hidden
          >
            JK
          </span>
          <span className="hidden sm:inline font-heading text-[15px] font-medium text-white tracking-tight">
            Jyothirmai Kalamkuri
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-1.5 backdrop-blur">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="px-3 py-1.5 rounded-full text-[13px] text-gray-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href={`mailto:${CONTACT.email}`}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors border border-purple-500/30 hover:border-purple-500/60 bg-purple-500/10 hover:bg-purple-500/15 px-4 py-2 rounded-full"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-[64px] left-0 w-full bg-[#030014]/95 backdrop-blur-lg border-t border-white/5"
        >
          <div className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[15px] text-gray-200 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={`mailto:${CONTACT.email}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-[15px] text-white border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/15 text-center"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
