# Trace: agentic_reflecting_iter1
- **Run ID:** 62a7dbea-698f-421e-8141-3b814a3c9040
- **Tidspunkt:** 2026-03-24T18:45:16.943217+00:00
- **Varighet:** 134.95s
- **Input tokens:** 23603
- **Output tokens:** 6721

## System Prompt
Du er en kvalitetskontrollor for risikoanalyse. Valider identifiserte risikoer mot evidensen i dokumentchunkene.

For hver risiko:
- Vurder om evidensen stotter risikoen
- Juster confidence opp eller ned basert pa evidens
- Fjern risikoer uten tilstrekkelig evidens
- Foreslaa nye sporsmal hvis viktig informasjon mangler

Vurder ogsa om det er risikoer som burde vart identifisert men som mangler.

## User Prompt
Sporsmal: Identifiser risikoer i salgsoppgaven

Identifiserte risikoer:
Risiko 1: Kjeller innredet uten byggemelding til kommunen. Utleiedel i kjeller er etablert men ikke byggemeldt. Dette medfører risiko for pålegg om tilbakeføring, krav om omsøking, ileggelse av overtredelsesgebyr og andre reaksjoner fra kommunen. Kjøper overtar ansvar og risiko for disse forholdene.
  Confidence: 0.98
  Evidens: Kjeller er innredet av tidligere eier uten byggemelding til kommunen.; Utleiedel i kjeller. Var etablert men ikke byggemeldt da vi kjøpte.; Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.; Lovlig utleie av hybelen er avhengig av en slik bruksendring. Den nevnte bruksendringen er ikke omsøkt eller godkjent hos kommunen.

Risiko 2: Midlertidig forbud mot tiltak (Småhusplanen). Eiendommen er underlagt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Dette innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.
  Confidence: 0.97
  Evidens: Kommune vedtatt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Forbudet innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.; Hele eiendommen på 683 m² omfattes av dette formålet.

Risiko 3: Skjeggkre påvist i boligen. Nåværende eier har fanget 10–12 skjeggkre i løpet av 5 år. Tidligere eier opplyste at nabo oppe hadde fanget skjeggkre i limfelle. Skjeggkre er vanskelig å bli kvitt og kan medføre betydelige utbedringskostnader.
  Confidence: 0.96
  Evidens: Tidligere eier har i egenerklæring fra 2020 notert at nabo oppe hadde fanget skjeggkre i limfelle. Vi har ikke hatt problemer med skjeggkre, men vi har fanget 10-12 i de 5 årene vi har bodd i boligen.; Nabo oppe har fanget ett par skjeggkre i limfeller.

Risiko 4: Radonmåling ikke utført av nåværende selger. Siste radonmåling ble utført i 2013 av tidligere eier, og den eksakte verdien huskes ikke. Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier.
  Confidence: 0.95
  Evidens: Selger har ikke utført radonmåling.; Utført måling av radon i 2013. Var under anbefalt verdi, men husker ikke verdien.; Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier. Tiltak: Det anbefales å gjennomføre radonmåling (langtidsmåling i fyringssesong) for å avklare nivået.

Risiko 5: Taktekking og undertak har passert mer enn halvparten av forventet brukstid. Dette øker risikoen for lekkasjer og fuktskader, og utskifting må påregnes.
  Confidence: 0.93
  Evidens: Utvendig - Taktekking | Mer enn halvparten av forventet brukstid er passert på taktekkingen. Mer enn halvparten av forventet brukstid er passert på undertak.; Et tak på en eldre bolig kan over tid ha behov for vedlikehold, som rengjøring, fjerning av mose, kontroll av taktekking og eventuell omlegging, for å beskytte mot værskader og bevare boligens konstruksjon.

Risiko 6: Vinduer over 20 år gamle med høyere sannsynlighet for punktering og redusert isoleringsevne. Utskifting av vinduer kan forventes på sikt.
  Confidence: 0.92
  Evidens: Det påpekes at vinduer som er over 20 år gamle og har passert over halvparten av forventet levetid.; TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.; Utskifting av vinduer kan forventes på sikt og vil være nødvendig for å utbedre avvikene.; Eldre vinduer kan gi trekk grunnet utette pakninger, har lav isoleringsevne og kan subbe mot karm ved bruk.

Risiko 7: Rørinstallasjonene er over 20 år gamle og har passert over halvparten av forventet levetid. Det er observert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen, noe som kan utvikle seg til korrosjon og svekke konstruksjonen.
  Confidence: 0.91
  Evidens: Vannrørene er over 20 år gamle og har passert over halvparten av forventet levetid.; Det ble registrert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen.; Dersom tiltak ikke gjennomføres, kan irrdannelse utvikle seg til korrosjon, som over tid kan svekke konstruksjonen.; Rørstokken bør skiftes om omfanget utvikler seg mer.

Risiko 8: Varmesentral har passert mer enn halvparten av forventet brukstid. Varmepumpen fungerer i dag, men kan plutselig svikte på grunn av alder.
  Confidence: 0.88
  Evidens: Tekniske installasjoner - Varmesentral | Mer enn halvparten av forventet brukstid på varmesentral er oppbrukt.; Varmepumpen fungerer i dag, men ut ifra alder kan plutselig oppstå på eldre anlegg.

Risiko 9: Naturlig ventilasjon fra byggetiden – enklere løsning enn dagens standard. Boligen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.
  Confidence: 0.87
  Evidens: Boligen er bygget med naturlig ventilasjon, som var vanlig på byggetiden. Ventilasjonsløsningen er enklere enn det som benyttes i dag.; Bygningen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.

Risiko 10: Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 følger boligen og må overtas av kjøper. Dersom kjøper ikke ønsker denne avtalen, er de likevel forpliktet til å overta den.
  Confidence: 0.9
  Evidens: Nåværende eier har tegnet avtale om Norgespris på inntil strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.; Norgespris bortfaller eventuell strømstøtte.

Risiko 11: Risiko for overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen (summen av tinglyste heftelser overstiger forventet salgssum), er handel betinget av at kreditorer gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.
  Confidence: 0.85
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.; Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant.

Risiko 12: Legalpant: Kommunen og sameiet har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som ikke fremgår av grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette er en skjult heftelse kjøper overtar.
  Confidence: 0.88
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.

Risiko 13: Rotte påvist i utebod. Tidligere eier opplyste om mus i 2010. Risiko for skadedyr på eiendommen.
  Confidence: 0.85
  Evidens: Fanget en rotte i uteboden. Der har ikke vært mus/rotter inne.; Det var mus i 2010. Anticimex har vært i huset og utbedret i samarbeid med forsikringsselskap.

Risiko 14: Avvik på elektrisk anlegg påvist ved el-tilsyn i desember 2023. Sluk i kjeller måtte jordes etter påvist avvik i forbindelse med el-sjekk. Risiko for at det elektriske anlegget ikke er fullt ut i forskriftsmessig stand.
  Confidence: 0.87
  Evidens: El-tilsynet hadde kontroll av det elektriske anlegget desember 2023. Funnet enkelte avvik der alle.; Sluk i kjeller måtte jordes etter påvist avvik i forbinnelse med el-sjekk.

Risiko 15: Terreng og tomteforhold ikke nærmere vurdert da tomten var snødekt ved befaring. Skjulte feil og mangler ved terreng og grunnforhold kan ikke utelukkes.
  Confidence: 0.82
  Evidens: Tomteforhold - Terrengforhold | Tomten er snødekt og derfor ikke nærmere vurdert. Det bør foretas nærmere undersøkelser.; Flater som er skjult av snø eller på annen måte ikke er tilgjengelig, blir ikke kontrollert.

Risiko 16: Ingen kapillærbrytende sjikt (plast mot byggegrunn) – typisk for byggeåret. Dette kan medføre at fukt fra grunnen trekkes opp i konstruksjonene, med risiko for fuktskader og kondens inne i veggkonstruksjonen.
  Confidence: 0.88
  Evidens: Typisk for byggeåret er at det ikke ble benyttet kapillærbrytende sjikt, dvs plast mot byggegrunn. Dette kan medføre at evt fukt fra grunn kan bli trukket opp i konstruksjonene.; Videre kan konstruksjonen være uheldig med hensyn til evt. kondensering inne i veggkonstruksjonen.

Risiko 17: Eierseksjonsloven § 23 begrenser eierskap til maks to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes med. Kjøper må påse at dette ikke overskrides.
  Confidence: 0.8
  Evidens: Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med.

Risiko 18: Sluk, membran og tettesjikt på bad i underetasje er ikke undersøkt/utilgjengelig (TGIU). Skjulte feil og mangler kan ikke utelukkes, og ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.
  Confidence: 0.85
  Evidens: TGIU - Ikke undersøkt/utilgjengelig: Underetasje Bad - Sluk, membran og tettesjikt.; Ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.; Fremtidig bruksmønster kan påvirke når modernisering bør gjennomføres.

Dokumentkontekst:
[d071_d071 | Side [1]]
 i handelen. Gjennomføring av handelen er betinget kommunen. Fra kommunen kan det komme reaksjoner
Tinglyste heftelser
strømleverandør. av det ikke er tinglyst heftelser som ikke lar seg innfri/ overfor ny eier, ved f.eks. krav om tilbakeføring eller krav
Tinglyste heftelser og rettigheter: Følgende tinglyste slette. om omsøking, ileggelse av overtredelsesgebyr og pålegg
Du kan lese mer om Norgespris blant annet her: https:/ / heftelser følger eiendommen ved salg, og ved inngivelse mv. Uavhengig av

---

[d071_d071 | Side [1]]
GISTERENHETEN MED FLERE kreditorer aksepterer å slette sitt pant uten å få full
Overført fra: KNR: 0301 GNR: 139 BNR: 41 innfrielse av det underliggende kravet. Det informeres om at ingen kan eie mer enn to
Eiendommen omfattes også av eldre reguleringsplan boligseksjoner i sameiet, i henhold til eierseksjonsloven §
32531, "Endret ytparselerings‑ og bebyggelsesplan for en 1935/ 909717‑1/ 105 16.05.1935 BESTEMMELSE OM VEG Legalpant: Kommunen har legalpant som sikkerhet for 23. Seksjoner som eies av

---

[d071_d071 | Side [1]]
nt på inntil 2G som sikkerhet for krav knyttet til I henhold til eierseksjonsloven § 31 er sameierne
GJELDER DENNE REGISTERENHETEN MED FLERE sameieforholdet, som felleskostnader. Legalpant er pant ansvarlige overfor sameiets kreditorer i forhold til sin
Eiendommen omfattes av Kommuneplanen 2015‑2030, Overført fra: KNR: 0301 GNR: 139 BNR: 41 som ikke vises i grunnboksutskriften, og har prioritet sameiebrøk. Ved manglende betaling av fellesutgifter har
vedtatt 23.09.2015. Arealbruken er i planen avsatt til

