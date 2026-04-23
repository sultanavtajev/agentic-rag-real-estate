# Trace: agentic_reflecting_iter1
- **Run ID:** d6e8fdd8-58c7-44f8-a52d-8d942176d8eb
- **Tidspunkt:** 2026-03-25T00:59:40.145535+00:00
- **Varighet:** 98.24s
- **Input tokens:** 22307
- **Output tokens:** 4966

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
Risiko 1: Eldre elektrisk anlegg uten dokumentasjon – krever utvidet el-kontroll
  Confidence: 0.97
  Evidens: Boligen har et eldre elanlegg uten dokumentasjon. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.

Risiko 2: Bad med TG2 – overflater, membran/tettesjikt og sanitærutstyr har avvik grunnet alder og slitasje, med usikker restlevetid og risiko for fuktskader
  Confidence: 0.95
  Evidens: Våtrom: Bad - Overflater TG 2 pga alder/slitasje.; Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.; Våtrom: Bad - Sanitærutstyr TG 2 pga manglende synliggjøring av lekkasjevann fra innebygget sisterne.; Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.; Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann.; Det vurderes å etablere en Waterguard i tilknytning til innebygget sisterne uten drensåpning.; Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja. Sprekk i gulvflis i dusjsone.

Risiko 3: Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 som kjøper må overta
  Confidence: 0.95
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.

Risiko 4: Legalpant – sameiet har panterett i seksjonen på inntil 2G som har prioritet foran tinglyste banklån
  Confidence: 0.93
  Evidens: legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 5: Terrassefliser lagt av ufaglært – arbeid på terrasse/fasade er utført uten faglig kompetanse, noe som kan medføre skjulte feil
  Confidence: 0.88
  Evidens: Svar Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Terrassefliser lagt av forrige eier som var ufaglært.; Terrassefliser lagt av forrige eier som var ufaglært.

Risiko 6: Eiendommen ligger delvis i gul og rød støysone (veistøy), noe som kan påvirke bokvalitet og verdi
  Confidence: 0.9
  Evidens: Gul støysone. Veistøy, berøringsgrad 14,2%; Rød støysone. Veistøy, berøringsgrad 1,3%

Risiko 7: Fellesgjeld med flytende rente på 6,85% – renterisiko frem til innfrielse 30.06.2029
  Confidence: 0.88
  Evidens: Sameiet har en total fellesgjeld per 03.02.2026 på kr 269 931,‑ fordelt på seksjonene: Dnb Bank ASA, annuitetslån. Rentesats: 6,85%, flytende rente. Total saldo: kr 269 931,‑. Andel av saldo: kr 2 787,‑. Innfrielsesdato: 30.06.2029.

Risiko 8: Felleskostnader kan økes etter utarbeidelse av salgsoppgaven – usikkerhet om fremtidige kostnader
  Confidence: 0.82
  Evidens: Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven, men styreleder opplyser om at det per tid ikke er planer om noen økning og at fremtidig vedlikehold dekkes av felleskostnadene.

Risiko 9: Tinglyst veirett over eiendommen (gnr. 26, bnr. 334) til fordel for naboeiendommer – kan begrense bruken av eiendommen
  Confidence: 0.87
  Evidens: 26.02.2008 - Dokumentnr: 165022 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:359; 03.04.2008 - Dokumentnr: 264026 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:107. Gnr. 26, bnr. 107 gis veirett over gnr 26, bnr 334.; 09.04.2008 - Dokumentnr: 284856 - Best. om adkomstrett. Rettighetshaver: Knr:4601 Gnr:26 Bnr:258. Eiendommen gnr 26 bnr 258 i Bergen kommune gis ved denne erklæring bruksrett til vei/kjøreadkomst over eiendommen gnr.26 bnr 334.

Risiko 10: Ingen radonmåling er foretatt – potensiell helserisiko for beboere er ikke avklart
  Confidence: 0.85
  Evidens: 21 Er det foretatt radonmåling? Nei

Risiko 11: Energikarakter D (rød) – boligen har dårlig energieffektivitet, noe som kan medføre høye strømkostnader
  Confidence: 0.85
  Evidens: Energikarakter: D. Energifarge: Rød.

Risiko 12: Godkjenning av ny eier kreves av styret – kan forsinke overtakelse, selv om nekting krever saklig grunn
  Confidence: 0.75
  Evidens: Styregodkjennelse: Det følger av eierseksjonsameiets vedtekter at ny eier skal godkjennes av styret. Godkjennelse kan, jf. eierseksjonsloven § 24, ikke nektes uten saklig grunn.

Risiko 13: Byggeaktivitet i nærheten – rammetillatelse for lagerhall og riving av eksisterende bygg kan påvirke nærmiljøet
  Confidence: 0.78
  Evidens: Eiendom: 26/299. Hus for dyr/landbr.lager/silo. Bygning godkjent for riving/brenning datert 10.03.2023.; Eiendom: 26/299. Lagerhall. Rammetillatelse datert 10.03.2023. Saksnr: 202222157

Risiko 14: Pågående revisjon av kommuneplanens arealdel (KPA 2027) – fremtidige reguleringsendringer kan påvirke eiendommens omgivelser
  Confidence: 0.75
  Evidens: PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.

Risiko 15: Stikkledninger for vann og avløp er private – vedlikeholdsansvaret påhviler sameiet og kan medføre uventede kostnader
  Confidence: 0.8
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 16: Kjøper har egenandel på inntil kr 10 000 ved krav om prisavslag eller erstatning – finansiell risiko ved eventuelle mangler
  Confidence: 0.8
  Evidens: Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel).

Dokumentkontekst:
[d111_d111 | Side [1]]
tale med en Tinglyste heftelser og rettigheter: På eiendommen er det
strømleverandør. tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny
Du kan lese mer om Norgespris blant annet her: https:/ / hjemmelshaver:
www.regjeringen.no/ no/ tema/ energi/ strom/
sporsmal‑og‑svar‑om‑norgespris 4601/ 26/ 334/ 52:
26.02.2008 ‑ Dokumentnr: 165022 ‑ Bestemmelse om
veg
Regulerings og arealplaner
Rettighetshaver: Knr:4601 Gnr:26 Bnr:359
Eiendommen er ri henhold til

---

[d111_d111 | Side [1]]
ghetshaver: Knr:4601 Gnr:26 Bnr:359
Eiendommen er ri henhold til reguleringsplan Rettighetshaver rettet etter tgl.l. § 18. 07.05.2008 ID e.f.
Fyllingsdalen. Gnr 26 bnr 107, 258 MFL., Helgeplasset, Det gis herved bruksrett til kjøreatkomst over gnr./ bnr.
31

## Side 32

om eiendommen
26/ 334 frem til garasjetomt gnr./ bnr.26/ 359 legalpant på inntil 2G som sikkerhet for krav knyttet til
sameieforholdet, som felleskostnader. Legalpant er pant
03.04.2008 ‑ Dokumentnr: 264026 ‑ Bestemmelse om som ikke vises i

---

[d111_d111 | Side [1]]
3.04.2008 ‑ Dokumentnr: 264026 ‑ Bestemmelse om som ikke vises i grunnboksutskriften, og har prioritet
veg foran tinglyste lån, for eksempel banklån på seksjonen.
Rettighetshaver: Knr:4601 Gnr:26 Bnr:107 Legalpant til kommunen har høyere prioritet enn
Gnr. 26, bnr. 107 gis veirett over gnr 26, bnr 334. Veiretten legalpant til sameiet.
gjelder fra vei/ adresse Helgeplasset over bnr 334 og inn
på bnr 107 som vist på vedlagte kart. Begge
Vei, vann og avløp
eiendommene er i Bergen kommune.
Eiendommen er

---

[d111_d111 | Side [1]]
 du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: BH 2
12006230
:ecnerefer
tnemucoD
39

## Side 40

