import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHorseBySlug, formatPrice, horses } from "@/lib/horses";
import { DISCIPLINE_LABELS } from "@/lib/types";
import { SITE } from "@/lib/config";
import { PedigreeChart } from "@/components/deal-room/pedigree-chart";
import { InquiryForm } from "@/components/deal-room/inquiry-form";
import { ShareUrl } from "@/components/deal-room/share-url";
import { FAQSection } from "@/components/deal-room/faq-section";
import { StickyCTA } from "@/components/sticky-cta";
import {
  ViewerCount,
  RecentActivity,
  DemandBadge,
  InquiryCount,
} from "@/components/deal-room/social-proof";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return horses.map((horse) => ({ slug: horse.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);
  if (!horse) return { title: "Horse Not Found" };

  return {
    title: `${horse.name} — ${horse.breed} ${horse.gender} for sale`,
    description: `${horse.name}: ${horse.age}yo ${horse.color} ${horse.gender}, ${horse.height}. ${horse.discipline.map((d) => DISCIPLINE_LABELS[d]).join(", ")}. ${horse.lte ?? ""}. ${horse.location}. ${formatPrice(horse.price)}.`,
  };
}

export default async function DealRoomPage({ params }: Props) {
  const { slug } = await params;
  const horse = getHorseBySlug(slug);
  if (!horse) notFound();

  return (
    <article className="pb-16">
      {/* Hero section */}
      <div className="relative bg-brand-dark py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/30 to-brand-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              {horse.status === "sold" && (
                <span className="mb-2 inline-block rounded bg-red-600 px-3 py-1 text-xs font-bold">
                  SOLD
                </span>
              )}
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {horse.name}
              </h1>
              <p className="mt-1 text-sm text-brand-tan">
                &ldquo;{horse.barnName}&rdquo; &middot; {horse.registration}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {horse.discipline.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold text-brand-gold"
                  >
                    {DISCIPLINE_LABELS[d]}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <ViewerCount slug={horse.slug} />
                <DemandBadge price={horse.price} />
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4">
                {[
                  { label: "Age", value: `${horse.age} years` },
                  { label: "Color", value: horse.color },
                  { label: "Gender", value: horse.gender.charAt(0).toUpperCase() + horse.gender.slice(1) },
                  { label: "Height", value: horse.height },
                  { label: "Breed", value: horse.breed },
                  { label: "Location", value: horse.location },
                  { label: "LTE", value: horse.lte ?? "N/A" },
                  { label: "Listed", value: new Date(horse.listedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-white/40">{item.label}</dt>
                    <dd className="font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="text-right lg:text-right">
              <p className="text-3xl font-bold text-brand-gold sm:text-4xl">
                {formatPrice(horse.price)}
              </p>
              <p className="mt-1 text-xs text-white/40">Published asking price</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Main content */}
          <div className="space-y-12">
            {/* Hero image placeholder */}
            <section>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-brand-tan/20">
                <div className="flex h-full items-center justify-center text-brand-brown/30">
                  <div className="text-center">
                    <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-sm font-medium">Hero Video — Coming Soon</p>
                    <p className="text-xs">Mux video player will go here</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Videos */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">Videos</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {horse.videos.map((video) => (
                  <div
                    key={video.title}
                    className="aspect-video overflow-hidden rounded-lg bg-brand-tan/10"
                  >
                    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                      <svg className="h-10 w-10 text-brand-brown/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="mt-2 text-xs font-medium text-brand-brown/60">
                        {video.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo gallery */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">Photos</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {horse.images.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] overflow-hidden rounded-lg bg-brand-tan/10"
                  >
                    <div className="flex h-full items-center justify-center">
                      <svg className="h-8 w-8 text-brand-brown/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">About This Horse</h2>
              <p className="mt-3 leading-relaxed text-brand-dark/80">
                {horse.description}
              </p>
            </section>

            {/* Our Take */}
            <section className="rounded-lg border-2 border-brand-gold/30 bg-brand-gold/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-dark">
                  IH
                </div>
                <div>
                  <h2 className="font-bold text-brand-dark">
                    Our Take
                  </h2>
                  <p className="text-xs text-brand-dark/50">
                    {SITE.fullName}
                  </p>
                </div>
              </div>
              <p className="mt-4 italic leading-relaxed text-brand-dark/80">
                &ldquo;{horse.brokerTake}&rdquo;
              </p>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                Achievements & Earnings
              </h2>
              <ul className="mt-3 space-y-2">
                {horse.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm text-brand-dark/80"
                  >
                    <span className="mt-0.5 text-brand-gold">&#9733;</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            {/* Pedigree */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">Pedigree</h2>
              <div className="mt-4 rounded-lg border border-brand-tan/20 bg-white p-4">
                <PedigreeChart pedigree={horse.pedigree} />
              </div>
            </section>

            {/* Training */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                Training & History
              </h2>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-brand-dark">
                    Current Training
                  </dt>
                  <dd className="mt-0.5 text-brand-dark/70">{horse.training}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-dark">Trainer</dt>
                  <dd className="mt-0.5 text-brand-dark/70">{horse.trainer}</dd>
                </div>
              </dl>
            </section>

            {/* Vet */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                Veterinary & Soundness
              </h2>
              <div className="mt-3 rounded-lg bg-green-50 p-4">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  <div>
                    <p className="text-sm font-semibold text-green-800">
                      PPE & Vet Records On File
                    </p>
                    <p className="mt-1 text-sm text-green-700/80">
                      {horse.vetNotes}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-brand-dark/40">
                Full X-rays and detailed vet reports available upon qualified
                inquiry. Pre-Purchase Exam available for $1,000. We strongly
                recommend a PPE before any purchase. All sales are final.
              </p>
            </section>

            {/* FAQ — conversion bible: answer buyer questions on page */}
            <section>
              <h2 className="text-xl font-bold text-brand-dark">
                Frequently Asked Questions
              </h2>
              <div className="mt-4">
                <FAQSection />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            {/* Price card */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="text-2xl font-bold text-brand-brown">
                {formatPrice(horse.price)}
              </p>
              <p className="text-xs text-brand-dark/40">
                Pre-Purchase Exam available — $1,000
              </p>

              <InquiryCount slug={horse.slug} />

              <div className="mt-3">
                <RecentActivity slug={horse.slug} />
              </div>

              <hr className="my-4 border-brand-tan/20" />

              <h3 id="inquire" className="font-bold text-brand-dark">
                Inquire About {horse.barnName}
              </h3>
              <p className="mt-1 text-xs text-brand-dark/50">
                Fill out the form below and we&apos;ll be in touch within 24
                hours with next steps, additional videos, and scheduling options.
              </p>

              <div className="mt-4">
                <InquiryForm
                  horseSlug={horse.slug}
                  horseName={horse.barnName}
                />
              </div>

              {/* Social proof next to friction point */}
              <div className="mt-4 rounded-lg bg-brand-cream p-3">
                <p className="text-xs italic text-brand-dark/60">
                  &ldquo;I was nervous buying a horse sight-unseen from across
                  the country. The Deal Room had everything — videos, vet
                  records, pedigree. I flew out, rode him once, and trailered
                  him home that weekend.&rdquo;
                </p>
                <p className="mt-1 text-[10px] font-semibold text-brand-dark/40">
                  — Future buyer testimonial
                </p>
              </div>
            </div>

            {/* Schedule a Video Call — virtual outfitting for high-ticket */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-bold text-brand-dark">
                Prefer to Talk First?
              </h3>
              <p className="mt-1 text-xs text-brand-dark/50">
                Schedule a 1-on-1 video call. We&apos;ll walk you through
                this horse, answer questions, and show you live video if
                you&apos;d like.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-3 block w-full rounded border-2 border-brand-brown py-2.5 text-center text-sm font-bold text-brand-brown transition hover:bg-brand-brown hover:text-white"
              >
                Call {SITE.phone}
              </a>
              <p className="mt-2 text-center text-[10px] text-brand-dark/40">
                Or text us — we respond fast
              </p>
            </div>

            {/* Quick facts */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-bold text-brand-dark">Quick Facts</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {[
                  { label: "Breed", value: horse.breed },
                  { label: "Age", value: `${horse.age} years old` },
                  { label: "Height", value: horse.height },
                  { label: "Color", value: horse.color },
                  { label: "Gender", value: horse.gender.charAt(0).toUpperCase() + horse.gender.slice(1) },
                  { label: "Location", value: horse.location },
                  { label: "LTE", value: horse.lte ?? "N/A" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <dt className="text-brand-dark/50">{item.label}</dt>
                    <dd className="font-medium text-brand-dark">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Share */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="font-bold text-brand-dark">
                Share This Deal Room
              </h3>
              <p className="mt-1 text-xs text-brand-dark/50">
                Send this page to your trainer, spouse, or riding partner.
              </p>
              <div className="mt-3">
                <ShareUrl slug={horse.slug} />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky CTA on mobile — always visible inquiry button */}
      <StickyCTA horseName={horse.barnName} price={formatPrice(horse.price)} />
    </article>
  );
}
