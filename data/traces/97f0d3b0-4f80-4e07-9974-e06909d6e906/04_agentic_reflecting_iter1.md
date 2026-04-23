# Trace: agentic_reflecting_iter1
- **Run ID:** 97f0d3b0-4f80-4e07-9974-e06909d6e906
- **Tidspunkt:** 2026-03-23T19:06:32.672428+00:00
- **Varighet:** 150.29s
- **Input tokens:** 20461
- **Output tokens:** 7048

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
Risiko 1: Høy fellesgjeld med løpetid frem til 2049 – andel fellesgjeld er kr 625 641, fordelt på flere lån med rente 5,25–5,35 % p.a. Samlet borettslags­gjeld er svært høy (over 40 millioner kroner), noe som øker risikoen for fremtidige felleskostnadsøkninger.
  Confidence: 0.95
  Evidens: Fellesgjeld Kr 625 641 pr. 28.01.2026; Saldo per 28.01.2026: 28 185 537 – Andel av saldo: 408 991; Saldo per 28.01.2026: 10 000 814 – Andel av saldo: 140 120; Saldo per 28.01.2026: 2 794 691 – Andel av saldo: 39 156; Saldo per 28.01.2026: 628 996 – Andel av saldo: 8 813; Rentesats per 28.01.2026: 5.35% pa. / 5.25% pa.; Siste termin 30.11.2049 / 01.09.2049 / 10.07.2039

Risiko 2: Borettslaget hadde underskudd i regnskapet og felleskostnadene er nylig økt med 8,15 %. Fjorårets regnskap viste et underskudd på kr 1 171 574, og felleskostnadene økte fra kr 7 236 til kr 7 826 pr. mnd fra 01.02.2026. Dette indikerer risiko for ytterligere kostnadsøkninger.
  Confidence: 0.92
  Evidens: Fjorårets årsregnskap viste et underskudd på kr. 1 171 574,‑; Underskuddet skyldes i hovedsak vedlikeholdskostnader og eksterne tjenester; Felleskostnadene økte med 8.15% fra og med 01.02.2026 fra kr. 7 236,‑ til kr. 7 826,‑; I 2025 var det budsjettert med et overskudd på kr. 1 421 195,‑

Risiko 3: Nytt lån tatt opp i november 2024 for rehabilitering av baderom (lån 16368682059, DNB). Dette er et relativt nytt lån som vil belaste felleskostnadene fremover, og andelseierne har mulighet til individuell nedbetaling kun to ganger per år.
  Confidence: 0.88
  Evidens: Det er i november 2024 tatt opp lån (lån 16368682059) for rehabilitering av baderom; Borettslaget har etablert individuell nedbetalingsmulighet på lån 16368682059 (DNB). Lånopptak ifbm felles baderomsrehabilitering i borettslaget; Innbetaling kan gjøres to ganger pr år ‑ senest 10. mars eller 10. september

Risiko 4: Flere bygningsdeler er gitt tilstandsgrad TG 2, herunder etasjeskiller, vannbåren varme/radiatorer, kjøkkeninnredning og innvendig dør på bad. TG 2 indikerer vesentlige avvik og begrenset gjenværende brukstid, noe som kan medføre fremtidige utbedringskostnader.
  Confidence: 0.93
  Evidens: Tilstandsgrad 2: Innvendig dør (Bad / 1. etasje), Etasjeskiller, Vannbåren varme, Kjøkkeninnredning; TG 2 er gitt på grunn av alder på radiatorene og tilhørende røropplegg. Forholdet medfører forhøyet risiko for at det kan oppstå lekkasjer; Skjøten til benkeplaten er ikke understøttet. Platetoppen har noe synlig overflateslitasje. TG 2 er gitt på grunn av nevnte forhold; TG 2 signaliserer at man bør være oppmerksom og holde angitt bygningsdel under oppsyn. Gjenværende brukstid kan være begrenset

Risiko 5: Dør på bad er plassert innenfor rommets våtsone (mindre enn 1 meter fra dusj), noe som er i strid med krav om at treverk ikke skal benyttes i våtsoner. Dette kan medføre fukt- og råteskader.
  Confidence: 0.9
  Evidens: Dør i bad er plassert innenfor rommets våtsone (<1 m fra dusj). Det skal ikke benyttes treverk (organisk materiale) i våtsoner, da dette kan medføre fukt‑ og råteskader i døren. TG: 2

Risiko 6: Tidligere skadet membran på våtrom. Selger opplyser at det var skadet membran i forkant av våtromsrenoveringen, noe som var årsaken til at badet ble renovert. Selv om badet er renovert i 2025, indikerer historikken fuktproblematikk.
  Confidence: 0.85
  Evidens: Det var skadet membran i forkant av våtroms‑renoveringen. Det var også årsaken til at våtrommet ble renovert; Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja

Risiko 7: Ingen radonmåling er utført. Selger har ikke utført radonmåling, og dette er bekreftet i egenerklæringen. Radon kan utgjøre en helserisiko, særlig i leiligheter i 1. etasje.
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid; Er det foretatt radonmåling? Nei

Risiko 8: Leiligheten ligger i 1. etasje, noe som øker risikoen for fuktinntrenging fra grunnen, støy fra fellesarealer og innbrudd. Kombinert med manglende radonmåling og eldre bygning (oppført 1936) er dette en forhøyet risikofaktor.
  Confidence: 0.75
  Evidens: Leiligheten ligger i 1. etasje med balkong; Bygningen er oppført i 1936; Selger har ikke utført radonmåling

Risiko 9: Felles bygningsdeler som yttervegger, takkonstruksjon, drenering, grunnmur og fundamenter er ikke tilstandsvurdert i rapporten. Dette gir begrenset informasjon om bygningens faktiske tilstand og kan skjule vesentlige feil og mangler.
  Confidence: 0.87
  Evidens: Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg

Risiko 10: Pågående byggesaker i nærområdet, inkludert mulig ulovlig hyblifisering i Trondheimsveien 174 og 155, samt etablering av nye tekniske rom i Dynekilgata 20. Dette kan påvirke bomiljøet og eiendommens omgivelser.
  Confidence: 0.78
  Evidens: Trondheimsveien 174 ‑ mulig ulovlig hyblifisering; Trondheimsveien 155 ‑ mulig ulovlig hyblifisering; Dynekilgata 20 ‑ etablering av nye tekniske rom for rehabiliteringstiltak som berører og betinger bruk av gategrunn

Risiko 11: Tinglyst evigvarende gjerderett og vedlikeholdsplikt av gjerde på eiendommen. Dette kan medføre løpende vedlikeholdsforpliktelser og begrensninger i bruken av eiendommen.
  Confidence: 0.8
  Evidens: Evigvarende gjerderett – Gjelder denne registerenheten med flere; 29.01.2001 ‑ Dokumentnr: 5296 ‑ Erklæring/avtale – Vedlikeholdsplikt av gjerde; 21.12.1934 ‑ Dokumentnr: 901577 ‑ Registrering av grunn

Risiko 12: Borettslaget har legalpant i andelen for krav på felleskostnader med prioritet over tinglyste lån (inntil 2G). Dersom andre andelseiere misligholder sine forpliktelser, kan øvrige andelseiere bli belastet for disse kostnadene.
  Confidence: 0.85
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne

Risiko 13: Boden som inngår i BRA-e ligger på sameiets fellesareal og kan omdisponeres av borettslaget på et senere tidspunkt. Kjøper har dermed ingen sikret rett til å beholde boden.
  Confidence: 0.9
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet

Risiko 14: Avvik mellom godkjente tegninger og faktisk utførelse: Baderommet er utvidet mot kjøkken i 2025. Selv om arbeidet er godkjent, indikerer avviket at det er gjort endringer som ikke samsvarer med opprinnelige byggetegninger.
  Confidence: 0.72
  Evidens: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse: Baderom oppgradert i 2025 er noe utvidet mot kjøkken. Arbeidet er godkjent

Risiko 15: Energikarakter G (laveste karakter) indikerer dårlig energieffektivitet. Dette kan medføre høyere strømkostnader for kjøper og risiko for fremtidige pålegg om energioppgradering.
  Confidence: 0.82
  Evidens: Energikarakter: G; Det antas at det årlige strømforbruket er ca. 1 314 kWh

Risiko 16: Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning, og korttidsutleie er begrenset til 30 døgn per år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.
  Confidence: 0.83
  Evidens: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år; Korttidsutleie er tillatt i opptil 30 døgn per år uten [styregodkjenning]

Risiko 17: Bygningen er oppført i 1936 og er svært gammel. Referansenivå for tilstandsvurderingen er satt til byggeår, noe som innebærer at mange bygningsdeler kan ha begrenset gjenværende levetid og at fremtidige vedlikeholdskostnader kan bli betydelige.
  Confidence: 0.88
  Evidens: Bygningen er oppført i 1936, og den tids byggeskikk ligger til grunn for konstruksjonsmessige forhold; Referansenivå for rapporten er satt til byggeår og Forskrift til avhendingslova; Aldersbetraktning er vurdert ut fra levetidstabeller utarbeidet av Sintef Byggforsk

Dokumentkontekst:
[d014_d014 | Side [1]]
rde
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ Evigvarende gjerderett
casedet.asp?caseno=202505153 Gjelder denne registerenheten med flere
Tinglyste heftelser
29.01.2001 ‑ Dokumentnr: 5296 ‑ Erklæring/ avtale
Tinglyste heftelser og rettigheter: På eiendommen er det Vedlikeholdsplikt av gjerde
tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny
hjemmelshaver: 21.12.1934 ‑ Dokumentnr: 901577 ‑ Registrering av grunn
Denne matrikkelenhet opprettet fra:
301/

---

[d014_d014 | Side [1]]
atrikkelenhet:
GNR. 83. BNR. 340
22.04.1958 ‑ Dokumentnr: 4338 ‑ Skjønn
Gjelder denne registerenheten med flere
42

## Side 43

OM EIENDOMMEN
Odel
Legalpant: Borettslaget har legalpant på inntil 2G som
sikkerhet for betaling av felleskostnader. Dette betyr at Det hviler ikke odelsrett på eiendommen.
borettslaget har prioritet over tinglyste lån når det gjelder
betaling av felleskostnader, og kan kreve inn pengene før
Radonmåling
andre kreditorer, selv om de har lån registrert på andelen.
Selger har ikke

---

