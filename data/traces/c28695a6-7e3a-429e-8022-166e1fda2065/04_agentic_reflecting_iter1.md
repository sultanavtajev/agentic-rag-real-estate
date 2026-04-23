# Trace: agentic_reflecting_iter1
- **Run ID:** c28695a6-7e3a-429e-8022-166e1fda2065
- **Tidspunkt:** 2026-03-24T10:00:36.069917+00:00
- **Varighet:** 109.50s
- **Input tokens:** 23072
- **Output tokens:** 5321

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
Risiko 1: Høy fellesgjeld med flytende rente – risiko for økte felleskostnader
  Confidence: 0.95
  Evidens: Kr 203 584 pr. 02.02.2026 i andel fellesgjeld; Borettslaget har lån med flytende rente. Kostnadene til renter og avdrag kan derfor endres i henhold til renteendringer i banken.; Rente: 4.95% pa. Restsaldo: 30 535 633, Antall terminer til innfrielse: 88; Felleskostnader kr 6 006,- pr. mnd

Risiko 2: Ingen radonmåling er utført – potensiell helserisiko
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Spørsmål 21: Er det foretatt radonmåling? Nei

Risiko 3: Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern ved skjulte feil og mangler
  Confidence: 0.9
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 4: Kjente fuktproblemer og krakkelering på bad – risiko for fuktskader
  Confidence: 0.92
  Evidens: Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja.; Observerte etter innflytting bittelitt krakkelering i baderomstak. Kontaktet styret som sendte en forsikringsagent som sjekket det ut. Han var i etasjen over. Det ble konkludert med at det var dårlig maling.; Bad - Overflater Gulv | Det er påvist at høydeforskjell fra topp slukrist til gulv/synlig topp membran ved dørterskel er mindre enn 25 mm. Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.

Risiko 5: Innvendige vannledninger og vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselig svikt
  Confidence: 0.9
  Evidens: Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.; Tekniske installasjoner - Vannbåren varme | Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme.

Risiko 6: Elektrisk anlegg ikke kontrollert (el-takst) – risiko for skjulte feil og avvik fra gjeldende forskriftskrav
  Confidence: 0.88
  Evidens: Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.; Foreligger det eltilsynsrapport de siste 5 år? Nei; Det er delvis skjult og åpent elektrisk anlegg.

Risiko 7: Rotter/skadedyr påvist i borettslaget i forbindelse med rørfornying
  Confidence: 0.85
  Evidens: Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus, maur eller lignende? Ja.; I forbindelse med rørfornying. Rotter. Styret har vært på saken. Jeg har ikke sett noe.

Risiko 8: Eiendommen berøres av hensynssone H190_1 (T-banetunnel under eiendommen) – risiko for setninger og begrensninger
  Confidence: 0.82
  Evidens: Eiendommen berøres av hensynssone H190_1 - Andre sikringssoner. Sonen er knyttet til T-banetunnel som går under eiendommen.

Risiko 9: Eiendommen ligger i 'Ytre by (utviklingsområder)' og er definert som område med behov for torg/møteplass – risiko for fremtidige byggeprosjekter og endringer i omgivelsene
  Confidence: 0.78
  Evidens: Eiendommen ligger i et område definert som 'Ytre by (utviklingsområder)', noe som indikerer et område med potensial for fremtidig utvikling.; Eiendommens område er definert som et 'område med behov for torg/møteplass'. Dette kan medføre krav om opparbeidelse av offentlige plasser ved fremtidige byggeprosjekter.

Risiko 10: Forkjøpsrett og styregodkjenning kreves – risiko for forsinkelse eller bortfall av handel
  Confidence: 0.85
  Evidens: Det er forkjøpsrett og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.; 8 406 (Forhåndsvarsling forkjøpsrett)

Risiko 11: Risiko for overbeheftelse – handel kan ikke gjennomføres dersom pantefrafall ikke oppnås
  Confidence: 0.8
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.; Pantedokument DNB Bank ASA: NOK 28 000 000 (2017), NOK 13 800 000 (2024), NOK 7 531 250 OBOS-Banken (2016)

Risiko 12: Legalpanterett for borettslaget – kjøper kan bli ansvarlig for andre andelshaveres mislighold av felleskostnader
  Confidence: 0.82
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.; Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 13: Overflater/parkett har slitasjegrad utover forventet – kostnader til utbedring
  Confidence: 0.8
  Evidens: Innvendig > Overflater: Overflater har en del slitasjegrad utover det en kan forvente.; Det er noe bruksslitasje på parkettgulvene.

Risiko 14: Selger har kun eid boligen i ca. 1 år og 7 måneder – begrenset kjennskap til boligens tilstand over tid
  Confidence: 0.75
  Evidens: Når kjøpte du boligen? År 2024; Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7

Risiko 15: Energimerke ikke angitt – manglende informasjon om energiforbruk og -kostnader
  Confidence: 0.7
  Evidens: Energikarakter: Ikke angitt; Energifarge: Ikke angitt

Risiko 16: Varmesentral ikke undersøkt av takstmann – skjulte feil kan foreligge
  Confidence: 0.78
  Evidens: Konstruksjoner som ikke er undersøkt: Tekniske installasjoner > Varmesentral; Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – ikke undersøkt

Risiko 17: Eiendomsskatt i Oslo – løpende kostnad som kan øke
  Confidence: 0.7
  Evidens: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.

Dokumentkontekst:
[d069_d069 | Side [1]]

samtykke fra styret.
Selger bærer risikoen for at kjøper kan få tinglyst skjøte
uten andre heftelser enn de som det er avtalt at følger
Radonmåling
med i handelen. Gjennomføring av handelen er betinget
av det ikke er tinglyst heftelser som ikke lar seg innfri/ Selger har ikke utført radonmåling. Det er ikke krav om
slette. dette med mindre boligen er helt eller delvis utleid.
Dersom eiendommen skulle bli overbeheftet i
Diverse
salgsprosessen, det vil si at summen av fremtidige
tinglyste heftelser

---

[d069_d069 | Side [1]]
ndre forhold
Det er forkjøpsre琀琀 og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets vedtekter.
Særskilte begrensninger/klausuler: Se boligselskapets vedtekter.
Dyrehold: se vedtekter/husordensreglene 琀椀l Boligsameiet
Se grunnbokutskri昀琀 for 琀椀nglyste servitu琀琀er og he昀琀elser.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 05.02.2026 Gjennomgå琀琀 Nei
Grunnbokutskri昀琀

---

[d069_d069 | Side [1]]
l
varmekabler i gulv på bad. megler. Vi oppfordrer interessenter til å gjøre seg kjent
med disse.
Regulerings og arealplaner
Tinglyste heftelser
Eiendommen er regulert til byggeområde for boliger,
innenfor felt G, i henhold til detaljregulering S‑3905 Tinglyste heftelser og rettigheter: Følgende tinglyste
"Endret reguleringsplan med reguleringsbestemmelser heftelser følger eiendommen ved salg, og ved inngivelse
for gnr.163, bnr.80 og 81.Bogerud ‑ Rustad", vedtatt av bud vil disse være akseptert av

---

[d069_d069 | Side [1]]
lle opplysninger
Boligen selges med det inventar og utstyr som i henhold
Borettslaget har legalpanterett i andelen for krav på til gjeldende lover, forskrifter eller offentlige pålegg skal
dekning av felleskostnader og andre krav fra følge med eiendommen, jf. avhendingsloven § 3‑4.
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Fastmonterte eller spesialtilpassede installasjoner og
innredning som anses som varig tilknyttet boligen, følger
Kjøper og selger er forpliktet til å undertegne standard

---

[d069_d069 | Side [1]]
ntydning) ‑ Avdrag lån 1213.90.00925: kr 314,‑
203 584 (Andel av fellesgjeld) ‑ Renter lån 1636.86.49280: kr 224,‑
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Avdrag lån 1636.86.49280: kr 75,‑
5 303 584 (Pris inkl. fellesgjeld)
Borettslaget har lån med flytende rente. Kostnadene til
Omkostninger renter og avdrag kan derfor endres i henhold til
renteendringer i banken.
9 300 (Boligkjøperforsikring* (valgfritt))
8 406 (Forhåndsvarsling forkjøpsrett)
Eiendomsskatt
545 (Tinglysingsgebyr ‑

---

[d069_d069 | Side [1]]
eigrunn, Underjordisk
anlegg
S-3917 Vedta琀琀: 11.06.2002, Formål: Turvei/skiløype
V240103 Vedta琀琀: 24.01.2003, Formål: Bolig m.琀椀lh. anlegg
V020462 Vedta琀琀: 02.04.1962' Formål: O昀昀entlig kjørebane/veigrunn
Om tomten
Felles eiet tomt i bore琀琀slaget på 25 515,4 m². Tomten er opparbeidet med beplantning, plen, områder for lek og opphold. Asfalterte interne
veier og parkeringsarealer. Eiendommen ligger i rela琀椀vt skrånende terreng.
Tinglyste/andre forhold
Det er forkjøpsre琀琀 og styregodkjenning ved kjøp av

---

[d069_d069 | Side [1]]
åndsvarsling forkjøpsrett)
Eiendomsskatt
545 (Tinglysingsgebyr ‑ hjemmel)
545 (Tinglysningsgebyr ‑ pantedokument) I Oslo kommune er det eiendomsskatt på boliger og fast
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ eiendom som overstiger en fastsatt verdi. Informasjonen
9 496 (Omkostninger totalt (uten Boligkjøperforsikring)) over er hentet fra eiendomsskattelistene.
18 796 (Omkostninger totalt (med Boligkjøperforsikring)) http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
skatt‑og‑avgift/

