"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { floatingContactConfig } from "@/data/content";

// Custom SVG icons for Zalo and Messenger (official brand marks)
const ZaloIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="30" cy="30" r="30" fill="#0068FF"/>
    <path d="M42.5 27.5C42.5 27.5 42.5 30.5 39 33.5C35.5 36.5 31 36.5 31 36.5C31 36.5 30 35.5 30 33.5C30 31.5 32 29.5 34 29.5C36 29.5 37 30.5 37 31.5C37 31.5 35 31.5 33 29.5C31.5 28 32.5 26 32.5 26C32.5 26 30.5 27 28.5 29.5C26.5 32 25.5 35 25.5 36.5C25.5 38 27 39.5 28 39.5C29 39.5 30 38.5 30 38.5L27 41.5L24.5 38.5C24.5 38.5 26 37.5 26.5 36C27 34.5 27.5 33 28.5 31.5C29.5 30 30.5 28.5 32 27.5C32.5 27 33.5 26 35 25C36.5 24 37.5 23.5 38.5 23.5C39.5 23.5 40.5 24 41 25C41.5 26 41.5 27.5 42.5 27.5Z" fill="white"/>
  </svg>
);

const MessengerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="30" cy="30" r="30" fill="#0084FF"/>
    <path d="M35 27.5L27.5 33.5L23.5 27.5L34 22.5L38 27.5L35 27.5Z" fill="white"/>
    <path d="M24 22H36C40.4183 22 44 25.5817 44 30C44 32.5 43 35 41.5 36.5L36.5 44L31 39.5C30.5 40.5 29.5 41 28.5 41C26.5 41 25 39.5 25 37.5C25 36.5 25.5 35.5 26.5 35L24 39.5V22Z" fill="white"/>
  </svg>
);

type CustomIcon = React.FC<{ className?: string }>;

const iconMap: Record<string, CustomIcon | typeof Phone> = {
  zalo: ZaloIcon,
  messenger: MessengerIcon,
  phone: Phone,
};

export default function FloatingContactBar() {
  const [expanded, setExpanded] = useState(false);

  if (!floatingContactConfig.enabled) return null;

  const channels = floatingContactConfig.channels;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded &&
          channels.map((channel, i) => {
            const Icon = iconMap[channel.id] || Phone;
            const isExternal = channel.url.startsWith("http");

            return (
              <motion.a
                key={channel.id}
                href={channel.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                className="group flex items-center gap-3 cursor-pointer"
                aria-label={`Liên hệ qua ${channel.name}`}
              >
                {/* Always-visible label */}
                <span className="bg-white text-[#2a0a0a] text-sm px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap font-body font-semibold border border-[#BE1A1A]/20">
                  {channel.name === "Hotline" ? "Gọi 0795647905" : `Nhắn qua ${channel.name}`}
                </span>

                {/* Icon button with white ring for contrast */}
                <div className="relative flex-shrink-0">
                  <span
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl border-[3px] border-white transition-transform hover:scale-110"
                    style={{ backgroundColor: channel.brandColor }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white [&_svg]:w-full [&_svg]:h-full" />
                  </span>
                </div>
              </motion.a>
            );
          })}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        onClick={() => setExpanded(!expanded)}
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          expanded
            ? "bg-[#2a0a0a] hover:bg-black"
            : "bg-[#BE1A1A] hover:bg-[#D0311E]"
        }`}
        style={{
          boxShadow: expanded
            ? "0 8px 24px rgba(0, 0, 0, 0.3)"
            : "0 8px 24px rgba(190, 26, 26, 0.4)",
        }}
        aria-label={expanded ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
      >
        {/* Pulse ring on main button when not expanded */}
        {!expanded && (
          <span
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              backgroundColor: "#BE1A1A",
              animation: "pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
            }}
          />
        )}

        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {/* Use a simple chat icon for the toggle button */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              </svg>
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#BE1A1A]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
