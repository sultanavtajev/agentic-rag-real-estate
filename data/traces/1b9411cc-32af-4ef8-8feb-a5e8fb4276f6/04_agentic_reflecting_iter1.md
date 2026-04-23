# Trace: agentic_reflecting_iter1
- **Run ID:** 1b9411cc-32af-4ef8-8feb-a5e8fb4276f6
- **Tidspunkt:** 2026-03-24T09:40:55.477240+00:00
- **Varighet:** 101.58s
- **Input tokens:** 21465
- **Output tokens:** 5252

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
Risiko 1: Drenering har passert mer enn halvparten av forventet levetid, med risiko for fuktinntrengning og skader på bygningskonstruksjonen.
  Confidence: 0.92
  Evidens: Det er behov for utskifting av drenering, da mer enn halvparten av forventet levetid er overskredet.; Dersom dreneringen svikter, kan det føre til fuktinntrengning og skader på bygningskonstruksjonen.; Drenering er borettslagets ansvar og er ikke synlig for inspeksjon.

Risiko 2: Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid, med risiko for lekkasjer og skader på bygningskonstruksjoner.
  Confidence: 0.91
  Evidens: Tomteforhold – Utvendige vann- og avløpsledninger: Mer enn halvparten av forventet brukstid er passert.; Det anbefales å vurdere utskiftning av avløpsrør, da mer enn halvparten av forventet brukstid er passert.; Konsekvensen av å ikke utbedre kan være økt risiko for lekkasjer og skader på bygningskonstruksjoner.

Risiko 3: Høydeforskjell i etasjeskille (TG2) på mellom 15–30 mm gjennom hele rommet, noe som avviker fra standardens krav til godkjente måleavvik.
  Confidence: 0.88
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp.; Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.

Risiko 4: Bruksendring av bod til soverom er søknadspliktig og kan medføre reaksjoner fra kommunen, inkludert krav om tilbakeføring eller omsøking.
  Confidence: 0.93
  Evidens: En bod i 1. etasje er gjort om til soverom. Bruksendring fra tilleggsdel til hoveddel søknadspliktig.; Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv.; Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.

Risiko 5: Borettslaget hadde underskudd i regnskapsåret 2024, noe som kan indikere svak økonomi og risiko for økte felleskostnader.
  Confidence: 0.82
  Evidens: I henhold til protokoll fra årsmøtet i 2025 ble borettslagets underskudd for regnskapsåret 2024 dekket av...; Innkrevde felleskostnader 2024: 7 249 072 mot budsjettert 7 404 000 – inntektene var lavere enn budsjettert.; Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse.

Risiko 6: Høy fellesgjeld per andel (kr 264 272) og store pantelån i borettslaget øker den reelle kjøpesummen og medfører løpende rentekostnader som kan påvirke felleskostnadene.
  Confidence: 0.85
  Evidens: Andel fellesgjeld: 264 272 pr. 14.01.2026; Pris inkl. fellesgjeld: 5 464 272; Pantelån 27 479 037 (fra balansen); Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse.

Risiko 7: Borettslaget har ingen IN-ordning (individuell nedbetaling av fellesgjeld), noe som begrenser kjøpers mulighet til å redusere sin andel av fellesgjelden.
  Confidence: 0.87
  Evidens: Borettslaget har ikke individuell nedbetaling av fellesgjeld (IN-ordning).

Risiko 8: Rekkverk er 0,88 m høyt, noe som er under dagens krav på 1,0 m, og kan utgjøre en sikkerhetsrisiko.
  Confidence: 0.8
  Evidens: Returgelender er 0,88 m høyt og avstanden mellom spilene er 11 cm.; Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot dagens regelverk. Etter dagens regelverk vil disse kunne få avvik og/eller TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.

Risiko 9: Det er ikke foretatt radonmålinger av bygget, og det er ikke installert radonsperre, noe som kan innebære helserisiko.
  Confidence: 0.72
  Evidens: Det er ikke foretatt radonmålinger og bygget er ikke bygget med radonsperre.; Radonmåling ble utført i 2023 som en del av et felles initiativ i borettslaget. Måleverdiene lå under tiltaksgrensen, så ingen tiltak var nødvendige.

Risiko 10: Bom i fliser inne i garderobeskapet i entré kan indikere underliggende fukt- eller konstruksjonsproblemer.
  Confidence: 0.7
  Evidens: Bom i fliser inne i garderobeskapet i entrè. Ingen løse fliser.; Det er påvist andre avvik.

Risiko 11: Energikarakter F (dårligste klasse) indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.
  Confidence: 0.85
  Evidens: Energikarakter: F; Energifarge: Lys grønn

Risiko 12: Eiendommen ligger i et område med registrerte faresoner for kvikkleire og steinsprang i kommuneplanen, noe som kan utgjøre en geoteknisk risiko.
  Confidence: 0.75
  Evidens: H310_1 - Kvikkleire; H310_2 - Steinsprang; H320_1 - Stormflo; H320_2 - Elveflom

Risiko 13: Tinglyste obligasjoner og pantedokumenter på eiendommen (totalt over 70 mill. kr i pantstillelse) kan komplisere gjennomføring av handel dersom pantefrafall ikke oppnås.
  Confidence: 0.8
  Evidens: 1986/18143-1/105: OBLIGASJON, Beløp: NOK 15 728 400, Panthaver: OSLO BOLIG OG SPARELAG AL; 2011/153622-1/200: OBLIGASJON, Beløp: NOK 15 776 300; 2016/1049856-1/200: PANTEDOKUMENT, Beløp: NOK 10 000 000; Pantstillelse: Totalt 71 504 700; Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Risiko 14: Forkjøpsrett og styregodkjenning ved kjøp kan forsinke eller hindre gjennomføring av handelen.
  Confidence: 0.78
  Evidens: Det er forkjøpsrett og styregodkjenning ved kjøp av boligen.; Kjøper må godkjennes av forretningsfører og borettslagets styre.; Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.

Risiko 15: Tilstandsrapporten er begrenset i omfang og gir ingen garanti for skjulte feil – vegger åpnes ikke, og skjulte konstruksjoner undersøkes ikke.
  Confidence: 0.88
  Evidens: Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.

Risiko 16: Korttidsutleie er begrenset til 30 døgn per år uten styrets samtykke, noe som begrenser kjøpers mulighet til utleie.
  Confidence: 0.82
  Evidens: Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.; Det er ikke tillatt å leie ut deler av boligen til andre uten styregodkjenning, jf. borettslagsloven § 5-4.

Dokumentkontekst:
[d066_d066 | Side [1]]
ført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom

---

[d066_d066 | Side [1]]
analysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert,

---

[d066_d066 | Side [1]]
les tekniske
installasjoner. Disse bygningsdelene er i rapporten ikke
琀椀lstandsvurdert, men kun beskrevet.
Takstmannen tar forbehold om at opplysninger gi琀琀 av
hjemmelshaver, eier eller kjentmann er korrekte. I 琀椀llegg
inneholder 琀椀lstandsrapporten opplysninger gi琀琀 av
hjemmelshaver.
Kunden/rekvirenten skal lese gjennom 琀椀lstandsrapporten før
TG0: Ingen avvik
bruk og gi 琀椀lbakemelding 琀椀l takstmannen hvis det 昀椀nnes
TG1: Mindre eller moderate avvik feil/mangler som bør re琀琀es opp.
TG2: Avvik som kan kreve

---

[d066_d066 | Side [1]]
reng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger

---

[d066_d066 | Side [1]]
v byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l

---

[d066_d066 | Side [1]]
t mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og

---

[d066_d066 | Side [1]]
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver

---

[d066_d066 | Side [1]]
t bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN

---

[d066_d066 | Side [1]]
lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens

---

[d066_d066 | Side [1]]
alet måles og oppgis i 琀椀lstandsrapporten. Når arealet
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske

---

[d066_d066 | Side [1]]
lig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK

