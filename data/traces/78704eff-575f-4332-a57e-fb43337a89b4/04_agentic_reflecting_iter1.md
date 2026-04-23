# Trace: agentic_reflecting_iter1
- **Run ID:** 78704eff-575f-4332-a57e-fb43337a89b4
- **Tidspunkt:** 2026-03-23T10:10:09.628811+00:00
- **Varighet:** 117.43s
- **Input tokens:** 24316
- **Output tokens:** 5651

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
Risiko 1: Planlagt rørfornying med betydelig kostnadsøkning for andelseiere. Borettslaget har mottatt anbefaling om å fornye rørsystemet, og styret planlegger å ta opp lån på ca. kr 3 000 000 over 30 år. Dette vil medføre en økning i felleskostnadene på ca. kr 435 per måned per andelseier.
  Confidence: 0.97
  Evidens: For å finansiere prosjektet er det lagt til grunn lån i størrelsesorden kr 3.000.000 over 30 år med en rente på 5,5 %. Dette vil medføre en økning i felleskostnadene for hver andelseier på ca kr 435 pr måned.; Som tidligere omtalt i årsberetningene, har borettslaget mottatt anbefaling fra fagpersonell tilknyttet USBL om å fornye rørsystemet.; Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.

Risiko 2: Eksisterende høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 232 153, og borettslagets totale langsiktige gjeld er betydelig. I tillegg er det registrert pantstillelser på kr 7 934 992. Fellesgjelden vil øke ytterligere ved planlagt rørfornying.
  Confidence: 0.95
  Evidens: 232 153 kr (Andel av fellesgjeld); Pantstillelser 13 7 934 992 8 452 026; Sum gjeld 7 981 800 8 629 919

Risiko 3: Pantedokument på kr 2 850 000 registrert på andelen med DNB Bank ASA og DNB Boligkreditt AS som panthavere. Dette er selgers eksisterende lån som må innfris ved salg, men representerer en heftelse på andelen.
  Confidence: 0.95
  Evidens: 2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006 PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551

Risiko 4: Fellesobligasjon for borettslagsinnskudd fra 1973 på kr 1 200 000 er tinglyst på eiendommen. Selv om dette er en eldre heftelse, er den fortsatt registrert i grunnboken og kan ha betydning for prioritetsrekkefølgen.
  Confidence: 0.85
  Evidens: 1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000 Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE LØPENR: 1454189

Risiko 5: Manglende byggetegninger for boligblokken. Det foreligger ikke godkjente og byggemeldte tegninger for bygget, noe som gjør det vanskelig å verifisere lovlighet av romfordeling og areal.
  Confidence: 0.92
  Evidens: Det foreligger ikke tegninger for bygget. Det er ikke fremlagt tegninger for bygget.; Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk.

Risiko 6: Badet har TG2 (vesentlige avvik) basert på alder. Mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Badet ble renovert i 2021, men det er allerede gitt TG2 basert på aldersvurdering.
  Confidence: 0.9
  Evidens: Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Det er nå ingen symptomer på funksjonssvekkelse, men...; Årstall: 2021 Kilde: Tidligere salgsoppgaver

Risiko 7: Boligblokken er fra 1970 og er bygget etter datidens byggeskikk og krav, ikke dagens krav. Dette innebærer risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.
  Confidence: 0.88
  Evidens: Boligbygg med flere boenheter - Byggeår: 1970; Eldre hus/blokker er bygget etter datidens byggeskikk og krav, ikke de krav som gjelder i dag.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 8: Begrenset avsetningsfond i borettslaget. Borettslagets bankkonto for avsetning har kun kr 108 849,61 per 31.12.2024, noe som er lavt sett i forhold til borettslagets størrelse og kommende vedlikeholdsbehov (rørfornying).
  Confidence: 0.85
  Evidens: Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.; Disponible midler 343 345 270 531

Risiko 9: Reguleringsplaner under arbeid i nærheten av eiendommen (innenfor 500 meter). Flere detaljreguleringsplaner er under planlegging, inkludert for Ås sentralområde og gang-/sykkelvei langs fylkesvei 152. Dette kan påvirke bomiljøet og trafikksituasjonen.
  Confidence: 0.78
  Evidens: Reguleringsplaner under arbeid i nærheten (500 meter); Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt; Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt; Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status...

Risiko 10: Utleie av andelsboligen er regulert og krever godkjenning. Kjøper som ønsker å leie ut boligen må forholde seg til strenge regler i borettslagsloven og borettslagets vedtekter, noe som begrenser fleksibiliteten.
  Confidence: 0.82
  Evidens: Utleie reguleres av USBL og borettslagets vedtekter og krever...; Du beholder alle dine plikter overfor borettslaget selv om leiligheten er utleid; Ved brudd på utleiereglene kan borettslaget kreve at leietaker flytter ut. Alle leierettigheter faller bort når andelen skifter eier.

Risiko 11: Obligatorisk medlemskap i USBL for alle medeiere. Alle medeiere må tegne individuelle medlemskap i USBL (kr 300 per år) for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke registrering av eierskap.
  Confidence: 0.8
  Evidens: Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e). Les mer om innmelding i USBL her: https://www.usbl.no/medlemskap/bli-medlem

Risiko 12: Tilstandsrapporten er basert på visuell observasjon (undersøkelsesnivå 1) og gir ingen garanti mot skjulte feil. Takstmannen har heller ikke undersøkt for skjeggkre/sølvkre, og rapporten dekker ikke alle bygningsdeler.
  Confidence: 0.88
  Evidens: Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og...); Takstmannen har ikke gjort undersøkelser rundt skjeggkre/sølvkre.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 13: Prioritetsbestemmelse fra 1985 tinglyst på eiendommen. Det er registrert en prioritetsbestemmelse som har veket for en obligasjon fra 1985. Dette kan ha betydning for prioritetsrekkefølgen ved eventuelle krav mot eiendommen.
  Confidence: 0.72
  Evidens: 1985/204808-1/6 10.05.1985 ** PRIORITETSBESTEMMELSE VEKET FOR: OBLIGASJON 1985/203642-1

Risiko 14: Tomtegrenser er ikke kontrollert. Det er ikke verifisert at tomtegrenser stemmer med de grenser, gjerder og beplantning som fysisk eksisterer på eiendommen, noe som kan medføre nabokonflikter eller uklarheter om eiendomsgrenser.
  Confidence: 0.75
  Evidens: Det er ikke kontrollert om tomtegrenser stemmer med de grenser/gjerder/beplantning som fysisk...

Risiko 15: Kvikkleirerisiko i området. Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Ås kommune er et område med kjent kvikkleireproblematikk.
  Confidence: 0.65
  Evidens: § 12.1 Kvikkleire For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.; Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3

Dokumentkontekst:
[d001_d001 | Side [1]]
v innskudd). I tillegg skal
eiendommens tinglyste rettigheter og forpliktelser avdekkes.
Den utskriften du vil se på neste side er et utdrag fra
grunnboken. Den tar for seg det første og det siste punktet, som
handler om grunndata og servitutter. Eksempel på en servitutt
kan være en tinglyst veirett, en tinglyst leiekontrakt, rett for
kommunen til å anlegge ledninger eller vei mv. Det som er
tinglyst på eiendommen, gjelder normalt sett felles for alle
boligene i borettslaget.
I sidene etter utdraget vil du

---

[d001_d001 | Side [1]]
heller ikke overført. Disse
finner du på grunnboksutskriften til hovedbruket/avgivereiendommen. For festenummer
gjelder dette servitutter eldre enn festekontrakten.
Heftelser i eiendomsrett:
1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK.
Beløp: NOK 1 200 000
Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS
STYRE
LØPENR: 1454189
Overført fra: KNR: 0214 GNR: 42 BNR: 1 FNR: 212
m.fl.
1985/204808-1/6 10.05.1985 ** PRIORITETSBESTEMMELSE
VEKET FOR: OBLIGASJON 1985/203642-1
2025/1477207-1/200 02.12.2025

---

[d001_d001 | Side [1]]
yst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller før eventuelle arealoverføringer, er heller ikke overført. Disse
finner du på grunnboksutskriften til hovedbruket/avgivereiendommen. For festenummer
gjelder dette servitutter eldre enn festekontrakten.
Heftelser i eiendomsrett:
1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK.
Beløp: NOK 1 200 000
Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS
STYRE
LØPENR: 1454189
Overført fra: KNR: 0214 GNR: 42 BNR: 1 FNR: 212
m.fl.
1985/204808-1/6

---

[d001_d001 | Side [1]]
r seg Tinglyste servitutter
grundig inn i alle salgsdokumentene, herunder
salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses kjent med forhold som
På eiendommen kan det være tinglyst erklæringer/
er tydelig beskrevet i salgsdokumentene. Forhold
avtaler som for eksempel rett for kommunen til å
som er beskrevet i salgsdokumentene kan ikke
anlegge vann- og kloakkledninger inkl. reparasjon av
påberopes som mangler.
disse, bestemmelser om bebyggelsen, gjerder, vei
og adkomstrettigheter. Disse

---

[d001_d001 | Side [1]]
ger om tinglyste servitutter
(rettigheter og forpliktelser, samt leieavtaler og
festeavtaler) i eiendommen.
Når selger har iverksatt et salg gjennom PROPR.no, hentes
automatisk inn en utskrift av grunnboken, som inneholder det
overnevnte. Denne benyttes til å verifisere at borettslaget har
hjemmel til eiendommen, samt at den gir oversikt over
borettslagets tinglyste pant (normalt relatert til borettslagets
fellesgjeld og evt sikring av innskudd). I tillegg skal
eiendommens tinglyste rettigheter og

---

[d001_d001 | Side [1]]
eggs- og arrestforretninger, samt forbehold tatt ved
avhendelse, som tinglyses samme dag som andre frivillige rettsstiftelser,
gjelder særskilte prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21
tredje ledd.
Bekreftet grunnboksutskrift Side 1 av 1

## Side 96

Eiendomsrapport (Datakilde: Oppdatert kopi av matrikkelen)
Borettslagsandel 112 i AL LYNGFARET BORETTSLAG (947199714), Ås kommune
Utskriftsdato: 22.01.2026 14:52
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i

---

[d001_d001 | Side [1]]
 TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL LYNGFARET BORETTSLAG
ORG.NR: 947 199 714
HEFTELSER
Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som
vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten
sin grunnboksutskrift. Servitutter tinglyst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller før eventuelle arealoverføringer, er heller ikke overført. Disse
finner du på grunnboksutskriften til

---

[d001_d001 | Side [1]]
r 03.03.2026 kl. 14.45
HJEMMELSOPPLYSNINGER
Rettighetshavere til eiendomsrett
2003/16074-1/6 24.11.2003 HJEMMEL TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL LYNGFARET BORETTSLAG
ORG.NR: 947 199 714
HEFTELSER
Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som
vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten
sin grunnboksutskrift. Servitutter tinglyst på hovedbruket/avgivereiendommen før
fradelingsdatoen, eller

