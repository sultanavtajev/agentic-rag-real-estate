# Trace: agentic_reflecting_iter1
- **Run ID:** 426905cc-550e-4cc2-af84-9cc2f8acee14
- **Tidspunkt:** 2026-03-23T22:52:15.647682+00:00
- **Varighet:** 96.58s
- **Input tokens:** 18709
- **Output tokens:** 5163

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
Risiko 1: Sopp i fuger på bad (TG-2): Det er registrert sopp i fuger på badet. Selv om denne typen sopp kan vaskes bort med riktig produkt, indikerer det fuktproblemer og manglende vedlikehold som kan utvikle seg til større skader.
  Confidence: 0.95
  Evidens: TG-2 settes fordi det registreres sopp i fuger.; Denne type sopp kan lett vaskes bort med rette produktet.; Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Ja

Risiko 2: Manglende rekkverk og håndløper på innvendig trapp (TG-2): Den innvendige trappen mangler rekkverk og håndløper, noe som utgjør en sikkerhetsrisiko for beboerne.
  Confidence: 0.95
  Evidens: Trapp | Innvendig trapp fremstår i god stand men mangler rekkverk og håndløper, TG‑2 settes fordi det; Håndløper på veggen og rekkverk for bedre sikkerhet anbefales etablert.

Risiko 3: Gulv i gang i kjeller står i bue (TG-2): Gulvet i gangen i kjelleren er buet, noe som kan indikere fuktskader, setninger eller strukturelle problemer. Årsaken bør undersøkes nærmere.
  Confidence: 0.92
  Evidens: TG‑2 settes fordi gulv i gang i kjeller står i bue. Gulvet bør sjekkes for å avdekke årsaken.; U. etasje Gang ‑ Gulv | Innvendige overflater fremstår moderne og i god stand. Noe bruksmerker i gulv. TG‑2 settes fordi gulv i gang i kjeller står i bue.

Risiko 4: Elektrisk anlegg ikke kontrollert – risiko for avvik fra forskriftskrav (TGIU): Det elektriske anlegget er ikke digitalisert og ikke fullstendig kontrollert. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
  Confidence: 0.9
  Evidens: Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.; Elektrisk anlegg: Sikringsskap plassert i kjøkkenskap med automatsikringer.; Bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll etter retningslinjer fra FEL.

Risiko 5: Negativ egenkapital i boligaksjeselskapet (2023): Selskapets regnskap for 2023 viste et underskudd på 512 049 kr og negativ egenkapital på -806 423 kr. Dette representerer en finansiell risiko for kjøper.
  Confidence: 0.93
  Evidens: Selskapets regnskap for 2023 viste et underskudd på 512 049 kr. Egenkapitalen var negativ per 31.12.2023 med ‑806 423 kr (udekket tap).; Styret forklarer at den negative egenkapitalen skyldes at bygningene er bokført til historisk kostpris, og at den faktiske egenkapitalen vurderes til å være positiv basert på markedsverdi.

Risiko 6: Flytende rente på fellesgjeld – risiko for økte felleskostnader: Fellesgjelden har flytende rente på 6,55 %, noe som medfører risiko for økte månedlige kostnader dersom renten stiger. Det er heller ingen mulighet for individuell nedbetaling (IN-lån).
  Confidence: 0.92
  Evidens: Type Rente: Flytende rente. Rente: 6,55%.; Renten på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.; Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN‑lån): Nei

Risiko 7: Spesifikt utbedringsansvar knyttet til bruksendring fra næring til bolig (2020): Eier av aksjepost 47-53 har et særskilt ansvar for feil og mangler ved innredningen av kjelleren som ble omgjort fra næring til bolig i 2020, inkludert kostnader for tilkomst til felles infrastruktur og ildstedets funksjonalitet.
  Confidence: 0.97
  Evidens: Denne leiligheten (aksjepost 47‑53 i Benneches gate 1) har et spesifikt ansvar knyttet til bruksendringen fra næring til bolig i 2020.; I henhold til vedtektene hefter eier for utbedringsansvar for det elektriske anlegget.; Selskapet er ikke pliktig til å utbedre fukt‑ eller vanninnsig i kjelleren utover det som gjaldt før bruksendringen, og eier bærer reparasjonskostnader for slike skader i 10 år etter vedtaket.; Eier er også ansvarlig for kostnader knyttet til tilkomst til felles infrastruktur som ble utilgjengelig ved ominnredningen, samt ansvaret for ildstedets funksjonalitet.

Risiko 8: Ingen radonmåling utført: Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen. Radon er en helseskadelig gass som kan forekomme i boliger.
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 9: Ingen boligselgerforsikring tegnet av selger: Selger har ikke tegnet boligselgerforsikring, noe som kan svekke kjøpers mulighet til å få dekket eventuelle krav mot selger etter overtakelse.
  Confidence: 0.88
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 10: Naturlig ventilasjon og kjøkkenventilator med kullfilter – avvik (TG-2): Boligen har naturlig ventilasjon, og kjøkkenventilatoren har kullfilter i stedet for avtrekk til det fri. Dette er et avvik fra dagens krav og kan gi dårlig inneklima.
  Confidence: 0.88
  Evidens: Ventilasjon: Boligen har naturlig ventilasjon, og det er utført arbeider på anlegget etter byggeår. Kjøkkenet har en kjøkkenventilator med kullfilter.; Kjøkken ‑ Avtrekk | Kjøkkenventilator med kullfilter. TG‑2 – Avvik som kan kreve tiltak.; Det er ikke tillatt å koble kjøkken‑ eller baderomsvifter til felles luftekanaler; avtrekksvifter på kjøkken skal ha kullfilter.

Risiko 11: Skjulte feil og mangler – eldre bygg: Boligen er av eldre dato, og takstmann tar forbehold om skjulte feil og mangler som ikke kan avdekkes ved visuell befaring. Bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann og avløp er ikke funksjonsprøvd.
  Confidence: 0.9
  Evidens: Takstmann tar forbehold om skjulte feil og mangler.; Bygninger, og spesielt bygninger som er av eldre dato, kan ha skjulte feil og mangler som ikke er mulig å oppdage ved visuell befaring.; Det foretas ikke funksjonsprøving av bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann, avløp osv.

Risiko 12: Leiligheten har ikke rett til parkeringsplass: Ifølge vedtektene har aksjepost 47-53 ikke rett til å leie parkeringsplass i selskapet, noe som kan være en ulempe for kjøper.
  Confidence: 0.95
  Evidens: Det er viktig å merke seg at denne leiligheten (aksjepost 47‑53) ifølge vedtektene ikke har rett til å leie parkeringsplass.

Risiko 13: Økte felleskostnader og rammelån: Selskapet har økt rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og ladeanlegg, og generalforsamlingen har gitt mandat til å øke det med ytterligere kr 150 000. TV/internett-kostnaden øker fra kr 248 til kr 304 fra februar 2026.
  Confidence: 0.87
  Evidens: På generalforsamlingen 14. mai 2024 ble det gitt mandat til å øke rammelånet med ytterligere kr 150 000 ved behov.; På generalforsamlingen 10. mai 2023 ble det vedtatt å øke rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og installasjon av ladeanlegg.; Internett vil øke til kr 304,‑ fra 1. februar 2026.

Risiko 14: Begrenset adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskapet. Utleie krever styrets godkjenning, noe som begrenser kjøpers fleksibilitet.
  Confidence: 0.85
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning...

Risiko 15: Boden som inngår i BRA ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA ligger på sameiets fellesareal, men disponeres av denne seksjonen. Dette kan innebære usikkerhet rundt fremtidig disposisjonsrett.
  Confidence: 0.88
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen.

Dokumentkontekst:
[d039_d039 | Side [1]]
s når delen er ny, men der dokumentasjon på faglig god utførelse Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
mangler. har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Tilstandsgrad 2:

---

[d039_d039 | Side [1]]
,
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025 Tore Haugstulen
GNR: 217 BNR: 24 SNR: Min-takst AS 90418516 0169 Oslo
50 51

## Side 27

1. Tilstandsgradene 2. Om rapporten
Tilstandsgrad 0: Ingen avvik Om rapporten Rapporten følger kravene i ny forskrift til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal- og
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt

---

[d039_d039 | Side [1]]
edsak Norsk Standard NS 3600
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
spesielt på grunn av fare for større skader eller følgeskader bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og

---

[d039_d039 | Side [1]]
 Dette gjelder også om tilbehøret er
integrert.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å Struktur og referansenivå Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk Standard NS 3600
varsle om faren for skader på grunn

---

[d039_d039 | Side [1]]
ens tekniske tilstand
med tanke på behov for tiltak, samt å vise resultatene av en utført tilstandsanalyse for å bidra til økt
trygghet og redusert konfliktnivå ved eierskifte.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig. Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse

---

[d039_d039 | Side [1]]
boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Tilstandsgrad 3: Store eller alvorlige avvik Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger bygningsdelen da bare har normal slitasje.
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3

---

[d039_d039 | Side [1]]
nne avdekke vesentlige forhold.
Benneshes gate 1, 0169 Oslo 2 av 18 Benneshes gate 1, 0169 Oslo 3 av 18
52 53

## Side 28

3. Rapportsammendrag 4. Informasjon om oppdraget
Befaringsdato Rapportdato
Alle bygningsdeler angitt med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er angitt i rapportsammendraget. Ytterligere opplysninger er gitt i hovedrapporten. 03.12.2025 07.12.2025
Hjemmelshavere
Bygningsdeler med TG2
Navn: Tomas Falk Gohn Tilstede ved inspeksjon: Nei
Navn: Tilstede ved

---

[d039_d039 | Side [1]]
e tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt moderniseringsdepartementet 21.06.2021. I tillegg beskriver rapporten følgende kontrollpunkter utover
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen. minimumskravet i forskriften; støttemurer, tilleggsbygninger ( garasje mm ), etasjeskillere, renner / nedløp,
toalettrom, ildsted / piper og trapper. Formålet med rapporten er å kartlegge boligens tekniske tilstand
med tanke på behov for tiltak, samt å vise

---

[d039_d039 | Side [1]]
ng bygningene ble oppsatt (relatert til byggeforskrifter som var gjeldene ved oppføringen).
Takstmann tar forbehold om skjulte feil og mangler, og forutsetter at byggene er godkjent slik som de fremsto ved befaringen. Tilstandsgrad 2 kan brukes
Oppsummering av overflater TG-2 på bygningsdeler som ikke er synlig for kontroll der bygningsdelen har passert over halvparten av forventet levetid. Det foretas ikke funksjonsprøving av
bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann, avløp osv. om

---

[d039_d039 | Side [1]]
 bygget ikke har vært
dagens nivå. Prisøkningen trer i kraft fra mars. som 1 m² i arealoversikten. lar seg gjennomføre. tilgjengelig for inspeksjon. Disse delene kan dermed ha
feil eller mangler som ikke er avdekket.
Elektrisk anlegg: Sikringsskap plassert i kjøkkenskap ‑ Trapp | Innvendig trapp fremstår i god stand men
Byggemåte
med automatsikringer. mangler rekkverk og håndløper, TG‑2 settes fordi det Tilstandsrapporten beskriver byggverkets tekniske
Informasjon er hentet fra vedlagte tilstandsrapport,

---

[d039_d039 | Side [1]]
ikt
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
eller sammenbrudd
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
I tillegg kan det gis TG3 iht. NS3600 på enkelte bygningsdeler slik som etasjeskiller og terrengforhold uten
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
at det

---

[d039_d039 | Side [1]]
standsgrad på Oppsummering av overflater
det elektriske anlegget (https://www.dibk.no/regelverk/forskrift-til-avhendingslova-tryggere-
bolighandel). Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Ja
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-2
TG-2 settes fordi det registreres sopp i fuger.
Anbefalte tiltak / ytterligere undersøkelser anbefales
6.23 Varmtvann
Denne type sopp kan lett vaskes bort med rette

---

