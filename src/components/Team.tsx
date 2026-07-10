import React from "react";
import { TEAM_MEMBERS } from "../data";
import { MessageSquare, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            OUR TEAM
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            私たちについて
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
            少人数だからこそ、一軒一軒に、まっすぐ向き合えます。
            あなたのお店のことを、いっしょに考えるチームです。
          </p>
          <div className="mt-4 w-12 h-1 bg-blue-200 mx-auto rounded-full" />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F4F6FA]/50 hover:bg-white border border-transparent hover:border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Member Avatar / Picture */}
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto md:mx-0 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-500/10" />
                </div>

                {/* Member Name and Role */}
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-sans font-extrabold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#2F6BFF] font-bold mt-1 tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Message Bubble comment */}
                <div className="mt-6 bg-white p-4 rounded-2xl border border-gray-100/60 relative shadow-xs">
                  {/* Speech bubble arrow decorator */}
                  <div className="absolute top-[-6px] left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 w-3 h-3 bg-white border-t border-l border-gray-100/60 rotate-45" />
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans italic">
                    「 {member.comment} 」
                  </p>
                </div>
              </div>

              {/* Heart/Friendly indicator */}
              <div className="mt-6 pt-4 border-t border-gray-100/40 flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#5B6473]">
                <Heart className="w-3.5 h-3.5 fill-[#2F6BFF]/10 text-[#2F6BFF]" />
                <span>全力でサポートいたします</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
