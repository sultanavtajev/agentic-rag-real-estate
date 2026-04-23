# Trace: agentic_reflecting_iter1
- **Run ID:** 95690d8d-7c34-4be5-86f5-8c503274214e
- **Tidspunkt:** 2026-03-23T23:44:57.989817+00:00
- **Varighet:** 103.06s
- **Input tokens:** 21907
- **Output tokens:** 5768

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
Risiko 1: Manglende energiattest: Eiendommen er ikke energimerket. Kjøper kan kreve at selger bekoster energiattest innen ett år etter avtaleinngåelse.
  Confidence: 0.95
  Evidens: Eiendommen er ikke energimerket.; Det følger av forskrift om energimerking § 5 at dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har lagt frem energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning, innen ett år etter at avtale om salg er inngått.

Risiko 2: Manglende radonmåling: Selger har ikke utført radonmåling. Dette kan innebære en helserisiko for kjøper, særlig dersom boligen leies ut.
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling.; Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 3: Støyrisiko fra veitrafikk og jernbane: Eiendommen ligger i et område med krav om støyreduserende tiltak mot veitrafikk, og er i nærheten av jernbanespor.
  Confidence: 0.92
  Evidens: I henhold til reguleringsplan S-2999 er det krav om støyreduserende tiltak mot veitrafikk.; Eiendommen ligger også i nærheten av jernbanespor.; § 8. Støynivået fra veitrafikk må ikke overstige de krav som er stilt i Miljøverndepartementets rundskriv T-8/79 om veitrafikkstøy.

Risiko 4: Baderomsrisiko – oversteget forventet levetid og manglende dokumentasjon: Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år. Det foreligger heller ikke dokumentasjon på baderommets oppbygging og løsninger.
  Confidence: 0.95
  Evidens: Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år.; Det er heller ikke fremlagt dokumentasjon på baderommets oppbygging og løsninger.; Høydeforskjell mellom topp flis ved dør og overkant sluk tilfredsstiller ikke dagens krav.

Risiko 5: Kloakklukt på badet: Det har tidvis forekommet kloakklukt på badet. Dette kan indikere feil på avløpssystemet eller manglende lekkasjesikring.
  Confidence: 0.88
  Evidens: Det har tidvis forekommet lukt på badet, opplevd som kloakklukt. Lukten har vært sporadisk og ikke konstant.

Risiko 6: Manglende samsvarserklæring på elektrisk anlegg: Det foreligger ingen eller ikke fremlagt dokumentasjon/samsvarserklæring på det elektriske anlegget. Dette gjør det umulig å konstantere om det resterende elektriske ledningsnettet er i forskriftsmessig stand.
  Confidence: 0.93
  Evidens: Det foreligger ingen/ er ikke fremlagt dokumentasjon/ samsvarserklæring på det elektriske anlegget.; Mangelfull samsvarserklæring kan ha, da man ikke kan konstantere om det resterende elektriske ledningsnettet er...; Eksisterer det samsvarserklæring? Ukjent

Risiko 7: Eldre vannledninger – mer enn halvparten av forventet brukstid passert: Innvendige vannledninger har passert mer enn halvparten av forventet brukstid. Selv om det ikke er behov for umiddelbare utbedringstiltak, kan skader plutselig oppstå.
  Confidence: 0.9
  Evidens: Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.; Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.

Risiko 8: Fellesgjeld og risiko for økte felleskostnader: Borettslaget har fellesgjeld, og felleskostnadene kan øke som følge av rentejusteringer eller fremtidige vedtak i generalforsamlingen. Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter.
  Confidence: 0.92
  Evidens: Borettslaget har lån, og kostnadene knyttet til disse (renter og avdrag) kan endres ved rentejusteringer.; Størrelsen på felleskostnadene kan også påvirkes av fremtidige vedtak i generalforsamlingen.; Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 9: Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen, er gjennomføring av handelen betinget av at kreditorer gir nødvendig pantefrafall.
  Confidence: 0.85
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.; Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Risiko 10: Legalpant – borettslaget har prioritet foran tinglyste lån: Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som sikkerhet for felleskostnader. Dette betyr at borettslaget kan kreve inn penger før andre kreditorer.
  Confidence: 0.9
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 11: Ventilasjon – avvik registrert: Det er registrert avvik på ventilasjon. Anbefalt tiltak må avklares nærmere med styret i borettslaget, da montering av mekanisk avtrekk kan hindres av konstruksjonen.
  Confidence: 0.88
  Evidens: Tekniske installasjoner – Ventilasjon | Det er avvik.; Hindrer montering av mekanisk avtrekk fra rommet, vurderes tilstand ut fra synlige overflater samt alder/elde og slitasje, noe som medfører TG2 i henhold til NS3600.; Anbefalt tiltak må derfor avklares nærmere med styret i borettslag.

Risiko 12: Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2, som kan medføre restriksjoner på bruk eller utvikling av eiendommen.
  Confidence: 0.78
  Evidens: Eiendommen berøres av følgende hensynssoner: Hensynsone H190_2: Andre sikringssoner.

Risiko 13: Hensynssone H320_2 (Elveflom) og H390 (Deponi): Kartet viser at eiendommen kan berøres av hensynssoner for elveflom og deponi, noe som kan innebære risiko for flomskade eller forurensning i grunnen.
  Confidence: 0.75
  Evidens: H320_2 - Elveflom; H390 - Deponi

Risiko 14: Begrenset utleieadgang – krever styrets godkjenning: Bruksoverlating (utleie) av boligen krever styrets godkjenning, og andelseier må som hovedregel ha bodd i boligen i minst ett av de siste to årene. Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke.
  Confidence: 0.92
  Evidens: Bruksoverlating (utleie) av boligen krever styrets godkjenning.; Som hovedregel må andelseier ha bodd i boligen i minst ett av de siste to årene for å kunne leie ut.; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 15: Tilstandsrapport kun på nivå 1 – visuell befaring uten åpning av konstruksjoner: Rapporten er begrenset til visuell befaring, og skjulte feil og mangler kan forekomme utover det som er omtalt.
  Confidence: 0.88
  Evidens: Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner.; Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.

Risiko 16: Planlagte vedlikeholdskostnader i borettslaget: Generalforsamlingen i 2025 vedtok å innhente pristilbud for utbedring av porten i bakgården, og det er planlagt en rekke kontroller og vedlikeholdsoppgaver (kamerasjekk av avløpsrør, kontroll av heiser, rens av takrenner). Dette kan medføre økte felleskostnader.
  Confidence: 0.82
  Evidens: På generalforsamlingen i 2025 ble det vedtatt å innhente pristilbud for utbedring av porten i bakgården. Kostnaden for dette er planlagt inkludert i budsjettprosessen for 2026.; Generalforsamlingen i 2025 vedtok å innhente pristilbud for en rekke kontroller og vedlikeholdsoppgaver, som kamerasjekk av avløpsrør, kontroll av heiser og rens av takrenner.

Risiko 17: Privat stikkledning – vedlikeholdsansvar påhviler borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre fremtidige kostnader.
  Confidence: 0.8
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget.

Risiko 18: Adkomst via privat vei: Adkomst til eiendommen skjer via privat vei, noe som kan innebære usikkerhet rundt vedlikeholdsansvar og kostnader knyttet til veien.
  Confidence: 0.75
  Evidens: Adkomst til eiendommen skjer via privat vei.

Dokumentkontekst:
[d045_d045 | Side [1]]
gistrert på andelen.
Polisenummer fellesforsikring: 1442193
Info energiklasse Tinglyste heftelser Vei, vann og avløp
Husdyr: Det er tillatt med dyrehold i borettslaget, men
alle husdyr skal bære halsbånd med eiers navn på. Dyr Eiendommen er ikke energimerket. Det følger av forskrift Tinglyste heftelser og rettigheter: Følgende tinglyste Eiendommen er tilknyttet offentlig vann‑ og
som ikke er merket med eiers navn kan fjernes fra om energimerking § 5 at dersom eier ikke har lagt frem heftelser følger

---

[d045_d045 | Side [1]]
ved visning følger dette heller ikke med. Sameiebrøk: 500/ 48342 Korttidsutleie er tillatt i opptil 30 døgn per år uten
samtykke fra styret.
Regnskap/ budsjett/ kostnadsøkninger: Årsregnskapet Selger bærer risikoen for at kjøper kan få tinglyst skjøte
Regulering
for 2024 viser et overskudd på kr 3 055 371, mot et uten andre heftelser enn de som det er avtalt at følger
Radonmåling
underskudd på kr 1 710 140 i 2023. Overskuddet for 2024 Regulerings og arealplaner: Eiendommen er regulert til med i handelen.

