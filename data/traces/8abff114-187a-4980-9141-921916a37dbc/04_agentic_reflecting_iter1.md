# Trace: agentic_reflecting_iter1
- **Run ID:** 8abff114-187a-4980-9141-921916a37dbc
- **Tidspunkt:** 2026-03-25T01:25:11.089625+00:00
- **Varighet:** 111.15s
- **Input tokens:** 21709
- **Output tokens:** 6527

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
Risiko 1: TG3: Takkonstruksjon/loft har liten lufting i nedre kant og registrert symptom på aktivitet fra skadedyr. Dette er et alvorlig avvik som krever utbedring.
  Confidence: 0.97
  Evidens: Takkonstruksjon/ loft grunnet liten lufting i nedre kant av konstruksjonen og registrert symptom på aktivitet fra skadedyr.; STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft

Risiko 2: TG3: Sluk, membran og tettesjikt på bad i 1. etg (12,8 m²) har manglende drenering fra innebygget sisterne. Alvorlig avvik med risiko for vannskade.
  Confidence: 0.97
  Evidens: Sluk, membran og tettesjikt på bad i 1. etg grunnet manglende drenering fra innebygget sisterne; STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Bad (12,8 m²) > Sluk, membran og tettesjikt

Risiko 3: TG3: Vaskerom i 1. etg har avvik på ventilasjon. Klassifisert som stort/alvorlig avvik.
  Confidence: 0.93
  Evidens: STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Vaskerom (4,5 m²) > Ventilasjon

Risiko 4: Råteskader i bordkledning og manglende lufting/musesperre i nedre kant av kledning mot grunnmur. Risiko for fukt- og skadedyrskader i konstruksjonen.
  Confidence: 0.95
  Evidens: Det er påvist spredte råteskader i bordkledningen.; Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.; Det er ingen musesperre i nedre kant av konstruksjon.; Konstruksjonene må sikres mot råte, sopp og skadedyr.

Risiko 5: Manglende ferdigattest og ufullstendige byggetegninger. Plantegninger over u-etg og 1-etg finnes ikke i kommunens arkiver. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter.
  Confidence: 0.97
  Evidens: Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen. Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.; Plantegninger over u-etg og 1-etg ligger ikke i kommunens arkiver.; Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter. Dette inkluderer også risikoen for om ferdigattest vil bli gitt, samt alle tilknyttede kostnader.

Risiko 6: Avvik i branncelleinndeling. Det er ikke etablert brannskille mellom boenhetene og mot felles trappeoppgang. Dette medfører raskere brannspredning og betydelige utbedringskostnader.
  Confidence: 0.96
  Evidens: Det gjøres oppmerksom på at det ikke er etablert brannskille mellom boenhetene og mot felles trappeoppgang. For å tilfredsstille dagens krav vil dette medføre betydelige utgifter.; Det er tegn på avvik i branncelleinndeling ut ifra dagens byggtekniske forskrift.; Dersom det oppstår brann tilløp i en eldre bolig vil brannen spre seg raskere når det er avvik i brancelleinndelingen.

Risiko 7: Brønnvann er ikke godkjent som drikkevann. Siste vanntest fra 2020 viste at vannet ikke var godt nok til å drikke. Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett.
  Confidence: 0.96
  Evidens: Brønnvann har ikke vært testet de senere årene. Vanntest ble utført i 2020, og vannet var ikke godt nok til å drikke.; Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett. Eiendommen har brønn. Brønnvann har... Vannet bør ikke benyttes til drikkevann før det er dokumentert tilfredsstillende.; Vannrenseanlegg fra UNIK FILTERSYSTEM AS vil bli installert ved behov etter resultat fra vannprøver analysert hos Eurofins Environment Testing Norway AS.

Risiko 8: Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid. Ukjent type rør og tilstandsvurdering må utføres av spesialfirma.
  Confidence: 0.93
  Evidens: Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.; Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.; Ukjent type avløpsrør og ukjent type vannledning. Tilstandsgrad er satt utifra alder. Utvendige vann-avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma.

Risiko 9: Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma. Eiendommen er ikke tilknyttet offentlig avløpsnett.
  Confidence: 0.88
  Evidens: Eiendommen har avløp til septiktank.; Septiktank i glassfibr. Septiktank ble skiftet i 2018 ifølge tidligere rapport. Tilstandsgrad er satt utifra alder. Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma.

Risiko 10: Ingen radonmålinger er utført og bygget har ikke radonsperre. Eiendommen ligger i område definert som usikker mtp. radonforekomst.
  Confidence: 0.95
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Eiendommen ligger i område med som er definert som usikker mtp. radonforekomst.; Det bør gjennomføres radonmålinger.

Risiko 11: Manglende rekkverk på innvendig trapp og for lave rekkverkshøyder på balkong/terrasse og utvendige trapper i forhold til dagens krav. Sikkerhetsrisiko.
  Confidence: 0.96
  Evidens: Det er ikke montert rekkverk på innvendig trapp.; Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.; Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.; Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper.; Rekkverkshøyder er under dagens forskriftskrav til rekkverk i utvendige trapper.; Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.

Risiko 12: Skjevheter i etasjeskille med høydeforskjell på 15–30 mm gjennom hele rommet (TG2). Kan ha sammenheng med skjevheter i fundament.
  Confidence: 0.88
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; Skjevheter i etasjeskille kan ha sammenheng med eventuelle skjevheter i fundament. For å kartlegge om det er pågående problemer må det foretas undersøkelser over tid.

Risiko 13: Løs puss på grunnmur og terrengforhold med ikke synlig knotteplast/fuktsikring inntil grunnmuren. Risiko for fuktskader.
  Confidence: 0.87
  Evidens: Det er noe løs puss i ett lite område på opprinnelig del.; Løs puss på grunnmur.; Terrengforhold grunnet ikke synlig knotteplast/fuktsikring inntil grunnmuren.; Grunnmur bør vedlikeholdes og repareres i område...

Risiko 14: Forstøtningsmurer bærer preg av elde/slitasje med observerte skjevheter, setninger og sprekker. Sikkerhetsrisiko ved manglende rekkverk/sikring.
  Confidence: 0.88
  Evidens: Forstøtningsmurer bærer preg av elde/slitasje og flere skjevheter og setninger/sprekker ble observert.; Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.; Dersom det oppstår sprekker, skjevheter/setninger eller tre rekkverk/tre trapp har råteskader, bør utbedringer utføres.

Risiko 15: Manglende dampsperre i konstruksjonen. Utfordrende og kostbart å utbedre da overflater mot kald sone må rives.
  Confidence: 0.85
  Evidens: Vedr. manglende dampsperre/plast: Det vil være utfordrende å gjennomføre tiltak, siden dampsperre skal ligge på varm side av bjelkelag/isolasjon mot det kalde område. Dette betyr at overflaten (vegg/himling) mot kaldt sone må rives og...

Risiko 16: Eiendommen ligger i LNF-område (Landbruks-, natur- og friluftsområde) og i hensynssone for kulturmiljø (Fana-Stend, berøringsgrad 100%). Dette medfører strenge krav til bygging og ombygging.
  Confidence: 0.92
  Evidens: Eiendommen ligger i et uregulert område, men er i henhold til kommuneplanens arealdel 2018, datert 19.06.2019, avsatt til LNF. Det at eiendommen er avsatt til LNF gjør at det er strenge krav til bygging og ombygging på eiendommen.; Eiendommen befinner seg i følgende hensynssoner: ‑ Kulturmiljø, Fana‑Stend. Berøringsgrad 100%

Risiko 17: Kjøper overtar bindende strømavtale (Norgespris) med bindingstid til 31.12.2026. Avtalen er obligatorisk å overta og bortfaller eventuell strømstøtte.
  Confidence: 0.9
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.; Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte.

Risiko 18: Egeninnsats (ufaglært arbeid) er utført på lydisolering av tak i stue. Risiko for feil utførelse og skjulte mangler.
  Confidence: 0.82
  Evidens: Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Egeninnsats: Lydisolert tak i stue.; Tidvis kan det høres trinnlyd fra naboer over.

Risiko 19: Nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet i området.
  Confidence: 0.8
  Evidens: Det gjøres oppmerksom på at selger har mottatt nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet.

Risiko 20: Energikarakter F (dårligste klasse) med energifarge oransje. Boligen har høyt energiforbruk og begrenset energieffektivitet.
  Confidence: 0.9
  Evidens: Energikarakter: F; Energifarge: Oransje

Risiko 21: Overflater vegger og himling på bad i 1. etg (12,8 m²) har avvik, inkludert panel i våtsone ved badekar og i ytre del av dusjsone og over servanter (TG2).
  Confidence: 0.88
  Evidens: Overflater vegger og himling på bad i 1 etg (12,8m²) grunnet panel i våtsone v/ badekar og i ytre del av dusjsone og over servanter.

Risiko 22: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet vises ikke i grunnboksutskriften og har prioritet foran tinglyste banklån.
  Confidence: 0.85
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen.

Dokumentkontekst:
[d114_d114 | Side [1]]
eholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av

---

[d114_d114 | Side [1]]
old som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et

---

[d114_d114 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d114_d114 | Side [1]]
ligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, Bygningsdeler vurdert med TG3:
er vedlagt salgsoppgaven. Det er viktig at interessenter ‑ Takkonstruksjon/ loft grunnet liten lufting i nedre kant av
grundig gjennomgår disse dokumentene før bud legges konstruksjonen og registrert symptom på aktivitet fra
inn. skadedyr.
‑ Sluk, membran og tettesjikt på bad i 1. etg grunnet
All informasjon i tilstandsrapporten anses som kjent for manglende drenering fra innebygget sisterne,

