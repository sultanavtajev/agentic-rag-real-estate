# Trace: agentic_reflecting_iter1
- **Run ID:** 9fb2ed7a-4654-4181-b77e-422772e17624
- **Tidspunkt:** 2026-03-24T23:02:13.547672+00:00
- **Varighet:** 140.59s
- **Input tokens:** 22451
- **Output tokens:** 6976

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
Risiko 1: Etasjeskille/gulv mot grunn har høydeforskjell på 15-30 mm gjennom hele rommet (TG2). Dette indikerer skjevheter i gulvet som kan kreve tiltak ved fremtidig renovering.
  Confidence: 0.95
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.; Det er et gammelt bygg, og det er i alle fall noe skjevhet i gulvet

Risiko 2: Elektrisk anlegg er ikke fullstendig kontrollert og mangler delvis samsvarserklæring (TG2). Det er kun fremlagt samsvarserklæring på deler av anlegget, og det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav.
  Confidence: 0.93
  Evidens: Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.; Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.; Det fremgår av tilstandsrapporten at det mangler for deler av det elektriske arbeidet i boligen.; Det er fremlagt samsvarserklæring på deler av anlegget datert: X; Tidligere eier informerte om at det ble gjennomført el-kontroll i 2017.

Risiko 3: Manglende tilstandsanalyserapport og vedlikeholdsplan for fellesdeler i bygget (TG2). Dette er et avvik etter NS 3600:2018 og gir usikkerhet om tilstanden til fellesarealer og -konstruksjoner.
  Confidence: 0.92
  Evidens: Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.; For å lukke avviket ihht NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt.

Risiko 4: Ventilasjon og vannbåren varme er registrert med TG2-avvik. Tekniske installasjoner kan kreve tiltak og medføre kostnader for kjøper.
  Confidence: 0.88
  Evidens: AVVIK SOM KAN KREVE TILTAK: Tekniske installasjoner > Ventilasjon, Tekniske installasjoner > Vannbåren varme; Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens [krav]

Risiko 5: Avtrekk på kjøkken i 3. etasje er registrert med TG2-avvik. Dette kan innebære mangelfull ventilasjon på kjøkkenet.
  Confidence: 0.85
  Evidens: AVVIK SOM KAN KREVE TILTAK: Kjøkken > 3. etasje > Stue/kjøkken > Avtrekk

Risiko 6: Betydelig fellesgjeld i sameiet på kr 5 843 580 med flytende rente på 6,45%. Kjøpers andel er kr 212 628. Flytende rente medfører risiko for økte felleskostnader ved renteøkninger.
  Confidence: 0.95
  Evidens: Restsaldo pr. 09.03.2026: kr 5 843 580,-; Andel av saldo: kr 212 628,-; Type Rente: Flytende. Rente: 6,45 %; Ettersom sameiets lån har flytende rente, vil felleskostnadene kunne endres i takt med renteendringer.; Antall terminer til innfrielse: 48.9998

Risiko 7: Sameiets egenkapital er negativ med kr -4 862 060 per 31.12.2024. Dette indikerer en svak finansiell stilling i sameiet, noe som kan medføre risiko for fremtidige kostnadsøkninger for seksjonseierne.
  Confidence: 0.88
  Evidens: Egenkapitalen var negativ med kr -4 862 060,-.; Ifølge notene til regnskapet er negativ egenkapital vanlig i boligselskaper, da eiendelenes balanseførte verdi er [lav]

Risiko 8: Sameiets eiere er solidarisk ansvarlige for sameiets lån. Dette innebærer at kjøper kan bli medansvarlig for andre seksjonseiers mislighold av fellesgjelden.
  Confidence: 0.9
  Evidens: Sameiets eiere er solidarisk ansvarlige for sameiets lån.; Det er sameiets eiere som har et protorisk ansvar/sikkerhet for låneopptaket.

Risiko 9: Planløsningen er endret uten at dette er byggemeldt eller godkjent. Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var. Dette kan medføre juridiske og praktiske komplikasjoner.
  Confidence: 0.92
  Evidens: Det er ikke samsvar mellom byggetegninger og dagens planløsning.; Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var.; Det foreligger ikke tegninger. Kommentar: Ikke mottatt tegninger ennå.

Risiko 10: Trikketraseen for 17-trikken skal oppgraderes i 2026, noe som vil medføre støy i arbeidsperioden. Dette kan påvirke beboernes livskvalitet i en periode.
  Confidence: 0.9
  Evidens: Trikketraseen for 17-trikken skal oppgraderes ila 2026. Det må forventes noe støy ifm oppgraderingen.; Vi har mottatt nabovarsel om at trikketraseen for 17-trikken skal oppgraderes i 2026 og at det vil medføre noe støy i arbeidsperioden.

Risiko 11: Vinduer kan ikke vendes rundt for å vaskes på innsiden, og det er slitasje på hengsler og håndtak. Styret har ikke tatt stilling til utskifting av vinduer, men det kan bli aktuelt.
  Confidence: 0.82
  Evidens: Vinduene som vender ut mot Sinsenterrassen kan ikke vendes rundt for å vaskes på innsiden. Dette fordi toppen av rammen går ut av sporet når de vendes.; Det er slitasje på enkelte hengsler og håndtak, blant annet et håndtak som er løst.; Styret vil motta en rapport fra fagpersonen i nær fremtid. Styreleder opplyser at det per nå ikke anses særlig aktuelt å bytte vinduene i nærmeste fremtid, men at det kan bli behov for tiltak etter hvert.

Risiko 12: Det er oppdaget kakerlakk i en annen leilighet i sameiet høsten 2022, og det er observert rotter i uteområdet. Sameiet har avtale med Anticimex om rottefeller.
  Confidence: 0.8
  Evidens: Høsten 2022 ble det oppdaget kakerlakk i en annen [leilighet]. Det ble aldri oppdaget kakerlakker hos oss.; Sameiet har en avtale med anticimex om rottefeller på utsiden av blokka, så vi antar at det har vært observert rotter i uteområdet tidligere.

Risiko 13: Røykvarslingsanlegget i sameiet er defekt med stadige feilmeldinger og høye abonnementskostnader. Styret har ikke midler til å skifte ut anlegget nå, noe som kan utgjøre en brannsikkerhetsrisiko.
  Confidence: 0.88
  Evidens: Styret vurderer å skifte ut nåværende røykvarslingsanlegg på grunn av stadige feilmeldinger og høye abonnementskostnader.; Vi vil legge til at styret ikke er fornøyd med nåværende røykvarslingsanlegg, da sentralen stadig viser feilmeldinger, hvorav de fleste er 'falske'. Anlegget har også en forholdsvis høy abonnementskostnad. Vi har pr nå ikke midler til å skifte ut anlegget.

Risiko 14: Eiendommen er regulert til hensynssone H570 – bevaring kulturmiljø. Dette kan begrense muligheten for endringer, påbygg og rehabilitering av eiendommen.
  Confidence: 0.87
  Evidens: Formålet med planen er å sikre varig vern av Sinsenbyen gjennom omregulering til hensynssone H570 – bevaring kulturmiljø. Bevaringen omfatter et helhetlig kulturmiljø fra 1930- og 1950-tallet med eksisterende bebyggelse, utomhusområder og vegetasjon.; Innenfor alle bestemmelsesområdene er det ikke tillatt å gjennomføre terrengendringer eller inngrep i eksisterende terreng utover ordinært hagearbeid knyttet til beplantning.; Detaljregulering ble egengodkjent ved bystyrets vedtak av 20.11.2024, sak 278/24.

Risiko 15: Bygget er fra 1936 og har eldre konstruksjoner som ikke er fullt ut undersøkt. Skjulte feil og mangler kan forekomme, særlig i konstruksjoner som ikke er tilgjengelige for inspeksjon.
  Confidence: 0.85
  Evidens: Boligbygg med flere boenheter - Byggeår: 1936; Disse delene kan dermed ha feil eller mangler som ikke er avdekket.; Det er ikke innhentet offentlige søknader eller godkjennelser på eiendommen.; Takstmannen har ikke fått opplysninger om evnt. soppangrep, lekkasjer eller råteskader ut over hva som evnt. fremkommer i rapporten.

Risiko 16: Strømavtale med bindingstid til 31.12.2026 (Norgespris) følger boligen og må overtas av kjøper. Dette begrenser kjøpers valgfrihet i strømleverandør i bindingsperioden.
  Confidence: 0.8
  Evidens: strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.; Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året.

Risiko 17: Det er sprekker i murpussen i taket i stua over sofaen. Dette kan indikere bevegelser i konstruksjonen eller fuktproblemer.
  Confidence: 0.72
  Evidens: Det er også et par små sprekker i murpussen i taket i stua over sofaen (lite synlig).

Risiko 18: Energikarakter D indikerer relativt høyt energiforbruk, noe som kan medføre høyere energikostnader for kjøper sammenlignet med nyere boliger.
  Confidence: 0.7
  Evidens: Energikarakter: D; På en skala fra A til G, der A er best, har denne boligen oppnådd D (en normalbolig vil gjerne ligge i området C-F).

Dokumentkontekst:
[d098_d098 | Side [1]]
ngens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle

---

[d098_d098 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d098_d098 | Side [1]]
arealmåling når det gjelder
fordeling mellom P-areal og S-areal. TILLEGGSUNDERSØKELSER
•Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over

---

[d098_d098 | Side [1]]
t avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på

---

[d098_d098 | Side [1]]
skriftskrav og oppstå funksjonssvikt.
godkjente måleavvik. For å få tilstandsgrad 0 eller 1 må Videre må kjøper være forberedt på det må foretas
høydeforskjeller rettes opp. Det vil imidlertid sjelden være oppgraderinger på grunn av slitasje, fraværende
økonomisk rasjonelt som et enkeltstående tiltak i en bolig vedlikehold, arbeider som er utført av ufaglærte,
som dette. Dersom boligen en gang skal renoveres, kan utidsmessighet eller tekniske løsninger som ikke holder
man vurdere slike tiltak. dagens

---