---

[d066_d066 | Side [1]]
ens
forskri昀琀er.
Det er ikke foreta琀琀 radonmålinger og bygget er ikke bygget
Innvendig > Over昀氀ater Gå til side med radonsperre.
Returgelender er 0,88 m høyt og avstanden mellom spilene er
Det er påvist andre avvik:
11 cm.
Bom i 昀氀iser inne i garderobeskapet i entrè. Ingen løse
昀氀iser.
Generell bruksslitasje.
Innvendig > Etasjeskille i tre i 2.etg Gå til side
Det er målt høydeforskjell på mellom 15-30 mm
gjennom hele rommet. Tilstandsgrad 2 gis med
bakgrunn i standardens krav 琀椀l godkjente

---

[d066_d066 | Side [1]]
 avvik feil/mangler som bør re琀琀es opp.
TG2: Avvik som kan kreve 琀椀ltak Det er ikke 昀氀y琀琀et på gjenstander under befaring og det er ikke
TG3: Store eller alvorlige avvik kontrollert for skjulte feil og mangler eller u琀昀ørt inngrep i
konstruksjonene.
TG IU: Konstruksjoner som ikke er undersøkt
Takstmannen har ikke innhentet dokumentasjon fra o昀昀entlige
myndigheter, 琀椀lsendt dokumentasjon er brukt i
琀椀lstandsvurderingen.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere

---

[d066_d066 | Side [1]]
 95, 1253 OSLO Vestre Aker Takst og Eiendom AS
Gnr 191 - Bnr 111 Finnhaugveien 34
0301 OSLO 0760 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved

---

[d066_d066 | Side [1]]
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige

---

[d066_d066 | Side [1]]
lt planhets-avvik i stue gjennom hele rommet. Resultat 18mm og i soverom er det 8 mm.
Vurdering av avvik:
• Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l godkjente måleavvik.
Konsekvens/琀椀ltak
• For å få 琀椀lstandsgrad 0 eller 1 må høydeforskjeller re琀琀es opp. Det vil imidler琀椀d sjelden være økonomisk rasjonelt som et enkeltstående 琀椀ltak i en bolig
som de琀琀e. Dersom boligen en gang skal renoveres, kan man vurdere slike 琀椀ltak.
For

---

[d066_d066 | Side [1]]
tid er overskredet. Dersom
2 gis med bakgrunn i standardens krav til godkjente dreneringen svikter, kan det føre til fuktinntrengning og
måleavvik. For å få tilstandsgrad 0 eller 1 må skader på bygningskonstruksjonen.
høydeforskjeller rettes opp. Det vil imidlertid sjelden være
økonomisk rasjonelt som et enkeltstående tiltak i en bolig ‑ Tomteforhold ‑ Utvendige vann‑ og avløpsledninger |
som dette. Dersom boligen en gang skal renoveres, kan Mer enn halvparten av forventet brukstid er passert på
man

---

[d066_d066 | Side [1]]
llegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra

---

[d066_d066 | Side [1]]
ngen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene.

---

[d066_d066 | Side [1]]
 mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller

---

[d066_d066 | Side [1]]
parkering
1986/ 18143‑1/ 105 19.03.1986 OBLIGASJON GJELDER DENNE REGISTERENHETEN MED FLERE
Beløp: NOK 15 728 400
Panthaver: OSLO BOLIG OG SPARELAG AL Selger bærer risikoen for at kjøper kan få tinglyst skjøte
LØPENR: 7279778 uten andre heftelser enn de som det er avtalt at følger
2011/ 153622‑1/ 200 24.02.2011 OBLIGASJON med i handelen. Gjennomføring av handelen er betinget
Beløp: NOK 15 776 300 av det ikke er tinglyst heftelser som ikke lar seg innfri/
47

## Side 48

OM EIENDOMMEN
slette. et felles

---

[d066_d066 | Side [1]]
il å gjøre seg kjent Beløp: NOK 30 000 000
med disse. Panthaver: OBOS‑BANKEN AS
ORG.NR: 911 986 884
Tinglyste heftelser
Eiendommens rettigheter:
Tinglyste heftelser og rettigheter: Følgende tinglyste
heftelser følger eiendommen ved salg, og ved inngivelse 1983/ 40107‑1/ 105 19.12.1983 BEST. OM ADKOMSTRETT
av bud vil disse være akseptert av budgiver/ kjøper: Rettighet hefter i: KNR: 0301 GNR: 191 BNR: 118
Bestemmelse om garasje/ parkering
1986/ 18143‑1/ 105 19.03.1986 OBLIGASJON GJELDER DENNE

---

[d066_d066 | Side [1]]
et med beplantning, plen, områder for lek og opphold. Asfalterte interne
veier og parkeringsarealer. Eiendommen ligger i rela琀椀vt skrånende terreng.
Tinglyste/andre forhold
Det er forkjøpsre琀琀 og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets vedtekter.
Særskilte begrensninger/klausuler: Se boligselskapets vedtekter.
Dyrehold: se vedtekter/husordensreglene 琀椀l Boligsameiet
Se grunnbokutskri昀琀 for 琀椀nglyste

---

[d066_d066 | Side [1]]
 over tinglyste lån når det gjelder følge av andre andelshaveres mislighold, eller dersom
betaling av felleskostnader, og kan kreve inn pengene før borettslaget sitter på fraflyttede og/ eller usolgte andeler,
andre kreditorer, selv om de har lån registrert på andelen. må dekkes av de øvrige andelseierne.
Borettslaget har legalpanterett i andelen for krav på
Vei, vann og avløp
dekning av felleskostnader og andre krav fra
Eiendommen er tilknyttet offentlig vann‑ og borettslaget, på inntil 2 ganger

---

[d066_d066 | Side [1]]
 krav om radonmåling med mindre boligen er
kunne gjennomføres at kreditorene gir nødvendig helt eller delvis utleid.
pantefrafall. Dersom pantefrafall ikke oppnås vil handel
ikke kunne gjennomføres. Skulle det bli tinglyst flere
Diverse
utleggspant på eiendommen, kan handel bare
gjennomføres forutsatt at også eventuelle fremtidige Borettslagsmodellen innebærer at borettslaget eier
kreditorer aksepterer å slette sitt pant uten å få full eiendommen, mens andelseierne eier andeler i
innfrielse av det

---

[d066_d066 | Side [1]]
 eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven §

---

[d066_d066 | Side [1]]
r tilknyttet offentlig vann‑ og borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og Kjøper og selger er forpliktet til å undertegne standard
vedlikeholdsansvaret for disse påhviler borettslaget. kjøpekontrakt utarbeidet av Emera i forbindelse med
Adkomst til eiendommen skjer via offentlig til privat vei. eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hos eiendomsmegler før bud inngis.

---

[d066_d066 | Side [1]]
l eiendommen, mens andelseierne eier andeler i
innfrielse av det underliggende kravet. borettslaget, som gir borett til en bestemt bolig.
Andelseierne har ikke personlig ansvar for borettslagets
Legalpant: Borettslaget har legalpant på inntil 2G som fellesgjeld, men de må dekke borettslagets løpende
sikkerhet for betaling av felleskostnader. Dette betyr at utgifter. Manglende innbetaling av fellesutgiftene som
borettslaget har prioritet over tinglyste lån når det gjelder følge av andre andelshaveres

---

[d066_d066 | Side [1]]
arsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Radonmåling ble utført i 2023 som en del av et felles initiativ i borettslaget. Måleverdiene lå under tiltaksgrensen, så
Beskrivelse
ingen tiltak var nødvendige.
21.1 Radonmåling
År 2023
Verdi Stue 26 +/- 10 Bq/m³, Soverom 30 +/- 10 Bq/m³
22 Kjenner

---

