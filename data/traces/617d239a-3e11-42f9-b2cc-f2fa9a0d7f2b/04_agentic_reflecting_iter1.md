# Trace: agentic_reflecting_iter1
- **Run ID:** 617d239a-3e11-42f9-b2cc-f2fa9a0d7f2b
- **Tidspunkt:** 2026-03-25T21:25:24.372759+00:00
- **Varighet:** 97.20s
- **Input tokens:** 18452
- **Output tokens:** 5059

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
Risiko 1: Økt kostnadsnivå etter utløp av 5-årsgaranti: Sameiets 5-årsgaranti på fellesanliggender gikk ut i mai 2024. Styret varsler eksplisitt om at kostnadsnivået kan øke fremover, noe som kan medføre høyere felleskostnader for den enkelte seksjonseier.
  Confidence: 0.95
  Evidens: Prisstigningen det siste året gir noen utfordringer som styret fortsetter å jobbe med. Dette sett spesielt i lys av at kostnadsnivået kan bli økt etter at 5-årsgarantien på sameiets fellesanliggender (også for den enkelte eier) gikk ut mai 2024.; Saker styret har arbeidet med i 2024: 1. Avslutning av 5-års garantibehandlingen i mai 2024, 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold

Risiko 2: Pågående reguleringsarbeid (NTNU campus): Det er igangsatt planleggingsarbeid (Plan-ID r20180044) som berører eiendommen. Planprogrammet gjelder NTNUs campussamling rundt Gløshaugen, noe som kan medføre endringer i omgivelsene, økt byggeaktivitet, støy og endret karakter på nærområdet.
  Confidence: 0.88
  Evidens: Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja. 5001 r20180044 Planprogram for samlet campus i Trondheim; Planprogrammet har to formål: 1) Avklare overordnede rammer for NTNUs campussamling rundt Gløshaugen og 2) sikre at hensynet til miljø og samfunn blir tatt i betraktning under forberedelsen av planer og tiltak for universitets- og campusformål i Bycampus Elgeseter

Risiko 3: Begrensning i råderett – forbud mot dagligvarehandel: Det er tinglyst en begrensning i råderetten (dok.nr. 1092488, 16.12.2013) som forbyr etablering av dagligvarehandel på eiendommen. Dette kan påvirke fremtidig bruk og verdi av eiendommen.
  Confidence: 0.82
  Evidens: 16.12.2013 – Dokumentnr: 1092488 – Begrensing i råderett. Rettighetshaver: I K Lykke AS, Org.nr: 814 055 922. Kan ikke etableres dagligvarehandel på eiendommen.

Risiko 4: Hyblifiseringsbestemmelse: Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse (vedtatt 07.03.2024), som krever særskilt tillatelse fra kommunen for å dele opp boligen til hybler. Dette begrenser fleksibiliteten i bruken av boligen.
  Confidence: 0.85
  Evidens: Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse vedtatt 07.03.2024. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp en bolig til hybler.

Risiko 5: Fellesarealer og bygningsdeler ikke vurdert i tilstandsrapporten: Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde, herunder yttervegger, takkonstruksjon, taktekking, drenering, grunnmur og fundamenter. Kjøper har dermed begrenset informasjon om tilstanden på disse kritiske bygningsdelene.
  Confidence: 0.92
  Evidens: Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.

Risiko 6: Fremtidige vedlikeholdskostnader og prisstigning: Styrets årsberetning for 2024 påpeker at prisstigning gir utfordringer, og at fremtidig vedlikehold er et satsingsområde. Budsjett 2026 viser økte kostnader, inkludert avsetning til fremtidig vedlikehold på kr 200 000. Dette kan medføre økte felleskostnader fremover.
  Confidence: 0.87
  Evidens: Saker styret har arbeidet med i 2024: 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold, 5. Forefallende vedlikehold, innbruddssikring; Avsetning framtidig vedlikehold: 200 000 (Budsjett 2026); Vedlikehold/drift: 114 700 (Budsjett 2026) vs. 392 625 (Regnskap pr oktober 2025) – betydelig overskridelse i 2025

Risiko 7: Tinglyst erklæring om telefonledninger/stolper/kabler: Det er tinglyst en erklæring fra 1969 (dok.nr. 11487) til fordel for Televerket om rettigheter knyttet til telefonledninger, stolper, kabler og grøfter på eiendommen. Dette kan innebære begrensninger på bruken av deler av eiendommen.
  Confidence: 0.7
  Evidens: 03.09.1969 – Dokumentnr: 11487 – Erklæring/avtale. Rettighetshaver: Televerket. Bestemmelser om telefonledninger/stolper/kabler/grøfter m.v.

Risiko 8: Eiendommen avsatt til sentrumsformål – framtidig i kommuneplanen: Kommuneplanens arealdel 2022–2034 avsetter eiendommen til 'Sentrumsformål – Framtidig', noe som kan innebære fremtidige endringer i arealbruk og omgivelser som kan påvirke bomiljøet.
  Confidence: 0.75
  Evidens: Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til: Sentrumsformål - Framtidig. Kommuneplanens arealdel 2022-2034 (27.3.2025)

Risiko 9: Privat adkomstvei og private stikkledninger: Adkomst til eiendommen skjer via privat vei, og stikkledningene fra eiendommen til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader.
  Confidence: 0.78
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet. Adkomst til eiendommen skjer via privat vei.

Risiko 10: Fjernvarmeregulering under arbeid: Styret har i 2024 arbeidet med regulering av fjernvarme, og fjernvarmekostnader utgjør en betydelig post i budsjettet. Variasjon i fjernvarmekostnader kan påvirke felleskostnadene.
  Confidence: 0.72
  Evidens: Saker styret har arbeidet med i 2024: 3. Fjernvarme regulering; Fjernvarme: 454 699 (Budsjett 2026) vs. 496 000 (Budsjett 2025) – betydelig kostnadspost med variasjon

Dokumentkontekst:
[d194_d194 | Side [1]]
en vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det

---

[d194_d194 | Side [1]]
ten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten

---

[d194_d194 | Side [1]]
brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler

---

[d194_d194 | Side [1]]
ikelig med benkeplass og gode arbeidsforhold.
34

## Side 35

OM EIENDOMMEN
All informasjon i tilstandsrapporten anses som kjent for
Eiendommens
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert
tilstand
med TG2 og TG3 bør vurderes nøye, da de indikerer avvik
Takstmann: Fredrik Johnsen fra normal slitasje og/ eller høy alder, noe som kan
innebære behov for utbedringer. Bygningsdeler som er
Type takst avholdt av takstmann: Tilstandsrapport

---

[d194_d194 | Side [1]]
kal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren

---

[d194_d194 | Side [1]]
graden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese

---

[d194_d194 | Side [1]]
 økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og

---

[d194_d194 | Side [1]]
grad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Tellefsens gate 6, 7030 Trondheim 2 av 12
50

## Side 51

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til

---

[d194_d194 | Side [1]]
pekontrakten kan gjennomgås – med mindre avvik er tydelig avtalt mellom kjøper og
hos eiendomsmegler før budet legges inn. Kontakt selger.
eiendomsmegler for eventuelle spørsmål.
Selger leverer eiendommen i ryddig og rengjort stand. Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra
Kontrakts‑
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
grunnlag
fagkyndig vurdering,

---

[d194_d194 | Side [1]]
 TG-2 TG-3 TG-IU
1 13 0 0 0
Fredrik Johnsen fj@tft.no Tellefsens gate 6
GNR: 404 BNR: 418 SNR: 50
Takst-forum Trøndelag AS 91132028 7030 Trondheim
49

## Side 50

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som

---

[d194_d194 | Side [1]]
 for 2024 har styret blant annet
I forbindelse med salget er det blitt utført en arbeidet med avslutning av 5‑års garantibehandling og
tilstandsrapport av en bygningssakkyndig, som gir en regulering av fjernvarme. Årsberetningen sier at
teknisk gjennomgang av boligen og påpeker eventuelle prisstigningen det siste året gir noen utfordringer
avvik. Rapporten, sammen med selgers egenerklæring, er som styret fortsetter å jobbe med. Dette sett spesielt i lys
vedlagt salgsoppgaven. Det er viktig at interessenter