21 Er det foretatt radonmåling?
Nei

---

[d111_d111 | Side [1]]
r utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Terrassefliser lagt av forrige eier som var ufaglært.
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller

---

[d111_d111 | Side [1]]
 eiendommen:
Nåværende eier har tegnet avtale om Norgespris på ‑ Eiendom: 26/ 299. Hus for dyr/ landbr.lager/ silo. Bygning
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen godkjent for riving/ brenning datert 10.03.2023.
følger boligen, og må derfor overtas av kjøper. ‑ Eiendom: 26/ 299. Lagerhall. Rammetillatelse datert
10.03.2023. Saksnr: 202222157
Norgespris er en ny, statlig ordning, som gir en
forutsigbar og fast strømpris på 50 øre per kWh med For mer informasjon om reguleringsforhold,

---

[d111_d111 | Side [1]]
 reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med

---

[d111_d111 | Side [1]]
ei, vann og avløp
eiendommene er i Bergen kommune.
Eiendommen er tilknyttet offentlig vann‑ og
09.04.2008 ‑ Dokumentnr: 284856 ‑ Best. om avløpssystem. Stikkledningene fra eiendommen og ut til
adkomstrett det kommunale nettet er private, og
Rettighetshaver: Knr:4601 Gnr:26 Bnr:258 vedlikeholdsansvaret for disse påhviler sameiet.
Eiendommen gnr 26 bnr 258 i Bergen kommune gis ved Adkomst til eiendommen skjer via offentlig vei.
denne erklæring bruksrett til vei/ kjøreadkomst over
eiendommen gnr.26 bnr 334 i

---

[d111_d111 | Side [1]]
dlisten, men som ikke er vedlagt salgsoppgaven. Det er viktig at interessenter
finnes på eiendommen, vil heller ikke følge med i salget. grundig gjennomgår disse dokumentene før bud legges
Alt utstyr og installasjoner som medfølger overtas slik de inn.
er, uten garanti, med mindre det foreligger en gjeldende
garanti fra produsent eller leverandør. All informasjon i tilstandsrapporten anses som kjent for
kjøper, og det vil ikke være mulig å reklamere på forhold
Kjøper aksepterer at det kan forekomme hull og

---

[d111_d111 | Side [1]]
n sameiet legal panterett i den enkelte eierseksjon,
innvirkning på snr. 52. begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Legalpant: Kommunen har legalpant som sikkerhet for Kjøper og selger er forpliktet til å signere den standard
betaling av kommunale avgifter og eventuell kjøpekontrakten utarbeidet av Emera som en del av
eiendomsskatt. De øvrige seksjonseierne i sameiet har eiendomshandleren. Kjøpekontrakten kan gjennomgås
32

## Side 33

OM EIENDOMMEN
hos eiendomsmegler før budet legges inn.

---

[d111_d111 | Side [1]]
ene flis i dusjnisjen. Kan fjernes og
eksempel skråtak eller lav himlingshøyde. Arealet oppgis erstattes.
som tilleggsinformasjon til øvrige arealer.
Kjenner du til om det har vært utført arbeid på terrasse/
garasje/ tak/ fasade?
Standard
‑ Terrassefliser lagt av forrige eier som var ufaglært.
Innbo og løsøre: Følgende løsøre og tilbehør følger med:
‑ Komfyr Moderniseringer og påkostninger: 2021:
‑Malt vegger i hele boligen
Følgende løsøre og tilbehør følger ikke med:
‑ Hvitevarer på kjøkken
Byggemåte
For

---

[d111_d111 | Side [1]]
 Takstmann: Frøyen Takst AS
boenheten og som tilhører denne, for eksempel eksterne
boder. Type takst avholdt av takstmann: Tilstandsrapport
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Sammendrag selgers egenerklæring: Selgers
Andre arealer: egenerklæringsskjema følger vedlagt salgsoppgaven.
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. Interessenter oppfordres til å gjennomgå dette nøye.
ALH ‑ Areal med lav himlingshøyde måles på samme
måte som BRA, men man ser bort fra krav til Følgende

---

[d111_d111 | Side [1]]
ligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i

---

[d111_d111 | Side [1]]
rrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært

---

[d111_d111 | Side [1]]
fer
tnemucoD
39

## Side 40

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
25 Kjenner du til om sameiet/laget/selskapet er

---

[d111_d111 | Side [1]]
sameier som følger av sameierforholdet, herunder krav om dekning av
felleskostnader, har de øvrige sameiere panterett i den aktuelle sameiers seksjon.
Pantekravet kan ikke overstige et beløp som for hver bruksenhet svarer til 2 ganger
folketrygdens grunnbeløp på tidspunktet da tvangsdekning besluttes gjennomført.
Panteretten faller bort dersom det ikke senest to år etter at pantekravet skulle ha vært
betalt, innkommer begjæring til namsmyndigheten om tvangsdekning, eller dersom
salget av eiendommen gjennom

---

[d111_d111 | Side [1]]
ne, og dette vil normalt ikke gi grunnlag for
33

## Side 34

OM EIENDOMMEN
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker –

---

[d111_d111 | Side [1]]
ter utarbeidelse
av salgsoppgaven, men styreleder opplyser om at det
Omkostning kjøper
per tid ikke er planer om noen økning og at fremtidig
3 990 000,00 (Prisantydning) vedlikehold dekkes av felleskostnadene.
2 787 (Andel av fellesgjeld)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Eiendomsskatt
3 992 787 (Pris inkl. fellesgjeld)
Kr 4 615,‑ (2026)
Omkostninger:
13 500 (Boligkjøperforsikring* (valgfritt)) Informasjon om eiendomsskatt er innhentet fra Bergen
99 800 (Dokumentavgift) kommune.
545

---

[d111_d111 | Side [1]]
ar vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: BH 3
12006230
:ecnerefer
tnemucoD
40

## Side 41

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring

---

[d111_d111 | Side [1]]
skrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
33

## Side 34

OM

---

[d111_d111 | Side [1]]
vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
Boligen har et eldre elanlegg uten dokumentasjon. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig
person, og nødvendige tiltak vurderes deretter.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Våtrom: Bad - Overflater TG 2 pga alder/slitasje.
Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.
Våtrom: Bad - Sanitærutstyr TG 2 pga manglende synliggjøring av lekkasjevann fra innebygget

---

[d111_d111 | Side [1]]
-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal

---

[d111_d111 | Side [1]]
sjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Ja
Oppsummering av membran, tettesjikt og sluk TG-2
Det gjøres spesielt oppmerksom på at tekking (membran og mansjetter) ikke er kontrollerbare fordi
dette bare kan gjøres ved å demontere fliser. Denne type destruktive undersøkelser blir aldri
foretatt ved en tilstandskontroll for denne type rapport.
Ikke funnet nevneverdige avvik basert på visuell kontroll i sluk.
Med bakgrunn i alder på

---

[d111_d111 | Side [1]]
okumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen

---

[d111_d111 | Side [1]]
avvik basert på visuell kontroll i sluk.
Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker.
TG 2 pga alder.
Anbefalte tiltak membran, tettesjikt og sluk
Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann.
Sanitærutstyr
Beskrivelse
Inneholder:
- Vegghengt toalett
- Benkeskap med servant
- Dusjhjørne
- Varmtvannsbereder
- Fordelerskap til «rør i rør» vannforsyning
- Opplegg for vaskemaskin
Er det skader på utstyr og

---

[d111_d111 | Side [1]]
 trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Helgeplasset 5 B, 5148

---