[d066_d066 | Side [1]]
tvidet i 2022 av fagfolk. Arbeidet er søkt om, godkjent av Plan- og bygningsetaten, og det foreligger
Beskrivelse
ferdigattest.
Arbeid utført av Viken Byggruppen AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken

---

[d066_d066 | Side [1]]
gelse av
lek og opphold, hvor det er regler for å unngå sjenanse overtredelsesgebyr og pålegg mv. Uavhengig av
og skade på grøntanlegg, samt båndtvang for hunder og reaksjonsform fra kommunen, overtar kjøper ansvar,
katter. Oppgitt tomteareal er hentet fra risiko og eventuelle konsekvenser knyttet til dette.
eiendomsregisteret og kan avvike fra nøyaktig oppmålt Dersom tiltaket avviker fra hva som er søkt om kan
areal. kommunen kreve at dagens forskrifter og lovverk legges
til grunn ved omsøking, disse

---

[d066_d066 | Side [1]]
kap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
Initialer selger: IKV, WFM 3
71006220
:ecnerefer
tnemucoD
57

## Side 58

26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har

---

[d066_d066 | Side [1]]
erommene. I tillegg medfølger en utvendig, Type takst avholdt av takstmann: Tilstandsrapport
uisolert bod på ca. 4 m² med innlagt lys og strøm. Boden
er bygget i sammenheng med naboens. Sammendrag selgers egenerklæring: Selger har i
forbindelse med salget fylt ut egenerklæringsskjema
For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet som vedlagt salgsoppgaven. I skjemaet fremkommer
Byggemåte i salgsoppgaven. følgende informasjon:
39

## Side 40

OM EIENDOMMEN
ved flere anledninger uten at det er

---

[d066_d066 | Side [1]]
, bnr. 111, ideell andel 1/ 1
undersøkelser av tomten når den er snøfri, for å avdekke i Oslo kommune.Andelsnr. 44 i Nordre Åsgården
eventuelle avvik eller behov for tiltak. Borettslag med orgnr. 948253534
Opplistingen over er ikke uttømmende og du oppfordres
Selger
til å lese og sette deg grundig inn i alt salgsmateriell.
Walid Fayez Mustapha og Ingrid Kleppenes Verne
For ordens skyld nevner vi at TGIU står for tilstandsgrad
Borettslag
ikke undersøkt, f.eks. fordi en del av bygget ikke har

---

[d066_d066 | Side [1]]
elvei). Dette følger av 1987/ 53865‑1/ 105 21.08.1987 ERKLÆRING/ AVTALE
reguleringsplan S‑2557, vedtatt 31.07.1981. Planen er Bestemmelse om anlegg og vedlikehold av ledninger
senere endret, blant annet ved endringsplan V270999 m.v.
(vedtatt 27.09.1999) som gir bestemmelser for tilbygg, og Kan ikke slettes uten samtykke fra kommunen
endringsplan V250681N2 (vedtatt 25.06.1981) som GJELDER DENNE REGISTERENHETEN MED FLERE
gjelder samferdselsarealer.
1987/ 53866‑1/ 105 21.08.1987 BEST. OM VANN/
Eiendommen

---

[d066_d066 | Side [1]]
 lar seg innfri/
47

## Side 48

OM EIENDOMMEN
slette. et felles initiativ i borettslaget. Måleverdiene lå under
tiltaksgrensen, så ingen tiltak var nødvendige.
Dersom eiendommen skulle bli overbeheftet i Radonmåling År 2023 Verdi Stue 26 +/ ‑ 10 Bq/ m³,
salgsprosessen, det vil si at summen av fremtidige Soverom 30 +/ ‑ 10 Bq/ m³.
tinglyste heftelser overstiger den forventede
salgssummen, er det en forutsetning for at handel skal Det er ikke krav om radonmåling med mindre boligen er
kunne gjennomføres at

---

[d066_d066 | Side [1]]
3
Verdi Stue 26 +/- 10 Bq/m³, Soverom 30 +/- 10 Bq/m³
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i

---

[d066_d066 | Side [1]]
tter montering av inventar og utstyr som ikke er en del
Himling: Malte plater i 2. etasje (2021), med en takhøyde av overdragelsen.
fra 2,0 til 2,60 meter. Malt himling med downlights på bad
(2021). Malt betong i øvrige rom i 1. etasje, med en
Eiendommens
takhøyde på 2,39 meter i soverom.
tilstand
Lagring:
Boligen har godt med lagringsplass. Det er Takstmann: Øivin Brækkan
garderobeskap i entréen, samt skyvedørsgarderober på
to av soverommene. I tillegg medfølger en utvendig, Type takst avholdt av

---

[d066_d066 | Side [1]]
dd eller dri昀琀sstans, noe som kan medføre plutselige og kostbare utbedringer.
De琀琀e er bore琀琀slagets vedlikeholdsansvar.
Andre tomteforhold
Pent opparbeidet tomt på begge sider av rekkehuset, med beplantning, busker, uteplasser og steinbelagt område rundt ute-boden.
FORHOLD SOM ÅPENBART KAN MEDFØRE FARE FOR HELSE, MILJØ OG SIKKERHET
Helse, miljø og sikkerhet
De琀琀e punktet inneholder tydelige og le琀琀 synlige forhold ved boligen som åpenbart kan påvirke helse, miljø og sikkerhet, og som bygningssakkyndige

---

[d066_d066 | Side [1]]
mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: IKV, WFM 4
71006220
:ecnerefer
tnemucoD
58

## Side 59

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere

---

[d066_d066 | Side [1]]
gifter faktureres borettslaget
og er dekket gjennom de månedlige felleskostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
5 473 768 (Totalpris inkl. omkostninger (uten
Fellesgjeld
Boligkjøperforsikring))
5 483 068 (Totalpris inkl. omkostninger (med Kr 264 272 pr. 14.01.2026
Boligkjøperforsikring))
Lånebetingelser fellesgjeld: Selskapets totale lån og
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ vilkår:
Bank: OBOS Boligkreditt AS
Lånenummer: 98207524719
Type: Annuitetslån, 12

---

[d066_d066 | Side [1]]
Kjøper må godkjennes av
forretningsfører. Borettslaget består av leiligheter og borettslagets styre. Styret kan kun nekte godkjenning
rekkehus, og har som formål å gi andelseierne bruksrett dersom det foreligger saklig grunnlag, jf. borettslagsloven
til egen bolig. § 4‑4.
Borettslaget har ikke individuell nedbetaling av fellesgjeld Regnskap/ budsjett/ kostnadsøkninger: I henhold til
(IN‑ordning). protokoll fra årsmøtet i 2025 ble borettslagets
underskudd for regnskapsåret 2024 dekket av
Styret har de siste

---

[d066_d066 | Side [1]]
lagslovens § 3-2 andre ledd,
3. salg eller kjøp av fast eiendom, eller av andelsbolig i borettslaget
4. å ta opp lån som skal sikres med pant med prioritet foran innskuddene,
5. andre rettslige disposisjoner over fast eiendom som går ut over vanlig
forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med seg
økonomisk ansvar eller utlegg for borettslaget på mer enn fem prosent av de årlige
felleskostnadene.
8-4 Representasjon og fullmakt
Styrets leder og ett styremedlem

---

[d066_d066 | Side [1]]
 å utføre nødvendig skader plutselig oppstå på eldre anlegg. Det anbefales å
utvendig vedlikehold for å forlenge dørens levetid og vurdere utskiftning av avløpsrør, da mer enn halvparten
redusere risikoen for ytterligere forringelse av karm og av forventet brukstid er passert. Konsekvensen av å ikke
treverk. Utvendig vedlikehold er borettslaget/ sameiet sitt utbedre kan være økt risiko for lekkasjer og skader på
ansvar. bygningskonstruksjoner. Det er borettslagets
vedlikeholdsansvar med felles soilrør i

---

[d066_d066 | Side [1]]
met 琀椀lhører boenheten, med mindre
de琀琀e er angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som

