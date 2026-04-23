# Trace: agentic_reflecting_iter1
- **Run ID:** 907126ad-4347-4a68-930c-45a2963c5af8
- **Tidspunkt:** 2026-03-25T20:30:38.406191+00:00
- **Varighet:** 109.85s
- **Input tokens:** 22162
- **Output tokens:** 6654

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
Risiko 1: Aktiv lekkasje fra oljetank (TG3) – Det er påvist aktiv lekkasje fra røropplegg tilknyttet oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen. Estimert utbedringskostnad: kr 20 000 – 100 000.
  Confidence: 0.99
  Evidens: Det er påvist avvik pga. aktiv lekkasje fra røropplegg fra oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen.; Kostnadses琀椀mat: 20 000 - 100 000

Risiko 2: Bad 1 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Kritiske bygningsdeler som tettesjikt og sluk er utgått på dato. Det er påvist utettheter i kritiske overganger i våtsonen, rustangrep i sluket, og overgangen mellom gulvbelegg/sluk er ikke tett – noe som medfører økt risiko for fuktskader. Estimert utbedringskostnad: kr 200 000 – 500 000.
  Confidence: 0.99
  Evidens: Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.; Rommet har passert forventet levetid, særlig kritiske bygningsdeler som tettesjikt og sluk.; Overgangen mellom gulvbelegg/ sluk er ikke tett, noe som medfører økt risiko for fuktskader ved høy vannstand i sluket.; Kostnadses琀椀mat: 200 000 - 500 000

Risiko 3: Bad 2 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Det er påvist utettheter i kritiske overganger i rommets våte soner. Hulltaking er ikke foretatt da det allerede er påvist andre avvik i våtsonen.
  Confidence: 0.98
  Evidens: Bad 2, tilliggende konstruksjoner | Det er påvist avvik pga. hulltaking ikke er foretatt da det allerede er påvist andre avvik i våtsonen.; Det er påvist utettheter i kritiske overganger i rommets våte soner, videre har rommet passert forventet levetid.

Risiko 4: Fukt i rom under terreng/kjeller (TG2) – Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner. Det registreres stedvis saltutslag, avflassing av maling og løs murpuss. Boligen mangler fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulvet.
  Confidence: 0.97
  Evidens: Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner.; Videre registreres stedvis saltutslag, avflassing av maling og løs murpuss.; Når bygget ble oppført var det ikke vanlig å etablere fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulv.

Risiko 5: Utgått drenering (TG2) – Mer enn halvparten av forventet levetid på dreneringen er overskredet. Tiltak for redrenering rundt boligen kan ikke utelukkes.
  Confidence: 0.97
  Evidens: Fuktsikring og drenering | Det er påvist avvik pga. mer enn halvparten av forventet levetid på drenering er overskredet.; Tiltak for redrenering rundt boligen kan ikke utelukkes.; Mer enn halvparten av forventet leve琀椀d på drenering er overskredet.

Risiko 6: Utgåtte innvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på både innvendige vannledninger og innvendige avløpsledninger.
  Confidence: 0.96
  Evidens: Vannledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.; Avløpsrør | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.

Risiko 7: Utgåtte utvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.
  Confidence: 0.95
  Evidens: Utvendige vann- og avløpsledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.

Risiko 8: Manglende samsvarserklæring for elektrisk anlegg (TG2) – Det fremgår av tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget. Dette er et lovpålagt krav og utgjør en risiko for kjøper.
  Confidence: 0.97
  Evidens: Det fremgår av tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget.

Risiko 9: Ulovlig oppført garasje – Garasjen er ikke byggemeldt og fremgår ikke av godkjente byggetegninger. For at garasjen skal kunne brukes lovlig, må den godkjennes av kommunen og ha ferdigattest. Kjøper overtar risiko og ansvar for dette forholdet.
  Confidence: 0.98
  Evidens: Det gjøres oppmerksom på at garasjen ikke er byggemeldt.; Det er oppført en garasje som ikke fremgår av de godkjente tegningene. Megler har ikke mottatt dokumenter på at dette er omsøkt eller godkjent hos kommunen.; For at garasjen skal kunne brukes lovlig, må den være godkjent av kommunen og ha ferdigattest.; Kjøper overtar risiko og ansvar for nevnte forhold.

Risiko 10: Kjeller ikke godkjent for varig opphold – Ingen av rommene i kjelleren er godkjent for varig opphold. Kjøper overtar risiko og ansvar for dette forholdet.
  Confidence: 0.98
  Evidens: Det gjøres oppmerksom på at kjelleren ikke er godkjent for varig opphold.; Ingen av rommene i kjelleren er godkjent for varig opphold.; Kjøper overtar risiko og ansvar for nevnte forhold.

Risiko 11: Byggetegninger samsvarer ikke med dagens bruk – Godkjente, reviderte byggetegninger er fra 1970 og samsvarer ikke med dagens bruk av boligen. Ferdigattest vil ikke bli utstedt for ufullførte byggesaker fra før 1998.
  Confidence: 0.95
  Evidens: Det foreligger godkjente, reviderte byggetegninger fra kommunen datert 1970. Disse samsvarer ikke med dagens bruk av boligen.; Det gjøres oppmerksom på at ferdigattest ikke vil bli utstedt for ufullførte byggesaker/ bygningsmeldinger som er fra før 1998.

Risiko 12: HMS-avvik: Rekkverk og håndløper oppfyller ikke dagens krav – Åpninger i rekkverk er større enn dagens forskriftskrav for innvendige trapper. Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav. Rekkverkshøyder er under dagens forskriftskrav. Det mangler håndløper på vegg i det innvendige trappeløpet.
  Confidence: 0.97
  Evidens: Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.; Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav i dagens forskrifter.; Det mangler håndløper på vegg i det innvendige trappeløpet.; Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper.

Risiko 13: Ingen radonmåling og manglende radonsperre – Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Dette utgjør en potensiell helserisiko.
  Confidence: 0.96
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Selger har ikke utført radonmåling.

Risiko 14: Skadedyr (mus og rotte) – Selger bekrefter i egenerklæringen at det har vært mus og én rotte på eiendommen.
  Confidence: 0.95
  Evidens: Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja. Mus + én rotte.

Risiko 15: Utgåtte nedløp, renner og beslag (TG2) – Mer enn halvparten av forventet brukstid er passert på renner, nedløp og beslag.
  Confidence: 0.94
  Evidens: Nedløp og beslag | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på renner/nedløp/beslag.

Risiko 16: Utgått pipe (TG2) – Mer enn halvparten av forventet brukstid er passert på pipe.
  Confidence: 0.93
  Evidens: Pipe og ildsted | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på pipe.

Risiko 17: Fuktskjolder på takkonstruksjon/loft (TG2) – Det er påvist små områder med eldre tørre fuktskjolder på loftet. Fuktmåling viste ikke unormale forhold, men jevnlig tilsyn av kaldloftet anbefales.
  Confidence: 0.88
  Evidens: Takkonstruksjon/ Loft | Det er påvist avvik pga. små områder med eldre tørre fuktskjolder. Ved fuktmåling ble det ikke registrert unormale forhold, noe som tyder på at fuktmerkene stammer fra tidligere forhold. Jevnlig tilsyn av kaldloftet anbefales.

Risiko 18: Værslitte vinduer og balkongdør med fuktmerker (TG2) – Det er påvist værslitte overflater på utvendige sider av enkelte vinduer og balkongdør. Det registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass. Det må påregnes redusert funksjon i form av økt varmetap og redusert tetthet.
  Confidence: 0.92
  Evidens: Vinduer og balkongdør | Det er påvist avvik pga. værslitte overflater på utvendige sider av enkelte vinduer og balkongdør.; Videre registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass.; Det påregnes redusert funksjon i form av økt varmetap og redusert tetthets-evne.

Risiko 19: Manglende lufting i veggkonstruksjon mot grunnmur (TG2) – Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.
  Confidence: 0.91
  Evidens: Veggkonstruksjon | Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.

Risiko 20: Høy slitasjegrad på innvendige overflater (TG2) – Overflater bærer preg av høy slitasjegrad og elde.
  Confidence: 0.88
  Evidens: Innvendige overflater | Det er påvist avvik da overflater bærer preg av høy slitasjegrad og elde.

Risiko 21: Lekkasje/utetthet på kjøkken – Det er registrert utettheter eller vannlekkasjer i røropplegg på kjøkkenet. Det registreres en skrue som har gjennomtrengt vannlåsen.
  Confidence: 0.9
  Evidens: Kjøkken > 1. etasje > Kjøkken > Overflater og innredning: Det er registrert utettheter eller vannlekkasjer i røropplegg.; Det registreres en skrue som har gjennomtrengt vannlåsen.

Risiko 22: Salg fra dødsbo med begrenset kjennskap til eiendommen – Arvingene har begrenset kjennskap til eiendommen og er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet. Dette øker risikoen for skjulte feil og mangler.
  Confidence: 0.93
  Evidens: Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.; Interessenter oppfordres til å foreta grundige undersøkelser, gjerne sammen med takstmann eller annen fagkyndig.

Risiko 23: Terrengforhold ikke fullt vurdert – Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering. Skjulte avvik i terreng og drenering kan ikke utelukkes.
  Confidence: 0.85
  Evidens: Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering av terrengforholdene.

Risiko 24: Arbeid utført av ikke-faglærte – Det er opplyst at arbeid på terrasse/garasje/tak/fasade er utført, men utfører er ukjent. Arbeid utført av ikke-faglærte kan avvike fra fagmessig standard og skape skjulte feil.
  Confidence: 0.8
  Evidens: Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av faglært. Beskrivelse: Byttet shingeltak for over 30 år siden. Arbeid utført av: Ukjent.; Ved arbeid som ikke er utført av faglærte håndverkere, kan det forekomme løsninger eller utførelser som avviker fra det som normalt forventes etter fagmessig standard.