[d014_d014 | Side [1]]
torer, selv om de har lån registrert på andelen.
Selger har ikke utført radonmåling. Det er ikke krav om
dette med mindre boligen er helt eller delvis utleid.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
Diverse
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og Borettslagsmodellen innebærer at borettslaget eier
vedlikeholdsansvaret for disse påhviler sameiet. eiendommen, mens andelseierne eier andeler i
Adkomst til eiendommen skjer via offentlig

---

[d014_d014 | Side [1]]
eid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Initialer selger: AEN 2
30006210
:ecnerefer
tnemucoD
50

## Side 51

15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre

---

[d014_d014 | Side [1]]
 innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner

---

[d014_d014 | Side [1]]
akelse reklameres
interessenter oppfordres til å gjennomgå denne før bud på forhold som burde ha vært oppdaget ved en ordinær
inngis. gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf.

---

[d014_d014 | Side [1]]
adering av sikringsskap i 2022.
finnes på eiendommen, vil heller ikke følge med i salget. Arbeid utført av Ampere.
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Foreligger det samsvarserklæring (i henhold til forskrift
garanti fra produsent eller leverandør. om elektriske lavspenningsanlegg)?
Ja.
Kjøper aksepterer at det kan forekomme hull og merker
etter montering av inventar og utstyr som ikke er en del Kjenner du til om det er utført

---

[d014_d014 | Side [1]]
 noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AEN 3
30006210
:ecnerefer
tnemucoD
51

## Side

---

[d014_d014 | Side [1]]
elger leverer eiendommen i ryddig og rengjort stand.
Det er ikke driveplikt på eiendommen.
Kontrakts‑
Konsesjon
grunnlag
Kjøp av eiendommen krever ikke konsesjon. Dersom
eiendommen er større enn 2 mål, må kjøper undertegne
Overtakelse
nødvendige dokumenter for å søke om konsesjonsfrihet.
Tidspunkt for overtakelse avtales mellom kjøper og
selger.
43

## Side 44

OM EIENDOMMEN
Det kan være forskjell mellom boligens faktiske bruk av
Forsikring
rom og det som er godkjent av myndighetene.

---

[d014_d014 | Side [1]]
vendig areal er oppmålt på stedet. Ekstern bod i kjeller med nr. 1265
5/13
58

## Side 59

Leilighet
Felles bygningsdeler
Beskrivelse: Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt
borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon,
drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser,
etasjeskiller, piper og fyringsanlegg.
Nevnte bygningsdeler er vurdert i den grad de har tilknytning til leiligheten,

---

[d014_d014 | Side [1]]
eierne eier andeler i
Adkomst til eiendommen skjer via offentlig vei. borettslaget, som gir borett til en bestemt bolig.
Andelseierne har ikke personlig ansvar for borettslagets
fellesgjeld, men de må dekke borettslagets løpende
Utleie
utgifter. Manglende innbetaling av fellesutgiftene som
Adgang til utleie: Det er begrenset adgang til å leie ut følge av andre andelshaveres mislighold, eller dersom
bolig i borettslag. Med styrets godkjenning og under borettslaget sitter på fraflyttede og/ eller usolgte

---

[d014_d014 | Side [1]]
ffentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om

---

[d014_d014 | Side [1]]
dert i felleskostnadene
Omkostninger og betales separat:
‑ Strøm til egen leilighet.
9 300 (Boligkjøperforsikring* (valgfritt)) ‑ Innboforsikring.
545 (Tinglysingsgebyr ‑ hjemmel) ‑ Leie parkeringsplass/ administrasjonskostnader for de
545 (Tinglysningsgebyr ‑ pantedokument) som har bruksrett til garasjeplass.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Strømforbruk for lading av elbil/ ladbar hybridbil
1 090 (Omkostninger totalt (uten Boligkjøperforsikring)) faktureres særskilt.
10 390

---

[d014_d014 | Side [1]]
 manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om

---

[d014_d014 | Side [1]]
balkonger, terrasser, veranda og altan tilknyttet boenheten, med betegnelsen terrasse-
og balkongareal (Åpent areal/TBA).
Som tilleggsinformasjon kan det opplyses om ikke-måleverdige gulvarealer som skyldes skråtak og lav himlingshøyde
(ALH). Summen av BRA og ALH betegnes gulvareal (GUA).
Fordelingen mellom de ulike arealtyper er basert på retningslinjene og takstmannens observasjoner under befaring.
Erfaring- og kompetansekrav:
Takstmannen/bygningssakkyndig plikter å følge selskapets etiske retningslinjer

---

[d014_d014 | Side [1]]
bindelse med
Dynekilgata 20 ‑ etablering av nye tekniske rom for rehabiliteringstiltak som berører og betinger bruk av
datatekniske installasjoner gategrunn
https:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/
casedet.asp?caseno=202516317
21.11.2000 ‑ Dokumentnr: 69386 ‑ Erklæring/ avtale
Trondheimsveien 184 ‑ endring av skilt fra Shell til St1 Bestemmelser om bruk av gårdsrom
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ Bestemmelse om anlegg og vedlikehold av ledninger
casedet.asp?caseno=202515082

---

[d014_d014 | Side [1]]
e bruk av
Forsikring
rom og det som er godkjent av myndighetene. Alle
Boligselgerforsikring: Selger har tegnet interessenter anbefales derfor å undersøke eiendommen
boligselgerforsikring som dekker selgers ansvar etter nøye, gjerne sammen med fagperson, før bud gis.
avhendingsloven begrenset oppad kr. 20 000 000,‑. Dersom kjøper velger å kjøpe uten å ha sett
Egenerklæringsskjema er vedlagt salgsoppgaven og eiendommen, kan det ikke etter overtakelse reklameres
interessenter oppfordres til å gjennomgå denne

---

[d014_d014 | Side [1]]
 eller godkjent.
Bruksareal BRA:
Det foreligger ferdigattest for eiendommen, datert BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
31.10.2020 for utskiftning av vinduer BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
boenheten og som tilhører denne, for eksempel eksterne
Det foreligger ferdigattest for eiendommen, datert boder.
36

## Side 37

OM EIENDOMMEN
BRA‑b ‑ Innglasset balkong, altan, terrasser. borettslaget. Dokumentasjon er fremvist. Fliser på
betong. Sluk i plast. Fall mot sluk på

---

[d014_d014 | Side [1]]
ler om har vært utført arbeid/ kontroll
på vann/ avløp?
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Nei.
standardliste "Oversikt over løsøre og tilbehør", som
legges til grunn med mindre annet er spesifisert i Kjenner du til om det er/ har vært utført arbeid på
salgsoppgaven. el‑anlegget eller andre installasjoner (f.eks. oljetank,
sentralfyr, ventilasjon)?
Gjenstander som er nevnt i standardlisten, men som ikke Ja, kun av faglært. Oppgradering av sikringsskap i 2022.
finnes på eiendommen, vil heller

---

[d014_d014 | Side [1]]
 anlegg og vedlikehold av ledninger
casedet.asp?caseno=202515082 m.m.
Bestemmelser om utbedring etter komm. krav
Trondheimsveien 157 ‑ åpning i branncellebegrensende Kan ikke slettes uten samtykke fra Oslo Kommune
vegg v/ direktøren for Bolig‑ og eiendomsetaten
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/
casedet.asp?caseno=202509588
29.01.2001 ‑ Dokumentnr: 5296 ‑ Bestemmelse om
Trondheimsveien 155 ‑ mulig ulovlig hyblifisering gjerde
http:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/ Evigvarende

---

[d014_d014 | Side [1]]
 dokumentasjon for faglig utførelse. Enkle
byggetekniske feil og mangler uten skadelige konsekvenser, som ikke har vesentlig betydning for byggekvaliteten.
Bygningsdelen fremstår som uten noen nevneverdige synlige slitasje eller svakheter. Alder er i den forbindelse også et
symptom.
TG 2: Vesentlige avvik. TG 2 benyttes i flere sammenhenger. Dette gjelder i hovedsak slitasje i forhold til forventet levetid,
12/13
65

## Side 66

feil utførelse, nedsatt funksjon og manglende dokumentasjon der dette er

---

[d014_d014 | Side [1]]
k.
Tilstandsgrader uttrykker den tilstand bygningsdelen/objektet er etter et definert referansenivå.
Tilstandsgrad 0, (TG 0): Bygningsdel nyere enn fem år, ingen symptomer og påkrevet
dokumentasjon fremvist.
Tilstandsgrad 1, (TG 1): Mindre avvik, normal slitasje og ny bygningsdel med manglende
dokumentasjon.
Tilstandsgrad 2, (TG 2): Vesentlige avvik, feil utførelse, skade, vesentlig slitasje, risiko for skade på
grunn av alder, etc.
Tilstandsgrad 3, (TG 3): Store eller alvorlige avvik. Funksjonssvikt,

---

[d014_d014 | Side [1]]
2-23. På detaljnivå for den enkelte bygningsdel, er det tryggere bolighandel og NS 3600 som er
referansenivået for valg av tilstandsgrad. Tilstandsgrader/TG: er uttrykk for hvilken tilstand bygningsdelen/objektet er
etter et definert referansenivå.
TG 0: Bygningsdeler uten avvik, slitasje og alderspåvirkning, nyere enn fem år. Dokumentasjon er fremlagt der dette er
påkrevd.
TG 1: Mindre avvik, normal slitasje og ny bygningsdel med manglende dokumentasjon for faglig utførelse. Enkle
byggetekniske feil og

---

[d014_d014 | Side [1]]
andsgrad 3, (TG 3): Store eller alvorlige avvik. Funksjonssvikt, sammenbrudd og behov for tiltak
innen kort tid.
Tilstandsgrad IU (TG IU): Ikke undersøkt eller ikke mulig å undersøke.
Mer om rapportens forutsetninger står oppført i tilstandsrapportens siste del.
Konklusjon tilstand
Bebyggelse
Toroms andelsleilighet i boligblokk med en ekstern bod i henholdsvis kjeller.
Leiligheten ligger i 1. etasje med balkong.
Standard
Velholdt leilighet med normal god standard.
Oppgraderinger i leiligheten
Følgende

---

[d014_d014 | Side [1]]
estsanitering.
2/13
55

## Side 56

