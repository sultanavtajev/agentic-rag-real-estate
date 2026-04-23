# Trace: agentic_reflecting_iter1
- **Run ID:** e6beab17-41e1-4297-8032-912185c03da2
- **Tidspunkt:** 2026-03-26T08:05:12.478776+00:00
- **Varighet:** 125.47s
- **Input tokens:** 22387
- **Output tokens:** 6366

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
Risiko 1: Badet har fått tilstandsgrad TG3 (alvorlige avvik) på grunn av fuktskader i baderomsplater i dusjsone. Baderomsplatene er ikke tette i skjøter, og det er mulig at nye plater er lagt utenpå eksisterende tettesjikt, noe som kan bidra til magasinering av fukt. Eldre støpejernsluk uten klemring og mansjett gir usikker tetthet. Utbedringskostnader er estimert til 20 000–100 000 kr.
  Confidence: 0.98
  Evidens: TG 3 er satt da det er fuktskader i baderomsplater i dusjsone som følge av at baderomsplater ikke er tette i skjøter.; Selger opplyser at det er trolig etablert baderomsplater over eksisterende tettesjikt, noe som kan bidra til magasinering av fukt.; Eldre støpejernsluk er utført uten klemring og mansjett, noe som gjør at tetthet er usikker.; Utbedringskostnader 20 000 - 100 000

Risiko 2: Elektrisk anlegg har manglende samsvarserklæring for arbeider utført etter 01.01.1999, og det er ikke fremlagt dokumentasjon på utførelsen av anlegget. Anlegget har skrusikringer, og omfanget av sporadiske arbeider etter byggeår er ukjent. Det er heller ikke foretatt el-kontroll av lokalt el-tilsyn eller utvidet el-kontroll de siste 5 år.
  Confidence: 0.95
  Evidens: Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ja; Det er ikke forelagt noen dokumentasjon på utførelsen av anlegget.; Det er gjort sporadiske arbeider på anlegget etter byggeår men omfang er ukjent.; Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei; Type sikringer Skrusikringer

Risiko 3: Vinduer fra 1985 har passert forventet levetid og er gitt tilstandsgrad TG2. Dette innebærer økt risiko for skader i tiden som kommer. Aksjelaget planlegger å bytte vinduene trinnvis (ca. 10 per år), noe som betyr at kjøper kan måtte leve med gamle vinduer i en periode og at felleskostnader kan øke.
  Confidence: 0.92
  Evidens: TG 2 settes på grunn av at isolerglass på vinduer fra 1985 har passert forventet levetid med større risiko for skader i tiden som kommer.; Aksjelaget ønsker å bytte alle vinduene fra 80-tallet, men å ta alle 25 samtidig ville tømt økonomien eller krevd nye lån.; Derfor byttes vinduene ut trinnvis, med rundt 10 per år.

Risiko 4: Kjøkkenets overflater og innredning er gitt TG2 på grunn av skader i skrog med servant og i gulvflater etter tidligere lekkasje. Dette indikerer at det har vært en vannlekkasje på kjøkkenet som har forårsaket skader.
  Confidence: 0.92
  Evidens: Det er skader i skrog med servant og i gulvflater etter tidligere lekkasje.; Kjøkkenet vurderes å opprettholde sin funksjon.; Kjøkken - Overflater og innredning: Det er påvist avvik pga. skader i skrog med servant og i gulvflater etter tidligere lekkasje.

Risiko 5: Vannledninger er gitt TG2 på grunn av høy alder på deler av vannrør, noe som gir økt risiko for skader og lekkasjer i fremtiden. Selv om anlegget fungerer i dag, er det ikke vurdert med behov for tiltak.
  Confidence: 0.9
  Evidens: TG 2 er satt siden deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer.; Ikke vurdert med behov for tiltak da anlegget fungerer idag.

Risiko 6: Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest. Dette kan skape juridiske og praktiske utfordringer ved fremtidig salg eller refinansiering.
  Confidence: 0.93
  Evidens: Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest.

Risiko 7: Eiendommen er regulert til bevaringsområde (reguleringsplan r0229) og ligger i kommuneplanens arealdel under bevaring kulturmiljø. Dette begrenser muligheten for endringer, påbygg og rehabilitering, og kan medføre krav om spesielle materialer og metoder ved vedlikehold.
  Confidence: 0.88
  Evidens: Eiendommen er regulert til bevaringsområde i henhold til reguleringsplan r0229.; Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, bevaring kulturmiljø/naturmiljø, sentrumsformål – framtidig, og blå/grønnstruktur – nåværende.; Bevaring kulturmiljø Kommuneplanens arealdel 2022-2034 (27.3.2025) 1705.83m2

Risiko 8: Det er igangsatt planleggingsarbeid i området (Plan-ID: r20230005 – Gyldenløves gate) som berører eiendommen. Dette kan medføre endringer i omgivelsene, anleggsarbeid i nærområdet og potensielle konsekvenser for tilgjengelighet og bomiljø.
  Confidence: 0.8
  Evidens: Det er igangsatt planleggingsarbeid i området som berører eiendommen: Plan-ID: r20230005 – Gyldenløves gate.; Hensikten med planen er å skaffe juridisk grunnlag for å bygge om gategrunnen i Gyldenløves gate til å bli et mer attraktivt gangstrøk – hele året.

Risiko 9: Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen (vedtatt 07.03.2024). Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler, noe som begrenser fremtidig bruksfleksibilitet.
  Confidence: 0.85
  Evidens: Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen, vedtatt 07.03.2024.; Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler.

Risiko 10: Boden som er medtatt i BRA-e og totalt BRA ligger på aksjelagets fellesareal, og aksjelaget kan på et senere tidspunkt omdisponere denne. Det er heller ikke fremvist dokumentasjon på eierskap eller bruksrett til de 3 bodene i kjelleren. Dette innebærer en risiko for at kjøper mister tilgang til boden.
  Confidence: 0.93
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på aksjelaget fellesareal, men disponeres av denne aksjeleiligheten.; Aksjelaget kan på et senere tidspunkt omdisponere...; 3 boder i kjeller er påvist av eier. Det er ikke fremvist dokumentasjon på eierskap eller bruksrett.

Risiko 11: Aksjelaget har fellesgjeld på totalt kr 6 346 939, hvorav andel fellesgjeld for denne aksjen er kr 240 012. Lånene har flytende rente (5,5 % og 5,75 %), noe som innebærer risiko for økte felleskostnader ved renteøkning. Aksjelaget er heller ikke med i sikringsordning.
  Confidence: 0.88
  Evidens: Ajourf. Andel f.gj. (lån): 240 012; Klient ajourf. lån: 6 346 939; Rentesats per 05.03.2026: 5.5% pa.; Type Rente: Flytende rente. Rente: 5.75%; Aksjelagets lån har ikke in-ordning.; Boligselskapet er ikke med i sikringsordning.

Risiko 12: Rekkverket på balkongen er lavere enn dagens krav, noe som gir lavere sikkerhetsnivå enn dagens standard. Selv om det vurderes å være i samsvar med regelverket på oppføringstidspunktet, utgjør dette en sikkerhetsrisiko.
  Confidence: 0.87
  Evidens: Avvik fra dagens forskrift på høyde og åpninger i rekkverk til balkong/terrasse/utvendig trapp; Rekkverket er lavere enn dagens krav, men vurderes å være i samsvar med regelverket på oppføringstidspunktet.; Lav høyde gir lavere sikkerhetsnivå enn dagens standard.

Risiko 13: Selgers egenerklæring ble ikke fremvist for den bygningssakkyndige før befaring. Dette kan bety at takstmannen ikke hadde tilgang til all relevant informasjon fra selger under sin vurdering, noe som kan ha påvirket tilstandsrapportens fullstendighet.
  Confidence: 0.85
  Evidens: Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei; Egenerklæring er ikke fremvist før befaring.

Risiko 14: Det er tinglyst en bestemmelse fra 1954 om byggeforbud på eiendommen som skjuler noe av Bispehaugen skoles hovedbygning, godkjent i Formannskapet. Dette kan begrense fremtidige bygge- og utvidelsesmuligheter.
  Confidence: 0.82
  Evidens: 27.09.1954 – Dokumentnr: 304486 – Erklæring/avtale – Byggeforbud på nærv. eiendom som skjuler noe av Bispehaugen skoles hovedbygning – godkj. i Formannskapet.

Risiko 15: Det er tinglyst en refusjonsplikt til kommunen fra 1954 (Dokumentnr: 302180). Dette kan innebære en økonomisk forpliktelse for eiendommen som kjøper overtar.
  Confidence: 0.78
  Evidens: 30.04.1954 – Dokumentnr: 302180 – Erklæring/avtale – Refusjonsplikt til kommunen. Gjelder denne registerenheten med flere.

Risiko 16: Det er ikke utført radonmåling i boligen. Selv om det ikke er krav om dette med mindre boligen er helt eller delvis utleid, kan radon utgjøre en helserisiko, særlig i eldre bygårder.
  Confidence: 0.75
  Evidens: Selger har ikke utført radonmåling.; Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 17: Ildsted/skorstein er gitt TG-IU (ikke undersøkt) fordi pipeløpet strekker seg gjennom flere boenheter og det ikke er montert ildsted. Tilstanden på pipeløpet er dermed ukjent, og det anbefales å kontakte sameiet for eventuelle tilsynsrapporter. Aksjelaget har også hatt problemer med tilgang til pipene.
  Confidence: 0.78
  Evidens: Boligen har pipeløp som strekker seg gjennom flere boenheter og det er ikke montert ildsted. Forhold er derfor ikke vurdert.; Det anbefales å kontakte sameiet for eventuelle tilsynsrapporter.; Styret følger opp saken (om tilgang til pipene).

Risiko 18: Budsjett for 2025 viser en betydelig økning i periodisk vedlikehold (kr 200 000 budsjettert mot kr 0 i 2024) og økning i felleskostnader (driftsdel øker fra kr 853 255 til kr 1 025 080). Dette indikerer at felleskostnadene for aksjeeierne kan øke fremover.
  Confidence: 0.83
  Evidens: Periodisk vedlikehold 0 0 0 -200 000; Felleskostnader driftsdel 849 959 1 278 660 853 255 1 025 080; VEDLIKEHOLD: Alle boligselskaper har et kontinuerlig behov for vedlikehold for å sikre byggenes tekniske og økonomiske levetid. Dette medfører at det kan være store og små...

