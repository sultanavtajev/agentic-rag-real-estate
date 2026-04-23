# Trace: agentic_reflecting_iter1
- **Run ID:** e53ef766-f790-4e4e-9f02-64c337f23d44
- **Tidspunkt:** 2026-03-25T03:04:06.211353+00:00
- **Varighet:** 106.22s
- **Input tokens:** 19646
- **Output tokens:** 5115

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
Risiko 1: El-anlegg uten dokumentasjon og ukjent historikk – behov for utvidet el-kontroll
  Confidence: 0.97
  Evidens: Boligen har et elanlegg uten dokumentasjon samt ukjent historikk med hensyn til evt tidligere endringer. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.

Risiko 2: Baderom (våtrom) har TG2 grunnet alder på membran/tettesjikt – usikker restlevetid og risiko for fuktskader
  Confidence: 0.97
  Evidens: Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.; Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.; Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja

Risiko 3: Fasaden stemmer ikke overens med godkjente byggetegninger – ulovlig/ikke-godkjent tilstand, kjøper overtar risikoen for fremtidig godkjenning og kostnader
  Confidence: 0.95
  Evidens: Videre gjøres det oppmerksom på at dagens fasade ikke stemmer overens med de godkjente tegningene som er sendt inn med søknad om rammetillatelse/igangsettingstillatelse.; Endringer som endrer bygningens karakter, eller er i strid med reguleringsplaner, er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om fasadeendring blir godkjent, samt alle kostnader forbundet med prosessen.

Risiko 4: Dreneringsproblemer på fellesarealet – overvann er et kjent problem som ikke er fullstendig utbedret, og fremtidige kostnader kan påløpe
  Confidence: 0.93
  Evidens: Videre opplyser styreleder om at det i fjor ble satt ned 2 stk drenerings-kummer på området pga mye overvann. Det er bedre nå, men skikkelig bra blir det kun med flere dreneringspunkter og asfalt. Det koster, og vil ikke være mulig med det første.

Risiko 5: Økte felleskostnader som følge av innleid regnskapsfirma – sameiet har leid inn eksternt firma for fakturering, noe som har økt felleskostnadene
  Confidence: 0.88
  Evidens: Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet. Starten av i år har vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte.

Risiko 6: Privat adkomstvei og private stikkledninger – vedlikeholdsansvar for vei og VA-ledninger påhviler sameiet, ikke kommunen
  Confidence: 0.92
  Evidens: Adkomst til eiendommen skjer via privat vei.; Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 7: Tinglyst rett for naboeiendommer til å legge/ha liggende vann- og spillvannsledning over eiendommen – varig heftelse
  Confidence: 0.9
  Evidens: Eier av gnr. 290 bnr. 30 gir herved eiere av gnr. 290 bnr. 144 og bnr. 150 rett til å legge / ha liggende vannledning og spillvannsledning over vår eiendom som vist merket gult på kart i målestokk 1:500, datert 27.03.2019.; Denne erklæringen kan tinglyses på gnr. 290 bnr. 30, bnr. 144 og bnr. 150, og kan ikke avlyses uten samtykke av Bystyret Bergen kommune ved Vann- og avløpsetaten.

Risiko 8: Legalpant – kommunen og sameiet har lovbestemt pant i seksjonen med prioritet foran tinglyste banklån
  Confidence: 0.92
  Evidens: De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 9: Arbeid på veranda/terrasse utført av ufaglært/egeninnsats – ingen faglig dokumentasjon på utførelsen
  Confidence: 0.82
  Evidens: 16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Et par år tilbake hadde jeg pusset/beise og malt verandaen.

Risiko 10: Tomten er fellesareal – den enkelte seksjonseier har ikke eksklusiv bruksrett til tomtearealet
  Confidence: 0.85
  Evidens: Tomten er fellesareal, hvilket betyr at sameiet eier og forvalter de aktuelle områdene i fellesskap. Dette gir ikke den enkelte seksjon rett til eksklusiv bruk eller disponering av arealene, med mindre annet er spesifisert i en avtale eller...

Risiko 11: Pågående kommuneplanrevisjon (KPA 2027) kan medføre endringer i arealbruk og reguleringsbestemmelser for eiendommen
  Confidence: 0.75
  Evidens: PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak i første kvartal 2027. Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser.

Risiko 12: Godkjente tiltak i nærheten – ny garasje og bruksendring på naboeiendommen (290/52) kan påvirke nærområdet
  Confidence: 0.7
  Evidens: Eiendom: 290/52. Neset 77, nytt bygg - garasje. Igangsettingstillatelse datert 16.12.2025.; Eiendom: 290/52. Neset 77, bruksendring fra tilleggs- til hoveddel. Igangsettingstillatelse datert 29.05.2024.

Risiko 13: Ventilasjon hadde feil og ble utbedret rett før salg – usikkerhet om varig funksjon
  Confidence: 0.8
  Evidens: Er ventilasjonen funksjonstestet? Nei; Anlegget er etter befaringen utbedret grunnet feil.; Ventilasjon Flexit er blitt fikset februar 2026

Risiko 14: Avvik mellom høydeforskjell på tettesjikt/fall til sluk på badet – potensiell risiko for at vann ikke ledes korrekt til sluk
  Confidence: 0.83
  Evidens: Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja

Risiko 15: Manglende fast installert oppvarmingskilde – dersom dette ikke finnes på visning, følger det ikke med i handelen
  Confidence: 0.78
  Evidens: å visningen mangler fast installert oppvarmingskilde, vil ikke dette bli inkludert i handelen.

Risiko 16: Sameiet mangler styreleder – Hege skal flytte og ingen har overtatt styrevervet, noe som skaper usikkerhet om sameiets forvaltning
  Confidence: 0.8
  Evidens: Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet.

Dokumentkontekst:
[d124_d124 | Side [1]]
å visningen mangler fast installert Eier av gnr. 290 bnr. 30 gir herved eiere av gnr. 290 bnr.
oppvarmingskilde, vil ikke dette bli inkludert i handelen. 144 og bnr. 150 rett til å legge / ha liggende vannledning
og spillvannsledning over vår eiendom som vist merket
gult på kart i målestokk 1:500, datert 27.03.2019, merket
Regulerings‑ og arealplaner Bergen kommune, Vann‑ og avløpsetaten (se kartutklipp),
Eiendommen er iht. reguleringsplan Arna. Gnr 290 bnr 30 samt rett til fremtidig vedlikehold av

---

[d124_d124 | Side [1]]
g eventuell
hoveddel. Igangsettingstillatelse datert 29.05.2024. eiendomsskatt. De øvrige seksjonseierne i sameiet har
Saksnr: 202413383 legalpant på inntil 2G som sikkerhet for krav knyttet til
sameieforholdet, som felleskostnader. Legalpant er pant
For mer informasjon om reguleringsforhold, kontakt som ikke vises i grunnboksutskriften, og har prioritet
megler eller søk på saksnummer, adresse eller gårds‑ og foran tinglyste lån, for eksempel banklån på seksjonen.
bruksnummer på Plan‑ og bygningsetatens

---

[d124_d124 | Side [1]]
 stedet dersom ‑ Kjenner du til om det har vært utført arbeid på terrasse/
