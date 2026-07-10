import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FBFBFD] relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-blue-200/30 blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-14">
          <span className="text-[#2F6BFF] text-xs font-bold tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            CONTACT US
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-gray-900 tracking-tight">
            お問い合わせ・無料相談
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-lg mx-auto leading-relaxed">
            「SNSについてちょっと聞きたい」「ホームページの制作費用を知りたい」など、まずはお気軽におしゃべり感覚でご相談ください。相談・お見積りは無料です。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#2F6BFF] text-white p-8 sm:p-12 rounded-3xl shadow-xl shadow-[#2F6BFF]/15 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-12 -translate-y-12" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-10 translate-y-10" />

          <div className="relative">
            <span className="text-[10px] bg-white/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              QUICK RESPONSE
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold mt-5 leading-snug">
              まずは、気軽におしゃべりから。
            </h3>
            <p className="mt-4 text-blue-100 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              LINEなら、お友達登録後にチャットでお悩みを送るだけ。メールでのご相談も歓迎です。お忙しいオーナー様も、隙間時間にお気軽にご連絡ください。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#06C755] text-white font-bold rounded-2xl hover:bg-[#05B34C] transition-all duration-150 shadow-md active:scale-95 text-base"
                id="contact-line-direct"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>LINEで相談する</span>
              </a>

              <a
                href="mailto:info@example.com"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#2F6BFF] font-bold rounded-2xl hover:bg-blue-50 transition-all duration-150 shadow-md active:scale-95 text-base"
                id="contact-email-direct"
              >
                <Mail className="w-5 h-5" />
                <span>メールで相談する</span>
              </a>
            </div>

            <p className="mt-6 text-blue-100 text-xs">
              通常2営業日以内に、担当よりご返信いたします。
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