---

[d066_d066 | Side [1]]
de 150

NORDRE ÅSGÅRDEN BORETTSLAG
ORG.NR. 948 253 534, KUNDENR. 502
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 7 249 072 8 628 259 7 404 000 7 870 789
Andre inntekter 3 256 627 130 744 80 000 460 000
SUM DRIFTSINNTEKTER 7 505 699 8 759 003 7 484 000 8 330 789
DRIFTSKOSTNADER:
Personalkostnader 4 -56 400 -42 300 -42 000 -42 000
Styrehonorar 5 -400 000 -300 000 -300 000 -300 000
Revisjonshonorar 6 -10 625 -10 625 -10 000 -10

---

[d066_d066 | Side [1]]
 for vedlikehold og utskifting av sitt gjerde.
5-2 Borettslagets vedlikeholdsplikt
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt
plikten ikke ligger på andelseierne.
(2) Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom boligen,
skal borettslaget holde ved like. Borettslaget har rett til å føre nye slike installasjoner
gjennom boligen dersom det ikke er til vesentlig ulempe for andelseieren.
(3) Borettslagets vedlikeholdsplikt omfatter

---

[d066_d066 | Side [1]]
M BORETTSINNSKUDD -15 776 300
Vedlegg 2 23 av 29 502 Årsregnskap 2024.pdf
157

## Side 158

NOTE: 20
ANNEN LANGSIKTIG GJELD
Avsetning bomiljøtiltak -24 933
SUM ANNEN LANGSIKTIG GJELD -24 933
NOTE: 21
SKYLDIGE OFFENTLIGE AVGIFTER
Forskuddstrekk -10 000
Skyldig arbeidsgiveravgift -3 527
SUM SKYLDIGE OFFENTLIGE AVGIFTER -13 527
NOTE: 22
PANTSTILLELSE
Av anleggets bokførte gjeld er følgende sikret ved pant:
Borettsinnskudd 15 776 300
Pantelån 27 479 037
TOTALT 43 255 337
Eiendommen som er stillet som sikkerhet

---

[d066_d066 | Side [1]]
)(cid:26)(cid:23)(cid:30)(cid:26)(cid:5)
(cid:22)(cid:41)(cid:5)(cid:41)(cid:22)(cid:4)(cid:31)(cid:26)(cid:30)(cid:37)(cid:30)(cid:36)(cid:26)(cid:31)(cid:26)(cid:36)(cid:2)
12 av 29
(cid:5)
146

## Side 147


Til generalforsamlingen i Nordre Åsgården Borettslag

Konklusjon
Vi har revidert årsregnskapet for Nordre Åsgården Borettslag som består av balanse per 31.
desember 2024, resultatregnskap og oppstilling over endring av disponible midler for regnskapsåret
avsluttet per

---

[d066_d066 | Side [1]]
(1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget kan endre
felleskostnadene med en måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til en hver tid
gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
6-3 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har borettslaget en
lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er begrenset

---

[d066_d066 | Side [1]]
SIKTIG GJELD
Leverandørgjeld 428 826 331 727
Skyldige offentlige avgifter 21 13 527 0
Påløpte renter 8 694 139 332
Påløpte avdrag 0 32 300
Annen kortsiktig gjeld 0 6 646
SUM KORTSIKTIG GJELD 451 047 510 005
SUM EGENKAPITAL OG GJELD 55 637 720 56 993 559
Pantstillelse 22 71 504 700 71 504 700
Garantiansvar 0 0
Oslo, 17.03.2025
Styret i Nordre Åsgården Borettslag
Tore Beitveit Knut Gustav Hole Anne Mette Undlien
Hans Henrik Hvoslef
Vedlegg 2 18 av 29 502 Årsregnskap 2024.pdf
152

## Side 153

NOTE:

---

[d066_d066 | Side [1]]
1045 OBOS Verne Ingrid Kleppenes,
BORETTSLAG Eiendomsforvaltning AS Mustapha Walid Fayez
- org.nr 934261585
Innskudd, pålydende mm
Andelsnummer Opprinnelig innskudd Andel fellesformue Andel fellesgjeld
44 193 300 13 792 31.12.2024 264 272 03.02.2026
Kommentar
Felleskostnader er per idag kr 7754,- per måned
Oppdragsnr.: 21155-1644 Befaringsdato: 27.01.2026 Side: 28 av 32
91

## Side 92

Lusetjernveien 95, 1253 OSLO Vestre Aker Takst og Eiendom AS
Gnr 191 - Bnr 111 Finnhaugveien 34
0301 OSLO 0760

---

[d066_d066 | Side [1]]
tter en nøkkel fastsatt ved
stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres etter
borettslagslovens § 5-19.
(2) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter nytten for den
enkelte bolig eller etter forbruk.
(3) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om overlating
av bruk betales av den andelseier som har søkt, se pkt. 4-2 (6).
6-2 Betaling av felleskostnader
(1) Felleskostnadene forfaller til betaling den 1. i hver måned.

---

[d066_d066 | Side [1]]
dere behov for utski昀琀ing av drenering, da mer enn halvparten av forventet leve琀椀d er overskredet.
Dersom dreneringen svikter, kan det føre 琀椀l fuk琀椀nntrengning og skader på bygningskonstruksjonen.
Grunnmur og fundamenter
Ukjent sålefundament under betongvegger. Huset har ringmur i betong og gulv på grunn, ingen nedfylt underetasje.
grunnmur
Terrengforhold
Opparbeidede ute-arealer felles for boligsameiet. Vedlikehold er sameiets ansvar.
Beplantning, busker, trær, asfalterte innvendige veier og gressplener

---

[d066_d066 | Side [1]]
t 琀椀lsier at det er drensrør av plast og utvendig fuktsikret
med vorteplast.
Det er vik琀椀g å merke seg at det er kun ved å grave opp rundt
grunnmurer at dreneringens plassering og funksjon kan bekre昀琀es.
Drenering er bore琀琀slagets ansvar og er ikke synlig for inspeksjon.
Ukjent sålefundament under betongvegger. Huset har ringmur i
betong og gulv på grunn, ingen nedfylt underetasje.
Opparbeidede ute-arealer felles for boligsameiet. Vedlikehold er
sameiets ansvar.
Beplantning, busker, trær, asfalterte

---

[d066_d066 | Side [1]]
øper
5 200 000,00 (Prisantydning) Rentenivå på borettslagets lån kan også påvirke
264 272 (Andel av fellesgjeld) felleskostnadenes størrelse.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
5 464 272 (Pris inkl. fellesgjeld)
Eiendomsskatt
Omkostninger I Oslo kommune er det eiendomsskatt på boliger og fast
eiendom som overstiger en fastsatt verdi. Informasjonen
9 300 (Boligkjøperforsikring* (valgfritt)) over er hentet fra eiendomsskattelistene.
8 406 (Forhåndsvarsling forkjøpsrett) http:/ /

---

[d066_d066 | Side [1]]
estår i hovedsak av
rekkehus og leiligheter, og nabolaget har et godt
naboskap hvor man trives og blir boende lenge.
Sikringsordning
Borettslaget har en avtale med OBOS Factoring om Her er logistikken for en aktiv familie enkel. Med flere
garantert betaling av felleskostnader. OBOS Factoring skoler som Lusetjern, Rosenholm og Holmlia
garanterer for overførsel til borettslaget hver måned og ungdomsskole innen kort gangavstand, er skoleveien
overtar deretter alt ansvar og risiko for eventuell både kort og

---

[d066_d066 | Side [1]]
viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres

---

[d066_d066 | Side [1]]
vertakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen

---

[d066_d066 | Side [1]]
 Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en

---

[d066_d066 | Side [1]]
er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å

---

[d066_d066 | Side [1]]
l å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter

---

[d066_d066 | Side [1]]
t deler av boligen til
grunnlag
andre uten styregodkjenning, jf. borettslagsloven § 5‑4.
Korttidsutleie er tillatt i opptil 30 døgn per år uten
Overtakelse
samtykke fra styret.
Tidspunkt for overtakelse avtales mellom kjøper og
selger.
Radonmåling
I følge selger ble radonmåling utført i 2023 som en del av
48

## Side 49

OM EIENDOMMEN
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter

---

[d066_d066 | Side [1]]
er, henvises det til borettslagets
vedtekter og husordensregler. Alle eiendommer som selges eller leies ut, skal ha
energiattest. Unntak gjelder blant annet for frittstående
Forretningsfører: Obos Eiendomsforvaltning AS bygninger med bruksareal mindre enn 50 m². Det er eier
som plikter å fremlegge energiattest og er selv ansvarlig
Borettslagets forsikringsselskap: Tryg Forsikring for at opplysningene er korrekte.
Selger har fylt ut fullstendig energiattest, som er lagt ved
Polisenummer fellesforsikring:

---

[d066_d066 | Side [1]]
/
185

## Side 186

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

---

[d066_d066 | Side [1]]
 Kleppenes Verne Walid Fayez Mustapha
Gateadresse
Lusetjernveien 95
Poststed Postnr
OSLO 1253
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2018
Hvor lenge har du eid boligen?
Antall år 7
Antall måneder 10
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Gjensidige
Polise/avtalenr. 88042147
Spørsmål for alle typer

---

[d066_d066 | Side [1]]
eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side

---

[d066_d066 | Side [1]]
er i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende

---

[d066_d066 | Side [1]]
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

[d066_d066 | Side [1]]
ktefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er

---

[d066_d066 | Side [1]]
ann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er gjeldende:
S-3387 Vedta琀琀: 24.11.1993, Formål: Skole m.琀椀lh.anlegg
S-2534 Vedta琀琀: 28.04.1981, Formål: Annet veiareal, Måle- og avstandslinje
V250681N2 Vedta琀琀: 25.06.1981, Formål: Annet veiareal, Bolig m.琀椀lh. anlegg, O昀昀entlig

---

[d066_d066 | Side [1]]
ot friområdet i vest.
Antall biloppstillingsplasser fastsettes i forbindelse med bebyggelsesplanen, kfr. vedtekt i bygningslovens
paragraf 69 for Oslo kommune.
Bygningsrådet kan forby anlegg som ved lukt, røyk eller støy vil virke sjenerende for de tilgrensede
boligområder, samt lagerbedrifter og særlig trafikkskapende virksomheter.
§ 5. Tomt for offentlige bygninger
a) Barnehager/barnepark. Bebyggelsen kan oppføres i inntil 2 etasjer (inkl. underetasje). For støyutsatt
barnehage må det i forbindelse med