Risiko 25: Energikarakter E – Boligen har energikarakter E, som indikerer høyt energiforbruk. Dette kan medføre betydelige løpende energikostnader for kjøper.
  Confidence: 0.88
  Evidens: Energikarakter: E

Risiko 26: Høye kommunale avgifter og eiendomsskatt – Kommunale avgifter er beregnet til kr 51 830 (2025) og eiendomsskatt til kr 13 062 (2023). Avgiftene kan øke fremover.
  Confidence: 0.82
  Evidens: Kommunale avgifter: Kr 51 830 (2025); Eiendomsskatten ble i 2023 beregnet til kr. 13 062,‑.; Kommunale avgifter og gebyrer kan avvike fra en termin til en annen.

Dokumentkontekst:
[d200_d200 | Side [1]]
speksjon og fuktmåling i risikoutsa琀琀e
Struktur og referansenivå konstruksjoner.
Rapporten beskriver avvik, det vil si en 琀椀lstand som er dårligere enn Normal slitasjegrad: Forventet slitasje av materiale i over昀氀aten, basert på
referansenivået. Posi琀椀ve sider ved boligen, ut over det som kommer frem enkle, visuelle observasjoner. Kan vurderes sammen med bygningsdelens
av 琀椀lstandsgradene, blir normalt ikke fremhevet. alder.
Rapporten baserer seg på krav i forskri昀琀 琀椀l avhendingslova (tryggere

---

[d200_d200 | Side [1]]
ig arbeid.
Tilstandsrapporten bygger på visuell befaring og uten inngrep i
konstruksjoner, og det tas derfor forbehold om forhold som
ikke lar seg avdekke uten mer omfa琀琀ende undersøkelser.
Kjøper bør være oppmerksom på at det kan forekomme skjulte
avvik eller avvik fra faglig standard som ikke nødvendigvis er
synlige ved over昀氀a琀椀sk inspeksjon.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Enebolig
Anslag på utbedringskostnad
STORE ELLER ALVORLIGE

---

[d200_d200 | Side [1]]
nsjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse

---

[d200_d200 | Side [1]]
trasjon og er ikke i målestokk.
Ved arbeid som ikke er u琀昀ørt av faglærte håndverkere, kan det
forekomme løsninger eller u琀昀ørelser som avviker fra det som
normalt forventes e琀琀er fagmessig standard. Slike avvik er ikke
nødvendigvis i strid med funksjonskrav, men de kan skille seg
fra u琀昀ørelse gjort av profesjonelle. De琀琀e gjelder særlig detaljer,
overganger og teknisk u琀昀ørelse som kan fremstå visuelt ujevnt
eller utypisk for håndverksmessig arbeid.
Tilstandsrapporten bygger på visuell befaring og uten

---

[d200_d200 | Side [1]]
arten av forventet brukstid er passert på renner/
salgsoppgaven. Interessenter oppfordres til å gjennomgå nedløp/ beslag.
dette nøye.
‑ Veggkonstruksjon | Det er påvist avvik da det er ingen
Samsvarserklæring: eller liten lufting i nedre kant av kledning mot grunnmur.
Det fremgår av tilstandsrapporten at det mangler/ ikke er
fremlagt samsvarserklæring for det elektriske anlegget. ‑ Takkonstruksjon/ Loft | Det er påvist avvik pga. små
områder med eldre tørre fuktskjolder. Ved fuktmåling ble
det ikke

---

[d200_d200 | Side [1]]
 Utvendige fasader er kledd med
liggende og stående trekledning. Saltakskonstruksjonen
Kjenner du til om det foreligger skaderapporter/ er tekket med takmembran. Vinduer med koblede glass
tilstandsvurderinger eller utførte målinger? og 2‑lags glass.
Ja.
Vurdering av skade i gulv på bad. Tidligere nevnt. Bygningsdeler vurdert med TG2:
‑ Nedløp og beslag | Det er påvist avvik da mer enn
Selgers egenerklæringsskjema følger vedlagt halvparten av forventet brukstid er passert på renner/
salgsoppgaven.

---

[d200_d200 | Side [1]]
mråder med eldre tørre fuktskjolder. Ved fuktmåling ble
det ikke registrert unormale forhold, noe som tyder på at
Byggemåte fuktmerkene stammer fra tidligere forhold. Jevnlig tilsyn
I forbindelse med salget er det blitt utført en av kaldloftet anbefales.
tilstandsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir en grundig vurdering av boligens tilstand ‑ Vinduer og balkongdør | Det er påvist avvik pga.
og påpeker eventuelle avvik som ble oppdaget under værslitte overflater på utvendige sider av

---

[d200_d200 | Side [1]]
ligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀

---

[d200_d200 | Side [1]]
ringsdato: 23.02.2026 Side: 3 av 24
54

## Side 55

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Steinhaugen 29, 7049 TRONDHEIM 7052 TRONDHEIM
Gnr 47 - Bnr 103
5001 TRONDHEIM
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at

---

[d200_d200 | Side [1]]
overganger i rommets våte soner, videre har rommet
halvparten av forventet brukstid er passert på pipe. passert forventet levetid.
‑ Rom under terreng | Det er påvist avvik pga. ved Bygningsdeler vurdert med TG3:
fuktsøk på betonggulv og nedre del av yttervegger ble ‑ Oljetank | Det er påvist avvik pga. aktiv lekkasje fra
det registrert forhøyede fuktindikasjoner. Videre røropplegg fra oljetanken. Lekkasjen har oppstått i en
registreres stedvis saltutslag, avflassing av maling og løs rør‑kobling i

---

[d200_d200 | Side [1]]
ndersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot byggeregler
Når du kjøper en brukt bolig, er det vik琀椀g å være

---

[d200_d200 | Side [1]]
ddel (S-rom 琀椀l P-rom) og ved endring av byggets
bærende vegger, brannskiller og lignende.
Oppdragsnr.: 21667-1979 Befaringsdato: 23.02.2026 Side: 6 av 24
57

## Side 58

15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
llatnA
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
2
1.5
1
0.5
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
VerdiAnalyse AS
O琀琀o

---

[d200_d200 | Side [1]]
et påregnes redusert funksjon i form
av økt varmetap og redusert tetthets‑evne.
38

## Side 39

OM EIENDOMMEN
‑ Innvendige overflater | Det er påvist avvik da overflater ‑ Bad 2, tilliggende konstruksjoner | Det er påvist avvik
bærer preg av høy slitasjegrad og elde. pga. hulltaking ikke er foretatt da det allerede er påvist
andre avvik i våtsonen. Det er påvist utettheter i kritiske
‑ Pipe og ildsted | Det er påvist avvik da mer enn overganger i rommets våte soner, videre har rommet
halvparten av

---

[d200_d200 | Side [1]]
et på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal

---

[d200_d200 | Side [1]]
s når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen

---

[d200_d200 | Side [1]]
usert funksjon i form av økt varmetap og redusert
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
te琀琀hets-evne.
Utvendig > Taktekking Gå til side
Innvendig > Over昀氀ater Gå til side
Det er påvist andre avvik:
Utvendig > Terrasse Gå til side
Over昀氀ater bærer preg av høy slitasjegrad og elde.
Tomteforhold > Terrengforhold Gå til side Innvendig > Pipe og ildsted Gå til side
Mer enn halvparten av forventet bruks琀椀d er passert
på pipe.
AVVIK SOM KAN KREVE TILTAK
Utvendig > Nedløp og beslag Gå til side Innvendig > Rom

---

[d200_d200 | Side [1]]
rdi-analyse.no
482 13 674
Oppdragsnr.: 21667-1979 Befaringsdato: 23.02.2026 Side: 2 av 24
53

## Side 54

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Steinhaugen 29, 7049 TRONDHEIM 7052 TRONDHEIM
Gnr 47 - Bnr 103
5001 TRONDHEIM
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige

---

[d200_d200 | Side [1]]
om ble oppdaget under værslitte overflater på utvendige sider av enkelte vinduer
befaringen. Tilstandsrapporten og selgers egenerklæring og balkongdør. Videre registrere stedvise fuktmerker i
er vedlagt salgsoppgaven, og det er viktig at nedkant av innvendige karmer, noe som tyder på
interessenter setter seg grundig inn i disse dokumentene kondensering på innvendige glass. Mtp. oppbygning og
før bud legges inn. oppnådd alder bør det påregnes redusert funksjon i form
av økt varmetap og redusert

---

[d200_d200 | Side [1]]
med eksempelvis kamerainspeksjon e.l. noe som ikke ble u琀昀ørt på befaringsdagen.
Vurdering av avvik:
• Mer enn halvparten av forventet leve琀椀d på drenering er overskredet.
Konsekvens/琀椀ltak
• Tiltak for redrenering rundt boligen kan ikke utelukkes.
Grunnmur og fundamenter
Beskrivelse
Grunnmur i murte blokker som er utvendig pusset over terreng.
Terrengforhold
Beskrivelse
Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering av

---

[d200_d200 | Side [1]]
ten baserer seg på krav i forskri昀琀 琀椀l avhendingslova (tryggere Areal
bolighandel). For valg av 琀椀lstandsgrad blir NS 3600:2018 (teknisk
琀椀lstandsanalyse ved omsetning av bolig) lagt 琀椀l grunn. Areal fastse琀琀es e琀琀er forskri昀琀 琀椀l avhendingslova og gjeldende versjon av NS
3940 (areal- og volumberegninger av bygninger).
Bygningssakkyndig er ikke ansvarlig for 琀椀lbakeholdt eller urik琀椀g
informasjon, som har betydning for 琀椀lstandsvurderingen. Et rom kan være i strid med teknisk forskri昀琀 og mangle

---

[d200_d200 | Side [1]]
l megler. Vi oppfordrer
i Trondheim kommune. interessenter til å gjøre seg kjent med disse.
Selger Tinglyste heftelser
Iver Kristian Schjetne iht. fullmakt Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny
Sameie hjemmelshaver:
Sameiets forsikringsselskap: Gjensidige
5001/ 47/ 103:
18.11.2004 ‑ Dokumentnr: 24997 ‑ Erklæring/ avtale
Energimerke Pliktig medlemskap i velforening m.v.
Energikarakter: E

---

[d200_d200 | Side [1]]
planer, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse Vurdering av skade i gulv på bad.

---

[d200_d200 | Side [1]]
dommen, er en del av avtalen mellom kjøper og selger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil

---

[d200_d200 | Side [1]]
sket/ rengjort før overtakelse.
Lovanvendelse
Dødsbo: Det gjøres spesielt oppmerksom på at dette er Regelverk og generelle opplysninger
salg av eiendom for et dødsbo. Arvingene har begrenset Boligen selges med det inventar og utstyr som i henhold
kjennskap til eiendommen, og de er derfor ikke kjent med til gjeldende lover, forskrifter eller offentlige pålegg skal
feil eller mangler utover det som fremkommer av følge med eiendommen, jf. avhendingsloven § 3‑4.
salgsmaterialet. Interessenter oppfordres til å

---

[d200_d200 | Side [1]]
inger i rekkverk på utvendige trapper er ikke i
henhold til krav i dagens forskrifter.
‑ Det er ikke foretatt radonmålinger, og bygget er heller
ikke utført med radonsperre.
39

## Side 40

om eiendommen
‑ Det mangler håndløper på vegg i det innvendige Hvis et rom på visningen mangler fast installert
trappeløpet. oppvarmingskilde, vil ikke dette bli inkludert i handelen.
‑ Rekkverkshøyder er under dagens forskriftskrav til
rekkverk i innvendige trapper. Regulerings og arealplaner
Eiendommen er regulert til

---

[d200_d200 | Side [1]]
er eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Nei
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Nei
KOMMENTARFELT:
17.02.2026 12:00:24 Side 1 av 2
83

## Side 84

Det tas forbehold om feil og mangler.
17.02.2026 12:00:24 Side 2 av 2
84

## Side 85

Matrikkelkart
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr
5001 - Trondheim 47 103 0 0
Orientering om

---

[d200_d200 | Side [1]]
n: Tilstandsrapport
lagringsmuligheter og et stort potensial for videre
oppgradering. Sammendrag selgers egenerklæring: Utdrag fra selgers
egenerklæring:
Det er gode parkeringsmuligheter på eiendommen. Det
gjøres oppmerksom på at garasjen ikke er byggemeldt. Kjenner du til om det er/ har vært feil tilknyttet
Eiendommen ligger i et rolig og etablert boligområde på våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller
Steinan/ Steinhaugen, et område som er spesielt anbefalt soppskader?
for familier med

---

[d200_d200 | Side [1]]


## Side 49

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Byttet shingeltak for over 30 år siden.
Arbeid utført av Ukjent
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan

---

[d200_d200 | Side [1]]
r som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende
garanti fra produsent eller leverandør.
37

## Side 38

OM EIENDOMMEN
Kjenner du til om det er/ har vært utført arbeid på Kjøper anses kjent med opplysninger som kommer
el‑anlegget eller andre installasjoner (f.eks. oljetank, tydelig frem i tilstandsrapporten, og det vil ikke være
sentralfyr, ventilasjon)? mulig å gjøre slike forhold gjeldende som en mangel.
Ja. Spesielt forhold som er vurdert med TG2 og TG3

---

[d200_d200 | Side [1]]
en datert 1970. Disse samsvarer ikke med
dagens bruk av boligen. Følgende avvik er bemerket:
Parkering Det er oppført en garasje som ikke fremgår av de
Parkering på egen tomt. godkjente tegningene. Megler har ikke mottatt
dokumenter på at dette er omsøkt eller godkjent hos
kommunen. For at garasjen skal kunne brukes lovlig, må
Adkomst den være godkjent av kommunen og ha ferdigattest. Det
På høyre side i annonsen finner du et kartutsnitt. Ved å gjøres oppmerksom på at kjelleren ikke er godkjent for
klikke

---

[d200_d200 | Side [1]]
er og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring er u琀昀ylt av selger. Kjøper
plikter å lese gjennom selgers
egenerklæring, da det kan fremkomme Ikke
Egenerklæring Nei
informasjon som ikke er en del av gjennomgå琀琀
琀椀lstandsrapporten og som kan ha relevans
for eiendommen.
Kommunepakke med kommunale
Ikke
Kommunalinfo opplysninger gi琀琀 av Trondheim Nei
gjennomgå琀琀
kommune/megler.
Ikke
Eiendomsverdi.no Hjemmel, eier og eiendomsinformasjon. Nei
gjennomgå琀琀
Revisjoner
Versjon

---

[d200_d200 | Side [1]]
ible bruksmuligheter.
Ett av soverommene har direkte adkomst til privat bad.
Badene er av eldre standard og må påregnes
36

## Side 37

OM EIENDOMMEN
oppgradert. Planløsningen gir gode muligheter for å Kjøper aksepterer at det kan forekomme hull og merker
etablere moderne løsninger tilpasset dagens behov. etter montering av inventar og utstyr som ikke er en del
av overdragelsen.
Fra kjøkkenet er det adkomst til et rom som har vært
brukt som vaskerom, med videre forbindelse til kjeller og
Eiendommens
til

---

[d200_d200 | Side [1]]
AMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi

---

[d200_d200 | Side [1]]
 å gjøres oppmerksom på at kjelleren ikke er godkjent for
klikke på kartet kan du enkelt planlegge din rute fra valgt varig opphold.
startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger for enkel orientering. Kjøper overtar risiko og ansvar for nevnte forhold.
35

## Side 36

OM EIENDOMMEN
Bruksareal BRA:
Innhold
BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
Enebolig over to plan som består av følgende rom: BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
boenheten

---

[d200_d200 | Side [1]]

## Side 41

OM EIENDOMMEN
Utleie
Adgang til utleie: Boligen kan fritt leies ut, men har ingen Forsikring
egen utleiedel. Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Radonmåling Egenerklæringsskjema er vedlagt salgsoppgaven og
Selger har ikke utført radonmåling. Det er ikke krav om interessenter oppfordres til å gjennomgå denne før bud
dette med mindre boligen er helt eller delvis utleid.

---

[d200_d200 | Side [1]]
øre: Salgsoppgaven inkluderer NEFs Kjenner du til om det er/ har vært sopp/ råteskader/
standardliste "Oversikt over løsøre og tilbehør", som insekter/ skadedyr på eiendommen som rotter, mus,
legges til grunn med mindre annet er spesifisert i maur eller lignende?
salgsoppgaven. Ja.
Mus + én rotte.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det

---

[d200_d200 | Side [1]]
e målinger?
Nei Ja
Beskrivelse Vurdering av skade i gulv på bad. TIdligere nevnt.
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: IKS 3
22006250
:ecnerefer
tnemucoD
49

## Side 50

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil

---

[d200_d200 | Side [1]]

Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som

---

[d200_d200 | Side [1]]
 og pumpeanlegg •
bygningens este琀椀kk og arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse,
miljø og sikkerhet) • fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller
fellesarealet har en særlig 琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi.

