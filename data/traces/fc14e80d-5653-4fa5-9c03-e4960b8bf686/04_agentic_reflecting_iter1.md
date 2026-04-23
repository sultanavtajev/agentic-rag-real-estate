# Trace: agentic_reflecting_iter1
- **Run ID:** fc14e80d-5653-4fa5-9c03-e4960b8bf686
- **Tidspunkt:** 2026-03-27T20:15:51.336019+00:00
- **Varighet:** 98.68s
- **Input tokens:** 19007
- **Output tokens:** 5368

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
Risiko 1: Manglende radonmåling: Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko for beboere, og manglende måling gir kjøper ingen informasjon om radonnivåer i boligen.
  Confidence: 0.95
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 2: Ventilasjonspåkostning vil øke felleskostnader: Borettslaget gjennomfører et prosjekt for å bedre ventilasjonen i leilighetene, og styret har informert om at dette skal prises inn i felleskostnadene fra desember inneværende år. Dette innebærer en fremtidig økning i månedlige utgifter for kjøper.
  Confidence: 0.95
  Evidens: De gjennomfører et prosjekt som skal bedre ventilasjonen i leilighetene. Dette informerte styret om at skal være priset inn i felleskostnad fra desember i år.

Risiko 3: Rotteproblem i borettslaget: Det er rapportert om rotter i borettslaget, noe som kan indikere et pågående skadedyrproblem i fellesarealene. Selv om det opplyses at problemet ikke er i det aktuelle bygget (Kjelsåsveien 10), utgjør dette en risiko.
  Confidence: 0.85
  Evidens: Har vært rapportert om rotter i Borettslaget, men ikke i vårt bygg (kjelsåsveien 10)

Risiko 4: Fellesgjeld og flytende rente: Andelen har fellesgjeld på kr 86 548 (per 31.12.2024) med flytende rente på 5,50%. Flytende rente innebærer risiko for økte rentekostnader og dermed høyere felleskostnader dersom rentenivået stiger.
  Confidence: 0.9
  Evidens: Kr 86 548 pr. 31.12.2024; Rente: Flyt 5,50%; Restløpetid: 22 år 8 md.

Risiko 5: Reguleringsplan for ny vannforsyning (S-5142): Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo – Stamnett. Det må påregnes støyende aktiviteter i forbindelse med rigg- og anleggsarbeider i Bjølsendumpa.
  Confidence: 0.9
  Evidens: Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo ‑ Stamnett (S‑5142).; anleggsarbeider starter i Bjølsendumpa som blir påkoblingspunkt på eksisterende vannforsyningsnett.

Risiko 6: Skjulte avløpsrør og manglende stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert. Dette gjør det vanskelig å inspisere og vedlikeholde rørene, og øker risikoen for skjulte skader eller blokkering.
  Confidence: 0.85
  Evidens: Stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert.

Risiko 7: Primærkonstruksjoner med potensiell TG 2 på grunn av alder: Skjulte elementer som drenering, yttertak, vann- og avløpsrør kan ha vært uendret siden byggeår (ferdigattest 1953), og kan ha fått TG 2 utelukkende på grunn av alder. Dette innebærer risiko for fremtidige kostbare utbedringer.
  Confidence: 0.85
  Evidens: Primærkonstruksjoner som eksempelvis drenering, yttertak inklusive undertak (under yttertak) og vann- og avløpsrør er skjulte elementer og er kanskje ikke skiftet siden byggeår.; Ferdigattest/ brukstillatelse datert: 09.12.1953.

Risiko 8: Begrenset adgang til utleie: Det er begrenset adgang til å leie ut boligen i borettslaget. Utleie krever styregodkjenning og er kun tillatt i inntil 3 år. Korttidsutleie er begrenset til 30 døgn per år uten samtykke. Dette begrenser kjøpers fleksibilitet.
  Confidence: 0.8
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5‑3 til § 5‑10.; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 9: Forkjøpsrett kan forsinke overtakelse: Borettslaget har intern forkjøpsrett, og styregodkjennelse samt avklaring av forkjøpsrett må foreligge før overtakelse kan finne sted. Dette kan medføre forsinkelser i overtakelsesprosessen.
  Confidence: 0.8
  Evidens: Styregodkjennelse må foreligge og forkjøpsrett må være avklart før overtakelse kan finne sted.; For selskap med intern forkjøpsrett viser vi til Lov om borettslag §§ 4-11 til 4-22.

Risiko 10: Bod på borettslagets fellesareal: Kjellerboden som er medtatt i BRA-e og totalt BRA, ligger på borettslagets fellesareal og disponeres av andelen. Borettslaget kan på et senere tidspunkt omdisponere dette arealet, noe som kan medføre at kjøper mister tilgang til boden.
  Confidence: 0.9
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på borettslagets fellesareal, men disponeres av denne andelen. Borettslaget kan på et senere tidspunkt omdisponere

Risiko 11: Tekniske installasjoner ikke vurdert: Tekniske installasjoner og innretninger er som hovedregel ikke vurdert i tilstandsrapporten, da dette krever spisskompetanse. Årsak til skader kan være komplekse og er heller ikke vurdert. Dette innebærer at kjøper ikke har full oversikt over tilstanden til tekniske anlegg.
  Confidence: 0.8
  Evidens: Tekniske installasjoner og innretninger er som hovedregel ikke vurdert, da dette krever spisskompetanse på de ulike fagområdene.; Årsak til ulike skadesymptomer og skader kan være svært komplekse og er derfor heller ikke vurdert om annet ikke er nevnt. Det gjelder også utbedringskostnader.

Risiko 12: Eiendomsskatt på enkelte leiligheter: Enkelte leiligheter i borettslaget er ilagt eiendomsskatt, som kreves inn via felleskostnadene. Det er uklart om denne andelen er ilagt eiendomsskatt, noe som kan medføre uventede ekstra kostnader.
  Confidence: 0.7
  Evidens: Enkelte leiligheter er ilagt eiendomsskatt. Eiendomsskatt kreves inn via felleskostnader i månedene: mai, juni, september og november.

Risiko 13: Manglende energiattest fra selger: Dersom selger ikke har fremlagt energiattest, kan kjøper få laget en energiattest for selgers regning. Manglende energiattest gir kjøper begrenset informasjon om boligens energiforbruk og -standard.
  Confidence: 0.7
  Evidens: Dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har fremlagt energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning.

Risiko 14: Lav takhøyde på bad: Det er målt ca. 2,26 meter takhøyde på badet, noe som er under anbefalt standard og kan oppleves som trangt. Dette kan også ha betydning for godkjenning av rommet som varig oppholdsrom.
  Confidence: 0.65
  Evidens: Det er målt ca. 2,26 meter takhøyde i bad. Ca. 2,53 meter i soverom og ca. 2,52 meter i øvrige rom.

Dokumentkontekst:
[d037_d037 | Side [1]]
en skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig. Meglerforetakets oppdragsnummer 41-0053/25 Postnummer/sted 0488 OSLO
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler
Thine Hestnes/Anders Gjølstad
Hjemmelshaver/selger Kommune 0301 - Oslo
Røhnebæk
TG 2 Vesentlige avvik (alder, slitasje, skader mv.) Bygningssakkyndig inspektør Knut Johnsen Gnr./Bnr.: 79/31
Tilstandsgrad 2 gis når bygningsdelen har vesentlige avvik. Bygningsdelen skal

---

[d037_d037 | Side [1]]
n avvik. Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt Befaring Eiendomsopplysninger
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Befaringsdato 03.06.2025 Type objekt Andelsleilighet
TG 1 Mindre eller moderate avvik (funksjonssvikt ikke oppdaget) Referansenummer 15072465 Gate/vei adresse Kjelsåsveien 10A
Tilstandsgrad 1 gis når bygningsdelen har mindre avvik. Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses

---

[d037_d037 | Side [1]]
Sammendrag av boligens tilstandsgrad
BBeesskkrriivveellssee aavv aarreeaallmmåålliinngg oogg aarreeaallbbeeggrreeppeerr
I henhold til Forskrift til avhendingslova (tryggere bolighandel) er NS 3940:2023 Areal- og volumberegninger av bygninger er lagt
til grunn for arealmålinger og arealbegreper i rapporten.
AArreeaallbbeeggrreeppeerr
Internt bruksareal (BRA-i): Bruksareal av boenheten innenfor omsluttende vegger. Bruksenheten kan bestå av flere
89 % 3 % 0 % 8 %
boenheter.
Eksternt bruksareal (BRA-e):

---

[d037_d037 | Side [1]]
er grunn til å Utvendige snødekte flater Nei Borettslag / Sameie Nordre Åsen Borettslag
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Utetemperatur 12 °C Tomt Eiet tomt: 6512 m²
Rapportdato 09.06.2025 23:24
TG 3 Store eller alvorlige avvik (strakstiltak nødvendig)
Tilstandsgrad 3 gis når bygningsdelen har store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med
trenger utbedring straks eller innen kort tid. Graden skal også brukes ved

---

[d037_d037 | Side [1]]
 elektriske anlegget.
