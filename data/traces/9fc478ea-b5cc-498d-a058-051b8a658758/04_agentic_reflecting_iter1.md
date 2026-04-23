# Trace: agentic_reflecting_iter1
- **Run ID:** 9fc478ea-b5cc-498d-a058-051b8a658758
- **Tidspunkt:** 2026-03-25T01:15:59.783385+00:00
- **Varighet:** 114.87s
- **Input tokens:** 17468
- **Output tokens:** 6275

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
Risiko 1: Flere bygningsdeler med TG2 – avløpsrør og vannledninger er vurdert til TG2 på grunn av alder. Dette indikerer behov for vedlikehold eller utskifting i nær fremtid, med risiko for lekkasjer og vannskader.
  Confidence: 0.95
  Evidens: Avløpsrør TG 2 pga alder.; Vannledninger TG 2 pga alder.; Innvendige avløpsrør på grunn av alder.; Vannrør grunnet alder.

Risiko 2: Elektrisk anlegg vurdert til TG2 – manglende samsvarserklæring for elektrisk arbeid/anlegg montert etter 01.01.1999, samt registrerte endringer uten dokumentasjon. Dette utgjør en sikkerhetsrisiko og kan medføre kostbare utbedringer.
  Confidence: 0.95
  Evidens: Elektrisk TG 2 pga alder samt registrerte endringer uten dokumentasjon.; Elektrisk da det ikke er fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999.; El-anlegget kan ha feil og mangler som en slik forenklet kontroll ikke avdekker.

Risiko 3: Varmtvannsbereder vurdert til TG2 på grunn av alder og slitasje. Risiko for havari og vannskader, og utskifting må påregnes i nær fremtid.
  Confidence: 0.93
  Evidens: Varmtvannsbereder TG 2 pga alder/slitasje.; Varmtvannsbereder grunnet alder/slitasje.

Risiko 4: Badet har flere TG2-avvik: svake fallforhold til sluk, 'bom' (løs flis) på gulv ved dør, svertesopp i fuger i dusjsone, samt manglende klemt membran mot sluk. Dette innebærer risiko for fuktskader og lekkasjer.
  Confidence: 0.97
  Evidens: Våtrom: Bad - Overflater TG 2 pga svake fallforhold samt «bom» i flis og svertesopp i fuger i dusjsone.; Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga manglende klemt membran mot sluk samt antatt alder på badet.; Overflater på bad på grunn av at fallforhold til sluk er mindre enn referansenivået, det registreres 'bom' (løs flis) på gulv ved dør og noe svertesopp i fuger.; Membran, tettesjikt og sluk da slukmansjett/membran ikke er klemt i sluk.

Risiko 5: Ventilasjon vurdert til TG2 på grunn av slitt avtrekksvifte på bad. Dårlig ventilasjon kan føre til fuktopphopning og muggvekst.
  Confidence: 0.9
  Evidens: Ventilasjon TG 2 pga slitt avtrekksvifte på bad.; Ventilasjon på grunn av noe slitt avtrekksvifte på bad.

Risiko 6: Ulovlig/ikke-godkjent planløsning – opprinnelige godkjente tegninger stemmer ikke overens med dagens planløsning. Bod er omgjort til entré uten søknad om bruksendring, noe som er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.
  Confidence: 0.95
  Evidens: De opprinnelige godkjente tegningene ikke stemmer overens med dagens planløsning.; Deler av den minste boden gjort om til entré. Bruksendring fra tilleggsdel (bod) til hoveddel (entré) og motsatt er søknadspliktig.; Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige.; Omkledningsrommet er opprinnelig byggemeldt som bod.

Risiko 7: Manglende ferdigattest – det gjenstår arbeid før ferdigattest kan utstedes. Blant annet mangler brannventil i bodvegg, dørbredde tilfredsstiller ikke krav, og F-30 krav er ikke oppfylt. Dette kan medføre pålegg og kostnader for kjøper.
  Confidence: 0.95
  Evidens: For å kunne søke om ferdigattest må følgende tiltak gjennomføres på eiendommen: Brannventil i bodvegg ikke montert. Dørbredde må tilfredsstille krav i byggetillatelse kap.43:22. F-30.; Boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.; Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert.

Risiko 8: Fellesgjeld og risiko for økte felleskostnader – borettslaget er i gang med å utarbeide en vedlikeholdsplan som ikke er ferdigstilt. Felleskostnader og fellesgjeld kan øke. Andelseierne er indirekte eksponert for andre andelshaveres mislighold.
  Confidence: 0.92
  Evidens: Borettslaget er i gang med å utarbeide en vedlikeholdsplan. Vedlikeholdsplanen er per nå ikke ferdig utarbeidet.; Kjøper må ta høyde for at felleskostnader og fellesgjeld vil kunne øke i forbindelse med vedlikeholdsplanen.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.; Kr 46 237 pr. 24.11.2025 (andel fellesgjeld).; Borettslaget har en samlet fellesgjeld per 24.11.2025 på kr 5 963 263,-.

Risiko 9: Støysone og hensynssoner – eiendommen ligger i gul støysone (veistøy) med berøringsgrad 16,7%, i funksjonell strandsone og under grunnen er det andre sikringssoner. Dette kan påvirke bruken av eiendommen og fremtidige byggesaker.
  Confidence: 0.88
  Evidens: Gul støysone: Veistøy, berøringsgrad 16,7%.; Landskap: Funksjonell strandsone, berøringsgrad 19,7%.; Under grunnen: Andre sikringssoner, berøringsgrad 12,6%.; Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagsstiller og eventuelt krav om avbøtende tiltak.

Risiko 10: Ukjent ekstern bod – det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m², men eier kjenner ikke til denne. Eierforhold og bruksrett til boden er uavklart.
  Confidence: 0.85
  Evidens: Det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m². Eier kjenner dog ikke til denne.; Opplyst tilleggsreal som eksterne boder i fellesarealer er målt på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc.

Risiko 11: Selgers egenerklæring ikke fremlagt ved befaring – egenerklæringen var ikke tilgjengelig for bygningssakkyndig under befaringen og måtte ettersendes. Dette svekker grunnlaget for tilstandsrapporten.
  Confidence: 0.88
  Evidens: Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei. Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres.

Risiko 12: Ingen radonmåling er foretatt – selger svarer 'Nei' på spørsmål om radonmåling. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonnivåer i boligen.
  Confidence: 0.85
  Evidens: Er det foretatt radonmåling? Nei.

Risiko 13: Reguleringsplan under grunnen – det er en reguleringsplan for veggrunn (E39/RV580 Rådal-Sørås) under eiendommen. Dette kan på sikt påvirke eiendommen og dens omgivelser.
  Confidence: 0.8
  Evidens: Reguleringsplaner under grunnen: Ytrebygda/Fana. Gnr 119 mfl., endring av reguleringsplan E 39/RV 580 Rådal - Sørås. Reguleringsformål: annen veggrunn, tekn. anl. Dekningsgrad 12,6%.

Risiko 14: Begrenset adgang til utleie – boligen er i borettslag med begrenset utleieadgang. Utleie krever styrets godkjenning og er begrenset til inntil 3 år. Dette begrenser kjøpers fleksibilitet.
  Confidence: 0.82
  Evidens: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10.

Risiko 15: Dyrehold ikke tillatt – borettslagets vedtekter forbyr dyrehold, med begrenset unntaksadgang. Dette kan være en vesentlig begrensning for kjøpere med eller som ønsker kjæledyr.
  Confidence: 0.8
  Evidens: Det følger av borettslagets vedtekter at dyrehold ikke er tillatt. En andelseier kan, jf. brl §5-11, likevel holde dyr dersom gode grunner taler for det og dyreholdet ikke er til ulempe for de øvrige brukerne av eiendommen.

Dokumentkontekst:
[d113_d113 | Side [1]]
ntar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk Standard NS 3600
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1

---

[d113_d113 | Side [1]]
 nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal

---

[d113_d113 | Side [1]]
er moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det

---

