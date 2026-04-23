# Trace: agentic_reflecting_iter1
- **Run ID:** 8ec76b3a-6fb0-4652-8c74-563729c89032
- **Tidspunkt:** 2026-03-23T20:31:30.727214+00:00
- **Varighet:** 104.27s
- **Input tokens:** 20221
- **Output tokens:** 5729

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
Risiko 1: Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand.
  Confidence: 1.0
  Evidens: Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.; mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle

Risiko 2: Ingen radonmåling er utført. Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuelt forhøyede radonnivåer i boligen.
  Confidence: 1.0
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 3: Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle fremtidige krav mot selger.
  Confidence: 1.0
  Evidens: Boligselgerforsikring: Selger har ikke tegnet forsikring.

Risiko 4: Legalpant utgjør en skjult heftelse med høy prioritet. Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.
  Confidence: 1.0
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 5: Tinglyst bestemmelse om nettstasjon fra Elvia AS. Det er tinglyst en bestemmelse om nettstasjon med rettigheter for bygging, drift, vedlikehold og fornyelse til fordel for Elvia AS. Dette kan medføre begrensninger i bruken av eiendommen.
  Confidence: 0.9
  Evidens: 09.12.2022 ‑ Dokumentnr: 1402464 ‑ Bestemmelse om nettstasjon; Rettighetshaver: Elvia AS Org.nr: 980 489 698; Bygging, drift, vedlikehold og fornyelse

Risiko 6: Tinglyst bestemmelse om byggeforbud og beplantning. Det er tinglyst en bestemmelse om byggeforbud og beplantning som kan begrense kjøpers mulighet til å gjøre endringer på eiendommen.
  Confidence: 0.9
  Evidens: Bestemmelse om byggeforbud og beplantning; Kan ikke slettes uten samtykke fra Oslo Kommune

Risiko 7: Fellesgjeld og variabel rente. Sameiet har en samlet fellesgjeld på kr 6 000 000 fordelt på 241 seksjoner, noe som gir en andel fellesgjeld på kr 25 000 per boligseksjon. Renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostnadene.
  Confidence: 0.95
  Evidens: Samlet fellesgjeld vil være på kr. 6 000 000, ‑ og vil fordeles likt mellom alle seksjonseierne (totalt 241). Andel fellesgjeld blir kr. 25 000 per boligseksjon.; Det opplyses at renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostadene tilsvarende.

Risiko 8: Felleskostnader er basert på forslag til budsjett og kan øke. Felleskostnadene er stipulert til kr 4 539 per måned, men er basert på et foreløpig budsjett og vil avhenge av kostnadsnivå og tjenester levert til sameiet.
  Confidence: 0.85
  Evidens: Felleskostnader kr 4 539,‑ pr. mnd; Budsjett utarbeidet av OBOS Eiendomsforvaltning.; Felleskostnadene vil avhenge av kostnadsnivå og de varer og tjenester som leveres til sameiet.

Risiko 9: Kjellerbod kan omdisponeres av sameiet. Boder utenfor boenheten kan omdisponeres av borettslaget/sameiet, noe som kan påvirke boligens BRA og kjøpers tilgang til bod.
  Confidence: 0.9
  Evidens: Kjellerbod (BRA‑e) på ca. 5 m². Boder utenfor boenheten kan omdisponeres av borettslaget/ sameiet og dette kan påvirke boligens BRA.

Risiko 10: Byggetegninger er ikke innhentet. Det foreligger ikke byggetegninger for oppdraget, noe som gjør det vanskeligere å verifisere at boligen er bygget i henhold til godkjente planer.
  Confidence: 0.9
  Evidens: Det foreligger ikke tegninger; Byggetegninger er ikke innhentet for dette oppdraget. Egne undersøkelser anbefales.

Risiko 11: Risiko for skjeggkre. Selger kan ikke garantere at det ikke finnes skjeggkre i boligen ved overlevering. Skjeggkre kan komme inn via pappemballasje, vesker eller klær.
  Confidence: 0.75
  Evidens: Selger kan ikke garantere at det ikke kan finnes skjeggkre i boligen ved overlevering.; Skjeggkre er et insekt som har fått rask utbredelse etter at dette ble allment kjent i Norge i 2014.

Risiko 12: Pågående utbygging kan medføre ulemper for beboerne. Sameiet er forpliktet til å la selger benytte deler av sameiets utvendige fellesarealer midlertidig for adkomst og plassering av utstyr/rigg. Sameierne må påregne rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid.
  Confidence: 0.85
  Evidens: Sameiet er herunder forpliktet til å la Selger vederlagsfritt benytte deler av Sameiets utvendige fellesarealer midlertidig for adkomst, plassering av utstyr/rigg med mer.; Sameierne må påregne at det kan bli rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid

Risiko 13: Formuesverdi er ikke beregnet. Boligen er nybygg og formuesverdien er ikke beregnet, noe som gjør det vanskelig for kjøper å forutse fremtidig skatteplikt knyttet til formuesverdien.
  Confidence: 0.75
  Evidens: Info om formuesverdi: Formuesverdien er ikke beregnet på grunn av at boligen som selges er nybygg.; Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger.

Risiko 14: U-verdi for tak og gulv er oppgitt som 0,00 i energiattesten. Dette kan indikere manglende eller feil registrerte data i energiattesten, noe som kan gi et misvisende bilde av boligens energieffektivitet.
  Confidence: 0.8
  Evidens: U-verdi for tak 0,00 W/(m²·K); U-verdi for gulv 0,00 W/(m²·K); Areal tak 0 m²; Areal gulv 0 m²

Risiko 15: Kombinert sameie med næringsseksjoner medfører kompleks kostnadsfordeling. Sameiet er et kombinert sameie med bolig- og næringsseksjoner, noe som innebærer en kompleks fordeling av felleskostnader og vedlikeholdsansvar som kan gi uforutsette kostnader for boligkjøper.
  Confidence: 0.8
  Evidens: Sameiet er et kombinert sameie som består av følgende seksjoner i eiendommen gnr. 123, bnr. 1005 i Oslo kommune.; Næringsseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene; Boligseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene

Risiko 16: Parkeringsplass selges separat til høy pris. Parkeringsplass må kjøpes separat for kr 500 000 + omkostninger, med en månedlig felleskostnad på kr 200 i tillegg til ordinære felleskostnader. Dette er en betydelig tilleggskostnad.
  Confidence: 0.8
  Evidens: Mulighet for kjøp av p‑plass til 500 000,‑ + omk.; Felleskostnader for parkeringsplassen er kr. 200,‑ i måneden og kommer som et tillegg til ordinære felleskostnader.

Risiko 17: Boligen er ubebodd og det foreligger ikke informasjon om strømforbruk. Kjøper har dermed ikke grunnlag for å vurdere faktiske energikostnader.
  Confidence: 0.7
  Evidens: Boligen er ubebodd og det foreligger derfor ikke informasjon om strømforbruk

Risiko 18: Nøkkelskap fjernes før overtakelse. To nøkkelskap festet i skyvedørsgarderoben i gangen vil bli tatt ned av selger før kjøper overtar leiligheten, noe som kan etterlate hull og merker.
  Confidence: 0.7
  Evidens: Det er to nøkkelskap som er festet i skyvedørsgarderoben i gangen. Disse vil tar ned før kjøper overtar leiligheten.; Kjøper aksepterer at det kan forekomme hull og merker etter montering av inventar og utstyr som ikke er en del av overdragelsen.

Dokumentkontekst:
[d023_d023 | Side [1]]
dkomstrett
Eiendommen er regulert til blant annet bolig. For mer Kan ikke slettes uten samtykke fra: Oslo Kommune
informasjon om reguleringsforhold, kontakt megler eller Org.nr: 958 935 420
søk på saksnummer, adresse eller gårds‑ og Rettighetshaver allmennheten
bruksnummer på Plan‑ og bygningsetatens hjemmeside. Overført fra: Knr:0301 Gnr:123 Bnr:1005
Gjelder denne registerenheten med flere
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det 09.12.2022 ‑ Dokumentnr: 1402464 ‑

---

[d023_d023 | Side [1]]
igheter: På eiendommen er det 09.12.2022 ‑ Dokumentnr: 1402464 ‑ Bestemmelse om
tinglyst følgende heftelser og rettigheter som følger nettstasjon
eiendommens matrikkel ved overskjøting til ny Rettighetshaver: Elvia AS
hjemmelshaver: Org.nr: 980 489 698
Bygging, drift, vedlikehold og fornyelse
301/ 123/ 1005/ 155: Bestemmelse om adkomstrett
02.04.2004 ‑ Dokumentnr: 23357 ‑ Best. om adkomstrett Bestemmelseom byggeforbud og beplantning
Kan ikke slettes uten samtykke fra Oslo Kommune Overført fra: Knr:0301

---

[d023_d023 | Side [1]]
nn og rep. og vedlikehold Tilleggsdel: Bygning og grunn
Kan ikke slettes uten samtykke fra Oslo Kommune Sameiebrøk: 87/ 16748
v/ Plan‑ og bygningsetaten
Overført fra: Knr:0301 Gnr:123 Bnr:1005 Legalpant: Kommunen har legalpant som sikkerhet for
Gjelder denne registerenheten med flere betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til
02.04.2004 ‑ Dokumentnr: 23357 ‑ Best. om vann/ sameieforholdet, som

---

[d023_d023 | Side [1]]
4.2004 ‑ Dokumentnr: 23357 ‑ Best. om vann/ sameieforholdet, som felleskostnader. Legalpant er pant
kloakkledn. som ikke vises i grunnboksutskriften, og har prioritet
Rettighetshaver: Knr:0301 Gnr:123 Bnr:1005 foran tinglyste lån, for eksempel banklån på seksjonen.
Bestemmelse om anlegg og vedlikehold av ledninger Legalpant til kommunen har høyere prioritet enn
41