---

[d194_d194 | Side [1]]
gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler tjenester som bidrar til en trygg bolighandel og et
bærekraftig bolighold. For å kunne

---

[d194_d194 | Side [1]]
upe by
a third party. Validating the signature confirms that the contents have not been modified since the time of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
32006250
:ecnerefer
tnemucoD
48

## Side 49

Tellefsens gate 6
7030 TRONDHEIM
Tilstandsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 2019
BRA: 74 m2
BRA-i: 69 m2
Rapportdato: 12.2.2026 (Gyldig til 12.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 13 0 0 0
Fredrik Johnsen fj@tft.no Tellefsens

---

[d194_d194 | Side [1]]
vtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning

---

[d194_d194 | Side [1]]
gsdeler som er
Type takst avholdt av takstmann: Tilstandsrapport merket med TGIU er ikke blitt vurdert av takstmannen.
Sammendrag selgers egenerklæring: Utdrag fra selgers Boligen har ingen bygningsdeler med tilstandsgrad TG2
egenerklæring: eller TG3.
Har du ladeanlegg/ ladeboks for elbil i dag?
Øvrig
Ja. Installert ladeboks på parkeringsplass i garasjen.
informasjon
Selgers egenerklæringsskjema følger vedlagt
salgsoppgaven. Interessenter oppfordres til å gjennomgå
Adresse
dette nøye.
Tellefsens gate 6,

---

[d194_d194 | Side [1]]
te 6, 7030 Trondheim 5 av 12
53

## Side 54

5. Hovedrapport
5.1 Balkong, terrasse, platting
Type Balkong
Det er etablert en balkong i betong med stålrekkverk.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting TG-1
Ingen vesentlige avvik registrert.
5.2 Vinduer og dører
Beskrivelse
Vinduer med

---

[d194_d194 | Side [1]]
pr. rom.
5.4 Kjøkken
Overflater og innredning
Er det påvist fukt /skader rundt vask/kjøleskap/oppvaskmaskin? Nei
Er det påvist skader på kjøkkeninnredning utover normal slitasje? Nei
Oppsummering av overflater og innredning TG-1
Innredning har normal aldringsmessig slitasje og vurderes å være i bruksmessig god stand.
Avtrekk
Type avtrekk Mekanisk
Er det registrert avvik på avtrekk? Nei
Oppsummering av avtrekk TG-1
Avtrekk fungerte ved enkel test.
5.5 Lovlighet / HMS
Er det manglende samsvar mellom dagens

---

[d194_d194 | Side [1]]
 som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova

---

[d194_d194 | Side [1]]
il en trygg bolighandel og et
bærekraftig bolighold. For å kunne gjøre dette benyttes det tilstands - og eiendomsinformasjon fra
rapporten. Les mer om tjenestene og få tilgang til å avstå fra bruk av dine data ved å gå til denne
nettsiden: https://samtykke.vendu.no/39951
Dokumentasjon på Dersom det har vært utført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be

---

[d194_d194 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d194_d194 | Side [1]]
ppgaven eller Overført fra: Knr:5001 Gnr:404 Bnr:418
kan fås ved henvendelse til megler. Vi oppfordrer Gjelder denne registerenheten med flere
interessenter til å gjøre seg kjent med disse.
03.09.1969 ‑ Dokumentnr: 11487 ‑ Erklæring/ avtale
Rettighetshaver: Televerket
Tinglyste heftelser
Bestemmelser om telefonledninger/ stolper/ kabler/ grøfter
Tinglyste heftelser og rettigheter: På eiendommen er det m.v.
tinglyst følgende heftelser og rettigheter som følger Overført fra: Knr:5001 Gnr:404

---

[d194_d194 | Side [1]]
 Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: CF, EB 2
32006250
:ecnerefer
tnemucoD
45

## Side 46

21 Er det foretatt

---

[d194_d194 | Side [1]]
orkjøpsrett: Det foreligger ingen forkjøpsrett på
Regulerings og arealplaner
eiendommen.
Eiendommen er regulert til boligbebyggelse og utforming
Styregodkjennelse: Det kreves ikke styregodkjenning av etter reguleringsplan r20150020.
ny kjøper.
Eiendommen er i kommuneplanens arealdel avsatt til
Regnskap/ budsjett/ kostnadsøkninger: Sameiet hadde i sentrumsformål ‑ framtidig og byggesone 1.
2024 samlede driftsinntekter på kr 2 301 744 og samlede
driftskostnader på kr 2 188 629. Dette ga et positivt

---

[d194_d194 | Side [1]]
Installert ladeboks på parkeringsplass i garasjen.
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i

---

[d194_d194 | Side [1]]
entnr: 900453 ‑ Bestemmelse om
gjerde
Vei, vann og avløp
Gjelder mot Nord og øst av sin parsell. Parsellen
"Tilfredshet" har gjerdeplikt mot nr. 30 Elgesetergt. Eiendommen er tilknyttet offentlig vann‑ og
Overført fra: Knr:5001 Gnr:404 Bnr:418 avløpssystem. Stikkledningene fra eiendommen og ut til
Gjelder denne registerenheten med flere det kommunale nettet er private, og vedlikeholdsansvaret
for disse påhviler sameiet. Adkomst til eiendommen skjer
03.09.1969 ‑ Dokumentnr: 11487 ‑ Erklæring/ avtale via

---

[d194_d194 | Side [1]]
og samlede
driftskostnader på kr 2 188 629. Dette ga et positivt Eiendommen er omfattet av Trondheim kommunes
årsresultat på kr 179 424. hyblifiseringsbestemmelse vedtatt 07.03.2024. Dette
innebærer at det kreves særskilt tillatelse fra kommunen
for å dele opp en bolig til hybler. Ved avgjørelsen tas det
Vedtekter/ husordensregler
hensyn til om det etter kommunens skjønn er en
Eier forplikter seg til å gjøre seg kjent med vedtekter og forsvarlig utnytting av boligmassen.
husordensregler. Kopi av disse

---

[d194_d194 | Side [1]]

32006250
:ecnerefer
tnemucoD
45

## Side 46

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

[d194_d194 | Side [1]]
kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært

---

[d194_d194 | Side [1]]
ignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: CF, EB 3
32006250
:ecnerefer
tnemucoD
46

## Side 47

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller

---

[d194_d194 | Side [1]]
ftelser og rettigheter som følger Overført fra: Knr:5001 Gnr:404 Bnr:418
eiendommens matrikkel ved overskjøting til ny Gjelder denne registerenheten med flere
hjemmelshaver:
16.12.2013 ‑ Dokumentnr: 1092488 ‑ Begrensing i råderett
5001/ 404/ 418/ 50: Rettighetshaver: I K Lykke AS
26.05.1922 ‑ Dokumentnr: 900024 ‑ Opprettelse av Org.nr: 814 055 922
matrikkelenheten Kan ikke etableres dagligvarehandel på eiendommen
OPPRETTELSE ‑ FRADELT FRA ELGESÆTERGT.30 Overført fra: Knr:5001 Gnr:404 Bnr:418
Gjelder denne

---

[d194_d194 | Side [1]]
ielt i lys
vedlagt salgsoppgaven. Det er viktig at interessenter av at kostnadsnivået kan bli økt etter at 5‑årsgarantien på
grundig gjennomgår disse dokumentene før bud legges sameiets fellesanliggender (også for den enkelte eier)
inn. gikk ut mai 2024.
35

## Side 36

OM EIENDOMMEN
Sameiet har en felles takterrasse. Dersom man ønsker å
Beboernes forpliktelser og
benytte denne til arrangementer med flere enn 15
personer, må styret varsles senest tre dager i forkant. Det
dugnader
er installert

---

[d194_d194 | Side [1]]
svarlig utnytting av boligmassen.
husordensregler. Kopi av disse ligger vedlagt i
salgsoppgaven. Vi gjør oppmerksom på følgende planleggingsarbeid i
området som berører eiendommen:
Plan‑ID: r20180044
Planprogrammet har to formål: 1) Avklare overordnede
rammer for NTNUs campussamling rundt
Gløshaugen og 2) sikre at hensynet til miljø og samfunn
36

