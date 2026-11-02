import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/tjanster", label: "Tjänster" },
  { to: "/butik", label: "Butik" },
  { to: "/offert", label: "Offert" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-spark text-spark-foreground">
            <Zap className="h-5 w-5" />
          </span>
          TäbyEl
        </Link>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Button asChild variant="spark" size="sm">
            <Link to="/boka">Boka elektriker</Link>
          </Button>
          <CartDrawer />
        </div>
      </div>
      <nav className="flex justify-center gap-6 border-t py-2 text-sm md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="text-muted-foreground">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">TäbyEl</p>
          <p className="mt-2 text-sm opacity-70">Behöriga elektriker i hela Stockholmsområdet.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold">Vi finns nära</p>
          <p className="mt-2">Täby, Sollentuna, Danderyd, Åkersberga, Vallentuna, Upplands Väsby, Järfälla</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/boka" className="hover:underline">Boka tid</Link>
          <Link to="/offert" className="hover:underline">Begär offert</Link>
          <Link to="/butik" className="hover:underline">Butik</Link>
          <Link to="/kontakt" className="hover:underline">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
