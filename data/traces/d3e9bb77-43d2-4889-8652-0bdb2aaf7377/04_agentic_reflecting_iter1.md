# Trace: agentic_reflecting_iter1
- **Run ID:** d3e9bb77-43d2-4889-8652-0bdb2aaf7377
- **Tidspunkt:** 2026-03-25T02:44:18.701041+00:00
- **Varighet:** 142.71s
- **Input tokens:** 24949
- **Output tokens:** 7285

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
Risiko 1: Alvorlige råteskader i utvendig veggkonstruksjon (TG3). Det er påvist råteskader i tømmerkonstruksjonen og bordkledningen. Bygningen er nesten 200 år gammel, noe som øker risikoen for skjulte skader utover det som er observert.
  Confidence: 0.98
  Evidens: Det er påvist råteskader i veggkonstruksjonen.; Det er påvist spredte råteskader i bordkledningen.; Trekledning/vannbrett nede langs kledning har råteskader.; Det ble observert råteskader i tømmerkonstruksjon/kledning.; Konstruksjonene må sikres mot råte, sopp og skadedyr. Skifte råteskadet trekledning.; Kostnadsestemat: 50 000 - 100 000; Estimert beløp kan avvike, da konstruksjonen er svært gammel.

Risiko 2: Store høydeforskjeller i etasjeskiller/gulv (TG3). Alle leilighetene har avvik med målte høydeforskjeller over godkjente grenser. I leilighet H0201 er det målt 3,3 cm gjennom stue/kjøkken og 4,5 cm skjevhet på soverom innenfor 2 meter. Drager er understøttet av en stålvinkel og bør understøttes med stender.
  Confidence: 0.97
  Evidens: Målt høydeforskjell på over 30 mm gjennom hele rommet.; Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.; Stikkontroll høydeforskjell i leilighet H0201: Høydeforskjell på 3,3 cm. gjennom stue/kjøkken. 4,5 cm. skjevt på soverom målt innenfor en lengde på 2 meter.; Alle leilighetene har avvik når det gjelder høydeforskjell.; Det anbefales å understøtte drageren med en stender. I dag er den understøttet av en stålvinkel.; Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter.

Risiko 3: Innvendige trapper har fått TG3. Det er påvist avvik knyttet til åpning mellom vegg og trapperepos på mer enn 10 cm, og manglende rekkverk/håndløper. Dette utgjør en sikkerhetsrisiko.
  Confidence: 0.95
  Evidens: Innvendige trapper – STORE ELLER ALVORLIGE AVVIK; Åpning mellom vegg og trapperepos mer enn 10 cm.; Rekkverk må monteres for å lukke avviket.; Kostnadsestemat: Under 10 000

Risiko 4: Elektrisk anlegg er ikke undersøkt (TGIU). Det foreligger ikke fullstendig dokumentasjon på el-anlegget, og det er utført arbeid av både faglærte og ufaglærte/egeninnsats. Dette innebærer en ukjent risiko for brann og sikkerhet.
  Confidence: 0.95
  Evidens: Tekniske installasjoner > Elektrisk anlegg – KONSTRUKSJONER SOM IKKE ER UNDERSØKT; Arbeid utført av fusa elektro, fjell elektro; Svar Ja, av faglært og ufaglært/egeninnsats/dugnad; Bl.a lagt opp strøm i u-etasje bakre bygg.; Det er en utvidet el-kontroll i overgangen kjøp/salg. Dette er en forenklet kontroll begrenset til de spørsmål som fremkommer under.

Risiko 5: Ulovlige bruksendringer og manglende godkjenninger. Flere rom og arealer er tatt i bruk uten at dette er godkjent av bygningsmyndighetene. Blant annet er inngangspartier ombygget og bakhuset delt i to leiligheter uten søknad. Soverom i H0202 er opprinnelig byggemeldt som kjøkken og bad. Deler av bad og kjøkken i H0301 er byggemeldt som bod. Loftet er innredet som leilighet uten godkjenning for varig opphold.
  Confidence: 0.97
  Evidens: Forrige eier har i perioden 2008-2010/12 bygget om inngangspartiene og delt bakhuset i to leiligheter. Dette er ikke omsøkt.; Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei; H0202: Soverom er opprinnelig byggemeldt som kjøkken og bad, og det er satt inn et mindre vindu på dagens soverom.; H0301: Deler av bad og kjøkken er byggemeldt som bod.; soverommet her er derfor ikke godkjent for varig opphold.; Kjøper overtar ansvar og risiko for videre fortsatt bruk. Dette gjelder også eventuelle pålegg fra det offentlige.

Risiko 6: Manglende ferdigattest og byggedokumentasjon. Eiendommen ble oppført tidlig 1800-tall og det foreligger ingen dokumentasjon fra den tiden. Dagens planløsning stemmer ikke overens med mottatte tegninger. Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.
  Confidence: 0.96
  Evidens: Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden.; Det foreligger ferdigatt på rørleggerarbeid fra 1955.; Det foreligger ikke tegninger – Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.; Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med mottatte tegninger datert 21.09.1955 og 18.08.1992.; Kjenner du til om det foreligger manglende brukstillatelse eller ferdigattest? Nei/Ja – Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden.

Risiko 7: Fukt og dreneringsproblemer. Det er observert fukt i jordsmonn under bad, og mer enn halvparten av forventet levetid på drenering er overskredet. Det mangler utvendig fuktsikring av grunnmuren. Tidligere lekkasje i overgang kledning/tak på mellombygg.
  Confidence: 0.93
  Evidens: Det ble inspisert fra inspeksjonsluke i fellesgang. Noe fukt i jordsmonn under bad, og noe fukt over jordsmonn, på befaringsdagen.; Det mangler eller på grunn av alder er det sannsynlig at det mangler utvendig fuktsikring av grunnmuren - ved kjeller/underetasje.; Mer enn halvparten av forventet levetid på drenering er overskredet.; En liten lekkasje/drypp i overgang kledning/tak på mellombygg. Vann har kommet inn bak kledning og ned mot grunnmurstopp og sannsynlig innfor grunnmuren.; Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre...

Risiko 8: Rotteplager og skadedyr. Det er bekreftet rotteplager i eiendommen, med funn i blindrom under fremre bygg og på loftet. Selv om problemet er forsøkt utbedret, er det ingen garanti for at det ikke vil oppstå igjen.
  Confidence: 0.88
  Evidens: I strøket er det en del rotteplager. Det var høst 2022 oppdaget rotter i blindrom under fremre bygg, registrert også på loftet.; Kontaktet Anticimex som ga gode råd om bekjempelse som jeg har fulgt og problemet har ikke oppstått igjen.; Det anbefales likevel å smøre synlig trevirke med egnet mitmiddel for å unngå, og være i forkant på eventuelle angrep.

Risiko 9: Taktekking og beslag har fått TG2, med risiko for TG3. Taktekkingen er gammel (sist utført antatt midten av 1970-tallet) og det er behov for å etterse beslagsløsninger. Løs del til nedløp på taket er observert.
  Confidence: 0.92
  Evidens: Taktekking grunnet alder – TG2; Nedløp og beslag grunnet alder og manglende snøfangere – TG2; Det ble opplyst at sist taktekking kan være utført på midten av 1970-tallet.; Her er det også behov for å etterse beslagsløsninger.; Løs del til nedløp på taket.; Manglende tetteløsning mot vegg for å unngå at vann renner bak beslag.

Risiko 10: Eiendommen er underlagt strenge kulturminnevernbestemmelser. Den ligger innenfor hensynssoner for kulturmiljø (trehusbebyggelse og historisk sentrum) og er båndlagt etter lov om kulturminner. Dette begrenser muligheten for endringer og rehabilitering, og kan medføre økte kostnader.
  Confidence: 0.92
  Evidens: Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø, Trehusbebyggelse. dekningsgrad 100%; Kulturmiljø, Historisk sentrum, dekningsgrad 100%; Båndlegging, Båndlagt etter lov om kulturminner, dekningsgrad 100%; Obs vinduene er originale (tidlig 1800-talls) og «verneverdige».

Risiko 11: Ukjent servitutt fra 1894. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet er ukjent, noe som kan innebære uforutsette forpliktelser for kjøper.
  Confidence: 0.88
  Evidens: Tinglyst 27.11.1894 – Dokumentnr: 900205 – Bestemmelse om gjerde; Dette er en eldre servitutt. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet i servitutten er derfor uvisst.

Risiko 12: Tinglyst rømningsvei over eiendommen til fordel for naboeiendommen (gnr. 165, bnr. 744). Vedlikehold av rømningsveien påhviler den tjenende eiendommen (gnr. 165, bnr. 745), og rettigheten gjelder i all fremtid.
  Confidence: 0.9
  Evidens: Tinglyst 10.07.2025 – Dokumentnr: 805942 – Erklæring/avtale, Bestemmelse om rømningsvei på nærmere...; Rett til å bruke i nødstilfelle og holde rømningsvei over Gnr.: 165 Bnr.: 745 i Bergen Kommune; Vedlikehold for opprettholdelse av rømningsveien over Gnr. 165 Bnr. 745 (tjenende eiendom), tilfaller Gnr. 165 Bnr. 744 (herskende eiendom).; Rettigheten gjelder i all fremtid og følger eiendommen.

Risiko 13: Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har samme sikkerhet for å få dekket eventuelle krav mot selger ved skjulte feil og mangler som oppdages etter overtakelse.
  Confidence: 0.9
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 14: Vaskerom i fellesarealer er ikke ferdigstilt og TG3 kan ikke utelukkes. Vaskerommet er ikke innredet/ferdigstilt, og det er observert fukt i tilliggende konstruksjoner.
  Confidence: 0.87
  Evidens: Vaskerom er ikke innredet/ferdigstilt.; Tilstandsgrad 2 settes på grunnlag av observasjoner. Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre...; Fukt i tilliggende konstruksjoner på vaskerom, fellesområder 1. etasje – TG2/TGIU

Risiko 15: Energikarakter G – laveste energiklasse. Boligen er ikke energimerket i forbindelse med salget, men energikarakteren er oppgitt som G. Dette indikerer svært høye energikostnader og kan kreve betydelige investeringer for å forbedre energistandarden.
  Confidence: 0.85
  Evidens: Energikarakter: G; Boligen er ikke energimerket i forbindelse med salget.

Risiko 16: Utvendige trapper har fått TG2 grunnet åpninger i rekkverk og rekkverkshøyder som ikke er i henhold til dagens krav. Dette utgjør en sikkerhetsrisiko, særlig for barn.
  Confidence: 0.88
  Evidens: Utvendige trapper grunnet åpninger i rekkverk og rekkverkshøyder ikke er i henhold til krav i dagens forskrifter – TG2

Risiko 17: Bad i leilighet H0301 har flere TG2-avvik, inkludert sprekker i fliser og fuger på vegger og gulv, samt usikker membran/tettesjikt. TG3 kan ikke utelukkes for sluk, membran og tettesjikt.
  Confidence: 0.9
  Evidens: Overflater vegger og himling på bad H0301 grunnet at flisfuger og fliser har riss/sprekker – TG2; Overflater gulv på bad H0301 grunnet sprekker i fliser – TG2; Sluk, membran og tettesjikt på bad H0301 – TG2; Tilstandsgrad 3 kan ikke utelukkes.

Risiko 18: Eiendommen selges av et aksjeselskap (Oppussing Kameratene AS), noe som innebærer at salget ikke regnes som forbrukerkjøp. Eiendommen selges «som den er» med begrenset selgeransvar etter avhendingsloven § 3-9, og kjøper har svakere rettsvern enn ved forbrukerkjøp.
  Confidence: 0.92
  Evidens: Selger: Oppussing Kameratene AS; Dersom selger er en juridisk enhet, eller en fysisk person som handler i næringssammenheng, regnes kjøpet ikke som et forbrukerkjøp.; Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.; På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere.

