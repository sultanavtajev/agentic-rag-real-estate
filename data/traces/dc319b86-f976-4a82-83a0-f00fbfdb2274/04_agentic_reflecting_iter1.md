# Trace: agentic_reflecting_iter1
- **Run ID:** dc319b86-f976-4a82-83a0-f00fbfdb2274
- **Tidspunkt:** 2026-03-24T12:56:20.515883+00:00
- **Varighet:** 84.44s
- **Input tokens:** 16803
- **Output tokens:** 4589

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
Risiko 1: Eiendommen er under seksjonering – seksjoneringen er ikke fullført på salgstidspunktet, noe som innebærer usikkerhet rundt endelig eierform, tomtegrenser og rettigheter.
  Confidence: 0.95
  Evidens: Eiendommen er under seksjonering.; Gnr. 107, bnr. 111, ideell andel 1/1 i Lørenskog kommune. Eiendommen er under seksjonering.; Tomtene er under seksjonering, med et tomteareal på ca. 250 kvm per tomt.

Risiko 2: Boligen er ikke ferdigstilt – innflyttingsdato er satt til 01.03.2026. Ferdigattest foreligger ikke, og det er usikkerhet knyttet til om overtakelse kan gjennomføres som planlagt.
  Confidence: 0.93
  Evidens: Innflyttingsklar 01.03.2026.; Dersom ferdigattest ikke foreligger på overtakelsestidspunktet, vil overtakelse...; Prosjektet planlegges og oppføres i samsvar med...

Risiko 3: Tinglyste heftelser og bestemmelser fra 1914–2023 følger eiendommen, herunder bestemmelser om garasje, vann/kloakkledning, felles vedlikehold, frostsikkert fundament og riveplikt. Disse kan begrense bruken av eiendommen.
  Confidence: 0.9
  Evidens: 24.06.1970 – Dokumentnr: 3106 – Best om garasje/ Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det; 08.06.1964 – Dokumentnr: 1790 – Best. om vann/kloakkledn.; 28.04.1981 – Dokumentnr: 2720 – Erklæring/avtale Bestemmelse om frostsikkert fundament på garasje; 16.12.1914 – Dokumentnr: 900093 – Registrering av grunn; 01.12.1966 – Dokumentnr: 4275 – Bestemmelse om veg, Bestemmelse om felles vedlikehold

Risiko 4: Legalpant til sameiet og kommunen har prioritet foran tinglyste banklån. Dette innebærer at kjøper kan overta en eiendom med skjulte panteheftelser som ikke fremgår av grunnboken.
  Confidence: 0.92
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.

Risiko 5: Selger har ikke utført radonmåling. Dette er en helserisiko, særlig dersom boligen helt eller delvis leies ut.
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 6: Energimerking er rød (energifarge rød), noe som indikerer høyt energiforbruk og kan medføre høye driftskostnader for kjøper.
  Confidence: 0.85
  Evidens: Energifarge: Rød; Beregnet levert energi normalisert klima: 105.76 kWh/m²; Sum andel el/olje/gass av netto oppvarmingsbehov: 86.9 %

Risiko 7: Alle bilder i prospektet er fra en tilsvarende visningsbolig, ikke fra den faktiske boligen som selges. Kjøper kan få en annen bolig enn det bildene viser.
  Confidence: 0.9
  Evidens: Samtlige bilder i prospektet er fra tilsvarende visningsbolig.

Risiko 8: Stikkledninger for vann og avløp er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader for kjøper.
  Confidence: 0.85
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 9: Eiendommen er regulert til småhus og blokkbebyggelse. Nærliggende arealer er regulert til blokkbebyggelse i inntil 4 etasjer, noe som kan påvirke utsikt, sol og bomiljø negativt.
  Confidence: 0.8
  Evidens: Eiendommen er regulert til småhus og blokkbebyggelse.; Området omfatter gnr. 107, bnr. 19, 653 og 993 og skal benyttes til blokkbebyggelse i inntil 4 etasjer slik det fremgår av plankartet.

Risiko 10: Formuesverdi er ikke beregnet på salgstidspunktet. Kjøper vet ikke hva fremtidig eiendomsskatt og formuesbeskatning vil bli.
  Confidence: 0.78
  Evidens: Info om formuesverdi: Formuesverdien er ikke beregnet.; Skatteetaten vil beregne en boligverdi basert på SSBs statistiske opplysninger om omsatte boliger. Beregningen vil skje i forbindelse med første skattemelding etter overtakelse.

Risiko 11: Det er ingen muligheter for tilvalg i prosjektet. Kjøper kan ikke tilpasse boligen til egne ønsker og behov.
  Confidence: 0.82
  Evidens: Det er ikke muligheter for tilvalg.

Risiko 12: Terrasse ved befaring er ikke etablert med skillevegg for bod, noe som kan bety at arealet ikke er ferdigstilt som beskrevet i salgsoppgaven.
  Confidence: 0.8
  Evidens: 17.3 m² Terrasse (ved befaring er det ikke etablert skillevegg for bod)

Risiko 13: Kjøper må tegne eget TV/internett/bredbåndsabonnement. Dette er en løpende kostnad som ikke er inkludert i felleskostnader.
  Confidence: 0.7
  Evidens: TV/Internett/Bredbånd: Kjøper må tegne eget abonnement.

Risiko 14: Eiendommen er tidligere overført fra og sammenslått med andre matrikkelenheter (bl.a. Knr:3029 Gnr:107 Bnr:1386 og Bnr:111). Kompleks historikk kan innebære uavklarte rettigheter eller heftelser.
  Confidence: 0.75
  Evidens: 02.01.2023 – Dokumentnr: 4782 – Sammenslåing. Sammenslått med denne matrikkelenhet: Knr:3029 Gnr:107 Bnr:1386; Overført fra: Knr:3029 Gnr:107 Bnr:1386; Tidligere: Knr:3029 Gnr:107 Bnr:111

Dokumentkontekst:
[d055_d055 | Side [1]]
970 ‑ Dokumentnr: 3106 ‑ Best om garasje/
Tinglyste heftelser og rettigheter: På eiendommen er det parkering
2. ETASJE tinglyst følgende heftelser og rettigheter som følger Bestemmelse om å rive/ fjerne bygg når bygningsrådet
Øvrig
________________________________________ eiendommens matrikkel ved overskjøting til ny forlanger det
Hovedstue hjemmelshaver: Overført fra: Knr:3029 Gnr:107 Bnr:1386
informasjon
• Belagt med parkett 13 mm eik Harmoni Rus
White, 3222/ 107/ 111:
Adresse
1‑stav 08.06.1964 ‑

---

[d055_d055 | Side [1]]
egler. stand.
sameieforholdet, som felleskostnader. Legalpant er pant eiendomsmegler for eventuelle spørsmål.
som ikke vises i grunnboksutskriften, og har prioritet Hvis budgiver skal by på eiendommen i henhold til en Hvis budgiver ønsker å være anonym, kan bud fremmes
foran tinglyste lån, for eksempel banklån på seksjonen. Selger leverer eiendommen i ryddig og rengjort stand. kjøpsfullmakt må megler kontaktes og fullmakten via en fullmektig.
Legalpant til kommunen har høyere prioritet enn oversendes før

---

