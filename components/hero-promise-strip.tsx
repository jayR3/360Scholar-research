"use client";

import { useEffect, useRef, useState } from "react";

type HeroPromiseStripProps = {
  items: [string, string, string];
};

export function HeroPromiseStrip({ items }: HeroPromiseStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"waiting" | "playing" | "done">("waiting");

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }

    let finishTimer: number | undefined;
    const playOnce = () => {
      setPhase("playing");
      finishTimer = window.setTimeout(() => setPhase("done"), 12_000);
    };

    if (!("IntersectionObserver" in window)) {
      playOnce();
      return () => {
        if (finishTimer !== undefined) window.clearTimeout(finishTimer);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          playOnce();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(strip);
    return () => {
      observer.disconnect();
      if (finishTimer !== undefined) window.clearTimeout(finishTimer);
    };
  }, []);

  const className = phase === "playing"
    ? "hero-bottom container is-playing"
    : "hero-bottom container";

  return (
    <div ref={stripRef} className={className} aria-label="Our approach">
      {items.map((item, index) => (
        <span className="hero-promise-item" key={index}>{item}</span>
      ))}
    </div>
  );
}
