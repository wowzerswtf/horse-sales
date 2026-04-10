"use client";

import { useState } from "react";
import type { Discipline, BudgetRange } from "@/lib/types";
import { DISCIPLINE_LABELS, BUDGET_LABELS } from "@/lib/types";
import { SITE } from "@/lib/config";

type Step = "intro" | "discipline" | "budget" | "experience" | "timeline" | "email" | "done";

const EXPERIENCE_OPTIONS = [
  {
    value: "beginner",
    label: "First Horse / Getting Started",
    desc: "New to the sport or getting back in",
  },
  {
    value: "intermediate",
    label: "Weekend Warrior / Local Shows",
    desc: "Competing at local and regional level",
  },
  {
    value: "advanced",
    label: "Serious Competitor / Non-Pro",
    desc: "Major shows, futurity and derby level",
  },
  {
    value: "pro",
    label: "Professional / Buying for Clients",
    desc: "Trainer or pro rider",
  },
];

const TIMELINE_OPTIONS = [
  { value: "now", label: "Ready to buy now" },
  { value: "1-3-months", label: "In the next 1-3 months" },
  { value: "6-plus", label: "6+ months out" },
  { value: "browsing", label: "Just looking / researching" },
];

const STEPS: Step[] = ["intro", "discipline", "budget", "experience", "timeline", "email", "done"];