## Side 42

OM EIENDOMMEN
legalpant til sameiet. hos eiendomsmegler før budet legges inn. Kontakt
eiendomsmegler for eventuelle spørsmål.
Vei,

---

[d023_d023 | Side [1]]
legges inn. Kontakt
eiendomsmegler for eventuelle spørsmål.
Vei, vann og avløp
Selger leverer eiendommen i ryddig og rengjort stand.
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til Informasjon om skjeggkre i nybygg:
det kommunale nettet er private, og Skjeggkre er et insekt som har fått rask utbredelse etter
vedlikeholdsansvaret for disse påhviler sameiet. at dette ble allment kjent i Norge i 2014. Det er ikke påvist
Adkomst til eiendommen skjer via

---

[d023_d023 | Side [1]]
orge i 2014. Det er ikke påvist
Adkomst til eiendommen skjer via offentlig vei. noen helseskadelige eller bygningsmessige skader av
skjeggkre. Skjeggkre vil sjelden komme inn i boligen
sammen med bygningsmaterialer, derimot kan dette
Utleie
komme inn ved pappemballasje eller via vesker, klær m.v.
Adgang til utleie: Boligen kan leies ut i samsvar med Selger kan ikke garantere at det ikke kan finnes
gjeldende lovverk, og vedtektene setter ingen skjeggkre i boligen ved overlevering. Det samme

---

[d023_d023 | Side [1]]
erer at det kan forekomme hull og merker Balkonggulv leveres med fall til renne og nedløpsrør.
etter montering av inventar og utstyr som ikke er en del
av overdragelsen. Selger har ikke skaffet en tilstandsrapport som oppfyller
kravene i forskriften til avhendingsloven. Forskriften
39

## Side 40

OM EIENDOMMEN
fastsetter minstekrav for hvilke bygningsdeler som skal Eier skal påse at dyret ikke avleverer avføring på
undersøkes, hvordan undersøkelsene skal gjennomføres, eiendommen.
og hvordan resultatene

---

[d023_d023 | Side [1]]
nere den standard
kjøpekontrakten utarbeidet av Emera som en del av
eiendomshandleren. Kjøpekontrakten kan gjennomgås
42

## Side 43

OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf.

---

[d023_d023 | Side [1]]
ffentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om

---

[d023_d023 | Side [1]]
er ikke følge med i salget. TAK Betongdekke isolert på overside. Isolasjon
Alt utstyr og installasjoner som medfølger overtas slik de skråskjæres med fall til sluk og tekkes tekkes med
er, uten garanti, med mindre det foreligger en gjeldende pappmembran. Vannet fra takflatene ledes bort i rør
garanti fra produsent eller leverandør. innvendig i bygget. BALKONGER Balkonger bygges av
betongelementer som er innspent i betongdekke.
Kjøper aksepterer at det kan forekomme hull og merker Balkonggulv leveres med

---

[d023_d023 | Side [1]]
s琀椀ngeniør
Matrikkeldata
Kommune gnr. bnr. fnr. snr. Areal Kilde Eieforhold
301 OSLO 123 1005 155 9129 m² Planinnsyn Eiet
Adresse
Vollebekkveien 2 F
Hjemmelshaver
Jm Norge AS
Eierandel
87 / 16748
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Oppdragsnr.: 13722-3291 Befaringsdato: 25.02.2026 Side: 6 av 8
63

## Side 64

Vollebekkveien 2 F, 0598 OSLO Øyum Takst og Eiendom AS
Gnr 123 - Bnr 1005 Heggelibakken 4
0301 OSLO 0375 OSLO
Forutsetninger
Generelt
Kunden skal lese gjennom

---

[d023_d023 | Side [1]]
orttidsutleie menes utleie i en
sammenhengende periode på opptil 30 døgn.
grunnlag
Radonmåling Overtakelse
Selger har ikke utført radonmåling. Det er ikke krav om Tidspunkt for overtakelse avtales mellom kjøper og
dette med mindre boligen er helt eller delvis utleid. selger.
Diverse Forsikring
Det informeres om at ingen kan eie mer enn to Boligselgerforsikring: Selger har ikke tegnet forsikring.
boligseksjoner i sameiet, i henhold til eierseksjonsloven §
23. Seksjoner som eies av nærstående eller gjennom

---

[d023_d023 | Side [1]]
ent opparbeidet med grøntareal,
ligger bare noen minutters gange unna. Herfra tar det internveier og sittegrupper.
36

## Side 37

OM EIENDOMMEN
BRA totalt: 92 m²
TBA: 22 m²
Beskrivelse av
Bruksareal fordelt på etasje
eiendommen
Underetasje
BRA‑e: 5 m² Bod
Type eiendom
1. etasje
Eieform: Eierseksjon BRA‑i: 87 m² To soverom, entre, kjøkken, stue, gang,
baderom, bod
Objektstype: Eierseksjon
TBA fordelt på etasje
1. etasje
Ferdigattest/ brukstillatelse:
22 m² Balkong og terrasse
Det foreligger ferdigattest

---

[d023_d023 | Side [1]]
gsdato: 25.02.2026 Side: 2 av 8
59

## Side 60

Vollebekkveien 2 F, 0598 OSLO Øyum Takst og Eiendom AS
Gnr 123 - Bnr 1005 Heggelibakken 4
0301 OSLO 0375 OSLO
Bygninger på eiendommen
Boligbygg med 昀氀ere boenheter
Anvendelse
Bolig
Byggeår Kommentar
2024 Byggeåret er basert på opplysninger fra
eiendomsmatrikkelen.
Oppdragsnr.: 13722-3291 Befaringsdato: 25.02.2026 Side: 3 av 8
60

## Side 61

Vollebekkveien 2 F, 0598 OSLO Øyum Takst og Eiendom AS
Gnr 123 - Bnr 1005 Heggelibakken 4
0301 OSLO 0375 OSLO
Arealer,

---

[d023_d023 | Side [1]]
ke slettes uten samtykke fra Oslo Kommune Overført fra: Knr:0301 Gnr:123 Bnr:1005
v/ Plan‑ og bygningsetaten Gjelder denne registerenheten med flere
Overført fra: Knr:0301 Gnr:123 Bnr:1005
Gjelder denne registerenheten med flere
07.09.2023 ‑ Dokumentnr: 967650 ‑ Seksjonering
Opprettet seksjoner:
02.04.2004 ‑ Dokumentnr: 23357 ‑ Erklæring/ avtale Snr: 155
Rettighetshaver: Knr:0301 Gnr:123 Bnr:1005 Formål: Bolig
Rett til nødv. bruk av grunn og rep. og vedlikehold Tilleggsdel: Bygning og grunn
Kan ikke

---