---

[d045_d045 | Side [1]]
illatt. Det Vedlagt salgsoppgaven. I henhold til reguleringsplan S‑2999 er det krav om innfrielse av det underliggende kravet.
arrangeres dugnader på vår og høst. støyreduserende tiltak mot veitrafikk. Eiendommen ligger
også i nærheten av jernbanespor. Legalpant: Borettslaget har legalpant på inntil 2G som
Energimerke
Forretningsfører: Obos Eiendomsforvaltning AS Kopi av situasjonskart, målebrev, reguleringsplaner m/ sikkerhet for betaling av felleskostnader. Dette betyr at
Energikarakter: C bestemmelser

---

[d045_d045 | Side [1]]
gimerking § 5 at dersom eier ikke har lagt frem heftelser følger eiendommen ved salg, og ved inngivelse avløpssystem. Stikkledningene fra eiendommen og ut til
borettslaget. Husdyr skal holdes under kontroll ved hjelp energiattest, og eier etter skriftlig anmodning fra kjøper av bud vil disse være akseptert av budgiver/ kjøper: det kommunale nettet er private, og
av bånd, bur eller lignende, også ved lufting i bakgården. ikke har lagt frem energiattest før avtale om salg er vedlikeholdsansvaret for disse

---

[d045_d045 | Side [1]]
nergiattest før avtale om salg er vedlikeholdsansvaret for disse påhviler borettslaget.
Den som eier eller passer dyret er ansvarlig for skader og inngått, kan kjøper få laget en energiattest ved hjelp av 1999/ 12517‑1/ 105 11.03.1999 SEKSJONERING Adkomst til eiendommen skjer via privat vei.
ulemper dyret medfører for personer, andre dyr eller ekspert for selgers regning, innen ett år etter at avtale Opprettet seksjoner:
eiendom. om salg er inngått. SNR: 1
Utleie
Formål: Samleseksjon bolig
Forkjøpsrett:

---

[d045_d045 | Side [1]]
eres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
borettslaget sitter på fraflyttede og/ eller usolgte andeler, på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
må dekkes av de øvrige andelseierne. Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes

---

[d045_d045 | Side [1]]
tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AO

---

[d045_d045 | Side [1]]
eler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: AO 2
80
32205220
:ecnerefer
tnemucoD
81

## Side 42

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23

---

[d045_d045 | Side [1]]
risikoen og kostnadene
antatt fundamentert på fast grunn (fjell) eller faste mangelfull samsvarserklæring kan ha, da man ikke kan
Gjenstander som er nevnt i standardlisten, men som ikke komprimerte masser. Byggegrunnen er antatt å være Er alle elektriske arbeider/ anlegg i boligen utført av en konstantere om det resterende elektriske ledningsnettet
finnes på eiendommen, vil heller ikke følge med i salget. fast grunn eller faste komprimerte masser, men det er registrert elektroinstallasjonsvirksomhet? er

---

[d045_d045 | Side [1]]
år arealet måles tas det defineres som BRA selv om de er i strid med byggeforskriftene.
ikke hensyn til om arealet er lovlig oppført eller om bruken er Takstmannen har ikke undersøkt/vurdert regulering eller andre
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler. forhold i bygningsetaten, for øvrig ingen spesielle forhold
takstmannen ble gjort kjent med på befaringsdagen.
•Eiendommens markedsverdi kan ikke baseres på en rent
Ved evt. åpning av konstruksjoner kan feil og mangler

---

[d045_d045 | Side [1]]
som funksjonelt med dagens bruk, ha knyttet noen kommentarer til elanlegget ut i fra helt Borettslaget Dalehaugen 6 & 8 er et veletablert inntil tre år. Det er ingen forkjøpsrett for andelseierne i
men endret bruk med større fuktbelastning enn i dag kan enkle vurderingskriterier. Siden elanlegget ikke er borettslag bestående av 90 andelsleiligheter, beliggende borettslaget. Kun fysiske personer kan eie andeler, og
fremprovosere avvik og på den måten fremskynde kontrollert er det sannsynlig at det siden kan

---

[d045_d045 | Side [1]]
‑ Nei
ødeleggelser/ konsekvenser som innebærer kostnader til Ja. kjøkken. Er det tegn på at kabelinnføringer og hull i inntak og
utbedring. Kjøper må innta disse vurderingene og Det har tidvis forekommet lukt på badet, opplevd som sikringsskap ikke er tette, så langt dette er mulig å sjekke
medfølgende utbedringskostnader i sin kjøpsbeslutning, kloakklukt. Lukten har vært sporadisk og ikke konstant. Tekniske detaljer: uten å fjerne kapslinger?
jf. avhl. § 3‑10. Det samme gjelder eventuelt andre Oppvarming

---

[d045_d045 | Side [1]]
rings og arealplaner: Eiendommen er regulert til med i handelen. Gjennomføring av handelen er betinget
ble godkjent på generalforsamlingen 22. mai 2025. byggeområde for boliger i henhold til reguleringsplan av det ikke er tinglyst heftelser som ikke lar seg innfri/ Selger har ikke utført radonmåling. Det er ikke krav om
S‑2999, vedtatt 21.09.1988. Planen er helt eller delvis slette. dette med mindre boligen er helt eller delvis utleid.
Budsjettet for 2025 opererer med et forventet overskudd opphevet som

---

[d045_d045 | Side [1]]
å inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Kjøper og selger er forpliktet til å undertegne standard Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
kjøpekontrakt utarbeidet av Emera i

---

[d045_d045 | Side [1]]
r du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til

---

[d045_d045 | Side [1]]
 to eller flere bruksenheter eller Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
til bygningens forvaltning, drift eller vedlikehold. som for eksempel tak, yttervegger, grunnmur, drenering, og felles
tekniske installasjoner med mindre det foreligger et særlig
•Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 vedlikeholdsansvar knyttet til bygningsdelene.
(2012 og 2023) og veiledningen til disse.
På forespørsel har eier opplyst at de ikke er kjent med at boligen
har skjulte

---

[d045_d045 | Side [1]]
eid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller vedtatte

---

[d045_d045 | Side [1]]
sert på dokumentasjon BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor Stue og kjøkken: For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet
mottatt fra kontrollansvarlig når et søknadspliktig tiltak er boenheten og som tilhører denne, for eksempel eksterne Rommet utgjør leilighetens sosiale sone, med en åpen Byggemåte i salgsoppgaven.
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
‑ Nei
Interessenter oppfordres spesielt til å undersøke disse Kjenner du til om det er/ har vært feil tilknyttet

---

[d045_d045 | Side [1]]
ngstype: Strøm
Heis: Nei
Parkeringstype: Ingen ()
Systemlås: Nei Antall rom:
Husdyrhold: Oppr. antall rom: 1
Livsløp standard: Nei Kategori: Kategori 10
Fasiliteter:
Eierskiftegebyret faktureres til selger via megler. Faktura sendes når eierskiftet er registrert. Vennligst vent med betaling til denne er
mottatt, da KID nummer må oppgis ved betaling.
94 95

## Side 49

HUSORDENSREGLER
Vedtatt i generalforsamling 23. mai 2000
3. Bruk av fellesområder
Sist endret på generalforsamling 18.05.2021.
Det er

---

[d045_d045 | Side [1]]

Bygård oppført i 1999 med bærende konstruksjoner og opplyser at anlegget fungerer slik det skal, og at det ikke ‑ Ja Det foreligger ingen/ er ikke fremlagt
Innbo og løsøre: Salgsoppgaven inkluderer NEFs leilighetsskillende vegger i betong/ mur. Fasaden er forekommer at sikringer løser ut ‑ samt at varmekabler dokumentasjon/ samsvarserklæring på det elektriske
standardliste "Oversikt over løsøre og tilbehør", som pusset og malt. Etasjeskillere er i armerte fungerer tilfredstillende. Rapporten tar

---

[d045_d045 | Side [1]]
 skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀

---

[d045_d045 | Side [1]]
 opp baderommet. Flislagt gulv med gulvvarme.
Det er heller ikke fremlagt dokumentasjon på baderommets oppbygging og løsninger.
Rapporten tar utgangspunkt i gi琀琀e opplysninger, samt det som var synlig ved visuell inspeksjon på befaringsdagen. Høydeforskjell mellom topp 昀氀is ved dør og overkant sluk 琀椀lfredss琀椀ller ikke dagens krav.
Baderommets underliggende hovedkonstruksjoner har oversteget forventet leve琀椀d på 20 år.
Vurdering av avvik:
Leve琀椀d er beregnet ut fra Norsk Standard og Sintef sine