---

[d200_d200 | Side [1]]
n 27
m² stor terrasse på baksiden av huset.

## Side 29

Her får du en flott utsikt som strekker
seg over nabolaget og videre ut mot
Trondheimsfjorden.
Eiendommen ligger i et svært populært
og trygt bomiljø for familier. Her har du
kort avstand til hverdagens fasiliteter.

## Side 30

Plantegning

## Side 31

Plantegning

## Side 32

OM EIENDOMMEN

## Side 33

STEINHAUGEN 29
OM EIENDOMMEN

## Side 34

OM EIENDOMMEN
Økonomi
Andre kostnader:
Velforening: Det er pliktig medlemskap i Steinhaugen
Prisantydning

---

[d200_d200 | Side [1]]
spakke kr 25 000,00 Emera Norge AS og eiendomsmeglingsforetakene som
Oppgjørshonorar kr 5 900,00 er tilknyttet Emera har samarbeid med forskjellige
Tilretteleggingshonorar inkl. Interiørveiledning kr 17 foretak som tilbyr forbrukerne produkter eller tjenester i
500,00 forbindelse med et salgsoppdrag. Våre
Visnings‑/ overtagelseshonorar pr. stk. kr 2 990,00 samarbeidspartene er:
Utlegg: Søderberg & Partners AS ‑ formidler av boligselger‑ og
Selger dekker utlegg i henhold til oppdragsavtalen. Disse

---

[d200_d200 | Side [1]]
tal investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Legg ID her Legg ID her

## Side 117

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

[d200_d200 | Side [1]]
eter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
av om kjøper er forbrukerkjøper eller ikke, og dette er Dersom kjøper er en juridisk enhet, eller en fysisk person
nærmere forklart nedenfor. som handler i næringssammenheng, regnes kjøpet

---

