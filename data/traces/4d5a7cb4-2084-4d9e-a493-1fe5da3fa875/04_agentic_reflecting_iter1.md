# Trace: agentic_reflecting_iter1
- **Run ID:** 4d5a7cb4-2084-4d9e-a493-1fe5da3fa875
- **Tidspunkt:** 2026-03-25T08:02:11.175290+00:00
- **Varighet:** 89.58s
- **Input tokens:** 19357
- **Output tokens:** 4599

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
Risiko 1: Membran på bad har passert halvparten av forventet levetid og er fra byggeåret 2007. Det må påregnes at nytt tettesjikt vil være aktuelt på sikt. Dette er vurdert som TG2 (avvik som kan kreve tiltak).
  Confidence: 0.97
  Evidens: Membranen er fra byggeåret 2007 og har passert halvparten av forventet levetid.; Det må påregnes at nytt tettesjikt vil være aktuelt på sikt.; Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.; Badet er overflateoppusset i 2026 med flis på flis og ny innredning. Membran fra byggeår.

Risiko 2: Hulltaking i tilstøtende vegg til våtsonen på badet ble ikke utført. Dette betyr at det er usikkerhet knyttet til fuktforhold i skjulte konstruksjoner rundt badet, og eventuelle fuktskader kan ha gått uoppdaget.
  Confidence: 0.88
  Evidens: Det ble ikke foretatt hulltaking i tilstøtende vegg for våtsonen.; Hulltaking: boring av hull for inspeksjon og fuktmåling i risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad.

Risiko 3: Eiendommen ligger innenfor faresonen for marin leire, noe som innebærer en potensiell geoteknisk risiko (kvikkleireskred). Faresonen strekker seg over store deler av Kjeller.
  Confidence: 0.95
  Evidens: I henhold til Lillestrøm kommunes kart over området, faller eiendommen innenfor faresonen for marin leire.; Faresonen strekker seg over store deler av Kjeller.

Risiko 4: Selger har eid boligen i kun ca. 1 måned og har ikke bodd i boligen siste 12 måneder. Dette innebærer begrenset kjennskap til boligens tilstand og eventuelle skjulte feil, noe som øker risikoen for at vesentlige forhold ikke er opplyst.
  Confidence: 0.92
  Evidens: Antall år 0, Antall måneder 1.; Har du bodd i boligen siste 12 måneder? Nei.; Når kjøpte du boligen? 2026.

Risiko 5: Boligen har høy andel fellesgjeld (kr 432 775) med en rente på 5,49 % og løpetid til 2039. Felleskostnadene er kr 6 472 per måned, inkludert IN-lån på kr 3 458 per måned. Renteendringer kan øke de månedlige kostnadene ytterligere.
  Confidence: 0.9
  Evidens: Andel fellesgjeld: kr 432 775 pr. 27.01.2026.; Annuitetslån med rente 5,49 %.; Felleskostnader kr 6 472,- pr. mnd.; For denne andelen utgjør kostnader knyttet til IN-lån per dag kr 3 458 per måned, fordelt på renter og avdrag.; Siste renteendring: 4,16 % fra 01.01.2026.; Løpetid: 01.01.2010 – 01.07.2039.

Risiko 6: Det er utført arbeid på rør/avløp av ufaglært/egeninnsats i forbindelse med overflateoppussing på bad og kjøkken. Ufaglært arbeid på VVS-installasjoner kan medføre risiko for lekkasjer og skjulte feil.
  Confidence: 0.85
  Evidens: Ja, kun av ufaglært/ egeninnsats/ dugnad. Egeninnsats/dugnad av faglærte. Avkobling og tilkobling i forbindelse med overflateoppussing på bad og kjøkken.

Risiko 7: Radonmåling er ikke utført. Selv om det ikke er krav om dette for boliger som ikke er utleid, kan radonkonsentrasjonen i boligen være ukjent og potensielt helseskadelig.
  Confidence: 0.8
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 8: Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold, noe som er en risiko for kjøper og eventuelle långivere.
  Confidence: 0.88
  Evidens: Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 9: Kjøper må godkjennes av styret i borettslaget. Dersom kjøper ikke godkjennes som ny andelseier, er kjøper likevel forpliktet til å gjennomføre handelen og må besørge videresalg av andelen. Dette er en vesentlig risiko for kjøper.
  Confidence: 0.87
  Evidens: Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.; Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier. Risikoen for å bli godkjent som ny eier må kjøper besørge videresalg av andelen.

Risiko 10: 1. etasje har ikke rominndeling i de godkjente bygningstegningene hos kommunen. Dette kan innebære at eksisterende rominndeling ikke er godkjent, og at rom kan mangle nødvendige tillatelser.
  Confidence: 0.82
  Evidens: 1. etasje har ikke rominndeling i de godkjente tegningene hos kommunen, det er derfor lagt til grunn 2.

Risiko 11: Energimerket er D med rød energifarge, noe som indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming uten alternativ varmekilde, noe som kan gi høye strømkostnader.
  Confidence: 0.78
  Evidens: Energikarakter: D. Energifarge: Rød.; Leiligheten har elektrisk oppvarming, med varmekabler på bad og elektrisk oppvarming i øvrige rom.

Risiko 12: Borettslaget har total restgjeld på kr 55 725 553. Dersom andre andelseiere misligholder sine forpliktelser, kan de øvrige andelseierne bli belastet for å dekke borettslagets løpende utgifter.
  Confidence: 0.83
  Evidens: Total restgjeld: kr 55 725 553.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 13: Det er tinglyst en heftelse fra 1922 (rettigheter iflg. skjøte) på eiendommen. Eldre tinglyste heftelser kan inneholde ukjente forpliktelser eller begrensninger som kan påvirke bruken av eiendommen.
  Confidence: 0.72
  Evidens: 20.02.1922 – Dokumentnr: 900196 – Rettigheter iflg. skjøte.; Bestemmelse om generende virksomhet. Eiendommen har opprinnelse fra eldre grunnbok og er registrert med grenser som beskrevet i skylddelingsforretning fra 1920 årene.

Dokumentkontekst:
[d147_d147 | Side [1]]
ørt i 2007 og fremstår generelt med
normal standard og forventet vedlikeholdsnivå sett i Følgende bygningsdel har fått tilstandsgrad 2:
forhold til alder.
Bad – sluk, membran og tettesjikt:
Det er i hovedsak registrert tilstandsgrad TG0 og TG1, Membranen er fra byggeåret 2007 og har passert
som indikerer ingen eller mindre avvik. Det er ikke halvparten av forventet levetid. Vurderingen er
registrert tilstandsgrad TG3. aldersmessig og ikke basert på registrert skade. Det må
påregnes at nytt tettesjikt vil

---

[d147_d147 | Side [1]]
Kjellerstuvei 10, 2007 KJELLER NØKKELTAKST DRIFT AS
Gnr 31 - Bnr 177 Symreveien 44
3205 LILLESTRØM 1470 LØRENSKOG
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Boligbygg med 昀氀ere boenheter
AVVIK SOM KAN KREVE TILTAK
Våtrom > 1. Etasje > Bad > Sluk, membran og Gå til side
te琀琀esjikt
Det er avvik:
- Membranen

---

[d147_d147 | Side [1]]
r betydning for om
•Hulltaking: boring av hull for inspeksjon og fuktmåling i
rommet defineres som P-ROM eller S-ROM. Dette betyr at
risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad,
rommet både kan være i strid med teknisk forskrift og mangle
utforede kjellervegger og eventuelt i oppforede kjellergulv.
godkjennelse i kommunen for den aktuelle bruken, uten at dette
vil få betydning for valg av arealkategori.
•Normal slitasjegrad: forventet slitasje av materiale i overflaten
som er basert

---

[d147_d147 | Side [1]]
delen eller rommet på
•Fastmonterte installasjoner, for eksempel innfelt belysning og byggetidspunktet.
høyttalere, skal ikke demonteres for å sjekke dampsperren bak.
Dette er av hensyn til bygningssakkyndiges kompetanse og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
risikoen for skade. eller estetiske status på et gitt tidspunkt.
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og •Symptom: forhold som gir indikasjon på hvilken tilstand et
vaskerom (våtrom), rom under terreng

