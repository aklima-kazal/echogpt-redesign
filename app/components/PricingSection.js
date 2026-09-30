"use client";
import { Check, X, Zap, ArrowRight, ShieldCheck, CreditCard, Users, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Starter Free",
    price: "$0",
    period: "forever free",
    desc: "Essential multi-AI access for everyday learning and exploration.",
    cta: "Start Free Now",
    popular: false,
    actionType: "link",
    href: "/app",
    features: [
      { text: "GPT-3.5, Llama 3.3, Mistral 7B", included: true },
      { text: "50 prompt requests / day", included: true },
      { text: "7-day searchable conversation history", included: true },
      { text: "Full Chrome extension access", included: true },
      { text: "Standard response speed", included: true },
      { text: "GPT-4o, Claude 3.5 Sonnet, Gemini 1.5", included: false },
      { text: "Side-by-side model comparison", included: false },
      { text: "Export chat archives (PDF/Markdown)", included: false },
    ],
  },
  {
    id: "pro",
    name: "EchoGPT Pro",
    price: "$9",
    period: "per month",
    desc: "Unrestricted frontier AI power for professionals, creators & devs.",
    cta: "Upgrade to Pro",
    popular: true,
    actionType: "modal",
    modalTarget: "pro",
    features: [
      { text: "All models: GPT-4o, Claude 3.5, Gemini 1.5", included: true },
      { text: "Unlimited daily prompt generation", included: true },
      { text: "Permanent unlimited conversation history", included: true },
      { text: "Full Chrome extension & sidebar access", included: true },
      { text: "Priority low-latency server queue", included: true },
      { text: "Side-by-side dual model comparison", included: true },
      { text: "Export chat archives (PDF, MD, JSON)", included: true },
      { text: "Early access to newly released AI models", included: true },
    ],
  },
  {
    id: "team",
    name: "Team & Business",
    price: "$29",
    period: "per user / month",
    desc: "Collaborative workspace for startups, teams, and high-volume workloads.",
    cta: "Get Team Workspace",
    popular: false,
    actionType: "modal",
    modalTarget: "team",
    features: [
      { text: "Everything in Pro included", included: true },
      { text: "Centralized workspace billing & seats", included: true },
      { text: "Shared team prompt libraries", included: true },
      { text: "Admin analytics & usage tracking", included: true },
      { text: "Dedicated API keys & endpoint access", included: true },
      { text: "Enterprise 99.9% uptime SLA", included: true },
      { text: "Custom system instructions & guardrails", included: true },
      { text: "Priority 24/7 technical support", included: true },
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [activeModal, setActiveModal] = useState(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [teamSeats, setTeamSeats] = useState(5);

  const handleOpenModal = (target) => {
    setActiveModal(target);
    setCheckoutSuccess(false);
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setActiveModal(null);
      setCheckoutSuccess(false);
    }, 2200);
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass-pill">
            Fair & Transparent
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight leading-snug">
            Simple pricing with{" "}
            <span className="gradient-text">maximum value</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Start completely free. Upgrade whenever you need unlimited access to top frontier models.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-[#13131f] border border-white/10 mt-6">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-lg transition-all ${
                billingCycle === "monthly"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const displayPrice =
              billingCycle === "annual" && plan.price !== "$0"
                ? plan.price === "$9"
                  ? "$7.20"
                  : "$23.20"
                : plan.price;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "glass-card bg-[#141424] border-2 border-purple-500 shadow-xl shadow-purple-950/40 relative"
                    : "glass-card bg-[#10101a] border border-white/10"
                }`}
              >
                <div>
                  {/* Top Badge */}
                  {plan.popular ? (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold animated-gradient text-white mb-4 shadow-sm">
                      <Zap size={13} />
                      <span>MOST POPULAR CHOICE</span>
                    </div>
                  ) : (
                    <div className="h-6 mb-4" />
                  )}

                  <h3 className="text-xl font-bold text-white mb-1.5">{plan.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {displayPrice}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{plan.period}</span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        {feature.included ? (
                          <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <X size={16} className="text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-slate-200" : "text-slate-500 line-through"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action Button */}
                {plan.actionType === "link" ? (
                  <Link
                    href={plan.href}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 glass-pill text-white hover:bg-white/15 border border-white/20"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={14} />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleOpenModal(plan.modalTarget)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? "bg-sky-500/40 text-white shadow-lg shadow-purple-600/30 hover:opacity-95"
                        : "glass-pill text-white hover:bg-white/15 border border-white/20"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* PRO CHECKOUT MODAL */}
      {activeModal === "pro" && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card bg-[#121220] border border-purple-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X size={18} />
            </button>

            {checkoutSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle size={48} className="text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Upgrade Activated!</h3>
                <p className="text-slate-300 text-sm">
                  Welcome to EchoGPT Pro. All frontier models and unlimited queries are now unlocked.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl animated-gradient flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Upgrade to EchoGPT Pro</h3>
                    <p className="text-xs text-slate-400">
                      {billingCycle === "annual" ? "$7.20/month (Billed annually)" : "$9.00/month"}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1.5 text-xs text-slate-200">
                  <div className="font-semibold text-purple-300 flex items-center gap-1.5">
                    <Sparkles size={13} /> Included with Pro:
                  </div>
                  <ul className="space-y-1 text-slate-300">
                    <li>• Unlimited GPT-4o, Claude 3.5 Sonnet & Gemini 1.5</li>
                    <li>• Side-by-side split comparison mode</li>
                    <li>• Permanent conversation history archive</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Account Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-[#0a0a10] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Payment Details (Demo Simulator)
                    </label>
                    <div className="flex items-center gap-2 bg-[#0a0a10] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-300">
                      <CreditCard size={15} className="text-slate-400 shrink-0" />
                      <input
                        type="text"
                        defaultValue="4242 •••• •••• 4242"
                        className="w-full bg-transparent outline-none text-xs"
                      />
                      <span className="text-[10px] text-slate-500">12/28</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full animated-gradient text-white font-bold py-3 rounded-xl text-xs sm:text-sm hover:opacity-95 transition-opacity shadow-md shadow-purple-600/30 flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck size={16} />
                  <span>Confirm Subscription</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TEAM WORKSPACE MODAL */}
      {activeModal === "team" && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card bg-[#121220] border border-white/15 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X size={18} />
            </button>

            {checkoutSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle size={48} className="text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Team Request Received!</h3>
                <p className="text-slate-300 text-sm">
                  Our enterprise onboarding team will reach out with your team license credentials shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300">
                    <Users size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">EchoGPT Team Workspace</h3>
                    <p className="text-xs text-slate-400">$29 per seat / month</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Corporation"
                    className="w-full bg-[#0a0a10] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="team-admin@acme.com"
                    className="w-full bg-[#0a0a10] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Number of Team Seats: <span className="text-purple-300 font-bold">{teamSeats}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    value={teamSeats}
                    onChange={(e) => setTeamSeats(e.target.value)}
                    className="w-full accent-purple-500"
                  />
                </div>

                <div className="text-xs text-slate-400 flex justify-between py-2 border-t border-white/10">
                  <span>Estimated Total:</span>
                  <span className="text-white font-bold text-sm">${teamSeats * 29}/mo</span>
                </div>

                <button
                  type="submit"
                  className="w-full animated-gradient text-white font-bold py-3 rounded-xl text-xs sm:text-sm hover:opacity-95 transition-opacity shadow-md shadow-purple-600/30 flex items-center justify-center gap-1.5"
                >
                  <Users size={16} />
                  <span>Request Team Onboarding</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