[d111_d111 | Side [1]]
on antatt tekket med takbelegg. Styregodkjennelse: Det følger av eierseksjonsameiets
vedtekter at ny eier skal godkjennes av styret.
Bygningsdeler vurdert med TG2: Godkjennelse kan, jf. eiersekjsonsloven § 24, ikke nektes
‑ Overflater på bad grunnet alder/ slitasje. uten saklig grunn.
‑ Membran, tettesjikt og sluk på bad grunnet alder.
‑ Sanitærutstyr på bad grunnet manglende synliggjøring Regnskap/ budsjett/ kostnadsøkninger: Sameiets
av lekkasjevann fra innebygget sisterne. regnskap ligger vedlagt i

---

[d111_d111 | Side [1]]
 dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig

---

[d111_d111 | Side [1]]
Sum alle bygg BRA: 70 m2
Sum alle bygg BRA-i: 65 m2
Rapportdato: 6.2.2026 (Gyldig til 6.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 9 3 0 0
Thomas Frøyen thomas@froyentakst.no Helgeplasset 5 B
GNR: 26 BNR: 334 SNR: 52
Frøyen Takst AS 40099909 5148 Fyllingsdalen
42

## Side 43

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til

---

[d111_d111 | Side [1]]
e installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Helgeplasset 5 B, 5148 Fyllingsdalen 3 av 15
44

## Side 45

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
Boligen

---

[d111_d111 | Side [1]]
ldt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke

---

[d111_d111 | Side [1]]
 konstruksjoner, skal
dette angis særlig.
Helgeplasset 5 B, 5148 Fyllingsdalen 2 av 15
43

## Side 44

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt

---

[d111_d111 | Side [1]]
det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Sprekk i gulvflis i dusjsone.
Er det registrert knirk i gulvet? Ikke aktuelt

---

[d111_d111 | Side [1]]
 av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst

---

[d111_d111 | Side [1]]
er i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting TG-1
Ikke funnet nevneverdige avvik basert på visuell kontroll.
6.2 Vinduer og dører
Beskrivelse
Vinduer/altandør med 2-lags isolerglass i trekarmer.
Entrédør med Brann-/lydklasse B30/35db.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved

---

[d111_d111 | Side [1]]
lamere på forhold
Kjøper aksepterer at det kan forekomme hull og merker som er nevnt i rapporten. Spesielt forhold som er vurdert
etter montering av inventar og utstyr som ikke er en del med TG2 og TG3 bør vurderes nøye, da de indikerer
av overdragelsen. avvik fra normal slitasje og/ eller høy alder, noe som kan
29

## Side 30

OM EIENDOMMEN
innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av takstmannen. Forretningsfører: Bob Bbl
Beskrivelsen av boligen nedenfor

---

[d111_d111 | Side [1]]
 i fellesarealer er målt på stedet dersom tilgjengelig, men ikke kontrollert med hensyn til eierforhold, bruksrett etc.
Helgeplasset 5 B, 5148 Fyllingsdalen 7 av 15
48

## Side 49

6. Hovedrapport
6.1 Balkong, terrasse, platting
Type Balkong
Altan på 11,8 m² med flislagt dekke.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering

---

[d111_d111 | Side [1]]
nnceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Nei
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen

---

[d111_d111 | Side [1]]
r vurderes å etablere en Waterguard i tilknytning til innebygget sisterne uten drensåpning.
Ventilasjon
Type ventilering Mekanisk avtrekk
Er ventilasjonen funksjonstestet? Ja
Oppsummering av ventilasjon TG-1
Avtrekk er testet med papir og det registreres sug i kanalen.
Helgeplasset 5 B, 5148 Fyllingsdalen 14 av 15
55

## Side 56

Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Ja
Er det registrert fukt eller andre skader ved hulltaking? Nei
Oppsummering av fukt TG-0
Ovennevnte vurderingspunkt er

---

[d111_d111 | Side [1]]
l visuell kontroll. For å kontrollere dette må
filter sendes til laboratorium. Dette blir ikke utført i dette oppdraget. Kontrollen i denne rapporten
begrenser seg derfor til å kontrollere om filter fremstår tette og med behov for utskifting.
Ikke funnet nevneverdige avvik basert på visuell kontroll.
6.10 Våtrom: Bad
Overflate
Beskrivelse av overflate
Fliser på gulv- og veggflater
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til

---

[d111_d111 | Side [1]]
ogram for fellesarealer, som fremlegges på det ordinære årsmøtet for
godkjennelse.
Styret kan gjennomføre pålegg gitt av offentlige myndigheter vedrørende eiendommen.
Side 6 av 8

71

## Side 72

§ 15
Felleskostnader
Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet, skal
fordeles mellom sameierne etter sameiebrøken, med mindre særlige grunner taler for å
fordele kostnadene etter nytten for den enkelte bruksenhet eller etter forbruk. Som
felleskostnader anses blant annet:
a)

---

[d111_d111 | Side [1]]
.
Den enkelte sameier skal innen den 1 i hver måned forskuddsvis innbetale et
a kontobeløp, til dekning av sin andel av de årlige felleskostnadene. Beløpets størrelse
fastsettes av årsmøtet eller styret, slik at de samlede akontobeløp med rimelig margin
dekker de felleskostnader som antas å ville påløpe i løpet av ett år. Eventuelt overskudd
skal ikke tilbakebetales, men skal hensyntas ved fastsettelse av akontobeløpet for neste
periode.
Unnlatelse av å betale fastsatt andel av fellesutgifter anses som

---

[d111_d111 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Lånebetingelser fellesgjeld: Sameiet har en total
fellesgjeld per 03.02.2026 på kr 269 931,‑ fordelt på
Estimert totalpris ink. omk
seksjonene:
Kr 4 107 177
Dnb Bank ASA, annuitetslån
Rentesats: 6,85%, flytende rente
Felleskostnader
Total saldo: kr 269 931,‑
Felleskostnader kr 2 801,‑ pr. mnd Andel av saldo: kr 2 787,‑
Innfrielsesdato: 30.06.2029
Felleskostnader inkulderer: Tv og internett, felles
byggforsikring, drift og vedlikehold, renter og avdrag på
felles lån, forretningsførsel

---

[d111_d111 | Side [1]]
 vann, avløp
og renovasjon. Oppgitt beløp er et estimat for hele året.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Det fakturerte beløpet kan avvike fra estimatet.
4 093 677 (Totalpris inkl. omkostninger (uten Fakturering skjer månedlig eller kvartalsvis.
Boligkjøperforsikring))
4 107 177 (Totalpris inkl. omkostninger (med
Fellesgjeld
Boligkjøperforsikring))
Kr 2 787 pr. 03.02.2026
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Lånebetingelser fellesgjeld: Sameiet har en

---

[d111_d111 | Side [1]]
t eller etter forbruk. Som
felleskostnader anses blant annet:
a) eiendomsforsikring, jf § 15 ,
b) kostnader til indre og ytre vedlikehold av fellesarealer,
c) lys/oppvarming av fellesarealer,
d) kostnader ved forretningsførsel og styrehonorarer.
§ 16
Betaling av felleskostnader
Styret skal påse at alle fellesutgifter blir dekket av sameiet slik at det unngås at
kreditorer gjør krav gjeldende mot den enkelte sameier for sameiets forpliktelser.
Den enkelte sameier skal innen den 1 i hver måned forskuddsvis

---

[d111_d111 | Side [1]]
g vedlikehold, renter og avdrag på
felles lån, forretningsførsel og styrehonorar.
26

## Side 27

OM EIENDOMMEN
annet tar deg mot Bergen sentrum, Bønes senter og
Andre kostnader:
Fyllingsdalen Terminal. Fra knutepunktet Fyllingsdalen
TV/ Internett/ Bredbånd: Grunnpakke kabel‑tv og internett terminal går det 13 ulike busslinjer i tillegg til Bybanens
er inkludert i de månedlige felleskostnadene. linje 2.
Fra barna er små, til de er ferdig med grunnutdanningen
Formue:
er det korte avstander fra inngangsdør

---

[d111_d111 | Side [1]]
 en sameier misligholder sin vedlikeholdsplikt, kan sameiermøtet med to
