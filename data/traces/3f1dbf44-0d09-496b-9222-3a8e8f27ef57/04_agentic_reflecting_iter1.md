# Trace: agentic_reflecting_iter1
- **Run ID:** 3f1dbf44-0d09-496b-9222-3a8e8f27ef57
- **Tidspunkt:** 2026-03-25T12:55:54.323259+00:00
- **Varighet:** 123.37s
- **Input tokens:** 18504
- **Output tokens:** 6852

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
Risiko 1: Manglende ferdigattest – kun midlertidig brukstillatelse fra 1981
  Confidence: 0.98
  Evidens: Det foreligger ikke ferdigattest for eneboligen, men det foreligger midlertidig brukstillatelse den 22.07.1981.; For å kunne søke om ferdigattest må følgende tiltak gjennomføres på eiendommen: trapp, hovedinngang mangler, trapp terrasse mangler, utv. grunnmur ikke ferdigpusset, kjeller...; Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.

Risiko 2: Manglende membran på bad i underetasjen – strakstiltak påkrevd
  Confidence: 0.97
  Evidens: Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen.; STORE ELLER ALVORLIGE AVVIK: 4

Risiko 3: Råteskade på rekkverk – strakstiltak påkrevd
  Confidence: 0.97
  Evidens: Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.

Risiko 4: Punktert vindu – strakstiltak påkrevd
  Confidence: 0.96
  Evidens: Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.; Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen.

Risiko 5: Innvendige rekkverk og håndrekker er ikke i henhold til gjeldende forskrifter – mangler håndrekke på veggsiden i trapp ned til kjelleretasjen
  Confidence: 0.96
  Evidens: Innvendig rekkverk og håndrekke i trapp er ikke i.h.t gjeldene forskrifter. Det mangler håndrekke på veggsiden i trapp ned til kjelleretasjen.; Innvendige rekkverk og håndrekker er ikke i henhold til dagens forskrifter.

Risiko 6: Utilstrekkelig fall fra grunnmur – økt risiko for fuktproblemer mot grunnmur
  Confidence: 0.95
  Evidens: Fall fra grunnmur vurderes ikke som tilstrekkelig.; Ved visuell inspeksjon vurderes det at det ikke er tilstrekkelig fall fra grunnmur. Terrenget er skrånet på gavlsider, baksiden og tilnærmet flatt på fremsiden av boligen, med noe fall inn mot grunnmur stedvis.; Risiko: Dette gir øker risikoen for fuktproblemer imot grunnmur.; Konsekvens: Forholdet kan medføre behov for utbedring av grunnmur dersom fuktpåvirkningen...

Risiko 7: Lekkasjer og fuktskjolder på loft – TG2
  Confidence: 0.93
  Evidens: Det er påvist lekkasjer, fuktskjolder, [på loftet]; Loftet er innredet samtidig som boligen ble bygget.; TG 2 5.1 Loft (konstruksjonsoppbygging)

Risiko 8: Svertesopp i garasje – risiko for råteskade og redusert levetid på materialer
  Confidence: 0.93
  Evidens: Undertaket inne i garasjen har stedvis mye svertesopp.; Risiko: Avvikene kan gi økt risiko for råteskade, redusere kvalitet og levetid på materialene.; ingen står montert fornærme grunn og står fuktutsatt.

Risiko 9: Ikke tilfredsstillende fall på gulv mot sluk på bad/kjøkken – TG2
  Confidence: 0.92
  Evidens: Det registreres ikke tilfredsstillende fall på gulv mot sluk. Gulvet er mer eller mindre i vater. TG2; Det er ikke påvist tilfredsstillende høydeforskjell fra toppen av sluket til toppen av membranen ved dørterskelen.; Årsak: Forholdet har karakter som tilsier at det ikke ble utført tilstrekkelig fall på gulvet

Risiko 10: Vinduer, balkong- og terrassedør har passert forventet levetid og er trekkfulle – TG2
  Confidence: 0.92
  Evidens: Vinduer, balkong- og terrassedør har passert sin forventede levetid og har slitte overflater utvendig. TG2; Hjemmelshaver opplyser om at vindu på soverommet er litt trekkfullt og subber i karm.; Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen.

Risiko 11: Ytterdører har passert forventet levetid, mangler gummilist og er trekkfulle – TG2
  Confidence: 0.91
  Evidens: Det settes også tilstandsgrad TG2, grunnet at dører har passert mer enn halvparten av sin forventede levetid.; Hjemmelshaver opplyser om at det mangler gummilist rundt ytterdør og dermed er trekkfullt.; Risiko: Slitasjen kan gi risiko for redusert, tetthet rundt dører skjulte skader, kvalitet og levetid på materialenes overflater.

Risiko 12: Manglende oppdaterte godkjente byggetegninger som samsvarer med boligen
  Confidence: 0.91
  Evidens: Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen.; Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen, se under.

Risiko 13: Innredet kjeller ikke godkjent av bygningsmyndighetene – kun midlertidig brukstillatelse
  Confidence: 0.9
  Evidens: Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen? Svar: Ja – Innredet kjeller etter behov og penger; Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Svar: Nei – Midlertidig brukstillatelse

Risiko 14: Boligen ligger i område med marin leire – potensiell grunnstabilitetsrisiko
  Confidence: 0.88
  Evidens: Temakart fra NGU viser at boligen ligger i ett område over marin leire. Dataene kommer fra NGU.; Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.

Risiko 15: Utvendig terreng, yttertak, takrenner og nedløp ikke vurdert grunnet snø – potensielle skjulte skader
  Confidence: 0.88
  Evidens: Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.; Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.

Risiko 16: Planlagte reguleringsplaner i nærheten (500 meter) kan påvirke omgivelsene – Knipliahagan og Måltrostvegen
  Confidence: 0.85
  Evidens: Det er planlagt utbygging av områdene rundt boligen; Måltrostvegen, samt områdene nedenfor boligen og videre mot Kniplia.; Id 202403 – Detaljregulering for Knipliahagan – Status: Planlegging igangsatt; Id 202303 – Detaljregulering for Måltrostvegen – Status: Planlegging igangsatt

Risiko 17: Elektrisk anlegg nærmer seg eller har passert forventet levetid – risiko for behov for utskifting
  Confidence: 0.83
  Evidens: Utskifting/vedlikehold: Antatt normal forventet levetid før utskifting av elektriske anlegg i boliger er ca 25 - 30 år.; Byggeår: 1982

Risiko 18: Baderomsinnredning ikke vurdert eller satt tilstandsgrad på – risiko for skjulte skader
  Confidence: 0.82
  Evidens: Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.; Risiko: Dette kan gir økt risiko for skjulte skade og andre...

Risiko 19: Stikkledninger for vann og avløp er private – vedlikeholdsansvar påhviler sameiet
  Confidence: 0.8
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 20: Radonmåling er fra 2014 – kan være utdatert, og kjellerrom hadde verdi på 89 Bq/m³
  Confidence: 0.75
  Evidens: Er det foretatt radonmåling? Svar: Ja – Radongodkjent: under faregrensen. ingen tiltak nødvendig; År 2014 – Verdi soverom 47, stue 63 og kjellerrom 89; Hjemmelshaver opplyser om at Radon, det ble foretatt radonmåling i 2014 og 2015 hvor måleresultatet viste radonnivået er under faregrensen.

Risiko 21: Kjøkkenventilator og baderomsvifte kan ha mangler – anbefalt nærmere undersøkelse av fagperson
  Confidence: 0.78
  Evidens: Anbefalt tiltak: Det anbefales å undersøke kjøkkenventilator og baderomsvifte nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.; Konsekvens: Forholdet kan medføre til behov for utbedring eller utskiftning.

Risiko 22: Knotteplast/grunnmursplast kan ha behov for utbedring – anbefalt nærmere undersøkelse
  Confidence: 0.77
  Evidens: Anbefalt tiltak: Det anbefales å undersøke knotteplasten nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.; Konsekvens: Forholdet kan medføre behov for utbedring eller utskifting av knotteplasten.

Risiko 23: Alder- og bruksslitasje på vegger og himlinger i kjeller/underetasje – TG2
  Confidence: 0.75
  Evidens: Vegger og tak/himlinger vurderes å ha alder- og bruksslitasje som slitemerker på overflaten på enkelte rom. TG2; Risiko: Merkene kan gi risiko for redusert kvalitet og levetid på materialenes overflater.

Dokumentkontekst:
[d178_d178 | Side [1]]
 tre/plater med varierende overflater.
51

## Side 52

5/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
OVERORDNET FAGLIG VURDERING AV EIENDOMMEN:
Eneboligen fremstår i grei stand. Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i
underetasjen, punktert vindu og råteskade på rekkverket. Eldre boliger har naturligvis store avvik sett opp mot dagens krav. Det
gis tilstandgrader i.h.t standarden som denne rapporten bygger på med noen skjønnsmessige vurderinger.

---

[d178_d178 | Side [1]]
## Side 47

LERKESVINGEN 18

## Side 48

