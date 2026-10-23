"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navigation } from "@/data/content";
import { useActiveSection, useBodyScrollLock, useScrollY } from "@/lib/hooks";

const sectionIds = [
  "ve-chung-toi",
  "san-pham",
  "tao-dau-an",
  "mock-up",
  "quy-trinh",
  "bang-gia",
  "lien-he",
  "dat-hang",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const scrollY = useScrollY();
  useBodyScrollLock(mobileOpen);

  const scrolled = scrollY > 20;
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      {/* Navbar — mỏng 70px, center-focused */}
      <header
        className={`fixed inset-x-0 top-0 z-[9999] flex h-16 items-center justify-center bg-[#BE1A1A] px-3 transition-colors duration-300 sm:px-6 lg:h-[70px] xl:px-[30px] ${
          scrolled ? "border-b border-[#F7D87F]/40" : "border-b border-transparent"
        }`}
      >
        {/* ===== HAMBURGER — góc trái tuyệt đối ===== */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-[#F7D87F] transition-colors hover:text-white sm:left-5 xl:left-[30px]"
          aria-label={navigation.hamburgerLabel}
          aria-expanded={mobileOpen}
          aria-controls="lln-mobile-navigation"
        >
          <Menu className="w-7 h-7" strokeWidth={2.5} />
        </button>

        {/* ===== CỤM MENU Ở GIỮA ===== */}
        <div className="nav-center-cluster">
          {/* Menu trái: VỀ CHÚNG TÔI + SẢN PHẨM */}
          <NavLinkItem item={navigation.left[0]} active={activeId === navigation.left[0].href.slice(1)} />
          <NavLinkItem item={navigation.left[1]} active={activeId === navigation.left[1].href.slice(1)} />

          {/* LOGO — to lên 30% */}
          <Link href="#ve-chung-toi" aria-label="Lụa Là Nón">
            <Image
              src={brand.navLogo}
              alt={brand.name}
              width={100}
              height={100}
              className="h-10 w-auto object-contain sm:h-11 lg:h-[50px] xl:scale-[1.15]"
              priority
            />
          </Link>

          {/* Menu phải: MOCK UP + QUY TRÌNH + BẢNG GIÁ */}
          <NavLinkItem item={navigation.right[0]} active={activeId === navigation.right[0].href.slice(1)} />
          <NavLinkItem item={navigation.right[1]} active={activeId === navigation.right[1].href.slice(1)} />
          <NavLinkItem item={navigation.right[2]} active={activeId === navigation.right[2].href.slice(1)} />
        </div>

        {/* ===== CTA — góc phải tuyệt đối ===== */}
        <Link
          href={navigation.cta.href}
          className="cta-pulse-btn absolute right-3 top-1/2 sm:right-6 xl:right-[30px]"
        >
          <span className="sm:hidden">ĐẶT NÓN</span>
          <span className="hidden sm:inline">ĐẶT NÓN NGAY</span>
        </Link>
      </header>

      {/* Hamburger Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex flex-col overflow-y-auto bg-[#BE1A1A] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative flex items-center justify-between px-6 py-4 border-b border-[#F7D87F]/20">
              <Link href="#ve-chung-toi" onClick={handleLinkClick} className="flex items-center gap-3">
                <Image src={brand.navLogo} alt={brand.name} width={40} height={40} className="w-10 h-10 object-contain" />
                <span className="text-[#F7D87F] text-sm font-display font-bold uppercase tracking-[0.2em]">{brand.name}</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-[#F7D87F] hover:text-white transition-colors p-2" aria-label={navigation.closeLabel}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav id="lln-mobile-navigation" className="relative flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
              {[...navigation.left, ...navigation.right].map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-4 text-[#F7D87F] hover:text-white font-display font-semibold text-2xl uppercase tracking-[0.15em] py-4 border-b border-[#F7D87F]/15 transition-colors group"
                  >
                    <span className="text-sm font-mono text-[#F7D87F]/40 group-hover:text-white">0{i + 1}</span>
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }} className="mt-8">
                <Link href={navigation.cta.href} onClick={handleLinkClick} className="btn-gradient-gold w-full justify-center text-base">
                  {navigation.cta.label}
                </Link>
              </motion.div>
            </nav>

            <div className="relative px-6 py-6 border-t border-[#F7D87F]/20 text-center">
              <p className="text-[#F7D87F]/60 text-xs uppercase tracking-[0.25em]">Nón lá trong tay — Việt Nam bên mình</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS — Nav center cluster + CTA Pulse */}
      <style>{`
        .nav-center-cluster {
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* CTA Pulse */
        @keyframes cta-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(247, 216, 127, 0.6), 0 0 12px 4px rgba(247, 216, 127, 0.3);
            transform: translateY(-50%) scale(1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(247, 216, 127, 0), 0 0 24px 10px rgba(247, 216, 127, 0.5);
            transform: translateY(-50%) scale(1.04);
          }
        }
        .cta-pulse-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F7D87F 0%, #e8c84a 100%);
          color: #BE1A1A;
          font-family: var(--font-body), sans-serif;
          font-weight: 700;
          font-size: 12px;
          padding: 10px 14px;
          border-radius: 9999px;
          animation: cta-pulse 2s ease-in-out infinite;
          cursor: pointer;
          transition: filter 0.2s;
          white-space: nowrap;
        }
        .cta-pulse-btn:hover {
          filter: brightness(1.05);
          animation-play-state: paused;
        }

        /* Mobile: centered brand logo and compact CTA. */
        @media (min-width: 640px) {
          .cta-pulse-btn { font-size: 13px; padding: 11px 18px; }
        }
        @media (min-width: 1280px) {
          .nav-center-cluster { gap: 32px; }
          .cta-pulse-btn { font-size: 16px; padding: 12px 28px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-pulse-btn { animation: none; transform: translateY(-50%); }
        }
      `}</style>
    </>
  );
}

function NavLinkItem({ item, active }: { item: { label: string; href: string }; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={`hidden xl:inline-flex text-[#F7D87F] text-sm font-semibold uppercase tracking-[0.14em] px-3 py-2 rounded-full border transition-all duration-300 ${
        active
          ? "border-[#F7D87F] bg-[#F7D87F]/10 text-white"
          : "border-transparent hover:border-[#F7D87F]/40 hover:text-white"
      }`}
    >
      {item.label}
    </Link>
  );
}