---

[d001_d001 | Side [1]]
Tidligere:
KNR: 3021 GNR: 42 BNR: 279
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved avhendelse, som
tinglyses samme dag som andre frivillige rettsstiftelser, gjelder særskilte
prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21 tredje ledd.
Utskrift fra eiendomsregisteret foretatt 03.03.2026 14:48 – Sist oppdatert 03.03.2026 14:47
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 2 av 2

## Side 95

Grunnboksutskrift fra

---

[d001_d001 | Side [1]]
enr. 3218 Gårdsnr. 42 Bruksnr. 279 Festenr. Seksjonsnr.
Adresse: Lyngveien 24A, 1433 ÅS
Restanser og legalpant registrert på eiendommen
Utestående fordringer som hviler på eiendommen:
Det er ingen heftelser på eiendommen.
Eiendommen har en restanse på kommunale avgifter med kr 0,-
Borettslaget må kontaktes for disse opplysningene.
Beløpet er eksklusiv eventuelle renter og gebyrer. Ved behov ta kontakt med oss når oppgjørsdato er satt slik at vi
kan beregne skyldig beløp inklusiv renter og gebyrer.
Neste

---

[d001_d001 | Side [1]]
R: 141104
SKJELBY HENRIK J IDEELL: 7/10
F.NR: 210495
ELEKTRONISK INNSENDT
HEFTELSER
Heftelser i eiendomsrett:
2024/1743964-1/200 PANTEDOKUMENT
29.07.2024 09.10 BELØP: NOK 2 850 000
PANTHAVER: DNB BANK ASA
ORG.NR: 984 851 006
PANTHAVER: DNB BOLIGKREDITT AS
ORG.NR: 985 621 551
ELEKTRONISK INNSENDT
Rettigheter
Ingen rettigheter registrert
OPPLYSNINGER FRA BORETTSLAGET
2006/19763-1/201 REGISTRERING AV BORETTSLAGSANDEL
20.11.2006
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved
avhendelse,

---

[d001_d001 | Side [1]]
0214 GNR: 42 BNR: 279
2024/924739-1/200 01.01.2024 OMNUMMERERING VED KOMMUNEENDRING
00:00
Tidligere:
KNR: 3021 GNR: 42 BNR: 279
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved avhendelse, som
tinglyses samme dag som andre frivillige rettsstiftelser, gjelder særskilte
prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21 tredje ledd.
Utskrift fra eiendomsregisteret foretatt 03.03.2026 14:45 – Sist oppdatert 03.03.2026 14:45
Utskriften er levert av: Ambita as, Postboks 2923

---

[d001_d001 | Side [1]]
2006 REGISTRERING AV BORETTSLAGSANDEL
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved avhendelse, som
tinglyses samme dag som andre frivillige rettsstiftelser, gjelder særskilte
prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21 tredje ledd.
Utskrift fra eiendomsregisteret foretatt 03.03.2026 14:48 – Sist oppdatert 03.03.2026 14:47
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 1

## Side 50

Utskriftsdato:

---

[d001_d001 | Side [1]]
melser om bebyggelsen, gjerder, vei
og adkomstrettigheter. Disse erklæringene/avtalene
Dette gjelder uavhengig av om kjøper har lest
vil følge eiendommen og vil ikke bli slettet ved salg
dokumentene. Alle interessenter oppfordres til å
av eiendommen.
undersøke eiendommen nøye, gjerne sammen med
fagkyndig før bud inngis. Kjøper som velger å kjøpe
usett kan ikke gjøre gjeldende som mangel noe han
burde blitt kjent med ved undersøkelsen.
Dersom det er behov for avklaringer, anbefaler vi at
kjøper rådfører seg

---

[d001_d001 | Side [1]]
 for eiendom 3218 - 42/279//
100 m
© 2016 Norkart AS/Geovekst og kommunene/OpenStreetMap/NASA, Meti
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse opplysningene benyttes som grunnlag for beslutninger.

## Side 101

Utskriftsdato: 30.01.2026
Restanser og legalpant
EM §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Ås Kommune
Kommunenr. 3218 Gårdsnr. 42 Bruksnr. 279 Festenr. Seksjonsnr.
Adresse:

---

