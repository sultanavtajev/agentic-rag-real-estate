# Trace: agentic_reflecting_iter1
- **Run ID:** d13865ad-dfc3-471f-bdd7-b7ffb81dbec5
- **Tidspunkt:** 2026-03-25T09:00:20.210425+00:00
- **Varighet:** 85.86s
- **Input tokens:** 20671
- **Output tokens:** 4544

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
Risiko 1: Høy fellesgjeld i borettslaget
  Confidence: 0.92
  Evidens: Borettslaget fremstår med en solid økonomi, men har høy samlet fellesgjeld, noe som er normalt for nyere borettslag.; Finanskostnader 13 -24 237 543 -20 629 126 -24 984 000 -24 279 000; Kapitalkostnader 24 236 810 20 619 126 24 983 448 24 277 992

Risiko 2: Risiko for økte felleskostnader – andelen har IN-lån med rentebinding som kan endre seg
  Confidence: 0.9
  Evidens: Den estimerte månedlige økningen er på kr 1600 for denne leiligheten (avrundet til nærmeste 50 kroner).; Det presiseres at den estimerte endringen i felleskostnadene forutsetter at lånets avdrags- og rentebetingelser forblir uendret.; Styret i borettslaget vil avgjøre om og når felleskostnadene skal økes.; Rentesats: 4,79%

Risiko 3: Selger (OBOS BBL) har ikke bebodd boligen og har begrenset kjennskap til eiendommens faktiske tilstand
  Confidence: 0.95
  Evidens: Boligen er ervervet av selger som del av OBOS sin Deleie-ordning. OBOS BBL har derfor ikke bebodd boligen som er lagt ut for salg og kjenner derfor ikke denne utover beskrivelser i tilstandsrapport og salgsoppgave.; Av samme grunn kan OBOS BBL i begrenset grad supplere og kontrollere opplysningene i tilstandsrapport og salgsoppgave. Kjøper oppfordres derfor til å gjøre en særlig grundig undersøkelse.

Risiko 4: Tekniske installasjoner (varmesentral og varmtvannstank) er ikke undersøkt (TG IU)
  Confidence: 0.93
  Evidens: KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Tekniske installasjoner > Varmesentral, Tekniske installasjoner > Varmtvannstank; TGIU er ikke blitt undersøkt av takstmann.

Risiko 5: Helse, miljø og sikkerhet – forhold som åpenbart kan medføre fare er identifisert i rapporten
  Confidence: 0.8
  Evidens: HELSE, MILJØ OG SIKKERHET: Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet > Helse, miljø og sikkerhet

Risiko 6: Ingen radonmåling er utført av selger
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 7: Prisregulering via OBOS Bostart-ordning begrenser fremtidig salgspris og videresalg
  Confidence: 0.9
  Evidens: Kjøpesummen som gjelder dersom OBOS BBL benytter sin kjøperett, gir opprinnelig kjøper av andelen en prisutvikling på andelen tilsvarende normal prisutvikling for boliger, enten det har vært prisstigning eller prisfall.; En erklæring med tinglysingssperre tinglyses som heftelse i andelen. Av erklæringen vil det fremgå at tinglysing av eierskifte ikke kan foretas uten...

Risiko 8: Forkjøpsrett for OBOS-andelseiere kan forsinke eller komplisere salget
  Confidence: 0.85
  Evidens: Dersom en andel skifter eier, har andelseierne i borettslaget og dernest de øvrige andelseierne i boligbyggelaget – utpekt av OBOS – forkjøpsrett.

Risiko 9: Styregodkjenning av kjøper kreves, noe som kan forsinke overtakelse
  Confidence: 0.82
  Evidens: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven.

Risiko 10: Tomten ble ikke vurdert på befaringsdagen grunnet snødekke – skjulte feil kan foreligge
  Confidence: 0.85
  Evidens: Snødekket tomt på befaringsdagen og er ikke videre vurdert eller beskrevet.

Risiko 11: Vedtektene kan bli revidert frem til overtakelse, noe som skaper usikkerhet om fremtidige vilkår
  Confidence: 0.87
  Evidens: Vedtektene kan bli revidert frem til overtakelse av boligene.; Vedtektene kan bli revidert frem til overtakelse av boligene.

Risiko 12: Kommunale avgifter er vesentlig høyere enn budsjettert og øker kraftig
  Confidence: 0.88
  Evidens: Kommunale avgifter 9 -2 393 415 -2 180 633 -3 390 000 -3 809 000; Faktiske kommunale avgifter i 2024 var kr 2 393 415, mens budsjett for 2025 er kr 3 809 000 – en økning på nesten 60%.

Risiko 13: Begrenset adgang til utleie i borettslag – kan begrense kjøpers fleksibilitet
  Confidence: 0.8
  Evidens: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning...; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 14: Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet
  Confidence: 0.82
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 15: Fellesfunksjoner med andre boligselskaper i Kvartalet medfører delte kostnader og avhengighet av andre parters økonomi
  Confidence: 0.83
  Evidens: Borettslaget vil ha en del fellesfunksjoner med de andre boligselskapene som sammen vil utgjøre prosjektet Kvartalet i Lillestrøm.; Det legges opp til at kostnadene forbundet med drift- og vedlikehold av disse fellesfunksjonene fordeles mellom eierne etter en brøk basert på antall boliger eller bebygget areal på hvert enkelt delfelt.; Kostnader sameie 15 -1 882 261 -1 911 968 -1 910 000 -1 900 000

Risiko 16: Tilstandsrapporten er basert på visuell observasjon og gir ingen garanti mot skjulte feil
  Confidence: 0.9
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.; Det gjøres ikke nærmere undersøkelser slik som...

Risiko 17: OBOS vil ikke akseptere bud med forbehold om finansiering – kjøper bærer full finansieringsrisiko
  Confidence: 0.92
  Evidens: OBOS vil ikke akseptere bud med forbehold om finansiering.

Risiko 18: Manglende parkeringsplass medfølger ikke andelen
  Confidence: 0.85
  Evidens: Det medfølger ikke parkeringsplass. Det kan være muligheter for å leie garasjeplass ved tilgjengelighet.

Dokumentkontekst:
[d153_d153 | Side [1]]
ordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som

---

[d153_d153 | Side [1]]
bedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller

---

[d153_d153 | Side [1]]
ingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er

---

[d153_d153 | Side [1]]
lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke

---

[d153_d153 | Side [1]]
valg og prisforskjeller mellom 昀椀rmaer.
Det oppfordres med de琀琀e å innhente pris fra 2 琀椀l 3 aktører for
fak琀椀sk kostnad på ønsket utbedringer.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Messeveien 200, 2004 LILLESTRØM Takstportalen Aleksander Olsen AS
Gnr 81 - Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Sammendrag av boligens 琀椀lstand
Gå til side
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate

---

[d153_d153 | Side [1]]
r andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske status på et gi琀琀 琀椀dspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men som eier har

---

[d153_d153 | Side [1]]
g av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Tekniske installasjoner > Varmesentral Gå til side
Tekniske installasjoner > Varmtvannstank Gå til side
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet >
Helse, miljø og sikkerhet
Oppdragsnr.: 19291-2374 Befaringsdato:

---

[d153_d153 | Side [1]]
sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen •

---

[d153_d153 | Side [1]]
Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Tilstandsrapportens avgrensninger
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for den kvalitet og alder

---

[d153_d153 | Side [1]]
igen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke

---

[d153_d153 | Side [1]]
bygningssakkyndig. Rapporten gir en
teknisk vurdering av boligen og påviser eventuelle avvik. Type takst avholdt av takstmann: Tilstandsrapport
Det er viktig å merke seg at forhold som er vurdert med
TG2 og TG3 bør gjennomgås nøye, ettersom disse
Bebyggelsen
indikerer avvik fra normal slitasje eller høy alder, og kan
medføre behov for utbedring. Bygningsdeler vurdert med Hovedsakelig blokkbebyggelse.
TGIU er ikke blitt undersøkt av takstmann.
Byggemåte
Bygningsdeler med TG2: ‑ Ingen
Bygningsdeler med TG3:

---

[d153_d153 | Side [1]]
: 19291-2374 Befaringsdato: 18.02.2026 Side: 3 av 17
40

## Side 41

Messeveien 200, 2004 LILLESTRØM Takstportalen Aleksander Olsen AS
Gnr 81 - Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen

---

[d153_d153 | Side [1]]
ørenfaret 1
3205 LILLESTRØM 0580 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble

---

[d153_d153 | Side [1]]
mel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er

---

[d153_d153 | Side [1]]
: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1,

---

[d153_d153 | Side [1]]
garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
utbedre rom eller bygningsdeler er et sjablongmessig anslag

---

[d153_d153 | Side [1]]
al ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av

---

[d153_d153 | Side [1]]
mt Takstbransjens retningslinjer for arealmåling når det gjelder fordeling bygningssakkyndiges kompetanse og risikoen for skade.
mellom P-areal og S-areal.
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever

---

[d153_d153 | Side [1]]
t er å gi en 琀椀lstandsanalyse 琀椀l bruk for den kvalitet og alder vurdert.
som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for andre tredjeparter.
Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk • Fastmonterte installasjoner, for eksempel innfelt belysning (downlights),
Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved omsetning av bolig), demonteres ikke for å sjekke dampsperren bak. De琀琀e av hensyn 琀椀l
samt Takstbransjens retningslinjer for arealmåling når det gjelder

---

[d153_d153 | Side [1]]
e konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller

---

[d153_d153 | Side [1]]
yting/ bevertning. betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert på andelen.
Tinglyste heftelser
Vei, vann og avløp
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger Eiendommen er tilknyttet offentlig vann‑ og
eiendommens matrikkel ved overskjøting til ny avløpssystem. Stikkledningene fra eiendommen og ut til
hjemmelshaver: det kommunale nettet er private, og
vedlikeholdsansvaret for

---

[d153_d153 | Side [1]]
eler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: CSC, LE 2
05006240
:ecnerefer
tnemucoD
34

## Side 35

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23

---

[d153_d153 | Side [1]]
eid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller vedtatte

---

[d153_d153 | Side [1]]
tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: CSC, LE

---

[d153_d153 | Side [1]]
sikring i
27

## Side 28

OM EIENDOMMEN
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal

---

[d153_d153 | Side [1]]
jelder denne registerenheten med flere
boligbebyggelse i form av blokkbebyggelse organisert i
fem åpne kvartal, i tillegg til adkomstvei, gang/ sykkelvei Legalpant: Borettslaget har legalpant på inntil 2G som
og felles uteoppholdsarealer. Planen legger også opp til sikkerhet for betaling av felleskostnader. Dette betyr at
at det skal etableres barnehage og forretning/ borettslaget har prioritet over tinglyste lån når det gjelder
tjenesteyting/ bevertning. betaling av felleskostnader, og kan kreve inn

---

[d153_d153 | Side [1]]
r du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til

---

[d153_d153 | Side [1]]
 annet er spesifisert i Balkong med utgang fra stue på ca. 7 m². Betongdekke
salgsoppgaven. belagt med trespltet gulv. Rekkverkshøyde på 100 cm.
Balkongen fremstår for
Gjenstander som er nevnt i standardlisten, men som ikke øvrig med tiltenkt funksjon uten å påvise nevneverdige
finnes på eiendommen, vil heller ikke følge med i salget. avvik.
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Innvendig:
garanti fra produsent eller leverandør.

---

[d153_d153 | Side [1]]
ga et positivt driftsresultat. Etter fradrag
tiltak som medfører økning i fellesgjeld utover for finansposter på kr 24 108 006 viser regnskapet et
eksisterende finansiering. Det er heller ikke opplyst om positivt årsresultat på kr 21 324 537. Borettslaget
25

## Side 26

OM EIENDOMMEN
fremstår med en solid økonomi, men har høy samlet 3205/ 81/ 2693:
fellesgjeld, noe som er normalt for nyere borettslag. 14.04.2020 ‑ Dokumentnr: 2324484 ‑ Registrering av
grunn
Denne matrikkelenhet opprettet fra:
Vedtekter/

---

[d153_d153 | Side [1]]
om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11

---

[d153_d153 | Side [1]]
ld
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi

---

[d153_d153 | Side [1]]
r: Kr 955 946 (2024)
Det medfølger ikke parkeringsplass. Det kan være
Formuesverdi sekundær: Kr 3 823 783 (2024) muligheter for å leie garasjeplass ved tilgjengelighet.
Borettslaget har flere gjesteplasser i garasjeanlegget.
Info om formuesverdi: Skatteetaten beregner en Heisen går direkte ned i parkeringskjeller.
boligverdi (beregnet markedsverdi for bolig) basert på
SSBs statistiske opplysninger om omsatte boliger. I Øvrig parkering etter områdets bestemmelser.
22

## Side 23

OM EIENDOMMEN
BRA ‑ e: 3

---

[d153_d153 | Side [1]]
 en gjeldende Innvendig:
garanti fra produsent eller leverandør. Vegger: Malte flater. Fliser på bad.
Gulv: Eikeparkett. Fliser på bad.
24

## Side 25

OM EIENDOMMEN
Himlinger: Malte flater på innvendige takoverflater. pågående konflikter av betydning for borettslaget.
Overflater med normal bruksslitasje. Ingen skadeavvik Bygningsmassen er fra 2023, og det er ikke opplyst om
ble registrert på befaringsdagen. planlagte større vedlikeholdsarbeider.
Etasjeskille i betong. Etasjeskille synes å ha

---

[d153_d153 | Side [1]]
: Sportsbod i garasjeanlegg
Areal Bygningssakkyndigs
BRA ‑ i: 43 m²
23

## Side 24

OM EIENDOMMEN
Kjøper aksepterer at det kan forekomme hull og merker
kommentar til
etter montering av inventar og utstyr som ikke er en del
av overdragelsen.
arealoppmåling
Innvendig romhøyde på opptil 2,50 meter i stue.
Eiendommens
Standard tilstand
I forbindelse med salget er det utarbeidet en Takstmann: Takstportalen Aleksander Olsen AS
tilstandsrapport fra bygningssakkyndig. Rapporten gir en
teknisk vurdering av boligen