[d098_d098 | Side [1]]
ingsdeler slik som bad og vaskerom, og forhold som tilgjengelige flater uten fysiske inngrep (f.eks. riving).
gjelder sikkerhet mot brann, rekkverk og trapper osv., vil den
bygningssakkyndige vurdere mot dagens regelverk. Etter dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av

---

[d098_d098 | Side [1]]
: 18554-1859 Befaringsdato: 08.12.2025 Side: 5 av 19
51

## Side 52

15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Sinsenterrassen 7, 0574 OSLO West Takst og Rådgivning AS
Gnr 83 - Bnr 135 Horniveien 10
0301 OSLO 1339 VØYENENGA
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve

---

[d098_d098 | Side [1]]
algsoppgaven. I skjemaet fremkommer
følgende informasjon:
Dersom det er registrert avvik med tilstandsgrad (TG) 2
eller 3 i tilstandsrapporten, oppfordres interessenter Kjenner du til om det er utført arbeid på bad/ våtrom?
spesielt til å undersøke disse forholdene nærmere, da Ja.
gitte tilstandsgrader er et konkret uttrykk for alder/ Faglært arbeid:
slitasje/ ødeleggelser/ konsekvenser som innebærer Hvilket år ble jobben fullført?: 2018
kostnader til utbedring. Kjøper må innta disse Firmanavn: Oslo

---

[d098_d098 | Side [1]]
lse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og

---

[d098_d098 | Side [1]]
dokumenteres av fagperson.
alder på anlegget i betraktning ‑ her manglende
dokumentasjon og ukjent historikk. Dette utløser tg 2. Opplistingen over er ikke uttømmende og du oppfordres
til å lese og sette deg grundig inn i alt salgsmateriell.
TG2 ‑ Avvik som kan kreve tiltak:
For ordens skyld nevner vi at TGIU står for tilstandsgrad
‑ Andre utvendige forhold | Det er ikke utarbeidet ikke undersøkt, f.eks. fordi en del av bygget ikke har vært
Tilstandsanalyserapport, vedlikeholdsplan e.l. for tilgjengelig

---

[d098_d098 | Side [1]]
GA
Tilstandsrapport
Etasjeskille/gulv mot grunn
Etasjeskiller er av betongdekke.
Årstall: 1936
Vurdering av avvik:
• Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l godkjente måleavvik.
Konsekvens/琀椀ltak
• For å få 琀椀lstandsgrad 0 eller 1 må høydeforskjeller re琀琀es opp. Det vil imidler琀椀d sjelden være økonomisk rasjonelt som et enkeltstående 琀椀ltak i en bolig
som de琀琀e. Dersom boligen en gang skal renoveres, kan man vurdere slike

---

[d098_d098 | Side [1]]
malt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget

---

[d098_d098 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d098_d098 | Side [1]]
ort beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som

---

[d098_d098 | Side [1]]
l av de elektriske
er kostnadsestimat ikke satt. installasjonene (el‑takst) selv om bygningssakkyndig kan
ha knyttet noen kommentarer til elanlegget ut i fra helt
‑ Etasjeskille/ gulv mot grunn | Det er målt høydeforskjell enkle vurderingskriterier. Siden elanlegget ikke er
på mellom 15‑30 mm gjennom hele rommet. kontrollert er det sannsynlig at det siden kan avdekkes
Tilstandsgrad 2 gis med bakgrunn i standardens krav til avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
godkjente måleavvik. For å

---

[d098_d098 | Side [1]]

Tilstandsanalyserapport, vedlikeholdsplan e.l. for tilgjengelig for inspeksjon. Disse delene kan dermed ha
fellesdeler i bygget. For å lukke avviket ihht NS feil eller mangler som ikke er avdekket.
3600.2018 må det utarbeides en
Tilstandsanalyserapport/ vedlikeholdsplan for fellesdeler Tilstandsrapporten beskriver byggverkets tekniske
i bygget. Da dette er opp til borettslag/ sameie å rekvirere tilstand. Det er ikke foretatt kontroll av de elektriske
er kostnadsestimat ikke satt. installasjonene

---

[d098_d098 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d098_d098 | Side [1]]
 avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
AVVIK SOM KAN KREVE TILTAK
Utvendig > Andre utvendige forhold Gå til side
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Tekniske installasjoner > Ven琀椀lasjon Gå til side
Tekniske installasjoner > Vannbåren varme Gå til side
Tekniske installasjoner > Elektrisk anlegg Gå til side
Kjøkken > 3. etasje > Stue/kjøkken > Avtrekk Gå

---

[d098_d098 | Side [1]]
ygget.
Konsekvens/琀椀ltak
• For å lukke avviket ihht NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da de琀琀e er opp 琀椀l
bore琀琀slag/sameie å rekvirere er kostnadses琀椀mat ikke sa琀琀.
INNVENDIG
Over昀氀ater
3-stavs parke琀琀 i alle rom. Flislagt gulv i bad og i entré.
Vegger med malte 昀氀ater. Flislagte vegger i bad.
Himlinger med malte 昀氀ater.
Over昀氀ater er all琀椀d utsa琀琀 for normal slitasje som innebærer riper, hakk og evnt skjolder som et resultat av normal

---

[d098_d098 | Side [1]]
er du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for

---

[d098_d098 | Side [1]]
ften, og har prioritet foran for eksempel
Tinglyste heftelser og rettigheter: Følgende tinglyste tinglyste banklån på eiendommen.
heftelser følger eiendommen ved salg, og ved inngivelse
av bud vil disse være akseptert av budgiver/ kjøper:
Vei, vann og avløp
1958/ 4338‑1/ 105 22.04.1958 SKJØNN Eiendommen er tilknyttet offentlig vann‑ og
Overført fra: KNR: 0301 GNR: 83 BNR: 135 avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private, og
1975/ 25934‑3/ 105 19.12.1975 ERKLÆRING/

---

[d098_d098 | Side [1]]
 enn de som det er avtalt at følger radonmålinger er derfor ikke relevant.
med i handelen. Gjennomføring av handelen er betinget
av det ikke er tinglyst heftelser som ikke lar seg innfri/ For mer informasjon om radon, se www.dsa.no/ radon.
slette.
Kontrakts‑
Dersom eiendommen skulle bli overbeheftet i
salgsprosessen, det vil si at summen av fremtidige
grunnlag
tinglyste heftelser overstiger den forventede
salgssummen, er det en forutsetning for at handel skal
kunne gjennomføres at kreditorene gir nødvendig

---

[d098_d098 | Side [1]]
Beskrivelse
arbeidsperioden.
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei

---

[d098_d098 | Side [1]]
k på
Energimerke saksnummer, adresse eller gårds‑ og bruksnummer på
Energikarakter: D Plan‑ og bygningsetatens hjemmeside.
31

## Side 32

OM EIENDOMMEN
Trikketraseen for 17‑trikken skal oppgraderes ila 2026.
Det må forventes noe støy ifm oppgraderingen. Legalpant: Kommunen har legalpant som sikkerhet for
betaling av kommunale avgifter og eventuell
eiendomsskatt. Legalpant er et pant som ikke vises i
Tinglyste heftelser grunnboksutskriften, og har prioritet foran for eksempel
Tinglyste heftelser og

---

[d098_d098 | Side [1]]
t ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært

---

[d098_d098 | Side [1]]
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

[d098_d098 | Side [1]]
ommen
Det henvises 琀椀l rapportens enkelte poster med vurderinger og
琀椀lstandsgrader.
Takstmannen har ikke få琀琀 opplysninger om evnt. soppangrep,
lekkasjer eller råteskader ut over hva som evnt. fremkommer i
rapporten. Det er videre ikke opplyst om det foreligger
o昀昀entlige bygningsmessige eller tekniske påbud på
eiendommen ut over det som evnt. fremkommer i rapporten.
Det er ikke innhentet o昀昀entlige søknader eller godkjennelser
på eiendommen.
Boligbygg med 昀氀ere boenheter - Byggeår: 1936
UTVENDIG Gå 琀椀l

---

[d098_d098 | Side [1]]
 fnr. snr. Areal Kilde Eieforhold
301 OSLO 83 135 29 1832 m² Iht eiendomsverdi Eiet
Adresse
Sinsenterrassen 7
Hjemmelshaver
Haga Andreas Bratlie, Haga Chris琀椀ne Bratlie
Kommentar
Eiendomsopplysninger
Adkomstvei
Eiendommen har adkomst via o昀昀entlig veg eller gate.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Om tomten
Opparbeidet tomt med bl.a plen og

---

[d098_d098 | Side [1]]
re må fugler ikke mates fra Denne boligen er energimerket. På en skala fra A til G, der
leiligheten eller friarealene. Hundeekskrementer fra eget A er best, har denne boligen oppnådd D (en normalbolig
dyrehold må plukkes opp. vil gjerne ligge i området C‑F). Kopi av energiattest ligger
vedlagt i salgsoppgaven eller kan fås ved henvendelse til
Forkjøpsrett: Det foreligger ingen forkjøpsrett på megler.
eiendommen.
Styregodkjennelse: Det kreves ikke styrets godkjennelse, Oppvarming
kun eierskiftemelding.

---

[d098_d098 | Side [1]]
e nettet er private, og
1975/ 25934‑3/ 105 19.12.1975 ERKLÆRING/ AVTALE vedlikeholdsansvaret for disse påhviler sameiet.
PANTERETT UTEN OPPTRINNSRETT TIL SAMEIET Adkomst til eiendommen skjer via offentlig vei.
FOR: NOK 5,000
MED PRIORITET ETTER 100 % AV FØRSTE KJØPESUM
GJELDER DENNE REGISTERENHETEN MED FLERE Utleie
Adgang til utleie: Bolig med én boenhet som fritt kan
1975/ 25934‑2/ 105 19.12.1975 SEKSJONERING leies ut i sin helhet. Deler av boligen kan også leies ut,
Opprettet seksjoner: forutsatt at det

---

[d098_d098 | Side [1]]
r gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset

---

