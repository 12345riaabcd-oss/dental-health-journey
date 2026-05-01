import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Diet & Dental Health Awareness" },
      { name: "description", content: "Learn how your diet affects your dental health." },
    ],
  }),
});

function Index() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-6 py-8 text-center"
      style={{ backgroundColor: "#1a5c3a" }}
    >
      <div className="w-full max-w-md self-start">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/85 hover:text-white transition"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 max-w-md">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
          <Sparkles size={56} className="text-white" strokeWidth={1.75} />
        </div>
        <h1 className="text-3xl font-semibold text-white tracking-tight">
          Diet & Dental Health Awareness
        </h1>
        <p className="text-base text-white/80 leading-relaxed px-4">
          Discover how the foods you eat shape the health of your teeth and gums — and learn simple habits that protect your smile.
        </p>
      </div>

      <Link
        to="/tips"
        className="w-full max-w-md rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1a5c3a] shadow-lg hover:bg-white/95 transition"
      >
        Let's Begin
      </Link>
    </main>
  );
}
