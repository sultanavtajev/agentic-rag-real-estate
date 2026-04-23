# Trace: agentic_reflecting_iter1
- **Run ID:** 645ac30b-6d5c-4e32-a95f-828264aa02ab
- **Tidspunkt:** 2026-03-23T23:01:10.545790+00:00
- **Varighet:** 94.64s
- **Input tokens:** 20690
- **Output tokens:** 5162

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
Risiko 1: Kjøkken er flyttet uten dokumentasjon og med avvik fra godkjente byggetegninger. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom, og dette ble gjort av tidligere eier på ukjent tidspunkt. Det foreligger ikke ferdigattest eller brukstillatelse for denne endringen.
  Confidence: 0.95
  Evidens: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom.; Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.; I nettannonse fra salg i 2008 står det at kjøkkenet er flyttet ut i stuen.

Risiko 2: Ingen radonmåling er utført, og bygget er heller ikke utført med radonsperre. Gjeldende fagstandard (NS 3600) krever mekanisk avtrekk fra kokesonen for å gi TG 1. Kjøkkenet har kun omluftsløsning (kullfilter), ikke mekanisk avtrekk.
  Confidence: 0.95
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Selger har ikke utført radonmåling.; Gjeldende fagstandard (NS 3600), krever mekanisk avtrekk fra kokesonen for å kunne gi TG 1. Kjøkken har omluftsløsning (kullfilter).

Risiko 3: Det er ikke installert komfyrvakt og lekkasjestopper, noe som anbefales selv om det ikke var krav på byggetidspunktet. Krav kom i 2010.
  Confidence: 0.9
  Evidens: Det er ikke installert komfyrvakt og lekkasjestopper. Dette anbefales selv om det ikke var krav på byggetidspunkt. Krav kom i 2010.

Risiko 4: Drypplekkasje ved avstengt stoppekran ble oppdaget under befaring. Selv om lekkasjen ikke er til stede når kranen er åpen, indikerer dette en potensiell feil ved røranlegget på badet.
  Confidence: 0.8
  Evidens: Drypplekkasje ved avstengt stoppekran da takstingeniør var på befaring. Ingen lekkasje når den er åpen, noe den har vært hele tiden. Reparert av rørlegger.

Risiko 5: Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygd sisterne på badet. Dette kan medføre skjulte vannskader over tid.
  Confidence: 0.85
  Evidens: Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne.

Risiko 6: Elektrisk anlegg mangler historikk og dokumentasjon (samsvarserklæring). En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon.
  Confidence: 0.9
  Evidens: En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon (samsvarserklæring) på anlegget.

Risiko 7: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget. Dette gir TG 2 og innebærer usikkerhet rundt tilstanden på fellesarealer og fremtidige vedlikeholdskostnader.
  Confidence: 0.9
  Evidens: Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.; I denne sammenhengen skal det settes TG 2 når det ikke foreligger rapport for fellesdeler.

Risiko 8: Planlagte kostnadsøkninger i borettslaget fra 2026 vil medføre økte felleskostnader for kjøper. Renovasjonsgebyr øker med 6%, forsikring øker med 10%, Årvoll kabel (TV og internett) øker med opptil 40%, og vintertjenester øker.
  Confidence: 0.9
  Evidens: Ila. 2026 skal; * Renovasjonsgebyret øke med 6% * Forsikringen øker med 10% * Årvoll kabel (TV og internett) øker med opptil 40% * Vintertjenestene (brøyting m.m) øker med...

Risiko 9: Borettslaget har høy fellesgjeld. Andel fellesgjeld er oppgitt til kr 75 436, og total klientgjeld er over 30 millioner kroner. Dette medfører løpende lånekostnader for kjøper i tillegg til felleskostnader.
  Confidence: 0.85
  Evidens: Ajourf. Andel f.gj. (lån): 75 436; Klient ajourf. lån: 30 833 815,23; Saldo per 15.12.2025: 4 447 259

Risiko 10: Dørene til tavlerommene er ikke i henhold til brannvernskrav, og er i tillegg slitte og vanskelige å åpne/lukke. Utskifting er påbegynt, men ikke fullført per januar 2025.
  Confidence: 0.85
  Evidens: Heller ikke dørene til tavlerommene er iht brannvernskrav. I tillegg er dørene slitte og det har vært vanskelig å åpne og lukke noen av dem. Derfor har styret begynt prosessen med utskifting av dørene til tavlerommene. Per 28.01.2025 er 4 [påbegynt].

Risiko 11: Boligen er fra 1953 og har begrenset adgang til utleie. Med styrets godkjenning kan boligen leies ut i inntil 3 år. Dette begrenser fleksibiliteten for kjøper som ønsker å leie ut.
  Confidence: 0.8
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.; Byggeår: 1953

Risiko 12: Vannledninger har mer enn halvparten av forventet levetid passert, noe som indikerer økt risiko for fremtidige lekkasjer og behov for utskifting.
  Confidence: 0.8
  Evidens: Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet [levetid passert].

Risiko 13: Det er avvik på gulvfall/høydeforskjell på badet. Målt høydeforskjell på mellom 15-30 mm gjennom hele rommet, og mellom 10-20 mm innenfor en lengde på 2 meter. Dette gir TG 2 og kan redusere effektiviteten av vannavrenning mot sluk.
  Confidence: 0.9
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; Målt høydeforskjell på mellom 10-20 mm innenfor en lengde på 2 meter. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; Til tross for avviket i fall/høydeforskjell til sluk, vil gulvet fortsatt kunne lede vann mot sluket, men med redusert effektivitet.

Risiko 14: Boligen ble oppført i 1953, og ferdigattest foreligger kun for oppføring av våningshus datert 1956. Det foreligger ikke ferdigattest eller brukstillatelse for senere endringer, herunder kjøkkenflyttingen.
  Confidence: 0.85
  Evidens: Det foreligger ferdigattest for oppføring av våningshus datert 1956.; Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.

Risiko 15: Varmesentral er merket med avvik i tilstandsrapporten, noe som kan indikere behov for tiltak eller utskifting av varmeanlegget.
  Confidence: 0.7
  Evidens: Tekniske installasjoner > Varmesentral: [avvik]

Dokumentkontekst:
[d040_d040 | Side [1]]
srapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige

---

[d040_d040 | Side [1]]
"For boliger med fellesdel skal teknisk rapport
for fellesdelene e琀琀erspørres. Dersom det foreligger en rapport, så skal Vurdering av avvik:
den vurderes med hensyn på relevans og egnethet og vedlegges som • Det er målt høydeforskjell på mellom 15-30 mm gjennom hele
grunnlag for 琀椀lstandsanalysen. Rapportens alder skal framkomme." rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l
godkjente måleavvik.
"Mangel av rapport for fellesdeler registreres som et avvik." • Målt høydeforskjell på mellom

---

[d040_d040 | Side [1]]
(fuk琀椀ndikator) eller • I en overgangsperiode skal rapporter som beny琀琀es i
blant annet vurdert ut fra alder og normal bruk slik: Avhendingsloven. visuelle observasjoner. boligomsetningen eller dersom det er en del av oppdraget også opplyse
om fordelingen mellom P-ROM og S-ROM med utgangspunkt i
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke • Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende de昀椀nisjonene

---

