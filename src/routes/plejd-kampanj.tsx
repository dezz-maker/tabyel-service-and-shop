import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Smartphone, Wifi, ShieldCheck, Leaf, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/plejd_hero.jpg.asset.json";
import puck from "@/assets/plejd_puck.jpg.asset.json";

export const Route = createFileRoute("/plejd-kampanj")({
  head: () => ({
    meta: [
      { title: "Plejd-kampanj – Smarta hem från 3 695 kr | TäbyEl" },
      { name: "description", content: "Gör ditt hem smartare med Plejd. Paket med 3 eller 5 Plejd-puckar, installerat och klart från 3 695 kr efter ROT." },
      { property: "og:title", content: "Plejd-kampanj – Smarta hem från 3 695 kr" },
      { property: "og:description", content: "Styr belysningen från mobilen. Installerat och klart av TäbyEl." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/plejd-kampanj" }],
  }),
  component: PlejdPage,
});

const FEATURES = [
  { icon: Clock, title: "Tidsfunktioner", text: "Schemalägg dina produkter för att justeras eller slås av och på automatiskt vid bestämda tider eller i samband med soluppgång och solnedgång. Anpassa schemaläggningar och timers efter dina behov." },
  { icon: Smartphone, title: "Knapp, app eller röst", text: "Styr dina produkter och aktivera scenarion med dina vanliga lampknappar, via appen eller genom tredjepartstjänster – för en smartare och enklare vardag." },
  { icon: Wifi, title: "Trådlöst och smidigt", text: "Plejds trådlösa teknik gör ditt projekt enklare och mer kostnadseffektivt. Du slipper dyra kabeldragningar, och alla enheter kommunicerar sömlöst med varandra." },
];

const PACKAGES = [
  { name: "Plejd paket liten", price: "3 695", ord: "6 295", pucks: "3st Plejd-puckar – passar lägenhet eller mindre hus", text: "Perfekt för dig som bor i lägenhet eller har en mindre bostad. Med tre Plejd-puckar styr du enkelt belysningen och får full kontroll över hemmets elektriska funktioner." },
  { name: "Plejd paket stor", price: "5 695", ord: "8 295", pucks: "5st Plejd-puckar – passar villa eller hus", text: "Större bostad? Fem Plejd-puckar ger dig möjlighet att styra flera rum och funktioner. Perfekt för att optimera belysning och säkerhet i hela hemmet.", popular: true },
];

const INCLUDED = [
  "Installation: Vi gör allt – snabbt och professionellt.",
  "Komfort & kontroll: Styr allt från mobilen, var du än är.",
  "Energieffektivitet: Minska energiförbrukningen med smart belysning.",
];

const BENEFITS = [
  { icon: Home, title: "Enkel installation", text: "Vi gör allt åt dig – snabbt och professionellt." },
  { icon: Smartphone, title: "Komfort & kontroll", text: "Aldrig mer glömda lampor eller onödiga elutgifter." },
  { icon: Leaf, title: "Energieffektivitet", text: "Styr belysning och värme smart." },
  { icon: ShieldCheck, title: "Säkerhet", text: "Timer för belysning så hemmet ser bebott ut när du är bortrest." },
  { icon: Wifi, title: "Kompatibilitet", text: "Fungerar med Google Home och Apple HomeKit." },
];

function PlejdPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">Kampanj</span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">Gör ditt hem smartare med Plejd</h1>
            <p className="mt-5 text-lg opacity-90">
              Två paket för dig som vill ta steget in i framtidens smarta hem. Full kontroll över belysning, värme och andra funktioner direkt från din smartphone – oavsett var du befinner dig.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="spark" size="lg"><a href="#paket">Se paketen</a></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/offert" search={{ tjanst: "Smarta hem – Plejd" }}>Begär offert</Link>
              </Button>
            </div>
          </div>
          <img src={hero.url} alt="Plejd smarta hem-produkter" width={1024} height={576} className="w-full rounded-2xl shadow-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border bg-card p-6">
              <Icon className="h-9 w-9 text-accent" />
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="paket" className="scroll-mt-24 bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Välj ditt paket</h2>
          <p className="mt-3 text-center text-muted-foreground">Installerat och klart. Pris inkl. moms, efter ROT.</p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-card ${p.popular ? "ring-2 ring-accent" : "border"}`}>
                {p.popular && <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Mest populär</span>}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">{p.price} kr</span>
                  <span className="text-muted-foreground line-through">{p.ord} kr</span>
                </div>
                <p className="mt-4 text-muted-foreground">{p.text}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {[p.pucks, ...INCLUDED].map((i) => (
                    <li key={i} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{i}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <Button asChild variant="spark"><Link to="/offert" search={{ tjanst: p.name }}>Begär offert</Link></Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">För installation utanför Täby tillkommer 675 kr för servicebil.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img src={puck.url} alt="Plejd-puck" width={1024} height={658} loading="lazy" className="w-full rounded-2xl" />
        <div>
          <h2 className="text-3xl font-bold">Fördelar med Plejd</h2>
          <ul className="mt-6 space-y-4">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15"><Icon className="h-5 w-5 text-accent" /></span>
                <div><p className="font-semibold">{title}</p><p className="text-muted-foreground">{text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Boka elektriker</p>
          <h2 className="mt-3 text-3xl font-bold">Kontakta oss idag för ett kostnadsförslag</h2>
          <p className="mt-4 opacity-90">
            Våra erfarna elektriker är välutbildade och har lång erfarenhet inom branschen – vi utför alla typer av elektriska arbeten med precision och professionalism.
          </p>
          <Button asChild variant="spark" size="lg" className="mt-8"><Link to="/kontakt">Bli kontaktad av TäbyEl</Link></Button>
        </div>
      </section>
    </div>
  );
}
