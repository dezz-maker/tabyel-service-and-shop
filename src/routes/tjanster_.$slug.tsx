import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { SERVICE_DETAILS } from "@/lib/service-details";
import imgEl from "@/assets/services/elinstallationer.jpg.asset.json";
import imgSmart from "@/assets/services/smarta-hem.jpg.asset.json";
import imgKontor from "@/assets/services/kontorsanpassning.jpg.asset.json";
import imgCentral from "@/assets/services/elcentral.jpg";
import imgLadd from "@/assets/services/laddbox.jpg";
import imgFel from "@/assets/services/felsokning.jpg";

const IMAGES: Record<string, string> = {
  elinstallationer: imgEl.url,
  "smarta-hem": imgSmart.url,
  kontorsanpassning: imgKontor.url,
  elcentral: imgCentral,
  laddbox: imgLadd,
  felsokning: imgFel,
};

export const Route = createFileRoute("/tjanster_/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const detail = SERVICE_DETAILS[params.slug];
    if (!service || !detail) throw notFound();
    return { service, detail };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Tjänsten hittades inte – TäbyEl" }, { name: "robots", content: "noindex" }] };
    const { detail, service } = loaderData;
    return {
      meta: [
        { title: detail.seoTitle },
        { name: "description", content: detail.description },
        { property: "og:title", content: detail.seoTitle },
        { property: "og:description", content: detail.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/tjanster/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/tjanster/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: detail.description,
          areaServed: ["Täby", "Stockholm"],
          provider: { "@type": "Electrician", name: "AB Täby Elinstallationer", telephone: "08-792 17 31", email: "info@tabyel.se" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Tjänsten hittades inte</h1>
      <Link to="/tjanster" className="mt-4 inline-block underline">Till alla tjänster</Link>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service, detail } = Route.useLoaderData();
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <Link to="/tjanster" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" /> Alla tjänster
          </Link>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">{service.text}</p>
          <Button asChild variant="spark" size="lg" className="mt-8">
            <Link to="/offert" search={{ tjanst: service.title }}>Begär offert</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed">
          {IMAGES[service.slug] && (
            <img src={IMAGES[service.slug]} alt={service.title} width={1600} height={900} className="mb-6 aspect-video w-full rounded-2xl object-cover" />
          )}
          {detail.intro.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Det här hjälper vi till med</h2>
          <ul className="mt-4 space-y-2">
            {detail.includes.map((i) => (
              <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Vanliga frågor</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {detail.faq.map((f) => (
              <div key={f.q} className="rounded-xl bg-card p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="spark"><Link to="/offert" search={{ tjanst: service.title }}>Begär offert</Link></Button>
            <Button asChild variant="outline"><Link to="/rot-gron-teknik">Om ROT & grön teknik</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
