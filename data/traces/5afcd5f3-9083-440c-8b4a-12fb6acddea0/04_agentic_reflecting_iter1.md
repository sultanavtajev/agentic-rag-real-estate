# Trace: agentic_reflecting_iter1
- **Run ID:** 5afcd5f3-9083-440c-8b4a-12fb6acddea0
- **Tidspunkt:** 2026-03-30T17:28:39.875599+00:00
- **Varighet:** 105.16s
- **Input tokens:** 23625
- **Output tokens:** 4916

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
Risiko 1: Planlagt rørfornying med potensielle økte felleskostnader: Borettslaget har planlagt rørfornying (igangsatt september 2025) som krever låneopptak og vil medføre økte felleskostnader for alle andelseiere, inkludert kjøper.
  Confidence: 0.95
  Evidens: Styret har derfor vurdert alternative løsninger og engasjert rådgivende entreprenører for å vurdere rørenes faktiske tilstand.; Det er innhentet to konkurrerende pristilbud på rørfornying. Styret har – under forutsetning av generalforsamlingens godkjenning – valgt å akseptere tilbudet fra TT-Teknikk AS. Arbeidet er planlagt igangsatt september 2025.; Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.

Risiko 2: Høy fellesgjeld og løpende felleskostnader: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den totale pantsikrede gjelden er nær 7,9 millioner kroner. Kjøper overtar andel av denne gjelden.
  Confidence: 0.92
  Evidens: Bokført langsiktig gjeld 6 734 992; Boligselskapets pantesikrede gjeld 7 934 992; Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170; Antall andeler, andel gjeld og sum av fellesgjeld lån 16364224137 40 22 615 904 600

Risiko 3: Ulovlig romendring – entré slått sammen med soverom uten søknad: Tilstandsrapporten avdekker at entré er slått sammen med tilstøtende soverom, noe som normalt er søknadspliktig og kan være ulovlig.
  Confidence: 0.9
  Evidens: Entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.; Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.

Risiko 4: TG2 på etasjeskille/gulv mot grunn – membran/tettesjikt har passert halvparten av forventet brukstid: Tilstandsgrad 2 er gitt for etasjeskille/gulv mot grunn, noe som indikerer at vedlikehold eller utbedring kan bli nødvendig.
  Confidence: 0.88
  Evidens: Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert.; Det er nå ingen symptomer på funksjonssvekkelse, men...; Etasjeskille/gulv mot grunn Årstall: 2021 Kilde: Tidligere salgsoppgaver

Risiko 5: Radonmåling ikke fullført – verdier til analyse: Selger har utført radonmåling, men verdiene er ikke ferdig analysert på tidspunktet for egenerklæringen. Kjøper kjenner ikke til faktisk radonkonsentrasjon i boligen.
  Confidence: 0.88
  Evidens: Er det utført radonmåling? Ja; Når ble målingen utført og hva ble måleverdiene? Ikke fått verdiene enda. De er til analyse.; Det bør gjennomføres radonmålinger.

Risiko 6: Panteheftelse på borettslagsandelen – DNB Bank ASA og DNB Boligkreditt AS har pant på NOK 2 850 000: Det er registrert et pantedokument på andelen som kjøper må forholde seg til ved overtakelse.
  Confidence: 0.85
  Evidens: 2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000; PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006; PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551

Risiko 7: Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av Ås sentralområde og gang-/sykkelvei langs fylkesvei 152, som kan medføre endringer i nærområdet.
  Confidence: 0.75
  Evidens: Reguleringsplaner under arbeid i nærheten (500 meter); Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt; Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt; Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status...

Risiko 8: Elektriske arbeider utført – samsvarserklæring foreligger, men el-tilsyn bør vurderes: Det er utført tilleggsarbeider på det elektriske anlegget etter 1999, inkludert omtrekking av stue og soverom. Tilstandsrapporten anbefaler konsultasjon med elektrofaglig fagperson ved behov.
  Confidence: 0.72
  Evidens: Er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Ja; Eksisterer det samsvarserklæring? Ja; Ifølge egenerklæring er det utført flere håndverkertjenester på boligen de siste 5 årene. Dette omfatter blant annet elektrikerarbeider i form av omtrekking av stue og soverom, etablering av...; Bygningssakkyndig kan anbefale å konsultere offentlige myndigheter eller kvalifisert elektrofaglig fagperson ved behov for grundigere undersøkelser.

Risiko 9: Kvikkleirevurdering kan være relevant – eiendommen ligger under marin grense: Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Det er ikke dokumentert at slik vurdering er gjort for eiendommen.
  Confidence: 0.6
  Evidens: § 12.1 Kvikkleire: For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.; Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3

Risiko 10: Begrenset bankinnskudd og disponible midler i borettslaget – lav finansiell buffer: Borettslaget har relativt begrensede disponible midler (kr 343 345) og en avsetningskonto med kun kr 108 849,61, noe som gir liten buffer for uforutsette utgifter.
  Confidence: 0.78
  Evidens: C. Disponible midler 343 345 270 531; Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.; Innestående bank 355 709 414 546

Risiko 11: Tilstandsrapporten er ingen garanti mot skjulte feil og mangler: Rapporten er basert på visuell gjennomgang uten inngrep i byggverket, og kan ikke avdekke skjulte feil, skader eller mangler.
  Confidence: 0.85
  Evidens: Rapporten gir en vurdering av byggverk og bygningsdeler som bygningssakkyndig har observert, og som fremkommer av Forskrift til avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.

Risiko 12: Fellesobligasjon for borettslagsinnskudd fra 1973 – historisk heftelse: Det er registrert en fellesobligasjon for borettslagsinnskudd fra 1973 på NOK 1 200 000, som fortsatt er tinglyst på eiendommen.
  Confidence: 0.7
  Evidens: 1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000; Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE

Dokumentkontekst:
[d001_d001 | Side [1]]
ge vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknadstidspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
etter normal bruk regnes ikke som avvik.
Hva inneholder tilstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskrift til
avhendingsloven. Tilstandsrapporten inneholder bare avvik som

---

[d001_d001 | Side [1]]
er under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
Dette kan gjelde sluk, tettesjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholdstilstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
tilleggsbygg slik som garasje, bod, anneks, naust

---

[d001_d001 | Side [1]]
ngssakkyndige velger tilstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
tilstandsanalyse ved omsetning av bolig og Forskrift til avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god utførelse. Det er ingen merknader til delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses

---

[d001_d001 | Side [1]]
annen kontaktes for
ny befaring og det må utføres en ny rapport. Rapporten har kun
kostnadsberegninger for TG: 3 som forskriften krever.
TG0: Ingen avvik
Generelt omfattes denne rapporten ikke kontroll av tekniske
TG1: Mindre eller moderate avvik utstyr. Det vil være forskjellige typer teoretisk spisskompetanse
TG2: Avvik som kan kreve tiltak og utstyr som trengs til dette.
TG3: Store eller alvorlige avvik
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er
TG IU: Konstruksjoner som ikke er

---

[d001_d001 | Side [1]]
dre bygningsdeler skjer etter eiers aksept. Hulltaking av våtrom og
normalt ikke positive sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskrift til
tilstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir uttrykk for en gitt forventet tilstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer

---

[d001_d001 | Side [1]]
regning i forhold til antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene benyttes for beregning av
estetiske status på et gitt tidspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken tilstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
byggverk eller en bygningsdel befinner seg i. Benyttes ved beskrivelse av opplyst at tilhører boenheten,

---

[d001_d001 | Side [1]]
standsrapportens avgrensninger
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rapporten er basert på innholdskrav i Forskrift til avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere bolighandel). Formålet er å gi en tilstandsanalyse til bruk for den kvalitet og alder vurdert.
som bestiller og/eller i et salg til forbruker, og ikke for andre

---

[d001_d001 | Side [1]]
jente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I tillegg må bygningsdelen dagens bruk.
være tilnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god utførelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Strakstiltak ikke boligen hadde el-tilsyn.

---

[d001_d001 | Side [1]]
17

## Side 28

15
10
5
0
Vil du vite mer om tilstandsgrader? Se side 4.
llatnA
Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Sammendrag av boligens tilstand
Fordeling av tilstandsgrader
Spesielt for dette oppdraget/rapporten
Oppdraget er utført av en uavhengig takstingeniør fra Norsk
takst som ikke har en relasjon til oppdragsgiver. Taksten er
basert på en visuell gjennomgang uten inngrep i byggverket,
eventuelt supplert med enkle

---

[d001_d001 | Side [1]]
ringsdato: 03.03.2026 Side: 2 av 17

## Side 25

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Dette trenger du å vite om tilstandsrapporten
Hva er en tilstandsrapport?
En tilstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke positive egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av

---

[d001_d001 | Side [1]]
yttelse i strid med lov eller avtale kan medføre erstatnings- og straffeansvar.
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 3 av 17

## Side 26

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Dette trenger du å vite om tilstandsrapporten
Tilstanden vurderes med ulike tilstandsgrader
Tilstanden gir uttrykk for en gitt forventet tilstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1)

---

[d001_d001 | Side [1]]
r TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke tilgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskrift til
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan
tilstandsgrad, fordi bygningen eller bygningsdelen da bare har normal finnes skjulte feil, skader og mangler. NS 3600:2018

---

[d001_d001 | Side [1]]
il
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot byggeregler
Når du kjøper en brukt bolig, er det viktig å være oppmerksom på at Den bygningssakkyndige vil vurdere boligen mot

---

[d001_d001 | Side [1]]
vik. Normal slitasje. Strakstiltak ikke boligen hadde el-tilsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er tilnærmet ny og det ikke offentlige myndigheter eller kvalifisert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god utførelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som etter NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare tiltak.
Konstruksjonen har normalt enten feil