tredjedels flertall beslutte at sameieren pålegges vedlikeholdet. Dersom pålegget ikke
etterkommes, kan sameiermøtet med tre fjerdedels flertall beslutte at
vedlikeholdsarbeidet skal utføres for vedkommende sameiers regning.
§ 14
Vedlikehold av fellesareal
Fellesarealer skal holdes forsvarlig ved like. Det skal utarbeides forslag til årlig
vedlikeholdsprogram for fellesarealer, som fremlegges på det ordinære årsmøtet

---

[d111_d111 | Side [1]]


## Side 19

(Ingen tekst ekstrahert)

## Side 20

(Ingen tekst ekstrahert)

## Side 21

(Ingen tekst ekstrahert)

## Side 22

Plantegning

## Side 23

Plantegning

## Side 24

OM EIENDOMMEN

## Side 25

HELGEPLASSET 5B
OM EIENDOMMEN

## Side 26

OM EIENDOMMEN
Økonomi
Felleskostnadene fordeles på følgende måte:
Tv og internett kr 479,‑
Prisantydning
Fellesutgifter kr 2 322,‑
Kr 3 990 000
Felleskostnadene kan bli besluttet økt etter utarbeidelse
av salgsoppgaven, men styreleder opplyser om at

---

[d111_d111 | Side [1]]
iteen skal legge fram sin innstilling innen fristen for å trykke innkalling til
ordinært årsmøte.
§ 12
Ordensregler
Som ordensregler for eiendommen gjelder Norges Huseierforbunds ordensreglement,
med mindre andre ordensregler blir fastsatt av sameiermøtet.
§ 13
Vedlikehold av bruksenheter
Den enkelte sameier skal for egen regning holde sin bruksenhet forsvarlig ved like slik
at det ikke oppstår skade eller ulempe for de andre sameierne.
Dersom en sameier misligholder sin vedlikeholdsplikt, kan sameiermøtet

---

[d111_d111 | Side [1]]
om krever enighet fra alle seksjonseierne
Alle seksjonseiere må, enten på årsmøtet eller på et annet tidspunkt, uttrykkelig si seg
enige hvis sameiet skal kunne ta beslutning om
a) salg eller bortfeste av hele eller vesentlige deler av eiendommen
b) oppløsning av sameiet
c) tiltak som medfører vesentlig endring av sameiets karakter
d) tiltak som går ut over seksjonseiernes bo- eller bruksinteresser, uavhengig av
størrelsen på kostnaden som tiltaket medfører, og uavhengig av hvor stort
økonomisk ansvar

---

[d111_d111 | Side [1]]
tene.
Flertallskrav for særlige bomiljøtiltak
(1) Tiltak som har sammenheng med seksjonseierens bo- eller bruksinteresser, og som
går ut over vanlig forvaltning, og som fører med seg økonomisk ansvar eller utlegg for
seksjonseierne i fellesskap på mindre enn fem prosent av de årlige felleskostnadene,
besluttes med vanlig flertall av de avgitte stemmene på årsmøtet. Hvis tiltaket fører
med seg økonomisk ansvar eller utlegg for seksjonseierne i fellesskap på mer enn fem
prosent av de årlige felleskostnadene,

---

[d111_d111 | Side [1]]
ng
Eiendommen skal til enhver tid holdes betryggende forsikret i godkjent selskap. Styret
er ansvarlig for at forsikring tegnes og at forsikringspremie betales.
Side 7 av 8

72

## Side 73

Påkostninger på den enkelte bruksenhet som ikke omfattes av sameiets fellesforsikring,
må den enkelte sameier selv forsikre på betryggende måte. Innboforsikring må tegnes
av den enkelte sameier.
§ 19
Panterett for sameiernes forpliktelser
For krav mot en sameier som følger av sameierforholdet, herunder krav om dekning

---

[d111_d111 | Side [1]]
elles rettigheter og plikter, herunder gjennomføringen av
vedtak truffet av årsmøtet eller styret, og plikter som angår fellesareal og fast eiendom
for øvrig.
Side 5 av 8

70

## Side 71

I saker som gjelder vanlig forvaltning og vedlikehold, kan forretningsføreren
representere sameierne på samme måte som styret.
§ 11
Valgkomite
Sameiet skal ha en Valgkomite bestående av minst 2 medlemmer som skal være
seksjonseiere boende i sameiet.
Valgkomiteens oppgaver er å avgi innstilling til årsmøter på kandidater

---

[d111_d111 | Side [1]]
eller krav etter eierseksjonsloven §§ 38 og 39 som er rettet mot en
selv eller ens nærstående.
Dette gjelder også for den som opptrer ved eller som fullmektig.
§ 9
Styret
Sameiet skal ha et styre på 3 til 5 medlemmer som velges av årsmøtet.
Styremedlemmene tjenstegjør i to år med mindre en kortere eller lengre tjenestetid blir
bestemt av det årsmøtet som foretar valget.
Styret skal ha en styreleder som velges særskilt av årsmøtet.
Styret skal sørge for vedlikehold og drift av eiendommen, og ellers sørge

---

[d111_d111 | Side [1]]
al sørge for vedlikehold og drift av eiendommen, og ellers sørge for
forvaltingen av sameiets anliggender i samsvar med lov, vedtekter og vedtak i årsmøtet.
Styret kan ansette forretningsfører og andre funksjonærer, gi instruks for dem, fastsette
deres lønn, føre tilsyn med at de oppfyller sine plikter, samt si dem opp eller gi dem
avskjed.
Styret er vedtaksført når mer enn halvparten av alle styremedlemmer er tilstede. Vedtak
treffes med alminnelig flertall. Ved stemmelikhet gjelder det som møtelederen

---

[d111_d111 | Side [1]]
fellesskap på mer enn fem
prosent av de årlige felleskostnadene, kreves det flertall på minst to tredjedeler av de
avgitte stemmene på årsmøtet.
(2) Hvis tiltakene etter (1) fører med seg et samlet økonomisk ansvar eller utlegg for
enkelte seksjonseiere på mer enn halvparten av folketrygdens grunnbeløp på det
tidspunktet tiltaket besluttes, kan tiltaket bare gjennomføres hvis disse seksjonseierne
uttrykkelig sier seg enige.
Beslutninger som krever enighet fra alle seksjonseierne
Alle seksjonseiere må,

---

[d111_d111 | Side [1]]
ergiattesten. hensynssoner:
‑ Frisiktsone. Berøringsgrad 0,2%
Se fullstendig energiattest fra selger som vedlegg til ‑ Gul støysone. Veistøy, berøringsgrad 14,2%
salgsoppgave. Megler påtar seg ikke ansvar for ‑ Rød støysone. Veistøy, berøringsgrad 1,3%
informasjonen som fremgår av energiattesten.
Planer i nærheten av eiendommen:
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027.
Oppvarming
Bystyret legger til grunn at revisjon av
Boligen har følgende oppvarmingskilder: KPA‑bestemmelsene skal sluttføres

---

[d111_d111 | Side [1]]
ar følgende oppvarmingskilder: KPA‑bestemmelsene skal sluttføres med vedtak Bystyret
‑ Elektrisk oppvarming i første kvartal 2027. Hovedmålet med revisjon av
‑ Gulvvarme på bad KPA‑bestemmelsene er forenkling, fortgang og
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre
Hvis et rom på visningen mangler fast installert gode boliger og nabolag.
oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Godkjente tiltak i nærheten av eiendommen:
Nåværende eier har tegnet avtale om Norgespris på ‑

---

