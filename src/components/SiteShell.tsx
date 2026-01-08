import Link from "next/link";
import Image from "next/image";
import { site } from "../lib/site";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/flowworthy-logo.png"
              alt="Flowworthy logo"
              width={28}
              height={28}
              className="rounded"
              priority
            />
            <span className="font-semibold tracking-tight">{site.name}</span>
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="text-neutral-700 hover:text-neutral-950" href="/">
              Home
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-950" href="/pricing">
              Pricing
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-950" href="/examples">
              Examples
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-950" href="/faq">
              FAQ
            </Link>
            <Link className="text-neutral-700 hover:text-neutral-950" href="/contact">
              Contact
            </Link>

            <Link
              className="rounded-md bg-neutral-950 px-3 py-2 text-white hover:bg-neutral-800"
              href="/pricing"
            >
              Start collecting stories
            </Link>
          </nav>

          {/* Mobile CTA */}
          <Link
            className="md:hidden rounded-md bg-neutral-950 px-3 py-2 text-sm text-white hover:bg-neutral-800"
            href="/pricing"
          >
            Start collecting stories
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-medium text-neutral-950">{site.name}</div>
            <div>{site.tagline}</div>
          </div>
          <div className="flex gap-4">
            <Link className="hover:text-neutral-950" href="/contact">
              Contact
            </Link>
            <Link className="hover:text-neutral-950" href="/pricing">
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