Dokumentkontekst:
[d199_d199 | Side [1]]
il megler. Vi oppfordrer
interessenter til å gjøre seg kjent med disse. Legalpant: Aksjelaget har legalpant i aksjen
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det Vei, vann og avløp
tinglyst følgende heftelser og rettigheter som følger Eiendommen er tilknyttet offentlig vann‑ og
eiendommens matrikkel ved overskjøting til ny avløpssystem. Stikkledningene fra eiendommen og ut til
hjemmelshaver: det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler

---

[d199_d199 | Side [1]]
tte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
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
24 Er det andre forhold av

---

[d199_d199 | Side [1]]
ver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er

---

[d199_d199 | Side [1]]
r ved boligen de
på dekning av felleskostnader og andre krav fra neste fem årene. Les mer om Boligkjøperforsikring i
selskapet, på inntil 2 ganger folketrygdens grunnbeløp. vedlagte materiell eller på https:/ /
Legalpanteretten følger av borettslagsloven § 5‑20, da www.soderbergpartners.no/ eiendom/ boligkjoper/
denne gjelder tilsvarende for boligaksjeselskaper, jf.
borettslagsloven § 1‑4.
Lovanvendelse
Kjøper og selger er forpliktet til å undertegne standard Regelverk og generelle

---

[d199_d199 | Side [1]]
ringer eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har

---

[d199_d199 | Side [1]]

OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr

---

[d199_d199 | Side [1]]
er.
Totalt m2 74 66 8 0 5
Kommentar til arealberegning
3 boder i kjeller er påvist av eier. Det er ikke fremvist dokumentasjon på eierskap eller bruksrett.
Nedre Møllenberg gate 49C, 7014 Trondheim 6 av 12
55

## Side 56

6. Hovedrapport
6.1 Balkong, terrasse, platting
Type Balkong
Er det gjennomført arbeider etter opprinnelig byggeår? Ukjent
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket?

---

[d199_d199 | Side [1]]
lipper og ladestasjon for denne medfølger ikke.
16. FASTMONTERT VEGGLADER/LADESTASJON TIL EL-BIL medfølger uavhengig av hvor laderen er 
montert. 
17. SOLCELLEANLEGG med tilhørende teknisk infrastruktur medfølger.
En komplett meglertjeneste En prosess du fortjener
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
Emera Eiendomsmegling tilbyr en komplett Vårt mål er at du, enten du er selger eller kjøper,
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger

---

[d199_d199 | Side [1]]
lighold, eller dersom boligaksjeselskapet boligkjøperforsikring. Vedlagt i salgsoppgaven følger
sitter på fraflyttede og/ eller usolgte aksjer, må dekkes av informasjon om Boligkjøperforsikring fra Söderberg &
de øvrige aksjeeierne. Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
Aksjeboligselskapet har legalpanterett i aksjen for krav oppdages uventede feil eller mangler ved boligen de
på dekning av felleskostnader og andre krav fra

---

[d199_d199 | Side [1]]
ostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: VNE 3
43006250
:ecnerefer
tnemucoD
47

## Side 48

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har

---

[d199_d199 | Side [1]]
rt utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Vindu og balkongdør ble byttet i 2018 av Byggmester Indergård og Nyplan AS.
Arbeid utført av Byggmester Indergård og Nyplan AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige

---

[d199_d199 | Side [1]]
feiestige og lignende medfølger der dette er påbudt. Løse stiger 
medfølger ikke. meglertjeneste – fra verdivurdering, klargjøring skal føle engasjement, ærlighet og
og koordinering av all markedsføring til profesjonalitet gjennom hele prosessen.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette

---

[d199_d199 | Side [1]]

30.04.1954 ‑ Dokumentnr: 302180 ‑ Erklæring/ avtale
Regulerings og arealplaner Refusjonsplikt til kommunen.
Eiendommen er regulert til bevaringsområde i henhold til Gjelder denne registerenheten med flere
reguleringsplan r0229. Eiendommen er i
kommuneplanens arealdel avsatt til byggesone 1, 27.09.1954 ‑ Dokumentnr: 304486 ‑ Erklæring/ avtale
bevaring kulturmiljø/ naturmiljø, sentrumsformål ‑ Byggeforbud på nærv. eiendom som skjuler noe av
framtidig, og blå/ grønnstruktur ‑ nåværende. Bispehaugen
skoles

---

[d199_d199 | Side [1]]
kter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE TEPPER følger med uansett festemåte.
3. VARMEKILDER, slik som ovner, kaminer, peiser, varmepumper og panelovner, følger med uansett 
festemåte. Frittstående biopeiser/varmeovner og

---

[d199_d199 | Side [1]]
o eier: 28.03.1999
Nedre Møllenberg gate 49 C Type: Aksjeselskap frittstående
7014 TRONDHEIM Eiere: Viktor Ellevseth
Organisasjonsnr: 931 496 255
10: Fasiliteter og andre enhetsopplysninger
GEBYR TOBB VED SALG I BOLIGAKSJELAG - Styret behandler. Eierskifte kr 6 725,-.Transport av adkomstdok. kr. 1 819,-.
Besittelseserklæring per stk. kr. 3 363,-. Pantattest kr. 336,-. Vi tar forbehold om at prisene kan endres etter oppstart av en sak. Noen
av prisene beregnes ut fra rettsgebyret og reguleres i samsvar med

---

[d199_d199 | Side [1]]
else
Radonmåling Tidspunkt for overtakelse avtales mellom kjøper og
Selger har ikke utført radonmåling. Det er ikke krav om selger.
dette med mindre boligen er helt eller delvis utleid.
Forsikring
Diverse Boligselgerforsikring: Selger har tegnet
Aksjeboligmodellen innebærer at aksjeselskapet eier boligselgerforsikring som dekker selgers ansvar etter
eiendommen, mens aksjeeierne eier aksjer i avhendingsloven begrenset oppad kr. 20 000 000,‑.
aksjeselskapet, som gir aksjeeier leierett til en bestemt

---

[d199_d199 | Side [1]]
framtidig, og blå/ grønnstruktur ‑ nåværende. Bispehaugen
skoles hovedbygning ‑ godkj. i Formannskapet.
Eiendommen ligger innenfor et område med utvidet
virkeområde for hyblifiseringsbestemmelsen, vedtatt 08.06.1972 ‑ Dokumentnr: 7486 ‑ Rettighet
07.03.2024. Dette innebærer at det kreves særskilt Rettighetshaver: As Nedre Møllenberg Gt 49
tillatelse fra kommunen for å dele opp eller bruksendre Org.nr: 931 496 255
en boenhet til hybler. LEIEAVTALE
LEIE AV AREAL
Det er igangsatt planleggingsarbeid i området

---

[d199_d199 | Side [1]]
kt over løsøre og tilbehør", som
dokumentasjon på eierskap eller bruksrett. legges til grunn med mindre annet er spesifisert i
salgsoppgaven.
Standard
Gjenstander som er nevnt i standardlisten, men som ikke
Velkommen hjem! finnes på eiendommen, vil heller ikke følge med i salget.
Leiligheten ligger i 4. etasje, som er byggets øverste Alt utstyr og installasjoner som medfølger overtas slik de
etasje. Dette gir gode lysforhold og en skjermet er, uten garanti, med mindre det foreligger en

---

[d199_d199 | Side [1]]
/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar

---

[d199_d199 | Side [1]]
le nettet er private, og
vedlikeholdsansvaret for disse påhviler aksjelaget.
5001/ 409/ 255: Adkomst til eiendommen skjer via offentlig vei.
27.04.1938 ‑ Dokumentnr: 303234 ‑ Bestemmelse om
bebyggelse
Inneh. div. innskrenkninger
38

## Side 39

OM EIENDOMMEN
Selger leverer eiendommen i ryddig og rengjort stand.
Utleie
Adgang til utleie: Det er begrenset adgang til å leie ut Det gjøres oppmerksom på at megler ikke har innhentet
bolig i boligaksjeselskap. Med styrets godkjenning og særskilte opplysninger om

---

[d199_d199 | Side [1]]
vetid med større risiko for skader i tiden som kommer.
Kjøkken - Overflater og innredning Det er skader i skrog med servant og i gulvflater etter tidligere lekkasje.
Kjøkkenet vurderes å opprettholde sin funksjon.
Vannledninger TG 2 er satt siden deler av vannrør har nådd høy alder med større risiko for
skader i tiden som kommer. Ikke vurdert med behov for tiltak da anlegget
fungerer idag.
Bygningsdeler med TG-IU
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Ildsted/Skorstein Boligen har pipeløp som

---

[d199_d199 | Side [1]]
rapporten.
Utvidet el-kontroll
Bygningsdeler med TG3
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Bad TG 3 er satt da det er fuktskader i baderomsplater i dusjsone som følge av
at baderomsplater ikke er tette i skjøter. Se punkt "bad" for ytterligere
kommentarer.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Vinduer og dører TG 2 settes på grunn av at isolerglass på vinduer fra 1985 har passert
forventet levetid med større risiko for skader i tiden som kommer.
Kjøkken -

---

[d199_d199 | Side [1]]
Etasjeskillere er av betongdekke. Gnr. 409, bnr. 255
i Trondheim kommune.
Bygningsdeler med TG2:
‑ Vinduer og dører: Det er påvist avvik pga. alder da Selger
isolerglass på vinduer er fra 1985 og har dermed passert Viktor Nygård Ellevseth
forventet levetid med større risiko for skader i tiden som
kommer. Aksjeselskap
AS Nedre Møllenberg Gt 49
‑ Kjøkken ‑ Overflater og innredning: Det er påvist avvik Organisasjonsnummer: 931496255
pga. skader i skrog med servant og i gulvflater etter
tidligere lekkasje.

---