[d040_d040 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller

---

[d040_d040 | Side [1]]
 av bygninger fra 2023.
琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell • Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det
observasjon. Rapporten baseres på undersøkelsesnivå 1 med få unntak 琀椀dspunkt oppmålingen fant sted. DELING AV PERSONOPPLYSNINGER FOR TRYGGERE
• Ved TG0 og TG1 gis normalt ingen begrunnelse, da de琀琀e kun viser

---

[d040_d040 | Side [1]]
riere fra oppdrag 琀椀l oppdrag.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Selvbyggerveien 129, 0591 OSLO Øyum Takst og Eiendom AS Selvbyggerveien 129, 0591 OSLO Øyum Takst og Eiendom AS
Gnr 87 - Bnr 9 Heggelibakken 4 Gnr 87 - Bnr 9 Heggelibakken 4
0301 OSLO 0375 OSLO 0301 OSLO 0375 OSLO
Sammendrag av boligens 琀椀lstand
Tilstandsrapport
Boligbygg med 昀氀ere boenheter
Fordeling av 琀椀lstandsgrader INNVENDIG
BOLIGBYGG MED FLERE BOENHETER
KONSTRUKSJONER SOM

---

[d040_d040 | Side [1]]
deler registreres som et avvik." • Målt høydeforskjell på mellom 10 - 20 mm innenfor en lengde på 2
meter. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l godkjente
Vurdering av avvik: måleavvik.
• Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. Konsekvens/琀椀ltak
for fellesdeler i bygget.
• For å få 琀椀lstandsgrad 0 eller 1 må høydeforskjeller re琀琀es opp. Det vil
I denne sammenhengen skal det se琀琀es TG 2 når det ikke foreligger imidler琀椀d sjelden være økonomisk rasjonelt som et

---

[d040_d040 | Side [1]]
t grunn Gå til side Vedlikehold
Boligen fremstår som normalt pen og med normal bruksslitasje. Se
punkter under konstruksjoner for eventuelle behov i forhold 琀椀l Over昀氀ater - 2
Innvendig > Radon Gå til side
vedlikehold.
Gulv: Fliser i gangen.
TG0: Ingen avvik
Tekniske installasjoner > Vannledninger Gå til side UTVENDIG
TG1: Mindre eller moderate avvik Vurdering av avvik:
TG2: Avvik som kan kreve 琀椀ltak • Det er avvik:
TG3: Store eller alvorlige avvik Tekniske installasjoner > Varmesentral Gå til side

---

[d040_d040 | Side [1]]
. befarings琀椀dspunktet har betydning for om rommet de昀椀neres som P-
konsultere o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS fagperson ved behov for grundigere undersøkelser. • Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
3600 gir TG 2, men som ikke nødvendigvis krever

---

[d040_d040 | Side [1]]
3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova. eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen

---

[d040_d040 | Side [1]]
sjoner slik som vann og avløp uten • Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
tredjeparter. Rapportens struktur, metode og begrepsbruk følger i dokumentasjon, er kvalitet og alder vurdert. este琀椀ske status på et gi琀琀 琀椀dspunkt. opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er
hovedsak Norsk Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved ikke fremvist dokumentasjon på at rommet

---

[d040_d040 | Side [1]]
en inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en

---

[d040_d040 | Side [1]]
er heller Gjeldende fagstandard (NS 3600), krever mekanisk Anine Ødegård
tilstandsrapport av en bygningssakkyndig, som gir en ikke utført med radonsperre. avtrekk fra kokesonen for å kunne gi TG 1.
Borettslag
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, Tekniske installasjoner > Vannledninger Bygningsdeler som ikke har blitt undersøkt (TGIU): Skauen Borettslag
er vedlagt salgsoppgaven. Det er viktig at interessenter Mer enn halvparten av forventet

---

[d040_d040 | Side [1]]
ng, sikkerhet, for eksempel UTTRYKK OG DEFINISJONER Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv. eiendommens verdi.
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for
den som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for andre • For skjulte konstruksjoner slik som vann og avløp uten • Tilstand: Byggverkets eller

---

[d040_d040 | Side [1]]
river ulik de昀椀nisjon av fellesareal. Ved arealmåling gjelder NS 3940:2023 som
avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom • Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak de昀椀nerer fellesareal slik: “Delen av bygning som brukes av to eller 昀氀ere
framhever normalt ikke posi琀椀ve sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje) råte,

---

[d040_d040 | Side [1]]
akst og Eiendom AS
Gnr 87 - Bnr 9 Heggelibakken 4 Gnr 87 - Bnr 9 Heggelibakken 4
0301 OSLO 0375 OSLO 0301 OSLO 0375 OSLO
Tilstandsrapportens avgrensninger Tilstandsrapportens avgrensninger
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER i) sluk, te琀琀esjikt og fall på bad og vaskerom (våtrom) • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel UTTRYKK OG DEFINISJONER Opplysninger

---

[d040_d040 | Side [1]]
ig og taks琀昀oretaket behandler person-
BEFARINGEN AREALBEREGNING FOR BOENHETER opplysninger som bygningssakkyndig trenger for å kunne utarbeide
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som rapporten. Personvernerklæring med informasjon om bruk av
på forhold som man må regne med trenger utbedring straks eller innen bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l personopplysninger og dine re琀紀gheter

---

[d040_d040 | Side [1]]
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

[d040_d040 | Side [1]]
remkommer av Forskri昀琀 琀椀l personopplysninger og dine re琀紀gheter 昀椀nner du her
kort 琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan • Areal fastse琀琀es e琀琀er Forskri昀琀 琀椀l avhendingsloven og Norsk Standard Personvernerklæring - iVerdi
gis sjablongmessig anslag. 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk 3940 Areal- og volum-beregninger av bygninger fra 2023.
琀椀lstandsanalyse ved omsetning av bolig)

---

[d040_d040 | Side [1]]
 NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Når du kjøper en brukt

---

[d040_d040 | Side [1]]
g andre krav fra Boligen selges med det inventar og utstyr som i henhold
borettslagets styre. Styret kan kun nekte godkjenning borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal
Vei, vann og avløp
dersom det foreligger saklig grunnlag, jf. borettslagsloven følge med eiendommen, jf. avhendingsloven § 3‑4.
§ 4‑4. Eiendommen er tilknyttet offentlig vann‑ og Kjøper og selger er forpliktet til å undertegne standard Fastmonterte eller

---

[d040_d040 | Side [1]]
 du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller

---

[d040_d040 | Side [1]]
琀e oppdraget/rapporten
Rapporten er u琀昀ørt med begrensninger som følger av at
boligen er innredet på befaringen. Tunge møbler o.l. blir
normalt ikke 昀氀y琀琀et på. Skader eller mangler som kan være
skjult bak innredning kan derfor ikke oppdages ved befaringen.
Servitu琀琀er og he昀琀elser som he昀琀er ved eiendommen er ikke
vurdert, med mindre det er angi琀琀 i rapporten. Der det i
rapporten er foreta琀琀 antagelser, er de琀琀e normalt fordi
forholdet ikke lot seg faktasjekke. Funksjonstes琀椀ng av tekniske
installasjoner

---

[d040_d040 | Side [1]]
du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Initialer selger: AØ 2
68105220
:ecnerefer
tnemucoD
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller

---

[d040_d040 | Side [1]]
rsom det
med tilstøtende leilighet forkjøpsrett dersom denne har til Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de
hensikt å slå sammen en treroms‑ og en ettroms leilighet fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i
Tinglyste heftelser
til en femroms leilighet. Deretter følger forkjøpsrett for utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/

---

[d040_d040 | Side [1]]
nelig innskudd: 1 610
Andelsnr: 173 Partialobligasjonsnr: 173
8: Bygning/eiendom
Byggeår: 1953
Gårds/bruksnr:87/9
Bygningstype: LB
Feste/eiet tomt: Eiet Tomteareal: 39296
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP586825
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0102
Etasje: 1 Oppvarmingstype: Fjernvarme
Heis: Nei
Parkeringstype: Felles garasjeanlegg ()
Systemlås: Nei Antall rom: 2
Husdyrhold: Nei Oppr. antall rom: 1
Livsløp standard: Nei Kategori: Kategori

---

[d040_d040 | Side [1]]
ond 138
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Felleskostnader drift 2 756
3 975 437,00 (Pris inkl. fellesgjeld) Lånekostnader avdrag 11
Avdrag IN‑lån 595
Omkostninger Renter IN‑lån 290
Lånekostnader renter 18
9 300,00 (Boligkjøperforsikring* (valgfritt))
7 938,00 (Forhåndsvarsling forkjøpsrett)
Eiendomsskatt
545,00 (Tinglysingsgebyr ‑ hjemmel)
545,00 (Tinglysningsgebyr ‑ pantedokument) Det er ikke eiendomsskatt for andelen.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
9

---

[d040_d040 | Side [1]]
nader knyttet til innboforsikring, strøm, Fritidsmuligheter hele året vestsiden av Selvbyggerveien som går igjennom Byggetegninger:
abonnementer og mer. Kun en kort spasertur unna ligger Årvoll idrettspark, med borettslaget. Seks garasjer for utleie til andelseiere i Det foreligger godkjente og byggemeldte tegninger, men
fotballbaner som om vinteren forvandles til skøytebaner, borettslaget. Garasjene ligger mellom Selvbyggerveien det er avvik fra disse. Opprinnelig er kjøkkenet plassert
og Årvoll gård, som

---

[d040_d040 | Side [1]]
og
Gjenstander som er nevnt i standardlisten, men som ikke hadde løsnet fra festet i veggen pga sannsynlig tyngde
Standard
1. etasje finnes på eiendommen, vil heller ikke følge med i salget. av oppsamlet fett. Rørlegger fra nevnt firma skylte og
BRA‑i: 37 m² entré, stue med kjøkken, soverom og bad. Velkommen hjem! Alt utstyr og installasjoner som medfølger overtas slik de festet røret slik at det ikke lå i
Entréen er lys og har direkte adkomst til en praktisk er, uten garanti, med mindre det foreligger en

