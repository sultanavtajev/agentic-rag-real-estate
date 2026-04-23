# Trace: agentic_reflecting_iter1
- **Run ID:** d9edb944-8b05-4f52-898a-7f43de7f5a69
- **Tidspunkt:** 2026-03-23T23:10:19.347818+00:00
- **Varighet:** 98.67s
- **Input tokens:** 20436
- **Output tokens:** 5809

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
Risiko 1: Manglende dokumentasjon på avløpsrør. Det er påvist avløpsrør av plast synlig innvendig, men det foreligger ingen dokumentasjon på disse. Dette kan indikere uautoriserte eller udokumenterte arbeider.
  Confidence: 0.92
  Evidens: Det er ikke dokumentasjon på avløpsrør.; Det er avløpsrør av plast synlig innvendig.; Det gjøres oppmerksom på at soil/avløpsrør er på borettslagets ansvar.

Risiko 2: Manglende radonmåling. Det anbefales å gjennomføre radonmåling, men dette er ikke utført. Radon kan utgjøre en helserisiko for beboerne.
  Confidence: 0.9
  Evidens: Det anbefales å gjennomføre radonmåling.; Eiendommens tilstand: Innvendig > Radon – Vurdering av avvik: Måling anbefales for å dokumentere nivået.

Risiko 3: Dører som er vanskelige å åpne eller lukke (TG2). Flere dører skraper mot karm, noe som indikerer behov for tiltak. Dette er et avvik som tilsier at det bør foretas tiltak.
  Confidence: 0.88
  Evidens: Bygningsdeler vurdert med TG2: Det er påvist avvik som tilsier at det bør foretas tiltak på borettslagets ansvar.; Utvendig > Dører: Dører skraper mot karm. Forholdet gjelder samtlige dører.; Det er påvist dører som er vanskelig å åpne eller lukke.

Risiko 4: Manglende ventilasjon/tilluft i oppholdsrom (TG2). Det er påvist at oppholdsrom mangler veggventiler eller vindusventiler, noe som over tid kan føre til mugg- og soppdannelse.
  Confidence: 0.87
  Evidens: Det bør etableres veggventiler/vindusventiler i alle oppholdsrom som ikke har det.; Over tid kan manglende tilluftventilering resultere i mugg- og soppdannelse, spesielt på steder som ikke får god nok luftgjennomstrømning.

Risiko 5: Manglende dokumentasjon på arbeider utført på bad/kjøkken (TG2). Kjøkken er flyttet og bad er rehabilitert etter 2016, men det foreligger ikke dokumentasjon på disse arbeidene.
  Confidence: 0.88
  Evidens: Det er ikke dokumentasjon på arbeider derfor TG 2.; Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. tidligere salgsoppgaver.; Årstall: 2016 Kilde: Tidligere salgsoppgaver

Risiko 6: Ventilator på bad fungerer ikke tilfredsstillende. Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt til sluket, noe som kan føre til fuktskader og muggvekst.
  Confidence: 0.85
  Evidens: Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt.; Manglende tilluft til våtrom kan føre til alvorlige konsekvenser som fuktskader og muggvekst.; Det bør etableres tilfredsstillende tilluft til våtrom f.eks. luftespalte ved dør e.l.

Risiko 7: Radiatorer er kasset inn og ikke synlige for inspeksjon. Radiatorer og koblinger er ikke synlige, noe som betyr at eventuelle feil eller lekkasjer ikke kan avdekkes uten å åpne kassen.
  Confidence: 0.8
  Evidens: Radiatorer er kasset inn med tilluft under og utlufting på toppen av kasse. Radiatorer og koblinger er derfor ikke synlige.; Opprinnelig radiator under kjøkkenbenk.

Risiko 8: Luke i himling på baderom ble ikke kontrollert under befaring. Dette betyr at eventuelle skjulte feil eller mangler over badet ikke er avdekket.
  Confidence: 0.78
  Evidens: Luke i himling på baderom ble ikke kontrollert grunnet manglende tilgang.

Risiko 9: Høy andel fellesgjeld. Andel fellesgjeld er kr 144 170, noe som øker den totale kjøpesummen og medfører løpende rentekostnader for kjøper.
  Confidence: 0.85
  Evidens: Andel fellesgjeld: 144 170; Ajourf. Andel f.gj. (lån): 144 170 Gjeld siste årsoppg.: 146 407; Klient ajourf. lån: 38 845 479

Risiko 10: Forventede økte felleskostnader. Det er opplyst at felleskostnadene forventes å øke på grunn av prisstigning og renteøkning etter at salgsoppgaven er utarbeidet.
  Confidence: 0.88
  Evidens: På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne salgsoppgaven er utarbeidet.

Risiko 11: Dårlig energikarakter (G). Boligen har energikarakter G, som er den dårligste mulige karakteren. Dette indikerer høyt energiforbruk og potensielt høye strømkostnader.
  Confidence: 0.9
  Evidens: Energikarakter: G; Energifarge: Grønn (småhusplanen).; Selger opplyser at det årlige strømforbruket er på ca. 400-500 kr i gjennomsnitt. Etter at strømprisen steg var strømforbruket på ca. 1 100 kr i de dyreste månedene.

Risiko 12: Borettslaget er ikke tilknyttet sikringsordning. Dette innebærer at kjøper ikke har den ekstra sikkerheten som en sikringsordning gir ved eventuelle mislighold av felleskostnader fra andre andelseiere.
  Confidence: 0.82
  Evidens: Boligselskap er ikke tilknyttet sikringsordning.

Risiko 13: Legalpanterett for borettslaget. Borettslaget har legalpanterett i andelen på inntil 2G (to ganger folketrygdens grunnbeløp) for krav på felleskostnader, med prioritet foran alle andre heftelser, inkludert kjøpers egne lån.
  Confidence: 0.85
  Evidens: Borettslaget har legalpanterett i andelen med prioritet foran alle andre heftelser for krav om felleskostnader.; Pantekravet kan ikke overstige et beløp som svarer til to ganger folketrygdens grunnbeløp.

Risiko 14: Pågående reguleringsplaner i nærområdet kan påvirke eiendommen og omgivelsene. Blant annet er det vedtatt midlertidig forbud mot tiltak (Småhusplanen), og det pågår flere reguleringsprosjekter i området.
  Confidence: 0.8
  Evidens: Vedtak om midlertidig forbud mot tiltak – Småhusplanen. Plan- og bygningsetaten vedtar midlertidig forbud mot tiltak i påvente av ny regulering.; Saksnummer 202102096: Revisjon av reguleringsplan Stamnett for småhusområder i Oslos ytre by (Småhusplanen).; Saksnummer 201904064: RV 4 Årvoll skole til Sinsen.

Risiko 15: Bygget er fra 1959/1960 og kan ha skjulte feil og mangler typisk for eldre bygg. Eldre konstruksjoner kan ha skjulte skader som ikke er avdekket i tilstandsrapporten.
  Confidence: 0.83
  Evidens: Byggeår: 1959; Byggeår Kommentar: 1960; Tilstandsrapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 16: Styregodkjenning kreves for kjøper. Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.
  Confidence: 0.75
  Evidens: Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.

Risiko 17: Private stikkledninger for vann og avløp er borettslagets ansvar. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet/borettslaget. Eventuelle skader eller utskiftninger kan medføre økte felleskostnader.
  Confidence: 0.78
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.; Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger.

Dokumentkontekst:
[d041_d041 | Side [1]]
n 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når

---

[d041_d041 | Side [1]]
 utarbeide
For synlige konstruksjoner kan alder sammen med andre symptomer og rapporten. Personvernerklæring med informasjon om bruk av
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. BEFARINGEN AREALBEREGNING FOR BOENHETER personopplysninger og dine re琀紀gheter 昀椀nner du her Personvernerklæring
Rapporten gir en vurdering av byggverk og bygningsdeler som - iVerdi
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på bygningssakkyndig har observert, og som fremkommer av

---

[d041_d041 | Side [1]]
dsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil

---

[d041_d041 | Side [1]]
n skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan

---

[d041_d041 | Side [1]]
rtens avgrensninger
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel UTTRYKK OG DEFINISJONER eiendommens verdi.
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rom som ligger utenfor boenheten, men som eier har påvist og/eller
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er • Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle

---

[d041_d041 | Side [1]]
li琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen med • Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 og
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS bygningsdelens alder. 2023) og veiledningen 琀椀l disse.
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak. I
denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2 som
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en

---