[d113_d113 | Side [1]]
r som gis tilstandsgrad 3.
I tillegg kan det gis TG3 iht. NS3600 på enkelte bygningsdeler slik som etasjeskiller og terrengforhold uten
at det nødvendigvis krever umiddelbare tiltak.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny

---

[d113_d113 | Side [1]]
ke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og

---

[d113_d113 | Side [1]]
svikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Nordåsbrotet 113, 5235 Rådal 2 av 14
46

## Side 47

2. Om rapporten
Om rapporten Rapporten følger kravene i ny

---

[d113_d113 | Side [1]]
disse ikke skjuler vesentlige installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Nordåsbrotet 113, 5235 Rådal 3 av 14
47

## Side 48

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er satt, og
er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i

---

[d113_d113 | Side [1]]
 gjennomgår disse dokumentene før bud legges
inn. Gnr. 121, bnr. 511, ideell andel 1/ 1
i Bergen kommune.Andelsnr. 72 i Nordås Terrasse
All informasjon i tilstandsrapporten anses som kjent for Borettslaget med orgnr. 952493507
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert
Selger
med TG2 og TG3 bør vurderes nøye, da de indikerer
avvik fra normal slitasje og/ eller høy alder, noe som kan Thore Koch
innebære behov for utbedringer.

---

[d113_d113 | Side [1]]
 differansen bestående av
innvendige vegger, piper, sjakter etc. Netto romareal
32

## Side 33

OM EIENDOMMEN
Øvrig
Byggemåte
I forbindelse med salget er det blitt utført en
informasjon
tilstandsrapport av en bygningssakkyndig, som gir en
teknisk gjennomgang av boligen og påpeker eventuelle
Adresse
avvik. Rapporten, sammen med selgers egenerklæring,
er vedlagt salgsoppgaven. Det er viktig at interessenter Nordåsbrotet 113, 5235 RÅDAL
grundig gjennomgår disse dokumentene før bud legges
inn. Gnr. 121, bnr.

---

[d113_d113 | Side [1]]
til 28.11.2026)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 7 7 0 0
Thomas Frøyen thomas@froyentakst.no Nordåsbrotet 113
GNR: 121 BNR: 511 ANR: 72
Frøyen Takst AS 40099909 5235 Rådal
45

## Side 46

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og

---

[d113_d113 | Side [1]]
ilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
I tillegg kan det gis TG3 iht. NS3600

---

[d113_d113 | Side [1]]
ent som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Avløpsrør TG 2 pga alder.
Vannledninger TG 2 pga alder.
Elektrisk TG 2 pga alder samt registrerte endringer uten dokumentasjon.
Varmtvannsbereder TG 2 pga alder/slitasje.
Ventilasjon TG 2 pga slitt avtrekksvifte på bad.
Våtrom: Bad - Overflater TG 2 pga svake fallforhold samt «bom» i flis og svertesopp i fuger i
dusjsone.
Våtrom: Bad - Membran,

---

[d113_d113 | Side [1]]
boligen lovlig kan benyttes, men at det
fortsatt gjenstår arbeid før ferdigattest kan utstedes. Det gjøres oppmerksom på at romfordelingen ovenfor tar
utgangspunkt i tilstandsrapporten. Omkledningsrommet
For å kunne søke om ferdigattest må følgende tiltak er opprinnelig byggemeldt som bod. Se under punkt
gjennomføres på eiendommen: ferdigattest/ midlertidig brukstillatelse for mer
‑ Brannventil i bodvegg ikke montert. informasjon.
‑ Dørbredde må tilfredsstille krav i byggetillatelse
kap.43:22.
Areal
‑ F‑30

---

[d113_d113 | Side [1]]
e 47

2. Om rapporten
Om rapporten Rapporten følger kravene i ny forskrift til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal- og
moderniseringsdepartementet 21.06.2021. Formålet med rapporten er å kartlegge boligens tekniske
tilstand med tanke på behov for tiltak, samt å vise resultatene av en utført tilstandsanalyse for å bidra til økt
trygghet og redusert konfliktnivå ved eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved

---

[d113_d113 | Side [1]]
 måles på samme av overdragelsen.
måte som BRA, men man ser bort fra krav til
himlingshøyde. Arealet inngår ikke i BRA, men opplyses
Eiendommens
om sammen med BRA som et tillegg.
GUA – summen av BRA og AHL. Brukes når boligen har
tilstand
gulvareal som ikke er måleverdig på grunn av for
eksempel skråtak eller lav himlingshøyde. Arealet oppgis Takstmann: Frøyen Takst AS
som tilleggsinformasjon til øvrige arealer.
Type takst avholdt av takstmann: Tilstandsrapport
Sammendrag selgers egenerklæring:

---

[d113_d113 | Side [1]]
ontroll begrenset til de spørsmål og undersøkelser som forskrift til
avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en
kontroll utført av offentlig myndighet (Det lokale eltilsyn) eller registrert elektrovirksomhet, og en
bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll. Tilstandsgraden er
vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder. El-anlegget kan
ha feil og mangler som en slik forenklet

---

[d113_d113 | Side [1]]
av takstmann: Tilstandsrapport
Sammendrag selgers egenerklæring: Selgers
Bygningssakkyndigs
egenerklæringsskjema følger vedlagt salgsoppgaven.
Interessenter oppfordres til å gjennomgå dette nøye.
kommentar til
Moderniseringer og påkostninger: 2024:
arealoppmåling
‑ Montert nye vinduer og altandør (produsert i 2023)
Arealer er målt med laser på stedet. Areal summert
sammen rom for rom vil være noe mindre enn oppgitt
totalt areal. Dette skyldes differansen bestående av
innvendige vegger, piper, sjakter etc.

---

[d113_d113 | Side [1]]
er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: TK 4
77005230
:ecnerefer
tnemucoD
44

## Side 45

Nordåsbrotet 113
5235 RÅDAL
Tilstandsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 1989
BRA: 73 m2
BRA-i: 73 m2
Rapportdato: 28.11.2025 (Gyldig til 28.11.2026)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 7 7

---

[d113_d113 | Side [1]]
 i flis og svertesopp i fuger i
dusjsone.
Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga manglende klemt membran mot sluk samt antatt alder på badet.
Nordåsbrotet 113, 5235 Rådal 4 av 14
48

## Side 49

4. Informasjon om oppdraget
Befaringsdato Rapportdato
25.11.2025 28.11.2025
Hjemmelshavere
Navn: Thore Koch Tilstede ved inspeksjon: Ja
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres.
Informasjon

---

[d113_d113 | Side [1]]
e.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Oppsummering av balkong, terrasse, platting TG-1
Ikke funnet nevneverdige avvik basert på visuell kontroll. Alminnelig slitasjegrad.
6.2 Vinduer og dører
Beskrivelse
Vinduer/altandør med 2-lags isolerglass i trekarmer.
Entrédør med Brann-/lydklasse B30/35db.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Montert

---

[d113_d113 | Side [1]]
 mislighold, eller dersom
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
Tinglyste heftelser
må dekkes av de øvrige andelseierne.
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst 3 heftelser og rettigheter. Disse omhandler Borettslaget har legalpanterett i andelen for krav på
bestemmelse om gjerde og bestemmelse om vann/ dekning av felleskostnader og andre krav fra
kloakkledning. Videre har disse ingen direkte innvirkning borettslaget, på inntil 2 ganger folketrygdens

---

[d113_d113 | Side [1]]
 ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: TK 2
77005230
:ecnerefer
tnemucoD
42

## Side 43

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende

---

[d113_d113 | Side [1]]
ør bud inngis. Kontakt
betaling av felleskostnader, og kan kreve inn pengene før eiendomsmegler for spørsmål.
andre kreditorer, selv om de har lån registrert på andelen.
Selger leverer eiendommen i ryddig og rengjort stand.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
Kontrakts‑
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og
grunnlag
vedlikeholdsansvaret for disse påhviler sameiet.
Adkomst til eiendommen skjer via offentlig til privat

---