---

[d153_d153 | Side [1]]
nummer,
eiendomsbetegnelser, eiet/festet tomt,
Norges Eiendommer 19.02.2026 Gjennomgå琀琀 Nei
tomteareal og byggeår oppgi琀琀 ved
elektronisk grunnbok, Norges
Eiendommer.
Revisjoner
Versjon Ny versjon Kommentar
1 19.02.2026
2 19.02.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 19291-2374 Befaringsdato: 18.02.2026 Side: 15 av 17
52

## Side 53

Messeveien 200, 2004 LILLESTRØM Takstportalen Aleksander Olsen AS
Gnr 81 - Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580

---

[d153_d153 | Side [1]]
 kjøpesummen som gjelder dersom OBOS BBL benytter sin
kjøperett, gir opprinnelig kjøper av andelen en prisutvikling på andelen tilsvarende
normal prisutvikling for boliger, enten det har vært prisstigning eller prisfall.
Måten den prisregulerte kjøpesummen beregnes på fremgår av vilkårene som er
avtalt i forbindelse med Bostart-kundens kjøp av andelen.
En erklæring med tinglysingssperre tinglyses som heftelse i andelen. Av erklæringen
vil det fremgå at tinglysing av eierskifte ikke kan foretas uten

---

[d153_d153 | Side [1]]
orutsetninger og vedlegg Gå 琀椀l side
underliggende u琀昀ørelser og produktbeskrivelser.
KJØKKEN Gå 琀椀l side
Oppdragsnr.: 19291-2374 Befaringsdato: 18.02.2026 Side: 5 av 17
42

## Side 43

Messeveien 200, 2004 LILLESTRØM Takstportalen Aleksander Olsen AS
Gnr 81 - Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Beskrivelse av eiendommen
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Oppdragsnr.:

---

[d153_d153 | Side [1]]
dokumenter
102/HØVLERIET BORETTSLAG 923229833 102 OBOS Eilertsen Line 70% , Obos Bbl
Eiendomsforvaltning AS 30%.
Innskudd, pålydende mm
Andelsnummer
102
Eiendomsopplysninger
Adkomstvei
Eiendommen har adkomst via o昀昀entlig veg eller gate.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse.
Om

---

[d153_d153 | Side [1]]
og rengjort stand.
dette med mindre boligen er helt eller delvis utleid.
Kontrakts‑
Diverse
grunnlag
Boligen er ervervet av selger som del av OBOS sin
Deleie‑ordning. OBOS BBL har derfor ikke bebodd
Overtakelse
boligen som er lagt ut for salg og kjenner derfor ikke
denne utover beskrivelser i tilstandsrapport og Tidspunkt for overtakelse avtales mellom kjøper og
salgsoppgave. Av samme grunn kan OBOS BBL i selger.
begrenset grad supplere og kontrollere opplysningene i
tilstandsrapport og salgsoppgave.

---

[d153_d153 | Side [1]]
ikeholdsarbeider.
Etasjeskille i betong. Etasjeskille synes å ha tiltenkt
funksjon uten konstruksjonsmessig negativ avvik av Forretningsfører: Obos Eiendomsforvaltning AS
større betydning.
Fabrikkmalt slette innerdører fra byggeår. Dører fremstår Borettslagets forsikringsselskap: Tryg Forsikring
med normal bruksslitasje og tiltenkt funksjon.
Polisenummer fellesforsikring: 8399308
Øvrig
Husdyr: Det er tillatt å holde dyr så lenge dyreholdet ikke
er til sjenanse for de øvrige beboerne. Dyrehold

---

[d153_d153 | Side [1]]
sgjelden i
borettslaget og fellesutgiftene kan variere over tid, også
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ at den kan øke som følge av beslutninger i sameiets
styre eller generalforsamlinger.
Estimert totalpris ink. omk
Lånebetingelser fellesgjeld: Selskapets totale lån og
Kr 4 020 390 vilkår:
Bank: OBOS‑banken AS
Felleskostnader
Lånenr.: 98208073613
Felleskostnader kr 10 570,‑ pr. mnd Lånetype: Annuitetslån
Rentesats: 4,79%
Felleskostnader inkulderer: Lån nr: 9820807361; IN lån 1 ‑

---

[d153_d153 | Side [1]]
t andelseiere/seksjonseiere på Kvarteret og er
organisert som et tingsrettslig sameie. Bruken av garasjeanlegget og forholdet
mellom sameierne er regulert i egne vedtekter.
(4) Borettslaget utgjør en av i alt __ sameiere i ___________ avfallssug.
Sameiets formål er å ivareta sameiernes fellesinteresser knyttet til drift og
administrasjon av avfallssuganlegget. Sameiet har egne vedtekter som regulerer
bruken og forholdet mellom sameierne.
(5) Borettslaget er også deleier i utomhussameiet på dagens gnr 81

---

[d153_d153 | Side [1]]
f. borettslagsloven
Borettslaget hadde første innflytting i 2022 og § 4‑4.
eiendommen er oppført på eiet tomt. Forretningsfører er
OBOS Eiendomsforvaltning AS. Regnskap/ budsjett/ kostnadsøkninger: Av fremlagt
årsregnskap for 2024 fremgår det at borettslaget hadde
Det fremkommer ikke av årsmøtedokumentene at det er driftsinntekter på kr 32 466 839 og driftskostnader på kr
vedtatt nye låneopptak eller større kostnadskrevende 7 827 296. Dette ga et positivt driftsresultat. Etter fradrag
tiltak som medfører

---

[d153_d153 | Side [1]]
6 865 -50 000 -52 000
Andre driftskostnader 11 -530 311 -625 578 -505 000 -521 000
SUM DRIFTSKOSTNADER -7 827 296 -6 474 131 -7 701 200 -8 526 000
DRIFTSRESULTAT FØR IN: 24 639 543 21 645 245 25 509 800 24 452 000
Innbetalt andel fellesgjeld 20 865 000 74 215 000 0 0
DRIFTSRESULTAT 45 504 543 95 860 245 25 509 800 24 452 000
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 12 57 537 42 617 0 0
Finanskostnader 13 -24 237 543 -20 629 126 -24 984 000 -24 279 000
RES. FINANSINNT./-KOSTNADER -24 180 006 -20 586 509

---

[d153_d153 | Side [1]]
nyttet OBOS som er forretningsfører.
1-3 Fellesfunksjoner med de andre boligselskapene i Kvartalet
Borettslaget vil ha en del fellesfunksjoner med de andre boligselskapene som
sammen vil utgjøre prosjektet Kvartalet i Lillestrøm. Det legges opp til at kostnadene
forbundet med drift- og vedlikehold av disse fellesfunksjonene fordeles mellom eierne
etter en brøk basert på antall boliger eller bebygget areal på hvert enkelt delfelt. Det
vil bli etablert et sameie som vil stå for forvaltningen av områdene som

---

[d153_d153 | Side [1]]
545 (Tinglysingsgebyr ‑ hjemmel) felleskostnadene skal økes.
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Borettslaget har individuell nedbetaling av fellesgjeld
1 090 (Omkostninger totalt (uten Boligkjøperforsikring)) (IN‑ordning), som gir andelseierne muligheten til å
10 390 (Omkostninger totalt (med Boligkjøperforsikring)) nedbetale sin del av fellesgjelden. Innbetaling kan gjøres
to ganger per år, med terminer 30.04 og