[d098_d098 | Side [1]]
randør.
eventuelle husordensregler. Kopi av disse ligger vedlagt i
salgsoppgaven. Du kan lese mer om Norgespris blant annet her: https:/ /
www.regjeringen.no/ no/ tema/ energi/ strom/
sporsmal‑og‑svar‑om‑norgespris
Beboernes forpliktelser og
dugnader Regulerings og arealplaner
Sameiet gjennomfører dugnad. Eiendommen er regulert til bolig, se vedlagt
reguleringsplan og kart. For mer informasjon om
reguleringsforhold, kontakt megler eller søk på
Energimerke saksnummer, adresse eller gårds‑ og bruksnummer

---

[d098_d098 | Side [1]]
boligen kan også leies ut,
Opprettet seksjoner: forutsatt at det er en del av boligens godkjente hoveddel
SNR: 29 med rom godkjent for varig opphold og at den utleide
Formål: Bolig delen ikke er adskilt som en selvstendig boenhet.
Sameiebrøk: 85/ 3500
EIENDOMMEN ER OPPDELT I 41 SEKSJONER
Radonmåling
Selger bærer risikoen for at kjøper kan få tinglyst skjøte Boligen ligger minimum tre etasjer over bakkenivå, og
uten andre heftelser enn de som det er avtalt at følger radonmålinger er derfor ikke

---

[d098_d098 | Side [1]]
g at det vil medføre
noe støy i arbeidsperioden. Det er fremlagt samsvarserklæring på deler av anlegget
datert: X
Er det andre forhold av betydning ved eiendommen som
kan være relevant for kjøper å vite om (f.eks. rasfare,
tinglyste forhold eller private avtaler)? Byggemåte
Ja. Informasjon er hentet fra vedlagte tilstandsrapport,
‑ Vinduene som vender ut mot Sinsenterrassen kan ikke datert 19.01.2026.
vendes rundt for å vaskes på innsiden. Dette fordi toppen
av rammen går ut av sporet når de vendes. Vi

---

[d098_d098 | Side [1]]
 BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
e.l. med hengelås, skal lås og nøkler til disse

---

[d098_d098 | Side [1]]
 Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Vi har mottatt nabovarsel om at trikketraseen for 17-trikken skal oppgraderes i 2026 og at det vil medføre noe støy i
Beskrivelse
arbeidsperioden.
20 Kjenner du til om det foreligger

---

[d098_d098 | Side [1]]
椀ghet innenfor 2% som er kravet i ny avhendingslov per 1.
januar 2022.
Leiligheten disponerer 1 kjellerbod. Boden er merket med nr. seksjon 29.
Lovlighet
Byggetegninger
Det foreligger ikke tegninger
Kommentar: Ikke mo琀琀a琀琀 tegninger ennå.
Brannceller
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Rørlegger og elektriker i forbindelse med ny琀琀

---

[d098_d098 | Side [1]]
ngsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven §

---

[d098_d098 | Side [1]]
 det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
Det er et gammelt bygg, og det er i alle fall noe skjevhet i gulvet på

---

[d098_d098 | Side [1]]
t)
545 (Tinglysingsgebyr ‑ hjemmel) Ved innfrielse av IN‑lån vil felleskostnadene reduseres til
545 (Tinglysningsgebyr ‑ pantedokument) kr. 4 954 pr. mnd.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
130 140 (Omkostninger totalt (uten Boligkjøperforsikring))
143 640 (Omkostninger totalt (med Eiendomsskatt
Boligkjøperforsikring)) I Oslo kommune er det eiendomsskatt på boliger og fast
eiendom som overstiger en fastsatt verdi. Informasjonen
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑

---

[d098_d098 | Side [1]]
-9
Langsiktig gjeld
Sameiet har refinansiert lån 8398.71.49836 i Handelsbanken og tatt opp nytt lån 1213.58.47362 i DnB på totalt kr. 12.000.000 i forbindelse med utskiftning
av røropplegg og rehabilitering av bad. Lån i DnB skal være IN-lån. Flytende rente med 4-termin i året. Forventet nedbetalt i 2038.
Boligselskapets bokførte gjeld er gitt uten formell sikkerhet. Det er sameiets eiere som har et protorisk ansvar/sikkerhet for låneopptaket.
Forskuddsbetalte kapitalkostnader
Boligselskapet har

---

[d098_d098 | Side [1]]
asjonen
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ over er hentet fra eiendomsskattelistene.
5 292 768 (Totalpris inkl. omkostninger (uten http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
Boligkjøperforsikring)) skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
5 306 268 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring))
Fellesgjeld
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Kr 212 628 pr. 09.03.2026
Lånebetingelser fellesgjeld: Sameiet har følgende lån og
vilkår:
Bank: DNB

---

[d098_d098 | Side [1]]
elser fellesgjeld: Sameiet har følgende lån og
vilkår:
Bank: DNB Bank ASA
Estimert totalpris ink. omk Lånenummer: 12135847362
Kr 5 306 268 Type: Annuitetslån, 4 terminer per år
Restsaldo pr. 09.03.2026: kr 5 843 580,‑
Andel av saldo: kr 212 628,‑
Felleskostnader Antall terminer til innfrielse: 48.9998
Felleskostnader kr 7 065,‑ pr. mnd Type Rente: Flytende
21

## Side 22

OM EIENDOMMEN
Rente: 6,45 % Formuesverdien er en prosentandel av den beregnede
boligverdien.
Mulighet for individuell nedbetaling på

---

[d098_d098 | Side [1]]
ndre kostnader
2024 2023
7718 Fellesarrangement 1 443 1 572
7720 Generalforsamling/Årsmøte 1 800 2 000
7770 Betalingskostnader 363 987
7773 Omkostninger innkreving 5 605 607
7790 Andre kostnader -21 0
7792 Øredifferanse -1 3
7795 Husleietap 228 -39
Sum 9 418 5 130
Note 10 - Øremerkede midler
Øremerkede midler er innestående bank for vedlikehold. Saldo 31/12-2024 er kr 1 178 439
323 Boligsameiet Sinsenterrassen 1-9 Org. nr. 971284412
101

## Side 102

Noter årsregnskap 2024 Boligsameiet Sinsenterrassen

---

[d098_d098 | Side [1]]
rlig til vedlikeholdsfond. strøm, og avtalen har bindingstid til 31.12.2026. Avtalen
følger boligen, og må derfor overtas av kjøper.
Per 31.12.2024 hadde sameiet disponible midler på kr 199
583,‑. Egenkapitalen var negativ med kr ‑4 862 060,‑. Norgespris er en ny, statlig ordning, som gir en
Ifølge notene til regnskapet er negativ egenkapital vanlig forutsigbar og fast strømpris på 50 øre per kWh med
i boligselskaper, da eiendelenes balanseførte verdi er mva (40 øre uten mva)gjennom året. Norgespris har

---

[d098_d098 | Side [1]]
meie bestående av 40 boligseksjoner og 1 fremtid, men at det kan bli behov for tiltak etter hvert. Det
næringsseksjon. Sameiet forvaltes av Boligbyggelaget foreligger foreløpig ikke noe styrevedtak om utskifting av
Usbl. vinduene.
Fra ordinært årsmøte avholdt 15. mai 2025 ble følgende Sameiet har fellesvaskeri, og brukere må følge instrukser
vedtatt: og reservere tid. Sykler og barnevogner kan plasseres i
egen bod eller i felleskjeller mot bakgården. Gamle
* Årsregnskapet for 2024 ble godkjent. møbler og

---

[d098_d098 | Side [1]]
tsinntekter
Felleskostnader bokføres og inntektsføres i takt med opptjening.
Inntektsføring ved salg av varer/tjenester skjer på leveringstidspunktet.
Tjenester inntektsføres etter hvert som de opptjenes.
Skattetrekk
Ved lønnskjøring overføres skattetrekk til en felles skattetrekkskonto i Usbl.
Sameiet består av 40 seksjoner og 1 næringsseksjon.
Sameiet er oppført på gnr. 83 bnr. 135 i Oslo kommune.
Sameiets eiendommer er forsikret i IF Skadeforsikring NUF med polisenr. SP1336839.
Forskuddsbetalte

---

[d098_d098 | Side [1]]
H, CBH 3
41205220
:ecnerefer
tnemucoD
40

## Side 41

25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
- Høsten 2022 ble det oppdaget kakerlakk i en annen

---

[d098_d098 | Side [1]]
rater og markeringsskilt til
fellesarealene. Vi har også delt ut batterier til røykvarsleren i gangen til alle seksjoner.
- Startet arbeidet med å revidere vedlikeholdsplanen
- Styret er ikke fornøyd med nåværende renholdsfirma og har hatt befaring med
alternativt firma som vi har bedre erfaring med
- Gjennomført HMS/vernerunde i fellesarealene
- Bedret likviditeten slik at den dekker utgifter til drift og løpende vedlikehold
- Gjennomført dugnad
- Tiltak for å begrense at uvedkommende bruker bakgården
Vi

---

[d098_d098 | Side [1]]
IF Skadeforsikring NUF med polisenr. SP1336839.
Forskuddsbetalte kapitalkostnader
Boligselskapet har tilrettelagt for forskuddsbetaling av kapitalkostnader for nedkvittering av hele eller deler av sameiets lån.
Nedkvitteringen inntektsføres direkte i resultatregnskapet på konto 3994.
Sameiets eiere er solidarisk ansvarlige for sameiets lån.
323 Boligsameiet Sinsenterrassen 1-9 Org. nr. 971284412
98

## Side 99

Noter årsregnskap 2024 Boligsameiet Sinsenterrassen 1-9
Note 1 - Innkrevde felleskostnader
2024

---

[d098_d098 | Side [1]]
Avdrag IN‑lån: kr 977,‑
212 628 (Andel av fellesgjeld) ‑ Lån nr: 12135847362 ‑ Renter IN‑lån: kr 1 134,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Avsetning vedlikeholdsfond: kr 506,‑
5 162 628 (Pris inkl. fellesgjeld) ‑ Internett: kr 265,‑
Omkostninger Ettersom sameiets lån har flytende rente, vil
felleskostnadene kunne endres i takt med
13 500 (Boligkjøperforsikring* (valgfritt)) renteendringer.
129 050 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Ved innfrielse av IN‑lån vil

