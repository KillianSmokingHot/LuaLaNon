"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, X, Move3D } from "lucide-react";

// ============================================================
//  DỮ LIỆU MÀU MOCK UP - 27 màu
//  Cấu trúc: id, name, hexCode, image
// ============================================================
const MOCKUP_COLORS = [
  { id: "01", name: "Vàng tươi",      hexCode: "#FFD700", image: "/images/mockup-colors/productmockup/01_vang-tuoi.png" },
  { id: "02", name: "Xanh dương",     hexCode: "#4169E1", image: "/images/mockup-colors/productmockup/02_xanh-duong.png" },
  { id: "03", name: "Xanh lá",        hexCode: "#228B22", image: "/images/mockup-colors/productmockup/03_xanh-la.png" },
  { id: "04", name: "Hồng cánh sen",  hexCode: "#FFB7C5", image: "/images/mockup-colors/productmockup/04_hong-canh-sen.png" },
  { id: "05", name: "Đỏ tươi",       hexCode: "#DC143C", image: "/images/mockup-colors/productmockup/05_do-tuoi.png" },
  { id: "06", name: "Xanh ngọc",     hexCode: "#00A86B", image: "/images/mockup-colors/productmockup/06_xanh-ngoc.png" },
  { id: "07", name: "Tím đậm",       hexCode: "#6B3FA0", image: "/images/mockup-colors/productmockup/07_tim-dam.png" },
  { id: "08", name: "Trắng",         hexCode: "#FFFFFF", image: "/images/mockup-colors/productmockup/08_trang.png" },
  { id: "09", name: "Hồng phấn",     hexCode: "#FFB6C1", image: "/images/mockup-colors/productmockup/09_hong-phan.png" },
  { id: "10", name: "Hồng mâm mướp", hexCode: "#FF69B4", image: "/images/mockup-colors/productmockup/10_hong-mam.png" },
  { id: "11", name: "Xám nhạt",      hexCode: "#C0C0C0", image: "/images/mockup-colors/productmockup/11_xanh-xam-nhat.png" },
  { id: "12", name: "Xanh sữa",      hexCode: "#E8E8D4", image: "/images/mockup-colors/productmockup/12_xanh-sua.png" },
  { id: "13", name: "Kem",           hexCode: "#F5DEB3", image: "/images/mockup-colors/productmockup/13_kem.png" },
  { id: "14", name: "Đỏ đồng",      hexCode: "#B87333", image: "/images/mockup-colors/productmockup/14_do-do.png" },
  { id: "17", name: "Tím lavender",   hexCode: "#E6E6FA", image: "/images/mockup-colors/productmockup/17_tim-lavender.png" },
  { id: "18", name: "Vàng chanh",    hexCode: "#F7E98E", image: "/images/mockup-colors/productmockup/18_vang-chanh.png" },
  { id: "19", name: "Hồng pastel",   hexCode: "#FADADD", image: "/images/mockup-colors/productmockup/19_hong-pastel.png" },
  { id: "20", name: "Cam đào",       hexCode: "#FBCEB1", image: "/images/mockup-colors/productmockup/20_cam-dao.png" },
  { id: "21", name: "Xanh rêu",      hexCode: "#4A5D23", image: "/images/mockup-colors/productmockup/21_xanh-reu.png" },
  { id: "22", name: "Vàng chanh neon",hexCode: "#CCFF00", image: "/images/mockup-colors/productmockup/22_vang-chanh-neon.png" },
  { id: "23", name: "Xanh navy",     hexCode: "#1F4E79", image: "/images/mockup-colors/productmockup/23_xanh-navy.png" },
  { id: "24", name: "Nâu",           hexCode: "#8B4513", image: "/images/mockup-colors/productmockup/24_nau.png" },
  { id: "25", name: "Vàng mù tạt",   hexCode: "#D4A017", image: "/images/mockup-colors/productmockup/25_vang-mu-tat.png" },
  { id: "27", name: "Xanh cổ vịt",  hexCode: "#1D4E89", image: "/images/mockup-colors/productmockup/27_xanh-co-vit.png" },
  { id: "28", name: "Xanh bạc hà",  hexCode: "#98FF98", image: "/images/mockup-colors/productmockup/28_xanh-bac-ha.png" },
  { id: "29", name: "Hồng đào",      hexCode: "#FADADD", image: "/images/mockup-colors/productmockup/29_hong-dao.png" },
  { id: "31", name: "Đen",           hexCode: "#1A1A1A", image: "/images/mockup-colors/productmockup/31_den.png" },
];

