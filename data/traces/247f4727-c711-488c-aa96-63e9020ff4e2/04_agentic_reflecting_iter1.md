# Trace: agentic_reflecting_iter1
- **Run ID:** 247f4727-c711-488c-aa96-63e9020ff4e2
- **Tidspunkt:** 2026-03-30T17:39:31.228128+00:00
- **Varighet:** 90.40s
- **Input tokens:** 22461
- **Output tokens:** 4440

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
Risiko 1: Ulovlige/søknadspliktige bygningsendringer uten dokumentasjon: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Disse endringene er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.
  Confidence: 0.95
  Evidens: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.; Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.; Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.; Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.

Risiko 2: Fuktskader og lekkasje på bad: Det er rapportert lekkasje fra sluk og ned i kjelleren. Sluket er reparert, men det er usikkerhet rundt eventuelle følgeskader. I tillegg er det sprekk i flis på høyre side av toalettet.
  Confidence: 0.88
  Evidens: Sprekk i flis på høyre side av toalettet, vanskelig å se.; Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.; Det er ikke rapportert noen følgeskader her.; Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.

Risiko 3: Manglende radonmåling og ingen radonsperre: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Selger opplyser at måling er utført, men verdiene er ikke mottatt ennå.
  Confidence: 0.9
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Er det utført radonmåling? Ja; Ikke fått verdiene enda. De er til analyse.

Risiko 4: Rekkverk på balkong er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko.
  Confidence: 0.95
  Evidens: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.

Risiko 5: Høy fellesgjeld i borettslaget: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den pantesikrede gjelden er nær 7,9 millioner kroner. I tillegg er det tinglyst et pantedokument på andelen på 2 850 000 kroner.
  Confidence: 0.85
  Evidens: Bokført langsiktig gjeld 6 734 992; Boligselskapets pantesikrede gjeld 7 934 992; 2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA; Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170

Risiko 6: Bygget er fra 1970 og enkelte bygningsdeler har passert normal forventet levetid. Vedlikehold og utbedring må påregnes, og det er ikke fremlagt tegninger for bygget.
  Confidence: 0.85
  Evidens: Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.; Byggeår: 1970; Det er ikke fremlagt tegninger for bygget.

Risiko 7: Trekkerør for elektrisk installasjon er lagt opp av ufaglært, men ikke installert eller tilkoblet strøm. Dette kan innebære en fremtidig risiko dersom arbeidet ikke utføres av fagkyndig.
  Confidence: 0.8
  Evidens: Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.; Faglært / Ufaglært – Ufaglært er valgt.

Risiko 8: Fellesgjeld og felleskostnader kan øke: Borettslaget kan endre felleskostnadene med kun én måneds skriftlig varsel, og det er pågående reguleringsplaner i nærheten som kan påvirke området og potensielt medføre endringer.
  Confidence: 0.7
  Evidens: Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.; Reguleringsplaner under arbeid i nærheten (500 meter): Detaljregulering for bevaring av deler av Ås sentralområde, Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum.; Er det planer eller bestemmelser som kan medføre endringer av felleskostnader eller fellesgjeld? Nei, ikke som jeg kjenner til.

Risiko 9: Tilliggende konstruksjoner på bad er ikke undersøkt (TG IU), noe som innebærer usikkerhet om skjulte fukt- eller konstruksjonsskader bak flater.
  Confidence: 0.82
  Evidens: Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt.; TG IU: Konstruksjoner som ikke er undersøkt.

Risiko 10: Sameie i andel mellom to personer med ulik ideell andel (7/10 og 3/10): Den ene medeieren er født i 2004 og kan være mindreårig eller nylig myndig. Dette kan skape komplikasjoner ved salg, finansiering og beslutningsprosesser.
  Confidence: 0.75
  Evidens: SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10; FØDT: 14.11.2004 IDEELL: 3/10; Bare personer som bor eller skal bo i boligen kan bli sameier i andel.; Dersom flere eier en andel sammen, skal det regnes som bruksoverlating hvis en eller flere av sameierne ikke bor i boligen.

Risiko 11: Manglende byggetegninger gjør det vanskelig å verifisere at boligens nåværende utforming er i samsvar med godkjente planer og byggeforskrifter.
  Confidence: 0.9
  Evidens: Det foreligger ikke tegninger.; Det er ikke fremlagt tegninger for bygget.; Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.