---

[d001_d001 | Side [1]]
ong mv (BRA-b). Terrasse- og balkongareal (TBA) KLAGEORDNING FOR FORBRUKERE
opplyses der tilstandsrapporten skal benyttes i boligomsetningen og der
det er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav takhøyde (ALH)
Er du som forbruker misfornøyd med bygningssakkyndiges arbeid eller
opplyses sammen med BRA der det er aktuelt og en del av oppdraget. Rom
opptreden ved taksering av bolig eller fritidshus, se
skal ha atkomst og gangbart gulv for å kunne regnes som

---

[d001_d001 | Side [1]]
ssakkyndiges kompetanse og risikoen for skade.
mellom P-areal og S-areal.
• Tilbakeholdt eller uriktig informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
tilstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer etter eiers aksept. Hulltaking av våtrom

---

[d001_d001 | Side [1]]
 normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av tilstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad. Når bygningssakkyndige anbefaler tiltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om tiltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger tilstandsgrad, baseres vurderingen på faste

---

[d001_d001 | Side [1]]
bran.
Etasjeskille/gulv mot grunn Årstall: 2021 Kilde: Tidligere salgsoppgaver
Beskrivelse
Vurdering av avvik:
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 8 av 17

## Side 31

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapport
• Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer
enn halvparten av forventet brukstid for membran/tettesjikt er passert.
Det er nå ingen symptomer på funksjonssvekkelse, men

---

[d001_d001 | Side [1]]
en skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk slitasje eller nedsatt
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid. Graden skal også brukes
når delen er gammel og det er grunn

---

[d001_d001 | Side [1]]
n 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapportens avgrensninger
betydning for om arealet måles og oppgis i tilstandsrapporten. Når arealet
måles tas det ikke hensyn til om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER
• Eiendommens markedsverdi kan ikke baseres på en rent matematisk
beregning i forhold til antall kvadratmeter opplyst i rapporten.
•

---

[d001_d001 | Side [1]]
heller ikke overført. Disse
finner du på grunnboksutskriften til hovedbruket/avgivereiendommen. For festenummer
gjelder dette servitutter eldre enn festekontrakten.
Heftelser i eiendomsrett:
1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK.
Beløp: NOK 1 200 000
Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS
STYRE
LØPENR: 1454189
Overført fra: KNR: 0214 GNR: 42 BNR: 1 FNR: 212
m.fl.
1985/204808-1/6 10.05.1985 ** PRIORITETSBESTEMMELSE
VEKET FOR: OBLIGASJON 1985/203642-1
2025/1477207-1/200 02.12.2025

---

[d001_d001 | Side [1]]
v innskudd). I tillegg skal
eiendommens tinglyste rettigheter og forpliktelser avdekkes.
Den utskriften du vil se på neste side er et utdrag fra
grunnboken. Den tar for seg det første og det siste punktet, som
handler om grunndata og servitutter. Eksempel på en servitutt
kan være en tinglyst veirett, en tinglyst leiekontrakt, rett for
kommunen til å anlegge ledninger eller vei mv. Det som er
tinglyst på eiendommen, gjelder normalt sett felles for alle
boligene i borettslaget.
I sidene etter utdraget vil du

---

[d001_d001 | Side [1]]
yst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller før eventuelle arealoverføringer, er heller ikke overført. Disse
finner du på grunnboksutskriften til hovedbruket/avgivereiendommen. For festenummer
gjelder dette servitutter eldre enn festekontrakten.
Heftelser i eiendomsrett:
1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK.
Beløp: NOK 1 200 000
Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS
STYRE
LØPENR: 1454189
Overført fra: KNR: 0214 GNR: 42 BNR: 1 FNR: 212
m.fl.
1985/204808-1/6

---

[d001_d001 | Side [1]]
r seg Tinglyste servitutter
grundig inn i alle salgsdokumentene, herunder
salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses kjent med forhold som
På eiendommen kan det være tinglyst erklæringer/
er tydelig beskrevet i salgsdokumentene. Forhold
avtaler som for eksempel rett for kommunen til å
som er beskrevet i salgsdokumentene kan ikke
anlegge vann- og kloakkledninger inkl. reparasjon av
påberopes som mangler.
disse, bestemmelser om bebyggelsen, gjerder, vei
og adkomstrettigheter. Disse

---

[d001_d001 | Side [1]]
ger om tinglyste servitutter
(rettigheter og forpliktelser, samt leieavtaler og
festeavtaler) i eiendommen.
Når selger har iverksatt et salg gjennom PROPR.no, hentes
automatisk inn en utskrift av grunnboken, som inneholder det
overnevnte. Denne benyttes til å verifisere at borettslaget har
hjemmel til eiendommen, samt at den gir oversikt over
borettslagets tinglyste pant (normalt relatert til borettslagets
fellesgjeld og evt sikring av innskudd). I tillegg skal
eiendommens tinglyste rettigheter og

---

[d001_d001 | Side [1]]
enr. 3218 Gårdsnr. 42 Bruksnr. 279 Festenr. Seksjonsnr.
Adresse: Lyngveien 24A, 1433 ÅS
Restanser og legalpant registrert på eiendommen
Utestående fordringer som hviler på eiendommen:
Det er ingen heftelser på eiendommen.
Eiendommen har en restanse på kommunale avgifter med kr 0,-
Borettslaget må kontaktes for disse opplysningene.
Beløpet er eksklusiv eventuelle renter og gebyrer. Ved behov ta kontakt med oss når oppgjørsdato er satt slik at vi
kan beregne skyldig beløp inklusiv renter og gebyrer.
Neste

---

[d001_d001 | Side [1]]
 TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL LYNGFARET BORETTSLAG
ORG.NR: 947 199 714
HEFTELSER
Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som
vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten
sin grunnboksutskrift. Servitutter tinglyst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller før eventuelle arealoverføringer, er heller ikke overført. Disse
finner du på grunnboksutskriften til

---

[d001_d001 | Side [1]]
r 03.03.2026 kl. 14.45
HJEMMELSOPPLYSNINGER
Rettighetshavere til eiendomsrett
2003/16074-1/6 24.11.2003 HJEMMEL TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL LYNGFARET BORETTSLAG
ORG.NR: 947 199 714
HEFTELSER
Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som
vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten
sin grunnboksutskrift. Servitutter tinglyst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller

---

[d001_d001 | Side [1]]
R: 141104
SKJELBY HENRIK J IDEELL: 7/10
F.NR: 210495
ELEKTRONISK INNSENDT
HEFTELSER
Heftelser i eiendomsrett:
2024/1743964-1/200 PANTEDOKUMENT
29.07.2024 09.10 BELØP: NOK 2 850 000
PANTHAVER: DNB BANK ASA
ORG.NR: 984 851 006
PANTHAVER: DNB BOLIGKREDITT AS
ORG.NR: 985 621 551
ELEKTRONISK INNSENDT
Rettigheter
Ingen rettigheter registrert
OPPLYSNINGER FRA BORETTSLAGET
2006/19763-1/201 REGISTRERING AV BORETTSLAGSANDEL
20.11.2006
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved
avhendelse,

---

[d001_d001 | Side [1]]
melser om bebyggelsen, gjerder, vei
og adkomstrettigheter. Disse erklæringene/avtalene
Dette gjelder uavhengig av om kjøper har lest
vil følge eiendommen og vil ikke bli slettet ved salg
dokumentene. Alle interessenter oppfordres til å
av eiendommen.
undersøke eiendommen nøye, gjerne sammen med
fagkyndig før bud inngis. Kjøper som velger å kjøpe
usett kan ikke gjøre gjeldende som mangel noe han
burde blitt kjent med ved undersøkelsen.
Dersom det er behov for avklaringer, anbefaler vi at
kjøper rådfører seg

---

[d001_d001 | Side [1]]
eggs- og arrestforretninger, samt forbehold tatt ved
avhendelse, som tinglyses samme dag som andre frivillige rettsstiftelser,
gjelder særskilte prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21
tredje ledd.
Bekreftet grunnboksutskrift Side 1 av 1

## Side 96

Eiendomsrapport (Datakilde: Oppdatert kopi av matrikkelen)
Borettslagsandel 112 i AL LYNGFARET BORETTSLAG (947199714), Ås kommune
Utskriftsdato: 22.01.2026 14:52
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i

---

[d001_d001 | Side [1]]
per ikke er forbruker selges eiendommen
«som den er», og selgers ansvar er da begrenset jfr.
avhl. § 3-9, 2. pktm. Informasjon om kjøpers
undersøkelsesplikt, herunder oppfordringen om å
undersøke eiendommen nøye, gjelder også for
kjøpere som ikke anses som forbrukere.
Lovanvendelse:
Eiendommen selges etter reglene i avhendingsloven.
Eiendommen skal overleveres kjøper i tråd med det
som er avtalt. Det er viktig at kjøper setter seg Tinglyste servitutter
grundig inn i alle salgsdokumentene,

---

