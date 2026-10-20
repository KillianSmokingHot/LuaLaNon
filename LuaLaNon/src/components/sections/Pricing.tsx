"use client";

import { motion } from "framer-motion";
import { Check, Plus, ArrowRight } from "lucide-react";
import { pricingIncluded, pricingExtra, contact } from "@/data/content";
import { useMemo, useState } from "react";

// ============================================================
//  Hằng số giá — ma trận giá mới (Số lượng × Logo)
// ============================================================
const TIERS = [
  { id: "t1", label: "1–9 chiếc", min: 1, max: 9, noLogo: 28000, withLogo: 33000 },
  { id: "t2", label: "10–49 chiếc", min: 10, max: 49, noLogo: 26000, withLogo: 31000 },
  { id: "t3", label: "50–99 chiếc", min: 50, max: 99, noLogo: 24500, withLogo: 29500 },
  { id: "t4", label: "100+ chiếc", min: 100, max: 100, noLogo: null, withLogo: null },
] as const;

const CONTACT_ZALO_URL = contact.zalo;

function formatVND(n: number) {
  return n.toLocaleString("vi-VN");
}

export default function Pricing() {
  // ---- State ----
  const [quantity, setQuantity] = useState<number>(35);
  const [hasLogo, setHasLogo] = useState<boolean>(false);

  // ---- Tính toán ----
  const activeTier = useMemo(() => {
    return (
      TIERS.find((t) => quantity >= t.min && quantity <= t.max) ?? TIERS[TIERS.length - 1]
    );
  }, [quantity]);

  const unitPrice = hasLogo ? activeTier.withLogo : activeTier.noLogo;
  const isContactOnly = activeTier.id === "t4"; // 100+ → liên hệ

  const total = isContactOnly || unitPrice == null ? 0 : unitPrice * quantity;

  // % fill cho thanh range (track gradient màu đỏ đậm)
  const rangePct = useMemo(() => {
    if (quantity >= 100) return 100;
    return ((quantity - 1) / 99) * 100;
  }, [quantity]);

  // ---- Handlers ----
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setQuantity(val);
  };

  return (
    <section
      id="bang-gia"
      className="relative py-20 sm:py-28 overflow-x-hidden"
      style={{ backgroundColor: "#F8EBAB" }}
    >
      {/* Polka dot bg */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #BE1A1A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[#BE1A1A] uppercase tracking-[0.25em] text-xs sm:text-sm font-body font-semibold mb-3">
            03/ Bảng giá
          </p>
          <h2 className="font-display italic text-gradient-red text-4xl sm:text-5xl md:text-6xl leading-none">
            Bạn cần bao nhiêu chiếc?
          </h2>
        </motion.div>

        {/* =================== MAIN CARD =================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(190,26,26,0.18)] p-6 sm:p-10"
        >
          {/* --- LOGO TOGGLE TABS --- */}
          <div className="flex justify-center mb-8">
            <div
              role="tablist"
              aria-label="Tùy chọn in logo"
              className="inline-flex p-1.5 rounded-full border-2 border-[#BE1A1A]/15 bg-[#F8EBAB]/40"
            >
              <button
                role="tab"
                aria-selected={!hasLogo}
                onClick={() => setHasLogo(false)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-body font-bold uppercase tracking-wider transition-all duration-300 ${
                  !hasLogo
                    ? "bg-[#BE1A1A] text-white shadow-md"
                    : "text-[#BE1A1A] hover:bg-[#BE1A1A]/10"
                }`}
              >
                Không logo
              </button>
              <button
                role="tab"
                aria-selected={hasLogo}
                onClick={() => setHasLogo(true)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-body font-bold uppercase tracking-wider transition-all duration-300 ${
                  hasLogo
                    ? "bg-[#BE1A1A] text-white shadow-md"
                    : "text-[#BE1A1A] hover:bg-[#BE1A1A]/10"
                }`}
              >
                Có logo
              </button>
            </div>
          </div>

          {/* --- RANGE SLIDER --- */}
          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-3">
              <label
                htmlFor="qty-range"
                className="text-[#2a0a0a] font-body font-semibold text-base sm:text-lg"
              >
                Số lượng:
              </label>
              <span className="font-display italic font-black text-[#BE1A1A] text-2xl sm:text-3xl">
                {quantity} chiếc
              </span>
            </div>

            <input
              id="qty-range"
              type="range"
              min={1}
              max={100}
              value={quantity}
              onChange={handleChange}
              aria-label="Chọn số lượng móc khóa"
              className="pricing-range w-full"
              style={
                {
                  "--pct": `${rangePct}%`,
                } as React.CSSProperties
              }
            />

            <div className="flex justify-between mt-2 text-xs sm:text-sm font-body text-[#BE1A1A]/70">
              <span>1</span>
              <span>100</span>
            </div>
          </div>

          {/* --- PRICE DISPLAY (2 cột) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pb-8 border-b border-[#BE1A1A]/15">
            {/* Đơn giá */}
            <div>
              <p className="text-[#BE1A1A]/70 font-body text-xs sm:text-sm uppercase tracking-wider mb-2">
                Đơn giá
              </p>
              {isContactOnly || unitPrice == null ? (
                <>
                  <p className="font-display italic font-black text-[#BE1A1A] leading-tight text-2xl sm:text-3xl md:text-[2rem]">
                    Liên hệ qua Zalo
                  </p>
                  <p className="text-[#2a0a0a]/70 font-body text-sm mt-1">
                    để nhận được báo giá riêng
                  </p>
                </>
              ) : (
                <>
                  <p className="pricing-figure font-display italic font-black text-[#BE1A1A] leading-none">
                    {formatVND(unitPrice)}
                    <span className="pricing-suffix-currency not-italic font-bold text-[#BE1A1A]/80">
                      đ
                    </span>
                    <span className="pricing-suffix-unit not-italic font-body font-normal text-[#2a0a0a]/60 ml-1">
                      /chiếc
                    </span>
                  </p>
                  <span className="inline-block mt-3 bg-[#BE1A1A] text-white text-xs sm:text-sm font-body font-bold px-3 py-1.5 rounded-full">
                    {activeTier.label}
                  </span>
                </>
              )}
            </div>

            {/* Tổng cộng */}
            <div className="sm:text-right">
              <p className="text-[#BE1A1A]/70 font-body text-xs sm:text-sm uppercase tracking-wider mb-2">
                Tổng cộng (ước tính)
              </p>
              {isContactOnly || unitPrice == null ? (
                <>
                  <p className="font-display italic font-black text-[#BE1A1A] leading-tight text-2xl sm:text-3xl md:text-[2rem]">
                    Liên hệ qua Zalo
                  </p>
                  <p className="text-[#2a0a0a]/70 font-body text-sm mt-1">
                    để nhận được báo giá riêng
                  </p>
                </>
              ) : (
                <p className="pricing-figure font-display italic font-black text-[#BE1A1A] leading-none">
                  {formatVND(total)}
                  <span className="pricing-suffix-currency not-italic font-bold text-[#BE1A1A]/80">
                    đ
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* --- CTA --- */}
          <div className="pt-6">

            <a
              href={isContactOnly ? CONTACT_ZALO_URL : "#dat-hang"}
              className="group flex items-center justify-center gap-2 w-full bg-[#F6D882] hover:bg-[#F8C95A] text-[#BE1A1A] font-body font-black uppercase tracking-wider text-base sm:text-lg py-4 sm:py-5 rounded-2xl transition-all duration-300 shadow-[0_8px_24px_rgba(246,216,130,0.5)] hover:shadow-[0_12px_30px_rgba(246,216,130,0.7)] hover:-translate-y-0.5"
            >
              {isContactOnly ? "Liên hệ qua Zalo" : "Đặt hàng ngay"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </a>
          </div>
        </motion.div>

        {/* =================== 4 MỐC GIÁ TÓM TẮT =================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5">
          {TIERS.map((tier) => {
            const isActive = activeTier.id === tier.id;
            const price = hasLogo ? tier.withLogo : tier.noLogo;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl text-center px-3 py-4 sm:py-5 transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-[#BE1A1A] border-[#BE1A1A] text-white shadow-[0_10px_25px_rgba(190,26,26,0.35)] scale-[1.02]"
                    : "bg-white border-[#BE1A1A]/15 text-[#BE1A1A] hover:border-[#BE1A1A]/40"
                }`}
              >
                <p
                  className={`text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-1.5 ${
                    isActive ? "text-white/85" : "text-[#BE1A1A]/80"
                  }`}
                >
                  {tier.label}
                </p>
                <p
                  className={`font-display italic font-black text-lg sm:text-xl ${
                    isActive ? "text-white" : "text-[#BE1A1A]"
                  }`}
                >
                  {price == null ? "Liên hệ" : `${formatVND(price)}đ`}
                </p>
              </div>
            );
          })}
        </div>

        {/* =================== INCLUDED + EXTRAS (2 CỘT) =================== */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-12"
          style={{ gap: "24px" }}
        >
          {/* GIÁ ĐÃ BAO GỀM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-md"
            style={{ borderRadius: "20px", padding: "32px" }}
          >
            <h3 className="text-[#BE1A1A] font-display font-bold text-lg sm:text-xl mb-6 uppercase tracking-[0.1em]">
              Giá đã bao gồm
            </h3>
            <ul className="space-y-4">
              {pricingIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#2a0a0a] text-sm sm:text-base font-body"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#BE1A1A] text-white flex items-center justify-center">
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
            className="bg-[#BE1A1A] text-white shadow-md"
            style={{ borderRadius: "20px", padding: "32px" }}
          >
            <h3 className="text-[#F7D87F] font-display font-bold text-lg sm:text-xl mb-6 uppercase tracking-[0.1em]">
              Có thể phát sinh
            </h3>
            <ul className="space-y-4">
              {pricingExtra.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white text-sm sm:text-base font-body"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7D87F] text-[#BE1A1A] flex items-center justify-center">
                    <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* =================== STYLES CHO RANGE INPUT =================== */}
      <style jsx>{`
        .pricing-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(
            to right,
            #BE1A1A 0%,
            #BE1A1A var(--pct),
            rgba(190, 26, 26, 0.2) var(--pct),
            rgba(190, 26, 26, 0.2) 100%
          );
        }
        .pricing-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #ffffff;
          border: 4px solid #BE1A1A;
          cursor: grab;
          box-shadow: 0 4px 12px rgba(190, 26, 26, 0.35);
          transition: transform 0.15s ease;
        }
        .pricing-range::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .pricing-range:active::-webkit-slider-thumb {
          cursor: grabbing;
          transform: scale(1.15);
        }
        .pricing-range::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #ffffff;
          border: 4px solid #BE1A1A;
          cursor: grab;
          box-shadow: 0 4px 12px rgba(190, 26, 26, 0.35);
        }

        /* ---- Số tiền Đơn giá & Tổng cộng: cùng 1 kích thước 100% ---- */
        .pricing-figure {
          font-size: 48px;
          white-space: nowrap;
        }
        .pricing-suffix-currency {
          font-size: 24px;
        }
        .pricing-suffix-unit {
          font-size: 16px;
        }
        @media (max-width: 640px) {
          .pricing-figure {
            font-size: 36px;
          }
          .pricing-suffix-currency {
            font-size: 18px;
          }
          .pricing-suffix-unit {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