---

[d045_d045 | Side [1]]
varende vannledninger. Det er ikke behov for utbedringstiltak
av overdragelsen. Vinduer med trerammer og isolerglass. I 2025 ble kontrollinstanser med avvik som ikke er utbedret eller siden anlegget fungerer i dag, men ut ifra alder kan
vinduskarm malt. kontrollen er over 5 år? skader plutselig oppstå på eldre anlegg.
‑ Nei
Eiendommens
Dører: Forekommer det ofte at sikringene løses ut? ‑ Tekniske installasjoner ‑ Ventilasjon | Det er avvik:
Entrédøren er brann‑ og lydklassifisert (B30/ Db35). ‑ Nei

---

[d045_d045 | Side [1]]
på en rent
Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes
matematisk beregning i forhold til antall kvadratmeter opplyst i
også utover det som er omtalt i rapporten.
rapporten. Opplysninger om areal kan altså ikke alene benyttes
Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå
for beregning av eiendommens verdi.
1, dvs kun en visuell befaring , uten åpning av konstruksjoner.
Merk at dagens krav til isolering og tetthet mv er strengere enn da
•Rom som ligger utenfor

---

[d045_d045 | Side [1]]
mmer og isolerglass. Alder i seg selv er de昀椀nert som symptom på slitasje/u琀椀dsmessighet/svikt osv.
____ Det gjelder samtlige konstruksjoner, uanse琀琀 alder og 琀椀lstand.
Det betyr at en bygningsdel og konstruksjon kan få TG2 på bakgrunn av høy alder men fortsa琀琀 være i en brukbar 琀椀lstand og funksjon.
Vindusglass er hele og det ble ikke observert punkteringer på befarings琀椀dspunktet. Bygningsdelers og konstruksjoners alder er i hovedsak vurdert ut fra Sintef sine leve琀椀dstabeller.
Ved befaringen ble det

---

[d045_d045 | Side [1]]
 vei 6
0301 OSLO 0694 OSLO 0301 OSLO 0694 OSLO
Kilder og vedlegg Forutsetninger
Dokumenter Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
Beskrivelse Dato Kommentar Status Sider Vedlagt
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer enn
Egenerklæring U琀昀ylt av selger Gjennomgå琀琀 Nei •Rapporten baserer seg på krav i

---

[d045_d045 | Side [1]]
apporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte

---

[d045_d045 | Side [1]]
 byggverkets tekniske Bruksoverlating (utleie) av boligen krever styrets
moderniseres. Om det i tillegg er eldre slukløsning bør tilstand. Det er ikke foretatt kontroll av de elektriske Andelsnummer: 416 godkjenning. Som hovedregel må andelseier ha bodd i
det også påregnes å bytte dette. Det bemerkes at installasjonene (el‑takst) selv om bygningssakkyndig kan boligen i minst ett av de siste to årene for å kunne leie ut i
rommet oppfattes som funksjonelt med dagens bruk, ha knyttet noen kommentarer til

---

[d045_d045 | Side [1]]
gslova. eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
forbedret.
Det kan være avvik/skader som ikke er avdekket.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ Informasjon om utbedringskostnader Tiltak

---

[d045_d045 | Side [1]]
mannen 昀椀nner det relevant for leiligheten.
Se beskrivelse under konstruksjoner.
Generelt har alle bygninger (eldre og nyere) et frem琀椀dig, løpende behov for vedlikehold.
UTVENDIG
Setninger kan ha oppstå琀琀 og de琀琀e kan ha medført skjevheter i gulv og er derfor ikke unormalt.
Vinduer Komponenter der vedlikehold og oppgraderinger er et felles ansvar for bore琀琀slaget/sameiet er beskrevet men ikke nødvendigvis 琀椀lstandsvurdert.
Vinduer med trerammer og isolerglass. Alder i seg selv er de昀椀nert som symptom på

---

[d045_d045 | Side [1]]

•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
Hjemmelshaver(e), snr., eierbrøk, gnr., er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
Norges Eiendommer Gjennomgå琀琀 Nei
bnr., byggeår og tomtestørrelse eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten.

---

[d045_d045 | Side [1]]
 en rekke kontroller og vedlikeholdsoppgaver,
informasjon
dagens krav. Tilstandsgrad er i tillegg satt ut ifra alder på påvist tilfredsstillende løsning for å synliggjøre lekkasje som kamerasjekk av avløpsrør, kontroll av heiser og rens
underliggende konstruksjoner. Tiltak: Fallforholdene i fra innebygget sisterne. Ved implementering av av takrenner. Generalforsamlingen i 2025 vedtok å
Adresse
dusjsonen avviker fra dagens anbefalinger, med innebygget sisterne var det ikke krav om lekkasjesikring, innhente

---

[d045_d045 | Side [1]]
ekvirent plikter å lese gjennom rapporten for å avdekke
utforede kjellervegger og eventuelt i oppforede kjellergulv. Personvernerklæring - iVerdi evt. feilaktige opplysninger før bruk.
•Normal slitasjegrad: forventet slitasje av materiale i overflaten Rapporten/befaringen er avholdt etter beste skjønn og i henhold
som er basert på enkle visuelle observasjoner. Kan vurderes til gjeldende instruks og retningslinjer. Hjemmel er kontrollert utfra
sammen med bygningsdelens alder. "Norges Eiendommer".
Det

---

[d045_d045 | Side [1]]
lt, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
2 07.01.2026
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
3 09.01.2026 PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
For gyldighet på rapporten se forside brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel

---

[d045_d045 | Side [1]]
dert ut fra Sintef sine leve琀椀dstabeller.
Ved befaringen ble det foreta琀琀 s琀椀kkprøvekontroll på åpne- og lukkemekanismer av enkelte vinduer.
Ingen unormale avvik registrert se琀琀 ut fra bygningsdelenes alder.
INNVENDIG
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering av bygningsdelenes
stand, funksjonalitet samt alder.
____ Over昀氀ater
Det bør på generelt grunnlag påregnes at vinduer har behov for Gulv:
justering med jevne mellomrom. Flislagt gulv på bad.
Ellers parke琀琀.
Gulvvarme (kabler) på

---

[d045_d045 | Side [1]]
ilstandsanalysen utvides til også å
salgspriser mm. informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
Ikke enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
Megler Ikke oversendt - Megleropplysninger Nei sider ved boligen ut over det som fremgår av tilstandsgradene.
gjennomgå琀琀
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene

---

[d045_d045 | Side [1]]
onstruksjoner, som vann og avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon

---

[d045_d045 | Side [1]]
rom. Flislagt gulv på bad.
Ellers parke琀琀.
Gulvvarme (kabler) på bad.
____
Dører
Vegger:
Brann- og lydklassi昀椀sert entrédør (B30/Db35). Flissa琀琀e vegger på bad.
Ellers gla琀琀e, malte vegg昀氀ater.
____ ____
Normal og forventet bruksslitasje, se琀琀 ut fra bygningsdelenes alder. Himlinger:
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering av bygningsdelenes stand, funksjonalitet samt alder. Pulverlakkerte metallplater på bad.
Ellers ga琀琀e, malte himlings昀氀ater (plater og betonghimling).
PS: På

---

[d045_d045 | Side [1]]
ellesgjeld)
Omkostninger Felleskostnadene inkluderer blant annet borettslagets
545,00 (Tinglysingsgebyr ‑ hjemmel) drifts‑ og vedlikeholdskostnader, kommunale avgifter,
545,00 (Tinglysningsgebyr ‑ pantedokument) bygningsforsikring, og TV/ bredbånd.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
1 090,00 (Omkostninger totalt (uten Borettslaget har lån, og kostnadene knyttet til disse
Boligkjøperforsikring)) (renter og avdrag) kan endres ved rentejusteringer.
Størrelsen på felleskostnadene kan også

---

[d045_d045 | Side [1]]
‑‑
3 693 229,00 (Pris inkl. fellesgjeld)
Estimert totalpris ink. omk
Omkostninger Kr 3 694 319
545,00 (Tinglysingsgebyr ‑ hjemmel)
Felleskostnader
545,00 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Felleskostnader kr 2 212,‑ pr. mnd
1 090,00 (Omkostninger totalt)
Felleskostnader inkulderer: Totale felleskostnader per
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ måned: kr 2 212,‑
3 694 319,00 (Totalpris inkl. omkostninger)
Felleskostnadene er

---

