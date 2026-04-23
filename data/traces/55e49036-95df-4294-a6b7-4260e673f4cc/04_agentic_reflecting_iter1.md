# Trace: agentic_reflecting_iter1
- **Run ID:** 55e49036-95df-4294-a6b7-4260e673f4cc
- **Tidspunkt:** 2026-03-25T08:28:58.867265+00:00
- **Varighet:** 119.87s
- **Input tokens:** 20823
- **Output tokens:** 6239

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
Risiko 1: Setningsskader og store riss/sprekker i grunnmur og fundamenter (TG3). Drenering på oversiden må utbedres. Kostnadsestimat: 20 000 – 100 000 kr.
  Confidence: 0.97
  Evidens: Det er registrert setningsskader/ store riss/ sprekker.; Lokal utbedring må utføres. Drenering på oversiden må utbedres. Pris bør innhentes for faktiske kostander. Kostnadsestimat: 20 000 ‑ 100 000

Risiko 2: Vaskerom i kjeller (TG3) må totaloppgraderes. Sluk fra byggeår med utgått levetid, naturlig ventilasjon, og badet er fra opprinnelig før 1997. Kostnadsestimat: 200 000 – 500 000 kr.
  Confidence: 0.97
  Evidens: Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.; Sluk fra byggeår der levetid vurderes som utgått.; Tg 3 er satt grunnet at badet er fra opprinnelig før 1997 og regler fra ny avhendingslov 2022 med synlige avvik på de tekniske utførelser.; Kostnadsestimat: 200 000 ‑ 500 000

Risiko 3: Dårlig terrengfall mot grunnmur og stående vann på eiendommen. Risiko for vanninntrenging og fuktskader i konstruksjonen.
  Confidence: 0.95
  Evidens: Det er påvist dårlig fall eller flatt terreng inn mot grunnmur og dermed muligheter for større vannansamlinger.; Det er påvist områder på eiendommen med stående vann.

Risiko 4: Utvendige avløpsledninger og vannledninger har passert mer enn halvparten av forventet brukstid. Utvendige vannledninger av plast (PEL) fra 1983. Kameraundersøkelse anbefales.
  Confidence: 0.93
  Evidens: Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.; Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.; Utvendige vannledninger er av plast (PEL) og er fra 1983.; Det oppfordres til kameraundersøkelse på generelt grunnlag for faktisk tilstand på avløpsrør.

Risiko 5: Ingen radonsperre i boligen, og radonmåling er ikke utført på boligen. Eksisterende radonmåling er fra 2015 (verdier 27, 30, 39 og 65 Bq/m³) og ble utført av tidligere eier. Verdien på 65 Bq/m³ nærmer seg tiltaksgrensen på 100 Bq/m³.
  Confidence: 0.92
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Boligen har betongsåle fra byggeår uten radonsperre mot grunn da dette ikke var påkrevet ved oppføringsåret.; Det foreligger ingen radonmåling på boligen og bør utføres på generelt grunnlag.; Radonmåling År 2015 Verdi 27, 30, 39 og 65

Risiko 6: Punktering av dampsperre på loft/kryploft, misfarging og soppdannelser på undertak. Risiko for fuktskader i takkonstruksjonen.
  Confidence: 0.92
  Evidens: Det er fra loft/ kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen.; Det er påvist avvik rundt gjennomføringer i takflaten.; Undertaket er misfarget. Stedvis mindre soppdannelser. Stedvis fuktflekker.

Risiko 7: Ingen lufting og ingen musesperre i nedre kant av kledning mot grunnmur. Risiko for skadedyr og fuktskader i veggkonstruksjonen.
  Confidence: 0.9
  Evidens: Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.; Det er ingen musesperre i nedre kant av konstruksjon.; Vepsebol o.l må evt. fjernes og tiltak mot skadedyr/mus bør alltid utføres på eldre takkonstruksjoner fra dette årstall.

Risiko 8: Rekkverk i trapp har åpninger større enn dagens forskriftskrav, og det mangler håndløper på vegg i trappeløpet. Deler av rekkverk på midtre del av trappen mangler. Sikkerhetsrisiko.
  Confidence: 0.93
  Evidens: Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i trapper.; Det mangler håndløper på vegg i trappeløpet.; Deler av rekkverk på midtre del av trappen mangler.

Risiko 9: Toalettrom har kun naturlig avtrekk, men NS 3600 krever mekanisk avtrekk. Mekanisk avtrekk bør etableres.
  Confidence: 0.88
  Evidens: Toalettrom har kun naturlig avtrekk fra rommet, NS 3600 krever mekanisk avtrekk for å kunne gi TG 0/1.; Mekanisk avtrekk bør etableres på toalettrom.

Risiko 10: Ildfast plate mangler på gulvet under sotluke/feieluke på pipe. Brannfarlig avvik.
  Confidence: 0.88
  Evidens: Ildfast plate mangler på gulvet under sotluke/ feieluke på pipe.

Risiko 11: Vinduer med avvik: vanskelig å åpne/lukke, avvik rundt innsettingsdetaljer, slitte karmer og sprekker i trevirket. Eldre vinduer med påregnelig utskiftingsbehov.
  Confidence: 0.87
  Evidens: Det er påvist at enkelte vinduer er vanskelig å åpne/ lukke.; Det er påvist avvik rundt innsettingsdetaljer.; Karmene i vinduer er slitte og det er sprekker i trevirket.; Eldre vinduer er påregnelig som følge av vanlig slitasje.

Risiko 12: Høydeforskjell på 15–30 mm i etasjeskille/gulv mot grunn. Avvik i henhold til standardens krav til godkjente måleavvik.
  Confidence: 0.85
  Evidens: Det er målt høydeforskjell på mellom 15‑30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.

Risiko 13: En del av hagen (ca. 10 m²) er felleseie i sameiet. Kjøper overtar kun bruksrett, ikke eiendomsrett til denne delen. Bruksretten er basert på godkjenning fra sameiet og er ikke tinglyst som en permanent rettighet.
  Confidence: 0.88
  Evidens: En liten del av hagen mot veien (ca. 10m2) er felleseie i sameiet. Vi har godkjenning fra styret i sameie om at vi har bruksrett på delen.; Vi har rammet inn hagen med hekk, som inkluderer denne delen etter godkjenning fra sameiet.

Risiko 14: Bruksendring av tre soverom i underetasjen ble godkjent så sent som 30.01.2026, noe som indikerer at rommene tidligere var ulovlig brukt som soverom. Kjøper bør undersøke om alle forhold nå er i orden.
  Confidence: 0.85
  Evidens: Vedtak fra Lillestrøm kommune 30.01.2026 godkjente bruksendring fra disponible rom til hoveddel, slik at de tre soverommene i underetasjen nå er godkjent som soverom. Dette økte boarealet med 26,5 m2.

Risiko 15: Reguleringsplan fra 1980 (Plan nr. 45) er svært gammel. Det kan foreligge fremtidige reguleringsendringer eller offentlige vedtak som kan påvirke eiendommens bruk og omgivelser.
  Confidence: 0.72
  Evidens: Gjeldende reguleringsplan: Områdene langs RV 172 fra Sørumsand skole til Tårnveien. Plan nr. 45. Stadfestet 16.12.1980.

Risiko 16: Pipeløp fra byggeår er formelt ikke vurdert i tilstandsrapporten. Ukjent tilstand på pipe kan innebære brannrisiko.
  Confidence: 0.8
  Evidens: Pipeløp fra byggeår. Pipeløp er formelt ikke vurdert.

Risiko 17: Elektrisk anlegg er vurdert til TG1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult konstruksjon. Siste el-tilsyn var i 2022.
  Confidence: 0.78
  Evidens: Med tanke på fremlagt dokumentasjon og utførte sjekkpunkter og utført el-sjekk av Elvia i 2022 er anlegget vurdert til TG 1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult i konstruksjonen.

Risiko 18: Nedløp, renner og beslag er fra byggeår. Risiko for dårlige skjøter og gjennomrustede beslag. Påregnelig med utskiftninger og vedlikehold.
  Confidence: 0.82
  Evidens: Nedløp, renner og beslag fra byggeår. Det var oppholdsvær på befaringsdagen slik at renner og nedløps funksjon er vanskelig å stadfeste. Det gjøres oppmerksom på alder og det kan derfor ikke utelukkes dårlige skjøter, gjennomrustete beslag etc.

Risiko 19: Fuktkvote på 22 % (vekt%) målt i konstruksjonen ved hulltaking i soverom. Forhøyet fuktverdi kan indikere fuktproblemer i veggen.
  Confidence: 0.85
  Evidens: Hulltaking er foretatt ved/i Soverom. Fuktkvotemåling (vekt%) i konstruksjonen ble målt til 22.

Risiko 20: Betongtrapp fra byggeår ned til kjeller fremstår med synlige avvik og behov for utbedrende tiltak.
  Confidence: 0.83
  Evidens: Betongtrapp fra byggeår ned til kjeller. Trapp fremstår med synlige avvik og behov for utbedrende tiltak.

Dokumentkontekst:
[d150_d150 | Side [1]]
 56, ideell andel 1/ 1 Stadfestet 16.12.1980.
Gnr. 242, bnr. 78, ideell andel 1/ 12, sameietype: realsameie
Gnr. 242, bnr. 79, ideell andel 1/ 12, sameietype: realsameie For mer informasjon om reguleringsforhold, kontakt
i Lillestrøm kommune. megler eller søk på saksnummer, adresse eller gårds‑ og
bruksnummer på Plan‑ og bygningsetatens hjemmeside.
Selger
Tinglyste heftelser
Line Christin Kaisdatter Grendahl og Kjetil Grendahl
Tinglyste heftelser og rettigheter: På eiendommen er det
Sameie
tinglyst

---

[d150_d150 | Side [1]]
er utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
En liten del av hagen mot veien (ca. 10m2) er felleseie i sameiet. Vi har godkjenning fra styret i sameie om at vi har
Beskrivelse
bruksrett på delen. Vi har rammet inn hagen med hekk, som inkluderer denne delen etter godkjenning fra sameiet.
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om

