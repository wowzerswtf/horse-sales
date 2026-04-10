import { QuizFunnel } from "@/components/quiz-funnel";
import { TermsLink, PrivacyLink } from "@/components/legal-modals";
import { SITE } from "@/lib/config";

export default function QuizPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark">
      {/* Minimal top bar — no nav links, just brand + phone (tunnel) */}
      <div className="border-b border-white/10 px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div>
            <span className="text-lg font-bold text-brand-gold">
              {SITE.name.toUpperCase()}
            </span>
            <span className="ml-2 hidden text-[10px] uppercase tracking-[0.2em] text-brand-tan sm:inline">
              | {SITE.tagline}
            </span>
          </div>
          <a
            href={SITE.phoneHref}
            className="text-xs text-white/50 hover:text-brand-gold"
          >
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main quiz area */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-16">
        <div className="w-full max-w-lg">
          <QuizFunnel />
        </div>

        {/* Social proof below quiz */}
        <div className="mt-8 w-full max-w-lg">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { stat: "500+", label: "Horses Sold" },
              { stat: "2,400+", label: "Buyers on Our List" },
              { stat: "48hrs", label: "Average First Look Lead" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-bold text-brand-gold">
                  {item.stat}
                </p>
                <p className="text-xs text-white/40">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials — social proof next to friction */}
          <div className="mt-8 space-y-4">
            {[
              {
                quote:
                  "Filled out the quiz on a whim. Two days later they sent me a cutting horse that was exactly what I described. Flew out, rode him, bought him.",
                name: "Future Testimonial — TX Buyer",
              },
              {
                quote:
                  "Their Market Report is the only one I've seen that actually shows what cow horses are selling for. I read it every quarter.",
                name: "Future Testimonial — OK Trainer",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm italic text-white/60">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-2 text-xs text-brand-gold/60">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal footer — credibility only */}
      <div className="border-t border-white/10 px-4 py-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wide text-white/15 sm:gap-10">
          {["NCHA", "NRHA", "NRCHA", "AQHA", "USTPA"].map((org) => (
            <span key={org}>{org}</span>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-white/20">
          &copy; {new Date().getFullYear()} {SITE.name} &middot;{" "}
          {SITE.location} &middot;{" "}
          <TermsLink /> &middot; <PrivacyLink />
        </p>
      </div>
    </div>
  );
}
