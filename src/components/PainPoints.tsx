import React from "react";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { PAIN_POINTS } from "../data";
import { motion } from "motion/react";

interface PainPointsProps {
  onNavigate: (sectionId: string) => void;
}

export default function PainPoints({ onNavigate }: PainPointsProps) {
  return (
    <section id="pain" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-wide mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            発信のお悩み
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-gray-900 tracking-tight">
            こんなお悩み、ありませんか？
          </h2>
          <div className="mt-4 w-12 h-1 bg-red-200 mx-auto rounded-full" />
        </div>

        {/* Pain Points Cards Stack */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 sm:p-6 bg-[#F4F6FA] hover:bg-red-50/20 hover:border-red-100 border border-transparent rounded-2xl transition-all duration-200 group"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-red-400 group-hover:text-red-500 transition-colors" />
              </div>
              <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Concluding CTA box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 bg-gradient-to-tr from-[#2F6BFF]/5 to-[#5B9DFF]/5 border border-blue-100 rounded-3xl text-center max-w-2xl mx-auto"
        >
          <p className="text-[#2F6BFF] font-sans font-bold text-lg sm:text-xl">
            ひとつでも当てはまったら、まずはお気軽にご相談ください。
          </p>
          <p className="mt-2 text-sm text-[#5B6473] font-medium">
            株式会社VOICEが、あなたのお店の“強み”を一緒に見つけて、届く発信をお手伝いします。
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="mt-6 px-6 py-3 bg-[#2F6BFF] hover:bg-[#1E57E6] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-[#2F6BFF]/10 hover:shadow-[#2F6BFF]/20 active:scale-95 transition-all duration-150"
          >
            お悩みを聞かせてください
          </button>
        </motion.div>

      </div>
    </section>
  );
}
