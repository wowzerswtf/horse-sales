"use client";

import { useState, useEffect, useCallback } from "react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed && !submitted) {
        setShow(true);
      }
    },
    [dismissed, submitted]
  );

  useEffect(() => {
    // Only show after 5 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: "",
        discipline: "cutting",
        budget: "25k-50k",
        timeline: "browsing",
        zipCode: "",
        source: "exit-intent",
      }),
    });

    setSubmitted(true);
    setTimeout(() => setShow(false), 2500);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 text-2xl leading-none text-brand-dark/30 hover:text-brand-dark"
          aria-label="Close popup"
        >
          &times;
        </button>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="text-4xl">&#10003;</div>
            <p className="mt-2 text-lg font-bold text-brand-dark">
              You&apos;re in!
            </p>
            <p className="mt-1 text-sm text-brand-dark/60">
              Check your email for the Market Report.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Before You Go
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-dark sm:text-2xl">
              Get the Free Cow Horse Market Report
            </h2>
            <p className="mt-2 text-sm text-brand-dark/60">
              Average prices by discipline, what&apos;s selling, hot
              bloodlines, and market trends. Plus 48-hour First Look access to
              new listings.
            </p>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="min-w-0 flex-1 rounded border border-brand-tan/30 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded bg-brand-gold px-4 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-tan"
                >
                  Send It
                </button>
              </div>
            </form>

            <button
              onClick={dismiss}
              className="mt-3 w-full text-center text-xs text-brand-dark/40 hover:text-brand-dark/60"
            >
              No thanks, I don&apos;t want free market data
            </button>
          </>
        )}
      </div>
    </div>
  );
}