[d045_d045 | Side [1]]
v felleskostnader. Dette betyr at
Energikarakter: C bestemmelser etc. ligger vedlagt i salgsoppgaven eller borettslaget har prioritet over tinglyste lån når det gjelder
Borettslagets forsikringsselskap: Protector Forsikring Asa kan fås ved henvendelse til megler. Vi oppfordrer betaling av felleskostnader, og kan kreve inn pengene før
Energifarge: Lys grønn interessenter til å gjøre seg kjent med disse. andre kreditorer, selv om de har lån registrert på andelen.
Polisenummer fellesforsikring: 1442193
Info

---

[d045_d045 | Side [1]]
es ved rentejusteringer.
Størrelsen på felleskostnadene kan også påvirkes av
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ fremtidige vedtak i generalforsamlingen.
3 694 319,00 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring))
Eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ I Oslo kommune er det eiendomsskatt på boliger og fast
33

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
eiendom som overstiger en fastsatt verdi. Informasjonen Lånenummer 94927023894: Det er

---

[d045_d045 | Side [1]]
ebærer at borettslaget eier
pristilbud for utbedring av porten i bakgården. Kostnaden er i planen avsatt til bebyggelse og anlegg salgssummen, er det en forutsetning for at handel skal eiendommen, mens andelseierne eier andeler i
for dette er planlagt inkludert i budsjettprosessen for (eksisterende). kunne gjennomføres at kreditorene gir nødvendig borettslaget, som gir borett til en bestemt bolig.
2026. Kommunedelplan: KDP‑17 ‑ Kommunedelplan for torg og pantefrafall. Dersom pantefrafall ikke oppnås vil

---

[d045_d045 | Side [1]]
jettet for 2025 opererer med et forventet overskudd opphevet som følge av Kommuneplan 2015.
på kr 1 429 332. Dersom eiendommen skulle bli overbeheftet i
Diverse
Kommuneplan: Kommuneplan 2015 ‑ Oslo mot 2030: salgsprosessen, det vil si at summen av fremtidige
På generalforsamlingen i 2025 ble det vedtatt å innhente Smart, trygg og grønn, vedtatt 23.09.2015. Eiendommen tinglyste heftelser overstiger den forventede Borettslagsmodellen innebærer at borettslaget eier
pristilbud for utbedring av porten i

---

[d045_d045 | Side [1]]
g

## Side 17

OM EIENDOMMEN
DALEHAUGEN 8
OM EIENDOMMEN
9 300,00 (Boligkjøperforsikring* (valgfritt))
Økonomi
10 390,00 (Omkostninger totalt (med
Boligkjøperforsikring))
Prisantydning
3 703 619,00 (Totalpris inkl. omkostninger (med
Kr 3 650 000 Boligkjøperforsikring))
Omkostninger kjøpers beløp
Eierskiftegebyr
3 650 000,00 (Prisantydning)
43 229,00 (Andel av fellesgjeld) Kr 6725
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
3 693 229,00 (Pris inkl. fellesgjeld)
Estimert totalpris ink.

---

[d045_d045 | Side [1]]
 7 074 14 148
Boligselskapets pantesikrede gjeld 62 921 931
14 6 858 96 012
Bokført verdi av pantsatt eiendom 93 314 138
1 5 484 5 484
16 4 100 65 600
Borettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet er en del av borettslagets pantsikrede gjeld.
Individuell nedbetaling av fellesgjeld
Individuell nedbetaling av fellesgjeld (IN) er behandlet etter gjeldsmetodeløsningen. Ekstrainnbetalinger fra eiere klassifiseres som
forskuddsbetaling av eiers kapitalkostnader, og står i balansen under

---

[d045_d045 | Side [1]]
 6 8 Noter årsregnskap 2024 Borettslaget Dalehaugen 6 8
Note 1 - Innkrevde felleskostnader Note 4 - Varige driftsmidler
2024 2023 Bygninger TomterBygningsmessig Teknisk alegg Redskapsbod Nøkkelsystem
anlegg
3600 Innkrevde felleskostn. drift 2 597 364 2 478 552
Anskaffelseskost pr.01.01 : 87 258 350 6 000 000 55 788 172 206 55 592 126 204
3601 Vedlikeholdsfond 470 040 440 052
Årets tilgang : 0 0 0 0 0 0
3602 Innkrevde felleskostn. kapital 322 368 322 368
Årets avgang : 0 0 0 0 0 0
3609 Leie parkering 558

---

[d045_d045 | Side [1]]
. Skade på bygning dekkes av boligselskapets bygningsforsikring. Ved skadesaker 24. Godkjennelse av nye eiere
skal henvendelse gjøres til styret med informasjon om årsak til skade. 25. Administrasjon av Borettslagets Facebook side
26. Vedlikehold og oppdatering av Borettslagets hjemmeside
27. Høst og vårdugnad
28. Foretatt rens av takrenner - noe jobb gjenstår her
Privat innbo/eiendeler må forsikres ved egen polise. Denne vil i tillegg dekke merkostnader 29. Diverse innkjøp
hvis en leilighet blir ubeboelig

---

[d045_d045 | Side [1]]
er • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
erfaringstall, og må ikke forveksles med konkrete pris琀椀lbud fra Tiltak mellom kr 200 000 – 500 000
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet

---

[d045_d045 | Side [1]]
an for torg og pantefrafall. Dersom pantefrafall ikke oppnås vil handel Andelseierne har ikke personlig ansvar for borettslagets
møteplasser, vedtatt 22.04.2009. ikke kunne gjennomføres. Skulle det bli tinglyst flere fellesgjeld, men de må dekke borettslagets løpende
utleggspant på eiendommen, kan handel bare utgifter. Manglende innbetaling av fellesutgiftene som
42 43

## Side 23

OM EIENDOMMEN OM EIENDOMMEN
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/

---

[d045_d045 | Side [1]]
4 319,‑ Borettslag Som eiendomsmegler er jeg opptatt av å levere det lille
ekstra – hver eneste gang. Enten du skal selge eller
FELLESKOSTNADER ANTALL SOVEROM kjøpe bolig, strekker jeg meg alltid litt lenger for at du
2 212,‑ pr. mnd 0
skal føle deg trygg og godt ivaretatt gjennom hele
prosessen. Jeg kombinerer solid faglig kompetanse
FELLESGJELD ETASJE
Kr 43 229,‑ 4
FELLESFORMUE BYGGEÅR
16 060,‑ 1999
6 7

## Side 5

BESKRIVELSE
Arealeffektiv og stilig 1‑roms
med sovealkove | Perfekt
førstegangskjøp | Heis

---

[d045_d045 | Side [1]]
t ved forfall, svarer andelseieren den til en hver
tid gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
5-2 Borettslagets vedlikeholdsplikt
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt
plikten ikke ligger på andelseierne. Vedlikeholdsplikten omfatter også utvendig vedlikehold 6-3 Borettslagets pantesikkerhet
av vinduer. For krav på dekning av felleskostnader og andre krav fra lagsforholdet har borettslaget en
lovbestemt panterett i andelen

---

[d045_d045 | Side [1]]
 4 av 22
112 113

## Side 58

Resultatregnskap 2024 Borettslaget Dalehaugen 6 8 Balanse 2024 Borettslaget Dalehaugen 6 8
Note Regnskap Regnskap Budsjett Budsjett Note 2024 2023
2024 2023 2024 2025
INNTEKT EIENDELER
Leieinntekt Anleggsmidler
Innkrevd felleskostnad 1 6 503 584 6 188 856 6 478 000 6 988 880
Sum leieinntekt 6 503 584 6 188 856 6 478 000 6 988 880
Andre inntekter Varige driftsmidler
Diverse inntekt 2 2 700 29 678 2 000 101 000 Tomter 4 6 000 000 6 000 000
Sum annen inntekt 2 700 29 678 2 000

---

[d045_d045 | Side [1]]
r en IN‑ordning (individuell nedbetaling av
hindrer montering av mekanisk avtrekk fra rommet, vurderes tilstand ut fra synlige overflater samt alder/ elde i boliger og fritidsboliger. Alle boliger skal ha periodisk fellesgjeld) på ett av lånene. Dette gir andelseiere
anbefalt tiltak må derfor avklares nærmere med styret i og slitasje, noe som medfører TG2 i henhold til NS3600. kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres mulighet til å nedbetale sin andel av dette lånet to ganger
borettslag/

---

[d045_d045 | Side [1]]

