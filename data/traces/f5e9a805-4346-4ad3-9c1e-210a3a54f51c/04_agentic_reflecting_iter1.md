# Trace: agentic_reflecting_iter1
- **Run ID:** f5e9a805-4346-4ad3-9c1e-210a3a54f51c
- **Tidspunkt:** 2026-03-24T23:10:42.234604+00:00
- **Varighet:** 100.75s
- **Input tokens:** 20580
- **Output tokens:** 5013

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
Risiko 1: Manglende samsvarserklæring for elektrisk anlegg. Det er ikke fremlagt samsvarserklæring for det elektriske anlegget, noe som innebærer usikkerhet rundt lovlighet og sikkerhet ved el-installasjoner.
  Confidence: 0.95
  Evidens: Det er ikke fremlagt samsvarserklæring for det elektriske anlegget.; Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Nei; Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn.

Risiko 2: Negativ egenkapital i sameiet. Årsregnskapet for Vannkunsten Eierseksjonssameie viser negativ egenkapital på -516 726 kroner for 2024, noe som kan indikere økonomisk risiko for sameiet og potensielt økte felleskostnader for seksjonseiere.
  Confidence: 0.95
  Evidens: Årets resultat -516 726 92 056 -424 670; Balansen i årsregnskapet viser en negativ egenkapital, dvs at eiendelenes balanseførte verdi er lavere enn balanseført verdi av gjelden.; Gjelden i boligsameiet dekkes inn av beboere ved betaling av felleskostnader, som dekker renter og avdrag på lånet.

Risiko 3: Tilliggende konstruksjoner til våtrom i 5. etasje er ikke undersøkt (TG IU). Dette innebærer at det kan foreligge skjulte feil eller skader i tilstøtende konstruksjoner til badet som ikke er avdekket.
  Confidence: 0.92
  Evidens: KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Våtrom > 5. etasje > Bad/vaskerom > Tilliggende konstruksjoner våtrom

Risiko 4: Manglende radonmåling. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjon i boligen og potensiell helserisiko for fremtidige beboere.
  Confidence: 0.9
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 5: Nær relasjon mellom selger og fremtidig ansatt i eiendomsmeglingsforetaket. Det er opplyst om en nær relasjon mellom selger og en person som skal begynne å jobbe i Emera eiendomsmegling sommeren 2026, noe som kan reise spørsmål om interessekonflikter i meglingsprosessen.
  Confidence: 0.8
  Evidens: Det informeres om at det er en nær relasjon mellom selger og en fremtidig ansatt i Emera eiendomsmegling som har oppstart i løpet av sommeren 2026, men at denne relasjonen ikke er omfattet av egenhandelsforbudet i eiendomsmeglingsloven.

Risiko 6: Mesanin bygget uten søknad – usikkerhet rundt lovlighet. Mesaninen ble bygget i 2021 uten søknad til kommunen. Selv om selger opplyser at dette ikke var søknadspliktig, kan det foreligge usikkerhet rundt lovligheten av tiltaket.
  Confidence: 0.78
  Evidens: Mesanin bygget i 2021 iht. forrige eiers opplysninger. Ombygning av mesanin var ikke søknadspliktig ved henvendelse til kommunen da det ikke er rom for varig opphold og berører ikke leilighetens opprinnelige bruksfunksjon.

Risiko 7: Legalpant som ikke fremgår av grunnboken. Kommunen og øvrige seksjonseiere i sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan påvirke kjøpers pantesikkerhet.
  Confidence: 0.88
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.

Risiko 8: Kompleks kostnadsstruktur med forpliktelser overfor Kjellersameiet og andre sameier. Sameiet er forpliktet til å dekke forholdsmessige andeler av drifts- og vedlikeholdskostnader til kjørekulvert, nedkjøringsrampe og kjørearealer, noe som kan medføre uforutsette kostnadsøkninger.
  Confidence: 0.82
  Evidens: Det skal inngås særskilt avtale med Kjellersameiet om plikt for Sameiet til å dekke en forholdsmessig andel av årlige løpende drifts- og vedlikeholdskostnader til nedkjøringsrampen og kjøresone frem til kjørekulverten.; Sameiet er i henhold til avtalen forpliktet til å dekke en forholdsmessig andel av kostnadene forbundet med drift og vedlikehold av kjørearealene under B2.

Risiko 9: Pågående reguleringsplaner og byggesaker i nærområdet. Det er flere pågående plan- og byggesaker i Bjørvika-området, inkludert detaljregulering av Sukkerbiten sjøbad og ny skole, som kan medføre endringer i bruken av eiendommens omgivelser, økt byggeaktivitet og støy.
  Confidence: 0.8
  Evidens: Pågående plan- og byggesaker: Detaljregulering - Sukkerbiten sjøbad; Oslobygg KF bygger en ny barne- og ungdomsskole i Bjørvika med en flerbrukshall.; Rostockgata 99 - oppføring av bolig- og næringsbygg reguleringsfelt B9 a og b

Risiko 10: Tilstandsrapporten er basert på visuell inspeksjon og gir ingen garanti mot skjulte feil. Rapporten er utarbeidet på undersøkelsesnivå 1 (laveste nivå) og kan ikke avdekke skjulte feil, skader eller mangler bak vegger og i konstruksjoner.
  Confidence: 0.88
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.; NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell...

Risiko 11: Manglende brukstillatelse eller ferdigattest er ikke avklart. Tilstandsrapporten angir at brukstillatelse/ferdigattest er gjennomgått med status 'Nei', noe som kan indikere at disse dokumentene ikke er fremlagt eller bekreftet.
  Confidence: 0.75
  Evidens: Brukstillat./ferdigatt. Gjennomgått Nei; Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja

Risiko 12: Offentlig allmenningsrett og adkomstrettigheter på sameiets eiendom. Allmenheten har tinglyst rett til ferdsel og opphold på deler av eiendommen, noe som begrenser sameiets og seksjonseierens kontroll over utearealer.
  Confidence: 0.82
  Evidens: Allmenheten har rett til ferdsel og opphold på felt T1 - Kan ikke slettes eller endres uten samtykke fra kommunen; Allmenheten har rett til ferdsel gjennom felt G3 - G6 - Kan ikke slettes eller endres uten samtykke

Risiko 13: Økning i felleskostnader. Budsjett for 2025 viser en økning i innkrevde felleskostnader fra ca. 10,4 millioner til 11,1 millioner kroner, noe som indikerer at den enkelte seksjonseier kan forvente økte månedlige felleskostnader.
  Confidence: 0.85
  Evidens: Innkrevd felleskostnad: Regnskap 2024: 10 565 401, Budsjett 2024: 10 417 080, Budsjett 2025: 11 089 859

Dokumentkontekst:
[d099_d099 | Side [1]]
, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser

---

[d099_d099 | Side [1]]
p eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje

---

[d099_d099 | Side [1]]
er alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d099_d099 | Side [1]]
så en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk

---

[d099_d099 | Side [1]]
琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀

---

[d099_d099 | Side [1]]
ysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske status på et gi琀琀 琀椀dspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men

---

[d099_d099 | Side [1]]
26 Side: 5 av 15
69

## Side 70

20
15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Spesielt for de琀琀e oppdraget/rapporten
Tiltaket er prosjektert i henhold 琀椀l Byggteknisk forskri昀琀 av 2010
(TEK10) ifølge ramme琀椀llatelse gi琀琀 3/5-2017.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Operagata 65 A, 0194 OSLO Takstmann Jan Berby MNTF
Gnr 234 - Bnr 123 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Sammendrag av boligens 琀椀lstand
Fordeling av

---

