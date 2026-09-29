"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import {
  Zap,
  Send,
  Plus,
  Settings,
  History,
  ChevronDown,
  Copy,
  Trash2,
  Menu,
  X,
  Bot,
  User,
  ArrowLeft,
  Sparkles,
  Download,
  Share2,
  ThumbsUp,
  RotateCcw,
  Check,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const AI_MODELS = [
  {
    id: "gpt4o",
    name: "GPT-4o",
    provider: "OpenAI",
    gradient: "from-emerald-500 to-teal-600",
    badge: "Smartest",
    description: "Complex logic, code generation & multi-step analysis",
  },
  {
    id: "claude35",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    gradient: "from-orange-500 to-amber-600",
    badge: "Best Writing",
    description: "Natural dialogue, deep synthesis & nuanced tone",
  },
  {
    id: "gemini",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    gradient: "from-blue-500 to-indigo-600",
    badge: "1M Context",
    description: "Multimodal ingestion, massive context & doc research",
  },
  {
    id: "llama3",
    name: "Llama 3.3 (70B)",
    provider: "Meta",
    gradient: "from-purple-500 to-violet-600",
    badge: "Open Source",
    description: "Blazing fast open model with zero restrictions",
  },
  {
    id: "mistral",
    name: "Mistral Large 2",
    provider: "Mistral AI",
    gradient: "from-cyan-500 to-sky-600",
    badge: "Multilingual",
    description: "European high-precision model for global languages",
  },
];

const INITIAL_CONVERSATIONS = [
  {
    id: "c1",
    title: "Full-Stack Next.js 16 Architecture",
    model: "GPT-4o",
    date: "Today",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "What is the recommended directory structure for a scalable Next.js 16 app with Tailwind CSS?",
        time: "10:14 AM",
      },
      {
        id: "m2",
        role: "assistant",
        model: "GPT-4o",
        time: "10:14 AM",
        content:
          "In Next.js 16 with the App Router and Tailwind CSS, the recommended production structure is:\n\n```\napp/\n├── (marketing)/       # Landing page routes\n├── (workspace)/       # Protected app routes\n├── api/               # Serverless route handlers\n├── components/        # Shared atomic UI primitives\n│   ├── ui/            # Buttons, inputs, modals\n│   └── chat/          # Chat messages, sidebars\n├── lib/               # Utility functions & helpers\n├── hooks/             # Custom React hooks\n└── globals.css        # Tailwind theme imports\n```\n\nKey advantages of this setup:\n1. Route groups `(group)` keep URL paths clean.\n2. Co-locating components reduces prop drilling.\n3. Server components remain the default for optimal performance.",
      },
    ],
  },
  {
    id: "c2",
    title: "Copywriting for SaaS Landing Page",
    model: "Claude 3.5 Sonnet",
    date: "Yesterday",
    messages: [
      {
        id: "m3",
        role: "user",
        content: "Write 3 punchy value propositions for our multi-AI chat platform.",
        time: "3:42 PM",
      },
      {
        id: "m4",
        role: "assistant",
        model: "Claude 3.5 Sonnet",
        time: "3:42 PM",
        content:
          "Here are 3 distinct, high-converting value propositions tailored to developers and power users:\n\n1. **The Single Subscription Solution:** Access GPT-4o, Claude 3.5, and Gemini 1.5 in one unified tab. Save $70/month without compromising on capability.\n2. **Zero-Latency Switching:** Why stick with one AI when you can test every prompt across multiple frontier models with a single click?\n3. **Intelligence Where You Browse:** With our Chrome sidebar, bring instant multi-model assistance to every article, pull request, and document on the web.",
      },
    ],
  },
  {
    id: "c3",
    title: "SQL Query Performance Tuning",
    model: "GPT-4o",
    date: "2 days ago",
    messages: [
      {
        id: "m5",
        role: "user",
        content: "How do I optimize a slow PostgreSQL JOIN query on 5 million rows?",
        time: "11:20 AM",
      },
      {
        id: "m6",
        role: "assistant",
        model: "GPT-4o",
        time: "11:21 AM",
        content:
          "To optimize PostgreSQL JOINs on large tables:\n\n1. Run `EXPLAIN (ANALYZE, BUFFERS)` to inspect query plan.\n2. Ensure foreign key columns have indexes on both tables.\n3. Increase `work_mem` temporarily for hash joins.\n4. Consider partitioned tables if data is time-series based.",
      },
    ],
  },
];

