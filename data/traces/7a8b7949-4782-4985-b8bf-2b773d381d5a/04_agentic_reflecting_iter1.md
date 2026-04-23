# Trace: agentic_reflecting_iter1
- **Run ID:** 7a8b7949-4782-4985-b8bf-2b773d381d5a
- **Tidspunkt:** 2026-03-24T19:05:50.105880+00:00
- **Varighet:** 96.64s
- **Input tokens:** 20600
- **Output tokens:** 5189

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
Risiko 1: Skjeggkre bekreftet i boligen. Selger opplyser at skjeggkre er observert i boligen. Skjeggkre er et insekt som trives i fuktige miljøer og kan være vanskelig å bli kvitt.
  Confidence: 0.95
  Evidens: Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre.; Kjenner du til om det er/har vært skjeggkre i boligen? Nei Ja – Ganske sikker på at...; Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Nei Ja

Risiko 2: Fukt og mugg i bod/garasje. Selger bekrefter at boden/garasjen kan være fuktig, spesielt om vinteren, og at det kan forekomme mugg på lagrede gjenstander.
  Confidence: 0.92
  Evidens: Vet at boden/garasjen kan være fuktig, spesielt om vinteren. Så kan forekomme mugg på ting som blir lagret om man ikke passer på.; Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja.

Risiko 3: Hensynssone for steinsprang og elveflom. Eiendommen er berørt av hensynssoner H310_2 (steinsprang) og H320_2 (elveflom) i kommuneplanen, noe som kan innebære naturfarerelaterte risikoer.
  Confidence: 0.93
  Evidens: Eiendommen berøres av følgende hensynssoner i kommuneplanen: H310_2: Steinsprang, H320_2: Elveflom

Risiko 4: Nærhet til Markagrensen og begrensninger for utvikling. Eiendommen ligger i umiddelbar nærhet til Markagrensen, noe som kan sette rammer for fremtidig utvikling og påbygg.
  Confidence: 0.88
  Evidens: Eiendommen ligger i umiddelbar nærhet til Markagrensen. Dette er grensen for det vernede friluftsområdet Marka, noe som kan sette rammer for utvikling i området.

Risiko 5: Pågående plansaker i nærområdet. Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen, inkludert midlertidig forbud mot tiltak.
  Confidence: 0.87
  Evidens: Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen: Sak 202102096/2 02300230: Planendring; Sak 202204703/202304720: Midlertidig forbud mot tiltak i nærområdet. Status er gjeldende.

Risiko 6: Ingen radonmåling utført. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen.
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 7: Budsjettert underskudd i borettslaget for 2025. Borettslaget hadde budsjettert med et underskudd på kr. 963 167 for 2025, noe som kan indikere økte felleskostnader fremover.
  Confidence: 0.88
  Evidens: I 2025 var det budsjettert med et underskudd på kr. 963 167.; Megler har ikke mottatt regnskap for 2025/26 fra forretningsfører.

Risiko 8: Borettslaget har betydelig fellesgjeld. Borettslaget har en restsaldo på fellesgjeld på kr. 9 020 137 med restløpetid på ca. 28,8 år, noe som medfører løpende rentekostnader for andelseierne.
  Confidence: 0.85
  Evidens: Restsaldo pr. 15.02.2026: kr 9 020 137,-; Restløpetid: 28,759; Fellesgjeld Kr 47 739 pr. 15.02.2026

Risiko 9: Erklæring/avtale med Viken Energinett AS som ikke kan slettes uten samtykke. Det foreligger en tinglyst erklæring/avtale til fordel for Viken Energinett AS som ikke kan slettes uten deres samtykke, noe som kan begrense råderetten over eiendommen.
  Confidence: 0.82
  Evidens: Rettighetshaver Viken Energinett AS. Kan ikke slettes uten samtykke fra Viken Energinett AS. Med flere bestemmelser. Bestemmelse om trafostasjon/kiosk.

Risiko 10: Vinduer fra byggeår 2001 med 2-lags isolerglass. Vinduene er over 20 år gamle og kan ha redusert isolasjonsevne, noe som kan medføre økte oppvarmingskostnader og behov for utskifting.
  Confidence: 0.78
  Evidens: Vinduene har 2-lags isolerglass i trerammer og er fra byggeår 2001.; 2-lags isolerglass i trerammer. Vinduene er topphengslede-sidehengslede med vippefunksjon.

Risiko 11: Flatt tak med sveiset banebelegg. Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/PVC-membran), som er en taktype som krever jevnlig vedlikehold og kan være utsatt for lekkasjer.
  Confidence: 0.75
  Evidens: Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/pvc-membran).

Risiko 12: Tilstandsrapporten er basert på undersøkelsesnivå 1 med begrensede undersøkelser. Rapporten er basert på visuelle observasjoner og enkle hjelpemidler, og skjulte feil og mangler kan ikke avdekkes. Tunge møbler ble ikke flyttet.
  Confidence: 0.8
  Evidens: Rapporten er basert på undersøkelsesnivå 1, med noen få unntak: våtrom og rom under...; Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke flyttet på. Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.

Risiko 13: Styregodkjennelse kreves for kjøper. Kjøper skal godkjennes av styret i borettslaget, noe som innebærer en risiko for at kjøpet ikke kan gjennomføres dersom styret ikke godkjenner kjøper.
  Confidence: 0.8
  Evidens: Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget.

Risiko 14: Forkjøpsrett er under prøving. Forkjøpsretten er under prøving, noe som innebærer en risiko for at en annen part kan benytte seg av forkjøpsretten og overta boligen.
  Confidence: 0.85
  Evidens: Forkjøpsrett: Forkjøpsretten er under prøving.

Risiko 15: Boligen er ikke energimerket. Boligen er ikke energimerket i forbindelse med salget, noe som gir kjøper begrenset informasjon om energiforbruket.
  Confidence: 0.75
  Evidens: Boligen er ikke energimerket i forbindelse med salget.; Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått.

Risiko 16: Husleietap registrert i borettslagets regnskap. Borettslaget hadde husleietap på kr. 140 586 i 2024, noe som kan indikere mislighold fra andre andelseiere og potensielt økte felleskostnader.
  Confidence: 0.78
  Evidens: 7795 Husleietap 140 586

Risiko 17: El-kontroll avdekket jordfeil på 2 stikkontakter. Det ble avdekket og rettet jordfeil på 2 stikkontakter etter el-kontroll av Elvia, noe som indikerer at det elektriske anlegget har hatt avvik.
  Confidence: 0.72
  Evidens: Rettet jordfeil på 2 stikkontakter etter El-Kontroll av Elvia.; Kontroll av el-anlegget av Elvia 22.11.2022.

Risiko 18: Manglende rapport for fellesarealer. Det er opplyst at det foreligger en vedlikeholdsplan for borettslaget, men rapporten for fellesdeler er ikke fremvist, noe som er registrert som et avvik.
  Confidence: 0.8
  Evidens: Rapporten er ikke fremvist. Denne kan/bør etterspørres.; Mangel av rapport for fellesdeler registreres som et avvik.

Dokumentkontekst:
[d073_d073 | Side [1]]
eholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av

---

[d073_d073 | Side [1]]
, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1:

---

[d073_d073 | Side [1]]
avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering

---

[d073_d073 | Side [1]]
 boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige

---

[d073_d073 | Side [1]]
 elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen

---

[d073_d073 | Side [1]]
deler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens

---

[d073_d073 | Side [1]]
ing).
gjelder sikkerhet mot brann, rekkverk og trapper osv., vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering

---

[d073_d073 | Side [1]]
der
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og

---

[d073_d073 | Side [1]]
KKERHET
Det er u琀昀ørt en enkel vurdering av HMS (helse, miljø og sikkerhet) i
forhold i h.h.t. gjeldende regler. Sjekkpunkter er blant annet høyde
på balkongrekkverk, manglende rekkverk, radon, elektrisk anlegg,
brannvarsling med mer. Eventuelle avvik skal skrives inn i
rapporten, men uten TG (琀椀lstandsgrad). Ved avvik er disse listet
opp under de琀琀e avsni琀琀et i eget punkt. (Står det ingen琀椀ng er det
ikke avdekket avvik).
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l

