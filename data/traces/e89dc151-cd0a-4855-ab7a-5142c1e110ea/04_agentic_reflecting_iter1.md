# Trace: agentic_reflecting_iter1
- **Run ID:** e89dc151-cd0a-4855-ab7a-5142c1e110ea
- **Tidspunkt:** 2026-03-24T19:14:59.527959+00:00
- **Varighet:** 115.78s
- **Input tokens:** 23291
- **Output tokens:** 6855

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
Risiko 1: TG3 – Store/alvorlige avvik på etasjeskille/gulv mot grunn: Målt høydeforskjell på over 20 mm innenfor 2 meter og over 30 mm gjennom hele rommet. Årsaken er sannsynligvis setninger over tid i et gammelt bygg (1898). Utbedring krever oppretting av høydeforskjeller.
  Confidence: 0.97
  Evidens: Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.; Målt høydeforskjell på over 30 mm gjennom hele rommet. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.; Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.; Innvendig > Etasjeskille/gulv mot grunn – STORE ELLER ALVORLIGE AVVIK

Risiko 2: TG2 – Vinduer med risiko for punktering og dårlig isolasjon: Eldre isolerglass løper større risiko for punktering. Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene. Vinduer er ofte borettslagets ansvarsområde, og styret er i ferd med å innhente anbud på utskiftning.
  Confidence: 0.93
  Evidens: Eldre isolerglass løper en større risiko for punktering.; Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene.; Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK; To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag.

Risiko 3: TG2 – Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som er et avvik etter NS 3600:2018.
  Confidence: 0.95
  Evidens: Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.; For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.; Boligbygg med flere boenheter – AVVIK SOM KAN KREVE TILTAK

Risiko 4: TG2 – Pipe og ildsted: Sprekk i flis foran ovnen. Tiltak er å bytte flis.
  Confidence: 0.92
  Evidens: Innvendig – Pipe og ildsted | Sprekk i flis foran ovnen. Tiltak er å bytte flis.; Innvendig > Pipe og ildsted – AVVIK SOM KAN KREVE TILTAK

Risiko 5: TG2 – Innvendige dører med slitasje: Enkelte innvendige dører har en del slitasje, og døren inn fra gangen subber i karm/terskel. Konsekvens er slitemerker.
  Confidence: 0.88
  Evidens: Innvendig – Innvendige dører | Enkelte av innvendige dører har en del slitasje. Døren inn fra gangen subber i karm/terskel. Det bør forsøkes å justere dør. Konsekvens av subbing er slitemerker.; Innvendig > Innvendige dører – AVVIK SOM KAN KREVE TILTAK

Risiko 6: TG2 – Vannledninger og avløpsrør: Rørkursene og avløpsrørene er registrert med avvik som kan kreve tiltak. Eldre rør i et bygg fra 1898 innebærer risiko for lekkasje og kapasitetsproblemer.
  Confidence: 0.88
  Evidens: Tekniske installasjoner – Vannledninger | Rørkursene på ...; Tekniske installasjoner > Vannledninger – AVVIK SOM KAN KREVE TILTAK; Tekniske installasjoner > Avløpsrør – AVVIK SOM KAN KREVE TILTAK

Risiko 7: TG2 – Andre utvendige forhold med avvik: Det er registrert avvik på andre utvendige forhold som kan kreve tiltak, inkludert vedlikeholdsetterslep og arbeid med reparasjon av deler av fasaden.
  Confidence: 0.87
  Evidens: Utvendig > Andre utvendige forhold – AVVIK SOM KAN KREVE TILTAK; Arbeidene med reparasjon av deler av fasaden; Vedlikeholdsetterslep

Risiko 8: Fukt i kjeller: Borettslaget har kjente fuktutfordringer i kjeller. Mulige utbedringstiltak er under vurdering, men ingen konkret løsning er vedtatt. Dette kan medføre fremtidige kostnader for borettslaget og økte felleskostnader.
  Confidence: 0.93
  Evidens: Fukt i kjeller – Orientering fra styret om fuktutfordringer i kjeller, mulige utbedringstiltak og en ...; Orientering om økonomisk situasjon, budsjett for 2025, vedlikeholdsetterslep, fukt i kjeller og feil på calling/Unloc.

Risiko 9: Manglende radonmåling og ingen radonsperre: Det er ikke utført radonmåling på eiendommen, og bygget er heller ikke utført med radonsperre. Radon er en luktløs gass som i store konsentrasjoner kan være helsefarlig.
  Confidence: 0.95
  Evidens: Det er ikke utført radonmåling på eiendommen.; Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Radon er en luktløs gass som i store ...

Risiko 10: Manglende mekanisk avtrekk: Borettslaget/sameiet tillater ikke inngrep på kanalanlegget, slik at avviket i praksis ikke er mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima.
  Confidence: 0.91
  Evidens: borettslag/sameier tillater ikke inngrep på kanalanlegget, så i praksis er avviket ikke mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima.

Risiko 11: Verneklasse/kulturminnebegrensninger (gul liste og hensynssone H570): Eiendommen er registrert på byantikvarens gule liste og berøres av hensynssone H570 Bevaring kulturmiljø. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og krever rådgivende uttalelse fra Byantikvaren.
  Confidence: 0.94
  Evidens: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis. Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer.; Eiendommen berøres av hensynssone H570: Bevaring kulturmiljø.; Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen.

Risiko 12: Borettslaget mangler sikringsordning for felleskostnader: Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader. Dette innebærer at øvrige andelseiere må dekke eventuelle misligholdte felleskostnader fra andre andelshavere eller fraflyttede/usolgte andeler.
  Confidence: 0.92
  Evidens: Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader.; Boligselskap er ikke tilknyttet sikringsordning; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 13: Risiko for økte felleskostnader: Styret vurderer utskiftning av vinduer (anbud under utarbeidelse), det er vedlikeholdsetterslep, fukt i kjeller og fasadereparasjoner. Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.
  Confidence: 0.93
  Evidens: Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.; To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag.; Vedlikeholdsetterslep; Arbeidene med reparasjon av deler av fasaden; Fukt i kjeller – mulige utbedringstiltak

Risiko 14: Pantedokument/heftelse på eiendommen: Det er tinglyst et pantedokument på NOK 3 020 000 (2005/78627-1/105). Dersom eiendommen blir overbeheftet, kan handel ikke gjennomføres uten pantefrafall fra kreditorene.
  Confidence: 0.85
  Evidens: 2005/78627-1/105 17.11.2005 PANTEDOKUMENT Beløp: NOK 3 020 000; Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.

Risiko 15: Byggets høye alder (1898) og generell slitasje: Bygget er fra 1898, noe som innebærer økt risiko for skjulte feil, aldersrelatert slitasje og behov for løpende vedlikehold på konstruksjoner, rør, vinduer og andre bygningsdeler.
  Confidence: 0.95
  Evidens: Byggeåret er basert på opplysninger fra eiendomsmatrikkelen. 1898; Skjevheter i gulv. Bygningen er fra 1898.; Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 16: Eiendomsskatt viderefaktureres til andelseier: Eiendomsskatt faktureres borettslaget og viderefaktureres til den enkelte andelseier. Dette er en løpende kostnad som ikke inngår i felleskostnadene og kan øke over tid.
  Confidence: 0.82
  Evidens: Eiendomsskatt faktureres fra myndighetene til borettslaget. Dette inngår ikke i felleskostnadene og blir derfor viderefakturert eier.; Eiendomsskatt faktureres borettslaget og blir viderefakturert til den enkelte andelseier.

Risiko 17: Flytende rente på fellesgjeld: Borettslagets lån har flytende rente (4,47%), noe som innebærer at andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken. Renteøkninger vil direkte påvirke felleskostnadene.
  Confidence: 0.88
  Evidens: Type Rente: Flytende; Rente: 4,47%; Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken.

Risiko 18: Styregodkjennelse og forkjøpsrett: Kjøper skal godkjennes av styret i borettslaget, og forkjøpsrett er under prøving. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.
  Confidence: 0.87
  Evidens: Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget.; Forkjøpsrett: Forkjøpsrett er under prøving.

Risiko 19: Skjulte feil og mangler kan ikke utelukkes: Rapporten er utført med begrensninger da boligen var innredet på befaringstidspunktet. Tunge møbler ble ikke flyttet, og skader bak innredning kan ikke oppdages. Rapporten er ingen garanti mot skjulte feil.
  Confidence: 0.85
  Evidens: Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke ...; Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Dokumentkontekst:
[d074_d074 | Side [1]]
snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som

---

[d074_d074 | Side [1]]
 Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres

---

[d074_d074 | Side [1]]
rderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som

---

[d074_d074 | Side [1]]
iendomsmatrikkelen.
Vurdering av avvik:
Anvendelse
• Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l.
Bolig
for fellesdeler i bygget.
I denne sammenhengen skal det se琀琀es TG 2 når det ikke foreligger
Standard
teknisk rapport og også når det er behov for vedlikehold og utbedring av
Leiligheten har en standard med laminat, tregulv, malte 昀氀ater og
mindre skader.
昀氀iser. Se også beskrivelse under konstruksjoner.
Konsekvens/琀椀ltak
Vedlikehold
• For å lukke avviket iht. NS 3600.2018 må det

---

[d074_d074 | Side [1]]
Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse

---

[d074_d074 | Side [1]]
srapport
Fra gjeldende standard: "For boliger med fellesdel skal teknisk rapport
BOLIGBYGG MED FLERE BOENHETER
for fellesdelene e琀琀erspørres. Dersom det foreligger en rapport, så skal
den vurderes med hensyn på relevans og egnethet og vedlegges som
grunnlag for 琀椀lstandsanalysen. Rapportens alder skal framkomme."
Byggeår Kommentar
1898 Byggeåret er basert på opplysninger
"Mangel av rapport for fellesdeler registreres som et avvik."
fra eiendomsmatrikkelen.
Vurdering av avvik:
Anvendelse
• Det er ikke

