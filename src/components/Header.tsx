import React, { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "お悩み", id: "pain" },
    { label: "できること", id: "services" },
    { label: "実績", id: "showcase" },
    { label: "料金", id: "pricing" },
    { label: "私たちについて", id: "team" },
    { label: "お問い合わせ", id: "contact" }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleItemClick("hero")} 
          className="flex items-center gap-2 cursor-pointer group"
          id="header-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2F6BFF] to-[#5B9DFF] flex items-center justify-center text-white shadow-md shadow-[#2F6BFF]/15 transition-transform group-hover:scale-105">
            <MessageSquare className="w-5 h-5 fill-white/10" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-xl sm:text-2xl tracking-wider text-gray-900 leading-none">
              VOICE
            </span>
            <span className="text-[10px] font-sans text-gray-400 font-medium tracking-tight mt-1">
              株式会社VOICE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2F6BFF] rounded-lg hover:bg-[#F4F6FA] transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleItemClick("contact")}
            className="ml-4 px-5 py-2.5 bg-[#2F6BFF] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#2F6BFF]/20 hover:bg-[#1E57E6] transition-all duration-200 active:scale-95"
          >
            無料相談はこちら
          </button>
        </nav>

        {/* Mobile Hamburger button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#2F6BFF] hover:bg-gray-50 rounded-xl transition-all duration-150"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => handleItemClick("contact")}
                  className="block w-full text-center px-6 py-3.5 bg-[#2F6BFF] text-white text-base font-bold rounded-xl shadow-lg shadow-[#2F6BFF]/15 hover:bg-[#1E57E6] active:scale-95 transition-all duration-150"
                >
                  無料相談・お見積り
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
