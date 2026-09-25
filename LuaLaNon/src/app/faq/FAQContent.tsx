"use client";

import Accordion from "@/components/ui/Accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQContentProps {
  faqs: FAQ[];
}

export default function FAQContent({ faqs }: FAQContentProps) {
  return (
    <Accordion items={faqs} />
  );
}
