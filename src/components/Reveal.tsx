"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay 1–6 → maps to .d1–.d6 */
  delay?: number;
  /** extra style passthrough */
  style?: React.CSSProperties;
};

export default function Reveal({ children, className = "", delay, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const cls = ["reveal", delay ? `d${delay}` : "", shown ? "in" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  );
}
