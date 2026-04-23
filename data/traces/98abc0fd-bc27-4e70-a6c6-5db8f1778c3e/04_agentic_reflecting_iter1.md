# Trace: agentic_reflecting_iter1
- **Run ID:** 98abc0fd-bc27-4e70-a6c6-5db8f1778c3e
- **Tidspunkt:** 2026-03-28T00:42:33.460272+00:00
- **Varighet:** 100.12s
- **Input tokens:** 21911
- **Output tokens:** 5104

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
Risiko 1: Ulovlige/søknadspliktige bygningsendringer uten tegninger eller godkjenning: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Slike endringer er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.
  Confidence: 0.95
  Evidens: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.; Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.; Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.

Risiko 2: Feil på bad og tidligere lekkasje fra sluk: Det er sprekk i flis på høyre side av toalettet, og det har vært lekkasje fra sluk ned i kjelleren. Sluket er reparert, men det er usikkert om det finnes skjulte følgeskader.
  Confidence: 0.88
  Evidens: Sprekk i flis på høyre side av toalettet, vanskelig å se.; Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.; Det er ikke rapportert noen følgeskader her.

Risiko 3: Manglende radonmåling og ingen radonsperre: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Selger opplyser at måling er utsendt til analyse, men verdiene foreligger ikke.
  Confidence: 0.92
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Ikke fått verdiene enda. De er til analyse.

Risiko 4: Rekkverk på balkong er for lavt i forhold til dagens krav: Tilstandsrapporten påpeker at rekkverket på balkong eller terrasse ikke tilfredsstiller gjeldende sikkerhetskrav, noe som utgjør en sikkerhetsrisiko.
  Confidence: 0.95
  Evidens: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.

Risiko 5: Bygningselementer har passert normal forventet levetid: Boligen er fra 1970 og flere elementer har passert normal forventet levetid, noe som innebærer at vedlikehold og utbedringer må påregnes.
  Confidence: 0.9
  Evidens: Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.; Byggeår: 1970

Risiko 6: Ufaglært arbeid på elektrisk anlegg: Det er lagt opp trekkerør for fremtidig elektrisk installasjon av ufaglærte, men røret er ikke installert eller tilkoblet strøm. Dette kan innebære risiko knyttet til fremtidig elektrisk arbeid og lovlighet.
  Confidence: 0.82
  Evidens: Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.; Faglært: 0 / Ufaglært: 2 (markert)

Risiko 7: Høy fellesgjeld og pantesikret gjeld i borettslaget: Borettslagets bokførte langsiktige gjeld er kr 6 734 992, og total pantesikret gjeld er kr 7 934 992. I tillegg har selger et pantedokument på kr 2 850 000 til DNB. Kjøper overtar andel av fellesgjelden.
  Confidence: 0.85
  Evidens: Bokført langsiktig gjeld 6 734 992; Boligselskapets pantesikrede gjeld 7 934 992; 2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA; Avdrag felleslån kr.598 / Renter felleslån kr.942 / Felleskostnader kr. 3630 / Felleskostnader totalt: kr. 5170

Risiko 8: Tilliggende konstruksjoner på bad er ikke undersøkt: Tilstandsrapporten angir at tilliggende konstruksjoner til badet ikke er undersøkt (TG IU), noe som betyr at skjulte fukt- eller råteskader ikke kan utelukkes.
  Confidence: 0.87
  Evidens: Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt; Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.

Risiko 9: Forkjøpsrett og godkjenningsprosess kan forsinke overtakelse: Øvrige andelseiere og USBL-medlemmer har forkjøpsrett med 8 dagers frist etter budaksept, og ny eier må godkjennes av styret innen 20 dager. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.
  Confidence: 0.8
  Evidens: Øvrige andelseiere i borettslaget og dernest medlemmer av Boligbyggelaget USBL har forkjøpsrett. Forkjøpsretten avklares etter budaksept, fristen for dette er 8 dager. Deretter må ny eier godkjennes av borettslagets styre, fristen for dette er 20 dager.

Risiko 10: Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av deler av Ås sentralområde, gang- og sykkelvei og gateterminal. Dette kan medføre endringer i nærområdet.
  Confidence: 0.72
  Evidens: Reguleringsplaner under arbeid i nærheten (500 meter); Id 337 – Detaljregulering for bevaring av deler av Ås sentralområde – Status: Planlegging igangsatt; Id 305 – Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum – Status: Planlegging igangsatt; Id 359 – Detaljregulering for del av fv. 152 - Gateterminal

Risiko 11: Manglende byggetegninger gjør det vanskelig å verifisere lovlighet av boligens nåværende utforming: Det foreligger ingen godkjente tegninger for bygget, og det kan være avvik mellom dagens rombruk og det opprinnelig godkjente.
  Confidence: 0.88
  Evidens: Det foreligger ikke tegninger; Det er ikke fremlagt tegninger for bygget.; Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.

Risiko 12: Fellesgjeld og felleskostnader kan økes med kun én måneds varsel: Borettslaget kan endre felleskostnadene med én måneds skriftlig varsel, noe som innebærer en risiko for økte løpende kostnader for kjøper.
  Confidence: 0.75
  Evidens: Felleskostnadene betales hver måned. Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.

Risiko 13: Sameier i andel med ideell andel 3/10 er født 2004 (mindreårig ved kjøpstidspunkt): En av sameierne i andelen er født 14.11.2004, noe som kan reise spørsmål om vedkommendes rettslige handleevne ved salget og om nødvendige fullmakter/vergemål er på plass.
  Confidence: 0.83
  Evidens: FØDT: 14.11.2004 IDEELL: 3/10; SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10

Dokumentkontekst:
[d001_d001 | Side [1]]
 og oppvarming
14 Er det eller har det vært nedgravd oljetank på eiendommen?
0 2
Ja Nei, ikke som jeg kjenner til
Side 4

## Side 44

15 Har det vært feil på varmeanlegg eller ventilasjonsanlegg?
0 2
Ja Nei, ikke som jeg kjenner til
16 Er det utført arbeid på varmeanlegg eller ventilasjonsanlegg?
0 2
Ja Nei, ikke som jeg kjenner til
Skjevheter og sprekker
17 Er det tegn på setningsskader eller sprekker i for eksempel grunnmur eller fliser?
0 2
Ja Nei, ikke som jeg kjenner til
18 Har det vært feil eller

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
 anslag
gis for TG3, der dette er mulig.
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 4 av 17