[d055_d055 | Side [1]]
enhet,
545 (Tinglysningsgebyr ‑ pantedokument) areal, byggeår og type bolig. Formuesverdien er en
545 (Tinglysningsgebyr skjøte) prosentandel av denne boligverdien og vil variere
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ dersom boligen brukes som primær‑ eller
21 090 (Omkostninger totalt) sekundærbolig.For mer informasjon, se Skatteetatens
nettsider.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
9 321 090 (Totalpris inkl.

---

[d055_d055 | Side [1]]
sert ventilasjon. 01.10.1964 ‑ Dokumentnr: 3184 ‑ Best. om vann/ 02.01.2023 ‑ Dokumentnr: 4782 ‑ Sammenslåing
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
Sammenslått med denne matrikkelenhet: Et bud bør inneholde eiendommens adresse (eventuelt
Kontrakts‑
Knr:3029 Gnr:107 Bnr:1386 gnr/ bnr), kjøpesum, budgivers kontaktinformasjon,
Vei, vann og avløp
Elektronisk innsendt finansieringsplan, akseptfrist, overtakelsesdato og
grunnlag
Eiendommen er tilknyttet offentlig vann‑ og eventuelle forbehold som for

---

[d055_d055 | Side [1]]
_________ i Lørenskog kommune. Eiendommen er under Overført fra: Knr:3029 Gnr:107 Bnr:1386 28.04.1981 ‑ Dokumentnr: 2720 ‑ Erklæring/ avtale
Hovedsoverom seksjonering. Gjelder denne registerenheten med flere Bestemmelse om frostsikkert fundament på garasje
• Walk‑in closet
• Skyvedør dobbel Opus Prima, 1 speil, hvit
Selger
• Egen inngang til bad 08.06.1964 ‑ Dokumentnr: 1790 ‑ Best. om vann/ 16.12.1914 ‑ Dokumentnr: 900093 ‑ Registrering av grunn
• Vegger malt i 10341 Kalk Bm Prosjekt Og Utvikling AS

---

[d055_d055 | Side [1]]
en er tilknyttet offentlig vann‑ og eventuelle forbehold som for eksempel usikker
avløpssystem. Stikkledningene fra eiendommen og ut til finansiering, salg av nåværende bolig ol. Normalt vil ikke
Lovanvendelse
01.01.2024 ‑ Dokumentnr: 169035 ‑ Omnummerering ved det kommunale nettet er private, og et bud med forbehold bli akseptert før forbeholdet er
kommuneendring vedlikeholdsansvaret for disse påhviler sameiet. Når en privatperson inngår avtale med en utbygger om avklart. Konferer gjerne med megler før

---

[d055_d055 | Side [1]]
r 9 300 000
Formuesverdi
Omkostning kjøper
Info om formuesverdi: Formuesverdien er ikke beregnet.
9 300 000,00 (Prisantydning) Skatteetaten vil beregne en boligverdi (beregnet
markedsverdi for bolig) basert på SSBs statistiske
Omkostninger opplysninger om omsatte boliger. Beregningen vil skje i
forbindelse med første skattemelding etter overtakelse. I
20 000 (Dokumentavgift (2,5% av tomteverdi)) beregningen tas det hensyn til din boligs beliggenhet,
545 (Tinglysningsgebyr ‑ pantedokument) areal, byggeår og

---

[d055_d055 | Side [1]]
.
Legalpant til kommunen har høyere prioritet enn oversendes før budgivning.
legalpant til sameiet. For mer informasjon om budgivningsprosessen, se
38 39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
«Forbrukerinformasjon om budgivning», som er vedlagt medgått tid og for utført arbeid. Dette omfatter blant alarmtjenester
salgsoppgaven, eller ta kontakt med megler. annet vederlag knyttet til tilrettelegging, markedsføring
og eventuelle avholdte visninger, samt påløpte utlegg. Hvilke produkter/ tjenester kjøper

---

[d055_d055 | Side [1]]
gler eller søk på 01.12.1966 ‑ Dokumentnr: 4275 ‑ Bestemmelse om veg
Tilvalgsmuligheter denne
• Vegger malt i 10341 Kalk saksnummer, adresse eller gårds‑ og bruksnummer på Bestemmelse om felles vedlikehold
• Himling i hvit farge S 0502‑Y, Jotun Plan‑ og bygningsetatens hjemmeside. Gjelder denne registerenheten med flere
enhet
• Dør Opus Prima, hvit
• Sort dørhåndtak fra Habo Det er ikke muligheter for tilvalg.
Tinglyste heftelser
24.06.1970 ‑ Dokumentnr: 3106 ‑ Best om garasje/
Tinglyste heftelser og

---

[d055_d055 | Side [1]]
ne grøntområder. I nærområdet
Estimert totalpris ink. omk
finnes dagligvarebutikker, apotek og treningssentre, og
Kr 9 321 090 det populære kjøpesenteret Triaden ligger kun en kort
kjøretur unna.
Eiendomsskatt
Hanaborg togstasjon ligger ca. fem minutters gange fra
I Lørenskog kommune er det eiendomsskatt på boliger boligen og betjenes av L1‑linjen med hyppige avganger.
og fast eiendom som overstiger en fastsatt verdi. Ved en Herfra tar reisen til Oslo S under 20 minutter. Det er også
markedsverdi på 9 300

---

[d055_d055 | Side [1]]
t forbruk til enhver tid. muligheter for friluftsliv året rundt, med turstier,
badeplasser, skiløyper og golfbane i nærheten.
31

## Side 17

OM EIENDOMMEN OM EIENDOMMEN
Beliggenheten gir en sjelden kombinasjon av rolige, himlingshøyde. Arealet inngår ikke i BRA, men opplyses • Vegger malt i 10341 Kalk
Innhold
grønne omgivelser og nærhet til et bredt tilbud av om sammen med BRA som et tillegg. • Himling i hvit farge S 0502‑Y, Jotun
servicetilbud og bymessige fasiliteter. GUA – summen av BRA og AHL. Brukes

---

[d055_d055 | Side [1]]
ir ingen Vi sier det som det er – enkelt og greit – fordi vi
  urealistiske løfter eller forskjønnede beskrivelser. vet at det gir de beste resultatene. Erfaringen
 vår bekrefter det, og erfaring har vi mye av.
Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er
en del av eiendommen og medfølger i handelen.
emera.no
66 67

## Side 35

Forbrukerinformasjon
om

---

[d055_d055 | Side [1]]
vtale med en utbygger om avklart. Konferer gjerne med megler før bud avgis.
Tidligere: Knr:3029 Gnr:107 Bnr:111 Adkomst til eiendommen skjer via sameiets felles vei. oppføring av ny bolig, vil dette normalt omfattes av
Vedlikehold av veien påhviler sameierne i felleskap. Se reglene i bustadoppføringslova. Dette regelverket sikrer Bud som har forbehold om konfidensialitet ("hemmelige
vedtekter for oversikt. blant annet at kjøperen får garanti for at selgeren bud") vil ikke bli formidlet til selger. Alle

---

[d055_d055 | Side [1]]
 som er spesialiserte på Forsikringspremien trekkes i oppgjøret. 4.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter 
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300 
og eventuelle idømte

---

[d055_d055 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d055_d055 | Side [1]]
l og nettotomteareal. med trygdesenter og trygdeboliger slik som vist på plankartet.
Garasjer inntil 50 m² tas ikke med i beregningsgrunnlaget.
§ 3
Bygningsrådet kan tillate at garasjer oppføres foran byggelinje mot kommunale og private Allmennyttig formål
veier. Enhver garasje skal plasseres slik at snuplass i tilslutning til denne kan opparbeides på
egen eiendom. § 8
Området avsatt til almennyttig formål (Vangsveien 1) gnr. 107, bnr. 728 m.m. skal nyttes til
velhus/grendehus for Fjellhamarskogen Vel.

---

[d055_d055 | Side [1]]
gvarmekabler.
Det er parkett i oppholdsrom og soverom, balansert ventilasjon,
gjennomtenkt belysning med downlights og komplett elektrisk
anlegg med klargjøring for elbillader. Garasje og carport tilhørende
boligen medfølger. Eiendommen har egen hage, og tomtene er
under seksjonering, med et tomteareal på ca. 250 kvm per tomt.
9

## Side 6

Samtlige bilder i prospektet er fra
tilsvarende vilsningsbolig.

## Side 7

(Ingen tekst ekstrahert)

## Side 8

(Ingen tekst ekstrahert)

## Side 9

(Ingen tekst

---

[d055_d055 | Side [1]]

− Spar verdifull tid
− Få advokatkostnadene dekket 
1.
2.
3.
Med vår boligkjøperforsikring er du i trygge hender

---

[d055_d055 | Side [1]]
t)

## Side 8

(Ingen tekst ekstrahert)

## Side 9

(Ingen tekst ekstrahert)

## Side 10

(Ingen tekst ekstrahert)

## Side 11

(Ingen tekst ekstrahert)

## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

Plantegning

## Side 15

PRAKTIKANTDEL

## Side 16

OM EIENDOMMEN
MARCUS THRANES VEI 38
OM EIENDOMMEN
Økonomi
Andre kostnader:
TV/ Internett/ Bredbånd: Kjøper må tegne eget
Prisantydning
abonnement.
Kr 9 300 000
Formuesverdi
Omkostning kjøper
Info om formuesverdi:

---

[d055_d055 | Side [1]]
k Harmoni Rus
White, 3222/ 107/ 111:
Adresse
1‑stav 08.06.1964 ‑ Dokumentnr: 1790 ‑ Best. om vann/ 09.06.1971 ‑ Dokumentnr: 2811 ‑ Bestemmelse om
• Peis Vision Line S40 Marcus Thranes vei 38, 1470 LØRENSKOG kloakkledn. kloakkledn
• Vegger malt i 10341 Kalk Rettighetshaver: Knr:3222 Gnr:107 Bnr:365
• Himling i hvit farge S 0502‑Y, Jotun Gnr. 107, bnr. 111, ideell andel 1/ 1 Bestemmelse om felles vedlikehold
________________________________________ i Lørenskog kommune. Eiendommen er under Overført fra:

---

[d055_d055 | Side [1]]
Energifarge: Rød 24.09.1963 ‑ Dokumentnr: 2914 ‑ Registrering av grunn
________________________________________ Utskilt fra denne matrikkelenhet:
• 3 soverom 01.10.1964 ‑ Dokumentnr: 3184 ‑ Best. om vann/ Knr:3029 Gnr:107 Bnr:1386
Info energiklasse
• Stue kloakkledn.
• Bad/ WC Se fullstendig energiattest fra selger som vedlegg til Rettighetshaver: Knr:3222 Gnr:107 Bnr:111
• Belagt med parkett 13 mm eik Harmoni Rus salgsoppgave. Megler påtar seg ikke ansvar for Bestemmelse om felles vedlikehold 01.01.2020 ‑

---

[d055_d055 | Side [1]]
ronisk
BRA‑i 3. etg. = 40,5 m2 temperaturkontroll, barnesikring, hurtigoppvarming.
eiendommen
TouchControl, autostart.
3. etasje Fratrukket areal ved skråhimlinger ________________________________________
Type eiendom
BRA‑i: 40 m² Stue, Soverom, Soverom, Soverom, Bad Åpent trapperom er i hovedsak inkludert i BRA‑i Induksjonstopp 800 mm:
Eieform: Eierseksjon Total BRA‑i = 123,9 m2 Glasskeramisk platetopp med induksjonsvarme LIA780,
TBA fordelt på etasje BRA‑e for garasje med bod = 16,4 m2 uavhengig, uten

---

[d055_d055 | Side [1]]
ert for frostsikring [%]: 83,0 Bygningskategori Småhus
Spesifikk vifteeffekt (SFP) [kW/m³/s]: 1,00 Simuleringsansvarlig
Luftmengde i driftstiden [m³/hm²] 1,20 Kommentar
Luftmengde utenfor driftstiden [m³/hm²] 0,00
Systemvirkningsgrad oppvarmingsanlegg: 0,88
Installert effekt romoppv. og varmebatt. [W/m²]: 80
Settpunkttemperatur for romoppvarming [°C] 20,3
Systemeffektfaktor kjøling: 2,50
Settpunkttemperatur for romkjøling [°C] 22,0
Installert effekt romkjøling og kjølebatt. [W/m²]: 0
Spesifikk pumpeeffekt

---

[d055_d055 | Side [1]]
akover.
32 33

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
Mål: 598/ 898 × 1045–1475 × 355 mm. Lydsignal ved programslutt. 57
Virkningsgrad: Tekniske data: Bad 3. etasje cm), sort eik PVC
Energieffektivitet B, viftevirkningsgrad B, Tilkoblingsverdi 1,9 / 1,8 kW, 220–240 V. Fliser leveres fra Flisekompaniet. • Servant ADA 60 Mid (61 × 46 × 3,5 cm), porselen
lysvirkningsgrad A, fettfiltereffektivitet D. Sikring 10 A. • Fliser gulv og vegg: RAKO Extra Ivory 60 × 60 hvit
________________________________________

---

[d055_d055 | Side [1]]
rt kjøkkenvask med ettgreps blandebatteri i Effekt maks: 603 m³/ h, 65 dB (A) re 1 pW.
Konferer megler ved spørsmål. TBA ‑Terrasser og åpen altan som er tilknyttet boligen. sort Nominell effekt min.: 288 m³/ h, 50 dB (A) re 1 pW.
ALH ‑ Areal med lav himlingshøyde måles på samme utførelse (514 × 358 × 180 mm), Cristadur® Green Line Forbruk: 83,2 kWh/ år.
måte som BRA, men man ser bort fra krav til Magma Equipment Avtrekksdyse 150 mm opp og bakover.
32 33

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
Mål: 598/

---

[d055_d055 | Side [1]]
verflater kloakkledn.
for • Belagt med parkett 13 mm eik Harmoni Rus Bestemmelse om felles vedlikehold
Regulering
styring av nattsenking/ ukeprogram White, Gjelder bnr.108, 111, 365 og 1386
• Bryter i Etman DesignX i sort utførelse 1‑stav Regulerings og arealplaner: Eiendommen er regulert til
• Underskap med servant, 60 cm, MIE småhus og blokkbebyggelse mm. For mer informasjon
• Speil Leo 60 × 70 med LED om reguleringsforhold, kontakt megler eller søk på 01.12.1966 ‑ Dokumentnr: 4275 ‑ Bestemmelse om

---

[d055_d055 | Side [1]]

Firma: Alfa Øst AS Firma: Alfa Øst AS
Inndatafil: C:\...\Marcus Thranes vei 38 E+F Hus E, G - 04.07.2024.smi Inndatafil: C:\...\Marcus Thranes vei 38 E+F Hus E, G - 04.07.2024.smi
Prosjekt: Marcus Thranes vei 38 E+F hus E, G Prosjekt: Marcus Thranes vei 38 E+F hus E, G
Sone: E, G; Sone: E, G;
Dokumentasjon av sentrale inndata (2) Inndata bygning
Beskrivelse Verdi Dokumentasjon Beskrivelse Verdi
Estimert virkningsgrad gjenvinner justert for frostsikring [%]: 83,0 Bygningskategori Småhus
Spesifikk

---

[d055_d055 | Side [1]]
lt på etasje BRA‑e for garasje med bod = 16,4 m2 uavhengig, uten ramme.
Objektstype: Enebolig 2. etasje Kokesoner: 4 kokesoner.
17.3 m² Terrasse (ved befaring er det ikke etablert skillevegg for bod) Utstyr: 9 hastigheter, 4‑trinns restvarmeindikasjon for
hver kokesone.
Ferdigattest/ brukstillatelse:
Fra 01.01.24 er det innført nye regler for måling og TouchControl‑betjening, platetoppbeskyttelse, display
Kjøkken leveranse
Prosjektet planlegges og oppføres i samsvar med opplysning av areal på boliger. med

---

[d055_d055 | Side [1]]
g ikke ansvar for Bestemmelse om felles vedlikehold 01.01.2020 ‑ Dokumentnr: 794914 ‑ Omnummerering ved
White, informasjonen som fremgår av energiattesten. Overført fra: Knr:3029 Gnr:107 Bnr:1386 kommuneendring
1‑stav Gjelder denne registerenheten med flere Tidligere: Knr:0230 Gnr:107 Bnr:111
• Dører fra Opus Prima, 1 speil
Oppvarming
• Sorte dørhåndtak fra Habo
________________________________________ Elektrisk oppvarming, vedovn og balansert ventilasjon. 01.10.1964 ‑ Dokumentnr: 3184 ‑ Best. om vann/

---

[d055_d055 | Side [1]]
1 r: U Te t g o n m in h gs u n s a p vn la : n v/ 1. etasje R 3 evisjonsnummer: D 28 at . o 0 : 2.23 SIVIL c A b R h K @ IT h E jo K rt T h a M rk N it A e L k / t e M r. A no S T E R AR 9 C 95 H 7 IT 2 E 25 C 7 TURE
52 53

## Side 28

 

---

[d055_d055 | Side [1]]
tore skyvedører skaper
en flott overgang mellom inne og ute, med direkte tilgang til egen
hage samt terrasse og balkong med gode sol‑ og utsiktsforhold.
Fra stuen er det utgang til balkong i 3. etasje.
Kjøkken levert av Keo, med slette, matte fronter i alpinhvit
utførelse, grepsløst design, integrerte hvitevarer og benkeplate i
terrazzo‑look. Boligen har to flislagte bad med fliser fra
Flisekompaniet, moderne innredning, sorte detaljer
ogvarmekabler.
Det er parkett i oppholdsrom og soverom, balansert

---

[d055_d055 | Side [1]]
BRA: • EasyTouch Sort glass.
utstedes en tid etter at boligen er overtatt. BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. • Fronter i alpinvit ultramatt Utstyr: 1 motor, 3 hastigheter, 1 intensivmodus,
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor • Grepsløst TouchControl, Back Aspiration.
Dersom ferdigattest ikke foreligger på boenheten og som tilhører denne, for eksempel eksterne • Benkeplate i Slim Line, farge 322 Terrazzo hvit Tekniske data:
overtakelsestidspunktet, vil overtakelse

---

[d055_d055 | Side [1]]
12998 kWh
C <= 165.34 kWh/m²
D <= 208.36 kWh/m²
Dokumentasjon av sentrale inndata (1)
Beskrivelse Verdi Dokumentasjon
E <= 252.19 kWh/m²
Areal yttervegger [m²]: 145
Areal tak [m²]: 64
Areal gulv [m²]: 51
F <= 315.09 kWh/m²
Areal vinduer og ytterdører [m²]: 39
Oppvarmet bruksareal (BRA) [m²]: 123
Oppvarmet luftvolum [m³]: 304
G > 315.09 kWh/m² U-verdi yttervegger [W/m²K] 0,15
Andel fossil/el. oppvarming U-verdi tak [W/m²K] 0,13
>= 82.5 % < 82.5 % < 65.0 % < 47.5 % < 30.0 % U-verdi gulv [W/m²K] 0,10
U-verdi

---

[d055_d055 | Side [1]]
/ n A u p 1 r r n T . r e 3 : e o : 8 s n 6 j 1 e s T + k E0 1 k t G u N 0 . o t .N v 7 2R i g / k : 1 li 1 n 1 g
50 51

## Side 27

170
167
165166
164
Renov Ogsgt a j r p ae øn pn s ft a dn e j r ao r o b rm f e dr n a fi e dø r 1 S er to t t a tm nil t 6 ty e av n vkes e,i e b 1 t i a i V b r l e e t R e r g e r e je t s å e . n dg t n e o d n E dv m k r o s a ee is n m v t l . e s h g a o e g e e k s s k p g e d f n o r j i r o o s d ø e n k n e s s k b a e l v n a y r t h . S e D g n e N g r i s t i t

---

[d055_d055 | Side [1]]
Bh 0 9x21 8x21
B
B
Balkong 6,2 m2 H=1900 Stue Sov 13,2 m2 8,0 m2 SD SD Bad Sov H=1900 Sov 6,5 m2 8,0 m2
7,4 m2
+5,46
3.ETASJE
+2,73
2.ETASJE
±0,00
1.ETASJE
8,9 1,2
2,3
3,0
4,2
3,0
4,2
6,1
1.ETASJE 2.ETASJE 3.ETASJE
Sørvest Sørøst
H=1900
1 BYA (Bebygd Areal)
BYA 75,186 75,186 m²
2 Grunnflate
Grunnflate 57,282
57,282 m²
3 BRA (Bruksareal)
BRA 1.ETG 32,203
BRA 2.ETG 49,627
BRA 3.ETG 39,191
121,021 m² Nordvest 4 B B R R A A G ( a U r o a p sj p e varmet 2 1 1 ) 7 6 6 0 , , 5 5 ,0 4 4 3 1 1 0 m m ² ² SNITT B-B

---

[d055_d055 | Side [1]]
5 % < 65.0 % < 47.5 % < 30.0 % U-verdi gulv [W/m²K] 0,10
U-verdi vinduer og ytterdører [W/m²K] 0,80
Areal vinduer og dører delt på bruksareal [%] 32,1
Beregnet levert energi normalisert klima: 105.76 kWh/m²
Normalisert kuldebroverdi [W/m²K]: 0,05
Sum andel el/olje/gass av netto oppvarmingsbehov: 86.9 %
Normalisert varmekapasitet [Wh/m²K] 21
Lekkasjetall (n50) [1/h]: 0,60
Temperaturvirkningsgr. varmegjenvinner [%]: 83
Beregnet levert energi
Beskrivelse Verdi
Energibruk normalisert klima 106

---

[d055_d055 | Side [1]]
izzamodus, holde varm‑funksjon, intensiv
Uteareal
BRA‑e: 14 2 m² Garasje Bod BRA‑i 1. etg. = 33,4 m2 oppvarming/ forvarming.
Boligen har egen hage med gressplen og tua hekk. ( Inkludert bod på 3,0 m2) Utstyr: pyrolyse, helglass innerdør, dørspjeld, glatte
sidevegger.
2. etasje BRA‑i 2. etg. = 50,0 m2 40 automatiske programmer.
Beskrivelse av
BRA‑i: 50 m² Stue, bad, walk‑in, soverom Display med rød tekst, elektronisk klokke, elektronisk
BRA‑i 3. etg. = 40,5 m2 temperaturkontroll, barnesikring,

---

[d055_d055 | Side [1]]
 til Oslo S under 20 minutter. Det er også
markedsverdi på 9 300 000 er det estimert ca. 6 410,‑ i gode bussforbindelser i området med enkel adkomst til
året i eiendomsskatt. både Lørenskog sentrum og Oslo. For bilpendlere er det
rask og enkel tilkobling til E6 og RV159, som gir smidig
adkomst i flere retninger.
Kommunale avgifter
Informasjon: Kommunale avgifter avhenger av Med kort vei til Østmarka og Losby er det gode
kommunens satser og eget forbruk til enhver tid. muligheter for friluftsliv året rundt,

---

[d055_d055 | Side [1]]
dret gi sin vurdering av det enkelte bud overfor
sameiebrøk. Ved manglende betaling av fellesutgifter har Alle bud skal inngi skriftlig til eiendomsmegler. Kravet til selgeren.
sameiet legal panterett i den enkelte eierseksjon, skriftlighet gjelder også ved forhøyelse av bud, motbud
begrenset til inntil 2 ganger folketrygdens grunnbeløp. og selgers aksept eller avslag. Før et bud kan formidles til Etter at handel har kommet i stand, eller dersom en
selger må megler innhente gyldig legitimasjon og budrunde

---

[d055_d055 | Side [1]]
ttighet hefter i: Knr:3222 Gnr:107 Bnr:1 Eiendomsmegler kan også kontaktes for tilsendelse av Eiendomsmegler skal så snart som mulig bekrefte
Kan ikke slettes uten samtykke fra: Lørenskog Kommune I henhold til eierseksjonsloven § 31 er sameierne budkjema, og budskjema finnes også i salgsoppgaven. skriftlig overfor budgivere at budene deres er mottatt, og
Org.nr: 842 566 142 ansvarlige overfor sameiets kreditorer i forhold til sin vil uoppfordret gi sin vurdering av det enkelte bud overfor
sameiebrøk. Ved

---

[d055_d055 | Side [1]]

og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500 5.
aksjebolig:

Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900

− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.

---

[d055_d055 | Side [1]]
 kvm B ‑ Rød
BOLIGTYPE
Enebolig
EIEFORM
Eierseksjon
6 7

## Side 5

BESKRIVELSE
Særdeles flott familiebolig
under oppføring | 4 Soverom, 2
stuer | Gjennomført høy
standard | Garasje og stor hage
Innflyttingsklar 01.03.2026.
Boligen holder en gjennomgående høy standard med moderne
materialvalg, lyse flater og mørke detaljer. Planløsningen er
romslig, med flere oppholdsrom som gir gode soner for både
familieliv, hjemmekontor og det sosiale. Store skyvedører skaper
en flott overgang mellom inne og ute, med

---

[d055_d055 | Side [1]]
ruker e‑signatur som f eks. anonymisert form. Kopi av budjournal gis til kjøper og
eiendomsskatt. De øvrige seksjonseierne i sameiet har eiendomshandleren. Kjøpekontrakten kan gjennomgås bankID. Etter det første budet er inngitt, kan budgiver selger uten ugrunnet opphold etter at handel er kommet i
legalpant på inntil 2G som sikkerhet for krav knyttet til hos eiendomsmegler før budet legges inn. Kontakt inngi bud pr e‑post eller pr SMS til megler. stand.
sameieforholdet, som felleskostnader. Legalpant er

---

[d055_d055 | Side [1]]
e og
Meglers vederlag
tilknyttede foretak
Provisjon ved salg til prisantydning: kr 0,8%
Tilrettelegging: kr 15.000 Emera Norge AS og eiendomsmeglingsforetakene som
Visninger/ overtagelser: kr 3000 pr. stk. er tilknyttet Emera har samarbeid med forskjellige
Markedspakke: kr 23.900 foretak som tilbyr forbrukerne produkter eller tjenester i
Oppgjørshonorar inkl. factoring: kr 9900 forbindelse med et salgsoppdrag. Våre
Grunnpakke bolig Info: kr 9.900 samarbeidspartene er:
Søderberg & Partners AS ‑ formidler av

---

[d055_d055 | Side [1]]
kter til § 69.3).
bygningsrådets skjønn ikke er til sjenanse for omkringliggende bebyggelse m.h.t. støy,
trafikk, parkering m.m.
Offentlig formål (trygdesenter)
§ 2
(utgår –kfr kom.plan) § 7
Utnyttelsen skal ikke overstige 0,20 for 1 etasjers bolig og 0,15 for 2 etasjers bolig i det Området for trygdesenter omfatter gnr. 107, bnr. 555, 556, 596 og 677, og anses ferdig utbygd
utnyttelsesgraden defineres som forholdet mellom bebygd tomteareal og nettotomteareal. med trygdesenter og trygdeboliger slik som

