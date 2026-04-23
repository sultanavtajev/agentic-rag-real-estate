# Trace: agentic_reflecting_iter1
- **Run ID:** c4303932-f32c-43f8-b8b9-8969c2c2a355
- **Tidspunkt:** 2026-03-24T21:39:00.891053+00:00
- **Varighet:** 130.25s
- **Input tokens:** 22484
- **Output tokens:** 6337

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
Risiko 1: Planlagt låneopptak i sameiet på ca. 1 000 000 kr for fasaderehabilitering, som vil medføre økte felleskostnader på anslagsvis 900 kr per måned per seksjon i 20 år. Vedtak er ikke fattet ennå, men risikoen er reell og nært forestående.
  Confidence: 0.97
  Evidens: te tas opp et lån på ca. 1 000 000,‑ som skal fordeles på sameiets 8 seksjoner.; Det er uklart akkurat hvor mye dette vil påvirke hver enkelt seksjon.; Dersom et sameie med 8 seksjoner tar opp et lån på 1 million kroner, vil felleskostnaden per seksjon kanskje øke med rundt 900kr per måned, gitt en rente på ca. 7% og 20 års nedbetalingstid.; Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Fikse fasadeskader på begge sider av bygget. Ikke vedtatt.

Risiko 2: Fasadeskader på bygget mot gaten og mot bakgård. Murstein raste ut i januar 2024 og ble kun midlertidig utbedret. Sameiet planlegger rehabilitering, men dette er ikke vedtatt. Kjøper overtar risikoen for fremtidige kostnader knyttet til dette.
  Confidence: 0.98
  Evidens: Det er fasadeskader på bygget, mot gaten og mot bakgård. Sameie har tenkt å hyre inn folk til å fikse dette, dog ikke vedtatt ennå.; kommende oppussing av fasaden etter at murstein raste ut i januar 2024 (dette ble fikset midlertidig).; Fikse fasadeskader på begge sider av bygget. Ikke vedtatt.

Risiko 3: Badet har alvorlige tilstandsavvik (TG2/TG3-nivå): tettesjikt/membran har ukjent alder og nærmer seg eller har passert moderniseringsbehov, hull i veggfliser, riss/sprekker i gulvfliser som kan skyldes utettheter i tettesjikt, sokkelflis mangler/har falt av. Hele badet må trolig totalrenoveres for å oppnå vanntette løsninger.
  Confidence: 0.97
  Evidens: Tettesjiktet har dermed (eller nærmer seg) moderniseringsbehov. Det er i praksis lite gjennomførbart å bare bytte tettesjikt. For å oppnå vanntette løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet moderniseres.; Stedvis hull i veggfliser og flisfuger etter tidligere innfestinger.; Overflater gulv: Det er stedvis riss/sprekker i gulvfliser. Kan skyldes utettheter i tettesjikt.; Sokkelflis mangler/har falt av.; Med bakgrunn i membranens alder gis TG2, restlevetiden er ukjent.

Risiko 4: Vannrør av kobber har overskredet anbefalt brukstid. Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken. Skader kan plutselig oppstå uten forvarsel.
  Confidence: 0.96
  Evidens: Vannrør av typen kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er overskredet.; Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå.; Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken.; Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.

Risiko 5: Sprekker/riss påvist på skorstein inne i boligen. Dette kan innebære brann- og røyklekkasjerisiko og krever tiltak.
  Confidence: 0.93
  Evidens: Skorsteiner inne i boligen: Riss/sprekker påvist på skorstein.; Tiltak må påregnes.

Risiko 6: Vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid. Det er økt sannsynlighet for punktering og redusert isoleringsevne. Vindusbytte må påregnes på sikt.
  Confidence: 0.92
  Evidens: Det påpekes at vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid.; TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.; Det utelukkes ikke at det kan forekomme punkterte glass som ikke ble registrert på befaringstidspunktet.

Risiko 7: Eiendommen er registrert på Byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og Byantikvaren skal gi rådgivende uttalelse i alle byggesaker.
  Confidence: 0.95
  Evidens: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.; Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.; Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen.

Risiko 8: Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre bygårder. Kjøper bør vurdere å gjennomføre måling etter overtakelse.
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling.; Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei.

Risiko 9: Selger har ikke energimerket boligen. Kjøper har ikke informasjon om boligens energikarakter og energifarge, noe som gjør det vanskelig å vurdere fremtidige energikostnader.
  Confidence: 0.85
  Evidens: Selger har ikke fått energimerket boligen i forbindelse med salget.; Energikarakter: Ikke angitt.; Energifarge: Ikke angitt.

Risiko 10: Rominndelingen er endret av selger (to lettvegger satt opp i 2022, vegg slått ned mellom kjøkken og stue i 2023) uten at det fremgår om dette er godkjent av bygningsmyndighetene. Rombetegnelse tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for varig opphold.
  Confidence: 0.88
  Evidens: 2022 - Satt opp to lettvegger for å gjøre gammel stue til to rom. Arbeid utført av Selger.; 2023 - Slått ned vegg mellom kjøkken og stue for å lage kjøkken-stue løsning. Arbeid utført av leietaker og Selger.; Rombetegnelse er skjønnsmessig vurdert på stedet og tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for rom til varig opphold.; Dette betyr at rommet både kan være i strid med forskrift (TEK) og mangle godkjennelse i kommunen for den aktuelle bruken.

Risiko 11: El-anlegget hadde jordingsfeil i 2023 som ble utbedret, men det er ikke dokumentert kontroll av el-anlegget i forbindelse med salget. Tilstandsrapporten er kun en visuell befaring uten åpning av konstruksjoner.
  Confidence: 0.78
  Evidens: 2023 - El-tilsyn av Elvia grunnet jordingsfeil. Deretter utbedring av dette samt hele utbedring av hele el-anlegg samt samsvarserklæring. Arbeid utført av Ostabell elektriske.; Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner?; Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner.

Risiko 12: Merkbare skjevheter i leiligheten er påvist. Årsaken til skjevhetene er ikke vurdert, og det kan ikke utelukkes at dette skyldes setninger i bygget (bygget fra 1892).
  Confidence: 0.87
  Evidens: Skjevhetsmåling: Det er noe merkbare skjevheter i leiligheten.; Setninger kan ha oppstått og dette kan ha medført skjevheter i gulv.; Årsaken til skjevhetene er ikke vurdert.; Det er ikke foretatt noen geotekniske undersøkelser og det er dermed begrensede muligheter for nøyaktig kunnskap om byggegrunn og stabilitet.

Risiko 13: Dører er vurdert til å ha oversteget halvparten av forventet levetid og må beregnes byttet på sikt. Dette medfører fremtidige kostnader for kjøper.
  Confidence: 0.82
  Evidens: TG2 på slike bygningsdeler må sees på som en varsel på at dører må beregnes byttet på sikt.

Risiko 14: Sameiet budsjetterer med underskudd på kr 5 648 i 2025, og felleskostnadene er økt fra 250 692 kr (2023) til budsjettert 296 452 kr (2025). Det er påregnelig med ytterligere økning i felleskostnader.
  Confidence: 0.88
  Evidens: I 2025 er det budsjettert med et underskudd på kr 5 648,‑.; Inntekter felleskostnader: Regnskap 2023: 250 692, Budsjett 2025: 296 452.; På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven. Det er vanlig at felleskostnader justeres årlig, minimum i tråd med KPI.

Risiko 15: Taket er ikke besiktiget av takstmann. Tilstanden på taket er ukjent, og eventuelle skader eller behov for utbedring kan ikke utelukkes.
  Confidence: 0.85
  Evidens: Yttertak av saltaksform i trekonstruksjoner utvendig tekket med takplater (taket er ikke besiktiget).

Risiko 16: Bygget er fra 1892 og er en eldre bygård. Dagens krav til isolering og tetthet er strengere enn da bygget ble oppført. Det må påregnes løpende vedlikehold og fremtidige utbedringskostnader.
  Confidence: 0.9
  Evidens: Dato fra da bygningen ble tatt i bruk, er datert til 01/01-1892, i følge Norges Eiendommer.; Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.; En bolig som har blitt brukt i en viss tid, har vanligvis blitt utsatt for slitasje, og skader kan ha oppstått.

Risiko 17: Legalpant: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Dette er pant som ikke vises i grunnboken og som har høyere prioritet enn banklån.
  Confidence: 0.92
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboken.; Legalpant til kommunen har høyere prioritet enn foran tinglyste lån, for eksempel banklån på seksjonen.

Risiko 18: Vedlikehold i sameiet: I 2024 ble det ikke brukt penger på reparasjon og vedlikehold av bygninger (kr 0), mot kr 52 211 i 2023 og budsjettert kr 66 000. Dette kan indikere utsatt vedlikehold som kan gi økte kostnader fremover.
  Confidence: 0.82
  Evidens: 6600 Reparasjon og vedlikehold bygninger: Regnskap 2024: 0, Regnskap 2023: 52 211, Budsjett 2024: 66 000, Budsjett 2025: 70 000.

Dokumentkontekst:
[d089_d089 | Side [1]]
ne i boligen: Riss/ sprekker påvist på
den aktuelle bruken, uten at dette vil få betydning for Servantskap med glatte, folierte fronter og heldekkende egenerklæringsskjema følger vedlagt salgsoppgaven. skorstein.
takstmannens valg av romdefinisjon. servant. Interessenter oppfordres til å gjennomgå dette nøye. Tiltak må påregnes.
Det kan være avvik i dagens rombruk/ rombenevnelse i Speil på vegg over servant.
forhold til boligens opprinnelige byggemeldte/ godkjente Opplegg for vaskemaskin og tørketrommel.

---

[d089_d089 | Side [1]]
lder uavhengig av om
Radonmåling
dokumentene er lest.
Legalpant: Kommunen har legalpant som sikkerhet for Selger har ikke utført radonmåling. Det er ikke krav om Boligkjøperforsikring: Kjøper har anledning til å tegne
betaling av kommunale avgifter og eventuell dette med mindre boligen er helt eller delvis utleid. boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
eiendomsskatt. De øvrige seksjonseierne i sameiet har informasjon om

---

[d089_d089 | Side [1]]
nistrasjon av eiendommen, Regulerings og arealplaner: Eiendommen er regulert til Overført fra: Knr:0301 Gnr:230 Bnr:41
42 43

## Side 23

OM EIENDOMMEN OM EIENDOMMEN
Gjelder denne registerenheten med flere foran tinglyste lån, for eksempel banklån på seksjonen. boligseksjoner i sameiet, i henhold til eierseksjonsloven § neste fem årene. Les mer om Boligkjøperforsikring i
Legalpant til kommunen har høyere prioritet enn 23. Seksjoner som eies av nærstående eller gjennom et vedlagte materiell eller på https:/