Risiko 19: Varmtvannstank har fått TG3 grunnet ikke tilfredsstillende forhold. Dette kan innebære umiddelbar utskiftning og risiko for vannskader.
  Confidence: 0.88
  Evidens: Varmtvannstank grunnet ikke tilfredsstillende – TG3 (nevnt i sammendrag av avvik)

Risiko 20: Pågående byggeprosjekter i nærheten kan påvirke eiendommens omgivelser og verdi. Reguleringsplaner i nærheten åpner for betydelig utbygging og endret bygningsmasse i området.
  Confidence: 0.75
  Evidens: Godkjente tiltak i nærheten av eiendommen: Eiendom 165/856, 165/803, 165/730, 165/735, 165/722 – diverse bruksendringer og fasadeendringer.; PlanID: 71480000 – legge til rette for ny bruk av eksisterende bygning, Kjødehallen. Åpnes for oppføring av et nybygg.; Dokken (o_SGG02), Bjørgeboden (BKB1) og Dokkhuset (BK1) skal bevares og skal tas særskilt hensyn til. (Planen er vedtatt, men utbyggingen er ikke ferdigstilt).

Dokumentkontekst:
[d122_d122 | Side [1]]
e få en 琀椀lstandsgrad 2 eller 3 uten at det
nødvendigvis er krav om at avviket må utbedres.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full

---

[d122_d122 | Side [1]]
om regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere

---

[d122_d122 | Side [1]]
tig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og

---

[d122_d122 | Side [1]]
k og trapper osv., vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer

---

[d122_d122 | Side [1]]
kjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på

---

[d122_d122 | Side [1]]
gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke

---

[d122_d122 | Side [1]]
rdsmonn, på befaringsdagen. Tilstandsgrad 3 kan ikke
‑ Utvendige trapper grunnet åpninger i rekkverk og utelukkes.
rekkverkshøyder ikke er i henhold til krav i dagens ‑ Overflater og innredning på kjøkken H0301 grunnet løst
forskrifter. bandebatteri/ kjøkkenbatteri og at det mangler fug
‑ Andre utvendige forhold grunnet gulvbelegg er sprukket mellom benkeplate og vegger.
opp ved inngang til leilighetene i andre etasje.
‑ Overflater innvendig 2 grunnet noen overflater mangler Følgende bygningsdeler er ikke

---

[d122_d122 | Side [1]]
høy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når

---

[d122_d122 | Side [1]]
1 BERGEN 5918 FREKHAUG
Tilstandsrapport
• Målt høydeforskjell på over 30 mm gjennom hele rommet.
Tilstandsgrad 3 gis med bakgrunn i standardens krav 琀椀l godkjente
måleavvik.
S琀椀kkontroll høydeforskjell i leilighet H0201: Høydeforskjell på 3,3 cm.
gjennom stue/ kjøkken. 4,5 cm. skjevt på soverom målt innenfor en
lengde på 2 meter.
Alle leilighetene har avvik når det gjelder høydeforskjell. De琀琀e kan
forventes da huset nærmest Munkebekksmauet nærmer seg 200 år, og
琀椀dligere rehabilitering ikke har ta琀琀

---

[d122_d122 | Side [1]]
 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt

---

[d122_d122 | Side [1]]
EN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil

---

[d122_d122 | Side [1]]
).
Det anbefales å understø琀琀e drageren med en stender. I dag er den
understø琀琀et av en stålvinkel.
Vurdering av avvik:
• Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter.
Tilstandsgrad 3 gis med bakgrunn i standardens krav 琀椀l godkjente
måleavvik.
Oppdragsnr.: 19969-1050 Befaringsdato: 06.03.2025 Side: 15 av 37
71

## Side 72

Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
Tilstandsrapport
• Målt høydeforskjell på

---

[d122_d122 | Side [1]]
VVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Ved avvik som ikke krever umiddelbare 琀椀ltak (ingen umiddelbar

---

[d122_d122 | Side [1]]
nnet at det ikke er montert kjeller/ underetasje.
rekkverk eller håndløper. ‑ Grunnmur og fundamenter grunnet alder.
‑ Terrengforhold grunnet alder.
Følgende bygningsdeler har fått tilstandsgrad 2: ‑ Overflater vegger og himling på bad H0301 grunnet at
‑ Taktekking grunnet alder flisfuger og fliser har riss/ sprekker.
‑ Nedløp og beslag grunnet alder og manglende ‑ Overflater gulv på bad H0301 grunnet sprekker i fliser.
snøfangere. ‑ Sluk, membran og tettesjikt på bad H0301 grunnet
‑ Veggkonstruksjon

---

[d122_d122 | Side [1]]
lende te琀琀eløsning mot vegg for å unngå at
Det ble inspisert fra inspeksjonsluke i fellesgang. Noe fukt i jordsmonn vann renner bak beslag.
under bad, og noe fukt over jordsmonn, på befaringsdagen. Løs del 琀椀l nedløp på taket.
FELLESOMRÅDER, 1 ETG. > VASKEROM
Årstall: 2010 Kilde: Eier
Vurdering av avvik: Generell
• Det er avvik: Beskrivelse
Tilstandsgrad 2 se琀琀es på grunnlag av observasjoner. Vaskerom er ikke innredet/ ferdigs琀椀lt.
Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre

---

[d122_d122 | Side [1]]
de 65

40
30
20
10
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
llatnA
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som ikke krever 琀椀ltak
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
Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918

---

[d122_d122 | Side [1]]
BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
STORE ELLER ALVORLIGE AVVIK
Utvendig > Veggkonstruksjon - 2 Gå til side
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Innvendig > Innvendige trapper Gå til side
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Tekniske installasjoner > Elektrisk anlegg Gå til

---

[d122_d122 | Side [1]]
 det en utvidet el-kontroll i overgangen
kjøp/ salg. De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål som
fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse
spørsmålene i bransjestandarden NS3600. De琀琀e kan ikke sammenlignes
med en fullstendig kontroll av branntekniske forhold av o昀昀entlig
myndighet, eller en vurdering av boligens branntekniske forhold eller
prosjektering fra en rådgiver med spesialkompetanse. En
bygningssakkyndig har verken kompetanse 琀椀l å gi slik veiledning

---

[d122_d122 | Side [1]]
ående tresprosser. Malte
kan være relevant for kjøper å vite om? ytterdører med glassfelt inn til leilighetene. Ståltrapp fra
‑ Det blir vedlagt et notat fra forrige eier ang diverse ting bakgård og til leilighetene i andre etasje.
som er utført på bygget av han.
Følgende bygningsdeler har fått tilstandsgrad 3:
43

## Side 44

OM EIENDOMMEN
‑ Utvendig veggkonstruksjon grunnet råteskader i vanninntrengning.
veggkonstruksjonen og spredte råteskader i ‑ Varmtvannstank grunnet ikke tilfredsstillende

---

[d122_d122 | Side [1]]
e trapper.
Vurdering av avvik:
• Det er påvist andre avvik:
Noen eksempler:
Noen over昀氀ater mangler avslutninger som eks. listverk.
Åpning mellom vegg og trapperepos mer enn 10 cm. Buler i parke琀琀 med inngang 琀椀l bad (leilighet H0301).
Forhøyninger gulv, overgang kjøkken/ stue (H0202.
Andre utvendige forhold
Konsekvens/琀椀ltak
• Det må foretas 琀椀ltak for å lukke avviket.
Vurdering av avvik:
• Det er avvik: Montere listverk som mangler.
Buler/ forhøyninger utbedres ved rehabilitering.
Gulvbelegg er sprukket

---

[d122_d122 | Side [1]]
atelse, datert18.02.2026. Saksnr: tinglyst følgende heftelser og rettigheter som følger
202517117. eiendommens matrikkel ved overskjøting til ny
Eiendom 165/ 803. Fasadeendring bolig m.m. hjemmelshaver:
Igangsettingstillatelse, datert 23.02.2023. Saksnr:
202006560. Tinglyst 27.11.1894 ‑ Dokumentnr: 900205 ‑ Bestemmelse
Eiendom 165/ 803. Fasadeendring bolig. Rammetillatelse, om gjerde
datert 01.09.2023. Saksnr: 202216772 Dette er en eldre servitutt. Megler har forsøkt å innhente
Eiendom 165/ 730.

---

[d122_d122 | Side [1]]
kjent hos bygningsmyndighetene?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
Eiendommen ble oppført tidlig 1800 så det foreligger ingen

---

[d122_d122 | Side [1]]
 standardlisten, men som ikke Kjenner du til om det er/ har vært f.eks. sprekker i mur,
finnes på eiendommen, vil heller ikke følge med i salget. skjeve gulv eller lignende?
Alt utstyr og installasjoner som medfølger overtas slik de ‑ Med hensyn til byggeår og byggemåte er det viss
er, uten garanti, med mindre det foreligger en gjeldende skjevhet i gulvenes overflater. Se også tilstandsrapport.
42

## Side 43

OM EIENDOMMEN
Kjenner du til om det er/ har vært sopp/ råteskader/ Byggemåte
insekter/ skadedyr

---

[d122_d122 | Side [1]]
eldre servitutt. Megler har forsøkt å innhente
Eiendom 165/ 730. Bruksendring loft og etablering av servitutten, men har ikke lyktes i å finne den i gammel
innvendig trapp m.m. Rammetillatelse, datert 01.09.2023. grunnbok. Det nøyaktige innholdet i servitutten er derfor
Saksnr: 202216772. uvisst.
Eiendom 165/ 735. Bruksendring bolig.
Igangsettingstillatelse , datert 15.01.2026. Saksnr: Tinglyst 10.07.2025 ‑ Dokumentnr: 805942 ‑ Erklæring/
202517546. avtale, Bestemmelse om rømningsvei på nærmere
Eiendom

---

[d122_d122 | Side [1]]
琀琀erdør. Smijernsgjerder og skifertrinn/ reposer
mellom husene i Munkebekksmauet.
Tinglyste/andre forhold
På generelt grunnlag anbefales det å sjekke grunnboken. Grunnboken er et o昀昀entlig register, som viser 琀椀nglyste re琀紀gheter og forpliktelser i
eiendom.
Sjekk kan gjøres på www.seeiendom.no.
Siste hjemmelsovergang
Kjøpesum År Type
8 000 000 2023 Annet
Oppdragsnr.: 19969-1050 Befaringsdato: 06.03.2025 Side: 34 av 37
90

## Side 91

Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165

---

[d122_d122 | Side [1]]
KB1) og Dokkhuset (BK1) skal bevares og skal tas
Del av Gnr 165, Nøstet ‑ Verftet ‑ Klosteret, datert særskilt hensyn til. (Planen er vedtatt, men utbyggingen
28.06.1993, regulert til boligformål. er ikke ferdigstilt).
45

## Side 46

OM EIENDOMMEN
Godkjente tiltak i nærheten av eiendommen: Tinglyste heftelser
Eiendom 165/ 856. Bruksendring fra tilleggsdel til Tinglyste heftelser og rettigheter: På eiendommen er det
hoveddel. Rammetillatelse, datert18.02.2026. Saksnr: tinglyst følgende heftelser og

---

[d122_d122 | Side [1]]
jelder i all fremtid og følger eiendommen. Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper og
Vilkår: selger.
Ved evt sletting av denne rettighet, må gjeldende
Bygningsmyndighet gi samtykke til dette før sletting kan
gjennomføres. Forsikring
Boligselgerforsikring: Selger har ikke tegnet
Legalpant: Kommunen har legalpant som sikkerhet for boligselgerforsikring.
betaling av kommunale avgifter og eventuell
eiendomsskatt. Legalpant er et pant som ikke vises i Boligkjøperforsikring: Kjøper har

---

[d122_d122 | Side [1]]
skal kun benyttes i nødstilfeller og ved
bruksnummer på Plan‑ og bygningsetatens hjemmeside. evakuering. Det gis også rett til å holde rømningsveien fri
for hindringer.
46

## Side 47

OM EIENDOMMEN
5. Vedlikehold og evt. framtidige kostnader:
Vedlikehold for opprettholdelse av rømningsveien over
Kontrakts-
Gnr. 165 Bnr. 745 (tjenende eiendom), tilfaller Gnr. 165 Bnr.
744 (herskende eiendom).
grunnlag
6. Rettighetens varighet:
Rettigheten gjelder i all fremtid og følger eiendommen. Overtakelse
Tidspunkt

---

[d122_d122 | Side [1]]
elger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER

---

[d122_d122 | Side [1]]
 eller mangler ved boligen de
Eiendommen er tilknyttet offentlig vann‑ og neste fem årene. Les mer om Boligkjøperforsikring i
avløpssystem. Stikkledningene fra eiendommen og ut til vedlagte materiell eller på https:/ / www.
det kommunale nettet er private, og vedlikeholdsansvaret soderbergpartners.no/ eiendom/ boligkjoper/
for disse påhviler sameiet. Adkomst til eiendommen skjer
via offentlig vei.
Lovanvendelse
Regelverk og generelle opplysninger
Utleie Boligen selges med det inventar og utstyr som i

---

[d122_d122 | Side [1]]
rskende eiendom):
Eiendom 165/ 744. Tilbygg bolig m.m. Gnr.: 165 Bnr.: 744 i Bergen Kommune
Igangsettingstillatelse, datert 17.02.2023. Saksnr:
201904293. 2. Retten skal gjelde over (tjenende eiendom):
Eiendom 165/ 727. Bruksendring m.m. Gnr.: 165 Bnr.: 745 i Bergen Kommune
Igangsettingstillatelse, datert 11.04.2024. Saksnr:
202314767. 3. Type rettighet:
Eiendom 165/ 722. Bruksendring. Igangsettingstillatelse, Rett til å bruke i nødstilfelle og holde rømningsvei over
datert 26.04.2024. Saksnr: 202317492.

