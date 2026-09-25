"use client";

import { motion } from "framer-motion";
import { Check, Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { pricingTiers, pricingIncluded, pricingExtra } from "@/data/content";
import { useHorizontalScroll, useScrollY } from "@/lib/hooks";

export default function Pricing() {
  const { ref, scroll } = useHorizontalScroll<HTMLDivElement>();
  const scrollY = useScrollY();

  return (
    <section id="bang-gia" className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: "#F8EBAB" }}>
      {/* Polka dot bg */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #BE1A1A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#BE1A1A] uppercase tracking-[0.25em] text-xs sm:text-sm font-body font-semibold mb-3">
            03/ Bảng giá
          </p>
          <h2 className="font-display italic text-gradient-red text-4xl sm:text-5xl md:text-6xl leading-none">
            Móc khóa nón lá lụa
          </h2>
        </motion.div>

        {/* CAROUSEL HEADER + ARROWS */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#BE1A1A] font-body text-sm sm:text-base font-medium">
            <span className="hidden sm:inline">← Vuốt ngang để xem thêm bảng giá </span>
            <span className="sm:hidden">Vuốt ngang</span>
          </p>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border-2 border-[#BE1A1A] text-[#BE1A1A] hover:bg-[#BE1A1A] hover:text-white transition-colors flex items-center justify-center"
              aria-label="Trước"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border-2 border-[#BE1A1A] text-[#BE1A1A] hover:bg-[#BE1A1A] hover:text-white transition-colors flex items-center justify-center"
              aria-label="Sau"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* CAROUSEL — ngang cuộn */}
        <div
          ref={ref}
          className="snap-carousel flex gap-6 overflow-x-auto pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6"
        >
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.quantity}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative flex-shrink-0 w-[280px] sm:w-[300px] rounded-3xl p-7 sm:p-8 text-center border-[2.5px] transition-all duration-300 ${
                tier.highlight
                  ? "bg-[#BE1A1A] text-white border-[#F7D87F] scale-[1.03] shadow-[0_20px_50px_rgba(190,26,26,0.3)]"
                  : "bg-white text-[#2a0a0a] border-[#BE1A1A] hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F7D87F] text-[#BE1A1A] text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                  <Star className="w-3.5 h-3.5" fill="#BE1A1A" />
                  {tier.badge}
                </div>
              )}

              {/* Quantity */}
              <p
                className={`text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-6 mt-2 ${
                  tier.highlight ? "text-[#F7D87F]" : "text-[#BE1A1A]/70"
                }`}
              >
                {tier.quantity}
              </p>

              {/* Price */}
              <div className="mb-3">
                <p
                  className={`font-display italic font-black leading-none ${
                    tier.highlight ? "text-[#F7D87F]" : "text-[#BE1A1A]"
                  }`}
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  {tier.price.replace("/chiếc", "")}
                </p>
                <p
                  className={`text-xs uppercase tracking-[0.2em] mt-2 font-body ${
                    tier.highlight ? "text-[#F7D87F]/80" : "text-[#BE1A1A]/60"
                  }`}
                >
                  / chiếc
                </p>
              </div>

              {/* Divider */}
              <div
                className={`my-5 border-t ${
                  tier.highlight ? "border-[#F7D87F]/30" : "border-[#BE1A1A]/15"
                }`}
              />

              <p
                className={`text-xs font-body ${
                  tier.highlight ? "text-white/80" : "text-[#2a0a0a]/70"
                }`}
              >
                Giá đã bao gồm UV DTF cơ bản
              </p>
            </motion.div>
          ))}
        </div>

        {/* INCLUDED + EXTRAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 sm:mt-16">
          {/* GIÁ ĐÃ BAO GỒM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#BE1A1A]/10"
          >
            <h3 className="text-[#BE1A1A] font-display font-bold text-lg sm:text-xl mb-6 uppercase tracking-[0.1em]">
              Giá đã bao gồm
            </h3>
            <ul className="space-y-4">
              {pricingIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#2a0a0a] text-sm sm:text-base font-body">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BE1A1A] text-white flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CÓ THỂ PHÁT SINH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#BE1A1A] text-white rounded-3xl p-6 sm:p-8 shadow-md"
          >
            <h3 className="text-[#F7D87F] font-display font-bold text-lg sm:text-xl mb-6 uppercase tracking-[0.1em]">
              Có thể phát sinh
            </h3>
            <ul className="space-y-4">
              {pricingExtra.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-sm sm:text-base font-body">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7D87F] text-[#BE1A1A] flex items-center justify-center mt-0.5">
                    <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
