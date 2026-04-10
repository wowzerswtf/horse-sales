"use client";

import { useState, useEffect } from "react";

export function StickyCTA({
  horseName,
  price,
}: {
  horseName: string;
  price: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-tan/20 bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-brand-dark">
            {horseName}
          </p>
          <p className="text-lg font-bold text-brand-brown">{price}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <a
            href="tel:+15551234567"
            className="rounded bg-brand-dark px-3 py-2.5 text-xs font-bold text-white"
            aria-label="Call about this horse"
          >
            Call
          </a>
          <a
            href="#inquire"
            className="rounded bg-brand-gold px-4 py-2.5 text-xs font-bold text-brand-dark"
          >
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
}