## Side 27

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Beskrivelse av eiendommen
Boligen er i hovedsak som fra byggeåret og fremstår i teknisk
god stand. Det gjøres oppmerksom på at enkelte elementer har
passert normal forventet levetid, slik at vedlikehold/utbedring Arealer
Gå til side
må påregnes i tiden som kommer. Forøvrig vises til

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
regning i forhold til antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene benyttes for beregning av
estetiske status på et gitt tidspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken tilstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
byggverk eller en bygningsdel befinner seg i. Benyttes ved beskrivelse av opplyst at tilhører boenheten,

---

[d001_d001 | Side [1]]
rt?
Side 3

## Side 43

0 2
Faglært Ufaglært
10.2.7 Fortell kort hva som ble gjort av ufaglærte
Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom
gang og soverom.
Rør
11 Har eiendommen privat vannforsyning (ikke tilknyttet det offentlige vannettet), septik, pumpekum, brønn, avløpskvern eller liknende?
0 2
Ja Nei, ikke som jeg kjenner til
12 Har det vært feil på utvendige eller innvendige avløpsrør eller

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

0 2
Ja Nei, ikke som jeg kjenner til
18 Har det vært feil eller gjort endringer på ildsted eller pipe?
0 2
Ja Nei, ikke som jeg kjenner til
Sopp og skadedyr
19 Har det vært skadedyr i leiligheten?
0 2
Ja Nei, ikke som jeg kjenner til
20 Har det vært skadedyr i fellesområdene til sameiet eller borettslaget?
0 2
Ja Nei, ikke som jeg kjenner til
21 Har det vært mugg, sopp eller råte i boligen eller andre bygninger på eiendommen?
0 2
Ja Nei, ikke som jeg kjenner til
22 Har det vært mugg, sopp eller råte i

---

[d001_d001 | Side [1]]
d
vask, dusj, badekar, osv.), løsningen eller byggematerialet er uegnet.
Konsekvens/tiltak
Dører • Dersom det ikke gjøres tiltak, kan dette medføre oppfukting,
Beskrivelse oppsvelling og forringelse av materialer over tid og fuktskader på
tilstøtende konstruksjoner.
Bygningen har brann- og lydklassifisert entrédør og malt balkongdør i
tre med 2-lags glass.
1 ETASJE > BAD
Årstall: 2010
Overflater Gulv
Beskrivelse
Balkonger, terrasser og rom under balkonger Gulvet er flislagt. Rommet har elektriske

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
: 7 av 17

## Side 30

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapport
Etasjeskiller er av betongdekke.
BOLIGBYGG MED FLERE BOENHETER
Det er ikke registrert synlige skader eller målt unormale
høydeforskjeller.
Byggeår Kommentar
1970 Byggeåret er basert på opplysninger
fra eiendomsmatrikkelen.
Innvendige dører
Standard
Beskrivelse
Normal standard på bygget ut ifra alder/konstruksjon - jamfør
Innvendig har boligen

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
t såle, antatt
Det er ikke fremlagt tegninger for bygget. Det er imidlertid
fundamentert til fast grunn eller faste komprimerte masser.
opplyst om mindre endringer utført av eier.
Yttervegger i pusset mur og trekledning. Flatt tak tekket med
- Kjøkken er flyttet til stue for etablering av ytterligere ett
membran/folie eller lignende.
soverom.
Bygningen har malte trevinduer med 3-lags glass.
- Bod i entré er slått sammen med tilstøtende soverom. En
slik endring er normalt søknadspliktige.
Bygningen har

---

[d001_d001 | Side [1]]
ikke som jeg kjenner til
22 Har det vært mugg, sopp eller råte i sameiet eller borettslaget?
0 2
Ja Nei, ikke som jeg kjenner til
Planer og godkjenninger
23 Mangler leiligheten brukstillatelse eller ferdigattest?
0 2
Ja Nei, ikke som jeg kjenner til
24 Har du bygd på eller gjort om kjeller, loft eller annet til boligrom?
0 2
Ja Nei
25 Selges eiendommen med utleiedel som leilighet, hybel eller lignende?
0 2
Ja Nei
27 Er det utført radonmåling?
2 0
Ja Nei, ikke som jeg kjenner til
Side 5

## Side 45

Når ble

---

[d001_d001 | Side [1]]
ært feil på bad, vaskerom eller toalettrom?
2 0
Ja Nei, ikke som jeg kjenner til
Beskriv feilen og omfanget
Sprekk i flis på høyre side av toalettet, vanskelig å se. Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-
komponentmaling når de rørfornyet avløpsrørene. Det er ikke rapportert noen følgeskader her.
2 Er det utført arbeid på bad, vaskerom eller toalettrom?
2 0
Ja Nei, ikke som jeg kjenner til
2.1.1 Navn på arbeid
Baderom
2.1.2 Årstall
2021
2.1.3 Hvordan

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
ringsskap
ikke er tette, så langt dette er mulig å sjekke uten å fjerne
kapslinger?
Nei
11. Finnes det kursfortegnelse, og er den i samsvar med antall sikringer?
Ja
12. Foreta en helhetsvurdering av det elektriske anlegget, dets alder,
allmenne tilstand og fare for liv og helse. Bør det elektriske anlegget
ha en utvidet el-kontroll?
Nei
FORHOLD SOM ÅPENBART KAN MEDFØRE FARE FOR
HELSE, MILJØ OG SIKKERHET
Dette punktet inneholder tydelige og lett synlige forhold ved boligen
som åpenbart kan påvirke helse,

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
fentlig vei.
Tilknytning vann
Eiendommen er tilknyttet offentlig vannforsyning via private stikkledninger.
Tilknytning avløp
Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger.
Regulering
Takstmannen har ikke vurdert regulering eller andre relevante forhold i bygningsetaten. Videre ble ingen spesielle forhold gjort kjent for
takstmannen under befaringen. For å få mer informasjon om reguleringsbegrensninger og lignende, anbefales det å sette seg inn i
reguleringsbestemmelser og planer.

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
g dette har virket
handelen, slik som reguleringskart med
inn på avtalen. En bolig som har blitt brukt i en viss
bestemmelser, grunnboksutskrift og evt. servitutter /
tid, har vanligvis blitt utsatt for slitasje og skader
heftelser, husordensregler, regnskaper, budsjetter,
kan ha oppstått.
innkalling og referat fra siste års sameiermøte etc.

## Side 22

Disse dokumentene ligger vedlagt eller kan til Propr.
oversendes på etterspørsel.
Om det er spørsmål vedrørende nåværende eller
Salgsoppgaven er basert på

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
2 0
Ja Nei, ikke som jeg kjenner til
Side 5

## Side 45