---

[d055_d055 | Side [1]]
se bestemmelser gjelder for det område som på plankartet er vist med reguleringsgrense.
§ 5
Området reguleres til følgende formål i h.h.t. bygningslovens. § 25:
— Boligområde, småhus. Parkering/garasjer for blokkbebyggelsen er avsatt som fellesarealer på gnr. 107, bnr. 979 og
— Boligområde, blokkbebyggelse. gnr. 107, bnr. 1334, 1335. Jfr. § 9a. Garasjeanlegg kan oppføres på disse arealene etter
— Forretningsområde. bygningsrådets bestemmelser.
— Offentlig formål, trygdesenter.
— Almennyttig formål,

---

[d055_d055 | Side [1]]
delse med kommunalteknisk drift eller
- blokkbebyggelsen på gnr. 107, bnr. 19 og 993. elektrisitetsforsyning kan tillates oppført innenfor regulert trafikkområde såfremt det
ikke blir til ulempe for den offentlige ferdsel. Ved fylkesvei må vegsjefens tillatelse
- felles parkeringsanlegg på gnr. 107, bnr. 979, 1334 og 1335. foreligge.
- boligbebyggelsen på gnr. 107, bnr. 585, 582 nordre del, 823, 967 og 1856. d. Gjerder mot vei, regulert til offentlig bruk, tillates ikke oppført nærmere enn 4,5 m

