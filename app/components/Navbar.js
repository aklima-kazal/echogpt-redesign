"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Earth, ArrowRight, Layout } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "AI Models", href: "/#models" },
  { label: "Why EchoGPT", href: "/#why-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#07070b]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl animated-gradient flex items-center justify-center shadow-md shadow-purple-500/25">
            <Earth size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            Echo<span className="gradient-text font-black">GPT</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              v2.0
            </span>
          </span>
        </Link>

        {/* Center navigation links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/extension"
            className="text-slate-300 hover:text-purple-300 text-sm font-medium transition-colors flex items-center gap-1.5"
          >
            <span>Extension Concept</span>
          </Link>
        </nav>

        {/* Action buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <ThemeToggle className="hidden lg:inline-flex" />
          <Link
            href="/extension"
            className="text-xs font-semibold px-3.5 py-2 rounded-lg glass-pill text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Extension UI
          </Link>
          <Link
            href="/app"
            className="bg-sky-500/40 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:opacity-95 transition-all shadow-md shadow-purple-600/30 flex items-center gap-1.5"
          >
            <Layout size={15} />
            <span>Launch Web App</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <ThemeToggle className="lg:hidden" />

        {/* Mobile menu trigger */}
        <button
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0d15] border-b border-white/10 px-4 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-200 hover:text-white py-2 text-sm font-medium border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/extension"
              onClick={() => setMenuOpen(false)}
              className="text-slate-200 hover:text-purple-300 py-2 text-sm font-medium border-b border-white/5"
            >
              Chrome Extension Concept
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/app"
                onClick={() => setMenuOpen(false)}
                className="animated-gradient text-white text-sm font-semibold py-3 rounded-xl text-center shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <Layout size={16} />
                <span>Open EchoGPT Web App</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