[d111_d111 | Side [1]]
in
1. Egen bil
Boots apotek Oasen 16 min
2. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene
Nærhet til skog og mark 91/100
39% i barnehagealder
35% 6-12 år
Støynivået
14% 13-15 år
Lite støynivå 89/100 12% 16-18 år
Kollektivtilbud
Veldig bra 83/100
Familiesammensetning
Sport
Par m. barn
Mowinckelbanen 7 min
Ballspill 0.6 km
Par u. barn
Langhellebanen 13 min
Ballspill 0.9 km
Sprek & Blid Sissel's 16 min Enslig m. barn
SATS Oasen 16 min
Enslig u. barn
Boligmasse
Flerfamilier
5% enebolig
52% rekkehus 0%

---

[d111_d111 | Side [1]]
te
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 84/100
Etablerere
Kvalitet på skolene
Eldre
Bra 70/100
Naboskapet
Offentlig transport Høflige 65/100
Benshaugen øvre 3 min
Linje 15, 46 0.2 km
Aldersfordeling
Oasen terminal 18 min
Totalt 13 ulike linjer 1.6 km
Fyllingsdalen terminal 19 min Linje 2 1.6 km
Bergen busstasjon 8 min
Buss, tog, trikk 5.7 km
Bergen Nøstet kystrutekai 8 min
Linje HAV, HUR 5.1 km
Skoler
Løvås Oppveksttun - skole (1-7 kl.) 18 min
243 elever, 14

---

[d111_d111 | Side [1]]
ngsdalen med Mindemyren. Dette gjør det
innen 12 minutters gange fra boligen og Kiwi Oasen innen mulig å ta løpeturen innendørs! Videre finner du SATS på
15 minutters gange. På Oasen senter finner man også et Oasen og MOVA Fylingsdalen like ved.
bredt servicetilbud med butikker, restauranter, kaféer,
apotek, treningssenter og bar.
Barnehage/ Skole
Kollektivtilbudet i området er svært bra med kun 3 Barnehage/ Skole/ Fritid: Barnehager:
minutters gange til nærmeste bussholdeplass, 13 min gange til Minken

---

[d111_d111 | Side [1]]
testen er basert på nåværende eiers/ datert 05.07.2011, regulert til boligbebyggelse,
husstandens forbruk og utgifter de siste årene. Forbruket grønnstruktur, lekeplass, gang‑ sykkelvei, kjøreveg og
kan variere avhengig av faktorer som antall parkering.
familiemedlemmer, ønsket innetemperatur, egne avtaler
om energiforsyning med mer. Megler påtar seg ikke Eiendommen befinner seg innenfor følgende
ansvar for informasjonen som fremgår av energiattesten. hensynssoner:
‑ Frisiktsone. Berøringsgrad 0,2%
Se

---

[d111_d111 | Side [1]]
?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
Helgeplasset 5 B, 5148 Fyllingsdalen 9 av 15
50

## Side 51

6.5 Avløpsrør
Type avløpsrør Plast
Er det gjennomført arbeider på anlegget etter byggeår? Nei
Er det manglende lufting av kloakk over tak? Ukjent
Er det sen avrenning fra tappested? Nei
Mangler det stakemuligheter på avløpsanlegget? Nei
Har avløpsrør nådd en alder som gir økt

---

[d111_d111 | Side [1]]
slig u. barn
Boligmasse
Flerfamilier
5% enebolig
52% rekkehus 0% 51%
27% blokk
16% annet Lynghaug/Helgeplasset
Bergen
Norge
Sivilstand
Norge
«Alt ligger like utenfor døren. Oasen
kjøpesenter, leger, bibliotek, Gift 29% 33%
bussterminal mm»
Ikke gift 51% 54%
Sitat fra en lokalkjent
Separert 11% 9%
Enke/Enkemann 8% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer

---

[d111_d111 | Side [1]]
 lekkasjevann fra innebygget sisterne. regnskap ligger vedlagt i salgsoppgaven.
Utvidet el‑kontroll:
Vedtekter/ husordensregler
Boligen har et eldre el‑anlegg uten dokumentasjon. Det
bør gjennomføres en utvidet el‑kontroll av en kvalifisert Sameiets vedtekter ligger vedlagt i salgsoppgaven.
elektrofaglig person, og nødvendige tiltak vurderes
deretter.
Energimerke
Energikarakter: D
Øvrig
Energifarge: Rød
informasjon
Adresse Info energiklasse
Helgeplasset 5B, 5148 FYLLINGSDALEN Alle eiendommer som selges

---

[d111_d111 | Side [1]]
23 Areal- og volum-beregninger av bygninger. Arealet gjelder for tidspunktet da boligen ble målt.
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift
Arealet beskriver boligens bruksareal i tre definerte kategorier:
Internt
BRA-i Bruksareal innenfor boenhetens omsluttende vegger. Bruksenheten kan bestå av flere boenheter.
bruksareal
Eksternt Bruksareal av rom som tilhører boenheten med adkomst via fellesarealer eller utvendig adkomst. Veggareal mellom
BRA-e
bruksareal BRA-i og

---

[d111_d111 | Side [1]]
åtrom vil derfor gi uklare indikasjoner. Rommet fremstår tørt på befaringsdagen.
Dokumentasjon
Fremlagt dokumentasjon Nei
6.11 Ikke relevante bygningsdeler
Følgende bygningsdeler er angitt som finnes ikke/ikke relevant:
Rom under terreng
Takkonstruksjon og loft
Vannbåren varme
Varmesentral
Helgeplasset 5 B, 5148 Fyllingsdalen 15 av 15
56

## Side 57

Adresse Helgeplasset 5b
Postnr 5148
Sted Bergen
Andels- / 502
/leilighetsnr.
Gnr. 26
Bnr. 334
Seksjonsnr. 52
Festenr. 4601
Bygn. nr. 4
Bolignr. 5
Merkenr.

---

[d111_d111 | Side [1]]
ekonstruksjoner med platet fasade. Vinduer med isolerglass.
Flat takkonstruksjon antatt tekket med takbelegg.
OVERFLATER
Gulv: Fliser på bad. Parkett på øvrige rom.
Vegg: Fliser på bad. Ellers malte flater.
Tak: Malte flater.
OPPVARMING
Elektrisk oppvarming og gulvvarme på bad.
VENTILASJON
Balansert ventilasjon.
5. Arealinformasjon
Helgeplasset 5 B, 5148 Fyllingsdalen 5 av 15
46

## Side 47

Arealmålingen er basert på Norsk standard 3940:2023 Areal- og volum-beregninger av bygninger. Arealet gjelder for

---

[d111_d111 | Side [1]]
 grunnutdanningen
Formue:
er det korte avstander fra inngangsdør til barnehager og
Andel fellesformue: Kr 17 599 skoler. Det ligger tre barnehager i gangavstand fra
boligen, Kidsa Ospeli, Minken barnehage og Nebbestølen
barnehage, noe som gjør at henting og levering kan skje
Formuesverdi
på en effektiv måte i en travel hverdag. Når skolesekken
Formuesverdi primær: Kr 901 847 (2024) tas på for første gang og foreldre og barn er spente på
den første skoledagen, blir barna tatt godt imot ved
Formuesverdi

---

[d111_d111 | Side [1]]
 og gjeldende
regelverk, eller at det senere er utført arbeid på bygget
Adkomst
som ikke er byggemeldt eller godkjent.
På høyre side i annonsen finner du et kartutsnitt. Ved å
klikke på kartet kan du enkelt planlegge din rute fra valgt
Innhold
startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger for enkel orientering. Leiligheten ligger i byggets 1. etasje og inneholder:
BRA‑i 65m²: Entré, kott, bad, 2 soverom og stue/ kjøkken.
Tomt
Tomtetype: Eiet I tillegg har leiligheten en

---

[d111_d111 | Side [1]]
gen tas det hensyn til din boligs beliggenhet, Beliggenheten byr på flotte turmuligheter i naturskjønne
areal, byggeår og type bolig. Formuesverdien er en omgivelser. Turstien opp mot Løvstakken, som er ett av
prosentandel av denne boligverdien.For mer informasjon de 7 byfjellene, finner man like utenfor egen inngangsdør.
om formuesverdi, se Skatteetatens nettsider. Destinasjonen er perfekt for søndagsturen. Videre ligger
Storavatnet like i nærheten av boligen. Turen rundt
vannet passer for hele familien,