---

[d071_d071 | Side [1]]
ifter har
vedtatt 23.09.2015. Arealbruken er i planen avsatt til foran tinglyste lån, for eksempel banklån på seksjonen. sameiet legal panterett i den enkelte eierseksjon,
52 53

## Side 28

OM EIENDOMMEN OM EIENDOMMEN
begrenset til inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Kjøper og selger er forpliktet til å

---

[d071_d071 | Side [1]]
r følger eiendommen ved salg, og ved inngivelse mv. Uavhengig av reaksjonsform fra kommunen, overtar
www.regjeringen.no/ no/ tema/ energi/ strom/ av bud vil disse være akseptert av budgiver/ kjøper: Dersom eiendommen skulle bli overbeheftet i kjøper ansvar, risiko og eventuelle konsekvenser knyttet
sporsmal‑og‑svar‑om‑norgespris salgsprosessen, det vil si at summen av fremtidige til dette.
1934/ 909701‑1/ 105 21.09.1934 BESTEMMELSE OM tinglyste heftelser overstiger den forventede
DELEFORBUD salgssummen, er

---

[d071_d071 | Side [1]]
eguleringsplan for Bestemmelse om vann/ kloakkledning ikke kunne gjennomføres. Skulle det bli tinglyst flere dette med mindre boligen er helt eller delvis utleid.
småhusområder i Oslos ytre by (Småhusplanen)", vedtatt Bestemmelse om gjerde utleggspant på eiendommen, kan handel bare
15.03.2006. Hele eiendommen på 683 m² omfattes av Bestemmelse om veg gjennomføres forutsatt at også eventuelle fremtidige
Diverse
dette formålet. GJELDER DENNE REGISTERENHETEN MED FLERE kreditorer aksepterer å slette sitt pant

---

[d071_d071 | Side [1]]
ma, men alt var ok.
• Kjeller er innredet av 琀椀dligere eier uten byggemelding 琀椀l kommunen.
• Utleiedel i kjeller. Var etablert men ikke byggemeldt da vi kjøpte.
• U琀昀ørt måling av radon i 2013. Var under anbefalt verdi, men husker ikke verdien.
• Nabo oppe har fanget e琀琀 par skjeggkre i limfeller.
• Anlagt ny terrasse inkl. trap fra 1. sal imot hagen og kold bod med sykkelparkering. Arbeidet u琀昀ørt i 2021.
• El-琀椀lsynet hadde kontroll av det elektriske anlegget desember 2023. Funnet enkelte avvik der alle

---

[d071_d071 | Side [1]]
nn og avløp
kommune vedtatt et midlertidig forbud mot tiltak for Overført fra: KNR: 0301 GNR: 139 BNR: 41
Dersom beboelsesrom ikke har vegg‑ eller fastmonterte eiendommer som omfattes av planen (plansak Eiendommen er tilknyttet offentlig vei, vann og avløp. Alle
varmekilder ved visning følger dette heller ikke med. 202204703). Forbudet innebærer betydelige 2002/ 54729‑1/ 105 23.08.2002 SEKSJONERING eiendommer som er tilknyttet offentlig vann og avløp har
begrensninger for utvikling av eiendommen og gjelder

---

[d071_d071 | Side [1]]
s/ rotter Beskrivelse av arbeidet: Anlagt ny terrasse inkl. trap fra 1. Arbeidsbeskrivelse: "Se beksrivelse på faktura"
finnes på eiendommen, vil heller ikke følge med i salget. inne. sal imot hagen og kold bod med sykkelparkering. Datert: 19.09.2013
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Kjenner du til om det er/ har vært skjeggkre i boligen? Kjenner du til om det er innredet/ bruksendret/ bygget ut i Utførende firma: Elektro ‑

---

[d071_d071 | Side [1]]
mmunen har legalpant som sikkerhet for 23. Seksjoner som eies av nærstående eller gjennom et
del av Fjeldhus", vedtatt 17.06.1931. Denne planen har Bestemmelse om kloakkledning betaling av kommunale avgifter og eventuell firma regnes også med.
ingen egne skrevne reguleringsbestemmelser og er i Bestemmelse om gjerde eiendomsskatt. De øvrige seksjonseierne i sameiet har
praksis erstattet av den nyere Småhusplanen. Bestemmelse om veg legalpant på inntil 2G som sikkerhet for krav knyttet til I henhold til

---

[d071_d071 | Side [1]]
e heftelser overstiger den forventede
DELEFORBUD salgssummen, er det en forutsetning for at handel skal
Regulerings og arealplaner Radonmåling
Bestemmelse om bebyggelse kunne gjennomføres at kreditorene gir nødvendig
Eiendommen er regulert til byggeområde for boliger i Bestemmelse om benyttelse pantefrafall. Dersom pantefrafall ikke oppnås vil handel Selger har ikke utført radonmåling. Det er ikke krav om
henhold til reguleringsplan S‑4220, "Reguleringsplan for Bestemmelse om vann/ kloakkledning ikke kunne

---

