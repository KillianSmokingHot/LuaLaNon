# Lụa Là Nón — Website

Website Landing Page + FAQ cho thương hiệu móc khóa nón lá.

## 🚀 Cách chạy project

```bash
# 1. Di chuyển vào thư mục project
cd C:\Users\HP\OneDrive\Documents\webbanhang\LuaLaNon

# 2. Cài đặt dependencies
npm install

# 3. Chạy development server
npm run dev
```

Sau đó mở trình duyệt: http://localhost:3000

## 📁 Cấu trúc thư mục

```
src/
├── app/
│   ├── page.tsx          # Trang Landing Page
│   ├── faq/page.tsx     # Trang FAQ
│   └── api/lead/        # API nhận form đăng ký
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, Products, Testimonials...
│   └── ui/               # Button, Accordion, Container
└── data/
    └── content.ts        # ⭐ FILE NÀY — chỉnh sửa nội dung ở đây
```

## ✏️ Cách chỉnh sửa nội dung

Mở file `src/data/content.ts` và thay đổi các giá trị trong dấu `""`. Ví dụ:

```typescript
// Thay đổi tên thương hiệu
export const brand = {
  name: "Tên mới của bạn",
  tagline: "Tagline mới",
  ...
};
```

### Các phần có thể chỉnh sửa:

| Section | File | Mục cần sửa |
|---|---|---|
| Tên thương hiệu, logo | `content.ts` → `brand` | name, tagline |
| Màu nền thổ cẩm | `content.ts` → `backgroundConfig` | overlayColor, overlayOpacity |
| Sản phẩm | `content.ts` → `products` | name, price, image, description |
| Câu hỏi FAQ | `content.ts` → `faqs` | question, answer |
| Thông tin liên hệ | `content.ts` → `contact` | phone, email, address |
| Đánh giá KH | `content.ts` → `testimonials` | name, role, quote |
| Form đăng ký | `content.ts` → `leadFormConfig` | title, ctaText, successMessage |

## 🖼️ Thêm ảnh sản phẩm thật

1. Copy ảnh vào thư mục `public/images/`
2. Cập nhật đường dẫn trong `products` array trong `content.ts`:

```typescript
image: "/images/ten-anh-cua-ban.jpg"
```

## 📱 Responsive

Website tự động responsive trên:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (dưới 768px)

## 🎨 Color Palette

- `#BE1A1A` — Đỏ đậm (brand-dark)
- `#D0311E` — Đỏ tươi (brand-bright)
- `#F7D87F` — Vàng cát (brand-sand)
- `#F8EBAB` — Vàng nhạt (brand-light)
