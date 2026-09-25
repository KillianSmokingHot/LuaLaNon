# Kế hoạch: Viết lại Landing Page "Lụa Là Nón" — Pixel-Perfect theo Mockup

## Context (Bối cảnh)

Người dùng đã upload 3 file thiết kế (1 PDF mockup + 2 ảnh PNG) và yêu cầu viết lại Landing Page "Lụa Là Nón" theo đúng tỉ lệ, layout, màu sắc, typography và các hiệu ứng tương tác cao cấp (Apple-style scroll, Scrollspy, Intersection Observer, gradient text, outline text, dashed lines, pulse animation, marquee, hamburger menu overlay).

**Trạng thái dự án hiện tại:**
- Next.js 16.3.5 (App Router) + React 19 + TypeScript + Tailwind CSS 3.4 + Framer Motion 11 + Lucide Icons + React Hook Form + Zod đã được cài sẵn trong `c:\Users\HP\OneDrive\Documents\webbanhang\LuaLaNon`.
- Đã có cấu trúc thư mục `src/app/`, `src/components/layout/`, `src/components/sections/`, `src/components/ui/`, `src/data/content.ts`.
- Đã có sẵn file `public/images/cover.png`, `logo-typography.png`, `logo.png`, `pattern-tho-cam.png`.
- Đã copy thêm file `hero-typography.png` (từ 1.png — ảnh typo đỏ lớn) và `logo-white.png` (từ 2.png — logo trắng nền trong suốt) vào `public/images/`.
- File README và AGENTS.md yêu cầu **KHÔNG dùng thư viện ngoài**, tận dụng tối đa Tailwind + Framer Motion đã cài.
- **KHÔNG cần tạo venv hay folder mới** — dự án Next.js đã có sẵn, chỉ cần `npm run dev` để chạy.

**Vấn đề cần giải quyết:**
- Các section hiện tại dùng placeholder `placehold.co` và chưa khớp với mockup PDF (sai cấu trúc 2 cột Apple-scroll ở Product, thiếu section "Tìm Lụa qua đâu?", thiếu outline text, dashed lines, watermark numbers, hamburger menu overlay với scrollspy, anchor links đúng tên section).
- Header hiện dùng brand text làm logo thay vì dùng ảnh logo trắng `logo-white.png` đặt giữa navbar.
- Thông tin liên hệ trong `content.ts` còn là placeholder, cần thay bằng thông tin thật từ brief (SĐT 0795647905, email lualanon.vn@gmail.com, địa chỉ 69/68 Đặng Thùy Trâm...).
- Floating Contact Bar thiếu các link Facebook/Instagram/TikTok/Threads và SĐT/Zalo thật.

## Mục tiêu cuối cùng

Landing page hoàn chỉnh với 8 section, hiệu ứng mượt mà, đạt độ hoàn thiện pixel-perfect theo mockup, sẵn sàng deploy.

---

## Cấu trúc section mới (theo thứ tự cuộn)