1/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
ENEBOLIG
Lerkesvingen 18, 2022 Gjerdrum
ANTALL TG BOLIGENS TEKNISKE TILSTAND:
INGEN AVVIK
0
2 INGEN VESENTLIGE AVVIK
11 VESENTLIGE AVVIK
5 STORE ELLER ALVORLIGE AVVIK
4 IKKE UNDERSØKT
Dersom bygningsdelen kun har en tilstandsgrad og ikke er beskrevet, betyr det at det ikke er noen avvik i
forhold til det som kan forventes. Alder tatt i betraktning.
Takstmannens utdypende vurdering av bygningsdeler med TG 2

---

[d178_d178 | Side [1]]
je som slitemerker på overflaten og dører som subber litt i
karm i entre og boder. Det settes også tilstandsgrad TG2, grunnet at dører har passert mer enn halvparten av
sin forventede levetid.
Hjemmelshaver opplyser om at det mangler gummilist rundt ytterdør og dermed er trekkfullt.
Årsak: Ytterdører og innerdører har en naturlig slitasje over tid med en forventet levetid.
Risiko: Slitasjen kan gi risiko for redusert, tetthet rundt dører skjulte skader, kvalitet og levetid på

---

[d178_d178 | Side [1]]
overflaten og dører som subber
litt i karm i entre og boder. Det settes også tilstandsgrad TG2, grunnet at dører har passert mer enn
halvparten av sin forventede levetid.
Hjemmelshaver opplyser om at det mangler gummilist rundt ytterdør og dermed er trekkfullt.
Årsak: Ytterdører og innerdører har en naturlig slitasje over tid med en forventet levetid.
Risiko: Slitasjen kan gi risiko for redusert, tetthet rundt dører skjulte skader, kvalitet og levetid på
materialenes overflater.
Konsekvens: Forholdet kan

---

[d178_d178 | Side [1]]
 laminerte skuffer
- Vegghengt speilskap
- Høyskap med laminerte fronter
- Vegghengt dusj med 1-greps blandebatteri og svingbare glassdører
- WC med innebygd sisterne
Veggfliser, tak/himling vurderes å normal slitasje etter alder og bruk. TG1
Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.
Årsak: Det er Ikke et krav i Avhendingsloven å vurdere eller sette tilstandsgrad på baderomsinnredningen.
Risiko: Dette kan gir økt risiko for skjulte skade og andre

---

[d178_d178 | Side [1]]
igger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen.
Tilstandsrapporten har en gyldighet på 12 mnd. fra rapportdato. Skulle det oppstå skader, endringer eller annet
av betydning ved boligen, oppfordres hjemmelshaver/selger til å informere om forholdene og oppdatere
tilstandsrapporten.
I tilstandsrapporten har den bygningssakkyndige ikke gjort undersøkelser/vurderinger av bygningens estetikk
eller arkitektur.
Det foreligger ikke ferdigattest for eneboligen, men det foreligger

---

[d178_d178 | Side [1]]
 foreligger ikke ferdigattest for eneboligen, men det foreligger midlertidig brukstillatelse den 22.07.1981.
Den bygningssakkyndige har ikke kontrollert om det foreligger offentligrettslige pålegg fra kommunen. Det er
ikke kontrollert om det er pågående byggesaker, endringer i reguleringsplan som berører den aktuelle
eiendommen eller andre ytre påvirkninger.
Innvendig rekkverk og håndrekke i trapp er ikke i.h.t gjeldene forskrifter. Det mangler håndrekke på veggsiden i
trapp ned til kjelleretasjen og

---

[d178_d178 | Side [1]]
je
50 m²
Areal
BRA ‑ i: 185 m²
Garasje/ uthus
BRA ‑ e: 33 m²
BRA ‑ b: 0 m² Bruksareal fordelt på etasje
34

## Side 35

OM EIENDOMMEN
1. etasje
tilstand
BRA‑e: 33 m² Entréveranda og terrasse
Takstmann: August Magnus
Bygningssakkyndigs
Type takst avholdt av takstmann: Tilstandsrapport
kommentar til
Sammendrag selgers egenerklæring: Kjenner du til om
det er utført arbeid på bad/ våtrom?
arealoppmåling
Svar: Ja, kun av faglært
Målt takhøyde i 1.etasje fra 2.33 m ‑ 2.38 m. Beskrivelse: Rehabilitering av bad og

---

[d178_d178 | Side [1]]
 at det kan forekomme
punkterte glass som ikke ble registrert på befaringsdagen.
Det ble foretatt en enkel funksjonstest av enkelte vinduer og terrassedør, ingen funksjonsavvik. Vinduer og
terrassedør vurderes å normal slitasje etter alder og bruk.
Vinduer, balkong- og terrassedør har passert sin forventede levetid og har slitte overflater utvendig. TG2
Hjemmelshaver opplyser om at vindu på soverommet er litt trekkfullt og subber i karm.
Årsak: Vinduer, balkong- og terrassedør har en naturlig slitasje over

---

[d178_d178 | Side [1]]
nredningen
Det ble utført en enkelt test av overflatene, der det stedvis.
registreres ikke tilfredsstillende fall på gulv mot sluk. Årsak: Forholdet tilsier daglig bruk og kjøkkenets alder.
Gulvet er mer eller mindre i vater. TG2 Risiko: Hakk og merke kan gi risiko for redusert kvalitet
37

## Side 38

om eiendommen
og levetid på materialenes overflater.
Konsekvens: Forholdet kan medføre behov for utbedring 9.1.3 Gang, 3 stk boder, kjellerstue, innredet rom,
av skadede overflater. vaskerom og entre

---

[d178_d178 | Side [1]]
 og som tilhører denne, for eksempel eksterne
datert 05.07.1982. Midlertidig brukstillatelse bekrefter at boder.
boligen lovlig kan benyttes, men at det fortsatt gjenstår BRA‑b ‑ Innglasset balkong, altan, terrasser.
arbeid før ferdigattest kan utstedes. For å kunne søke om
ferdigattest må følgende tiltak gjennomføres på Andre arealer:
eiendommen: trapp, hovedinngang mangler, trapp TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
terrasse mangler, utv. grunnmur ikke ferdigpusset, kjeller ALH ‑ Areal

---

[d178_d178 | Side [1]]
 skader eller
vedlikeholdsbehov på disse områdene ikke har blitt oppdaget
under befaringen. For å få en fullverdig vurdering av
eiendommens tilstand på disse punktene anbefales det derfor en
ny inspeksjon når snøforholdene tillater det.
Rapporten legger til grunn boligens tilstand på befaringsdagen og
byggeår. Der hvor anbefalinger fra nyere tekniske forskrifter er
nevnt på eventuelt enkelte punkter i rapporten, er det ikke å anse
som ett avvik, men kun en anbefaling.
Utvendige konstruksjoner over terreng

---

[d178_d178 | Side [1]]
ingen står montert fornærme grunn og står fuktutsatt.
Undertaket inne i garasjen har stedvis mye svertesopp.
Årsak: Avvikene ovenfor har karakter som er forenlig eldre bygninger og feil ved oppføring av bygget.
Risiko: Avvikene kan gi økt risiko for råteskade, redusere kvalitet og levetid på materialene.
Konsekvens: Forholdet kan medføre behov for tiltak som vedlikehold og oppgraderinger.
Anbefalt tiltak: Det anbefales å vurdere vedlikehold, behandling eller utskifting av materialene.
Grunnet mye snø på

---

[d178_d178 | Side [1]]
kan utføres inngrep i vegg eller etasjeskillere ved bad og i rom under terreng for undersøkelse av fukt ved mistanke til alvorlige
avvik. Alle bygningsdeler blir undersøkt, med stor vekt på de områdene som takstmannen, erfaringsmessig, kjenner som svake
punkter. Selv om takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.
For bolig er referansenivået for de ulike rom og bygningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten skader og
fagmessig riktig utført og i

---

[d178_d178 | Side [1]]
er 20 - 60 år.
Utskifting/vedlikehold: Normal til før spyling av drenssystem med drensledninger er 2- 5 år.
Utskifting/vedlikehold: Normal tid før utskifting av knotteplast/grunnmursplast er opptil ca 50 år.
Ingen 1.2 Krypekjeller
Eneboligen har ingen krypkjeller. Se punkt 9.1 om rom under terreng.
Merknader:
TG iu 1.3 Terrengforhold
Fall fra grunnmur vurderes ikke som tilstrekkelig.
Grunnet mye snø på befaringstidspunktet ble det ikke satt tilstandsgrad på utvendig terreng.
Ved visuell inspeksjon vurderes

---

[d178_d178 | Side [1]]
lstandsgrad på utvendig terreng.
Ved visuell inspeksjon vurderes det at det ikke er tilstrekkelig fall fra grunnmur. Terrenget er skrånet på
gavlsider, baksiden og tilnærmet flatt på fremsiden av boligen, med noe fall inn mot grunnmur stedvis.
Årsak: Under oppføringen av boligen er det ikke etablert tilstrekkelig fall fra grunnmur ut mot terreng.
Risiko: Dette gir øker risikoen for fuktproblemer imot grunnmur.
Konsekvens: Forholdet kan medføre behov for utbedring av grunnmur dersom fuktpåvirkningen

