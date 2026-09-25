"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, KeyRound, Building2 } from "lucide-react";
import { useCases } from "@/data/content";

export default function UseCases() {
  return (
    <section id="tao-dau-an" className="relative overflow-hidden">
      {/* 2-column split — mỗi cột 100vh */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* LEFT — Cá nhân: nền vàng nhạt */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
          style={{ backgroundColor: "#F8EBAB" }}
        >
          <div className="">
            {/* Kicker */}
            <p className="text-[#BE1A1A] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-body font-semibold mb-4">
              {useCases.individual.title}
            </p>

            {/* Headline — nhỏ gọn hơn */}
            <h2 className="font-display italic text-[#BE1A1A] font-bold leading-tight mb-6 text-2xl sm:text-3xl lg:text-4xl">
              {useCases.individual.headline1}
              <br />
              {useCases.individual.headline2}
            </h2>

            {/* Tags */}
            <div className="flex flex-col gap-2 mb-8">
              {useCases.individual.tags.map((tag) => (
                <div
                  key={tag}
                  className="text-[#BE1A1A] uppercase tracking-[0.15em] text-[11px] sm:text-xs font-body font-semibold"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Image placeholder — landscape 16/9 */}
            <div className="relative w-full aspect-video rounded-2xl border-[2px] border-[#BE1A1A] bg-gradient-to-br from-[#FDF6DC] to-[#F7D87F] mb-8 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-3 rounded-xl border border-dashed border-[#BE1A1A]/30" />
              <KeyRound className="w-16 h-16 text-[#BE1A1A] opacity-80" strokeWidth={1.5} />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#BE1A1A] text-[#F7D87F] text-[9px] uppercase tracking-wider font-bold">
                Phụ kiện cá nhân
              </div>
            </div>

            {/* CTA */}
            <Link
              href={useCases.individual.cta.href}
              className="inline-flex items-center gap-2 text-[#BE1A1A] font-display font-bold text-sm sm:text-base uppercase tracking-[0.12em] group hover:gap-3 transition-all"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={3} />
              {useCases.individual.cta.label}
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — Tổ chức: nền đỏ đậm */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
          style={{ backgroundColor: "#BE1A1A" }}
        >
          <div className="">
            {/* Kicker */}
            <p className="text-[#F7D87F] uppercase tracking-[0.25em] text-[10px] sm:text-xs font-body font-semibold mb-4">
              {useCases.organization.title}
            </p>

            {/* Headline */}
            <h2 className="font-display italic text-white font-bold leading-tight mb-6 text-2xl sm:text-3xl lg:text-4xl">
              {useCases.organization.headline1}
              <br />
              {useCases.organization.headline2}
            </h2>

            {/* Tags */}
            <div className="flex flex-col gap-2 mb-8">
              {useCases.organization.tags.map((tag) => (
                <div
                  key={tag}
                  className="text-white uppercase tracking-[0.15em] text-[11px] sm:text-xs font-body font-semibold"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Image placeholder — landscape 16/9 */}
            <div className="relative w-full aspect-video rounded-2xl border-[2px] border-[#F7D87F] bg-gradient-to-br from-[#D0311E] to-[#BE1A1A] mb-8 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-3 rounded-xl border border-dashed border-[#F7D87F]/30" />
              <Building2 className="w-16 h-16 text-[#F7D87F] opacity-90" strokeWidth={1.5} />
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#F7D87F] text-[#BE1A1A] text-[9px] uppercase tracking-wider font-bold">
                Quà tặng doanh nghiệp
              </div>
            </div>

            {/* CTA */}
            <Link
              href={useCases.organization.cta.href}
              className="inline-flex items-center gap-2 text-[#F7D87F] font-display font-bold text-sm sm:text-base uppercase tracking-[0.12em] group hover:gap-3 transition-all"
            >
              <ArrowRight className="w-5 h-5" strokeWidth={3} />
              {useCases.organization.cta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
