# Trace: agentic_reflecting_iter1
- **Run ID:** 7380f29a-cb0b-44f4-8b01-a4baaf3ecf12
- **Tidspunkt:** 2026-03-25T21:48:42.964697+00:00
- **Varighet:** 112.44s
- **Input tokens:** 23216
- **Output tokens:** 5635

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
Risiko 1: Etasjeskille og gulv har TG-3: Stedvise totale avvik på over 30mm, lokale skjevheter og knirk. Kostnadsestimat for utbedring er kr 20 000 – 100 000.
  Confidence: 0.98
  Evidens: Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale skjevheter og knirk.; Om avvik skal lukkes så må det utføres avretting av gulv. Kostnadsestimat kr. 20 000 - 100 000.

Risiko 2: Manglende ferdigattest og brukstillatelse. Dagens plantegning (2 soverom) er ikke godkjent – opprinnelige tegninger viser 2 hybler og felles kjøkken/bad. En lettvegg ble satt opp for å dele hybel i to soverom uten tillatelse.
  Confidence: 0.97
  Evidens: Idag har leiligheten 2 soverom, kjøkken og stue. De tegningene som foreligger har 2 hybler og felles kjøkken, bad.; Den ene hybelen er delt i to med en lettvegg for å skape to soverom. Dette ble gjort før mitt eierskap, vet ikke når, men leiligheten er veldig funksjonabel idag, men tror ikke det ligger en tillatesle om endringen.; Det foreligger ikke ferdigattest eller midlertidig brukstillatelse for eiendommen i kommunens arkiver.; Ja som nevnt over med ikke godkjent tegning av dagens plantegning.

Risiko 3: Badet har TG-2 med alvorlige fuktrelaterte avvik: Manglende tettesjikt på vegger i våte soner, tettesjikt i gulv har passert forventet levetid, og det er påvist tegn på utettheter. Badet har behov for full renovering.
  Confidence: 0.97
  Evidens: Badet har ikke etablert tettesjikt på vegger i våte soner. Tettesjikt i gulv har passert forventet levetid.; Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Ja; Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Ja; Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja; Badet har behov for renovering. Frem til da så må det brukes dusjkabinett.

Risiko 4: Drenering har TG-2: Drenering og overgangsrør fra nedløp har nådd en alder med påregnelig redusert funksjon, understøttet av registrert fuktgjennomgang i kjellerbod. Alder på drenering er ukjent.
  Confidence: 0.95
  Evidens: Drenering og overgangsrør fra nedløp har nådd en alder hvor det er påregnelig med redusert funksjon. Dette underbygges ved registrert fuktgjennomgang i kjellerbod.; Alder på drenering ukjent.; Er det ved innvendig inspeksjon registrert symptom på nedsatt funksjon eller funksjonssvikt? Ja; Er det manglende fuktsikring i form av grunnmursplast på grunnmur, eller er det ut fra alder grunn til å anta at dette mangler? Ja

Risiko 5: Fukt i kjellerbod (TG-2): Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt. Kjeller må holdes jevnt luftet og fuktømfintlige varer må unngås.
  Confidence: 0.95
  Evidens: Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt, noe som heller ikke er uvanlig for eldre kjellere.; Kjeller må holdes jevnt luftet samtidig som det unngås lagring av fuktømfintlige varer.; Ja. Nevnt i takstrapport, litt fukt i kjeller, ikke noe jeg er kjent med ut fra det.

Risiko 6: Avløpsrør og vannledninger har TG-2: Deler av avløp og vannrør har nådd høy alder med større risiko for skader i fremtiden.
  Confidence: 0.94
  Evidens: Avløpsrør | TG 2 er satt på grunn av at deler av avløp har nådd høy alder med større risiko for skader i tiden som kommer.; Vannledninger | TG 2 er satt på grunn av at deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer.

Risiko 7: Yttervegger har TG-2: Kledningen er ikke tilstrekkelig luftet, noe som gir større risiko for skader på grunn av sen uttørking.
  Confidence: 0.92
  Evidens: Kledningen er ikke tilstrekkelig luftet og har større risiko for skader på grunn av sen uttørking.; Er det liten eller ingen lufting av kledningen? Ja

Risiko 8: Grunnmur har TG-2: Avskalling i pusset overflate og behov for vedlikehold av overflater.
  Confidence: 0.9
  Evidens: Grunnmur har avskalling i pusset overflate. Grunnmur har behov for vedlikehold av overflater.

Risiko 9: Ventilasjon er mangelfull (TG-2): Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu.
  Confidence: 0.92
  Evidens: Ventilasjon: Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu.

Risiko 10: Kjøkken har kun kullfiltervifte (TG-2): Det er ikke etablert mekanisk avtrekk på kjøkkenet, kun kullfiltervifte.
  Confidence: 0.88
  Evidens: Kjøkken - Avtrekk: Det er kun etablert kullfiltervifte på kjøkkenet.

Risiko 11: Taket har tidligere lekket ved takhatten, og vann rant inn til naboen gjennom luftekanalen. Arbeidet er utbedret, men historikken representerer en risiko for fremtidige lekkasjer.
  Confidence: 0.88
  Evidens: Taket lakk i fjor ved Takhatten, rant vann inn til naboen under gjennom luftekanalen. Dette ble fikset av blikkenslager.; Fikset takhatten og lakasjen rundt der. Arbeid utført av Mesterblikk AS.

Risiko 12: Eiendommen er regulert med antikvarisk verdi klasse C og ligger i bevaringsområde (kulturmiljø). Dette begrenser muligheten for endringer av bygningens eksteriør og kan medføre krav fra kommunen ved fremtidige tiltak.
  Confidence: 0.9
  Evidens: Bygningen på eiendommen er registrert med antikvarisk verdi – klasse C.; I henhold til kommuneplanens bestemmelser § 9.2 skal bebyggelse i klasse C søkes bevart.; Ved tiltak som endrer bygningens uttrykk skal både antikvarisk verdi og funksjonalitet vektlegges.; Eiendommen er i kommuneplanens arealdel avsatt til bebyggelse og anlegg – framtidig, byggesone 3 og er merket bevaring kulturmiljø og naturmiljø.

Risiko 13: Det foreligger et planforslag (r20120010) for naboeiendommene Stavnevegen 25, 27 og 29 som legger til rette for bygging av boliger i tre bygg. Dette kan påvirke utsikt, sol- og lysforhold samt bomiljøet.
  Confidence: 0.88
  Evidens: Plan-ID r20120010 – Stavnevegen 25, 27 og 29 og gnr/bnr 95/578.; Hensikten med planen er å legge til rette for bygging av boliger i tre bygg med tilhørende anlegg og funksjoner.

Risiko 14: Reguleringsplan for eiendommen er fra 1932 (r0307 Vestbyen), og det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til. Dette skaper usikkerhet om fremtidig bruk og tillatte tiltak.
  Confidence: 0.82
  Evidens: Eiendommen er regulert i henhold til reguleringsplan 21.04.1942 – r0307 med navn Vestbyen, Trondheim.; Det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til.

Risiko 15: Boden som inngår i BRA-e og totalt BRA ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.
  Confidence: 0.9
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen.; Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet.

Risiko 16: Selger har ikke utført radonmåling. Dette er en potensiell helserisiko, særlig i en eldre bolig fra 1934 med kjeller.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling.; Er det foretatt radonmåling? Nei

Risiko 17: Avvik på krav til rømning, dagslysforhold eller HMS er registrert i tilstandsrapporten. Dette kan medføre krav fra kommunen om utbedring.
  Confidence: 0.88
  Evidens: Det er avvik på krav til rømning, dagslysforhold eller HMS.

Risiko 18: Boligen er fra 1934 og har energikarakter G (rød), som er laveste energiklasse. Dette innebærer høye energikostnader for kjøper.
  Confidence: 0.92
  Evidens: Byggeår: 1934; Energikarakter: G; Energifarge: Rød

Risiko 19: Sameiet holder ikke årsmøte/generalforsamling. Dette kan indikere svak organisering og manglende demokratisk styring av sameiet, noe som kan påvirke vedlikehold og fellesøkonomi.
  Confidence: 0.8
  Evidens: Styret opplyser om at det ikke holdes årsmøte/generalforsamling i sameiet.

Risiko 20: Stikkledninger for vann og avløp fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uventede kostnader ved fremtidige skader eller utskiftninger.
  Confidence: 0.82
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 21: Kjøper overtar ansvar, risiko og eventuelle konsekvenser knyttet til ulovlige byggearbeider (ikke godkjent plantegning), uavhengig av reaksjonsform fra kommunen.
  Confidence: 0.95
  Evidens: Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser om knyttet til dette.; Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg.

Dokumentkontekst:
[d191_d191 | Side [1]]
 tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
Tinglyste heftelser
det kommunale nettet er private, og
Tinglyste heftelser og rettigheter: På eiendommen er det vedlikeholdsansvaret for disse påhviler sameiet.
tinglyst følgende heftelser og rettigheter som følger Adkomst til eiendommen skjer via offentlig og privat vei.
eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Utleie
5001/9 5/ 45/ 4: Adgang til utleie: Utleie av boligen er tillatt med

---

[d191_d191 | Side [1]]
 en tillatesle om endringen.
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Beskrivelse Ja som nevt over med ikke godkjent tegning av dagens plantegning.
Initialer selger: MB 3
21006250
:ecnerefer
tnemucoD
50

## Side 51

Tilleggskommentar
Alle vinduene er byttet i mitt eie og det er

---

[d191_d191 | Side [1]]
het, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til

---