[d041_d041 | Side [1]]
gjøres oppmerksom på at soil/ avløpsrør er
Type takst avholdt av takstmann: Tilstandsrapport Bygningsdeler vurdert med TG2: Det er påvist avvik som tilsier at det bør foretas tiltak på borettslagets ansvar.
Utvendig > Dører enkelte dører.
Sammendrag selgers egenerklæring: Selgers Vurdering av avvik: Dører skraper mot karm. Forholdet gjelder samtlige dører. Tekniske installasjoner > Ventilasjon
egenerklæringsskjema følger vedlagt salgsoppgaven. Det er påvist dører som er vanskelig å åpne eller lukke.

---

[d041_d041 | Side [1]]
tor) eller visuelle eller dersom det er en del av oppdraget også opplyse om fordelingen
琀椀lstandsgradene. Avhendingsloven. observasjoner. mellom P-ROM og S-ROM med utgangspunkt i de昀椀nisjonene som
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand fremkommer av veiledningen 琀椀l Norsk Standard 3940 Areal- og volum-
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger • Fuktmåling: Måling av fuk琀椀nnhold i

---

[d041_d041 | Side [1]]
NDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova. eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som

---

[d041_d041 | Side [1]]
NDERSØKELSE
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder Det kan være avvik/skader som ikke er avdekket.
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
Informasjon om utbedringskostnader Tiltak under kr 20 000
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som

---

[d041_d041 | Side [1]]
mptomer på bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
forhold som man må regne med trenger utbedring straks eller innen kort avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan • Areal fastse琀琀es e琀琀er Forskri昀琀 琀椀l avhendingsloven og Norsk Standard
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk 3940 Areal- og volum-beregninger av bygninger fra 2023.
sjablongmessig anslag.

---

[d041_d041 | Side [1]]
. av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom • Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, forvaltning, dri昀琀 eller vedlikehold.
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje) sopp og skadedyr.
琀椀lstand som er

---

[d041_d041 | Side [1]]

OM EIENDOMMEN OM EIENDOMMEN
Beskrivelsen av boligen nedenfor er hentet direkte fra Måling Vurdering av avvik:
Eiendommens
tilstandsrapporten: anbefales for å dokumentere nivået. Det er påvist andre avvik:
Det anbefales å gjennomføre radonmåling. Det er ikke dokumentasjon på avløpsrør.
tilstand
Bygningsdeler vurdert med TG3: Konsekvens/ tiltak
Takstmann: Tore Jan Fevang Ingen Innvendig > Innvendige dører Andre tiltak:
Vurdering av avvik: Det gjøres oppmerksom på at soil/ avløpsrør er
Type takst avholdt av

---

[d041_d041 | Side [1]]
VVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Når du

---

[d041_d041 | Side [1]]
å befarings琀椀dspunktet har betydning for om rommet de昀椀neres som P
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede -ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere kjellervegger og eventuelt i oppforede kjellergulv. teknisk forskri昀琀 og mangle

---

[d041_d041 | Side [1]]
elt på grunn av fare for større skader eller følgeskader.
Når du kjøper en brukt bolig, er det vik琀椀g å være oppmerksom på at Den bygningssakkyndige vil vurdere boligen mot hvordan det var vanlig å
de琀琀e ikke kan sammenlignes med å kjøpe en ny bolig. Måten bygge og regler som gjaldt på søknads琀椀dspunktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og

---

[d041_d041 | Side [1]]
un når det ikke foreligger • Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende beregninger av bygninger fra 2012. Fordelingen mellom P-ROM og S-ROM
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med konstruksjon ved bruk av egnet måleutstyr (blant annet hammerelektrode er basert på veiledningen og bygningssakkyndiges eget skjønn. P-ROM er
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk. og pigger). måleverdige rom som

---

[d041_d041 | Side [1]]
, underetasje og sokkeletasje) sopp og skadedyr.
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og • I en overgangsperiode skal rapporter som beny琀琀es i boligomsetningen
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l • Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle eller dersom det er en del av oppdraget også

---

[d041_d041 | Side [1]]
te
Det er ikke behov for strakstiltak. Luke i himling på baderom ble ikke kontrollert grunnet Radiatorer er kasset inn med tilluft under og utlufting på
I forbindelse med salget er det blitt utført en manglende toppen av
tilstandsrapport av en bygningssakkyndig, som gir en Innvendig > Radon tilgang. kasse. Radiatorer og koblinger er derfor ikke synlige.
teknisk gjennomgang av boligen og påpeker eventuelle Vurdering av avvik: Konsekvens/ tiltak Opprinnelig radiator under kjøkkenbenk.
avvik. Rapporten,

---

[d041_d041 | Side [1]]
kri昀琀 琀椀l avhendingslova.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal

---

[d041_d041 | Side [1]]
rslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: TBA 2
84
69105220
:ecnerefer
tnemucoD
85

## Side 44

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger

---

[d041_d041 | Side [1]]
tover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel

---

[d041_d041 | Side [1]]
ninger eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som

---

[d041_d041 | Side [1]]
ner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: TBA 3
69105220
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at

---

[d041_d041 | Side [1]]

Eiendomsverdi.no 19.12.2025 Gjennomgå琀琀 Nei
Innskudd, pålydende mm
Eier 18.12.2025 Påviste og ga opplysninger. Gjennomgå琀琀 Nei
Andelsnummer Andel fellesgjeld
Tegninger 20.03.1957 Gjennomgå琀琀 Nei
283 144 170
Eiendomsopplysninger Revisjoner
Adkomstvei
Eiendommen har adkomst via o昀昀entlig veg eller gate.
Tilknytning vann Versjon Ny versjon Kommentar
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
1 06.01.2026
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via

---

[d041_d041 | Side [1]]
ut til
Utskilt fra denne matrikkelenhet: det kommunale nettet er private, og
12.02.1954 ‑ Dokumentnr: 2184 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:653 vedlikeholdsansvaret for disse påhviler sameiet.
Utskilt fra denne matrikkelenhet: 28.05.1963 ‑ Dokumentnr: 919918 ‑ Sammenslått med Adkomst til eiendommen skjer via offentlig vei.
Knr:0301 Gnr:86 Bnr:617 denne matrikkelenhet:
15.05.1956 ‑ Dokumentnr: 5598 ‑ Registrering av grunn GNR. 86, BNR. 733
Utleie
Utskilt fra denne matrikkelenhet:
12.02.1954 ‑

---

[d041_d041 | Side [1]]
vet
borettslag. Ingen forkjøpsrett, ingen dokumentavgift. Fyring og
varmtvann inkludert (a‑konto).
Kort fortalt:
Leiligheten har blitt pent overflateoppusset i 2025 med nyslipt
parkett og nymalte vegger
Stor og solrik balkong med fint utsyn
HTH‑kjøkken og delikat bad fra 2016
Turavstand til by‑ og markaliv
Veldrevet borettslag
Fyring og varmtvann inkludert (a‑konto)
Ingen forkjøpsrett
Ingen dokumentavgift
Velkommen til visning!
9

## Side 6

06.jpg

## Side 7

Leiligheten har store vindusflater som gir

---

[d041_d041 | Side [1]]
knytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger. 2 06.01.2026
Regulering
For gyldighet på rapporten se forside
Ikke kontrollert.
Om tomten
Felles tomt for bore琀琀slaget.
Tinglyste/andre forhold
For spesielle forhold i sameiet vises det 琀椀l vedtekter, regnskap og husordensregler. Takstmannen har ikke undersøkt/vurdert regulering eller
andre forhold i bygningsetaten, forøvrig ingen spesielle forhold takstmannen ble gjort kjent med på befaringsdagen.
Oppdragsnr.:

---

[d041_d041 | Side [1]]
t for bytikken blir rent fotgjengertorg. V251058 er en Tinglyste heftelser og rettigheter: På eiendommen er det
Boligen har følgende oppvarmingskilder: bebyggelsesplan uten egne skrevne bestemmelser. tinglyst følgende heftelser og rettigheter som følger
Regnskap/ budsjett/ kostnadsøkninger: Borettslaget ‑ Fjernvarme via radiatorer. eiendommens matrikkel ved overskjøting til ny
44 45

## Side 24

OM EIENDOMMEN OM EIENDOMMEN
hjemmelshaver: VEDR. LEKEPLASS
15.08.1957 ‑ Dokumentnr: 9334 ‑ Bestemmelse om

---

[d041_d041 | Side [1]]
årlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12

---

