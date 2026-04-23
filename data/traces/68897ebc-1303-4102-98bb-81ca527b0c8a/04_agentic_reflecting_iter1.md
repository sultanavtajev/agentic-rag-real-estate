# Trace: agentic_reflecting_iter1
- **Run ID:** 68897ebc-1303-4102-98bb-81ca527b0c8a
- **Tidspunkt:** 2026-03-23T11:09:25.147120+00:00
- **Varighet:** 105.26s
- **Input tokens:** 24245
- **Output tokens:** 5418

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
Risiko 1: Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for at skjulte feil og mangler ikke er opplyst om.
  Confidence: 0.95
  Evidens: Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.

Risiko 2: Manglende godkjent branndør etter dagens krav (EI30). Dette er et avvik med TG2 og kan utgjøre en sikkerhetsrisiko samt medføre krav om utbedring.
  Confidence: 0.95
  Evidens: Utvendig ‑ Dører | Det er ikke godkjent branndør etter dagens krav. Etter 2010 er det krav om EI30, som står for integritet (E), isolasjon (I) og 30 minutter

Risiko 3: Kun kullfilterventilator på kjøkkenet uten mekanisk/forsert avtrekk fra kokesonen. Dette er et avvik (TG2) som kan gi dårlig inneklima og manglende oppfyllelse av ventilasjonskrav.
  Confidence: 0.92
  Evidens: Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen.; 2 etasje Stue/ kjøkken ‑ Avtrekk | Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen.

Risiko 4: Gulvskjevheter med TG3 – det er målt 38 mm høydeforskjell gjennom hele rommet, noe som overstiger godkjente måleavvik (maks 30 mm). Dette er et vesentlig avvik som kan kreve kostbare utbedringstiltak.
  Confidence: 0.95
  Evidens: Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik. Det er målt 38 mm. gjennom hele rommet.; høydeforskjell på over 30 mm gjennom hele rommet.

Risiko 5: Elektrisk anlegg uten el-tilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll. Anlegget ble sist rehabilitert i 2017, og det er usikkerhet knyttet til anleggets tilstand og sikkerhet.
  Confidence: 0.9
  Evidens: 1. Foreligger det eltilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll? Nei; 2017 Ingen opplysninger er gitt om når skapet sist gang ble rehabilitert, men AMS måler ble montert i sikringsskapet i 2017.

Risiko 6: Ikke montert automatisk vannstopperventil (automatisk vannstopper) eller komfyrvakt. Dette øker risikoen for vannskader og brann.
  Confidence: 0.9
  Evidens: Det er ikke montert automatisk vann stopper eller komfyrvakt.

Risiko 7: Sameiet har et gammelt varmtvannsanlegg som avventes med tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i nær fremtid. Dette kan medføre økte felleskostnader.
  Confidence: 0.92
  Evidens: Sameiet har imidlertid bl.a. et gammelt varmtvannsanlegg, hvor vi nå avventer tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i året som kommer.

Risiko 8: Felleskostnadene er vedtatt økt med 10% fra 1. mars. I tillegg er det budsjettert med underskudd for 2025 på kr 330. Dette kan indikere ytterligere fremtidige kostnadsøkninger for kjøper.
  Confidence: 0.9
  Evidens: Svar fra styre 12.01.2026: Når det gjelder felleskostnader er vedtatt en økning på 10% med virkning fra 1 mars; for 2025 er det budsjettert med et mindre underskudd, både i driftsbudsjettet og i årsresultatet, på ‑330.

Risiko 9: Kommunalt pålegg om utbedring som sameiet står overfor. Dette kan medføre ekstraordinære kostnader og potensielt økte felleskostnader for seksjonseiere.
  Confidence: 0.85
  Evidens: Av større kostnader sameiet står overfor har vi et kommunalt pålegg om; vært nødvendig på bakgrunn av bl.a. betydelige kostnadsøkninger på kommunale utgifter, samt økte kostnader til løpende vedlikehold.

Risiko 10: Energikarakter F (rød energimerking) på eiendommen. Dette indikerer høyt energiforbruk og kan medføre høye energikostnader for kjøper.
  Confidence: 0.95
  Evidens: Energikarakter: F; Energifarge: Rød

Risiko 11: Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, og kjøper har ikke informasjon om radonverdier i boligen.
  Confidence: 0.8
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette i forbindelse med salgsoppdrag.

Risiko 12: Legalpant til kommunen og sameiet har prioritet foran tinglyste lån. Kjøper overtar disse heftelsene, noe som kan påvirke finansiering og prioritetsrekkefølge ved mislighold.
  Confidence: 0.88
  Evidens: Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.

Risiko 13: Pågående plansaker og reguleringsendringer i nærområdet, inkludert planprogram for Grorud sentrum og flere byggesaker. Dette kan påvirke bomiljø, eiendomsverdi og fremtidig utvikling i området.
  Confidence: 0.78
  Evidens: Planprogram for Grorud sentrum. Planprogrammet skal; Saksnummer 202511855: Bergensveien 4 B ‑ bruksendring av lokaler i 2. og 3. etasje til treningssenter. Status: Under behandling.; Saksnummer 202514694: Rosenbergveien 15 ‑ bruksendring av lokale i underetasje til treningsstudio og fasadeendring. Status: Under behandling.; Saksnummer 202522082: Grorudveien 5 ‑ bruksendring av 1. etasje fra forsamlingslokale til cafe.

Risiko 14: Sameiet har ingen sikringsordning. Dette innebærer at kjøper ikke er beskyttet mot tap dersom sameiet ikke kan dekke sine forpliktelser.
  Confidence: 0.85
  Evidens: Sameiet har ikke sikringsordning.

Risiko 15: Hulltaking er ikke foretatt på badet ettersom det er nytt og ubrukt. Eventuelle skjulte fuktskader i tilliggende konstruksjoner kan derfor ikke utelukkes.
  Confidence: 0.75
  Evidens: Hulltaking er ikke foretatt ettersom baderom er nytt og ubrukt og FDV-dokumentasjon foreligger. Baderom ble bygget i 2025.

Risiko 16: Varmekabler og elektrisk utstyr er ikke funksjonstestet. Det er dermed usikkerhet knyttet til om disse fungerer som forutsatt.
  Confidence: 0.85
  Evidens: Varmekabler og elektrisk utstyr er ikke funksjon testet, så det vites ikke

Risiko 17: Rettighetshaver Emera No1 AS har tinglyst rettighet som medfører at eiendommen ikke kan disponeres over uten samtykke. Kjøper og selger er forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera.
  Confidence: 0.82
  Evidens: Rettighetshaver: Emera No1 AS; Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av

Risiko 18: Tidligere lekkasje i avløpsrør på bad i 2024. Selv om dette er utbedret, kan det indikere risiko for fremtidige rørproblemer i et eldre bygg fra 1964.
  Confidence: 0.75
  Evidens: 2024: Lekkasje i avløpsrør på bad. Utbedret av Rørpartner AS i regi av sameiet.

Risiko 19: Bygget er fra 1964 og har normal standard for alder/konstruksjon. Eldre bygningsmasse innebærer generelt høyere risiko for skjulte feil, slitasje og behov for fremtidig vedlikehold.
  Confidence: 0.85
  Evidens: Byggeår: 1964; Normal standard på bygget ut ifra alder/konstruksjon; Bygningsmassens alder tilsier naturlig nok også at det kan

Risiko 20: Selgers ansvar er begrenset oppad til kr 4 000 000 da selger anses som profesjonell. Dette kan begrense kjøpers mulighet til å kreve full erstatning ved vesentlige mangler.
  Confidence: 0.8
  Evidens: selger er å anse som profesjonell, er ansvaret begrenset oppad til kr. 4 000 000,‑.

Dokumentkontekst:
[d007_d007 | Side [1]]
rukerne av eiendommen. anser som verneverdige, enten ved formell fredning,
Boligen har følgende oppvarmingskilder: regulering til bevaring, eller ved kommunalt listeføring. En Tinglyste heftelser og rettigheter: På eiendommen er det
Forkjøpsrett: Sameiet praktiserer ikke forkjøpsrett. ‑ Boligen varmes opp med vannbåren varme via lokalitet er et område med kulturminner, mens et tinglyst følgende heftelser og rettigheter som følger
radiatorer, samt elektriske varmekabler på badet. enkeltminne er selve

---

[d007_d007 | Side [1]]
Tinglyste/andre forhold
Det kan være he昀琀elser på eiendommen, en evt. kjøper anbefales å lese grunnboken
Oppdragsnr.: 22396-2191 Befaringsdato: 16.12.2025 Side: 14 av 17 Oppdragsnr.: 22396-2191 Befaringsdato: 16.12.2025 Side: 15 av 17
72 73

## Side 38

Bergensveien 8, 0963 OSLO GRUBBE TAKST OG BYGG AS Bergensveien 8, 0963 OSLO GRUBBE TAKST OG BYGG AS
Gnr 94 - Bnr 4 Farmannvegen 49 Gnr 94 - Bnr 4 Farmannvegen 49
0301 OSLO 3925 PORSGRUNN 0301 OSLO 3925 PORSGRUNN
Forutsetninger

---

[d007_d007 | Side [1]]
lektronisk innsendt denne matrikkelenhet: Legalpant til kommunen har høyere prioritet enn
Gjelder denne registerenheten med flere GNR.94 BNR.29 OG 37. legalpant til sameiet.
Overført fra: Knr:0301 Gnr:94 Bnr:4
04.03.1932 ‑ Dokumentnr: 902123 ‑ Sammenslått med Gjelder denne registerenheten med flere
Vei, vann og avløp
07.03.1977 ‑ Dokumentnr: 4946 ‑ Erklæring/ avtale denne matrikkelenhet:
VEDR. UTSALG AV BAKERVARER GNR 94 BNR 260 Eiendommen har adkomst via kommunal vei.
Overført fra: Knr:0301 Gnr:94 Bnr:4

---