[d001_d001 | Side [1]]
n grunnboksblad stammer fra den tid grunnboken ble
ført manuelt, og da det faktisk var et blad for hver eiendom (kalt
matrikkel).
Opplysningene i grunnboken er inndelt i fire avsnitt:
• Grunndata – Opplysninger om opprettelse av
matrikkelenheten (eiendommen).
• Hjemmelsopplysninger – Hvem som eier eiendommen (har
hjemmel) til matrikkel- enheten.
• Pengeheftelser – Opplysninger om pant i matrikkelenheten.
• Servitutter mv. – Opplysninger om tinglyste servitutter
(rettigheter og forpliktelser, samt

---

[d001_d001 | Side [1]]
per ikke er forbruker selges eiendommen
«som den er», og selgers ansvar er da begrenset jfr.
avhl. § 3-9, 2. pktm. Informasjon om kjøpers
undersøkelsesplikt, herunder oppfordringen om å
undersøke eiendommen nøye, gjelder også for
kjøpere som ikke anses som forbrukere.
Lovanvendelse:
Eiendommen selges etter reglene i avhendingsloven.
Eiendommen skal overleveres kjøper i tråd med det
som er avtalt. Det er viktig at kjøper setter seg Tinglyste servitutter
grundig inn i alle salgsdokumentene,

---

[d001_d001 | Side [1]]
E
FØDT: 14.11.2004 IDEELL: 3/10
SKJELBY HENRIK JOHANNESSEN
FØDT: 21.04.1995 IDEELL: 7/10
ELEKTRONISK INNSENDT
HEFTELSER
Heftelser i eiendomsrett:
2024/1743964-1/200 29.07.2024 PANTEDOKUMENT
09:10
BELØP: NOK 2 850 000
PANTHAVER : DNB BANK ASA
ORG.NR: 984 851 006
PANTHAVER : DNB BOLIGKREDITT AS
ORG.NR: 985 621 551
ELEKTRONISK INNSENDT
Rettigheter:
Ingen rettigheter registrert
OPPLYSNINGER FRA BORETTSLAGET
2006/19763-1/201 20.11.2006 REGISTRERING AV BORETTSLAGSANDEL
For eventuelle utleggs- og

---

[d001_d001 | Side [1]]
for alle
boligene i borettslaget.
I sidene etter utdraget vil du finne kopi av de tinglyste servitutter
som kan bestilles elektronisk. Servitutter eldre enn ca 1950 er
ikke tilgjengelig for bestilling, men kan hentes fra Statsarkivets
nettsider. Merk at disse like fullt gjelder eiendommen, selv om
mange har innhold som er gått ut på dato og at de kan være
vanskelig å tyde (håndskrevet).
BORETTSLAGSREGISTERET
Når selger har iverksatt et salg gjennom PROPR.no, hentes det
også automatisk inn en utskrift fra

---

[d001_d001 | Side [1]]
.03.2026 14:45
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 2 av 2

## Side 93

Utskrift fast eiendom
Gårdsnummer 42, Bruksnummer 279 i 3218 ÅS kommune
Utskrift fra EDR - Eiendomsregisteret Data uthentet 03.03.2026 kl. 14.48
Kilde Tinglysningsmyndigheten Statens Kartverk Oppdatert per 03.03.2026 kl. 14.47
HJEMMELSOPPLYSNINGER
Rettighetshavere til eiendomsrett
2003/16074-1/6 24.11.2003 HJEMMEL TIL EIENDOMSRETT
VEDERLAG: NOK 812 700
Omsetningstype: Annet
AL

---

[d001_d001 | Side [1]]
krever umiddelbare tiltak.
Konstruksjonen har normalt enten feil utførelse, en skade eller symptomer
på skade, sterk slitasje eller nedsatt funksjon. Vedlikehold eller tiltak trengs
i nær fremtid, det er grunn til å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter

---

[d001_d001 | Side [1]]
ge vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknadstidspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
etter normal bruk regnes ikke som avvik.
Hva inneholder tilstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskrift til
avhendingsloven. Tilstandsrapporten inneholder bare avvik som

---

[d001_d001 | Side [1]]
annen kontaktes for
ny befaring og det må utføres en ny rapport. Rapporten har kun
kostnadsberegninger for TG: 3 som forskriften krever.
TG0: Ingen avvik
Generelt omfattes denne rapporten ikke kontroll av tekniske
TG1: Mindre eller moderate avvik utstyr. Det vil være forskjellige typer teoretisk spisskompetanse
TG2: Avvik som kan kreve tiltak og utstyr som trengs til dette.
TG3: Store eller alvorlige avvik
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er
TG IU: Konstruksjoner som ikke er

---

[d001_d001 | Side [1]]
nnomgang uten inngrep i byggverket,
eventuelt supplert med enkle målinger.
Takstmannen er ikke ansvarlig for manglende opplysninger om
feil/mangler som han ikke kunne ha oppdaget, etter å ha
undersøkt takstobjektet slik god skikk tilsier.
Eldre hus/blokker er bygget etter datidens byggeskikk og krav,
ikke de krav som gjelder i dag. Takstmannen har ikke gjort
undersøkelser rundt skjeggkre/sølvkre.
Hvis rapporten er eldre en 1 år, skal takstmannen kontaktes for
ny befaring og det må utføres en ny rapport.

---

[d001_d001 | Side [1]]
en skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk slitasje eller nedsatt
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid. Graden skal også brukes
når delen er gammel og det er grunn

---

[d001_d001 | Side [1]]
 normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av tilstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad. Når bygningssakkyndige anbefaler tiltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om tiltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger tilstandsgrad, baseres vurderingen på faste

---

[d001_d001 | Side [1]]
jente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I tillegg må bygningsdelen dagens bruk.
være tilnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god utførelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Strakstiltak ikke boligen hadde el-tilsyn.

---

[d001_d001 | Side [1]]
vik. Normal slitasje. Strakstiltak ikke boligen hadde el-tilsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er tilnærmet ny og det ikke offentlige myndigheter eller kvalifisert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god utførelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som etter NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare tiltak.
Konstruksjonen har normalt enten feil

---

[d001_d001 | Side [1]]
er under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
Dette kan gjelde sluk, tettesjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholdstilstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
tilleggsbygg slik som garasje, bod, anneks, naust

---

[d001_d001 | Side [1]]
 har normal finnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte tiltak ved TG2 og TG3 må bruker av rapporten tilstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 til 3,
vurdere om tiltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
utbedre rom eller bygningsdeler er et sjablongmessig anslag basert på Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og

---

[d001_d001 | Side [1]]
r
Gå til side
må påregnes i tiden som kommer. Forøvrig vises til beskrivelser
og vurderinger for de enkelte bygningsdeler i rapporten.
Forutsetninger og vedlegg Gå til side
Boligbygg med flere boenheter - Byggeår: 1970
Lovlighet Gå til side
UTVENDIG Gå til side Boligbygg med flere boenheter
Boligblokk med bærende konstruksjoner, etasjeskillere og
• Det foreligger ikke tegninger
leilighetsskillende vegger i betong/mur. Støpt såle, antatt
Det er ikke fremlagt tegninger for bygget. Det er

---

[d001_d001 | Side [1]]
dre bygningsdeler skjer etter eiers aksept. Hulltaking av våtrom og
normalt ikke positive sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskrift til
tilstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir uttrykk for en gitt forventet tilstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer

---

[d001_d001 | Side [1]]
ngssakkyndige velger tilstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
tilstandsanalyse ved omsetning av bolig og Forskrift til avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god utførelse. Det er ingen merknader til delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses

---

[d001_d001 | Side [1]]
regning i forhold til antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene benyttes for beregning av
estetiske status på et gitt tidspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken tilstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
byggverk eller en bygningsdel befinner seg i. Benyttes ved beskrivelse av opplyst at tilhører boenheten,

---

[d001_d001 | Side [1]]
ringsdato: 03.03.2026 Side: 2 av 17

## Side 25

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Dette trenger du å vite om tilstandsrapporten
Hva er en tilstandsrapport?
En tilstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke positive egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av

---

[d001_d001 | Side [1]]
bran.
Etasjeskille/gulv mot grunn Årstall: 2021 Kilde: Tidligere salgsoppgaver
Beskrivelse
Vurdering av avvik:
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 8 av 17

## Side 31

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapport
• Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer
enn halvparten av forventet brukstid for membran/tettesjikt er passert.
Det er nå ingen symptomer på funksjonssvekkelse, men

---

[d001_d001 | Side [1]]
bygget ut ifra alder/konstruksjon - jamfør
Innvendig har boligen finèrdører.
beskrivelse under konstruksjoner.
Vedlikehold
Bygget er jevnlig vedlikeholdt. VÅTROM
1 ETASJE > BAD
UTVENDIG
Generell
Byggemåte Beskrivelse
Beskrivelse Aktuell byggeforskrift er teknisk forskrift 2017. Dokumentasjon: ingen
Boligblokk med bærende konstruksjoner, etasjeskillere og dokumentasjon.
leilighetsskillende vegger i betong/mur. Støpt såle, antatt fundamentert Årstall: 2021 Kilde: Tidligere salgsoppgaver
til fast grunn eller

---

[d001_d001 | Side [1]]
m er
basert på enkle visuelle observasjoner. Kan vurderes sammen med
PERSONVERN
bygningsdelens alder.
• Forventet gjenværende brukstid: Anslått tid et byggverk eller en del av et iVerdi AS, bygningssakkyndig og takstforetaket behandler person-
byggverk fortsatt vil være tjenlig for sitt formål (NS3600, Termer og opplysninger som bygningssakkyndig trenger for å kunne utarbeide
definisjoner punkt 3.9) rapporten. Personvernerklæring med informasjon om bruk av
personopplysninger og dine rettigheter finner du

---

[d001_d001 | Side [1]]
tid. Graden skal også brukes
når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn
til å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne tilstandsgraden brukes ved kraftige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort tid. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan

---

[d001_d001 | Side [1]]
r TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke tilgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskrift til
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan
tilstandsgrad, fordi bygningen eller bygningsdelen da bare har normal finnes skjulte feil, skader og mangler. NS 3600:2018

---

[d001_d001 | Side [1]]
kjøpsretten.
Alle medeiere må tegne individuelle medlemskap i
AL Lyngfaret borettslag er veldrevet og kjennetegnes
USBL (kr 300,- per år) for at boligen skal kunne
av et fredelig og trivelig bomiljø. Borettslaget har
registreres på kjøper(e). Les mer om innmelding i
godt vedlikeholdte fellesarealer og vektlegger
USBL her: https://www.usbl.no/medlemskap/bli-
langsiktig planlegging og oppsparinger for
medlem
fremtiden. For å holde felleskostnadene nede, holder
borettslaget årlige dugnader, ofte vår og

---

[d001_d001 | Side [1]]
kluderer
Lysekrone og taklamper
Kommunale avgifter, Tv/bredbånd, felles
Ruter og dekoder fra Altibox
bygningsforsikring, forretningsførsel, drift og
Vegghengte varmeovner
vedlikehold, renter og avdrag
Plisségardiner
Dusjkabinett
Avdrag felleslån kr.598
Renter felleslån kr.942
Ved interesse for møblement utover det som
Felleskostnader kr. 3630
medfølger, kan dette diskuteres ved budgivning.
Felleskostnader totalt: kr. 5170
Utleie reguleres av USBL og borettslagets vedtekter
og krever

---

[d001_d001 | Side [1]]
rettslagets/
Styret skal føre protokoll fra sine møter. sameiets midler.
• Styret vedtar budsjett og nødvendige • Krever inn felleskostnader. Foretar kontroll
reguleringer av felleskostnader. med innbetalinger og purringer, samt
inndrivelse av eventuelle restanser via Klare
• Styret foretar bestillinger og anviser Inkasso.
fakturaer til betaling.
• Innberetter nødvendige opplysninger
• Styret tar beslutninger om bruk av midler til til offentlige myndigheter.
drift og vedlikehold.
• Utarbeider utkast til

---

[d001_d001 | Side [1]]
saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.
Borettslagets disponible midler er de økonomiske midlene som borettslaget har til rådighet.
De defineres som omløpsmidler fratrukket kortsiktig gjeld.
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 5 av 20

## Side 59

Resultatregnskap 2024 AL Lyngfaret borettslag
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 2 404 029 2 151 051 2 402 400 2 707 603
Sum leieinntekt 2 404 029 2 151 051 2 402

---

[d001_d001 | Side [1]]
etrekk til en felles skattetrekkskonto i Usbl.
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 9 av 20

## Side 63

Noter årsregnskap 2024 AL Lyngfaret borettslag
Note 1 - Innkrevde felleskostnader
2024 2023
3600 Innkrevde felleskostn. drift 1 452 000 1 187 520
3618 Leietillegg strøm 25 869 49 811
3650 Innkrevde felleskostn. renter 400 760 351 920
3660 Innkrevde felleskostn. avdrag 525 400 550 120
3690 Andre leieinntekter 0 11 680
Sum 2 404 029 2 151 051
3618 - Lading av el-bil
Note 2 - Andre

---

[d001_d001 | Side [1]]
Forskuddsbetalt felleskostnad 5 552 0
Leverandørgjeld 39 121 144 718
Påløpne renter 2 135 3 308
Annen kortsiktig gjeld 0 29 867
Sum kortsiktig gjeld 46 808 177 893
Sum gjeld 7 981 800 8 629 919
SUM EGENKAPITAL OG GJELD 4 775 375 4 856 288
Pantstillelser 13 7 934 992 8 452 026
Sted:_______________________ Dato:_______________
Bernt Skoklefald Marit Holmøy Martin Paliocha
Styreleder Styremedlem Styremedlem
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 8 av 20

## Side 62

Noter årsregnskap 2024 AL

---

[d001_d001 | Side [1]]
r av 40 andeler.
Eiendommer er oppført på g.nr 42, b.nr 279 i Ås kommune. Eiertomt på 10 831,3 kvm.
Borettslaget eiendommer er forsikret gjennom If Skadeforsikring med polise nr. SP587521.
Note 5 - Kostnad eiendom/ lokaler
2024 2023
6300 Leiekostnader lokaler 2 500 2 500
6360 Annet renhold 2 899 60
6361 Fast renhold 94 204 83 573
6391 Snømåking/strøing/feiing 32 729 70 979
6393 Blomster/jord, klipping av gress/hekk 20 036 20 790
Sum 152 368 177 902
Note 6 - Lisens HMS, vedlikehold og andre lisenser
2024

---

[d001_d001 | Side [1]]
r inntil 1 år. (Vervet
løper frem til rørfornying er gjennomført høsten 2025.
Fellesvaskeriet avvikles deretter)
6.4 Valg av valgkomite
Valgkomitéens innstilling:
Ellen Olavesen
Helene Grenne
Forslag til vedtak: Ellen Olavesen velges for 1 år
Helene Grenne velges for 1 år
Side 4 av 20

## Side 58

Årsregnskap 2024 AL Lyngfaret borettslag
Disponible midler
Regnskap Regnskap
2024 2023
A. Disponible midler fra foregående årsregnskap 270 531 253 100
B. Endring i disponible midler
Resultat hittil 567 207 509

---

[d001_d001 | Side [1]]
forvaltning,
6. andre tiltak som går ut over vanlig forvaltning, når tiltaket fører
med seg økonomisk ansvar eller utlegg for laget på mer enn fem prosent
av de årlige felleskostnadene.
8-4 Representasjon og fullmakt
To styremedlemmer i fellesskap representerer laget utad og tegner dets navn.
9. Generalforsamlingen
9-1 Myndighet
Den øverste myndighet i borettslaget utøves av generalforsamlingen.
9-2 Tidspunkt for generalforsamling
(1) Ordinær generalforsamling skal holdes hvert år innen utgangen av

---

[d001_d001 | Side [1]]
ene vil kunne tilsvare ca. 10 % av den totale pristilbudet
nevnt over.
For å finansiere prosjektet er det lagt til grunn lån i størrelsesorden kr 3.000.000
over 30 år med en rente på 5,5 %. Dette vil medføre en økning i felleskostnadene for
hver andelseier på ca kr 435 pr måned.
Styret ønsker andelshavernes tilslutning til å inngå kontrakt om rørfornying med TT
Teknikk AS.
Forslag til vedtak: AL Lyngfaret Borettslag aksepterer pristilbud fra selskapet TT-
Teknikk AS.
6. Valg
Sittende styre består

---

[d001_d001 | Side [1]]
ene under. OBS: Det er ingen
garanti for at forretningsfører har fått med all info. Det
forutsettes derfor at interessenter leser alle dokumentene
grundig før budgivning/kjøp.
• Årsberetning
• Siste tilgjengelige regnskap
• Budsjett
• Vedtekter
• Husordensregler
Enkelte sameier og borettslag har ikke alle de overnevnte
punktene tilgjengelig. I det følgende finner du en komplett pakke
av de opplysninger forretningsfører har sendt til PROPR.no.

## Side 49

Utskrift borettslagsandeler
Andelsnummer 112 i AL

---

[d001_d001 | Side [1]]

vedlikeholdsoppgaver, blant annet inspeksjon av takarealer samt rensing av sluk og
nedløp.
Rørfornying
Som tidligere omtalt i årsberetningene, har borettslaget mottatt anbefaling fra
fagpersonell tilknyttet USBL om å fornye rørsystemet. Anbefalingen er basert på generelle
levetidsvurderinger. En full utskiftning ville også kreve totalrenovering av alle bad, noe
som vil være både omfattende og kostbart, og medføre en betydelig økning i
felleskostnadene.
Styret har derfor vurdert alternative løsninger og

---

[d001_d001 | Side [1]]
tlige myndigheter.
drift og vedlikehold.
• Utarbeider utkast til budsjett.
• Styret behandler klagesaker og vedtar
eventuelle reaksjoner i form av advarsler • Bistår styret med råd og tilrettelegging av
eller salgspålegg. årsmøte.
• Styret behandler skadesaker på bygning, og • Fremforhandler gunstige rabattavtaler
melder fra til Usbl om eventuelle for borettslaget/sameiet og beboere.
forsikringssaker.
• Registrerer eierskifter og påser at eventuelle
• Styret er arbeidsgiver for vaktmester, regler for

---

[d001_d001 | Side [1]]
mber 2025.
Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold,
ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av
et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.
For nærmere informasjon vises det til sak 5.1 i vedlagte innkalling til årets
generalforsamling.
Nye andelshavere
I perioden er det registrert seks overdragelser av andeler. Styret ønsker alle nye
andelshavere hjertelig velkommen til

---

[d001_d001 | Side [1]]
e driftsmidler 4 67 594 90 235
Sum anleggsmidler 4 385 223 4 407 864
Omløpsmidler
Fordringer
Restanse felleskostnader 4 961 8 877
Andre kortsiktige fordringer 591 0
Forskuddsbetalte kostnader 28 891 25 001
Bankinnskudd og kontanter
Innestående bank 355 709 414 546
Sum omløpsmidler 390 152 448 424
SUM EIENDELER 4 775 375 4 856 288
2803 AL Lyngfaret borettslag Org. nr 947199714
Side 7 av 20

## Side 61

Balanse 2024 AL Lyngfaret borettslag
Note 2024 2023
EGENKAPITAL OG GJELD
Egenkapital
Innskutt

---

[d001_d001 | Side [1]]
3 100
B. Endring i disponible midler
Resultat hittil 567 207 509 339
Tilbakeføring av avskrivning 22 641 22 641
Opptak/avdrag langsiktig gjeld -517 034 -514 548
B. Årets endring disponible midler 72 813 17 432
C. Disponible midler 343 345 270 531
Spesifikasjon av disponible midler:
Omløpsmidler 390 152 448 424
Kortsiktig gjeld -46 808 -177 893
C. Disponible midler 343 345 270 531
Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.
Borettslagets

---

[d001_d001 | Side [1]]
balansen til pålydende etter fradrag for avsetning til forventet tap.
Avsetning til tap gjøres på grunnlag av individuelle vurderinger av de enkelte fordringene.
Varige driftsmidler
Varige driftsmidler balanseføres og avskrives over driftsmidlets levetid dersom de har levetid over 3 år og har en kostpris
som overstiger kr 50.000,-. Avskrivningssats for bygninger er satt til null i henhold til forskrift om årsregnskap og årsberetning for borettslag.
Direkte vedlikehold av driftsmidler kostnadsføres løpende

---

[d001_d001 | Side [1]]
kkelig for å oppveie verdiforringelse av bygning.
Note 9 - Andre honorar
2024 2023
6714 Tilleggstjenester forretningsfører 8 525 7 698
Sum 8 525 7 698
6714 - Gjelder nøkler tilleggsavtale og viderefaktureringer.
Note 10 - Andre kostnader
2024 2023
7718 Fellesarrangement 83 324
7770 Betalingskostnader 73 118
7773 Omkostninger innkreving 2 278 498
7792 Øredifferanse 0 4
7795 Husleietap -11 1
Sum 2 422 944
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 12 av 20

## Side 66

Noter årsregnskap 2024 AL

---

[d001_d001 | Side [1]]
nde forsinkelsesrente etter lov av
17. desember 1976 nr 100.
7-2 Borettslagets pantesikkerhet
For krav på dekning av felleskostnader og andre krav fra lagsforholdet har
laget panterett i andelen foran alle andre heftelser. Pantekravet er
begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på
tidspunktet da tvangsdekning besluttes gjennomført.
8. Styret og dets vedtak
8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og 2 andre
medlemmer med 3 varamedlemmer.
(2)

---

[d001_d001 | Side [1]]
05 Arb.giv.avg.feriepenger - fra lønnssystemet 0 82
5330 Honorar tillitsvalgte fra lønnssystemet 75 000 75 000
Sum 85 575 91 801
Personalkostnader omfatter lønns- og personalkostnader, samt arbeidsgiveravgift. Antall årsverk sysselsatt: 0,0.
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 10 av 20

## Side 64

Noter årsregnskap 2024 AL Lyngfaret borettslag
Note 4 - Varige driftsmidler
Bygninger TomterMotorvarmer/Ladestasjon Ladebokser
Anskaffelseskost pr.01.01 : 3 392 849 924 780 134 531 91 875
Årets

---

[d001_d001 | Side [1]]
re
magnetfeltet.
§ 11.4 Miljøoppfølgingsplan (MOP)
I forslag til reguleringsplaner og byggesøknader som innebærer store
miljøutfordringer, skal det utarbeides en miljøoppfølgingsplan. Planen skal
foreligge ved søknad om rammetillatelse og vise hvordan følgende forhold skal
løses:
a. Anleggstransport
b. Parkering i anleggsperioden
c. Trafikksikkerhet
d. Grunnarbeider og håndtering av overskuddsmasser
e. Krav til anleggsstøy, vibrasjoner, støv, luftforurensning og vannkvalitet
f. Beskyttelse av

---

[d001_d001 | Side [1]]
 Landås skog
R-15 Del av Kajajordet
R-17 Del av Rustad skog
R-18 Søråsteigen
R-22 Sporret
R-35 Nygårdsåsen
R-73 Dysterlia - endring
§ 1.3 Planer med brutto utnyttelsesgrad
Bestemmelser i gjeldende reguleringsplaner om brutto utnyttelsesgrad
erstattes av kommuneplanens bestemmelser om utnyttelsesgrad, jf. § 19.3.
1

## Side 122

2. Generelle bestemmelser
§ 2 Folkehelse
(pbl. § 1-1)
Reguleringsplaner og byggesaker skal bidra til å fremme god folkehelse. Forslag
til reguleringsplaner skal redegjøre for

---

[d001_d001 | Side [1]]
)
§ 11.1 Støy
Alle tiltak skal planlegges slik at støyforholdene innendørs og utendørs
tilfredsstiller kravene i T-1442 tabell 2. I anleggsperioden skal støyen ikke
overstige grenseverdiene i T-1442 tabell 4 og 5.
For reguleringsplan og byggesøknader etter pbl. § 20-1 som innebærer
etablering eller utvidelse av støyfølsom bebyggelse i støyutsatte områder, skal
det utarbeides en støyfaglig utredning med avbøtende tiltak.
Innenfor BKB1 Vinterbrobakken skal:
a. Minimum 50% av antall rom til støyfølsomt

