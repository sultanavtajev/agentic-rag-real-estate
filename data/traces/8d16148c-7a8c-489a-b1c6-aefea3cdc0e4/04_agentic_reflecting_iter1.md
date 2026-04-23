# Trace: agentic_reflecting_iter1
- **Run ID:** 8d16148c-7a8c-489a-b1c6-aefea3cdc0e4
- **Tidspunkt:** 2026-03-24T19:25:48.456338+00:00
- **Varighet:** 106.98s
- **Input tokens:** 21206
- **Output tokens:** 5579

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
Risiko 1: Sameiet har betydelige fremtidige rehabiliteringskostnader, inkludert rehabilitering av bunnledninger (soilrør) og avløpsrør under bygningene, brannsikring av kjellere (inertgasssystem estimert til 2-3 millioner kroner), og fasaderehabilitering. Dette kan medføre økte felleskostnader for kjøper.
  Confidence: 0.97
  Evidens: Rør under husene må rehabiliteres. I de nærmeste årene må vi rehabilitere alle bunnledninger under bygningene (soilrør) og avløpsrør oppover i bygningene for å unngå kollaps i rørene som kan medføre ubegrensete [skader].; Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner.; Over tid er det nødvendig å rehabilitere fasaden på bygningene.; Sameiet står overfor betydelige vedlikeholds- og rehabiliteringsprosjekter i årene som kommer.

Risiko 2: Sameiet har negativ egenkapital (udekket tap). Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital. Dette er en alvorlig økonomisk risiko som kan påvirke fremtidige felleskostnader.
  Confidence: 0.97
  Evidens: Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital (udekket tap).; Finanskostnader er høyere enn budsjettert og skyldes i hovedsak høyere renter på [lån].

Risiko 3: Sameiet har tatt opp et lån på 7 millioner kroner med flytende rente (7,10 % per 31.12.24) og løpetid på 15 år. Det er ingen individuell nedbetalingsordning (IN-ordning). Renteendringer vil direkte påvirke felleskostnadene.
  Confidence: 0.96
  Evidens: For å gjennomføre planlagt vedlikehold av vann- og avløpssystemene og brannsikre kjellere har sameiet tatt opp et lån på 7 (sju) millioner som kommer til stegvis utbetaling etterhvert som kontrakter for arbeidene som skal gjøres foreligger.; Sameiet har et lån med flytende rente, og det er ingen individuell nedbetalingsordning (IN-ordning). Endringer i rentenivået, samt fremtidige vedtak i sameiet, kan påvirke størrelsen på felleskostnadene.; Rentesats pr. 31.12.24 7,10 %. Løpetiden er 15 år.

Risiko 4: Felleskostnadene har økt betydelig og er varslet å øke ytterligere. De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024. Dette representerer en vesentlig økning i løpende kostnader for kjøper.
  Confidence: 0.95
  Evidens: De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024.; Det ble budsjettert med en ytterligere økning på 25 % fra naboene [fra 1. januar 2024].; Felleskostnadene er ikke nødvendigvis dimensjonert for kostnadsøkninger.

Risiko 5: Brann- og redningsetaten (BRE) har pålagt sameiet å gjennomføre brannsikringstiltak etter tilsyn. Det er avdekket flere forhold i strid med brannforskriftene, og sameiet har fått en avviksliste som må følges opp innen fem år. Dette medfører fremtidige kostnader.
  Confidence: 0.96
  Evidens: Det ble avdekket flere forhold som er i strid med brannforskriftene. Forholdene er av en slik art at sameiet er pålagt å sette i gang tiltak for å rette dem. BRE har gitt sameiet en avviksliste som må følges opp innen fem år.; Påbudte brannverntiltak er på listen over fremtidige oppgraderingsarbeid og vil medføre kostnader.; Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner.

Risiko 6: Eiendommen er fra 1925 (ca. 100 år gammel), og det er varslet at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt. Kjøper må være forberedt på oppgraderinger på grunn av slitasje, fraværende vedlikehold og utidsmessige tekniske løsninger.
  Confidence: 0.93
  Evidens: Byggeår: 1925; Gården er 100 år i disse dager.; Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens standard.; Avvik fra dagens forskriftskrav og oppstå funksjonssvikt.

Risiko 7: Kjøkkenet har kun omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, noe som ikke tilfredsstiller standardens krav til luftutskifting. Det er gitt TG2 på ventilasjon. Det anbefales mekanisk avtrekk, men dette må avklares med sameiet og er ikke alltid gjennomførbart.
  Confidence: 0.92
  Evidens: Det er omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, tilfredsstiller ikke standardens krav til luftutskifting. TG 2 er satt på grunn av omluftsventilator/kullfilter.; Det anbefales å etablere mekanisk avtrekk med avtrekk ut, men dette må avklares med sameiet eller borettslaget. Det er ikke alltid at dette lar seg gjennomføre.

Risiko 8: Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om radonmåling.; Er det foretatt radonmåling? Nei

Risiko 9: Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523), og eldre reguleringsplaner anbefaler at bevaringsinteresser avklares med kommunen før prosjektering. Dette kan begrense fremtidige bygningsmessige endringer og påvirke verdi og bruksmuligheter.
  Confidence: 0.88
  Evidens: Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523). Eldre reguleringsplaner for området anbefaler at bevaringsinteresser avklares med kommunen før prosjektering.; Eiendommen berøres av følgende hensynssoner: Hensynssone [bevaring].

Risiko 10: Området er stadig under endring og utvikling – bygg settes opp, rehabiliteres og rives ned. Dette kan påvirke bomiljø, støynivå og eiendomsverdi i fremtiden.
  Confidence: 0.82
  Evidens: Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser.

Risiko 11: Sameiet planlegger å installere gassanlegg i løpet av 2026. Dette er et fremtidig tiltak som kan medføre kostnader og praktiske ulemper for beboerne, og som ennå ikke er gjennomført.
  Confidence: 0.85
  Evidens: Det planlegges å installere gassanlegg i løpet av 2026.; Det var budsjettert for gassanlegg for brannslukning som ble utsatt på grunn av arbeidet med den omfattende rehabilitering av bunnledninger.

Risiko 12: Styret utarbeider en vedlikeholdsplan for bygningene for de neste 10-15 årene, men det er ikke opplyst om hvor mye kostnadene vil bli eller når de vil påløpe. Dette skaper usikkerhet om fremtidige felleskostnader.
  Confidence: 0.88
  Evidens: Styret utarbeider en vedlikeholdsplan for bygningene i sameiet for neste 10-15 årene. Det vil kunne påløpe utgifter knyttet til vedlikehold, men det er ikke opplyst om hvor mye eller når.

Risiko 13: Taket er ikke besiktiget av takstmann. Dette innebærer at tilstanden på taket er ukjent, og eventuelle skjulte feil eller mangler kan ikke utelukkes.
  Confidence: 0.85
  Evidens: Taket er ikke besiktiget. - I følge eier 2021

Risiko 14: Sameiet hadde en møllinfeksjon på loftet i 2023. Selv om dette er håndtert, indikerer det risiko for skadedyrproblemer i bygningen.
  Confidence: 0.75
  Evidens: Sommeren 2023 fikk vi en møllinfeksjon på loftet i en av sameiets bygninger. Årsaken til infeksjonen var oppbevaring av ull og andre tekstiler i bodene.

Risiko 15: Energimerket er F, som er blant de dårligste på skalaen A-G. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.
  Confidence: 0.88
  Evidens: Energikarakter: F; På en skala fra A til G, der A er best, har denne boligen oppnådd F (en normalbolig vil gjerne ligge i området C-F).

Risiko 16: Det er arbeid utført på el-anlegget, men det er ikke fremlagt samsvarserklæring for arbeidene. Manglende samsvarserklæring kan indikere at arbeidet ikke er utført i henhold til gjeldende forskrifter.
  Confidence: 0.7
  Evidens: Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? - Nei; Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Ja. Faglært arbeid. Hvilket år ble jobben fullført?: 2021

Risiko 17: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, eller det tinglyses ytterligere utleggspant, kan handelen ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette representerer en risiko for at handelen ikke kan fullføres.
  Confidence: 0.8
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige... Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også... kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Dokumentkontekst:
[d075_d075 | Side [1]]
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

[d075_d075 | Side [1]]
omsskatt. De øvrige seksjonseierne i sameiet har Selger har ikke utført radonmåling. Det er ikke krav om
forbrukstak på 5 000 kWh per måned for husholdninger Tinglyste heftelser og rettigheter: Følgende tinglyste legalpant på inntil 2G som sikkerhet for krav knyttet til dette med mindre boligen er helt eller delvis utleid.
og 1 000 kWh for hytter. Når det er tegnet avtale om heftelser følger eiendommen ved salg, og ved inngivelse sameieforholdet, som felleskostnader. Legalpant er pant
Norgespris bortfaller

---

[d075_d075 | Side [1]]
t ikke er tinglyst heftelser som ikke lar seg innfri/ ordens‑ og vedlikeholdsregler.
bevaringsinteresser avklares med kommunen før slette.
grunnlag
prosjektering. Andelseier plikter å underrette styret skriftlig om alle som
Dersom eiendommen skulle bli overbeheftet i har fast bolig i bruksenheten, i god tid før innflytting.
Overtakelse
Eiendommen berøres av følgende hensynssoner: salgsprosessen, det vil si at summen av fremtidige Styret skal også underrettes skriftlig om leieforholdet,
‑ Hensynssone