---

[d040_d040 | Side [1]]
ed megler for mer informasjon om borettslaget har prioritet over tinglyste lån når det gjelder må dekkes av de øvrige andelseierne.
Lovanvendelse
forkjøpsretten. betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert på andelen. Borettslaget har legalpanterett i andelen for krav på Regelverk og generelle opplysninger
Styregodkjennelse: Kjøper må godkjennes av dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i

---

[d040_d040 | Side [1]]
måling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
Beskrivelse Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i

---

[d040_d040 | Side [1]]
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

[d040_d040 | Side [1]]
andelen, med mindre det foreligger en
medlemskap er betalt. Iht. borettslagsloven av 6.6.2003 vedlikeholdsansvaret for disse påhviler sameiet. hos eiendomsmegler før bud inngis. Kontakt særskilt avtale mellom partene om noe annet, jf.
§ 5‑2, (4) skal alle som er medeiere i en andelsbolig ha Adkomst til eiendommen skjer via offentlig vei. eiendomsmegler for spørsmål. avhendingsloven § 3‑5.
egne medlemskap i boligbyggelaget.
Selger leverer eiendommen i ryddig og rengjort stand. En standard tilbehørsliste

---

[d040_d040 | Side [1]]
aling av fellesutgiftene som vedlagte materiell eller på https:/ /
andre andelseiere i borettslaget og Legalpant: Borettslaget har legalpant på inntil 2G som følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/
dernest de øvrige andelseierne i boligbyggelaget. Ta sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget sitter på fraflyttede og/ eller usolgte andeler,
kontakt med megler for mer informasjon om borettslaget har prioritet over

---