3 694 319,00 (Totalpris inkl. omkostninger)
Felleskostnadene er fordelt slik:
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Felleskostnader: kr 1 391,‑
‑ Lån varmtvannsberedere: kr 302,‑
3 650 000,00 (Prisantydning) ‑ Avsetning vedlikehold: kr 261,‑
43 229,00 (Andel av fellesgjeld) ‑ Renter felleslån: kr 174,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Avdrag felleslån: kr 84,‑
3 693 229,00 (Pris inkl. fellesgjeld)
Omkostninger Felleskostnadene inkluderer blant annet

---

[d045_d045 | Side [1]]
å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
Borettslaget har legalpanterett i andelen for krav på Regelverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover,

---

[d045_d045 | Side [1]]
14783 - 71 ) 302
§ 7. Dalehaugen kan først opparbeides i henhold til reguleringen når Galgebergforbindelsen er ferdigstilt.
Selger forplikter for felleskostnader i overtakelsesmåneden, unntatt ved overtakelse den 1. i måneden. Vi forutsetter at kjøper og selger
§ 8. Støynivået fra veitrafikk må ikke overstige de krav som er stilt i Miljøverndepartementets rundskriv T-8/79 gjør opp seg imellom for oppgjørsmåneden
om veitrafikkstøy. Plan for støybeskyttelsestiltak må foreligge samtidig med byggemelding.
Hvis

---

[d045_d045 | Side [1]]
40823MVA
0102Oslo
H320_2 - Elveflom
H390 - Deponi
90 91

## Side 47

S-2999
Boligopplysninger:
Saksbehandler: Robot Hårfagre Dato utkjørt: 05.01.26 Side 1 av 3
REGULERINGSBESTEMMELSER i tilknytning til endret reguleringsplan for felt J - Vålerenga. Borettslaget Dalehaugen 6 & 8 Vår ref.: 2158/416 Fødselsdato eier: 27.09.1994
Dalehaugen 8 Type: Borettslag frittstående
§ 1. Det regulerte område er på planen vist med reguleringsgrense.
0657 OSLO Eiere: Adele Olsen
§ 2. Område reguleres til:
- byggeområde for

---

[d045_d045 | Side [1]]
d av svalgang er den enkelte
40 41

## Side 22

OM EIENDOMMEN OM EIENDOMMEN
beboers ansvar. Borettslaget har garasjeplasser, men Eiendommen berøres av følgende hensynssoner: gjennomføres forutsatt at også eventuelle fremtidige
Vedtekter/ husordensregler
utover disse er det kun tillatt med av‑ og pålessing på ‑ Hensynsone H190_2: Andre sikringssoner kreditorer aksepterer å slette sitt pant uten å få full
området. Parkering i bakgården er ikke tillatt. Det Vedlagt salgsoppgaven. I henhold til reguleringsplan

---

[d045_d045 | Side [1]]

0
3
Jernbane (tunnel), fremtidig LNF-areal, eksisterende Endret reguleringsplan med reguleringsbestemmelser for felt J Vålere2n0ga - som omreg-
ot
m
Jernbane (tunnel), eksisterende LNF-areal, fremtidig uleresfratomtforbygningermedallmennyttigformåltilbyggeo
O
m slroådeforboligerogof-
-
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende fentligtra昀椀kkområde. 1 5
0
2
n
Turvei Spredt boligbebyggelse, fremtidig pla
ne
u
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende

---

[d045_d045 | Side [1]]
varig opphold
Tomten er delvis eiet av eierseksjonssameiet og to næringsseksjoner.
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei Bakgården er pent opparbeidet med grøntarealer, si琀琀egrupper og steinlagte områder.
Parkering kan leies av bore琀琀slaget.
Gateparkering e琀琀er områdets gjeldende regler.
Boligen ligger i et område som omfa琀琀es av ordningen "beboerparkering".
For mer info om beboerparkeringsordningen, se:

---

[d045_d045 | Side [1]]
https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 151194/86524353
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
89

## Side 46

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg,

---

[d045_d045 | Side [1]]
 Eiere: Adele Olsen
§ 2. Område reguleres til:
- byggeområde for boliger
Organisasjonsnr: 880 939 882 Andelsnr: 416
- offentlig trafikkområde gangvei
1: Felleskostnader
§ 3. I bebyggelse mot St. Halvards gate og Enebakkveien skal det innpasses forretning i 1. etasje. 2. etasje mot
St. Halvards gate kan nyttes til kontorer. 1. etasje i hjørnebygget mot Etterstadgata og Dalehaugen kan det Tot. innev. måned: 2 212
innpasses forretning. Boligselskap er tilknyttet sikringsordning
Felleskostnader: Avdrag

---

[d045_d045 | Side [1]]
 Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 151194/ 86524353 Deres ref.:
Høydereferanser Adresse: Dalehaugen 8
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 232/459
87

## Side 45

TEGNFORKLARING - REGULERING (for gjeldende

---

[d045_d045 | Side [1]]
lan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 02.01.2026 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17, KDP-18 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet.

---

[d045_d045 | Side [1]]
henhold 琀椀l praksis og krav på bygge琀椀d.
Dreneringens leve琀椀d er avhengig av u琀昀ørelse, belastning (bygningens beliggenhet) og fyllmasser rundt dreneringen.
Bygningen stod ferdig i 1999 og er oppført e琀琀er bygge琀椀dens byggeforskri昀琀er.
Byggeår Kommentar Den 琀椀lfredss琀椀ller ikke nødvendigvis alle de krav som dagens byggeforskri昀琀er s琀椀ller 琀椀l bl.a. te琀琀het, ven琀椀lasjon og varmeisolering.
1999 I昀氀g. Norges Eiendommer. Rapporten begrenser seg 琀椀l boligen/leiligheten og det som normalt vil omfa琀琀es av eiers

---

[d045_d045 | Side [1]]
 gjelder for ___
det aktuelle Gnr/Bnr.
Adresse Det føres løpende vedlikehold og oppgraderinger e琀琀er behov og vedtak.
Dalehaugen 8 For oversikt over u琀昀ørte arbeider henvises det 琀椀l sameiets styre samt sameiets årsmelding
Hjemmelshaver
Kommentar
Bolignummer (SSB) : H0406
Regulering : Området er regulert 琀椀l boligformål
Adkomst vei : O昀昀entlig, interne gang- og s琀椀kkveier.
Tilknytning vann : O昀昀entlig
Tilknytning avløp : O昀昀entlig
Andelsobjekt
Boligselskap Org.nr. Leil. nr. Forretningsfører Eier av

---

[d045_d045 | Side [1]]
 og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra ikke‑forbrukere, selv om budet er lavere selgers ansvar er begrenset til det som følger direkte av
salgsoppgaven er basert på selgers informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
fagkyndig vurdering,

---

[d045_d045 | Side [1]]
. avhendingsloven § 3‑9. I disse tilfellene
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
Forsikring
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud

---

[d045_d045 | Side [1]]
ntene, understrekes at selger står fritt til å velge hvilket bud som
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes av
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig

---

[d045_d045 | Side [1]]
av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som egenandel).
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
selger. av om kjøper er forbrukerkjøper

---

[d045_d045 | Side [1]]
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

[d045_d045 | Side [1]]
n, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til budkjema, og budskjema finnes også i salgsoppgaven.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres Alle bud skal inngi skriftlig til eiendomsmegler. Kravet til
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses

---

[d045_d045 | Side [1]]
an ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og

---

[d045_d045 | Side [1]]
 I 琀椀llegg er det ikke uvanlig med noe oppsprekking i hjørner og plateskjøter, som følge av
forandringer i trevirke ut fra års琀椀d, vær o.l.
En bolig som har bli琀琀 brukt i en viss 琀椀d, har vanligvis bli琀琀 utsa琀琀 for slitasje, og skader kan ha oppstå琀琀. Slik bruksslitasje må man påregne, og det kan
avdekkes enkelte forhold e琀琀er overtakelse som nødvendiggjør utbedringer.
Andre utvendige forhold Normal slitasje og skader som nødvendiggjør utbedring, er innenfor hva kjøper må forvente og vil ikke utgjøre en

---

[d045_d045 | Side [1]]
geiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har

---

[d045_d045 | Side [1]]
læringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen.
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
inngis. mangel ved boligen. Dette gjelder uavhengig av om som handler hovedsakelig som ledd i
Budgivning
dokumentene er lest. næringsvirksomhet. Det vil opplyses hvis

---

[d045_d045 | Side [1]]
ed forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold. POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er E-POST: E-POST:
Dersom det er viktig for

---

