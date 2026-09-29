import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EchoGPT — All AI Models In One Unified Platform",
  description:
    "Chat with GPT-4o, Claude 3.5, Gemini, Llama 3, and 10+ models from one lightning-fast interface. Free web app and Chrome extension.",
  keywords: "EchoGPT, AI chat, GPT-4o, Claude 3.5, Gemini, Chrome extension, multi-AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#07070b] text-slate-100 antialiased min-h-screen w-full overflow-x-hidden text-left m-0 p-0 selection:bg-purple-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
