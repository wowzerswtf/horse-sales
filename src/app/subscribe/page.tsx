import type { Metadata } from "next";
import { SubscribeForm } from "@/components/subscribe-form";

export const metadata: Metadata = {
  title: "Join the List — 48-Hour First Look Access",
  description:
    "Get 48-hour early access to new cow horse listings, our free quarterly Market Report, and price drop alerts. Cutting, reining, cow horse, team penning & sorting.",
};

export default function SubscribePage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Pitch */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Free to Join
            </p>
            <h1 className="mt-2 text-3xl font-bold text-brand-dark sm:text-4xl">
              See Horses 48 Hours Before Anyone Else
            </h1>
            <p className="mt-4 text-brand-dark/70">
              The best cow horses sell fast. Our list members get First Look
              access to every new listing 48 hours before it goes public — plus
              our free quarterly Market Report.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "48-Hour First Look",
                  desc: "New horses hit your inbox before they go on the website. You see them first, you call first.",
                },
                {
                  title: "Free Cow Horse Market Report",
                  desc: "Quarterly report with average prices by discipline, what's selling, hot bloodlines, and market trends. Nobody else publishes this.",
                },
                {
                  title: "Price Drop Alerts",
                  desc: "When a horse you've viewed drops in price, you'll know immediately. Segmented to your discipline and budget.",
                },
                {
                  title: "Weekly 'New This Week' Digest",
                  desc: "Every Tuesday: 3-5 new horses with photos, stats, and Deal Room links. Takes 2 minutes to scan.",
                },
                {
                  title: "'Just Sold' Announcements",
                  desc: "See what's moving, what prices are being paid, and how fast horses are selling. Market intelligence.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-xs text-brand-gold">
                    &#10003;
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-brand-dark/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-brand-dark/5 p-4">
              <p className="text-sm font-medium text-brand-dark">
                &ldquo;I bought my NCHA Derby horse through Iron Hide&apos;s First
                Look list. Saw him Tuesday, flew out Thursday, trailered him
                home Saturday. He was sold before the public listing even went
                live.&rdquo;
              </p>
              <p className="mt-2 text-xs text-brand-dark/50">
                — Future testimonial placeholder
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="rounded-lg bg-white p-6 shadow-lg sm:p-8">
              <h2 className="text-xl font-bold text-brand-dark">
                Join the List
              </h2>
              <p className="mt-1 text-sm text-brand-dark/50">
                Takes 30 seconds. We send 1-2 emails per week. Unsubscribe
                anytime.
              </p>
              <div className="mt-6">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
