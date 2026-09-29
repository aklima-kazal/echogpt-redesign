"use client";
import {
  MessageSquare,
  Layers,
  Globe,
  Shield,
  Zap,
  History,
  Download,
  SplitSquareVertical,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "10+ Frontier AI Models",
    desc: "Switch between GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, Llama 3, and Mistral in one click.",
    color: "text-purple-400",
    bg: "bg-purple-600/15 border-purple-500/30",
  },
  {
    icon: SplitSquareVertical,
    title: "Dual Side-by-Side Comparison",
    desc: "Send a single prompt to two different models simultaneously and compare the quality of outputs.",
    color: "text-cyan-400",
    bg: "bg-cyan-600/15 border-cyan-500/30",
  },
  {
    icon: Zap,
    title: "Zero Latency Edge Streaming",
    desc: "Instant token streaming via global CDN edges. Faster initial response times than direct portals.",
    color: "text-amber-400",
    bg: "bg-amber-600/15 border-amber-500/30",
  },
  {
    icon: History,
    title: "Unified Searchable History",
    desc: "Keep all your conversations across every model neatly indexed, tagged, and instantly searchable.",
    color: "text-emerald-400",
    bg: "bg-emerald-600/15 border-emerald-500/30",
  },
  {
    icon: Globe,
    title: "Multilingual Intelligence",
    desc: "Full fluency across 100+ languages with automatic locale detection and accurate translations.",
    color: "text-blue-400",
    bg: "bg-blue-600/15 border-blue-500/30",
  },
  {
    icon: Shield,
    title: "Privacy & Data Security",
    desc: "Enterprise-grade encryption in transit and at rest. Your conversations are never used to train models.",
    color: "text-rose-400",
    bg: "bg-rose-600/15 border-rose-500/30",
  },
  {
    icon: Download,
    title: "One-Click Export",
    desc: "Export conversations formatted as clean Markdown, PDF, JSON, or copy formatted code snippets.",
    color: "text-violet-400",
    bg: "bg-violet-600/15 border-violet-500/30",
  },
  {
    icon: MessageSquare,
    title: "Chrome Extension Included",
    desc: "Access the sidebar on any webpage, summarize articles, explain code, and draft replies instantly.",
    color: "text-pink-400",
    bg: "bg-pink-600/15 border-pink-500/30",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header with controlled text scale */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill">
            Engineered for Productivity
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Everything you need for an{" "}
            <span className="gradient-text">unmatched AI experience</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Stop juggling multiple browser tabs and paying for redundant subscriptions.
            EchoGPT brings every tool you need into one cohesive workspace.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${feature.bg}`}
                  >
                    <Icon size={20} className={feature.color} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