---

[d001_d001 | Side [1]]
elareal 10 818 m2
Formål Blokkbebyggelse
Reguleringsplaner under arbeid i nærheten (500 meter)
Besøk kommunens hjemmeside for mer informasjon
Id 337
Navn Detaljregulering for bevaring av deler av Ås sentralområde
Status Planlegging igangsatt
Plantype Detaljregulering
Id 305
Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum
Status Planlegging igangsatt
Plantype Detaljregulering
Id 359
Navn Detaljregulering for del av fv. 152 - Gateterminal
Status

---

[d001_d001 | Side [1]]
eligge før byggesøknad godkjennes. Dersom tiltakene utløser
krav om reguleringsplan, skal utredning følge med forslag til reguleringsplan.
§ 30 Sone for infrastruktur
(pbl. § 11-8 pkt. b)
§ 30.1 Hensettingsanlegg tog (H430-1)
Innenfor hensynssone H430_1 kreves det reguleringsplan for hensettingsanlegg
og ny østre linje. Tiltak som kan hindre byggingen av disse anleggene er ikke
tillatt.
§ 30.2 Reservevannledning (H430_2)
Innenfor hensynssone H430_2 reservevannledning er det ikke tillatt med tiltak
som kan

---

[d001_d001 | Side [1]]
r over fortau/gate.
g. Skilting over gesims og møne unngås.
h. I boligområder unngås lyskasser helt.
11

## Side 132

i. Løsfotskilt og reklame plasseres på egen grunn, tillates kun innenfor
virksomhetens åpningstid og er ikke til ulempe eller hinder for ferdsel og
tilgjengelighet.
§10.2 Belysning
Det kan kreves utarbeidet en lysplan for utendørsbelysning i forslag til
reguleringsplan.
§ 11 Miljøkvalitet og klima
(pbl. 11-9 nr. 6 og nr. 8)
§ 11.1 Støy
Alle tiltak skal planlegges slik at støyforholdene

---

[d001_d001 | Side [1]]
rbeidet), grøntarealer, eiendommer avsatt for offentlige
formål, byggegrenser etc.
REGULERINGSBESTEMMELSER
Svært mange eiendommer i Norge er regulert, enten enkeltvis
eller som en del av et område. En regulering sier noe om hva
kommunen tillater at arealene blir brukt til. Det kan gjelde
høyder, bredder, utforming, utnyttelse (for eksempel skole, bolig,
kontor etc) og andre muligheter og begrensninger.
Dersom eiendommen er regulert, vil du finne planen vedlagt.
Dersom eiendommen ikke er regulert, vil

---

[d001_d001 | Side [1]]
mt
virkningene planen har for miljø og samfunn.

## Side 121

1. Forholdet til gjeldende
reguleringsplaner og formåls-
bestemmelser
§ 1 Forholdet til reguleringsplaner
(pbl. § 1-5)
§ 1.1 Motstrid og utfylling
Ved motstrid gjelder juridisk bindende reguleringsplaner vedtatt før
kommuneplanens arealdel, foran denne planen. Dette gjelder ikke for
reguleringsplanene listet opp i § 1.2. Der det ikke er motstrid skal bestemmelser
og retningslinjer supplere gjeldende reguleringsplaner.
§ 1.2 Eldre

---

[d001_d001 | Side [1]]
sjoner, støv, luftforurensning og vannkvalitet
f. Beskyttelse av bevaringsverdig vegetasjon og jordsmonn inkludert
sikring av store trær jf. § 16.5
g. Avrenningsforhold til vannforekomster
§ 11.5 Klima og energi
Forslag til reguleringsplaner og byggesøknader skal redegjøre for:
a. tiltak som reduserer energibruk, klimagassutslipp og avfall i
anleggsperioden.
b. valg av energiløsninger og byggematerialer basert på et
klimagassregnskap.
c. mikroklimatiske forhold (sol, skygge, vind og snø).
d. klimaeffekt av

---

[d001_d001 | Side [1]]
0_1 er ikke tillatt før faren for forurenset
grunn er utredet og eventuelle avbøtende tiltak fastsatt. For sonene er det krav
om reguleringsplan.
§ 29.5 Virksomhetsbasert fare (H390_2)
Innenfor sonen H390_2 er det ikke tillatt med videre utvidelse av aktivitet, ny
aktivitet og/eller tiltak etter plan- og bygningsloven § 20-1 og § 20-4 uten at
forurensningsfare og annen fare er utredet og eventuelt avbøtende tiltak fastsatt.
Utredning skal foreligge før byggesøknad godkjennes. Dersom tiltakene utløser
krav