---

[d075_d075 | Side [1]]
dkjenning gis, må Selger leverer eiendommen i ryddig og rengjort stand.
Eiendommen ligger i umiddelbar nærhet av uten andre heftelser enn de som det er avtalt at følger søkeren skriftlig erklære seg innforstått med sameiets
spesialområde for bevaring (plan S‑2523). Eldre med i handelen. Gjennomføring av handelen er betinget vedtekter og bestemmelser, herunder de fastsatte
Kontrakts‑
reguleringsplaner for området anbefaler at av det ikke er tinglyst heftelser som ikke lar seg innfri/ ordens‑ og

---

[d075_d075 | Side [1]]
oppnås vil handel for at leietakere får utlevert husordensregler og annen
varmekilder ved visning følger dette heller ikke med. budgivere å sette seg inn i gjeldende ikke kunne gjennomføres. Skulle det bli tinglyst flere relevant informasjon, og for at ordensreglene overholdes.
reguleringsbestemmelser. Kopi av situasjonskart, utleggspant på eiendommen, kan handel bare
Nåværende eier har tegnet avtale om Norgespris på målebrev, reguleringsplaner m/ bestemmelser etc. ligger gjennomføres forutsatt at også

---

[d075_d075 | Side [1]]
, ventilasjon)?
Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: MMF, TK 2
03205220
:ecnerefer
tnemucoD
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller

---

