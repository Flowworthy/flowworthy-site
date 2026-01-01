const examples = [
  { title: "Sample output (format demo)", file: "/examples/flowworthy-sample.pdf" },
  { title: "NimbusCRM", file: "/examples/nimbuscrm.pdf" },
  { title: "BlueMap Marketing", file: "/examples/bluemap-marketing.pdf" },
  { title: "Northline IT", file: "/examples/northline-it.pdf" },
];

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Examples</h1>
        <p className="text-neutral-700">
          Sample outputs. Each story is generated from one customer submission and delivered as a formatted PDF.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {examples.map((ex) => (
          <div key={ex.file} className="rounded-2xl border border-neutral-200 p-5">
            <div className="font-medium text-neutral-950">{ex.title}</div>

            <a
              href={ex.file}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-neutral-950 px-3 py-2 text-sm text-white hover:bg-neutral-800"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