---

[d098_d098 | Side [1]]
Omløpsmidler 329 648 317 664
Kortsiktiggjeld -130 065 -202 007
C Arbeidskapital 199 583 115 656
Sameiets arbeidskapital er de økonomiske midlene som de har til rådighet pr. 31.12
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
323 Boligsameiet Sinsenterrassen 1-9 Org. nr 971284412
94

## Side 95

Resultatregnskap 2024 Boligsameiet Sinsenterrassen 1-9
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 3 060 793 2 865 048 3 091 499 3 067

---

[d098_d098 | Side [1]]
at de ikke hadde spredd seg. Det ble aldri
Hvilket år ble jobben fullført?: 2008 oppdaget kakerlakker hos oss.
Firmanavn: Vet ikke ‑ Sameiet har en avtale med anticimex om rottefeller på
Beskrivelse av arbeidet: Vedlikehold og oppussing av utsiden av blokka, så vi antar at det har vært observert
fasade i regi av sameiet. rotter i uteområdet tidligere.
Kjenner du til forslag eller vedtatte reguleringsplaner,
andre planer, nabovarsel eller offentlige vedtak som kan Samsvarserklæring: Det fremgår av

---

[d098_d098 | Side [1]]
ldo 31.12: 6 240 082
Saldo 5 år frem i tid: 4 539 319
Langsiktig gjeld
Ant. andeler Andel gjeld 31.12 Sum fellesgjeld
Antall andeler, andel gjeld og sum av fellesgjeld lån 12135847362 1 249 526 249 526
3 231 140 693 420
22 223 260 4 911 720
1 150 643 150 643
1 107 614 107 614
1 104 307 104 307
1 22 847 22 847
323 Boligsameiet Sinsenterrassen 1-9 Org. nr. 971284412
102

## Side 103

Noter årsregnskap 2024 Boligsameiet Sinsenterrassen 1-9
Langsiktig gjeld
Sameiet har refinansiert lån 8398.71.49836 i

---

[d098_d098 | Side [1]]
neopptaket.
Forskuddsbetalte kapitalkostnader
Boligselskapet har tilrettelagt for forskuddsbetaling av kapitalkostnader for nedkvittering av hele eller deler av sameiets lån.
Nedkvitteringen inntektsføres direkte i resultatregnskapet på konto 3994.
Sameiets eiere er solidarisk ansvarlige for sameiets lån.
323 Boligsameiet Sinsenterrassen 1-9 Org. nr. 971284412
103

## Side 104

Noter årsregnskap 2024 Boligsameiet Sinsenterrassen 1-9
Note 13 - Andre overføringer
Vedlikeholdsfond for 2024.
323 Boligsameiet

---

[d098_d098 | Side [1]]
pplegg for vaskemaskin og disponerer en praktisk kjellerbod på
5 m².
Høydepunkter:
Flott, moderne kjøkken fra 2022 med integrerte hvitevarer
Åpen stue/ kjøkken‑løsning med god plass til spisebord
Lekkert bad fra 2018
Fyring, varmtvann og internett inkludert i felleskostnader
Sameiet har hyggelig fellesområde
9

## Side 10

Den gjennomgående planløsningen gir
en god flyt mellom rommene.
Spiseplassen binder stue og kjøkken
sammen. Oppvarming via radiatorer
tilknyttet fjernvarme er inkludert.

## Side 11

Her

---

[d098_d098 | Side [1]]
å slitasje på enkelte hengsler
Sameie og håndtak, blant annet et håndtak som er løst.
Boligsameiet Sinsenterrassen 1‑9
Det er styret som eventuelt må ta stilling til om vinduene
Organisasjonsnummer: 971284412 skal skiftes ut. Styret vil motta en rapport fra
fagpersonen i nær fremtid. Styreleder opplyser at det per
Boligsameiet Sinsenterrassen 1‑9 (org.nr. 971284412) er et nå ikke anses særlig aktuelt å bytte vinduene i nærmeste
eierseksjonssameie bestående av 40 boligseksjoner og 1 fremtid, men at det kan

---

[d098_d098 | Side [1]]
n 1.
Under seksjoneringen av sameiet i 1975 ble det ikke tildelt bod til seksjon 1 slik det ble
gjort for de andre seksjonene. Seksjon 1 planlegges nå ombygget fra lager til kontor, og i
den forbindelse ønsker seksjonseier tilgang til bod. Sameiet har en bod i kjelleren i
oppgang 9 som tidligere har vært brukt til sikringsskap, men nå står tomt og eier av
seksjon 1 ønsker nå å kjøpe denne for kr. 25 000. Det vil i tillegg være nødvendig med en
reseksjonering for å overføre denne boden til seksjon 1.
Dette

---

[d098_d098 | Side [1]]
vet. Boligselgerforsikring: Selger har tegnet
32

## Side 33

OM EIENDOMMEN
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved

---

[d098_d098 | Side [1]]
ådet tidligere.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: ABH, CBH 4
41205220
:ecnerefer
tnemucoD
41

## Side 42

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar

---

[d098_d098 | Side [1]]
t Tomteareal: 1832
9: Forsikring
Forsikret i: If Skadeforsikring NUF Polisenr: SP1336839
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0301
Etasje: Oppvarmingstype: Strøm
Heis: Nei
Parkeringstype: Ingen ()
Systemlås: Nei Antall rom:
Husdyrhold: Oppr. antall rom:
Livsløp standard: Nei Kategori: Leilighet
Fasiliteter:
Sameiet har egen webside med mye info: www.sinsenterrassen1-9.no
Sameiet sparer 250 000,- pr år til vedlikeholdsfond.
Sameiet har 15 parkeringsplasser til leie, Pt. 600,- pr. måned.

---

[d098_d098 | Side [1]]
opplyst at glassene i vinduene
sannsynligvis har blitt byttet ut på et tidligere tidspunkt. Sameiets forsikringsselskap: If Skadeforsikring NUF
De nye glassene skal være noe tyngre enn de
30

## Side 31

OM EIENDOMMEN
Polisenummer fellesforsikring: SP1336839 Energifarge: Ikke angitt
Husdyr: Det er generelt forbud mot dyrehold, men styret
kan gi dispensasjon. Det må søkes om styrets tillatelse til Info energiklasse
dyrehold. På grunn av rottefare må fugler ikke mates fra Denne boligen er energimerket. På en

---

[d098_d098 | Side [1]]
 Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 128






OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av

---

[d098_d098 | Side [1]]
ikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/

---

[d098_d098 | Side [1]]
rhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som

---

[d098_d098 | Side [1]]
 i oppgjøret.
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
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes

---

[d098_d098 | Side [1]]
r Vedlagt
Egenerklæring Tilsendt av megler pr. mail. Gjennomgå琀琀 Nei
Ikke
Forretningsfører Ikke mo琀琀a琀琀 ennå Nei
gjennomgå琀琀
Ikke
Eier Eier som viste og ga opplysninger Nei
gjennomgå琀琀
Ikke
Norges Eiendommer Info om tomteareal o.l. Nei
gjennomgå琀琀
Revisjoner
Versjon Ny versjon Kommentar
1 19.01.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 18554-1859 Befaringsdato: 08.12.2025 Side: 17 av 19
63

## Side 64

Sinsenterrassen 7, 0574 OSLO West Takst og Rådgivning AS
Gnr 83 - Bnr 135 Horniveien

---

[d098_d098 | Side [1]]
.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft

---

[d098_d098 | Side [1]]
2022. Det er også et par små sprekker i
murpussen i taket i stua over sofaen (lite synlig). Det er Kjenner du til om det er utført kontroll av el‑anlegget og/
noen få bruksmerker i parketten i stue/ kjøkken. eller andre installasjoner (f.eks. oljetank, sentralfyr,
ventilasjon)?
Kjenner du til om det er/ har vært sopp/ råteskader/ Ja.
insekter/ skadedyr på eiendommen som rotter, mus, Tidligere eier informerte om at det ble gjennomført
maur eller lignende? el‑kontroll i 2017. Samsvarserklæring henger i
Ja.

---

[d098_d098 | Side [1]]
.000,‑ kr 0,00
unntaksvis, og kun dersom dette er forhåndsavtalt med
megler i forbindelse med aksept av budet. Eierskiftegebyr kr 6 570,00
Hvitvasking
Eiendomsmeglere er underlagt lov om hvitvasking, og er Utlegg:
blant annet forpliktet til å gjennomføre kundetiltak av Selger dekker utlegg i henhold til oppdragsavtalen. Disse
både selger og kjøper. er estimert til ca. kr 25 470,00, og omfatter vanligvis
innhenting av informasjon fra kommunen, eventuell
Hvis kjøper ikke bidrar til at megler får gjennomført

---

[d098_d098 | Side [1]]
rsikring
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
eiendomskjøp. De står klare til å hjelpe deg i fem

---

[d098_d098 | Side [1]]
ller offentlige vedtak som kan Samsvarserklæring: Det fremgår av tilstandsrapporten at
medføre endringer i bruken av eiendommen eller av dens det mangler for deler av det elektriske arbeidet i boligen.
omgivelser? Iflg. selger foreligger det samsvarserklæring ifm. flytting
Ja. av kjøkken med blant annet flere kurser og montering av
Vi har mottatt nabovarsel om at trikketraseen for komfyrvakt.
17‑trikken skal oppgraderes i 2026 og at det vil medføre
noe støy i arbeidsperioden. Det er fremlagt

---

[d098_d098 | Side [1]]
 07:00. Støyende arbeid er kun tillatt