---

[d153_d153 | Side [1]]
) Borettslaget er også deleier i utomhussameiet på dagens gnr 81 bnr 2701
sammen med boligselskapene på dagens gnr 81 bnr 2693, og fremtidige
boligselskaper på dagens gnr 81 bnr 2695 og 2. Utomhussameiet har egne vedtekter
som regulerer bruken av felles utomhusarealer, og forholdet mellom sameierne.
1-2 Forretningskontor, forretningsførsel og tilknytningsforhold
(1) Borettslaget har forretningskontor i Oslo kommune.
(2) Borettslaget er tilknyttet OBOS som er forretningsfører.
1-3 Fellesfunksjoner med de

---

[d153_d153 | Side [1]]
 -24 279 000
RES. FINANSINNT./-KOSTNADER -24 180 006 -20 586 509 -24 984 000 -24 279 000
ÅRSRESULTAT 21 324 537 75 273 736 525 800 173 000
Overføringer:
Til annen egenkapital 21 324 537 75 273 736
Vedlegg 3 12 av 23 s.743 Årsregnskap 2024.pdf
61

## Side 62

HUSORDENSREGLER FOR
HØVLERIET BORETTSLAG
Vedtatt i styremøte 24.03.2022, oppdatert 14.08.2025
Et borettslag utgjør et fellesskap som beboerne hver for seg og sammen har ansvaret for. Et godt
forhold mellom beboerne utvikler seg best ved at man tar

---

[d153_d153 | Side [1]]
skostnader som ikke blir betalt ved forfall, svarer andelseieren den til en
hver tid gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
6-3 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
borettslaget en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet
er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på
tidspunktet tvangsdekning besluttes gjennomført.
7. Mislighold, salgspålegg og

---

[d153_d153 | Side [1]]
ørerhonorar -257 590 -237 004 -260 000 -273 000
Konsulenthonorar 7 -10 910 -1 222 -3 000 -3 000
Kontingenter -41 200 0 -41 200 -41 000
Drift og vedlikehold 8 -1 102 800 -557 854 -725 000 -735 000
Kommunale avgifter 9 -2 393 415 -2 180 633 -3 390 000 -3 809 000
Ladekostnader EL-bil -19 104 0 0 0
Kostnader sameie 15 -1 882 261 -1 911 968 -1 910 000 -1 900 000
Energi/fyring 10 -1 185 042 -899 382 -550 000 -850 000
TV-anlegg/bredbånd -48 738 -46 865 -50 000 -52 000
Andre driftskostnader 11 -530 311 -625 578

---

[d153_d153 | Side [1]]
er: det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet.
26

## Side 27

OM EIENDOMMEN
Adkomst til eiendommen skjer via offentlig vei. utgifter. Manglende innbetaling av fellesutgiftene som
følge av andre andelshaveres mislighold, eller dersom
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
Utleie
må dekkes av de øvrige andelseierne.
Adgang til utleie: Det er begrenset adgang til å leie ut
bolig i borettslag. Med styrets godkjenning og under Borettslaget har

---