Risiko 12: Borettslaget krever at alle medeiere tegner individuelle medlemskap i USBL for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke eller hindre gjennomføring av handelen.
  Confidence: 0.72
  Evidens: Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e).

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
 boligen, reparasjon
eller utskifting av tak, bjelkelag, bærende veggkonstruksjoner, samt rør
eller ledninger som er bygd inn i bærende konstruksjoner med unntak av
varmekabler. Nødvendige reparasjoner og utskifting av slikt som rør,
sikringskap fra og med første hovedsikring/inntakssikringer, faste ledninger
med tilbehør, inklusive panelovner.
(2) Felles rør, ledninger, kanaler og andre felles installasjoner som går
gjennom boligen, skal borettslaget holde ved like. Borettslaget har rett til
å føre nye

---

[d001_d001 | Side [1]]
e i boligen som borettslaget er ansvarlig for
å utbedre, plikter andelseieren straks å sende melding til borettslaget.
(7) Borettslaget og andre andelseiere kan kreve erstatning for tap som
følger av at andelseieren ikke oppfyller pliktene sine, jf borettslagslovens
§§ 5-13 og 5-15.
5-2 Borettslagets vedlikeholdsplikt
(1) Borettslagets vedlikeholdsplikt omfatter også utskifting av vinduer,
herunder utskifting av termoruter og ytterdører til boligen, reparasjon
eller utskifting av tak, bjelkelag, bærende

---

[d001_d001 | Side [1]]
lemmet selv eller nærstående har en framtredende
personlig eller økonomisk særinteresse.
(2) Ingen kan selv eller ved fullmektig eller som fullmektig delta i en
avstemning på generalforsamlingen om avtale med seg selv eller nærstående
eller om ansvar for seg selv eller nærstående i forhold til laget. Det samme
gjelder avstemning om pålegg om salg eller krav om fravikelse etter
borettslagslovens §§ 5-22 og 5-23.
10-2 Taushetsplikt
Tillitsvalgte, forretningsfører og ansatte i et borettslag har plikt til

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
ierens eller ektefellens slektning i rett opp- eller
nedstigende linje, til fosterbarn som faktisk står i samme stilling som
livsarving, til søsken eller noen annen som i de to siste årene har hørt til
samme husstand som den tidligere eieren. Forkjøpsretten kan heller ikke
gjøres gjeldende når andelen overføres på skifte etter separasjon eller
skilsmisse, eller når et husstandsmedlem overtar andelen etter bestemmelsene
i husstandsfellesskapslovens § 3.
(3) Styret i borettslaget skal sørge for at de som er

---

[d001_d001 | Side [1]]
orettslaget holde ved like. Borettslaget har rett til
å føre nye slike installasjoner gjennom boligen dersom det ikke er til
vesentlig ulempe for andelseieren.
(3) Borettslagets vedlikeholdsplikt omfatter også utskifting av vinduer,
herunder nødvendig utskifting av termoruter, og ytterdører til boligen eller
reparasjon eller utskifting av tak, bjelkelag, bærende veggkonstruksjoner,
sikringsskap fra og med første hovedsikring/inntakssikring, ledninger med
tilbehør, samt rør eller ledninger som er bygd inn i

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
befales det å sette seg inn i
reguleringsbestemmelser og planer. Dette vil gi mer detaljerte opplysninger om eventuelle begrensninger som kan påvirke eiendommen.
Om tomten
Eiet tomt på ca. 10 831 m². Tomten er delvis opparbeidet med plenarealer, beplantning, interne veier og parkeringsplasser.
Det er etablert parkering foran bygget, herunder elbilladere i regi av borettslaget.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 11.03.2026 Gjennomgått Nei
Propr.no

---