[d071_d071 | Side [1]]
6:
Omkostninger Renovasjonsgebyr 5 441,61
Vann‑og avløpsgebyr 10 030,80
13 500 (Boligkjøperforsikring* (valgfritt)) Feie‑og tilsynsgebyr 472,00
228 750 (Dokumentavgift) Eiendomsskatt 1 295,00
545 (Tinglysningsgebyr ‑ pantedokument) Totale avgifter inkl. eiendomsskatt: 17 239,41,‑
545 (Tinglysningsgebyr skjøte)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
229 840 (Omkostninger totalt (uten
Fellesgjeld
Boligkjøperforsikring))
243 340 (Omkostninger totalt (med Ingen

---

[d071_d071 | Side [1]]
ler. Vi oppfordrer interessenter til å gjøre seg kjent (garasje, fyrrom, bryggerhus), og at lovlig utleie av
Norgespris bortfaller eventuell strømstøtte. med disse. Selger bærer risikoen for at kjøper kan få tinglyst skjøte hybelen er avhengig av en slik bruksendring. Den nevnte
uten andre heftelser enn de som det er avtalt at følger bruksendringen er ikke omsøkt eller godkjent hos
Som boligeier må du fortsatt ha en strømavtale med en med i handelen. Gjennomføring av handelen er betinget kommunen. Fra

---

[d071_d071 | Side [1]]
ligverdien.For mer informasjon
Eiendomsskatt
om formuesverdi, se Skatteetatens nettsider.
Kr 1 295,‑ (2026)
I Oslo kommune er det eiendomsskatt på boliger og fast
39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
det ingen garanti for at bygget er oppført i henhold til til grunn ved omsøking, disse setter bl.a. krav til
Beliggenhet
Parkering
tillatelsen og gjeldende regelverk, eller at det senere er takhøyde, lysflate, ventilasjon, rømningsvei, brannsikring,
Eiendommen har en attraktiv, rolig og skjermet

---

[d071_d071 | Side [1]]
ylt ut egenerklæringsskjema er godkjent. Er det andre forhold av betydning ved eiendommen som
ødeleggelser/ konsekvenser som innebærer kostnader til som vedlagt salgsoppgaven. I skjemaet fremkommer kan være relevant for kjøper å vite om (f.eks. rasfare,
utbedring. Kjøper må innta disse vurderingene og følgende informasjon: Foreligger det samsvarserklæring (i henhold til forskrift tinglyste forhold eller private avtaler)?
medfølgende utbedringskostnader i sin kjøpsbeslutning, om elektriske

---

[d071_d071 | Side [1]]
og tilsynsgebyr 472,00
Eiendomsskatt 1 295,00
Totale avgifter 17 239,41
*Dette er et estimat av kommunale avgifter og eiendomsskatt.
3/3
120
0083466
0073466
0063466
0083466
0073466
0063466
601700 601800
601700 601800
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen

---

[d071_d071 | Side [1]]
å ikke alene benyttes normalt vil omfattes av eiers selvstendige vedlikeholdsansvar
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER for beregning av eiendommens verdi. som seksjons-, aksje- eller andelseier.
osv. Normalt utgjør dette alt innenfor leilighetens/seksjonens vegger.
•Rom som ligger utenfor boenheten, men som eier har påvist Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
• d F o o k r u m sk e ju n l t t a e s k jo o n n , s e tr r u k k

---

[d071_d071 | Side [1]]
nings- og stra昀昀eansvar.
Oppdragsnr.: 22179-26022 Befaringsdato: 22.01.2026 Side: 3 av 37
Oppdragsnr.: 22179-26022 Befaringsdato: 22.01.2026 Side: 4 av 37
70 71

## Side 37

Solkroken 18, 0664 OSLO Taksator AS
Gnr 139 - Bnr 41 Olaf Helsets vei 6
0301 OSLO 0694 OSLO
Beskrivelse av eiendommen
Tomannsbolig (horisontaldelt) med 1.etasje og underetasje,
markterrasser og utvendig bod.
Beliggende i bydel Alna, Teisen. 25
Boligen holder en normal standard og fremstår som
vedlikeholdt. Med noen moderniseringsbehov

---

[d071_d071 | Side [1]]
g avløp har
begrensninger for utvikling av eiendommen og gjelder Opprettet seksjoner: private stikkledninger, som vedlikeholdes for eiers egen
Nåværende eier har tegnet avtale om Norgespris på inntil ny, revidert plan er vedtatt. SNR: 1 regning.
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen Formål: Bolig
følger boligen, og må derfor overtas av kjøper. Området er stadig under endring/ utvikling, bygg settes Sameiebrøk: 1/ 2
Utleie
opp, rehabiliteres og rives ned. Vi anbefaler derfor alle

---

[d071_d071 | Side [1]]
ikring
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser

---

[d071_d071 | Side [1]]
 på teknisk rom, et rom uten sluk. risiko for kondens og lukt.
‑ Utvendig ‑ Taktekking | Mer enn halvparten av forventet over 20 år gamle og har passert over halvparten av Det er observert normal og forventet bruksslitasje på
brukstid er passert på taktekkingen. Mer enn halvparten forventet levetid. Likevel oppfyller bygningsdelene vannrørene. Tiltak: Det anbefales å rense og kontrollere ‑ Tekniske installasjoner ‑ Varmesentral | Mer enn
av forventet brukstid er passert på undertak. Det er tiltenkt

---

[d071_d071 | Side [1]]
 oppfyller ikke nødvendigvis alle
Enkelte vinduer subber noe mot karm, har behov for lokal justering. krav i dagens byggeforskri昀琀er, blant annet når det gjelder te琀琀het, ven琀椀lasjon og varmeisolering.
Konsekvens/琀椀ltak
Rapporten omfa琀琀er boligen slik den fremstod ved befaring og er begrenset 琀椀l forhold som ligger innenfor eiers vedlikeholdsansvar.
• Tiltak:
Alle bygninger har et løpende behov for vedlikehold. Manglende eller utsa琀琀 vedlikehold kan over 琀椀d føre 琀椀l forringelse av bygningsdeler. Setninger

---

[d071_d071 | Side [1]]
normal og forventet bruksslitasje samt klimapåkjenning eventuell forverring eller lekkasjeutvikling. Konsekvens: alder = dårlig effekt eller slutter å fungere. Tidspunkt for
beskytte mot værskader og bevare boligens sett i forhold til bygningsdelens alder, herunder stedvis Dersom tiltak ikke gjennomføres, kan irrdannelse utvikle utskifting nærmer seg.
konstruksjon. Tidspunkt for utskiftning av undertak værslitte karmer og noe malingsslipp. Enkelte vinduer seg til korrosjon, som over tid kan svekke

---

[d071_d071 | Side [1]]
re sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med Andre utvendige forhold
dagens/nye vinduer.
Byggeår, vedlikehold og alder
• Det er registrert normal og forventet bruksslitasje samt klimapåkjenning se琀琀 i forhold 琀椀l bygningsdelens alder, herunder stedvis værsli琀琀e karmer og noe
malingsslipp. Bygningen er oppført i henhold 琀椀l gjeldende byggeforskri昀琀er, byggeskikk og metoder på oppførings琀椀dspunktet. Bygningen oppfyller ikke nødvendigvis alle
Enkelte vinduer subber noe mot

---

[d071_d071 | Side [1]]
 skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀

---

[d071_d071 | Side [1]]
 i vedtektene for eiendommen, der det fremgår hvordan ansvar for bygningsdeler og konstruksjoner er fordelt mellom
___ seksjonene. Vedtektene avklarer hvilke deler som omfa琀琀es av seksjonseiers ansvar, og hvilke som er felles ansvar.
Det er registrert normal og forventet bruksslitasje, samt klimapåkjenning, se琀琀 ut fra bygningsdelens alder.
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering av bygningsdelenes stand, funksjonalitet samt alder.
Andre utvendige forhold - Boder
Det bør på generelt grunnlag

---

[d071_d071 | Side [1]]
ielt utstyr og kompetanse.
Ven琀椀lasjon
Alder, forte琀紀ng og brudd kan være risikomomenter i et hvert anlegg.
Tegn 琀椀l de琀琀e ble ikke observert på befaringsdagen. Boligen er bygget med naturlig ven琀椀lasjon, som var vanlig på bygge琀椀den.
Ven琀椀lasjonsløsningen er enklere enn det som beny琀琀es i dag.
Det er ikke gi琀琀 opplysninger om eventuelle avvik.
Tillu昀琀 slippes inn via noen veggven琀椀ler og spalter i enkelte vinduer.
Tilstandsgrad er sa琀琀 ut fra vurdering av de bygningsdelene som var 琀椀lgjengelige og mulige

---

[d071_d071 | Side [1]]
lstandsrapport
____ Tilstandsgrad er sa琀琀 ut fra vurdering av de bygningsdelene som var 琀椀lgjengelige og mulige å bedømme ut fra en visuell befaring, og alder.
Rørføringer og rørenes 琀椀lstand kan være vanskelig å gi en fullstendig vurdering av da disse for det meste ligger skjult i boligens vegger og konstruksjoner
eller er innkasset.
Undertegnede har ikke fullt ut vurdert bereder og røranlegget for varmtvann av den grunn at de琀琀e krever spesielt utstyr og kompetanse.
Ven琀椀lasjon
Alder, forte琀紀ng og brudd

---

[d071_d071 | Side [1]]
l kunne tjene sitt formål (NS 3600:2018,
Rapporten omfatter ikke tekniske vurderinger av fagområder som
Rapporten beskriver avvik, det vil si en tilstand som er dårligere termer og definisjoner punkt 3.9).
krever særskilt godkjenning eller kompetanse, herunder elektriske
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN anlegg, VVS-installasjoner og ildsteder.
sider ved boligen ut over det som fremgår av tilstandsgradene. AREALBEREGNING FOR BOENHETER Eier av boligen bør jevnlig

---

[d071_d071 | Side [1]]
ld kan over 琀椀d føre 琀椀l forringelse av bygningsdeler. Setninger i
• Utski昀琀ing av vinduer kan forventes på sikt og vil være nødvendig for å utbedre avvikene.
bygningen kan forekomme og kan medføre mindre skjevheter i gulv og konstruksjoner.
Konsekvens - Eldre vinduer kan gi trekk grunnet ute琀琀e pakninger, har lav isoleringsevne og kan subbe mot karm ved bruk.
Alder beny琀琀es som vurderingsfaktor for slitasje og teknisk 琀椀lstand. En bygningsdel kan gis TG 2 basert på høy alder, selv om funksjonen vurderes

---

[d071_d071 | Side [1]]
lser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke

---

[d071_d071 | Side [1]]
k på en eldre bolig kan over tid ha punktering samt noe redusert isoleringsevne omfanget utvikler seg mer. Videre oppfølging av varmepumpen fungerer i dag, men ut ifra alder kan
behov for vedlikehold, som rengjøring, fjerning av mose, sammenlignet med dagens/ nye vinduer. Det er registrert fordelerskapet anbefales jevnlig for å fange opp skader plutselig oppstå på eldre anlegg. Konsekvens ‑
kontroll av taktekking og eventuell omlegging, for å normal og forventet bruksslitasje samt klimapåkjenning eventuell

---

[d071_d071 | Side [1]]
 m s t k e a n n b v r æ ed re d e i s p tr å id Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes
med teknisk forskrift og mangle godkjennelse hos kommunen for også utover det som er omtalt i rapporten.
A go v d vi k k j e e n r n v in u g rd s e ti r d t s u p t u f n ra k t t e e t k f n o i r s k b e y g fo g r e s t k . r N ift o e e r n p b å ygningsdeler er • i s n i i n t n u s s a p id s is j e o e n n r i e f n r r a g e l a o r v f d t e y e t t t t e o ik r g k t a e u k t s v e i

---

[d071_d071 | Side [1]]
nn
av forventet brukstid er passert på undertak. Det er tiltenkt funksjon. TG 2 er gitt som en påpekelse da området for å avdekke om irrdannelsen skyldes fukt, halvparten av forventet brukstid på varmesentral er
registrert normal og forventet bruksslitasje samt vinduer har høy alder med høyere sannsynlighet for lekkasje eller kondens. Rørstokken bør skiftes om oppbrukt. Det er ikke behov for utbedringstiltak siden
klimapåkjenning. Et tak på en eldre bolig kan over tid ha punktering samt noe redusert

---

[d071_d071 | Side [1]]
apporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte

---

[d071_d071 | Side [1]]
osv., vil den bruksareal (BRA-i), eksternt bruksareal (BRA-e) og innglasset
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens •flater som er skjult av snø eller på annen måte ikke er tilgjengelig balkong mv (BRA-b). Terrasse- og balkongareal (TBA) opplyses Endret bruk, kan over tid avdekke skjulte feil og mangler som ikke
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det eller skjult, blir ikke kontrollert. der tilstandsrapporten skal benyttes i boligomsetningen og der det

---

[d071_d071 | Side [1]]
GEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven.

---

[d071_d071 | Side [1]]
ater det, for eksempel ved snøfrihet.
Vurdering av avvik:
Det er registrert normal og forventet bruksslitasje, samt klimapåvirkning.
• Det er avvik:
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering i henhold 琀椀l NS3600.
• Det påpekes at vinduer som er over 20 år gamle og har passert over halvparten av forventet leve琀椀d.
Likevel oppfyller bygningsdelene 琀椀ltenkt funksjon.
TG 2 er gi琀琀 som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne

---

[d071_d071 | Side [1]]
a vurdering av de bygningsdelene som var 琀椀lgjengelige og mulige å bedømme ut fra en visuell befaring. Avtrekk skjer via kjøkken og badene.
____
Vurdering av avvik:
• Det er avvik: Tilstandsgrad er fastsa琀琀 ut fra dagens ven琀椀lasjonsløsning og de forhold som var 琀椀lgjengelige på befarings琀椀dspunktet.
• Det ble registrert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen. Eventuelle endringer i løsningen kan medføre behov for 琀椀ltak og gi grunnlag for endret

---

[d071_d071 | Side [1]]
), samt elektrofaglig fagperson. •Normal slitasjegrad: forventet slitasje av materiale i overflaten Rapporten/befaringen er avholdt i henhold til gjeldende
Takstbransjens retningslinjer for arealmåling når det gjelder som er basert på enkle visuelle observasjoner. Kan vurderes avhendingslov (tryggere bolighandel) og forskrift til
fordeling mellom P-areal og S-areal. TILLEGGSUNDERSØKELSER sammen med bygningsdelens alder. avhendingslova.
Tilstandsgrader settes i henhold til NS3600.
Hjemmel er kontrollert

---

[d071_d071 | Side [1]]
ng mellom Bad:
Det gjøres særskilt oppmerksom på at boden som er kjøkken, spisestue og stue, som gir en luftig og lys Badet i første etasje ble modernisert i 2016 og er helfliset Gulvoverflater: Fliser i entréen, underetasjen og på
medtatt i BRA‑e og totalt BRA, ligger på sameiets atmosfære. Fra spisestuen er det direkte utgang til en med varmekabler i gulvet. Rommet har en plassbygget, badene. Ellers 1‑stavs parkett.
fellesareal, men disponeres av denne seksjonen. Sameiet svært stor terrasse og hage.

---

[d071_d071 | Side [1]]
er • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
erfaringstall, og må ikke forveksles med konkrete pris琀椀lbud fra Tiltak mellom kr 200 000 – 500 000
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet

---

[d071_d071 | Side [1]]
Utleie
opp, rehabiliteres og rives ned. Vi anbefaler derfor alle Bestemmelser om tilleggsdel, se under servitutter.
Norgespris er en ny, statlig ordning, som gir en budgivere å sette seg inn i gjeldende Gjelder seksjon nr.1. Adgang til utleie: Boligen kan leies ut. Det er
forutsigbar og fast strømpris på 50 øre per kWh med reguleringsbestemmelser. Kopi av situasjonskart, tilsynelatende mulig å etablere hybel i kjelleren. Det
mva (40 øre uten mva)gjennom året. Norgespris har et målebrev, reguleringsplaner

---

[d071_d071 | Side [1]]
kke nødvendigvis er dimensjonert for seksjon (ref. punkt 4) samt vinduer. Utgiften hertil
ikke blir raskt synliggjort samt ledet til sluk uten følgeskader. oppgradering av kjøkken med nye elektriske apparater, påhviler den seksjon som endringen gjelder.
følgeskader. rehabilitering av bad m/ varmekabler eller installeringer Det må være enighet mellom sameierne dersom
TGIU ‑ Ikke undersøkt/ utilgjengelig: elbillader. endringer skal gjennomføres som innebærer ombygging,
‑ Underetasje Bad ‑ Sluk, membran og

---

[d071_d071 | Side [1]]
lv og vedlikeholdsansvaret reguleres av borettslagets
Vedtekter/ husordensregler
vegg må hele rommet moderniseres. Om det i tillegg er vedtekter. Solkroken 18, 0664 OSLO
eldre slukløsning bør det også påregnes å bytte dette. Vedlagt prospektet.
Det bemerkes at rommet oppfattes som funksjonelt med ‑ Tomteforhold ‑ Terrengforhold | Tomten er snødekt og Gnr. 139, bnr. 41, snr. 1, ideell andel 1/ 1
dagens bruk, men endret bruk med større fuktbelastning derfor ikke nærmere vurdert. Det bør foretas nærmere i

---

[d071_d071 | Side [1]]
 ø i rer s te o k m n is fo k r e e i k n s s e ta m lla p s e j l o t n a e k r , y m tt e e d rv m eg in g d e r r e , g d r e u t n fo n r m e u lig r, g d e r r e e n t e s ri æ ng rl , i g o g felles
boenheten, med mindre dette er angitt særskilt. Rom utenfor vedlikeholdsansvar knyttet til bygningsdelene.
• h F ø a y s tt t a m le o r n e t , e s rt k e a l i n ik s k ta e l l d a e sj m on o e n r t , e f r o e r s e fo ks r e å m s p je e k l k in e n d fe a l m t b p e s l p y e s r n r i e n n g b

---

[d071_d071 | Side [1]]
ler og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen). betydelig, avhengig av individuelle valg, materialpriser og Tiltak over kr 500 000
markedsforhold. For å få en nøyak琀椀g vurdering av
utbedringskostnadene anbefales y琀琀erligere undersøkelser og
© iVerdi 2023 innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
gis for TG3, der de琀琀e er mulig.
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og

---

[d071_d071 | Side [1]]
ere • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
uregelmessigheter, samt foreslå琀琀e 琀椀ltak. Disse anslagene er Tiltak mellom kr 100 000 – 200 000
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
veiledende, angis i fem intervaller, er basert på generelle
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk

---

[d071_d071 | Side [1]]
t Tilstandsrapport
Det presiseres at konstruksjonen er en felles bygningsdel, og vedlikeholdsansvaret reguleres av bore琀琀slagets vedtekter. Utgang fra soverom 琀椀l markterrasse.
Terrassen ble målt 琀椀l ca. 3,1 m².
Terrassegulv i impregnert trevirke oppå bjelkelag i trekonstruksjoner.
____
Vinduer
Bemerkning:
Vinduer med trerammer og isolerglass, merket med produksjonsår 2005, 2013 og 2022. • Søyler/bærepunkter for taket over inngangspar琀椀et er montert direkte mot betongen, uten klaring fra underlaget.
___

---

[d071_d071 | Side [1]]
iktet nærmer seg moderniseringsbehov. Det er i undersøkelser kan anbefales, forutsatt samtykke og
informasjon
praksis lite gjennomførbart å bare bytte tettesjikt. For å samarbeid med eier av den overliggende seksjonen. Det Husdyr: Det er tillatt med husdyr.
oppnå vanntette løsninger og overganger ved sluk, i gulv, presiseres at konstruksjonen er en felles bygningsdel, og
Adresse
rundt rørgjennomføringer og i overgang mellom gulv og vedlikeholdsansvaret reguleres av borettslagets
Vedtekter/

---

[d071_d071 | Side [1]]
o g f m e e t l l / p e s å s a a m a r t e e N a ie l S . t V o 3 g e 9 d d 4 e 0 t : t 2 e 023 D bo e l t i t g e h e a r n d i h e e l) n o h g o l t d ilh t ø il r g e j n e d ld e e n fo d r e s k a r v if h t. endingslov (tryggere
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade. arealmåling gjelder NS 3940:2023 som definerer fellesareal slik: På forespørsel har rekvirent/eier opplyst at de ikke er kjent med at
•Symptom: forhold som gir indikasjon på hvilken tilstand et

---

[d071_d071 | Side [1]]
. som ikke er utført eller vedtak som medfører eller har medført nytt
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje låneopptak/økning av utgifter, utover det som er nevnt i rapporten.
og sokkeletasje) eller andre bygningsdeler, skal skje etter eiers
•Se øvrig informasjon om areal i rapporten, Norsk Standard 3940
aksept. Hulltaking av våtrom og rom under terreng kan i visse •Skadegjørere: i hovedsak råte, sopp og skadedyr. (2012 og 2023) og veiledningen til disse. Opplysninger om utførte