export default function MockUpSection() {
  // ---- States ----
  const [selectedColor, setSelectedColor] = useState(MOCKUP_COLORS[0]);
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [scale, setScale] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // ---- Handlers ----
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoImage(url);
    }
  };

  const handleRemoveLogo = () => {
    setLogoImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleColorSelect = (color: (typeof MOCKUP_COLORS)[number]) => {
    setSelectedColor(color);
  };

  // Calculate logo transform
  const logoTransform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) rotate(${rotate}deg) scale(${scale / 100})`;

  return (
    <section
      id="mock-up"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "#c1121f" }}
    >
      {/* Polka dot pattern - giảm opacity xuống 0.05 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #f6df96 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-[#f6df96] uppercase tracking-[0.25em] text-xs sm:text-sm font-body font-semibold mb-3">
            04/ MOCK UP
          </p>
          <h2 className="section-title">
            Tạo mock up của riêng bạn ngay nào!
          </h2>
          <p className="section-subtitle">
            Tải logo lên và điều chỉnh vị trí, kích thước để xem trước sản phẩm móc khóa nón lá
          </p>
        </motion.div>

        {/* =================== MAIN LAYOUT: 2 CỘT =================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start"
        >
          {/* ----- CỘT TRÁI: PREVIEW (60%) ----- */}
          <div className="lg:col-span-3">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                backgroundColor: "#FFFDF5",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Ảnh mock up nón lá */}
              <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                <img
                  key={selectedColor.id}
                  src={selectedColor.image}
                  alt={`Mock up màu ${selectedColor.name}`}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.style.cssText = `
                      width: 70%;
                      height: 70%;
                      border-radius: 50%;
                      background-color: ${selectedColor.hexCode};
                      box-shadow: inset 0 -20px 40px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.1);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: ${isLightColor(selectedColor.hexCode) ? "#BE1A1A" : "#FFFFFF"};
                      font-family: 'Playfair Display', serif;
                      font-size: 24px;
                      font-weight: bold;
                    `;
                    fallback.textContent = selectedColor.name;
                    target.parentElement?.appendChild(fallback);
                  }}
                />
              </div>

              {/* Logo overlay */}
              {logoImage && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: logoTransform,
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <img
                    src={logoImage}
                    alt="Logo của bạn"
                    className="w-full h-full object-contain"
                    style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))" }}
                  />
                </div>
              )}

              {/* Badge màu đang chọn */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-sm font-body font-semibold shadow-lg"
                style={{ backgroundColor: "#BE1A1A" }}
              >
                {selectedColor.name}
              </div>

              {/* Placeholder hint khi chưa có logo */}
              {!logoImage && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-xs font-body">
                  Logo sẽ hiển thị ở đây
                </div>
              )}
            </div>
          </div>

          {/* ----- CỘT PHẢI: CONTROLS (40%) ----- */}
          <div className="lg:col-span-2 space-y-4">
            {/* A. BẢNG MÀU - COLOR CARDS */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <h3 className="font-display italic font-bold text-lg mb-4 text-[#c1121f]">
                Màu sắc
              </h3>

              {/* Container có thanh cuộn dọc */}
              <div className="color-cards-container">
                {/* Grid tự động rớt dòng */}
                <div className="color-cards-grid">
                {MOCKUP_COLORS.map((color) => {
                  const isActive = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => handleColorSelect(color)}
                      className={`color-card ${isActive ? "active" : ""}`}
                      aria-label={`Chọn màu ${color.name}`}
                    >
                      {/* Hình tròn màu có depth effect */}
                      <div
                        className="color-circle"
                        style={{ backgroundColor: color.hexCode }}
                      >
                        {/* Inner highlight for 3D effect */}
                        <div className="color-highlight" />
                        {/* Checkmark khi active */}
                        {isActive && (
                          <div className="check-mark">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isLightColor(color.hexCode) ? "#c1121f" : "#FFFFFF"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Tên màu */}
                      <span className="color-name">{color.name}</span>
                    </button>
                  );
                })}
                </div>
              </div>
            </div>

            {/* B. TẢI LOGO */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <h3 className="font-display italic font-bold text-lg mb-4 text-[#BE1A1A]">
                Logo / Hình ảnh
              </h3>

              {logoImage ? (
                <div className="relative">
                  <div className="rounded-xl overflow-hidden bg-gray-50 p-3">
                    <img
                      src={logoImage}
                      alt="Logo đã tải"
                      className="w-full h-24 object-contain"
                    />
                  </div>
                  <button
                    onClick={handleRemoveLogo}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-[#BE1A1A] text-white rounded-full flex items-center justify-center hover:bg-[#a01515] transition-colors shadow-lg"
                    aria-label="Xóa logo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="upload-btn w-full py-8 border-2 border-dashed border-[#BE1A1A]/30 rounded-xl hover:border-[#BE1A1A] hover:bg-[#BE1A1A]/5 transition-all"
                >
                  <Upload className="w-8 h-8 text-[#BE1A1A] mx-auto mb-2" />
                  <p className="text-[#2a0a0a] font-body text-sm font-medium">
                    Tải logo của bạn
                  </p>
                  <p className="text-[#2a0a0a]/50 font-body text-xs mt-1">
                    PNG, JPG, SVG (tối đa 5MB)
                  </p>
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* C. THANH TRƯỢT ĐIỀU CHỈNH */}
            <div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-white/20"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
            >
              <h3 className="font-display italic font-bold text-lg mb-4 text-[#BE1A1A] flex items-center gap-2">
                <Move3D className="w-5 h-5" />
                Điều chỉnh
              </h3>

              <div className="space-y-5">
                {/* Kích thước */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[#2a0a0a] font-body text-sm font-medium">
                      Kích thước
                    </label>
                    <span className="text-[#BE1A1A] font-body text-sm font-bold">{scale}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={200}
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="slider-brand"
                  />
                </div>

                {/* Xoay */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[#2a0a0a] font-body text-sm font-medium">
                      Xoay
                    </label>
                    <span className="text-[#BE1A1A] font-body text-sm font-bold">{rotate}°</span>
                  </div>
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    value={rotate}
                    onChange={(e) => setRotate(Number(e.target.value))}
                    className="slider-brand"
                  />
                </div>

                {/* Vị trí ngang */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[#2a0a0a] font-body text-sm font-medium">
                      Vị trí ngang
                    </label>
                    <span className="text-[#BE1A1A] font-body text-sm font-bold">{translateX}px</span>
                  </div>
                  <input
                    type="range"
                    min={-100}
                    max={100}
                    value={translateX}
                    onChange={(e) => setTranslateX(Number(e.target.value))}
                    className="slider-brand"
                  />
                </div>

                {/* Vị trí dọc */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[#2a0a0a] font-body text-sm font-medium">
                      Vị trí dọc
                    </label>
                    <span className="text-[#BE1A1A] font-body text-sm font-bold">{translateY}px</span>
                  </div>
                  <input
                    type="range"
                    min={-100}
                    max={100}
                    value={translateY}
                    onChange={(e) => setTranslateY(Number(e.target.value))}
                    className="slider-brand"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =================== STYLES =================== */}
      <style jsx>{`
        /* =================== SECTION TITLE =================== */
        .section-title {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          font-size: 3rem;
          line-height: 1.1;
          color: #f6df96;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* =================== SECTION SUBTITLE =================== */
        .section-subtitle {
          font-family: var(--font-body), sans-serif;
          font-size: 1.125rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 1rem;
          max-width: 36rem;
          margin-left: auto;
          margin-right: auto;
        }

        /* =================== COLOR CARDS CONTAINER (SCROLLABLE) =================== */
        .color-cards-container {
          max-height: 380px;
          overflow-y: auto;
          padding-right: 6px;
          margin-right: -6px;
        }

        .color-cards-container::-webkit-scrollbar {
          width: 6px;
        }
        .color-cards-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        .color-cards-container::-webkit-scrollbar-thumb {
          background: rgba(193, 18, 31, 0.3);
          border-radius: 3px;
        }
        .color-cards-container::-webkit-scrollbar-thumb:hover {
          background: rgba(193, 18, 31, 0.5);
        }

        /* =================== COLOR CARDS GRID (AUTO-FILL) =================== */
        .color-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
          gap: 10px;
        }

        /* =================== COLOR CARD COMPONENT =================== */
        .color-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          padding: 6px;
          border-radius: 10px;
          border: 2px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .color-card:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .color-card.active {
          border-color: #f6df96;
          background: rgba(255, 255, 255, 0.15);
        }

        /* =================== COLOR CIRCLE =================== */
        .color-circle {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          box-shadow:
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            inset 0 -2px 4px rgba(0, 0, 0, 0.12),
            0 2px 6px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .color-card:hover .color-circle {
          transform: scale(1.08);
          box-shadow:
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            inset 0 -2px 4px rgba(0, 0, 0, 0.12),
            0 4px 10px rgba(0, 0, 0, 0.18);
        }
        .color-card.active .color-circle {
          transform: scale(1.08);
          box-shadow:
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            inset 0 -2px 4px rgba(0, 0, 0, 0.12),
            0 4px 12px rgba(246, 223, 150, 0.35);
        }

        /* Highlight shine effect */
        .color-highlight {
          position: absolute;
          top: 4px;
          left: 6px;
          width: 12px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          filter: blur(2px);
        }

        /* =================== CHECK MARK =================== */
        .check-mark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
        }

        /* =================== COLOR NAME =================== */
        .color-name {
          font-size: 11px;
          font-weight: 500;
          color: #2a0a0a;
          text-align: center;
          line-height: 1.2;
          max-width: 60px;
        }
        .color-card.active .color-name {
          font-weight: 600;
          color: #f6df96;
        }

        /* =================== UPLOAD BUTTON =================== */
        .upload-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        /* =================== BRAND SLIDER (ĐỎ + VÀNG) =================== */
        .slider-brand {
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
            #BE1A1A 50%,
            #F7D87F 50%,
            #F7D87F 100%
          );
        }
        .slider-brand::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #BE1A1A;
          cursor: grab;
          box-shadow: 0 2px 8px rgba(190, 26, 26, 0.3);
          transition: transform 0.15s ease;
        }
        .slider-brand::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .slider-brand::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.15);
        }
        .slider-brand::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #BE1A1A;
          cursor: grab;
          box-shadow: 0 2px 8px rgba(190, 26, 26, 0.3);
        }

        /* =================== GRADIENT TEXT =================== */
        .text-gradient-red {
          background: linear-gradient(135deg, #BE1A1A 0%, #8B1425 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* =================== RESPONSIVE =================== */
        @media (max-width: 640px) {
          .color-cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
            gap: 8px;
          }
          .color-circle {
            width: 32px;
            height: 32px;
          }
          .color-name {
            font-size: 9px;
          }
          .color-card {
            padding: 4px;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  );
}

// Helper function để xác định màu sáng/tối cho icon checkmark
function isLightColor(hex: string): boolean {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 160;
}