---

[d069_d069 | Side [1]]
ygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av medlemsforetakene i Norsk takst og
av

---

[d069_d069 | Side [1]]
rosessen, det vil si at summen av fremtidige
tinglyste heftelser overstiger den forventede Borettslagsmodellen innebærer at borettslaget eier
salgssummen, er det en forutsetning for at handel skal eiendommen, mens andelseierne eier andeler i
kunne gjennomføres at kreditorene gir nødvendig borettslaget, som gir borett til en bestemt bolig.
pantefrafall. Dersom pantefrafall ikke oppnås vil handel Andelseierne har ikke personlig ansvar for borettslagets
ikke kunne gjennomføres. Skulle det bli tinglyst flere

---

[d069_d069 | Side [1]]
Side 45

OM EIENDOMMEN
gjennomføres forutsatt at også eventuelle fremtidige
2017/ 113121‑1/ 200 06.02.2017 PANTEDOKUMENT kreditorer aksepterer å slette sitt pant uten å få full
Beløp: NOK 28 000 000 innfrielse av det underliggende kravet.
Panthaver: DNB BANK ASA
ORG.NR: 984 851 006 Legalpant: Borettslaget har legalpant på inntil 2G som
sikkerhet for betaling av felleskostnader. Dette betyr at
2024/ 1593885‑1/ 200 20.06.2024 PANTEDOKUMENT borettslaget har prioritet over tinglyste lån når det gjelder
Beløp:

---

[d069_d069 | Side [1]]
ttslagets
ikke kunne gjennomføres. Skulle det bli tinglyst flere fellesgjeld, men de må dekke borettslagets løpende
utleggspant på eiendommen, kan handel bare utgifter. Manglende innbetaling av fellesutgiftene som
45

## Side 46

OM EIENDOMMEN
følge av andre andelshaveres mislighold, eller dersom
Lovanvendelse
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de øvrige andelseierne. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i

---

[d069_d069 | Side [1]]
ttslaget har prioritet over tinglyste lån når det gjelder
Beløp: NOK 13 800 000 betaling av felleskostnader, og kan kreve inn pengene før
Panthaver: DNB BANK ASA andre kreditorer, selv om de har lån registrert på andelen.
ORG.NR: 984 851 006
Panthaver: DNB BOLIGKREDITT AS
Vei, vann og avløp
ORG.NR: 985 621 551
ELEKTRONISK INNSENDT Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
Eiendommens rettigheter: det kommunale nettet er private,

---

[d069_d069 | Side [1]]
 definert som et "område med ORG.NR: 984 851 006
behov for torg/ møteplass". Dette kan medføre krav om
opparbeidelse av offentlige plasser ved fremtidige 2016/ 294203‑1/ 200 04.04.2016 PANTEDOKUMENT
byggeprosjekter. Beløp: NOK 7 531 250
Panthaver: OBOS‑BANKEN AS
Eiendommen berøres av hensynssone H190_1 ‑ Andre ORG.NR: 911 986 884
sikringssoner. Sonen er knyttet til T‑banetunnel som går Uomsettelig
under eiendommen. ELEKTRONISK INNSENDT
44

## Side 45

OM EIENDOMMEN
gjennomføres forutsatt at også eventuelle

---

[d069_d069 | Side [1]]
bredt servicetilbud på Bogerud, Bøler, Bryn, Tveita,
mot tap som følge av at en andelseier unnlater å betale Skullerud, Lambertseter og Oppsal.
sine felleskostnader. For krav på dekning av
felleskostnader og andre krav fra lagsforholdet har laget Tur‑ og rekreasjonsmuligheter
panterett i andelen foran alle andre heftelser. Pantekravet For den turglade ligger naturopplevelsene rett utenfor
er begrenset til en sum som svarer til to ganger døren. Vernede Østensjøvannet er et av bydelens mest
folketrygdens

---

[d069_d069 | Side [1]]
mann sin beskrivelse
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
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
23

---

[d069_d069 | Side [1]]
ygninger gjelder ikke bestemmelsene om høyde og etasjeantall når bygningene føres opp av
brannfast materiale.
§ 6. I forbindelse med byggemelding for de enkelte hus skal det sendes inn takplan som viser alle oppbygg over
tak. Planering, terrengmurer og andre ytre anlegg i tilknytning til bygningene skal tegnes inn på
situasjonskartet.
§ 7. Selger av tomt er ikke berettiget til ved privat servitutt å etablere forhold som står i strid med disse vedtekter.
§ 8. Unntak fra disse vedtekter kan hvor særlige

---

[d069_d069 | Side [1]]
r i både entré og på begge soverom,
installert i 2024. I tillegg medfølger en bod på terrassen Takstmann: Øivin Brækkan
på ca. 1 m², samt to boder i kjelleren på henholdsvis ca.
0,5 m² og 2,6 m². Type takst avholdt av takstmann: Tilstandsrapport
Det er også kort vei til kostnadsfritt fellesvaskeri. Sammendrag selgers egenerklæring: Selger har i
forbindelse med salget fylt ut egenerklæringsskjema
For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet som vedlagt salgsoppgaven. I skjemaet

---

[d069_d069 | Side [1]]
tyr og installasjoner som medfølger overtas slik de Ja.
er, uten garanti, med mindre det foreligger en gjeldende
38

## Side 39

OM EIENDOMMEN
Har du ladeanlegg/ ladeboks for elbil i dag? 2025:
Ja. ‑ Ny låsekasse inngangsdør.
Jeg disponerer en garasjeplass som kan selges i tillegg
om ønskelig. 2024:
‑ Ny oppvaskmaskin og kjøleskap.
Kjenner du til om det har vært utført arbeid på terrasse/ ‑ Enkelte nye stikkontakter, takbelysning, lysskinner og
garasje/t ak/ fasade? dimmere (Plejd). Arbeid utført av El

---

[d069_d069 | Side [1]]

53

## Side 54

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Utvendig maling i 2025. Styret har denne infoen
Arbeid utført av Vet ikke
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Se takstmann sin beskrivelse
18.1 Er innredning/utbyggingen godkjent hos

---

[d069_d069 | Side [1]]
ir trygghet og profesjonell juridisk hjelp dersom det rom og det som er godkjent av myndighetene. Alle
oppdages uventede feil eller mangler ved boligen de interessenter anbefales derfor å undersøke eiendommen
neste fem årene. Les mer om Boligkjøperforsikring i nøye, gjerne sammen med fagperson, før bud gis.
vedlagte materiell eller på https:/ / Dersom kjøper velger å kjøpe uten å ha sett
www.soderbergpartners.no/ eiendom/ boligkjoper/ eiendommen, kan det ikke etter overtakelse reklameres
på forhold som

---

[d069_d069 | Side [1]]
ltak Det er ikke 昀氀y琀琀et på gjenstander under befaring og det er ikke
TG3: Store eller alvorlige avvik kontrollert for skjulte feil og mangler eller u琀昀ørt inngrep i
konstruksjonene.
TG IU: Konstruksjoner som ikke er undersøkt
Takstmannen har ikke innhentet dokumentasjon fra o昀昀entlige
myndigheter, 琀椀lsendt dokumentasjon er brukt i
琀椀lstandsvurderingen.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER

---

[d069_d069 | Side [1]]
ad (TG) 2 og 3, se punktet som vedlagt salgsoppgaven. I skjemaet fremkommer
Byggemåte i salgsoppgaven. følgende informasjon:
Interessenter oppfordres spesielt til å undersøke disse Kjenner du til om det er/ har vært feil tilknyttet
forholdene som er gitt TG2 og 3 nærmere, da gitte våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller
tilstandsgrader her er et konkret uttrykk for alder/ slitasje/ soppskader?
ødeleggelser/ konsekvenser som innebærer kostnader til Ja.
utbedring. Kjøper må innta disse

