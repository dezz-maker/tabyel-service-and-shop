import { createFileRoute } from "@tanstack/react-router";
import { RequestForm } from "@/components/RequestForm";

export const Route = createFileRoute("/boka")({
  validateSearch: (s: Record<string, unknown>) => ({ tjanst: typeof s.tjanst === "string" ? s.tjanst : undefined }),
  head: () => ({
    meta: [
      { title: "Boka elektriker – TäbyEl" },
      { name: "description", content: "Boka en behörig elektriker i Stockholm. Välj tjänst, datum och tid." },
      { property: "og:title", content: "Boka elektriker – TäbyEl" },
      { property: "og:description", content: "Enkel bokning av elektriker online." },
    ],
  }),
  component: Book,
});

function Book() {
  const { tjanst } = Route.useSearch();
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-bold">Boka elektriker</h1>
      <p className="mt-3 text-muted-foreground">Välj tjänst och önskad dag – vi bekräftar tiden med dig.</p>
      <div className="mt-8"><RequestForm type="booking" defaultService={tjanst} /></div>
    </section>
  );
}
