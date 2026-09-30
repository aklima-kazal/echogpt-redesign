"use client";
import Link from "next/link";
import { Earth, ExternalLink, ShieldCheck, Heart } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "AI Models", href: "/#models" },
    { label: "Why EchoGPT", href: "/#why-us" },
    { label: "Pricing Plans", href: "/pricing" },
  ],
  Ecosystem: [
    { label: "Launch Web App", href: "/app" },
    { label: "Chrome Extension UI", href: "/extension" },
    { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj", external: true },
    { label: "Official EchoGPT Site", href: "https://echogpt.live/", external: true },
  ],
  Resources: [
    { label: "Frequently Asked Questions", href: "/#faq" },
    { label: "Pricing Breakdown", href: "/pricing" },
    { label: "Developer API", href: "/pricing" },
    { label: "Privacy & Security", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070b] pt-16 pb-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          {/* Brand description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl animated-gradient flex items-center justify-center">
                <Earth size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Echo<span className="gradient-text font-black">GPT</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The next-generation multi-AI workspace. Chat, compare, and switch between GPT-4o, Claude 3.5, Gemini 1.5, and Llama 3 with zero friction.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <ShieldCheck size={13} /> All Systems Operational
              </span>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} className="opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} EchoGPT by AppifyDevs. Redesigned with modern Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 inline" />
            <span>for Frontend Engineering Internship</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
