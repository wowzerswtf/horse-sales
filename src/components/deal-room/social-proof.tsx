"use client";

import { useState, useEffect } from "react";

function getRandomViewers(slug: string): number {
  // Seed a consistent-ish base number from the slug so it doesn't wildly change
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const base = 8 + Math.abs(hash % 15); // 8-22 base viewers
  return base;
}

export function ViewerCount({ slug }: { slug: string }) {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const base = getRandomViewers(slug);
    setViewers(base);

    // Fluctuate slightly every 30s for realism
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.max(5, Math.min(next, base + 8));
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [slug]);

  if (viewers === 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>
      <span className="font-medium text-brand-dark">
        {viewers} people viewing this listing
      </span>
    </div>
  );
}

export function RecentActivity({ slug }: { slug: string }) {
  const [activity, setActivity] = useState<string | null>(null);

  useEffect(() => {
    const activities = [
      "Someone from Texas inquired about this horse",
      "This listing was shared 3 times today",
      "A trainer in Oklahoma saved this listing",
      "Someone from California viewed this Deal Room",
      "This horse was featured in our weekly email",
      "A buyer from Florida requested more videos",
    ];

    // Pick one based on slug hash for consistency
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    setActivity(activities[Math.abs(hash) % activities.length]);
  }, [slug]);

  if (!activity) return null;

  return (
    <div className="flex items-start gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-800">
      <span className="mt-0.5 shrink-0">&#9432;</span>
      <span>{activity}</span>
    </div>
  );
}

export function DemandBadge({ price }: { price: number }) {
  // Higher priced horses show "High Demand"
  const isHighDemand = price >= 75000;

  if (!isHighDemand) return null;

  return (
    <div className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
      <span>&#128293;</span>
      High Demand
    </div>
  );
}

export function InquiryCount({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Generate a realistic inquiry count from slug
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    setCount(3 + Math.abs(hash % 9)); // 3-11 inquiries
  }, [slug]);

  if (count === 0) return null;

  return (
    <p className="text-xs text-brand-dark/50">
      {count} inquiries received on this horse
    </p>
  );
}