[d099_d099 | Side [1]]
 for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell

---

[d099_d099 | Side [1]]
01 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler

---

[d099_d099 | Side [1]]
større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring

---

[d099_d099 | Side [1]]
iver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva

---

[d099_d099 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d099_d099 | Side [1]]
 av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige

---

[d099_d099 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d099_d099 | Side [1]]
0301 OSLO 0801 OSLO
Sammendrag av boligens 琀椀lstand
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Eiet seksjon i boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Våtrom > 5. etasje > Bad/vaskerom > Tilliggende Gå til side
konstruksjoner våtrom
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet
Det mangler

---

[d099_d099 | Side [1]]
de: 13 av 15
77

## Side 78

Operagata 65 A, 0194 OSLO Takstmann Jan Berby MNTF
Gnr 234 - Bnr 123 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapportens avgrensninger
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere bolighandel). Formålet er å

---

[d099_d099 | Side [1]]
rventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen

---

[d099_d099 | Side [1]]
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

[d099_d099 | Side [1]]
nnenfor
Bolig Tilstand, Bolig Verdi og TEGoVA Residen琀椀al Valuer (TRV)
Rapportansvarlig
Jan Berby
Uavhengig Taks琀椀ngeniør
jan@takstpartner.no
924 69 095
Oppdragsnr.: 15467-2981 Befaringsdato: 10.03.2026 Side: 2 av 15
66

## Side 67

Operagata 65 A, 0194 OSLO Takstmann Jan Berby MNTF
Gnr 234 - Bnr 123 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen.

---

[d099_d099 | Side [1]]
or grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte

---

[d099_d099 | Side [1]]
r av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: TG 2
79006220
:ecnerefer
tnemucoD
61

## Side 62

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite

---

[d099_d099 | Side [1]]
et av styret eller årsmøtet.
Omsetningstype: Uoppgitt
Endring av tegninger
Endring av fellesareal Radonmåling
Selger har ikke utført radonmåling. Det er ikke krav om
Legalpant: Kommunen har legalpant som sikkerhet for dette med mindre boligen er helt eller delvis utleid.
betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til Diverse
sameieforholdet, som felleskostnader. Legalpant er pant Både kjøper og

---

[d099_d099 | Side [1]]
r vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger

---

[d099_d099 | Side [1]]
betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet

---

[d099_d099 | Side [1]]
edfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE TEPPER følger med uansett festemåte.
3. VARMEKILDER, slik som ovner, kaminer, peiser, varmepumper og

---

[d099_d099 | Side [1]]
es
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
oppfordres interessenter til å kontakte eiendomsmegler
Lovanvendelse eller egne rådgivere før de gir bud.
Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at

---

[d099_d099 | Side [1]]
ørearealene under B2, samt en forholdsmessig andel av kostnadene forbundet med drift og vedlikehold
av kjørekulverten.
Kjellerareal beliggende under gnr. 207 bnr. 460 og gnr. 234 bnr. 91, 147, 148 og 149 (felt B3 og B7) i
Bispevika Nord ligger utenfor Sameiets eiendom og er organisert som en egen anleggseiendom, med gnr.
207 bnr. 483 i Oslo kommune. Anleggseiendommen eies i tingsrettslig sameie (Kjellersameiet) mellom
eierseksjonssameiet Eufemias Hage (207/460), eierseksjonssameiet Eufemias Plass Vest

---

[d099_d099 | Side [1]]
v fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5. 
Loven inneholder ingen detaljert oversikt over hva som omfattes av «innredning og utstyr», og over 
hva som skal regnes som «fastmontert eller særskilt

---

[d099_d099 | Side [1]]
av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22.

---

[d099_d099 | Side [1]]
ring på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst

---

[d099_d099 | Side [1]]
ner som medfølger overtas slik de
varmekabler i gulvet. Badet er innredet med dusj på gulv er, uten garanti, med mindre det foreligger en gjeldende
med dusjdører i herdet glass, servant med garanti fra produsent eller leverandør.
skapinnredning samt vegghengt klosett med innebygget
sisterne. Det er også opplegg for vaskemaskin. Kjøper aksepterer at det kan forekomme hull og merker
etter montering av inventar og utstyr som ikke er en del
Hovedsoverom med walk‑in av overdragelsen.
Hovedsoverommet fremstår

---

[d099_d099 | Side [1]]
te forhold.
Bruks琀椀llat./ferdiga琀琀. Gjennomgå琀琀 Nei
Opplysninger vedrørende hjemmel,
gårdsnummer, bruksnummer,
seksjonsnummer, eiendomsbetegnelser,
Norges Eiendommer Gjennomgå琀琀 Nei
eiet/festet tomt, tomteareal og byggeår
oppgi琀琀 ved elektronisk grunnbok, Norges
Eiendommer.
Tegninger Gjennomgå琀琀 Nei
Revisjoner
Versjon Ny versjon Kommentar
1 12.03.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 15467-2981 Befaringsdato: 10.03.2026 Side: 13 av 15
77

## Side 78

Operagata 65 A, 0194 OSLO Takstmann

---

[d099_d099 | Side [1]]
orskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.
Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må
innredning som anses som varig tilknyttet boligen, følger kjøper påregne, og dette vil normalt ikke gi grunnlag for
normalt med i handelen, med mindre det foreligger en reklamasjon eller

---

[d099_d099 | Side [1]]

e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi vi
fastmontert.
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir de beste resultatene. Erfaringen

vår bekrefter det, og erfaring har vi mye av.
Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er

---

[d099_d099 | Side [1]]
säkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 145

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
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. §

---

[d099_d099 | Side [1]]
forholdet, som felleskostnader. Legalpant er pant Både kjøper og selger er forpliktet til å signere den
som ikke vises i grunnboksutskriften, og har prioritet standard kjøpekontrakten som er utarbeidet av Emera i
foran tinglyste lån, for eksempel banklån på seksjonen. forbindelse med eiendomshandler. Kjøpekontrakten kan
Legalpant til kommunen har høyere prioritet enn gjennomgås hos eiendomsmegleren før budet legges
legalpant til sameiet. inn. Ta kontakt med eiendomsmegler dersom det er
spørsmål.
Vei, vann

---

[d099_d099 | Side [1]]
ei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller

---

[d099_d099 | Side [1]]
 Ta kontakt med eiendomsmegler dersom det er
spørsmål.
Vei, vann og avløp Selger leverer eiendommen i ryddig og rengjort tilstand.
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til Det informeres om at det er en nær relasjon mellom
det kommunale nettet er private, og selger og en fremtidig ansatt i Emera eiendomsmegling
vedlikeholdsansvaret for disse påhviler sameiet. som har oppstart i løpet av sommeren 2026, men at
Adkomst til eiendommen skjer via

---

[d099_d099 | Side [1]]
0 990 000,00 (Prisantydning) Eiendomsskatt
I Oslo kommune er det eiendomsskatt på boliger og fast
Omkostninger eiendom som overstiger en fastsatt verdi.
http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
13 500 (Boligkjøperforsikring* (valgfritt)) skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
274 750 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Per 2025 var eiendomsskatt beregnet på kr 5405,‑
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
275 840

---

[d099_d099 | Side [1]]
 løpet av sommeren 2026, men at
Adkomst til eiendommen skjer via offentlig vei. denne relasjonen ikke er omfattet av
egenhandelsforbudet i eiendomsmeglingsloven. Ta
kontakt med megler for mer informasjon.
54

## Side 55

OM EIENDOMMEN
Om informasjonsgrunnlaget
Kontrakts‑
Opplysninger om boligens størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra
grunnlag
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Overtakelse

