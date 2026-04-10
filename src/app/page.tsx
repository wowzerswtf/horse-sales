import Image from "next/image";
import Link from "next/link";
import { HorseCard } from "@/components/horse-card";
import { HorseFinderQuiz } from "@/components/horse-finder-quiz";
import { getFeaturedHorses } from "@/lib/horses";

export default function HomePage() {
  const featured = getFeaturedHorses();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark py-24 text-white">
        <Image
          src="/founder.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-20 scale-110"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/60 to-brand-dark/90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Cutting &middot; Reining &middot; Cow Horse &middot; Team Penning
              &middot; Sorting
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Next Champion
              <br />
              <span className="text-brand-gold">Starts Here</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Full-transparency Deal Rooms with video, pedigree, vet records, and
              our honest broker assessment on every horse. No guesswork. No
              surprises. Just the right horse for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/horses"
                className="rounded bg-brand-gold px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-brand-tan"
              >
                View Horses For Sale
              </Link>
              <Link
                href="/subscribe"
                className="rounded border border-brand-gold/50 px-6 py-3 text-sm font-bold text-brand-gold transition hover:bg-brand-gold/10"
              >
                Get 48-Hour First Look Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-brand-tan/20 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 text-center text-xs font-medium uppercase tracking-wider text-brand-brown/60 sm:gap-12 sm:px-6 lg:px-8">
          <span>Vet Records Required</span>
          <span className="hidden h-4 w-px bg-brand-tan/30 sm:block" />
          <span>Multiple Rider Videos</span>
          <span className="hidden h-4 w-px bg-brand-tan/30 sm:block" />
          <span>Full Pedigree Data</span>
          <span className="hidden h-4 w-px bg-brand-tan/30 sm:block" />
          <span>PPE Available</span>
          <span className="hidden h-4 w-px bg-brand-tan/30 sm:block" />
          <span>Published Prices</span>
        </div>
      </section>

      {/* As Seen In — credibility for new visitors */}
      <section className="border-b border-brand-tan/20 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-dark/30">
            Trusted by riders competing with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {["NCHA", "NRHA", "NRCHA", "AQHA", "USTPA"].map((org) => (
              <span
                key={org}
                className="text-lg font-bold tracking-wide text-brand-dark/15 sm:text-xl"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured horses */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
                Featured Horses
              </h2>
              <p className="mt-1 text-sm text-brand-dark/60">
                Hand-selected by our team. Each one has a full Deal Room.
              </p>
            </div>
            <Link
              href="/horses"
              className="hidden text-sm font-semibold text-brand-brown hover:text-brand-gold sm:block"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((horse) => (
              <HorseCard key={horse.slug} horse={horse} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/horses"
              className="text-sm font-semibold text-brand-brown hover:text-brand-gold"
            >
              View All Horses &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-brand-tan/20 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">
            How The Deal Room Works
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-brand-dark/60">
            Every horse we represent gets a dedicated Deal Room page with
            everything you need to make an informed decision.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Video",
                desc: "Professional riding videos with multiple riders showing the horse's true ability and temperament.",
              },
              {
                step: "02",
                title: "Pedigree",
                desc: "Full 3-generation pedigree with earnings, achievements, and progeny records for every ancestor.",
              },
              {
                step: "03",
                title: "Vet Records",
                desc: "Clean PPE on file with X-rays available. We require full disclosure on every horse we list.",
              },
              {
                step: "04",
                title: "Broker's Take",
                desc: "Our honest, written assessment of every horse. We put our name and reputation on every listing.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10 text-lg font-bold text-brand-gold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horse Finder Quiz — self-qualification + email capture */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                Not sure where to start?
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-dark sm:text-3xl">
                Find Your Horse in 30 Seconds
              </h2>
              <p className="mt-3 text-brand-dark/60">
                Answer 3 quick questions and we&apos;ll match you with horses
                that fit your discipline, budget, and experience level. Plus
                you&apos;ll get our free Market Report and 48-hour First Look
                access.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-brand-dark/50">
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-gold">&#10003;</span> 30 seconds
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-gold">&#10003;</span> Free market report
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-gold">&#10003;</span> No spam
                </span>
              </div>
            </div>
            <HorseFinderQuiz />
          </div>
        </div>
      </section>

      {/* CTA + cause-based incentive */}
      <section className="bg-brand-brown py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            See Horses 48 Hours Before Anyone Else
          </h2>
          <p className="mt-3 text-white/70">
            Join our email list and get First Look access to new listings, our
            free quarterly Cow Horse Market Report, and insider pricing alerts.
            No spam, ever.
          </p>
          <Link
            href="/subscribe"
            className="mt-6 inline-block rounded bg-brand-gold px-8 py-3 font-bold text-brand-dark transition hover:bg-brand-tan"
          >
            Join the List — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