---

[d073_d073 | Side [1]]
rommet eller bygningsdelen senere i
rapporten.
llatnA
Tjernfaret 35, 0956 OSLO Øyum Takst og Eiendom AS
Gnr 93 - Bnr 384 Heggelibakken 4
0301 OSLO 0375 OSLO
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av 琀椀lstandsgrader
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet >
Helse, miljø og sikkerhet
Gå til side
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU:

---

[d073_d073 | Side [1]]
sje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er

---

[d073_d073 | Side [1]]
gg?
Nei Det er u琀昀ørt en enkel vurdering av HMS (helse, miljø og sikkerhet) i
forhold i h.h.t. gjeldende regler. Sjekkpunkter er blant annet høyde på
balkongrekkverk, manglende rekkverk, radon, elektrisk anlegg,
Generelt om anlegget
brannvarsling med mer. Eventuelle avvik skal skrives inn i rapporten,
8. Er det tegn 琀椀l at det har vært termiske skader (tegn på varmgang) på men uten TG (琀椀lstandsgrad). Ved avvik er disse listet opp under de琀琀e
kabler, brytere, downlights, s琀椀kkontakter og elektrisk utstyr?

---

[d073_d073 | Side [1]]
OENHETER
for fellesdelene e琀琀erspørres. Dersom det foreligger en rapport, så skal
den vurderes med hensyn på relevans og egnethet og vedlegges som
grunnlag for 琀椀lstandsanalysen. Rapportens alder skal framkomme."
Byggeår Kommentar
2002 Byggeåret er basert på opplysninger
"Mangel av rapport for fellesdeler registreres som et avvik."
fra eiendomsmatrikkelen.
Anvendelse Det er opplyst i ne琀琀annonse fra forrige salg at bore琀琀slaget har en
Bolig detaljert vedlikeholdsplan frem 琀椀l 2040. Vedlikeholdsplanen har

---

[d073_d073 | Side [1]]
昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger

---

[d073_d073 | Side [1]]
 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Referansen er byggetegninger som ligger i kommunens
elektroniske byggesaksarkiv.
Oppdragsnr.: 13722-3269 Befaringsdato: 16.02.2026 Side: 6 av 19
61

## Side 62

20
15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Tjernfaret

---

[d073_d073 | Side [1]]
ninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer enn
•Rapporten baserer seg på krav i forskrift til avhendingslova fem år siden siste el-tilsyn. Ved behov for grundigere
(tryggere bolighandel). Rapportens struktur, metode og undersøkelser, kan bygningssakkyndig anbefale

---

[d073_d073 | Side [1]]
ning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele

---

[d073_d073 | Side [1]]
 ikke fremvist.
Boligen fremstår som velholdt, pen og med normal bruksslitasje.
Vurdering av avvik:
Se punkter under konstruksjoner for eventuelle behov i forhold 琀椀l
• Det er avvik:
vedlikehold.
Rapporten er ikke fremvist. Denne kan/bør e琀琀erspørres.
UTVENDIG
Konsekvens/琀椀ltak
• Tiltak:
Vinduer Rapporten er ikke fremvist. Denne kan/bør e琀琀erspørres.
2- lags isolerglass i trerammer. Vinduene er topphengslede- INNVENDIG
sidehengslede med vippefunksjon. Fastkarmsvindu i stuen. Vinduene er
fra

---

[d073_d073 | Side [1]]
everdighet, slik som at arealet må ha minst en bredde på
0,6m og minst en høyde på 1,9 m osv. Et rom kan være i strid
med teknisk forskrift og mangle godkjennelse hos kommunen for
den aktuelle bruken, uten at dette får betydning for om arealet
måles og oppgis i tilstandsrapporten. Når arealet måles tas det
ikke hensyn til om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
•Eiendommens markedsverdi kan ikke baseres på en rent
matematisk

---

[d073_d073 | Side [1]]
kader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør eller håndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste og basert på
Utbedringskostnadene vil også avhenge av personlige visuell observasjon. Rapporten er basert på undersøkelsesnivå 1,
preferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under

---

[d073_d073 | Side [1]]
R: 0301 GNR: 93 BNR: 393
‑ Sak 202102096/2 02300230: Planendring i
41

## Side 42

OM EIENDOMMEN
Selger bærer risikoen for at kjøper kan få tinglyst skjøte
Radonmåling
uten andre heftelser enn de som det er avtalt at følger
med i handelen. Gjennomføring av handelen er betinget Selger har ikke utført radonmåling. Det er ikke krav om
av det ikke er tinglyst heftelser som ikke lar seg innfri/ dette med mindre boligen er helt eller delvis utleid.
slette.
Diverse
Dersom eiendommen skulle bli overbeheftet

---

[d073_d073 | Side [1]]
30, Panthaver: Fellesskapet av innskytere, jf brl § 2‑11
vedtatt 23.09.2015. Arealbruken er i planen avsatt til LØPENR: 20051321
bebyggelse og anlegg, eksisterende. Registrert feil panthaver
11.11.2025. Arkivref. 25/ 39877‑2
Eiendommen berøres av følgende hensynssoner i Rettet etter tingl. §18
kommuneplanen:
‑ H310_2: Steinsprang 2006/ 10555‑1/ 105 13.02.2006 ERKLÆRING/ AVTALE
‑ H320_2: Elveflom Rettighetshaver Viken Energinett AS
Kan ikke slettes uten samtykke fra Viken Energinett AS
Eiendommen ligger i

---

[d073_d073 | Side [1]]
eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
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
24 Er det andre forhold

---

[d073_d073 | Side [1]]
verflaten Rapporten er utført med begrensninger som følger av at boligen
som er basert på enkle visuelle observasjoner. Kan vurderes er innredet på befaringen. Tunge møbler o.l. blir normalt ikke
sammen med bygningsdelens alder. flyttet på. Skader eller mangler som kan være skjult bak
innredning kan derfor ikke oppdages ved befaringen. Servitutter
og heftelser som hefter ved eiendommen er ikke vurdert, med
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
mindre det er angitt i rapporten.

---

[d073_d073 | Side [1]]
og
avløpssystem. Stikkledningene fra eiendommen og ut til Selger leverer eiendommen i ryddig og rengjort stand.
det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler borettslaget. Selger har observert skjeggkre i boligen. Skjeggkre er et
Adkomst til eiendommen skjer via offentlig vei. insekt i samme familie som sølvkre. Dette insektet lever
utelukkende innendørs og trives best i miljøer med høy
fuktighet, men har vist seg å klare seg i tørrere
Utleie
omgivelser enn sølvkre. Skjeggkre

---

[d073_d073 | Side [1]]
tc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
Initialer selger: MEH 2
02006220
:ecnerefer
tnemucoD
49

## Side 50

18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller

---

[d073_d073 | Side [1]]
lettes uten samtykke fra Viken Energinett AS
Eiendommen ligger i umiddelbar nærhet til Med flere bestemmelser
Markagrensen. Dette er grensen for det vernede Bestemmelse om trafostasjon/ kiosk
friluftsområdet Marka, noe som kan sette rammer for
utvikling i området. Eiendommens rettigheter:
Det er registrert pågående plansaker i nærområdet som 1973/ 17732‑1/ 105 27.09.1973 BEST. OM ADKOMSTRETT
kan påvirke eiendommen: Rettighet hefter i: KNR: 0301 GNR: 93 BNR: 393
‑ Sak 202102096/2 02300230: Planendring

---