tilgjengelig, men ikke kontrollert med hensyn til garasje/ tak/ fasade?
eierforhold, bruksrett etc. Et par år tilbake hadde jeg pusset/ beise og malt
verandaen. Egeninnsats.
Standard
‑ Kjenner du til vedtak/ forslag til vedtak om forhold vedr.
Innbo og løsøre: Følgende løsøre og tilbehør følger med: eiendommen som kan medføre økte felleskostnader/ økt
‑ Integrerte hvitevarer fellesgjeld?
Grunnet Hege skal flytte fra boligen sin, å

---

[d124_d124 | Side [1]]
el banklån på seksjonen.
bruksnummer på Plan‑ og bygningsetatens hjemmeside. Legalpant til kommunen har høyere prioritet enn
legalpant til sameiet.
34

## Side 35

OM EIENDOMMEN
Kontrakts‑
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
grunnlag
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet. Overtakelse
Adkomst til eiendommen skjer via privat vei. Tidspunkt for overtakelse avtales mellom kjøper

---

[d124_d124 | Side [1]]
9 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: OT 2
82006230
:ecnerefer
tnemucoD
42

## Side 43

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det

---

[d124_d124 | Side [1]]
dommen, er en del av avtalen mellom kjøper og selger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil

---

[d124_d124 | Side [1]]
.
fasadeendring blir godkjent, samt alle kostnader
forbundet med prosessen. Det vises til byggmeldte
tegninger som er vedlagt i salgsoppgaven.
31

## Side 32

OM EIENDOMMEN
Andre arealer: Kjøper aksepterer at det kan forekomme hull og merker
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. etter montering av inventar og utstyr som ikke er en del
ALH ‑ Areal med lav himlingshøyde måles på samme av overdragelsen.
måte som BRA, men man ser bort fra krav til
himlingshøyde. Arealet inngår ikke i BRA, men

---

[d124_d124 | Side [1]]
kstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr.

---

[d124_d124 | Side [1]]
 Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Et par år tilbake hadde jeg pusset/beise og malt verandaen.
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre

---

[d124_d124 | Side [1]]
 sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: OT 3
82006230
:ecnerefer
tnemucoD
43

## Side 44

Tilleggskommentar
3 dører (bad, hovedsoverom og gang) og 4 vinduskarmer (stue/kjøkken og begge soverom) vil bli byttet før ny eier overtar.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at

---

[d124_d124 | Side [1]]
riell eller på https:/ /
I henhold til eierseksjonsloven § 31 er sameierne www.soderbergpartners.no/ eiendom/ boligkjoper/
ansvarlige overfor sameiets kreditorer i forhold til sin
sameiebrøk. Ved manglende betaling av fellesutgifter har
sameiet legal panterett i den enkelte eierseksjon, Lovanvendelse
begrenset til inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
Kjøper og selger er forpliktet til å signere den standard til

---

[d124_d124 | Side [1]]
AMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi

---

[d124_d124 | Side [1]]
kre Opprettet seksjoner:
gode boliger og nabolag. Snr: 2
Formål: Bolig
Godkjente tiltak i nærheten av eiendommen: Sameiebrøk: 1/ 12
‑ Eiendom: 290/ 52. Neset 77, nytt bygg ‑ garasje. Seksjonering kan fås ved henvendelse til megler.
Igangsettingstillatelse datert 16.12.2025. Saksnr:
202518125 Legalpant: Kommunen har legalpant som sikkerhet for
‑ Eiendom: 290/ 52. Neset 77, bruksendring fra tilleggs‑ til betaling av kommunale avgifter og eventuell
hoveddel. Igangsettingstillatelse datert 29.05.2024.

---

[d124_d124 | Side [1]]
tekst ekstrahert)

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

NESET 69A
OM EIENDOMMEN

## Side 29

OM EIENDOMMEN
OM EIENDOMMEN
videre om at det ikke er planlagt noe større arbeid på
Økonomi
fellesarealer som medfører økning i fellesutgifter.
Prisantydning Videre opplyser styreleder om at det i fjor

---

[d124_d124 | Side [1]]
ifter.
Prisantydning Videre opplyser styreleder om at det i fjor ble satt ned 2
Kr 2 990 000 stk drenerings‑kummer på området pga mye overvann.
Det er bedre nå, men skikkelig bra blir det kun med flere
dreneringspunkter og asfalt. Det koster, og vil ikke være
Omkostning kjøper mulig med det første.
2 990 000,00 (Prisantydning)
Omkostninger Eiendomsskatt
Kr 3 502,‑ (2026)
13 500 (Boligkjøperforsikring* (valgfritt))
74 750 (Dokumentavgift) Informasjon om eiendomsskatt er innhentet fra Bergen
545

---

[d124_d124 | Side [1]]
orbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av

---

[d124_d124 | Side [1]]
m endrer bygningens BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
karakter, eller er i strid med reguleringsplaner, er BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
søknadspliktig. Kjøper påtar seg risikoen for fremtidig boenheten og som tilhører denne, for eksempel eksterne
bruk og eventuelle pålegg fra det offentlige. Dette boder.
inkluderer også risikoen for om søknad om BRA‑b ‑ Innglasset balkong, altan, terrasser.
fasadeendring blir godkjent, samt alle kostnader
forbundet med

---

[d124_d124 | Side [1]]
atmeter, kan
reklamasjon eller prisavslag. dette utløse rett til kompensasjon etter § 3‑3 i
avhendingsloven.
36

## Side 37

OM EIENDOMMEN
Ved beregning av krav om prisavslag eller erstatning må eventuelle forbehold som for eksempel usikker
kjøper selv dekke kostnader med inntil kr 10 000 (som en finansiering, salg av nåværende bolig ol. Normalt vil ikke
egenandel). et bud med forbehold bli akseptert før forbeholdet er
avklart. Konferer gjerne med megler før bud avgis.
Ikke‑forbruker – definisjon og

---

[d124_d124 | Side [1]]
tevarer fellesgjeld?
Grunnet Hege skal flytte fra boligen sin, å noen må
For øvrig gjelder NEF sin standardliste "Oversikt over overtar plassen hennes som styrer i sameiet. Starten av i
løsøre og tilbehør" med mindre annet fremkommer av år har vi leid inn firma som tar ansvar for regningen/
salgsoppgaven. Listen er vedlagt. faktura for felleskostnaden, det er en grunn til at det økte.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.

---

[d124_d124 | Side [1]]
plan Arna. Gnr 290 bnr 30 samt rett til fremtidig vedlikehold av disse.
mfl., Neshaugane, datert 30.01.2006 regulert til Eierne av gnr. 290 bnr. 144 og bnr. 150 erklærer seg
konsentrert småhusbebyggelse. herved solidarisk ansvarlig for drift og vedlikehold av den
delen av fellesledningen for vann og spillvann som
Planer i nærheten av eiendommen: eiendommen (bolig) er bruker av.
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Denne erklæringen kan tinglyses på gnr. 290 bnr. 30, bnr.
Bystyret legger

---

[d124_d124 | Side [1]]
mel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak

---

[d124_d124 | Side [1]]
, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av

---

[d124_d124 | Side [1]]
syn til evt tidligere endringer. Det bør gjennomføres en
utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.
Neset 69 A, 5267 Espeland 4 av 15
48