---

[d178_d178 | Side [1]]
dert som tilfredsstillende.
Det er ikke påvist tilfredsstillende høydeforskjell fra toppen av sluket til toppen av membranen ved dørterskelen.
Det er ikke påvist flekker eller andre skader.
Gulv: Fliser med varmekabler fra ca 2008.
Det ble utført en enkelt test av overflatene, der det registreres ikke tilfredsstillende fall på gulv mot sluk. Gulvet
er mer eller mindre i vater. TG2
Årsak: Forholdet har karakter som tilsier at det ikke ble utført tilstrekkelig fall på gulvet

---

[d178_d178 | Side [1]]
e eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: AN, GSS 3
82005240
:ecnerefer
tnemucoD
92

## Side 93

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige

---

[d178_d178 | Side [1]]
og forsikring
Ligningsverdi: Fastsettes av skatteetaten
Byggeår: 1982
50

## Side 51

4/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
BEFARINGEN:
Befaringsdato: 20.01.2026
Overskyet/snø og 11 minusgrader.
Eneboligen ble kontrollert/inspisert i dagslys.
Grunnet mye snø på befaringstidspunktet ble ikke utvendig
terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt
tilstandsgrad på. Dette kan innebære at eventuelle skader eller
vedlikeholdsbehov på disse områdene ikke har blitt

---

[d178_d178 | Side [1]]
3/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
MER OM TILSTANDSGRADENE I DENNE RAPPORTEN:
TG 0 betyr at bygningsdelen ikke har noen avvik.
* Det er ingen tegn til slitasje.
TG 0
* Dokumentert fagmessig godt utført.
* Det er ingen merknader.
TG1 betyr at bygningsdelen kan ha mindre avvik.
TG 1 * Som forventet i forhold til alder/bruksslitasje.
* Strakstiltak anses ikke som nødvendig.
TG 2 betyr at bygningsdelen kan ha vesentlige avvik. Eksempler på TG2 kan være at bygningsdelen er:
* Feil

---

[d178_d178 | Side [1]]
sse påhviler sameiet.
Adkomst til eiendommen skjer via offentlig vei.
Tinglyste heftelser
Utleie
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger Adgang til utleie: Det er ikke kjent at det foreligger
eiendommens matrikkel ved overskjøting til ny offentligrettslige regler som er til hinder for at
hjemmelshaver: eiendommen leies ut.
3230/4 6/ 303:
Radonmåling
02.11.1981 ‑ Dokumentnr: 106872 ‑ Rettigheter iflg. skjøte
Rett for kommunen til å

---

[d178_d178 | Side [1]]
arsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Radongodkjent: under faregrensen. ingen tiltak nødvendig
21.1 Radonmåling
År 2014
Verdi soverom 47, stue 63 og kjellerrom 89
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger

---

[d178_d178 | Side [1]]
 kostnad må avklares gjennom
nærmere undersøkelser og tilbud fra fagperson.
EIENDOMSDATA:
Matrikkeldata: Gnr:46, Bnr: 303
Hjemmelshaver: Gro Synnøve Skogvold og Atle Navekvien
Seksjonsnr: -
Festenr: -
Andelsnr: -
Tomt: 919 m²
Konsesjonsplikt: Nei
Adkomst: OFFENTLIG
Vann: OFFENTLIG
Avløp: OFFENTLIG
Regulering: Boligbebyggelse-Nåværende Id KP 2012 - 2024
Offentl. avg. pr. år: Kr 20 314,85 i 2025
Forsikringsforhold: Jernbanepersonalets bank og forsikring
Ligningsverdi: Fastsettes av skatteetaten
Byggeår:

---

[d178_d178 | Side [1]]
og Bo
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Innredet kjeller etter behov og penger
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
Beskrivelse Midlertidig brukstillatelse
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken

---

[d178_d178 | Side [1]]
mnummerering ved
kommuneendring
Reguleringsplaner under arbeid i nærheten (500 meter) Tidligere: Knr:3032 Gnr:46 Bnr:303
Id 202403
Navn Detaljregulering for Knipliahagan Legalpant: Kommunen har legalpant som sikkerhet for
Status Planlegging igangsatt betaling av kommunale avgifter og eventuell
Plantype Detaljregulering eiendomsskatt. Legalpant er et pant som ikke vises i
grunnboksutskriften, og har prioritet foran for eksempel
Id 202303 tinglyste banklån på eiendommen.
Navn Detaljregulering for

---

[d178_d178 | Side [1]]
eldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
43

## Side 44

OM EIENDOMMEN
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til

---

[d178_d178 | Side [1]]
om 3230-46/303
Utskriftsdato: 25.07.2025 11:21
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse opplysningene
benyttes som grunnlag for beslutninger.
Eiendomsdata (Grunneiendom)
Bruksnavn PARSELL 16 Beregnet areal 919.2
Etablert dato 23.07.1981 Historisk oppgitt areal 919,9
Oppdatert dato 19.01.2024 Historisk arealkilde Målebrev (1)
Skyld 0 Antall teiger 1
Bruk av grunn
Arealmerknader
Tinglyst Del i samla fast

---

[d178_d178 | Side [1]]
et ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje

---

[d178_d178 | Side [1]]
 teiger 1
Bruk av grunn
Arealmerknader
Tinglyst Del i samla fast eiendom Grunnforurensning Avtale/Vedtak om gr.erverv
Bestående Under sammenslåing Kulturminne
Seksjonert Klage er anmerket Ikke fullført oppmålingsforr. Frist fullføring:
Har fester Jordskifte er krevd Mangel ved matrikkelføringskrav Frist retting:
Forretninger
Brukstilfelle Forr.dato Kom. saksref. Tingl.status Involverte
Forretningstype M.før.dato Annen ref. Endr.dato Berørte
Omnummerering 01.01.2024 Tinglyst 46/303
Omnummerering 01.01.2024

---

[d178_d178 | Side [1]]
02303 tinglyste banklån på eiendommen.
Navn Detaljregulering for Måltrostvegen
Status Planlegging igangsatt
Vei, vann og avløp
Plantype Detaljregulering
Eiendommen er tilknyttet offentlig vann‑ og
Det er planlagt utbygging av områdene rundt boligen; avløpssystem. Stikkledningene fra eiendommen og ut til
Måltrostvegen, samt områdene nedenfor boligen og det kommunale nettet er private, og
videre mot Kniplia. vedlikeholdsansvaret for disse påhviler sameiet.
Adkomst til eiendommen skjer via offentlig

---

[d178_d178 | Side [1]]
GSS 2
82005240
:ecnerefer
tnemucoD
91

## Side 92

14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Lagt ny takshingel
Arbeid utført av Østreng Bygg og Bo
17 Selges eiendommen med utleiedel, leilighet, hybel eller

---

[d178_d178 | Side [1]]
 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av faglært
Beskrivelse Ved Rune Hagerud
Arbeid utført av Elektro exsperten

---

[d178_d178 | Side [1]]
ter, mindre endringer, etc finnes på internett, se lenker under. Oppgitte delarealer viser planinformasjon på
eiendommen.
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Kommuneplaner under arbeid
Reguleringsplaner Reguleringsplaner under arbeid i nærheten
Plantyper uten treff
Kommunedelplaner Kommunedelplaner under

---

[d178_d178 | Side [1]]
gen.
Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen, se under.
Det er ingen avvik i forhold til rømming og romhøyde, ut ifra gjeldende forskrifter for da boligen/rommene ble
byggemeldt.
Innvendige rekkverk og håndrekker er ikke i henhold til dagens forskrifter.
TILLEGGSOPPLYSNINGER:
Det anbefales å sette seg godt inn i vedlagt dokumentasjon til salgsoppgave samt selgers egenerklæring.
Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med

---

[d178_d178 | Side [1]]


## Side 22

(Ingen tekst ekstrahert)

## Side 23

(Ingen tekst ekstrahert)

## Side 24

UTEOMRÅDET

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

OM EIENDOMMEN

## Side 31

LERKESVINGEN 18
OM EIENDOMMEN

## Side 32

OM EIENDOMMEN
Økonomi
Andre kostnader:
Velforening: Kulsrudfjellet Vel
Prisantydning
Kr 5 990 000 Andre utgifter: Utover kommunale

---

[d178_d178 | Side [1]]
habilitering av bad, kjøkken og
Alt utstyr og installasjoner som medfølger overtas slik de varmtvannstank
er, uten garanti, med mindre det foreligger en gjeldende Arbeid utført av: VEGHEIM RØR‑SERVICE
garanti fra produsent eller leverandør.
Kjøper aksepterer at det kan forekomme hull og merker Kjenner du til om det er/ har vært utført arbeid på
etter montering av inventar og utstyr som ikke er en del el‑anlegget eller andre installasjoner (f.eks. oljetank,
av overdragelsen. sentralfyr, ventilasjon)?
Svar:

---