---

[d089_d089 | Side [1]]
bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold

---

[d089_d089 | Side [1]]
k på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner

---

[d089_d089 | Side [1]]
ermåler. Alt utstyr og installasjoner som medfølger overtas slik de
Loft: Dersom areal er av stor betydning for kjøper anbefales er, uten garanti, med mindre det foreligger en gjeldende Kjenner du til om det er/ har vært utettheter i terrasse/
Loftbåden har skråtak og lav takhøyde. Kun deler av en laserscanning av hver etasje før kjøp. garanti fra produsent eller leverandør. garasje/ tak/ fasade?
arealet er måleverdig. Det er fasadeskader på bygget, mot gaten og mot
Måleverdig areal ble målt til ca 2,2 m².

---

[d089_d089 | Side [1]]
domsskatt. De øvrige seksjonseierne i sameiet har informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
legalpant på inntil 2G som sikkerhet for krav knyttet til Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
Diverse
sameieforholdet, som felleskostnader. Legalpant er pant som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
som ikke vises i

---

[d089_d089 | Side [1]]
hetens/seksjonens/andelens vegger.
Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
som for eksempel tak, y琀琀ervegger, grunnmur, drenering, og
felles tekniske installasjoner med mindre det foreligger et
særlig vedlikeholdsansvar kny琀琀et 琀椀l bygningsdelene.
På forespørsel har eier opplyst at de ikke er kjent med at
boligen har skjulte feil eller mangler, o昀昀entlige pålegg som ikke
er u琀昀ørt eller vedtak som medfører eller har medført ny琀琀
Oppdragsnr.: 22030-25154 Befaringsdato: 05.07.2025

---

[d089_d089 | Side [1]]
dsansvaret for disse påhviler sameiet. følge med eiendommen, jf. avhendingsloven § 3‑4.
15.01.1988 ‑ Dokumentnr: 3453 ‑ Best. om adkomstrett Adkomst til eiendommen skjer via offentlig vei. Kjøper og selger er forpliktet til å signere den standard Fastmonterte eller spesialtilpassede installasjoner og
Rettighet hefter i: Knr:0301 Gnr:230 Bnr:376 kjøpekontrakten utarbeidet av Emera som en del av innredning som anses som varig tilknyttet boligen, følger
Bestemmelse om anlegg og vedlikehold av ledninger

---

[d089_d089 | Side [1]]
ning - 2024
Gjeld: 0 Andre inntekter: 4 952
Annen formue: 72 996 Utgifter: 0
7: Pålydende
Pålydende: Opprinnelig innskudd:
Seksjonsnr: 6 Partialobligasjonsnr:
8: Bygning/eiendom
Byggeår: 1990
Gårds/bruksnr:230/41 - seksjon:6
Bygningstype: Bygård
Feste/eiet tomt: Eiet
9: Forsikring
Forsikret i: Gjensidige Forsikring ASA Polisenr: 88037439
10: Fasiliteter og andre enhetsopplysninger
Ferdigstillt: 01.01.1980 Første innflytting: 01.01.1980 SSBnr: H0302
Etasje: 3 Oppvarmingstype: Uspesifisert
Heis:

---

[d089_d089 | Side [1]]
ebrøk. Ved manglende betaling av fellesutgifter har Regelverk og generelle opplysninger
Sameiebrøk: 61/ 518 avløpssystem. Stikkledningene fra eiendommen og ut til sameiet legal panterett i den enkelte eierseksjon, Boligen selges med det inventar og utstyr som i henhold
det kommunale nettet er private, og begrenset til inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal
vedlikeholdsansvaret for disse påhviler sameiet. følge med eiendommen, jf.

---

[d089_d089 | Side [1]]
1 Gnr:230 Bnr:41 korttidsutleie menes utleie i en sammenhengende avhendingsloven begrenset oppad kr. 14 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
periode på opptil 30 døgn. Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
Radonmåling
dokumentene er lest.
Legalpant:

---

[d089_d089 | Side [1]]
gang skal renoveres, kan man vurdere slike
Energimerke Tinglyste heftelser
tiltak. Anskaffelse, plassering, kontroll og vedlikehold av
Kostnadsestimat: 100 000 ‑ 300 000 røykvarsler og slokkeutstyr er eierens ansvar. Energikarakter: Ikke angitt Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger
Bygningsdeler som ikke har blitt undersøkt (TGIU): Rehabilitering og større vedlikehold Energifarge: Ikke angitt eiendommens matrikkel ved overskjøting til

---

[d089_d089 | Side [1]]
relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Fikse fasadeskader på begge sider av bygget. Ikke vedtatt.
27 Kjenner du til om det er/har vært

---

[d089_d089 | Side [1]]
ygget, mot gaten og mot
Måleverdig areal ble målt til ca 2,2 m². Kjøper aksepterer at det kan forekomme hull og merker bakgård. Sameie har tenkt å hyre inn folk til å fikse dette,
Standard
Boden er merket med nr H0302. etter montering av inventar og utstyr som ikke er en del dog ikke vedtatt ennå. I forifjor vår, var det en
Leiligheten er basert på naturlig ventilasjon som var av overdragelsen. fasadeskade under ytre vinduskarm på leiligheten over
Innvendig målte arealer. vanlig på oppføringstidspunktet.

---

[d089_d089 | Side [1]]
om for eksempel tak, y琀琀ervegger, grunnmur, drenering, og felles tekniske
installasjoner.
Isolerglass er hele og det ble ikke observert punkteringer. Balkonger/terrasser og vindu vurderes dersom takstmannen 昀椀nner det relevant for leiligheten.
Det er registrert enkelte bruksmerker/riper. Generelt har alle bygninger (eldre og nyere) et frem琀椀dig, løpende behov for vedlikehold.
Av昀氀assing av maling på balkongdør. Setninger kan ha oppstå琀琀 og de琀琀e kan ha medført skjevheter i gulv og er derfor ikke

---

[d089_d089 | Side [1]]
 kartverk. Opplysninger om adresse, bnr., Gjennomgå琀琀 Nei avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
gnr., hjemmelshaver, byggeår, tomteareal, framhever normalt ikke posi琀椀ve sider ved boligen ut over det som eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom
salgspriser mm. fremgår av 琀椀lstandsgradene. og rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
• Tilstanden angis

---

[d089_d089 | Side [1]]
oligen, følger
Bestemmelse om anlegg og vedlikehold av ledninger eiendomshandleren. Kjøpekontrakten kan gjennomgås normalt med i handelen, med mindre det foreligger en
Utleie
m.v. hos eiendomsmegler før budet legges inn. Kontakt særskilt avtale mellom partene om noe annet, jf.
Datoen er rettet etter tinglysingslovens § 18. 26.10.2012. Adgang til utleie: Eiendommen er utleid for totalt kr. 26 eiendomsmegler for eventuelle spørsmål. avhendingsloven § 3‑5.
K.B.E. 400,‑ per måned fordelt over tre

---

[d089_d089 | Side [1]]
e som kan Dette fordi slikt kan være avhengig av vær, klima o.l. ved
Kjenner du til vedtak/ forslag til vedtak om forhold vedr. innebære behov for utbedringer. Bygningsdeler som er befaring. Overflater
eiendommen som kan medføre økte felleskostnader/ økt merket med TGIU er ikke blitt vurdert av takstmannen. TG2 på slike bygningsdelers må sees på som en varsel Gulv:
fellesgjeld? på at vinduer må beregnes byttet på sikt. Flislagt gulv på bad og entré.
‑ Fikse fasadeskader på begge sider av bygget. Ikke

---

[d089_d089 | Side [1]]
øsningen er fullgod og sikker mot lekkasjer.
Takstingeniøren har ikke gjort nærmere undersøkelser Innbo og løsøre: Salgsoppgaven inkluderer NEFs Det er ikke observert synlige skader. Med bakgrunn i
arealoppmåling
om leiligheten har bruksrett til disse arealene. standardliste "Oversikt over løsøre og tilbehør", som membranens alder gis TG2, restlevetiden er ukjent. ‑ Fukt
Eier har påvist en stk bod i kjeller, og en på loft som Vær oppmerksom på at det kan forekomme mindre legges til grunn med mindre annet

---

[d089_d089 | Side [1]]
 hva kjøper må forvente og vil ikke utgjøre en mangel.
Bygningen har støpt gulv mot grunn. Det samme gjelder spiker- og skruehull i vegger som følge av oppheng av bilder, tv o.l.
Y琀琀ertak av saltaksform i trekonstruksjoner utvendig tekket med takplater (taket er ikke besik琀椀get). Konsekvens/琀椀ltak
• Tiltak:
Grunnforhold og drenering:
Det er ikke foreta琀琀 noen geotekniske undersøkelser og det er dermed begrensede muligheter for nøyak琀椀g kunnskap om byggegrunn og stabilitet. Leiligheten fungerer med avvikene

---

[d089_d089 | Side [1]]
ilstandsrapport av en bygningssakkyndig, som gir en som ikke ble registrert på befaringstidspunktet. Det kan også være forhold som ikke ble oppdaget ved
Det er stedvis sprekker mellom gulvbord. Andre rom: ‑ teknisk gjennomgang av boligen og påpeker eventuelle befaring, som eksempel sopp, råte o.l.
Overflater gulv: Gulvflater bærer preg av alder/ slitasje. avvik. Rapporten, sammen med selgers egenerklæring, Det påpekes at vinduer er over 20 år gamle og har Dette fordi slikt kan være avhengig av vær, klima

---

[d089_d089 | Side [1]]
vn og definisjon i arealoppstillingen. Tremmefliser i treverk på betongdekke. Type takst avholdt av takstmann: Tilstandsrapport fyringsforbud eller lignende?
Dette betyr at rommet både kan være i strid med Teknisk Rekkverk i stål/ aluminium. Fra tilstandsrapport ved kjøp: Ildsteder / skorstein: ‑
forskrift (TEK) og mangle godkjennelse i kommunen for Flislagt baderom med ukjent årstall. Sammendrag selgers egenerklæring: Selgers Skorsteiner inne i boligen: Riss/ sprekker påvist på
den aktuelle bruken, uten

---

