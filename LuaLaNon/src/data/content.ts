// ============================================================
//  LỤA LÀ NÓN — TRUNG TÂM DỮ LIỆU NỘI DUNG
//  Brand brief: Luxury-teen, đỏ chủ đạo, gradient titles,
//  cover + lụa + polka dots.
// ============================================================

// --- BRAND ---
export const brand = {
  name: "Lụa Là Nón",
  shortName: "LLN",
  logo: "/images/logo.png",
  navLogo: "/images/logo-white.png", // logo trắng nền trong suốt, đặt giữa navbar
  heroImage: "/images/hero-typography.png", // ảnh typography đỏ lớn, dùng trong Hero
  cover: "/images/cover.png",
};

// --- KICKER & TAGLINE (theo mockup PDF) ---
export const heroCopy = {
  kicker: "Chúng tôi là",
  tagline: "Nón lá trong tay, Việt Nam bên mình.",
  subHeadline:
    "Lụa Là Nón tự hào là thương hiệu chuyên cung cấp các sản phẩm móc khóa nón lá lụa được cá nhân hóa tỉ mỉ, giúp bạn thể hiện bản sắc riêng hay lưu giữ bản sắc doanh nghiệp trên từng chi tiết.",
  primaryCta: {
    label: "TẠO CHIẾC NÓN CỦA BẠN NGAY",
    target: "#dat-hang",
  },
};

// --- NAVIGATION (theo mockup PDF — đúng anchor IDs) ---
export const navigation = {
  hamburgerLabel: "Mở menu",
  closeLabel: "Đóng menu",
  left: [
    { label: "VỀ CHÚNG TÔI", href: "#ve-chung-toi" },
    { label: "SẢN PHẨM", href: "#san-pham" },
  ],
  right: [
    { label: "QUY TRÌNH", href: "#quy-trinh" },
    { label: "BẢNG GIÁ", href: "#bang-gia" },
  ],
  cta: { label: "ĐẶT NÓN NGAY", href: "#dat-hang" },
};

// --- CONTACT (thông tin thật theo brief) ---
export const contact = {
  phone: "0795647905",
  phoneRaw: "+84795647905",
  email: "lualanon.vn@gmail.com",
  address: "69/68 Đặng Thùy Trâm, Phường Bình Lợi Trung, TP. Hồ Chí Minh, Vietnam",
  facebook: "https://www.facebook.com/profile.php?id=61594479992424&mibextid=wwXIfr&rdid=U3KkjKZ2tIUIkKJY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DdaNcEsr6%2F%3Fmibextid%3DwwXIfr#",
  instagram: "https://www.instagram.com/lualanon.vn?stkn=d3k1MXNoMHBmMGY4",
  tiktok: "https://www.tiktok.com/@lualanon.vn?is_from_webapp=1&sender_device=pc",
  threads: "https://www.threads.com/@lualanon.vn?igshid=NTc4MTIwNjQ2YQ==",
  zalo: "https://zalo.me/0795647905",
  messenger: "https://m.me/lualanon",
};

// --- FLOATING CONTACT BAR ---
export const floatingContactConfig = {
  enabled: true,
  channels: [
    { id: "zalo", name: "Zalo", url: contact.zalo, brandColor: "#0068FF" },
    { id: "messenger", name: "Messenger", url: contact.messenger, brandColor: "#0084FF" },
    { id: "phone", name: "Hotline", url: `tel:${contact.phoneRaw}`, brandColor: "#BE1A1A" },
  ],
};

// --- SOCIAL SECTION — "Tìm Lụa qua đâu?" ---
export const socialLinks = [
  {
    id: "facebook",
    name: "Facebook",
    handle: "Lụa Là Nón",
    url: contact.facebook,
    color: "#1877F2",
    bgColor: "#E7F0FE",
    description: "Cập nhật sản phẩm mới, ưu đãi và câu chuyện đằng sau từng chiếc nón.",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@lualanon.vn",
    url: contact.instagram,
    color: "#E1306C",
    bgColor: "#FDE7EF",
    description: "Hình ảnh thực tế, behind-the-scenes và những đơn hàng đã hoàn thiện.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@lualanon.vn",
    url: contact.tiktok,
    color: "#000000",
    bgColor: "#F4F4F4",
    description: "Video quá trình làm nón, mockup trước-sau và tips quà tặng cá nhân hóa.",
  },
  {
    id: "threads",
    name: "Threads",
    handle: "@lualanon.vn",
    url: contact.threads,
    color: "#000000",
    bgColor: "#F4F4F4",
    description: "Trò chuyện nhanh, chia sẻ câu chuyện và lắng nghe góp ý từ khách hàng.",
  },
];