[d178_d178 | Side [1]]
mnummerering 01.01.2024 Tinglyst 46/303
Omnummerering 01.01.2024 01.01.2024
Omnummerering 01.01.2020 Tinglyst 46/303
Omnummerering 01.01.2020 01.01.2020
Fradeling av grunneiendom 23.07.1981 46/12 (-919,9), 46/303 (919,9)
Kart- og delingsforretning
Teiger (Koordinatsystem: EUREF89 UTM Sone 32)
Type teig X Y H H.teig Ber. areal Arealmerknad
Eiendomsteig 6661218.78 611490.8 0 Ja 919.2
Tinglyste eierforhold
Navn Rolle Adresse Status
ID Andel Poststed Kategori
SKOGVOLD GRO SYNNØVE Hjemmelshaver (H) LERKESVINGEN

---

[d178_d178 | Side [1]]
sareal
BRA-e: Eksternt bruksareal
BRA-b: Innglasset balkong
TBA: Terrasse- og balkongareal
Arealer utenfor boenheten (BRA-e):
Arealer som ligger utenfor selve boenheten er kun inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er
ikke kontrollert om disse arealene rettslig tilhører boenheten eller om de er del av fellesareal. Slike arealer kan omdisponeres av
borettslag/sameie, noe som kan påvirke boligens tilgjengelige bruksareal.
Fellesareal – rettslig avgrensning:
Ved arealmåling

---

[d178_d178 | Side [1]]
 bruksareal.
Fellesareal – rettslig avgrensning:
Ved arealmåling er det NS 3940 som legges til grunn. Standarden har en annen definisjon av fellesareal enn eierseksjonsloven.
Dette kan innebære at arealer som er måleverdig etter NS 3940, ikke nødvendigvis følger boenheten rettslig.
Viktig merknad om måleregler:
Eventuelle arealavvik mellom ulike rapporter kan skyldes endringer i måleregler eller ulik standardpraktisering over tid, og er ikke
nødvendigvis uttrykk for målefeil.
AREAL BOLIG:
Etasje: BRA-i

---

[d178_d178 | Side [1]]
1Gang, 3 stk boder, kjellerstue, innredet rom, vaskerom og entre Veggenes og himlingens overflater
Vegger og tak/himlinger vurderes å ha alder- og bruksslitasje som slitemerker på overflaten på enkelte
rom. TG2
Årsak: Forholdet tilsier daglig bruk og alder.
Risiko: Merkene kan gi risiko for redusert kvalitet og levetid på materialenes overflater.
Konsekvens: Forholdet kan medføre behov for utbedring av skadede overflater.
Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller lokal

---

[d178_d178 | Side [1]]
ør overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med

---

[d178_d178 | Side [1]]
rmasjon fra kommunen, eventuell forbindelse med et salgsoppdrag. Våre
forretningsfører, samt kopi av tinglyste dokumenter. samarbeidspartene er:
Total kostnad ved salg til prisantydning: kr 109 264,00
Dette inkluderer både vederlag og stipulerte utlegg. Søderberg & Partners AS ‑ formidler av boligselger‑ og
boligkjøperforsikring
Ved avbrutt oppdrag: Overo AS ‑ leverandør av digitale oppgjørsskjemaer og
Dersom oppdraget sies opp eller utløper uten at salget overtakelsesprotokoller som også inneholder tilbud

---

[d178_d178 | Side [1]]
ting/vedlikehold: Normal tid før utskifting av ødelagte deler av bjelkelag av heltre eller I-bjelker er 40 - 60
år.
Utskifting/vedlikehold: Normal tid før omlegging av asfalttakshingel er 20 - 30 år.
Utskifting/vedlikehold: Normal tid før fjerne begroing som mose o.l er 5 - 10 år.
5. Loft
TG 2 5.1 Loft (konstruksjonsoppbygging)
Loftet er innredet samtidig som boligen ble bygget.
Det er ikke påvist biologiske skadegjørere fra kaldt-, kne-, hanebjelke-, eller kryploft.
Det er påvist lekkasjer, fuktskjolder,

---

[d178_d178 | Side [1]]
ng
9.1 Gang, 3 stk boder, kjellerstue, innredet rom, vaskerom og entre
TG 2 9.1.1 Veggenes og himlingens overflater
Det vurderes som tilstrekkelig med ventiler i vegger og/eller vinduer.
Rom under terreng er innredet samtidig som boligen ble bygget.
Det er ikke påvist noen nevneverdige riss eller sprekker.
Det er ikke påvist setninger eller jordtrykk.
Det er ikke påvist fuktskjolder, støvkondens, svertesopp og spor etter sopp, råteskader og/eller skadedyr.
Det er tilstrekkelig med ventiler i vegger

---

[d178_d178 | Side [1]]
angler ved anlegget. Konsekvens: Forholdet kan medføre behov for utbedring
Konsekvens: Forholdet kan medføre til behov for eller utskifting av knotteplasten.
utbedring eller utskiftning. Anbefalt tiltak: Det anbefales å undersøke knotteplasten
Anbefalt tiltak: Det anbefales å undersøke nærmere, utført av fagperson, for å avklare omfang og
kjøkkenventilator og baderomsvifte nærmere, utført av behov for utbedring.
fagperson, for å avklare omfang og behov for utbedring. EIER OPPLYSER: Knotteplast vil festes

---

[d178_d178 | Side [1]]
 og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig

---

[d178_d178 | Side [1]]
90,00
Samarbeidspartnere og
Oppgjørshonorar inkl. factoring kr 9 900,00
Tilretteleggingshonorar kr 15 250,00
tilknyttede foretak
Utlegg: Emera Norge AS og eiendomsmeglingsforetakene som
Selger dekker utlegg i henhold til oppdragsavtalen. Disse er tilknyttet Emera har samarbeid med forskjellige
er estimert til ca. kr 12 374,00, og omfatter vanligvis foretak som tilbyr forbrukerne produkter eller tjenester i
innhenting av informasjon fra kommunen, eventuell forbindelse med et salgsoppdrag.

---

[d178_d178 | Side [1]]
tilbud,
Kommunale avgifter
dagligvarebutikker, serveringssteder, treningssenter og
Kr 18 468 (2025) øvrige servicetilbud. Ask fungerer som kommunesenter i
Gjerdrum og er et naturlig samlingspunkt for handel,
Informasjon: De kommunale avgiftene omfatter vann og kultur og aktiviteter i bygda.
avløp, renovasjon samt feie‑ og tilsynsgebyr. Det
fakturerte beløpet kan avvike fra estimatet. Oppvekst og skoler
Området har gode oppvekstvilkår med barnehager,
skoler og fritidstilbud i nærområdet. Gjerdrum

---

[d178_d178 | Side [1]]
r/ 243/
Se tilstandsrapport inkludert i salgsoppgave for nærmere 03%20%20Bestemmelser%20og%20retningslinjer%20t
beskrivelse av bygningsdelene. il%20arealdelen.pdf
Delarealer
Delareal 919 m
Øvrig
Arealbruk Boligbebyggelse,Nåværende
informasjon
Kommuneplaner under arbeid
Id KP2020‑2032
Adresse
Navn Kommuneplanens arealdel 2025‑2037
Lerkesvingen 18, 2022 GJERDRUM Status Planforslag
Plantype Kommuneplanens arealdel
Gnr. 46, bnr. 303, ideell andel 1/ 1
i Gjerdrum kommune. Reguleringsplaner
Id 197901
Navn

---

[d178_d178 | Side [1]]
ns arealdel
Reguleringsplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 197901
Navn Reguleringsplan for område C, Grønlund (Kulsrudfjellet)
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 12.09.1979
Bestemmelser - https://www.arealplaner.no/3230/dokumenter/65/Bestemmelser.pdf
Reguleringsplaner under arbeid i nærheten (500 meter)
Besøk kommunens hjemmeside for mer informasjon
Id 202403
Navn Detaljregulering for Knipliahagan
Status Planlegging igangsatt
Plantype

---

[d178_d178 | Side [1]]
egulering for Knipliahagan
Status Planlegging igangsatt
Plantype Detaljregulering
Id 202303
Navn Detaljregulering for Måltrostvegen
Status Planlegging igangsatt
Plantype Detaljregulering
Side 2 av 2
101

## Side 102

102

## Side 103

103

## Side 104

104

## Side 105

105

## Side 106

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring

---

[d178_d178 | Side [1]]
sjon eller andre brukerønsker, er lagt til grunn.
VÆR OPPMERKSOM PÅ
Egenerklæringsskjema skal alltid legges frem for rapportansvarlig før tilstandsanalysen påbegynnes. Dersom egenerklæring ikke
foreligger, vil dette komme tydelig frem på en av de siste sidene av rapporten under ovenstående overskrift.
Dersom det er lagt frem dokumentasjon av pågående byggesaker og/eller manglende ferdigattest, og/eller midlertidig
brukstillatelse. Så vil også dette komme tydelig frem på en av de siste sidene av rapporten

---

[d178_d178 | Side [1]]
delig vedtatt arealplan
Ikrafttredelse 09.05.2012
Bestemmelser - https://www.arealplaner.no/3230/dokumenter/243/03%20-%20Bestemmelser%20og%20retningslinjer%20til%20arealdelen.pdf
Delarealer Delareal 919 m2
ArealbrukBoligbebyggelse,Nåværende
Kommuneplaner under arbeid
Besøk kommunens hjemmeside for mer informasjon.
Id KP2020-2032
Navn Kommuneplanens arealdel 2025-2037
Status Planforslag
Side 1 av 2
100