[d040_d040 | Side [1]]
omslig åpen, noe den
som tilleggsinformasjon til øvrige arealer. skyvedørsgarderobe som gir rikelig med har vært hele tiden. Reparert av rørlegger (se neste
34 35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
andre forserte/ mekaniske avtrekksløsninger fra
Byggemåte Selger
Innvendig > Radon kokesonen. Kjøkken har omluftsløsning (kullfilter).
I forbindelse med salget er det blitt utført en Det er ikke foretatt radonmålinger, og bygget er heller Gjeldende fagstandard (NS 3600), krever mekanisk Anine

---

[d040_d040 | Side [1]]
 13722-3221 Befaringsdato: 08.12.2025 Side: 3 av 18
Oppdragsnr.: 13722-3221 Befaringsdato: 08.12.2025 Side: 4 av 18
52 53

## Side 28

Selvbyggerveien 129, 0591 OSLO Øyum Takst og Eiendom AS Selvbyggerveien 129, 0591 OSLO Øyum Takst og Eiendom AS
Gnr 87 - Bnr 9 Heggelibakken 4 Gnr 87 - Bnr 9 Heggelibakken 4
0301 OSLO 0375 OSLO 0301 OSLO 0375 OSLO
Beskrivelse av eiendommen Beskrivelse av eiendommen
Boligen fremstår som normalt pen og med normal bruksslitasje. Avtrekksven琀椀l i himling med naturlig oppdri昀琀.

---

[d040_d040 | Side [1]]
e er: enhver tid. Kjøper aksepterer at det kan forekomme hull og merker eiendommen som kan medføre økte felleskostnader/ økt
etter montering av inventar og utstyr som ikke er en del fellesgjeld?
Bruksareal BRA: Videre ledes du inn i leilighetens sosiale oppholdsrom ‑ et av overdragelsen. Ja. Ila. 2026 skal; * Renovasjonsgebyret øke med 6 % *
BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. lyst og innbydende rom med vakkert lysinnslipp fra store Forsikringen øker med 10 % * Årvoll kabel (TV og
BRA‑e

---

[d040_d040 | Side [1]]
 eiendom, for eksempel oppskraping av dører og karmer,
skader på blomster, planter, grøntanlegg mv.
3. Jeg forplikter meg til straks å fjerne ekskrementer som mitt dyr måtte etterlate på
trapper, veier, plener, i bed og lignende.
4. Jeg er innforstått med at dyreholdet vil kunne bli til ulempe eller sjenanse for
beboere. Dersom det fremsettes berettigede klager over at mitt dyrehold sjenerer
naboer med lukt, bråk, allergireaksjoner eller på annen måte er til ulempe, for
eksempel skaper redsel eller angst,

---

[d040_d040 | Side [1]]
g at
Radonmåling
Radiatorer tilkoblet fellesanlegg, samt varme i Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
baderomsgulvet. Selger har ikke utført radonmåling. Det er ikke krav om boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
dette med mindre boligen er helt eller delvis utleid. avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema

---

[d040_d040 | Side [1]]
nenfor borettslagets område.
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
Husdyrhold skal ikke være til sjenanse eller ulempe for Boligkjøperforsikring: Kjøper har anledning til å tegne
Regulering Diverse
øvrige andelshavere og beboere. Ved gjentatte brudd på boligkjøperforsikring. Vedlagt i salgsoppgaven følger
reglene kan styret trekke godkjenningen tilbake. Regulerings og arealplaner: Eiendommen er regulert til Borettslagsmodellen innebærer at borettslaget eier informasjon om Boligkjøperforsikring fra

---

[d040_d040 | Side [1]]
egg til energikostnadene påvirkes borettslagets budsjett også av løpende vedlikehold, vannforbruk der det betales for hele bruksarealet, altså også loft, kjeller og trappehus, som
som må planlegges for og gjennomføres når det anses hensiktsmessig eller nødvendig. ikke er tilkoblet vann, til avregning etter reell forbruk. Derfor ble det installert felles vannur
Heldigvis ble borettslaget i 2024 forskånet av store, uforutsette reparasjoner. i Selvbyggerveien 40-42 og 60-62. Resultatet etter en syv måneders

---

[d040_d040 | Side [1]]
Selvbyggerveien 129 Type: Borettslag tilknyttet
0591 OSLO Eiere: Anine Ødegård 0591 OSLO Eiere: Anine Ødegård
Organisasjonsnr: 948 677 202 Organisasjonsnr: 948 677 202
3: Fellesgjeld 10: Fasiliteter og andre enhetsopplysninger
Saldo per 15.12.2025: 4 447 259 Parkering: Eget garasjelag for borettslaget. Brl. eier selv 8 garasjer for utleie. For øvrig kan styreleder i Skauen Garasjelag kontaktes.
Andel av saldo: 0 Borettslaget har fellesvaskeri, koster kr. 1.100,- pr 2025
Første termin/første avdrag:

---

[d040_d040 | Side [1]]
 Side 1 av 3
Skauen Borettslag Vår ref.: 31/14 Fødselsdato eier: 01.12.1994

Selvbyggerveien 129 Type: Borettslag tilknyttet

0591 OSLO Eiere: Anine Ødegård
 

Organisasjonsnr: 948 677 202 Andelsnr: 173
 1: Felleskostnader
Tot. innev. måned: 3 670


---

[d040_d040 | Side [1]]
ørn Berdahl
Styremedlem Styremedlem
31 Skauen Borettslag Org. nr 948677202 31 Skauen Borettslag Org. nr 948677202
Side 10 av 46 Side 11 av 46
100 101

## Side 52

Noter årsregnskap 2024 Skauen Borettslag Noter årsregnskap 2024 Skauen Borettslag
Note 0 - Regnskapsprinsipper Note 1 - Innkrevde felleskostnader
2024 2023
Årsregnskapet er satt opp i samsvar med regnskapslovens bestemmelser, god regnskapsskikk og etter forskrift om
årsregnskap og årsberetning for borettslag. 3600 Innkrevde felleskostn. drift 12

---

[d040_d040 | Side [1]]
yste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Ila. 2026 skal; * Renovasjonsgebyret øke med 6 % * Forsikringen øker med 10 % * Årvoll kabel (TV og internett)
Beskrivelse øker med opptil 40 % * Vintertjenestene (brøyting m.m) øker med

---

[d040_d040 | Side [1]]
tnadene per gressklipper beløper seg til ca. 10 kr/mnd.
som lå i vedlikeholdsfondet, i juni 2024 og igjen i januar 2025.
Denne investeringen vil gjøre seg lønnsomt allerede ila 2025.
Også ellers har styret aktivt flyttet pengene mellom høyrente- og driftskontoen til Skauen
borettslag og kunne med dette skape høye renteinntekter.
Utskifting av vinduer- og balkongdører (inkludert låneopptak) er avsluttet
Styret er opptatt av å drifte borettslaget på en økonomisk forsvarlig måte og prøver å finne
mulige

---

[d040_d040 | Side [1]]
45 776 0 0
Kortsiktig gjeld -1 258 683 -860 582 Driftskostnad
C. Disponible midler 5 299 905 3 014 263 Energikostnad 2 258 658 2 746 707 3 550 000 3 950 000
Kostnad eiendom/lokale 5 808 225 711 532 807 420 1 105 631
Kommunale avgifter/renovasjon 2 278 202 1 955 832 2 300 000 2 500 000
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet pr. 31.12. Lisens HMS, vedlikehold og andre lisenser. 6 18 223 44 935 39 900 40 000
De defineres som omløpsmidler fratrukket

---

[d040_d040 | Side [1]]
 holde borettslagets nettside
skauen.borettslag.net oppdatert og så attraktiv som mulig.
Oppgradering/vedlikehold uteområde
Det ble gjennomført et førstehjelpskurs og en brannøvelse for beboerne i mai. Det ble
Uteområdet har blitt bekostet med 310.000 kr. Det ble satt opp en pergola foran Sbv 137, anskaffet en hjertestarter, som er plassert ved siden av styrets postkasse på garasjeveggen
lagt en platting til sittegruppe foran Sbv 139, borettslagets lekeplasser fikk en overhaling mellom Selvbyggerveien 135

---

[d040_d040 | Side [1]]
en treroms og 118 kr
for en femroms leilighet i 30 år ved dagens rente. Dette tilsvarer behov for 1,6%
mindre økning av fellesgjelda de neste 30 årene. Til sammenligning økte
felleskostnader drift i 2025 med 2,2%.
Forslag til vedtak: Generalforsamlingen vedtar, med alminnelig flertall, å overføre
1 700 000 kr av overskuddet fra regnskapsåret 2024 til
vedlikeholdsfondet med umiddelbar virkning.
Side 2 av 46 Side 3 av 46
92 93

## Side 48

5.2 Økning av fast overføring av midler til Skauen borettslagets 5.3

---

[d040_d040 | Side [1]]
 Org. nr. 948677202 31 Skauen Borettslag Org. nr. 948677202
Side 14 av 46 Side 15 av 46
104 105

## Side 54

Noter årsregnskap 2024 Skauen Borettslag Noter årsregnskap 2024 Skauen Borettslag
2024 2023
Note 5 - Kostnad eiendom/ lokaler Note 8 - Reparasjoner og vedlikehold
2024 2023 Sum 5 538 702 7 011 567
6300 Leiekostnader lokaler 0 2 500
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av bygning.
6360 Annet renhold, sanitærartikler 75 973 38 672
6361 Fast

---

[d040_d040 | Side [1]]
asjonen som ligger på
Styret har håndtert tre forsikringssaker i 2024. To av dem ble avsluttet, den tredje gjelder nettsiden skauen.borettslag.net.
kollisjonen av en søppelbil til Renovasjonsetaten og er pågående.
Styret har vært i kontakt med flere leverandører av individuell måleravlesning og hentet inn
Det ble gjennomført to skrotinnsamlinger – en på våren og en på høsten. Grunnet den gode priser iht. generalforsamlingsvedtaket fra 2023. Resultatet presenteres på en ekstraordinær
erfaringen fra høsten

---

[d040_d040 | Side [1]]
g selger
gjør opp seg imellom for oppgjørsmåneden
2: Registrerte endringer felleskostnader
Neste endring: 01.01.2026 Tot. utg. i kr.: 3 808
Felleskostnader: Avsetning vedlikeholdsfond 138
Felleskostnader drift 2 756
Lånekostnader avdrag 11
Avdrag IN-lån 595
Renter IN-lån 290
Lånekostnader renter 18
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 75 436 Gjeld siste årsoppg.: 80 507
Klient ajourf. lån: 30 833 815,23 Klient gj. s. årsoppg.: 30 107 475
Spesifikasjon av lån:
Lånenummer: 83987163901,

---

[d040_d040 | Side [1]]
Økning av fast overføring av midler til Skauen borettslagets 5.3 Nye husordensregler for Skauen borettslag
vedlikeholdsfond Styret har gått gjennom husordensreglene og funnet ut at flere punkter var uaktuelle,
Alle faste innbetalinger eller overføringer av penger til vedlikeholdsfondet skjer etter utdaterte eller trengte en presisering. Derfor har styret ryddet opp i husordensreglene
vedtak fra generalforsamlingen. og laget et forslag med oppdaterte og forenklete husordensregler. Disse og

---

[d040_d040 | Side [1]]
ene er påbegynt
lavere i fjor. Dette skyldes utskifting av gamle vinduer i 2023 og 2024, etterisolering av
nærvarmerørene i 2023 og en justering av leveringsgraden til borettslaget. Heller ikke dørene til tavlerommene er iht brannvernskrav. I tillegg er dørene slitte og det
har vært vanskelig å åpne og lukke noen av dem. Derfor har styret begynt prosessen med
Styret fikk fremforhandlet en bedre strømavtale og borettslaget sparte dermed ca. 30.000 utskifting av dørene til tavlerommene. Per 28.01.2025 er 4

---

[d040_d040 | Side [1]]
arkeringsplass med
Ferdigattest/ brukstillatelse:
tilgjengelige. Årvoll IL tilbyr et bredt spekter av aktiviteter leiligheten.
som fotball, håndball, ski og volleyball noe for enhver Det foreligger ferdigattest for oppføring av våningshus
Andre kostnader:
smak. Skauen borettslag har 32 egne parkeringsplasser for datert 1956.
Andre utgifter: I tillegg til felleskostnader påløper det utleie til andelseiere i borettslaget. Disse ligger på
kostnader knyttet til innboforsikring, strøm, Fritidsmuligheter hele

---

[d040_d040 | Side [1]]
nær generalforsamling
5.1 Engangsoverføring av midler til Skauen borettslagets
1. Konstituering vedlikeholdsfond
Innstilling til de respektive poster blir lagt fram på generalforsamlingen. Vedlikeholdsfondet, som ble besluttet opprettet på generalforsamlingen 2024, skal gi
økonomisk forutsigbarhet og bidra til at borettslaget kan håndtere fremtidig
vedlikehold uten å ta opp store lån, eller uten å innføre større økninger av husleie.
2. Godkjenning av årsregnskap 2024
Innbetalinger i vedlikeholdsfondet kan

---

[d040_d040 | Side [1]]
644 Fasade/balkonger 50 000 24 900
6645 Vedlikehold tak/pipe 0 5 247
6648 Vedlikehold dører og porter 337 358 43 694
6650 Påkostning / Rehabilitering / Investering 4 454 223 0
6663 Vedlikehold ventilasjon 6 438 93 586
31 Skauen Borettslag Org. nr. 948677202 31 Skauen Borettslag Org. nr. 948677202
Side 16 av 46 Side 17 av 46
106 107

## Side 55

Noter årsregnskap 2024 Skauen Borettslag Noter årsregnskap 2024 Skauen Borettslag
Note 9 - Andre honorar Note 13 - Egenkapital
2024 2023 Egenkapital Endringer

---

[d040_d040 | Side [1]]
 5 Andre saker
5.1 Engangsoverføring av midler til Skauen borettslagets vedlikeholdsfond
 
5.2 Økning av fast overføring av midler til Skauen borettslagets vedlikeholdsfond
 
5.3 Nye husordensregler for Skauen borettslag
6 Valg
6.1 Valg av leder
6.2 Valg av medlemmer til styret

6.3 Valg av varamedlemmer til styret
6.4 Valg av delegat til Usbls generalforsamling 5 mai

---

[d040_d040 | Side [1]]
d forberedelser og etterarbeid samt gjennomføring av
prosjekter. Andre renteinntekter fra høyrente- og driftskontoen til Skauen borettslag utgjorde
198 449 kr og ble overført til vedlikeholdsfondet i januar 2025.
Til tross for mange omfattende prosjekter i 2024 foreslås det å holde styrehonorar for
styreperioden mars 2024 til mars 2025 på samme nivå som for 2023 - 386.000 kr. Dette Per 31.01.2025 ligger 1 233 428,89 kr i vedlikeholdsfondet.
for å vise at styret går foran som et godt eksempel og ser på alle

---

[d040_d040 | Side [1]]
Usbls generalforsamling 5 mai 2025
5.2 Økning av fast overføring av midler til Skauen borettslagets
vedlikeholdsfond
Vedtak:
Styret utpeker en representant fra styret til å stille på USBLs generalforsamling.
Vedtak:
Generalforsamlingen vedtok, med alminnelig flertall, å utvide høyden av det faste
månedlige beløpet etter fordelingsnøkkelen fra og med 01. juli 2025 med 2% av 6.5 Valg av valgkomite
felleskostnader drift.
Vedtak:
Det faste månedlige beløpet er heretter 5% av felleskostnader for drift.
Ingen

---

[d040_d040 | Side [1]]
t for de øvrige plottene.
PlottID/Best.nr: 150906/86523919
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
145

## Side 74

Nabolagsprofil
Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Selvbyggerveien 129 - Nabolaget Tonsenhagen - vurdert av 150 lokalkjente
Fjernveg (tunnel) Bebyggelse og

---

[d040_d040 | Side [1]]
supplerende opplysninger.
kollek琀椀v琀椀lbud med kort vei 琀椀l buss. Nærmeste ma琀昀orretning er Kiwi Tonsenhagen.
Adkomstvei For gyldighet på rapporten se forside
O昀昀entlig, kommunal vei.
Tilknytning vann
O昀昀entlig, kommunal 琀椀lknytning. Privat s琀椀kkledning på egen eiendom.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Regulert 琀椀l boliger med 琀椀lhørende anlegg. Reguleringsplan S-2864.
Ska琀琀etakst og formuesverdi
År Kommentar
2024 Fås ved henvendelse 琀椀l

---

[d040_d040 | Side [1]]
ebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 15.12.2025 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Det er ikke registrert naturmangfold innenfor kartutsnittet.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på

---

[d040_d040 | Side [1]]
nstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 150906/ 86523919 Deres ref.:
Høydereferanser Adresse: Selvbyggerveien 129
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 87/9
143

## Side 73

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
144
0077466
0047466
0017466
0086466
6647700
6647400
6647100
6646800
601500 601800 602100
601500 601800 602100
© Plan- og

---

[d040_d040 | Side [1]]
B 30) og lydklassi昀椀sert (35 db) inngangsdør. Nåværende eier har oppgradert kjøkkenet i 2018 med ny benkeplate Boligbygg med 昀氀ere boenheter
og fronter. Kjøleskapet ble også by琀琀et. Hvitevarer forøvrig ble ikke • Det foreligger godkjente og byggemeldte tegninger, men
INNVENDIG Gå 琀椀l side by琀琀et. det er avvik fra disse.
Opprinnelig er kjøkkenet plassert der hvor i dag er soverom.
Gulv: 1- stavs parke琀琀 i stuen og soverommene. Fliser i gangen.
Nåværende eier har i august/september 2018 by琀琀et ut skrog og

---

[d040_d040 | Side [1]]
ets
eller mangler. 
område. 
• Ved salg av boligen skal pålagt brannvernutstyr stå igjen i boligen.
• Vern om planter og beplantinger, spesielt om våren.  • Se for øvrig egen HMS- og brannverninstruks.
• Plener kan benyttes til ballspill, men i god avstand fra blokkene. Benytt i størst • Brannforskriftene setter grenser for hva som kan lagres i kjeller og på loft, følg
mulig utstrekning områder avsatte til lek.  disse. 
• Legg ikke ut mat til fugler, da dette trekker rotter og mus til eiendommen. •

---

[d040_d040 | Side [1]]
øykvarsler/ brannslukningsapparat ved feil
• Vask, reparasjoner, smøring o.l. av kjøretøy skal ikke 昀椀nne sted på borettslagets
eller mangler. 
område. 
• Ved salg av boligen skal pålagt brannvernutstyr stå igjen i boligen.
• Vern om planter og beplantinger, spesielt om våren.  • Se for øvrig egen branninstruks.
• Plener kan benyttes til ballspill, men i god avstand fra blokkene. Benytt i størst • Brannforskriftene setter grenser for hva som kan lagres i kjeller og på loft, følg
mulig utstrekning

---

[d040_d040 | Side [1]]
juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde Skoler
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse Tonsenhagen skole (1-7 kl.) 14 min
Indre by (utviklingsområder)
538 elever, 26 klasser 1 km
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka Årvoll skole (1-10 kl.) 15 min
H710 - Båndlegging for regulering etter pbl. 820 elever, 41 klasser 1.3 km
H810_1 - Krav om felles planlegging (områderegulering)
Linderud

---

[d040_d040 | Side [1]]
iendommen i ryddig og rengjort stand. En standard tilbehørsliste utarbeidet av Norges
Utleie
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
Vedtekter/ husordensregler
Adgang til utleie: Det er begrenset adgang til å leie ut gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
Vedlagt i prospektet. bolig i borettslag. Med styrets godkjenning og under – med mindre avvik er tydelig avtalt mellom kjøper og
visse vilkår kan boligen leies ut i inntil 3 år, jf.

---

[d040_d040 | Side [1]]
ering av avvik: fronter. Kjøleskapet ble også by琀琀et. Hvitevarer forøvrig ble ikke by琀琀et.
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med Konsekvens/琀椀ltak • Det er ikke påvist 琀椀lfredss琀椀llende løsning for å synliggjøre lekkasje fra
radonsperre. • Til tross for avviket i fall/høydeforskjell 琀椀l sluk, vil gulvet fortsa琀琀 kunne innebygget sisterne. Nåværende eier har i august/september 2018 by琀琀et ut skrog og
Konsekvens/琀椀ltak lede vann mot sluket, men med redusert e昀昀ek琀椀vitet.

---

[d040_d040 | Side [1]]
gsskap Nei
bore琀琀slagets/sameiets ansvarsområde. Avløpsrør under servanter og ikke er te琀琀e, så langt de琀琀e er mulig å sjekke uten å 昀樀erne
oppvaskkum er som regel eiers ansvar. Vurderingen gjelder interne rør. Tilstandsgraden er vurdert ut fra den forenklede og begrensede kapslinger? 3. Er det mangler på røykvarsler i boligen iht. forskri昀琀skrav på
kontrollen som forskri昀琀en inneholder. El-anlegget kan ha feil og mangler Nei søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985?
I ne琀琀annonse fra forrige salg

---

[d040_d040 | Side [1]]
t, men minst Byggeforskri昀琀 1985?
I ne琀琀annonse fra forrige salg er det opplyst at avløpsrør er by琀琀et i
som en slik forenklet undersøkelse ikke vil avdekke. Vær derfor Nei
forbindelse med oppgradering av bad i 2006. oppmerksom på denne risikoen, og søk videre veiledning eller få en 11. Finnes det kursfortegnelse, og er den i samsvar med antall sikringer?
fullstendig kontroll u琀昀ørt av registrert elektrovirksomhet. Ja 4. Er det skader på røykvarslere?
Eier har i 2023 få琀琀 spylt gjennom og re琀琀et av

---

[d040_d040 | Side [1]]
sikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i

---

[d040_d040 | Side [1]]
 taksering av bolig eller fri琀椀dshus, se
琀椀lstandsrapporten. Når arealet måles tas det ikke hensyn 琀椀l om arealet
bygget. Noen bygningsdeler vurderes e琀琀er gjeldende teknisk forskri昀琀 over昀氀aten med spiss redskap eller lignende. www.takstklagenemnd.no for mer informasjon
er lovlig oppført eller om bruken er lovlig, bruksendringer, lysforhold
på befarings琀椀dspunktet. De琀琀e gjelder blant annet:
eller andre sikkerhetsmangler.
Oppdragsnr.: 13722-3221 Befaringsdato: 08.12.2025 Side: 17 av 18 Oppdragsnr.:

---

[d040_d040 | Side [1]]
ke elektroniske byggesaks arkiv).
bruksmerker e琀琀er normal bruk, veggfester etc. Det er sparklet og
eller med rør.
malt vegger på soverom, kjøkken/stue og gang i juni/juli 2018. Det
er lagt ny parke琀琀 i august 2018.
Det er ikke installert komfyrvakt og lekkasjestopper. De琀琀e anbefales
selv om det ikke var krav på bygge琀椀dspunkt. Krav kom i 2010. I
Boligen har etasjeskille i betong. Det er u琀昀ørt målinger med
ne琀琀annonse fra salg i 2008 står det at kjøkkenet er 昀氀y琀琀et ut i stuen.
laservater over to meters