Når ble målingen utført og hva ble måleverdiene?
Ikke fått verdiene enda. De er til analyse.
28 Er det andre forhold av betydning eller sjenanse for eiendommen eller nærområdet?
0 2
Ja Nei, ikke som jeg kjenner til
29 Foreligger det planer eller bestemmelser som kan medføre endringer av felleskostnader eller fellesgjeld?
0 2
Ja Nei, ikke som jeg kjenner til
30 Er sameiet eller borettslaget er involvert i konflikter av noe slag?
0 2
Ja Nei, ikke som

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
lvorlig plage eller sjenanse for eiendommenes øvrige
andelseiere eller brukere, kan styret kreve fravikelse fra boligen etter
tvangsfullbyrdelseslovens kapittel 13.
7. Felleskostnader og pantesikkerhet
7-1 Felleskostnader
(1) Felleskostnadene betales hver måned. Borettslaget kan endre
felleskostnadene med en måneds skriftlig varsel.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer
andelseieren den til en hver tid gjeldende forsinkelsesrente etter lov av
17. desember 1976 nr 100.
7-2

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
dering av bygningsdeler som er
TG IU: Konstruksjoner som ikke er undersøkt
underlagt borettslagets ansvarsområde. Det gjelder i hovedsak
yttervegger, takkonstruksjon, drenering, grunnmur,
grunn/fundamenter, felles trapper og trapperom,
balkonger/terrasser, etasjeskiller, piper og fyringsanlegg.
Nevnte bygningsdeler er vurdert i den grad de har tilknytning til
leiligheten, som eks. overflater på innside av yttervegger mot
leiligheten, overflate på pipe i leiligheten, etc. Fellesareal skal
vurderes om

---

[d001_d001 | Side [1]]
s lovlighet (bortsett fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og dette er kjent for bygningssakkyndig, eller fellesarealet har en særlig
tilknytning til boligen).
© iVerdi 2023 © Norsk takst 2023
Malen til denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet etter åndsverkloven og kan kun benyttes av medlemsforetakene i Norsk takst og
av takstingeniører som

---

[d001_d001 | Side [1]]
r andre som har
inngått samarbeidsavtale med stat, fylkeskommune eller kommune om å skaffe
boliger til vanskeligstilte.
(4) I tillegg har……………………… rett til å eie inntil …………..av andelene.
(5) Andelseierne skal få utlevert et eksemplar av borettslagets vedtekter.
2-2 Sameie i andel
(1) Bare personer som bor eller skal bo i boligen kan bli sameier i andel.
(2) Dersom flere eier en andel sammen, skal det regnes som bruksoverlating
hvis en eller flere av sameierne ikke bor i boligen, jf vedtektenes punkt

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
erflate på pipe i leiligheten, etc. Fellesareal skal
vurderes om boligen har vedlikeholdsplikt for sin andel av
utvendige konstruksjoner.
Det bør også noteres at vedtekter kan endre en eiers
rettigheter til bruk av bod eller rom i fellesarealer. I sameier er
tinglysning eneste måte å etablere en varig bruksrett, som
dermed blir en integrert del av boenheten. Rett til eksklusiv
bruk av slike arealer i et sameie er begrenset til 30 år, i henhold
til eierseksjonsloven. For borettslag og aksjeleiligheter

---

[d001_d001 | Side [1]]
 post@klareinkasso.no. Dersom en eier dør, må Usbl ha melding om dette. Skifteattest kan
sendes til eierskifte@usbl.no og boligen blir kostnadsfritt overført til gjenlevende
ektefelle/samboer.

## Side 53

Du finner denne innkallingen, samt andre nyttige dokumenter og opplysninger om ditt
borettslag/sameie på Bonabo for beboere. Fra menyen «Min bolig» og «Felleskostnader» får du også
oversikt over dine månedlige felleskostnader.

## Side 54

Innkalling til generalforsamling
Det innkalles til ordinær

---

[d001_d001 | Side [1]]
 12117655235 40 145 760 5 830 400
Antall andeler, andel gjeld og sum av fellesgjeld lån 16364224137 40 22 615 904 600
2803 AL Lyngfaret borettslag Org. nr. 947199714
Side 13 av 20

## Side 67

Noter årsregnskap 2024 AL Lyngfaret borettslag
Note 13 - Pantstillelser
Bokført verdi pr. 31.12.2024
Bokført langsiktig gjeld 6 734 992
Innskuddskapital 1 200 000
Boligselskapets pantesikrede gjeld 7 934 992
Bokført verdi av pantsatt eiendom 4 317 629
Borettslagets bokførte gjeld er sikret ved pant. Borettsinnskuddet

---

[d001_d001 | Side [1]]
70
Utleie reguleres av USBL og borettslagets vedtekter
og krever styregodkjenning.
Forkjøpsrett
Øvrige andelseiere i borettslaget og dernest
medlemmer av Boligbyggelaget USBL har Utleie
forkjøpsrett. Forkjøpsretten avklares etter
budaksept, fristen for dette er 8 dager. Deretter må
ny eier godkjennes av borettslagets styre, fristen for
Denne leiligheten er en andelsleilighet i borettslag,
dette er 20 dager.
og følgende regler gjelder for utleie jamfør

## Side 20

