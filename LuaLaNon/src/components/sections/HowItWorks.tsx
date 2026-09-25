"use client";

import { motion } from "framer-motion";
import { Send, Eye, Hammer, Package, Truck } from "lucide-react";
import { processSteps } from "@/data/content";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Send,
  Eye,
  Hammer,
  Package,
  Truck,
};

export default function HowItWorks() {
  return (
    <section id="quy-trinh" className="quy-trinh-section">
      {/* Dot bg — vàng nhạt */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow vàng giữa — ::before pseudo-element */}
      {/* (CSS đặt ở dưới <style>) */}

      {/* Nội dung — z-index cao hơn glow */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#BE1A1A] uppercase tracking-[0.25em] text-xs sm:text-sm font-body font-semibold mb-2">
            02/ Về quy trình
          </p>
          <h2
            className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-0"
            style={{
              fontWeight: 700,
              lineHeight: 1.3,
              paddingBottom: "15px",
              background: "linear-gradient(90deg, #BE1A1A 0%, #F7D87F 50%, #D0311E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Từ ý tưởng đến thành phẩm.
          </h2>
          <p className="text-[#BE1A1A] font-body text-sm sm:text-base mt-4">
            Quy trình 5 bước thuận tiện, minh bạch:
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="relative">
          {/* Dashed connector line — desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-0 border-t-[2.5px] border-dashed border-[#BE1A1A]/60 z-[1]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-3 relative z-[1]">
            {processSteps.map((step, i) => {
              const Icon = iconMap[Object.keys(iconMap)[i]] ?? Send;
              return (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Watermark số lớn */}
                  <div
                    className="font-display font-black text-[#BE1A1A] pointer-events-none select-none leading-none absolute -top-4 left-1/2 -translate-x-1/2"
                    style={{ fontSize: "clamp(5rem, 12vw, 9rem)", opacity: 0.1 }}
                    aria-hidden="true"
                  >
                    {step.no}
                  </div>

                  {/* Step circle */}
                  <div className="relative z-[1] mb-0">
                    <div className="w-[110px] h-[110px] rounded-full bg-white border-[2.5px] border-[#BE1A1A] flex items-center justify-center shadow-md">
                      <Icon className="w-11 h-11 text-[#BE1A1A]" strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#BE1A1A] font-display font-bold mb-0 uppercase tracking-[0.08em]"
                    style={{ fontSize: "18px", lineHeight: 1.3 }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#2a0a0a]/75 font-body leading-relaxed mb-0"
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.5,
                      maxWidth: "210px",
                      textAlign: "center",
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .quy-trinh-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 50px;
          box-sizing: border-box;
        }
        .quy-trinh-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(247, 216, 127, 0.4) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
