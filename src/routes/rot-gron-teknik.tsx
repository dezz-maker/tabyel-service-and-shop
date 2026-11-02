import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Home, Sun, BatteryCharging, PlugZap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/rot-gron-teknik")({
  head: () => ({
    meta: [
      { title: "ROT-avdrag & Grön teknik – TäbyEl" },
      { name: "description", content: "Spara pengar på elarbete med ROT-avdrag och skattereduktion för grön teknik – laddbox, solceller och batterier. Vi sköter ansökan åt dig." },
      { property: "og:title", content: "ROT-avdrag & Grön teknik – TäbyEl" },
      { property: "og:description", content: "Så fungerar ROT och grön teknik när du anlitar TäbyEl." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RotPage,
});

const GREEN = [
  { icon: PlugZap, title: "Laddbox för elbil", text: "Skattereduktion på material och arbete vid installation av laddpunkt i hemmet." },
  { icon: BatteryCharging, title: "Batterilagring", text: "Lagra egenproducerad el – avdraget gäller material och arbete." },
  { icon: Sun, title: "Solceller", text: "Nätanslutna solcellssystem ger skattereduktion på material och arbete." },
];

const STEPS = [
  "Du begär offert – vi räknar med avdraget direkt i priset.",
  "Vi utför jobbet och fakturerar dig beloppet efter avdrag.",
  "Vi ansöker om resten hos Skatteverket – du behöver inte göra något.",
];

function RotPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Spara pengar</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">ROT-avdrag & Grön teknik</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">
            Som privatperson kan du få skattereduktion på elarbete i ditt hem. Vi drar av beloppet direkt på fakturan och sköter allt pappersarbete.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/offert">Begär offert</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-8">
          <Home className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">ROT-avdrag</h2>
          <p className="mt-3 text-muted-foreground">
            ROT-avdraget gäller arbetskostnaden – inte material – för reparation, underhåll och om- eller tillbyggnad av din bostad.
          </p>
          <ul className="mt-5 space-y-2">
            {["30 % av arbetskostnaden", "Upp till 50 000 kr per person och år", "Gäller villa, radhus, bostadsrätt och fritidshus", "Exempel: ny elcentral, fler uttag, belysning, Plejd"].map((t) => (
              <li key={t} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <Sun className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold">Grön teknik</h2>
          <p className="mt-3 text-muted-foreground">
            Skattereduktionen för grön teknik gäller både arbete och material, och kan inte kombineras med ROT för samma arbete.
          </p>
          <ul className="mt-5 space-y-2">
            {["Upp till 50 000 kr per person och år", "Gäller både material och arbete", "Vi hjälper dig välja rätt avdrag"].map((t) => (
              <li key={t} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Det här omfattas av grön teknik</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {GREEN.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-6 shadow-sm">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Så går det till</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s} className="rounded-2xl border p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{i + 1}</span>
              <p className="mt-4">{s}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">
          Procentsatser och regler kan ändras. Aktuella villkor finns hos Skatteverket – vi hjälper gärna till om du är osäker.
        </p>
      </section>
    </div>
  );
}