---

[d150_d150 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
Initialer selger: KG, LCKG 3
91005240
:ecnerefer
tnemucoD
55

##

---

[d150_d150 | Side [1]]
ll eller på https:/ / www.
Utleie
soderbergpartners.no/ eiendom/ boligkjoper/
Adgang til utleie: Det er ikke kjent at det foreligger
offentligrettslige regler som er til hinder for at hele
Lovanvendelse
eiendommen leies ut.
Regelverk og generelle opplysninger
44

## Side 45

OM EIENDOMMEN
Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i
følge med eiendommen, jf.

---

[d150_d150 | Side [1]]
r utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Initialer selger: KG, LCKG 2
91005240
:ecnerefer
tnemucoD
54

## Side 55

15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av

---

[d150_d150 | Side [1]]
56
Tidspunkt for overtakelse avtales mellom kjøper og
01.01.2024 ‑ Dokumentnr: 235874 ‑ Omnummerering ved selger.
kommuneendring
Tidligere: Knr:3030 Gnr:242 Bnr:56
Forsikring
Legalpant: Kommunen har legalpant som sikkerhet for Boligselgerforsikring: Selger har tegnet
betaling av kommunale avgifter og eventuell boligselgerforsikring som dekker selgers ansvar etter
eiendomsskatt. Legalpant er et pant som ikke vises i avhendingsloven begrenset oppad kr. 20 000 000,‑.
grunnboksutskriften, og har prioritet

---

[d150_d150 | Side [1]]
ytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse.
Om tomten
Eiendommen har en rela琀椀vt 昀氀at tomt. Tomten er opparbeidet med plen, beplantning og steinlagt gårdsplass.
Tinglyste/andre forhold
Det opplyses fra eier om at en liten del av hagen mot veien (ca. 10m²) er felleseie i sameiet. Vi har godkjenning fra

---

[d150_d150 | Side [1]]
dlikehold og
Omkostninger abonnement til tv og internett.
18 900 (Boligkjøperforsikring* (valgfritt))
Formuesverdi
162 500 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Formuesverdi primær: Kr 1 291 974 (2024)
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Formuesverdi sekundær: Kr 5 167 895 (2024)
163 590 (Omkostninger totalt (uten Boligkjøperforsikring))
182 490 (Omkostninger totalt (med Boligkjøperforsikring)) Info om formuesverdi: Skatteetaten

---

[d150_d150 | Side [1]]
nlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av

---

[d150_d150 | Side [1]]
/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Det ble utstedt et radonsertifikat i 2015, fra Norsk Radonrådgivning. Dette var før vi kjøpte boligen, men
Beskrivelse
dokumentasjon foreligger.
21.1 Radonmåling
År 2015
Verdi 27, 30, 39 og 65
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning

---

[d150_d150 | Side [1]]
tak fra Lillestrøm kommune 30.01.2026 godkjente bruksendring fra disponible rom til hoveddel, slik at de tre
Beskrivelse
soverommene i underetasjen nå er godkjent som soverom. Dette økte boarealet med 26,5 m2.
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei

---

[d150_d150 | Side [1]]
rderes e琀琀er gjeldende teknisk forskri昀琀 på over昀氀aten med spiss redskap eller lignende.
befarings琀椀dspunktet. De琀琀e gjelder blant annet:
i) sluk, te琀琀esjikt og fall på bad og vaskerom (våtrom)
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 25 av 26
83

## Side 84

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Tilstandsrapportens avgrensninger
UTTRYKK OG DEFINISJONER eiendommens verdi.
• Rom som ligger

---

[d150_d150 | Side [1]]
et oppad kr. 20 000 000,‑.
grunnboksutskriften, og har prioritet foran for eksempel Egenerklæringsskjema er vedlagt salgsoppgaven og
tinglyste banklån på eiendommen. interessenter oppfordres til å gjennomgå denne før bud
inngis.
Vei, vann og avløp
Boligkjøperforsikring: Kjøper har anledning til å tegne
Eiendommen er tilknyttet offentlig vann‑ og boligkjøperforsikring. Vedlagt i salgsoppgaven følger
avløpssystem. Stikkledningene fra eiendommen og ut til informasjon om Boligkjøperforsikring fra Söderberg

---

[d150_d150 | Side [1]]
n eller prisavslag.
særskilt avtale mellom partene om noe annet, jf.
avhendingsloven § 3‑5. Avtalerettslig
Partenes rettigheter og plikter reguleres av avtalen
En standard tilbehørsliste utarbeidet av Norges mellom partene, og all tilgjengelig dokumentasjon som
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og forelå for kjøper før handelen ble inngått. I tillegg gjelder
gjelder som utgangspunkt for hva som inkluderes i salget avhendingsloven. Det gjelder ulike avtalevilkår avhengig
– med mindre avvik

---

[d150_d150 | Side [1]]
e heftelser og rettigheter: På eiendommen er det
Sameie
tinglyst følgende heftelser og rettigheter som følger
Sameiet Indre Bråtenjordet eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Organisasjonsnummer: 935366860
3205/ 242/ 56:
Sameiets forsikringsselskap: Gjensidige 10.11.1982 ‑ Dokumentnr: 7788 ‑ Registrering av grunn
Denne matrikkelenhet opprettet fra:
Polisenummer fellesforsikring: 95439733 Knr:3205 Gnr:242 Bnr:6
01.01.2020 ‑ Dokumentnr: 1047494 ‑ Omnummerering

---

[d150_d150 | Side [1]]
srudveien
19
242/3 242/29
7
242/28 (
135
242
9
/27
Je
nsrudveien 17
242/1
!
242/76
242/52
242/49
242/83 9
242/89
1
4 0 11
0 25 50m Kartgrunnlag: Geovekst - 8193
Det tas forbehold om feil og mangler i kartet.
Kartet kan ikke benyttes i byggesaksbehandling.
96

## Side 97

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge

---

[d150_d150 | Side [1]]
verkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Henviser 琀椀l egenerklæringen for nærmere info.
Krav for rom 琀椀l varig opphold
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 22 av 26
80

## Side 81

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Befarings - og eiendomsopplysninger
Befaring
Dato Til stede

---

[d150_d150 | Side [1]]
forventes at eiendommer som har vært i
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.
Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må
innredning som anses som varig tilknyttet boligen, følger kjøper påregne, og dette vil normalt ikke gi grunnlag for
normalt med i handelen, med mindre det foreligger en reklamasjon eller prisavslag.
særskilt avtale mellom partene om noe annet,

---

[d150_d150 | Side [1]]
r erstatning må finansieringsplan, akseptfrist, overtakelsesdato og
kjøper selv dekke kostnader med inntil kr 10 000 (som en eventuelle forbehold som for eksempel usikker
egenandel). finansiering, salg av nåværende bolig ol. Normalt vil ikke
et bud med forbehold bli akseptert før forbeholdet er
Ikke‑forbruker – definisjon og vilkår: avklart. Konferer gjerne med megler før bud avgis.
Dersom kjøper er en juridisk enhet, eller en fysisk person
som handler i næringssammenheng, regnes kjøpet ikke Bud som har

---

[d150_d150 | Side [1]]
anda og terrasseplatting fremkommer ikke som barnerom, gjesterom eller kontor ‑ alle med
på tegninger. garderobeskap. Boligen har også et walk‑in closet med
‑ Opphøyd inngangsparti fremkommer ikke på tegninger. PAX‑innredning.
‑ Satt inn dør fra garasje til terrasseplatting/ hage.
Kjøper påtar seg risikoen for fremtidig bruk og eventuelle Bad/ wc/ vaskerom
pålegg fra det offentlige, samt alle kostnader forbundet Badet ble totalrenovert av fagfolk i 2017 og fremstår som
35

## Side 36

OM EIENDOMMEN
delikat

---

[d150_d150 | Side [1]]
 vurderes og ha normal forventet Betongtrapp fra byggeår ned til kjeller. Trapp fremstår
kvalitet og slitasjegrad i forhold til alder og med synlige avvik og behov for utbedrende tiltak.
utførelsesmetode. Ingen påviste eller synlige Utvendig garasje fra byggeår med støpt såle mot grunn
fuktindikasjon på befaringsdagen, men kommende lokale og yttervegger i reisverk bekledd med panel. Tekket
utbedringer kan ikke utelukkes på sikt. Vepsebol o.l må saltak. Leddet
evt. fjernes og tiltak mot skadedyr/ mus bør

---

[d150_d150 | Side [1]]
mråder på eiendommen med stående
Vurdering av avvik: vann.
• Det er påvist avvik som tilsier at det bør foretas tiltak på
enkelte dører. Tomteforhold > Utvendige vann‑ og avløpsledninger
• Enkelte av innvendige dører har en del slitasje. Vurdering av avvik:
Belistning på dør til vaskerom mangler og bør utbedres. • Mer enn halvparten av forventet brukstid er passert på
utvendige avløpsledninger.
Tekniske installasjoner > Vannledninger • Mer enn halvparten av forventet brukstid er passert på
Vurdering av

---

[d150_d150 | Side [1]]
jente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn.

---

[d150_d150 | Side [1]]
Wc-rom
vurderes å være i 琀椀lfredss琀椀llende funksjonell stand med normal
bruksslitasje og ingen unormale fuktverdier ble påvist i utsa琀琀e soner.
Årstall: 2017 Kilde: Eier
Vurdering av avvik:
• Toale琀琀rom har kun naturlig avtrekk fra rommet, NS 3600 krever
mekanisk avtrekk for å kunne gi TG 0/1.
Konsekvens/琀椀ltak
• Mekanisk avtrekk bør etableres på toale琀琀rom.
Besik琀椀gelse av røropplegg.
TEKNISKE INSTALLASJONER
Avløpsrør
Vannledninger Avløpsrør av plast fra byggeår og 2017 på badet. Alder er normalt i

---

[d150_d150 | Side [1]]
i
3. Er det mangler på røykvarsler i boligen iht. forskri昀琀skrav på
søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985?
Generell kommentar
Nei
Med tanke på fremlagt dokumentasjon og u琀昀ørte sjekkpunkter og
u琀昀ørt el-sjekk av Elvia i 2022 er anlegget vurdert 琀椀l TG 1, men det tas 4. Er det skader på røykvarslere?
særskilt forbehold for underliggende feil og mangler som ikke kan Nei
kontrolleres grunnet skjult i konstruksjonen.
TOMTEFORHOLD
Byggegrunn
Byggegrunn: Det presiseres at det ikke er foreta琀琀 noen

---

[d150_d150 | Side [1]]
er m.m i kjeller med synlig elde og
Utvendige panel fremstår med 琀椀ltenkt funksjon men det gjøres slitasje.
oppmerksom på alder. Kommende lokale utski昀琀inger av enkeltbord
kan ikke utelukkes på sikt. Ingen dokumentasjon på underliggende Etasjeskille av trebjelker og er med påliggende selvbærende
konstruksjoner ble fremlagt der u琀昀ørelser på underliggende plater/tregulv med påliggende over昀氀ate gulv e.l. Støpt såle mot
konstruksjoner er ukjent. grunn i kjelleretasje. Noe avvik på gulv ble observert og

---

[d150_d150 | Side [1]]
ekker i murte/ pussede fasader.
Vurdering av avvik:
• Åpninger i rekkverk er større enn dagens forskriftskrav Tomteforhold > Terrengforhold
til rekkverk i trapper. Vurdering av avvik:
• Det mangler håndløper på vegg i trappeløpet. • Det er påvist dårlig fall eller flatt terreng inn mot
Deler av rekkverk på midtre del av trappen mangler. grunnmur og dermed muligheter for større
vannansamlinger.
Innvendig > Innvendige dører ‑ 2 • Det er påvist områder på eiendommen med stående
Vurdering av avvik: vann.
• Det

---

[d150_d150 | Side [1]]
 i konstruksjonen.
tanke på alder og materialvalg ansees rør som 琀椀lfredss琀椀llende men
Hulltaking er foreta琀琀 ved/i Soverom. Fuktkvotemåling (vekt%) i
kommende modernisering av røropplegg kan heller ikke utelukkes
konstruksjonen ble målt 琀椀l 22.
på sikt. Waterguard i benkeskap på kjøkken fra 2017 for god sikring
av lekkasjevann.
Malt tretrapp fra byggeår dog ny琀琀 glassrekkverk i 2017. Trapp
Avløpsrør av plast fra byggeår og 2017 på badet. Alder er normalt i
fremstår med normal bruksslitasje og 琀椀ltenkt

---

[d150_d150 | Side [1]]
sjon
mm) Tiltenkt fall på gulv dog fravikende teknisk forskri昀琀. Det er og vurdert opp mot alder. Jevnlig service er anbefalt for god
plastsluk og smøremembran med ukjent u琀昀ørelse. Synlig mansje琀琀 i ivaretakelse. Ev.t kommende vedlikehold 琀椀lfaller ny eier.
sluk med 琀椀lfredss琀椀llende klemt te琀琀efunksjon. Elektrisk ven琀椀l.
Hulltaking er foreta琀琀 uten å påvise unormale forhold. Hulltaking er Sikringsskap med automatsikringer og jordfeilbryter plassert i kjeller.
foreta琀琀 ved/i Garderobe. Tg er gi琀琀 på