---

[d001_d001 | Side [1]]
turminner er ikke tillatt med mindre det foreligger dispensasjon fra
kulturminneloven.
§ 33 Gjennomføringssoner
(pbl. § 11-8, pkt. e)
§ 33.1 Krav om felles planlegging (H810_1-3)
a. Tømrernes feriehjem og Askehaugåsen (H810_1)
For Tømrernes feriehjem og Askehaugåsen skal det foreligge en
reguleringsplan for hele området før omgjøring av fritidsboliger til
helårsboliger.
b. Grenseveien (H810_2)
Det skal foreligge en reguleringsplan for hele området.
c. Holstad stasjon (H810_3)
Det skal foreligge ny felles

---

[d001_d001 | Side [1]]
ksformål i hver boenhet skal
ha vindu mot stille side. Minst ett soverom skal vende mot stille side.
b. Uteoppholdsareal skal ha tilfredsstillende støyforhold.
§ 11.2 Luftkvalitet
Alle tiltak skal planlegges slik at luftkvaliteten innendørs og utendørs blir
tilfredsstillende.
Retningslinjer:
Klima- og miljødepartementets retningslinjer for luftkvalitet i arealplanlegging (T-
1520) skal legges til grunn i vurderingen for hva som er tilfredsstillende.
§ 11.3 Høyspent
Alle tiltak skal planlegges slik at

---

[d001_d001 | Side [1]]
god folkehelse. Forslag
til reguleringsplaner skal redegjøre for virkninger for folkehelse i planområdet.
Retningslinje:
Virkemidler for å fremme folkehelsen kan blant annet være universell utforming,
miljøfaktorer som støy og luftkvalitet, andre helsefremmende faktorer som
tilgang til grøntarealer, tilrettelegging for fysisk aktivitet og solforhold,
kriminalitets- og ulykkesforebyggende tiltak for å utjevne sosiale helseforskjeller
som sosiale møteplasser.
§ 3 Universell utforming
(pbl. §§ 1-1 og 11-9 nr.

---

[d001_d001 | Side [1]]
mrådet.
c. Holstad stasjon (H810_3)
Det skal foreligge ny felles reguleringsplan for hele området før nye tiltak
etter pbl. § 1-6 kan gjennomføres. I ny reguleringsplan må det tas særlig
hensyn til Holstad stasjons kulturhistoriske verdier.
§ 33.2 Fornyelsesområde (H830_1)
a. Sørhellinga (H830_1)
I fornyelsesområdet på Sørhellinga skal utbygging ha høy områdetetthet og
større grad av flerfunksjonalitet. Det skal tas særlig hensyn til historisk
bygningsmiljø og siktlinjer.
5. Bestemmelser og

---

[d001_d001 | Side [1]]
e tillatt med bygge- og
anleggstiltak, sprengningsarbeider eller boring for energi- og andre brønner
uten at det foreligger skriftlig samtykke fra berørt samferdselsmyndighet.
§ 28 Støysoner
(pbl. § 11-8 nr. a)
§ 28.1 Skytebane H290_1
Innenfor støysonen rundt Ålerudmyra skytebane H290_1 skal det ikke etableres
ny boligbebyggelse.
§ 29 Faresoner
(pbl. § 11-8 nr. a)
§ 29.1 Ras- og skredfare (H310_1)
Innenfor hensynssone H310_1 skal det tas særlig hensyn til geoteknisk stabilitet.
I forslag til

---

[d001_d001 | Side [1]]
137

§ 15 Estetikk
(pbl. § 11-9 nr. 6)
§ 15.1 Estetiske krav til bebyggelse og anlegg
Reguleringsplaner og byggesøknader skal tilføre nye kvaliteter eller styrke
eksisterende særpreg og visuell karakter i et område.
Bebyggelse og anlegg skal utformes i samspill med omgivelsene som
sentrumsstruktur eller annen bebyggelsesstruktur, eksiterende omkringliggende
bebyggelse, landskap, terreng, vegetasjon, kultur- og naturmiljø, naturmangfold
og blågrønn struktur.
I forslag til reguleringsplaner og byggesøknader

---

[d001_d001 | Side [1]]
klimatiske forhold (sol, skygge, vind og snø).
d. klimaeffekt av arealendring på byggegrunn basert på klimaregnskap for
arealendring ved regulering av areal over 5 daa.
Retningslinje:
Fossilfrie eller utslippsfrie bygg- og anleggsplasser bør vurderes.
§ 12 Samfunnssikkerhet
(pbl. § 11-9 nr. 8)
§ 12.1 Kvikkleire
For reguleringsplaner og byggesøknader under marin grense skal faren for
områdeskred vurderes.
Retningslinje:
Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3
med

---

[d001_d001 | Side [1]]
ig teknisk og blågrønn infrastruktur.
Avtalen kan uansett gjelde forskuttering av kommunale tiltak som er nødvendige
for gjennomføringen av reguleringsplanen.
§ 5.6 Vilkår knyttet til klima og miljø
I forbindelse med feltutbygging kan det inntas klausuler om ivaretakelse av klima
og miljø (klausulene er ikke uttømmende):
a. Grønn mobilitet
b. Ivaretakelse av stedegne arter og vegetasjon
c. Energikilder og energisystemer
§ 6 Rekkefølgekrav for nye utbyggingsområder
(pbl. § 11-9 pkt. 4)
§ 6.1

---

[d001_d001 | Side [1]]
nterbrobakken skal:
a. Minimum 50% av antall rom til støyfølsomt bruksformål i hver boenhet ha
vindu mot stille side. Minst ett soverom skal vend mot stille side.
b. Uteoppholdsareal skal ha tilfredsstillende støyforhold.
I Ås sentrum langs fylkesvei 152 og jernbanen er det en avvikssone for støy. Her
kan det vurderes å tillate bygging av nye bygninger med støyfølsom bruk på
følgende vilkår:
a. Minimum 50 % av antall rom til støyfølsomt bruksformål i hver boenhet skal
ha vindu mot stille side. Minst ett

---

[d001_d001 | Side [1]]
keareal per boenhet (jf. § 14.4).
§ 14.6 Krav om utomhusplan
For reguleringsplaner og byggesøknader med mer enn 2 nye boenheter skal det
utarbeides utomhusplan i egnet målestokk som viser disponering og utforming
av omsøkt byggeområde. Planen skal vise atkomst, sammenheng med
tilgrensende bebyggelse, interne veier, gangforbindelser, parkering for sykkel og
bil, tiltak for lokal overvannshåndtering, terrengutforming, målsatte viktige
høyder, materialvalg på underlag, beplantning, trær,

---

[d001_d001 | Side [1]]
ersom det er avvik
mellom opplyst og faktisk areal, forutsatt at avviket
er på 2% eller mer og minimum 1 kvm.
Boligselgerforsikring er tegnet av eier og
egenerklæring er vedlagt. Kjøper plikter å lese
Ved beregning av et eventuelt prisavslag eller
selgers egenerklæring og er kjent med sin
erstatning må kjøper selv dekke tap/kostnader opptil
undersøkelsesplikt i henhold til avhendingsloven §
et beløp på kr 10 000 (egenandel).
3-10.
Dersom kjøper ikke er forbruker selges eiendommen
«som den er», og selgers

---

[d001_d001 | Side [1]]
selgerforsikring gir trygghet for selger og kjøper, og kan dekke feil og mangler som enten ikke er opplyst om eller det ikke var kjennskap til da
salget ble gjennomført.
Forsikringen er tegnet i Gjensidige Forsikring ASA
Forsikringsnummer 51938734
Side 6

## Side 46

Egenerklæringsskjema
Name Date
Henrik J Skjelby 2026-03-16
Identification
Henrik J Skjelby
This document contains electronic signatures using EU-compliant PAdES - PDF
Advanced Electronic Signatures (Regulation (EU) No 910/2014 (eIDAS))

##

---

[d001_d001 | Side [1]]
lengre perioder eieren ikke har bodd i boligen er det fint om du oppgir dette. Her kan du
også oppgi annen relevant informasjon om eierskapet.
Jeg har selv bodd i boligen under hele eierskapet.
Har du kjennskap til feil /t eller mangler ved borettslagets/sameiets fellesområder, som for eksempel garasje, ønsker vi at du oppgir dette når du
svarer på spørsmålene i egenerklæringen.
Informasjon om eksisterende husforsikring
If Skadeforsikring Nuf-53
Informasjon om selger
Selger
Skjelby, Henrik

---

[d001_d001 | Side [1]]
 Boligkjøperforsikring. Dette er en
rettshjelpforsikring som gir trygghet og profesjonell
juridisk hjelp dersom det oppdages uventede feil
eller mangler ved boligen de neste 5 årene.
Forsikringen har ingen egenandel.
Boligkjøperforsikring tegnes senest ved
kontraktinngåelse.
Omkostninger
Les mer om Boligkjøperforsikring i vedlagte
materiell.
3 500 000 kr (Prisantydning)
232 153 kr (Andel av fellesgjeld)
---
3 732 153 kr (Pris inkl. fellesgjeld)
Omkostninger
8 255 kr (Utlysning av forkjøpsrett)
300 kr

---

[d001_d001 | Side [1]]
sgjeld)
Omkostninger
8 255 kr (Utlysning av forkjøpsrett)
300 kr (Innmelding i USBL)
8 200 kr (HELP boligkjøperforsikring (valgfritt))

## Side 21

Slik bruksslitasje må kjøper regne med, og det kan
avdekkes enkelte forhold etter overtakelse som
nødvendiggjør utbedringer. Normal slitasje og skader
som nødvendiggjør utbedring, er innenfor hva kjøper
må forvente og vil ikke utgjøre en mangel.
Boligselgerforsikring
Boligen kan ha en mangel dersom det er avvik
mellom opplyst og faktisk areal, forutsatt at

---

[d001_d001 | Side [1]]
 hva som kommer
5 år etter overtakelse. Forsikringen betales som del av først. Meglerforetaket mottar kr 5 100/4 900/5 400 i
oppgjøret ved boligkjøpet. PLUSSdekningen fornyes årlig kostnadsgodtgjørelse, avhengig av boligtype, samt et
ved faktura fra HELP. tillegg på kr 1 000 ved salg av PLUSS.
Vi
unner
ingen å stå
alene
Har du spørsmål? Kontakt HELP på help.no/minside,
telefon 22 99 99 99 eller epost post@help.no
Vi tar forbehold om pris- og vilkårsendringer. Hvis premien ikke er innbetalt ved overtakelse,

---