[d001_d001 | Side [1]]
n grunnboksblad stammer fra den tid grunnboken ble
ført manuelt, og da det faktisk var et blad for hver eiendom (kalt
matrikkel).
Opplysningene i grunnboken er inndelt i fire avsnitt:
• Grunndata – Opplysninger om opprettelse av
matrikkelenheten (eiendommen).
• Hjemmelsopplysninger – Hvem som eier eiendommen (har
hjemmel) til matrikkel- enheten.
• Pengeheftelser – Opplysninger om pant i matrikkelenheten.
• Servitutter mv. – Opplysninger om tinglyste servitutter
(rettigheter og forpliktelser, samt

---

[d001_d001 | Side [1]]
Tidligere:
KNR: 3021 GNR: 42 BNR: 279
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved avhendelse, som
tinglyses samme dag som andre frivillige rettsstiftelser, gjelder særskilte
prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21 tredje ledd.
Utskrift fra eiendomsregisteret foretatt 03.03.2026 14:48 – Sist oppdatert 03.03.2026 14:47
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 2 av 2

## Side 95

Grunnboksutskrift fra

---

[d001_d001 | Side [1]]
fentlig vei.
Tilknytning vann
Eiendommen er tilknyttet offentlig vannforsyning via private stikkledninger.
Tilknytning avløp
Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger.
Regulering
Takstmannen har ikke vurdert regulering eller andre relevante forhold i bygningsetaten. Videre ble ingen spesielle forhold gjort kjent for
takstmannen under befaringen. For å få mer informasjon om reguleringsbegrensninger og lignende, anbefales det å sette seg inn i
reguleringsbestemmelser og planer.

---

[d001_d001 | Side [1]]
E
FØDT: 14.11.2004 IDEELL: 3/10
SKJELBY HENRIK JOHANNESSEN
FØDT: 21.04.1995 IDEELL: 7/10
ELEKTRONISK INNSENDT
HEFTELSER
Heftelser i eiendomsrett:
2024/1743964-1/200 29.07.2024 PANTEDOKUMENT
09:10
BELØP: NOK 2 850 000
PANTHAVER : DNB BANK ASA
ORG.NR: 984 851 006
PANTHAVER : DNB BOLIGKREDITT AS
ORG.NR: 985 621 551
ELEKTRONISK INNSENDT
Rettigheter:
Ingen rettigheter registrert
OPPLYSNINGER FRA BORETTSLAGET
2006/19763-1/201 20.11.2006 REGISTRERING AV BORETTSLAGSANDEL
For eventuelle utleggs- og

---

[d001_d001 | Side [1]]
for alle
boligene i borettslaget.
I sidene etter utdraget vil du finne kopi av de tinglyste servitutter
som kan bestilles elektronisk. Servitutter eldre enn ca 1950 er
ikke tilgjengelig for bestilling, men kan hentes fra Statsarkivets
nettsider. Merk at disse like fullt gjelder eiendommen, selv om
mange har innhold som er gått ut på dato og at de kan være
vanskelig å tyde (håndskrevet).
BORETTSLAGSREGISTERET
Når selger har iverksatt et salg gjennom PROPR.no, hentes det
også automatisk inn en utskrift fra

---

[d001_d001 | Side [1]]
 for eiendom 3218 - 42/279//
100 m
© 2016 Norkart AS/Geovekst og kommunene/OpenStreetMap/NASA, Meti
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse opplysningene benyttes som grunnlag for beslutninger.

## Side 101

Utskriftsdato: 30.01.2026
Restanser og legalpant
EM §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Ås Kommune
Kommunenr. 3218 Gårdsnr. 42 Bruksnr. 279 Festenr. Seksjonsnr.
Adresse:

---

[d001_d001 | Side [1]]
g dette har virket
handelen, slik som reguleringskart med
inn på avtalen. En bolig som har blitt brukt i en viss
bestemmelser, grunnboksutskrift og evt. servitutter /
tid, har vanligvis blitt utsatt for slitasje og skader
heftelser, husordensregler, regnskaper, budsjetter,
kan ha oppstått.
innkalling og referat fra siste års sameiermøte etc.

## Side 22

Disse dokumentene ligger vedlagt eller kan til Propr.
oversendes på etterspørsel.
Om det er spørsmål vedrørende nåværende eller
Salgsoppgaven er basert på

---

[d001_d001 | Side [1]]
.03.2026 14:45
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 2 av 2

## Side 93

Utskrift fast eiendom
Gårdsnummer 42, Bruksnummer 279 i 3218 ÅS kommune
Utskrift fra EDR - Eiendomsregisteret Data uthentet 03.03.2026 kl. 14.48
Kilde Tinglysningsmyndigheten Statens Kartverk Oppdatert per 03.03.2026 kl. 14.47
HJEMMELSOPPLYSNINGER
Rettighetshavere til eiendomsrett
2003/16074-1/6 24.11.2003 HJEMMEL TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL

---

[d001_d001 | Side [1]]
kluderer
Lysekrone og taklamper
Kommunale avgifter, Tv/bredbånd, felles
Ruter og dekoder fra Altibox
bygningsforsikring, forretningsførsel, drift og
Vegghengte varmeovner
vedlikehold, renter og avdrag
Plisségardiner
Dusjkabinett
Avdrag felleslån kr.598
Renter felleslån kr.942
Ved interesse for møblement utover det som
Felleskostnader kr. 3630
medfølger, kan dette diskuteres ved budgivning.
Felleskostnader totalt: kr. 5170
Utleie reguleres av USBL og borettslagets vedtekter
og krever

---

[d001_d001 | Side [1]]
etrekk til en felles skattetrekkskonto i Usbl.
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 9 av 20

## Side 63

Noter årsregnskap 2024 AL Lyngfaret borettslag
Note 1 - Innkrevde felleskostnader
2024 2023
3600 Innkrevde felleskostn. drift 1 452 000 1 187 520
3618 Leietillegg strøm 25 869 49 811
3650 Innkrevde felleskostn. renter 400 760 351 920
3660 Innkrevde felleskostn. avdrag 525 400 550 120
3690 Andre leieinntekter 0 11 680
Sum 2 404 029 2 151 051
3618 - Lading av el-bil
Note 2 - Andre

---

[d001_d001 | Side [1]]
kjøpsretten.
Alle medeiere må tegne individuelle medlemskap i
AL Lyngfaret borettslag er veldrevet og kjennetegnes
USBL (kr 300,- per år) for at boligen skal kunne
av et fredelig og trivelig bomiljø. Borettslaget har
registreres på kjøper(e). Les mer om innmelding i
godt vedlikeholdte fellesarealer og vektlegger
USBL her: https://www.usbl.no/medlemskap/bli-
langsiktig planlegging og oppsparinger for
medlem
fremtiden. For å holde felleskostnadene nede, holder
borettslaget årlige dugnader, ofte vår og

---

[d001_d001 | Side [1]]
saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet.
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 5 av 20

## Side 59

Resultatregnskap 2024 AL Lyngfaret borettslag
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 2 404 029 2 151 051 2 402 400 2 707 603
Sum leieinntekt 2 404 029 2 151 051 2 402

---

[d001_d001 | Side [1]]
2 0
Ja Nei, ikke som jeg kjenner til
Side 5

## Side 45

Når ble målingen utført og hva ble måleverdiene?
Ikke fått verdiene enda. De er til analyse.
28 Er det andre forhold av betydning eller sjenanse for eiendommen eller nærområdet?
0 2
Ja Nei, ikke som jeg kjenner til
29 Foreligger det planer eller bestemmelser som kan medføre endringer av felleskostnader eller fellesgjeld?
0 2
Ja Nei, ikke som jeg kjenner til
30 Er sameiet eller borettslaget er involvert i konflikter av noe slag?
0 2
Ja Nei, ikke som

---

[d001_d001 | Side [1]]
Forskuddsbetalt felleskostnad 5 552 0
Leverandørgjeld 39 121 144 718
Påløpne renter 2 135 3 308
Annen kortsiktig gjeld 0 29 867
Sum kortsiktig gjeld 46 808 177 893
Sum gjeld 7 981 800 8 629 919
SUM EGENKAPITAL OG GJELD 4 775 375 4 856 288
Pantstillelser 13 7 934 992 8 452 026
Sted:_______________________ Dato:_______________
Bernt Skoklefald Marit Holmøy Martin Paliocha
Styreleder Styremedlem Styremedlem
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 8 av 20

## Side 62

Noter årsregnskap 2024 AL

---

[d001_d001 | Side [1]]
r andre som har
inngått samarbeidsavtale med stat, fylkeskommune eller kommune om å skaffe
boliger til vanskeligstilte.
(4) I tillegg har……………………… rett til å eie inntil …………..av andelene.
(5) Andelseierne skal få utlevert et eksemplar av borettslagets vedtekter.
2-2 Sameie i andel
(1) Bare personer som bor eller skal bo i boligen kan bli sameier i andel.
(2) Dersom flere eier en andel sammen, skal det regnes som bruksoverlating
hvis en eller flere av sameierne ikke bor i boligen, jf vedtektenes punkt

---

[d001_d001 | Side [1]]
rettslagets/
Styret skal føre protokoll fra sine møter. sameiets midler.
• Styret vedtar budsjett og nødvendige • Krever inn felleskostnader. Foretar kontroll
reguleringer av felleskostnader. med innbetalinger og purringer, samt
inndrivelse av eventuelle restanser via Klare
• Styret foretar bestillinger og anviser Inkasso.
fakturaer til betaling.
• Innberetter nødvendige opplysninger
• Styret tar beslutninger om bruk av midler til til offentlige myndigheter.
drift og vedlikehold.
• Utarbeider utkast til

---

[d001_d001 | Side [1]]
nde forsinkelsesrente etter lov av
17. desember 1976 nr 100.
7-2 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
laget panterett i andelen foran alle andre heftelser. Pantekravet er
begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på
tidspunktet da tvangsdekning besluttes gjennomført.
8. Styret og dets vedtak
8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og 2 andre
medlemmer med 3 varamedlemmer.
(2)

---

[d001_d001 | Side [1]]
kkelig for å oppveie verdiforringelse av bygning.
Note 9 - Andre honorar
2024 2023
6714 Tilleggstjenester forretningsfører 8 525 7 698
Sum 8 525 7 698
6714 - Gjelder nøkler tilleggsavtale og viderefaktureringer.
Note 10 - Andre kostnader
2024 2023
7718 Fellesarrangement 83 324
7770 Betalingskostnader 73 118
7773 Omkostninger innkreving 2 278 498
7792 Øredifferanse 0 4
7795 Husleietap -11 1
Sum 2 422 944
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 12 av 20

## Side 66

Noter årsregnskap 2024 AL

---

[d001_d001 | Side [1]]
e driftsmidler 4 67 594 90 235
Sum anleggsmidler 4 385 223 4 407 864
Omløpsmidler
Fordringer
Restanse felleskostnader 4 961 8 877
Andre kortsiktige fordringer 591 0
Forskuddsbetalte kostnader 28 891 25 001
Bankinnskudd og kontanter
Innestående bank 355 709 414 546
Sum omløpsmidler 390 152 448 424
SUM EIENDELER 4 775 375 4 856 288
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 7 av 20

## Side 61

Balanse 2024 AL Lyngfaret borettslag
Note 2024 2023
EGENKAPITAL OG GJELD
Egenkapital
Innskutt

---

[d001_d001 | Side [1]]
 12117655235 40 145 760 5 830 400
Antall andeler, andel gjeld og sum av fellesgjeld lån 16364224137 40 22 615 904 600
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 13 av 20

## Side 67

Noter årsregnskap 2024 AL Lyngfaret borettslag
Note 13 - Pantstillelser
Bokført verdi pr. 31.12.2024
Bokført langsiktig gjeld 6 734 992
Innskuddskapital 1 200 000
Boligselskapets pantesikrede gjeld 7 934 992
Bokført verdi av pantsatt eiendom 4 317 629
Borettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet

---

[d001_d001 | Side [1]]
ene under. OBS: Det er ingen
garanti for at forretningsfører har fått med all info. Det
forutsettes derfor at interessenter leser alle dokumentene
grundig før budgivning/kjøp.
• Årsberetning
• Siste tilgjengelige regnskap
• Budsjett
• Vedtekter
• Husordensregler
Enkelte sameier og borettslag har ikke alle de overnevnte
punktene tilgjengelig. I det følgende finner du en komplett pakke
av de opplysninger forretningsfører har sendt til PROPR.no.

## Side 49

Utskrift borettslagsandeler
Andelsnummer 112 i AL

---

[d001_d001 | Side [1]]
rettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet er en del av borettslagets pantsikrede gjeld.
Borettslagets eiendom er stillet som pantesikkerhet.
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 14 av 20

## Side 68

Resultat og balanse med noter for AL Lyngfaret borettslag.
Dokumentet er signert elektronisk av:
For AL Lyngfaret borettslag
Styreleder Bernt Skoklefald (sign.) 08.05.2025
Styremedlem Martin Paliocha (sign.) 14.03.2025
Styremedlem Marit Holmøy (sign.) 08.05.2025
Side 15

---

[d001_d001 | Side [1]]
forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører
med seg økonomisk ansvar eller utlegg for laget på mer enn fem prosent
av de årlige felleskostnadene.
8-4 Representasjon og fullmakt
To styremedlemmer i fellesskap representerer laget utad og tegner dets navn.
9. Generalforsamlingen
9-1 Myndighet
Den øverste myndighet i borettslaget utøves av generalforsamlingen.
9-2 Tidspunkt for generalforsamling
(1) Ordinær generalforsamling skal holdes hvert år innen utgangen av

---

[d001_d001 | Side [1]]
ostnadene nede, holder
borettslaget årlige dugnader, ofte vår og høst.
Dugnadene er effektivt organisert og skaper et
hyggelig fellesskap.
Annet
Medfølger Om du ikke har mulighet til å komme på visning,
holder vi gjerne privatvisning. Ta kontakt, så finner vi
en tid. Vi har tegnet boligselgerforsikring, og
anbefaler også kjøper å tegne boligkjøperforsikring.
Hvitevarer (komfyr, platetopp, oppvaskmaskin,
kjøleskap)
Felleskostnader inkluderer
Lysekrone og taklamper
Kommunale avgifter, Tv/bredbånd,

---

[d001_d001 | Side [1]]
3 100
B. Endring i disponible midler
Resultat hittil 567 207 509 339
Tilbakeføring av avskrivning 22 641 22 641
Opptak/avdrag langsiktig gjeld -517 034 -514 548
B. Årets endring disponible midler 72 813 17 432
C. Disponible midler 343 345 270 531
Spesifikasjon av disponible midler:
Omløpsmidler 390 152 448 424
Kortsiktig gjeld -46 808 -177 893
C. Disponible midler 343 345 270 531
Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.
Borettslagets

---

[d001_d001 | Side [1]]
 post@klareinkasso.no. Dersom en eier dør, må Usbl ha melding om dette. Skifteattest kan
sendes til eierskifte@usbl.no og boligen blir kostnadsfritt overført til gjenlevende
ektefelle/samboer.

## Side 53

Du finner denne innkallingen, samt andre nyttige dokumenter og opplysninger om ditt
borettslag/sameie på Bonabo for beboere. Fra menyen «Min bolig» og «Felleskostnader» får du også
oversikt over dine månedlige felleskostnader.

## Side 54

Innkalling til generalforsamling
Det innkalles til ordinær

---

[d001_d001 | Side [1]]
lvorlig plage eller sjenanse for eiendommenes øvrige
andelseiere eller brukere, kan styret kreve fravikelse fra boligen etter
tvangsfullbyrdelseslovens kapittel 13.
7. Felleskostnader og pantesikkerhet
7-1 Felleskostnader
(1) Felleskostnadene betales hver måned. Borettslaget kan endre
felleskostnadene med en måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer
andelseieren den til en hver tid gjeldende forsinkelsesrente etter lov av
17. desember 1976 nr 100.
7-2

---

[d001_d001 | Side [1]]
r av 40 andeler.
Eiendommer er oppført på g.nr 42, b.nr 279 i Ås kommune. Eiertomt på 10 831,3 kvm.
Borettslaget eiendommer er forsikret gjennom If Skadeforsikring med polise nr. SP587521.
Note 5 - Kostnad eiendom/ lokaler
2024 2023
6300 Leiekostnader lokaler 2 500 2 500
6360 Annet renhold 2 899 60
6361 Fast renhold 94 204 83 573
6391 Snømåking/strøing/feiing 32 729 70 979
6393 Blomster/jord, klipping av gress/hekk 20 036 20 790
Sum 152 368 177 902
Note 6 - Lisens HMS, vedlikehold og andre lisenser
2024

---

[d001_d001 | Side [1]]
mber 2025.
Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold,
ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av
et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.
For nærmere informasjon vises det til sak 5.1 i vedlagte innkalling til årets
generalforsamling.
Nye andelshavere
I perioden er det registrert seks overdragelser av andeler. Styret ønsker alle nye
andelshavere hjertelig velkommen til

---

[d001_d001 | Side [1]]
fon og e-post for å
følge opp pågående saker.
Hovedaktiviteter i perioden
Vedlikehold
For å ivareta og sikre verdien av bygningsmassen følger styret en vedlikeholdsplan.
Lyngfaret borettslag benytter systemet Bevar Vedlikehold som verktøy for å identifisere
og planlegge nødvendige tiltak. Planen bygger på en tidligere teknisk gjennomgang av
eiendommen.
Styret har arrangert dugnader både vår og høst. I tillegg er det utført enkelte mindre
vedlikeholdsoppgaver, blant annet inspeksjon av takarealer samt

---

[d001_d001 | Side [1]]
eskostnadene.
Styret har derfor vurdert alternative løsninger og engasjert rådgivende entreprenører for
å vurdere rørenes faktiske tilstand. Konklusjonen er at rørene er egnet for fornying, noe
som gjør full utskiftning unødvendig.
Det er innhentet to konkurrerende pristilbud på rørfornying. Styret har – under
forutsetning av generalforsamlingens godkjenning – valgt å akseptere tilbudet fra TT-
Teknikk AS. Arbeidet er planlagt igangsatt september 2025.
Selv om det ligger innenfor styrets ansvar å beslutte

---

[d001_d001 | Side [1]]
tte
gjelder
1. ikke tiltak som er fastsatt i reguleringsplan.
2. følgende tiltak forutsatt at det ikke er i strid med andre bestemmelser i lov,
forskrift eller plan:
a. Vesentlige reparasjoner
b. Gjenoppbygging etter brann
c. Nødvendig ombygging av eksisterende driftsbygninger på gårdstun.
d. Fasadeendring
e. Tiltak for restaurering av historisk miljø i og ved vassdragene.
f. Bekkeåpning
g. Tiltak som er konsesjonspliktig etter vannressursloven og hvor det er gitt
slik konsesjon
h. Andre nødvendige tiltak

---

[d001_d001 | Side [1]]
ntré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.
Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.
Nyere håndverkstjenester
Er det ifølge eier utført håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Ifølge egenerklæring er det utført flere håndverkertjenester på boligen de siste 5 årene. Dette omfatter blant annet
elektrikerarbeider i form av omtrekking av stue og soverom, etablering av

---

[d001_d001 | Side [1]]

vedlikeholdsoppgaver, blant annet inspeksjon av takarealer samt rensing av sluk og
nedløp.
Rørfornying
Som tidligere omtalt i årsberetningene, har borettslaget mottatt anbefaling fra
fagpersonell tilknyttet USBL om å fornye rørsystemet. Anbefalingen er basert på generelle
levetidsvurderinger. En full utskiftning ville også kreve totalrenovering av alle bad, noe
som vil være både omfattende og kostbart, og medføre en betydelig økning i
felleskostnadene.
Styret har derfor vurdert alternative løsninger og

---

[d001_d001 | Side [1]]
r det foretatt tilleggsarbeider
på det elektriske anlegget etter 1.1.1999?
Ja
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 10 av 17

## Side 33

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapport
Eksisterer det samsvarserklæring?
Konsekvens/tiltak
Ja
• Det bør gjennomføres radonmålinger.
5. Foreligger det kontrollrapport fra offentlig myndighet – Det Lokale • Det er ikke krav om utbedring av rekkverkshøyde opp til

---

[d001_d001 | Side [1]]
 anslag
gis for TG3, der dette er mulig.
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 4 av 17

## Side 27

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Beskrivelse av eiendommen
Boligen er i hovedsak som fra byggeåret og fremstår i teknisk
god stand. Det gjøres oppmerksom på at enkelte elementer har
passert normal forventet levetid, slik at vedlikehold/utbedring Arealer
Gå til side
må påregnes i tiden som kommer. Forøvrig vises til

---

[d001_d001 | Side [1]]
 Har det vært feil på utvendige eller innvendige avløpsrør eller vannrør?
0 2
Ja Nei, ikke som jeg kjenner til
13 Er det utført arbeid på utvendige eller innvendige avløpsrør eller vannrør?
2 0
Ja Nei, ikke som jeg kjenner til
13.1.1 Navn på arbeid
Rehabilitering av rør
13.1.2 Årstall
2025
13.1.3 Hvordan ble arbeidet utført?
2 0
Faglært Ufaglært
13.1.4 Fortell kort hva som ble gjort av faglærte
TT-Teknikk har rehabilitert taknedløp, innvendige avløpsrør og bunnledning i bygget i regi
borettslaget.
13.1.5

---

[d001_d001 | Side [1]]
elareal 10 818 m2
Formål Blokkbebyggelse
Reguleringsplaner under arbeid i nærheten (500 meter)
Besøk kommunens hjemmeside for mer informasjon
Id 337
Navn Detaljregulering for bevaring av deler av Ås sentralområde
Status Planlegging igangsatt
Plantype Detaljregulering
Id 305
Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum
Status Planlegging igangsatt
Plantype Detaljregulering
Id 359
Navn Detaljregulering for del av fv. 152 - Gateterminal
Status

---

[d001_d001 | Side [1]]
aget er involvert i konflikter av noe slag?
0 2
Ja Nei, ikke som jeg kjenner til
Andre opplysninger
31 Har ufaglærte utført arbeid som normalt bør utføres av faglærte? Du trenger ikke gjenta noe du allerede har nevnt.
0 2
Ja Nei, ikke som jeg kjenner til
32 Har du andre opplysninger om boligen eller eiendommen utover det du har svart?
0 2
Ja Nei, ikke som jeg kjenner til
Boligselgerforsikring
Boligen selges med boligselgerforsikring
En boligselgerforsikring gir trygghet for selger og kjøper, og kan dekke

---

[d001_d001 | Side [1]]
tlige myndigheter.
drift og vedlikehold.
• Utarbeider utkast til budsjett.
• Styret behandler klagesaker og vedtar
eventuelle reaksjoner i form av advarsler • Bistår styret med råd og tilrettelegging av
eller salgspålegg. årsmøte.
• Styret behandler skadesaker på bygning, og • Fremforhandler gunstige rabattavtaler
melder fra til Usbl om eventuelle for borettslaget/sameiet og beboere.
forsikringssaker.
• Registrerer eierskifter og påser at eventuelle
• Styret er arbeidsgiver for vaktmester, regler for

---

[d001_d001 | Side [1]]
ikke som jeg kjenner til
22 Har det vært mugg, sopp eller råte i sameiet eller borettslaget?
0 2
Ja Nei, ikke som jeg kjenner til
Planer og godkjenninger
23 Mangler leiligheten brukstillatelse eller ferdigattest?
0 2
Ja Nei, ikke som jeg kjenner til
24 Har du bygd på eller gjort om kjeller, loft eller annet til boligrom?
0 2
Ja Nei
25 Selges eiendommen med utleiedel som leilighet, hybel eller lignende?
0 2
Ja Nei
27 Er det utført radonmåling?
2 0
Ja Nei, ikke som jeg kjenner til
Side 5

## Side 45

Når ble

---

[d001_d001 | Side [1]]
s lovlighet (bortsett fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og dette er kjent for bygningssakkyndig, eller fellesarealet har en særlig
tilknytning til boligen).
© iVerdi 2023 © Norsk takst 2023
Malen til denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet etter åndsverkloven og kan kun benyttes av medlemsforetakene i Norsk takst og
av takstingeniører som

---

[d001_d001 | Side [1]]
 og oppvarming
14 Er det eller har det vært nedgravd oljetank på eiendommen?
0 2
Ja Nei, ikke som jeg kjenner til
Side 4

## Side 44

15 Har det vært feil på varmeanlegg eller ventilasjonsanlegg?
0 2
Ja Nei, ikke som jeg kjenner til
16 Er det utført arbeid på varmeanlegg eller ventilasjonsanlegg?
0 2
Ja Nei, ikke som jeg kjenner til
Skjevheter og sprekker
17 Er det tegn på setningsskader eller sprekker i for eksempel grunnmur eller fliser?
0 2
Ja Nei, ikke som jeg kjenner til
18 Har det vært feil eller

---

[d001_d001 | Side [1]]
enhold
til eierseksjonsloven. For borettslag og aksjeleiligheter kan
rettigheter tildeles til andelseiere eller aksjeeiere, men kan
revideres av generalforsamlingen. Bruk av rom utenfor den
enkelte boenhet kan endres av borettslaget eller sameiet, noe
som kan påvirke boligens bruksareal (BRA).
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med flere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner Gå

---

[d001_d001 | Side [1]]
tegrenser stemmer
med de grenser/gjerder/ beplantning som fysisk er
Oppgjør
satt. Det kan være avvik fra dagens rombruk/
rombenevnelse i forhold til det opprinnelige
byggemeldte/godkjente.
Håndteres av et profesjonelt oppgjørsfirma med
lisens fra Finanstilsynet.
Proprs standard kjøpekontrakt legges til grunn for
avtalen. Standardkontrakt kan fås ved henvendelse

## Side 23

Tilstandsrapport
Boligbygg med flere boenheter
Lyngveien 24 A, 1433 ÅS
ÅS kommune
gnr. 42, bnr. 279
Andelsnummer 112
Sum areal alle

---

[d001_d001 | Side [1]]
rbeidet), grøntarealer, eiendommer avsatt for offentlige
formål, byggegrenser etc.
REGULERINGSBESTEMMELSER
Svært mange eiendommer i Norge er regulert, enten enkeltvis
eller som en del av et område. En regulering sier noe om hva
kommunen tillater at arealene blir brukt til. Det kan gjelde
høyder, bredder, utforming, utnyttelse (for eksempel skole, bolig,
kontor etc) og andre muligheter og begrensninger.
Dersom eiendommen er regulert, vil du finne planen vedlagt.
Dersom eiendommen ikke er regulert, vil