[d007_d007 | Side [1]]
et til inntil 2 ganger folketrygdens grunnbeløp.
ikke disponeres over uten samtykke fra rettighetshaver sameieforholdet, som felleskostnader. Legalpant er pant
Rettighetshaver: Emera No1 AS som ikke vises i grunnboksutskriften, og har prioritet Kjøper og selger er forpliktet til å signere den standard
Org.nr: 934 963 385 28.08.1963 ‑ Dokumentnr: 919927 ‑ Sammenslått med foran tinglyste lån, for eksempel banklån på seksjonen. kjøpekontrakten utarbeidet av Emera som en del av
46 47

## Side 25

OM EIENDOMMEN

---

[d007_d007 | Side [1]]
se om kloakkledning
26.09.1952 ‑ Dokumentnr: 11508 ‑ Bestemmelse om veg Bestemmelse om gjerde
Rettighetshaver: Knr:0301 Gnr:94 Bnr:351 Overført fra: Knr:0301 Gnr:94 Bnr:4 09.04.1976 ‑ Dokumentnr: 8093 ‑ Best. om adkomstrett
07.07.1943 ‑ Dokumentnr: 5468 ‑ Best. om vann/ Overført fra gnr 94 bnr 24 Gjelder denne registerenheten med flere Med flere bestemmelser
44 45

## Side 24

OM EIENDOMMEN OM EIENDOMMEN
Overført fra: Knr:0301 Gnr:94 Bnr:4 Elektronisk innsendt denne matrikkelenhet: Legalpant til kommunen

---

[d007_d007 | Side [1]]
Seksjoner som eies av nærstående eller gjennom et
Bestemmelse om felleskostnader firma regnes også med.
Bestemmelse om lasterampe
Bestemmelse om utvidet drift‑ og vedlikeholdsansvar 07.02.1963 ‑ Dokumentnr: 919926 ‑ Sammenslått med I henhold til eierseksjonsloven § 31 er sameierne
Gjelder denne registerenheten med flere denne matrikkelenhet: Legalpant: Kommunen har legalpant som sikkerhet for ansvarlige overfor sameiets kreditorer i forhold til sin
GNR.94 BNR.170, 414, 415 OG 416. betaling av kommunale

---

[d007_d007 | Side [1]]
 ledninger m.m. Gjelder denne registerenheten med flere
av denne eiendom Overført fra: Knr:0301 Gnr:94 Bnr:4 07.09.1972 ‑ Dokumentnr: 14794 ‑ Skjønn
Kan ikke slettes uten samtykke fra kommunen Gjelder denne registerenheten med flere Overført fra: Knr:0301 Gnr:94 Bnr:4
Overført fra: Knr:0301 Gnr:94 Bnr:4 10.07.1961 ‑ Dokumentnr: 8666 ‑ Bestemmelse om veg Gjelder denne registerenheten med flere
Gjelder denne registerenheten med flere Bestemmelse om kloakkledning
26.09.1952 ‑ Dokumentnr: 11508 ‑ Bestemmelse

---

[d007_d007 | Side [1]]
d til sin
GNR.94 BNR.170, 414, 415 OG 416. betaling av kommunale avgifter og eventuell sameiebrøk. Ved manglende betaling av fellesutgifter har
Overført fra: Knr:0301 Gnr:94 Bnr:4 eiendomsskatt. De øvrige seksjonseierne i sameiet har sameiet legal panterett i den enkelte eierseksjon,
16.12.2025 ‑ Dokumentnr: 1535835 ‑ Registerenheten kan Gjelder denne registerenheten med flere legalpant på inntil 2G som sikkerhet for krav knyttet til begrenset til inntil 2 ganger folketrygdens grunnbeløp.
ikke disponeres

---

[d007_d007 | Side [1]]

arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
Bernt Egil Grubbe Camilla Ellingsen
© iVerdi 2023
Uavhengig Taks琀椀ngeniør
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av

---

[d007_d007 | Side [1]]
elverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Selger leverer eiendommen i ryddig og rengjort stand. til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Foto: Kareem

---

[d007_d007 | Side [1]]
ntnr: 3570 ‑ Erklæring/ avtale
Gjelder denne registerenheten med flere Overført fra: Knr:0301 Gnr:94 Bnr:4 Vedtak av visse vilkår vedr. utskillelse/ bebyggelse
Gjelder denne registerenheten med flere av denne eiendom
30.11.1946 ‑ Dokumentnr: 11867 ‑ Best. om vann/ Overført fra gnr 94 bnr 24
01.06.1934 ‑ Dokumentnr: 909806 ‑ Skjønn kloakkledn. Overført fra: Knr:0301 Gnr:94 Bnr:4
Bestemmelser om felles vannverk/ ledning Overført fra: Knr:0301 Gnr:94 Bnr:4 15.01.1954 ‑ Dokumentnr: 742 ‑ Bestemmelse om veg

---

[d007_d007 | Side [1]]
ghet, byggetegninger: Bad: finnes på eiendommen, vil heller ikke følge med i salget.
Det foreligger godkjente og byggemeldte tegninger, som Badet er nytt, moderne og ubrukt, ferdigstilt i 2025. Alt utstyr og installasjoner som medfølger overtas slik de I forbindelse med salget er det blitt utført en
stemmer med dagens bruk. Rommet er helfliset med elektriske varmekabler i gulvet. er, uten garanti, med mindre det foreligger en gjeldende tilstandsrapport av en bygningssakkyndig, som gir en
Kommentar:

---

[d007_d007 | Side [1]]
ng, sikkerhet, for eksempel rapporten. Opplysninger om areal kan altså ikke alene benyttes
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER for beregning av eiendommens verdi.
osv.
•Rom som ligger utenfor boenheten, men som eier har påvist
• d F o o k r u m sk e ju n l t t a e s k jo o n n , s e tr r u k k v s a jo li n te e t r , o s g o a m ld v e a r n v n u r o d g e r a t. vløp uten • b R yg e g fe e r t a id n s s p e u n n iv k å te : t k . ravet til

---

[d007_d007 | Side [1]]
er som tas med som internt bruksareal. Dette skyldes blant annet rommets størrelse samt legges til grunn med mindre annet er spesifisert i arbeider på det elektriske anlegget som ikke har
Bodarealer som ligger i fellesarealer med manglende rømningsvei og lys (rommet har ikke et eget salgsoppgaven. samsvarserklæring.
disposisjonsrett kan endres av boligselskapet. vindu).
Gjenstander som er nevnt i standardlisten, men som ikke
Byggemåte
Lovlighet, byggetegninger: Bad: finnes på eiendommen, vil heller ikke

---

[d007_d007 | Side [1]]
yg e g fe e r t a id n s s p e u n n iv k å te : t k . ravet til bygningsdelen eller rommet på o B g R / A el - l e e . r D op e p t l e y r s t ik a k t e t i f l r h e ø m re v r i s b t o d e o n k h u e m te e n n , t a e s r j o o p n p p m å å a lt t o ro g m in m k e lu t d t e ilh rt ø i rer
boenheten, med mindre dette er angitt særskilt. Rom utenfor
boenheten kan omdisponeres av borettslaget/sameiet og dette
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets

---

[d007_d007 | Side [1]]
alavvik
selger er å anse som profesjonell, er ansvaret begrenset registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
oppad til kr. 4 000 000,‑. kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser

---