---

[d114_d114 | Side [1]]
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

[d114_d114 | Side [1]]
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

[d114_d114 | Side [1]]
utelukkes. Vurdering er ikke u琀昀ørt e琀琀er NS 3600, men vil gi en indikator
på skjevheter i etasjeskille.
Vurdering av avvik:
• Det er målt høydeforskjell på mellom 15-30 mm gjennom hele
rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l
godkjente måleavvik.
Konsekvens/琀椀ltak
• For å få 琀椀lstandsgrad 0 eller 1 må høydeforskjeller re琀琀es opp. Det vil
imidler琀椀d sjelden være økonomisk rasjonelt som et enkeltstående 琀椀ltak
i en bolig som de琀琀e. Dersom boligen en gang skal renoveres, kan

---

[d114_d114 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d114_d114 | Side [1]]
NE PREMISSER:
som er basert på enkle visuelle observasjoner. Kan vurderes I denne rapporten er det ikke satt kostnadsestimat for
sammen med bygningsdelens alder. bygningsdeler med tilstandsgrad 2, dette må eventuelt bestilles
som tillegg. Det vil derfor være feil på søylediagram og oversikt
over fordeling av tilstandsgrader som kan, eller som ikke krever
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
tiltak. Viser til hvert enkeltpunkt i rapporten.
del av et byggverk vil kunne tjene sitt

---

[d114_d114 | Side [1]]
tandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er

---

[d114_d114 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d114_d114 | Side [1]]
esik琀椀get/琀椀lstandsvurdert. Ukjent type avløpsrør og ukjent type vannledning.
Tilstandsgrad er sa琀琀 u琀椀fra alder. Utvendige vann-avløpsrør er skjult og
Vurdering av avvik: 琀椀lstandsvurdering må u琀昀øres av spesial昀椀rma.
• Det er påvist andre avvik:
Vurdering av avvik:
Det er noe løs puss i e琀琀 lite område på opprinnelig del. Skjevheter i
• Mer enn halvparten av forventet bruks琀椀d er passert på utvendige
etasjeskille kan ha sammenheng med eventuelle skjevheter i
avløpsledninger.
fundament. For å kartlegge om

---

[d114_d114 | Side [1]]
Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Tilstandsrapport
Vurdering av avvik:
• Det er påvist spredte råteskader i bordkledningen.
• Det er ingen eller liten lu昀琀ing i nedre kant av kledning mot grunnmur.
• Det er ingen musesperre i nedre kant av konstruksjon.
• Det er påvist andre avvik:
Det er ingen eller liten lu昀琀ing i nedre kant av kledning mot grunnmur
(gjelder deler av y琀琀ervegg). Det er ingen musesperre i nedre kant av
konstruksjon (gjelder deler av y琀琀ervegg). Det

---

[d114_d114 | Side [1]]
ninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer enn
•Rapporten baserer seg på krav i forskrift til avhendingslova fem år siden siste el-tilsyn. Ved behov for grundigere
(tryggere bolighandel). Rapportens struktur, metode og undersøkelser, kan bygningssakkyndig anbefale

---

[d114_d114 | Side [1]]
se, miljø og sikkerhet
Vurdering av avvik:
• Det er påvist andre avvik:
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 28 av 38
78

## Side 79

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Tilstandsrapport
De琀琀e punktet inneholder tydelige og le琀琀 synlige forhold ved boligen • Håndløper på innvendig trapp bør monteres, men det var ikke krav på
som åpenbart kan påvirke helse, miljø og sikkerhet, og som bygge琀椀dspunktet.
bygningssakkyndige har

---

[d114_d114 | Side [1]]
er du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for

---

[d114_d114 | Side [1]]
LVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller
uregelmessigheter,

---

[d114_d114 | Side [1]]
esialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Vurdering av avvik:
• Åpninger i rekkverk er større enn dagens forskri昀琀skrav 琀椀l rekkverk i
innvendige trapper.
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med
radonsperre.
• Det er ikke montert rekkverk på innvendig trapp.
• Det er manglende rekkverk/annen sikring på forstøtningsmurer som
krever de琀琀e u琀椀fra dagens krav.
• Det er tegn på avvik i branncelleinndeling ut ifra dagens

---

[d114_d114 | Side [1]]
Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Halvpart av tomannsbolig
STORE ELLER ALVORLIGE AVVIK
Utvendig > Takkonstruksjon/Lo昀琀 Gå til side
Våtrom > 1-etg > Bad (12,8 m²) > Sluk, membran og Gå til side
te琀琀esjikt
Våtrom > 1-etg > Bad 2 (2,3 m²) > Generell Gå til side
Våtrom > 1-etg > Vaskerom (4,5 m²) > Ven琀椀lasjon Gå til

---

[d114_d114 | Side [1]]
kader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør eller håndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste og basert på
Utbedringskostnadene vil også avhenge av personlige visuell observasjon. Rapporten er basert på undersøkelsesnivå 1,
preferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under

---

[d114_d114 | Side [1]]
Servitu琀琀er i grunn:
1945/303256-3/106 12.11.1945 BESTEMMELSE OM GJERDE
Overført fra: KNR: 4601 GNR: 96 BNR: 159
Med 昀氀ere bestemmelser
GJELDER DENNE REGISTERENHETEN MED FLERE
2000/12607-2/106 12.05.2000 ERKLÆRING/AVTALE
Denne seksjon har 琀椀lleggsdel - bygning.
GJELDER DENNE REGISTERENHETEN MED FLERE
He昀琀elser:
Ved et eventuelt salg/kjøp oppfordres kontroll av
grunnboken for eventuelle he昀琀elser på generelt grunnlag.
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 35 av 38
85

## Side

---

[d114_d114 | Side [1]]
hobby +
For mer informasjon om reguleringsforhold, kontakt bod i kjeller
megler eller søk på saksnummer, adresse eller gårds‑ og
bruksnummer på Plan‑ og bygningsetatens hjemmeside. Seksjonering kan fås ved henvendelse til megler.
Legalpant: Kommunen har legalpant som sikkerhet for
Tinglyste heftelser
betaling av kommunale avgifter og eventuell
Tinglyste heftelser og rettigheter: På eiendommen er det eiendomsskatt. Legalpant er et pant som ikke vises i
tinglyst følgende heftelser og rettigheter som følger

---

[d114_d114 | Side [1]]
ke vises i
tinglyst følgende heftelser og rettigheter som følger grunnboksutskriften, og har prioritet foran for eksempel
eiendommens matrikkel ved overskjøting til ny tinglyste banklån på eiendommen.
hjemmelshaver:
Vei, vann og avløp
4601/ 96/ 159/ 1:
12.11.1945 ‑ Dokumentnr: 303256 ‑ Bestemmelse om Adkomst til eiendommen er via offentlig til privat vei.
gjerde Eiendommen er ikke tilknyttet offentlig vann‑ og
Rettighet hefter i: Knr:4601 Gnr:96 Bnr:43 avløpsnett. Eiendommen har brønn. Brønnvann har

---

[d114_d114 | Side [1]]
e 49

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det

---

[d114_d114 | Side [1]]
av/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: NH, KH 3
60006230
:ecnerefer
tnemucoD
49

## Side

---

[d114_d114 | Side [1]]
hver seksjon i et sameie er det fastsa琀琀 en sameiebrøk som angir seksjonseierens
eierandel i sameiet. Denne brukes som grunnlag for fordeling av fellesutgi昀琀er og fellesinntekter.
Sameiebrøken er fordelt 1/2.
Servitu琀琀er.
En servitu琀琀 er en re琀紀ghet på en grunneiendom som begrenser
grunneierens bruk av eiendommen. Servitu琀琀en kan være
琀椀dsbegrenset eller evigvarende. En servitu琀琀 kalles
også for en he昀琀else på den eiendom den hviler.
Servitu琀琀er i grunn:
1945/303256-3/106 12.11.1945 BESTEMMELSE OM

---

[d114_d114 | Side [1]]
, 4
området. soverom og stue/ kjøkken
BRA‑e 29m²: Garasje med en biloppstillingsplass
Eiendommen er oppført før 1998 og og i hht. plan‑ og
bygningsloven § 21‑10, utstedes ikke ferdigattest for I tillegg har boligen to eksterne boder i underetasje på
bygg/ endringer som ble omsøkt før 01.01.1998. Det vil 5,4m² og 7,8m²
dermed ikke være mulig å be om ferdigattest for slike
tiltak. Dette betyr ikke at tiltak blir lovlige, men at saken
Areal
ikke lenger kan avsluttes med ferdigattest. Kjøper påtar
seg risikoen

---

[d114_d114 | Side [1]]
ert i handelen.
rekkverk i utvendige trapper.
Nåværende eier har tegnet avtale om Norgespris på
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen
Øvrig
følger boligen, og må derfor overtas av kjøper.
informasjon
Norgespris er en ny, statlig ordning, som gir en
forutsigbar og fast strømpris på 50 øre per kWh med
Adresse
mva (40 øre uten mva)gjennom året. Norgespris har et
Fanastølen 20, 5244 FANA forbrukstak på 5 000 kWh per måned for husholdninger
og 1 000 kWh for hytter. Når det er tegnet avtale

---