---

[d074_d074 | Side [1]]
t
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra

---

[d074_d074 | Side [1]]
aanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
STORE ELLER ALVORLIGE AVVIK
Innvendig > Etasjeskille/gulv mot grunn Gå til side
AVVIK SOM KAN KREVE TILTAK
Utvendig > Vinduer Gå til side
Utvendig > Andre utvendige forhold Gå til side
Innvendig > Pipe og ildsted Gå til side
Innvendig > Innvendige dører Gå til side
Tekniske installasjoner > Vannledninger Gå til side
Tekniske installasjoner > Avløpsrør Gå til side
Anslag på

---

[d074_d074 | Side [1]]
elvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje,

---

[d074_d074 | Side [1]]
: 19.02.2026 Side: 3 av 19
62

## Side 63

Wilses gate 8 A, 0178 OSLO Øyum Takst og Eiendom AS
Gnr 208 - Bnr 824 Heggelibakken 4
0301 OSLO 0375 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller

---

[d074_d074 | Side [1]]
 Takst og Eiendom AS
Gnr 208 - Bnr 824 Heggelibakken 4
0301 OSLO 0375 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge

---

[d074_d074 | Side [1]]
 side
HELSE, MILJØ OG SIKKERHET
Det er u琀昀ørt en enkel vurdering av HMS (helse, miljø og sikkerhet) i
forhold i h.h.t. gjeldende regler. Sjekkpunkter er blant annet høyde
på balkongrekkverk, manglende rekkverk, radon, elektrisk anlegg,
brannvarsling med mer. Eventuelle avvik skal skrives inn i
rapporten, men uten TG (琀椀lstandsgrad). Ved avvik er disse listet
opp under de琀琀e avsni琀琀et i eget punkt. (Står det ingen琀椀ng er det
ikke avdekket avvik).
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l

---

[d074_d074 | Side [1]]
rader? Se side 4.
llatnA
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
1
0.8
0.6
0.4
0.2
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
Wilses gate 8 A, 0178 OSLO Øyum Takst og Eiendom AS
Gnr 208 - Bnr 824 Heggelibakken 4
0301 OSLO 0375 OSLO
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller

---

[d074_d074 | Side [1]]
itasje. Med alder kan te琀琀elister og isolasjon bli
rommet. Andre plasseringer av laser kan gi andre resultater.
gradvis dårligere og over 琀椀d forårsake trekk.
Konsekvens/琀椀ltak Vurdering av avvik:
• Tiltak: • Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter.
Tilstandsgrad 3 gis med bakgrunn i standardens krav 琀椀l godkjente
Det er vanskelig å si noe helt sikkert rundt 琀椀dspunkt for by琀琀e av vinduer. måleavvik.
Alder kan ha påvirket isolasjonen og vindte琀紀ngen rundt vinduene. Eldre • Målt

---

[d074_d074 | Side [1]]
åvirket isolasjonen og vindte琀紀ngen rundt vinduene. Eldre • Målt høydeforskjell på over 30 mm gjennom hele rommet.
isolerglass løper en større risiko for punktering. Tilstandsgrad 3 gis med bakgrunn i standardens krav 琀椀l godkjente
måleavvik.
Vinduer er o昀琀e bore琀琀slagets ansvarsområde uten at det er sjekket
Årsaken er sannsynligvis setninger over 琀椀d. De琀琀e er et gammelt bygg.
spesi昀椀kt i de琀琀e 琀椀lfellet.
Konsekvens/琀椀ltak
Dører • For å få 琀椀lstandsgrad 0 eller 1 må høydeforskjeller re琀琀es opp. Det

---

[d074_d074 | Side [1]]
ket avvik).
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Referansen er byggetegninger som ligger i kommunens
elektroniske byggesaksarkiv fra 1985 som omhandler
rehabilitering.
Oppdragsnr.: 13722-3281 Befaringsdato: 19.02.2026 Side: 6 av 19
65

## Side 66

10
8
6
4
2
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
llatnA
Fordeling av 琀椀lstandsgrader
TG0: Ingen

---

[d074_d074 | Side [1]]
æring med informasjon om
risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad, bruk av personopplysninger og dine rettigheter finner du her
utforede kjellervegger og eventuelt i oppforede kjellergulv. Personvernerklæring - iVerdi
•Normal slitasjegrad: forventet slitasje av materiale i overflaten Rapporten er utført med begrensninger som følger av at boligen
som er basert på enkle visuelle observasjoner. Kan vurderes er innredet på befaringen. Tunge møbler o.l. blir normalt ikke
sammen med

---

[d074_d074 | Side [1]]
 vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør

---

[d074_d074 | Side [1]]
s når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen

---

[d074_d074 | Side [1]]
 forhold | Det er ikke
‑ Nei utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l.
9. Er der synlig defekter på kabler eller er disse ikke for fellesdeler i bygget. For å lukke avviket må det
tilstrekkelig festet? utarbeides en slik rapport/ plan for fellesdeler.
‑ Nei
40

## Side 41

OM EIENDOMMEN
‑ Innvendig ‑ Pipe og ildsted | Sprekk i flis foran ovnen. borettslag/ sameier tillater ikke inngrep på kanalanlegget,
Tiltak er å bytte flis. så i praksis er avviket ikke mulig å rette. Manglende
mekanisk

---

[d074_d074 | Side [1]]
inglyst skjøte
VEKET FOR: PANTEDOKUMENT 2006/ 32051‑1 uten andre heftelser enn de som det er avtalt at følger
44

## Side 45

OM EIENDOMMEN
med i handelen. Gjennomføring av handelen er betinget
av det ikke er tinglyst heftelser som ikke lar seg innfri/ Området er vurdert med moderat til lav aktsomhetsgrad
slette. ifølge radonkart.
Dersom eiendommen skulle bli overbeheftet i For mer informasjon om radon, se www.dsa.no/ radon.
salgsprosessen, det vil si at summen av fremtidige
tinglyste heftelser overstiger

---

[d074_d074 | Side [1]]
n fås ved henvendelse til Rettighetshavere er KNR: 0301 GNR: 208 BNR: 159, 160,
megler. Vi oppfordrer interessenter til å gjøre seg kjent 211 (SNR 1‑37), 213, 215 (SNR 1‑4) og 825.
med disse. Bestemmelse om anlegg og vedlikehold av ledninger
m.v.
Kan ikke slettes uten samtykke fra kommunen
Tinglyste heftelser
Tinglyste heftelser og rettigheter: Følgende tinglyste 2005/ 78627‑1/ 105 17.11.2005 PANTEDOKUMENT
heftelser følger eiendommen ved salg, og ved inngivelse Beløp: NOK 3 020 000
av bud vil disse være

---

[d074_d074 | Side [1]]
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller

---

[d074_d074 | Side [1]]
 har lån registrert på andelen. borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
Kjøper og selger er forpliktet til å undertegne standard
Vei, vann og avløp
kjøpekontrakt utarbeidet av Emera i forbindelse med
Eiendommen er tilknyttet offentlig vann‑ og eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
avløpssystem. Stikkledningene fra eiendommen og ut til hos eiendomsmegler før bud inngis. Kontakt
det kommunale nettet er private, og eiendomsmegler for spørsmål.
vedlikeholdsansvaret for disse

---