[d007_d007 | Side [1]]
ed forbehold bli akseptert før forbeholdet er på forespørsel fra andre, opplyse om aktuelle bud på
avklart. Konferer gjerne med megler før bud inngis. eiendommen, herunder relevante forbehold. POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
7.Kopi av budjournal skal gis til kjøper og selger uten
3.Megler skal legge til rette for en forsvarlig avvikling av
ugrunnet opphold etter at handel er kommet i stand.
budrunden. I forbrukerforhold (dvs. der selger er E-POST: E-POST:
Dersom det er viktig for

---

[d007_d007 | Side [1]]
 Det må også forventes at eiendommer som har vært i
Foto: Kareem Habbal. Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi

---

[d007_d007 | Side [1]]
r.
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
Eier har gjennomgå琀琀 spørsmål vedr elektrisk anlegg og vil opplyse
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader. Betong gulv som skille ned mot underliggende leilighet/areal. Det
om avvik som ikke er omtalt i denne taksten i sin egenerklæring.
er skjevheter som er målbare, men som ikke er 琀椀l sjenanse for
Varmekabler og elektrisk utstyr er ikke funksjon

---

[d007_d007 | Side [1]]
illeggskommentar
Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved
eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med
bistand av teknisk sakkyndig.
Følgende har blitt gjort i leiligheten de senere år: 2018: Nytt Ikea Voxtorp kjøkken. Frittstående hvitevarer medfølger, uten garanti. 2022: nye
Nordsjø-gulv samt Pergo gulvlister levert av Obs Bygg.

---

[d007_d007 | Side [1]]
R UNDERSØKT
Tekniske installasjoner > Varmtvannstank Gå til side Byggeår
1964
AVVIK SOM KAN KREVE TILTAK Standard
Normal standard på bygget ut ifra alder/konstruksjon - jamfør
Utvendig > Dører Gå til side
beskrivelse under konstruksjoner.
Vedlikehold
Kjøkken > 2 etasje > Stue/kjøkken > Avtrekk Gå til side
Bygget er jevnlig vedlikeholdt.
UTVENDIG
INNVENDIG
Vinduer
Over昀氀ater
Anslag på utbedringskostnad Malte vinduer av tre fra Nordan med 2 lags isolerglass. Vinduene går 昀椀nt
og er produsert i 2004. Gulv har

---

[d007_d007 | Side [1]]
 målt fukt i vegger. Ved over昀氀ate fukt måling inne i baderommet Radiatorer er kun visuelt vurdert og er utenfor takstmannen si琀琀
ble det ikke oppdaget noen uvanlige fukt verdier. Utbygger og 3 parts Kjøkken ven琀椀lator montert i overskap med kull昀椀lter. Det er montert ny琀琀 kompetanseområde.
kontrollør har dokumentasjon på badet. 昀椀lter i 2025.
Årstall: 2025 Kilde: Faktura e.l Årstall: 2018 Kilde: Eier
Vurdering av avvik:
• Det er kun kull昀椀lterven琀椀lator på kjøkkenet og heller ikke andre
2 ETASJE > BAD

---

[d007_d007 | Side [1]]
og begrensede
Spørsmål 琀椀l eier kontrollen. Det kan være feil og mangler om branntekniske forhold som
en slik forenklet undersøkelse ikke vil avdekke. Vær derfor oppmerksom
2. Når ble det elektriske anlegget installert eller sist gang totalt på denne risikoen, og søk videre veiledning eller rådgivning.
rehabilitert (årstall)? Med totalt rehabilitert menes fullstendig
utski昀琀et anlegg fra inntakssikring og videre. Leiligheten har brannalarm og brannslokker.
2017 Ingen opplysninger er gi琀琀 om når skapet sist

---

[d007_d007 | Side [1]]
idet el-kontroll? fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse
om de virker som de skal, eier bes si ifra om våre opplysninger er Nei spørsmålene i bransjestandarden NS3600. De琀琀e kan ikke sammenlignes
misvisende eller feil. med en fullstendig kontroll av branntekniske forhold av o昀昀entlig
1. Foreligger det el琀椀lsynsrapport de siste 5 år, og det er ikke foreta琀琀 Generell kommentar myndighet, eller en vurdering av boligens branntekniske forhold eller
prosjektering fra en rådgiver

---

[d007_d007 | Side [1]]
e eller feil.
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd. høydeforskjeller i stue/kjøkken. Leiligheten har brannalarm og brannslokker.
Målinger av gulv er kun s琀椀kkprøver i 1-2 rom, målt rundt vegg og
midt på gulvet.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE Malte gla琀琀e innerdører. Dørene går 昀椀nt og har normal
Det kan være avvik/skader som ikke er avdekket. bruksslitasje. Arealer Gå 琀椀l side
VÅTROM Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Bad
Informasjon om

---

[d007_d007 | Side [1]]
AVVIK SOM ETTER NS 3600 GIR TG 2 malt strie og malt mur, 昀氀is på bad.
kompetanseområde.
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀 Himlinger/tak har over昀氀ater av malt betong. Laminat er lagt i 2022
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes og over昀氀ater er malt i 2025.
Elektrisk anlegg med automatsikringer.
når delen er gammel og det er grunn 琀椀l å varsle om faren for

---

[d007_d007 | Side [1]]
malte overflater og nyere gulv. Vegger: Malt strie og malt mur i oppholdsrom, og fliser på med TG2 og TG3 bør vurderes nøye, da de indikerer
Planløsningen er praktisk med en åpen stue‑ og bad. Overflater i oppholdsrom ble malt i 2025. Takstmann: Bernt Egil Grubbe avvik fra normal slitasje og/ eller høy alder, noe som kan
kjøkkenløsning og en adskilt sovealkove. Himling: Malt betong, malt i 2025. innebære behov for utbedringer. Bygningsdeler som er
Type takst avholdt av takstmann: Tilstandsrapport merket

---

[d007_d007 | Side [1]]
 fellesareal slik:
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand et “Delen av bygning som brukes av to eller flere bruksenheter eller
byggverk eller en bygningsdel befinner seg i. Benyttes ved til bygningens forvaltning, drift eller vedlikehold.
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av avvik og alder.
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje
•I en overgangsperiode skal rapporter som benyttes i
og sokkeletasje) eller

---

[d007_d007 | Side [1]]
brannslokker.
2017 Ingen opplysninger er gi琀琀 om når skapet sist gang ble
1. Er det mangler for brannslukningsutstyr i boligen iht. forskri昀琀skrav
rehabilitert, men AMS måler ble montert i sikringsskapet i 2017.
på søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985?
Nei
3. Er alle elektriske arbeider/anlegg i boligen u琀昀ørt av en registrert
elektroinstallasjonsvirksomhet?
2. Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10
Ja
år?
Nei
4. Er det elektriske anlegget u琀昀ørt eller er det

---

[d007_d007 | Side [1]]
d automatsikringer.
Eier har gjennomgå琀琀 spørsmål vedr elektrisk anlegg og vil opplyse om 12. Foreta en helhetsvurdering av det elektriske anlegget, dets alder,
avvik som ikke er omtalt i denne taksten i sin egenerklæring. allmenne 琀椀lstand og fare for liv og helse. Bør det elektriske anlegget De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål som
Varmekabler og elektrisk utstyr er ikke funksjon testet, så det vites ikke ha en utvidet el-kontroll? fremkommer under. Tilstandsgraden er basert på

---

[d007_d007 | Side [1]]
g, 琀椀l lu昀琀 under døren. Vannledninger
Plast (rør i rør). Det er besik琀椀get i vannskapet.
2 ETASJE > BAD
Tilliggende konstruksjoner våtrom
Hulltaking er ikke foreta琀琀 e琀琀ersom baderom er ny琀琀 og ubrukt og FDV-
dokumentasjon foreligger. Baderom ble bygget i 2025. Ved over昀氀ate
fukt måling inne i baderommet ble det ikke oppdaget noen uvanlige fukt
verdier.
2 ETASJE > BAD
Over昀氀ater vegger og himling
KJØKKEN
Flis på vegg og malt mur i tak, over昀氀ater er i god stand.
2 ETASJE > STUE/KJØKKEN
Årstall: 2025

---

[d007_d007 | Side [1]]
porten baserer seg på krav i forskrift til avhendingslova fem år siden siste el-tilsyn. Ved behov for grundigere risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad, rommet både kan være i strid med teknisk forskrift og mangle
(tryggere bolighandel). Rapportens struktur, metode og undersøkelser, kan bygningssakkyndig anbefale boligkjøper ta utforede kjellervegger og eventuelt i oppforede kjellergulv. godkjennelse i kommunen for den aktuelle bruken, uten at dette
begrepsbruk følger i hovedsak

---

[d007_d007 | Side [1]]
sjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt. og eierseksjonsloven har ulik definisjon av fellesareal. Ved
Dette er av hensyn til bygningssakkyndiges kompetanse og
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik:
risikoen for skade.
•Symptom: forhold som gir

---

[d007_d007 | Side [1]]
琀椀ltak skal ikke anses som nødvendig. Graden kan også av sameie. Konstruksjonen er derfor kun beskrevet, ikke
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler. INNVENDIG Gå 琀椀l side 琀椀lstandsvurdert.
Vannbåren varme i radiatorer.
Gulv har over昀氀ater av laminat, 昀氀is på bad. Vegger har over昀氀ater av
Radiatorer er kun visuelt vurdert og er utenfor takstmannen si琀琀
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2 malt strie og malt mur, 昀氀is på

---

[d007_d007 | Side [1]]
enivå. I en del den aktuelle bruken, uten at dette får betydning for om arealet
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke måles og oppgis i tilstandsrapporten. Når arealet måles tas det
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og ikke hensyn til om arealet er lovlig oppført eller om bruken er
Dette gjelder blant annet: materialer.). lovlig,

---

[d007_d007 | Side [1]]
 10
Ja
år?
Nei
4. Er det elektriske anlegget u琀昀ørt eller er det foreta琀琀 琀椀lleggsarbeider
på det elektriske anlegget e琀琀er 1.1.1999?
3. Er det mangler på røykvarsler i boligen iht. forskri昀琀skrav på
Ja
søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985?
Eksisterer det samsvarserklæring? Nei
Ja
I eiers eie. 4. Er det skader på røykvarslere?
Nei
5. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale
El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med
avvik som ikke er

---

[d007_d007 | Side [1]]
pet sist gang Bygningsdeler vurdert med TG2:
Øvrig
Malte vinduer av tre fra Nordan med 2 lags isolerglass. ble rehabilitert, men AMS måler ble montert i
Vinduene er produsert i 2004. sikringsskapet i 2017. ‑ Utvendig ‑ Dører | Det er ikke godkjent branndør etter
informasjon
Er alle elektriske arbeider/ anlegg i boligen utført av en dagens krav. Etter 2010 er det krav om EI30, som står for
Dører: registrert elektroinstallasjonsvirksomhet? integritet (E), isolasjon (I) og 30 minutter

---

[d007_d007 | Side [1]]
t er ikke montert automa琀椀sk vann
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova. hvitevarer. Leiligheten har små oppgraderings behov, mindre stopper eller komfyrvakt.
avvik som vi har gi琀琀 TG2 og TG3 som en eventuelt kjøper bør Kjøkken ven琀椀lator montert i overskap med kull昀椀lter. Det er montert
lese nøye. Alle bygningsdeler er vurdert og beskrevet i ny琀琀 昀椀lter i 2025.
rapporten under de forskjellige avsni琀琀.
TEKNISKE INSTALLASJONER Gå 琀椀l side
Boligbygg med 昀氀ere boenheter -

---

[d007_d007 | Side [1]]
NISKE INSTALLASJONER Gå 琀椀l side
Boligbygg med 昀氀ere boenheter - Byggeår: 1964 Plast (rør i rør). Det er besik琀椀get i vannskapet.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Avløpsrør i plast, avløpsrør er kun inspisert inne i leiligheten..
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
UTVENDIG Gå 琀椀l side Leiligheten har naturlig ven琀椀lasjon. Avtrekk i fra bad og 琀椀l lu昀琀 via
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Malte vinduer av tre

---

[d007_d007 | Side [1]]
som må utbedres i løpet av 2026. Det er ‑ KDP‑17: Flate: Områder for etablering av torg/ møteplass kollektivknutepunkt. Det skal redegjøres for nødvendig
Energimerke
pt ikke planlagt større vedlikeholdsarbeider og/eller ved byutvikling utredningsarbeid. Status: Under behandling.
opptak av fellesgjeld. Sameiet har imidlertid bl.a. et Energikarakter: F ‑ KDP‑17: Flate: Annen overordnet møteplass ‑
gammelt varmtvannsanlegg, hvor vi nå avventer eksisternde. Reguleringsplan opprettholdes Pågående byggesaker i

---