[d114_d114 | Side [1]]
 Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Beskrivelse Egeninnsats: Lydisolert tak i stue
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
Initialer selger: NH, KH 2
60006230
:ecnerefer
tnemucoD
48

## Side 49

17 Selges eiendommen med utleiedel, leilighet, hybel eller

---

[d114_d114 | Side [1]]
en får rett til vei fra sin nordre del paa anvist sted
efter ett rimelig leie opp til den til Hans Nilsen utskilte Adgang til utleie: Dette er en selveierbolig som fritt kan
parsell. Videre efter grensen mot denne til den idag til leies ut til boligformål.
Hans Nilsen paatenkte vei. Videre erter dennes veie efter
41

## Side 42

OM EIENDOMMEN
Diverse Lovanvendelse
Det gjøres oppmerksom på at selger har mottatt Regelverk og generelle opplysninger
nabovarsel fra BKK om legging av strømkabel i Boligen selges

---

[d114_d114 | Side [1]]
t foreligger ikke tegninger
TEGNINGER/LOVLIGHET:
Det er framlagt godkjente/stemplede byggetegninger.
Plantegninger over u-etg og 1-etg ligger ikke i kommunens
arkiver.
Det er derfor huket av for at det ikke foreligger komple琀琀e
tegninger.
ØVRIGE OPPLYSNINGER:
Det er fortsa琀琀 eiendomsmegler som har plikt 琀椀l å sørge for at
boligkjøperen får opplysningene han eller hun har grunn 琀椀l å
regne med å få, og som kan ha betydning for avtalen. De琀琀e
innebærer blant annet opplysninger om bebyggelsens arealer
og

---

[d114_d114 | Side [1]]
ger
nabovarsel fra BKK om legging av strømkabel i Boligen selges med det inventar og utstyr som i henhold
Fanaflaten som kan gi redusert fremkommelighet. til gjeldende lover, forskrifter eller offentlige pålegg skal
følge med eiendommen, jf. avhendingsloven § 3‑4.
Både kjøper og selger er forpliktet til å signere den Fastmonterte eller spesialtilpassede installasjoner og
standard kjøpekontrakten som er utarbeidet av Emera i innredning som anses som varig tilknyttet boligen, følger
forbindelse med

---

[d114_d114 | Side [1]]
琀e
innebærer blant annet opplysninger om bebyggelsens arealer
og eventuell adgang 琀椀l utleie av hele eller deler av
bygningsmassen. Megler skal også opplyse om det foreligger
ferdiga琀琀ester eller midler琀椀dig bruks琀椀llatelser. De琀琀e
innebærer at den bygningssakkyndige/takstmann har en plikt
琀椀l å påpeke åpenbare ulovligheter som avdekkes. De har ikke
et ansvar for å hente sist godkjente tegninger hos kommunen.
De琀琀e ansvaret ligger fortsa琀琀 hos megler.

---

[d114_d114 | Side [1]]
biloppstillingsplass
myndigheter. Dette inkluderer også risikoen for om
ferdigattest vil bli gitt, samt alle tilknyttede kostnader. TBA fordelt på etasje
1. etasje
18 m² Terrasse/ balkong
36

## Side 37

OM EIENDOMMEN
Fra 01.01.24 er det innført nye regler for måling og Kjøper aksepterer at det kan forekomme hull og merker
opplysning av areal på boliger. etter montering av inventar og utstyr som ikke er en del
De nye arealbegrepene er: av overdragelsen.
Bruksareal BRA:
Eiendommens
BRA‑i ‑ Internt

---

[d114_d114 | Side [1]]
g på bad i 1 etg (12,8m²) ‑ Rekkverket på balkong eller terrasse er for lavt i forhold
grunnet panel i våtsone v/ badekar og i ytre del av til dagens krav.
dusjsone og over servanter. ‑ Rekkverkshøyder er under dagens forskriftskrav til
39

## Side 40

om eiendommen
rekkverk i innvendige trapper. Hvis et rom på visningen mangler fast installert
‑ Rekkverkshøyder er under dagens forskriftskrav til oppvarmingskilde, vil ikke dette bli inkludert i handelen.
rekkverk i utvendige trapper.
Nåværende eier har

---

[d114_d114 | Side [1]]
e punktene ble
finnes på eiendommen, vil heller ikke følge med i salget. utbedret etter at vi var flyttet inn.
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Kjenner du til om ufaglærte har utført arbeid som normalt
garanti fra produsent eller leverandør. bør utføres av faglærte, utover det som er nevnt tidligere
37

## Side 38

OM EIENDOMMEN
(f.eks. drenering, murerarbeid, tømrerarbeid etc)? Byggemåte:
‑ Egeninnsats: Lydisolert tak i

---

[d114_d114 | Side [1]]
omten er foruten eiendommens bygningsmasse opparbeidet med plen, murer/bed og div prydbusker/beplantning.
Bilopps琀椀llingsplass med plass 琀椀l 昀氀ere biler på tomten + garasje.
Mrk.
Forstøtningsmurer/hagemurer og utvendige trapper er ikke en del av forskri昀琀en og er derfor ikke videre omtalt eller 琀椀lstandsvurdert i denne
rapporten. Det anbefales på generelt grunnlag å overvåke 琀椀lstanden på forstøtningsmurer/hagemurer og utvendige trapper. Dersom det
oppstår sprekker, skjevheter/setninger eller tre

---

[d114_d114 | Side [1]]
er at den bygningssakkyndige/takstmann har en plikt 琀椀l å påpeke åpenbare
ulovligheter som avdekkes. De har ikke et ansvar for å hente sist godkjente tegninger hos kommunen. De琀琀e ansvaret ligger
fortsa琀琀 hos megler. Kilde: www.dibk.no/regelverk/forskri昀琀-琀椀l-avhendingslova-tryggere-bolighandel/
For y琀琀erligere detaljer og opplysninger henvises det 琀椀l tegninger og/eller eiendommens byggesaksmappe.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja

---

[d114_d114 | Side [1]]
gninger hos kommunen.
De琀琀e ansvaret ligger fortsa琀琀 hos megler. Kilde:
www.dibk.no/regelverk/forskri昀琀-琀椀l-avhendingslova-tryggere-
bolighandel/
For y琀琀erligere detaljer og opplysninger henvises det 琀椀l
tegninger og/eller eiendommens byggesaksmappe.
Garasje
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
TEGNINGER/LOVLIGHET:
Det er framlagt godkjente/stemplede byggetegninger.
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 7 av 38
57

## Side

---

[d114_d114 | Side [1]]
/ terrasse BRA‑e: 13 m² Bod og innredet bod
Det ble ikke gitt en frist for når gjenstående arbeid måtte
bli fullført. Det er uvisst om hvorfor det ikke er søkt om 1. etasje
ferdigattest for tilbygget, og om gjenstående arbeid vil bli BRA‑i: 146 m² Entré, biinngang, gang, 2 bad, vaskerom, 4
godkjent av kommunen. Kjøper påtar seg risikoen for soverom og stue/ kjøkken
fremtidig bruk og eventuelle pålegg fra offentlige BRA‑e: 29 m² Garasje med en biloppstillingsplass
myndigheter. Dette inkluderer også risikoen

---

[d114_d114 | Side [1]]
 husholdninger
og 1 000 kWh for hytter. Når det er tegnet avtale om
Gnr. 96, bnr. 159, snr. 1, ideell andel 1/ 1. Gnr. 96, bnr. 311, Norgespris bortfaller eventuell strømstøtte.
ideell andel 1/ 2 i Bergen kommune.
Som boligeier må du fortsatt ha en strømavtale med en
strømleverandør.
Selger
Kim Hestad og Nina Hasfjord Du kan lese mer om Norgespris blant annet her: https:/ /
www.regjeringen.no/ no/ tema/ energi/ strom/
sporsmal‑og‑svar‑om‑norgespris
Sameie
Sameiets forsikringsselskap: Tryg
Regulerings og

---

[d114_d114 | Side [1]]
ikke fremvist dokumentasjon på at rommet tilhører
boenheten, med mindre dette er angitt særskilt. Rom utenfor
boenheten kan omdisponeres av borettslaget/sameiet og dette
kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023
og eierseksjonsloven har ulik definisjon av fellesareal. Ved
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik:
“Delen av bygning som brukes av to eller flere bruksenheter eller
til bygningens forvaltning, drift eller vedlikehold.
•Se øvrig informasjon om areal i

---

[d114_d114 | Side [1]]
het) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og standardtekster, som utskri昀琀 og annen kopiering 琀椀l bruk som grunnlag for 琀椀lsvarende rapporter, bare 琀椀lla琀琀 når det

---

[d114_d114 | Side [1]]
rige opplysninger vedrørende reguleringsmessige
forhold henvises det 琀椀l Meglerpakken som bes琀椀lles av
meglerforetak i forbindelse med kjøp/salg av eiendommen.
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 34 av 38
84

## Side 85

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Om tomten
Tomt:
Tomten er felles for snr 1 og snr 2. Andel fellesareal: 405,4 m² i h.h.t sameiebrøk.
Tomten er foruten eiendommens bygningsmasse opparbeidet med plen,

---

[d114_d114 | Side [1]]
per. Dersom det
oppstår sprekker, skjevheter/setninger eller tre rekkverk/tre trapp har råteskader, bør utbedringer u琀昀øres. Av sikkerhetsmessige årsaker bør
det monteres 琀椀lfredss琀椀llende rekkverk ved murer og utvendige trapper når nivåforskjellen er over 0,50 meter, dersom de琀琀e mangler.
Kommentar:
Forstø琀椀ngsmurer bærer preg av elde/slitasje og 昀氀ere skjevheter og setninger/sprekker ble observert.
Tinglyste/andre forhold
Eiendomsbrøk.
For hver seksjon i et sameie er det fastsa琀琀 en sameiebrøk som angir