## Side 49

4. Informasjon om oppdraget
Befaringsdato Rapportdato
15.2.2026 17.2.2026
Hjemmelshavere
Navn: Onprida Thongnak Tilstede ved inspeksjon: Ja
Er selgers egenerklæring

---

[d124_d124 | Side [1]]
 13 av 15
57

## Side 58

Oppsummering av membran, tettesjikt og sluk TG-2
Det gjøres spesielt oppmerksom på at tekking (membran og mansjetter) ikke er kontrollerbare fordi
dette bare kan gjøres ved å demontere fliser. Denne type destruktive undersøkelser blir aldri
foretatt ved en tilstandskontroll for denne type rapport.
Ikke funnet nevneverdige avvik basert på visuell kontroll i sluk.
Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker.
TG 2 pga alder.
Anbefalte tiltak

---

[d124_d124 | Side [1]]
d av sitt hus.
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert Styreleder opplyser om at beboere kjøper maling og
med TG2 og TG3 bør vurderes nøye, da de indikerer maler selv. Styret har hovedansvaret for at vedlikehold
avvik fra normal slitasje og/ eller høy alder, noe som kan som MÅ gjøres blir gjort. For øyeblikket vet ikke styret om
innebære behov for utbedringer. Bygningsdeler som er noe av prekær art, selv om det er en del

---

[d124_d124 | Side [1]]
ns tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen

---

[d124_d124 | Side [1]]
estlevetiden på rommet usikker.
TG 2 pga alder.
Anbefalte tiltak membran, tettesjikt og sluk
Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann.
Rommet fungerer ellers med dette avviket (alder)
Sanitærutstyr
Beskrivelse
Inneholder:
- Vegghengt toalett
- Benkeskap med servant
- Dusjdører i glass
- Opplegg for vaskemaskin
Er det skader på utstyr og innredning? Nei
Er det innebygd sisterne til klosett? Ja
Er det manglende drenering av lekkasjevann fra innebygd

---

[d124_d124 | Side [1]]
ge forhold.
Neset 69 A, 5267 Espeland 3 av 15
47

## Side 48

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
Boligen har et elanlegg uten dokumentasjon samt ukjent historikk med hensyn til evt tidligere endringer. Det bør gjennomføres en
utvidet

---

[d124_d124 | Side [1]]
og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom

---

[d124_d124 | Side [1]]
entakst.no Neset 69 A
GNR: 290 BNR: 150 SNR: 2 Bygningssakkyndig fagskoleingeniør
40099909 5267 Espeland
Frøyen Takst AS
45

## Side 46

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan

---

[d124_d124 | Side [1]]
partier (rekkverk).
Alminnelig vedlikeholdsbehov.
6.2 Vinduer og dører
Beskrivelse
Vinduer/ytterdører med 2-lags isolerglass i trekarmer.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
Det gjøres

---

[d124_d124 | Side [1]]
## Side 52

6. Hovedrapport
6.1 Balkong, terrasse, platting
Type Platting
Terrasseplatting på 34,7 m² i trekonstruksjoner med dekke av terrassebord i trevirke.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Oppsummering av balkong, terrasse, platting TG-1
Alminnelig bruksslitasje og noe værslitte partier (rekkverk).
Alminnelig vedlikeholdsbehov.
6.2 Vinduer og

---

[d124_d124 | Side [1]]
IU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Neset 69 A, 5267 Espeland 2 av 15
46

## Side 47

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere

---

[d124_d124 | Side [1]]
sett? Ja
Er det manglende drenering av lekkasjevann fra innebygd sisterne? Nei
Oppsummering av sanitærutstyr TG-1
Ikke funnet nevneverdige avvik basert på visuell kontroll.
Ventilasjon
Type ventilering Mekanisk avtrekk
Er ventilasjonen funksjonstestet? Nei
Oppsummering av ventilasjon TG-1
Anlegget er etter befaringen utbedret grunnet feil.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Ja
Er det registrert fukt eller andre skader ved hulltaking? Nei
Neset 69 A, 5267 Espeland 14 av 15
58

##

---

[d124_d124 | Side [1]]
r. Bygningsdeler som er noe av prekær art, selv om det er en del malingsslitte
merket med TGIU er ikke blitt vurdert av takstmannen. verandaer. Ellers gjelder vedtektene og normal
folkeskikk. Skader på fasade/ vindu/ dører som følge av
Beskrivelsen av boligen nedenfor er hentet direkte fra slitasje eller andre forhold rapporteres til styret og
tilstandsrapporten: reparasjon dekkes av sameiet (ev. må husforsikring inn i
bildet). (MEN dersom noe uforutsett skulle skje som
Byggemåte: husforsikring ikke

---

[d124_d124 | Side [1]]
til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Nei
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
6.5 Avløpsrør
Type avløpsrør

---

[d124_d124 | Side [1]]
m høydeforskjell på tettesjikt/fall til sluk? Ja
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater

---

[d124_d124 | Side [1]]
r renhold og inspeksjonsmulighet av sluk? Nei
Type sluk Plast
Er det påvist avvik ved utførelsen av membran/tettesjikt/klemring rundt sluk? Nei
Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja
Neset 69 A, 5267 Espeland 13 av 15
57

## Side 58

Oppsummering av membran, tettesjikt og

---

[d124_d124 | Side [1]]
som noe uforutsett skulle skje som
Byggemåte: husforsikring ikke dekker, slik at utgiftene til reparasjon
Grunnmur/ ringmur av betong. Yttervegger oppført i blir høyere enn beholdningen i felleskassen ‑ Da må
trekonstruksjoner med trekledning i fasade. Støpt gulv selvfølgelig disse ekstra utgiftene fordeles likt på alle
mot grunn. Vinduer med isolerglass. Valmtak tekket med seksjonseierne som en ekstra innbetaling til sameiet.)
takbelegg
Bygningsdeler vurdert med TG2: Husdyr: Dyr er tillatt.
‑ Bad grunnet

---

[d124_d124 | Side [1]]
um. Dette blir ikke utført i dette oppdraget. Kontrollen i denne rapporten
begrenser seg derfor til å kontrollere om filter fremstår tette og med behov for utskifting.
Ikke funnet nevneverdige avvik basert på visuell kontroll.
Neset 69 A, 5267 Espeland 12 av 15
56

## Side 57

6.10 Våtrom: Bad
Overflate
Beskrivelse av overflate
Fliser på gulv- og veggflater
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja
Er det fare for

---

[d124_d124 | Side [1]]
nger om omsatte boliger. I
Felleskostnader inkluderer: Brøyting, husforsikring og beregningen tas det hensyn til din boligs beliggenhet,
vedlikehold av felles eiendom. areal, byggeår og type bolig. Formuesverdien er en
prosentandel av denne boligverdien. For mer informasjon
Det betales kr 2 115,‑ per kvartal i felleskostnader. om formuesverdi, se Skatteetatens nettsider.
Sameiets regnskapsfører er Godt Regnskap AS. All
økonomisk informasjon går via dem. Styreleder opplyser
29

## Side 30

OM

---

[d124_d124 | Side [1]]
 Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet. Starten av i år har