## Side 37

OM EIENDOMMEN
blir tatt i betraktning under forberedelsen Rettighet hefter i: Knr:5001 Gnr:404 Bnr:613
av planer og tiltak for universitets‑ og

---

[d194_d194 | Side [1]]
nyte. Det medfølger parkeringsplass i p‑kjeller med
ladeboks for elbil. Leiligheten ligger i 3. etasje med heis,
og både fjernvarme og internett er inkludert i
Bygningssakkyndigs
felleskostnadene.
kommentar til
Hvitevarer: Integrerte hvitevarer medfølger.
arealoppmåling
Innbo og løsøre: Salgsoppgaven inkluderer NEFs
Bod i kjeller er påvist av eier. standardliste "Oversikt over løsøre og tilbehør", som
legges til grunn med mindre annet er spesifisert i
salgsoppgaven.
Standard
Velkommen hjem! Gjenstander som

---

[d194_d194 | Side [1]]
nr:5001 Gnr:404 Bnr:613
av planer og tiltak for universitets‑ og campusformål i
Bycampus Elgeseter, og når det tas stilling til 26.05.1922 ‑ Dokumentnr: 900453 ‑ Bestemmelse om
om og på hvilke vilkår planer eller tiltak kan gjennomføres. gjerde
Gjelder mot Nord og øst av sin parsell. Parsellen
Kopi av situasjonskart, målebrev, reguleringsplaner m/ "Tilfredshet" har gjerdeplikt mot nr. 30 Elgesetergt.
bestemmelser etc. ligger vedlagt i salgsoppgaven eller Overført fra: Knr:5001 Gnr:404 Bnr:418
kan fås ved

---

[d194_d194 | Side [1]]
is rett til fri benyttelse når det ikke foregår Knr:1601 Gnr:404 Bnr:448
barnehageaktivitet.
Med flere bestemmelser 15.03.2019 ‑ Dokumentnr: 315818 ‑ Seksjonering
Opprettet seksjoner:
Snr: 50
21.01.2008 ‑ Dokumentnr: 55222 ‑ Best. om adkomstrett Formål: Bolig
37

## Side 38

OM EIENDOMMEN
Sameiebrøk: 69/ 4331 kommuneendring
Tidligere: Knr:1601 Gnr:404 Bnr:613
21.01.2008 ‑ Dokumentnr: 54994 ‑ Erklæring/ avtale
Rettighet hefter i: Knr:5001 Gnr:404 Bnr:612 Dokumenter kan fås ved henvendelse til

---

[d194_d194 | Side [1]]
 Knr:5001 Gnr:404 Bnr:612 Dokumenter kan fås ved henvendelse til megler.
Beboerne gis rett til fri benyttelse når det ikke foregår
barnehageaktivitet. Andel i realsameie:
Med flere bestemmelser 2008/ 55190‑1/ 200 21.01.2008 OPPRETTELSE AV
REALSAMEIE
21.01.2008 ‑ Dokumentnr: 55222 ‑ Best. om adkomstrett DENNE MATRIKKELENHETEN HAR ANDEL I:
Rettighet hefter i: Knr:5001 Gnr:404 Bnr:613 KNR: 5001 GNR: 404 BNR: 613 IDEELL: 1/ 2
26.05.1922 ‑ Dokumentnr: 900453 ‑ Bestemmelse om
gjerde
Vei, vann og avløp
Gjelder

---