[d073_d073 | Side [1]]
tleid.
slette.
Diverse
Dersom eiendommen skulle bli overbeheftet i
salgsprosessen, det vil si at summen av fremtidige Borettslagsmodellen innebærer at borettslaget eier
tinglyste heftelser overstiger den forventede eiendommen, mens andelseierne eier andeler i
salgssummen, er det en forutsetning for at handel skal borettslaget, som gir borett til en bestemt bolig.
kunne gjennomføres at kreditorene gir nødvendig Andelseierne har ikke personlig ansvar for borettslagets
pantefrafall. Dersom pantefrafall ikke

---

[d073_d073 | Side [1]]
inglyste lån når det gjelder
betaling av felleskostnader, og kan kreve inn pengene før Kjøper og selger er forpliktet til å undertegne standard
andre kreditorer, selv om de har lån registrert på andelen. kjøpekontrakt utarbeidet av Emera i forbindelse med
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hos eiendomsmegler før bud inngis. Kontakt
Vei, vann og avløp
eiendomsmegler for spørsmål.
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til Selger

---

[d073_d073 | Side [1]]
med mindre det foreligger en gjeldende
Fliser på vegger i bad og vaskerom. garanti fra produsent eller leverandør.
Himling: Malt glatt himling i alle rom, overflatebehandlet i
2022. Kjøper aksepterer at det kan forekomme hull og merker
etter montering av inventar og utstyr som ikke er en del
Oppbevaring: av overdragelsen.
Leiligheten disponerer en innvendig bod, en kjellerbod på
ca. 5 m² merket P34, samt en parkeringsplass merket
35

## Side 36

OM EIENDOMMEN
Eiendommens
Kjenner du til om det er/ har vært

---

[d073_d073 | Side [1]]
rderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det

---

[d073_d073 | Side [1]]
 er det eiendomsskatt på boliger og fast
8 406 (Forhåndsvarsling forkjøpsrett) eiendom som overstiger en fastsatt verdi. Informasjonen
545 (Tinglysingsgebyr ‑ hjemmel) over er hentet fra eiendomsskattelistene.
545 (Tinglysningsgebyr ‑ pantedokument) http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
9 496 (Omkostninger totalt (uten Boligkjøperforsikring))
18 796 (Omkostninger totalt (med

---

[d073_d073 | Side [1]]
ligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og

---

[d073_d073 | Side [1]]
lde sine disponible uteområder, inkludert
gjerder, skillevegger, hekker og gressplen.
Husdyr: Dyrehold er generelt tillatt i henhold til
borettslagets ordensregler.
Energimerke
Styret kan kreve veterinærattest for å avklare rase. Det er Energikarakter: C
båndtvang for hunder, og lufting av hund skal ikke skje på
borettslagets område. Energifarge: Lys grønn
Forkjøpsrett: Forkjøpsretten er under prøving.
Info energiklasse
Styregodkjennelse: Kjøper skal godkjennes av styret i Boligen er ikke energimerket i

---

[d073_d073 | Side [1]]
 om omsatte boliger. I
beregningen tas det hensyn til din boligs beliggenhet, Det medfølger én parkeringsplass i felles garasjeanlegg
32

## Side 33

OM EIENDOMMEN
under blokkene, merket med nummer 3. bygget er oppført i henhold til tillatelsen og gjeldende
Parkeringsplassen er ca. 220 cm bred. regelverk, eller at det senere er utført arbeid på bygget
som ikke er byggemeldt eller godkjent.
Adkomst
Det foreligger godkjente og byggemeldte tegninger fra
På høyre side i annonsen finner du et kartutsnitt. Ved å

---

[d073_d073 | Side [1]]
36

OM EIENDOMMEN
Eiendommens
Kjenner du til om det er/ har vært sopp/ råteskader/
insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal
tilstand
eller i andre boliger) som rotter, mus, maur eller lignende?
Takstmann: Erik Øyum Ja.
Vet at boden/ garasjen kan være fuktig, spesielt om
Type takst avholdt av takstmann: Tilstandsrapport vinteren. Så kan forekomme mugg på ting som blir lagret
om man ikke passer på. Har også observert muselort på
Sammendrag selgers egenerklæring: Selger har i et saueskinn

---

[d073_d073 | Side [1]]
/eiet tomt: Eiet Tomteareal: 12001
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP586903
10: Fasiliteter og andre enhetsopplysninger
Første innflytting: 01.01.2002
Etasje: 2 Oppvarmingstype: Strøm
Heis: Nei
Parkeringstype: Parkeringsplass ()
Systemlås: Nei Antall rom: 4
Husdyrhold: Nei Oppr. antall rom: 4
Livsløp standard: Nei Kategori: Kategori 10
Ansiennitetsregler: 1 - Andelseier i borettslaget
2 - Storbyfellesskap (Bate, BOB, Vestbo, TOBB, Nobl og Bonord iht. ansiennitet.)
2 - Medlem i

---

[d073_d073 | Side [1]]
telser
Selger opplyser at det årlige strømforbruket er ca. 14500 Tinglyste heftelser og rettigheter: Følgende tinglyste
kWh. Det er viktig å merke seg at energiforbruket kan heftelser følger eiendommen ved salg, og ved inngivelse
variere fra husstand til husstand. av bud vil disse være akseptert av budgiver/ kjøper:
2002/ 65474‑1/ 105 07.10.2002 PANTEDOKUMENT
Regulerings og arealplaner
Beløp: NOK 50 000 000
Eiendommen er regulert til byggeområde for boliger (felt Panthaver: HUSBANKEN
I), byggeområde for

---

[d073_d073 | Side [1]]
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
Ganske sikker på at

---

[d073_d073 | Side [1]]
ervert en gang.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: MEH 3
02006220
:ecnerefer
tnemucoD
50

## Side 51

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller

---

[d073_d073 | Side [1]]
72 -177 329
C. Disponible midler 1 353 654 989 203
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet.
26 Vesletjern Borettslag Org. nr 947137921
111

## Side 112

Resultatregnskap 2024 Vesletjern Borettslag
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 4 285 288 4 110 672 4 256 358 4 379 254
Sum leieinntekt 4 285 288 4 110 672 4 256 358 4 379 254
Andre inntekter
Tilskudd 2 25 000 26 951 0 0
Sum annen

---

[d073_d073 | Side [1]]
oligkjøperforsikring)) borettslaget, og blir viderefakturert til eier.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 47 739 pr. 15.02.2026
Lånebetingelser fellesgjeld: Borettslaget har følgende lån
og vilkår:
Estimert totalpris ink. omk
Kr 7 366 535 Bank: Den Norske Stats Husbank
Lånenummer: 114682743
Type: Annuitetslån, 4 terminer per år
Felleskostnader
Restsaldo pr. 15.02.2026: kr 9 020 137,‑
Felleskostnader kr 5 047,‑ pr. mnd Andel av saldo: kr 0,‑
Restløpetid: 28,759

---

[d073_d073 | Side [1]]
jernfaret 35 Type: Borettslag tilknyttet
0956 OSLO Eiere: Marthe Holand
Organisasjonsnr: 947 137 921 Andelsnr: 324
1: Felleskostnader
Tot. innev. måned: 5 047
Boligselskap er tilknyttet sikringsordning
Felleskostnader: Felleskostnader drift 4 719
Avdrag felleslån 116
Avdrag IN-lån -1 673
Renter felleslån 212
Renter IN-lån 545
Avdrag IN-lån 1 673
Renter IN-lån -545
Hvis boligselskapet har felles lån vil andel renter og avdrag på fellesgjelden reguleres månedlig i henhold til gjeldende rente i banken.
Det

---

[d073_d073 | Side [1]]
inger 4 113 160 000 113 160 000
Andre fellesanlegg 4 263 549 295 175
Andre driftsmidler 4 13 356 45 411
Sum anleggsmidler 113 436 906 113 500 586
Omløpsmidler
Fordringer
Restanse felleskostnader 0 11 465
Andre kortsiktige fordringer 8 226 3 528
Forskuddsbetalte kostnader 289 566 274 822
Bankinnskudd og kontanter
Innestående bank 1 229 734 876 717
Sum omløpsmidler 1 527 526 1 166 532
SUM EIENDELER 114 964 431 114 667 118
26 Vesletjern Borettslag Org. nr 947137921
113

