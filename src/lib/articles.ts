export type Article = {
  slug: string;
  title: string;
  description: string;
  service: string;
  category: string;
  answer: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
  warning?: string;
  sources: { label: string; url: string }[];
};

const safetySource = { label: "Elsäkerhetsverket – kontroll av elanläggningen", url: "https://www.elsakerhetsverket.se/privatpersoner/din-elanlaggning/kontrollera-din-elanlaggning/checklista-for-kontroll-av-elanlaggning/" };
const permittedWorkSource = { label: "Elsäkerhetsverket – vad får jag göra själv med el?", url: "https://www.elsakerhetsverket.se/privatpersoner/detta-far-du-gora-sjalv-med-el/vad-far-jag-gora-sjalv-med-el/" };

export const ARTICLES: Article[] = [
  {
    slug: "ar-elen-i-mitt-hus-saker",
    title: "Hur vet jag om elen i mitt hus är säker?",
    description: "Lär dig känna igen varningssignaler i husets elsystem, vad du kan kontrollera själv och när en elektriker bör undersöka installationen.",
    service: "elcentral", category: "Elsäkerhet",
    answer: "En elinstallation kan ha fel som inte syns utan mätning. Återkommande utlösta säkringar, bränd lukt, missfärgade uttag och glapp är varningssignaler. En genomgång av ett registrerat elinstallationsföretag ger ett bättre underlag än enbart en visuell kontroll.",
    warning: "Vid rök eller brand: lämna faran och ring 112. Använd inte ett uttag eller en apparat som luktar bränt, gnistrar eller ger stötar. Bryt strömmen om det kan göras säkert.",
    sections: [
      { title: "Tecken på att elen behöver kontrolleras", paragraphs: ["Att lamporna lyser och apparaterna fungerar betyder inte automatiskt att installationen är säker. Fel kan finnas i anslutningar, isolering eller skyddsjordning. Var särskilt uppmärksam när ett beteende är nytt eller återkommer."], bullets: ["Säkringar eller jordfelsbrytare löser ut återkommande.", "Uttag eller strömbrytare är skadade, missfärgade eller sitter löst.", "Det luktar bränt eller hörs sprakande ljud.", "Du känner stickningar eller får en stöt från en apparat."] },
      { title: "Det här kan du kontrollera utan att öppna installationen", paragraphs: ["Titta efter synliga skador på sladdar, stickproppar och uttagens utsida. Kontrollera att elcentralens gruppförteckning är begriplig. Testa jordfelsbrytaren med testknappen enligt tillverkarens anvisningar. Testet ersätter inte en fullständig kontroll av installationen.", "Skruva inte loss kåpor eller uttag för att leta efter fel. Om testknappen inte bryter strömmen behöver jordfelsbrytaren undersökas. Saknas jordfelsbrytare kan en elektriker bedöma hur skyddet bör förbättras."] },
      { title: "När är en elgenomgång särskilt relevant?", paragraphs: ["Vid husköp, större renovering, okända tidigare elarbeten eller när äldre installationer ska belastas med nya apparater kan det vara klokt med en elgenomgång. En vanlig överlåtelsebesiktning omfattar inte nödvändigtvis en fördjupad kontroll av elen; kontrollera vad som ingår.", "Elektrikern kan undersöka installationens skick och skydd, utföra relevanta mätningar och föreslå prioriterade åtgärder. Det finns ingen enkel åldersgräns som avgör om all el i ett hus är säker."] },
      { title: "Hjälp med elsäkerheten i Täby och Stockholm", paragraphs: ["TäbyEl hjälper hushåll med elcentraler, elinstallationer och felsökning. Beskriv husets ålder, kända ombyggnader och de symtom du märkt när du kontaktar oss. Då blir det lättare att planera rätt undersökning."] },
    ], sources: [safetySource],
  },
  {
    slug: "varfor-fungerar-inte-eluttaget",
    title: "Varför fungerar inte ett eluttag?",
    description: "Ett eluttag utan ström kan bero på apparaten, en säkring eller ett installationsfel. Så skiljer du enkla kontroller från arbete för en elektriker.",
    service: "strombrytare-uttag", category: "Felsökning",
    answer: "Ett uttag som inte fungerar kan bero på en trasig apparat, en frånslagen säkring, en utlöst jordfelsbrytare eller fel i uttaget och dess anslutningar. Börja med kontroller som inte kräver att du öppnar uttaget.",
    warning: "Använd inte uttaget om det är varmt, skadat, missfärgat, luktar bränt eller gnistrar. Försök inte reparera anslutningar genom att skruva isär det.",
    sections: [
      { title: "Är det uttaget eller apparaten som är fel?", paragraphs: ["Om uttaget inte visar några varningssignaler kan du kontrollera om apparaten fungerar i ett annat, fungerande uttag. Titta också efter en strömbrytare som kan styra uttaget. Kontrollera sladd och stickpropp visuellt, utan att öppna dem.", "Fungerar apparaten någon annanstans men inte här, kan felet finnas i uttaget eller gruppen som försörjer det. Slutar flera uttag fungera samtidigt är en gemensam säkring eller jordfelsbrytare en möjlig förklaring."] },
      { title: "Kontrollera elcentralen utan att ta bort kåpor", paragraphs: ["Se om en automatsäkring eller jordfelsbrytare har löst ut. Följ anvisningarna för din elcentral. Om det inte finns varningssignaler kan anslutna apparater kopplas ur innan ett försök att återställa skyddet.", "Löser skyddet ut igen ska du inte fortsätta återställa det gång på gång. Byt aldrig till en säkring med högre märkström för att undvika att den löser ut. Skyddet finns för att begränsa riskerna vid fel eller överbelastning."] },
      { title: "Glapp och skadade anslutningar behöver undersökas", paragraphs: ["Ett uttag som fungerar ibland men inte alltid kan ha glapp. Det är inte ett fel att ignorera: dålig kontakt kan orsaka värmeutveckling. Även ett uttag som ser helt ut kan ha skador bakom fronten.", "Ett registrerat elinstallationsföretag kan kontrollera matningen, anslutningarna och skyddet och avgöra om uttaget behöver bytas eller om felet ligger någon annanstans."] },
      { title: "Berätta vad som slutade fungera", paragraphs: ["När du kontaktar TäbyEl, ange om det gäller ett uttag eller flera, om säkringar löst ut och om problemet kom efter att en viss apparat anslöts. Vi hjälper till med felsökning och åtgärder för strömbrytare och uttag i Täby och Stockholmsområdet."] },
    ], sources: [safetySource],
  },
  {
    slug: "nar-byta-gamla-elledningar",
    title: "När behöver man byta gamla elledningar?",
    description: "Gamla elledningar behöver bedömas utifrån skick, skydd och belastning – inte bara ålder. Läs om varningssignaler och planering inför renovering.",
    service: "elinstallationer", category: "Renovering",
    answer: "Det finns ingen generell regel om att alla elledningar måste bytas efter ett visst antal år. Ledningarnas skick, isolering, tidigare ändringar och hur installationen används avgör vilka åtgärder som behövs.",
    sections: [
      { title: "Åldern är en ledtråd, inte en diagnos", paragraphs: ["I äldre hus kan elen vara en blandning av ursprungliga ledningar och senare kompletteringar. Därför säger byggåret inte allt. Vissa delar kan vara välbevarade medan andra har skadats av värme, mekanisk påverkan eller olämpliga ändringar.", "En elektriker behöver bedöma installationen innan det går att avgöra om enstaka delar eller en större del av ledningssystemet bör ersättas. Underlaget kan omfatta både besiktning och mätningar."] },
      { title: "Situationer som motiverar en kontroll", paragraphs: ["Kontakta ett elinstallationsföretag om det finns kända skador eller återkommande fel. Öppna inte installationen för att själv undersöka ledningarnas isolering."], bullets: ["Skadade ledningar eller synligt sprucken isolering.", "Bränd lukt, värmeskador eller återkommande elfel.", "Tidigare ombyggnader med oklar dokumentation.", "Planerad renovering där väggar och tak ändå öppnas.", "Nya stora laster, exempelvis laddbox eller elektrisk golvvärme."] },
      { title: "Planera elen samtidigt som renoveringen", paragraphs: ["Vid renovering är det ofta praktiskt att diskutera placering av uttag, belysning och framtida behov innan ytskikten blir klara. Då kan nödvändiga ledningsbyten samordnas med övrigt arbete.", "Fler apparater betyder inte automatiskt att alla kablar måste bytas, men belastning, ledningsdimensioner och skydd behöver passa ihop. Att enbart byta elcentral gör inte skadade ledningar säkra."] },
      { title: "Vad påverkar omfattning och kostnad?", paragraphs: ["Tillgänglighet, ledningarnas dragning, antal rum och vilka skydd som behöver uppdateras påverkar arbetet. Det går sällan att ge ett tillförlitligt pris enbart utifrån husets ålder.", "TäbyEl hjälper till med elinstallationer i hem och företag. Kontakta oss med information om bostaden och renoveringen, så kan vi diskutera en undersökning och lämpliga nästa steg."] },
    ], sources: [safetySource],
  },
  {
    slug: "varfor-blinkar-flimrar-lamporna",
    title: "Varför blinkar eller flimrar lamporna hemma?",
    description: "Flimrande lampor kan bero på LED, dimmer, drivdon eller elfel. Läs vilka kontroller som är rimliga och när du behöver kontakta en elektriker.",
    service: "felsokning", category: "Belysning",
    answer: "Flimrande lampor kan bero på en sliten ljuskälla, en dimmer som inte passar LED-lampan, ett felaktigt drivdon eller glapp i installationen. Om flera lampor påverkas samtidigt eller det finns bränd lukt behöver orsaken undersökas.",
    warning: "Om flera lampor plötsligt blir onormalt starka och svaga, eller flimret kommer med sprakande ljud eller bränd lukt: undvik att använda berörd el och kontakta elektriker snarast. Bryt strömmen om det kan göras säkert.",
    sections: [
      { title: "Flimrar en lampa eller flera?", paragraphs: ["Börja med att notera vilka lampor som påverkas och när. En enda lampa som blinkar kan ha ett lokalt problem i ljuskällan eller armaturen. Flimmer i flera rum kan ha en gemensam orsak i installationen eller elförsörjningen.", "Skriv gärna ned om problemet uppstår när du dimrar, när en apparat startar eller även när belysningen lyser med full styrka. Den informationen hjälper vid felsökning men räcker inte för att ställa en säker diagnos."] },
      { title: "LED och dimmer måste fungera tillsammans", paragraphs: ["Alla LED-lampor är inte dimbara. Även dimbara modeller behöver passa dimmern och eventuellt drivdon. Fel kombination eller olämplig inställning kan ge flimmer, särskilt vid låg ljusstyrka.", "Kontrollera produktinformationen för ljuskällan och dimmern. Ett byte av en vanlig, utbytbar ljuskälla kan ibland lösa problemet. Ändringar i den fasta installationen eller byte av ett fast anslutet drivdon behöver bedömas av ett elinstallationsföretag."] },
      { title: "När är det mer än ett lampfel?", paragraphs: ["Glappkontakt kan ge både flimmer och värmeutveckling. Fortsätt därför inte använda en armatur som luktar bränt, knastrar eller har synliga skador. Dra ur stickproppen om det är en ansluten lampa och detta kan göras säkert.", "Försök inte dra åt eller flytta ledningar i uttag, strömbrytare eller elcentral. En elektriker kan undersöka anslutningar och mäta för att avgränsa felet. Om orsaken misstänks ligga i elnätet kan även nätägaren behöva involveras."] },
      { title: "Få hjälp med belysningen hemma", paragraphs: ["TäbyEl hjälper till med felsökning och belysning i Täby och Stockholm. Beskriv vilka lampor som flimrar och vilka dimrar eller ljuskällor du använder. Det ger en bättre start än att byta delar på måfå."] },
    ], sources: [safetySource],
  },
  {
    slug: "installera-smart-belysning-hemma",
    title: "Hur installerar man smart belysning hemma?",
    description: "Planera smart belysning med smarta lampor eller Plejd. Läs om kompatibilitet, installation, appstyrning och vad som krävs för fjärrstyrning.",
    service: "smarta-hem", category: "Smarta hem",
    answer: "Smart belysning kan byggas med smarta ljuskällor eller med styrmoduler i den fasta installationen, exempelvis Plejd. Valet beror på vilka lampor du har och hur du vill styra dem. Fast installerade moduler ska installeras av ett registrerat elinstallationsföretag.",
    sections: [
      { title: "Börja med hur du vill använda ljuset", paragraphs: ["Vill du dimra vardagsrummet, tända utebelysningen enligt ett schema eller släcka flera lampor samtidigt? Lista behoven rum för rum. Bestäm också om vanliga väggknappar ska fortsätta fungera och vilka i hushållet som ska kunna styra belysningen.", "Det enklaste alternativet är inte alltid samma för alla rum. En smart ljuskälla kan vara praktisk i en enskild lampa, medan ett installerat styrsystem kan passa när flera befintliga armaturer ska samverka."] },
      { title: "Smarta lampor eller installerade styrmoduler?", paragraphs: ["En smart lampa med rätt sockel kan ofta ersätta en vanlig, utbytbar ljuskälla utan ingrepp i den fasta installationen. Följ tillverkarens anvisningar om hubb, nätverk och eventuell dimmer. En smart lampa ska inte automatiskt kombineras med en befintlig dimmer.", "Styrmoduler som byggs in bakom strömbrytare eller i andra delar av installationen behöver korrekt inkoppling och lämpligt utrymme. Låt elektrikern bedöma kompatibilitet, belastning och installation; öppna inte dosorna för att installera moduler själv."] },
      { title: "Planera ett Plejd-system som passar hemmet", paragraphs: ["Plejd kan användas för bland annat dimring, scheman och scenarier, beroende på vilka produkter som installeras. Elektrikern väljer moduler som passar armaturer och ljuskällor och hjälper till med inställningarna.", "Appstyrning hemma är inte samma sak som styrning på distans. För Plejds fjärrstyrning via internet krävs en kompatibel gateway och internetanslutning. Röststyrning och andra integrationer beror också på utrustning och stödda tjänster; kontrollera vilka funktioner som ingår i just ditt upplägg."] },
      { title: "Installation, inställningar och överlämning", paragraphs: ["Efter installationen bör dimring, knappar och önskade scenarier testas. Be om information om hur åtkomst delas i hushållet och hur systemet hanteras om du byter telefon eller bostadsägare.", "TäbyEl hjälper till med smarta hem och Plejd i Täby och Stockholmsområdet. Berätta vilka rum och lampor du vill styra så kan vi diskutera en lösning utifrån dina befintliga installationer."] },
    ], sources: [permittedWorkSource, { label: "Plejd – Gateway och fjärrstyrning", url: "https://www.plejd.com/sv-se/produkter/gwy-01" }],
  },
  {
    slug: "elektriker-installera-taklampa",
    title: "Måste man anlita elektriker för att installera en taklampa?",
    description: "När kan du ansluta en taklampa själv, och när behövs ett elinstallationsföretag? Läs om lamppropp, DCL och ändringar i den fasta installationen.",
    service: "belysning-spotlights", category: "Belysning",
    answer: "Att ansluta en taklampa med en passande lamppropp till ett befintligt lamputtag kräver normalt inte elektriker. Att installera eller flytta ett uttag eller dra nya ledningar är däremot arbete för ett registrerat elinstallationsföretag. Vissa begränsade arbeten är tillåtna om du har rätt kunskap, men vid osäkerhet ska du ta hjälp.",
    warning: "Arbeta aldrig på spänningssatta delar. Bryt strömmen och säkerställ att den är frånkopplad innan ett tillåtet elarbete. Om du inte kan avgöra vad som är säkert och tillåtet ska du anlita hjälp.",
    sections: [
      { title: "En lampa med rätt propp är oftast enkel att ansluta", paragraphs: ["Har taklampan en lamppropp som passar det befintliga uttaget kan den normalt anslutas utan ändring av installationen. Följ lampans monteringsanvisningar och kontrollera att upphängningen klarar vikten.", "Lampans elektriska skydd måste vara lämpligt för anslutningen. Ändra inte skyddsjordning eller välj en improviserad anslutning för att få lampan att passa. Är uttaget skadat eller anslutningen oklar behöver det bedömas innan lampan används."] },
      { title: "DCL och äldre lamputtag", paragraphs: ["DCL är en standard för anslutning av lampor och används i nyare installationer. Äldre uttag kan ha en annan typ av lamppropp. Att kontakterna ser olika ut betyder inte att man ska bygga om anslutningen på egen hand.", "Kontrollera vilken anslutning lampan är avsedd för. Ett nytt eller flyttat lamputtag är en ändring av den fasta installationen och ska utföras av ett elinstallationsföretag. Be om hjälp om du är osäker på hur en äldre lampa ska anslutas säkert."] },
      { title: "Fast anslutning kräver en särskild bedömning", paragraphs: ["Reglerna skiljer mellan att ansluta en propp, att byta viss befintlig utrustning och att ändra installationen. Elsäkerhetsverket beskriver begränsade arbeten som privatpersoner får göra med tillräcklig kunskap, däribland vissa byten av fast anslutna ljusarmaturer i torra bostadsutrymmen.", "Det är inte ett generellt tillstånd att koppla in varje taklampa. Nya ledningar, nya anslutningspunkter, våtrum och osäkra skyddsförhållanden kräver en annan bedömning. Låt ett registrerat företag utföra arbetet om förutsättningarna eller din kunskap inte räcker."] },
      { title: "När lönar det sig att ta hjälp?", paragraphs: ["Ta hjälp när lampan är tung, installationen är äldre eller när du vill kombinera den med dimmer, spotlights eller smart styrning. Elektrikern kan kontrollera både anslutningen och kompatibiliteten.", "TäbyEl hjälper till med belysning och elinstallationer i Täby och Stockholm. Skicka gärna en bild av lampan och det befintliga uttaget tillsammans med din förfrågan, utan att öppna installationen för att fotografera."] },
    ], sources: [permittedWorkSource, { label: "Elsäkerhetsverket – DCL-uttag och stickproppar", url: "https://www.elsakerhetsverket.se/privatpersoner/dina-elprodukter/produkter/stickproppar-och-uttag/dcl-uttag-och-stickproppar/" }],
  },
];