[d001_d001 | Side [1]]
ietaker flytter ut. Alle leierettigheter faller bort når
andelen skifter eier.
Det er kjøpers plikt å sette seg inn i reglene for
utleie i borettslag. For mer detaljert informasjon om
Boligkjøperforsikring
utleie av andelsleiligheter kan du lese
borettslagsloven § 5-3 til 5-10, spesielt § 5-5 til 5-6
som omhandler vilkår for bruksoverlating: https://
Det gjøres oppmerksom på at kjøper har anledning
lovdata.no/lov/2003-06-06-39/§5-3
til å tegne Boligkjøperforsikring. Dette er en
rettshjelpforsikring som gir

---

[d001_d001 | Side [1]]
deforsikring Nuf-53
Informasjon om selger
Selger
Skjelby, Henrik Johannessen
Forbehold
Selger tar spesifikt forbehold om feil og mangler som er beskrevet i egenerklæringsskjemaet.
Boligkjøper anses å kjenne til forholdene som er omtalt i dette egenerklæringsskjemaet. Disse forholdene kan ikke gjøres gjeldende som feil eller mangler
senere.
Boligkjøper oppfordres til å selv undersøke eiendommen grundig.
Side 1

## Side 41

Våtrom
1 Har det vært feil på bad, vaskerom eller toalettrom?
2 0
Ja Nei, ikke som

---

[d001_d001 | Side [1]]
aget er involvert i konflikter av noe slag?
0 2
Ja Nei, ikke som jeg kjenner til
Andre opplysninger
31 Har ufaglærte utført arbeid som normalt bør utføres av faglærte? Du trenger ikke gjenta noe du allerede har nevnt.
0 2
Ja Nei, ikke som jeg kjenner til
32 Har du andre opplysninger om boligen eller eiendommen utover det du har svart?
0 2
Ja Nei, ikke som jeg kjenner til
Boligselgerforsikring
Boligen selges med boligselgerforsikring
En boligselgerforsikring gir trygghet for selger og kjøper, og kan dekke

---

[d001_d001 | Side [1]]
ttert advokattilbud
i og utenfor domstolene. Få advokathjelp når du
trenger det fra Norges største advokatmiljø for
privatpersoner. PLUSS kan bare tegnes samtidig med
boligkjøperforsikringen, og koster kun kr 2 800 i tillegg.
PLUSS fornyes årlig.
Boligkjøperforsikring tegnes hos eiendomsmegler senest Egenandel kr 4 000 påløper ved takst, tvist eller 10
ved kontraktsignering og gir rett til advokathjelp inntil timer advokatbistand, avhengig av hva som kommer
5 år etter overtakelse. Forsikringen betales som

---

[d001_d001 | Side [1]]
old om endringer i offentlige og
• Du beholder alle dine plikter overfor borettslaget private gebyrer.
selv om leiligheten er utleid
• Du er ansvarlig for at husordensreglene overholdes Selger er selv ansvarlig for følgende gebyr:
av leietaker
• Du må holde styret orientert om hvor du kan nås 545 kr (Panterett med urådighet)
så lenge leiligheten er utleid 6 725 kr (Eierskiftegebyr)
Ved brudd på utleiereglene kan borettslaget kreve at
leietaker flytter ut. Alle leierettigheter faller bort når
andelen

---

[d001_d001 | Side [1]]
 Electronic Signatures (Regulation (EU) No 910/2014 (eIDAS))

## Side 47

Egenerklæringsskjema
Signed by:
Henrik J Skjelby 16/03-2026 BankID OIDC
19:33:52 High

## Side 48

Informasjon fra forretningsfører
Når selger har iverksatt et salg gjennom PROPR.no, hentes det
automatisk inn opplysninger fra forretningsfører. Disse
opplysningene inneholder normalt:
• Infobrev fra forretningsfører, som ofte oppsummerer de
viktigste opplysningene i punktene under. OBS: Det er ingen
garanti for at forretningsfører har

---

[d001_d001 | Side [1]]
ostnadene nede, holder
borettslaget årlige dugnader, ofte vår og høst.
Dugnadene er effektivt organisert og skaper et
hyggelig fellesskap.
Annet
Medfølger Om du ikke har mulighet til å komme på visning,
holder vi gjerne privatvisning. Ta kontakt, så finner vi
en tid. Vi har tegnet boligselgerforsikring, og
anbefaler også kjøper å tegne boligkjøperforsikring.
Hvitevarer (komfyr, platetopp, oppvaskmaskin,
kjøleskap)
Felleskostnader inkluderer
Lysekrone og taklamper
Kommunale avgifter, Tv/bredbånd,

---

[d001_d001 | Side [1]]


(Ingen tekst ekstrahert)

## Side 158

Boligkjøperforsikring
• Advokathjelp ved boligkjøpet og i 5 år fremover. Andelsbolig/aksjeleilighet: Kr 8 200
• Er kjøpers motvekt til selgers boligselgerforsikring. Selveierleilighet/rekkehus: Kr 10 900
• Gir deg advokathjelp hele veien til rettskraftig dom, Ene-/tomannsbolig, tomt: Kr 15 900
om nødvendig.
Fritidsbolig følger øvrige boligtyper.
Boligkjøperforsikring PLUSS PLUSS dekker også disse rettsområdene
• Samme dekning som HELP Boligkjøperforsikring. •

---

[d001_d001 | Side [1]]
et er behov for avklaringer, anbefaler vi at
kjøper rådfører seg med en bygningssakyndig før det
Forbehold
legges inn bud.
Hvis eiendommen ikke er i samsvar med det
kjøperen må kunne forvente ut ifra alder, type og
synlig tilstand, kan det være en mangel. Det samme
Alle interessenter oppfordres til å sette seg inn i
gjelder hvis det er holdt tilbake eller gitt uriktige
dokumenter som kan være interessante for
opplysninger om eiendommen og dette har virket
handelen, slik som reguleringskart med
inn på

---