[d089_d089 | Side [1]]
måte
er mer påregnelige i eldre bygninger enn i nye. Årsaken til sikkerhet under forskjellig type vær og lys. oversteget mer enn halvparten av forventet levetid.
skjevhetene er ikke vurdert. Kjøkken: ‑ Overflater gulv: I forbindelse med salget er det blitt utført en Det utelukkes ikke at det kan forekomme punkterte glass Likevel oppfyller bygningsdelene tiltenkt funksjon.
Gulvet bærer preg av slitasje. Det er stedvis knirk i gulvet. tilstandsrapport av en bygningssakkyndig, som gir en som ikke ble

---

[d089_d089 | Side [1]]
kjeller og lo昀琀. En bolig som har bli琀琀 brukt i en viss 琀椀d, har vanligvis bli琀琀 utsa琀琀 for slitasje, og skader kan ha oppstå琀琀.
Grunnmur, bærende konstruksjoner og skillende dekker av mur- og trekonstruksjoner, samt naturstein. Slik bruksslitasje må man påregne, og det kan avdekkes enkelte forhold e琀琀er overtakelse som nødvendiggjør utbedringer.
Fasader u琀昀ørt i malt murpuss. Normal slitasje og skader som nødvendiggjør utbedring, er innenfor hva kjøper må forvente og vil ikke utgjøre en mangel.
Bygningen

---

[d089_d089 | Side [1]]
r gamle og har Dette fordi slikt kan være avhengig av vær, klima o.l. ved
Det er stedvis knirk i gulvet. Det er stedvis løse gulvfliser i er vedlagt salgsoppgaven. Det er viktig at interessenter oversteget halvparten av forventet levetid. befaring.
entré. grundig gjennomgår disse dokumentene før bud legges Likevel oppfyller bygningsdelene tiltenkt funksjon. TG2 på slike bygningsdeler må sees på som en varsel på
inn. TG 2 er gitt som en påpekelse da vinduer har høy alder at dører må beregnes byttet på

---

[d089_d089 | Side [1]]
 eller andre
forhold i bygningsetaten, for øvrig ingen spesielle forhold
takstmannen ble gjort kjent med på befaringsdagen.
Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes
også utover det som er omtalt i rapporten.
Det gjøres oppmerksom på at de琀琀e er en 琀椀lstandsrapport på
nivå 1, dvs kun en visuell befaring , uten åpning av
konstruksjoner.
Merk at dagens krav 琀椀l isolering og te琀琀het mv er strengere enn Ingen umiddelbare kostnader
da bygget ble oppført. Tilstandsanalysen er basert på en

---

[d089_d089 | Side [1]]
entré, kjøkkengulvet har høy slitasje, manglende list(er) osv.
I 琀椀llegg er det ikke uvanlig med noe oppsprekking i hjørner og plateskjøter, som følge av forandringer i trevirke ut fra års琀椀d, vær o.l.
Andre utvendige forhold
Normal slitasje er forventet e琀琀er en viss 琀椀dsperiode, og det er opp 琀椀l kjøperen selv om det ønskes å pusse opp, oppgradere eller modernisere over昀氀atene.
Beskrivelse av bygningen:
Bygård over 昀椀re etasjer samt kjeller og lo昀琀. En bolig som har bli琀琀 brukt i en viss 琀椀d, har

---

[d089_d089 | Side [1]]
råte, lukt eller Fra tilstandsrapporten ved kjøp: Etasjeskiller: ‑
Rombetegnelse er skjønnsmessig vurdert på stedet og Veggmontert toalett. soppskader? Skjevhetsmåling: Det er noe merkbare skjevheter i
tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift Kjøkkeninnredning fra IKEA, i følge tidligere Tilstandsrapport fra når jeg kjøpte leiligheten: Bad: ‑ leiligheten.
for rom til varig opphold mht. rommets størrelse, salgsdokumentasjon. Vannrør: Vannrør av typen kobber er vurdert til å ha en

---

[d089_d089 | Side [1]]
og byggemeldte tegninger, eller når tegninger ikke
bygningsdelen være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger stemmer med dagens bruk.
Tegninger Tilsendt fra Oslo Kommune Gjennomgå琀琀 Nei dokumentasjon på faglig god u琀昀ørelse.
• Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold
Megler Megleropplysninger Gjennomgå琀琀 Nei ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke og elektriske installasjoner i boligen dersom det er mer enn fem år
nødvendig. TG1 kan

---

[d089_d089 | Side [1]]
ene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Tilstandsrapport fra når jeg kjøpte leiligheten: Bad: - Vannrør: Vannrør av typen kobber er vurdert til å ha en alder
som tilsier at anbefalt brukstid er overskredet. - Overflater vegg: Stedvis hull i veggfliser og flisfuger etter tidligere
innfestinger. - Overflater himling: Himling bærer noe preg av alder og slitasje. - Overflater gulv: Det er stedvis
riss/sprekker i gulvfliser. Kan skyldes utettheter i tettesjikt. - Membran, tettsjikt

---

[d089_d089 | Side [1]]
 byggemeldte/ godkjente Opplegg for vaskemaskin og tørketrommel. Følgende opplysninger er spesielt viktig å merke seg: Kjenner du til om det er/ har vært f.eks. sprekker i mur,
tegninger. Dusjkabinett, sluk i sone, håndholdt dusjhode og Kjenner du til om det er/ har vært feil tilknyttet skjeve gulv eller lignende?
Dette er i henhold til gjeldende måleregler (NS3940). termostatstyrt blandebatteri. våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller Fra tilstandsrapporten ved kjøp: Etasjeskiller:

---

[d089_d089 | Side [1]]
åpekelse da vinduer har høy alder at dører må beregnes byttet på sikt.
Kjenner du til om det er utført kontroll av el‑anlegget og/ med høyere sannsynlighet for punktering samt noe Konsekvens/ tiltak
eller andre installasjoner (f.eks. oljetank, sentralfyr, All informasjon i tilstandsrapporten anses som kjent for redusert isoleringsevne sammenlignet med dagens/ nye • Tiltak:
ventilasjon)? kjøper, og det vil ikke være mulig å reklamere på forhold vinduer. Bygningsdelene oppfyller tiltenkt funksjon men
‑

---

[d089_d089 | Side [1]]
er og i henhold til Regnskap/ budsjett/ kostnadsøkninger: I 2025 er det webappviewer/ index.html? 10.01.1961 ‑ Dokumentnr: 500465 ‑ Erklæring/ avtale
oppdelingsbegjæring tinglyst den 14.august 1997. budsjettert med et underskudd på kr 5 648,‑. id=545b8e996b6e4e1fbcb65f69299a7167 Vedtak av Oslo kommunes vann‑ og kloakkreglement
Sameiet har til formål å ivareta seksjonseiernes Kan ikke slettes uten samtykke fra kommunen
fellesinteresser og administrasjon av eiendommen, Regulerings og arealplaner: Eiendommen

---

[d089_d089 | Side [1]]
nskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025
Sum gjeld 4 780 11 835 3600 Inntekter felleskostnader 275 760 250 692 275 770 296 452
Sum 275 760 250 692 275 770 296 452
SUM EGENKAPITAL OG GJELD 208 637 114 296
Boligselskapet eier aksjer i forretningsføreren, OBF AS og mottar utbytte fra driften.
Oslo 31.12.24
Styret i Sameiet Friisgt 3 Note 2 - Styrehonorar og personalkostnader
Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025
Sted:____________________, dato:___________
Styrehonorar 0 0 8 000

---

[d089_d089 | Side [1]]
s på: kommende oppussing av fasaden etter at murstein
raste ut i januar 2024 (dette ble fikset midlertidig).
28.02.2025
Godkjent elektronisk av styret i Sameiet Friisgt 3
Årsmeldingen er godkjent av styret.


106 107

## Side 55

Å rsregnskap 2024 - Resultat Å rsregnskap 2024 - Balanse
Note Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025 Note Regnskap 2024 Regnskap 2023
Inntekter EIENDELER
Felleskostnader og inntekter 1 275 760 250 692 275 770 296 452
Sum 275 760

---

[d089_d089 | Side [1]]
e FRIIS' GATE Type: Eierseksjonssameie
0187 OSLO Eiere: Kristian Kirubairajah 0187 OSLO Eiere: Kristian Kirubairajah
Organisasjonsnr: 883 081 072 Seksjonsnr: 6 Organisasjonsnr: 883 081 072
1: Felleskostnader 10: Fasiliteter og andre enhetsopplysninger
Tot. innev. måned: 2 976 KORTTIDSUTLEIE
Korttidsutleie av hele boligseksjonen i mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie menes utleie i inntil 30 døgn
Felleskostnader: FELLESUTGIFTER 2 976
sammenhengende.
3: Fellesgjeld
Ajourf. Andel f.gj.

---

[d089_d089 | Side [1]]
ostnader.
Felleskostnader
Fellesgjeld
Felleskostnader kr 2 976,‑ pr. mnd
Pt. ingen fellesgjeld for seksjonen.
Felleskostnader inkulderer: Dekker blant annet:
Kommunale avgifter, forretningsfører, generelle
Andre kostnader:
driftskostnader til sameiet, felles byggforsikring mm.
TV/ Internett/ Bredbånd: Kjøper tegner eget abonnement.
31

## Side 17

OM EIENDOMMEN OM EIENDOMMEN
Byporten ligger innen gangavstand. Grønland har også Sameiets tomt.
Areal
sykkelfelt i begge retninger og god tilgjengelighet

---

[d089_d089 | Side [1]]
TGIFTER 2 976
sammenhengende.
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 0 Gjeld siste årsoppg.: 0
Annen informasjon:
Klient ajourf. lån: Klient gj. s. årsoppg.: 0
4: Særskilte opplysninger
Klausuler:
Styreleder: Dag Cappelen Papazian
Adresse: Friis Gate 3 4. Etg.
Postnr/-sted: 0187 OSLO
E-post: N/A
5: Restanse felleskostnader pr. 07.07.2025
Utestående saldo: 0
Felleskostnader: 0 Restanse: 0
Gebyr: 0 Forskudd: 0
Rente: 0 Overdekning: 0
6: Ligning - 2024
Gjeld: 0 Andre inntekter: 4 952
Annen formue: 72 996

---

[d089_d089 | Side [1]]
ksjonseierne i fellesskap på mindre enn fem prosent av de årlige felleskostnadene,
under den enkelte seksjonseierens vedlikeholdsplikt etter § 32. Vedlikeholdsplikten bDeest lkurtetvese sm meidn svta tnol itgre fdlejerdtaellel ra vav d dee a avvggititttee sstteemmmmeern peå p åår såmrsømteøt tfeotr. vedtak om tiltak som
omfatter også reparasjon og utskifting når det er nødvendig, og utbedring av tilfeldige har sammenheng med sameiernes bo- eller bruksinteresser og som går ut over vanlig
skader. forvaltning

