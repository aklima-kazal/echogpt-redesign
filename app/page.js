import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ModelsSection from "./components/ModelsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#07070b] text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <ModelsSection />
        <WhyChooseSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