For detaljert informasjon om bygningens vedlikeholdsmessige status vises det til styret.
Referansenivå
Bygningen er oppført i 1936, og den tids byggeskikk ligger til grunn for konstruksjonsmessige forhold. Referansenivå for
rapporten er satt til byggeår og Forskrift til avhendingslova.
Aldersbetraktning er vurdert ut fra levetidstabeller utarbeidet av Sintef Byggforsk.
Om vurderinger
Normal slitasje fra tidspunkt for legging av gulv, og normal slitasje på vegg- og

---

[d014_d014 | Side [1]]
rk" i veggens bunnsvill, og det ble ikke
som tilleggsinformasjon til øvrige arealer. påvist fukt utover normale verdier. Hullet er sikret etter
hulltaking med et plastlokk.
Fellesarealer og rettigheter til
Følgende er gitt tilstandsgrad 2:
‑ Dør i bad er plassert innenfor rommets våtsone (<1 m
bruk
fra dusj). Det skal ikke benyttes treverk (organisk
Det gjøres særskilt oppmerksom på at boden som er materiale) i våtsoner, da dette kan medføre fukt‑ og
medtatt i BRA‑e og totalt BRA, ligger på sameiets

---

[d014_d014 | Side [1]]
og kuleventiler i kjeller + plugging av ubrukte
radiatorkurser i 2020.
Type takst avholdt av takstmann: Tilstandsrapport
Kjenner du til om det har vært utført arbeid på terrasse/
Sammendrag selgers egenerklæring: Kjenner du til om garasje/ tak/ fasade?
det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, Nei.
lekkasje, råte, lukt eller soppskader?
Ja. Det var skadet membran i forkant av
Byggemåte
våtroms‑renoveringen. Det var også årsaken til at
våtrommet ble renovert. Utvendige bygningsdeler:
‑

---

[d014_d014 | Side [1]]
et. TG 2 er gitt på grunn av alder på 24.04‑2025 er fremvist for følgende arbeider: Arbeid i
radiatorene og tilhørende røropplegg. Forholdet medfører forbindelse med oppussing av bad. (Sans Bygg AS)
forhøyet risiko for at det kan oppstå lekkasjer fra
38

## Side 39

OM EIENDOMMEN
Utfyllende tilstandsrapport ligger vedlagt. Ja. Renoveringen ble gjort i samarbeid med OPAK.
Hvitevarer: Integrerte hvitevarer medfølger. Kjenner du til feil eller om har vært utført arbeid/ kontroll
på vann/ avløp?
Innbo og

---

[d014_d014 | Side [1]]
rsaken til at
våtrommet ble renovert. Utvendige bygningsdeler:
‑ Grunnmur i granitt.
Kjenner du til om det er utført arbeid på bad/ våtrom? ‑ Yttervegger i murverk, forblendet utvendig med
Ja, kun av faglært. Totalrenovering ‑ og utvidelse av bad. teglstein.
Arbeid utført av Sans Bygg. ‑ Yttertak i trekonstruksjon, tekket med takstein.
Ble tettesjikt/ membran/ sluk oppgradert/ fornyet? Innvendige bygningsdeler:
Ja. Alt ble oppgradert og fornyet. ‑ Felles trapper i betong.
‑ Etasjeskiller i betong.
Er

---

[d014_d014 | Side [1]]
Tilstandsvurdering: TG: 1
Ventilasjon
Beskrivelse: Friskluft via spalteventiler i vinduer.
Friskluftsventil på yttervegg i soverom.
Luftespalte med lufttilførsel under dør til bad.
Mekanisk avtrekk med ventil i bad og kjøkken.
Er avtrekk undersøkt med ark eller lignende? Ja, med ark.
Tilstandsvurdering: Referansenivå på luftbehandling er satt til byggeår. TG: 1
Kjøkken
Kjøkkeninnredningen beskrives og tilstandsvurderes i forhold til alder, kvalitet og faglig utførelse. Det foretas
fuktvurdering i forhold

---

[d014_d014 | Side [1]]
legget.
Pipe og ildsteder besiktiges visuelt på overflater under befaringen, og vurderes etter enkle kriterier. Ildsteder og pipeløp
blir ikke funksjonstestet.
I de tilfeller det er snø på bygningsdeler/eiendommen, vil ikke takstmann kunne gjøre vurderinger på de flater som er
tildekket.
Tilstandsgrader:
Tilstandsgrader for hver bygningsdel er vurdert i forhold til det overordnet nivå, og de prinsipper som er oppgitt i tryggere
bolighandel § 2-23. På detaljnivå for den enkelte bygningsdel, er det tryggere

---

[d014_d014 | Side [1]]
: 1
Overflater på innvendige vegger
Beskrivelse: Pusset og malte overflater. Sparklet og malte plater. Teglstein.
Tilstandsvurdering: TG: 1
Overflater på innvendig himling
Beskrivelse: Sparklet og malte plater.
Himlingshøyde ca. 2,42 m målt i stue.
Tilstandsvurdering: TG: 1
Diverse utstyr og bygningsdeler
Her beskrives utstyr og bygningsdeler som tidligere ikke er beskrevet.
Fast inventar
Beskrivelse: Skyvedørsgarderobe med speilfronter i soverom.
Tilstandsvurdering: TG: 1
Elektrisk anlegg
Det elektriske

---

[d014_d014 | Side [1]]
ennomføringer besiktiges og kommenteres.
Dokumentasjon – Bad, 1. etasje
Beskrivelse: Badet er i følge eier pusset opp i 2025 i regi av borettslaget.
Dokumentasjon er fremvist. Ferdigattest for utskifting av rør og rehabilitering av bad
foreligger.
Våtromsgulv – Bad, 1. etasje
Beskrivelse: Fliser på betong. Sluk i plast.
Fall mot sluk på gulv og slukhøyde er kontrollert, og vurdert tilfredsstillende.
Tilstandsvurdering: TG: 0
Våtromsvegger – Bad, 1. etasje
Beskrivelse: Flislagte

---

[d014_d014 | Side [1]]
verk (organisk materiale) i våtsoner, da dette kan medføre fukt- og
råteskader i døren. TG: 2
Hulltaking – Bad, 1. etasje
Beskrivelse: Det ble borret et 73 mm hull i badets tilstøtende vegg fra entré. Det ble benyttet fuktmåler
med "pigger i treverk" i veggens bunnsvill, og det ble ikke påvist fukt utover normale
verdier. Hullet er sikret etter hulltaking med et plastlokk.
Tilstandsvurdering: TG: 0
11/13
64

## Side 65

Rapportens forutsetninger:
Tilstandsrapporten er utarbeidet for å ivareta de

---

[d014_d014 | Side [1]]
ra tidspunkt for legging av gulv, og normal slitasje på vegg- og himlingsoverflater ikke hensyntatt, da
toleranse for slitasje i stor grad er en subjektiv vurdering.
Se for øvrig detaljert tilstandsbeskrivelse.
Tilstandsgrad 2:
Innvendig dør (Bad / 1. etasje)
Etasjeskiller
Vannbåren varme
Kjøkkeninnredning
3/13
56

## Side 57

Befaring og eiendomsopplysninger
Rapportdata
Kunde: Andrea Elisabeth Noisternig
Takstmenn: Daniel Aas
Befaring/tilstede: Eier: Andrea Elisabeth Noisternig, Takstmann: Daniel

---

[d014_d014 | Side [1]]
ørelse, nedsatt funksjon og manglende dokumentasjon der dette er påkrevd iht. regelverk for utførelse. TG 2
signaliserer at man bør være oppmerksom og holde angitt bygningsdel under oppsyn. Gjenværende brukstid kan være
begrenset. Skader og behov for vedlikehold kan oppstå.
TG 3: Store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt eller sammenbrudd.
Ved TG 3

---

[d014_d014 | Side [1]]
andsvurdering: Det er under befaringen benyttet fuktindikator og utført fuktsøk på utsatte
punkter. Det er ikke funnet indikasjoner på fukt utover normale verdier.
Platetoppen har noe synlig overflateslitasje. Skjøten til benkeplaten er ikke
understøttet. TG 2 er gitt på grunn av nevnte forhold. TG: 2
Innvendige overflater
Det er foretatt besiktigelse og gjort enkel beskrivelse av innvendige overflater. Det er ikke gjort vurdering i tilfeller hvor
overflater har normal slitasje i forhold til

---

[d014_d014 | Side [1]]
ygging av fuktskader og
derfor kontaktes for å vurdere tiltakene nærmere. andre byggskader.
Eventuell gjennomføring av tiltak må skje i samsvar
68

## Side 69

Boligdata som er grunnlag for energimerket
Energimerket og andre data i denne attesten Der opplysninger ikke er oppgitt, brukes typiske stan-
er beregnet ut fra opplysninger som er gitt av boligeier dardverdier for den aktuelle bygningstypen. For mer
da attesten ble registrert. Nedenfor er en oversikt over informasjon om beregninger, se
oppgitte

---

[d014_d014 | Side [1]]
beider:
Følgende er gitt tilstandsgrad 2: Oppgradering av innmat sikringsskap. Montering av
‑ Anlegget er vurdert ut ifra alder, og enkle observasjoner overspenningsvern. Feilsøking på jording til bad.
i forbindelse med fordelingsskap og reguleringsventiler. Tilkobling av jording til stikk bad. (Ampere Installasjon &
Reguleringsventiler er koblet med brytere i hvert rom og Service AS) Samsvarserklæring signert og datert
er derfor ikke testet. TG 2 er gitt på grunn av alder på 24.04‑2025 er fremvist for

---

[d014_d014 | Side [1]]
d 35 desibel
‑ Det er under befaringen benyttet fuktindikator og utført lydmotstand. Balkongdør med tolags isolerglass,
fuktsøk på utsatte punkter. Det er ikke funnet produsert i 2020.
indikasjoner på fukt utover normale verdier. Skjøten til
benkeplaten er ikke understøttet. Platetoppen har synlig Innvendige dører:
overflateslitasje. TG 2 er gitt på grunn av nevnte forhold. Dør med frostet glassfelt mellom entré og soverom.
Bad: Etasjeskiller:
Badet er i følge eier pusset opp i 2025 i regi av Etasjeskiller

---

[d014_d014 | Side [1]]
ermin/ første avdrag: 15.12.2007 ( siste termin Borettslaget har etablert individuell
15.11.2027 ) nedbetalingsmulighet på lån 16368682059 (DNB).
Lånopptak ifbm felles baderomsrehabilitering i
Lånenummer: 83987151520, Svenska Handelsbanken AB borettslaget. For å innfri din andel fellesgjeld må det
NUF inngås avtale med laget. Innbetaling kan gjøres to ganger
Annuitetslån, 4 terminer per år. pr år ‑ senest 10. mars eller 10. september. Etter
Rentesats per 28.01.2026: 5.35% pa. nedbetaling vil det månedlige