const PROMPT_SUGGESTIONS = [
  "Explain quantum computing simply",
  "Write an optimized React hook",
  "Draft a professional cold email",
  "Summarize key insights from text",
  "Debug this TypeScript interface",
];

export default function EchoGPTWebApp() {
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeConvId, setActiveConvId] = useState("c1");
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
  const [modelDropdown, setModelDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const activeConversation =
    conversations.find((c) => c.id === activeConvId) || conversations[0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const modelParam = params.get("model");
      if (modelParam) {
        const found = AI_MODELS.find(
          (m) => m.id === modelParam.toLowerCase() || m.name.toLowerCase().includes(modelParam.toLowerCase())
        );
        if (found) setSelectedModel(found);
      }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConversation?.messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newMsgId = "msg-" + Date.now();
    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg = {
      id: newMsgId,
      role: "user",
      content: userText,
      time: timeStr,
    };

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConvId) {
          return {
            ...c,
            messages: [...c.messages, userMsg],
            title: c.messages.length === 0 ? userText.slice(0, 35) + "..." : c.title,
          };
        }
        return c;
      })
    );

    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = {
        id: "ai-" + Date.now(),
        role: "assistant",
        model: selectedModel.name,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        content: `I've processed your query using **${selectedModel.name}**.\n\nHere is a detailed, structured solution for: "${userText}"\n\n- **Model**: ${selectedModel.name} (${selectedModel.provider})\n- **Latency**: 240ms\n- **Analysis**: EchoGPT's multi-model architecture routed your prompt through our high-speed edge proxy with zero rate-limit friction.`,
      };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id === activeConvId) {
            return {
              ...c,
              messages: [...c.messages, aiReply],
            };
          }
          return c;
        })
      );
      setIsTyping(false);
    }, 1100);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCreateNewChat = () => {
    const newId = "c-" + Date.now();
    const newChat = {
      id: newId,
      title: "New Conversation",
      model: selectedModel.name,
      date: "Just now",
      messages: [],
    };
    setConversations([newChat, ...conversations]);
    setActiveConvId(newId);
  };

  const handleDeleteChat = (id, e) => {
    e.stopPropagation();
    const remaining = conversations.filter((c) => c.id !== id);
    setConversations(remaining);
    if (activeConvId === id && remaining.length > 0) {
      setActiveConvId(remaining[0].id);
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredHistory = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#07070b] text-slate-100 antialiased font-sans">
      {/* LEFT SIDEBAR */}
      <aside
        className={`${
          sidebarOpen ? "w-72" : "w-0"
        } transition-all duration-300 ease-in-out bg-[#0e0e17] border-r border-white/10 flex flex-col shrink-0 overflow-hidden relative z-30`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl animated-gradient flex items-center justify-center shadow-md">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">
              Echo<span className="gradient-text font-black">GPT</span>
            </span>
          </Link>

          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md hover:bg-white/5 flex items-center gap-1 transition-colors"
            title="Return to Home Landing Page"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <button
            onClick={handleCreateNewChat}
            className="w-full py-2.5 px-3.5 rounded-xl animated-gradient text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-600/30 hover:opacity-95 transition-all"
          >
            <Plus size={16} />
            <span>Start New Chat</span>
          </button>
        </div>

        {/* Search Conversations */}
        <div className="px-3 pb-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141422] border border-white/10 text-xs">
            <Search size={14} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search chat history..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-transparent text-slate-200 placeholder-slate-500 outline-none text-xs"
            />
          </div>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1">
            Recent Conversations
          </div>

          {filteredHistory.length === 0 ? (
            <div className="text-xs text-slate-500 text-center py-6">
              No conversations found
            </div>
          ) : (
            filteredHistory.map((conv) => {
              const isActive = conv.id === activeConvId;
              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  className={`w-full group px-3 py-2.5 rounded-xl text-left cursor-pointer transition-all flex items-center justify-between gap-2 ${
                    isActive
                      ? "bg-purple-600/20 border border-purple-500/40 text-white"
                      : "hover:bg-white/5 text-slate-300"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium truncate">{conv.title}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span>{conv.model}</span>
                      <span>•</span>
                      <span>{conv.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleDeleteChat(conv.id, e)}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-400 text-slate-500 transition-opacity"
                    title="Delete conversation"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-white/10 space-y-2 bg-[#0a0a10]">
          <Link
            href="/extension"
            className="w-full p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-between text-xs text-purple-200 hover:bg-purple-900/40 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400" />
              <span>Extension Concept</span>
            </div>
            <span className="text-[10px] bg-purple-500/30 px-1.5 py-0.5 rounded font-bold">
              NEW
            </span>
          </Link>
        </div>
      </aside>

      {/* RIGHT MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden bg-[#07070b]">
        {/* Top Navbar */}
        <header className="h-16 px-4 sm:px-6 border-b border-white/10 bg-[#0c0c14]/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0 z-20">
          <div className="flex items-center gap-3">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Toggle sidebar"
            >
              {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Model Selector Button */}
            <div className="relative">
              <button
                onClick={() => setModelDropdown(!modelDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-white/15 hover:border-purple-500/40 transition-all text-xs sm:text-sm font-semibold text-white shadow-sm"
              >
                <div
                  className={`w-6 h-6 rounded-lg bg-gradient-to-br ${selectedModel.gradient} flex items-center justify-center text-white text-xs font-black shadow-sm`}
                >
                  {selectedModel.name.charAt(0)}
                </div>
                <span>{selectedModel.name}</span>
                <span className="text-[10px] text-purple-300 bg-purple-500/20 px-1.5 py-0.5 rounded border border-purple-500/30 hidden sm:inline-block">
                  {selectedModel.badge}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform ${
                    modelDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {modelDropdown && (
                <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 glass-card bg-[#12121e] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
                    Select Frontier AI Model
                  </div>
                  {AI_MODELS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedModel(m);
                        setModelDropdown(false);
                      }}
                      className={`w-full p-2.5 rounded-xl flex items-start gap-3 text-left transition-colors ${
                        selectedModel.id === m.id
                          ? "bg-purple-600/25 border border-purple-500/40 text-white"
                          : "hover:bg-white/5 text-slate-300"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5 shadow-sm`}
                      >
                        {m.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">{m.name}</span>
                          <span className="text-[10px] text-slate-400">{m.provider}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug mt-0.5">
                          {m.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => {
                if (activeConversation) {
                  const plain = activeConversation.messages
                    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
                    .join("\n\n");
                  const blob = new Blob([plain], { type: "text/markdown" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${activeConversation.title}.md`;
                  a.click();
                }
              }}
              className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 flex items-center gap-1.5 transition-colors"
              title="Export Conversation as Markdown"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Export</span>
            </button>

            <Link
              href="/pricing"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl glass-pill text-purple-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:inline-block"
            >
              Pricing Plans
            </Link>

            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-xl glass-pill text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </header>

        {/* Message Thread Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 w-full">
          <div className="max-w-4xl mx-auto w-full space-y-6">
            {/* If conversation is empty */}
            {(!activeConversation || activeConversation.messages.length === 0) && (
              <div className="py-12 sm:py-20 text-center max-w-xl mx-auto space-y-6">
                <div className="w-14 h-14 rounded-2xl animated-gradient flex items-center justify-center mx-auto shadow-xl shadow-purple-600/30">
                  <Bot size={28} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    What would you like to solve today?
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2">
                    Active engine:{" "}
                    <span className="text-purple-300 font-semibold">
                      {selectedModel.name}
                    </span>{" "}
                    ({selectedModel.provider})
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left pt-2">
                  {PROMPT_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setInputValue(suggestion)}
                      className="p-3 rounded-xl glass-card hover:bg-white/10 text-xs text-slate-200 transition-colors text-left flex items-center justify-between group"
                    >
                      <span>{suggestion}</span>
                      <Sparkles
                        size={13}
                        className="text-purple-400 opacity-60 group-hover:opacity-100 shrink-0"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation Messages */}
            {activeConversation?.messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 w-full message-enter ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Left avatar for AI */}
                  {!isUser && (
                    <div
                      className={`w-9 h-9 rounded-xl bg-gradient-to-br ${selectedModel.gradient} flex items-center justify-center text-white shrink-0 shadow-md mt-1`}
                    >
                      <Bot size={18} />
                    </div>
                  )}

                  {/* Message bubble body */}
                  <div
                    className={`max-w-[85%] sm:max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed space-y-2 ${
                      isUser
                        ? "bg-purple-600 text-white rounded-tr-sm shadow-md shadow-purple-950/40"
                        : "glass-card bg-[#11111c] border border-white/10 text-slate-200 rounded-tl-sm shadow-lg shadow-black/30"
                    }`}
                  >
                    {/* Header meta */}
                    <div className="flex items-center justify-between gap-4 text-[11px] pb-1 border-b border-white/10">
                      <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                        {isUser ? "You" : msg.model || selectedModel.name}
                      </span>
                      <span className="text-slate-400 text-[10px]">{msg.time}</span>
                    </div>

                    {/* Message content */}
                    <div className="whitespace-pre-wrap font-sans text-slate-100">
                      {msg.content}
                    </div>

                    {/* AI action bar */}
                    {!isUser && (
                      <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleCopy(msg.id, msg.content)}
                            className="hover:text-white flex items-center gap-1 transition-colors"
                          >
                            {copiedId === msg.id ? (
                              <Check size={13} className="text-green-400" />
                            ) : (
                              <Copy size={13} />
                            )}
                            <span>{copiedId === msg.id ? "Copied" : "Copy"}</span>
                          </button>
                          <button
                            onClick={() => {
                              setInputValue(
                                activeConversation.messages
                                  .filter((m) => m.role === "user")
                                  .slice(-1)[0]?.content || ""
                              );
                            }}
                            className="hover:text-white flex items-center gap-1 transition-colors"
                          >
                            <RotateCcw size={13} />
                            <span>Retry</span>
                          </button>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {selectedModel.provider}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right avatar for User */}
                  {isUser && (
                    <div className="w-9 h-9 rounded-xl bg-purple-700 border border-purple-500/40 flex items-center justify-center text-white shrink-0 shadow-md mt-1">
                      <User size={18} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-3 justify-start message-enter">
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${selectedModel.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}
                >
                  <Bot size={18} />
                </div>
                <div className="glass-card bg-[#11111c] border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400 typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 typing-dot" />
                  <div className="w-2 h-2 rounded-full bg-purple-400 typing-dot" />
                  <span className="text-xs text-slate-400 ml-2">
                    {selectedModel.name} is writing...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* BOTTOM INPUT DOCK */}
        <div className="p-4 sm:p-5 shrink-0 bg-[#0c0c14]/90 backdrop-blur-md border-t border-white/10">
          <div className="max-w-4xl mx-auto w-full space-y-2">
            {/* Input Bar */}
            <div className="glass-card bg-[#131322] border border-white/15 focus-within:border-purple-500/60 rounded-2xl p-3 transition-all shadow-xl shadow-black/40">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Ask ${selectedModel.name} anything... (Enter to send, Shift+Enter for new line)`}
                rows={2}
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-xs sm:text-sm resize-none outline-none leading-relaxed"
              />

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-medium text-purple-400 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Zap size={11} /> {selectedModel.name}
                  </span>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    {inputValue.length} characters
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className={`px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 transition-all ${
                      inputValue.trim() && !isTyping
                        ? "animated-gradient shadow-md shadow-purple-600/30 hover:opacity-95 cursor-pointer"
                        : "bg-white/10 opacity-40 cursor-not-allowed"
                    }`}
                  >
                    <span>Send</span>
                    <Send size={13} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 text-[11px] text-slate-500">
              <span>Shift+Enter adds a new line</span>
              <span>EchoGPT guarantees end-to-end encryption</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
