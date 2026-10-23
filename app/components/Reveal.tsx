"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type From = "up" | "left" | "right" | "zoom";

// Animates in once when scrolled into view. `delay` (ms) staggers siblings.
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Content is visible by default; only arm the animation for elements below the fold.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("reveal");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-from={from}
      className={className}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
