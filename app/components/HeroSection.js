"use client";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Zap,
  ExternalLink,
  Bot,
  Copy,
  Check,
  ShieldCheck,
  Earth,
} from "lucide-react";
import { useState } from "react";
import StatsCounter from "./StatsCounter";




export default function HeroSection() {
  const [activeModel, setActiveModel] = useState("GPT-4o");
  const [copied, setCopied] = useState(false);

  const modelResponses = {
    "GPT-4o":
      "Here is the optimized quick-sort algorithm in JavaScript with detailed step-by-step comments:",
    "Claude 3.5":
      "I've refactored your architecture for optimal maintainability and clean separation of concerns:",
    "Gemini 1.5":
      "Analyzed your dataset: identified 3 primary performance bottlenecks and 2 memory leak patterns:",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("const quickSort = (arr) => arr.length <= 1 ? arr : [...quickSort(arr.filter(x => x < arr[0])), arr[0], ...quickSort(arr.filter(x => x > arr[0]))];");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 sm:pt-36 pb-20">
      {/* Centered subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Release badge */}
        <div className="inline-flex items-center gap-2 glass-pill rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm text-indigo-500">
          <Sparkles size={14} className="text-purple-400 shrink-0" />
          <span>Next-Gen Multi-AI Workspace — GPT-4o, Claude 3.5 & Gemini</span>
        </div>

        {/* Hero headline without breaking text collision */}
        <h1 className="text-3xl sm:text-5xl lg:text-[40px] mb-2 font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          Hello There! 👋 How can I assist you today?
        </h1>
          <span className="text-blue-800 text-md font-medium ">Your personal AI assistant is ready to help—ask me anything, anytime.</span>

        {/* Subtitle with high contrast and readable line-height */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-5 leading-relaxed">
          Switch seamlessly between GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, and Llama 3 in a single tab.
          Eliminate redundant subscriptions and boost your workflow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-8 ">
          <Link
            href="/app"
            className="w-full sm:w-auto bg-sky-500/40 text-white font-semibold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-md shadow-sky-600/30 hover:opacity-95 transition-all text-sm sm:text-base"
          >
            <MessageSquare size={17} />
            <span>Launch Web App (Free)</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/extension"
            className="w-full sm:w-auto glass-card border border-white/15 text-slate-200 hover:text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl inline-flex items-center justify-center gap-2.5 transition-all text-sm sm:text-base"
          >
            <span>Explore Extension Concept</span>
            <ExternalLink size={16} />
          </Link>
        </div>

        {/* Key trust bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-green-400" /> Free forever tier
          </span>
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-green-400" /> No API key needed
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-purple-400" /> End-to-end encrypted
          </span>
        </div>

        <StatsCounter />

        {/* Product Preview Mockup */}
        <div className="mt-14 max-w-5xl mx-auto text-left">
          <div className="glass-card rounded-2xl border border-white/15 shadow-2xl shadow-purple-950/40 overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0e0e17] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs text-slate-400 ml-2 font-mono">echogpt.live/chat</span>
              </div>

              {/* Model tabs in preview */}
              <div className="flex items-center gap-1.5 bg-[#171724] p-1 rounded-lg border border-white/10">
                {["GPT-4o", "Claude 3.5", "Gemini 1.5"].map((model) => (
                  <button
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                      activeModel === model
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat preview content */}
            <div className="p-4 sm:p-6 space-y-4 bg-[#0a0a12]/90">
              {/* User prompt */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-purple-600/30 border border-purple-500/30 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs sm:text-sm max-w-lg shadow-sm">
                  Can you write a clean, modern quick-sort function in JavaScript?
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-md">
                  U
                </div>
              </div>

              {/* AI response */}
              <div className="flex items-start gap-3 justify-start">
                <div className="w-8 h-8 rounded-full animated-gradient flex items-center justify-center text-white shrink-0 shadow-md">
                  <Bot size={16} />
                </div>
                <div className="glass-card bg-[#141422] border border-white/10 rounded-2xl rounded-tl-sm p-4 text-xs sm:text-sm text-slate-200 max-w-2xl w-full space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-semibold text-purple-400 text-xs flex items-center gap-1.5">
                      <Earth size={13} /> {activeModel} Response
                    </span>
                    <button
                      onClick={handleCopy}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                      <span>{copied ? "Copied" : "Copy Code"}</span>
                    </button>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {modelResponses[activeModel]}
                  </p>

                  <div className="bg-[#09090f] p-3 rounded-xl border border-white/5 font-mono text-xs overflow-x-auto text-emerald-300">
                    <code>
                      {`const quickSort = (arr) => {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.slice(1).filter((x) => x < pivot);\n  const right = arr.slice(1).filter((x) => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n};`}
                    </code>
                  </div>
                </div>
              </div>

              {/* Mock input bar */}
              <div className="pt-2 flex items-center gap-2 bg-[#12121e] border border-white/10 rounded-xl px-4 py-2.5">
                <span className="text-slate-400 text-xs sm:text-sm flex-1">
                  Type a prompt or switch models on the fly...
                </span>
                <Link
                  href="/app"
                  className="bg-sky-500/40 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 shrink-0 hover:opacity-90"
                >
                  <span>Try It Live</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
