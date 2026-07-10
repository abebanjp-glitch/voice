import React from "react";
import { Share2, Video, Laptop, Cpu, GraduationCap, ArrowRight } from "lucide-react";
import { SERVICES } from "../data";
import { motion } from "motion/react";

const iconMap = {
  sns: Share2,
  video: Video,
  web: Laptop,
  ai: Cpu,
  school: GraduationCap,
};

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-[#F4F6FA]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            OUR SERVICES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            できること
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto leading-relaxed">
            SNS・動画・ホームページを別々に頼む手間はもう必要ありません。
            発信にかかわるすべてを、一括して親身にサポートします。
          </p>
        </div>

        {/* Primary Services (Large Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICES.primary.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#2F6BFF]/5 transition-all duration-300 flex flex-col h-full"
              >
                {/* Popular Badge */}
                {service.badge && (
                  <span className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md shadow-orange-500/25 uppercase tracking-wider animate-bounce">
                    {service.badge}
                  </span>
                )}

                {/* Aspect ratio container for Unsplash Images */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2F6BFF] flex items-center justify-center mb-5 group-hover:bg-[#2F6BFF] group-hover:text-white transition-all duration-300 shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-sans font-bold text-gray-900 group-hover:text-[#2F6BFF] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans mb-6 flex-grow">
                    {service.description}
                  </p>

                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2F6BFF] group-hover:gap-2.5 transition-all duration-200 mt-auto"
                  >
                    詳しく聞いてみる
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Services (Smaller Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SERVICES.secondary.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Small thumbnail for mobile-first bento expansion */}
                <div className="hidden sm:block w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2F6BFF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2F6BFF] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-base sm:text-lg font-sans font-bold text-gray-900">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