---

[d014_d014 | Side [1]]
nderskuddet skyldes i hovedsak vedlikeholdskostnader
Vedlikehold i regi av borettslaget: og eksterne tjenester.
Våren 23 ble det gjennomført vedlikeholdsarbeid av I 2025 var det budsjettert med et overskudd på kr. 1 421
balkongene i Trondheimsveien 172. Balkongene ble 195,‑.
pusset, malt og vasket. Det er i november 2024 tatt opp
lån (lån 16368682059) for rehabilitering av baderom. Felleskostnadene økte med 8.15% fra og med 01.02.2026
Rapport med med informasjon kan fås av fra kr. 7 236,‑ til kr. 7

---

[d014_d014 | Side [1]]
ikasjon av lån:
Felleskostnader
Lånenummer: 83987126771, Svenska Handelsbanken AB
Felleskostnader kr 7 826,‑ pr. mnd NUF
Annuitetslån, 12 terminer per år.
Felleskostnader inkulderer: Felleskostnadene inkludere Rentesats per 28.01.2026: 5.35% pa.
33

## Side 34

OM EIENDOMMEN
Antall terminer til innfrielse: 22 Første termin/ første avdrag: 30.11.2025 ( siste termin
Saldo per 28.01.2026: 628 996 30.11.2049 )
Andel av saldo: 8 813
Første termin/ første avdrag: 15.12.2007 ( siste termin Borettslaget har

---

[d014_d014 | Side [1]]
telistene.
Boligkjøperforsikring)) http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Eiendomsskatt kan bli ilagt for enkelte leiligheter i
borettslaget og kreves da inn via felleskostnadene i mai,
juni, september og november.
Estimert totalpris ink. omk Fellesgjeld
Kr 4 996 031 Kr 625 641 pr. 28.01.2026
Lånebetingelser fellesgjeld: Spesifikasjon av lån:
Felleskostnader
Lånenummer: 83987126771, Svenska

---

[d014_d014 | Side [1]]
aldo per 28.01.2026: 10 000 814
Andre kostnader:
Andel av saldo: 140 120
Første termin/ første avdrag: 01.10.2019 ( siste termin TV/ Internett/ Bredbånd: Grunnpakke kabel‑tv og
01.09.2049 ) bredbånd er inkludert i de månedlige felleskostnadene.
Lånenummer: 83987204233, Svenska Handelsbanken Borettslaget har kollektivavtale for internett (fiber) med
AB NUF NextGenTel. TV‑pakker kan bestilles av den enkelte
Annuitetslån, 12 terminer per år. beboer og NextGenTel/ Riks TV leverer TV tjenester til
Rentesats per

---

[d014_d014 | Side [1]]
dning
Dugnadsbidrag: kr. 100,‑
Kr 4 360 000 Renter og avdrag kr. 248,‑
Renter og avdrag kr. 863,‑
Felleskostnader kr. 3 479,‑
Omkostning kjøper
Renter og avdrag kr. 405,‑
4 360 000,00 (Prisantydning) Refusjon av dugnad ( ‑600,00,‑ i Jan. 26)
625 641 (Andel av fellesgjeld) Avdrag IN‑lån kr. 713,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Renter IN‑lån kr. 1 759,‑
4 985 641 (Pris inkl. fellesgjeld)
Følgende kostnader er ikke inkludert i felleskostnadene
Omkostninger og betales separat:
‑ Strøm

---

[d014_d014 | Side [1]]
ler det er
Lagets formål er å gi andelseierne bruksrett til egen bolig rettskraftig avgjort aterververen har rett til å erverve
i lagets eiendom (borett). Laget kanogså drive annen andelen.
virksomhet som har sammenheng med boretten. Laget
kan også oppføreandre bygninger eller anlegg, for Regnskap/ budsjett/ kostnadsøkninger: Fjorårets
eksempel garasjer, til andelseiernes felles benyttelse. årsregnskap viste et underskudd på kr. 1 171 574,‑.
Underskuddet skyldes i hovedsak vedlikeholdskostnader
Vedlikehold

---

[d014_d014 | Side [1]]
 og ved flytting.
10.07.2039 ) Ved salg kan dette medføre at det oppstår en restanse,
selv om felleskostnadene er betalt ut
Lånenummer: 83987186561, Svenska Handelsbanken AB overtagelsesmåneden. Eventuell restanse vil bli
NUF etterfakturert selger. Ved ønske om veiledning for
Annuitetslån, 12 terminer per år. innbetaling vennligst skriv epost til OBF;
Rentesats per 28.01.2026: 5.35% pa. firmapost@obf.no.
Antall terminer til innfrielse: 284
Saldo per 28.01.2026: 10 000 814
Andre kostnader:
Andel av saldo:

---

[d014_d014 | Side [1]]
dføre fukt‑ og
medtatt i BRA‑e og totalt BRA, ligger på sameiets råteskader i døren.
fellesareal, men disponeres av denne seksjonen. Sameiet
kan på et senere tidspunkt omdisponere bruken av dette Innvendige overflater:
arealet. Gulv: Innvendige gulv er belagt med enstavs parkett og
flislagte overflater.
Vegger: Pusset og malte overflater. Sparklet og malte
Standard
plater. Teglstein.
Kjøkken: Himling: Sparklet og malte plater.
Kjøkkeninnredning fra 2015. Kjøkkeninnredning med
glatte fronter. Stålplate på

---

[d014_d014 | Side [1]]
ige oppgraderinger er utført i regi av borettslaget i den senere tid:
2025: Oppussing og utvidelse av bad. Nytt rør i rør system i badet. Nye friskluftventil på yttervegg i soverom og kjøkken.
2022: Nye vinduer i alle andeler, kjeller og ytterdørene rehabilitert. Nye port-telefoner.
2021: Nye brannslukkingsapparater, brannteppe og røykvarsler utlevert til andelseiere. Sanert asbest fra rørisolasjon i
kjeller. Isolert rør i kjeller etter asbestsanitering.
2/13
55

## Side 56

For detaljert informasjon om

---

[d014_d014 | Side [1]]
øper å eventuelt inngå nye avtaler med
Annuitetslån, 12 terminer per år. ønskede leverandører.
Rentesats per 28.01.2026: 5.25% pa.
Antall terminer til innfrielse: 287
Formuesverdi
Saldo per 28.01.2026: 28 185 537
Andel av saldo: 408 991 Formuesverdi primær: Kr 1 226 256 (2024)
34

## Side 35

OM EIENDOMMEN
du også Sofienbergparken samt Tøyenparken med
Formuesverdi sekundær: Kr 4 905 024 (2024) Tøyenbadet. For den treningsglade finnes treningssentre
som SATS og Fresh Fitness i nærområdet.
Info om

---

[d014_d014 | Side [1]]
er og NextGenTel/ Riks TV leverer TV tjenester til
Rentesats per 28.01.2026: 5.35% pa. borettslaget med avtalepris.
Antall terminer til innfrielse: 249
Saldo per 28.01.2026: 2 794 691 Andre utgifter: Ny eier kan forvente følgende kostnader
Andel av saldo: 39 156 knyttet til boligen:
Første termin/ første avdrag: 15.11.2021 ( siste termin
15.10.2046 ) ‑ Årlig innboforsikring, valgfritt.
Lånenummer: 16368682059, DNB Bank ASA Det er opp til kjøper å eventuelt inngå nye avtaler med
Annuitetslån, 12 terminer

---

[d014_d014 | Side [1]]
ng og under borettslaget sitter på fraflyttede og/ eller usolgte andeler,
visse vilkår kan boligen leies ut i inntil 3 år, jf. må dekkes av de øvrige andelseierne.
borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i
boligen, har imidlertid rett til å leie ut deler av boligen til Borettslaget har legalpanterett i andelen for krav på
andre uten styregodkjenning, jf. borettslagsloven § 5‑4. dekning av felleskostnader og andre krav fra
Korttidsutleie er tillatt i opptil 30 døgn per år uten

---

[d014_d014 | Side [1]]
e din rute fra valgt
35

## Side 36

OM EIENDOMMEN
startpunkt og helt frem til boligen. Det vil være skiltet ved 26.06.2023 for rehabilitering av bad
fellesvisninger for enkel orientering.
Det foreligger godkjente og byggemeldte tegninger, men
det er avvik fra disse:
Tomt
Baderom oppgradert i 2025 er noe utvidet mot kjøkken.
Tomtetype: Eiet Arbeidet er godkjent.
Tomtestørrelse: 18788 m² Ferdigattest/ brukstillatelse datert: 21.10.1937.
Tomten er fellesareal, hvilket betyr at borettslaget eier

---

[d014_d014 | Side [1]]
er ikke har fremlagt
energiattest før avtale om salg er inngått, kan kjøper få Ny kommuneplan fra 23. september 2015Oslo kommune
laget en energiattest ved hjelp av ekspert for selgers har vedtatt en ny kommuneplan som kan få betydning
regning, innen ett år etter at avtale om salg er inngått. for en rekke eksisterende reguleringsplaner i kommunen.
Dette følger av forskrift om energimerking av bygninger For informasjon om eventuelle arbeider eller prosjekter i
og tekniske anlegg § 5 (3). nærliggende områder,

---

[d014_d014 | Side [1]]
er prosjekter i
og tekniske anlegg § 5 (3). nærliggende områder, anbefales det å gjøre søk i Oslo
kommunes portal for saksinnsyn:https:/ /
Energiattesten er basert på nåværende eiers/ www.oslo.kommune.no/ plan‑bygg‑og‑eiendom/
husstandens forbruk og utgifter de siste årene. Forbruket
kan variere avhengig av faktorer som antall Pågående byggesaker i området:
familiemedlemmer, ønsket innetemperatur, egne avtaler
om energiforsyning med mer. Megler påtar seg ikke Trondheimsveien 174 ‑ mulig ulovlig

---

[d014_d014 | Side [1]]
nn 50 m². Det er Eiendommen er regulert til bolig med tilhørende anlegg
eier som har plikt til å fremlegge energiattest og er etter reguleringsplan S‑2255. For mer informasjon om
ansvarlig for at opplysningene er korrekte. reguleringsforhold, kontakt megler eller søk på
saksnummer, adresse eller gårds‑ og bruksnummer på
Dersom eier ikke har lagt frem energiattest, og eier etter Plan‑ og bygningsetatens hjemmeside.
skriftlig anmodning fra kjøper ikke har fremlagt
energiattest før avtale om salg er inngått,