[d039_d039 | Side [1]]
anse og autorisasjon. Iht. veileder fra direktoratet
som vedlagt salgsoppgaven. I skjemaet fremkommer Ventilasjon: Boligen har naturlig ventilasjon, og det er TG2 ‑ Avvik som kan kreve tiltak: for byggkvalitet skal ikke den bygningssakkyndige sette
følgende informasjon: utført arbeider på anlegget etter byggeår. Kjøkkenet har tilstandsgrad på det elektriske anlegget (https:/ /
en kjøkkenventilator med kullfilter. Badet har mekanisk ‑ Kjøkken ‑ Avtrekk | Kjøkkenventilator med www.dibk.no/ regelverk/
I

---

[d039_d039 | Side [1]]
il megler. stand.
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i Hvis budgiver skal by på eiendommen i henhold til en Hvis budgiver ønsker å være anonym, kan bud fremmes
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig kjøpsfullmakt må megler kontaktes og fullmakten via en fullmektig.
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan

---

[d039_d039 | Side [1]]
 eller registrert elektrovirksomhet, og en
bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll etter retningslinjer fra
FEL (forsirkrift for elektrisk lavspenningsanlegg) da dette krever spesiell kompetanse og autorisasjon. Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Iht. veileder fra direktoratet for byggkvalitet skal ikke den bygningssakkyndige sette tilstandsgrad på Oppsummering av overflater
det elektriske anlegget

---

[d039_d039 | Side [1]]
0 C
samt vurdering av sansbare inntrykk. Takstmann er ikke gjort kjent med andre forhold som kan ha innvirkning på verdien enn det som er nevnt i
Håndløper på veggen og rekkverk for bedre sikkerhet anbefales etablert.
dokumentet. Feil eller mangler er kun anmerket der det er klart synlige forhold som kan registreres visuelt, uten inngrep i bygningskonstruksjoner. Alder er
et symptom på svikt i seg selv, og referansenivået er fra den gang bygningene ble oppsatt (relatert til byggeforskrifter som var

---

[d039_d039 | Side [1]]
om isolasjon, piper, ventilasjon, el-anlegg, vann, avløp osv. om dette ikke er beskrevet i rapporten. Bygninger, og spesielt bygninger som er
TG-2 settes fordi det registreres sopp i fuger. av eldre dato, kan ha skjulte feil og mangler som ikke er mulig å oppdage ved visuell befaring. Årlig kostnader for eiendommen er ikke
gjennomgått/beskrevet.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Informasjon om boligen
Denne type sopp kan lett vaskes bort med rette produktet.
Adresse: Benneshes gate 1,

---

[d039_d039 | Side [1]]
gne standard innvendig og utvendig, bygger på informasjon hentet fra
megler eller søk på saksnummer, adresse eller gårds‑ og avløpssystem. Stikkledningene fra eiendommen og ut til kjøpekontrakt utarbeidet av Emera i forbindelse med vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
bruksnummer på Plan‑ og bygningsetatens hjemmeside. det kommunale nettet er private, og eiendomstransaksjonen. Kjøpekontrakten kan besiktiges salgsoppgaven er basert på selgers informasjon,
vedlikeholdsansvaret for disse

---

[d039_d039 | Side [1]]
umentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Dokumentasjon på Dersom det har vært utført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den

---

[d039_d039 | Side [1]]
nde brukstillatelse eller ferdigattest?
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

[d039_d039 | Side [1]]
er basert på selgers informasjon,
vedlikeholdsansvaret for disse påhviler sameiet. hos eiendomsmegler før bud inngis. Kontakt fagkyndig vurdering, samt opplysninger fra offentlige
Adkomst til eiendommen skjer via offentlig vei. eiendomsmegler for spørsmål. registre som kommunen og Kartverket. Det er viktig at
Tinglyste heftelser
kjøper setter seg grundig inn i alle salgsdokumentene,
Tinglyste heftelser og rettigheter: Følgende tinglyste Selger leverer eiendommen i ryddig og rengjort stand. herunder

---

[d039_d039 | Side [1]]
i Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: RKT, TFG 2
44
62205220
:ecnerefer
tnemucoD
45

## Side 24

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til

---

[d039_d039 | Side [1]]
r utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller vedtatte reguleringsplaner,

---

[d039_d039 | Side [1]]
 noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: RKT, TFG

---

[d039_d039 | Side [1]]
e Selger leverer eiendommen i ryddig og rengjort stand. herunder salgsoppgave, tilstandsrapport og selgers
Utleie
heftelser følger eiendommen ved salg, og ved inngivelse egenerklæring. Kjøper anses for å være kjent med
av bud vil disse være akseptert av budgiver/ kjøper: Adgang til utleie: Det er begrenset adgang til å leie ut forhold som er tydelig beskrevet i salgsdokumentene,
Kontrakts‑
bolig i boligaksjeselskap. Med styrets godkjenning og slike forhold kan ikke senere gjøres gjeldende so men
1928/

---

[d039_d039 | Side [1]]
 for utbedringsansvar for
Øvrig
det elektriske anlegget. Det ble også bygget carport, styret samtykke i at brukeren av boligen holder dyr eventuelle feil, mangler og følgeskader ved innredningen
søppelskur og sykkelskur. Styret har i tillegg fått mandat dersom gode grunner taler for det, og dyreholdet ikke er av kjelleren. Selskapet er ikke pliktig til å utbedre fukt‑
informasjon
til å utrede muligheten for å bygge nye boder på til ulempe for de andre brukerne av eiendommen. eller vanninnsig i kjelleren

---

[d039_d039 | Side [1]]
rt utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om

---

[d039_d039 | Side [1]]
ende kursfortegnelse? vannskade
Alt utstyr og installasjoner som medfølger overtas slik de ikke aktuelt med renner og nedløp. ‑ Nei
er, uten garanti, med mindre det foreligger en gjeldende Er det manglende samsvar mellom kursfortegnelse og ‑ U. etasje Gang ‑ Gulv | Innvendige overflater fremstår
garanti fra produsent eller leverandør. Pipe/ Ildsted: Det er ikke pipe i boligen. Stuen har en antall sikringer? moderne og i god stand. Noe bruksmerker i gulv. TG‑2
peiskamin. ‑ Nei settes fordi gulv i gang i

---

[d039_d039 | Side [1]]
iligheten (aksjepost
elbillader. Selskapet har nylig ferdigstilt et større bakgårdsprosjekt. Polisenummer fellesforsikring: 84100898 47‑53 i Benneches gate 1) har et spesifikt ansvar knyttet
Dette inkluderte etablering av infrastruktur for elbilladere, til bruksendringen fra næring til bolig i 2020. I henhold til
nytt overvannsanlegg, ny belysning og oppgradering av Husdyr: Selv om det er vedtatt forbud mot dyrehold, kan vedtektene hefter eier for utbedringsansvar for
Øvrig
det elektriske anlegget. Det ble

---

[d039_d039 | Side [1]]
er av borettslagsloven § 5‑20, da langt de passer.
denne gjelder tilsvarende for boligaksjeselskaper, jf.
Regulering
borettslagsloven § 1‑4. Om informasjonsgrunnlaget
Vei, vann og avløp
Regulerings og arealplaner: Eiendommen er regulert til Opplysninger om boligens størrelse og utforming, både
bolig. For mer informasjon om reguleringsforhold, kontakt Eiendommen er tilknyttet offentlig vann‑ og Kjøper og selger er forpliktet til å undertegne standard innvendig og utvendig, bygger på informasjon hentet

---

[d039_d039 | Side [1]]
ntativt inngangsparti. trappeoppgangen er et flott
arkitektonisk element.
Bygården har en klassisk og velholdt Det er felles sykkelparkering under tak i
teglsteinsfasade. den skjermede bakgården.

## Side 15

OM EIENDOMMEN
BENNECHES GATE 1
OM EIENDOMMEN
eiendomsskatt.
Økonomi
Snitt for året er kr. 4 163,‑ pr mnd.
Prisantydning
Felleskostnadene er fordelt slik:
Kr 7 990 000 ‑ Felleskostnader: kr 3 749,‑
‑ Tv/ internett: kr 248,‑
‑ Eiendomsskatt: 333,‑ annenhver måned.
Omkostninger kjøpers beløp
7 990 000,00

---

[d039_d039 | Side [1]]
or de andre brukerne av eiendommen. eller vanninnsig i kjelleren utover det som gjaldt før
ubenyttet fellesareal på loftet. Innflytting med eller anskaffelse av husdyr forutsetter bruksendringen, og eier bærer reparasjonskostnader for
Adresse
Selskapets samtykke etter avklaring med aksjonærene i slike skader i 10 år etter vedtaket. Eier er også ansvarlig
Benneches gate 1, 0169 OSLO Selskapet har 20 parkeringsplasser som leies ut til oppgangen. Tillatelse kan omgjøres hvis dyr blir til for kostnader knyttet

---

[d039_d039 | Side [1]]
smerker i gulv. TG‑2
peiskamin. ‑ Nei settes fordi gulv i gang i kjeller står i bue. Gulvet bør
Kjøper aksepterer at det kan forekomme hull og merker Er det tegn på varmgang (termiske skader) på kabler, sjekkes for å avdekke årsaken.
etter montering av inventar og utstyr som ikke er en del Vinduer: Vinduer med 3‑lags isolerglass. Det er brytere, downlight, stikkkontakter, og elektrisk utstyr?
av overdragelsen. gjennomført arbeider etter opprinnelig byggeår. ‑ Nei TGIU ‑ Ikke undersøkt/ utilgjengelig:
Er

---

[d039_d039 | Side [1]]
 Tillatelse kan omgjøres hvis dyr blir til for kostnader knyttet til tilkomst til felles infrastruktur
aksjeeiere etter ansiennitet. Det er viktig å merke seg at uforutsett genanse. Dyr må ikke luftes på gårdsplassen. som ble utilgjengelig ved ominnredningen, samt ansvaret
Gnr. 217, bnr. 24, ideell andel 1/ 1 denne leiligheten (aksjepost 47‑53) ifølge vedtektene for ildstedets funksjonalitet. Se vedtekter punkt 5.8 for
i Oslo kommune. ikke har rett til å leie parkeringsplass. Det er installert

---

[d039_d039 | Side [1]]
570 Restsaldo: 1 752 902
Innfrielsesdato: 01.10.2041
Type Rente: Flytende rente
Estimert totalpris ink. omk
Rente: 6,55%.
Kr 8 081 599
Mulighet for individuell nedbetaling på hele eller deler av
fellesgjeld (IN‑lån): Nei
Felleskostnader
Felleskostnader kr 4 163,‑ pr. mnd
Sikringsordning
Felleskostnader inkulderer: Totale felleskostnader per Nei
måned: kr 3 997,‑ og 4 330,‑ annenhver måned pga.
29

## Side 16

OM EIENDOMMEN OM EIENDOMMEN
nærliggende Stensparken et populært alternativ.
Andre

---

[d039_d039 | Side [1]]
ternett vil øke til kr 304,‑ fra 1. februar
Omkostninger 2026. I tillegg til felleskostnadene vil det påløpe
kostnader for halvårlig vannavregning, eiendomsskatt og
10 500,00 (Eierskifte/ Transportgebyr) strømforbruk i fellesvaskeriet, som faktureres direkte til
4 150,00 (Noteringsgebyr pantedokument) aksjonæren. Renten på fellesgjelden er flytende og kan
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ endres, noe som vil påvirke størrelsen på
14 650,00 (Omkostninger totalt)

---

[d039_d039 | Side [1]]
.
Radonmåling
KLOAKKLEDN. Dersom kjøper velger å kjøpe uten å ha sett
Forsikring
Rettighetshaver: Henrichensgt 2 og 4 samt Colletsgt 10 Selger har ikke utført radonmåling. Det er ikke krav om eiendommen, kan det ikke etter overtakelse reklameres
dette med mindre boligen er helt eller delvis utleid. Boligselgerforsikring: Selger har ikke tegnet på forhold som burde ha vært oppdaget ved en ordinær
Selger bærer risikoen for at kjøper kan få tinglyst skjøte boligselgerforsikring. gjennomgang.
uten andre

---

[d039_d039 | Side [1]]
oe som vil påvirke størrelsen på
14 650,00 (Omkostninger totalt) felleskostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
8 081 599,00 (Totalpris inkl. omkostninger)
Kr 76 949 pr. 23.12.2025
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Lånebetingelser fellesgjeld: Selskapets totale lån og
vilkår:
Bank: Dnb Bank ASA
Lånenummer: 16368089587
Eierskiftegebyr
Type: Annuitetslån, 12 terminer per år.
Kr 6570 Restsaldo: 1 752 902
Innfrielsesdato: 01.10.2041
Type Rente:

---

[d039_d039 | Side [1]]
retning til generalforsamlingen hvert
regnskapsår.
12. FORHOLDET TIL AKSJELOVEN OG BORETTSLAGSLOVEN
For så vidt ikke annet følger av vedtektene gjelder reglene i lov aksjeselskaper av 13.06.1997 nr
44, samt lov om borettslag av 06.06.2003 nr 39, §§ 1-4, 1-5, 4-2 , kap 5 og omdanningsreglene i
§ 13-5.
13 14
146 147

## Side 75

Sameiets vedtekter ble opprinnelig vedtatt på generalforsamling 26. mai 1987.
Revidert på generalforsamling 4. april 2005.
Revidert på ekstraordinær generalforsamling 16. juni

---

[d039_d039 | Side [1]]
d gateopparbeidelse og ved arbeider som iverksettes etter pålegg av
politi, helsemyndigheter og andre myndigheter. Til dekning av sin andel av felleskostnadene skal den enkelte aksjeeier hver måned betale et
kontobeløp foreslått av styret, og vedtatt av generalforsamlingen. Selskapet kan endre
6.2 Felles installasjoner felleskostnadene med en måneds skriftlig varsel.
Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom boligen, skal For felleskostnader som ikke blir betalt ved

---

[d039_d039 | Side [1]]
ets stilling og resultat av virksomheten,
Hvis en aksjepost eies av flere i sameie, må de utpeke én til å representere aksjeposten og som ikke fremgår av resultatregnskap og balanse.
overfor selskapet, herunder møte på generalforsamlingen. De øvrige har møte- og talerett, b) Andre forhold av vesentlig betydning for selskapet, selv om de er inntrådt
men ikke stemmerett. etter regnskapsåret slutt.
c) Eventuelle endringer i lånerente eller lånebetingelser, eller hvis lån er avtalt eller oppsagt,
11.2

