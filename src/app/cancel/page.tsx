import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Checkout canceled</h1>
        <p className="text-neutral-700">No worries. You can restart anytime.</p>
      </div>

      <div className="flex gap-3">
        <Link
          href="/pricing"
          className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-4 py-2 text-white hover:bg-neutral-800"
        >
          Go to pricing
        </Link>
        <Link
          href="/examples"
          className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 hover:bg-neutral-50"
        >
          View examples
        </Link>
      </div>
    </div>
  );
}