[d023_d023 | Side [1]]
t. Konferer gjerne med megler før bud avgis.
Dersom kjøper er en juridisk enhet, eller en fysisk person
som handler i næringssammenheng, regnes kjøpet ikke Bud som har forbehold om konfidensialitet ("hemmelige
som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
oppfordres til å inngi bud via eiendomsmegler.
Ved slike kjøp selges eiendommen «som den er», og
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling

---

[d023_d023 | Side [1]]
ir ingen Vi sier det som det er – enkelt og greit – fordi vi
  urealistiske løfter eller forskjønnede beskrivelser. vet at det gir de beste resultatene. Erfaringen
 vår bekrefter det, og erfaring har vi mye av.
Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er
en del av eiendommen og medfølger i handelen.
emera.no
132

## Side 133

Fra hvilepuls
til makspuls.
Det er

---

[d023_d023 | Side [1]]
 kun dersom dette er forhåndsavtalt med
megler i forbindelse med aksept av budet.
Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
Hvitvasking
er estimert til ca. kr 6 725,00, og omfatter vanligvis
Eiendomsmeglere er underlagt lov om hvitvasking, og er innhenting av informasjon fra kommunen, eventuell
blant annet forpliktet til å gjennomføre kundetiltak av forretningsfører, samt kopi av tinglyste dokumenter.
både selger og kjøper. Total kostnad ved salg til prisantydning: kr 49

---

[d023_d023 | Side [1]]
 eiendommens tilstand enn hva som ville vært tilfelle
Vedtekter/ husordensregler
dersom en tilstandsrapport var innhentet.
Vedlagt prospektet.
Øvrig
Energimerke
informasjon
Energikarakter: B
Adresse
Energifarge: Ikke angitt
Vollebekkveien 2F, 0598 OSLO
Info energiklasse
Gnr. 123, bnr. 1005, snr. 155, ideell andel 1/ 1
i Oslo kommune. Alle eiendommer som selges eller leies ut skal ha en
energiattest. Unntak gjelder blant annet for frittstående
bygninger med et bruksareal mindre enn 50 m². Det er
Selger
eier

---

[d023_d023 | Side [1]]
 Heggelibakken 4
0301 OSLO 0375 OSLO
Arealer
Boligbygg med 昀氀ere boenheter
Bruksareal BRA m²
Etasje Internt bruksareal (BRA-i) Eksternt bruksareal (BRA-e) Innglasset balkong SUM Terrasse- og balkongareal
(BRA-b) (TBA)
Etasje 87 87 22
Kjeller 5 5
SUM 87 5 22
SUM BRA 92
Romfordeling
Internt bruksareal Eksternt bruksareal Innglasset balkong
Etasje
(BRA-i) (BRA-e) (BRA-b)
Bad, bod, entré, kjøkken, 2 soverom,
Etasje
stue, spisestue
Kjeller Kjellerbod
Kommentar
Himlingshøyde er ca. 249 cm. i stuen. Ca. 227 cm. i

---

[d023_d023 | Side [1]]
4

## Side 55

Bygningsdata: Vedlegg til energiattesten
Attesten gjelder for følgende eiendom
Adresse Bygningsnummer Bruksenhetsnummer Seksjonsnummer Festenummer Andelsnummer
Vollebekkveien 2F 301044848 H0101 155 0
Enhet Inngangsverdi
Bygningskategori BOLIGBLOKKER
Bygningskategori-Id (NVE-Id) 2
Bygningstype LEILIGHET
Byggeår 2024
Byggstandard
Type bygg Eksisterende
TEK standard
Energivurdering
Pliktig energivurdering Nei
Kjelanlegg Nei
Er vurdering opplastet Nei
Dato for opplastning
Varmeanlegg Nei
Er

---

[d023_d023 | Side [1]]
everdighet, slik som at arealet må ha minst en bredde på 0,6m
og minst en høyde på 1,9 m osv. Et rom kan være i strid med teknisk forskri昀琀 og mangle godkjennelse hos kommunen for den
aktuelle bruken, uten at de琀琀e får betydning for om arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet måles tas det
ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk beregning

---

[d023_d023 | Side [1]]
 vurdering opplastet Nei
Dato for opplastning
Varmeanlegg Nei
Er vurdering opplastet Nei
Dato for opplastning
Kjøleanlegg Nei
Er vurdering opplastet Nei
Dato for opplastning
Ventilasjonsanlegg Nei
Er vurdering opplastet Nei
Dato for opplastning
Areal yttervegger 28 m²
Areal tak 0 m²
Areal gulv 0 m²
Areal vinduer, dører og glassfelt 16 m²
Oppvarmet BRA 87 m²
Totalt BRA 87 m²
Oppvarmet luftvolum 218 m³
U-verdi for yttervegger 0,18 W/(m²·K)
U-verdi for tak 0,00 W/(m²·K)
U-verdi for gulv 0,00 W/(m²·K)
U-verdi

---

[d023_d023 | Side [1]]
 OSLO 0375 OSLO
Forutsetninger
Generelt
Kunden skal lese gjennom dokumentet før bruk og gi 琀椀lbakemelding 琀椀l taks琀椀ngeniøren hvis det 昀椀nnes feil eller mangler som
bør re琀琀es opp. Hvis rapporten er eldre enn 6 måneder, bør du kontakte taks琀椀ngeniøren for ny befaring og oppdatering.
Arealberegninger for boenheter
Areal fastse琀琀es e琀琀er Forskri昀琀 琀椀l avhendingsloven og Norsk Standard 3940 Areal- og volum-beregninger av bygninger fra
2023.
Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det

---

[d023_d023 | Side [1]]
 昀氀ere boenheter
Vollebekkveien 2 F, 0598 OSLO OSLO kommune
gnr. 123, bnr. 1005, snr. 155
Befaringsdato: 25.02.2026 Rapportdato: 26.02.2026 Oppdragsnr.: 13722-3291 Referansenummer: QS1245
Foretak: Øyum Takst og Eiendom AS Taks琀椀ngeniør: Erik Øyum
Gyldig rapport
26.02.2026
58

## Side 59

Øyum Takst og Eiendom AS
Øyum Takst og Eiendom AS er del av kontorfellesskapet Taksthuset AS. Taksthuset har lang erfaring og kompetanse på alt innen
taks琀昀aget fra næringstakster, boligtakster, 琀椀lstandsvurderinger,

---

[d023_d023 | Side [1]]
for varmegjenvinner pga. frostsikring 89 %
Spesifikk vifteeffekt (SFP) relatert til luftmengder i driftstiden 0,78 kW/(m³/s)
Spesifikk vifteeffekt (SFP) relatert til luftmengder utenfor driftstiden 0,78 kW/(m³/s)
Gjennomsnittlig spesifikk ventilasjonsluftmengde i driftstiden 1,47 m³/(m²·h)
Årsgjennomsnittlig systemvirkningsgrad for oppvarmingssystemet 83 %
Installert effekt for romoppvarming og ventilasjonsvarme (varmebatteri) 130 W/m²
Settpunkt-temperatur for oppvarming i driftstiden 21,0

---

[d023_d023 | Side [1]]
kin,
gangen. induksjonstopp og stekeovn med steketermometer, gir et
Balkong (TBA) avrundet til 11 m². Terrasse avrundet til 11 helhetlig og eksklusivt preg. Her er det gode arbeidsflater
m². og rikelig med skapplass.
Kjellerbod (BRA‑e) på ca. 5 m². Boder utenfor boenheten
kan omdisponeres av borettslaget/ sameiet og dette kan Badet er delikat utført med flislagte gulv og vegger.
påvirke boligens BRA. Badet er utstyrt med dusjhjørne med innfellbare
Arealet er beregnet med 3D‑laserteknologi som gir

---

[d023_d023 | Side [1]]
 av ekspert for selgers
regning, innen ett år etter at avtale om salg er inngått.
Sameiet er et kombinert sameie som består av følgende Dette følger av forskrift om energimerking av bygninger
seksjoner i eiendommen gnr. 123, bnr. 1005 i Oslo og tekniske anlegg § 5 (3).
kommune.
Energiattesten er basert på nåværende eiers/
Husdyr: Det er tillatt å holde dyr så lenge dyreholdet ikke husstandens forbruk og utgifter de siste årene. Forbruket
er til sjenanse eller ulempe for de øvrige beboerne. kan variere

---

[d023_d023 | Side [1]]
e basert på opplysninger fra takstrapporten. Les mer om de琀琀e og hvordan du kan reservere deg
her:Vendu samtykke
Taks琀椀ngeniørenens rolle
Rapporten er utarbeidet av en uavhengig taks琀椀ngeniør uten bindinger 琀椀l andre aktører i boligbransjen.
Reklamasjonsnemda for takstmenn
Er du som forbruker misfornøyd med taks琀椀ngeiørens arbeid eller opptreden ved taksering av bolig og fri琀椀dshus, se
www.takstklagenemnd.nofor mer informasjon.
Egne forutsetninger
De琀琀e er kun en arealrapport. Det er ikke u琀昀ørt

---

[d023_d023 | Side [1]]
rsøkelsene skal gjennomføres, eiendommen.
og hvordan resultatene skal presenteres i rapporten. Det Dyr må holdes borte fra lekeplasser og sandkasser.
er ikke et lovkrav å fremskaffe en slik tilstandsrapport,
men mangelen på en slik rapport medfører at det Regnskap/ budsjett/ kostnadsøkninger: Sameiets
vanligvis er gjort færre undersøkelser av budsjett følger vedlagt prospektet.
bygningssakkyndig, og at kjøper får mindre informasjon
om eiendommens tilstand enn hva som ville vært tilfelle
Vedtekter/

---

[d023_d023 | Side [1]]
 i
salgsoppgaven. YTTERVEGGER
Yttervegger er bindingsverk av tre med 25‑27 cm
Det er to nøkkelskap som er festet i isolasjon og fuktbestandig plate utvendig. VINDUER
skyvedørsgarderoben i gangen. Disse vil tar ned før Vindu og vindusdører leveres med U‑verdi snitt 0,8 W/
kjøper overtar leiligheten. m2K
Gjenstander som er nevnt i standardlisten, men som ikke FASADEMATERIALE Hovedsakellig tegl, forøvrig trepanel
finnes på eiendommen, vil heller ikke følge med i salget. TAK Betongdekke isolert på overside.

---

[d023_d023 | Side [1]]
2. Bo3d har stå琀琀
for prosessering av rå昀椀len og utarbeidelse av målsa琀琀 plantegning og arealer 琀椀l bruk i rapporten. Det er beny琀琀et 3D-skanner av typen Leica
BLK2GO. Skanneren sender ut ca. 420 000 laserpunkter i sekundet og lager en digital tvilling av boligen og gir dermed grunnlag for nøyak琀椀g
måling.
Lovlighet
Byggetegninger
Det foreligger ikke tegninger
Kommentar: Byggetegninger er ikke innhentet for de琀琀e oppdraget. Egne undersøkelser anbefales.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt

---

[d023_d023 | Side [1]]
 m² balk1o1.n1 gm² A_40_4-5_D-GS-Hn_ittR Da
SAn_i4tt0 J__4d-5e_l J1_Ra
s7o.7v m 2² balk1o0.n1 gm²
SAn_i4tt0 B_4_B_Ra
03083 6070
23830
01842 13220
1850
134
431 431
134
431
134
431
431 134
32190 Hus 5 -se tegningsnr. A_20_5_01_Ra
postkasser  op  p  g15a  m n ²g  4a trap11p.5e mr²om innglasset del  p  o  st  kasser 35980 +120.30
536
Vedlegg E-02
2 roms
3 roms
4 roms
5 roms
6 roms
næring
rømningsretning
ABnragnrenp-sovge rie dningsetaten
fravalgsvegg
tilvalgsvegg
Sskkaypvdeydbødrseg earr

---

[d023_d023 | Side [1]]
od
Kommentar
Himlingshøyde er ca. 249 cm. i stuen. Ca. 227 cm. i gangen.
Balkong (TBA) avrundet 琀椀l 11 m². Terrasse avrundet 琀椀l 11 m².
Kjellerbod (BRA-e) på ca. 5,4 m². Boden er merket med adresse, H0101 og bod nr. 167. Boder utenfor boenheten kan omdisponeres av
bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA.
Arealet er beregnet med 3D-laserteknologi som gir nøyak琀椀ghet innenfor 2% som er kravet i ny avhendingslov per 1. januar2022. Bo3d har stå琀琀
for prosessering av rå昀椀len og utarbeidelse av

---

[d023_d023 | Side [1]]
esstueseksjonen er fritatt øvrige felleskostnader i Sameiet.
(2) Næringsseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av
sin ideelle andel av felleskostnadene:
Kostnader til egen andel av kommunale avgifter, drift og vedlikehold av tekniske
installasjoner, anlegg, innvendige fellesarealer, overflatevedlikehold av «egen fasade»
utskifting av vinduer og dører i/til næringsseksjonene, avfallshåndtering, service og
driftsavtaler (eksempelvis brann-, sprinkling-, ventilasjon, og

---

[d023_d023 | Side [1]]
r basert på forslag til budsjett
37 950 (Dokumentavgift (2,5% av tomteverdi)) utarbeidet av forretningsfører. Felleskostnadene vil
750 (Etableringsgebyr sameie) avhenge av kostnadsnivå og de varer og tjenester som
9 078 (Oppstartskapital sameiet (2x felleskostnader)) leveres til sameiet. Strøm til lading av el‑bil.
545 (Tinglysningsgebyr ‑ pantedokument)
545 (Tinglysningsgebyr skjøte)
Eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
48 868 (Omkostninger totalt) I Oslo kommune er det

---

[d023_d023 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Kommunale avgifter
Informasjon: Inkludert i felleskostnader.
Estimert totalpris ink. omk Fellesgjeld
Kr 7 973 868 Kr 25 000 pr. 27.02.2026
Lånebetingelser fellesgjeld: JM vil på vegne av det
Felleskostnader
fremtidige sameiet og sameiet som debitor, ta opp
Felleskostnader kr 4 539,‑ pr. mnd fellsgjeld på felles stue. Samlet fellesgjeld vil være på kr.
6 000 000, ‑ og vil fordeles likt mellom alle
Felleskostnader inkulderer: I felleskostnadene inngår: seksjonseierne (totalt 241). Andel

---

[d023_d023 | Side [1]]
r: I felleskostnadene inngår: seksjonseierne (totalt 241). Andel fellesgjeld blir kr. 25
Felleskostnader dekker sameiets driftskostnader, som 000 per boligseksjon. Budsjett utarbeidet av OBOS
omfatter bl.a. felles bygningsforsikring, kostnader til drift Eiendomsforvaltning. Det opplyses at renten kan endre
35

## Side 36

OM EIENDOMMEN
seg i takt med den generelle renteutviklingen og dermed omtrent 14 minutter til Oslo S, noe som gjør
påvirke de månedlige kostadene tilsvarende. beliggenheten ideell både

---

[d023_d023 | Side [1]]
OMMEN
OM EIENDOMMEN
og vedlikehold, forretningsførsel, kommunale avgifter og
Økonomi
strøm i fellesarealer. I tillegg dekker det energi boliger for
oppvarming og varmt tappevann samt felleskostnader
Prisantydning
for fellesstuen inkludert nedbetaling av fellesgjelden på
Kr 7 900 000 kr 25.000,‑ pr. boligseksjon.. Det vil på vegne av sameiet
bli inngått driftsavtaler med tekniske leverandører etter
behov.
Omkostning kjøper
Felleskostnader for garasjeplass i Passasjen er stipulert
7 900 000,00

---

[d023_d023 | Side [1]]
tene skal varsles i rimelig tid og
gjennomføres slik at det ikke skaper unødvendig ulempe for seksjonseieren eller andre
brukere.
(5) Et sameie som ikke oppfyller sin vedlikeholdsplikt, skal erstatte tap dette påfører
seksjonseierne gjennom skader på bruksenhetene, jf. eierseksjonsloven § 35.
6. Felleskostnader, pantesikkerhet og heftelsesform
6-1 Felleskostnader
(1) Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet, er
felleskostnader. Felleskostnader skal fordeles mellom

---

[d023_d023 | Side [1]]
garasjekjeller.
 Strøm til lys, ventilasjon, snøsmelteanlegg og lignende i forbindelse med
garasjekjeller.
 Vaktmestertjenester/renhold av seksjonen.
 Serviceavtaler for drift og vedlikehold av garasjeanlegget.
 Nødvendige forsikringer.
Dersom kostnader forbundet med energi mv. ikke klart kan atskilles eller måles, skal det
betales en forholdsmessig andel etter en nøkkel basert på nytte eller forbruk.
Parkeringsseksjonen er fritatt øvrige felleskostnader i Sameiet. Kostnadene fordeles på
sameierne

---

[d023_d023 | Side [1]]
 (5) 2. avsnitt, må ved rehabilitering og andre felles
tiltak på eiendommen, belastes den seksjon installasjonen tilhører. Styret/årsmøtet avgjør
om remontering skal tillates.
(7) Forandringer som skjer i strid med de til enhver tid gjeldende bygningsforskrifter og andre
offentlige bestemmelser er ikke tillatt.
(8) Iht. lov om eierseksjoner § 25 6.ledd har næringsseksjonene og boligseksjonene
evigvarende enerett til å benytte den delen av sameiets fellesareal som er markert på
bruksrettsplan vedlegg

---

[d023_d023 | Side [1]]
er til egen andel av kommunale avgifter, drift og vedlikehold av tekniske
installasjoner, anlegg, innvendige fellesarealer, avfallshåndtering, service og driftsavtaler
(eksempelvis brann, sprinkling-, ventilasjon og nøkkelsystemer, vedlikehold av navneskilt
mv.), strøm i «egne» fellesarealer, vakt- og alarmtjenester og øvrige anlegg og funksjoner,
herunder heis, takterrasse og boder som bare eller i det vesentlige betjener boligseksjonene
og øvrige kostnader hvor boligseksjonene har enerett til bruk, jf.

---

[d023_d023 | Side [1]]
holdsplikten omfatter også felles installasjoner som går gjennom bruksenheter,
slik som rør, ledninger, kanaler og felles varmeanlegg inklusive radiatorer. Sameiet har rett til
å føre nye slike installasjoner gjennom bruksenhetene hvis det ikke skaper vesentlig ulempe
for den aktuelle seksjonseieren. Sameiets vedlikeholdsplikt omfatter også utvendig
vedlikehold av vinduer, veranda- og ytterdører til boligene.
(3) Sameiets vedlikeholdsplikt omfatter også slikt som utskifting av sluk, vinduer, veranda-

---

[d023_d023 | Side [1]]
arkeringsseksjonens
vedtekter, se vedlegg 2.
Fellesstueseksjonen disponeres og eies av boligseksjonene i sameiet, men er av praktiske
årsaker skjøtet over til sameiet som hjemmelshaver i grunnboken. Alle boligseksjoner har
uavhengig av sin eierbruk lik rett til bruk, og alle kostnader og evt. inntekter (også ved ev.
salg) skal fordeles likt pr. boligseksjon.
4-3 Kostnadsfordeling
Parkeringsseksjonen bærer sine særkostnader og sin andel av eierseksjonssameiets
felleskostnader, jf. 6-1 (4).
4-4

---

[d023_d023 | Side [1]]
melser hvor dette er angitt, ligger på de
seksjonseierne som har bruksretten, med mindre annet fremkommer av disse vedtekter.
Næringsseksjonene har overflatevedlikeholdsplikt for «sine» fasader i 1. etasje, herunder
utskifting og vedlikehold av vinduer og dører til sin seksjon, og bærer selv kostnadene for
dette. Tilsvarende er næringsseksjonene fritatt for felleskostnader for overflatevedlikehold av
sameiets øvrige fasade og utskifting og vedlikehold av dører og vinduer i boligseksjonene.
Næringsseksjon

---

[d023_d023 | Side [1]]
senhet, er
felleskostnader. Felleskostnader skal fordeles mellom seksjonseierne etter sameiebrøken
med unntak av parkeringsseksjonen og fellesstueseksjonen med mindre annet følger av
disse vedtektene.
Dersom særlige grunner taler for det, kan kostnadene fordeles etter nytten for den enkelte
bruksenhet eller etter forbruk.
Kostnader forbundet med fellesstueseksjonen fordeles på boligseksjonene med en lik andel
pr. seksjon. Fellesstueseksjonen er fritatt øvrige felleskostnader i Sameiet.
(2)

---

[d023_d023 | Side [1]]
tet.
(2) Hvis tiltakene fører med seg et samlet økonomisk ansvar eller utlegg for enkelte
seksjonseiere på mer enn halvparten av folketrygdens grunnbeløp på det tidspunktet tiltaket
besluttes, kan tiltaket bare gjennomføres hvis disse seksjonseierne uttrykkelig sier seg enige.


100

## Side 101


9-10 Beslutninger som krever enighet fra alle seksjonseiere
(1) Alle seksjonseiere må, enten på årsmøtet eller på et annet tidspunkt, uttrykkelig si seg
enige hvis sameiet skal kunne ta beslutning om
a) salg

---

[d023_d023 | Side [1]]
 øvrige kostnader hvor boligseksjonene har enerett til bruk, jf. vedtektenes pkt. 3-1 (8).
Kostnadene skal fordeles etter innbyrdes sameierbrøk.
Kostnader forbundet med kollektivt bredbånd og tv skal fordeles likt pr. tilknyttet boligseksjon.
(4) Parkeringsplassene i garasjeanlegget er organisert som en egen næringsseksjon nr. 189.
Kjøre- og adkomstareal er seksjonert som fellesareal.


94

## Side 95


For hver parkeringsplass i garasjeanlegget (med medfølgende kjøre- og adkomstareal og
tekniske

---

[d023_d023 | Side [1]]
på egen bankkonto. Avsetning til vedlikehold er en felleskostnad og
innbetalingene skal følge sameiebrøk.
6-3 Panterett for seksjonseiernes forpliktelse
De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren
som følger av sameieforholdet, jf. eierseksjonslovens § 31. Pantekravet kan ikke overstige et
beløp som for hver bruksenhet svarer til to ganger folketrygdens grunnbeløp på det
tidspunktet tvangsdekning besluttes gjennomført. Panteretten omfatter også krav som

---

[d023_d023 | Side [1]]

driftsavtaler (eksempelvis brann-, sprinkling-, ventilasjon, og nøkkelsystemer), vakt- og
alarmtjenester og øvrige anlegg og funksjoner som bare eller i det vesentlige betjener
næringsseksjonene og øvrige kostnader hvor næringsseksjonene har enerett til bruk, jf.
vedtektenes punkt 3-1 (8).
(3) Boligseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin
ideelle andel av felleskostnadene:
Kostnader til egen andel av kommunale avgifter, drift og vedlikehold av

---

[d023_d023 | Side [1]]
ler på annet vis virker sjenerende på omgivelsene. Ved
spesielle anledninger som medfører ekstra støy etter de respektive klokkeslettene,
varsles beboerne i tilstøtende og på vibbo minst 48 timer før arrangementet.
Ved innflytting, modernisering eller reparasjoner i boligen som medfører banking,
boring, sliping, saging etc. varsles naboer, og det tillates i tidsrommet:
På hverdager klokken 08:00 - 19:00
Lørdager 10:00-18:00
Ved større private arrangementer bør naboer varsles i god tid, og vinduer og

---

[d023_d023 | Side [1]]
rivate arrangementer bør naboer varsles i god tid, og vinduer og dører
skal holdes lukket under arrangementet.
Nabovarsel skal legges ut på Vibbo minst 48 timer før arrangementet
Beboerne skal påse at fellesdører/ytterdører er låst til enhver tid. Det er ikke tillatt
med røyking innendørs i fellesarealene.
Hamring, boring og annet arbeid som skaper støy må skje til tider der det er til minst
mulig sjenanse for naboene. På søndager og helligdager skal støyende arbeider
unngås. Ved større arbeid eller arbeid

---

[d023_d023 | Side [1]]
kal føres i bånd innenfor sameiets område, og
skal ikke luftes i fellesområdene.
40

## Side 41

OM EIENDOMMEN
m.m.
Oppvarming
Kan ikke slettes uten samtykke fra Oslo Kommune
Fjernvarme. v/ Vann‑ og avløpsverket
Overført fra: Knr:0301 Gnr:123 Bnr:1005
Boligen er ubebodd og det foreligger derfor ikke Gjelder denne registerenheten med flere
informasjon om strømforbruk
11.02.2020 ‑ Dokumentnr: 2095011 ‑ Bestemmelse om
Regulerings og arealplaner
adkomstrett
Eiendommen er regulert til blant annet bolig. For mer

---

[d023_d023 | Side [1]]
Jernbanetorget.
Byggemåte
Kun 100 meter unna finner du Vollebekk t‑banestasjon. 14
minutter ‑ Jernbanetorget 9 minutter ‑ Storo 6 minutter ‑ FUNDAMENTERING
Løren. Stålkjernepeler til fjell.
Det du trenger i umiddelbar nærhet: GRUNNMUR
Det er et godt utvalg av butikker, kaféer, skoler og Vegger mot terreng (grunnmurer) støpes i betong og
barnehager. Nærsenteret på Vollebekk ligger like ved, slik isoleres utvendig.
at du får tak i det du trenger i gåavstand.
BÆREKONSTRUKSJONER
Hvitevarer: Integrerte

---

[d023_d023 | Side [1]]
langs gulvet. Da skal det bare en liten
gnist til før gassen tar fyr og eksploderer.
En utvendig bod, skap eller garasje over bakkenivå kan være et egnet sted for
oppbevaring av små gassbeholdere.
Dyrehold
Det er tillatt å holde dyr så lenge dyreholdet ikke er til sjenanse eller ulempe for de
øvrige beboerne.
Ved dyrehold gjelder følgende bestemmelser:
Det forutsettes at eier av dyret er kjent med politivedtektene angående dyrehold og
straffebestemmelsene som gjelder for å holde dyr.
Hunder skal føres i

---

[d023_d023 | Side [1]]
ke de månedlige kostadene tilsvarende. beliggenheten ideell både for jobb og fritid.
En kort rusletur fra boligen ligger populære Bjerkedalen
Andre kostnader:
park, et grønt og innbydende samlingspunkt i bydelen.
TV/ Internett/ Bredbånd: Kjøper må tegne eget Her finner du turstier, dam med badeplass, lekeområder
abonnement. og idylliske Hovinbekken som slynger seg gjennom
parken. I parken ligger også en hyggelig
familierestaurant, perfekt for en uformell middag eller en
Formuesverdi
kaffe i solen.
Info om

---

[d023_d023 | Side [1]]
er skal støyende arbeider
unngås. Ved større arbeid eller arbeid over tid gjelder samme regler som nabovarsel
for arrangement.
Orden i fellesområdene
78

## Side 79

Sykler, barnevogner, sportsutstyr, leker og lignende skal ikke hensettes i oppganger,
portrom, plen og lekeområder. Private gjenstander skal ikke oppbevares i oppganger
og korridorer. Sykler skal hun parkeres på avgitte plasser.
Det må utvises forsiktighet når innbo bæres inn og ut av bygget i forbindelse med
flytting. Sameier er ansvarlig for

---

[d023_d023 | Side [1]]
delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan

---

[d023_d023 | Side [1]]
pliktet til å
yte nødvendig medvirkning til at utbygger, ev. den utbygger utpeker, kan gjennomføre en
helhetlig utbygging i samsvar med Selgers planer og med de endringene som ev. blir gjort


102

## Side 103


underveis. Sameiet er herunder forpliktet til å la Selger vederlagsfritt benytte deler av
Sameiets utvendige fellesarealer midlertidig for adkomst, plassering av utstyr/rigg med mer.
Sameierne må påregne at det kan bli rokeringer av tildelte parkeringsplasser på grunn av
bygningsmessig arbeid

---

[d023_d023 | Side [1]]
re ivaretatt
og virksomheten skal drives etter de til enhver tid gjeldende offentlige bestemmelser


89

## Side 90


For næringsseksjonene (forretningslokaler) skal gjelde alminnelige åpningstider og tidspunkt
for varelevering iht. offentlige normer godkjent av Oslo kommune til enhver tid.
(5) Seksjonseier har ikke rett til å foreta arbeider som påvirker/berører sameiets fellesarealer,
fellesanlegg og utvendig tilleggsareal uten forhåndsgodkjenning fra styret/årsmøtet.
Dette gjelder tiltak som:
 Alle

---

[d023_d023 | Side [1]]
ide 48

Nabolagsprofil
Vollebekkveien 2F - Nabolaget Vollebekk - vurdert av 105 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 84/100
Etablerere
Kvalitet på skolene
Godt voksne
Veldig bra 75/100
Naboskapet
Offentlig transport Godt vennskap 66/100
Vollebekk 4 min
Linje 4, 5 0.3 km
Aldersfordeling
Vollebekkveien 4 min
Linje 58 0.3 km
Alna stasjon 15 min Linje L1 1.3 km
Økern 21 min
T-bane, buss 1.9 km
Sinsenkrysset 5 min
Linje 12, 17 3.7 km
Skoler
Vollebekk skole

---

[d023_d023 | Side [1]]
 en uformell middag eller en
Formuesverdi
kaffe i solen.
Info om formuesverdi: Formuesverdien er ikke beregnet
på grunn av at boligen som selges er nybygg. For den aktive byr nærområdet på et bredt spekter av
Skatteetaten vil beregne en boligverdi (beregnet muligheter. Lillomarka ligger like ved, med flotte turstier
markedsverdi for bolig) basert på SSBs statistiske og skiløyper gjennom hele året. I tillegg finnes
opplysninger om omsatte boliger. Beregningen vil skje i kunstgressbane, svømmehall og flere

---

[d023_d023 | Side [1]]
 variere over Oslo og fjorden.
dersom boligen brukes som primær‑ eller
sekundærbolig.For mer informasjon, se Skatteetatens
Parkering
nettsider.
Mulighet for kjøp av p‑plass til 500 000,‑ + omk.
Felleskostnader for parkeringsplassen er kr. 200,‑ i
Beliggenhet
måneden og kommer som et tillegg til ordinære
Velkommen til et levende og fremtidsrettet nabolag i felleskostnader.
hjertet av Bydel Bjerke. Her bor du moderne og sentralt,
med en praktisk hverdag der alt du trenger finnes i Ellers er det gateparkering

---

[d023_d023 | Side [1]]
allspill, fotball, sand... 0.7 km
SATS Linderud 17 min Enslig m. barn
Feel24 Økern Brobekk 15 min
Enslig u. barn
Boligmasse
Flerfamilier
3% rekkehus
94% blokk 0% 47%
3% annet
Vollebekk
Oslo og omegn
Norge
Sivilstand
Norge
Gift 33% 33%
Ikke gift 57% 54%
Separert 8% 9%
Enke/Enkemann 2% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes

---

[d023_d023 | Side [1]]
 For et enda større startpunkt og helt frem til boligen. Det vil være skiltet ved
utvalg av butikker, serveringssteder og servicetilbud fellesvisninger for enkel orientering.
ligger Linderud Senter en kort spasertur unna. Her finner
du alt fra helsetjenester til hyggelige kafeer og
Tomt
restauranter.
Tomtetype: Eiet
Området har svært gode kollektivforbindelser. Buss
stopper rett utenfor døren, og Vollebekk T‑banestasjon Sameiets tomt er pent opparbeidet med grøntareal,
ligger bare noen minutters gange

---

[d023_d023 | Side [1]]
lte feil kan dette koste
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
overtagelse – uten at du

---

[d023_d023 | Side [1]]
r klare til å hjelpe deg i fem år etter
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
Forsikringen er meglet

---

[d023_d023 | Side [1]]
profesjonell juridisk hjelp dersom det
sameiebrøk. Ved manglende betaling av fellesutgifter har oppdages uventede feil eller mangler ved boligen de
sameiet legal panterett i den enkelte eierseksjon, neste fem årene. Les mer om Boligkjøperforsikring i
begrenset til inntil 2 ganger folketrygdens grunnbeløp. vedlagte materiell eller på https:/ /
www.soderbergpartners.no/ eiendom/ boligkjoper/
Kjøper og selger er forpliktet til å signere den standard
kjøpekontrakten utarbeidet av Emera som en del

---

[d023_d023 | Side [1]]
ikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side

---

[d023_d023 | Side [1]]
visor blir valgt.
10-3 Forsikring
(1) Styret er ansvarlig for at eiendommen til enhver tid er forsvarlig forsikret i et godkjent
forsikringsselskap. Forsikringen skal også omfatte huseieransvarsforsikring,
styreansvarsforsikring og rettshjelpsforsikring. Innboforsikring er den enkelte seksjonseier
selv ansvarlig for å tegne
(2) Selv om sameiets forsikring brukes, skal styret pålegge seksjonseier å betale
egenandelen dersom skadeårsaken ligger innenfor seksjonseiers ansvar.
10-3 Administrasjon av

---

[d023_d023 | Side [1]]
 setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen.

---

[d023_d023 | Side [1]]
ksjonsloven §
23. Seksjoner som eies av nærstående eller gjennom et Boligkjøperforsikring: Kjøper har anledning til å tegne
firma regnes også med. boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg &
I henhold til eierseksjonsloven § 31 er sameierne Partners. Boligkjøperforsikring er en rettshjelpsforsikring
ansvarlige overfor sameiets kreditorer i forhold til sin som gir trygghet og profesjonell juridisk hjelp dersom det
sameiebrøk. Ved manglende

---

[d023_d023 | Side [1]]
8

## Side 109

109

## Side 110

110

## Side 111

111

## Side 112

112

## Side 113

113

## Side 114

114

## Side 115

115

## Side 116

116

## Side 117

117

## Side 118

118

## Side 119

119

## Side 120

120

## Side 121

121

## Side 122

122

## Side 123

123

## Side 124

124

## Side 125

125

## Side 126

126

## Side 127

127

## Side 128

128

## Side 129

129

## Side 130

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
−

---

[d023_d023 | Side [1]]
kterrasse gir svært gode solforhold store deler av
dagen
Separat kjøkken og stue
Kan omgjøres til 4‑roms
Felles takterrasse, stue og sykkelparkering‑ og vask
5 års nybygg‑garanti
Mulighet for kjøp av p‑plass
Lave omk.
Kjøkken fra Marbodal
Integrerte hvitevarer fra Siemens
Svanemerket byg
9

## Side 10

Den sørøstvendte balkongen har god
plass til en sittegruppe og utgang fra
stuen.

## Side 11

(Ingen tekst ekstrahert)

## Side 12

Leiligheten har en god planløsning med
en romslig sone for stue og

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand.",
      "evidence": [
        "Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.",
        "mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R2",
      "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuelt forhøyede radonnivåer i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R3",
      "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle fremtidige krav mot selger.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet forsikring."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R4",
      "description": "Legalpant utgjør en skjult heftelse med høy prioritet. Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R5",
      "description": "Tinglyst bestemmelse om nettstasjon fra Elvia AS. Det er tinglyst en bestemmelse om nettstasjon med rettigheter for bygging, drift, vedlikehold og fornyelse til fordel for Elvia AS. Dette kan medføre begrensninger i bruken av eiendommen.",
      "evidence": [
        "09.12.2022 ‑ Dokumentnr: 1402464 ‑ Bestemmelse om nettstasjon",
        "Rettighetshaver: Elvia AS Org.nr: 980 489 698",
        "Bygging, drift, vedlikehold og fornyelse"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Tinglyst bestemmelse om byggeforbud og beplantning. Det er tinglyst en bestemmelse om byggeforbud og beplantning som kan begrense kjøpers mulighet til å gjøre endringer på eiendommen.",
      "evidence": [
        "Bestemmelse om byggeforbud og beplantning",
        "Kan ikke slettes uten samtykke fra Oslo Kommune"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Fellesgjeld og variabel rente. Sameiet har en samlet fellesgjeld på kr 6 000 000 fordelt på 241 seksjoner, noe som gir en andel fellesgjeld på kr 25 000 per boligseksjon. Renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostnadene.",
      "evidence": [
        "Samlet fellesgjeld vil være på kr. 6 000 000, ‑ og vil fordeles likt mellom alle seksjonseierne (totalt 241). Andel fellesgjeld blir kr. 25 000 per boligseksjon.",
        "Det opplyses at renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostadene tilsvarende."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Felleskostnader er basert på forslag til budsjett og kan øke. Felleskostnadene er stipulert til kr 4 539 per måned, men er basert på et foreløpig budsjett og vil avhenge av kostnadsnivå og tjenester levert til sameiet.",
      "evidence": [
        "Felleskostnader kr 4 539,‑ pr. mnd",
        "Budsjett utarbeidet av OBOS Eiendomsforvaltning.",
        "Felleskostnadene vil avhenge av kostnadsnivå og de varer og tjenester som leveres til sameiet."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Kjellerbod kan omdisponeres av sameiet. Boder utenfor boenheten kan omdisponeres av borettslaget/sameiet, noe som kan påvirke boligens BRA og kjøpers tilgang til bod.",
      "evidence": [
        "Kjellerbod (BRA‑e) på ca. 5 m². Boder utenfor boenheten kan omdisponeres av borettslaget/ sameiet og dette kan påvirke boligens BRA.",
        "Kjellerbod (BRA-e) på ca. 5,4 m². Boden er merket med adresse, H0101 og bod nr. 167. Boder utenfor boenheten kan omdisponeres av borettslaget/sameiet og dette kan påvirke boligens BRA."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Byggetegninger er ikke innhentet. Det foreligger ikke byggetegninger for oppdraget, noe som gjør det vanskeligere å verifisere at boligen er bygget i henhold til godkjente planer.",
      "evidence": [
        "Det foreligger ikke tegninger",
        "Byggetegninger er ikke innhentet for dette oppdraget. Egne undersøkelser anbefales."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Risiko for skjeggkre. Selger kan ikke garantere at det ikke finnes skjeggkre i boligen ved overlevering. Skjeggkre kan komme inn via pappemballasje, vesker eller klær.",
      "evidence": [
        "Selger kan ikke garantere at det ikke kan finnes skjeggkre i boligen ved overlevering.",
        "Skjeggkre er et insekt som har fått rask utbredelse etter at dette ble allment kjent i Norge i 2014.",
        "det er ikke påvist noen helseskadelige eller bygningsmessige skader av skjeggkre"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R12",
      "description": "Pågående utbygging kan medføre ulemper for beboerne. Sameiet er forpliktet til å la selger benytte deler av sameiets utvendige fellesarealer midlertidig for adkomst og plassering av utstyr/rigg. Sameierne må påregne rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid.",
      "evidence": [
        "Sameiet er herunder forpliktet til å la Selger vederlagsfritt benytte deler av Sameiets utvendige fellesarealer midlertidig for adkomst, plassering av utstyr/rigg med mer.",
        "Sameierne må påregne at det kan bli rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Formuesverdi er ikke beregnet. Boligen er nybygg og formuesverdien er ikke beregnet, noe som gjør det vanskelig for kjøper å forutse fremtidig skatteplikt knyttet til formuesverdien.",
      "evidence": [
        "Info om formuesverdi: Formuesverdien er ikke beregnet på grunn av at boligen som selges er nybygg.",
        "Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R14",
      "description": "U-verdi for tak og gulv er oppgitt som 0,00 i energiattesten. Dette kan indikere manglende eller feil registrerte data i energiattesten, noe som kan gi et misvisende bilde av boligens energieffektivitet.",
      "evidence": [
        "U-verdi for tak 0,00 W/(m²·K)",
        "U-verdi for gulv 0,00 W/(m²·K)",
        "Areal tak 0 m²",
        "Areal gulv 0 m²"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R15",
      "description": "Kombinert sameie med næringsseksjoner medfører kompleks kostnadsfordeling. Sameiet er et kombinert sameie med bolig- og næringsseksjoner, noe som innebærer en kompleks fordeling av felleskostnader og vedlikeholdsansvar som kan gi uforutsette kostnader for boligkjøper.",
      "evidence": [
        "Sameiet er et kombinert sameie som består av følgende seksjoner i eiendommen gnr. 123, bnr. 1005 i Oslo kommune.",
        "Næringsseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene",
        "Boligseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Parkeringsplass selges separat til høy pris. Parkeringsplass må kjøpes separat for kr 500 000 + omkostninger, med en månedlig felleskostnad på kr 200 i tillegg til ordinære felleskostnader. Dette er en betydelig tilleggskostnad.",
      "evidence": [
        "Mulighet for kjøp av p‑plass til 500 000,‑ + omk.",
        "Felleskostnader for parkeringsplassen er kr. 200,‑ i måneden og kommer som et tillegg til ordinære felleskostnader."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R17",
      "description": "Boligen er ubebodd og det foreligger ikke informasjon om strømforbruk. Kjøper har dermed ikke grunnlag for å vurdere faktiske energikostnader.",
      "evidence": [
        "Boligen er ubebodd og det foreligger derfor ikke informasjon om strømforbruk"
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R18",
      "description": "Nøkkelskap fjernes før overtakelse. To nøkkelskap festet i skyvedørsgarderoben i gangen vil bli tatt ned av selger før kjøper overtar leiligheten, noe som kan etterlate hull og merker.",
      "evidence": [
        "Det er to nøkkelskap som er festet i skyvedørsgarderoben i gangen. Disse vil tar ned før kjøper overtar leiligheten.",
        "Kjøper aksepterer at det kan forekomme hull og merker etter montering av inventar og utstyr som ikke er en del av overdragelsen."
      ],
      "source_documents": [
        "d023_d023"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "Hva er lånebetingelsene for fellesgjelden, herunder løpetid og rentebetingelser?",
    "Er det opplyst om 5-års nybygggaranti og hva denne dekker?",
    "Hva er eiendomsskatten i Oslo kommune for denne eiendommen?",
    "Er det tinglyst ytterligere heftelser eller servitutter på eiendommen utover de nevnte?",
    "Hva er sameiets vedlikeholdsplan og avsetning til vedlikeholdsfond?",
    "Er det opplyst om TV/internett-abonnement og kostnader knyttet til dette?",
    "Hva er de konkrete vilkårene for utbyggers bruk av fellesarealer og varighet av byggeperioden?"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ingen tilstandsrapport (confidence 1.0 → 1.0):** Direkte sitert i dokumentet. Fullt støttet. Beholdes uendret.\n\n**R2 – Ingen radonmåling (confidence 1.0 → 1.0):** Direkte sitert. Fullt støttet. Beholdes uendret.\n\n**R3 – Ingen boligselgerforsikring (confidence 1.0 → 1.0):** Direkte sitert. Fullt støttet. Beholdes uendret.\n\n**R4 – Legalpant (confidence 1.0 → 1.0):** Alle fire evidenspunkter er direkte sitert fra dokumentet. Fullt støttet. Beholdes uendret.\n\n**R5 – Nettstasjon Elvia AS (confidence 0.9 → 0.9):** Dokumentert i grunnboksutskriften. Godt støttet. Confidence beholdes – noe usikkerhet om faktisk praktisk konsekvens for kjøper.\n\n**R6 – Byggeforbud og beplantning (confidence 0.9 → 0.9):** Dokumentert i grunnboksutskriften. Godt støttet. Confidence beholdes.\n\n**R7 – Fellesgjeld og variabel rente (confidence 0.95 → 0.95):** Direkte sitert. Godt støttet. Merk at lånebetingelser (løpetid, rentetype) ikke er fullstendig opplyst – dette er en potensiell mangel som bør undersøkes nærmere.\n\n**R8 – Felleskostnader basert på foreløpig budsjett (confidence 0.85 → 0.90):** Evidensen er klar – budsjett er foreløpig og kostnadene kan endre seg. Confidence justeres litt opp da dette er eksplisitt nevnt i dokumentet.\n\n**R9 – Kjellerbod kan omdisponeres (confidence 0.9 → 0.9):** Støttet av to separate steder i dokumentet (salgsoppgave og arealrapport). Godt støttet.\n\n**R10 – Byggetegninger ikke innhentet (confidence 0.9 → 0.9):** Direkte sitert. Godt støttet.\n\n**R11 – Skjeggkre (confidence 0.75 → 0.65):** Støttet av evidens, men dokumentet presiserer at det ikke er påvist helseskadelige eller bygningsmessige skader av skjeggkre. Risikoen er reell men lav i praksis. Confidence justeres ned.\n\n**R12 – Pågående utbygging (confidence 0.85 → 0.90):** Direkte sitert fra vedtektene. Godt støttet. Confidence justeres litt opp.\n\n**R13 – Formuesverdi ikke beregnet (confidence 0.75 → 0.70):** Støttet av evidens, men dette er en normal situasjon for nybygg og ikke nødvendigvis en risiko i tradisjonell forstand. Confidence justeres litt ned.\n\n**R14 – U-verdi 0,00 for tak og gulv (confidence 0.80 → 0.75):** Støttet av energiattestdata. Kan skyldes at boligen er en leilighet i et større bygg der tak og gulv er mot andre oppvarmede soner (ikke mot det fri), noe som er teknisk korrekt. Risikoen er reell men kan ha en teknisk forklaring. Confidence justeres litt ned.\n\n**R15 – Kombinert sameie (confidence 0.80 → 0.85):** Godt støttet av vedtektene som beskriver kompleks kostnadsfordeling mellom bolig- og næringsseksjoner. Confidence justeres litt opp.\n\n**R16 – Parkeringsplass separat (confidence 0.80 → 0.80):** Direkte sitert. Godt støttet. Beholdes uendret.\n\n**R17 – Ubebodd, ingen strøminfo (confidence 0.70 → 0.70):** Støttet av evidens. Beholdes uendret.\n\n**R18 – Nøkkelskap fjernes (confidence 0.70 → 0.70):** Støttet av evidens. Beholdes uendret.\n\n**Manglende risikoer som burde vært identifisert:**\n1. **5-års nybygggaranti** – Salgsoppgaven nevner \"5 års nybygg-garanti\", men det er ikke redegjort for hva garantien dekker, hvem som er garantist, og hva som skjer dersom utbygger går konkurs. Dette er en viktig risiko for kjøper.\n2. **TV/internett – kjøper må tegne eget abonnement** – Dokumentet nevner at kjøper må tegne eget abonnement, noe som er en løpende kostnad som ikke er inkludert i felleskostnadene.\n3. **Eiendomsskatt** – Dokumentet nevner at det er eiendomsskatt i Oslo kommune, men beløpet er ikke fastsatt for nybygget. Dette er en uforutsigbar fremtidig kostnad.\n4. **Seksjonseiers solidaransvar** – Seksjonseiere er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som innebærer en potensiell risiko ved mislighold fra andre seksjonseiere.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
}

## Raw Response
```json
{
  "id": "msg_018Lcp9G3PJd17yz1Zvi59yZ",
  "container": null,
  "content": [
    {
      "id": "toolu_017tyA6UGzhye2S9DNE4GRdk",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ingen tilstandsrapport er innhentet. Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven. Dette medfører at det er gjort færre undersøkelser av bygningssakkyndig, og kjøper får mindre informasjon om eiendommens tilstand.",
            "evidence": [
              "Selger har ikke skaffet en tilstandsrapport som oppfyller kravene i forskriften til avhendingsloven.",
              "mangelen på en slik rapport medfører at det vanligvis er gjort færre undersøkelser av bygningssakkyndig, og at kjøper får mindre informasjon om eiendommens tilstand enn hva som ville vært tilfelle"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R2",
            "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling, noe som innebærer at kjøper ikke har informasjon om eventuelt forhøyede radonnivåer i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R3",
            "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle fremtidige krav mot selger.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet forsikring."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R4",
            "description": "Legalpant utgjør en skjult heftelse med høy prioritet. Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og øvrige seksjonseiere har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R5",
            "description": "Tinglyst bestemmelse om nettstasjon fra Elvia AS. Det er tinglyst en bestemmelse om nettstasjon med rettigheter for bygging, drift, vedlikehold og fornyelse til fordel for Elvia AS. Dette kan medføre begrensninger i bruken av eiendommen.",
            "evidence": [
              "09.12.2022 ‑ Dokumentnr: 1402464 ‑ Bestemmelse om nettstasjon",
              "Rettighetshaver: Elvia AS Org.nr: 980 489 698",
              "Bygging, drift, vedlikehold og fornyelse"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Tinglyst bestemmelse om byggeforbud og beplantning. Det er tinglyst en bestemmelse om byggeforbud og beplantning som kan begrense kjøpers mulighet til å gjøre endringer på eiendommen.",
            "evidence": [
              "Bestemmelse om byggeforbud og beplantning",
              "Kan ikke slettes uten samtykke fra Oslo Kommune"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Fellesgjeld og variabel rente. Sameiet har en samlet fellesgjeld på kr 6 000 000 fordelt på 241 seksjoner, noe som gir en andel fellesgjeld på kr 25 000 per boligseksjon. Renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostnadene.",
            "evidence": [
              "Samlet fellesgjeld vil være på kr. 6 000 000, ‑ og vil fordeles likt mellom alle seksjonseierne (totalt 241). Andel fellesgjeld blir kr. 25 000 per boligseksjon.",
              "Det opplyses at renten kan endre seg i takt med den generelle renteutviklingen og dermed påvirke de månedlige kostadene tilsvarende."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Felleskostnader er basert på forslag til budsjett og kan øke. Felleskostnadene er stipulert til kr 4 539 per måned, men er basert på et foreløpig budsjett og vil avhenge av kostnadsnivå og tjenester levert til sameiet.",
            "evidence": [
              "Felleskostnader kr 4 539,‑ pr. mnd",
              "Budsjett utarbeidet av OBOS Eiendomsforvaltning.",
              "Felleskostnadene vil avhenge av kostnadsnivå og de varer og tjenester som leveres til sameiet."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Kjellerbod kan omdisponeres av sameiet. Boder utenfor boenheten kan omdisponeres av borettslaget/sameiet, noe som kan påvirke boligens BRA og kjøpers tilgang til bod.",
            "evidence": [
              "Kjellerbod (BRA‑e) på ca. 5 m². Boder utenfor boenheten kan omdisponeres av borettslaget/ sameiet og dette kan påvirke boligens BRA.",
              "Kjellerbod (BRA-e) på ca. 5,4 m². Boden er merket med adresse, H0101 og bod nr. 167. Boder utenfor boenheten kan omdisponeres av borettslaget/sameiet og dette kan påvirke boligens BRA."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Byggetegninger er ikke innhentet. Det foreligger ikke byggetegninger for oppdraget, noe som gjør det vanskeligere å verifisere at boligen er bygget i henhold til godkjente planer.",
            "evidence": [
              "Det foreligger ikke tegninger",
              "Byggetegninger er ikke innhentet for dette oppdraget. Egne undersøkelser anbefales."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Risiko for skjeggkre. Selger kan ikke garantere at det ikke finnes skjeggkre i boligen ved overlevering. Skjeggkre kan komme inn via pappemballasje, vesker eller klær.",
            "evidence": [
              "Selger kan ikke garantere at det ikke kan finnes skjeggkre i boligen ved overlevering.",
              "Skjeggkre er et insekt som har fått rask utbredelse etter at dette ble allment kjent i Norge i 2014.",
              "det er ikke påvist noen helseskadelige eller bygningsmessige skader av skjeggkre"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R12",
            "description": "Pågående utbygging kan medføre ulemper for beboerne. Sameiet er forpliktet til å la selger benytte deler av sameiets utvendige fellesarealer midlertidig for adkomst og plassering av utstyr/rigg. Sameierne må påregne rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid.",
            "evidence": [
              "Sameiet er herunder forpliktet til å la Selger vederlagsfritt benytte deler av Sameiets utvendige fellesarealer midlertidig for adkomst, plassering av utstyr/rigg med mer.",
              "Sameierne må påregne at det kan bli rokeringer av tildelte parkeringsplasser på grunn av bygningsmessig arbeid"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Formuesverdi er ikke beregnet. Boligen er nybygg og formuesverdien er ikke beregnet, noe som gjør det vanskelig for kjøper å forutse fremtidig skatteplikt knyttet til formuesverdien.",
            "evidence": [
              "Info om formuesverdi: Formuesverdien er ikke beregnet på grunn av at boligen som selges er nybygg.",
              "Skatteetaten vil beregne en boligverdi (beregnet markedsverdi for bolig) basert på SSBs statistiske opplysninger om omsatte boliger."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R14",
            "description": "U-verdi for tak og gulv er oppgitt som 0,00 i energiattesten. Dette kan indikere manglende eller feil registrerte data i energiattesten, noe som kan gi et misvisende bilde av boligens energieffektivitet.",
            "evidence": [
              "U-verdi for tak 0,00 W/(m²·K)",
              "U-verdi for gulv 0,00 W/(m²·K)",
              "Areal tak 0 m²",
              "Areal gulv 0 m²"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R15",
            "description": "Kombinert sameie med næringsseksjoner medfører kompleks kostnadsfordeling. Sameiet er et kombinert sameie med bolig- og næringsseksjoner, noe som innebærer en kompleks fordeling av felleskostnader og vedlikeholdsansvar som kan gi uforutsette kostnader for boligkjøper.",
            "evidence": [
              "Sameiet er et kombinert sameie som består av følgende seksjoner i eiendommen gnr. 123, bnr. 1005 i Oslo kommune.",
              "Næringsseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene",
              "Boligseksjonene skal selv dekke følgende kostnader som særkostnad eller som del av sin ideelle andel av felleskostnadene"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Parkeringsplass selges separat til høy pris. Parkeringsplass må kjøpes separat for kr 500 000 + omkostninger, med en månedlig felleskostnad på kr 200 i tillegg til ordinære felleskostnader. Dette er en betydelig tilleggskostnad.",
            "evidence": [
              "Mulighet for kjøp av p‑plass til 500 000,‑ + omk.",
              "Felleskostnader for parkeringsplassen er kr. 200,‑ i måneden og kommer som et tillegg til ordinære felleskostnader."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R17",
            "description": "Boligen er ubebodd og det foreligger ikke informasjon om strømforbruk. Kjøper har dermed ikke grunnlag for å vurdere faktiske energikostnader.",
            "evidence": [
              "Boligen er ubebodd og det foreligger derfor ikke informasjon om strømforbruk"
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R18",
            "description": "Nøkkelskap fjernes før overtakelse. To nøkkelskap festet i skyvedørsgarderoben i gangen vil bli tatt ned av selger før kjøper overtar leiligheten, noe som kan etterlate hull og merker.",
            "evidence": [
              "Det er to nøkkelskap som er festet i skyvedørsgarderoben i gangen. Disse vil tar ned før kjøper overtar leiligheten.",
              "Kjøper aksepterer at det kan forekomme hull og merker etter montering av inventar og utstyr som ikke er en del av overdragelsen."
            ],
            "source_documents": [
              "d023_d023"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "Hva er lånebetingelsene for fellesgjelden, herunder løpetid og rentebetingelser?",
          "Er det opplyst om 5-års nybygggaranti og hva denne dekker?",
          "Hva er eiendomsskatten i Oslo kommune for denne eiendommen?",
          "Er det tinglyst ytterligere heftelser eller servitutter på eiendommen utover de nevnte?",
          "Hva er sameiets vedlikeholdsplan og avsetning til vedlikeholdsfond?",
          "Er det opplyst om TV/internett-abonnement og kostnader knyttet til dette?",
          "Hva er de konkrete vilkårene for utbyggers bruk av fellesarealer og varighet av byggeperioden?"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ingen tilstandsrapport (confidence 1.0 → 1.0):** Direkte sitert i dokumentet. Fullt støttet. Beholdes uendret.\n\n**R2 – Ingen radonmåling (confidence 1.0 → 1.0):** Direkte sitert. Fullt støttet. Beholdes uendret.\n\n**R3 – Ingen boligselgerforsikring (confidence 1.0 → 1.0):** Direkte sitert. Fullt støttet. Beholdes uendret.\n\n**R4 – Legalpant (confidence 1.0 → 1.0):** Alle fire evidenspunkter er direkte sitert fra dokumentet. Fullt støttet. Beholdes uendret.\n\n**R5 – Nettstasjon Elvia AS (confidence 0.9 → 0.9):** Dokumentert i grunnboksutskriften. Godt støttet. Confidence beholdes – noe usikkerhet om faktisk praktisk konsekvens for kjøper.\n\n**R6 – Byggeforbud og beplantning (confidence 0.9 → 0.9):** Dokumentert i grunnboksutskriften. Godt støttet. Confidence beholdes.\n\n**R7 – Fellesgjeld og variabel rente (confidence 0.95 → 0.95):** Direkte sitert. Godt støttet. Merk at lånebetingelser (løpetid, rentetype) ikke er fullstendig opplyst – dette er en potensiell mangel som bør undersøkes nærmere.\n\n**R8 – Felleskostnader basert på foreløpig budsjett (confidence 0.85 → 0.90):** Evidensen er klar – budsjett er foreløpig og kostnadene kan endre seg. Confidence justeres litt opp da dette er eksplisitt nevnt i dokumentet.\n\n**R9 – Kjellerbod kan omdisponeres (confidence 0.9 → 0.9):** Støttet av to separate steder i dokumentet (salgsoppgave og arealrapport). Godt støttet.\n\n**R10 – Byggetegninger ikke innhentet (confidence 0.9 → 0.9):** Direkte sitert. Godt støttet.\n\n**R11 – Skjeggkre (confidence 0.75 → 0.65):** Støttet av evidens, men dokumentet presiserer at det ikke er påvist helseskadelige eller bygningsmessige skader av skjeggkre. Risikoen er reell men lav i praksis. Confidence justeres ned.\n\n**R12 – Pågående utbygging (confidence 0.85 → 0.90):** Direkte sitert fra vedtektene. Godt støttet. Confidence justeres litt opp.\n\n**R13 – Formuesverdi ikke beregnet (confidence 0.75 → 0.70):** Støttet av evidens, men dette er en normal situasjon for nybygg og ikke nødvendigvis en risiko i tradisjonell forstand. Confidence justeres litt ned.\n\n**R14 – U-verdi 0,00 for tak og gulv (confidence 0.80 → 0.75):** Støttet av energiattestdata. Kan skyldes at boligen er en leilighet i et større bygg der tak og gulv er mot andre oppvarmede soner (ikke mot det fri), noe som er teknisk korrekt. Risikoen er reell men kan ha en teknisk forklaring. Confidence justeres litt ned.\n\n**R15 – Kombinert sameie (confidence 0.80 → 0.85):** Godt støttet av vedtektene som beskriver kompleks kostnadsfordeling mellom bolig- og næringsseksjoner. Confidence justeres litt opp.\n\n**R16 – Parkeringsplass separat (confidence 0.80 → 0.80):** Direkte sitert. Godt støttet. Beholdes uendret.\n\n**R17 – Ubebodd, ingen strøminfo (confidence 0.70 → 0.70):** Støttet av evidens. Beholdes uendret.\n\n**R18 – Nøkkelskap fjernes (confidence 0.70 → 0.70):** Støttet av evidens. Beholdes uendret.\n\n**Manglende risikoer som burde vært identifisert:**\n1. **5-års nybygggaranti** – Salgsoppgaven nevner \"5 års nybygg-garanti\", men det er ikke redegjort for hva garantien dekker, hvem som er garantist, og hva som skjer dersom utbygger går konkurs. Dette er en viktig risiko for kjøper.\n2. **TV/internett – kjøper må tegne eget abonnement** – Dokumentet nevner at kjøper må tegne eget abonnement, noe som er en løpende kostnad som ikke er inkludert i felleskostnadene.\n3. **Eiendomsskatt** – Dokumentet nevner at det er eiendomsskatt i Oslo kommune, men beløpet er ikke fastsatt for nybygget. Dette er en uforutsigbar fremtidig kostnad.\n4. **Seksjonseiers solidaransvar** – Seksjonseiere er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, noe som innebærer en potensiell risiko ved mislighold fra andre seksjonseiere.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
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
    "input_tokens": 20221,
    "output_tokens": 5729,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
