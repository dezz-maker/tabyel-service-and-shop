import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { COMPANY_FAQ } from "@/lib/company-faq";

type QA = { q: string; a: string };
const SECTIONS: { title: string; items: QA[] }[] = [
  {
    title: "Om TäbyEl",
    items: COMPANY_FAQ,
  },
  {
    title: "Behörighet & regler",
    items: [
      { q: "Vad får jag göra själv med elen hemma?", a: "Enklare arbeten som att byta en befintlig strömbrytare, vägguttag eller lamputtag i en anläggning med samma funktion. Nya dragningar och nya uttag kräver behörig elektriker." },
      { q: "Varför ska jag anlita en behörig elektriker?", a: "Felaktigt utfört elarbete kan orsaka brand och elchock. Dessutom kan försäkringen påverkas om arbetet inte gjorts av behörigt företag." },
      { q: "Hur kontrollerar jag att ett elföretag är registrerat?", a: "Elinstallationsföretag ska vara registrerade hos Elsäkerhetsverket, där du kan söka i deras register." },
      { q: "Påverkas min hemförsäkring av elarbete jag gör själv?", a: "Ja, om ett fel uppstår efter otillåtet elarbete kan försäkringsbolaget sänka eller neka ersättning." },
      { q: "Får jag ett intyg efter installationen?", a: "Ja, efter utfört arbete kan du få en egenkontroll eller ett installationsintyg som bekräftar att arbetet följer reglerna." },
      { q: "Vilka regler gäller för el i badrum?", a: "Våtrum delas in i zoner med skärpta krav på placering, kapslingsklass och jordfelsbrytare. Därför ska el i badrum alltid utföras av elektriker." },
    ],
  },
  {
    title: "Pris, ROT & offert",
    items: [
      { q: "Vad kostar en elektriker per timme?", a: "Timpriset varierar beroende på uppdrag och företag. Med ROT-avdrag blir arbetskostnaden lägre. Kontakta oss för ett exakt pris." },
      { q: "Hur fungerar ROT-avdrag för elarbete?", a: "Som privatperson kan du få avdrag på arbetskostnaden för elarbete i ditt hem. Avdraget görs direkt på fakturan." },
      { q: "Gäller ROT-avdraget även material?", a: "Nej, ROT gäller endast arbetskostnaden. För grön teknik som laddbox och solceller gäller skattereduktionen även material." },
      { q: "Vad är skattereduktion för grön teknik?", a: "Ett avdrag för installation av laddbox, solceller och batterilagring. Det gäller både arbete och material." },
      { q: "Är offerten kostnadsfri?", a: "Ja, vi lämnar kostnadsfria offerter." },
      { q: "Vad är skillnaden på fast pris och löpande räkning?", a: "Fast pris ger ett bestämt totalbelopp. Löpande räkning debiteras per timme och material, vilket passar uppdrag som är svåra att uppskatta i förväg." },
    ],
  },
  {
    title: "Elcentral, säkringar & felsökning",
    items: [
      { q: "Varför löser jordfelsbrytaren ut?", a: "Ofta beror det på en trasig apparat, fukt eller en skadad kabel. Koppla ur apparater och återställ. Löser den ut igen bör en elektriker felsöka." },
      { q: "Vad gör jag om en säkring går hela tiden?", a: "Kretsen är troligen överbelastad eller har ett fel. Fördela belastningen och kontakta en elektriker om problemet kvarstår." },
      { q: "Behöver jag byta min gamla elcentral?", a: "Har du skruvsäkringar (porslinssäkringar), saknar jordfelsbrytare eller planerar laddbox eller värmepump är det ofta dags." },
      { q: "Hur lång tid tar det att byta elcentral?", a: "I en vanlig villa tar det oftast en arbetsdag." },
      { q: "Vad är en jordfelsbrytare och behöver jag en?", a: "Den bryter strömmen vid jordfel och skyddar mot elchock och brand. Den rekommenderas starkt i alla hem." },
      { q: "Varför blinkar lamporna?", a: "Det kan bero på en dålig lampa, inkompatibel dimmer eller glappkontakt. Om flera lampor blinkar bör en elektriker kontrollera anläggningen." },
      { q: "Ett uttag är varmt eller luktar bränt – vad gör jag?", a: "Sluta använda uttaget, slå av säkringen och kontakta en elektriker omgående. Det kan vara brandfarligt." },
      { q: "Hur ofta bör elen i huset kontrolleras?", a: "En elbesiktning rekommenderas vart tionde år, vid husköp eller om huset har äldre el." },
    ],
  },
  {
    title: "Laddbox, smarta hem & installationer",
    items: [
      { q: "Vad kostar det att installera laddbox?", a: "Det beror på laddbox, avstånd till elcentralen och behov av lastbalansering. Skattereduktion för grön teknik sänker kostnaden." },
      { q: "Räcker min huvudsäkring för en laddbox?", a: "Ofta ja, särskilt med lastbalansering. Vi kontrollerar detta innan installationen." },
      { q: "Kan jag ladda elbilen i ett vanligt vägguttag?", a: "Det går tillfälligt men rekommenderas inte för regelbunden laddning. En laddbox är säkrare och snabbare." },
      { q: "Vad är Plejd?", a: "Ett smart hem-system som låter dig styra belysning och uttag via app, knappar eller röst. Det kommunicerar via Bluetooth." },
      { q: "Kan man installera spotlights i alla tak?", a: "I de flesta fall ja. Vi kontrollerar takets konstruktion och isolering och föreslår rätt armatur." },
      { q: "Hur många eluttag behövs i ett rum?", a: "Det beror på användning, men fler uttag minskar behovet av grenuttag, som är en vanlig brandrisk." },
      { q: "Kan man installera golvvärme i efterhand?", a: "Ja, oftast vid golvbyte eller renovering. Tunna golvvärmemattor finns för de flesta golvtyper." },
      { q: "När ska elektrikern komma in vid en renovering?", a: "Tidigt i planeringen, innan väggar stängs och golv läggs, så att dragningar kan göras rätt." },
      { q: "Hur lång tid tar det att installera ett nytt uttag?", a: "Ett eller ett par nya uttag tar oftast några timmar." },
      { q: "Kan ni förbereda för solceller?", a: "Ja, vi kan förbereda elcentralen och anläggningen för solceller och batterilagring." },
      { q: "Är LED-belysning värt att byta till?", a: "Ja, LED drar mycket mindre ström och håller betydligt längre än äldre ljuskällor." },
      { q: "Vad är överspänningsskydd?", a: "Ett skydd som minskar risken att elektronik skadas vid åska eller spänningstoppar i elnätet." },
    ],
  },
];

