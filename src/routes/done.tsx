import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/done")({
  component: DonePage,
  head: () => ({
    meta: [
      { title: "Great Awareness!" },
      { name: "description", content: "You've completed the diet & dental health awareness activity." },
    ],
  }),
});

function DonePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 py-10 text-center">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 max-w-md w-full">
        <CheckCircle2 size={88} className="text-[#1a5c3a]" strokeWidth={1.75} />
        <h1 className="text-3xl font-semibold text-[#1a5c3a] tracking-tight">
          Great Awareness!
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          You've taken an important step toward a healthier smile. Keep these habits in mind every day.
        </p>

        <div
          className="w-full rounded-2xl p-6 text-left flex flex-col gap-3"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <p className="text-sm font-semibold text-gray-800 text-center">Daily Reminders</p>
          <ul className="flex flex-col gap-3 text-sm text-gray-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#1a5c3a] font-bold">•</span>
              <span>Drink water after meals to wash away food and acid.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#1a5c3a] font-bold">•</span>
              <span>Chewing sugar-free gum after eating helps neutralise acid.</span>
            </li>
          </ul>
        </div>
      </div>

      <Link
        to="/"
        className="mt-8 w-full max-w-md rounded-full px-8 py-4 text-base font-semibold text-white shadow-md hover:opacity-95 transition"
        style={{ backgroundColor: "#1a5c3a" }}
      >
        Back to Home
      </Link>
    </main>
  );
}