ble vedtatt. på hverdager mellom kl. 08:00‑18:00 og lørdager kl.
09:00‑16:00. Det er forbudt å montere TV‑antenner,
Styret vurderer å skifte ut nåværende parabolantenner eller markiser på fasaden. Utskifting av
røykvarslingsanlegg på grunn av stadige feilmeldinger vinduer og ytterdører, samt endringer av utvendige
og høye abonnementskostnader. Dette vurderes tatt inn i farger, krever forhåndsgodkjenning av styret og skal
vedlikeholdsplanen. Styret er heller ikke

---

[d098_d098 | Side [1]]
gnad
- Tiltak for å begrense at uvedkommende bruker bakgården
Vi vil legge til at styret ikke er fornøyd med nåværende røykvarslingsanlegg, da sentralen
stadig viser feilmeldinger, hvorav de fleste er "falske". Anlegget har også en forholdsvis
høy abonnementskostnad. Vi har pr nå ikke midler til å skifte ut anlegget, men styret
vurderer om dette er noe som bør tas inn i vedlikeholdsplanen.
Årsmeldingen er godkjent av styret 07.05.2025
110

## Side

---

[d098_d098 | Side [1]]
 som skal benyttes fra og med sitt pulserende byliv med populære kaffebarer som Tim
inntektesåret 2026, og den nye modellen henter Wendelboe, et variert restauranttilbud og spennende
informasjon om omsatte boliger fra grunnkretser i stedet butikker langs Markveien. En kort sykkeltur tar deg ned til
for kommuner. Akerselva, hvor du kan nyte flotte turer langs vannet.
22

## Side 23

OM EIENDOMMEN
I nærområdet finner du også flere parker og ‑ El‑motorsykler og el‑mopeder: kr 650 per år
grøntområder som

---

[d098_d098 | Side [1]]
3/357, 83/361, 83/532, 999/622
Kartnummer ONOR-202100768, datert 23.06.2023 og revidert 26.01.2024 og 25.06.2024.
Planens hensikt
Formålet med planen er å sikre varig vern av Sinsenbyen gjennom omregulering til hensynssone
H570 – bevaring kulturmiljø. Bevaringen omfatter et helhetlig kulturmiljø fra 1930- og 1950- tallet
med eksisterende bebyggelse, utomhusområder og vegetasjon. Eksisterende regulering for p-
anlegg under terreng i plan S-3769, vedtatt 15.03.2000, og sporvei i fjelltunnel, vedtatt

---

[d098_d098 | Side [1]]
er til bestemmelsesområder
7 Bestemmelsesområde #– forholdet til automatisk fredete
kulturminner
Innenfor alle bestemmelsesområdene er det ikke tillatt å gjennomføre terrengendringer eller
inngrep i eksisterende terreng utover ordinært hagearbeid knyttet til beplantning, og vedlikehold
av eksisterende infrastruktur innenfor eksisterende traseer og dybder.
OSLO KOMMUNE
Detaljregulering ble egengodkjent ved bystyrets vedtak av 20.11.2024, sak 278/24.
Reguleringsbestemmelsene er i samsvar med bystyrets

---

[d098_d098 | Side [1]]
ruksjoner, primært i tilstøtende vegger til bad, rommet både kan være i strid med teknisk forskrift og mangle
utforede kjellervegger og eventuelt i oppforede kjellergulv. godkjennelse i kommunen for den aktuelle bruken, uten at dette
vil få betydning for valg av arealkategori.
•Normal slitasjegrad: forventet slitasje av materiale i overflaten
som er basert på enkle visuelle observasjoner. Kan vurderes •Se øvrig informasjon om areal i rapporten, Norsk Standard 3940
sammen med bygningsdelens alder. (2012 og

---

[d098_d098 | Side [1]]
else utgjør maksimalt tillatt utnyttelse og høyder. Eksisterende avkjørsler
opprettholdes.
79

## Side 80

3.5 Forretning/ annen offentlig eller privat tjenesteyting (strøkstjenlig
virksomhet)/ næringsbebyggelse
Eksisterende bebyggelse utgjør maksimalt tillatt utnyttelse og høyder. Eksisterende avkjørsler
opprettholdes.
4 Samferdselsanlegg og teknisk infrastruktur
4.1 Veg
Vegen skal være offentlig. Sammen med søknad om tiltak på vegsystemet innenfor planområdet
skal det foreligge uttalelse fra

---

[d098_d098 | Side [1]]
råpningen mellom de to Vinduer:
soverommene er de fremdeles noen ujevnheter. Bygningen har malte trevinduer med 2‑lags glass fra
2001.
Kjenner du til om det er/ har vært sopp/ råteskader/
insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal Dører:
eller i andre boliger) som rotter, mus, maur eller lignende? Bygningen har en finert/ malt inngangsdør som er brann‑
Ja. og lydklassifisert. Innvendig har boligen malte
‑ Høsten 2022 ble det oppdaget kakerlakk i en annen fyllingsdører fra byggeåret 1936.

---

[d098_d098 | Side [1]]
0 per år som ikke er byggemeldt eller godkjent.
‑ Motorsykler og mopeder: kr 1.925 per år
‑ Elbiler: kr 1.300 per år Det er ikke samsvar mellom byggetegninger og dagens
23

## Side 24

OM EIENDOMMEN
planløsning: om sammen med BRA som et tillegg.
Separat kjøkken er flyttet til åpen løsning og soverom er GUA – summen av BRA og AHL. Brukes når boligen har
etablert der kjøkkenet opprinnelig var. gulvareal som ikke er måleverdig på grunn av for
eksempel skråtak eller lav himlingshøyde. Arealet

---