const ALL = SECTIONS.flatMap((s) => s.items);

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Vanliga frågor om el & elektriker – TäbyEl" },
      { name: "description", content: "Svar på 40 vanliga frågor om el, elektriker, ROT-avdrag, elcentral, laddbox, Plejd och TäbyEl i Täby och Stockholm." },
      { property: "og:title", content: "Vanliga frågor om el & elektriker – TäbyEl" },
      { property: "og:description", content: "40 vanliga frågor och svar om elarbete och TäbyEl." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ALL.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Vanliga frågor</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">Frågor & svar om el</h1>
          <p className="mt-5 max-w-2xl text-lg opacity-90">Här har vi samlat de vanligaste frågorna om el, elektriker och våra tjänster.</p>
        </div>
      </section>
      <div className="mx-auto max-w-3xl space-y-12 px-4 py-16">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="text-2xl font-bold">{s.title}</h2>
            <Accordion type="multiple" className="mt-4">
              {s.items.map((i) => (
                <AccordionItem key={i.q} value={i.q}>
                  <AccordionTrigger className="text-left">{i.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{i.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
        <div className="rounded-2xl bg-muted p-8 text-center">
          <h2 className="text-2xl font-bold">Hittade du inte svaret?</h2>
          <p className="mt-2 text-muted-foreground">Kontakta oss så hjälper vi dig.</p>
          <Button asChild variant="spark" className="mt-4"><Link to="/kontakt">Kontakta oss</Link></Button>
        </div>
      </div>
    </div>
  );
}