[d001_d001 | Side [1]]
r spørsmål vedrørende nåværende eller
Salgsoppgaven er basert på selgers opplysninger fremtidig fellesgjeld, reguleringer eller offentlige
gitt til takstmann samt opplysninger innhentet fra planer henvises det til vedlagte dokumenter.
kommunen, evnt. forretningsfører og andre
tilgjengelige kilder. Interessenter oppfordres til å
undersøke eiendommen godt, gjerne sammen med
sakkyndig, før bud inngis.
Det er ikke kontrollert om tomtegrenser stemmer
med de grenser/gjerder/ beplantning som fysisk

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Planlagt rørfornying med betydelig kostnadsøkning for andelseiere. Borettslaget har mottatt anbefaling om å fornye rørsystemet, og styret planlegger å ta opp lån på ca. kr 3 000 000 over 30 år. Dette vil medføre en økning i felleskostnadene på ca. kr 435 per måned per andelseier.",
      "evidence": [
        "For å finansiere prosjektet er det lagt til grunn lån i størrelsesorden kr 3.000.000 over 30 år med en rente på 5,5 %. Dette vil medføre en økning i felleskostnadene for hver andelseier på ca kr 435 pr måned.",
        "Som tidligere omtalt i årsberetningene, har borettslaget mottatt anbefaling fra fagpersonell tilknyttet USBL om å fornye rørsystemet.",
        "Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.",
        "Styret ønsker andelshavernes tilslutning til å inngå kontrakt om rørfornying med TT Teknikk AS."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Eksisterende høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 232 153, og borettslagets totale langsiktige gjeld er betydelig (sum gjeld kr 7 981 800). I tillegg er det registrert pantstillelser på kr 7 934 992. Fellesgjelden vil øke ytterligere ved planlagt rørfornying.",
      "evidence": [
        "232 153 kr (Andel av fellesgjeld)",
        "Pantstillelser 13 7 934 992 8 452 026",
        "Sum gjeld 7 981 800 8 629 919",
        "3 732 153 kr (Pris inkl. fellesgjeld)"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Pantedokument på kr 2 850 000 registrert på andelen med DNB Bank ASA og DNB Boligkreditt AS som panthavere. Dette er selgers eksisterende lån som må innfris ved salg, men representerer en heftelse på andelen.",
      "evidence": [
        "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006 PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551",
        "ELEKTRONISK INNSENDT"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Fellesobligasjon for borettslagsinnskudd fra 1973 på kr 1 200 000 er tinglyst på eiendommen. Selv om dette er en eldre heftelse, er den fortsatt registrert i grunnboken og kan ha betydning for prioritetsrekkefølgen.",
      "evidence": [
        "1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000 Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE LØPENR: 1454189",
        "Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten sin grunnboksutskrift."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R5",
      "description": "Manglende byggetegninger for boligblokken. Det foreligger ikke godkjente og byggemeldte tegninger for bygget, noe som gjør det vanskelig å verifisere lovlighet av romfordeling og areal.",
      "evidence": [
        "Det foreligger ikke tegninger for bygget. Det er ikke fremlagt tegninger for bygget.",
        "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R6",
      "description": "Badet har TG2 (vesentlige avvik) basert på alder. Mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Badet ble renovert i 2021, men det er allerede gitt TG2 basert på aldersvurdering.",
      "evidence": [
        "Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Det er nå ingen symptomer på funksjonssvekkelse, men...",
        "Årstall: 2021 Kilde: Tidligere salgsoppgaver",
        "Aktuell byggeforskrift er teknisk forskrift 2017. Dokumentasjon: ingen dokumentasjon."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R7",
      "description": "Boligblokken er fra 1970 og er bygget etter datidens byggeskikk og krav, ikke dagens krav. Dette innebærer risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.",
      "evidence": [
        "Boligbygg med flere boenheter - Byggeår: 1970",
        "Eldre hus/blokker er bygget etter datidens byggeskikk og krav, ikke de krav som gjelder i dag.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Begrenset avsetningsfond i borettslaget. Borettslagets bankkonto for avsetning har kun kr 108 849,61 per 31.12.2024, noe som er lavt sett i forhold til borettslagets størrelse og kommende vedlikeholdsbehov (rørfornying). Disponible midler totalt er kr 343 345.",
      "evidence": [
        "Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.",
        "Disponible midler 343 345 270 531",
        "Borettslaget består av 40 andeler."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Reguleringsplaner under arbeid i nærheten av eiendommen (innenfor 500 meter). Flere detaljreguleringsplaner er under planlegging, inkludert for Ås sentralområde og gang-/sykkelvei langs fylkesvei 152. Dette kan påvirke bomiljøet og trafikksituasjonen.",
      "evidence": [
        "Reguleringsplaner under arbeid i nærheten (500 meter)",
        "Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt",
        "Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt",
        "Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status..."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R10",
      "description": "Utleie av andelsboligen er regulert og krever godkjenning. Kjøper som ønsker å leie ut boligen må forholde seg til strenge regler i borettslagsloven og borettslagets vedtekter, noe som begrenser fleksibiliteten.",
      "evidence": [
        "Utleie reguleres av USBL og borettslagets vedtekter og krever...",
        "Du beholder alle dine plikter overfor borettslaget selv om leiligheten er utleid",
        "Ved brudd på utleiereglene kan borettslaget kreve at leietaker flytter ut. Alle leierettigheter faller bort når andelen skifter eier."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Obligatorisk medlemskap i USBL for alle medeiere. Alle medeiere må tegne individuelle medlemskap i USBL (kr 300 per år) for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke registrering av eierskap.",
      "evidence": [
        "Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e). Les mer om innmelding i USBL her: https://www.usbl.no/medlemskap/bli-medlem",
        "300 kr (Innmelding i USBL)"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Tilstandsrapporten er basert på visuell observasjon (undersøkelsesnivå 1) og gir ingen garanti mot skjulte feil. Takstmannen har heller ikke undersøkt for skjeggkre/sølvkre, og rapporten dekker ikke alle bygningsdeler.",
      "evidence": [
        "Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og...)",
        "Takstmannen har ikke gjort undersøkelser rundt skjeggkre/sølvkre.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Prioritetsbestemmelse fra 1985 tinglyst på eiendommen. Det er registrert en prioritetsbestemmelse som har veket for en obligasjon fra 1985. Denne heftelsen er av historisk karakter, men er fortsatt registrert i grunnboken.",
      "evidence": [
        "1985/204808-1/6 10.05.1985 ** PRIORITETSBESTEMMELSE VEKET FOR: OBLIGASJON 1985/203642-1"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R14",
      "description": "Tomtegrenser er ikke kontrollert. Det er ikke verifisert at tomtegrenser stemmer med de grenser, gjerder og beplantning som fysisk eksisterer på eiendommen, noe som kan medføre nabokonflikter eller uklarheter om eiendomsgrenser.",
      "evidence": [
        "Det er ikke kontrollert om tomtegrenser stemmer med de grenser/gjerder/beplantning som fysisk..."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Kvikkleirerisiko i området. Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Ås kommune er et område med kjent kvikkleireproblematikk.",
      "evidence": [
        "§ 12.1 Kvikkleire For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.",
        "Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    }
  ],
  "re_retrieval_queries": [
    "rørfornying kostnad tidspunkt gjennomføring 2025 TT Teknikk",
    "bad TG2 tilstandsgrad membran tettesjikt dokumentasjon 2021",
    "fellesgjeld lån rente avdrag borettslag note langsiktig gjeld",
    "kvikkleire geoteknisk rapport eiendommen Lyngveien Ås",
    "prioritetsbestemmelse 1985 obligasjon historisk heftelse grunnbok",
    "borettslaget forsikring bygningsforsikring If Skadeforsikring",
    "forkjøpsrett USBL tidsfrist prosedyre",
    "elektrisk anlegg el-tilsyn tilstandsrapport TG"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rørfornying (0.97 → 0.99):** Svært godt dokumentert. Flere dokumentchunker bekrefter lånebeløp (kr 3 000 000), rente (5,5 %), løpetid (30 år), kostnadsøkning (kr 435/mnd/andelseier) og leverandør (TT Teknikk AS). Confidence økes til 0.99.\n\n**R2 – Høy fellesgjeld (0.95 → 0.97):** Godt dokumentert med konkrete tall fra balansen. Andel fellesgjeld kr 232 153, sum gjeld kr 7 981 800, pantstillelser kr 7 934 992. Borettslaget har 40 andeler. Confidence økes marginalt til 0.97.\n\n**R3 – Pantedokument DNB (0.95 → 0.97):** Direkte bekreftet i grunnboksutskriften med eksakt beløp, dato og panthavere. Confidence økes til 0.97.\n\n**R4 – Fellesobligasjon 1973 (0.85 → 0.72):** Heftelsen er bekreftet i grunnboken, men dokumentene selv antyder at slike eldre dokumenter «antas å kun ha historisk betydning». Dette svekker risikoen som en reell, praktisk risiko. Confidence nedjusteres til 0.72.\n\n**R5 – Manglende byggetegninger (0.92 → 0.95):** Direkte bekreftet i tilstandsrapporten. Manglende tegninger er en konkret og verifiserbar risiko som påvirker muligheten til å kontrollere P-ROM og lovlighet. Confidence økes til 0.95.\n\n**R6 – Bad TG2 (0.90 → 0.92):** Godt dokumentert. TG2 er gitt basert på alder (renovert 2021), og det mangler dokumentasjon på faglig utførelse. Confidence økes marginalt til 0.92.\n\n**R7 – Byggeår 1970 (0.88 → 0.90):** Godt dokumentert. Byggeår 1970 bekreftet, og tilstandsrapporten eksplisitt nevner at eldre bygg er bygget etter datidens krav. Confidence økes til 0.90.\n\n**R8 – Begrenset avsetningsfond (0.85 → 0.88):** Godt dokumentert. Avsetningskonto kr 108 849,61 er lav for et borettslag med 40 andeler og forestående rørfornying til kr 3 000 000. Disponible midler totalt kr 343 345 er også begrenset. Confidence økes til 0.88.\n\n**R9 – Reguleringsplaner (0.78 → 0.78):** Bekreftet i dokumentene. Tre reguleringsplaner under arbeid innenfor 500 meter. Usikkerheten er knyttet til faktisk påvirkning på bomiljøet, som ikke er nærmere spesifisert. Confidence beholdes på 0.78.\n\n**R10 – Utleieregler (0.82 → 0.85):** Godt dokumentert. Utleie krever godkjenning, og det er klare konsekvenser ved brudd. Confidence økes til 0.85.\n\n**R11 – USBL-medlemskap (0.80 → 0.82):** Bekreftet i dokumentene. Kravet er klart og kan forsinke registrering. Confidence økes marginalt til 0.82.\n\n**R12 – Begrenset tilstandsrapport (0.88 → 0.90):** Godt dokumentert. Undersøkelsesnivå 1, ingen skjeggkre-undersøkelse, og eksplisitt forbehold om skjulte feil. Confidence økes til 0.90.\n\n**R13 – Prioritetsbestemmelse 1985 (0.72 → 0.55):** Heftelsen er bekreftet i grunnboken, men det er ingen ytterligere informasjon om hva obligasjonen gjelder eller om den fortsatt er aktiv. Dokumentene antyder at slike eldre heftelser kan ha kun historisk betydning. Confidence nedjusteres til 0.55.\n\n**R14 – Tomtegrenser ikke kontrollert (0.75 → 0.72):** Bekreftet i salgsoppgaven. For en borettslagsandel i en blokk er dette en noe mindre praktisk risiko enn for en enebolig, men det er likevel relevant. Confidence nedjusteres marginalt til 0.72.\n\n**R15 – Kvikkleire (0.65 → 0.60):** Kommuneplanens bestemmelse er bekreftet, men det er ingen spesifikk vurdering av om eiendommen faktisk ligger under marin grense eller om det er gjort geotekniske undersøkelser. Risikoen er generell og ikke spesifikt knyttet til denne eiendommen. Confidence nedjusteres til 0.60.\n\n**Manglende risikoer identifisert:**\n1. **Forkjøpsrett USBL** – Kostnaden for utlysning av forkjøpsrett (kr 8 255) er nevnt, og USBL-medlemmer har forkjøpsrett. Dette kan forsinke overtakelse og skape usikkerhet for kjøper.\n2. **Elektrisk anlegg** – Tilstandsrapporten nevner at bygningssakkyndig gir forenklet vurdering av elektriske installasjoner dersom det er mer enn 5 år siden sist el-tilsyn. For en blokk fra 1970 er dette relevant.\n3. **Borettslagets forsikring** – Bygningsforsikring dekker fellesarealer, men det er uklart hva som dekkes inne i leiligheten. Kjøper bør tegne innboforsikring.\n4. **Rørfornying allerede planlagt til høsten 2025** – Dokumentet nevner at rørfornying er planlagt gjennomført høsten 2025, noe som betyr at arbeidet kan pågå rundt overtakelse og medføre praktiske ulemper.\n"
}

## Raw Response
```json
{
  "id": "msg_014EuKXfdu5edR5zHQP8pTHT",
  "container": null,
  "content": [
    {
      "id": "toolu_01JqynCXKCCpL3v4ajELqpr6",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Planlagt rørfornying med betydelig kostnadsøkning for andelseiere. Borettslaget har mottatt anbefaling om å fornye rørsystemet, og styret planlegger å ta opp lån på ca. kr 3 000 000 over 30 år. Dette vil medføre en økning i felleskostnadene på ca. kr 435 per måned per andelseier.",
            "evidence": [
              "For å finansiere prosjektet er det lagt til grunn lån i størrelsesorden kr 3.000.000 over 30 år med en rente på 5,5 %. Dette vil medføre en økning i felleskostnadene for hver andelseier på ca kr 435 pr måned.",
              "Som tidligere omtalt i årsberetningene, har borettslaget mottatt anbefaling fra fagpersonell tilknyttet USBL om å fornye rørsystemet.",
              "Selv om det ligger innenfor styrets ansvar å beslutte tiltak for forsvarlig vedlikehold, ønsker styret generalforsamlingens tilslutning til prosjektet. Dette fordi prosjektet er av et omfang som krever låneopptak, som igjen vil medføre økte felleskostnader.",
              "Styret ønsker andelshavernes tilslutning til å inngå kontrakt om rørfornying med TT Teknikk AS."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Eksisterende høy fellesgjeld i borettslaget. Andel fellesgjeld er kr 232 153, og borettslagets totale langsiktige gjeld er betydelig (sum gjeld kr 7 981 800). I tillegg er det registrert pantstillelser på kr 7 934 992. Fellesgjelden vil øke ytterligere ved planlagt rørfornying.",
            "evidence": [
              "232 153 kr (Andel av fellesgjeld)",
              "Pantstillelser 13 7 934 992 8 452 026",
              "Sum gjeld 7 981 800 8 629 919",
              "3 732 153 kr (Pris inkl. fellesgjeld)"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Pantedokument på kr 2 850 000 registrert på andelen med DNB Bank ASA og DNB Boligkreditt AS som panthavere. Dette er selgers eksisterende lån som må innfris ved salg, men representerer en heftelse på andelen.",
            "evidence": [
              "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 09.10 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA ORG.NR: 984 851 006 PANTHAVER: DNB BOLIGKREDITT AS ORG.NR: 985 621 551",
              "ELEKTRONISK INNSENDT"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Fellesobligasjon for borettslagsinnskudd fra 1973 på kr 1 200 000 er tinglyst på eiendommen. Selv om dette er en eldre heftelse, er den fortsatt registrert i grunnboken og kan ha betydning for prioritetsrekkefølgen.",
            "evidence": [
              "1973/201031-1/6 19.02.1973 FELLESOBL. FOR BOR.INNSK. Beløp: NOK 1 200 000 Panthaver: ANDELSEIERNE I BOR LAGET V/BOR LAGETS STYRE LØPENR: 1454189",
              "Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning, eller som vedrører en matrikkelenhets grenser og areal, er ikke overført til denne matrikkelenheten sin grunnboksutskrift."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R5",
            "description": "Manglende byggetegninger for boligblokken. Det foreligger ikke godkjente og byggemeldte tegninger for bygget, noe som gjør det vanskelig å verifisere lovlighet av romfordeling og areal.",
            "evidence": [
              "Det foreligger ikke tegninger for bygget. Det er ikke fremlagt tegninger for bygget.",
              "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R6",
            "description": "Badet har TG2 (vesentlige avvik) basert på alder. Mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Badet ble renovert i 2021, men det er allerede gitt TG2 basert på aldersvurdering.",
            "evidence": [
              "Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er passert. Det er nå ingen symptomer på funksjonssvekkelse, men...",
              "Årstall: 2021 Kilde: Tidligere salgsoppgaver",
              "Aktuell byggeforskrift er teknisk forskrift 2017. Dokumentasjon: ingen dokumentasjon."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R7",
            "description": "Boligblokken er fra 1970 og er bygget etter datidens byggeskikk og krav, ikke dagens krav. Dette innebærer risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.",
            "evidence": [
              "Boligbygg med flere boenheter - Byggeår: 1970",
              "Eldre hus/blokker er bygget etter datidens byggeskikk og krav, ikke de krav som gjelder i dag.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Begrenset avsetningsfond i borettslaget. Borettslagets bankkonto for avsetning har kun kr 108 849,61 per 31.12.2024, noe som er lavt sett i forhold til borettslagets størrelse og kommende vedlikeholdsbehov (rørfornying). Disponible midler totalt er kr 343 345.",
            "evidence": [
              "Borettslaget har en egen bankkonto for avsetning, med en saldo pr 31.12.2024 på kr 108 849,61 inkl. renter.",
              "Disponible midler 343 345 270 531",
              "Borettslaget består av 40 andeler."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Reguleringsplaner under arbeid i nærheten av eiendommen (innenfor 500 meter). Flere detaljreguleringsplaner er under planlegging, inkludert for Ås sentralområde og gang-/sykkelvei langs fylkesvei 152. Dette kan påvirke bomiljøet og trafikksituasjonen.",
            "evidence": [
              "Reguleringsplaner under arbeid i nærheten (500 meter)",
              "Id 337 Navn Detaljregulering for bevaring av deler av Ås sentralområde Status Planlegging igangsatt",
              "Id 305 Navn Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum Status Planlegging igangsatt",
              "Id 359 Navn Detaljregulering for del av fv. 152 - Gateterminal Status..."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R10",
            "description": "Utleie av andelsboligen er regulert og krever godkjenning. Kjøper som ønsker å leie ut boligen må forholde seg til strenge regler i borettslagsloven og borettslagets vedtekter, noe som begrenser fleksibiliteten.",
            "evidence": [
              "Utleie reguleres av USBL og borettslagets vedtekter og krever...",
              "Du beholder alle dine plikter overfor borettslaget selv om leiligheten er utleid",
              "Ved brudd på utleiereglene kan borettslaget kreve at leietaker flytter ut. Alle leierettigheter faller bort når andelen skifter eier."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Obligatorisk medlemskap i USBL for alle medeiere. Alle medeiere må tegne individuelle medlemskap i USBL (kr 300 per år) for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke registrering av eierskap.",
            "evidence": [
              "Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e). Les mer om innmelding i USBL her: https://www.usbl.no/medlemskap/bli-medlem",
              "300 kr (Innmelding i USBL)"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Tilstandsrapporten er basert på visuell observasjon (undersøkelsesnivå 1) og gir ingen garanti mot skjulte feil. Takstmannen har heller ikke undersøkt for skjeggkre/sølvkre, og rapporten dekker ikke alle bygningsdeler.",
            "evidence": [
              "Rapporten baseres på undersøkelsesnivå 1 med få unntak (våtrom og...)",
              "Takstmannen har ikke gjort undersøkelser rundt skjeggkre/sølvkre.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Prioritetsbestemmelse fra 1985 tinglyst på eiendommen. Det er registrert en prioritetsbestemmelse som har veket for en obligasjon fra 1985. Denne heftelsen er av historisk karakter, men er fortsatt registrert i grunnboken.",
            "evidence": [
              "1985/204808-1/6 10.05.1985 ** PRIORITETSBESTEMMELSE VEKET FOR: OBLIGASJON 1985/203642-1"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R14",
            "description": "Tomtegrenser er ikke kontrollert. Det er ikke verifisert at tomtegrenser stemmer med de grenser, gjerder og beplantning som fysisk eksisterer på eiendommen, noe som kan medføre nabokonflikter eller uklarheter om eiendomsgrenser.",
            "evidence": [
              "Det er ikke kontrollert om tomtegrenser stemmer med de grenser/gjerder/beplantning som fysisk..."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Kvikkleirerisiko i området. Kommuneplanens bestemmelser krever at faren for områdeskred vurderes for reguleringsplaner og byggesøknader under marin grense. Ås kommune er et område med kjent kvikkleireproblematikk.",
            "evidence": [
              "§ 12.1 Kvikkleire For reguleringsplaner og byggesøknader under marin grense skal faren for områdeskred vurderes.",
              "Faren for områdeskred vurderes i henhold til krav i pbl. § 28-1 og TEK17 § 7-3"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          }
        ],
        "re_retrieval_queries": [
          "rørfornying kostnad tidspunkt gjennomføring 2025 TT Teknikk",
          "bad TG2 tilstandsgrad membran tettesjikt dokumentasjon 2021",
          "fellesgjeld lån rente avdrag borettslag note langsiktig gjeld",
          "kvikkleire geoteknisk rapport eiendommen Lyngveien Ås",
          "prioritetsbestemmelse 1985 obligasjon historisk heftelse grunnbok",
          "borettslaget forsikring bygningsforsikring If Skadeforsikring",
          "forkjøpsrett USBL tidsfrist prosedyre",
          "elektrisk anlegg el-tilsyn tilstandsrapport TG"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Rørfornying (0.97 → 0.99):** Svært godt dokumentert. Flere dokumentchunker bekrefter lånebeløp (kr 3 000 000), rente (5,5 %), løpetid (30 år), kostnadsøkning (kr 435/mnd/andelseier) og leverandør (TT Teknikk AS). Confidence økes til 0.99.\n\n**R2 – Høy fellesgjeld (0.95 → 0.97):** Godt dokumentert med konkrete tall fra balansen. Andel fellesgjeld kr 232 153, sum gjeld kr 7 981 800, pantstillelser kr 7 934 992. Borettslaget har 40 andeler. Confidence økes marginalt til 0.97.\n\n**R3 – Pantedokument DNB (0.95 → 0.97):** Direkte bekreftet i grunnboksutskriften med eksakt beløp, dato og panthavere. Confidence økes til 0.97.\n\n**R4 – Fellesobligasjon 1973 (0.85 → 0.72):** Heftelsen er bekreftet i grunnboken, men dokumentene selv antyder at slike eldre dokumenter «antas å kun ha historisk betydning». Dette svekker risikoen som en reell, praktisk risiko. Confidence nedjusteres til 0.72.\n\n**R5 – Manglende byggetegninger (0.92 → 0.95):** Direkte bekreftet i tilstandsrapporten. Manglende tegninger er en konkret og verifiserbar risiko som påvirker muligheten til å kontrollere P-ROM og lovlighet. Confidence økes til 0.95.\n\n**R6 – Bad TG2 (0.90 → 0.92):** Godt dokumentert. TG2 er gitt basert på alder (renovert 2021), og det mangler dokumentasjon på faglig utførelse. Confidence økes marginalt til 0.92.\n\n**R7 – Byggeår 1970 (0.88 → 0.90):** Godt dokumentert. Byggeår 1970 bekreftet, og tilstandsrapporten eksplisitt nevner at eldre bygg er bygget etter datidens krav. Confidence økes til 0.90.\n\n**R8 – Begrenset avsetningsfond (0.85 → 0.88):** Godt dokumentert. Avsetningskonto kr 108 849,61 er lav for et borettslag med 40 andeler og forestående rørfornying til kr 3 000 000. Disponible midler totalt kr 343 345 er også begrenset. Confidence økes til 0.88.\n\n**R9 – Reguleringsplaner (0.78 → 0.78):** Bekreftet i dokumentene. Tre reguleringsplaner under arbeid innenfor 500 meter. Usikkerheten er knyttet til faktisk påvirkning på bomiljøet, som ikke er nærmere spesifisert. Confidence beholdes på 0.78.\n\n**R10 – Utleieregler (0.82 → 0.85):** Godt dokumentert. Utleie krever godkjenning, og det er klare konsekvenser ved brudd. Confidence økes til 0.85.\n\n**R11 – USBL-medlemskap (0.80 → 0.82):** Bekreftet i dokumentene. Kravet er klart og kan forsinke registrering. Confidence økes marginalt til 0.82.\n\n**R12 – Begrenset tilstandsrapport (0.88 → 0.90):** Godt dokumentert. Undersøkelsesnivå 1, ingen skjeggkre-undersøkelse, og eksplisitt forbehold om skjulte feil. Confidence økes til 0.90.\n\n**R13 – Prioritetsbestemmelse 1985 (0.72 → 0.55):** Heftelsen er bekreftet i grunnboken, men det er ingen ytterligere informasjon om hva obligasjonen gjelder eller om den fortsatt er aktiv. Dokumentene antyder at slike eldre heftelser kan ha kun historisk betydning. Confidence nedjusteres til 0.55.\n\n**R14 – Tomtegrenser ikke kontrollert (0.75 → 0.72):** Bekreftet i salgsoppgaven. For en borettslagsandel i en blokk er dette en noe mindre praktisk risiko enn for en enebolig, men det er likevel relevant. Confidence nedjusteres marginalt til 0.72.\n\n**R15 – Kvikkleire (0.65 → 0.60):** Kommuneplanens bestemmelse er bekreftet, men det er ingen spesifikk vurdering av om eiendommen faktisk ligger under marin grense eller om det er gjort geotekniske undersøkelser. Risikoen er generell og ikke spesifikt knyttet til denne eiendommen. Confidence nedjusteres til 0.60.\n\n**Manglende risikoer identifisert:**\n1. **Forkjøpsrett USBL** – Kostnaden for utlysning av forkjøpsrett (kr 8 255) er nevnt, og USBL-medlemmer har forkjøpsrett. Dette kan forsinke overtakelse og skape usikkerhet for kjøper.\n2. **Elektrisk anlegg** – Tilstandsrapporten nevner at bygningssakkyndig gir forenklet vurdering av elektriske installasjoner dersom det er mer enn 5 år siden sist el-tilsyn. For en blokk fra 1970 er dette relevant.\n3. **Borettslagets forsikring** – Bygningsforsikring dekker fellesarealer, men det er uklart hva som dekkes inne i leiligheten. Kjøper bør tegne innboforsikring.\n4. **Rørfornying allerede planlagt til høsten 2025** – Dokumentet nevner at rørfornying er planlagt gjennomført høsten 2025, noe som betyr at arbeidet kan pågå rundt overtakelse og medføre praktiske ulemper.\n"
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
    "input_tokens": 24316,
    "output_tokens": 5651,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