---

[d099_d099 | Side [1]]
ørekulvert, nedkjøringsrampe og kjøreveier i
Kjellersameiet, jf. § 3, samt andre fellesanlegg.
 Kostnader til det ytre vedlikehold av eiendommen som ikke er særskilt omtalt under punkt (1)
og (2), herunder alle tak, fasade og øvrige bygningskonstruksjoner, tekniske anlegg og utstyr.
Den utvendige fasade, fellesområdene ute og inngangspartiene skal holde en høy standard, og
det ytre vedlikeholdet skal opprettholde dette.
 Forretningsførsel, revisjon og andre administrasjonskostnader for Sameiet.


---

[d099_d099 | Side [1]]
ørsel, revisjon og andre administrasjonskostnader for Sameiet.
 Kostnader til felles drift av felles utearealer.
 Andre kostnader som ikke kan henføres enten til henholdsvis boligdelen eller næringsdelen.
Fordelingen skal skje ut fra sameiebrøken
(4) Følgende kostnadselementer fordeles etter faktisk forbruk/nytte
 Det er etablert egne målere pr. seksjon og følgende kan fordeles på den enkelte seksjon:
forbruk av oppvarmet vann og fjernkjøling.
(5) Den enkelte seksjonseier skal forskuddsvis hver måned

---

[d099_d099 | Side [1]]
 skal skje ut fra sameiebrøken til boligseksjonene.
(3) Følgende kostnadselementer fordeles mellom alle seksjonseiere
 Byggforsikring.
 Styrehonorar.
 Kostnader til daglig drift og renhold av gatearealer.
 Kostnader til strøm i Sameiets fellesarealer som ikke tilordnes bolig- eller næringsseksjonene.
 Kostnader til drift og vedlikehold av felles elektrisk hovedtavle, felles sprinklersentral,
grunnvannspumper, felles vann/avløpssystem, kjørekulvert, nedkjøringsrampe og kjøreveier i
Kjellersameiet, jf.

---

[d099_d099 | Side [1]]
n. Det kan benyttes til kulturarrangementer, Regnskap/ budsjett/ kostnadsøkninger: Sameiet har en
som møteplass, til selskap og bidra til å bygge gode relativt stabil økonomi med inntekter på ca. 10,6 millioner
relasjoner mellom oss naboer. Lokalet er innredet med kroner i 2024, hovedsakelig fra felleskostnader.
flotte møbler fra den danske møbelprodusenten Hay. Her Resultatet viser et lite overskudd på rundt 92 000 kroner,
er det mulig å dekke opp til bevertning for inntil 24 som styrker

---

[d099_d099 | Side [1]]
Kostnadene forbundet med dette skal anses som en del av Sameiets felleskostnader som skal fordeles etter
eierbrøk.
Side 3 av 12
87

## Side 88

4
§ 4
FELLESKOSTNADER
4-1 Fordeling av Felleskostnader
Felleskostnader er alle kostnader ved eiendommens drift og vedlikehold som ikke gjelder den enkelte
bruksenhet eller andre arealer seksjonseieren har enerett til å bruke. Alle bygningsmessige
konstruksjoner, fasader og tak mv. er undergitt Sameiets felles ansvar.
Felleskostnadene skal fordeles på seksjonene

---

[d099_d099 | Side [1]]
tsinntekter
Felleskostnader bokføres og inntektsføres i takt med opptjening.
Inntektsføring ved salg av varer/ tjenester skjer på leveringstidspunktet.
Tjenesten inntektsføres etterhvert som de opptjenes.
Skattetrekk
Ved lønnskjøring overføres skattetrekk til en felles skattetrekkskonto i Usbl.
Sameiet består av 215 boliger og 19 næringsseksjoner. Eiendommene er oppført på g.nr 234 og b.nr 123 i Oslo kommune.
Eiendommene er forsikret i IF Skadeforsikring med polisenr. SP2687487.
Målingsbaserte

---

[d099_d099 | Side [1]]
iets felles ansvar.
Felleskostnadene skal fordeles på seksjonene slik det fremgår av dette punktet i vedtektene.
Felleskostnadene er ikke uttømmende oppregnet og eventuelle andre felleskostnader vil bli fordelt etter
samme prinsipp. Dette innebærer at kostnad som kan tilbakeføres til en bestemt seksjonstype (næring
eller bolig) skal belastes der, mens andre kostnader fordeles på begge seksjonstyper etter
fordelingsnøkkel slik som angitt nedenfor. Hvis en kostnad bare eller i det vesentligste betjener en

---

[d099_d099 | Side [1]]
ft og vedlikeholdskostnader til porttelefon, låser og portsystem som gjelder boligdelen.
 Kommunale avgifter som gjelder boligdelen.
 Vedlikehold og drift av inngangsparti, trapperom og innvendig gårdsrom som bare eller i det
vesentligste gjelder boligdelen.
 Kostnader knyttet til vedlikehold av fellesarealer med eksklusiv bruksrett for boligseksjonene,
jf. punkt 2-2, jf. vedlegg 1
Fordelingen mellom eierne av boligseksjonene skal skje ut fra sameiebrøken til boligseksjonene.
(3) Følgende

---

[d099_d099 | Side [1]]
tinglyst 19.04.2018 med dok.nr.
669057. Det skal inngås særskilt avtale med Kjellersameiet om plikt for Sameiet til å dekke en
forholdsmessig andel av årlige løpende drifts- og vedlikeholdskostnader til nedkjøringsrampen og
kjøresone frem til kjørekulverten mot gnr. 207 bnr. 459 (felt B2), fastsatt av Kjellersameiets styre hvert år.
Avtalen skal kunne tinglyses, og seksjonseierne plikter å yte nødvendig medvirkning til slik tinglysing.
Kostnadene forbundet med dette skal anses som en del av Sameiets

---

[d099_d099 | Side [1]]
r andre næringsseksjoner, må betale den forhøyede
premien av den aktuelle næringsseksjonen.
Hvis kostnaden ikke kan tilbakeføres til en bestemt næringsseksjon, men til alle/ flere av
næringsseksjonene, skal kostnaden fordeles forholdsmessig mellom eierne av disse
næringsseksjonene ut fra sameiebrøken til næringsseksjonene.
(2) Eierne av boligseksjonene skal i fellesskap dekke følgende kostnader
 Vedlikehold og drift av tekniske anlegg som bare eller i det vesentligste gjelder boligdelen
 Vedlikehold av

---

[d099_d099 | Side [1]]
ovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
observasjoner. forvaltning, dri昀琀 eller vedlikehold.
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller

---

[d099_d099 | Side [1]]
ruk og vedlikehold av
fellesarealer, felles grøntarealer, veier, ledninger, mv. samt øvrige fellestiltak over Sameiets eiendom til
fordel for øvrige sameier/eiendommer beliggende i Bispevika/Bjørvika, samt tilsvarende rettigheter og
plikter for sameiet på øvrige sameier/eiendommer beliggende i Bispevika/Bjørvika.
Ledninger, rør og liknende nødvendige installasjoner kan føres gjennom bruksenheten hvis det ikke er til
vesentlig ulempe for seksjonseieren.
§ 3
Side 2 av 12
86

## Side 87

3
ORGANISERING AV OG

---

[d099_d099 | Side [1]]
old av fellesrom, trappeoppganger og korridorer utføres av leiet renholdspersonale.
Utgiftene belastes sameierne som fellesutgifter.
§ 5 FELLESOMRÅDER
Sameiets fellesområder skal holdes ryddig og fritt for avfall. Fellesområdene skal ikke brukes
slik at det er til vesentlig sjenanse for andre eller kan medføre skade på omgivelsene.
Det er ikke tillatt å ha småbåter permanent i Sameiets område.
Sykkelparkering henvises til fastmonterte sykkelstativer mellom byggene, eller i områdene
markert for

