import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/services";
import { submitServiceRequest } from "@/lib/requests.functions";

const TIMES = ["Förmiddag (8–12)", "Eftermiddag (12–17)", "Flexibel"];

export function RequestForm({ type, defaultService }: { type: "booking" | "quote"; defaultService?: string | undefined }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || undefined;
    setStatus("sending");
    try {
      await submitServiceRequest({
        data: {
          request_type: type,
          service: get("service") ?? "",
          name: get("name") ?? "",
          email: get("email") ?? "",
          phone: get("phone") ?? "",
          address: get("address"),
          preferred_date: get("preferred_date"),
          preferred_time: get("preferred_time"),
          message: get("message"),
        },
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-xl border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 text-xl font-semibold">Tack! Vi har tagit emot din {type === "booking" ? "bokning" : "förfrågan"}.</h3>
        <p className="mt-2 text-muted-foreground">Vi återkommer till dig så snart vi kan.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border bg-card p-6 shadow-card sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="service">Tjänst</Label>
        <select id="service" name="service" required defaultValue={defaultService ?? ""} className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
          <option value="" disabled>Välj tjänst</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Plejd-kampanj">Plejd-kampanj</option>
          <option value="Annat">Annat</option>
        </select>
      </div>
      <div><Label htmlFor="name">Namn</Label><Input id="name" name="name" required maxLength={120} className="mt-1" /></div>
      <div><Label htmlFor="phone">Telefon</Label><Input id="phone" name="phone" type="tel" required maxLength={40} className="mt-1" /></div>
      <div><Label htmlFor="email">E-post</Label><Input id="email" name="email" type="email" required maxLength={200} className="mt-1" /></div>
      <div><Label htmlFor="address">Adress</Label><Input id="address" name="address" maxLength={300} className="mt-1" /></div>
      {type === "booking" && (
        <>
          <div><Label htmlFor="preferred_date">Önskat datum</Label><Input id="preferred_date" name="preferred_date" type="date" min={today} required className="mt-1" /></div>
          <div>
            <Label htmlFor="preferred_time">Tid</Label>
            <select id="preferred_time" name="preferred_time" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
              {TIMES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </>
      )}
      <div className="sm:col-span-2">
        <Label htmlFor="message">{type === "quote" ? "Beskriv ditt projekt" : "Meddelande"}</Label>
        <Textarea id="message" name="message" rows={5} maxLength={3000} required={type === "quote"} className="mt-1" />
      </div>
      {status === "error" && <p className="text-sm text-destructive sm:col-span-2">Något gick fel. Försök igen.</p>}
      <Button type="submit" variant="spark" size="lg" className="sm:col-span-2" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : type === "booking" ? "Skicka bokning" : "Skicka in"}
      </Button>
    </form>
  );
}
