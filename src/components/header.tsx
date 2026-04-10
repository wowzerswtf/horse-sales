import Link from "next/link";

export function Header() {
  return (
    <header className="bg-brand-dark text-white">
      {/* Prominent contact info — conversion bible: phone in header */}
      <div className="border-b border-white/10 bg-brand-dark/80 px-4 py-1.5 text-center text-xs text-white/60 sm:text-left">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>
            Call or text:{" "}
            <a
              href="tel:+15551234567"
              className="font-semibold text-brand-gold hover:text-brand-tan"
            >
              (555) 123-4567
            </a>
          </span>
          <span className="hidden sm:inline">
            Weatherford, TX &middot; Serving buyers nationwide
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-gold">
                IRON HIDE
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-tan">
                Performance Horse Sales
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/horses"
              className="text-sm font-medium text-white/80 transition hover:text-brand-gold"
            >
              Horses For Sale
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/80 transition hover:text-brand-gold"
            >
              About
            </Link>
            <Link
              href="/subscribe"
              className="rounded bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-tan"
            >
              Get First Look Access
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Link
            href="/horses"
            className="rounded bg-brand-gold px-3 py-1.5 text-sm font-semibold text-brand-dark md:hidden"
          >
            View Horses
          </Link>
        </div>
      </div>
    </header>
  );
}