---

[d089_d089 | Side [1]]
riker eiendommens verdi og appell.
Friis' gate 3
Tinglyste/andre forhold
Hjemmelshaver
Felleskostnadene inkluderer fellesutgi昀琀er, kapitalkostnader, kommunale avgi昀琀er, felles bygningsforsikring, forretningsførsel, dri昀琀 og
Fischer-Krusanth Kris琀椀an
vedlikehold m.m.
Kommentar
Bolignummer (SSB) : H0302 På generelt grunnlag oppfordres alle 琀椀l å se琀琀e seg inn i vedtekter, husordensregler, regnskap, budsje琀琀 og årsberetning.
Dokumentene vil være 琀椀lgjengelig hos meglerforetaket. Det gjøres oppmerksom på at

---

[d089_d089 | Side [1]]
 minimum i tråd med KPI.
Boligkjøperforsikring kan tegnes til 13 500kr.
Eiendomsskatt
I Oslo kommune er det eiendomsskatt på boliger og fast
eiendom som overstiger en fastsatt verdi. Informasjonen
Eierskiftegebyr
over er hentet fra eiendomsskattelistene.
Kr 6570 http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
Estimert totalpris ink. omk
Kommunale avgifter
Kr 5 997 340
Informasjon: Inkl. i felleskostnader.
Felleskostnader
Fellesgjeld
Felleskostnader kr 2 976,‑

---

[d089_d089 | Side [1]]
l
Økonomi
te tas opp et lån på ca. 1 000 000,‑ som skal fordeles på
sameiets 8 seksjoner.
Prisantydning
Det er uklart akkurat hvor mye dette vil påvirke hver
Kr 5 850 000 enkelt seksjon. Sameiets regnskapsfører har foreløpig
følgende beregning:
"Dersom et sameie med 8 seksjoner tar opp et lån på 1
Omkostninger kjøpers beløp
million kroner, vil felleskostnaden per seksjon kanskje øke
5 850 000,00 (Prisantydning) med rundt 900kr per måned, gitt en rente på ca. 7% og
20 års nedbetalingstid. Dette kommer i

---

[d089_d089 | Side [1]]
er bruksinteresser og som går ut over vanlig
skader. forvaltning og vedlikehold, når tiltaket fører med seg økonomisk ansvar eller utlegg for
sameierne på mer enn fem prosent av de årlige fellesutgifter.
Vedlikeholdsplikten omfatter også felles installasjoner som går gjennom
bruksenheter, slik som rør, ledninger og kanaler. Sameiet har rett til å føre nye slike
installasjoner gjennom bruksenhetene hvis det ikke skaper vesentlig ulempe for den
aktuelle seksjonseieren. Seksjonseieren skal gi sameiet adgang

---

[d089_d089 | Side [1]]
ie
Byantikvaren skal gi en rådgivende uttalelse i Bestemmelse om kloakkledning
Sameiets Friisgt 3 Forkjøpsrett: Praktiseres ikke. byggesaker som berører eiendommen. Overført fra: Knr:0301 Gnr:230 Bnr:41
Gjelder denne registerenheten med flere
Organisasjonsnummer: 883081072 Styregodkjennelse: Praktiseres ikke. For en fullstendig oversikt over eiendommens status, se:
http:/ / riksantikvaren.maps.arcgis.com/ apps/
Sameiet består av 8 boligseksjoner og i henhold til Regnskap/ budsjett/ kostnadsøkninger: I 2025

---

[d089_d089 | Side [1]]
. Det beløp seksjonseierne skal
s eksjonseierne slipper ulemper. Vedlikeholdsplikten omfatter også eventuelle innbetale til fondet innkreves i den månedlige betaling til dekning av fellesutgiftene.
tSiellkesgjgosndseeileerrn teisl bverudlkikseenhohledtsepnli.kt omfatter slikt inventar, utstyr som badekar og vasker,
brannslukningsapparater, skap og dører, gulvbelegg og våtrom, rør og sikringsskap og vinduer § 6. REGISTRERING AV SAMEIERE OG LEIETAKERE
og ytterdører.
Kjøper/erverver av seksjon og leietaker av

---

[d089_d089 | Side [1]]
Friisgt 3 Orgnr: 883081072
110 111

## Side 57

Noter 85 Sameiet Friisgt 3 Noter 85 Sameiet Friisgt 3
Regnskap 2024 Regnskap 2023
Note 4 - Vedlikehold Note 9 - Aksjer og andeler
Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025 Sum 2 600 2 600
6600 Reparasjon og vedlikehold bygninger 0 52 211 66 000 70 000 Aksjer og andeler klassifisert som anleggsmidler er vurdert til opprinnelig kostpris med mindre varig verdinedgang er konstatert.
Sum 0 52 211 66 000 70 000
Note 5 - Andre driftsutgifter
Regnskap

---

[d089_d089 | Side [1]]
em av rapporten.
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) • Utbedringskostnad avhenger blant annet av personlige valg av og
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig markedspris på materialer og tjenesteyter. Tiltak mellom kr 50 000 - 100 000
琀椀lknytning 琀椀l boligen).
I rapporten skal det se琀琀es anslag

---

[d089_d089 | Side [1]]
 nærstående eller gjennom et vedlagte materiell eller på https:/ /
legalpant til sameiet. firma regnes også med. www.soderbergpartners.no/ eiendom/ boligkjoper/
14.08.1997 ‑ Dokumentnr: 49160 ‑ Seksjonering
Opprettet seksjoner: I henhold til eierseksjonsloven § 31 er sameierne
Vei, vann og avløp Lovanvendelse
Snr: 6 ansvarlige overfor sameiets kreditorer i forhold til sin
Formål: Bolig Eiendommen er tilknyttet offentlig vann‑ og sameiebrøk. Ved manglende betaling av fellesutgifter har Regelverk og

---