---

[d066_d066 | Side [1]]
arealer.
1987/ 53866‑1/ 105 21.08.1987 BEST. OM VANN/
Eiendommen omfattes av Kommuneplan 2015, vedtatt KLOAKKLEDN.
23.09.2015. Her er arealbruken avsatt til bebyggelse og RETTIGHETSHAVER: KNR: 0301 GNR: 191 BNR: 117
anlegg (eksisterende). Gjeldende reguleringsplan har Kan ikke slettes uten samtykke fra kommunen
forrang foran kommuneplanen ved eventuell motstrid.
2016/ 1049856‑1/ 200 14.11.2016 PANTEDOKUMENT
Området er stadig under endring/ utvikling, bygg settes Beløp: NOK 10 000 000
opp, rehabiliteres og

---

[d066_d066 | Side [1]]
.
PlottID/Best.nr: 151671/86524965
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
112

## Side 113

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg

---

[d066_d066 | Side [1]]
ØPENR: 7279778
kWh. Det er viktig å merke seg at energiforbruket kan Opprinnelig tinglyst som forhøyelse av OBLIGASJON
variere fra husstand til husstand. 18143/ 1986
1986/ 43057‑2/ 105 16.07.1986 BESTEMMELSE OM VEG
Regulerings og arealplaner
Bestemmelse om anlegg og vedlikehold av ledninger
Eiendommen er regulert til byggeområde for boliger (felt m.v.
D og F), friområde (park) og samferdselsanlegg (annet
veiareal og gang/ sykkelvei). Dette følger av 1987/ 53865‑1/ 105 21.08.1987 ERKLÆRING/

---

[d066_d066 | Side [1]]
 sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 - Elveflom
H390 - Deponi
113

## Side 114

S-2557
ReguleringsplanmedreguleringsbestemmelserfordelavGnr.191Bnr.1m.昀氀. -NordreÅs
ØstiHolmlia.Boliger,Offentligebygninger,industri/kontor,forretning,landbruksområder,friom-
rådertra昀椀kkområderm.m
Vedtaksdato: 31.07.1981
Vedtattav: Miljøverndepartementet
Vedtaksdokumenter: 198101677
Lovverk: BL1965
Høydereferanse: Oslolokal
Merknader:

---

[d066_d066 | Side [1]]
k,
slik at døgnekvivalent støynivå ikke overskrider 55 dB(A) ved husfasade.
c) For boligbebyggelsen skal det avsettes 1,4 biloppstillingsplasser pr. bolig, hvorav 1,2 plasser skal
opparbeides. Garasjeanlegg og biloppstillingsplasser i henhold til dette skal vises i bebyggelsesplanen.
§ 4. Byggeområde for industri/kontor.
Bebyggelsen kan oppføres i inntil 2 normaletasjer a 3 m (inkl. underetasje) og tillates lagt i reguleringsgrensen
mot friområdet i vest.
Antall biloppstillingsplasser fastsettes i

---

[d066_d066 | Side [1]]
es areal (parkering)
§ 3. Byggeområde for boliger felt A - F.
a) Innenfor de angitte grenser for bebyggelse kan det bygges 350-400 boliger med utnyttelsesgrad U 0,40 -
0,45. Minst 50% av boligene skal bestå av rekkehus/småhusbebyggelse i inntil 3 etasjer (inkl.
underetasje). De øvrige boligene kan være inntil 4 etasjer inkl. underetasje.
b) For støyutsatte boliger må det i forbindelse med bebyggelsesplanen gjøres rede for støyreduksjonstiltak,
slik at døgnekvivalent støynivå ikke overskrider 55 dB(A) ved

---

[d066_d066 | Side [1]]
ang, WC og bad slått sammen til ett
Tomtetype: Eiet stort bad.
‑ En bod i 1. etasje er gjort om til soverom. Bruksendring
Borettslagets eide tomt er på 28978 m² og er pent fra tilleggsdel til hoveddel søknadspliktig. Fra kommunen
opparbeidet med beplantning, busker, plen og kan det komme reaksjoner overfor ny eier, ved f.eks. krav
steinbelagte områder. Fellesarealene tilbyr områder for om tilbakeføring eller krav om omsøking, ileggelse av
lek og opphold, hvor det er regler for å unngå sjenanse

---

[d066_d066 | Side [1]]
et en plan for utbygging av leiligheter og
verandaer, som krever søknad til styret.
Energimerke
Det er generelt nattero mellom kl. 23:00 og 06:00. Energikarakter: F
Anskaffelse av hund og katt må meldes til styret, og det
må signeres en egen erklæring for dyrehold. Alle Energifarge: Lys grønn
fasadeendringer, inkludert montering av parabolantenner,
krever styrets godkjenning. For en fullstendig oversikt
Info energiklasse
over gjeldende regler, henvises det til borettslagets
vedtekter og husordensregler.

---