[d200_d200 | Side [1]]
nkretser i stedet
Eiendomsskatten ble i 2023 beregnet til kr. 13 062,‑. for kommuner.
Kommunale avgifter Formuesverdien er en prosentandel av den beregnede
Kr 51 830 (2025) boligverdien.
Informasjon: Kommunale avgifter inkluderer vann, avløp, Den nye utregningsmodellen kan medføre en høyere
renovasjon, feiing og eiendomsskatt. eller lavere markedsverdien enn tidligere. Det tas derfor
forbehold om at formuesverdien kan bli endret og
De kommunale avgiftene fra februar 2025 og frem til eventuelt øke ved

---

[d200_d200 | Side [1]]
tørkestativ, samt andre faste 
budrunden og makspuls når den er over!
utearrangementer som f.eks. badestamp, boblekar/jacuzzi og liknende utendørs kar, lekestue, 
lekestativ, utepeis, fastmontert trommel til vannslange, medfølger. Guidekabel/avgrensingskabel til 
robotgressklipper medfølger, men robotgressklipper og ladestasjon for denne medfølger ikke.
16. FASTMONTERT VEGGLADER/LADESTASJON TIL EL-BIL medfølger uavhengig av hvor laderen er 
montert. 
17. SOLCELLEANLEGG med tilhørende teknisk

---

[d200_d200 | Side [1]]
lforening: Det er pliktig medlemskap i Steinhaugen
Prisantydning velforening. Den årlige kontingenten til velforeningen er
Kr 6 990 000 kr 500,‑ per husstand per dato.
Velforeningens vedtekter ligger vedlagt salgsoppgaven.
Omkostning kjøper
Kr 6 990 000,‑ Prisantydning Velforeningsavgift: 500 pr. år
Omkostninger: Andre utgifter: Utover kommunale avgifter og
Kr 174 750 Dokumentavgift (2,5%) velforeningskontigent vil løpende kostnader omfatte bl.a.
Kr 545 Tingl.gebyr pantedokument bygningsforsikring, tv‑ og

---

[d200_d200 | Side [1]]
rten.
Enebolig
Anslag på utbedringskostnad
STORE ELLER ALVORLIGE AVVIK
Tomteforhold > Oljetank Gå til side
Det er påvist andre avvik:
Det er påvist aktiv lekkasje fra røropplegg fra
oljetanken. Lekkasjen har oppstått i en rør-kobling i
himlingen i kjellerstuen.
Kostnadses琀椀mat: 20 000 - 100 000
Våtrom > 1. etasje > Bad 1 > Generell Gå til side
Våtrommet må oppgraderes for å tåle normal bruk
e琀琀er dagens krav.
- Rommet har passert forventet levetid, særlig
kritiske bygningsdeler som tettesjikt og sluk.

---

[d200_d200 | Side [1]]
aderen er 
montert. 
17. SOLCELLEANLEGG med tilhørende teknisk infrastruktur medfølger.
En komplett meglertjeneste En prosess du fortjener
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
Emera Eiendomsmegling tilbyr en komplett Vårt mål er at du, enten du er selger eller kjøper,
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger 
medfølger ikke. meglertjeneste – fra verdivurdering, klargjøring skal føle engasjement, ærlighet og
og koordinering av all

---

[d200_d200 | Side [1]]
 vaskerom, med videre forbindelse til kjeller og
Eiendommens
til hobbyrom/ kontor. Rommet er av eldre standard og har
behov for oppgradering.
tilstand
Kjelleren inneholder flere rom som i dag benyttes til
lagring og hobbyformål. Ingen av rommene i kjelleren er Takstmann: Ole‑Einar Fjeldheim
godkjent for varig opphold. Det er totalt 7 rom i kjelleren,
hvorav ett er innredet som toalettrom. Kjelleren gir gode Type takst avholdt av takstmann: Tilstandsrapport
lagringsmuligheter og et stort potensial for

---

[d200_d200 | Side [1]]
ler.
med en konkret vurdering eller 琀椀lbud fra entreprenør eller håndverker.
Anslaget vil også avhenge av personlige preferanser og markedspris på Rom som ligger utenfor boenheten, som eier har påvist eller opplyst at
materialer og tjenesteyter. 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke fremvist
dokumentasjon på at rommet 琀椀lhører boenheten, med mindre de琀琀e er
Tilstandsrapporten gjelder hovedbygget og 琀椀lleggsbygninger som den angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres

---

[d200_d200 | Side [1]]
ingsloven § 3‑4.
salgsmaterialet. Interessenter oppfordres til å foreta Fastmonterte eller spesialtilpassede installasjoner og
grundige undersøkelser, gjerne sammen med takstmann innredning som anses som varig tilknyttet boligen, følger
eller annen fagkyndig. normalt med i handelen, med mindre det foreligger en
særskilt avtale mellom partene om noe annet, jf.
avhendingsloven § 3‑5.
En standard tilbehørsliste utarbeidet av Norges
Kontrakts‑
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som

---

[d200_d200 | Side [1]]
ndommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at

---

[d200_d200 | Side [1]]
tmonterte glass- og håndkleholdere, herunder håndklevarmere samt baderomsinnredning,
medfølger.
6. GARDEROBESKAP medfølger, selv om disse er løse. Fastmonterte garderobehyller og knagger
medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller, 
stenger og lignende, medfølger.
7. KJØKKENINNREDNING medfølger, herunder også åpne, fastmonterte hyller og løs eller fastmontert 
kjøkkenøy.

Emera Eiendomsmegling AS - Henrik Ibsens gate 40, 0255 Oslo

## Side

---

[d200_d200 | Side [1]]
tak mellom kr 200 000 – 500 000
håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
betydelig, avhengig av individuelle valg, materialpriser og Tiltak over kr 500 000
markedsforhold. For å få en nøyak琀椀g vurdering av
utbedringskostnadene anbefales y琀琀erligere undersøkelser og
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
gis for TG3, der de琀琀e er mulig.
Oppdragsnr.: 21667-1979 Befaringsdato: 23.02.2026 Side: 4 av 24
55

## Side 56

VerdiAnalyse AS
O琀琀o Nielsens veg

---

[d200_d200 | Side [1]]
re nærheten til Estenstadmarka,
som inviterer til løpe‑, ski‑ og sykkelturer året rundt. Det gjøres oppmerksom på at ferdigattest ikke vil bli
Området har også gode kollektivforbindelser, med utstedt for ufullførte byggesaker/ bygningsmeldinger
busstoppet Lohove et par minutter fra boligen. Herfra tar som er fra før 1998.
bussen deg raskt og effektivt til sentrum og andre
bydeler. Det foreligger godkjente, reviderte byggetegninger fra
kommunen datert 1970. Disse samsvarer ikke med
dagens bruk av boligen.

---

[d200_d200 | Side [1]]
 kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Bebyggelse og anlegg - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 1388.61m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn
Ja
5001 r1074b Steinhaugen 16-18-20 (12.9.1967)
5001 r1074f Bortregulering av gangstier i Steinhaugenområdet (12.12.1972)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det

---

[d200_d200 | Side [1]]
t?
Nei Ja
2.2 Er arbeidet byggemeldt?
Nei Ja
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med

---

[d200_d200 | Side [1]]
 byggemeldte tegninger vedlagt i mo琀琀a琀琀 meglerpakke registreres følgende
endringer:
1. etasje:
- Garasjen fremgår ikke på byggemeldte tegninger.
Rapporten tar ikke høyde for om omgjøringene er søknadsplik琀椀ge eller ikke og bemerker kun omgjøringer fra byggemeldte og
godkjente tegninger i kommunens arkiv.
Det er søknadsplikt ved omgjøring av rom fra 琀椀lleggsdel 琀椀l hoveddel (S-rom 琀椀l P-rom) og ved endring av byggets bærende
vegger, brannskiller og lignende.
Nyere håndverkstjenester
Er det ifølge eier

---

[d200_d200 | Side [1]]
mmunale avgiftene fra februar 2025 og frem til eventuelt øke ved endelig fastsettelse i skatteåret.
januar 2026 er beregnet til kr. 51 830,‑. Kommunale
avgifter og gebyrer kan avvike fra en termin til en annen. For mer informasjon om formuesverdi, se Skatteetatens
nettsider.
34

## Side 35

OM EIENDOMMEN
Beliggenhet Tomt
Velkommen til Steinan, et veletablert og barnevennlig Tomtetype: Eiet
boligområde som kombinerer roen fra marka med
nærhet til byens fasiliteter. Her bor du i et trygt nabolag

---

[d200_d200 | Side [1]]
,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Arealer
Oppdragsnr.:

---

[d200_d200 | Side [1]]
 er avvik fra disse.
Ved vurdering av dagens planløsning opp mot byggemeldte
tegninger vedlagt i mo琀琀a琀琀 meglerpakke registreres følgende
endringer:
1. etasje:
- Garasjen fremgår ikke på byggemeldte tegninger.
Rapporten tar ikke høyde for om omgjøringene er
søknadsplik琀椀ge eller ikke og bemerker kun omgjøringer fra
byggemeldte og godkjente tegninger i kommunens arkiv.
Det er søknadsplikt ved omgjøring av rom fra 琀椀lleggsdel 琀椀l
hoveddel (S-rom 琀椀l P-rom) og ved endring av byggets
bærende vegger,

---

[d200_d200 | Side [1]]
syn bevaring kulturmiljø Byggegrense - marka Byggegrense - grønn strek
Turveg / turdrag Framtidig turveg / turdrag Kollektivtrase
Hovedveg Hovedvegnett sykkel Byggesone 1
Byggesone 2 Byggesone 3 Offentlig eller privat
tjenesteyting
Blå/grønnstruktur LNFR Framtidig LNFR
17.02.2026 12:00:30 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
92

