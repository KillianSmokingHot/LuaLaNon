import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactBar from "@/components/layout/FloatingContactBar";
import Hero from "@/components/sections/Hero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import UseCases from "@/components/sections/UseCases";
import MockUpSection from "@/components/sections/MockUpSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import SocialSection from "@/components/sections/SocialSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Hero — Về chúng tôi */}
        <Hero />

        {/* 2. Sản phẩm — Apple-style scroll */}
        <ProductShowcase />

        {/* 3. Use Cases — 2 đường đi */}
        <UseCases />

        {/* 4. Mock Up — Xem trước logo */}
        <MockUpSection />

        {/* 5. Quy trình — 5 bước */}
        <HowItWorks />

        {/* 6. Bảng giá — carousel */}
        <Pricing />

        {/* 7. Social — Tìm Lụa qua đâu? */}
        <SocialSection />

        {/* 8. Final CTA — form đặt hàng */}
        <FinalCTA />
      </main>

      <Footer />
      <FloatingContactBar />
    </>
  );
}
