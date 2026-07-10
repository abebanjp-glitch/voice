import React from "react";
import { Check, Info, FileText, Video, Sparkles, AlertCircle } from "lucide-react";
import { SNS_PRICES } from "../data";
import { motion } from "motion/react";

interface PricingProps {
  onNavigate: (sectionId: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            PRICING PLANS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            料金プラン
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
            お店のご予算やご要望に合わせ、無理のない最適な発信体制をご提案します。
            まずはお気軽にお見積り・ご相談ください。
          </p>
        </div>

        {/* 1. Standalone/One-off services (Web and Video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Website Design Service */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 bg-[#F4F6FA] border border-gray-100 rounded-3xl flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#2F6BFF] shadow-sm flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-gray-900">Webサイト制作（一括）</h3>
                <p className="text-xs sm:text-sm text-[#5B6473] mt-1">
                  スマホ最適化、SEO初期設定、基本ページ一式。
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <span className="text-gray-400 text-xs block">一括初期制作</span>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-gray-900">¥150,000〜</span>
              <span className="text-[#5B6473] text-xs block mt-1">※更新サポートは別途</span>
            </div>
          </motion.div>

          {/* Video Service */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 bg-[#F4F6FA] border border-gray-100 rounded-3xl flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#2F6BFF] shadow-sm flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-gray-900">動画（スポット）</h3>
                <p className="text-xs sm:text-sm text-[#5B6473] mt-1">
                  1本からのショート動画PR制作。
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <span className="text-gray-400 text-xs block">動画1本お試し</span>
              <span className="text-2xl sm:text-3xl font-sans font-extrabold text-gray-900">¥10,000〜</span>
              <span className="text-[#5B6473] text-xs block mt-1">※企画・編集・書き出し</span>
            </div>
          </motion.div>

        </div>

        {/* 2. Monthly SNS Subscription Plans */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-sans font-bold text-gray-900 inline-flex items-center gap-2 bg-[#F4F6FA] px-5 py-2.5 rounded-full">
            <Sparkles className="w-5 h-5 text-[#2F6BFF]" />
            SNS運用代行（月額プラン）
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {SNS_PRICES.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full border transition-all duration-300 ${
                tier.recommended
                  ? "bg-white border-[#2F6BFF] shadow-xl shadow-[#2F6BFF]/5 lg:scale-[1.03] lg:z-10"
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#2F6BFF] to-[#5B9DFF] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-[#2F6BFF]/20 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  人気・おすすめプラン
                </div>
              )}

              {/* Top area */}
              <div>
                <p className="text-sm font-sans font-bold text-gray-400 tracking-wider mb-2 uppercase">
                  {tier.recommended ? "RECOMMENDED" : "STANDARD"}
                </p>
                <h4 className="text-lg sm:text-xl font-sans font-extrabold text-gray-900">
                  {tier.name}
                </h4>
                
                {/* Pricing amount */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-sm font-bold text-gray-500 mr-1">月額</span>
                  <span className="text-3xl sm:text-4xl font-sans font-black text-gray-900">
                    ¥{tier.price}
                  </span>
                  <span className="text-xs font-medium text-gray-400 ml-1">/月〜</span>
                </div>

                <div className="mt-6 w-full h-[1px] bg-gray-100" />

                {/* Features List */}
                <ul className="mt-6 space-y-3.5">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 font-sans">
                      <Check className="w-5 h-5 text-[#2F6BFF] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8">
                <button
                  onClick={() => onNavigate("contact")}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 active:scale-95 ${
                    tier.recommended
                      ? "bg-[#2F6BFF] hover:bg-[#1E57E6] text-white shadow-md shadow-[#2F6BFF]/10"
                      : "bg-[#F4F6FA] hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  このプランを相談する
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* 3. Pricing Disclaimer Callout */}
        <div className="mt-16 p-5 sm:p-6 bg-blue-50/50 border border-blue-100/50 rounded-2xl max-w-4xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#2F6BFF] mt-0.5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
            上記はプランの基本例です。お店や会社の現在の課題、稼働状況に合わてご負担のないプランをご提案可能です。
            「まずはSNS運用だけでスタートし、数ヶ月後にWebサイトを追加したい」「YouTubeショート動画だけを依頼したい」などのカスタマイズも大歓迎です。
          </p>
        </div>

        {/* Big Pricing CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2F6BFF] hover:bg-[#1E57E6] text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl shadow-[#2F6BFF]/15 hover:scale-[1.02] transition-all duration-200"
            id="pricing-cta-bottom"
          >
            <span>無料で相談・お見積り</span>
          </button>
        </div>

      </div>
    </section>
  );
}