export function QuizFunnel() {
  const [step, setStep] = useState<Step>("intro");
  const [discipline, setDiscipline] = useState<Discipline | "">("");
  const [budget, setBudget] = useState<BudgetRange | "">("");
  const [experience, setExperience] = useState("");
  const [timeline, setTimeline] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const stepIndex = STEPS.indexOf(step);
  const progress = step === "done" ? 100 : Math.round((stepIndex / (STEPS.length - 1)) * 100);

  async function handleSubmit() {
    if (!email) return;
    setSubmitting(true);
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        phone,
        discipline,
        budget,
        timeline,
        zipCode: "",
        source: "quiz-landing-page",
        experience,
      }),
    });
    setStep("done");
    setSubmitting(false);
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
      {/* Progress bar — upfront progress (conversion bible) */}
      {step !== "intro" && step !== "done" && (
        <div className="h-1.5 bg-brand-tan/10">
          <div
            className="h-full bg-brand-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* INTRO */}
        {step === "intro" && (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Find Your Horse
            </h1>
            <p className="mt-2 text-brand-dark/60">
              Answer 4 quick questions. We&apos;ll match you with the right cow
              horses and send you our free Market Report.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-brand-dark/40">
              <span>&#10003; Takes 30 seconds</span>
              <span>&#10003; 100% free</span>
              <span>&#10003; No spam</span>
            </div>
            <button
              onClick={() => setStep("discipline")}
              className="mt-6 w-full rounded-lg bg-brand-gold py-4 text-lg font-bold text-brand-dark transition hover:bg-brand-tan"
            >
              Let&apos;s Go
            </button>
            <p className="mt-3 text-[10px] text-brand-dark/30">
              2,400+ buyers have used this quiz
            </p>
          </div>
        )}

        {/* DISCIPLINE */}
        {step === "discipline" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Question 1 of 4
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-dark">
              What discipline are you shopping for?
            </h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {(
                Object.entries(DISCIPLINE_LABELS) as [Discipline, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => {
                    setDiscipline(value);
                    setStep("budget");
                  }}
                  className="group rounded-xl border-2 border-brand-tan/20 p-4 text-left transition hover:border-brand-gold hover:shadow-md"
                >
                  <p className="font-bold text-brand-dark group-hover:text-brand-brown">
                    {label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* BUDGET */}
        {step === "budget" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Question 2 of 4
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-dark">
              What&apos;s your budget range?
            </h2>
            <p className="mt-1 text-sm text-brand-dark/50">
              This ensures we only send you horses in your range.
            </p>
            <div className="mt-5 grid gap-2">
              {(
                Object.entries(BUDGET_LABELS) as [BudgetRange, string][]
              ).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => {
                    setBudget(value);
                    setStep("experience");
                  }}
                  className="group rounded-xl border-2 border-brand-tan/20 p-4 text-left transition hover:border-brand-gold hover:shadow-md"
                >
                  <p className="font-bold text-brand-dark group-hover:text-brand-brown">
                    {label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE */}
        {step === "experience" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Question 3 of 4
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-dark">
              What&apos;s your riding experience?
            </h2>
            <p className="mt-1 text-sm text-brand-dark/50">
              Helps us match the right temperament and training level.
            </p>
            <div className="mt-5 grid gap-2">
              {EXPERIENCE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setExperience(opt.value);
                    setStep("timeline");
                  }}
                  className="group rounded-xl border-2 border-brand-tan/20 p-4 text-left transition hover:border-brand-gold hover:shadow-md"
                >
                  <p className="font-bold text-brand-dark group-hover:text-brand-brown">
                    {opt.label}
                  </p>
                  <p className="text-xs text-brand-dark/50">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TIMELINE */}
        {step === "timeline" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Question 4 of 4
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-dark">
              When are you looking to buy?
            </h2>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {TIMELINE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setTimeline(opt.value);
                    setStep("email");
                  }}
                  className="group rounded-xl border-2 border-brand-tan/20 p-4 text-left transition hover:border-brand-gold hover:shadow-md"
                >
                  <p className="font-bold text-brand-dark group-hover:text-brand-brown">
                    {opt.label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* EMAIL CAPTURE */}
        {step === "email" && (
          <div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-brand-dark">
                Great — we&apos;ve got your matches ready
              </h2>
              <p className="mt-2 text-sm text-brand-dark/60">
                Where should we send your personalized horse recommendations and
                our free Cow Horse Market Report?
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div>
                <label htmlFor="quiz-name" className="block text-sm font-medium text-brand-dark">
                  Name *
                </label>
                <input
                  id="quiz-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-1 w-full rounded-lg border-2 border-brand-tan/20 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="quiz-email" className="block text-sm font-medium text-brand-dark">
                  Email *
                </label>
                <input
                  id="quiz-email"
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="mt-1 w-full rounded-lg border-2 border-brand-tan/20 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
              </div>
              <div>
                <label htmlFor="quiz-phone" className="block text-sm font-medium text-brand-dark">
                  Phone <span className="text-brand-dark/30">(optional — for text alerts on new horses)</span>
                </label>
                <input
                  id="quiz-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="mt-1 w-full rounded-lg border-2 border-brand-tan/20 px-4 py-3 text-sm focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!email || !name || submitting}
                className="w-full rounded-lg bg-brand-gold py-4 text-lg font-bold text-brand-dark transition hover:bg-brand-tan disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send My Matches"}
              </button>

              {/* Social proof at friction point */}
              <p className="text-center text-xs text-brand-dark/40">
                &#128274; Your info is private. No spam. Unsubscribe anytime.
              </p>
            </div>

            <div className="mt-5 rounded-lg bg-brand-cream p-3">
              <p className="text-center text-xs text-brand-dark/50">
                <strong className="text-brand-dark/70">You&apos;ll also get:</strong>{" "}
                48-hour First Look access to new listings before they go
                public + our free quarterly Cow Horse Market Report
              </p>
            </div>
          </div>
        )}

        {/* DONE */}
        {step === "done" && (
          <div className="py-4 text-center">
            <h2 className="text-2xl font-bold text-brand-dark">
              You&apos;re In!
            </h2>
            <p className="mt-2 text-brand-dark/60">
              Check your email for your personalized{" "}
              {discipline ? DISCIPLINE_LABELS[discipline as Discipline] : ""}{" "}
              horse recommendations and the Market Report.
            </p>

            <div className="mt-6 rounded-lg bg-brand-cream p-4">
              <p className="text-sm font-semibold text-brand-dark">
                Your profile:
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
                {discipline && (
                  <span className="rounded-full bg-brand-gold/20 px-3 py-1 font-medium text-brand-brown">
                    {DISCIPLINE_LABELS[discipline as Discipline]}
                  </span>
                )}
                {budget && (
                  <span className="rounded-full bg-brand-gold/20 px-3 py-1 font-medium text-brand-brown">
                    {BUDGET_LABELS[budget as BudgetRange]}
                  </span>
                )}
                {experience && (
                  <span className="rounded-full bg-brand-gold/20 px-3 py-1 font-medium text-brand-brown">
                    {experience}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/horses"
                className="flex-1 rounded-lg bg-brand-gold py-3 text-center font-bold text-brand-dark transition hover:bg-brand-tan"
              >
                Browse Horses Now
              </a>
              <a
                href={SITE.phoneHref}
                className="flex-1 rounded-lg border-2 border-brand-brown py-3 text-center font-bold text-brand-brown transition hover:bg-brand-brown hover:text-white"
              >
                Call Us Direct
              </a>
            </div>
          </div>
        )}

        {/* Back button */}
        {step !== "intro" && step !== "done" && step !== "discipline" && (
          <button
            onClick={() => {
              const currentIndex = STEPS.indexOf(step);
              setStep(STEPS[currentIndex - 1]);
            }}
            className="mt-4 w-full text-center text-xs text-brand-dark/30 hover:text-brand-dark/60"
          >
            &larr; Back
          </button>
        )}
      </div>
    </div>
  );
}
