import { plans } from "../lib/pricing";
import { site } from "../lib/site";

export default function PricingSection({
  showTitle = true,
}: {
  showTitle?: boolean;
}) {
  return (
    <section className="space-y-5">
      {showTitle ? (
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Pricing</h2>

          <div className="space-y-1 text-sm text-neutral-700">
            <div>{site.storyDefinition}</div>
            <div>{site.billingNote}</div>
            <div>{site.deliveryNote}</div>
          </div>
        </div>
      ) : (
        <div className="space-y-1 text-sm text-neutral-700">
          <div>{site.storyDefinition}</div>
          <div>{site.billingNote}</div>
          <div>{site.deliveryNote}</div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.id}
            className={[
              "rounded-2xl border p-5 bg-white",
              p.highlight ? "border-neutral-950 shadow-sm" : "border-neutral-200",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.highlight ? (
                <div className="rounded-full bg-neutral-950 px-2 py-1 text-xs text-white">
                  Most popular
                </div>
              ) : null}
            </div>

            <div className="mt-3">
              <div className="text-3xl font-semibold">${p.priceCadMonthly}</div>
              <div className="text-sm text-neutral-700">CAD / month</div>
            </div>

            <div className="mt-4 text-sm text-neutral-700">
              <span className="font-medium text-neutral-950">
                {p.storiesPerMonth}
              </span>{" "}
              stories / month
            </div>

            <a
              href={p.stripeCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-neutral-950 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              {site.cta}
            </a>

            <div className="mt-3 text-xs text-neutral-600">
              Cancel or change plan anytime via the Stripe portal link in your
              welcome email.
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          <span className="font-medium text-neutral-950">Output certainty:</span>{" "}
          If a customer submits feedback, a formatted success story PDF is always
          generated. Every submission produces an output. If answers are short or
          vague, the PDF still generates and counts toward your monthly limit.
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5">
          <div className="font-medium text-neutral-950">
            What happens after you subscribe
          </div>
          <ol className="mt-2 space-y-1 text-sm text-neutral-700">
            <li>1) You receive an email with your customer feedback link.</li>
            <li>2) You send that link to your customer.</li>
            <li>
              3) When they submit, you receive a formatted success story PDF
              automatically.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
