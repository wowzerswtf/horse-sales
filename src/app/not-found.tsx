import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-24">
      <h1 className="text-6xl font-bold text-brand-dark/20">404</h1>
      <p className="mt-4 text-lg font-semibold text-brand-dark">
        Horse Not Found
      </p>
      <p className="mt-1 text-sm text-brand-dark/50">
        This horse may have been sold or the link may be incorrect.
      </p>
      <Link
        href="/horses"
        className="mt-6 rounded bg-brand-gold px-6 py-2 text-sm font-bold text-brand-dark transition hover:bg-brand-tan"
      >
        View Available Horses
      </Link>
    </div>
  );
}