---

[d114_d114 | Side [1]]
er.
25 ampere. 1 stk.
16 ampere. 3 stk.
10 ampere. 1 stk.
Felles inntaksikring på 3 x 80 ampere på ko昀昀ertlo昀琀.
El. oppvarming:
Varmekabler i gang og på begge bad.
Gulvvarme i felles entre.
Tre vegghengte panelovner, hvorav to stk er fra 2022.
Fiber:
Det er innlagt 昀椀ber i boligen.
Norgespris: Sikringsskap i gang.
Eier har bes琀椀lt norgespris. Avtalen videreføres 琀椀l ny eier. Binding gjelder
ut 2026.
Norgespris er en statlig 昀椀nansiert ordning, som gir deg forutsigbar
strømpris gjennom året. Fra 1. oktober

---

[d114_d114 | Side [1]]
rgespris
Sameie
Sameiets forsikringsselskap: Tryg
Regulerings og arealplaner
Polisenummer fellesforsikring: 8556146 Eiendommen ligger i et uregulert område, men er i
henhold til kommuneplanens arealdel 2018, datert
19.06.2019, avsatt til LNF. Det at eiendommen er avsatt til
Energimerke
LNF gjør at det er strenge krav til bygging og ombygging
Energikarakter: F på eiendommen.
Energifarge: Oransje
Eiendommen befinner seg i følgende hensynssoner:
‑ Kulturmiljø, Fana‑Stend. Berøringsgrad 100%
Info

---

[d114_d114 | Side [1]]
 gjennom året. Fra 1. oktober 2025 og ut 2026 er
Norgesprisen 50 øre per kilowa琀紀me inklusiv merverdiavgi昀琀. Prisen
Kjøkkenprodusent: JKE Design.
vil justeres 1. januar 2027. Ordningen omfa琀琀er husholdningers
boliger og fri琀椀dsboliger.
TEKNISKE INSTALLASJONER Gå 琀椀l side
VVS:
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 6 av 38
56

## Side 57

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Beskrivelse av eiendommen
TOMTEFORHOLD Gå 琀椀l

---

[d114_d114 | Side [1]]
skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt

---

[d114_d114 | Side [1]]
k over kr 500 000
markedsforhold. For å få en nøyak琀椀g vurdering av
utbedringskostnadene anbefales y琀琀erligere undersøkelser og
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
gis for TG3, der de琀琀e er mulig.
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 4 av 38
54

## Side 55

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Beskrivelse av eiendommen
Takstobjektet:
Horisontaldelt tomannsbolig over e琀琀 plan (1-etg). Bygget i

---

[d114_d114 | Side [1]]
ERGEN 5227 NESTTUN
Beskrivelse av eiendommen
TOMTEFORHOLD Gå 琀椀l side
Tomten er felles for snr 1 og snr 2. Andel fellesareal: 405,4 m² i
h.h.t sameiebrøk. Tomten er foruten eiendommens bygningsmasse
opparbeidet med plen, murer/bed og div prydbusker/beplantning.
Bilopps琀椀llingsplass med plass 琀椀l 昀氀ere biler på tomten + garasje.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Halvpart av tomannsbolig
• Det foreligger ikke tegninger
TEGNINGER/LOVLIGHET:
Det er framlagt

---

[d114_d114 | Side [1]]
tal investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Legg ID her Legg ID her

## Side 103

Budskjema
KJØPESUM KR + omkostninger ihht. opplysninger i salgsoppgaven
Kjøpet finansieres slik:
Din bolig.
BANK/FINANSIERINGSINSTITUSJON: REFERANSE & TELEFONNUMMER SUM:
Kr.
Kr.
Din historie.
Kr.
Kr.
Det er Emera.
EGENKAPITAL: Kr.
TOTALT:
EGENKAPITAL BESTÅR AV:
Salg av nåværende bolig eller annen fast eindom
Disponibelt kontant beløp

---

[d114_d114 | Side [1]]
ingsbord v/ terrasse. • Konstruksjonene må sikres mot råte, sopp og skadedyr.
Oppdragsnr.: 20286-2544 Befaringsdato: 27.01.2026 Side: 12 av 38
62

## Side 63

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Tilstandsrapport
Vedr. manglende dampsperre/plast: Det vil være u琀昀ordrende å
gjennomføre 琀椀ltak, siden dampsperre skal ligge på varm side av
bjelkelag/isolasjon mot det kalde område. De琀琀e betyr at over昀氀aten
(vegg/himling) mot kaldt sone må rives og

---

[d114_d114 | Side [1]]
askmaskin (Siemens).
Det er innlagt 昀椀ber i boligen.
Medfølgende hvitevarer:
Norgespris:
- Kjøleskap/frys (Samsung). Fra 2024.
Eier har bes琀椀lt norgespris. Avtalen videreføres 琀椀l ny eier. Binding
gjelder ut 2026.
Teknisk 琀椀lstand på hvitevarer er ikke kontrollert. Noen integrerte
hvitevarer har oppnådd høy alder. Vedlikehold/ev. utski昀琀ninger må
Norgespris er en statlig 昀椀nansiert ordning, som gir deg forutsigbar
påregnes v/behov.
strømpris gjennom året. Fra 1. oktober 2025 og ut 2026 er
Norgesprisen 50

---

[d114_d114 | Side [1]]
ar inkl. factoring: kr 7 500,‑ er tilknyttet Emera har samarbeid med forskjellige
Grunnpakke bolig Info: kr 6 500,‑ foretak som tilbyr forbrukerne produkter eller tjenester i
forbindelse med et salgsoppdrag. Våre
Utlegg: samarbeidspartene er:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
er estimert til ca. kr 6 500,‑ og omfatter vanligvis Søderberg & Partners AS ‑ formidler av boligselger‑ og
innhenting av informasjon fra kommunen, eventuell boligkjøperforsikring
forretningsfører, samt kopi av

---

[d114_d114 | Side [1]]
eggkonstruksjon: Yttervegger er utført i
2022: trekonstruksjoner med utvendig liggende trekledning.
‑ Installert ny peis Ytterveggene er utført som bindingsverk på tilbygd del.
‑ Montert badekar Ytterkledning av liggende enkelfalset trekledning.
‑ Byttet varmtvannsbereder, vannpumpe og rør i kjeller. Vinduer og dører: Isolerglass i malte trekarmer. Vindu i
Arbeid utført av VVS Bergen felles trapperom og på koffertloft har enkle glass i
‑ Byttet vinduer i kjeller trekarmer. Felles ytterdør u‑etg: Panelt

---

[d114_d114 | Side [1]]

En eldre bolig vil ikke oppfylle dagens krav 琀椀l brannseksjoner og
brannsikkerhet, men det vil heller ikke utløse noe krav 琀椀l utbedring så
lenge det er byggemeldt og godkjent e琀琀er dagens bruk. Det gjøres
oppmerksom på at det ikke er etablert brannskille mellom boenhetene
og mot felles trappeoppgang. For å 琀椀lfreds琀椀lle dagens krav vil de琀琀e
medføre betydelige utgi昀琀er.
Om brannceller:
En branncelle er hele eller avgrensede deler av en bygning hvor en
brann fri琀琀 kan utvikle seg uten at den kan spre seg

---

[d114_d114 | Side [1]]
kvei fra kommunal vei.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et privat vannforsyning (brønn).
Tilknytning avløp
Eiendommen har avløp 琀椀l sep琀椀ktank.
Regulering
Eiendommen omfa琀琀es av kommuneplan (65270000). Formål: Lnf-område.
Planid: 65270000.
Saksnr: 2014/18880, 2022/20468.
Planens navn: BERGEN. KOMMUNEPLANENS AREALDEL 2018 - 2030.
Type plan: Kommuneplanens arealdel.
Planstatus: Endelig vedta琀琀 arealplan.
Vedtak i kra昀琀: 19.06.2019.
For øvrige opplysninger vedrørende reguleringsmessige
forhold henvises

---

[d114_d114 | Side [1]]
hensynssoner:
‑ Kulturmiljø, Fana‑Stend. Berøringsgrad 100%
Info energiklasse
Se fullstendig energiattest fra selger som vedlegg til Planer i nærheten av eiendommen:
salgsoppgave. Megler påtar seg ikke ansvar for ‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027.
informasjonen som fremgår av energiattesten. Bystyret legger til grunn at revisjon av
KPA‑bestemmelsene skal sluttføres med vedtak Bystyret
i første kvartal 2027. Hovedmålet med revisjon av
Oppvarming
KPA‑bestemmelsene er forenkling, fortgang

---

[d114_d114 | Side [1]]
lsen og
Formålet med planforslaget er å legge til rette for frem til bygdaveien.
boligbebyggelse med tilhørende infrastruktur.
12.05.2000 ‑ Dokumentnr: 12607 ‑ Seksjonering og
Godkjente tiltak i nærheten av eiendommen: erklæring/ avtale
‑ Eiendom 96/ 96. Tilbygg, enebolig. Rammetillatelse, Snr: 1
datert 27.10.2021. Saksnr: 202121446 overført til Formål: Bolig
202218925 Sameiebrøk: 1/ 2
Tilleggsdel: Tilbygg til våningshus felles loft og hobby +
For mer informasjon om reguleringsforhold, kontakt bod i