## Side 93

93

## Side 94

94

## Side 95

95

## Side 96

96

## Side 97

97

## Side 98

98

## Side 99

99

## Side 100

100

##

---

[d200_d200 | Side [1]]
eringen. Et rom kan være i strid med teknisk forskri昀琀 og mangle godkjennelse hos
kommunen for den aktuelle bruken, uten at de琀琀e får betydning for om
Presiseringer arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet måles tas det ikke
hensyn 琀椀l om arealet er lovlig oppført eller om bruken er lovlig,
Anslag på utbedringskostnader er sjablongmessig, og må ikke forveksles bruksendringer, lysforhold eller andre sikkerhetsmangler.
med en konkret vurdering eller 琀椀lbud fra entreprenør eller

---

[d200_d200 | Side [1]]
fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
Beskrivelse Mus + én rotte.
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har

---

[d200_d200 | Side [1]]
 ikke u琀昀ørt med radonsperre.
på innvendige avløpsledninger. Det mangler håndløper på vegg i det innvendige
trappeløpet.
Rekkverkshøyder er under dagens forskri昀琀skrav 琀椀l
rekkverk i innvendige trapper.
Tomteforhold > Fuktsikring og drenering Gå til side
Mer enn halvparten av forventet leve琀椀d på drenering
er overskredet.
Tomteforhold > Utvendige vann- og avløpsledninger Gå til side
Mer enn halvparten av forventet bruks琀椀d er passert
på utvendige avløpsledninger.
Mer enn halvparten av forventet bruks琀椀d er

---

[d200_d200 | Side [1]]
n .
Plan dispensasjon punkt RpFormålGrense RpFareGrense
RpGrense Bebyggelse som inngår i Regulert senterlinje
planen
Måle- og avstandslinje Høyspenningsanlegg (inkl Boligbebyggelse
Høyspentkabler)
Energianlegg Kjøreveg Fortau
Turveg Friområde
17.02.2026 12:00:56 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
90

## Side 91

Kommuneplanens arealdel
Eiendom: Gnr: 47 Bnr: 103 Fnr: 0 Snr: 0
Adresse: Steinhaugen 29
Målestokk
7049 TRONDHEIM
Trondheim 1:5000
Annen

---

[d200_d200 | Side [1]]
llerstue og boder med naturlig ven琀椀lasjon via åpningsvinduer og ven琀椀ler i y琀琀ervegger.
Y琀琀ervegger som vender mot terreng er pusset og enkelte er over昀氀atebehandlet.
Hulltaking er ikke gjennomført da y琀琀ervegger er av mur. Fuktsøk er gjennomført på både fri琀琀 eksponerte murvegger og betonggulv.
Konstruksjoner under terreng er generelt utsa琀琀 for fuktpåvirkning fra omkringliggende masser med økt risiko for fuktopptrekk og kondens bak u琀昀orede
vegger og under oppforede gulv.
Vurdering av avvik:
• Det er

---

[d200_d200 | Side [1]]
ede
vegger og under oppforede gulv.
Vurdering av avvik:
• Det er påvist andre avvik:
Ved fuktsøk på betonggulv og nedre del av y琀琀ervegger ble det registrert forhøyede fuk琀椀ndikasjoner. Videre registreres stedvis saltutslag, av昀氀assing av
maling og løs murpuss. Når bygget ble oppført var det ikke vanlig å etablere fuktsperre under gulv mot grunn, noe som fører 琀椀l fuktopptrekk via
betonggulv.
Konsekvens/琀椀ltak
• Andre 琀椀ltak:
Det anbefales å etablere fuktsikrings琀椀ltak for å redusere eller hindre

---

[d200_d200 | Side [1]]
e lekkasjer
så tidlig som mulig. Det registreres små områder med eldre tørre
Kostnadses琀椀mat: 200 000 - 500 000 fuktskjolder. Ved fuktmåling ble det ikke registrert
unormale forhold, noe som tyder på at fuktmerkene
stammer fra 琀椀dligere forhold.
Kjøkken > 1. etasje > Kjøkken > Over昀氀ater og Gå til side
innredning
Det er registrert ute琀琀heter eller vannlekkasjer i
røropplegg. Utvendig > Vinduer/balkongdør Gå til side
Det er påvist andre avvik:
Det registreres en skrue som har gjennomtrengt
vannlåsen, noe

---

[d200_d200 | Side [1]]
es stedvis saltutslag, avflassing av maling og løs rør‑kobling i himlingen i kjellerstuen.
murpuss. Når bygget ble oppført var det ikke vanlig å
etablere fuktsperre under gulv mot grunn, noe som fører ‑ Bad 1 | Våtrommet må oppgraderes for å tåle normal
til fuktopptrekk via betonggulv. bruk etter dagens krav.
Rommet har passert forventet levetid, særlig kritiske
‑ Vannledninger | Det er påvist avvik pga. mer enn bygningsdeler som tettesjikt og sluk. Videre registreres
halvparten av forventet brukstid er

---

[d200_d200 | Side [1]]
‑ Fuktsikring og drenering | Det er påvist avvik pga. mer Rommet har passert forventet levetid, særlig kritiske
enn halvparten av forventet levetid på drenering er bygningsdeler som tettesjikt og sluk. Videre registreres
overskredet. rustangrep i sluket.
Overgangen mellom gulvbelegg/ sluk er ikke tett, noe
‑ Utvendige vann‑ og avløpsledninger | Det er påvist som medfører økt risiko for fuktskader ved høy
avvik pga. mer enn halvparten av forventet brukstid er vannstand i sluket.
passert på utvendige

---

[d200_d200 | Side [1]]
eres e琀琀er gjeldende forskri昀琀 om brannforebygging.
Helse, miljø og sikkerhet
Vurdering av avvik:
• Åpninger i rekkverk er større enn dagens forskri昀琀skrav 琀椀l rekkverk i innvendige trapper.
• Åpninger i rekkverk på utvendige trapper er ikke i henhold 琀椀l krav i dagens forskri昀琀er.
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med radonsperre.
• Det mangler håndløper på vegg i det innvendige trappeløpet.
• Rekkverkshøyder er under dagens forskri昀琀skrav 琀椀l rekkverk i innvendige

---

[d200_d200 | Side [1]]
ens 琀椀lstand
Mer enn halvparten av forventet bruks琀椀d er passert Åpninger i rekkverk er større enn dagens Gå til side
på innvendige vannledninger. forskri昀琀skrav 琀椀l rekkverk i innvendige trapper.
Åpninger i rekkverk på utvendige trapper er ikke i
henhold 琀椀l krav i dagens forskri昀琀er.
Tekniske installasjoner > Avløpsrør Gå til side Det er ikke foreta琀琀 radonmålinger, og bygget er heller
Mer enn halvparten av forventet bruks琀椀d er passert ikke u琀昀ørt med radonsperre.
på innvendige avløpsledninger. Det

---

[d200_d200 | Side [1]]
E TILTAK
Utvendig > Nedløp og beslag Gå til side Innvendig > Rom Under Terreng Gå til side
Mer enn halvparten av forventet bruks琀椀d er passert Det er påvist andre avvik:
på renner/nedløp/beslag. Ved fuktsøk på betonggulv og nedre del av
y琀琀ervegger ble det registrert forhøyede
fuk琀椀ndikasjoner. Videre registreres stedvis saltutslag,
av昀氀assing av maling og løs murpuss. Når bygget ble
Utvendig > Veggkonstruksjon Gå til side oppført var det ikke vanlig å etablere fuktsperre under
Det er ingen eller liten

---

[d200_d200 | Side [1]]
 og sluk. Videre registreres
halvparten av forventet brukstid er passert på innvendige rustangrep i sluket.
vannledninger. Overgangen mellom gulvbelegg/ sluk er ikke tett, noe
som medfører økt risiko for fuktskader ved høy
‑ Avløpsrør | Det er påvist avvik pga. mer er enn vannstand i sluket.
halvparten av forventet brukstid er passert på innvendige
avløpsledninger. ‑ Bad 2 | Våtrommet må oppgraderes for å tåle normal
bruk etter dagens krav.
‑ Fuktsikring og drenering | Det er påvist avvik pga. mer Rommet

---

[d200_d200 | Side [1]]
r ikke dagens krav 琀椀l
lu昀琀utski昀琀ning på toale琀琀rom. Det gjøres oppmerksom
på at det kan være vanskelig å etablere andre
løsninger i boligblokker o.l.
Våtrom > 1. etasje > Bad 1 > Tilliggende Gå til side
konstruksjoner våtrom
Det er påvist andre avvik:
Det er påvist ute琀琀heter i kri琀椀ske overganger i
rommets våte soner, videre har rommet passert
forventet leve琀椀d.
Våtrom > 1. etasje > Bad 2 > Tilliggende Gå til side
konstruksjoner våtrom
Hulltaking er ikke foreta琀琀 da det allerede er påvist
andre avvik i

---

[d200_d200 | Side [1]]
a særlig med tanke på eventuelle lekkasjer, av lite lu昀琀ing, men fargevalg bør sees i sammenheng.
siden rommet normalt sett ikke belastes med fritt
bruksvann etter dagens bruk. Det gjøres
oppmerksom på at ved videre bruk av rommet, kan
lekkasjer oppstå, noe som kan medføre fuktskader i Utvendig > Takkonstruksjon/Lo昀琀 Gå til side
tilliggende konstruksjoner. Rommet må derfor Det er påvist andre avvik:
holdes under jevnlig tilsyn for å oppdage lekkasjer
så tidlig som mulig. Det registreres små områder med

