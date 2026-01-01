import { site } from "../../lib/site";

const faqs = [
  {
    q: "What counts as 1 story?",
    a: site.storyDefinition,
  },
  {
    q: "How fast is delivery?",
    a: site.deliveryNote,
  },
  {
    q: "Do you rewrite or edit what the customer says?",
    a: "No. The PDF uses the customer's submitted responses. We format and organize their exact words into a clean structure.",
  },
  {
    q: "Are there revisions?",
    a: "No revisions. The output is generated from the customer’s submission as-is.",
  },
  {
    q: "What if the customer gives weak answers?",
    a: "A PDF is still generated based on what they provided, and it counts toward your monthly story limit.",
  },
  {
    q: "How does billing work?",
    a: site.billingNote,
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Yes. Cancel or switch plans anytime through the Stripe customer portal link sent in your welcome email.",
  },
  {
    q: "Who is this not for?",
    a: "If you need long-form case studies, interviews, strategy calls, or heavy rewriting, this is not a fit.",
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
        <p className="text-neutral-700">
          Quick answers to the questions that usually come up before subscribing.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-2xl border border-neutral-200 p-5">
            <summary className="cursor-pointer font-medium text-neutral-950">
              {f.q}
            </summary>
            <div className="mt-2 text-neutral-700">{f.a}</div>
          </details>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        Still unsure? Email{" "}
        <a className="font-medium underline" href={`mailto:${site.supportEmail}`}>
          {site.supportEmail}
        </a>
        .
      </div>
    </div>
  );
}