[d194_d194 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i

---

[d194_d194 | Side [1]]
men skjer
03.09.1969 ‑ Dokumentnr: 11487 ‑ Erklæring/ avtale via privat vei.
Rettighetshaver: Televerket
Bestemmelser om telefonledninger/ stolper/ kabler/ grøfter
Utleie
m.v.
Overført fra: Knr:5001 Gnr:404 Bnr:418 Adgang til utleie: Boligen kan leies ut i samsvar med
Gjelder denne registerenheten med flere gjeldende lovverk, og vedtektene setter ingen
begrensninger på eierens utleieadgang. Korttidsutleie er
16.12.2013 ‑ Dokumentnr: 1092488 ‑ Begrensing i råderett tillatt i inntil 90 døgn per år, jf.

---

[d194_d194 | Side [1]]
 er satt opp under forutsetning av fortsatt drift. Det bekreftes herved at
forutsetningen om fortsatt drift er til stede. Prisstigningen det siste året gir noen utfordringer
som styret fortsetter å jobbe med. Dette sett spesielt i lys av at kostnadsnivået kan bli økt
etter at 5-årsgarantien på sameiets fellesanliggender (også for den enkelte eier) går ut i mai
2024.
Årsregnskap
Etter styrets oppfatning gir det fremlagte resultatregnskap og balanse med tilhørende noter
fyllestgjørende informasjon om driften

---

[d194_d194 | Side [1]]
stemmelser og tilstreber likestilling ved valg av
tillitsvalgte. Det er ikke iverksatt likestillingsfremmende tiltak.
85

## Side 86

Saker styret har arbeidet med i 2024
1. Avslutning av 5-års garantibehandlingen i mai 2024
2. Dugnad på uteareal og felles terrasser
3. Fjernvarme regulering
4. Kostnadsnivået, prisstigning, fremtidig vedlikehold
5. Forefallende vedlikehold, innbruddssikring
6. Organisering, HMS
Fortsatt drift
Årsregnskapet er satt opp under forutsetning av fortsatt drift. Det bekreftes

---

[d194_d194 | Side [1]]
anse med tilhørende noter
fyllestgjørende informasjon om driften og stillingen ved årsskiftet.
Forslag til anvendelse av årets resultat:
Resultatet foreslås tillagt egenkapitalen Trondheim, den 09.03.22 Styret i Sameiet Magnus
den Gode
Trondheim, den 27.03.25
Styret i Sameiet Magnus den Gode
86

## Side 87

Resultatregnskap
Sameiet Magnus Den Gode
Alle beløp i NOK
Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025
Note
Diverse driftsinntekter 0 6 031 0 0
Felleskostnader 1 686 619 1 594 980 1 692 904 1

---

[d194_d194 | Side [1]]
ør
13
83

## Side 84

Budsjett 2026
Sameiet Magnus Den Gode
Alle beløp i NOK
Budsjett Virkelig
2026 2025 Regnskap pr oktober 2025 Regnskap 2024
Felleskostnader 1 790 589 1 789 688 1 489 800 1 686 619
Leieinntekter 82 000 82 000 68 330 76 032
Fjernvarme 418 699 460 000 382 949 352 559
Inntekter Fellesavtale TV og bredbånd 233 900 193 500 161 019 186 534
Sum inntekter 2 525 188 2 525 188 2 102 099 2 301 744
Diverse lønn og andre godtgjørelser 87 538 87 538 58 191 0
Revisjonshonorar 15 200 14 000 14 170 13

---

[d194_d194 | Side [1]]
kr 3 371,‑ pr. mnd Andre utgifter: I tillegg til felleskostnader påløper
kostnader til for eksempel strøm, innboforsikring, diverse
Felleskostnader inkulderer: Totale fellesutgifter er kr 3 abonnementer og lignende.
371,39,‑ per måned. Dette inkluderer blant annet
parkering, internett, kabel‑TV, fjernvarme (a‑konto), samt
Formue:
generelle drifts‑ og vedlikeholdskostnader for sameiet.
Andel fellesformue: Kr 40 816 pr. 31.12.2025
Fellesutgiftene er fordelt slik:
‑ Felleskostnader brøk: kr 2

---

[d194_d194 | Side [1]]
d
Styremedlem: Berit Marie Aune
Bjarne Foss
Hans August Amundsen Kårvik
Magnar Hole
Varamedlemmer: Cajsa Wien
Arnulf Snekvik
Andre
Forretningsfører: Kjeldsberg boligforvaltning
Revisor: Deloitte as
Forsikring Gjensidige orgnr 88731703
Styremøter
Antall styremøter: 8
Ansatte
Sameiet har ingen ansatte.
Ytre miljø
Sameiet driver ikke med virksomhet som forårsaker forurensning av det ytre miljø.
Likestilling
Sameiet følger likestillingslovens bestemmelser og tilstreber likestilling ved valg av
tillitsvalgte.

---

[d194_d194 | Side [1]]
nformasjon: Fakturert beløp for perioden februar 2025 til
januar 2026 var totalt kr 16 943,‑. Dette inkluderer vann,
161 100,‑ (Omkostninger totalt) avløp, renovasjon og eiendomsskatt. Avgiftene kan
variere fra termin til termin.
6 051 100,‑ (Totalpris inkl. omkostninger)
Fellesgjeld
Estimert totalpris ink. omk
Lånebetingelser fellesgjeld: Det er ingen lån registrert på
Kr 6 038 600 sameiet.
Felleskostnader Andre kostnader:
Felleskostnader kr 3 371,‑ pr. mnd Andre utgifter: I tillegg til felleskostnader

---

[d194_d194 | Side [1]]
tanse bygningsarbeidene.
§ 23 FELLESKOSTNADER
Felleskostnader er kostnader ved eiendommen som ikke er knyttet til den enkelte
bruksenhet. Sameiets felleskostnader – alle driftskostnader som ikke kan relateres direkte til
noen seksjon – skal dekkes av seksjonseierne og fordeles iht. den eierbrøk seksjonen har fått
ved tinglysing av seksjoneringen med mindre særlige grunner taler for å fordele kostnadene
etter nytten for den enkelte bruksenhet eller etter forbruk.
På grunnlag av årsbudsjett skal det betales

---

[d194_d194 | Side [1]]
v bebyggelsen eller tomten som etter
forholdene i sameiet går ut over vanlig forvaltning eller vedlikehold
• omgjøring av fellesarealer til nye bruksenheter eller utvidelse av eksisterende
bruksenheter
• salg, kjøp, utleie eller leie av fast eiendom, inkludert seksjoner i sameiet som tilhører
eller skal tilhøre seksjonseierne i fellesskap, eller andre rettslige disposisjoner over
fast eiendom som går ut over vanlig forvaltning
• samtykke til at formålet for én eller flere bruksenheter endres fra

---

[d194_d194 | Side [1]]
rtjenester/ vedlikehold grøntarealer 325 400 297 000 313 731 285 105
Renhold/ matteservice 157 900 158 000 123 334 151 473
Vedlikehold/ drift 114 700 114 700 392 625 98 929
Snørydding, strøing 20 000 20 000 0 9 375
Energikostnader 185 000 185 000 93 060 160 068
Fjernvarme 454 699 496 000 175 977 352 559
Fellesavtale TV og bredbånd 233 900 193 500 201 839 184 313
Forsikring 204 300 191 300 161 048 184 462
Avsetning framtidig vedlikehold 200 000 200 000 133 333 219 654
Gebyr og bankomkostninger 8 000 8 000 8

---

[d194_d194 | Side [1]]
ige pålegg skal
firma regnes også med. følge med eiendommen, jf. avhendingsloven § 3‑4.
Fastmonterte eller spesialtilpassede installasjoner og
I henhold til eierseksjonsloven § 31 er sameierne innredning som anses som varig tilknyttet boligen, følger
ansvarlige overfor sameiets kreditorer i forhold til sin normalt med i handelen, med mindre det foreligger en
sameiebrøk. Ved manglende betaling av fellesutgifter har særskilt avtale mellom partene om noe annet, jf.
sameiet legal panterett i den enkelte

---

[d194_d194 | Side [1]]
adekledning,
endring av utvendige farger o.l. skal skje etter en samlet plan for bygningene etter vedtak i
årsmøtet.
Ved vesentlige bygningsmessige endringer/arbeider innen den enkelte seksjon, skal styret
skriftlig orienteres på forhånd. Styret har rett til å kreve dokumentasjon fra seksjonseier på at
arbeidene ikke vil medføre bygningsmessig skade/fare for bygningsmessig skade på
eiendommen. Styret kan i mangel av slik dokumentasjon stanse bygningsarbeidene.
§ 23 FELLESKOSTNADER
Felleskostnader er

---

[d194_d194 | Side [1]]
er, inkludert bygningen og felles
installasjoner, forsvarlig ved like. Vedlikeholdet skal utføres slik at skader på fellesarealene og
de enkelte bruksenhetene forebygges, og slik at seksjonseierne slipper ulemper.
Vedlikeholdsplikten omfatter alt som ikke faller inn under den enkelte seksjonseierens
vedlikeholdsplikt. Vedlikeholdsplikten omfatter også reparasjon og utskifting når det er
nødvendig, og utbedring av tilfeldige skader.
Sameiets vedlikeholdsplikt omfatter også felles installasjoner som går

---

[d194_d194 | Side [1]]
1132028
Firma: Takst-forum Trøndelag AS Epost: fj@tft.no
Tittel: Adresse: Vestre Rosten 69, 7072 Heimdal
Egne premisser:
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet yttervegger,
takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Informasjon om boligen
Adresse: Tellefsens gate 6, 7030 Trondheim
Kommunenr: 5001 Gårdsnr: 404 Bruksnr: 418

---

[d194_d194 | Side [1]]
dringer i sameiets vedtekter kan besluttes av årsmøtet med minst 2/3 av de avgitte
stemmer om ikke loven stiller strengere krav.
§ 27 FORHOLDET TIL EIERSEKSJONSLOVEN
Der hvor ikke annet følger av disse vedtekter kommer lov om eierseksjoner av 16.06.2017 nr.
65 til anvendelse.
10
80

## Side 81

Vedlegg 1 – Bruksrettplan boder og p-plasser
11
81

## Side 82

Vedlegg 2 – Fordeling boder og p-plasser
12
82

## Side 83

Vedlegg 3 – Instruks heisdør
13
83

## Side 84

Budsjett 2026
Sameiet Magnus Den Gode
Alle

---

[d194_d194 | Side [1]]
kter 0 6 031 0 0
Felleskostnader 1 686 619 1 594 980 1 692 904 1 789 688
Leieinntekter 76 032 66 096 76 000 82 000
Fjernvarme 2 352 559 445 880 479 000 460 000
Inntekter Fellesavtale TV og bredbånd 186 534 172 224 186 000 193 500
Sum inntekter 2 301 744 2 285 211 2 433 904 2 525 188
Diverse lønn og andre godtgjørelser 3 0 61 614 76 004 87 538
Revisjonshonorar 3 13 000 12 350 12 800 14 000
Forretningsførerhonorar 129 248 124 999 132 300 136 200
Andre honorarer og kontingenter 65 635 57 704 61 100 65

---

[d194_d194 | Side [1]]
om Boligkjøperforsikring i burde ha vært oppdaget ved en ordinær gjennomgang.
vedlagte materiell eller på https:/ / www.
soderbergpartners.no/ eiendom/ boligkjoper/ Dersom det oppstår behov for ytterligere avklaringer,
oppfordres interessenter til å kontakte eiendomsmegler
Lovanvendelse
eller egne rådgivere før de gir bud.
39

## Side 40

OM EIENDOMMEN
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk,

---

[d194_d194 | Side [1]]
 er basert på selgers informasjon,
grunnlag
fagkyndig vurdering, samt opplysninger fra offentlige
registre som kommunen og Kartverket. Det er viktig at
Overtakelse
kjøper setter seg grundig inn i alle salgsdokumentene,
Tidspunkt for overtakelse avtales mellom kjøper og herunder salgsoppgave, tilstandsrapport og selgers
selger. egenerklæring. Kjøper anses for å være kjent med forhold
som er tydelig beskrevet i salgsdokumentene, slike
Forsikring
forhold kan ikke senere gjøres gjeldende som en

---

[d194_d194 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d194_d194 | Side [1]]
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

[d194_d194 | Side [1]]
men?
Nei Ja
Når kjøpte du boligen?
År 2019
Hvor lenge har du eid boligen?
Antall år 6
Antall måneder 8
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Tryg forsikring
Polise/avtalenr. 8709783
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: CF, EB 1
32006250
:ecnerefer
tnemucoD
44

## Side 45

2

---

[d194_d194 | Side [1]]
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

[d194_d194 | Side [1]]
eil/mangler i profilen. Copyright © Finn.no AS 2026
107

## Side 108

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
108

## Side 109

109

## Side 110

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
−

---

[d194_d194 | Side [1]]
jøperforsikring fra Söderberg & interessenter anbefales derfor å undersøke eiendommen
Partners. Boligkjøperforsikring er en rettshjelpsforsikring nøye, gjerne sammen med fagperson, før bud gis.
som gir trygghet og profesjonell juridisk hjelp dersom det Dersom kjøper velger å kjøpe uten å ha sett eiendommen,
oppdages uventede feil eller mangler ved boligen de kan det ikke etter overtakelse reklameres på forhold som
neste fem årene. Les mer om Boligkjøperforsikring i burde ha vært oppdaget ved en ordinær

---

[d194_d194 | Side [1]]
t varsles senest tre dager i forkant. Det
dugnader
er installert kameraovervåkning på eiendommen som
driftes av et vaktselskap. Bruk av kullgrill på terrasser og Det har tidligere blitt avholdt dugnad for uteareal og felles
balkonger er forbudt. terrasser.
Forretningsfører: Kjeldsberg Eiendomsforvaltning
Energimerke
Sameiets forsikringsselskap: Gjensidige Energikarakter: B
Energifarge: Lys grønn
Polisenummer fellesforsikring: 88731703
Oppvarming
Husdyr: Husdyrhold er tillatt i henhold til

---

[d194_d194 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det

---

[d194_d194 | Side [1]]
under
bakkenivå bakkenivå
RpOmråde vedtatt RpOmråde vedtatt - på RpOmråde vedtatt - under
bakkenivå bakkenivå
Eiendomsgrense god Eiendomsgrense dårlig Veg
nøyaktighet nøyaktighet
Kommunalveg gatenavn . Privatveg gatenavn . Plan dispensasjon punkt
RpFormålGrense RpFareGrense RpGrense
Avkjørsel - både inn og Regulert nytt tre Regulert tomtegrense
utkjøring
Eiendomsgrense som skal Byggegrense Planlagt bebyggelse
oppheves
Bebyggelse som inngår i Bebyggelse som forutsettes Regulert senterlinje
planen

---

[d194_d194 | Side [1]]
 inngår i Bebyggelse som forutsettes Regulert senterlinje
planen fjernet
Regulert parkeringsfelt Regulert fotgjengerfelt Måle- og avstandslinje
Bevaring av bygninger Høyspenningsanlegg Bolig
Offentlig bebyggelse Kjøreveg Gate m/fortau
Annen veggrunn Gang-/sykkelveg Parkeringsplass
Offentlig friområde Felles avkjørsel Felles gangareal
Felles lekeareal RpBestemmelseOmråde Boligbebyggelse
Renovasjonsanlegg Kjøreveg Fortau
Parkering RpFormålGrense RpGrense
Avkjørsel - både inn og Byggegrense Felles

---

[d194_d194 | Side [1]]
Gnr Bnr Fnr Snr Adresse
5001 - Trondheim 404 418 0 50 Tellefsens gate 6, 7030 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 3672.91m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r20150020 Magnus Den Godes gate 22 gnr/bnr 404/417, 418, 448 (16.11.2017)

---

[d194_d194 | Side [1]]
 statistiske opplysninger om omsatte boliger. I Med sin sentrale beliggenhet og korte avstand til alt man
beregningen tas det hensyn til din boligs beliggenhet, trenger i hverdagen, er denne leiligheten et attraktivt valg
areal, byggeår og type bolig. Formuesverdien er en for studenter, par og etablerere.
prosentandel av denne boligverdien.For mer informasjon
om formuesverdi, se Skatteetatens nettsider.
Parkering
Parkeringsplanet inneholder 36 parkeringsplasser.
Beliggenhet
Parkeringsplasser og boder er

---

[d194_d194 | Side [1]]
EGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
5001 r20180044 Planprogram for samlet campus i Trondheim
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
11.02.2026 10:45:48 Side 1 av 2
88

## Side 89

PLANID Plannavn
Nei
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
11.02.2026 10:45:48 Side 2 av 2
89

## Side 90

Matrikkelkart
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr
5001 - Trondheim 404 418 0

---

[d194_d194 | Side [1]]
 Magnus Den Godes gate 22 gnr/bnr 404/417, 418, 448 (16.11.2017) Boligbebyggelse 3191.38m2
5001 r20150020 Magnus Den Godes gate 22 gnr/bnr 404/417, 418, 448 (16.11.2017) utforming 1008.44m2
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r1001i Magnus den Godes gate 24, gnr/bnr 404/418, 404/448, 404/417, 404/451 (6.9.2007)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et

---

[d194_d194 | Side [1]]
6 10:46:03 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
97

## Side 98

Reguleringsplaner
Eiendom: Gnr: 404 Bnr: 418 Fnr: 0 Snr: 50
Adresse: Tellefsens gate 6
Målestokk
7030 TRONDHEIM
Trondheim 1:1000
Annen info:
11.02.2026 10:46:24 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
98

## Side 99

Tegnforklaring
RpOmråde igangsatt RpOmråde vedtatt linje - på RpOmråde vedtatt - under
bakkenivå bakkenivå
RpOmråde vedtatt RpOmråde vedtatt - på

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Økt kostnadsnivå etter utløp av 5-årsgaranti: Sameiets 5-årsgaranti på fellesanliggender gikk ut i mai 2024. Styret varsler eksplisitt om at kostnadsnivået kan øke fremover, noe som kan medføre høyere felleskostnader for den enkelte seksjonseier.",
      "evidence": [
        "Prisstigningen det siste året gir noen utfordringer som styret fortsetter å jobbe med. Dette sett spesielt i lys av at kostnadsnivået kan bli økt etter at 5-årsgarantien på sameiets fellesanliggender (også for den enkelte eier) gikk ut mai 2024.",
        "Saker styret har arbeidet med i 2024: 1. Avslutning av 5-års garantibehandlingen i mai 2024, 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold",
        "Årsregnskapet er satt opp under forutsetning av fortsatt drift. Det bekreftes herved at forutsetningen om fortsatt drift er til stede. Prisstigningen det siste året gir noen utfordringer som styret fortsetter å jobbe med."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Pågående reguleringsarbeid (NTNU campus): Det er igangsatt planleggingsarbeid (Plan-ID r20180044) som berører eiendommen. Planprogrammet gjelder NTNUs campussamling rundt Gløshaugen, noe som kan medføre endringer i omgivelsene, økt byggeaktivitet, støy og endret karakter på nærområdet.",
      "evidence": [
        "Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja. 5001 r20180044 Planprogram for samlet campus i Trondheim",
        "Planprogrammet har to formål: 1) Avklare overordnede rammer for NTNUs campussamling rundt Gløshaugen og 2) sikre at hensynet til miljø og samfunn blir tatt i betraktning under forberedelsen av planer og tiltak for universitets- og campusformål i Bycampus Elgeseter"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Begrensning i råderett – forbud mot dagligvarehandel: Det er tinglyst en begrensning i råderetten (dok.nr. 1092488, 16.12.2013) som forbyr etablering av dagligvarehandel på eiendommen. Dette kan påvirke fremtidig bruk og verdi av eiendommen.",
      "evidence": [
        "16.12.2013 – Dokumentnr: 1092488 – Begrensing i råderett. Rettighetshaver: I K Lykke AS, Org.nr: 814 055 922. Kan ikke etableres dagligvarehandel på eiendommen.",
        "Overført fra: Knr:5001 Gnr:404 Bnr:418 – Gjelder denne registerenheten med flere"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R4",
      "description": "Hyblifiseringsbestemmelse: Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse (vedtatt 07.03.2024), som krever særskilt tillatelse fra kommunen for å dele opp boligen til hybler. Dette begrenser fleksibiliteten i bruken av boligen.",
      "evidence": [
        "Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse vedtatt 07.03.2024. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp en bolig til hybler.",
        "Ved avgjørelsen tas det hensyn til om det etter kommunens skjønn er en forsvarlig utnytting av boligmassen."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R5",
      "description": "Fellesarealer og bygningsdeler ikke vurdert i tilstandsrapporten: Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde, herunder yttervegger, takkonstruksjon, taktekking, drenering, grunnmur og fundamenter. Kjøper har dermed begrenset informasjon om tilstanden på disse kritiske bygningsdelene.",
      "evidence": [
        "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.",
        "Boligen har ingen bygningsdeler med tilstandsgrad TG2 eller TG3 – men dette gjelder kun de vurderte delene."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R6",
      "description": "Fremtidige vedlikeholdskostnader og prisstigning: Styrets årsberetning for 2024 påpeker at prisstigning gir utfordringer, og at fremtidig vedlikehold er et satsingsområde. Budsjett 2026 viser økte kostnader, inkludert avsetning til fremtidig vedlikehold på kr 200 000. Særlig bekymringsfullt er at vedlikehold/drift i regnskap pr. oktober 2025 allerede er på kr 392 625 mot budsjettert kr 114 700 – en overskridelse på over 240 %.",
      "evidence": [
        "Saker styret har arbeidet med i 2024: 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold, 5. Forefallende vedlikehold, innbruddssikring",
        "Avsetning framtidig vedlikehold: 200 000 (Budsjett 2026)",
        "Vedlikehold/drift: 114 700 (Budsjett 2026) vs. 392 625 (Regnskap pr oktober 2025) – betydelig overskridelse i 2025",
        "Felleskostnader 1 790 589 (Budsjett 2026) vs. 1 686 619 (Regnskap 2024) – stigende trend"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R7",
      "description": "Tinglyst erklæring om telefonledninger/stolper/kabler: Det er tinglyst en erklæring fra 1969 (dok.nr. 11487) til fordel for Televerket om rettigheter knyttet til telefonledninger, stolper, kabler og grøfter på eiendommen. Dette kan innebære begrensninger på bruken av deler av eiendommen.",
      "evidence": [
        "03.09.1969 – Dokumentnr: 11487 – Erklæring/avtale. Rettighetshaver: Televerket. Bestemmelser om telefonledninger/stolper/kabler/grøfter m.v.",
        "Overført fra: Knr:5001 Gnr:404 Bnr:418 – Gjelder denne registerenheten med flere"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R8",
      "description": "Eiendommen avsatt til sentrumsformål – framtidig i kommuneplanen: Kommuneplanens arealdel 2022–2034 avsetter eiendommen til 'Sentrumsformål – Framtidig', noe som kan innebære fremtidige endringer i arealbruk og omgivelser som kan påvirke bomiljøet.",
      "evidence": [
        "Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til: Sentrumsformål - Framtidig. Kommuneplanens arealdel 2022-2034 (27.3.2025)",
        "Eiendommen er regulert til boligbebyggelse og utforming etter reguleringsplan r20150020 – gjeldende regulering er bolig, men overordnet kommuneplan peker mot sentrumsformål"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R9",
      "description": "Privat adkomstvei og private stikkledninger: Adkomst til eiendommen skjer via privat vei, og stikkledningene fra eiendommen til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Adkomst til eiendommen skjer via privat vei."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Fjernvarmeregulering under arbeid og kostnadsvariasjon: Styret har i 2024 arbeidet med regulering av fjernvarme, og fjernvarmekostnader utgjør en betydelig post i budsjettet (kr 454 699 i budsjett 2026). Variasjon i fjernvarmekostnader kan påvirke felleskostnadene. Merk at fjernvarme er inkludert i felleskostnadene, noe som gjør beboerne eksponert for prisendringer.",
      "evidence": [
        "Saker styret har arbeidet med i 2024: 3. Fjernvarme regulering",
        "Fjernvarme: 454 699 (Budsjett 2026) vs. 496 000 (Budsjett 2025) – betydelig kostnadspost",
        "Fjernvarme 2 352 559 (Regnskap 2024) – note 2 indikerer at fjernvarme er en separat inntekts- og kostnadspost",
        "Leiligheten ligger i 3. etasje med heis, og både fjernvarme og internett er inkludert i felleskostnadene."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R11",
      "description": "NY RISIKO – Vedlikeholdsoverskridelse 2025 indikerer skjulte vedlikeholdsbehov: Regnskap pr. oktober 2025 viser vedlikehold/drift på kr 392 625 mot budsjettert kr 114 700 for hele året – en overskridelse på over 240 %. Dette kan indikere uforutsette vedlikeholdsbehov i bygget som ikke er fullt ut kartlagt, og som kan gi ytterligere kostnadsøkninger.",
      "evidence": [
        "Vedlikehold/drift: Budsjett 2026: 114 700, Budsjett 2025: 114 700, Regnskap pr oktober 2025: 392 625, Regnskap 2024: 98 929",
        "Saker styret har arbeidet med i 2024: 5. Forefallende vedlikehold, innbruddssikring"
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "NY RISIKO – Korttidsutleie begrenset til 90 døgn per år: Boligen kan leies ut korttid i inntil 90 døgn per år i henhold til eierseksjonsloven. Dette begrenser potensiell leieinntekt for kjøpere som ønsker å benytte plattformer som Airbnb.",
      "evidence": [
        "Korttidsutleie er tillatt i inntil 90 døgn per år, jf. [eierseksjonsloven]",
        "Adgang til utleie: Boligen kan leies ut i samsvar med gjeldende lovverk, og vedtektene setter ingen begrensninger på eierens utleieadgang."
      ],
      "source_documents": [
        "d194_d194"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "Televerket erklæring telefonledninger praktisk konsekvens begrensning tomt",
    "NTNU campus reguleringsplan r20180044 fremdrift vedtak konsekvenser naboer",
    "vedlikehold drift overskridelse 2025 årsak spesifikasjon hva ble utbedret",
    "fjernvarme regulering prisendring avtale Trondheim Energi",
    "dagligvarehandel begrensning I K Lykke AS praktisk betydning leilighet sameie",
    "sameiet Magnus den Gode fellesgjeld fremtidige investeringer vedlikeholdsplan",
    "radonmåling resultat Tellefsens gate 6",
    "energimerke B dokumentasjon oppvarming fjernvarme leilighet"
  ],
  "reasoning": "\nGjennomgang av alle 10 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – 5-årsgaranti (confidence opp fra 0.95 → 0.97):** Svært godt dokumentert med direkte sitat fra årsberetningen og styrets arbeidsliste. Evidensen er klar og eksplisitt. Confidence justeres marginalt opp da det finnes to uavhengige kildepassasjer som bekrefter dette.\n\n**R2 – NTNU campus regulering (0.88 → 0.88):** Godt dokumentert via reguleringsopplysningene. Plan-ID r20180044 er bekreftet. Confidence holdes da vi ikke vet planens fremdrift eller konkrete konsekvenser for eiendommen.\n\n**R3 – Dagligvarehandel begrensning (0.82 → 0.70):** Evidensen er klar og tinglyst, men risikoen er begrenset for en boligseksjon (snr 50) da dagligvarehandel uansett ikke er aktuelt formål. Begrensningen er mer relevant for eiendommen som helhet. Confidence justeres ned da praktisk risiko for boligkjøper er lav.\n\n**R4 – Hyblifisering (0.85 → 0.85):** Godt dokumentert. Confidence holdes.\n\n**R5 – Fellesarealer ikke vurdert (0.92 → 0.93):** Svært godt dokumentert med eksplisitt formulering fra takstmannens egne premisser. Confidence justeres marginalt opp.\n\n**R6 – Vedlikeholdskostnader (0.87 → 0.92):** Evidensen er sterkere enn opprinnelig vurdert. Budsjettoverskridelsen på vedlikehold/drift i 2025 (392 625 vs. 114 700 budsjettert) er dramatisk og bør fremheves tydeligere. Confidence justeres opp.\n\n**R7 – Televerket erklæring (0.70 → 0.55):** Evidensen bekrefter at heftelsen eksisterer, men for en leilighet i et sameie bygget i 2019 er det lite sannsynlig at en erklæring fra 1969 om telefonledninger har praktisk betydning for den individuelle seksjonseieren. Confidence justeres ned.\n\n**R8 – Sentrumsformål framtidig (0.75 → 0.75):** Evidensen bekrefter kommuneplanformålet. Gjeldende regulering er bolig (r20150020), men overordnet plan peker mot sentrumsformål. Confidence holdes.\n\n**R9 – Privat vei og stikkledninger (0.78 → 0.80):** Godt dokumentert. Vedlikeholdsansvaret er eksplisitt nevnt. Confidence justeres marginalt opp.\n\n**R10 – Fjernvarme (0.72 → 0.72):** Evidensen bekrefter at fjernvarme er en stor kostnadspost og at styret har jobbet med regulering. Confidence holdes.\n\n**Nye risikoer identifisert:**\n\n**R11 – Vedlikeholdsoverskridelse 2025:** Den dramatiske overskridelsen på vedlikehold/drift (392 625 vs. 114 700 budsjettert pr. oktober 2025) er en selvstendig risiko som indikerer uforutsette vedlikeholdsbehov. Dette er ikke tilstrekkelig fremhevet i de opprinnelige risikoene og fortjener egen risiko.\n\n**R12 – Korttidsutleie begrenset:** Dokumentet nevner eksplisitt 90-døgnsregelen for korttidsutleie. Dette er en relevant begrensning for kjøpere som vurderer Airbnb-utleie, særlig gitt beliggenheten nær NTNU.\n\n**Manglende informasjon som bør undersøkes:**\n- Radonmåling: Selger svarer \"Nei\" på om radonmåling er foretatt (spørsmål 21) – dette er en potensiell risiko som ikke er identifisert\n- Konkrete konsekvenser av Televerket-erklæringen\n- Årsak til den store vedlikeholdsoverskridelsen i 2025\n- Fjernvarmeavtalens betingelser og prisregulering\n"
}

## Raw Response
```json
{
  "id": "msg_01LZE8qj1VaQEAqg8vtW31Ao",
  "container": null,
  "content": [
    {
      "id": "toolu_01CJjM5V5DksyqSEzs55Emxp",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Økt kostnadsnivå etter utløp av 5-årsgaranti: Sameiets 5-årsgaranti på fellesanliggender gikk ut i mai 2024. Styret varsler eksplisitt om at kostnadsnivået kan øke fremover, noe som kan medføre høyere felleskostnader for den enkelte seksjonseier.",
            "evidence": [
              "Prisstigningen det siste året gir noen utfordringer som styret fortsetter å jobbe med. Dette sett spesielt i lys av at kostnadsnivået kan bli økt etter at 5-årsgarantien på sameiets fellesanliggender (også for den enkelte eier) gikk ut mai 2024.",
              "Saker styret har arbeidet med i 2024: 1. Avslutning av 5-års garantibehandlingen i mai 2024, 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold",
              "Årsregnskapet er satt opp under forutsetning av fortsatt drift. Det bekreftes herved at forutsetningen om fortsatt drift er til stede. Prisstigningen det siste året gir noen utfordringer som styret fortsetter å jobbe med."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Pågående reguleringsarbeid (NTNU campus): Det er igangsatt planleggingsarbeid (Plan-ID r20180044) som berører eiendommen. Planprogrammet gjelder NTNUs campussamling rundt Gløshaugen, noe som kan medføre endringer i omgivelsene, økt byggeaktivitet, støy og endret karakter på nærområdet.",
            "evidence": [
              "Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen? Ja. 5001 r20180044 Planprogram for samlet campus i Trondheim",
              "Planprogrammet har to formål: 1) Avklare overordnede rammer for NTNUs campussamling rundt Gløshaugen og 2) sikre at hensynet til miljø og samfunn blir tatt i betraktning under forberedelsen av planer og tiltak for universitets- og campusformål i Bycampus Elgeseter"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Begrensning i råderett – forbud mot dagligvarehandel: Det er tinglyst en begrensning i råderetten (dok.nr. 1092488, 16.12.2013) som forbyr etablering av dagligvarehandel på eiendommen. Dette kan påvirke fremtidig bruk og verdi av eiendommen.",
            "evidence": [
              "16.12.2013 – Dokumentnr: 1092488 – Begrensing i råderett. Rettighetshaver: I K Lykke AS, Org.nr: 814 055 922. Kan ikke etableres dagligvarehandel på eiendommen.",
              "Overført fra: Knr:5001 Gnr:404 Bnr:418 – Gjelder denne registerenheten med flere"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R4",
            "description": "Hyblifiseringsbestemmelse: Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse (vedtatt 07.03.2024), som krever særskilt tillatelse fra kommunen for å dele opp boligen til hybler. Dette begrenser fleksibiliteten i bruken av boligen.",
            "evidence": [
              "Eiendommen er omfattet av Trondheim kommunes hyblifiseringsbestemmelse vedtatt 07.03.2024. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp en bolig til hybler.",
              "Ved avgjørelsen tas det hensyn til om det etter kommunens skjønn er en forsvarlig utnytting av boligmassen."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R5",
            "description": "Fellesarealer og bygningsdeler ikke vurdert i tilstandsrapporten: Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde, herunder yttervegger, takkonstruksjon, taktekking, drenering, grunnmur og fundamenter. Kjøper har dermed begrenset informasjon om tilstanden på disse kritiske bygningsdelene.",
            "evidence": [
              "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.",
              "Boligen har ingen bygningsdeler med tilstandsgrad TG2 eller TG3 – men dette gjelder kun de vurderte delene."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R6",
            "description": "Fremtidige vedlikeholdskostnader og prisstigning: Styrets årsberetning for 2024 påpeker at prisstigning gir utfordringer, og at fremtidig vedlikehold er et satsingsområde. Budsjett 2026 viser økte kostnader, inkludert avsetning til fremtidig vedlikehold på kr 200 000. Særlig bekymringsfullt er at vedlikehold/drift i regnskap pr. oktober 2025 allerede er på kr 392 625 mot budsjettert kr 114 700 – en overskridelse på over 240 %.",
            "evidence": [
              "Saker styret har arbeidet med i 2024: 4. Kostnadsnivået, prisstigning, fremtidig vedlikehold, 5. Forefallende vedlikehold, innbruddssikring",
              "Avsetning framtidig vedlikehold: 200 000 (Budsjett 2026)",
              "Vedlikehold/drift: 114 700 (Budsjett 2026) vs. 392 625 (Regnskap pr oktober 2025) – betydelig overskridelse i 2025",
              "Felleskostnader 1 790 589 (Budsjett 2026) vs. 1 686 619 (Regnskap 2024) – stigende trend"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R7",
            "description": "Tinglyst erklæring om telefonledninger/stolper/kabler: Det er tinglyst en erklæring fra 1969 (dok.nr. 11487) til fordel for Televerket om rettigheter knyttet til telefonledninger, stolper, kabler og grøfter på eiendommen. Dette kan innebære begrensninger på bruken av deler av eiendommen.",
            "evidence": [
              "03.09.1969 – Dokumentnr: 11487 – Erklæring/avtale. Rettighetshaver: Televerket. Bestemmelser om telefonledninger/stolper/kabler/grøfter m.v.",
              "Overført fra: Knr:5001 Gnr:404 Bnr:418 – Gjelder denne registerenheten med flere"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R8",
            "description": "Eiendommen avsatt til sentrumsformål – framtidig i kommuneplanen: Kommuneplanens arealdel 2022–2034 avsetter eiendommen til 'Sentrumsformål – Framtidig', noe som kan innebære fremtidige endringer i arealbruk og omgivelser som kan påvirke bomiljøet.",
            "evidence": [
              "Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til: Sentrumsformål - Framtidig. Kommuneplanens arealdel 2022-2034 (27.3.2025)",
              "Eiendommen er regulert til boligbebyggelse og utforming etter reguleringsplan r20150020 – gjeldende regulering er bolig, men overordnet kommuneplan peker mot sentrumsformål"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R9",
            "description": "Privat adkomstvei og private stikkledninger: Adkomst til eiendommen skjer via privat vei, og stikkledningene fra eiendommen til det kommunale nettet er private. Vedlikeholdsansvaret for disse påhviler sameiet, noe som kan medføre uforutsette kostnader.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Adkomst til eiendommen skjer via privat vei."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Fjernvarmeregulering under arbeid og kostnadsvariasjon: Styret har i 2024 arbeidet med regulering av fjernvarme, og fjernvarmekostnader utgjør en betydelig post i budsjettet (kr 454 699 i budsjett 2026). Variasjon i fjernvarmekostnader kan påvirke felleskostnadene. Merk at fjernvarme er inkludert i felleskostnadene, noe som gjør beboerne eksponert for prisendringer.",
            "evidence": [
              "Saker styret har arbeidet med i 2024: 3. Fjernvarme regulering",
              "Fjernvarme: 454 699 (Budsjett 2026) vs. 496 000 (Budsjett 2025) – betydelig kostnadspost",
              "Fjernvarme 2 352 559 (Regnskap 2024) – note 2 indikerer at fjernvarme er en separat inntekts- og kostnadspost",
              "Leiligheten ligger i 3. etasje med heis, og både fjernvarme og internett er inkludert i felleskostnadene."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R11",
            "description": "NY RISIKO – Vedlikeholdsoverskridelse 2025 indikerer skjulte vedlikeholdsbehov: Regnskap pr. oktober 2025 viser vedlikehold/drift på kr 392 625 mot budsjettert kr 114 700 for hele året – en overskridelse på over 240 %. Dette kan indikere uforutsette vedlikeholdsbehov i bygget som ikke er fullt ut kartlagt, og som kan gi ytterligere kostnadsøkninger.",
            "evidence": [
              "Vedlikehold/drift: Budsjett 2026: 114 700, Budsjett 2025: 114 700, Regnskap pr oktober 2025: 392 625, Regnskap 2024: 98 929",
              "Saker styret har arbeidet med i 2024: 5. Forefallende vedlikehold, innbruddssikring"
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "NY RISIKO – Korttidsutleie begrenset til 90 døgn per år: Boligen kan leies ut korttid i inntil 90 døgn per år i henhold til eierseksjonsloven. Dette begrenser potensiell leieinntekt for kjøpere som ønsker å benytte plattformer som Airbnb.",
            "evidence": [
              "Korttidsutleie er tillatt i inntil 90 døgn per år, jf. [eierseksjonsloven]",
              "Adgang til utleie: Boligen kan leies ut i samsvar med gjeldende lovverk, og vedtektene setter ingen begrensninger på eierens utleieadgang."
            ],
            "source_documents": [
              "d194_d194"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "Televerket erklæring telefonledninger praktisk konsekvens begrensning tomt",
          "NTNU campus reguleringsplan r20180044 fremdrift vedtak konsekvenser naboer",
          "vedlikehold drift overskridelse 2025 årsak spesifikasjon hva ble utbedret",
          "fjernvarme regulering prisendring avtale Trondheim Energi",
          "dagligvarehandel begrensning I K Lykke AS praktisk betydning leilighet sameie",
          "sameiet Magnus den Gode fellesgjeld fremtidige investeringer vedlikeholdsplan",
          "radonmåling resultat Tellefsens gate 6",
          "energimerke B dokumentasjon oppvarming fjernvarme leilighet"
        ],
        "reasoning": "\nGjennomgang av alle 10 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – 5-årsgaranti (confidence opp fra 0.95 → 0.97):** Svært godt dokumentert med direkte sitat fra årsberetningen og styrets arbeidsliste. Evidensen er klar og eksplisitt. Confidence justeres marginalt opp da det finnes to uavhengige kildepassasjer som bekrefter dette.\n\n**R2 – NTNU campus regulering (0.88 → 0.88):** Godt dokumentert via reguleringsopplysningene. Plan-ID r20180044 er bekreftet. Confidence holdes da vi ikke vet planens fremdrift eller konkrete konsekvenser for eiendommen.\n\n**R3 – Dagligvarehandel begrensning (0.82 → 0.70):** Evidensen er klar og tinglyst, men risikoen er begrenset for en boligseksjon (snr 50) da dagligvarehandel uansett ikke er aktuelt formål. Begrensningen er mer relevant for eiendommen som helhet. Confidence justeres ned da praktisk risiko for boligkjøper er lav.\n\n**R4 – Hyblifisering (0.85 → 0.85):** Godt dokumentert. Confidence holdes.\n\n**R5 – Fellesarealer ikke vurdert (0.92 → 0.93):** Svært godt dokumentert med eksplisitt formulering fra takstmannens egne premisser. Confidence justeres marginalt opp.\n\n**R6 – Vedlikeholdskostnader (0.87 → 0.92):** Evidensen er sterkere enn opprinnelig vurdert. Budsjettoverskridelsen på vedlikehold/drift i 2025 (392 625 vs. 114 700 budsjettert) er dramatisk og bør fremheves tydeligere. Confidence justeres opp.\n\n**R7 – Televerket erklæring (0.70 → 0.55):** Evidensen bekrefter at heftelsen eksisterer, men for en leilighet i et sameie bygget i 2019 er det lite sannsynlig at en erklæring fra 1969 om telefonledninger har praktisk betydning for den individuelle seksjonseieren. Confidence justeres ned.\n\n**R8 – Sentrumsformål framtidig (0.75 → 0.75):** Evidensen bekrefter kommuneplanformålet. Gjeldende regulering er bolig (r20150020), men overordnet plan peker mot sentrumsformål. Confidence holdes.\n\n**R9 – Privat vei og stikkledninger (0.78 → 0.80):** Godt dokumentert. Vedlikeholdsansvaret er eksplisitt nevnt. Confidence justeres marginalt opp.\n\n**R10 – Fjernvarme (0.72 → 0.72):** Evidensen bekrefter at fjernvarme er en stor kostnadspost og at styret har jobbet med regulering. Confidence holdes.\n\n**Nye risikoer identifisert:**\n\n**R11 – Vedlikeholdsoverskridelse 2025:** Den dramatiske overskridelsen på vedlikehold/drift (392 625 vs. 114 700 budsjettert pr. oktober 2025) er en selvstendig risiko som indikerer uforutsette vedlikeholdsbehov. Dette er ikke tilstrekkelig fremhevet i de opprinnelige risikoene og fortjener egen risiko.\n\n**R12 – Korttidsutleie begrenset:** Dokumentet nevner eksplisitt 90-døgnsregelen for korttidsutleie. Dette er en relevant begrensning for kjøpere som vurderer Airbnb-utleie, særlig gitt beliggenheten nær NTNU.\n\n**Manglende informasjon som bør undersøkes:**\n- Radonmåling: Selger svarer \"Nei\" på om radonmåling er foretatt (spørsmål 21) – dette er en potensiell risiko som ikke er identifisert\n- Konkrete konsekvenser av Televerket-erklæringen\n- Årsak til den store vedlikeholdsoverskridelsen i 2025\n- Fjernvarmeavtalens betingelser og prisregulering\n"
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
    "input_tokens": 18452,
    "output_tokens": 5059,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
