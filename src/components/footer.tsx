import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-brand-gold">IRON HIDE</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-brand-tan">
              Performance Horse Brokers
            </p>
            <p className="mt-4 text-sm">
              The most transparent horse broker in America. Cutting, Reining, Cow
              Horse, Team Penning & Sorting.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/horses" className="hover:text-brand-gold">
                  Horses For Sale
                </Link>
              </li>
              <li>
                <Link href="/subscribe" className="hover:text-brand-gold">
                  Join the List
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>info@ironhidehorses.com</li>
              <li>(555) 123-4567</li>
              <li>Weatherford, TX</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Iron Hide Performance Horse Brokers.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
