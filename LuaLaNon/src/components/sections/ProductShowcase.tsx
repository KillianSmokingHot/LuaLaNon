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
  { src: "/images/section-1-tabs/01-chat-lieu.jpg", alt: "Red silk conical hat keychain - material and quality" },
  { src: "/images/section-1-tabs/02-ca-nhan-hoa.jpg", alt: "Purple silk conical hat keychains - personalization" },
  { src: "/images/section-1-tabs/03-ung-dung.jpg", alt: "Red silk conical hat keychain on a black bag" },
  { src: "/images/section-1-tabs/04-phong-cach.jpg", alt: "Pink silk conical hat keychain lifestyle photo" },
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

  const activeProductImage = productImages[
    Math.min(activeIndex, productImages.length - 1)
  ] ?? productImages[0];

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
            <p className="text-white font-body uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
              01/ Về sản phẩm
            </p>
            <h2 className="font-display italic font-bold text-[#F7D87F] text-4xl sm:text-5xl md:text-6xl leading-none">
              Móc khóa nón lá lụa
            </h2>
          </motion.div>

          {/* Large Moving Mockup Gallery */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
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
        <div className="relative z-10 hidden max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:block">
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
  <div className="relative mx-auto w-full max-w-[440px] rounded-[2rem] border-[2.5px] border-[#BE1A1A] bg-white p-3 sm:p-4 shadow-[0_20px_60px_rgba(190,26,26,0.15)]">
    <motion.div
      key={activeProductImage.src}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <Image
        src={activeProductImage.src}
        alt={activeProductImage.alt}
        width={928}
        height={1600}
        className="block h-auto w-full rounded-[1.25rem] object-contain"
        sizes="(max-width: 1024px) 100vw, 440px"
        priority={activeIndex === 0}
      />
    </motion.div>

    <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-[#BE1A1A]/30 sm:inset-4" />

    <div className="absolute left-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#BE1A1A] font-display font-bold text-white shadow-lg">
      {productFeatures[activeIndex]?.no ?? "01"}
    </div>

    <div className="absolute bottom-5 right-5 z-30 rounded-full bg-[#F7D87F] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#BE1A1A]">
      {"M\u00f3c kh\u00f3a n\u00f3n l\u00e1"}
    </div>
  </div>
</div>
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

        {/* Mobile: each feature has its matching uncropped image */}
        <div className="lg:hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            {productFeatures.map((feature, i) => {
              const image = productImages[i] ?? productImages[0];

              return (
                <div key={feature.id} className="mb-12">
                  <div className="relative mx-auto mb-6 w-full max-w-[360px] rounded-[2rem] border-[2.5px] border-[#BE1A1A] bg-white p-3 shadow-[0_20px_60px_rgba(190,26,26,0.15)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={928}
                      height={1600}
                      className="block h-auto w-full rounded-[1.25rem] object-contain"
                      sizes="(max-width: 640px) 100vw, 360px"
                      priority={i === 0}
                    />

                    <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-dashed border-[#BE1A1A]/30" />

                    <div className="absolute left-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#BE1A1A] font-display font-bold text-white shadow-lg">
                      {feature.no}
                    </div>

                    <div className="absolute bottom-5 right-5 z-30 rounded-full bg-[#F7D87F] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#BE1A1A]">
                      {"M\u00f3c kh\u00f3a n\u00f3n l\u00e1"}
                    </div>
                  </div>

                  <div className="font-display font-black leading-none mb-4 text-[#BE1A1A]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    {feature.no}
                  </div>

                  <div className="inline-flex items-center px-4 py-2 rounded-full border-2 bg-[#BE1A1A] text-white border-[#BE1A1A] font-body font-semibold text-xs uppercase tracking-[0.12em] mb-4">
                    {feature.no} {"\u2014"} {feature.title}
                  </div>

                  <p className="font-body leading-relaxed text-sm text-[#2a0a0a] max-w-xl">
                    {feature.description}
                  </p>

                  {i < productFeatures.length - 1 && (
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#BE1A1A]/20 to-transparent" />
                  )}
                </div>
              );
            })}
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