[d007_d007 | Side [1]]
00
Budsjettet er basert på estimerte tall, det er tatt høyde for prisøkninger på drift & Forsikringer -439 579 -382 403 -423 000 -500 000
vedlikehold i den grad det foreligger estimater.
Kommunale avgifter 9 -1 617 115 -1 365 463 -1 697 000 -1 849 000
Energi/fyring 11 -45 541 0 -2 124 000 -1 374 000
Felleskostnader TV-
Budsjettet danner grunnlaget for fastsettelsen av felleskostnader.
anlegg/bredbånd -540 232 -521 427 -551 200 -573 248
Andre driftskostnader 12 -709 654 -675 864 -682 800 -701 432
Budsjettet

---

[d007_d007 | Side [1]]
gelser fellesgjeld: Sameiet har ingen lån
‑ A konto varme/ varmt vann: kr. 890,00,‑ (forbruket registrert.
35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
På høyre side i annonsen finner du et kartutsnitt. Ved å ‑ Innredning av selvbetjeningsrenseri, datert 24.04.1986
Det et mangfold av fritidsaktiviteter i nærheten som bl.a. klikke på kartet kan du enkelt planlegge din rute fra valgt ‑ Utvidelse av kiosk, datert 24.04.1981
Sikringsordning
idrettsanlegg på Grorud, idrettshall på Apalløkka, Furuset startpunkt

---

[d007_d007 | Side [1]]
att.
vært nødvendig på bakgrunn av bl.a. betydelige eksisterende reguleringsplaner i kommunen.
Beboernes forpliktelser og
kostnadsøkninger på kommunale utgifter, samt økte For informasjon om eventuelle arbeider eller prosjekter i Pågående plansaker på tomten/ i nærområde:
kostnader til løpende vedlikehold. Av større kostnader nærliggende områder, anbefales det å gjøre søk i Oslo ‑ Planprogram for Grorud sentrum. Planprogrammet skal
dugnader
sameiet står overfor har vi et kommunalt pålegg om kommunes portal

---

[d007_d007 | Side [1]]
tsanlegg på Grorud, idrettshall på Apalløkka, Furuset startpunkt og helt frem til boligen. Det vil være skiltet ved ‑ Ombygging av lokaler (plan underetasje og 1. etasje),
Sameiet har ikke sikringsordning. forum med is‑ og håndballhall, svømmehall på Furuset og fellesvisninger for enkel orientering. datert 24.10.2016
Kalbakken, Nordre Lindeberg besøksgård, nytt stort
ridesenter ved Alnaparken, golfbane på Rommen, samt Ferdigattest/ brukstillatelse datert: 08.08.1966.
Tomt
Andre kostnader:
mange andre lag

---

[d007_d007 | Side [1]]
m overstiger en fastsatt verdi. Informasjonen
over er hentet fra eiendomsskattelistene.
http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
Estimert totalpris ink. omk
skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
Kr 3 260 590
Kommunale avgifter
Felleskostnader
Informasjon: Kommunale avgifter er inkl. i fellesutgiftene.
Felleskostnader kr 2 879,‑ pr. mnd
Fellesgjeld
Felleskostnader inkulderer: Felleskostnadene fordeles på
følgende måte: Lånebetingelser fellesgjeld: Sameiet har ingen lån
‑ A konto varme/ varmt

---

[d007_d007 | Side [1]]
på 545 105. For strømforbruk. Dette skyldes at boligen tidligere har vært besto av fire bygninger plassert rundt et åpent torg. Det
‑ Kabel‑TV og internett er en særkostnad for 2025 er det budsjettert med et mindre underskudd, både utleid, men ikke de siste mnd. Selger har derfor ikke såkalte fotgjengertorget skulle omgis av en 12 etasjers
boligseksjonene og er ikke inkludert i felleskostnaden. i driftsbudsjettet og i årsresultatet, på ‑330. tilgang til forbruksdata. høyblokk i vest, møtelokaler i to

---

[d007_d007 | Side [1]]
pet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
egenkapital 16 1 615 074 1 069 969
myndighetene og kan ikke disponeres fritt.
SUM EGENKAPITAL 1 615 074 1 069 969
NOTE: 2
GJELD
INNKREVDE FELLESKOSTNADER
Felleskostnader bolig 2 616 170
KORTSIKTIG GJELD
Felleskostnader næring 2 050 000
Forskuddsbetalte felleskostnader 66 559 68 818
SUM INNKREVDE FELLESKOSTNADER 4 666 170
Leverandørgjeld 48 838 529 327
Skyldige offentlige avgifter 0 58 191
NOTE: 3
Annen kortsiktig gjeld 17 187 285

---

[d007_d007 | Side [1]]
lige avgifter 0 58 191
NOTE: 3
Annen kortsiktig gjeld 17 187 285 0
ANDRE INNTEKTER
SUM KORTSIKTIG GJELD 302 681 656 336
Antenneleie 91 133
Avregning energi 706
SUM EGENKAPITAL OG GJELD 1 941 753 1 726 305
Opprydding kundereskontro 57
Leie Telenor Norge AS 62 126
Pantstillelse 0 0
SUM ANDRE INNTEKTER 154 022
Garantiansvar 0 0
NOTE: 4
Oslo, 28.04.2025
Styret i Sameiet Grorud Senter PERSONALKOSTNADER
Arbeidsgiveravgift -17 766
Helge Rognerud Ellen SUM PERSONALKOSTNADER -17 766
Tone-Mette Nikolaysen /s/ /s/

---

[d007_d007 | Side [1]]
ratrukket kortsiktig gjeld) viser selskapets
Styrehonorar 5 -150 000 -150 000 -150 000 -150 000
likviditet. Arbeidskapitalen pr. 31.12 var kr 1 639 073.
Revisjonshonorar 6 -25 625 -61 500 -25 000 -26 000
Budsjett 2025
Forretningsførerhonorar -151 665 -144 030 -152 000 -160 000
Konsulenthonorar 7 -58 445 -42 940 -25 000 -25 000
Posten drift og vedlikehold er budsjettert med ordinær drift. Drift og vedlikehold 8 -549 659 -576 896 -386 100 -847 900
Budsjettet er basert på estimerte tall, det er tatt høyde for

---

[d007_d007 | Side [1]]
RUD SENTER 6 SAMEIET GRORUD SENTER
NOTE: 5 NOTE: 12
STYREHONORAR ANDRE DRIFTSKOSTNADER
Honorar til styret gjelder for perioden 2023/2024, og er på kr 150 000. Container -39 585
NOTE: 6 Skadedyrarbeid/soppkontroll -43 969
REVISJONSHONORAR Vaktmestertjenester -365 458
Revisjonshonoraret er i sin helhet knyttet til revisjon og beløper seg til kr 25 625. Vakthold -42 903
Renhold ved firmaer -203 315
NOTE: 7 Andre fremmede tjenester -1 620
KONSULENTHONORAR Trykksaker -450
Juridisk bistand -25 375 Andre

---

[d007_d007 | Side [1]]
likehold brannsikring -121 027 FINANSINNTEKTER
Drift/vedlikehold vaskerianlegg -43 150 Renter bank 10 981
Drift/vedlikehold søppelanlegg -10 588 Renter av for sent innbetalte felleskostnader -5 399
SUM DRIFT OG VEDLIKEHOLD -549 659
Andre renteinntekter 26
SUM FINANSINNTEKTER 5 608
NOTE: 9
NOTE: 14
KOMMUNALE AVGIFTER
Vann- og avløpsavgift -1 204 096 FINANSKOSTNADER
Renovasjonsavgift -413 020 Renter på leverandørgjeld -414
SUM KOMMUNALE AVGIFTER -1 617 115 SUM FINANSKOSTNADER -414
NOTE: 10 NOTE: 15
VASKERI

---

[d007_d007 | Side [1]]
tig bilde av selskapets eiendeler og gjeld,
finansielle stilling og resultat.
RESULTATREGNSKAP
Forutsetningen om fortsatt drift er til stede, og årsregnskapet er satt opp under denne
forutsetning. Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
Resultat DRIFTSINNTEKTER:
Årets resultat vises i resultatregnskapet og foreslås ført mot egenkapital. Eventuelt avdrag Innkrevde felleskostnader 2 4 666 170 4 188 117 5 608 000 6 127 000
på langsiktig gjeld (lån) er ikke tatt hensyn til. Vaskeri 10 25

---

[d007_d007 | Side [1]]
1 16 av 19 Årsregnskap.pdf
116 117

## Side 60

7 SAMEIET GRORUD SENTER
(cid:25)(cid:2)(cid:3)(cid:9)(cid:27)(cid:37)(cid:2)(cid:3)(cid:13)(cid:2)(cid:8)(cid:32)(cid:11)(cid:8)(cid:11)(cid:12)(cid:13)(cid:6)(cid:14)(cid:9)(cid:2)(cid:8)(cid:47)(cid:55)(cid:47)(cid:53)
(cid:55)(cid:4)(cid:29)(cid:30)(cid:34)(cid:35)(cid:25)(cid:35)(cid:5)(cid:21)(cid:40)(cid:26)(cid:27)(cid:22)(cid:28)(cid:25)(cid:29)(cid:5)(cid:41)(cid:2)(cid:7)(cid:42)(cid:2)(cid:6)(cid:42)
Ettersom disse inntektene og kostnadene avregnes

---

[d007_d007 | Side [1]]
nlights, stikkontakter høydeforskjell på over 30 mm gjennom hele rommet. bestående av 97 boligseksjoner og 34 næringsseksjoner.
elektriske varmekabler på bad. Leiligheten har og elektrisk utstyr? Sjekk samtidig tilstanden på elektrisk Tilstandsgrad 3 gis med bakgrunn i standardens krav til Sameiet er gjeldfritt. Felleskostnadene er på kr 1 989 per
brannalarm og brannslokker. tilkobling av varmtvannsbereder, jamfør eget punkt godkjente måleavvik. Det er målt 38 mm. gjennom hele måned, og det er varslet en

---

[d007_d007 | Side [1]]
2022: nye
Nordsjø-gulv samt Pergo gulvlister levert av Obs Bygg. Montert speilglassgarderobe i entrè. 2024: Lekkasje i avløpsrør på bad. Utbedret av
Rørpartner AS i regi av sameiet. 2025: Generell overflatebehandling. 2025: Nytt flislagt bad med varmekabler. Alt rørleggerarbeid, inkludert
bl.a. nytt sluk og montering av nytt utstyr, er utført av Powerpex Service AS. Dokumentasjon foreligger. Membran lagt av Sletten & Sletten AS.
Dokumentasjon foreligger. Termostat med oppkobling til varmekabler montert av