[d089_d089 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ låneopptak for nøyaktig beregning."
147 340 (Omkostninger totalt)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ På grunn av prisstigning og renteøkning er det
5 997 340 (Totalpris inkl. omkostninger) påregnelig at felleskostnadene økes etter utarbeidelse av
denne salgsoppgaven. Det er vanlig at felleskostnader
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ justeres årlig, minimum i tråd med KPI.
Boligkjøperforsikring kan tegnes til 13

---

[d089_d089 | Side [1]]
 avgifter 82 533 70 679 83 000 91 000
Brensel og strøm 21 549 24 867 30 000 25 000 Restanser felleskostnader 5 588 0
Andre driftsutgifter 5 8 597 15 780 8 200 8 500 Forskuddsbetalte kostnader 10 51 101 47 375
Sum 216 431 263 238 300 678 302 100
Bankinnskudd og kontanter
Innestående på driftskonto 149 348 64 321
Driftsresultat før individuell innbetaling 59 329 -12 546 -24 908 -5 648
Sum omløpsmidler 206 037 111 696
Driftsresultat etter individuell innbetaling 59 329 -12 546 -24 908 -5 648
SUM EIENDELER 208

---

[d089_d089 | Side [1]]
tering og større vedlikehold
Vaktmester- og renholdstjeneste
Her føres opp en kronologisk oversikt over større vedlikehold som har blitt gjennomført de
Sameiet har for tiden ingen avtale om vaktmestertjeneste. Trappevask går på rundgang. siste årene:
2022: Oppussing av oppgang og bytte av ytterdøra.
Brannsikringsutstyr
2020/21: Bytte av callinganlegg
Forskrift om brannforebygging fastsetter minstekravene til utstyr i boliger.
2016: Skifte av låssystem
Anskaffelse, plassering, kontroll og vedlikehold av

---

[d089_d089 | Side [1]]
022 - Sa琀琀 opp to le琀琀vegger for å gjøre gammel stue 琀椀l to rom. Arbeid u琀昀ørt av Selger
2023 - Slå琀琀 ned vegg mellom kjøkken og stue for å lage kjøkken-stue løsning. Arbeid u琀昀ørt av leietaker og Selger
Lo昀琀: 2023 - El-琀椀lsyn av Elvia grunnet jordingsfeil. Dere琀琀er utbedring av de琀琀e samt hele utbedring av hele el-anlegg samt
Lo昀琀båden har skråtak og lav takhøyde. Kun deler av arealet er måleverdig. samsvarserklæring. Arbeid u琀昀ørt av Ostabell elektriske.
Måleverdig areal ble målt 琀椀l ca 2,2 m². 2024 -

---

[d089_d089 | Side [1]]
ad og entré.
‑ Fikse fasadeskader på begge sider av bygget. Ikke Beskrivelsen av boligen nedenfor er hentet direkte fra Konsekvens/ tiltak Ellers heltregulv.
vedtatt. tilstandsrapporten: • Tiltak: Gulvvarme (kabler) på bad.
Bygård over fire etasjer samt kjeller og loft. Bygningsdelene oppfyller tiltenkt funksjon men ____
Moderniseringer og påkostninger: 2022 ‑ Satt opp to Grunnmur, bærende konstruksjoner og skillende dekker utskiftning må påregnes på sikt. Vegger:
lettvegger for å gjøre gammel stue til to

---

[d089_d089 | Side [1]]
etter en samlet plan for den enkelte bygning og For så vidt ikke annet følger av disse vedtekter, eller når vedtektene strider mot
etter forutgående godkjenning av styret. eierseksjonsloven, gjelder reglene i lov om eierseksjoner av 16. juni 2017.
Tilbygg/påbygg og andre arbeider som skal meldes til bygningsmyndighetene, må
godkjennes av styret før byggemelding kan sendes. Hvis det søkes om endringer aav
ikke uvesentlig betydning for de øvrige sameiere, skal styret forelegge spørsmålet for
sameiermøtet til

---

[d089_d089 | Side [1]]
egnes på sikt. Vegger:
lettvegger for å gjøre gammel stue til to rom. Arbeid av mur‑ og trekonstruksjoner, samt naturstein. Delvis flissatte vegger på bad.
utført av Selger Fasader utført i malt murpuss. Ellers glatte, malte veggflater.
2023 ‑ Slått ned vegg mellom kjøkken og stue for å lage Bygningen har støpt gulv mot grunn. Dører Noe panel.
kjøkken‑stue løsning. Arbeid utført av leietaker og Selger Yttertak av saltaksform i trekonstruksjoner utvendig Brann‑klassifisert entrédør (B30). ____
2023 ‑

---

[d089_d089 | Side [1]]
 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak. I
denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2
som krever 琀椀ltak og de som ikke krever umiddelbare 琀椀ltak.
TILLEGGSUNDERSØKELSER
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller
symptomer på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold
Versjon Ny versjon Kommentar
eller 琀椀ltak trengs i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
på

---

[d089_d089 | Side [1]]
024 ‑ Sparklet og malt overflater i 2024. Nye gulv‑ og Vurdering av avvik: Avflassing av maling på balkongdør. og bygningsdeler er ikke nedsatt.
taklister. Arbeid utført av Selger • Det er avvik: Tilstandsgrad er satt ut fra en helhetlig vurdering av Det er blant annet påvist bom og riss i fliser i entré,
2025 ‑ Demontert peisovn i gammel stue, tettet utløp. Vindusglass er hele og det ble ikke observert bygningsdelenes stand, funksjonalitet samt alder. kjøkkengulvet har høy slitasje, manglende list(er)

---

[d089_d089 | Side [1]]
t samt alder. kjøkkengulvet har høy slitasje, manglende list(er) osv.
Lagt nytt utløp og montert ny peis i ny stue. Arbeid utført punkteringer. Punkterte glass kan være vanskelig å avdekke med I tillegg er det ikke uvanlig med noe oppsprekking i
av Gnisten. Ved befaringen ble det ikke foretatt kontroll på åpne‑ og sikkerhet under forskjellig type vær og lys. hjørner og plateskjøter, som følge av forandringer i
2025 ‑ Ny vaskemaskin lukkemekanismer av alle vinduer. Enkelte vinduer subbet Det utelukkes ikke

---

[d089_d089 | Side [1]]
 håndholdt lasermåler i henhold 琀椀l de 琀椀l
enhver 琀椀ds gjeldende måleregler (NS3940) og ifølge gjeldende
måleregler (NS3940) er følgende medregnet: "Fri琀琀liggende rør,
montasjekanaler, peiser og piper".
I sammenfa琀琀et beskrivelse og under de ulike bygningsdeler er
det gjort rede for de oppgraderinger som er foreta琀琀 og
eventuelle svakheter som er registrert.
Det er ingen forutsetning at rom som er medta琀琀 i BRA-i
oppfyller krav i byggeforskri昀琀er 琀椀l varig opphold. I hovedsak er
Anslag på

---

[d089_d089 | Side [1]]
ntes.
• Det er avvik:
Te琀琀esjiktet har dermed (eller nærmer seg) moderniseringsbehov.
* Stedvis hull i vegg昀氀iser og 昀氀isfuger e琀琀er 琀椀dligere innfes琀椀nger. Det er i praksis lite gjennomførbart å bare by琀琀e te琀琀esjikt.
* Himling bærer noe preg av alder og slitasje. For å oppnå vannte琀琀e løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet
* Sokkel昀氀iser mangler/har falt av. moderniseres.
* Tilstandsgrad er i 琀椀llegg sa琀琀 ut fra bygningsdelenes

---

[d089_d089 | Side [1]]
 steder med Vurdering av avvik:
fuk琀椀ndikator (Pro琀椀meter SM) på befaringen og det var ingen • Mer enn halvparten av forventet bruks琀椀d er passert på innvendige vannledninger.
indikasjoner på fukt.
Det er ikke monter lekkasjevarsler med vannstoppven琀椀l på kjøkken.
Normal forventet bruksslitasje. Konsekvens/琀椀ltak
Tilstandsgrad sa琀琀 ut fra helhetlig vurdering av rommet og innredning. • Det er ikke behov for utbedrings琀椀ltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på

---

[d089_d089 | Side [1]]
t
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av gjennomføringen av befaringen begrenses som følger:
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten • Det u琀昀øres kun visuelle observasjoner på 琀椀lgjengelige 昀氀ater uten
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å fysiske inngrep (f.eks. riving).
utbedre rom eller bygningsdeler er et sjablongmessig anslag basert på
registrert

---

[d089_d089 | Side [1]]
roll og vedlikehold.
Styrets arbeid i 2024
Ved utleie har lov om husleieavtaler (husleieloven) konkret regulert ansvaret for vedlikehold
Siden forrige ordinært årsmøte har styret avholdt 3 møter og behandlet 5 styresaker.
av røykvarslere og slokkeutstyr, og har lagt plikten til nødvendig funksjonskontroll,
rengjøring, batteriskift, testing og lignende, til leieren, jf. husleieloven § 5-3.
104 105

## Side 54

Styret har i perioden hatt fokus på: kommende oppussing av fasaden etter at murstein
raste ut i

---

[d089_d089 | Side [1]]
ur- og trekonstruksjoner, samt naturstein.
Fasader u琀昀ørt i malt murpuss.
Bygningen har støpt gulv mot grunn.
Y琀琀ertak av saltaksform i trekonstruksjoner utvendig tekket med takplater (taket er ikke besik琀椀get).
Dato fra da bygningen ble ta琀琀 i bruk, er datert 琀椀l 01/01-1892, i følge Norges Eiendommer.
____
Det føres løpende vedlikehold og oppgraderinger e琀琀er behov og vedtak.
For oversikt over u琀昀ørte arbeider henvises det 琀椀l sameiets styre samt sameiets årsmelding
Oppdragsnr.: 22030-25154 Befaringsdato:

---

[d089_d089 | Side [1]]
rgifarge: Ikke angitt eiendommens matrikkel ved overskjøting til ny
Tilliggende konstruksjoner våtrom: Her føres opp en kronologisk oversikt over større hjemmelshaver:
Det er ikke praktisk mulig å gjennomføre fuktmåling/ vedlikehold som har blitt gjennomført de siste årene:
Info energiklasse
hulltaking, grunnet våtsonens plassering. 2022: Oppussing av oppgang og bytte av ytterdøra. 301/ 230/ 41/ 6:
____ 2020/ 21: Bytte av callinganlegg Selger har ikke fått energimerket boligen i forbindelse 26.08.1897 ‑

---

[d089_d089 | Side [1]]
re 琀椀lgjengelig hos meglerforetaket. Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over 琀椀d som
Regulering : Området er regulert 琀椀l boligformål følge av beslutninger foreta琀琀 i sameiet.
Adkomst vei : O昀昀entlig, interne gang- og s琀椀kkveier.
Tilknytning vann : O昀昀entlig
Bebyggelsen
Tilknytning avløp : O昀昀entlig
Bygård over 昀椀re etasjer samt kjeller og lo昀琀.
Grunnmur, bærende konstruksjoner og skillende dekker av mur- og trekonstruksjoner, samt naturstein.
Fasader u琀昀ørt i malt

---

[d089_d089 | Side [1]]
 reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 07.07.2025 – Skraverte felter markerer områder hvor det er registrert naturmangfold reguleringsplankartet viser dagens terreng- og tomtesituasjon.
(rød) eller fremmede skadelige organismer (sort). Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Kartet er sammenstilt for: Eiendomsomsetning. Kan ikke brukes til
Målestokk 1:1000

---

[d089_d089 | Side [1]]
som vist på planen.
y
S-2255 tr
mart,
§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på
S planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer.
-
3
0
Reguleringsbestemmelser i tilknytning til endret reguleringsplan for O2s0lo sentrum og in- § 3. Før byggetillatelse kan gis, skal det foreligge detaljert bebyggelsesplan for vedkommende eiendom. Etter
m
ot
bygningsrådets bestemmelse i det enkelte

---

[d089_d089 | Side [1]]
, P gf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.
V270
n
e3r98,V030806N2,V181209N2,V190902,V120105,V121010,V311002,V221096,
Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale
VP2la3
ne
1095,V231296,V011002,V151100,V120297,V200905N2,2306,V150796,V161001, m yndigheter for å bringe klarhet i eventuelle bevaringsinteresser.
Når behandling av bebyggelsesplan eller søknad om rive- eller byggetillatelse tar til, og

---

[d089_d089 | Side [1]]
 Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 -

---

[d089_d089 | Side [1]]
 par 28,1, jfr. par 27 i
bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av departementet.
n
n).
Ny paragraf ble vedtatt av Oslo bystyre 1.10.1987, S-2937.
gr
ø
o g § 1. Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne begrensningslinjen skal
g
g arealene nyttes som vist på planen.
y
S-2255 tr
mart,
§ 2. Tidligere stadfestede

---

[d089_d089 | Side [1]]
albegrepene er:
innenfor sonene A, B, C, D og E – er som følger: registrert som lovlig oppført. At ekspedisjonsdokument
eksisterer, gir derimot ingen garanti for at bygget er Bruksareal BRA:
Beliggenhet
‑ Bensin‑, diesel‑ og hybridbiler samt ladbare hybrider: kr oppført i samsvar med tillatelsen og gjeldende regelverk, BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
Leiligheten har en sentral beliggenhet i et etablert og 6.200 per år eller at det senere er utført arbeid på bygget som ikke er BRA‑e

---

[d089_d089 | Side [1]]
ilt for: Eiendomsomsetning. Kan ikke brukes til
Målestokk 1:1000 byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 145473/ 86515334 Deres ref.: 63976/
Høydereferanser Adresse: FRIIS' GATE 3 ANMO@MSEMERA
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 230/41
125

## Side 64

0053466
0023466
0092466
6643500
6643200
6642900
598500 598800 599100
Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel)

---

[d089_d089 | Side [1]]
r:0301 Gnr:230 Bnr:41
byantikvarens gule liste, noe som betyr at eiendommen Gjelder denne registerenheten med flere
Selger
Polisenummer fellesforsikring: 88037439 er ansett som bevaringsverdig, enten helt eller delvis.
Kristian Fischer‑Krusanth Dette kan påvirke mulighetene for fremtidige
Husdyr: Dyrehold søkes styret. ombygginger eller restaureringer av eiendommen. 22.04.1899 ‑ Dokumentnr: 900832 ‑ Erklæring/ avtale
Sameie
Byantikvaren skal gi en rådgivende uttalelse i Bestemmelse om

---

[d089_d089 | Side [1]]
nnholdet i
27.06.1989 ‑ Dokumentnr: 41667 ‑ Best. om adkomstrett vedtektene setter ingen begrensninger på eierens salgsoppgaven er basert på selgers informasjon,
Rettighet hefter i: Knr:0301 Gnr:230 Bnr:375 utleieadgang. Korttidsutleie er tillatt i inntil 90 døgn per fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
Bestemmelse om anlegg og vedlikehold av ledninger år, jf. eierseksjonsloven § 24. Denne grensen kan endres i registre som kommunen og Kartverket. Det er viktig at
m.v.

---

