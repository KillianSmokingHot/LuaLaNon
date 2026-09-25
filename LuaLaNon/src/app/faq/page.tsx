import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactBar from "@/components/layout/FloatingContactBar";
import FAQContent from "./FAQContent";
import { faqs } from "@/data/content";

export const metadata: Metadata = {
  title: "FAQ — Lụa Là Nón",
  description: "Câu hỏi thường gặp về sản phẩm và dịch vụ của Lụa Là Nón.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-brand-dark uppercase tracking-wider text-sm font-semibold mb-3">
              Hỗ trợ
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-brand-dark mb-4">
              Câu hỏi thường gặp
            </h1>
            <p className="text-gray-600 text-lg">
              Mọi thắc mắc của bạn về móc khóa nón lá
            </p>
          </div>

          {/* Accordion */}
          <FAQContent faqs={faqs} />

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-display font-bold text-brand-dark mb-2">
              Chưa tìm thấy câu trả lời?
            </h3>
            <p className="text-gray-600 mb-4">
              Gửi yêu cầu trực tiếp — bên mình phản hồi trong 24h
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+84901234567"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-bright transition-colors"
              >
                📞 Gọi ngay
              </a>
              <a
                href="/#final-cta"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-medium hover:bg-yellow-200 transition-colors"
              >
                💬 Gửi yêu cầu
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactBar />
    </>
  );
}
