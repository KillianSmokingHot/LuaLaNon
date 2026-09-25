"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Hook theo dõi section nào đang active dựa trên scrollY.
 * So sánh vị trí giữa viewport với từng section — chính xác với sticky elements.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const getTops = () =>
      ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return { id, top: Infinity };
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter((x): x is { id: string; top: number } => x.id !== "");

    const handler = () => {
      const tops = getTops();
      if (tops.length === 0) return;

      // Lấy section có getBoundingClientRect().top gần 0 nhất (trên cùng)
      // nhưng không âm quá nhiều (đã qua rồi)
      const sorted = [...tops].sort((a, b) => {
        // Ưu tiên section đang ở phía trên viewport
        const aScore = a.top < 0 ? 999999 + Math.abs(a.top) : a.top;
        const bScore = b.top < 0 ? 999999 + Math.abs(b.top) : b.top;
        return aScore - bScore;
      });

      setActiveId(sorted[0]?.id ?? ids[0]);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler(); // init
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return activeId;
}

/**
 * Hook theo dõi element nào đang ở giữa viewport — dùng cho Apple-style scroll highlight.
 */
export function useScrollHighlight(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

/**
 * Hook đóng/mở body scroll lock.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [locked]);
}

/**
 * Hook theo dõi trạng thái cuộn.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scrollY;
}

/**
 * Hook ref giúp scroll một container theo chiều ngang (carousel).
 */
export function useHorizontalScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 300;
    const gap = 24;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return { ref, scroll };
}