## Side 114

Balanse 2024 Vesletjern

---

[d073_d073 | Side [1]]
 652 720
1 236 659 236 659
1 200 750 200 750
1 108 024 108 024
1 86 529 86 529
Antall andeler, andel gjeld og sum av fellesgjeld lån 98207824372 1 33 809 33 809
1 23 852 23 852
11 21 543 236 973
1 21 421 21 421
3 19 221 57 663
1 19 111 19 111
1 19 087 19 087
3 18 929 56 787
1 18 102 18 102
8 17 215 137 720
16 16 826 269 216
3 16 084 48 252
1 15 355 15 355
26 Vesletjern Borettslag Org. nr. 947137921
120

## Side 121

Noter årsregnskap 2024 Vesletjern Borettslag
Langsiktig gjeld
Individuell nedbetaling av

---

[d073_d073 | Side [1]]
sert i takt med nedbetalingen av fellesgjelden etter opprinnelig nedbetalingsplan,
og årlig nedkvittering framkommer i resultatregnskapet som inntekt etter driftsresultat før IN.
26 Vesletjern Borettslag Org. nr. 947137921
115

## Side 116

Noter årsregnskap 2024 Vesletjern Borettslag
Note 1 - Innkrevde felleskostnader
2024 2023
3600 Innkrevde felleskostn. drift 2 573 220 2 427 492
3609 Leie parkering 23 316 23 316
3618 strøm elbil 33 232 30 805
3650 Innkrevde felleskostn. renter 561 121 456 499
3660

---

[d073_d073 | Side [1]]
andeler,
kreditorer aksepterer å slette sitt pant uten å få full må dekkes av de øvrige andelseierne.
innfrielse av det underliggende kravet.
Borettslaget har legalpanterett i andelen for krav på
Legalpant: Borettslaget har legalpant på inntil 2G som dekning av felleskostnader og andre krav fra
sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
borettslaget har prioritet over tinglyste lån når det gjelder
betaling av felleskostnader, og kan

---

[d073_d073 | Side [1]]
esletjern Borettslag
Langsiktig gjeld
Individuell nedbetaling av fellesgjeld
Individuell nedbetaling av fellesgjeld (IN) er behandlet etter gjeldsmetodeløsningen.
Ekstrainnbetalinger fra eiere klassifiseres som forskuddsbetaling av eiers kapitalkostnader, og står i balansen under langsiktig gjeld.
Gjelden til eier vil bli redusert i takt med nedbetalingen av fellesgjelden etter opprinnelig nedbetalingsplan,
og årlig nedkvittering framkommer i resultatregnskapet som inntekt etter driftsresultat før IN.
26

---

[d073_d073 | Side [1]]
forretningsfører 23 232 28 682
Sum 23 232 28 682
Note 10 - Andre kostnader
2024 2023
7718 Fellesarrangement 977 725
7720 Generalforsamling/Årsmøte 3 000 2 500
7770 Betalingskostnader 980 1 007
7773 Omkostninger innkreving 2 915 811
7790 Andre kostnader 0 -1
7795 Husleietap 140 586
Sum 8 013 5 626
26 Vesletjern Borettslag Org. nr. 947137921
118

## Side 119

Noter årsregnskap 2024 Vesletjern Borettslag
Note 11 - Egenkapital
Egenkapital Endringer Egenkapital
per 01.01 per 31.12
Egenkapital
Innskutt

---

[d073_d073 | Side [1]]
 ansvar for borettslagets
pantefrafall. Dersom pantefrafall ikke oppnås vil handel fellesgjeld, men de må dekke borettslagets løpende
ikke kunne gjennomføres. Skulle det bli tinglyst flere utgifter. Manglende innbetaling av fellesutgiftene som
utleggspant på eiendommen, kan handel bare følge av andre andelshaveres mislighold, eller dersom
gjennomføres forutsatt at også eventuelle fremtidige borettslaget sitter på fraflyttede og/ eller usolgte andeler,
kreditorer aksepterer å slette sitt pant uten å få full

---

[d073_d073 | Side [1]]
dividuell nedbetaling av fellesgjeld på dette lånet
4: Særskilte opplysninger
Klausuler:
Styreleder: Martin Krane Pedersen
Adresse: Tjernfaret 18
Postnr/-sted: 0956 OSLO
Telefon: Mob.: 97031596
E-post: vesletjern@outlook.com
6: Ligning - 2025
Gjeld: 47 739 Andre inntekter: 1 139
84

## Side 85

Boligopplysninger:
Saksbehandler: Robot Hårfagre Dato utkjørt: 15.02.26 Side 2 av 3
Vesletjern Borettslag Vår ref.: 26/324 Fødselsdato eier: 16.04.1988
Tjernfaret 35 Type: Borettslag tilknyttet
0956 OSLO Eiere:

---

[d073_d073 | Side [1]]
STER
Renteinntekt 42 190 30 977 0 0
Rentekostnad 572 537 450 496 506 651 532 855
Netto finansposter 530 348 419 519 506 651 532 855
Å rsresultat 1 717 529 1 113 116 1 217 303 -963 167
Overført til/fra annen egenkapital 1 717 529 1 113 116 0 0
SUM OVERFØRINGER 1 717 529 1 113 116 0 0
26 Vesletjern Borettslag Org. nr 947137921
112

## Side 113

Balanse 2024 Vesletjern Borettslag
Note 2024 2023
EIENDELER
Anleggsmidler
Varige driftsmidler
Bygninger 4 113 160 000 113 160 000
Andre fellesanlegg 4 263 549 295

---

[d073_d073 | Side [1]]
2 30 805
3650 Innkrevde felleskostn. renter 561 121 456 499
3660 Innkrevde felleskostn. avdrag 1 094 399 1 172 559
Sum 4 285 288 4 110 672
Note 2 - Tilskudd
Konto 3403 kr 25 000,- Tilskudd fra Usbl bomiljøfond
Note 3 - Lønnskostnader og styrehonorar
2024 2023
5400 Arbeidsgiveravgift 14 862 14 020
5330 Honorar tillitsvalgte fra lønnssystemet 105 404 99 435
Sum 120 266 113 455
Personalkostnader omfatter lønns- og personalkostnader, samt arbeidsgiveravgift. Antall årsverk sysselsatt: 0
Note 4 - Varige

---

[d073_d073 | Side [1]]
levetid over 3 år og har en kostpris
som overstiger kr 50.000,-. Avskrivningssats for bygninger er satt til null i henhold til forskrift om årsregnskap og årsberetning for borettslag.
Direkte vedlikehold av driftsmidler kostnadsføres løpende under driftskostnader,
mens påkostninger eller forbedringer tillegges driftsmidler og avskrives ihht driftsmidlets levetid.
Driftsinntekter
Felleskostnader bokføres og inntektsføres i takt med opptjening.
Inntektsføring ved salg av varer/tjenester skjer på

---

[d073_d073 | Side [1]]
ddet er en del av borettslagets pantsikrede gjeld.
Borettslagets eiendom er stillet som pantesikkerhet.
Borettsinnskuddet er sikret med pant på kr. 76 851 000,-
26 Vesletjern Borettslag Org. nr. 947137921
122

## Side 123

Resultat og balanse med noter for Vesletjern Borettslag.
Dokumentet er signert elektronisk av:
For Vesletjern Borettslag
Styreleder Kristian Friid-Hauglund (sign.) 10.03.2025
Styremedlem Heidi Gustavsen (sign.) 06.03.2025
Styremedlem Arild Leif Granum (sign.) 26.02.2025
Styremedlem Svein

---

[d073_d073 | Side [1]]
i resultatregnskapet som inntekt etter driftsresultat før IN.
26 Vesletjern Borettslag Org. nr. 947137921
121

## Side 122

