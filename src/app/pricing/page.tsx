import PricingSection from "../../components/PricingSection";

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
        <p className="text-neutral-700">
          Choose a plan based on how many customer success stories you want generated each month.
        </p>
      </div>

      <PricingSection showTitle={false} />
    </div>
  );
}
