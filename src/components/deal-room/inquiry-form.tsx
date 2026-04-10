"use client";

import { useState } from "react";
import type { Discipline, BudgetRange, BuyerTimeline } from "@/lib/types";
import { DISCIPLINE_LABELS, BUDGET_LABELS, TIMELINE_LABELS } from "@/lib/types";

export function InquiryForm({ horseSlug, horseName }: { horseSlug: string; horseName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          discipline: data.get("discipline"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
          horseSlug,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-brand-gold/30 bg-brand-gold/10 p-8 text-center">
        <div className="text-4xl">&#10003;</div>
        <h3 className="mt-2 text-lg font-bold text-brand-dark">
          Inquiry Received
        </h3>
        <p className="mt-1 text-sm text-brand-dark/60">
          We&apos;ll be in touch about <strong>{horseName}</strong> within 24 hours.
          Check your email for a confirmation with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="discipline" className="block text-sm font-medium text-brand-dark">
            Primary Discipline
          </label>
          <select
            id="discipline"
            name="discipline"
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            {(Object.entries(DISCIPLINE_LABELS) as [Discipline, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-brand-dark">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            {(Object.entries(BUDGET_LABELS) as [BudgetRange, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-brand-dark">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            {(Object.entries(TIMELINE_LABELS) as [BuyerTimeline, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark">
          Tell us about yourself & what you&apos;re looking for
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          placeholder="Experience level, what you plan to do with the horse, any questions..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-brand-brown py-3 text-sm font-bold text-white transition hover:bg-brand-dark disabled:opacity-50"
      >
        {submitting ? "Sending..." : `Inquire About ${horseName}`}
      </button>

      <p className="text-center text-xs text-brand-dark/40">
        Your information is kept private. We&apos;ll respond within 24 hours.
      </p>
    </form>
  );
}