---

[d071_d071 | Side [1]]
 som er spesialiserte på Forsikringspremien trekkes i oppgjøret. 4.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter 
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300 
og eventuelle idømte

---

[d071_d071 | Side [1]]
der/ Ja. Datert: 26.07.2016
løsøre og tilbehør" med mindre annet fremkommer av insekter/ skadedyr på eiendommen som rotter, mus, Faglært arbeid:
salgsoppgaven. Listen er vedlagt. maur eller lignende? Hvilket år ble jobben fullført?: 2021 Utførende firma: Ulltimo Elektro AS.
Ja. Firmanavn: Pro Construction Snekring AS Type arbeid: Endring.
Gjenstander som er nevnt i standardlisten, men som ikke Fanget en rotte i uteboden. Der har ikke vært mus/ rotter Beskrivelse av arbeidet: Anlagt ny terrasse inkl. trap

---

[d071_d071 | Side [1]]
Eiendomsverdi.no 22.01.2026 Gjennomgå琀琀 Nei
gnr., hjemmelshaver, byggeår, tomteareal,
følge av beslutninger foreta琀琀 i sameiet.
salgspriser mm
Opplysninger gi琀琀 i egenerklæring:
• Tidligere eier har i egenerklæring fra 2020 notert at nabo oppe hadde fanget skjeggkre i limfelle. Vi har ikke ha琀琀 problemer med skjeggkre, Eier 22.01.2026 Som påviste og ga opplysninger. Gjennomgå琀琀 Nei
men vi har fanget 10-12 i de 5 årene vi har bodd i boligen.
Hjemmelshaver(e), ser., eierbrøk, gnr.,
• Fanget en ro琀琀e i

---

[d071_d071 | Side [1]]
Side 19

ALT. PLANTEGNING. SE PUNKT FERDIGATTEST/UTLEIE

## Side 20

OM EIENDOMMEN
SOLKROKEN 18
OM EIENDOMMEN
eiendom som overstiger en fastsatt verdi. Informasjonen
Økonomi
over er hentet fra eiendomsskattelistene.
http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
Prisantydning
skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
Kr 9 150 000
Kommunale avgifter
Omkostning kjøper
Kr 17 239 (2026)
9 150 000,00 (Prisantydning)
Informasjon: Estimat for 2026:
Omkostninger Renovasjonsgebyr 5 441,61
Vann‑og avløpsgebyr 10

---

[d071_d071 | Side [1]]
ngsmyndighetene?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Tidligere eier opplyser i egenmeldinsskjema at radonmåling er gjennomført i 2013 og er under anbefalt verdi.
21.1 Radonmåling
År

---

[d071_d071 | Side [1]]
ak skal være ferdig opparbeidede før midlertidig brukstillatelse gis.
nabogrenser, veier, annen bebyggelse, stier, bekker med mer.
d. Kotesatt eksisterende og planert terreng på eiendommen og tilstøtende arealer.
§ 16 Luftforurensing e. Bebyggelsens høyder, kote- og målsatt, og utforming sammen med eksisterende
bebyggelse på naboeiendommer i nærområdet.
I områder der grenseverdiene for lokal luftkvalitet kan bli overskredet, skal arealer ikke fradeles
f. Analyse og beskrivelse av tiltakets innvirkning på

---

[d071_d071 | Side [1]]
holdsareal og hvordan 60 % vanngjennomtrengelige arealer sikres, vises. Større,
må plan for tiltak som dokumenterer tilfredsstillende støynivå foreligge sammen med søknad om
eksisterende trær med avsatt plass til rotsone skal inntegnes.
tillatelse til tiltak. Aktuelle terrengtiltak innarbeides i utomhusplanen, jfr. § 6. Alle
c. Eksisterende og ny bebyggelses nøyaktige plassering på eiendommen i forhold til
støybeskyttelsestiltak skal være ferdig opparbeidede før midlertidig brukstillatelse

---

[d071_d071 | Side [1]]
elsene er oppfylt.
bestemte krav til utforming, høyde, osv.
§ 12 Uteoppholdsareal
Det skal settes av uteoppholdsareal etter følgende norm.:
6 7
132 133

## Side 68

§ 15 Støy b. Disponering av eiendommen til bebyggelse, atkomst, parkering og uteoppholdsareal med
vegetasjon. Ved felles uteoppholdsareal skal avgrensning av private og felles
Der støyforholdene overstiger laveste grense i de til enhver tid gjeldende retningslinjer for støy,
uteoppholdsareal og hvordan 60 % vanngjennomtrengelige arealer sikres,

---

[d071_d071 | Side [1]]
e fradeles
f. Analyse og beskrivelse av tiltakets innvirkning på naboeiendommer i forhold til sol ved
eller bebygges uten at det gjennomføres tiltak som vil gi tilfredsstillende luftkvalitet.
jevndøgn kl. 15:00, samt miljøbelastninger, herunder lokale trafikkforhold.
g. Tiltakets plantegninger, snitt og fasader med tilgrensende nabobebyggelse vist.
§ 17 Jordforurensning h. Dokumentasjon som viser at tiltaket, jf. § 18, 2. ledd, ikke kommer i konflikt med
automatisk fredete kulturminner etter

---

[d071_d071 | Side [1]]
P-
200401057 (i målestokk 1:5000), datert 01.03.2004 og revidert 10.02.2006.
§ 2 Reguleringsformål
Området reguleres til byggeområde for boliger. Innenfor planområdet opprettholdes gjeldende
reguleringsplaner for andre formål enn byggeområder for boliger.
Automatisk fredete kulturminner som er avmerket på plankartet reguleres til spesialområder
bevaring/automatisk fredete kulturminner/boliger.
Figur 1a : Figur 1b: Figur 1c:
§ 3 Hensikten med reguleringsplanen Nærområde der tiltak ligger Nærområde der