---

[d200_d200 | Side [1]]
nder
over昀氀aten med et spisst redskap eller lignende.
U琀琀rykk og de昀椀nisjoner
Referansenivå: Kravet 琀椀l bygningsdelen eller rommet på
søknads琀椀dspunktet.
Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller
este琀椀ske status på et gi琀琀 琀椀dspunkt.
Symptom: Forhold som gir indikasjon på hvilken 琀椀lstand et byggverk eller
en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse av avvik og alder.
Skadegjørere: I hovedsak råte, sopp og skadedyr.
Fuktsøk: Over昀氀atesøk med egnet søkeutstyr som

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Aktiv lekkasje fra oljetank (TG3) – Det er påvist aktiv lekkasje fra røropplegg tilknyttet oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen. Estimert utbedringskostnad: kr 20 000 – 100 000.",
      "evidence": [
        "Det er påvist avvik pga. aktiv lekkasje fra røropplegg fra oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen.",
        "Kostnadses琀椀mat: 20 000 - 100 000"
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Bad 1 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Kritiske bygningsdeler som tettesjikt og sluk er utgått på dato. Det er påvist utettheter i kritiske overganger i våtsonen, rustangrep i sluket, og overgangen mellom gulvbelegg/sluk er ikke tett – noe som medfører økt risiko for fuktskader. Estimert utbedringskostnad: kr 200 000 – 500 000.",
      "evidence": [
        "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
        "Rommet har passert forventet levetid, særlig kritiske bygningsdeler som tettesjikt og sluk.",
        "Overgangen mellom gulvbelegg/sluk er ikke tett, noe som medfører økt risiko for fuktskader ved høy vannstand i sluket.",
        "Rustangrep i sluket.",
        "Kostnadses琀椀mat: 200 000 - 500 000"
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R3",
      "description": "Bad 2 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Det er påvist utettheter i kritiske overganger i rommets våte soner. Hulltaking er ikke foretatt da det allerede er påvist andre avvik i våtsonen.",
      "evidence": [
        "Bad 2, tilliggende konstruksjoner | Det er påvist avvik pga. hulltaking ikke er foretatt da det allerede er påvist andre avvik i våtsonen.",
        "Det er påvist utettheter i kritiske overganger i rommets våte soner, videre har rommet passert forventet levetid."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R4",
      "description": "Fukt i rom under terreng/kjeller (TG2) – Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner. Det registreres stedvis saltutslag, avflassing av maling og løs murpuss. Boligen mangler fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulvet.",
      "evidence": [
        "Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner.",
        "Videre registreres stedvis saltutslag, avflassing av maling og løs murpuss.",
        "Når bygget ble oppført var det ikke vanlig å etablere fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulv."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Utgått drenering (TG2) – Mer enn halvparten av forventet levetid på dreneringen er overskredet. Tiltak for redrenering rundt boligen kan ikke utelukkes.",
      "evidence": [
        "Fuktsikring og drenering | Det er påvist avvik pga. mer enn halvparten av forventet levetid på drenering er overskredet.",
        "Tiltak for redrenering rundt boligen kan ikke utelukkes.",
        "Mer enn halvparten av forventet levetid på drenering er overskredet."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "description": "Utgåtte innvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på både innvendige vannledninger og innvendige avløpsledninger.",
      "evidence": [
        "Vannledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
        "Avløpsrør | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R7",
      "description": "Utgåtte utvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
      "evidence": [
        "Utvendige vann- og avløpsledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Manglende samsvarserklæring for elektrisk anlegg (TG2) – Det fremgår av tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget. Dette er et lovpålagt krav og utgjør en risiko for kjøper.",
      "evidence": [
        "Det fremgår av tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R9",
      "description": "Ulovlig oppført garasje – Garasjen er ikke byggemeldt og fremgår ikke av godkjente byggetegninger. For at garasjen skal kunne brukes lovlig, må den godkjennes av kommunen og ha ferdigattest. Kjøper overtar risiko og ansvar for dette forholdet.",
      "evidence": [
        "Det gjøres oppmerksom på at garasjen ikke er byggemeldt.",
        "Det er oppført en garasje som ikke fremgår av de godkjente tegningene. Megler har ikke mottatt dokumenter på at dette er omsøkt eller godkjent hos kommunen.",
        "For at garasjen skal kunne brukes lovlig, må den være godkjent av kommunen og ha ferdigattest.",
        "Kjøper overtar risiko og ansvar for nevnte forhold.",
        "Garasjen fremgår ikke på byggemeldte tegninger."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R10",
      "description": "Kjeller ikke godkjent for varig opphold – Ingen av rommene i kjelleren er godkjent for varig opphold. Kjøper overtar risiko og ansvar for dette forholdet.",
      "evidence": [
        "Det gjøres oppmerksom på at kjelleren ikke er godkjent for varig opphold.",
        "Ingen av rommene i kjelleren er godkjent for varig opphold.",
        "Kjøper overtar risiko og ansvar for nevnte forhold."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R11",
      "description": "Byggetegninger samsvarer ikke med dagens bruk – Godkjente, reviderte byggetegninger er fra 1970 og samsvarer ikke med dagens bruk av boligen. Ferdigattest vil ikke bli utstedt for ufullførte byggesaker fra før 1998.",
      "evidence": [
        "Det foreligger godkjente, reviderte byggetegninger fra kommunen datert 1970. Disse samsvarer ikke med dagens bruk av boligen.",
        "Det gjøres oppmerksom på at ferdigattest ikke vil bli utstedt for ufullførte byggesaker/bygningsmeldinger som er fra før 1998."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R12",
      "description": "HMS-avvik: Rekkverk og håndløper oppfyller ikke dagens krav – Åpninger i rekkverk er større enn dagens forskriftskrav for innvendige trapper. Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav. Rekkverkshøyder er under dagens forskriftskrav. Det mangler håndløper på vegg i det innvendige trappeløpet.",
      "evidence": [
        "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
        "Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav i dagens forskrifter.",
        "Det mangler håndløper på vegg i det innvendige trappeløpet.",
        "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R13",
      "description": "Ingen radonmåling og manglende radonsperre – Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Dette utgjør en potensiell helserisiko.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Selger har ikke utført radonmåling."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R14",
      "description": "Skadedyr (mus og rotte) – Selger bekrefter i egenerklæringen at det har vært mus og én rotte på eiendommen.",
      "evidence": [
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja. Mus + én rotte."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R15",
      "description": "Utgåtte nedløp, renner og beslag (TG2) – Mer enn halvparten av forventet brukstid er passert på renner, nedløp og beslag.",
      "evidence": [
        "Nedløp og beslag | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på renner/nedløp/beslag."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R16",
      "description": "Utgått pipe (TG2) – Mer enn halvparten av forventet brukstid er passert på pipe.",
      "evidence": [
        "Pipe og ildsted | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på pipe."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R17",
      "description": "Fuktskjolder på takkonstruksjon/loft (TG2) – Det er påvist små områder med eldre tørre fuktskjolder på loftet. Fuktmåling viste ikke unormale forhold, men jevnlig tilsyn av kaldloftet anbefales.",
      "evidence": [
        "Takkonstruksjon/Loft | Det er påvist avvik pga. små områder med eldre tørre fuktskjolder. Ved fuktmåling ble det ikke registrert unormale forhold, noe som tyder på at fuktmerkene stammer fra tidligere forhold. Jevnlig tilsyn av kaldloftet anbefales."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Værslitte vinduer og balkongdør med fuktmerker (TG2) – Det er påvist værslitte overflater på utvendige sider av enkelte vinduer og balkongdør. Det registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass. Det må påregnes redusert funksjon i form av økt varmetap og redusert tetthet.",
      "evidence": [
        "Vinduer og balkongdør | Det er påvist avvik pga. værslitte overflater på utvendige sider av enkelte vinduer og balkongdør.",
        "Videre registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass.",
        "Det påregnes redusert funksjon i form av økt varmetap og redusert tetthets-evne."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R19",
      "description": "Manglende lufting i veggkonstruksjon mot grunnmur (TG2) – Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
      "evidence": [
        "Veggkonstruksjon | Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R20",
      "description": "Høy slitasjegrad på innvendige overflater (TG2) – Overflater bærer preg av høy slitasjegrad og elde.",
      "evidence": [
        "Innvendige overflater | Det er påvist avvik da overflater bærer preg av høy slitasjegrad og elde."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R21",
      "description": "Lekkasje/utetthet på kjøkken – Det er registrert utettheter eller vannlekkasjer i røropplegg på kjøkkenet. Det registreres en skrue som har gjennomtrengt vannlåsen.",
      "evidence": [
        "Kjøkken > 1. etasje > Kjøkken > Overflater og innredning: Det er registrert utettheter eller vannlekkasjer i røropplegg.",
        "Det registreres en skrue som har gjennomtrengt vannlåsen."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R22",
      "description": "Salg fra dødsbo med begrenset kjennskap til eiendommen – Arvingene har begrenset kjennskap til eiendommen og er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet. Dette øker risikoen for skjulte feil og mangler.",
      "evidence": [
        "Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
        "Interessenter oppfordres til å foreta grundige undersøkelser, gjerne sammen med takstmann eller annen fagkyndig."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R23",
      "description": "Terrengforhold ikke fullt vurdert – Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering. Skjulte avvik i terreng og drenering kan ikke utelukkes.",
      "evidence": [
        "Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering av terrengforholdene."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R24",
      "description": "Arbeid utført av ukjent utfører – Det er opplyst at arbeid på tak er utført, men utfører er ukjent. Arbeid utført av ikke-faglærte kan avvike fra fagmessig standard og skape skjulte feil. Merk: Selger oppgir 'kun av faglært', men utfører er likevel ukjent.",
      "evidence": [
        "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av faglært. Beskrivelse: Byttet shingeltak for over 30 år siden. Arbeid utført av: Ukjent.",
        "Ved arbeid som ikke er utført av faglærte håndverkere, kan det forekomme løsninger eller utførelser som avviker fra det som normalt forventes etter fagmessig standard."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R25",
      "description": "Energikarakter E – Boligen har energikarakter E, som indikerer høyt energiforbruk. Dette kan medføre betydelige løpende energikostnader for kjøper.",
      "evidence": [
        "Energikarakter: E"
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R26",
      "description": "Høye kommunale avgifter og eiendomsskatt – Kommunale avgifter er beregnet til kr 51 830 (2025) og eiendomsskatt til kr 13 062 (2023). Avgiftene kan øke fremover.",
      "evidence": [
        "Kommunale avgifter: Kr 51 830 (2025)",
        "Eiendomsskatten ble i 2023 beregnet til kr. 13 062,-.",
        "Kommunale avgifter og gebyrer kan avvike fra en termin til en annen."
      ],
      "source_documents": [
        "d200_d200"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "taktekking tilstand shingeltak alder",
    "oljetank fjerning miljørisiko forurensning grunn",
    "elektrisk anlegg alder sikringsskap jordfeil",
    "kjøkken ventilasjon avtrekk avvik",
    "terrasse tilstand råte konstruksjon",
    "fuktproblemer kjeller drenering tiltak kostnad",
    "bad 2 kostnadsestemat utbedring",
    "skjeggkre insekter bolig",
    "branntekniske krav rømningsvei kjeller"
  ],
  "reasoning": "\nGjennomgang av alle 26 identifiserte risikoer mot dokumentevidensen:\n\n**Bekreftede risikoer med sterk evidens (R1–R16, R18–R22):**\nAlle disse er direkte støttet av konkrete sitater fra tilstandsrapporten og/eller egenerklæringen. Confidence-nivåene er godt kalibrert og opprettholdes.\n\n**Justeringer:**\n\n- **R17 (Fuktskjolder loft):** Evidensen er til stede, men fuktmåling viste IKKE unormale forhold. Risikoen er reell men begrenset – confidence justeres ned fra 0.88 til 0.85 da dette er historiske/tørre skjolder uten aktiv fukt.\n\n- **R23 (Terrengforhold snødekt):** Evidensen bekrefter begrenset vurdering, men dette er en metodisk begrensning snarere enn et påvist avvik. Confidence justeres ned fra 0.85 til 0.85 (beholdes).\n\n- **R24 (Arbeid av ukjent utfører):** Selger oppgir eksplisitt \"kun av faglært\", men utfører er ukjent. Dette er en intern motsetning i egenerklæringen. Risikoen er reell men svakere enn opprinnelig vurdert – confidence justeres ned fra 0.80 til 0.72. Beskrivelsen bør nyanseres.\n\n- **R25 (Energikarakter E):** Kun energikarakter E er dokumentert. Dette er et faktum, men representerer mer en kostnadsfaktor enn en teknisk risiko. Confidence beholdes på 0.88.\n\n- **R26 (Kommunale avgifter):** Tallene er dokumentert, men dette er løpende kostnader, ikke en teknisk risiko. Confidence beholdes på 0.82.\n\n**Mulige manglende risikoer identifisert:**\n1. **Taktekking ikke undersøkt (TG IU):** Dokumentet nevner \"Utvendig > Taktekking\" som en konstruksjon som IKKE er undersøkt. Dette er en potensiell risiko som ikke er eksplisitt identifisert som egen risiko.\n2. **Terrasse ikke undersøkt (TG IU):** \"Utvendig > Terrasse\" er listet som ikke undersøkt.\n3. **Oljetank – miljørisiko/forurensning:** Utover selve lekkasjen (R1) kan det være risiko for grunnforurensning som krever opprydding etter forurensningsloven – dette er ikke eksplisitt adressert.\n4. **Bad 2 mangler kostnadsestimat:** R3 mangler kostnadsestimat i motsetning til R2 – bør undersøkes.\n5. **Skjeggkre:** Egenerklæringen spør om skjeggkre (spørsmål 10) – svaret er ikke synlig i de fremlagte dokumentchunkene, bør verifiseres.\n6. **Branntekniske forhold/rømningsveier kjeller:** Kjeller brukes men er ikke godkjent – branntekniske krav bør vurderes.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
}

## Raw Response
```json
{
  "id": "msg_01EVBkrF4CFdBi3qSVV3ooVp",
  "container": null,
  "content": [
    {
      "id": "toolu_01JvSKayERXFYKrXcJdj5T2C",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Aktiv lekkasje fra oljetank (TG3) – Det er påvist aktiv lekkasje fra røropplegg tilknyttet oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen. Estimert utbedringskostnad: kr 20 000 – 100 000.",
            "evidence": [
              "Det er påvist avvik pga. aktiv lekkasje fra røropplegg fra oljetanken. Lekkasjen har oppstått i en rør-kobling i himlingen i kjellerstuen.",
              "Kostnadses琀椀mat: 20 000 - 100 000"
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Bad 1 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Kritiske bygningsdeler som tettesjikt og sluk er utgått på dato. Det er påvist utettheter i kritiske overganger i våtsonen, rustangrep i sluket, og overgangen mellom gulvbelegg/sluk er ikke tett – noe som medfører økt risiko for fuktskader. Estimert utbedringskostnad: kr 200 000 – 500 000.",
            "evidence": [
              "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
              "Rommet har passert forventet levetid, særlig kritiske bygningsdeler som tettesjikt og sluk.",
              "Overgangen mellom gulvbelegg/sluk er ikke tett, noe som medfører økt risiko for fuktskader ved høy vannstand i sluket.",
              "Rustangrep i sluket.",
              "Kostnadses琀椀mat: 200 000 - 500 000"
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R3",
            "description": "Bad 2 må totaloppgraderes (TG3) – Våtrommet har passert forventet levetid. Det er påvist utettheter i kritiske overganger i rommets våte soner. Hulltaking er ikke foretatt da det allerede er påvist andre avvik i våtsonen.",
            "evidence": [
              "Bad 2, tilliggende konstruksjoner | Det er påvist avvik pga. hulltaking ikke er foretatt da det allerede er påvist andre avvik i våtsonen.",
              "Det er påvist utettheter i kritiske overganger i rommets våte soner, videre har rommet passert forventet levetid."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R4",
            "description": "Fukt i rom under terreng/kjeller (TG2) – Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner. Det registreres stedvis saltutslag, avflassing av maling og løs murpuss. Boligen mangler fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulvet.",
            "evidence": [
              "Ved fuktsøk på betonggulv og nedre del av yttervegger ble det registrert forhøyede fuktindikasjoner.",
              "Videre registreres stedvis saltutslag, avflassing av maling og løs murpuss.",
              "Når bygget ble oppført var det ikke vanlig å etablere fuktsperre under gulv mot grunn, noe som fører til fuktopptrekk via betonggulv."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Utgått drenering (TG2) – Mer enn halvparten av forventet levetid på dreneringen er overskredet. Tiltak for redrenering rundt boligen kan ikke utelukkes.",
            "evidence": [
              "Fuktsikring og drenering | Det er påvist avvik pga. mer enn halvparten av forventet levetid på drenering er overskredet.",
              "Tiltak for redrenering rundt boligen kan ikke utelukkes.",
              "Mer enn halvparten av forventet levetid på drenering er overskredet."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "description": "Utgåtte innvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på både innvendige vannledninger og innvendige avløpsledninger.",
            "evidence": [
              "Vannledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
              "Avløpsrør | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R7",
            "description": "Utgåtte utvendige vann- og avløpsledninger (TG2) – Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
            "evidence": [
              "Utvendige vann- og avløpsledninger | Det er påvist avvik pga. mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Manglende samsvarserklæring for elektrisk anlegg (TG2) – Det fremgår av tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget. Dette er et lovpålagt krav og utgjør en risiko for kjøper.",
            "evidence": [
              "Det fremgår av tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R9",
            "description": "Ulovlig oppført garasje – Garasjen er ikke byggemeldt og fremgår ikke av godkjente byggetegninger. For at garasjen skal kunne brukes lovlig, må den godkjennes av kommunen og ha ferdigattest. Kjøper overtar risiko og ansvar for dette forholdet.",
            "evidence": [
              "Det gjøres oppmerksom på at garasjen ikke er byggemeldt.",
              "Det er oppført en garasje som ikke fremgår av de godkjente tegningene. Megler har ikke mottatt dokumenter på at dette er omsøkt eller godkjent hos kommunen.",
              "For at garasjen skal kunne brukes lovlig, må den være godkjent av kommunen og ha ferdigattest.",
              "Kjøper overtar risiko og ansvar for nevnte forhold.",
              "Garasjen fremgår ikke på byggemeldte tegninger."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R10",
            "description": "Kjeller ikke godkjent for varig opphold – Ingen av rommene i kjelleren er godkjent for varig opphold. Kjøper overtar risiko og ansvar for dette forholdet.",
            "evidence": [
              "Det gjøres oppmerksom på at kjelleren ikke er godkjent for varig opphold.",
              "Ingen av rommene i kjelleren er godkjent for varig opphold.",
              "Kjøper overtar risiko og ansvar for nevnte forhold."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R11",
            "description": "Byggetegninger samsvarer ikke med dagens bruk – Godkjente, reviderte byggetegninger er fra 1970 og samsvarer ikke med dagens bruk av boligen. Ferdigattest vil ikke bli utstedt for ufullførte byggesaker fra før 1998.",
            "evidence": [
              "Det foreligger godkjente, reviderte byggetegninger fra kommunen datert 1970. Disse samsvarer ikke med dagens bruk av boligen.",
              "Det gjøres oppmerksom på at ferdigattest ikke vil bli utstedt for ufullførte byggesaker/bygningsmeldinger som er fra før 1998."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R12",
            "description": "HMS-avvik: Rekkverk og håndløper oppfyller ikke dagens krav – Åpninger i rekkverk er større enn dagens forskriftskrav for innvendige trapper. Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav. Rekkverkshøyder er under dagens forskriftskrav. Det mangler håndløper på vegg i det innvendige trappeløpet.",
            "evidence": [
              "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
              "Åpninger i rekkverk på utvendige trapper er ikke i henhold til krav i dagens forskrifter.",
              "Det mangler håndløper på vegg i det innvendige trappeløpet.",
              "Rekkverkshøyder er under dagens forskriftskrav til rekkverk i innvendige trapper."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R13",
            "description": "Ingen radonmåling og manglende radonsperre – Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Dette utgjør en potensiell helserisiko.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Selger har ikke utført radonmåling."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R14",
            "description": "Skadedyr (mus og rotte) – Selger bekrefter i egenerklæringen at det har vært mus og én rotte på eiendommen.",
            "evidence": [
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja. Mus + én rotte."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R15",
            "description": "Utgåtte nedløp, renner og beslag (TG2) – Mer enn halvparten av forventet brukstid er passert på renner, nedløp og beslag.",
            "evidence": [
              "Nedløp og beslag | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på renner/nedløp/beslag."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R16",
            "description": "Utgått pipe (TG2) – Mer enn halvparten av forventet brukstid er passert på pipe.",
            "evidence": [
              "Pipe og ildsted | Det er påvist avvik da mer enn halvparten av forventet brukstid er passert på pipe."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R17",
            "description": "Fuktskjolder på takkonstruksjon/loft (TG2) – Det er påvist små områder med eldre tørre fuktskjolder på loftet. Fuktmåling viste ikke unormale forhold, men jevnlig tilsyn av kaldloftet anbefales.",
            "evidence": [
              "Takkonstruksjon/Loft | Det er påvist avvik pga. små områder med eldre tørre fuktskjolder. Ved fuktmåling ble det ikke registrert unormale forhold, noe som tyder på at fuktmerkene stammer fra tidligere forhold. Jevnlig tilsyn av kaldloftet anbefales."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Værslitte vinduer og balkongdør med fuktmerker (TG2) – Det er påvist værslitte overflater på utvendige sider av enkelte vinduer og balkongdør. Det registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass. Det må påregnes redusert funksjon i form av økt varmetap og redusert tetthet.",
            "evidence": [
              "Vinduer og balkongdør | Det er påvist avvik pga. værslitte overflater på utvendige sider av enkelte vinduer og balkongdør.",
              "Videre registreres stedvise fuktmerker i nedkant av innvendige karmer, noe som tyder på kondensering på innvendige glass.",
              "Det påregnes redusert funksjon i form av økt varmetap og redusert tetthets-evne."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R19",
            "description": "Manglende lufting i veggkonstruksjon mot grunnmur (TG2) – Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur.",
            "evidence": [
              "Veggkonstruksjon | Det er påvist avvik da det er ingen eller liten lufting i nedre kant av kledning mot grunnmur."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R20",
            "description": "Høy slitasjegrad på innvendige overflater (TG2) – Overflater bærer preg av høy slitasjegrad og elde.",
            "evidence": [
              "Innvendige overflater | Det er påvist avvik da overflater bærer preg av høy slitasjegrad og elde."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R21",
            "description": "Lekkasje/utetthet på kjøkken – Det er registrert utettheter eller vannlekkasjer i røropplegg på kjøkkenet. Det registreres en skrue som har gjennomtrengt vannlåsen.",
            "evidence": [
              "Kjøkken > 1. etasje > Kjøkken > Overflater og innredning: Det er registrert utettheter eller vannlekkasjer i røropplegg.",
              "Det registreres en skrue som har gjennomtrengt vannlåsen."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R22",
            "description": "Salg fra dødsbo med begrenset kjennskap til eiendommen – Arvingene har begrenset kjennskap til eiendommen og er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet. Dette øker risikoen for skjulte feil og mangler.",
            "evidence": [
              "Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
              "Interessenter oppfordres til å foreta grundige undersøkelser, gjerne sammen med takstmann eller annen fagkyndig."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R23",
            "description": "Terrengforhold ikke fullt vurdert – Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering. Skjulte avvik i terreng og drenering kan ikke utelukkes.",
            "evidence": [
              "Terrengforholdene rundt boligen var snødekt på befaringsdagen, noe som begrenset muligheten for full visuell vurdering av terrengforholdene."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R24",
            "description": "Arbeid utført av ukjent utfører – Det er opplyst at arbeid på tak er utført, men utfører er ukjent. Arbeid utført av ikke-faglærte kan avvike fra fagmessig standard og skape skjulte feil. Merk: Selger oppgir 'kun av faglært', men utfører er likevel ukjent.",
            "evidence": [
              "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av faglært. Beskrivelse: Byttet shingeltak for over 30 år siden. Arbeid utført av: Ukjent.",
              "Ved arbeid som ikke er utført av faglærte håndverkere, kan det forekomme løsninger eller utførelser som avviker fra det som normalt forventes etter fagmessig standard."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R25",
            "description": "Energikarakter E – Boligen har energikarakter E, som indikerer høyt energiforbruk. Dette kan medføre betydelige løpende energikostnader for kjøper.",
            "evidence": [
              "Energikarakter: E"
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R26",
            "description": "Høye kommunale avgifter og eiendomsskatt – Kommunale avgifter er beregnet til kr 51 830 (2025) og eiendomsskatt til kr 13 062 (2023). Avgiftene kan øke fremover.",
            "evidence": [
              "Kommunale avgifter: Kr 51 830 (2025)",
              "Eiendomsskatten ble i 2023 beregnet til kr. 13 062,-.",
              "Kommunale avgifter og gebyrer kan avvike fra en termin til en annen."
            ],
            "source_documents": [
              "d200_d200"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "taktekking tilstand shingeltak alder",
          "oljetank fjerning miljørisiko forurensning grunn",
          "elektrisk anlegg alder sikringsskap jordfeil",
          "kjøkken ventilasjon avtrekk avvik",
          "terrasse tilstand råte konstruksjon",
          "fuktproblemer kjeller drenering tiltak kostnad",
          "bad 2 kostnadsestemat utbedring",
          "skjeggkre insekter bolig",
          "branntekniske krav rømningsvei kjeller"
        ],
        "reasoning": "\nGjennomgang av alle 26 identifiserte risikoer mot dokumentevidensen:\n\n**Bekreftede risikoer med sterk evidens (R1–R16, R18–R22):**\nAlle disse er direkte støttet av konkrete sitater fra tilstandsrapporten og/eller egenerklæringen. Confidence-nivåene er godt kalibrert og opprettholdes.\n\n**Justeringer:**\n\n- **R17 (Fuktskjolder loft):** Evidensen er til stede, men fuktmåling viste IKKE unormale forhold. Risikoen er reell men begrenset – confidence justeres ned fra 0.88 til 0.85 da dette er historiske/tørre skjolder uten aktiv fukt.\n\n- **R23 (Terrengforhold snødekt):** Evidensen bekrefter begrenset vurdering, men dette er en metodisk begrensning snarere enn et påvist avvik. Confidence justeres ned fra 0.85 til 0.85 (beholdes).\n\n- **R24 (Arbeid av ukjent utfører):** Selger oppgir eksplisitt \"kun av faglært\", men utfører er ukjent. Dette er en intern motsetning i egenerklæringen. Risikoen er reell men svakere enn opprinnelig vurdert – confidence justeres ned fra 0.80 til 0.72. Beskrivelsen bør nyanseres.\n\n- **R25 (Energikarakter E):** Kun energikarakter E er dokumentert. Dette er et faktum, men representerer mer en kostnadsfaktor enn en teknisk risiko. Confidence beholdes på 0.88.\n\n- **R26 (Kommunale avgifter):** Tallene er dokumentert, men dette er løpende kostnader, ikke en teknisk risiko. Confidence beholdes på 0.82.\n\n**Mulige manglende risikoer identifisert:**\n1. **Taktekking ikke undersøkt (TG IU):** Dokumentet nevner \"Utvendig > Taktekking\" som en konstruksjon som IKKE er undersøkt. Dette er en potensiell risiko som ikke er eksplisitt identifisert som egen risiko.\n2. **Terrasse ikke undersøkt (TG IU):** \"Utvendig > Terrasse\" er listet som ikke undersøkt.\n3. **Oljetank – miljørisiko/forurensning:** Utover selve lekkasjen (R1) kan det være risiko for grunnforurensning som krever opprydding etter forurensningsloven – dette er ikke eksplisitt adressert.\n4. **Bad 2 mangler kostnadsestimat:** R3 mangler kostnadsestimat i motsetning til R2 – bør undersøkes.\n5. **Skjeggkre:** Egenerklæringen spør om skjeggkre (spørsmål 10) – svaret er ikke synlig i de fremlagte dokumentchunkene, bør verifiseres.\n6. **Branntekniske forhold/rømningsveier kjeller:** Kjeller brukes men er ikke godkjent – branntekniske krav bør vurderes.\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
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
    "input_tokens": 22162,
    "output_tokens": 6654,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