[d045_d045 | Side [1]]
(fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AO 3
32205220
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er

---

[d045_d045 | Side [1]]
etter 1.1.1999?
Flatt tak, antatt tekket med papp/ membran. ‑ Ja Eksisterer det samsvarserklæring? Ukjent ‑ Tekniske installasjoner ‑ Vannledninger | Mer enn
Kjøper aksepterer at det kan forekomme hull og merker Foreligger det kontrollrapport fra offentlig myndighet – halvparten av forventet brukstid er passert på innvendige
etter montering av inventar og utstyr som ikke er en del Vinduer: Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende vannledninger. Det er ikke behov for utbedringstiltak
av

---

[d045_d045 | Side [1]]
oppgitt og faktisk innvendig
kjøpekontrakt utarbeidet av Emera i forbindelse med innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
hos eiendomsmegler før bud inngis. Kontakt

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende energiattest: Eiendommen er ikke energimerket. Kjøper kan kreve at selger bekoster energiattest innen ett år etter avtaleinngåelse.",
      "evidence": [
        "Eiendommen er ikke energimerket.",
        "Det følger av forskrift om energimerking § 5 at dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har lagt frem energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning, innen ett år etter at avtale om salg er inngått.",
        "Energikarakter: C – Energifarge: Lys grønn (dette gjelder borettslaget/bygget, ikke den individuelle leiligheten)"
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R2",
      "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Dette kan innebære en helserisiko for kjøper, særlig dersom boligen leies ut.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R3",
      "description": "Støyrisiko fra veitrafikk og jernbane: Eiendommen ligger i et område med krav om støyreduserende tiltak mot veitrafikk, og er i nærheten av jernbanespor.",
      "evidence": [
        "I henhold til reguleringsplan S-2999 er det krav om støyreduserende tiltak mot veitrafikk.",
        "Eiendommen ligger også i nærheten av jernbanespor.",
        "§ 8. Støynivået fra veitrafikk må ikke overstige de krav som er stilt i Miljøverndepartementets rundskriv T-8/79 om veitrafikkstøy."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R4",
      "description": "Baderomsrisiko – oversteget forventet levetid og manglende dokumentasjon: Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år. Det foreligger heller ikke dokumentasjon på baderommets oppbygging og løsninger.",
      "evidence": [
        "Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år.",
        "Det er heller ikke fremlagt dokumentasjon på baderommets oppbygging og løsninger.",
        "Høydeforskjell mellom topp flis ved dør og overkant sluk tilfredsstiller ikke dagens krav."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Kloakklukt på badet: Det har tidvis forekommet kloakklukt på badet. Dette kan indikere feil på avløpssystemet eller manglende lekkasjesikring.",
      "evidence": [
        "Det har tidvis forekommet lukt på badet, opplevd som kloakklukt. Lukten har vært sporadisk og ikke konstant."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Manglende samsvarserklæring på elektrisk anlegg: Det foreligger ingen eller ikke fremlagt dokumentasjon/samsvarserklæring på det elektriske anlegget. Dette gjør det umulig å konstatere om det resterende elektriske ledningsnettet er i forskriftsmessig stand.",
      "evidence": [
        "Det foreligger ingen/ er ikke fremlagt dokumentasjon/ samsvarserklæring på det elektriske anlegget.",
        "Mangelfull samsvarserklæring kan ha, da man ikke kan konstantere om det resterende elektriske ledningsnettet er...",
        "Eksisterer det samsvarserklæring? Ukjent"
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Eldre vannledninger – mer enn halvparten av forventet brukstid passert: Innvendige vannledninger har passert mer enn halvparten av forventet brukstid. Selv om det ikke er behov for umiddelbare utbedringstiltak, kan skader plutselig oppstå.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
        "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Fellesgjeld og risiko for økte felleskostnader: Borettslaget har fellesgjeld, og felleskostnadene kan øke som følge av rentejusteringer eller fremtidige vedtak i generalforsamlingen. Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter.",
      "evidence": [
        "Borettslaget har lån, og kostnadene knyttet til disse (renter og avdrag) kan endres ved rentejusteringer.",
        "Størrelsen på felleskostnadene kan også påvirkes av fremtidige vedtak i generalforsamlingen.",
        "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Andel av fellesgjeld: kr 43 229"
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R9",
      "description": "Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen, er gjennomføring av handelen betinget av at kreditorer gir nødvendig pantefrafall.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
        "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Legalpant – borettslaget har prioritet foran tinglyste lån: Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som sikkerhet for felleskostnader. Dette betyr at borettslaget kan kreve inn penger før andre kreditorer.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Ventilasjon – avvik registrert: Det er registrert avvik på ventilasjon. Anbefalt tiltak må avklares nærmere med styret i borettslaget, da montering av mekanisk avtrekk kan hindres av konstruksjonen.",
      "evidence": [
        "Tekniske installasjoner – Ventilasjon | Det er avvik.",
        "Hindrer montering av mekanisk avtrekk fra rommet, vurderes tilstand ut fra synlige overflater samt alder/elde og slitasje, noe som medfører TG2 i henhold til NS3600.",
        "Anbefalt tiltak må derfor avklares nærmere med styret i borettslag."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2, som kan medføre restriksjoner på bruk eller utvikling av eiendommen.",
      "evidence": [
        "Eiendommen berøres av følgende hensynssoner: Hensynsone H190_2: Andre sikringssoner."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R13",
      "description": "Hensynssone H320_2 (Elveflom) og H390 (Deponi): Kartet viser at eiendommen kan berøres av hensynssoner for elveflom og deponi, noe som kan innebære risiko for flomskade eller forurensning i grunnen.",
      "evidence": [
        "H320_2 - Elveflom",
        "H390 - Deponi"
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R14",
      "description": "Begrenset utleieadgang – krever styrets godkjenning: Bruksoverlating (utleie) av boligen krever styrets godkjenning, og andelseier må som hovedregel ha bodd i boligen i minst ett av de siste to årene. Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke.",
      "evidence": [
        "Bruksoverlating (utleie) av boligen krever styrets godkjenning.",
        "Som hovedregel må andelseier ha bodd i boligen i minst ett av de siste to årene for å kunne leie ut.",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R15",
      "description": "Tilstandsrapport kun på nivå 1 – visuell befaring uten åpning av konstruksjoner: Rapporten er begrenset til visuell befaring, og skjulte feil og mangler kan forekomme utover det som er omtalt.",
      "evidence": [
        "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner.",
        "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R16",
      "description": "Planlagte vedlikeholdskostnader i borettslaget: Generalforsamlingen i 2025 vedtok å innhente pristilbud for utbedring av porten i bakgården, og det er planlagt en rekke kontroller og vedlikeholdsoppgaver (kamerasjekk av avløpsrør, kontroll av heiser, rens av takrenner). Dette kan medføre økte felleskostnader.",
      "evidence": [
        "På generalforsamlingen i 2025 ble det vedtatt å innhente pristilbud for utbedring av porten i bakgården. Kostnaden for dette er planlagt inkludert i budsjettprosessen for 2026.",
        "Generalforsamlingen i 2025 vedtok å innhente pristilbud for en rekke kontroller og vedlikeholdsoppgaver, som kamerasjekk av avløpsrør, kontroll av heiser og rens av takrenner."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17",
      "description": "Privat stikkledning – vedlikeholdsansvar påhviler borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre fremtidige kostnader.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R18",
      "description": "Adkomst via privat vei: Adkomst til eiendommen skjer via privat vei, noe som kan innebære usikkerhet rundt vedlikeholdsansvar og kostnader knyttet til veien.",
      "evidence": [
        "Adkomst til eiendommen skjer via privat vei."
      ],
      "source_documents": [
        "d045_d045"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    }
  ],
  "re_retrieval_queries": [
    "Hva er innholdet i hensynssone H190_2 og hvilke konkrete restriksjoner medfører den?",
    "Er det gjennomført tiltak for støyreduksjon i bygget, og hva er faktisk støynivå?",
    "Hva er borettslagets totale gjeld og lånevilkår, herunder rentebetingelser og løpetid?",
    "Foreligger det vedtak om større rehabiliteringsprosjekter i borettslaget utover det som er nevnt?",
    "Hva er adkomstveiens vedlikeholdsavtale og hvem er ansvarlig for kostnader?",
    "Er det gjennomført el-kontroll (DLE) og hva viste eventuell kontroll?",
    "Hva er status på flatt tak – alder, tilstand og forventet levetid?",
    "Hva innebærer H320_2 Elveflom og H390 Deponi konkret for denne eiendommen?"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende energiattest (justert ned fra 0.95 til 0.80):**\nDokumentet viser at bygget faktisk HAR energikarakter C / lys grønn, men dette gjelder trolig bygget/borettslaget som helhet. For den individuelle andelen er det oppgitt at eiendommen ikke er energimerket. Dette skaper en viss tvetydighet. Risikoen er reell, men noe uklar – confidence justeres ned til 0.80.\n\n**R2 – Manglende radonmåling (beholdes 0.90):**\nGodt dokumentert. Selger bekrefter ingen radonmåling er utført. Risikoen er særlig relevant ved utleie.\n\n**R3 – Støyrisiko (beholdes 0.92):**\nGodt dokumentert med reguleringsbestemmelse § 8 og jernbanespor i nærheten. Ingen informasjon om faktisk gjennomførte støytiltak, noe som øker usikkerheten.\n\n**R4 – Baderomsrisiko (beholdes 0.95):**\nSvært godt dokumentert med tre separate funn: oversteget levetid, manglende dokumentasjon og avvik på slukfall.\n\n**R5 – Kloakklukt (beholdes 0.88):**\nDokumentert i egenerklæring. Sporadisk natur reduserer alvorlighetsgraden noe, men risikoen er reell.\n\n**R6 – Manglende samsvarserklæring el-anlegg (beholdes 0.93):**\nGodt dokumentert. Ukjent status på samsvarserklæring er en klar risiko.\n\n**R7 – Eldre vannledninger (beholdes 0.90):**\nGodt dokumentert med TG2-vurdering og klar beskrivelse av risiko.\n\n**R8 – Fellesgjeld og økte felleskostnader (beholdes 0.92):**\nGodt dokumentert. Andel fellesgjeld er kr 43 229, og total borettslagsgjeld er betydelig (62,9 mill). Risikoen for økte kostnader er reell.\n\n**R9 – Overbeheftelse (beholdes 0.85):**\nDokumentert som standardklausul i salgsoppgaven. Risikoen er generell men reell.\n\n**R10 – Legalpant (beholdes 0.92):**\nSvært godt dokumentert med to separate tekstpassasjer som bekrefter legalpant på inntil 2G.\n\n**R11 – Ventilasjon avvik (beholdes 0.88):**\nGodt dokumentert med TG2 og anbefaling om avklaring med styret.\n\n**R12 – Hensynssone H190_2 (justert ned fra 0.78 til 0.65):**\nKun nevnt som faktum uten nærmere beskrivelse av konsekvenser. Mangler informasjon om hva \"Andre sikringssoner\" konkret innebærer for denne eiendommen. Confidence justeres ned.\n\n**R13 – H320_2 Elveflom og H390 Deponi (justert opp fra 0.75 til 0.70):**\nNevnt på kart, men ingen ytterligere kontekst om konsekvenser for eiendommen. Confidence holdes moderat.\n\n**R14 – Begrenset utleieadgang (beholdes 0.92):**\nSvært godt dokumentert med tre separate bestemmelser.\n\n**R15 – Tilstandsrapport nivå 1 (beholdes 0.88):**\nGodt dokumentert. Viktig generell risiko for kjøper.\n\n**R16 – Planlagte vedlikeholdskostnader (beholdes 0.82):**\nGodt dokumentert med konkrete vedtak fra generalforsamling 2025.\n\n**R17 – Privat stikkledning (beholdes 0.80):**\nDokumentert, men konsekvensene er indirekte for kjøper (gjelder borettslaget).\n\n**R18 – Adkomst via privat vei (justert ned fra 0.75 til 0.65):**\nKun én setning i dokumentet. Ingen informasjon om vedlikeholdsavtale eller kostnadsfordeling. Confidence justeres ned.\n\n**Manglende risikoer som bør vurderes:**\n1. Flatt tak – bygget fra 1999 med antatt papptekning. Alder og tilstand er ikke nærmere vurdert i de tilgjengelige fragmentene.\n2. El-kontroll (DLE) – det er ikke fremlagt kontrollrapport fra DLE, noe som forsterker R6.\n3. Eiendomsskatt i Oslo – nevnt i dokumentet, men ikke identifisert som risiko.\n4. Kun én andelseier kan eie andelen (kun fysiske personer) – begrensning for investorer.\n5. Borettslagets totale gjeld på ca. 62,9 mill. kr er betydelig og bør vurderes nærmere.\n"
}

## Raw Response
```json
{
  "id": "msg_01Hk8e1xAu52bUVrtkRFZ1AG",
  "container": null,
  "content": [
    {
      "id": "toolu_01YQ23qopoMtBzyHvzQwNYvt",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende energiattest: Eiendommen er ikke energimerket. Kjøper kan kreve at selger bekoster energiattest innen ett år etter avtaleinngåelse.",
            "evidence": [
              "Eiendommen er ikke energimerket.",
              "Det følger av forskrift om energimerking § 5 at dersom eier ikke har lagt frem energiattest, og eier etter skriftlig anmodning fra kjøper ikke har lagt frem energiattest før avtale om salg er inngått, kan kjøper få laget en energiattest ved hjelp av ekspert for selgers regning, innen ett år etter at avtale om salg er inngått.",
              "Energikarakter: C – Energifarge: Lys grønn (dette gjelder borettslaget/bygget, ikke den individuelle leiligheten)"
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R2",
            "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Dette kan innebære en helserisiko for kjøper, særlig dersom boligen leies ut.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R3",
            "description": "Støyrisiko fra veitrafikk og jernbane: Eiendommen ligger i et område med krav om støyreduserende tiltak mot veitrafikk, og er i nærheten av jernbanespor.",
            "evidence": [
              "I henhold til reguleringsplan S-2999 er det krav om støyreduserende tiltak mot veitrafikk.",
              "Eiendommen ligger også i nærheten av jernbanespor.",
              "§ 8. Støynivået fra veitrafikk må ikke overstige de krav som er stilt i Miljøverndepartementets rundskriv T-8/79 om veitrafikkstøy."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R4",
            "description": "Baderomsrisiko – oversteget forventet levetid og manglende dokumentasjon: Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år. Det foreligger heller ikke dokumentasjon på baderommets oppbygging og løsninger.",
            "evidence": [
              "Baderommets underliggende hovedkonstruksjoner har oversteget forventet levetid på 20 år.",
              "Det er heller ikke fremlagt dokumentasjon på baderommets oppbygging og løsninger.",
              "Høydeforskjell mellom topp flis ved dør og overkant sluk tilfredsstiller ikke dagens krav."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Kloakklukt på badet: Det har tidvis forekommet kloakklukt på badet. Dette kan indikere feil på avløpssystemet eller manglende lekkasjesikring.",
            "evidence": [
              "Det har tidvis forekommet lukt på badet, opplevd som kloakklukt. Lukten har vært sporadisk og ikke konstant."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Manglende samsvarserklæring på elektrisk anlegg: Det foreligger ingen eller ikke fremlagt dokumentasjon/samsvarserklæring på det elektriske anlegget. Dette gjør det umulig å konstatere om det resterende elektriske ledningsnettet er i forskriftsmessig stand.",
            "evidence": [
              "Det foreligger ingen/ er ikke fremlagt dokumentasjon/ samsvarserklæring på det elektriske anlegget.",
              "Mangelfull samsvarserklæring kan ha, da man ikke kan konstantere om det resterende elektriske ledningsnettet er...",
              "Eksisterer det samsvarserklæring? Ukjent"
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Eldre vannledninger – mer enn halvparten av forventet brukstid passert: Innvendige vannledninger har passert mer enn halvparten av forventet brukstid. Selv om det ikke er behov for umiddelbare utbedringstiltak, kan skader plutselig oppstå.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
              "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Fellesgjeld og risiko for økte felleskostnader: Borettslaget har fellesgjeld, og felleskostnadene kan øke som følge av rentejusteringer eller fremtidige vedtak i generalforsamlingen. Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter.",
            "evidence": [
              "Borettslaget har lån, og kostnadene knyttet til disse (renter og avdrag) kan endres ved rentejusteringer.",
              "Størrelsen på felleskostnadene kan også påvirkes av fremtidige vedtak i generalforsamlingen.",
              "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Andel av fellesgjeld: kr 43 229"
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R9",
            "description": "Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom eiendommen blir overbeheftet i salgsprosessen, er gjennomføring av handelen betinget av at kreditorer gir nødvendig pantefrafall.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
              "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Legalpant – borettslaget har prioritet foran tinglyste lån: Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) som sikkerhet for felleskostnader. Dette betyr at borettslaget kan kreve inn penger før andre kreditorer.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Ventilasjon – avvik registrert: Det er registrert avvik på ventilasjon. Anbefalt tiltak må avklares nærmere med styret i borettslaget, da montering av mekanisk avtrekk kan hindres av konstruksjonen.",
            "evidence": [
              "Tekniske installasjoner – Ventilasjon | Det er avvik.",
              "Hindrer montering av mekanisk avtrekk fra rommet, vurderes tilstand ut fra synlige overflater samt alder/elde og slitasje, noe som medfører TG2 i henhold til NS3600.",
              "Anbefalt tiltak må derfor avklares nærmere med styret i borettslag."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2, som kan medføre restriksjoner på bruk eller utvikling av eiendommen.",
            "evidence": [
              "Eiendommen berøres av følgende hensynssoner: Hensynsone H190_2: Andre sikringssoner."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R13",
            "description": "Hensynssone H320_2 (Elveflom) og H390 (Deponi): Kartet viser at eiendommen kan berøres av hensynssoner for elveflom og deponi, noe som kan innebære risiko for flomskade eller forurensning i grunnen.",
            "evidence": [
              "H320_2 - Elveflom",
              "H390 - Deponi"
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R14",
            "description": "Begrenset utleieadgang – krever styrets godkjenning: Bruksoverlating (utleie) av boligen krever styrets godkjenning, og andelseier må som hovedregel ha bodd i boligen i minst ett av de siste to årene. Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke.",
            "evidence": [
              "Bruksoverlating (utleie) av boligen krever styrets godkjenning.",
              "Som hovedregel må andelseier ha bodd i boligen i minst ett av de siste to årene for å kunne leie ut.",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R15",
            "description": "Tilstandsrapport kun på nivå 1 – visuell befaring uten åpning av konstruksjoner: Rapporten er begrenset til visuell befaring, og skjulte feil og mangler kan forekomme utover det som er omtalt.",
            "evidence": [
              "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs kun en visuell befaring, uten åpning av konstruksjoner.",
              "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R16",
            "description": "Planlagte vedlikeholdskostnader i borettslaget: Generalforsamlingen i 2025 vedtok å innhente pristilbud for utbedring av porten i bakgården, og det er planlagt en rekke kontroller og vedlikeholdsoppgaver (kamerasjekk av avløpsrør, kontroll av heiser, rens av takrenner). Dette kan medføre økte felleskostnader.",
            "evidence": [
              "På generalforsamlingen i 2025 ble det vedtatt å innhente pristilbud for utbedring av porten i bakgården. Kostnaden for dette er planlagt inkludert i budsjettprosessen for 2026.",
              "Generalforsamlingen i 2025 vedtok å innhente pristilbud for en rekke kontroller og vedlikeholdsoppgaver, som kamerasjekk av avløpsrør, kontroll av heiser og rens av takrenner."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17",
            "description": "Privat stikkledning – vedlikeholdsansvar påhviler borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget. Dette kan medføre fremtidige kostnader.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler borettslaget."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R18",
            "description": "Adkomst via privat vei: Adkomst til eiendommen skjer via privat vei, noe som kan innebære usikkerhet rundt vedlikeholdsansvar og kostnader knyttet til veien.",
            "evidence": [
              "Adkomst til eiendommen skjer via privat vei."
            ],
            "source_documents": [
              "d045_d045"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          }
        ],
        "re_retrieval_queries": [
          "Hva er innholdet i hensynssone H190_2 og hvilke konkrete restriksjoner medfører den?",
          "Er det gjennomført tiltak for støyreduksjon i bygget, og hva er faktisk støynivå?",
          "Hva er borettslagets totale gjeld og lånevilkår, herunder rentebetingelser og løpetid?",
          "Foreligger det vedtak om større rehabiliteringsprosjekter i borettslaget utover det som er nevnt?",
          "Hva er adkomstveiens vedlikeholdsavtale og hvem er ansvarlig for kostnader?",
          "Er det gjennomført el-kontroll (DLE) og hva viste eventuell kontroll?",
          "Hva er status på flatt tak – alder, tilstand og forventet levetid?",
          "Hva innebærer H320_2 Elveflom og H390 Deponi konkret for denne eiendommen?"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende energiattest (justert ned fra 0.95 til 0.80):**\nDokumentet viser at bygget faktisk HAR energikarakter C / lys grønn, men dette gjelder trolig bygget/borettslaget som helhet. For den individuelle andelen er det oppgitt at eiendommen ikke er energimerket. Dette skaper en viss tvetydighet. Risikoen er reell, men noe uklar – confidence justeres ned til 0.80.\n\n**R2 – Manglende radonmåling (beholdes 0.90):**\nGodt dokumentert. Selger bekrefter ingen radonmåling er utført. Risikoen er særlig relevant ved utleie.\n\n**R3 – Støyrisiko (beholdes 0.92):**\nGodt dokumentert med reguleringsbestemmelse § 8 og jernbanespor i nærheten. Ingen informasjon om faktisk gjennomførte støytiltak, noe som øker usikkerheten.\n\n**R4 – Baderomsrisiko (beholdes 0.95):**\nSvært godt dokumentert med tre separate funn: oversteget levetid, manglende dokumentasjon og avvik på slukfall.\n\n**R5 – Kloakklukt (beholdes 0.88):**\nDokumentert i egenerklæring. Sporadisk natur reduserer alvorlighetsgraden noe, men risikoen er reell.\n\n**R6 – Manglende samsvarserklæring el-anlegg (beholdes 0.93):**\nGodt dokumentert. Ukjent status på samsvarserklæring er en klar risiko.\n\n**R7 – Eldre vannledninger (beholdes 0.90):**\nGodt dokumentert med TG2-vurdering og klar beskrivelse av risiko.\n\n**R8 – Fellesgjeld og økte felleskostnader (beholdes 0.92):**\nGodt dokumentert. Andel fellesgjeld er kr 43 229, og total borettslagsgjeld er betydelig (62,9 mill). Risikoen for økte kostnader er reell.\n\n**R9 – Overbeheftelse (beholdes 0.85):**\nDokumentert som standardklausul i salgsoppgaven. Risikoen er generell men reell.\n\n**R10 – Legalpant (beholdes 0.92):**\nSvært godt dokumentert med to separate tekstpassasjer som bekrefter legalpant på inntil 2G.\n\n**R11 – Ventilasjon avvik (beholdes 0.88):**\nGodt dokumentert med TG2 og anbefaling om avklaring med styret.\n\n**R12 – Hensynssone H190_2 (justert ned fra 0.78 til 0.65):**\nKun nevnt som faktum uten nærmere beskrivelse av konsekvenser. Mangler informasjon om hva \"Andre sikringssoner\" konkret innebærer for denne eiendommen. Confidence justeres ned.\n\n**R13 – H320_2 Elveflom og H390 Deponi (justert opp fra 0.75 til 0.70):**\nNevnt på kart, men ingen ytterligere kontekst om konsekvenser for eiendommen. Confidence holdes moderat.\n\n**R14 – Begrenset utleieadgang (beholdes 0.92):**\nSvært godt dokumentert med tre separate bestemmelser.\n\n**R15 – Tilstandsrapport nivå 1 (beholdes 0.88):**\nGodt dokumentert. Viktig generell risiko for kjøper.\n\n**R16 – Planlagte vedlikeholdskostnader (beholdes 0.82):**\nGodt dokumentert med konkrete vedtak fra generalforsamling 2025.\n\n**R17 – Privat stikkledning (beholdes 0.80):**\nDokumentert, men konsekvensene er indirekte for kjøper (gjelder borettslaget).\n\n**R18 – Adkomst via privat vei (justert ned fra 0.75 til 0.65):**\nKun én setning i dokumentet. Ingen informasjon om vedlikeholdsavtale eller kostnadsfordeling. Confidence justeres ned.\n\n**Manglende risikoer som bør vurderes:**\n1. Flatt tak – bygget fra 1999 med antatt papptekning. Alder og tilstand er ikke nærmere vurdert i de tilgjengelige fragmentene.\n2. El-kontroll (DLE) – det er ikke fremlagt kontrollrapport fra DLE, noe som forsterker R6.\n3. Eiendomsskatt i Oslo – nevnt i dokumentet, men ikke identifisert som risiko.\n4. Kun én andelseier kan eie andelen (kun fysiske personer) – begrensning for investorer.\n5. Borettslagets totale gjeld på ca. 62,9 mill. kr er betydelig og bør vurderes nærmere.\n"
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
    "input_tokens": 21907,
    "output_tokens": 5768,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