---

[d150_d150 | Side [1]]
en er bebodd av hjemmelshaver
Standard
Normal standard på bygget ut ifra alder/konstruksjon - jamfør
beskrivelse under konstruksjoner.
Vedlikehold
Bygget er jevnlig vedlikeholdt.
Besik琀椀gelse av taktekke.
UTVENDIG
Taktekking
Punktet må sees i sammenheng med Takkonstruksjon/Lo昀琀
Taktekking anses å ha sin 琀椀ltenkte funksjon uten nega琀椀ve avvik u琀昀ra
alder ta琀琀 i betraktning. Kommende lokale utski昀琀inger av stein er
påregnelig på sikt. Taktekke ble inspisert fra bakkenivå og er i hovedsak
vurdert opp mot

---

[d150_d150 | Side [1]]
n/ sluk oppgradert/ fornyet?
fortsatt en betydelig risiko for at våtrommets ‑ Ja, utført av faglærte i 2017.
konstruksjoner ikke tåler lekkasjer. Dette kan føre til
fuktskader på tilstøtende konstruksjoner. Kjenner du til om det er/ har vært utført arbeid på
Kostnadsestimat: 200 000 ‑ 500 000 el‑anlegget eller andre installasjoner (f.eks. oljetank,
sentralfyr, ventilasjon)?
39

## Side 40

OM EIENDOMMEN
‑ Ja, kun av faglært. Skjult anlegg i hele boligen i 2017, Verdi: 27, 30, 39 og 65
utført av TB Hansen.

---

[d150_d150 | Side [1]]
ag fra byggeår. Det var
‑ Ja. Det ble utstedt et radonsertifikat i 2015, fra Norsk oppholdsvær på befaringsdagen slik at renner og nedløps
Radonrådgivning. Dette var før vi kjøpte boligen, men funksjon er vanskelig å
dokumentasjon foreligger. stadfeste. Det gjøres oppmerksom på alder og det kan
derfor ikke utelukkes dårlige skjøter, gjennomrustete
Radonmåling beslag etc. Påregnelig med stedlige kommende
År: 2015 utskiftninger/ vedlikehold med tanke på alder.
40

## Side 41

OM EIENDOMMEN
Yttervegger i

---

[d150_d150 | Side [1]]
nalysen utvides 琀椀l også å omfa琀琀e
overvåke spesielt på grunn av fare for større skade eller følgeskade. For 琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. BEFARINGEN
Rapporten gir en vurdering av byggverk og bygningsdeler som
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige

---

[d150_d150 | Side [1]]
ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere

---

[d150_d150 | Side [1]]
 påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet

---

[d150_d150 | Side [1]]
er synlige fuk琀椀ndikasjon på befaringsdagen, men kommende Radon: Boligen har betongsåle fra byggeår uten radonsperre mot
lokale utbedringer kan ikke utelukkes på sikt. Vepsebol o.l må evt. grunn da de琀琀e ikke var påkrevet ved oppføringsåret. Det foreligger
昀樀ernes og 琀椀ltak mot skadedyr/mus bør all琀椀d all琀椀d u琀昀øres på eldre ingen radonmåling på boligen og bør u琀昀øres på generelt grunnlag.
takkonstruksjoner fra de琀琀e årstall. E琀琀erisolering av lo昀琀 fra de琀琀e Se vedlagt link for evt. kartlagt radonverdier i

---

[d150_d150 | Side [1]]
eår. Konstruksjonen framstår med Vegger: Malte 昀氀ater. Fliser på bad.
琀椀ltenkt funksjon der vurderingen blir gi琀琀 med grunnlag på visuell Gulv: Laminat og 昀氀iser i entré. Fliser på bad.
kontroll uten inngrep i konstruksjonen der det er ukjent for Himlinger: Malte 昀氀ater på innvendige takover昀氀ater. Over昀氀ater med
undertegnende vdr. videre forhold. normal bruksslitasje. Ingen skadeavvik ble registrert på
befaringsdagen. Over昀氀ater i boder m.m i kjeller med synlig elde og
Utvendige panel fremstår med

---

[d150_d150 | Side [1]]
Det er ingen eller liten lufting i nedre kant av kledning Synlig elde og slitasje. Himlingsplater buler.
mot grunnmur.
• Det er ingen musesperre i nedre kant av konstruksjon. Innvendig > Overflater ‑ Avvik
Vurdering av avvik:
Utvendig > Takkonstruksjon/ Loft • Det er avvik:
Vurdering av avvik: Overflater i boder m.m i kjeller med synlig elde og slitasje.
• Det er fra loft/ kryploft påvist indikasjoner på at det er
punktering av dampsperre, som medfører svekket effekt Innvendig > Etasjeskille/ gulv mot

---

[d150_d150 | Side [1]]
kjent. grunn i kjelleretasje. Noe avvik på gulv ble observert og variasjoner
vurderes som sa琀琀. Noe knirk i gulv ble registrert. Utover de琀琀e synes
Takstoler/sperrer fra byggeår med undertak av tre昀椀berplater. etasjeskille å ha 琀椀ltenkt funksjon uten konstruksjonsmessig nega琀椀v
Takkonstruksjon og lo昀琀 vurderes og ha normal forventet kvalitet og avvik av større betydning.
slitasjegrad i forhold 琀椀l alder og u琀昀ørelsesmetode. Ingen påviste
eller synlige fuk琀椀ndikasjon på befaringsdagen, men kommende Radon:

---

[d150_d150 | Side [1]]
 som er nevnt i standardlisten, men som ikke
• Det er registrert symptom på fuktskader. finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de
Bygningsdeler med TG3: er, uten garanti, med mindre det foreligger en gjeldende
Tomteforhold > Grunnmur og fundamenter ‑ 2 garanti fra produsent eller leverandør.
Vurdering av avvik:
• Det er registrert setningsskader/ store riss/ sprekker. Kjøper aksepterer at det kan forekomme hull og merker
Konsekvens/

---

[d150_d150 | Side [1]]
 at det kan
Økonomi
forekomme variasjon i avgiftene som følge av forbruk og
eventuelle kommunale endringer av gebyr/ avgift
Prisantydning
Kr 6 500 000
Andre kostnader:
Andre utgifter: Utover det som er nevnt under punktet
Omkostning kjøper
«kommunale avgifter», påløper kostnader til for eksempel
6 500 000,00 (Prisantydning) velforening (brøyting ca. 1 500,‑ pr. sesong), strøm, fyring/
brensel, forsikring, innvendig/ utvendig vedlikehold og
Omkostninger abonnement til tv og internett.
18 900

