import { Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { COMPANY_FAQ } from "@/lib/company-faq";

export function CompanyFaq() {
  return (
    <section className="border-t bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Frågor & svar</p>
        <h2 className="mt-3 text-3xl font-bold">Vanliga frågor om TäbyEl</h2>
        <Accordion type="multiple" className="mt-6">
          {COMPANY_FAQ.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button asChild variant="outline" className="mt-6"><Link to="/faq">Alla frågor & svar</Link></Button>
      </div>
    </section>
  );
}