[d041_d041 | Side [1]]
tskilt fra denne matrikkelenhet:
12.02.1954 ‑ Dokumentnr: 2183 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:649
Vei, vann og avløp
Utskilt fra denne matrikkelenhet: 18.01.1961 ‑ Dokumentnr: 901088 ‑ Registrering av grunn
Knr:0301 Gnr:86 Bnr:616 Utskilt fra denne matrikkelenhet: Eiendommen er tilknyttet offentlig vann‑ og
15.05.1956 ‑ Dokumentnr: 5597 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:2 avløpssystem. Stikkledningene fra eiendommen og ut til
Utskilt fra denne matrikkelenhet: det kommunale nettet er

---

[d041_d041 | Side [1]]
e eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen

---

[d041_d041 | Side [1]]
tter på fraflyttede og/ eller usolgte andeler, på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
må dekkes av de øvrige andelseierne. Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
Borettslaget har legalpanterett i andelen for krav på Regelverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og

---

[d041_d041 | Side [1]]
elleskostnader. Dette betyr at
Utskilt fra denne matrikkelenhet: 16.09.1960 ‑ Dokumentnr: 11309 ‑ Registrering av grunn borettslaget har prioritet over tinglyste lån når det gjelder
Knr:0301 Gnr:88 Bnr:255 Utskilt fra denne matrikkelenhet: betaling av felleskostnader, og kan kreve inn pengene før
05.09.1955 ‑ Dokumentnr: 11257 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:710 andre kreditorer, selv om de har lån registrert på andelen.
Utskilt fra denne matrikkelenhet:
12.02.1954 ‑ Dokumentnr: 2183 ‑

---

[d041_d041 | Side [1]]
 salget.
inkludert smarte, integrerte garderobeløsninger. Gulvet vender mot stille og rolige gårdsarealer, som gir en rolig BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. Alt utstyr og installasjoner som medfølger overtas slik de
har énstavs eikeparkett med hvitpigmentering, mens og fredelig beliggenhet. BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor er, uten garanti, med mindre det foreligger en gjeldende
vegger og himling er malt for et friskt og moderne boenheten og som tilhører denne,

---

[d041_d041 | Side [1]]
mt bolig. som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til
Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
utgifter.

---

[d041_d041 | Side [1]]
kke
Laget skal holde bygninger og eiendommen ellers i forsvarlig stand så langt plikten ikke overstige et beløp som svarer til to ganger folketrygdens grunnbeløp på det tidspunktet da
ligger på andelseierne. Laget skal vedlikeholde felles rør, ledninger, kanaler og andre tvangsdekning besluttes gjennomført. Pantekravet foreldes to år etter at det skulle vært
felles installasjoner som går gjennom boligen. Laget har rett til å føre nye slike betalt, og dersom dekningen ikke blir gjennomført uten unødig

---

[d041_d041 | Side [1]]
. garasjer på gnr. 86, bnr. 1, m.fl. Øvre
husstandens forbruk og utgifter de siste årene. Forbruket Disen V230260 har ikke egne skrevne https:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/
Husdyr: Det er ikke tillatt å holde hund eller katt uten kan variere avhengig av faktorer som antall reguleringsbestemmelser. main.asp
styrets samtykke. familiemedlemmer, ønsket innetemperatur, egne avtaler
om energiforsyning med mer. Megler påtar seg ikke V251058: Konferer gjerne megler vedrørende bruk av

---

[d041_d041 | Side [1]]
keringsplass 15 ( 12792 ‑ 15): 175,‑
545,00 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ På grunn av prisstigning og renteøkning er det forventet
1 090,00 (Omkostninger totalt (uten at felleskostnadene vil øke etter at denne salgsoppgaven
Boligkjøperforsikring)) er utarbeidet.
10 390,00 (Omkostninger totalt (med
Boligkjøperforsikring))
Eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ I Oslo kommune er det eiendomsskatt på boliger og

---

[d041_d041 | Side [1]]
 boretts- 167
lagsloven krever generalforsamlingens samtykke, må ikke igangsettes før samtykke er
7. Generalforsamling.
gitt. Søknad eller melding til bygningsmyndighetene skal godkjennes av styret før
byggemelding kan sendes.
7.1. Generalforsamlingen.
Den øverste myndighet i borettslaget utøves av generalforsamlingen. Ordinær
5. Felleskostnader.
generalforsamling holdes hvert år innen utgangen av juni. Ekstraordinær
generalforsamling skal holdes når styret finner det nødvendig, eller når revisor

---

[d041_d041 | Side [1]]
en.
Dører er ofte sameiets/ borettslagets ansvarsområde Tekniske installasjoner > Vannledninger Konsekvens/ tiltak:
Følgende opplysninger er spesielt viktig å merke seg: uten at det er Vurdering av avvik: Det bør etableres veggventiler/ vindusventiler i alle
sjekket spesifikt i dette tilfellet. Det er avvik: oppholdsrom som
Har du ladeanlegg/ ladeboks for elbil i dag? Justering/ utskiftet av entredør. Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. ikke har det.
‑ Borettslaget har ladeanlegg på

---

[d041_d041 | Side [1]]
15.10.1958 ‑ Dokumentnr: 921025 ‑ Sammenslåing Utskilt fra denne matrikkelenhet:
Knr:0301 Gnr:86 Bnr:587 Sammenslått med denne matrikkelenhet: Knr:0301 Gnr:86 Bnr:932
09.02.1955 ‑ Dokumentnr: 1907 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:684
Utskilt fra denne matrikkelenhet: Legalpant: Borettslaget har legalpant på inntil 2G som
01.12.1951 ‑ Dokumentnr: 14556 ‑ Registrering av grunn Knr:0301 Gnr:86 Bnr:633 sikkerhet for betaling av felleskostnader. Dette betyr at
Utskilt fra denne matrikkelenhet:

---

[d041_d041 | Side [1]]
et skal påse at alle felleskostnader blir dekket av andelseierne etter hvert som de
som rør, ledninger, inventar, apparater, tapet, gulvbelegg, vegg-, gulv-, og forfaller.
himlingsplater, skillevegger, listverk, skap, benker og innvendige dører med karmer. Til dekning av sin andel av felleskostnadene skal den enkelte andelseier hver måned
Vedlikeholdsplikten omfatter også utbedring av tilfeldig skade. betale et a kontobeløp fastsatt av styret. Endring av a kontobeløp kan tidligst tre i kraft
etter en

---

[d041_d041 | Side [1]]
rd Bakke Arvesen, Jenny Kokkersvold
Organisasjonsnr: 921 407 890 Organisasjonsnr: 921 407 890
4: Særskilte opplysninger 10: Fasiliteter og andre enhetsopplysninger
Telefon: Mob.: 95050840
Usbl sørger for melding til styret/ styregodkjenning av ny eier. Megler trenger ikke sende melding til styret
E-post: styret@disenborettslag.no
Webside: www.disenborettslag.no
6: Ligning - 2024
Gjeld: 146 407 Andre inntekter: 1 292
Annen formue: 65 000 Utgifter: 8 800
Usbl har ikke opplysninger om formuesverdi av boligen.

---

[d041_d041 | Side [1]]
bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) • håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig betydelig, avhengig av individuelle valg, materialpriser og Tiltak over kr 500 000
琀椀lknytning 琀椀l boligen). markedsforhold. For å få en nøyak琀椀g vurdering av
utbedringskostnadene anbefales

---

[d041_d041 | Side [1]]
t 12.6.13. Ny § 9, 4. ledd og § 10, 1. ledd andre
vaskemaskiner, stor tørketormmel og tørkeskap. 400‑ 500 kr i gjennomsnitt. Etter at strømprisen steg var setning, vedtatt 17.3.15. BUK‑sak 57/ 15.
dugnader
strømforbruket på ca. 1 100 kr i de dyreste månedene.
TV/ Bredbånd: Det praktiseres dugnad. Det er viktig å merke seg at energiforbruket kan variere Vedtak om midlertidig forbud mot tiltak ‑ Småhusplanen
Borettslaget har avtale med GlobalConnect AS. Vi tar fra husstand til husstand.
forbehold om

---

[d041_d041 | Side [1]]
ger felleskostnader
Neste endring: 01.01.2026 Tot. utg. i kr.: 5 344
Felleskostnader: Felleskostnader drift 4 069
Renter lån 9492.70.45847 432
Avdrag lån 9492.70.45847 155
Avdrag lån 9492.70.29620 124
Renter lån 9492.70.29620 169
Tilleggsytelser: Internett-tillegg 220
Objekt: Parkeringsplass 15 ( 12792 - 15 ) 175
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 144 170 Gjeld siste årsoppg.: 146 407
Klient ajourf. lån: 38 845 479 Klient gj. s. årsoppg.: 39 446 687
Spesifikasjon av lån:
Lånenummer: 94927029620,