Beskrivelse
vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som

---

[d124_d124 | Side [1]]
ide 33

OM EIENDOMMEN
er vedlagt salgsoppgaven. Det er viktig at interessenter Sameiet består av 12 seksjoner delt på tre hus og hver
grundig gjennomgår disse dokumentene før bud legges enkelt sameier har generelt medansvar og ansvar for
inn. vedlikehold som vasking/ maling av utvendig fasade
tilhørende sin seksjon. De fire seksjonseierne i hvert hus
All informasjon i tilstandsrapporten anses som kjent for har felles ansvar for vedlikehold av sitt hus.
kjøper, og det vil ikke være mulig å reklamere på

---

[d124_d124 | Side [1]]
ingsdeler vurdert med TG2: Husdyr: Dyr er tillatt.
‑ Bad grunnet alder Forkjøpsrett: Sameiet har ikke forkjøpsrett.
Styregodkjennelse: Sameiet har ikke styregodkjennelse.
Øvrig informasjon
Vedtekter/ husordensregler
Sameiets vedtekter ligger vedlagt i salgsoppgaven.
Adresse
Neset 69A, 5267 ESPELAND
Beboernes forpliktelser og
Gnr. 290, bnr. 150, snr. 2, ideell andel 1/ 1 i Bergen
kommune. dugnader
Det arrangeres dugnad om sommeren. Informasjon
legges ut i sameiets Facebook‑gruppe.
Selger
Onprida

---

[d124_d124 | Side [1]]
løpet kan avvike fra estimatet.
Fakturering skjer månedlig eller kvartalsvis.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Formuesverdi
Estimert totalpris ink. omk Formuesverdi primær: Kr 749 004 (2024)
Kr 3 079 340
Formuesverdi sekundær: Kr 2 996 016 (2024)
Felleskostnader Info om formuesverdi: Skatteetaten beregner en
Felleskostnader kr 705,‑ pr. mnd boligverdi (beregnet markedsverdi for bolig) basert på
SSBs statistiske opplysninger om omsatte boliger. I
Felleskostnader inkluderer: Brøyting,

---

[d124_d124 | Side [1]]
tal investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Legg ID her Legg ID her

## Side 79

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

[d124_d124 | Side [1]]

Med Skåldalsnipa på ene siden og Ulriken på andre, er Tomten er fellesareal, hvilket betyr at sameiet eier og
mulighetene uendelige. Her finnes en rekke turstier, forvalter de aktuelle områdene i fellesskap. Dette gir ikke
tilpasset både store og små. Når sommersolen frister er den enkelte seksjon rett til eksklusiv bruk eller
det kort vei til Haukelandsvatnet, kjent for sin varme disponering av arealene, med mindre annet er spesifisert
temperatur. Ferskvannet er et populært badested på i en avtale eller

---

[d124_d124 | Side [1]]
Informasjon
legges ut i sameiets Facebook‑gruppe.
Selger
Onprida Thongnak
Energimerke
Sameie Energikarakter: B
NESHAUGANE BOLIGSAMEIE Energifarge: Rød
Organisasjonsnummer: 915 274 668
33

## Side 34

OM EIENDOMMEN
Info energiklasse Tinglyste heftelser
Se fullstendig energiattest fra selger som vedlegg til Tinglyste heftelser og rettigheter: På eiendommen er det
salgsoppgave. Megler påtar seg ikke ansvar for tinglyst følgende heftelser og rettigheter som følger
informasjonen som fremgår av energiattesten.

---

[d124_d124 | Side [1]]
rn (0-18 år)
Turmulighetene
Nærhet til skog og mark 97/100
25% i barnehagealder
36% 6-12 år
Støynivået
18% 13-15 år
Lite støynivå 94/100 21% 16-18 år
Gateparkering
Lett 86/100
Familiesammensetning
Sport
Par m. barn
Lone skole 10 min
Aktivitetshall, ballspill 0.8 km
Par u. barn
Lonehallen volleyballhall 10 min
Aktivitetshall 0.8 km
Optimum 17 min Enslig m. barn
Arna Treningssenter 5 min
Enslig u. barn
Boligmasse
Flerfamilier
73% enebolig
1% blokk 0% 43%
26%

---

[d124_d124 | Side [1]]
eller mellom membran og fliser. Fuktsøk inne
på flislagte våtrom vil derfor gi uklare indikasjoner. Rommet fremstår tørt på befaringsdagen.
Dokumentasjon
Fremlagt dokumentasjon Nei
6.11 Ikke relevante bygningsdeler
Følgende bygningsdeler er angitt som finnes ikke/ikke relevant:
Rom under terreng
Takkonstruksjon og loft
Vannbåren varme
Varmesentral
Neset 69 A, 5267 Espeland 15 av 15
59

## Side 60

Nabolagsprofil
Neset 69A - Nabolaget Espeland-Unneland - vurdert av 65 lokalkjente
Nabolaget spesielt anbefalt

---

[d124_d124 | Side [1]]
n
PostNord 1 km
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
60

## Side 61

Primære transportmidler Varer/Tjenester
Øyrane Torg 9 min
1. Egen bil
Apotek 1 Arna 8 min
2. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene
Nærhet til skog og mark 97/100
25% i

---

[d124_d124 | Side [1]]
 informasjon går via dem. Styreleder opplyser
29

## Side 30

OM EIENDOMMEN
Barne‑ og ungdomsskoler:
Beliggenhet
9 min gange til Lone skule (1‑7 kl.)
Neset 69A ligger fint til i et rolig og etablert boligområde 13 min gange til Garnes ungdomsskule (8‑10 kl.)
på Espeland, omringet av grønne og naturskjønne 19 min kjøring til Slåtthaug skole (8‑10 kl.)
omgivelser. Her bor du tilbaketrukket og fredelig,
samtidig som du har kort vei til flotte turområder, Videregående skoler:
kollektivtransport og daglige

---

[d124_d124 | Side [1]]
t ved
unna. For de litt eldre barna, er det korte kjøreavstander fellesvisninger for enkel orientering.
til ungdomskoler og videregående. Kollektivtilbudet i
området er bra med nærmeste busstopp få minutter
Tomt
unna til fots. På holdeplassen Lone går det hyppig busser
mot bla Arna terminal som er et sentralt knutepunkt for Tomtetype: Eiet
en rekke busslinjer.
Tomtestørrelse: 2779.9 m²
På Neset har man virkelig naturen som nærmeste nabo.
Med Skåldalsnipa på ene siden og Ulriken på andre, er Tomten er

---

[d124_d124 | Side [1]]
ostnader forbundet med dette. Utover 35 m²
dette så opplyses det om at leiligheten er godkjent
byggemeldt med totalt to soverom. Fra 01.01.24 er det innført nye regler for måling og
opplysning av areal på boliger.
Videre gjøres det oppmerksom på at dagens fasade ikke De nye arealbegrepene er:
ikke stemmer overens med de godkjente tegningene
som er sendt inn med søknad om rammetillatelse/ Bruksareal BRA:
igangsettingstillatelse. Endringer som endrer bygningens BRA‑i ‑ Internt bruksareal. Arealet innenfor

---

