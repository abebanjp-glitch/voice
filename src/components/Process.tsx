import React from "react";
import { PROCESS_STEPS } from "../data";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section className="py-24 bg-[#F4F6FA]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            HOW WE WORK
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            ご依頼の流れ
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
            お問い合わせから運用スタートまで、専門用語を使わずに分かりやすく進めてまいります。
            何を用意すれば良いかわからない状態でも心配ありません。
          </p>
        </div>

        {/* Steps Timeline - vertical for mobile-first, and beautifully responsive */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connector */}
          <div className="absolute left-[28px] sm:left-1/2 top-8 bottom-8 w-0.5 bg-gray-200/80 -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-gray-200/80 sm:hidden" />

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Badge Number */}
                  <div className="absolute left-0 sm:left-1/2 top-0 -translate-x-[6px] sm:-translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-tr from-[#2F6BFF] to-[#5B9DFF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2F6BFF]/15">
                    {step.step}
                  </div>

                  {/* Left spacer / right content block for alternating desktop layout */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-12">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-[10px] text-[#2F6BFF] font-extrabold tracking-wider block uppercase mb-1">
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space filler block on opposite side for desktop layout */}
                  <div className="hidden sm:block w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