[d199_d199 | Side [1]]
v dette
så kan det etableres dusjkabinett for å spare overflater for fritt vann. Utbedringskostnader er
vurdert for lokal utbedring alene.
Med tanke på alder på støpejernsluk og membran så er det ikke vurdert med behov for strakstiltak
da det ikke registreres svekkelser idag, men med alder så øker risikoen for skader i tiden som
kommer.
Utbedringskostnader 20 000 - 100 000
6.13 Ikke relevante bygningsdeler
Følgende bygningsdeler er angitt som finnes ikke/ikke relevant:
Rom under terreng
Takkonstruksjon og

---

[d199_d199 | Side [1]]
e konstruksjon av badet er utført i mur/betong og det er rimelig å anta
at skader begrenser seg til innvendige vegger. Selger har opplyst at badet er oppgradert i 2007.
Selger opplyser at det er trolig etablert baderomsplater over eksisterende tettesjikt, noe som kan
bidra til magasinering av fukt. Eldre støpejernsluk er utført uten klemring og mansjett, noe som gjør
at tetthet er usikker. Tettesjikt har passert halvparten av forventet levetid.
Utover dette så bemerkes det mindre svelling på servantskap

---

[d199_d199 | Side [1]]
kke vurdert med behov for tiltak da anlegget det ikke er oppgitt annet på listene i kjelleren.
fungerer idag.
Kun fysiske personer kan være aksjonærer, og ingen kan
Bygningsdeler med TG3: eie mer enn én aksje. Bare personer som bor eller skal bo
i boligen kan bli sameier i aksjen.
‑ Bad: Det er påvist avvik da det er fuktskader i
baderomsplater i dusjsone som følge av at Vi gjør oppmerksom på følgende saker i aksjelaget:
baderomsplater ikke er tette i skjøter. Se punkt "bad" i Aksjelaget ønsker å bytte

---

[d199_d199 | Side [1]]
er i skrog med servant og i gulvflater etter
tidligere lekkasje. Kjøkkenet vurderes å opprettholde sin AS Nedre Møllenberg gate 49 er et boligaksjeselskap og
funksjon. forretningsføreren er Boligbyggelaget TOBB.
‑ Vannledninger: Det er påvist avvik pga. alder på deler Aksjelaget har felles vaskerier med tørkerom som
av vannrør, som gir større risiko for skader i tiden som disponeres etter lister, samt tørkestativ ute til fri bruk om
kommer. Ikke vurdert med behov for tiltak da anlegget det ikke er oppgitt

---

[d199_d199 | Side [1]]
trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller

---

[d199_d199 | Side [1]]

Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også

---

[d199_d199 | Side [1]]
entiler i vindu.
Oppsummering av ventilasjon TG-1
Ingen tegn til utilstrekkelig luftutskifting på befaringsdagen.
6.12 Bad
Beskrivelse
Badet er etablert med baderomsplater og flis på gulv. Dusjhjørne, servantskap og mekanisk
avtrekk.
Nedre Møllenberg gate 49C, 7014 Trondheim 11 av 12
60

## Side 61

Oppsummering TG-3
TG 3 er satt da det er fuktskader i baderomsplater i dusjsone som følge av at baderomsplater ikke
er tette i skjøter. Omsluttende konstruksjon av badet er utført i mur/betong og det er rimelig

---

[d199_d199 | Side [1]]
reverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting TG-1
Balkong fremstår med normal aldersslitasje.
6.2 Vinduer og dører
Beskrivelse
Vinduer med 2-lags glass. Ytterdør i malt utførelse. Balkongdør med glass.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Balkongdør og stuevindu fra 2018. Ellers er vinduer fra 1985.
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det

---

[d199_d199 | Side [1]]
påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-2
TG 2 settes på grunn av at isolerglass på vinduer fra 1985 har passert forventet levetid med større
risiko for skader i tiden som kommer. Vinduer og dører fremstår med normal bruksslitasje i forhold
til alder.
Anbefalte tiltak / ytterligere undersøkelser

---

[d199_d199 | Side [1]]
n? Nei
Er det dårlig funksjon på stoppekran? Nei
Oppsummering av vannledninger TG-2
TG 2 er satt siden deler av vannrør har nådd høy alder med større risiko for skader i tiden som
kommer. Ikke vurdert med behov for tiltak da anlegget fungerer idag. Stoppekran er plassert i
kasse bak toalett.
6.9 Elektrisk
Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Skrusikringer
Har eier opplyst om arbeider utført etter opprinnelig byggeår?

---

[d199_d199 | Side [1]]
r
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ukjent
Det er gjort sporadiske arbeider på anlegget etter byggeår men omfang er ukjent.
Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ja
Det er ikke forelagt noen dokumentasjon på utførelsen av anlegget.
Er det manglende kursfortegnelse? Nei
Er det manglende samsvar mellom kursfortegnelse og antall sikringer? Nei
Er det tegn på varmgang (termiske skader) på kabler, brytere, downlight, stikkkontakter, og Nei
elektrisk

---

[d199_d199 | Side [1]]
n vesentlige avvik ble registrert. Målt lokalt avvik er <10mm og totalt avvik <15 mm pr. rom.
6.4 Ildsted/Skorstein
Tilgjengelighet Ikke tilgjengelig
Oppsummering av ildsted/skorstein TG-IU
Boligen har pipeløp som strekker seg gjennom flere boenheter og det er er ikke montert ildsted.
Forhold er derfor ikke vurdert. Det anbefales å kontakte sameiet for eventuelle tilsynsrapporter.
6.5 Kjøkken
Overflater og innredning
Er det påvist fukt /skader rundt vask/kjøleskap/oppvaskmaskin? Ja
Er det påvist skader på

---

[d199_d199 | Side [1]]
 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Ja, kun av faglært
Beskrivelse Rørfornying i 2019
Arbeid utført av Olimb
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller

---

[d199_d199 | Side [1]]
porten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å

---

[d199_d199 | Side [1]]
else for tilstandsgrad
Ildsted/Skorstein Boligen har pipeløp som strekker seg gjennom flere boenheter og det er er
ikke montert ildsted. Forhold er derfor ikke vurdert. Det anbefales å
kontakte sameiet for eventuelle tilsynsrapporter.
Varmtvannsbereder Det er felles varmtvann i bygget.
Lovlighet / HMS
Avvik fra dagens forskrift på høyde og åpninger i rekkverk til balkong/terrasse/utvendig trapp
Rekkverket er lavere enn dagens krav, men vurderes å være i samsvar med regelverket på
oppføringstidspunktet. Lav

---

[d199_d199 | Side [1]]
s å være i samsvar med regelverket på
oppføringstidspunktet. Lav høyde gir lavere sikkerhetsnivå enn dagens standard.
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
6.7 Avløpsrør
Type avløpsrør Plast, Støpejern
Er det gjennomført arbeider på anlegget etter byggeår? Ja
Selger har opplyst om rørfornying i 2019.
Er det manglende lufting av kloakk over tak? Ukjent
Er det sen avrenning

---

[d199_d199 | Side [1]]
ort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Nedre Møllenberg gate 49C, 7014 Trondheim 2 av 12
51

## Side

---

[d199_d199 | Side [1]]
ostnader etter
avdragsfri periode er beregnet med utgangspunkt i dagens rentenivå og nedbetalingsordning. Vi gjør oppmerksom på at økning av
felleskostnadene pga av oppstart avdrag vanligvis starter noen mnd før forfall på avdraget så pengene er på konto når avdraget skal
betales. Vi viser for øvrig til vedlagte regnskap for laget.
VEDLIKEHOLD: Alle boligselskaper har et kontinuerlig behov for vedlikehold for å sikre byggenes tekniske og økonomiske levetid.
Dette medfører at det kan være store og små

---

[d199_d199 | Side [1]]
133 350 -10 000
Løpende vedlikehold 4 -6 875 -16 399 -60 000 -60 000
Periodisk vedlikehold 0 0 0 -200 000
Elektroniske fellesavtaler -70 794 -110 359 -71 450 -74 350
Forsikring -113 950 -106 072 -115 170 -129 240
Kommunale tjenester og renovasjon -207 062 -163 518 -177 700 -200 000
Eiendomsavgifter -138 415 -135 804 -142 600 -145 340
Energi, felles -102 430 -105 784 -120 000 -125 600
Andre driftsutgifter 5 -8 517 -3 929 -4 500 -6 500
Sum driftskostnader -998 658 -947 738 -979 220 -1 106 380
DRIFTSRESULTAT

---

[d199_d199 | Side [1]]
e er tette i skjøter. Se punkt "bad" i Aksjelaget ønsker å bytte alle vinduene fra 80‑tallet, men
takstrapporten for ytterligere kommentarer. å ta alle 25 samtidig ville tømt økonomien eller krevd nye
Ihht informasjon fra tidligere salg er badet opprinnelig lån. En betydelig økning i fellesutgifter er heller ikke
gjort av faglært. Nye veggplater er lagt utenpå i ettertid. ønskelig. Derfor byttes vinduene ut trinnvis, med rundt 10
Gjør også oppmerksom på at det er mulig å slå toalett og per år. Målet er at

---

[d199_d199 | Side [1]]
 prisene beregnes ut fra rettsgebyret og reguleres i samsvar med disse ved årsskiftet. Se eget infoskriv til megler.
69

## Side 70

AS Nedre Møllenberg gate 49 - Resultatregnskap 2024
Note Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025
Driftsinntekter
Felleskostnader driftsdel 849 959 1 278 660 853 255 1 025 080
Felleskostnader kapitaldel 563 869 0 572 733 480 909
Tillegg elektroniske fellesavtaler 71 010 113 220 71 450 74 350
Andre tillegg 1 65 952 65 952 65 952 78 527
Sum driftsinntekter 1 550

---

[d199_d199 | Side [1]]
at felleskostnader kan øke.
Prisantydning
Kr 3 490 000 Kommunale avgifter
Informasjon: Kommunale avgifter faktureres aksjelaget
Omkostning kjøper og er dekket gjennom de månedlige felleskostnadene.
3 490 000 (Prisantydning)
240 012 (Andel av fellesgjeld)
Fellesgjeld
3 730 012 (Pris inkl. fellesgjeld) Kr 240 012 pr. 05.03.2026
Omkostninger Lånebetingelser fellesgjeld: Aksjeselskapet har totale lån
12 500 (Boligkjøperforsikring (valgfritt)) og vilkår:
3 850 (Noteringsgebyr forretningsfører)
9 475