---

[d122_d122 | Side [1]]
nt er et pant som ikke vises i Boligkjøperforsikring: Kjøper har anledning til å tegne
grunnboksutskriften, og har prioritet foran for eksempel boligkjøperforsikring. Vedlagt i salgsoppgaven følger
tinglyste banklån på eiendommen. informasjon om Boligkjøperforsikring fra Söderberg &
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
Vei, vann og avløp oppdages uventede feil eller mangler ved boligen de
Eiendommen er tilknyttet offentlig

---

[d122_d122 | Side [1]]
ei Ja
Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden. Det foreligger ferdigatt på
Beskrivelse
rørleggerarbeid fra 1955. Det bakre bygget ble gjenoppført/ombygget i 1992, ferdigattest foreligger
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse forrige eiers sin egenerklæring.
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste

---

[d122_d122 | Side [1]]
leveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi vi
fastmontert.
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir

---

[d122_d122 | Side [1]]
a det offentlige. Dette omfatter også små utleie‑leiligheter til 2 familieboenheter fordelt på to
risikoen for om midlertidig brukstillatelse / ferdigattest vil bygningsmasser:
bli gitt, og alle kostnader i den forbindelse. Kjøper
aksepterer denne risikoen og selger/ megler skal med 1. etg.
dette holdes skadesløse for ethvert eventuelt pålegg/ Bolig 1 innsetting av ny interntrapp
39

## Side 40

OM EIENDOMMEN
Bolig 2 innsetting av ny interntrapp, tidligere felles areal
bruksendres til hoveddel og innlemmes

---

[d122_d122 | Side [1]]
an være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Beskrivelse det blir vedlagt et notat fra forrige eier ang diverse ting som er utført på bygget av han.
Initialer selger: EF 3
93006230
:ecnerefer
tnemucoD
55

## Side 56

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller

---

[d122_d122 | Side [1]]
 det er/ har vært sopp/ råteskader/ Byggemåte
insekter/ skadedyr på eiendommen som rotter, mus, maur I forbindelse med salget er det blitt utført en
eller lignende? tilstandsrapport av en kvalifisert bygningssakkyndig.
‑ I strøket er det en del rotteplager. Det var høst 2022 Rapporten gir en grundig vurdering av boligens tilstand
oppdaget rotter i blindrom under fremre bygg, registrert og påpeker eventuelle avvik som ble oppdaget under
også på loftet. Kontaktet Anticimex som ga gode råd om befaringen.

---

[d122_d122 | Side [1]]
rerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, av faglært og ufaglært/egeninnsats/dugnad
Beskrivelse forrige eier har gjort følgende: Taktekking på bakre bygg fornyet. Skiftet veluxvindu på loft bygg mot gate
Arbeid utført av Drengenes Tak, delvis egeninnsats
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
Beskrivelse eiendommen leies ut med 4

---

[d122_d122 | Side [1]]
er etablert en innvendig trapp for tilkomst til loft. Det
finnes ikke opprinnelige byggetegninger av loftet, og
eiendommen
soverommet her er derfor ikke godkjent for varig opphold.
H0202: Soverom er opprinnelig byggemeldt som kjøkken
Type eiendom og bad, og det er satt inn et mindre vindu på dagens
Eieform: Eiet soverom. Videre er det satt inn kjøkken og bad i stue.
Objektstype: Tomannsbolig
Kjøper overtar ansvar og risiko for videre fortsatt bruk.
Dette gjelder også eventuelle pålegg fra

---

[d122_d122 | Side [1]]
 Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
Beskrivelse av eiendommen
Bygård bygget i 1825, 208 m² i bruksareal(BRA). 3 etasjer det ikke observert 昀氀ere 琀椀lfeller siden ny琀琀år, 2023.
inkludert lo昀琀 (innredet som leilighet), 琀椀l sammen 昀椀re
boenheter/ leiligheter. Bruksarealet inkluderer også felles Tidligere eier opplyser at det har vært gjort utbedringer/
vaskerom/ bod i 1 1 etg. (ikke innredet pr. befaringsdag). rehabiliteringer gjennom årenes løp fra 2016 og frem 琀椀l dags
dato.
Eiendommen består

---

[d122_d122 | Side [1]]
kludert i
BRA-e. Det er ikke fremvist dokumentasjon på at rommet tilhører
boenheten, med mindre dette er angitt særskilt. Rom utenfor
boenheten kan omdisponeres av borettslaget/sameiet og dette
kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023
og eierseksjonsloven har ulik definisjon av fellesareal. Ved
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik:
“Delen av bygning som brukes av to eller flere bruksenheter eller
til bygningens forvaltning, drift eller vedlikehold.
•I en

---

[d122_d122 | Side [1]]
dning. Bergenskledning/ perlesta昀昀.
Vurdering av avvik:
• Det er påvist råteskader i veggkonstruksjonen.
• Det er påvist spredte råteskader i bordkledningen.
Trekledning/ vannbre琀琀 nede langs kledning har råteskader.
Det ble observert råteskader i tømmerkonstruksjon/ kledning.
Konsekvens/琀椀ltak
• Konstruksjonene må sikres mot råte, sopp og skadedyr.
Ski昀琀e råteskadet trekledning.
Takrenner og nedløp i plast.
Es琀椀mert beløp kan avvike, da konstruksjonen er svært gammel.
Kostnadses琀椀mat: 50 000 - 100

---

[d122_d122 | Side [1]]
昀氀ere boenheter 158 50
fellesområder 1 etg. m/ felles vaskerom 0 36
Kommentar
Boligbygg med 昀氀ere boenheter
fellesområder 1 etg. m/ felles S-rom gjelder fellesområder (fellesgang og
vaskerom
Oppdragsnr.: 19969-1050 Befaringsdato: 06.03.2025 Side: 32 av 37
88

## Side 89

Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
Befarings - og eiendomsopplysninger
Befaring
Dato Til stede Rolle
06.3.2025 Torgeir Wiig Taks琀椀ngeniør
Espen

---

[d122_d122 | Side [1]]
 malt i fellesgang ved med tanke på y琀琀ertaket som er tekket med betongstein. Her
hovedinngangsdør mot felles bakplass. er det også behov for å e琀琀erse beslagsløsninger. Det ble
opplyst at sist taktekking kan være u琀昀ørt på midten av 1970-
Firmaet har også montert baderomsinnredning i leilighet 2 tallet. Fellesdører (dører i første etasje bør rehabiliteres/
etg. første bygg (H0201) og har u琀昀ørt fortløpende vedlikehold by琀琀es).
som naturlig hører med. Tilfredss琀椀llende ven琀椀lasjon av leilighetene bør

---

[d122_d122 | Side [1]]
 var ikke krav på bygge琀椀dspunktet.
• Rekkverk må monteres for å lukke avviket.
Kostnadses琀椀mat: Under 10 000
Låsedeksel bør festes.
Innvendige dører - 2
Beskrivelse
Pro昀椀lerte trefyllingsdører.
Fellesarealer/ bodrom
Beskrivelse
Fellesområde 1 etg: Betong/ murvegger. Betonggulv. Påbegynte
arbeider med rominndeling/ stenderverk, rør 琀椀l avløp/ vann/ elektrisk.
montert toale琀琀 som er i dri昀琀 (sluk ved toale琀琀). Opplegg for innredning
av baderom med dusj.
Leilighet H0201; malt tretrapp mellom andre etg. og

---

[d122_d122 | Side [1]]
het) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og standardtekster, som utskri昀琀 og annen kopiering 琀椀l bruk som grunnlag for 琀椀lsvarende rapporter, bare 琀椀lla琀琀 når det

---

[d122_d122 | Side [1]]
 19969-1050 Befaringsdato: 06.03.2025 Side: 10 av 37
66

## Side 67

Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
Tilstandsrapport
BOLIGBYGG MED FLERE BOENHETER
Byggeår
1825
Standard
Bygården holder normalt god standard.
Vedlikehold
Fortløpende behov for vedlikehold må påregnes. Tidligere eier har
lagt ned betydelige beløp i vedlikehold og oppgraderinger.
Bildet er ta琀琀 gjennom velux-takvindu.
UTVENDIG
Taktekking - 2
Taktekking

---

[d122_d122 | Side [1]]
erdig oppsat. Og rommet er
klart for videre innsats. Det er også lagt opp �l å kunne innrede kjøkkenkrok.
Det er avsat arealer for boder for leilighetene. Dete her jeg ikke fullført
Ny eier kan vurdere å innrede egen liten boenhet som i �lfelle må omsøkes.
Obs vinduene er originale (�dlig 1800-talls) og «verneverdige».
Jeg ski�et delvis og oppgraderte fasadene mot naboene i 2020 – �lkomst fra nabogårdenes
bakgårder. Jeg har egne avtaler om �lkomst.
Nå i vår (2023) replanerte jeg steinhellene i bakgården og

---

[d122_d122 | Side [1]]
lesområder, 1 etg. > Vaskerom > Gå til side
Ven琀椀lasjon
Våtrom > Fellesområder, 1 etg. > Vaskerom > Gå til side
Tilliggende konstruksjoner våtrom
AVVIK SOM KAN KREVE TILTAK
Ingen umiddelbare kostnader Utvendig > Taktekking Gå til side
Tiltak under kr 10 000
Tiltak mellom kr 10 000 - 50 000 Utvendig > Nedløp og beslag Gå til side
Tiltak mellom kr 50 000 - 100 000
Utvendig > Veggkonstruksjon Gå til side
Tiltak mellom kr 100 000 - 300 000
Tiltak over kr 300 000
Utvendig > Takkonstruksjon/Lo昀琀 Gå til