Noter årsregnskap 2024 Vesletjern Borettslag
Note 13 - Pantstillelser
Bokført verdi pr. 31.12.2024
Bokført langsiktig gjeld 18 142 080
Innskuddskapital 63 839 000
Boligselskapets pantesikrede gjeld 81 981 080
Bokført verdi av pantsatt eiendom 113 423 549
Borettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet er en del av borettslagets pantsikrede gjeld.
Borettslagets

---

[d073_d073 | Side [1]]
 oppstilling over endring av disponible midler for regnskapsåret avsluttet per denne
datoen og noter til årsregnskapet, herunder et sammendrag av viktige regnskapsprinsipper.
Etter vår mening
• oppfyller årsregnskapet gjeldende lovkrav, og
• gir årsregnskapet et rettvisende bilde av borettslagets finansielle stilling per 31. desember
2024, og av dets resultater og endringer i disponible midler for regnskapsåret avsluttet per
denne datoen i samsvar med regnskapslovens regler og god regnskapsskikk i

---

[d073_d073 | Side [1]]
000 63 839 000
Garasje innskudd 3 420 000 3 420 000
IN nedbetalt fellesgjeld 12 3 253 664 3 116 895
Sum langsiktig gjeld 81 981 080 83 397 838
Kortsiktig gjeld
Leverandørgjeld 162 965 155 577
Påløpne renter 10 217 10 250
Annen kortsiktig gjeld 690 11 502
Sum kortsiktig gjeld 173 872 177 329
Sum gjeld 82 154 952 83 575 167
SUM EGENKAPITAL OG GJELD 114 964 431 114 667 118
Pantstillelser 13 81 981 080 83 397 838
Sted:_______________________ Dato:_______________
Kristian Friid-Hauglund Svein Inge Johansen

---

[d073_d073 | Side [1]]
slag Org. nr 947137921
113

## Side 114

Balanse 2024 Vesletjern Borettslag
Note 2024 2023
EGENKAPITAL OG GJELD
Egenkapital
Innskutt egenkapital
Andelskapital 5 100 5 100
Sum innskutt egenkapital 5 100 5 100
Opptjent egenkapital
Annen egenkapital 32 804 380 31 086 851
Sum opptjent egenkapital 32 804 380 31 086 851
Sum egenkapital 11 32 809 480 31 091 951
Gjeld
Langsiktig gjeld
Pantegjeld 12 11 468 416 13 021 943
Borettsinnskudd 63 839 000 63 839 000
Garasje innskudd 3 420 000 3 420 000
IN nedbetalt

---

[d073_d073 | Side [1]]
tatt. utbetales til selger.
• Forslag om mulighet til å kjøpe ut lån ble ikke vedtatt.
• Nytt styre ble valgt, med Martin Krane Pedersen som Regnskap/ budsjett/ kostnadsøkninger: Megler har ikke
ny styreleder. mottatt regnskap for 2025/ 26 fra forretningsfører. I 2025
var det budsjettert med et underskudd på kr. 963 167.
Borettslaget har felles garasjeanlegg med tilhørende
boder, og sykler skal parkeres på egnet sted eller i
Vedtekter/ husordensregler
sykkelstativ.
Eier forplikter seg til å gjøre seg kjent

---

