"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Send, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { finalCta, leadFormConfig } from "@/data/content";

const formSchema = z.object({
  name: z.string().min(1, leadFormConfig.fields.name.errorRequired),
  phone: z
    .string()
    .min(1, leadFormConfig.fields.phone.errorRequired)
    .regex(/^(0[0-9]{9,10})$/, leadFormConfig.fields.phone.errorInvalid),
  quantity: z.string().min(1, leadFormConfig.fields.quantity.errorRequired),
  orderFor: z.enum(["individual", "organization"], {
    errorMap: () => ({ message: leadFormConfig.fields.orderFor.errorRequired }),
  }),
  note: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Show success state
        setSubmitted(true);
        reset();
      } else {
        // Show error message from API
        setSubmitError(result.message || "Đã xảy ra lỗi. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Đã xảy ra lỗi kết nối. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="dat-hang"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#BE1A1A" }}
    >
      {/* Polka dot bg */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F7D87F 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* LEFT — Headline */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative">
          {/* Outline watermark */}
          <div
            className="absolute top-10 right-6 lg:right-16 font-display italic font-black text-outline-gold leading-none select-none pointer-events-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", opacity: 0.5 }}
          >
            RIÊNG.
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl relative"
          >
            {/* Title — 2 dòng */}
            <h2 className="font-display font-black text-[#F7D87F] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-8 tracking-tight">
              <span className="block">MỖI CHIẾC</span>
              <span className="block">NÓN,</span>
              <span className="block text-white">MỘT DẤU ẤN</span>
              <span className="block">RIÊNG.</span>
            </h2>

            <div className="w-20 h-1 bg-[#F7D87F] mb-8" />

            <p className="text-white/85 font-body text-base sm:text-lg leading-relaxed max-w-md">
              {finalCta.sub}
            </p>
          </motion.div>
        </div>

        {/* RIGHT — Form (cream background) */}
        <div
          className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-24"
          style={{ backgroundColor: "#F8EBAB" }}
        >
          {/* Polka dots nhẹ */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #BE1A1A 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative max-w-xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Form title */}
              <h3 className="font-display font-bold text-[#BE1A1A] text-2xl sm:text-3xl uppercase tracking-[0.15em] mb-2">
                {leadFormConfig.title}
              </h3>
              <div className="w-32 h-1 bg-[#BE1A1A] mb-8" />

              {submitted ? (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-[#BE1A1A] flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-[#F7D87F]" strokeWidth={2.5} />
                  </motion.div>
                  <p className="text-[#BE1A1A] font-display font-bold text-xl sm:text-2xl mb-4 leading-snug">
                    {leadFormConfig.successMessage}
                  </p>
                  <p className="text-[#2a0a0a]/70 text-sm mb-6">
                    Đội ngũ Lụa Là Nón sẽ liên hệ bạn trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#BE1A1A] text-sm underline hover:no-underline font-semibold"
                  >
                    Gửi thêm yêu cầu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Error message */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Họ và tên */}
                  <div>
                    <label className="block text-[#BE1A1A] text-sm font-semibold mb-1.5 uppercase tracking-wider">
                      {leadFormConfig.fields.name.label}
                    </label>
                    <input
                      {...register("name")}
                      placeholder={leadFormConfig.fields.name.placeholder}
                      className={`w-full bg-white border-2 rounded-full px-5 py-3 text-sm text-[#2a0a0a] placeholder:text-[#2a0a0a]/40 transition-colors focus:outline-none ${
                        errors.name
                          ? "border-red-500"
                          : "border-transparent focus:border-[#BE1A1A]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1.5 ml-2">{errors.name.message}</p>
                    )}
                  </div>

                  {/* SĐT + SL — 2 cột */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#BE1A1A] text-sm font-semibold mb-1.5 uppercase tracking-wider">
                        {leadFormConfig.fields.phone.label}
                      </label>
                      <input
                        {...register("phone")}
                        placeholder={leadFormConfig.fields.phone.placeholder}
                        className={`w-full bg-white border-2 rounded-full px-5 py-3 text-sm text-[#2a0a0a] placeholder:text-[#2a0a0a]/40 transition-colors focus:outline-none ${
                          errors.phone
                            ? "border-red-500"
                            : "border-transparent focus:border-[#BE1A1A]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1.5 ml-2">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#BE1A1A] text-sm font-semibold mb-1.5 uppercase tracking-wider">
                        {leadFormConfig.fields.quantity.label}
                      </label>
                      <input
                        {...register("quantity")}
                        placeholder={leadFormConfig.fields.quantity.placeholder}
                        className={`w-full bg-white border-2 rounded-full px-5 py-3 text-sm text-[#2a0a0a] placeholder:text-[#2a0a0a]/40 transition-colors focus:outline-none ${
                          errors.quantity
                            ? "border-red-500"
                            : "border-transparent focus:border-[#BE1A1A]"
                        }`}
                      />
                      {errors.quantity && (
                        <p className="text-red-600 text-xs mt-1.5 ml-2">{errors.quantity.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Bạn đặt cho — radio custom */}
                  <div>
                    <label className="block text-[#BE1A1A] text-sm font-semibold mb-3 uppercase tracking-wider">
                      {leadFormConfig.fields.orderFor.label}
                    </label>
                    <div className="flex gap-6">
                      {[
                        { value: "individual", label: "Cá nhân" },
                        { value: "organization", label: "Tổ chức" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <input
                            {...register("orderFor")}
                            type="radio"
                            value={opt.value}
                            className="sr-only peer"
                          />
                          <span className="w-5 h-5 rounded-full border-2 border-[#BE1A1A] flex items-center justify-center peer-checked:bg-[#BE1A1A] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#F7D87F] opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[#2a0a0a] text-sm group-hover:text-[#BE1A1A] transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.orderFor && (
                      <p className="text-red-600 text-xs mt-1.5 ml-2">{errors.orderFor.message}</p>
                    )}
                  </div>

                  {/* Yêu cầu */}
                  <div>
                    <label className="block text-[#BE1A1A] text-sm font-semibold mb-1.5 uppercase tracking-wider">
                      {leadFormConfig.fields.note.label}
                    </label>
                    <textarea
                      {...register("note")}
                      rows={4}
                      placeholder={leadFormConfig.fields.note.placeholder}
                      className="w-full bg-white border-2 border-transparent focus:border-[#BE1A1A] rounded-3xl px-5 py-3 text-sm text-[#2a0a0a] placeholder:text-[#2a0a0a]/40 transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient-red w-full justify-center !py-4 text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {leadFormConfig.ctaText}
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