---

[d150_d150 | Side [1]]
tom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
byggverk eller en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse av på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
avvik. Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i

---

[d150_d150 | Side [1]]
tekst ekstrahert)

## Side 24

(Ingen tekst ekstrahert)

## Side 25

(Ingen tekst ekstrahert)

## Side 26

(Ingen tekst ekstrahert)

## Side 27

(Ingen tekst ekstrahert)

## Side 28

(Ingen tekst ekstrahert)

## Side 29

(Ingen tekst ekstrahert)

## Side 30

(Ingen tekst ekstrahert)

## Side 31

(Ingen tekst ekstrahert)

## Side 32

HAVRESTUBBEN 6
OM EIENDOMMEN

## Side 33

OM EIENDOMMEN
OM EIENDOMMEN
tilsynsavgift. Det gjøres oppmerksom på at det kan
Økonomi
forekomme variasjon i avgiftene som følge av

---

[d150_d150 | Side [1]]
jøper aksepterer at det kan forekomme hull og merker
Konsekvens/ tiltak etter montering av inventar og utstyr som ikke er en del
• Lokal utbedring må utføres. av overdragelsen.
Drenering på oversiden må utbedres. Pris bør innhentes
for faktiske kostander.
Eiendommens
Kostnadsestimat: 20 000 ‑ 100 000
tilstand
Våtrom > Kjelleretasje > Vaskerom > Generell
Vurdering av avvik: Takstmann: Takstportalen Aleksander Olsen AS
• Våtrommet må oppgraderes for å tåle normal bruk etter
dagens krav. Type takst avholdt av

---

[d150_d150 | Side [1]]
ingskostnadene anbefales y琀琀erligere undersøkelser og
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
gis for TG3, der de琀琀e er mulig.
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 4 av 26
62

## Side 63

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Beskrivelse av eiendommen
Det har bli琀琀 utarbeidet en 琀椀lstandsrapport på bolig med byggeår de琀琀e byggeår der kommende behov for

---

[d150_d150 | Side [1]]
Initialer selger: KG, LCKG 3
91005240
:ecnerefer
tnemucoD
55

## Side 56

28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: KG, LCKG 4
91005240
:ecnerefer
tnemucoD
56

## Side 57

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress

---

[d150_d150 | Side [1]]
 veien (ca. 10m²) er felleseie i sameiet. Vi har godkjenning fra styret i sameie om at vi har
bruksre琀琀 på delen. Vi har rammet inn hagen med hekk, som inkluderer denne delen e琀琀er godkjenning fra sameiet.
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Gjensidige forsikring 95439733
Kommentar
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 23 av 26
81

## Side 82

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205

---

[d150_d150 | Side [1]]
 (med Boligkjøperforsikring)) Info om formuesverdi: Skatteetaten beregner en