[d113_d113 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ eksisterende vedlikehold. Kjøper må ta høyde for at
3 746 237 (Pris inkl. fellesgjeld) felleskostnader og fellesgjeld vil kunne øke i forbindelse
med vedlikeholdsplanen dersom det er arbeid som ikke
Omkostninger faller under eksisterende vedlikehold.
9 300 (Boligkjøperforsikring* (valgfritt))
Fellesgjeld
8 406 (Forhåndsvarsling forkjøpsrett)
545 (Tinglysingsgebyr ‑ hjemmel) Kr 46 237 pr. 24.11.2025
545 (Tinglysningsgebyr ‑

---

[d113_d113 | Side [1]]
urde ha vært oppdaget ved en ordinær
vedlagte materiell eller på https:/ / gjennomgang.
www.soderbergpartners.no/ eiendom/ boligkjoper/
Dersom det oppstår behov for ytterligere avklaringer,
oppfordres interessenter til å kontakte eiendomsmegler
Lovanvendelse
eller egne rådgivere før de gir bud.
Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har

---

[d113_d113 | Side [1]]
du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19

---

[d113_d113 | Side [1]]
 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe

---

[d113_d113 | Side [1]]
kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært

---

[d113_d113 | Side [1]]
 gitt av statlige
34

## Side 35

OM EIENDOMMEN
myndigheter og i kommuneplanens bestemmelser. samtykke fra styret.
Antakelsen er basert på overordnede støyberegninger.
Dette vil kunne få betydning for behandlingen av plan‑ og
Diverse
byggesaker som omfatter den aktuelle eiendommen,
blant annet medføre utredningsplikt for tiltakshaver/ Borettslagsmodellen innebærer at borettslaget eier
forslagsstiller og eventuelt krav om avbøtende tiltak. eiendommen, mens andelseierne eier andeler i
borettslaget, som gir

---

[d113_d113 | Side [1]]
rekte innvirkning borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
på kjøper.
Kjøper og selger er forpliktet til å undertegne standard
Legalpant: Borettslaget har legalpant på inntil 2G som kjøpekontrakt utarbeidet av Emera i forbindelse med
sikkerhet for betaling av felleskostnader. Dette betyr at eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
borettslaget har prioritet over tinglyste lån når det gjelder hos eiendomsmegler før bud inngis. Kontakt
betaling av felleskostnader, og kan kreve

---

[d113_d113 | Side [1]]
fentlige pålegg skal Det må også forventes at eiendommer som har vært i
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.
Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må
innredning som anses som varig tilknyttet boligen, følger kjøper påregne, og dette vil normalt ikke gi grunnlag for
normalt med i handelen, med mindre det foreligger en reklamasjon eller prisavslag.
særskilt avtale mellom

---

[d113_d113 | Side [1]]
for eksempel eksterne Alt utstyr og installasjoner som medfølger overtas slik de
boder. er, uten garanti, med mindre det foreligger en gjeldende
BRA‑b ‑ Innglasset balkong, altan, terrasser. garanti fra produsent eller leverandør.
Andre arealer: Kjøper aksepterer at det kan forekomme hull og merker
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. etter montering av inventar og utstyr som ikke er en del
ALH ‑ Areal med lav himlingshøyde måles på samme av overdragelsen.
måte som BRA, men man ser bort

---

[d113_d113 | Side [1]]
m på visningen mangler fast installert
regnskap ligger vedlagt i salgsoppgaven. oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Vedtekter/ husordensregler Regulerings og arealplaner
Borettslagets vedtekter er vedlagt i salgsoppgaven. Eiendommen er i henhold til reguleringsplan Ytrebygda.
Nordås vest, del 1 datert 21.04.1982 regulert til
boligblokker.
Energimerke
Energikarakter: D Eiendommen befinner seg i følgende hensynssoner:
‑ Landskap: Funksjonell strandsone, berøringsgrad 19,7%
Energifarge:

---

[d113_d113 | Side [1]]
eller det følger av vedtektene. minste boden gjort om til entré. Bruksendring fra
tilleggsdel (bod) til hoveddel (entré) og motsatt er
søknadspliktig. Kjøper påtar seg risikoen for fremtidig
Beskrivelse av
bruk av rommet og eventuelle pålegg fra det offentlige.
Dette inkluderer også risikoen for om søknad om
eiendommen
bruksendring blir godkjent, samt alle kostnader forbundet
med prosessen. Opprinnelig var det byggemeldt med en
Type eiendom
vegg + dør mellom entré og stue, denne veggen er i dag
Eieform:

---

[d113_d113 | Side [1]]
 du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei

---

[d113_d113 | Side [1]]
ndre enn 50 m². Det er Sørås. Reguleringsformål: annen veggrunn, tekn. anl.
eier som har plikt til å fremlegge energiattest og er Dekningsgrad 12,6%.
ansvarlig for at opplysningene er korrekte.
Planer i nærheten av eiendommen:
Dersom eier ikke har lagt frem energiattest, og eier etter ‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027.
skriftlig anmodning fra kjøper ikke har fremlagt Bystyret legger til grunn at revisjon av
energiattest før avtale om salg er inngått, kan kjøper få KPA‑bestemmelsene skal

---

[d113_d113 | Side [1]]
etene.
Opplyst tillegsreal som eksterne boder i fellesarealer er målt på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc.
Det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m². Eier kjenner dog ikke til denne.
Nordåsbrotet 113, 5235 Rådal 6 av 14
50

## Side 51

6. Hovedrapport
6.1 Balkong, terrasse, platting
Type Platting
Terrasseplatting på 18,3 m² med dekke av terrassebord i trevirke.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er

---

[d113_d113 | Side [1]]
likevel holde
elektrisk arbeid/ anlegg montert etter 01.01.1999. dyr dersom gode grunner taler for det og dyreholdet ikke
‑ Varmtvannsbereder grunnet alder/ slitasje. er til ulempe for de øvrige brukerne av eiendommen.
‑ Ventilasjon på grunn av noe slitt avtrekksvifte på bad.
‑ Overflater på bad på grunn av at fallforhold til sluk er Forkjøpsrett: Det er forkjøpsrett i borettslaget.
mindre enn referansenivået, det registreres "bom" (løs Forkjøpsretten er forhåndsavklart i forkant av
flis) på gulv ved dør

---

[d113_d113 | Side [1]]
erdigattest ikke vil bli
Tomt
utstedt for ufullførte byggesaker/ bygningsmeldinger
Tomtetype: Eiet som er fra før 1998. Det er viktig å merke seg at selv om
ferdigattest foreligger, gir det ingen garanti for at bygget
Tomtestørrelse: 27851.9 m² er oppført i henhold til tillatelsen og gjeldende regelverk,
eller at det senere er utført arbeid på bygget som ikke er
Felles eiet tomt for borettslaget. byggemeldt eller godkjent.
Tomten er fellesareal, noe som innebærer at borettslaget Det gjøres oppmerksom på at

---

[d113_d113 | Side [1]]
endommen, mens andelseierne eier andeler i
borettslaget, som gir borett til en bestemt bolig.
For mer informasjon om reguleringsforhold, kontakt Andelseierne har ikke personlig ansvar for borettslagets
megler eller søk på saksnummer, adresse eller gårds‑ og fellesgjeld, men de må dekke borettslagets løpende
bruksnummer på Plan‑ og bygningsetatens hjemmeside. utgifter. Manglende innbetaling av fellesutgiftene som
følge av andre andelshaveres mislighold, eller dersom
borettslaget sitter på fraflyttede og/

---

[d113_d113 | Side [1]]
byr ‑ hjemmel) Kr 46 237 pr. 24.11.2025
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Lånebetingelser fellesgjeld: Borettslaget har en samlet
9 496 (Omkostninger totalt (uten Boligkjøperforsikring)) fellesgjeld per 24.11.2025 på kr 5 963 263,‑ fordelt på
18 796 (Omkostninger totalt (med Boligkjøperforsikring)) andelene:
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Dnb Bank ASA, annuitetslån
3 755 733 (Totalpris inkl. omkostninger (uten

---

[d113_d113 | Side [1]]
s.no. Laget er sikret mot tap som følge av
at en andelseier ikke betaler sine felleskostnader, etter
gjeldende vilkår. Avtalen om sikring er gyldig til den sier
Felleskostnader
opp av en av partene.
Felleskostnader kr 4 822,‑ pr. mnd
Andre kostnader:
Felleskostnader inkulderer: Tv og internett, styrehonorar,
renter og avdrag på felles lån, forretningsførsel, TV/ Internett/ Bredbånd: Grunnpakke kabel‑tv og internett
kommunale avgifter, eiendomsskatt, felles er inkludert i de månedlige

---

[d113_d113 | Side [1]]
: kr 4 229,‑
Prisantydning
Kr 3 700 000 Felleskostnadene kan bli besluttet økt etter utarbeidelse
av salgsoppgaven. Det gjøres oppmerksom på at
borettslaget er i gang med å utarbeide en
Omkostning kjøper
vedlikeholdsplan. Vedlikeholdsplanen er per nå ikke
3 700 000,00 (Prisantydning) ferdig utarbeidet og styreleder opplyser at mye av
46 237 (Andel av fellesgjeld) vedlikeholdet vil mest sannsynlig falle under
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ eksisterende vedlikehold. Kjøper må ta

---

[d113_d113 | Side [1]]


## Side 20

(Ingen tekst ekstrahert)

## Side 21

(Ingen tekst ekstrahert)

## Side 22

(Ingen tekst ekstrahert)

## Side 23

(Ingen tekst ekstrahert)

## Side 24

(Ingen tekst ekstrahert)

## Side 25

(Ingen tekst ekstrahert)

## Side 26

Plantegning

## Side 27

Plantegning

## Side 28

NORDÅSBROTET 113
OM EIENDOMMEN

## Side 29

OM EIENDOMMEN
OM EIENDOMMEN
Felleskostnadene fordeles slik:
Økonomi
Tv og internett: kr 593,‑
Felleskostnader: kr 4 229,‑
Prisantydning
Kr 3 700 000 Felleskostnadene kan bli

---

[d113_d113 | Side [1]]
jøpsretten er forhåndsavklart i forkant av
flis) på gulv ved dør og noe svertesopp i fuger. annonsering.
‑ Membran, tettesjikt og sluk da slukmansjett/ membran
ikke er klemt i sluk. Styregodkjennelse: Kjøper må godkjennes av
borettslagets styre. Styret kan kun nekte godkjenning
dersom det foreligger saklig grunnlag, jf. borettslagsloven
§ 4‑4.
33

## Side 34

OM EIENDOMMEN
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets Hvis et rom på visningen mangler fast installert
regnskap ligger vedlagt i

---

[d113_d113 | Side [1]]
r sameiet.
Adkomst til eiendommen skjer via offentlig til privat vei.
Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper og
Utleie
selger.
Adgang til utleie: Det er begrenset adgang til å leie ut
bolig i borettslag. Med styrets godkjenning og under
Forsikring
visse vilkår kan boligen leies ut i inntil 3 år, jf.
borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i Boligselgerforsikring: Selger har tegnet
boligen, har imidlertid rett til å leie ut deler av boligen til

---

[d113_d113 | Side [1]]
l, noe som innebærer at borettslaget Det gjøres oppmerksom på at de opprinnelige godkjente
eier og disponerer over de aktuelle områdene i tegningene ikke stemmer overens med dagens
fellesskap. Dette gir ikke hver enkelt andel en eksklusiv planløsning. Opprinnelig var det et innhuk i entré, som nå
rett til bruk eller å disponere over områdene, med mindre er medtatt inn i den største boden. Videre er deler av den
annet er uttrykkelig avtalt eller det følger av vedtektene. minste boden gjort om til entré.

---

[d113_d113 | Side [1]]

trekledning og plater i fasade. Vinduer med
isolerglass. Saltak tekket med betongtakstein. Borettslagets forsikringsselskap: Tryg Forsikring
Bygningsdeler vurdert med TG2: Polisenummer fellesforsikring: 3764474
‑ Innvendige avløpsrør på grunn av alder.
‑ Vannrør grunnet alder. Husdyr: Det følger av borettslagets vedtekter at dyrehold
‑ Elektrisk da det ikke er fremlagt samsvarserklæring på ikke er tillatt. En andelseier kan, jf.brl §5‑11, likevel holde
elektrisk arbeid/ anlegg montert etter 01.01.1999.

---

[d113_d113 | Side [1]]
t tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet yttervegger,
takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Informasjon om boligen
Adresse: Nordåsbrotet 113, 5235 Rådal
Kommunenr: 4601 Gårdsnr: 121 Bruksnr: 511 Festenr:
Seksjonsnr: Andelsnr: 72 Leilighetsnr:
Byggeår: 1989 - Kilde: Eiendomsverdi
Boligtype: Leilighet
Generell beskrivelse av boligen:
BYGGEMÅTE
Grunnmur,

---

[d113_d113 | Side [1]]
# d113.pdf

## Side 1

Nordåsbrotet 113

## Side 2

Velkommen til
din nye bolig

## Side 3

Velkommen til
din nye bolig

## Side 4

(Ingen tekst ekstrahert)

## Side 5

(Ingen tekst ekstrahert)

## Side 6

NØKKELINFORMASJON
PRISANTYDNING BRA‑I/ BRA TOTAL ENERGIMERKING
Kr 3 700 000,‑ 73/ 73 kvm D ‑ Gul
OMKOSTNING KJØPER BOLIGTYPE TOMTEAREAL
18 796,‑ Andelsleilighet 27851.9 m² (eiet)
TOTALPRIS EIEFORM
3 765 033,‑ Borettslag
FELLESKOSTNADER ANTALL SOVEROM
4 822,‑ pr. mnd 1
FELLESGJELD ETASJE
Kr 46 237,‑

---

[d113_d113 | Side [1]]
ndskap: Funksjonell strandsone, berøringsgrad 19,7%
Energifarge: Gul ‑ Gul støysone: Veistøy, berøringsgrad 16,7%
‑ Under grunnen: Andre sikringssoner, berøringsgrad
12,6%
Info energiklasse
Alle eiendommer som selges eller leies ut skal ha en Reguleringsplaner under grunnen: Ytrebygda/ Fana. Gnr
energiattest. Unntak gjelder blant annet for frittstående 119 mfl., endring av reguleringsplan E 39/ RV 580 Rådal ‑
bygninger med et bruksareal mindre enn 50 m². Det er Sørås. Reguleringsformål: annen veggrunn,

---

[d113_d113 | Side [1]]
ke kontrollert
Har boligen åpenbare ulovligheter (F.eks ulovlige bruksendringer)? Nei
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Nordåsbrotet 113, 5235 Rådal 8 av 14
52

## Side 53

Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på

---

[d113_d113 | Side [1]]
t. Konferer gjerne med megler før bud avgis.
Dersom kjøper er en juridisk enhet, eller en fysisk person
som handler i næringssammenheng, regnes kjøpet ikke Bud som har forbehold om konfidensialitet ("hemmelige
som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
oppfordres til å inngi bud via eiendomsmegler.
Ved slike kjøp selges eiendommen «som den er», og
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling

---

[d113_d113 | Side [1]]
endingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven §

---

[d113_d113 | Side [1]]
sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: TK 3
77005230
:ecnerefer
tnemucoD
43

## Side 44

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og

---

[d113_d113 | Side [1]]
ilke produkter/ tjenester kjøper og selger får i
forbindelse med oppdraget, kan variere ut fra hvor i
39

## Side 40

NORDÅSBROTET 113

## Side 41

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Bergen
Oppdragsnr.
03250077
Selger 1 navn
Thore Koch
Gateadresse
Nordåsbrotet 113
Poststed Postnr
RÅDAL 5235
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År

---

[d113_d113 | Side [1]]
øke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom

---

[d113_d113 | Side [1]]
eventuelt
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon,
Ved beregning av krav om prisavslag eller erstatning må finansieringsplan, akseptfrist, overtakelsesdato og
kjøper selv dekke kostnader med inntil kr 10 000 (som en eventuelle forbehold som for eksempel usikker
egenandel). finansiering, salg av nåværende bolig ol. Normalt vil ikke
et bud med forbehold bli akseptert før forbeholdet er
Ikke‑forbruker – definisjon og vilkår: avklart. Konferer gjerne med megler før bud avgis.
Dersom kjøper er en

---

[d113_d113 | Side [1]]
egler. Tilrettelegging: kr 9 000,‑
Visninger/ overtagelser: kr 3 900,‑ pr. stk.
Markedspakke: kr 24 850,‑
Betalingsbetingelser
Oppgjørshonorar inkl. factoring: kr 7 500,‑
Hele oppgjøret må betales samlet fra en norsk Grunnpakke bolig info: kr 5 500,‑
bankkonto. Overføringer fra utlandet aksepteres kun Eierskiftegebyr: kr 6 725,‑
unntaksvis, og kun dersom dette er forhåndsavtalt med
megler i forbindelse med aksept av budet. Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
er estimert til

---

[d113_d113 | Side [1]]
religger en reklamasjon eller prisavslag.
særskilt avtale mellom partene om noe annet, jf.
avhendingsloven § 3‑5. Avtalerettslig
Partenes rettigheter og plikter reguleres av avtalen
En standard tilbehørsliste utarbeidet av Norges mellom partene, og all tilgjengelig dokumentasjon som
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og forelå for kjøper før handelen ble inngått. I tillegg gjelder
gjelder som utgangspunkt for hva som inkluderes i salget avhendingsloven. Det gjelder ulike avtalevilkår

---

[d113_d113 | Side [1]]
 interessenter anbefales derfor å undersøke eiendommen
Partners. Boligkjøperforsikring er en rettshjelpsforsikring nøye, gjerne sammen med fagperson, før bud gis.
som gir trygghet og profesjonell juridisk hjelp dersom det Dersom kjøper velger å kjøpe uten å ha sett
oppdages uventede feil eller mangler ved boligen de eiendommen, kan det ikke etter overtakelse reklameres
neste fem årene. Les mer om Boligkjøperforsikring i på forhold som burde ha vært oppdaget ved en ordinær
vedlagte materiell eller på

---

[d113_d113 | Side [1]]
iftlig overfor
finansiering, salg av nåværende bolig ol. Normalt vil ikke budgivere at budene deres er mottatt. For øvrig vil megler,
et bud med forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold.
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i

---

[d113_d113 | Side [1]]
 er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller

---

[d113_d113 | Side [1]]
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks –

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Flere bygningsdeler med TG2 – avløpsrør og vannledninger er vurdert til TG2 på grunn av alder. Dette indikerer behov for vedlikehold eller utskifting i nær fremtid, med risiko for lekkasjer og vannskader.",
      "evidence": [
        "Avløpsrør TG 2 pga alder. (Rapportsammendrag)",
        "Vannledninger TG 2 pga alder. (Rapportsammendrag)",
        "Innvendige avløpsrør på grunn av alder. (Byggemåte-beskrivelse)",
        "Vannrør grunnet alder. (Byggemåte-beskrivelse)",
        "Byggeår 1989 – rørene er over 35 år gamle"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Elektrisk anlegg vurdert til TG2 – manglende samsvarserklæring for elektrisk arbeid/anlegg montert etter 01.01.1999, samt registrerte endringer uten dokumentasjon. Dette utgjør en sikkerhetsrisiko og kan medføre kostbare utbedringer.",
      "evidence": [
        "Elektrisk TG 2 pga alder samt registrerte endringer uten dokumentasjon. (Rapportsammendrag)",
        "Elektrisk da det ikke er fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999. (Byggemåte-beskrivelse)",
        "El-anlegget kan ha feil og mangler som en slik forenklet kontroll ikke avdekker. (Tilstandsrapport)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Varmtvannsbereder vurdert til TG2 på grunn av alder og slitasje. Risiko for havari og vannskader, og utskifting må påregnes i nær fremtid.",
      "evidence": [
        "Varmtvannsbereder TG 2 pga alder/slitasje. (Rapportsammendrag)",
        "Varmtvannsbereder grunnet alder/slitasje. (Byggemåte-beskrivelse)",
        "Byggeår 1989 – potensielt svært gammel bereder"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Badet har flere TG2-avvik: svake fallforhold til sluk, 'bom' (løs flis) på gulv ved dør, svertesopp i fuger i dusjsone, samt manglende klemt membran mot sluk. Dette innebærer risiko for fuktskader og lekkasjer.",
      "evidence": [
        "Våtrom: Bad - Overflater TG 2 pga svake fallforhold samt «bom» i flis og svertesopp i fuger i dusjsone. (Rapportsammendrag)",
        "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga manglende klemt membran mot sluk samt antatt alder på badet. (Rapportsammendrag)",
        "Fallforhold til sluk er mindre enn referansenivået, det registreres 'bom' (løs flis) på gulv ved dør og noe svertesopp i fuger. (Byggemåte-beskrivelse)",
        "Membran, tettesjikt og sluk da slukmansjett/membran ikke er klemt i sluk. (Byggemåte-beskrivelse)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Ventilasjon vurdert til TG2 på grunn av slitt avtrekksvifte på bad. Dårlig ventilasjon kan føre til fuktopphopning og muggvekst.",
      "evidence": [
        "Ventilasjon TG 2 pga slitt avtrekksvifte på bad. (Rapportsammendrag)",
        "Ventilasjon på grunn av noe slitt avtrekksvifte på bad. (Byggemåte-beskrivelse)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Ulovlig/ikke-godkjent planløsning – opprinnelige godkjente tegninger stemmer ikke overens med dagens planløsning. Bod er omgjort til entré uten søknad om bruksendring, noe som er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.",
      "evidence": [
        "De opprinnelige godkjente tegningene ikke stemmer overens med dagens planløsning. (Salgsoppgave)",
        "Deler av den minste boden gjort om til entré. Bruksendring fra tilleggsdel (bod) til hoveddel (entré) og motsatt er søknadspliktig. (Salgsoppgave)",
        "Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige. (Salgsoppgave)",
        "Omkledningsrommet er opprinnelig byggemeldt som bod. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R7",
      "description": "Manglende ferdigattest – det gjenstår arbeid før ferdigattest kan utstedes. Blant annet mangler brannventil i bodvegg, dørbredde tilfredsstiller ikke krav, og F-30 krav er ikke oppfylt. Dette kan medføre pålegg og kostnader for kjøper.",
      "evidence": [
        "For å kunne søke om ferdigattest må følgende tiltak gjennomføres: Brannventil i bodvegg ikke montert. Dørbredde må tilfredsstille krav i byggetillatelse kap.43:22. F-30. (Salgsoppgave)",
        "Boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes. (Salgsoppgave)",
        "Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert. (Tilstandsrapport)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Fellesgjeld og risiko for økte felleskostnader – borettslaget er i gang med å utarbeide en vedlikeholdsplan som ikke er ferdigstilt. Felleskostnader og fellesgjeld kan øke. Andelseierne er indirekte eksponert for andre andelshaveres mislighold.",
      "evidence": [
        "Borettslaget er i gang med å utarbeide en vedlikeholdsplan. Vedlikeholdsplanen er per nå ikke ferdig utarbeidet. (Salgsoppgave)",
        "Kjøper må ta høyde for at felleskostnader og fellesgjeld vil kunne øke i forbindelse med vedlikeholdsplanen. (Salgsoppgave)",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne. (Salgsoppgave)",
        "Kr 46 237 pr. 24.11.2025 (andel fellesgjeld). (Salgsoppgave)",
        "Borettslaget har en samlet fellesgjeld per 24.11.2025 på kr 5 963 263,-. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R9",
      "description": "Støysone og hensynssoner – eiendommen ligger i gul støysone (veistøy) med berøringsgrad 16,7%, i funksjonell strandsone og under grunnen er det andre sikringssoner. Dette kan påvirke bruken av eiendommen og fremtidige byggesaker.",
      "evidence": [
        "Gul støysone: Veistøy, berøringsgrad 16,7%. (Salgsoppgave)",
        "Landskap: Funksjonell strandsone, berøringsgrad 19,7%. (Salgsoppgave)",
        "Under grunnen: Andre sikringssoner, berøringsgrad 12,6%. (Salgsoppgave)",
        "Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagsstiller og eventuelt krav om avbøtende tiltak. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Ukjent ekstern bod – det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m², men eier kjenner ikke til denne. Eierforhold og bruksrett til boden er uavklart.",
      "evidence": [
        "Det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m². Eier kjenner dog ikke til denne. (Tilstandsrapport)",
        "Opplyst tilleggsreal som eksterne boder i fellesarealer er målt på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc. (Tilstandsrapport)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Selgers egenerklæring ikke fremlagt ved befaring – egenerklæringen var ikke tilgjengelig for bygningssakkyndig under befaringen og måtte ettersendes. Dette svekker grunnlaget for tilstandsrapporten.",
      "evidence": [
        "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei. Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres. (Tilstandsrapport)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Ingen radonmåling er foretatt – selger svarer 'Nei' på spørsmål om radonmåling. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonnivåer i boligen.",
      "evidence": [
        "Er det foretatt radonmåling? Nei. (Egenerklæringsskjema)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Reguleringsplan under grunnen – det er en reguleringsplan for veggrunn (E39/RV580 Rådal-Sørås) under eiendommen. Dette kan på sikt påvirke eiendommen og dens omgivelser.",
      "evidence": [
        "Reguleringsplaner under grunnen: Ytrebygda/Fana. Gnr 119 mfl., endring av reguleringsplan E 39/RV 580 Rådal - Sørås. Reguleringsformål: annen veggrunn, tekn. anl. Dekningsgrad 12,6%. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Begrenset adgang til utleie – boligen er i borettslag med begrenset utleieadgang. Utleie krever styrets godkjenning og er begrenset til inntil 3 år. Dette begrenser kjøpers fleksibilitet.",
      "evidence": [
        "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Dyrehold ikke tillatt – borettslagets vedtekter forbyr dyrehold, med begrenset unntaksadgang. Dette kan være en vesentlig begrensning for kjøpere med eller som ønsker kjæledyr.",
      "evidence": [
        "Det følger av borettslagets vedtekter at dyrehold ikke er tillatt. En andelseier kan, jf. brl §5-11, likevel holde dyr dersom gode grunner taler for det og dyreholdet ikke er til ulempe for de øvrige brukerne av eiendommen. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Styregodkjenning av kjøper kreves – kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte ved saklig grunnlag, innebærer dette en prosessrisiko og potensiell forsinkelse.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R17",
      "description": "Forkjøpsrett i borettslaget – det er forkjøpsrett i borettslaget. Dette kan medføre at en akseptert handel likevel ikke gjennomføres med opprinnelig kjøper dersom forkjøpsretten benyttes.",
      "evidence": [
        "Det er forkjøpsrett i borettslaget. Forkjøpsretten er forhåndsavklart i forkant av annonsering. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18",
      "description": "Manglende tilstandsvurdering av fellesarealer og borettslagets bygningsdeler – tilstandsrapporten dekker ikke yttervegger, takkonstruksjon, taktekking, drenering, grunnmur og felles arealer. Skjult forfall i disse kan medføre fremtidige kostnader for andelseierne.",
      "evidence": [
        "Det er ikke utført tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft. (Tilstandsrapport)",
        "Borettslaget er i gang med å utarbeide en vedlikeholdsplan som ikke er ferdig utarbeidet. (Salgsoppgave)"
      ],
      "source_documents": [
        "d113_d113"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "Hva er kostnadene for utbedring av TG2-avvik bad membran sluk?",
    "Detaljer om elektrisk anlegg endringer dokumentasjon samsvarserklæring",
    "Ferdigattest brannventil F-30 dørbredde krav detaljer",
    "Borettslagets vedlikeholdsplan innhold og estimerte kostnader",
    "Radonmåling krav leilighet Bergen",
    "Reguleringsplan E39 RV580 konsekvenser for eiendommen",
    "Varmtvannsbereder alder installasjonsdato",
    "Avløpsrør vannledninger alder installasjonsdato 1989",
    "Forkjøpsrett borettslag prosess og frister",
    "Ekstern bod 4,1 m² eierforhold dokumentasjon"
  ],
  "reasoning": "\nGjennomgangen av alle 15 opprinnelig identifiserte risikoer viser at samtlige er godt underbygget av dokumentevidensen. Alle risikoer beholdes med uendret eller justert confidence.\n\n**R1 (Avløpsrør/vannledninger TG2):** Direkte bekreftet i rapportsammendrag og byggemåtebeskrivelse. Byggeår 1989 gir rørene en alder på over 35 år, noe som er godt over forventet levetid for mange rørtyper. Confidence opprettholdes på 0.95.\n\n**R2 (Elektrisk anlegg TG2):** Godt dokumentert med tre separate evidenspunkter. Manglende samsvarserklæring er en konkret og alvorlig mangel. Confidence opprettholdes på 0.95.\n\n**R3 (Varmtvannsbereder TG2):** Bekreftet i to separate steder i dokumentet. Confidence opprettholdes på 0.93.\n\n**R4 (Bad TG2):** Høyest confidence av alle risikoer – fire separate evidenspunkter som alle bekrefter konkrete, målbare avvik. Manglende klemt membran er særlig alvorlig da det kan medføre skjulte lekkasjer. Confidence opprettholdes på 0.97.\n\n**R5 (Ventilasjon TG2):** Bekreftet i to steder. Relativt lavere alvorlighetsgrad enn bad-avvikene, men kombinert med bad-problematikken er dette en forsterkende risiko. Confidence opprettholdes på 0.90.\n\n**R6 (Ulovlig planløsning):** Svært godt dokumentert med fire evidenspunkter. Kjøper påtar seg eksplisitt risikoen iht. salgsoppgaven. Confidence opprettholdes på 0.95.\n\n**R7 (Manglende ferdigattest):** Godt dokumentert. Merk at tilstandsrapporten sier \"ikke kontrollert\" mens salgsoppgaven eksplisitt lister opp manglende tiltak. Dette er en inkonsistens som bør undersøkes nærmere. Confidence opprettholdes på 0.95.\n\n**R8 (Fellesgjeld/felleskostnader):** Godt dokumentert med konkrete tall (andel fellesgjeld kr 46 237, total fellesgjeld kr 5 963 263). Vedlikeholdsplan ikke ferdigstilt er en klar usikkerhetsfaktor. Confidence opprettholdes på 0.92.\n\n**R9 (Støysone/hensynssoner):** Godt dokumentert med konkrete berøringsgrader. Confidence opprettholdes på 0.88.\n\n**R10 (Ukjent ekstern bod):** Bekreftet i tilstandsrapporten. Eiers manglende kjennskap er en klar risiko for kjøper. Confidence opprettholdes på 0.85.\n\n**R11 (Egenerklæring ikke fremlagt):** Direkte bekreftet. Merk at egenerklæringen er vedlagt salgsoppgaven, så den ble ettersendt og inkludert. Risikoen er at rapporten kan ha blitt utarbeidet uten full informasjon fra selger. Confidence opprettholdes på 0.88.\n\n**R12 (Ingen radonmåling):** Direkte bekreftet i egenerklæringsskjema. Confidence opprettholdes på 0.85.\n\n**R13 (Reguleringsplan under grunnen):** Bekreftet. Confidence opprettholdes på 0.80.\n\n**R14 (Begrenset utleieadgang):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.82.\n\n**R15 (Dyrehold ikke tillatt):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.80.\n\n**Nye risikoer identifisert:**\n\n**R16 (Styregodkjenning):** Dokumentert i salgsoppgaven. Selv om dette er standard for borettslag, er det en prosessrisiko som bør nevnes. Confidence settes til 0.75.\n\n**R17 (Forkjøpsrett):** Dokumentert i salgsoppgaven. Forkjøpsretten er forhåndsavklart, noe som reduserer risikoen noe, men den er fortsatt til stede. Confidence settes til 0.78.\n\n**R18 (Manglende tilstandsvurdering av fellesarealer):** Eksplisitt nevnt i tilstandsrapporten at borettslagets bygningsdeler ikke er vurdert. Kombinert med manglende vedlikeholdsplan er dette en vesentlig risiko. Confidence settes til 0.85.\n\n**Ytterligere spørsmål som bør undersøkes:**\n- Hva er de konkrete kostnadene for utbedring av TG2-avvik, særlig på bad?\n- Hva er alderen på varmtvannsberederen (installasjonsdato)?\n- Hva inneholder borettslagets vedlikeholdsplan og hva er estimerte kostnader?\n- Hva er konsekvensene av reguleringsplanen for E39/RV580 for eiendommen konkret?\n- Er forkjøpsretten faktisk avklart og hva er fristen?\n"
}

## Raw Response
```json
{
  "id": "msg_01D5AzeAw8ptzKRkzKZSDigr",
  "container": null,
  "content": [
    {
      "id": "toolu_01MDMZStmF56wxTJaeSr9oMY",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Flere bygningsdeler med TG2 – avløpsrør og vannledninger er vurdert til TG2 på grunn av alder. Dette indikerer behov for vedlikehold eller utskifting i nær fremtid, med risiko for lekkasjer og vannskader.",
            "evidence": [
              "Avløpsrør TG 2 pga alder. (Rapportsammendrag)",
              "Vannledninger TG 2 pga alder. (Rapportsammendrag)",
              "Innvendige avløpsrør på grunn av alder. (Byggemåte-beskrivelse)",
              "Vannrør grunnet alder. (Byggemåte-beskrivelse)",
              "Byggeår 1989 – rørene er over 35 år gamle"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Elektrisk anlegg vurdert til TG2 – manglende samsvarserklæring for elektrisk arbeid/anlegg montert etter 01.01.1999, samt registrerte endringer uten dokumentasjon. Dette utgjør en sikkerhetsrisiko og kan medføre kostbare utbedringer.",
            "evidence": [
              "Elektrisk TG 2 pga alder samt registrerte endringer uten dokumentasjon. (Rapportsammendrag)",
              "Elektrisk da det ikke er fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999. (Byggemåte-beskrivelse)",
              "El-anlegget kan ha feil og mangler som en slik forenklet kontroll ikke avdekker. (Tilstandsrapport)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Varmtvannsbereder vurdert til TG2 på grunn av alder og slitasje. Risiko for havari og vannskader, og utskifting må påregnes i nær fremtid.",
            "evidence": [
              "Varmtvannsbereder TG 2 pga alder/slitasje. (Rapportsammendrag)",
              "Varmtvannsbereder grunnet alder/slitasje. (Byggemåte-beskrivelse)",
              "Byggeår 1989 – potensielt svært gammel bereder"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Badet har flere TG2-avvik: svake fallforhold til sluk, 'bom' (løs flis) på gulv ved dør, svertesopp i fuger i dusjsone, samt manglende klemt membran mot sluk. Dette innebærer risiko for fuktskader og lekkasjer.",
            "evidence": [
              "Våtrom: Bad - Overflater TG 2 pga svake fallforhold samt «bom» i flis og svertesopp i fuger i dusjsone. (Rapportsammendrag)",
              "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga manglende klemt membran mot sluk samt antatt alder på badet. (Rapportsammendrag)",
              "Fallforhold til sluk er mindre enn referansenivået, det registreres 'bom' (løs flis) på gulv ved dør og noe svertesopp i fuger. (Byggemåte-beskrivelse)",
              "Membran, tettesjikt og sluk da slukmansjett/membran ikke er klemt i sluk. (Byggemåte-beskrivelse)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Ventilasjon vurdert til TG2 på grunn av slitt avtrekksvifte på bad. Dårlig ventilasjon kan føre til fuktopphopning og muggvekst.",
            "evidence": [
              "Ventilasjon TG 2 pga slitt avtrekksvifte på bad. (Rapportsammendrag)",
              "Ventilasjon på grunn av noe slitt avtrekksvifte på bad. (Byggemåte-beskrivelse)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Ulovlig/ikke-godkjent planløsning – opprinnelige godkjente tegninger stemmer ikke overens med dagens planløsning. Bod er omgjort til entré uten søknad om bruksendring, noe som er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.",
            "evidence": [
              "De opprinnelige godkjente tegningene ikke stemmer overens med dagens planløsning. (Salgsoppgave)",
              "Deler av den minste boden gjort om til entré. Bruksendring fra tilleggsdel (bod) til hoveddel (entré) og motsatt er søknadspliktig. (Salgsoppgave)",
              "Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige. (Salgsoppgave)",
              "Omkledningsrommet er opprinnelig byggemeldt som bod. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R7",
            "description": "Manglende ferdigattest – det gjenstår arbeid før ferdigattest kan utstedes. Blant annet mangler brannventil i bodvegg, dørbredde tilfredsstiller ikke krav, og F-30 krav er ikke oppfylt. Dette kan medføre pålegg og kostnader for kjøper.",
            "evidence": [
              "For å kunne søke om ferdigattest må følgende tiltak gjennomføres: Brannventil i bodvegg ikke montert. Dørbredde må tilfredsstille krav i byggetillatelse kap.43:22. F-30. (Salgsoppgave)",
              "Boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes. (Salgsoppgave)",
              "Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert. (Tilstandsrapport)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Fellesgjeld og risiko for økte felleskostnader – borettslaget er i gang med å utarbeide en vedlikeholdsplan som ikke er ferdigstilt. Felleskostnader og fellesgjeld kan øke. Andelseierne er indirekte eksponert for andre andelshaveres mislighold.",
            "evidence": [
              "Borettslaget er i gang med å utarbeide en vedlikeholdsplan. Vedlikeholdsplanen er per nå ikke ferdig utarbeidet. (Salgsoppgave)",
              "Kjøper må ta høyde for at felleskostnader og fellesgjeld vil kunne øke i forbindelse med vedlikeholdsplanen. (Salgsoppgave)",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne. (Salgsoppgave)",
              "Kr 46 237 pr. 24.11.2025 (andel fellesgjeld). (Salgsoppgave)",
              "Borettslaget har en samlet fellesgjeld per 24.11.2025 på kr 5 963 263,-. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R9",
            "description": "Støysone og hensynssoner – eiendommen ligger i gul støysone (veistøy) med berøringsgrad 16,7%, i funksjonell strandsone og under grunnen er det andre sikringssoner. Dette kan påvirke bruken av eiendommen og fremtidige byggesaker.",
            "evidence": [
              "Gul støysone: Veistøy, berøringsgrad 16,7%. (Salgsoppgave)",
              "Landskap: Funksjonell strandsone, berøringsgrad 19,7%. (Salgsoppgave)",
              "Under grunnen: Andre sikringssoner, berøringsgrad 12,6%. (Salgsoppgave)",
              "Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagsstiller og eventuelt krav om avbøtende tiltak. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Ukjent ekstern bod – det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m², men eier kjenner ikke til denne. Eierforhold og bruksrett til boden er uavklart.",
            "evidence": [
              "Det er opplyst i eldre prospekt om tilhørende utvendig bod på 4,1 m². Eier kjenner dog ikke til denne. (Tilstandsrapport)",
              "Opplyst tilleggsreal som eksterne boder i fellesarealer er målt på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc. (Tilstandsrapport)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Selgers egenerklæring ikke fremlagt ved befaring – egenerklæringen var ikke tilgjengelig for bygningssakkyndig under befaringen og måtte ettersendes. Dette svekker grunnlaget for tilstandsrapporten.",
            "evidence": [
              "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei. Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres. (Tilstandsrapport)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Ingen radonmåling er foretatt – selger svarer 'Nei' på spørsmål om radonmåling. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonnivåer i boligen.",
            "evidence": [
              "Er det foretatt radonmåling? Nei. (Egenerklæringsskjema)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Reguleringsplan under grunnen – det er en reguleringsplan for veggrunn (E39/RV580 Rådal-Sørås) under eiendommen. Dette kan på sikt påvirke eiendommen og dens omgivelser.",
            "evidence": [
              "Reguleringsplaner under grunnen: Ytrebygda/Fana. Gnr 119 mfl., endring av reguleringsplan E 39/RV 580 Rådal - Sørås. Reguleringsformål: annen veggrunn, tekn. anl. Dekningsgrad 12,6%. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Begrenset adgang til utleie – boligen er i borettslag med begrenset utleieadgang. Utleie krever styrets godkjenning og er begrenset til inntil 3 år. Dette begrenser kjøpers fleksibilitet.",
            "evidence": [
              "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Dyrehold ikke tillatt – borettslagets vedtekter forbyr dyrehold, med begrenset unntaksadgang. Dette kan være en vesentlig begrensning for kjøpere med eller som ønsker kjæledyr.",
            "evidence": [
              "Det følger av borettslagets vedtekter at dyrehold ikke er tillatt. En andelseier kan, jf. brl §5-11, likevel holde dyr dersom gode grunner taler for det og dyreholdet ikke er til ulempe for de øvrige brukerne av eiendommen. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Styregodkjenning av kjøper kreves – kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte ved saklig grunnlag, innebærer dette en prosessrisiko og potensiell forsinkelse.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R17",
            "description": "Forkjøpsrett i borettslaget – det er forkjøpsrett i borettslaget. Dette kan medføre at en akseptert handel likevel ikke gjennomføres med opprinnelig kjøper dersom forkjøpsretten benyttes.",
            "evidence": [
              "Det er forkjøpsrett i borettslaget. Forkjøpsretten er forhåndsavklart i forkant av annonsering. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18",
            "description": "Manglende tilstandsvurdering av fellesarealer og borettslagets bygningsdeler – tilstandsrapporten dekker ikke yttervegger, takkonstruksjon, taktekking, drenering, grunnmur og felles arealer. Skjult forfall i disse kan medføre fremtidige kostnader for andelseierne.",
            "evidence": [
              "Det er ikke utført tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft. (Tilstandsrapport)",
              "Borettslaget er i gang med å utarbeide en vedlikeholdsplan som ikke er ferdig utarbeidet. (Salgsoppgave)"
            ],
            "source_documents": [
              "d113_d113"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "Hva er kostnadene for utbedring av TG2-avvik bad membran sluk?",
          "Detaljer om elektrisk anlegg endringer dokumentasjon samsvarserklæring",
          "Ferdigattest brannventil F-30 dørbredde krav detaljer",
          "Borettslagets vedlikeholdsplan innhold og estimerte kostnader",
          "Radonmåling krav leilighet Bergen",
          "Reguleringsplan E39 RV580 konsekvenser for eiendommen",
          "Varmtvannsbereder alder installasjonsdato",
          "Avløpsrør vannledninger alder installasjonsdato 1989",
          "Forkjøpsrett borettslag prosess og frister",
          "Ekstern bod 4,1 m² eierforhold dokumentasjon"
        ],
        "reasoning": "\nGjennomgangen av alle 15 opprinnelig identifiserte risikoer viser at samtlige er godt underbygget av dokumentevidensen. Alle risikoer beholdes med uendret eller justert confidence.\n\n**R1 (Avløpsrør/vannledninger TG2):** Direkte bekreftet i rapportsammendrag og byggemåtebeskrivelse. Byggeår 1989 gir rørene en alder på over 35 år, noe som er godt over forventet levetid for mange rørtyper. Confidence opprettholdes på 0.95.\n\n**R2 (Elektrisk anlegg TG2):** Godt dokumentert med tre separate evidenspunkter. Manglende samsvarserklæring er en konkret og alvorlig mangel. Confidence opprettholdes på 0.95.\n\n**R3 (Varmtvannsbereder TG2):** Bekreftet i to separate steder i dokumentet. Confidence opprettholdes på 0.93.\n\n**R4 (Bad TG2):** Høyest confidence av alle risikoer – fire separate evidenspunkter som alle bekrefter konkrete, målbare avvik. Manglende klemt membran er særlig alvorlig da det kan medføre skjulte lekkasjer. Confidence opprettholdes på 0.97.\n\n**R5 (Ventilasjon TG2):** Bekreftet i to steder. Relativt lavere alvorlighetsgrad enn bad-avvikene, men kombinert med bad-problematikken er dette en forsterkende risiko. Confidence opprettholdes på 0.90.\n\n**R6 (Ulovlig planløsning):** Svært godt dokumentert med fire evidenspunkter. Kjøper påtar seg eksplisitt risikoen iht. salgsoppgaven. Confidence opprettholdes på 0.95.\n\n**R7 (Manglende ferdigattest):** Godt dokumentert. Merk at tilstandsrapporten sier \"ikke kontrollert\" mens salgsoppgaven eksplisitt lister opp manglende tiltak. Dette er en inkonsistens som bør undersøkes nærmere. Confidence opprettholdes på 0.95.\n\n**R8 (Fellesgjeld/felleskostnader):** Godt dokumentert med konkrete tall (andel fellesgjeld kr 46 237, total fellesgjeld kr 5 963 263). Vedlikeholdsplan ikke ferdigstilt er en klar usikkerhetsfaktor. Confidence opprettholdes på 0.92.\n\n**R9 (Støysone/hensynssoner):** Godt dokumentert med konkrete berøringsgrader. Confidence opprettholdes på 0.88.\n\n**R10 (Ukjent ekstern bod):** Bekreftet i tilstandsrapporten. Eiers manglende kjennskap er en klar risiko for kjøper. Confidence opprettholdes på 0.85.\n\n**R11 (Egenerklæring ikke fremlagt):** Direkte bekreftet. Merk at egenerklæringen er vedlagt salgsoppgaven, så den ble ettersendt og inkludert. Risikoen er at rapporten kan ha blitt utarbeidet uten full informasjon fra selger. Confidence opprettholdes på 0.88.\n\n**R12 (Ingen radonmåling):** Direkte bekreftet i egenerklæringsskjema. Confidence opprettholdes på 0.85.\n\n**R13 (Reguleringsplan under grunnen):** Bekreftet. Confidence opprettholdes på 0.80.\n\n**R14 (Begrenset utleieadgang):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.82.\n\n**R15 (Dyrehold ikke tillatt):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.80.\n\n**Nye risikoer identifisert:**\n\n**R16 (Styregodkjenning):** Dokumentert i salgsoppgaven. Selv om dette er standard for borettslag, er det en prosessrisiko som bør nevnes. Confidence settes til 0.75.\n\n**R17 (Forkjøpsrett):** Dokumentert i salgsoppgaven. Forkjøpsretten er forhåndsavklart, noe som reduserer risikoen noe, men den er fortsatt til stede. Confidence settes til 0.78.\n\n**R18 (Manglende tilstandsvurdering av fellesarealer):** Eksplisitt nevnt i tilstandsrapporten at borettslagets bygningsdeler ikke er vurdert. Kombinert med manglende vedlikeholdsplan er dette en vesentlig risiko. Confidence settes til 0.85.\n\n**Ytterligere spørsmål som bør undersøkes:**\n- Hva er de konkrete kostnadene for utbedring av TG2-avvik, særlig på bad?\n- Hva er alderen på varmtvannsberederen (installasjonsdato)?\n- Hva inneholder borettslagets vedlikeholdsplan og hva er estimerte kostnader?\n- Hva er konsekvensene av reguleringsplanen for E39/RV580 for eiendommen konkret?\n- Er forkjøpsretten faktisk avklart og hva er fristen?\n"
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
    "input_tokens": 17468,
    "output_tokens": 6275,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