---

[d199_d199 | Side [1]]
er 127
Tilleggsytelser: Tillegg balkong 273
Tillegg elektroniske fellesavtaler 210
Boligselskapet er ikke med i sikringsordning.
Kollektiv avtale med TELIA
Dersom det er inngått kollektiv avtale (elektroniske fellesavtaler) kan dette gjelde kabel-tv og internett eller én av delene.
FELLESKOSTNADER. Andel felleskostnader forfaller til betaling den 1. i hver måned. Ved salg faktureres felleskostnadene til kjøper fra
1. i første hele måned. Ved overtakelse på annen dato enn 1. må kjøper og selger gjøre opp

---

[d199_d199 | Side [1]]
, varmtvann, tillegg for balkong Antall terminer til innfrielse: 21
og en kollektiv avtale for TV/ internett med Telia. Type Rente: Flytende rente
Rente: 5.75%
Felleskostnadene fordeles slik: Første termin/ første avdrag: 30.12.2019 ( siste termin
‑ Felleskostnad renter: kr 1 072,‑ 30.06.2036 )
‑ Felleskostnad avdrag: kr 363,‑
‑ Felleskostnad avdrag: kr 143,‑ Aksjelagets lån har ikke in‑ordning.
‑ Felleskostnad driftsdel: kr 3 197,‑
‑ Felleskostnad renter: kr 127,‑
‑ Tillegg balkong: kr 273,‑
‑ Tillegg

---

[d199_d199 | Side [1]]
befaring.
Informasjon om bygningssakkyndig
Navn: Fredrik Johnsen Telefon: 91132028
Firma: Takst-forum Trøndelag AS Epost: fj@tft.no
Tittel: Adresse: Vestre Rosten 69, 7072 Heimdal
Profesjonsansvarsforsikring: Frende Forsikring
Egne premisser:
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet yttervegger,
takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles

---

[d199_d199 | Side [1]]
 tillegg 1 65 952 65 952 65 952 78 527
Sum driftsinntekter 1 550 790 1 457 832 1 563 390 1 658 866
Driftskostnader
Personalkostnader 2 -7 050 -7 050 -7 050 -7 050
Styrehonorar -50 000 -50 000 -50 000 -50 000
Forretningsførerhonorar -80 404 -77 558 -80 400 -83 060
Honorar administrative tjenester -14 750 -14 238 -15 000 -15 240
Eksterne honorar 3 -1 487 -1 488 -2 000 0
Vaktmestertjenester -196 923 -81 316 0 0
Renholdstjenester 0 -74 224 -133 350 -10 000
Løpende vedlikehold 4 -6 875 -16 399 -60 000 -60

---

[d199_d199 | Side [1]]
alpris ink. omk Første termin/ første avdrag: 30.12.2019 ( siste termin
Kr 3 751 743 30.06.2049 )
Bank: Svenska Handelsbanken AB NUF
Felleskostnader Lånenummer: 90517277974
Felleskostnader kr 5 385,‑ pr. mnd Type: Annuitetslån, 2 terminer per år
Felleskostnader inkulderer: Felleskostnadene er på kr 5 Restsaldo pr. 05.03.2026: kr 591 340,‑
385,‑ per måned. Dette inkluderer betjening av Andel av saldo: kr 24 639,‑
fellesgjeld, driftskostnader, varmtvann, tillegg for balkong Antall terminer til innfrielse:

---

[d199_d199 | Side [1]]
5.03.26 Side 1 av 3
AS Nedre Møllenberg gate 49 Vår ref.: 415/21 Fødselsdato eier: 28.03.1999
Nedre Møllenberg gate 49 C Type: Aksjeselskap frittstående
7014 TRONDHEIM Eiere: Viktor Ellevseth
Organisasjonsnr: 931 496 255 Aksje: 1 Aksjeboenhetsnr: 21
1: Felleskostnader
Tot. innev. måned: 5 385
Felleskostnader: Felleskostnad renter 1 072
Felleskostnad avdrag 363
Felleskostnad avdrag 143
Felleskostnad driftsdel 3 197
Felleskostnad renter 127
Tilleggsytelser: Tillegg balkong 273
Tillegg elektroniske

---

[d199_d199 | Side [1]]
 tilgang til pipene. Styret følger opp saken.
36

## Side 37

OM EIENDOMMEN
Regnskap/ budsjett/ kostnadsøkninger: Aksjelaget hadde
Forretningsfører: TOBB boligbyggelag i 2024 samlede driftsinntekter på kr 1 550 790 og
samlede driftskostnader på kr 998 658. Dette ga et
Aksjeselskapets forsikringsselskap: Fremtind Forsikring positivt årsresultat på kr 150 505.
AS
Polisenummer fellesforsikring: 24845912 Vedtekter/ husordensregler
Eier forplikter seg til å gjøre seg kjent med vedtekter og
Husdyr: Styret kan

---

[d199_d199 | Side [1]]
9 C Type: Aksjeselskap frittstående
7014 TRONDHEIM Eiere: Viktor Ellevseth
Organisasjonsnr: 931 496 255
4: Særskilte opplysninger
Adresse: Nedre Møllenberg gate 49 C
Postnr/-sted: 7014 TRONDHEIM
E-post: nmg49@styrepost.no
5: Restanse felleskostnader pr. 05.03.2026
Felleskostnader: 0
Gebyr: 0
Rente: 0
6: Ligning - 2025
Gjeld: 240 012 Andre inntekter: 677
Annen formue: 15 470 Utgifter: 15 160
7: Pålydende
Pålydende: 3 400 Opprinnelig innskudd: 6 900
Aksjenr: 1 Aksjeboenhetsnr: 21
8: Bygning/eiendom
Byggeår:

---

[d199_d199 | Side [1]]
d overtakelse på annen dato enn 1. må kjøper og selger gjøre opp seg imellom. Felleskostnadene bør sjekkes
før overtakelse, da det kan ha skjedd endringer etter avgitt informasjon.
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 240 012 Gjeld siste årsoppg.: 240 012
Klient ajourf. lån: 6 346 939 Klient gj. s. årsoppg.: 6 346 939
Spesifikasjon av lån:
Lånenummer: 90517277966, Svenska Handelsbanken AB NUF
Annuitetslån, 2 terminer per år.
Rentesats per 05.03.2026: 5.5% pa.
Antall terminer til innfrielse: 47
Saldo

---

[d199_d199 | Side [1]]
ur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Det skal settes et anslag på på utbedringskostnader for alle TG 3 i rapporten
Utbedringskostnadene er et forsiktig anslag basert på bygningsdelen standard og kvalitet med utgangspunkt i registrert avvik og angitte tiltak i rapporten.
Anslaget er gitt på generelt grunnlag og må ikke forveksles med et pristilbud fra en håndverker. Det kan foreligge avvik og tiltak som ikke kommer frem av
rapporten. Endelig kostnad avhenger blant annet av

---

[d199_d199 | Side [1]]
s det
andre soverommet passer godt som barnerom,
gjesterom eller hjemmekontor.
Fellesarealer og rettigheter til
Badet ble oppgradert i 2007 og er utstyrt med
bruk dusjhjørne, servant med innredning og speilskap. I tillegg
Det gjøres særskilt oppmerksom på at boden som er har leiligheten separat toalettrom, noe som er praktisk i
medtatt i BRA‑e og totalt BRA, ligger på aksjelaget hverdagen.
fellesareal, men disponeres av denne aksjeleiligheten.
Aksjelaget kan på et senere tidspunkt omdisponere Boligen har

---

[d199_d199 | Side [1]]
49D, 7014 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Bevaring kulturmiljø Kommuneplanens arealdel 2022-2034 (27.3.2025) 1705.83m2
Blå/grønnstruktur - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025) 848.77m2
Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 857.56m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål

---

[d199_d199 | Side [1]]
regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
Bevaringsområde 1354.98m2
5001 r0229 Verneplan for Møllenberg / Kirkesletten / Rosenborg gjennom
midlertidige reguleringsbestemmelser for dette området. (1.9.1986)
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r0140h Kirkegata 43 (28.11.1986)
r0140i Kirkegata 63, gnr. 410/133 (15.6.1987)
r0140j Nedre Møllenberg gate 56, gnr. 410/249 (18.5.1988)
r0140k Nedre Møllenberg gate 76A, gnr.410/269 (2.6.1988)
r0140l Nordre Berggate 4, gnr.

---

[d199_d199 | Side [1]]
6 10:30:40 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
83

## Side 84

Tegnforklaring
RpOmråde igangsatt RpOmråde vedtatt linje - på RpOmråde vedtatt - på
bakkenivå bakkenivå
Eiendomsgrense god Eiendomsgrense dårlig Veg
nøyaktighet nøyaktighet
Kommunalveg gatenavn . Privatveg gatenavn . Plan dispensasjon punkt
Avslag dispensasjon Plan mindre endring Midlertidig forbud mot tiltak
RpGrense Regulert tomtegrense Bevaring av bygninger og
anlegg
Kjøreveg
02.03.2026 10:30:40

---

[d199_d199 | Side [1]]
ll Nyhavna-Nedre Møllenberggate (23.11.2006)
18730913 13.09.1873 (13.9.1873)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
5001 r20230005 Gyldenløves gate
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Nei
KOMMENTARFELT:
02.03.2026 10:30:13 Side 2 av 3
80

## Side

---

[d199_d199 | Side [1]]
ttingstillatelse for brannteknisk gjenoppbygging BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
av brannskiller, datert 08.11.2012. Byggesaken for BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
brannteknisk gjenoppbygging fra 2012 er ikke avsluttet boenheten og som tilhører denne, for eksempel eksterne
med ferdigattest. boder.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Det foreligger byggetegninger fra kommunen datert
1954. Det er ikke manglende samsvar mellom dagens Andre arealer:
bruk

