"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { productFeatures } from "@/data/content";

/* ============================================================
   PRODUCT MOCKUP IMAGES — LARGE GALLERY
   All 8 available mockups for the marquee gallery
   ============================================================ */
const productMockups = [
  { src: "/images/products/momo.png", alt: "MoMo mockup" },
  { src: "/images/products/acb.png", alt: "ACB mockup" },
  { src: "/images/products/shopee.png", alt: "Shopee mockup" },
  { src: "/images/products/tpbank.png", alt: "TPBank mockup" },
  { src: "/images/products/vinamilk.png", alt: "Vinamilk mockup" },
  { src: "/images/products/coffee-house.png", alt: "The Coffee House mockup" },
  { src: "/images/products/van-lang.png", alt: "Van Lang mockup" },
  { src: "/images/products/be.jpg", alt: "be mockup" },
];

/* ============================================================
   STICKY PRODUCT IMAGES — for detail section below
   ============================================================ */
const productImages = [
  { src: "/images/products/showcase-1.png", alt: "Móc khóa nón lá lụa" },
  { src: "/images/products/showcase-2.png", alt: "Móc khóa nón lá cá nhân hóa" },
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
    <section id="san-pham" className="relative">
      {/* =====================================================
          PHẦN A — GALLERY MARQUEE with REAL PRODUCT IMAGES
          ===================================================== */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#BE1A1A" }}>
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

          {/* Large Moving Mockup Gallery */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
            <p className="text-white/70 font-body text-sm mb-6 text-center">
              Một số mẫu cá nhân hóa minh họa
            </p>
            {/* Marquee container - no overflow on container, inner element scrolls */}
            <div className="relative">
              <div
                className="flex gap-5 marquee-track"
                style={{
                  animation: "marquee-scroll 30s linear infinite",
                }}
              >
                {/* Duplicate for seamless loop */}
                {[...productMockups, ...productMockups].map((mockup, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)] bg-gradient-to-br from-[#FDF6DC] to-[#F8EBAB]"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={mockup.src}
                      alt={mockup.alt}
                      fill
                      className="object-contain p-4"
                      sizes="320px"
                      loading={i >= productMockups.length ? "lazy" : "eager"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PHẦN B — STICKY 2-COLUMN
          Using CSS Grid with proper sticky positioning
          ===================================================== */}
      <div
        className="relative bg-white"
      >
        {/* Dot bg */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #BE1A1A 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Sticky 2-column container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ========== CỘT TRÁI — STICKY PRODUCT VISUAL ========== */}
            {/*
              STICKY COLUMN RULES:
              - position: sticky (NOT fixed)
              - top: 96px (accounting for header ~80px + breathing room)
              - align-self: start (grid alignment)
              - NO overflow: hidden on parent containers
              - NO transforms on parent containers
            */}
            <div className="lg:sticky lg:top-24 lg:self-start order-1">
              <div
                className="relative w-full rounded-[2rem] border-[2.5px] border-[#BE1A1A] bg-gradient-to-br from-[#FDF6DC] via-[#F8EBAB] to-[#FDF6DC] shadow-[0_20px_60px_rgba(190,26,26,0.15)] overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                {/* Product images layered */}
                {productImages.map((img, i) => {
                  const isActive = i === activeIndex || (activeIndex === 0 && i === 0) || (activeIndex >= 2 && i === 1);
                  return (
                    <div
                      key={img.src}
                      className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={i === 0}
                      />
                    </div>
                  );
                })}

                {/* Inner dashed border */}
                <div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-[#BE1A1A]/30 z-20 pointer-events-none" />

                {/* Badge số góc trên */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#BE1A1A] text-white font-display font-bold flex items-center justify-center shadow-lg z-30">
                  {productFeatures[activeIndex]?.no ?? "01"}
                </div>
                {/* Badge góc dưới */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#F7D87F] text-[#BE1A1A] text-[10px] uppercase tracking-wider font-bold z-30">
                  Móc khóa nón lá
                </div>
              </div>
            </div>

            {/* ========== CỘT PHẢI — SCROLLABLE CONTENT ========== */}
            <div className="order-2">
              {productFeatures.map((feature, i) => {
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
          </div>
        </div>

        {/* Mobile: Stack product and features vertically */}
        {/* This section is hidden on desktop (lg+), visible on mobile */}
        <div className="lg:hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            {/* Mobile Product Card */}
            <div className="mb-12">
              <div
                className="relative w-full max-w-sm mx-auto rounded-[2rem] border-[2.5px] border-[#BE1A1A] bg-gradient-to-br from-[#FDF6DC] via-[#F8EBAB] to-[#FDF6DC] shadow-[0_20px_60px_rgba(190,26,26,0.15)] overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <Image
                  src={productImages[0].src}
                  alt={productImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-[#BE1A1A]/30 z-20 pointer-events-none" />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#F7D87F] text-[#BE1A1A] text-[10px] uppercase tracking-wider font-bold z-30">
                  Móc khóa nón lá
                </div>
              </div>
            </div>

            {/* Mobile Features */}
            {productFeatures.map((feature, i) => (
              <div
                key={feature.id}
                className="mb-10"
              >
                <div
                  className="font-display font-black leading-none mb-4 text-[#BE1A1A]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {feature.no}
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full border-2 bg-[#BE1A1A] text-white border-[#BE1A1A] font-body font-semibold text-xs uppercase tracking-[0.12em] mb-4">
                  {feature.no} — {feature.title}
                </div>
                <p className="font-body leading-relaxed text-sm text-[#2a0a0a] max-w-xl">
                  {feature.description}
                </p>
                {i < productFeatures.length - 1 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#BE1A1A]/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
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
