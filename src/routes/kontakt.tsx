import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakta oss – TäbyEl" },
      { name: "description", content: "Har du frågor? Skicka ett meddelande till TäbyEl så hör vi av oss." },
      { property: "og:title", content: "Kontakta oss – TäbyEl" },
      { property: "og:description", content: "Skicka ett meddelande till TäbyEls elektriker." },
    ],
  }),
  component: Contact,
});

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
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-bold">Kontakta oss</h1>
      <p className="mt-3 text-muted-foreground">Skriv till oss så återkommer vi så snart vi kan.</p>
      <div className="mt-8">
        {status === "done" ? (
          <div className="rounded-xl border bg-card p-8 text-center shadow-card">
            <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-xl font-semibold">Tack för ditt meddelande!</h2>
            <p className="mt-2 text-muted-foreground">Vi hör av oss så snart vi kan.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border bg-card p-6 shadow-card sm:grid-cols-2">
            <div><Label htmlFor="name">Namn</Label><Input id="name" name="name" required maxLength={100} className="mt-1" /></div>
            <div><Label htmlFor="phone">Telefon (valfritt)</Label><Input id="phone" name="phone" type="tel" maxLength={40} className="mt-1" /></div>
            <div className="sm:col-span-2"><Label htmlFor="email">E-post</Label><Input id="email" name="email" type="email" required maxLength={255} className="mt-1" /></div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Meddelande</Label>
              <Textarea id="message" name="message" rows={6} required maxLength={2000} className="mt-1" />
            </div>
            {status === "error" && <p className="text-sm text-destructive sm:col-span-2">Något gick fel. Försök igen.</p>}
            <Button type="submit" variant="spark" size="lg" className="sm:col-span-2" disabled={status === "sending"}>
              {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Skicka meddelande"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
