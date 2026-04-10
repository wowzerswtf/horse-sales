import Link from "next/link";
import { TermsLink, PrivacyLink } from "@/components/legal-modals";
import { SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-brand-gold">
              {SITE.name.toUpperCase()}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-brand-tan">
              {SITE.tagline}
            </p>
            <p className="mt-4 text-sm">
              The most transparent horse sales company in America. Cutting,
              Reining, Cow Horse, Team Penning & Sorting.
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
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {SITE.fullName}. All rights
            reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-3">
            <TermsLink /> <span>&middot;</span> <PrivacyLink />
          </p>
        </div>
      </div>
    </footer>
  );
}
