"use client";

import { useState } from "react";
import type { Discipline, BudgetRange } from "@/lib/types";
import { DISCIPLINE_LABELS, BUDGET_LABELS } from "@/lib/types";

type Step = "discipline" | "budget" | "experience" | "email";

const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "Beginner / First Horse", desc: "New to the sport or getting back in the saddle" },
  { value: "intermediate", label: "Amateur / Weekend Warrior", desc: "Competing at local/regional level" },
  { value: "advanced", label: "Competitive / Non-Pro", desc: "Showing at major events, serious competitor" },
  { value: "pro", label: "Professional / Trainer", desc: "Buying for yourself or clients" },
];

export function HorseFinderQuiz() {
  const [step, setStep] = useState<Step>("discipline");
  const [discipline, setDiscipline] = useState<Discipline | "">("");
  const [budget, setBudget] = useState<BudgetRange | "">("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleFinish() {
    if (!email) return;
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        discipline,
        budget,
        timeline: "now",
        zipCode: "",
        source: "horse-finder-quiz",
        experience,
      }),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="text-4xl">&#127943;</div>
        <h3 className="mt-3 text-xl font-bold text-brand-dark">
          We&apos;re On It
        </h3>
        <p className="mt-2 text-sm text-brand-dark/60">
          We&apos;ll send you matching {discipline ? DISCIPLINE_LABELS[discipline as Discipline] : ""} horses
          in the {budget ? BUDGET_LABELS[budget as BudgetRange] : ""} range. Check your email for
          your first recommendations and our free Market Report.
        </p>
        <a
          href="/horses"
          className="mt-4 inline-block rounded bg-brand-gold px-6 py-2 text-sm font-bold text-brand-dark hover:bg-brand-tan"
        >
          Browse All Horses Now
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
      {/* Progress */}
      <div className="mb-6 flex gap-1">
        {["discipline", "budget", "experience", "email"].map((s, i) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full ${
              i <=
              ["discipline", "budget", "experience", "email"].indexOf(step)
                ? "bg-brand-gold"
                : "bg-brand-tan/20"
            }`}
          />
        ))}
      </div>

      {step === "discipline" && (
        <div>
          <h3 className="text-lg font-bold text-brand-dark">
            What discipline are you looking for?
          </h3>
          <p className="mt-1 text-sm text-brand-dark/50">
            Pick your primary discipline. We&apos;ll match you with the right
            horses.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {(Object.entries(DISCIPLINE_LABELS) as [Discipline, string][]).map(
              ([value, label]) => (
                <button
                  key={value}
                  onClick={() => {
                    setDiscipline(value);
                    setStep("budget");
                  }}
                  className="rounded-lg border border-brand-tan/30 p-3 text-left text-sm font-medium text-brand-dark transition hover:border-brand-gold hover:bg-brand-gold/5"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {step === "budget" && (
        <div>
          <h3 className="text-lg font-bold text-brand-dark">
            What&apos;s your budget range?
          </h3>
          <p className="mt-1 text-sm text-brand-dark/50">
            This helps us send you horses in your price range — not spam.
          </p>
          <div className="mt-4 grid gap-2">
            {(Object.entries(BUDGET_LABELS) as [BudgetRange, string][]).map(
              ([value, label]) => (
                <button
                  key={value}
                  onClick={() => {
                    setBudget(value);
                    setStep("experience");
                  }}
                  className="rounded-lg border border-brand-tan/30 p-3 text-left text-sm font-medium text-brand-dark transition hover:border-brand-gold hover:bg-brand-gold/5"
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {step === "experience" && (
        <div>
          <h3 className="text-lg font-bold text-brand-dark">
            What&apos;s your experience level?
          </h3>
          <p className="mt-1 text-sm text-brand-dark/50">
            So we can match you with the right temperament and training level.
          </p>
          <div className="mt-4 grid gap-2">
            {EXPERIENCE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setExperience(opt.value);
                  setStep("email");
                }}
                className="rounded-lg border border-brand-tan/30 p-3 text-left transition hover:border-brand-gold hover:bg-brand-gold/5"
              >
                <p className="text-sm font-medium text-brand-dark">
                  {opt.label}
                </p>
                <p className="text-xs text-brand-dark/50">{opt.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "email" && (
        <div>
          <h3 className="text-lg font-bold text-brand-dark">
            Where should we send your matches?
          </h3>
          <p className="mt-1 text-sm text-brand-dark/50">
            We&apos;ll email you matching horses plus our free Market Report.
          </p>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded border border-brand-tan/30 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full rounded border border-brand-tan/30 px-3 py-2.5 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
            />
            <button
              onClick={handleFinish}
              disabled={!email}
              className="w-full rounded bg-brand-gold py-3 text-sm font-bold text-brand-dark transition hover:bg-brand-tan disabled:opacity-50"
            >
              Find My Horse
            </button>
            <p className="text-center text-xs text-brand-dark/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