[d098_d098 | Side [1]]
len.
Anvendelse
Boligformål
UTVENDIG
Vinduer
Bygningen har malte trevinduer med 2-lags glass.
Årstall: 2001 Kilde: Produksjonsår på produkt
Dører
Bygningen har 昀椀nert/ malt inngangsdør
Finert inngangsdør Døren er brann- og lydklassi昀椀sert
Andre utvendige forhold
Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.
Vurdering av avvik:
• Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.
Konsekvens/琀椀ltak
• For å lukke avviket ihht NS 3600.2018

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Etasjeskille/gulv mot grunn har høydeforskjell på 15-30 mm gjennom hele rommet (TG2). Dette indikerer skjevheter i gulvet som kan kreve tiltak ved fremtidig renovering.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
        "Det er et gammelt bygg, og det er i alle fall noe skjevhet i gulvet",
        "Etasjeskillere er av betongdekke. Årstall: 1936"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Elektrisk anlegg er ikke fullstendig kontrollert og mangler delvis samsvarserklæring (TG2). Det er kun fremlagt samsvarserklæring på deler av anlegget, og det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav.",
      "evidence": [
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
        "Det fremgår av tilstandsrapporten at det mangler for deler av det elektriske arbeidet i boligen.",
        "Det er fremlagt samsvarserklæring på deler av anlegget datert: X",
        "Tidligere eier informerte om at det ble gjennomført el-kontroll i 2017."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Manglende tilstandsanalyserapport og vedlikeholdsplan for fellesdeler i bygget (TG2). Dette er et avvik etter NS 3600:2018 og gir usikkerhet om tilstanden til fellesarealer og -konstruksjoner.",
      "evidence": [
        "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
        "For å lukke avviket ihht NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt.",
        "Styret har startet arbeidet med å revidere vedlikeholdsplanen (fra årsmelding)"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Ventilasjon og vannbåren varme er registrert med TG2-avvik. Tekniske installasjoner kan kreve tiltak og medføre kostnader for kjøper.",
      "evidence": [
        "AVVIK SOM KAN KREVE TILTAK: Tekniske installasjoner > Ventilasjon, Tekniske installasjoner > Vannbåren varme",
        "Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens krav"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R5",
      "description": "Avtrekk på kjøkken i 3. etasje er registrert med TG2-avvik. Dette kan innebære mangelfull ventilasjon på kjøkkenet.",
      "evidence": [
        "AVVIK SOM KAN KREVE TILTAK: Kjøkken > 3. etasje > Stue/kjøkken > Avtrekk"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R6",
      "description": "Betydelig fellesgjeld i sameiet på kr 5 843 580 med flytende rente på 6,45%. Kjøpers andel er kr 212 628. Flytende rente medfører risiko for økte felleskostnader ved renteøkninger.",
      "evidence": [
        "Restsaldo pr. 09.03.2026: kr 5 843 580,-",
        "Andel av saldo: kr 212 628,-",
        "Type Rente: Flytende. Rente: 6,45 %",
        "Ettersom sameiets lån har flytende rente, vil felleskostnadene kunne endres i takt med renteendringer.",
        "Antall terminer til innfrielse: 48.9998",
        "Sameiet har refinansiert lån i Handelsbanken og tatt opp nytt lån i DnB på totalt kr. 12.000.000 i forbindelse med utskiftning av røropplegg og rehabilitering av bad."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R7",
      "description": "Sameiets egenkapital er negativ med kr -4 862 060 per 31.12.2024. Dette indikerer en svak finansiell stilling i sameiet, noe som kan medføre risiko for fremtidige kostnadsøkninger for seksjonseierne.",
      "evidence": [
        "Egenkapitalen var negativ med kr -4 862 060,-.",
        "Ifølge notene til regnskapet er negativ egenkapital vanlig i boligselskaper, da eiendelenes balanseførte verdi er lav",
        "Per 31.12.2024 hadde sameiet disponible midler på kr 199 583,-"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Sameiets eiere er solidarisk ansvarlige for sameiets lån. Dette innebærer at kjøper kan bli medansvarlig for andre seksjonseiers mislighold av fellesgjelden.",
      "evidence": [
        "Sameiets eiere er solidarisk ansvarlige for sameiets lån.",
        "Det er sameiets eiere som har et protorisk ansvar/sikkerhet for låneopptaket.",
        "Boligselskapet har tilrettelagt for forskuddsbetaling av kapitalkostnader for nedkvittering av hele eller deler av sameiets lån."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R9",
      "description": "Planløsningen er endret uten at dette er byggemeldt eller godkjent. Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var. Dette kan medføre juridiske og praktiske komplikasjoner.",
      "evidence": [
        "Det er ikke samsvar mellom byggetegninger og dagens planløsning.",
        "Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var.",
        "Det foreligger ikke tegninger. Kommentar: Ikke mottatt tegninger ennå.",
        "Samsvarserklæring: Det fremgår av tilstandsrapporten at det mangler for deler av det elektriske arbeidet i boligen. Iflg. selger foreligger det samsvarserklæring ifm. flytting av kjøkken med blant annet flere kurser og montering av komfyrvakt."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R10",
      "description": "Trikketraseen for 17-trikken skal oppgraderes i 2026, noe som vil medføre støy i arbeidsperioden. Dette kan påvirke beboernes livskvalitet i en periode.",
      "evidence": [
        "Trikketraseen for 17-trikken skal oppgraderes ila 2026. Det må forventes noe støy ifm oppgraderingen.",
        "Vi har mottatt nabovarsel om at trikketraseen for 17-trikken skal oppgraderes i 2026 og at det vil medføre noe støy i arbeidsperioden."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Vinduer kan ikke vendes rundt for å vaskes på innsiden, og det er slitasje på hengsler og håndtak. Styret har ikke tatt stilling til utskifting av vinduer, men det kan bli aktuelt.",
      "evidence": [
        "Vinduene som vender ut mot Sinsenterrassen kan ikke vendes rundt for å vaskes på innsiden. Dette fordi toppen av rammen går ut av sporet når de vendes.",
        "Det er slitasje på enkelte hengsler og håndtak, blant annet et håndtak som er løst.",
        "Styret vil motta en rapport fra fagpersonen i nær fremtid. Styreleder opplyser at det per nå ikke anses særlig aktuelt å bytte vinduene i nærmeste fremtid, men at det kan bli behov for tiltak etter hvert.",
        "Bygningen har malte trevinduer med 2-lags glass fra 2001.",
        "Glassene i vinduene sannsynligvis har blitt byttet ut på et tidligere tidspunkt. De nye glassene skal være noe tyngre enn de [opprinnelige]."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Det er oppdaget kakerlakk i en annen leilighet i sameiet høsten 2022, og det er observert rotter i uteområdet. Sameiet har avtale med Anticimex om rottefeller.",
      "evidence": [
        "Høsten 2022 ble det oppdaget kakerlakk i en annen leilighet. Det ble aldri oppdaget kakerlakker hos oss.",
        "Sameiet har en avtale med anticimex om rottefeller på utsiden av blokka, så vi antar at det har vært observert rotter i uteområdet tidligere."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R13",
      "description": "Røykvarslingsanlegget i sameiet er defekt med stadige feilmeldinger og høye abonnementskostnader. Styret har ikke midler til å skifte ut anlegget nå, noe som kan utgjøre en brannsikkerhetsrisiko.",
      "evidence": [
        "Styret vurderer å skifte ut nåværende røykvarslingsanlegg på grunn av stadige feilmeldinger og høye abonnementskostnader.",
        "Vi vil legge til at styret ikke er fornøyd med nåværende røykvarslingsanlegg, da sentralen stadig viser feilmeldinger, hvorav de fleste er 'falske'. Anlegget har også en forholdsvis høy abonnementskostnad. Vi har pr nå ikke midler til å skifte ut anlegget.",
        "Styret har delt ut batterier til røykvarsleren i gangen til alle seksjoner."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Eiendommen er regulert til hensynssone H570 – bevaring kulturmiljø. Dette kan begrense muligheten for endringer, påbygg og rehabilitering av eiendommen.",
      "evidence": [
        "Formålet med planen er å sikre varig vern av Sinsenbyen gjennom omregulering til hensynssone H570 – bevaring kulturmiljø. Bevaringen omfatter et helhetlig kulturmiljø fra 1930- og 1950-tallet med eksisterende bebyggelse, utomhusområder og vegetasjon.",
        "Innenfor alle bestemmelsesområdene er det ikke tillatt å gjennomføre terrengendringer eller inngrep i eksisterende terreng utover ordinært hagearbeid knyttet til beplantning.",
        "Detaljregulering ble egengodkjent ved bystyrets vedtak av 20.11.2024, sak 278/24.",
        "Utskifting av vinduer og ytterdører, samt endringer av utvendige farger, krever forhåndsgodkjenning av styret."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Bygget er fra 1936 og har eldre konstruksjoner som ikke er fullt ut undersøkt. Skjulte feil og mangler kan forekomme, særlig i konstruksjoner som ikke er tilgjengelige for inspeksjon.",
      "evidence": [
        "Boligbygg med flere boenheter - Byggeår: 1936",
        "Disse delene kan dermed ha feil eller mangler som ikke er avdekket.",
        "Det er ikke innhentet offentlige søknader eller godkjennelser på eiendommen.",
        "Takstmannen har ikke fått opplysninger om evnt. soppangrep, lekkasjer eller råteskader ut over hva som evnt. fremkommer i rapporten.",
        "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R16",
      "description": "Strømavtale med bindingstid til 31.12.2026 (Norgespris) følger boligen og må overtas av kjøper. Dette begrenser kjøpers valgfrihet i strømleverandør i bindingsperioden.",
      "evidence": [
        "strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17",
      "description": "Det er sprekker i murpussen i taket i stua over sofaen. Dette kan indikere bevegelser i konstruksjonen eller fuktproblemer.",
      "evidence": [
        "Det er også et par små sprekker i murpussen i taket i stua over sofaen (lite synlig)."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R18",
      "description": "Energikarakter D indikerer relativt høyt energiforbruk, noe som kan medføre høyere energikostnader for kjøper sammenlignet med nyere boliger.",
      "evidence": [
        "Energikarakter: D",
        "På en skala fra A til G, der A er best, har denne boligen oppnådd D (en normalbolig vil gjerne ligge i området C-F)."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R19",
      "description": "Sameiet har begrenset likviditet og disponible midler på kun kr 199 583 per 31.12.2024. Dette kan begrense sameiets evne til å håndtere uforutsette vedlikeholdskostnader uten å øke felleskostnadene.",
      "evidence": [
        "Per 31.12.2024 hadde sameiet disponible midler på kr 199 583,-.",
        "Vi har pr nå ikke midler til å skifte ut anlegget (røykvarslingsanlegget).",
        "Sameiet sparer 250 000,- pr år til vedlikeholdsfond.",
        "Øremerkede midler er innestående bank for vedlikehold. Saldo 31/12-2024 er kr 1 178 439"
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R20",
      "description": "Sameiet planlegger reseksjonering og salg av fellesbod til næringsseksjon (seksjon 1). Dette kan påvirke fellesarealene og potensielt medføre økte kostnader eller konflikter i sameiet.",
      "evidence": [
        "Seksjon 1 planlegges nå ombygget fra lager til kontor, og i den forbindelse ønsker seksjonseier tilgang til bod.",
        "Sameiet har en bod i kjelleren i oppgang 9 som tidligere har vært brukt til sikringsskap, men nå står tomt og eier av seksjon 1 ønsker nå å kjøpe denne for kr. 25 000.",
        "Det vil i tillegg være nødvendig med en reseksjonering for å overføre denne boden til seksjon 1."
      ],
      "source_documents": [
        "d098_d098"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "Ventilasjon TG2 avvik detaljer årsak tiltak kostnad",
    "Vannbåren varme TG2 avvik detaljer tilstand",
    "Avtrekk kjøkken 3. etasje TG2 detaljer",
    "Sprekker murpuss tak stue fukt årsak",
    "Røropplegg rehabilitering bad sameiet tilstand",
    "Branncelleinndeling avvik tilstandsrapport",
    "Fellesgjeld IN-lån individuell nedbetaling mulighet",
    "Reguleringsplan H570 bevaring kulturmiljø konkrete restriksjoner fasade",
    "Ulovlig planendring byggemelding konsekvenser kommunen"
  ],
  "reasoning": "\nGjennomgang av alle 18 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Gulvskjevhet (TG2):** Godt dokumentert med konkrete målinger (15-30 mm) og TG2-klassifisering. Confidence justeres marginalt opp til 0.97 da betongdekke fra 1936 er eksplisitt nevnt.\n\n**R2 – Elektrisk anlegg (TG2):** Godt dokumentert. Manglende samsvarserklæring på deler bekreftes, el-kontroll fra 2017 nevnes men er ikke fullstendig. Confidence beholdes på 0.93.\n\n**R3 – Manglende tilstandsanalyserapport (TG2):** Godt dokumentert. Styret har startet revidering av vedlikeholdsplan (fra årsmelding), noe som er et positivt tegn, men avviket er fortsatt ikke lukket. Confidence justeres marginalt ned til 0.90.\n\n**R4 – Ventilasjon og vannbåren varme (TG2):** Kun listet i avviksoppsummeringen uten detaljert beskrivelse i de tilgjengelige dokumentchunkene. Confidence justeres ned til 0.80 da detaljert evidens mangler.\n\n**R5 – Avtrekk kjøkken (TG2):** Kun listet i avviksoppsummeringen. Confidence justeres ned til 0.75 da detaljert evidens mangler.\n\n**R6 – Fellesgjeld og renterisiko:** Svært godt dokumentert med konkrete tall. Confidence justeres opp til 0.97. Lånet er opprinnelig på 12 MNOK tatt opp for røropplegg og bad-rehabilitering.\n\n**R7 – Negativ egenkapital:** Godt dokumentert. Disponible midler på kr 199 583 er positivt, men egenkapitalen er fortsatt sterkt negativ. Confidence beholdes på 0.88.\n\n**R8 – Solidaransvar:** Direkte bekreftet i to separate dokumentpassasjer. Confidence justeres opp til 0.92.\n\n**R9 – Ulovlig planendring:** Godt dokumentert. Samsvarserklæring for kjøkkenflytting er delvis på plass (el-arbeid), men selve planendringen er ikke byggemeldt. Confidence justeres opp til 0.93.\n\n**R10 – Trikkestøy 2026:** Godt dokumentert med nabovarsel. Confidence beholdes på 0.90.\n\n**R11 – Vinduer:** Godt dokumentert. Vinduer fra 2001 med tyngre glass enn originalt kan forklare problemet med vending. Confidence beholdes på 0.82.\n\n**R12 – Skadedyr:** Dokumentert, men kakerlakkproblemet var i annen leilighet og ble ikke spredt. Rotteproblemet er antatt basert på Anticimex-avtale. Confidence justeres marginalt ned til 0.78.\n\n**R13 – Røykvarslingsanlegg:** Svært godt dokumentert fra to separate kilder (salgsoppgave og årsmelding). Confidence justeres opp til 0.90 da dette er en reell brannsikkerhetsrisiko.\n\n**R14 – Kulturminnevern H570:** Godt dokumentert med reguleringsplan vedtatt 20.11.2024. Confidence justeres opp til 0.90.\n\n**R15 – Gammelt bygg/skjulte feil:** Godt dokumentert med generelle forbehold i tilstandsrapporten. Confidence justeres opp til 0.87.\n\n**R16 – Strømbindingstid:** Godt dokumentert. Norgespris er en statlig ordning med fast pris, noe som faktisk kan være en fordel. Risikoen er begrenset valgfrihet, ikke nødvendigvis høyere pris. Confidence justeres ned til 0.82.\n\n**R17 – Sprekker i murpuss:** Kun én setning som evidens, og det beskrives som \"lite synlig\". Ingen TG-klassifisering nevnt. Confidence justeres ned til 0.60 – risikoen er reell men svakt dokumentert.\n\n**R18 – Energikarakter D:** Dokumentert, men D er innenfor normalområdet (C-F). Risikoen er begrenset. Confidence justeres ned til 0.65.\n\n**Nye risikoer identifisert:**\n\n**R19 – Begrenset likviditet i sameiet:** Disponible midler på kun kr 199 583 er bekymringsfullt gitt sameiets størrelse og vedlikeholdsbehov. Vedlikeholdsfondet på kr 1 178 439 er øremerket. Styret har ikke midler til røykvarslingsanlegg. Dette er en selvstendig risiko utover negativ egenkapital.\n\n**R20 – Reseksjonering/salg av fellesbod:** Planlagt reseksjonering for å overføre bod til næringsseksjon kan påvirke fellesarealene og krever sameievedtak. Moderat risiko.\n\n**Manglende risikoer som burde vært vurdert:**\n- Branncelleinndeling: Tilstandsrapporten spør om avvik i branncelleinndeling, men svaret er ikke tydelig i de tilgjengelige chunkene.\n- Røropplegg: Sameiet har nettopp rehabilitert røropplegg (finansiert med 12 MNOK lån), men tilstanden til private stikkledninger er ukjent.\n- Manglende ferdigattest/brukstillatelse: Spørsmål 22 i egenerklæringen er ikke besvart i de tilgjengelige chunkene.\n"
}

## Raw Response
```json
{
  "id": "msg_019FcLbKG7jNC7hVw9hojm1h",
  "container": null,
  "content": [
    {
      "id": "toolu_01837hAUSEiFNDj1ZCzT67iA",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Etasjeskille/gulv mot grunn har høydeforskjell på 15-30 mm gjennom hele rommet (TG2). Dette indikerer skjevheter i gulvet som kan kreve tiltak ved fremtidig renovering.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "For å få tilstandsgrad 0 eller 1 må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
              "Det er et gammelt bygg, og det er i alle fall noe skjevhet i gulvet",
              "Etasjeskillere er av betongdekke. Årstall: 1936"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Elektrisk anlegg er ikke fullstendig kontrollert og mangler delvis samsvarserklæring (TG2). Det er kun fremlagt samsvarserklæring på deler av anlegget, og det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav.",
            "evidence": [
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
              "Det fremgår av tilstandsrapporten at det mangler for deler av det elektriske arbeidet i boligen.",
              "Det er fremlagt samsvarserklæring på deler av anlegget datert: X",
              "Tidligere eier informerte om at det ble gjennomført el-kontroll i 2017."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Manglende tilstandsanalyserapport og vedlikeholdsplan for fellesdeler i bygget (TG2). Dette er et avvik etter NS 3600:2018 og gir usikkerhet om tilstanden til fellesarealer og -konstruksjoner.",
            "evidence": [
              "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
              "For å lukke avviket ihht NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt.",
              "Styret har startet arbeidet med å revidere vedlikeholdsplanen (fra årsmelding)"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Ventilasjon og vannbåren varme er registrert med TG2-avvik. Tekniske installasjoner kan kreve tiltak og medføre kostnader for kjøper.",
            "evidence": [
              "AVVIK SOM KAN KREVE TILTAK: Tekniske installasjoner > Ventilasjon, Tekniske installasjoner > Vannbåren varme",
              "Kjøper må være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske løsninger som ikke holder dagens krav"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R5",
            "description": "Avtrekk på kjøkken i 3. etasje er registrert med TG2-avvik. Dette kan innebære mangelfull ventilasjon på kjøkkenet.",
            "evidence": [
              "AVVIK SOM KAN KREVE TILTAK: Kjøkken > 3. etasje > Stue/kjøkken > Avtrekk"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R6",
            "description": "Betydelig fellesgjeld i sameiet på kr 5 843 580 med flytende rente på 6,45%. Kjøpers andel er kr 212 628. Flytende rente medfører risiko for økte felleskostnader ved renteøkninger.",
            "evidence": [
              "Restsaldo pr. 09.03.2026: kr 5 843 580,-",
              "Andel av saldo: kr 212 628,-",
              "Type Rente: Flytende. Rente: 6,45 %",
              "Ettersom sameiets lån har flytende rente, vil felleskostnadene kunne endres i takt med renteendringer.",
              "Antall terminer til innfrielse: 48.9998",
              "Sameiet har refinansiert lån i Handelsbanken og tatt opp nytt lån i DnB på totalt kr. 12.000.000 i forbindelse med utskiftning av røropplegg og rehabilitering av bad."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R7",
            "description": "Sameiets egenkapital er negativ med kr -4 862 060 per 31.12.2024. Dette indikerer en svak finansiell stilling i sameiet, noe som kan medføre risiko for fremtidige kostnadsøkninger for seksjonseierne.",
            "evidence": [
              "Egenkapitalen var negativ med kr -4 862 060,-.",
              "Ifølge notene til regnskapet er negativ egenkapital vanlig i boligselskaper, da eiendelenes balanseførte verdi er lav",
              "Per 31.12.2024 hadde sameiet disponible midler på kr 199 583,-"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Sameiets eiere er solidarisk ansvarlige for sameiets lån. Dette innebærer at kjøper kan bli medansvarlig for andre seksjonseiers mislighold av fellesgjelden.",
            "evidence": [
              "Sameiets eiere er solidarisk ansvarlige for sameiets lån.",
              "Det er sameiets eiere som har et protorisk ansvar/sikkerhet for låneopptaket.",
              "Boligselskapet har tilrettelagt for forskuddsbetaling av kapitalkostnader for nedkvittering av hele eller deler av sameiets lån."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R9",
            "description": "Planløsningen er endret uten at dette er byggemeldt eller godkjent. Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var. Dette kan medføre juridiske og praktiske komplikasjoner.",
            "evidence": [
              "Det er ikke samsvar mellom byggetegninger og dagens planløsning.",
              "Separat kjøkken er flyttet til åpen løsning og soverom er etablert der kjøkkenet opprinnelig var.",
              "Det foreligger ikke tegninger. Kommentar: Ikke mottatt tegninger ennå.",
              "Samsvarserklæring: Det fremgår av tilstandsrapporten at det mangler for deler av det elektriske arbeidet i boligen. Iflg. selger foreligger det samsvarserklæring ifm. flytting av kjøkken med blant annet flere kurser og montering av komfyrvakt."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R10",
            "description": "Trikketraseen for 17-trikken skal oppgraderes i 2026, noe som vil medføre støy i arbeidsperioden. Dette kan påvirke beboernes livskvalitet i en periode.",
            "evidence": [
              "Trikketraseen for 17-trikken skal oppgraderes ila 2026. Det må forventes noe støy ifm oppgraderingen.",
              "Vi har mottatt nabovarsel om at trikketraseen for 17-trikken skal oppgraderes i 2026 og at det vil medføre noe støy i arbeidsperioden."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Vinduer kan ikke vendes rundt for å vaskes på innsiden, og det er slitasje på hengsler og håndtak. Styret har ikke tatt stilling til utskifting av vinduer, men det kan bli aktuelt.",
            "evidence": [
              "Vinduene som vender ut mot Sinsenterrassen kan ikke vendes rundt for å vaskes på innsiden. Dette fordi toppen av rammen går ut av sporet når de vendes.",
              "Det er slitasje på enkelte hengsler og håndtak, blant annet et håndtak som er løst.",
              "Styret vil motta en rapport fra fagpersonen i nær fremtid. Styreleder opplyser at det per nå ikke anses særlig aktuelt å bytte vinduene i nærmeste fremtid, men at det kan bli behov for tiltak etter hvert.",
              "Bygningen har malte trevinduer med 2-lags glass fra 2001.",
              "Glassene i vinduene sannsynligvis har blitt byttet ut på et tidligere tidspunkt. De nye glassene skal være noe tyngre enn de [opprinnelige]."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Det er oppdaget kakerlakk i en annen leilighet i sameiet høsten 2022, og det er observert rotter i uteområdet. Sameiet har avtale med Anticimex om rottefeller.",
            "evidence": [
              "Høsten 2022 ble det oppdaget kakerlakk i en annen leilighet. Det ble aldri oppdaget kakerlakker hos oss.",
              "Sameiet har en avtale med anticimex om rottefeller på utsiden av blokka, så vi antar at det har vært observert rotter i uteområdet tidligere."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R13",
            "description": "Røykvarslingsanlegget i sameiet er defekt med stadige feilmeldinger og høye abonnementskostnader. Styret har ikke midler til å skifte ut anlegget nå, noe som kan utgjøre en brannsikkerhetsrisiko.",
            "evidence": [
              "Styret vurderer å skifte ut nåværende røykvarslingsanlegg på grunn av stadige feilmeldinger og høye abonnementskostnader.",
              "Vi vil legge til at styret ikke er fornøyd med nåværende røykvarslingsanlegg, da sentralen stadig viser feilmeldinger, hvorav de fleste er 'falske'. Anlegget har også en forholdsvis høy abonnementskostnad. Vi har pr nå ikke midler til å skifte ut anlegget.",
              "Styret har delt ut batterier til røykvarsleren i gangen til alle seksjoner."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Eiendommen er regulert til hensynssone H570 – bevaring kulturmiljø. Dette kan begrense muligheten for endringer, påbygg og rehabilitering av eiendommen.",
            "evidence": [
              "Formålet med planen er å sikre varig vern av Sinsenbyen gjennom omregulering til hensynssone H570 – bevaring kulturmiljø. Bevaringen omfatter et helhetlig kulturmiljø fra 1930- og 1950-tallet med eksisterende bebyggelse, utomhusområder og vegetasjon.",
              "Innenfor alle bestemmelsesområdene er det ikke tillatt å gjennomføre terrengendringer eller inngrep i eksisterende terreng utover ordinært hagearbeid knyttet til beplantning.",
              "Detaljregulering ble egengodkjent ved bystyrets vedtak av 20.11.2024, sak 278/24.",
              "Utskifting av vinduer og ytterdører, samt endringer av utvendige farger, krever forhåndsgodkjenning av styret."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Bygget er fra 1936 og har eldre konstruksjoner som ikke er fullt ut undersøkt. Skjulte feil og mangler kan forekomme, særlig i konstruksjoner som ikke er tilgjengelige for inspeksjon.",
            "evidence": [
              "Boligbygg med flere boenheter - Byggeår: 1936",
              "Disse delene kan dermed ha feil eller mangler som ikke er avdekket.",
              "Det er ikke innhentet offentlige søknader eller godkjennelser på eiendommen.",
              "Takstmannen har ikke fått opplysninger om evnt. soppangrep, lekkasjer eller råteskader ut over hva som evnt. fremkommer i rapporten.",
              "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R16",
            "description": "Strømavtale med bindingstid til 31.12.2026 (Norgespris) følger boligen og må overtas av kjøper. Dette begrenser kjøpers valgfrihet i strømleverandør i bindingsperioden.",
            "evidence": [
              "strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17",
            "description": "Det er sprekker i murpussen i taket i stua over sofaen. Dette kan indikere bevegelser i konstruksjonen eller fuktproblemer.",
            "evidence": [
              "Det er også et par små sprekker i murpussen i taket i stua over sofaen (lite synlig)."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R18",
            "description": "Energikarakter D indikerer relativt høyt energiforbruk, noe som kan medføre høyere energikostnader for kjøper sammenlignet med nyere boliger.",
            "evidence": [
              "Energikarakter: D",
              "På en skala fra A til G, der A er best, har denne boligen oppnådd D (en normalbolig vil gjerne ligge i området C-F)."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R19",
            "description": "Sameiet har begrenset likviditet og disponible midler på kun kr 199 583 per 31.12.2024. Dette kan begrense sameiets evne til å håndtere uforutsette vedlikeholdskostnader uten å øke felleskostnadene.",
            "evidence": [
              "Per 31.12.2024 hadde sameiet disponible midler på kr 199 583,-.",
              "Vi har pr nå ikke midler til å skifte ut anlegget (røykvarslingsanlegget).",
              "Sameiet sparer 250 000,- pr år til vedlikeholdsfond.",
              "Øremerkede midler er innestående bank for vedlikehold. Saldo 31/12-2024 er kr 1 178 439"
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R20",
            "description": "Sameiet planlegger reseksjonering og salg av fellesbod til næringsseksjon (seksjon 1). Dette kan påvirke fellesarealene og potensielt medføre økte kostnader eller konflikter i sameiet.",
            "evidence": [
              "Seksjon 1 planlegges nå ombygget fra lager til kontor, og i den forbindelse ønsker seksjonseier tilgang til bod.",
              "Sameiet har en bod i kjelleren i oppgang 9 som tidligere har vært brukt til sikringsskap, men nå står tomt og eier av seksjon 1 ønsker nå å kjøpe denne for kr. 25 000.",
              "Det vil i tillegg være nødvendig med en reseksjonering for å overføre denne boden til seksjon 1."
            ],
            "source_documents": [
              "d098_d098"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "Ventilasjon TG2 avvik detaljer årsak tiltak kostnad",
          "Vannbåren varme TG2 avvik detaljer tilstand",
          "Avtrekk kjøkken 3. etasje TG2 detaljer",
          "Sprekker murpuss tak stue fukt årsak",
          "Røropplegg rehabilitering bad sameiet tilstand",
          "Branncelleinndeling avvik tilstandsrapport",
          "Fellesgjeld IN-lån individuell nedbetaling mulighet",
          "Reguleringsplan H570 bevaring kulturmiljø konkrete restriksjoner fasade",
          "Ulovlig planendring byggemelding konsekvenser kommunen"
        ],
        "reasoning": "\nGjennomgang av alle 18 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Gulvskjevhet (TG2):** Godt dokumentert med konkrete målinger (15-30 mm) og TG2-klassifisering. Confidence justeres marginalt opp til 0.97 da betongdekke fra 1936 er eksplisitt nevnt.\n\n**R2 – Elektrisk anlegg (TG2):** Godt dokumentert. Manglende samsvarserklæring på deler bekreftes, el-kontroll fra 2017 nevnes men er ikke fullstendig. Confidence beholdes på 0.93.\n\n**R3 – Manglende tilstandsanalyserapport (TG2):** Godt dokumentert. Styret har startet revidering av vedlikeholdsplan (fra årsmelding), noe som er et positivt tegn, men avviket er fortsatt ikke lukket. Confidence justeres marginalt ned til 0.90.\n\n**R4 – Ventilasjon og vannbåren varme (TG2):** Kun listet i avviksoppsummeringen uten detaljert beskrivelse i de tilgjengelige dokumentchunkene. Confidence justeres ned til 0.80 da detaljert evidens mangler.\n\n**R5 – Avtrekk kjøkken (TG2):** Kun listet i avviksoppsummeringen. Confidence justeres ned til 0.75 da detaljert evidens mangler.\n\n**R6 – Fellesgjeld og renterisiko:** Svært godt dokumentert med konkrete tall. Confidence justeres opp til 0.97. Lånet er opprinnelig på 12 MNOK tatt opp for røropplegg og bad-rehabilitering.\n\n**R7 – Negativ egenkapital:** Godt dokumentert. Disponible midler på kr 199 583 er positivt, men egenkapitalen er fortsatt sterkt negativ. Confidence beholdes på 0.88.\n\n**R8 – Solidaransvar:** Direkte bekreftet i to separate dokumentpassasjer. Confidence justeres opp til 0.92.\n\n**R9 – Ulovlig planendring:** Godt dokumentert. Samsvarserklæring for kjøkkenflytting er delvis på plass (el-arbeid), men selve planendringen er ikke byggemeldt. Confidence justeres opp til 0.93.\n\n**R10 – Trikkestøy 2026:** Godt dokumentert med nabovarsel. Confidence beholdes på 0.90.\n\n**R11 – Vinduer:** Godt dokumentert. Vinduer fra 2001 med tyngre glass enn originalt kan forklare problemet med vending. Confidence beholdes på 0.82.\n\n**R12 – Skadedyr:** Dokumentert, men kakerlakkproblemet var i annen leilighet og ble ikke spredt. Rotteproblemet er antatt basert på Anticimex-avtale. Confidence justeres marginalt ned til 0.78.\n\n**R13 – Røykvarslingsanlegg:** Svært godt dokumentert fra to separate kilder (salgsoppgave og årsmelding). Confidence justeres opp til 0.90 da dette er en reell brannsikkerhetsrisiko.\n\n**R14 – Kulturminnevern H570:** Godt dokumentert med reguleringsplan vedtatt 20.11.2024. Confidence justeres opp til 0.90.\n\n**R15 – Gammelt bygg/skjulte feil:** Godt dokumentert med generelle forbehold i tilstandsrapporten. Confidence justeres opp til 0.87.\n\n**R16 – Strømbindingstid:** Godt dokumentert. Norgespris er en statlig ordning med fast pris, noe som faktisk kan være en fordel. Risikoen er begrenset valgfrihet, ikke nødvendigvis høyere pris. Confidence justeres ned til 0.82.\n\n**R17 – Sprekker i murpuss:** Kun én setning som evidens, og det beskrives som \"lite synlig\". Ingen TG-klassifisering nevnt. Confidence justeres ned til 0.60 – risikoen er reell men svakt dokumentert.\n\n**R18 – Energikarakter D:** Dokumentert, men D er innenfor normalområdet (C-F). Risikoen er begrenset. Confidence justeres ned til 0.65.\n\n**Nye risikoer identifisert:**\n\n**R19 – Begrenset likviditet i sameiet:** Disponible midler på kun kr 199 583 er bekymringsfullt gitt sameiets størrelse og vedlikeholdsbehov. Vedlikeholdsfondet på kr 1 178 439 er øremerket. Styret har ikke midler til røykvarslingsanlegg. Dette er en selvstendig risiko utover negativ egenkapital.\n\n**R20 – Reseksjonering/salg av fellesbod:** Planlagt reseksjonering for å overføre bod til næringsseksjon kan påvirke fellesarealene og krever sameievedtak. Moderat risiko.\n\n**Manglende risikoer som burde vært vurdert:**\n- Branncelleinndeling: Tilstandsrapporten spør om avvik i branncelleinndeling, men svaret er ikke tydelig i de tilgjengelige chunkene.\n- Røropplegg: Sameiet har nettopp rehabilitert røropplegg (finansiert med 12 MNOK lån), men tilstanden til private stikkledninger er ukjent.\n- Manglende ferdigattest/brukstillatelse: Spørsmål 22 i egenerklæringen er ikke besvart i de tilgjengelige chunkene.\n"
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
    "input_tokens": 22451,
    "output_tokens": 6976,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