[d089_d089 | Side [1]]
 a d r 2 t . 1 p - b 2 e A .o r s e l a o l . b k r o u m k» m o u g n e « . P n l o a / n k k a a rt r / t ? 2 m -2 o d H e e = n k s o y m n m ss u o n n e e p r l » a . n For øvrige juridisk bindende H320_2 - Elveflom
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene. H390 - Deponi
PlottID/Best.nr: 145473/86515334
Deres ref.: 63976/ ANMO@MSEMERA Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved

---

[d089_d089 | Side [1]]
t i januar ‑ Elektrisk oppvarming bebyggelse
Friis' gate 3, 0187 OSLO 2024 (dette ble fikset midlertidig). ‑ Vedovn Regulering av areal i forbindelse med veggrunn/
jernbanegrunn
Gnr. 230, bnr. 41, snr. 6, ideell andel 1/ 1 Forretningsfører: OBF Bestemmelse om benyttelse
Regulering
i Oslo kommune. Bestemmelse om gjerde
Sameiets forsikringsselskap: Gjensidige Forsikring ASA Verneklasse/ SEFRAK: Eiendommen er registrert på Overført fra: Knr:0301 Gnr:230 Bnr:41
byantikvarens gule liste, noe som betyr at

---

[d089_d089 | Side [1]]
EF89 - UTM sone 32 PlottID/Best.nr: 145473/ 86515334 Deres ref.: 63976/
Høydereferanser Adresse: FRIIS' GATE 3 ANMO@MSEMERA
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 230/41
123

## Side 63

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
124
0033466
0023466
0013466
0033466
0023466
0013466
598700 598800
598700 598800
© Plan- og bygningsetaten, Oslo kommune
Naturmangfold
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut

---