[d124_d124 | Side [1]]
ter.
Tak: Himlingsplater.
OPPVARMING
Neset 69 A, 5267 Espeland 5 av 15
49

## Side 50

Elektrisk oppvarming med gulvvarme i alle rom.
VENTILASJON
Balansert ventilasjon.
5. Arealinformasjon
Arealmålingen er basert på Norsk standard 3940:2023 Areal- og volum-beregninger av bygninger. Arealet gjelder for tidspunktet da boligen ble målt.
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift
Arealet beskriver boligens bruksareal i tre definerte kategorier:
Internt
BRA-i Bruksareal

---

[d124_d124 | Side [1]]
 om det er utført kontroll av el‑anlegget
inkluderer innebyggede garderrobeskap, innkassinger/ og/ eller andre installasjoner (f.eks. oljetank, sentralfyr,
pipeløp etc. Arealene er beregnet og rom er definert etter ventilasjon)?
dagens faktiske bruk, uavhengig av hva som er godkjent Ventilasjon Flexit er blitt fikset februar 2026
av bygningsmyndighetene. Opplyst tilleggsareal som
eksterne boder i fellesarealer er målt på stedet dersom ‑ Kjenner du til om det har vært utført arbeid på

---

[d124_d124 | Side [1]]
læringen kan tinglyses på gnr. 290 bnr. 30, bnr.
Bystyret legger til grunn at revisjon av 144 og bnr. 150, og kan ikke avlyses uten samtykke av
KPA‑bestemmelsene skal sluttføres med vedtak Bystyret Bergen kommune ved Vann‑ og avløpsetaten.
i første kvartal 2027. Hovedmålet med revisjon av
KPA‑bestemmelsene er forenkling, fortgang og Tinglyst 10.05.2011 ‑ Dokumentnr: 356991 ‑ Seksjonering
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre Opprettet seksjoner:
gode boliger og nabolag. Snr: 2
Formål:

---

[d124_d124 | Side [1]]
Unneland - vurdert av 65 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 83/100
Etablerere
Kvalitet på skolene
Husdyreiere
Veldig bra 80/100
Naboskapet
Offentlig transport Godt vennskap 73/100
Langaneskrysset 5 min
Linje 94 0.4 km
Aldersfordeling
Arna terminal 9 min
Buss, tog 6.5 km
Arna stasjon 9 min Linje F4, L4, R40 6.5 km
Breistein ferjekai 24 min
Linje 1036 20.3 km
Gamle Bergen Museum 25 min
Linje BEF 24.7 km
Skoler
Lone skule (1-7 kl.) 9 min
267 elever, 15

---

[d124_d124 | Side [1]]
t nevneverdige avvik basert på visuell kontroll.
6.4 Lovlighet / HMS
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert
Har boligen åpenbare ulovligheter (F.eks ulovlige bruksendringer)? Nei
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved

---

[d124_d124 | Side [1]]
at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d124_d124 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d124_d124 | Side [1]]
m ikke
finnes på eiendommen, vil heller ikke følge med i salget. Byggemåte
Alt utstyr og installasjoner som medfølger overtas slik de I forbindelse med salget er det blitt utført en
er, uten garanti, med mindre det foreligger en gjeldende tilstandsrapport av en bygningssakkyndig, som gir en
garanti fra produsent eller leverandør. teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring,
32

## Side 33

OM EIENDOMMEN
er vedlagt salgsoppgaven. Det er viktig at

---

[d124_d124 | Side [1]]
ke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: OT 4
82006230
:ecnerefer
tnemucoD
44

## Side 45

