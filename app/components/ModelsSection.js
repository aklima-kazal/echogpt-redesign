"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const models = [
  {
    id: "gpt4o",
    name: "GPT-4o",
    provider: "OpenAI",
    badge: "Flagship Reasoning",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    gradient: "from-emerald-600 to-teal-700",
    desc: "Unmatched performance for complex coding, mathematical logic, multi-step agent reasoning, and creative generation.",
    contextWindow: "128k context",
    bestFor: "Complex coding & problem solving",
  },
  {
    id: "claude35",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    badge: "Best Nuance & Tone",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    gradient: "from-orange-600 to-amber-700",
    desc: "Industry-leading natural prose, nuanced tone, comprehensive document synthesis, and deep instruction following.",
    contextWindow: "200k context",
    bestFor: "Writing, analysis & long context",
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    badge: "Multimodal Powerhouse",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    gradient: "from-blue-600 to-indigo-700",
    desc: "Massive context retention and native understanding of images, long documents, and research data.",
    contextWindow: "1M context",
    bestFor: "Research & multimodal inputs",
  },
  {
    id: "llama3",
    name: "Llama 3.3 (70B)",
    provider: "Meta",
    badge: "Open Source King",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    gradient: "from-purple-600 to-violet-700",
    desc: "High-speed open weights model fine-tuned for high efficiency, developer tooling, and unconstrained exploration.",
    contextWindow: "128k context",
    bestFor: "Speed & developer tasks",
  },
  {
    id: "mistral",
    name: "Mistral Large 2",
    provider: "Mistral AI",
    badge: "European Flagship",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    gradient: "from-cyan-600 to-sky-700",
    desc: "Exceptional multilingual reasoning across dozens of European and Asian languages with concise, accurate outputs.",
    contextWindow: "128k context",
    bestFor: "Multilingual & precision logic",
  },
  {
    id: "perplexity",
    name: "Perplexity Online",
    provider: "Perplexity",
    badge: "Live Web Citations",
    badgeColor: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    gradient: "from-pink-600 to-rose-700",
    desc: "Real-time indexed web search coupled with generative synthesis. Every answer is backed by live, verifiable citations.",
    contextWindow: "Live search",
    bestFor: "Current events & fact verification",
  },
];

export default function ModelsSection() {
  return (
    <section id="models" className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill">
            Unified Model Hub
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Access world-class AI models{" "}
            <span className="gradient-text">without separate subscriptions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Choose the right model for your specific problem. Switch between providers instantly in the middle of any conversation.
          </p>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center text-white font-black text-base shadow-md`}
                    >
                      {model.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {model.name}
                      </h3>
                      <p className="text-xs text-slate-400">{model.provider}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${model.badgeColor} shrink-0`}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {model.desc}
                </p>

                {/* Metadata row */}
                <div className="space-y-1.5 pt-3 border-t border-white/5 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Context:</span>
                    <span className="text-slate-300 font-medium">{model.contextWindow}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Ideal for:</span>
                    <span className="text-slate-300 font-medium truncate max-w-[180px] text-right">
                      {model.bestFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button: Opens chat with that specific model chosen */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <Link
                  href={`/app?model=${model.id}`}
                  className="w-full text-center py-2.5 px-4 rounded-xl glass-pill text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Chat with {model.name}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