// --- 4 KHỐI NỘI DUNG SẢN PHẨM (Apple-style scroll) ---
export const productFeatures = [
  {
    id: "p1",
    no: "01",
    title: "CHẤT LIỆU & CHẤT LƯỢNG",
    description:
      "Móc khóa nón lá lụa cao cấp, được hoàn thiện chỉn chu với chất liệu và từng chi tiết được chăm chút, mang lại sản phẩm nhỏ gọn nhưng có độ bền và tính thẩm mỹ cao.",
    iconKey: "Sparkles",
  },
  {
    id: "p2",
    no: "02",
    title: "CÁ NHÂN HÓA DẤU ẤN",
    description:
      "Tùy chỉnh tên riêng, tên doanh nghiệp hoặc thông điệp theo nhu cầu. Thông tin được in bằng tem UV DTF có độ bám tốt, sắc nét và chắc chắn trên sản phẩm.",
    iconKey: "PenTool",
  },
  {
    id: "p3",
    no: "03",
    title: "CHI PHÍ HỢP LÝ",
    description:
      "Mức giá được cân đối theo nhu cầu sử dụng, từ quà tặng cá nhân đến số lượng lớn cho doanh nghiệp, CLB và sự kiện, đảm bảo tính thẩm mỹ mà vẫn phù hợp ngân sách.",
    iconKey: "Wallet",
  },
  {
    id: "p4",
    no: "04",
    title: "HOÀN THIỆN & ĐÓNG GÓI",
    description:
      "Chú trọng độ hoàn thiện từ sản phẩm đến packaging. Mỗi chiếc nón được đóng gói chỉn chu, sạch đẹp và sẵn sàng để trao tặng khách hàng, đối tác hoặc người nhận.",
    iconKey: "Package",
  },
];

// --- USE CASES — 2 đường đi (theo mockup) ---
export const useCases = {
  individual: {
    title: "CHO CÁ NHÂN",
    headline1: "Phụ kiện cho mình,",
    headline2: "Quà tặng cho người mình thương.",
    tags: ["QUÀ TẶNG BẠN BÈ", "QUÀ KỶ NIỆM", "TRANG TRÍ TÚI", "SẢN PHẨM LƯU NIỆM"],
    cta: { label: "TẠO DẤU ẤN RIÊNG", href: "#dat-hang" },
    accent: "cream" as const,
    outlineText: "BRANDING",
    outlineColor: "red" as const,
  },
  organization: {
    title: "CHO DOANH NGHIỆP",
    headline1: "Một món quà nhỏ.",
    headline2: "Một nhận diện lớn.",
    tags: ["QUÀ TẶNG SỰ KIỆN", "CLB / ĐỘI NHÓM", "QUÀ TẶNG DOANH NGHIỆP", "QUÀ TẶNG KHÁCH HÀNG"],
    cta: { label: "TẠO DẤU ẤN DOANH NGHIỆP", href: "#dat-hang" },
    accent: "red" as const,
    outlineText: "TẠO DẤU ẤN RIÊNG",
    outlineColor: "gold" as const,
  },
};

// --- QUY TRÌNH — 5 bước (theo mockup) ---
export const processSteps = [
  {
    no: "01",
    title: "GỬI YÊU CẦU",
    description: "Cung cấp số lượng, nội dung cần in và thời gian mong muốn nhận hàng.",
  },
  {
    no: "02",
    title: "DUYỆT MOCKUP",
    description: "Lụa Là lên mockup theo yêu cầu và gửi hình minh họa để bạn kiểm tra, xác nhận.",
  },
  {
    no: "03",
    title: "SẢN XUẤT",
    description: "Tiến hành sản xuất tỉ mỉ theo mẫu đã thống nhất.",
  },
  {
    no: "04",
    title: "KIỂM TRA & ĐÓNG GÓI",
    description: "Cập nhật hình ảnh/video, kiểm tra sản phẩm và đóng gói chỉn chu.",
  },
  {
    no: "05",
    title: "NHẬN HÀNG",
    description: "Sản phẩm hoàn thiện, sẵn sàng để trao tặng.",
  },
];

// --- BẢNG GIÁ (theo mockup) ---
export const pricingTiers = [
  { quantity: "Khi đặt từ 01 – 09 nón:", price: "30.000đ/chiếc", highlight: false },
  { quantity: "Khi đặt từ 10 – 49 nón:", price: "27.000đ/chiếc", highlight: true, badge: "PHỔ BIẾN" },
  { quantity: "Khi đặt từ 50 – 99 nón:", price: "24.000đ/chiếc", highlight: false },
  { quantity: "Khi đặt từ 100+ nón:", price: "20.000đ/chiếc", highlight: false },
];

