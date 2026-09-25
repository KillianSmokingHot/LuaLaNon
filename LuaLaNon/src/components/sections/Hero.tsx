"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand, heroCopy } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="ve-chung-toi"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #BE1A1A 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow vàng góc trên-phải */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(247,216,127,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Glow đỏ góc dưới-trái */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(190,26,26,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Main content — căn giữa */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        {/* Kicker — nhỏ hơn */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#BE1A1A] text-[10px] sm:text-xs font-body font-semibold uppercase tracking-[0.4em] mb-0"
          style={{ lineHeight: 1 }}
        >
          {heroCopy.kicker}
        </motion.p>

        {/* Ảnh typo — nhỏ hơn */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-[520px] sm:max-w-[680px] lg:max-w-[760px] mt-2 mb-0"
        >
          <div className="drop-shadow-[0_4px_16px_rgba(190,26,26,0.12)] w-full">
            <Image
              src={brand.heroImage}
              alt="Lụa Là Nón — thương hiệu móc khóa nón lá lụa"
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Tagline — nhỏ hơn */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-[#BE1A1A] font-display italic font-normal leading-tight mt-2 mb-0"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)" }}
        >
          {heroCopy.tagline}
        </motion.h1>

        {/* Sub — nhỏ hơn */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-[#2a0a0a]/70 text-[11px] sm:text-xs md:text-sm font-body font-light leading-relaxed max-w-lg mt-3 mb-0 px-2"
        >
          {heroCopy.subHeadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="mt-5 mb-0"
        >
          <Link
            href={heroCopy.primaryCta.target}
            className="btn-gradient-red group text-[11px] sm:text-xs"
          >
            {heroCopy.primaryCta.label}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
