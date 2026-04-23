# Trace: agentic_reflecting_iter1
- **Run ID:** ff0c0556-333b-45c2-a64b-9e83fec3a2f0
- **Tidspunkt:** 2026-03-23T20:48:56.629474+00:00
- **Varighet:** 86.03s
- **Input tokens:** 20496
- **Output tokens:** 4580

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
Risiko 1: Økte felleskostnader som følge av heisutskiftning og nytt lån på kr 6 000 000
  Confidence: 0.98
  Evidens: Fra april - november skal begge heisene i borettslaget skiftes ut. I denne sammenhengen har vi tatt opp et lån på kr. 6 millioner. Dette medfører en økning i felleskostnader på kr. 400 - 650 kr pr andel.; Styret har vedtatt utskiftning av borettslagets to heiser, da de har passert teknisk levetid. Tiltaket finansieres med et låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026; Lånet utbetales i løpet av vår/sommer 2026

Risiko 2: Naturlig oppdriftsventilasjon (ikke mekanisk ventilasjon) som kan gi begrenset luftkvalitet og fuktproblemer
  Confidence: 0.95
  Evidens: Boligen har oppdriftsventilasjon (naturlig ventilering), noe som var vanlig ved byggeåret, men som kan gi begrenset ventilering.; Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.; Tekniske installasjoner > Ventilasjon - listet under 'AVVIK SOM KAN KREVE TILTAK'

Risiko 3: Avvik på vannledninger som kan kreve tiltak (TG2)
  Confidence: 0.9
  Evidens: Tekniske installasjoner > Vannledninger - listet under 'AVVIK SOM KAN KREVE TILTAK'; Innvendige vannledninger er av plast

Risiko 4: Avvik på vannbåren varme som kan kreve tiltak (TG2)
  Confidence: 0.9
  Evidens: Tekniske installasjoner > Vannbåren varme - listet under 'AVVIK SOM KAN KREVE TILTAK'

Risiko 5: Avvik på baderomsgulv i 3. etasje som kan kreve tiltak (TG2)
  Confidence: 0.9
  Evidens: Våtrom > 3. etasje > Bad > Overflater Gulv - listet under 'AVVIK SOM KAN KREVE TILTAK'; Badet ble pusset opp i 2013 i regi av borettslaget

Risiko 6: Ingen radonmåling er utført på eiendommen
  Confidence: 0.97
  Evidens: Det er ikke utført radonmåling på eiendommen.; Er det foretatt radonmåling? Nei

Risiko 7: Borettslaget har høy fellesgjeld – andel fellesgjeld er kr 144 610, og ny gjeld på kr 6 000 000 kommer i tillegg
  Confidence: 0.93
  Evidens: Gjeld: 144 610; Andel av fellesgjeld: 144 610; Pris inkl. fellesgjeld: 3 484 610; Låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026; Sum gjeld 14 475 576 (2024)

Risiko 8: Pågående og planlagte reguleringsplaner i nærområdet kan medføre anleggsarbeid, støy og endringer i nærmiljøet
  Confidence: 0.88
  Evidens: Saksnummer 202205180: Detaljregulering - Storokrysset fra Grefsenveien 48 til Disen; Anleggsarbeid, midlertidige omlegginger av trafikk og endringer i nærmiljøet må påregnes.; Estimert byggestart er i løpet av 2027. Ferdigstillelse: Andre halvår 2029.; S-3181: Reguleringsplan med reguleringsbestemmelser for Store Ringvei, strekningen Storo - Sinsen, inkl. sporveistrase i Grefsenveien

Risiko 9: Bygningen er fra 1961 og har høy alder, noe som innebærer generell risiko for skjulte feil og slitasje på konstruksjoner og installasjoner
  Confidence: 0.92
  Evidens: Byggeår: 1961; Boligbygg med flere boenheter, oppført i 1961.; Tilstandsgrad 2 gis når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen

Risiko 10: Begrenset adgang til utleie – andelseier kan ikke uten samtykke fra styret overlate bruken av boligen til andre
  Confidence: 0.95
  Evidens: Adgang til utleie: Andelseieren kan ikke uten samtykke fra styret overlate bruken av boligen til andre. Det vises til vedlagte husordensregler for utfyllende regler ifm. utleie.

Risiko 11: Legalpant – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader
  Confidence: 0.97
  Evidens: Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 12: Forkjøpsrett fra borettslaget og Usbl kan forsinke eller hindre gjennomføring av kjøpet
  Confidence: 0.9
  Evidens: Ansiennitetsregler: 1 - Andelseier i borettslaget, 2 - Storbyfellesskap (Bate, BOB, Vestbo, TOBB, Nobl og Bonord iht. ansiennitet.), 2 - Medlem i Usbl; Hvis kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen.

Risiko 13: Tilstandsrapporten dekker ikke fellesarealer og felles bygningsdeler – ukjent tilstand på disse
  Confidence: 0.88
  Evidens: Rapporten omfatter kun den aktuelle boligen. Felles bygningsdeler under boligsammenslutningens ansvar er ikke vurdert.; Det anbefales å undersøke om det foreligger informasjon om tilstanden til fellesdeler i bygget, og om det er planlagt vedlikehold eller rehabilitering som kan påvirke boligsammenslutningens økonomi og kostnadsfordeling.

Risiko 14: Stikkledninger for vann og avløp fra eiendommen til kommunalt nett er private og kjøpers ansvar
  Confidence: 0.85
  Evidens: Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private.

Risiko 15: Jordskiftesak registrert på eiendommen kan medføre usikkerhet om eiendomsgrenser og rettigheter
  Confidence: 0.8
  Evidens: 03.03.2025 - Dokumentnr: 242578 - Jordskifte. Jordskiftesak - 20-049513REN-JOOV/JLST Grefsen Stasjonsby. Gjelder denne registerenheten med flere

Risiko 16: Felleskostnader øker med indeks årlig, og ytterligere kostnadsøkninger kan komme som følge av planlagte vedlikeholdsprosjekter
  Confidence: 0.85
  Evidens: Felleskostnadene økes ellers med indeks årlig.; Rentekostnad 792 094 (2024) mot budsjett 730 737; Budsjett 2025 viser økte felleskostnader: 4 826 487 mot regnskap 2024 på 4 190 437

Dokumentkontekst:
[d025_d025 | Side [1]]
t fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige

---

[d025_d025 | Side [1]]
mindre dette er angitt
materialer og tjenesteyter.
særskilt. Rom utenfor boenheten kan omdisponeres av
• Tilstandsrapporten gjelder hovedbygget.
borettslaget/sameiet, og dette kan påvirke boligens BRA-
Tilleggsbygninger, for eksempel garasje, gis kun en enkel
e.
beskrivelse og blir ikke tilstandsvurdert.
• Opplysninger om areal kan ikke alene benyttes for
Tilstandsvurdering av tilleggsbygninger kan bestilles som
beregning av markedsverdi.
en tilleggstjeneste.
• Avvik er vurdert mot regler som gjaldt da

---

[d025_d025 | Side [1]]
over det som kommer frem av tilstandsgradene, blir
risikoutsatte konstruksjoner.
normalt ikke fremhevet.
• Normal slitasjegrad: Forventet slitasje av materiale i
• Rapporten baserer seg på krav i forskrift til
overflaten, basert på enkle, visuelle observasjoner. Kan
avhendingslova (tryggere bolighandel). Rapporten viser
vurderes sammen med bygningsdelens alder.
hvilke elementer som er undersøkt og inkludert i
oppdraget. For å kartlegge tilstanden til elementer og
forhold som ligger utenfor rapportens

---

[d025_d025 | Side [1]]
n på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny,

---

[d025_d025 | Side [1]]
eennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
AVVIK SOM KAN KREVE TILTAK
Tekniske installasjoner > Vannledninger Gå til side
Tekniske installasjoner > Ven琀椀lasjon Gå til side
Tekniske installasjoner > Vannbåren varme Gå til side
Våtrom > 3. etasje > Bad > Over昀氀ater Gulv Gå til

---

[d025_d025 | Side [1]]
stype, samt om rommene har mulighet for 琀椀llu昀琀 og avtrekk og om de琀琀e generelt kan
gi 琀椀lfredss琀椀llende lu昀琀veksling. Det er ikke u琀昀ørt fak琀椀ske lu昀琀mengdemålinger eller tekniske vurderinger utover de琀琀e.
Vurdering av avvik:
• Det er avvik:
Oppdragsnr.: 21421-1512 Befaringsdato: 03.03.2026 Side: 10 av 18
82

