import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CompanyFaq } from "@/components/CompanyFaq";
import team from "@/assets/about_team.jpg.asset.json";
import van from "@/assets/about_van.png.asset.json";
import work1 from "@/assets/about_work1.jpg.asset.json";
import elcentral from "@/assets/about_elcentral.jpg.asset.json";
import work2 from "@/assets/about_work2.jpeg.asset.json";
import history from "@/assets/about_history.jpg.asset.json";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss – AB Täby Elinstallationer sedan 2006" },
      { name: "description", content: "Lär känna TäbyEl – behöriga elektriker för hem och företag i hela Stockholmsområdet sedan 2006. 40+ års erfarenhet." },
      { property: "og:title", content: "Om oss – TäbyEl" },
      { property: "og:description", content: "Historien bakom AB Täby Elinstallationer och teamet av erfarna elektriker." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: About,
});

const STATS = [
  { value: "40+", label: "års erfarenhet" },
  { value: "2006", label: "grundat" },
  { value: "Stockholm", label: "hela området" },
];

const TIMELINE = [
  { year: "1988", text: "Christian Lorenz inleder sin karriär på Djursholms Elektriska." },
  { year: "2002", text: "Christian blir behörig elektriker och startar CL El." },
  { year: "2006", text: "AB Täby Elinstallationer grundas." },
  { year: "Idag", text: "Ett erfaret team som levererar till privatpersoner och företag." },
];

function About() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Om oss</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Elektrikertjänster för hem och företag i hela Stockholmsområdet</h1>
            <p className="mt-5 text-lg opacity-90">
              Våra elektriker är välutbildade och har lång erfarenhet inom branschen, vilket gör att vi kan utföra alla typer av elektriska arbeten med precision och professionalism.
            </p>
          </div>
          <img src={team.url} alt="TäbyEl elektriker i arbete" width={1024} height={683} className="w-full rounded-2xl shadow-2xl" />
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-4xl px-4">
        <div className="grid grid-cols-3 divide-x rounded-2xl bg-card shadow-card">
          {STATS.map((s) => (
            <div key={s.label} className="p-6 text-center">
              <p className="text-2xl font-bold text-accent md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold">Trygghet till bra priser</h2>
          <p>Vårt dedikerade team av erfarna elektriker strävar alltid efter att leverera högkvalitativ service till varje projekt vi tar oss an. Vi är specialiserade på allt från mindre reparationer och underhåll till stora om- och tillbyggnadsprojekt och installationer för nyproduktion.</p>
          <p>Oavsett om det är att byta ut en ljusbrytare i ditt hem eller att installera ett komplett elsystem för ett företag, kan du lita på oss för att göra jobbet med precision och noggrannhet.</p>
        </div>
        <img src={van.url} alt="TäbyEl servicebil på väg" width={1400} height={875} loading="lazy" className="w-full rounded-2xl" />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-3 gap-4">
          {[work1, elcentral, work2].map((img, i) => (
            <img key={img.url} src={img.url} alt={`TäbyEl arbete ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">En framgångssaga inom elbranschen</p>
            <h2 className="mt-3 text-3xl font-bold">Historien bakom AB Täby Elinstallationer</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>AB Täby Elinstallationer grundades år 2006 av Christian Lorenz, en erfaren elektriker med en gedigen bakgrund inom elbranschen. Företaget startades med målet att erbjuda högkvalitativa elinstallationer och överlägsen kundservice, och har sedan dess vuxit till att bli en framstående aktör inom branschen.</p>
              <p>Med etableringen av AB Täby Elinstallationer tog Christian nästa steg i sin entreprenörsresa, med en tydlig vision om att kombinera tradition och innovation för att möta kundernas behov.</p>
              <p>Företaget är idag känt för sin kompetens, sitt engagemang och sin förmåga att leverera lösningar av högsta kvalitet, vilket gör det till ett naturligt val för alla typer av elinstallationer.</p>
            </div>
          </div>
          <div>
            <img src={history.url} alt="Elektriker i arbete" loading="lazy" className="aspect-video w-full rounded-2xl object-cover" />
            <ol className="mt-8 space-y-5 border-l-2 border-accent pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                  <p className="font-bold text-primary">{t.year}</p>
                  <p className="text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CompanyFaq />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-3xl font-bold">Vill du anlita oss?</h2>
          <p className="mt-3 opacity-90">Berätta om ditt projekt så återkommer vi med ett kostnadsförslag.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild variant="spark" size="lg"><Link to="/offert">Begär offert</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/kontakt">Kontakta oss</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