---

[d199_d199 | Side [1]]
sjeselskap. Med styrets godkjenning og særskilte opplysninger om det finnes pålegg fra brann‑/
under visse vilkår kan boligen leies ut i inntil 3 år, jf. feiervesen på eiendommen.
borettslagsloven § 5‑3 til § 5‑10. Aksjeeier som bor i
boligen selv, kan leie ut deler av boligen til andre uten
Kontrakts‑
styregodkjenning, jf. borettslagsloven § 5‑4.
Korttidsutleie er tillatt i opptil 30 døgn per år uten
grunnlag
samtykke fra styret.
Overtakelse
Radonmåling Tidspunkt for overtakelse avtales mellom kjøper

---

[d199_d199 | Side [1]]
409 Bnr:2
Hensikten med planen er å skaffe juridisk grunnlag for å
bygge om gategrunnen i Gyldenløves gate til å bli et mer 01.01.2018 ‑ Dokumentnr: 233765 ‑ Omnummerering ved
attraktivt gangstrøk – hele året. kommuneendring
Tidligere: Knr:1601 Gnr:409 Bnr:255
Kopi av situasjonskart, målebrev, reguleringsplaner m/
bestemmelser etc. ligger vedlagt i salgsoppgaven eller Dokumenter kan fås ved henvendelse til megler.
kan fås ved henvendelse til megler. Vi oppfordrer
interessenter til å gjøre seg kjent med

---

[d199_d199 | Side [1]]
TALE
LEIE AV AREAL
Det er igangsatt planleggingsarbeid i området som ÅRLIG AVGIFT NOK 25
berører eiendommen: UTLEIER: TRONDHEIM KOMMUNE
Plan‑ID: r20230005 ‑ Gyldenløves gate
Deler av gata har allerede gjennomgått en oppgradering. 21.01.1936 ‑ Dokumentnr: 340 ‑ Registrering av grunn
Nå er det laget forslag til reguleringsplan for gata for å Denne matrikkelenhet opprettet fra:
kunne fortsette arbeidet med flere etapper av gata. Knr:5001 Gnr:409 Bnr:2
Hensikten med planen er å skaffe juridisk grunnlag for

---

[d199_d199 | Side [1]]
tighet nøyaktighet
Eiendomsgrense generert Eiendomsgrense fiktiv Veg
Bestemmelsesområde #3 Hensyn bevaring naturmiljø Hensyn bevaring kulturmiljø
Mobilitetsfunksjon
Turveg / turdrag Framtidig turveg / turdrag Jernbane - på bakken
Jernbane - bro Kollektivtrase Fjernveg tunnel
Hovedveg Hovedvegnett sykkel Båndlegging etter lov om
kulturminner, Trondheim
middelalderby (arkeologi)
Byggesone 1 Byggesone 2 Byggesone 3
Offentlig eller privat Idrettsanlegg Grav og urnelund
tjenesteyting
Bane Havn

---

[d199_d199 | Side [1]]
er privat Idrettsanlegg Grav og urnelund
tjenesteyting
Bane Havn Blå/grønnstruktur
Framtidig blå/grønnstruktur Bruk og vern av sjø og Ferdsel
vassdrag mm
Småbåthavn
02.03.2026 10:30:20 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
82

## Side 83

Reguleringsplaner
Eiendom: Gnr: 409 Bnr: 255 Fnr: 0 Snr: 0
Adresse: Nedre Møllenberg gate 49C
Målestokk
7014 TRONDHEIM, m.fl.
Trondheim 1:1000
Annen info:
02.03.2026 10:30:40 Det kan forekomme feil eller manglende opplysninger i

---

[d199_d199 | Side [1]]
ld og en skjermet er, uten garanti, med mindre det foreligger en gjeldende
beliggenhet uten naboer over. Planløsningen er garanti fra produsent eller leverandør.
tradisjonell og romslig med en praktisk romfordeling, og
fra entréen er det adkomst til alle rom. Dette gir en Kjøper aksepterer at det kan forekomme hull og merker
funksjonell og oversiktlig løsning. etter montering av inventar og utstyr som ikke er en del
av overdragelsen.
Stuen er lys og romslig med god plass til både
sofagruppe og spisebord.

---

[d199_d199 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d199_d199 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d199_d199 | Side [1]]
ar du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2021
Hvor lenge har du eid boligen?
Antall år 4
Antall måneder 5
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap If
Polise/avtalenr. 7451777
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: VNE 1
43006250
:ecnerefer
tnemucoD
45

##

---

[d199_d199 | Side [1]]
inger etc
EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt tomteforhold er ikke kontrollert av TOBB. Vi tar derfor forbehold om
riktigheten. Opplysningene må også innhentes fra det offentlige registeret.
9: Forsikring
Forsikret i: Fremtind Forsikring AS Polisenr: 24845912
FORSIKRING BOLIGAKSJELAG. Alle aksjelag skal ha felles bygningsforsikring. Hver enkelt aksjeeier må skaffe egen innboforsikring.
Ved skifte av forsikringsselskap kan det ta tid før våre opplysninger er oppdatert.
10: Fasiliteter og

---

[d199_d199 | Side [1]]
000,‑.
aksjeselskapet, som gir aksjeeier leierett til en bestemt Egenerklæringsskjema er vedlagt salgsoppgaven og
bolig. Aksjeeierne har ikke personlig ansvar for interessenter oppfordres til å gjennomgå denne før bud
selskapets fellesgjeld, men boligselskapets løpende inngis.
utgifter må dekkes av aksjeeierne. Manglende
innbetaling av fellesutgiftene som følge av andre Boligkjøperforsikring: Kjøper har anledning til å tegne
aksjeeieres mislighold, eller dersom boligaksjeselskapet boligkjøperforsikring.

---

[d199_d199 | Side [1]]
e er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d199_d199 | Side [1]]
 premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes

---

[d199_d199 | Side [1]]
aget, kan variere ut fra hvor i
landet eiendommen ligger.
43

## Side 44

NEDRE MØLLENBERG GATE 49C

## Side 45

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Trondheim
Oppdragsnr.
05260034
Selger 1 navn
Viktor Nygård Ellevseth
Gateadresse
Nedre Møllenberg gate 49C
Poststed Postnr
TRONDHEIM 7014
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

[d199_d199 | Side [1]]
e?
Type takst avholdt av takstmann: Tilstandsrapport Ja.
Faglært arbeid:
Sammendrag selgers egenerklæring: Selger har i Hvilket år ble jobben fullført?: 2018
forbindelse med salget fylt ut egenerklæringsskjema Firmanavn: Byggmester Indergård og Nyplan AS
som vedlagt salgsoppgaven. I skjemaet fremkommer Beskrivelse av arbeidet: Vindu og balkongdør ble byttet
følgende informasjon:
Samsvarserklæring:
Kjenner du til om det er utført arbeid på bad/ våtrom? Det fremgår av selgers egenerklæringsskjema at det
Ja.

---

[d199_d199 | Side [1]]

kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en

---

[d199_d199 | Side [1]]
på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved

---

[d199_d199 | Side [1]]
d/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 105






OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er

---

[d199_d199 | Side [1]]
Er arbeidet byggemeldt? Nei.
Selgers egenerklæringsskjema følger vedlagt
Kjenner du til feil eller om har vært utført arbeid/ kontroll salgsoppgaven. Interessenter oppfordres til å gjennomgå
på vann/ avløp? dette nøye.
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2019 Byggemåte
Firmanavn: Olimb I forbindelse med salget er det blitt utført en
Beskrivelse av arbeidet: Rørfornying tilstandsrapport av en bygningssakkyndig, som gir en
teknisk gjennomgang av boligen og påpeker eventuelle
Kjenner du til

---

[d199_d199 | Side [1]]
e kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: VNE 4
43006250
:ecnerefer
tnemucoD
48

## Side 49

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Viktor Nygård Ellevseth 113cfe22ebde411454808ff 03.03.2026 Signer authenticated by
32e8317a3cc398e04 21:37:12 UTC One time code
→ This is a PDF document digitally signed by IN Groupe's E-Signing service.
→ The document's integrity is protected by signing and sealing the contents with a certificate issued to IN Groupe by
a

---

[d199_d199 | Side [1]]
ventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet

---

[d199_d199 | Side [1]]
s å være i samsvar med regelverket på
oppføringstidspunktet. Lav høyde gir lavere sikkerhetsnivå enn dagens standard.
Nedre Møllenberg gate 49C, 7014 Trondheim 4 av 12
53

## Side 54

