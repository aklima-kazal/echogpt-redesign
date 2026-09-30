"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Senior Product Designer",
    company: "TechFlow",
    avatar: "SK",
    text: "EchoGPT completely replaced 3 separate AI subscriptions for our design team. Running Claude for copy and GPT-4o for design specs in the same window saves me hours every week.",
    rating: 5,
  },
  {
    name: "Marcus L.",
    role: "Full-Stack Engineer",
    company: "CloudScale",
    avatar: "ML",
    text: "The Chrome extension is game-changing. Highlighting code directly inside GitHub pull requests and getting an instant multi-model explanation has supercharged my code review workflow.",
    rating: 4,
  },
  {
    name: "Priya S.",
    role: "Content & SEO Strategist",
    company: "GrowthMatrix",
    avatar: "PS",
    text: "Comparing Claude 3.5 and GPT-4o side-by-side with identical prompts lets me blend the best reasoning with the best prose. EchoGPT has become my daily driver.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Startup Founder",
    company: "Nexus Labs",
    avatar: "JT",
    text: "The free tier is surprisingly capable, and upgrading to Pro was an easy choice. Having unified history and instant switching between models is worth 10x the subscription price.",
    rating: 3,
  },
  {
    name: "Aisha R.",
    role: "Research & Data Analyst",
    company: "BioAnalytics",
    avatar: "AR",
    text: "Accessing Gemini's huge context window alongside Perplexity's live web citations in one platform gives our team an immense research advantage. Clean and incredibly fast.",
    rating: 5,
  },
  {
    name: "David C.",
    role: "Technical Writer",
    company: "DevGuides",
    avatar: "DC",
    text: "Clean dark UI, blazing fast response speeds, and no API keys required. I have tested dozens of multi-AI tools and EchoGPT is by far the most polished experience.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill  inset-ring-1 inset-ring-blue-500/50">
            Community Feedback
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Trusted by <span className="gradient-text">500,000+ creators & developers</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            See how professionals around the globe are using EchoGPT to accelerate their everyday productivity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card glass-card-hover bg-[#11111c] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full  bg-sky-500/75 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg">
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-sm truncate">{t.name}</div>
                  <div className="text-slate-400 text-xs truncate">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
