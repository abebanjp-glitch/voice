import React from "react";
import { WHY_US } from "../data";
import { CheckCircle2, Award, Heart, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUs() {
  const iconList = [Award, Heart, ThumbsUp];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FBFBFD] to-[#F4F6FA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            OUR STRENGTHS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            VOICEが選ばれる理由
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
            単なる「発注先」ではなく、あなたのお店の「頼れる発信チーム」になりたい。
            そのために私たちが大切にしている3つのこだわり。
          </p>
        </div>

        {/* Why Us Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {WHY_US.map((item, index) => {
            const Icon = iconList[index % iconList.length];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Background Huge Number */}
                <div className="absolute right-4 top-2 text-[80px] sm:text-[90px] font-sans font-extrabold text-[#2F6BFF]/5 select-none leading-none z-0">
                  {item.number}
                </div>

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2F6BFF] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center gap-1.5 text-xs text-[#2F6BFF] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  安心のコミットメント
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting proof statement card */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#5B6473] font-medium max-w-lg mx-auto">
            ※デジタル化への不安やITアレルギーをお持ちのオーナー様にも、専門用語を使わずに根気強く、丁寧にお答えします。
          </p>
        </div>

      </div>
    </section>
  );
}