---

[d069_d069 | Side [1]]
ngssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare

---

[d069_d069 | Side [1]]
krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter

---

[d069_d069 | Side [1]]
jente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn.

---

[d069_d069 | Side [1]]
ENDOMMEN
bør beskyttes mot fuktpåkjenning, for eksempel ved feil eller mangler som ikke er avdekket.
bruk av dusjforheng eller glassvegg, for å redusere
risikoen for fuktskader over tid. Dersom det oppstår Tilstandsrapporten beskriver byggverkets tekniske
skader på døren, må nødvendige utbedringer tilstand. Det er ikke foretatt kontroll av de elektriske
gjennomføres for å hindre videre skadeutvikling. installasjonene (el‑takst) selv om bygningssakkyndig kan
ha knyttet noen kommentarer til elanlegget ut i

---

[d069_d069 | Side [1]]
ngsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks,

---

[d069_d069 | Side [1]]
porten.
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Tekniske installasjoner > Varmesentral Gå til side
Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner Gå til side
våtrom
AVVIK SOM KAN KREVE TILTAK
Innvendig > Over昀氀ater Gå til side
Over昀氀ater har en del slitasjegrad utover det en kan
forvente.
Det er noe bruksslitasje på parke琀琀gulvene.
Tekniske installasjoner > Vannledninger Gå til side
Mer enn halvparten av forventet bruks琀椀d er passert
på innvendige

---

[d069_d069 | Side [1]]
ssakkyndiges kompetanse og risikoen for skade.
mellom P-areal og S-areal.
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom

---

[d069_d069 | Side [1]]
r (blant annet hammerelektrode • Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 og
og pigger). 2023) og veiledningen 琀椀l disse.
• Utvidet fuktsøk (hulltaking): Boring av hull for inspeksjon og fuktmåling i
risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede
kjellervegger og eventuelt i oppforede kjellergulv.
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen

---

[d069_d069 | Side [1]]
 har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
utbedre rom eller bygningsdeler er et sjablongmessig anslag basert på Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og

---

[d069_d069 | Side [1]]
dre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer

---

[d069_d069 | Side [1]]
sen av manglende
Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende tiltak er økt slitasje og redusert levetid på overflatene.
kontrollinstanser med avvik som ikke er utbedret eller
kontrollen er over 5 år? ‑ Tekniske installasjoner ‑ Vannledninger | Mer enn
‑ Nei halvparten av forventet brukstid er passert på innvendige
6. Forekommer det ofte at sikringene løses ut? vannledninger. Det er ikke behov for utbedringstiltak
‑ Nei siden anlegget fungerer i dag, men ut ifra alder kan
7. Har det vært

---

[d069_d069 | Side [1]]
rollert. Det foretas ikke funksjonsprøving av
bygningsdeler, som isolasjon, piper, ven琀椀lasjon, el. anlegg, osv.
• Det gis ingen vurdering av boligens 琀椀lbehør, hvite- og brunevarer og
annet inventar. De琀琀e gjelder også integrert 琀椀lbehør.
PRESISERINGER
• Avvik vurderes ut fra tekniske forskri昀琀er på godkjennings琀椀dspunktet for • Inspisering av y琀琀ertak er basert på det som er synlig, normalt på innsiden
bygget. Noen bygningsdeler vurderes e琀琀er gjeldende teknisk forskri昀琀 på fra lo昀琀et og utvendig fra

---

[d069_d069 | Side [1]]
n anlegget fungerer i dag, men ut ifra alder kan
7. Har det vært brann, branntilløp eller varmgang (for skader plutselig oppstå på eldre anlegg.
eksempel termiske skader på deksler, kontaktpunkter
eller lignende) i boligens elektriske anlegg? ‑ Tekniske installasjoner ‑ Vannbåren varme | Mer enn
‑ Nei halvparten av forventet brukstid er passert på anlegg for
8. Er det tegn til at det har vært termiske skader (tegn på vannbåren varme. Det er ikke behov for utbedringstiltak
varmgang) på kabler, brytere,

---

[d069_d069 | Side [1]]
ngssakkyndig kan
ha knyttet noen kommentarer til elanlegget ut i fra helt
‑ Bad ‑ Overflater Gulv | Det er påvist at høydeforskjell fra enkle vurderingskriterier. Siden elanlegget ikke er
topp slukrist til gulv/ synlig topp membran ved dørterskel kontrollert er det sannsynlig at det siden kan avdekkes
er mindre enn 25 mm. Det er påvist avvik i fallforhold til avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
sluk i forhold til krav i forskrift på byggetidspunktet. Det Videre må kjøper være

---

[d069_d069 | Side [1]]
TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når

---

[d069_d069 | Side [1]]
som innebærer kostnader til Ja.
utbedring. Kjøper må innta disse vurderingene og Observerte etter innflytting bittelitt krakkelering i
medfølgende utbedringskostnader i sin kjøpsbeslutning, baderomstak. Kontaktet styret som sendte en
jf. avhl. § 3‑10. Det samme gjelder eventuelt andre forsikringsagent som sjekket det ut. Han var i etasjen
opplysninger om kjente risikofaktorer, som for eksempel over. Det ble konkludert med at det var dårlig maling.
ufaglært arbeid, begrenset kontroll av det elektriske Taket

---

[d069_d069 | Side [1]]
vik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil

---

[d069_d069 | Side [1]]
g • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og

---

[d069_d069 | Side [1]]
itering tilbyr borettslaget en borettslaget. I motsatt fall skal godkjenning regnes som
støtteordning hvor de dekker utgifter til utskifting av sluk gitt.
med inntil kr 8 500 (inkl. mva.), forutsatt at arbeidet
følger byggebransjens våtromsnorm og at Regnskap/ budsjett/ kostnadsøkninger: På
dokumentasjon fremlegges for styret. generalforsamlingen 23. april 2025 ble årsregnskapet for
2024 godkjent.
Av fellesfasiliteter finnes det vaskerier, hvor brukstidene
nylig ble utvidet etter vedtak på

---

[d069_d069 | Side [1]]
6.49280 75
Renter lån 1213.90.00925 605
Avdrag lån 1213.90.00925 314
Renter lån 1636.86.49280 224
Borettslaget er sikret mot tap av felleskostnader. Tilbyder er i Klare Finans AS og vilkårene er åpent tilgjengelig på deres hjemmesider.
Borettslaget er, etter gjeldende bestemmelser fastsatt av finansieringsselskapet, sikret mot tap som følge av at en andelseier unnlater å
betale sine felleskostnader. Avtalen om sikring er gyldig til avtalen sies opp av en av partene. Oppsigelsesfrist er 1. desember

---

[d069_d069 | Side [1]]
 Side 116

Boligopplysninger:
Saksbehandler: Robot Hårfagre Dato utkjørt: 02.02.26 Side 1 av 3
Fagergåsa Borettslag Vår ref.: 108/19 Fødselsdato eier: 15.08.1960
Paal Bergs vei 5 Type: Borettslag tilknyttet
0692 OSLO Eiere: Ann Karin Andersen Jensen
Organisasjonsnr: 953 948 400 Andelsnr: 204
1: Felleskostnader
Tot. innev. måned: 6 006
Boligselskap er tilknyttet sikringsordning
Felleskostnader: Felleskostnader drift 4 788
Avdrag lån 1636.86.49280 75
Renter lån 1213.90.00925 605
Avdrag lån 1213.90.00925

---

[d069_d069 | Side [1]]
 andre ledd,
3. salg eller kjøp av fast eiendom,
4. å ta opp lån som skal sikres med pant med prioritet foran
innskuddene,
5. andre rettslige disposisjoner over fast eiendom som går ut over
vanlig forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører med
seg økonomisk ansvar eller utlegg for laget på mer enn 5% av de årlige
felleskostnadene.
7. andre større endringer i finansielle poster som overstiger kr. 500 000
utover vedtatt budsjett. Unntak er nedbetaling av borettslagets

---

[d069_d069 | Side [1]]
jørt: 02.02.26 Side 2 av 3
Fagergåsa Borettslag Vår ref.: 108/19 Fødselsdato eier: 15.08.1960
Paal Bergs vei 5 Type: Borettslag tilknyttet
0692 OSLO Eiere: Ann Karin Andersen Jensen
Organisasjonsnr: 953 948 400
6: Ligning - 2025
Gjeld: 203 584 Andre inntekter: 498
Annen formue: 17 856 Utgifter: 10 648
Usbl har ikke opplysninger om formuesverdi av boligen. For opplysninger om dette se www.skatteetaten.no
7: Pålydende
Pålydende: 100 Opprinnelig innskudd: 13 400
Andelsnr: 204 Partialobligasjonsnr: 204
8:

---

[d069_d069 | Side [1]]
 om det er innredet/ bruksendret/ bygget ut i
kjeller eller loft eller andre deler av boligen?
Ja. Vedlikeholdshistorikk borettslaget:
Se takstmannens beskrivelse. 2024:
‑ Felles avløpsrør i bygget renovert innvendig med
Kjenner du til om det er/ har vært sopp/ råteskader/ strømpe.
insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal
eller i andre boliger) som rotter, mus, maur eller lignende? 2021:
Ja. ‑ Vinduer og balkongdører byttet.
I forbindelse med rørfornying. Rotter. Styret har vært

---

[d069_d069 | Side [1]]
r tid gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr
100.
7-2 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
laget panterett i andelen foran alle andre heftelser. Pantekravet er begrenset
 
189

## Side 190

til en sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet da
tvangsdekning besluttes gjennomført.
8 Styret og dets vedtak
8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og 2 til

---

[d069_d069 | Side [1]]
resentasjon i Bogerud varmesentral.
3) Medlem og varamedlem skal være andelseiere eller andelseiers
hustandsmedlem i Fagergåsa borettslag.
 
193

## Side 194

(4) Styret i Bogerud varmesentral har rapporteringsplikt til styret i Fagergåsa
borettslag og årsrapport legges frem for generalforsamlingen i Fagergåsa
borettslag.
(5) Representant fra styret i Fagergåsa borettslag har møterett i Bogerud
varmesentral.
 
194

## Side 195

BORETTSLAGETS ANSVAR
- Tak Rør felles
- Bjelkelag oppvarming
- Bærende

---

[d069_d069 | Side [1]]
tyret. Ved større
oppussingsarbeider, som totalrenovering av bad eller Vedlagt prospektet.
endringer på elektrisk anlegg, må styret informeres
skriftlig på forhånd. Vesentlige inngrep i bærende
Energimerke
konstruksjoner krever styrets forhåndsgodkjenning.
Kjøkkenvifter skal være av kullfiltertype og kan ikke Energikarakter: Ikke angitt
kobles direkte til ventilasjonsanlegget.
Energifarge: Ikke angitt
Borettslagets forsikringsselskap: If Skadeforsikring NUF
Info energiklasse
Polisenummer fellesforsikring:

---

[d069_d069 | Side [1]]
edninger, kanaler og andre felles installasjoner som går
gjennom boligen, skal borettslaget holde ved like. Borettslaget har rett til å
føre nye slike installasjoner gjennom boligen dersom det ikke er til vesentlig
ulempe for andelseieren.
 
188

## Side 189

(3) Borettslagets vedlikeholdsplikt omfatter også utvendig vedlikehold
(maling), utskifting av vinduer, herunder nødvendig utskifting av termoruter, og
reparasjon eller utskifting av tak, bjelkelag, bærende veggkonstruksjoner,
sluk, samt rør eller

---

[d069_d069 | Side [1]]
 http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
5 313 080 (Totalpris inkl. omkostninger (uten
Kommunale avgifter
Boligkjøperforsikring))
5 322 380 (Totalpris inkl. omkostninger (med Informasjon: Kommunale avgifter faktureres borettslaget
Boligkjøperforsikring)) og er dekket gjennom de månedlige felleskostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 203 584 pr.

---

[d069_d069 | Side [1]]
ng av hund.
ved salg.
Det er gode sykkelforbindelser mot sentrum via
oppgraderte traseer langs Østensjøveien og Alnaelva,
Formue:
noe som gjør det raskt og trygt å komme seg inn til byen.
Andel fellesformue: Kr 17 856 pr. 31.12.2024
Anleggene på Haraløkka, Rustadfeltet og ved
34

## Side 35

OM EIENDOMMEN
Skullerudstua gir svært gode treningsmuligheter. I tillegg
er det kort vei til lekeplasser, treningssenter og Bøler bad Borettslaget disponerer egne parkeringsplasser ved
med varmtvannsbasseng. Rustad

---

[d069_d069 | Side [1]]
tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
Beskrivelse I forbindelse med rørfornying. Rotter. Styret har vært på saken. Jeg har ikke sett noe.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet

---

[d069_d069 | Side [1]]

utover vedtatt budsjett. Unntak er nedbetaling av borettslagets gjeld.
8-4 Representasjon og fullmakt
To styremedlemmer i fellesskap representerer laget utad og tegner dets navn.
9 Generalforsamlingen
9-1 Myndighet
Den øverste myndighet i borettslaget utøves av generalforsamlingen.
9-2 Tidspunkt for generalforsamling
(1) Ordinær generalforsamling skal holdes hvert år innen utgangen av juni.
(2) Ekstraordinær generalforsamling holdes når styret finner det nødvendig,
eller når revisor eller minst to

---

[d069_d069 | Side [1]]
v disse.
(6) Styret har til enhver tid behov for å vite hvem som bor i borettslaget.
Andelseiere som har fått samtykke til bruksoverlating, plikter å melde fra om
ny bostedsadresse og kontaktopplysninger til styret.
5 Vedlikehold
5-1 Andelseiernes vedlikeholdsplikt
(1) Den enkelte andelseier skal holde boligen, og andre rom og annet areal
som hører boligen til, i forsvarlig stand og vedlikeholde slikt som vinduer, rør,
sikringsskap fra og med første hovedsikring/inntakssikring, ledninger med
 
187

##

---

