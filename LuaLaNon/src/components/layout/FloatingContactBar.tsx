"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, type LucideIcon } from "lucide-react";
import { floatingContactConfig } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  zalo: MessageCircle,
  messenger: MessageCircle,
  phone: Phone,
};

export default function FloatingContactBar() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  if (!floatingContactConfig.enabled) return null;

  const channels = floatingContactConfig.channels;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded &&
          channels.map((channel, i) => {
            const Icon = iconMap[channel.id] || MessageCircle;
            const isExternal = channel.url.startsWith("http");

            return (
              <motion.a
                key={channel.id}
                href={channel.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                onMouseEnter={() => setHovered(channel.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex items-center gap-3 cursor-pointer"
                aria-label={`Liên hệ qua ${channel.name}`}
              >
                {/* Tooltip label */}
                <AnimatePresence>
                  {hovered === channel.id && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="bg-[#BE1A1A] text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap font-body font-medium"
                    >
                      {channel.name === "Hotline" ? "Gọi Hotline" : `Nhắn qua ${channel.name}`}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Icon button with pulse */}
                <div className="relative">
                  {/* Pulse ring (animated) */}
                  <span
                    className="absolute inset-0 rounded-full opacity-60"
                    style={{
                      backgroundColor: channel.brandColor,
                      animation: "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                    }}
                  />
                  {/* Inner solid circle */}
                  <span
                    className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: channel.brandColor }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
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
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#BE1A1A]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
