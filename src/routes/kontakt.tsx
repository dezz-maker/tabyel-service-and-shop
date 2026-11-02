import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone, ShieldCheck, Award, GraduationCap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyFaq } from "@/components/CompanyFaq";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";
import van from "@/assets/tabyel_servicebil.jpg.asset.json";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakta oss – TäbyEl" },
      { name: "description", content: "Boka elektriker eller få ett kostnadsförslag. Ring 08-792 17 31 eller maila info@tabyel.se." },
      { property: "og:title", content: "Kontakta oss – TäbyEl" },
      { property: "og:description", content: "Ring, maila eller skicka ett meddelande till TäbyEl." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const VALUES = [
  { icon: GraduationCap, label: "Kunskap" },
  { icon: Award, label: "Erfarenhet" },
  { icon: HeartHandshake, label: "Trygghet" },
  { icon: ShieldCheck, label: "Säkerhet" },
];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => ((f.get(k) as string | null) ?? "").trim();
    setStatus("sending");
    try {
      const phone = get("phone");
      await submitContact({
        data: { name: get("name"), email: get("email"), message: get("message"), ...(phone ? { phone } : {}) },
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-spark">Kontakta oss</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Boka elektriker</h1>
          <p className="mt-4 max-w-2xl opacity-80">
            Våra erfarna elektriker erbjuder högkvalitativa tjänster till rimliga priser. De är välutbildade och har lång
            erfarenhet inom branschen – vi utför alla typer av elarbeten med precision och professionalism.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Kontakta oss idag för ett kostnadsförslag</h2>
          <p className="mt-2 text-muted-foreground">Berätta vad du behöver hjälp med så återkommer vi.</p>
          <div className="mt-6">
            {status === "done" ? (
              <div className="rounded-xl border bg-card p-8 text-center shadow-card">
                <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">Tack för din respons! ✨</h3>
                <p className="mt-2 text-muted-foreground">Vi hör av oss så snart vi kan.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border bg-card p-6 shadow-card">
                <div><Label htmlFor="name">Namn *</Label><Input id="name" name="name" required maxLength={100} className="mt-1" /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><Label htmlFor="email">Mail *</Label><Input id="email" name="email" type="email" required maxLength={255} className="mt-1" /></div>
                  <div><Label htmlFor="phone">Telefon</Label><Input id="phone" name="phone" type="tel" maxLength={40} className="mt-1" /></div>
                </div>
                <div>
                  <Label htmlFor="message">Vad behöver du hjälp med? *</Label>
                  <Textarea id="message" name="message" rows={6} required maxLength={2000} className="mt-1" />
                </div>
                {status === "error" && <p className="text-sm text-destructive">Fyll i formuläret korrekt och försök igen.</p>}
                <Button type="submit" variant="spark" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Skicka"}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-card shadow-card">
          <div className="grid sm:grid-cols-2">
            <a href="tel:087921731" className="flex items-center gap-4 bg-primary p-6 text-primary-foreground transition hover:bg-primary/90">
              <Phone className="h-8 w-8 text-spark" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Ring oss</p>
                <p className="font-display text-2xl font-bold">08-792 17 31</p>
              </div>
            </a>
            <a href="mailto:info@tabyel.se" className="flex items-center gap-4 bg-ink p-6 text-ink-foreground transition hover:bg-ink/90">
              <Mail className="h-8 w-8 text-spark" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Maila</p>
                <p className="font-display text-2xl font-bold">info@tabyel.se</p>
              </div>
            </a>
          </div>
          <img src={van.url} alt="TäbyEls servicebil" width={919} height={544} loading="lazy" className="aspect-[919/544] w-full object-cover" />
          <ul className="grid grid-cols-2 gap-4 p-6">
            {VALUES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 font-display text-lg font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-spark/25 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CompanyFaq />
    </>
  );
}