---

[d039_d039 | Side [1]]
tå funksjonssvikt. på kjøkken skal ha kullfilter. Budsjettet for 2024 estimerer et overskudd på kr 89 500,
Videre må kjøper være forberedt på det må foretas Selskapets regnskap for 2023 viste et underskudd på 512 basert på uendrede felleskostnader. På
oppgraderinger på grunn av slitasje, fraværende 049 kr. Egenkapitalen var negativ per 31.12.2023 med Selskapet har en kollektivavtale med Telia for TV og generalforsamlingen 10. mai 2023 ble det vedtatt å øke
vedlikehold, arbeider som er utført av ufaglærte,

---

[d039_d039 | Side [1]]
 per 31. desember 2023 lovkrav, og
 Resultatregnskap 2023  Gir årsregnskapet et rettvisende
 Noter til årsregnskapet, herunder bilde av sameiets 昀椀nansielle
et sammendrag av viktige stilling per 31. desember 2023, og
regnskapsprinsipper. av dets resultater for
regnskapsåret i samsvar med
regnskapslovens regler og god
regnskapsskikk i Norge.
Andre forhold
Budsjettallene som fremkommer i årsregnskapet er ikke revidert.
Grunnlag for konklusjonen
Vi har gjennomført revisjonen i samsvar med International

---

[d039_d039 | Side [1]]
 stand 9.1 Felleskostnader
Felleskostnadene skal fordeles mellom aksjeeierne ut fra den fordelingsnøkkel som fremgår
Selskapet skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt plikten ikke av vedtektene/leiekontrakter/selskapsavtaler, med mindre annet gyldig vedtas med samtykke
ligger på aksjeeierne. Skade på bolig eller inventar som tilhører selskapet, skal selskapet fra de aksjeeiere det angår. Fordelingen skal justeres dersom endringer av boligene eller
utbedre dersom skaden

---

[d039_d039 | Side [1]]
ligheter er det som
vinterhalvåret. Det er viktig å merke seg at innfrielse av det underliggende kravet. på dekning av felleskostnader og andre krav fra hovedregel kjøpsloven som regulerer handelen. I dette
energiforbruket kan variere fra husstand til husstand. selskapet, på inntil 2 ganger folketrygdens grunnbeløp. tilfellet vil likevel reglene i avhendingsloven benyttes så
Legalpant: Aksjelaget har legalpant i aksjen. Legalpanteretten følger av borettslagsloven § 5‑20, da langt de passer.
denne gjelder

---

[d039_d039 | Side [1]]
20 og fremstår moderne med medfølgende utbedringskostnader i sin kjøpsbeslutning,
Det gjøres særskilt oppmerksom på at boden som er mørke 60x60 fliser på gulv med gulvvarme og store, lyse jf. avhl. § 3‑10. Det samme gjelder eventuelt andre
medtatt i BRA‑e og totalt BRA, ligger på sameiets 60x60 fliser på veggene. Rommet er utstyrt med et opplysninger om kjente risikofaktorer, som for eksempel
Areal
fellesareal, men disponeres av denne seksjonen. Sameiet servantskap med glatte hvite skuffefronter,

---

[d039_d039 | Side [1]]
ges uventede feil eller mangler ved boligen de
samt i trapperom, gang, kontor og kjellerstue i tinglyste heftelser overstiger den forventede selskapets fellesgjeld, men boligselskapets løpende neste fem årene. Les mer om Boligkjøperforsikring i
underetasjen. I tillegg er det peiskamin i stuen. salgssummen, er det en forutsetning for at handel skal utgifter må dekkes av aksjeeierne. Manglende vedlagte materiell eller på https:/ /
kunne gjennomføres at kreditorene gir nødvendig innbetaling av fellesutgiftene

---

[d039_d039 | Side [1]]
vedlikeholde slikt som vinduer (også utskiftning av ruten), rør, sikringsskap
Selskapet og andre aksjeeiere kan kreve erstatning for tap som følge av at aksjeeieren ikke
fra og med første hovedsikring/inntakssikring, ledninger med tilbehør, varmekabler, inventar,
oppfyller pliktene sine, jf borettslagslovens §§ 5-13 og 5-15.
utstyr inklusive vannklosett og vask, apparater og innvendige flater. Bygningsmessige tiltak i
leilighet m.v. og tiltak som har betydning for selskapets fellesareal må ikke forekomme

---

[d039_d039 | Side [1]]
 nr 44 og burettslagsloven av 6. juni 2003 nr
39. (4) Aksjonærer skal svare for sin tilhørende del av selskapets felleskostnader.
Generalforsamlingen fastsetter felleskostnadenes størrelse etter forslag fra
Revidert på ordinær generalforsamling 10. mai 2023 styret. Selskapets fordelingsnøkkel for felleskostnader er:
30 aksjer: 11,26 % (næringslokalet)
1. NAVN, SELSKAPSFORM, FORMÅL OG FORRETNINGSKONTOR 17 aksjer: 4,98 % (5-roms leiligheter)
15 aksjer: 4,68 % (4-roms leiligheter)
1.1 Formål 10 aksjer: 4,38 %

---

[d039_d039 | Side [1]]
eier av leiligheten som på det tidspunktet var et næringslokale. vedlikeholdsplikt, herunder ettersyn, reparasjon eller utskifting. Ettersyn og utføring av arbeid
Dette ansvaret påligger fullt og helt den som til enhver tid er eier av leiligheten. skal gjennomføres slik at det ikke er til unødvendig ulempe for aksjeeieren eller annen bruker
av boligen.
9. FELLESKOSTNADER OG PANT I AKSJENE
6. SELSKAPETS VEDLIKEHOLDSPLIKT
6.1 Forsvarlig stand 9.1 Felleskostnader
Felleskostnadene skal fordeles mellom

---

[d039_d039 | Side [1]]
 vedtatt å øke
vedlikehold, arbeider som er utført av ufaglærte, ‑806 423 kr (udekket tap). Styret forklarer at den internett. Fra juni 2024 inkluderer avtalen bredbånd på rammelånet med kr 500 000 for å finansiere
utidsmessighet eller tekniske løsninger som ikke holder negative egenkapitalen skyldes at bygningene er bokført 250 mbit/ s til en kostnad på 248 kr per måned. Denne bakgårdsprosjekter og installasjon av ladeanlegg. På
dagens standard. I Norge er det en av oppgavene til Det til historisk

---

[d039_d039 | Side [1]]
ennom boligen, skal For felleskostnader som ikke blir betalt ved forfall, svarer aksjeeieren den til enhver tid
selskapet holde ved like. Selskapet har rett til å føre nye slike installasjoner gjennom boligen gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
dersom det ikke er til vesentlig ulempe for aksjeeieren.
9.2 Selskapets pantesikkerhet
6.3 Reparasjoner og utskifting
For krav på dekning av felleskostnader og andre krav fra selskapsforholdet har selskapet
Selskapets vedlikeholdsplikt

---

[d039_d039 | Side [1]]
gjengelig felles infrastruktur nå er utilgjengelig, skal eier av leiligheten bære kostnader for
Andelseier må for egen regning fjerne kjøkkenvifter eller annet som er koblet på felles
tilkomst til slik infrastruktur – samt kostnader ved tilbakeføring – i forbindelse med nødvendig
infrastruktur.
kontroll og vedlikehold. Kostnader som følge av eventuelt behov for omlegging av felles
infrastruktur skal dekkes av eier, såfremt omleggingsbehovet skyldes ominnredning i
forbindelse med bruksendringen.
5 6
138

---

