"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/content";

/**
 * Icon cho 3 nền tảng đầu dùng inline SVG từ simple-icons.org — chính xác 100%.
 * Threads dùng ảnh PNG chính hãng (image_65b021.png) để đảm bảo tỉ lệ đồng đều.
 */
const socialIcons: Record<string, JSX.Element> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
};

export default function SocialSection() {
  return (
    <section id="lien-he" className="relative py-20 sm:py-28 overflow-hidden bg-white">
      {/* Silk texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
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
            04/ Kết nối
          </p>
          <h2 className="font-display italic text-gradient-red text-4xl sm:text-5xl md:text-6xl leading-none mb-4">
            Tìm Lụa qua đâu?
          </h2>
          <p className="text-[#2a0a0a]/70 font-body text-base sm:text-lg max-w-2xl mx-auto">
            Theo dõi Lụa Là Nón trên các nền tảng để cập nhật sản phẩm mới, ưu đãi và những câu chuyện đằng sau từng chiếc nón.
          </p>
        </motion.div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#BE1A1A]/10 hover:border-[#BE1A1A] shadow-md hover:shadow-[0_20px_50px_rgba(190,26,26,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative bg blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: social.bgColor }}
              />

              {/* Polka dots in card */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #BE1A1A 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: social.bgColor,
                    color: social.color,
                  }}
                >
                  {social.id === "threads" ? (
                    // Threads dùng ảnh PNG chính hãng (image_65b021.png)
                    <Image
                      src="/images/threads-logo.png"
                      alt="Threads logo"
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                      priority
                    />
                  ) : (
                    <div className="w-9 h-9">{socialIcons[social.id]}</div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#BE1A1A]">
                      {social.name}
                    </h3>
                    <ArrowUpRight
                      className="w-6 h-6 text-[#BE1A1A] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      strokeWidth={2.5}
                    />
                  </div>
                  <p className="font-body text-sm font-semibold text-[#BE1A1A]/70 uppercase tracking-wider mb-3">
                    {social.handle}
                  </p>
                  <p className="font-body text-sm sm:text-base text-[#2a0a0a]/80 leading-relaxed">
                    {social.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center gap-2 text-[#BE1A1A] font-body font-bold text-sm uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
                    Truy cập
                    <span className="text-lg leading-none">→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