boligverdi (beregnet markedsverdi for bolig) basert på
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ SSBs statistiske opplysninger om omsatte boliger. I
6 663 590 (Totalpris inkl. omkostninger (uten beregningen tas det hensyn til din boligs beliggenhet,
Boligkjøperforsikring)) areal, byggeår og type bolig. Formuesverdien er en
6 682 490 (Totalpris inkl. omkostninger (med prosentandel av denne boligverdien.For mer

---

[d150_d150 | Side [1]]
g sentrumsfasiliteter.
Eiendomsskatt
Sørumsand tilbyr skoler for alle alderstrinn, gode
Kr 534,‑ (2025) barnehagetilbud og et godt utbygd kollektivtilbud med
både buss og togforbindelse. Fra boligen er det kort
avstand til skole, lekeplasser og idrettsanlegg, noe som
Kommunale avgifter
gjør hverdagen enkel og praktisk for barnefamilier.
Kr 28 027 (2026)
Sørumsand IF har et bredt aktivitetstilbud innen blant
Informasjon: De kommunale avgiftene omfatter vann‑ og annet allidrett, fotball, håndball, svømming

---

[d150_d150 | Side [1]]
ele boligen i 2017, Verdi: 27, 30, 39 og 65
utført av TB Hansen. I tillegg ble det installert elbil‑lader i
2021 av Glomma Er det andre forhold av betydning ved eiendommen som
Elektro. kan være relevant for kjøper å vite om (f.eks. rasfare,
tinglyste forhold eller private avtaler)?
Foreligger det samsvarserklæring (i henhold til forskrift ‑ Ja. En liten del av hagen mot veien (ca. 10m2) er
om elektriske lavspenningsanlegg)? felleseie i sameiet. Vi har godkjenning fra styret i sameie
‑ Ja. om at vi har

---

[d150_d150 | Side [1]]
konstruksjon fra dette
byggeår der kommende behov for utbedrende tiltak Innvendige overflater:
tilfaller ny eier. Loftet var lagret med løsøre og inventar på Vegger: Malte flater. Fliser på bad.
befaringsdagen. Alle flater lot seg derfor ikke å Gulv: Laminat og fliser i entré. Fliser på bad.
kontrolleres der det ikke tas ansvar for skjulte forhold og Himlinger: Malte flater på innvendige takoverflater.
avvik. Overflater med normal bruksslitasje. Ingen skadeavvik
Fabrikkmalte kjellervinduer med isolerglass

---

[d150_d150 | Side [1]]
lom eiendommen gnr. 42, bnr. 6 og
eiendommene gnr. 4, bnr. 28 og 29.
Gnr. 42, bnr. 6, Bråtenjordet. Søknad om 356/82 09.09.82.
fradeling av eneboligtomter.
94

## Side 95

Plan nr.45
Stadfestet: 16.12.1980.
SØRUM. REGULERINGSBESTEMMELSER FOR OMRÅDENE LANGS RIKSVEG
172 FRA SØRUMSAND SKOLE TIL ORDERUDVEIEN.
§ 1
Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne grensen skal bebyggelsen i
prinsippet plasseres som vist på planen (se også § 3.a).
§ 2 Områder for boliger med utn. grad

---

[d150_d150 | Side [1]]
lesanlegg i områdets nordlige del. Det kan
imidlertid godkjennes garasjer i tilknytning til hver enkelt bolig dersom bebyggelsesplanen ellers tilfredstiller
reguleringsplanens rammer vedr. utnyttelsesgrad, bilfrie veger, lekeplass, biloppstillingsplasser m.v.
§ 4 Områder for offentlig bebyggelse
Bebyggelsen kan oppføres i inntil 2 etasjer, evt. med sokkeletasje. Bygningsrådet kan kreve utarbeidet
bebyggelsesplan med høydeoppriss for området i sin helhet eller deler av det, før anmeldelsen av en

---

[d150_d150 | Side [1]]
r området i sin helhet eller deler av det, før anmeldelsen av en enkelt
byggesak behandles.
§ 5 Fellesbestemmelser
a. Bygningsrådet skal ved behandlingen av byggemeldingen påse at bebyggelsen får en god form og
materialbruk. Bygninger i samme naboskap skal plasseres slik at de tilgodeser utsikt og solinnfall for de
enkelte utomhusarealer.
b. Avkjørsler skal anlegges som vist på planen, og være oversiktlige.
c. Innenfor frisiktområdene må ikke terrenget planeres eller beplantes i strid med veglovens §§ 29

---

[d150_d150 | Side [1]]
inkelen skal godkjennes av bygningsrådet. Dette gjelder også for tilbygg.
§ 3 Område for boliger med u.grad 0,20-0,25 (6,3 daa)
a. Bebyggelse og tomtegrenser skal plasseres i henhold til detaljert bebyggelsesplan for hele området under ett.
Slik plan skal godkjennes av bygningsrådet.
b. Området kan bebygges med atriumhus, rekkehus eller annen sammenhengende bebyggelse.
c. Garasjer og biloppstillingsplasser bør fortrinnsvis oppføres som fellesanlegg i områdets nordlige del. Det kan
imidlertid godkjennes

---

[d150_d150 | Side [1]]
ldre vinduer er større betydning.
påregnelig som følge av vanlig slitasje der det videre
henvises til generelle levetidsbetraktninger.
Øvrig
Fabrikkmalt balkongdør med isolerglass fra 2017. Dør
41

## Side 42

OM EIENDOMMEN
Eiendommen er regulert til frittliggende
informasjon
småhusbebyggelse.
Gjeldende reguleringsplan:
Adresse
Områdene langs RV 172 fra Sørumsand skole til
Havrestubben 6, 1920 SØRUMSAND Tårnveien.
Plan nr. 45
Gnr. 242, bnr. 56, ideell andel 1/ 1 Stadfestet 16.12.1980.
Gnr. 242, bnr. 78,

---

[d150_d150 | Side [1]]
ghet
90

## Side 91

91

## Side 92

92

## Side 93

93

## Side 94

REGULERINGSPLAN
OMRÅDENE LANGS RV 172 FRA SØRUMSAND SKOLE TIL
TÅRNVEIEN.
Arkiv nr. P 45 45
Egengodkjent dato Stadfestet: 16.12.1980.
ARKIVERTE KART:
A - ORIGINAL TRANSPARENT MED EVT. ENDRINGER
B - STADFESTET PLAN - ORIGINALDOKUMENT
C - TRANSPARENT KOPI AV STADFESTET PLAN
D -
ENDRINGER:
Sak nr. Vedtatt dato Merknader
Sørumsand. Søknad om grensejustering 233/83 17.06.82.
mellom eiendommen gnr. 42, bnr. 6 og
eiendommene gnr. 4, bnr. 28 og

---

[d150_d150 | Side [1]]
lyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan

---

[d150_d150 | Side [1]]
le Er du som forbruker misfornøyd med bygningssakkyndiges arbeid eller
godkjennelse hos kommunen for den aktuelle bruken, uten at de琀琀e får opptreden ved taksering av bolig eller fri琀椀dshus, se
betydning for om arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet www.takstklagenemnd.no for mer informasjon
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
• Eiendommens markedsverdi kan ikke baseres på en rent

---

[d150_d150 | Side [1]]
e terrenget planeres eller beplantes i strid med veglovens §§ 29 og 31.
Flettverksgjerde mot veg kan oppføres med høyde inntil 0,8 m over kjørebanen.
d. Høyde på hus og grunnmur skal godkjennes av bygningsrådet.
e. Unntak fra disse reguleringsbestemmelser kan, hvor særlige grunner taler for det. gjøres av bygningsrådet
innenfor rammen av bygningsloven med vedtekter.
Stadfestet den 16.12.1980
Fylkesmannen i Oslo og Akershus
Etter fullmakt: Reidun Jardam.
95

## Side 96

±
Eiendomsgrenser
Middels - høy

---

[d150_d150 | Side [1]]
på planen (se også § 3.a).
§ 2 Områder for boliger med utn. grad U=0,1-0,15
a. Bebyggelsen skal være åpen og bestå av bolighus i inntil 2 etasjer.
b. Garasjer kan oppføres i 1 etasje, og skal være tilpasset bolighuset m.h.t form, farge og materialbruk.
Plasseringen skal vises på situasjonsplanen sammen med byggemeldingen for bolighuset.
Utenom garasje skal det på egen grunn være oppstillingsplass for 1 bil.
c. Bygningene skal ha saltak. Takvinkelen skal godkjennes av bygningsrådet. Dette gjelder også for

---

[d150_d150 | Side [1]]
inger. Unngå lagring mot y琀琀ervegg er også et anbefalt
Vurdering av avvik: 琀椀ltak. Ingen typisk kjellerlukt ble registrert på befaringsdagen for øvrig.
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med
radonsperre.
Konsekvens/琀椀ltak
Det bør u琀昀øres radonmålinger for avklaring av fak琀椀ske radonverdier og
evt. behov for videre 琀椀ltak. Det opplyses for øvrig om u琀昀ørt
radonmålinger i 2015 med verdier under gi琀琀 grenser.
Pipe og ildsted
Pipeløp fra byggeår. Pipeløp er formelt ikke

---

[d150_d150 | Side [1]]
ger ingen anbefalt at konstruksjoner under grunn har en pustende konstruksjon.
radonmåling på boligen og bør u琀昀øres på generelt grunnlag. Se vedlagt Grunnet trefast bunnsvill og ingen synlige skader rundt
link for evt. kartlagt radonverdier i området. hulltakingspunktet er det gi琀琀 TG 2 iht. retningslinjer NS3600, men det
h琀琀p://geo.ngu.no/kart/radon/ kan ikke utelukkes videre utvikling over 琀椀d der TG 3 kan bli aktuelt for
frem琀椀dig vurderinger. Unngå lagring mot y琀琀ervegg er også et anbefalt
Vurdering

---

[d150_d150 | Side [1]]
r i 琀椀lstøtende konstruksjoner. Sluk fra byggeår der
geotekniske undersøkelser og derved er det kun svært begrensede
leve琀椀d vurderes som utgå琀琀. Naturlig ven琀椀lasjon. Fliser på gulvet og
muligheter for nøyak琀椀g kunnskap om byggegrunn og stabilitet som
tapet på vegg. Utslagsvask og dusjkabine琀琀 samt opplegg 琀椀l
kan gjøres. Grunnet begrenset kjennskap 琀椀l grunnforhold er
vaskemaskin. Tg 3 er sa琀琀 grunnet at badet er fra opprinnelig før
byggegrunn ikke vurdert. Det oppfordres 琀椀l alle parter av

---

[d150_d150 | Side [1]]
 under befaringen,
godkjente bruksendring fra disponible rom til hoveddel, betyr ikke dette at det ikke foreligger skader som en
slik at de tre soverommene i underetasjen nå er godkjent besiktigelse på taket kan avdekke. Vær oppmerksom på
som soverom. Dette økte boarealet med 26,5 m2. denne risikoen. En undersøkelse på taket kan utføres av
en fagperson under tilstrekkelige sikkerhetsforhold.
Er det foretatt radonmåling? Nedløp, renner og beslag fra byggeår. Det var
‑ Ja. Det ble utstedt et radonsertifikat

---

[d150_d150 | Side [1]]
 lo昀琀 fra de琀琀e Se vedlagt link for evt. kartlagt radonverdier i området.
årstall er et anbefalt 琀椀ltak. Lu昀琀lekkasjer og ute琀琀e overganger h琀琀p://geo.ngu.no/kart/radon/
generelt ble påvist og er normalt å forventet med konstruksjon fra Pipeløp fra byggeår. Pipeløp er formelt ikke vurdert og det
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 5 av 26
63

## Side 64

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM

---

[d150_d150 | Side [1]]
vendig > Radon
• Det er påvist at enkelte vinduer er vanskelig å åpne/ Vurdering av avvik:
lukke. • Det er ikke foretatt radonmålinger, og bygget er heller
• Det er påvist avvik rundt innsettingsdetaljer. ikke utført med radonsperre.
• Karmene i vinduer er slitte og det er sprekker i trevirket.
Innvendig > Pipe og ildsted
Utvendig > Dører ‑ 2 Vurdering av avvik:
Vurdering av avvik: • Ildfast plate mangler på gulvet under sotluke/ feieluke på
• Det er påvist avvik rundt innsettingsdetaljer. pipe.
• Det er

---

[d150_d150 | Side [1]]
, som medfører svekket effekt Innvendig > Etasjeskille/ gulv mot grunn
av dampsperrefunksjonen. Vurdering av avvik:
• Det er påvist avvik rundt gjennomføringer i takflaten. • Det er målt høydeforskjell på mellom 15‑30 mm
• Undertaket er misfarget. gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn
Stedvis mindre soppdannelser. Stedvis fuktflekker. i standardens krav til
godkjente måleavvik.
Utvendig > Vinduer ‑ 2
Vurdering av avvik: Innvendig > Radon
• Det er påvist at enkelte vinduer er vanskelig å

---

[d150_d150 | Side [1]]
g før
byggegrunn ikke vurdert. Det oppfordres 琀椀l alle parter av interesse
1997 og regler fra ny avhendingslov 2022 med synlige avvik på de
for nærmere utredning av grunnforhold og byggegrunn.
tekniske u琀昀ørelser. Badet er dog normalt fungerende for dagligdags
bruk iht. eiers opplysninger. Hulltaking er foreta琀琀 og det er påvist
Drenering: Grunnet skjult i byggegrunn er materialvalg ikke mulig å
avvik i hulltakingen. Hulltaking er foreta琀琀 ved/i Vaskerom.
konstatere. Drenering ble kontrollert fra bakkeplan

---

[d150_d150 | Side [1]]
琀es 琀椀l lagring, og tekniske rom. Bruken av et
• Utvidet fuktsøk (hulltaking): Boring av hull for inspeksjon og fuktmåling i rom på befarings琀椀dspunktet har betydning for om rommet de昀椀neres som P
risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede -ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
kjellervegger og eventuelt i oppforede kjellergulv. teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
bruken, uten at de琀琀e vil få betydning for valg av

---

[d150_d150 | Side [1]]
 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Beskrivelse av eiendommen
forutse琀琀es at de branntekniske krav er kontrollert og godkjent av soner.
det stedlige brann og feievesen. Ingen ildsted er for øvrig montert.
TEKNISKE INSTALLASJONER Gå 琀椀l side
Rom under terreng: Gulvet har laminat. Veggene har plater.
Røropplegg av eldre kobberrør og nyere pex- rør fra 2017. Med
Hulltaking er foreta琀琀 og det er påvist avvik i konstruksjonen.
tanke på alder og materialvalg ansees rør som

---

[d150_d150 | Side [1]]
on
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 12 av 26
70

## Side 71

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Tilstandsrapport
Radon: Boligen har betongsåle fra byggeår uten radonsperre mot grunn Fjerning av dampsperre på nedre del av vegg bør u琀昀øres da det er
da de琀琀e ikke var påkrevet ved oppføringsåret. Det foreligger ingen anbefalt at konstruksjoner under grunn har en pustende

---

[d150_d150 | Side [1]]
Utvendige vannledninger er av
plast (PEL) og er fra 1983. Det er o昀昀entlig vannforsyning via private
s琀椀kkledninger. Det utvendige røranlegget er ikke kontrollert av den
grunn at de琀琀e krever spesielt utstyr og kompetanse. Det bemerkes
at bunnledninger ikke er kontrollert. Det oppfordres 琀椀l
kameraundersøkelse på generelt grunnlag for fak琀椀sk 琀椀lstand på
avløpsrør.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Enebolig
• Det foreligger godkjente og byggemeldte tegninger,

---

[d150_d150 | Side [1]]
få 琀椀lstandsgrad 0 eller 1 må
Utstyr for varsling og slukking av brann
dreneringen ski昀琀es ut, men 琀椀dspunktet for når de琀琀e er nødvendig er
vanskelig å si noe om.
• Tiltak for redrenering rundt boligen kan ikke utelukkes.
Oppdragsnr.: 19291-2336 Befaringsdato: 19.12.2025 Side: 18 av 26
76

## Side 77

Havrestubben 6, 1920 SØRUMSAND Takstportalen Aleksander Olsen AS
Gnr 242 - Bnr 56 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Tilstandsrapport
Over昀氀atevann kan komme bak fuktsikring og

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Setningsskader og store riss/sprekker i grunnmur og fundamenter (TG3). Drenering på oversiden må utbedres. Kostnadsestimat: 20 000 – 100 000 kr.",
      "evidence": [
        "Det er registrert setningsskader/ store riss/ sprekker.",
        "Lokal utbedring må utføres. Drenering på oversiden må utbedres. Pris bør innhentes for faktiske kostander.",
        "Kostnadsestimat: 20 000 ‑ 100 000",
        "Bygningsdeler med TG3: Tomteforhold > Grunnmur og fundamenter ‑ 2"
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Vaskerom i kjeller (TG3) må totaloppgraderes. Sluk fra byggeår med utgått levetid, naturlig ventilasjon, og badet er fra opprinnelig før 1997. Kostnadsestimat: 200 000 – 500 000 kr.",
      "evidence": [
        "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
        "Sluk fra byggeår der levetid vurderes som utgått.",
        "Tg 3 er satt grunnet at badet er fra opprinnelig før 1997 og regler fra ny avhendingslov 2022 med synlige avvik på de tekniske utførelser.",
        "Kostnadsestimat: 200 000 ‑ 500 000",
        "Hulltaking er foretatt og det er påvist avvik i hulltakingen. Hulltaking er foretatt ved/i Vaskerom."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Dårlig terrengfall mot grunnmur og stående vann på eiendommen. Risiko for vanninntrenging og fuktskader i konstruksjonen.",
      "evidence": [
        "Det er påvist dårlig fall eller flatt terreng inn mot grunnmur og dermed muligheter for større vannansamlinger.",
        "Det er påvist områder på eiendommen med stående vann.",
        "Tiltak for redrenering rundt boligen kan ikke utelukkes.",
        "Overflatevann kan komme bak fuktsikring."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Utvendige avløpsledninger og vannledninger har passert mer enn halvparten av forventet brukstid. Utvendige vannledninger av plast (PEL) fra 1983. Kameraundersøkelse anbefales.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
        "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
        "Utvendige vannledninger er av plast (PEL) og er fra 1983.",
        "Det oppfordres til kameraundersøkelse på generelt grunnlag for faktisk tilstand på avløpsrør.",
        "Det bemerkes at bunnledninger ikke er kontrollert."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Ingen radonsperre i boligen, og radonmåling er ikke utført på boligen. Eksisterende radonmåling er fra 2015 (verdier 27, 30, 39 og 65 Bq/m³) og ble utført av tidligere eier. Verdien på 65 Bq/m³ nærmer seg tiltaksgrensen på 100 Bq/m³.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Boligen har betongsåle fra byggeår uten radonsperre mot grunn da dette ikke var påkrevet ved oppføringsåret.",
        "Det foreligger ingen radonmåling på boligen og bør utføres på generelt grunnlag.",
        "Radonmåling År 2015 Verdi 27, 30, 39 og 65",
        "Det opplyses for øvrig om utført radonmålinger i 2015 med verdier under gitt grenser."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Punktering av dampsperre på loft/kryploft, misfarging og soppdannelser på undertak. Risiko for fuktskader i takkonstruksjonen.",
      "evidence": [
        "Det er fra loft/ kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen.",
        "Det er påvist avvik rundt gjennomføringer i takflaten.",
        "Undertaket er misfarget. Stedvis mindre soppdannelser. Stedvis fuktflekker.",
        "Luftlekkasjer og utette overganger generelt ble påvist og er normalt å forvente med konstruksjon fra dette årstall."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R7",
      "description": "Ingen lufting og ingen musesperre i nedre kant av kledning mot grunnmur. Risiko for skadedyr og fuktskader i veggkonstruksjonen.",
      "evidence": [
        "Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
        "Det er ingen musesperre i nedre kant av konstruksjon.",
        "Vepsebol o.l må evt. fjernes og tiltak mot skadedyr/mus bør alltid utføres på eldre takkonstruksjoner fra dette årstall."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Rekkverk i trapp har åpninger større enn dagens forskriftskrav, og det mangler håndløper på vegg i trappeløpet. Deler av rekkverk på midtre del av trappen mangler. Sikkerhetsrisiko.",
      "evidence": [
        "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i trapper.",
        "Det mangler håndløper på vegg i trappeløpet.",
        "Deler av rekkverk på midtre del av trappen mangler."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R9",
      "description": "Toalettrom har kun naturlig avtrekk, men NS 3600 krever mekanisk avtrekk. Mekanisk avtrekk bør etableres.",
      "evidence": [
        "Toalettrom har kun naturlig avtrekk fra rommet, NS 3600 krever mekanisk avtrekk for å kunne gi TG 0/1.",
        "Mekanisk avtrekk bør etableres på toalettrom."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Ildfast plate mangler på gulvet under sotluke/feieluke på pipe. Brannfarlig avvik.",
      "evidence": [
        "Ildfast plate mangler på gulvet under sotluke/ feieluke på pipe."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Vinduer med avvik: vanskelig å åpne/lukke, avvik rundt innsettingsdetaljer, slitte karmer og sprekker i trevirket. Eldre vinduer med påregnelig utskiftingsbehov.",
      "evidence": [
        "Det er påvist at enkelte vinduer er vanskelig å åpne/ lukke.",
        "Det er påvist avvik rundt innsettingsdetaljer.",
        "Karmene i vinduer er slitte og det er sprekker i trevirket.",
        "Eldre vinduer er påregnelig som følge av vanlig slitasje."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Høydeforskjell på 15–30 mm i etasjeskille/gulv mot grunn. Avvik i henhold til standardens krav til godkjente måleavvik.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15‑30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Støpt såle mot grunn i kjelleretasje. Noe avvik på gulv ble observert og variasjoner vurderes som satt."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "En del av hagen (ca. 10 m²) er felleseie i sameiet. Kjøper overtar kun bruksrett, ikke eiendomsrett til denne delen. Bruksretten er basert på godkjenning fra sameiet og er ikke tinglyst som en permanent rettighet.",
      "evidence": [
        "En liten del av hagen mot veien (ca. 10m2) er felleseie i sameiet. Vi har godkjenning fra styret i sameie om at vi har bruksrett på delen.",
        "Vi har rammet inn hagen med hekk, som inkluderer denne delen etter godkjenning fra sameiet.",
        "Det opplyses fra eier om at en liten del av hagen mot veien (ca. 10m²) er felleseie i sameiet."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R14",
      "description": "Bruksendring av tre soverom i underetasjen ble godkjent så sent som 30.01.2026, noe som indikerer at rommene tidligere var ulovlig brukt som soverom. Kjøper bør undersøke om alle forhold nå er i orden.",
      "evidence": [
        "Vedtak fra Lillestrøm kommune 30.01.2026 godkjente bruksendring fra disponible rom til hoveddel, slik at de tre soverommene i underetasjen nå er godkjent som soverom. Dette økte boarealet med 26,5 m2.",
        "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig.",
        "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Reguleringsplan fra 1980 (Plan nr. 45) er svært gammel. Det kan foreligge fremtidige reguleringsendringer eller offentlige vedtak som kan påvirke eiendommens bruk og omgivelser.",
      "evidence": [
        "Gjeldende reguleringsplan: Områdene langs RV 172 fra Sørumsand skole til Tårnveien. Plan nr. 45. Stadfestet 16.12.1980.",
        "Eiendommen er regulert til frittliggende småhusbebyggelse."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R16",
      "description": "Pipeløp fra byggeår er formelt ikke vurdert i tilstandsrapporten. Ukjent tilstand på pipe kan innebære brannrisiko.",
      "evidence": [
        "Pipeløp fra byggeår. Pipeløp er formelt ikke vurdert.",
        "Det forutsettes at de branntekniske krav er kontrollert og godkjent av det stedlige brann og feievesen."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R17",
      "description": "Elektrisk anlegg er vurdert til TG1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult konstruksjon. Siste el-tilsyn var i 2022.",
      "evidence": [
        "Med tanke på fremlagt dokumentasjon og utførte sjekkpunkter og utført el-sjekk av Elvia i 2022 er anlegget vurdert til TG 1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult i konstruksjonen.",
        "Skjult anlegg i hele boligen i 2017, utført av TB Hansen."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R18",
      "description": "Nedløp, renner og beslag er fra byggeår. Risiko for dårlige skjøter og gjennomrustede beslag. Påregnelig med utskiftninger og vedlikehold.",
      "evidence": [
        "Nedløp, renner og beslag fra byggeår. Det var oppholdsvær på befaringsdagen slik at renner og nedløps funksjon er vanskelig å stadfeste.",
        "Det gjøres oppmerksom på alder og det kan derfor ikke utelukkes dårlige skjøter, gjennomrustete beslag etc. Påregnelig med stedlige kommende utskiftninger/vedlikehold med tanke på alder."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R19",
      "description": "Fuktkvote på 22 % (vekt%) målt i konstruksjonen ved hulltaking i soverom. Forhøyet fuktverdi kan indikere fuktproblemer i veggen.",
      "evidence": [
        "Hulltaking er foretatt ved/i Soverom. Fuktkvotemåling (vekt%) i konstruksjonen ble målt til 22.",
        "Grunnet trefast bunnsvill og ingen synlige skader rundt hulltakingspunktet er det gitt TG 2 iht. retningslinjer NS3600, men det kan ikke utelukkes videre utvikling over tid der TG 3 kan bli aktuelt for fremtidige vurderinger."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R20",
      "description": "Betongtrapp fra byggeår ned til kjeller fremstår med synlige avvik og behov for utbedrende tiltak.",
      "evidence": [
        "Betongtrapp fra byggeår ned til kjeller. Trapp fremstår med synlige avvik og behov for utbedrende tiltak."
      ],
      "source_documents": [
        "d150_d150"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    }
  ],
  "re_retrieval_queries": [
    "drenering tilstand rundt grunnmur kjeller fukt",
    "garasje tilstand avvik konstruksjon",
    "innvendige overflater kjeller boder slitasje skader",
    "utvendig panel kledning tilstand avvik",
    "bruksendring soverom underetasje lovlighet ferdigattest",
    "dampsperre fjerning kjellervegger pustende konstruksjon tiltak",
    "sameie fellesgjeld vedtak økte kostnader",
    "skjeggkre sopp råte insekter skadedyr bolig"
  ],
  "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – TG3 Grunnmur/fundamenter (0.97):** Meget godt støttet. Direkte TG3-klassifisering med kostnadsestimat i rapporten. Beholdes uendret.\n\n**R2 – TG3 Vaskerom kjeller (0.97):** Meget godt støttet. TG3 eksplisitt begrunnet med alder (før 1997), avhendingslov 2022, utgått sluk og hulltakingsavvik. Beholdes uendret.\n\n**R3 – Terrengfall/stående vann (0.95):** Godt støttet av to separate avvikspunkter i rapporten, samt referanse til redrenering. Beholdes uendret.\n\n**R4 – Utvendige ledninger (0.93):** Godt støttet. PEL-rør fra 1983 er dokumentert, halvparten av brukstid passert, kameraundersøkelse anbefalt, bunnledninger ikke kontrollert. Beholdes uendret.\n\n**R5 – Radon (0.92 → 0.90):** Støttet, men med en viktig nyanse: rapporten sier \"verdier under gitt grenser\" for 2015-målingene, mens den høyeste verdien (65 Bq/m³) faktisk er under tiltaksgrensen på 100 Bq/m³. Risikoen er reell (ingen radonsperre, ingen ny måling), men alvorlighetsgraden er noe lavere enn opprinnelig angitt. Confidence justeres marginalt ned til 0.90.\n\n**R6 – Dampsperre/loft (0.92):** Godt støttet med tre separate avvikspunkter (punktering, gjennomføringer, misfarging/sopp/fuktflekker). Beholdes uendret.\n\n**R7 – Lufting/musesperre (0.90):** Godt støttet. Beholdes uendret.\n\n**R8 – Rekkverk/trapp (0.93):** Meget godt støttet med tre konkrete avvik. Sikkerhetsrisiko er reell. Beholdes uendret.\n\n**R9 – Toalettrom ventilasjon (0.88):** Godt støttet. Beholdes uendret.\n\n**R10 – Ildfast plate pipe (0.88):** Støttet av ett direkte avvikspunkt. Brannrisiko er reell. Beholdes uendret.\n\n**R11 – Vinduer (0.87):** Godt støttet med fire avvikspunkter. Beholdes uendret.\n\n**R12 – Høydeforskjell gulv (0.85):** Støttet. Tilstandsgrad 2 er eksplisitt nevnt. Beholdes uendret.\n\n**R13 – Felleseie hage (0.88):** Godt støttet. Bruksretten er bekreftet ikke tinglyst som permanent rettighet – kun styregodkjenning. Beholdes uendret.\n\n**R14 – Bruksendring soverom (0.85):** Støttet. Vedtaket er datert 30.01.2026 (svært nylig), noe som bekrefter at rommene var ulovlig brukt som soverom frem til nylig. Beholdes uendret.\n\n**R15 – Gammel reguleringsplan (0.72 → 0.65):** Svakt støttet. Dokumentene bekrefter at planen er fra 1980, men det er ingen konkrete indikasjoner på pågående eller planlagte reguleringsendringer. Dette er en generell risiko som gjelder de fleste eldre eiendommer. Confidence justeres ned til 0.65.\n\n**R16 – Pipeløp ikke vurdert (0.80):** Støttet. Pipeløp er eksplisitt nevnt som \"formelt ikke vurdert\". Brannrisiko er reell. Beholdes uendret.\n\n**R17 – El-anlegg forbehold (0.78 → 0.75):** Støttet, men TG1 er gitt og el-sjekk ble utført i 2022. Risikoen er reell men begrenset. Confidence justeres marginalt ned til 0.75.\n\n**R18 – Nedløp/renner/beslag (0.82):** Støttet. Funksjon ikke verifisert pga. oppholdsvær. Beholdes uendret.\n\n**R19 – Fuktkvote 22% soverom (0.85):** Støttet. TG2 er gitt, men med eksplisitt advarsel om mulig fremtidig TG3. Beholdes uendret.\n\n**R20 – Betongtrapp kjeller (0.83):** Støttet av ett direkte avvikspunkt. Beholdes uendret.\n\n**Manglende risikoer identifisert:**\n1. Dampsperre på kjellervegger bør fjernes (pustende konstruksjon anbefalt) – nevnt i rapporten men ikke fanget opp som egen risiko.\n2. Garasje fra byggeår – tilstand ikke nærmere vurdert i de fremlagte dokumentchunkene, men nevnt.\n3. Innvendige overflater i kjeller/boder med synlig elde og slitasje – nevnt men ikke som egen risiko.\n4. Sameiet – ingen informasjon om fellesgjeld eller vedtak om økte kostnader er fremkommet, bør undersøkes nærmere.\n\nForeslår re-retrieval-spørsmål for å avklare disse forholdene.\n"
}

## Raw Response
```json
{
  "id": "msg_01Js6SCVL46u8cX1bvxKjyKa",
  "container": null,
  "content": [
    {
      "id": "toolu_01W88E39MPZasx3XXd7HoiBg",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Setningsskader og store riss/sprekker i grunnmur og fundamenter (TG3). Drenering på oversiden må utbedres. Kostnadsestimat: 20 000 – 100 000 kr.",
            "evidence": [
              "Det er registrert setningsskader/ store riss/ sprekker.",
              "Lokal utbedring må utføres. Drenering på oversiden må utbedres. Pris bør innhentes for faktiske kostander.",
              "Kostnadsestimat: 20 000 ‑ 100 000",
              "Bygningsdeler med TG3: Tomteforhold > Grunnmur og fundamenter ‑ 2"
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Vaskerom i kjeller (TG3) må totaloppgraderes. Sluk fra byggeår med utgått levetid, naturlig ventilasjon, og badet er fra opprinnelig før 1997. Kostnadsestimat: 200 000 – 500 000 kr.",
            "evidence": [
              "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
              "Sluk fra byggeår der levetid vurderes som utgått.",
              "Tg 3 er satt grunnet at badet er fra opprinnelig før 1997 og regler fra ny avhendingslov 2022 med synlige avvik på de tekniske utførelser.",
              "Kostnadsestimat: 200 000 ‑ 500 000",
              "Hulltaking er foretatt og det er påvist avvik i hulltakingen. Hulltaking er foretatt ved/i Vaskerom."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Dårlig terrengfall mot grunnmur og stående vann på eiendommen. Risiko for vanninntrenging og fuktskader i konstruksjonen.",
            "evidence": [
              "Det er påvist dårlig fall eller flatt terreng inn mot grunnmur og dermed muligheter for større vannansamlinger.",
              "Det er påvist områder på eiendommen med stående vann.",
              "Tiltak for redrenering rundt boligen kan ikke utelukkes.",
              "Overflatevann kan komme bak fuktsikring."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Utvendige avløpsledninger og vannledninger har passert mer enn halvparten av forventet brukstid. Utvendige vannledninger av plast (PEL) fra 1983. Kameraundersøkelse anbefales.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
              "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
              "Utvendige vannledninger er av plast (PEL) og er fra 1983.",
              "Det oppfordres til kameraundersøkelse på generelt grunnlag for faktisk tilstand på avløpsrør.",
              "Det bemerkes at bunnledninger ikke er kontrollert."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Ingen radonsperre i boligen, og radonmåling er ikke utført på boligen. Eksisterende radonmåling er fra 2015 (verdier 27, 30, 39 og 65 Bq/m³) og ble utført av tidligere eier. Verdien på 65 Bq/m³ nærmer seg tiltaksgrensen på 100 Bq/m³.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Boligen har betongsåle fra byggeår uten radonsperre mot grunn da dette ikke var påkrevet ved oppføringsåret.",
              "Det foreligger ingen radonmåling på boligen og bør utføres på generelt grunnlag.",
              "Radonmåling År 2015 Verdi 27, 30, 39 og 65",
              "Det opplyses for øvrig om utført radonmålinger i 2015 med verdier under gitt grenser."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Punktering av dampsperre på loft/kryploft, misfarging og soppdannelser på undertak. Risiko for fuktskader i takkonstruksjonen.",
            "evidence": [
              "Det er fra loft/ kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen.",
              "Det er påvist avvik rundt gjennomføringer i takflaten.",
              "Undertaket er misfarget. Stedvis mindre soppdannelser. Stedvis fuktflekker.",
              "Luftlekkasjer og utette overganger generelt ble påvist og er normalt å forvente med konstruksjon fra dette årstall."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R7",
            "description": "Ingen lufting og ingen musesperre i nedre kant av kledning mot grunnmur. Risiko for skadedyr og fuktskader i veggkonstruksjonen.",
            "evidence": [
              "Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
              "Det er ingen musesperre i nedre kant av konstruksjon.",
              "Vepsebol o.l må evt. fjernes og tiltak mot skadedyr/mus bør alltid utføres på eldre takkonstruksjoner fra dette årstall."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Rekkverk i trapp har åpninger større enn dagens forskriftskrav, og det mangler håndløper på vegg i trappeløpet. Deler av rekkverk på midtre del av trappen mangler. Sikkerhetsrisiko.",
            "evidence": [
              "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i trapper.",
              "Det mangler håndløper på vegg i trappeløpet.",
              "Deler av rekkverk på midtre del av trappen mangler."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R9",
            "description": "Toalettrom har kun naturlig avtrekk, men NS 3600 krever mekanisk avtrekk. Mekanisk avtrekk bør etableres.",
            "evidence": [
              "Toalettrom har kun naturlig avtrekk fra rommet, NS 3600 krever mekanisk avtrekk for å kunne gi TG 0/1.",
              "Mekanisk avtrekk bør etableres på toalettrom."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Ildfast plate mangler på gulvet under sotluke/feieluke på pipe. Brannfarlig avvik.",
            "evidence": [
              "Ildfast plate mangler på gulvet under sotluke/ feieluke på pipe."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Vinduer med avvik: vanskelig å åpne/lukke, avvik rundt innsettingsdetaljer, slitte karmer og sprekker i trevirket. Eldre vinduer med påregnelig utskiftingsbehov.",
            "evidence": [
              "Det er påvist at enkelte vinduer er vanskelig å åpne/ lukke.",
              "Det er påvist avvik rundt innsettingsdetaljer.",
              "Karmene i vinduer er slitte og det er sprekker i trevirket.",
              "Eldre vinduer er påregnelig som følge av vanlig slitasje."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Høydeforskjell på 15–30 mm i etasjeskille/gulv mot grunn. Avvik i henhold til standardens krav til godkjente måleavvik.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15‑30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Støpt såle mot grunn i kjelleretasje. Noe avvik på gulv ble observert og variasjoner vurderes som satt."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "En del av hagen (ca. 10 m²) er felleseie i sameiet. Kjøper overtar kun bruksrett, ikke eiendomsrett til denne delen. Bruksretten er basert på godkjenning fra sameiet og er ikke tinglyst som en permanent rettighet.",
            "evidence": [
              "En liten del av hagen mot veien (ca. 10m2) er felleseie i sameiet. Vi har godkjenning fra styret i sameie om at vi har bruksrett på delen.",
              "Vi har rammet inn hagen med hekk, som inkluderer denne delen etter godkjenning fra sameiet.",
              "Det opplyses fra eier om at en liten del av hagen mot veien (ca. 10m²) er felleseie i sameiet."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R14",
            "description": "Bruksendring av tre soverom i underetasjen ble godkjent så sent som 30.01.2026, noe som indikerer at rommene tidligere var ulovlig brukt som soverom. Kjøper bør undersøke om alle forhold nå er i orden.",
            "evidence": [
              "Vedtak fra Lillestrøm kommune 30.01.2026 godkjente bruksendring fra disponible rom til hoveddel, slik at de tre soverommene i underetasjen nå er godkjent som soverom. Dette økte boarealet med 26,5 m2.",
              "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig.",
              "Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Reguleringsplan fra 1980 (Plan nr. 45) er svært gammel. Det kan foreligge fremtidige reguleringsendringer eller offentlige vedtak som kan påvirke eiendommens bruk og omgivelser.",
            "evidence": [
              "Gjeldende reguleringsplan: Områdene langs RV 172 fra Sørumsand skole til Tårnveien. Plan nr. 45. Stadfestet 16.12.1980.",
              "Eiendommen er regulert til frittliggende småhusbebyggelse."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R16",
            "description": "Pipeløp fra byggeår er formelt ikke vurdert i tilstandsrapporten. Ukjent tilstand på pipe kan innebære brannrisiko.",
            "evidence": [
              "Pipeløp fra byggeår. Pipeløp er formelt ikke vurdert.",
              "Det forutsettes at de branntekniske krav er kontrollert og godkjent av det stedlige brann og feievesen."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R17",
            "description": "Elektrisk anlegg er vurdert til TG1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult konstruksjon. Siste el-tilsyn var i 2022.",
            "evidence": [
              "Med tanke på fremlagt dokumentasjon og utførte sjekkpunkter og utført el-sjekk av Elvia i 2022 er anlegget vurdert til TG 1, men det tas særskilt forbehold for underliggende feil og mangler som ikke kan kontrolleres grunnet skjult i konstruksjonen.",
              "Skjult anlegg i hele boligen i 2017, utført av TB Hansen."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R18",
            "description": "Nedløp, renner og beslag er fra byggeår. Risiko for dårlige skjøter og gjennomrustede beslag. Påregnelig med utskiftninger og vedlikehold.",
            "evidence": [
              "Nedløp, renner og beslag fra byggeår. Det var oppholdsvær på befaringsdagen slik at renner og nedløps funksjon er vanskelig å stadfeste.",
              "Det gjøres oppmerksom på alder og det kan derfor ikke utelukkes dårlige skjøter, gjennomrustete beslag etc. Påregnelig med stedlige kommende utskiftninger/vedlikehold med tanke på alder."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R19",
            "description": "Fuktkvote på 22 % (vekt%) målt i konstruksjonen ved hulltaking i soverom. Forhøyet fuktverdi kan indikere fuktproblemer i veggen.",
            "evidence": [
              "Hulltaking er foretatt ved/i Soverom. Fuktkvotemåling (vekt%) i konstruksjonen ble målt til 22.",
              "Grunnet trefast bunnsvill og ingen synlige skader rundt hulltakingspunktet er det gitt TG 2 iht. retningslinjer NS3600, men det kan ikke utelukkes videre utvikling over tid der TG 3 kan bli aktuelt for fremtidige vurderinger."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R20",
            "description": "Betongtrapp fra byggeår ned til kjeller fremstår med synlige avvik og behov for utbedrende tiltak.",
            "evidence": [
              "Betongtrapp fra byggeår ned til kjeller. Trapp fremstår med synlige avvik og behov for utbedrende tiltak."
            ],
            "source_documents": [
              "d150_d150"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          }
        ],
        "re_retrieval_queries": [
          "drenering tilstand rundt grunnmur kjeller fukt",
          "garasje tilstand avvik konstruksjon",
          "innvendige overflater kjeller boder slitasje skader",
          "utvendig panel kledning tilstand avvik",
          "bruksendring soverom underetasje lovlighet ferdigattest",
          "dampsperre fjerning kjellervegger pustende konstruksjon tiltak",
          "sameie fellesgjeld vedtak økte kostnader",
          "skjeggkre sopp råte insekter skadedyr bolig"
        ],
        "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – TG3 Grunnmur/fundamenter (0.97):** Meget godt støttet. Direkte TG3-klassifisering med kostnadsestimat i rapporten. Beholdes uendret.\n\n**R2 – TG3 Vaskerom kjeller (0.97):** Meget godt støttet. TG3 eksplisitt begrunnet med alder (før 1997), avhendingslov 2022, utgått sluk og hulltakingsavvik. Beholdes uendret.\n\n**R3 – Terrengfall/stående vann (0.95):** Godt støttet av to separate avvikspunkter i rapporten, samt referanse til redrenering. Beholdes uendret.\n\n**R4 – Utvendige ledninger (0.93):** Godt støttet. PEL-rør fra 1983 er dokumentert, halvparten av brukstid passert, kameraundersøkelse anbefalt, bunnledninger ikke kontrollert. Beholdes uendret.\n\n**R5 – Radon (0.92 → 0.90):** Støttet, men med en viktig nyanse: rapporten sier \"verdier under gitt grenser\" for 2015-målingene, mens den høyeste verdien (65 Bq/m³) faktisk er under tiltaksgrensen på 100 Bq/m³. Risikoen er reell (ingen radonsperre, ingen ny måling), men alvorlighetsgraden er noe lavere enn opprinnelig angitt. Confidence justeres marginalt ned til 0.90.\n\n**R6 – Dampsperre/loft (0.92):** Godt støttet med tre separate avvikspunkter (punktering, gjennomføringer, misfarging/sopp/fuktflekker). Beholdes uendret.\n\n**R7 – Lufting/musesperre (0.90):** Godt støttet. Beholdes uendret.\n\n**R8 – Rekkverk/trapp (0.93):** Meget godt støttet med tre konkrete avvik. Sikkerhetsrisiko er reell. Beholdes uendret.\n\n**R9 – Toalettrom ventilasjon (0.88):** Godt støttet. Beholdes uendret.\n\n**R10 – Ildfast plate pipe (0.88):** Støttet av ett direkte avvikspunkt. Brannrisiko er reell. Beholdes uendret.\n\n**R11 – Vinduer (0.87):** Godt støttet med fire avvikspunkter. Beholdes uendret.\n\n**R12 – Høydeforskjell gulv (0.85):** Støttet. Tilstandsgrad 2 er eksplisitt nevnt. Beholdes uendret.\n\n**R13 – Felleseie hage (0.88):** Godt støttet. Bruksretten er bekreftet ikke tinglyst som permanent rettighet – kun styregodkjenning. Beholdes uendret.\n\n**R14 – Bruksendring soverom (0.85):** Støttet. Vedtaket er datert 30.01.2026 (svært nylig), noe som bekrefter at rommene var ulovlig brukt som soverom frem til nylig. Beholdes uendret.\n\n**R15 – Gammel reguleringsplan (0.72 → 0.65):** Svakt støttet. Dokumentene bekrefter at planen er fra 1980, men det er ingen konkrete indikasjoner på pågående eller planlagte reguleringsendringer. Dette er en generell risiko som gjelder de fleste eldre eiendommer. Confidence justeres ned til 0.65.\n\n**R16 – Pipeløp ikke vurdert (0.80):** Støttet. Pipeløp er eksplisitt nevnt som \"formelt ikke vurdert\". Brannrisiko er reell. Beholdes uendret.\n\n**R17 – El-anlegg forbehold (0.78 → 0.75):** Støttet, men TG1 er gitt og el-sjekk ble utført i 2022. Risikoen er reell men begrenset. Confidence justeres marginalt ned til 0.75.\n\n**R18 – Nedløp/renner/beslag (0.82):** Støttet. Funksjon ikke verifisert pga. oppholdsvær. Beholdes uendret.\n\n**R19 – Fuktkvote 22% soverom (0.85):** Støttet. TG2 er gitt, men med eksplisitt advarsel om mulig fremtidig TG3. Beholdes uendret.\n\n**R20 – Betongtrapp kjeller (0.83):** Støttet av ett direkte avvikspunkt. Beholdes uendret.\n\n**Manglende risikoer identifisert:**\n1. Dampsperre på kjellervegger bør fjernes (pustende konstruksjon anbefalt) – nevnt i rapporten men ikke fanget opp som egen risiko.\n2. Garasje fra byggeår – tilstand ikke nærmere vurdert i de fremlagte dokumentchunkene, men nevnt.\n3. Innvendige overflater i kjeller/boder med synlig elde og slitasje – nevnt men ikke som egen risiko.\n4. Sameiet – ingen informasjon om fellesgjeld eller vedtak om økte kostnader er fremkommet, bør undersøkes nærmere.\n\nForeslår re-retrieval-spørsmål for å avklare disse forholdene.\n"
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
    "input_tokens": 20823,
    "output_tokens": 6239,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