---

[d099_d099 | Side [1]]
ært pant i den enkelte næringsseksjon på kr 75.000
pr 100 m2 BRA utover de første 100 m2 til sikkerhet for Sameiets krav mot den enkelte seksjonseier på
grunn av sameieforholdet.
4-3 Heftelsesform
For felles ansvar og forpliktelser hefter den enkelte seksjonseier i henhold til sin sameiebrøk.
§ 5
SEKSJONSEIERS DRIFTS- OG VEDLIKEHOLDSANSVAR
Seksjonseieren skal vedlikeholde bruksenheten slik at skader på fellesarealene og andre bruksenheter
forebygges, og slik at de øvrige seksjonseierne slipper ulemper.

---

[d099_d099 | Side [1]]
t gjennom kjørekulvert beliggende
under bakken mellom felt B2 og gnr. 207 bnr. 460 (felt B3), jf. erklæring tinglyst 28.08.2019 med dok.nr.
999562. Det er videre inngått avtale med eierseksjonssameiet Dronninglunden om bidrag til
kostnadsdekning i forbindelse med adkomstrett til kjeller og kjørekulvert. Sameiet er i henhold til avtalen
forpliktet til å dekke en forholdsmessig andel av kostnadene forbundet med drift og vedlikehold av
kjørearealene under B2, samt en forholdsmessig andel av kostnadene

---

[d099_d099 | Side [1]]
ukket kortsiktig gjeld.
1679 Vannkunsten Eierseksjonssameie Org. nr 924959134
Side 4 av 24
109

## Side 110

Resultatregnskap 2024 Vannkunsten Eierseksjonssameie
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
INNTEKT
Leieinntekt
Innkrevd felleskostnad 1 10 565 401 9 724 959 10 417 080 11 089 859
Sum leieinntekt 10 565 401 9 724 959 10 417 080 11 089 859
Andre inntekter
Diverse inntekt 2 26 053 580 331 240 000 240 000
Sum annen inntekt 26 053 580 331 240 000 240 000
Sum inntekt 10 591 453 10

---

[d099_d099 | Side [1]]
egenkapital
Årets resultat -516 726 92 056 -424 670
Sum opptjent egenkapital -516 726 92 056 -424 670
Sum egenkapital -516 726 92 056 -424 670
Balansen i årsregnskapet viser en negativ egenkapital, dvs at eiendelenes balanseførte verdi er lavere
enn balanseført verdi av gjelden. Gjelden i boligsameiet dekkes inn av beboere ved betaling av
felleskostnader, som dekker renter og avdrag på lånet.
1679 Vannkunsten Eierseksjonssameie Org. nr. 924959134
Side 13 av 24
118

## Side 119

Noter årsregnskap 2024

---

[d099_d099 | Side [1]]
5 26 845
10 2 020 20 200
7 1 975 13 825
1 1 930 1 930
Selskapets eiere har et felles ansvar for låneopptaket da sameiet ikke eier bygningen.
1679 Vannkunsten Eierseksjonssameie Org. nr. 924959134
Side 15 av 24
120

## Side 121

Resultat og balanse med noter for Vannkunsten Eierseksjonssameie.
Dokumentet er signert elektronisk av:
For Vannkunsten Eierseksjonssameie
Styreleder Morten Dreyer (sign.) 03.04.2025
Styremedlem Fredrik Lekven Lien (sign.) 03.04.2025
Styremedlem Bjørn Watne (sign.)

---

[d099_d099 | Side [1]]
en
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning

---

[d099_d099 | Side [1]]
porten gir en grundig vurdering av boligens tilstand På sameiets grunn utenomhus (mellom alle husene) og i
og påpeker eventuelle avvik som ble oppdaget under garasjesonen er det montert 34 kamerapunkter. Sameiet
befaringen. Tilstandsrapporten og selgers egenerklæring har en «online video‑solution» avtale med Securitas,
er vedlagt salgsoppgaven, og det er viktig at samt vektertjenester med daglige vekterrunder i
interessenter setter seg grundig inn i disse dokumentene Vannkunsten.
før bud legges inn.
51

##

---

[d099_d099 | Side [1]]
d dagens bruk
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Mesanin bygget i 2021 iht. forrige eiers opplysninger. Ombygning av mesanin var ikke søknadsplik琀椀g ved henvendelse 琀椀l
kommunen da det ikke er rom for varig opphold og berører ikke leilighetens opprinnelige bruksfunksjon.
Oppdragsnr.: 15467-2981 Befaringsdato: 10.03.2026 Side: 11 av 15
75

## Side 76

Operagata 65 A, 0194 OSLO Takstmann Jan Berby MNTF
Gnr 234 - Bnr 123 Pb. 80

---

[d099_d099 | Side [1]]
Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17

---

[d099_d099 | Side [1]]
enerer naboen gjennom rør basert på fjernvarme. Alle leiligheter har balansert
lukt, bråk eller på annen måte er til ulempe. I tvilstilfeller luftutveksling, med mulighet for temperaturvalg.
avgjør styret etter forhandlinger med partene hvorvidt en
klage er berettiget. Selger informerer om strømkostnader på ca. 400 ‑ 700 kr
pr. mnd.
52

## Side 53

OM EIENDOMMEN
Ny skole i Bjørvika
Regulerings og arealplaner Oslobygg KF bygger en ny barne‑ og ungdomsskole i
Eiendommen er regulert til kombinert bebyggelse

---

[d099_d099 | Side [1]]
rt eller er det foreta琀琀 琀椀lleggsarbeider
bygningssakkyndige har oppdaget. Terskelen for hva som anses som
på det elektriske anlegget e琀琀er 1.1.1999?
åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å
Nei
avdekke slike forhold. Punktet omfa琀琀er ikke skjulte eller ikke-synlige
forhold, tekniske vurderinger eller forhold som krever
5. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
El琀椀lsyn (DLE) eller

---

[d099_d099 | Side [1]]
asedet.asp?caseno=201704197 ADKOMSTRETT
Allmenheten har rett til ferdsel og opphold på felt T1
Rostockgata 99 ‑ oppføring av bolig‑ og næringsbygg Kan ikke slettes eller endres uten samtykke fra
reguleringsfelt B9 a og b kommunen
Følg saken her: https:/ / innsyn.pbe.oslo.kommune.no/ Med flere bestemmelser
saksinnsyn/ casedet.asp? GJELDER DENNE REGISTERENHETEN MED FLERE
direct=Y&mode=&caseno=202508399 Overført fra: KNR: 0301 GNR: 234 BNR: 123
53

## Side 54

OM EIENDOMMEN
GRUNNDATA
2020/ 2127861‑1/ 200

---

[d099_d099 | Side [1]]
 takst avholdt av takstmann: Tilstandsrapport
Adresse
Sammendrag selgers egenerklæring: Selgers Operagata 65A, 0194 OSLO
egenerklæringsskjema følger vedlagt salgsoppgaven.
Gnr. 234, bnr. 123, snr. 188, ideell andel 1/ 1
Samsvarserklæring: i Oslo kommune.
Det er ikke fremlagt samsvarserklæring for det elektriske
anlegget.
Selger
Trond Gule Holding AS
Bebyggelsen
Områder består av kombinert bolig‑ og Sameie
næringsbebyggelse. Sameiet Vannkunsten
Organisasjonsnummer: 924959134
Byggemåte
Vinduer Sameiet

---