---

[d147_d147 | Side [1]]
ide: 8 av 18
59

## Side 60

Øvre Kjellerstuvei 10, 2007 KJELLER NØKKELTAKST DRIFT AS
Gnr 31 - Bnr 177 Symreveien 44
3205 LILLESTRØM 1470 LØRENSKOG
Tilstandsrapport
Vurderte forhold: Ven琀椀lasjon er vurdert med tanke på avtrekk, overstrømningsmulighet og 琀椀llu昀琀. Avtrekk er kontrollert med et enkelt papirark. Det er
ikke u琀昀ørt lu昀琀målinger eller vurdering av ven琀椀lasjonsfunksjon utover de琀琀e.
1. ETASJE > BAD
Tilliggende konstruksjoner våtrom
Det ble ikke foreta琀琀 hulltaking i 琀椀lstøtende vegg for våtsonen

---

[d147_d147 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d147_d147 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d147_d147 | Side [1]]
fter på •inspisering av yttertak er basert på det som er synlig, normalt på
godkjenningstidspunktet for bygget. Noen bygningsdeler er innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
Dette gjelder blant annet: taket fra utsiden, og da vil vurderingen være basert på alder og
materialer.).
i. våtrom (bad, vaskerom) og andre fuktutsatte rom
•stikkprøvetakninger er

---

[d147_d147 | Side [1]]
e fuktskade og egnethet ved vindu/dør i våtsone. Banketest e琀琀er bom
(hulrom under 昀氀is) er u琀昀ørt som s琀椀kkprøver - ikke alle 昀氀iser. Fall 琀椀l sluk og høydeforskjell topp mellom overkant gulv/topp slukrist er målt med linjelaser.
Fall er målt ved s琀椀kkprøver - 昀氀atere par琀椀er kan forekomme uten å bli avdekket.
1. ETASJE > BAD
Sluk, membran og te琀琀esjikt
Sluket er i plast. Synlig membran i sluket.
Vurderte forhold: Punktet er kontrollert med tanke på u琀昀ørelse, materialvalg, klemring/mansje琀琀,

---

[d147_d147 | Side [1]]
sert på registrert skade. Det må
påregnes at nytt tettesjikt vil være aktuelt på sikt, slik det
Utvendig er normalt for bad fra denne perioden.
Vinduer med isolerglass fra 2006 og 2011. Vinduer er
kontrollert ved stikkprøver. Boligen fremstår samlet sett med normal teknisk
Brann‑ og lydklassifisert entrédør samt balkongdør med standard for byggeår. Registrert TG2 gjelder
37

## Side 38

om eiendommen
aldersmessig vurdering av membran på bad. For øvrig er 583 og er tilknyttet BORI BBL, som også er

---

[d147_d147 | Side [1]]
er alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d147_d147 | Side [1]]
sjon på hvilken tilstand et
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje byggverk eller en bygningsdel befinner seg i. Benyttes ved
Oppdragsnr.: 22391-1839 Befaringsdato: 12.02.2026 Side: 16 av 18
67

## Side 68

Øvre Kjellerstuvei 10, 2007 KJELLER NØKKELTAKST DRIFT AS
Gnr 31 - Bnr 177 Symreveien 44
3205 LILLESTRØM 1470 LØRENSKOG
Forutsetninger
beskrivelse av avvik og alder. til bygningens forvaltning, drift eller vedlikehold.
•Skadegjørere: i hovedsak råte, sopp og skadedyr. •I en

---

[d147_d147 | Side [1]]
e over昀氀ater.
Innvendige over昀氀ater, utover det som eventuelt er særskilt
beskrevet og vurdert i rapporten, er ikke 琀椀lstandsvurdert.
Vurdering av slike over昀氀ater eller måling av eventuelle skjevheter i
gulv, vegger eller himlinger inngår ikke i oppdraget. Slitasje og
skjevheter kan forekomme uten å være omtalt. Tilstand og
bruksslitasje er subjek琀椀vt – gjør egne vurderinger på visning.
VÅTROM Gå 琀椀l side
Bad
Badet er over昀氀ateoppusset i 2026 med 昀氀is på 昀氀is og ny innredning.
Membran fra byggeår.
Det

---

[d147_d147 | Side [1]]
(bad, vaskerom) og andre fuktutsatte rom
•stikkprøvetakninger er tilfeldig valgt og kan innebære kontroll
ii. forhold knyttet til brann, rømming, sikkerhet, for eksempel under overflaten med spiss redskap eller lignende.
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller
osv. UTTRYKK OG DEFINISJONER
•For skjulte konstruksjoner, som vann og avløp uten
dokumentasjon, er kvalitet og alder vurdert.
•Referansenivå: kravet til bygningsdelen eller rommet på
•Fastmonterte installasjoner, for eksempel

---

[d147_d147 | Side [1]]
leve琀椀d.
Når membranen eldes, svekkes den gradvis og kan utvikle mindre ute琀琀heter som slipper fukt ned i konstruksjonen. Hvor raskt de琀琀e skjer avhenger av
kvalitet, u琀昀ørelse og bruk, og regelmessig 琀椀lsyn er vik琀椀g. En full oppgradering med ny琀琀 te琀琀esjikt må påregnes på sikt, selv om det er vanskelig å si nøyak琀椀g
når.
1. ETASJE > BAD
Sanitærutstyr og innredning
Innredning: Skap med gla琀琀e fronter.
Sanitærutstyr: Servant, veggfestet klose琀琀, dusj på gulv og opplegg for vaskemaskin.
Vurderte forhold:

---

[d147_d147 | Side [1]]
 alle områder
hvor bom kan oppstå. For øvrig er synlige deler av over昀氀atene visuelt undersøkt.
Oppdragsnr.: 22391-1839 Befaringsdato: 12.02.2026 Side: 7 av 18
58

## Side 59

Øvre Kjellerstuvei 10, 2007 KJELLER NØKKELTAKST DRIFT AS
Gnr 31 - Bnr 177 Symreveien 44
3205 LILLESTRØM 1470 LØRENSKOG
Tilstandsrapport
1. ETASJE > BAD
Over昀氀ater Gulv
Fliser på gulv.
Vurderte forhold: Over昀氀ater kontrollert med tanke på forhold som kan indikere fuktskade og egnethet ved vindu/dør i våtsone. Banketest e琀琀er

---

[d147_d147 | Side [1]]
 eiendommen
OM VURDERINGER Fliser på gulv.
Tilstandsgradene (TG) re昀氀ekterer resultatet av undersøkelser Sluket er i plast.
u琀昀ørt e琀琀er forskri昀琀 琀椀l avhendingsloven (Tryggere Innredning: Skap med gla琀琀e fronter.
bolighandel). Rapporten viser hvilke bygningsdeler som Sanitærutstyr: Servant, veggfestet klose琀琀, dusj på gulv og opplegg
omfa琀琀es av oppdraget. Les hele rapporten, inkludert for vaskemaskin.
forutsetningene, for en helhetlig forståelse av både
vurderingene og oppdraget. KJØKKEN Gå 琀椀l

---

[d147_d147 | Side [1]]
nbefales å jevnlig kontrollere
badet for tegn på skader. På sikt vil en totaloppussing med ny琀琀 vannte琀琀 sjikt være nødvendig, men 琀椀dspunktet avhenger normalt av bruk, vedlikehold og
synlige tegn på slitasje.
1. ETASJE > BAD
Over昀氀ater vegger og himling
Vegger: Fliser.
Himling: Sle琀琀e over昀氀ater.
Det er u琀昀ørt en enkel "banketest" på et utvalg 昀氀iser for å undersøke om disse kan ha bom/hulrom under. Testen er 琀椀lfeldig og dekker ikke alle områder
hvor bom kan oppstå. For øvrig er synlige deler av

