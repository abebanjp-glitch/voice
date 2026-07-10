import React from "react";
import { MessageSquare, Instagram, Youtube, Twitter, Radio } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const menuItems = [
    { label: "お悩み", id: "pain" },
    { label: "できること", id: "services" },
    { label: "実績", id: "showcase" },
    { label: "料金", id: "pricing" },
    { label: "私たちについて", id: "team" },
    { label: "お問い合わせ", id: "contact" }
  ];

  return (
    <footer className="bg-[#16181D] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-12">
          
          {/* Company Details Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div 
              onClick={() => onNavigate("hero")}
              className="flex items-center gap-2.5 cursor-pointer group mb-5"
              id="footer-logo"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2F6BFF] to-[#5B9DFF] flex items-center justify-center text-white">
                <MessageSquare className="w-4.5 h-4.5 fill-white/10" />
              </div>
              <span className="font-sans font-bold text-xl tracking-wider text-white">
                VOICE
              </span>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              株式会社VOICEは、地元の店舗・企業の「声」をしっかりと世の中に届けるための発信パートナーです。SNS運用代行・動画編集・Webサイト制作を一括してサポートいたします。
            </p>

            {/* Social channels icons */}
            <div className="flex gap-3.5 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2F6BFF] hover:text-white flex items-center justify-center text-gray-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2F6BFF] hover:text-white flex items-center justify-center text-gray-400 transition-all duration-200"
                aria-label="TikTok"
              >
                <Radio className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2F6BFF] hover:text-white flex items-center justify-center text-gray-400 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2F6BFF] hover:text-white flex items-center justify-center text-gray-400 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links Columns */}
          <div className="md:col-span-7 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center md:justify-end text-center sm:text-left w-full">
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                MENU
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-3">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-150 font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[200px] mx-auto sm:mx-0 space-y-4 text-center sm:text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                COMPANY INFO
              </h4>
              <p className="text-[11px] sm:text-xs leading-relaxed text-gray-500">
                株式会社VOICE
                <br />
                〒000-0000 
                <br />
                日本 どこかの街 宮町
                <br />
                代表者：山田 太郎
                <br />
                設立：2026年
              </p>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gray-800/60 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-gray-500">
          <p>© 2026 株式会社VOICE. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">プライバシーポリシー</a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">利用規約</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