---

[d001_d001 | Side [1]]
 Landås skog
R-15 Del av Kajajordet
R-17 Del av Rustad skog
R-18 Søråsteigen
R-22 Sporret
R-35 Nygårdsåsen
R-73 Dysterlia - endring
§ 1.3 Planer med brutto utnyttelsesgrad
Bestemmelser i gjeldende reguleringsplaner om brutto utnyttelsesgrad
erstattes av kommuneplanens bestemmelser om utnyttelsesgrad, jf. § 19.3.
1

## Side 122

2. Generelle bestemmelser
§ 2 Folkehelse
(pbl. § 1-1)
Reguleringsplaner og byggesaker skal bidra til å fremme god folkehelse. Forslag
til reguleringsplaner skal redegjøre for

---

[d001_d001 | Side [1]]
r over fortau/gate.
g. Skilting over gesims og møne unngås.
h. I boligområder unngås lyskasser helt.
11

## Side 132

i. Løsfotskilt og reklame plasseres på egen grunn, tillates kun innenfor
virksomhetens åpningstid og er ikke til ulempe eller hinder for ferdsel og
tilgjengelighet.
§10.2 Belysning
Det kan kreves utarbeidet en lysplan for utendørsbelysning i forslag til
reguleringsplan.
§ 11 Miljøkvalitet og klima
(pbl. 11-9 nr. 6 og nr. 8)
§ 11.1 Støy
Alle tiltak skal planlegges slik at støyforholdene