---

[d111_d111 | Side [1]]
ge
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå

---

[d111_d111 | Side [1]]
endingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven §

---

[d111_d111 | Side [1]]
 ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 –

---

[d111_d111 | Side [1]]
øke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom

---

[d111_d111 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til

---

[d111_d111 | Side [1]]
vet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring

---

[d111_d111 | Side [1]]
er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: BH 4
12006230
:ecnerefer
tnemucoD
41

## Side 42

Helgeplasset 5 B
5148 FYLLINGSDALEN
Tilstandsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 2009
Hovedbygg BRA: 65 m2
Hovedbygg BRA-i: 65 m2
Sum alle bygg BRA: 70 m2
Sum alle bygg BRA-i: 65 m2
Rapportdato:

---

[d111_d111 | Side [1]]
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

[d111_d111 | Side [1]]
boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved

---

[d111_d111 | Side [1]]
det som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller

---

[d111_d111 | Side [1]]
r godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som

---

[d111_d111 | Side [1]]
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

[d111_d111 | Side [1]]
dre avvik er tydelig avtalt mellom kjøper og
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
registre som kommunen og Kartverket. Det er viktig

---

[d111_d111 | Side [1]]
trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på

---

[d111_d111 | Side [1]]
e boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen,

---

[d111_d111 | Side [1]]
ERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Bergen
Oppdragsnr.
03260021
Selger 1 navn
Bente Hellevik
Gateadresse
Helgeplasset 5B
Poststed Postnr
FYLLINGSDALEN 5148
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2021
Hvor lenge har du eid boligen?
Antall år 4
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap

---

[d111_d111 | Side [1]]
ikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side

---

[d111_d111 | Side [1]]
nnen. Forretningsfører: Bob Bbl
Beskrivelsen av boligen nedenfor er hentet direkte fra Sameiets forsikringsselskap: Gjensidige Forsikring ASA
tilstandsrapporten:
Polisenummer fellesforsikring: 87336088
Grunnmur, bærende konstruksjoner og etasjeskillere av
betong. Yttervegger av betong‑ og trekonstruksjoner Forkjøpsrett: Det er ikke forkjøpsrett i sameiet.
med platet fasade. Vinduer med isolerglass. Flat
takkonstruksjon antatt tekket med takbelegg. Styregodkjennelse: Det følger av

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Eldre elektrisk anlegg uten dokumentasjon – krever utvidet el-kontroll",
      "evidence": [
        "Boligen har et eldre elanlegg uten dokumentasjon. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.",
        "Fremkommer eksplisitt i rapportsammendrag under 'Utvidet el-kontroll' i tilstandsrapporten."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Bad med TG2 – overflater, membran/tettesjikt og sanitærutstyr har avvik grunnet alder og slitasje, med usikker restlevetid og risiko for fuktskader",
      "evidence": [
        "Våtrom: Bad - Overflater TG 2 pga alder/slitasje.",
        "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.",
        "Våtrom: Bad - Sanitærutstyr TG 2 pga manglende synliggjøring av lekkasjevann fra innebygget sisterne.",
        "Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.",
        "Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann.",
        "Det vurderes å etablere en Waterguard i tilknytning til innebygget sisterne uten drensåpning.",
        "Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja. Sprekk i gulvflis i dusjsone."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 som kjøper må overta",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Legalpant – sameiet har panterett i seksjonen på inntil 2G som har prioritet foran tinglyste banklån",
      "evidence": [
        "legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Terrassefliser lagt av ufaglært – arbeid på terrasse/fasade er utført uten faglig kompetanse, noe som kan medføre skjulte feil",
      "evidence": [
        "Svar Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Terrassefliser lagt av forrige eier som var ufaglært.",
        "Terrassefliser lagt av forrige eier som var ufaglært.",
        "Balkong/terrasse er vurdert til TG-1 (ikke funnet nevneverdige avvik basert på visuell kontroll), men ufaglært arbeid er eksplisitt opplyst."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R6",
      "description": "Eiendommen ligger delvis i gul og rød støysone (veistøy), noe som kan påvirke bokvalitet og verdi",
      "evidence": [
        "Gul støysone. Veistøy, berøringsgrad 14,2%",
        "Rød støysone. Veistøy, berøringsgrad 1,3%"
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Fellesgjeld med flytende rente på 6,85% – renterisiko frem til innfrielse 30.06.2029",
      "evidence": [
        "Sameiet har en total fellesgjeld per 03.02.2026 på kr 269 931,‑ fordelt på seksjonene: Dnb Bank ASA, annuitetslån. Rentesats: 6,85%, flytende rente. Total saldo: kr 269 931,‑. Andel av saldo: kr 2 787,‑. Innfrielsesdato: 30.06.2029."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Felleskostnader kan økes etter utarbeidelse av salgsoppgaven – usikkerhet om fremtidige kostnader",
      "evidence": [
        "Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven, men styreleder opplyser om at det per tid ikke er planer om noen økning og at fremtidig vedlikehold dekkes av felleskostnadene."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R9",
      "description": "Tinglyst veirett over eiendommen (gnr. 26, bnr. 334) til fordel for naboeiendommer – kan begrense bruken av eiendommen",
      "evidence": [
        "26.02.2008 - Dokumentnr: 165022 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:359",
        "03.04.2008 - Dokumentnr: 264026 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:107. Gnr. 26, bnr. 107 gis veirett over gnr 26, bnr 334.",
        "09.04.2008 - Dokumentnr: 284856 - Best. om adkomstrett. Rettighetshaver: Knr:4601 Gnr:26 Bnr:258. Eiendommen gnr 26 bnr 258 i Bergen kommune gis ved denne erklæring bruksrett til vei/kjøreadkomst over eiendommen gnr.26 bnr 334."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Ingen radonmåling er foretatt – potensiell helserisiko for beboere er ikke avklart",
      "evidence": [
        "21 Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Energikarakter D (rød) – boligen har dårlig energieffektivitet, noe som kan medføre høye strømkostnader",
      "evidence": [
        "Energikarakter: D. Energifarge: Rød.",
        "Boligen har elektrisk oppvarming og gulvvarme på bad."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Godkjenning av ny eier kreves av styret – kan forsinke overtakelse, selv om nekting krever saklig grunn",
      "evidence": [
        "Styregodkjennelse: Det følger av eierseksjonsameiets vedtekter at ny eier skal godkjennes av styret. Godkjennelse kan, jf. eierseksjonsloven § 24, ikke nektes uten saklig grunn."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R13",
      "description": "Byggeaktivitet i nærheten – rammetillatelse for lagerhall og riving av eksisterende bygg kan påvirke nærmiljøet",
      "evidence": [
        "Eiendom: 26/299. Hus for dyr/landbr.lager/silo. Bygning godkjent for riving/brenning datert 10.03.2023.",
        "Eiendom: 26/299. Lagerhall. Rammetillatelse datert 10.03.2023. Saksnr: 202222157"
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R14",
      "description": "Pågående revisjon av kommuneplanens arealdel (KPA 2027) – fremtidige reguleringsendringer kan påvirke eiendommens omgivelser",
      "evidence": [
        "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
        "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser, for å sikre gode boliger og nabolag."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R15",
      "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvaret påhviler sameiet og kan medføre uventede kostnader",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Avløpsrør er av plast, og det er ikke gjennomført arbeider på anlegget etter byggeår."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Kjøper har egenandel på inntil kr 10 000 ved krav om prisavslag eller erstatning – finansiell risiko ved eventuelle mangler",
      "evidence": [
        "Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel)."
      ],
      "source_documents": [
        "d111_d111"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "avløpsrør alder tilstand TG",
    "balkong terrasse TG tilstand fliser ufaglært",
    "radonmåling krav leilighet første etasje",
    "norgespris bindingstid vilkår kjøper",
    "fellesgjeld IN lån sameiet vedlikehold planlagte tiltak",
    "byggeår 2009 teknisk tilstand generell vurdering",
    "støysone rød gul tiltak isolasjon"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Eldre el-anlegg (0.97):** Meget godt støttet. Eksplisitt nevnt i tilstandsrapportens sammendrag under \"Utvidet el-kontroll\". Confidence opprettholdes på 0.97.\n\n**R2 – Bad TG2 (0.95):** Meget godt støttet med multiple evidenspunkter: TG2 på overflater, membran/tettesjikt og sanitærutstyr, sprekk i gulvflis, usikker restlevetid. Confidence justeres opp til 0.97 da evidensen er svært solid og mangfoldig.\n\n**R3 – Norgespris bindingstid (0.95):** Godt støttet. Avtalen er eksplisitt beskrevet med bindingstid til 31.12.2026 og at den følger boligen. Confidence opprettholdes på 0.95.\n\n**R4 – Legalpant 2G (0.93):** Godt støttet. Dokumentene beskriver tydelig legalpant for sameiet og kommunen, med prioritet foran tinglyste lån. Confidence opprettholdes på 0.93.\n\n**R5 – Ufaglært terrassearbeid (0.88):** Støttet av egenerklæring. Imidlertid viser tilstandsrapporten at balkong/terrasse er vurdert til TG-1 uten nevneverdige avvik ved visuell kontroll. Dette reduserer risikoen noe, men ufaglært arbeid er fortsatt en reell risiko for skjulte feil. Confidence justeres ned til 0.82.\n\n**R6 – Støysoner (0.90):** Godt støttet med konkrete berøringsgrader. Rød sone er lav (1,3%) og gul sone er moderat (14,2%). Confidence opprettholdes på 0.90.\n\n**R7 – Fellesgjeld flytende rente (0.88):** Godt støttet med konkrete tall. Andel fellesgjeld er relativt lav (kr 2 787). Confidence opprettholdes på 0.88.\n\n**R8 – Felleskostnader kan økes (0.82):** Støttet, men styreleder opplyser at det ikke er planer om økning. Risikoen er reell men moderat. Confidence justeres ned til 0.75 da styreleder aktivt avkrefter planer om økning.\n\n**R9 – Tinglyst veirett (0.87):** Meget godt støttet med tre tinglyste dokumenter. Confidence opprettholdes på 0.87.\n\n**R10 – Ingen radonmåling (0.85):** Støttet. Leiligheten er i 1. etasje, noe som øker relevansen av radonrisiko. Confidence justeres ned til 0.80 da dette er en leilighet (ikke direkte på bakkeplan med krypkjeller e.l.), men risikoen er fortsatt reell.\n\n**R11 – Energikarakter D (0.85):** Godt støttet. Elektrisk oppvarming bekreftes. Confidence opprettholdes på 0.85.\n\n**R12 – Styregodkjennelse (0.75):** Støttet, men loven begrenser nektingsadgangen til saklig grunn. Risikoen er lav i praksis. Confidence justeres ned til 0.70.\n\n**R13 – Byggeaktivitet naboeiendommen (0.78):** Støttet, men rammetillatelsen er fra 2023 og det er uklart om byggearbeidet er ferdigstilt eller pågår. Confidence justeres ned til 0.65 da det er usikkert om dette fortsatt er en aktiv risiko.\n\n**R14 – KPA 2027 revisjon (0.75):** Støttet, men formålet med revisjonen er beskrevet som forenkling og forutsigbarhet – ikke nødvendigvis negativt for eiendommen. Confidence justeres ned til 0.65.\n\n**R15 – Private stikkledninger (0.80):** Godt støttet. Avløpsrør er av plast og ingen arbeider er utført etter byggeår. Confidence opprettholdes på 0.80.\n\n**R16 – Egenandel kr 10 000 (0.80):** Godt støttet med eksplisitt tekst. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer identifisert:**\n- Leiligheten er i 1. etasje – økt risiko for innbrudd og støy fra uteområder er ikke nevnt.\n- Balansert ventilasjon: Rapporten nevner balansert ventilasjon, men filter er ikke kontrollert for innhold (kun visuell kontroll). Potensiell luftkvalitetsrisiko.\n- Manglende ferdigattest: Tilstandsrapporten angir \"Ikke kontrollert\" for manglende ferdigattest/midlertidig brukstillatelse – dette er en potensiell risiko som ikke er identifisert.\n- Hvitevarer på kjøkken følger ikke med – dette er opplyst men kan overraske kjøper.\n"
}

## Raw Response
```json
{
  "id": "msg_01CyjHbtCqdhrTaVcNiXEqeN",
  "container": null,
  "content": [
    {
      "id": "toolu_01Hj2zFpdDyamhHLHqBAUsXE",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Eldre elektrisk anlegg uten dokumentasjon – krever utvidet el-kontroll",
            "evidence": [
              "Boligen har et eldre elanlegg uten dokumentasjon. Det bør gjennomføres en utvidet el-kontroll av en kvalifisert elektrofaglig person, og nødvendige tiltak vurderes deretter.",
              "Fremkommer eksplisitt i rapportsammendrag under 'Utvidet el-kontroll' i tilstandsrapporten."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Bad med TG2 – overflater, membran/tettesjikt og sanitærutstyr har avvik grunnet alder og slitasje, med usikker restlevetid og risiko for fuktskader",
            "evidence": [
              "Våtrom: Bad - Overflater TG 2 pga alder/slitasje.",
              "Våtrom: Bad - Membran, tettesjikt og sluk TG 2 pga alder.",
              "Våtrom: Bad - Sanitærutstyr TG 2 pga manglende synliggjøring av lekkasjevann fra innebygget sisterne.",
              "Med bakgrunn i alder på tettesjiktet / overflater er restlevetiden på rommet usikker. TG 2 pga alder.",
              "Det anbefales å installere et dusjkabinett for å begrense overflater for belastning med fritt vann.",
              "Det vurderes å etablere en Waterguard i tilknytning til innebygget sisterne uten drensåpning.",
              "Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja. Sprekk i gulvflis i dusjsone."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026 som kjøper må overta",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Legalpant – sameiet har panterett i seksjonen på inntil 2G som har prioritet foran tinglyste banklån",
            "evidence": [
              "legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Terrassefliser lagt av ufaglært – arbeid på terrasse/fasade er utført uten faglig kompetanse, noe som kan medføre skjulte feil",
            "evidence": [
              "Svar Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Terrassefliser lagt av forrige eier som var ufaglært.",
              "Terrassefliser lagt av forrige eier som var ufaglært.",
              "Balkong/terrasse er vurdert til TG-1 (ikke funnet nevneverdige avvik basert på visuell kontroll), men ufaglært arbeid er eksplisitt opplyst."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R6",
            "description": "Eiendommen ligger delvis i gul og rød støysone (veistøy), noe som kan påvirke bokvalitet og verdi",
            "evidence": [
              "Gul støysone. Veistøy, berøringsgrad 14,2%",
              "Rød støysone. Veistøy, berøringsgrad 1,3%"
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Fellesgjeld med flytende rente på 6,85% – renterisiko frem til innfrielse 30.06.2029",
            "evidence": [
              "Sameiet har en total fellesgjeld per 03.02.2026 på kr 269 931,‑ fordelt på seksjonene: Dnb Bank ASA, annuitetslån. Rentesats: 6,85%, flytende rente. Total saldo: kr 269 931,‑. Andel av saldo: kr 2 787,‑. Innfrielsesdato: 30.06.2029."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Felleskostnader kan økes etter utarbeidelse av salgsoppgaven – usikkerhet om fremtidige kostnader",
            "evidence": [
              "Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven, men styreleder opplyser om at det per tid ikke er planer om noen økning og at fremtidig vedlikehold dekkes av felleskostnadene."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R9",
            "description": "Tinglyst veirett over eiendommen (gnr. 26, bnr. 334) til fordel for naboeiendommer – kan begrense bruken av eiendommen",
            "evidence": [
              "26.02.2008 - Dokumentnr: 165022 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:359",
              "03.04.2008 - Dokumentnr: 264026 - Bestemmelse om veg. Rettighetshaver: Knr:4601 Gnr:26 Bnr:107. Gnr. 26, bnr. 107 gis veirett over gnr 26, bnr 334.",
              "09.04.2008 - Dokumentnr: 284856 - Best. om adkomstrett. Rettighetshaver: Knr:4601 Gnr:26 Bnr:258. Eiendommen gnr 26 bnr 258 i Bergen kommune gis ved denne erklæring bruksrett til vei/kjøreadkomst over eiendommen gnr.26 bnr 334."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Ingen radonmåling er foretatt – potensiell helserisiko for beboere er ikke avklart",
            "evidence": [
              "21 Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Energikarakter D (rød) – boligen har dårlig energieffektivitet, noe som kan medføre høye strømkostnader",
            "evidence": [
              "Energikarakter: D. Energifarge: Rød.",
              "Boligen har elektrisk oppvarming og gulvvarme på bad."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Godkjenning av ny eier kreves av styret – kan forsinke overtakelse, selv om nekting krever saklig grunn",
            "evidence": [
              "Styregodkjennelse: Det følger av eierseksjonsameiets vedtekter at ny eier skal godkjennes av styret. Godkjennelse kan, jf. eierseksjonsloven § 24, ikke nektes uten saklig grunn."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R13",
            "description": "Byggeaktivitet i nærheten – rammetillatelse for lagerhall og riving av eksisterende bygg kan påvirke nærmiljøet",
            "evidence": [
              "Eiendom: 26/299. Hus for dyr/landbr.lager/silo. Bygning godkjent for riving/brenning datert 10.03.2023.",
              "Eiendom: 26/299. Lagerhall. Rammetillatelse datert 10.03.2023. Saksnr: 202222157"
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R14",
            "description": "Pågående revisjon av kommuneplanens arealdel (KPA 2027) – fremtidige reguleringsendringer kan påvirke eiendommens omgivelser",
            "evidence": [
              "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
              "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser, for å sikre gode boliger og nabolag."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R15",
            "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvaret påhviler sameiet og kan medføre uventede kostnader",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Avløpsrør er av plast, og det er ikke gjennomført arbeider på anlegget etter byggeår."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Kjøper har egenandel på inntil kr 10 000 ved krav om prisavslag eller erstatning – finansiell risiko ved eventuelle mangler",
            "evidence": [
              "Ved beregning av krav om prisavslag eller erstatning må kjøper selv dekke kostnader med inntil kr 10 000 (som en egenandel)."
            ],
            "source_documents": [
              "d111_d111"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "avløpsrør alder tilstand TG",
          "balkong terrasse TG tilstand fliser ufaglært",
          "radonmåling krav leilighet første etasje",
          "norgespris bindingstid vilkår kjøper",
          "fellesgjeld IN lån sameiet vedlikehold planlagte tiltak",
          "byggeår 2009 teknisk tilstand generell vurdering",
          "støysone rød gul tiltak isolasjon"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Eldre el-anlegg (0.97):** Meget godt støttet. Eksplisitt nevnt i tilstandsrapportens sammendrag under \"Utvidet el-kontroll\". Confidence opprettholdes på 0.97.\n\n**R2 – Bad TG2 (0.95):** Meget godt støttet med multiple evidenspunkter: TG2 på overflater, membran/tettesjikt og sanitærutstyr, sprekk i gulvflis, usikker restlevetid. Confidence justeres opp til 0.97 da evidensen er svært solid og mangfoldig.\n\n**R3 – Norgespris bindingstid (0.95):** Godt støttet. Avtalen er eksplisitt beskrevet med bindingstid til 31.12.2026 og at den følger boligen. Confidence opprettholdes på 0.95.\n\n**R4 – Legalpant 2G (0.93):** Godt støttet. Dokumentene beskriver tydelig legalpant for sameiet og kommunen, med prioritet foran tinglyste lån. Confidence opprettholdes på 0.93.\n\n**R5 – Ufaglært terrassearbeid (0.88):** Støttet av egenerklæring. Imidlertid viser tilstandsrapporten at balkong/terrasse er vurdert til TG-1 uten nevneverdige avvik ved visuell kontroll. Dette reduserer risikoen noe, men ufaglært arbeid er fortsatt en reell risiko for skjulte feil. Confidence justeres ned til 0.82.\n\n**R6 – Støysoner (0.90):** Godt støttet med konkrete berøringsgrader. Rød sone er lav (1,3%) og gul sone er moderat (14,2%). Confidence opprettholdes på 0.90.\n\n**R7 – Fellesgjeld flytende rente (0.88):** Godt støttet med konkrete tall. Andel fellesgjeld er relativt lav (kr 2 787). Confidence opprettholdes på 0.88.\n\n**R8 – Felleskostnader kan økes (0.82):** Støttet, men styreleder opplyser at det ikke er planer om økning. Risikoen er reell men moderat. Confidence justeres ned til 0.75 da styreleder aktivt avkrefter planer om økning.\n\n**R9 – Tinglyst veirett (0.87):** Meget godt støttet med tre tinglyste dokumenter. Confidence opprettholdes på 0.87.\n\n**R10 – Ingen radonmåling (0.85):** Støttet. Leiligheten er i 1. etasje, noe som øker relevansen av radonrisiko. Confidence justeres ned til 0.80 da dette er en leilighet (ikke direkte på bakkeplan med krypkjeller e.l.), men risikoen er fortsatt reell.\n\n**R11 – Energikarakter D (0.85):** Godt støttet. Elektrisk oppvarming bekreftes. Confidence opprettholdes på 0.85.\n\n**R12 – Styregodkjennelse (0.75):** Støttet, men loven begrenser nektingsadgangen til saklig grunn. Risikoen er lav i praksis. Confidence justeres ned til 0.70.\n\n**R13 – Byggeaktivitet naboeiendommen (0.78):** Støttet, men rammetillatelsen er fra 2023 og det er uklart om byggearbeidet er ferdigstilt eller pågår. Confidence justeres ned til 0.65 da det er usikkert om dette fortsatt er en aktiv risiko.\n\n**R14 – KPA 2027 revisjon (0.75):** Støttet, men formålet med revisjonen er beskrevet som forenkling og forutsigbarhet – ikke nødvendigvis negativt for eiendommen. Confidence justeres ned til 0.65.\n\n**R15 – Private stikkledninger (0.80):** Godt støttet. Avløpsrør er av plast og ingen arbeider er utført etter byggeår. Confidence opprettholdes på 0.80.\n\n**R16 – Egenandel kr 10 000 (0.80):** Godt støttet med eksplisitt tekst. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer identifisert:**\n- Leiligheten er i 1. etasje – økt risiko for innbrudd og støy fra uteområder er ikke nevnt.\n- Balansert ventilasjon: Rapporten nevner balansert ventilasjon, men filter er ikke kontrollert for innhold (kun visuell kontroll). Potensiell luftkvalitetsrisiko.\n- Manglende ferdigattest: Tilstandsrapporten angir \"Ikke kontrollert\" for manglende ferdigattest/midlertidig brukstillatelse – dette er en potensiell risiko som ikke er identifisert.\n- Hvitevarer på kjøkken følger ikke med – dette er opplyst men kan overraske kjøper.\n"
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
    "input_tokens": 22307,
    "output_tokens": 4966,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
