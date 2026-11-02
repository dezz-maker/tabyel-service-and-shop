export type ServiceDetail = {
  seoTitle: string;
  description: string;
  intro: string[];
  includes: string[];
  faq: { q: string; a: string }[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  elinstallationer: {
    seoTitle: "Elinstallationer i Täby & Stockholm – Behörig elektriker",
    description: "Behörig elektriker för elinstallationer i Täby och Stockholm. Nya uttag, belysning, dragningar och kompletta elsystem för hem och företag.",
    intro: [
      "Att elen fungerar som den ska är en självklarhet för de flesta – men bakom varje trygg installation ligger noggrann planering, rätt kunskap och behörighet.",
      "Hos TäbyEl utför vi elinstallationer i bostäder, företag och fastigheter med fokus på säkerhet, kvalitet och lång hållbarhet.",
      "Vi erbjuder professionella och säkra elinstallationer för både privatpersoner och företag. Oavsett om du behöver hjälp med nyinstallationer, renoveringar, eller service av befintliga elsystem, ser vi till att arbetet utförs enligt gällande standarder och regler. Våra certifierade elektriker har lång erfarenhet av allt från installation av belysning och eluttag till avancerade lösningar för fastighetsautomation.",
      "Vi arbetar alltid med kvalitet och säkerhet i fokus för att skapa trygga och hållbara elinstallationer som möter dina behov. Kontakta oss för rådgivning eller en kostnadsfri offert!",
    ],
    includes: ["Nya eluttag och strömbrytare", "Inomhus- och utomhusbelysning", "Spotlights och LED-belysning", "Eldragning vid renovering och tillbyggnad", "Installation av vitvaror och spis"],
    faq: [
      { q: "Kan jag få ROT-avdrag?", a: "Ja, som privatperson kan du få ROT-avdrag på arbetskostnaden för elinstallationer i hemmet." },
      { q: "Hur snabbt kan ni komma?", a: "Det beror på uppdraget. Begär en offert så återkommer vi med förslag på tid." },
    ],
  },
  "smarta-hem": {
    seoTitle: "Smarta hem med Plejd – Installation i Täby & Stockholm",
    description: "Installation av Plejd smarta hem. Styr belysning och scenarier från mobilen, med knappar eller röst. Behörig elektriker i Täby och Stockholm.",
    intro: [
      "Med Plejd kan du styra belysningen i hela hemmet från mobilen, med befintliga strömbrytare eller med rösten. Skapa scenarier för morgon, kväll och semester – och spara energi på köpet.",
      "Vi installerar Plejd-puckar, dimmers och tillbehör och ser till att allt är uppsatt och klart när vi går.",
    ],
    includes: ["Installation av Plejd-puckar och dimmers", "Inställning av appen och scenarier", "Styrning av belysning och uttag", "Tidsstyrning och närvarosimulering", "Färdiga Plejd-paket till kampanjpris"],
    faq: [
      { q: "Behöver jag byta mina strömbrytare?", a: "Oftast inte. Plejd-puckarna monteras bakom befintliga brytare." },
      { q: "Fungerar det utan internet?", a: "Ja, Plejd kommunicerar via Bluetooth och fungerar även utan internet." },
    ],
  },
  elcentral: {
    seoTitle: "Byte av elcentral & jordfelsbrytare – TäbyEl",
    description: "Byte och uppgradering av elcentral, säkringar, jordfelsbrytare och mätare. Säker el i villa och lägenhet i Täby och Stockholm.",
    intro: [
      "En gammal elcentral med porslinssäkringar kan vara en säkerhetsrisk och räcker ofta inte till för dagens behov av laddbox, värmepump och induktionshäll.",
      "Vi byter ut och uppgraderar din elcentral med moderna automatsäkringar och jordfelsbrytare, så att ditt hem blir säkrare och redo för framtiden.",
    ],
    includes: ["Byte av elcentral", "Installation av jordfelsbrytare", "Automatsäkringar och överspänningsskydd", "Uppgradering av huvudsäkring", "Förberedelse för laddbox och solceller"],
    faq: [
      { q: "Hur vet jag om min elcentral behöver bytas?", a: "Har du skruvsäkringar, saknar jordfelsbrytare eller ska installera mer el är det ofta dags. Vi gör gärna en bedömning." },
      { q: "Hur lång tid tar ett byte?", a: "Ett vanligt byte i villa tar oftast en arbetsdag." },
    ],
  },
  laddbox: {
    seoTitle: "Installation av laddbox för elbil – Täby & Stockholm",
    description: "Säker installation av laddbox för elbil i villa, garage eller BRF. Skattereduktion för grön teknik. Behörig elektriker i Täby.",
    intro: [
      "Att ladda elbilen hemma är både billigare och smidigare. Vi installerar laddbox i villa, radhus, garage och bostadsrättsföreningar.",
      "Som privatperson kan du få skattereduktion för grön teknik på både material och arbete. Vi drar av beloppet direkt på fakturan.",
    ],
    includes: ["Installation av laddbox", "Lastbalansering", "Kabeldragning till garage och carport", "Laddlösningar för BRF", "Ansökan om skattereduktion för grön teknik"],
    faq: [
      { q: "Vilken laddbox ska jag välja?", a: "Det beror på din bil och elanläggning. Vi hjälper dig välja rätt modell." },
      { q: "Räcker min huvudsäkring?", a: "Ofta ja med lastbalansering. Vi kontrollerar detta innan installationen." },
    ],
  },
  felsokning: {
    seoTitle: "Felsökning & elreparation – Elektriker i Täby",
    description: "Kortslutning, glappkontakt eller strömavbrott? TäbyEl felsöker och reparerar el i hem och företag i Täby och Stockholm.",
    intro: [
      "Löser jordfelsbrytaren ut, blinkar lamporna eller har ett uttag slutat fungera? Elfel ska alltid åtgärdas av en behörig elektriker.",
      "Vi felsöker systematiskt, hittar orsaken och reparerar felet så att din el blir säker igen.",
    ],
    includes: ["Felsökning vid strömavbrott", "Jordfelsbrytare som löser ut", "Glappkontakt och trasiga uttag", "Reparation av belysning", "Kontroll av elanläggning"],
    faq: [
      { q: "Vad gör jag om jordfelsbrytaren löser ut?", a: "Dra ur apparater och prova att återställa. Löser den ut igen – kontakta oss." },
      { q: "Är elfel farligt?", a: "Det kan vara det. Rör inte trasiga uttag eller kablar och ring en elektriker." },
    ],
  },
  kontorsanpassning: {
    seoTitle: "Kontorsanpassning & el för lokaler – TäbyEl",
    description: "El och belysning vid om- och tillbyggnad av kontor och lokaler. TäbyEl hjälper företag i Täby och Stockholm.",
    intro: [
      "Ska ni flytta, bygga om eller anpassa en lokal? Vi hjälper företag med allt elarbete – från planering till färdig installation.",
      "Vi samarbetar gärna med byggare och fastighetsägare och ser till att projektet blir klart i tid.",
    ],
    includes: ["El vid om- och tillbyggnad", "Belysning för kontor och butik", "Uttag och kanalisation för arbetsplatser", "Nätverk och data", "Service och underhåll av lokaler"],
    faq: [
      { q: "Tar ni större projekt?", a: "Ja, vi tar både mindre anpassningar och större ombyggnader." },
      { q: "Kan ni arbeta kvällstid?", a: "Ja, vid behov kan vi planera arbetet utanför kontorstid." },
    ],
  },
};