[d066_d066 | Side [1]]
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 -

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Drenering har passert mer enn halvparten av forventet levetid, med risiko for fuktinntrengning og skader på bygningskonstruksjonen.",
      "evidence": [
        "Det er behov for utskifting av drenering, da mer enn halvparten av forventet levetid er overskredet.",
        "Dersom dreneringen svikter, kan det føre til fuktinntrengning og skader på bygningskonstruksjonen.",
        "Drenering er borettslagets ansvar og er ikke synlig for inspeksjon.",
        "Det er viktig å merke seg at det er kun ved å grave opp rundt grunnmurer at dreneringens plassering og funksjon kan bekreftes."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R2",
      "description": "Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid, med risiko for lekkasjer og skader på bygningskonstruksjoner.",
      "evidence": [
        "Tomteforhold – Utvendige vann- og avløpsledninger: Mer enn halvparten av forventet brukstid er passert.",
        "Det anbefales å vurdere utskiftning av avløpsrør, da mer enn halvparten av forventet brukstid er passert.",
        "Konsekvensen av å ikke utbedre kan være økt risiko for lekkasjer og skader på bygningskonstruksjoner.",
        "skader plutselig oppstå på eldre anlegg. Det anbefales å vurdere utskiftning av avløpsrør, da mer enn halvparten av forventet brukstid er passert."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R3",
      "description": "Høydeforskjell i etasjeskille (TG2) på mellom 15–30 mm gjennom hele rommet, noe som avviker fra standardens krav til godkjente måleavvik.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp.",
        "Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
        "Målt planhetsavvik i stue gjennom hele rommet. Resultat 18mm og i soverom er det 8 mm."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Bruksendring av bod til soverom er søknadspliktig og kan medføre reaksjoner fra kommunen, inkludert krav om tilbakeføring eller omsøking.",
      "evidence": [
        "En bod i 1. etasje er gjort om til soverom. Bruksendring fra tilleggsdel til hoveddel søknadspliktig.",
        "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv.",
        "Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.",
        "Dersom tiltaket avviker fra hva som er søkt om kan kommunen kreve at dagens forskrifter og lovverk legges til grunn ved omsøking."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Borettslaget hadde underskudd i regnskapsåret 2024, noe som kan indikere svak økonomi og risiko for økte felleskostnader.",
      "evidence": [
        "I henhold til protokoll fra årsmøtet i 2025 ble borettslagets underskudd for regnskapsåret 2024 dekket av...",
        "Innkrevde felleskostnader 2024: 7 249 072 mot budsjettert 7 404 000 – inntektene var lavere enn budsjettert.",
        "Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R6",
      "description": "Høy fellesgjeld per andel (kr 264 272) og store pantelån i borettslaget øker den reelle kjøpesummen og medfører løpende rentekostnader som kan påvirke felleskostnadene.",
      "evidence": [
        "Andel fellesgjeld: 264 272 pr. 14.01.2026",
        "Pris inkl. fellesgjeld: 5 464 272",
        "Pantelån 27 479 037 (fra balansen)",
        "Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse.",
        "Felleskostnader er per idag kr 7754,- per måned"
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R7",
      "description": "Borettslaget har ingen IN-ordning (individuell nedbetaling av fellesgjeld), noe som begrenser kjøpers mulighet til å redusere sin andel av fellesgjelden.",
      "evidence": [
        "Borettslaget har ikke individuell nedbetaling av fellesgjeld (IN-ordning)."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R8",
      "description": "Rekkverk er 0,88 m høyt, noe som er under dagens krav på 1,0 m, og kan utgjøre en sikkerhetsrisiko.",
      "evidence": [
        "Returgelender er 0,88 m høyt og avstanden mellom spilene er 11 cm.",
        "Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot dagens regelverk. Etter dagens regelverk vil disse kunne få avvik og/eller TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Tilstandsrapporten angir at det ikke er foretatt radonmålinger og at bygget ikke har radonsperre – men selgers egenerklæring dokumenterer at radonmåling ble utført i 2023 med verdier under tiltaksgrensen. Risikoen er derfor lavere enn først antatt, men motstridende informasjon i dokumentene er i seg selv en risiko.",
      "evidence": [
        "Det er ikke foretatt radonmålinger og bygget er ikke bygget med radonsperre. (tilstandsrapport)",
        "Radonmåling ble utført i 2023 som en del av et felles initiativ i borettslaget. Måleverdiene lå under tiltaksgrensen, så ingen tiltak var nødvendige. (egenerklæring)",
        "Verdi Stue 26 +/- 10 Bq/m³, Soverom 30 +/- 10 Bq/m³",
        "Det er ikke krav om radonmåling med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.45
    },
    {
      "risk_id": "R10",
      "description": "Bom i fliser inne i garderobeskapet i entré kan indikere underliggende fukt- eller konstruksjonsproblemer.",
      "evidence": [
        "Bom i fliser inne i garderobeskapet i entrè. Ingen løse fliser.",
        "Det er påvist andre avvik."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R11",
      "description": "Energikarakter F (dårligste klasse) indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: F",
        "Energifarge: Lys grønn",
        "Det er viktig å merke seg at energiforbruket kan variere fra husstand til husstand."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Eiendommen ligger i et område med registrerte faresoner for kvikkleire og steinsprang i kommuneplanen, noe som kan utgjøre en geoteknisk risiko.",
      "evidence": [
        "H310_1 - Kvikkleire",
        "H310_2 - Steinsprang",
        "H320_1 - Stormflo",
        "H320_2 - Elveflom",
        "H390 - Deponi"
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R13",
      "description": "Tinglyste obligasjoner og pantedokumenter på eiendommen (totalt over 70 mill. kr i pantstillelse) kan komplisere gjennomføring av handel dersom pantefrafall ikke oppnås.",
      "evidence": [
        "1986/18143-1/105: OBLIGASJON, Beløp: NOK 15 728 400, Panthaver: OSLO BOLIG OG SPARELAG AL",
        "2011/153622-1/200: OBLIGASJON, Beløp: NOK 15 776 300",
        "2016/1049856-1/200: PANTEDOKUMENT, Beløp: NOK 10 000 000",
        "Pantstillelse: Totalt 71 504 700",
        "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
        "Borettsinnskudd 15 776 300, Pantelån 27 479 037, TOTALT 43 255 337"
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Forkjøpsrett og styregodkjenning ved kjøp kan forsinke eller hindre gjennomføring av handelen.",
      "evidence": [
        "Det er forkjøpsrett og styregodkjenning ved kjøp av boligen.",
        "Kjøper må godkjennes av forretningsfører og borettslagets styre.",
        "Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.",
        "8 406 (Forhåndsvarsling forkjøpsrett)"
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R15",
      "description": "Tilstandsrapporten er begrenset i omfang og gir ingen garanti for skjulte feil – vegger åpnes ikke, og skjulte konstruksjoner undersøkes ikke.",
      "evidence": [
        "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.",
        "Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R16",
      "description": "Korttidsutleie er begrenset til 30 døgn per år uten styrets samtykke, noe som begrenser kjøpers mulighet til utleie.",
      "evidence": [
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.",
        "Det er ikke tillatt å leie ut deler av boligen til andre uten styregodkjenning, jf. borettslagsloven § 5-4."
      ],
      "source_documents": [
        "d066_d066"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "Hva dekket borettslagets underskudd i 2024, og hva var årsaken til underskuddet?",
    "Hvilke konkrete tiltak er planlagt eller vedtatt for drenering og vann/avløp i borettslaget?",
    "Er det vedtatt økning av felleskostnader i borettslaget for 2025 eller fremover?",
    "Hva er energikarakteren F basert på, og er det gjort tiltak for å forbedre energieffektiviteten?",
    "Er det gjennomført geotekniske undersøkelser knyttet til kvikkleire eller steinsprang på eiendommen?",
    "Hva er borettslagets vedlikeholdsplan og fremtidige investeringer?",
    "Er det registrert fuktskader eller andre TG3-avvik i tilstandsrapporten?"
  ],
  "reasoning": "\nGjennomgangen av de 16 identifiserte risikoene mot dokumentevidensen gir følgende funn:\n\n**Risikoer med god evidensstøtte (beholdes med justert confidence):**\n- R1 (Drenering): Godt dokumentert i tilstandsrapporten. Confidence opprettholdes på 0.92.\n- R2 (Vann/avløp): Godt dokumentert. Confidence opprettholdes på 0.91.\n- R3 (Etasjeskille): Direkte måleresultater bekrefter avviket. Confidence opprettholdes på 0.88.\n- R4 (Bruksendring bod→soverom): Svært godt dokumentert med juridiske konsekvenser. Confidence økes til 0.95 da dokumentene er svært eksplisitte.\n- R6 (Fellesgjeld): Tallene er bekreftet i flere dokumenter. Confidence justeres opp til 0.87.\n- R7 (Ingen IN-ordning): Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.87.\n- R13 (Tinglyste heftelser): Godt dokumentert med konkrete beløp. Confidence justeres til 0.82 da pantstillelsen på 71,5 mill. er borettslagets samlede pant, ikke bare denne andelen.\n- R15 (Begrenset tilstandsrapport): Svært godt dokumentert. Confidence økes til 0.92.\n\n**Risikoer med moderat evidensstøtte:**\n- R5 (Underskudd 2024): Evidensen bekrefter underskudd, men årsaken og størrelsen er ikke fullt dokumentert i de tilgjengelige chunkene. Confidence justeres ned til 0.78 da vi mangler detaljer om hva underskuddet ble dekket av.\n- R8 (Rekkverk): Bekreftet med mål, men det presiseres at det ikke nødvendigvis er krav om utbedring. Confidence opprettholdes på 0.80.\n- R11 (Energikarakter F): Bekreftet, men \"Lys grønn\" energifarge er inkonsistent med karakter F (F skal normalt ha rød/oransje farge). Dette er en intern inkonsistens i dokumentet som bør undersøkes nærmere. Confidence justeres ned til 0.80.\n- R14 (Forkjøpsrett/styregodkjenning): Bekreftet, men dette er standardvilkår i borettslag og representerer begrenset reell risiko. Confidence opprettholdes på 0.78.\n- R16 (Korttidsutleie): Bekreftet, men dette er lovpålagt begrensning i borettslag generelt. Confidence opprettholdes på 0.82.\n\n**Risikoer med svak eller motstridende evidens (justeres ned):**\n- R9 (Radon): Tilstandsrapporten sier ingen radonmåling er gjort, men egenerklæringen dokumenterer måling i 2023 med verdier godt under tiltaksgrensen (26 og 30 Bq/m³ mot tiltaksgrense på 100 Bq/m³). Risikoen er reelt sett lav, men den motstridende informasjonen mellom tilstandsrapport og egenerklæring er i seg selv en risiko. Confidence justeres kraftig ned til 0.45.\n- R10 (Bom i fliser): Svak evidens – \"bom i fliser\" uten løse fliser er et begrenset avvik. Confidence justeres ned til 0.55.\n- R12 (Faresoner): Faresoner er registrert i kommuneplanen, men det er ingen informasjon om faktisk geoteknisk risiko for denne spesifikke eiendommen. Confidence justeres ned til 0.70.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Borettslaget har en sikringsordning med OBOS Factoring for garantert betaling av felleskostnader – dette er positivt, men betyr at andre andelseiere kan misligholde og at kostnadene fordeles på øvrige.\n2. Energikarakter F kombinert med lys grønn energifarge er inkonsistent og bør undersøkes nærmere.\n3. Borettslagets vedlikeholdsplan og fremtidige investeringer er ikke tilstrekkelig belyst i de tilgjengelige dokumentene.\n4. Deponi (H390) er registrert i kommuneplanen – dette kan innebære miljørisiko som ikke er vurdert.\n"
}

## Raw Response
```json
{
  "id": "msg_01Xp8hh7qssXNYdZUpHBAx73",
  "container": null,
  "content": [
    {
      "id": "toolu_01XgpGz85XTy1hZr9tjWEGht",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Drenering har passert mer enn halvparten av forventet levetid, med risiko for fuktinntrengning og skader på bygningskonstruksjonen.",
            "evidence": [
              "Det er behov for utskifting av drenering, da mer enn halvparten av forventet levetid er overskredet.",
              "Dersom dreneringen svikter, kan det føre til fuktinntrengning og skader på bygningskonstruksjonen.",
              "Drenering er borettslagets ansvar og er ikke synlig for inspeksjon.",
              "Det er viktig å merke seg at det er kun ved å grave opp rundt grunnmurer at dreneringens plassering og funksjon kan bekreftes."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R2",
            "description": "Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid, med risiko for lekkasjer og skader på bygningskonstruksjoner.",
            "evidence": [
              "Tomteforhold – Utvendige vann- og avløpsledninger: Mer enn halvparten av forventet brukstid er passert.",
              "Det anbefales å vurdere utskiftning av avløpsrør, da mer enn halvparten av forventet brukstid er passert.",
              "Konsekvensen av å ikke utbedre kan være økt risiko for lekkasjer og skader på bygningskonstruksjoner.",
              "skader plutselig oppstå på eldre anlegg. Det anbefales å vurdere utskiftning av avløpsrør, da mer enn halvparten av forventet brukstid er passert."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R3",
            "description": "Høydeforskjell i etasjeskille (TG2) på mellom 15–30 mm gjennom hele rommet, noe som avviker fra standardens krav til godkjente måleavvik.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp.",
              "Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
              "Målt planhetsavvik i stue gjennom hele rommet. Resultat 18mm og i soverom er det 8 mm."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Bruksendring av bod til soverom er søknadspliktig og kan medføre reaksjoner fra kommunen, inkludert krav om tilbakeføring eller omsøking.",
            "evidence": [
              "En bod i 1. etasje er gjort om til soverom. Bruksendring fra tilleggsdel til hoveddel søknadspliktig.",
              "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv.",
              "Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.",
              "Dersom tiltaket avviker fra hva som er søkt om kan kommunen kreve at dagens forskrifter og lovverk legges til grunn ved omsøking."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Borettslaget hadde underskudd i regnskapsåret 2024, noe som kan indikere svak økonomi og risiko for økte felleskostnader.",
            "evidence": [
              "I henhold til protokoll fra årsmøtet i 2025 ble borettslagets underskudd for regnskapsåret 2024 dekket av...",
              "Innkrevde felleskostnader 2024: 7 249 072 mot budsjettert 7 404 000 – inntektene var lavere enn budsjettert.",
              "Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R6",
            "description": "Høy fellesgjeld per andel (kr 264 272) og store pantelån i borettslaget øker den reelle kjøpesummen og medfører løpende rentekostnader som kan påvirke felleskostnadene.",
            "evidence": [
              "Andel fellesgjeld: 264 272 pr. 14.01.2026",
              "Pris inkl. fellesgjeld: 5 464 272",
              "Pantelån 27 479 037 (fra balansen)",
              "Rentenivå på borettslagets lån kan også påvirke felleskostnadenes størrelse.",
              "Felleskostnader er per idag kr 7754,- per måned"
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R7",
            "description": "Borettslaget har ingen IN-ordning (individuell nedbetaling av fellesgjeld), noe som begrenser kjøpers mulighet til å redusere sin andel av fellesgjelden.",
            "evidence": [
              "Borettslaget har ikke individuell nedbetaling av fellesgjeld (IN-ordning)."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R8",
            "description": "Rekkverk er 0,88 m høyt, noe som er under dagens krav på 1,0 m, og kan utgjøre en sikkerhetsrisiko.",
            "evidence": [
              "Returgelender er 0,88 m høyt og avstanden mellom spilene er 11 cm.",
              "Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot dagens regelverk. Etter dagens regelverk vil disse kunne få avvik og/eller TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Tilstandsrapporten angir at det ikke er foretatt radonmålinger og at bygget ikke har radonsperre – men selgers egenerklæring dokumenterer at radonmåling ble utført i 2023 med verdier under tiltaksgrensen. Risikoen er derfor lavere enn først antatt, men motstridende informasjon i dokumentene er i seg selv en risiko.",
            "evidence": [
              "Det er ikke foretatt radonmålinger og bygget er ikke bygget med radonsperre. (tilstandsrapport)",
              "Radonmåling ble utført i 2023 som en del av et felles initiativ i borettslaget. Måleverdiene lå under tiltaksgrensen, så ingen tiltak var nødvendige. (egenerklæring)",
              "Verdi Stue 26 +/- 10 Bq/m³, Soverom 30 +/- 10 Bq/m³",
              "Det er ikke krav om radonmåling med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.45
          },
          {
            "risk_id": "R10",
            "description": "Bom i fliser inne i garderobeskapet i entré kan indikere underliggende fukt- eller konstruksjonsproblemer.",
            "evidence": [
              "Bom i fliser inne i garderobeskapet i entrè. Ingen løse fliser.",
              "Det er påvist andre avvik."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R11",
            "description": "Energikarakter F (dårligste klasse) indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: F",
              "Energifarge: Lys grønn",
              "Det er viktig å merke seg at energiforbruket kan variere fra husstand til husstand."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Eiendommen ligger i et område med registrerte faresoner for kvikkleire og steinsprang i kommuneplanen, noe som kan utgjøre en geoteknisk risiko.",
            "evidence": [
              "H310_1 - Kvikkleire",
              "H310_2 - Steinsprang",
              "H320_1 - Stormflo",
              "H320_2 - Elveflom",
              "H390 - Deponi"
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R13",
            "description": "Tinglyste obligasjoner og pantedokumenter på eiendommen (totalt over 70 mill. kr i pantstillelse) kan komplisere gjennomføring av handel dersom pantefrafall ikke oppnås.",
            "evidence": [
              "1986/18143-1/105: OBLIGASJON, Beløp: NOK 15 728 400, Panthaver: OSLO BOLIG OG SPARELAG AL",
              "2011/153622-1/200: OBLIGASJON, Beløp: NOK 15 776 300",
              "2016/1049856-1/200: PANTEDOKUMENT, Beløp: NOK 10 000 000",
              "Pantstillelse: Totalt 71 504 700",
              "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
              "Borettsinnskudd 15 776 300, Pantelån 27 479 037, TOTALT 43 255 337"
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Forkjøpsrett og styregodkjenning ved kjøp kan forsinke eller hindre gjennomføring av handelen.",
            "evidence": [
              "Det er forkjøpsrett og styregodkjenning ved kjøp av boligen.",
              "Kjøper må godkjennes av forretningsfører og borettslagets styre.",
              "Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.",
              "8 406 (Forhåndsvarsling forkjøpsrett)"
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R15",
            "description": "Tilstandsrapporten er begrenset i omfang og gir ingen garanti for skjulte feil – vegger åpnes ikke, og skjulte konstruksjoner undersøkes ikke.",
            "evidence": [
              "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.",
              "Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R16",
            "description": "Korttidsutleie er begrenset til 30 døgn per år uten styrets samtykke, noe som begrenser kjøpers mulighet til utleie.",
            "evidence": [
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.",
              "Det er ikke tillatt å leie ut deler av boligen til andre uten styregodkjenning, jf. borettslagsloven § 5-4."
            ],
            "source_documents": [
              "d066_d066"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "Hva dekket borettslagets underskudd i 2024, og hva var årsaken til underskuddet?",
          "Hvilke konkrete tiltak er planlagt eller vedtatt for drenering og vann/avløp i borettslaget?",
          "Er det vedtatt økning av felleskostnader i borettslaget for 2025 eller fremover?",
          "Hva er energikarakteren F basert på, og er det gjort tiltak for å forbedre energieffektiviteten?",
          "Er det gjennomført geotekniske undersøkelser knyttet til kvikkleire eller steinsprang på eiendommen?",
          "Hva er borettslagets vedlikeholdsplan og fremtidige investeringer?",
          "Er det registrert fuktskader eller andre TG3-avvik i tilstandsrapporten?"
        ],
        "reasoning": "\nGjennomgangen av de 16 identifiserte risikoene mot dokumentevidensen gir følgende funn:\n\n**Risikoer med god evidensstøtte (beholdes med justert confidence):**\n- R1 (Drenering): Godt dokumentert i tilstandsrapporten. Confidence opprettholdes på 0.92.\n- R2 (Vann/avløp): Godt dokumentert. Confidence opprettholdes på 0.91.\n- R3 (Etasjeskille): Direkte måleresultater bekrefter avviket. Confidence opprettholdes på 0.88.\n- R4 (Bruksendring bod→soverom): Svært godt dokumentert med juridiske konsekvenser. Confidence økes til 0.95 da dokumentene er svært eksplisitte.\n- R6 (Fellesgjeld): Tallene er bekreftet i flere dokumenter. Confidence justeres opp til 0.87.\n- R7 (Ingen IN-ordning): Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.87.\n- R13 (Tinglyste heftelser): Godt dokumentert med konkrete beløp. Confidence justeres til 0.82 da pantstillelsen på 71,5 mill. er borettslagets samlede pant, ikke bare denne andelen.\n- R15 (Begrenset tilstandsrapport): Svært godt dokumentert. Confidence økes til 0.92.\n\n**Risikoer med moderat evidensstøtte:**\n- R5 (Underskudd 2024): Evidensen bekrefter underskudd, men årsaken og størrelsen er ikke fullt dokumentert i de tilgjengelige chunkene. Confidence justeres ned til 0.78 da vi mangler detaljer om hva underskuddet ble dekket av.\n- R8 (Rekkverk): Bekreftet med mål, men det presiseres at det ikke nødvendigvis er krav om utbedring. Confidence opprettholdes på 0.80.\n- R11 (Energikarakter F): Bekreftet, men \"Lys grønn\" energifarge er inkonsistent med karakter F (F skal normalt ha rød/oransje farge). Dette er en intern inkonsistens i dokumentet som bør undersøkes nærmere. Confidence justeres ned til 0.80.\n- R14 (Forkjøpsrett/styregodkjenning): Bekreftet, men dette er standardvilkår i borettslag og representerer begrenset reell risiko. Confidence opprettholdes på 0.78.\n- R16 (Korttidsutleie): Bekreftet, men dette er lovpålagt begrensning i borettslag generelt. Confidence opprettholdes på 0.82.\n\n**Risikoer med svak eller motstridende evidens (justeres ned):**\n- R9 (Radon): Tilstandsrapporten sier ingen radonmåling er gjort, men egenerklæringen dokumenterer måling i 2023 med verdier godt under tiltaksgrensen (26 og 30 Bq/m³ mot tiltaksgrense på 100 Bq/m³). Risikoen er reelt sett lav, men den motstridende informasjonen mellom tilstandsrapport og egenerklæring er i seg selv en risiko. Confidence justeres kraftig ned til 0.45.\n- R10 (Bom i fliser): Svak evidens – \"bom i fliser\" uten løse fliser er et begrenset avvik. Confidence justeres ned til 0.55.\n- R12 (Faresoner): Faresoner er registrert i kommuneplanen, men det er ingen informasjon om faktisk geoteknisk risiko for denne spesifikke eiendommen. Confidence justeres ned til 0.70.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Borettslaget har en sikringsordning med OBOS Factoring for garantert betaling av felleskostnader – dette er positivt, men betyr at andre andelseiere kan misligholde og at kostnadene fordeles på øvrige.\n2. Energikarakter F kombinert med lys grønn energifarge er inkonsistent og bør undersøkes nærmere.\n3. Borettslagets vedlikeholdsplan og fremtidige investeringer er ikke tilstrekkelig belyst i de tilgjengelige dokumentene.\n4. Deponi (H390) er registrert i kommuneplanen – dette kan innebære miljørisiko som ikke er vurdert.\n"
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
    "input_tokens": 21465,
    "output_tokens": 5252,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