---

[d147_d147 | Side [1]]
se琀琀, dusj på gulv og opplegg for vaskemaskin.
Vurderte forhold: Sanitærutstyr er kontrollert med tanke på riss, sprekker, svelling, skjolder, avdryppmerker og lekkasjesikring av sisterne. Avløp og
vannrør er vurdert ut fra en enkel test avrenning og vanntrykk ved åpen kran og alder.
1. ETASJE > BAD
Ven琀椀lasjon
Avtrekk: Mekanisk avtrekk.
Tillu昀琀: Lu昀琀espalte med lu昀琀琀椀lførsel under dørbladet.
Oppdragsnr.: 22391-1839 Befaringsdato: 12.02.2026 Side: 8 av 18
59

## Side 60

Øvre Kjellerstuvei 10, 2007 KJELLER

---

[d147_d147 | Side [1]]
A-e) og innglasset rimeligste utbedring av de beskrevne avvikene som gir TG 3, ikke
balkong mv (BRA-b). Terrasse- og balkongareal (TBA) opplyses oppgradering til høyere standard. For mer presise kostnader bør
der tilstandsrapporten skal benyttes i boligomsetningen og der det det innhentes tilbud etter nærmere undersøkelser. Rapporten
er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav angir normalt ikke konkrete tiltak.
takhøyde (ALH) opplyses sammen med BRA der det er aktuelt og
en del av

---

[d147_d147 | Side [1]]
nser, og ble utskilt fra større
Forpliktet å være medlem i BORI. gårdsbruk. Det fremgår at eiendommen er fradelt og
skyldsatt, med lovlig oppmålt areal og tinglyst
hjemmelsovergang.
Energimerke
Energikarakter: D Legalpant: Borettslaget har legalpant på inntil 2G som
sikkerhet for betaling av felleskostnader. Dette betyr at
Energifarge: Rød borettslaget har prioritet over tinglyste lån når det gjelder
betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert

---

[d147_d147 | Side [1]]
iendommen innenfor faresonen for marin leire.
og annet areal som hører boligen til, i forsvarlig stand og Faresonen strekker seg over store deler av Kjeller.
vedlikeholde slikt som vinduer, rør, sikringsskap fra og
med første hovedsikring/ inntakssikring, ledninger med
Tinglyste heftelser
tilbehør, varmekabler, inventar, utstyr inklusive
vannklosett, varmtvannsbereder og vask, apparater og Tinglyste heftelser og rettigheter: På eiendommen er det
innvendige flater. Våtrom må brukes og vedlikeholdes slik

---

[d147_d147 | Side [1]]
het, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til

---

[d147_d147 | Side [1]]
m kan benyttes til å avhende avfall fra
hunder under lufteturer. Det er videre satt opp skilt der
39

## Side 40

OM EIENDOMMEN
områder rundt boliger er regulert til blant annet kontor,
Beboernes forpliktelser og
tjenesteyting, kulturinstitusjon og ellers frittliggende
småhusbebyggelse i henhold til reguleringsplan. I
dugnader
henhold til Lillestrøm kommunes kart over området, faller
Den enkelte andelseier skal holde boligen, og andre rom eiendommen innenfor faresonen for marin leire.
og annet areal som

---

[d147_d147 | Side [1]]
 inn pengene før
andre kreditorer, selv om de har lån registrert på andelen.
Oppvarming
Leiligheten har elektrisk oppvarming, med varmekabler
Vei, vann og avløp
på bad og elektrisk oppvarming i øvrige rom.
Eiendommen har adkomst via kommunal vei, samt privat
stikkvei med felles vedlikeholdsansvar for Borettslaget.
Regulerings og arealplaner
Eiendommen er tilknyttet kommunalt ledningsnett via
Eiendommen er regulert til boligbebyggelse i henhold til private stikkledninger.
reguleringsplan med tilhørende

---

[d147_d147 | Side [1]]
er du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: OFL 2
51006240
:ecnerefer
tnemucoD
48

## Side 49

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er

---

[d147_d147 | Side [1]]
ekabler, inventar, utstyr inklusive slik som skjøte
vannklosett, varmtvannsbereder og vasker, apparater, Bestemmelse om generende virksomhet
tapet, gulvbelegg, vegg‑, gulv‑ og himlingsplater, Kort fortalt: Eiendommen har opprinnelse fra eldre
skillevegger, listverk, skap, benker og innvendige dører grunnbok og er registrert med grenser som beskrevet i
med karmer. skylddelingsforretning fra 1920 årene. Tomten er regulert
med klare mål og grenser, og ble utskilt fra større
Forpliktet å være medlem i BORI.

---

[d147_d147 | Side [1]]
kring, vaktmester‑ og renholdstjenester,
drift og vedlikehold av fellesarealer og tekniske anlegg,
Omkostninger forretningsførsel samt fiberbredbånd.
9 300 (Boligkjøperforsikring* (valgfritt)) Leiligheten er tilknyttet Husbanklån med IN‑ordning, som
8 406 (Forhåndsvarsling forkjøpsrett) gir mulighet for individuell nedbetaling av fellesgjeld.
545 (Tinglysingsgebyr ‑ hjemmel)
545 (Tinglysningsgebyr ‑ pantedokument) For denne andelen utgjør kostnader knyttet til IN‑lån per

---

[d147_d147 | Side [1]]
er det
innvendige flater. Våtrom må brukes og vedlikeholdes slik tinglyst følgende heftelser og rettigheter som følger
at lekkasjer unngås. eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Vedlikeholdet omfatter også nødvendige reparasjoner og
utskifting av slikt som rør, sikringsskap fra og med første 3205/ 31/ 177:
hovedsikring/ inntakssikring, ledninger med tilbehør, 20.02.1922 ‑ Dokumentnr: 900196 ‑ Rettigheter iflg.
varmekabler, inventar, utstyr inklusive slik som skjøte
vannklosett,

---

[d147_d147 | Side [1]]

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
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av

---

[d147_d147 | Side [1]]
kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært

---

[d147_d147 | Side [1]]
. Ingen har meldt forkjøpsrett.
Borettslaget eier fiberkabler og passive
nettverkskomponenter. Styregodkjennelse: Kjøper skal godkjennes av styret i
borettslaget. Dette kan ikke nektes uten saklig grunn.
Øvrige forhold Kjøper er forpliktet til å gjennomføre handelen uavhengig
Det skal ikke monteres varmepumper, markiser, av om kjøper på overtakelsestidspunktet er godkjent av
persienner, screens eller lignende uten styrets borettslaget som ny andelseier. Risikoen for å bli
forhåndsgodkjennelse. Styret

---

[d147_d147 | Side [1]]
 tekst ekstrahert)

## Side 25

Balkongen gir ekstra oppholdsrom i
sommerhalvåret.

## Side 26

Utsikt mot fellesområdet.

## Side 27

(Ingen tekst ekstrahert)

## Side 28

Plantegning
Fasade.
Egen parkeringsplass med elbillader.

## Side 29

Plantegning

## Side 30

OM EIENDOMMEN

## Side 31

ØVRE KJELLERSTUVEI 10
OM EIENDOMMEN

## Side 32

OM EIENDOMMEN
Felleskostnader inkulderer: Avdrag IN 1 ‑ 1 619 kr
Økonomi
Avdrag IN 2 ‑ 386 kr
Felleskostnader ‑ 2 961 kr
Prisantydning
Rente IN 2 ‑ 280 kr
Kr 2 500 000

---

[d147_d147 | Side [1]]
nner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei

---

[d147_d147 | Side [1]]
e lover, forskrifter eller offentlige pålegg skal
følge av andre andelshaveres mislighold, eller dersom følge med eiendommen, jf. avhendingsloven § 3‑4.
borettslaget sitter på fraflyttede og/ eller usolgte andeler, Fastmonterte eller spesialtilpassede installasjoner og
må dekkes av de øvrige andelseierne. innredning som anses som varig tilknyttet boligen, følger
normalt med i handelen, med mindre det foreligger en
Borettslaget har legalpanterett i andelen for krav på særskilt avtale mellom partene om noe

