import Link from "next/link";
import { site } from "../../lib/site";

export default function ThanksPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">You’re subscribed 🎉</h1>
        <p className="text-neutral-700">
          Next step: check your email for your customer feedback link and your Stripe portal link.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-5">
        <div className="font-medium text-neutral-950">What to do next</div>
        <ol className="mt-2 space-y-1 text-sm text-neutral-700">
          <li>1) Open your welcome email.</li>
          <li>2) Copy your customer feedback link.</li>
          <li>3) Send it to a customer.</li>
          <li>4) When they submit, you’ll receive a formatted success story PDF automatically sent to your email.</li>
        </ol>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        Didn’t receive the email? Check spam, then contact{" "}
        <a className="font-medium underline" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        .
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/examples"
          className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-4 py-2 text-white hover:bg-neutral-800"
        >
          See sample PDFs
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-50"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