---

[d041_d041 | Side [1]]
tyret. Endring av a kontobeløp kan tidligst tre i kraft
etter en måneds varsel.
Ny eier av andel har plikt til å utføre vedlikehold, medregnet reparasjon og
utskiftning, selv om det skulle vært utført av forrige andelseier. 5.2. Panterett.
Laget har lovbestemt panterett i andelen med prioritet foran alle andre heftelser for krav
4.3 Borettslagets vedlikeholdsplikt. om felleskostnader og andre krav som følger av lagsforholdet. Pantekravet kan ikke
Laget skal holde bygninger og eiendommen ellers i forsvarlig

---

[d041_d041 | Side [1]]
o medeier: 30.01.1992
0587 OSLO Eiere: Tord Bakke Arvesen, Jenny Kokkersvold
Organisasjonsnr: 921 407 890 Andelsnr: 283
1: Felleskostnader
Tot. innev. måned: 4 858
Boligselskap er ikke tilknyttet sikringsordning
Felleskostnader: Felleskostnader drift 3 633
Renter lån 9492.70.45847 432
Avdrag lån 9492.70.45847 155
Avdrag lån 9492.70.29620 124
Renter lån 9492.70.29620 169
Tilleggsytelser: Internett-tillegg 220
Objekt: Parkeringsplass 15 ( 12792 - 15 ) 125
Selger forplikter for felleskostnader i

---

[d041_d041 | Side [1]]
rdiga琀琀. 07.08.1985 Fasadeforandring. Gjennomgå琀琀 Nei
Disenveien 17
Ikke
Bruks琀椀llat./ferdiga琀琀. 04.07.1990 Ombygging av balkonger Nei
Hjemmelshaver gjennomgå琀琀
Al Disen Bore琀琀slag
Bruks琀椀llat./ferdiga琀琀. 21.01.1993 Fasaderehabilitering. Gjennomgå琀琀 Nei
Andelsobjekt
Ikke
Egenerklæring Ikke mo琀琀a琀琀 Nei
Boligselskap Org.nr. Leil. nr. Forretningsfører Eier av adkomstdokumenter gjennomgå琀琀
/AL DISEN BORETTSLAG 921407890 USBL Arvesen Tord Bakke
Eiendomsverdi.no 19.12.2025 Gjennomgå琀琀 Nei
Innskudd, pålydende

---

[d041_d041 | Side [1]]
orettslaget skal ha et styre bestående
gjelder for avstemming om pålegg om salg eller krav om fravikelse etter av minst fire medlemmer inklusive styreleder.
borettslagsloven §§ 5-22 og 5-23. Styremedlemmene skal være andelseiere og må være myndige.
Styrets medlemmer velges med vanlig flertall av de avgitte stemmene, og tjenestegjør to
7.5. Innkalling til generalforsamling. år om gangen. Styrets leder velges særskilt. Det skal i tillegg velges to varamedlemmer.
Innkalling til generalforsamling fortas av

---

[d041_d041 | Side [1]]
 sendt. forvaltningen av borettslagets anliggender i samsvar med lov, vedtekter og vedtak i
generalforsamlingen.
Styret skal på forhånd varsle andelseierne om dato for generalforsamlingen, og om
siste frist for innlevering av saker som ønskes behandlet. Saker som en andelseier Styret kan treffe vedtak og sette i gang ethvert tiltak som ikke etter loven, vedtektene
ønsker tatt opp skal tas med innkallingen dersom styret har mottatt krav om det før eller vedtak i det enkelte tilfelle, er lagt til andre

---

[d041_d041 | Side [1]]
lingen blant de som er tilstede. Protokollen skal til enhver tid holdes
7.4. Habilitet. tilgjengelig for andelseierne.
Ingen kan selv eller ved fullmektig delta i avstemming på generalforsamling om avtale
som gjelder seg selv eller nærstående, eller i saker som gjelder sitt eget eller 7.8. Styremedlemmer.
nærståendes ansvar, eller om pålegg om salg eller fravikelse av egen andel. Det samme Styremedlemmer tjenestegjør i to år av gangen. Borettslaget skal ha et styre bestående
gjelder for avstemming om

---

[d041_d041 | Side [1]]
 boligene eller eiendommen ellers fører til vesentlig endring av grunnlaget for
vindusruter (andelseier har også ansvaret for skifting av knuste ruter), rør, ledninger, fordelingen. Når særlige grunner taler for det, skal visse kostnader fordeles etter nytten
inventar, utstyr, apparater og innvendige flater. for den enkelte andel, eller etter forbruk.
Vedlikeholdsplikten omfatter også om nødvendig reparasjon eller utskiftning av slikt Styret skal påse at alle felleskostnader blir dekket av andelseierne

---

[d041_d041 | Side [1]]
g skal holdes når styret finner det nødvendig, eller når revisor eller
5.1. Fordeling og inndriving. andelseiere som til sammen har minst en tiendedel av stemmene krever det, og samtidig
Felleskostnader er alle kostnader ved eiendommens drift som ikke gjelder den enkelte oppgir hvilke saker de ønsker behandlet.
bolig, så som vedlikeholdskostnader, forsikringer, administrasjonskostnader, skatter,
offentlige avgifter med mer. 7.2. Deltakelse på generalforsamlingen.
Alle andelseiere har rett til å delta på

---

[d041_d041 | Side [1]]
gså i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til

---

[d041_d041 | Side [1]]
er: 8 800
Usbl har ikke opplysninger om formuesverdi av boligen. For opplysninger om dette se www.skatteetaten.no
7: Pålydende
Pålydende: 100 Opprinnelig innskudd:
Andelsnr: 283 Partialobligasjonsnr:
8: Bygning/eiendom
Byggeår: 1959
Gårds/bruksnr:86/1
Bygningstype: Blokk
Feste/eiet tomt: Eiet
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP4683235
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0201
Etasje: 2 Oppvarmingstype: Uspesifisert
Heis: Nei
Parkeringstype: Se info lenger ned

---

[d041_d041 | Side [1]]

69105220
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven,

---

[d041_d041 | Side [1]]
 eiendommen, kan det ikke etter overtakelse reklameres
utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
borettslaget sitter på fraflyttede og/ eller usolgte andeler, på bestemmelser i

---

[d041_d041 | Side [1]]
ERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Oslo Øst
Oppdragsnr.
02250196
Selger 1 navn
Tord Bakke Arvesen
Gateadresse
Disenveien 17
Poststed Postnr
OSLO 0587
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2016
Hvor lenge har du eid boligen?
Antall år 9
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har

---

[d041_d041 | Side [1]]
 behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
hos eiendomsmegler før bud inngis. Kontakt særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag. avhendingsloven.
eiendomsmegler for spørsmål. avhendingsloven § 3‑5.
Avtalerettslig Ved

---

[d041_d041 | Side [1]]
arkeringsplasser og garasjeplasser tildeles etter ansiennitet på ventelisten.
Borettslaget disponerer ladeplasser for elbiler. 96 97
For nærmere opplysninger, ta kontakt med styret.
Postkasseskilt/Ringeklokkeskilt faktureres nye eiere. Ta kontakt med styret.
Det er ikke forkjøpsrett i borettlaget.
Mailadresse til styret: styret@disenborettslag.no
Eierskiftegebyret faktureres til selger via megler. Faktura sendes når eierskiftet er registrert. Vennligst vent med betaling til denne er
mottatt, da KID nummer

---

[d041_d041 | Side [1]]
rag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til

---

[d041_d041 | Side [1]]
 Norges Takst AS
Gnr 86 - Bnr 1 Skårersle琀琀a 60 D Gnr 86 - Bnr 1 Skårersle琀琀a 60 D
0301 OSLO 1473 LØRENSKOG 0301 OSLO 1473 LØRENSKOG
Kommentar
Forsikring
Andelsleilighet Bod/er i fellesareal tas ikke med i de琀琀e oppse琀琀et.
Selskap Avtalenr Type Forsikringssum Årlig premie
IF skadeforsikring SP4683235
Kommentar
Felles forsikring for bore琀琀slaget.
Innboforsikring oppre琀琀er andelseier selv.
Befarings - og eiendomsopplysninger
Kilder og vedlegg
Befaring
Dato Til stede Rolle
18.12.2025 Morten

---

[d041_d041 | Side [1]]
nr:86 Bnr:620 Utskilt fra denne matrikkelenhet: dette med mindre boligen er helt eller delvis utleid.
18.03.1958 ‑ Dokumentnr: 921052 ‑ Sammenslått med Knr:0301 Gnr:86 Bnr:863
58 59