borettslagsloven: 545 kr (Tinglysing av

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

boligstørrelse og nærmere krav til bygningers utforming der det er
hensiktsmessig. Avtalen kan også regulere at kommunen eller andre skal ha
fortrinnsrett til å kjøpe en andel av boligene til markedspris.
c. Nødvendige tiltak for gjennomføring av planen, jf. pbl. § 17-3 tredje ledd.
Videre kan avtalen gå ut på at grunneier eller utbygger skal sikre
opparbeidelse eller opparbeide tiltak som er nødvendige for gjennomføringen
av reguleringsplaner. Slike tiltak må stå i rimelig forhold til utbyggingens art
og

---

[d001_d001 | Side [1]]
g og/eller salg av råvarer fra gårdens produksjon.
Kriterier som videre vektlegges er bl.a. tiltakets virkning på jord- og skogbruk,
eventuelt nedbygging av dyrka/dyrkbar jord, størrelse og volum av tiltaket,
virkning for natur, kulturlandskap, naturmangfold, friluftsliv og trafikkforhold.
Lagervirksomhet og lignende i ledige rom i eksisterende driftsbygning overstiger
ikke halve volumet av bygget, og det medfører ikke omfattende ombygging.
Økt trafikk ved avkjøring til og fra offentlig vei må godkjennes

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

---

[d001_d001 | Side [1]]
fasadene og type og høyde på
vegetasjon. I byggesøknaden kan det kreves at forholdet til nabobebyggelse
vises på snitt- eller perspektivtegninger, 3D modell eller lignende.
Der tiltak bryter med eksisterende byggeskikk eller bebyggelsesstruktur
redegjøres det for hvordan tiltaket tilfører nye kvaliteter og tilpasses området.
Retningslinjer til områder med småhusbebyggelse:
Flertallet av følgende formingsfaktorer hentes fra eksisterende bebyggelse:
Høyde, lengde/bredde, grunnflate, volumoppbygging, takform

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
grønn struktur.
I forslag til reguleringsplaner og byggesøknader skal det redegjøres for tiltakets
estetiske sider både i seg selv, forholdet til omgivelsene og til fjernvirkning.
Illustrasjoner skal være realistiske.
Innenfor områder med småhusbebyggelse skal ny bebyggelse og nye tomter
følge områdenes bebyggelses- og tomtestruktur for å opprettholde
stedskarakteren. Der det ikke er klare strukturer, skal nye tomter og bygninger
forbedre denne. Kommunen skal godkjenne plassering og utforming av

---

[d001_d001 | Side [1]]
ealene er godkjent av bygningsmyndighetene.
Er arealene godkjent av bygningsmyndighetene fremgår det av stemplede, godkjente tegninger med angitt rombeskrivelse sammenfallende
med bruken.
Lovlighet
Byggetegninger
Det foreligger ikke tegninger
Kommentar: Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.
- Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.
- Bod i entré er slått sammen med tilstøtende soverom. En slik endring er

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
n 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Tilstandsrapportens avgrensninger
betydning for om arealet måles og oppgis i tilstandsrapporten. Når arealet
måles tas det ikke hensyn til om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER
• Eiendommens markedsverdi kan ikke baseres på en rent matematisk
beregning i forhold til antall kvadratmeter opplyst i rapporten.
•

---

[d001_d001 | Side [1]]
tegrenser stemmer
med de grenser/gjerder/ beplantning som fysisk er
Oppgjør
satt. Det kan være avvik fra dagens rombruk/
rombenevnelse i forhold til det opprinnelige
byggemeldte/godkjente.
Håndteres av et profesjonelt oppgjørsfirma med
lisens fra Finanstilsynet.
Proprs standard kjøpekontrakt legges til grunn for
avtalen. Standardkontrakt kan fås ved henvendelse

## Side 23

Tilstandsrapport
Boligbygg med flere boenheter
Lyngveien 24 A, 1433 ÅS
ÅS kommune
gnr. 42, bnr. 279
Andelsnummer 112
Sum areal alle

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
en har 2 boder i kjeller på hhv. 2,7 kvm og 2,3 kvm.
Arealene er målt med laser på stedet, og er beregnet etter "Takstbransjens retningslinjer ved arealmåling 2014" og Norsk Standard (NS)
3940:2023.
Det gjøres oppmerksom på at kravene i Byggeforskriftene ikke sammenfaller med kravene i NS 3940, og at det av den grunn kan forekomme
forskjeller i hva som defineres som målbart areal.
Målbart areal etter NS 3940:2023 betyr ikke nødvendigvis at arealene er godkjent av bygningsmyndighetene.
Er arealene godkjent

---

[d001_d001 | Side [1]]
4
5
1
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse opplysningene benyttes som grunnlag for beslutninger.

## Side 99

Areal og koordinater for eiendommen
Areal 10 831,30 m2 Arealmerknad
Representasjonspunkt Koordinatsystem EUREF89 UTM Sone 32 Nord 6615950,85 Øst 600751,45
Grensepunkter Grenselinjer (m)
# Nord Øst Nøyaktigh. Nedsatt i Grensepunkttype Lengde Radius
1 6615883,16 600693,45 10 cm Ikke spesifisert (IS)

---

[d001_d001 | Side [1]]
er ikke
nøyaktig oppmålt. Dette medfører at grensene og arealene som
fremkommer er omtrentlige.
Arealbekreftelsen viser tomten for en hel eiendom, ikke for
seksjoner. Er boligen seksjonert (også dersom tomten er tillagt
som tilleggsareal) vil disponibelt areal for den enkelte seksjon
ikke fremkomme.

## Side 104

(Ingen tekst ekstrahert)

## Side 105

(Ingen tekst ekstrahert)

## Side 106

FAKTURA
Org.nr. NO964948798MVA
Kundenummer 85680
Fakturanummer 89594703
AL LYNGFARET BORETTSLAG
Avtalenummer

---

[d001_d001 | Side [1]]
de deler av en bygning hvor en
fastslå tykkelsen på innervegger, skjevheter i og utforming av brann fritt kan utvikle seg uten at den kan spre seg til andre
bygningskonstruksjoner som karnapp, buer og vinkler som ikke er rette, åpne rom bygninger eller andre deler av bygningen i løpet av en fastsatt tid.
over flere etasjer og så videre.
Om bruksendring
Eiendommens markedsverdi kan ikke baseres på en matematisk beregning basert på
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke

---

[d001_d001 | Side [1]]
eg i. Benyttes ved beskrivelse av opplyst at tilhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke
avvik. fremvist dokumentasjon på at rommet tilhører boenheten, med mindre
dette er angitt særskilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, borettslaget/sameiet og dette kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik definisjon av fellesareal.
Ved arealmåling

---

[d001_d001 | Side [1]]
 BORETTSLAG Org.nr 947199714
Adresse Postboks 313, 1401 SKI Ant. andeler 6
Eiendommer som eies (E), festes (F) eller framfestes (Fn) av borettslaget
Type Matrikkelnr Beregnet areal Arealmerknader
Grunneiendom 42/279 10831.3
Rapportmal: 'matrikkel' Versjon: '18082020' © Norkart AS
Norkart AS, Hoffsveien 4, 0275 OSLO (Org.nr. 934 161 181) Side 2 av 2

## Side 98

Utskriftsdato: 22.01.2026
Eiendomskart for eiendom 3218 - 42/279//
30 m
2
3
4
5
1
Det tas forbehold om riktigheten eller fullstendigheten av

---

[d001_d001 | Side [1]]
t. Røykvarslere og håndholdt brannslukningsutstyr
vurderes etter gjeldende forskrift om brannforebygging.
Helse, miljø og sikkerhet
Vurdering av avvik:
• Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med
radonsperre.
• Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.
Oppdragsnr.: 21004-1735 Befaringsdato: 03.03.2026 Side: 11 av 17

## Side 34

Lyngveien 24 A, 1433 ÅS Fjellhus Takst og Rådgivning AS
Gnr 42 - Bnr 279 Årvollskogen 30
3218 ÅS 1529 MOSS
Arealer,

---

[d001_d001 | Side [1]]
enhold
til eierseksjonsloven. For borettslag og aksjeleiligheter kan
rettigheter tildeles til andelseiere eller aksjeeiere, men kan
revideres av generalforsamlingen. Bruk av rom utenfor den
enkelte boenhet kan endres av borettslaget eller sameiet, noe
som kan påvirke boligens bruksareal (BRA).
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med flere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner Gå

---

[d001_d001 | Side [1]]
ong mv (BRA-b). Terrasse- og balkongareal (TBA) KLAGEORDNING FOR FORBRUKERE
opplyses der tilstandsrapporten skal benyttes i boligomsetningen og der
det er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav takhøyde (ALH)
Er du som forbruker misfornøyd med bygningssakkyndiges arbeid eller
opplyses sammen med BRA der det er aktuelt og en del av oppdraget. Rom
opptreden ved taksering av bolig eller fritidshus, se
skal ha atkomst og gangbart gulv for å kunne regnes som

---

[d001_d001 | Side [1]]
eksjonsloven har ulik definisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som definerer fellesareal slik: “Delen
• Fuktsøk: Overflatesøk med egnet søkeutstyr (fuktindikator) eller visuelle av bygning som brukes av to eller flere bruksenheter eller til bygningens
observasjoner. forvaltning, drift eller vedlikehold.
• Fuktmåling: Måling av fuktinnhold i materiale eller i bakenforliggende
konstruksjon ved bruk av egnet måleutstyr (blant annet hammerelektrode • Se øvrig informasjon om areal i

---

[d001_d001 | Side [1]]
ft til avhendingsloven og Norsk Standard omsetningen. Les mer om dette og hvordan du kan reservere deg på
3940 Areal- og volum-beregninger av bygninger fra 2023. https://www.norsktakst.no/norsk/om-norsk-
takst/personvernerklaering/reservasjon/
• Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det tidspunkt
oppmålingen fant sted. Vendu lager en boliganalyse basert på opplysninger fra rapporten. Les mer
om dette og hvordan du kan reservere deg her:
• Bruksareal (BRA) er det måleverdige arealet

---

[d001_d001 | Side [1]]
 gjelde frem til ferdigattest foreligger. I de
tilfeller der det ikke er eller kan utstedes ferdigattest, vil
brukstillatelsen gjelde uavhengig av om den er betegnet som
«midlertidig».
AREALBEKREFTELSE
Arealbekreftelse er simpelthen en bekreftelse på hvilken
størrelse kommunen har registrert på tomten. Det er normalt
medfølgende et kart/ målebrev, som viser tomtens grenser.
Enkelte tomter, særlig om de er utskilt langt tilbake i tid, er ikke
nøyaktig oppmålt. Dette medfører at grensene og arealene

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ulovlige/søknadspliktige bygningsendringer uten tegninger eller godkjenning: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Slike endringer er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.",
      "evidence": [
        "Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.",
        "Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
        "Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.",
        "Det foreligger ikke tegninger – bekreftet i tilstandsrapportens lovlighetsavsnitt."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        30
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Feil på bad og tidligere lekkasje fra sluk: Det er sprekk i flis på høyre side av toalettet, og det har vært lekkasje fra sluk ned i kjelleren. Sluket er reparert, men det er usikkert om det finnes skjulte følgeskader.",
      "evidence": [
        "Sprekk i flis på høyre side av toalettet, vanskelig å se.",
        "Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.",
        "Det er ikke rapportert noen følgeskader her.",
        "Tilliggende konstruksjoner til badet er ikke undersøkt (TG IU), noe som betyr at skjulte skader ikke kan utelukkes."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        41,
        27
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Manglende radonmåling og ingen radonsperre: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Selger opplyser at måling er utsendt til analyse, men verdiene foreligger ikke.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Ikke fått verdiene enda. De er til analyse.",
        "Avviket er eksplisitt nevnt under Helse, miljø og sikkerhet i tilstandsrapporten."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        34,
        45
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Rekkverk på balkong er for lavt i forhold til dagens krav: Tilstandsrapporten påpeker at rekkverket på balkong eller terrasse ikke tilfredsstiller gjeldende sikkerhetskrav, noe som utgjør en sikkerhetsrisiko.",
      "evidence": [
        "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
        "Avviket er eksplisitt nevnt under Helse, miljø og sikkerhet i tilstandsrapporten (side 34)."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        34
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Bygningselementer har passert normal forventet levetid: Boligen er fra 1970 og flere elementer har passert normal forventet levetid, noe som innebærer at vedlikehold og utbedringer må påregnes.",
      "evidence": [
        "Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.",
        "Byggeår: 1970 – bekreftet i tilstandsrapporten og eiendomsmatrikkelen."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        30
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Ufaglært arbeid på elektrisk anlegg: Det er lagt opp trekkerør for fremtidig elektrisk installasjon av ufaglærte, men røret er ikke installert eller tilkoblet strøm. Dette kan innebære risiko knyttet til fremtidig elektrisk arbeid og lovlighet.",
      "evidence": [
        "Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.",
        "Faglært: 0 / Ufaglært: 2 (markert i egenerklæringen).",
        "Takstmannen konkluderer med at utvidet el-kontroll ikke er nødvendig, men dette er basert på synlig tilstand."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        43
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R7",
      "description": "Høy fellesgjeld og pantesikret gjeld i borettslaget: Borettslagets bokførte langsiktige gjeld er kr 6 734 992, og total pantesikret gjeld er kr 7 934 992. I tillegg har selger et pantedokument på kr 2 850 000 til DNB. Kjøper overtar andel av fellesgjelden.",
      "evidence": [
        "Bokført langsiktig gjeld 6 734 992.",
        "Boligselskapets pantesikrede gjeld 7 934 992.",
        "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA.",
        "Avdrag felleslån kr.598 / Renter felleslån kr.942 / Felleskostnader kr. 3630 / Felleskostnader totalt: kr. 5170."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        67,
        95,
        20
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Tilliggende konstruksjoner på bad er ikke undersøkt: Tilstandsrapporten angir at tilliggende konstruksjoner til badet ikke er undersøkt (TG IU), noe som betyr at skjulte fukt- eller råteskader ikke kan utelukkes.",
      "evidence": [
        "Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt (TG IU).",
        "Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.",
        "Tidligere lekkasje fra sluk ned i kjelleren forsterker risikoen for skjulte fuktskader."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        41
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Forkjøpsrett og godkjenningsprosess kan forsinke overtakelse: Øvrige andelseiere og USBL-medlemmer har forkjøpsrett med 8 dagers frist etter budaksept, og ny eier må godkjennes av styret innen 20 dager. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.",
      "evidence": [
        "Øvrige andelseiere i borettslaget og dernest medlemmer av Boligbyggelaget USBL har forkjøpsrett. Forkjøpsretten avklares etter budaksept, fristen for dette er 8 dager.",
        "Deretter må ny eier godkjennes av borettslagets styre, fristen for dette er 20 dager."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        20
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av deler av Ås sentralområde, gang- og sykkelvei og gateterminal. Dette kan medføre endringer i nærområdet.",
      "evidence": [
        "Reguleringsplaner under arbeid i nærheten (500 meter).",
        "Id 337 – Detaljregulering for bevaring av deler av Ås sentralområde – Status: Planlegging igangsatt.",
        "Id 305 – Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum – Status: Planlegging igangsatt.",
        "Id 359 – Detaljregulering for del av fv. 152 - Gateterminal."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R11",
      "description": "Manglende byggetegninger gjør det vanskelig å verifisere lovlighet av boligens nåværende utforming: Det foreligger ingen godkjente tegninger for bygget, og det kan være avvik mellom dagens rombruk og det opprinnelig godkjente.",
      "evidence": [
        "Det foreligger ikke tegninger.",
        "Det er ikke fremlagt tegninger for bygget.",
        "Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.",
        "Målbart areal etter NS 3940:2023 betyr ikke nødvendigvis at arealene er godkjent av bygningsmyndighetene."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        30,
        23
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R12",
      "description": "Fellesgjeld og felleskostnader kan økes med kun én måneds varsel: Borettslaget kan endre felleskostnadene med én måneds skriftlig varsel, noe som innebærer en risiko for økte løpende kostnader for kjøper.",
      "evidence": [
        "Felleskostnadene betales hver måned. Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.",
        "Budsjett 2025 viser innkrevd felleskostnad på kr 2 707 603 mot regnskap 2024 på kr 2 404 029 – en økning på ca. 12,6 %, noe som indikerer at økning allerede er planlagt."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        59,
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Sameier i andel med ideell andel 3/10 er født 2004 (mindreårig ved kjøpstidspunkt): En av sameierne i andelen er født 14.11.2004, noe som kan reise spørsmål om vedkommendes rettslige handleevne ved salget og om nødvendige fullmakter/vergemål er på plass.",
      "evidence": [
        "FØDT: 14.11.2004 IDEELL: 3/10.",
        "SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10.",
        "Personen født 14.11.2004 var 21 år på befaringsdato 03.03.2026 – altså myndig. Risikoen gjelder primært om vedkommende var mindreårig ved kjøpstidspunktet for andelen (2024-pantedokument), ikke nødvendigvis ved salget."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        95,
        93
      ],
      "confidence": 0.6
    }
  ],
  "re_retrieval_queries": [
    "Hva er tilstandsgraden (TG) for badet og våtrommet, inkludert sluk, membran og fall?",
    "Er det dokumentasjon på at baderommet fra 2021 er utført av faglærte og med faglig dokumentasjon?",
    "Hva er andelshaverens andel av fellesgjelden i borettslaget, og hva er individuell gjeld per andel?",
    "Er det tinglyst vergemål eller fullmakt for personen født 14.11.2004 i grunnboken?",
    "Hva er status og konsekvenser av reguleringsplan Id 359 – Gateterminal for eiendommen?",
    "Er det utstedt ferdigattest eller brukstillatelse for boligen eller bygget?",
    "Hva sier tilstandsrapporten om balkong/terrasse – tilstandsgrad og eierforhold (borettslag vs. andelseier)?",
    "Er det gjennomført el-tilsyn de siste fem år, og hva er tilstandsgraden for det elektriske anlegget?"
  ],
  "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (Ulovlige bygningsendringer):** Meget godt dokumentert i både tilstandsrapport og egenerklæring. Confidence justeres opp til 0.97 da begge endringer er eksplisitt nevnt som søknadspliktige og det bekreftes at tegninger mangler.\n\n**R2 (Feil på bad/lekkasje):** Godt dokumentert i egenerklæringen. Confidence beholdes på 0.88. Risikoen forsterkes av at tilliggende konstruksjoner ikke er undersøkt (R8), men selger opplyser om ingen følgeskader. Usikkerheten om skjulte skader er reell.\n\n**R3 (Radonmåling):** Eksplisitt nevnt i HMS-avsnittet i tilstandsrapporten og bekreftet i egenerklæringen. Confidence justeres opp til 0.95 da dette er et direkte HMS-avvik i rapporten.\n\n**R4 (Rekkverk):** Direkte sitert fra HMS-avsnittet i tilstandsrapporten. Confidence justeres opp til 0.97 – dette er et klart dokumentert sikkerhetsavvik.\n\n**R5 (Levetid bygningselementer):** Godt dokumentert. Confidence justeres opp til 0.92 da byggeår 1970 er bekreftet og utsagnet om passert levetid er eksplisitt i rapporten.\n\n**R6 (Ufaglært elektrisk arbeid):** Dokumentert i egenerklæringen. Confidence justeres ned til 0.80 da takstmannen ikke anbefaler utvidet el-kontroll, og arbeidet gjelder kun trekkerør (ikke tilkoblet strøm). Risikoen er reell men begrenset.\n\n**R7 (Fellesgjeld):** Godt dokumentert i årsregnskapet og grunnboken. Confidence justeres opp til 0.88. Viktig tillegg: budsjett 2025 viser planlagt økning i felleskostnader, noe som forsterker risikoen.\n\n**R8 (Tilliggende konstruksjoner bad):** Godt dokumentert med TG IU i tilstandsrapporten. Confidence justeres opp til 0.90 da kombinasjonen av tidligere lekkasje og ikke-undersøkte konstruksjoner er en klar risiko.\n\n**R9 (Forkjøpsrett/godkjenning):** Godt dokumentert i salgsoppgaven. Confidence justeres til 0.82 – dette er en prosessuell risiko som er standard for borettslag, men reell.\n\n**R10 (Reguleringsplaner):** Dokumentert i reguleringskartet. Confidence justeres ned til 0.70 da planene er på planleggingsstadiet og ikke nødvendigvis vil påvirke eiendommen direkte. Mer informasjon om Id 359 (Gateterminal) bør innhentes.\n\n**R11 (Manglende tegninger):** Meget godt dokumentert. Confidence justeres til 0.90 da dette er bekreftet i flere deler av dokumentet.\n\n**R12 (Felleskostnader kan økes):** Dokumentert i vedtektene. Confidence justeres opp til 0.85 da budsjett 2025 allerede viser en planlagt økning på ca. 12,6 % fra 2024-nivå, noe som er konkret evidens for at økning er nært forestående.\n\n**R13 (Mindreårig sameier):** Personen født 14.11.2004 er 21 år på befaringsdato 03.03.2026, altså myndig ved salget. Risikoen er derfor lavere enn antatt. Confidence justeres ned til 0.60. Det kan likevel være relevant å undersøke om vedkommende var mindreårig da pantedokumentet ble tinglyst (29.07.2024 – da var personen 19 år, altså myndig). Risikoen er reell men begrenset til å sikre at begge sameiere har signert/samtykket.\n\n**Manglende risikoer identifisert:**\n- Ingen ferdigattest/brukstillatelse er ikke eksplisitt bekreftet – bør undersøkes nærmere.\n- Budsjett 2025 viser betydelig økning i felleskostnader (ca. 12,6 %) – dette er en konkret, nært forestående risiko som bør fremheves separat fra R12.\n- Balkong/terrasse eierforhold: Det er uklart om balkongen er borettslagets eller andelseierens ansvar – dette påvirker hvem som må utbedre rekkverket.\n- El-anleggets alder og dokumentasjon er ikke fullstendig klarlagt.\n"
}

## Raw Response
```json
{
  "id": "msg_015ngqrmGzJy9eicM8HrEnj4",
  "container": null,
  "content": [
    {
      "id": "toolu_01XMH3LQgicLW2UNx4DZaV8k",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ulovlige/søknadspliktige bygningsendringer uten tegninger eller godkjenning: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Slike endringer er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.",
            "evidence": [
              "Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.",
              "Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
              "Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.",
              "Det foreligger ikke tegninger – bekreftet i tilstandsrapportens lovlighetsavsnitt."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              30
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Feil på bad og tidligere lekkasje fra sluk: Det er sprekk i flis på høyre side av toalettet, og det har vært lekkasje fra sluk ned i kjelleren. Sluket er reparert, men det er usikkert om det finnes skjulte følgeskader.",
            "evidence": [
              "Sprekk i flis på høyre side av toalettet, vanskelig å se.",
              "Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.",
              "Det er ikke rapportert noen følgeskader her.",
              "Tilliggende konstruksjoner til badet er ikke undersøkt (TG IU), noe som betyr at skjulte skader ikke kan utelukkes."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              41,
              27
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Manglende radonmåling og ingen radonsperre: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Selger opplyser at måling er utsendt til analyse, men verdiene foreligger ikke.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Ikke fått verdiene enda. De er til analyse.",
              "Avviket er eksplisitt nevnt under Helse, miljø og sikkerhet i tilstandsrapporten."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              34,
              45
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Rekkverk på balkong er for lavt i forhold til dagens krav: Tilstandsrapporten påpeker at rekkverket på balkong eller terrasse ikke tilfredsstiller gjeldende sikkerhetskrav, noe som utgjør en sikkerhetsrisiko.",
            "evidence": [
              "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
              "Avviket er eksplisitt nevnt under Helse, miljø og sikkerhet i tilstandsrapporten (side 34)."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              34
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Bygningselementer har passert normal forventet levetid: Boligen er fra 1970 og flere elementer har passert normal forventet levetid, noe som innebærer at vedlikehold og utbedringer må påregnes.",
            "evidence": [
              "Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.",
              "Byggeår: 1970 – bekreftet i tilstandsrapporten og eiendomsmatrikkelen."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              30
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Ufaglært arbeid på elektrisk anlegg: Det er lagt opp trekkerør for fremtidig elektrisk installasjon av ufaglærte, men røret er ikke installert eller tilkoblet strøm. Dette kan innebære risiko knyttet til fremtidig elektrisk arbeid og lovlighet.",
            "evidence": [
              "Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.",
              "Faglært: 0 / Ufaglært: 2 (markert i egenerklæringen).",
              "Takstmannen konkluderer med at utvidet el-kontroll ikke er nødvendig, men dette er basert på synlig tilstand."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              43
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R7",
            "description": "Høy fellesgjeld og pantesikret gjeld i borettslaget: Borettslagets bokførte langsiktige gjeld er kr 6 734 992, og total pantesikret gjeld er kr 7 934 992. I tillegg har selger et pantedokument på kr 2 850 000 til DNB. Kjøper overtar andel av fellesgjelden.",
            "evidence": [
              "Bokført langsiktig gjeld 6 734 992.",
              "Boligselskapets pantesikrede gjeld 7 934 992.",
              "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA.",
              "Avdrag felleslån kr.598 / Renter felleslån kr.942 / Felleskostnader kr. 3630 / Felleskostnader totalt: kr. 5170."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              67,
              95,
              20
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Tilliggende konstruksjoner på bad er ikke undersøkt: Tilstandsrapporten angir at tilliggende konstruksjoner til badet ikke er undersøkt (TG IU), noe som betyr at skjulte fukt- eller råteskader ikke kan utelukkes.",
            "evidence": [
              "Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt (TG IU).",
              "Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.",
              "Tidligere lekkasje fra sluk ned i kjelleren forsterker risikoen for skjulte fuktskader."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              41
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Forkjøpsrett og godkjenningsprosess kan forsinke overtakelse: Øvrige andelseiere og USBL-medlemmer har forkjøpsrett med 8 dagers frist etter budaksept, og ny eier må godkjennes av styret innen 20 dager. Dette kan forsinke eller i verste fall hindre gjennomføring av handelen.",
            "evidence": [
              "Øvrige andelseiere i borettslaget og dernest medlemmer av Boligbyggelaget USBL har forkjøpsrett. Forkjøpsretten avklares etter budaksept, fristen for dette er 8 dager.",
              "Deretter må ny eier godkjennes av borettslagets styre, fristen for dette er 20 dager."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              20
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Reguleringsplaner under arbeid i nærheten kan påvirke eiendommen: Det er flere reguleringsplaner under arbeid i nærheten (innen 500 meter), inkludert detaljregulering for bevaring av deler av Ås sentralområde, gang- og sykkelvei og gateterminal. Dette kan medføre endringer i nærområdet.",
            "evidence": [
              "Reguleringsplaner under arbeid i nærheten (500 meter).",
              "Id 337 – Detaljregulering for bevaring av deler av Ås sentralområde – Status: Planlegging igangsatt.",
              "Id 305 – Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum – Status: Planlegging igangsatt.",
              "Id 359 – Detaljregulering for del av fv. 152 - Gateterminal."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R11",
            "description": "Manglende byggetegninger gjør det vanskelig å verifisere lovlighet av boligens nåværende utforming: Det foreligger ingen godkjente tegninger for bygget, og det kan være avvik mellom dagens rombruk og det opprinnelig godkjente.",
            "evidence": [
              "Det foreligger ikke tegninger.",
              "Det er ikke fremlagt tegninger for bygget.",
              "Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.",
              "Målbart areal etter NS 3940:2023 betyr ikke nødvendigvis at arealene er godkjent av bygningsmyndighetene."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              30,
              23
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R12",
            "description": "Fellesgjeld og felleskostnader kan økes med kun én måneds varsel: Borettslaget kan endre felleskostnadene med én måneds skriftlig varsel, noe som innebærer en risiko for økte løpende kostnader for kjøper.",
            "evidence": [
              "Felleskostnadene betales hver måned. Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.",
              "Budsjett 2025 viser innkrevd felleskostnad på kr 2 707 603 mot regnskap 2024 på kr 2 404 029 – en økning på ca. 12,6 %, noe som indikerer at økning allerede er planlagt."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              59,
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Sameier i andel med ideell andel 3/10 er født 2004 (mindreårig ved kjøpstidspunkt): En av sameierne i andelen er født 14.11.2004, noe som kan reise spørsmål om vedkommendes rettslige handleevne ved salget og om nødvendige fullmakter/vergemål er på plass.",
            "evidence": [
              "FØDT: 14.11.2004 IDEELL: 3/10.",
              "SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10.",
              "Personen født 14.11.2004 var 21 år på befaringsdato 03.03.2026 – altså myndig. Risikoen gjelder primært om vedkommende var mindreårig ved kjøpstidspunktet for andelen (2024-pantedokument), ikke nødvendigvis ved salget."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              95,
              93
            ],
            "confidence": 0.6
          }
        ],
        "re_retrieval_queries": [
          "Hva er tilstandsgraden (TG) for badet og våtrommet, inkludert sluk, membran og fall?",
          "Er det dokumentasjon på at baderommet fra 2021 er utført av faglærte og med faglig dokumentasjon?",
          "Hva er andelshaverens andel av fellesgjelden i borettslaget, og hva er individuell gjeld per andel?",
          "Er det tinglyst vergemål eller fullmakt for personen født 14.11.2004 i grunnboken?",
          "Hva er status og konsekvenser av reguleringsplan Id 359 – Gateterminal for eiendommen?",
          "Er det utstedt ferdigattest eller brukstillatelse for boligen eller bygget?",
          "Hva sier tilstandsrapporten om balkong/terrasse – tilstandsgrad og eierforhold (borettslag vs. andelseier)?",
          "Er det gjennomført el-tilsyn de siste fem år, og hva er tilstandsgraden for det elektriske anlegget?"
        ],
        "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 (Ulovlige bygningsendringer):** Meget godt dokumentert i både tilstandsrapport og egenerklæring. Confidence justeres opp til 0.97 da begge endringer er eksplisitt nevnt som søknadspliktige og det bekreftes at tegninger mangler.\n\n**R2 (Feil på bad/lekkasje):** Godt dokumentert i egenerklæringen. Confidence beholdes på 0.88. Risikoen forsterkes av at tilliggende konstruksjoner ikke er undersøkt (R8), men selger opplyser om ingen følgeskader. Usikkerheten om skjulte skader er reell.\n\n**R3 (Radonmåling):** Eksplisitt nevnt i HMS-avsnittet i tilstandsrapporten og bekreftet i egenerklæringen. Confidence justeres opp til 0.95 da dette er et direkte HMS-avvik i rapporten.\n\n**R4 (Rekkverk):** Direkte sitert fra HMS-avsnittet i tilstandsrapporten. Confidence justeres opp til 0.97 – dette er et klart dokumentert sikkerhetsavvik.\n\n**R5 (Levetid bygningselementer):** Godt dokumentert. Confidence justeres opp til 0.92 da byggeår 1970 er bekreftet og utsagnet om passert levetid er eksplisitt i rapporten.\n\n**R6 (Ufaglært elektrisk arbeid):** Dokumentert i egenerklæringen. Confidence justeres ned til 0.80 da takstmannen ikke anbefaler utvidet el-kontroll, og arbeidet gjelder kun trekkerør (ikke tilkoblet strøm). Risikoen er reell men begrenset.\n\n**R7 (Fellesgjeld):** Godt dokumentert i årsregnskapet og grunnboken. Confidence justeres opp til 0.88. Viktig tillegg: budsjett 2025 viser planlagt økning i felleskostnader, noe som forsterker risikoen.\n\n**R8 (Tilliggende konstruksjoner bad):** Godt dokumentert med TG IU i tilstandsrapporten. Confidence justeres opp til 0.90 da kombinasjonen av tidligere lekkasje og ikke-undersøkte konstruksjoner er en klar risiko.\n\n**R9 (Forkjøpsrett/godkjenning):** Godt dokumentert i salgsoppgaven. Confidence justeres til 0.82 – dette er en prosessuell risiko som er standard for borettslag, men reell.\n\n**R10 (Reguleringsplaner):** Dokumentert i reguleringskartet. Confidence justeres ned til 0.70 da planene er på planleggingsstadiet og ikke nødvendigvis vil påvirke eiendommen direkte. Mer informasjon om Id 359 (Gateterminal) bør innhentes.\n\n**R11 (Manglende tegninger):** Meget godt dokumentert. Confidence justeres til 0.90 da dette er bekreftet i flere deler av dokumentet.\n\n**R12 (Felleskostnader kan økes):** Dokumentert i vedtektene. Confidence justeres opp til 0.85 da budsjett 2025 allerede viser en planlagt økning på ca. 12,6 % fra 2024-nivå, noe som er konkret evidens for at økning er nært forestående.\n\n**R13 (Mindreårig sameier):** Personen født 14.11.2004 er 21 år på befaringsdato 03.03.2026, altså myndig ved salget. Risikoen er derfor lavere enn antatt. Confidence justeres ned til 0.60. Det kan likevel være relevant å undersøke om vedkommende var mindreårig da pantedokumentet ble tinglyst (29.07.2024 – da var personen 19 år, altså myndig). Risikoen er reell men begrenset til å sikre at begge sameiere har signert/samtykket.\n\n**Manglende risikoer identifisert:**\n- Ingen ferdigattest/brukstillatelse er ikke eksplisitt bekreftet – bør undersøkes nærmere.\n- Budsjett 2025 viser betydelig økning i felleskostnader (ca. 12,6 %) – dette er en konkret, nært forestående risiko som bør fremheves separat fra R12.\n- Balkong/terrasse eierforhold: Det er uklart om balkongen er borettslagets eller andelseierens ansvar – dette påvirker hvem som må utbedre rekkverket.\n- El-anleggets alder og dokumentasjon er ikke fullstendig klarlagt.\n"
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
    "input_tokens": 21911,
    "output_tokens": 5104,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