[d075_d075 | Side [1]]
i 2021. grunnmur av betong/ murt tegl, yttervegger av betong/
Er arbeidet byggemeldt? murt tegl og etasjeskillere av bjelkelag. Etasjeskiller er av Er det foretatt kontroll av det lokale el tilsyn i løpet av de
Innbo og løsøre: Følgende løsøre og tilbehør følger ikke Nei. tre/ betongdekke. siste 5 år
med: ‑ Ja
‑ Vegghengt TV med feste Kjenner du til om det er/ har vært utført arbeid på Tak: Er det gjennomført arbeider etter opprinnelig byggeår?
el‑anlegget eller andre installasjoner (f.eks. oljetank, Taket

---

[d075_d075 | Side [1]]
oppfordrer interessenter til å gjøre seg kjent innfrielse av det underliggende kravet. i inntil 30 døgn sammenhengende. Fremleie er ikke tillatt.
med disse.
Norgespris er en ny, statlig ordning, som gir en Legalpant: Kommunen har legalpant som sikkerhet for
Radonmåling
forutsigbar og fast strømpris på 50 øre per kWh med betaling av kommunale avgifter og eventuell
Tinglyste heftelser
mva (40 øre uten mva)gjennom året. Norgespris har et eiendomsskatt. De øvrige seksjonseierne i sameiet har Selger har ikke

---

[d075_d075 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Styret utarbeider en vedlikeholdsplan for bygningene i sameiet for neste 10-15 årene. Det vil kunne påløpe utgifter
Beskrivelse knyttet til vedlikehold, men det er ikke opplyst om hvor mye eller når. Det planlegges å installere gassannlegg i

---

[d075_d075 | Side [1]]
om hvor mye eller når. Det planlegges å installere gassannlegg i løpet
2026.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: MMF, TK 3
58
03205220
:ecnerefer
tnemucoD
59

## Side 31

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter

---

[d075_d075 | Side [1]]
et, som felleskostnader. Legalpant er pant
Norgespris bortfaller eventuell strømstøtte. av bud vil disse være akseptert av budgiver/ kjøper: som ikke vises i grunnboksutskriften, og har prioritet
Diverse
foran tinglyste lån, for eksempel banklån på seksjonen.
Som boligeier må du fortsatt ha en strømavtale med en 1985/ 45873‑187/ 105 30.07.1985 ERKLÆRING/ AVTALE Legalpant til kommunen har høyere prioritet enn Det informeres om at ingen kan eie mer enn to
strømleverandør. PANTERETT UTEN OPPTRINNSRETT TIL

---

[d075_d075 | Side [1]]
te
Faglært arbeid: Utebod i kjeller merket 320077. 9 m². kjøkken (et krav for å få TG1). Det anbefales å etablere
46 47

## Side 25

OM EIENDOMMEN OM EIENDOMMEN
mekanisk avtrekk med avtrekk ut, men dette må avklares Gnr. 215, bnr. 181, snr. 77, ideell andel 1/ 1 begrenset til inntil 2 ganger folketrygdens grunnbeløp.
med sameiet eller borettslaget. Det er ikke alltid at dette i Oslo kommune. Det er spesifikke regler for bruk og vedlikehold. Støyende
lar seg gjennomføre. renoveringsarbeid er begrenset til

---

[d075_d075 | Side [1]]
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

[d075_d075 | Side [1]]
av styret før innflytting. sameiet legal panterett i den enkelte eierseksjon, stuen.
48 49

## Side 26

OM EIENDOMMEN OM EIENDOMMEN
Området er stadig under endring/ utvikling, bygg settes kunne gjennomføres at kreditorene gir nødvendig telefonnummer til alle beboere. Seksjonseier er ansvarlig
Dersom beboelsesrom ikke har vegg‑ eller fastmonterte opp, rehabiliteres og rives ned. Vi anbefaler derfor alle pantefrafall. Dersom pantefrafall ikke oppnås vil handel for at leietakere får utlevert husordensregler

---

[d075_d075 | Side [1]]
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

[d075_d075 | Side [1]]
gulerings og arealplaner
GJELDER DENNE REGISTERENHETEN MED FLERE vedlikeholdsansvaret for disse påhviler sameiet. sameiet legal panterett i den enkelte eierseksjon,
Eiendommen er regulert til byggeområde for boliger i Adkomst til eiendommen skjer via offentlig vei. begrenset til inntil 2 ganger folketrygdens grunnbeløp.
henhold til reguleringsplan S‑2255, vedtatt 28.07.1977. 1985/ 45873‑186/ 105 30.07.1985 SEKSJONERING
Opprettet seksjoner: Kjøper og selger er forpliktet til å signere den

---

[d075_d075 | Side [1]]
oldsprosjekter de
kontrollert er det sannsynlig at det siden kan avdekkes av Bygårdsservice AS. siste årene. I 2024 ble alle låser til fellesområder skiftet. I
Vedtekter/ husordensregler
avvik fra dagens forskriftskrav og oppstå funksjonssvikt. 2023 ble det utført tilsyn av elektriske anlegg og lapping
Videre må kjøper være forberedt på det må foretas Sameiet står overfor betydelige vedlikeholds‑ og av asfalt for å redusere rystelser fra trafikk. Tidligere er Vedlagt prospektet.
oppgraderinger på grunn av

---

[d075_d075 | Side [1]]
 informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
Forsikring
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle

---

[d075_d075 | Side [1]]
OM eller S-
ROM. Dette betyr at rommet både kan være i strid med byggteknisk forskrift og mangle godkjennelse
i kommunen for den aktuelle bruken, uten at dette vil få betydning for takstmannens valg.
Harald Hårfagres gate 5 D, 0363 OSLO 9 av 14 Harald Hårfagres gate 5 D, 0363 OSLO 10 av 14
70 71

## Side 37

6.18 Elektrisk 6.20 Vannledninger
Er det foretatt kontroll av det lokale el tilsyn i løpet av de siste 5 år Ja Plast
Type sikringer Automatsikringer
Er det utført arbeider på anlegget etter byggeår?

---

[d075_d075 | Side [1]]
år kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d075_d075 | Side [1]]
runn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
Boligtype: Boligblokk spesielt på grunn av fare for større skader eller følgeskader
Byggeår:1925
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
BRA: 74 m 2 eller sammenbrudd
2
BRA-i: 60 m
BRA-e: 14 m2
Tilstandsgrad ikke undersøkt (TGIU)

---

[d075_d075 | Side [1]]
.
TG-1
0363 OSLO Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsrapport Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
Eierskifte slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller

---

[d075_d075 | Side [1]]
kkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
I tillegg kan det gis TG3 iht. NS3600 på enkelte bygningsdeler slik som etasjeskiller og terrengforhold uten
at det nødvendigvis krever umiddelbare tiltak.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som

---

[d075_d075 | Side [1]]
d
2
BRA-i: 60 m
BRA-e: 14 m2
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 13 1 0 0
Tore Haugstulen th@min-takst.no Harald Hårfagres gate 5

---

[d075_d075 | Side [1]]
er: sikringsskap ikke er tette?
Eiendommens
Styret utarbeider en vedlikeholdsplan for bygningene i Avløpsrør er av stål og plast. Vannledninger er av plast. ‑ Nei
sameiet for neste 10‑15 årene. Det vil kunne påløpe Rørfordelingsskap med stoppekran er plassert på loft. Spørsmål til eier: Løses sikringene ofte ut?
tilstand
utgifter knyttet til vedlikehold, men det er ikke opplyst om ‑ Nei
Takstmann: Tore Haugstulen hvor mye eller når. Det planlegges å installere Ventilasjon: Spørsmål til eier: Har det vært

---

[d075_d075 | Side [1]]
apporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den

---

[d075_d075 | Side [1]]
13 1 0 0
Tore Haugstulen th@min-takst.no Harald Hårfagres gate 5 D
GNR: 215 BNR: 181 Snr: 77
Min-takst AS 90418516 0363 OSLO
Harald Hårfagres gate 5 D, 0363 OSLO 2 av 14
62 63

## Side 33

2. Om rapporten 3. Rapportsammendrag
Alle bygningsdeler angitt med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er angitt i rapportsammendraget. Ytterligere opplysninger er gitt i hovedrapporten.
Om rapporten Rapporten følger kravene i ny forskrift til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal-

---

[d075_d075 | Side [1]]
com/developer
60
03205220
:ecnerefer
tnemucoD
61

## Side 32

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Harald Hårfagres gate 5 D
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
0363 OSLO Graden kan også brukes når delen er ny, men der

---

[d075_d075 | Side [1]]
itet skal ikke den bygningssakkyndige sette tilstandsgrad på det elektriske
anlegget (https://www.dibk.no/regelverk/forskrift-til-avhendingslova-tryggere-bolighandel).
6.19 Avløpsrør
Type avløpsrør Stål og Plast
Er det gjennomført arbeider på anlegget etter byggeår? Ja 6.21 Ventilasjon
Type ventilering Naturlig ventilasjon
Er det manglende lufting av kloakk over tak? Nei
Oppsummering av ventilasjon TG-1
Er det sen avrenning fra tappested? Nei
Naturlig ventilasjon
Mangler det stakemuligheter på

---

[d075_d075 | Side [1]]
ose.
Spyling av alle taknedløp. (Ett nedløp er
tett og må graves opp.
Siftet ut ødelagte deler av flere
taknedløp.
Montert / reparert takrennevarme på
hjørnet Kirkeveien / Trudvangveien.
Renset og tømt alle sandfangerne i
gården.
2009 Rør og søppelhus. Skiftet vann og avløp i HH 5C fra kjeller
til 4. etasje venstre side.
Skiftet vann og avløp i HH 5D fra kjeller
til 4. etasje høyre side.
Søppelhuset har fått ny murpuss og er
malt.
2008 Rør, vaskem., dører, Skiftet hovedkran i TV 12 (en av

---

[d075_d075 | Side [1]]
ppested? Nei
Naturlig ventilasjon
Mangler det stakemuligheter på avløpsanlegget? Nei
Har avløpsrør nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av avløpsrør TG-1
Staking kan gjennomføres via avløp til installasjoner og sluk.
Harald Hårfagres gate 5 D, 0363 OSLO 11 av 14 Harald Hårfagres gate 5 D, 0363 OSLO 12 av 14
72 73

## Side 38

Dokumentasjon
6.22 Våtrom:
Fremlagt dokumentasjon Ja
Bygningsakkyndig har gjennomgått dokumentasjon på oppgraderinger
Beige 60x60 fliser på

---

[d075_d075 | Side [1]]
lleren. Det ble 1998 - 2000 Rehabilitering av uteareal.
avdekket en del feil og mangler som 1996 - 1997 Rehabilitering av fasade. Rehabilitering av fasadene med mur og
deretter ble utbedret. maling.
2011 Nye balkonger Det var Balkongteam som var 1986 - 1987 Nye vinduer i de fleste seksjonene. Kostnaden er fakturert sameierne.
leverandør for balkongene.
1985 Nytt tak.
2010 Takrenner og nedløp. Rensing av alle takrenner. Fjernet
gammelt løv og mose.
Spyling av alle taknedløp. (Ett nedløp er
tett og må graves

---

[d075_d075 | Side [1]]
entilasjon og tilluft ved dør.
Er ventilasjonen funksjonstestet? Ja
Oppsummering av ventilasjon TG-1
Avtrekk er testet med papir og fungerer som tiltenkt
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Nei
Er det registrert fukt eller andre skader ved fuktmåling? Nei
Oppsummering av fukt TG-0
Det registreres ingen fukt og fungerer som tiltenkt
Harald Hårfagres gate 5 D, 0363 OSLO 13 av 14 Harald Hårfagres gate 5 D, 0363 OSLO 14 av14
74 75

## Side 39

Energiattest
Harald Hårfagres gate 5D, 0363

---

[d075_d075 | Side [1]]
du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud

---

[d075_d075 | Side [1]]
til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal- og
moderniseringsdepartementet 21.06.2021. I tillegg beskriver rapporten følgende kontrollpunkter utover
minimumskravet i forskriften; støttemurer, tilleggsbygninger ( garasje mm ), etasjeskillere, renner / nedløp,
toalettrom, ildsted / piper og trapper. Formålet med rapporten er å kartlegge boligens tekniske tilstand
med tanke på behov for tiltak, samt å vise resultatene av en utført tilstandsanalyse for å bidra til økt Bygningsdeler med

---

[d075_d075 | Side [1]]
en utført tilstandsanalyse for å bidra til økt Bygningsdeler med TG3
trygghet og redusert konfliktnivå ved eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt

---

[d075_d075 | Side [1]]
ikk. Tidligere er Vedlagt prospektet.
oppgraderinger på grunn av slitasje, fraværende rehabiliteringsprosjekter i årene som kommer. Dette det blant annet utført vindusrestaurering (2018‑2019),
vedlikehold, arbeider som er utført av ufaglærte, inkluderer en omfattende rehabilitering av bunnledninger montering av branndører (2021), rehabilitering av piper
Energimerke
utidsmessighet eller tekniske løsninger som ikke holder og avløpsrør, samt pålagte brannsikringstiltak etter tilsyn (2015) og fasader (1997),

---

[d075_d075 | Side [1]]
en, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå Rapportens omfang, struktur, metode og begrepsbruk følger i hovedsak Norsk Standard NS 3600
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn

---

[d075_d075 | Side [1]]
pet, bestiller om ønskelig
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger håndverker for reparasjon og sørger for at kostnader knyttet til skaden blir refundert eller
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse. betalt av forsikringsselskapet.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader. Selv om

---

[d075_d075 | Side [1]]
ioner til vedlikehold av bygningene. Brannsikring, branndører og rørarbeid har vært stilling og resultat. Informasjon om sameiets forventede økonomiske utvikling er omtalt i
årsrapportens punkt om budsjett for 2024.
finansiert med dette lånet. Omkostningene av lånet har økt gjennom 2022 og 2023. For å
gjennomføre planlagt vedlikehold av vann- og avløpssystemene og brannsikre kjellere har Forutsetningen om fortsatt drift er til stede, og årsregnskapet for 2023 er satt opp under
denne forutsetning.
sameiet

---

[d075_d075 | Side [1]]
igene. Det medfører at all rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
NOTE: 10 som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
ANDRE DRIFTSKOSTNADER Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
Container -35 242 opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Driftsmateriell -2 954
Vaktmestertjenester -395 444 Ved kjøp og salg av

---

[d075_d075 | Side [1]]
forbruk og et ønske om å redusere utgifter. prioriteres de neste årene, og som vil påvirke økonomien i sameiet.
• Vaskerom Rør under husene må rehabiliteres. I de nærmeste årene må vi rehabilitere alle
Vaskerommene i sameiet er gamle, men fungerer. Styret ber om at alle som benytter bunnledninger under bygningene (soilrør) og avløpsrør oppover i bygningene for å unngå
maskinparken påser at de renser filteret i tørketrommelen for støv og tørker opp større kollaps i rørene som kan medføre ubegrensete

---

[d075_d075 | Side [1]]
ksjon 09222115557515245638Signert GH, NKA, HAR, TSR, BT Transaksjon 09222115557515245638Signert GH, NKA, HAR, TSR, BT
136 137

## Side 70

8 Kirkeveien 74 Sameie 9 Kirkeveien 74 Sameie
Økonomi KOMMENTARER TIL ÅRSREGNSKAPET FOR 2023
Styret har i 2023 gjort grep for å sikre en sunn økonomi i. I 2021 tok sameiet opp et lån på
Styret mener at årsregnskapet gir et riktig bilde av sameiets eiendeler og gjeld, finansielle
6 millioner til vedlikehold av bygningene. Brannsikring, branndører og

---

[d075_d075 | Side [1]]
o og 3 millioner kroner.
Forutsetningen om fortsatt drift er til stede, og årsregnskapet er satt opp under denne
3. Over tid er det nødvendig å rehabilitere fasaden på bygningene. forutsetning.
Økonomi Vesentlig avvik
Driftsinntektene er høyere enn budsjettert og skyldes i hovedsak andre inntekter fra utleie
Styret har ansvar for å sikre en sunn økonomi i sameiet. For å gjennomføre planlagt
for plass til radioskap som ikke var budsjettert.
vedlikehold av vann- og avløpssystemene og brannsikre kjellere har

---

[d075_d075 | Side [1]]
re alt som har med helse-, miljø- og sikkerhet å gjøre i
Tilgang 2023 -2 000 000
sameiets regi.
Nebetalt tidligere 1 332 402
Nebetalt i år 4 667 598
Styret ivaretar internkontrollen til blant annet brannvern, felles elektrisk anlegg og
0
lekeplassutstyr. Sameiet har ikke ansatte. Ved innkjøp av tjenester og ved dugnad er det
Obos Banken AS
spesielle rutiner som sikrer forsvarlig HMS.
Flytende rente
Rentesats pr. 31.12.24 7,10 %. Løpetiden er 15 år.
Kabel-TV og Bredbånd
Opprinnelig 2024 -5 632 485
Telia er

---

[d075_d075 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Dugnadsforskudd: kr 80,‑
7 534 317 (Pris inkl. fellesgjeld)
Felleskostnadene dekker sameiets ordinære
Omkostninger driftsutgifter, inkludert TV‑avtale med Telia. Sameiet har
et lån med flytende rente, og det er ingen individuell
13 500 (Boligkjøperforsikring* (valgfritt)) nedbetalingsordning (IN‑ordning). Endringer i
188 350 (Dokumentavgift) rentenivået, samt fremtidige vedtak i sameiet, kan
545 (Tinglysningsgebyr ‑ pantedokument) påvirke størrelsen på felleskostnadene. Det er

---

[d075_d075 | Side [1]]
else med arbeidet. Rørfornying er omfattende arbeid som vil pågå over tid Styret har hatt møter en gang per måned i perioden. Samarbeidet i styret har vært godt.
og som vil medføre kostnader for sameiet fremover (se Fremtidig rehabilitering og Det er et aktivt styre med ansvar for store oppgaver i sameiet, med hyppig dialog på
vedlikehold for nærmere beskrivelse). digitale plattformer.
• Vannforbruk
Sameiet betaler for vannforbruk utregnet etter total-areal (summen av areal i alle Fremtidig rehabilitering

---

[d075_d075 | Side [1]]
 av kategori felleskostnader og 4 % økning av kategori Noter til årsregnskapet, herunder et • Gir årsregnskapet et rettvisende bilde av
•
sameiets finansielle stilling per 31.
tv og internett 1.01.2025. sammendrag av viktige
desember 2024, og av dets resultater for
regnskapsprinsipper.
regnskapsåret i samsvar med
For øvrig vises til de enkelte tallene i budsjettet. regnskapslovens regler og god
regnskapsskikk i Norge.
Andre forhold
Budsjettallene som fremkommer i årsregnskapet er ikke revidert.
Grunnlag

---

[d075_d075 | Side [1]]
som ikke betales tilbake
Styret har startet arbeidet med å lukke avvikene. To avvik er lukket i 2024:
brukes til utstyr og kontainerleie i forbindelse med dugnadene.
1. Avvik knyttet til ferdigstillelsesrapport fra kommunen for branndører er lukket.
2. Det er utarbeidet en internkontrollrutine for brannsikring i sameiet.
Dører
Påbudte brannverntiltak er på listen over fremtidige oppgraderingsarbeid og vil
Branndørene som er satt inn i sameiet er tunge. I løpet av 2024 fikk styret flere
medføre kostnader

---

[d075_d075 | Side [1]]
dlegg 1 15 Satvy 3re1ts beretning, regnskap og annen informasjon om sameiet.pdf
184 185

## Side 94

skal sikre god og trygg gjennomføring og samtidig ivareta en forsvarlig ÅRSREGNSKAPET
økonomi (se punkt om økonomi under).
Styret mener at årsregnskapet gir et riktig bilde av selskapets eiendeler og gjeld,
2. Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil finansielle stilling og resultat.
koste sameiet mellom to og 3 millioner kroner.
Forutsetningen om fortsatt drift er til

---

[d075_d075 | Side [1]]
lagte brannsikringstiltak etter tilsyn (2015) og fasader (1997), samt skifte av tak (1985).
dagens standard. I Norge er det en av oppgavene til Det fra Brann‑ og redningsetaten. For å finansiere disse Energikarakter: F
lokale el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg arbeidene har sameiet tatt opp et lån på 7 millioner Forretningsfører: Obos forkjøp
i boliger og fritidsboliger. Alle boliger skal ha periodisk kroner. Det er ikke mulighet for individuell nedbetaling av Energifarge:

---

[d075_d075 | Side [1]]
 474
Felleskostnader 4 037 163
Annen kortsiktig gjeld 18 9 260 7 465
TV 519 380
SUM KORTSIKTIG GJELD 275 473 433 152
Leie 169 680
Dugnadsforskudd 91 196
SUM EGENKAPITAL OG GJELD 2 288 652 2 597 528 Bod 9 720
Strøm fryseboks 1 200
Pantstillelse 0 0 SUM INNKREVDE FELLESKOSTNADER 4 828 339
Garantiansvar 0 0

Vedlegg 1 20 Satvy r3e1ts beretning, regnskap og annen informasjon om sameiet.pdf Vedlegg 1 21 Satvy 3re1ts beretning, regnskap og annen informasjon om sameiet.pdf
Transaksjon 09222115557540767547

---

[d075_d075 | Side [1]]
istrert i Vibbo.
• Arbeid som forberedelsen til strømpeføring av bunnledninger
Våren 2023 er det gjennomført kartlegging av tilstanden til bunnledningene Skadedyr
(avløpsrør som ligger nedstøpt i kjellergulv og under bygningene) i sameiet. Gården Sommeren 2023 fikk vi en møllinfeksjon på loftet i en av sameiets bygninger. Årsaken til
er 100 år i disse dager. Det er oppdaget flere feil og det er et tydelig behov for infeksjonen var oppbevaring av ull og andre tekstiler i bodene. Møllen gjorde

---

[d075_d075 | Side [1]]
dlikehold av vann- og avløpssystemene og brannsikre kjellere har sameiet tatt opp
Driftskostnadene er lavere enn budsjettert og skyldes i hovedsak at det var budsjettert for
et lån på 7 (sju) millioner som kommer til stegvis utbetaling etterhvert som kontrakter
gassanlegg for brannslukning som ble utsatt på grunn av arbeidet med den omfattende
for arbeidene som skal gjøres foreligger. rehabilitering av bunnledninger.
Finanskostnader er høyere enn budsjettert og skyldes i hovedsak høyere renter på

---

[d075_d075 | Side [1]]
for 1 år?
1998 - 2000 Rehabilitering av uteareal. 
1996 - 1997 Rehabilitering av fasade. Rehabilitering av fasadene med mur og Valgkomite 
maling. Velges alle tre for 1 år
1986 - 1987 Nye vinduer i de fleste seksjonene. Kostnaden er fakturert sameierne. 
1985 Nytt tak.
Sofie Hemsen
Thomas Lunde - går inn for Anette Hawkins
Cecilie Bjelke

Vedlegg 1 28 Satvy r3e1ts beretning, regnskap og annen informasjon om sameiet.pdf Vedlegg 2 29 av 31 Valgkomiteens innstiling for årsmøte 2025.pdf
200 201

##

---

[d075_d075 | Side [1]]
. Vårdugnad foregikk 24.04.2024. Kontainere
NCO AS utarbeidet en brannrapport for sameiet for å beskrive nåværende og
ble leid inn for kasting av søppel fra boder og fellesområder på høstdugnaden. Det
fremtidig brannsikring av sameiet til Brann- og redningsetaten. Rapporten ble
ble fra 2024 innført dugnadspenger på 80,- per måned, som betales tilbake til
godkjent av BRE i februar 2024.
seksjonseier ved deltakelse på dugnad. Dugnadpenger som ikke betales tilbake
Styret har startet arbeidet med å lukke

---

[d075_d075 | Side [1]]
tyret har hatt møter en gang per måned i perioden. Samarbeidet i styret har vært
Dette for ha reell oversikt over totalforbruk og et ønske om å redusere utgifter. godt. Det er et aktivt styre med ansvar for store oppgaver i sameiet, med hyppig
dialog på digitale plattformer.
Vaskerom
Vaskerommene i sameiet er gamle, men fungerer. Styret ber om at alle som Fremtidig rehabilitering og vedlikehold i kommende periode
benytter maskinparken påser at de renser filteret i tørketrommelen for støv og Gården er 100

---

[d075_d075 | Side [1]]
erende Grønnstruktur, eksisterende o
g
g
y
Sporveg, eksisterende Grønnstruktur, fremtidig S-2255 mart, tr
Sporveg, fremtidig Forsvaret S
-
0
3
Jernbane (tunnel), fremtidig LNF-areal, eksisterende Reguleringsbestemmelser i tilknytning til endret reguleringsplan for O2s0lo sentrum og in-
ot
m
Jernbane (tunnel), eksisterende LNF-areal, fremtidig dresoneiOslokommune. Osl o
-
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende 1 5
0
2
n
Turvei Spredt boligbebyggelse, fremtidig pla
ne
u
Ny

---

[d075_d075 | Side [1]]
.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
113

## Side 58

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
n).
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig ø n
gr
g
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende o
g
g
y
Sporveg, eksisterende

---

[d075_d075 | Side [1]]
 med en ytterligere økning på 25 % fra naboene. Gårdsrommet skal ikke benyttes til lufting av vil gjerne ligge i området C‑F). Kopi av energiattest ligger
elbillader. 1. januar 2024. Årsregnskapet for 2023 viste et husdyr. vedlagt i salgsoppgaven eller kan fås ved henvendelse til
underskudd på 798 725 kr, og sameiet har negativ megler.
egenkapital (udekket tap). Styregodkjennelse: Det informeres om at ingen kan eie
Øvrig
mer enn to boligseksjoner i sameiet, i henhold til
Oppvarming
Det er restriksjoner på

---

[d075_d075 | Side [1]]

§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på  
planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer.  
 
§ 3. Før byggetillatelse kan gis, skal det foreligge detaljert bebyggelsesplan for vedkommende eiendom. Etter   
bygningsrådets bestemmelse i det enkelte tilfelle kan bebyggelsen

---

[d075_d075 | Side [1]]
lan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 02.01.2026 – re K g a u r le tu ri t n s g n i i t t v e e t r g ti j k e a ld ln e i r v v å e 1 rtikalnivå 2 (dvs. på bakkenivå). I tillegg finnes det r P e la g n u e le n r s in o g r s i p g l i a n n a k le a r v t e e d t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g

---

[d075_d075 | Side [1]]

§ 6. Reguleringsplaner innenfor planområdet som er stadfestet i tidsrommet mellom 4.9.1974 og stadfestelse av • 
nærværende plan, skal gjelde foran denne plan.

---

[d075_d075 | Side [1]]
 t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g e e n l g ig - o i g S a to k m sin te n s s i y tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-17
Målestokk 1:1000 – Naturmangfold innenfor kartutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 151197/ 86524356 Deres ref.:
Høydereferanser Adresse: Harald Hårfagres gate 5
- Reguleringsplan: Se

---

[d075_d075 | Side [1]]
legg ikke nødvendigvis er dimensjonert for kostnadsøkninger, har felleskostnadene blitt justert de Denne boligen er energimerket. På en skala fra A til G, der
oppgradering av kjøkken med nye elektriske apparater, siste årene. De økte med 20 % fra desember 2023, og Husdyr: Ved husdyrhold skal det vises hensyn til A er best, har denne boligen oppnådd F (en normalbolig
rehabilitering av bad m/ varmekabler eller installeringer det ble budsjettert med en ytterligere økning på 25 % fra naboene. Gårdsrommet skal

---

[d075_d075 | Side [1]]
partementet,   
S-2255.   
  
Pgf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.   
   
Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale   
myndigheter for å bringe klarhet i eventuelle bevaringsinteresser.

---

[d075_d075 | Side [1]]
o e m g.b fø e l s g t e . avbystyretsvedtak23.9.15,
b
Fremtidig kollektivknutepunkt
Friluftsområde Knytning(er)motandrep
øl
l ge aanver:V300589,V290689,V300187,V080384,26394,20483,
Ytre by (utviklingsområder)
16578, 37684, 21884,mVf131284, V100495, 5984, 23383, 39183, 6382, 41871, 2390,
Spredt boligbebyggelse s o
Bestemmelsesgrense
Indre by (utviklingsområder)
V160184, V28018
p h
6
ev
,etV190482N2, 43392, 1491, V240993, 2490, 20090, 17490, 9993,
Aktivitetssone marka
H
H
H
5
7
8
7
1
1
0
0
0

---

[d075_d075 | Side [1]]

nærværende plan, skal gjelde foran denne plan. 



S-2937, 01.10.87 (se tidl. S-2255)

FORSLAG TIL ENDREDE REGULSERINGSBESTEMMELSER (NY PARAGRAF 7) FOR
SENTRUM OG INDRE SONE

---

[d075_d075 | Side [1]]
artet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 151197/86524356
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran

---

[d075_d075 | Side [1]]
eferanser Adresse: Harald Hårfagres gate 5
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 215/181
111

## Side 57

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
112
0035466
0005466
0074466
6645300
6645000
6644700
595800 596100 596400
595800 596100 596400
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 02.01.2026 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2

---

[d075_d075 | Side [1]]
det har ikke innfridd forventningene våre i henhold til
avtalen. Det har vært gjennomført jevnlige møter med Bygårdsservice. Siste møte ble
Balkong på fasaden også mot bakhagen gjennomført i februar 2024. Styret opplever at bygårdsservice as har vært mer proaktiv
Det ble gjennom 2022 montert flere balkonger og franske balkonger mot bakhagen. etter siste møtet. Styret ber om at beboere melder fra om feil og mangler i
Kommunen utstedte ferdigstillelsesattest for prosjektet våren 2023. Dette lukker

---

[d075_d075 | Side [1]]
in
Harald Hårfagres gate 5 D, 0363 OSLO 7 av 14 Harald Hårfagres gate 5 D, 0363 OSLO 8 av 14
68 69

## Side 36

Type pipe tegel
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
Er det montert ildsted? Ja teknisk forskrift?
Type ildsted Vedovn Er det manglende ferdigattest / midlertidig brukstillatelse? Nei
Dersom elementpipe - er flere enn 2 sider av pipen innkledd? Ikke aktuelt
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det

---

[d075_d075 | Side [1]]
 § 21‑10, utstedes ikke ferdigattest for
bygg/ endringer som ble omsøkt før 01.01.1998. Det vil
Info om formuesverdi: Skatteetaten beregner en For den treningsglade finnes et stort utvalg dermed ikke være mulig å be om ferdigattest for slike
Adkomst
boligverdi (beregnet markedsverdi for bolig) basert på treningssentre i nærområdet, blant annet SATS på tiltak. Dette betyr ikke at tiltak blir lovlige, men at saken
SSBs statistiske opplysninger om omsatte boliger. I Colosseum og Bislett, Fitness Express ved

---

[d075_d075 | Side [1]]
et ble avdekket
siste møtet. Styret ber om at beboere melder fra om feil og mangler i
flere forhold som er i strid med brannforskriftene. Forholdene er av en slik art at
fellesområdene, slik at disse kan rettes.
sameiet er pålagt å sette i gang tiltak for å rette dem. BRE har gitt sameiet en
avviksliste som må følges opp innen fem år. For hvert tiltak som gjennomføres,
Dugnad
slettes avviket hos BRE.
Høstdugnad ble avholdt 16.10.2024. Vårdugnad foregikk 24.04.2024. Kontainere
NCO AS utarbeidet en

---

[d075_d075 | Side [1]]
?
el‑anlegget eller andre installasjoner (f.eks. oljetank, Taket er ikke besiktiget. ‑ I følge eier 2021 Ja
For øvrig gjelder NEF sin standardliste "Oversikt over sentralfyr, ventilasjon)? Er det manglende samsvarserklæring på arbeider utført
løsøre og tilbehør" med mindre annet fremkommer av Ja. Pipe/ Ildsted: etter 01.01.1999?
salgsoppgaven. Listen er vedlagt. Faglært arbeid: Pipe av tegl. Det er montert vedovn. ‑ Nei
Hvilket år ble jobben fullført?: 2021 Er det manglende kursfortegnelse?
Gjenstander som

---

[d075_d075 | Side [1]]
kk
Det anbefales å etablere mekanisk avtrekk med avtrekk ut, men dette må avklares med sameiet eller
borettslaget. Det er ikke alltid at dette lar seg gjennomføre.
6.14 Lovlighet
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Nei
Rombenevnelse er iht dagens bruk på befaringstidspunkt, uten hensyn til byggeforskriftens krav. Det
er bruken av rommet på befaringstidspunktet som avgjør om rommet defineres som P-ROM eller S-
ROM. Dette betyr at rommet både kan være i strid med

---

[d075_d075 | Side [1]]
undig inn i alt salgsmateriell. Tilde Kallstad og Marius Martini Frantzen gårdsplassen er ikke tillatt. Alle bygningsmessige seksjonen.
endringer skal meldes skriftlig til styret, og arbeid på bad
Sameie
For ordens skyld nevner vi at TGIU står for tilstandsgrad skal følge Våtromsnormen. Regnskap/ budsjett/ kostnadsøkninger: Resultat
ikke undersøkt, f.eks. fordi en del av bygget ikke har vært Kirkeveien 74 Sameie Årets resultat vises i resultatregnskapet som et
tilgjengelig for inspeksjon. Disse delene kan

---

[d075_d075 | Side [1]]
 er ferdig eller avsluttet, skal hele trappeoppgangen
iii. Om en beboer finner det nødvendig å sette opp vindu i trappen, plikter vedkommende
rengjøres og eventuelle skader utbedres.
å påse at det etter kort tid igjen blir lukket.
vii. Ved oppussinger / arbeider som medfører endring av bygningskonstruksjonen,
iv. Biler kan ikke parkeres på gårdsplassen. Overtredelse kan medføre bot og borttauing
inngrep i røropplegg og lignende, samt arbeider som må godkjennes i henhold til
for eiers regning. Kun biler

---

[d075_d075 | Side [1]]
k på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det påvist avvik ved ildsted/feieluke/sotluke i forhold til avstand brennbart materiale? Nei
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Skorstein over tak er inspisert fra: Fra bakken
Er det synlige skader i skorstein, beslag eller fuger? Nei
Er det avvik i forhold til høyde på pipe over tak? Ikke kontrollerbart
6.15 Vinduer og dører
Oppsummering av ildsted/skorstein TG-1
Beskrivelse
Det registreres ikke

---

[d075_d075 | Side [1]]
ennes av offentlige myndigheter skal meldes
vedkommende fullmakt til å forplikte sameierne i saker som hører under den daglige styret skriftlig innen arbeidet påbegynnes. Alt arbeide skal utføres av autoriserte
drift. fagfolk/entreprenører og kopi av godkjent ferdigstillelse sendes styret.
§ 6.
§ 10.
Forretningsfører fører sameiets regnskaper under kontroll av styret og en registrert
revisor valgt av sameiermøtet. Hvis en sameier vesentlig misligholder sine forpliktelser overfor de øvrige sameiere,

---

[d075_d075 | Side [1]]
ikke har entre, stue og kjøkken, samt panelovn i soverom. Det er omluftfunksjon/ kullfilter i kombinasjon med naturlig
samsvarserklæring. varme i gulvet på badet. I tillegg er det vedovn. ventilering, tilfredsstiller ikke standardens krav til
Kjenner du til om det er utført arbeid på bad/ våtrom? luftutskifting. TG 2 er satt på grunn av omluftsventilator/
Ja. Utebod i kjeller: kullfilter. Ideelt sett bør det være mekanisk avtrekk fra
Byggemåte
Faglært arbeid: Utebod i kjeller merket 320077. 9 m². kjøkken

---

[d075_d075 | Side [1]]
hendingslova (tryggere
bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en kontroll utført av offentlig myndighet (Det
lokale eltilsyn) eller registrert elektrovirksomhet, og en bygningssakkyndig har verken kompetanse eller lov til å
foreta en slik kontroll etter retningslinjer fra FEL (forsirkrift for elektrisk lavspenningsanlegg) da dette krever
spesiell kompetanse og autorisasjon.
Iht. veileder fra direktoratet for byggkvalitet skal ikke den bygningssakkyndige sette tilstandsgrad på det

---

[d075_d075 | Side [1]]
e ferdigstillelsesattest for prosjektet våren 2023. Dette lukker fellesområdene, slik at disse kan rettes.
muligheten for flere å få balkonger eller franske balkonger innenfor det prosjektet som
ble startet i 2010. Om flere ønsker balkonger eller franske balkonger må det etableres Dugnad
et nytt prosjekt med ny søknad til kommunen. Høstdugnad ble avholdt 11.10.2023. Vårdugnad foregikk 26.04.2023. Kontainere ble
leid inn for kasting av søppel fra boder og fellesområder på vårdugnaden, og
Brannsikring

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Sameiet har betydelige fremtidige rehabiliteringskostnader, inkludert rehabilitering av bunnledninger (soilrør) og avløpsrør under bygningene, brannsikring av kjellere (inertgasssystem estimert til 2-3 millioner kroner), og fasaderehabilitering. Dette kan medføre økte felleskostnader for kjøper.",
      "evidence": [
        "Rør under husene må rehabiliteres. I de nærmeste årene må vi rehabilitere alle bunnledninger under bygningene (soilrør) og avløpsrør oppover i bygningene for å unngå kollaps i rørene som kan medføre ubegrensete skader.",
        "Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner.",
        "Over tid er det nødvendig å rehabilitere fasaden på bygningene.",
        "Sameiet står overfor betydelige vedlikeholds- og rehabiliteringsprosjekter i årene som kommer."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Sameiet har negativ egenkapital (udekket tap). Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital. Dette er en alvorlig økonomisk risiko som kan påvirke fremtidige felleskostnader.",
      "evidence": [
        "Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital (udekket tap).",
        "Finanskostnader er høyere enn budsjettert og skyldes i hovedsak høyere renter på lån."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Sameiet har tatt opp et lån på 7 millioner kroner med flytende rente (7,10 % per 31.12.24) og løpetid på 15 år. Det er ingen individuell nedbetalingsordning (IN-ordning). Renteendringer vil direkte påvirke felleskostnadene.",
      "evidence": [
        "For å gjennomføre planlagt vedlikehold av vann- og avløpssystemene og brannsikre kjellere har sameiet tatt opp et lån på 7 (sju) millioner som kommer til stegvis utbetaling etterhvert som kontrakter for arbeidene som skal gjøres foreligger.",
        "Sameiet har et lån med flytende rente, og det er ingen individuell nedbetalingsordning (IN-ordning). Endringer i rentenivået, samt fremtidige vedtak i sameiet, kan påvirke størrelsen på felleskostnadene.",
        "Rentesats pr. 31.12.24 7,10 %. Løpetiden er 15 år."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Felleskostnadene har økt betydelig og er varslet å øke ytterligere. De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024. Dette representerer en vesentlig økning i løpende kostnader for kjøper.",
      "evidence": [
        "De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024.",
        "Felleskostnadene er ikke nødvendigvis dimensjonert for kostnadsøkninger."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Brann- og redningsetaten (BRE) har pålagt sameiet å gjennomføre brannsikringstiltak etter tilsyn. Det er avdekket flere forhold i strid med brannforskriftene, og sameiet har fått en avviksliste som må følges opp innen fem år. Dette medfører fremtidige kostnader.",
      "evidence": [
        "Det ble avdekket flere forhold som er i strid med brannforskriftene. Forholdene er av en slik art at sameiet er pålagt å sette i gang tiltak for å rette dem. BRE har gitt sameiet en avviksliste som må følges opp innen fem år.",
        "Påbudte brannverntiltak er på listen over fremtidige oppgraderingsarbeid og vil medføre kostnader.",
        "Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "description": "Eiendommen er fra 1925 (ca. 100 år gammel), og det er varslet at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt. Kjøper må være forberedt på oppgraderinger på grunn av slitasje, fraværende vedlikehold og utidsmessige tekniske løsninger.",
      "evidence": [
        "Byggeår: 1925",
        "Gården er 100 år i disse dager.",
        "Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens standard.",
        "Avvik fra dagens forskriftskrav og oppstå funksjonssvikt."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Kjøkkenet har kun omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, noe som ikke tilfredsstiller standardens krav til luftutskifting. Det er gitt TG2 på ventilasjon. Det anbefales mekanisk avtrekk, men dette må avklares med sameiet og er ikke alltid gjennomførbart.",
      "evidence": [
        "Det er omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, tilfredsstiller ikke standardens krav til luftutskifting. TG 2 er satt på grunn av omluftsventilator/kullfilter.",
        "Det anbefales å etablere mekanisk avtrekk med avtrekk ut, men dette må avklares med sameiet eller borettslaget. Det er ikke alltid at dette lar seg gjennomføre."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om radonmåling.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523), og eldre reguleringsplaner anbefaler at bevaringsinteresser avklares med kommunen før prosjektering. Dette kan begrense fremtidige bygningsmessige endringer og påvirke verdi og bruksmuligheter.",
      "evidence": [
        "Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523). Eldre reguleringsplaner for området anbefaler at bevaringsinteresser avklares med kommunen før prosjektering.",
        "Eiendommen berøres av følgende hensynssoner: Hensynssone bevaring."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Området er stadig under endring og utvikling – bygg settes opp, rehabiliteres og rives ned. Dette kan påvirke bomiljø, støynivå og eiendomsverdi i fremtiden.",
      "evidence": [
        "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R11",
      "description": "Sameiet planlegger å installere gassanlegg i løpet av 2026. Dette er et fremtidig tiltak som kan medføre kostnader og praktiske ulemper for beboerne, og som ennå ikke er gjennomført.",
      "evidence": [
        "Det planlegges å installere gassanlegg i løpet av 2026.",
        "Det var budsjettert for gassanlegg for brannslukning som ble utsatt på grunn av arbeidet med den omfattende rehabilitering av bunnledninger."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Styret utarbeider en vedlikeholdsplan for bygningene for de neste 10-15 årene, men det er ikke opplyst om hvor mye kostnadene vil bli eller når de vil påløpe. Dette skaper usikkerhet om fremtidige felleskostnader.",
      "evidence": [
        "Styret utarbeider en vedlikeholdsplan for bygningene i sameiet for neste 10-15 årene. Det vil kunne påløpe utgifter knyttet til vedlikehold, men det er ikke opplyst om hvor mye eller når."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Taket er ikke besiktiget av takstmann. Dette innebærer at tilstanden på taket er ukjent, og eventuelle skjulte feil eller mangler kan ikke utelukkes.",
      "evidence": [
        "Taket er ikke besiktiget. - I følge eier 2021"
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Sameiet hadde en møllinfeksjon på loftet i 2023. Selv om dette er håndtert, indikerer det risiko for skadedyrproblemer i bygningen.",
      "evidence": [
        "Sommeren 2023 fikk vi en møllinfeksjon på loftet i en av sameiets bygninger. Årsaken til infeksjonen var oppbevaring av ull og andre tekstiler i bodene."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R15",
      "description": "Energimerket er F, som er blant de dårligste på skalaen A-G. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: F",
        "På en skala fra A til G, der A er best, har denne boligen oppnådd F (en normalbolig vil gjerne ligge i området C-F)."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Det er utført arbeid på el-anlegget i 2021 av faglært, og det er bekreftet at det ikke mangler samsvarserklæring. Risikoen for manglende samsvarserklæring er ikke støttet av evidensen – risikoen bør nedgraderes eller fjernes.",
      "evidence": [
        "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? - Nei",
        "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Ja. Faglært arbeid. Hvilket år ble jobben fullført?: 2021"
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.2
    },
    {
      "risk_id": "R17",
      "description": "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, eller det tinglyses ytterligere utleggspant, kan handelen ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette representerer en risiko for at handelen ikke kan fullføres.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige... Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også... kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
      ],
      "source_documents": [
        "d075_d075"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "sameiet underskudd egenkapital 2024 regnskap",
    "felleskostnader økning budsjett 2025",
    "avløpsrør bunnledninger rehabilitering kostnad estimat",
    "brannrapport NCO avviksliste BRE tiltak lukket",
    "el-anlegg tilsyn DLE kontroll samsvarserklæring",
    "radon måling kjeller underetasje",
    "tak tilstand besiktigelse TGIU snødekket",
    "gassanlegg inertgass kostnad fremdrift 2026",
    "legalpant kommunen heftelser grunnbok",
    "skjeggkre insekter skadedyr bolig sameie"
  ],
  "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rehabiliteringskostnader (soilrør, brannsikring, fasade):** Meget godt støttet av flere konkrete tekstpassasjer. Confidence justeres marginalt opp til 0.98 da evidensen er svært eksplisitt og detaljert.\n\n**R2 – Negativ egenkapital / underskudd 2023:** Godt støttet. Underskudd på 798 725 kr og negativ egenkapital er eksplisitt nevnt. Confidence opprettholdes på 0.97.\n\n**R3 – Lån 7 mill, flytende rente 7,10 %, ingen IN-ordning:** Meget godt støttet med konkrete tall. Confidence opprettholdes på 0.97.\n\n**R4 – Felleskostnader økt 20 % + varslet 25 % økning:** Godt støttet. Merk at økningen på 25 % gjelder fra 1. januar 2024, og det er også nevnt 4 % økning for 2025 i ett dokument. Confidence opprettholdes på 0.95.\n\n**R5 – BRE-pålegg, avviksliste, brannsikringstiltak:** Meget godt støttet. Dokumentene bekrefter tilsyn, avviksliste og 5-årsfristen. Confidence justeres opp til 0.97.\n\n**R6 – Byggeår 1925, slitasje, forskriftsavvik:** Godt støttet. Confidence opprettholdes på 0.93.\n\n**R7 – Ventilasjon TG2, omluftsventilator/kullfilter:** Godt støttet med direkte sitat fra tilstandsrapport. Confidence opprettholdes på 0.92.\n\n**R8 – Manglende radonmåling:** Støttet, men det presiseres at det ikke er krav om radonmåling. Risikoen er reell men noe begrenset. Confidence justeres ned til 0.88 (fra 0.90) da dette er en standardopplysning uten spesifikk indikasjon på radonfare.\n\n**R9 – Bevaringsinteresser, reguleringsplan S-2523:** Godt støttet. Confidence opprettholdes på 0.88.\n\n**R10 – Områdeutvikling:** Støttet av én setning. Risikoen er generisk og lite spesifikk. Confidence justeres ned til 0.78.\n\n**R11 – Gassanlegg planlagt 2026:** Godt støttet. Confidence opprettholdes på 0.85.\n\n**R12 – Vedlikeholdsplan under utarbeidelse, ukjente kostnader:** Godt støttet. Confidence opprettholdes på 0.88.\n\n**R13 – Tak ikke besiktiget:** Støttet, men det er uklart om dette gjelder taket på selve boligen eller fellesarealet. Dokumentet sier \"Taket er ikke besiktiget - I følge eier 2021\", noe som er noe gammelt. Confidence justeres ned til 0.82.\n\n**R14 – Møllinfeksjon 2023:** Støttet, men møllinfeksjon er en begrenset og håndterbar hendelse. Det er ikke dokumentert at problemet vedvarer. Confidence justeres ned til 0.65 – risikoen er marginal.\n\n**R15 – Energimerke F:** Godt støttet. Merk at F faktisk er innenfor normalområdet (C-F) ifølge dokumentet selv, noe som nyanserer risikoen. Confidence justeres ned til 0.85.\n\n**R16 – Manglende samsvarserklæring el-anlegg:** Evidensen MOTBEVISER risikoen. Dokumentet sier eksplisitt \"Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? - Nei\". Risikoen er ikke støttet og bør fjernes eller confidence settes svært lavt (0.20). Anbefaler fjerning.\n\n**R17 – Overbeheftelse/utleggspant:** Støttet av standardformulering i salgsoppgaven. Dette er en generell juridisk risiko som gjelder alle eiendomshandler, ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.75.\n\n**Manglende risikoer som bør vurderes:**\n- Vaskerommene er gamle (nevnt i dokumentet) – potensiell fremtidig kostnad\n- Skjeggkre er spurt om men ikke bekreftet/avkreftet tydelig\n- Legalpant fra kommunen og sameiet (inntil 2G) – ikke synlig i grunnbok\n- Begrensning på maks 2 seksjoner per eier – kan påvirke investeringsverdi\n- Balkongprosjektet er avsluttet – ingen mulighet for nye balkonger uten nytt prosjekt\n- Dugnadspenger (80 kr/mnd) – ny kostnad fra 2024\n"
}

## Raw Response
```json
{
  "id": "msg_014HYYAKsCcg8ybcZWp8xJ43",
  "container": null,
  "content": [
    {
      "id": "toolu_01TbVwNcEPi8yGAG7FEpvy5E",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Sameiet har betydelige fremtidige rehabiliteringskostnader, inkludert rehabilitering av bunnledninger (soilrør) og avløpsrør under bygningene, brannsikring av kjellere (inertgasssystem estimert til 2-3 millioner kroner), og fasaderehabilitering. Dette kan medføre økte felleskostnader for kjøper.",
            "evidence": [
              "Rør under husene må rehabiliteres. I de nærmeste årene må vi rehabilitere alle bunnledninger under bygningene (soilrør) og avløpsrør oppover i bygningene for å unngå kollaps i rørene som kan medføre ubegrensete skader.",
              "Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner.",
              "Over tid er det nødvendig å rehabilitere fasaden på bygningene.",
              "Sameiet står overfor betydelige vedlikeholds- og rehabiliteringsprosjekter i årene som kommer."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Sameiet har negativ egenkapital (udekket tap). Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital. Dette er en alvorlig økonomisk risiko som kan påvirke fremtidige felleskostnader.",
            "evidence": [
              "Årsregnskapet for 2023 viste et underskudd på 798 725 kr, og sameiet har negativ egenkapital (udekket tap).",
              "Finanskostnader er høyere enn budsjettert og skyldes i hovedsak høyere renter på lån."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Sameiet har tatt opp et lån på 7 millioner kroner med flytende rente (7,10 % per 31.12.24) og løpetid på 15 år. Det er ingen individuell nedbetalingsordning (IN-ordning). Renteendringer vil direkte påvirke felleskostnadene.",
            "evidence": [
              "For å gjennomføre planlagt vedlikehold av vann- og avløpssystemene og brannsikre kjellere har sameiet tatt opp et lån på 7 (sju) millioner som kommer til stegvis utbetaling etterhvert som kontrakter for arbeidene som skal gjøres foreligger.",
              "Sameiet har et lån med flytende rente, og det er ingen individuell nedbetalingsordning (IN-ordning). Endringer i rentenivået, samt fremtidige vedtak i sameiet, kan påvirke størrelsen på felleskostnadene.",
              "Rentesats pr. 31.12.24 7,10 %. Løpetiden er 15 år."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Felleskostnadene har økt betydelig og er varslet å øke ytterligere. De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024. Dette representerer en vesentlig økning i løpende kostnader for kjøper.",
            "evidence": [
              "De økte med 20 % fra desember 2023, og det ble budsjettert med en ytterligere økning på 25 % fra 1. januar 2024.",
              "Felleskostnadene er ikke nødvendigvis dimensjonert for kostnadsøkninger."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Brann- og redningsetaten (BRE) har pålagt sameiet å gjennomføre brannsikringstiltak etter tilsyn. Det er avdekket flere forhold i strid med brannforskriftene, og sameiet har fått en avviksliste som må følges opp innen fem år. Dette medfører fremtidige kostnader.",
            "evidence": [
              "Det ble avdekket flere forhold som er i strid med brannforskriftene. Forholdene er av en slik art at sameiet er pålagt å sette i gang tiltak for å rette dem. BRE har gitt sameiet en avviksliste som må følges opp innen fem år.",
              "Påbudte brannverntiltak er på listen over fremtidige oppgraderingsarbeid og vil medføre kostnader.",
              "Brannsikring av kjellere må gjennomføres. Installering av inertgasssystem vil koste sameiet mellom to og 3 millioner kroner."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "description": "Eiendommen er fra 1925 (ca. 100 år gammel), og det er varslet at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt. Kjøper må være forberedt på oppgraderinger på grunn av slitasje, fraværende vedlikehold og utidsmessige tekniske løsninger.",
            "evidence": [
              "Byggeår: 1925",
              "Gården er 100 år i disse dager.",
              "Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens standard.",
              "Avvik fra dagens forskriftskrav og oppstå funksjonssvikt."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Kjøkkenet har kun omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, noe som ikke tilfredsstiller standardens krav til luftutskifting. Det er gitt TG2 på ventilasjon. Det anbefales mekanisk avtrekk, men dette må avklares med sameiet og er ikke alltid gjennomførbart.",
            "evidence": [
              "Det er omluftfunksjon/kullfilter i kombinasjon med naturlig ventilering, tilfredsstiller ikke standardens krav til luftutskifting. TG 2 er satt på grunn av omluftsventilator/kullfilter.",
              "Det anbefales å etablere mekanisk avtrekk med avtrekk ut, men dette må avklares med sameiet eller borettslaget. Det er ikke alltid at dette lar seg gjennomføre."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke har informasjon om eventuell radoneksponering i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om radonmåling.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523), og eldre reguleringsplaner anbefaler at bevaringsinteresser avklares med kommunen før prosjektering. Dette kan begrense fremtidige bygningsmessige endringer og påvirke verdi og bruksmuligheter.",
            "evidence": [
              "Eiendommen ligger i umiddelbar nærhet av spesialområde for bevaring (plan S-2523). Eldre reguleringsplaner for området anbefaler at bevaringsinteresser avklares med kommunen før prosjektering.",
              "Eiendommen berøres av følgende hensynssoner: Hensynssone bevaring."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Området er stadig under endring og utvikling – bygg settes opp, rehabiliteres og rives ned. Dette kan påvirke bomiljø, støynivå og eiendomsverdi i fremtiden.",
            "evidence": [
              "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R11",
            "description": "Sameiet planlegger å installere gassanlegg i løpet av 2026. Dette er et fremtidig tiltak som kan medføre kostnader og praktiske ulemper for beboerne, og som ennå ikke er gjennomført.",
            "evidence": [
              "Det planlegges å installere gassanlegg i løpet av 2026.",
              "Det var budsjettert for gassanlegg for brannslukning som ble utsatt på grunn av arbeidet med den omfattende rehabilitering av bunnledninger."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Styret utarbeider en vedlikeholdsplan for bygningene for de neste 10-15 årene, men det er ikke opplyst om hvor mye kostnadene vil bli eller når de vil påløpe. Dette skaper usikkerhet om fremtidige felleskostnader.",
            "evidence": [
              "Styret utarbeider en vedlikeholdsplan for bygningene i sameiet for neste 10-15 årene. Det vil kunne påløpe utgifter knyttet til vedlikehold, men det er ikke opplyst om hvor mye eller når."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Taket er ikke besiktiget av takstmann. Dette innebærer at tilstanden på taket er ukjent, og eventuelle skjulte feil eller mangler kan ikke utelukkes.",
            "evidence": [
              "Taket er ikke besiktiget. - I følge eier 2021"
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Sameiet hadde en møllinfeksjon på loftet i 2023. Selv om dette er håndtert, indikerer det risiko for skadedyrproblemer i bygningen.",
            "evidence": [
              "Sommeren 2023 fikk vi en møllinfeksjon på loftet i en av sameiets bygninger. Årsaken til infeksjonen var oppbevaring av ull og andre tekstiler i bodene."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R15",
            "description": "Energimerket er F, som er blant de dårligste på skalaen A-G. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: F",
              "På en skala fra A til G, der A er best, har denne boligen oppnådd F (en normalbolig vil gjerne ligge i området C-F)."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Det er utført arbeid på el-anlegget i 2021 av faglært, og det er bekreftet at det ikke mangler samsvarserklæring. Risikoen for manglende samsvarserklæring er ikke støttet av evidensen – risikoen bør nedgraderes eller fjernes.",
            "evidence": [
              "Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? - Nei",
              "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Ja. Faglært arbeid. Hvilket år ble jobben fullført?: 2021"
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.2
          },
          {
            "risk_id": "R17",
            "description": "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, eller det tinglyses ytterligere utleggspant, kan handelen ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette representerer en risiko for at handelen ikke kan fullføres.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige... Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også... kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
            ],
            "source_documents": [
              "d075_d075"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "sameiet underskudd egenkapital 2024 regnskap",
          "felleskostnader økning budsjett 2025",
          "avløpsrør bunnledninger rehabilitering kostnad estimat",
          "brannrapport NCO avviksliste BRE tiltak lukket",
          "el-anlegg tilsyn DLE kontroll samsvarserklæring",
          "radon måling kjeller underetasje",
          "tak tilstand besiktigelse TGIU snødekket",
          "gassanlegg inertgass kostnad fremdrift 2026",
          "legalpant kommunen heftelser grunnbok",
          "skjeggkre insekter skadedyr bolig sameie"
        ],
        "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rehabiliteringskostnader (soilrør, brannsikring, fasade):** Meget godt støttet av flere konkrete tekstpassasjer. Confidence justeres marginalt opp til 0.98 da evidensen er svært eksplisitt og detaljert.\n\n**R2 – Negativ egenkapital / underskudd 2023:** Godt støttet. Underskudd på 798 725 kr og negativ egenkapital er eksplisitt nevnt. Confidence opprettholdes på 0.97.\n\n**R3 – Lån 7 mill, flytende rente 7,10 %, ingen IN-ordning:** Meget godt støttet med konkrete tall. Confidence opprettholdes på 0.97.\n\n**R4 – Felleskostnader økt 20 % + varslet 25 % økning:** Godt støttet. Merk at økningen på 25 % gjelder fra 1. januar 2024, og det er også nevnt 4 % økning for 2025 i ett dokument. Confidence opprettholdes på 0.95.\n\n**R5 – BRE-pålegg, avviksliste, brannsikringstiltak:** Meget godt støttet. Dokumentene bekrefter tilsyn, avviksliste og 5-årsfristen. Confidence justeres opp til 0.97.\n\n**R6 – Byggeår 1925, slitasje, forskriftsavvik:** Godt støttet. Confidence opprettholdes på 0.93.\n\n**R7 – Ventilasjon TG2, omluftsventilator/kullfilter:** Godt støttet med direkte sitat fra tilstandsrapport. Confidence opprettholdes på 0.92.\n\n**R8 – Manglende radonmåling:** Støttet, men det presiseres at det ikke er krav om radonmåling. Risikoen er reell men noe begrenset. Confidence justeres ned til 0.88 (fra 0.90) da dette er en standardopplysning uten spesifikk indikasjon på radonfare.\n\n**R9 – Bevaringsinteresser, reguleringsplan S-2523:** Godt støttet. Confidence opprettholdes på 0.88.\n\n**R10 – Områdeutvikling:** Støttet av én setning. Risikoen er generisk og lite spesifikk. Confidence justeres ned til 0.78.\n\n**R11 – Gassanlegg planlagt 2026:** Godt støttet. Confidence opprettholdes på 0.85.\n\n**R12 – Vedlikeholdsplan under utarbeidelse, ukjente kostnader:** Godt støttet. Confidence opprettholdes på 0.88.\n\n**R13 – Tak ikke besiktiget:** Støttet, men det er uklart om dette gjelder taket på selve boligen eller fellesarealet. Dokumentet sier \"Taket er ikke besiktiget - I følge eier 2021\", noe som er noe gammelt. Confidence justeres ned til 0.82.\n\n**R14 – Møllinfeksjon 2023:** Støttet, men møllinfeksjon er en begrenset og håndterbar hendelse. Det er ikke dokumentert at problemet vedvarer. Confidence justeres ned til 0.65 – risikoen er marginal.\n\n**R15 – Energimerke F:** Godt støttet. Merk at F faktisk er innenfor normalområdet (C-F) ifølge dokumentet selv, noe som nyanserer risikoen. Confidence justeres ned til 0.85.\n\n**R16 – Manglende samsvarserklæring el-anlegg:** Evidensen MOTBEVISER risikoen. Dokumentet sier eksplisitt \"Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? - Nei\". Risikoen er ikke støttet og bør fjernes eller confidence settes svært lavt (0.20). Anbefaler fjerning.\n\n**R17 – Overbeheftelse/utleggspant:** Støttet av standardformulering i salgsoppgaven. Dette er en generell juridisk risiko som gjelder alle eiendomshandler, ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.75.\n\n**Manglende risikoer som bør vurderes:**\n- Vaskerommene er gamle (nevnt i dokumentet) – potensiell fremtidig kostnad\n- Skjeggkre er spurt om men ikke bekreftet/avkreftet tydelig\n- Legalpant fra kommunen og sameiet (inntil 2G) – ikke synlig i grunnbok\n- Begrensning på maks 2 seksjoner per eier – kan påvirke investeringsverdi\n- Balkongprosjektet er avsluttet – ingen mulighet for nye balkonger uten nytt prosjekt\n- Dugnadspenger (80 kr/mnd) – ny kostnad fra 2024\n"
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
    "input_tokens": 21206,
    "output_tokens": 5579,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
