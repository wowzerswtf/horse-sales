"use client";

export function ShareUrl({ slug }: { slug: string }) {
  return (
    <input
      type="text"
      readOnly
      value={`ironhidehorses.com/horses/${slug}`}
      className="w-full rounded border border-brand-tan/30 bg-brand-cream px-3 py-2 text-xs text-brand-dark/60"
      onClick={(e) => (e.target as HTMLInputElement).select()}
    />
  );
}