[d153_d153 | Side [1]]
orettslaget ikke oppfyller
pliktene sine, jf borettslagslovens § 5-18.
6. Felleskostnader og pantesikkerhet
6-1 Felleskostnader
(1) Den enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel fastsatt
ved stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres etter
borettslagslovens § 5-19.
(2) Felleskostnader fremkommer ved at 50% av kostnadene fordeles likt mellom
andelene, og 50% etter leilighetenes innbyrdes areal (hoveddelens BRA areal,
eksklusive balkonger, terrasser og

---

[d153_d153 | Side [1]]
inerer urbane kvaliteter med rolige og oversiktlige
Borettslaget har en avtale med OBOS Factoring om omgivelser.
garantert betaling av felleskostnader. OBOS Factoring
garanterer for overførsel til borettslaget hver måned og Fra boligen er det gangavstand til Lillestrøm sentrum
overtar deretter alt ansvar og risiko for eventuell med et bredt utvalg av butikker, dagligvareforretninger,
manglende innbetaling av felleskostnader. Avtale om treningssentre, caféer og restauranter. Lillestrøm Torv og
sikring av

---

[d153_d153 | Side [1]]
om f.eks.
garasjeport, renhold av garasjeanlegget, forsikring og lignende fordeles med lik andel
pr. p-plass som disponeres.
(6) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om
overlating av bruk betales av den andelseier som har søkt.
6-2 Betaling av felleskostnader
(1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget kan endre
felleskostnadene med èn måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren

---

[d153_d153 | Side [1]]
 2025
DRIFTSINNTEKTER:
Kapitalkostnader 24 236 810 20 619 126 24 983 448 24 277 992
Innkrevde felleskostnader 2 8 228 280 7 495 334 8 227 552 8 700 008
Innbetalinger 0 1 516 0 0
Andre inntekter 3 1 749 3 400 0 0
SUM DRIFTSINNTEKTER 32 466 839 28 119 376 33 211 000 32 978 000
DRIFTSKOSTNADER:
Personalkostnader 4 -42 300 0 -32 000 -32 000
Styrehonorar 5 -300 000 0 -225 000 -300 000
Revisjonshonorar 6 -13 625 -13 625 -10 000 -10 000
Forretningsførerhonorar -257 590 -237 004 -260 000 -273 000
Konsulenthonorar

---

[d153_d153 | Side [1]]
etablert et sameie som vil stå for forvaltningen av områdene som er felles for
boligselskapene. Sameiets ansvarsområde vil ikke nødvendigvis følge de enkelte
Vedtektene kan bli revidert frem til overtakelse av boligene.

65

## Side 66

delfeltenes eiendomsgrenser. Sameiet vil dermed kunne stå for drift og vedlikehold
av utearealer som ligger innenfor de enkelte delfeltene.
2. Andeler og andelseiere
2-1 Andeler og andelseiere
(1) Andelene skal være på kroner 5 000,-.
(2) Når ikke annet følger av

---

[d153_d153 | Side [1]]
er av andelsbolig i borettslaget
4. å ta opp lån som skal sikres med pant med prioritet foran innskuddene,
5. andre rettslige disposisjoner over fast eiendom som går ut over vanlig
forvaltning,
Vedtektene kan bli revidert frem til overtakelse av boligene.

74

## Side 75

6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med seg
økonomisk ansvar eller utlegg for borettslaget på mer enn fem prosent av
de årlige felleskostnadene.
8-4 Representasjon og fullmakt
Styrets leder og ett

---

[d153_d153 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ felleskostnadene for leiligheten øke. Den estimerte
4 010 000 (Pris inkl. fellesgjeld) månedlige økningen er på kr 1600 for denne leiligheten
(avrundet til nærmeste 50 kroner). Det presiseres at den
Omkostninger estimerte endringen i felleskostnadene forutsetter at
lånets avdrags‑ og rentebetingelser forblir uendret.
9 300 (Boligkjøperforsikring* (valgfritt)) Styret i borettslaget vil avgjøre om og når
545 (Tinglysingsgebyr ‑ hjemmel) felleskostnadene skal økes.
545

---

[d153_d153 | Side [1]]
arasjekjeller. Forholdet mellom boligseksjonen og
Regulerings og arealplaner
næringsseksjonen er regulert i eierseksjonssameiets
Eiendommen er regulert til kombinert bebyggelse og vedtekter.
anleggsformål.
Gjeldende reguleringsplan: 01.01.2024 ‑ Dokumentnr: 202032 ‑ Omnummerering ved
Plan‑id 551 kommuneendring
Reguleringsplan for Nesgata 19 Tidligere: Knr:3030 Gnr:81 Bnr:2693
Hensikten med planen er å legge til rette for oppføring av Gjelder denne registerenheten med flere
boligbebyggelse i form av

---

[d153_d153 | Side [1]]
 slektninger i rett opp‑/
nedstigende linje, fosterbarn, søsken, eller andre i samme
Organisasjonsnummer: 923229833 husstand de siste to årene), eller ved skifte etter
separasjon/ skilsmisse.
Andelsnummer: 102
Styregodkjennelse: Kjøper må godkjennes av
Leiligheten tilhører Høvleriet Borettslag, et borettslagets styre. Styret kan kun nekte godkjenning
OBOS‑tilknyttet borettslag bestående av 206 andeler. dersom det foreligger saklig grunnlag, jf. borettslagsloven
Borettslaget hadde første innflytting i 2022

---

[d153_d153 | Side [1]]
 nabolag, stille og rolig. Mest
godt voksne mennesker!» Gift 34% 33%
Sitat fra en lokalkjent Ikke gift 47% 54%
Separert 13% 9%
Enke/Enkemann 7% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
56

## Side 57

Innholdet i nabolagsprofilen er hentet fra ulike

---

[d153_d153 | Side [1]]
g
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse.
Om tomten
Snødekket tomt på befaringsdagen og er ikke videre vurdert eller beskrevet.
Tinglyste/andre forhold
Ikke kjent.
Oppdragsnr.: 19291-2374 Befaringsdato: 18.02.2026 Side: 14 av 17
51

## Side 52

Messeveien 200, 2004 LILLESTRØM Takstportalen Aleksander Olsen AS
Gnr 81 - Bnr 2693 4service Økern Portal Lørenfaret 1
3205 LILLESTRØM 0580 OSLO
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Tryg Forsikring 8399308
Kommentar
Felles

---

[d153_d153 | Side [1]]
kningsapparat/brannslange og en eller
flere røykvarslere i de(n) andelen(e) han eller hun rår over. Det bør være røykvarsler på alle
soverom. Eier er ansvarlig for at det utføres funksjonskontroll på egne røykvarslere minst en gang
pr. år.
§ 11 Brudd på husordensreglene
Eventuelle klager på nabo for brudd på husordensreglene eller på grunn av andre sjenerende
forhold bør rettes direkte til naboen selv. Kanskje er vedkommende ikke klar over forholdet og
problemet kan på den måten løses gjennom samtaler

---

[d153_d153 | Side [1]]
dyreholdet ikke
er til sjenanse for de øvrige beboerne. Dyrehold tillates
informasjon
kun etter søknad til styret og undertegning av
borettslagets dyreholdserklæring. Se borettslagets
Adresse
husordensregler for utfyllende informasjon.
Messeveien 200, 2004 LILLESTRØM
Forkjøpsrett: Dersom en andel skifter eier, har
Gnr. 81, bnr. 2693 andelseierne i borettslaget og dernest de øvrige
i Lillestrøm kommune.Andelsnr. 102 i Høvleriet Borettslag andelseierne i boligbyggelaget – utpekt av OBOS –
med orgnr.

---

[d153_d153 | Side [1]]
te etasje disponerer et avgrenset utomhusareal i
tilknytning til boligen. Borettslaget kan foreta justeringer av grensene for hver boligs
utomhusareal når det foreligger saklig grunn til det. Andelseierne kan ikke etablere
gjerder, tak, skillevegger, markiser eller andre faste innretninger på sitt utomhusareal
uten styrets forutgående skriftlig samtykke. Eventuell supplering av beplantning er
ikke tillatt uten styrets forutgående skriftlige samtykke.
Borettslaget, ved styret, har rett til uhindret å ferdes

---

[d153_d153 | Side [1]]
og kontrollere opplysningene i
tilstandsrapport og salgsoppgave. Kjøper oppfordres
Forsikring
derfor til å gjøre en særlig grundig undersøkelse.
Boligselgerforsikring: Selger har tegnet
‑ OBOS vil ikke akseptere bud med forbehold om boligselgerforsikring som dekker selgers ansvar etter
finansiering. avhendingsloven begrenset oppad kr. 20 000 000,‑.
‑ Akseptfristen for innkommende bud må være innenfor Egenerklæringsskjema er vedlagt salgsoppgaven og
ordinær arbeidstid (mandag ‑ fredag fra 08:00 til 16:00).

---

[d153_d153 | Side [1]]
 som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som

---

[d153_d153 | Side [1]]
 fra hvor i
landet eiendommen ligger.
31

## Side 32

MESSEVEIEN 200

## Side 33

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260050
Selger 1 navn Selger 2 navn
Carene Synnøve Carlsen Line Eilertsen
Gateadresse
Messeveien 200
Poststed Postnr
LILLESTRØM 2004
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2023
Hvor lenge

---

[d153_d153 | Side [1]]
ikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det

---

[d153_d153 | Side [1]]
 forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller

---

[d153_d153 | Side [1]]
nkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å
vedlagte

---

[d153_d153 | Side [1]]
e det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I

---

[d153_d153 | Side [1]]
esareal eller i andre boliger)?
Nei Ja
Initialer selger: CSC, LE 3
05006240
:ecnerefer
tnemucoD
35

## Side 36

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel

---

[d153_d153 | Side [1]]
odd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men

---

[d153_d153 | Side [1]]
er
oppfordres til å inngi bud via eiendomsmegler.
Ved slike kjøp selges eiendommen «som den er», og
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene budrunden. I forbrukerforhold (dvs. der selger er
fravikes § 3‑3 andre ledd, og eventuelle arealavvik forbruker) skal megleren ikke formidle bud med kortere
vurderes etter § 3‑8. akseptfrist enn til kl. 12.00 første virkedag etter

---

[d153_d153 | Side [1]]
ligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med

---

[d153_d153 | Side [1]]
siering, salg av nåværende bolig ol. Normalt vil ikke
et bud med forbehold bli akseptert før forbeholdet er
Ikke‑forbruker – definisjon og vilkår: avklart. Konferer gjerne med megler før bud avgis.
Dersom kjøper er en juridisk enhet, eller en fysisk person
som handler i næringssammenheng, regnes kjøpet ikke Bud som har forbehold om konfidensialitet ("hemmelige
som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
oppfordres til å inngi bud via eiendomsmegler.
Ved slike kjøp

---

[d153_d153 | Side [1]]
 mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for

---

[d153_d153 | Side [1]]
id og for utført arbeid. Dette omfatter blant
gjennomføres eller blir forsinket, er dette et mislighold fra annet vederlag knyttet til tilrettelegging, markedsføring
kjøpers side. Et vesentlig mislighold kan gi selger rett til å og eventuelle avholdte visninger, samt påløpte utlegg.
heve avtalen og til å gjennomføre dekningssalg for Timepris ved slik beregning er kr 3500.
kjøpers regning.
Oppdragsanvarlig
Dersom selger ikke bidrar til at megler får gjennomført
løpende kundetiltak underveis i oppdraget, må

---

[d153_d153 | Side [1]]
lagsloven § 5‑4. Kjøper og selger er forpliktet til å undertegne standard
Korttidsutleie er tillatt i opptil 30 døgn per år uten kjøpekontrakt utarbeidet av Emera i forbindelse med
samtykke fra styret. eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hos eiendomsmegler før bud inngis. Kontakt
eiendomsmegler for spørsmål.
Radonmåling
Selger har ikke utført radonmåling. Det er ikke krav om Selger leverer eiendommen i ryddig og rengjort stand.
dette med mindre boligen er helt eller delvis

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Høy fellesgjeld i borettslaget",
      "evidence": [
        "Borettslaget fremstår med en solid økonomi, men har høy samlet fellesgjeld, noe som er normalt for nyere borettslag.",
        "Finanskostnader 13 -24 237 543 -20 629 126 -24 984 000 -24 279 000",
        "Kapitalkostnader 24 236 810 20 619 126 24 983 448 24 277 992",
        "Rentesats: 4,79% på IN-lån i OBOS-banken"
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R2",
      "description": "Risiko for økte felleskostnader – andelen har IN-lån med rentebinding som kan endre seg",
      "evidence": [
        "Den estimerte månedlige økningen er på kr 1600 for denne leiligheten (avrundet til nærmeste 50 kroner).",
        "Det presiseres at den estimerte endringen i felleskostnadene forutsetter at lånets avdrags- og rentebetingelser forblir uendret.",
        "Styret i borettslaget vil avgjøre om og når felleskostnadene skal økes.",
        "Rentesats: 4,79%"
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R3",
      "description": "Selger (OBOS BBL) har ikke bebodd boligen og har begrenset kjennskap til eiendommens faktiske tilstand",
      "evidence": [
        "Boligen er ervervet av selger som del av OBOS sin Deleie-ordning. OBOS BBL har derfor ikke bebodd boligen som er lagt ut for salg og kjenner derfor ikke denne utover beskrivelser i tilstandsrapport og salgsoppgave.",
        "Av samme grunn kan OBOS BBL i begrenset grad supplere og kontrollere opplysningene i tilstandsrapport og salgsoppgave. Kjøper oppfordres derfor til å gjøre en særlig grundig undersøkelse."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Tekniske installasjoner (varmesentral og varmtvannstank) er ikke undersøkt (TG IU)",
      "evidence": [
        "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Tekniske installasjoner > Varmesentral, Tekniske installasjoner > Varmtvannstank",
        "TGIU er ikke blitt undersøkt av takstmann."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Helse, miljø og sikkerhet – forhold som åpenbart kan medføre fare er identifisert i rapporten",
      "evidence": [
        "HELSE, MILJØ OG SIKKERHET: Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet > Helse, miljø og sikkerhet"
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R6",
      "description": "Ingen radonmåling er utført av selger",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Prisregulering via OBOS Bostart-ordning begrenser fremtidig salgspris og videresalg",
      "evidence": [
        "Kjøpesummen som gjelder dersom OBOS BBL benytter sin kjøperett, gir opprinnelig kjøper av andelen en prisutvikling på andelen tilsvarende normal prisutvikling for boliger, enten det har vært prisstigning eller prisfall.",
        "En erklæring med tinglysingssperre tinglyses som heftelse i andelen. Av erklæringen vil det fremgå at tinglysing av eierskifte ikke kan foretas uten..."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Forkjøpsrett for OBOS-andelseiere kan forsinke eller komplisere salget",
      "evidence": [
        "Dersom en andel skifter eier, har andelseierne i borettslaget og dernest de øvrige andelseierne i boligbyggelaget – utpekt av OBOS – forkjøpsrett."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Styregodkjenning av kjøper kreves, noe som kan forsinke overtakelse",
      "evidence": [
        "Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Tomten ble ikke vurdert på befaringsdagen grunnet snødekke – skjulte feil kan foreligge",
      "evidence": [
        "Snødekket tomt på befaringsdagen og er ikke videre vurdert eller beskrevet."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Vedtektene kan bli revidert frem til overtakelse, noe som skaper usikkerhet om fremtidige vilkår",
      "evidence": [
        "Vedtektene kan bli revidert frem til overtakelse av boligene.",
        "Vedtektene kan bli revidert frem til overtakelse av boligene."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Kommunale avgifter er vesentlig høyere enn budsjettert og øker kraftig",
      "evidence": [
        "Kommunale avgifter 9 -2 393 415 -2 180 633 -3 390 000 -3 809 000",
        "Faktiske kommunale avgifter i 2024 var kr 2 393 415, mens budsjett for 2025 er kr 3 809 000 – en økning på nesten 60%."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Begrenset adgang til utleie i borettslag – kan begrense kjøpers fleksibilitet",
      "evidence": [
        "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning...",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Fellesfunksjoner med andre boligselskaper i Kvartalet medfører delte kostnader og avhengighet av andre parters økonomi",
      "evidence": [
        "Borettslaget vil ha en del fellesfunksjoner med de andre boligselskapene som sammen vil utgjøre prosjektet Kvartalet i Lillestrøm.",
        "Det legges opp til at kostnadene forbundet med drift- og vedlikehold av disse fellesfunksjonene fordeles mellom eierne etter en brøk basert på antall boliger eller bebygget areal på hvert enkelt delfelt.",
        "Kostnader sameie 15 -1 882 261 -1 911 968 -1 910 000 -1 900 000"
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R16",
      "description": "Tilstandsrapporten er basert på visuell observasjon og gir ingen garanti mot skjulte feil",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.",
        "Det gjøres ikke nærmere undersøkelser slik som..."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R17",
      "description": "OBOS vil ikke akseptere bud med forbehold om finansiering – kjøper bærer full finansieringsrisiko",
      "evidence": [
        "OBOS vil ikke akseptere bud med forbehold om finansiering."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R18",
      "description": "Manglende parkeringsplass medfølger ikke andelen",
      "evidence": [
        "Det medfølger ikke parkeringsplass. Det kan være muligheter for å leie garasjeplass ved tilgjengelighet."
      ],
      "source_documents": [
        "d153_d153"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "Helse miljø sikkerhet konkrete avvik TG2 TG3 tilstandsrapport Messeveien 200",
    "Bostart vilkår OBOS kjøperett prisregulering erklæring detaljer",
    "Energiforbruk fyringskostnader budsjett avvik borettslaget",
    "Deleie-ordning OBOS andel eierandel fordeling kjøper",
    "Fellesgjeld total beløp andel fellesgjeld Høvleriet borettslag",
    "Mislighold felleskostnader andre andelseiere risiko",
    "Garasjeanlegg sameie vedtekter kostnadsfordeling"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld:** Godt støttet. Finanskostnader på over 24 MNOK årlig bekrefter høy gjeld. Salgsoppgaven selv omtaler dette eksplisitt. Confidence 0.92 opprettholdes.\n\n**R2 – Økte felleskostnader / IN-lån:** Godt støttet med konkret estimat på kr 1 600/mnd økning og rentesats 4,79%. Confidence 0.90 opprettholdes.\n\n**R3 – Selger ikke bebodd boligen:** Direkte sitat fra salgsoppgaven bekrefter dette fullt ut. Confidence 0.95 opprettholdes.\n\n**R4 – TG IU varmesentral og varmtvannstank:** Direkte bekreftet i tilstandsrapportens sammendrag. Confidence 0.93 opprettholdes.\n\n**R5 – HMS-forhold:** Evidensen er svak – kun en overskrift/kategori i tilstandsrapporten uten konkret beskrivelse av hva faren består i. Det er uklart om dette er et reelt avvik eller bare en standardkategori i rapporten. Confidence nedjusteres betydelig til 0.55 og bør undersøkes nærmere.\n\n**R6 – Ingen radonmåling:** Direkte bekreftet i salgsoppgaven. Confidence 0.88 opprettholdes.\n\n**R7 – Bostart prisregulering:** Godt støttet med tinglysingssperre og prisreguleringsmekanisme. Confidence 0.90 opprettholdes.\n\n**R8 – Forkjøpsrett OBOS:** Direkte bekreftet. Confidence 0.85 opprettholdes.\n\n**R9 – Styregodkjenning:** Direkte bekreftet. Confidence 0.82 opprettholdes.\n\n**R10 – Snødekket tomt:** Direkte bekreftet i tilstandsrapporten. Confidence 0.85 opprettholdes.\n\n**R11 – Vedtekter kan revideres:** Direkte bekreftet, nevnt to steder i vedtektene. Confidence 0.87 opprettholdes.\n\n**R12 – Kommunale avgifter øker kraftig:** Tallene fra regnskapet bekrefter en økning fra 2 393 415 (2024 regnskap) til budsjettert 3 809 000 (2025) – nesten 60% økning. Confidence oppjusteres til 0.90.\n\n**R13 – Begrenset utleieadgang:** Direkte bekreftet med 30-døgnsregel for korttidsutleie. Confidence 0.80 opprettholdes.\n\n**R14 – Private stikkledninger:** Direkte bekreftet. Confidence 0.82 opprettholdes.\n\n**R15 – Fellesfunksjoner Kvartalet:** Godt støttet med vedtekter og regnskapstall. Confidence 0.83 opprettholdes.\n\n**R16 – Tilstandsrapport kun visuell:** Direkte bekreftet med NS 3600 referanse. Confidence 0.90 opprettholdes.\n\n**R17 – Ingen finansieringsforbehold:** Direkte bekreftet. Confidence 0.92 opprettholdes.\n\n**R18 – Ingen parkering medfølger:** Direkte bekreftet. Confidence 0.85 opprettholdes.\n\n**Manglende risikoer identifisert:**\n- Energi/fyringskostnader: Budsjett 2025 er kr 850 000 mot faktisk 2024 på kr 1 185 042 – faktisk kostnad er 40% over budsjett 2024 (kr 550 000). Dette er en vesentlig budsjettavvik som kan indikere økte felleskostnader.\n- Mislighold fra andre andelseiere: Salgsoppgaven nevner at manglende innbetaling fra andre andelshavere må dekkes av øvrige andelseiere – dette er en risiko som ikke er eksplisitt identifisert.\n- Deleie-ordning: Eierstrukturen (OBOS BBL 30%, Line Eilertsen 70%) kan ha implikasjoner for kjøper som ikke er fullt utredet.\n- Kombinert bebyggelse/næring: Eiendommen er regulert til kombinert bebyggelse og anleggsformål, med næringsseksjon i garasjekjeller – dette kan medføre støy/aktivitetsrisiko.\n"
}

## Raw Response
```json
{
  "id": "msg_011eqtDV88CJ4wHXgEk83kzN",
  "container": null,
  "content": [
    {
      "id": "toolu_01Xh8JsygtrCiFQ3xghtPYMG",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Høy fellesgjeld i borettslaget",
            "evidence": [
              "Borettslaget fremstår med en solid økonomi, men har høy samlet fellesgjeld, noe som er normalt for nyere borettslag.",
              "Finanskostnader 13 -24 237 543 -20 629 126 -24 984 000 -24 279 000",
              "Kapitalkostnader 24 236 810 20 619 126 24 983 448 24 277 992",
              "Rentesats: 4,79% på IN-lån i OBOS-banken"
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R2",
            "description": "Risiko for økte felleskostnader – andelen har IN-lån med rentebinding som kan endre seg",
            "evidence": [
              "Den estimerte månedlige økningen er på kr 1600 for denne leiligheten (avrundet til nærmeste 50 kroner).",
              "Det presiseres at den estimerte endringen i felleskostnadene forutsetter at lånets avdrags- og rentebetingelser forblir uendret.",
              "Styret i borettslaget vil avgjøre om og når felleskostnadene skal økes.",
              "Rentesats: 4,79%"
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R3",
            "description": "Selger (OBOS BBL) har ikke bebodd boligen og har begrenset kjennskap til eiendommens faktiske tilstand",
            "evidence": [
              "Boligen er ervervet av selger som del av OBOS sin Deleie-ordning. OBOS BBL har derfor ikke bebodd boligen som er lagt ut for salg og kjenner derfor ikke denne utover beskrivelser i tilstandsrapport og salgsoppgave.",
              "Av samme grunn kan OBOS BBL i begrenset grad supplere og kontrollere opplysningene i tilstandsrapport og salgsoppgave. Kjøper oppfordres derfor til å gjøre en særlig grundig undersøkelse."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Tekniske installasjoner (varmesentral og varmtvannstank) er ikke undersøkt (TG IU)",
            "evidence": [
              "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Tekniske installasjoner > Varmesentral, Tekniske installasjoner > Varmtvannstank",
              "TGIU er ikke blitt undersøkt av takstmann."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Helse, miljø og sikkerhet – forhold som åpenbart kan medføre fare er identifisert i rapporten",
            "evidence": [
              "HELSE, MILJØ OG SIKKERHET: Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet > Helse, miljø og sikkerhet"
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R6",
            "description": "Ingen radonmåling er utført av selger",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Prisregulering via OBOS Bostart-ordning begrenser fremtidig salgspris og videresalg",
            "evidence": [
              "Kjøpesummen som gjelder dersom OBOS BBL benytter sin kjøperett, gir opprinnelig kjøper av andelen en prisutvikling på andelen tilsvarende normal prisutvikling for boliger, enten det har vært prisstigning eller prisfall.",
              "En erklæring med tinglysingssperre tinglyses som heftelse i andelen. Av erklæringen vil det fremgå at tinglysing av eierskifte ikke kan foretas uten..."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Forkjøpsrett for OBOS-andelseiere kan forsinke eller komplisere salget",
            "evidence": [
              "Dersom en andel skifter eier, har andelseierne i borettslaget og dernest de øvrige andelseierne i boligbyggelaget – utpekt av OBOS – forkjøpsrett."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Styregodkjenning av kjøper kreves, noe som kan forsinke overtakelse",
            "evidence": [
              "Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Tomten ble ikke vurdert på befaringsdagen grunnet snødekke – skjulte feil kan foreligge",
            "evidence": [
              "Snødekket tomt på befaringsdagen og er ikke videre vurdert eller beskrevet."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Vedtektene kan bli revidert frem til overtakelse, noe som skaper usikkerhet om fremtidige vilkår",
            "evidence": [
              "Vedtektene kan bli revidert frem til overtakelse av boligene.",
              "Vedtektene kan bli revidert frem til overtakelse av boligene."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Kommunale avgifter er vesentlig høyere enn budsjettert og øker kraftig",
            "evidence": [
              "Kommunale avgifter 9 -2 393 415 -2 180 633 -3 390 000 -3 809 000",
              "Faktiske kommunale avgifter i 2024 var kr 2 393 415, mens budsjett for 2025 er kr 3 809 000 – en økning på nesten 60%."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Begrenset adgang til utleie i borettslag – kan begrense kjøpers fleksibilitet",
            "evidence": [
              "Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning...",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Fellesfunksjoner med andre boligselskaper i Kvartalet medfører delte kostnader og avhengighet av andre parters økonomi",
            "evidence": [
              "Borettslaget vil ha en del fellesfunksjoner med de andre boligselskapene som sammen vil utgjøre prosjektet Kvartalet i Lillestrøm.",
              "Det legges opp til at kostnadene forbundet med drift- og vedlikehold av disse fellesfunksjonene fordeles mellom eierne etter en brøk basert på antall boliger eller bebygget areal på hvert enkelt delfelt.",
              "Kostnader sameie 15 -1 882 261 -1 911 968 -1 910 000 -1 900 000"
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R16",
            "description": "Tilstandsrapporten er basert på visuell observasjon og gir ingen garanti mot skjulte feil",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.",
              "Det gjøres ikke nærmere undersøkelser slik som..."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R17",
            "description": "OBOS vil ikke akseptere bud med forbehold om finansiering – kjøper bærer full finansieringsrisiko",
            "evidence": [
              "OBOS vil ikke akseptere bud med forbehold om finansiering."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R18",
            "description": "Manglende parkeringsplass medfølger ikke andelen",
            "evidence": [
              "Det medfølger ikke parkeringsplass. Det kan være muligheter for å leie garasjeplass ved tilgjengelighet."
            ],
            "source_documents": [
              "d153_d153"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "Helse miljø sikkerhet konkrete avvik TG2 TG3 tilstandsrapport Messeveien 200",
          "Bostart vilkår OBOS kjøperett prisregulering erklæring detaljer",
          "Energiforbruk fyringskostnader budsjett avvik borettslaget",
          "Deleie-ordning OBOS andel eierandel fordeling kjøper",
          "Fellesgjeld total beløp andel fellesgjeld Høvleriet borettslag",
          "Mislighold felleskostnader andre andelseiere risiko",
          "Garasjeanlegg sameie vedtekter kostnadsfordeling"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld:** Godt støttet. Finanskostnader på over 24 MNOK årlig bekrefter høy gjeld. Salgsoppgaven selv omtaler dette eksplisitt. Confidence 0.92 opprettholdes.\n\n**R2 – Økte felleskostnader / IN-lån:** Godt støttet med konkret estimat på kr 1 600/mnd økning og rentesats 4,79%. Confidence 0.90 opprettholdes.\n\n**R3 – Selger ikke bebodd boligen:** Direkte sitat fra salgsoppgaven bekrefter dette fullt ut. Confidence 0.95 opprettholdes.\n\n**R4 – TG IU varmesentral og varmtvannstank:** Direkte bekreftet i tilstandsrapportens sammendrag. Confidence 0.93 opprettholdes.\n\n**R5 – HMS-forhold:** Evidensen er svak – kun en overskrift/kategori i tilstandsrapporten uten konkret beskrivelse av hva faren består i. Det er uklart om dette er et reelt avvik eller bare en standardkategori i rapporten. Confidence nedjusteres betydelig til 0.55 og bør undersøkes nærmere.\n\n**R6 – Ingen radonmåling:** Direkte bekreftet i salgsoppgaven. Confidence 0.88 opprettholdes.\n\n**R7 – Bostart prisregulering:** Godt støttet med tinglysingssperre og prisreguleringsmekanisme. Confidence 0.90 opprettholdes.\n\n**R8 – Forkjøpsrett OBOS:** Direkte bekreftet. Confidence 0.85 opprettholdes.\n\n**R9 – Styregodkjenning:** Direkte bekreftet. Confidence 0.82 opprettholdes.\n\n**R10 – Snødekket tomt:** Direkte bekreftet i tilstandsrapporten. Confidence 0.85 opprettholdes.\n\n**R11 – Vedtekter kan revideres:** Direkte bekreftet, nevnt to steder i vedtektene. Confidence 0.87 opprettholdes.\n\n**R12 – Kommunale avgifter øker kraftig:** Tallene fra regnskapet bekrefter en økning fra 2 393 415 (2024 regnskap) til budsjettert 3 809 000 (2025) – nesten 60% økning. Confidence oppjusteres til 0.90.\n\n**R13 – Begrenset utleieadgang:** Direkte bekreftet med 30-døgnsregel for korttidsutleie. Confidence 0.80 opprettholdes.\n\n**R14 – Private stikkledninger:** Direkte bekreftet. Confidence 0.82 opprettholdes.\n\n**R15 – Fellesfunksjoner Kvartalet:** Godt støttet med vedtekter og regnskapstall. Confidence 0.83 opprettholdes.\n\n**R16 – Tilstandsrapport kun visuell:** Direkte bekreftet med NS 3600 referanse. Confidence 0.90 opprettholdes.\n\n**R17 – Ingen finansieringsforbehold:** Direkte bekreftet. Confidence 0.92 opprettholdes.\n\n**R18 – Ingen parkering medfølger:** Direkte bekreftet. Confidence 0.85 opprettholdes.\n\n**Manglende risikoer identifisert:**\n- Energi/fyringskostnader: Budsjett 2025 er kr 850 000 mot faktisk 2024 på kr 1 185 042 – faktisk kostnad er 40% over budsjett 2024 (kr 550 000). Dette er en vesentlig budsjettavvik som kan indikere økte felleskostnader.\n- Mislighold fra andre andelseiere: Salgsoppgaven nevner at manglende innbetaling fra andre andelshavere må dekkes av øvrige andelseiere – dette er en risiko som ikke er eksplisitt identifisert.\n- Deleie-ordning: Eierstrukturen (OBOS BBL 30%, Line Eilertsen 70%) kan ha implikasjoner for kjøper som ikke er fullt utredet.\n- Kombinert bebyggelse/næring: Eiendommen er regulert til kombinert bebyggelse og anleggsformål, med næringsseksjon i garasjekjeller – dette kan medføre støy/aktivitetsrisiko.\n"
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
    "input_tokens": 20671,
    "output_tokens": 4544,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