| # | Section | id | Nền | Mô tả ngắn |
|---|---|---|---|---|
| 1 | **Hero** | `ve-chung-toi` | Trắng ngà/be nhạt + polka dot mờ | Ảnh typo đỏ lớn "Lụa Là Nón" ở giữa, kicker "CHÚNG TÔI LÀ", tagline "Nón lá trong tay, Việt Nam bên mình", CTA gradient đỏ |
| 2 | **ProductShowcase** | `san-pham` | Trắng | Apple-style 2 cột: trái sticky image (fade theo mục), phải scroll 4 mục (Chất liệu / Cá nhân hóa / Chi phí / Hoàn thiện) — chữ highlight đỏ khi active |
| 3 | **UseCases** | `tao-dau-an` | Vàng be + đỏ chia đôi | Grid 2 cột: "Phụ kiện cho mình, Quà tặng cho người mình thương" (trái, nền vàng be) + "Một món quà nhỏ, Một nhận diện lớn" (phải, nền đỏ). Có outline text "BRANDING" / "TẠO DẤU ẤN RIÊNG" |
| 4 | **HowItWorks** | `quy-trinh` | Vàng be nhạt | 5 bước ngang với dashed line kết nối, watermark số 01–05 mờ chìm phía sau, nhãn "Quy trình 5 bước thuận tiện, minh bạch" |
| 5 | **Pricing** | `bang-gia` | Vàng be + polka dot | Carousel ngang các card giá (30k / 27k / 24k / 20k), card "PHỔ BIẾN" highlight đỏ có tag vàng, bên dưới chia 2 cột "GIÁ ĐÃ BAO GỒM" / "CÓ THỂ PHÁT SINH" |
| 6 | **SocialSection** | `lien-he` (mới) | Trắng | "Tìm Lụa qua đâu?" — 4 card social: Facebook, Instagram, TikTok, Threads với icon lớn + hover effect |
| 7 | **FinalCTA** | `dat-hang` | Đỏ + dot pattern | Split 2 cột: trái headline "MỖI CHIẾC NÓN, MỘT DẤU ẤN RIÊNG" (Playfair, chữ NÓN và RIÊNG nhấn màu vàng), phải form nền vàng be với Họ tên / SĐT / SL / Bạn đặt cho / Yêu cầu / nút CTA gradient |
| 8 | **Footer** | — | Đỏ đậm | Logo nhỏ, copyright, liên hệ thật, quick links |

---

## File cần thay đổi / tạo mới

### 1. `src/app/globals.css` — Bổ sung
- Đổi font body từ `Be Vietnam Pro` sang **Montserrat** (theo brief).
- Thêm font variable `--font-montserrat`.
- Thêm các utility classes mới:
  - `.silk-texture` (radial-gradient dot pattern, opacity 4–5%, dùng cho các section nền sáng)
  - `.silk-wave` (SVG lượn sóng inline, opacity 3–5%, đặt góc section)
  - `.text-outline-red` (`-webkit-text-stroke: 1.5px #BE1A1A; color: transparent`)
  - `.text-outline-gold` (`-webkit-text-stroke: 1px #F7D87F; color: transparent`)
  - `.dashed-connector` (dashed line `border-top: 2px dashed` cho process timeline)
  - `.watermark-number` (font Playfair, opacity 6%, position absolute)
  - `.btn-gradient-red` (linear-gradient đỏ, hover sáng hơn, shadow)
  - `@keyframes marquee`, `shimmer`, `pulse-ring` (đã có marquee, thêm pulse-ring cho floating contact)

### 2. `src/app/layout.tsx` — Sửa
- Import `Montserrat` thay cho `Be_Vietnam_Pro`:
  ```ts
  import { Playfair_Display, Montserrat } from "next/font/google";
  const montserrat = Montserrat({ subsets: ["vietnamese", "latin"], weight: ["300","400","500","600","700","800"], variable: "--font-body" });
  ```
- Áp dụng `${playfair.variable} ${montserrat.variable}` cho `<html>`.