---

[d114_d114 | Side [1]]
idere mot Sund og omkringliggende 昀樀ell, samt sjøutsikt.
Området er hovedsakelig bebygd med eneboliger.
Gangavstand 琀椀l dagligvarebu琀椀kker i Krokeidevegen.
Ca 6 km 琀椀l Lagunen Storsenter med alle fasiliteter/service琀椀lbud.
Kort avstand 琀椀l badeplass i Melkeviken og Sageneset.
Gode turmuligheter med bla. Fana昀樀ellet og Hordneskogen i nærområde.
Gode bussforbindelser 琀椀l Lagunen. Bybanestopp på Lagunen.
Adkomstvei
Adkomst eiendom via privat s琀椀kkvei fra kommunal vei.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et

---

[d114_d114 | Side [1]]
tialer selger: NH, KH 3
60006230
:ecnerefer
tnemucoD
49

## Side 50

Tilleggskommentar
Tidvis kan det høres trinnlyd fra naboer over. Vannrenseanlegg fra UNIK FILTERSYSTEM AS vil bli installert ved behov etter resultat fra
vannprøver analysert hos Eurofins Environment Testing Norway AS.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis

---

[d114_d114 | Side [1]]
. Vannet bør ikke beny琀琀es 琀椀l drikkevann før det er
dokumentert 琀椀lfreds琀椀llende.
Sep琀椀ktank
Sep琀椀ktank i glass昀椀ber.
Sep琀椀ktank ble ski昀琀et i 2018 ifølge 琀椀dligere rapport.
Tilstandsgrad er sa琀琀 u琀椀fra alder. Sep琀椀ktank er skjult og
琀椀lstandsvurdering må u琀昀øres av spesial昀椀rma.
FORHOLD SOM ÅPENBART KAN MEDFØRE FARE FOR
Løs puss på grunnmur.
HELSE, MILJØ OG SIKKERHET
Terrengforhold
Eiendommen ligger i et le琀琀 skrående terreng. Helse, miljø og sikkerhet
Vurdering av avvik:
• Det er påvist andre

---

[d114_d114 | Side [1]]
revisjon av
Oppvarming
KPA‑bestemmelsene er forenkling, fortgang og
Boligen har følgende oppvarmingskilder: forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre
‑ Varmekabler i gang og på begge bad gode boliger og nabolag.
‑ Gulvvarme i felles entre
‑ Tre vegghengte panelovner, hvorav to stk er fra 2022
40

## Side 41

OM EIENDOMMEN
‑ PlanID: 65190000. Fana. Gnr 96 Bnr 42 mfl., Fanaflaten. samme rettigheter og forpliktelser som Hans Nilsen og
Formålet med planforslaget er å legge til rette for frem

---

[d114_d114 | Side [1]]
ller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
•Eiendommens markedsverdi kan ikke baseres på en rent
matematisk beregning i forhold til antall kvadratmeter opplyst i
rapporten. Opplysninger om areal kan altså ikke alene benyttes
for beregning av eiendommens verdi.
•Rom som ligger utenfor boenheten, men som eier har påvist
og/eller opplyst at tilhører boenheten, er oppmålt og inkludert i
BRA-e. Det er ikke fremvist dokumentasjon på at rommet tilhører
boenheten, med

---

[d114_d114 | Side [1]]
琀.
For boliger som leies ut, er det gi琀琀 grenser for radonnivået i
strålevernforskri昀琀en.
Radonkart: h琀琀ps://geo.ngu.no/kart/radon_mobil/
Eiendommen ligger i område med som er de昀椀nert som usikker mtp.
radonforekomst.
Konsekvens/琀椀ltak
• Det bør gjennomføres radonmålinger.
• Rekkverk på innvendig trapp må monteres for å lukke avviket.
• Rekkverk/annen sikring på forstøtningsmur må se琀琀es opp/utbedres.
• Det er ikke krav om utbedring av rekkverkshøyder på utvendige
trapper opp 琀椀l dagens krav.
• Det er ikke

---

[d114_d114 | Side [1]]
pstillingsplass med plass til flere biler på tomten.
Det er gode kollektivforbindelser i området, med
busstoppet "Vollaskiftet" kun 5 minutters gange unna
Adkomst
boligen. Herfra går linje 60, 61 og 530 som blant annet
går til Krokeide og Lagunen. Fra Lagunen går det både På høyre side i annonsen finner du et kartutsnitt. Ved å
bybane og et bredt utvalg av busser i alle retninger. klikke på kartet kan du enkelt planlegge din rute fra valgt
startpunkt og helt frem til boligen. Det vil være skiltet

---

[d114_d114 | Side [1]]
mbinerer hverdagslivet
med fantastiske naturopplevelser
• Solrik 18m² terrasse
• Vaskerom med separat inngang
• Rikelig med lagringsplass i to eksterne boder på 5,4m² og 7,8m²
• Peis ‑ bidrar til lavere strømutgifter
• Parkering i garasje og biloppstillingsplass på felles tomt
• Pent opparbeidet felles tomt med flere ulike sosiale soner +
utepeis
• 5 min gange til nærmeste busstopp og Coop Extra
• 10 min til Lagunen Storsenter
• Nærhet til Fanafjellet og Fanafjorden
9

## Side 10