---

[d071_d071 | Side [1]]
 med reguleringsplanen Nærområde der tiltak ligger Nærområde der tiltak ligger i Nærområde der tiltak ligger bak
langs vei/gate vei-/gatekryss bebyggelse langs vei/gate
Hensikten med reguleringsplanen er å legge til rette for en utvikling i planområdet med
bebyggelse med småhuskarakter, og å opprettholde og styrke småhusområdenes kvaliteter. Planen
b. Med bebyggelsesstruktur menes måten bygningene er plassert og gruppert på den enkelte
skal ivareta områdenes estetiske, funksjonelle, kulturminnefaglige og

---

[d071_d071 | Side [1]]
 20). a. Med nærområde menes et område som omfatter tilgrensende eiendommer, eiendommer
som er gjenboere, samt eiendommer langs begge sider av tilliggende vei/veier, som følger
Paragraf 1 – 20 av figur 1a-c. Kommunen kan fastsette et utvidet eller redusert nærområde der det er
§ 1 Avgrensning naturlig at et større eller mindre område ses i sammenheng.
Disse reguleringsbestemmelser gjelder for de områder som er vist på plankart merket BOP-
200401057 (i målestokk 1:5000), datert 01.03.2004 og revidert

---

[d071_d071 | Side [1]]
obber. Det er to fordelerskap med overløp til rom med kan tiltak som tetting mot grunnen, radonbrønn eller
Tak: sluk. Hovedstoppekran er lokalisert i boden i Er det elektriske anlegget utført eller er det foretatt forbedret ventilasjon vurderes. Konsekvens: Ukjent
Saltak i trekonstruksjoner, tekket med takstein. Mer enn underetasjen. Interne og synlige avløpsrør er i plast. tilleggsarbeider på det elektriske anlegget etter 1.1.1999? radonnivå kan medføre helserisiko ved forhøyde verdier.
halvparten av

---

[d071_d071 | Side [1]]
tene, med utgangspunkt i det som var mulig å vurdere ved visuell befaring.
Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier.
• Eldre bygårder og bygninger - informasjon om brannceller
Terrengforhold
Tiltak: Det anbefales å vurdere branncelleinndelingen nærmere dersom det planlegges ombygging, bruksendring eller andre søknadsplik琀椀ge 琀椀ltak.
Eventuelle oppgraderinger bør da prosjekteres og u琀昀øres i samsvar med gjeldende krav i TEK. Det er ikke krav om oppgradering så lenge bygningen

---

[d071_d071 | Side [1]]
) Knytning(er)motandreplaner:
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
Dokumentetbestårav1side(r)inkludertdenne.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
Besøksadresse:
Plan-ogbygningsetaten Sentralbord:+4721802180
H310_2 -

---

[d071_d071 | Side [1]]
t for de øvrige plottene.
PlottID/Best.nr: 151839/86525200
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
123

## Side 63

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense

---

[d071_d071 | Side [1]]
 terreng og har utforede veggkonstruksjoner. av eventuelle avvik i eltilsynsrapport (dvs en forskrifter. Det er behov for tiltak. Tiltak: Det anbefales å
Kjelleren er innredet av tidligere eier uten byggemelding VVS‑installasjoner: el‑tilsynsrapport uten avvik)? gjennomføre radonmåling (langtidsmåling i
til kommunen. Vannførende rør er i plast (rør i rør opplegg), fleksirør og ‑ Ja fyringssesong) for å avklare nivået. Ved forhøyde verdier
kobber. Det er to fordelerskap med overløp til rom med kan tiltak

---

[d071_d071 | Side [1]]
ennomført i 2013 og er under anbefalt verdi.
21.1 Radonmåling
År 2013
Verdi Tidligere eier opplyser i egenmelding at verdien ikke huskes.
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Beskrivelse Der er utarbeidet

---

[d071_d071 | Side [1]]
ikke kommer i konflikt med
automatisk fredete kulturminner etter kulturminneloven.
Arealer med forurensning i grunnen kan ikke bebygges uten at nødvendige tiltak gjennomføres.
i. Dokumentasjon som viser hvordan tiltaket hensyntar naturmangfold.
j. Marksikringsplan som redegjør for sikring av større trær og terreng i byggeperioden.
§ 18 Automatisk fredete kulturminner – forholdet til lov om kulturminner og k. Redegjørelse for lokal håndtering av overvann.
rekkefølgebestemmelser
De automatisk fredete

---

[d071_d071 | Side [1]]
 boliger og for eksisterende boliger på eiendommer hvor det
skal gjennomføres tiltak. Arealnormen gjelder også ved endring av antall eller størrelse på
leiligheter i eksisterende bebyggelse og ved fradeling av eiendommer.
Minst 3/4 av uteoppholdsarealet skal være på terreng. Takterrasser medregnes i uteoppholdsareal.
Arealer brattere enn 1:3 etter planering tas ikke med i beregningen av uteoppholdsareal.
Uteoppholdsareal skal plasseres best mulig i forhold til sol og støy/andre miljøbelastninger, skal
være

---

[d071_d071 | Side [1]]
t 7 mm ‑ Tekniske installasjoner ‑ Ventilasjon | Boligen har den dreneringen fra byggeåret moderniseres, men
bakkenivå. Det er registrert normal og forventet planavvik gjennom hele rommet. Det ble observert naturlige ventilasjonen som var vanlig på byggetiden. tidspunktet for når dette er nødvendig er vanskelig å si
bruksslitasje samt klimapåkjenning sett i forhold til stedvis knitring i parketten. Forholdet vurderes ikke som Ventilasjonsløsningen er enklere enn det som benyttes i noe om. Vennligst merk at

---

[d071_d071 | Side [1]]
yggelse på tilgrensende eiendommer være førende.
Ved innsendelse av søknad om tillatelse til tiltak kreves utomhusplan. Denne skal vise både
I områder med større bygningsvolumer i eksisterende bebyggelse skal nye boligenheter samles i
eksisterende og planert terreng for eiendommen og terrengtilpasning til naboeiendommene, samt
volumer av tilsvarende størrelse.
opparbeiding av utearealene.
6.3
Terrengbehandling, beplantning og annen opparbeiding i samsvar med godkjent utomhusplan må
Tiltak innenfor

---

[d071_d071 | Side [1]]
anbefales å vurdere
adkomst skjer via seksjonen over. Takrenner, nedløpsrør baksiden ved terrassen. utført før nåværende eiers botid. Eventuelt tidligere branncelleinndelingen nærmere dersom det planlegges
og beslag er i stål. utførte arbeider er ikke kjent. Fremlagte ombygging, bruksendring eller andre søknadspliktige
Ventilasjon: samsvarserklæringer: Utførende firma: Sofienberg tiltak. Eventuelle oppgraderinger bør da prosjekteres og
Pipe/ Ildsted: Boligen er bygget med naturlig ventilasjon. Tilluft

---

[d071_d071 | Side [1]]
gen?
Antall år 5
Antall måneder 7
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Beskrivelse Sluk i kjeller måtte jordes etter påvist avvik i forbinnelse med el-sjekk.
Initialer selger: CVK, ELK 1
42006220
:ecnerefer
tnemucoD
2 Kjenner du til om det

---

[d071_d071 | Side [1]]
ventet levetid, øker risikoen installasjonene (el‑takst) selv om bygningssakkyndig kan interesser i overenstemmelse med sameiets vedtekter, Selger har fylt ut fullstendig energiattest, som er lagt ved
for fuktskader og lekkasjer over tid. Ved endret bruk eller ha knyttet noen kommentarer til elanlegget ut i fra helt og lov om eierseksjoner 23. mai 1997 nr. 31. salgsoppgaven. Megler påtar seg ikke ansvar for
økt fuktbelastning kan eksisterende løsninger svikte, og enkle vurderingskriterier. Siden elanlegget

---

[d071_d071 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d071_d071 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d071_d071 | Side [1]]
egistrert unormale fuktindikasjoner tilgjengelig for inspeksjon. Disse delene kan dermed ha Alle eiendommer som selges eller leies ut, skal ha
ved befaring. Våtrommet fremstår i funksjonell stand, feil eller mangler som ikke er avdekket. Sameiet, med gnr. 139 bnr. 41, består av to enheter energiattest. Unntak gjelder blant annet for frittstående
men fremtidig bruksmønster kan påvirke når opprettet ved seksjoneringsbegjæring tinglyst bygninger med bruksareal mindre enn 50 m². Det er eier
modernisering bør

---

[d071_d071 | Side [1]]
ks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
Beskrivelse Fanget en rotte i uteboden. Der har ikke vært mus/rotter inne.
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
Tidligere eier har i egenerklæring fra 2020 notert at nabo oppe hadde fanget skjeggkre i limfelle. Vi har ikke hatt
Beskrivelse
problemer med skjeggkre, men vi har fanget 10-12 i de 5

---

[d071_d071 | Side [1]]
eiendommer For gyldighet på rapporten se forside
Oppdragderinger gjort på eiendommen i henhold 琀椀l opplysninger, egenerklæringsskjema fra 琀椀dligere selger i 2020:
• Begge bad er bygget opp helt fra grunn. Bad i 1. etasje er ble gjort av So昀椀enberg bygg i 2016. Bad i kjeller ble gjort av BVR i 2011.
• Det var mus i 2010. An琀椀cimex har vært i huset og utbedret i samarbeid med forsikringsselskap.
• Nabo i 2. etasje har observert skjeggkre. Har observert det vi tror er sølvkre i kjeller.
• Terrassen ble bygget

---

[d071_d071 | Side [1]]
ngen.
Videre kan konstruksjonen være uheldig med hensyn 琀椀l evt. kondensering inne i veggkonstruksjonen.
Typisk for byggeåret et at det ikke ble beny琀琀et kapillærbrytende sjikt, dvs plast mot byggegrunn. VÅTROM
De琀琀e kan medføre at evt fukt fra grunn kan bli trukket opp i konstruksjonene.
___
1.ETASJE > BAD
Hulltaking ble u琀昀ørt på soverommet, mot vegg vendt mot terreng – område som vurdert 琀椀l typisk mest utsa琀琀 for fukt. Generell
Søket med RF-måler (rela琀椀v fuk琀椀ghet - stav) viste en måling på 43 % ved

---

[d071_d071 | Side [1]]
selgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom

---

[d071_d071 | Side [1]]
 RF-måler (rela琀椀v fuk琀椀ghet - stav) viste en måling på 43 % ved 24 °C, noe som ikke indikerer unormale fuktverdier på befarings琀椀dspunket. Flislagt baderom fra 2016, i henhold 琀椀l 琀椀dligere selger.
