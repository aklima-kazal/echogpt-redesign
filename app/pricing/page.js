import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import WhyChooseSection from "../components/WhyChooseSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Pricing Plans — EchoGPT",
  description:
    "Explore EchoGPT Free, Pro, and Team plans. Access GPT-4o, Claude 3.5, and Gemini with simple, transparent pricing.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#07070b] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-12">
        <PricingSection />
        <WhyChooseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