Befaring Orgnr: 923 856 781
Befaringsdato: 03.06.2025
Signatur inspektør: Knut Johnsen
Mobil: 90587525
EIENDOM |15072465, Kjelsåsveien 10A, 0488 OSLO Side 2/14
50 51

## Side 27

Vurderinger for tilstandsgrader, hentet fra forskrift til avhendingsloven: BBeeffaarriinnggss-- oogg eeiieennddoommssooppppllyyssnniinnggeerr
TG 0 Ingen avvik (funksjonssvikt ikke oppdaget)
Tilstandsgrad 0 gis når bygningsdelen ikke har noen avvik. Bygningsdelen skal være tilnærmet ny, ikke vise tegn på

---

[d037_d037 | Side [1]]
t. Dette
under oppsikt til å utføre nødvendige utbedringer innen rimelig tid. gjelder også f.eks. piper (noen kontrollpunkter foretas likevel herunder
Dersom det er akuttbehov og konsekvensene er store, angis TG 3. Her f.eks. avstand til brennbare materialer) og ildsteder.
har også den enkeltes ambisjonsniva betydning.
Rapporten må ikke oppfattes som en garanti eller en fullstendig Elektrisk anlegg - [Kursfortegnelse. ]
Eksempler beskrivelse av boligens tilstand. Besiktigelsen baseres

---

[d037_d037 | Side [1]]
2 gis når bygningsdelen har vesentlige avvik. Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk Tilstede på befaringen Thine Hestnes/Anders Gjølstad Andelsnr. 194
Røhnebæk
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid.
Graden skal også brukes når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn til å Utvendige snødekte flater Nei Borettslag / Sameie

---

[d037_d037 | Side [1]]
hva rapporten ikke vurderer
slitasjer og skader er vanlige og må forventes.
Primærkonstruksjoner som eksempelvis drenering, yttertak inklusive Tekniske installasjoner og innretninger er som hovedregel ikke vurdert,
undertak (under yttertak) og vann- og avløpsrør er skjulte elementer og da dette krever spisskompetanse på de ulike fagområdene. Årsak til
er kanskje ikke skiftet siden byggeår. Av den grunn vil disse kunne få en ulike skadesymptomer og skader kan være svært komplekse og er
TG 2 (gul farge) for

---

[d037_d037 | Side [1]]
ersøkelsene av visuelle observasjoner.
Rapporten er utarbeidet i henhold til forskrift til avhendingslova (tryggere bolighandel), gjeldende fra 1. januar 2022, og danner grunnlaget for
forsikringsgivers risikovurdering av boligen og derved forsikringsgivers grunnlag for å innvilge tegning av boligselgerforsikring. Norsk Standard
3600:2018 er også lagt til grunn, men ikke alle standardens bestemmelser er tatt med. Dette gjelder for eksempel følgende bestemmelser:
• 9 - Gjennomgang av dokumentasjon av

---

[d037_d037 | Side [1]]
pel følgende bestemmelser:
• 9 - Gjennomgang av dokumentasjon av boligen (kun påfølgende deler): Innhenting av informasjon fra kommunens tekniske etat
Tilstandsrapport • 13.2 - Vurdering av teknisk verdi
• 14.3 - Oppsummering
• Tabell A.1 (kun påfølgende deler): Punkt 22 (Geologiske forhold)
• Tabell A.3 - Undersøkelser av fellesdeler
• Tillegg C.2 - Tilstandsgrad for branntekniske forhold
Det er gjort et utvalg med prinsippet kost / nytte basert på avhendingsloven og hva forsikringsgiver anser relevant

---

[d037_d037 | Side [1]]
er og skader kan være svært komplekse og er
TG 2 (gul farge) for å gi beskjed til kjøpere om å være oppmerksomme derfor heller ikke vurdert om annet ikke er nevnt. Det gjelder også
på at selv om husets synlige overflater fremstår uten svekkelser, har utbedringskostnader.
boligen tross alt bruksslitasjer. Helt normale og påregnelige
vedlikeholdstiltak og kostnader må det alltid tas høyde for når Yttertak besiktiges når stige på forhånd er reist og forsvarlig sikret, og i
bygningselementer når en viss alder.

---

[d037_d037 | Side [1]]
 og forsvarlig sikret, og i
bygningselementer når en viss alder. tillegg den bygningssakkyndige på egen selvstendig vurdering anser
den som forsvarlig å bruke. I andre tilfeller besiktiges yttertaket fra Membran, tettesjikt og overgang til sluk. - [Sluk bad.] Elektrisk anlegg - [Sikringsskap. ]
Når en rapport inneholder mange TG 2, trenger dermed ikke det være bakkenivå og inne fra loftet.
«farlig». De fleste boliger i Norge er av eldre årgang og
Krypekjeller og krypeloft inspiseres der det er klargjort

---

[d037_d037 | Side [1]]
re at enkelte bygningselementer ikke er nye (eldre
fra Anticimex AS.
boliger) og således derfor har naturlig og påregnelig slitasje. Det vil si at
gul farge nødvendigvis ikke alltid betyr at det gis et varsel om at noe er
Denne rapporten benyttes som grunnlag for å tegne
direkte feil eller har større bygningsskader, men en framskreden
boligselgerforsikring hos Anticimex forsikring NUF. Rapporten er
brukstid der vedlikeholdstiltak ikke må komme som en overraskelse.
således å betrakte som en

---

[d037_d037 | Side [1]]
ksempler beskrivelse av boligens tilstand. Besiktigelsen baseres på
stikkprøveprinsippet og hovedsakelig med visuell observasjoner, men
Ytterpanel på et hus som oppdages har ‘noe råteskader’ vil få TG 2. med noe bruk av egnede instrumenter, når det er nevnt for fuktsøk og
Dette ut fra at tiltak anbefales iverksatt innen rimelig tid - og ikke skjevheter på gulv. Det elektriske anlegget er vurdert ut fra en
nødvendigvis som et akuttbehov. Det samme kan gjelde ‘noe fuktighet’ ikkeautorisert el-fagmann sitt

---

[d037_d037 | Side [1]]
basert på avhendingsloven og hva forsikringsgiver anser relevant for risikovurderingen som foretas.
Annen relevant bygningsteknisk erfaring og forståelse er også lagt til grunn, herunder forhold som har registrerte høye klagefrekvenser og/eller
Risikovurdering for Anticimex boligselgerforsikring skadesaker.
Bagatellmessige og åpenbare forhold som er synlige for enhver og ikke har vesentlig bygningsmessig betydning, er normalt ikke omtalt.
Gulv mot grunn og etasjeskillere kontrolleres ved bruk av krysslaser

---

[d037_d037 | Side [1]]
 mot grunn og etasjeskillere kontrolleres ved bruk av krysslaser for eventuelle skjevheter. I utgangspunktet kontrolleres to rom i hver etasje
(eventuelt kryssmåling i ett rom), og i hvert rom er det 5 målepunkter. Stikkprøveprinsippet er benyttet.
Kjelsåsveien 10A
I rapporten har alle TG 2, TG 3 og TG IU kommentarer for bedre forståelse. De sjekkpunkter som har fått TG 0 og 1 (ikke funnet funksjonssvikt) er
0488 OSLO listet opp horisontalt i starten av hvert hovedelement. Hovedhensikten med denne

---

[d037_d037 | Side [1]]
r av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse Det er gjennomført tilstandsrapport i forbindelse med salg.
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å

---

[d037_d037 | Side [1]]
esielt oppmerksom på.
Andelsnr. : 194
Oslo kommune Forklaring av tilstandsgrader
Tilstandsgrader, forkortet til TG, beskriver på en enkel og visuell måte en tilstand eller en risiko opp mot referansenivå. I tillegg til graderingen med
tall, benyttes trafikklysets prinsipp med fargene grønt, gult og rødt.
TG 0 og TG 1 benyttes når tiltak vurderes som ikke nødvendig. Alle TG 2 og TG 3 kommenteres med årsak og konsekvens. TG IU kommenteres.
Areal Bygningssakkyndig selskap Dokumentasjonskrav
Dersom det har

---

[d037_d037 | Side [1]]
1

## Side 32

