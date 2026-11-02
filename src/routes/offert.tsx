import { createFileRoute } from "@tanstack/react-router";
import { RequestForm } from "@/components/RequestForm";

export const Route = createFileRoute("/offert")({
  validateSearch: (s: Record<string, unknown>): { tjanst?: string } => (typeof s["tjanst"] === "string" ? { tjanst: s["tjanst"] } : {}),
  head: () => ({
    meta: [
      { title: "Begär offert – TäbyEl" },
      { name: "description", content: "Beskriv ditt elprojekt och få ett kostnadsförslag från TäbyEl." },
      { property: "og:title", content: "Begär offert – TäbyEl" },
      { property: "og:description", content: "Kostnadsfri offertförfrågan för elarbeten." },
    ],
  }),
  component: Quote,
});

function Quote() {
  const { tjanst } = Route.useSearch();
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-bold">Begär offert</h1>
      <p className="mt-3 text-muted-foreground">Berätta om ditt projekt så tar vi fram ett kostnadsförslag.</p>
      <div className="mt-8"><RequestForm type="quote" defaultService={tjanst} /></div>
    </section>
  );
}
