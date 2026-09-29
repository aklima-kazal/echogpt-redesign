"use client";
import Link from "next/link";
import { ArrowRight, MessageSquare, ExternalLink, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-br from-purple-950/60 via-[#121222] to-cyan-950/50 border border-purple-500/30 shadow-2xl shadow-purple-950/40 text-center">
          {/* Subtle inside glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 rounded-full text-xs font-semibold text-purple-200 mb-6">
              <Sparkles size={13} className="text-purple-400" />
              <span>Join 500,000+ AI Power Users Today</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to elevate your intelligence workflow?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-xl mx-auto">
              Get instant access to GPT-4o, Claude 3.5, and Gemini in one unified platform.
              No complex setup, no credit card required.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
              <Link
                href="/app"
                className="w-full sm:w-auto animated-gradient text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 shadow-lg shadow-purple-600/40 hover:opacity-95 transition-all text-sm sm:text-base"
              >
                <MessageSquare size={17} />
                <span>Start Chatting Free</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/extension"
                className="w-full sm:w-auto glass-card border border-white/20 text-slate-200 hover:text-white hover:bg-white/10 font-bold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
              >
                <span>Chrome Extension UI</span>
                <ExternalLink size={16} />
              </Link>
            </div>

            <p className="text-xs text-slate-400 mt-6">
              Instant activation · Zero credit card required · Free forever tier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
