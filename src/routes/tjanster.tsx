import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tjänster – TäbyEl" },
      { name: "description", content: "Elinstallationer, smarta hem, elcentral, laddbox, felsökning och kontorsanpassning." },
      { property: "og:title", content: "Tjänster – TäbyEl" },
      { property: "og:description", content: "Alla elektrikertjänster för hem och företag i Stockholm." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-bold">Tjänster</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">Allt från mindre elarbeten i hemmet till större projekt.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.slug} className="flex flex-col rounded-xl border bg-card p-6 shadow-card">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 flex-1 text-muted-foreground">{s.text}</p>
            <div className="mt-5 flex gap-2">
              <Button asChild variant="outline" size="sm"><Link to="/tjanster/$slug" params={{ slug: s.slug }}>Läs mer</Link></Button>
              <Button asChild variant="spark" size="sm"><Link to="/offert" search={{ tjanst: s.title }}>Begär offert</Link></Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