## Side 101

Plantype Kommuneplanens arealdel
Reguleringsplaner
Besøk kommunens hjemmeside for mer

---

[d178_d178 | Side [1]]
tt.
Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten. Fundament
ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Temakart fra NGU viser at boligen ligger i ett område over marin leire. Dataene kommer fra NGU. For mer
informasjon om kartet, se internettsiden til NGU.
Hjemmelshaver opplyser om at Radon, det ble foretatt radonmåling i 2014 og 2015 hvor måleresultatet viste
radonnivået er under faregrensen. Ingen tiltak nødvendig.
Grunnmur i pusset

---

[d178_d178 | Side [1]]
 andel 1/ 1
i Gjerdrum kommune. Reguleringsplaner
Id 197901
Navn Reguleringsplan for område C, Grønlund
Selger
(Kulsrudfjellet)
Gro Synnøve Skogvold og Atle Navekvien Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
41

## Side 42

OM EIENDOMMEN
Ikrafttredelse 12.09.1979 Tidligere: Knr:0234 Gnr:46 Bnr:303
Bestemmelser ‑ https:/ / www.arealplaner.no/ 3230/
dokumenter/ 65/ Bestemmelser.pdf 01.01.2024 ‑ Dokumentnr: 192983 ‑ Omnummerering ved
kommuneendring
Reguleringsplaner under arbeid i

---

[d178_d178 | Side [1]]
n
Plantyper uten treff
Kommunedelplaner Kommunedelplaner under arbeid
Reguleringsplaner under bakken Reguleringsplaner over bakken
Reguleringsplaner under arbeid Reguleringsplaner bunn
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige forbud
Kommuneplaner
Besøk kommunens hjemmeside for mer informasjon.
Id KP 2012 - 2024
Navn Kommuneplan 2012 - 2024
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 09.05.2012
Bestemmelser -

---

[d178_d178 | Side [1]]
ffentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å

---

[d178_d178 | Side [1]]
lig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners.

---

[d178_d178 | Side [1]]
rsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at

---

[d178_d178 | Side [1]]
gen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å

---

[d178_d178 | Side [1]]

04250028
Selger 1 navn Selger 2 navn
Atle Navekvien Gro Synnøve Skogvold
Gateadresse
Lerkesvingen 18
Poststed Postnr
GJERDRUM 2022
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 1982
Hvor lenge har du eid boligen?
Antall år 43
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap JBF
Polise/avtalenr.

---

[d178_d178 | Side [1]]
 i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om informasjonsgrunnlaget
Overtakelse
Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er

---

[d178_d178 | Side [1]]
 Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar

---

[d178_d178 | Side [1]]
vene til sikkerhet og funksjonalitet.
82

## Side 83

36/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
Merknader:
Utskifting/vedlikehold: Antatt normal forventet levetid før utskifting av elektriske anlegg i boliger er ca 25 - 30 år.
83

## Side 84

37/42
BMTF Byggmestrenes Takseringsforbund
EIERSKIFTERAPPORT™
VÆR OPPMERKSOM PÅ:
Egenerklæringsskjema er levert i forbindelse med oppdraget.
Det er fremlagt godkjente tegninger av boligen.
Det foreligger ikke oppdaterte godkjente byggetegninger som

---

[d178_d178 | Side [1]]
ver: Knr:3230 Gnr:46 Bnr:302
For mer informasjon, se:www.dsa.no/ radon
30.07.1981 ‑ Dokumentnr: 104682 ‑ Registrering av grunn
Denne matrikkelenhet opprettet fra:
Diverse
Knr:3230 Gnr:46 Bnr:12
Både kjøper og selger er forpliktet til å signere den
01.01.2020 ‑ Dokumentnr: 115325 ‑ Omnummerering ved standard kjøpekontrakten som er utarbeidet av Emera i
kommuneendring forbindelse med eiendomshandler. Kjøpekontrakten kan
42

## Side 43

OM EIENDOMMEN
gjennomgås hos eiendomsmegleren før budet legges normalt

---

[d178_d178 | Side [1]]
erg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på

---

[d178_d178 | Side [1]]
 forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og

---

[d178_d178 | Side [1]]
e
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en

---