---

[d001_d001 | Side [1]]
klimatiske forhold (sol, skygge, vind og snø).
d. klimaeffekt av arealendring på byggegrunn basert på klimaregnskap for
arealendring ved regulering av areal over 5 daa.
Retningslinje:
Fossilfrie eller utslippsfrie bygg- og anleggsplasser bør vurderes.
§ 12 Samfunnssikkerhet
(pbl. § 11-9 nr. 8)
§ 12.1 Kvikkleire
For reguleringsplaner og byggesøknader under marin grense skal faren for
områdeskred vurderes.
Retningslinje:
Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3
med

---

[d001_d001 | Side [1]]
mt
virkningene planen har for miljø og samfunn.

## Side 121

1. Forholdet til gjeldende
reguleringsplaner og formåls-
bestemmelser
§ 1 Forholdet til reguleringsplaner
(pbl. § 1-5)
§ 1.1 Motstrid og utfylling
Ved motstrid gjelder juridisk bindende reguleringsplaner vedtatt før
kommuneplanens arealdel, foran denne planen. Dette gjelder ikke for
reguleringsplanene listet opp i § 1.2. Der det ikke er motstrid skal bestemmelser
og retningslinjer supplere gjeldende reguleringsplaner.
§ 1.2 Eldre

---

[d001_d001 | Side [1]]
sjoner, støv, luftforurensning og vannkvalitet
f. Beskyttelse av bevaringsverdig vegetasjon og jordsmonn inkludert
sikring av store trær jf. § 16.5
g. Avrenningsforhold til vannforekomster
§ 11.5 Klima og energi
Forslag til reguleringsplaner og byggesøknader skal redegjøre for:
a. tiltak som reduserer energibruk, klimagassutslipp og avfall i
anleggsperioden.
b. valg av energiløsninger og byggematerialer basert på et
klimagassregnskap.
c. mikroklimatiske forhold (sol, skygge, vind og snø).
d. klimaeffekt av