### 3. `src/data/content.ts` — Sửa toàn bộ
- `brand`: thêm `heroImage: "/images/hero-typography.png"`, `navLogo: "/images/logo-white.png"`.
- `navigation`: cập nhật theo mockup:
  - `left`: `VỀ CHÚNG TÔI` (#ve-chung-toi), `SẢN PHẨM` (#san-pham)
  - `center`: logo image
  - `right`: `QUY TRÌNH` (#quy-trinh), `BẢNG GIÁ` (#bang-gia), CTA `ĐẶT NÓN NGAY` (#dat-hang, nền vàng)
- `contact`: cập nhật thông tin thật
  - `phone`: "0795647905"
  - `phoneRaw`: "+84795647905"
  - `email`: "lualanon.vn@gmail.com"
  - `address`: "69/68 Đặng Thùy Trâm, Phường Bình Lợi Trung, TP. Hồ Chí Minh"
  - `facebook`: link FB thật
  - `instagram`: link IG thật
  - `tiktok`: link TikTok thật
  - `threads`: link Threads thật
  - `zalo`: "https://zalo.me/0795647905"
  - `messenger`: "https://m.me/lualanon" (giữ)
- `floatingContactConfig.channels`: thay bằng `[zalo, messenger, phone]` (đúng SĐT thật).
- Thêm `socials`: array 4 nền tảng với `name`, `url`, `color`, `icon` (sẽ dùng lucide-react icon tạm Facebook/Instagram vì lucide không có TikTok/Threads native — sẽ dùng inline SVG cho TikTok/Threads để chính xác).
- `productFeatures`: thêm `imagePosition` (left/right) để ProductShowcase 2 cột hiển thị đúng.
- `useCases`: thêm `imagePlaceholder` để render khối hình.
- Thêm `processWatermarkNumbers: ["01","02","03","04","05"]`.
- `pricingTiers`: giữ nguyên, đánh dấu highlight = "50 – 99 nón".
- `finalCta.headlineLine2`: "MỘT DẤU ẤN RIÊNG." — highlight từ "RIÊNG" bằng cách tách thành mảng `["MỘT DẤU ẤN ", "RIÊNG."]` với cờ `accent: true`.
- `leadFormConfig`: giữ cấu trúc, chỉ đổi tiêu đề form cho khớp mockup ("GỬI YÊU CẦU THIẾT KẾ").

### 4. `src/components/layout/Header.tsx` — Viết lại hoàn toàn
- Sticky top, nền mặc định Đỏ (`bg-[#BE1A1A]`).
- Layout 3 phần:
  - **Trái**: icon Hamburger (3 gạch ngang) → mở overlay full-screen trượt từ phải (Framer Motion AnimatePresence) với danh sách anchor links. Click link → smooth-scroll + đóng menu.
  - **Giữa-trái**: link "VỀ CHÚNG TÔI" / "SẢN PHẨM"
  - **Giữa**: `<Image src="/images/logo-white.png" />` (rộng ~64px)
  - **Giữa-phải**: link "QUY TRÌNH" / "BẢNG GIÁ"
  - **Phải**: button CTA "ĐẶT NÓN NGAY" nền vàng #F7D87F, chữ đỏ, border-radius pill.
- **Scrollspy** dùng `IntersectionObserver` (custom hook `useActiveSection`) — section active → link đó có `border` viền vàng + scale.
- Khi cuộn qua section nền đỏ → navbar thêm `border-bottom: 1px solid #F7D87F` để tách.
- Smooth scroll đến section với `scroll-margin-top: 80px` để tránh bị navbar che.

### 5. `src/components/sections/Hero.tsx` — Viết lại
- Nền `bg-[#F9EBAA]` (vàng be) + dot pattern overlay opacity 5%.
- Bố cục dọc căn giữa:
  - Kicker "CHÚNG TÔI LÀ" (Montserrat, đỏ, letter-spacing 0.4em).
  - **Ảnh lớn** `hero-typography.png` (chiếm ~60% chiều rộng, max-width 800px).
  - Tagline "Nón lá trong tay, Việt Nam bên mình" (Playfair italic, đỏ đậm, có shadow nhẹ).
  - Sub-headline (Montserrat, body text, đen/xám đậm, max-w-2xl, text-justify).
  - CTA "TẠO CHIẾC NÓN CỦA BẠN NGAY →" (button gradient đỏ, hover sáng).
- Animation: Framer Motion fade-in + scale-up từng phần tử, delay lần lượt.
- Background decorative: thêm SVG sóng lụa cong ở góc dưới-trái và trên-phải (opacity 3-4%).

### 6. `src/components/sections/ProductShowcase.tsx` — Viết lại (Apple-style scroll)
- Header: kicker "01/ Về sản phẩm" + title gradient đỏ "Móc khóa nón lá lụa".
- Layout 2 cột (md+):
  - **Trái (sticky, position: sticky; top: 120px)**: 1 khối image-placeholder duy nhất. Theo lựa chọn của bạn: chỉ hiển thị khung outline bo cong (viền đỏ đậm 2px, bên trong nền vàng be nhạt + icon `KeyRound` hoặc `Tag` từ lucide-react mờ ở giữa, kích thước 96px). Số thứ tự lớn mờ chìm phía sau.
  - **Phải (scroll)**: 4 section nhỏ (min-height ~80vh), mỗi mục có số "01" (font Playfair, đỏ đậm, kích thước 3xl), tiêu đề "01 — Chất Liệu & Chất Lượng" (Montserrat bold đỏ, có border pill background), nội dung, divider ngang.
- **Intersection Observer** (custom hook `useScrollHighlight`):
  - Khi mục nào trong cột phải vào viewport → mục đó highlight (text đỏ + border), các mục khác mờ opacity-40.
  - Đồng thời cập nhật `currentFeature` → cột trái cross-fade icon/placeholder tương ứng (mỗi mục dùng icon khác nhau từ lucide: `Sparkles` cho chất liệu, `PenTool` cho cá nhân hóa, `Wallet` cho chi phí, `Package` cho hoàn thiện).

### 7. `src/components/sections/UseCases.tsx` — Viết lại (2 đường đi)
- Layout 2 cột ngang (50/50) full-height:
  - **Trái**: nền vàng be `#F8EBAB` + polka dot đỏ opacity 8%.
    - Headline Playfair italic đỏ: "Phụ kiện cho mình, Quà tặng cho người mình thương." (split 2 dòng).
    - List tags (Montserrat uppercase, đỏ): QUÀ TẶNG BẠN BÈ, QUÀ KỶ NIỆM, TRANG TRÍ TÚI, SẢN PHẨM LƯU NIỆM.
    - Image-placeholder ở dưới (rounded-3xl, hình nón lá cá nhân).
    - CTA dưới cùng: "→ TẠO DẤU ẤN RIÊNG" (mũi tên đỏ lớn + text đỏ).
    - Outline text "BRANDING" ở góc (Playfair, -webkit-text-stroke đỏ).
  - **Phải**: nền đỏ `#BE1A1A` + polka dot vàng opacity 10%.
    - Headline Playfair italic trắng: "Một món quà nhỏ. Một nhận diện lớn." (split 2 dòng).
    - List tags (trắng): QUÀ TẶNG SỰ KIỆN, CLB / ĐỘI NHÓM, QUÀ TẶNG DOANH NGHIỆP, QUÀ TẶNG KHÁCH HÀNG.
    - Image-placeholder (rounded-3xl, branding).
    - CTA: "→ TẠO DẤU ẤN DOANH NGHIỆP" (trắng).
    - Outline text "TẠO DẤU ẤN RIÊNG" ở góc (stroke vàng).
- Responsive: trên mobile, stack dọc.

### 8. `src/components/sections/HowItWorks.tsx` — Viết lại (5 bước + dashed line + watermark)
- Nền vàng be `#F9EBAA` + dot pattern đỏ opacity 6%.
- Header:
  - Kicker "02/ Về quy trình" (gradient đỏ).
  - Title gradient đỏ Playfair italic "Từ ý tưởng đến thành phẩm." (font size ~6xl).
  - Sub: "Quy trình 5 bước thuận tiện, minh bạch:"
- 5 bước ngang (lg+), 2 cột (sm-md), 1 cột (mobile):
  - **Watermark**: số "01" → "05" đặt `position: absolute` phía sau mỗi cột bước (font Playfair, 12xl, màu đỏ opacity 6%, z-index 0).
  - **Circle step**: vòng tròn 96px, viền đỏ 2px, nền trắng, chứa số "01" font Playfair đỏ bold.
  - **Connector line**: giữa 2 circles → dashed line (border-top: 2px dashed #BE1A1A) dùng `::after` pseudo-element. Chỉ hiển thị từ lg+ trở lên.
  - **Title**: "GỬI YÊU CẦU" (Montserrat bold uppercase, đỏ).
  - **Desc**: body text (xám đậm, max-w 180px, text-center).

### 9. `src/components/sections/Pricing.tsx` — Viết lại (carousel ngang)
- Nền vàng be `#F9EBAA` + polka dot đỏ opacity 8%.
- Header:
  - Kicker "03/ Bảng giá" (gradient đỏ).
  - Title gradient đỏ Playfair italic "Móc khóa nón lá lụa".
- **Carousel ngang** (custom slider không dùng lib ngoài — dùng `useRef` + `scrollBy` + buttons ‹ ›):
  - 4 card giá xếp ngang, gap 24px, `overflow-x-auto snap-x snap-mandatory` để vuốt cảm ứng.
  - Mỗi card: rounded-3xl, viền đỏ, padding 32px, text-center, **snap-center**.
  - Card highlight (PHỔ BIẾN): nền đỏ đậm `#BE1A1A`, chữ vàng, scale 110%, có badge vàng absolute trên đầu "☆ PHỔ BIẾN".
  - Giá: Playfair italic lớn (4xl), vnd đơn vị nhỏ bên dưới.
  - Buttons ‹ › đặt hai bên (mobile ẩn, dùng vuốt).
- Dưới carousel (chia 2 cột md+):
  - **Trái (card trắng)**: "GIÁ ĐÃ BAO GỒM" + 3 list item có checkmark đỏ.
  - **Phải (card đỏ)**: "CÓ THỂ PHÁT SINH" + 4 list item có dấu + vàng.

### 10. `src/components/sections/SocialSection.tsx` — TẠO MỚI
- id="lien-he", nền trắng + silk texture nhẹ.
- Header căn giữa:
  - Kicker "04/ Kết nối" (gradient đỏ).
  - Title Playfair "Tìm Lụa qua đâu?"
  - Sub ngắn.
- Grid 2x2 (md+) / 1 col (mobile) gồm 4 card:
  - **Icon**: dùng inline SVG từ simple-icons.org (chính xác 100% như icon gốc, không phụ thuộc lucide). Facebook #1877F2, Instagram gradient pink/orange, TikTok đen với chữ T, Threads đen.
  - Mỗi card: rounded-3xl, padding lớn, icon 56px, tên nền tảng (Playfair bold 2xl), mô tả ngắn, CTA "→ Truy cập".
  - Hiệu ứng hover: card lift (translate-y -8px), shadow đỏ, icon rotate nhẹ.
- Animation: fade-in từng card với stagger delay.

### 11. `src/components/sections/FinalCTA.tsx` — Viết lại (split form vàng be)
- Nền đỏ `#BE1A1A` + polka dot vàng opacity 8%.
- Layout 2 cột (md+), gap 0 (form dính sát section):
  - **Trái (padding rộng)**:
    - Headline Playfair cỡ 6xl, dòng 1 "MỖI CHIẾC NÓN," (vàng `#F7D87F`), dòng 2 "MỘT DẤU ẤN RIÊNG." (vàng).
    - Sub: "Điền thông tin hoặc liên hệ trực tiếp - đội ngũ Lụa Là Nón sẽ phản hồi bạn trong thời gian sớm nhất." (trắng opacity 80%).
  - **Phải**: form nền vàng be `#F8EBAB`, padding 48px, không bo góc bên phải.
    - Title: "GỬI YÊU CẦU THIẾT KẾ" (Playfair, đỏ, có underline đỏ dày).
    - Fields:
      - Họ và tên (input pill).
      - 2 cột: Số điện thoại + Số lượng dự kiến.
      - Bạn đặt cho: 2 radio "Cá nhân" / "Tổ chức" (radio custom với viền đỏ).
      - Yêu cầu của bạn (textarea).
    - Submit: button gradient đỏ full-width, pill, "GỬI YÊU CẦU →".
- **Logic submit form** (theo yêu cầu của bạn):
  - Đặt hằng số ở đầu file:
    ```ts
    const GOOGLE_SHEETS_WEBHOOK_URL = ""; // TODO: dán Google Apps Script URL hoặc SheetDB URL
    ```
  - Khi submit:
    1. `setIsSubmitting(true)` → button hiện spinner + text "Đang gửi...".
    2. Gọi song song 2 việc (Promise.allSettled):
       - `fetch(GOOGLE_SHEETS_WEBHOOK_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(data) })` — sẵn sàng khi URL được dán vào.
       - `await new Promise(r => setTimeout(r, 1500))` — đảm bảo loading hiển thị tối thiểu 1.5s.
    3. Nếu URL rỗng (chưa config) → vẫn cho submit thành công, console.log cảnh báo "Webhook URL chưa được cấu hình".
    4. Nếu URL có → fetch fire-and-forget (không block UI), chỉ cần đảm bảo UI mượt.
    5. Sau 1.5s → `setSubmitted(true)`, reset form, hiển thị success message.
  - Cấu trúc data gửi: `{ name, phone, quantity, orderFor, note, submittedAt: new Date().toISOString() }`.

### 12. `src/components/layout/Footer.tsx` — Sửa
- Thông tin liên hệ thật theo brief.
- Layout đơn giản hơn (ít cột hơn mockup yêu cầu "tinh gọn"): logo + tên thương hiệu trái, quick links giữa, thông tin liên hệ (SĐT, email, địa chỉ) phải, copyright dưới cùng.
- Social icons Facebook/IG/TikTok/Threads hàng ngang trên cùng.

### 13. `src/components/layout/FloatingContactBar.tsx` — Sửa
- Đổi icon: dùng icon riêng cho từng channel (Phone, MessageCircle cho Zalo, Messenger icon cho FB Messenger).
- Số kênh: 3 (Zalo + Messenger + Phone).
- Link thật theo `contact.facebook/zalo/phoneRaw`.
- Pulse animation cho cả 3 nút (CSS `@keyframes pulse-ring`).
- Mobile: thu gọn thành 1 nút toggle như hiện tại (giữ nguyên logic expand).

### 14. `src/app/page.tsx` — Sửa
- Import + render thêm `<SocialSection />` giữa `<Pricing />` và `<FinalCTA />`.
- Đổi id section:
  - Hero giữ `#ve-chung-toi` (thêm vào Hero.tsx)
  - ProductShowcase: `id="san-pham"`
  - UseCases: `id="tao-dau-an"`
  - HowItWorks: `id="quy-trinh"`
  - Pricing: `id="bang-gia"`
  - SocialSection: `id="lien-he"` (cho mục đích scrollspy)
  - FinalCTA: `id="dat-hang"`

### 15. `src/components/ui/` — Có thể thêm (không bắt buộc)
- Không cần tạo file mới trong `ui/` — tất cả hiệu ứng có thể làm inline.

---

## Thư viện / Package

**KHÔNG cài thêm package nào.** Tất cả stack đã có sẵn:
- Next.js 16.3.5, React 19, TypeScript
- Tailwind CSS 3.4 (đã có `tailwind.config` mặc định)
- Framer Motion 11 (animations)
- Lucide React (icons)
- React Hook Form + Zod (form)

Các icon TikTok và Threads **không có trong lucide-react** — sẽ dùng inline SVG đơn giản (path từ simple-icons.org) trong SocialSection và FloatingContactBar.

---

## Custom Hooks cần tạo

Tạo file `src/lib/hooks.ts` (mới):
- `useActiveSection(ids: string[])` — IntersectionObserver, trả về id section đang active để Scrollspy.
- `useScrollDirection()` — trả về 'up'/'down' để ẩn/hiện navbar tùy chọn.
- `useScrollHighlight(ids: string[])` — IntersectionObserver với rootMargin -40% 0px -40% 0px, trả về id đang ở giữa viewport.

---

## Verification (Cách kiểm tra)

1. **Build & Dev**:
   ```bash
   cd "c:\Users\HP\OneDrive\Documents\webbanhang\LuaLaNon"
   npm install   # nếu node_modules chưa có
   npm run dev   # mở http://localhost:3000
   ```

2. **Kiểm tra trực quan từng section theo mockup**:
   - Hero: ảnh typo đỏ có đúng tỉ lệ mockup không? Kicker "CHÚNG TÔI LÀ" nằm trên ảnh, tagline "Nón lá trong tay..." dưới ảnh?
   - ProductShowcase: cuộn xuống — ảnh trái có đổi theo mục không? Chữ mục active có chuyển đỏ không?
   - UseCases: outline text "BRANDING" / "TẠO DẤU ẤN RIÊNG" có hiển thị đúng stroke không?
   - HowItWorks: dashed line nối 5 bước có hiển thị không? Watermark số 01-05 có mờ chìm phía sau không?
   - Pricing: vuốt ngang carousel có mượt không? Card "PHỔ BIẾN" có nổi bật?
   - SocialSection: 4 card có hover effect nâng card không?
   - FinalCTA: form có nền vàng be, nút gradient đỏ không?
   - Footer: thông tin liên hệ đúng SĐT/email/địa chỉ thật không?
   - FloatingContactBar: 3 nút (Zalo + Messenger + Phone) có link đúng không? Có pulse animation không?

3. **Kiểm tra logic**:
   - Click vào Hamburger → overlay mở, click link → trang smooth-scroll đến section, overlay đóng.
   - Scroll qua các section → link tương ứng trên navbar có viền vàng (scrollspy).
   - Trên mobile (<768px), layout stack dọc đúng, hamburger menu hoạt động.

4. **Kiểm tra build production**:
   ```bash
   npm run build
   ```
   Đảm bảo không có lỗi TypeScript hay Next.js.

---

## Critical Files

| File | Hành động |
|---|---|
| [src/app/globals.css](LuaLaNon/src/app/globals.css) | Sửa (đổi font body + thêm utility) |
| [src/app/layout.tsx](LuaLaNon/src/app/layout.tsx) | Sửa (đổi Be Vietnam Pro → Montserrat) |
| [src/data/content.ts](LuaLaNon/src/data/content.ts) | Sửa (toàn bộ — thông tin thật, anchor IDs đúng) |
| [src/components/layout/Header.tsx](LuaLaNon/src/components/layout/Header.tsx) | Viết lại (Hamburger + Scrollspy + anchor) |
| [src/components/sections/Hero.tsx](LuaLaNon/src/components/sections/Hero.tsx) | Viết lại (ảnh typo + dot pattern + silk wave) |
| [src/components/sections/ProductShowcase.tsx](LuaLaNon/src/components/sections/ProductShowcase.tsx) | Viết lại (Apple-style 2 cột scroll) |
| [src/components/sections/UseCases.tsx](LuaLaNon/src/components/sections/UseCases.tsx) | Viết lại (split 2 đường đi + outline text) |
| [src/components/sections/HowItWorks.tsx](LuaLaNon/src/components/sections/HowItWorks.tsx) | Viết lại (dashed line + watermark) |
| [src/components/sections/Pricing.tsx](LuaLaNon/src/components/sections/Pricing.tsx) | Viết lại (carousel ngang) |
| [src/components/sections/FinalCTA.tsx](LuaLaNon/src/components/sections/FinalCTA.tsx) | Viết lại (split form vàng be) |
| [src/components/sections/SocialSection.tsx](LuaLaNon/src/components/sections/SocialSection.tsx) | Tạo mới (4 social cards) |
| [src/components/layout/Footer.tsx](LuaLaNon/src/components/layout/Footer.tsx) | Sửa (thông tin thật, gọn hơn) |
| [src/components/layout/FloatingContactBar.tsx](LuaLaNon/src/components/layout/FloatingContactBar.tsx) | Sửa (3 channel thật + pulse) |
| [src/app/page.tsx](LuaLaNon/src/app/page.tsx) | Sửa (import SocialSection, đổi ids) |
| [src/lib/hooks.ts](LuaLaNon/src/lib/hooks.ts) | Tạo mới (custom hooks cho scrollspy) |

---

## Trình tự thực hiện

1. Cập nhật `globals.css` + `layout.tsx` (fonts + utility classes).
2. Cập nhật `content.ts` (single source of truth).
3. Tạo `src/lib/hooks.ts` (custom hooks).
4. Viết lại Header (Hamburger + Scrollspy).
5. Viết lại Hero (ảnh typo + dot pattern).
6. Viết lại ProductShowcase (Apple-style scroll).
7. Viết lại UseCases (split + outline text).
8. Viết lại HowItWorks (dashed + watermark).
9. Viết lại Pricing (carousel ngang).
10. Tạo SocialSection.
11. Viết lại FinalCTA (form vàng be).
12. Cập nhật Footer + FloatingContactBar.
13. Cập nhật `page.tsx`.
14. Chạy `npm run dev` và verify trên trình duyệt, sửa pixel.
15. Chạy `npm run build` để đảm bảo không có lỗi.
