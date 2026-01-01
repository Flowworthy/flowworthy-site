import Link from "next/link";
import PricingSection from "../components/PricingSection";
import { site } from "../lib/site";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight">{site.tagline}</h1>

          <p className="text-neutral-700">
            Send your customer one link. When they submit feedback, Flowworthy formats their exact words into a
            structured success story PDF and delivers it to you.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-4 py-2 text-white hover:bg-neutral-800"
            >
              {site.cta}
            </Link>
            <Link
              href="/examples"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-50"
            >
              View examples
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700">
              Uses your customer’s exact words
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700">
              Delivered automatically as PDF
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700">
              No interviews
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <div className="text-sm font-medium text-neutral-950">How it works</div>
          <ol className="mt-3 space-y-2 text-sm text-neutral-700">
            <li><span className="font-medium text-neutral-950">1)</span> Subscribe to a plan.</li>
            <li><span className="font-medium text-neutral-950">2)</span> Share your customer feedback link.</li>
            <li><span className="font-medium text-neutral-950">3)</span> They submit feedback in their own words.</li>
            <li><span className="font-medium text-neutral-950">4)</span> You receive a formatted PDF success story.</li>
          </ol>

          <div className="mt-4">
            <Link className="text-sm font-medium underline" href="/examples">
              See sample PDFs
            </Link>
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Who it’s for</h2>
        <p className="mt-2 text-neutral-700">
          Founder-led B2B businesses that want proof they can share, without chasing testimonials or writing from scratch.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-neutral-700">
          <div className="rounded-xl border border-neutral-200 p-4">
            <div className="font-medium text-neutral-950">B2B SaaS</div>
            <div>Turn customer feedback into a clean story PDF your sales pages can use.</div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-4">
            <div className="font-medium text-neutral-950">Agencies</div>
            <div>Collect outcomes clients already say, then present them professionally.</div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-4">
            <div className="font-medium text-neutral-950">Productized services</div>
            <div>Consistent output, low effort, easy to repeat.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