---

[d147_d147 | Side [1]]
rett i andelen for krav på særskilt avtale mellom partene om noe annet, jf.
dekning av felleskostnader og andre krav fra avhendingsloven § 3‑5.
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
En standard tilbehørsliste utarbeidet av Norges
Kjøper og selger er forpliktet til å undertegne standard Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
kjøpekontrakt utarbeidet av Emera i forbindelse med gjelder som utgangspunkt for hva som inkluderes i salget
eiendomstransaksjonen. Kjøpekontrakten

---

[d147_d147 | Side [1]]
ndom/ boligkjoper/
Borettslagsmodellen innebærer at borettslaget eier
eiendommen, mens andelseierne eier andeler i
Lovanvendelse
borettslaget, som gir borett til en bestemt bolig.
Andelseierne har ikke personlig ansvar for borettslagets Regelverk og generelle opplysninger
fellesgjeld, men de må dekke borettslagets løpende Boligen selges med det inventar og utstyr som i henhold
utgifter. Manglende innbetaling av fellesutgiftene som til gjeldende lover, forskrifter eller offentlige pålegg skal
følge av andre

---

[d147_d147 | Side [1]]
une. Fra eiendommen er det gangavstand til
Løpetid: 01.01.2010 ‑ 01.07.2039 OsloMet storbyuniversitetet, noe som gjør beliggenheten
Siste renteendring: 4,16 % fra 01.01.2026 særlig praktisk for studenter og ansatte. Det er også kort
vei til Lillestrøm sentrum med et bredt utvalg av
Samlet fellesgjeld bymessige fasiliteter, servicetilbud og kulturtilbud.
Total restgjeld: kr 55 725 553
Andel fellesgjeld: kr 432 775 Nærmeste bussholdeplass er Forskningsparken, som
ligger kun noen minutters gange fra boligen.

---

[d147_d147 | Side [1]]
komme hull og merker Mindre arbeider med montering av spotter og enkelte
etter montering av inventar og utstyr som ikke er en del stikkontakter på dugnad av faglærte.
av overdragelsen.
13 Har du ladeanlegg/ ladeboks for elbil i dag?
36

## Side 37

OM EIENDOMMEN
Ja. Egen Zaptec ladeboks tilknyttet egen isolerglass fra byggeåret.
parkeringsplass.
Vestvendt balkong på ca. 7,5 m² med adkomst fra stue.
For ytterligere info, se selgers egenerklæring. Balkongen er oppført i trekonstruksjon. Rekkverk

---

[d147_d147 | Side [1]]
nhold til private stikkledninger.
reguleringsplan med tilhørende Borettslaget er ansvarlig for private stikkledninger til
reguleringsbestemmelser for Kjeller nord datert bygningen.
08.12.2014. I henhold til kommuneplan er eiendommen
avsatt til nåværende boligbebyggelse. Nærliggende
40

## Side 41

OM EIENDOMMEN
hos eiendomsmegler før bud inngis. Kontakt
Utleie
eiendomsmegler for spørsmål.
Adgang til utleie: Andelseier kan uten å søke godkjenning
leie ut boligen i opptil 30 døgn i året. Selger leverer

---

[d147_d147 | Side [1]]
lestrøm kommune. Da det er
borettslaget som eier bygningsmassen, blir
eiendomsskatten ilignet borettslaget. Skatten fordeles
deretter videre på den enkelte andelseier i henhold til
borettslagets fordelingsnøkkel.
Estimert totalpris ink. omk
Kr 2 951 571
Fellesgjeld
Kr 432 775 pr. 27.01.2026
Felleskostnader
Felleskostnader kr 6 472,‑ pr. mnd Lånebetingelser fellesgjeld: DNB Bank ASA
Annuitetslån med rente 5,49 %
32

## Side 33

OM EIENDOMMEN
Total restgjeld: kr 1 175 150 Formuesverdi sekundær: Kr 2 711 986

---

[d147_d147 | Side [1]]
nd og katt under forutsetning det er ikke vedtatt ekstraordinære kostnadsøkninger eller
av at det først inngås en skriftlig kontrakt med særskilte innbetalinger per andel. Fremtidige kostnader
borettslaget som regulerer forholdet mellom partene. knyttet til ordinær drift og vedlikehold håndteres
Ulovlig dyrehold utgjør mislighold. gjennom løpende budsjettering.
Ved opphold utendørs skal hunder i henhold til inngåtte Regnskap og budsjett for borettslaget kan fås oversendt
kontrakter ha ledsager og holdes i

---

[d147_d147 | Side [1]]
en Borettslag har organisasjonsnummer 987 424 maling av fasader, rekkverk, svalganger og bodbygg,
38

## Side 39

OM EIENDOMMEN
samt utskiftning av råteskadet treverk. Borettslaget har det kreves at hundeeiere viser hensyn og at det skal
også installert forbedret utendørs belysning i flere benyttes hundeposer. Vennligst meld fra til styret om
omganger for økt trygghet, og det er utført diverse registrerte dyr som du ikke lenger har.
snekker‑, blikkenslager‑ og vedlikeholdsarbeider løpende.
Forkjøpsrett: 1

---

[d147_d147 | Side [1]]
 blikkenslager‑ og vedlikeholdsarbeider løpende.
Forkjøpsrett: 1 ‑ Intern forkjøpsrett (Forkjøpsrett i samme
Bredbånd borettslag/ sameie)
I felleskostnadene inngår fiberbredbånd med hastighet 2 ‑ BORI Forkjøpsrett (Forkjøpsrett med ansiennitet som
1000 Mbps levert av Telia Norge AS. Fiber er ført helt medlem i BORI.)
frem til den enkelte leilighet, og hver bolig har fått
installert ny ruter med Wi‑Fi 6 og flere kablede uttak. Ingen har meldt forkjøpsrett.
Borettslaget eier fiberkabler og

---

[d147_d147 | Side [1]]
 på bad. For øvrig er 583 og er tilknyttet BORI BBL, som også er borettslagets
det ikke registrert forhold som indikerer behov for forretningsfører. Borettslaget er et samvirkeforetak
umiddelbare tiltak. organisert etter bestemmelsene i lov om borettslag, med
formål å gi andelseierne bruksrett til egen bolig og å
drive virksomhet som står i naturlig sammenheng med
Øvrig
dette. Alle eiere må være medlem av BORI BBL.
informasjon
Forkjøpsrett
Andelseiere i borettslaget og medlemmer av BORI BBL
Adresse
har

---

[d147_d147 | Side [1]]
ertjenester, herunder maskinell snømåking
Lillestrøm kommune, og tomten er på 9 134 kvm. og strøing. Renhold av fellesarealer utføres av Coor
Borettslaget eier eiendommen, og hjemmelen ble Service Management AS.
overført til borettslaget i tinglyst skjøte datert 18. juni
2008. Det foreligger ferdigattester for bygningene. Det er gjennomført jevnlig og omfattende vedlikehold av
bygningsmassen over tid, blant annet behandling og
Solsikken Borettslag har organisasjonsnummer 987 424 maling av fasader,

---

[d147_d147 | Side [1]]
odkjent som ny eier må kjøper besørge
Forretningsfører: Bori Bbl videresalg av andelen. Hjemmel overføres til kjøper og
oppgjør utbetales til selger.
Borettslagets forsikringsselskap: If Skadeforsikring
Regnskap/ budsjett/ kostnadsøkninger: Årsregnskapet
Polisenummer fellesforsikring: SP587194 for borettslaget er godkjent av generalforsamlingen.
Borettslaget drives innenfor vedtatte budsjettrammer, og
Husdyr: Det er tillatt med hund og katt under forutsetning det er ikke vedtatt ekstraordinære

---