[d074_d074 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om

---

[d074_d074 | Side [1]]
et på befaringen. Tunge møbler o.l. blir normalt ikke
sammen med bygningsdelens alder. flyttet på. Skader eller mangler som kan være skjult bak
innredning kan derfor ikke oppdages ved befaringen. Servitutter
og heftelser som hefter ved eiendommen er ikke vurdert, med
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
mindre det er angitt i rapporten. Der det i rapporten er foretatt
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
antagelser, er dette normalt fordi forholdet ikke

---

[d074_d074 | Side [1]]
sikret i: Gjensidige Polisenr: 85022784
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0202
Etasje: 2 Oppvarmingstype: Varmtvann og fyring
Heis: Nei
Parkeringstype: Gateparkering ()
Systemlås: Nei Antall rom: 3
Husdyrhold: Ja Oppr. antall rom: 3
Livsløp standard: Nei Kategori: Kategori 10
Ansiennitetsregler: 1 - Forkjøpsrett for beboere i borettslaget
Fasiliteter:
Eiendomsskatt faktureres fra myndighetene til borettslaget. Dette inngår ikke i felleskostnadene og blir derfor viderefakturert eier

---

[d074_d074 | Side [1]]
t av de
siste to årene, kan boligen leies ut i inntil tre år med Tidspunkt for overtakelse avtales mellom kjøper og
styrets samtykke, jf. burettslagslova §§ 5‑5 og 5‑6. selger.
Radonmåling Forsikring
Det er ikke utført radonmåling på eiendommen. Boligselgerforsikring: Selger har tegnet
45

## Side 46

OM EIENDOMMEN
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være

---

[d074_d074 | Side [1]]
gges til grunn med mindre annet er spesifisert i
To stuer i fil: salgsoppgaven.
Leiligheten har to stuer som er forbundet med en tofløyet
dør. Dette skaper en åpen og sosial sone med fleksible Gjenstander som er nevnt i standardlisten, men som ikke
møbleringsmuligheter. Begge rommene har tregulv. I den finnes på eiendommen, vil heller ikke følge med i salget.
37

## Side 38

OM EIENDOMMEN
Alt utstyr og installasjoner som medfølger overtas slik de underetasje/ kjeller?
er, uten garanti, med mindre det

---

[d074_d074 | Side [1]]
0 000,00 (Prisantydning) ‑ Trappevask: kr 180,‑
30 408 (Andel av fellesgjeld) ‑ Styretillegg: kr 50,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
6 530 408 (Pris inkl. fellesgjeld) Felleskostnadene kan bli besluttet økt etter utarbeidelse
av salgsoppgaven.
Omkostninger
Eiendomsskatt
9 300 (Boligkjøperforsikring* (valgfritt))
8 255 (Forhåndsvarsling forkjøpsrett) I Oslo kommune er det eiendomsskatt på boliger og fast
545 (Tinglysingsgebyr ‑ hjemmel) eiendom som overstiger en fastsatt verdi.

---

[d074_d074 | Side [1]]
et vil si at summen av fremtidige
tinglyste heftelser overstiger den forventede
Diverse
salgssummen, er det en forutsetning for at handel skal
kunne gjennomføres at kreditorene gir nødvendig Borettslagsmodellen innebærer at borettslaget eier
pantefrafall. Dersom pantefrafall ikke oppnås vil handel eiendommen, mens andelseierne eier andeler i
ikke kunne gjennomføres. Skulle det bli tinglyst flere borettslaget, som gir borett til en bestemt bolig.
utleggspant på eiendommen, kan handel bare Andelseierne har

---

[d074_d074 | Side [1]]
 avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Regulert 琀椀l boliger med 琀椀lhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste.
Ska琀琀etakst og formuesverdi
År Kommentar
2025 Fås ved henvendelse 琀椀l ligningskontoret
Oppdragsnr.: 13722-3281 Befaringsdato: 19.02.2026 Side: 16 av 19
75

## Side 76

Wilses gate 8 A, 0178 OSLO Øyum Takst og Eiendom AS
Gnr 208 - Bnr 824 Heggelibakken 4
0301 OSLO 0375 OSLO
Forsikring
Selskap Avtalenr Type

---

[d074_d074 | Side [1]]
kspedisjonsdokument
eksisterer, gir derimot ingen garanti for at bygget er
Det tas forbehold om endringer i prisene. For oppdatert oppført i samsvar med tillatelsen og gjeldende regelverk,
informasjon, se:oslo.kommune.no – beboerparkering eller at det senere er utført arbeid på bygget som ikke er
byggemeldt eller godkjent.
35

## Side 36

OM EIENDOMMEN
ALH ‑ Areal med lav himlingshøyde måles på samme
Dagens planløsning samstemmer med siste måte som BRA, men man ser bort fra krav til
byggegodkjente

---

[d074_d074 | Side [1]]
aflyttede og/ eller usolgte andeler,
Legalpant: Borettslaget har legalpant på inntil 2G som må dekkes av de øvrige andelseierne.
sikkerhet for betaling av felleskostnader. Dette betyr at
borettslaget har prioritet over tinglyste lån når det gjelder Borettslaget har legalpanterett i andelen for krav på
betaling av felleskostnader, og kan kreve inn pengene før dekning av felleskostnader og andre krav fra
andre kreditorer, selv om de har lån registrert på andelen. borettslaget, på inntil 2 ganger

---

[d074_d074 | Side [1]]
e ombygginger eller
Vedtekter/ husordensregler
restaureringer av eiendommen. Byantikvaren skal gi en
Eier forplikter seg til å gjøre seg kjent med vedtekter og rådgivende uttalelse i byggesaker som berører
eventuelle husordensregler. Kopi av disse ligger vedlagt i eiendommen.
salgsoppgaven.
For en fullstendig oversikt over eiendommens status, se:
http:/ / riksantikvaren.maps.arcgis.com/ apps/
Beboernes forpliktelser og
webappviewer/ index.html?
id=545b8e996b6e4e1fbcb65f69299a7167
dugnader
Det oppfordres

---

[d074_d074 | Side [1]]
ler lignende?
Nei Ja
Beskrivelse Skjevheter i gulv. Bygningen er fra 1898.
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av faglært
Beskrivelse Nye automatsikringer. Nytt el-anlegg til kjøkken og bad.

---

[d074_d074 | Side [1]]
hold er tillatt så fremt det ikke medfører
urimelig sjenanse for naboer.
Selger
Eirik Sårheim Det er båndtvang på borettslagets fellesarealer hele året.
Eier må sørge for at dyr ikke gjør fra seg på
Borettslag
fellesområdene, og eventuelle ekskrementer må fjernes
Kristparken Borettslag umiddelbart. Lekeplassen skal skjermes spesielt for dyr.
Organisasjonsnummer: 952364200 Forkjøpsrett: Forkjøpsrett er under prøving.
Andelsnummer: 3 Styregodkjennelse: Kjøper skal godkjennes av styret i
borettslaget. Dette

---

[d074_d074 | Side [1]]

arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører

---

[d074_d074 | Side [1]]
025. utbetales til selger.
• Orientering om økonomisk situasjon, budsjett for 2025,
vedlikeholdsetterslep, fukt i kjeller og feil på calling/ Regnskap/ budsjett/ kostnadsøkninger: Siste tilgjengelig
Unloc. årsregnskap viser at det i 2025 var budsjettert med et
42

## Side 43

OM EIENDOMMEN
overskudd på 358 813,‑. noe som betyr at eiendommen er ansett som
bevaringsverdig, enten helt eller delvis. Dette kan påvirke
mulighetene for fremtidige ombygginger eller
Vedtekter/ husordensregler
restaureringer av

---

[d074_d074 | Side [1]]
nneren sender ut ca. 420 000 laserpunkter i sekundet og lager en digital tvilling av boligen og gir dermed grunnlag for nøyak琀椀g
måling.
Skjevheter på plantegningen er reelle skjevheter.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Kommentar: Referansen er byggetegninger som ligger i kommunens elektroniske byggesaksarkiv fra 1985 som omhandler rehabilitering.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5

---

[d074_d074 | Side [1]]
efakturert til den enkelte andelseier.
Fellesgjeld
Kr 30 408 pr. 04.02.2026
Estimert totalpris ink. omk
Lånebetingelser fellesgjeld: Borettslaget har følgende lån
Kr 6 549 053 og vilkår:
Bank: Den Norske Stats Husbank
Felleskostnader
Lånenummer: 11500067 1
Felleskostnader kr 5 078,‑ pr. mnd Type: Annuitetslån, 2 terminer per år
Restsaldo pr. 04.02.2026: kr 443 203,‑
33

## Side 34

OM EIENDOMMEN
Andel av saldo: kr 0,‑
Sikringsordning
Antall terminer til innfrielse: 12
Type Rente: Flytende Borettslaget er

---

[d074_d074 | Side [1]]
nt for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag.
27 Kjenner

---

[d074_d074 | Side [1]]
dagens anlegg ikke nødvendigvis er dimensjonert for
oppgradering av kjøkken med nye elektriske apparater, Borettslaget har fellesarealer som inkluderer bakgård og
rehabilitering av bad m/ varmekabler eller installeringer sykkelskur. Barnevogner kan plasseres i
elbillader. «Fantasiverkstedet». Det finnes også fellesboder i
kjelleren for midlertidig lagring.
Øvrig
Det er ikke tillatt å grille på balkongene. Oppsett av
markiser, levegger, parabolantenner og lignende krever
informasjon
godkjennelse fra styret.

---

[d074_d074 | Side [1]]
6 Side 2 av 3
Kristparken Borettslag Vår ref.: 873/3 Fødselsdato eier: 17.11.1986
Wilses gate 8 A Type: Borettslag frittstående
0178 OSLO Eiere: Eirik Sårheim
Organisasjonsnr: 952 364 200
3: Fellesgjeld
( siste termin 30.06.2030 )
Det er ikke vedtatt avtale om individuell nedbetaling av fellesgjeld.
4: Særskilte opplysninger
Klausuler:
Styreleder: Victoria Halstensen
Adresse: Deichmans gate 27 B
Postnr/-sted: 0178 OSLO
Telefon: Mob.: 94083978
E-post: kristparken@gmail.com
6: Ligning - 2025
Gjeld: 30 408

---

[d074_d074 | Side [1]]
ettslag Org. nr. 952364200
Side 11 av 23
197

## Side 198

Noter årsregnskap 2024 Kristparken Borettslag
Note 8 - Andre kostnader
2024 2023
7718 Fellesarrangement 8 931 2 738
7719 Møter, div. styret 8 200 6 800
7720 Generalforsamling/Årsmøte 0 1 600
7770 Betalingskostnader 861 1 096
7773 Omkostninger innkreving 2 437 716
7792 Øredifferanse 1 -3
7795 Husleietap 0 278
Sum 20 430 13 227
873 Kristparken Borettslag Org. nr. 952364200
Side 12 av 23
198

## Side 199

Noter årsregnskap 2024 Kristparken

---

[d074_d074 | Side [1]]
lig.
utleggspant på eiendommen, kan handel bare Andelseierne har ikke personlig ansvar for borettslagets
gjennomføres forutsatt at også eventuelle fremtidige fellesgjeld, men de må dekke borettslagets løpende
kreditorer aksepterer å slette sitt pant uten å få full utgifter. Manglende innbetaling av fellesutgiftene som
innfrielse av det underliggende kravet. følge av andre andelshaveres mislighold, eller dersom
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
Legalpant: Borettslaget har

---

[d074_d074 | Side [1]]
terminer til innfrielse: 12
Type Rente: Flytende Borettslaget er ikke tilknyttet en sikringsordning som
Rente: 4,47% dekker manglende innbetaling av felleskostnader.
Innfrielsesdato: 01.10.2031
Andre kostnader:
Bank: Den Norske Stats Husbank
Lånenummer: 11499816 4 TV/ Internett/ Bredbånd: TV/ Bredbånd er inkludert i
Type: Annuitetslån, 2 terminer per år felleskostnadene med kr 319 per måned.
Restsaldo pr. 04.02.2026: kr 457 423,‑
Andel av saldo: kr 9 796,‑
Formue:
Antall terminer til innfrielse: 12
Type

---

[d074_d074 | Side [1]]
rtsiktig gjeld -200 171 -32 217
C. Disponible midler 1 485 669 1 442 645
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet.
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
873 Kristparken Borettslag Org. nr 952364200
Side 5 av 23
191

## Side 192

Resultatregnskap 2024 Kristparken Borettslag
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 2 741 376 2 693 217 2 912 710 2 783 810
Sum leieinntekt 2

---

[d074_d074 | Side [1]]
es gate 8 A Type: Borettslag frittstående
0178 OSLO Eiere: Eirik Sårheim
Organisasjonsnr: 952 364 200 Andelsnr: 3
1: Felleskostnader
Tot. innev. måned: 5 078
Boligselskap er ikke tilknyttet sikringsordning
Felleskostnader: TV/Bredbånd 319
Felleskostnader 4 529
Objekt: TRAPPEVASK, 873/3 ( 499 - 3 ) 180
STYRETILLEGG, 873/3 ( 497 - 3 ) 50
Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken.
Det sendes ikke ut spesielt varsel

---

[d074_d074 | Side [1]]
4 166 0 0
873 Kristparken Borettslag Org. nr 952364200
Side 6 av 23
192

## Side 193

Balanse 2024 Kristparken Borettslag
Note 2024 2023
EIENDELER
Anleggsmidler
Varige driftsmidler
Bygninger 3 23 585 243 23 585 243
Påkostninger 3 3 239 622 3 239 622
Andre driftsmidler 3 113 133 123 905
Sum anleggsmidler 26 937 998 26 948 770
Omløpsmidler
Fordringer
Restanse felleskostnader 14 324 0
Andre kortsiktige fordringer 21 946 118 957
Forskuddsbetalte kostnader 171 191 190 602
Bankinnskudd og kontanter
Innestående

---

[d074_d074 | Side [1]]

Anleggsmidler
Varige driftsmidler
Bygninger 3 23 585 243 23 585 243
Påkostninger 3 3 239 622 3 239 622
Andre driftsmidler 3 123 905 134 676
Sum anleggsmidler 26 948 770 26 959 541
Omløpsmidler
Fordringer
Restanse felleskostnader 0 29 078
Kundefordringer 0 1 434
Andre kortsiktige fordringer 118 957 824
Forskuddsbetalte kostnader 190 602 630 351
Bankinnskudd og kontanter
Innestående bank 1 165 301 1 043 964
Sum omløpsmidler 1 474 861 1 705 651
SUM EIENDELER 28 423 631 28 665 192
873 Kristparken Borettslag

---

[d074_d074 | Side [1]]
iske midlene som borettslaget har til rådighet.
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
873 Kristparken Borettslag Org. nr 952364200
Side 4 av 15
171

## Side 172

Resultatregnskap 2023 Kristparken Borettslag
Note Regnskap Regnskap Budsjett Budsjett
2023 2022 2023 2024
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 2 693 217 2 459 278 2 683 472 2 912 710
Sum leieinntekt 2 693 217 2 459 278 2 683 472 2 912 710
Annen inntekt
Sum inntekt 2 693 217 2 459 278 2 683 472 2 912

---

[d074_d074 | Side [1]]
er. Styret er i ferd med å utforme et anbudsgrunnlag.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: ES 3
47105220
:ecnerefer
tnemucoD
53

## Side 54

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med

---

[d074_d074 | Side [1]]
椀ltak
Vedlikehold
• For å lukke avviket iht. NS 3600.2018 må det utarbeides en
Boligen fremstår som normalt pen og med normal bruksslitasje. Se
Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da
punkter under konstruksjoner for eventuelle behov i forhold 琀椀l
de琀琀e er opp 琀椀l bore琀琀slag/sameie å rekvirere er kostnadses琀椀mat ikke
vedlikehold. Se hovedpunkter lenger bak i rapporten. Under er et
sa琀琀.
kortere sammendrag av hovedpunktene.
UTVENDIG INNVENDIG
Vinduer Over昀氀ater
2- lags

---

[d074_d074 | Side [1]]

• Budsjettet for 2025
Forslag til vedtak:
Orienteringen tas til etterettning.
Vedtak:
Orienteringen tatt til etterretning.
5.2 Orientering om vedlikeholdsetterslep og vedlikehold
• Vedlikeholdsetterslep
• Arbeidene med reparasjon av deler av fasaden
• Status på brannvern og brannvernanlegget
Forslag til vedtak:
Orienteringen tas til etterettning.
Vedtak:
Orienteringen tatt til etterretning.
5.3 Fukt i kjeller
Orientering fra styret om fuktutfordringer i kjeller, mulige utbedringstiltak og en
Protokoll fra

---

[d074_d074 | Side [1]]
 0 0 0 0 0
Årets avgang : 0 0 0 0 0 0
Anskaffelseskost pr.31.12: 3 239 622 23 585 243 80 685 40 342 47 976 46 425
Akkumulerte avskrivninger pr.31.12: 0 0 34 290 17 313 20 190 19 730
Akkumulerte nedskrivninger pr.31.12: 0 0 0 0 0 0
Bokført verdi pr.31.12: 3 239 622 23 585 243 46 395 23 029 27 786 26 695
Årets avskrivninger : 0 0 4 034 2 017 2 399 2 321
Anskaffelsesår : 2005 1984 2015 2015 2015 2015
Antatt levetid i år : 20 20 20 20
Borettslaget består av 48 andeler og 1 næring.
Eiendommer er oppført på g.nr

---

[d074_d074 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
6 539 753 (Totalpris inkl. omkostninger (uten Informasjon: Kommunale avgifter, med unntak av
Boligkjøperforsikring)) eiendomsskatt, faktureres borettslaget og er dekket
6 549 053 (Totalpris inkl. omkostninger (med gjennom de månedlige felleskostnadene.
Boligkjøperforsikring))
Eiendomsskatt faktureres borettslaget og blir
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ viderefakturert til den enkelte andelseier.
Fellesgjeld
Kr 30 408 pr.

---

[d074_d074 | Side [1]]
elsesår : 2005 1984 2015 2015 2015 2015
Antatt levetid i år : 20 20 20 20
Borettslaget består av 48 andeler og 1 næring.
Eiendommer er oppført på g.nr 208, b.nr 159, 160 og 824 i Oslo kommune.. Eiertomt på 1295 kvm.
Borettslagets eiendommer er forsikret i Gjensidige Forsikring. Polisenr. 85022784
873 Kristparken Borettslag Org. nr. 952364200
Side 10 av 23
196

## Side 197

Noter årsregnskap 2024 Kristparken Borettslag
Note 4 - Kostnad eiendom/ lokaler
2024 2023
6300 Leiekostnader lokaler 1 800 0
6361 Fast

---

[d074_d074 | Side [1]]
 består av 48 andeler og 1 næring.
Eiendommer er oppført på g.nr 208, b.nr 159, 160 og 824 i Oslo kommune.. Eiertomt på 1295 kvm.
Borettslagets eiendommer er forsikret i Gjensidige Forsikring. Polisenr. 85022784
873 Kristparken Borettslag Org. nr. 952364200
Side 9 av 15
176

## Side 177

Noter årsregnskap 2023 Kristparken Borettslag
Note 4 - Kostnad eiendom/ lokaler
2023 2022
6361 Fast renhold 89 736 84 735
6362 Skadedyrutryddelse 9 584 10 702
6391 Snømåking/strøing/feiing 0 899
6392 Containerleie/tømming

---

[d074_d074 | Side [1]]
t oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom

---

[d074_d074 | Side [1]]
er mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før

---

[d074_d074 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d074_d074 | Side [1]]
v takstmann: Tilstandsrapport Kjenner du til om det er/ har vært f.eks. sprekker i mur,
skjeve gulv eller lignende?
Sammendrag selgers egenerklæring: Selger har i Ja.
forbindelse med salget fylt ut egenerklæringsskjema Skjevheter i gulv. Bygningen er fra 1898.
som vedlagt salgsoppgaven. I skjemaet fremkommer
følgende informasjon: Kjenner du til om det er/ har vært utført arbeid på
el‑anlegget eller andre installasjoner (f.eks. oljetank,
Kjenner du til om det er utført arbeid på bad/ våtrom? sentralfyr,

---

[d074_d074 | Side [1]]
atkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr

---

[d074_d074 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d074_d074 | Side [1]]
er at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d074_d074 | Side [1]]
00
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
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om

---

[d074_d074 | Side [1]]
elibakken 4
0301 OSLO 0375 OSLO
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Gjensidige forsikring 85022784
Kommentar
Beboere må selv tegne innbo-/løsøreforsikring
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 19.02.2026 Gjennomgå琀琀 Nei
Eiendomsverdi.no 19.02.2026 Gjennomgå琀琀 Nei
Forretningsfører 19.02.2026 Gjennomgå琀琀 Nei
Tegninger 19.02.2026 Gjennomgå琀琀 Nei
Revisjoner
Versjon Ny versjon Kommentar
1 24.02.2026
2 24.02.2026
For gyldighet på

---

[d074_d074 | Side [1]]
antenner og lignende krever
informasjon
godkjennelse fra styret. Det skal være ro i borettslaget
mellom kl. 22:00 og 07:00 på hverdager, og mellom kl.
Adresse
23:00 og 08:00 natt til helg og fridager.
Wilses gate 8A, 0178 OSLO
Borettslagets forsikringsselskap: Gjensidige
Gnr. 208, bnr. 824, ideell andel 1/ 1
i Oslo kommune.Andelsnr. 3 i Kristparken Borettslag Polisenummer fellesforsikring: 85022784
med orgnr. 952364200
Husdyr: Dyrehold er tillatt så fremt det ikke medfører
urimelig sjenanse for

---

[d074_d074 | Side [1]]
ngsvirksomhet som kan
være til sjenanse for naboer, tillates kun etter skriftlig samtykke fra naboene og styrets
godkjennelse. Alminnelig hjemmekontor og lignende er tillatt.
2.4 Fotballsparking, ballslåing og lignende må ikke foregå på borettslagets eiendom.
2.5 Det er ikke tillatt å grille på balkongene siden dette kan medføre brannfare eller være til
sjenanse for naboene.
2.6 Loftsarealene bør ikke brukes etter kl 23:00.
2.7 Eventuelle støyproblemer og uoverensstemmelser søkes først og fremst løst

---

[d074_d074 | Side [1]]
5. For
Oppvarming
slike områder gjelder følgende bestemmelse fra planens
Elektrisk gulvvarme på bad. Det er en vedovn i stuen. § 7: «I denne reguleringsplan er det ikke tatt stilling til
bevaringsspørsmålet. Før prosjektering tar til, anbefales
byggherrer og forslagsstillere å kontakte berørte
Verneklasse/ SEFRAK
kommunale myndigheter for å bringe klarhet i eventuelle
Eiendommen er registrert på byantikvarens gule liste, bevaringsinteresser. Når behandling av bebyggelsesplan
43

## Side 44

OM

---

[d074_d074 | Side [1]]
 opplysningene er korrekte. er i utgangspunktet overordnet eldre reguleringsplaner,
Selger har fylt ut fullstendig energiattest, som er lagt ved men eldre planer kan fortsatt ha virkning.
salgsoppgaven. Megler påtar seg ikke ansvar for
informasjonen som fremgår av energiattesten. Eiendommen berøres av hensynssone H570: Bevaring
kulturmiljø. Dette er en videreføring av reguleringen til
«Spesialområde bevaring blandet» i plan S‑2255. For
Oppvarming
slike områder gjelder følgende bestemmelse fra

---

[d074_d074 | Side [1]]
1.1
av beboerne tar tilbørlig hensyn
til de her gitte påbud, vil en
medvirke til å skape ordnede
forhold og høyne boligkulturen
innen komplekset.
20.Piper som vender mot 22.06.1987 Foreslås å utgå
gårdsrommet, er ikke tillatt som
røykpiper fordi kjellerventilasjon
er lagt i disse pipene.
21.Ved innsetting av ny ovn eller 22.06.1987 Kap. 6.7
peis må det gis tillatelse av
brannvesenet.
22.Sykler som aldri blir brukt, men 22.06.1987 Kap. 4.2
som bare tar opp unødvendig
plass i sykkelskuret, vil bli
fjernet av

---

[d074_d074 | Side [1]]
 i eller utenfor bakgården i god avstand
fra vinduer. Pass på at ikke sneiper og brukt snus havner på terrassen / bakken nedenfor.
● Ved spesielle anledninger (fester ol) som medfører ekstra støy etter klokken 23:00, varsles
beboerne i tilstøtende boliger i god tid.
2.2 Ved innflytting, modernisering eller reparasjoner i leiligheten som medfører banking, boring,
sliping, saging etc, skal naboer varsles og arbeidet tillates i tidsrommet:
● Hverdager klokken 07:00–20:00.
● Helgedager og på allmenne fridager

---

[d074_d074 | Side [1]]
ed gis anledning til å uttale seg på programme-
god utsikt, gode solforhold og utformes med rings- og forprosjektstadiet.
lett tilgang til offentlig gatenett eller gang/
sykkelforbindelser. Terreng brattere enn 1:3 § 5.2 Torg/plass
medregnes ikke i arealet. Det bør også sikres For torg/plass i sentre som er regulert til
at torget/møteplassen ferdigstilles parallelt byggeområde opprettholdes gjeldende
med bebyggelsen. reguleringsplan, med supplering av disse
• For utbygging som omfatter mindre enn

---

[d074_d074 | Side [1]]
omsstudier, barns og unges behov, sol- og regnes ikke) bør det i reguleringsplan sikres

Side 10 Kdp for torg og møteplasser. 
103

## Side 104

minst ett torg/en møteplass som oppfyller gjennomføringsansvaret. Ved utvikling og
kravene fastlagt i § 5, med et anvendbart tiltak på torg og møteplasser skal berørte
areal på minst 5 % av tiltakets BRA. Torg/ brukergrupper, bydelsutvalg og lokalmiljø
møteplass bør lokaliseres på steder med gis anledning til å uttale seg på programme-
god utsikt, gode

---

[d074_d074 | Side [1]]
unges interesser i planleggingen sikrer i
stor grad regulerte og uregulerte friarealer
Fortetti ng av indre fra å bli gjenbygd. Arealmangel legger press
og ytre by tilsier på bruken av friområdene og ønsket om å
økt fokus på barn benytte disse til utbygging for offentlige for-
og unges leke- og mål. Tilliggende boligbebyggelse, skoler og
aktivitetsomr åder. barnehager vil kunne ha behov for tilgang til
disse utearealene. Det er nødvendig å unngå
at to viktige samfunnsnyttige tilbud, som
eksempelvis

---

[d074_d074 | Side [1]]
lass, annen overordnet møteplass
skal sikre at alle oppholds- og ferdselsarealer eller lokalt torg/møteplass innenfor en luft-
til enhver tid er godt opplyst. linjeavstand på:
a. 200 meter i indre Oslo
Støy/forurensing b. 300 meter i ytre by.
Torg og møteplasser skal lokaliseres, plan-
legges og utformes slik at ulempene fra støy Område hvor det ifølge disse kriterier er
og forurensing minimeres. Rennende vann mangel på torg og møteplass er vist på
skal vurderes brukt som avbøtende tiltak. plankartet som

---

[d074_d074 | Side [1]]
kva- om tilrettelegging for torg/ møteplass, der-
litet, slik at møteplassene tåler intensiv bruk som terreng-, naturforhold, trafikkbarrierer
i mange år, og slik at drift og vedlikehold blir eller andre stedlige forhold tilsier dette.
så enkel og rasjonell som mulig. • For plan/tiltak innenfor offentlig vei/gate/
plassgrunn eller areal regulert til dette bør
Krav til dokumentasjon det vurderes spesielt hvordan behovet for og
Det skal i reguleringsplan og søknad om tilgang til torg og møteplass kan

---

[d074_d074 | Side [1]]
t behov II: vurdering av bydelens behov
forbindelsenes rolle som sammenknytning knyttet til prioriterte grupper (barn, unge,
av møteplasser, eller i rollen av selv å være eldre osv.)
møteplass, som er begrunnelsen for at de tas • gjennomførbarhet: de samarbeidende
med i dette planforslaget. etatenes vurdering av gjennomførbarhet/
samsvar med prosjekter på gang
- Lokalt torg/møteplass er en plass som er • forhold til reguleringsstatus: forslaget bør
viktig som bruksområde for et mindre område ikke være i

---

[d074_d074 | Side [1]]
rdager klokken 07:00–20:00.
● Helgedager og på allmenne fridager klokken 10:00–18:00.
På søndager, helligdager og offentlige høytidsdager, skal det utvises særlig hensynsfullhet.
Ovennevnte aktiviteter skal ikke foregå over et lengre tidsrom uten at naboene har akseptert
dette på forhånd.
146

## Side 147

Kristparken borettslag, Ordensregler, vedtatt ??.? 2021 Side3av11
2.3 Musikk- og sangundervisning, barnepassvirksomhet eller annen næringsvirksomhet som kan
være til sjenanse for naboer, tillates kun

---

[d074_d074 | Side [1]]
til annen. Brannslukningsapparatet plasseres slik at det er lett tilgjengelig, gjerne i
tilknytning til soverom.
7.3 Dersom det oppstår feil ved borettslagets brannvernutstyr må dette umiddelbart meldes til
vaktmester eller styret.
7.4 Ved salg av boligen skal pålagt brannvernutstyr stå igjen i boligen.
8 Dyrehold
8.1 Dyrehold er tillatt så fremt dette ikke medfører urimelig sjenanse for naboer. På borettslagets
fellesarealer gjelder båndtvang hele året.
8.2 Beboere skal sørge for at deres dyr ikke gjør

---

[d074_d074 | Side [1]]
fellesarealer (jf. HMS, kap. 10.2) 3
Avfallshåndtering 4
Bruk og vedlikehold av leilighet og balkong 6
Brannvern 6
Dyrehold 7
Forsikringer og skader 7
Brudd på ordensreglene 7
Oversikt over foreslåtte endringer i forhold til
gjeldende ordensregler 8
Dette endringsforslaget til ordensregler innebærer en fullstendig revisjon av tidligere ordensregler
vedtatt 11.06.1986, 22.06.1987, 16.09.1991 og 15.05.2006. Ordensreglene er en liste på 28 punkter
som er oppført i kronologisk orden etter som de ble vedtatt,

---

[d074_d074 | Side [1]]
. så i praksis er avviket ikke mulig å rette. Manglende
mekanisk avtrekk kan føre til dårligere inneklima.
‑ Innvendig ‑ Innvendige dører | Enkelte av innvendige
dører har en del slitasje. Døren inn fra gangen subber i Helse, miljø og sikkerhet
karm/ terskel. Det bør forsøkes å justere dør. Konsekvens Det er ikke foretatt radonmålinger, og bygget er heller
av subbing er slitemerker. ikke utført med radonsperre.
‑ Tekniske installasjoner ‑ Vannledninger | Rørkursene på Radon er en luktløs gass som i store

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "TG3 – Store/alvorlige avvik på etasjeskille/gulv mot grunn: Målt høydeforskjell på over 20 mm innenfor 2 meter og over 30 mm gjennom hele rommet. Årsaken er sannsynligvis setninger over tid i et gammelt bygg (1898). Utbedring krever oppretting av høydeforskjeller.",
      "evidence": [
        "Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Målt høydeforskjell på over 30 mm gjennom hele rommet. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.",
        "Innvendig > Etasjeskille/gulv mot grunn – STORE ELLER ALVORLIGE AVVIK",
        "Skjevheter i gulv. Bygningen er fra 1898. (selgers egenerklæring)"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "TG2 – Vinduer med risiko for punktering og dårlig isolasjon: Eldre isolerglass løper større risiko for punktering. Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene. Vinduer er ofte borettslagets ansvarsområde, og styret er i ferd med å innhente anbud på utskiftning.",
      "evidence": [
        "Eldre isolerglass løper en større risiko for punktering.",
        "Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene.",
        "Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK",
        "To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "TG2 – Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som er et avvik etter NS 3600:2018.",
      "evidence": [
        "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
        "For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.",
        "Boligbygg med flere boenheter – AVVIK SOM KAN KREVE TILTAK"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "TG2 – Pipe og ildsted: Sprekk i flis foran ovnen. Tiltak er å bytte flis.",
      "evidence": [
        "Innvendig – Pipe og ildsted | Sprekk i flis foran ovnen. Tiltak er å bytte flis.",
        "Innvendig > Pipe og ildsted – AVVIK SOM KAN KREVE TILTAK"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "TG2 – Innvendige dører med slitasje: Enkelte innvendige dører har en del slitasje, og døren inn fra gangen subber i karm/terskel. Konsekvens er slitemerker.",
      "evidence": [
        "Enkelte av innvendige dører har en del slitasje. Døren inn fra gangen subber i karm/terskel. Det bør forsøkes å justere dør. Konsekvens av subbing er slitemerker.",
        "Innvendig > Innvendige dører – AVVIK SOM KAN KREVE TILTAK"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "TG2 – Vannledninger og avløpsrør: Rørkursene og avløpsrørene er registrert med avvik som kan kreve tiltak. Eldre rør i et bygg fra 1898 innebærer risiko for lekkasje og kapasitetsproblemer.",
      "evidence": [
        "Tekniske installasjoner – Vannledninger | Rørkursene på ...",
        "Tekniske installasjoner > Vannledninger – AVVIK SOM KAN KREVE TILTAK",
        "Tekniske installasjoner > Avløpsrør – AVVIK SOM KAN KREVE TILTAK"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R7",
      "description": "TG2 – Andre utvendige forhold med avvik: Det er registrert avvik på andre utvendige forhold som kan kreve tiltak, inkludert vedlikeholdsetterslep og arbeid med reparasjon av deler av fasaden.",
      "evidence": [
        "Utvendig > Andre utvendige forhold – AVVIK SOM KAN KREVE TILTAK",
        "Arbeidene med reparasjon av deler av fasaden",
        "Vedlikeholdsetterslep"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R8",
      "description": "Fukt i kjeller: Borettslaget har kjente fuktutfordringer i kjeller. Mulige utbedringstiltak er under vurdering, men ingen konkret løsning er vedtatt. Dette kan medføre fremtidige kostnader for borettslaget og økte felleskostnader.",
      "evidence": [
        "Fukt i kjeller – Orientering fra styret om fuktutfordringer i kjeller, mulige utbedringstiltak og en ...",
        "Orientering om økonomisk situasjon, budsjett for 2025, vedlikeholdsetterslep, fukt i kjeller og feil på calling/Unloc."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R9",
      "description": "Manglende radonmåling og ingen radonsperre: Det er ikke utført radonmåling på eiendommen, og bygget er heller ikke utført med radonsperre. Radon er en luktløs gass som i store konsentrasjoner kan være helsefarlig.",
      "evidence": [
        "Det er ikke utført radonmåling på eiendommen.",
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Radon er en luktløs gass som i store ...",
        "Området er vurdert med moderat til lav aktsomhetsgrad ifølge radonkart."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R10",
      "description": "Manglende mekanisk avtrekk: Borettslaget/sameiet tillater ikke inngrep på kanalanlegget, slik at avviket i praksis ikke er mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima.",
      "evidence": [
        "borettslag/sameier tillater ikke inngrep på kanalanlegget, så i praksis er avviket ikke mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R11",
      "description": "Verneklasse/kulturminnebegrensninger (gul liste og hensynssone H570): Eiendommen er registrert på byantikvarens gule liste og berøres av hensynssone H570 Bevaring kulturmiljø. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og krever rådgivende uttalelse fra Byantikvaren.",
      "evidence": [
        "Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis. Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer.",
        "Eiendommen berøres av hensynssone H570: Bevaring kulturmiljø.",
        "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen.",
        "Regulert til boliger med tilhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget mangler sikringsordning for felleskostnader: Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader. Dette innebærer at øvrige andelseiere må dekke eventuelle misligholdte felleskostnader fra andre andelshavere eller fraflyttede/usolgte andeler.",
      "evidence": [
        "Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader.",
        "Boligselskap er ikke tilknyttet sikringsordning",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R13",
      "description": "Risiko for økte felleskostnader: Styret vurderer utskiftning av vinduer (anbud under utarbeidelse), det er vedlikeholdsetterslep, fukt i kjeller og fasadereparasjoner. Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.",
      "evidence": [
        "Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.",
        "To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag.",
        "Vedlikeholdsetterslep",
        "Arbeidene med reparasjon av deler av fasaden",
        "Fukt i kjeller – mulige utbedringstiltak"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R14",
      "description": "Pantedokument/heftelse på eiendommen: Det er tinglyst et pantedokument på NOK 3 020 000 (2005/78627-1/105). Dersom eiendommen blir overbeheftet, kan handel ikke gjennomføres uten pantefrafall fra kreditorene.",
      "evidence": [
        "2005/78627-1/105 17.11.2005 PANTEDOKUMENT Beløp: NOK 3 020 000",
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Byggets høye alder (1898) og generell slitasje: Bygget er fra 1898, noe som innebærer økt risiko for skjulte feil, aldersrelatert slitasje og behov for løpende vedlikehold på konstruksjoner, rør, vinduer og andre bygningsdeler.",
      "evidence": [
        "Byggeåret er basert på opplysninger fra eiendomsmatrikkelen. 1898",
        "Skjevheter i gulv. Bygningen er fra 1898.",
        "Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R16",
      "description": "Eiendomsskatt viderefaktureres til andelseier: Eiendomsskatt faktureres borettslaget og viderefaktureres til den enkelte andelseier. Dette er en løpende kostnad som ikke inngår i felleskostnadene og kan øke over tid.",
      "evidence": [
        "Eiendomsskatt faktureres fra myndighetene til borettslaget. Dette inngår ikke i felleskostnadene og blir derfor viderefakturert eier.",
        "Eiendomsskatt faktureres borettslaget og blir viderefakturert til den enkelte andelseier."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17",
      "description": "Flytende rente på fellesgjeld: Borettslagets lån har flytende rente (4,47%), noe som innebærer at andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken. Renteøkninger vil direkte påvirke felleskostnadene.",
      "evidence": [
        "Type Rente: Flytende",
        "Rente: 4,47%",
        "Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R18",
      "description": "Styregodkjennelse og forkjøpsrett: Kjøper skal godkjennes av styret i borettslaget, og forkjøpsrett er under prøving. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.",
      "evidence": [
        "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget.",
        "Forkjøpsrett: Forkjøpsrett er under prøving."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R19",
      "description": "Skjulte feil og mangler kan ikke utelukkes: Rapporten er utført med begrensninger da boligen var innredet på befaringstidspunktet. Tunge møbler ble ikke flyttet, og skader bak innredning kan ikke oppdages. Rapporten er ingen garanti mot skjulte feil.",
      "evidence": [
        "Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke ...",
        "Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R20-NY",
      "description": "Feil på calling/Unloc-system: Det er registrert feil på borettslagets calling- og Unloc-system. Status og kostnad for utbedring er ikke avklart, noe som kan medføre sikkerhetsmessige og praktiske utfordringer for beboerne.",
      "evidence": [
        "Orientering om økonomisk situasjon, budsjett for 2025, vedlikeholdsetterslep, fukt i kjeller og feil på calling/Unloc."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R21-NY",
      "description": "Begrenset utleieadgang: Andelen kan kun leies ut i inntil tre år med styrets samtykke dersom eier har bodd i boligen i minst ett av de siste to årene. Dette begrenser fleksibiliteten for kjøper som ønsker å leie ut boligen.",
      "evidence": [
        "Dersom andelseier har bodd i boligen i minst ett av de siste to årene, kan boligen leies ut i inntil tre år med styrets samtykke, jf. burettslagslova §§ 5-5 og 5-6."
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R22-NY",
      "description": "Restanse felleskostnader i borettslaget: Regnskapet for 2024 viser en restanse på felleskostnader på kr 14 324. Dette indikerer at én eller flere andelseiere ikke har betalt sine felleskostnader, noe som kan belaste borettslagets økonomi.",
      "evidence": [
        "Restanse felleskostnader 14 324 0 (fra balanse 2024 Kristparken Borettslag)"
      ],
      "source_documents": [
        "d074_d074"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "Vannledninger avløpsrør tilstandsgrad detaljer alder materiale",
    "Andre utvendige forhold fasade detaljer tilstandsgrad",
    "Calling Unloc feil status utbedring kostnad",
    "Radon aktsomhetsgrad Oslo Wilses gate",
    "Fellesgjeld lånebetingelser innfrielsesdato totalt",
    "Brannvern status borettslaget",
    "El-anlegg tilstandsgrad avvik",
    "Utleie borettslag regler begrensninger"
  ],
  "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (TG3 – Etasjeskille/gulv):** Meget godt dokumentert. Eksplisitte målinger (>20mm/2m og >30mm totalt), TG3 bekreftet i oppsummering, og selgers egenerklæring bekrefter skjevheter. Confidence justeres marginalt opp til 0.98.\n\n**R2 (TG2 – Vinduer):** Godt dokumentert. Evidens for punkteringsrisiko, isolasjonsproblemer og pågående anbudsprosess. Confidence opprettholdes på 0.93.\n\n**R3 (TG2 – Manglende tilstandsanalyserapport):** Meget godt dokumentert med direkte sitat fra NS 3600:2018-krav. Confidence opprettholdes på 0.95.\n\n**R4 (TG2 – Pipe og ildsted):** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.92.\n\n**R5 (TG2 – Innvendige dører):** Godt dokumentert. Confidence opprettholdes på 0.88.\n\n**R6 (TG2 – Vannledninger/avløpsrør):** Evidensen er noe svak – kun kategorinavn og TG2-klassifisering er bekreftet, men detaljert beskrivelse av avviket er avkortet (\"Rørkursene på ...\"). Confidence justeres ned til 0.82 da fullstendig evidenstekst mangler.\n\n**R7 (Andre utvendige forhold):** Evidensen er indirekte – fasadereparasjon og vedlikeholdsetterslep er bekreftet fra generalforsamlingsprotokoll, men selve TG2-beskrivelsen er ikke sitert i detalj. Confidence opprettholdes på 0.87.\n\n**R8 (Fukt i kjeller):** Godt dokumentert fra generalforsamlingsprotokoll. Confidence opprettholdes på 0.93.\n\n**R9 (Radonmåling):** Godt dokumentert. Viktig tillegg: dokumentet nevner at \"Området er vurdert med moderat til lav aktsomhetsgrad ifølge radonkart\" – dette modererer risikoen noe, men manglende måling er fortsatt et avvik. Confidence justeres marginalt ned til 0.93.\n\n**R10 (Manglende mekanisk avtrekk):** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.91.\n\n**R11 (Verneklasse/kulturminnebegrensninger):** Meget godt dokumentert. Gul liste, H570 og Byantikvarens rolle er alle bekreftet. Confidence justeres opp til 0.95.\n\n**R12 (Manglende sikringsordning):** Meget godt dokumentert med tre separate bekreftelser. Confidence opprettholdes på 0.92.\n\n**R13 (Økte felleskostnader):** Meget godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence justeres marginalt opp til 0.94.\n\n**R14 (Pantedokument):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**R15 (Byggets høye alder):** Meget godt dokumentert. Confidence opprettholdes på 0.95.\n\n**R16 (Eiendomsskatt):** Godt dokumentert med to separate bekreftelser. Confidence opprettholdes på 0.82.\n\n**R17 (Flytende rente):** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.88.\n\n**R18 (Styregodkjennelse/forkjøpsrett):** Godt dokumentert. Confidence opprettholdes på 0.87.\n\n**R19 (Skjulte feil):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**Nye risikoer identifisert:**\n\n**R20-NY (Feil på calling/Unloc):** Nevnt i generalforsamlingsprotokoll, men ingen detaljer om alvorlighetsgrad eller kostnad. Confidence settes til 0.72.\n\n**R21-NY (Begrenset utleieadgang):** Dokumentert i salgsoppgaven. Relevant for kjøpere som vurderer utleie. Confidence settes til 0.80.\n\n**R22-NY (Restanse felleskostnader):** Bekreftet i balansen for 2024 (kr 14 324). Indikerer betalingsproblemer hos én eller flere andelseiere. Confidence settes til 0.75.\n\n**Vurdering av manglende risikoer:**\n- El-anlegget: Selger oppgir at det er utført arbeid (nye automatsikringer, nytt el-anlegg til kjøkken og bad), men ingen TG-klassifisering er nevnt i de tilgjengelige dokumentchunkene. Bør undersøkes nærmere.\n- Brannvern: Nevnt i generalforsamlingsprotokoll som et orienteringspunkt, men ingen detaljer om avvik.\n- Legalpant (2G): Nevnt i dokumentet, men dette er en standard borettslagsbestemmelse og ikke en særskilt risiko.\n"
}

## Raw Response
```json
{
  "id": "msg_01PfnZZKJYUtpUDPNcLXgSc2",
  "container": null,
  "content": [
    {
      "id": "toolu_01LjQL6tgrVarnys1EGSqPCC",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "TG3 – Store/alvorlige avvik på etasjeskille/gulv mot grunn: Målt høydeforskjell på over 20 mm innenfor 2 meter og over 30 mm gjennom hele rommet. Årsaken er sannsynligvis setninger over tid i et gammelt bygg (1898). Utbedring krever oppretting av høydeforskjeller.",
            "evidence": [
              "Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Målt høydeforskjell på over 30 mm gjennom hele rommet. Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.",
              "Innvendig > Etasjeskille/gulv mot grunn – STORE ELLER ALVORLIGE AVVIK",
              "Skjevheter i gulv. Bygningen er fra 1898. (selgers egenerklæring)"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "TG2 – Vinduer med risiko for punktering og dårlig isolasjon: Eldre isolerglass løper større risiko for punktering. Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene. Vinduer er ofte borettslagets ansvarsområde, og styret er i ferd med å innhente anbud på utskiftning.",
            "evidence": [
              "Eldre isolerglass løper en større risiko for punktering.",
              "Alder kan ha påvirket isolasjonen og vindtettingen rundt vinduene.",
              "Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK",
              "To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "TG2 – Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som er et avvik etter NS 3600:2018.",
            "evidence": [
              "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
              "For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.",
              "Boligbygg med flere boenheter – AVVIK SOM KAN KREVE TILTAK"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "TG2 – Pipe og ildsted: Sprekk i flis foran ovnen. Tiltak er å bytte flis.",
            "evidence": [
              "Innvendig – Pipe og ildsted | Sprekk i flis foran ovnen. Tiltak er å bytte flis.",
              "Innvendig > Pipe og ildsted – AVVIK SOM KAN KREVE TILTAK"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "TG2 – Innvendige dører med slitasje: Enkelte innvendige dører har en del slitasje, og døren inn fra gangen subber i karm/terskel. Konsekvens er slitemerker.",
            "evidence": [
              "Enkelte av innvendige dører har en del slitasje. Døren inn fra gangen subber i karm/terskel. Det bør forsøkes å justere dør. Konsekvens av subbing er slitemerker.",
              "Innvendig > Innvendige dører – AVVIK SOM KAN KREVE TILTAK"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "TG2 – Vannledninger og avløpsrør: Rørkursene og avløpsrørene er registrert med avvik som kan kreve tiltak. Eldre rør i et bygg fra 1898 innebærer risiko for lekkasje og kapasitetsproblemer.",
            "evidence": [
              "Tekniske installasjoner – Vannledninger | Rørkursene på ...",
              "Tekniske installasjoner > Vannledninger – AVVIK SOM KAN KREVE TILTAK",
              "Tekniske installasjoner > Avløpsrør – AVVIK SOM KAN KREVE TILTAK"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R7",
            "description": "TG2 – Andre utvendige forhold med avvik: Det er registrert avvik på andre utvendige forhold som kan kreve tiltak, inkludert vedlikeholdsetterslep og arbeid med reparasjon av deler av fasaden.",
            "evidence": [
              "Utvendig > Andre utvendige forhold – AVVIK SOM KAN KREVE TILTAK",
              "Arbeidene med reparasjon av deler av fasaden",
              "Vedlikeholdsetterslep"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R8",
            "description": "Fukt i kjeller: Borettslaget har kjente fuktutfordringer i kjeller. Mulige utbedringstiltak er under vurdering, men ingen konkret løsning er vedtatt. Dette kan medføre fremtidige kostnader for borettslaget og økte felleskostnader.",
            "evidence": [
              "Fukt i kjeller – Orientering fra styret om fuktutfordringer i kjeller, mulige utbedringstiltak og en ...",
              "Orientering om økonomisk situasjon, budsjett for 2025, vedlikeholdsetterslep, fukt i kjeller og feil på calling/Unloc."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R9",
            "description": "Manglende radonmåling og ingen radonsperre: Det er ikke utført radonmåling på eiendommen, og bygget er heller ikke utført med radonsperre. Radon er en luktløs gass som i store konsentrasjoner kan være helsefarlig.",
            "evidence": [
              "Det er ikke utført radonmåling på eiendommen.",
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Radon er en luktløs gass som i store ...",
              "Området er vurdert med moderat til lav aktsomhetsgrad ifølge radonkart."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R10",
            "description": "Manglende mekanisk avtrekk: Borettslaget/sameiet tillater ikke inngrep på kanalanlegget, slik at avviket i praksis ikke er mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima.",
            "evidence": [
              "borettslag/sameier tillater ikke inngrep på kanalanlegget, så i praksis er avviket ikke mulig å rette. Manglende mekanisk avtrekk kan føre til dårligere inneklima."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R11",
            "description": "Verneklasse/kulturminnebegrensninger (gul liste og hensynssone H570): Eiendommen er registrert på byantikvarens gule liste og berøres av hensynssone H570 Bevaring kulturmiljø. Dette kan begrense mulighetene for fremtidige ombygginger, restaureringer og påbygg, og krever rådgivende uttalelse fra Byantikvaren.",
            "evidence": [
              "Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis. Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer.",
              "Eiendommen berøres av hensynssone H570: Bevaring kulturmiljø.",
              "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen.",
              "Regulert til boliger med tilhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget mangler sikringsordning for felleskostnader: Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader. Dette innebærer at øvrige andelseiere må dekke eventuelle misligholdte felleskostnader fra andre andelshavere eller fraflyttede/usolgte andeler.",
            "evidence": [
              "Borettslaget er ikke tilknyttet en sikringsordning som dekker manglende innbetaling av felleskostnader.",
              "Boligselskap er ikke tilknyttet sikringsordning",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R13",
            "description": "Risiko for økte felleskostnader: Styret vurderer utskiftning av vinduer (anbud under utarbeidelse), det er vedlikeholdsetterslep, fukt i kjeller og fasadereparasjoner. Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.",
            "evidence": [
              "Felleskostnadene kan bli besluttet økt etter utarbeidelse av salgsoppgaven.",
              "To foretak er interessert i å gi et anbud på utskiftning av vinduer. Styret er i ferd med å utforme et anbudsgrunnlag.",
              "Vedlikeholdsetterslep",
              "Arbeidene med reparasjon av deler av fasaden",
              "Fukt i kjeller – mulige utbedringstiltak"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R14",
            "description": "Pantedokument/heftelse på eiendommen: Det er tinglyst et pantedokument på NOK 3 020 000 (2005/78627-1/105). Dersom eiendommen blir overbeheftet, kan handel ikke gjennomføres uten pantefrafall fra kreditorene.",
            "evidence": [
              "2005/78627-1/105 17.11.2005 PANTEDOKUMENT Beløp: NOK 3 020 000",
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Byggets høye alder (1898) og generell slitasje: Bygget er fra 1898, noe som innebærer økt risiko for skjulte feil, aldersrelatert slitasje og behov for løpende vedlikehold på konstruksjoner, rør, vinduer og andre bygningsdeler.",
            "evidence": [
              "Byggeåret er basert på opplysninger fra eiendomsmatrikkelen. 1898",
              "Skjevheter i gulv. Bygningen er fra 1898.",
              "Årsaken er sannsynligvis setninger over tid. Dette er et gammelt bygg.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R16",
            "description": "Eiendomsskatt viderefaktureres til andelseier: Eiendomsskatt faktureres borettslaget og viderefaktureres til den enkelte andelseier. Dette er en løpende kostnad som ikke inngår i felleskostnadene og kan øke over tid.",
            "evidence": [
              "Eiendomsskatt faktureres fra myndighetene til borettslaget. Dette inngår ikke i felleskostnadene og blir derfor viderefakturert eier.",
              "Eiendomsskatt faktureres borettslaget og blir viderefakturert til den enkelte andelseier."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17",
            "description": "Flytende rente på fellesgjeld: Borettslagets lån har flytende rente (4,47%), noe som innebærer at andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken. Renteøkninger vil direkte påvirke felleskostnadene.",
            "evidence": [
              "Type Rente: Flytende",
              "Rente: 4,47%",
              "Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R18",
            "description": "Styregodkjennelse og forkjøpsrett: Kjøper skal godkjennes av styret i borettslaget, og forkjøpsrett er under prøving. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.",
            "evidence": [
              "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget.",
              "Forkjøpsrett: Forkjøpsrett er under prøving."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R19",
            "description": "Skjulte feil og mangler kan ikke utelukkes: Rapporten er utført med begrensninger da boligen var innredet på befaringstidspunktet. Tunge møbler ble ikke flyttet, og skader bak innredning kan ikke oppdages. Rapporten er ingen garanti mot skjulte feil.",
            "evidence": [
              "Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke ...",
              "Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R20-NY",
            "description": "Feil på calling/Unloc-system: Det er registrert feil på borettslagets calling- og Unloc-system. Status og kostnad for utbedring er ikke avklart, noe som kan medføre sikkerhetsmessige og praktiske utfordringer for beboerne.",
            "evidence": [
              "Orientering om økonomisk situasjon, budsjett for 2025, vedlikeholdsetterslep, fukt i kjeller og feil på calling/Unloc."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R21-NY",
            "description": "Begrenset utleieadgang: Andelen kan kun leies ut i inntil tre år med styrets samtykke dersom eier har bodd i boligen i minst ett av de siste to årene. Dette begrenser fleksibiliteten for kjøper som ønsker å leie ut boligen.",
            "evidence": [
              "Dersom andelseier har bodd i boligen i minst ett av de siste to årene, kan boligen leies ut i inntil tre år med styrets samtykke, jf. burettslagslova §§ 5-5 og 5-6."
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R22-NY",
            "description": "Restanse felleskostnader i borettslaget: Regnskapet for 2024 viser en restanse på felleskostnader på kr 14 324. Dette indikerer at én eller flere andelseiere ikke har betalt sine felleskostnader, noe som kan belaste borettslagets økonomi.",
            "evidence": [
              "Restanse felleskostnader 14 324 0 (fra balanse 2024 Kristparken Borettslag)"
            ],
            "source_documents": [
              "d074_d074"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "Vannledninger avløpsrør tilstandsgrad detaljer alder materiale",
          "Andre utvendige forhold fasade detaljer tilstandsgrad",
          "Calling Unloc feil status utbedring kostnad",
          "Radon aktsomhetsgrad Oslo Wilses gate",
          "Fellesgjeld lånebetingelser innfrielsesdato totalt",
          "Brannvern status borettslaget",
          "El-anlegg tilstandsgrad avvik",
          "Utleie borettslag regler begrensninger"
        ],
        "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (TG3 – Etasjeskille/gulv):** Meget godt dokumentert. Eksplisitte målinger (>20mm/2m og >30mm totalt), TG3 bekreftet i oppsummering, og selgers egenerklæring bekrefter skjevheter. Confidence justeres marginalt opp til 0.98.\n\n**R2 (TG2 – Vinduer):** Godt dokumentert. Evidens for punkteringsrisiko, isolasjonsproblemer og pågående anbudsprosess. Confidence opprettholdes på 0.93.\n\n**R3 (TG2 – Manglende tilstandsanalyserapport):** Meget godt dokumentert med direkte sitat fra NS 3600:2018-krav. Confidence opprettholdes på 0.95.\n\n**R4 (TG2 – Pipe og ildsted):** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.92.\n\n**R5 (TG2 – Innvendige dører):** Godt dokumentert. Confidence opprettholdes på 0.88.\n\n**R6 (TG2 – Vannledninger/avløpsrør):** Evidensen er noe svak – kun kategorinavn og TG2-klassifisering er bekreftet, men detaljert beskrivelse av avviket er avkortet (\"Rørkursene på ...\"). Confidence justeres ned til 0.82 da fullstendig evidenstekst mangler.\n\n**R7 (Andre utvendige forhold):** Evidensen er indirekte – fasadereparasjon og vedlikeholdsetterslep er bekreftet fra generalforsamlingsprotokoll, men selve TG2-beskrivelsen er ikke sitert i detalj. Confidence opprettholdes på 0.87.\n\n**R8 (Fukt i kjeller):** Godt dokumentert fra generalforsamlingsprotokoll. Confidence opprettholdes på 0.93.\n\n**R9 (Radonmåling):** Godt dokumentert. Viktig tillegg: dokumentet nevner at \"Området er vurdert med moderat til lav aktsomhetsgrad ifølge radonkart\" – dette modererer risikoen noe, men manglende måling er fortsatt et avvik. Confidence justeres marginalt ned til 0.93.\n\n**R10 (Manglende mekanisk avtrekk):** Godt dokumentert med direkte sitat. Confidence opprettholdes på 0.91.\n\n**R11 (Verneklasse/kulturminnebegrensninger):** Meget godt dokumentert. Gul liste, H570 og Byantikvarens rolle er alle bekreftet. Confidence justeres opp til 0.95.\n\n**R12 (Manglende sikringsordning):** Meget godt dokumentert med tre separate bekreftelser. Confidence opprettholdes på 0.92.\n\n**R13 (Økte felleskostnader):** Meget godt dokumentert med eksplisitt advarsel i salgsoppgaven. Confidence justeres marginalt opp til 0.94.\n\n**R14 (Pantedokument):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**R15 (Byggets høye alder):** Meget godt dokumentert. Confidence opprettholdes på 0.95.\n\n**R16 (Eiendomsskatt):** Godt dokumentert med to separate bekreftelser. Confidence opprettholdes på 0.82.\n\n**R17 (Flytende rente):** Godt dokumentert med konkrete tall. Confidence opprettholdes på 0.88.\n\n**R18 (Styregodkjennelse/forkjøpsrett):** Godt dokumentert. Confidence opprettholdes på 0.87.\n\n**R19 (Skjulte feil):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**Nye risikoer identifisert:**\n\n**R20-NY (Feil på calling/Unloc):** Nevnt i generalforsamlingsprotokoll, men ingen detaljer om alvorlighetsgrad eller kostnad. Confidence settes til 0.72.\n\n**R21-NY (Begrenset utleieadgang):** Dokumentert i salgsoppgaven. Relevant for kjøpere som vurderer utleie. Confidence settes til 0.80.\n\n**R22-NY (Restanse felleskostnader):** Bekreftet i balansen for 2024 (kr 14 324). Indikerer betalingsproblemer hos én eller flere andelseiere. Confidence settes til 0.75.\n\n**Vurdering av manglende risikoer:**\n- El-anlegget: Selger oppgir at det er utført arbeid (nye automatsikringer, nytt el-anlegg til kjøkken og bad), men ingen TG-klassifisering er nevnt i de tilgjengelige dokumentchunkene. Bør undersøkes nærmere.\n- Brannvern: Nevnt i generalforsamlingsprotokoll som et orienteringspunkt, men ingen detaljer om avvik.\n- Legalpant (2G): Nevnt i dokumentet, men dette er en standard borettslagsbestemmelse og ikke en særskilt risiko.\n"
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
    "input_tokens": 23291,
    "output_tokens": 6855,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
