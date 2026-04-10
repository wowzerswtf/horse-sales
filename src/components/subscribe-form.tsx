"use client";

import { useState } from "react";
import type { Discipline, BudgetRange, BuyerTimeline } from "@/lib/types";
import { DISCIPLINE_LABELS, BUDGET_LABELS, TIMELINE_LABELS } from "@/lib/types";

export function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          name: data.get("name"),
          discipline: data.get("discipline"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          zipCode: data.get("zipCode"),
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
        <h3 className="mt-2 text-xl font-bold text-brand-dark">
          You&apos;re On The List
        </h3>
        <p className="mt-1 text-sm text-brand-dark/60">
          Check your email for the latest Market Report and your 48-hour First
          Look access. Welcome to Iron Hide.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sub-name" className="block text-sm font-medium text-brand-dark">
            Name *
          </label>
          <input
            id="sub-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="sub-email" className="block text-sm font-medium text-brand-dark">
            Email *
          </label>
          <input
            id="sub-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sub-discipline" className="block text-sm font-medium text-brand-dark">
            Primary Discipline *
          </label>
          <select
            id="sub-discipline"
            name="discipline"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            <option value="">Select...</option>
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
          <label htmlFor="sub-budget" className="block text-sm font-medium text-brand-dark">
            Budget Range *
          </label>
          <select
            id="sub-budget"
            name="budget"
            required
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            <option value="">Select...</option>
            {(Object.entries(BUDGET_LABELS) as [BudgetRange, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sub-timeline" className="block text-sm font-medium text-brand-dark">
            Timeline
          </label>
          <select
            id="sub-timeline"
            name="timeline"
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            <option value="">Select...</option>
            {(Object.entries(TIMELINE_LABELS) as [BuyerTimeline, string][]).map(
              ([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="sub-zip" className="block text-sm font-medium text-brand-dark">
            Zip Code
          </label>
          <input
            id="sub-zip"
            name="zipCode"
            type="text"
            inputMode="numeric"
            maxLength={5}
            className="mt-1 w-full rounded border border-brand-tan/30 bg-white px-3 py-2 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            placeholder="76087"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-brand-gold py-3 text-sm font-bold text-brand-dark transition hover:bg-brand-tan disabled:opacity-50"
      >
        {submitting ? "Joining..." : "Get First Look Access + Free Market Report"}
      </button>

      <p className="text-center text-xs text-brand-dark/40">
        No spam. Unsubscribe anytime. We send 1-2 emails per week.
      </p>
    </form>
  );
}
