import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "How Your Diet Affects Your Teeth" },
      { name: "description", content: "Four key ways your diet impacts dental health." },
    ],
  }),
});

const steps = [
  { n: 1, title: "Sugar Feeds Harmful Bacteria", desc: "Sugary foods fuel bacteria that produce enamel-damaging acids." },
  { n: 2, title: "Acidic Foods Erode Enamel", desc: "Citrus, soda, and vinegar weaken your tooth's protective layer." },
  { n: 3, title: "Calcium Strengthens Teeth", desc: "Dairy and leafy greens rebuild and reinforce tooth structure." },
  { n: 4, title: "Crunchy Vegetables Clean Naturally", desc: "Carrots and celery scrub teeth and stimulate saliva flow." },
];

function TipsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 py-10 text-center">
      <div className="w-full max-w-md flex flex-col items-center gap-8 flex-1">
        <h1 className="text-2xl font-semibold text-[#1a5c3a] tracking-tight">
          How Your Diet Affects Your Teeth
        </h1>

        <div className="w-full flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col items-center gap-3 rounded-2xl p-6"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-white font-semibold" style={{ backgroundColor: "#1a5c3a" }}>
                {s.n}
              </div>
              <h2 className="text-base font-bold text-gray-900">{s.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/done"
        className="mt-8 w-full max-w-md rounded-full px-8 py-4 text-base font-semibold text-white shadow-md hover:opacity-95 transition"
        style={{ backgroundColor: "#1a5c3a" }}
      >
        Done
      </Link>
    </main>
  );
}