"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { brand, contact, footerConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#BE1A1A" }}
    >
      {/* Top gold dotted strip */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand column */}
          <div>
            <Link href="#ve-chung-toi" className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 overflow-hidden rounded-lg bg-white/95 flex items-center justify-center">
                <Image
                  src={brand.navLogo}
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-xl text-white font-display font-bold tracking-wide">
                {brand.name}
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-body">
              {footerConfig.brandDescription}
            </p>
            <p className="text-[#F7D87F] text-xs uppercase tracking-[0.25em] font-body font-semibold">
              Nón lá trong tay — Việt Nam bên mình
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#F7D87F] uppercase tracking-[0.15em]">
              Liên kết nhanh
            </h3>
            <ul className="space-y-3">
              {footerConfig.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-[#F7D87F] transition-colors text-sm font-body inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#F7D87F] opacity-50 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5 text-[#F7D87F] uppercase tracking-[0.15em]">
              Liên hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-[#F7D87F] flex-shrink-0" />
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="text-white/75 hover:text-[#F7D87F] transition-colors text-sm font-body"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-[#F7D87F] flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/75 hover:text-[#F7D87F] transition-colors text-sm font-body break-all"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[#F7D87F] flex-shrink-0" />
                <span className="text-white/75 text-sm font-body leading-relaxed">
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15 text-center">
          <p className="text-white/50 text-xs sm:text-sm font-body tracking-wide">
            {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