[d039_d039 | Side [1]]
forvaltning AS
Vedtekter/ husordensregler
gjenstand for konstant utvikling, det må derfor påregnes eierskifte må kjøper og selger foreta et internt oppgjør.
at dagens anlegg ikke nødvendigvis er dimensjonert for Aksjeselskapets forsikringsselskap: Gjensidige Forsikring Vedlagt salgsoppgaven.
oppgradering av kjøkken med nye elektriske apparater, ASA
rehabilitering av bad m/ varmekabler eller installeringer Det er viktig å merke seg at denne leiligheten (aksjepost
elbillader. Selskapet har nylig ferdigstilt

---

[d039_d039 | Side [1]]
 det er ferdigstilt.
boligformål i 2020 (aksjepost 47-53). I den utstrekning det avdekkes feil/mangler ved
Aksjonæren har ansvar for å sørge for at felles infrastruktur og fellesområder som eventuelt
utførelsen av innredning av kjelleren i Benneches gate 1, eller unnlatelse av å utbedre
påvirkes av arbeidet, er i samme stand, eller bedre, etter at arbeidet er ferdigstilt.
eksisterende bygningsdeler slik at disse egner seg for innredning til beboelse, hefter den som
Aksjonærene har ansvar for eventuelle

---

[d039_d039 | Side [1]]
 Eiendomsforvaltning AS er forretningsfører. mellom kl. 23:00 og 07:00. Bygningsmessige endringer skyldes at bygningene er bokført til opprinnelige priser, ikke har lagt frem energiattest før avtale om salg er
Forretningsførselen, inkludert aksjebok og fakturering, er som påvirker fellesarealer krever styrets og at den faktiske egenkapitalen vurderes til å være inngått, kan kjøper få laget en energiattest ved hjelp av
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
ekspert for selgers regning, innen ett år

---

[d039_d039 | Side [1]]
s standard. I Norge er det en av oppgavene til Det til historisk kostpris, og at den reelle verdien av kostnaden er inkludert i felleskostnadene og vil øke til generalforsamlingen 14. mai 2024 ble det gitt mandat til å
lokale el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg eiendommen antas å gi en positiv egenkapital. Det er 304 kr fra 1. februar 2026. Beboere kan kjøpe øke rammelånet med ytterligere kr 150 000 ved behov
i boliger og fritidsboliger. Alle boliger skal ha periodisk ikke mulighet for

---

[d039_d039 | Side [1]]
tatt vanlige ordensregler for eiendommen. Selv om det er vedtatt månedlig vederlag. Vederlagets størrelse foreslås av styret, og vedtas av generalforsamlingen.
forbud mot dyrehold, kan styret samtykke i at brukeren av boligen holder dyr dersom gode
grunner taler for det, og dyreholdet ikke er til ulempe for de andre brukerne av eiendommen.
Eier av næringslokalet har disposisjonsrett til plass 18 og 19 i henhold til
parkeringsplassoversikten inntatt som vedlegg til vedtektene

---

[d039_d039 | Side [1]]

§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på  
planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer. 
 
§ 3. Før byggetillatelse kan gis, skal det foreligge detaljert bebyggelsesplan for vedkommende eiendom. Etter  
bygningsrådets bestemmelse i det enkelte tilfelle kan

---

[d039_d039 | Side [1]]
n for Oslo sentrum og indre sone, med noen endringer foretatt av departementet.

Ny paragraf ble vedtatt av Oslo bystyre 1.10.1987, S-2937. 
 
§ 1. Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne begrensningslinjen skal  
arealene nyttes som vist på planen.  
 
§ 2. Tidligere stadfestede reguleringsplaner for

---

[d039_d039 | Side [1]]
de 
på 3 meter. • 

§ 6. Reguleringsplaner innenfor planområdet som er stadfestet i tidsrommet mellom 4.9.1974 og stadfestelse av 
nærværende plan, skal gjelde foran denne plan. •

---

[d039_d039 | Side [1]]
n for Oslo sentrum og indre sone, med noen endringer foretatt av departementet,

S-2255.


Pgf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.
Før prosjektering tar til,

---

[d039_d039 | Side [1]]

REGULERINGSBESTEMMELSER TIL ENDRET REGULERINGSPLAN FOR OSLO SENTRUM OG INDRE 
SONE I OSLO KOMMUNE. 

Miljøverndepartementet har i brev av 28. juli 1977 og 19. Oktober 1977 i medhold av par 28,1, jfr. par 27 i  
bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i 
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av

---

[d039_d039 | Side [1]]

S-2937, 01.10.87 (se tidl. S-2255)


FORSLAG TIL ENDREDE REGULSERINGSBESTEMMELSER (NY PARAGRAF 7) FOR

SENTRUM OG INDRE SONE (SONEPLANEN).


Miljøverndepartementet har i brev av 28. juli 1977 og 19. oktober 1977 i medhold av paragraf 28,1,jfr.

---

[d039_d039 | Side [1]]
9 m m2 B8A: o 5 d ,8 m2 B7A: o 1 d 2,6 m2 B6A: o 1 d 2,6 m2 B5A: o 1 d 2,2 m2 B4A: o 1 d 2,3 m2 B3A: o 1 d 3,8 m2 B1A6: o 1 d 1,2 m2 B1A7: o 1 d 2,4 m2 B1A8: o 1 d 2,2 m2 B1A9: o 1 d 3,1 m2 B2A0: o 1 d 1,4 m2 B2A1: o 1 d 1,2 m2 S2A2: po 1 r 7 ts ,0 b o m d 2 Reguleringsbestemmelser i tilknytning til endret reguleringsplan for m o O t 2s0lo sentrum og in-
dresoneiOslokommune. Osl o
-
5
1
Eksisterende vinduerer 2 0
n
pla
ne
u Vedtaksdato: 28.07.1977 m m
Ko
Vedtattav: Miljøverndepartementet

---

[d039_d039 | Side [1]]
Vedtaksdato: 28.07.1977 m m
Ko
Vedtattav: Miljøverndepartementet 2(
6
2
k
Vedtaksdokumenter: 197701394 sa 5, 1 0 Lovverk: BL1965 9. 2 0 3. Høydereferanse: OSLOLOKAL k 2
dta
Merknader: Planenerheltellerdelvveisopphevetsomfølgeavbystyretsvedtak23.9.15,
Kommuneplan2015. SeogsåS
y
-
s
2t y9
re
3
ts
7,1.10.87endr.reg.best.
b
Knytning(er)motandreplaanver:V300589,V290689,V300187,V080384,26394,20483,
ge
øl
16578, 37684, 21884,mVf131284, V100495, 5984, 23383, 39183, 6382, 41871, 2390,
o
s
V160184,

---

[d039_d039 | Side [1]]
årav2side(r)inkludertdenne.
Besøksadresse:
Plan-ogbygningsetaten Sentralbord:+4721802180
Vahlsgate1,0187Oslo
Oslokommune Kundesenteret:+4723491000
Postadresse:
postmottak@pbe.oslo.kommune.no
Boks364Sentrum,
oslo.kommune.no/plan-bygg-og-eiendom Org.Nr.:NO971040823MVA
0102Oslo
102 103

## Side 53

S-2255


S-2255, 28.7.77 (SE ENDR.§7, S-2937) 

REGULERINGSBESTEMMELSER TIL ENDRET REGULERINGSPLAN

---

[d039_d039 | Side [1]]
ett opp- eller nedstigende linje eller fosterbarn av aksjeeieren eller
forsvarlig måte. Bruken av boligen og fellesarealene må ikke på en urimelig eller unødvendig ektefellen.
måte være til skade eller ulempe for andre aksjeeiere.
Leier skal signere for mottak av vedtekter, ordensregler og parkeringsregler, og skal forplikte
Næringsvirksomheten må være av en art som ikke er til sjenanse for beboerne, og med et seg til å overholde disse. Flytting skal meddeles Folkeregisteret.
formål som er forenlig med et

---

[d039_d039 | Side [1]]
ing skal meddeles Folkeregisteret.
formål som er forenlig med et bomiljø. Omsetning av næringsmidler, og næringer med
åpningstid kveld/natt, som forårsaker støy, lukt, forsøpling, parkering på eiendommens 4.5 Utleie av del av egen bolig
fortau, forsamlinger og annet sjenerende virksomhet er ikke forenlig med et godt bomiljø.
Aksjeeier som selv bor i boligen, kan leie ut deler av boligen til andre uten samtykke. Slik utleie
En aksjeeier kan med styrets godkjenning gjennomføre tiltak på eiendommen som er

---

[d039_d039 | Side [1]]
 i fra helt
34 35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
enkle vurderingskriterier. Siden elanlegget ikke er digitalisert. Beboere kan finne informasjon om forhåndsgodkjenning. Det er ikke tillatt å koble kjøkken‑ positiv basert på markedsverdi.
kontrollert er det sannsynlig at det siden kan avdekkes boligselskapet og boforhold på Vibbo.no. eller baderomsvifter til felles luftekanaler; avtrekksvifter
avvik fra dagens forskriftskrav og oppstå funksjonssvikt. på kjøkken skal ha kullfilter. Budsjettet for

---

[d039_d039 | Side [1]]
% blokk
1% annet 0% 57%
St.Hanshaugen
Oslo og omegn
Norge
Samlet vurdering
Sivilstand
Norge
TG-0 TG-1 TG-2 TG-3 TG-IU
«10 minutter å gå til hele Oslo.»
Gift 16% 33%
Sitat fra en lokalkjent 1 12 5 0 1
Ikke gift 75% 54%
Separert 8% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for th@min-takst.no Benneshes gate 1,
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes

---

[d039_d039 | Side [1]]
8. juli 1977 og 19. oktober 1977 i medhold av paragraf 28,1,jfr. paragraf

27 i bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i

tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av

---

[d039_d039 | Side [1]]

Hvor det er regulert til blanding av forretning/kontor eller bolig/forretning/kontor, skal det søkes
• 
innpasset forretninger i 1.etasje mot gate. Bruksendring av eksisterende forretning i 1.etasje mot gate
• 
kan kun tillates i særlige tilfelle.
• 
§ 5. I denne planen betyr utnyttelsesgrad (U) det samlede brutto gulvareal for

---

[d039_d039 | Side [1]]
inne på klinikken. rolig inne på klinikken.
 
Jeg tror denne type virksomhet vil passe godt inn i området – både fordi det er behov for Jeg tror denne type virksomhet vil passe godt inn i området – både fordi det er behov for
helsefaglige tjenester med fokus på familie og barn, og fordi det er et rolig og respektfullt helsefaglige tjenester med fokus på familie og barn, og fordi det er et rolig og respektfullt
konsept som tar hensyn til omgivelsene. Jeg har et stort ønske om å bidra positivt til

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Sopp i fuger på bad (TG-2): Det er registrert sopp i fuger på badet. Selv om denne typen sopp kan vaskes bort med riktig produkt, indikerer det fuktproblemer og manglende vedlikehold som kan utvikle seg til større skader.",
      "evidence": [
        "TG-2 settes fordi det registreres sopp i fuger.",
        "Denne type sopp kan lett vaskes bort med rette produktet.",
        "Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Ja"
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Manglende rekkverk og håndløper på innvendig trapp (TG-2): Den innvendige trappen mangler rekkverk og håndløper, noe som utgjør en sikkerhetsrisiko for beboerne.",
      "evidence": [
        "Trapp | Innvendig trapp fremstår i god stand men mangler rekkverk og håndløper, TG-2 settes fordi det",
        "Håndløper på veggen og rekkverk for bedre sikkerhet anbefales etablert."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Gulv i gang i kjeller står i bue (TG-2): Gulvet i gangen i kjelleren er buet, noe som kan indikere fuktskader, setninger eller strukturelle problemer. Årsaken bør undersøkes nærmere.",
      "evidence": [
        "TG-2 settes fordi gulv i gang i kjeller står i bue. Gulvet bør sjekkes for å avdekke årsaken.",
        "U. etasje Gang - Gulv | Innvendige overflater fremstår moderne og i god stand. Noe bruksmerker i gulv. TG-2 settes fordi gulv i gang i kjeller står i bue."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R4",
      "description": "Elektrisk anlegg ikke kontrollert – risiko for avvik fra forskriftskrav (TGIU): Det elektriske anlegget er ikke digitalisert og ikke fullstendig kontrollert. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
      "evidence": [
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
        "Elektrisk anlegg: Sikringsskap plassert i kjøkkenskap med automatsikringer.",
        "Bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll etter retningslinjer fra FEL."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Negativ egenkapital i boligaksjeselskapet (2023): Selskapets regnskap for 2023 viste et underskudd på 512 049 kr og negativ egenkapital på -806 423 kr. Dette representerer en finansiell risiko for kjøper.",
      "evidence": [
        "Selskapets regnskap for 2023 viste et underskudd på 512 049 kr. Egenkapitalen var negativ per 31.12.2023 med -806 423 kr (udekket tap).",
        "Styret forklarer at den negative egenkapitalen skyldes at bygningene er bokført til historisk kostpris, og at den faktiske egenkapitalen vurderes til å være positiv basert på markedsverdi.",
        "Budsjettet for 2024 estimerer et overskudd på kr 89 500, basert på uendrede felleskostnader."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Flytende rente på fellesgjeld – risiko for økte felleskostnader: Fellesgjelden har flytende rente på 6,55 %, noe som medfører risiko for økte månedlige kostnader dersom renten stiger. Det er heller ingen mulighet for individuell nedbetaling (IN-lån).",
      "evidence": [
        "Type Rente: Flytende rente. Rente: 6,55%.",
        "Renten på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.",
        "Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN-lån): Nei",
        "Kr 76 949 pr. 23.12.2025 (andel fellesgjeld)"
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Spesifikt utbedringsansvar knyttet til bruksendring fra næring til bolig (2020): Eier av aksjepost 47-53 har et særskilt ansvar for feil og mangler ved innredningen av kjelleren som ble omgjort fra næring til bolig i 2020, inkludert kostnader for tilkomst til felles infrastruktur og ildstedets funksjonalitet.",
      "evidence": [
        "Denne leiligheten (aksjepost 47-53 i Benneches gate 1) har et spesifikt ansvar knyttet til bruksendringen fra næring til bolig i 2020.",
        "I henhold til vedtektene hefter eier for utbedringsansvar for det elektriske anlegget.",
        "Selskapet er ikke pliktig til å utbedre fukt- eller vanninnsig i kjelleren utover det som gjaldt før bruksendringen, og eier bærer reparasjonskostnader for slike skader i 10 år etter vedtaket.",
        "Eier er også ansvarlig for kostnader knyttet til tilkomst til felles infrastruktur som ble utilgjengelig ved ominnredningen, samt ansvaret for ildstedets funksjonalitet."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R8",
      "description": "Ingen radonmåling utført: Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen. Radon er en helseskadelig gass som kan forekomme i boliger.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Ingen boligselgerforsikring tegnet av selger: Selger har ikke tegnet boligselgerforsikring, noe som kan svekke kjøpers mulighet til å få dekket eventuelle krav mot selger etter overtakelse.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Naturlig ventilasjon og kjøkkenventilator med kullfilter – avvik (TG-2): Boligen har naturlig ventilasjon, og kjøkkenventilatoren har kullfilter i stedet for avtrekk til det fri. Dette er et avvik fra dagens krav og kan gi dårlig inneklima.",
      "evidence": [
        "Ventilasjon: Boligen har naturlig ventilasjon, og det er utført arbeider på anlegget etter byggeår. Kjøkkenet har en kjøkkenventilator med kullfilter.",
        "Kjøkken - Avtrekk | Kjøkkenventilator med kullfilter. TG-2 – Avvik som kan kreve tiltak.",
        "Det er ikke tillatt å koble kjøkken- eller baderomsvifter til felles luftekanaler; avtrekksvifter på kjøkken skal ha kullfilter."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Skjulte feil og mangler – eldre bygg: Boligen er av eldre dato, og takstmann tar forbehold om skjulte feil og mangler som ikke kan avdekkes ved visuell befaring. Bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann og avløp er ikke funksjonsprøvd.",
      "evidence": [
        "Takstmann tar forbehold om skjulte feil og mangler.",
        "Bygninger, og spesielt bygninger som er av eldre dato, kan ha skjulte feil og mangler som ikke er mulig å oppdage ved visuell befaring.",
        "Det foretas ikke funksjonsprøving av bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann, avløp osv."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R12",
      "description": "Leiligheten har ikke rett til parkeringsplass: Ifølge vedtektene har aksjepost 47-53 ikke rett til å leie parkeringsplass i selskapet, noe som kan være en ulempe for kjøper.",
      "evidence": [
        "Det er viktig å merke seg at denne leiligheten (aksjepost 47-53) ifølge vedtektene ikke har rett til å leie parkeringsplass.",
        "Selskapet har 20 parkeringsplasser som leies ut til aksjeeiere etter ansiennitet."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R13",
      "description": "Økte felleskostnader og rammelån: Selskapet har økt rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og ladeanlegg, og generalforsamlingen har gitt mandat til å øke det med ytterligere kr 150 000. TV/internett-kostnaden øker fra kr 248 til kr 304 fra februar 2026.",
      "evidence": [
        "På generalforsamlingen 14. mai 2024 ble det gitt mandat til å øke rammelånet med ytterligere kr 150 000 ved behov.",
        "På generalforsamlingen 10. mai 2023 ble det vedtatt å øke rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og installasjon av ladeanlegg.",
        "Internett vil øke til kr 304,- fra 1. februar 2026."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R14",
      "description": "Begrenset adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskapet. Utleie krever styrets godkjenning, noe som begrenser kjøpers fleksibilitet.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning..."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Boden som inngår i BRA ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA ligger på sameiets fellesareal, men disponeres av denne seksjonen. Dette kan innebære usikkerhet rundt fremtidig disposisjonsrett.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen."
      ],
      "source_documents": [
        "d039_d039"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "fukt kjeller vanninnsig kjellerleilighet",
    "bruksendring kjeller ferdigattest godkjenning plan bygningsetat",
    "peiskamin ildsted funksjonalitet kontroll",
    "el-anlegg sikringsskap kjøkken kapasitet oppgradering",
    "budsjett 2024 2025 felleskostnader planlagte tiltak vedlikehold",
    "legalpant aksjeselskap sikringsordning",
    "skjeggkre insekter skadedyr bolig",
    "manglende ferdigattest brukstillatelse kjeller bolig"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Sopp i fuger (TG-2):** Godt støttet av dokumentet. Evidensen er klar og direkte. Confidence 0.95 opprettholdes. Merk at soppen beskrives som lett å vaske bort, men TG-2 er satt og fuktindikasjon er bekreftet.\n\n**R2 – Manglende rekkverk/håndløper (TG-2):** Godt støttet. Direkte sitat fra tilstandsrapporten. Confidence 0.95 opprettholdes.\n\n**R3 – Gulv i bue i kjellerkorridor (TG-2):** Godt støttet. Direkte sitat fra tilstandsrapporten. Årsaken er ukjent, noe som øker usikkerheten. Confidence 0.92 opprettholdes.\n\n**R4 – Elektrisk anlegg ikke kontrollert (TGIU):** Godt støttet. Dokumentet bekrefter at anlegget ikke er digitalisert og ikke kontrollert, og at avvik er sannsynlig. Confidence 0.90 opprettholdes. Tilleggsevidens: sikringsskap er plassert i kjøkkenskap, noe som i seg selv kan være et avvik.\n\n**R5 – Negativ egenkapital:** Godt støttet. Tallene er bekreftet i dokumentet. Styrets forklaring (historisk kostpris) er også dokumentert. Confidence justeres ned noe til 0.88 siden budsjettet for 2024 viser forventet overskudd på kr 89 500, noe som demper risikoen noe.\n\n**R6 – Flytende rente på fellesgjeld:** Svært godt støttet. Rente, restsaldo og manglende IN-lån er alle bekreftet. Confidence 0.93 opprettholdes.\n\n**R7 – Utbedringsansvar bruksendring:** Svært godt støttet med detaljert evidens fra vedtektene. Dette er den mest alvorlige og spesifikke risikoen for denne leiligheten. Confidence 0.97 opprettholdes.\n\n**R8 – Ingen radonmåling:** Støttet. Leiligheten er i kjeller/underetasje, noe som øker radonrisikoen ytterligere. Confidence kan justeres opp til 0.90 gitt kjellerbeliggenhet.\n\n**R9 – Ingen boligselgerforsikring:** Støttet. Direkte bekreftet i dokumentet. Confidence 0.88 opprettholdes.\n\n**R10 – Ventilasjon/kullfilter (TG-2):** Støttet, men evidensen viser at kullfilter faktisk er påkrevd i dette bygget (ikke tillatt å koble til felles luftekanaler). TG-2 er satt, men avviket er noe tvetydig siden kullfilter er den tillatte løsningen. Confidence justeres ned til 0.80.\n\n**R11 – Skjulte feil og mangler:** Godt støttet som generell risiko. Confidence 0.90 opprettholdes.\n\n**R12 – Ingen parkeringsrett:** Svært godt støttet. Direkte bekreftet i vedtektene. Confidence 0.95 opprettholdes.\n\n**R13 – Økte felleskostnader/rammelån:** Godt støttet. Alle tall er bekreftet. Confidence 0.87 opprettholdes.\n\n**R14 – Begrenset utleieadgang:** Støttet, men evidensen er noe begrenset (kun ett sitat). Confidence 0.85 opprettholdes.\n\n**R15 – Bod på fellesareal:** Støttet. Direkte bekreftet i dokumentet. Confidence 0.88 opprettholdes.\n\n**Manglende risikoer som bør vurderes:**\n1. Fukt/vanninnsig i kjeller: Dokumentet nevner eksplisitt at selskapet ikke er pliktig til å utbedre fukt- eller vanninnsig i kjelleren, noe som sterkt antyder at dette er et kjent problem. Dette bør identifiseres som en separat risiko.\n2. Peiskamin/ildsted: Eier er ansvarlig for ildstedets funksjonalitet – dette bør undersøkes nærmere.\n3. Manglende ferdigattest/brukstillatelse for kjeller: Bruksendringen fra næring til bolig i 2020 – det er uklart om dette er formelt godkjent.\n4. Sikringsskap plassert i kjøkkenskap: Dette kan i seg selv være et avvik fra forskriftskrav.\n5. Skjeggkre: Dokumentet inneholder spørsmål om skjeggkre, men svaret er ikke tydelig gjengitt i de tilgjengelige chunkene.\n"
}

## Raw Response
```json
{
  "id": "msg_01AuFx1tsbGAqP54qFrVBhGi",
  "container": null,
  "content": [
    {
      "id": "toolu_01HtqvoppzGzG2Pwu7AoDGxg",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Sopp i fuger på bad (TG-2): Det er registrert sopp i fuger på badet. Selv om denne typen sopp kan vaskes bort med riktig produkt, indikerer det fuktproblemer og manglende vedlikehold som kan utvikle seg til større skader.",
            "evidence": [
              "TG-2 settes fordi det registreres sopp i fuger.",
              "Denne type sopp kan lett vaskes bort med rette produktet.",
              "Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Ja"
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Manglende rekkverk og håndløper på innvendig trapp (TG-2): Den innvendige trappen mangler rekkverk og håndløper, noe som utgjør en sikkerhetsrisiko for beboerne.",
            "evidence": [
              "Trapp | Innvendig trapp fremstår i god stand men mangler rekkverk og håndløper, TG-2 settes fordi det",
              "Håndløper på veggen og rekkverk for bedre sikkerhet anbefales etablert."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Gulv i gang i kjeller står i bue (TG-2): Gulvet i gangen i kjelleren er buet, noe som kan indikere fuktskader, setninger eller strukturelle problemer. Årsaken bør undersøkes nærmere.",
            "evidence": [
              "TG-2 settes fordi gulv i gang i kjeller står i bue. Gulvet bør sjekkes for å avdekke årsaken.",
              "U. etasje Gang - Gulv | Innvendige overflater fremstår moderne og i god stand. Noe bruksmerker i gulv. TG-2 settes fordi gulv i gang i kjeller står i bue."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R4",
            "description": "Elektrisk anlegg ikke kontrollert – risiko for avvik fra forskriftskrav (TGIU): Det elektriske anlegget er ikke digitalisert og ikke fullstendig kontrollert. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
            "evidence": [
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
              "Elektrisk anlegg: Sikringsskap plassert i kjøkkenskap med automatsikringer.",
              "Bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll etter retningslinjer fra FEL."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Negativ egenkapital i boligaksjeselskapet (2023): Selskapets regnskap for 2023 viste et underskudd på 512 049 kr og negativ egenkapital på -806 423 kr. Dette representerer en finansiell risiko for kjøper.",
            "evidence": [
              "Selskapets regnskap for 2023 viste et underskudd på 512 049 kr. Egenkapitalen var negativ per 31.12.2023 med -806 423 kr (udekket tap).",
              "Styret forklarer at den negative egenkapitalen skyldes at bygningene er bokført til historisk kostpris, og at den faktiske egenkapitalen vurderes til å være positiv basert på markedsverdi.",
              "Budsjettet for 2024 estimerer et overskudd på kr 89 500, basert på uendrede felleskostnader."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Flytende rente på fellesgjeld – risiko for økte felleskostnader: Fellesgjelden har flytende rente på 6,55 %, noe som medfører risiko for økte månedlige kostnader dersom renten stiger. Det er heller ingen mulighet for individuell nedbetaling (IN-lån).",
            "evidence": [
              "Type Rente: Flytende rente. Rente: 6,55%.",
              "Renten på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.",
              "Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN-lån): Nei",
              "Kr 76 949 pr. 23.12.2025 (andel fellesgjeld)"
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Spesifikt utbedringsansvar knyttet til bruksendring fra næring til bolig (2020): Eier av aksjepost 47-53 har et særskilt ansvar for feil og mangler ved innredningen av kjelleren som ble omgjort fra næring til bolig i 2020, inkludert kostnader for tilkomst til felles infrastruktur og ildstedets funksjonalitet.",
            "evidence": [
              "Denne leiligheten (aksjepost 47-53 i Benneches gate 1) har et spesifikt ansvar knyttet til bruksendringen fra næring til bolig i 2020.",
              "I henhold til vedtektene hefter eier for utbedringsansvar for det elektriske anlegget.",
              "Selskapet er ikke pliktig til å utbedre fukt- eller vanninnsig i kjelleren utover det som gjaldt før bruksendringen, og eier bærer reparasjonskostnader for slike skader i 10 år etter vedtaket.",
              "Eier er også ansvarlig for kostnader knyttet til tilkomst til felles infrastruktur som ble utilgjengelig ved ominnredningen, samt ansvaret for ildstedets funksjonalitet."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R8",
            "description": "Ingen radonmåling utført: Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen. Radon er en helseskadelig gass som kan forekomme i boliger.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Ingen boligselgerforsikring tegnet av selger: Selger har ikke tegnet boligselgerforsikring, noe som kan svekke kjøpers mulighet til å få dekket eventuelle krav mot selger etter overtakelse.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Naturlig ventilasjon og kjøkkenventilator med kullfilter – avvik (TG-2): Boligen har naturlig ventilasjon, og kjøkkenventilatoren har kullfilter i stedet for avtrekk til det fri. Dette er et avvik fra dagens krav og kan gi dårlig inneklima.",
            "evidence": [
              "Ventilasjon: Boligen har naturlig ventilasjon, og det er utført arbeider på anlegget etter byggeår. Kjøkkenet har en kjøkkenventilator med kullfilter.",
              "Kjøkken - Avtrekk | Kjøkkenventilator med kullfilter. TG-2 – Avvik som kan kreve tiltak.",
              "Det er ikke tillatt å koble kjøkken- eller baderomsvifter til felles luftekanaler; avtrekksvifter på kjøkken skal ha kullfilter."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Skjulte feil og mangler – eldre bygg: Boligen er av eldre dato, og takstmann tar forbehold om skjulte feil og mangler som ikke kan avdekkes ved visuell befaring. Bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann og avløp er ikke funksjonsprøvd.",
            "evidence": [
              "Takstmann tar forbehold om skjulte feil og mangler.",
              "Bygninger, og spesielt bygninger som er av eldre dato, kan ha skjulte feil og mangler som ikke er mulig å oppdage ved visuell befaring.",
              "Det foretas ikke funksjonsprøving av bygningsdeler som isolasjon, piper, ventilasjon, el-anlegg, vann, avløp osv."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R12",
            "description": "Leiligheten har ikke rett til parkeringsplass: Ifølge vedtektene har aksjepost 47-53 ikke rett til å leie parkeringsplass i selskapet, noe som kan være en ulempe for kjøper.",
            "evidence": [
              "Det er viktig å merke seg at denne leiligheten (aksjepost 47-53) ifølge vedtektene ikke har rett til å leie parkeringsplass.",
              "Selskapet har 20 parkeringsplasser som leies ut til aksjeeiere etter ansiennitet."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R13",
            "description": "Økte felleskostnader og rammelån: Selskapet har økt rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og ladeanlegg, og generalforsamlingen har gitt mandat til å øke det med ytterligere kr 150 000. TV/internett-kostnaden øker fra kr 248 til kr 304 fra februar 2026.",
            "evidence": [
              "På generalforsamlingen 14. mai 2024 ble det gitt mandat til å øke rammelånet med ytterligere kr 150 000 ved behov.",
              "På generalforsamlingen 10. mai 2023 ble det vedtatt å øke rammelånet med kr 500 000 for å finansiere bakgårdsprosjekter og installasjon av ladeanlegg.",
              "Internett vil øke til kr 304,- fra 1. februar 2026."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R14",
            "description": "Begrenset adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskapet. Utleie krever styrets godkjenning, noe som begrenser kjøpers fleksibilitet.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning..."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Boden som inngår i BRA ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA ligger på sameiets fellesareal, men disponeres av denne seksjonen. Dette kan innebære usikkerhet rundt fremtidig disposisjonsrett.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen."
            ],
            "source_documents": [
              "d039_d039"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "fukt kjeller vanninnsig kjellerleilighet",
          "bruksendring kjeller ferdigattest godkjenning plan bygningsetat",
          "peiskamin ildsted funksjonalitet kontroll",
          "el-anlegg sikringsskap kjøkken kapasitet oppgradering",
          "budsjett 2024 2025 felleskostnader planlagte tiltak vedlikehold",
          "legalpant aksjeselskap sikringsordning",
          "skjeggkre insekter skadedyr bolig",
          "manglende ferdigattest brukstillatelse kjeller bolig"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Sopp i fuger (TG-2):** Godt støttet av dokumentet. Evidensen er klar og direkte. Confidence 0.95 opprettholdes. Merk at soppen beskrives som lett å vaske bort, men TG-2 er satt og fuktindikasjon er bekreftet.\n\n**R2 – Manglende rekkverk/håndløper (TG-2):** Godt støttet. Direkte sitat fra tilstandsrapporten. Confidence 0.95 opprettholdes.\n\n**R3 – Gulv i bue i kjellerkorridor (TG-2):** Godt støttet. Direkte sitat fra tilstandsrapporten. Årsaken er ukjent, noe som øker usikkerheten. Confidence 0.92 opprettholdes.\n\n**R4 – Elektrisk anlegg ikke kontrollert (TGIU):** Godt støttet. Dokumentet bekrefter at anlegget ikke er digitalisert og ikke kontrollert, og at avvik er sannsynlig. Confidence 0.90 opprettholdes. Tilleggsevidens: sikringsskap er plassert i kjøkkenskap, noe som i seg selv kan være et avvik.\n\n**R5 – Negativ egenkapital:** Godt støttet. Tallene er bekreftet i dokumentet. Styrets forklaring (historisk kostpris) er også dokumentert. Confidence justeres ned noe til 0.88 siden budsjettet for 2024 viser forventet overskudd på kr 89 500, noe som demper risikoen noe.\n\n**R6 – Flytende rente på fellesgjeld:** Svært godt støttet. Rente, restsaldo og manglende IN-lån er alle bekreftet. Confidence 0.93 opprettholdes.\n\n**R7 – Utbedringsansvar bruksendring:** Svært godt støttet med detaljert evidens fra vedtektene. Dette er den mest alvorlige og spesifikke risikoen for denne leiligheten. Confidence 0.97 opprettholdes.\n\n**R8 – Ingen radonmåling:** Støttet. Leiligheten er i kjeller/underetasje, noe som øker radonrisikoen ytterligere. Confidence kan justeres opp til 0.90 gitt kjellerbeliggenhet.\n\n**R9 – Ingen boligselgerforsikring:** Støttet. Direkte bekreftet i dokumentet. Confidence 0.88 opprettholdes.\n\n**R10 – Ventilasjon/kullfilter (TG-2):** Støttet, men evidensen viser at kullfilter faktisk er påkrevd i dette bygget (ikke tillatt å koble til felles luftekanaler). TG-2 er satt, men avviket er noe tvetydig siden kullfilter er den tillatte løsningen. Confidence justeres ned til 0.80.\n\n**R11 – Skjulte feil og mangler:** Godt støttet som generell risiko. Confidence 0.90 opprettholdes.\n\n**R12 – Ingen parkeringsrett:** Svært godt støttet. Direkte bekreftet i vedtektene. Confidence 0.95 opprettholdes.\n\n**R13 – Økte felleskostnader/rammelån:** Godt støttet. Alle tall er bekreftet. Confidence 0.87 opprettholdes.\n\n**R14 – Begrenset utleieadgang:** Støttet, men evidensen er noe begrenset (kun ett sitat). Confidence 0.85 opprettholdes.\n\n**R15 – Bod på fellesareal:** Støttet. Direkte bekreftet i dokumentet. Confidence 0.88 opprettholdes.\n\n**Manglende risikoer som bør vurderes:**\n1. Fukt/vanninnsig i kjeller: Dokumentet nevner eksplisitt at selskapet ikke er pliktig til å utbedre fukt- eller vanninnsig i kjelleren, noe som sterkt antyder at dette er et kjent problem. Dette bør identifiseres som en separat risiko.\n2. Peiskamin/ildsted: Eier er ansvarlig for ildstedets funksjonalitet – dette bør undersøkes nærmere.\n3. Manglende ferdigattest/brukstillatelse for kjeller: Bruksendringen fra næring til bolig i 2020 – det er uklart om dette er formelt godkjent.\n4. Sikringsskap plassert i kjøkkenskap: Dette kan i seg selv være et avvik fra forskriftskrav.\n5. Skjeggkre: Dokumentet inneholder spørsmål om skjeggkre, men svaret er ikke tydelig gjengitt i de tilgjengelige chunkene.\n"
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
    "input_tokens": 18709,
    "output_tokens": 5163,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