## Side 31

OM EIENDOMMEN OM EIENDOMMEN
Boligkjøperforsikring: Kjøper har anledning til å tegne bud kommer fra en ikke‑forbruker.
Diverse
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
Borettslagsmodellen innebærer at borettslaget eier informasjon om

---

[d041_d041 | Side [1]]
oligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: TBA 1
69105220
:ecnerefer
tnemucoD
2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4

---

[d041_d041 | Side [1]]
l beslutning på generalforsamling 25.04.1967, Energifarge: Grønn (småhusplanen).
skal laget ordne med trappevask. S‑5142:
Et utvalg pågående saker i nærområdet:
Info energiklasse
Parkering: Detaljregulering med konsekvensutredning og med
Ventelister for parkeringsplassene ved Disenveien Alle eiendommer som selges eller leies ut skal ha en reguleringsbestemmelser for Ny vannforsyning Oslo ‑ ‑ Saksnummer 202102096: Revisjon av reguleringsplan
7‑9‑11‑13‑15‑17‑19. energiattest. Unntak gjelder blant annet for

---

[d041_d041 | Side [1]]
7‑9‑11‑13‑15‑17‑19. energiattest. Unntak gjelder blant annet for frittstående Stamnett for småhusområder i Oslos ytre by (Småhusplanen)
Parkeringsplasser og garasjeplasser tildeles etter bygninger med et bruksareal mindre enn 50 m². Det er Reguleringsplanen skal legge til rette for bygging og drift
ansiennitet på ventelisten. eier som har plikt til å fremlegge energiattest og er av forsterket overordnet infrastruktur for vannforsyning ‑ Saksnummer 201904064: RV 4 Årvoll skole til Sinsen.
Borettslaget

---

[d041_d041 | Side [1]]
GlobalConnect AS. Vi tar fra husstand til husstand.
forbehold om endringer. For nærmere opplysninger, ta Plan‑ og bygningsetaten vedtar midlertidig forbud mot
Energimerke
kontakt med styret. tiltak i påvente av ny regulering, jf. plan‑ og
Regulering
Energikarakter: G bygningsloven § 13‑1.Forbudet gjelder for de arealene
Trappevask: Regulerings og arealplaner: Eiendommen reguleres etter: som er omfattet av reguleringsplan S‑4220
I henhold til beslutning på generalforsamling 25.04.1967, Energifarge: Grønn

---

[d041_d041 | Side [1]]
er. Forretningsfører er budsjettert med et overskudd på 502 000. Hvis et rom på visningen mangler fast installert
Boligbyggelaget Usbl. Revisor er KPMG. oppvarmingskilde, vil ikke dette bli inkludert i handelen. REGULERINGSPLAN FOR SMÅHUSOMRÅDER I OSLOS
YTRE BY,(SMÅHUSPLANEN). Ny § 6, 7, 8 ,9, 10, 12, 18 og
Beboernes forpliktelser og
Vaskerom i kjelleren bestående av to store Selger opplyser at det årlige strømforbruket er på ca. 20, vedtatt 12.6.13. Ny § 9, 4. ledd og § 10, 1. ledd andre
vaskemaskiner,

---

[d041_d041 | Side [1]]
aren og Gjøvik. Ventelister for garasjeplasser.
om formuesverdi, se Skatteetatens nettsider. Parkeringsplasser og garasjeplasser tildeles etter
Beskrivelse av
Servicetilbudene i nærområdet er svært gode. ansiennitet på ventelisten.
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
kvalitetsapparater, inkludert komfyr, induksjonstopp, fredelige omgivelser. måte som BRA, men man ser bort fra krav til
eiendommen
kjøleskap, fryseskap, oppvaskmaskin og vaskemaskin. himlingshøyde. Arealet inngår ikke i BRA, men

---

[d041_d041 | Side [1]]
ng fra kjøper ikke har fremlagt innglassing av balkonger
kontakt med styret. energiattest før avtale om salg er inngått, kan kjøper få Regulerings‑ og bebyggelsesplan for Disen gård, gnr. 86,
laget en energiattest ved hjelp av ekspert for selgers bnr. 1 m.fl. i Oslo. S‑683 har ikke egne skrevne ‑ Saksnummer 202460936: Kolderups vei 18 A ‑
Forretningsfører: Boligbyggelaget Usbl regning, innen ett år etter at avtale om salg er inngått. reguleringsbestemmelser. Bruksendring av rom i kjeller til bolig og

---

[d041_d041 | Side [1]]
åtar seg ikke V251058: Konferer gjerne megler vedrørende bruk av nettsiden.
Styregodkjennelse: Kjøper må godkjennes av ansvar for informasjonen som fremgår av energiattesten.
borettslagets styre. Styret kan kun nekte godkjenning Instruks. Bebyggelsesplan for forretningssentrum på
Tinglyste heftelser
dersom det foreligger saklig grunnlag, jf. borettslagsloven Disen,gnr. 86, bnr. 1. Det forutsettes at området nord og
Oppvarming
§ 4‑4. vest for bytikken blir rent fotgjengertorg. V251058 er en Tinglyste

---

[d041_d041 | Side [1]]
 våtrom kan føre til alvorlige
fra gulvet, vann konsekvenser som Organisasjonsnummer: 921407890
kokesonen. som ikke ledes effektivt til sluket. fuktskader og muggvekst.
Ventilatoren må utbedres/ kontrolleres da matos og røyk Det bør etableres tilfredsstillende tilluft til våtrom f.eks. Andelsnummer: 283
42 43

## Side 23

OM EIENDOMMEN OM EIENDOMMEN
hadde et resultat på 2 142 478 i 2024. For 2025 er det S‑4220:
Borettslaget består av 304 andeler. Forretningsfører er budsjettert med et overskudd på 502 000.

---

[d041_d041 | Side [1]]
 琀椀lfredss琀椀llende 琀椀llu昀琀 琀椀l våtrom f.eks. lu昀琀espalte ved Det er avløpsrør av plast synlig innvendig.
dør e.l.
Årstall: 2016 Kilde: Tidligere salgsoppgaver
• Over 琀椀d kan manglende 琀椀llu昀琀sven琀椀lering resultere i mugg- og
soppdannelse, spesielt på steder som ikke får god nok Vurdering av avvik:
lu昀琀gjennomstrømning. • Det er påvist andre avvik:
Det kan være at bore琀琀slag/sameie har egne vedtekter som hindrer Det er ikke dokumentasjon på avløpsrør.
Jordingskabel festet montering av mekanisk avtrekk fra

---

