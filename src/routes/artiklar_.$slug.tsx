import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/articles";
import { SERVICES } from "@/lib/services";
import { SERVICE_IMAGES } from "@/lib/service-images";

export const Route = createFileRoute("/artiklar_/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Artikeln kunde inte visas – TäbyEl" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | TäbyEl` },
        { name: "description", content: article.description },
        { property: "og:title", content: `${article.title} | TäbyEl` },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/artiklar/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/artiklar/${params.slug}` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article", headline: article.title,
        description: article.description, inLanguage: "sv-SE", datePublished: "2026-11-02",
        author: { "@type": "Organization", name: "TäbyEl" },
        publisher: { "@type": "Organization", name: "AB Täby Elinstallationer" },
      }) }],
    };
  },
  notFoundComponent: () => <div className="mx-auto max-w-4xl px-4 py-16"><h1 className="text-3xl font-bold">Artikeln hittades inte</h1><Link to="/artiklar" className="mt-6 inline-block underline">Till alla artiklar</Link></div>,
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const service = SERVICES.find((item) => item.slug === article.service);
  return <>
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <Link to="/artiklar" className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100"><ArrowLeft className="h-4 w-4" /> Alla artiklar</Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-spark">{article.category}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-relaxed opacity-90">{article.answer}</p>
        <p className="mt-6 text-sm opacity-70">TäbyEl · <time dateTime="2026-11-02">2 november 2026</time></p>
      </div>
    </section>
    <article className="mx-auto max-w-4xl px-4 py-10 md:py-14">
      <img src={SERVICE_IMAGES[article.service]} alt={service?.title ?? article.category} width={1200} height={675} className="aspect-video w-full rounded-lg object-cover" />
      {article.warning && <aside className="mt-8 flex gap-3 border-l-4 border-spark bg-muted p-5"><TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="leading-relaxed">{article.warning}</p></aside>}
      <div className="max-w-3xl">
        {article.sections.map((section) => <section key={section.title} className="mt-10">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted-foreground">{paragraph}</p>)}
          {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted-foreground">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </section>)}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold">Källor och vidare läsning</h2>
          <ul className="mt-3 space-y-2">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{source.label}</a></li>)}</ul>
          <p className="mt-4 text-sm text-muted-foreground">Allmän information ersätter inte en bedömning av din elinstallation. Regler och förutsättningar behöver kontrolleras för det aktuella arbetet.</p>
        </section>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="spark"><Link to="/kontakt">Kontakta TäbyEl <ArrowRight className="h-4 w-4" /></Link></Button>
          {service && <Button asChild variant="outline"><Link to="/tjanster/$slug" params={{ slug: service.slug }}>{service.title}</Link></Button>}
        </div>
      </div>
    </article>
    <section className="bg-muted/50">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-2xl font-bold">Mer elkunskap</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">{ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 4).map((item) => <Link key={item.slug} to="/artiklar/$slug" params={{ slug: item.slug }} className="flex items-center justify-between gap-4 rounded-lg border bg-card p-5 font-medium hover:text-primary">{item.title}<ArrowRight className="h-4 w-4 shrink-0" /></Link>)}</div>
      </div>
    </section>
  </>;
}