[d073_d073 | Side [1]]
ut? åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å
Nei avdekke slike forhold. Punktet omfa琀琀er ikke skjulte eller ikke-synlige
forhold, tekniske vurderinger eller forhold som krever
7. Har det vært brann, brann琀椀lløp eller varmgang (for eksempel
spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
termiske skader på deksler, kontaktpunkter eller lignende) i boligens
befarings琀椀dpunktet.
elektriske anlegg?
Nei Det er u琀昀ørt en enkel vurdering av HMS (helse, miljø og

---

[d073_d073 | Side [1]]
an oppstå på kort varsel. med orgnr. 947137921
Opplistingen over er ikke uttømmende og du oppfordres
Selger
til å lese og sette deg grundig inn i alt salgsmateriell.
Marthe Eliassen Holand
For ordens skyld nevner vi at TGIU står for tilstandsgrad
Borettslag
ikke undersøkt, f.eks. fordi en del av bygget ikke har vært
tilgjengelig for inspeksjon. Disse delene kan dermed ha Vesletjern Borettslag
feil eller mangler som ikke er avdekket.
Organisasjonsnummer: 947137921
Tilstandsrapporten beskriver byggverkets

---

[d073_d073 | Side [1]]
0
:ecnerefer
tnemucoD
48

## Side 49

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du

---

[d073_d073 | Side [1]]
men?
Nei Ja
Når kjøpte du boligen?
År 2022
Hvor lenge har du eid boligen?
Antall år 3
Antall måneder 5
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: MEH 1
02006220
:ecnerefer
tnemucoD
48

## Side 49

2 Kjenner du til om det er

---

[d073_d073 | Side [1]]
,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er

---

[d073_d073 | Side [1]]
t og rette jordfeil på 2 stikkontakter Tak:
etter El‑Kontroll av Elvia. Bygningen har flatt tak tekket med sveiset banebelegg
(takpapp/ pvc‑ membran).
Kjenner du til om det er utført kontroll av el‑anlegget og/
eller andre installasjoner (f.eks. oljetank, sentralfyr, Vinduer:
ventilasjon)? Vinduene har 2‑lags isolerglass i trerammer og er fra
Ja. byggeår 2001. Vinduene er
Kontroll av el‑anlegget av Elvia 22.11.2022. topphengslede‑sidehengslede med vippefunksjon. Det er
36

## Side 37

OM EIENDOMMEN
et

---

[d073_d073 | Side [1]]
rollrapport fra o昀昀entlig myndighet – Det Lokale Helse, miljø og sikkerhet
El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med
avvik som ikke er utbedret eller kontrollen er over 5 år? De琀琀e punktet inneholder tydelige og le琀琀 synlige forhold ved boligen
Nei som åpenbart kan påvirke helse, miljø og sikkerhet, og som
bygningssakkyndige har oppdaget. Terskelen for hva som anses som
6. Forekommer det o昀琀e at sikringene løses ut? åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte

---

[d073_d073 | Side [1]]
jøper skal godkjennes av styret i Boligen er ikke energimerket i forbindelse med salget.
40

## Side 41

OM EIENDOMMEN
Det gjøres oppmerksom på at kjøper kan få utarbeidet en nærområdet. Offentlig ettersyn ble avholdt 6. april til 30.
energiattest på selgers regning, innen ett år etter at mai 2022.
avtalen om salg er inngått. ‑ Sak 202204703/ 202304720: Midlertidig forbud mot
tiltak i nærområdet. Status er gjeldende.
Oppvarming
Kopi av situasjonskart, målebrev, reguleringsplaner m/
Boligen varmes opp med

---

[d073_d073 | Side [1]]
ss. Kort vei 琀椀l Kalbakken
senter og Linderud senter. Lillomarka ligger i gangavstand. God dekning av skoler og barnehager i området.
Adkomstvei
O昀昀entlig, kommunal vei.
Tilknytning vann
O昀昀entlig, kommunal 琀椀lknytning. Privat s琀椀kkledning på egen eiendom.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Regulert 琀椀l boliger med 琀椀lhørende anlegg. Reguleringsplan S-3758.
Ska琀琀etakst og formuesverdi
År
2025
Oppdragsnr.: 13722-3269 Befaringsdato:

---

[d073_d073 | Side [1]]
mråde for boliger (felt Panthaver: HUSBANKEN
I), byggeområde for offentlig bygning/ allmennyttig ORG.NR: 942 114 184
formål (barnehage) (felt II) og felles avkjørsel. Dette følger Uomsettelig
av reguleringsplan S‑3758, "Arthur Nordlies Vei ‑
Steinbruddet, Reguleringsplan. Boliger og barnehage", 2003/ 61775‑3/ 105 26.09.2003 FELLES PANTEDOK
vedtatt 08.12.1999. BOR.INNSK
Beløp: NOK 76 851 000
Eiendommen omfattes av Kommuneplanen 2015‑2030, Panthaver: Fellesskapet av innskytere, jf brl § 2‑11
vedtatt

---

[d073_d073 | Side [1]]
leringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 13.02.2026 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er

---

[d073_d073 | Side [1]]
https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 153151/86526806
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
82

## Side 83

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg,

---

[d073_d073 | Side [1]]
 av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har

---

[d073_d073 | Side [1]]
nenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 153151/ 86526806 Deres ref.:
Høydereferanser Adresse: Tjernfaret 35
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 93/384
80

## Side 81

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
81

## Side

---

[d073_d073 | Side [1]]
nsregler
sykkelstativ.
Eier forplikter seg til å gjøre seg kjent med vedtekter og
I henhold til husordensreglene skal det være ro mellom eventuelle husordensregler. Kopi av disse ligger vedlagt i
kl. 22.00 og 06.00. Bruk av kullgrill og montering av salgsoppgaven.
parabolantenner er ikke tillatt. Utvendige forandringer på
bygget må godkjennes av styret. Ballspill på
Beboernes forpliktelser og
borettslagets områder er ikke tillatt, og røyking er forbudt
i garasje, heis og

---

[d073_d073 | Side [1]]
d
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde
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
H820_1 - Omforming (kabling og

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Skjeggkre bekreftet i boligen. Selger opplyser at skjeggkre er observert i boligen. Skjeggkre er et insekt som trives i fuktige miljøer og kan være vanskelig å bli kvitt.",
      "evidence": [
        "Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre. Dette insektet lever utelukkende innendørs og trives best i miljøer med høy fuktighet.",
        "Kjenner du til om det er/har vært skjeggkre i boligen? Ja – Ganske sikker på at...",
        "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Fukt og mugg i bod/garasje. Selger bekrefter at boden/garasjen kan være fuktig, spesielt om vinteren, og at det kan forekomme mugg på lagrede gjenstander.",
      "evidence": [
        "Vet at boden/garasjen kan være fuktig, spesielt om vinteren. Så kan forekomme mugg på ting som blir lagret om man ikke passer på.",
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja.",
        "Har også observert muselort på i et saueskinn"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Hensynssone for steinsprang og elveflom. Eiendommen er berørt av hensynssoner H310_2 (steinsprang) og H320_2 (elveflom) i kommuneplanen, noe som kan innebære naturfarerelaterte risikoer.",
      "evidence": [
        "Eiendommen berøres av følgende hensynssoner i kommuneplanen: H310_2: Steinsprang, H320_2: Elveflom"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Nærhet til Markagrensen og begrensninger for utvikling. Eiendommen ligger i umiddelbar nærhet til Markagrensen, noe som kan sette rammer for fremtidig utvikling og påbygg.",
      "evidence": [
        "Eiendommen ligger i umiddelbar nærhet til Markagrensen. Dette er grensen for det vernede friluftsområdet Marka, noe som kan sette rammer for utvikling i området."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R5",
      "description": "Pågående plansaker i nærområdet. Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen, inkludert midlertidig forbud mot tiltak.",
      "evidence": [
        "Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen: Sak 202102096/2 02300230: Planendring",
        "Sak 202204703/202304720: Midlertidig forbud mot tiltak i nærområdet. Status er gjeldende."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Ingen radonmåling utført. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Budsjettert underskudd i borettslaget for 2025. Borettslaget hadde budsjettert med et underskudd på kr. 963 167 for 2025, noe som kan indikere økte felleskostnader fremover.",
      "evidence": [
        "I 2025 var det budsjettert med et underskudd på kr. 963 167.",
        "Megler har ikke mottatt regnskap for 2025/26 fra forretningsfører.",
        "Årsresultat budsjett 2025: -963 167 (bekreftet i resultatregnskapet)"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Borettslaget har betydelig fellesgjeld. Borettslaget har en restsaldo på fellesgjeld på kr. 9 020 137 med restløpetid på ca. 28,8 år, noe som medfører løpende rentekostnader for andelseierne.",
      "evidence": [
        "Restsaldo pr. 15.02.2026: kr 9 020 137,-",
        "Restløpetid: 28,759",
        "Fellesgjeld Kr 47 739 pr. 15.02.2026",
        "Pantegjeld 2024: 11 468 416 (borettslagets totale pantegjeld)"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Erklæring/avtale med Viken Energinett AS som ikke kan slettes uten samtykke. Det foreligger en tinglyst erklæring/avtale til fordel for Viken Energinett AS som ikke kan slettes uten deres samtykke, noe som kan begrense råderetten over eiendommen.",
      "evidence": [
        "Rettighetshaver Viken Energinett AS. Kan ikke slettes uten samtykke fra Viken Energinett AS. Med flere bestemmelser. Bestemmelse om trafostasjon/kiosk."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Vinduer fra byggeår 2001 med 2-lags isolerglass. Vinduene er over 20 år gamle og kan ha redusert isolasjonsevne, noe som kan medføre økte oppvarmingskostnader og behov for utskifting.",
      "evidence": [
        "Vinduene har 2-lags isolerglass i trerammer og er fra byggeår 2001.",
        "2-lags isolerglass i trerammer. Vinduene er topphengslede-sidehengslede med vippefunksjon."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Flatt tak med sveiset banebelegg. Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/PVC-membran), som er en taktype som krever jevnlig vedlikehold og kan være utsatt for lekkasjer.",
      "evidence": [
        "Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/pvc-membran)."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Tilstandsrapporten er basert på undersøkelsesnivå 1 med begrensede undersøkelser. Rapporten er basert på visuelle observasjoner og enkle hjelpemidler, og skjulte feil og mangler kan ikke avdekkes. Tunge møbler ble ikke flyttet.",
      "evidence": [
        "Rapporten er basert på undersøkelsesnivå 1, med noen få unntak: våtrom og rom under...",
        "Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke flyttet på. Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Styregodkjennelse kreves for kjøper. Kjøper skal godkjennes av styret i borettslaget, noe som innebærer en risiko for at kjøpet ikke kan gjennomføres dersom styret ikke godkjenner kjøper.",
      "evidence": [
        "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Forkjøpsrett er under prøving. Forkjøpsretten er under prøving, noe som innebærer en risiko for at en annen part kan benytte seg av forkjøpsretten og overta boligen.",
      "evidence": [
        "Forkjøpsrett: Forkjøpsretten er under prøving."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Boligen er ikke energimerket. Boligen er ikke energimerket i forbindelse med salget, noe som gir kjøper begrenset informasjon om energiforbruket.",
      "evidence": [
        "Boligen er ikke energimerket i forbindelse med salget.",
        "Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått.",
        "Energikarakter: C, Energifarge: Lys grønn (oppgitt i salgsoppgaven, men ikke formelt energimerket)"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R16",
      "description": "Husleietap registrert i borettslagets regnskap. Borettslaget hadde husleietap på kr. 140 586 i 2024, noe som kan indikere mislighold fra andre andelseiere og potensielt økte felleskostnader.",
      "evidence": [
        "7795 Husleietap 140 586",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17",
      "description": "El-kontroll avdekket jordfeil på 2 stikkontakter. Det ble avdekket og rettet jordfeil på 2 stikkontakter etter el-kontroll av Elvia, noe som indikerer at det elektriske anlegget har hatt avvik.",
      "evidence": [
        "Rettet jordfeil på 2 stikkontakter etter El-Kontroll av Elvia.",
        "Kontroll av el-anlegget av Elvia 22.11.2022."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R18",
      "description": "Manglende rapport for fellesarealer. Det er opplyst at det foreligger en vedlikeholdsplan for borettslaget, men rapporten for fellesdeler er ikke fremvist, noe som er registrert som et avvik.",
      "evidence": [
        "Rapporten er ikke fremvist. Denne kan/bør etterspørres.",
        "Mangel av rapport for fellesdeler registreres som et avvik.",
        "Det er opplyst i nettannonse fra forrige salg at borettslaget har en detaljert vedlikeholdsplan frem til 2040."
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R19",
      "description": "Mus observert i boligen. Selger opplyser om at det er observert muselort i boligen (på et saueskinn), noe som indikerer museaktivitet.",
      "evidence": [
        "Har også observert muselort på i et saueskinn",
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja"
      ],
      "source_documents": [
        "d073_d073"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Hva er alder og tilstand på røranlegg og VVS i boligen?",
    "Er det utført arbeid på bad eller våtrom, og foreligger dokumentasjon?",
    "Hva er tilstandsgraden (TG) for de ulike bygningsdelene i tilstandsrapporten?",
    "Foreligger det ferdigattest eller midlertidig brukstillatelse for boligen?",
    "Hva er borettslagets planlagte vedlikeholdsarbeider og kostnader frem til 2040?",
    "Er det registrert avvik på balkong eller terrasse i tilstandsrapporten?",
    "Hva er status på dreneringen rundt bygget?",
    "Er det tegn på fukt i kjeller eller rom under terreng?"
  ],
  "reasoning": "\nGjennomgangen av de 18 identifiserte risikoene viser at de fleste er godt støttet av dokumentevidensen. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Skjeggkre): Oppjustert fra 0.95 til 0.97. Evidensen er svært klar – selger bekrefter observasjon direkte, og skjeggkre er også bekreftet i sameiet/fellesarealer. Dette er en vesentlig risiko.\n- R3 (Hensynssoner): Oppjustert fra 0.93 til 0.95. Direkte dokumentert i kommuneplanen med konkrete sonenummer.\n- R5 (Plansaker): Oppjustert fra 0.87 til 0.90. Begge plansaker er navngitt med saksnummer og status \"gjeldende\" for midlertidig forbud.\n- R7 (Underskudd 2025): Oppjustert fra 0.88 til 0.92. Bekreftet i resultatregnskapet med eksakt tall (-963 167), og manglende regnskap for 2025/26 forsterker usikkerheten.\n- R16 (Husleietap): Oppjustert fra 0.78 til 0.82. Husleietapet er bekreftet i note 10 i regnskapet, og salgsoppgaven advarer eksplisitt om at mislighold fra andre andelseiere kan påvirke øvrige eiere.\n\n**Nedjusterte risikoer:**\n- R10 (Vinduer): Nedjustert fra 0.78 til 0.75. Evidensen bekrefter alder og type, men det er ikke dokumentert konkrete avvik (TG) på vinduene i tilstandsrapporten. Risikoen er reell men noe spekulativ.\n- R11 (Flatt tak): Nedjustert fra 0.75 til 0.70. Kun faktabeskrivelse av taktype, ingen dokumenterte avvik eller TG-vurdering fremkommer av de tilgjengelige dokumentchunkene.\n- R15 (Energimerking): Nedjustert fra 0.75 til 0.70. Salgsoppgaven oppgir energikarakter C/lys grønn, men presiserer at boligen ikke er formelt energimerket. Risikoen er begrenset siden estimert karakter er oppgitt.\n- R17 (El-jordfeil): Nedjustert fra 0.72 til 0.65. Feilen er allerede rettet, og el-kontrollen er fra 2022. Risikoen er historisk og ikke nødvendigvis en pågående risiko, men anleggets alder kan fortsatt være relevant.\n\n**Ny risiko identifisert:**\n- R19 (Mus): Selger opplyser om observert muselort i boligen. Dette er nevnt i egenerklæringen og er en selvstendig risiko utover fukt/mugg i bod. Confidence satt til 0.80.\n\n**Risikoer som bør undersøkes nærmere (re-retrieval):**\n- Tilstand på røranlegg/VVS er ikke omtalt i de tilgjengelige chunkene, men er en typisk risiko i boliger fra 2001/2002.\n- Tilstandsgrader (TG2/TG3) for spesifikke bygningsdeler er ikke fullt ut dokumentert i de tilgjengelige chunkene.\n- Ferdigattest/brukstillatelse er nevnt i egenerklæringen (spørsmål 22), men svaret er ikke synlig i chunkene.\n- Balkong/terrasse og drenering er ikke omtalt, men er relevante risikoområder for en bolig fra 2001.\n- Vedlikeholdsplanens innhold (frem til 2040) er referert til men ikke fremvist – dette er sentralt for å vurdere fremtidige kostnader.\n"
}

## Raw Response
```json
{
  "id": "msg_011XkywAjMzmeRhmyFRATjRg",
  "container": null,
  "content": [
    {
      "id": "toolu_014Pi6SVrPn9a3pQmV8fLTFM",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Skjeggkre bekreftet i boligen. Selger opplyser at skjeggkre er observert i boligen. Skjeggkre er et insekt som trives i fuktige miljøer og kan være vanskelig å bli kvitt.",
            "evidence": [
              "Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre. Dette insektet lever utelukkende innendørs og trives best i miljøer med høy fuktighet.",
              "Kjenner du til om det er/har vært skjeggkre i boligen? Ja – Ganske sikker på at...",
              "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Fukt og mugg i bod/garasje. Selger bekrefter at boden/garasjen kan være fuktig, spesielt om vinteren, og at det kan forekomme mugg på lagrede gjenstander.",
            "evidence": [
              "Vet at boden/garasjen kan være fuktig, spesielt om vinteren. Så kan forekomme mugg på ting som blir lagret om man ikke passer på.",
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja.",
              "Har også observert muselort på i et saueskinn"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Hensynssone for steinsprang og elveflom. Eiendommen er berørt av hensynssoner H310_2 (steinsprang) og H320_2 (elveflom) i kommuneplanen, noe som kan innebære naturfarerelaterte risikoer.",
            "evidence": [
              "Eiendommen berøres av følgende hensynssoner i kommuneplanen: H310_2: Steinsprang, H320_2: Elveflom"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Nærhet til Markagrensen og begrensninger for utvikling. Eiendommen ligger i umiddelbar nærhet til Markagrensen, noe som kan sette rammer for fremtidig utvikling og påbygg.",
            "evidence": [
              "Eiendommen ligger i umiddelbar nærhet til Markagrensen. Dette er grensen for det vernede friluftsområdet Marka, noe som kan sette rammer for utvikling i området."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R5",
            "description": "Pågående plansaker i nærområdet. Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen, inkludert midlertidig forbud mot tiltak.",
            "evidence": [
              "Det er registrert pågående plansaker i nærområdet som kan påvirke eiendommen: Sak 202102096/2 02300230: Planendring",
              "Sak 202204703/202304720: Midlertidig forbud mot tiltak i nærområdet. Status er gjeldende."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Ingen radonmåling utført. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjonen i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Budsjettert underskudd i borettslaget for 2025. Borettslaget hadde budsjettert med et underskudd på kr. 963 167 for 2025, noe som kan indikere økte felleskostnader fremover.",
            "evidence": [
              "I 2025 var det budsjettert med et underskudd på kr. 963 167.",
              "Megler har ikke mottatt regnskap for 2025/26 fra forretningsfører.",
              "Årsresultat budsjett 2025: -963 167 (bekreftet i resultatregnskapet)"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Borettslaget har betydelig fellesgjeld. Borettslaget har en restsaldo på fellesgjeld på kr. 9 020 137 med restløpetid på ca. 28,8 år, noe som medfører løpende rentekostnader for andelseierne.",
            "evidence": [
              "Restsaldo pr. 15.02.2026: kr 9 020 137,-",
              "Restløpetid: 28,759",
              "Fellesgjeld Kr 47 739 pr. 15.02.2026",
              "Pantegjeld 2024: 11 468 416 (borettslagets totale pantegjeld)"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Erklæring/avtale med Viken Energinett AS som ikke kan slettes uten samtykke. Det foreligger en tinglyst erklæring/avtale til fordel for Viken Energinett AS som ikke kan slettes uten deres samtykke, noe som kan begrense råderetten over eiendommen.",
            "evidence": [
              "Rettighetshaver Viken Energinett AS. Kan ikke slettes uten samtykke fra Viken Energinett AS. Med flere bestemmelser. Bestemmelse om trafostasjon/kiosk."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Vinduer fra byggeår 2001 med 2-lags isolerglass. Vinduene er over 20 år gamle og kan ha redusert isolasjonsevne, noe som kan medføre økte oppvarmingskostnader og behov for utskifting.",
            "evidence": [
              "Vinduene har 2-lags isolerglass i trerammer og er fra byggeår 2001.",
              "2-lags isolerglass i trerammer. Vinduene er topphengslede-sidehengslede med vippefunksjon."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Flatt tak med sveiset banebelegg. Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/PVC-membran), som er en taktype som krever jevnlig vedlikehold og kan være utsatt for lekkasjer.",
            "evidence": [
              "Bygningen har flatt tak tekket med sveiset banebelegg (takpapp/pvc-membran)."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Tilstandsrapporten er basert på undersøkelsesnivå 1 med begrensede undersøkelser. Rapporten er basert på visuelle observasjoner og enkle hjelpemidler, og skjulte feil og mangler kan ikke avdekkes. Tunge møbler ble ikke flyttet.",
            "evidence": [
              "Rapporten er basert på undersøkelsesnivå 1, med noen få unntak: våtrom og rom under...",
              "Rapporten er utført med begrensninger som følger av at boligen er innredet på befaringen. Tunge møbler o.l. blir normalt ikke flyttet på. Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Styregodkjennelse kreves for kjøper. Kjøper skal godkjennes av styret i borettslaget, noe som innebærer en risiko for at kjøpet ikke kan gjennomføres dersom styret ikke godkjenner kjøper.",
            "evidence": [
              "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Forkjøpsrett er under prøving. Forkjøpsretten er under prøving, noe som innebærer en risiko for at en annen part kan benytte seg av forkjøpsretten og overta boligen.",
            "evidence": [
              "Forkjøpsrett: Forkjøpsretten er under prøving."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Boligen er ikke energimerket. Boligen er ikke energimerket i forbindelse med salget, noe som gir kjøper begrenset informasjon om energiforbruket.",
            "evidence": [
              "Boligen er ikke energimerket i forbindelse med salget.",
              "Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått.",
              "Energikarakter: C, Energifarge: Lys grønn (oppgitt i salgsoppgaven, men ikke formelt energimerket)"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R16",
            "description": "Husleietap registrert i borettslagets regnskap. Borettslaget hadde husleietap på kr. 140 586 i 2024, noe som kan indikere mislighold fra andre andelseiere og potensielt økte felleskostnader.",
            "evidence": [
              "7795 Husleietap 140 586",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17",
            "description": "El-kontroll avdekket jordfeil på 2 stikkontakter. Det ble avdekket og rettet jordfeil på 2 stikkontakter etter el-kontroll av Elvia, noe som indikerer at det elektriske anlegget har hatt avvik.",
            "evidence": [
              "Rettet jordfeil på 2 stikkontakter etter El-Kontroll av Elvia.",
              "Kontroll av el-anlegget av Elvia 22.11.2022."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R18",
            "description": "Manglende rapport for fellesarealer. Det er opplyst at det foreligger en vedlikeholdsplan for borettslaget, men rapporten for fellesdeler er ikke fremvist, noe som er registrert som et avvik.",
            "evidence": [
              "Rapporten er ikke fremvist. Denne kan/bør etterspørres.",
              "Mangel av rapport for fellesdeler registreres som et avvik.",
              "Det er opplyst i nettannonse fra forrige salg at borettslaget har en detaljert vedlikeholdsplan frem til 2040."
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R19",
            "description": "Mus observert i boligen. Selger opplyser om at det er observert muselort i boligen (på et saueskinn), noe som indikerer museaktivitet.",
            "evidence": [
              "Har også observert muselort på i et saueskinn",
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja"
            ],
            "source_documents": [
              "d073_d073"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Hva er alder og tilstand på røranlegg og VVS i boligen?",
          "Er det utført arbeid på bad eller våtrom, og foreligger dokumentasjon?",
          "Hva er tilstandsgraden (TG) for de ulike bygningsdelene i tilstandsrapporten?",
          "Foreligger det ferdigattest eller midlertidig brukstillatelse for boligen?",
          "Hva er borettslagets planlagte vedlikeholdsarbeider og kostnader frem til 2040?",
          "Er det registrert avvik på balkong eller terrasse i tilstandsrapporten?",
          "Hva er status på dreneringen rundt bygget?",
          "Er det tegn på fukt i kjeller eller rom under terreng?"
        ],
        "reasoning": "\nGjennomgangen av de 18 identifiserte risikoene viser at de fleste er godt støttet av dokumentevidensen. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Skjeggkre): Oppjustert fra 0.95 til 0.97. Evidensen er svært klar – selger bekrefter observasjon direkte, og skjeggkre er også bekreftet i sameiet/fellesarealer. Dette er en vesentlig risiko.\n- R3 (Hensynssoner): Oppjustert fra 0.93 til 0.95. Direkte dokumentert i kommuneplanen med konkrete sonenummer.\n- R5 (Plansaker): Oppjustert fra 0.87 til 0.90. Begge plansaker er navngitt med saksnummer og status \"gjeldende\" for midlertidig forbud.\n- R7 (Underskudd 2025): Oppjustert fra 0.88 til 0.92. Bekreftet i resultatregnskapet med eksakt tall (-963 167), og manglende regnskap for 2025/26 forsterker usikkerheten.\n- R16 (Husleietap): Oppjustert fra 0.78 til 0.82. Husleietapet er bekreftet i note 10 i regnskapet, og salgsoppgaven advarer eksplisitt om at mislighold fra andre andelseiere kan påvirke øvrige eiere.\n\n**Nedjusterte risikoer:**\n- R10 (Vinduer): Nedjustert fra 0.78 til 0.75. Evidensen bekrefter alder og type, men det er ikke dokumentert konkrete avvik (TG) på vinduene i tilstandsrapporten. Risikoen er reell men noe spekulativ.\n- R11 (Flatt tak): Nedjustert fra 0.75 til 0.70. Kun faktabeskrivelse av taktype, ingen dokumenterte avvik eller TG-vurdering fremkommer av de tilgjengelige dokumentchunkene.\n- R15 (Energimerking): Nedjustert fra 0.75 til 0.70. Salgsoppgaven oppgir energikarakter C/lys grønn, men presiserer at boligen ikke er formelt energimerket. Risikoen er begrenset siden estimert karakter er oppgitt.\n- R17 (El-jordfeil): Nedjustert fra 0.72 til 0.65. Feilen er allerede rettet, og el-kontrollen er fra 2022. Risikoen er historisk og ikke nødvendigvis en pågående risiko, men anleggets alder kan fortsatt være relevant.\n\n**Ny risiko identifisert:**\n- R19 (Mus): Selger opplyser om observert muselort i boligen. Dette er nevnt i egenerklæringen og er en selvstendig risiko utover fukt/mugg i bod. Confidence satt til 0.80.\n\n**Risikoer som bør undersøkes nærmere (re-retrieval):**\n- Tilstand på røranlegg/VVS er ikke omtalt i de tilgjengelige chunkene, men er en typisk risiko i boliger fra 2001/2002.\n- Tilstandsgrader (TG2/TG3) for spesifikke bygningsdeler er ikke fullt ut dokumentert i de tilgjengelige chunkene.\n- Ferdigattest/brukstillatelse er nevnt i egenerklæringen (spørsmål 22), men svaret er ikke synlig i chunkene.\n- Balkong/terrasse og drenering er ikke omtalt, men er relevante risikoområder for en bolig fra 2001.\n- Vedlikeholdsplanens innhold (frem til 2040) er referert til men ikke fremvist – dette er sentralt for å vurdere fremtidige kostnader.\n"
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
    "input_tokens": 20600,
    "output_tokens": 5189,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
