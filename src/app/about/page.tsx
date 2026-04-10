import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Iron Hide Performance Horse Brokers — the most transparent horse broker in America. Cutting, reining, cow horse, team penning & sorting.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">
          The Most Transparent Horse Broker in America
        </h1>

        <div className="mt-8 space-y-6 text-brand-dark/80">
          <p>
            Iron Hide was built on a simple idea: buying a performance horse
            shouldn&apos;t feel like a gamble.
          </p>

          <p>
            The cow horse world runs on word of mouth. That works when you know
            the right people. But if you don&apos;t? You&apos;re scrolling
            Facebook groups, texting trainers who won&apos;t text back, flying
            across the country to try horses that aren&apos;t what they were
            described as, and hoping the vet check doesn&apos;t come back with
            surprises.
          </p>

          <p>
            We built the Deal Room to fix that. Every horse we represent gets a
            dedicated page with professional video, a full photo gallery, a
            3-generation pedigree chart, vet records on file, training history,
            and our honest written assessment. Everything is disclosed upfront.
            No hidden issues. No surprises at the vet check.
          </p>

          <h2 className="text-xl font-bold text-brand-dark">Our Standards</h2>

          <ul className="space-y-3">
            {[
              "Vet records are required on every horse we list. No exceptions. If a seller won't provide records, we won't represent the horse.",
              "Multiple rider videos. We want you to see this horse ridden by different people, not just the trainer who's been on him for 3 years.",
              "Published prices. The cow horse market has historically been opaque. We believe published prices build trust and save everyone time.",
              "Pre-Purchase Exam available on every horse for $1,000. We strongly recommend a PPE before any purchase. All sales are final.",
              "Our written assessment on every horse. We put our name on it. If we don't believe in the horse, we don't list the horse.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-brand-gold">&#9733;</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-brand-dark">
            Disciplines We Specialize In
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: "Cutting", desc: "NCHA futurity, derby, classic, and weekend show horses" },
              { name: "Reining", desc: "NRHA futurity, derby, and Non-Pro horses" },
              { name: "Reined Cow Horse", desc: "NRCHA snaffle bit, hackamore, and bridle horses" },
              { name: "Team Penning & Sorting", desc: "AQHA, USTPA, and ranch-level competition horses" },
            ].map((d) => (
              <div
                key={d.name}
                className="rounded-lg border border-brand-tan/20 bg-white p-4"
              >
                <p className="font-bold text-brand-dark">{d.name}</p>
                <p className="mt-1 text-sm text-brand-dark/60">{d.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-brand-dark">
            Looking to Sell?
          </h2>

          <p>
            If you have a quality performance horse and want the full Deal Room
            treatment — professional marketing, our email list of qualified
            buyers, and a transparent sales process — reach out. We&apos;re
            selective about what we list because our reputation depends on every
            single horse.
          </p>

          <div className="rounded-lg bg-brand-brown/5 p-6">
            <p className="font-semibold text-brand-dark">Get in touch</p>
            <p className="mt-1 text-sm text-brand-dark/60">
              info@ironhidehorses.com &middot; (555) 123-4567
            </p>
            <div className="mt-4">
              <Link
                href="/subscribe"
                className="inline-block rounded bg-brand-gold px-6 py-2 text-sm font-bold text-brand-dark transition hover:bg-brand-tan"
              >
                Join Our Email List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
