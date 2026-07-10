import React, { useRef } from "react";
import { ArrowUpRight, Search, Play, Volume2, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { CASE_STUDY, METRICS, SHOWCASE_ITEMS } from "../data";
import { motion } from "motion/react";

export default function Showcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  return (
    <section id="showcase" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            PORTFOLIO & RESULTS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            実績と信頼
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
            地域での地道な運用実績が、私たちの強み。宮町商店街から始まった、確かな信頼のかたち。
          </p>
        </div>

        {/* 1. Feature Case Study (宮町商店街) */}
        <div className="bg-gradient-to-br from-[#16181D] to-[#252A36] text-white rounded-3xl overflow-hidden shadow-2xl shadow-[#16181D]/15 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
            
            {/* Case Study Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 xl:p-16 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold tracking-wider uppercase mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  地域連動・大規模制作実績
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight leading-snug">
                  {CASE_STUDY.title}
                </h3>

                <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                  {CASE_STUDY.description}
                </p>

                {/* Blockquote style citation */}
                <div className="mt-8 border-l-4 border-[#2F6BFF] pl-4 italic">
                  <p className="text-gray-200 text-sm sm:text-base font-medium">
                    「{CASE_STUDY.quote}」
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">—— 株式会社VOICE 制作チーム</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10 sm:mt-12">
                <a
                  href={CASE_STUDY.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2F6BFF] hover:bg-[#1E57E6] text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-200 shadow-lg shadow-[#2F6BFF]/20 hover:scale-[1.02]"
                >
                  <span>特設サイトを見る</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Mockup Preview (Miyamachi shop search screen) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-blue-950/20 to-blue-900/10 flex items-center justify-center p-8 sm:p-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
              <div className="relative w-full max-w-[340px] aspect-[9/19] rounded-[40px] bg-white text-gray-900 overflow-hidden shadow-2xl border-4 border-gray-800 flex flex-col">
                {/* Mobile Notch */}
                <div className="h-6 bg-gray-100 flex items-center justify-between px-6 py-1 select-none z-20">
                  <span className="text-[10px] font-bold text-gray-600">09:41</span>
                  <div className="w-16 h-3.5 bg-black rounded-full" />
                  <span className="text-[10px] font-bold text-gray-600">5G 🔋</span>
                </div>

                {/* Phone screen inside iframe */}
                <div className="relative flex-grow w-full bg-[#FCFAF2] overflow-hidden">
                  <iframe
                    src="https://abebanjp-glitch.github.io/miyamachi-shop-search/"
                    className="w-full h-full border-none pointer-events-none"
                    title="宮町商店街店舗検索モックアップ"
                  />
                  
                  {/* Clickable link overlaying the iframe */}
                  <a
                    href="https://abebanjp-glitch.github.io/miyamachi-shop-search/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-300 group/mockup"
                  >
                    <div className="opacity-0 group-hover/mockup:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/mockup:translate-y-0 px-4 py-2.5 bg-gray-900/95 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-1.5 border border-white/10">
                      <span>新しいタブでサイトを見る</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>

                {/* Home Indicator */}
                <div className="h-4 bg-white flex items-center justify-center select-none pb-2 z-20">
                  <div className="w-24 h-1 bg-gray-400 rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Numeric Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F4F6FA] rounded-2xl p-6 text-center border border-gray-100 group hover:bg-white hover:border-[#2F6BFF]/20 hover:shadow-lg hover:shadow-[#2F6BFF]/5 transition-all duration-300"
            >
              <p className="text-sm font-medium text-gray-500 mb-1">{metric.label}</p>
              <p className="text-4xl sm:text-5xl font-sans font-extrabold text-[#2F6BFF] tracking-tight group-hover:scale-105 transition-transform">
                {metric.value}
              </p>
              <p className="text-xs text-gray-400 mt-2 font-medium">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. SNS & Video horizontal showcase (9:16 mobile mockups) */}
        <div>
          <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
            <h4 className="text-xl font-sans font-bold text-gray-900 flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-[#2F6BFF]" />
              SNS・動画クリエイティブ実績
            </h4>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 border border-gray-200 rounded-xl hover:bg-[#F4F6FA] text-gray-600 transition-all"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={scrollRight}
                className="p-2 border border-gray-200 rounded-xl hover:bg-[#F4F6FA] text-gray-600 transition-all"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          {/* Snap Horizontal Scroll Containers */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2 -mx-2"
            style={{ scrollbarWidth: "none" }}
          >
            {SHOWCASE_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start"
              >
                {/* 9:16 vertical smartphone representation */}
                <div className="bg-[#16181D] rounded-3xl overflow-hidden aspect-[9/16] shadow-lg relative group border border-white/5 flex flex-col justify-end">
                  {/* Photo representation of video or design */}
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Tint gradient for overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/25 z-10" />

                  {/* Top category label */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-black/40 backdrop-blur-md text-[10px] text-white rounded-full font-bold uppercase tracking-wider">
                    {item.category}
                  </span>

                  {/* Play video mock decorator */}
                  {item.category === "Video" && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Caption info */}
                  <div className="p-5 z-20 text-white font-sans">
                    <p className="text-xs text-[#5B9DFF] font-bold tracking-wider mb-1">VOICE Creative Case</p>
                    <h5 className="font-bold text-sm sm:text-base mb-1">{item.title}</h5>
                    <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed line-clamp-3">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-4 sm:hidden">
            ← 指で横スクロールしてご覧ください →
          </p>
        </div>

      </div>
    </section>
  );
}