[d099_d099 | Side [1]]
ngdør med treramme/ eik og 3‑lags isolerglass. til årets bygg av Byggedagene og Byggeindustrien. I
2023 ble Vannkunsten tildelt A.C. Houens diplom for
Balkong fremragende arkitektur.
Adkomst til nordvestvendt balkong på 10,5m² fra stue.
Sameiet Vannkunsten har avtale med USBL Boservice
I forbindelse med salget er det blitt utført en for drift, administrasjon og vaktmestertjenester.
tilstandsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir en grundig vurdering av boligens tilstand På sameiets

---

[d099_d099 | Side [1]]
er og service琀椀lbud. Operaen, Munchmuseet, Deichmanske bibliotek og Barcode i umiddelbar
nærhet. Området har 昀氀ere nye boliger og eiendoms prosjekter og er bli琀琀 en del av en ny og spennende bydel. Gangavstand 琀椀l sentrum.
Adkomstvei
O昀昀entlig. Private interne småveier mellom bebyggelse.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Parkering
Parkering i omkringliggende veier e琀琀er gjeldende bestemmelser.
Oppdragsnr.:

---

[d099_d099 | Side [1]]
n på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
byggverk eller en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse av opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke
avvik. fremvist dokumentasjon på at rommet 琀椀lhører boenheten, med mindre
de琀琀e er angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens

---

[d099_d099 | Side [1]]
rygge.» Separert 10% 9%
Sitat fra en lokalkjent
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
142

## Side 143

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet

---

[d099_d099 | Side [1]]
dlikehold hager
Godt velholdt 87/100
Familiesammensetning
Par m. barn
Sport
Gamlebyen skole 10 min
Par u. barn
Ballspill 0.7 km
Ruinparken balløkke 11 min
Enslig m. barn
Ballspill 0.9 km
SATS Bjørvika 4 min
Enslig u. barn
Barry's Barcode 5 min
Flerfamilier
Boligmasse
0% 51%
94% blokk
Bjørvika
6% annet
Oslo og omegn
Norge
Sivilstand
Norge
Gift 29% 33%
«Sjønært og bynært med mer
Ikke gift 59% 54%
grøntarealer enn Tjuvholmen og Aker
Brygge.» Separert 10% 9%
Sitat fra en lokalkjent
Enke/Enkemann 1%

---

[d099_d099 | Side [1]]
lig berettigede klager, kan styret kreve dyret fjernet hvis ikke en
minnelig ordning med klageren kan oppnås. En berettiget klage kan være at dyreholdet i
vesentlig grad sjenerer naboen gjennom lukt, bråk eller på annen måte er til ulempe. I
tvilstilfeller avgjør styret etter forhandlinger med partene hvorvidt en klage er berettiget.
§ 8 ENDRINGER AV FASADEN
I et prosjekt som Vannkunsten er det svært viktig å ivareta det visuelle uttrykket arkitektene
har skapt, og enhver endring av fasaden er ikke tillatt

---

[d099_d099 | Side [1]]
g ungdomsskole i
Eiendommen er regulert til kombinert bebyggelse og Bjørvika med en flerbrukshall.
anleggsformål iht. S‑4825. Reguleringsfelt E0h, det indre
vannspeilet på Sameiets eiendom, er regulert til offentlig Bjørvika skole skal ligge innerst på Sørengautstikkeren
areal. og får 840 elever på barne‑ og ungdomstrinnet. Skolen
skal skape økt lokal tilhørighet og bidra til å knytte
Pågående plan‑ og byggesaker: sammen Sørengaområdet med Gamlebyen og Grønland.
Detaljregulering ‑ Sukkerbiten sjøbad
Planen

---

[d099_d099 | Side [1]]
i tråd med intensjonene i Bjørvikaplanen. Tinglyste heftelser og rettigheter: Heftelser i
Planforslaget regulerer lokalveinett, sykkeltrasé og eiendomsrett:
kollektivtrasé gjennom Lohavn samt havnepromenade 2015/ 924824‑1/ 200 07.10.2015 BEST. OM
og Loallmenningen som en av de syv allmenningene i ADKOMSTRETT
Bjørvikaplanen. Følg saken her: https:/ / Allmenheten har rett til ferdsel gjennom felt G3 ‑ G6
innsyn.pbe.oslo.kommune.no/ saksinnsyn/ casedet.asp? Kan ikke slettes eller endres uten samtykke

---

[d099_d099 | Side [1]]
vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: TG 3
79006220
:ecnerefer
tnemucoD
62

## Side 63

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om

---

[d099_d099 | Side [1]]
omkringliggende veier e琀琀er gjeldende bestemmelser.
Oppdragsnr.: 15467-2981 Befaringsdato: 10.03.2026 Side: 12 av 15
76

## Side 77

Operagata 65 A, 0194 OSLO Takstmann Jan Berby MNTF
Gnr 234 - Bnr 123 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Eiers egenerklæring er mo琀琀a琀琀 og
Egenerklæring gjennomlest. Egenerklæringen har ikke Gjennomgå琀琀 Nei
vesentlige avvik fra registrerte forhold.
Bruks琀椀llat./ferdiga琀琀. Gjennomgå琀琀 Nei
Opplysninger

---

[d099_d099 | Side [1]]















139

## Side 140

(Ingen tekst ekstrahert)

## Side 141

Nabolagsprofil
Operagata 65A - Nabolaget Bjørvika - vurdert av 119 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Enslige Veldig trygt 88/100
Godt voksne
Kvalitet på skolene
Etablerere
Veldig bra 80/100
Naboskapet
Offentlig transport Godt vennskap 68/100
Bjørvika 3 min
Totalt 25 ulike linjer 0.3

---

