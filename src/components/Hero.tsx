import React from "react";
import { MessageCircle, Calendar, ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-[#FBFBFD] to-[#FBFBFD] pt-10 pb-16 sm:py-24">
      {/* Background blobs for warm & modern feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-50/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2F6BFF] text-xs font-bold tracking-wider uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
              地元密着・中小企業のための発信パートナー
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-sans font-bold tracking-tight text-gray-900 leading-[1.15]"
            >
              もっと、
              <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-[#2F6BFF] to-[#5B9DFF] bg-clip-text text-transparent">知られて</span>いい。
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-xl"
            >
              SNS運用も、動画も、ホームページも。「何から始めればいいか分からない」——そんな地元のお店・会社の発信を、はじめの一歩から運用まで、私たちがまるごとサポートします。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => onNavigate("contact")}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-[#2F6BFF] text-white font-bold rounded-2xl shadow-xl shadow-[#2F6BFF]/25 hover:bg-[#1E57E6] hover:shadow-[#2F6BFF]/35 active:scale-98 transition-all duration-200 text-base"
                id="hero-cta-free"
              >
                <Calendar className="w-5 h-5 opacity-90" />
                <span>まずは無料相談</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="https://line.me" // Placeholder URL representing the LINE account URL
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded-2xl shadow-lg shadow-[#06C755]/15 hover:bg-[#05B34C] active:scale-98 transition-all duration-200 text-base"
                id="hero-cta-line"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>LINEで気軽に相談</span>
              </a>
            </motion.div>

            {/* Micro proof points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[#2F6BFF] font-bold">✓</span> 相談・お見積り完全無料
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#2F6BFF] font-bold">✓</span> 専門用語なしの丁寧な説明
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#2F6BFF] font-bold">✓</span> 宮町商店街など地域実績多数
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Video Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[290px] sm:max-w-[320px]"
            >
              {/* Outer phone frame */}
              <div className="relative mx-auto border-[11px] border-gray-900 rounded-[44px] bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19.5] w-full">
                {/* Speaker top bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full" />
                </div>

                {/* Video container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-slate-900 to-gray-950 flex items-center justify-center overflow-hidden z-10">
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80"
                    src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-scrolling-on-a-smartphone-40081-large.mp4"
                  />
                  {/* Overlay gradient for text readability or polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                  {/* Elegant decorative fallback overlay icon (visible if video loads transparently or is dark) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none -z-10 opacity-40">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2 border border-blue-500/20">
                      <Play className="w-6 h-6 fill-blue-400/20" />
                    </div>
                    <span className="text-xs text-blue-200 font-bold tracking-wider">VOICE CREATIVE</span>
                  </div>

                  {/* Mock Play / Live Indicator */}
                  <div className="absolute top-8 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    LIVE DEMO
                  </div>
                  
                  {/* Mock Social Media Overlay UI */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs z-20 flex flex-col gap-1 pointer-events-none">
                    <p className="font-bold">@voice_creative</p>
                    <p className="text-gray-200 text-[10px] line-clamp-2">
                      宮町商店街のお店や地元企業の魅力を1分動画で発信中！ ＃地元密着 ＃SNS運用代行
                    </p>
                    <div className="flex gap-2 mt-1">
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[9px]">動画制作</span>
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[9px]">SNS運用</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background elements behind phone */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-yellow-400/20 blur-xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-500/10 blur-xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