---

[d055_d055 | Side [1]]
rs planum.
dekke parkeringsbehovet for blokkbebyggelsen (Fjellet borettslag) på gnr. 107, bnr. 19
og 993. b. Private avkjørsler til fylkesveiene i planområdet tillates ikke utenom de steder som er
avmerket i plankartet. Avkjørsler skal utformes med stigningsforhold og frisikt etter
b. Felles avkjørsel mellom Asbjørn Klosters vei og Elveveien skal betjene følgende fylkesvegsjefens bestemmelser.
eiendommer:
c. Nødvendige synlige anlegg i forbindelse med kommunalteknisk drift eller
- blokkbebyggelsen på gnr.

---

[d055_d055 | Side [1]]
lert til offentlig bruk, tillates ikke oppført nærmere enn 4,5 m fra
regulert senterlinje.
c. Øvrige felles avkjørsler vist i planen skal betjene eiendommer som grenser til disse
samt eventuelle fremtidige parseller av eiendommene. Bygningsrådet kan godkjenne Generelt
annen ordning hvor rådet finner dette forsvarlig.
§ 13
§ 10
Unntak fra disse bestemmelser kan, når særlige grunner tilsier det, tillates av bygningsrådet
Fellesarealer (lek) avsatt på gnr. 107, bnr. 19 skal tjene blokkbebyggelsens behov.