[d041_d041 | Side [1]]
, 0587 OSLO Norges Takst AS
Gnr 86 - Bnr 1 Skårersle琀琀a 60 D Gnr 86 - Bnr 1 Skårersle琀琀a 60 D
0301 OSLO 1473 LØRENSKOG 0301 OSLO 1473 LØRENSKOG
Tilstandsrapport Tilstandsrapport
Konsekvens/琀椀ltak Årstall: 2016 Kilde: Tidligere salgsoppgaver
ANDELSLEILIGHET
• Andre 琀椀ltak: Vurdering av avvik:
Boligen ligger i 2. etasje, noe som normalt gir redusert risiko for • Det er avvik:
Byggeår Kommentar forhøyde radonverdier sammenlignet med boliger i kontakt med Det er ikke dokumentasjon på arbeider derfor TG 2.
1960

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende dokumentasjon på avløpsrør. Det er påvist avløpsrør av plast synlig innvendig, men det foreligger ingen dokumentasjon på disse. Dette kan indikere uautoriserte eller udokumenterte arbeider.",
      "evidence": [
        "Det er ikke dokumentasjon på avløpsrør.",
        "Det er avløpsrør av plast synlig innvendig.",
        "Det gjøres oppmerksom på at soil/avløpsrør er på borettslagets ansvar."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R2",
      "description": "Manglende radonmåling. Det anbefales å gjennomføre radonmåling, men dette er ikke utført. Radon kan utgjøre en helserisiko for beboerne. Merk: Boligen ligger i 2. etasje, noe som normalt gir redusert risiko for forhøyde radonverdier.",
      "evidence": [
        "Det anbefales å gjennomføre radonmåling.",
        "Eiendommens tilstand: Innvendig > Radon – Vurdering av avvik: Måling anbefales for å dokumentere nivået.",
        "Boligen ligger i 2. etasje, noe som normalt gir redusert risiko for forhøyde radonverdier sammenlignet med boliger i kontakt med grunnen."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R3",
      "description": "Dører som er vanskelige å åpne eller lukke (TG2). Flere dører skraper mot karm, noe som indikerer behov for tiltak. Dører er borettslagets ansvarsområde.",
      "evidence": [
        "Bygningsdeler vurdert med TG2: Det er påvist avvik som tilsier at det bør foretas tiltak på borettslagets ansvar.",
        "Utvendig > Dører: Dører skraper mot karm. Forholdet gjelder samtlige dører.",
        "Det er påvist dører som er vanskelig å åpne eller lukke.",
        "Dører er ofte sameiets/borettslagets ansvarsområde."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Manglende ventilasjon/tilluft i oppholdsrom (TG2). Det er påvist at oppholdsrom mangler veggventiler eller vindusventiler, noe som over tid kan føre til mugg- og soppdannelse.",
      "evidence": [
        "Det bør etableres veggventiler/vindusventiler i alle oppholdsrom som ikke har det.",
        "Over tid kan manglende tilluftventilering resultere i mugg- og soppdannelse, spesielt på steder som ikke får god nok luftgjennomstrømning."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R5",
      "description": "Manglende dokumentasjon på arbeider utført på bad/kjøkken (TG2). Kjøkken er flyttet og bad er rehabilitert etter 2016, men det foreligger ikke dokumentasjon på disse arbeidene. Selger svarte 'Nei' på spørsmål om utført arbeid på bad/våtrom i egenerklæringen, noe som er inkonsistent med tilstandsrapporten.",
      "evidence": [
        "Det er ikke dokumentasjon på arbeider derfor TG 2.",
        "Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. tidligere salgsoppgaver.",
        "Årstall: 2016 Kilde: Tidligere salgsoppgaver",
        "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Nei"
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R6",
      "description": "Ventilator på bad fungerer ikke tilfredsstillende. Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt til sluket, noe som kan føre til fuktskader og muggvekst.",
      "evidence": [
        "Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt.",
        "Manglende tilluft til våtrom kan føre til alvorlige konsekvenser som fuktskader og muggvekst.",
        "Det bør etableres tilfredsstillende tilluft til våtrom f.eks. luftespalte ved dør e.l."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Radiatorer er kasset inn og ikke synlige for inspeksjon. Radiatorer og koblinger er ikke synlige, noe som betyr at eventuelle feil eller lekkasjer ikke kan avdekkes uten å åpne kassen.",
      "evidence": [
        "Radiatorer er kasset inn med tilluft under og utlufting på toppen av kasse. Radiatorer og koblinger er derfor ikke synlige.",
        "Opprinnelig radiator under kjøkkenbenk."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "description": "Luke i himling på baderom ble ikke kontrollert under befaring. Dette betyr at eventuelle skjulte feil eller mangler over badet ikke er avdekket.",
      "evidence": [
        "Luke i himling på baderom ble ikke kontrollert grunnet manglende tilgang."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R9",
      "description": "Høy andel fellesgjeld. Andel fellesgjeld er kr 144 170, noe som øker den totale kjøpesummen og medfører løpende rentekostnader for kjøper. Total klientgjeld er over 38,8 millioner kroner.",
      "evidence": [
        "Andel fellesgjeld: 144 170",
        "Ajourf. Andel f.gj. (lån): 144 170 Gjeld siste årsoppg.: 146 407",
        "Klient ajourf. lån: 38 845 479"
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Forventede økte felleskostnader. Det er opplyst at felleskostnadene forventes å øke på grunn av prisstigning og renteøkning etter at salgsoppgaven er utarbeidet.",
      "evidence": [
        "På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne salgsoppgaven er utarbeidet."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Dårlig energikarakter (G). Boligen har energikarakter G, som er den dårligste mulige karakteren. Dette indikerer høyt energiforbruk og potensielt høye strømkostnader. Merk: Fyring og varmtvann er inkludert i felleskostnadene (a-konto), noe som delvis demper den direkte kostnadsrisikoen for kjøper.",
      "evidence": [
        "Energikarakter: G",
        "Selger opplyser at det årlige strømforbruket er på ca. 400-500 kr i gjennomsnitt. Etter at strømprisen steg var strømforbruket på ca. 1 100 kr i de dyreste månedene.",
        "Fyring og varmtvann inkludert (a-konto)."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget er ikke tilknyttet sikringsordning. Dette innebærer at kjøper ikke har den ekstra sikkerheten som en sikringsordning gir ved eventuelle mislighold av felleskostnader fra andre andelseiere.",
      "evidence": [
        "Boligselskap er ikke tilknyttet sikringsordning.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Legalpanterett for borettslaget. Borettslaget har legalpanterett i andelen på inntil 2G for krav på felleskostnader, med prioritet foran alle andre heftelser, inkludert kjøpers egne lån.",
      "evidence": [
        "Borettslaget har legalpanterett i andelen med prioritet foran alle andre heftelser for krav om felleskostnader.",
        "Pantekravet kan ikke overstige et beløp som svarer til to ganger folketrygdens grunnbeløp.",
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Pågående reguleringsplaner i nærområdet kan påvirke eiendommen og omgivelsene. Blant annet er det vedtatt midlertidig forbud mot tiltak (Småhusplanen), og det pågår flere reguleringsprosjekter i området.",
      "evidence": [
        "Vedtak om midlertidig forbud mot tiltak – Småhusplanen. Plan- og bygningsetaten vedtar midlertidig forbud mot tiltak i påvente av ny regulering.",
        "Saksnummer 202102096: Revisjon av reguleringsplan Stamnett for småhusområder i Oslos ytre by (Småhusplanen).",
        "Saksnummer 201904064: RV 4 Årvoll skole til Sinsen.",
        "Saksnummer 202460936: Kolderups vei 18 A – Bruksendring av rom i kjeller til bolig."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R15",
      "description": "Bygget er fra 1959/1960 og kan ha skjulte feil og mangler typisk for eldre bygg. Eldre konstruksjoner kan ha skjulte skader som ikke er avdekket i tilstandsrapporten.",
      "evidence": [
        "Byggeår: 1959",
        "Byggeår Kommentar: 1960",
        "Tilstandsrapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R16",
      "description": "Styregodkjenning kreves for kjøper. Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R17",
      "description": "Private stikkledninger for vann og avløp er borettslagets ansvar. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet/borettslaget. Eventuelle skader eller utskiftninger kan medføre økte felleskostnader.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18_NY",
      "description": "Inkonsistens i selgers egenerklæring. Selger svarte 'Nei' på spørsmål om utført arbeid på bad/våtrom, men tilstandsrapporten dokumenterer at bad er rehabilitert og kjøkken er flyttet etter 2016. Denne inkonsistensen kan indikere tilbakeholdt informasjon og svekker selgers opplysningsplikt.",
      "evidence": [
        "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Nei",
        "Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. tidligere salgsoppgaver.",
        "Det er ikke dokumentasjon på arbeider derfor TG 2.",
        "Dersom jeg har gitt ufullstendige, uriktige eller misvisende opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress."
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R19_NY",
      "description": "El-anlegg ikke kontrollert av selger. Selger svarte 'Nei' på spørsmål om utført arbeid på el-anlegget, og det er ikke opplyst om el-tilsyn er gjennomført. For et bygg fra 1959/1960 kan dette utgjøre en sikkerhetsrisiko.",
      "evidence": [
        "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)? Svar: Nei",
        "Bygningssakkyndig kan anbefale å konsultere elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn.",
        "Byggeår: 1959"
      ],
      "source_documents": [
        "d041_d041"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "el-tilsyn elektrisk anlegg alder tilstandsrapport",
    "ventilasjon TG2 oppholdsrom hvilke rom mangler ventiler",
    "bad rehabilitert 2016 dokumentasjon byggetillatelse",
    "borettslaget økonomi regnskap budsjett 2025 overskudd underskudd",
    "vannledninger avvik TG2 kjøkken bad rør lekkasje",
    "selgers egenerklæring inkonsistens bad arbeid utført"
  ],
  "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Avløpsrør uten dokumentasjon (0.92 → 0.92):** Godt støttet av tre separate evidenspunkter. Confidence opprettholdes.\n\n**R2 – Manglende radonmåling (0.90 → 0.72):** Evidensen bekrefter at måling anbefales, men dokumentet presiserer eksplisitt at boligen ligger i 2. etasje, noe som normalt gir redusert risiko. Dette er en vesentlig modererende faktor som ikke fremgikk av den opprinnelige risikovurderingen. Confidence justeres ned.\n\n**R3 – Dører vanskelige å åpne/lukke (0.88 → 0.88):** Godt støttet. I tillegg fremgår det at dører er borettslagets ansvarsområde, noe som er relevant kontekst. Confidence opprettholdes.\n\n**R4 – Manglende ventilasjon i oppholdsrom (0.87 → 0.87):** Støttet av evidens. Confidence opprettholdes.\n\n**R5 – Manglende dokumentasjon bad/kjøkken (0.88 → 0.93):** Evidensen er sterk, og i tillegg avdekkes en inkonsistens i selgers egenerklæring (svarte 'Nei' på spørsmål om arbeid på bad/våtrom). Dette øker alvorlighetsgraden og confidence justeres opp. Inkonsistensen løftes også som en separat ny risiko (R18_NY).\n\n**R6 – Ventilator på bad fungerer ikke (0.85 → 0.85):** Godt støttet. Confidence opprettholdes.\n\n**R7 – Radiatorer kasset inn (0.80 → 0.80):** Støttet av evidens. Confidence opprettholdes.\n\n**R8 – Luke i himling ikke kontrollert (0.78 → 0.78):** Støttet av evidens. Confidence opprettholdes.\n\n**R9 – Høy fellesgjeld (0.85 → 0.85):** Godt støttet med konkrete tall. Confidence opprettholdes.\n\n**R10 – Forventede økte felleskostnader (0.88 → 0.88):** Direkte sitat fra dokumentet. Confidence opprettholdes.\n\n**R11 – Dårlig energikarakter G (0.90 → 0.82):** Energikarakter G er bekreftet, men det fremgår at fyring og varmtvann er inkludert i felleskostnadene (a-konto), noe som demper den direkte strømkostnadsrisikoen for kjøper. Confidence justeres ned noe.\n\n**R12 – Ikke tilknyttet sikringsordning (0.82 → 0.88):** Direkte bekreftet i dokumentet, og det fremgår eksplisitt at mislighold fra andre andelseiere må dekkes av øvrige andelseiere. Confidence justeres opp.\n\n**R13 – Legalpanterett (0.85 → 0.90):** Bekreftet av to separate steder i dokumentet. Confidence justeres opp.\n\n**R14 – Reguleringsplaner (0.80 → 0.80):** Støttet av evidens. Et ekstra reguleringsprosjekt (202460936) er identifisert i dokumentet. Confidence opprettholdes.\n\n**R15 – Eldre bygg fra 1959/1960 (0.83 → 0.83):** Støttet av evidens. Confidence opprettholdes.\n\n**R16 – Styregodkjenning (0.75 → 0.75):** Støttet, men risikoen er begrenset da styret kun kan nekte ved saklig grunnlag. Confidence opprettholdes.\n\n**R17 – Private stikkledninger (0.78 → 0.78):** Støttet av evidens. Confidence opprettholdes.\n\n**Nye risikoer identifisert:**\n- **R18_NY – Inkonsistens i egenerklæring:** Selger svarte 'Nei' på spørsmål om arbeid på bad/våtrom, men tilstandsrapporten dokumenterer rehabilitering. Dette er en vesentlig risiko knyttet til selgers opplysningsplikt og kan ha konsekvenser for reklamasjonsrett og forsikringsoppgjør.\n- **R19_NY – El-anlegg ikke kontrollert:** For et bygg fra 1959/1960 er manglende el-tilsyn en potensiell sikkerhetsrisiko. Selger svarte 'Nei' på spørsmål om arbeid på el-anlegget, og det er ikke dokumentert el-tilsyn.\n"
}

## Raw Response
```json
{
  "id": "msg_013q3QpQ3ubSyhjz1KZhcb3c",
  "container": null,
  "content": [
    {
      "id": "toolu_01VXmq9V288HMzn7Bgb2P9oT",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende dokumentasjon på avløpsrør. Det er påvist avløpsrør av plast synlig innvendig, men det foreligger ingen dokumentasjon på disse. Dette kan indikere uautoriserte eller udokumenterte arbeider.",
            "evidence": [
              "Det er ikke dokumentasjon på avløpsrør.",
              "Det er avløpsrør av plast synlig innvendig.",
              "Det gjøres oppmerksom på at soil/avløpsrør er på borettslagets ansvar."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R2",
            "description": "Manglende radonmåling. Det anbefales å gjennomføre radonmåling, men dette er ikke utført. Radon kan utgjøre en helserisiko for beboerne. Merk: Boligen ligger i 2. etasje, noe som normalt gir redusert risiko for forhøyde radonverdier.",
            "evidence": [
              "Det anbefales å gjennomføre radonmåling.",
              "Eiendommens tilstand: Innvendig > Radon – Vurdering av avvik: Måling anbefales for å dokumentere nivået.",
              "Boligen ligger i 2. etasje, noe som normalt gir redusert risiko for forhøyde radonverdier sammenlignet med boliger i kontakt med grunnen."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R3",
            "description": "Dører som er vanskelige å åpne eller lukke (TG2). Flere dører skraper mot karm, noe som indikerer behov for tiltak. Dører er borettslagets ansvarsområde.",
            "evidence": [
              "Bygningsdeler vurdert med TG2: Det er påvist avvik som tilsier at det bør foretas tiltak på borettslagets ansvar.",
              "Utvendig > Dører: Dører skraper mot karm. Forholdet gjelder samtlige dører.",
              "Det er påvist dører som er vanskelig å åpne eller lukke.",
              "Dører er ofte sameiets/borettslagets ansvarsområde."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Manglende ventilasjon/tilluft i oppholdsrom (TG2). Det er påvist at oppholdsrom mangler veggventiler eller vindusventiler, noe som over tid kan føre til mugg- og soppdannelse.",
            "evidence": [
              "Det bør etableres veggventiler/vindusventiler i alle oppholdsrom som ikke har det.",
              "Over tid kan manglende tilluftventilering resultere i mugg- og soppdannelse, spesielt på steder som ikke får god nok luftgjennomstrømning."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R5",
            "description": "Manglende dokumentasjon på arbeider utført på bad/kjøkken (TG2). Kjøkken er flyttet og bad er rehabilitert etter 2016, men det foreligger ikke dokumentasjon på disse arbeidene. Selger svarte 'Nei' på spørsmål om utført arbeid på bad/våtrom i egenerklæringen, noe som er inkonsistent med tilstandsrapporten.",
            "evidence": [
              "Det er ikke dokumentasjon på arbeider derfor TG 2.",
              "Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. tidligere salgsoppgaver.",
              "Årstall: 2016 Kilde: Tidligere salgsoppgaver",
              "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Nei"
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R6",
            "description": "Ventilator på bad fungerer ikke tilfredsstillende. Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt til sluket, noe som kan føre til fuktskader og muggvekst.",
            "evidence": [
              "Ventilatoren må utbedres/kontrolleres da matos og røyk ikke ledes effektivt.",
              "Manglende tilluft til våtrom kan føre til alvorlige konsekvenser som fuktskader og muggvekst.",
              "Det bør etableres tilfredsstillende tilluft til våtrom f.eks. luftespalte ved dør e.l."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Radiatorer er kasset inn og ikke synlige for inspeksjon. Radiatorer og koblinger er ikke synlige, noe som betyr at eventuelle feil eller lekkasjer ikke kan avdekkes uten å åpne kassen.",
            "evidence": [
              "Radiatorer er kasset inn med tilluft under og utlufting på toppen av kasse. Radiatorer og koblinger er derfor ikke synlige.",
              "Opprinnelig radiator under kjøkkenbenk."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "description": "Luke i himling på baderom ble ikke kontrollert under befaring. Dette betyr at eventuelle skjulte feil eller mangler over badet ikke er avdekket.",
            "evidence": [
              "Luke i himling på baderom ble ikke kontrollert grunnet manglende tilgang."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R9",
            "description": "Høy andel fellesgjeld. Andel fellesgjeld er kr 144 170, noe som øker den totale kjøpesummen og medfører løpende rentekostnader for kjøper. Total klientgjeld er over 38,8 millioner kroner.",
            "evidence": [
              "Andel fellesgjeld: 144 170",
              "Ajourf. Andel f.gj. (lån): 144 170 Gjeld siste årsoppg.: 146 407",
              "Klient ajourf. lån: 38 845 479"
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Forventede økte felleskostnader. Det er opplyst at felleskostnadene forventes å øke på grunn av prisstigning og renteøkning etter at salgsoppgaven er utarbeidet.",
            "evidence": [
              "På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne salgsoppgaven er utarbeidet."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Dårlig energikarakter (G). Boligen har energikarakter G, som er den dårligste mulige karakteren. Dette indikerer høyt energiforbruk og potensielt høye strømkostnader. Merk: Fyring og varmtvann er inkludert i felleskostnadene (a-konto), noe som delvis demper den direkte kostnadsrisikoen for kjøper.",
            "evidence": [
              "Energikarakter: G",
              "Selger opplyser at det årlige strømforbruket er på ca. 400-500 kr i gjennomsnitt. Etter at strømprisen steg var strømforbruket på ca. 1 100 kr i de dyreste månedene.",
              "Fyring og varmtvann inkludert (a-konto)."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget er ikke tilknyttet sikringsordning. Dette innebærer at kjøper ikke har den ekstra sikkerheten som en sikringsordning gir ved eventuelle mislighold av felleskostnader fra andre andelseiere.",
            "evidence": [
              "Boligselskap er ikke tilknyttet sikringsordning.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Legalpanterett for borettslaget. Borettslaget har legalpanterett i andelen på inntil 2G for krav på felleskostnader, med prioritet foran alle andre heftelser, inkludert kjøpers egne lån.",
            "evidence": [
              "Borettslaget har legalpanterett i andelen med prioritet foran alle andre heftelser for krav om felleskostnader.",
              "Pantekravet kan ikke overstige et beløp som svarer til to ganger folketrygdens grunnbeløp.",
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Pågående reguleringsplaner i nærområdet kan påvirke eiendommen og omgivelsene. Blant annet er det vedtatt midlertidig forbud mot tiltak (Småhusplanen), og det pågår flere reguleringsprosjekter i området.",
            "evidence": [
              "Vedtak om midlertidig forbud mot tiltak – Småhusplanen. Plan- og bygningsetaten vedtar midlertidig forbud mot tiltak i påvente av ny regulering.",
              "Saksnummer 202102096: Revisjon av reguleringsplan Stamnett for småhusområder i Oslos ytre by (Småhusplanen).",
              "Saksnummer 201904064: RV 4 Årvoll skole til Sinsen.",
              "Saksnummer 202460936: Kolderups vei 18 A – Bruksendring av rom i kjeller til bolig."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R15",
            "description": "Bygget er fra 1959/1960 og kan ha skjulte feil og mangler typisk for eldre bygg. Eldre konstruksjoner kan ha skjulte skader som ikke er avdekket i tilstandsrapporten.",
            "evidence": [
              "Byggeår: 1959",
              "Byggeår Kommentar: 1960",
              "Tilstandsrapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R16",
            "description": "Styregodkjenning kreves for kjøper. Kjøper må godkjennes av borettslagets styre, noe som innebærer en risiko for at kjøpet ikke gjennomføres dersom styret nekter godkjenning.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R17",
            "description": "Private stikkledninger for vann og avløp er borettslagets ansvar. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet/borettslaget. Eventuelle skader eller utskiftninger kan medføre økte felleskostnader.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18_NY",
            "description": "Inkonsistens i selgers egenerklæring. Selger svarte 'Nei' på spørsmål om utført arbeid på bad/våtrom, men tilstandsrapporten dokumenterer at bad er rehabilitert og kjøkken er flyttet etter 2016. Denne inkonsistensen kan indikere tilbakeholdt informasjon og svekker selgers opplysningsplikt.",
            "evidence": [
              "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Nei",
              "Kjøkken er flyttet og bad er rehabilitert etter 2016 iflg. tidligere salgsoppgaver.",
              "Det er ikke dokumentasjon på arbeider derfor TG 2.",
              "Dersom jeg har gitt ufullstendige, uriktige eller misvisende opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress."
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R19_NY",
            "description": "El-anlegg ikke kontrollert av selger. Selger svarte 'Nei' på spørsmål om utført arbeid på el-anlegget, og det er ikke opplyst om el-tilsyn er gjennomført. For et bygg fra 1959/1960 kan dette utgjøre en sikkerhetsrisiko.",
            "evidence": [
              "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)? Svar: Nei",
              "Bygningssakkyndig kan anbefale å konsultere elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn.",
              "Byggeår: 1959"
            ],
            "source_documents": [
              "d041_d041"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "el-tilsyn elektrisk anlegg alder tilstandsrapport",
          "ventilasjon TG2 oppholdsrom hvilke rom mangler ventiler",
          "bad rehabilitert 2016 dokumentasjon byggetillatelse",
          "borettslaget økonomi regnskap budsjett 2025 overskudd underskudd",
          "vannledninger avvik TG2 kjøkken bad rør lekkasje",
          "selgers egenerklæring inkonsistens bad arbeid utført"
        ],
        "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Avløpsrør uten dokumentasjon (0.92 → 0.92):** Godt støttet av tre separate evidenspunkter. Confidence opprettholdes.\n\n**R2 – Manglende radonmåling (0.90 → 0.72):** Evidensen bekrefter at måling anbefales, men dokumentet presiserer eksplisitt at boligen ligger i 2. etasje, noe som normalt gir redusert risiko. Dette er en vesentlig modererende faktor som ikke fremgikk av den opprinnelige risikovurderingen. Confidence justeres ned.\n\n**R3 – Dører vanskelige å åpne/lukke (0.88 → 0.88):** Godt støttet. I tillegg fremgår det at dører er borettslagets ansvarsområde, noe som er relevant kontekst. Confidence opprettholdes.\n\n**R4 – Manglende ventilasjon i oppholdsrom (0.87 → 0.87):** Støttet av evidens. Confidence opprettholdes.\n\n**R5 – Manglende dokumentasjon bad/kjøkken (0.88 → 0.93):** Evidensen er sterk, og i tillegg avdekkes en inkonsistens i selgers egenerklæring (svarte 'Nei' på spørsmål om arbeid på bad/våtrom). Dette øker alvorlighetsgraden og confidence justeres opp. Inkonsistensen løftes også som en separat ny risiko (R18_NY).\n\n**R6 – Ventilator på bad fungerer ikke (0.85 → 0.85):** Godt støttet. Confidence opprettholdes.\n\n**R7 – Radiatorer kasset inn (0.80 → 0.80):** Støttet av evidens. Confidence opprettholdes.\n\n**R8 – Luke i himling ikke kontrollert (0.78 → 0.78):** Støttet av evidens. Confidence opprettholdes.\n\n**R9 – Høy fellesgjeld (0.85 → 0.85):** Godt støttet med konkrete tall. Confidence opprettholdes.\n\n**R10 – Forventede økte felleskostnader (0.88 → 0.88):** Direkte sitat fra dokumentet. Confidence opprettholdes.\n\n**R11 – Dårlig energikarakter G (0.90 → 0.82):** Energikarakter G er bekreftet, men det fremgår at fyring og varmtvann er inkludert i felleskostnadene (a-konto), noe som demper den direkte strømkostnadsrisikoen for kjøper. Confidence justeres ned noe.\n\n**R12 – Ikke tilknyttet sikringsordning (0.82 → 0.88):** Direkte bekreftet i dokumentet, og det fremgår eksplisitt at mislighold fra andre andelseiere må dekkes av øvrige andelseiere. Confidence justeres opp.\n\n**R13 – Legalpanterett (0.85 → 0.90):** Bekreftet av to separate steder i dokumentet. Confidence justeres opp.\n\n**R14 – Reguleringsplaner (0.80 → 0.80):** Støttet av evidens. Et ekstra reguleringsprosjekt (202460936) er identifisert i dokumentet. Confidence opprettholdes.\n\n**R15 – Eldre bygg fra 1959/1960 (0.83 → 0.83):** Støttet av evidens. Confidence opprettholdes.\n\n**R16 – Styregodkjenning (0.75 → 0.75):** Støttet, men risikoen er begrenset da styret kun kan nekte ved saklig grunnlag. Confidence opprettholdes.\n\n**R17 – Private stikkledninger (0.78 → 0.78):** Støttet av evidens. Confidence opprettholdes.\n\n**Nye risikoer identifisert:**\n- **R18_NY – Inkonsistens i egenerklæring:** Selger svarte 'Nei' på spørsmål om arbeid på bad/våtrom, men tilstandsrapporten dokumenterer rehabilitering. Dette er en vesentlig risiko knyttet til selgers opplysningsplikt og kan ha konsekvenser for reklamasjonsrett og forsikringsoppgjør.\n- **R19_NY – El-anlegg ikke kontrollert:** For et bygg fra 1959/1960 er manglende el-tilsyn en potensiell sikkerhetsrisiko. Selger svarte 'Nei' på spørsmål om arbeid på el-anlegget, og det er ikke dokumentert el-tilsyn.\n"
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
    "input_tokens": 20436,
    "output_tokens": 5809,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