---

[d014_d014 | Side [1]]
 stil med resten av leiligheten.
Leiligheten ligger et steinkast unna det pulserende Carl
Berner‑området.
Høydepunkter:
Nytt bad i 2025
Skjermet fra veien
Ingen dokumentavgift
Nye fliser i entré (2025)
Nærhet til Torshovdalen
Gode kollektivforbindelser
Varmtvann og fyring inkludert
Felles parkeringsplass for beboerne
Sørvendt balkong med gode solforhold
Sentral beliggenhet med nærhet til Carl Berner
9

## Side 10

Balkongen vender mot sør og byr på
gode solforhold i sommerhalvåret.

## Side 11

(Ingen

---

[d014_d014 | Side [1]]
t det årlige strømforbruket er ca. 1 314
Energimerke
kWh. Det er viktig å merke seg at energiforbruket kan
Energikarakter: G variere fra husstand til husstand.
Energifarge: Grønn
Verneklasse/ SEFRAK
Boligbygningen er ikke bevaringsverdig / på gul liste.
Info energiklasse
Alle eiendommer som selges eller leies ut skal ha en
Regulerings og arealplaner
energiattest. Unntak gjelder blant annet for frittstående
bygninger med et bruksareal mindre enn 50 m². Det er Eiendommen er regulert til bolig med tilhørende

---

[d014_d014 | Side [1]]
tak er 1. etasje
utført i samsvar med tillatelsen og øvrige krav etter plan‑ 3 m²
og bygningslovgivningen. Det er viktig å merke seg at
selv om ferdigattest foreligger, gir det ingen garanti for at Fra 01.01.24 er det innført nye regler for måling og
bygget er oppført i henhold til tillatelsen og gjeldende opplysning av areal på boliger.
regelverk, eller at det senere er utført arbeid på bygget De nye arealbegrepene er:
som ikke er byggemeldt eller godkjent.
Bruksareal BRA:
Det foreligger ferdigattest for

---

[d014_d014 | Side [1]]
s forbehold om endringer i prisene. For oppdatert
innkjøp ligger Storo Storsenter en kort tur unna med et informasjon, se:oslo.kommune.no – beboerparkering
komplett shoppingtilbud.
Adkomst
Borettslaget ligger i et etablert og ettertraktet
boligområde med kort vei til det meste. Torshovdalen er På høyre side i annonsen finner du et kartutsnitt. Ved å
kun noen få minutters gange unna, og i nærheten finner klikke på kartet kan du enkelt planlegge din rute fra valgt
35

## Side 36

OM EIENDOMMEN
startpunkt og

---

[d014_d014 | Side [1]]
s treningssentre
som SATS og Fresh Fitness i nærområdet.
Info om formuesverdi: Skatteetaten beregner en
boligverdi (beregnet markedsverdi for bolig) basert på Boligen har svært gode kollektivforbindelser rett utenfor
SSBs statistiske opplysninger om omsatte boliger. I døren med trikk 17 og buss 31, som går hele døgnet. I
beregningen tas det hensyn til din boligs beliggenhet, tillegg ligger kollektivknutepunktene Carl Berner og
areal, byggeår og type bolig. Formuesverdien er en Sinsenkrysset i gangavstand,

---

[d014_d014 | Side [1]]
ing fra 2015. Kjøkkeninnredning med
glatte fronter. Stålplate på vegg over benkeskap. Laminat Himlingshøyde ca. 2,42 m målt i stue.
benkeplate med nedfelt kum i keramikk.
Kullfilterventilator. Stekeovn, keramisk topp og kjøl/ frys er Vinduer:
integrert i innredningen. Opplegg for oppvaskmaskin og Vinduer med tolags isolerglass, produsert i 2021 og 2020.
vaskemaskin.
Ytterdører:
Følgende er gitt tilstandsgrad 2: Entrédør i brannklasse B‑30 med 35 desibel
‑ Det er under befaringen benyttet fuktindikator og

---

[d014_d014 | Side [1]]
ikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik

---

[d014_d014 | Side [1]]
ftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig

---

[d014_d014 | Side [1]]
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i

---

[d014_d014 | Side [1]]
 rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte

---

[d014_d014 | Side [1]]
Initialer selger: AEN 3
30006210
:ecnerefer
tnemucoD
51

## Side 52

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar

---

[d014_d014 | Side [1]]
 setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen.

---

[d014_d014 | Side [1]]
 inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i

---

[d014_d014 | Side [1]]
gsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og

---

[d014_d014 | Side [1]]
der fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom

---

[d014_d014 | Side [1]]
måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger

---

[d014_d014 | Side [1]]
kjøper binder seg til å kjøpe boligen. Etter ett år
bør Tyder As kontaktes for å foreta en oppdatering av rapporten. Oppdatering bør også foretas dersom det gjøres
endringer i boligen etter befaringstidspunktet.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøper undersøkelsesplikt. Oppdragsgiver/selger må lese rapporten
og gi tilbakemeldinger om eventuelle feil eller mangler i rapporten. Dette bør gjøres før rapporten anvendes/tas i bruk.
Rettigheter:
Denne rapporten er utarbeidet av Tyder AS,

---

[d014_d014 | Side [1]]
orutsetninger:
Tilstandsrapporten er utarbeidet for å ivareta de bestemmelser som er gitt i Forskrift til avhendingslova (tryggere
bolighandel). Formålet med tilstandsrapporten er å gi forbrukere/kjøpere et betryggende og korrekt informasjonsgrunnlag
før boligkjøp, og gi selgere en korrekt fremstilling av egen bolig, med det målet å unngå konflikt i etterkant av
bolighandelen. Tryggere bolighandel og tilstandsrapporten gjelder for avhending av helårs- og fritidsboligbebyggelse, når
kjøperen er en

---

[d014_d014 | Side [1]]
hending av helårs- og fritidsboligbebyggelse, når
kjøperen er en forbruker, som definert i avhendingslova § 1-2 tredje ledd.
I denne rapporten er det gjort vurdering av de bygningsdeler som er definert i tryggere bolighandel. I tillegg er det gjort
undersøkelser av enkelte bygningsdeler, som Tyder As, bransjen generelt og rettspraksis anser som relevante ved
avhending av boligeiendom. Referansenivået for tilstandsvurderinger er byggeår med tilhørende tekniske forskrifter,
tryggere bolighandel og NS

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Høy fellesgjeld med løpetid frem til 2049 – andel fellesgjeld er kr 625 641, fordelt på flere lån med rente 5,25–5,35 % p.a. Samlet borettslagsgjeld er svært høy (over 40 millioner kroner), noe som øker risikoen for fremtidige felleskostnadsøkninger.",
      "evidence": [
        "Fellesgjeld Kr 625 641 pr. 28.01.2026",
        "Saldo per 28.01.2026: 28 185 537 – Andel av saldo: 408 991 (lån 83987204233, rente 5.25%)",
        "Saldo per 28.01.2026: 10 000 814 – Andel av saldo: 140 120 (lån 83987186561, rente 5.35%)",
        "Saldo per 28.01.2026: 2 794 691 – Andel av saldo: 39 156 (lån 16368682059, DNB, rente ikke oppgitt eksplisitt)",
        "Saldo per 28.01.2026: 628 996 – Andel av saldo: 8 813 (lån 83987126771, rente 5.35%)",
        "Siste termin 30.11.2049 / 01.09.2049 / 10.07.2039 / 15.11.2027",
        "Samlet saldo på de fire lånene: ca. 41,6 millioner kroner"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Borettslaget hadde underskudd i regnskapet og felleskostnadene er nylig økt med 8,15 %. Fjorårets regnskap viste et underskudd på kr 1 171 574, og felleskostnadene økte fra kr 7 236 til kr 7 826 pr. mnd fra 01.02.2026. Dette indikerer risiko for ytterligere kostnadsøkninger.",
      "evidence": [
        "Fjorårets årsregnskap viste et underskudd på kr. 1 171 574,‑",
        "Underskuddet skyldes i hovedsak vedlikeholdskostnader og eksterne tjenester",
        "Felleskostnadene økte med 8.15% fra og med 01.02.2026 fra kr. 7 236,‑ til kr. 7 826,‑",
        "I 2025 var det budsjettert med et overskudd på kr. 1 421 195,‑ – avviket mellom budsjett og regnskap er dermed over 2,5 millioner kroner"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Nytt lån tatt opp i november 2024 for rehabilitering av baderom (lån 16368682059, DNB). Dette er et relativt nytt lån som vil belaste felleskostnadene fremover, og andelseierne har mulighet til individuell nedbetaling kun to ganger per år.",
      "evidence": [
        "Det er i november 2024 tatt opp lån (lån 16368682059) for rehabilitering av baderom",
        "Borettslaget har etablert individuell nedbetalingsmulighet på lån 16368682059 (DNB). Lånopptak ifbm felles baderomsrehabilitering i borettslaget",
        "Innbetaling kan gjøres to ganger pr år ‑ senest 10. mars eller 10. september",
        "Saldo per 28.01.2026: 2 794 691 – Andel av saldo: 39 156"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Flere bygningsdeler er gitt tilstandsgrad TG 2, herunder etasjeskiller, vannbåren varme/radiatorer, kjøkkeninnredning og innvendig dør på bad. TG 2 indikerer vesentlige avvik og begrenset gjenværende brukstid, noe som kan medføre fremtidige utbedringskostnader.",
      "evidence": [
        "Tilstandsgrad 2: Innvendig dør (Bad / 1. etasje), Etasjeskiller, Vannbåren varme, Kjøkkeninnredning",
        "TG 2 er gitt på grunn av alder på radiatorene og tilhørende røropplegg. Forholdet medfører forhøyet risiko for at det kan oppstå lekkasjer",
        "Skjøten til benkeplaten er ikke understøttet. Platetoppen har noe synlig overflateslitasje. TG 2 er gitt på grunn av nevnte forhold",
        "TG 2 signaliserer at man bør være oppmerksom og holde angitt bygningsdel under oppsyn. Gjenværende brukstid kan være begrenset",
        "Anlegget er vurdert ut ifra alder, og enkle observasjoner i forbindelse med fordelingsskap og reguleringsventiler. Reguleringsventiler er koblet med brytere i hvert rom og er derfor ikke testet. TG 2 er gitt på grunn av alder"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Dør på bad er plassert innenfor rommets våtsone (mindre enn 1 meter fra dusj), noe som er i strid med krav om at treverk ikke skal benyttes i våtsoner. Dette kan medføre fukt- og råteskader.",
      "evidence": [
        "Dør i bad er plassert innenfor rommets våtsone (<1 m fra dusj). Det skal ikke benyttes treverk (organisk materiale) i våtsoner, da dette kan medføre fukt‑ og råteskader i døren. TG: 2",
        "Badet er i følge eier pusset opp i 2025 i regi av borettslaget – avviket er altså til stede selv etter nylig renovering"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Tidligere skadet membran på våtrom. Selger opplyser at det var skadet membran i forkant av våtromsrenoveringen, noe som var årsaken til at badet ble renovert. Selv om badet er renovert i 2025, indikerer historikken fuktproblematikk.",
      "evidence": [
        "Det var skadet membran i forkant av våtroms‑renoveringen. Det var også årsaken til at våtrommet ble renovert",
        "Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja",
        "Hulltaking i tilstøtende vegg: det ble ikke påvist fukt utover normale verdier – noe som delvis reduserer risikoen etter renovering"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R7",
      "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling, og dette er bekreftet i egenerklæringen. Radon kan utgjøre en helserisiko, særlig i leiligheter i 1. etasje.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid",
        "Er det foretatt radonmåling? Nei",
        "Leiligheten ligger i 1. etasje – nærhet til grunnen øker potensiell radoneksponering"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Leiligheten ligger i 1. etasje, noe som øker risikoen for fuktinntrenging fra grunnen, støy fra fellesarealer og innbrudd. Kombinert med manglende radonmåling og eldre bygning (oppført 1936) er dette en forhøyet risikofaktor.",
      "evidence": [
        "Leiligheten ligger i 1. etasje med balkong",
        "Bygningen er oppført i 1936",
        "Selger har ikke utført radonmåling"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R9",
      "description": "Felles bygningsdeler som yttervegger, takkonstruksjon, drenering, grunnmur og fundamenter er ikke tilstandsvurdert i rapporten. Dette gir begrenset informasjon om bygningens faktiske tilstand og kan skjule vesentlige feil og mangler.",
      "evidence": [
        "Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg",
        "Bygningen er oppført i 1936 – høy alder øker sannsynligheten for skjulte feil i ikke-vurderte bygningsdeler"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Pågående byggesaker i nærområdet, inkludert mulig ulovlig hyblifisering i Trondheimsveien 174 og 155, samt etablering av nye tekniske rom i Dynekilgata 20. Dette kan påvirke bomiljøet og eiendommens omgivelser.",
      "evidence": [
        "Trondheimsveien 174 ‑ mulig ulovlig hyblifisering",
        "Trondheimsveien 155 ‑ mulig ulovlig hyblifisering",
        "Dynekilgata 20 ‑ etablering av nye tekniske rom for rehabiliteringstiltak som berører og betinger bruk av gategrunn",
        "Trondheimsveien 157 ‑ åpning i branncellebegrensende vegg",
        "Trondheimsveien 184 ‑ endring av skilt fra Shell til St1"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Tinglyst evigvarende gjerderett og vedlikeholdsplikt av gjerde på eiendommen. Dette kan medføre løpende vedlikeholdsforpliktelser og begrensninger i bruken av eiendommen.",
      "evidence": [
        "Evigvarende gjerderett – Gjelder denne registerenheten med flere",
        "29.01.2001 ‑ Dokumentnr: 5296 ‑ Erklæring/avtale – Vedlikeholdsplikt av gjerde",
        "21.12.1934 ‑ Dokumentnr: 901577 ‑ Registrering av grunn"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget har legalpant i andelen for krav på felleskostnader med prioritet over tinglyste lån (inntil 2G). Dersom andre andelseiere misligholder sine forpliktelser, kan øvrige andelseiere bli belastet for disse kostnadene.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R13",
      "description": "Boden som inngår i BRA-e ligger på sameiets fellesareal og kan omdisponeres av borettslaget på et senere tidspunkt. Kjøper har dermed ingen sikret rett til å beholde boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R14",
      "description": "Avvik mellom godkjente tegninger og faktisk utførelse: Baderommet er utvidet mot kjøkken i 2025. Selv om arbeidet er godkjent, indikerer avviket at det er gjort endringer som ikke samsvarer med opprinnelige byggetegninger.",
      "evidence": [
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse: Baderom oppgradert i 2025 er noe utvidet mot kjøkken. Arbeidet er godkjent",
        "Ferdigattest for utskifting av rør og rehabilitering av bad foreligger"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R15",
      "description": "Energikarakter G (laveste karakter) indikerer dårlig energieffektivitet. Dette kan medføre høyere strømkostnader for kjøper og risiko for fremtidige pålegg om energioppgradering.",
      "evidence": [
        "Energikarakter: G",
        "Det antas at det årlige strømforbruket er ca. 1 314 kWh",
        "Bygningen er oppført i 1936 – gammel bygningsmasse har typisk dårlig isolasjon"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning, og korttidsutleie er begrenset til 30 døgn per år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.",
      "evidence": [
        "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten styregodkjenning"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Bygningen er oppført i 1936 og er svært gammel. Referansenivå for tilstandsvurderingen er satt til byggeår, noe som innebærer at mange bygningsdeler kan ha begrenset gjenværende levetid og at fremtidige vedlikeholdskostnader kan bli betydelige.",
      "evidence": [
        "Bygningen er oppført i 1936, og den tids byggeskikk ligger til grunn for konstruksjonsmessige forhold",
        "Referansenivå for rapporten er satt til byggeår og Forskrift til avhendingslova",
        "Aldersbetraktning er vurdert ut fra levetidstabeller utarbeidet av Sintef Byggforsk",
        "Grunnmur i granitt, yttervegger i murverk forblendet med teglstein, yttertak i trekonstruksjon tekket med takstein – alle typiske materialer fra 1930-tallet"
      ],
      "source_documents": [
        "d014_d014"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    }
  ],
  "re_retrieval_queries": [
    "asbest kjeller rørisolasjon borettslag tilstand",
    "elektrisk anlegg tilstandsgrad vurdering sikringsskap",
    "etasjeskiller betong tilstandsgrad beskrivelse",
    "drenering grunnmur tilstand fukt kjeller",
    "vedlikeholdsplan borettslag fremtidige kostnader",
    "energioppgradering pålegg kommuneplan Oslo",
    "radon 1. etasje måling krav borettslag",
    "korttidsutleie borettslag Airbnb begrensning"
  ],
  "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld (confidence hevet til 0.97):**\nEvidensen er svært sterk. Alle fire lån er dokumentert med saldo, andel og løpetid. Samlet saldo på de fire lånene er ca. 41,6 millioner kroner (28 185 537 + 10 000 814 + 2 794 691 + 628 996), noe som bekrefter påstanden om over 40 millioner i samlet gjeld. Rentene er 5,25–5,35 %. Confidence heves fra 0.95 til 0.97.\n\n**R2 – Underskudd og kostnadsøkning (confidence hevet til 0.95):**\nEvidensen er meget sterk. Underskudd på kr 1 171 574 er dokumentert, årsak er oppgitt, og 8,15 % økning i felleskostnader er bekreftet. Det store avviket mellom budsjettert overskudd (kr 1 421 195) og faktisk underskudd (kr -1 171 574) – et avvik på over 2,5 millioner – styrker risikoen ytterligere. Confidence heves fra 0.92 til 0.95.\n\n**R3 – Nytt lån for baderomsrehabilitering (confidence opprettholdt 0.88):**\nEvidensen er god. Lån 16368682059 er dokumentert med saldo kr 2 794 691 og andel kr 39 156. Individuell nedbetaling to ganger per år er bekreftet. Confidence opprettholdes.\n\n**R4 – TG 2 på flere bygningsdeler (confidence hevet til 0.95):**\nEvidensen er svært sterk. Alle fire TG 2-elementer er eksplisitt listet i tilstandsrapporten. I tillegg er det elektriske anlegget (reguleringsventiler/radiatorkurser) også gitt TG 2, noe som ikke var med i original risikobeskrivelse. Confidence heves fra 0.93 til 0.95.\n\n**R5 – Dør i våtsone (confidence hevet til 0.92):**\nEvidensen er direkte og klar. Avviket er dokumentert i tilstandsrapporten med TG 2. Det faktum at badet ble renovert i 2025 og avviket fortsatt eksisterer, styrker risikoen. Confidence heves fra 0.90 til 0.92.\n\n**R6 – Tidligere skadet membran (confidence justert ned til 0.80):**\nEvidensen bekrefter at membran var skadet og at dette var årsaken til renovering. Imidlertid viser hulltaking at det ikke ble påvist fukt utover normale verdier etter renovering, og ferdigattest foreligger. Risikoen er reell historisk, men noe redusert etter renovering. Confidence justeres ned fra 0.85 til 0.80.\n\n**R7 – Ingen radonmåling (confidence opprettholdt 0.88):**\nEvidensen er klar og direkte. Selger bekrefter ingen radonmåling. Leiligheten i 1. etasje øker eksponeringspotensial. Confidence opprettholdes.\n\n**R8 – 1. etasje generell risiko (confidence justert ned til 0.65):**\nEvidensen bekrefter at leiligheten er i 1. etasje og at bygget er fra 1936. Imidlertid er påstandene om økt risiko for fuktinntrenging, støy og innbrudd ikke direkte dokumentert i salgsoppgaven – dette er generelle antakelser. Hulltaking viste ingen fukt. Confidence justeres ned fra 0.75 til 0.65 da evidensen er indirekte.\n\n**R9 – Felles bygningsdeler ikke vurdert (confidence hevet til 0.90):**\nEvidensen er direkte og eksplisitt. Listen over ikke-vurderte bygningsdeler er oppgitt i tilstandsrapporten. Byggets alder (1936) forsterker risikoen. Confidence heves fra 0.87 til 0.90.\n\n**R10 – Pågående byggesaker (confidence opprettholdt 0.75):**\nEvidensen bekrefter de nevnte sakene. Det er i tillegg en sak om åpning i branncellebegrensende vegg i Trondheimsveien 157 som ikke var med i original risikobeskrivelse. Risikoen er reell men usikker i konsekvens. Confidence opprettholdes.\n\n**R11 – Gjerderett og vedlikeholdsplikt (confidence justert ned til 0.78):**\nEvidensen bekrefter tinglyste heftelser. Imidlertid er det uklart om dette faktisk medfører praktiske forpliktelser for den aktuelle andelen i et borettslag der tomten er fellesareal. Confidence justeres ned fra 0.80 til 0.78.\n\n**R12 – Legalpant og misligholdsrisiko (confidence hevet til 0.87):**\nEvidensen er direkte og klar. Legalpant inntil 2G er bekreftet, og konsekvensen av andres mislighold er eksplisitt beskrevet. Confidence heves fra 0.85 til 0.87.\n\n**R13 – Bod på fellesareal (confidence opprettholdt 0.92):**\nEvidensen er direkte og eksplisitt. Risikoen er godt dokumentert. Confidence opprettholdes.\n\n**R14 – Avvik fra tegninger (confidence justert ned til 0.60):**\nEvidensen bekrefter avviket, men arbeidet er godkjent og ferdigattest foreligger. Risikoen er begrenset siden godkjenning er på plass. Confidence justeres ned fra 0.72 til 0.60.\n\n**R15 – Energikarakter G (confidence justert ned til 0.80):**\nEvidensen bekrefter energikarakter G. Imidlertid er estimert strømforbruk på kun 1 314 kWh/år, noe som er svært lavt og kan indikere at oppvarmingen dekkes av felleskostnadene (varmtvann og fyring er inkludert). Risikoen for høye strømkostnader er dermed noe redusert. Confidence justeres ned fra 0.82 til 0.80.\n\n**R16 – Begrenset utleieadgang (confidence hevet til 0.85):**\nEvidensen er klar og direkte. Confidence opprettholdes.\n\n**R17 – Gammel bygning fra 1936 (confidence hevet til 0.90):**\nEvidensen er sterk. Byggeår 1936 er bekreftet, referansenivå er satt til byggeår, og byggematerialene (granitt, murverk, trekonstruksjon) er typiske for perioden. Confidence heves fra 0.88 til 0.90.\n\n**Manglende risikoer identifisert:**\n1. Elektrisk anlegg TG 2 – reguleringsventiler ikke testet, alder er årsak til TG 2. Dette er nevnt i evidensen men ikke som egen risiko.\n2. Asbest – sanert fra rørisolasjon i kjeller i 2021, men det er uklart om all asbest er fjernet.\n3. Bestemmelser om bruk av gårdsrom og vedlikehold av ledninger (tinglyst 21.11.2000) – kan medføre forpliktelser.\n4. Eiendomsskatt – kan bli ilagt og kreves inn via felleskostnadene.\n\n**Risikoer som bør justeres ned eller fjernes:**\n- R14 bør ha lavere confidence siden arbeidet er godkjent.\n- R8 bør ha lavere confidence da påstandene er generelle og ikke direkte dokumentert.\n"
}

## Raw Response
```json
{
  "id": "msg_01MfF68Nn7dskj95b28K5YDE",
  "container": null,
  "content": [
    {
      "id": "toolu_0146ojNsZbamaqY8HNPQeqEz",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Høy fellesgjeld med løpetid frem til 2049 – andel fellesgjeld er kr 625 641, fordelt på flere lån med rente 5,25–5,35 % p.a. Samlet borettslagsgjeld er svært høy (over 40 millioner kroner), noe som øker risikoen for fremtidige felleskostnadsøkninger.",
            "evidence": [
              "Fellesgjeld Kr 625 641 pr. 28.01.2026",
              "Saldo per 28.01.2026: 28 185 537 – Andel av saldo: 408 991 (lån 83987204233, rente 5.25%)",
              "Saldo per 28.01.2026: 10 000 814 – Andel av saldo: 140 120 (lån 83987186561, rente 5.35%)",
              "Saldo per 28.01.2026: 2 794 691 – Andel av saldo: 39 156 (lån 16368682059, DNB, rente ikke oppgitt eksplisitt)",
              "Saldo per 28.01.2026: 628 996 – Andel av saldo: 8 813 (lån 83987126771, rente 5.35%)",
              "Siste termin 30.11.2049 / 01.09.2049 / 10.07.2039 / 15.11.2027",
              "Samlet saldo på de fire lånene: ca. 41,6 millioner kroner"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Borettslaget hadde underskudd i regnskapet og felleskostnadene er nylig økt med 8,15 %. Fjorårets regnskap viste et underskudd på kr 1 171 574, og felleskostnadene økte fra kr 7 236 til kr 7 826 pr. mnd fra 01.02.2026. Dette indikerer risiko for ytterligere kostnadsøkninger.",
            "evidence": [
              "Fjorårets årsregnskap viste et underskudd på kr. 1 171 574,‑",
              "Underskuddet skyldes i hovedsak vedlikeholdskostnader og eksterne tjenester",
              "Felleskostnadene økte med 8.15% fra og med 01.02.2026 fra kr. 7 236,‑ til kr. 7 826,‑",
              "I 2025 var det budsjettert med et overskudd på kr. 1 421 195,‑ – avviket mellom budsjett og regnskap er dermed over 2,5 millioner kroner"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Nytt lån tatt opp i november 2024 for rehabilitering av baderom (lån 16368682059, DNB). Dette er et relativt nytt lån som vil belaste felleskostnadene fremover, og andelseierne har mulighet til individuell nedbetaling kun to ganger per år.",
            "evidence": [
              "Det er i november 2024 tatt opp lån (lån 16368682059) for rehabilitering av baderom",
              "Borettslaget har etablert individuell nedbetalingsmulighet på lån 16368682059 (DNB). Lånopptak ifbm felles baderomsrehabilitering i borettslaget",
              "Innbetaling kan gjøres to ganger pr år ‑ senest 10. mars eller 10. september",
              "Saldo per 28.01.2026: 2 794 691 – Andel av saldo: 39 156"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Flere bygningsdeler er gitt tilstandsgrad TG 2, herunder etasjeskiller, vannbåren varme/radiatorer, kjøkkeninnredning og innvendig dør på bad. TG 2 indikerer vesentlige avvik og begrenset gjenværende brukstid, noe som kan medføre fremtidige utbedringskostnader.",
            "evidence": [
              "Tilstandsgrad 2: Innvendig dør (Bad / 1. etasje), Etasjeskiller, Vannbåren varme, Kjøkkeninnredning",
              "TG 2 er gitt på grunn av alder på radiatorene og tilhørende røropplegg. Forholdet medfører forhøyet risiko for at det kan oppstå lekkasjer",
              "Skjøten til benkeplaten er ikke understøttet. Platetoppen har noe synlig overflateslitasje. TG 2 er gitt på grunn av nevnte forhold",
              "TG 2 signaliserer at man bør være oppmerksom og holde angitt bygningsdel under oppsyn. Gjenværende brukstid kan være begrenset",
              "Anlegget er vurdert ut ifra alder, og enkle observasjoner i forbindelse med fordelingsskap og reguleringsventiler. Reguleringsventiler er koblet med brytere i hvert rom og er derfor ikke testet. TG 2 er gitt på grunn av alder"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Dør på bad er plassert innenfor rommets våtsone (mindre enn 1 meter fra dusj), noe som er i strid med krav om at treverk ikke skal benyttes i våtsoner. Dette kan medføre fukt- og råteskader.",
            "evidence": [
              "Dør i bad er plassert innenfor rommets våtsone (<1 m fra dusj). Det skal ikke benyttes treverk (organisk materiale) i våtsoner, da dette kan medføre fukt‑ og råteskader i døren. TG: 2",
              "Badet er i følge eier pusset opp i 2025 i regi av borettslaget – avviket er altså til stede selv etter nylig renovering"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Tidligere skadet membran på våtrom. Selger opplyser at det var skadet membran i forkant av våtromsrenoveringen, noe som var årsaken til at badet ble renovert. Selv om badet er renovert i 2025, indikerer historikken fuktproblematikk.",
            "evidence": [
              "Det var skadet membran i forkant av våtroms‑renoveringen. Det var også årsaken til at våtrommet ble renovert",
              "Kjenner du til om det er/ har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja",
              "Hulltaking i tilstøtende vegg: det ble ikke påvist fukt utover normale verdier – noe som delvis reduserer risikoen etter renovering"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R7",
            "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling, og dette er bekreftet i egenerklæringen. Radon kan utgjøre en helserisiko, særlig i leiligheter i 1. etasje.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid",
              "Er det foretatt radonmåling? Nei",
              "Leiligheten ligger i 1. etasje – nærhet til grunnen øker potensiell radoneksponering"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Leiligheten ligger i 1. etasje, noe som øker risikoen for fuktinntrenging fra grunnen, støy fra fellesarealer og innbrudd. Kombinert med manglende radonmåling og eldre bygning (oppført 1936) er dette en forhøyet risikofaktor.",
            "evidence": [
              "Leiligheten ligger i 1. etasje med balkong",
              "Bygningen er oppført i 1936",
              "Selger har ikke utført radonmåling"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R9",
            "description": "Felles bygningsdeler som yttervegger, takkonstruksjon, drenering, grunnmur og fundamenter er ikke tilstandsvurdert i rapporten. Dette gir begrenset informasjon om bygningens faktiske tilstand og kan skjule vesentlige feil og mangler.",
            "evidence": [
              "Det er i hovedsak ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt borettslagets ansvarsområde. Det gjelder i hovedsak yttervegger, takkonstruksjon, drenering, grunnmur, grunn/fundamenter, felles trapper og trapperom, balkonger/terrasser, etasjeskiller, piper og fyringsanlegg",
              "Bygningen er oppført i 1936 – høy alder øker sannsynligheten for skjulte feil i ikke-vurderte bygningsdeler"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Pågående byggesaker i nærområdet, inkludert mulig ulovlig hyblifisering i Trondheimsveien 174 og 155, samt etablering av nye tekniske rom i Dynekilgata 20. Dette kan påvirke bomiljøet og eiendommens omgivelser.",
            "evidence": [
              "Trondheimsveien 174 ‑ mulig ulovlig hyblifisering",
              "Trondheimsveien 155 ‑ mulig ulovlig hyblifisering",
              "Dynekilgata 20 ‑ etablering av nye tekniske rom for rehabiliteringstiltak som berører og betinger bruk av gategrunn",
              "Trondheimsveien 157 ‑ åpning i branncellebegrensende vegg",
              "Trondheimsveien 184 ‑ endring av skilt fra Shell til St1"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Tinglyst evigvarende gjerderett og vedlikeholdsplikt av gjerde på eiendommen. Dette kan medføre løpende vedlikeholdsforpliktelser og begrensninger i bruken av eiendommen.",
            "evidence": [
              "Evigvarende gjerderett – Gjelder denne registerenheten med flere",
              "29.01.2001 ‑ Dokumentnr: 5296 ‑ Erklæring/avtale – Vedlikeholdsplikt av gjerde",
              "21.12.1934 ‑ Dokumentnr: 901577 ‑ Registrering av grunn"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget har legalpant i andelen for krav på felleskostnader med prioritet over tinglyste lån (inntil 2G). Dersom andre andelseiere misligholder sine forpliktelser, kan øvrige andelseiere bli belastet for disse kostnadene.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R13",
            "description": "Boden som inngår i BRA-e ligger på sameiets fellesareal og kan omdisponeres av borettslaget på et senere tidspunkt. Kjøper har dermed ingen sikret rett til å beholde boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R14",
            "description": "Avvik mellom godkjente tegninger og faktisk utførelse: Baderommet er utvidet mot kjøkken i 2025. Selv om arbeidet er godkjent, indikerer avviket at det er gjort endringer som ikke samsvarer med opprinnelige byggetegninger.",
            "evidence": [
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse: Baderom oppgradert i 2025 er noe utvidet mot kjøkken. Arbeidet er godkjent",
              "Ferdigattest for utskifting av rør og rehabilitering av bad foreligger"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R15",
            "description": "Energikarakter G (laveste karakter) indikerer dårlig energieffektivitet. Dette kan medføre høyere strømkostnader for kjøper og risiko for fremtidige pålegg om energioppgradering.",
            "evidence": [
              "Energikarakter: G",
              "Det antas at det årlige strømforbruket er ca. 1 314 kWh",
              "Bygningen er oppført i 1936 – gammel bygningsmasse har typisk dårlig isolasjon"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Begrenset adgang til utleie i borettslag. Utleie krever styrets godkjenning, og korttidsutleie er begrenset til 30 døgn per år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.",
            "evidence": [
              "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten styregodkjenning"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Bygningen er oppført i 1936 og er svært gammel. Referansenivå for tilstandsvurderingen er satt til byggeår, noe som innebærer at mange bygningsdeler kan ha begrenset gjenværende levetid og at fremtidige vedlikeholdskostnader kan bli betydelige.",
            "evidence": [
              "Bygningen er oppført i 1936, og den tids byggeskikk ligger til grunn for konstruksjonsmessige forhold",
              "Referansenivå for rapporten er satt til byggeår og Forskrift til avhendingslova",
              "Aldersbetraktning er vurdert ut fra levetidstabeller utarbeidet av Sintef Byggforsk",
              "Grunnmur i granitt, yttervegger i murverk forblendet med teglstein, yttertak i trekonstruksjon tekket med takstein – alle typiske materialer fra 1930-tallet"
            ],
            "source_documents": [
              "d014_d014"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          }
        ],
        "re_retrieval_queries": [
          "asbest kjeller rørisolasjon borettslag tilstand",
          "elektrisk anlegg tilstandsgrad vurdering sikringsskap",
          "etasjeskiller betong tilstandsgrad beskrivelse",
          "drenering grunnmur tilstand fukt kjeller",
          "vedlikeholdsplan borettslag fremtidige kostnader",
          "energioppgradering pålegg kommuneplan Oslo",
          "radon 1. etasje måling krav borettslag",
          "korttidsutleie borettslag Airbnb begrensning"
        ],
        "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld (confidence hevet til 0.97):**\nEvidensen er svært sterk. Alle fire lån er dokumentert med saldo, andel og løpetid. Samlet saldo på de fire lånene er ca. 41,6 millioner kroner (28 185 537 + 10 000 814 + 2 794 691 + 628 996), noe som bekrefter påstanden om over 40 millioner i samlet gjeld. Rentene er 5,25–5,35 %. Confidence heves fra 0.95 til 0.97.\n\n**R2 – Underskudd og kostnadsøkning (confidence hevet til 0.95):**\nEvidensen er meget sterk. Underskudd på kr 1 171 574 er dokumentert, årsak er oppgitt, og 8,15 % økning i felleskostnader er bekreftet. Det store avviket mellom budsjettert overskudd (kr 1 421 195) og faktisk underskudd (kr -1 171 574) – et avvik på over 2,5 millioner – styrker risikoen ytterligere. Confidence heves fra 0.92 til 0.95.\n\n**R3 – Nytt lån for baderomsrehabilitering (confidence opprettholdt 0.88):**\nEvidensen er god. Lån 16368682059 er dokumentert med saldo kr 2 794 691 og andel kr 39 156. Individuell nedbetaling to ganger per år er bekreftet. Confidence opprettholdes.\n\n**R4 – TG 2 på flere bygningsdeler (confidence hevet til 0.95):**\nEvidensen er svært sterk. Alle fire TG 2-elementer er eksplisitt listet i tilstandsrapporten. I tillegg er det elektriske anlegget (reguleringsventiler/radiatorkurser) også gitt TG 2, noe som ikke var med i original risikobeskrivelse. Confidence heves fra 0.93 til 0.95.\n\n**R5 – Dør i våtsone (confidence hevet til 0.92):**\nEvidensen er direkte og klar. Avviket er dokumentert i tilstandsrapporten med TG 2. Det faktum at badet ble renovert i 2025 og avviket fortsatt eksisterer, styrker risikoen. Confidence heves fra 0.90 til 0.92.\n\n**R6 – Tidligere skadet membran (confidence justert ned til 0.80):**\nEvidensen bekrefter at membran var skadet og at dette var årsaken til renovering. Imidlertid viser hulltaking at det ikke ble påvist fukt utover normale verdier etter renovering, og ferdigattest foreligger. Risikoen er reell historisk, men noe redusert etter renovering. Confidence justeres ned fra 0.85 til 0.80.\n\n**R7 – Ingen radonmåling (confidence opprettholdt 0.88):**\nEvidensen er klar og direkte. Selger bekrefter ingen radonmåling. Leiligheten i 1. etasje øker eksponeringspotensial. Confidence opprettholdes.\n\n**R8 – 1. etasje generell risiko (confidence justert ned til 0.65):**\nEvidensen bekrefter at leiligheten er i 1. etasje og at bygget er fra 1936. Imidlertid er påstandene om økt risiko for fuktinntrenging, støy og innbrudd ikke direkte dokumentert i salgsoppgaven – dette er generelle antakelser. Hulltaking viste ingen fukt. Confidence justeres ned fra 0.75 til 0.65 da evidensen er indirekte.\n\n**R9 – Felles bygningsdeler ikke vurdert (confidence hevet til 0.90):**\nEvidensen er direkte og eksplisitt. Listen over ikke-vurderte bygningsdeler er oppgitt i tilstandsrapporten. Byggets alder (1936) forsterker risikoen. Confidence heves fra 0.87 til 0.90.\n\n**R10 – Pågående byggesaker (confidence opprettholdt 0.75):**\nEvidensen bekrefter de nevnte sakene. Det er i tillegg en sak om åpning i branncellebegrensende vegg i Trondheimsveien 157 som ikke var med i original risikobeskrivelse. Risikoen er reell men usikker i konsekvens. Confidence opprettholdes.\n\n**R11 – Gjerderett og vedlikeholdsplikt (confidence justert ned til 0.78):**\nEvidensen bekrefter tinglyste heftelser. Imidlertid er det uklart om dette faktisk medfører praktiske forpliktelser for den aktuelle andelen i et borettslag der tomten er fellesareal. Confidence justeres ned fra 0.80 til 0.78.\n\n**R12 – Legalpant og misligholdsrisiko (confidence hevet til 0.87):**\nEvidensen er direkte og klar. Legalpant inntil 2G er bekreftet, og konsekvensen av andres mislighold er eksplisitt beskrevet. Confidence heves fra 0.85 til 0.87.\n\n**R13 – Bod på fellesareal (confidence opprettholdt 0.92):**\nEvidensen er direkte og eksplisitt. Risikoen er godt dokumentert. Confidence opprettholdes.\n\n**R14 – Avvik fra tegninger (confidence justert ned til 0.60):**\nEvidensen bekrefter avviket, men arbeidet er godkjent og ferdigattest foreligger. Risikoen er begrenset siden godkjenning er på plass. Confidence justeres ned fra 0.72 til 0.60.\n\n**R15 – Energikarakter G (confidence justert ned til 0.80):**\nEvidensen bekrefter energikarakter G. Imidlertid er estimert strømforbruk på kun 1 314 kWh/år, noe som er svært lavt og kan indikere at oppvarmingen dekkes av felleskostnadene (varmtvann og fyring er inkludert). Risikoen for høye strømkostnader er dermed noe redusert. Confidence justeres ned fra 0.82 til 0.80.\n\n**R16 – Begrenset utleieadgang (confidence hevet til 0.85):**\nEvidensen er klar og direkte. Confidence opprettholdes.\n\n**R17 – Gammel bygning fra 1936 (confidence hevet til 0.90):**\nEvidensen er sterk. Byggeår 1936 er bekreftet, referansenivå er satt til byggeår, og byggematerialene (granitt, murverk, trekonstruksjon) er typiske for perioden. Confidence heves fra 0.88 til 0.90.\n\n**Manglende risikoer identifisert:**\n1. Elektrisk anlegg TG 2 – reguleringsventiler ikke testet, alder er årsak til TG 2. Dette er nevnt i evidensen men ikke som egen risiko.\n2. Asbest – sanert fra rørisolasjon i kjeller i 2021, men det er uklart om all asbest er fjernet.\n3. Bestemmelser om bruk av gårdsrom og vedlikehold av ledninger (tinglyst 21.11.2000) – kan medføre forpliktelser.\n4. Eiendomsskatt – kan bli ilagt og kreves inn via felleskostnadene.\n\n**Risikoer som bør justeres ned eller fjernes:**\n- R14 bør ha lavere confidence siden arbeidet er godkjent.\n- R8 bør ha lavere confidence da påstandene er generelle og ikke direkte dokumentert.\n"
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
    "input_tokens": 20461,
    "output_tokens": 7048,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