[d147_d147 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
2 942 271 (Totalpris inkl. omkostninger (uten Ved full nedbetaling av IN‑lån vil de månedlige
Boligkjøperforsikring)) felleskostnadene reduseres til ca. kr 3 014, noe som gir
2 951 571 (Totalpris inkl. omkostninger (med vesentlig lavere løpende bokostnader.
Boligkjøperforsikring))
Eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Det er eiendomsskatt i Lillestrøm kommune. Da det er
borettslaget som eier bygningsmassen,

---

[d147_d147 | Side [1]]
tnader ‑ 2 961 kr
Prisantydning
Rente IN 2 ‑ 280 kr
Kr 2 500 000 Renter IN 1 ‑ 1 173 kr
Stipulerte avdrag ‑ 18kr
Stipulerte rentekostnader ‑ 35kr
Omkostning kjøper
Total 6 472 kr
2 500 000,00 (Prisantydning)
432 775 (Andel av fellesgjeld) Felleskostnadene dekker blant annet renter og avdrag på
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ borettslagets fellesgjeld, kommunale avgifter,
2 932 775 (Pris inkl. fellesgjeld) bygningsforsikring, vaktmester‑ og renholdstjenester,
drift og vedlikehold av

---

[d147_d147 | Side [1]]
maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, av faglært og ufaglært/egeninnsats/dugnad
Nyanlegg fra byggeår av Steinkjer Elektro. Samsvarserklæring kan hentes i borettslagets arkiv. Mindre arbeider
Beskrivelse
med montering av spotter og enkelte stikkontakter på dugnad av faglærte.
Arbeid utført av Steinkjer

---

[d147_d147 | Side [1]]
ument) For denne andelen utgjør kostnader knyttet til IN‑lån per i
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ dag . kr 3 458 per måned, fordelt på renter og avdrag.
9 496 (Omkostninger totalt (uten Boligkjøperforsikring)) Dersom fellesgjelden knyttet til IN‑lånet nedbetales fullt,
18 796 (Omkostninger totalt (med Boligkjøperforsikring)) vil de månedlige felleskostnadene reduseres tilsvarende,
altså med kr 41 496 per år.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
2 942 271

---

[d147_d147 | Side [1]]
lse Kjøkken
med hovedvekt på lavblokker, rekkehus og eneboliger. Kjøkkeninnredning med glatte fronter og laminat
Bebyggelsen fremstår gjennomgående ryddig og benkeplate. Integrerte hvitevarer. Ingen spesielle avvik
velholdt, med grønne fellesarealer, rolige interne veier og registrert.
et pent opparbeidet nærmiljø. Området er preget av god
avstand mellom bygningene, noe som gir et luftig og Tekniske installasjoner
trivelig bomiljø med lite innsyn. Den gjennomførte Rør i rør system for vann. Plast

---

[d147_d147 | Side [1]]
anlegg samt Sørum fritidsgård
med ridesenter.
33

## Side 34

OM EIENDOMMEN
gjesteparkeringsmuligheter.
En kort sykkeltur fra boligen finner du Nebbursvollen
friluftsbad, et populært badested med basseng,
Adkomst
grøntområder og kiosk. I tillegg byr nærområdet på flotte
tur og rekreasjonsmuligheter med asfalterte gang og På høyre side i annonsen finner du et kartutsnitt. Ved å
sykkelveier langs Nitelva, samt naturskjønne omgivelser i klikke på kartet kan du enkelt planlegge din rute fra valgt
Tæruddalen.

---

[d147_d147 | Side [1]]
stk parkeringsplasser i kjeller datert
02.03.2021.
Parkering
Det foreligger ferdigattest for brannalarmanlegg, datert
Boligen har egen biloppstillingsplass med elbillader, og 17.02.2010.
borettslaget har i tillegg gode
34

## Side 35

OM EIENDOMMEN
Det foreligger godkjente bygningstegninger fra ALH ‑ Areal med lav himlingshøyde måles på samme
kommunen. 1. etasje har ikke rominndeling i de godkjente måte som BRA, men man ser bort fra krav til
tegningene hos kommunen, det er derfor lagt til grunn 2.

---

[d147_d147 | Side [1]]
på kartet kan du enkelt planlegge din rute fra valgt
Tæruddalen. startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger for enkel orientering.
Offentlig kommunikasjon
Tomt
Området har svært gode kollektivforbindelser. Nærmeste
bussholdeplass er Forskningsparken, som ligger noen Tomtetype: Eiet
minutters gange fra boligen. Her går buss 100 og 340
med hyppige avganger til Lillestrøm stasjon, og buss 100 Tomtestørrelse: 9133.9 m²
har videre forbindelse hele veien til Oslo.
Fellesområdet

---

[d147_d147 | Side [1]]
Når kjøpte du boligen?
på ettermiddag og kveld gjør dette til et attraktivt uterom 2026
i sommerhalvåret.
Hvor lenge har du eid boligen?
Parkering Antall år 0
Boligen disponerer egen biloppstillingsplass med Antall måneder 1
elbillader, noe som gir en praktisk og fremtidsrettet
løsning for lading hjemme. Borettslaget har i tillegg gode Har du bodd i boligen siste 12 måneder?
gjesteparkeringsmuligheter, slik at besøkende enkelt kan Nei
parkere i området.
2 Kjenner du til om det er utført arbeid på bad/

---

[d147_d147 | Side [1]]
isterende ovn. Dersom mange ovner skiftes ut bør det vurderes et system
hvor temperatur og tidsinnstillinger i ulike rom i boligen styres fra en sentral enhet.
75

## Side 76

76

## Side 77

77

## Side 78

78

## Side 79

79

## Side 80

80

## Side 81

81

## Side 82

Nabolagsprofil
Øvre Kjellerstuvei 10 - Nabolaget Kjeller - vurdert av 59 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 86/100
Etablerere
Kvalitet på skolene
Studenter
Veldig bra

---

[d147_d147 | Side [1]]
skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt

---

[d147_d147 | Side [1]]
sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: OFL 3
51006240
:ecnerefer
tnemucoD
49

## Side 50

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og

---

[d147_d147 | Side [1]]
er og selger får i
forbindelse med oppdraget, kan variere ut fra hvor i
landet eiendommen ligger.
45

## Side 46

ØVRE KJELLERSTUVEI 10

## Side 47

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260015
Selger 1 navn
Owe Fagerlund Leret
Gateadresse
Øvre Kjellerstuvei 10
Poststed Postnr
KJELLER 2007
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når

---

[d147_d147 | Side [1]]
endingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven §

---

[d147_d147 | Side [1]]

Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2026
Hvor lenge har du eid boligen?
Antall år 0
Antall måneder 1
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: OFL

---

[d147_d147 | Side [1]]
 22391-1839 Befaringsdato: 12.02.2026 Side: 17 av 18
68

## Side 69

Øvre Kjellerstuvei 10, 2007 KJELLER NØKKELTAKST DRIFT AS
Gnr 31 - Bnr 177 Symreveien 44
3205 LILLESTRØM 1470 LØRENSKOG
Forutsetninger
Informasjon om tilknyttede arealer, fellesarealer, oppgraderinger,
oppvarmingskilder, årstall og generelle opplysninger er basert på
opplysninger fra selger eller selgers representant, hvis ikke annet
er oppgitt.
Rapporten beskriver eiendommens tilstand på
befaringstidspunktet og gir ingen garantier for

---

[d147_d147 | Side [1]]
er forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
høyeste bud.
2.Når et bud er inngitt til megler og

---

[d147_d147 | Side [1]]
lge med i salget. el‑anlegget eller andre installasjoner (f.eks. oljetank,
Alt utstyr og installasjoner som medfølger overtas slik de sentralfyr, ventilasjon)?
er, uten garanti, med mindre det foreligger en gjeldende Ja, av faglært og ufaglært/ egeninnsats/ dugnad.
garanti fra produsent eller leverandør. Nyanlegg fra byggeår av Steinkjer Elektro.
Samsvarserklæring kan hentes i borettslagets arkiv.
Kjøper aksepterer at det kan forekomme hull og merker Mindre arbeider med montering av spotter og

---