---

[d007_d007 | Side [1]]
for viser hvilke energikostnader som avregnes etter hver enkelts forbruk.
SUM ENERGI / FYRING -45 541
For å dekke de løpende kostnadene, krever selskapet inn et forskuddsbeløp fra hver
enkelt.
På fastsatte frister, blir deretter inntektene avregnet mot kostnadene. For lite innbetalt blir
krevd inn, og for mye innbetalt blir tilbakebetalt. På den måten betaler hver enkelt kun for
sitt eget forbruk.
Vedlegg 1 15 av 19 Årsregnskap.pdf Vedlegg 1 16 av 19 Årsregnskap.pdf
116 117

## Side 60

7 SAMEIET GRORUD

---

[d007_d007 | Side [1]]
riftskostnader 12 -709 654 -675 864 -682 800 -701 432
Budsjettet er basert på uendrede felleskostnader. SUM DRIFTSKOSTNADER -4 305 281 -3 937 161 -6 238 100 -6 228 580
For øvrig vises til de enkelte tallene i budsjettet. DRIFTSRESULTAT 539 911 338 212 -528 850 -330
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 13 5 608 33 771 0 0
Finanskostnader 14 -414 0 0 0
RES. FINANSINNT./-KOSTNADER 5 194 33 771 0 0
ÅRSRESULTAT 545 105 371 983 -528 850 -330
Overføringer:
Til opptjent egenkapital 545 105 371 983
Vedlegg 1

---

[d007_d007 | Side [1]]
skjellige reguleringsplaner. For selve bygningen senter. Status: Under behandling.
Forretningsfører: Obos Eiendomsforvaltning AS bygninger med bruksareal mindre enn 50 m². Det er eier gjelder V260963‑ Flate: Forretning/ bolig. De andre ‑ Saksnummer 202514694: Rosenbergveien 15 ‑
som plikter å fremlegge energiattest og er selv ansvarlig planene gjelder bl.a. fortau, felles avkjørsel, offentlig bruksendring av lokale i underetasje til treningsstudio og
Sameiets forsikringsselskap: If Skadeforsikring Nuf for

---

[d007_d007 | Side [1]]
eksisternde. Reguleringsplan opprettholdes Pågående byggesaker i nærområde:
tilstandsrapport fra rørlegger, og som kan innebære Energifarge: Rød ‑ Saksnummer 202511855: Bergensveien 4 B ‑
nødvendige vedlikeholdstiltak i året som kommer. Reguleringsplanen som gjelder for eiendommen er helt bruksendring av lokaler i 2. og 3. etasje til treningssenter.
Bygningsmassens alder tilsier naturlig nok også at det eller delvis opphevet som følge av bystyrets vedtak Status. Under behandling.
Info energiklasse
kan

---

[d007_d007 | Side [1]]
yggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Kommentar: Originale tegninger er mo琀琀a琀琀 og gjennomgå琀琀. Generelle krav i bolig 琀椀l rømning fra rom, 琀椀lgang 琀椀l dagslys via vinduer,
takhøyde m.m. er vurdert.
Brannceller
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
Arealet kan ikke all琀椀d fastse琀琀es nøyak琀椀g Om brannceller
Nyere håndverkstjenester
Areal kan være komplisert eller umulig å måle opp nøyak琀椀g

---

[d007_d007 | Side [1]]
t i butikk 0.2 km og grei nærhet til byen med mange Separert 15% 9%
baneavganger.»
Enke/Enkemann 3% 4%
Sitat fra en lokalkjent
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes

---

[d007_d007 | Side [1]]
pprettet seksjoner:
Radonmåling
30.03.1990 ‑ Dokumentnr: 21484 ‑ Best om garasje/ Overført fra: Knr:0301 Gnr:94 Bnr:4 Snr: 66
parkering Gjelder denne registerenheten med flere Formål: Bolig Selger har ikke utført radonmåling. Det er ikke krav om
Gjelder denne registerenheten med flere Sameiebrøk: 47/ 16631 dette i forbindelse med salgsoppdrag.
EIENDOMMEN ER OPPDELT I 131 SEKSJONER
11.01.1963 ‑ Dokumentnr: 919925 ‑ Sammenslått med
Diverse
20.08.2014 ‑ Dokumentnr: 696514 ‑ Bestemmelse om denne

---

[d007_d007 | Side [1]]
urdert av 89 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 75/100
Etablerere
Kvalitet på skolene
Enslige
Bra 68/100
Naboskapet
Offentlig transport Høflige 63/100
Grorud T 1 min
T-bane, buss 0.1 km
Aldersfordeling
Grorud T 1 min
Totalt 10 ulike linjer 0.1 km
Grorud 2 min Linje 4, 5 0.2 km
Grorud stasjon 17 min
Linje L1 1.4 km
Oslo S 17 min
Totalt 24 ulike linjer 10.5 km
Skoler
Grorud skole (1-7 kl.) 4 min
325 elever, 19 klasser 0.3 km
Ammerud skole (1-7 kl.) 11

---

[d007_d007 | Side [1]]
330. tilgang til forbruksdata. høyblokk i vest, møtelokaler i to etasjer i nord,
Kjøper må selv tegne abonnement. bebyggelse på fire etasjer i øst og tre etasjer i sør.
Landskapsarkitektene Grindaker og Gabrielsen utformet
Vedtekter/ husordensregler Regulering
Svar fra styre 12.01.2026: Når det gjelder felleskostnader planen for hvordan torget skulle opparbeides. Selv om
er vedtatt en økning på 10% med virkning fra 1 mars Vedtekter og husordensregler ligger vedlagt Regulerings og arealplaner: Ny

---

[d007_d007 | Side [1]]
 opplyst i rapporten. Opplysninger om areal kan altså ikke alene De琀琀e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et rom
beny琀琀es for å beregne eiendommens verdi. fra bod 琀椀l soverom eller arbeidsrom,eller hvis du endrer en bolig 琀椀l to
Den bygningssakkyndige kan avdekke eventuelle separate boliger.
Total fordeling mellom P-ROM og S-ROM
bruksendringer og avvik i branncelleinndeling Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på

---

[d007_d007 | Side [1]]
er i nærområdet, sommer som vinter
Adkomstvei
Fra Oslo: Kjør inn på E18. Ta E6 琀椀l Rv191 i Bydel Alna. Ta avkjøringen 40 fra E6. Fortse琀琀 på Rv191. Ta Nedre Kalbakkvei og
Trondheimsveien/Rv4 琀椀l Rosenbergveien i Grorud
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et kommunalt vannforsyning
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et kommunalt avløp
Regulering
Eiendommen er regulert 琀椀l bolig.
Om tomten
Pent opparbeidet tomt med gress og beplantning.
Tinglyste/andre forhold
Det kan være he昀琀elser på eiendommen, en

---

[d007_d007 | Side [1]]
den aktuelle bruken, uten at dette
begrepsbruk følger i hovedsak Norsk Standard NS 3600:2018 kontakt med offentlige myndigheter eller en kvalifisert vil få betydning for valg av arealkategori.
(teknisk tilstandsanalyse ved omsetning av bolig), samt elektrofaglig fagperson. •Normal slitasjegrad: forventet slitasje av materiale i overflaten
Takstbransjens retningslinjer for arealmåling når det gjelder som er basert på enkle visuelle observasjoner. Kan vurderes •Se øvrig informasjon om areal i rapporten,

---

[d007_d007 | Side [1]]
på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei. 琀椀l sammenligning. Tallene er omtrentlige, kan avvik fra fak琀椀ske målinger og er ikke juridisk bindende
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, P-ROM( m2) S-ROM( m2)
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32 Boligbygg med

---

[d007_d007 | Side [1]]
.6
%
2.7
% 4.32 % 6.52 % 2.12
%
64
%
3.93
%
9.83
% 3.21 % 1.41 % 3.81
Primære transportmidler Varer/Tjenester
Grorud Senter 2 min
1. Tog/t-bane
Boots apotek Grorud 2 min
2. Egen bil
3. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene 35% i barnehagealder
35% 6-12 år
Nærhet til skog og mark 97/100
17% 13-15 år
12% 16-18 år
Kollektivtilbud
Veldig bra 92/100
Støynivået
Lite støynivå 75/100
Familiesammensetning
Par m. barn Sport
Grorud idrettsanlegg 5 min Par u. barn
Barn Ungdom Unge voksne Voksne

---

[d007_d007 | Side [1]]
et samsvarserklæring? Ja I eiers eie. ‑ 2 etasje Stue/ kjøkken ‑ Avtrekk | Det er kun Gnr. 94, bnr. 4, snr. 66, ideell andel 1/ 1
Vannledninger av plast (rør i rør). Avløpsrør i plast. Foreligger det kontrollrapport fra offentlig myndighet – kullfilterventilator på kjøkkenet og heller ikke andre i Oslo kommune.
Varmtvann (forbruksvann) leveres via Fyrsentralen/ Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende forserte/ mekaniske avtrekksløsninger fra kokesonen. Om
fellesanlegg. Varmtvannstanken

---

[d007_d007 | Side [1]]
igmasse
Grorud idrettsbarnehage (1-5 år) 5 min
81 barn 0.4 km
0% 55%
Ammerudlia barnehage (0-5 år) 6 min
7% enebolig
135 barn 0.5 km Øvre Grorud
14% rekkehus
Oslo og omegn
71% blokk
Ammerudgrenda barnehage (0-5 år) 9 min Norge
8% annet
53 barn 0.7 km
Sivilstand
Dagligvare Norge
Gift 30% 33%
Meny Grorud 2 min «Deilig å bo så nær skogen at du kan
Ikke gift 51% 54%
kjenne lukta! Billige og store leiligheter
Rema 1000 Grorud 3 min
Post i butikk 0.2 km og grei nærhet til byen med mange Separert 15%

---