export const pricingIncluded = [
  "Sản phẩm móc khóa nón lá",
  "Cá nhân hóa cơ bản bằng UV DTF",
  "Đóng gói tiêu chuẩn",
];

export const pricingExtra = [
  "Thiết kế hoặc xử lý logo riêng",
  "Nội dung cá nhân hóa đặc biệt",
  "Packaging theo yêu cầu riêng",
  "Yêu cầu SL/Thời gian đặc biệt",
];

// --- FINAL CTA + FORM (theo mockup) ---
export const finalCta = {
  headlineLine1: "MỖI CHIẾC NÓN,",
  headlineLine2: "MỘT DẤU ẤN RIÊNG.",
  sub: "Điền thông tin hoặc liên hệ trực tiếp - đội ngũ Lụa Là Nón sẽ phản hồi bạn trong thời gian sớm nhất.",
};

export const leadFormConfig = {
  title: "GỬI YÊU CẦU THIẾT KẾ",
  ctaText: "GỬI YÊU CẦU",
  successMessage: "Đã nhận yêu cầu! Bên mình sẽ liên hệ bạn trong vòng 24h.",
  fields: {
    name: { label: "Họ và tên:", placeholder: "Nhập họ tên của bạn", errorRequired: "Vui lòng nhập họ tên" },
    phone: { label: "Số điện thoại:", placeholder: "0795 xxx xxx", errorRequired: "Vui lòng nhập số điện thoại", errorInvalid: "Số điện thoại không hợp lệ" },
    quantity: { label: "Số lượng dự kiến:", placeholder: "Ví dụ: 50", errorRequired: "Vui lòng nhập số lượng" },
    orderFor: { label: "Bạn đặt cho:", errorRequired: "Vui lòng chọn" },
    note: { label: "Yêu cầu của bạn (không bắt buộc):", placeholder: "Mô tả chi tiết yêu cầu (số lượng, nội dung in, deadline...)" },
  },
};

// --- FOOTER ---
export const footerConfig = {
  brandDescription:
    "Móc khóa nón lá lụa cá nhân hóa — quà tặng có dấu ấn riêng cho cá nhân và tổ chức.",
  quickLinks: [
    { label: "Về chúng tôi", href: "#ve-chung-toi" },
    { label: "Sản phẩm", href: "#san-pham" },
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Bảng giá", href: "#bang-gia" },
    { label: "Tìm Lụa qua đâu?", href: "#lien-he" },
  ],
  copyright: "© 2026 Lụa Là Nón. All rights reserved.",
};

// --- FAQ ---
export const faqs = [
  {
    question: "Bên mình có gửi ảnh thật trước khi tôi đặt không?",
    answer:
      "Có. Với bất kỳ mẫu nào, bên mình đều gửi ảnh thành phẩm thật kèm kích thước để bạn nắm rõ trước khi quyết định. Với yêu cầu cá nhân hóa, bạn sẽ nhận mockup trước khi sản xuất — chỉ khi bạn duyệt thì bên mình mới tiến hành làm.",
  },
  {
    question: "Móc khóa có làm thủ công không?",
    answer:
      "Có. Mỗi chiếc đều được chế tác thủ công bởi nghệ nhân làng nghề — giữ chất lượng và dấu ấn truyền thống trong từng sản phẩm.",
  },
  {
    question: "Tôi muốn in tên / in logo công ty thì sao?",
    answer:
      "Bạn chỉ cần gửi nội dung in, bên mình thiết kế mockup miễn phí để bạn duyệt. Sau khi chốt, bên mình tiến hành làm và đóng gói.",
  },
  {
    question: "Đặt 1 chiếc có được không? Hay phải số lượng lớn?",
    answer:
      "Đặt 1 chiếc hay 5 chiếc cho cá nhân đều được. Từ 20 chiếc trở lên cho tập thể/doanh nghiệp, bên mình có chính sách giá và tư vấn phù hợp.",
  },
  {
    question: "Thời gian giao hàng bao lâu?",
    answer:
      "Đơn cá nhân (1–5 chiếc): 3–5 ngày. Đơn tập thể (20–300 chiếc): 7–10 ngày, tùy mức độ cá nhân hóa. Giao toàn quốc.",
  },
  {
    question: "Sản phẩm có giống ảnh / mockup tôi đã duyệt không?",
    answer:
      "Bên mình chỉ sản xuất sau khi bạn đã duyệt mockup — sản phẩm thực tế đúng như mẫu bạn chốt, không khác ảnh.",
  },
];