Neset 69 A
5267 ESPELAND
Tilstandsrapport
Eierskifte
Boligtype: Leilighet i flermannsbolig
Byggeår: 2010
Hovedbygg BRA: 68 m2
Hovedbygg BRA-i: 62 m2
Sum alle bygg BRA: 73 m2
Sum alle bygg BRA-i: 62 m2
Rapportdato: 17.2.2026 (Gyldig til 17.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 11 1 0 0
Thomas Frøyen
thomas@froyentakst.no Neset 69 A
GNR: 290 BNR: 150 SNR: 2 Bygningssakkyndig

---

[d124_d124 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d124_d124 | Side [1]]
på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved

---

[d124_d124 | Side [1]]
ventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet

---

[d124_d124 | Side [1]]
eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 73






OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra

---

[d124_d124 | Side [1]]
old til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg

---

[d124_d124 | Side [1]]
henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: OT

---

[d124_d124 | Side [1]]
erte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
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
− Hvordan: Krysses av i

---

[d124_d124 | Side [1]]
 premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes

---

[d124_d124 | Side [1]]
 








71

## Side 72

Boligkjøperforsikring
Hvis din nye bolig har

---

[d124_d124 | Side [1]]
jøring skal føle engasjement, ærlighet og
og koordinering av all markedsføring til profesjonalitet gjennom hele prosessen.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal

---

[d124_d124 | Side [1]]
lerfirma
EMERA Bergen
Oppdragsnr.
03260028
Selger 1 navn
Onprida Thongnak
Gateadresse
Neset 69A
Poststed Postnr
ESPELAND 5267
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2020
Hvor lenge har du eid boligen?
Antall år 6
Antall måneder 2
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Fjordkraft
Polise/avtalenr.

---

[d124_d124 | Side [1]]
rt konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette

---

[d124_d124 | Side [1]]
 20 000 000,‑.
Denne grensen kan endres i vedtektene, men den må Egenerklæringsskjema er vedlagt salgsoppgaven og
være satt mellom 60 og 120 døgn. Med korttidsutleie interessenter oppfordres til å gjennomgå denne før bud
menes utleie i en sammenhengende periode på opptil 30 inngis.
døgn.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Diverse informasjon om Boligkjøperforsikring fra Söderberg &
Det informeres om at ingen kan eie mer enn to

---

[d124_d124 | Side [1]]
g at selges ansvar begrenses ettersom boligen selges «som
kjøper setter seg grundig inn i alle salgsdokumentene, den er», noe som kan være av verdi for selger. Det
herunder salgsoppgave, tilstandsrapport og selgers understrekes at selger står fritt til å velge hvilket bud som
egenerklæring. Kjøper anses for å være kjent med aksepteres, og er ikke forpliktet til å velge det høyeste.
forhold som er tydelig beskrevet i salgsdokumentene,
slike forhold kan ikke senere gjøres gjeldende som en Alle budgivere må

---

[d124_d124 | Side [1]]

71

## Side 72

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "El-anlegg uten dokumentasjon og ukjent historikk – behov for utvidet el-kontroll",
      "evidence": [
        "Boligen har et elanlegg uten dokumentasjon samt ukjent historikk med hensyn til evt tidligere endringer. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.",
        "Selger svarer 'Nei' på spørsmål om det er utført arbeid på el-anlegget eller andre installasjoner.",
        "Selger svarer 'Nei' på spørsmål om det er utført kontroll av el-anlegget."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        48
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Baderom (våtrom) har TG2 grunnet alder på membran/tettesjikt – usikker restlevetid og risiko for fuktskader",
      "evidence": [
        "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.",
        "Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.",
        "Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja",
        "Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        48,
        57,
        58
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Fasaden stemmer ikke overens med godkjente byggetegninger – ulovlig/ikke-godkjent tilstand, kjøper overtar risikoen for fremtidig godkjenning og kostnader",
      "evidence": [
        "Videre gjøres det oppmerksom på at dagens fasade ikke stemmer overens med de godkjente tegningene som er sendt inn med søknad om rammetillatelse/igangsettingstillatelse.",
        "Endringer som endrer bygningens karakter, eller er i strid med reguleringsplaner, er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om fasadeendring blir godkjent, samt alle kostnader forbundet med prosessen."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        31
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Dreneringsproblemer på fellesarealet – overvann er et kjent problem som ikke er fullstendig utbedret, og fremtidige kostnader kan påløpe",
      "evidence": [
        "Videre opplyser styreleder om at det i fjor ble satt ned 2 stk drenerings-kummer på området pga mye overvann. Det er bedre nå, men skikkelig bra blir det kun med flere dreneringspunkter og asfalt. Det koster, og vil ikke være mulig med det første."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        29
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Økte felleskostnader som følge av innleid regnskapsfirma – sameiet har leid inn eksternt firma for fakturering, noe som har økt felleskostnadene",
      "evidence": [
        "Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet. Starten av i år har vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte.",
        "Sameiets regnskapsfører er Godt Regnskap AS. All økonomisk informasjon går via dem.",
        "Det betales kr 2 115,- per kvartal i felleskostnader."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        29
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Privat adkomstvei og private stikkledninger – vedlikeholdsansvar for vei og VA-ledninger påhviler sameiet, ikke kommunen",
      "evidence": [
        "Adkomst til eiendommen skjer via privat vei.",
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        34,
        35
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R7",
      "description": "Tinglyst rett for naboeiendommer til å legge/ha liggende vann- og spillvannsledning over eiendommen – varig heftelse",
      "evidence": [
        "Eier av gnr. 290 bnr. 30 gir herved eiere av gnr. 290 bnr. 144 og bnr. 150 rett til å legge / ha liggende vannledning og spillvannsledning over vår eiendom som vist merket gult på kart i målestokk 1:500, datert 27.03.2019.",
        "Denne erklæringen kan tinglyses på gnr. 290 bnr. 30, bnr. 144 og bnr. 150, og kan ikke avlyses uten samtykke av Bystyret Bergen kommune ved Vann- og avløpsetaten."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        34
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Legalpant – kommunen og sameiet har lovbestemt pant i seksjonen med prioritet foran tinglyste banklån",
      "evidence": [
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        34
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R9",
      "description": "Arbeid på veranda/terrasse utført av ufaglært/egeninnsats – ingen faglig dokumentasjon på utførelsen",
      "evidence": [
        "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Et par år tilbake hadde jeg pusset/beise og malt verandaen.",
        "Balkong, terrasse, platting TG-1: Alminnelig bruksslitasje og noe værslitte partier (rekkverk). Alminnelig vedlikeholdsbehov."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        52
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R10",
      "description": "Tomten er fellesareal – den enkelte seksjonseier har ikke eksklusiv bruksrett til tomtearealet",
      "evidence": [
        "Tomten er fellesareal, hvilket betyr at sameiet eier og forvalter de aktuelle områdene i fellesskap. Dette gir ikke den enkelte seksjon rett til eksklusiv bruk eller disponering av arealene, med mindre annet er spesifisert i en avtale eller..."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Pågående kommuneplanrevisjon (KPA 2027) kan medføre endringer i arealbruk og reguleringsbestemmelser for eiendommen",
      "evidence": [
        "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak i første kvartal 2027. Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R12",
      "description": "Godkjente tiltak i nærheten – ny garasje og bruksendring på naboeiendommen (290/52) kan påvirke nærområdet",
      "evidence": [
        "Eiendom: 290/52. Neset 77, nytt bygg - garasje. Igangsettingstillatelse datert 16.12.2025.",
        "Eiendom: 290/52. Neset 77, bruksendring fra tilleggs- til hoveddel. Igangsettingstillatelse datert 29.05.2024."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R13",
      "description": "Ventilasjon hadde feil og ble utbedret rett før salg – usikkerhet om varig funksjon",
      "evidence": [
        "Er ventilasjonen funksjonstestet? Nei",
        "Anlegget er etter befaringen utbedret grunnet feil.",
        "Ventilasjon Flexit er blitt fikset februar 2026",
        "Balansert ventilasjon."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        49,
        58
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Avvik mellom høydeforskjell på tettesjikt/fall til sluk på badet – potensiell risiko for at vann ikke ledes korrekt til sluk",
      "evidence": [
        "Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja",
        "Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei"
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        57
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R15",
      "description": "Manglende fast installert oppvarmingskilde – dersom dette ikke finnes på visning, følger det ikke med i handelen",
      "evidence": [
        "Å visningen mangler fast installert oppvarmingskilde, vil ikke dette bli inkludert i handelen.",
        "Elektrisk oppvarming med gulvvarme i alle rom."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1,
        49
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R16",
      "description": "Sameiet mangler styreleder – Hege skal flytte og ingen har overtatt styrevervet, noe som skaper usikkerhet om sameiets forvaltning",
      "evidence": [
        "Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet.",
        "Starten av i år har vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte."
      ],
      "source_documents": [
        "d124_d124"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (El-anlegg, 0.97):** Godt støttet. Tilstandsrapporten bekrefter manglende dokumentasjon og ukjent historikk. Selger svarer også \"Nei\" på spørsmål om utført arbeid og kontroll av el-anlegget, noe som forsterker risikoen. Confidence opprettholdes på 0.97.\n\n**R2 (Baderom TG2, 0.97):** Meget godt støttet av tilstandsrapporten. Membran/tettesjikt bekreftet å ha nådd alder med økt risiko. Avvik i fall til sluk er også dokumentert. Confidence opprettholdes på 0.97.\n\n**R3 (Fasade ikke i samsvar med tegninger, 0.95):** Godt støttet. Salgsoppgaven eksplisitt nevner avviket og at kjøper overtar risikoen. Confidence opprettholdes på 0.95.\n\n**R4 (Dreneringsproblemer, 0.93):** Godt støttet av styreledersuttalelse. Problemet er kjent og ikke fullstendig løst. Confidence opprettholdes på 0.93.\n\n**R5 (Økte felleskostnader, 0.88):** Støttet av egenerklæringen. Godt Regnskap AS er bekreftet som regnskapsfører. Confidence opprettholdes på 0.88.\n\n**R6 (Privat vei og stikkledninger, 0.92):** Direkte bekreftet i salgsoppgaven. Confidence opprettholdes på 0.92.\n\n**R7 (Tinglyst heftelse VA-ledninger, 0.90):** Direkte bekreftet i tinglyste heftelser. Confidence opprettholdes på 0.90.\n\n**R8 (Legalpant, 0.92):** Direkte bekreftet i salgsoppgaven med klar beskrivelse av prioritet. Confidence opprettholdes på 0.92.\n\n**R9 (Egeninnsats veranda, 0.82):** Støttet av egenerklæringen, men tilstandsrapporten gir TG-1 for balkong/terrasse, noe som indikerer at tilstanden ikke er kritisk. Risikoen er reell men noe begrenset – confidence justeres ned til 0.72.\n\n**R10 (Tomt som fellesareal, 0.85):** Direkte bekreftet i salgsoppgaven. Confidence opprettholdes på 0.85.\n\n**R11 (KPA 2027, 0.75):** Svakt støttet. KPA 2027 er nevnt som en plan i nærheten, men det er ingen konkrete indikasjoner på at dette vil påvirke denne spesifikke eiendommen negativt. Formålet med revisjonen er forenkling og forutsigbarhet, ikke nødvendigvis endringer som rammer eksisterende boliger. Confidence justeres ned til 0.65.\n\n**R12 (Nabobygg, 0.70):** Svakt støttet. Det er kun snakk om en garasje og bruksendring på naboeiendommen. Ingen konkret evidens for at dette påvirker eiendommen negativt. Confidence justeres ned til 0.55.\n\n**R13 (Ventilasjon utbedret, 0.80):** Godt støttet. Feil bekreftet, utbedring skjedde etter befaring og er ikke funksjonstestet. Confidence opprettholdes på 0.82.\n\n**R14 (Fall til sluk, 0.83):** Støttet av tilstandsrapporten. Avvik bekreftet, men det er presisert at lekkasjevann likevel når sluket. Confidence justeres noe ned til 0.80.\n\n**R15 (Manglende oppvarmingskilde, 0.78):** Noe uklar evidens. Salgsoppgaven nevner at fast installert oppvarmingskilde ikke vil følge med dersom den mangler på visning, men tilstandsrapporten bekrefter \"elektrisk oppvarming med gulvvarme i alle rom\". Dette kan bety at gulvvarmen er fast installert og følger med, men at en eventuell løs varmeovn ikke gjør det. Risikoen er reell men noe uklar – confidence justeres ned til 0.70.\n\n**R16 (Manglende styreleder, 0.80):** Støttet av egenerklæringen. Usikkerhet om sameiets forvaltning er reell. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer vurdert:**\n- Sameiebrøk 1/12 og solidaransvar: Eierseksjonsloven § 31 nevner at sameierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Dette er en potensiell risiko som ikke er eksplisitt identifisert.\n- Manglende ferdigattest/brukstillatelse: Spørsmål 22 i egenerklæringen er ikke besvart i de tilgjengelige dokumentchunkene, og dette bør undersøkes nærmere.\n- Energikarakter B med rød energifarge: Kan indikere høye energikostnader.\n- Selger har eid boligen siden 2020 (6 år) – relativt kort eiertid kan bety begrenset kjennskap til boligens historikk.\n\nForeslår re-retrieval for å undersøke ferdigattest-status og solidaransvar nærmere.\n",
  "re_retrieval_queries": [
    "ferdigattest brukstillatelse manglende godkjenning",
    "solidaransvar sameiebrøk kreditorer fellesgjeld",
    "energikarakter rød oppvarmingskostnader",
    "selgers kjennskap historikk boligen tidligere eiere",
    "fasadeendring søknad godkjenning byggetillatelse status"
  ]
}

## Raw Response
```json
{
  "id": "msg_01Hf9CerNRocNy8PDax2hHmq",
  "container": null,
  "content": [
    {
      "id": "toolu_011sERGeK2ZXokj1jjfZMPA8",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "El-anlegg uten dokumentasjon og ukjent historikk – behov for utvidet el-kontroll",
            "evidence": [
              "Boligen har et elanlegg uten dokumentasjon samt ukjent historikk med hensyn til evt tidligere endringer. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.",
              "Selger svarer 'Nei' på spørsmål om det er utført arbeid på el-anlegget eller andre installasjoner.",
              "Selger svarer 'Nei' på spørsmål om det er utført kontroll av el-anlegget."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              48
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Baderom (våtrom) har TG2 grunnet alder på membran/tettesjikt – usikker restlevetid og risiko for fuktskader",
            "evidence": [
              "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.",
              "Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.",
              "Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja",
              "Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              48,
              57,
              58
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Fasaden stemmer ikke overens med godkjente byggetegninger – ulovlig/ikke-godkjent tilstand, kjøper overtar risikoen for fremtidig godkjenning og kostnader",
            "evidence": [
              "Videre gjøres det oppmerksom på at dagens fasade ikke stemmer overens med de godkjente tegningene som er sendt inn med søknad om rammetillatelse/igangsettingstillatelse.",
              "Endringer som endrer bygningens karakter, eller er i strid med reguleringsplaner, er søknadspliktig. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om fasadeendring blir godkjent, samt alle kostnader forbundet med prosessen."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              31
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Dreneringsproblemer på fellesarealet – overvann er et kjent problem som ikke er fullstendig utbedret, og fremtidige kostnader kan påløpe",
            "evidence": [
              "Videre opplyser styreleder om at det i fjor ble satt ned 2 stk drenerings-kummer på området pga mye overvann. Det er bedre nå, men skikkelig bra blir det kun med flere dreneringspunkter og asfalt. Det koster, og vil ikke være mulig med det første."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              29
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Økte felleskostnader som følge av innleid regnskapsfirma – sameiet har leid inn eksternt firma for fakturering, noe som har økt felleskostnadene",
            "evidence": [
              "Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet. Starten av i år har vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte.",
              "Sameiets regnskapsfører er Godt Regnskap AS. All økonomisk informasjon går via dem.",
              "Det betales kr 2 115,- per kvartal i felleskostnader."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              29
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Privat adkomstvei og private stikkledninger – vedlikeholdsansvar for vei og VA-ledninger påhviler sameiet, ikke kommunen",
            "evidence": [
              "Adkomst til eiendommen skjer via privat vei.",
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              34,
              35
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R7",
            "description": "Tinglyst rett for naboeiendommer til å legge/ha liggende vann- og spillvannsledning over eiendommen – varig heftelse",
            "evidence": [
              "Eier av gnr. 290 bnr. 30 gir herved eiere av gnr. 290 bnr. 144 og bnr. 150 rett til å legge / ha liggende vannledning og spillvannsledning over vår eiendom som vist merket gult på kart i målestokk 1:500, datert 27.03.2019.",
              "Denne erklæringen kan tinglyses på gnr. 290 bnr. 30, bnr. 144 og bnr. 150, og kan ikke avlyses uten samtykke av Bystyret Bergen kommune ved Vann- og avløpsetaten."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              34
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Legalpant – kommunen og sameiet har lovbestemt pant i seksjonen med prioritet foran tinglyste banklån",
            "evidence": [
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              34
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R9",
            "description": "Arbeid på veranda/terrasse utført av ufaglært/egeninnsats – ingen faglig dokumentasjon på utførelsen",
            "evidence": [
              "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Et par år tilbake hadde jeg pusset/beise og malt verandaen.",
              "Balkong, terrasse, platting TG-1: Alminnelig bruksslitasje og noe værslitte partier (rekkverk). Alminnelig vedlikeholdsbehov."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              52
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R10",
            "description": "Tomten er fellesareal – den enkelte seksjonseier har ikke eksklusiv bruksrett til tomtearealet",
            "evidence": [
              "Tomten er fellesareal, hvilket betyr at sameiet eier og forvalter de aktuelle områdene i fellesskap. Dette gir ikke den enkelte seksjon rett til eksklusiv bruk eller disponering av arealene, med mindre annet er spesifisert i en avtale eller..."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Pågående kommuneplanrevisjon (KPA 2027) kan medføre endringer i arealbruk og reguleringsbestemmelser for eiendommen",
            "evidence": [
              "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak i første kvartal 2027. Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R12",
            "description": "Godkjente tiltak i nærheten – ny garasje og bruksendring på naboeiendommen (290/52) kan påvirke nærområdet",
            "evidence": [
              "Eiendom: 290/52. Neset 77, nytt bygg - garasje. Igangsettingstillatelse datert 16.12.2025.",
              "Eiendom: 290/52. Neset 77, bruksendring fra tilleggs- til hoveddel. Igangsettingstillatelse datert 29.05.2024."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R13",
            "description": "Ventilasjon hadde feil og ble utbedret rett før salg – usikkerhet om varig funksjon",
            "evidence": [
              "Er ventilasjonen funksjonstestet? Nei",
              "Anlegget er etter befaringen utbedret grunnet feil.",
              "Ventilasjon Flexit er blitt fikset februar 2026",
              "Balansert ventilasjon."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              49,
              58
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Avvik mellom høydeforskjell på tettesjikt/fall til sluk på badet – potensiell risiko for at vann ikke ledes korrekt til sluk",
            "evidence": [
              "Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja",
              "Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei"
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              57
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R15",
            "description": "Manglende fast installert oppvarmingskilde – dersom dette ikke finnes på visning, følger det ikke med i handelen",
            "evidence": [
              "Å visningen mangler fast installert oppvarmingskilde, vil ikke dette bli inkludert i handelen.",
              "Elektrisk oppvarming med gulvvarme i alle rom."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1,
              49
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R16",
            "description": "Sameiet mangler styreleder – Hege skal flytte og ingen har overtatt styrevervet, noe som skaper usikkerhet om sameiets forvaltning",
            "evidence": [
              "Grunnet Hege skal flytte fra boligen sin, å noen må overtar plassen hennes som styrer i sameiet.",
              "Starten av i år har vi leid inn firma som tar ansvar for regningen/faktura for felleskostnaden, det er en grunn til at det økte."
            ],
            "source_documents": [
              "d124_d124"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (El-anlegg, 0.97):** Godt støttet. Tilstandsrapporten bekrefter manglende dokumentasjon og ukjent historikk. Selger svarer også \"Nei\" på spørsmål om utført arbeid og kontroll av el-anlegget, noe som forsterker risikoen. Confidence opprettholdes på 0.97.\n\n**R2 (Baderom TG2, 0.97):** Meget godt støttet av tilstandsrapporten. Membran/tettesjikt bekreftet å ha nådd alder med økt risiko. Avvik i fall til sluk er også dokumentert. Confidence opprettholdes på 0.97.\n\n**R3 (Fasade ikke i samsvar med tegninger, 0.95):** Godt støttet. Salgsoppgaven eksplisitt nevner avviket og at kjøper overtar risikoen. Confidence opprettholdes på 0.95.\n\n**R4 (Dreneringsproblemer, 0.93):** Godt støttet av styreledersuttalelse. Problemet er kjent og ikke fullstendig løst. Confidence opprettholdes på 0.93.\n\n**R5 (Økte felleskostnader, 0.88):** Støttet av egenerklæringen. Godt Regnskap AS er bekreftet som regnskapsfører. Confidence opprettholdes på 0.88.\n\n**R6 (Privat vei og stikkledninger, 0.92):** Direkte bekreftet i salgsoppgaven. Confidence opprettholdes på 0.92.\n\n**R7 (Tinglyst heftelse VA-ledninger, 0.90):** Direkte bekreftet i tinglyste heftelser. Confidence opprettholdes på 0.90.\n\n**R8 (Legalpant, 0.92):** Direkte bekreftet i salgsoppgaven med klar beskrivelse av prioritet. Confidence opprettholdes på 0.92.\n\n**R9 (Egeninnsats veranda, 0.82):** Støttet av egenerklæringen, men tilstandsrapporten gir TG-1 for balkong/terrasse, noe som indikerer at tilstanden ikke er kritisk. Risikoen er reell men noe begrenset – confidence justeres ned til 0.72.\n\n**R10 (Tomt som fellesareal, 0.85):** Direkte bekreftet i salgsoppgaven. Confidence opprettholdes på 0.85.\n\n**R11 (KPA 2027, 0.75):** Svakt støttet. KPA 2027 er nevnt som en plan i nærheten, men det er ingen konkrete indikasjoner på at dette vil påvirke denne spesifikke eiendommen negativt. Formålet med revisjonen er forenkling og forutsigbarhet, ikke nødvendigvis endringer som rammer eksisterende boliger. Confidence justeres ned til 0.65.\n\n**R12 (Nabobygg, 0.70):** Svakt støttet. Det er kun snakk om en garasje og bruksendring på naboeiendommen. Ingen konkret evidens for at dette påvirker eiendommen negativt. Confidence justeres ned til 0.55.\n\n**R13 (Ventilasjon utbedret, 0.80):** Godt støttet. Feil bekreftet, utbedring skjedde etter befaring og er ikke funksjonstestet. Confidence opprettholdes på 0.82.\n\n**R14 (Fall til sluk, 0.83):** Støttet av tilstandsrapporten. Avvik bekreftet, men det er presisert at lekkasjevann likevel når sluket. Confidence justeres noe ned til 0.80.\n\n**R15 (Manglende oppvarmingskilde, 0.78):** Noe uklar evidens. Salgsoppgaven nevner at fast installert oppvarmingskilde ikke vil følge med dersom den mangler på visning, men tilstandsrapporten bekrefter \"elektrisk oppvarming med gulvvarme i alle rom\". Dette kan bety at gulvvarmen er fast installert og følger med, men at en eventuell løs varmeovn ikke gjør det. Risikoen er reell men noe uklar – confidence justeres ned til 0.70.\n\n**R16 (Manglende styreleder, 0.80):** Støttet av egenerklæringen. Usikkerhet om sameiets forvaltning er reell. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer vurdert:**\n- Sameiebrøk 1/12 og solidaransvar: Eierseksjonsloven § 31 nevner at sameierne er ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Dette er en potensiell risiko som ikke er eksplisitt identifisert.\n- Manglende ferdigattest/brukstillatelse: Spørsmål 22 i egenerklæringen er ikke besvart i de tilgjengelige dokumentchunkene, og dette bør undersøkes nærmere.\n- Energikarakter B med rød energifarge: Kan indikere høye energikostnader.\n- Selger har eid boligen siden 2020 (6 år) – relativt kort eiertid kan bety begrenset kjennskap til boligens historikk.\n\nForeslår re-retrieval for å undersøke ferdigattest-status og solidaransvar nærmere.\n",
        "re_retrieval_queries": [
          "ferdigattest brukstillatelse manglende godkjenning",
          "solidaransvar sameiebrøk kreditorer fellesgjeld",
          "energikarakter rød oppvarmingskostnader",
          "selgers kjennskap historikk boligen tidligere eiere",
          "fasadeendring søknad godkjenning byggetillatelse status"
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
    "input_tokens": 19646,
    "output_tokens": 5115,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
