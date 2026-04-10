import type { Metadata } from "next";
import { HorseCard } from "@/components/horse-card";
import { getAvailableHorses } from "@/lib/horses";

export const metadata: Metadata = {
  title: "Horses For Sale",
  description:
    "Browse cutting horses, reining horses, cow horses, team penning and sorting horses for sale. Each horse has a full Deal Room with video, pedigree, vet records, and honest assessment.",
};

export default function HorsesPage() {
  const horses = getAvailableHorses();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">
            Horses For Sale
          </h1>
          <p className="mt-1 text-sm text-brand-dark/60">
            {horses.length} horses available. Click any horse to view the full
            Deal Room.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse) => (
            <HorseCard key={horse.slug} horse={horse} />
          ))}
        </div>

        {horses.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-brand-dark/60">
              No horses currently listed. Check back soon or join our email list
              for alerts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
