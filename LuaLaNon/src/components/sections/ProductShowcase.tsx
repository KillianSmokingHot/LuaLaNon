"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, PenTool, Wallet, Package, type LucideIcon } from "lucide-react";
import { productFeatures } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  PenTool,
  Wallet,
  Package,
};

/* ============================================================
   PHẦN A — Gallery Marquee
   ============================================================ */
const marqueeItems = [
  { label: "Móc khóa nón lá", sub: "Chất liệu lụa cao cấp", icon: Sparkles },
  { label: "Cá nhân hóa", sub: "UV DTF sắc nét", icon: PenTool },
  { label: "Hoàn thiện", sub: "Đóng gói tỉ mỉ", icon: Package },
  { label: "Chi phí hợp lý", sub: "Từ cá nhân đến tổ chức", icon: Wallet },
];

/* ============================================================
   PHẦN B — Sticky Scroll
   ============================================================ */
export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver: block text nào vào giữa viewport → activeIndex
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = featureRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    featureRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="san-pham" className="relative overflow-hidden">
      {/* =====================================================
          PHẦN A — GALLERY MARQUEE
          ===================================================== */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#BE1A1A", minHeight: "75vh" }}>
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-10 pt-12 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white font-body font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
              01/ Về sản phẩm
            </p>
            <h2 className="font-display italic text-[#F7D87F] text-4xl sm:text-5xl md:text-6xl leading-none">
              Móc khóa nón lá lụa
            </h2>
          </motion.div>

          {/* Marquee */}
          <div className="relative mt-10 -mx-4 sm:-mx-6 lg:-mx-10 overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #BE1A1A, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #BE1A1A, transparent)" }}
            />
            <div
              className="flex gap-6"
              style={{
                animation: "marquee-scroll 40s linear infinite",
                width: "max-content",
              }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex-shrink-0 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                    style={{ width: "280px", aspectRatio: "3/4" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#FDF6DC] to-[#F8EBAB] flex flex-col items-center justify-center p-6 relative">
                      <div className="absolute inset-3 rounded-2xl border border-dashed border-[#BE1A1A]/20" />
                      <Icon className="w-16 h-16 text-[#BE1A1A] opacity-80 mb-5" strokeWidth={1.5} />
                      <p className="text-[#BE1A1A] font-display font-bold text-xl text-center leading-tight mb-1">
                        {item.label}
                      </p>
                      <p className="text-[#BE1A1A]/70 font-body text-sm text-center">
                        {item.sub}
                      </p>
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#BE1A1A] text-[#F7D87F] text-[9px] font-bold uppercase tracking-wider">
                        Lụa Là Nón
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PHẦN B — STICKY 2-COLUMN
          Container: display:flex | align-items:flex-start
          Left col: position:sticky | top:100px | align-self:flex-start
          Right col: 4 blocks, min-height:50vh each
          KHÔNG có watermark số mờ
          ===================================================== */}
      <div
        className="relative bg-white"
        style={{
          display: "flex",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* Dot bg — không có số mờ */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #BE1A1A 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full">

          {/* ========== CỘT TRÁI — STICKY IMAGE ========== */}
          <div
            style={{
              position: "sticky",
              top: "100px",
              alignSelf: "flex-start",
              float: "left",
              width: "48%",
              boxSizing: "border-box",
              paddingRight: "2rem",
            }}
          >
            <div
              className="relative w-full rounded-[2rem] border-[2.5px] border-[#BE1A1A] bg-gradient-to-br from-[#FDF6DC] via-[#F8EBAB] to-[#FDF6DC] shadow-[0_20px_60px_rgba(190,26,26,0.15)] overflow-hidden"
              style={{ aspectRatio: "1/1" }}
            >
              {/* Inner dashed border */}
              <div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-[#BE1A1A]/30 z-20" />

              {/* 4 images đè lên nhau */}
              {productFeatures.map((feature, i) => {
                const Icon = iconMap[feature.iconKey] ?? Sparkles;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={feature.id}
                    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-[#BE1A1A] opacity-90" strokeWidth={1.5} />
                    <div className="mt-6 text-[#BE1A1A] font-display font-bold text-xl sm:text-2xl text-center px-6">
                      {feature.title}
                    </div>
                  </div>
                );
              })}

              {/* Badge số góc trên */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#BE1A1A] text-white font-display font-bold flex items-center justify-center shadow-lg z-30">
                {productFeatures[activeIndex].no}
              </div>
              {/* Badge góc dưới */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#F7D87F] text-[#BE1A1A] text-[10px] uppercase tracking-wider font-bold z-30">
                Ảnh minh họa
              </div>
            </div>
          </div>

          {/* ========== CỘT PHẢI — SCROLLABLE TEXT ========== */}
          <div style={{ float: "right", width: "48%", boxSizing: "border-box" }}>
            {productFeatures.map((feature, i) => {
              const Icon = iconMap[feature.iconKey] ?? Sparkles;
              const isActive = i === activeIndex;
              return (
                <div
                  key={feature.id}
                  ref={(el) => { featureRefs.current[i] = el; }}
                  className="relative"
                  style={{ minHeight: "50vh", paddingBottom: "4rem" }}
                >
                  {/* Số lớn */}
                  <div
                    className={`font-display font-black leading-none mb-4 transition-colors duration-300 ${
                      isActive ? "text-[#BE1A1A]" : "text-[#BE1A1A]/20"
                    }`}
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  >
                    {feature.no}
                  </div>

                  {/* Title pill */}
                  <div
                    className={`inline-flex items-center self-start px-4 py-2 rounded-full border-2 font-body font-semibold text-xs sm:text-sm uppercase tracking-[0.12em] mb-5 transition-all duration-300 ${
                      isActive
                        ? "bg-[#BE1A1A] text-white border-[#BE1A1A]"
                        : "bg-white text-[#BE1A1A] border-[#BE1A1A]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 mr-2 -mt-0.5" />
                    {feature.no} — {feature.title}
                  </div>

                  {/* Description */}
                  <p
                    className={`font-body leading-relaxed text-sm sm:text-base max-w-xl transition-colors duration-300 ${
                      isActive ? "text-[#2a0a0a]" : "text-[#2a0a0a]/50"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Divider */}
                  {i < productFeatures.length - 1 && (
                    <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#BE1A1A]/20 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Clear float */}
          <div style={{ clear: "both" }} />
        </div>
      </div>

      {/* Marquee CSS */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