[d147_d147 | Side [1]]
nn/ avløp?
standardliste "Oversikt over løsøre og tilbehør", som Ja, kun av ufaglært/ egeninnsats/ dugnad. Egeninnsats/
legges til grunn med mindre annet er spesifisert i dugnad av faglærte. Avkobling og tilkobling i forbindelse
salgsoppgaven. med overflateoppussing på bad og kjøkken.
Gjenstander som er nevnt i standardlisten, men som ikke 11 Kjenner du til om det er/ har vært utført arbeid på
finnes på eiendommen, vil heller ikke følge med i salget. el‑anlegget eller andre installasjoner (f.eks.

---

[d147_d147 | Side [1]]
øke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom

---

[d147_d147 | Side [1]]
 kort til at
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for

---

[d147_d147 | Side [1]]
ra Söderberg &
Radonmåling
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
Selger har ikke utført radonmåling. Det er ikke krav om som gir trygghet og profesjonell juridisk hjelp dersom det
dette med mindre boligen er helt eller delvis utleid. oppdages uventede feil eller mangler ved boligen de
neste fem årene. Les mer om Boligkjøperforsikring i
vedlagte materiell eller på https:/ /
Diverse
www.soderbergpartners.no/ eiendom/ boligkjoper/
Borettslagsmodellen innebærer at borettslaget

---

[d147_d147 | Side [1]]
rofilen. Copyright © Finn.no AS 2026
83

## Side 84

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
84

## Side 85

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar

---

[d147_d147 | Side [1]]
 er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller

---

[d147_d147 | Side [1]]
ende Tidspunkt for overtakelse avtales mellom kjøper og
linje og fosterbarn. Det samme gjelder selger.
dersom andelseier av ulike årsaker har midlertidig fravær
fra boligen. Godkjenning av slik utleie kan
Forsikring
heller ikke nektes uten at det foreligger en saklig grunn.
Se brl. §5‑6. Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg &
Radonmåling
Partners. Boligkjøperforsikring er en

---

[d147_d147 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Membran på bad har passert halvparten av forventet levetid og er fra byggeåret 2007. Det må påregnes at nytt tettesjikt vil være aktuelt på sikt. Dette er vurdert som TG2 (avvik som kan kreve tiltak).",
      "evidence": [
        "Membranen er fra byggeåret 2007 og har passert halvparten av forventet levetid.",
        "Det må påregnes at nytt tettesjikt vil være aktuelt på sikt.",
        "Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.",
        "Badet er overflateoppusset i 2026 med flis på flis og ny innredning. Membran fra byggeår.",
        "Registrert TG2 gjelder aldersmessig vurdering av membran på bad."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Hulltaking i tilstøtende vegg til våtsonen på badet ble ikke utført. Dette betyr at det er usikkerhet knyttet til fuktforhold i skjulte konstruksjoner rundt badet, og eventuelle fuktskader kan ha gått uoppdaget.",
      "evidence": [
        "Det ble ikke foretatt hulltaking i tilstøtende vegg for våtsonen.",
        "Hulltaking: boring av hull for inspeksjon og fuktmåling i risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Eiendommen ligger innenfor faresonen for marin leire, noe som innebærer en potensiell geoteknisk risiko (kvikkleireskred). Faresonen strekker seg over store deler av Kjeller.",
      "evidence": [
        "I henhold til Lillestrøm kommunes kart over området, faller eiendommen innenfor faresonen for marin leire.",
        "Faresonen strekker seg over store deler av Kjeller."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Selger har eid boligen i kun ca. 1 måned og har ikke bodd i boligen siste 12 måneder. Dette innebærer begrenset kjennskap til boligens tilstand og eventuelle skjulte feil, noe som øker risikoen for at vesentlige forhold ikke er opplyst.",
      "evidence": [
        "Antall år 0, Antall måneder 1.",
        "Har du bodd i boligen siste 12 måneder? Nei.",
        "Når kjøpte du boligen? 2026."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Boligen har høy andel fellesgjeld (kr 432 775) med en rente på 5,49 % og løpetid til 2039. Felleskostnadene er kr 6 472 per måned, inkludert IN-lån på kr 3 458 per måned. Renteendringer kan øke de månedlige kostnadene ytterligere.",
      "evidence": [
        "Andel fellesgjeld: kr 432 775 pr. 27.01.2026.",
        "Annuitetslån med rente 5,49 %.",
        "Felleskostnader kr 6 472,- pr. mnd.",
        "For denne andelen utgjør kostnader knyttet til IN-lån per dag kr 3 458 per måned, fordelt på renter og avdrag.",
        "Siste renteendring: 4,16 % fra 01.01.2026.",
        "Løpetid: 01.01.2010 – 01.07.2039."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Det er utført arbeid på rør/avløp av ufaglært/egeninnsats i forbindelse med overflateoppussing på bad og kjøkken. Ufaglært arbeid på VVS-installasjoner kan medføre risiko for lekkasjer og skjulte feil.",
      "evidence": [
        "Ja, kun av ufaglært/ egeninnsats/ dugnad. Egeninnsats/dugnad av faglærte. Avkobling og tilkobling i forbindelse med overflateoppussing på bad og kjøkken."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Radonmåling er ikke utført. Selv om det ikke er krav om dette for boliger som ikke er utleid, kan radonkonsentrasjonen i boligen være ukjent og potensielt helseskadelig.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R8",
      "description": "Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold, noe som er en risiko for kjøper og eventuelle långivere.",
      "evidence": [
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Kjøper må godkjennes av styret i borettslaget. Dersom kjøper ikke godkjennes som ny andelseier, er kjøper likevel forpliktet til å gjennomføre handelen og må besørge videresalg av andelen. Dette er en vesentlig risiko for kjøper.",
      "evidence": [
        "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.",
        "Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier. Risikoen for å bli godkjent som ny eier må kjøper besørge videresalg av andelen."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "1. etasje har ikke rominndeling i de godkjente bygningstegningene hos kommunen. Dette kan innebære at eksisterende rominndeling ikke er godkjent, og at rom kan mangle nødvendige tillatelser.",
      "evidence": [
        "Det foreligger godkjente bygningstegninger fra kommunen. 1. etasje har ikke rominndeling i de godkjente tegningene hos kommunen, det er derfor lagt til grunn 2."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Energimerket er D med rød energifarge, noe som indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming uten alternativ varmekilde, noe som kan gi høye strømkostnader.",
      "evidence": [
        "Energikarakter: D. Energifarge: Rød.",
        "Leiligheten har elektrisk oppvarming, med varmekabler på bad og elektrisk oppvarming i øvrige rom."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget har total restgjeld på kr 55 725 553. Dersom andre andelseiere misligholder sine forpliktelser, kan de øvrige andelseierne bli belastet for å dekke borettslagets løpende utgifter.",
      "evidence": [
        "Total restgjeld: kr 55 725 553.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R13",
      "description": "Det er tinglyst en heftelse fra 1922 (rettigheter iflg. skjøte) på eiendommen. Eldre tinglyste heftelser kan inneholde ukjente forpliktelser eller begrensninger som kan påvirke bruken av eiendommen.",
      "evidence": [
        "20.02.1922 – Dokumentnr: 900196 – Rettigheter iflg. skjøte.",
        "Bestemmelse om generende virksomhet. Eiendommen har opprinnelse fra eldre grunnbok og er registrert med grenser som beskrevet i skylddelingsforretning fra 1920 årene."
      ],
      "source_documents": [
        "d147_d147"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    }
  ],
  "re_retrieval_queries": [
    "hulltaking bad resultat fuktmåling tilstøtende vegg",
    "kvikkleire geoteknisk vurdering grunnforhold Kjeller marin leire tiltak",
    "ufaglært VVS-arbeid rør avløp dokumentasjon bad kjøkken",
    "rominndeling 1. etasje godkjente tegninger kommunen bruksendring",
    "borettslaget økonomi budsjett regnskap fremtidige kostnadsøkninger",
    "el-anlegg samsvarserklæring ufaglært arbeid installasjoner",
    "forkjøpsrett BORI BBL intern forkjøpsrett andel",
    "selger egenerklæring kjennskap bolig skjulte feil mangler"
  ],
  "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Membran bad (TG2):** Svært godt dokumentert. Flere tekstpassasjer bekrefter TG2, aldersmessig vurdering, at membranen er fra 2007, at den har passert halvparten av forventet levetid, og at nytt tettesjikt må påregnes. Confidence justeres marginalt opp til 0.98.\n\n**R2 – Manglende hulltaking:** Direkte bekreftet i tilstandsrapporten: \"Det ble ikke foretatt hulltaking i tilstøtende vegg for våtsonen.\" Definisjonen av hulltaking er også gjengitt. Confidence opprettholdes på 0.88.\n\n**R3 – Marin leire/kvikkleire:** Direkte bekreftet i salgsoppgaven: \"faller eiendommen innenfor faresonen for marin leire. Faresonen strekker seg over store deler av Kjeller.\" Ingen ytterligere geoteknisk vurdering er dokumentert, noe som er en tilleggsmerknad. Confidence opprettholdes på 0.95.\n\n**R4 – Selger har eid boligen i 1 måned:** Direkte bekreftet i egenerklæringen. Selger har ikke bodd i boligen siste 12 måneder. Dette er en vesentlig risikofaktor. Confidence justeres marginalt opp til 0.93.\n\n**R5 – Høy fellesgjeld og felleskostnader:** Godt dokumentert med konkrete tall. Rente 5,49 %, andel fellesgjeld kr 432 775, felleskostnader kr 6 472/mnd, IN-lån kr 3 458/mnd. Confidence justeres marginalt opp til 0.92.\n\n**R6 – Ufaglært VVS-arbeid:** Bekreftet i egenerklæringen: \"Ja, kun av ufaglært/egeninnsats/dugnad. Avkobling og tilkobling i forbindelse med overflateoppussing på bad og kjøkken.\" Confidence opprettholdes på 0.85.\n\n**R7 – Manglende radonmåling:** Direkte bekreftet: \"Selger har ikke utført radonmåling.\" Risikoen er reell men av lavere alvorlighetsgrad siden det ikke er lovpålagt for ikke-utleieboliger. Confidence opprettholdes på 0.78.\n\n**R8 – Legalpant 2G:** Godt dokumentert med to separate tekstpassasjer som bekrefter legalpantet. Confidence justeres marginalt opp til 0.90.\n\n**R9 – Styregodkjennelse:** Direkte bekreftet i salgsoppgaven med tydelig formulering om kjøpers forpliktelse selv uten godkjenning. Confidence opprettholdes på 0.87.\n\n**R10 – Manglende rominndeling i godkjente tegninger:** Bekreftet: \"1. etasje har ikke rominndeling i de godkjente tegningene hos kommunen.\" Teksten er noe avkuttet (\"det er derfor lagt til grunn 2.\"), noe som skaper usikkerhet om full kontekst. Confidence justeres marginalt ned til 0.80.\n\n**R11 – Energimerke D/rød:** Bekreftet med energikarakter D og rød energifarge, samt at boligen kun har elektrisk oppvarming. Confidence opprettholdes på 0.78.\n\n**R12 – Borettslagets totale restgjeld:** Bekreftet med total restgjeld kr 55 725 553 og tydelig formulering om solidaransvar ved mislighold. Confidence opprettholdes på 0.83.\n\n**R13 – Heftelse fra 1922:** Bekreftet med dokumentnummer og beskrivelse av \"bestemmelse om generende virksomhet.\" Heftelsens praktiske konsekvenser er uklare, men eksistensen er dokumentert. Confidence opprettholdes på 0.72.\n\n**Mulige manglende risikoer:**\n- El-anlegget: Det er nevnt at det er utført arbeid av både faglært og ufaglært på el-anlegget (montering av spotter og stikkontakter). Dette er ikke eksplisitt identifisert som en separat risiko, men er delvis dekket av R6.\n- Forkjøpsrett: BORI BBL og intern forkjøpsrett er nevnt, men ingen har meldt forkjøpsrett. Dette er ikke en aktiv risiko per nå.\n- Balkong i trekonstruksjon: Nevnt i dokumentet, men ingen TG-vurdering er gjengitt i de tilgjengelige chunkene.\n- Privat stikkvei med felles vedlikeholdsansvar: Kan medføre fremtidige kostnader.\n- Boligkjøperforsikring og selgerforsikring: Relevant informasjon, men ikke en direkte risiko for kjøper.\n\nAlle 13 risikoer er tilstrekkelig dokumentert og beholdes. Confidence-justeringer er minimale og begrunnet.\n"
}

## Raw Response
```json
{
  "id": "msg_01KtLfMrVxDgR42NAvdj27WT",
  "container": null,
  "content": [
    {
      "id": "toolu_01PgjhkKFzHKjZQn9f9G41pj",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Membran på bad har passert halvparten av forventet levetid og er fra byggeåret 2007. Det må påregnes at nytt tettesjikt vil være aktuelt på sikt. Dette er vurdert som TG2 (avvik som kan kreve tiltak).",
            "evidence": [
              "Membranen er fra byggeåret 2007 og har passert halvparten av forventet levetid.",
              "Det må påregnes at nytt tettesjikt vil være aktuelt på sikt.",
              "Når membranen eldes, svekkes den gradvis og kan utvikle mindre utettheter som slipper fukt ned i konstruksjonen.",
              "Badet er overflateoppusset i 2026 med flis på flis og ny innredning. Membran fra byggeår.",
              "Registrert TG2 gjelder aldersmessig vurdering av membran på bad."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Hulltaking i tilstøtende vegg til våtsonen på badet ble ikke utført. Dette betyr at det er usikkerhet knyttet til fuktforhold i skjulte konstruksjoner rundt badet, og eventuelle fuktskader kan ha gått uoppdaget.",
            "evidence": [
              "Det ble ikke foretatt hulltaking i tilstøtende vegg for våtsonen.",
              "Hulltaking: boring av hull for inspeksjon og fuktmåling i risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Eiendommen ligger innenfor faresonen for marin leire, noe som innebærer en potensiell geoteknisk risiko (kvikkleireskred). Faresonen strekker seg over store deler av Kjeller.",
            "evidence": [
              "I henhold til Lillestrøm kommunes kart over området, faller eiendommen innenfor faresonen for marin leire.",
              "Faresonen strekker seg over store deler av Kjeller."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Selger har eid boligen i kun ca. 1 måned og har ikke bodd i boligen siste 12 måneder. Dette innebærer begrenset kjennskap til boligens tilstand og eventuelle skjulte feil, noe som øker risikoen for at vesentlige forhold ikke er opplyst.",
            "evidence": [
              "Antall år 0, Antall måneder 1.",
              "Har du bodd i boligen siste 12 måneder? Nei.",
              "Når kjøpte du boligen? 2026."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Boligen har høy andel fellesgjeld (kr 432 775) med en rente på 5,49 % og løpetid til 2039. Felleskostnadene er kr 6 472 per måned, inkludert IN-lån på kr 3 458 per måned. Renteendringer kan øke de månedlige kostnadene ytterligere.",
            "evidence": [
              "Andel fellesgjeld: kr 432 775 pr. 27.01.2026.",
              "Annuitetslån med rente 5,49 %.",
              "Felleskostnader kr 6 472,- pr. mnd.",
              "For denne andelen utgjør kostnader knyttet til IN-lån per dag kr 3 458 per måned, fordelt på renter og avdrag.",
              "Siste renteendring: 4,16 % fra 01.01.2026.",
              "Løpetid: 01.01.2010 – 01.07.2039."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Det er utført arbeid på rør/avløp av ufaglært/egeninnsats i forbindelse med overflateoppussing på bad og kjøkken. Ufaglært arbeid på VVS-installasjoner kan medføre risiko for lekkasjer og skjulte feil.",
            "evidence": [
              "Ja, kun av ufaglært/ egeninnsats/ dugnad. Egeninnsats/dugnad av faglærte. Avkobling og tilkobling i forbindelse med overflateoppussing på bad og kjøkken."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Radonmåling er ikke utført. Selv om det ikke er krav om dette for boliger som ikke er utleid, kan radonkonsentrasjonen i boligen være ukjent og potensielt helseskadelig.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R8",
            "description": "Borettslaget har legalpant på inntil 2G (to ganger folketrygdens grunnbeløp) i andelen som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold, noe som er en risiko for kjøper og eventuelle långivere.",
            "evidence": [
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Kjøper må godkjennes av styret i borettslaget. Dersom kjøper ikke godkjennes som ny andelseier, er kjøper likevel forpliktet til å gjennomføre handelen og må besørge videresalg av andelen. Dette er en vesentlig risiko for kjøper.",
            "evidence": [
              "Styregodkjennelse: Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.",
              "Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier. Risikoen for å bli godkjent som ny eier må kjøper besørge videresalg av andelen."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "1. etasje har ikke rominndeling i de godkjente bygningstegningene hos kommunen. Dette kan innebære at eksisterende rominndeling ikke er godkjent, og at rom kan mangle nødvendige tillatelser.",
            "evidence": [
              "Det foreligger godkjente bygningstegninger fra kommunen. 1. etasje har ikke rominndeling i de godkjente tegningene hos kommunen, det er derfor lagt til grunn 2."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Energimerket er D med rød energifarge, noe som indikerer relativt høyt energiforbruk. Boligen har kun elektrisk oppvarming uten alternativ varmekilde, noe som kan gi høye strømkostnader.",
            "evidence": [
              "Energikarakter: D. Energifarge: Rød.",
              "Leiligheten har elektrisk oppvarming, med varmekabler på bad og elektrisk oppvarming i øvrige rom."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget har total restgjeld på kr 55 725 553. Dersom andre andelseiere misligholder sine forpliktelser, kan de øvrige andelseierne bli belastet for å dekke borettslagets løpende utgifter.",
            "evidence": [
              "Total restgjeld: kr 55 725 553.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R13",
            "description": "Det er tinglyst en heftelse fra 1922 (rettigheter iflg. skjøte) på eiendommen. Eldre tinglyste heftelser kan inneholde ukjente forpliktelser eller begrensninger som kan påvirke bruken av eiendommen.",
            "evidence": [
              "20.02.1922 – Dokumentnr: 900196 – Rettigheter iflg. skjøte.",
              "Bestemmelse om generende virksomhet. Eiendommen har opprinnelse fra eldre grunnbok og er registrert med grenser som beskrevet i skylddelingsforretning fra 1920 årene."
            ],
            "source_documents": [
              "d147_d147"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          }
        ],
        "re_retrieval_queries": [
          "hulltaking bad resultat fuktmåling tilstøtende vegg",
          "kvikkleire geoteknisk vurdering grunnforhold Kjeller marin leire tiltak",
          "ufaglært VVS-arbeid rør avløp dokumentasjon bad kjøkken",
          "rominndeling 1. etasje godkjente tegninger kommunen bruksendring",
          "borettslaget økonomi budsjett regnskap fremtidige kostnadsøkninger",
          "el-anlegg samsvarserklæring ufaglært arbeid installasjoner",
          "forkjøpsrett BORI BBL intern forkjøpsrett andel",
          "selger egenerklæring kjennskap bolig skjulte feil mangler"
        ],
        "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Membran bad (TG2):** Svært godt dokumentert. Flere tekstpassasjer bekrefter TG2, aldersmessig vurdering, at membranen er fra 2007, at den har passert halvparten av forventet levetid, og at nytt tettesjikt må påregnes. Confidence justeres marginalt opp til 0.98.\n\n**R2 – Manglende hulltaking:** Direkte bekreftet i tilstandsrapporten: \"Det ble ikke foretatt hulltaking i tilstøtende vegg for våtsonen.\" Definisjonen av hulltaking er også gjengitt. Confidence opprettholdes på 0.88.\n\n**R3 – Marin leire/kvikkleire:** Direkte bekreftet i salgsoppgaven: \"faller eiendommen innenfor faresonen for marin leire. Faresonen strekker seg over store deler av Kjeller.\" Ingen ytterligere geoteknisk vurdering er dokumentert, noe som er en tilleggsmerknad. Confidence opprettholdes på 0.95.\n\n**R4 – Selger har eid boligen i 1 måned:** Direkte bekreftet i egenerklæringen. Selger har ikke bodd i boligen siste 12 måneder. Dette er en vesentlig risikofaktor. Confidence justeres marginalt opp til 0.93.\n\n**R5 – Høy fellesgjeld og felleskostnader:** Godt dokumentert med konkrete tall. Rente 5,49 %, andel fellesgjeld kr 432 775, felleskostnader kr 6 472/mnd, IN-lån kr 3 458/mnd. Confidence justeres marginalt opp til 0.92.\n\n**R6 – Ufaglært VVS-arbeid:** Bekreftet i egenerklæringen: \"Ja, kun av ufaglært/egeninnsats/dugnad. Avkobling og tilkobling i forbindelse med overflateoppussing på bad og kjøkken.\" Confidence opprettholdes på 0.85.\n\n**R7 – Manglende radonmåling:** Direkte bekreftet: \"Selger har ikke utført radonmåling.\" Risikoen er reell men av lavere alvorlighetsgrad siden det ikke er lovpålagt for ikke-utleieboliger. Confidence opprettholdes på 0.78.\n\n**R8 – Legalpant 2G:** Godt dokumentert med to separate tekstpassasjer som bekrefter legalpantet. Confidence justeres marginalt opp til 0.90.\n\n**R9 – Styregodkjennelse:** Direkte bekreftet i salgsoppgaven med tydelig formulering om kjøpers forpliktelse selv uten godkjenning. Confidence opprettholdes på 0.87.\n\n**R10 – Manglende rominndeling i godkjente tegninger:** Bekreftet: \"1. etasje har ikke rominndeling i de godkjente tegningene hos kommunen.\" Teksten er noe avkuttet (\"det er derfor lagt til grunn 2.\"), noe som skaper usikkerhet om full kontekst. Confidence justeres marginalt ned til 0.80.\n\n**R11 – Energimerke D/rød:** Bekreftet med energikarakter D og rød energifarge, samt at boligen kun har elektrisk oppvarming. Confidence opprettholdes på 0.78.\n\n**R12 – Borettslagets totale restgjeld:** Bekreftet med total restgjeld kr 55 725 553 og tydelig formulering om solidaransvar ved mislighold. Confidence opprettholdes på 0.83.\n\n**R13 – Heftelse fra 1922:** Bekreftet med dokumentnummer og beskrivelse av \"bestemmelse om generende virksomhet.\" Heftelsens praktiske konsekvenser er uklare, men eksistensen er dokumentert. Confidence opprettholdes på 0.72.\n\n**Mulige manglende risikoer:**\n- El-anlegget: Det er nevnt at det er utført arbeid av både faglært og ufaglært på el-anlegget (montering av spotter og stikkontakter). Dette er ikke eksplisitt identifisert som en separat risiko, men er delvis dekket av R6.\n- Forkjøpsrett: BORI BBL og intern forkjøpsrett er nevnt, men ingen har meldt forkjøpsrett. Dette er ikke en aktiv risiko per nå.\n- Balkong i trekonstruksjon: Nevnt i dokumentet, men ingen TG-vurdering er gjengitt i de tilgjengelige chunkene.\n- Privat stikkvei med felles vedlikeholdsansvar: Kan medføre fremtidige kostnader.\n- Boligkjøperforsikring og selgerforsikring: Relevant informasjon, men ikke en direkte risiko for kjøper.\n\nAlle 13 risikoer er tilstrekkelig dokumentert og beholdes. Confidence-justeringer er minimale og begrunnet.\n"
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
    "input_tokens": 19357,
    "output_tokens": 4599,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
