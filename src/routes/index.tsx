import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, FileText, ShoppingBag, Phone, Mail, Award, ShieldCheck, GraduationCap, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import hero from "@/assets/tabyel-servicebil-startsida.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TäbyEl – Behöriga elektriker i Stockholm" },
      { name: "description", content: "Boka elektriker, begär offert eller handla elprodukter. TäbyEl hjälper hem och företag i hela Stockholm." },
      { property: "og:title", content: "TäbyEl – Behöriga elektriker i Stockholm" },
      { property: "og:description", content: "Boka elektriker, begär offert eller handla elprodukter online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-spark">Elektriker i Stockholm</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Trygg el. Snabbt på plats.</h1>
            <p className="mt-5 max-w-md text-lg opacity-80">
              Behöriga elektriker för hem, BRF och företag – från små reparationer till kompletta installationer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="spark" size="lg"><Link to="/boka">Boka elektriker <ArrowRight /></Link></Button>
              <Button asChild variant="inkOutline" size="lg"><Link to="/tjanster">Våra tjänster</Link></Button>
            </div>
          </div>
          <div className="min-w-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <a href="tel:087921731" className="flex min-w-0 items-center gap-3 hover:underline">
                <Phone className="h-5 w-5 shrink-0 text-spark" aria-hidden="true" />
                <span><span className="block text-xs uppercase opacity-70">Ring oss</span><span className="font-semibold">08-792 17 31</span></span>
              </a>
              <a href="mailto:info@tabyel.se" className="flex min-w-0 items-center gap-3 hover:underline">
                <Mail className="h-5 w-5 shrink-0 text-spark" aria-hidden="true" />
                <span><span className="block text-xs uppercase opacity-70">Mejla oss</span><span className="font-semibold">info@tabyel.se</span></span>
              </a>
            </div>
            <img src={hero} alt="TäbyEls vita servicebil med blå och orange logga" width={1600} height={1200} className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-sm font-semibold">
              {[
                { icon: Award, label: "40+ års erfarenhet" },
                { icon: ShieldCheck, label: "Trygghet" },
                { icon: GraduationCap, label: "Kunskap" },
                { icon: LockKeyhole, label: "Säkerhet" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2"><Icon className="h-5 w-5 shrink-0 text-spark" aria-hidden="true" /><span>{label}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-3">
        {[
          { icon: CalendarCheck, title: "Enkel bokning", text: "Välj tjänst och dag – klart på en minut.", to: "/boka" as const },
          { icon: FileText, title: "Offertförfrågan", text: "Beskriv projektet, få ett kostnadsförslag.", to: "/offert" as const },
          { icon: ShoppingBag, title: "Plejd-kampanj", text: "Smarta hem-paket installerat och klart.", to: "/plejd-kampanj" as const },
        ].map(({ icon: Icon, ...c }) => (
          <Link key={c.to} to={c.to} className="group rounded-xl border bg-card p-6 shadow-card transition hover:-translate-y-0.5">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Våra tjänster</h2>
          <Link to="/tjanster" className="text-sm font-medium hover:underline">Se alla</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.slug} className="flex flex-col rounded-xl border-l-4 border-spark bg-card p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">{s.text}</p>
              <Button asChild variant="outline" size="sm" className="mt-4 self-start">
                <Link to="/tjanster/$slug" params={{ slug: s.slug }}>Läs mer <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