---

[d040_d040 | Side [1]]
te 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
Initialer selger: AØ 1
68105220
:ecnerefer
tnemucoD
45

## Side 24

1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Drypplekkasje ved avstengt stoppekran da takstingeniør var på befaring. Ingen lekkasje når den er åpen, noe den
Beskrivelse har vært hele tiden. Reparert av

---

[d040_d040 | Side [1]]
aking er derfor ikke u琀昀ørt. Det er
Eier opplever ikke problemer med badet. "Baderom pusset opp i regi av
u琀昀ørt fuktsøk med Pro琀椀meter Surveymaster på over昀氀ater inne på badet
bore琀琀slaget i 2006" i følg annonse fra salg i 2018. TEKNISKE INSTALLASJONER
uten at det ble avdekket unormale verdier.
Det er ikke fremvist dokumentasjon på u琀昀ørelse/oppbygging. Vurdering av avvik:
Undersøkelsene baserer seg på synlige og 琀椀lgjengelige bygningsdeler. • Det er pga bygningsmessige hindringer ikke fysisk mulig å

---

[d040_d040 | Side [1]]
asjoner > Elektrisk anlegg Skråtakskonstruksjon i tre tekket med takstein. Selvbyggerveien.
avvik fra normal slitasje og/ eller høy alder, noe som kan En gjennomgang av det elektriske anbefales grunnet
innebære behov for utbedringer. Bygningsdeler som er manglende historikk og dokumentasjon Vinduer Forretningsfører er Boligbyggelaget Usbl.
merket med TGIU er ikke blitt vurdert av takstmannen. (samsvarserklæring) på Vinduene er topphengslede med 2‑ lags isolerglass i Revisor er KPMG.
anlegget. (Ved

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Kjøkken er flyttet uten dokumentasjon og med avvik fra godkjente byggetegninger. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom, og dette ble gjort av tidligere eier på ukjent tidspunkt. Det foreligger ikke ferdigattest eller brukstillatelse for denne endringen.",
      "evidence": [
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom.",
        "Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.",
        "I nettannonse fra salg i 2008 står det at kjøkkenet er flyttet ut i stuen.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja – Beskrivelse: Kjøkken flyttet fra nåværende soverom og ut i stuen."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Ingen radonmåling er utført, og bygget er heller ikke utført med radonsperre. Gjeldende fagstandard (NS 3600) krever mekanisk avtrekk fra kokesonen for å gi TG 1. Kjøkkenet har kun omluftsløsning (kullfilter), ikke mekanisk avtrekk.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Selger har ikke utført radonmåling.",
        "Gjeldende fagstandard (NS 3600), krever mekanisk avtrekk fra kokesonen for å kunne gi TG 1. Kjøkken har omluftsløsning (kullfilter).",
        "Avtrekksventil i himling med naturlig oppdrift – ingen mekanisk løsning bekreftet."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Det er ikke installert komfyrvakt og lekkasjestopper, noe som anbefales selv om det ikke var krav på byggetidspunktet. Krav kom i 2010.",
      "evidence": [
        "Det er ikke installert komfyrvakt og lekkasjestopper. Dette anbefales selv om det ikke var krav på byggetidspunkt. Krav kom i 2010."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Drypplekkasje ved avstengt stoppekran ble oppdaget under befaring. Selv om lekkasjen ikke er til stede når kranen er åpen, indikerer dette en potensiell feil ved røranlegget på badet. Lekkasjen er oppgitt reparert av rørlegger.",
      "evidence": [
        "Drypplekkasje ved avstengt stoppekran da takstingeniør var på befaring. Ingen lekkasje når den er åpen, noe den har vært hele tiden. Reparert av rørlegger."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R5",
      "description": "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygd sisterne på badet. Dette kan medføre skjulte vannskader over tid.",
      "evidence": [
        "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R6",
      "description": "Elektrisk anlegg mangler historikk og dokumentasjon (samsvarserklæring). En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon.",
      "evidence": [
        "En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon (samsvarserklæring) på anlegget.",
        "El-anlegget kan ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget. Dette gir TG 2 og innebærer usikkerhet rundt tilstanden på fellesarealer og fremtidige vedlikeholdskostnader.",
      "evidence": [
        "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
        "I denne sammenhengen skal det settes TG 2 når det ikke foreligger rapport for fellesdeler."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Planlagte kostnadsøkninger i borettslaget fra 2026 vil medføre økte felleskostnader for kjøper. Renovasjonsgebyr øker med 6%, forsikring øker med 10%, Årvoll kabel (TV og internett) øker med opptil 40%, og vintertjenester øker.",
      "evidence": [
        "Ila. 2026 skal; * Renovasjonsgebyret øke med 6% * Forsikringen øker med 10% * Årvoll kabel (TV og internett) øker med opptil 40% * Vintertjenestene (brøyting m.m) øker med...",
        "Neste endring: 01.01.2026 Tot. utg. i kr.: 3 808"
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R9",
      "description": "Borettslaget har fellesgjeld. Andel fellesgjeld er oppgitt til kr 75 436, og total klientgjeld er over 30 millioner kroner. Dette medfører løpende lånekostnader for kjøper i tillegg til felleskostnader.",
      "evidence": [
        "Ajourf. Andel f.gj. (lån): 75 436",
        "Klient ajourf. lån: 30 833 815,23",
        "Saldo per 15.12.2025: 4 447 259",
        "Lånekostnader avdrag 11, Avdrag IN-lån 595, Renter IN-lån 290, Lånekostnader renter 18"
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Dørene til tavlerommene er ikke i henhold til brannvernskrav, og er i tillegg slitte og vanskelige å åpne/lukke. Utskifting er påbegynt, men ikke fullført per januar 2025.",
      "evidence": [
        "Heller ikke dørene til tavlerommene er iht brannvernskrav. I tillegg er dørene slitte og det har vært vanskelig å åpne og lukke noen av dem. Derfor har styret begynt prosessen med utskifting av dørene til tavlerommene. Per 28.01.2025 er 4 [påbegynt]."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Boligen er fra 1953 og har begrenset adgang til utleie. Med styrets godkjenning kan boligen leies ut i inntil 3 år. Dette begrenser fleksibiliteten for kjøper som ønsker å leie ut.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.",
        "Byggeår: 1953"
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Vannledninger har mer enn halvparten av forventet levetid passert, noe som indikerer økt risiko for fremtidige lekkasjer og behov for utskifting.",
      "evidence": [
        "Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet [levetid passert].",
        "I nettannonse fra forrige salg er det opplyst at avløpsrør er byttet i forbindelse med oppgradering av bad i 2006."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Det er avvik på gulvfall/høydeforskjell på badet. Målt høydeforskjell på mellom 15-30 mm gjennom hele rommet, og mellom 10-20 mm innenfor en lengde på 2 meter. Dette gir TG 2 og kan redusere effektiviteten av vannavrenning mot sluk.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Målt høydeforskjell på mellom 10-20 mm innenfor en lengde på 2 meter. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Til tross for avviket i fall/høydeforskjell til sluk, vil gulvet fortsatt kunne lede vann mot sluket, men med redusert effektivitet."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R14",
      "description": "Boligen ble oppført i 1953, og ferdigattest foreligger kun for oppføring av våningshus datert 1956. Det foreligger ikke ferdigattest eller brukstillatelse for senere endringer, herunder kjøkkenflyttingen.",
      "evidence": [
        "Det foreligger ferdigattest for oppføring av våningshus datert 1956.",
        "Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja."
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Varmesentral er merket med avvik i tilstandsrapporten, noe som kan indikere behov for tiltak eller utskifting av varmeanlegget.",
      "evidence": [
        "Tekniske installasjoner > Varmesentral: [avvik]",
        "TG2: Avvik som kan kreve tiltak – Tekniske installasjoner > Varmesentral"
      ],
      "source_documents": [
        "d040_d040"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    }
  ],
  "re_retrieval_queries": [
    "varmesentral tilstandsgrad avvik beskrivelse konsekvens",
    "elektrisk anlegg samsvarserklæring historikk TG",
    "stoppekran lekkasje rørlegger reparasjon dokumentasjon",
    "fellesgjeld IN-lån nedbetalingsplan rente borettslag",
    "brannvernskrav tavlerom dører fullføring utskifting tidspunkt",
    "bad tettsjikt membran dokumentasjon oppbygging",
    "avløpsrør vannledninger alder levetid tilstand",
    "kjøkken romfunksjon P-ROM S-ROM godkjenning kommunen"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Kjøkkenflytting uten dokumentasjon (confidence hevet til 0.97):**\nSvært godt dokumentert. Tre uavhengige kilder bekrefter avviket: tilstandsrapporten, selgers egenerklæring (spørsmål 22, svar Ja) og nettannonse fra 2008. Selger bekrefter eksplisitt manglende brukstillatelse/ferdigattest. Confidence heves fra 0.95 til 0.97.\n\n**R2 – Radon og mekanisk avtrekk (confidence beholdes 0.95):**\nGodt dokumentert. Radonmåling ikke utført bekreftes både i tilstandsrapport og egenerklæring. Manglende mekanisk avtrekk bekreftes med referanse til NS 3600. Confidence beholdes.\n\n**R3 – Komfyrvakt og lekkasjestopper (confidence beholdes 0.90):**\nDirekte sitat fra tilstandsrapporten bekrefter funnet. Confidence beholdes.\n\n**R4 – Drypplekkasje stoppekran (confidence SENKES til 0.65):**\nEvidensen er til stede, men risikoen er vesentlig redusert av at lekkasjen er reparert av rørlegger. Selger opplyser at kranen har vært åpen hele tiden og at det ikke er lekkasje i normal bruk. Risikoen bør nedgraderes siden den er utbedret, men manglende dokumentasjon på reparasjonen er fortsatt en risikofaktor. Confidence senkes fra 0.80 til 0.65.\n\n**R5 – Innebygd sisterne (confidence beholdes 0.85):**\nDirekte bekreftet i tilstandsrapporten. Confidence beholdes.\n\n**R6 – Elektrisk anlegg (confidence beholdes 0.90):**\nBekreftet i tilstandsrapporten med anbefaling om gjennomgang. Dokumentene bekrefter manglende samsvarserklæring. Confidence beholdes.\n\n**R7 – Manglende tilstandsrapport fellesdeler (confidence beholdes 0.90):**\nDirekte bekreftet i tilstandsrapporten med TG 2-begrunnelse. Confidence beholdes.\n\n**R8 – Kostnadsøkninger 2026 (confidence heves til 0.92):**\nBekreftet i egenerklæring og i felleskostnadsoppstillingen (neste endring 01.01.2026). Confidence heves marginalt fra 0.90 til 0.92.\n\n**R9 – Fellesgjeld (confidence justeres til 0.88):**\nTallene er bekreftet i dokumentene. Merk at andel fellesgjeld på kr 75 436 er relativt moderat, og borettslaget har vedlikeholdsfond og god økonomi ifølge årsberetningen. Risikoen er reell men ikke alarmerende. Confidence justeres ned fra 0.85 til 0.88 (tallene er godt dokumentert, men risikoprofilen er moderat).\n\n**R10 – Tavleromsdører brannkrav (confidence justeres til 0.88):**\nGodt dokumentert i årsberetningen. Utskifting er påbegynt men ikke fullført. Confidence justeres fra 0.85 til 0.88.\n\n**R11 – Begrenset utleieadgang (confidence beholdes 0.80):**\nBekreftet i salgsoppgaven. Byggeår 1953 er relevant kontekst men ikke direkte koblet til utleierestriksjonen. Confidence beholdes.\n\n**R12 – Vannledninger levetid (confidence beholdes 0.80):**\nBekreftet i tilstandsrapporten. Avløpsrør ble byttet i 2006 ifølge annonse, men vannledninger er separat vurdert. Confidence beholdes.\n\n**R13 – Gulvfall bad (confidence heves til 0.92):**\nSvært godt dokumentert med konkrete målinger og TG 2-begrunnelse. Confidence heves fra 0.90 til 0.92.\n\n**R14 – Manglende ferdigattest (confidence justeres til 0.88):**\nBekreftet. Ferdigattest fra 1956 gjelder kun oppføring. Selger bekrefter manglende brukstillatelse/ferdigattest for endringer. Confidence justeres fra 0.85 til 0.88.\n\n**R15 – Varmesentral avvik (confidence SENKES til 0.65):**\nEvidensen er svak – kun en kort referanse til \"avvik\" i oppsummeringen uten nærmere beskrivelse av hva avviket innebærer, alvorlighetsgrad eller konsekvenser. Trenger mer informasjon. Confidence senkes fra 0.70 til 0.65.\n\n**Mulige manglende risikoer identifisert:**\n1. Badet mangler dokumentasjon på utførelse/oppbygging – tilstandsrapporten nevner eksplisitt at det ikke er fremvist dokumentasjon på utførelse/oppbygging av badet.\n2. Avløpsrør under servanter/oppvaskkum – eiers ansvar, og tilstandsrapporten nevner dette spesifikt.\n3. Borettslaget har hatt forsikringssaker i 2024 (tre stykker, én pågående) – kollisjon med søppelbil er pågående sak.\n4. Vinduer og balkongdører – utskifting er avsluttet, men dette er nylig gjennomført og kan ha påvirket fellesgjelden.\n5. Manglende dokumentasjon på baderomsoppgradering fra 2006 – ingen dokumentasjon fremvist.\n"
}

## Raw Response
```json
{
  "id": "msg_01KxAUHp54SoSMmkv3xbtiES",
  "container": null,
  "content": [
    {
      "id": "toolu_01KkUHzHAeC7da83XcjPQjUH",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Kjøkken er flyttet uten dokumentasjon og med avvik fra godkjente byggetegninger. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom, og dette ble gjort av tidligere eier på ukjent tidspunkt. Det foreligger ikke ferdigattest eller brukstillatelse for denne endringen.",
            "evidence": [
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Opprinnelig er kjøkkenet plassert der hvor i dag er soverom.",
              "Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.",
              "I nettannonse fra salg i 2008 står det at kjøkkenet er flyttet ut i stuen.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja – Beskrivelse: Kjøkken flyttet fra nåværende soverom og ut i stuen."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Ingen radonmåling er utført, og bygget er heller ikke utført med radonsperre. Gjeldende fagstandard (NS 3600) krever mekanisk avtrekk fra kokesonen for å gi TG 1. Kjøkkenet har kun omluftsløsning (kullfilter), ikke mekanisk avtrekk.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Selger har ikke utført radonmåling.",
              "Gjeldende fagstandard (NS 3600), krever mekanisk avtrekk fra kokesonen for å kunne gi TG 1. Kjøkken har omluftsløsning (kullfilter).",
              "Avtrekksventil i himling med naturlig oppdrift – ingen mekanisk løsning bekreftet."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Det er ikke installert komfyrvakt og lekkasjestopper, noe som anbefales selv om det ikke var krav på byggetidspunktet. Krav kom i 2010.",
            "evidence": [
              "Det er ikke installert komfyrvakt og lekkasjestopper. Dette anbefales selv om det ikke var krav på byggetidspunkt. Krav kom i 2010."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Drypplekkasje ved avstengt stoppekran ble oppdaget under befaring. Selv om lekkasjen ikke er til stede når kranen er åpen, indikerer dette en potensiell feil ved røranlegget på badet. Lekkasjen er oppgitt reparert av rørlegger.",
            "evidence": [
              "Drypplekkasje ved avstengt stoppekran da takstingeniør var på befaring. Ingen lekkasje når den er åpen, noe den har vært hele tiden. Reparert av rørlegger."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R5",
            "description": "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygd sisterne på badet. Dette kan medføre skjulte vannskader over tid.",
            "evidence": [
              "Det er ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sisterne."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R6",
            "description": "Elektrisk anlegg mangler historikk og dokumentasjon (samsvarserklæring). En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon.",
            "evidence": [
              "En gjennomgang av det elektriske anbefales grunnet manglende historikk og dokumentasjon (samsvarserklæring) på anlegget.",
              "El-anlegget kan ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget. Dette gir TG 2 og innebærer usikkerhet rundt tilstanden på fellesarealer og fremtidige vedlikeholdskostnader.",
            "evidence": [
              "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
              "I denne sammenhengen skal det settes TG 2 når det ikke foreligger rapport for fellesdeler."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Planlagte kostnadsøkninger i borettslaget fra 2026 vil medføre økte felleskostnader for kjøper. Renovasjonsgebyr øker med 6%, forsikring øker med 10%, Årvoll kabel (TV og internett) øker med opptil 40%, og vintertjenester øker.",
            "evidence": [
              "Ila. 2026 skal; * Renovasjonsgebyret øke med 6% * Forsikringen øker med 10% * Årvoll kabel (TV og internett) øker med opptil 40% * Vintertjenestene (brøyting m.m) øker med...",
              "Neste endring: 01.01.2026 Tot. utg. i kr.: 3 808"
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R9",
            "description": "Borettslaget har fellesgjeld. Andel fellesgjeld er oppgitt til kr 75 436, og total klientgjeld er over 30 millioner kroner. Dette medfører løpende lånekostnader for kjøper i tillegg til felleskostnader.",
            "evidence": [
              "Ajourf. Andel f.gj. (lån): 75 436",
              "Klient ajourf. lån: 30 833 815,23",
              "Saldo per 15.12.2025: 4 447 259",
              "Lånekostnader avdrag 11, Avdrag IN-lån 595, Renter IN-lån 290, Lånekostnader renter 18"
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Dørene til tavlerommene er ikke i henhold til brannvernskrav, og er i tillegg slitte og vanskelige å åpne/lukke. Utskifting er påbegynt, men ikke fullført per januar 2025.",
            "evidence": [
              "Heller ikke dørene til tavlerommene er iht brannvernskrav. I tillegg er dørene slitte og det har vært vanskelig å åpne og lukke noen av dem. Derfor har styret begynt prosessen med utskifting av dørene til tavlerommene. Per 28.01.2025 er 4 [påbegynt]."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Boligen er fra 1953 og har begrenset adgang til utleie. Med styrets godkjenning kan boligen leies ut i inntil 3 år. Dette begrenser fleksibiliteten for kjøper som ønsker å leie ut.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år.",
              "Byggeår: 1953"
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Vannledninger har mer enn halvparten av forventet levetid passert, noe som indikerer økt risiko for fremtidige lekkasjer og behov for utskifting.",
            "evidence": [
              "Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet [levetid passert].",
              "I nettannonse fra forrige salg er det opplyst at avløpsrør er byttet i forbindelse med oppgradering av bad i 2006."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Det er avvik på gulvfall/høydeforskjell på badet. Målt høydeforskjell på mellom 15-30 mm gjennom hele rommet, og mellom 10-20 mm innenfor en lengde på 2 meter. Dette gir TG 2 og kan redusere effektiviteten av vannavrenning mot sluk.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Målt høydeforskjell på mellom 10-20 mm innenfor en lengde på 2 meter. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Til tross for avviket i fall/høydeforskjell til sluk, vil gulvet fortsatt kunne lede vann mot sluket, men med redusert effektivitet."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R14",
            "description": "Boligen ble oppført i 1953, og ferdigattest foreligger kun for oppføring av våningshus datert 1956. Det foreligger ikke ferdigattest eller brukstillatelse for senere endringer, herunder kjøkkenflyttingen.",
            "evidence": [
              "Det foreligger ferdigattest for oppføring av våningshus datert 1956.",
              "Kjøkken flyttet fra nåværende soverom og ut i stuen. Ble gjort av tidligere eier, usikkert når.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja."
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Varmesentral er merket med avvik i tilstandsrapporten, noe som kan indikere behov for tiltak eller utskifting av varmeanlegget.",
            "evidence": [
              "Tekniske installasjoner > Varmesentral: [avvik]",
              "TG2: Avvik som kan kreve tiltak – Tekniske installasjoner > Varmesentral"
            ],
            "source_documents": [
              "d040_d040"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          }
        ],
        "re_retrieval_queries": [
          "varmesentral tilstandsgrad avvik beskrivelse konsekvens",
          "elektrisk anlegg samsvarserklæring historikk TG",
          "stoppekran lekkasje rørlegger reparasjon dokumentasjon",
          "fellesgjeld IN-lån nedbetalingsplan rente borettslag",
          "brannvernskrav tavlerom dører fullføring utskifting tidspunkt",
          "bad tettsjikt membran dokumentasjon oppbygging",
          "avløpsrør vannledninger alder levetid tilstand",
          "kjøkken romfunksjon P-ROM S-ROM godkjenning kommunen"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Kjøkkenflytting uten dokumentasjon (confidence hevet til 0.97):**\nSvært godt dokumentert. Tre uavhengige kilder bekrefter avviket: tilstandsrapporten, selgers egenerklæring (spørsmål 22, svar Ja) og nettannonse fra 2008. Selger bekrefter eksplisitt manglende brukstillatelse/ferdigattest. Confidence heves fra 0.95 til 0.97.\n\n**R2 – Radon og mekanisk avtrekk (confidence beholdes 0.95):**\nGodt dokumentert. Radonmåling ikke utført bekreftes både i tilstandsrapport og egenerklæring. Manglende mekanisk avtrekk bekreftes med referanse til NS 3600. Confidence beholdes.\n\n**R3 – Komfyrvakt og lekkasjestopper (confidence beholdes 0.90):**\nDirekte sitat fra tilstandsrapporten bekrefter funnet. Confidence beholdes.\n\n**R4 – Drypplekkasje stoppekran (confidence SENKES til 0.65):**\nEvidensen er til stede, men risikoen er vesentlig redusert av at lekkasjen er reparert av rørlegger. Selger opplyser at kranen har vært åpen hele tiden og at det ikke er lekkasje i normal bruk. Risikoen bør nedgraderes siden den er utbedret, men manglende dokumentasjon på reparasjonen er fortsatt en risikofaktor. Confidence senkes fra 0.80 til 0.65.\n\n**R5 – Innebygd sisterne (confidence beholdes 0.85):**\nDirekte bekreftet i tilstandsrapporten. Confidence beholdes.\n\n**R6 – Elektrisk anlegg (confidence beholdes 0.90):**\nBekreftet i tilstandsrapporten med anbefaling om gjennomgang. Dokumentene bekrefter manglende samsvarserklæring. Confidence beholdes.\n\n**R7 – Manglende tilstandsrapport fellesdeler (confidence beholdes 0.90):**\nDirekte bekreftet i tilstandsrapporten med TG 2-begrunnelse. Confidence beholdes.\n\n**R8 – Kostnadsøkninger 2026 (confidence heves til 0.92):**\nBekreftet i egenerklæring og i felleskostnadsoppstillingen (neste endring 01.01.2026). Confidence heves marginalt fra 0.90 til 0.92.\n\n**R9 – Fellesgjeld (confidence justeres til 0.88):**\nTallene er bekreftet i dokumentene. Merk at andel fellesgjeld på kr 75 436 er relativt moderat, og borettslaget har vedlikeholdsfond og god økonomi ifølge årsberetningen. Risikoen er reell men ikke alarmerende. Confidence justeres ned fra 0.85 til 0.88 (tallene er godt dokumentert, men risikoprofilen er moderat).\n\n**R10 – Tavleromsdører brannkrav (confidence justeres til 0.88):**\nGodt dokumentert i årsberetningen. Utskifting er påbegynt men ikke fullført. Confidence justeres fra 0.85 til 0.88.\n\n**R11 – Begrenset utleieadgang (confidence beholdes 0.80):**\nBekreftet i salgsoppgaven. Byggeår 1953 er relevant kontekst men ikke direkte koblet til utleierestriksjonen. Confidence beholdes.\n\n**R12 – Vannledninger levetid (confidence beholdes 0.80):**\nBekreftet i tilstandsrapporten. Avløpsrør ble byttet i 2006 ifølge annonse, men vannledninger er separat vurdert. Confidence beholdes.\n\n**R13 – Gulvfall bad (confidence heves til 0.92):**\nSvært godt dokumentert med konkrete målinger og TG 2-begrunnelse. Confidence heves fra 0.90 til 0.92.\n\n**R14 – Manglende ferdigattest (confidence justeres til 0.88):**\nBekreftet. Ferdigattest fra 1956 gjelder kun oppføring. Selger bekrefter manglende brukstillatelse/ferdigattest for endringer. Confidence justeres fra 0.85 til 0.88.\n\n**R15 – Varmesentral avvik (confidence SENKES til 0.65):**\nEvidensen er svak – kun en kort referanse til \"avvik\" i oppsummeringen uten nærmere beskrivelse av hva avviket innebærer, alvorlighetsgrad eller konsekvenser. Trenger mer informasjon. Confidence senkes fra 0.70 til 0.65.\n\n**Mulige manglende risikoer identifisert:**\n1. Badet mangler dokumentasjon på utførelse/oppbygging – tilstandsrapporten nevner eksplisitt at det ikke er fremvist dokumentasjon på utførelse/oppbygging av badet.\n2. Avløpsrør under servanter/oppvaskkum – eiers ansvar, og tilstandsrapporten nevner dette spesifikt.\n3. Borettslaget har hatt forsikringssaker i 2024 (tre stykker, én pågående) – kollisjon med søppelbil er pågående sak.\n4. Vinduer og balkongdører – utskifting er avsluttet, men dette er nylig gjennomført og kan ha påvirket fellesgjelden.\n5. Manglende dokumentasjon på baderomsoppgradering fra 2006 – ingen dokumentasjon fremvist.\n"
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
    "input_tokens": 20690,
    "output_tokens": 5162,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
