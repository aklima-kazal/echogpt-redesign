"use client";
import { Check, X, ShieldAlert, Zap, DollarSign, Layers } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 sm:py-24 relative w-full overflow-hidden bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill">
            The Value Proposition
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Why choose EchoGPT over{" "}
            <span className="gradient-text">standalone subscriptions?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            See how EchoGPT compares directly with paying individual subscriptions for every model.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Old way */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-red-500/20 bg-red-950/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  The Old Fragmented Way
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-red-500/20 text-red-300 font-semibold">
                  ~$80 / month
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                4 Separate Accounts & Subscriptions
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Paying $20/mo each for ChatGPT Plus, Claude Pro, and Gemini Advanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Constant tab hopping and losing conversational context across different tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>Scattered chat history saved in different websites with no central search</span>
                </li>
                <li className="flex items-start gap-3">
                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span>No ability to test the exact same prompt against multiple models side-by-side</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-red-500/15 text-xs text-red-300/80">
              High monthly recurring cost with repetitive workflow friction.
            </div>
          </div>

          {/* EchoGPT way */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/40 bg-purple-950/20 flex flex-col justify-between shadow-xl shadow-purple-950/30 relative">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              SMART CHOICE
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  The EchoGPT Way
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-200 font-semibold">
                  Free or $9 / mo
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                One Unified Intelligence Workspace
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Access all frontier AI models (OpenAI, Anthropic, Google, Meta) in one place</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Save over $800 annually while getting more variety and greater model choice</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unified search and tagged history across every AI model you chat with</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Native Chrome extension for instant webpage summarization & inline AI assistance</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/20 text-xs text-purple-300 font-medium">
              Maximum productivity with minimal friction and 10x cost savings.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
