import { site } from "../../lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-neutral-700">
          Questions about plans, delivery, or anything else? Email support.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-5">
        <div className="text-sm text-neutral-600">Support email</div>
        <a className="mt-1 block text-lg font-semibold underline" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        <div className="mt-3 text-sm text-neutral-700">
          Typical response time: within 1 business day.
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        If you're already subscribed, you can cancel or change plans using the Stripe portal link in your welcome email.
      </div>
    </div>
  );
}