## Side 83

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Tilstandsrapport
- Boligen har oppdri昀琀sven琀椀lasjon (naturlig ven琀椀lering), noe som var

---

[d025_d025 | Side [1]]
ilstanden til elementer og
forhold som ligger utenfor rapportens dekning, anbefales
det å innhente ytterligere fagkyndige vurderinger. For
valg av tilstandsgrad blir gjeldende versjon av NS 3600 AREALBEREGNING FOR BOENHETER
(teknisk tilstandsanalyse ved omsetning av bolig) lagt til
grunn. • Areal fastsettes etter forskrift til avhendingslova og
• Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller gjeldende versjon av NS 3940 (areal- og
uriktig informasjon, som har betydning for volumberegninger av

---

[d025_d025 | Side [1]]
ålinger av disse.
Horisontalmålinger av gulv eller etasjeskiller er ikke et forskri昀琀skrav
Oppdragsnr.: 21421-1512 Befaringsdato: 03.03.2026 Side: 5 av 18
77

## Side 78

8
6
4
2
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av

---

[d025_d025 | Side [1]]
stra昀昀eansvar.
Oppdragsnr.: 21421-1512 Befaringsdato: 03.03.2026 Side: 3 av 18
75

## Side 76

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av

---

[d025_d025 | Side [1]]
: 21421-1512 Befaringsdato: 03.03.2026 Side: 4 av 18
76

## Side 77

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Beskrivelse av eiendommen
OM VURDERINGER og inngår derfor ikke i de琀琀e oppdraget.
Tilstandsgradene (TG) re昀氀ekterer resultatet av undersøkelser
u琀昀ørt e琀琀er forskri昀琀 琀椀l avhendingsloven (Tryggere Skjevheter kan gi inntrykk av ujevnt og skjevt gulv, påvirke
bolighandel). Rapporten viser hvilke bygningsdeler som møblering og medføre behov for

---

[d025_d025 | Side [1]]
eksempler og er ikke uttømmende for alle
UTTRYKK OG DEFINISJONER avvik/skader.
• Referansenivå: Kravet til bygningsdelen eller rommet på Eventuelle godkjente plantegninger er ikke kontrollert mot dagens
søknadstidspunktet. bruk, da dette er utenfor oppdragets omfang.
• Tilstand: Byggverkets eller bygningsdelens tekniske, Horisontal- og vertikalmålinger av gulv (med unntak av våtrom),
funksjonelle eller estetiske status på et gitt tidspunkt. vegger, himlinger og andre konstruksjoner inngår ikke i dette
•

---

[d025_d025 | Side [1]]
standsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot byggeregler
Når du kjøper en brukt bolig, er det vik琀椀g å være oppmerksom på at Den bygningssakkyndige vil vurdere boligen mot hvordan det var vanlig

---

[d025_d025 | Side [1]]
ktsøk: Overflatesøk med egnet søkeutstyr som
fuktindikator eller visuelle observasjoner.
• Fuktmåling: Måling av fuktinnhold i materiale eller i
bakenforliggende konstruksjon ved bruk av egnet
• Rapporten beskriver avvik, det vil si en tilstand som er
måleutstyr, blant annet hammerelektrode og pigger.
dårligere enn referansenivået. Positive sider ved boligen,
• Hulltaking: Boring av hull for inspeksjon og fuktmåling i
ut over det som kommer frem av tilstandsgradene, blir
risikoutsatte

---

[d025_d025 | Side [1]]
26
For gyldighet på rapporten se forside
Oppdragsnr.: 21421-1512 Befaringsdato: 03.03.2026 Side: 16 av 18
88

## Side 89

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Forutsetninger
Tilstandsrapportens avgrensninger et byggverk eller en bygningsdel befinner seg i. Benyttes
ved beskrivelse av avvik og alder.
STRUKTUR OG REFERANSENIVÅ • Skadegjørere: I hovedsak råte, sopp og skadedyr.
• Fuktsøk: Overflatesøk med egnet søkeutstyr som
fuktindikator eller

---

[d025_d025 | Side [1]]
03.2026 Side: 2 av 18
74

## Side 75

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type.

---

[d025_d025 | Side [1]]
 måte
utilgjengelig, blir ikke kontrollert. Det blir ikke utført Tilstandsgradene (TG) gjenspeiler undersøkelser utført i henhold
funksjonsprøving av bygningsdeler, med mindre dette til forskrift til avhendingsloven (Tryggere bolighandel). Metoder og
kommer frem av forskrift til avhendingslova. Hvis det ikke omfang følger forskriftens krav, men undersøkelsene avdekker
er sikkerhetsmessig forsvarlig, vil ikke ikke nødvendigvis alle mulige avvik eller skader. Oppdraget
bygningssakkyndig undersøke taket fra

---

[d025_d025 | Side [1]]
i昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi

---

[d025_d025 | Side [1]]
kke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen,

---

[d025_d025 | Side [1]]
t er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om

---

[d025_d025 | Side [1]]
inger eller tekniske undersøkelser av ven琀椀latorer.
Vurdering av avvik:
• Det er avvik:
Oppdragsnr.: 21421-1512 Befaringsdato: 03.03.2026 Side: 9 av 18
81

## Side 82

Grefsenveien 51, 0485 OSLO Bolig琀椀lstand AS
Gnr 76 - Bnr 97 Fjellstuveien 51 B
0301 OSLO 0982 OSLO
Tilstandsrapport
- Det er naturlig oppdri昀琀sven琀椀lasjon som var vanlig ved byggeåret, men som kan gi begrenset ven琀椀lering. Kull昀椀lterven琀椀lator er montert, som kan bidra 琀椀l å
redusere matos, men denne vil ikke ven琀椀lere ut fuk琀椀g

---

[d025_d025 | Side [1]]
gler for spørsmål.
betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert på andelen. Selger leverer eiendommen i ryddig og rengjort stand.
Foto: Henrik Fjørtoft Sporsheim.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
Kontrakts‑
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private. Adkomst til
grunnlag
eiendommen skjer via offentlig vei, privat vei frem til
bygget.
Overtakelse
Tidspunkt for overtakelse

---

[d025_d025 | Side [1]]
r Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det

---

[d025_d025 | Side [1]]
rretning/ kontor, bolig, trafikkområde
bydel 4 Sagene Torshov og bydel 21 Grefsen Kjelsås.
Tinglyste heftelser
Flate: Fortau Flate: Offentlig kjørebane/ veigrunn
Tinglyste heftelser og rettigheter: På eiendommen er det
Pågående plansaker i nærområde: tinglyst følgende heftelser og rettigheter som følger
‑ Saksnummer 202205180: Detaljregulering ‑ eiendommens matrikkel ved overskjøting til ny
Storokrysset fra Grefsenveien 48 til Disen hjemmelshaver:
57

## Side 58

OM EIENDOMMEN
Rettighetshaver: Knr:0301

---

[d025_d025 | Side [1]]
rivat vei frem til
bygget.
Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper og
Utleie
selger.
Adgang til utleie: Andelseieren kan ikke uten samtykke
fra styret overlate bruken av boligen til andre. Det vises til
Forsikring
vedlagte husordensregler for utfyllende regler ifm. utleie.
Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
Radonmåling
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Det er ikke utført radonmåling på eiendommen.

---

[d025_d025 | Side [1]]
om ikke
oppbevaringsmuligheter og bidrar til en større finnes på eiendommen, vil heller ikke følge med i salget.
romfølelse. Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende
Bad: garanti fra produsent eller leverandør.
Badet ble pusset opp i 2013 i regi av borettslaget.
Rommet er flislagt på gulv og vegger, og har Kjøper aksepterer at det kan forekomme hull og merker
varmekabler i gulvet. Innredningen består av en servant etter montering av

---

[d025_d025 | Side [1]]
 ‑ Bestemmelse om Utskilt fra denne matrikkelenhet:
vann/ kloakk Knr:0301 Gnr:76 Bnr:171
Rettighetshaver: Knr:0301 Gnr:76 Bnr:109 Snr:1
Rettighetshaver: Knr:0301 Gnr:76 Bnr:109 Snr:2 Legalpant: Borettslaget har legalpant på inntil 2G som
58

## Side 59

OM EIENDOMMEN
sikkerhet for betaling av felleskostnader. Dette betyr at hos eiendomsmegler før bud inngis. Kontakt
borettslaget har prioritet over tinglyste lån når det gjelder eiendomsmegler for spørsmål.
betaling av felleskostnader, og kan kreve inn

---

[d025_d025 | Side [1]]
av/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om

---

[d025_d025 | Side [1]]
r i gulvet. Innredningen består av en servant etter montering av inventar og utstyr som ikke er en del
med underskap, veggfestet toalett og dusj på gulv. Det er av overdragelsen.
også opplegg for vaskemaskin.
Eiendommens
Kjøkken:
Kjøkkenet er et delvis eget rom med innredning fra 2014.
tilstand
Innredningen har glatte fronter og overskapet flukter
med tak noe som gir ekstra oppbevaring. Kjøkkenet har Takstmann: Theodor Bugge Østlie
benkeplate i laminat og integrert kjøleskap med fryser.
Type takst avholdt

---

[d025_d025 | Side [1]]
rstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr,

---

[d025_d025 | Side [1]]
sninger om formuesverdi av boligen. For opplysninger om dette se www.skatteetaten.no
7: Pålydende
Pålydende: 100 Opprinnelig innskudd: 7 100
Andelsnr: 20 Partialobligasjonsnr: 20
8: Bygning/eiendom
Byggeår: 1961
Gårds/bruksnr:76/97
Bygningstype: HB
Feste/eiet tomt: Eiet Tomteareal: 1602.8
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP586884
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0304
Etasje: 3 Oppvarmingstype: Uspesifisert
Heis: Ja
Parkeringstype: Se info lenger ned

---

[d025_d025 | Side [1]]
insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: CBK 3
74006210
:ecnerefer
tnemucoD
67

## Side 68

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil

---

[d025_d025 | Side [1]]
ikehold/ prosjekter
eller lignende i borettslaget i nær fremtid? Ansienniteten for forkjøpsretten følger denne
Fra april ‑ november skal begge heisene i borettslaget rekkefølgen:
skiftes ut. I denne sammenhengen har vi tatt opp et lån 1. Andelseier i borettslaget, basert på dato for overtakelse
på kr. 6 millioner. Dette medfører en økning i av andelen. Ved lik ansiennitet går den med lengst
felleskostnader på kr. 400 ‑ 650 kr pr andel. ansiennitet i boligbyggelaget foran.
55

## Side 56

OM EIENDOMMEN
2.

---

[d025_d025 | Side [1]]
årene. Les mer om Boligkjøperforsikring i
borettslaget sitter på fraflyttede og/ eller usolgte andeler, vedlagte materiell eller på https:/ /
må dekkes av de øvrige andelseierne. www.soderbergpartners.no/ eiendom/ boligkjoper/
Borettslaget har legalpanterett i andelen for krav på
Lovanvendelse
dekning av felleskostnader og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
Kjøper og selger er

---

[d025_d025 | Side [1]]
ellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk

---

[d025_d025 | Side [1]]
er • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun

---

[d025_d025 | Side [1]]

Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: CBK 2
74006210
:ecnerefer
tnemucoD
66

## Side 67

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller

---

[d025_d025 | Side [1]]
gstype: Uspesifisert
Heis: Ja
Parkeringstype: Se info lenger ned ()
Systemlås: Nei Antall rom: 1
Husdyrhold: Ja Oppr. antall rom: 1
Livsløp standard: Nei Kategori: Kategori 10
Ansiennitetsregler: 1 - Andelseier i borettslaget
2 - Storbyfellesskap (Bate, BOB, Vestbo, TOBB, Nobl og Bonord iht. ansiennitet.)
2 - Medlem i Usbl
Fasiliteter:
Borettslaget eier to næringslokaler, samt én andelsleilighet som leies ut.
Parkering:
Garasjeplasser og parkeringsplasser utendørs leies ut av borettslaget og tildeles etter

---

[d025_d025 | Side [1]]
pporten innebærer ikke nødvendigvis at rommet er, eller
kan bli, godkjent for varig opphold i samsvar med dagens forskri昀琀skrav.
Arealmålingen er ikke kontrollert opp mot godkjente plantegninger.
Bod er vist frem av selger, men bruksre琀琀en er ikke kontrollert.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Kommentar: Det er fremvist plantegninger som samsvarte med bruken under befaringen.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt

---

[d025_d025 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Borettslaget har planlagt å bytte ut heisene i løpet av 2026. Dette vil kunne medføre noe økte felleskostnader.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i

---

[d025_d025 | Side [1]]
odkjent som ny eier må kjøper besørge videresalg av ‑ Oppvarming via radiatorer tilknyttet felles varmeanlegg.
andelen. Hjemmelen overføres til kjøper og oppgjør ‑ Varmekabler i bad.
utbetales til selger.
Hvis et rom på visningen mangler fast installert
Regnskap/ budsjett/ kostnadsøkninger: oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Regnskapstallene for 2023 og 2024 viser et overskudd
på henholdsvis litt over 900 000 kroner og i underkant Selger opplyser at det månedlige strømforbruket

---

[d025_d025 | Side [1]]
948 609 541 Andelsnr: 20
1: Felleskostnader
Tot. innev. måned: 3 715
Boligselskap er tilknyttet sikringsordning
Felleskostnader: Felleskostnader 2 530
Avdrag felleslån 129
Renter felleslån 3 384
Avdrag felleslån 3 440
Renter felleslån 232
Borettslaget er sikret mot tap av felleskostnader. Tilbyder er i Klare Finans AS og vilkårene er åpent tilgjengelig på deres hjemmesider.
Borettslaget er, etter gjeldende bestemmelser fastsatt av finansieringsselskapet, sikret mot tap som følge av at en andelseier

---

[d025_d025 | Side [1]]
 fordelt slik:
‑ Felleskostnader: kr 2 530,‑
Omkostning kjøper
‑ Avdrag felleslån: kr 129,‑
3 340 000,00 (Prisantydning) ‑ Renter felleslån: kr 384,‑
144 610 (Andel av fellesgjeld) ‑ Avdrag felleslån: kr 440,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Renter felleslån: kr 232,‑
3 484 610 (Pris inkl. fellesgjeld)
Styret har vedtatt utskiftning av borettslagets to heiser,
Omkostninger som skal finansieres med et låneopptak på kr 6 000
000,‑. Lånet utbetales i løpet av vår/ sommer 2026, og
8

---

[d025_d025 | Side [1]]
dsbetalt felleskostnad 15 180 36 054
Leverandørgjeld 148 982 181 853
Påløpne renter 4 193 7 597
Annen kortsiktig gjeld 55 124 0
Sum kortsiktig gjeld 223 479 225 504
Sum gjeld 14 475 576 15 302 592
SUM EGENKAPITAL OG GJELD 9 101 495 9 019 914
Pantstillelser 15 14 252 097 15 077 088
Sted:_______________________ Dato:_______________
Arijana Håpnes Maria Isabel Stormarken Morillo Thomas Døvik
Styreleder Styremedlem Styremedlem
36 Borettslaget Grefsenveien 51 Org. nr 948609541
Side 8 av 25
121

## Side

---

[d025_d025 | Side [1]]
650 Innkrevde felleskostn. renter 762 671 653 196
3660 Innkrevde felleskostn. avdrag 706 602 953 552
3605 Leie forretningslokaler 180 000 344 000
Sum 4 370 437 4 633 980
Note 2 - Tilskudd
Tilskudd fra Usbl sitt Bomiljøfond på 15 000,- er utbetalt i 2024.
Note 3 - Andeler i driftssameie
2024 2023
6394 Netto underskudd driftssameie 0 104
Sum 0 -104
Note 4 - Andre driftsinntekter
2024 2023
3990 Andre driftsinntekter 9 285 10 000
Sum 9 285 10 000
Konto 3990 gjelder fakturering egenandel.
Note 5 -

---

[d025_d025 | Side [1]]
r hvert som de opptjenes.
Skattetrekk
Ved lønnskjøring overføres skattetrekk til en felles skattetrekkskonto i Usbl.
36 Borettslaget Grefsenveien 51 Org. nr. 948609541
Side 9 av 25
122

## Side 123

Noter årsregnskap 2024 Borettslaget Grefsenveien 51
Note 1 - Innkrevde felleskostnader
2024 2023
3600 Innkrevde felleskostn. drift 2 439 564 2 439 564
3609 Leie parkering 179 600 153 668
3627 Mer/mindre inntekter v/utleie 102 000 90 000
3650 Innkrevde felleskostn. renter 762 671 653 196
3660 Innkrevde

---

[d025_d025 | Side [1]]
å tilsendt?
andelseiere for parkering/ lagring av gjenstander på Over tid er det gjennomført flere prosjeker i sameiet. Av
fellesareal. nyere dato kan jeg nevne følgende:
‑ Renovering/ oppussing av begge næringslokaler (i
Styret har vedtatt utskiftning av borettslagets to heiser, etasje K og etasje 1)
da de har passert teknisk levetid. Tiltaket finansieres ‑ Renovering av gamle matboder ‑ bygd om til nye boder
med et låneopptak på kr 6 000 000,‑ som utbetales i som leies ut til andelseiere og

---

[d025_d025 | Side [1]]
nsieringsselskapet, sikret mot tap som følge av at en andelseier unnlater å
betale sine felleskostnader. Avtalen om sikring er gyldig til avtalen sies opp av en av partene. Oppsigelsesfrist er 1. desember med
gyldighet fra førstkommende årsskifte. Merk at dersom borettslaget har lån med IN ordning, kan ikke avtalen sies opp før lånet er
nedbetalt.
Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken.
Det sendes ikke ut

---

[d025_d025 | Side [1]]
ed fellesgjeld?
hovedinngangen. Ikke annet enn det som er nevnt. Felleskostnadene økes
ellers med indeks årlig.
Kjekt å vite: 4. Dersom borettslaget har felles grunnpakke for tv/
‑ Borettslaget har to fellesvaskerier i kjelleren og en internett inkludert i fellesutgiftene. Hvilken leverandør?
sykkelgarasje tilgjengelig for andelseierne. Telia er leverandør.
‑ Vaktmestertjenesten utføres av Bygårdservice AS, og 5. Er det ellers noe som styret ønsker at vi informerer nye
henvendelser skal rettes via styret.

---

[d025_d025 | Side [1]]
leggsmidler 3 608 723 3 603 975
Omløpsmidler
Fordringer
Restanse felleskostnader 11 140 16 404
Andre kortsiktige fordringer 0 19 731
Forskuddsbetalte kostnader 208 459 192 761
Bankinnskudd og kontanter
Innestående bank 5 273 173 5 187 042
Sum omløpsmidler 5 492 772 5 415 939
SUM EIENDELER 9 101 495 9 019 914
36 Borettslaget Grefsenveien 51 Org. nr 948609541
Side 7 av 25
120

## Side 121

Balanse 2024 Borettslaget Grefsenveien 51
Note 2024 2023
EGENKAPITAL OG GJELD
Egenkapital
Innskutt

---

[d025_d025 | Side [1]]
gges til den enkelte andelseiers
felleskostnader og vil tilsvare utgiftene for vaktmesterens
Side 3 av 25
116

## Side 117

arbeid samt transport til Oslo miljøstasjon.
Styrets innstilling: Anbefales godkjent.
6. Valg
Styret i borettslaget skal bestå av en styreleder, minst to styremedlemmer og to
varamedlemmer. Det sittende styret består av:
• Styreleder, Arijana Håpnes (2024-2026)
• Styremedlem, Thomas Døvik (2024-2026)
• Styremedlem, Maria Isabel Stormarken Morillo (2023-2025) - fratrer styret
•

---

[d025_d025 | Side [1]]
 null i henhold til forskrift om årsregnskap og årsberetning for borettslag.
Direkte vedlikehold av driftsmidler kostnadsføres løpende under driftskostnader,
mens påkostninger eller forbedringer tillegges driftsmidler og avskrives ihht driftsmidlets levetid.
Driftsinntekter
Felleskostnader bokføres og inntektsføres i takt med opptjening.
Inntektsføring ved salg av varer/tjenester skjer på leveringstidspunktet.
Tjenester inntektsføres etter hvert som de opptjenes.
Skattetrekk
Ved lønnskjøring overføres

---

[d025_d025 | Side [1]]
 og gaver 22 800 22 800 23 000 23 000
Forsikring 135 994 125 915 138 000 157 000
Eiendomsskatt 5 674 4 517 5 000 6 000
Andre kostnader 12 9 906 3 804 3 000 5 000
Andel av driftskostnad i sameie 3 0 104 0 0
Sum kostnad 2 918 430 2 757 576 2 970 500 2 854 597
Driftsresultat 1 476 292 1 886 404 1 906 082 1 971 890
FINANSPOSTER
Renteinntekt 224 400 162 951 0 0
Rentekostnad 792 094 689 410 730 737 752 106
Netto finansposter 567 694 526 460 730 737 752 106
Årsresultat 908 597 1 359 945 1 175 345 1 219

---

[d025_d025 | Side [1]]
personer som bor eller skal bo i boligen kan bli borettslaget og deretter medlemmer av Usbl forkjøpsrett.
sameiere i en andel. Offentlige instanser kan eie inntil 10 Forkjøpsretten gjelder ikke ved overdragelse til ektefelle,
% av andelene. slektninger i rett opp‑ eller nedstigende linje, fosterbarn,
søsken eller noen som har tilhørt samme husstand de
Svar fra styre 05.03.2026: siste to årene.
1. Foreligger det noen planer om vedlikehold/ prosjekter
eller lignende i borettslaget i nær fremtid?

---

[d025_d025 | Side [1]]
 9 285 10 000
Konto 3990 gjelder fakturering egenandel.
Note 5 - Lønnskostnader og styrehonorar
2024 2023
5400 Arbeidsgiveravgift 21 150 18 330
5330 Honorar tillitsvalgte fra lønnssystemet 150 000 130 000
Sum 171 150 148 330
Personalkostnader omfatter lønns- og personalkostnader, samt arbeidsgiveravgift. Antall årsverk sysselsatt: 0
36 Borettslaget Grefsenveien 51 Org. nr. 948609541
Side 10 av 25
123

## Side 124

Noter årsregnskap 2024 Borettslaget Grefsenveien 51
Note 6 - Varige driftsmidler
Tomter

---

[d025_d025 | Side [1]]
r 948609541
Side 5 av 25
118

## Side 119

Resultatregnskap 2024 Borettslaget Grefsenveien 51
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 4 190 437 4 289 980 4 516 582 4 826 487
Leie forretningslokaler 1 180 000 344 000 360 000 0
Sum leieinntekt 4 370 437 4 633 980 4 876 582 4 826 487
Annen inntekt
Tilskudd 2 15 000 0 0 0
Diverse inntekt 4 9 285 10 000 0 0
Sum annen inntekt 24 285 10 000 0 0
Sum inntekt 4 394 722 4 643 980 4 876 582 4 826

---

[d025_d025 | Side [1]]
@outlook.com
6: Ligning - 2025
Gjeld: 144 610 Andre inntekter: 2 295
Annen formue: 60 870 Utgifter: 8 182
96

## Side 97

Boligopplysninger:
Saksbehandler: Robot Hårfagre Dato utkjørt: 02.03.26 Side 2 av 3
Borettslaget Grefsenveien 51 Vår ref.: 36/15 Fødselsdato eier: 08.05.1997
Grefsenveien 51 Type: Borettslag tilknyttet
0485 OSLO Eiere: Casper Bruun Karlsen
Organisasjonsnr: 948 609 541
6: Ligning - 2025
Usbl har ikke opplysninger om formuesverdi av boligen. For opplysninger om dette se

---

[d025_d025 | Side [1]]

‑ Nei Vinduer med isolerglass, produsert i 2021.
26. Kjenner du til vedtak/ forslag til vedtak om forhold Dører:
vedr. eiendommen som kan medføre økte Brann‑ og lydklassifisert entrédør, uten datomerking.
felleskostnader/ økt fellesgjeld?
‑ Ja, borettslaget har planlagt å bytte ut heisene i løpet Trapper/ adkomst:
av 2026. Dette vil kunne medføre noe økte Adkomst til leiligheten via felles trapper i betong,
felleskostnader dørcalling og personheis.
VVS‑installasjoner:
Innvendige vannledninger er av plast

---

[d025_d025 | Side [1]]
Side 50

OM EIENDOMMEN
Det foreligger ferdigattest for: boder.
‑ Fasadeendring, datert 26.02.2008 BRA‑b ‑ Innglasset balkong, altan, terrasser.
‑ Ferdigattest for rehabilitering av bad, datert 23.06.2014
‑ Ferdigattest for etablering av brann‑ og nødlysanlegg, Andre arealer:
datert 12.10.2021 TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
ALH ‑ Areal med lav himlingshøyde måles på samme
Lovlighet, byggetegninger: måte som BRA, men man ser bort fra krav til
Det foreligger godkjente og byggemeldte

---

[d025_d025 | Side [1]]
 utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av takstmannen.
4. Kjenner du til feil eller om har vært utført arbeid/
kontroll på vann/ avløp? Beskrivelsen av boligen nedenfor er hentet direkte fra
‑ Nei tilstandsrapporten:
11. Kjenner du til om det er/ har vært utført arbeid på Bygning:
el‑anlegget eller andre installasjoner (f.eks. oljetank, Boligbygg med flere boenheter, oppført i 1961. Bygningen
sentralfyr, ventilasjon)? er oppført med grunnmur i betong. Yttervegger er i
‑

---

[d025_d025 | Side [1]]
t i regi av All informasjon i tilstandsrapporten anses som kjent for
borettslaget i 2013. kjøper, og det vil ikke være mulig å reklamere på forhold
‑ Arbeid utført av: S‑Bygg som er nevnt i rapporten. Spesielt forhold som er vurdert
med TG2 og TG3 bør vurderes nøye, da de indikerer
2.1 Ble tettesjikt/ membran/ sluk oppgradert/ fornyet? avvik fra normal slitasje og/ eller høy alder, noe som kan
‑ Ja. Badet ble totalrenovert. innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt

---

[d025_d025 | Side [1]]
 琀椀l side
INNVENDIG Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Felles bygningsdeler:
- Etasjeskiller i betong. Lovlighet Gå 琀椀l side
- Felles varmtvann.
- Trapper i betong. Boligbygg med 昀氀ere boenheter
- Dørcalling. • Det foreligger godkjente og byggemeldte tegninger, som
- Personheis. stemmer med dagens bruk
Det er fremvist plantegninger som samsvarte med bruken
under befaringen.
Rapporten omfa琀琀er kun den aktuelle boligen. Felles bygningsdeler
under boligsammenslutningens ansvar er ikke vurdert.

---

[d025_d025 | Side [1]]
urdert og inkludert.
Det anbefales å undersøke om det foreligger informasjon om
琀椀lstanden 琀椀l fellesdeler i bygget, og om det er planlagt vedlikehold
eller rehabilitering som kan påvirke boligsammenslutningens
økonomi og kostnadsfordeling.
Innvendig over昀氀ater, utover våtrom:
- Gulv: Laminat.
- Vegger: Sparklet/pussede og malte over昀氀ater.
- Himling: Sparklet/pussede og malte over昀氀ater.
- Himlingshøyde: Ca. 2,48 meter, målt i stue.
Innvendige over昀氀ater, utover det som eventuelt er særskilt
beskrevet og

---

[d025_d025 | Side [1]]
r i nærmiljøet må påregnes.
forbind. fra trase til sporveishall. Linje: Grense for
bebyggelse For mer informasjon om gjeldende reguleringsforhold,
‑ V140590N2. Grefsenveien‑Trikketrase mellom Storo bru kontakt megler eller se Plan‑ og bygningsetatens
og H. N. Hauges gate. Flate: Fortau nettsider. Det anbefales å søke på saksnummer, adresse
‑ S‑3592. Storoveien 2 m.fl. Grefsen stasjonsområde eller gårds‑ og bruksnummer.
Reguleringsplan. Forretning/ kontor, bolig, trafikkområde
bydel 4 Sagene Torshov og

---

[d025_d025 | Side [1]]
/ saksinnsyn/ casedet.asp? møteplasser. Utviklingen innebærer at nye
direct=Y&mode=&caseno=202506755 reguleringsplaner fremmes, eksisterende bygg rives eller
‑ S‑3181. Reguleringsplan med reguleringsbestemmelser rehabiliteres, og nye bygg reiser seg i takt med byens
for Store Ringvei, strekningen Storo ‑ Sinsen ,inkl. behov. Anleggsarbeid, midlertidige omlegginger av
sporveistrase i Grefsenveien og Trondheimsveien samt trafikk og endringer i nærmiljøet må påregnes.
forbind. fra trase til sporveishall.

---

[d025_d025 | Side [1]]
ring av gangbro. Status: Under behandling
tilknytning til endret reguleringsplan for Oslo sentrum og
indre sone i Oslo kommune. Flate: Bolig m.tilh. anlegg Området er i vekst og gjennomgår en kontinuerlig
‑ 202205180 Detaljregulering , Storokrysset fra transformasjon til en levende og mangfoldig bydel med
Grefsenveien 48 til Disen: https:/ / boliger, arbeidsplasser, handel, kulturtilbud og
innsyn.pbe.oslo.kommune.no/ saksinnsyn/ casedet.asp? møteplasser. Utviklingen innebærer at

---

[d025_d025 | Side [1]]
‑og‑svar‑om‑norgespris
Energimerke
Energikarakter: C
56

## Side 57

OM EIENDOMMEN
‑ Saksnummer 201816207: Detaljregulering for
Regulerings og arealplaner
Vitaminveien Detaljregulering ‑ Grefsenveien/
Ny kommuneplan fra 23. september 2015. Oslo Sandakerveien mellom Åsengata og Grefsenveien 48
kommune har vedtatt en ny kommuneplan som kan få ‑ Saksnummer 202212601: Detaljregulering ‑
betydning for en rekke eksisterende reguleringsplaner i Grefsenveien/ Sandakerveien mellom Åsengata og
kommunen. For

---

[d025_d025 | Side [1]]
sarbeider. Dette skal gi naboer mulighet til å
tilrettelegge for eventuelle behov, som hjemmekontor,
spedbarn som sover, eller husdyr som kan bli påvirket av støy.
3. Fjerning av vegger
Det er ikke tillatt å fjerne vegger i en andel uten å informere
styret, da dette kan påvirke borettslagets bærende
konstruksjoner.
Styrets innstilling: Anbefales godkjent.
5.3 Hensettelse av søppel og objekter i fellesareal
Styret har registrert økende problemer med at beboere hensetter søppel, møbler og
andre gjenstander i

---

[d025_d025 | Side [1]]
om skal
‑ KDP‑17: Kommunedelplan for torg og møteplasser. Flate: tilføre Storo nye arbeids‑ og møteplasser, gode
Områdeavgrensning for indre Oslo og områder for tjenestetilbud og lyse opp gaten med aktivitet. Estimert
etablering av torg/ møteplass ved byutvikling byggestart er i løpet av 2027. Ferdigstillelse: Andre halvår
2029.
Reguleringsplanen som gjelder for eiendommen er helt
eller delvis opphevet som følge av bystyrets vedtak Pågående byggesaker i området:
23.09.2015 (sak 262) – Kommuneplan 2015 –

---

[d025_d025 | Side [1]]
ønsker at vi informerer nye
henvendelser skal rettes via styret. eiere om?
‑ Installasjon av blant annet markiser, skilt og Velkommen til nye andelseier!
blomsterkasser krever styrets godkjenning.
‑ Oppsetting av private radio‑ eller TV‑antenner er ikke Forretningsfører: Boligbyggelaget Usbl
tillatt.
‑ Røyking er forbudt i fellesarealer. Borettslagets forsikringsselskap: If Skadeforsikring NUF
‑ Støyende oppussingsarbeid er ikke tillatt etter kl. 20:00
på hverdager og lørdager, og er helt forbudt på søn‑

---

[d025_d025 | Side [1]]
 byggesaker i området:
23.09.2015 (sak 262) – Kommuneplan 2015 – Oslo mot ‑ Saksnummer 202507986: Hans Nordahls gate 98 ‑
2030: Smart, trygg og grønn. Eiendommen er regulert til innglassing av eksisterende balkonger. Status: Under
spesialområde bevaring bolig, jf. S‑2521 og offentlig behandling
kjørebane/ veigrunn, jf. S‑171GO. ‑ Saksnummer 202509334: Storo T‑banestasjon ‑
‑ S‑2255. Saken gjelder: Reguleringsbestemmelser i oppføring av gangbro. Status: Under behandling
tilknytning til endret

---

[d025_d025 | Side [1]]
alen og at styret vil kunne viderefakturere ansvarlig
andelseier kostnader knyttet til utrykning.
Styrets innstilling: Anbefales godkjent.
Side 2 av 25
115

## Side 116

5.2 Endring av husordensregler -Regler for oppussing i
borettslaget
Innsender: Styret
Styret ønsker å klargjøre og formalisere regler for oppussing i borettslaget for å sikre
at arbeider som medfører støy gjennomføres på en måte som tar hensyn til øvrige
beboere. Flere har gitt tilbakemelding om at støyende arbeider kan være

---

[d025_d025 | Side [1]]
n Borettslaget består av 76 boliger og 2 næringslokaler.
som var vanlig ved byggeåret, men som kan gi Laget eier selv to næringslokaler samt én andelsleilighet
begrenset ventilering. Kullfilterventilator er montert, som som leies ut.
kan bidra til å redusere matos, men denne vil ikke
ventilere ut fuktig luft. Fra generalforsamlinger avholdt i 2024 og 2025 er
følgende saker relevante:
Opplistingen over er ikke uttømmende og du oppfordres ‑ Godkjenning av årsregnskap og årsmelding for 2024.
til å lese og

---

[d025_d025 | Side [1]]
endres til:
Regler for oppussingsarbeider
1. Tidsbegrensning for oppussing
Støyende oppussingsarbeider, inkludert hamring og boring, er
ikke tillatt etter kl. 20:00 på hverdager og lørdager. På
søndager og helligdager er oppussingsarbeider, herunder
hamring, boring og andre støyende aktiviteter, ikke tillatt.
2. Informasjonsplikt
Andelseiere plikter å informere styret og beboergruppen på
Facebook minst én dag i forkant av planlagte
oppussingsarbeider. Dette skal gi naboer mulighet til å
tilrettelegge for

---

[d025_d025 | Side [1]]

Sivilstand
Norge
Gift 22% 33%
«Bra kollektive transportmidler i umiddelbar
nærhet. Mange dagligvarebutikker å velge Ikke gift 70% 54%
mellom. Storo storsenteret, fantastisk senter.
Bra miljø. Gode naboer.» Separert 7% 9%
Sitat fra en lokalkjent
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for

---

[d025_d025 | Side [1]]
 ‑ Dokumentnr: 9816 ‑ Erklæring/ avtale Bestemmelse om endring i terrenget i nærheten av
Vedtak av Oslo kommunes vann‑ og kloakkreglementet anlegg/ ledninger/ kabler
Kan ikke slettes uten samtykke fra kommunen Gjelder denne registerenheten med flere
28.09.1960 ‑ Dokumentnr: 11875 ‑ Best. om vann/ 03.03.2025 ‑ Dokumentnr: 242578 ‑ Jordskifte
kloakkledn. Jordskiftesak ‑ 20‑049513REN‑JOOV/ JLST Grefsen
Stasjonsby
Gjelder denne registerenheten med flere
11.04.1985 ‑ Dokumentnr: 19624 ‑ Erklæring/

---

[d025_d025 | Side [1]]
. Flere har gitt tilbakemelding om at støyende arbeider kan være forstyrrende,
spesielt for de som har hjemmekontor, små barn eller husdyr.
Per i dag gjelder følgende regler for oppussing:
"Oppussing
Det er ikke tillatt med hamring og/eller boring etter kl. 20:00 på hverdager og
lørdager. Søndager og helligdager er det ikke tillatt å hamre og/eller bore eller foreta
støyende arbeider."
Forslag til vedtak: Bestemmelsene i husordensreglene endres til:
Regler for oppussingsarbeider
1. Tidsbegrensning for

---

[d025_d025 | Side [1]]
5 - Borettslaget Grefsenveien 51. Side 2/4
149

## Side 150

5.2 Endring av husordensregler -Regler for oppussing i borettslaget
Bestemmelsene i husordensreglene endres til:
Regler for oppussingsarbeider
1. Tidsbegrensning for oppussing
Støyende oppussingsarbeider, inkludert hamring og boring, er ikke tillatt etter kl. 20:00 på
hverdager og lørdager. På søndager og helligdager er oppussingsarbeider, herunder
hamring, boring og andre støyende aktiviteter, ikke tillatt.
2. Informasjonsplikt
Andelseiere

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Økte felleskostnader som følge av heisutskiftning og nytt lån på kr 6 000 000",
      "evidence": [
        "Fra april - november skal begge heisene i borettslaget skiftes ut. I denne sammenhengen har vi tatt opp et lån på kr. 6 millioner. Dette medfører en økning i felleskostnader på kr. 400 - 650 kr pr andel.",
        "Styret har vedtatt utskiftning av borettslagets to heiser, da de har passert teknisk levetid. Tiltaket finansieres med et låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026",
        "Lånet utbetales i løpet av vår/sommer 2026"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Naturlig oppdriftsventilasjon (ikke mekanisk ventilasjon) som kan gi begrenset luftkvalitet og fuktproblemer",
      "evidence": [
        "Boligen har oppdriftsventilasjon (naturlig ventilering), noe som var vanlig ved byggeåret, men som kan gi begrenset ventilering.",
        "Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.",
        "Tekniske installasjoner > Ventilasjon - listet under 'AVVIK SOM KAN KREVE TILTAK'"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Avvik på vannledninger som kan kreve tiltak (TG2)",
      "evidence": [
        "Tekniske installasjoner > Vannledninger - listet under 'AVVIK SOM KAN KREVE TILTAK'",
        "Innvendige vannledninger er av plast"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R4",
      "description": "Avvik på vannbåren varme som kan kreve tiltak (TG2)",
      "evidence": [
        "Tekniske installasjoner > Vannbåren varme - listet under 'AVVIK SOM KAN KREVE TILTAK'"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R5",
      "description": "Avvik på baderomsgulv i 3. etasje som kan kreve tiltak (TG2)",
      "evidence": [
        "Våtrom > 3. etasje > Bad > Overflater Gulv - listet under 'AVVIK SOM KAN KREVE TILTAK'",
        "Badet ble pusset opp i 2013 i regi av borettslaget"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Ingen radonmåling er utført på eiendommen",
      "evidence": [
        "Det er ikke utført radonmåling på eiendommen.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R7",
      "description": "Borettslaget har høy fellesgjeld – andel fellesgjeld er kr 144 610, og ny gjeld på kr 6 000 000 kommer i tillegg",
      "evidence": [
        "Gjeld: 144 610 / Andel av fellesgjeld: 144 610 / Pris inkl. fellesgjeld: 3 484 610",
        "Låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026",
        "Sum gjeld 14 475 576 (2024)"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Pågående og planlagte reguleringsplaner i nærområdet kan medføre anleggsarbeid, støy og endringer i nærmiljøet",
      "evidence": [
        "Saksnummer 202205180: Detaljregulering - Storokrysset fra Grefsenveien 48 til Disen",
        "Anleggsarbeid, midlertidige omlegginger av trafikk og endringer i nærmiljøet må påregnes.",
        "Estimert byggestart er i løpet av 2027. Ferdigstillelse: Andre halvår 2029.",
        "S-3181: Reguleringsplan med reguleringsbestemmelser for Store Ringvei, strekningen Storo - Sinsen, inkl. sporveistrase i Grefsenveien"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Bygningen er fra 1961 og har høy alder, noe som innebærer generell risiko for skjulte feil og slitasje på konstruksjoner og installasjoner",
      "evidence": [
        "Byggeår: 1961",
        "Boligbygg med flere boenheter, oppført i 1961.",
        "Tilstandsgrad 2 gis når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Begrenset adgang til utleie – andelseier kan ikke uten samtykke fra styret overlate bruken av boligen til andre",
      "evidence": [
        "Adgang til utleie: Andelseieren kan ikke uten samtykke fra styret overlate bruken av boligen til andre. Det vises til vedlagte husordensregler for utfyllende regler ifm. utleie."
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R11",
      "description": "Legalpant – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader",
      "evidence": [
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R12",
      "description": "Forkjøpsrett fra borettslaget og Usbl kan forsinke eller hindre gjennomføring av kjøpet",
      "evidence": [
        "Ansiennitetsregler: 1 - Andelseier i borettslaget, 2 - Storbyfellesskap (Bate, BOB, Vestbo, TOBB, Nobl og Bonord iht. ansiennitet.), 2 - Medlem i Usbl",
        "Hvis kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen."
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Tilstandsrapporten dekker ikke fellesarealer og felles bygningsdeler – ukjent tilstand på disse",
      "evidence": [
        "Rapporten omfatter kun den aktuelle boligen. Felles bygningsdeler under boligsammenslutningens ansvar er ikke vurdert.",
        "Det anbefales å undersøke om det foreligger informasjon om tilstanden til fellesdeler i bygget, og om det er planlagt vedlikehold eller rehabilitering som kan påvirke boligsammenslutningens økonomi og kostnadsfordeling."
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Stikkledninger for vann og avløp fra eiendommen til kommunalt nett er private og kjøpers ansvar",
      "evidence": [
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Jordskiftesak registrert på eiendommen kan medføre usikkerhet om eiendomsgrenser og rettigheter",
      "evidence": [
        "03.03.2025 - Dokumentnr: 242578 - Jordskifte. Jordskiftesak - 20-049513REN-JOOV/JLST Grefsen Stasjonsby. Gjelder denne registerenheten med flere"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R16",
      "description": "Felleskostnader øker med indeks årlig, og ytterligere kostnadsøkninger kan komme som følge av planlagte vedlikeholdsprosjekter",
      "evidence": [
        "Felleskostnadene økes ellers med indeks årlig.",
        "Rentekostnad 792 094 (2024) mot budsjett 730 737",
        "Budsjett 2025 viser økte felleskostnader: 4 826 487 mot regnskap 2024 på 4 190 437"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R17",
      "description": "Manglende dokumentasjon på spesifikke avvik for vannledninger og vannbåren varme – detaljer om omfang og utbedringskostnad er ukjent",
      "evidence": [
        "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
        "Tekniske installasjoner > Vannledninger og Vannbåren varme listet under 'AVVIK SOM KAN KREVE TILTAK'"
      ],
      "source_documents": [
        "d025_d025"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Vannledninger avvik TG2 beskrivelse tilstandsrapport",
    "Vannbåren varme avvik TG2 beskrivelse tilstandsrapport",
    "Baderomsgulv 3. etasje avvik TG2 detaljer",
    "Jordskiftesak Grefsen Stasjonsby konsekvenser eiendomsgrenser",
    "Borettslaget Grefsenveien 51 vedlikeholdsplan fremtidige prosjekter",
    "Fellesgjeld total borettslaget lån detaljer rente",
    "Radon risiko Oslo Grefsen byggeår 1961"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Heisutskiftning/lån kr 6 mill:** Svært godt dokumentert fra flere steder i salgsoppgaven. Økning på kr 400–650 pr andel er eksplisitt nevnt. Confidence justeres opp til 0.99.\n\n**R2 – Oppdriftsventilasjon:** Direkte sitert fra tilstandsrapporten med TG2-klassifisering. Godt støttet. Confidence beholdes på 0.95.\n\n**R3 – Vannledninger TG2:** Listet under avvik som kan kreve tiltak, men dokumentchunkene gir ingen detaljert beskrivelse av selve avviket utover at ledningene er av plast. Confidence justeres ned til 0.82 pga. manglende detaljer om avvikets art og omfang.\n\n**R4 – Vannbåren varme TG2:** Kun listet i sammendrag, ingen detaljbeskrivelse funnet i de tilgjengelige chunkene. Confidence justeres ned til 0.78 – risikoen er reell men evidensen er tynn.\n\n**R5 – Baderomsgulv TG2:** Listet under avvik, og det fremgår at badet ble pusset opp i 2013 (over 10 år siden). Confidence justeres noe ned til 0.88 da detaljer om avvikets art mangler.\n\n**R6 – Ingen radonmåling:** Eksplisitt bekreftet to steder. Confidence beholdes på 0.97.\n\n**R7 – Høy fellesgjeld:** Godt dokumentert. Andel fellesgjeld kr 144 610, total gjeld kr 14,5 mill, og nytt lån på kr 6 mill kommer i tillegg. Confidence justeres opp til 0.95.\n\n**R8 – Reguleringsplaner/anleggsarbeid:** Godt dokumentert med flere saksnumre og eksplisitt advarsel om anleggsarbeid og endringer i nærmiljøet. Confidence justeres opp til 0.90.\n\n**R9 – Bygningsalder 1961:** Godt dokumentert. Confidence beholdes på 0.92.\n\n**R10 – Begrenset utleieadgang:** Direkte sitert. Confidence beholdes på 0.95.\n\n**R11 – Legalpant:** Direkte sitert og godt forklart. Confidence beholdes på 0.97.\n\n**R12 – Forkjøpsrett:** Godt dokumentert med ansiennitetsregler og konsekvenser. Confidence beholdes på 0.90.\n\n**R13 – Tilstandsrapport dekker ikke fellesarealer:** Direkte sitert fra rapporten. Confidence justeres opp til 0.90.\n\n**R14 – Private stikkledninger:** Direkte sitert. Confidence beholdes på 0.85.\n\n**R15 – Jordskiftesak:** Dokumentert med saksnummer og dato, men ingen informasjon om konsekvenser eller status. Confidence justeres ned til 0.78 pga. begrenset kontekst.\n\n**R16 – Indeksregulering og fremtidige kostnadsøkninger:** Godt dokumentert med regnskapstall og budsjett. Confidence justeres opp til 0.87.\n\n**Ny risiko R17 identifisert:** Manglende detaljert dokumentasjon på TG2-avvik for vannledninger og vannbåren varme gjør det vanskelig å vurdere utbedringskostnad og hastegrad. Dette er en informasjonsrisiko som bør flagges.\n\n**Mulige manglende risikoer vurdert:**\n- El-anlegg: Selger svarer nei på arbeid utført, men bygget er fra 1961 – bør undersøkes nærmere.\n- Parkeringsforhold: Nevnt at garasjeplasser leies ut etter venteliste – ikke inkludert i kjøpet.\n- Borettslagets sikringsordning mot tap av felleskostnader er nevnt som positiv faktor, ikke risiko.\n- Rentekostnader oversteg budsjett i 2024 (792 094 vs budsjett 730 737) – indikerer finansiell sårbarhet.\n"
}

## Raw Response
```json
{
  "id": "msg_01XnRAaFDST34EwcG7Zrc3av",
  "container": null,
  "content": [
    {
      "id": "toolu_01732AooLvc6ehLvxjPHUqd5",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Økte felleskostnader som følge av heisutskiftning og nytt lån på kr 6 000 000",
            "evidence": [
              "Fra april - november skal begge heisene i borettslaget skiftes ut. I denne sammenhengen har vi tatt opp et lån på kr. 6 millioner. Dette medfører en økning i felleskostnader på kr. 400 - 650 kr pr andel.",
              "Styret har vedtatt utskiftning av borettslagets to heiser, da de har passert teknisk levetid. Tiltaket finansieres med et låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026",
              "Lånet utbetales i løpet av vår/sommer 2026"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Naturlig oppdriftsventilasjon (ikke mekanisk ventilasjon) som kan gi begrenset luftkvalitet og fuktproblemer",
            "evidence": [
              "Boligen har oppdriftsventilasjon (naturlig ventilering), noe som var vanlig ved byggeåret, men som kan gi begrenset ventilering.",
              "Kullfilterventilator er montert, som kan bidra til å redusere matos, men denne vil ikke ventilere ut fuktig luft.",
              "Tekniske installasjoner > Ventilasjon - listet under 'AVVIK SOM KAN KREVE TILTAK'"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Avvik på vannledninger som kan kreve tiltak (TG2)",
            "evidence": [
              "Tekniske installasjoner > Vannledninger - listet under 'AVVIK SOM KAN KREVE TILTAK'",
              "Innvendige vannledninger er av plast"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R4",
            "description": "Avvik på vannbåren varme som kan kreve tiltak (TG2)",
            "evidence": [
              "Tekniske installasjoner > Vannbåren varme - listet under 'AVVIK SOM KAN KREVE TILTAK'"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R5",
            "description": "Avvik på baderomsgulv i 3. etasje som kan kreve tiltak (TG2)",
            "evidence": [
              "Våtrom > 3. etasje > Bad > Overflater Gulv - listet under 'AVVIK SOM KAN KREVE TILTAK'",
              "Badet ble pusset opp i 2013 i regi av borettslaget"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Ingen radonmåling er utført på eiendommen",
            "evidence": [
              "Det er ikke utført radonmåling på eiendommen.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R7",
            "description": "Borettslaget har høy fellesgjeld – andel fellesgjeld er kr 144 610, og ny gjeld på kr 6 000 000 kommer i tillegg",
            "evidence": [
              "Gjeld: 144 610 / Andel av fellesgjeld: 144 610 / Pris inkl. fellesgjeld: 3 484 610",
              "Låneopptak på kr 6 000 000,- som utbetales i løpet av vår/sommer 2026",
              "Sum gjeld 14 475 576 (2024)"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Pågående og planlagte reguleringsplaner i nærområdet kan medføre anleggsarbeid, støy og endringer i nærmiljøet",
            "evidence": [
              "Saksnummer 202205180: Detaljregulering - Storokrysset fra Grefsenveien 48 til Disen",
              "Anleggsarbeid, midlertidige omlegginger av trafikk og endringer i nærmiljøet må påregnes.",
              "Estimert byggestart er i løpet av 2027. Ferdigstillelse: Andre halvår 2029.",
              "S-3181: Reguleringsplan med reguleringsbestemmelser for Store Ringvei, strekningen Storo - Sinsen, inkl. sporveistrase i Grefsenveien"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Bygningen er fra 1961 og har høy alder, noe som innebærer generell risiko for skjulte feil og slitasje på konstruksjoner og installasjoner",
            "evidence": [
              "Byggeår: 1961",
              "Boligbygg med flere boenheter, oppført i 1961.",
              "Tilstandsgrad 2 gis når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Begrenset adgang til utleie – andelseier kan ikke uten samtykke fra styret overlate bruken av boligen til andre",
            "evidence": [
              "Adgang til utleie: Andelseieren kan ikke uten samtykke fra styret overlate bruken av boligen til andre. Det vises til vedlagte husordensregler for utfyllende regler ifm. utleie."
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R11",
            "description": "Legalpant – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader",
            "evidence": [
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R12",
            "description": "Forkjøpsrett fra borettslaget og Usbl kan forsinke eller hindre gjennomføring av kjøpet",
            "evidence": [
              "Ansiennitetsregler: 1 - Andelseier i borettslaget, 2 - Storbyfellesskap (Bate, BOB, Vestbo, TOBB, Nobl og Bonord iht. ansiennitet.), 2 - Medlem i Usbl",
              "Hvis kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen."
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Tilstandsrapporten dekker ikke fellesarealer og felles bygningsdeler – ukjent tilstand på disse",
            "evidence": [
              "Rapporten omfatter kun den aktuelle boligen. Felles bygningsdeler under boligsammenslutningens ansvar er ikke vurdert.",
              "Det anbefales å undersøke om det foreligger informasjon om tilstanden til fellesdeler i bygget, og om det er planlagt vedlikehold eller rehabilitering som kan påvirke boligsammenslutningens økonomi og kostnadsfordeling."
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Stikkledninger for vann og avløp fra eiendommen til kommunalt nett er private og kjøpers ansvar",
            "evidence": [
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Jordskiftesak registrert på eiendommen kan medføre usikkerhet om eiendomsgrenser og rettigheter",
            "evidence": [
              "03.03.2025 - Dokumentnr: 242578 - Jordskifte. Jordskiftesak - 20-049513REN-JOOV/JLST Grefsen Stasjonsby. Gjelder denne registerenheten med flere"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R16",
            "description": "Felleskostnader øker med indeks årlig, og ytterligere kostnadsøkninger kan komme som følge av planlagte vedlikeholdsprosjekter",
            "evidence": [
              "Felleskostnadene økes ellers med indeks årlig.",
              "Rentekostnad 792 094 (2024) mot budsjett 730 737",
              "Budsjett 2025 viser økte felleskostnader: 4 826 487 mot regnskap 2024 på 4 190 437"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R17",
            "description": "Manglende dokumentasjon på spesifikke avvik for vannledninger og vannbåren varme – detaljer om omfang og utbedringskostnad er ukjent",
            "evidence": [
              "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
              "Tekniske installasjoner > Vannledninger og Vannbåren varme listet under 'AVVIK SOM KAN KREVE TILTAK'"
            ],
            "source_documents": [
              "d025_d025"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Vannledninger avvik TG2 beskrivelse tilstandsrapport",
          "Vannbåren varme avvik TG2 beskrivelse tilstandsrapport",
          "Baderomsgulv 3. etasje avvik TG2 detaljer",
          "Jordskiftesak Grefsen Stasjonsby konsekvenser eiendomsgrenser",
          "Borettslaget Grefsenveien 51 vedlikeholdsplan fremtidige prosjekter",
          "Fellesgjeld total borettslaget lån detaljer rente",
          "Radon risiko Oslo Grefsen byggeår 1961"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Heisutskiftning/lån kr 6 mill:** Svært godt dokumentert fra flere steder i salgsoppgaven. Økning på kr 400–650 pr andel er eksplisitt nevnt. Confidence justeres opp til 0.99.\n\n**R2 – Oppdriftsventilasjon:** Direkte sitert fra tilstandsrapporten med TG2-klassifisering. Godt støttet. Confidence beholdes på 0.95.\n\n**R3 – Vannledninger TG2:** Listet under avvik som kan kreve tiltak, men dokumentchunkene gir ingen detaljert beskrivelse av selve avviket utover at ledningene er av plast. Confidence justeres ned til 0.82 pga. manglende detaljer om avvikets art og omfang.\n\n**R4 – Vannbåren varme TG2:** Kun listet i sammendrag, ingen detaljbeskrivelse funnet i de tilgjengelige chunkene. Confidence justeres ned til 0.78 – risikoen er reell men evidensen er tynn.\n\n**R5 – Baderomsgulv TG2:** Listet under avvik, og det fremgår at badet ble pusset opp i 2013 (over 10 år siden). Confidence justeres noe ned til 0.88 da detaljer om avvikets art mangler.\n\n**R6 – Ingen radonmåling:** Eksplisitt bekreftet to steder. Confidence beholdes på 0.97.\n\n**R7 – Høy fellesgjeld:** Godt dokumentert. Andel fellesgjeld kr 144 610, total gjeld kr 14,5 mill, og nytt lån på kr 6 mill kommer i tillegg. Confidence justeres opp til 0.95.\n\n**R8 – Reguleringsplaner/anleggsarbeid:** Godt dokumentert med flere saksnumre og eksplisitt advarsel om anleggsarbeid og endringer i nærmiljøet. Confidence justeres opp til 0.90.\n\n**R9 – Bygningsalder 1961:** Godt dokumentert. Confidence beholdes på 0.92.\n\n**R10 – Begrenset utleieadgang:** Direkte sitert. Confidence beholdes på 0.95.\n\n**R11 – Legalpant:** Direkte sitert og godt forklart. Confidence beholdes på 0.97.\n\n**R12 – Forkjøpsrett:** Godt dokumentert med ansiennitetsregler og konsekvenser. Confidence beholdes på 0.90.\n\n**R13 – Tilstandsrapport dekker ikke fellesarealer:** Direkte sitert fra rapporten. Confidence justeres opp til 0.90.\n\n**R14 – Private stikkledninger:** Direkte sitert. Confidence beholdes på 0.85.\n\n**R15 – Jordskiftesak:** Dokumentert med saksnummer og dato, men ingen informasjon om konsekvenser eller status. Confidence justeres ned til 0.78 pga. begrenset kontekst.\n\n**R16 – Indeksregulering og fremtidige kostnadsøkninger:** Godt dokumentert med regnskapstall og budsjett. Confidence justeres opp til 0.87.\n\n**Ny risiko R17 identifisert:** Manglende detaljert dokumentasjon på TG2-avvik for vannledninger og vannbåren varme gjør det vanskelig å vurdere utbedringskostnad og hastegrad. Dette er en informasjonsrisiko som bør flagges.\n\n**Mulige manglende risikoer vurdert:**\n- El-anlegg: Selger svarer nei på arbeid utført, men bygget er fra 1961 – bør undersøkes nærmere.\n- Parkeringsforhold: Nevnt at garasjeplasser leies ut etter venteliste – ikke inkludert i kjøpet.\n- Borettslagets sikringsordning mot tap av felleskostnader er nevnt som positiv faktor, ikke risiko.\n- Rentekostnader oversteg budsjett i 2024 (792 094 vs budsjett 730 737) – indikerer finansiell sårbarhet.\n"
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
    "input_tokens": 20496,
    "output_tokens": 4580,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