[d089_d089 | Side [1]]
.1980 SSBnr: H0302
Etasje: 3 Oppvarmingstype: Uspesifisert
Heis: Nei
Parkeringstype: Ingen ()
Systemlås: Nei Antall rom: 3
Husdyrhold: Se vedtekter Oppr. antall rom: 3
Livsløp standard: Nei Kategori: 085-004 P-rom 61
Fasiliteter:
AREAL
Fellesgjelden er flytende fordelt på hele arealet i boligselskapet. Ved arealutvidelser vil forholdet mellom felleskostnader, renter og
avdrag forskyves for samtlige andeler / seksjoner.
RENHOLD OG VAKTMESTERTJENESTER
Seksjonseierne vasker selv trappen på rundgang. Sameiet

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Planlagt låneopptak i sameiet på ca. 1 000 000 kr for fasaderehabilitering, som vil medføre økte felleskostnader på anslagsvis 900 kr per måned per seksjon i 20 år. Vedtak er ikke fattet ennå, men risikoen er reell og nært forestående.",
      "evidence": [
        "te tas opp et lån på ca. 1 000 000,‑ som skal fordeles på sameiets 8 seksjoner.",
        "Det er uklart akkurat hvor mye dette vil påvirke hver enkelt seksjon.",
        "Dersom et sameie med 8 seksjoner tar opp et lån på 1 million kroner, vil felleskostnaden per seksjon kanskje øke med rundt 900kr per måned, gitt en rente på ca. 7% og 20 års nedbetalingstid.",
        "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Fikse fasadeskader på begge sider av bygget. Ikke vedtatt."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Fasadeskader på bygget mot gaten og mot bakgård. Murstein raste ut i januar 2024 og ble kun midlertidig utbedret. Sameiet planlegger rehabilitering, men dette er ikke vedtatt. Kjøper overtar risikoen for fremtidige kostnader knyttet til dette.",
      "evidence": [
        "Det er fasadeskader på bygget, mot gaten og mot bakgård. Sameie har tenkt å hyre inn folk til å fikse dette, dog ikke vedtatt ennå.",
        "kommende oppussing av fasaden etter at murstein raste ut i januar 2024 (dette ble fikset midlertidig).",
        "Fikse fasadeskader på begge sider av bygget. Ikke vedtatt."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R3",
      "description": "Badet har alvorlige tilstandsavvik (TG2/TG3-nivå): tettesjikt/membran har ukjent alder og nærmer seg eller har passert moderniseringsbehov, hull i veggfliser, riss/sprekker i gulvfliser som kan skyldes utettheter i tettesjikt, sokkelflis mangler/har falt av. Hele badet må trolig totalrenoveres for å oppnå vanntette løsninger.",
      "evidence": [
        "Tettesjiktet har dermed (eller nærmer seg) moderniseringsbehov. Det er i praksis lite gjennomførbart å bare bytte tettesjikt. For å oppnå vanntette løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet moderniseres.",
        "Stedvis hull i veggfliser og flisfuger etter tidligere innfestinger.",
        "Overflater gulv: Det er stedvis riss/sprekker i gulvfliser. Kan skyldes utettheter i tettesjikt.",
        "Sokkelflis mangler/har falt av.",
        "Med bakgrunn i membranens alder gis TG2, restlevetiden er ukjent."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Vannrør av kobber har overskredet anbefalt brukstid. Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken. Skader kan plutselig oppstå uten forvarsel.",
      "evidence": [
        "Vannrør av typen kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er overskredet.",
        "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå.",
        "Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken.",
        "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R5",
      "description": "Sprekker/riss påvist på skorstein inne i boligen. Dette kan innebære brann- og røyklekkasjerisiko og krever tiltak.",
      "evidence": [
        "Skorsteiner inne i boligen: Riss/sprekker påvist på skorstein.",
        "Tiltak må påregnes."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R6",
      "description": "Vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid. Det er økt sannsynlighet for punktering og redusert isoleringsevne. Vindusbytte må påregnes på sikt.",
      "evidence": [
        "Det påpekes at vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid.",
        "TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.",
        "Det utelukkes ikke at det kan forekomme punkterte glass som ikke ble registrert på befaringstidspunktet."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Eiendommen er registrert på Byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og Byantikvaren skal gi rådgivende uttalelse i alle byggesaker.",
      "evidence": [
        "Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.",
        "Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.",
        "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre bygårder. Kjøper bør vurdere å gjennomføre måling etter overtakelse.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Selger har ikke energimerket boligen. Kjøper har ikke informasjon om boligens energikarakter og energifarge, noe som gjør det vanskelig å vurdere fremtidige energikostnader.",
      "evidence": [
        "Selger har ikke fått energimerket boligen i forbindelse med salget.",
        "Energikarakter: Ikke angitt.",
        "Energifarge: Ikke angitt."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R10",
      "description": "Rominndelingen er endret av selger (to lettvegger satt opp i 2022, vegg slått ned mellom kjøkken og stue i 2023) uten at det fremgår om dette er godkjent av bygningsmyndighetene. Rombetegnelse tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for varig opphold.",
      "evidence": [
        "2022 - Satt opp to lettvegger for å gjøre gammel stue til to rom. Arbeid utført av Selger.",
        "2023 - Slått ned vegg mellom kjøkken og stue for å lage kjøkken-stue løsning. Arbeid utført av leietaker og Selger.",
        "Rombetegnelse er skjønnsmessig vurdert på stedet og tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for rom til varig opphold.",
        "Dette betyr at rommet både kan være i strid med forskrift (TEK) og mangle godkjennelse i kommunen for den aktuelle bruken."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "El-anlegget hadde jordingsfeil i 2023 som ble utbedret med samsvarserklæring, men tilstandsrapporten er kun en visuell befaring uten åpning av konstruksjoner. Skjulte feil i el-anlegget kan ikke utelukkes.",
      "evidence": [
        "2023 - El-tilsyn av Elvia grunnet jordingsfeil. Deretter utbedring av dette samt hele utbedring av hele el-anlegg samt samsvarserklæring. Arbeid utført av Ostabell elektriske.",
        "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.68
    },
    {
      "risk_id": "R12",
      "description": "Merkbare skjevheter i leiligheten er påvist. Årsaken til skjevhetene er ikke vurdert, og det kan ikke utelukkes at dette skyldes setninger i bygget (bygget fra 1892). Ingen geotekniske undersøkelser er foretatt.",
      "evidence": [
        "Skjevhetsmåling: Det er noe merkbare skjevheter i leiligheten.",
        "Setninger kan ha oppstått og dette kan ha medført skjevheter i gulv.",
        "Årsaken til skjevhetene er ikke vurdert.",
        "Det er ikke foretatt noen geotekniske undersøkelser og det er dermed begrensede muligheter for nøyaktig kunnskap om byggegrunn og stabilitet."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R13",
      "description": "Dører er vurdert til å ha oversteget halvparten av forventet levetid og må beregnes byttet på sikt. Dette medfører fremtidige kostnader for kjøper.",
      "evidence": [
        "TG2 på slike bygningsdeler må sees på som en varsel på at dører må beregnes byttet på sikt."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R14",
      "description": "Sameiet budsjetterer med underskudd på kr 5 648 i 2025, og felleskostnadene er økt fra 250 692 kr (2023) til budsjettert 296 452 kr (2025). Det er påregnelig med ytterligere økning i felleskostnader.",
      "evidence": [
        "I 2025 er det budsjettert med et underskudd på kr 5 648,‑.",
        "Inntekter felleskostnader: Regnskap 2023: 250 692, Budsjett 2025: 296 452.",
        "På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven. Det er vanlig at felleskostnader justeres årlig, minimum i tråd med KPI."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Taket er ikke besiktiget av takstmann. Tilstanden på taket er ukjent, og eventuelle skader eller behov for utbedring kan ikke utelukkes.",
      "evidence": [
        "Yttertak av saltaksform i trekonstruksjoner utvendig tekket med takplater (taket er ikke besiktiget)."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Bygget er fra 1892 og er en eldre bygård. Dagens krav til isolering og tetthet er strengere enn da bygget ble oppført. Det må påregnes løpende vedlikehold og fremtidige utbedringskostnader.",
      "evidence": [
        "Dato fra da bygningen ble tatt i bruk, er datert til 01/01-1892, i følge Norges Eiendommer.",
        "Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.",
        "En bolig som har blitt brukt i en viss tid, har vanligvis blitt utsatt for slitasje, og skader kan ha oppstått."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R17",
      "description": "Legalpant: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Dette er pant som ikke vises i grunnboken og som har høyere prioritet enn banklån.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboken.",
        "Legalpant til kommunen har høyere prioritet enn foran tinglyste lån, for eksempel banklån på seksjonen."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R18",
      "description": "Vedlikehold i sameiet: I 2024 ble det ikke brukt penger på reparasjon og vedlikehold av bygninger (kr 0), mot kr 52 211 i 2023 og budsjettert kr 66 000. Dette kan indikere utsatt vedlikehold som kan gi økte kostnader fremover.",
      "evidence": [
        "6600 Reparasjon og vedlikehold bygninger: Regnskap 2024: 0, Regnskap 2023: 52 211, Budsjett 2024: 66 000, Budsjett 2025: 70 000."
      ],
      "source_documents": [
        "d089_d089"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "el-anlegg samsvarserklæring dokumentasjon kontroll",
    "dører tilstandsgrad TG2 alder levetid",
    "radon utleie krav måling",
    "energimerking krav selger fritak",
    "skorstein brann tiltak kostnad",
    "geoteknisk undersøkelse setninger grunnforhold",
    "sameiet vedlikeholdsplan fremtidige tiltak budsjett",
    "naturlig ventilasjon eldre bygård inneklima",
    "peis ovn montering godkjenning 2025"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Planlagt låneopptak (0.97 → 0.97):** Meget godt dokumentert. Direkte sitat fra salgsoppgaven bekrefter lånebeløp, antall seksjoner, estimert månedlig økning og at vedtak ikke er fattet. Confidence opprettholdes.\n\n**R2 – Fasadeskader (0.98 → 0.98):** Svært godt dokumentert med tre uavhengige kildehenvisninger inkl. styrets årsmelding om murstein som raste ut januar 2024. Confidence opprettholdes.\n\n**R3 – Badets tilstand (0.97 → 0.97):** Meget godt dokumentert med konkrete TG2-avvik, membranproblematikk og krav om totalrenovering. Confidence opprettholdes.\n\n**R4 – Vannrør kobber (0.96 → 0.96):** Godt dokumentert med direkte sitat om overskredet brukstid, manglende lekkasjevarsler og plutselig skaderisiko. Confidence opprettholdes.\n\n**R5 – Skorstein sprekker (0.93 → 0.93):** Godt dokumentert. Riss/sprekker bekreftet og tiltak påkrevd. Noe usikkerhet rundt alvorlighetsgrad (TG-nivå ikke eksplisitt angitt i evidensen), men risikoen er reell. Confidence opprettholdes.\n\n**R6 – Vinduer over 20 år (0.92 → 0.90):** Godt dokumentert. Isolerglass er hele og ingen punkteringer observert ved befaring, noe som demper den umiddelbare risikoen noe. TG2 er gitt som påpekelse, ikke akutt tiltak. Confidence justeres marginalt ned.\n\n**R7 – Byantikvarens gule liste (0.95 → 0.95):** Meget godt dokumentert med direkte sitat om bevaringsstatus og Byantikvarens rolle. Confidence opprettholdes.\n\n**R8 – Radonmåling mangler (0.88 → 0.82):** Dokumentert, men risikoen er noe begrenset da det ikke er krav om radonmåling for denne boligen (ikke utleid). Boligen er i 3. etasje, noe som reduserer radonrisikoen sammenlignet med kjeller/1. etasje. Confidence justeres ned.\n\n**R9 – Energimerking mangler (0.85 → 0.78):** Dokumentert, men manglende energimerking er en relativt begrenset risiko – det er ikke ulovlig å selge uten, og kjøper kan innhente dette selv. Confidence justeres ned.\n\n**R10 – Ulovlige romendringer (0.88 → 0.88):** Godt dokumentert. Både egenerklæring og tilstandsrapport bekrefter endringer og mulig manglende godkjenning. Confidence opprettholdes.\n\n**R11 – El-anlegg (0.78 → 0.68):** Evidensen viser faktisk at el-anlegget ble fullstendig utbedret i 2023 med samsvarserklæring fra autorisert elektriker. Dette reduserer risikoen betydelig. Risikoen er nå primært knyttet til at tilstandsrapporten er visuell og ikke kan avdekke skjulte feil. Confidence justeres ned.\n\n**R12 – Skjevheter i gulv (0.87 → 0.87):** Godt dokumentert. Skjevheter bekreftet, årsak ikke vurdert, ingen geotekniske undersøkelser. Confidence opprettholdes.\n\n**R13 – Dører (0.82 → 0.75):** Svakt dokumentert – kun én generell setning om TG2 og fremtidig bytte. Ingen spesifikk alder eller konkret tilstandsvurdering av dørene fremkommer tydelig i evidensen. Confidence justeres ned.\n\n**R14 – Underskudd og økte felleskostnader (0.88 → 0.88):** Godt dokumentert med konkrete regnskapstall. Confidence opprettholdes.\n\n**R15 – Tak ikke besiktiget (0.85 → 0.85):** Dokumentert. Taket er eksplisitt nevnt som ikke besiktiget. Confidence opprettholdes.\n\n**R16 – Byggets alder 1892 (0.90 → 0.88):** Godt dokumentert. Noe generell risiko, men støttes av konkrete utsagn om strengere krav og slitasje. Confidence justeres marginalt ned da dette er en generell risiko som delvis overlapper med andre risikoer.\n\n**R17 – Legalpant (0.92 → 0.92):** Meget godt dokumentert med direkte sitat. Confidence opprettholdes.\n\n**R18 – Utsatt vedlikehold sameiet (0.82 → 0.82):** Dokumentert med regnskapstall. Confidence opprettholdes.\n\n**Manglende risikoer identifisert:**\n1. **Naturlig ventilasjon** – Leiligheten har kun naturlig ventilasjon (nevnt i dokumentet), noe som kan gi inneklimaproblemer i en eldre bygård. Bør undersøkes nærmere.\n2. **Peis/ovn-installasjon 2025** – Det ble demontert peisovn og montert ny peis i 2025. Det er uklart om dette er godkjent og om det er koblet til den sprekke-rammede skorsteinen.\n3. **Utleiehistorikk** – Boligen har vært utleid (kr 26 400/mnd fordelt over tre rom). Det er uklart om utleien var lovlig og om det er gjort bruksendringer i forbindelse med utleien.\n4. **Seksjonseiers solidaransvar** – Seksjonseierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som kan medføre risiko ved mislighold fra andre seksjonseiere.\n"
}

## Raw Response
```json
{
  "id": "msg_01VNM9PFyyZRKuRC5BmxgmaE",
  "container": null,
  "content": [
    {
      "id": "toolu_016bcJ2HyF8gFKyasEdqoCkn",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Planlagt låneopptak i sameiet på ca. 1 000 000 kr for fasaderehabilitering, som vil medføre økte felleskostnader på anslagsvis 900 kr per måned per seksjon i 20 år. Vedtak er ikke fattet ennå, men risikoen er reell og nært forestående.",
            "evidence": [
              "te tas opp et lån på ca. 1 000 000,‑ som skal fordeles på sameiets 8 seksjoner.",
              "Det er uklart akkurat hvor mye dette vil påvirke hver enkelt seksjon.",
              "Dersom et sameie med 8 seksjoner tar opp et lån på 1 million kroner, vil felleskostnaden per seksjon kanskje øke med rundt 900kr per måned, gitt en rente på ca. 7% og 20 års nedbetalingstid.",
              "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Fikse fasadeskader på begge sider av bygget. Ikke vedtatt."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Fasadeskader på bygget mot gaten og mot bakgård. Murstein raste ut i januar 2024 og ble kun midlertidig utbedret. Sameiet planlegger rehabilitering, men dette er ikke vedtatt. Kjøper overtar risikoen for fremtidige kostnader knyttet til dette.",
            "evidence": [
              "Det er fasadeskader på bygget, mot gaten og mot bakgård. Sameie har tenkt å hyre inn folk til å fikse dette, dog ikke vedtatt ennå.",
              "kommende oppussing av fasaden etter at murstein raste ut i januar 2024 (dette ble fikset midlertidig).",
              "Fikse fasadeskader på begge sider av bygget. Ikke vedtatt."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R3",
            "description": "Badet har alvorlige tilstandsavvik (TG2/TG3-nivå): tettesjikt/membran har ukjent alder og nærmer seg eller har passert moderniseringsbehov, hull i veggfliser, riss/sprekker i gulvfliser som kan skyldes utettheter i tettesjikt, sokkelflis mangler/har falt av. Hele badet må trolig totalrenoveres for å oppnå vanntette løsninger.",
            "evidence": [
              "Tettesjiktet har dermed (eller nærmer seg) moderniseringsbehov. Det er i praksis lite gjennomførbart å bare bytte tettesjikt. For å oppnå vanntette løsninger og overganger ved sluk, i gulv, rundt rørgjennomføringer og i overgang mellom gulv og vegg må hele rommet moderniseres.",
              "Stedvis hull i veggfliser og flisfuger etter tidligere innfestinger.",
              "Overflater gulv: Det er stedvis riss/sprekker i gulvfliser. Kan skyldes utettheter i tettesjikt.",
              "Sokkelflis mangler/har falt av.",
              "Med bakgrunn i membranens alder gis TG2, restlevetiden er ukjent."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Vannrør av kobber har overskredet anbefalt brukstid. Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken. Skader kan plutselig oppstå uten forvarsel.",
            "evidence": [
              "Vannrør av typen kobber er vurdert til å ha en alder som tilsier at anbefalt brukstid er overskredet.",
              "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå.",
              "Det er ikke montert lekkasjevarsler med vannstoppventil på kjøkken.",
              "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R5",
            "description": "Sprekker/riss påvist på skorstein inne i boligen. Dette kan innebære brann- og røyklekkasjerisiko og krever tiltak.",
            "evidence": [
              "Skorsteiner inne i boligen: Riss/sprekker påvist på skorstein.",
              "Tiltak må påregnes."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R6",
            "description": "Vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid. Det er økt sannsynlighet for punktering og redusert isoleringsevne. Vindusbytte må påregnes på sikt.",
            "evidence": [
              "Det påpekes at vinduer er over 20 år gamle og har oversteget halvparten av forventet levetid.",
              "TG 2 er gitt som en påpekelse da vinduer har høy alder med høyere sannsynlighet for punktering samt noe redusert isoleringsevne sammenlignet med dagens/nye vinduer.",
              "Det utelukkes ikke at det kan forekomme punkterte glass som ikke ble registrert på befaringstidspunktet."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Eiendommen er registrert på Byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og Byantikvaren skal gi rådgivende uttalelse i alle byggesaker.",
            "evidence": [
              "Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.",
              "Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.",
              "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre bygårder. Kjøper bør vurdere å gjennomføre måling etter overtakelse.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Selger har ikke energimerket boligen. Kjøper har ikke informasjon om boligens energikarakter og energifarge, noe som gjør det vanskelig å vurdere fremtidige energikostnader.",
            "evidence": [
              "Selger har ikke fått energimerket boligen i forbindelse med salget.",
              "Energikarakter: Ikke angitt.",
              "Energifarge: Ikke angitt."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R10",
            "description": "Rominndelingen er endret av selger (to lettvegger satt opp i 2022, vegg slått ned mellom kjøkken og stue i 2023) uten at det fremgår om dette er godkjent av bygningsmyndighetene. Rombetegnelse tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for varig opphold.",
            "evidence": [
              "2022 - Satt opp to lettvegger for å gjøre gammel stue til to rom. Arbeid utført av Selger.",
              "2023 - Slått ned vegg mellom kjøkken og stue for å lage kjøkken-stue løsning. Arbeid utført av leietaker og Selger.",
              "Rombetegnelse er skjønnsmessig vurdert på stedet og tilfredsstiller ikke nødvendigvis kravene i Teknisk forskrift for rom til varig opphold.",
              "Dette betyr at rommet både kan være i strid med forskrift (TEK) og mangle godkjennelse i kommunen for den aktuelle bruken."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "El-anlegget hadde jordingsfeil i 2023 som ble utbedret med samsvarserklæring, men tilstandsrapporten er kun en visuell befaring uten åpning av konstruksjoner. Skjulte feil i el-anlegget kan ikke utelukkes.",
            "evidence": [
              "2023 - El-tilsyn av Elvia grunnet jordingsfeil. Deretter utbedring av dette samt hele utbedring av hele el-anlegg samt samsvarserklæring. Arbeid utført av Ostabell elektriske.",
              "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.68
          },
          {
            "risk_id": "R12",
            "description": "Merkbare skjevheter i leiligheten er påvist. Årsaken til skjevhetene er ikke vurdert, og det kan ikke utelukkes at dette skyldes setninger i bygget (bygget fra 1892). Ingen geotekniske undersøkelser er foretatt.",
            "evidence": [
              "Skjevhetsmåling: Det er noe merkbare skjevheter i leiligheten.",
              "Setninger kan ha oppstått og dette kan ha medført skjevheter i gulv.",
              "Årsaken til skjevhetene er ikke vurdert.",
              "Det er ikke foretatt noen geotekniske undersøkelser og det er dermed begrensede muligheter for nøyaktig kunnskap om byggegrunn og stabilitet."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R13",
            "description": "Dører er vurdert til å ha oversteget halvparten av forventet levetid og må beregnes byttet på sikt. Dette medfører fremtidige kostnader for kjøper.",
            "evidence": [
              "TG2 på slike bygningsdeler må sees på som en varsel på at dører må beregnes byttet på sikt."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R14",
            "description": "Sameiet budsjetterer med underskudd på kr 5 648 i 2025, og felleskostnadene er økt fra 250 692 kr (2023) til budsjettert 296 452 kr (2025). Det er påregnelig med ytterligere økning i felleskostnader.",
            "evidence": [
              "I 2025 er det budsjettert med et underskudd på kr 5 648,‑.",
              "Inntekter felleskostnader: Regnskap 2023: 250 692, Budsjett 2025: 296 452.",
              "På grunn av prisstigning og renteøkning er det påregnelig at felleskostnadene økes etter utarbeidelse av denne salgsoppgaven. Det er vanlig at felleskostnader justeres årlig, minimum i tråd med KPI."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Taket er ikke besiktiget av takstmann. Tilstanden på taket er ukjent, og eventuelle skader eller behov for utbedring kan ikke utelukkes.",
            "evidence": [
              "Yttertak av saltaksform i trekonstruksjoner utvendig tekket med takplater (taket er ikke besiktiget)."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Bygget er fra 1892 og er en eldre bygård. Dagens krav til isolering og tetthet er strengere enn da bygget ble oppført. Det må påregnes løpende vedlikehold og fremtidige utbedringskostnader.",
            "evidence": [
              "Dato fra da bygningen ble tatt i bruk, er datert til 01/01-1892, i følge Norges Eiendommer.",
              "Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.",
              "En bolig som har blitt brukt i en viss tid, har vanligvis blitt utsatt for slitasje, og skader kan ha oppstått."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R17",
            "description": "Legalpant: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Dette er pant som ikke vises i grunnboken og som har høyere prioritet enn banklån.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboken.",
              "Legalpant til kommunen har høyere prioritet enn foran tinglyste lån, for eksempel banklån på seksjonen."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R18",
            "description": "Vedlikehold i sameiet: I 2024 ble det ikke brukt penger på reparasjon og vedlikehold av bygninger (kr 0), mot kr 52 211 i 2023 og budsjettert kr 66 000. Dette kan indikere utsatt vedlikehold som kan gi økte kostnader fremover.",
            "evidence": [
              "6600 Reparasjon og vedlikehold bygninger: Regnskap 2024: 0, Regnskap 2023: 52 211, Budsjett 2024: 66 000, Budsjett 2025: 70 000."
            ],
            "source_documents": [
              "d089_d089"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "el-anlegg samsvarserklæring dokumentasjon kontroll",
          "dører tilstandsgrad TG2 alder levetid",
          "radon utleie krav måling",
          "energimerking krav selger fritak",
          "skorstein brann tiltak kostnad",
          "geoteknisk undersøkelse setninger grunnforhold",
          "sameiet vedlikeholdsplan fremtidige tiltak budsjett",
          "naturlig ventilasjon eldre bygård inneklima",
          "peis ovn montering godkjenning 2025"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Planlagt låneopptak (0.97 → 0.97):** Meget godt dokumentert. Direkte sitat fra salgsoppgaven bekrefter lånebeløp, antall seksjoner, estimert månedlig økning og at vedtak ikke er fattet. Confidence opprettholdes.\n\n**R2 – Fasadeskader (0.98 → 0.98):** Svært godt dokumentert med tre uavhengige kildehenvisninger inkl. styrets årsmelding om murstein som raste ut januar 2024. Confidence opprettholdes.\n\n**R3 – Badets tilstand (0.97 → 0.97):** Meget godt dokumentert med konkrete TG2-avvik, membranproblematikk og krav om totalrenovering. Confidence opprettholdes.\n\n**R4 – Vannrør kobber (0.96 → 0.96):** Godt dokumentert med direkte sitat om overskredet brukstid, manglende lekkasjevarsler og plutselig skaderisiko. Confidence opprettholdes.\n\n**R5 – Skorstein sprekker (0.93 → 0.93):** Godt dokumentert. Riss/sprekker bekreftet og tiltak påkrevd. Noe usikkerhet rundt alvorlighetsgrad (TG-nivå ikke eksplisitt angitt i evidensen), men risikoen er reell. Confidence opprettholdes.\n\n**R6 – Vinduer over 20 år (0.92 → 0.90):** Godt dokumentert. Isolerglass er hele og ingen punkteringer observert ved befaring, noe som demper den umiddelbare risikoen noe. TG2 er gitt som påpekelse, ikke akutt tiltak. Confidence justeres marginalt ned.\n\n**R7 – Byantikvarens gule liste (0.95 → 0.95):** Meget godt dokumentert med direkte sitat om bevaringsstatus og Byantikvarens rolle. Confidence opprettholdes.\n\n**R8 – Radonmåling mangler (0.88 → 0.82):** Dokumentert, men risikoen er noe begrenset da det ikke er krav om radonmåling for denne boligen (ikke utleid). Boligen er i 3. etasje, noe som reduserer radonrisikoen sammenlignet med kjeller/1. etasje. Confidence justeres ned.\n\n**R9 – Energimerking mangler (0.85 → 0.78):** Dokumentert, men manglende energimerking er en relativt begrenset risiko – det er ikke ulovlig å selge uten, og kjøper kan innhente dette selv. Confidence justeres ned.\n\n**R10 – Ulovlige romendringer (0.88 → 0.88):** Godt dokumentert. Både egenerklæring og tilstandsrapport bekrefter endringer og mulig manglende godkjenning. Confidence opprettholdes.\n\n**R11 – El-anlegg (0.78 → 0.68):** Evidensen viser faktisk at el-anlegget ble fullstendig utbedret i 2023 med samsvarserklæring fra autorisert elektriker. Dette reduserer risikoen betydelig. Risikoen er nå primært knyttet til at tilstandsrapporten er visuell og ikke kan avdekke skjulte feil. Confidence justeres ned.\n\n**R12 – Skjevheter i gulv (0.87 → 0.87):** Godt dokumentert. Skjevheter bekreftet, årsak ikke vurdert, ingen geotekniske undersøkelser. Confidence opprettholdes.\n\n**R13 – Dører (0.82 → 0.75):** Svakt dokumentert – kun én generell setning om TG2 og fremtidig bytte. Ingen spesifikk alder eller konkret tilstandsvurdering av dørene fremkommer tydelig i evidensen. Confidence justeres ned.\n\n**R14 – Underskudd og økte felleskostnader (0.88 → 0.88):** Godt dokumentert med konkrete regnskapstall. Confidence opprettholdes.\n\n**R15 – Tak ikke besiktiget (0.85 → 0.85):** Dokumentert. Taket er eksplisitt nevnt som ikke besiktiget. Confidence opprettholdes.\n\n**R16 – Byggets alder 1892 (0.90 → 0.88):** Godt dokumentert. Noe generell risiko, men støttes av konkrete utsagn om strengere krav og slitasje. Confidence justeres marginalt ned da dette er en generell risiko som delvis overlapper med andre risikoer.\n\n**R17 – Legalpant (0.92 → 0.92):** Meget godt dokumentert med direkte sitat. Confidence opprettholdes.\n\n**R18 – Utsatt vedlikehold sameiet (0.82 → 0.82):** Dokumentert med regnskapstall. Confidence opprettholdes.\n\n**Manglende risikoer identifisert:**\n1. **Naturlig ventilasjon** – Leiligheten har kun naturlig ventilasjon (nevnt i dokumentet), noe som kan gi inneklimaproblemer i en eldre bygård. Bør undersøkes nærmere.\n2. **Peis/ovn-installasjon 2025** – Det ble demontert peisovn og montert ny peis i 2025. Det er uklart om dette er godkjent og om det er koblet til den sprekke-rammede skorsteinen.\n3. **Utleiehistorikk** – Boligen har vært utleid (kr 26 400/mnd fordelt over tre rom). Det er uklart om utleien var lovlig og om det er gjort bruksendringer i forbindelse med utleien.\n4. **Seksjonseiers solidaransvar** – Seksjonseierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som kan medføre risiko ved mislighold fra andre seksjonseiere.\n"
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
    "input_tokens": 22484,
    "output_tokens": 6337,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