[d001_d001 | Side [1]]
av som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Kommuneplaner under arbeid
Reguleringsplaner Reguleringsplaner under arbeid i nærheten
Plantyper uten treff
Kommunedelplaner Kommunedelplaner under arbeid
Reguleringsplaner under bakken Reguleringsplaner over bakken
Reguleringsplaner under arbeid Reguleringsplaner bunn
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige

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
vant. Dokumentpakken vedlagt er
komplett slik den er mottatt fra kommunen. Ved ønske om
ytterligere opplysninger, kan kommunen kontaktes direkte.
I det følgende finnes en grov forklaring/oversikt på punktene
over, og hva det er viktig å se etter.
KART
Kommunen har digitale kart, som normalt viser hva arealene er
satt av til i følge gjeldende planverk. Her kan du også ofte finne
info om veienes regulerte bredde (normalt bredere enn de er
opparbeidet), grøntarealer, eiendommer avsatt for offentlige
formål,

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
 reguleringsplaner skal det legges til rette for fremkommelighet for
kollektivtransport.
8

## Side 129

I reguleringsplaner og byggesøknader for etablering av næringsvirksomhet skal
trafikksikker og effektiv varelevering sikres. Varelevering skal fortrinnsvis skje på
egen grunn, og krysningspunkter med syklende og gående skal unngås.
I forslag til reguleringsplaner og byggesøknader skal det redegjøres for:
a. hvordan trafikksikkerhet og fremkommelighet ivaretas.
b. hvordan transportbehovet håndteres og

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
en har 2 boder i kjeller på hhv. 2,7 kvm og 2,3 kvm.
Arealene er målt med laser på stedet, og er beregnet etter "Takstbransjens retningslinjer ved arealmåling 2014" og Norsk Standard (NS)
3940:2023.
Det gjøres oppmerksom på at kravene i Byggeforskriftene ikke sammenfaller med kravene i NS 3940, og at det av den grunn kan forekomme
forskjeller i hva som defineres som målbart areal.
Målbart areal etter NS 3940:2023 betyr ikke nødvendigvis at arealene er godkjent av bygningsmyndighetene.
Er arealene godkjent

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
tmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene Bruksendring er å endre bruken av et rom fra en tillatt bruk til en annen.
benyttes for å beregne eiendommens verdi. Dette kan kreve søknad og tillatelse, for eksempel hvis du endrer et rom
fra bod til soverom eller arbeidsrom,eller hvis du endrer en bolig til to
Den bygningssakkyndige kan avdekke eventuelle
separate boliger.
bruksendringer og avvik i branncelleinndeling
Rom for varig opphold har krav til takhøyde,

---