Viktig om TG 2 Gyldighet
Rapporten skal ikke være eldre enn 12 måneder (fra befaringsdato). Er
TG 2 beskriver også elde/naturlig slitasje
rapporten eldre enn dette må Anticimex AS kontaktes angående videre
bruk. Hvis rapporten skal benyttes ved videresalg innenfor
Tilstandsgrad TG 2 (gul farge) benyttes i flere sammenhenger, blant
gyldighetsperioden på 12 måneder, må det innhentes skriftlig tillatelse
annet for å synliggjøre at enkelte bygningselementer ikke er nye (eldre
fra Anticimex

---

[d037_d037 | Side [1]]
gen. Det er målt ca. 2,26 meter takhøyde i bad. Ca. 2,53 meter i soverom og ca. 2,52 meter i øvrige rom.
Tilsynsrapport for olje- eller septiktanker Ikke relevant.
Dokumentasjon på drikkevannskvalitet hvis Ikke relevant.
boligen ikke er tilkoblet kommunal forsyning
Egenerklæringsskjema Mottatt. Signert av selger 25.05.2025.
EIENDOM |15072465, Kjelsåsveien 10A, 0488 OSLO Side 11/14 EIENDOM |15072465, Kjelsåsveien 10A, 0488 OSLO Side 12/14
60 61

## Side 32

Viktig om TG 2 Gyldighet
Rapporten skal ikke være

---

[d037_d037 | Side [1]]
om kommunen og Kartverket. Det er viktig at
Radonmåling
tinglyst følgende heftelser og rettigheter som følger avhendingsloven begrenset oppad kr. 14 000 000,‑. kjøper setter seg grundig inn i alle salgsdokumentene,
eiendommens matrikkel ved overskjøting til ny Selger har ikke utført radonmåling. Det er ikke krav om Egenerklæringsskjema er vedlagt salgsoppgaven og herunder salgsoppgave, tilstandsrapport og selgers
hjemmelshaver: dette med mindre boligen er helt eller delvis utleid. interessenter oppfordres

---

[d037_d037 | Side [1]]
alt med i handelen, med mindre det foreligger en
byggeområde for boliger. Kopi av reguleringskart og det kommunale nettet er private, og Selger leverer eiendommen i ryddig og rengjort stand. særskilt avtale mellom partene om noe annet, jf.
reguleringsbestemmelser S‑374 og S‑5142. vedlikeholdsansvaret for disse påhviler sameiet. avhendingsloven § 3‑5.
Adkomst til eiendommen skjer via offentlig vei.
Kontrakts‑
Eiendommen ligger innenfor område med En standard tilbehørsliste utarbeidet av

---

[d037_d037 | Side [1]]
 faglært
Beskrivelse Byttet vinduer og balkongdør.
Arbeid utført av OBOS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger

---

[d037_d037 | Side [1]]
oligens faktiske bruk av
Gjelder denne registerenheten med flere Andelseierne har ikke personlig ansvar for borettslagets som gir trygghet og profesjonell juridisk hjelp dersom det rom og det som er godkjent av myndighetene. Alle
fellesgjeld, men de må dekke borettslagets løpende oppdages uventede feil eller mangler ved boligen de interessenter anbefales derfor å undersøke eiendommen
utgifter. Manglende innbetaling av fellesutgiftene som neste fem årene. Les mer om Boligkjøperforsikring i nøye, gjerne

---

[d037_d037 | Side [1]]
 trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av

---

[d037_d037 | Side [1]]
kt.
Kjellerboder på 4 m2 og 1 m2 (BRA-e).
Oppgraderinger i 2025: Malt vegger. Montert ventilator, kjøleskap med fryser, stekeovn, induksjonstopp, oppvaskkum og armatur.
Ifølge huseier inneholder borettslaget fellesarealer som kan benyttes av andelseierne. Det opplyses om felles delte arealer som: Tørkerom på loft.
Sykkelrom i kjeller.
TG 1 Følgende sjekkpunkter er vurdert, og det er ikke oppdaget funksjonssvikt:
Overflater himling - Overflater vegger - Overflater gulv - Vannrør - Avløpsrør -

---

[d037_d037 | Side [1]]
 kan det ikke etter overtakelse reklameres
Knr:0301 Gnr:79 Bnr:5 må dekkes av de øvrige andelseierne. på forhold som burde ha vært oppdaget ved en ordinær
gjennomgang.
Legalpant: Borettslaget har legalpant på inntil 2G som Borettslaget har legalpanterett i andelen for krav på
38 39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med signatur fra budgiver. Kravet til legitimasjon og signatur kan en budgiver kreve

---

[d037_d037 | Side [1]]
lysninger
Hvis et rom på visningen mangler fast installert andre kreditorer, selv om de har lån registrert på andelen. Kjøper og selger er forpliktet til å undertegne standard Boligen selges med det inventar og utstyr som i henhold
oppvarmingskilde, vil ikke dette bli inkludert i handelen. kjøpekontrakt utarbeidet av Emera i forbindelse med til gjeldende lover, forskrifter eller offentlige pålegg skal
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges følge med eiendommen, jf. avhendingsloven §

---

[d037_d037 | Side [1]]
akten kan besiktiges følge med eiendommen, jf. avhendingsloven § 3‑4.
Vei, vann og avløp
hos eiendomsmegler før bud inngis. Kontakt Fastmonterte eller spesialtilpassede installasjoner og
Regulering
Eiendommen er tilknyttet offentlig vann‑ og eiendomsmegler for spørsmål. innredning som anses som varig tilknyttet boligen, følger
Regulerings og arealplaner: Eiendommen ligger i et avløpssystem. Stikkledningene fra eiendommen og ut til normalt med i handelen, med mindre det foreligger en
byggeområde for

---

[d037_d037 | Side [1]]
d privat servitutt å etablere forhold som står i strid med disse vedtekter.
Merknader: § 12. Unntak fra disse vedtekters punkt 1 - 4 og 6 kan, hvor særlige grunner taler for det, tillates av
reguleringsrådet innenfor den i bygningsloven og de alminnelige bygningsvedtekter for Aker opptrukne
Knytning(er)motandreplaner: V121064,14460,V040255,68060 ramme.
Forøvrig gjelder bestemmelsene i bygningsloven og de alminnelige bygnings vedtekter for

---

[d037_d037 | Side [1]]
nformasjon hentet fra
Korttidsutleie er tillatt i opptil 30 døgn per år uten vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
Forsikring
samtykke fra styret. salgsoppgaven er basert på selgers informasjon,
Tinglyste heftelser
Boligselgerforsikring: Selger har tegnet fagkyndig vurdering, samt opplysninger fra offentlige
Tinglyste heftelser og rettigheter: På eiendommen er det boligselgerforsikring som dekker selgers ansvar etter registre som kommunen og Kartverket. Det er viktig at
Radonmåling
tinglyst

---

[d037_d037 | Side [1]]
enn 50 m². Det er
Boligbygg over 3 etasjer samt kjeller og loft. Bygningen eier som har plikt til å fremlegge energiattest og er
Selger
har støpt gulv mot grunn. Grunnmur, bærende vegger og Forretningsfører: Obos Eiendomsforvaltning AS ansvarlig for at opplysningene er korrekte.
skillende dekker i hovedsak av betong/ Thine Hestnes og Anders Gjølstad Røhnebæk
murkonstruksjoner. Utvendige fasader kledd med Borettslagets forsikringsselskap: Gjensidige Forsikring Dersom eier ikke har lagt frem energiattest, og

---

[d037_d037 | Side [1]]
moruter, og ytterdører til boligen, reparasjon eller For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
utskiftning av tak, bjelkelag, bærende veggkonstruksjoner, sluk og rør eller ledninger borettslaget en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er
som er bygd inn i bærende konstruksjoner med unntak av varmekabler. begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet
tvangsdekning besluttes gjennomført.
(4)

---

[d037_d037 | Side [1]]
lder:
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
‑ Elektrisk (gulvvarme i gang og på bad og panelovner) sikkerhet for betaling av felleskostnader. Dette betyr at dekning av felleskostnader og andre krav fra
Lovanvendelse
‑ Peis borettslaget har prioritet over tinglyste lån når det gjelder borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
betaling av felleskostnader, og kan kreve inn pengene før Regelverk og generelle opplysninger
Hvis et rom på visningen mangler fast installert andre

---

[d037_d037 | Side [1]]
d av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
De gjennomfører et prosjekt som skal bedre ventilasjonen i leilighetene. Dette informerte

---

[d037_d037 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑ Restløpetid: 22 år 8 md.
Term. pr år: 12
Rente: Flyt 5,50%
Sikringsordning
Eierskiftegebyr
Borettslaget har en avtale med OBOS om garantert
Kr 6570 betaling av felleskostnader. OBOS garanterer for
overførsel til borettslaget hver måned og overtar deretter
alt ansvar og risiko for eventuell manglende innbetaling
av felleskostnader. Avtale om sikring av felleskostnader
31

## Side 17

OM EIENDOMMEN OM EIENDOMMEN
varer til den blir sagt opp av en av partene. nærområdet, perfekt for både hverdag og

---

[d037_d037 | Side [1]]
 bor i selger. Styregodkjennelse må foreligge og forkjøpsrett Om informasjonsgrunnlaget
anleggsarbeider starter i Bjølsendumpa som blir boligen, har imidlertid rett til å leie ut deler av boligen til må være avklart før overtakelse kan finne sted. Opplysninger om boligens størrelse og utforming, både
påkoblingspunkt på eksiterende vannforsyningsnett. andre uten styregodkjenning, jf. borettslagsloven § 5‑4. innvendig og utvendig, bygger på informasjon hentet fra
Korttidsutleie er tillatt i opptil 30 døgn

---

[d037_d037 | Side [1]]
,00 (Boligkjøperforsikring* (valgfritt)) er utarbeidet.
8 212,00 (Forhåndsvarsling forkjøpsrett)
545,00 (Tinglysingsgebyr ‑ hjemmel)
Fellesgjeld
545,00 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Kr 86 548 pr. 31.12.2024
9 302,00 (Omkostninger totalt (uten
Boligkjøperforsikring)) Lånebetingelser fellesgjeld: Lånenummer:
18 602,00 (Omkostninger totalt (med OBBK02‑98207670014
Boligkjøperforsikring)) Type: A
Restsaldo:

---

[d037_d037 | Side [1]]
 Boligselskapets hjemmeside: www.nordre-asen.no.
• Ansvarlig for nøkkel/skiltbestilling er styret.
• Enkelte leiligheter er ilagt eiendomsskatt. Eiendomsskatt kreves inn via felleskostnader i månedene:
mai, juni, september og november.



68 69

## Side 36

Selskapets totale lån og vilkår: Melding fra megler ved salg:
Lånenr Type Restsaldo Restløpetid Term Avdr.frihet Type Rente For selskap med intern forkjøpsrett viser vi til Lov om borettslag §§ 4-11 til 4-22.
pr. år til og med rente Forkjøpsrett for

---

[d037_d037 | Side [1]]
d 4 varamedlemmer.
(3) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om
overlating av bruk betales av den andelseier som har søkt, se pkt. 4-2 (6). (2) Funksjonstiden for styreleder og de andre medlemmene er to år. Varamedlemmer
velges for ett år. Styremedlemmer og varamedlemmer kan gjenvelges.
6-2 Betaling av felleskostnader
(1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget kan endre (3) Styret skal velges av generalforsamlingen. Generalforsamlingen

---

[d037_d037 | Side [1]]
eligger.
Fellesarealer og rettigheter til
benkeskapsbelysning og stikkontakt over kjøkkenbenk. ‑ Har vært rapportert om rotter i Borettslaget, men ikke i
På gulvet er det lagt en pen og slitesterk en‑stavs Vinduer med tre‑lags fra 2022. vårt bygg (kjelsåsveien 10)
bruk
laminat. Ny vegghengt ventilator i 2025 med kullfilter,
Det gjøres særskilt oppmerksom på at boden som er samt avtrekkskanal ut av bygget. Varmtvannsbereder på Gulv: Pen og slitesterk en‑stavs laminat i stuen og
medtatt i BRA‑e og totalt

---

[d037_d037 | Side [1]]
en enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel fastsatt
ved stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres etter
borettslagslovens § 5-19. 8. Styret og dets vedtak
(2) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter nytten for 8-1 Styret
den enkelte bolig eller etter forbruk. (1) Borettslaget skal ha et styre som skal bestå av en styreleder og 4 andre medlemmer
med 4 varamedlemmer.
(3) Borettslagets kostnader til behandling og

---

[d037_d037 | Side [1]]
kt som skal bedre ventilasjonen i leilighetene. Dette informerte styret om at skal være
Beskrivelse
priset inn i felleskostnad fra desember i år.
Initialer selger: AGR, TH 3
07105220
:ecnerefer
tnemucoD
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer

---

[d037_d037 | Side [1]]
 i boligen som borettslaget er ansvarlig for å utbedre,
èn eller flere av sameierne ikke bor i boligen. plikter andelseieren straks å melde fra skriftlig til borettslaget.
(5) Overlating av bruken reduserer ikke andelseierens plikter overfor borettslaget. (8) Ny eier av andelen har plikt til å utføre vedlikehold medregnet reparasjon og
utskifting i boligen, selv om det skulle vært utført av den forrige andelseieren.
(6) Borettslaget kan kreve kostnader forbundet med behandlingen og eventuell
oppfølging av

---

[d037_d037 | Side [1]]
tnader. For
ytterligere spesifikasjon, vennligst se regnskapet i årsrapporten.
• Påkostninger/utbedringer i boligselskapet: Se årsrapporten.
• Borettslaget har en avtale med OBOS om garantert betaling av felleskostnader. OBOS garanterer for
overførsel til borettslaget hver måned og overtar deretter alt ansvar og risiko for eventuell manglende
innbetaling av felleskostnader. Avtale om sikring av felleskostnader varer til den blir sagt opp av en av
partene. Oppsigelsestiden er 12 – tolv– måneder regnet fra

---

[d037_d037 | Side [1]]
amboer eller et annet medlem av andelseierens
5. andre rettslige disposisjoner over fast eiendom som går ut over vanlig husstand og eventuelle leiere har rett til å være til stede og til å uttale seg.
forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med seg 9-6 Møteledelse og protokoll
økonomisk ansvar eller utlegg for borettslaget på mer enn fem prosent av de Generalforsamlingen skal ledes av styrelederen med mindre generalforsamlingen
årlige felleskostnadene. velger en

---

[d037_d037 | Side [1]]
 Til generalforsamlingen i Nordre Åsen Borettslag


 

 Konklusjon
 Vi har revidert årsregnskapet for Nordre Åsen Borettslag som

---

[d037_d037 | Side [1]]
ørselen er utført av OBOS generalforsamlingen den 28.04.2025 ble regnskapet
I forbindelse med salget er det blitt utført en er derfor ikke utført hulltaking/ fuktmåling. Eiendomsforvaltning AS. godkjent.
tilstandsrapport av bygningssakkyndig Knut Johnsen, ‑ Borettslaget har et vaskeri som kan benyttes av alle I 2024 gikk borettslaget med et overskudd på 1 731 474,‑.
som gir en teknisk gjennomgang av boligen og påpeker ‑ Stakeluke: Avløpsrørene er skjult og eventuell stakeluke beboere i borettslaget. For

---

[d037_d037 | Side [1]]
tslag beliggende i bydel Nordre Aker, Oslo kommune. Borettslaget består av 315 andeler. Felles tomt for
borettslaget opparbeidet med blant annet asfalterte internveier, parkeringsplasser, sykkelparkering, gressplen, trær, prydbusker og diverse
beplantning.
i Informasjon
Ikonet (i) benyttes til å gi nyttige opplysninger selv om funksjonssvikt ikke ble oppdaget. Boligbygg over 3 etasjer samt kjeller og loft. Bygningen har støpt gulv mot grunn. Grunnmur, bærende vegger og skillende dekker i hovedsak

---

[d037_d037 | Side [1]]
ene er skjult og eventuell stakeluke beboere i borettslaget. For 2025 er det budsjettert med 264 000,‑.
eventuelle avvik. Rapporten, sammen med selgers er ikke lokalisert.
egenerklæring, er vedlagt salgsoppgaven. Det er viktig at Planlagte påkostninger:
Vedtekter/ husordensregler
interessenter grundig gjennomgår disse dokumentene
før bud legges inn. Skifte av røykdetektorer ‑ Et pågående prosjekt startet Vedlagt salgsoppgaven
opp høsten 2024 med utskifting av de gamle
Øvrig
All informasjon i

---

[d037_d037 | Side [1]]
slitesterk en‑stavs laminat i stuen og
medtatt i BRA‑e og totalt BRA, ligger på borettslagets ca. 110 liter fra 2018 plassert under benkeplate. Kjøkkenet kjøkkenet, fliser i entréen og på badet, og gulvteppe på Samsvarserklæring: Det fremgår av selgers
fellesareal, men disponeres av denne andelen. har montert lekkasjestopper og komfyrvakt. soverom. egenerklæringsskjema / tilstandsrapporten at det
Borettslaget kan på et senere tidspunkt omdisponere foreligger samsvarserklæring for det elektriske arbeidet

---

[d037_d037 | Side [1]]
et interesse
Nordre Åsen Borettslag er et andelslag dvs. at ikke OBOS, men borettshaverne i
tilsier taushet.
fellesskap eier byggene. Alle beboere er ansvarlige for at eiendommen holdes i
førsteklasses stand og at borettslagets omdømme er det best mulige.
10-3 Mindretallsvern
Det er også beboerne selv som må skape de forhold som sikrer dem orden, ro og
Generalforsamlingen, styret eller forretningsfører kan ikke treffe beslutning som er
trygghet i hjemmet og hever borettslagets og strøkets anseelse.
egnet

---

[d037_d037 | Side [1]]
ed mindre generalforsamlingen
årlige felleskostnadene. velger en annen møteleder. Møtelederen skal sørge for at det føres protokoll fra
generalforsamlingen.
8-4 Representasjon og fullmakt
Styrets leder og ett styremedlem representerer i fellesskap borettslaget 9-7 Stemmerett og fullmakt
utad og tegner dets navn. Hver andel gir rett til èn stemme på generalforsamlingen. Andelseier som eier mer
enn èn andel har likevel bare èn stemme. For en andel med flere eiere kan det bare
avgis èn stemme. Andelseier kan

---

[d037_d037 | Side [1]]
i innkallingen
2. å øke tallet på andeler eller å knytte andeler til boliger som tidligere har vært
benyttet til utleie, jf borettslagslovens § 3-2 andre ledd, 9-5 Møterett
3. salg eller kjøp av fast eiendom, eller av andelsbolig i borettslaget Alle andelseiere har rett til å møte på generalforsamlingen med forslags, - tale- og
4. å ta opp lån som skal sikres med pant med prioritet foran innskuddene, stemmerett. Andelseierens ektefelle, samboer eller et annet medlem av andelseierens
5. andre rettslige

---

[d037_d037 | Side [1]]
 at generalforsamlingen har gitt samtykke med minst to - Valg av styremedlemmer og varamedlemmer
tredjedels flertall fatte vedtak om: - Eventuelt valg av revisor
1. ombygging, påbygging eller andre endringer av bebyggelsen eller tomten - Fastsetting av godtgjørelse til styret
som etter forholdene i borettslaget går ut over vanlig forvaltning og - Valg av delegert med vara til OBOS BBLs generalforsamling
vedlikehold, - Andre saker som er nevnt i innkallingen
2. å øke tallet på andeler eller å knytte andeler

---

[d037_d037 | Side [1]]
re boligen er helt eller delvis utleid. interessenter oppfordres til å gjennomgå denne før bud egenerklæring. Kjøper anses for å være kjent med
inngis. forhold som er tydelig beskrevet i salgsdokumentene,
301/ 79/ 31: slike forhold kan ikke senere gjøres gjeldende som en
Diverse
09.12.1986 ‑ Dokumentnr: 80620 ‑ Erklæring/ avtale Boligkjøperforsikring: Kjøper har anledning til å tegne mangel ved boligen. Dette gjelder uavhengig av om
Bestemmelse om anlegg og vedlikehold av ledninger Borettslagsmodellen

---

[d037_d037 | Side [1]]
50170
Selger 1 navn Selger 2 navn
Anders Gjølstad Røhnebæk Thine Hestnes
Gateadresse
Kjelsåsveien 10A
Poststed Postnr
OSLO 0488
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2022
Hvor lenge har du eid boligen?
Antall år 3
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle

---

[d037_d037 | Side [1]]
/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AGR, TH 4
46
07105220
:ecnerefer
tnemucoD
47

## Side 25

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og

---

[d037_d037 | Side [1]]
neste fem årene. Les mer om Boligkjøperforsikring i nøye, gjerne sammen med fagperson, før bud gis.
24.02.1950 ‑ Dokumentnr: 2407 ‑ Registrering av grunn følge av andre andelshaveres mislighold, eller dersom vedlagte materiell eller på https:/ / Dersom kjøper velger å kjøpe uten å ha sett
Denne matrikkelenhet opprettet fra: borettslaget sitter på fraflyttede og/ eller usolgte andeler, www.soderbergpartners.no/ eiendom/ boligkjoper/ eiendommen, kan det ikke etter overtakelse reklameres
Knr:0301 Gnr:79 Bnr:5

---

[d037_d037 | Side [1]]
endingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven §

---

[d037_d037 | Side [1]]
le kjøperne, da OBOS avklarer forkjøpsretten Gebyr for å benytte forkjøpsrett Kr 8.212,- Kjøper (som benytter forkjøp)
basert på denne informasjonen. Meldingen må også inneholde eventuelle andre (dersom forkjøpsretten benyttes)
avtalte vilkår. Aksepten må inneholde forbehold om avklaring av forkjøpsretten.
• Boligen må utlyses på nytt dersom det går mer enn 3 mnd fra forhåndsvarsel ble mottatt til salgsmelding Eierskiftegebyr Kr 6.570,- Selger
blir mottatt av OBOS. Nye frister løper. Jf. brl § 4-15. Dersom

---

[d037_d037 | Side [1]]
ontalt i starten av hvert hovedelement. Hovedhensikten med denne risikovurderingsrapporten er å bidra til å vurdere boligens tilstand,
oppfylle forsikringstakers/selgers opplysningsplikt overfor forsikringsgiver og kjøper av boligen, og gi den bygningssakkyndiges faglige vurderinger
Gnr./Bnr.: 79/31 som gjelder byggetekniske forhold for boligen, som vil kunne begrense boligselgerforsikringens dekningsomfang og som kjøper anbefales være
spesielt oppmerksom på.
Andelsnr. : 194
Oslo kommune Forklaring av

---

[d037_d037 | Side [1]]
idige Forsikring Dersom eier ikke har lagt frem energiattest, og eier etter
Borettslag
teglstein. Takkonstruksjon av saltaksform utvendig skriftlig anmodning fra kjøper ikke har fremlagt
tekket med takstein (taket er ikke Nordre Åsen Borettslag Polisenummer fellesforsikring: 91789505 energiattest før avtale om salg er inngått, kan kjøper få
besiktiget). Leiligheten har slett entrédør fra Swedoor laget en energiattest ved hjelp av ekspert for selgers
med brannklasse B30, lydklasse 35dB og kikkehull.

---

[d037_d037 | Side [1]]
n
Forekommer det at sikringer løses ut: Nei.
Har det vært brann, branntilløp eller varmgang i anlegget: Nei.
Finnes det kursfortegnelse, og er antallet sikringer i samsvar med denne: Ja.
Har det vært utført egeninnsats eller ufaglært arbeid på det elektriske anlegget: Nei.
Fungerer hvitevarer som følger boligen: Ja.
Etasjeskiller - 2.etasje.
Etasjeskille av betong.
Gulv mot grunn og etasjeskillere måles ved bruk av laser for eventuelle skjevheter. I utgangspunktet måles 2 rom i hver etasje (eventuelt TG 1

---

[d037_d037 | Side [1]]
atkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr

---

[d037_d037 | Side [1]]
r for modell 2 – avklaring av forkjøpsrett til fast pris/ bud er akseptert: Forkjøp krever inn eierskiftegebyr på vegne av OBOS Eiendomsforvaltning AS
• For at 20 dagers fristen skal begynne å løpe må OBOS avdeling Forkjøp få skriftlig melding om
salget. Dette gjøres til e-post forkjop@obos.no. Kun dette godkjennes som rett adressat. Dersom Hvis det benyttes forkjøp betales det gebyr for å benytte forkjøp, mens gebyret for evt. forhåndsvarsling
melding sendes til annen adresse i OBOS begynner ikke fristen

---

[d037_d037 | Side [1]]
rsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
høyeste bud.
2.Når et bud er inngitt til megler og innholdet i budet er
formidlet til selger (slik at selger har

---

[d037_d037 | Side [1]]
e eventuell eksisterende OBOS-tilknyttet
telefonnummer til eier, visningstidspunkt, boligens areal og antall rom, samt prisantydning. Dersom
bolig. Denne kan som regel ikke overføres til ektefelle, foreldre, barn, etc. etter unntaksreglene.
boligen annonseres på finn.no bes det også om at finn-kode oppgis.
• Interessenter må selv avgjøre om de vil delta i budrunden hos megler.
• Pris for forhåndsvarsling av forkjøpsretten er pt. 8212,-, men refunderes, dersom forkjøpsrett benyttes.
Hvis den forhåndsvarsles

---

[d037_d037 | Side [1]]
på annens eiendom, herunder
vil oppstå er ikke mulig å bestemme. Lekkasje kan være nært for eksempel naust og brygge, kartlegging og vurdering av fellesdeler i
forestående eller først skje mange år frem i tid. Når anbefalt brukstid sameier-borettslag og lignende, vurdering av energiforbruk,
etter beste skjønn er vurdert oppnådd, har restlevetiden dermed større energimerking, støy, vibrasjoner, lydforhold, radonmålinger, inneklima,
usikkerhet. miljø, elektromagnetisme, funksjonskrav (universell

---

[d037_d037 | Side [1]]
ger innenfor område med En standard tilbehørsliste utarbeidet av Norges
reguleringsplan for ny vannforsyning i Oslo ‑ Stamnett Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
grunnlag
Utleie
(S‑5142). Reguleringsplanen skal legge til rette for gjelder som utgangspunkt for hva som inkluderes i salget
bygging og drift av forsterket overordnet infrastruktur for Adgang til utleie: Det er begrenset adgang til å leie ut – med mindre avvik er tydelig avtalt mellom kjøper og
Overtakelse
vannforsyning med

---

[d037_d037 | Side [1]]
rt for selgers
med brannklasse B30, lydklasse 35dB og kikkehull. Organisasjonsnummer: 948225425 Husdyr: Dyrehold kan tillates etter godkjent søknad til regning, innen ett år etter at avtale om salg er inngått.
Balkongdør og vinduer med karmer/ rammer av tre styret. Det vises også til https:/ / vibbo.no/ nordre‑asen/ Dette følger av forskrift om energimerking av bygninger
utvendig beslått med metall og tre‑lags glass. Andelsnummer: 194 om og tekniske anlegg § 5 (3).
Oppvarming med elektrisitet i kombinasjon

---

[d037_d037 | Side [1]]
er tydelig avtalt mellom kjøper og
Overtakelse
vannforsyning med tilknytning til eksisterende anlegg. bolig i borettslag. Med styrets godkjenning og under selger.
Det meste av arbeidet skal foregå under bakken, men det visse vilkår kan boligen leies ut i inntil 3 år, jf. Tidspunkt for overtakelse avtales mellom kjøper og
må likevel påregnes støyende aktiviteter når rigg og borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i selger. Styregodkjennelse må foreligge og forkjøpsrett Om

---

[d037_d037 | Side [1]]
dring/utskifting. Restlevetiden (eks.vis rom under terreng, loft eller andre uinnredete arealer),
er usikker, og det kan ikke angis nøyaktig tid for når levetiden utløper. vurdering av boligens markedsverdi, teknisk verdi, om boligen og
eventuelle ombygginger/bruksendringer er byggemeldte og godkjente,
TG 2 kan også bety en feil eller skade! samt om rom i boligen som brukes til varig opphold er godkjent for
dette (dersom nødvendig dokumentasjon ikke er framlagt av eier).
I tillegg til å beskrive

---

[d037_d037 | Side [1]]
ilasjonskanaler, antenner og forøvrig alle anlegg som vil skjære takflatene.
ReguleringsplanforNordreÅsen,gnr. 79,bnr.5,ØstreAker,Oslo § 6. Det oppsettes fellesantenneanlegg for hver bygningsblokk.
§ 7. Utvendige søppelkasser tillates ikke.
§ 8. Bebyggelsen skal gis en samstemt material- og fargebehandling som skal godkjennes av
bygningskontrollen.
Vedtaksdato: 07.06.1949
§ 9. Det utarbeides parkplan i målestokk 1:500, og nødvendige beplantningsplaner i målestokk 1:200 for
Vedtattav:

---

[d037_d037 | Side [1]]
er det gateparkeringparkering etter områdets
Maridalsvannet, som byr på fantastiske muligheter for gjeldende bestemmelser. Det foreligger byggegodkjente tegninger som stemmer
Formueverdi sekundær: Kr 5 680 655(2024) turer, trening, ski og sykkel gjennom hele året. Dette gjør overens med dagens bruk.
området ideelt for deg som ønsker å kombinere byliv
Adkomst
Info om formuesverdi: Skatteetaten beregner en med naturnærhet. Ferdigattest/ brukstillatelse datert: 09.12.1953.
boligverdi (beregnet markedsverdi

---

[d037_d037 | Side [1]]
tillatelse datert: 09.12.1953.
boligverdi (beregnet markedsverdi for bolig) basert på På høyre side i annonsen finner du et kartutsnitt. Ved å
SSBs statistiske opplysninger om omsatte boliger. I Her får du med andre ord en beliggenhet som gir deg klikke på kartet kan du enkelt planlegge din rute fra valgt
Innhold
beregningen tas det hensyn til din boligs beliggenhet, både byens bekvemmeligheter og naturens ro – alt startpunkt og helt frem til boligen. Det vil være skiltet ved
areal, byggeår og type bolig.

---

[d037_d037 | Side [1]]
r eksempel ulovlig bruksendring, opplyses dette. Det er de
siste byggemeldte tegningene, og at disse er godkjente av bygningsmyndighetene som er sikre holdepunkter for om det formelle
og juridiske er i orden. Det gjøres spesielt oppmerksom på at den bygningssakkyndige ikke er ansvarlig for å innhente godkjente
tegninger. Dersom godkjente tegninger ikke fremlegges, hefter det derfor en usikkerhet med lovligheten som en kjøper må ta
spesielt hensyn til. Konsekvensene kan i enkelte tilfeller være

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko for beboere, og manglende måling gir kjøper ingen informasjon om radonnivåer i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Spørsmål 21 i egenerklæringsskjema: 'Er det foretatt radonmåling? Nei'"
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Ventilasjonspåkostning vil øke felleskostnader: Borettslaget gjennomfører et prosjekt for å bedre ventilasjonen i leilighetene, og styret har informert om at dette skal prises inn i felleskostnadene fra desember inneværende år. Dette innebærer en fremtidig økning i månedlige utgifter for kjøper.",
      "evidence": [
        "De gjennomfører et prosjekt som skal bedre ventilasjonen i leilighetene. Dette informerte styret om at skal være priset inn i felleskostnad fra desember i år.",
        "Spørsmål 26 i egenerklæring: 'Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Ja'"
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Rotteproblem i borettslaget: Det er rapportert om rotter i borettslaget, noe som kan indikere et pågående skadedyrproblem i fellesarealene. Selv om det opplyses at problemet ikke er i det aktuelle bygget (Kjelsåsveien 10), utgjør dette en risiko.",
      "evidence": [
        "Har vært rapportert om rotter i Borettslaget, men ikke i vårt bygg (kjelsåsveien 10)",
        "Spørsmål 27 i egenerklæring bekrefter kjennskap til skadedyr i borettslaget/fellesareal"
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R4",
      "description": "Fellesgjeld og flytende rente: Andelen har fellesgjeld på kr 86 548 (per 31.12.2024) med flytende rente på 5,50%. Flytende rente innebærer risiko for økte rentekostnader og dermed høyere felleskostnader dersom rentenivået stiger. Restløpetid er 22 år og 8 måneder.",
      "evidence": [
        "Kr 86 548 pr. 31.12.2024",
        "Rente: Flyt 5,50%",
        "Restløpetid: 22 år 8 md.",
        "Term. pr år: 12"
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Reguleringsplan for ny vannforsyning (S-5142): Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo – Stamnett. Det må påregnes støyende aktiviteter i forbindelse med rigg- og anleggsarbeider i Bjølsendumpa.",
      "evidence": [
        "Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo – Stamnett (S-5142).",
        "Anleggsarbeider starter i Bjølsendumpa som blir påkoblingspunkt på eksisterende vannforsyningsnett.",
        "Det meste av arbeidet skal foregå under bakken, men det må likevel påregnes støyende aktiviteter når rigg og anleggsarbeider starter."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Skjulte avløpsrør og manglende stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert. Dette gjør det vanskelig å inspisere og vedlikeholde rørene, og øker risikoen for skjulte skader eller blokkering.",
      "evidence": [
        "Stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert.",
        "Hulltaking/fuktmåling er derfor ikke utført."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Primærkonstruksjoner med potensiell TG 2 på grunn av alder: Skjulte elementer som drenering, yttertak, vann- og avløpsrør kan ha vært uendret siden byggeår (ferdigattest 1953), og kan ha fått TG 2 utelukkende på grunn av alder. Dette innebærer risiko for fremtidige kostbare utbedringer.",
      "evidence": [
        "Primærkonstruksjoner som eksempelvis drenering, yttertak inklusive undertak (under yttertak) og vann- og avløpsrør er skjulte elementer og er kanskje ikke skiftet siden byggeår.",
        "Ferdigattest/brukstillatelse datert: 09.12.1953.",
        "TG 2 (gul farge) for å gi beskjed til kjøpere om å være oppmerksomme på at selv om husets synlige overflater fremstår uten svekkelser, har boligen tross alt bruksslitasjer."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Begrenset adgang til utleie: Det er begrenset adgang til å leie ut boligen i borettslaget. Utleie krever styregodkjenning og er kun tillatt i inntil 3 år. Korttidsutleie er begrenset til 30 døgn per år uten samtykke. Dette begrenser kjøpers fleksibilitet.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10.",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Forkjøpsrett kan forsinke overtakelse: Borettslaget har intern forkjøpsrett, og styregodkjennelse samt avklaring av forkjøpsrett må foreligge før overtakelse kan finne sted. Dette kan medføre forsinkelser i overtakelsesprosessen.",
      "evidence": [
        "Styregodkjennelse må foreligge og forkjøpsrett må være avklart før overtakelse kan finne sted.",
        "For selskap med intern forkjøpsrett viser vi til Lov om borettslag §§ 4-11 til 4-22.",
        "Boligen må utlyses på nytt dersom det går mer enn 3 mnd fra forhåndsvarsel ble mottatt til salgsmelding blir mottatt av OBOS."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Bod på borettslagets fellesareal: Kjellerboden som er medtatt i BRA-e og totalt BRA, ligger på borettslagets fellesareal og disponeres av andelen. Borettslaget kan på et senere tidspunkt omdisponere dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på borettslagets fellesareal, men disponeres av denne andelen. Borettslaget kan på et senere tidspunkt omdisponere.",
        "Kjellerboder på 4 m2 og 1 m2 (BRA-e)."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Tekniske installasjoner ikke vurdert: Tekniske installasjoner og innretninger er som hovedregel ikke vurdert i tilstandsrapporten, da dette krever spisskompetanse. Årsak til skader kan være komplekse og er heller ikke vurdert. Dette innebærer at kjøper ikke har full oversikt over tilstanden til tekniske anlegg.",
      "evidence": [
        "Tekniske installasjoner og innretninger er som hovedregel ikke vurdert, da dette krever spisskompetanse på de ulike fagområdene.",
        "Årsak til ulike skadesymptomer og skader kan være svært komplekse og er derfor heller ikke vurdert om annet ikke er nevnt. Det gjelder også utbedringskostnader."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Eiendomsskatt på enkelte leiligheter: Enkelte leiligheter i borettslaget er ilagt eiendomsskatt, som kreves inn via felleskostnadene. Det er uklart om denne andelen er ilagt eiendomsskatt, noe som kan medføre uventede ekstra kostnader.",
      "evidence": [
        "Enkelte leiligheter er ilagt eiendomsskatt. Eiendomsskatt kreves inn via felleskostnader i månedene: mai, juni, september og november."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R13",
      "description": "Manglende energiattest fra selger: Dersom selger ikke har fremlagt energiattest, kan kjøper få laget en energiattest for selgers regning. Manglende energiattest gir kjøper begrenset informasjon om boligens energiforbruk og -standard.",
      "evidence": [
        "Dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har fremlagt energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R14",
      "description": "Lav takhøyde på bad: Det er målt ca. 2,26 meter takhøyde på badet, noe som er under anbefalt standard og kan oppleves som trangt. Dette kan også ha betydning for godkjenning av rommet som varig oppholdsrom.",
      "evidence": [
        "Det er målt ca. 2,26 meter takhøyde i bad. Ca. 2,53 meter i soverom og ca. 2,52 meter i øvrige rom."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    },
    {
      "risk_id": "R15",
      "description": "NYIDENTIFISERT – Legalpant og mislighold av felleskostnader: Borettslaget har legalpant i andelen for krav på dekning av felleskostnader på inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet foran tinglyste lån ved mislighold, noe som kan påvirke kjøpers finansiering og pantesikkerhet.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at dekning av felleskostnader og andre krav fra borettslaget har prioritet over tinglyste lån.",
        "Manglende innbetaling av fellesutgiftene som neste fem årene... må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R16",
      "description": "NYIDENTIFISERT – Yttertak ikke besiktiget: Tilstandsrapporten angir at yttertak kun besiktiges dersom stige på forhånd er reist og forsvarlig sikret, og den bygningssakkyndige anser det forsvarlig. Det er uklart om taket ble besiktiget, noe som innebærer usikkerhet om takens tilstand på en bygning fra 1953.",
      "evidence": [
        "Yttertak besiktiges når stige på forhånd er reist og forsvarlig sikret, og i tillegg den bygningssakkyndige på egen selvstendig vurdering anser den som forsvarlig å bruke. I andre tilfeller besiktiges yttertaket fra bakkenivå og inne fra loftet.",
        "Ferdigattest/brukstillatelse datert: 09.12.1953.",
        "Takkonstruksjon av saltaksform utvendig tekket med takstein (taket er ikke besiktiget)."
      ],
      "source_documents": [
        "d037_d037"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "Hva er konkret beløp for økning i felleskostnader etter ventilasjonspåkostning fra desember?",
    "Er det utstedt energiattest for Kjelsåsveien 10A?",
    "Hvilke TG 2 og TG 3 avvik er konkret registrert i tilstandsrapporten for Kjelsåsveien 10A?",
    "Er eiendomsskatten ilagt denne spesifikke andelen (andelsnr. 194)?",
    "Hva er nåværende felleskostnader per måned for andelen?",
    "Er det gjennomført hulltaking eller fuktmåling i boligen?",
    "Hva er status på skifte av røykdetektorer i borettslaget?"
  ],
  "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende radonmåling (0.95):** Godt støttet av både salgsoppgaven og egenerklæringsskjema (spørsmål 21). Confidence opprettholdes på 0.95.\n\n**R2 – Ventilasjonspåkostning øker felleskostnader (0.95):** Direkte bekreftet i egenerklæringen (spørsmål 26). Konkret beløp for økning mangler, men risikoen er klart dokumentert. Confidence opprettholdes på 0.95.\n\n**R3 – Rotteproblem (0.85):** Evidensen er klar – rotter er rapportert i borettslaget, men ikke i det aktuelle bygget. Risikoen er reell men noe begrenset av presiseringen om at det ikke gjelder Kjelsåsveien 10. Confidence justeres ned til 0.80.\n\n**R4 – Fellesgjeld og flytende rente (0.90):** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.90.\n\n**R5 – Reguleringsplan S-5142 (0.90):** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R6 – Skjulte avløpsrør og manglende stakeluke (0.85):** Direkte bekreftet i tilstandsrapporten. Confidence opprettholdes på 0.85.\n\n**R7 – Primærkonstruksjoner med TG 2 pga. alder (0.85):** Godt støttet av dokumentene. Confidence opprettholdes på 0.85.\n\n**R8 – Begrenset adgang til utleie (0.80):** Godt dokumentert. Dette er imidlertid en generell borettslagsregel, ikke en spesifikk risiko ved denne boligen. Confidence opprettholdes på 0.80, men risikoen er mer av informativ karakter.\n\n**R9 – Forkjøpsrett kan forsinke overtakelse (0.80):** Godt dokumentert. Confidence opprettholdes på 0.80.\n\n**R10 – Bod på fellesareal (0.90):** Svært godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence justeres opp til 0.92.\n\n**R11 – Tekniske installasjoner ikke vurdert (0.80):** Godt dokumentert som metodebegrensning. Confidence opprettholdes på 0.80.\n\n**R12 – Eiendomsskatt (0.70):** Evidensen bekrefter at NOEN leiligheter er ilagt eiendomsskatt, men det er uklart om denne andelen er berørt. Usikkerheten er reell. Confidence justeres ned til 0.65 da det ikke er bekreftet at akkurat denne andelen er berørt.\n\n**R13 – Manglende energiattest (0.70):** Evidensen er kun en generell lovhenvisning om hva som skjer dersom energiattest mangler – det bekreftes ikke eksplisitt at energiattest faktisk mangler for denne boligen. Confidence justeres ned til 0.55.\n\n**R14 – Lav takhøyde på bad (0.65):** Takhøyden på 2,26 m er dokumentert. Imidlertid er bad ikke et varig oppholdsrom, og 2,26 m er ikke nødvendigvis under krav for bad. Risikoen er begrenset. Confidence justeres ned til 0.50.\n\n**Nye risikoer identifisert:**\n\n**R15 – Legalpant og prioritet ved mislighold:** Borettslaget har legalpant i andelen foran tinglyste lån. Dette er en reell risiko for kjøpers finansiering og er dokumentert i salgsoppgaven. Confidence: 0.75.\n\n**R16 – Yttertak ikke besiktiget:** Dokumentet angir eksplisitt at taket IKKE er besiktiget (\"taket er ikke besiktiget\"). For en bygning fra 1953 er dette en vesentlig risiko. Confidence: 0.85.\n"
}

## Raw Response
```json
{
  "id": "msg_01Nat7w8Bzt1cyv27DELr6TD",
  "container": null,
  "content": [
    {
      "id": "toolu_01UHYp6eUZ5aZeaKt3WnFUmJ",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko for beboere, og manglende måling gir kjøper ingen informasjon om radonnivåer i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Spørsmål 21 i egenerklæringsskjema: 'Er det foretatt radonmåling? Nei'"
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Ventilasjonspåkostning vil øke felleskostnader: Borettslaget gjennomfører et prosjekt for å bedre ventilasjonen i leilighetene, og styret har informert om at dette skal prises inn i felleskostnadene fra desember inneværende år. Dette innebærer en fremtidig økning i månedlige utgifter for kjøper.",
            "evidence": [
              "De gjennomfører et prosjekt som skal bedre ventilasjonen i leilighetene. Dette informerte styret om at skal være priset inn i felleskostnad fra desember i år.",
              "Spørsmål 26 i egenerklæring: 'Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Ja'"
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Rotteproblem i borettslaget: Det er rapportert om rotter i borettslaget, noe som kan indikere et pågående skadedyrproblem i fellesarealene. Selv om det opplyses at problemet ikke er i det aktuelle bygget (Kjelsåsveien 10), utgjør dette en risiko.",
            "evidence": [
              "Har vært rapportert om rotter i Borettslaget, men ikke i vårt bygg (kjelsåsveien 10)",
              "Spørsmål 27 i egenerklæring bekrefter kjennskap til skadedyr i borettslaget/fellesareal"
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R4",
            "description": "Fellesgjeld og flytende rente: Andelen har fellesgjeld på kr 86 548 (per 31.12.2024) med flytende rente på 5,50%. Flytende rente innebærer risiko for økte rentekostnader og dermed høyere felleskostnader dersom rentenivået stiger. Restløpetid er 22 år og 8 måneder.",
            "evidence": [
              "Kr 86 548 pr. 31.12.2024",
              "Rente: Flyt 5,50%",
              "Restløpetid: 22 år 8 md.",
              "Term. pr år: 12"
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Reguleringsplan for ny vannforsyning (S-5142): Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo – Stamnett. Det må påregnes støyende aktiviteter i forbindelse med rigg- og anleggsarbeider i Bjølsendumpa.",
            "evidence": [
              "Eiendommen ligger innenfor område med reguleringsplan for ny vannforsyning i Oslo – Stamnett (S-5142).",
              "Anleggsarbeider starter i Bjølsendumpa som blir påkoblingspunkt på eksisterende vannforsyningsnett.",
              "Det meste av arbeidet skal foregå under bakken, men det må likevel påregnes støyende aktiviteter når rigg og anleggsarbeider starter."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Skjulte avløpsrør og manglende stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert. Dette gjør det vanskelig å inspisere og vedlikeholde rørene, og øker risikoen for skjulte skader eller blokkering.",
            "evidence": [
              "Stakeluke: Avløpsrørene er skjult og eventuell stakeluke er ikke lokalisert.",
              "Hulltaking/fuktmåling er derfor ikke utført."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Primærkonstruksjoner med potensiell TG 2 på grunn av alder: Skjulte elementer som drenering, yttertak, vann- og avløpsrør kan ha vært uendret siden byggeår (ferdigattest 1953), og kan ha fått TG 2 utelukkende på grunn av alder. Dette innebærer risiko for fremtidige kostbare utbedringer.",
            "evidence": [
              "Primærkonstruksjoner som eksempelvis drenering, yttertak inklusive undertak (under yttertak) og vann- og avløpsrør er skjulte elementer og er kanskje ikke skiftet siden byggeår.",
              "Ferdigattest/brukstillatelse datert: 09.12.1953.",
              "TG 2 (gul farge) for å gi beskjed til kjøpere om å være oppmerksomme på at selv om husets synlige overflater fremstår uten svekkelser, har boligen tross alt bruksslitasjer."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Begrenset adgang til utleie: Det er begrenset adgang til å leie ut boligen i borettslaget. Utleie krever styregodkjenning og er kun tillatt i inntil 3 år. Korttidsutleie er begrenset til 30 døgn per år uten samtykke. Dette begrenser kjøpers fleksibilitet.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10.",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Forkjøpsrett kan forsinke overtakelse: Borettslaget har intern forkjøpsrett, og styregodkjennelse samt avklaring av forkjøpsrett må foreligge før overtakelse kan finne sted. Dette kan medføre forsinkelser i overtakelsesprosessen.",
            "evidence": [
              "Styregodkjennelse må foreligge og forkjøpsrett må være avklart før overtakelse kan finne sted.",
              "For selskap med intern forkjøpsrett viser vi til Lov om borettslag §§ 4-11 til 4-22.",
              "Boligen må utlyses på nytt dersom det går mer enn 3 mnd fra forhåndsvarsel ble mottatt til salgsmelding blir mottatt av OBOS."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Bod på borettslagets fellesareal: Kjellerboden som er medtatt i BRA-e og totalt BRA, ligger på borettslagets fellesareal og disponeres av andelen. Borettslaget kan på et senere tidspunkt omdisponere dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på borettslagets fellesareal, men disponeres av denne andelen. Borettslaget kan på et senere tidspunkt omdisponere.",
              "Kjellerboder på 4 m2 og 1 m2 (BRA-e)."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Tekniske installasjoner ikke vurdert: Tekniske installasjoner og innretninger er som hovedregel ikke vurdert i tilstandsrapporten, da dette krever spisskompetanse. Årsak til skader kan være komplekse og er heller ikke vurdert. Dette innebærer at kjøper ikke har full oversikt over tilstanden til tekniske anlegg.",
            "evidence": [
              "Tekniske installasjoner og innretninger er som hovedregel ikke vurdert, da dette krever spisskompetanse på de ulike fagområdene.",
              "Årsak til ulike skadesymptomer og skader kan være svært komplekse og er derfor heller ikke vurdert om annet ikke er nevnt. Det gjelder også utbedringskostnader."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Eiendomsskatt på enkelte leiligheter: Enkelte leiligheter i borettslaget er ilagt eiendomsskatt, som kreves inn via felleskostnadene. Det er uklart om denne andelen er ilagt eiendomsskatt, noe som kan medføre uventede ekstra kostnader.",
            "evidence": [
              "Enkelte leiligheter er ilagt eiendomsskatt. Eiendomsskatt kreves inn via felleskostnader i månedene: mai, juni, september og november."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R13",
            "description": "Manglende energiattest fra selger: Dersom selger ikke har fremlagt energiattest, kan kjøper få laget en energiattest for selgers regning. Manglende energiattest gir kjøper begrenset informasjon om boligens energiforbruk og -standard.",
            "evidence": [
              "Dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har fremlagt energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R14",
            "description": "Lav takhøyde på bad: Det er målt ca. 2,26 meter takhøyde på badet, noe som er under anbefalt standard og kan oppleves som trangt. Dette kan også ha betydning for godkjenning av rommet som varig oppholdsrom.",
            "evidence": [
              "Det er målt ca. 2,26 meter takhøyde i bad. Ca. 2,53 meter i soverom og ca. 2,52 meter i øvrige rom."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          },
          {
            "risk_id": "R15",
            "description": "NYIDENTIFISERT – Legalpant og mislighold av felleskostnader: Borettslaget har legalpant i andelen for krav på dekning av felleskostnader på inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet foran tinglyste lån ved mislighold, noe som kan påvirke kjøpers finansiering og pantesikkerhet.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at dekning av felleskostnader og andre krav fra borettslaget har prioritet over tinglyste lån.",
              "Manglende innbetaling av fellesutgiftene som neste fem årene... må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R16",
            "description": "NYIDENTIFISERT – Yttertak ikke besiktiget: Tilstandsrapporten angir at yttertak kun besiktiges dersom stige på forhånd er reist og forsvarlig sikret, og den bygningssakkyndige anser det forsvarlig. Det er uklart om taket ble besiktiget, noe som innebærer usikkerhet om takens tilstand på en bygning fra 1953.",
            "evidence": [
              "Yttertak besiktiges når stige på forhånd er reist og forsvarlig sikret, og i tillegg den bygningssakkyndige på egen selvstendig vurdering anser den som forsvarlig å bruke. I andre tilfeller besiktiges yttertaket fra bakkenivå og inne fra loftet.",
              "Ferdigattest/brukstillatelse datert: 09.12.1953.",
              "Takkonstruksjon av saltaksform utvendig tekket med takstein (taket er ikke besiktiget)."
            ],
            "source_documents": [
              "d037_d037"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "Hva er konkret beløp for økning i felleskostnader etter ventilasjonspåkostning fra desember?",
          "Er det utstedt energiattest for Kjelsåsveien 10A?",
          "Hvilke TG 2 og TG 3 avvik er konkret registrert i tilstandsrapporten for Kjelsåsveien 10A?",
          "Er eiendomsskatten ilagt denne spesifikke andelen (andelsnr. 194)?",
          "Hva er nåværende felleskostnader per måned for andelen?",
          "Er det gjennomført hulltaking eller fuktmåling i boligen?",
          "Hva er status på skifte av røykdetektorer i borettslaget?"
        ],
        "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende radonmåling (0.95):** Godt støttet av både salgsoppgaven og egenerklæringsskjema (spørsmål 21). Confidence opprettholdes på 0.95.\n\n**R2 – Ventilasjonspåkostning øker felleskostnader (0.95):** Direkte bekreftet i egenerklæringen (spørsmål 26). Konkret beløp for økning mangler, men risikoen er klart dokumentert. Confidence opprettholdes på 0.95.\n\n**R3 – Rotteproblem (0.85):** Evidensen er klar – rotter er rapportert i borettslaget, men ikke i det aktuelle bygget. Risikoen er reell men noe begrenset av presiseringen om at det ikke gjelder Kjelsåsveien 10. Confidence justeres ned til 0.80.\n\n**R4 – Fellesgjeld og flytende rente (0.90):** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.90.\n\n**R5 – Reguleringsplan S-5142 (0.90):** Godt dokumentert. Confidence opprettholdes på 0.90.\n\n**R6 – Skjulte avløpsrør og manglende stakeluke (0.85):** Direkte bekreftet i tilstandsrapporten. Confidence opprettholdes på 0.85.\n\n**R7 – Primærkonstruksjoner med TG 2 pga. alder (0.85):** Godt støttet av dokumentene. Confidence opprettholdes på 0.85.\n\n**R8 – Begrenset adgang til utleie (0.80):** Godt dokumentert. Dette er imidlertid en generell borettslagsregel, ikke en spesifikk risiko ved denne boligen. Confidence opprettholdes på 0.80, men risikoen er mer av informativ karakter.\n\n**R9 – Forkjøpsrett kan forsinke overtakelse (0.80):** Godt dokumentert. Confidence opprettholdes på 0.80.\n\n**R10 – Bod på fellesareal (0.90):** Svært godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence justeres opp til 0.92.\n\n**R11 – Tekniske installasjoner ikke vurdert (0.80):** Godt dokumentert som metodebegrensning. Confidence opprettholdes på 0.80.\n\n**R12 – Eiendomsskatt (0.70):** Evidensen bekrefter at NOEN leiligheter er ilagt eiendomsskatt, men det er uklart om denne andelen er berørt. Usikkerheten er reell. Confidence justeres ned til 0.65 da det ikke er bekreftet at akkurat denne andelen er berørt.\n\n**R13 – Manglende energiattest (0.70):** Evidensen er kun en generell lovhenvisning om hva som skjer dersom energiattest mangler – det bekreftes ikke eksplisitt at energiattest faktisk mangler for denne boligen. Confidence justeres ned til 0.55.\n\n**R14 – Lav takhøyde på bad (0.65):** Takhøyden på 2,26 m er dokumentert. Imidlertid er bad ikke et varig oppholdsrom, og 2,26 m er ikke nødvendigvis under krav for bad. Risikoen er begrenset. Confidence justeres ned til 0.50.\n\n**Nye risikoer identifisert:**\n\n**R15 – Legalpant og prioritet ved mislighold:** Borettslaget har legalpant i andelen foran tinglyste lån. Dette er en reell risiko for kjøpers finansiering og er dokumentert i salgsoppgaven. Confidence: 0.75.\n\n**R16 – Yttertak ikke besiktiget:** Dokumentet angir eksplisitt at taket IKKE er besiktiget (\"taket er ikke besiktiget\"). For en bygning fra 1953 er dette en vesentlig risiko. Confidence: 0.85.\n"
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
    "input_tokens": 19007,
    "output_tokens": 5368,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