(Flis på 昀氀is, på gulvet).
De琀琀e er likevel ingen garan琀椀 for at avvik eller skader ikke kan oppdages ved åpning av konstruksjonen. Andre verdier kan også forekomme i ulike års琀椀der,
avhengig av værforhold og nedbørsmengde. Det er fremlagt dokumentasjon på baderommets oppbygging eller tekniske

---

[d071_d071 | Side [1]]
er innredet/ bruksendret/ bygget ut i Utførende firma: Elektro ‑ Fagmannen AS.
garanti fra produsent eller leverandør. Ja. kjeller eller loft eller andre deler av boligen? Type arbeid: "Endring av eksisterende anlegg"
Tidligere eier har i egenerklæring fra 2020 notert at nabo Ja. Arbeidsbeskrivelse: "Div ihht avtale"
Kjøper aksepterer at det kan forekomme hull og merker oppe hadde fanget skjeggkre i limfelle. Vi har ikke hatt Kjeller er innredet. Tidligere eier opplyser i Datert: 23.07.2012.
etter

---

[d071_d071 | Side [1]]
old eller private
avtaler)?
Nei Ja
Beskrivelse Der er utarbeidet skriflig vedtekter og husrekler for boligen i samarbeid med naboen over.
Initialer selger: CVK, ELK 3
42006220
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis,

---

[d071_d071 | Side [1]]
svirksomhet.
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres Alle bud skal inngi skriftlig til eiendomsmegler. Kravet til
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke skriftlighet gjelder også ved forhøyelse av bud, motbud
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd og selgers aksept

---

[d071_d071 | Side [1]]
er innredet. Tidligere eier opplyser i Datert: 23.07.2012.
etter montering av inventar og utstyr som ikke er en del problemer med skjeggkre, men vi har fanget 10‑12 i de 5 egenmeldingsskjema at det er uten byggemelding til
av overdragelsen. årene vi har bodd i boligen. kommunen.
Byggemåte
Kjenner du til om det er/ har vært utført arbeid på Er det foretatt radonmåling? Informasjon er hentet fra vedlagte tilstandsrapport,
44 45

## Side 24

OM EIENDOMMEN OM EIENDOMMEN
datert 29.01.2026. Innvendig trapp

---