[d001_d001 | Side [1]]
ntré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.
Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.
Nyere håndverkstjenester
Er det ifølge eier utført håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Ifølge egenerklæring er det utført flere håndverkertjenester på boligen de siste 5 årene. Dette omfatter blant annet
elektrikerarbeider i form av omtrekking av stue og soverom, etablering av

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
de deler av en bygning hvor en
fastslå tykkelsen på innervegger, skjevheter i og utforming av brann fritt kan utvikle seg uten at den kan spre seg til andre
bygningskonstruksjoner som karnapp, buer og vinkler som ikke er rette, åpne rom bygninger eller andre deler av bygningen i løpet av en fastsatt tid.
over flere etasjer og så videre.
Om bruksendring
Eiendommens markedsverdi kan ikke baseres på en matematisk beregning basert på
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke

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
ft til avhendingsloven og Norsk Standard omsetningen. Les mer om dette og hvordan du kan reservere deg på
3940 Areal- og volum-beregninger av bygninger fra 2023. https://www.norsktakst.no/norsk/om-norsk-
takst/personvernerklaering/reservasjon/
• Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det tidspunkt
oppmålingen fant sted. Vendu lager en boliganalyse basert på opplysninger fra rapporten. Les mer
om dette og hvordan du kan reservere deg her:
• Bruksareal (BRA) er det måleverdige arealet

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

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ulovlige/søknadspliktige bygningsendringer uten dokumentasjon: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Disse endringene er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.",
      "evidence": [
        "Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.",
        "Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
        "Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.",
        "Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.",
        "Bruksendring er å endre bruken av et rom fra en tillatt bruk til en annen. Dette kan kreve søknad og tillatelse, for eksempel hvis du endrer et rom fra bod til soverom."
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
      "description": "Fuktskader og lekkasje på bad: Det er rapportert lekkasje fra sluk og ned i kjelleren. Sluket er reparert, men det er usikkerhet rundt eventuelle følgeskader. I tillegg er det sprekk i flis på høyre side av toalettet.",
      "evidence": [
        "Sprekk i flis på høyre side av toalettet, vanskelig å se.",
        "Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.",
        "Det er ikke rapportert noen følgeskader her.",
        "Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.",
        "Tilliggende konstruksjoner på bad er ikke undersøkt (TG IU)."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        41,
        30
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Manglende radonmåling og ingen radonsperre: Bygget er ikke utført med radonsperre. Selger opplyser at måling er utført, men verdiene er ikke mottatt ennå – noe som skaper usikkerhet om faktisk radoneksponering.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Er det utført radonmåling? Ja – Ikke fått verdiene enda. De er til analyse.",
        "Vurdering av avvik: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        34,
        45
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R4",
      "description": "Rekkverk på balkong er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko.",
      "evidence": [
        "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
        "Vurdering av avvik: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        34
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Høy fellesgjeld i borettslaget: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den pantesikrede gjelden er nær 7,9 millioner kroner. I tillegg er det tinglyst et pantedokument på andelen på 2 850 000 kroner.",
      "evidence": [
        "Bokført langsiktig gjeld 6 734 992",
        "Boligselskapets pantesikrede gjeld 7 934 992",
        "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA",
        "Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170"
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        67,
        93,
        95
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Bygget er fra 1970 og enkelte bygningsdeler har passert normal forventet levetid. Vedlikehold og utbedring må påregnes, og det er ikke fremlagt tegninger for bygget.",
      "evidence": [
        "Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.",
        "Byggeår: 1970",
        "Det er ikke fremlagt tegninger for bygget.",
        "Eldre hus/blokker er bygget etter datidens byggeskikk og krav, ikke de krav som gjelder i dag."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        30
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Trekkerør for elektrisk installasjon er lagt opp av ufaglært, men ikke installert eller tilkoblet strøm. Dette kan innebære en fremtidig risiko dersom arbeidet ikke utføres av fagkyndig.",
      "evidence": [
        "Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.",
        "Faglært / Ufaglært – Ufaglært er valgt."
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
      "risk_id": "R8",
      "description": "Fellesgjeld og felleskostnader kan øke: Borettslaget kan endre felleskostnadene med kun én måneds skriftlig varsel, og det er pågående reguleringsplaner i nærheten som kan påvirke området.",
      "evidence": [
        "Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.",
        "Reguleringsplaner under arbeid i nærheten (500 meter): Detaljregulering for bevaring av deler av Ås sentralområde, Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum.",
        "Er det planer eller bestemmelser som kan medføre endringer av felleskostnader eller fellesgjeld? Nei, ikke som jeg kjenner til."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        45
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R9",
      "description": "Tilliggende konstruksjoner på bad er ikke undersøkt (TG IU), noe som innebærer usikkerhet om skjulte fukt- eller konstruksjonsskader bak flater.",
      "evidence": [
        "Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt.",
        "TG IU: Konstruksjoner som ikke er undersøkt.",
        "Det har vært lekkasje fra sluk og ned i kjelleren – øker sannsynligheten for skjulte skader."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        34
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R10",
      "description": "Sameie i andel mellom to personer med ulik ideell andel (7/10 og 3/10): Den ene medeieren er født i 2004 og kan være mindreårig eller nylig myndig. Dette kan skape komplikasjoner ved salg, finansiering og beslutningsprosesser.",
      "evidence": [
        "SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10",
        "FØDT: 14.11.2004 IDEELL: 3/10",
        "Bare personer som bor eller skal bo i boligen kan bli sameier i andel.",
        "Dersom flere eier en andel sammen, skal det regnes som bruksoverlating hvis en eller flere av sameierne ikke bor i boligen."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        93,
        95
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Manglende byggetegninger gjør det vanskelig å verifisere at boligens nåværende utforming er i samsvar med godkjente planer og byggeforskrifter.",
      "evidence": [
        "Det foreligger ikke tegninger.",
        "Det er ikke fremlagt tegninger for bygget.",
        "Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.",
        "Er arealene godkjent av bygningsmyndighetene fremgår det av stemplede, godkjente tegninger med angitt rombeskrivelse sammenfallende med bruken."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        27,
        30
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget krever at alle medeiere tegner individuelle medlemskap i USBL for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke eller hindre gjennomføring av handelen.",
      "evidence": [
        "Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e)."
      ],
      "source_documents": [
        "d001_d001"
      ],
      "source_pages": [
        22
      ],
      "confidence": 0.72
    }
  ],
  "re_retrieval_queries": [
    "Hva er den totale andelsgjelden per andel i borettslaget, og hva er fellesgjeld per andel for andelsnummer 112?",
    "Er det dokumentert at radonmålingen er sendt til analyse, og hva er akseptable radonverdier i henhold til gjeldende forskrift?",
    "Hva er statusen på baderommet fra 2021 – er det dokumentasjon på faglig utførelse og membran/tettesjikt?",
    "Er den mindreårige medeieren (født 14.11.2004) myndig på salgstidspunktet (mars 2026), og kreves det vergemål eller samtykke?",
    "Foreligger det vedlikeholdsplan eller fremtidige planlagte kostnader i borettslaget som kan påvirke felleskostnadene?",
    "Er det registrert forkjøpsrett i borettslaget, og hvordan påvirker dette salgsprosessen?",
    "Hva er tilstanden på tak, drenering og fasade i borettslaget – er det planlagte rehabiliteringsprosjekter?"
  ],
  "reasoning": "\nGjennomgangen av de 12 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og observasjoner er gjort:\n\n**R1 (Ulovlige bygningsendringer):** Evidensen er svært sterk og direkte sitert fra tilstandsrapporten og egenerklæringen. Confidence justeres opp til 0.97 da både takstmann og egenerklæring bekrefter endringene eksplisitt, og det er tydelig at disse er søknadspliktige.\n\n**R2 (Fuktskader/lekkasje bad):** Evidensen støtter risikoen godt. Lekkasjen er bekreftet, reparert, men tilliggende konstruksjoner er ikke undersøkt (TG IU), noe som øker usikkerheten. Confidence beholdes på 0.88.\n\n**R3 (Radonmåling/radonsperre):** Det er en intern motsetning i dokumentene – takstmannen skriver at det IKKE er foretatt radonmålinger, mens egenerklæringen sier JA til måling men at verdiene ikke er mottatt. Dette er en reell risiko, men confidence justeres ned til 0.88 fra 0.90 pga. denne uklarheten som bør avklares nærmere.\n\n**R4 (Rekkverk for lavt):** Direkte bekreftet i tilstandsrapportens HMS-avvik-seksjon. Confidence beholdes på 0.95.\n\n**R5 (Høy fellesgjeld):** Tallene er direkte hentet fra årsregnskapet og grunnboken. Confidence justeres opp til 0.90 da evidensen er svært konkret og kvantifiserbar.\n\n**R6 (Alder/levetid):** Godt dokumentert. Confidence beholdes på 0.85.\n\n**R7 (Ufaglært elektrisk arbeid):** Evidensen er klar – ufaglært er valgt og trekkerør er lagt. Confidence beholdes på 0.80.\n\n**R8 (Økning i felleskostnader):** Reguleringsplanene i nærheten er dokumentert, men selger svarer NEI på om det foreligger planer om endringer i felleskostnader. Reguleringsplanene handler om gang/sykkelvei og bevaring av sentralområde – ikke direkte borettslagsøkonomi. Confidence justeres ned til 0.65 da sammenhengen mellom reguleringsplanene og økte felleskostnader er indirekte.\n\n**R9 (TG IU tilliggende konstruksjoner bad):** Godt dokumentert. Confidence beholdes på 0.82.\n\n**R10 (Sameie med mindreårig/ung medeier):** Personen født 14.11.2004 er 21 år på salgstidspunktet (mars 2026) og dermed myndig. Risikoen er reell men noe redusert siden personen er myndig. Confidence beholdes på 0.75 da det fortsatt kan være komplikasjoner med finansiering og beslutningsprosesser ved delt eierskap.\n\n**R11 (Manglende byggetegninger):** Svært godt dokumentert. Confidence beholdes på 0.90.\n\n**R12 (USBL-medlemskap):** Direkte sitert fra salgsoppgaven. Confidence beholdes på 0.72 – dette er mer en praktisk/administrativ risiko enn en finansiell risiko.\n\n**Manglende risikoer som bør undersøkes:**\n1. Forkjøpsrett i borettslaget – ikke vurdert, kan forsinke salget.\n2. Tilstand på tak, drenering og fasade – borettslaget er fra 1970 og disse er borettslagets ansvar, men kan medføre økte felleskostnader ved rehabilitering.\n3. Andelsgjeld per andel – bør beregnes eksplisitt for kjøper.\n4. Baderomsdokumentasjon fra 2021 – er det faglig dokumentasjon på membran og tettesjikt?\n"
}

## Raw Response
```json
{
  "id": "msg_01MSxiLjNvkSaRAWgKBpkBVa",
  "container": null,
  "content": [
    {
      "id": "toolu_01SvEAfwq5WKBP8Yf1VLD5eK",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ulovlige/søknadspliktige bygningsendringer uten dokumentasjon: Kjøkken er flyttet til stue for etablering av ytterligere ett soverom, og bod i entré er slått sammen med tilstøtende soverom. Disse endringene er normalt søknadspliktige, og det foreligger ikke tegninger for bygget.",
            "evidence": [
              "Kjøkken er flyttet til stue for etablering av ytterligere ett soverom.",
              "Bod i entré er slått sammen med tilstøtende soverom. En slik endring er normalt søknadspliktige.",
              "Det er ikke fremlagt tegninger for bygget. Det er imidlertid opplyst om mindre endringer utført av eier.",
              "Det understrekes at alle forhold knyttet til bruk, lovlighet, tilbygg mm. må undersøkes hos PBE i gjeldende kommune.",
              "Bruksendring er å endre bruken av et rom fra en tillatt bruk til en annen. Dette kan kreve søknad og tillatelse, for eksempel hvis du endrer et rom fra bod til soverom."
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
            "description": "Fuktskader og lekkasje på bad: Det er rapportert lekkasje fra sluk og ned i kjelleren. Sluket er reparert, men det er usikkerhet rundt eventuelle følgeskader. I tillegg er det sprekk i flis på høyre side av toalettet.",
            "evidence": [
              "Sprekk i flis på høyre side av toalettet, vanskelig å se.",
              "Det har vært lekkasje fra sluk og ned i kjelleren, sluket er reparert av TT - Teknikk med 2-komponentmaling når de rørfornyet avløpsrørene.",
              "Det er ikke rapportert noen følgeskader her.",
              "Dersom det ikke gjøres tiltak, kan dette medføre oppfukting, oppsvelling og forringelse av materialer over tid og fuktskader på tilstøtende konstruksjoner.",
              "Tilliggende konstruksjoner på bad er ikke undersøkt (TG IU)."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              41,
              30
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Manglende radonmåling og ingen radonsperre: Bygget er ikke utført med radonsperre. Selger opplyser at måling er utført, men verdiene er ikke mottatt ennå – noe som skaper usikkerhet om faktisk radoneksponering.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Er det utført radonmåling? Ja – Ikke fått verdiene enda. De er til analyse.",
              "Vurdering av avvik: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              34,
              45
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R4",
            "description": "Rekkverk på balkong er for lavt i forhold til dagens krav, noe som utgjør en sikkerhetsrisiko.",
            "evidence": [
              "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav.",
              "Vurdering av avvik: Rekkverket på balkong eller terrasse er for lavt i forhold til dagens krav."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              34
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Høy fellesgjeld i borettslaget: Borettslaget har betydelig langsiktig gjeld på over 6,7 millioner kroner, og den pantesikrede gjelden er nær 7,9 millioner kroner. I tillegg er det tinglyst et pantedokument på andelen på 2 850 000 kroner.",
            "evidence": [
              "Bokført langsiktig gjeld 6 734 992",
              "Boligselskapets pantesikrede gjeld 7 934 992",
              "2024/1743964-1/200 PANTEDOKUMENT 29.07.2024 BELØP: NOK 2 850 000 PANTHAVER: DNB BANK ASA",
              "Avdrag felleslån kr.598, Renter felleslån kr.942, Felleskostnader kr. 3630, Felleskostnader totalt: kr. 5170"
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              67,
              93,
              95
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Bygget er fra 1970 og enkelte bygningsdeler har passert normal forventet levetid. Vedlikehold og utbedring må påregnes, og det er ikke fremlagt tegninger for bygget.",
            "evidence": [
              "Boligen er i hovedsak som fra byggeåret og fremstår i teknisk god stand. Det gjøres oppmerksom på at enkelte elementer har passert normal forventet levetid, slik at vedlikehold/utbedring må påregnes i tiden som kommer.",
              "Byggeår: 1970",
              "Det er ikke fremlagt tegninger for bygget.",
              "Eldre hus/blokker er bygget etter datidens byggeskikk og krav, ikke de krav som gjelder i dag."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              30
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Trekkerør for elektrisk installasjon er lagt opp av ufaglært, men ikke installert eller tilkoblet strøm. Dette kan innebære en fremtidig risiko dersom arbeidet ikke utføres av fagkyndig.",
            "evidence": [
              "Det er lagt opp trekkerør for fremtidig elektrisk installasjon, men ikke installert eller tilkoblet strøm. Dette røret er lagt opp i lettveggen mellom gang og soverom.",
              "Faglært / Ufaglært – Ufaglært er valgt."
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
            "risk_id": "R8",
            "description": "Fellesgjeld og felleskostnader kan øke: Borettslaget kan endre felleskostnadene med kun én måneds skriftlig varsel, og det er pågående reguleringsplaner i nærheten som kan påvirke området.",
            "evidence": [
              "Borettslaget kan endre felleskostnadene med en måneds skriftlig varsel.",
              "Reguleringsplaner under arbeid i nærheten (500 meter): Detaljregulering for bevaring av deler av Ås sentralområde, Detaljreguleringsplan for gang- og sykkelvei langs fylkesvei 152 fra Meierkrysset til Ås sentrum.",
              "Er det planer eller bestemmelser som kan medføre endringer av felleskostnader eller fellesgjeld? Nei, ikke som jeg kjenner til."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              45
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R9",
            "description": "Tilliggende konstruksjoner på bad er ikke undersøkt (TG IU), noe som innebærer usikkerhet om skjulte fukt- eller konstruksjonsskader bak flater.",
            "evidence": [
              "Våtrom > 1 etasje > Bad > Tilliggende konstruksjoner – konstruksjoner som ikke er undersøkt.",
              "TG IU: Konstruksjoner som ikke er undersøkt.",
              "Det har vært lekkasje fra sluk og ned i kjelleren – øker sannsynligheten for skjulte skader."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              34
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R10",
            "description": "Sameie i andel mellom to personer med ulik ideell andel (7/10 og 3/10): Den ene medeieren er født i 2004 og kan være mindreårig eller nylig myndig. Dette kan skape komplikasjoner ved salg, finansiering og beslutningsprosesser.",
            "evidence": [
              "SKJELBY HENRIK JOHANNESSEN FØDT: 21.04.1995 IDEELL: 7/10",
              "FØDT: 14.11.2004 IDEELL: 3/10",
              "Bare personer som bor eller skal bo i boligen kan bli sameier i andel.",
              "Dersom flere eier en andel sammen, skal det regnes som bruksoverlating hvis en eller flere av sameierne ikke bor i boligen."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              93,
              95
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Manglende byggetegninger gjør det vanskelig å verifisere at boligens nåværende utforming er i samsvar med godkjente planer og byggeforskrifter.",
            "evidence": [
              "Det foreligger ikke tegninger.",
              "Det er ikke fremlagt tegninger for bygget.",
              "Det kan være avvik fra dagens rombruk/rombenevnelse i forhold til det opprinnelige byggemeldte/godkjente.",
              "Er arealene godkjent av bygningsmyndighetene fremgår det av stemplede, godkjente tegninger med angitt rombeskrivelse sammenfallende med bruken."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              27,
              30
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget krever at alle medeiere tegner individuelle medlemskap i USBL for at boligen skal kunne registreres på kjøper(e). Manglende innmelding kan forsinke eller hindre gjennomføring av handelen.",
            "evidence": [
              "Alle medeiere må tegne individuelle medlemskap i USBL (kr 300,- per år) for at boligen skal kunne registreres på kjøper(e)."
            ],
            "source_documents": [
              "d001_d001"
            ],
            "source_pages": [
              22
            ],
            "confidence": 0.72
          }
        ],
        "re_retrieval_queries": [
          "Hva er den totale andelsgjelden per andel i borettslaget, og hva er fellesgjeld per andel for andelsnummer 112?",
          "Er det dokumentert at radonmålingen er sendt til analyse, og hva er akseptable radonverdier i henhold til gjeldende forskrift?",
          "Hva er statusen på baderommet fra 2021 – er det dokumentasjon på faglig utførelse og membran/tettesjikt?",
          "Er den mindreårige medeieren (født 14.11.2004) myndig på salgstidspunktet (mars 2026), og kreves det vergemål eller samtykke?",
          "Foreligger det vedlikeholdsplan eller fremtidige planlagte kostnader i borettslaget som kan påvirke felleskostnadene?",
          "Er det registrert forkjøpsrett i borettslaget, og hvordan påvirker dette salgsprosessen?",
          "Hva er tilstanden på tak, drenering og fasade i borettslaget – er det planlagte rehabiliteringsprosjekter?"
        ],
        "reasoning": "\nGjennomgangen av de 12 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og observasjoner er gjort:\n\n**R1 (Ulovlige bygningsendringer):** Evidensen er svært sterk og direkte sitert fra tilstandsrapporten og egenerklæringen. Confidence justeres opp til 0.97 da både takstmann og egenerklæring bekrefter endringene eksplisitt, og det er tydelig at disse er søknadspliktige.\n\n**R2 (Fuktskader/lekkasje bad):** Evidensen støtter risikoen godt. Lekkasjen er bekreftet, reparert, men tilliggende konstruksjoner er ikke undersøkt (TG IU), noe som øker usikkerheten. Confidence beholdes på 0.88.\n\n**R3 (Radonmåling/radonsperre):** Det er en intern motsetning i dokumentene – takstmannen skriver at det IKKE er foretatt radonmålinger, mens egenerklæringen sier JA til måling men at verdiene ikke er mottatt. Dette er en reell risiko, men confidence justeres ned til 0.88 fra 0.90 pga. denne uklarheten som bør avklares nærmere.\n\n**R4 (Rekkverk for lavt):** Direkte bekreftet i tilstandsrapportens HMS-avvik-seksjon. Confidence beholdes på 0.95.\n\n**R5 (Høy fellesgjeld):** Tallene er direkte hentet fra årsregnskapet og grunnboken. Confidence justeres opp til 0.90 da evidensen er svært konkret og kvantifiserbar.\n\n**R6 (Alder/levetid):** Godt dokumentert. Confidence beholdes på 0.85.\n\n**R7 (Ufaglært elektrisk arbeid):** Evidensen er klar – ufaglært er valgt og trekkerør er lagt. Confidence beholdes på 0.80.\n\n**R8 (Økning i felleskostnader):** Reguleringsplanene i nærheten er dokumentert, men selger svarer NEI på om det foreligger planer om endringer i felleskostnader. Reguleringsplanene handler om gang/sykkelvei og bevaring av sentralområde – ikke direkte borettslagsøkonomi. Confidence justeres ned til 0.65 da sammenhengen mellom reguleringsplanene og økte felleskostnader er indirekte.\n\n**R9 (TG IU tilliggende konstruksjoner bad):** Godt dokumentert. Confidence beholdes på 0.82.\n\n**R10 (Sameie med mindreårig/ung medeier):** Personen født 14.11.2004 er 21 år på salgstidspunktet (mars 2026) og dermed myndig. Risikoen er reell men noe redusert siden personen er myndig. Confidence beholdes på 0.75 da det fortsatt kan være komplikasjoner med finansiering og beslutningsprosesser ved delt eierskap.\n\n**R11 (Manglende byggetegninger):** Svært godt dokumentert. Confidence beholdes på 0.90.\n\n**R12 (USBL-medlemskap):** Direkte sitert fra salgsoppgaven. Confidence beholdes på 0.72 – dette er mer en praktisk/administrativ risiko enn en finansiell risiko.\n\n**Manglende risikoer som bør undersøkes:**\n1. Forkjøpsrett i borettslaget – ikke vurdert, kan forsinke salget.\n2. Tilstand på tak, drenering og fasade – borettslaget er fra 1970 og disse er borettslagets ansvar, men kan medføre økte felleskostnader ved rehabilitering.\n3. Andelsgjeld per andel – bør beregnes eksplisitt for kjøper.\n4. Baderomsdokumentasjon fra 2021 – er det faglig dokumentasjon på membran og tettesjikt?\n"
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
    "input_tokens": 22461,
    "output_tokens": 4440,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