[d178_d178 | Side [1]]
NDOMMEN
gjennomgås hos eiendomsmegleren før budet legges normalt med i handelen, med mindre det foreligger en
inn. Ta kontakt med eiendomsmegler dersom det er særskilt avtale mellom partene om noe annet, jf.
spørsmål. avhendingsloven § 3‑5.
Selger leverer eiendommen i ryddig og rengjort tilstand. En standard tilbehørsliste utarbeidet av Norges
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende ferdigattest – kun midlertidig brukstillatelse fra 1981",
      "evidence": [
        "Det foreligger ikke ferdigattest for eneboligen, men det foreligger midlertidig brukstillatelse den 22.07.1981.",
        "For å kunne søke om ferdigattest må følgende tiltak gjennomføres på eiendommen: trapp, hovedinngang mangler, trapp terrasse mangler, utv. grunnmur ikke ferdigpusset, kjeller...",
        "Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.",
        "Midlertidig brukstillatelse datert 05.07.1982 bekreftet i dokumentkontekst."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Manglende membran på bad i underetasjen – strakstiltak påkrevd",
      "evidence": [
        "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen.",
        "STORE ELLER ALVORLIGE AVVIK: 4 – bekrefter alvorlighetsgrad."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Råteskade på rekkverk – strakstiltak påkrevd",
      "evidence": [
        "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.",
        "Nevnt eksplisitt i overordnet faglig vurdering av eiendommen."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Punktert vindu – strakstiltak påkrevd",
      "evidence": [
        "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.",
        "Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen – indikerer potensiell underrapportering."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R5",
      "description": "Innvendige rekkverk og håndrekker er ikke i henhold til gjeldende forskrifter – mangler håndrekke på veggsiden i trapp ned til kjelleretasjen",
      "evidence": [
        "Innvendig rekkverk og håndrekke i trapp er ikke i.h.t gjeldene forskrifter. Det mangler håndrekke på veggsiden i trapp ned til kjelleretasjen.",
        "Innvendige rekkverk og håndrekker er ikke i henhold til dagens forskrifter – bekreftet to steder i dokumentet."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R6",
      "description": "Utilstrekkelig fall fra grunnmur – økt risiko for fuktproblemer mot grunnmur",
      "evidence": [
        "Fall fra grunnmur vurderes ikke som tilstrekkelig.",
        "Ved visuell inspeksjon vurderes det at det ikke er tilstrekkelig fall fra grunnmur. Terrenget er skrånet på gavlsider, baksiden og tilnærmet flatt på fremsiden av boligen, med noe fall inn mot grunnmur stedvis.",
        "Risiko: Dette gir øker risikoen for fuktproblemer imot grunnmur.",
        "Konsekvens: Forholdet kan medføre behov for utbedring av grunnmur dersom fuktpåvirkningen vedvarer."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R7",
      "description": "Lekkasjer og fuktskjolder på loft – TG2",
      "evidence": [
        "Det er påvist lekkasjer, fuktskjolder på loftet.",
        "Loftet er innredet samtidig som boligen ble bygget.",
        "TG 2 5.1 Loft (konstruksjonsoppbygging) – vesentlig avvik bekreftet."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R8",
      "description": "Svertesopp i garasje – risiko for råteskade og redusert levetid på materialer",
      "evidence": [
        "Undertaket inne i garasjen har stedvis mye svertesopp.",
        "Risiko: Avvikene kan gi økt risiko for råteskade, redusere kvalitet og levetid på materialene.",
        "Ingen står montert fornærme grunn og står fuktutsatt – forverrer fukteksponering."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R9",
      "description": "Ikke tilfredsstillende fall på gulv mot sluk på bad/kjøkken – TG2",
      "evidence": [
        "Det registreres ikke tilfredsstillende fall på gulv mot sluk. Gulvet er mer eller mindre i vater. TG2",
        "Det er ikke påvist tilfredsstillende høydeforskjell fra toppen av sluket til toppen av membranen ved dørterskelen.",
        "Årsak: Forholdet har karakter som tilsier at det ikke ble utført tilstrekkelig fall på gulvet."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Vinduer, balkong- og terrassedør har passert forventet levetid og er trekkfulle – TG2",
      "evidence": [
        "Vinduer, balkong- og terrassedør har passert sin forventede levetid og har slitte overflater utvendig. TG2",
        "Hjemmelshaver opplyser om at vindu på soverommet er litt trekkfullt og subber i karm.",
        "Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen – ytterligere risiko."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Ytterdører har passert forventet levetid, mangler gummilist og er trekkfulle – TG2",
      "evidence": [
        "Det settes også tilstandsgrad TG2, grunnet at dører har passert mer enn halvparten av sin forventede levetid.",
        "Hjemmelshaver opplyser om at det mangler gummilist rundt ytterdør og dermed er trekkfullt.",
        "Risiko: Slitasjen kan gi risiko for redusert tetthet rundt dører, skjulte skader, kvalitet og levetid på materialenes overflater."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R12",
      "description": "Manglende oppdaterte godkjente byggetegninger som samsvarer med boligen",
      "evidence": [
        "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen.",
        "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen, se under – bekreftet to steder i dokumentet."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R13",
      "description": "Innredet kjeller ikke godkjent av bygningsmyndighetene – kun midlertidig brukstillatelse",
      "evidence": [
        "Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen? Svar: Ja – Innredet kjeller etter behov og penger.",
        "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Svar: Nei – Midlertidig brukstillatelse.",
        "Det kan være forskjell mellom boligens faktiske bruk av rom og det som er godkjent av myndighetene."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Boligen ligger i område med marin leire – potensiell grunnstabilitetsrisiko",
      "evidence": [
        "Temakart fra NGU viser at boligen ligger i ett område over marin leire. Dataene kommer fra NGU.",
        "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.",
        "Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon – begrenser muligheten for vurdering."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Utvendig terreng, yttertak, takrenner og nedløp ikke vurdert grunnet snø – potensielle skjulte skader",
      "evidence": [
        "Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.",
        "Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
        "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det en ny inspeksjon når snøforholdene tillater det."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R16",
      "description": "Planlagte reguleringsplaner i nærheten (500 meter) kan påvirke omgivelsene – Knipliahagan og Måltrostvegen",
      "evidence": [
        "Det er planlagt utbygging av områdene rundt boligen; Måltrostvegen, samt områdene nedenfor boligen og videre mot Kniplia.",
        "Id 202403 – Detaljregulering for Knipliahagan – Status: Planlegging igangsatt.",
        "Id 202303 – Detaljregulering for Måltrostvegen – Status: Planlegging igangsatt."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Elektrisk anlegg nærmer seg eller har passert forventet levetid – risiko for behov for utskifting",
      "evidence": [
        "Utskifting/vedlikehold: Antatt normal forventet levetid før utskifting av elektriske anlegg i boliger er ca 25–30 år.",
        "Byggeår: 1982 – anlegget er dermed ca. 43 år gammelt, godt over forventet levetid.",
        "Arbeid på el-anlegget er utført av Elektro Exsperten ved Rune Hagerud – men omfang og dato er ikke spesifisert."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Baderomsinnredning ikke vurdert eller satt tilstandsgrad på – risiko for skjulte skader",
      "evidence": [
        "Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.",
        "Risiko: Dette kan gi økt risiko for skjulte skader og andre forhold."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R19",
      "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvar påhviler sameiet",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem – men private stikkledninger er eiers ansvar."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R20",
      "description": "Radonmåling er fra 2014 – kan være utdatert, og kjellerrom hadde verdi på 89 Bq/m³",
      "evidence": [
        "Er det foretatt radonmåling? Svar: Ja – Radongodkjent: under faregrensen. Ingen tiltak nødvendig.",
        "År 2014 – Verdi soverom 47, stue 63 og kjellerrom 89.",
        "Hjemmelshaver opplyser om at radonmåling ble foretatt i 2014 og 2015 – måleresultatet viste radonnivå under faregrensen.",
        "Kjellerromsverdien på 89 Bq/m³ nærmer seg tiltaksgrensen på 100 Bq/m³ og målingen er over 10 år gammel."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R21",
      "description": "Kjøkkenventilator og baderomsvifte kan ha mangler – anbefalt nærmere undersøkelse av fagperson",
      "evidence": [
        "Anbefalt tiltak: Det anbefales å undersøke kjøkkenventilator og baderomsvifte nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.",
        "Konsekvens: Forholdet kan medføre behov for utbedring eller utskiftning."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R22",
      "description": "Knotteplast/grunnmursplast kan ha behov for utbedring – anbefalt nærmere undersøkelse",
      "evidence": [
        "Anbefalt tiltak: Det anbefales å undersøke knotteplasten nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.",
        "Konsekvens: Forholdet kan medføre behov for utbedring eller utskifting av knotteplasten.",
        "EIER OPPLYSER: Knotteplast vil festes – indikerer kjent problem."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R23",
      "description": "Alder- og bruksslitasje på vegger og himlinger i kjeller/underetasje – TG2",
      "evidence": [
        "Vegger og tak/himlinger vurderes å ha alder- og bruksslitasje som slitemerker på overflaten på enkelte rom. TG2",
        "Risiko: Merkene kan gi risiko for redusert kvalitet og levetid på materialenes overflater."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R24_NY",
      "description": "Kommuneplanens arealdel under revisjon (KP2020-2032 / 2025-2037) – fremtidig arealbruk kan påvirke eiendommen",
      "evidence": [
        "Id KP2020-2032 – Navn: Kommuneplanens arealdel 2025-2037 – Status: Planforslag.",
        "Nåværende regulering er Boligbebyggelse-Nåværende Id KP 2012-2024 – denne er under revisjon.",
        "Endringer i kommuneplanen kan påvirke utnyttelsesgrad, nabobebyggelse og infrastruktur rundt eiendommen."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R25_NY",
      "description": "Drenssystem ikke vurdert – normal spyling anbefales hvert 2–5 år, alder og tilstand ukjent",
      "evidence": [
        "Utskifting/vedlikehold: Normal tid før spyling av drenssystem med drensledninger er 2–5 år.",
        "Utskifting/vedlikehold: Normal tid før utskifting av knotteplast/grunnmursplast er opptil ca 50 år.",
        "Boligen er fra 1982 – drenssystemets alder og vedlikeholdshistorikk er ikke dokumentert i tilgjengelig evidens.",
        "Kombinert med utilstrekkelig fall fra grunnmur øker risikoen for fuktproblemer."
      ],
      "source_documents": [
        "d178_d178"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.73
    }
  ],
  "re_retrieval_queries": [
    "ferdigattest mangler tiltak kjeller loft trapp grunnmur",
    "elektrisk anlegg alder utskifting TG tilstandsgrad",
    "drenssystem drenering tilstand alder vedlikehold",
    "loft lekkasje fuktskjolder konstruksjonsoppbygging TG2 detaljer",
    "bad underetasje membran TG3 strakstiltak detaljer",
    "radon kjellerrom 89 tiltaksgrense ny måling anbefaling",
    "kommuneplan arealdel 2025 2037 planforslag konsekvenser",
    "garasje svertesopp råteskade tilstandsgrad detaljer",
    "sopp råteskade insekter skadedyr egenerklæring",
    "sprekker i mur skjeve gulv setninger grunnforhold"
  ],
  "reasoning": "\nGjennomgang av alle 23 opprinnelige risikoer mot dokumentkonteksten:\n\n**Opprettholdte risikoer med justert confidence:**\n- R1 (Ferdigattest): Meget godt dokumentert, bekreftet flere steder. Confidence 0.98 opprettholdes.\n- R2 (Membran bad): Eksplisitt nevnt som strakstiltak. Confidence 0.97 opprettholdes.\n- R3 (Råteskade rekkverk): Eksplisitt nevnt som strakstiltak. Confidence 0.97 opprettholdes.\n- R4 (Punktert vindu): Bekreftet som strakstiltak + advarsel om mulig underrapportering. Confidence 0.96 opprettholdes.\n- R5 (Rekkverk/håndrekke): Bekreftet to steder i dokumentet. Confidence 0.96 opprettholdes.\n- R6 (Fall fra grunnmur): Godt dokumentert med årsak, risiko og konsekvens. Confidence 0.95 opprettholdes.\n- R7 (Loft lekkasje): TG2 bekreftet, lekkasjer og fuktskjolder påvist. Confidence 0.93 opprettholdes.\n- R8 (Svertesopp garasje): Godt dokumentert med risiko og konsekvens. Confidence 0.93 opprettholdes.\n- R9 (Fall mot sluk): TG2 bekreftet, manglende høydeforskjell dokumentert. Confidence 0.92 opprettholdes.\n- R10 (Vinduer passert levetid): TG2 bekreftet, trekkfullt bekreftet av hjemmelshaver. Confidence 0.92 opprettholdes.\n- R11 (Ytterdører): TG2 bekreftet, manglende gummilist bekreftet. Confidence 0.91 opprettholdes.\n- R12 (Byggetegninger): Bekreftet to steder. Confidence 0.91 opprettholdes.\n- R13 (Kjeller ikke godkjent): Bekreftet i egenerklæring. Confidence 0.90 opprettholdes.\n- R14 (Marin leire): NGU-kart bekreftet, ingen geologiske undersøkelser. Confidence 0.88 opprettholdes.\n- R15 (Snø – ikke vurdert): Godt dokumentert, anbefaling om ny inspeksjon. Confidence justeres opp til 0.90 da dette er en klar begrensning i rapporten.\n- R16 (Reguleringsplaner): Bekreftet med plan-ID og status. Confidence 0.85 opprettholdes.\n- R17 (Elektrisk anlegg): Byggeår 1982 gir alder på ~43 år, godt over 25-30 år levetid. Confidence justeres opp til 0.85 da alderen er klart dokumentert.\n- R18 (Baderomsinnredning): Bekreftet i rapport. Confidence 0.82 opprettholdes.\n- R19 (Stikkledninger): Bekreftet i salgsoppgaven. Confidence 0.80 opprettholdes.\n- R20 (Radon): Bekreftet med verdier, kjellerrom 89 Bq/m³ nærmer seg tiltaksgrense på 100. Confidence 0.78 opprettholdes.\n- R21 (Ventilasjon): Bekreftet med anbefaling om fagperson. Confidence 0.78 opprettholdes.\n- R22 (Knotteplast): Bekreftet med eiers kommentar om at det vil festes. Confidence justeres opp til 0.80.\n- R23 (Slitasje kjeller): TG2 bekreftet. Confidence 0.75 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R24_NY: Kommuneplanens arealdel er under revisjon (KP2020-2032 / 2025-2037 planforslag). Dette er en reell risiko som ikke var identifisert, men som fremgår av dokumentet. Confidence 0.72.\n- R25_NY: Drenssystem – normal spyling anbefales hvert 2-5 år, men tilstand og vedlikeholdshistorikk er ikke dokumentert. Kombinert med utilstrekkelig fall fra grunnmur er dette en relevant risiko. Confidence 0.73.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Detaljer om elektrisk anlegg: Når ble siste oppgradering utført? Hva dekket arbeidet av Elektro Exsperten?\n- Loft: Hva er omfanget av lekkasjer og fuktskjolder? Er det biologiske skadegjørere?\n- Drenssystem: Alder, tilstand og vedlikeholdshistorikk.\n- Radon: Bør ny måling anbefales gitt at siste måling er fra 2014/2015 og kjellerverdi er 89 Bq/m³.\n- Sopp/råteskader: Egenerklæringen indikerer kjennskap til sopp/råteskader – detaljer mangler.\n- Sprekker i mur/skjeve gulv: Egenerklæringen indikerer kjennskap – detaljer mangler.\n"
}

## Raw Response
```json
{
  "id": "msg_01Xzzt2xrVnXHZdyCDCFsQ8Q",
  "container": null,
  "content": [
    {
      "id": "toolu_01Y3X7LPKbfsvYCjHMn1EWT4",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende ferdigattest – kun midlertidig brukstillatelse fra 1981",
            "evidence": [
              "Det foreligger ikke ferdigattest for eneboligen, men det foreligger midlertidig brukstillatelse den 22.07.1981.",
              "For å kunne søke om ferdigattest må følgende tiltak gjennomføres på eiendommen: trapp, hovedinngang mangler, trapp terrasse mangler, utv. grunnmur ikke ferdigpusset, kjeller...",
              "Midlertidig brukstillatelse bekrefter at boligen lovlig kan benyttes, men at det fortsatt gjenstår arbeid før ferdigattest kan utstedes.",
              "Midlertidig brukstillatelse datert 05.07.1982 bekreftet i dokumentkontekst."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Manglende membran på bad i underetasjen – strakstiltak påkrevd",
            "evidence": [
              "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen.",
              "STORE ELLER ALVORLIGE AVVIK: 4 – bekrefter alvorlighetsgrad."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Råteskade på rekkverk – strakstiltak påkrevd",
            "evidence": [
              "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.",
              "Nevnt eksplisitt i overordnet faglig vurdering av eiendommen."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Punktert vindu – strakstiltak påkrevd",
            "evidence": [
              "Det ble avdekket behov for bygningsmessige strakstiltak som manglende membran på bad i underetasjen, punktert vindu og råteskade på rekkverket.",
              "Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen – indikerer potensiell underrapportering."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R5",
            "description": "Innvendige rekkverk og håndrekker er ikke i henhold til gjeldende forskrifter – mangler håndrekke på veggsiden i trapp ned til kjelleretasjen",
            "evidence": [
              "Innvendig rekkverk og håndrekke i trapp er ikke i.h.t gjeldene forskrifter. Det mangler håndrekke på veggsiden i trapp ned til kjelleretasjen.",
              "Innvendige rekkverk og håndrekker er ikke i henhold til dagens forskrifter – bekreftet to steder i dokumentet."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R6",
            "description": "Utilstrekkelig fall fra grunnmur – økt risiko for fuktproblemer mot grunnmur",
            "evidence": [
              "Fall fra grunnmur vurderes ikke som tilstrekkelig.",
              "Ved visuell inspeksjon vurderes det at det ikke er tilstrekkelig fall fra grunnmur. Terrenget er skrånet på gavlsider, baksiden og tilnærmet flatt på fremsiden av boligen, med noe fall inn mot grunnmur stedvis.",
              "Risiko: Dette gir øker risikoen for fuktproblemer imot grunnmur.",
              "Konsekvens: Forholdet kan medføre behov for utbedring av grunnmur dersom fuktpåvirkningen vedvarer."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R7",
            "description": "Lekkasjer og fuktskjolder på loft – TG2",
            "evidence": [
              "Det er påvist lekkasjer, fuktskjolder på loftet.",
              "Loftet er innredet samtidig som boligen ble bygget.",
              "TG 2 5.1 Loft (konstruksjonsoppbygging) – vesentlig avvik bekreftet."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R8",
            "description": "Svertesopp i garasje – risiko for råteskade og redusert levetid på materialer",
            "evidence": [
              "Undertaket inne i garasjen har stedvis mye svertesopp.",
              "Risiko: Avvikene kan gi økt risiko for råteskade, redusere kvalitet og levetid på materialene.",
              "Ingen står montert fornærme grunn og står fuktutsatt – forverrer fukteksponering."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R9",
            "description": "Ikke tilfredsstillende fall på gulv mot sluk på bad/kjøkken – TG2",
            "evidence": [
              "Det registreres ikke tilfredsstillende fall på gulv mot sluk. Gulvet er mer eller mindre i vater. TG2",
              "Det er ikke påvist tilfredsstillende høydeforskjell fra toppen av sluket til toppen av membranen ved dørterskelen.",
              "Årsak: Forholdet har karakter som tilsier at det ikke ble utført tilstrekkelig fall på gulvet."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Vinduer, balkong- og terrassedør har passert forventet levetid og er trekkfulle – TG2",
            "evidence": [
              "Vinduer, balkong- og terrassedør har passert sin forventede levetid og har slitte overflater utvendig. TG2",
              "Hjemmelshaver opplyser om at vindu på soverommet er litt trekkfullt og subber i karm.",
              "Det kan forekomme punkterte glass som ikke ble registrert på befaringsdagen – ytterligere risiko."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Ytterdører har passert forventet levetid, mangler gummilist og er trekkfulle – TG2",
            "evidence": [
              "Det settes også tilstandsgrad TG2, grunnet at dører har passert mer enn halvparten av sin forventede levetid.",
              "Hjemmelshaver opplyser om at det mangler gummilist rundt ytterdør og dermed er trekkfullt.",
              "Risiko: Slitasjen kan gi risiko for redusert tetthet rundt dører, skjulte skader, kvalitet og levetid på materialenes overflater."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R12",
            "description": "Manglende oppdaterte godkjente byggetegninger som samsvarer med boligen",
            "evidence": [
              "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen.",
              "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen, se under – bekreftet to steder i dokumentet."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R13",
            "description": "Innredet kjeller ikke godkjent av bygningsmyndighetene – kun midlertidig brukstillatelse",
            "evidence": [
              "Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen? Svar: Ja – Innredet kjeller etter behov og penger.",
              "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Svar: Nei – Midlertidig brukstillatelse.",
              "Det kan være forskjell mellom boligens faktiske bruk av rom og det som er godkjent av myndighetene."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Boligen ligger i område med marin leire – potensiell grunnstabilitetsrisiko",
            "evidence": [
              "Temakart fra NGU viser at boligen ligger i ett område over marin leire. Dataene kommer fra NGU.",
              "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.",
              "Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon – begrenser muligheten for vurdering."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Utvendig terreng, yttertak, takrenner og nedløp ikke vurdert grunnet snø – potensielle skjulte skader",
            "evidence": [
              "Grunnet mye snø på befaringstidspunktet ble ikke utvendig terreng, terrassen, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.",
              "Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
              "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det en ny inspeksjon når snøforholdene tillater det."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R16",
            "description": "Planlagte reguleringsplaner i nærheten (500 meter) kan påvirke omgivelsene – Knipliahagan og Måltrostvegen",
            "evidence": [
              "Det er planlagt utbygging av områdene rundt boligen; Måltrostvegen, samt områdene nedenfor boligen og videre mot Kniplia.",
              "Id 202403 – Detaljregulering for Knipliahagan – Status: Planlegging igangsatt.",
              "Id 202303 – Detaljregulering for Måltrostvegen – Status: Planlegging igangsatt."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Elektrisk anlegg nærmer seg eller har passert forventet levetid – risiko for behov for utskifting",
            "evidence": [
              "Utskifting/vedlikehold: Antatt normal forventet levetid før utskifting av elektriske anlegg i boliger er ca 25–30 år.",
              "Byggeår: 1982 – anlegget er dermed ca. 43 år gammelt, godt over forventet levetid.",
              "Arbeid på el-anlegget er utført av Elektro Exsperten ved Rune Hagerud – men omfang og dato er ikke spesifisert."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Baderomsinnredning ikke vurdert eller satt tilstandsgrad på – risiko for skjulte skader",
            "evidence": [
              "Det gjøres oppmerksom på at baderomsinnredningen ikke er vurdert eller satt tilstandsgrad på.",
              "Risiko: Dette kan gi økt risiko for skjulte skader og andre forhold."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R19",
            "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvar påhviler sameiet",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem – men private stikkledninger er eiers ansvar."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R20",
            "description": "Radonmåling er fra 2014 – kan være utdatert, og kjellerrom hadde verdi på 89 Bq/m³",
            "evidence": [
              "Er det foretatt radonmåling? Svar: Ja – Radongodkjent: under faregrensen. Ingen tiltak nødvendig.",
              "År 2014 – Verdi soverom 47, stue 63 og kjellerrom 89.",
              "Hjemmelshaver opplyser om at radonmåling ble foretatt i 2014 og 2015 – måleresultatet viste radonnivå under faregrensen.",
              "Kjellerromsverdien på 89 Bq/m³ nærmer seg tiltaksgrensen på 100 Bq/m³ og målingen er over 10 år gammel."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R21",
            "description": "Kjøkkenventilator og baderomsvifte kan ha mangler – anbefalt nærmere undersøkelse av fagperson",
            "evidence": [
              "Anbefalt tiltak: Det anbefales å undersøke kjøkkenventilator og baderomsvifte nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.",
              "Konsekvens: Forholdet kan medføre behov for utbedring eller utskiftning."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R22",
            "description": "Knotteplast/grunnmursplast kan ha behov for utbedring – anbefalt nærmere undersøkelse",
            "evidence": [
              "Anbefalt tiltak: Det anbefales å undersøke knotteplasten nærmere, utført av fagperson, for å avklare omfang og behov for utbedring.",
              "Konsekvens: Forholdet kan medføre behov for utbedring eller utskifting av knotteplasten.",
              "EIER OPPLYSER: Knotteplast vil festes – indikerer kjent problem."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R23",
            "description": "Alder- og bruksslitasje på vegger og himlinger i kjeller/underetasje – TG2",
            "evidence": [
              "Vegger og tak/himlinger vurderes å ha alder- og bruksslitasje som slitemerker på overflaten på enkelte rom. TG2",
              "Risiko: Merkene kan gi risiko for redusert kvalitet og levetid på materialenes overflater."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R24_NY",
            "description": "Kommuneplanens arealdel under revisjon (KP2020-2032 / 2025-2037) – fremtidig arealbruk kan påvirke eiendommen",
            "evidence": [
              "Id KP2020-2032 – Navn: Kommuneplanens arealdel 2025-2037 – Status: Planforslag.",
              "Nåværende regulering er Boligbebyggelse-Nåværende Id KP 2012-2024 – denne er under revisjon.",
              "Endringer i kommuneplanen kan påvirke utnyttelsesgrad, nabobebyggelse og infrastruktur rundt eiendommen."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R25_NY",
            "description": "Drenssystem ikke vurdert – normal spyling anbefales hvert 2–5 år, alder og tilstand ukjent",
            "evidence": [
              "Utskifting/vedlikehold: Normal tid før spyling av drenssystem med drensledninger er 2–5 år.",
              "Utskifting/vedlikehold: Normal tid før utskifting av knotteplast/grunnmursplast er opptil ca 50 år.",
              "Boligen er fra 1982 – drenssystemets alder og vedlikeholdshistorikk er ikke dokumentert i tilgjengelig evidens.",
              "Kombinert med utilstrekkelig fall fra grunnmur øker risikoen for fuktproblemer."
            ],
            "source_documents": [
              "d178_d178"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.73
          }
        ],
        "re_retrieval_queries": [
          "ferdigattest mangler tiltak kjeller loft trapp grunnmur",
          "elektrisk anlegg alder utskifting TG tilstandsgrad",
          "drenssystem drenering tilstand alder vedlikehold",
          "loft lekkasje fuktskjolder konstruksjonsoppbygging TG2 detaljer",
          "bad underetasje membran TG3 strakstiltak detaljer",
          "radon kjellerrom 89 tiltaksgrense ny måling anbefaling",
          "kommuneplan arealdel 2025 2037 planforslag konsekvenser",
          "garasje svertesopp råteskade tilstandsgrad detaljer",
          "sopp råteskade insekter skadedyr egenerklæring",
          "sprekker i mur skjeve gulv setninger grunnforhold"
        ],
        "reasoning": "\nGjennomgang av alle 23 opprinnelige risikoer mot dokumentkonteksten:\n\n**Opprettholdte risikoer med justert confidence:**\n- R1 (Ferdigattest): Meget godt dokumentert, bekreftet flere steder. Confidence 0.98 opprettholdes.\n- R2 (Membran bad): Eksplisitt nevnt som strakstiltak. Confidence 0.97 opprettholdes.\n- R3 (Råteskade rekkverk): Eksplisitt nevnt som strakstiltak. Confidence 0.97 opprettholdes.\n- R4 (Punktert vindu): Bekreftet som strakstiltak + advarsel om mulig underrapportering. Confidence 0.96 opprettholdes.\n- R5 (Rekkverk/håndrekke): Bekreftet to steder i dokumentet. Confidence 0.96 opprettholdes.\n- R6 (Fall fra grunnmur): Godt dokumentert med årsak, risiko og konsekvens. Confidence 0.95 opprettholdes.\n- R7 (Loft lekkasje): TG2 bekreftet, lekkasjer og fuktskjolder påvist. Confidence 0.93 opprettholdes.\n- R8 (Svertesopp garasje): Godt dokumentert med risiko og konsekvens. Confidence 0.93 opprettholdes.\n- R9 (Fall mot sluk): TG2 bekreftet, manglende høydeforskjell dokumentert. Confidence 0.92 opprettholdes.\n- R10 (Vinduer passert levetid): TG2 bekreftet, trekkfullt bekreftet av hjemmelshaver. Confidence 0.92 opprettholdes.\n- R11 (Ytterdører): TG2 bekreftet, manglende gummilist bekreftet. Confidence 0.91 opprettholdes.\n- R12 (Byggetegninger): Bekreftet to steder. Confidence 0.91 opprettholdes.\n- R13 (Kjeller ikke godkjent): Bekreftet i egenerklæring. Confidence 0.90 opprettholdes.\n- R14 (Marin leire): NGU-kart bekreftet, ingen geologiske undersøkelser. Confidence 0.88 opprettholdes.\n- R15 (Snø – ikke vurdert): Godt dokumentert, anbefaling om ny inspeksjon. Confidence justeres opp til 0.90 da dette er en klar begrensning i rapporten.\n- R16 (Reguleringsplaner): Bekreftet med plan-ID og status. Confidence 0.85 opprettholdes.\n- R17 (Elektrisk anlegg): Byggeår 1982 gir alder på ~43 år, godt over 25-30 år levetid. Confidence justeres opp til 0.85 da alderen er klart dokumentert.\n- R18 (Baderomsinnredning): Bekreftet i rapport. Confidence 0.82 opprettholdes.\n- R19 (Stikkledninger): Bekreftet i salgsoppgaven. Confidence 0.80 opprettholdes.\n- R20 (Radon): Bekreftet med verdier, kjellerrom 89 Bq/m³ nærmer seg tiltaksgrense på 100. Confidence 0.78 opprettholdes.\n- R21 (Ventilasjon): Bekreftet med anbefaling om fagperson. Confidence 0.78 opprettholdes.\n- R22 (Knotteplast): Bekreftet med eiers kommentar om at det vil festes. Confidence justeres opp til 0.80.\n- R23 (Slitasje kjeller): TG2 bekreftet. Confidence 0.75 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R24_NY: Kommuneplanens arealdel er under revisjon (KP2020-2032 / 2025-2037 planforslag). Dette er en reell risiko som ikke var identifisert, men som fremgår av dokumentet. Confidence 0.72.\n- R25_NY: Drenssystem – normal spyling anbefales hvert 2-5 år, men tilstand og vedlikeholdshistorikk er ikke dokumentert. Kombinert med utilstrekkelig fall fra grunnmur er dette en relevant risiko. Confidence 0.73.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Detaljer om elektrisk anlegg: Når ble siste oppgradering utført? Hva dekket arbeidet av Elektro Exsperten?\n- Loft: Hva er omfanget av lekkasjer og fuktskjolder? Er det biologiske skadegjørere?\n- Drenssystem: Alder, tilstand og vedlikeholdshistorikk.\n- Radon: Bør ny måling anbefales gitt at siste måling er fra 2014/2015 og kjellerverdi er 89 Bq/m³.\n- Sopp/råteskader: Egenerklæringen indikerer kjennskap til sopp/råteskader – detaljer mangler.\n- Sprekker i mur/skjeve gulv: Egenerklæringen indikerer kjennskap – detaljer mangler.\n"
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
    "input_tokens": 18504,
    "output_tokens": 6852,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