[d099_d099 | Side [1]]
skal ikke brukes slik at dette fører til sjenanse for andre. Det skal være ro mellom
kl. 23:00 og kl. 07:00 alle hverdager. I helgene og på helligdager skal det være ro mellom kl.
23:00 og kl. 09:00.
Skal det arrangeres selskap i leiligheten eller på terrassen som kan medføre støy, skal
tilstøtende naboer varsles en dag i forkant.
Ved rehabiliteringsarbeider som skaper mye støy, som hamring, sliping, bruk av drill eller
boring i betong, skal varsel henges opp på oppslagstavle i trappeoppgangen og ved epost

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende samsvarserklæring for elektrisk anlegg. Det er ikke fremlagt samsvarserklæring for det elektriske anlegget, noe som innebærer usikkerhet rundt lovlighet og sikkerhet ved el-installasjoner.",
      "evidence": [
        "Det er ikke fremlagt samsvarserklæring for det elektriske anlegget.",
        "Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Nei",
        "Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn.",
        "Er det utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Nei"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Negativ egenkapital i sameiet. Årsregnskapet for Vannkunsten Eierseksjonssameie viser negativ egenkapital på -516 726 kroner for 2024, noe som kan indikere økonomisk risiko for sameiet og potensielt økte felleskostnader for seksjonseiere.",
      "evidence": [
        "Årets resultat -516 726 92 056 -424 670",
        "Balansen i årsregnskapet viser en negativ egenkapital, dvs at eiendelenes balanseførte verdi er lavere enn balanseført verdi av gjelden.",
        "Gjelden i boligsameiet dekkes inn av beboere ved betaling av felleskostnader, som dekker renter og avdrag på lånet.",
        "Selskapets eiere har et felles ansvar for låneopptaket da sameiet ikke eier bygningen."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Tilliggende konstruksjoner til våtrom i 5. etasje er ikke undersøkt (TG IU). Dette innebærer at det kan foreligge skjulte feil eller skader i tilstøtende konstruksjoner til badet som ikke er avdekket.",
      "evidence": [
        "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Våtrom > 5. etasje > Bad/vaskerom > Tilliggende konstruksjoner våtrom",
        "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R4",
      "description": "Manglende radonmåling. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjon i boligen og potensiell helserisiko for fremtidige beboere.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R5",
      "description": "Nær relasjon mellom selger og fremtidig ansatt i eiendomsmeglingsforetaket. Det er opplyst om en nær relasjon mellom selger og en person som skal begynne å jobbe i Emera eiendomsmegling sommeren 2026, noe som kan reise spørsmål om interessekonflikter i meglingsprosessen.",
      "evidence": [
        "Det informeres om at det er en nær relasjon mellom selger og en fremtidig ansatt i Emera eiendomsmegling som har oppstart i løpet av sommeren 2026, men at denne relasjonen ikke er omfattet av egenhandelsforbudet i eiendomsmeglingsloven."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R6",
      "description": "Mesanin bygget uten søknad – usikkerhet rundt lovlighet. Mesaninen ble bygget i 2021 uten søknad til kommunen. Selv om selger opplyser at dette ikke var søknadspliktig, kan det foreligge usikkerhet rundt lovligheten av tiltaket.",
      "evidence": [
        "Mesanin bygget i 2021 iht. forrige eiers opplysninger. Ombygning av mesanin var ikke søknadspliktig ved henvendelse til kommunen da det ikke er rom for varig opphold og berører ikke leilighetens opprinnelige bruksfunksjon."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R7",
      "description": "Legalpant som ikke fremgår av grunnboken. Kommunen og øvrige seksjonseiere i sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan påvirke kjøpers pantesikkerhet.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Kompleks kostnadsstruktur med forpliktelser overfor Kjellersameiet og andre sameier. Sameiet er forpliktet til å dekke forholdsmessige andeler av drifts- og vedlikeholdskostnader til kjørekulvert, nedkjøringsrampe og kjørearealer, noe som kan medføre uforutsette kostnadsøkninger.",
      "evidence": [
        "Det skal inngås særskilt avtale med Kjellersameiet om plikt for Sameiet til å dekke en forholdsmessig andel av årlige løpende drifts- og vedlikeholdskostnader til nedkjøringsrampen og kjøresone frem til kjørekulverten mot gnr. 207 bnr. 459 (felt B2), fastsatt av Kjellersameiets styre hvert år.",
        "Sameiet er i henhold til avtalen forpliktet til å dekke en forholdsmessig andel av kostnadene forbundet med drift og vedlikehold av kjørearealene under B2.",
        "Kostnadene forbundet med dette skal anses som en del av Sameiets felleskostnader som skal fordeles etter eierbrøk."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Pågående reguleringsplaner og byggesaker i nærområdet. Det er flere pågående plan- og byggesaker i Bjørvika-området, inkludert detaljregulering av Sukkerbiten sjøbad og ny skole, som kan medføre endringer i bruken av eiendommens omgivelser, økt byggeaktivitet og støy.",
      "evidence": [
        "Pågående plan- og byggesaker: Detaljregulering - Sukkerbiten sjøbad",
        "Oslobygg KF bygger en ny barne- og ungdomsskole i Bjørvika med en flerbrukshall.",
        "Rostockgata 99 - oppføring av bolig- og næringsbygg reguleringsfelt B9 a og b"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R10",
      "description": "Tilstandsrapporten er basert på visuell inspeksjon og gir ingen garanti mot skjulte feil. Rapporten er utarbeidet på undersøkelsesnivå 1 (laveste nivå) og kan ikke avdekke skjulte feil, skader eller mangler bak vegger og i konstruksjoner.",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
        "NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell..."
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Manglende brukstillatelse eller ferdigattest er ikke avklart. Tilstandsrapporten angir at brukstillatelse/ferdigattest er gjennomgått med status 'Nei', noe som kan indikere at disse dokumentene ikke er fremlagt eller bekreftet.",
      "evidence": [
        "Brukstillat./ferdigatt. Gjennomgått Nei",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Offentlig allmenningsrett og adkomstrettigheter på sameiets eiendom. Allmenheten har tinglyst rett til ferdsel og opphold på deler av eiendommen, noe som begrenser sameiets og seksjonseierens kontroll over utearealer.",
      "evidence": [
        "Allmenheten har rett til ferdsel og opphold på felt T1 - Kan ikke slettes eller endres uten samtykke fra kommunen",
        "Allmenheten har rett til ferdsel gjennom felt G3 - G6 - Kan ikke slettes eller endres uten samtykke"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Økning i felleskostnader. Budsjett for 2025 viser en økning i innkrevde felleskostnader fra ca. 10,4 millioner til 11,1 millioner kroner, noe som indikerer at den enkelte seksjonseier kan forvente økte månedlige felleskostnader.",
      "evidence": [
        "Innkrevd felleskostnad: Regnskap 2024: 10 565 401, Budsjett 2024: 10 417 080, Budsjett 2025: 11 089 859"
      ],
      "source_documents": [
        "d099_d099"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende samsvarserklæring (0.95 → 0.95):** Godt støttet av flere evidenspunkter. Eksplisitt nevnt i salgsoppgaven, selger bekrefter ingen el-kontroll, og tilstandsrapporten påpeker forenklet vurdering ved manglende el-tilsyn. Confidence opprettholdes.\n\n**R2 – Negativ egenkapital (0.95 → 0.95):** Svært godt dokumentert i årsregnskapet. Negativ egenkapital på -516 726 kr er eksplisitt bekreftet, med forklaring om at gjelden dekkes via felleskostnader. Tilleggsbevis om felles låneansvar styrker risikoen ytterligere. Confidence opprettholdes.\n\n**R3 – TG IU tilliggende konstruksjoner (0.92 → 0.92):** Direkte evidens i tilstandsrapporten. Klart definert som ikke-undersøkt område. Confidence opprettholdes.\n\n**R4 – Manglende radonmåling (0.90 → 0.80):** Støttet av evidens, men risikoen er noe redusert fordi dokumentet selv presiserer at radonmåling ikke er lovpålagt med mindre boligen leies ut. Leiligheten er i et høyere bygg i Bjørvika (ikke typisk høyradonområde), noe som reduserer den reelle helserisikoen noe. Confidence justeres ned til 0.80.\n\n**R5 – Nær relasjon selger/megler (0.80 → 0.75):** Evidensen er til stede, men dokumentet opplyser eksplisitt at forholdet ikke er omfattet av egenhandelsforbudet. Risikoen er reell men begrenset. Confidence justeres ned til 0.75.\n\n**R6 – Mesanin uten søknad (0.78 → 0.65):** Evidensen viser at selger/forrige eier faktisk kontaktet kommunen og fikk bekreftet at tiltaket ikke var søknadspliktig. Dette reduserer risikoen betydelig. Confidence justeres ned til 0.65.\n\n**R7 – Legalpant (0.88 → 0.90):** Godt dokumentert med flere evidenspunkter, inkludert prioritetsrekkefølge. Tilleggsbevis om at kommunens legalpant har høyere prioritet enn sameiets styrker risikobildet. Confidence justeres opp til 0.90.\n\n**R8 – Kjellersameiet kostnadsforpliktelser (0.82 → 0.82):** Godt støttet av vedtekter og tinglyste erklæringer. Kompleksiteten i kostnadsstrukturen er reell. Confidence opprettholdes.\n\n**R9 – Reguleringsplaner (0.80 → 0.78):** Støttet av evidens, men dette er generelle byutviklingsprosjekter i et aktivt byutviklingsområde som kjøper bør forvente. Risikoen er reell men ikke unik. Confidence justeres marginalt ned til 0.78.\n\n**R10 – Visuell inspeksjon/skjulte feil (0.88 → 0.90):** Svært godt dokumentert. Rapporten selv presiserer begrensningene eksplisitt. Confidence justeres opp til 0.90.\n\n**R11 – Brukstillatelse/ferdigattest (0.75 → 0.70):** Evidensen er tvetydig. \"Gjennomgått: Nei\" kan bety at dokumentet ikke er vedlagt rapporten, men selger svarer \"Nei\" på om det mangler brukstillatelse/ferdigattest, noe som indikerer at disse eksisterer. Usikkerheten er reell men noe lavere enn opprinnelig vurdert. Confidence justeres ned til 0.70.\n\n**R12 – Allmenningsrett (0.82 → 0.82):** Godt dokumentert med tinglyste heftelser. Confidence opprettholdes.\n\n**R13 – Økning felleskostnader (0.85 → 0.85):** Direkte støttet av regnskapstall. Økning på ca. 6,5% fra budsjett 2024 til budsjett 2025 er dokumentert. Confidence opprettholdes.\n\n**Manglende risikoer identifisert:**\n- Selger er et AS (Trond Gule Holding AS), ikke privatperson – dette kan ha implikasjoner for reklamasjonsrett og avhendingslovens anvendelse.\n- Tegninger er gjennomgått med status \"Nei\" i tilstandsrapporten – usikkerhet rundt om godkjente tegninger foreligger.\n- Sameiet eier ikke bygningen selv (jf. \"sameiet ikke eier bygningen\") – dette er en uvanlig konstruksjon som bør undersøkes nærmere.\n- Felles låneansvar for seksjonseiere (jf. \"Selskapets eiere har et felles ansvar for låneopptaket\").\n\n**Spørsmål for videre undersøkelse:**\n- Hva er sameiets totale lånegjeld og hvilken andel tilhører denne seksjonen?\n- Foreligger godkjente byggetegninger for leiligheten?\n- Hva er den eksakte månedlige felleskostnaden for denne seksjonen i 2025?\n- Er det gjennomført el-tilsyn (DLE) de siste 5 år?\n",
  "re_retrieval_queries": [
    "Vannkunsten sameiet lånegjeld fellesgjeld seksjon andel",
    "Trond Gule Holding AS selger AS avhendingsloven reklamasjon",
    "tegninger godkjente byggetegninger leilighet Operagata 65A",
    "månedlig felleskostnad seksjon 188 Vannkunsten 2025",
    "el-tilsyn DLE kontrollrapport elektrisk anlegg",
    "sameiet eier ikke bygningen anleggseiendom organisering",
    "ferdigattest brukstillatelse Operagata 65A Oslo kommune"
  ]
}

## Raw Response
```json
{
  "id": "msg_01SRAnQEGuojo5kpBPbuy1AQ",
  "container": null,
  "content": [
    {
      "id": "toolu_01EzsYxPiFLoCJxFCXYJVcJy",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende samsvarserklæring for elektrisk anlegg. Det er ikke fremlagt samsvarserklæring for det elektriske anlegget, noe som innebærer usikkerhet rundt lovlighet og sikkerhet ved el-installasjoner.",
            "evidence": [
              "Det er ikke fremlagt samsvarserklæring for det elektriske anlegget.",
              "Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Nei",
              "Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og elektriske installasjoner i boligen dersom det er mer enn fem år siden sist boligen hadde el-tilsyn.",
              "Er det utført eller er det foretatt tilleggsarbeider på det elektriske anlegget etter 1.1.1999? Nei"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Negativ egenkapital i sameiet. Årsregnskapet for Vannkunsten Eierseksjonssameie viser negativ egenkapital på -516 726 kroner for 2024, noe som kan indikere økonomisk risiko for sameiet og potensielt økte felleskostnader for seksjonseiere.",
            "evidence": [
              "Årets resultat -516 726 92 056 -424 670",
              "Balansen i årsregnskapet viser en negativ egenkapital, dvs at eiendelenes balanseførte verdi er lavere enn balanseført verdi av gjelden.",
              "Gjelden i boligsameiet dekkes inn av beboere ved betaling av felleskostnader, som dekker renter og avdrag på lånet.",
              "Selskapets eiere har et felles ansvar for låneopptaket da sameiet ikke eier bygningen."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Tilliggende konstruksjoner til våtrom i 5. etasje er ikke undersøkt (TG IU). Dette innebærer at det kan foreligge skjulte feil eller skader i tilstøtende konstruksjoner til badet som ikke er avdekket.",
            "evidence": [
              "KONSTRUKSJONER SOM IKKE ER UNDERSØKT: Våtrom > 5. etasje > Bad/vaskerom > Tilliggende konstruksjoner våtrom",
              "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R4",
            "description": "Manglende radonmåling. Selger har ikke utført radonmåling, noe som innebærer usikkerhet rundt radonkonsentrasjon i boligen og potensiell helserisiko for fremtidige beboere.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R5",
            "description": "Nær relasjon mellom selger og fremtidig ansatt i eiendomsmeglingsforetaket. Det er opplyst om en nær relasjon mellom selger og en person som skal begynne å jobbe i Emera eiendomsmegling sommeren 2026, noe som kan reise spørsmål om interessekonflikter i meglingsprosessen.",
            "evidence": [
              "Det informeres om at det er en nær relasjon mellom selger og en fremtidig ansatt i Emera eiendomsmegling som har oppstart i løpet av sommeren 2026, men at denne relasjonen ikke er omfattet av egenhandelsforbudet i eiendomsmeglingsloven."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R6",
            "description": "Mesanin bygget uten søknad – usikkerhet rundt lovlighet. Mesaninen ble bygget i 2021 uten søknad til kommunen. Selv om selger opplyser at dette ikke var søknadspliktig, kan det foreligge usikkerhet rundt lovligheten av tiltaket.",
            "evidence": [
              "Mesanin bygget i 2021 iht. forrige eiers opplysninger. Ombygning av mesanin var ikke søknadspliktig ved henvendelse til kommunen da det ikke er rom for varig opphold og berører ikke leilighetens opprinnelige bruksfunksjon."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R7",
            "description": "Legalpant som ikke fremgår av grunnboken. Kommunen og øvrige seksjonseiere i sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan påvirke kjøpers pantesikkerhet.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Kompleks kostnadsstruktur med forpliktelser overfor Kjellersameiet og andre sameier. Sameiet er forpliktet til å dekke forholdsmessige andeler av drifts- og vedlikeholdskostnader til kjørekulvert, nedkjøringsrampe og kjørearealer, noe som kan medføre uforutsette kostnadsøkninger.",
            "evidence": [
              "Det skal inngås særskilt avtale med Kjellersameiet om plikt for Sameiet til å dekke en forholdsmessig andel av årlige løpende drifts- og vedlikeholdskostnader til nedkjøringsrampen og kjøresone frem til kjørekulverten mot gnr. 207 bnr. 459 (felt B2), fastsatt av Kjellersameiets styre hvert år.",
              "Sameiet er i henhold til avtalen forpliktet til å dekke en forholdsmessig andel av kostnadene forbundet med drift og vedlikehold av kjørearealene under B2.",
              "Kostnadene forbundet med dette skal anses som en del av Sameiets felleskostnader som skal fordeles etter eierbrøk."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Pågående reguleringsplaner og byggesaker i nærområdet. Det er flere pågående plan- og byggesaker i Bjørvika-området, inkludert detaljregulering av Sukkerbiten sjøbad og ny skole, som kan medføre endringer i bruken av eiendommens omgivelser, økt byggeaktivitet og støy.",
            "evidence": [
              "Pågående plan- og byggesaker: Detaljregulering - Sukkerbiten sjøbad",
              "Oslobygg KF bygger en ny barne- og ungdomsskole i Bjørvika med en flerbrukshall.",
              "Rostockgata 99 - oppføring av bolig- og næringsbygg reguleringsfelt B9 a og b"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R10",
            "description": "Tilstandsrapporten er basert på visuell inspeksjon og gir ingen garanti mot skjulte feil. Rapporten er utarbeidet på undersøkelsesnivå 1 (laveste nivå) og kan ikke avdekke skjulte feil, skader eller mangler bak vegger og i konstruksjoner.",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
              "NS 3600:2018 har undersøkelsesnivå fra 1 til 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell..."
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Manglende brukstillatelse eller ferdigattest er ikke avklart. Tilstandsrapporten angir at brukstillatelse/ferdigattest er gjennomgått med status 'Nei', noe som kan indikere at disse dokumentene ikke er fremlagt eller bekreftet.",
            "evidence": [
              "Brukstillat./ferdigatt. Gjennomgått Nei",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Offentlig allmenningsrett og adkomstrettigheter på sameiets eiendom. Allmenheten har tinglyst rett til ferdsel og opphold på deler av eiendommen, noe som begrenser sameiets og seksjonseierens kontroll over utearealer.",
            "evidence": [
              "Allmenheten har rett til ferdsel og opphold på felt T1 - Kan ikke slettes eller endres uten samtykke fra kommunen",
              "Allmenheten har rett til ferdsel gjennom felt G3 - G6 - Kan ikke slettes eller endres uten samtykke"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Økning i felleskostnader. Budsjett for 2025 viser en økning i innkrevde felleskostnader fra ca. 10,4 millioner til 11,1 millioner kroner, noe som indikerer at den enkelte seksjonseier kan forvente økte månedlige felleskostnader.",
            "evidence": [
              "Innkrevd felleskostnad: Regnskap 2024: 10 565 401, Budsjett 2024: 10 417 080, Budsjett 2025: 11 089 859"
            ],
            "source_documents": [
              "d099_d099"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "reasoning": "\nGjennomgang av alle 13 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende samsvarserklæring (0.95 → 0.95):** Godt støttet av flere evidenspunkter. Eksplisitt nevnt i salgsoppgaven, selger bekrefter ingen el-kontroll, og tilstandsrapporten påpeker forenklet vurdering ved manglende el-tilsyn. Confidence opprettholdes.\n\n**R2 – Negativ egenkapital (0.95 → 0.95):** Svært godt dokumentert i årsregnskapet. Negativ egenkapital på -516 726 kr er eksplisitt bekreftet, med forklaring om at gjelden dekkes via felleskostnader. Tilleggsbevis om felles låneansvar styrker risikoen ytterligere. Confidence opprettholdes.\n\n**R3 – TG IU tilliggende konstruksjoner (0.92 → 0.92):** Direkte evidens i tilstandsrapporten. Klart definert som ikke-undersøkt område. Confidence opprettholdes.\n\n**R4 – Manglende radonmåling (0.90 → 0.80):** Støttet av evidens, men risikoen er noe redusert fordi dokumentet selv presiserer at radonmåling ikke er lovpålagt med mindre boligen leies ut. Leiligheten er i et høyere bygg i Bjørvika (ikke typisk høyradonområde), noe som reduserer den reelle helserisikoen noe. Confidence justeres ned til 0.80.\n\n**R5 – Nær relasjon selger/megler (0.80 → 0.75):** Evidensen er til stede, men dokumentet opplyser eksplisitt at forholdet ikke er omfattet av egenhandelsforbudet. Risikoen er reell men begrenset. Confidence justeres ned til 0.75.\n\n**R6 – Mesanin uten søknad (0.78 → 0.65):** Evidensen viser at selger/forrige eier faktisk kontaktet kommunen og fikk bekreftet at tiltaket ikke var søknadspliktig. Dette reduserer risikoen betydelig. Confidence justeres ned til 0.65.\n\n**R7 – Legalpant (0.88 → 0.90):** Godt dokumentert med flere evidenspunkter, inkludert prioritetsrekkefølge. Tilleggsbevis om at kommunens legalpant har høyere prioritet enn sameiets styrker risikobildet. Confidence justeres opp til 0.90.\n\n**R8 – Kjellersameiet kostnadsforpliktelser (0.82 → 0.82):** Godt støttet av vedtekter og tinglyste erklæringer. Kompleksiteten i kostnadsstrukturen er reell. Confidence opprettholdes.\n\n**R9 – Reguleringsplaner (0.80 → 0.78):** Støttet av evidens, men dette er generelle byutviklingsprosjekter i et aktivt byutviklingsområde som kjøper bør forvente. Risikoen er reell men ikke unik. Confidence justeres marginalt ned til 0.78.\n\n**R10 – Visuell inspeksjon/skjulte feil (0.88 → 0.90):** Svært godt dokumentert. Rapporten selv presiserer begrensningene eksplisitt. Confidence justeres opp til 0.90.\n\n**R11 – Brukstillatelse/ferdigattest (0.75 → 0.70):** Evidensen er tvetydig. \"Gjennomgått: Nei\" kan bety at dokumentet ikke er vedlagt rapporten, men selger svarer \"Nei\" på om det mangler brukstillatelse/ferdigattest, noe som indikerer at disse eksisterer. Usikkerheten er reell men noe lavere enn opprinnelig vurdert. Confidence justeres ned til 0.70.\n\n**R12 – Allmenningsrett (0.82 → 0.82):** Godt dokumentert med tinglyste heftelser. Confidence opprettholdes.\n\n**R13 – Økning felleskostnader (0.85 → 0.85):** Direkte støttet av regnskapstall. Økning på ca. 6,5% fra budsjett 2024 til budsjett 2025 er dokumentert. Confidence opprettholdes.\n\n**Manglende risikoer identifisert:**\n- Selger er et AS (Trond Gule Holding AS), ikke privatperson – dette kan ha implikasjoner for reklamasjonsrett og avhendingslovens anvendelse.\n- Tegninger er gjennomgått med status \"Nei\" i tilstandsrapporten – usikkerhet rundt om godkjente tegninger foreligger.\n- Sameiet eier ikke bygningen selv (jf. \"sameiet ikke eier bygningen\") – dette er en uvanlig konstruksjon som bør undersøkes nærmere.\n- Felles låneansvar for seksjonseiere (jf. \"Selskapets eiere har et felles ansvar for låneopptaket\").\n\n**Spørsmål for videre undersøkelse:**\n- Hva er sameiets totale lånegjeld og hvilken andel tilhører denne seksjonen?\n- Foreligger godkjente byggetegninger for leiligheten?\n- Hva er den eksakte månedlige felleskostnaden for denne seksjonen i 2025?\n- Er det gjennomført el-tilsyn (DLE) de siste 5 år?\n",
        "re_retrieval_queries": [
          "Vannkunsten sameiet lånegjeld fellesgjeld seksjon andel",
          "Trond Gule Holding AS selger AS avhendingsloven reklamasjon",
          "tegninger godkjente byggetegninger leilighet Operagata 65A",
          "månedlig felleskostnad seksjon 188 Vannkunsten 2025",
          "el-tilsyn DLE kontrollrapport elektrisk anlegg",
          "sameiet eier ikke bygningen anleggseiendom organisering",
          "ferdigattest brukstillatelse Operagata 65A Oslo kommune"
        ]
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
    "input_tokens": 20580,
    "output_tokens": 5013,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
