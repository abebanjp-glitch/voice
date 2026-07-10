import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const handleNavigate = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Offset scroll calculation for fixed header height
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#16181D] font-sans selection:bg-[#2F6BFF]/10 selection:text-[#2F6BFF] antialiased">
      {/* Header (Sticky / Translucent) */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Pain Points ("こんなお悩みありませんか？") */}
        <PainPoints onNavigate={handleNavigate} />

        {/* 3. Services ("できること") */}
        <Services onNavigate={handleNavigate} />

        {/* 4. Showcase ("実績" - includes 宮町商店街 and metrics/horizontal-snap-carousel) */}
        <Showcase />

        {/* 5. Why VOICE ("選ばれる理由") */}
        <WhyUs />

        {/* 6. Pricing ("料金プラン" - Web, Video, SNS cards) */}
        <Pricing onNavigate={handleNavigate} />

        {/* 7. Process ("ご依頼の流れ" - Timeline) */}
        <Process />

        {/* 8. Team ("私たちについて" - 3 Members profile) */}
        <Team />

        {/* 9. Contact ("お問い合わせ" - LINE & Form fields) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
