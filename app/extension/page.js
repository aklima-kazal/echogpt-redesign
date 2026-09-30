"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import {
  Zap,
  Send,
  ChevronDown,
  Sparkles,
  X,
  Copy,
  Pin,
  Maximize2,
  ExternalLink,
  ArrowLeft,
  FileText,
  Code2,
  Languages,
  Wand2,
  Check,
  Chrome,
  MousePointerClick,
  ShieldCheck,
  Star,
  Layers,
  Earth,
} from "lucide-react";

const EXTENSION_MODELS = [
  { name: "GPT-4o", provider: "OpenAI", color: "from-emerald-500 to-teal-600" },
  { name: "Claude 3.5 Sonnet", provider: "Anthropic", color: "from-orange-500 to-amber-600" },
  { name: "Gemini 1.5 Pro", provider: "Google", color: "from-blue-500 to-indigo-600" },
  { name: "Llama 3.3", provider: "Meta", color: "from-purple-500 to-violet-600" },
];

const EXTENSION_TABS = ["Assistant", "Quick Actions", "History", "Settings"];

export default function ExtensionConceptPage() {
  const [activeTab, setActiveTab] = useState("Assistant");
  const [selectedModel, setSelectedModel] = useState(EXTENSION_MODELS[0]);
  const [modelDropdown, setModelDropdown] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [highlightedSnippet, setHighlightedSnippet] = useState(
    "Next.js Turbopack delivers up to 10x faster HMR and optimizes asset bundling with Rust-based compilation."
  );

  const [chatMessages, setChatMessages] = useState([
    {
      id: "ex-1",
      role: "assistant",
      content:
        "👋 **EchoGPT Sidebar Ready**.\nHighlight any paragraph or code on this webpage, then click a quick action or ask a custom question below.",
    },
  ]);

  const handleSendPrompt = (customText) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: "u-" + Date.now(),
      role: "user",
      content: textToSend.trim(),
    };

    const aiResponse = {
      id: "ai-" + Date.now(),
      role: "assistant",
      content: `**${selectedModel.name} Analysis:**\n\nBased on your selected webpage context, here is the synthesized answer:\n\n> *${textToSend.slice(0, 80)}...*\n\n1. **Core Concept**: Efficient Rust-based architecture dramatically reduces build times.\n2. **Actionable Takeaway**: Enable persistent caching for production deployment pipelines.`,
    };

    setChatMessages((prev) => [...prev, userMessage, aiResponse]);
    setInputPrompt("");
  };

  const handleQuickAction = (actionName) => {
    let prompt = "";
    if (actionName === "Summarize") {
      prompt = `Summarize this text in 3 bullet points: "${highlightedSnippet}"`;
    } else if (actionName === "Explain Code") {
      prompt = `Explain the following code and highlight potential bottlenecks: "${highlightedSnippet}"`;
    } else if (actionName === "Translate") {
      prompt = `Translate the following text to Spanish and French: "${highlightedSnippet}"`;
    } else if (actionName === "Polish") {
      prompt = `Polish and improve the grammar and professional tone of: "${highlightedSnippet}"`;
    }
    setActiveTab("Assistant");
    handleSendPrompt(prompt);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#07070b] text-slate-100 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="border-b border-white/10 bg-[#0d0d15]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Landing Page</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/app"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg glass-pill text-purple-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Open Web App</span>
              <ExternalLink size={13} />
            </Link>

            <a
              href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500/40 text-white font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1.5 text-xs sm:text-sm shadow-md shadow-purple-600/30 hover:opacity-95 transition-all"
            >
              <span>Chrome Web Store</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Header Title Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-xs font-semibold text-purple-300 mb-3">
            <Sparkles size={13} className="text-purple-400" />
            <span>EchoGPT Chrome Extension 2.0 Redesign</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frontier AI docked into <span className="gradient-text">every browser tab</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Reimagined browser companion: highlight any paragraph or code snippet on the web to trigger instant multi-model synthesis, explanations, and translations without leaving your page.
          </p>

          {/* Highlights row */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-amber-400 fill-amber-400" /> 4.9/5 Chrome Store Rating
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-green-400" /> Zero tracking or third-party cookies
            </span>
            <span className="flex items-center gap-1.5">
              <Layers size={14} className="text-purple-400" /> Works across all Chromium browsers
            </span>
          </div>
        </div>

        {/* INTERACTIVE BROWSER + EXTENSION SIMULATOR */}
        <div className="w-full glass-card bg-[#0b0b14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/40">
          {/* Simulated Chrome Browser Chrome (Tab Bar + URL Bar) */}
          <div className="bg-[#12121e] border-b border-white/10 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Window controls & active tab */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="bg-[#1a1a2c] text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="truncate max-w-[200px]">Next.js 16 Documentation — Performance Guide</span>
              </div>
            </div>

            {/* URL Search bar */}
            <div className="w-full sm:flex-1 max-w-lg bg-[#0a0a10] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span className="truncate">https://nextjs.org/docs/app/building-your-application/optimizing</span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                SECURE
              </span>
            </div>

            {/* Extension Active Badge */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <span className="text-xs text-purple-300 font-semibold bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                <Zap size={13} className="text-purple-400" /> EchoGPT Sidebar Active
              </span>
            </div>
          </div>

          {/* Browser Workspace: Left Webpage + Right Extension Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* LEFT: Simulated Webpage Content (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#08080f] border-b lg:border-b-0 lg:border-r border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-purple-400 font-semibold">
                  DOCS / OPTIMIZING / PERFORMANCE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  High-Performance Rendering Architecture
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Published March 2026 · 6 min read · App Router Edition
                </p>
              </div>

              {/* Sample simulated webpage text with highlight demo */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Modern frontend ecosystems require extreme discipline around client-side script delivery. Server Components allow developers to execute data access operations near the database while streaming serialized payloads to the client.
                </p>

                {/* Highlighted text block */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/40 text-purple-200 relative">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1 flex items-center gap-1">
                    <MousePointerClick size={12} />
                    <span>Highlighted Text (Context Sent to EchoGPT)</span>
                  </div>
                  <p className="font-medium text-white italic">
                    &ldquo;{highlightedSnippet}&rdquo;
                  </p>
                </div>

                <p>
                  By utilizing incremental static regeneration alongside dynamic route caching, network round-trips are eliminated. Benchmarks indicate measurable gains in Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP).
                </p>

                {/* Quick Action Trigger Buttons on Webpage */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-400 mb-2">
                    Click to test instant EchoGPT Sidebar Actions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleQuickAction("Summarize")}
                      className="px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 flex items-center gap-1.5 transition-colors"
                    >
                      <FileText size={13} />
                      <span>Summarize Selection</span>
                    </button>
                    <button
                      onClick={() => handleQuickAction("Explain Code")}
                      className="px-3 py-1.5 rounded-lg bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold hover:bg-green-600/30 flex items-center gap-1.5 transition-colors"
                    >
                      <Code2 size={13} />
                      <span>Explain in Detail</span>
                    </button>
                    <button
                      onClick={() => handleQuickAction("Translate")}
                      className="px-3 py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs font-semibold hover:bg-purple-600/30 flex items-center gap-1.5 transition-colors"
                    >
                      <Languages size={13} />
                      <span>Translate</span>
                    </button>
                    <button
                      onClick={() => handleQuickAction("Polish")}
                      className="px-3 py-1.5 rounded-lg bg-amber-600/20 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-600/30 flex items-center gap-1.5 transition-colors"
                    >
                      <Wand2 size={13} />
                      <span>Improve Writing</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Docked EchoGPT Chrome Sidebar (5 Cols) */}
            <div className="lg:col-span-5 bg-[#0e0e18] flex flex-col justify-between">
              <div>
                {/* Sidebar Header */}
                <div className="p-3.5 border-b border-white/10 bg-[#131322] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg animated-gradient flex items-center justify-center">
                       <Earth size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-white">
                      EchoGPT Sidebar
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <button className="p-1 hover:text-white transition-colors" title="Pin Sidebar">
                      <Pin size={13} />
                    </button>
                    <button className="p-1 hover:text-white transition-colors" title="Expand View">
                      <Maximize2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Model Selector Bar */}
                <div className="p-3 border-b border-white/10 bg-[#0a0a12] relative">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                    Select Active Model
                  </div>
                  <button
                    onClick={() => setModelDropdown(!modelDropdown)}
                    className="w-full flex items-center justify-between p-2 rounded-xl bg-[#141424] border border-white/10 text-xs font-semibold text-white hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded-md bg-gradient-to-br ${selectedModel.color} flex items-center justify-center text-white text-[10px] font-bold`}
                      >
                        {selectedModel.name.charAt(0)}
                      </div>
                      <span>{selectedModel.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        ({selectedModel.provider})
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>

                  {modelDropdown && (
                    <div className="absolute top-full left-3 right-3 mt-1 bg-[#161628] border border-white/15 rounded-xl shadow-2xl p-1.5 z-50 space-y-1">
                      {EXTENSION_MODELS.map((m) => (
                        <button
                          key={m.name}
                          onClick={() => {
                            setSelectedModel(m);
                            setModelDropdown(false);
                          }}
                          className={`w-full text-left p-2 rounded-lg text-xs flex items-center gap-2 transition-colors ${
                            selectedModel.name === m.name
                              ? "bg-purple-600 text-white font-bold"
                              : "text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-[9px] font-bold`}
                          >
                            {m.name.charAt(0)}
                          </div>
                          <span>{m.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10 px-3 bg-[#0d0d18] gap-1 pt-1">
                  {EXTENSION_TABS.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-xs py-2 px-3 font-semibold transition-all border-b-2 ${
                        activeTab === tab
                          ? "border-purple-500 text-purple-300"
                          : "border-transparent text-slate-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* TAB 1: Assistant Chat */}
                {activeTab === "Assistant" && (
                  <div className="p-3.5 space-y-3 max-h-[300px] overflow-y-auto">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-3 rounded-xl text-xs leading-relaxed space-y-1 ${
                          msg.role === "user"
                            ? "bg-purple-600/30 border border-purple-500/30 text-white ml-6 rounded-tr-sm"
                            : "bg-[#141424] border border-white/10 text-slate-200 mr-6 rounded-tl-sm"
                        }`}
                      >
                        <div className="text-[10px] text-purple-300 font-bold uppercase">
                          {msg.role === "user" ? "You" : selectedModel.name}
                        </div>
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 2: Quick Actions */}
                {activeTab === "Quick Actions" && (
                  <div className="p-4 space-y-2.5">
                    <div className="text-xs font-bold text-white mb-2">
                      One-Click Page Operations
                    </div>
                    {[
                      {
                        title: "Executive Page Summary",
                        desc: "Extract key takeaways, metrics, and conclusions.",
                        action: "Summarize",
                      },
                      {
                        title: "Explain Highlighted Code",
                        desc: "Breakdown logic, algorithms, and complexity.",
                        action: "Explain Code",
                      },
                      {
                        title: "Multi-Language Translation",
                        desc: "Translate page text into 100+ native languages.",
                        action: "Translate",
                      },
                      {
                        title: "Professional Tone Polish",
                        desc: "Enhance grammar, clarity, and persuasive tone.",
                        action: "Polish",
                      },
                    ].map((item) => (
                      <button
                        key={item.title}
                        onClick={() => handleQuickAction(item.action)}
                        className="w-full text-left p-3 rounded-xl bg-[#141424] border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all"
                      >
                        <div className="font-bold text-xs text-white">{item.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                )}

                {/* TAB 3: History */}
                {activeTab === "History" && (
                  <div className="p-4 space-y-2">
                    <div className="text-xs font-bold text-white mb-2">Recent Page Snippets</div>
                    {[
                      { title: "React 19 Actions Breakdown", time: "10 mins ago" },
                      { title: "GitHub PR #412 Code Review", time: "2 hours ago" },
                      { title: "Stripe Webhook Signature Verification", time: "Yesterday" },
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-[#141424] border border-white/5 text-xs text-slate-300"
                      >
                        <div className="font-medium text-white truncate">{h.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{h.time}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* TAB 4: Settings */}
                {activeTab === "Settings" && (
                  <div className="p-4 space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Default Model</span>
                      <span className="text-purple-300 font-semibold">{selectedModel.name}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Shortcut</span>
                      <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-[11px]">Alt + E</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Sidebar Dock</span>
                      <span className="text-slate-400">Right Side</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Input Area */}
              <div className="p-3 border-t border-white/10 bg-[#121220]">
                <div className="flex items-center gap-2 bg-[#0c0c14] border border-white/15 focus-within:border-purple-500 rounded-xl px-3 py-2">
                  <input
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendPrompt()}
                    placeholder={`Ask ${selectedModel.name} about this page...`}
                    className="flex-1 bg-transparent text-xs text-slate-200 placeholder-slate-500 outline-none"
                  />
                  <button
                    onClick={() => handleSendPrompt()}
                    className="p-1.5 rounded-lg bg-sky-500/40 text-white hover:opacity-90 shrink-0"
                    title="Send Prompt"
                  >
                    <Send size={12} />
                  </button>
                </div>
                <div className="text-[10px] text-slate-500 text-center mt-1.5">
                  Press Enter to send · Auto-reads highlighted text
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="glass-card bg-[#10101c] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <MousePointerClick size={20} />
            </div>
            <h3 className="font-bold text-base text-white mb-2">Contextual Highlighting</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No more copying and pasting into external tabs. Select text on any web page and EchoGPT immediately captures the surrounding DOM context.
            </p>
          </div>

          <div className="glass-card bg-[#10101c] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Layers size={20} />
            </div>
            <h3 className="font-bold text-base text-white mb-2">Instant Model Switching</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Switch from GPT-4o for code reviews to Claude 3.5 for email drafting in a split second right inside your browser side panel.
            </p>
          </div>

          <div className="glass-card bg-[#10101c] border border-white/10 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-base text-white mb-2">Zero Data Leaks</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Built with Chromium Manifest V3 and isolated execution sandbox. Passwords, session cookies, and private data are never read.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
