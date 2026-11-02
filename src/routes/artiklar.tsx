import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/articles";
import { SERVICE_IMAGES } from "@/lib/service-images";

export const Route = createFileRoute("/artiklar")({
  head: () => ({
    meta: [
      { title: "Elkunskap – artiklar om säker el och belysning | TäbyEl" },
      { name: "description", content: "Svar om elsäkerhet hemma, uttag, gamla elledningar, flimrande lampor, smart belysning och taklampor. Läs TäbyEls guider." },
      { property: "og:title", content: "Elkunskap – TäbyEls artiklar" },
      { property: "og:description", content: "Praktiska svar om husets el, belysning och när du behöver anlita ett elinstallationsföretag." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/artiklar" },
    ],
    links: [{ rel: "canonical", href: "/artiklar" }],
  }),
  component: Articles,
});

function Articles() {
  return <>
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-spark">TäbyEl</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Elkunskap</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-80">Svar på frågor om elen hemma – från säkerhet och felsökning till smart belysning.</p>
      </div>
    </section>
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
      {ARTICLES.map((article) => <article key={article.slug} className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-card">
        <img src={SERVICE_IMAGES[article.service]} alt={article.category} width={1200} height={675} loading="lazy" className="aspect-video w-full object-cover" />
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{article.category}</p>
          <h2 className="mt-3 text-xl font-semibold">{article.title}</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
          <Button asChild variant="outline" className="mt-6 self-start"><Link to="/artiklar/$slug" params={{ slug: article.slug }}>Läs mer <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </article>)}
    </section>
  </>;
}