---

[d001_d001 | Side [1]]
god folkehelse. Forslag
til reguleringsplaner skal redegjøre for virkninger for folkehelse i planområdet.
Retningslinje:
Virkemidler for å fremme folkehelsen kan blant annet være universell utforming,
miljøfaktorer som støy og luftkvalitet, andre helsefremmende faktorer som
tilgang til grøntarealer, tilrettelegging for fysisk aktivitet og solforhold,
kriminalitets- og ulykkesforebyggende tiltak for å utjevne sosiale helseforskjeller
som sosiale møteplasser.
§ 3 Universell utforming
(pbl. §§ 1-1 og 11-9 nr.

---

[d001_d001 | Side [1]]
eligge før byggesøknad godkjennes. Dersom tiltakene utløser
krav om reguleringsplan, skal utredning følge med forslag til reguleringsplan.
§ 30 Sone for infrastruktur
(pbl. § 11-8 pkt. b)
§ 30.1 Hensettingsanlegg tog (H430-1)
Innenfor hensynssone H430_1 kreves det reguleringsplan for hensettingsanlegg
og ny østre linje. Tiltak som kan hindre byggingen av disse anleggene er ikke
tillatt.
§ 30.2 Reservevannledning (H430_2)
Innenfor hensynssone H430_2 reservevannledning er det ikke tillatt med tiltak
som kan

---

[d001_d001 | Side [1]]
turminner er ikke tillatt med mindre det foreligger dispensasjon fra
kulturminneloven.
§ 33 Gjennomføringssoner
(pbl. § 11-8, pkt. e)
§ 33.1 Krav om felles planlegging (H810_1-3)
a. Tømrernes feriehjem og Askehaugåsen (H810_1)
For Tømrernes feriehjem og Askehaugåsen skal det foreligge en
reguleringsplan for hele området før omgjøring av fritidsboliger til
helårsboliger.
b. Grenseveien (H810_2)
Det skal foreligge en reguleringsplan for hele området.
c. Holstad stasjon (H810_3)
Det skal foreligge ny felles

---

[d001_d001 | Side [1]]
re
magnetfeltet.
§ 11.4 Miljøoppfølgingsplan (MOP)
I forslag til reguleringsplaner og byggesøknader som innebærer store
miljøutfordringer, skal det utarbeides en miljøoppfølgingsplan. Planen skal
foreligge ved søknad om rammetillatelse og vise hvordan følgende forhold skal
løses:
a. Anleggstransport
b. Parkering i anleggsperioden
c. Trafikksikkerhet
d. Grunnarbeider og håndtering av overskuddsmasser
e. Krav til anleggsstøy, vibrasjoner, støv, luftforurensning og vannkvalitet
f. Beskyttelse av

---

[d001_d001 | Side [1]]
e tillatt med bygge- og
anleggstiltak, sprengningsarbeider eller boring for energi- og andre brønner
uten at det foreligger skriftlig samtykke fra berørt samferdselsmyndighet.
§ 28 Støysoner
(pbl. § 11-8 nr. a)
§ 28.1 Skytebane H290_1
Innenfor støysonen rundt Ålerudmyra skytebane H290_1 skal det ikke etableres
ny boligbebyggelse.
§ 29 Faresoner
(pbl. § 11-8 nr. a)
§ 29.1 Ras- og skredfare (H310_1)
Innenfor hensynssone H310_1 skal det tas særlig hensyn til geoteknisk stabilitet.
I forslag til

---

[d001_d001 | Side [1]]

boligstørrelse og nærmere krav til bygningers utforming der det er
hensiktsmessig. Avtalen kan også regulere at kommunen eller andre skal ha
fortrinnsrett til å kjøpe en andel av boligene til markedspris.
c. Nødvendige tiltak for gjennomføring av planen, jf. pbl. § 17-3 tredje ledd.
Videre kan avtalen gå ut på at grunneier eller utbygger skal sikre
opparbeidelse eller opparbeide tiltak som er nødvendige for gjennomføringen
av reguleringsplaner. Slike tiltak må stå i rimelig forhold til utbyggingens art
og

---

[d001_d001 | Side [1]]
0_1 er ikke tillatt før faren for forurenset
grunn er utredet og eventuelle avbøtende tiltak fastsatt. For sonene er det krav
om reguleringsplan.
§ 29.5 Virksomhetsbasert fare (H390_2)
Innenfor sonen H390_2 er det ikke tillatt med videre utvidelse av aktivitet, ny
aktivitet og/eller tiltak etter plan- og bygningsloven § 20-1 og § 20-4 uten at
forurensningsfare og annen fare er utredet og eventuelt avbøtende tiltak fastsatt.
Utredning skal foreligge før byggesøknad godkjennes. Dersom tiltakene utløser
krav

---

[d001_d001 | Side [1]]
befales det å sette seg inn i
reguleringsbestemmelser og planer. Dette vil gi mer detaljerte opplysninger om eventuelle begrensninger som kan påvirke eiendommen.
Om tomten
Eiet tomt på ca. 10 831 m². Tomten er delvis opparbeidet med plenarealer, beplantning, interne veier og parkeringsplasser.
Det er etablert parkering foran bygget, herunder elbilladere i regi av borettslaget.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 11.03.2026 Gjennomgått Nei
Propr.no

---

[d001_d001 | Side [1]]
ksformål i hver boenhet skal
ha vindu mot stille side. Minst ett soverom skal vende mot stille side.
b. Uteoppholdsareal skal ha tilfredsstillende støyforhold.
§ 11.2 Luftkvalitet
Alle tiltak skal planlegges slik at luftkvaliteten innendørs og utendørs blir
tilfredsstillende.
Retningslinjer:
Klima- og miljødepartementets retningslinjer for luftkvalitet i arealplanlegging (T-
1520) skal legges til grunn i vurderingen for hva som er tilfredsstillende.
§ 11.3 Høyspent
Alle tiltak skal planlegges slik at

---

[d001_d001 | Side [1]]
av som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Kommuneplaner under arbeid
Reguleringsplaner Reguleringsplaner under arbeid i nærheten
Plantyper uten treff
Kommunedelplaner Kommunedelplaner under arbeid
Reguleringsplaner under bakken Reguleringsplaner over bakken
Reguleringsplaner under arbeid Reguleringsplaner bunn
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige

---

[d001_d001 | Side [1]]
137

§ 15 Estetikk
(pbl. § 11-9 nr. 6)
§ 15.1 Estetiske krav til bebyggelse og anlegg
Reguleringsplaner og byggesøknader skal tilføre nye kvaliteter eller styrke
eksisterende særpreg og visuell karakter i et område.
Bebyggelse og anlegg skal utformes i samspill med omgivelsene som
sentrumsstruktur eller annen bebyggelsesstruktur, eksiterende omkringliggende
bebyggelse, landskap, terreng, vegetasjon, kultur- og naturmiljø, naturmangfold
og blågrønn struktur.
I forslag til reguleringsplaner og byggesøknader

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Planlagt rørfornying med potensielle økte felleskostnader: Borettslaget har planlagt rørfornying (igangsatt september 2025) som krever låneopptak og vil medføre økte felleskostnader for alle andelseiere, inkludert kjøper.",
      "evidence": [
        "Styret har derfor vurdert alternative løsninger og engasjert rådgivende entreprenører for å vurdere rørenes faktiske tilstand.",
        "Det er innhentet to konkurrerende pristilbud på rørfornying. Styret har – under forutsetning av generalforsamlingens godkjenning – valgt å akseptere tilbudet fra TT-Teknikk AS. Arbeidet er planlagt igangsatt september 2025.",
        "Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.",
        "TT-Teknikk har rehabilitert taknedløp, innvendige avløpsrør og bunnledning i bygget i regi borettslaget. (Årstall: 2025)"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Høy fellesgjeld og løpende felleskostnader: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den totale pantsikrede gjelden er nær 7,9 millioner kroner. Kjøper overtar andel av denne gjelden.",
      "evidence": [
        "Bokført langsiktig gjeld 6 734 992",
        "Boligselskapets pantesikrede gjeld 7 934 992",
        "Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170",
        "Antall andeler, andel gjeld og sum av fellesgjeld lån 16364224137 40 22 615 904 600",
        "Budsjett 2025 innkrevd felleskostnad: 2 707 603 (opp fra 2 404 029 i 2024) – indikerer allerede planlagt økning"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Ulovlig romendring – entré slått sammen med soverom uten søknad: Tilstandsrapporten avdekker at entré er slått sammen med tilstøtende soverom, noe som normalt er søknadspliktig og kan være ulovlig.",
      "evidence": [
        "Entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
        "Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "TG2 på etasjeskille/gulv mot grunn – membran/tettesjikt har passert halvparten av forventet brukstid: Tilstandsgrad 2 er gitt for etasjeskille/gulv mot grunn, noe som indikerer at vedlikehold eller utbedring kan bli nødvendig.",
      "evidence": [
        "Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert.",
        "Det er nå ingen symptomer på funksjonssvekkelse, men...",
        "Etasjeskille/gulv mot grunn Årstall: 2021 Kilde: Tidligere salgsoppgaver"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R5",
      "description": "Radonmåling ikke fullført – verdier til analyse: Selger har utført radonmåling, men verdiene er ikke ferdig analysert på tidspunktet for egenerklæringen. Kjøper kjenner ikke til faktisk radonkonsentrasjon i boligen.",
      "evidence": [
        "Er det utført radonmåling? Ja",
        "Når ble målingen utført og hva ble måleverdiene? Ikke fått verdiene enda. De er til analyse.",
        "Det bør gjennomføres radonmålinger. (anbefaling i tilstandsrapporten)"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Panteheftelse på borettslagsandelen – DNB Bank ASA og DNB Boligkreditt AS har pant på NOK 2 850 000: Det er registrert et pantedokument på andelen som kjøper må forholde seg til ved overtakelse.",
      "evidence": [
        "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000",
        "PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006",
        "PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av Ås sentralområde og gang-/sykkelvei langs fylkesvei 152, som kan medføre endringer i nærområdet.",
      "evidence": [
        "Reguleringsplaner under arbeid i nærheten (500 meter)",
        "Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt",
        "Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt",
        "Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status..."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R8",
      "description": "Elektriske arbeider utført – samsvarserklæring foreligger, men el-tilsyn bør vurderes: Det er utført tilleggsarbeider på det elektriske anlegget etter 1999, inkludert omtrekking av stue og soverom. Tilstandsrapporten anbefaler konsultasjon med elektrofaglig fagperson ved behov.",
      "evidence": [
        "Er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Ja",
        "Eksisterer det samsvarserklæring? Ja",
        "Ifølge egenerklæring er det utført flere håndverkertjenester på boligen de siste 5 årene. Dette omfatter blant annet elektrikerarbeider i form av omtrekking av stue og soverom, etablering av...",
        "Bygningssakkyndig kan anbefale å konsultere offentlige myndigheter eller kvalifisert elektrofaglig fagperson ved behov for grundigere undersøkelser."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R9",
      "description": "Kvikkleirevurdering kan være relevant – eiendommen ligger under marin grense: Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Det er ikke dokumentert at slik vurdering er gjort for eiendommen.",
      "evidence": [
        "§ 12.1 Kvikkleire: For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.",
        "Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    },
    {
      "risk_id": "R10",
      "description": "Begrenset bankinnskudd og disponible midler i borettslaget – lav finansiell buffer: Borettslaget har relativt begrensede disponible midler (kr 343 345) og en avsetningskonto med kun kr 108 849,61, noe som gir liten buffer for uforutsette utgifter.",
      "evidence": [
        "C. Disponible midler 343 345 270 531",
        "Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.",
        "Innestående bank 355 709 414 546"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R11",
      "description": "Tilstandsrapporten er ingen garanti mot skjulte feil og mangler: Rapporten er basert på visuell gjennomgang uten inngrep i byggverket, og kan ikke avdekke skjulte feil, skader eller mangler.",
      "evidence": [
        "Rapporten gir en vurdering av byggverk og bygningsdeler som bygningssakkyndig har observert, og som fremkommer av Forskrift til avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Fellesobligasjon for borettslagsinnskudd fra 1973 – historisk heftelse: Det er registrert en fellesobligasjon for borettslagsinnskudd fra 1973 på NOK 1 200 000, som fortsatt er tinglyst på eiendommen.",
      "evidence": [
        "1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000",
        "Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    }
  ],
  "re_retrieval_queries": [
    "Hva er det eksakte lånebeløpet for rørfornying og forventet økning i felleskostnader etter rørprosjektet?",
    "Er det dokumentert søknad eller godkjenning for sammenslåing av entré og soverom hos Plan- og bygningsetaten?",
    "Hva er fullstendige radonmåleverdier for Lyngveien 24A?",
    "Er det andre TG2 eller TG3 avvik i tilstandsrapporten som ikke er fanget opp i risikolisten?",
    "Hva er borettslagets vedlikeholdsplan og fremtidige budsjetterte kostnader utover rørfornying?",
    "Er det registrert ras- eller skredfare (H310_1) på eller nær eiendommen Lyngveien 24A?",
    "Hva er fullstendig innhold i prioritetsbestemmelsen fra 1985 (1985/204808-1/6)?",
    "Er det registrert restanser på felleskostnader fra nåværende andelseier?"
  ],
  "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rørfornying (confidence oppjustert til 0.97):** Svært godt dokumentert. Egenerklæringen bekrefter at TT-Teknikk faktisk har utført rehabilitering i 2025, noe som styrker evidensen ytterligere. Arbeidet er allerede igangsatt/utført, men låneopptak og økte felleskostnader er fortsatt en reell risiko fremover.\n\n**R2 – Høy fellesgjeld (confidence oppjustert til 0.95):** Godt dokumentert i regnskapet. Budsjett 2025 viser allerede planlagt økning i innkrevde felleskostnader fra 2 404 029 til 2 707 603, noe som er et viktig tilleggselement som styrker risikoen.\n\n**R3 – Ulovlig romendring (confidence beholdt 0.90):** Klart dokumentert i tilstandsrapporten. Risikoen er reell – det er ikke dokumentert at søknad er innsendt eller godkjenning foreligger.\n\n**R4 – TG2 etasjeskille/gulv (confidence beholdt 0.88):** Godt dokumentert. Årstall 2021 fra tidligere salgsoppgaver indikerer at tettesjiktet er fra 2021, men vurderingen er basert på alder. Ingen akutte symptomer, men risiko for fremtidig utbedringsbehov er reell.\n\n**R5 – Radonmåling ikke fullført (confidence beholdt 0.88):** Klart dokumentert. Verdiene er ikke tilgjengelige for kjøper, noe som er en reell informasjonsrisiko.\n\n**R6 – Panteheftelse DNB (confidence oppjustert til 0.90):** Bekreftet i to separate grunnboksutskrifter. Dette er selgers private pant, ikke borettslagets, og vil normalt slettes ved salg/oppgjør. Risikoen er at kjøper må sikre at dette faktisk slettes ved overtakelse.\n\n**R7 – Reguleringsplaner (confidence nedjustert til 0.70):** Dokumentert at planene er under arbeid, men det er usikkert hvilken direkte påvirkning disse vil ha på den aktuelle eiendommen. Gang-/sykkelvei og bevaring av sentralområde er relativt nøytrale for en boligeiendom. Confidence nedjusteres noe.\n\n**R8 – Elektriske arbeider (confidence nedjustert til 0.65):** Samsvarserklæring foreligger, noe som reduserer risikoen betydelig. Tilstandsrapporten nevner kun at fagperson kan konsulteres \"ved behov\". Dette er en lav risiko gitt at dokumentasjonen er på plass.\n\n**R9 – Kvikkleire (confidence nedjustert til 0.50):** Bestemmelsen gjelder for reguleringsplaner og byggesøknader, ikke for eksisterende bebyggelse. Det er ikke dokumentert at eiendommen faktisk ligger under marin grense, og det er ingen konkrete indikasjoner på kvikkleireproblematikk for denne spesifikke eiendommen. Risikoen er spekulativ uten mer konkret evidens.\n\n**R10 – Lav finansiell buffer (confidence oppjustert til 0.82):** Godt dokumentert i regnskapet. Særlig bekymringsfullt sett i lys av det kommende rørprosjektet som krever låneopptak. Disponible midler er lave relativt til planlagte investeringer.\n\n**R11 – Skjulte feil (confidence beholdt 0.85):** Standardrisiko ved boligkjøp, godt dokumentert i tilstandsrapportens egne forbehold. Relevant å inkludere.\n\n**R12 – Fellesobligasjon 1973 (confidence nedjustert til 0.60):** Dokumentert i grunnboken, men det er sannsynlig at dette er en historisk heftelse som sikrer borettsinnskuddene og ikke representerer en reell risiko for kjøper. Dokumentene selv antyder at slike gamle dokumenter kan ha \"innhold som er gått ut på dato\". Confidence nedjusteres.\n\n**Manglende risikoer identifisert:**\n1. Prioritetsbestemmelse fra 1985 (1985/204808-1/6) er tinglyst men ikke analysert – ukjent innhold.\n2. Budsjett 2025 viser betydelig økning i felleskostnader allerede før rørprosjektet er ferdig finansiert.\n3. Tilstandsrapporten nevner at bad/våtrom tilliggende konstruksjoner ikke er undersøkt – potensiell skjult risiko.\n4. Selger eier kun 7/10 av andelen (medeier med 3/10 ideell andel) – dette kan komplisere salget.\n"
}

## Raw Response
```json
{
  "id": "msg_01NuPp8cVALC12W2NfznAaLD",
  "container": null,
  "content": [
    {
      "id": "toolu_01Kn2rFoL6eLDn3qkrXAxXtL",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Planlagt rørfornying med potensielle økte felleskostnader: Borettslaget har planlagt rørfornying (igangsatt september 2025) som krever låneopptak og vil medføre økte felleskostnader for alle andelseiere, inkludert kjøper.",
            "evidence": [
              "Styret har derfor vurdert alternative løsninger og engasjert rådgivende entreprenører for å vurdere rørenes faktiske tilstand.",
              "Det er innhentet to konkurrerende pristilbud på rørfornying. Styret har – under forutsetning av generalforsamlingens godkjenning – valgt å akseptere tilbudet fra TT-Teknikk AS. Arbeidet er planlagt igangsatt september 2025.",
              "Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.",
              "TT-Teknikk har rehabilitert taknedløp, innvendige avløpsrør og bunnledning i bygget i regi borettslaget. (Årstall: 2025)"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Høy fellesgjeld og løpende felleskostnader: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den totale pantsikrede gjelden er nær 7,9 millioner kroner. Kjøper overtar andel av denne gjelden.",
            "evidence": [
              "Bokført langsiktig gjeld 6 734 992",
              "Boligselskapets pantesikrede gjeld 7 934 992",
              "Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170",
              "Antall andeler, andel gjeld og sum av fellesgjeld lån 16364224137 40 22 615 904 600",
              "Budsjett 2025 innkrevd felleskostnad: 2 707 603 (opp fra 2 404 029 i 2024) – indikerer allerede planlagt økning"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Ulovlig romendring – entré slått sammen med soverom uten søknad: Tilstandsrapporten avdekker at entré er slått sammen med tilstøtende soverom, noe som normalt er søknadspliktig og kan være ulovlig.",
            "evidence": [
              "Entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
              "Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "TG2 på etasjeskille/gulv mot grunn – membran/tettesjikt har passert halvparten av forventet brukstid: Tilstandsgrad 2 er gitt for etasjeskille/gulv mot grunn, noe som indikerer at vedlikehold eller utbedring kan bli nødvendig.",
            "evidence": [
              "Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert.",
              "Det er nå ingen symptomer på funksjonssvekkelse, men...",
              "Etasjeskille/gulv mot grunn Årstall: 2021 Kilde: Tidligere salgsoppgaver"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R5",
            "description": "Radonmåling ikke fullført – verdier til analyse: Selger har utført radonmåling, men verdiene er ikke ferdig analysert på tidspunktet for egenerklæringen. Kjøper kjenner ikke til faktisk radonkonsentrasjon i boligen.",
            "evidence": [
              "Er det utført radonmåling? Ja",
              "Når ble målingen utført og hva ble måleverdiene? Ikke fått verdiene enda. De er til analyse.",
              "Det bør gjennomføres radonmålinger. (anbefaling i tilstandsrapporten)"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Panteheftelse på borettslagsandelen – DNB Bank ASA og DNB Boligkreditt AS har pant på NOK 2 850 000: Det er registrert et pantedokument på andelen som kjøper må forholde seg til ved overtakelse.",
            "evidence": [
              "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000",
              "PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006",
              "PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av Ås sentralområde og gang-/sykkelvei langs fylkesvei 152, som kan medføre endringer i nærområdet.",
            "evidence": [
              "Reguleringsplaner under arbeid i nærheten (500 meter)",
              "Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt",
              "Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt",
              "Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status..."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R8",
            "description": "Elektriske arbeider utført – samsvarserklæring foreligger, men el-tilsyn bør vurderes: Det er utført tilleggsarbeider på det elektriske anlegget etter 1999, inkludert omtrekking av stue og soverom. Tilstandsrapporten anbefaler konsultasjon med elektrofaglig fagperson ved behov.",
            "evidence": [
              "Er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Ja",
              "Eksisterer det samsvarserklæring? Ja",
              "Ifølge egenerklæring er det utført flere håndverkertjenester på boligen de siste 5 årene. Dette omfatter blant annet elektrikerarbeider i form av omtrekking av stue og soverom, etablering av...",
              "Bygningssakkyndig kan anbefale å konsultere offentlige myndigheter eller kvalifisert elektrofaglig fagperson ved behov for grundigere undersøkelser."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R9",
            "description": "Kvikkleirevurdering kan være relevant – eiendommen ligger under marin grense: Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Det er ikke dokumentert at slik vurdering er gjort for eiendommen.",
            "evidence": [
              "§ 12.1 Kvikkleire: For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.",
              "Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          },
          {
            "risk_id": "R10",
            "description": "Begrenset bankinnskudd og disponible midler i borettslaget – lav finansiell buffer: Borettslaget har relativt begrensede disponible midler (kr 343 345) og en avsetningskonto med kun kr 108 849,61, noe som gir liten buffer for uforutsette utgifter.",
            "evidence": [
              "C. Disponible midler 343 345 270 531",
              "Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.",
              "Innestående bank 355 709 414 546"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R11",
            "description": "Tilstandsrapporten er ingen garanti mot skjulte feil og mangler: Rapporten er basert på visuell gjennomgang uten inngrep i byggverket, og kan ikke avdekke skjulte feil, skader eller mangler.",
            "evidence": [
              "Rapporten gir en vurdering av byggverk og bygningsdeler som bygningssakkyndig har observert, og som fremkommer av Forskrift til avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Fellesobligasjon for borettslagsinnskudd fra 1973 – historisk heftelse: Det er registrert en fellesobligasjon for borettslagsinnskudd fra 1973 på NOK 1 200 000, som fortsatt er tinglyst på eiendommen.",
            "evidence": [
              "1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000",
              "Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          }
        ],
        "re_retrieval_queries": [
          "Hva er det eksakte lånebeløpet for rørfornying og forventet økning i felleskostnader etter rørprosjektet?",
          "Er det dokumentert søknad eller godkjenning for sammenslåing av entré og soverom hos Plan- og bygningsetaten?",
          "Hva er fullstendige radonmåleverdier for Lyngveien 24A?",
          "Er det andre TG2 eller TG3 avvik i tilstandsrapporten som ikke er fanget opp i risikolisten?",
          "Hva er borettslagets vedlikeholdsplan og fremtidige budsjetterte kostnader utover rørfornying?",
          "Er det registrert ras- eller skredfare (H310_1) på eller nær eiendommen Lyngveien 24A?",
          "Hva er fullstendig innhold i prioritetsbestemmelsen fra 1985 (1985/204808-1/6)?",
          "Er det registrert restanser på felleskostnader fra nåværende andelseier?"
        ],
        "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rørfornying (confidence oppjustert til 0.97):** Svært godt dokumentert. Egenerklæringen bekrefter at TT-Teknikk faktisk har utført rehabilitering i 2025, noe som styrker evidensen ytterligere. Arbeidet er allerede igangsatt/utført, men låneopptak og økte felleskostnader er fortsatt en reell risiko fremover.\n\n**R2 – Høy fellesgjeld (confidence oppjustert til 0.95):** Godt dokumentert i regnskapet. Budsjett 2025 viser allerede planlagt økning i innkrevde felleskostnader fra 2 404 029 til 2 707 603, noe som er et viktig tilleggselement som styrker risikoen.\n\n**R3 – Ulovlig romendring (confidence beholdt 0.90):** Klart dokumentert i tilstandsrapporten. Risikoen er reell – det er ikke dokumentert at søknad er innsendt eller godkjenning foreligger.\n\n**R4 – TG2 etasjeskille/gulv (confidence beholdt 0.88):** Godt dokumentert. Årstall 2021 fra tidligere salgsoppgaver indikerer at tettesjiktet er fra 2021, men vurderingen er basert på alder. Ingen akutte symptomer, men risiko for fremtidig utbedringsbehov er reell.\n\n**R5 – Radonmåling ikke fullført (confidence beholdt 0.88):** Klart dokumentert. Verdiene er ikke tilgjengelige for kjøper, noe som er en reell informasjonsrisiko.\n\n**R6 – Panteheftelse DNB (confidence oppjustert til 0.90):** Bekreftet i to separate grunnboksutskrifter. Dette er selgers private pant, ikke borettslagets, og vil normalt slettes ved salg/oppgjør. Risikoen er at kjøper må sikre at dette faktisk slettes ved overtakelse.\n\n**R7 – Reguleringsplaner (confidence nedjustert til 0.70):** Dokumentert at planene er under arbeid, men det er usikkert hvilken direkte påvirkning disse vil ha på den aktuelle eiendommen. Gang-/sykkelvei og bevaring av sentralområde er relativt nøytrale for en boligeiendom. Confidence nedjusteres noe.\n\n**R8 – Elektriske arbeider (confidence nedjustert til 0.65):** Samsvarserklæring foreligger, noe som reduserer risikoen betydelig. Tilstandsrapporten nevner kun at fagperson kan konsulteres \"ved behov\". Dette er en lav risiko gitt at dokumentasjonen er på plass.\n\n**R9 – Kvikkleire (confidence nedjustert til 0.50):** Bestemmelsen gjelder for reguleringsplaner og byggesøknader, ikke for eksisterende bebyggelse. Det er ikke dokumentert at eiendommen faktisk ligger under marin grense, og det er ingen konkrete indikasjoner på kvikkleireproblematikk for denne spesifikke eiendommen. Risikoen er spekulativ uten mer konkret evidens.\n\n**R10 – Lav finansiell buffer (confidence oppjustert til 0.82):** Godt dokumentert i regnskapet. Særlig bekymringsfullt sett i lys av det kommende rørprosjektet som krever låneopptak. Disponible midler er lave relativt til planlagte investeringer.\n\n**R11 – Skjulte feil (confidence beholdt 0.85):** Standardrisiko ved boligkjøp, godt dokumentert i tilstandsrapportens egne forbehold. Relevant å inkludere.\n\n**R12 – Fellesobligasjon 1973 (confidence nedjustert til 0.60):** Dokumentert i grunnboken, men det er sannsynlig at dette er en historisk heftelse som sikrer borettsinnskuddene og ikke representerer en reell risiko for kjøper. Dokumentene selv antyder at slike gamle dokumenter kan ha \"innhold som er gått ut på dato\". Confidence nedjusteres.\n\n**Manglende risikoer identifisert:**\n1. Prioritetsbestemmelse fra 1985 (1985/204808-1/6) er tinglyst men ikke analysert – ukjent innhold.\n2. Budsjett 2025 viser betydelig økning i felleskostnader allerede før rørprosjektet er ferdig finansiert.\n3. Tilstandsrapporten nevner at bad/våtrom tilliggende konstruksjoner ikke er undersøkt – potensiell skjult risiko.\n4. Selger eier kun 7/10 av andelen (medeier med 3/10 ideell andel) – dette kan komplisere salget.\n"
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
    "input_tokens": 23625,
    "output_tokens": 4916,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