(Ingen tekst

---

[d114_d114 | Side [1]]
om dagens bruk samsvarer med den godkjente
bruken.
Ferdigattest/ brukstillatelse:
Det foreligger verken ferdigattest,
Innhold
ekspedisjonsdokument eller midlertidig brukstillatelse for
eiendommen. Dette innebærer at det ikke finnes Boligen går over et plan og inneholder:
dokumentasjon på at boligen lovlig kan tas i bruk. Dette
er dog ikke unormalt for dette byggeåret og dette BRA‑i 146m²: Entré, biinngang, gang, 2 bad, vaskerom, 4
området. soverom og stue/ kjøkken
BRA‑e 29m²: Garasje med en

---

[d114_d114 | Side [1]]
elle skjevheter i
avløpsledninger.
fundament. For å kartlegge om det er pågående problemer må det
• Mer enn halvparten av forventet bruks琀椀d er passert på utvendige
foretas undersøkelser over 琀椀d. De琀琀e faller utenfor rapportens mandat,
vannledninger.
og er derfor ikke u琀昀ørt.
• Det er påvist andre avvik:
Konsekvens/琀椀ltak
Brønnvann har ikke vært testet de senere årene. Vanntest ble u琀昀ørt i
• Andre 琀椀ltak:
2020, og vannet var ikke godt nok 琀椀l å drikke.
Grunnmur bør vedlikeholdes og repareres i område

---

[d114_d114 | Side [1]]
 om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og

---

[d114_d114 | Side [1]]
nen sikring på
‑ Terrengforhold grunnet ikke synlig knotteplast/ forstøtningsmurer som krever dette utifra dagens krav.
fuktsikring inntil grunnmuren. ‑ Det er tegn på avvik i branncelleinndeling ut ifra dagens
‑ Utvendige vann‑ og avløpsledninger grunnet alder og byggtekniske forskrift.
brønnvann som sist var testet i 2020, da var det ikke ‑ Det mangler håndløper på vegg i det innvendige
drikkelig. trappeløpet.
‑ Overflater vegger og himling på bad i 1 etg (12,8m²) ‑ Rekkverket på balkong eller terrasse

---

[d114_d114 | Side [1]]
 20286-2544 Befaringsdato: 27.01.2026 Side: 32 av 38
82

## Side 83

Fanastølen 20, 5244 FANA Takstoppdrag AS
Gnr 96 - Bnr 159 Vallaskaret 32
4601 BERGEN 5227 NESTTUN
Lovlighet
Byggetegninger
Det foreligger ikke tegninger
Kommentar: TEGNINGER/LOVLIGHET:
Det er framlagt godkjente/stemplede byggetegninger. Plantegninger over u-etg og 1-etg ligger ikke i kommunens arkiver.
Det er derfor huket av for at det ikke foreligger komple琀琀e tegninger.
ØVRIGE OPPLYSNINGER:
Det er fortsa琀琀 eiendomsmegler som har plikt

---

[d114_d114 | Side [1]]
kke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite

---

[d114_d114 | Side [1]]
de forskri昀琀skrav 琀椀l rekkverk i innvendige trapper.
Det er ikke foreta琀琀 radonmålinger, og bygget er heller
Tekniske installasjoner > Vannledninger Gå til side ikke u琀昀ørt med radonsperre.
Det er ikke montert rekkverk på innvendig trapp.
Tekniske installasjoner > Avløpsrør Gå til side
Det er manglende rekkverk/annen sikring på
forstøtningsmurer som krever de琀琀e u琀椀fra dagens
Tekniske installasjoner > Varmtvannstank Gå til side krav.
Det er tegn på avvik i branncelleinndeling ut ifra
Tomteforhold >

---

[d114_d114 | Side [1]]
jø og sikkerhet, og som bygge琀椀dspunktet.
bygningssakkyndige har oppdaget. Terskelen for hva som anses som Dersom det oppstår brann 琀椀lløp i en eldre bolig vil brannen spre seg
åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å raskere når det er avvik i brancelleinndelingen.
avdekke slike forhold. Punktet omfa琀琀er ikke skjulte eller ikke-synlige
forhold, tekniske vurderinger eller forhold som krever
spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "TG3: Takkonstruksjon/loft har liten lufting i nedre kant og registrert symptom på aktivitet fra skadedyr. Dette er et alvorlig avvik som krever utbedring.",
      "evidence": [
        "Takkonstruksjon/ loft grunnet liten lufting i nedre kant av konstruksjonen og registrert symptom på aktivitet fra skadedyr.",
        "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "TG3: Sluk, membran og tettesjikt på bad i 1. etg (12,8 m²) har manglende drenering fra innebygget sisterne. Alvorlig avvik med risiko for vannskade.",
      "evidence": [
        "Sluk, membran og tettesjikt på bad i 1. etg grunnet manglende drenering fra innebygget sisterne",
        "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Bad (12,8 m²) > Sluk, membran og tettesjikt"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "TG3: Vaskerom i 1. etg har avvik på ventilasjon. Klassifisert som stort/alvorlig avvik. Merk: Dokumentkonteksten bekrefter TG3-klassifisering i sammendrag, men detaljert beskrivelse av avviket er ikke gjengitt i de tilgjengelige dokumentchunkene.",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Vaskerom (4,5 m²) > Ventilasjon"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Råteskader i bordkledning og manglende lufting/musesperre i nedre kant av kledning mot grunnmur. Risiko for fukt- og skadedyrskader i konstruksjonen.",
      "evidence": [
        "Det er påvist spredte råteskader i bordkledningen.",
        "Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
        "Det er ingen musesperre i nedre kant av konstruksjon.",
        "Konstruksjonene må sikres mot råte, sopp og skadedyr."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Manglende ferdigattest og ufullstendige byggetegninger. Plantegninger over u-etg og 1-etg finnes ikke i kommunens arkiver. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter.",
      "evidence": [
        "Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen. Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.",
        "Plantegninger over u-etg og 1-etg ligger ikke i kommunens arkiver.",
        "Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter. Dette inkluderer også risikoen for om ferdigattest vil bli gitt, samt alle tilknyttede kostnader."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "description": "Avvik i branncelleinndeling. Det er ikke etablert brannskille mellom boenhetene og mot felles trappeoppgang. Dette medfører raskere brannspredning og betydelige utbedringskostnader.",
      "evidence": [
        "Det gjøres oppmerksom på at det ikke er etablert brannskille mellom boenhetene og mot felles trappeoppgang. For å tilfredsstille dagens krav vil dette medføre betydelige utgifter.",
        "Det er tegn på avvik i branncelleinndeling ut ifra dagens byggtekniske forskrift.",
        "Dersom det oppstår brann tilløp i en eldre bolig vil brannen spre seg raskere når det er avvik i brancelleinndelingen."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R7",
      "description": "Brønnvann er ikke godkjent som drikkevann. Siste vanntest fra 2020 viste at vannet ikke var godt nok til å drikke. Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett.",
      "evidence": [
        "Brønnvann har ikke vært testet de senere årene. Vanntest ble utført i 2020, og vannet var ikke godt nok til å drikke.",
        "Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett. Eiendommen har brønn.",
        "Vannet bør ikke benyttes til drikkevann før det er dokumentert tilfredsstillende.",
        "Vannrenseanlegg fra UNIK FILTERSYSTEM AS vil bli installert ved behov etter resultat fra vannprøver analysert hos Eurofins Environment Testing Norway AS."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R8",
      "description": "Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid. Ukjent type rør og tilstandsvurdering må utføres av spesialfirma.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
        "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
        "Ukjent type avløpsrør og ukjent type vannledning. Tilstandsgrad er satt utifra alder. Utvendige vann-avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R9",
      "description": "Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma. Eiendommen er ikke tilknyttet offentlig avløpsnett.",
      "evidence": [
        "Eiendommen har avløp til septiktank.",
        "Septiktank i glassfibr. Septiktank ble skiftet i 2018 ifølge tidligere rapport. Tilstandsgrad er satt utifra alder. Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Ingen radonmålinger er utført og bygget har ikke radonsperre. Eiendommen ligger i område definert som usikker mtp. radonforekomst.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Eiendommen ligger i område med som er definert som usikker mtp. radonforekomst.",
        "Det bør gjennomføres radonmålinger."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R11",
      "description": "Manglende rekkverk på innvendig trapp og for lave rekkverkshøyder på balkong/terrasse og utvendige trapper i forhold til dagens krav. Sikkerhetsrisiko.",
      "evidence": [
        "Det er ikke montert rekkverk på innvendig trapp.",
        "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
        "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
        "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper.",
        "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i utvendige trapper.",
        "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R12",
      "description": "Skjevheter i etasjeskille med høydeforskjell på 15–30 mm gjennom hele rommet (TG2). Kan ha sammenheng med skjevheter i fundament.",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Skjevheter i etasjeskille kan ha sammenheng med eventuelle skjevheter i fundament. For å kartlegge om det er pågående problemer må det foretas undersøkelser over tid."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Løs puss på grunnmur og terrengforhold med ikke synlig knotteplast/fuktsikring inntil grunnmuren. Risiko for fuktskader.",
      "evidence": [
        "Det er noe løs puss i ett lite område på opprinnelig del.",
        "Løs puss på grunnmur.",
        "Terrengforhold grunnet ikke synlig knotteplast/fuktsikring inntil grunnmuren.",
        "Grunnmur bør vedlikeholdes og repareres i område..."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R14",
      "description": "Forstøtningsmurer bærer preg av elde/slitasje med observerte skjevheter, setninger og sprekker. Sikkerhetsrisiko ved manglende rekkverk/sikring.",
      "evidence": [
        "Forstøtningsmurer bærer preg av elde/slitasje og flere skjevheter og setninger/sprekker ble observert.",
        "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.",
        "Dersom det oppstår sprekker, skjevheter/setninger eller tre rekkverk/tre trapp har råteskader, bør utbedringer utføres."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Manglende dampsperre i konstruksjonen. Utfordrende og kostbart å utbedre da overflater mot kald sone må rives.",
      "evidence": [
        "Vedr. manglende dampsperre/plast: Det vil være utfordrende å gjennomføre tiltak, siden dampsperre skal ligge på varm side av bjelkelag/isolasjon mot det kalde område. Dette betyr at overflaten (vegg/himling) mot kaldt sone må rives og..."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Eiendommen ligger i LNF-område (Landbruks-, natur- og friluftsområde) og i hensynssone for kulturmiljø (Fana-Stend, berøringsgrad 100%). Dette medfører strenge krav til bygging og ombygging.",
      "evidence": [
        "Eiendommen ligger i et uregulert område, men er i henhold til kommuneplanens arealdel 2018, datert 19.06.2019, avsatt til LNF. Det at eiendommen er avsatt til LNF gjør at det er strenge krav til bygging og ombygging på eiendommen.",
        "Eiendommen befinner seg i følgende hensynssoner: ‑ Kulturmiljø, Fana‑Stend. Berøringsgrad 100%"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R17",
      "description": "Kjøper overtar bindende strømavtale (Norgespris) med bindingstid til 31.12.2026. Avtalen er obligatorisk å overta og bortfaller eventuell strømstøtte.",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R18",
      "description": "Egeninnsats (ufaglært arbeid) er utført på lydisolering av tak i stue. Risiko for feil utførelse og skjulte mangler.",
      "evidence": [
        "Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Egeninnsats: Lydisolert tak i stue.",
        "Tidvis kan det høres trinnlyd fra naboer over."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R19",
      "description": "Nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet i området.",
      "evidence": [
        "Det gjøres oppmerksom på at selger har mottatt nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R20",
      "description": "Energikarakter F (dårligste klasse) med energifarge oransje. Boligen har høyt energiforbruk og begrenset energieffektivitet.",
      "evidence": [
        "Energikarakter: F",
        "Energifarge: Oransje"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R21",
      "description": "Overflater vegger og himling på bad i 1. etg (12,8 m²) har avvik, inkludert panel i våtsone ved badekar og i ytre del av dusjsone og over servanter (TG2).",
      "evidence": [
        "Overflater vegger og himling på bad i 1 etg (12,8m²) grunnet panel i våtsone v/ badekar og i ytre del av dusjsone og over servanter."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R22",
      "description": "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet vises ikke i grunnboksutskriften og har prioritet foran tinglyste banklån.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R23_NY",
      "description": "TG3: Bad 2 (2,3 m²) i 1. etg har generelt alvorlig avvik (TG3). Denne risikoen er nevnt i sammendragets TG3-liste, men er ikke identifisert som egen risiko i den opprinnelige analysen.",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Bad 2 (2,3 m²) > Generell"
      ],
      "source_documents": [
        "d114_d114"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "Bad 2 2,3 m² TG3 generell avvik beskrivelse",
    "Vaskerom ventilasjon TG3 avvik beskrivelse årsak",
    "Dampsperre tilstandsgrad hvilke rom konstruksjoner",
    "Varmtvannstank tilstandsgrad alder avvik",
    "Elektrisk anlegg el-tilsyn tilstandsgrad avvik",
    "Innvendig trapp tilstandsgrad avvik beskrivelse",
    "Kjeller underetasje innredning bruksendring lovlighet",
    "Oljetank nedgravd eiendommen"
  ],
  "reasoning": "\nGjennomgang av alle 22 identifiserte risikoer mot dokumentchunkene:\n\n**Validerte risikoer med god evidens (confidence opprettholdt eller justert marginalt):**\n\nR1 (TG3 Takkonstruksjon): Direkte bekreftet i TG3-sammendrag og detaljbeskrivelse. Confidence 0.97 opprettholdes.\n\nR2 (TG3 Sluk/membran bad 1. etg): Direkte bekreftet i TG3-sammendrag. Confidence 0.97 opprettholdes.\n\nR3 (TG3 Vaskerom ventilasjon): Bekreftet i TG3-sammendrag, men detaljbeskrivelse av avviket mangler i tilgjengelige chunks. Confidence justeres ned til 0.88 da vi mangler detaljer om årsak/omfang.\n\nR4 (Råteskader kledning): Godt dokumentert med fire separate evidenspunkter. Confidence 0.95 opprettholdes.\n\nR5 (Manglende ferdigattest/tegninger): Svært godt dokumentert med tre sterke evidenspunkter. Confidence 0.97 opprettholdes.\n\nR6 (Branncelleinndeling): Godt dokumentert med tre evidenspunkter inkl. konsekvensomtale. Confidence 0.96 opprettholdes.\n\nR7 (Brønnvann ikke drikkevann): Godt dokumentert, inkl. info om planlagt vannrenseanlegg. Confidence 0.96 opprettholdes.\n\nR8 (Utvendige rør passert brukstid): Godt dokumentert med tre evidenspunkter. Confidence 0.93 opprettholdes.\n\nR9 (Septiktank skjult): Bekreftet med to evidenspunkter. Confidence 0.88 opprettholdes.\n\nR10 (Radon): Godt dokumentert med tre evidenspunkter. Confidence 0.95 opprettholdes.\n\nR11 (Rekkverk): Svært godt dokumentert med seks separate evidenspunkter. Confidence 0.96 opprettholdes.\n\nR12 (Skjevheter etasjeskille): Godt dokumentert med to evidenspunkter. Confidence 0.88 opprettholdes.\n\nR13 (Løs puss/fuktsikring grunnmur): Dokumentert med fire evidenspunkter, men avviket beskrives som begrenset (\"ett lite område\"). Confidence 0.87 opprettholdes.\n\nR14 (Forstøtningsmurer): Godt dokumentert. Confidence 0.88 opprettholdes.\n\nR15 (Manglende dampsperre): Bekreftet, men kun ett evidenspunkt og tilstandsgrad er ikke eksplisitt angitt i tilgjengelige chunks. Confidence 0.85 opprettholdes.\n\nR16 (LNF-område/kulturmiljø): Godt dokumentert med to evidenspunkter. Confidence 0.92 opprettholdes.\n\nR17 (Norgespris bindingstid): Godt dokumentert med to evidenspunkter. Confidence 0.90 opprettholdes.\n\nR18 (Egeninnsats lydisolering): Bekreftet i egenerklæring. Confidence 0.82 opprettholdes.\n\nR19 (BKK nabovarsel): Bekreftet med ett evidenspunkt. Confidence 0.80 opprettholdes – dette er en midlertidig ulempe, ikke en varig risiko, men relevant for kjøper.\n\nR20 (Energikarakter F): Direkte bekreftet. Confidence 0.90 opprettholdes.\n\nR21 (Overflater bad 1. etg): Bekreftet med ett evidenspunkt. Confidence 0.88 opprettholdes.\n\nR22 (Legalpant): Bekreftet med ett evidenspunkt. Confidence 0.85 opprettholdes.\n\n**Manglende risiko identifisert:**\n\nR23_NY: I TG3-sammendraget nevnes \"Våtrom > 1-etg > Bad 2 (2,3 m²) > Generell\" som et alvorlig avvik, men dette er IKKE identifisert som en egen risiko i den opprinnelige analysen. Dette er en klar mangel som bør legges til med confidence 0.85 (evidens bekreftet i sammendrag, men detaljbeskrivelse mangler i tilgjengelige chunks).\n\n**Andre potensielle mangler som bør undersøkes nærmere:**\n- Varmtvannstank: Nevnt i sammendrag som eget punkt – tilstandsgrad ukjent fra tilgjengelige chunks\n- Elektrisk anlegg: Ikke eksplisitt vurdert i tilgjengelige chunks\n- Innvendig trapp: Håndløper mangler nevnt, men om dette er TG2 eller TG3 er uklart\n- Kjeller/underetasje: Innredning/bruksendring nevnt, lovlighet bør undersøkes\n- Nedgravd oljetank: Selger svarer \"Nei\" i egenerklæring, men bør bekreftes\n"
}

## Raw Response
```json
{
  "id": "msg_01SmXooWwEceL39SeRd7AoPh",
  "container": null,
  "content": [
    {
      "id": "toolu_01P38f8oAKrC4BqA5heERMu2",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "TG3: Takkonstruksjon/loft har liten lufting i nedre kant og registrert symptom på aktivitet fra skadedyr. Dette er et alvorlig avvik som krever utbedring.",
            "evidence": [
              "Takkonstruksjon/ loft grunnet liten lufting i nedre kant av konstruksjonen og registrert symptom på aktivitet fra skadedyr.",
              "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "TG3: Sluk, membran og tettesjikt på bad i 1. etg (12,8 m²) har manglende drenering fra innebygget sisterne. Alvorlig avvik med risiko for vannskade.",
            "evidence": [
              "Sluk, membran og tettesjikt på bad i 1. etg grunnet manglende drenering fra innebygget sisterne",
              "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Bad (12,8 m²) > Sluk, membran og tettesjikt"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "TG3: Vaskerom i 1. etg har avvik på ventilasjon. Klassifisert som stort/alvorlig avvik. Merk: Dokumentkonteksten bekrefter TG3-klassifisering i sammendrag, men detaljert beskrivelse av avviket er ikke gjengitt i de tilgjengelige dokumentchunkene.",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Vaskerom (4,5 m²) > Ventilasjon"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Råteskader i bordkledning og manglende lufting/musesperre i nedre kant av kledning mot grunnmur. Risiko for fukt- og skadedyrskader i konstruksjonen.",
            "evidence": [
              "Det er påvist spredte råteskader i bordkledningen.",
              "Det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
              "Det er ingen musesperre i nedre kant av konstruksjon.",
              "Konstruksjonene må sikres mot råte, sopp og skadedyr."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Manglende ferdigattest og ufullstendige byggetegninger. Plantegninger over u-etg og 1-etg finnes ikke i kommunens arkiver. Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter.",
            "evidence": [
              "Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen. Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.",
              "Plantegninger over u-etg og 1-etg ligger ikke i kommunens arkiver.",
              "Kjøper påtar seg risikoen for fremtidig bruk og eventuelle pålegg fra offentlige myndigheter. Dette inkluderer også risikoen for om ferdigattest vil bli gitt, samt alle tilknyttede kostnader."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "description": "Avvik i branncelleinndeling. Det er ikke etablert brannskille mellom boenhetene og mot felles trappeoppgang. Dette medfører raskere brannspredning og betydelige utbedringskostnader.",
            "evidence": [
              "Det gjøres oppmerksom på at det ikke er etablert brannskille mellom boenhetene og mot felles trappeoppgang. For å tilfredsstille dagens krav vil dette medføre betydelige utgifter.",
              "Det er tegn på avvik i branncelleinndeling ut ifra dagens byggtekniske forskrift.",
              "Dersom det oppstår brann tilløp i en eldre bolig vil brannen spre seg raskere når det er avvik i brancelleinndelingen."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R7",
            "description": "Brønnvann er ikke godkjent som drikkevann. Siste vanntest fra 2020 viste at vannet ikke var godt nok til å drikke. Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett.",
            "evidence": [
              "Brønnvann har ikke vært testet de senere årene. Vanntest ble utført i 2020, og vannet var ikke godt nok til å drikke.",
              "Eiendommen er ikke tilknyttet offentlig vann- og avløpsnett. Eiendommen har brønn.",
              "Vannet bør ikke benyttes til drikkevann før det er dokumentert tilfredsstillende.",
              "Vannrenseanlegg fra UNIK FILTERSYSTEM AS vil bli installert ved behov etter resultat fra vannprøver analysert hos Eurofins Environment Testing Norway AS."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R8",
            "description": "Utvendige vann- og avløpsledninger har passert mer enn halvparten av forventet brukstid. Ukjent type rør og tilstandsvurdering må utføres av spesialfirma.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
              "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
              "Ukjent type avløpsrør og ukjent type vannledning. Tilstandsgrad er satt utifra alder. Utvendige vann-avløpsrør er skjult og tilstandsvurdering må utføres av spesialfirma."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R9",
            "description": "Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma. Eiendommen er ikke tilknyttet offentlig avløpsnett.",
            "evidence": [
              "Eiendommen har avløp til septiktank.",
              "Septiktank i glassfibr. Septiktank ble skiftet i 2018 ifølge tidligere rapport. Tilstandsgrad er satt utifra alder. Septiktank er skjult og tilstandsvurdering må utføres av spesialfirma."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Ingen radonmålinger er utført og bygget har ikke radonsperre. Eiendommen ligger i område definert som usikker mtp. radonforekomst.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Eiendommen ligger i område med som er definert som usikker mtp. radonforekomst.",
              "Det bør gjennomføres radonmålinger."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R11",
            "description": "Manglende rekkverk på innvendig trapp og for lave rekkverkshøyder på balkong/terrasse og utvendige trapper i forhold til dagens krav. Sikkerhetsrisiko.",
            "evidence": [
              "Det er ikke montert rekkverk på innvendig trapp.",
              "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
              "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
              "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper.",
              "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i utvendige trapper.",
              "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R12",
            "description": "Skjevheter i etasjeskille med høydeforskjell på 15–30 mm gjennom hele rommet (TG2). Kan ha sammenheng med skjevheter i fundament.",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Skjevheter i etasjeskille kan ha sammenheng med eventuelle skjevheter i fundament. For å kartlegge om det er pågående problemer må det foretas undersøkelser over tid."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Løs puss på grunnmur og terrengforhold med ikke synlig knotteplast/fuktsikring inntil grunnmuren. Risiko for fuktskader.",
            "evidence": [
              "Det er noe løs puss i ett lite område på opprinnelig del.",
              "Løs puss på grunnmur.",
              "Terrengforhold grunnet ikke synlig knotteplast/fuktsikring inntil grunnmuren.",
              "Grunnmur bør vedlikeholdes og repareres i område..."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R14",
            "description": "Forstøtningsmurer bærer preg av elde/slitasje med observerte skjevheter, setninger og sprekker. Sikkerhetsrisiko ved manglende rekkverk/sikring.",
            "evidence": [
              "Forstøtningsmurer bærer preg av elde/slitasje og flere skjevheter og setninger/sprekker ble observert.",
              "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.",
              "Dersom det oppstår sprekker, skjevheter/setninger eller tre rekkverk/tre trapp har råteskader, bør utbedringer utføres."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Manglende dampsperre i konstruksjonen. Utfordrende og kostbart å utbedre da overflater mot kald sone må rives.",
            "evidence": [
              "Vedr. manglende dampsperre/plast: Det vil være utfordrende å gjennomføre tiltak, siden dampsperre skal ligge på varm side av bjelkelag/isolasjon mot det kalde område. Dette betyr at overflaten (vegg/himling) mot kaldt sone må rives og..."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Eiendommen ligger i LNF-område (Landbruks-, natur- og friluftsområde) og i hensynssone for kulturmiljø (Fana-Stend, berøringsgrad 100%). Dette medfører strenge krav til bygging og ombygging.",
            "evidence": [
              "Eiendommen ligger i et uregulert område, men er i henhold til kommuneplanens arealdel 2018, datert 19.06.2019, avsatt til LNF. Det at eiendommen er avsatt til LNF gjør at det er strenge krav til bygging og ombygging på eiendommen.",
              "Eiendommen befinner seg i følgende hensynssoner: ‑ Kulturmiljø, Fana‑Stend. Berøringsgrad 100%"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R17",
            "description": "Kjøper overtar bindende strømavtale (Norgespris) med bindingstid til 31.12.2026. Avtalen er obligatorisk å overta og bortfaller eventuell strømstøtte.",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R18",
            "description": "Egeninnsats (ufaglært arbeid) er utført på lydisolering av tak i stue. Risiko for feil utførelse og skjulte mangler.",
            "evidence": [
              "Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Egeninnsats: Lydisolert tak i stue.",
              "Tidvis kan det høres trinnlyd fra naboer over."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R19",
            "description": "Nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet i området.",
            "evidence": [
              "Det gjøres oppmerksom på at selger har mottatt nabovarsel fra BKK om legging av strømkabel i Fanaflaten som kan gi redusert fremkommelighet."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R20",
            "description": "Energikarakter F (dårligste klasse) med energifarge oransje. Boligen har høyt energiforbruk og begrenset energieffektivitet.",
            "evidence": [
              "Energikarakter: F",
              "Energifarge: Oransje"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R21",
            "description": "Overflater vegger og himling på bad i 1. etg (12,8 m²) har avvik, inkludert panel i våtsone ved badekar og i ytre del av dusjsone og over servanter (TG2).",
            "evidence": [
              "Overflater vegger og himling på bad i 1 etg (12,8m²) grunnet panel i våtsone v/ badekar og i ytre del av dusjsone og over servanter."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R22",
            "description": "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet vises ikke i grunnboksutskriften og har prioritet foran tinglyste banklån.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R23_NY",
            "description": "TG3: Bad 2 (2,3 m²) i 1. etg har generelt alvorlig avvik (TG3). Denne risikoen er nevnt i sammendragets TG3-liste, men er ikke identifisert som egen risiko i den opprinnelige analysen.",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Våtrom > 1-etg > Bad 2 (2,3 m²) > Generell"
            ],
            "source_documents": [
              "d114_d114"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "Bad 2 2,3 m² TG3 generell avvik beskrivelse",
          "Vaskerom ventilasjon TG3 avvik beskrivelse årsak",
          "Dampsperre tilstandsgrad hvilke rom konstruksjoner",
          "Varmtvannstank tilstandsgrad alder avvik",
          "Elektrisk anlegg el-tilsyn tilstandsgrad avvik",
          "Innvendig trapp tilstandsgrad avvik beskrivelse",
          "Kjeller underetasje innredning bruksendring lovlighet",
          "Oljetank nedgravd eiendommen"
        ],
        "reasoning": "\nGjennomgang av alle 22 identifiserte risikoer mot dokumentchunkene:\n\n**Validerte risikoer med god evidens (confidence opprettholdt eller justert marginalt):**\n\nR1 (TG3 Takkonstruksjon): Direkte bekreftet i TG3-sammendrag og detaljbeskrivelse. Confidence 0.97 opprettholdes.\n\nR2 (TG3 Sluk/membran bad 1. etg): Direkte bekreftet i TG3-sammendrag. Confidence 0.97 opprettholdes.\n\nR3 (TG3 Vaskerom ventilasjon): Bekreftet i TG3-sammendrag, men detaljbeskrivelse av avviket mangler i tilgjengelige chunks. Confidence justeres ned til 0.88 da vi mangler detaljer om årsak/omfang.\n\nR4 (Råteskader kledning): Godt dokumentert med fire separate evidenspunkter. Confidence 0.95 opprettholdes.\n\nR5 (Manglende ferdigattest/tegninger): Svært godt dokumentert med tre sterke evidenspunkter. Confidence 0.97 opprettholdes.\n\nR6 (Branncelleinndeling): Godt dokumentert med tre evidenspunkter inkl. konsekvensomtale. Confidence 0.96 opprettholdes.\n\nR7 (Brønnvann ikke drikkevann): Godt dokumentert, inkl. info om planlagt vannrenseanlegg. Confidence 0.96 opprettholdes.\n\nR8 (Utvendige rør passert brukstid): Godt dokumentert med tre evidenspunkter. Confidence 0.93 opprettholdes.\n\nR9 (Septiktank skjult): Bekreftet med to evidenspunkter. Confidence 0.88 opprettholdes.\n\nR10 (Radon): Godt dokumentert med tre evidenspunkter. Confidence 0.95 opprettholdes.\n\nR11 (Rekkverk): Svært godt dokumentert med seks separate evidenspunkter. Confidence 0.96 opprettholdes.\n\nR12 (Skjevheter etasjeskille): Godt dokumentert med to evidenspunkter. Confidence 0.88 opprettholdes.\n\nR13 (Løs puss/fuktsikring grunnmur): Dokumentert med fire evidenspunkter, men avviket beskrives som begrenset (\"ett lite område\"). Confidence 0.87 opprettholdes.\n\nR14 (Forstøtningsmurer): Godt dokumentert. Confidence 0.88 opprettholdes.\n\nR15 (Manglende dampsperre): Bekreftet, men kun ett evidenspunkt og tilstandsgrad er ikke eksplisitt angitt i tilgjengelige chunks. Confidence 0.85 opprettholdes.\n\nR16 (LNF-område/kulturmiljø): Godt dokumentert med to evidenspunkter. Confidence 0.92 opprettholdes.\n\nR17 (Norgespris bindingstid): Godt dokumentert med to evidenspunkter. Confidence 0.90 opprettholdes.\n\nR18 (Egeninnsats lydisolering): Bekreftet i egenerklæring. Confidence 0.82 opprettholdes.\n\nR19 (BKK nabovarsel): Bekreftet med ett evidenspunkt. Confidence 0.80 opprettholdes – dette er en midlertidig ulempe, ikke en varig risiko, men relevant for kjøper.\n\nR20 (Energikarakter F): Direkte bekreftet. Confidence 0.90 opprettholdes.\n\nR21 (Overflater bad 1. etg): Bekreftet med ett evidenspunkt. Confidence 0.88 opprettholdes.\n\nR22 (Legalpant): Bekreftet med ett evidenspunkt. Confidence 0.85 opprettholdes.\n\n**Manglende risiko identifisert:**\n\nR23_NY: I TG3-sammendraget nevnes \"Våtrom > 1-etg > Bad 2 (2,3 m²) > Generell\" som et alvorlig avvik, men dette er IKKE identifisert som en egen risiko i den opprinnelige analysen. Dette er en klar mangel som bør legges til med confidence 0.85 (evidens bekreftet i sammendrag, men detaljbeskrivelse mangler i tilgjengelige chunks).\n\n**Andre potensielle mangler som bør undersøkes nærmere:**\n- Varmtvannstank: Nevnt i sammendrag som eget punkt – tilstandsgrad ukjent fra tilgjengelige chunks\n- Elektrisk anlegg: Ikke eksplisitt vurdert i tilgjengelige chunks\n- Innvendig trapp: Håndløper mangler nevnt, men om dette er TG2 eller TG3 er uklart\n- Kjeller/underetasje: Innredning/bruksendring nevnt, lovlighet bør undersøkes\n- Nedgravd oljetank: Selger svarer \"Nei\" i egenerklæring, men bør bekreftes\n"
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
    "input_tokens": 21709,
    "output_tokens": 6527,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