---

[d122_d122 | Side [1]]
nom årenes løp fra 2016 og frem 琀椀l dags
dato.
Eiendommen består av 2 boligbygg med en bakgård mellom
dem. Det er blant annet bygget ny琀琀 bad i en av leilighetene. Det er
ski昀琀et kledning på bakveggene/ bakbygg med 琀椀lkomst fra
Det foreligger ramme琀椀llatelse, ref. «sammenslåing av 4 små naboeiendommene. På bakbygget er det også sveiset på ny琀琀
utleie-leiligheter 琀椀l 2 familieboenheter fordelt på to takbelegg, montert velux-takvindu, og nye beslag mot
bygningsmasser» (se vedlagt ramme琀椀llatelse).

---

[d122_d122 | Side [1]]
 i H0201 er ski昀琀et.
Det er også påbegynt oppgradering av 1 etg. fellesarealer (bakbygg).
Krav for rom 琀椀l varig opphold
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
Kommentar: Brann琀椀lsyn i 2016. Ingen merknader, annet enn at brannslokkingsapparat må琀琀e fornyes (se 琀椀lsynsrapport.).
fellesområder 1 etg. m/ felles vaskerom
Bruksareal BRA m²
Etasje Internt bruksareal (BRA-i) Eksternt bruksareal (BRA-e) Innglasset balkong SUM Terrasse- og balkongareal
(BRA-b) (TBA)
1.

---

[d122_d122 | Side [1]]
da konstruksjonen er svært gammel.
Kostnadses琀椀mat: 50 000 - 100 000
Beslag mot nabo bør kontrolleres for te琀琀het (bildet er ta琀琀 i front av
bolig).
Det vil være naturlig å sjekke/ montere nye beslagsløsninger ved ny Bildet viser råteskade i nedre del av tømmerkonstruksjon (bildet er ta琀琀
tekking. over gammelt vindu i bakgården). Tømmerkonstruksjonen er nesten 200
år.
Veggkonstruksjon
Beskrivelse Takkonstruksjon/Lo昀琀
Tømmerkonstruksjon. Synlig tømmervegg i trappeløp (leil. H0201). Punktet må sees i

---

[d122_d122 | Side [1]]
ellesområder
til godkjent måleavvik. 1. etasje
‑ Pipe og ildsted grunnet alder. ‑ Sanitærutstyr og innredning på vaskerom,
‑ Innvendige dører grunnet at noen dører tar i karm og dør fellesområder 1. etasje
mangler låsedeksel. ‑ Ventilasjon på vaskerom, fellesområder 1. etasje
‑ Fellesarealer/ bodrom grunnet alder. ‑ Fukt i tilliggende konstruksjoner på vaskerom,
‑ Avløpsrør grunnet alder. fellesområder 1. etasje
‑ Ventilasjon grunnet anbefaling om å lage en tetteløsning ‑ Elektrisk anlegg
mellom

---

[d122_d122 | Side [1]]
 felles vaskerom
Anvendelse
Byggeår Kommentar
1992 Bakbygget ble bygget opp igjen over grunnmur, e琀琀er
brann i 1992.
Standard
Fellesgang og kjellerrom/ bodrom er del av bakbygget, og ble bygget opp
igjen e琀琀er brann i 1992.
Pågående arbeider i 1 etg. Viser 琀椀l rapporten i sin helhet, for nærmere
informasjon.
Vedlikehold
Eier har u琀昀ørt betydelige arbeider i 1 etg,/ fellesrom (gjelder ny琀琀
betonggulv og påbegynt vaskerom og bad). Viser forøvrig 琀椀l rapporten i sin
helhet, for nærmere informasjon.
Merk:

---

[d122_d122 | Side [1]]
 skiftet.
Tidligere baderom er fornyet og delt i to. Vaskerommet er
Standard
tatt i bruk, men vegger og gulv er ikke overflatebehandlet.
Boligeiendom med flere boenheter, tre to‑roms og en I evt. fremtidig baderom er røropplegg ferdig oppsatt, og
tre‑roms. I tillegg kommer fellesarealer. rommet er klart for videre innsats. Det er også lagt opp til
Eiendommen består av to bolighus med mellombygg i å kunne innrede kjøkkenkrok.
bakgård som binder de sammen. To boenheter i hvert Det er avsatt arealer for boder

---

[d122_d122 | Side [1]]
lder, noe som kan innebære behov for
eller andre installasjoner? utbedringer. Bygningsdeler som er merket med TGIU er
‑ bkktilsyn i 2016 og 2025. ikke blitt vurdert av takstmannen.
Kjenner du til om det har vært utført arbeid på terrasse/ Beskrivelsen av boligen nedenfor er hentet direkte fra
garasje/t ak/ fasade? tilstandsrapporten:
‑ Forrige eier har gjort følgende: Taktekking på bakre
bygg fornyet. Skiftet veluxvindu på loft bygg mot gate. Byggemåte:
Arbeid utført av Drengenes Tak, delvis egeninnsats.

---

[d122_d122 | Side [1]]
e琀椀llatelse, ref. sammenslåing av 4 små utleie-leiligheter 琀椀l 2 familieboenheter fordelt på to
bygningsmasser (se vedlagt ramme琀椀llatelse).
Brannceller
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Eier har kun u琀昀ørt nødvendig dri昀琀 og vedlikehold. Rømningsvinduer på lo昀琀 i H0201 er ski昀琀et.
Det er også påbegynt oppgradering av 1 etg.

---

[d122_d122 | Side [1]]
 og nye beslag mot
bygningsmasser» (se vedlagt ramme琀椀llatelse). naboeiendommene. I bakbygg 1 etasje er det fellesarealer.
Alle y琀琀errveggene er over terreng, og eier opplyser at det ikke
Dagens eierskap, gjennom Oppussing Kameratene AS, har leid er dreneringsproblemer. I 1.etasje fellesarealer (bakbygg) er
ut leilighetene gjennom Airbnb. det montert rørinstallasjoner med tanke på blant annet bad,
kjøkken. I 琀椀llegg er det gravd ut/ ned for økt takhøyde, samt
Leilighetene ble utleid av 琀椀dligere eier for

---

[d122_d122 | Side [1]]
nlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, av faglært og ufaglært/egeninnsats/dugnad
fra forrige eier: Bl.a lagt opp strøm i u-etasje bakre bygg. i mitt eie har det vært bkk tilsyn på bygget. mindre punkter
Beskrivelse
påpekt og utbedret av fjell elektro
Arbeid utført av fusa elektro, fjell elektro
11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)?
Nei Ja
12 Kjenner du til om det er utført kontroll av el-anlegget

---

[d122_d122 | Side [1]]
kulturminner,
Adresse dekningsgrad 100%
Munkebekksmauet 12, 5011 BERGEN ‑ Faresone, Brannsmitte, dekningsgrad 100%
‑ Gul faresone, Luftkvalitet, dekningsgrad 100%
Gnr. 165, bnr. 745, ideell andel 1/ 1
i Bergen kommune. Planer i nærheten av eiendommen:
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027.
Bystyret legger til grunn at revisjon av
Selger KPA‑bestemmelsene skal sluttføres med vedtak Bystyret
Oppussing Kameratene AS i første kvartal 2027. Hovedmålet med revisjon av
KPA‑bestemmelsene er

---

[d122_d122 | Side [1]]
etegninger, til tross for henvendelse til kommunen.
benyttet til boliger. Et lite uteområde/ bakgård på ca. 20 Det gjøres oppmerksom på at dagens planløsning ikke
m² mellom byggene. Uteområdet er belagt med stemmer overens med mottatte tegninger datert
steinheller, og er avgrenset mot naboer med høyt gjerde. 21.09.1955 og 18.08.1992:
Utvendig ståltrapp mellom første og andre etasje. I front H0301: Deler av bad og kjøkken er byggemeldt som bod.
av boligen (inngangspartiet) er det offentlig gatetun med

---

[d122_d122 | Side [1]]
visningen mangler fast installert erstattes av ny og mer oppdelt bygningsmasse. Det skal
oppvarmingskilde, vil ikke dette bli inkludert i handelen. legges til rette for offentlig tilgjengelige byrom i form av
sjøpromenade, torg, gatetun og gangarealer med mulig
fremtidig forbindelse videre mot Dikkedokken og
Regulerings- og arealplaner Georgernes verft. Dokken (o_SGG02), Bjørgeboden
Eiendommen er i henhold til reguleringsplan Bergenhus. (BKB1) og Dokkhuset (BK1) skal bevares og skal tas
Del av Gnr 165,

---

[d122_d122 | Side [1]]
rbygg. Det åpnes for oppføring av et nybygg på
Info energiklasse arealet mellom eksisterende USF‑bygg og Kjødehallen,
Boligen er ikke energimerket i forbindelse med salget. Det KBA2. Bygningsmassen innenfor planområdet
gjøres oppmerksom på at kjøper kan få utarbeidet en omreguleres fra industri til kombinert formål kultur,
energiattest på selgers regning, innen ett år etter at bevertning og annen næring for å ivareta ny og
avtalen om salg er inngått. eksisterende bruk.
‑ PlanID: 64310000. Bergenhus, Gnr,

---

[d122_d122 | Side [1]]
te kvartal 2027. Hovedmålet med revisjon av
KPA‑bestemmelsene er forenkling, fortgang og
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre
Energimerke gode boliger og nabolag.
Energikarakter: G ‑ PlanID: 71480000. Hensikten med reguleringsplanen er
å legge til rette for ny bruk av eksisterende bygning,
Energifarge: Ikke angitt Kjødehallen, KBA3. Planen legger til rette for at
USF‑verftet, KBA1 og KBA4 bevares og videreføres som
kulturbygg. Det åpnes for oppføring av et nybygg på
Info energiklasse

---

[d122_d122 | Side [1]]
 eller tilsvarende?
Nei Ja
Beskrivelse eiendommen leies ut med 4 leiligheter per dags dato.
17.1 Er ovenfornevnte godkjent hos bygningsmyndighetene?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Forrige eier har i perioden 2008-2010/12 bygget om inngangspartiene og delt bakhuset i to leiligheter. Dette er ikke
Beskrivelse
omsøkt.
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
19 Kjenner du til forslag

---

[d122_d122 | Side [1]]
anninnsig stoppet.
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
Beskrivelse Med hensyn til byggeår og byggemåte er det viss skjevhet i gulvenes overflater. Se også tilstandsrapport
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
I

---

[d122_d122 | Side [1]]
ngen fasadeendringer mot gaten eller på bakhuset mot naboer, kun mellombygget
som er endret. Bakfasaden på huset mot gaten har antakelig hat vindu mot bakgården i 2. etasje. Når
�d det er �ernet eller vindu i 1. etasje eventuelt endret vites ikke.
Dete er ikke omsøkt og om det er søknadsplik�g vet jeg ikke.
Alle leilighetene antas å være oppgradert med nye/oppussete overflater, nye kjøkkeninnredninger, og
nye baderom. Normal bruk og slitasje, jevnt �lsyn og vedlikehold i min eier�d.
Jeg har ståt for dri�,

---

[d122_d122 | Side [1]]
kommune rehabiliterte gatene i området (anta琀琀 på
begynnelsen av 1990-tallet).
4. Er det skader på røykvarslere? I bakgård er det stedvis murt skråkant ved bygning for å lede vann bort
Nei fra bygning.
Konsekvens/琀椀ltak
• Overvåk 琀椀lstanden jevnlig. For å få 琀椀lstandsgrad 0 eller 1 må
dreneringen ski昀琀es ut, men 琀椀dspunktet for når de琀琀e er nødvendig er
vanskelig å si noe om.
Eier har gjort 琀椀ltak langs y琀琀ervegg i bakgård (bygg nærmest
Munkebekksmauet), og har fornyet dreneringsrør under bakken, som
leder