---

[d055_d055 | Side [1]]
es
bevart. Evt. oppfyllings- og planeringsarbeider må på forhånd anmeldes og godkjennes
av bygningsrådet.
c. Bygningsrådet kan tillate at det oppføres bygninger og konstruksjoner innenfor Kommuneplanbestemmelser vedtatt den 15.03.2023
friområdet som har direkte tilknytning til bruken av dette til rekreasjonsformål. erstatter § 2 i disse reguleringsbestemmelsene.
Trafikkområder
3 4
62 63

## Side

---

[d055_d055 | Side [1]]
mmelser.
— Offentlig formål, trygdesenter.
— Almennyttig formål, velhus.
— Fellesareal, parkering. Forretningsområder
— Fellesareal, lek.
— Friområde, park og turvei. § 6
— Trafikkområde.
Forretningseiendommen gnr. 107, bnr. 1242 tillates bebygd med inntil 3 etasjer med
maksimal utnyttingsgrad U=30.
Boligområde, småhus
Forretningseiendommer kombinert med boligformål som vist på plankartet tillates bebygd
§ 1 med inntil 2 etg. med maks. utnyttingsgrad U=0,20 og forretning innredet i 1.

---

[d055_d055 | Side [1]]
etg. med maks. utnyttingsgrad U=0,20 og forretning innredet i 1. etasje.
Utnyttelsesgraden beregnes som for boliger i § 2. Det forutsettes at det på tomta eller i rimelig
Område som på plankartet er merket ”Boligområde” (uten undertittel) skal benyttes til nærhet av denne, opparbeides tilstrekkelig antall parkeringsplasser (Jfr. Lørenskog kommunes
småhus. I bebyggelsen kan det foruten til boliger innredes til sosiale formål som etter vedtekter til § 69.3).
bygningsrådets skjønn ikke er til sjenanse for

---

[d055_d055 | Side [1]]
barn
Luhr skole 11 min
Aktivitetshall, fotball 0.9 km
EVO SNØ 16 min Enslig m. barn
Sportytude Lørenskog Snø 17 min
Enslig u. barn
Boligmasse
Flerfamilier
52% enebolig
4% rekkehus 0% 47%
25% blokk
20% annet Fjellet
Oslo og omegn
Norge
Sivilstand
Norge
«Hyggelige naboer. Sentralt til alt.
Grøntområder.» Gift 32% 33%
Sitat fra en lokalkjent Ikke gift 55% 54%
Separert 10% 9%
Enke/Enkemann 3% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og

---

[d055_d055 | Side [1]]
 m.m. skal nyttes til
velhus/grendehus for Fjellhamarskogen Vel. Området skal bebygges i inntil 2 etasjer med
utnyttelsesgrad maksimalt 0,15 beregnet som for boliger under § 2.
Fellesarealer
1 2
60 61

## Side 32

§ 12
§ 9
a. Frisiktsoner, som vist i planen, skal ryddes og planeres slik at det blir fri sikt i en
a. Felles parkeringsplass på gnr. 107, bnr. 1334 og 1335 samt på gnr. 107, bnr. 979 skal høyde av 0,5 m over tilstøtende veiers planum.
dekke parkeringsbehovet for blokkbebyggelsen (Fjellet

---

[d055_d055 | Side [1]]
isse reguleringsbestemmelsene.
Trafikkområder
3 4
62 63

## Side 33

Boligkjøperforsikring


Hvis din nye bolig har skjulte feil kan dette koste 
deg både tid og

---

[d055_d055 | Side [1]]

58 59

## Side 31

22-4-10 Boligområde (blokker)
FJELLHAMARSKOGEN
§ 4
REGULERINGSBESTEMMELSER TIL REGULERINGSPLAN FOR
FJELLHAMARSKOGEN Området omfatter gnr. 107, bnr. 19, 653 og 993 og skal benyttes til blokkbebyggelse i inntil 4
etasjer slik det fremgår av plankartet. Området anses ferdig utbygd, men bygningsrådet kan
dog godkjenne oppføring av mindre bygninger for sosiale funksjoner innen området.
Disse bestemmelser gjelder for det område som på plankartet er vist

---

[d055_d055 | Side [1]]
etc.):
NAVN: NAVN:
PERSONNR: PERSONNR:
ADRESSE: ADRESSE:
POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
E-POST: E-POST:
DATO: STED: DATO: STED:
SIGNATUR: SIGNATUR:
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge, sertifi sert med miljømerket
Svanen og medlem av

