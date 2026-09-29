"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is EchoGPT really free to use without a credit card?",
    a: "Yes! EchoGPT provides a free tier with 50 prompt queries per day across multiple frontier models including GPT-3.5, Llama 3.3, and Mistral. No credit card or billing details are ever required to start chatting.",
  },
  {
    q: "How do I switch between different AI models?",
    a: "You can switch models instantly via the dropdown selector at the top of the chat interface or directly inside the Chrome extension. You can even toggle between models in the middle of an active conversation.",
  },
  {
    q: "How does the EchoGPT Chrome Extension work?",
    a: "The extension opens a responsive sidebar on any browser tab. You can highlight any text, article, or code snippet on the web and click a quick action (Summarize, Explain Code, Translate, or Improve) without leaving your page.",
  },
  {
    q: "How does EchoGPT protect my private data?",
    a: "All network traffic is encrypted using TLS 1.3 in transit and AES-256 at rest. Conversations are strictly confidential and are never sold to data brokers or used to train third-party models.",
  },
  {
    q: "Can I test multiple models side-by-side?",
    a: "Yes! EchoGPT includes a dual-split view allowing you to send the exact same query to two different models (e.g. GPT-4o vs Claude 3.5 Sonnet) simultaneously to compare output quality.",
  },
  {
    q: "Can I export my conversation logs?",
    a: "Yes, you can export full conversations at any time in standard Markdown (.md), clean printable PDF, or raw JSON for archiving and documentation.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card bg-[#11111c] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 hover:bg-white/5 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-white text-sm sm:text-base leading-snug">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-purple-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 pt-1">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Got questions? We have{" "}
            <span className="gradient-text">answers</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Everything you need to know about getting started with the EchoGPT ecosystem.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3.5">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