4. Informasjon om oppdraget
Befaringsdato Rapportdato
6.3.2026 9.3.2026
Hjemmelshavere
Navn: Viktor Nygård Ellevseth Tilstede ved inspeksjon: Ja
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Egenerklæring er ikke fremvist før befaring.
Informasjon om bygningssakkyndig
Navn: Fredrik Johnsen

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Badet har fått tilstandsgrad TG3 (alvorlige avvik) på grunn av fuktskader i baderomsplater i dusjsone. Baderomsplatene er ikke tette i skjøter, og det er mulig at nye plater er lagt utenpå eksisterende tettesjikt, noe som kan bidra til magasinering av fukt. Eldre støpejernsluk uten klemring og mansjett gir usikker tetthet. Utbedringskostnader er estimert til 20 000–100 000 kr.",
      "evidence": [
        "TG 3 er satt da det er fuktskader i baderomsplater i dusjsone som følge av at baderomsplater ikke er tette i skjøter.",
        "Selger opplyser at det er trolig etablert baderomsplater over eksisterende tettesjikt, noe som kan bidra til magasinering av fukt.",
        "Eldre støpejernsluk er utført uten klemring og mansjett, noe som gjør at tetthet er usikker.",
        "Utbedringskostnader 20 000 - 100 000",
        "Tettesjikt har passert halvparten av forventet levetid.",
        "Ihht informasjon fra tidligere salg er badet opprinnelig gjort av faglært. Nye veggplater er lagt utenpå i ettertid."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Elektrisk anlegg har manglende samsvarserklæring for arbeider utført etter 01.01.1999, og det er ikke fremlagt dokumentasjon på utførelsen av anlegget. Anlegget har skrusikringer, og omfanget av sporadiske arbeider etter byggeår er ukjent. Det er heller ikke foretatt el-kontroll av lokalt el-tilsyn eller utvidet el-kontroll de siste 5 år.",
      "evidence": [
        "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ja",
        "Det er ikke forelagt noen dokumentasjon på utførelsen av anlegget.",
        "Det er gjort sporadiske arbeider på anlegget etter byggeår men omfang er ukjent.",
        "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei",
        "Type sikringer: Skrusikringer"
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Vinduer fra 1985 har passert forventet levetid og er gitt tilstandsgrad TG2. Dette innebærer økt risiko for skader i tiden som kommer. Aksjelaget planlegger å bytte vinduene trinnvis (ca. 10 per år), noe som betyr at kjøper kan måtte leve med gamle vinduer i en periode og at felleskostnader kan øke.",
      "evidence": [
        "TG 2 settes på grunn av at isolerglass på vinduer fra 1985 har passert forventet levetid med større risiko for skader i tiden som kommer.",
        "Aksjelaget ønsker å bytte alle vinduene fra 80-tallet, men å ta alle 25 samtidig ville tømt økonomien eller krevd nye lån.",
        "Derfor byttes vinduene ut trinnvis, med rundt 10 per år.",
        "Balkongdør og stuevindu fra 2018. Ellers er vinduer fra 1985."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Kjøkkenets overflater og innredning er gitt TG2 på grunn av skader i skrog med servant og i gulvflater etter tidligere lekkasje. Dette indikerer at det har vært en vannlekkasje på kjøkkenet som har forårsaket skader.",
      "evidence": [
        "Det er skader i skrog med servant og i gulvflater etter tidligere lekkasje.",
        "Kjøkkenet vurderes å opprettholde sin funksjon.",
        "Kjøkken - Overflater og innredning: Det er påvist avvik pga. skader i skrog med servant og i gulvflater etter tidligere lekkasje.",
        "Er det påvist fukt/skader rundt vask/kjøleskap/oppvaskmaskin? Ja"
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Vannledninger er gitt TG2 på grunn av høy alder på deler av vannrør, noe som gir økt risiko for skader og lekkasjer i fremtiden. Selv om anlegget fungerer i dag, er det ikke vurdert med behov for tiltak.",
      "evidence": [
        "TG 2 er satt siden deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer.",
        "Ikke vurdert med behov for tiltak da anlegget fungerer idag.",
        "Stoppekran er plassert i kasse bak toalett."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest. Dette kan skape juridiske og praktiske utfordringer ved fremtidig salg eller refinansiering.",
      "evidence": [
        "Igangsettingstillatelse for brannteknisk gjenoppbygging av brannskiller, datert 08.11.2012.",
        "Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? (spørsmål 22 i egenerklæring)"
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Eiendommen er regulert til bevaringsområde (reguleringsplan r0229) og ligger i kommuneplanens arealdel under bevaring kulturmiljø. Dette begrenser muligheten for endringer, påbygg og rehabilitering, og kan medføre krav om spesielle materialer og metoder ved vedlikehold.",
      "evidence": [
        "Eiendommen er regulert til bevaringsområde i henhold til reguleringsplan r0229.",
        "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, bevaring kulturmiljø/naturmiljø, sentrumsformål – framtidig, og blå/grønnstruktur – nåværende.",
        "Bevaring kulturmiljø Kommuneplanens arealdel 2022-2034 (27.3.2025) 1705.83m2",
        "Verneplan for Møllenberg / Kirkesletten / Rosenborg gjennom midlertidige reguleringsbestemmelser for dette området. (1.9.1986)"
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Det er igangsatt planleggingsarbeid i området (Plan-ID: r20230005 – Gyldenløves gate) som berører eiendommen. Dette kan medføre endringer i omgivelsene, anleggsarbeid i nærområdet og potensielle konsekvenser for tilgjengelighet og bomiljø.",
      "evidence": [
        "Det er igangsatt planleggingsarbeid i området som berører eiendommen: Plan-ID: r20230005 – Gyldenløves gate.",
        "Hensikten med planen er å skaffe juridisk grunnlag for å bygge om gategrunnen i Gyldenløves gate til å bli et mer attraktivt gangstrøk – hele året.",
        "Deler av gata har allerede gjennomgått en oppgradering. Nå er det laget forslag til reguleringsplan for gata for å kunne fortsette arbeidet med flere etapper av gata."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen (vedtatt 07.03.2024). Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler, noe som begrenser fremtidig bruksfleksibilitet.",
      "evidence": [
        "Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen, vedtatt 07.03.2024.",
        "Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Boden som er medtatt i BRA-e og totalt BRA ligger på aksjelagets fellesareal, og aksjelaget kan på et senere tidspunkt omdisponere denne. Det er heller ikke fremvist dokumentasjon på eierskap eller bruksrett til de 3 bodene i kjelleren. Dette innebærer en risiko for at kjøper mister tilgang til boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på aksjelaget fellesareal, men disponeres av denne aksjeleiligheten.",
        "Aksjelaget kan på et senere tidspunkt omdisponere...",
        "3 boder i kjeller er påvist av eier. Det er ikke fremvist dokumentasjon på eierskap eller bruksrett."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R11",
      "description": "Aksjelaget har fellesgjeld på totalt kr 6 346 939, hvorav andel fellesgjeld for denne aksjen er kr 240 012. Lånene har flytende rente (5,5 % og 5,75 %), noe som innebærer risiko for økte felleskostnader ved renteøkning. Aksjelaget er heller ikke med i sikringsordning.",
      "evidence": [
        "Ajourf. Andel f.gj. (lån): 240 012",
        "Klient ajourf. lån: 6 346 939",
        "Rentesats per 05.03.2026: 5.5% pa.",
        "Type Rente: Flytende rente. Rente: 5.75%",
        "Aksjelagets lån har ikke in-ordning.",
        "Boligselskapet er ikke med i sikringsordning."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Rekkverket på balkongen er lavere enn dagens krav, noe som gir lavere sikkerhetsnivå enn dagens standard. Selv om det vurderes å være i samsvar med regelverket på oppføringstidspunktet, utgjør dette en sikkerhetsrisiko.",
      "evidence": [
        "Avvik fra dagens forskrift på høyde og åpninger i rekkverk til balkong/terrasse/utvendig trapp",
        "Rekkverket er lavere enn dagens krav, men vurderes å være i samsvar med regelverket på oppføringstidspunktet.",
        "Lav høyde gir lavere sikkerhetsnivå enn dagens standard."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R13",
      "description": "Selgers egenerklæring ble ikke fremvist for den bygningssakkyndige før befaring. Dette kan bety at takstmannen ikke hadde tilgang til all relevant informasjon fra selger under sin vurdering, noe som kan ha påvirket tilstandsrapportens fullstendighet.",
      "evidence": [
        "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei",
        "Egenerklæring er ikke fremvist før befaring."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Det er tinglyst en bestemmelse fra 1954 om byggeforbud på eiendommen som skjuler noe av Bispehaugen skoles hovedbygning, godkjent i Formannskapet. Dette kan begrense fremtidige bygge- og utvidelsesmuligheter.",
      "evidence": [
        "27.09.1954 – Dokumentnr: 304486 – Erklæring/avtale – Byggeforbud på nærv. eiendom som skjuler noe av Bispehaugen skoles hovedbygning – godkj. i Formannskapet."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Det er tinglyst en refusjonsplikt til kommunen fra 1954 (Dokumentnr: 302180). Dette kan innebære en økonomisk forpliktelse for eiendommen som kjøper overtar.",
      "evidence": [
        "30.04.1954 – Dokumentnr: 302180 – Erklæring/avtale – Refusjonsplikt til kommunen. Gjelder denne registerenheten med flere."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R16",
      "description": "Det er ikke utført radonmåling i boligen. Selv om det ikke er krav om dette med mindre boligen er helt eller delvis utleid, kan radon utgjøre en helserisiko, særlig i eldre bygårder.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei (spørsmål 21 i egenerklæring)"
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R17",
      "description": "Ildsted/skorstein er gitt TG-IU (ikke undersøkt) fordi pipeløpet strekker seg gjennom flere boenheter og det ikke er montert ildsted. Tilstanden på pipeløpet er dermed ukjent, og det anbefales å kontakte sameiet for eventuelle tilsynsrapporter. Aksjelaget har også hatt problemer med tilgang til pipene.",
      "evidence": [
        "Boligen har pipeløp som strekker seg gjennom flere boenheter og det er ikke montert ildsted. Forhold er derfor ikke vurdert.",
        "Det anbefales å kontakte sameiet for eventuelle tilsynsrapporter.",
        "Styret følger opp saken (om tilgang til pipene)."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18",
      "description": "Budsjett for 2025 viser en betydelig økning i periodisk vedlikehold (kr 200 000 budsjettert mot kr 0 i 2024) og økning i felleskostnader (driftsdel øker fra kr 853 255 til kr 1 025 080). Dette indikerer at felleskostnadene for aksjeeierne kan øke fremover.",
      "evidence": [
        "Periodisk vedlikehold: 0 (regnskap 2024) mot -200 000 (budsjett 2025)",
        "Felleskostnader driftsdel: 853 255 (budsjett 2024) mot 1 025 080 (budsjett 2025)",
        "VEDLIKEHOLD: Alle boligselskaper har et kontinuerlig behov for vedlikehold for å sikre byggenes tekniske og økonomiske levetid. Dette medfører at det kan være store og små kostnader."
      ],
      "source_documents": [
        "d199_d199"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "avløpsrør tilstandsgrad TG2 støpejern alder",
    "begrenset adgang utleie boligaksjeselskap styregodkjenning",
    "bestemmelse om bebyggelse 1938 innskrenkninger tinglyste heftelser",
    "refusjonsplikt kommunen 1954 innhold omfang",
    "ferdigattest manglende brukstillatelse egenerklæring spørsmål 22",
    "vaktmestertjenester kostnadsøkning budsjett 2025 felleskostnader",
    "balkong tilstandsgrad konstruksjon alder",
    "skjeggkre insekter skadedyr fellesareal boligaksjeselskap"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Bad TG3:** Svært godt dokumentert. Evidensen er direkte og konsistent på tvers av flere dokumentdeler. Confidence justeres opp til 0.99 da det også fremgår at nye veggplater er lagt utenpå i ettertid (fra salgsoppgaveteksten), noe som forsterker risikoen ytterligere.\n\n**R2 – Elektrisk anlegg:** Godt dokumentert med direkte sitat fra tilstandsrapporten. Skrusikringer er et ekstra risikoelement som bekrefter at anlegget er gammelt. Confidence opprettholdes på 0.95.\n\n**R3 – Vinduer TG2:** Godt dokumentert. Det fremgår også at balkongdør og stuevindu ble byttet i 2018, noe som nyanserer risikoen noe (ikke alle vinduer er fra 1985). Confidence justeres marginalt opp til 0.93.\n\n**R4 – Kjøkken TG2:** Godt dokumentert. Tilstandsrapporten bekrefter fukt/skader rundt vask. Confidence opprettholdes på 0.92.\n\n**R5 – Vannledninger TG2:** Godt dokumentert. Det fremgår også at det ble utført rørfornying i 2019 av Olimb, noe som er positivt og nyanserer risikoen. Confidence opprettholdes på 0.90.\n\n**R6 – Manglende ferdigattest:** Godt dokumentert. Igangsettingstillatelse fra 2012 er bekreftet, og manglende ferdigattest er eksplisitt nevnt. Confidence opprettholdes på 0.93.\n\n**R7 – Bevaringsområde:** Godt dokumentert med reguleringsplan og kommuneplan. Confidence opprettholdes på 0.88.\n\n**R8 – Planarbeid Gyldenløves gate:** Godt dokumentert. Planen er igangsatt og hensikten er beskrevet. Confidence opprettholdes på 0.80 da konsekvensene for denne spesifikke eiendommen er usikre.\n\n**R9 – Hyblifiseringsbestemmelse:** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.85.\n\n**R10 – Bod på fellesareal:** Svært godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence opprettholdes på 0.93.\n\n**R11 – Fellesgjeld og rente:** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.88.\n\n**R12 – Rekkverk balkong:** Godt dokumentert. Confidence opprettholdes på 0.87.\n\n**R13 – Egenerklæring ikke fremvist:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 – Byggeforbud 1954:** Dokumentert med tinglyst heftelse. Confidence opprettholdes på 0.82.\n\n**R15 – Refusjonsplikt 1954:** Dokumentert som tinglyst heftelse, men innholdet og det faktiske omfanget av forpliktelsen er ikke nærmere beskrevet i dokumentene. Confidence justeres ned til 0.72 da det er uklart om dette fortsatt er aktivt og hva det faktisk innebærer.\n\n**R16 – Radonmåling:** Dokumentert. Risikoen er reell men begrenset da leiligheten er i 4. etasje (øverste etasje), noe som reduserer radonrisikoen betydelig. Confidence justeres ned til 0.72.\n\n**R17 – Ildsted/pipe TG-IU:** Godt dokumentert. Confidence opprettholdes på 0.78.\n\n**R18 – Økte felleskostnader budsjett 2025:** Godt dokumentert med konkrete tall fra regnskapet. Confidence justeres opp til 0.85 da tallene er klare.\n\n**Manglende risikoer som bør vurderes:**\n1. Avløpsrør: Dokumentet nevner avløpsrør av plast og støpejern, og rørfornying i 2019. Tilstandsgraden er ikke eksplisitt nevnt i de tilgjengelige chunkene – bør undersøkes nærmere.\n2. Begrenset adgang til utleie: Boligaksjeselskap har begrenset utleiemulighet (maks 3 år med styregodkjenning), noe som kan være en risiko for kjøpere som ønsker utleiemulighet.\n3. Tinglyst bestemmelse fra 1938 (Dokumentnr: 303234) om bebyggelse med diverse innskrenkninger – dette er nevnt i dokumentet men ikke identifisert som en separat risiko.\n4. Leieavtale med Trondheim kommune (årlig avgift NOK 25) – nevnt i dokumentet, bør undersøkes nærmere.\n"
}

## Raw Response
```json
{
  "id": "msg_01QUZj9tGqa75qJXU14UiH13",
  "container": null,
  "content": [
    {
      "id": "toolu_01TctuySrXNRzVnGQfEfCrCo",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Badet har fått tilstandsgrad TG3 (alvorlige avvik) på grunn av fuktskader i baderomsplater i dusjsone. Baderomsplatene er ikke tette i skjøter, og det er mulig at nye plater er lagt utenpå eksisterende tettesjikt, noe som kan bidra til magasinering av fukt. Eldre støpejernsluk uten klemring og mansjett gir usikker tetthet. Utbedringskostnader er estimert til 20 000–100 000 kr.",
            "evidence": [
              "TG 3 er satt da det er fuktskader i baderomsplater i dusjsone som følge av at baderomsplater ikke er tette i skjøter.",
              "Selger opplyser at det er trolig etablert baderomsplater over eksisterende tettesjikt, noe som kan bidra til magasinering av fukt.",
              "Eldre støpejernsluk er utført uten klemring og mansjett, noe som gjør at tetthet er usikker.",
              "Utbedringskostnader 20 000 - 100 000",
              "Tettesjikt har passert halvparten av forventet levetid.",
              "Ihht informasjon fra tidligere salg er badet opprinnelig gjort av faglært. Nye veggplater er lagt utenpå i ettertid."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Elektrisk anlegg har manglende samsvarserklæring for arbeider utført etter 01.01.1999, og det er ikke fremlagt dokumentasjon på utførelsen av anlegget. Anlegget har skrusikringer, og omfanget av sporadiske arbeider etter byggeår er ukjent. Det er heller ikke foretatt el-kontroll av lokalt el-tilsyn eller utvidet el-kontroll de siste 5 år.",
            "evidence": [
              "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Ja",
              "Det er ikke forelagt noen dokumentasjon på utførelsen av anlegget.",
              "Det er gjort sporadiske arbeider på anlegget etter byggeår men omfang er ukjent.",
              "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei",
              "Type sikringer: Skrusikringer"
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Vinduer fra 1985 har passert forventet levetid og er gitt tilstandsgrad TG2. Dette innebærer økt risiko for skader i tiden som kommer. Aksjelaget planlegger å bytte vinduene trinnvis (ca. 10 per år), noe som betyr at kjøper kan måtte leve med gamle vinduer i en periode og at felleskostnader kan øke.",
            "evidence": [
              "TG 2 settes på grunn av at isolerglass på vinduer fra 1985 har passert forventet levetid med større risiko for skader i tiden som kommer.",
              "Aksjelaget ønsker å bytte alle vinduene fra 80-tallet, men å ta alle 25 samtidig ville tømt økonomien eller krevd nye lån.",
              "Derfor byttes vinduene ut trinnvis, med rundt 10 per år.",
              "Balkongdør og stuevindu fra 2018. Ellers er vinduer fra 1985."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Kjøkkenets overflater og innredning er gitt TG2 på grunn av skader i skrog med servant og i gulvflater etter tidligere lekkasje. Dette indikerer at det har vært en vannlekkasje på kjøkkenet som har forårsaket skader.",
            "evidence": [
              "Det er skader i skrog med servant og i gulvflater etter tidligere lekkasje.",
              "Kjøkkenet vurderes å opprettholde sin funksjon.",
              "Kjøkken - Overflater og innredning: Det er påvist avvik pga. skader i skrog med servant og i gulvflater etter tidligere lekkasje.",
              "Er det påvist fukt/skader rundt vask/kjøleskap/oppvaskmaskin? Ja"
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Vannledninger er gitt TG2 på grunn av høy alder på deler av vannrør, noe som gir økt risiko for skader og lekkasjer i fremtiden. Selv om anlegget fungerer i dag, er det ikke vurdert med behov for tiltak.",
            "evidence": [
              "TG 2 er satt siden deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer.",
              "Ikke vurdert med behov for tiltak da anlegget fungerer idag.",
              "Stoppekran er plassert i kasse bak toalett."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest. Dette kan skape juridiske og praktiske utfordringer ved fremtidig salg eller refinansiering.",
            "evidence": [
              "Igangsettingstillatelse for brannteknisk gjenoppbygging av brannskiller, datert 08.11.2012.",
              "Byggesaken for brannteknisk gjenoppbygging fra 2012 er ikke avsluttet med ferdigattest.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? (spørsmål 22 i egenerklæring)"
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Eiendommen er regulert til bevaringsområde (reguleringsplan r0229) og ligger i kommuneplanens arealdel under bevaring kulturmiljø. Dette begrenser muligheten for endringer, påbygg og rehabilitering, og kan medføre krav om spesielle materialer og metoder ved vedlikehold.",
            "evidence": [
              "Eiendommen er regulert til bevaringsområde i henhold til reguleringsplan r0229.",
              "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1, bevaring kulturmiljø/naturmiljø, sentrumsformål – framtidig, og blå/grønnstruktur – nåværende.",
              "Bevaring kulturmiljø Kommuneplanens arealdel 2022-2034 (27.3.2025) 1705.83m2",
              "Verneplan for Møllenberg / Kirkesletten / Rosenborg gjennom midlertidige reguleringsbestemmelser for dette området. (1.9.1986)"
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Det er igangsatt planleggingsarbeid i området (Plan-ID: r20230005 – Gyldenløves gate) som berører eiendommen. Dette kan medføre endringer i omgivelsene, anleggsarbeid i nærområdet og potensielle konsekvenser for tilgjengelighet og bomiljø.",
            "evidence": [
              "Det er igangsatt planleggingsarbeid i området som berører eiendommen: Plan-ID: r20230005 – Gyldenløves gate.",
              "Hensikten med planen er å skaffe juridisk grunnlag for å bygge om gategrunnen i Gyldenløves gate til å bli et mer attraktivt gangstrøk – hele året.",
              "Deler av gata har allerede gjennomgått en oppgradering. Nå er det laget forslag til reguleringsplan for gata for å kunne fortsette arbeidet med flere etapper av gata."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen (vedtatt 07.03.2024). Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler, noe som begrenser fremtidig bruksfleksibilitet.",
            "evidence": [
              "Eiendommen ligger innenfor et område med utvidet virkeområde for hyblifiseringsbestemmelsen, vedtatt 07.03.2024.",
              "Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Boden som er medtatt i BRA-e og totalt BRA ligger på aksjelagets fellesareal, og aksjelaget kan på et senere tidspunkt omdisponere denne. Det er heller ikke fremvist dokumentasjon på eierskap eller bruksrett til de 3 bodene i kjelleren. Dette innebærer en risiko for at kjøper mister tilgang til boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på aksjelaget fellesareal, men disponeres av denne aksjeleiligheten.",
              "Aksjelaget kan på et senere tidspunkt omdisponere...",
              "3 boder i kjeller er påvist av eier. Det er ikke fremvist dokumentasjon på eierskap eller bruksrett."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R11",
            "description": "Aksjelaget har fellesgjeld på totalt kr 6 346 939, hvorav andel fellesgjeld for denne aksjen er kr 240 012. Lånene har flytende rente (5,5 % og 5,75 %), noe som innebærer risiko for økte felleskostnader ved renteøkning. Aksjelaget er heller ikke med i sikringsordning.",
            "evidence": [
              "Ajourf. Andel f.gj. (lån): 240 012",
              "Klient ajourf. lån: 6 346 939",
              "Rentesats per 05.03.2026: 5.5% pa.",
              "Type Rente: Flytende rente. Rente: 5.75%",
              "Aksjelagets lån har ikke in-ordning.",
              "Boligselskapet er ikke med i sikringsordning."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Rekkverket på balkongen er lavere enn dagens krav, noe som gir lavere sikkerhetsnivå enn dagens standard. Selv om det vurderes å være i samsvar med regelverket på oppføringstidspunktet, utgjør dette en sikkerhetsrisiko.",
            "evidence": [
              "Avvik fra dagens forskrift på høyde og åpninger i rekkverk til balkong/terrasse/utvendig trapp",
              "Rekkverket er lavere enn dagens krav, men vurderes å være i samsvar med regelverket på oppføringstidspunktet.",
              "Lav høyde gir lavere sikkerhetsnivå enn dagens standard."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R13",
            "description": "Selgers egenerklæring ble ikke fremvist for den bygningssakkyndige før befaring. Dette kan bety at takstmannen ikke hadde tilgang til all relevant informasjon fra selger under sin vurdering, noe som kan ha påvirket tilstandsrapportens fullstendighet.",
            "evidence": [
              "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei",
              "Egenerklæring er ikke fremvist før befaring."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Det er tinglyst en bestemmelse fra 1954 om byggeforbud på eiendommen som skjuler noe av Bispehaugen skoles hovedbygning, godkjent i Formannskapet. Dette kan begrense fremtidige bygge- og utvidelsesmuligheter.",
            "evidence": [
              "27.09.1954 – Dokumentnr: 304486 – Erklæring/avtale – Byggeforbud på nærv. eiendom som skjuler noe av Bispehaugen skoles hovedbygning – godkj. i Formannskapet."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Det er tinglyst en refusjonsplikt til kommunen fra 1954 (Dokumentnr: 302180). Dette kan innebære en økonomisk forpliktelse for eiendommen som kjøper overtar.",
            "evidence": [
              "30.04.1954 – Dokumentnr: 302180 – Erklæring/avtale – Refusjonsplikt til kommunen. Gjelder denne registerenheten med flere."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R16",
            "description": "Det er ikke utført radonmåling i boligen. Selv om det ikke er krav om dette med mindre boligen er helt eller delvis utleid, kan radon utgjøre en helserisiko, særlig i eldre bygårder.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei (spørsmål 21 i egenerklæring)"
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R17",
            "description": "Ildsted/skorstein er gitt TG-IU (ikke undersøkt) fordi pipeløpet strekker seg gjennom flere boenheter og det ikke er montert ildsted. Tilstanden på pipeløpet er dermed ukjent, og det anbefales å kontakte sameiet for eventuelle tilsynsrapporter. Aksjelaget har også hatt problemer med tilgang til pipene.",
            "evidence": [
              "Boligen har pipeløp som strekker seg gjennom flere boenheter og det er ikke montert ildsted. Forhold er derfor ikke vurdert.",
              "Det anbefales å kontakte sameiet for eventuelle tilsynsrapporter.",
              "Styret følger opp saken (om tilgang til pipene)."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18",
            "description": "Budsjett for 2025 viser en betydelig økning i periodisk vedlikehold (kr 200 000 budsjettert mot kr 0 i 2024) og økning i felleskostnader (driftsdel øker fra kr 853 255 til kr 1 025 080). Dette indikerer at felleskostnadene for aksjeeierne kan øke fremover.",
            "evidence": [
              "Periodisk vedlikehold: 0 (regnskap 2024) mot -200 000 (budsjett 2025)",
              "Felleskostnader driftsdel: 853 255 (budsjett 2024) mot 1 025 080 (budsjett 2025)",
              "VEDLIKEHOLD: Alle boligselskaper har et kontinuerlig behov for vedlikehold for å sikre byggenes tekniske og økonomiske levetid. Dette medfører at det kan være store og små kostnader."
            ],
            "source_documents": [
              "d199_d199"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "avløpsrør tilstandsgrad TG2 støpejern alder",
          "begrenset adgang utleie boligaksjeselskap styregodkjenning",
          "bestemmelse om bebyggelse 1938 innskrenkninger tinglyste heftelser",
          "refusjonsplikt kommunen 1954 innhold omfang",
          "ferdigattest manglende brukstillatelse egenerklæring spørsmål 22",
          "vaktmestertjenester kostnadsøkning budsjett 2025 felleskostnader",
          "balkong tilstandsgrad konstruksjon alder",
          "skjeggkre insekter skadedyr fellesareal boligaksjeselskap"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Bad TG3:** Svært godt dokumentert. Evidensen er direkte og konsistent på tvers av flere dokumentdeler. Confidence justeres opp til 0.99 da det også fremgår at nye veggplater er lagt utenpå i ettertid (fra salgsoppgaveteksten), noe som forsterker risikoen ytterligere.\n\n**R2 – Elektrisk anlegg:** Godt dokumentert med direkte sitat fra tilstandsrapporten. Skrusikringer er et ekstra risikoelement som bekrefter at anlegget er gammelt. Confidence opprettholdes på 0.95.\n\n**R3 – Vinduer TG2:** Godt dokumentert. Det fremgår også at balkongdør og stuevindu ble byttet i 2018, noe som nyanserer risikoen noe (ikke alle vinduer er fra 1985). Confidence justeres marginalt opp til 0.93.\n\n**R4 – Kjøkken TG2:** Godt dokumentert. Tilstandsrapporten bekrefter fukt/skader rundt vask. Confidence opprettholdes på 0.92.\n\n**R5 – Vannledninger TG2:** Godt dokumentert. Det fremgår også at det ble utført rørfornying i 2019 av Olimb, noe som er positivt og nyanserer risikoen. Confidence opprettholdes på 0.90.\n\n**R6 – Manglende ferdigattest:** Godt dokumentert. Igangsettingstillatelse fra 2012 er bekreftet, og manglende ferdigattest er eksplisitt nevnt. Confidence opprettholdes på 0.93.\n\n**R7 – Bevaringsområde:** Godt dokumentert med reguleringsplan og kommuneplan. Confidence opprettholdes på 0.88.\n\n**R8 – Planarbeid Gyldenløves gate:** Godt dokumentert. Planen er igangsatt og hensikten er beskrevet. Confidence opprettholdes på 0.80 da konsekvensene for denne spesifikke eiendommen er usikre.\n\n**R9 – Hyblifiseringsbestemmelse:** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.85.\n\n**R10 – Bod på fellesareal:** Svært godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence opprettholdes på 0.93.\n\n**R11 – Fellesgjeld og rente:** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.88.\n\n**R12 – Rekkverk balkong:** Godt dokumentert. Confidence opprettholdes på 0.87.\n\n**R13 – Egenerklæring ikke fremvist:** Direkte dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 – Byggeforbud 1954:** Dokumentert med tinglyst heftelse. Confidence opprettholdes på 0.82.\n\n**R15 – Refusjonsplikt 1954:** Dokumentert som tinglyst heftelse, men innholdet og det faktiske omfanget av forpliktelsen er ikke nærmere beskrevet i dokumentene. Confidence justeres ned til 0.72 da det er uklart om dette fortsatt er aktivt og hva det faktisk innebærer.\n\n**R16 – Radonmåling:** Dokumentert. Risikoen er reell men begrenset da leiligheten er i 4. etasje (øverste etasje), noe som reduserer radonrisikoen betydelig. Confidence justeres ned til 0.72.\n\n**R17 – Ildsted/pipe TG-IU:** Godt dokumentert. Confidence opprettholdes på 0.78.\n\n**R18 – Økte felleskostnader budsjett 2025:** Godt dokumentert med konkrete tall fra regnskapet. Confidence justeres opp til 0.85 da tallene er klare.\n\n**Manglende risikoer som bør vurderes:**\n1. Avløpsrør: Dokumentet nevner avløpsrør av plast og støpejern, og rørfornying i 2019. Tilstandsgraden er ikke eksplisitt nevnt i de tilgjengelige chunkene – bør undersøkes nærmere.\n2. Begrenset adgang til utleie: Boligaksjeselskap har begrenset utleiemulighet (maks 3 år med styregodkjenning), noe som kan være en risiko for kjøpere som ønsker utleiemulighet.\n3. Tinglyst bestemmelse fra 1938 (Dokumentnr: 303234) om bebyggelse med diverse innskrenkninger – dette er nevnt i dokumentet men ikke identifisert som en separat risiko.\n4. Leieavtale med Trondheim kommune (årlig avgift NOK 25) – nevnt i dokumentet, bør undersøkes nærmere.\n"
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
    "input_tokens": 22387,
    "output_tokens": 6366,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