[d071_d071 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d071_d071 | Side [1]]
2012 og 2023) og veiledningen til disse. Opplysninger om utførte arbeider, årstall og øvrige opplysninger i
tilfeller unnlates (ref. forskrift til avhendingslova). rapporten er basert på opplysninger gitt av eier/beboer/rekvirent
•Fuktsøk: overflatesøk med egnet søkeutstyr som fuktindikator eller fremlagt dokumentasjon.
eller visuelle observasjoner.
•Kontroll av romfunksjoner for P-ROM blir bare utført når det ikke
PERSONVERN I henhold til gjeldende forskrift er det ikke krav til
Oppdragsnr.: 22179-26022

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Kjeller innredet uten byggemelding til kommunen. Utleiedel i kjeller er etablert men ikke byggemeldt. Dette medfører risiko for pålegg om tilbakeføring, krav om omsøking, ileggelse av overtredelsesgebyr og andre reaksjoner fra kommunen. Kjøper overtar ansvar og risiko for disse forholdene.",
      "evidence": [
        "Kjeller er innredet av tidligere eier uten byggemelding til kommunen.",
        "Utleiedel i kjeller. Var etablert men ikke byggemeldt da vi kjøpte.",
        "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.",
        "Lovlig utleie av hybelen er avhengig av en slik bruksendring. Den nevnte bruksendringen er ikke omsøkt eller godkjent hos kommunen.",
        "Kjelleren er innredet av tidligere eier uten byggemelding til kommunen.",
        "Tilsynelatende mulig å etablere hybel i kjelleren. Det [er ikke byggemeldt]."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Midlertidig forbud mot tiltak (Småhusplanen). Eiendommen er underlagt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Dette innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.",
      "evidence": [
        "Kommune vedtatt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Forbudet innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.",
        "Hele eiendommen på 683 m² omfattes av dette formålet.",
        "Eiendommen er regulert til byggeområde for boliger i henhold til reguleringsplan S-4220, Reguleringsplan for småhusområder i Oslos ytre by (Småhusplanen), vedtatt 15.03.2006."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Skjeggkre påvist i boligen. Nåværende eier har fanget 10–12 skjeggkre i løpet av 5 år. Tidligere eier opplyste at nabo oppe hadde fanget skjeggkre i limfelle. Skjeggkre er vanskelig å bli kvitt og kan medføre betydelige utbedringskostnader.",
      "evidence": [
        "Tidligere eier har i egenerklæring fra 2020 notert at nabo oppe hadde fanget skjeggkre i limfelle. Vi har ikke hatt problemer med skjeggkre, men vi har fanget 10-12 i de 5 årene vi har bodd i boligen.",
        "Nabo oppe har fanget ett par skjeggkre i limfeller.",
        "Nabo i 2. etasje har observert skjeggkre. Har observert det vi tror er sølvkre i kjeller."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R4",
      "description": "Radonmåling ikke utført av nåværende selger. Siste radonmåling ble utført i 2013 av tidligere eier, og den eksakte verdien huskes ikke. Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Utført måling av radon i 2013. Var under anbefalt verdi, men husker ikke verdien.",
        "Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier. Tiltak: Det anbefales å gjennomføre radonmåling (langtidsmåling i fyringssesong) for å avklare nivået.",
        "Tidligere eier opplyser i egenmeldingsskjema at radonmåling er gjennomført i 2013 og er under anbefalt verdi.",
        "År 2013 – Verdi: Tidligere eier opplyser i egenmelding at verdien ikke huskes."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Taktekking og undertak har passert mer enn halvparten av forventet brukstid. Dette øker risikoen for lekkasjer og fuktskader, og utskifting må påregnes.",
      "evidence": [
        "Utvendig - Taktekking | Mer enn halvparten av forventet brukstid er passert på taktekkingen. Mer enn halvparten av forventet brukstid er passert på undertak.",
        "Et tak på en eldre bolig kan over tid ha behov for vedlikehold, som rengjøring, fjerning av mose, kontroll av taktekking og eventuell omlegging, for å beskytte mot værskader og bevare boligens konstruksjon.",
        "Saltak i trekonstruksjoner, tekket med takstein. Mer enn halvparten av [forventet brukstid passert]."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R6",
      "description": "Vinduer over 20 år gamle med høyere sannsynlighet for punktering og redusert isoleringsevne. Utskifting av vinduer kan forventes på sikt.",
      "evidence": [
        "Det påpekes at vinduer som er over 20 år gamle og har passert over halvparten av forventet levetid.",
        "TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.",
        "Utskifting av vinduer kan forventes på sikt og vil være nødvendig for å utbedre avvikene.",
        "Eldre vinduer kan gi trekk grunnet utette pakninger, har lav isoleringsevne og kan subbe mot karm ved bruk.",
        "Vinduer med trerammer og isolerglass, merket med produksjonsår 2005, 2013 og 2022."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Rørinstallasjonene er over 20 år gamle og har passert over halvparten av forventet levetid. Det er observert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen, noe som kan utvikle seg til korrosjon og svekke konstruksjonen.",
      "evidence": [
        "Vannrørene er over 20 år gamle og har passert over halvparten av forventet levetid.",
        "Det ble registrert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen.",
        "Dersom tiltak ikke gjennomføres, kan irrdannelse utvikle seg til korrosjon, som over tid kan svekke konstruksjonen.",
        "Rørstokken bør skiftes om omfanget utvikler seg mer.",
        "Vannførende rør er i plast (rør i rør opplegg), fleksirør og kobber."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R8",
      "description": "Varmesentral har passert mer enn halvparten av forventet brukstid. Varmepumpen fungerer i dag, men kan plutselig svikte på grunn av alder.",
      "evidence": [
        "Tekniske installasjoner - Varmesentral | Mer enn halvparten av forventet brukstid på varmesentral er oppbrukt.",
        "Varmepumpen fungerer i dag, men ut ifra alder kan plutselig oppstå på eldre anlegg.",
        "Det er ikke behov for utbedringstiltak siden [varmepumpen fungerer i dag]."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Naturlig ventilasjon fra byggetiden – enklere løsning enn dagens standard. Boligen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.",
      "evidence": [
        "Boligen er bygget med naturlig ventilasjon, som var vanlig på byggetiden. Ventilasjonsløsningen er enklere enn det som benyttes i dag.",
        "Bygningen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.",
        "Tilluft slippes inn via noen veggventiler og spalter i enkelte vinduer. Avtrekk skjer via kjøkken og badene."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 følger boligen og må overtas av kjøper. Dersom kjøper ikke ønsker denne avtalen, er de likevel forpliktet til å overta den.",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på inntil strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Norgespris bortfaller eventuell strømstøtte.",
        "Du kan lese mer om Norgespris blant annet her: https://www.regjeringen.no/no/tema/energi/strom/sporsmal-og-svar-om-norgespris"
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Risiko for overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen (summen av tinglyste heftelser overstiger forventet salgssum), er handel betinget av at kreditorer gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
        "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Legalpant: Kommunen og sameiet har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som ikke fremgår av grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette er en skjult heftelse kjøper overtar.",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Rotte påvist i utebod. Tidligere eier opplyste om mus i 2010. Risiko for skadedyr på eiendommen.",
      "evidence": [
        "Fanget en rotte i uteboden. Der har ikke vært mus/rotter inne.",
        "Det var mus i 2010. Anticimex har vært i huset og utbedret i samarbeid med forsikringsselskap.",
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja. Fanget en rotte i uteboden."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Avvik på elektrisk anlegg påvist ved el-tilsyn i desember 2023. Sluk i kjeller måtte jordes etter påvist avvik i forbindelse med el-sjekk. Risiko for at det elektriske anlegget ikke er fullt ut i forskriftsmessig stand.",
      "evidence": [
        "El-tilsynet hadde kontroll av det elektriske anlegget desember 2023. Funnet enkelte avvik der alle.",
        "Sluk i kjeller måtte jordes etter påvist avvik i forbinnelse med el-sjekk.",
        "Er det elektriske anlegget utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Ja.",
        "Foreligger det samsvarserklæring (i henhold til forskrift om elektriske anlegg)? Ja."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Terreng og tomteforhold ikke nærmere vurdert da tomten var snødekt ved befaring. Skjulte feil og mangler ved terreng og grunnforhold kan ikke utelukkes.",
      "evidence": [
        "Tomteforhold - Terrengforhold | Tomten er snødekt og derfor ikke nærmere vurdert. Det bør foretas nærmere undersøkelser.",
        "Flater som er skjult av snø eller på annen måte ikke er tilgjengelig, blir ikke kontrollert."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R16",
      "description": "Ingen kapillærbrytende sjikt (plast mot byggegrunn) – typisk for byggeåret. Dette kan medføre at fukt fra grunnen trekkes opp i konstruksjonene, med risiko for fuktskader og kondens inne i veggkonstruksjonen.",
      "evidence": [
        "Typisk for byggeåret er at det ikke ble benyttet kapillærbrytende sjikt, dvs plast mot byggegrunn. Dette kan medføre at evt fukt fra grunn kan bli trukket opp i konstruksjonene.",
        "Videre kan konstruksjonen være uheldig med hensyn til evt. kondensering inne i veggkonstruksjonen.",
        "Hulltaking ble utført på soverommet, mot vegg vendt mot terreng – område som vurdert til typisk mest utsatt for fukt."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R17",
      "description": "Eierseksjonsloven § 23 begrenser eierskap til maks to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes med. Kjøper må påse at dette ikke overskrides.",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R18",
      "description": "Sluk, membran og tettesjikt på bad i underetasje er ikke undersøkt/utilgjengelig (TGIU). Skjulte feil og mangler kan ikke utelukkes, og ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.",
      "evidence": [
        "TGIU - Ikke undersøkt/utilgjengelig: Underetasje Bad - Sluk, membran og tettesjikt.",
        "Ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.",
        "Fremtidig bruksmønster kan påvirke når modernisering bør gjennomføres.",
        "Det er i praksis lite gjennomførbart å bare bytte tettesjikt. For å oppnå vanntette løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet moderniseres."
      ],
      "source_documents": [
        "d071_d071"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "ferdigattest kjeller underetasje byggetillatelse",
    "dreneringsforhold fukt kjeller underetasje",
    "brannceller branncelleinndelingen bolig",
    "sølvkre kjeller skadedyr",
    "søyler bærepunkter inngangsparti betong klaring",
    "planavvik parketten gulv underetasje",
    "sameiet vedtekter husordensregler fordeling vedlikeholdsansvar",
    "energiattest karakter bolig",
    "terrasse byggemelding tillatelse 2021"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Kjeller uten byggemelding (0.98 → 0.99):** Svært godt dokumentert. Flere uavhengige kilder bekrefter: egenerklæring fra nåværende selger, egenerklæring fra tidligere selger (2020), tilstandsrapport og salgsoppgavetekst. Confidence justeres marginalt opp til 0.99 da evidensen er eksplisitt og konsistent.\n\n**R2 – Småhusplanen/midlertidig forbud (0.97):** Godt dokumentert med plansak-nummer og arealomfang. Confidence beholdes på 0.97.\n\n**R3 – Skjeggkre (0.96):** Godt dokumentert. Tilleggsbevis fra egenerklæring 2020 (tidligere eier) om sølvkre i kjeller styrker bildet ytterligere. Confidence beholdes på 0.96.\n\n**R4 – Radon (0.95):** Godt dokumentert. Egenerklæring bekrefter at nåværende selger ikke har utført måling, og at tidligere eiers måling fra 2013 ikke huskes. Confidence beholdes på 0.95.\n\n**R5 – Taktekking (0.93):** Godt dokumentert i tilstandsrapport. Confidence beholdes på 0.93.\n\n**R6 – Vinduer (0.92 → 0.88):** Dokumentert, men det fremgår at noen vinduer er fra 2005, 2013 og 2022 – altså er ikke alle vinduer over 20 år. Risikoen er reell for de eldste vinduene, men noe nyansering er nødvendig. Confidence justeres ned til 0.88.\n\n**R7 – Rørinstallasjoner/irr (0.91):** Godt dokumentert. Confidence beholdes på 0.91.\n\n**R8 – Varmesentral (0.88):** Dokumentert. Confidence beholdes på 0.88.\n\n**R9 – Ventilasjon (0.87):** Godt dokumentert. Confidence beholdes på 0.87.\n\n**R10 – Norgespris strømavtale (0.90):** Godt dokumentert. Confidence beholdes på 0.90.\n\n**R11 – Overbeheftelse (0.85):** Dokumentert som standardklausul i salgsoppgaven. Confidence beholdes på 0.85.\n\n**R12 – Legalpant (0.88):** Godt dokumentert. Confidence beholdes på 0.88.\n\n**R13 – Rotte/skadedyr (0.85):** Dokumentert. Merk at rotten ble fanget i utebod, ikke inne i boligen, og at Anticimex utbedret museproblem i 2010. Risikoen er reell men begrenset. Confidence beholdes på 0.85.\n\n**R14 – El-avvik (0.87 → 0.82):** Dokumentert, men det fremgår at avvikene ble utbedret (sluk ble jordet) og at samsvarserklæring foreligger. Risikoen er dermed noe redusert. Confidence justeres ned til 0.82.\n\n**R15 – Snødekt terreng (0.82):** Dokumentert. Confidence beholdes på 0.82.\n\n**R16 – Kapillærbrytende sjikt (0.88):** Godt dokumentert. Hulltaking bekrefter fokus på fukteksponert vegg. Confidence beholdes på 0.88.\n\n**R17 – Eierseksjonsloven § 23 (0.80):** Dokumentert som standardopplysning. Confidence beholdes på 0.80.\n\n**R18 – TGIU bad underetasje (0.85):** Godt dokumentert. Confidence beholdes på 0.85.\n\n**Manglende risikoer identifisert:**\n1. **Søyler/bærepunkter inngangsparti montert direkte mot betong uten klaring** – nevnt i tilstandsrapporten, kan medføre fuktskader/råte over tid.\n2. **Planavvik i parketten i underetasjen** – observert knitring og planavvik, kan indikere setninger eller fuktproblemer.\n3. **Branncelleinndeling ikke vurdert** – tilstandsrapporten anbefaler vurdering ved ombygging/bruksendring.\n4. **Sølvkre i kjeller** – nevnt i egenerklæring fra 2020, ikke eksplisitt adressert som separat risiko.\n5. **Terrasse og kald bod bygget i 2021** – det er uklart om dette er byggemeldt/godkjent.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
}

## Raw Response
```json
{
  "id": "msg_01M4cJgqoNVJnAeNrY1VYEuJ",
  "container": null,
  "content": [
    {
      "id": "toolu_01H4q7JaU1vApifmVrXHmXgR",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Kjeller innredet uten byggemelding til kommunen. Utleiedel i kjeller er etablert men ikke byggemeldt. Dette medfører risiko for pålegg om tilbakeføring, krav om omsøking, ileggelse av overtredelsesgebyr og andre reaksjoner fra kommunen. Kjøper overtar ansvar og risiko for disse forholdene.",
            "evidence": [
              "Kjeller er innredet av tidligere eier uten byggemelding til kommunen.",
              "Utleiedel i kjeller. Var etablert men ikke byggemeldt da vi kjøpte.",
              "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.",
              "Lovlig utleie av hybelen er avhengig av en slik bruksendring. Den nevnte bruksendringen er ikke omsøkt eller godkjent hos kommunen.",
              "Kjelleren er innredet av tidligere eier uten byggemelding til kommunen.",
              "Tilsynelatende mulig å etablere hybel i kjelleren. Det [er ikke byggemeldt]."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Midlertidig forbud mot tiltak (Småhusplanen). Eiendommen er underlagt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Dette innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.",
            "evidence": [
              "Kommune vedtatt et midlertidig forbud mot tiltak for eiendommer som omfattes av planen (plansak 202204703). Forbudet innebærer betydelige begrensninger for utvikling av eiendommen og gjelder inntil ny, revidert plan er vedtatt.",
              "Hele eiendommen på 683 m² omfattes av dette formålet.",
              "Eiendommen er regulert til byggeområde for boliger i henhold til reguleringsplan S-4220, Reguleringsplan for småhusområder i Oslos ytre by (Småhusplanen), vedtatt 15.03.2006."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Skjeggkre påvist i boligen. Nåværende eier har fanget 10–12 skjeggkre i løpet av 5 år. Tidligere eier opplyste at nabo oppe hadde fanget skjeggkre i limfelle. Skjeggkre er vanskelig å bli kvitt og kan medføre betydelige utbedringskostnader.",
            "evidence": [
              "Tidligere eier har i egenerklæring fra 2020 notert at nabo oppe hadde fanget skjeggkre i limfelle. Vi har ikke hatt problemer med skjeggkre, men vi har fanget 10-12 i de 5 årene vi har bodd i boligen.",
              "Nabo oppe har fanget ett par skjeggkre i limfeller.",
              "Nabo i 2. etasje har observert skjeggkre. Har observert det vi tror er sølvkre i kjeller."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R4",
            "description": "Radonmåling ikke utført av nåværende selger. Siste radonmåling ble utført i 2013 av tidligere eier, og den eksakte verdien huskes ikke. Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Utført måling av radon i 2013. Var under anbefalt verdi, men husker ikke verdien.",
              "Ukjent radonnivå kan medføre helserisiko ved forhøyde verdier. Tiltak: Det anbefales å gjennomføre radonmåling (langtidsmåling i fyringssesong) for å avklare nivået.",
              "Tidligere eier opplyser i egenmeldingsskjema at radonmåling er gjennomført i 2013 og er under anbefalt verdi.",
              "År 2013 – Verdi: Tidligere eier opplyser i egenmelding at verdien ikke huskes."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Taktekking og undertak har passert mer enn halvparten av forventet brukstid. Dette øker risikoen for lekkasjer og fuktskader, og utskifting må påregnes.",
            "evidence": [
              "Utvendig - Taktekking | Mer enn halvparten av forventet brukstid er passert på taktekkingen. Mer enn halvparten av forventet brukstid er passert på undertak.",
              "Et tak på en eldre bolig kan over tid ha behov for vedlikehold, som rengjøring, fjerning av mose, kontroll av taktekking og eventuell omlegging, for å beskytte mot værskader og bevare boligens konstruksjon.",
              "Saltak i trekonstruksjoner, tekket med takstein. Mer enn halvparten av [forventet brukstid passert]."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R6",
            "description": "Vinduer over 20 år gamle med høyere sannsynlighet for punktering og redusert isoleringsevne. Utskifting av vinduer kan forventes på sikt.",
            "evidence": [
              "Det påpekes at vinduer som er over 20 år gamle og har passert over halvparten av forventet levetid.",
              "TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.",
              "Utskifting av vinduer kan forventes på sikt og vil være nødvendig for å utbedre avvikene.",
              "Eldre vinduer kan gi trekk grunnet utette pakninger, har lav isoleringsevne og kan subbe mot karm ved bruk.",
              "Vinduer med trerammer og isolerglass, merket med produksjonsår 2005, 2013 og 2022."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Rørinstallasjonene er over 20 år gamle og har passert over halvparten av forventet levetid. Det er observert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen, noe som kan utvikle seg til korrosjon og svekke konstruksjonen.",
            "evidence": [
              "Vannrørene er over 20 år gamle og har passert over halvparten av forventet levetid.",
              "Det ble registrert irr og begynnende rustdannelse på rørstokken i fordelerskapet på badet i underetasjen.",
              "Dersom tiltak ikke gjennomføres, kan irrdannelse utvikle seg til korrosjon, som over tid kan svekke konstruksjonen.",
              "Rørstokken bør skiftes om omfanget utvikler seg mer.",
              "Vannførende rør er i plast (rør i rør opplegg), fleksirør og kobber."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R8",
            "description": "Varmesentral har passert mer enn halvparten av forventet brukstid. Varmepumpen fungerer i dag, men kan plutselig svikte på grunn av alder.",
            "evidence": [
              "Tekniske installasjoner - Varmesentral | Mer enn halvparten av forventet brukstid på varmesentral er oppbrukt.",
              "Varmepumpen fungerer i dag, men ut ifra alder kan plutselig oppstå på eldre anlegg.",
              "Det er ikke behov for utbedringstiltak siden [varmepumpen fungerer i dag]."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Naturlig ventilasjon fra byggetiden – enklere løsning enn dagens standard. Boligen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.",
            "evidence": [
              "Boligen er bygget med naturlig ventilasjon, som var vanlig på byggetiden. Ventilasjonsløsningen er enklere enn det som benyttes i dag.",
              "Bygningen oppfyller ikke nødvendigvis alle krav i dagens byggeforskrifter, blant annet når det gjelder tetthet, ventilasjon og varmeisolering.",
              "Tilluft slippes inn via noen veggventiler og spalter i enkelte vinduer. Avtrekk skjer via kjøkken og badene."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 følger boligen og må overtas av kjøper. Dersom kjøper ikke ønsker denne avtalen, er de likevel forpliktet til å overta den.",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på inntil strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Norgespris bortfaller eventuell strømstøtte.",
              "Du kan lese mer om Norgespris blant annet her: https://www.regjeringen.no/no/tema/energi/strom/sporsmal-og-svar-om-norgespris"
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Risiko for overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen (summen av tinglyste heftelser overstiger forventet salgssum), er handel betinget av at kreditorer gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
              "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Legalpant: Kommunen og sameiet har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som ikke fremgår av grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette er en skjult heftelse kjøper overtar.",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Rotte påvist i utebod. Tidligere eier opplyste om mus i 2010. Risiko for skadedyr på eiendommen.",
            "evidence": [
              "Fanget en rotte i uteboden. Der har ikke vært mus/rotter inne.",
              "Det var mus i 2010. Anticimex har vært i huset og utbedret i samarbeid med forsikringsselskap.",
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja. Fanget en rotte i uteboden."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Avvik på elektrisk anlegg påvist ved el-tilsyn i desember 2023. Sluk i kjeller måtte jordes etter påvist avvik i forbindelse med el-sjekk. Risiko for at det elektriske anlegget ikke er fullt ut i forskriftsmessig stand.",
            "evidence": [
              "El-tilsynet hadde kontroll av det elektriske anlegget desember 2023. Funnet enkelte avvik der alle.",
              "Sluk i kjeller måtte jordes etter påvist avvik i forbinnelse med el-sjekk.",
              "Er det elektriske anlegget utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Ja.",
              "Foreligger det samsvarserklæring (i henhold til forskrift om elektriske anlegg)? Ja."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Terreng og tomteforhold ikke nærmere vurdert da tomten var snødekt ved befaring. Skjulte feil og mangler ved terreng og grunnforhold kan ikke utelukkes.",
            "evidence": [
              "Tomteforhold - Terrengforhold | Tomten er snødekt og derfor ikke nærmere vurdert. Det bør foretas nærmere undersøkelser.",
              "Flater som er skjult av snø eller på annen måte ikke er tilgjengelig, blir ikke kontrollert."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R16",
            "description": "Ingen kapillærbrytende sjikt (plast mot byggegrunn) – typisk for byggeåret. Dette kan medføre at fukt fra grunnen trekkes opp i konstruksjonene, med risiko for fuktskader og kondens inne i veggkonstruksjonen.",
            "evidence": [
              "Typisk for byggeåret er at det ikke ble benyttet kapillærbrytende sjikt, dvs plast mot byggegrunn. Dette kan medføre at evt fukt fra grunn kan bli trukket opp i konstruksjonene.",
              "Videre kan konstruksjonen være uheldig med hensyn til evt. kondensering inne i veggkonstruksjonen.",
              "Hulltaking ble utført på soverommet, mot vegg vendt mot terreng – område som vurdert til typisk mest utsatt for fukt."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R17",
            "description": "Eierseksjonsloven § 23 begrenser eierskap til maks to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes med. Kjøper må påse at dette ikke overskrides.",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R18",
            "description": "Sluk, membran og tettesjikt på bad i underetasje er ikke undersøkt/utilgjengelig (TGIU). Skjulte feil og mangler kan ikke utelukkes, og ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.",
            "evidence": [
              "TGIU - Ikke undersøkt/utilgjengelig: Underetasje Bad - Sluk, membran og tettesjikt.",
              "Ved endret bruk eller økt fuktbelastning kan eksisterende løsninger svikte.",
              "Fremtidig bruksmønster kan påvirke når modernisering bør gjennomføres.",
              "Det er i praksis lite gjennomførbart å bare bytte tettesjikt. For å oppnå vanntette løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet moderniseres."
            ],
            "source_documents": [
              "d071_d071"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "ferdigattest kjeller underetasje byggetillatelse",
          "dreneringsforhold fukt kjeller underetasje",
          "brannceller branncelleinndelingen bolig",
          "sølvkre kjeller skadedyr",
          "søyler bærepunkter inngangsparti betong klaring",
          "planavvik parketten gulv underetasje",
          "sameiet vedtekter husordensregler fordeling vedlikeholdsansvar",
          "energiattest karakter bolig",
          "terrasse byggemelding tillatelse 2021"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Kjeller uten byggemelding (0.98 → 0.99):** Svært godt dokumentert. Flere uavhengige kilder bekrefter: egenerklæring fra nåværende selger, egenerklæring fra tidligere selger (2020), tilstandsrapport og salgsoppgavetekst. Confidence justeres marginalt opp til 0.99 da evidensen er eksplisitt og konsistent.\n\n**R2 – Småhusplanen/midlertidig forbud (0.97):** Godt dokumentert med plansak-nummer og arealomfang. Confidence beholdes på 0.97.\n\n**R3 – Skjeggkre (0.96):** Godt dokumentert. Tilleggsbevis fra egenerklæring 2020 (tidligere eier) om sølvkre i kjeller styrker bildet ytterligere. Confidence beholdes på 0.96.\n\n**R4 – Radon (0.95):** Godt dokumentert. Egenerklæring bekrefter at nåværende selger ikke har utført måling, og at tidligere eiers måling fra 2013 ikke huskes. Confidence beholdes på 0.95.\n\n**R5 – Taktekking (0.93):** Godt dokumentert i tilstandsrapport. Confidence beholdes på 0.93.\n\n**R6 – Vinduer (0.92 → 0.88):** Dokumentert, men det fremgår at noen vinduer er fra 2005, 2013 og 2022 – altså er ikke alle vinduer over 20 år. Risikoen er reell for de eldste vinduene, men noe nyansering er nødvendig. Confidence justeres ned til 0.88.\n\n**R7 – Rørinstallasjoner/irr (0.91):** Godt dokumentert. Confidence beholdes på 0.91.\n\n**R8 – Varmesentral (0.88):** Dokumentert. Confidence beholdes på 0.88.\n\n**R9 – Ventilasjon (0.87):** Godt dokumentert. Confidence beholdes på 0.87.\n\n**R10 – Norgespris strømavtale (0.90):** Godt dokumentert. Confidence beholdes på 0.90.\n\n**R11 – Overbeheftelse (0.85):** Dokumentert som standardklausul i salgsoppgaven. Confidence beholdes på 0.85.\n\n**R12 – Legalpant (0.88):** Godt dokumentert. Confidence beholdes på 0.88.\n\n**R13 – Rotte/skadedyr (0.85):** Dokumentert. Merk at rotten ble fanget i utebod, ikke inne i boligen, og at Anticimex utbedret museproblem i 2010. Risikoen er reell men begrenset. Confidence beholdes på 0.85.\n\n**R14 – El-avvik (0.87 → 0.82):** Dokumentert, men det fremgår at avvikene ble utbedret (sluk ble jordet) og at samsvarserklæring foreligger. Risikoen er dermed noe redusert. Confidence justeres ned til 0.82.\n\n**R15 – Snødekt terreng (0.82):** Dokumentert. Confidence beholdes på 0.82.\n\n**R16 – Kapillærbrytende sjikt (0.88):** Godt dokumentert. Hulltaking bekrefter fokus på fukteksponert vegg. Confidence beholdes på 0.88.\n\n**R17 – Eierseksjonsloven § 23 (0.80):** Dokumentert som standardopplysning. Confidence beholdes på 0.80.\n\n**R18 – TGIU bad underetasje (0.85):** Godt dokumentert. Confidence beholdes på 0.85.\n\n**Manglende risikoer identifisert:**\n1. **Søyler/bærepunkter inngangsparti montert direkte mot betong uten klaring** – nevnt i tilstandsrapporten, kan medføre fuktskader/råte over tid.\n2. **Planavvik i parketten i underetasjen** – observert knitring og planavvik, kan indikere setninger eller fuktproblemer.\n3. **Branncelleinndeling ikke vurdert** – tilstandsrapporten anbefaler vurdering ved ombygging/bruksendring.\n4. **Sølvkre i kjeller** – nevnt i egenerklæring fra 2020, ikke eksplisitt adressert som separat risiko.\n5. **Terrasse og kald bod bygget i 2021** – det er uklart om dette er byggemeldt/godkjent.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
      },
      "name": "validate_risks",
      "type": "tool_use"
    }
  ],
  "model": "claude-sonnet-4-6",
  "role": "assistant",
  "stop_reason": "tool_use",
  "stop_sequence": null,
  "type": "message",
  "usage": {
    "cache_creation": {
      "ephemeral_1h_input_tokens": 0,
      "ephemeral_5m_input_tokens": 0
    },
    "cache_creation_input_tokens": 0,
    "cache_read_input_tokens": 0,
    "inference_geo": "global",
    "input_tokens": 23603,
    "output_tokens": 6721,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
