import Link from "next/link";
import type { Horse } from "@/lib/types";
import { DISCIPLINE_LABELS } from "@/lib/types";
import { formatPrice } from "@/lib/horses";

export function HorseCard({ horse }: { horse: Horse }) {
  return (
    <Link
      href={`/horses/${horse.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/3] bg-brand-tan/20">
        <div className="absolute inset-0 flex items-center justify-center text-brand-brown/30">
          <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {horse.status === "sold" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded bg-red-600 px-4 py-2 text-lg font-bold text-white">
              SOLD
            </span>
          </div>
        )}
        {horse.featured && horse.status === "available" && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            <span className="rounded bg-brand-gold px-2 py-0.5 text-xs font-bold text-brand-dark">
              FEATURED
            </span>
            {horse.price >= 75000 && (
              <span className="rounded bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                HOT
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-brand-dark group-hover:text-brand-brown">
            {horse.name}
          </h3>
          <span className="shrink-0 text-lg font-bold text-brand-brown">
            {formatPrice(horse.price)}
          </span>
        </div>

        <p className="mt-1 text-sm text-brand-dark/60">
          {horse.age}yo {horse.color} {horse.gender} &middot; {horse.breed} &middot;{" "}
          {horse.height}
        </p>

        <div className="mt-2 flex flex-wrap gap-1">
          {horse.discipline.map((d) => (
            <span
              key={d}
              className="rounded-full bg-brand-cream px-2 py-0.5 text-xs font-medium text-brand-brown"
            >
              {DISCIPLINE_LABELS[d]}
            </span>
          ))}
        </div>

        {horse.lte && (
          <p className="mt-2 text-sm font-semibold text-brand-gold">
            {horse.lte}
          </p>
        )}

        <p className="mt-1 text-xs text-brand-dark/50">{horse.location}</p>
      </div>
    </Link>
  );
}