[d191_d191 | Side [1]]
og måte som BRA, men man ser bort fra krav til
pålegg. Uavhengig av reaksjonsform fra kommunen, himlingshøyde. Arealet inngår ikke i BRA, men opplyses
overtar kjøper ansvar, risiko og eventuelle konsekvenser om sammen med BRA som et tillegg.
knyttet til dette. GUA – summen av BRA og AHL. Brukes når boligen har
35

## Side 36

OM EIENDOMMEN
gulvareal som ikke er måleverdig på grunn av for
eksempel skråtak eller lav himlingshøyde. Arealet oppgis Stuen og kjøkkenet ligger i en delvis åpen løsning på 27
som

---

[d191_d191 | Side [1]]
jøpsrett i sameiet.
40

## Side 41

OM EIENDOMMEN
Regulerings og arealplaner
Eiendommen er regulert i henhold til reguleringsplan 21.04.1942 ‑ Dokumentnr: 301247 ‑ Bestemmelse om
r0307 med navn Vestbyen, Trondheim (strøket Stavne ‑ gjerde
Wullumnsgården). Det fremgår ikke av Overført fra: Knr:5001 Gnr:95 Bnr:45
planstatusdokumentet hva eiendommen er regulert til. Gjelder denne registerenheten med flere
Eiendommen er i kommuneplanens arealdel avsatt til 08.07.2002 ‑ Dokumentnr: 13385 ‑ Erklæring/

---

[d191_d191 | Side [1]]
rert stedvise totale avvik
Er det andre forhold av betydning ved eiendommen som på over 30mm, i tillegg til lokale skjevheter og knirk. Ikke
kan være relevant for kjøper å vite om (f.eks. rasfare, vurdert med behov for strakstiltak da skjevheter ikke er
tinglyste forhold eller private avtaler)? uvanlig for eldre boliger. Om avvik skal lukkes så må det
Ja. Ja som nevnt over med ikke godkjent tegning av utføres avretting av gulv. Kostnadsestimat kr. 20 000 ‑
dagens plantegning. 100 000.
Samsvarserklæring:

---

[d191_d191 | Side [1]]
t inventar og utstyr som i henhold
sameiet legal panterett i den enkelte eierseksjon, til gjeldende lover, forskrifter eller offentlige pålegg skal
begrenset til inntil 2 ganger folketrygdens grunnbeløp. følge med eiendommen, jf. avhendingsloven § 3‑4.
Fastmonterte eller spesialtilpassede installasjoner og
Kjøper og selger er forpliktet til å signere den standard innredning som anses som varig tilknyttet boligen, følger
kjøpekontrakten utarbeidet av Emera som en del av normalt med i handelen, med mindre

---

[d191_d191 | Side [1]]
lovverk legges BRA‑b ‑ Innglasset balkong, altan, terrasser.
til grunn ved omsøking. Disse setter blant annet krav til
takhøyde, lysflate, ventilasjon, rømningsvei og Andre arealer:
brannsikring. Fra kommunen kan det komme reaksjoner TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
overfor ny eier, ved f.eks. krav om tilbakeføring eller krav ALH ‑ Areal med lav himlingshøyde måles på samme
om omsøking, ileggelse av overtredelsesgebyr og måte som BRA, men man ser bort fra krav til
pålegg. Uavhengig

---

[d191_d191 | Side [1]]
domsskatt, renovasjon og feiing.
12 500,‑ (Boligkjøperforsikring (valgfritt))
260,‑ (Pantattest kjøper ‑ lagt ut av megler) Fakturert beløp for kommunale avgifter i 2025: 15 553,‑
545,‑ (Tingl.gebyr pantedokument)
545,‑ (Tingl.gebyr skjøte) Oppgitt beløp er et estimat for hele året. Det fakturerte
64 750,‑ (Dokumentavgift (forutsatt salgssum: 2 590 beløpet kan avvike fra estimatet.
000,‑))
Fellesgjeld
78 600,‑ (Omkostninger totalt)
Sameiet har ikke lån.
2 668 600,‑ (Totalpris inkl. omkostninger)
Andre

---

[d191_d191 | Side [1]]
dareid. (20.3.1935)
r0286 Eiendommen Nidarlid (12.7.1937)
r0286b Privat adkomstvei fra Stenserget til tomtene på A/S Nidarlids eiendom. (9.8.1939)
r0286c Fradeling av to boligtomter av eiendommen Steinberget 37 (5.7.1983)
r0286d Fradeling av en boligtomt av eiendommen Steinberget 35 (17.1.1984)
r0286f Deling av eiendommen Schnitlers veg 8 A (29.5.1985)
r0292 Sløyfing av jordbindelsesvei mellom Dyrborgveien og gate A, Sverresli. (13.10.1936)
r0294d Osloveien 99, gnr 101 bnr 107, Marienborg
r0307ab

---

[d191_d191 | Side [1]]
s ansvar etter
vedtektene, men den må være satt mellom 60 og 120 avhendingsloven begrenset oppad kr. 20 000 000,‑.
døgn. Med korttidsutleie menes utleie i en Egenerklæringsskjema er vedlagt salgsoppgaven og
sammenhengende periode på opptil 30 døgn. interessenter oppfordres til å gjennomgå denne før bud
inngis.
Radonmåling
Boligkjøperforsikring: Kjøper har anledning til å tegne
Selger har ikke utført radonmåling. Det er ikke krav om boligkjøperforsikring. Vedlagt i salgsoppgaven følger
dette med mindre

---

[d191_d191 | Side [1]]
eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Malte hele utsiden av huset. Byttet ut hele østveggen. Fikset takhatten og lakasjen rundt der.
Arbeid utført av Fs Maler Multiservices AS. Byggmester Hoffstad. Mesterblikk AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er

---

[d191_d191 | Side [1]]
endring
Hensikten med planen er å legge til rette for bygging av Tidligere: Knr:1601 Gnr:95 Bnr:45 Snr:4
boliger i tre bygg med tilhørende anlegg og funksjoner.
Dokumenter kan fås ved henvendelse til megler.
Kopi av situasjonskart, målebrev, reguleringsplaner m/
bestemmelser etc. ligger vedlagt i salgsoppgaven eller
kan fås ved henvendelse til megler. Vi oppfordrer
Vei, vann og avløp
interessenter til å gjøre seg kjent med disse.
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra

---

[d191_d191 | Side [1]]
hert)

## Side 30

Plantegning

## Side 31

Plantegning

## Side 32

STAVNEVEGEN 19
OM EIENDOMMEN

## Side 33

OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Eiendomsskatt
Kr 2 533,‑ (2023)
Prisantydning
Kr 2 590 000 Eiendomsskatten ble beregnet til kr 2 533,‑ i 2023.
Omkostning kjøper Kommunale avgifter
2 590 000,‑ (Prisantydning) Kr 15 553 (2025)
0,‑ (Andel av fellesgjeld)
Informasjon: Kommunale avgifter inkluderer vann, avløp,
Omkostninger: eiendomsskatt, renovasjon og feiing.
12 500,‑ (Boligkjøperforsikring

---

[d191_d191 | Side [1]]
jøperforsikring. Vedlagt i salgsoppgaven følger
dette med mindre boligen er helt eller delvis utleid. informasjon om Boligkjøperforsikring fra Söderberg &
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
Diverse
oppdages uventede feil eller mangler ved boligen de
Det informeres om at ingen kan eie mer enn to neste fem årene. Les mer om Boligkjøperforsikring i
boligseksjoner i sameiet, i henhold til eierseksjonsloven § vedlagte materiell

---

[d191_d191 | Side [1]]

Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
Idag har leiligheten 2 soverom, kjøkken og stue. De tegningene som foreligger har 2 hybler og felles kjøkken, bad.
Beskrivelse Den ene hybelen er delt i to med en lettvegg for å skape to soverom. Dette ble gjort før mitt eierskap, vet ikke når,
men leiligheten er veldig funksjonabel idag, men tror ikke det ligger en tillatesle om endringen.
23 Kjenner du til om det foreligger

---

[d191_d191 | Side [1]]
bebyggelse i klasse C søkes Snr: 4
bevart. Ved tiltak som endrer bygningens uttrykk skal Formål: Bolig
både antikvarisk verdi og funksjonalitet vektlegges. Sameiebrøk: 61/ 297
Bestemmelser om tilleggsdel, se under servitutter.
Vi gjør oppmerksom på følgende planforslag som berører Gjelder seksjon nr.1‑4
eiendommen:
Plan‑ID r20120010 ‑ Stavnevegen 25, 27 og 29 og gnr/ bnr 01.01.2018 ‑ Dokumentnr: 119022 ‑ Omnummerering ved
95/ 578. kommuneendring
Hensikten med planen er å legge til rette for bygging av

---

[d191_d191 | Side [1]]
ng, som bidrar til en
ryddig og oversiktlig inngang.
36

## Side 37

OM EIENDOMMEN
Dette medfølger boligen: Ja. Nevnt i takstrapport, litt fukt i kjeller, ikke noe jeg er
‑ Stekeovn kjent med ut fra det.
‑ Kjøleskap
‑ Oppvaskmaskin Kjenner du til om det er/ har vært utettheter i terrasse/
‑ Senger garasje/ tak/ fasade?
‑ Sofa Ja.
Faglært arbeid:
Beskrivelse av arbeidet: Taket lakk i fjor ved Takhatten,
Eiendommens
rant vann inn til naboen under gjennom luftekanalen.
Dette ble fikset av blikkenslager og

---

[d191_d191 | Side [1]]
msgrense dårlig
gjeldende nøyaktighet nøyaktighet
Eiendomsgrense generert Veg Hensyn bevaring naturmiljø
Hensyn bevaring kulturmiljø Forbudsgrense vassdrag Turveg / turdrag
Framtidig turveg / turdrag Jernbane - på bakken Sporveg
Kollektivtrase Fjernveg tunnel Fjernveg
Hovedvegnett sykkel Byggesone 1 Byggesone 2
Byggesone 3 Offentlig eller privat Framtidig idrettsanlegg
tjenesteyting
Grav og urnelund Blå/grønnstruktur LNFR
Bruk og vern av sjø og
vassdrag mm
28.01.2026 08:56:11 Det kan forekomme feil eller

---

[d191_d191 | Side [1]]
g må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
av om kjøper er forbrukerkjøper eller ikke, og dette er Dersom kjøper er en juridisk enhet, eller en fysisk person
nærmere forklart nedenfor. som handler i

---

[d191_d191 | Side [1]]
ring av ‑ Avløpsrør | TG 2 er satt på grunn av at deler av avløp har
drenering må påregnes om forhold i kjeller skal bedres. nådd høy alder med større risiko for skader i tiden som
kommer. Ikke vurdert med behov for tiltak da anlegget
‑ Grunnmur og fundament | Grunnmur har avskalling i fungerer idag.
pusset overflate. Grunnmur har behov for vedlikehold av
overflater. ‑ Vannledninger | TG 2 er satt på grunn av at deler av
vannrør har nådd høy alder med større risiko for skader i
‑ Rom under terreng ‑ Bod |

---

[d191_d191 | Side [1]]
kade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort

---

[d191_d191 | Side [1]]
gt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når

---

[d191_d191 | Side [1]]
kkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør

---

[d191_d191 | Side [1]]
ter indikeres fukt.
Yttervegger Kledningen er ikke tilstrekkelig luftet.
Kjøkken - Overflater og innredning Innredningen har stedvis slitasje. Funksjon vurderes å være ivaretatt.
Kjøkken - Avtrekk Det er kun etablert kullfiltervifte på kjøkkenet.
Avløpsrør Deler av avløp har nådd høy alder.
Vannledninger Deler av vannrør har nådd høy alder.
Ventilasjon Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu.
Våtrom: Bad - Overflater Gulvet har fall til sluk, men dette er mindre enn

---

[d191_d191 | Side [1]]
rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som

---

[d191_d191 | Side [1]]
apporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den

---

[d191_d191 | Side [1]]
al lukkes så må
det utføres avretting av gulv.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Drenering Drenering og overgangsrør fra nedløp har nådd en alder hvor det er
påregnelig med redusert funksjon. Dette underbygges ved registrert
fuktgjennomgang i kjellerbod.
Grunnmur og fundament Grunnmur har avskalling i pusset overflate.
Rom under terreng: Bod Ved bruk av fuktindikator mot fritt eksponerte murflater indikeres fukt.
Yttervegger Kledningen er ikke tilstrekkelig

---

[d191_d191 | Side [1]]
GIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Stavnevegen 19 , 7019 Trondheim 2 av 18
54

## Side 55

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på

---

[d191_d191 | Side [1]]
standsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 1934
BRA: 51 m2
BRA-i: 45 m2
Rapportdato: 2.2.2026 (Gyldig til 2.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 8 11 1 1
Fredrik Johnsen fj@tft.no Stavnevegen 19
GNR: 95 BNR: 45 SNR: 4
Takst-forum Trøndelag AS 91132028 7019 Trondheim
53

## Side 54

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen

---

[d191_d191 | Side [1]]
ruksjon.
6.9 Taktekking
Type takkonstruksjon Saltak
Type tekking Betongstein
Inspisert fra Annet
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Tekking er oppgradert etter byggeår men tidspunkt er ikke kjent.
Er det registrert skader, deformasjoner eller begroing på taktekkingen? Ikke kontrollert
Er det synlige avvik på beslag/inndekning rundt pipe og andre Ikke kontrollert
takgjennomføringer?
Har tekkingen nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Stavnevegen 19 , 7019

---

[d191_d191 | Side [1]]
dning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn

---

[d191_d191 | Side [1]]
ikke for særlig tunge møbler og inventar, når disse ikke skjuler vesentlige installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Stavnevegen 19 , 7019 Trondheim 3 av 18
55

## Side 56

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag.

---

[d191_d191 | Side [1]]
tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Bygningsdeler med TG3
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Etasjeskille og gulv på grunn Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over
30mm, i tillegg til lokale skjevheter. Ikke vurdert med behov for strakstiltak
da skjevheter ikke er uvanlig for eldre boliger. Om avvik skal lukkes så må
det utføres avretting av gulv.
Bygningsdeler med

---

[d191_d191 | Side [1]]
lder på drenering
ukjent.
Er det manglende fuktsikring i form av grunnmursplast på grunnmur, eller er det ut fra alder Ja
grunn til å anta at dette mangler?
Har drenering nådd en alder som gir økt risiko for skader eller følgeskader? Ja
Er det ved innvendig inspeksjon registrert symptom på nedsatt funksjon eller funksjonssvikt? Ja
Er bygningen utsatt for tilsig av overflatevann (terrengfall inn mot boligen)? Ikke kontrollerbart
Er kontrollert bortleding av vann fra taknedløp ved grunnmur mangelfull?

---

[d191_d191 | Side [1]]
 det gjennomført arbeider etter opprinnelig byggeår? Ja
Kledning bærer preg av å være byttet etter byggeår.
Er det påvist skjevheter/riss/sprekker/setninger? Nei
Er det påvist fuktskade/sopp/råte eller slitt overflate? Nei
Er det liten eller ingen lufting av kledningen? Ja
Er det manglende musetetting i nedkant av kledning/plater? Nei
Oppsummering av yttervegger TG-2
Kledningen er ikke tilstrekkelig luftet og har større risiko for skader på grunn av sen uttørking.
Anbefalte tiltak / ytterligere

---

[d191_d191 | Side [1]]
 rundt sluk? Nei
Stavnevegen 19 , 7019 Trondheim 16 av 18
68

## Side 69

Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Ja
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Ja
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja
Oppsummering av membran, tettesjikt og sluk TG-2
Badet har ikke etablert tettesjikt på vegger i våte soner. Tettesjikt i gulv har passert forventet
levetid.

---

[d191_d191 | Side [1]]
alder med større risiko for skader i
‑ Rom under terreng ‑ Bod | Ved bruk av fuktindikator tiden som kommer. Ikke vurdert med behov for tiltak da
mot fritt eksponerte murflater og gulv indikeres fukt, noe anlegget fungerer idag.
som heller ikke er uvanlig for eldre kjellere. Kjeller må
holdes jevnt luftet samtidig som det unngås lagring av Lovlighet / HMS:
fuktømfintlige varer. Bedring av forhold må sees i ‑ Det er avvik på krav til rømning, dagslysforhold eller
sammenheng med en fremtidig oppgradering av

---

[d191_d191 | Side [1]]
skader på grunn av sen uttørking.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Ikke vurdert med andre tiltak enn jevnlig tilsyn.
6.6 Renner og nedløp
Type Metall
Er det utført arbeider på anlegget etter byggeår? Ja
Renner og nedløp er oppgradert etter byggeår men tidspunkt er ikke kjent.
Er det synlige skader på renner/nedløp? Nei
Oppsummering av renner og nedløp TG-1
Ingen tegn til vesentlige skader registrert. Nedløp er vurdert ned til overgang for drensrør.
6.7 Skorstein over

---

[d191_d191 | Side [1]]
egget og/
Byggemåte
eller andre installasjoner (f.eks. oljetank, sentralfyr,
ventilasjon)? I forbindelse med salget er det blitt utført en
Ja. Tok elkontroll i februar 2024, der småfeil ble fiksa. tilstandsrapport av en bygningssakkyndig, som gir en
teknisk gjennomgang av boligen og påpeker eventuelle
Har du ladeanlegg/ ladeboks for elbil i dag? avvik. Rapporten, sammen med selgers egenerklæring,
Ja. Er satt opp ladebokser, en til hver parkeringsplass. er vedlagt salgsoppgaven. Det er viktig at

---

[d191_d191 | Side [1]]
meiets långiver(e): Saldo: Nedbet. dato: Rentesats: Avdrag: Bet. f.o.m.:
1
2
Hvis ja, hvor mye gjenst%r av
Betaler sameiet avdrag på fellesgjelden? Ja Nei nedbetalingstiden?
Hvis nei, n%r begynner det % l&pe avdrag? Hvis nei, hva blir de m%nedlige felleskostnadene etter avdragsfri
periode?
Hva er seksjonens andel fellesgjeld? Kr
Hvis ja: Hva er total formue? Seksjonens andel formue?
Har sameiet formue? Ja Nei
Kr Kr
Fellesutgifter og andre kostnader
Kr Hvis ja, restanse kr
Fellesutgifter pr. mnd.  Er det

---

[d191_d191 | Side [1]]
nader
Kr Hvis ja, restanse kr
Fellesutgifter pr. mnd.  Er det restanse? Ja Nei
Fellesutgiftene inkluderer:
Forfallsdato: 
Avregnes fellesutg.? Ja Nei Er det planlagt endringer av fellesutg.? Ja Nei
kr Dato
Hvis ja, ny fellesutgift: Når trer eventuell endring i kraft?
Poster til skattemeldingen
Seksjonens renteinntekter kr: Seksjonens renteutgifter kr:
Gebyr
Hvis ja, kr Kontonummer for betaling:
Tas det et gebyr for eierskiftet? Ja Nei
Hvis ja, kr Kontonummer for betaling:
Tas det et gebyr for

---

[d191_d191 | Side [1]]
sverdi sekundær: Kr 2 943 480 (2025)
Felleskostnadene inkluderer bygningsforsikring og andre Info om formuesverdi: Skatteetaten beregner en
driftskostnader for sameiet. Det er for tiden ikke planlagt boligverdi (beregnet markedsverdi for bolig) basert på
endringer i fellesutgiftene. SSBs statistiske opplysninger om omsatte boliger. I
beregningen tas det hensyn til din boligs beliggenhet,
På grunn av prisstigning og renteøkning tas det areal, byggeår og type bolig. Formuesverdien er en
forbehold om at

---

[d191_d191 | Side [1]]
nnredning, dusjkabinett og toalett.
Fellesarealer og rettigheter til
Leiligheten har lave månedlige felleskostnader og tilbyr
bruk
ekstra lagringsplass med en bod på ca. 6 kvm i felles
Det gjøres særskilt oppmerksom på at boden som er kjeller. Parkering følger med på felles biloppstillingsplass
medtatt i BRA‑e og totalt BRA, ligger på sameiets med tilgang til elbillader.
fellesareal, men disponeres av denne seksjonen. Sameiet
kan på et senere tidspunkt omdisponere bruken av dette Beliggenheten er attraktiv

---

[d191_d191 | Side [1]]
Styret opplyser
om at det ikke holdes årsmøte/ generalforsamling i
Adresse
sameiet.
Stavnevegen 19, 7019 TRONDHEIM
Vedtekter/ husordensregler
Gnr. 95, bnr. 45, snr. 4, ideell andel 1/ 1
i Trondheim kommune. Husordensreglene ligger vedlagt salgsoppgaven.
Selger Beboernes forpliktelser og
Mia Bjørndal
dugnader
Sameie
Sameiet har to offisielle dugnader årlig (vår og høst).
Sameiet Stavnevegen 19/ 21 Beboerne er også ansvarlige for ukentlig vask av tildelte
fellesarealer som ganger og trapper. Felles boder

---

[d191_d191 | Side [1]]
on. Badet har behov for
renovering. Frem til da så må det brukes dusjkabinett.
‑ Våtrom ‑ Bad ‑ Overflater | Gulvet har fall til sluk, men
dette er mindre enn referansenivået. Utbedring av
fallforhold må sees i sammenheng med en påregnelig
fremtidig oppgradering av rommet.
39

## Side 40

OM EIENDOMMEN
Styregodkjennelse: Det er ikke krav om styregodkjenning
Øvrig
av ny eier.
informasjon
Regnskap/ budsjett/ kostnadsøkninger: Styret opplyser
om at det ikke holdes årsmøte/ generalforsamling

---

[d191_d191 | Side [1]]
t har ikke lån.
2 668 600,‑ (Totalpris inkl. omkostninger)
Andre kostnader:
Estimert totalpris ink. omk
Andre utgifter: I tillegg til felleskostnader påløper
Kr 2 668 600 kostnader til for eksempel strøm, innboforsikring, diverse
abonnementer og lignende.
Felleskostnader
Formuesverdi
Felleskostnader kr 776,‑ pr. mnd
Formuesverdi primær: Kr 735 879 (2025)
Felleskostnader inkulderer: Totale felleskostnader per
måned: kr 776,‑ Formuesverdi sekundær: Kr 2 943 480 (2025)
Felleskostnadene inkluderer

---

[d191_d191 | Side [1]]
433
Org.nr: 936749259 Besøksadresse: Kjøpmannsgata 40, Trondheim 7011, trondheim@emera.no
76

## Side 77

Emera eiendomsmegling
Dyrehold
Hvis ja, hvordan praktiseres dyreholdet?
Er dyrehold tillatt? Ja Nei 
Fremleie/godkjennelse
Er fremleie tillatt? Ja Nei Evt. vilkår for fremleie?
Hvis ja, hvor skal s&knaden sendes?
Kreves styregodkjenning av ny eier? Ja Nei
Lån, andel fellesgjeld og formue
Sameiets långiver(e): Saldo: Nedbet. dato: Rentesats: Avdrag: Bet.

---

[d191_d191 | Side [1]]
sk av tildelte
fellesarealer som ganger og trapper. Felles boder og
Organisasjonsnummer: 984831552 uteboder for lagring av blant annet sykler er tilgjengelig.
Sameiets forsikringsselskap: Fremtind
Energimerke
Polisenummer fellesforsikring: 36281326/ 4 Energikarakter: G
Husdyr: Dyrehold er tillatt i henhold til husordensreglene. Energifarge: Rød
Dyrehold skal godkjennes av styret. Hold av hund og katt
Info energiklasse
skal meldes til styret. Det gis tillatelse for anskaffelse av
katter i sameiet forutsatt

---

[d191_d191 | Side [1]]
 
Informasjon om eiendommen
Gnr. Bnr. Snr. Kommune
Sameiets eiendommer:    
Sameiets org.nr:  Tomten er < eiet festet
Navn på bortfester: Festekontrakten utløper:
Hvis ja, hvem har sendt varselet?
Har sameiet mottatt nabovarsel? Ja Nei
Følger det s?rskilte forpliktelser
Foreligger det ferdigattest? Ja Nei Ja Nei
med denne seksjonen?
Forsikringsselskap og polisenr.

Forsikring for sameiet
Hvis ja, oppgi forsikringsselskap og polisenr.
Har

---

[d191_d191 | Side [1]]
 i sameiet, i henhold til eierseksjonsloven § vedlagte materiell eller på https:/ /
23. Seksjoner som eies av nærstående eller gjennom et www.soderbergpartners.no/ eiendom/ boligkjoper/
firma regnes også med.
Lovanvendelse
I henhold til eierseksjonsloven § 31 er sameierne
ansvarlige overfor sameiets kreditorer i forhold til sin Regelverk og generelle opplysninger
sameiebrøk. Ved manglende betaling av fellesutgifter har Boligen selges med det inventar og utstyr som i henhold
sameiet legal panterett i den

---

[d191_d191 | Side [1]]
/9 5/ 45/ 4: Adgang til utleie: Utleie av boligen er tillatt med styrets
14.09.1915 ‑ Dokumentnr: 900153 ‑ Erklæring/ avtale godkjenning. Før innflytting av ny leietaker må styret
Rett for kommunen til å anlegge og vedlikeholde godkjenne denne. Andelseier plikter å melde utleie til
ledninger m.m. styret. Sameier er ansvarlig for alle forpliktelser knyttet til
Overført fra: Knr:5001 Gnr:95 Bnr:45 seksjonen, inkludert økonomisk ansvar som skyldes
Gjelder denne registerenheten med flere leietakers

---

[d191_d191 | Side [1]]
ang ved nød
Sameiet forbeholder seg retten til å ta seg inn i en leilighet når dette anses tvingende nødvendig
for å sikre fellesskapets verdier, for eksempel ved vann- eller brannskader, og dersom sameier
er bortreist og ikke kan kontaktes.
Leiligheten skal sikres etterpå. Kostnader som ikke dekkes av sameiets forsikring belastes
sameier og dennes innboforsikring.
På vegne av styret
Styreleder
04.03.2026
82

## Side 83

Planstatus
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr Adresse
5001 - Trondheim

---

[d191_d191 | Side [1]]

Sted, dato Signatur
I tillegg ber vi om å få tilsendt:
Kopi av siste års regnskap/budsjett/årsberetning
Kopi av siste innkalling og referat fra siste årsmAte/generalforsamling
Kopi av vedtekter/husordensregler
Kopi av nedbetalingsplanen for sameiets lån
Kopi av styrevedtak som kan v?re av interesse for interessenter/ny eier
Opplysningene bes returnert til vårt kontor snarest mulig, gjerne på e-post trondheim@emera.no.
På forhånd takk!
Med vennlig hilsen for Emera
Era eiendomsmegling AS
Era

---

[d191_d191 | Side [1]]
isitet. Det er en
teglsteinspipe som er oppgradert med innvendig stålrør,
Styret kan nekte dyrehold og pålegge dyret fjernet når men ingen ildsted er montert.
styret finner det nødvendig av hensyn til andre beboere,
trivselen innen sameiet eller når reglene for dyrehold ikke Hvis et rom på visningen mangler fast installert
er fulgt. oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Forkjøpsrett: Det foreligger ikke forkjøpsrett i sameiet.
40

## Side 41

OM EIENDOMMEN
Regulerings og

---

[d191_d191 | Side [1]]
tal investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Legg ID her Legg ID her

## Side 131

Budskjema
KJØPESUM KR + omkostninger ihht. opplysninger i salgsoppgaven
Kjøpet finansieres slik:
Din bolig.
BANK/FINANSIERINGSINSTITUSJON: REFERANSE & TELEFONNUMMER SUM:
Kr.
Kr.
Din historie.
Kr.
Kr.
Det er Emera.
EGENKAPITAL: Kr.
TOTALT:
EGENKAPITAL BESTÅR AV:
Salg av nåværende bolig eller annen fast eindom
Disponibelt kontant beløp

---

[d191_d191 | Side [1]]
a leiligheten har man fin utsikt mot
nærliggende boligområder og natur.
Mellom stue og kjøkken er det en
naturlig plass for spisegruppe.

## Side 17

Delvis åpen stue‑ og kjøkkenløsning på
27 kvm.
Lyst kjøkken som har godt med plass til
matlaging og oppbevaring.

## Side 18

(Ingen tekst ekstrahert)

## Side 19

Funksjonelt kjøkken med flere soner
som gjør matlagingen enkel.

## Side 20

Her er det lave månedlige
felleskostnader på kun kr 776,‑.

## Side 21

(Ingen tekst ekstrahert)

## Side 22

(Ingen

---

[d191_d191 | Side [1]]
eller svikt i etasjeskille/gulv? Ja
Oppsummering av etasjeskille og gulv på grunn TG-3
Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale
skjevheter og knirk.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Ikke vurdert med behov for strakstiltak da skjevheter ikke er uvanlig for eldre boliger. Om avvik skal
lukkes så må det utføres avretting av gulv.
Kostnadsestimat 20 000 - 100 000
6.11 Ildsted/Skorstein innvendig i boligen
Type pipe

---

[d191_d191 | Side [1]]
slag RpOmråde vedtatt linje - på RpOmråde vedtatt - på
bakkenivå bakkenivå
Eiendomsgrense god Eiendomsgrense dårlig Eiendomsgrense generert
nøyaktighet nøyaktighet
Veg Riksveg gatenavn . Kommunalveg gatenavn .
Privatveg gatenavn . Midlertidig bygge- og Plan dispensasjon punkt
anleggsområde
RpFormålGrense RpGrense Avkjørsel - både inn og
utkjøring
Regulert tomtegrense Byggegrense Planlagt bebyggelse
Bebyggelse som inngår i Bebyggelse som forutsettes Regulert senterlinje
planen fjernet
Frisiktlinje Regulert

---

[d191_d191 | Side [1]]

MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr Adresse
5001 - Trondheim 95 45 0 4 Stavnevegen 19, 7019 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Bebyggelse og anlegg - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 662.5m2
Bevaring kulturmiljø Kommuneplanens arealdel 2022-2034 (27.3.2025) 662.5m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn
Ja
5001 r0307 Vestbyen, Trondheim

---

[d191_d191 | Side [1]]
 arealdel avsatt til 08.07.2002 ‑ Dokumentnr: 13385 ‑ Erklæring/ avtale
bebyggelse og anlegg ‑ framtidig, byggesone 3 og er Denne seksjon har tilleggsdel ‑ bygning.
merket bevaring kulturmiljø og naturmiljø. Gjelder denne registerenheten med flere
Bygningen på eiendommen er registrert med antikvarisk 08.07.2002 ‑ Dokumentnr: 13385 ‑ Seksjonering
verdi ‑ klasse C. I henhold til kommuneplanens Opprettet seksjoner:
bestemmelser § 9.2 skal bebyggelse i klasse C søkes Snr: 4
bevart. Ved tiltak som endrer

---

[d191_d191 | Side [1]]
innekartet: Trykk i kartet og “popup” med
informasjon vises. Bla med pilene til popupen som heter "Bevaringsområde i
reguleringsplan". Der er det lenke til aktuell reguleringsplan: bestemmelser og plankart.
Hvis popupen mangler lenke, scroll oppover. Øverst er det alltid informasjon.
Hensynssone kulturmiljø i kommuneplanens arealdel (KPA)
Hensynssoner kulturmiljø i KPA har grå horisontal skravur.
I Kommuneplanens arealdel er det bestemmelser og retningslinjer om hensynssoner
kulturmiljø. Alle hensynssoner

---

[d191_d191 | Side [1]]
settes Regulert senterlinje
planen fjernet
Frisiktlinje Regulert støyskjerm Bru
Frisiktsone ved veg Bolig Kjøreveg
Annen veggrunn Gang-/sykkelveg Jernbane
Felles avkjørsel Veg Gang-/sykkelveg
Annen veggrunn - grøntareal
28.01.2026 08:56:20 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
90

## Side 91

Kulturminnekartet
Eiendom: Gnr: 95 Bnr: 45 Fnr: 0 Snr: 4
Adresse: Stavnevegen 19
Målestokk
7019 TRONDHEIM
Trondheim 1:1000
Annen info:
28.01.2026 08:56:22 Det kan forekomme

---

[d191_d191 | Side [1]]
ups vei. Roald Amundsens vei. (8.2.1956)
r20170007 Osloveien 129 (20.11.2025)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Nei
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Ja
5001 r20120010 Stavnevegen 25, 27 og 29 og gnr/bnr 95/578
KOMMENTARFELT:
Det tas forbehold om feil og

---

[d191_d191 | Side [1]]
n om disse kulturminnene, som inkluderer områder og arkeologiske minner,
gå til kulturminnesok.no. Visning i kartet av freda kulturminner og sikringssoner hentes
direkte fra Riksantikvarens karttjeneste (wms).
94

## Side 95

Bevaringsområde i reguleringsplan
Bevaringsregulerte områder har svart vertikal skravur.
Her gjelder detaljerte bestemmelser for blant annet bygningers eksteriør og utomhusmiljø.
Reguleringsplanen kan du finne i Kulturminnekartet: Trykk i kartet og “popup” med
informasjon vises. Bla

---

[d191_d191 | Side [1]]
gulert område?
PLANID Plannavn
Ja
5001 r0307 Vestbyen, Trondheim (strøket Stavne - Wullumnsgården) (16.11.1932)
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r0046a Gamle Åsvei 57, gnr.94/87, 79, 270, 54. (26.8.2004)
r0223 Delings- og bebyggelsesplan for Utsikten ( Byåsvegen 107 ) (21.3.1961)
r0223a Forslag til reguleringsendring for eiendommene Utsikten alle´ 8 og Jakobstien 7 B (11.4.1978)
r0283a Utparselering av haven på eiendommen Nidareid. (20.3.1935)
r0286 Eiendommen Nidarlid (12.7.1937)
r0286b

---

[d191_d191 | Side [1]]
 og
vassdrag mm
28.01.2026 08:56:11 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
87

## Side 88

88

## Side 89

Reguleringsplaner
Eiendom: Gnr: 95 Bnr: 45 Fnr: 0 Snr: 4
Adresse: Stavnevegen 19
Målestokk
7019 TRONDHEIM
Trondheim 1:1000
Annen info:
28.01.2026 08:56:20 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
89

## Side 90

Tegnforklaring
RpOmråde forslag RpOmråde vedtatt linje - på RpOmråde vedtatt - på
bakkenivå

---

[d191_d191 | Side [1]]
 følger med en unummerert parkeringsplass med
hverdagen. Området kombinerer nærhet til sentrum med tilgang til elbillader.
enkel tilgang til grønne omgivelser, som Bymarka.
Adkomst
Det er gangavstand til flere skoler, som Åsveien skole og
ressurssenter og Sverresborg skole. For de yngste ligger På høyre side i annonsen finner du et kartutsnitt. Ved å
Stavne To‑Språklige barnehage bare en kort spasertur klikke på kartet kan du enkelt planlegge din rute fra valgt
unna. De daglige innkjøpene kan enkelt gjøres

---

[d191_d191 | Side [1]]
l eller
kollektivtransport til Trondheim sentrum. Utforsk de Det foreligger ikke ferdigattest eller midlertidig
sjarmerende gatene på Bakklandet, nyt et måltid på en brukstillatelse for eiendommen i kommunens arkiver.
av byens anerkjente restauranter eller opplev teater på
Nye Hjorten teater. Beliggenheten gir deg friheten til å Jf. plan‑ og bygningsloven § 21‑10 (5) utstedes det ikke
nyte det beste fra to verdener, et rolig og familievennlig lengre ferdigattest for tiltak det er søkt om før

---

[d191_d191 | Side [1]]
 

118

## Side 119

 

119

## Side 120

Nabolagsprofil
Stavnevegen 19 - Nabolaget Stavne/Sommerlyst - vurdert av 44 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Etablerere Veldig trygt 88/100
Familier med barn
Kvalitet på skolene
Husdyreiere
Veldig bra 81/100
Naboskapet
Offentlig transport Godt vennskap 68/100
Thaulowbakken 1 min
Linje 13, 20, 23, 52,

---

[d191_d191 | Side [1]]
eal, byggeår og type bolig. Formuesverdien er en
forbehold om at felleskostnader kan øke. prosentandel av denne boligverdien.For mer informasjon
om formuesverdi, se Skatteetatens nettsider.
33

## Side 34

OM EIENDOMMEN
førstegangskjøpere og pendlere.
Beliggenhet
Stavnevegen 19 har en attraktiv beliggenhet i et etablert
Parkering
og rolig boligområde på Stavne. Her bor du
tilbaketrukket, men har samtidig kort vei til alt du trenger i Det følger med en unummerert parkeringsplass med
hverdagen. Området

---

[d191_d191 | Side [1]]
6 08:56:22 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
92

## Side 93

Om Kulturminnekartet
Eksempel på kartutsnitt.
Tegnforklaring
Kartplott som viser følgende, vedrørende kulturminner og
kulturmiljøer:
● Bevaringsområder i reguleringsplan
● Hensynssoner kulturmiljø i kommuneplanens arealdel (KPA)
● Antikvarisk verdifull bebyggelse - klasse A, B og C.
● Freda kulturminner, inkludert freda bygninger og sikringssoner
93

## Side 94

Mer om hva Kulturminnekartet

---

[d191_d191 | Side [1]]
og retningslinjer om hensynssoner
kulturmiljø. Alle hensynssoner er beskrevet med tekst og foto i et vedlegg til KPA. Det er
tilgang til både beskrivelser og bestemmelser via samme nettside som nevnt tidligere:
trondheim.kommune.no/byantikvaren/kartinfo
Bygninger kan i tillegg ha beskyttelse gjennom reguleringsplan eller fredning.
95

## Side 96

96

## Side 97

97

## Side 98

98

## Side 99

99

## Side 100

100

## Side 101

101

## Side 102

102

## Side 103

103

## Side 104

104

## Side 105

105

##

---

[d191_d191 | Side [1]]
entet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
120

## Side 121

Primære transportmidler Varer/Tjenester
Byåsen Butikksenter 24 min
1. Egen bil
Sykehusapoteket i Trondheim 16 min
2. Sykkel
3. Gående
Aldersfordeling barn (0-18 år)
Kvalitet på barnehagene 35% i barnehagealder
40% 6-12 år
Veldig bra

---

[d191_d191 | Side [1]]


Tilleggskommentar
Alle vinduene er byttet i mitt eie og det er varmtvannstanken med watergard innstallert også.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er

---

[d191_d191 | Side [1]]
an ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og

---

[d191_d191 | Side [1]]
orsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter

---

[d191_d191 | Side [1]]
geiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har

---

[d191_d191 | Side [1]]
te koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre

---

[d191_d191 | Side [1]]
sjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer

---

[d191_d191 | Side [1]]
ruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper

---

[d191_d191 | Side [1]]
pe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg

---

[d191_d191 | Side [1]]
enset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og

---

[d191_d191 | Side [1]]
dekningssalg for Timepris ved slik beregning er kr 3500.
kjøpers regning.
Dersom selger ikke bidrar til at megler får gjennomført
Oppdragsanvarlig
løpende kundetiltak underveis i oppdraget, må
eiendomsmegler stanse gjennomføringen av Eskil Wahl
transaksjonen. Selger vil i et slikt tilfelle ha misligholdt Daglig leder | Eiendomsmegler | Partner
sine forpliktelser, og kjøper vil kunne ha et krav mot eskil.wahl@emera.no
selger etter avhendingsloven. Tlf: 970 54 433
Hvis kundetiltak ikke lar seg gjennomføre,

---

[d191_d191 | Side [1]]
et oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom

---

[d191_d191 | Side [1]]
 eller en fysisk person
nærmere forklart nedenfor. som handler i næringssammenheng, regnes kjøpet ikke
som et forbrukerkjøp.
Budgivning og selgers vurdering
På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
43

## Side 44

OM EIENDOMMEN
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene budrunden. I forbrukerforhold (dvs. der selger

---

[d191_d191 | Side [1]]
ver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje,

---

[d191_d191 | Side [1]]
 utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende
garanti fra produsent eller leverandør.
Standard
Velkommen hjem! Kjøper aksepterer at det kan forekomme hull og merker
Ved entréen ønskes man velkommen inn i en etter montering av inventar og utstyr som ikke er en del
sjarmerende loftsleilighet. Her finnes en funksjonell nisje av overdragelsen.
perfekt for oppbevaring og klesheng, som bidrar til en
ryddig og oversiktlig inngang.
36

## Side

---

[d191_d191 | Side [1]]
er står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen. Dette gjelder uavhengig av om som handler hovedsakelig som ledd

---

[d191_d191 | Side [1]]
r eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Etasjeskille og gulv har TG-3: Stedvise totale avvik på over 30mm, lokale skjevheter og knirk. Kostnadsestimat for utbedring er kr 20 000 – 100 000.",
      "evidence": [
        "Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale skjevheter og knirk.",
        "Om avvik skal lukkes så må det utføres avretting av gulv. Kostnadsestimat kr. 20 000 - 100 000.",
        "Bygningsdeler med TG3: Etasjeskille og gulv på grunn – Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale skjevheter."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R02",
      "description": "Manglende ferdigattest og brukstillatelse. Dagens plantegning (2 soverom) er ikke godkjent – opprinnelige tegninger viser 2 hybler og felles kjøkken/bad. En lettvegg ble satt opp for å dele hybel i to soverom uten tillatelse.",
      "evidence": [
        "Idag har leiligheten 2 soverom, kjøkken og stue. De tegningene som foreligger har 2 hybler og felles kjøkken, bad.",
        "Den ene hybelen er delt i to med en lettvegg for å skape to soverom. Dette ble gjort før mitt eierskap, vet ikke når, men leiligheten er veldig funksjonabel idag, men tror ikke det ligger en tillatesle om endringen.",
        "Det foreligger ikke ferdigattest eller midlertidig brukstillatelse for eiendommen i kommunens arkiver.",
        "Ja som nevnt over med ikke godkjent tegning av dagens plantegning."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R03",
      "description": "Badet har TG-2 med alvorlige fuktrelaterte avvik: Manglende tettesjikt på vegger i våte soner, tettesjikt i gulv har passert forventet levetid, og det er påvist tegn på utettheter. Badet har behov for full renovering.",
      "evidence": [
        "Badet har ikke etablert tettesjikt på vegger i våte soner. Tettesjikt i gulv har passert forventet levetid.",
        "Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Ja",
        "Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Ja",
        "Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja",
        "Badet har behov for renovering. Frem til da så må det brukes dusjkabinett."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R04",
      "description": "Drenering har TG-2: Drenering og overgangsrør fra nedløp har nådd en alder med påregnelig redusert funksjon, understøttet av registrert fuktgjennomgang i kjellerbod. Alder på drenering er ukjent.",
      "evidence": [
        "Drenering og overgangsrør fra nedløp har nådd en alder hvor det er påregnelig med redusert funksjon. Dette underbygges ved registrert fuktgjennomgang i kjellerbod.",
        "Alder på drenering ukjent.",
        "Er det ved innvendig inspeksjon registrert symptom på nedsatt funksjon eller funksjonssvikt? Ja",
        "Er det manglende fuktsikring i form av grunnmursplast på grunnmur, eller er det ut fra alder grunn til å anta at dette mangler? Ja"
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R05",
      "description": "Fukt i kjellerbod (TG-2): Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt. Kjeller må holdes jevnt luftet og fuktømfintlige varer må unngås.",
      "evidence": [
        "Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt, noe som heller ikke er uvanlig for eldre kjellere.",
        "Kjeller må holdes jevnt luftet samtidig som det unngås lagring av fuktømfintlige varer.",
        "Ja. Nevnt i takstrapport, litt fukt i kjeller, ikke noe jeg er kjent med ut fra det."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R06",
      "description": "Avløpsrør og vannledninger har TG-2: Deler av avløp og vannrør har nådd høy alder med større risiko for skader i fremtiden.",
      "evidence": [
        "Avløpsrør | TG 2 er satt på grunn av at deler av avløp har nådd høy alder med større risiko for skader i tiden som kommer.",
        "Vannledninger | TG 2 er satt på grunn av at deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R07",
      "description": "Yttervegger har TG-2: Kledningen er ikke tilstrekkelig luftet, noe som gir større risiko for skader på grunn av sen uttørking.",
      "evidence": [
        "Kledningen er ikke tilstrekkelig luftet og har større risiko for skader på grunn av sen uttørking.",
        "Er det liten eller ingen lufting av kledningen? Ja"
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R08",
      "description": "Grunnmur har TG-2: Avskalling i pusset overflate og behov for vedlikehold av overflater.",
      "evidence": [
        "Grunnmur har avskalling i pusset overflate. Grunnmur har behov for vedlikehold av overflater."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R09",
      "description": "Ventilasjon er mangelfull (TG-2): Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu.",
      "evidence": [
        "Ventilasjon: Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Kjøkken har kun kullfiltervifte (TG-2): Det er ikke etablert mekanisk avtrekk på kjøkkenet, kun kullfiltervifte.",
      "evidence": [
        "Kjøkken - Avtrekk: Det er kun etablert kullfiltervifte på kjøkkenet."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Taket har tidligere lekket ved takhatten, og vann rant inn til naboen gjennom luftekanalen. Arbeidet er utbedret, men historikken representerer en risiko for fremtidige lekkasjer.",
      "evidence": [
        "Taket lakk i fjor ved Takhatten, rant vann inn til naboen under gjennom luftekanalen. Dette ble fikset av blikkenslager.",
        "Fikset takhatten og lakasjen rundt der. Arbeid utført av Mesterblikk AS."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Eiendommen er regulert med antikvarisk verdi klasse C og ligger i bevaringsområde (kulturmiljø). Dette begrenser muligheten for endringer av bygningens eksteriør og kan medføre krav fra kommunen ved fremtidige tiltak.",
      "evidence": [
        "Bygningen på eiendommen er registrert med antikvarisk verdi – klasse C.",
        "I henhold til kommuneplanens bestemmelser § 9.2 skal bebyggelse i klasse C søkes bevart.",
        "Ved tiltak som endrer bygningens uttrykk skal både antikvarisk verdi og funksjonalitet vektlegges.",
        "Eiendommen er i kommuneplanens arealdel avsatt til bebyggelse og anlegg – framtidig, byggesone 3 og er merket bevaring kulturmiljø og naturmiljø."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R13",
      "description": "Det foreligger et planforslag (r20120010) for naboeiendommene Stavnevegen 25, 27 og 29 som legger til rette for bygging av boliger i tre bygg. Dette kan påvirke utsikt, sol- og lysforhold samt bomiljøet.",
      "evidence": [
        "Plan-ID r20120010 – Stavnevegen 25, 27 og 29 og gnr/bnr 95/578.",
        "Hensikten med planen er å legge til rette for bygging av boliger i tre bygg med tilhørende anlegg og funksjoner."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R14",
      "description": "Reguleringsplan for eiendommen er fra 1932 (r0307 Vestbyen), og det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til. Dette skaper usikkerhet om fremtidig bruk og tillatte tiltak.",
      "evidence": [
        "Eiendommen er regulert i henhold til reguleringsplan 21.04.1942 – r0307 med navn Vestbyen, Trondheim.",
        "Det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R15",
      "description": "Boden som inngår i BRA-e og totalt BRA ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen.",
        "Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R16",
      "description": "Selger har ikke utført radonmåling. Dette er en potensiell helserisiko, særlig i en eldre bolig fra 1934 med kjeller.",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Avvik på krav til rømning, dagslysforhold eller HMS er registrert i tilstandsrapporten. Dette kan medføre krav fra kommunen om utbedring.",
      "evidence": [
        "Det er avvik på krav til rømning, dagslysforhold eller HMS."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R18",
      "description": "Boligen er fra 1934 og har energikarakter G (rød), som er laveste energiklasse. Dette innebærer høye energikostnader for kjøper.",
      "evidence": [
        "Byggeår: 1934",
        "Energikarakter: G",
        "Energifarge: Rød"
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R19",
      "description": "Sameiet holder ikke årsmøte/generalforsamling. Dette kan indikere svak organisering og manglende demokratisk styring av sameiet, noe som kan påvirke vedlikehold og fellesøkonomi.",
      "evidence": [
        "Styret opplyser om at det ikke holdes årsmøte/generalforsamling i sameiet."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R20",
      "description": "Stikkledninger for vann og avløp fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uventede kostnader ved fremtidige skader eller utskiftninger.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R21",
      "description": "Kjøper overtar ansvar, risiko og eventuelle konsekvenser knyttet til ulovlige byggearbeider (ikke godkjent plantegning), uavhengig av reaksjonsform fra kommunen.",
      "evidence": [
        "Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser om knyttet til dette.",
        "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg."
      ],
      "source_documents": [
        "d191_d191"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    }
  ],
  "reasoning": "\nGjennomgang av alle 21 identifiserte risikoer mot dokumentevidensen:\n\n**Godt dokumenterte risikoer (beholdes med høy confidence):**\n- R01 (TG-3 gulv): Direkte bekreftet i takstrapportens sammendrag og detaljert beskrivelse. Confidence opprettholdes på 0.98.\n- R02 (Manglende ferdigattest/ulovlig vegg): Bekreftet i egenerklæring, salgsoppgave og kommunens arkiver. Confidence justeres opp til 0.98 da dette er særlig alvorlig og godt dokumentert.\n- R03 (Bad TG-2, fukt): Bekreftet med multiple ja-svar i takstrapport og anbefaling om dusjkabinett. Confidence 0.97 opprettholdes.\n- R21 (Kjøper overtar ansvar for ulovligheter): Direkte sitert i salgsoppgaven. Confidence 0.97 opprettholdes.\n\n**Godt dokumenterte risikoer (beholdes med justert confidence):**\n- R12 (Antikvarisk verdi klasse C): Evidensen er sterk og direkte sitert fra planstatusdokument og kommuneplan. Confidence justeres opp fra 0.90 til 0.92 da dette er eksplisitt nevnt i planstatus.\n- R15 (Bod på fellesareal): Eksplisitt advarsel i salgsoppgaven. Confidence justeres opp fra 0.90 til 0.92.\n- R17 (HMS-avvik): Evidensen er noe vag – kun én setning uten spesifisering av hvilke avvik. Confidence justeres ned fra 0.88 til 0.82 da det mangler detaljer om hvilke konkrete avvik som er registrert.\n- R14 (Gammel reguleringsplan): Evidensen bekrefter at planen er fra 1932/1942 og at formål ikke fremgår. Confidence justeres ned fra 0.82 til 0.80 da dette er en usikkerhet snarere enn en konkret risiko.\n- R19 (Ingen årsmøter): Bekreftet i styrets opplysninger. Confidence justeres opp fra 0.80 til 0.82 da dette er et faktum, men konsekvensene er usikre.\n\n**Risikoer som mangler kostnadsestimat eller detaljer:**\n- R03 (Bad): Ingen kostnadsestimat er oppgitt i dokumentene for badrenovering. Dette er en mangel i risikovurderingen.\n- R04 (Drenering): Ingen kostnadsestimat oppgitt.\n- R06 (Rør): Ingen kostnadsestimat oppgitt.\n\n**Mulige manglende risikoer identifisert:**\n1. Kjøkkenoverflater har TG-2 med stedvis slitasje – nevnt i takstrapportens sammendrag men ikke identifisert som egen risiko.\n2. Taktekking er ikke kontrollert (TG-IU) – takstrapportens sammendrag viser 1 TG-IU, men dette er ikke identifisert som risiko. Taktekking er oppgradert men tidspunkt er ukjent, og det er ikke kontrollert for skader eller beslag rundt takgjennomføringer.\n3. Sameiet har kun 2 seksjoner (liten organisasjon) – kombinert med manglende årsmøter øker dette risikoen for konflikter og manglende vedlikehold.\n\n**Re-retrieval queries foreslås for:**\n- Detaljer om HMS-avvik (rømning, dagslys) – hva er de konkrete avvikene?\n- TG-IU posten i takstrapporten – hva er ikke undersøkt?\n- Kostnadsestimater for bad, drenering og rør\n- Detaljer om kjøkkenoverflater TG-2\n- Sameiets størrelse og økonomi (regnskap/budsjett)\n",
  "re_retrieval_queries": [
    "HMS avvik rømning dagslys konkrete detaljer tilstandsrapport",
    "TG-IU ikke undersøkt takstrapport Stavnevegen 19",
    "kostnadsestimat bad renovering drenering rør utbedring",
    "kjøkken overflater innredning slitasje TG-2 tilstandsgrad",
    "sameiet regnskap budsjett økonomi formue fellesutgifter",
    "bad gulvfall sluk referansenivå TG-2 detaljer",
    "taktekking betongstein kontroll beslag takgjennomføringer"
  ]
}

## Raw Response
```json
{
  "id": "msg_01YC4UE8mYjbPptKEGuvygjD",
  "container": null,
  "content": [
    {
      "id": "toolu_01StQkWwngeqkkvmEx8Ty9za",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Etasjeskille og gulv har TG-3: Stedvise totale avvik på over 30mm, lokale skjevheter og knirk. Kostnadsestimat for utbedring er kr 20 000 – 100 000.",
            "evidence": [
              "Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale skjevheter og knirk.",
              "Om avvik skal lukkes så må det utføres avretting av gulv. Kostnadsestimat kr. 20 000 - 100 000.",
              "Bygningsdeler med TG3: Etasjeskille og gulv på grunn – Med bruk av nivelleringslaser ble det registrert stedvise totale avvik på over 30mm, i tillegg til lokale skjevheter."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R02",
            "description": "Manglende ferdigattest og brukstillatelse. Dagens plantegning (2 soverom) er ikke godkjent – opprinnelige tegninger viser 2 hybler og felles kjøkken/bad. En lettvegg ble satt opp for å dele hybel i to soverom uten tillatelse.",
            "evidence": [
              "Idag har leiligheten 2 soverom, kjøkken og stue. De tegningene som foreligger har 2 hybler og felles kjøkken, bad.",
              "Den ene hybelen er delt i to med en lettvegg for å skape to soverom. Dette ble gjort før mitt eierskap, vet ikke når, men leiligheten er veldig funksjonabel idag, men tror ikke det ligger en tillatesle om endringen.",
              "Det foreligger ikke ferdigattest eller midlertidig brukstillatelse for eiendommen i kommunens arkiver.",
              "Ja som nevnt over med ikke godkjent tegning av dagens plantegning."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R03",
            "description": "Badet har TG-2 med alvorlige fuktrelaterte avvik: Manglende tettesjikt på vegger i våte soner, tettesjikt i gulv har passert forventet levetid, og det er påvist tegn på utettheter. Badet har behov for full renovering.",
            "evidence": [
              "Badet har ikke etablert tettesjikt på vegger i våte soner. Tettesjikt i gulv har passert forventet levetid.",
              "Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Ja",
              "Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Ja",
              "Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja",
              "Badet har behov for renovering. Frem til da så må det brukes dusjkabinett."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R04",
            "description": "Drenering har TG-2: Drenering og overgangsrør fra nedløp har nådd en alder med påregnelig redusert funksjon, understøttet av registrert fuktgjennomgang i kjellerbod. Alder på drenering er ukjent.",
            "evidence": [
              "Drenering og overgangsrør fra nedløp har nådd en alder hvor det er påregnelig med redusert funksjon. Dette underbygges ved registrert fuktgjennomgang i kjellerbod.",
              "Alder på drenering ukjent.",
              "Er det ved innvendig inspeksjon registrert symptom på nedsatt funksjon eller funksjonssvikt? Ja",
              "Er det manglende fuktsikring i form av grunnmursplast på grunnmur, eller er det ut fra alder grunn til å anta at dette mangler? Ja"
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R05",
            "description": "Fukt i kjellerbod (TG-2): Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt. Kjeller må holdes jevnt luftet og fuktømfintlige varer må unngås.",
            "evidence": [
              "Ved bruk av fuktindikator mot fritt eksponerte murflater og gulv indikeres fukt, noe som heller ikke er uvanlig for eldre kjellere.",
              "Kjeller må holdes jevnt luftet samtidig som det unngås lagring av fuktømfintlige varer.",
              "Ja. Nevnt i takstrapport, litt fukt i kjeller, ikke noe jeg er kjent med ut fra det."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R06",
            "description": "Avløpsrør og vannledninger har TG-2: Deler av avløp og vannrør har nådd høy alder med større risiko for skader i fremtiden.",
            "evidence": [
              "Avløpsrør | TG 2 er satt på grunn av at deler av avløp har nådd høy alder med større risiko for skader i tiden som kommer.",
              "Vannledninger | TG 2 er satt på grunn av at deler av vannrør har nådd høy alder med større risiko for skader i tiden som kommer."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R07",
            "description": "Yttervegger har TG-2: Kledningen er ikke tilstrekkelig luftet, noe som gir større risiko for skader på grunn av sen uttørking.",
            "evidence": [
              "Kledningen er ikke tilstrekkelig luftet og har større risiko for skader på grunn av sen uttørking.",
              "Er det liten eller ingen lufting av kledningen? Ja"
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R08",
            "description": "Grunnmur har TG-2: Avskalling i pusset overflate og behov for vedlikehold av overflater.",
            "evidence": [
              "Grunnmur har avskalling i pusset overflate. Grunnmur har behov for vedlikehold av overflater."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R09",
            "description": "Ventilasjon er mangelfull (TG-2): Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu.",
            "evidence": [
              "Ventilasjon: Stue og ett soverom mangler ventileringsmulighet foruten åpning av vindu."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Kjøkken har kun kullfiltervifte (TG-2): Det er ikke etablert mekanisk avtrekk på kjøkkenet, kun kullfiltervifte.",
            "evidence": [
              "Kjøkken - Avtrekk: Det er kun etablert kullfiltervifte på kjøkkenet."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Taket har tidligere lekket ved takhatten, og vann rant inn til naboen gjennom luftekanalen. Arbeidet er utbedret, men historikken representerer en risiko for fremtidige lekkasjer.",
            "evidence": [
              "Taket lakk i fjor ved Takhatten, rant vann inn til naboen under gjennom luftekanalen. Dette ble fikset av blikkenslager.",
              "Fikset takhatten og lakasjen rundt der. Arbeid utført av Mesterblikk AS."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Eiendommen er regulert med antikvarisk verdi klasse C og ligger i bevaringsområde (kulturmiljø). Dette begrenser muligheten for endringer av bygningens eksteriør og kan medføre krav fra kommunen ved fremtidige tiltak.",
            "evidence": [
              "Bygningen på eiendommen er registrert med antikvarisk verdi – klasse C.",
              "I henhold til kommuneplanens bestemmelser § 9.2 skal bebyggelse i klasse C søkes bevart.",
              "Ved tiltak som endrer bygningens uttrykk skal både antikvarisk verdi og funksjonalitet vektlegges.",
              "Eiendommen er i kommuneplanens arealdel avsatt til bebyggelse og anlegg – framtidig, byggesone 3 og er merket bevaring kulturmiljø og naturmiljø."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R13",
            "description": "Det foreligger et planforslag (r20120010) for naboeiendommene Stavnevegen 25, 27 og 29 som legger til rette for bygging av boliger i tre bygg. Dette kan påvirke utsikt, sol- og lysforhold samt bomiljøet.",
            "evidence": [
              "Plan-ID r20120010 – Stavnevegen 25, 27 og 29 og gnr/bnr 95/578.",
              "Hensikten med planen er å legge til rette for bygging av boliger i tre bygg med tilhørende anlegg og funksjoner."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R14",
            "description": "Reguleringsplan for eiendommen er fra 1932 (r0307 Vestbyen), og det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til. Dette skaper usikkerhet om fremtidig bruk og tillatte tiltak.",
            "evidence": [
              "Eiendommen er regulert i henhold til reguleringsplan 21.04.1942 – r0307 med navn Vestbyen, Trondheim.",
              "Det fremgår ikke av planstatusdokumentet hva eiendommen er regulert til."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R15",
            "description": "Boden som inngår i BRA-e og totalt BRA ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen.",
              "Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R16",
            "description": "Selger har ikke utført radonmåling. Dette er en potensiell helserisiko, særlig i en eldre bolig fra 1934 med kjeller.",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Avvik på krav til rømning, dagslysforhold eller HMS er registrert i tilstandsrapporten. Dette kan medføre krav fra kommunen om utbedring.",
            "evidence": [
              "Det er avvik på krav til rømning, dagslysforhold eller HMS."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R18",
            "description": "Boligen er fra 1934 og har energikarakter G (rød), som er laveste energiklasse. Dette innebærer høye energikostnader for kjøper.",
            "evidence": [
              "Byggeår: 1934",
              "Energikarakter: G",
              "Energifarge: Rød"
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R19",
            "description": "Sameiet holder ikke årsmøte/generalforsamling. Dette kan indikere svak organisering og manglende demokratisk styring av sameiet, noe som kan påvirke vedlikehold og fellesøkonomi.",
            "evidence": [
              "Styret opplyser om at det ikke holdes årsmøte/generalforsamling i sameiet."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R20",
            "description": "Stikkledninger for vann og avløp fra eiendommen til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uventede kostnader ved fremtidige skader eller utskiftninger.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R21",
            "description": "Kjøper overtar ansvar, risiko og eventuelle konsekvenser knyttet til ulovlige byggearbeider (ikke godkjent plantegning), uavhengig av reaksjonsform fra kommunen.",
            "evidence": [
              "Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser om knyttet til dette.",
              "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg."
            ],
            "source_documents": [
              "d191_d191"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          }
        ],
        "reasoning": "\nGjennomgang av alle 21 identifiserte risikoer mot dokumentevidensen:\n\n**Godt dokumenterte risikoer (beholdes med høy confidence):**\n- R01 (TG-3 gulv): Direkte bekreftet i takstrapportens sammendrag og detaljert beskrivelse. Confidence opprettholdes på 0.98.\n- R02 (Manglende ferdigattest/ulovlig vegg): Bekreftet i egenerklæring, salgsoppgave og kommunens arkiver. Confidence justeres opp til 0.98 da dette er særlig alvorlig og godt dokumentert.\n- R03 (Bad TG-2, fukt): Bekreftet med multiple ja-svar i takstrapport og anbefaling om dusjkabinett. Confidence 0.97 opprettholdes.\n- R21 (Kjøper overtar ansvar for ulovligheter): Direkte sitert i salgsoppgaven. Confidence 0.97 opprettholdes.\n\n**Godt dokumenterte risikoer (beholdes med justert confidence):**\n- R12 (Antikvarisk verdi klasse C): Evidensen er sterk og direkte sitert fra planstatusdokument og kommuneplan. Confidence justeres opp fra 0.90 til 0.92 da dette er eksplisitt nevnt i planstatus.\n- R15 (Bod på fellesareal): Eksplisitt advarsel i salgsoppgaven. Confidence justeres opp fra 0.90 til 0.92.\n- R17 (HMS-avvik): Evidensen er noe vag – kun én setning uten spesifisering av hvilke avvik. Confidence justeres ned fra 0.88 til 0.82 da det mangler detaljer om hvilke konkrete avvik som er registrert.\n- R14 (Gammel reguleringsplan): Evidensen bekrefter at planen er fra 1932/1942 og at formål ikke fremgår. Confidence justeres ned fra 0.82 til 0.80 da dette er en usikkerhet snarere enn en konkret risiko.\n- R19 (Ingen årsmøter): Bekreftet i styrets opplysninger. Confidence justeres opp fra 0.80 til 0.82 da dette er et faktum, men konsekvensene er usikre.\n\n**Risikoer som mangler kostnadsestimat eller detaljer:**\n- R03 (Bad): Ingen kostnadsestimat er oppgitt i dokumentene for badrenovering. Dette er en mangel i risikovurderingen.\n- R04 (Drenering): Ingen kostnadsestimat oppgitt.\n- R06 (Rør): Ingen kostnadsestimat oppgitt.\n\n**Mulige manglende risikoer identifisert:**\n1. Kjøkkenoverflater har TG-2 med stedvis slitasje – nevnt i takstrapportens sammendrag men ikke identifisert som egen risiko.\n2. Taktekking er ikke kontrollert (TG-IU) – takstrapportens sammendrag viser 1 TG-IU, men dette er ikke identifisert som risiko. Taktekking er oppgradert men tidspunkt er ukjent, og det er ikke kontrollert for skader eller beslag rundt takgjennomføringer.\n3. Sameiet har kun 2 seksjoner (liten organisasjon) – kombinert med manglende årsmøter øker dette risikoen for konflikter og manglende vedlikehold.\n\n**Re-retrieval queries foreslås for:**\n- Detaljer om HMS-avvik (rømning, dagslys) – hva er de konkrete avvikene?\n- TG-IU posten i takstrapporten – hva er ikke undersøkt?\n- Kostnadsestimater for bad, drenering og rør\n- Detaljer om kjøkkenoverflater TG-2\n- Sameiets størrelse og økonomi (regnskap/budsjett)\n",
        "re_retrieval_queries": [
          "HMS avvik rømning dagslys konkrete detaljer tilstandsrapport",
          "TG-IU ikke undersøkt takstrapport Stavnevegen 19",
          "kostnadsestimat bad renovering drenering rør utbedring",
          "kjøkken overflater innredning slitasje TG-2 tilstandsgrad",
          "sameiet regnskap budsjett økonomi formue fellesutgifter",
          "bad gulvfall sluk referansenivå TG-2 detaljer",
          "taktekking betongstein kontroll beslag takgjennomføringer"
        ]
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
    "input_tokens": 23216,
    "output_tokens": 5635,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