---

[d055_d055 | Side [1]]
ist, overtakelsesdato og herunder budets størrelse, forbehold og akseptfrist.
eventuelle forbehold som for eksempel usikker Megler skal så snart som mulig bekrefte skriftlig overfor
finansiering, salg av nåværende bolig ol. Normalt vil ikke budgivere at budene deres er mottatt. For øvrig vil megler,
et bud med forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold.
7.Kopi av

---

[d055_d055 | Side [1]]
 Der lokal kjennskap benytter e-signatur som f.eks. BankID eller MinID. punkt 3.
budrunden morsommere – fra hvilepuls til makspuls. Skal du selge i Oslo?
møter ekspertise Snakk med oss! 2.Et bud bør inneholde eiendommens adresse (eventuelt 6.Megleren skal, så langt det er nødvendig og mulig,
gnr/bnr), kjøpesum, budgivers kontaktinformasjon, holde budgiverne skriftlig orientert om mottatte bud,
finansieringsplan, akseptfrist, overtakelsesdato og herunder budets størrelse, forbehold og

---

[d055_d055 | Side [1]]
ppfyller kriteriene for å være annonserte visning. Senere bud må ha en akseptfrist
Selger har ikke utført radonmåling. Det er ikke krav om forbruker, for eksempel ved at kjøpet skjer som ledd i som er lang nok til at budet og eventuelle forbehold kan
dette med mindre boligen er helt eller delvis utleid. næringsvirksomhet, kan selger kreve at avhendingsloven videreformidles til alle involverte parter slik at disse får tid
01.12.1966 ‑ Dokumentnr: 4275 ‑ Bestemmelse om veg legges til grunn for avtalen i

---

[d055_d055 | Side [1]]
inngis med en frist som åpenbart er for kort til at
megleren kan avvikle budrunden på en forsvarlig måte
som sikrer selger og interessenter et tilstrekkelig grunnlag
Emir Resulbegovic
Eiendomsmegler | Salgssjef | Partner VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
emir.resulbegovic@emera.no
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
+47 473 97 811
høyeste bud.
2.Når et bud er inngitt

---

[d055_d055 | Side [1]]
som en
selger må megler innhente gyldig legitimasjon og budrunde avsluttes uten at handel er kommet i stand,
Legalpant: Kommunen har legalpant som sikkerhet for Kjøper og selger er forpliktet til å signere den standard signatur fra budgiver. Kravet til legitimasjon og signatur kan en budgiver kreve kopi av budjournalen i
betaling av kommunale avgifter og eventuell kjøpekontrakten utarbeidet av Emera som en del av er oppfylt dersom budgiver bruker e‑signatur som f eks. anonymisert form. Kopi av budjournal

---

[d055_d055 | Side [1]]
 frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.
65

## Side 34

7.
 Fra hvilepuls
8.
 til

---

[d055_d055 | Side [1]]

