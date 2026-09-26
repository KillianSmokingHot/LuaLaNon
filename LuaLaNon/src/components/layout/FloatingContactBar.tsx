"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { floatingContactConfig } from "@/data/content";

export default function FloatingContactBar() {
  const [expanded, setExpanded] = useState(false);

  if (!floatingContactConfig.enabled) return null;

  const channels = floatingContactConfig.channels;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded &&
          channels.map((channel, i) => {
            const isExternal = channel.url.startsWith("http");

            const brandIcon =
              channel.id === "zalo"
                ? "/icons/contact/zalo.svg"
                : channel.id === "messenger"
                  ? "/icons/contact/messenger.svg"
                  : null;

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
                  {channel.id === "phone" ? "Gọi hotline" : `Nhắn qua ${channel.name}`}
                </span>

                {/* Icon button with white ring for contrast */}
                <div className="relative flex-shrink-0">
                  <span
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl border-[3px] border-white transition-transform hover:scale-110"
                    style={{ backgroundColor: channel.brandColor }}
                  >
                    {brandIcon ? (
                      <img
                        src={brandIcon}
                        alt={channel.name}
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      />
                    ) : (
                      <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    )}
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