[d007_d007 | Side [1]]
ringene løses ut? fra rommet, anbefalt tiltak må derfor avklares nærmere
Sameie
Leiligheten har naturlig ventilasjon. Avtrekk i fra bad og til ‑ Nei med styret i borettslag/ sameie før det eventuelt kan
luft via ventiler i vinduene. Badet har ventilasjon via felles Har det vært brann, branntilløp eller varmgang (for gjennomføres. Sameiet Grorud Senter
anlegg, til luft under døren. Kjøkkenventilator montert i eksempel termiske skader på deksler, kontaktpunkter
overskap med kullfilter. Det er montert nytt

---

[d007_d007 | Side [1]]
inger eller andre deler av bygningen i løpet av en fastsa琀琀 琀椀d. Kommentar: Badet er ny琀琀 og ubrukt i 2025.
over 昀氀ere etasjer og så videre.
Om bruksendring Krav for rom 琀椀l varig opphold
Eiendommens markedsverdi kan ikke baseres på en matema琀椀sk beregning basert på Bruksendring er å endre bruken av et rom fra en 琀椀lla琀琀 bruk 琀椀l en annen. Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene

---

[d007_d007 | Side [1]]
ftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig

---

[d007_d007 | Side [1]]
måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger

---

[d007_d007 | Side [1]]
Budgivning og selgers vurdering
boligselgerforsikring som dekker selgers ansvar etter innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
avhendingsloven. Boligselgerforsikring for profesjonelle vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra ikke‑forbrukere, selv om budet er lavere selgers ansvar er begrenset til det som følger direkte av
dekker selgers ansvar overfor kjøper,

---

[d007_d007 | Side [1]]
punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil

---

[d007_d007 | Side [1]]
ikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik

---

[d007_d007 | Side [1]]
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i

---

[d007_d007 | Side [1]]
slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte

---

[d007_d007 | Side [1]]
 foreligger. Termostat med oppkobling til varmekabler montert av Torshov Elektro AS. Dokumentasjon foreligger.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert

---

[d007_d007 | Side [1]]
seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken,

---

[d007_d007 | Side [1]]
rsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
høyeste bud.
2.Når et bud er inngitt til megler og innholdet i budet er
formidlet til selger (slik at selger har

---

[d007_d007 | Side [1]]
sloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er Dersom kjøper er en juridisk enhet, eller en fysisk person
nærmere forklart nedenfor. som handler i næringssammenheng, regnes kjøpet ikke
Forsikring
Om informasjonsgrunnlaget som et forbrukerkjøp.
Boligselgerforsikring: Selger har tegnet Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
boligselgerforsikring som dekker

---

[d007_d007 | Side [1]]
år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
Besøksadresse:
Plan-ogbygningsetaten Sentralbord:+4721802180
Vahlsgate1,0187Oslo − Hvor: Hos eiendomsmegler senest ved
Oslokommune

---

[d007_d007 | Side [1]]
e boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: VBAS 2
37005210
:ecnerefer
tnemucoD
E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Aadne Tho 81902a44e3aab14ecd8117 11.12.2025 Signer authenticated by
d8fbcd12d2c14ffbfb 17:31:31 UTC One time code
→ This is a PDF document digitally signed by IN Groupe's E-Signing service.
→ The document's integrity is protected by signing and

---

[d007_d007 | Side [1]]
kB,hererS-1118kommet.
Knytning(er)motandreplaner: S-1118
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
Dokumentetbestårav1side(r)inkludertdenne.
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne

---

[d007_d007 | Side [1]]
 det som følger direkte av
dekker selgers ansvar overfor kjøper, begrenset til salgsoppgaven er basert på selgers informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
boligens salgssum og maksimalt 4 millioner kroner. Da fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
selger er å anse som profesjonell, er ansvaret begrenset

---

[d007_d007 | Side [1]]
tudio og
Sameiets forsikringsselskap: If Skadeforsikring Nuf for at opplysningene er korrekte. kjørebane/ veigrunn, friområde/ park, offentlig gang‑/ fasadeendring. Status: Under behandling.
Selger har fylt ut fullstendig energiattest, som er lagt ved sykkelvei og forretninger og kontor. ‑ Saksnummer 202522082: Grorudveien 5 ‑
Polisenummer fellesforsikring: 1160848 salgsoppgaven. Megler påtar seg ikke ansvar for bruksendring av 1. etasje fra forsamlingslokale til cafe.
informasjonen som fremgår av

---

[d007_d007 | Side [1]]
av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
Overtakelse
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som egenandel).
Tidspunkt for overtakelse avtales mellom kjøper og gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
selger. – med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker –

---

[d007_d007 | Side [1]]
udrunde avsluttes uten at handel er kommet i stand, kan
så langt det er nødvendig, å orientere selger, budgivere og
en budgiver kreve kopi av budjournalen i anonymisert SIGNATUR: SIGNATUR:
øvrige interessenter om bud og forbehold. Dersom bud
form.
inngis med en frist som åpenbart er for kort til at
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om

---

[d007_d007 | Side [1]]
det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
Egenerklæringsskjema er vedlagt salgsoppgaven og egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes av
interessenter oppfordres til å gjennomgå denne før bud forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen.
inngis. slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for at skjulte feil og mangler ikke er opplyst om.",
      "evidence": [
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Manglende godkjent branndør etter dagens krav (EI30). Dette er et avvik med TG2 og kan utgjøre en sikkerhetsrisiko samt medføre krav om utbedring.",
      "evidence": [
        "Utvendig ‑ Dører | Det er ikke godkjent branndør etter dagens krav. Etter 2010 er det krav om EI30, som står for integritet (E), isolasjon (I) og 30 minutter"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R03",
      "description": "Kun kullfilterventilator på kjøkkenet uten mekanisk/forsert avtrekk fra kokesonen. Dette er et avvik (TG2) som kan gi dårlig inneklima og manglende oppfyllelse av ventilasjonskrav.",
      "evidence": [
        "Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen.",
        "2 etasje Stue/ kjøkken ‑ Avtrekk | Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R04",
      "description": "Gulvskjevheter med TG3 – det er målt 38 mm høydeforskjell gjennom hele rommet, noe som overstiger godkjente måleavvik (maks 30 mm). Dette er et vesentlig avvik som kan kreve kostbare utbedringstiltak.",
      "evidence": [
        "Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik. Det er målt 38 mm. gjennom hele rommet.",
        "høydeforskjell på over 30 mm gjennom hele rommet."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R05",
      "description": "Elektrisk anlegg uten el-tilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll. Anlegget ble sist rehabilitert i 2017, og det er usikkerhet knyttet til anleggets tilstand og sikkerhet.",
      "evidence": [
        "1. Foreligger det eltilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll? Nei",
        "2017 Ingen opplysninger er gitt om når skapet sist gang ble rehabilitert, men AMS måler ble montert i sikringsskapet i 2017."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R06",
      "description": "Ikke montert automatisk vannstopperventil eller komfyrvakt. Dette øker risikoen for vannskader og brann.",
      "evidence": [
        "Det er ikke montert automatisk vann stopper eller komfyrvakt."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R07",
      "description": "Sameiet har et gammelt varmtvannsanlegg som avventes med tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i nær fremtid. Dette kan medføre økte felleskostnader.",
      "evidence": [
        "Sameiet har imidlertid bl.a. et gammelt varmtvannsanlegg, hvor vi nå avventer tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i året som kommer."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R08",
      "description": "Felleskostnadene er vedtatt økt med 10% fra 1. mars. I tillegg er det budsjettert med underskudd for 2025 på kr 330. Dette kan indikere ytterligere fremtidige kostnadsøkninger for kjøper.",
      "evidence": [
        "Svar fra styre 12.01.2026: Når det gjelder felleskostnader er vedtatt en økning på 10% med virkning fra 1 mars",
        "for 2025 er det budsjettert med et mindre underskudd, både i driftsbudsjettet og i årsresultatet, på ‑330."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R09",
      "description": "Kommunalt pålegg om utbedring som sameiet står overfor. Dette kan medføre ekstraordinære kostnader og potensielt økte felleskostnader for seksjonseiere.",
      "evidence": [
        "Av større kostnader sameiet står overfor har vi et kommunalt pålegg om",
        "vært nødvendig på bakgrunn av bl.a. betydelige kostnadsøkninger på kommunale utgifter, samt økte kostnader til løpende vedlikehold."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R10",
      "description": "Energikarakter F (rød energimerking) på eiendommen. Dette indikerer høyt energiforbruk og kan medføre høye energikostnader for kjøper.",
      "evidence": [
        "Energikarakter: F",
        "Energifarge: Rød"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R11",
      "description": "Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, og kjøper har ikke informasjon om radonverdier i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette i forbindelse med salgsoppdrag."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Legalpant til kommunen og sameiet har prioritet foran tinglyste lån. Kjøper overtar disse heftelsene, noe som kan påvirke finansiering og prioritetsrekkefølge ved mislighold.",
      "evidence": [
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Pågående plansaker og reguleringsendringer i nærområdet, inkludert planprogram for Grorud sentrum og flere byggesaker. Dette kan påvirke bomiljø, eiendomsverdi og fremtidig utvikling i området.",
      "evidence": [
        "Planprogram for Grorud sentrum. Planprogrammet skal",
        "Saksnummer 202511855: Bergensveien 4 B ‑ bruksendring av lokaler i 2. og 3. etasje til treningssenter. Status: Under behandling.",
        "Saksnummer 202514694: Rosenbergveien 15 ‑ bruksendring av lokale i underetasje til treningsstudio og fasadeendring. Status: Under behandling.",
        "Saksnummer 202522082: Grorudveien 5 ‑ bruksendring av 1. etasje fra forsamlingslokale til cafe."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R14",
      "description": "Sameiet har ingen sikringsordning. Dette innebærer at kjøper ikke er beskyttet mot tap dersom sameiet ikke kan dekke sine forpliktelser.",
      "evidence": [
        "Sameiet har ikke sikringsordning."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R15",
      "description": "Hulltaking er ikke foretatt på badet ettersom det er nytt og ubrukt. Eventuelle skjulte fuktskader i tilliggende konstruksjoner kan derfor ikke utelukkes.",
      "evidence": [
        "Hulltaking er ikke foretatt ettersom baderom er nytt og ubrukt og FDV-dokumentasjon foreligger. Baderom ble bygget i 2025."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R16",
      "description": "Varmekabler og elektrisk utstyr er ikke funksjonstestet. Det er dermed usikkerhet knyttet til om disse fungerer som forutsatt.",
      "evidence": [
        "Varmekabler og elektrisk utstyr er ikke funksjon testet, så det vites ikke"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Rettighetshaver Emera No1 AS har tinglyst rettighet som medfører at eiendommen ikke kan disponeres over uten samtykke. Kjøper og selger er forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera.",
      "evidence": [
        "Rettighetshaver: Emera No1 AS",
        "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Tidligere lekkasje i avløpsrør på bad i 2024. Selv om dette er utbedret, kan det indikere risiko for fremtidige rørproblemer i et eldre bygg fra 1964.",
      "evidence": [
        "2024: Lekkasje i avløpsrør på bad. Utbedret av Rørpartner AS i regi av sameiet."
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R19",
      "description": "Bygget er fra 1964 og har normal standard for alder/konstruksjon. Eldre bygningsmasse innebærer generelt høyere risiko for skjulte feil, slitasje og behov for fremtidig vedlikehold.",
      "evidence": [
        "Byggeår: 1964",
        "Normal standard på bygget ut ifra alder/konstruksjon",
        "Bygningsmassens alder tilsier naturlig nok også at det kan"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R20",
      "description": "Selgers ansvar er begrenset oppad til kr 4 000 000 da selger anses som profesjonell. Dette kan begrense kjøpers mulighet til å kreve full erstatning ved vesentlige mangler.",
      "evidence": [
        "selger er å anse som profesjonell, er ansvaret begrenset oppad til kr. 4 000 000,‑.",
        "boligens salgssum og maksimalt 4 millioner kroner. Da selger er å anse som profesjonell, er ansvaret begrenset"
      ],
      "source_documents": [
        "d007_d007"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "kommunalt pålegg sameiet Grorud Senter hva gjelder pålegget kostnad",
    "varmtvannsanlegg tilstandsrapport rørlegger kostnad estimat",
    "brannceller avvik branncelleinndeling teknisk forskrift",
    "avløpsrør fellesanlegg alder tilstand rørlegger",
    "sameiet budsjett 2026 vedlikeholdsplan ekstraordinære kostnader"
  ],
  "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R01 (Selger ikke bebodd):** Direkte sitat fra egenerklæring bekrefter risikoen fullt ut. Confidence justeres opp til 0.97 da dette er eksplisitt og sentralt.\n\n**R02 (Branndør TG2):** Klart dokumentert i tilstandsrapporten. Confidence opprettholdes på 0.95.\n\n**R03 (Kullfilterventilator TG2):** Bekreftet to steder i dokumentet. Confidence opprettholdes på 0.92.\n\n**R04 (Gulvskjevheter TG3):** Sterkeste avvik i rapporten – TG3 er høyeste alvorlighetsgrad. Confidence justeres opp til 0.97 da dette er det eneste TG3-avviket og er klart dokumentert med konkrete mål.\n\n**R05 (El-tilsyn mangler):** Bekreftet i egenerklæring. Confidence opprettholdes på 0.90. Merk at samsvarserklæring foreligger for nyere arbeider, noe som delvis reduserer risikoen.\n\n**R06 (Ingen vannstopper/komfyrvakt):** Direkte sitat bekrefter. Confidence justeres opp til 0.92 da dette er eksplisitt nevnt.\n\n**R07 (Gammelt varmtvannsanlegg):** Bekreftet i styrets svar. Confidence justeres opp til 0.93 da dette er konkret og aktuelt.\n\n**R08 (Felleskostnader økt 10%):** Bekreftet i styrets svar datert 12.01.2026. Underskuddet på -330 er imidlertid svært lite (kr 330), noe som reduserer alvorlighetsgraden av underskuddsdelen. Confidence opprettholdes på 0.90.\n\n**R09 (Kommunalt pålegg):** Evidensen er ufullstendig – teksten er avkuttet og det fremgår ikke hva pålegget konkret gjelder eller kostnadsestimat. Confidence justeres ned til 0.75 og det foreslås re-retrieval for å finne mer informasjon.\n\n**R10 (Energikarakter F):** Direkte bekreftet. Confidence justeres opp til 0.97.\n\n**R11 (Radonmåling mangler):** Bekreftet, men dokumentet presiserer at det ikke er krav om dette. Risikoen er reell men begrenset. Confidence opprettholdes på 0.80.\n\n**R12 (Legalpant):** Godt dokumentert med tre separate evidenspunkter. Confidence justeres opp til 0.90.\n\n**R13 (Plansaker nærområde):** Evidensen viser kun bruksendringer i nærliggende bygg (treningssenter, café), ikke større infrastrukturprosjekter som direkte påvirker eiendommen. Planprogrammet for Grorud sentrum er nevnt men ikke detaljert. Confidence justeres ned til 0.72 da påvirkningen på eiendomsverdi er usikker.\n\n**R14 (Ingen sikringsordning):** Direkte bekreftet. Confidence justeres opp til 0.87.\n\n**R15 (Hulltaking ikke foretatt):** Evidensen viser at hulltaking ikke ble gjort fordi badet er nytt (2025) med FDV-dokumentasjon og at fuktmåling ikke viste avvik. Dette reduserer risikoen noe. Confidence justeres ned til 0.65 da begrunnelsen for å ikke ta hulltaking er faglig akseptabel.\n\n**R16 (Varmekabler ikke testet):** Direkte bekreftet. Confidence opprettholdes på 0.85.\n\n**R17 (Emera No1 AS rettighet):** Bekreftet i grunnboksutskrift. Confidence justeres opp til 0.85 da dette er en tinglyst rettighet med konkrete konsekvenser for kjøper.\n\n**R18 (Tidligere rørlekkasje):** Bekreftet, men utbedret. Risikoen er moderat da det er et eldre bygg. Confidence justeres ned til 0.72 da utbedring er dokumentert.\n\n**R19 (Byggeår 1964):** Bekreftet. Confidence justeres opp til 0.87.\n\n**R20 (Ansvarsbegrensning kr 4 mill):** Bekreftet i to separate tekstpassasjer. Confidence justeres opp til 0.85.\n\n**Manglende risikoer identifisert:**\n- Avløpsrør kun inspisert inne i leiligheten (ikke hele strekket) – potensielt skjulte feil\n- Branncelleavvik er nevnt i dokumentet (\"Er det påvist synlige tegn på avvik i branncelleinndeling? Ja\") – dette er en potensielt alvorlig risiko som IKKE er eksplisitt identifisert som egen risiko\n- Sameiet har 34 næringsseksjoner i tillegg til 97 boligseksjoner – næringsandelen kan påvirke finansieringsmuligheter\n- Naturlig ventilasjon (ikke mekanisk) i leiligheten generelt\n\nDet viktigste manglende funnet er branncelleavviket som er markert \"Ja\" i rapporten – dette bør undersøkes nærmere.\n"
}

## Raw Response
```json
{
  "id": "msg_012Fe8Uh3Rrkdb6TZ4kZdPtn",
  "container": null,
  "content": [
    {
      "id": "toolu_0114c7JtYDATpTaL6rtYK5Rc",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Selger har ikke bebodd eiendommen og mangler spesifikk kunnskap om den. Dette øker risikoen for at skjulte feil og mangler ikke er opplyst om.",
            "evidence": [
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Manglende godkjent branndør etter dagens krav (EI30). Dette er et avvik med TG2 og kan utgjøre en sikkerhetsrisiko samt medføre krav om utbedring.",
            "evidence": [
              "Utvendig ‑ Dører | Det er ikke godkjent branndør etter dagens krav. Etter 2010 er det krav om EI30, som står for integritet (E), isolasjon (I) og 30 minutter"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R03",
            "description": "Kun kullfilterventilator på kjøkkenet uten mekanisk/forsert avtrekk fra kokesonen. Dette er et avvik (TG2) som kan gi dårlig inneklima og manglende oppfyllelse av ventilasjonskrav.",
            "evidence": [
              "Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen.",
              "2 etasje Stue/ kjøkken ‑ Avtrekk | Det er kun kullfilterventilator på kjøkkenet og heller ikke andre forserte/ mekaniske avtrekksløsninger fra kokesonen."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R04",
            "description": "Gulvskjevheter med TG3 – det er målt 38 mm høydeforskjell gjennom hele rommet, noe som overstiger godkjente måleavvik (maks 30 mm). Dette er et vesentlig avvik som kan kreve kostbare utbedringstiltak.",
            "evidence": [
              "Tilstandsgrad 3 gis med bakgrunn i standardens krav til godkjente måleavvik. Det er målt 38 mm. gjennom hele rommet.",
              "høydeforskjell på over 30 mm gjennom hele rommet."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R05",
            "description": "Elektrisk anlegg uten el-tilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll. Anlegget ble sist rehabilitert i 2017, og det er usikkerhet knyttet til anleggets tilstand og sikkerhet.",
            "evidence": [
              "1. Foreligger det eltilsynsrapport de siste 5 år, og det er ikke foretatt el-kontroll? Nei",
              "2017 Ingen opplysninger er gitt om når skapet sist gang ble rehabilitert, men AMS måler ble montert i sikringsskapet i 2017."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R06",
            "description": "Ikke montert automatisk vannstopperventil eller komfyrvakt. Dette øker risikoen for vannskader og brann.",
            "evidence": [
              "Det er ikke montert automatisk vann stopper eller komfyrvakt."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R07",
            "description": "Sameiet har et gammelt varmtvannsanlegg som avventes med tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i nær fremtid. Dette kan medføre økte felleskostnader.",
            "evidence": [
              "Sameiet har imidlertid bl.a. et gammelt varmtvannsanlegg, hvor vi nå avventer tilstandsrapport fra rørlegger, og som kan innebære nødvendige vedlikeholdstiltak i året som kommer."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R08",
            "description": "Felleskostnadene er vedtatt økt med 10% fra 1. mars. I tillegg er det budsjettert med underskudd for 2025 på kr 330. Dette kan indikere ytterligere fremtidige kostnadsøkninger for kjøper.",
            "evidence": [
              "Svar fra styre 12.01.2026: Når det gjelder felleskostnader er vedtatt en økning på 10% med virkning fra 1 mars",
              "for 2025 er det budsjettert med et mindre underskudd, både i driftsbudsjettet og i årsresultatet, på ‑330."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R09",
            "description": "Kommunalt pålegg om utbedring som sameiet står overfor. Dette kan medføre ekstraordinære kostnader og potensielt økte felleskostnader for seksjonseiere.",
            "evidence": [
              "Av større kostnader sameiet står overfor har vi et kommunalt pålegg om",
              "vært nødvendig på bakgrunn av bl.a. betydelige kostnadsøkninger på kommunale utgifter, samt økte kostnader til løpende vedlikehold."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R10",
            "description": "Energikarakter F (rød energimerking) på eiendommen. Dette indikerer høyt energiforbruk og kan medføre høye energikostnader for kjøper.",
            "evidence": [
              "Energikarakter: F",
              "Energifarge: Rød"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R11",
            "description": "Selger har ikke utført radonmåling. Radon kan utgjøre en helserisiko, og kjøper har ikke informasjon om radonverdier i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette i forbindelse med salgsoppdrag."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Legalpant til kommunen og sameiet har prioritet foran tinglyste lån. Kjøper overtar disse heftelsene, noe som kan påvirke finansiering og prioritetsrekkefølge ved mislighold.",
            "evidence": [
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Pågående plansaker og reguleringsendringer i nærområdet, inkludert planprogram for Grorud sentrum og flere byggesaker. Dette kan påvirke bomiljø, eiendomsverdi og fremtidig utvikling i området.",
            "evidence": [
              "Planprogram for Grorud sentrum. Planprogrammet skal",
              "Saksnummer 202511855: Bergensveien 4 B ‑ bruksendring av lokaler i 2. og 3. etasje til treningssenter. Status: Under behandling.",
              "Saksnummer 202514694: Rosenbergveien 15 ‑ bruksendring av lokale i underetasje til treningsstudio og fasadeendring. Status: Under behandling.",
              "Saksnummer 202522082: Grorudveien 5 ‑ bruksendring av 1. etasje fra forsamlingslokale til cafe."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R14",
            "description": "Sameiet har ingen sikringsordning. Dette innebærer at kjøper ikke er beskyttet mot tap dersom sameiet ikke kan dekke sine forpliktelser.",
            "evidence": [
              "Sameiet har ikke sikringsordning."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R15",
            "description": "Hulltaking er ikke foretatt på badet ettersom det er nytt og ubrukt. Eventuelle skjulte fuktskader i tilliggende konstruksjoner kan derfor ikke utelukkes.",
            "evidence": [
              "Hulltaking er ikke foretatt ettersom baderom er nytt og ubrukt og FDV-dokumentasjon foreligger. Baderom ble bygget i 2025."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R16",
            "description": "Varmekabler og elektrisk utstyr er ikke funksjonstestet. Det er dermed usikkerhet knyttet til om disse fungerer som forutsatt.",
            "evidence": [
              "Varmekabler og elektrisk utstyr er ikke funksjon testet, så det vites ikke"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Rettighetshaver Emera No1 AS har tinglyst rettighet som medfører at eiendommen ikke kan disponeres over uten samtykke. Kjøper og selger er forpliktet til å signere standard kjøpekontrakt utarbeidet av Emera.",
            "evidence": [
              "Rettighetshaver: Emera No1 AS",
              "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Tidligere lekkasje i avløpsrør på bad i 2024. Selv om dette er utbedret, kan det indikere risiko for fremtidige rørproblemer i et eldre bygg fra 1964.",
            "evidence": [
              "2024: Lekkasje i avløpsrør på bad. Utbedret av Rørpartner AS i regi av sameiet."
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R19",
            "description": "Bygget er fra 1964 og har normal standard for alder/konstruksjon. Eldre bygningsmasse innebærer generelt høyere risiko for skjulte feil, slitasje og behov for fremtidig vedlikehold.",
            "evidence": [
              "Byggeår: 1964",
              "Normal standard på bygget ut ifra alder/konstruksjon",
              "Bygningsmassens alder tilsier naturlig nok også at det kan"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R20",
            "description": "Selgers ansvar er begrenset oppad til kr 4 000 000 da selger anses som profesjonell. Dette kan begrense kjøpers mulighet til å kreve full erstatning ved vesentlige mangler.",
            "evidence": [
              "selger er å anse som profesjonell, er ansvaret begrenset oppad til kr. 4 000 000,‑.",
              "boligens salgssum og maksimalt 4 millioner kroner. Da selger er å anse som profesjonell, er ansvaret begrenset"
            ],
            "source_documents": [
              "d007_d007"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "kommunalt pålegg sameiet Grorud Senter hva gjelder pålegget kostnad",
          "varmtvannsanlegg tilstandsrapport rørlegger kostnad estimat",
          "brannceller avvik branncelleinndeling teknisk forskrift",
          "avløpsrør fellesanlegg alder tilstand rørlegger",
          "sameiet budsjett 2026 vedlikeholdsplan ekstraordinære kostnader"
        ],
        "reasoning": "\nGjennomgang av alle 20 identifiserte risikoer mot dokumentevidensen:\n\n**R01 (Selger ikke bebodd):** Direkte sitat fra egenerklæring bekrefter risikoen fullt ut. Confidence justeres opp til 0.97 da dette er eksplisitt og sentralt.\n\n**R02 (Branndør TG2):** Klart dokumentert i tilstandsrapporten. Confidence opprettholdes på 0.95.\n\n**R03 (Kullfilterventilator TG2):** Bekreftet to steder i dokumentet. Confidence opprettholdes på 0.92.\n\n**R04 (Gulvskjevheter TG3):** Sterkeste avvik i rapporten – TG3 er høyeste alvorlighetsgrad. Confidence justeres opp til 0.97 da dette er det eneste TG3-avviket og er klart dokumentert med konkrete mål.\n\n**R05 (El-tilsyn mangler):** Bekreftet i egenerklæring. Confidence opprettholdes på 0.90. Merk at samsvarserklæring foreligger for nyere arbeider, noe som delvis reduserer risikoen.\n\n**R06 (Ingen vannstopper/komfyrvakt):** Direkte sitat bekrefter. Confidence justeres opp til 0.92 da dette er eksplisitt nevnt.\n\n**R07 (Gammelt varmtvannsanlegg):** Bekreftet i styrets svar. Confidence justeres opp til 0.93 da dette er konkret og aktuelt.\n\n**R08 (Felleskostnader økt 10%):** Bekreftet i styrets svar datert 12.01.2026. Underskuddet på -330 er imidlertid svært lite (kr 330), noe som reduserer alvorlighetsgraden av underskuddsdelen. Confidence opprettholdes på 0.90.\n\n**R09 (Kommunalt pålegg):** Evidensen er ufullstendig – teksten er avkuttet og det fremgår ikke hva pålegget konkret gjelder eller kostnadsestimat. Confidence justeres ned til 0.75 og det foreslås re-retrieval for å finne mer informasjon.\n\n**R10 (Energikarakter F):** Direkte bekreftet. Confidence justeres opp til 0.97.\n\n**R11 (Radonmåling mangler):** Bekreftet, men dokumentet presiserer at det ikke er krav om dette. Risikoen er reell men begrenset. Confidence opprettholdes på 0.80.\n\n**R12 (Legalpant):** Godt dokumentert med tre separate evidenspunkter. Confidence justeres opp til 0.90.\n\n**R13 (Plansaker nærområde):** Evidensen viser kun bruksendringer i nærliggende bygg (treningssenter, café), ikke større infrastrukturprosjekter som direkte påvirker eiendommen. Planprogrammet for Grorud sentrum er nevnt men ikke detaljert. Confidence justeres ned til 0.72 da påvirkningen på eiendomsverdi er usikker.\n\n**R14 (Ingen sikringsordning):** Direkte bekreftet. Confidence justeres opp til 0.87.\n\n**R15 (Hulltaking ikke foretatt):** Evidensen viser at hulltaking ikke ble gjort fordi badet er nytt (2025) med FDV-dokumentasjon og at fuktmåling ikke viste avvik. Dette reduserer risikoen noe. Confidence justeres ned til 0.65 da begrunnelsen for å ikke ta hulltaking er faglig akseptabel.\n\n**R16 (Varmekabler ikke testet):** Direkte bekreftet. Confidence opprettholdes på 0.85.\n\n**R17 (Emera No1 AS rettighet):** Bekreftet i grunnboksutskrift. Confidence justeres opp til 0.85 da dette er en tinglyst rettighet med konkrete konsekvenser for kjøper.\n\n**R18 (Tidligere rørlekkasje):** Bekreftet, men utbedret. Risikoen er moderat da det er et eldre bygg. Confidence justeres ned til 0.72 da utbedring er dokumentert.\n\n**R19 (Byggeår 1964):** Bekreftet. Confidence justeres opp til 0.87.\n\n**R20 (Ansvarsbegrensning kr 4 mill):** Bekreftet i to separate tekstpassasjer. Confidence justeres opp til 0.85.\n\n**Manglende risikoer identifisert:**\n- Avløpsrør kun inspisert inne i leiligheten (ikke hele strekket) – potensielt skjulte feil\n- Branncelleavvik er nevnt i dokumentet (\"Er det påvist synlige tegn på avvik i branncelleinndeling? Ja\") – dette er en potensielt alvorlig risiko som IKKE er eksplisitt identifisert som egen risiko\n- Sameiet har 34 næringsseksjoner i tillegg til 97 boligseksjoner – næringsandelen kan påvirke finansieringsmuligheter\n- Naturlig ventilasjon (ikke mekanisk) i leiligheten generelt\n\nDet viktigste manglende funnet er branncelleavviket som er markert \"Ja\" i rapporten – dette bør undersøkes nærmere.\n"
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
    "input_tokens": 24245,
    "output_tokens": 5418,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