Med vår boligkjøperforsikring er du i trygge hender 
hvis du oppdager feil eller mangler ved boligen du har 
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Eiendommen er under seksjonering – seksjoneringen er ikke fullført på salgstidspunktet, noe som innebærer usikkerhet rundt endelig eierform, tomtegrenser og rettigheter.",
      "evidence": [
        "Gnr. 107, bnr. 111, ideell andel 1/1 i Lørenskog kommune. Eiendommen er under seksjonering.",
        "Tomtene er under seksjonering, med et tomteareal på ca. 250 kvm per tomt.",
        "Eieform: Eierseksjon – men seksjoneringen er ennå ikke gjennomført"
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Boligen er ikke ferdigstilt – innflyttingsdato er satt til 01.03.2026. Ferdigattest foreligger ikke, og det er usikkerhet knyttet til om overtakelse kan gjennomføres som planlagt.",
      "evidence": [
        "Innflyttingsklar 01.03.2026.",
        "Dersom ferdigattest ikke foreligger på overtakelsestidspunktet, vil overtakelse...",
        "Prosjektet planlegges og oppføres i samsvar med..."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Tinglyste heftelser og bestemmelser fra 1914–2023 følger eiendommen, herunder bestemmelser om garasje, vann/kloakkledning, felles vedlikehold, frostsikkert fundament og riveplikt. Disse kan begrense bruken av eiendommen.",
      "evidence": [
        "24.06.1970 – Dokumentnr: 3106 – Best om garasje / Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det",
        "08.06.1964 – Dokumentnr: 1790 – Best. om vann/kloakkledn.",
        "28.04.1981 – Dokumentnr: 2720 – Erklæring/avtale Bestemmelse om frostsikkert fundament på garasje",
        "16.12.1914 – Dokumentnr: 900093 – Registrering av grunn",
        "01.12.1966 – Dokumentnr: 4275 – Bestemmelse om veg, Bestemmelse om felles vedlikehold"
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Legalpant til sameiet og kommunen har prioritet foran tinglyste banklån. Dette innebærer at kjøper kan overta en eiendom med skjulte panteheftelser som ikke fremgår av grunnboken.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R5",
      "description": "Selger har ikke utført radonmåling. Dette er en helserisiko, særlig dersom boligen helt eller delvis leies ut.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Energimerking er rød (energifarge rød), noe som indikerer høyt energiforbruk og kan medføre høye driftskostnader for kjøper.",
      "evidence": [
        "Energifarge: Rød",
        "Beregnet levert energi normalisert klima: 105.76 kWh/m²",
        "Sum andel el/olje/gass av netto oppvarmingsbehov: 86.9 %"
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R7",
      "description": "Alle bilder i prospektet er fra en tilsvarende visningsbolig, ikke fra den faktiske boligen som selges. Kjøper kan få en annen bolig enn det bildene viser.",
      "evidence": [
        "Samtlige bilder i prospektet er fra tilsvarende visningsbolig."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Stikkledninger for vann og avløp er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader for kjøper.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen er regulert til småhus og blokkbebyggelse. Nærliggende arealer er regulert til blokkbebyggelse i inntil 4 etasjer, noe som kan påvirke utsikt, sol og bomiljø negativt.",
      "evidence": [
        "Eiendommen er regulert til småhus og blokkbebyggelse.",
        "Området omfatter gnr. 107, bnr. 19, 653 og 993 og skal benyttes til blokkbebyggelse i inntil 4 etasjer slik det fremgår av plankartet."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Formuesverdi er ikke beregnet på salgstidspunktet. Kjøper vet ikke hva fremtidig eiendomsskatt og formuesbeskatning vil bli.",
      "evidence": [
        "Info om formuesverdi: Formuesverdien er ikke beregnet.",
        "Skatteetaten vil beregne en boligverdi basert på SSBs statistiske opplysninger om omsatte boliger. Beregningen vil skje i forbindelse med første skattemelding etter overtakelse.",
        "Ved en markedsverdi på 9 300 000 er det estimert ca. 6 410,- i året i eiendomsskatt."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R11",
      "description": "Det er ingen muligheter for tilvalg i prosjektet. Kjøper kan ikke tilpasse boligen til egne ønsker og behov.",
      "evidence": [
        "Det er ikke muligheter for tilvalg."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Terrasse ved befaring er ikke etablert med skillevegg for bod, noe som kan bety at arealet ikke er ferdigstilt som beskrevet i salgsoppgaven.",
      "evidence": [
        "17.3 m² Terrasse (ved befaring er det ikke etablert skillevegg for bod)"
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Kjøper må tegne eget TV/internett/bredbåndsabonnement. Dette er en løpende kostnad som ikke er inkludert i felleskostnader.",
      "evidence": [
        "TV/Internett/Bredbånd: Kjøper må tegne eget abonnement."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R14",
      "description": "Eiendommen er tidligere overført fra og sammenslått med andre matrikkelenheter (bl.a. Knr:3029 Gnr:107 Bnr:1386 og Bnr:111). Kompleks historikk kan innebære uavklarte rettigheter eller heftelser.",
      "evidence": [
        "02.01.2023 – Dokumentnr: 4782 – Sammenslåing. Sammenslått med denne matrikkelenhet: Knr:3029 Gnr:107 Bnr:1386",
        "Overført fra: Knr:3029 Gnr:107 Bnr:1386",
        "Tidligere: Knr:3029 Gnr:107 Bnr:111"
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R15",
      "description": "Eiendomsskatt påløper i Lørenskog kommune. Ved en markedsverdi på 9 300 000 er estimert eiendomsskatt ca. 6 410 kr per år, men endelig beløp avhenger av fastsatt formuesverdi og kommunens satser.",
      "evidence": [
        "I Lørenskog kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.",
        "Ved en markedsverdi på 9 300 000 er det estimert ca. 6 410,- i året i eiendomsskatt."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Kjøper er ansvarlig overfor sameiets kreditorer i forhold til sin sameiebrøk (jf. eierseksjonsloven § 31). Dette innebærer at kjøper kan bli holdt ansvarlig for andres mislighold.",
      "evidence": [
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d055_d055"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "felleskostnader månedlig beløp sameiet",
    "bustadoppføringslova garanti selger utbygger",
    "ferdigattest brukstillatelse overtakelse vilkår",
    "kommunale avgifter vann avløp renovasjon beløp",
    "vedtekter sameiet husordensregler",
    "selger Prosjekt Og Utvikling AS soliditet garanti",
    "radon måling krav nybygg",
    "energimerke rød nybygg TEK17 krav"
  ],
  "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Seksjonering ikke fullført (0.95):** Godt støttet av flere tekstpassasjer. Beholder høy confidence. Risikoen er reell og vesentlig.\n\n**R2 – Bolig ikke ferdigstilt (0.93):** Godt støttet. Innflyttingsdato 01.03.2026 og omtale av ferdigattest bekrefter risikoen. Beholder høy confidence. Viktig tillegg: bustadoppføringslova gjelder, men det er ikke eksplisitt bekreftet hvilke garantier som stilles – dette bør undersøkes nærmere.\n\n**R3 – Tinglyste heftelser (0.90):** Godt dokumentert med konkrete dokumentnumre og datoer. Beholder confidence.\n\n**R4 – Legalpant (0.92):** Direkte sitert fra dokumentet. Godt støttet. Beholder confidence.\n\n**R5 – Radonmåling ikke utført (0.88):** Direkte bekreftet i dokumentet. Beholder confidence.\n\n**R6 – Energimerke rød (0.85 → 0.72):** Evidensen bekrefter rød energifarge og 105.76 kWh/m². Imidlertid er 105.76 kWh/m² ikke ekstremt høyt for et nybygg, og boligen har balansert ventilasjon og moderne isolasjon (U-verdier er gode: yttervegg 0.15, tak 0.13, gulv 0.10). Rød energifarge kan skyldes høy andel el-oppvarming (86.9%) snarere enn dårlig isolasjon. Risikoen er reell men noe overdrevet – justerer ned til 0.72.\n\n**R7 – Bilder fra visningsbolig (0.90):** Direkte bekreftet. Beholder confidence.\n\n**R8 – Private stikkledninger (0.85):** Direkte bekreftet. Beholder confidence.\n\n**R9 – Regulering blokkbebyggelse (0.80 → 0.82):** Godt støttet. Området er allerede regulert og «anses ferdig utbygd», noe som faktisk reduserer risikoen for ny utbygging. Justerer marginalt opp siden reguleringsplanen er klar.\n\n**R10 – Formuesverdi ikke beregnet (0.78 → 0.70):** Støttet, men det finnes et estimat på eiendomsskatt (6 410 kr/år) i dokumentet, noe som reduserer usikkerheten noe. Justerer ned til 0.70. Dette er dessuten en normal situasjon for nybygg.\n\n**R11 – Ingen tilvalg (0.82):** Direkte bekreftet. Beholder confidence.\n\n**R12 – Terrasse uten skillevegg (0.80):** Direkte bekreftet. Beholder confidence.\n\n**R13 – TV/internett ikke inkludert (0.70 → 0.55):** Støttet, men dette er en svært vanlig og forventet situasjon for eierseksjoner. Risikoen er lav og bør nedprioriteres. Justerer ned til 0.55.\n\n**R14 – Kompleks matrikkelhistorikk (0.75 → 0.65):** Støttet av dokumentet, men sammenslåing og omnummerering er administrative prosesser som normalt ikke medfører uavklarte rettigheter. Justerer ned til 0.65.\n\n**Nye risikoer identifisert:**\n\n**R15 – Eiendomsskatt:** Dokumentet nevner eksplisitt eiendomsskatt i Lørenskog kommune med estimat på 6 410 kr/år. Dette er en konkret løpende kostnad som bør fremheves separat fra formuesverdi (R10). Confidence: 0.80.\n\n**R16 – Sameieansvar overfor kreditorer (eierseksjonsloven § 31):** Dokumentet nevner eksplisitt at sameierne er ansvarlige overfor sameiets kreditorer i forhold til sameiebrøk. Dette er en risiko som ikke var identifisert. Confidence: 0.78.\n\n**Manglende risikoer som bør undersøkes:**\n- Garantistillelse fra utbygger (bustadoppføringslova § 12) – ikke bekreftet i dokumentet\n- Felleskostnader – beløp ikke funnet i dokumentchunkene\n- Selgers soliditet/økonomi (Prosjekt Og Utvikling AS)\n- Kommunale avgifter – beløp ikke spesifisert\n- Vedtekter for sameiet – ikke gjennomgått i detalj\n"
}

## Raw Response
```json
{
  "id": "msg_01MWr5vKHkTY6c7Y6iaHvMmi",
  "container": null,
  "content": [
    {
      "id": "toolu_01TuxJpDDds6HLirL8Auwfqp",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Eiendommen er under seksjonering – seksjoneringen er ikke fullført på salgstidspunktet, noe som innebærer usikkerhet rundt endelig eierform, tomtegrenser og rettigheter.",
            "evidence": [
              "Gnr. 107, bnr. 111, ideell andel 1/1 i Lørenskog kommune. Eiendommen er under seksjonering.",
              "Tomtene er under seksjonering, med et tomteareal på ca. 250 kvm per tomt.",
              "Eieform: Eierseksjon – men seksjoneringen er ennå ikke gjennomført"
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Boligen er ikke ferdigstilt – innflyttingsdato er satt til 01.03.2026. Ferdigattest foreligger ikke, og det er usikkerhet knyttet til om overtakelse kan gjennomføres som planlagt.",
            "evidence": [
              "Innflyttingsklar 01.03.2026.",
              "Dersom ferdigattest ikke foreligger på overtakelsestidspunktet, vil overtakelse...",
              "Prosjektet planlegges og oppføres i samsvar med..."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Tinglyste heftelser og bestemmelser fra 1914–2023 følger eiendommen, herunder bestemmelser om garasje, vann/kloakkledning, felles vedlikehold, frostsikkert fundament og riveplikt. Disse kan begrense bruken av eiendommen.",
            "evidence": [
              "24.06.1970 – Dokumentnr: 3106 – Best om garasje / Bestemmelse om å rive/fjerne bygg når bygningsrådet forlanger det",
              "08.06.1964 – Dokumentnr: 1790 – Best. om vann/kloakkledn.",
              "28.04.1981 – Dokumentnr: 2720 – Erklæring/avtale Bestemmelse om frostsikkert fundament på garasje",
              "16.12.1914 – Dokumentnr: 900093 – Registrering av grunn",
              "01.12.1966 – Dokumentnr: 4275 – Bestemmelse om veg, Bestemmelse om felles vedlikehold"
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Legalpant til sameiet og kommunen har prioritet foran tinglyste banklån. Dette innebærer at kjøper kan overta en eiendom med skjulte panteheftelser som ikke fremgår av grunnboken.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R5",
            "description": "Selger har ikke utført radonmåling. Dette er en helserisiko, særlig dersom boligen helt eller delvis leies ut.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Energimerking er rød (energifarge rød), noe som indikerer høyt energiforbruk og kan medføre høye driftskostnader for kjøper.",
            "evidence": [
              "Energifarge: Rød",
              "Beregnet levert energi normalisert klima: 105.76 kWh/m²",
              "Sum andel el/olje/gass av netto oppvarmingsbehov: 86.9 %"
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R7",
            "description": "Alle bilder i prospektet er fra en tilsvarende visningsbolig, ikke fra den faktiske boligen som selges. Kjøper kan få en annen bolig enn det bildene viser.",
            "evidence": [
              "Samtlige bilder i prospektet er fra tilsvarende visningsbolig."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Stikkledninger for vann og avløp er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette kostnader for kjøper.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen er regulert til småhus og blokkbebyggelse. Nærliggende arealer er regulert til blokkbebyggelse i inntil 4 etasjer, noe som kan påvirke utsikt, sol og bomiljø negativt.",
            "evidence": [
              "Eiendommen er regulert til småhus og blokkbebyggelse.",
              "Området omfatter gnr. 107, bnr. 19, 653 og 993 og skal benyttes til blokkbebyggelse i inntil 4 etasjer slik det fremgår av plankartet."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Formuesverdi er ikke beregnet på salgstidspunktet. Kjøper vet ikke hva fremtidig eiendomsskatt og formuesbeskatning vil bli.",
            "evidence": [
              "Info om formuesverdi: Formuesverdien er ikke beregnet.",
              "Skatteetaten vil beregne en boligverdi basert på SSBs statistiske opplysninger om omsatte boliger. Beregningen vil skje i forbindelse med første skattemelding etter overtakelse.",
              "Ved en markedsverdi på 9 300 000 er det estimert ca. 6 410,- i året i eiendomsskatt."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R11",
            "description": "Det er ingen muligheter for tilvalg i prosjektet. Kjøper kan ikke tilpasse boligen til egne ønsker og behov.",
            "evidence": [
              "Det er ikke muligheter for tilvalg."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Terrasse ved befaring er ikke etablert med skillevegg for bod, noe som kan bety at arealet ikke er ferdigstilt som beskrevet i salgsoppgaven.",
            "evidence": [
              "17.3 m² Terrasse (ved befaring er det ikke etablert skillevegg for bod)"
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Kjøper må tegne eget TV/internett/bredbåndsabonnement. Dette er en løpende kostnad som ikke er inkludert i felleskostnader.",
            "evidence": [
              "TV/Internett/Bredbånd: Kjøper må tegne eget abonnement."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R14",
            "description": "Eiendommen er tidligere overført fra og sammenslått med andre matrikkelenheter (bl.a. Knr:3029 Gnr:107 Bnr:1386 og Bnr:111). Kompleks historikk kan innebære uavklarte rettigheter eller heftelser.",
            "evidence": [
              "02.01.2023 – Dokumentnr: 4782 – Sammenslåing. Sammenslått med denne matrikkelenhet: Knr:3029 Gnr:107 Bnr:1386",
              "Overført fra: Knr:3029 Gnr:107 Bnr:1386",
              "Tidligere: Knr:3029 Gnr:107 Bnr:111"
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R15",
            "description": "Eiendomsskatt påløper i Lørenskog kommune. Ved en markedsverdi på 9 300 000 er estimert eiendomsskatt ca. 6 410 kr per år, men endelig beløp avhenger av fastsatt formuesverdi og kommunens satser.",
            "evidence": [
              "I Lørenskog kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.",
              "Ved en markedsverdi på 9 300 000 er det estimert ca. 6 410,- i året i eiendomsskatt."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Kjøper er ansvarlig overfor sameiets kreditorer i forhold til sin sameiebrøk (jf. eierseksjonsloven § 31). Dette innebærer at kjøper kan bli holdt ansvarlig for andres mislighold.",
            "evidence": [
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d055_d055"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "felleskostnader månedlig beløp sameiet",
          "bustadoppføringslova garanti selger utbygger",
          "ferdigattest brukstillatelse overtakelse vilkår",
          "kommunale avgifter vann avløp renovasjon beløp",
          "vedtekter sameiet husordensregler",
          "selger Prosjekt Og Utvikling AS soliditet garanti",
          "radon måling krav nybygg",
          "energimerke rød nybygg TEK17 krav"
        ],
        "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Seksjonering ikke fullført (0.95):** Godt støttet av flere tekstpassasjer. Beholder høy confidence. Risikoen er reell og vesentlig.\n\n**R2 – Bolig ikke ferdigstilt (0.93):** Godt støttet. Innflyttingsdato 01.03.2026 og omtale av ferdigattest bekrefter risikoen. Beholder høy confidence. Viktig tillegg: bustadoppføringslova gjelder, men det er ikke eksplisitt bekreftet hvilke garantier som stilles – dette bør undersøkes nærmere.\n\n**R3 – Tinglyste heftelser (0.90):** Godt dokumentert med konkrete dokumentnumre og datoer. Beholder confidence.\n\n**R4 – Legalpant (0.92):** Direkte sitert fra dokumentet. Godt støttet. Beholder confidence.\n\n**R5 – Radonmåling ikke utført (0.88):** Direkte bekreftet i dokumentet. Beholder confidence.\n\n**R6 – Energimerke rød (0.85 → 0.72):** Evidensen bekrefter rød energifarge og 105.76 kWh/m². Imidlertid er 105.76 kWh/m² ikke ekstremt høyt for et nybygg, og boligen har balansert ventilasjon og moderne isolasjon (U-verdier er gode: yttervegg 0.15, tak 0.13, gulv 0.10). Rød energifarge kan skyldes høy andel el-oppvarming (86.9%) snarere enn dårlig isolasjon. Risikoen er reell men noe overdrevet – justerer ned til 0.72.\n\n**R7 – Bilder fra visningsbolig (0.90):** Direkte bekreftet. Beholder confidence.\n\n**R8 – Private stikkledninger (0.85):** Direkte bekreftet. Beholder confidence.\n\n**R9 – Regulering blokkbebyggelse (0.80 → 0.82):** Godt støttet. Området er allerede regulert og «anses ferdig utbygd», noe som faktisk reduserer risikoen for ny utbygging. Justerer marginalt opp siden reguleringsplanen er klar.\n\n**R10 – Formuesverdi ikke beregnet (0.78 → 0.70):** Støttet, men det finnes et estimat på eiendomsskatt (6 410 kr/år) i dokumentet, noe som reduserer usikkerheten noe. Justerer ned til 0.70. Dette er dessuten en normal situasjon for nybygg.\n\n**R11 – Ingen tilvalg (0.82):** Direkte bekreftet. Beholder confidence.\n\n**R12 – Terrasse uten skillevegg (0.80):** Direkte bekreftet. Beholder confidence.\n\n**R13 – TV/internett ikke inkludert (0.70 → 0.55):** Støttet, men dette er en svært vanlig og forventet situasjon for eierseksjoner. Risikoen er lav og bør nedprioriteres. Justerer ned til 0.55.\n\n**R14 – Kompleks matrikkelhistorikk (0.75 → 0.65):** Støttet av dokumentet, men sammenslåing og omnummerering er administrative prosesser som normalt ikke medfører uavklarte rettigheter. Justerer ned til 0.65.\n\n**Nye risikoer identifisert:**\n\n**R15 – Eiendomsskatt:** Dokumentet nevner eksplisitt eiendomsskatt i Lørenskog kommune med estimat på 6 410 kr/år. Dette er en konkret løpende kostnad som bør fremheves separat fra formuesverdi (R10). Confidence: 0.80.\n\n**R16 – Sameieansvar overfor kreditorer (eierseksjonsloven § 31):** Dokumentet nevner eksplisitt at sameierne er ansvarlige overfor sameiets kreditorer i forhold til sameiebrøk. Dette er en risiko som ikke var identifisert. Confidence: 0.78.\n\n**Manglende risikoer som bør undersøkes:**\n- Garantistillelse fra utbygger (bustadoppføringslova § 12) – ikke bekreftet i dokumentet\n- Felleskostnader – beløp ikke funnet i dokumentchunkene\n- Selgers soliditet/økonomi (Prosjekt Og Utvikling AS)\n- Kommunale avgifter – beløp ikke spesifisert\n- Vedtekter for sameiet – ikke gjennomgått i detalj\n"
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
    "input_tokens": 16803,
    "output_tokens": 4589,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
