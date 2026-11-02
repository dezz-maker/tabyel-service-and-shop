import { Link } from "@tanstack/react-router";
import logo from "@/assets/tabyel_logo.png.asset.json";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/tjanster", label: "Tjänster" },
  { to: "/plejd-kampanj", label: "Plejd-kampanj" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/rot-gron-teknik", label: "ROT & Grön teknik" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-6 px-4">
        <Link to="/" className="flex items-center" aria-label="TäbyEl – startsida">
          <img src={logo.url} alt="TäbyEl – AB Täby Elinstallationer" width={600} height={281} className="h-16 w-auto" />
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
          <span className="inline-block rounded-lg bg-background p-3"><img src={logo.url} alt="TäbyEl" width={600} height={281} loading="lazy" className="h-16 w-auto" /></span>
          <p className="mt-2 text-sm opacity-70">Behöriga elektriker i hela Stockholmsområdet.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold">Vi finns nära</p>
          <p className="mt-2">Täby, Sollentuna, Danderyd, Åkersberga, Vallentuna, Upplands Väsby, Järfälla</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/boka" className="hover:underline">Boka tid</Link>
          <Link to="/om-oss" className="hover:underline">Om oss</Link>
          <Link to="/kontakt" className="hover:underline">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
}