---

[d122_d122 | Side [1]]
kke tegn til pågående aktivitet etter mit på
ingen dokumentasjon fra den tiden. Det foreligger befaringsdagen. Det anbefales likevel å smøre synlig
ferdigatt på rørleggerarbeid fra 1955. Det bakre bygget trevirke med egnet mitmiddel for å unngå, og være i
ble gjenoppført/ ombygget i 1992, ferdigattest foreligger. forkant på eventuelle angrep. Isolerglass i malte
Er det andre forhold av betydning ved eiendommen som trekarmer med gjennomgående tresprosser. Malte
kan være relevant for kjøper å vite om?

---

[d122_d122 | Side [1]]
.
• Det mangler eller på grunn av alder er det sannsynlig at det mangler
Apparatene bør kontrolleres.
utvendig fuktsikring av grunnmuren - ved kjeller/underetasje.
• Mer enn halvparten av forventet leve琀椀d på drenering er overskredet.
3. Er det mangler på røykvarsler i boligen iht. forskri昀琀skrav på
søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985? Kno琀琀eplast ved langs y琀琀ervegg ved hovedinngang. Sannsynligvis fra den
Nei gang Bergen kommune rehabiliterte gatene i området (anta琀琀 på
begynnelsen av

---

[d122_d122 | Side [1]]
t anbefaling om å lage en tetteløsning ‑ Elektrisk anlegg
mellom ventilasjonsdeksler og vegg for unngå
44

## Side 45

OM EIENDOMMEN
Se supplerende tekst i tilstandsrapporten om overnevnte.
Kjøper overtar videre ansvar og risiko. Eiendommen befinner seg innenfor følgende
hensynssoner:
‑ Kulturmiljø, Trehusbebyggelse. dekningsgrad 100%
Øvrig informasjon
‑ Kulturmiljø, Historisk sentrum, dekningsgrad 100%
‑ Båndlegging, Båndlagt etter lov om kulturminner,
Adresse dekningsgrad 100%
Munkebekksmauet 12, 5011

---

[d122_d122 | Side [1]]
 fra 1825 er bygget i et kupert/ skrånende terreng.
Vann kan bli ledet mot bygning, men renner videre nedover i
Munkebekksmauet.
Det er synlig kno琀琀eplast/ fuktsikring langs grunnmur mot gate.
I bakgård har det bli琀琀 u琀昀ørt stedvise 琀椀ltak med tanke på drenering.
Begge byggene er bygget over terreng.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger ikke tegninger
Det foreligger ikke godkjente, byggemeldte tegninger av
dagens

---

[d122_d122 | Side [1]]
dyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
I strøket er det en del rotteplager. Det var høst 2022 oppdaget rotter i blindrom under fremre bygg, registrert også
Beskrivelse på loftet. Kontaktet Anticimex som ga gode råd om bekjempelse som jeg har fulgt og problemet har ikke oppstått
igjen.
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr,

---

[d122_d122 | Side [1]]
nger.
Oppdragsnr.: 19969-1050 Befaringsdato: 06.03.2025 Side: 33 av 37
89

## Side 90

Munkebekksmauet 12, 5011 BERGEN BERGENHUS TAKST OG BYGGTEKNIKK AS
Gnr 165 - Bnr 745 Orrhøy昀氀aten 1
4601 BERGEN 5918 FREKHAUG
Regulering
BERGEN. KOMMUNEPLANENS AREALDEL 2018 - 2030
Endelig vedta琀琀 arealplan
NASJONAL AREALPLANID:
4601_65270000
OPPRINNELIG NASJONAL AREALPLANID:
1201_65270000
PLANTYPE:
Kommuneplanens arealdel
PLANBESTEMMELSER:
Med bestemmelser som egen tekst
LOVREFERANSE:
Plan- og bygningsloven av

---

[d122_d122 | Side [1]]
let er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
•Eiendommens markedsverdi kan ikke baseres på en rent
matematisk beregning i forhold til antall kvadratmeter opplyst i
rapporten. Opplysninger om areal kan altså ikke alene benyttes
for beregning av eiendommens verdi.
•Rom som ligger utenfor boenheten, men som eier har påvist
og/eller opplyst at tilhører boenheten, er oppmålt og inkludert i
BRA-e. Det er ikke fremvist dokumentasjon på at rommet

---

[d122_d122 | Side [1]]
ven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til

---

[d122_d122 | Side [1]]
 du til om det er/ har vært utettheter i terrasse/
garasje/ tak/ fasade?
Innbo og løsøre: Salgsoppgaven inkluderer NEFs ‑ Av forrige eier : En liten lekkasje/ drypp i overgang
standardliste "Oversikt over løsøre og tilbehør", som kledning/ tak på mellombygg. Vann har kommet inn bak
legges til grunn med mindre annet er spesifisert i kledning og ned mot grunnmurstopp og sannsynlig innfor
salgsoppgaven. grunnmuren.
Gjenstander som er nevnt i standardlisten, men som ikke Kjenner du til om det er/ har vært

---

[d122_d122 | Side [1]]
så på loftet. Kontaktet Anticimex som ga gode råd om befaringen. Tilstandsrapporten og selgers egenerklæring
bekjempelse som jeg har fulgt og problemet har ikke er vedlagt salgsoppgaven, og det er viktig at
oppstått igjen. interessenter setter seg grundig inn i disse dokumentene
før bud legges inn.
Kjenner du til om det er/ har vært utført arbeid på
el‑anlegget eller andre installasjoner? Kjøper anses kjent med opplysninger som kommer
‑ Fra forrige eier: Bl.a lagt opp strøm i u‑etasje bakre bygg. tydelig

---

[d122_d122 | Side [1]]
mmet i stand, kan
så langt det er nødvendig, å orientere selger, budgivere og
en budgiver kreve kopi av budjournalen i anonymisert
øvrige interessenter om bud og forbehold. Dersom bud
form.
inngis med en frist som åpenbart er for kort til at
megleren kan avvikle budrunden på en forsvarlig måte
som sikrer selger og interessenter et tilstrekkelig grunnlag
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom.

---

[d122_d122 | Side [1]]
. gjelder som utgangspunkt for hva som inkluderes i salget
– med mindre avvik er tydelig avtalt mellom kjøper og
Selger leverer eiendommen i ryddig og rengjort tilstand. selger.
47

## Side 48

OM EIENDOMMEN
Om informasjonsgrunnlaget Budgivning og selgers vurdering
Opplysninger om boligens størrelse og utforming, både På grunn av ulike ansvarsforhold kan selger velge å
innvendig og utvendig, bygger på informasjon hentet fra prioritere bud fra ikke‑forbrukere, selv om budet er lavere
vedlagte tilstands‑ og

---

[d122_d122 | Side [1]]
forrige eier: Bl.a lagt opp strøm i u‑etasje bakre bygg. tydelig frem i tilstandsrapporten, og det vil ikke være
i mitt eie har det vært bkk tilsyn på bygget. mindre mulig å gjøre slike forhold gjeldende som en mangel.
punkter påpekt og utbedret av fjell elektro. Spesielt forhold som er vurdert med TG2 og TG3 bør
vurderes nøye, da de indikerer avvik fra normal slitasje
Kjenner du til om det er utført kontroll av el‑anlegget og/ og/ eller høy alder, noe som kan innebære behov for
eller andre installasjoner?

---

[d122_d122 | Side [1]]
 å undersøke eiendommen eiendom uten at formålet hovedsakelig er knyttet til
nøye, gjerne sammen med fagperson, før bud gis. næringsvirksomhet.
Dersom kjøper velger å kjøpe uten å ha sett eiendommen,
kan det ikke etter overtakelse reklameres på forhold som En eiendom anses å ha en mangel dersom den ikke
burde ha vært oppdaget ved en ordinær gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere

---

[d122_d122 | Side [1]]
øres gjeldende som en mangel som handler hovedsakelig som ledd i næringsvirksomhet.
ved boligen. Dette gjelder uavhengig av om dokumentene Det vil opplyses hvis konkurrerende bud kommer fra en
er lest. ikke‑forbruker.
Det kan være forskjell mellom boligens faktiske bruk av Forbrukerkjøp – definisjon og vilkår:
rom og det som er godkjent av myndighetene. Alle Et forbrukerkjøp foreligger når en fysisk person kjøper
interessenter anbefales derfor å undersøke eiendommen eiendom uten at formålet hovedsakelig er

---

[d122_d122 | Side [1]]
til å velge hvilket bud som
kjøper setter seg grundig inn i alle salgsdokumentene, aksepteres, og er ikke forpliktet til å velge det høyeste.
herunder salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses for å være kjent med forhold Alle budgivere må ved inngivelse av bud opplyse om de
som er tydelig beskrevet i salgsdokumentene, slike opptrer som forbruker eller som næringsdrivende/ person
forhold kan ikke senere gjøres gjeldende som en mangel som handler hovedsakelig som ledd i

---

[d122_d122 | Side [1]]
eid utført av Arnar Takst Eiendom
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
av forrige eier : En liten lekkasje/drypp i overgang kledning/tak på mellombygg. Vann har kommet inn bak kledning Beskrivelse
og ned mot grunnmurstopp og sannsynlig innfor grunnmuren. Utbedret og vanninnsig stoppet.
7 Kjenner du til om det er/har vært problemer

---

[d122_d122 | Side [1]]
tt. For øvrig vil megler,
et bud med forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold.
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er
Dersom det er viktig for budgiver å bevare sin

---

[d122_d122 | Side [1]]
er er en juridisk enhet, eller en fysisk person
nærmere forklart nedenfor. som handler i næringssammenheng, regnes kjøpet ikke
48

## Side 49

OM EIENDOMMEN
som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
oppfordres til å inngi bud via eiendomsmegler.
Ved slike kjøp selges eiendommen «som den er», og
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene

---

[d122_d122 | Side [1]]
n
Både kjøper og selger er forpliktet til å signere den særskilt avtale mellom partene om noe annet, jf.
standard kjøpekontrakten som er utarbeidet av Emera i avhendingsloven § 3‑5.
forbindelse med eiendomshandler. Kjøpekontrakten kan
gjennomgås hos eiendomsmegleren før budet legges inn. En standard tilbehørsliste utarbeidet av Norges
Ta kontakt med eiendomsmegler dersom det er Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
spørsmål. gjelder som utgangspunkt for hva som inkluderes i salget
– med

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Alvorlige råteskader i utvendig veggkonstruksjon (TG3). Det er påvist råteskader i tømmerkonstruksjonen og bordkledningen. Bygningen er nesten 200 år gammel, noe som øker risikoen for skjulte skader utover det som er observert.",
      "evidence": [
        "Det er påvist råteskader i veggkonstruksjonen.",
        "Det er påvist spredte råteskader i bordkledningen.",
        "Trekledning/vannbrett nede langs kledning har råteskader.",
        "Det ble observert råteskader i tømmerkonstruksjon/kledning.",
        "Konstruksjonene må sikres mot råte, sopp og skadedyr. Skifte råteskadet trekledning.",
        "Kostnadsestemat: 50 000 - 100 000",
        "Estimert beløp kan avvike, da konstruksjonen er svært gammel.",
        "Tømmerkonstruksjonen er nesten 200 år."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R02",
      "description": "Store høydeforskjeller i etasjeskiller/gulv (TG3). Alle leilighetene har avvik med målte høydeforskjeller over godkjente grenser. I leilighet H0201 er det målt 3,3 cm gjennom stue/kjøkken og 4,5 cm skjevhet på soverom innenfor 2 meter. Drager er understøttet av en stålvinkel og bør understøttes med stender.",
      "evidence": [
        "Målt høydeforskjell på over 30 mm gjennom hele rommet.",
        "Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Stikkontroll høydeforskjell i leilighet H0201: Høydeforskjell på 3,3 cm. gjennom stue/kjøkken. 4,5 cm. skjevt på soverom målt innenfor en lengde på 2 meter.",
        "Alle leilighetene har avvik når det gjelder høydeforskjell.",
        "Det anbefales å understøtte drageren med en stender. I dag er den understøttet av en stålvinkel.",
        "Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R03",
      "description": "Innvendige trapper har fått TG3. Det er påvist avvik knyttet til åpning mellom vegg og trapperepos på mer enn 10 cm, og manglende rekkverk/håndløper. Dette utgjør en sikkerhetsrisiko.",
      "evidence": [
        "Innvendige trapper – STORE ELLER ALVORLIGE AVVIK",
        "Åpning mellom vegg og trapperepos mer enn 10 cm.",
        "Rekkverk må monteres for å lukke avviket.",
        "Kostnadsestemat: Under 10 000"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R04",
      "description": "Elektrisk anlegg er ikke undersøkt (TGIU). Det foreligger ikke fullstendig dokumentasjon på el-anlegget, og det er utført arbeid av både faglærte og ufaglærte/egeninnsats. Dette innebærer en ukjent risiko for brann og sikkerhet.",
      "evidence": [
        "Tekniske installasjoner > Elektrisk anlegg – KONSTRUKSJONER SOM IKKE ER UNDERSØKT",
        "Arbeid utført av fusa elektro, fjell elektro",
        "Svar Ja, av faglært og ufaglært/egeninnsats/dugnad",
        "Bl.a lagt opp strøm i u-etasje bakre bygg.",
        "Det er en utvidet el-kontroll i overgangen kjøp/salg. Dette er en forenklet kontroll begrenset til de spørsmål som fremkommer under."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R05",
      "description": "Ulovlige bruksendringer og manglende godkjenninger. Flere rom og arealer er tatt i bruk uten at dette er godkjent av bygningsmyndighetene. Blant annet er inngangspartier ombygget og bakhuset delt i to leiligheter uten søknad. Soverom i H0202 er opprinnelig byggemeldt som kjøkken og bad. Deler av bad og kjøkken i H0301 er byggemeldt som bod. Loftet er innredet som leilighet uten godkjenning for varig opphold.",
      "evidence": [
        "Forrige eier har i perioden 2008-2010/12 bygget om inngangspartiene og delt bakhuset i to leiligheter. Dette er ikke omsøkt.",
        "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei",
        "H0202: Soverom er opprinnelig byggemeldt som kjøkken og bad, og det er satt inn et mindre vindu på dagens soverom.",
        "H0301: Deler av bad og kjøkken er byggemeldt som bod.",
        "soverommet her er derfor ikke godkjent for varig opphold.",
        "Kjøper overtar ansvar og risiko for videre fortsatt bruk. Dette gjelder også eventuelle pålegg fra det offentlige."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R06",
      "description": "Manglende ferdigattest og byggedokumentasjon. Eiendommen ble oppført tidlig 1800-tall og det foreligger ingen dokumentasjon fra den tiden. Dagens planløsning stemmer ikke overens med mottatte tegninger. Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.",
      "evidence": [
        "Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden.",
        "Det foreligger ferdigatt på rørleggerarbeid fra 1955.",
        "Det foreligger ikke tegninger – Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.",
        "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med mottatte tegninger datert 21.09.1955 og 18.08.1992.",
        "Kjenner du til om det foreligger manglende brukstillatelse eller ferdigattest? Nei/Ja – Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R07",
      "description": "Fukt og dreneringsproblemer. Det er observert fukt i jordsmonn under bad, og mer enn halvparten av forventet levetid på drenering er overskredet. Det mangler utvendig fuktsikring av grunnmuren. Tidligere lekkasje i overgang kledning/tak på mellombygg.",
      "evidence": [
        "Det ble inspisert fra inspeksjonsluke i fellesgang. Noe fukt i jordsmonn under bad, og noe fukt over jordsmonn, på befaringsdagen.",
        "Det mangler eller på grunn av alder er det sannsynlig at det mangler utvendig fuktsikring av grunnmuren - ved kjeller/underetasje.",
        "Mer enn halvparten av forventet levetid på drenering er overskredet.",
        "En liten lekkasje/drypp i overgang kledning/tak på mellombygg. Vann har kommet inn bak kledning og ned mot grunnmurstopp og sannsynlig innfor grunnmuren.",
        "Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre..."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R08",
      "description": "Rotteplager og skadedyr. Det er bekreftet rotteplager i eiendommen, med funn i blindrom under fremre bygg og på loftet. Selv om problemet er forsøkt utbedret, er det ingen garanti for at det ikke vil oppstå igjen.",
      "evidence": [
        "I strøket er det en del rotteplager. Det var høst 2022 oppdaget rotter i blindrom under fremre bygg, registrert også på loftet.",
        "Kontaktet Anticimex som ga gode råd om bekjempelse som jeg har fulgt og problemet har ikke oppstått igjen.",
        "Det anbefales likevel å smøre synlig trevirke med egnet mitmiddel for å unngå, og være i forkant på eventuelle angrep."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R09",
      "description": "Taktekking og beslag har fått TG2, med risiko for TG3. Taktekkingen er gammel (sist utført antatt midten av 1970-tallet) og det er behov for å etterse beslagsløsninger. Løs del til nedløp på taket er observert.",
      "evidence": [
        "Taktekking grunnet alder – TG2",
        "Nedløp og beslag grunnet alder og manglende snøfangere – TG2",
        "Det ble opplyst at sist taktekking kan være utført på midten av 1970-tallet.",
        "Her er det også behov for å etterse beslagsløsninger.",
        "Løs del til nedløp på taket.",
        "Manglende tetteløsning mot vegg for å unngå at vann renner bak beslag."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen er underlagt strenge kulturminnevernbestemmelser. Den ligger innenfor hensynssoner for kulturmiljø (trehusbebyggelse og historisk sentrum) og er båndlagt etter lov om kulturminner. Dette begrenser muligheten for endringer og rehabilitering, og kan medføre økte kostnader.",
      "evidence": [
        "Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø, Trehusbebyggelse. dekningsgrad 100%",
        "Kulturmiljø, Historisk sentrum, dekningsgrad 100%",
        "Båndlegging, Båndlagt etter lov om kulturminner, dekningsgrad 100%",
        "Obs vinduene er originale (tidlig 1800-talls) og «verneverdige»."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R11",
      "description": "Ukjent servitutt fra 1894. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet er ukjent, noe som kan innebære uforutsette forpliktelser for kjøper.",
      "evidence": [
        "Tinglyst 27.11.1894 – Dokumentnr: 900205 – Bestemmelse om gjerde",
        "Dette er en eldre servitutt. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet i servitutten er derfor uvisst."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Tinglyst rømningsvei over eiendommen til fordel for naboeiendommen (gnr. 165, bnr. 744). Vedlikehold av rømningsveien påhviler den tjenende eiendommen (gnr. 165, bnr. 745), og rettigheten gjelder i all fremtid.",
      "evidence": [
        "Tinglyst 10.07.2025 – Dokumentnr: 805942 – Erklæring/avtale, Bestemmelse om rømningsvei på nærmere...",
        "Rett til å bruke i nødstilfelle og holde rømningsvei over Gnr.: 165 Bnr.: 745 i Bergen Kommune",
        "Vedlikehold for opprettholdelse av rømningsveien over Gnr. 165 Bnr. 745 (tjenende eiendom), tilfaller Gnr. 165 Bnr. 744 (herskende eiendom).",
        "Rettigheten gjelder i all fremtid og følger eiendommen."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har samme sikkerhet for å få dekket eventuelle krav mot selger ved skjulte feil og mangler som oppdages etter overtakelse.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Vaskerom i fellesarealer er ikke ferdigstilt og TG3 kan ikke utelukkes. Vaskerommet er ikke innredet/ferdigstilt, og det er observert fukt i tilliggende konstruksjoner.",
      "evidence": [
        "Vaskerom er ikke innredet/ferdigstilt.",
        "Tilstandsgrad 2 settes på grunnlag av observasjoner. Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre...",
        "Fukt i tilliggende konstruksjoner på vaskerom, fellesområder 1. etasje – TG2/TGIU"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R15",
      "description": "Energikarakter G – laveste energiklasse. Boligen er ikke energimerket i forbindelse med salget, men energikarakteren er oppgitt som G. Dette indikerer svært høye energikostnader og kan kreve betydelige investeringer for å forbedre energistandarden.",
      "evidence": [
        "Energikarakter: G",
        "Boligen er ikke energimerket i forbindelse med salget."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R16",
      "description": "Utvendige trapper har fått TG2 grunnet åpninger i rekkverk og rekkverkshøyder som ikke er i henhold til dagens krav. Dette utgjør en sikkerhetsrisiko, særlig for barn.",
      "evidence": [
        "Utvendige trapper grunnet åpninger i rekkverk og rekkverkshøyder ikke er i henhold til krav i dagens forskrifter – TG2"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R17",
      "description": "Bad i leilighet H0301 har flere TG2-avvik, inkludert sprekker i fliser og fuger på vegger og gulv, samt usikker membran/tettesjikt. TG3 kan ikke utelukkes for sluk, membran og tettesjikt.",
      "evidence": [
        "Overflater vegger og himling på bad H0301 grunnet at flisfuger og fliser har riss/sprekker – TG2",
        "Overflater gulv på bad H0301 grunnet sprekker i fliser – TG2",
        "Sluk, membran og tettesjikt på bad H0301 – TG2",
        "Tilstandsgrad 3 kan ikke utelukkes."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R18",
      "description": "Eiendommen selges av et aksjeselskap (Oppussing Kameratene AS), noe som innebærer at salget ikke regnes som forbrukerkjøp. Eiendommen selges «som den er» med begrenset selgeransvar etter avhendingsloven § 3-9, og kjøper har svakere rettsvern enn ved forbrukerkjøp.",
      "evidence": [
        "Selger: Oppussing Kameratene AS",
        "Dersom selger er en juridisk enhet, eller en fysisk person som handler i næringssammenheng, regnes kjøpet ikke som et forbrukerkjøp.",
        "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.",
        "På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R19",
      "description": "Varmtvannstank har fått TG3 grunnet ikke tilfredsstillende forhold. Dette kan innebære umiddelbar utskiftning og risiko for vannskader.",
      "evidence": [
        "Varmtvannstank grunnet ikke tilfredsstillende – TG3 (nevnt i sammendrag av avvik)"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R20",
      "description": "Pågående byggeprosjekter i nærheten kan påvirke eiendommens omgivelser og verdi. Reguleringsplaner i nærheten åpner for betydelig utbygging og endret bygningsmasse i området.",
      "evidence": [
        "Godkjente tiltak i nærheten av eiendommen: Eiendom 165/856, 165/803, 165/730, 165/735, 165/722 – diverse bruksendringer og fasadeendringer.",
        "PlanID: 71480000 – legge til rette for ny bruk av eksisterende bygning, Kjødehallen. Åpnes for oppføring av et nybygg.",
        "Dokken (o_SGG02), Bjørgeboden (BKB1) og Dokkhuset (BK1) skal bevares og skal tas særskilt hensyn til. (Planen er vedtatt, men utbyggingen er ikke ferdigstilt)."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R21",
      "description": "Faresone for brannsmitte og luftkvalitet. Eiendommen ligger innenfor faresone for brannsmitte (dekningsgrad 100%) og gul faresone for luftkvalitet (dekningsgrad 100%). Dette er ikke identifisert i de opprinnelige risikoene, men fremgår tydelig av dokumentene.",
      "evidence": [
        "Faresone, Brannsmitte, dekningsgrad 100%",
        "Gul faresone, Luftkvalitet, dekningsgrad 100%"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R22",
      "description": "Eiendommen leies ut via Airbnb av nåværende eier, og det er ikke avklart om korttidsutleie er i samsvar med gjeldende reguleringsbestemmelser og eventuelle vedtekter. Dette kan medføre risiko for pålegg om opphør av utleievirksomheten.",
      "evidence": [
        "Dagens eierskap, gjennom Oppussing Kameratene AS, har leid ut leilighetene gjennom Airbnb.",
        "Eiendommen leies ut med 4 leiligheter per dags dato."
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R23",
      "description": "Pipe og ildsted har fått TG2 grunnet alder. Dette er ikke fremhevet i de opprinnelige risikoene, men fremgår av tilstandsrapportens sammendrag og kan innebære risiko for brann og røykgasslekkasje.",
      "evidence": [
        "Pipe og ildsted grunnet alder – TG2 (nevnt i sammendrag av avvik)"
      ],
      "source_documents": [
        "d122_d122"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "varmtvannstank TG3 alder type størrelse kostnad utskifting",
    "elektrisk anlegg samsvarserklæring dokumentasjon el-kontroll",
    "pipe ildsted TG2 alder tilstand brannrisiko",
    "Airbnb korttidsutleie reguleringsbestemmelser godkjenning",
    "faresone brannsmitte luftkvalitet konsekvenser tiltak",
    "loft leilighet H0301 H0201 H0202 godkjenning varig opphold rømningsvei",
    "avløpsrør alder TG2 kostnad utskifting",
    "grunnmur fundamenter alder TG2 tilstand"
  ],
  "reasoning": "\nGjennomgangen av alle 20 opprinnelige risikoer mot dokumentevidensen viser at samtlige er godt underbygget av konkrete sitater fra tilstandsrapporten, egenerklæringen og salgsoppgaven. Følgende justeringer og tillegg er gjort:\n\n**Bekreftede og justerte risikoer (R01–R20):**\n- R01–R06: Alle TG3-avvik og lovlighetsforhold er solid dokumentert. Confidence opprettholdes.\n- R07 (fukt/drenering): Godt dokumentert, men lekkasjen er opplyst utbedret. Confidence opprettholdes på 0.93.\n- R08 (rotter): Dokumentert, men selger opplyser problemet er løst. Confidence opprettholdes på 0.88.\n- R09 (tak/beslag): Godt dokumentert med TG2 og konkrete observasjoner. Confidence opprettholdes.\n- R10 (kulturminnebåndlegging): Confidence justeres marginalt opp til 0.93 da båndlegging etter kulturminneloven er eksplisitt nevnt og kombinert med verneverdige vinduer gir dette en reell begrensning.\n- R15 (energikarakter G): Confidence justeres ned til 0.82 da energimerket ikke er formelt utstedt i forbindelse med salget – karakteren G er oppgitt, men uten fullstendig energiattest er grunnlaget noe usikkert.\n- R18 (ikke-forbrukerkjøp): Confidence justeres opp til 0.95 da dette er eksplisitt og juridisk klart dokumentert.\n- R20 (nabobygging): Confidence justeres ned til 0.72 da planene gjelder et større område (Dokken/Kjødehallen) og den direkte påvirkningen på eiendommen er usikker.\n\n**Nye risikoer identifisert (R21–R23):**\n- R21: Faresone for brannsmitte (100% dekning) og gul faresone for luftkvalitet er eksplisitt nevnt i dokumentene, men ikke fanget opp i de opprinnelige risikoene. Dette er en reell risiko, særlig brannsmitte for en tett trehusbebyggelse fra 1825.\n- R22: Airbnb-utleie av alle 4 leiligheter er dokumentert. Det er ikke avklart om dette er i samsvar med reguleringsbestemmelsene, og kjøper bør undersøke dette nærmere.\n- R23: Pipe og ildsted har TG2 grunnet alder, nevnt i sammendrag. Dette er en brannrelevant risiko som ikke er fremhevet i de opprinnelige risikoene.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Varmtvannstankens alder, type og konkrete feil er ikke detaljert i de tilgjengelige dokumentchunkene.\n- Samsvarserklæring for el-anlegget er nevnt (spørsmål 11.1), men svaret er ikke tydelig i de tilgjengelige chunkene.\n- Avløpsrør har TG2 grunnet alder – kostnad og omfang er ikke spesifisert.\n- Grunnmur og fundamenter har TG2 grunnet alder – tilstand og risiko er ikke fullt utdypet.\n"
}

## Raw Response
```json
{
  "id": "msg_01HZ5WcsQD12Eh2qyzE1XVkb",
  "container": null,
  "content": [
    {
      "id": "toolu_01AjJAMFRUSFj8agTahqy5hM",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Alvorlige råteskader i utvendig veggkonstruksjon (TG3). Det er påvist råteskader i tømmerkonstruksjonen og bordkledningen. Bygningen er nesten 200 år gammel, noe som øker risikoen for skjulte skader utover det som er observert.",
            "evidence": [
              "Det er påvist råteskader i veggkonstruksjonen.",
              "Det er påvist spredte råteskader i bordkledningen.",
              "Trekledning/vannbrett nede langs kledning har råteskader.",
              "Det ble observert råteskader i tømmerkonstruksjon/kledning.",
              "Konstruksjonene må sikres mot råte, sopp og skadedyr. Skifte råteskadet trekledning.",
              "Kostnadsestemat: 50 000 - 100 000",
              "Estimert beløp kan avvike, da konstruksjonen er svært gammel.",
              "Tømmerkonstruksjonen er nesten 200 år."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R02",
            "description": "Store høydeforskjeller i etasjeskiller/gulv (TG3). Alle leilighetene har avvik med målte høydeforskjeller over godkjente grenser. I leilighet H0201 er det målt 3,3 cm gjennom stue/kjøkken og 4,5 cm skjevhet på soverom innenfor 2 meter. Drager er understøttet av en stålvinkel og bør understøttes med stender.",
            "evidence": [
              "Målt høydeforskjell på over 30 mm gjennom hele rommet.",
              "Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Stikkontroll høydeforskjell i leilighet H0201: Høydeforskjell på 3,3 cm. gjennom stue/kjøkken. 4,5 cm. skjevt på soverom målt innenfor en lengde på 2 meter.",
              "Alle leilighetene har avvik når det gjelder høydeforskjell.",
              "Det anbefales å understøtte drageren med en stender. I dag er den understøttet av en stålvinkel.",
              "Målt høydeforskjell på over 20 mm innenfor en lengde på 2 meter."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R03",
            "description": "Innvendige trapper har fått TG3. Det er påvist avvik knyttet til åpning mellom vegg og trapperepos på mer enn 10 cm, og manglende rekkverk/håndløper. Dette utgjør en sikkerhetsrisiko.",
            "evidence": [
              "Innvendige trapper – STORE ELLER ALVORLIGE AVVIK",
              "Åpning mellom vegg og trapperepos mer enn 10 cm.",
              "Rekkverk må monteres for å lukke avviket.",
              "Kostnadsestemat: Under 10 000"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R04",
            "description": "Elektrisk anlegg er ikke undersøkt (TGIU). Det foreligger ikke fullstendig dokumentasjon på el-anlegget, og det er utført arbeid av både faglærte og ufaglærte/egeninnsats. Dette innebærer en ukjent risiko for brann og sikkerhet.",
            "evidence": [
              "Tekniske installasjoner > Elektrisk anlegg – KONSTRUKSJONER SOM IKKE ER UNDERSØKT",
              "Arbeid utført av fusa elektro, fjell elektro",
              "Svar Ja, av faglært og ufaglært/egeninnsats/dugnad",
              "Bl.a lagt opp strøm i u-etasje bakre bygg.",
              "Det er en utvidet el-kontroll i overgangen kjøp/salg. Dette er en forenklet kontroll begrenset til de spørsmål som fremkommer under."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R05",
            "description": "Ulovlige bruksendringer og manglende godkjenninger. Flere rom og arealer er tatt i bruk uten at dette er godkjent av bygningsmyndighetene. Blant annet er inngangspartier ombygget og bakhuset delt i to leiligheter uten søknad. Soverom i H0202 er opprinnelig byggemeldt som kjøkken og bad. Deler av bad og kjøkken i H0301 er byggemeldt som bod. Loftet er innredet som leilighet uten godkjenning for varig opphold.",
            "evidence": [
              "Forrige eier har i perioden 2008-2010/12 bygget om inngangspartiene og delt bakhuset i to leiligheter. Dette er ikke omsøkt.",
              "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei",
              "H0202: Soverom er opprinnelig byggemeldt som kjøkken og bad, og det er satt inn et mindre vindu på dagens soverom.",
              "H0301: Deler av bad og kjøkken er byggemeldt som bod.",
              "soverommet her er derfor ikke godkjent for varig opphold.",
              "Kjøper overtar ansvar og risiko for videre fortsatt bruk. Dette gjelder også eventuelle pålegg fra det offentlige."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R06",
            "description": "Manglende ferdigattest og byggedokumentasjon. Eiendommen ble oppført tidlig 1800-tall og det foreligger ingen dokumentasjon fra den tiden. Dagens planløsning stemmer ikke overens med mottatte tegninger. Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.",
            "evidence": [
              "Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden.",
              "Det foreligger ferdigatt på rørleggerarbeid fra 1955.",
              "Det foreligger ikke tegninger – Det foreligger ikke godkjente, byggemeldte tegninger av dagens situasjon.",
              "Det gjøres oppmerksom på at dagens planløsning ikke stemmer overens med mottatte tegninger datert 21.09.1955 og 18.08.1992.",
              "Kjenner du til om det foreligger manglende brukstillatelse eller ferdigattest? Nei/Ja – Eiendommen ble oppført tidlig 1800 så det foreligger ingen dokumentasjon fra den tiden."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R07",
            "description": "Fukt og dreneringsproblemer. Det er observert fukt i jordsmonn under bad, og mer enn halvparten av forventet levetid på drenering er overskredet. Det mangler utvendig fuktsikring av grunnmuren. Tidligere lekkasje i overgang kledning/tak på mellombygg.",
            "evidence": [
              "Det ble inspisert fra inspeksjonsluke i fellesgang. Noe fukt i jordsmonn under bad, og noe fukt over jordsmonn, på befaringsdagen.",
              "Det mangler eller på grunn av alder er det sannsynlig at det mangler utvendig fuktsikring av grunnmuren - ved kjeller/underetasje.",
              "Mer enn halvparten av forventet levetid på drenering er overskredet.",
              "En liten lekkasje/drypp i overgang kledning/tak på mellombygg. Vann har kommet inn bak kledning og ned mot grunnmurstopp og sannsynlig innfor grunnmuren.",
              "Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre..."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R08",
            "description": "Rotteplager og skadedyr. Det er bekreftet rotteplager i eiendommen, med funn i blindrom under fremre bygg og på loftet. Selv om problemet er forsøkt utbedret, er det ingen garanti for at det ikke vil oppstå igjen.",
            "evidence": [
              "I strøket er det en del rotteplager. Det var høst 2022 oppdaget rotter i blindrom under fremre bygg, registrert også på loftet.",
              "Kontaktet Anticimex som ga gode råd om bekjempelse som jeg har fulgt og problemet har ikke oppstått igjen.",
              "Det anbefales likevel å smøre synlig trevirke med egnet mitmiddel for å unngå, og være i forkant på eventuelle angrep."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R09",
            "description": "Taktekking og beslag har fått TG2, med risiko for TG3. Taktekkingen er gammel (sist utført antatt midten av 1970-tallet) og det er behov for å etterse beslagsløsninger. Løs del til nedløp på taket er observert.",
            "evidence": [
              "Taktekking grunnet alder – TG2",
              "Nedløp og beslag grunnet alder og manglende snøfangere – TG2",
              "Det ble opplyst at sist taktekking kan være utført på midten av 1970-tallet.",
              "Her er det også behov for å etterse beslagsløsninger.",
              "Løs del til nedløp på taket.",
              "Manglende tetteløsning mot vegg for å unngå at vann renner bak beslag."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen er underlagt strenge kulturminnevernbestemmelser. Den ligger innenfor hensynssoner for kulturmiljø (trehusbebyggelse og historisk sentrum) og er båndlagt etter lov om kulturminner. Dette begrenser muligheten for endringer og rehabilitering, og kan medføre økte kostnader.",
            "evidence": [
              "Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø, Trehusbebyggelse. dekningsgrad 100%",
              "Kulturmiljø, Historisk sentrum, dekningsgrad 100%",
              "Båndlegging, Båndlagt etter lov om kulturminner, dekningsgrad 100%",
              "Obs vinduene er originale (tidlig 1800-talls) og «verneverdige»."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R11",
            "description": "Ukjent servitutt fra 1894. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet er ukjent, noe som kan innebære uforutsette forpliktelser for kjøper.",
            "evidence": [
              "Tinglyst 27.11.1894 – Dokumentnr: 900205 – Bestemmelse om gjerde",
              "Dette er en eldre servitutt. Megler har forsøkt å innhente servitutten, men har ikke lyktes i å finne den i gammel grunnbok. Det nøyaktige innholdet i servitutten er derfor uvisst."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Tinglyst rømningsvei over eiendommen til fordel for naboeiendommen (gnr. 165, bnr. 744). Vedlikehold av rømningsveien påhviler den tjenende eiendommen (gnr. 165, bnr. 745), og rettigheten gjelder i all fremtid.",
            "evidence": [
              "Tinglyst 10.07.2025 – Dokumentnr: 805942 – Erklæring/avtale, Bestemmelse om rømningsvei på nærmere...",
              "Rett til å bruke i nødstilfelle og holde rømningsvei over Gnr.: 165 Bnr.: 745 i Bergen Kommune",
              "Vedlikehold for opprettholdelse av rømningsveien over Gnr. 165 Bnr. 745 (tjenende eiendom), tilfaller Gnr. 165 Bnr. 744 (herskende eiendom).",
              "Rettigheten gjelder i all fremtid og følger eiendommen."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har samme sikkerhet for å få dekket eventuelle krav mot selger ved skjulte feil og mangler som oppdages etter overtakelse.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Vaskerom i fellesarealer er ikke ferdigstilt og TG3 kan ikke utelukkes. Vaskerommet er ikke innredet/ferdigstilt, og det er observert fukt i tilliggende konstruksjoner.",
            "evidence": [
              "Vaskerom er ikke innredet/ferdigstilt.",
              "Tilstandsgrad 2 settes på grunnlag av observasjoner. Tilstandsgrad 3 kan ikke utelukkes, særlig med tanke på at de tre andre...",
              "Fukt i tilliggende konstruksjoner på vaskerom, fellesområder 1. etasje – TG2/TGIU"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R15",
            "description": "Energikarakter G – laveste energiklasse. Boligen er ikke energimerket i forbindelse med salget, men energikarakteren er oppgitt som G. Dette indikerer svært høye energikostnader og kan kreve betydelige investeringer for å forbedre energistandarden.",
            "evidence": [
              "Energikarakter: G",
              "Boligen er ikke energimerket i forbindelse med salget."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R16",
            "description": "Utvendige trapper har fått TG2 grunnet åpninger i rekkverk og rekkverkshøyder som ikke er i henhold til dagens krav. Dette utgjør en sikkerhetsrisiko, særlig for barn.",
            "evidence": [
              "Utvendige trapper grunnet åpninger i rekkverk og rekkverkshøyder ikke er i henhold til krav i dagens forskrifter – TG2"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R17",
            "description": "Bad i leilighet H0301 har flere TG2-avvik, inkludert sprekker i fliser og fuger på vegger og gulv, samt usikker membran/tettesjikt. TG3 kan ikke utelukkes for sluk, membran og tettesjikt.",
            "evidence": [
              "Overflater vegger og himling på bad H0301 grunnet at flisfuger og fliser har riss/sprekker – TG2",
              "Overflater gulv på bad H0301 grunnet sprekker i fliser – TG2",
              "Sluk, membran og tettesjikt på bad H0301 – TG2",
              "Tilstandsgrad 3 kan ikke utelukkes."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R18",
            "description": "Eiendommen selges av et aksjeselskap (Oppussing Kameratene AS), noe som innebærer at salget ikke regnes som forbrukerkjøp. Eiendommen selges «som den er» med begrenset selgeransvar etter avhendingsloven § 3-9, og kjøper har svakere rettsvern enn ved forbrukerkjøp.",
            "evidence": [
              "Selger: Oppussing Kameratene AS",
              "Dersom selger er en juridisk enhet, eller en fysisk person som handler i næringssammenheng, regnes kjøpet ikke som et forbrukerkjøp.",
              "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9.",
              "På grunn av ulike ansvarsforhold kan selger velge å prioritere bud fra ikke-forbrukere, selv om budet er lavere."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R19",
            "description": "Varmtvannstank har fått TG3 grunnet ikke tilfredsstillende forhold. Dette kan innebære umiddelbar utskiftning og risiko for vannskader.",
            "evidence": [
              "Varmtvannstank grunnet ikke tilfredsstillende – TG3 (nevnt i sammendrag av avvik)"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R20",
            "description": "Pågående byggeprosjekter i nærheten kan påvirke eiendommens omgivelser og verdi. Reguleringsplaner i nærheten åpner for betydelig utbygging og endret bygningsmasse i området.",
            "evidence": [
              "Godkjente tiltak i nærheten av eiendommen: Eiendom 165/856, 165/803, 165/730, 165/735, 165/722 – diverse bruksendringer og fasadeendringer.",
              "PlanID: 71480000 – legge til rette for ny bruk av eksisterende bygning, Kjødehallen. Åpnes for oppføring av et nybygg.",
              "Dokken (o_SGG02), Bjørgeboden (BKB1) og Dokkhuset (BK1) skal bevares og skal tas særskilt hensyn til. (Planen er vedtatt, men utbyggingen er ikke ferdigstilt)."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R21",
            "description": "Faresone for brannsmitte og luftkvalitet. Eiendommen ligger innenfor faresone for brannsmitte (dekningsgrad 100%) og gul faresone for luftkvalitet (dekningsgrad 100%). Dette er ikke identifisert i de opprinnelige risikoene, men fremgår tydelig av dokumentene.",
            "evidence": [
              "Faresone, Brannsmitte, dekningsgrad 100%",
              "Gul faresone, Luftkvalitet, dekningsgrad 100%"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R22",
            "description": "Eiendommen leies ut via Airbnb av nåværende eier, og det er ikke avklart om korttidsutleie er i samsvar med gjeldende reguleringsbestemmelser og eventuelle vedtekter. Dette kan medføre risiko for pålegg om opphør av utleievirksomheten.",
            "evidence": [
              "Dagens eierskap, gjennom Oppussing Kameratene AS, har leid ut leilighetene gjennom Airbnb.",
              "Eiendommen leies ut med 4 leiligheter per dags dato."
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R23",
            "description": "Pipe og ildsted har fått TG2 grunnet alder. Dette er ikke fremhevet i de opprinnelige risikoene, men fremgår av tilstandsrapportens sammendrag og kan innebære risiko for brann og røykgasslekkasje.",
            "evidence": [
              "Pipe og ildsted grunnet alder – TG2 (nevnt i sammendrag av avvik)"
            ],
            "source_documents": [
              "d122_d122"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "varmtvannstank TG3 alder type størrelse kostnad utskifting",
          "elektrisk anlegg samsvarserklæring dokumentasjon el-kontroll",
          "pipe ildsted TG2 alder tilstand brannrisiko",
          "Airbnb korttidsutleie reguleringsbestemmelser godkjenning",
          "faresone brannsmitte luftkvalitet konsekvenser tiltak",
          "loft leilighet H0301 H0201 H0202 godkjenning varig opphold rømningsvei",
          "avløpsrør alder TG2 kostnad utskifting",
          "grunnmur fundamenter alder TG2 tilstand"
        ],
        "reasoning": "\nGjennomgangen av alle 20 opprinnelige risikoer mot dokumentevidensen viser at samtlige er godt underbygget av konkrete sitater fra tilstandsrapporten, egenerklæringen og salgsoppgaven. Følgende justeringer og tillegg er gjort:\n\n**Bekreftede og justerte risikoer (R01–R20):**\n- R01–R06: Alle TG3-avvik og lovlighetsforhold er solid dokumentert. Confidence opprettholdes.\n- R07 (fukt/drenering): Godt dokumentert, men lekkasjen er opplyst utbedret. Confidence opprettholdes på 0.93.\n- R08 (rotter): Dokumentert, men selger opplyser problemet er løst. Confidence opprettholdes på 0.88.\n- R09 (tak/beslag): Godt dokumentert med TG2 og konkrete observasjoner. Confidence opprettholdes.\n- R10 (kulturminnebåndlegging): Confidence justeres marginalt opp til 0.93 da båndlegging etter kulturminneloven er eksplisitt nevnt og kombinert med verneverdige vinduer gir dette en reell begrensning.\n- R15 (energikarakter G): Confidence justeres ned til 0.82 da energimerket ikke er formelt utstedt i forbindelse med salget – karakteren G er oppgitt, men uten fullstendig energiattest er grunnlaget noe usikkert.\n- R18 (ikke-forbrukerkjøp): Confidence justeres opp til 0.95 da dette er eksplisitt og juridisk klart dokumentert.\n- R20 (nabobygging): Confidence justeres ned til 0.72 da planene gjelder et større område (Dokken/Kjødehallen) og den direkte påvirkningen på eiendommen er usikker.\n\n**Nye risikoer identifisert (R21–R23):**\n- R21: Faresone for brannsmitte (100% dekning) og gul faresone for luftkvalitet er eksplisitt nevnt i dokumentene, men ikke fanget opp i de opprinnelige risikoene. Dette er en reell risiko, særlig brannsmitte for en tett trehusbebyggelse fra 1825.\n- R22: Airbnb-utleie av alle 4 leiligheter er dokumentert. Det er ikke avklart om dette er i samsvar med reguleringsbestemmelsene, og kjøper bør undersøke dette nærmere.\n- R23: Pipe og ildsted har TG2 grunnet alder, nevnt i sammendrag. Dette er en brannrelevant risiko som ikke er fremhevet i de opprinnelige risikoene.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Varmtvannstankens alder, type og konkrete feil er ikke detaljert i de tilgjengelige dokumentchunkene.\n- Samsvarserklæring for el-anlegget er nevnt (spørsmål 11.1), men svaret er ikke tydelig i de tilgjengelige chunkene.\n- Avløpsrør har TG2 grunnet alder – kostnad og omfang er ikke spesifisert.\n- Grunnmur og fundamenter har TG2 grunnet alder – tilstand og risiko er ikke fullt utdypet.\n"
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
    "input_tokens": 24949,
    "output_tokens": 7285,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
