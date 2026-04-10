import type { Pedigree, PedigreeNode } from "@/lib/types";

function PedigreeCell({ node, level }: { node: PedigreeNode; level: number }) {
  const sizes = ["text-sm font-bold", "text-xs font-semibold", "text-[11px]"];
  return (
    <div
      className={`rounded border border-brand-tan/30 bg-white p-2 ${level === 0 ? "shadow-sm" : ""}`}
    >
      <p className={`${sizes[level] ?? sizes[2]} text-brand-dark`}>
        {node.name}
      </p>
      {node.achievements && (
        <p className="mt-0.5 text-[10px] leading-tight text-brand-gold">
          {node.achievements}
        </p>
      )}
      {node.registration && (
        <p className="text-[10px] text-brand-dark/40">{node.registration}</p>
      )}
    </div>
  );
}

export function PedigreeChart({ pedigree }: { pedigree: Pedigree }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Generation labels */}
        <div className="mb-2 grid grid-cols-[1fr_1fr_1fr] gap-2 text-center text-[10px] font-semibold uppercase tracking-wider text-brand-brown/50">
          <span>Parents</span>
          <span>Grandparents</span>
          <span>Great-Grandparents</span>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
          {/* Sire side */}
          <div className="row-span-4 flex items-center">
            <PedigreeCell node={pedigree.sire} level={0} />
          </div>
          <div className="row-span-2 flex items-center">
            {pedigree.sire.sire && (
              <PedigreeCell node={pedigree.sire.sire} level={1} />
            )}
          </div>
          <div className="flex items-center">
            {pedigree.sire.sire && (
              <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
                <p className="text-[10px] text-brand-dark/60">Sire&apos;s Sire&apos;s Sire</p>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Sire&apos;s Sire&apos;s Dam</p>
            </div>
          </div>
          <div className="row-span-2 flex items-center">
            {pedigree.sire.dam && (
              <PedigreeCell node={pedigree.sire.dam} level={1} />
            )}
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Sire&apos;s Dam&apos;s Sire</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Sire&apos;s Dam&apos;s Dam</p>
            </div>
          </div>

          {/* Dam side */}
          <div className="row-span-4 flex items-center">
            <PedigreeCell node={pedigree.dam} level={0} />
          </div>
          <div className="row-span-2 flex items-center">
            {pedigree.dam.sire && (
              <PedigreeCell node={pedigree.dam.sire} level={1} />
            )}
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Dam&apos;s Sire&apos;s Sire</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Dam&apos;s Sire&apos;s Dam</p>
            </div>
          </div>
          <div className="row-span-2 flex items-center">
            {pedigree.dam.dam && (
              <PedigreeCell node={pedigree.dam.dam} level={1} />
            )}
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Dam&apos;s Dam&apos;s Sire</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded border border-brand-tan/20 bg-brand-cream p-1.5">
              <p className="text-[10px] text-brand-dark/60">Dam&apos;s Dam&apos;s Dam</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 text-[10px] text-brand-dark/40">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded bg-brand-gold" /> Top Sire Line
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded bg-brand-tan" /> Bottom Dam Line
          </span>
        </div>
      </div>
    </div>
  );
}