[d069_d069 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 203 584 pr. 02.02.2026
Lånebetingelser fellesgjeld: Selskapets totale lån og
vilkår:
Estimert totalpris ink. omk
Kr 5 322 380 Bank: DNB Boligkreditt AS v/ DNB Bank ASA
Lånenummer: 12139000925
Type: Annuitetslån, 4 terminer per år.
Felleskostnader
Type Rente: Flytende rente
Felleskostnader kr 6 006,‑ pr. mnd Rente: 4.95% pa.
Restsaldo: 30 535 633
33

## Side 34

OM EIENDOMMEN
Antall terminer till innfrielse: 88
Formuesverdi
Første avdrag: 30.12.2022 (

---

[d069_d069 | Side [1]]
område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er gjeldende:
S-866 Vedta琀琀: 14.10.1960, Formål: Friområde/park, O昀昀entlig kjørebane/veigrunn
37465 Vedta琀琀: 06.07.1965, Formål: Friområde/park
33161 Vedta琀琀: 25.04.1961, Formål: Bolig m.琀椀lh. anlegg, Bygningens plassering i beb.plan, Garasje i boligområde
S-3905 Vedta琀琀: 11.06.2002, Formål: Bolig m.琀椀lh. anlegg, Inn-/utkjøring, Måle- og avstandslinje, O昀昀entlig kjørebane/veigrunn, Underjordisk
anlegg
S-3917 Vedta琀琀: 11.06.2002, Formål:

---

[d069_d069 | Side [1]]
Kort vei 琀椀l o昀昀entlige tjenester, skoler, barnehager, o昀昀entlig kommunikasjon,
kjøpesentra og bu琀椀kker nær ved. Flo琀琀e rekreasjonsområder i marka.
Adkomstvei
Eiendommen har adkomst via o昀昀entlig veg eller gate.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er

---

[d069_d069 | Side [1]]
0-81.
§ 1. Avgrensning
Det regulerte området er vist på plankart merket ØIP- 2001-11 og datert 29.05.01.
Feltavgrensning for felt G oppheves som vist i gjeldende regulering S-866 og vedtatt bebyggelsesplan sak
331/61. Ny feltavgrensning for felt G er vist på reguleringskartet.
§ 2. Formål
Området reguleres til:
• Byggeområde: boliger
• Friområde
• Offentlig trafikkområde: vei
§ 3. Utnyttelse
Innenfor felt G kan det oppføres 8 lavblokker, på plankartet merket fra 1 - 8, som kan bebygges med

---

[d069_d069 | Side [1]]
terende kollektivknutepunkt Naturområde
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
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre

---

[d069_d069 | Side [1]]
å ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 152509/86526041
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
108

## Side 109

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn,

---

[d069_d069 | Side [1]]
r på terreng ved parkeringshus P3.
§ 9. Friområde
Innenfor viste byggegrenser kan parkeringshus P2 oppføres under terreng, som vist på snitt tilhørende
plankartet. Reguleringsformål friområde skal gjelde over terreng.
§ 10. Offentlig trafikkområde: vei
Offentlig trafikkområde vei opprettholdes.
§ 11. Utomhusplan
Sammen med søknad om tillatelse etter plan- og bygningslovens §93 skal det sendes inn plan for den
ubebygde del av planområdet, inkludert takflate på parkeringskjeller. Planen skal redegjøre for

---

[d069_d069 | Side [1]]
ggelse, eksisterende
Turvei Spredt boligbebyggelse, fremtidig
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende
T-banestasjon (ikke juridisk) Spredt fritidsbebyggelse, fremtidig
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde
Fremtidig

---

[d069_d069 | Side [1]]
1.2003 - felt F Paal Bergs vei 31 – 107, Spoven borettslag, gnr. 163,
bnr. 82
Ad regulering m.v. av deler av Bogerud og Rustad i Oslo.
§ 1. Det regulerte område er begrenset med rød strek. Ytre Ringvei, vei 3200 (Hellerudveiens forlengelse) skal
være fasadefri, det vil si at private innkjørsler fra veien ikke er tillatt uten etter tillatelse fra byplanrådet. De
forskjellige byggefelter er betegnet med bokstaver, og på egen liste er det for hvert felt angitt hva slags
bebyggelse som er tillatt i feltet, så

---

[d069_d069 | Side [1]]
 anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende
Sporveg, eksisterende Grønnstruktur, fremtidig
Sporveg, fremtidig Forsvaret
Jernbane (tunnel), fremtidig LNF-areal, eksisterende
Jernbane (tunnel), eksisterende LNF-areal, fremtidig
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende
Turvei Spredt boligbebyggelse, fremtidig
Ny

---

[d069_d069 | Side [1]]
vedtatt 14.10.1960. For denne eiendommen gjelder PRIORITET ETTER OBLIGASJON(ER) TIL HUSBANKEN
den nyere planen S‑3905 foran S‑866. OG / ELLER ANDRE BANKER OG
KREDITINSTITUSJONER.
Eiendommen omfattes av Kommuneplan 2015, vedtatt 1988/ 16674‑1/ 105 08.03.1988 ** NYE VILKÅR
23.09.2015. I kommuneplanen er arealbruken avsatt til
bebyggelse og anlegg (nåværende). Eiendommen ligger i 1986/ 82257‑2/ 105 15.12.1986 BEST. OM ADKOMSTRETT
et område definert som "Ytre by (utviklingsområder)", noe Rett for kommunen til

---

[d069_d069 | Side [1]]
ert som "Ytre by (utviklingsområder)", noe Rett for kommunen til å anlegge og vedlikeholde
som indikerer et område med potensial for fremtidig ledninger m.m.
utvikling.
2011/ 129211‑1/ 200 16.02.2011 PANTEDOKUMENT VED
Eiendommen omfattes videre av kommunedelplan BYTTE AV BANK
KDP‑17 "Kommunedelplan for torg og møteplasser", Beløp: NOK 19 042 460
vedtatt 22.04.2009. Dette er en tematisk plan hvor Panthaver: DNB BANK ASA
eiendommens område er definert som et "område med ORG.NR: 984 851 006
behov for torg/

---

[d069_d069 | Side [1]]
husplan tillates ikke fjernet uten
gjennom revidert utomhusplan. Utomhusplanen skal være godkjent før igangsettingstillatelse gis. Arealet
skal være ferdig opparbeidet før brukstillatelse gis.
§ 12. Rekkefølgebestemmelse
Før det gis brukstillatelse for nye tiltak etter denne plan, skal 58 parkeringsplasser til disposisjon for gnr 163
bnr 81 være opparbeidet.
S-3905.doc Side 3 av 3
112

## Side 113

S-866
ReguleringsogbebyggelsesplanmedvedtekterforBogerudogRustadm.v.
Vedtaksdato: 14.10.1960
Vedtattav:

---

[d069_d069 | Side [1]]
 en samlet
bebyggelsesplan for hele feltet. I samsvar hermed kan byplanrådet godkjenne bebyggelsens plassering,
høyde og utforming. Byplanrådet kan foreta mindre vesentlige endringer i bebyggelsesplanen og i denne
vedtekt innenfor rammen av bygningsloven og de alminnelige vedtekter for Oslo.
§ 2. Boliggrender.
1. Bygningene skal innredes til beboelse. Dessuten skal det anordnes vaskeri, garasjer, klesstativer og
søppelkasser innen hvert felt. Det skal avsettes plass til en garasje pr. leilighet i småhus

---

[d069_d069 | Side [1]]
pebank,
tørkestativer, søppelkasser, lekeplasser, beplantninger, planeringer m.v. Naturlig terreng og vegetasjon
skal bevares mest mulig.
3. Gjerders utførelse, høyde og farge skal godkjennes av byplanrådet. 2. For regulert rekkehusbebyggelse
kan byplanrådet forby gjerder innenfor det areal som hører til vedkommende rekkehus. 3. Regulert
blokkbebyggelse kan bare inngjerdes med byplanrådets samtykke.
§ 3. Forretningsstrøk.
1. I bygningene kan innredes butikker, lager, mindre verksteder, kontorer og

---

[d069_d069 | Side [1]]
fremstår med et godt helhetlig preg.
Parkeringshusene skal danne terrasser i landskapet og skal ved bruk av blant annet jordvoller,
forstøtningsmurer og beplantning tilpasses til eksisterende terreng og danne en landskapsmessig basis for
hus 9,10 og 11.
Utearealer
Arealet over P2 og P3 (parkeringshus under terreng) skal opparbeides parkmessig som leke- og
oppholdsareal for beboerne.
Eksisterende vegetasjon i planområdet skal i størst mulig grad bevares.
S-3905.doc Side 2 av 3
111

## Side 112

S-3905
Alt

---

[d069_d069 | Side [1]]
ming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 - Elveflom
H390 - Deponi
109

## Side 110

S-3905
Endret reguleringsplan med reguleringsbestemmelser for gnr.163, bnr.80 og 81.Bogerud
-Rustad
Vedtaksdato: 11.06.2002
Vedtattav: Bystyret,egengodkjenning
Vedtaksdokumenter: 200004421
Lovverk: PBL1985
Høydereferanse: Oslolokal
Merknader:
Knytning(er)motandreplaner:

---

[d069_d069 | Side [1]]
 høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 02.02.2026 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se

---

[d069_d069 | Side [1]]
ing av avfall eventuelt for klestørk og andre lignende anlegg
må plasseres etter bygningsrådets anvisning.
3. I forbindelse med forretningsbebyggelsen skal det avsettes plass til parkering etter nærmere anvisninger
fra byplanrådet.
§ 4. Parker og friarealer.
Parkanlegg og beplantninger innen de forskjellige felter skal sammen med de offentlige friarealer inngå i en
felles parkplan for hele området.
§ 5. Offentlig bebyggelse.
For offentlige bygninger gjelder ikke bestemmelsene om høyde og etasjeantall når

---

[d069_d069 | Side [1]]
 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 152509/ 86526041 Deres ref.:
Høydereferanser Adresse: Paal Bergs vei 5
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 163/81
106

## Side 107

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
107

## Side 108

0009366
0078366
0048366
6639000
6638700
6638400
602700 603000 603300
602700 603000

---

[d069_d069 | Side [1]]
else avtales mellom kjøper og salgsoppgaven er basert på selgers informasjon,
selger. fagkyndig vurdering, samt opplysninger fra offentlige
registre som kommunen og Kartverket. Det er viktig at
kjøper setter seg grundig inn i alle salgsdokumentene,
Forsikring
herunder salgsoppgave, tilstandsrapport og selgers
Boligselgerforsikring: Selger har ikke tegnet egenerklæring. Kjøper anses for å være kjent med
boligselgerforsikring. forhold som er tydelig beskrevet i salgsdokumentene,
slike forhold kan ikke senere

---

[d069_d069 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d069_d069 | Side [1]]
er du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AKAJ 3
34006220
:ecnerefer
tnemucoD
54

## Side 55

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for

---

[d069_d069 | Side [1]]
t salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2024
Hvor lenge har du eid boligen?
Antall år 1
Antall måneder 7
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
Initialer selger: AKAJ 1
34006220
:ecnerefer
tnemucoD
52

## Side 53

1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker,

---

[d069_d069 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det

---

[d069_d069 | Side [1]]
dommen, kan det ikke etter overtakelse reklameres
på forhold som burde ha vært oppdaget ved en ordinær
gjennomgang.
46

## Side 47

OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette

---

[d069_d069 | Side [1]]
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

[d069_d069 | Side [1]]
 eldre elektroinstallasjoner forsøk å innhente samsvarserklæring om mulig, sjekk i Boligmappa.no om samsvarserklæringer 昀椀nnes der.
5. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med avvik som
ikke er utbedret eller kontrollen er over 5 år?
Nei
6. Forekommer det o昀琀e at sikringene løses ut?
Nei
7. Har det vært brann, brann琀椀lløp eller varmgang (for eksempel termiske skader på deksler, kontaktpunkter eller lignende) i

---

[d069_d069 | Side [1]]
ntralfyr, ventilasjon)?
Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
Beskrivelse Jeg disponerer en garasjeplass som kan selges i tillegg om ønskelig.
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: AKAJ 2
34006220
:ecnerefer
tnemucoD
53

## Side 54

16 Kjenner du til om det har vært utført arbeid

---

[d069_d069 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d069_d069 | Side [1]]
selgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom

---

[d069_d069 | Side [1]]
ing.
ufaglært arbeid, begrenset kontroll av det elektriske Taket er pusset og malt med våtromssparkel og Lady
anlegget og opplysninger fra selgers maling beregnet på tak i bad i 2026.
egenerklæringsskjema.
Kjenner du til om det er/ har vært utført arbeid på
Hvitevarer: Integrerte hvitevarer medfølger. el‑anlegget eller andre installasjoner (f.eks. oljetank,
sentralfyr, ventilasjon)?
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Ja.
standardliste "Oversikt over løsøre og tilbehør", som Faglært

---

[d069_d069 | Side [1]]
elig beskrevet i salgsdokumentene,
slike forhold kan ikke senere gjøres gjeldende som en
Boligkjøperforsikring: Kjøper har anledning til å tegne mangel ved boligen. Dette gjelder uavhengig av om
boligkjøperforsikring. Vedlagt i salgsoppgaven følger dokumentene er lest.
informasjon om Boligkjøperforsikring fra Söderberg &
Partners. Boligkjøperforsikring er en rettshjelpsforsikring Det kan være forskjell mellom boligens faktiske bruk av
som gir trygghet og profesjonell juridisk hjelp dersom det rom og det

---

[d069_d069 | Side [1]]
og søk videre veiledning eller få en fullstendig kontroll u琀昀ørt av registrert
elektrovirksomhet.
Sikringsskap er plassert i felles oppgang. Sikringsskap har automatsikringer med jordfeilsbryter Det er delvis skjult og åpent elektrisk anlegg. Waterguard
montert. Por琀琀elefon ved inngangsdør.
1. Foreligger det el琀椀lsynsrapport de siste 5 år, og det er ikke foreta琀琀 arbeid på anlegget e琀琀er denne, utenom re琀紀ng av eventuelle avvik i
el琀椀lsynsrapport (dvs en el-琀椀lsynsrapport uten avvik)?
Nei
Spørsmål 琀椀l

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Høy fellesgjeld med flytende rente – risiko for økte felleskostnader",
      "evidence": [
        "Kr 203 584 pr. 02.02.2026 i andel fellesgjeld",
        "Borettslaget har lån med flytende rente. Kostnadene til renter og avdrag kan derfor endres i henhold til renteendringer i banken.",
        "Rente: 4.95% pa. Restsaldo: 30 535 633, Antall terminer til innfrielse: 88",
        "Felleskostnader kr 6 006,- pr. mnd",
        "Type: Annuitetslån, 4 terminer per år. Bank: DNB Boligkreditt AS v/ DNB Bank ASA"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Ingen radonmåling er utført – potensiell helserisiko",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Spørsmål 21: Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R03",
      "description": "Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern ved skjulte feil og mangler",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
        "Kjøper har anledning til å tegne boligkjøperforsikring som rettshjelpsforsikring"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R04",
      "description": "Kjente fuktproblemer og krakkelering på bad – risiko for fuktskader",
      "evidence": [
        "Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja.",
        "Observerte etter innflytting bittelitt krakkelering i baderomstak. Kontaktet styret som sendte en forsikringsagent som sjekket det ut. Han var i etasjen over. Det ble konkludert med at det var dårlig maling.",
        "Bad - Overflater Gulv | Det er påvist at høydeforskjell fra topp slukrist til gulv/synlig topp membran ved dørterskel er mindre enn 25 mm.",
        "Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.",
        "Borettslaget tilbyr støtteordning for utskifting av sluk med inntil kr 8 500 (inkl. mva.)"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R05",
      "description": "Innvendige vannledninger og vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselig svikt",
      "evidence": [
        "Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.",
        "Tekniske installasjoner - Vannbåren varme | Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme.",
        "Felles avløpsrør i bygget renovert innvendig med strømpe i 2024 (vedlikeholdshistorikk borettslaget)"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R06",
      "description": "Elektrisk anlegg ikke kontrollert (el-takst) – risiko for skjulte feil og avvik fra gjeldende forskriftskrav",
      "evidence": [
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra enkle vurderingskriterier.",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
        "Foreligger det eltilsynsrapport de siste 5 år? Nei",
        "Det er delvis skjult og åpent elektrisk anlegg."
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R07",
      "description": "Rotter/skadedyr påvist i borettslaget i forbindelse med rørfornying",
      "evidence": [
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus, maur eller lignende? Ja.",
        "I forbindelse med rørfornying. Rotter. Styret har vært på saken. Jeg har ikke sett noe.",
        "Felles avløpsrør i bygget renovert innvendig med strømpe i 2024 – tiltak er gjennomført"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R08",
      "description": "Eiendommen berøres av hensynssone H190_1 (T-banetunnel under eiendommen) – risiko for setninger og begrensninger",
      "evidence": [
        "Eiendommen berøres av hensynssone H190_1 - Andre sikringssoner. Sonen er knyttet til T-banetunnel som går under eiendommen.",
        "H190 - Andre sikringssoner er listet i tegnforklaringen for kommuneplanen"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.84
    },
    {
      "risk_id": "R09",
      "description": "Eiendommen ligger i 'Ytre by (utviklingsområder)' og er definert som område med behov for torg/møteplass – risiko for fremtidige byggeprosjekter og endringer i omgivelsene",
      "evidence": [
        "Eiendommen ligger i et område definert som 'Ytre by (utviklingsområder)', noe som indikerer et område med potensial for fremtidig utvikling.",
        "Eiendommens område er definert som et 'område med behov for torg/møteplass'. Dette kan medføre krav om opparbeidelse av offentlige plasser ved fremtidige byggeprosjekter.",
        "Eiendommen omfattes av kommunedelplan KDP-17 'Kommunedelplan for torg og møteplasser', vedtatt 22.04.2009."
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R10",
      "description": "Forkjøpsrett og styregodkjenning kreves – risiko for forsinkelse eller bortfall av handel",
      "evidence": [
        "Det er forkjøpsrett og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.",
        "8 406 (Forhåndsvarsling forkjøpsrett) – kostnad i omkostningsoversikten"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R11",
      "description": "Risiko for overbeheftelse – handel kan ikke gjennomføres dersom pantefrafall ikke oppnås",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
        "Pantedokument DNB Bank ASA: NOK 28 000 000 (2017), NOK 13 800 000 (2024)",
        "NOK 7 531 250 OBOS-Banken (2016)",
        "Pantedokument ved bytte av bank: NOK 19 042 460 (2011) – eldre heftelse"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Legalpanterett for borettslaget – kjøper kan bli ansvarlig for andre andelshaveres mislighold av felleskostnader",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
        "Borettslaget er sikret mot tap av felleskostnader via Klare Finans AS – noe som reduserer risikoen noe"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Overflater/parkett har slitasjegrad utover forventet – kostnader til utbedring",
      "evidence": [
        "Innvendig > Overflater: Overflater har en del slitasjegrad utover det en kan forvente.",
        "Det er noe bruksslitasje på parkettgulvene."
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Selger har kun eid boligen i ca. 1 år og 7 måneder – begrenset kjennskap til boligens tilstand over tid",
      "evidence": [
        "Når kjøpte du boligen? År 2024",
        "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7",
        "Har du bodd i boligen siste 12 måneder? Ja – selger har bodd der, noe som gir noe kjennskap"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R15",
      "description": "Energimerke ikke angitt – manglende informasjon om energiforbruk og -kostnader",
      "evidence": [
        "Energikarakter: Ikke angitt",
        "Energifarge: Ikke angitt"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R16",
      "description": "Varmesentral ikke undersøkt av takstmann – skjulte feil kan foreligge",
      "evidence": [
        "Konstruksjoner som ikke er undersøkt: Tekniske installasjoner > Varmesentral",
        "Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – ikke undersøkt",
        "Bogerud varmesentral er nevnt i vedtektene som en separat enhet med eget styre og rapporteringsplikt til Fagergåsa borettslag"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R17",
      "description": "Eiendomsskatt i Oslo – løpende kostnad som kan øke",
      "evidence": [
        "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.",
        "Informasjonen er hentet fra eiendomsskattelistene – konkret beløp er ikke oppgitt i dokumentet"
      ],
      "source_documents": [
        "d069_d069"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    }
  ],
  "re_retrieval_queries": [
    "Hva er konkret eiendomsskattebeløp for denne boligen eller andelen?",
    "Er det vedtak eller forslag om økte felleskostnader eller økt fellesgjeld i borettslaget?",
    "Hva er tilstanden på tilliggende konstruksjoner til badet – er det fuktskader i vegger?",
    "Er det skjeggkre påvist i borettslaget?",
    "Hva er borettslagets totale økonomi – regnskap og budsjett for 2024/2025?",
    "Er det kjente mangler ved varmesentralen i Bogerud varmesentral?",
    "Hva er alder på bygget og hvilke byggeår gjelder for de tekniske installasjonene?",
    "Er det utført hulltaking eller fuktmåling i tilstøtende vegger til bad?"
  ],
  "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Fellesgjeld/flytende rente:** Meget godt dokumentert. Konkrete tall på restsaldo (30,5 MNOK), rente (4,95%), andel fellesgjeld (203 584 kr) og felleskostnader (6 006 kr/mnd) er alle bekreftet. Confidence justeres opp til 0,97.\n\n**R02 – Radonmåling:** Klart bekreftet i både egenerklæring (spørsmål 21) og salgsoppgavetekst. Confidence justeres marginalt opp til 0,92 da dette er et faktum, ikke en vurdering.\n\n**R03 – Boligselgerforsikring:** Direkte bekreftet i salgsoppgaven. Confidence justeres marginalt opp til 0,93.\n\n**R04 – Fuktproblemer bad:** Godt dokumentert med både egenerklæring (våtromsfeil bekreftet), takstrapport (avvik i fall og slukrist), og krakkelering i tak. Borettslaget har også en støtteordning for slukutskifting, noe som indikerer kjent problemstilling. Confidence justeres marginalt opp til 0,93.\n\n**R05 – Vannledninger/vannbåren varme:** Direkte bekreftet i takstrapporten. Rørfornying i 2024 er et positivt tiltak for fellesrør, men gjelder innvendige private ledninger. Confidence opprettholdes på 0,92.\n\n**R06 – El-anlegg ikke kontrollert:** Godt dokumentert. Ingen eltilsynsrapport siste 5 år, delvis skjult anlegg. Confidence justeres marginalt opp til 0,90.\n\n**R07 – Rotter/skadedyr:** Bekreftet i egenerklæring. Rørfornying i 2024 er gjennomført som tiltak, noe som reduserer pågående risiko. Confidence justeres ned til 0,80 da tiltak er iverksatt.\n\n**R08 – Hensynssone H190_1:** Direkte bekreftet i reguleringsopplysningene. Confidence justeres marginalt opp til 0,84.\n\n**R09 – Ytre by/torg-møteplass:** Bekreftet via kommuneplan og KDP-17. Risikoen er reell men lav praktisk konsekvens for eksisterende bolig. Confidence justeres ned til 0,75.\n\n**R10 – Forkjøpsrett/styregodkjenning:** Direkte bekreftet. Confidence justeres opp til 0,87.\n\n**R11 – Overbeheftelse:** Bekreftet i salgsoppgaven med konkret tekst om risikoen. Pantedokumenter er listet. Confidence justeres ned til 0,78 da dette er en generell advarsel og ikke nødvendigvis aktuell situasjon.\n\n**R12 – Legalpanterett:** Godt dokumentert. Borettslaget har sikringsordning via Klare Finans AS som reduserer risikoen noe. Confidence opprettholdes på 0,80.\n\n**R13 – Slitasje overflater/parkett:** Direkte bekreftet i takstrapporten. Confidence justeres opp til 0,82.\n\n**R14 – Kort eiertid:** Bekreftet. Selger har bodd der siste 12 måneder, noe som gir noe kjennskap. Confidence opprettholdes på 0,75.\n\n**R15 – Energimerke ikke angitt:** Direkte bekreftet. Confidence justeres marginalt ned til 0,72 da dette er en informasjonsmangel snarere enn en direkte risiko.\n\n**R16 – Varmesentral ikke undersøkt:** Bekreftet i takstrapporten. Bogerud varmesentral er en separat enhet med eget styre. Confidence justeres opp til 0,80.\n\n**R17 – Eiendomsskatt:** Bekreftet at det finnes eiendomsskatt i Oslo, men konkret beløp er ikke oppgitt. Confidence justeres ned til 0,65 da risikoen er generell og beløpet er ukjent.\n\n**Mulige manglende risikoer identifisert:**\n1. Skjeggkre – spørsmål 28 i egenerklæringen spør om dette, men svar er ikke synlig i dokumentchunkene. Bør undersøkes.\n2. Borettslagets totale økonomi og fremtidige vedlikeholdsplaner – regnskap for 2024 er godkjent, men detaljer mangler.\n3. Tilliggende konstruksjoner til bad er ikke undersøkt – dette er en separat risiko fra selve badet.\n4. Alder på bygget er ikke eksplisitt nevnt i de tilgjengelige chunkene, noe som gjør det vanskelig å vurdere total teknisk risiko.\n5. Kommunale avgifter dekkes via felleskostnader – ingen separat risiko, men bør bekreftes.\n"
}

## Raw Response
```json
{
  "id": "msg_01AjtWw7JLbjgpTjJTGJGP9y",
  "container": null,
  "content": [
    {
      "id": "toolu_015CiifQ2RRhp1u1nn5pnBD5",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Høy fellesgjeld med flytende rente – risiko for økte felleskostnader",
            "evidence": [
              "Kr 203 584 pr. 02.02.2026 i andel fellesgjeld",
              "Borettslaget har lån med flytende rente. Kostnadene til renter og avdrag kan derfor endres i henhold til renteendringer i banken.",
              "Rente: 4.95% pa. Restsaldo: 30 535 633, Antall terminer til innfrielse: 88",
              "Felleskostnader kr 6 006,- pr. mnd",
              "Type: Annuitetslån, 4 terminer per år. Bank: DNB Boligkreditt AS v/ DNB Bank ASA"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Ingen radonmåling er utført – potensiell helserisiko",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Spørsmål 21: Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R03",
            "description": "Selger har ikke tegnet boligselgerforsikring – redusert kjøpervern ved skjulte feil og mangler",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
              "Kjøper har anledning til å tegne boligkjøperforsikring som rettshjelpsforsikring"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R04",
            "description": "Kjente fuktproblemer og krakkelering på bad – risiko for fuktskader",
            "evidence": [
              "Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader? Ja.",
              "Observerte etter innflytting bittelitt krakkelering i baderomstak. Kontaktet styret som sendte en forsikringsagent som sjekket det ut. Han var i etasjen over. Det ble konkludert med at det var dårlig maling.",
              "Bad - Overflater Gulv | Det er påvist at høydeforskjell fra topp slukrist til gulv/synlig topp membran ved dørterskel er mindre enn 25 mm.",
              "Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.",
              "Borettslaget tilbyr støtteordning for utskifting av sluk med inntil kr 8 500 (inkl. mva.)"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R05",
            "description": "Innvendige vannledninger og vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselig svikt",
            "evidence": [
              "Tekniske installasjoner > Vannledninger: Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.",
              "Tekniske installasjoner - Vannbåren varme | Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme.",
              "Felles avløpsrør i bygget renovert innvendig med strømpe i 2024 (vedlikeholdshistorikk borettslaget)"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R06",
            "description": "Elektrisk anlegg ikke kontrollert (el-takst) – risiko for skjulte feil og avvik fra gjeldende forskriftskrav",
            "evidence": [
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra enkle vurderingskriterier.",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
              "Foreligger det eltilsynsrapport de siste 5 år? Nei",
              "Det er delvis skjult og åpent elektrisk anlegg."
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R07",
            "description": "Rotter/skadedyr påvist i borettslaget i forbindelse med rørfornying",
            "evidence": [
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus, maur eller lignende? Ja.",
              "I forbindelse med rørfornying. Rotter. Styret har vært på saken. Jeg har ikke sett noe.",
              "Felles avløpsrør i bygget renovert innvendig med strømpe i 2024 – tiltak er gjennomført"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R08",
            "description": "Eiendommen berøres av hensynssone H190_1 (T-banetunnel under eiendommen) – risiko for setninger og begrensninger",
            "evidence": [
              "Eiendommen berøres av hensynssone H190_1 - Andre sikringssoner. Sonen er knyttet til T-banetunnel som går under eiendommen.",
              "H190 - Andre sikringssoner er listet i tegnforklaringen for kommuneplanen"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.84
          },
          {
            "risk_id": "R09",
            "description": "Eiendommen ligger i 'Ytre by (utviklingsområder)' og er definert som område med behov for torg/møteplass – risiko for fremtidige byggeprosjekter og endringer i omgivelsene",
            "evidence": [
              "Eiendommen ligger i et område definert som 'Ytre by (utviklingsområder)', noe som indikerer et område med potensial for fremtidig utvikling.",
              "Eiendommens område er definert som et 'område med behov for torg/møteplass'. Dette kan medføre krav om opparbeidelse av offentlige plasser ved fremtidige byggeprosjekter.",
              "Eiendommen omfattes av kommunedelplan KDP-17 'Kommunedelplan for torg og møteplasser', vedtatt 22.04.2009."
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R10",
            "description": "Forkjøpsrett og styregodkjenning kreves – risiko for forsinkelse eller bortfall av handel",
            "evidence": [
              "Det er forkjøpsrett og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.",
              "8 406 (Forhåndsvarsling forkjøpsrett) – kostnad i omkostningsoversikten"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R11",
            "description": "Risiko for overbeheftelse – handel kan ikke gjennomføres dersom pantefrafall ikke oppnås",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
              "Pantedokument DNB Bank ASA: NOK 28 000 000 (2017), NOK 13 800 000 (2024)",
              "NOK 7 531 250 OBOS-Banken (2016)",
              "Pantedokument ved bytte av bank: NOK 19 042 460 (2011) – eldre heftelse"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Legalpanterett for borettslaget – kjøper kan bli ansvarlig for andre andelshaveres mislighold av felleskostnader",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
              "Borettslaget er sikret mot tap av felleskostnader via Klare Finans AS – noe som reduserer risikoen noe"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Overflater/parkett har slitasjegrad utover forventet – kostnader til utbedring",
            "evidence": [
              "Innvendig > Overflater: Overflater har en del slitasjegrad utover det en kan forvente.",
              "Det er noe bruksslitasje på parkettgulvene."
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Selger har kun eid boligen i ca. 1 år og 7 måneder – begrenset kjennskap til boligens tilstand over tid",
            "evidence": [
              "Når kjøpte du boligen? År 2024",
              "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7",
              "Har du bodd i boligen siste 12 måneder? Ja – selger har bodd der, noe som gir noe kjennskap"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R15",
            "description": "Energimerke ikke angitt – manglende informasjon om energiforbruk og -kostnader",
            "evidence": [
              "Energikarakter: Ikke angitt",
              "Energifarge: Ikke angitt"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R16",
            "description": "Varmesentral ikke undersøkt av takstmann – skjulte feil kan foreligge",
            "evidence": [
              "Konstruksjoner som ikke er undersøkt: Tekniske installasjoner > Varmesentral",
              "Våtrom > 1. Etasje > Bad > Tilliggende konstruksjoner – ikke undersøkt",
              "Bogerud varmesentral er nevnt i vedtektene som en separat enhet med eget styre og rapporteringsplikt til Fagergåsa borettslag"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R17",
            "description": "Eiendomsskatt i Oslo – løpende kostnad som kan øke",
            "evidence": [
              "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.",
              "Informasjonen er hentet fra eiendomsskattelistene – konkret beløp er ikke oppgitt i dokumentet"
            ],
            "source_documents": [
              "d069_d069"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          }
        ],
        "re_retrieval_queries": [
          "Hva er konkret eiendomsskattebeløp for denne boligen eller andelen?",
          "Er det vedtak eller forslag om økte felleskostnader eller økt fellesgjeld i borettslaget?",
          "Hva er tilstanden på tilliggende konstruksjoner til badet – er det fuktskader i vegger?",
          "Er det skjeggkre påvist i borettslaget?",
          "Hva er borettslagets totale økonomi – regnskap og budsjett for 2024/2025?",
          "Er det kjente mangler ved varmesentralen i Bogerud varmesentral?",
          "Hva er alder på bygget og hvilke byggeår gjelder for de tekniske installasjonene?",
          "Er det utført hulltaking eller fuktmåling i tilstøtende vegger til bad?"
        ],
        "reasoning": "\nGjennomgang av alle 17 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Fellesgjeld/flytende rente:** Meget godt dokumentert. Konkrete tall på restsaldo (30,5 MNOK), rente (4,95%), andel fellesgjeld (203 584 kr) og felleskostnader (6 006 kr/mnd) er alle bekreftet. Confidence justeres opp til 0,97.\n\n**R02 – Radonmåling:** Klart bekreftet i både egenerklæring (spørsmål 21) og salgsoppgavetekst. Confidence justeres marginalt opp til 0,92 da dette er et faktum, ikke en vurdering.\n\n**R03 – Boligselgerforsikring:** Direkte bekreftet i salgsoppgaven. Confidence justeres marginalt opp til 0,93.\n\n**R04 – Fuktproblemer bad:** Godt dokumentert med både egenerklæring (våtromsfeil bekreftet), takstrapport (avvik i fall og slukrist), og krakkelering i tak. Borettslaget har også en støtteordning for slukutskifting, noe som indikerer kjent problemstilling. Confidence justeres marginalt opp til 0,93.\n\n**R05 – Vannledninger/vannbåren varme:** Direkte bekreftet i takstrapporten. Rørfornying i 2024 er et positivt tiltak for fellesrør, men gjelder innvendige private ledninger. Confidence opprettholdes på 0,92.\n\n**R06 – El-anlegg ikke kontrollert:** Godt dokumentert. Ingen eltilsynsrapport siste 5 år, delvis skjult anlegg. Confidence justeres marginalt opp til 0,90.\n\n**R07 – Rotter/skadedyr:** Bekreftet i egenerklæring. Rørfornying i 2024 er gjennomført som tiltak, noe som reduserer pågående risiko. Confidence justeres ned til 0,80 da tiltak er iverksatt.\n\n**R08 – Hensynssone H190_1:** Direkte bekreftet i reguleringsopplysningene. Confidence justeres marginalt opp til 0,84.\n\n**R09 – Ytre by/torg-møteplass:** Bekreftet via kommuneplan og KDP-17. Risikoen er reell men lav praktisk konsekvens for eksisterende bolig. Confidence justeres ned til 0,75.\n\n**R10 – Forkjøpsrett/styregodkjenning:** Direkte bekreftet. Confidence justeres opp til 0,87.\n\n**R11 – Overbeheftelse:** Bekreftet i salgsoppgaven med konkret tekst om risikoen. Pantedokumenter er listet. Confidence justeres ned til 0,78 da dette er en generell advarsel og ikke nødvendigvis aktuell situasjon.\n\n**R12 – Legalpanterett:** Godt dokumentert. Borettslaget har sikringsordning via Klare Finans AS som reduserer risikoen noe. Confidence opprettholdes på 0,80.\n\n**R13 – Slitasje overflater/parkett:** Direkte bekreftet i takstrapporten. Confidence justeres opp til 0,82.\n\n**R14 – Kort eiertid:** Bekreftet. Selger har bodd der siste 12 måneder, noe som gir noe kjennskap. Confidence opprettholdes på 0,75.\n\n**R15 – Energimerke ikke angitt:** Direkte bekreftet. Confidence justeres marginalt ned til 0,72 da dette er en informasjonsmangel snarere enn en direkte risiko.\n\n**R16 – Varmesentral ikke undersøkt:** Bekreftet i takstrapporten. Bogerud varmesentral er en separat enhet med eget styre. Confidence justeres opp til 0,80.\n\n**R17 – Eiendomsskatt:** Bekreftet at det finnes eiendomsskatt i Oslo, men konkret beløp er ikke oppgitt. Confidence justeres ned til 0,65 da risikoen er generell og beløpet er ukjent.\n\n**Mulige manglende risikoer identifisert:**\n1. Skjeggkre – spørsmål 28 i egenerklæringen spør om dette, men svar er ikke synlig i dokumentchunkene. Bør undersøkes.\n2. Borettslagets totale økonomi og fremtidige vedlikeholdsplaner – regnskap for 2024 er godkjent, men detaljer mangler.\n3. Tilliggende konstruksjoner til bad er ikke undersøkt – dette er en separat risiko fra selve badet.\n4. Alder på bygget er ikke eksplisitt nevnt i de tilgjengelige chunkene, noe som gjør det vanskelig å vurdere total teknisk risiko.\n5. Kommunale avgifter dekkes via felleskostnader – ingen separat risiko, men bør bekreftes.\n"
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
    "input_tokens": 23072,
    "output_tokens": 5321,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
