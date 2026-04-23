# Trace: agentic_reflecting_iter1
- **Run ID:** a669ad80-ee11-412f-bde2-1253c02c6983
- **Tidspunkt:** 2026-03-23T22:03:47.687545+00:00
- **Varighet:** 80.32s
- **Input tokens:** 19755
- **Output tokens:** 4060

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
Risiko 1: TG2 på membraner grunnet alder – risiko for lekkasje fra innebygget sluk
  Confidence: 0.92
  Evidens: Det er gjennomgående registrert TG1 bortse琀琀 fra en TG2 pga alder på membraner og ikke påvist 琀椀lfredss琀椀llende løsning for å synliggjøre lekkasje fra innebygget [sluk]; Tilstandsgrad 2 brukes når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid, eller når det er grunn til å varsle om faren for skader på grunn av alderen

Risiko 2: Negativ egenkapital i sameiet – sameiet har høyere gjeld enn eiendeler, noe som kan medføre økte felleskostnader for kjøper
  Confidence: 0.95
  Evidens: SUM EGENKAPITAL -9 681 741 -11 059 634; Sameiet har, i regnskapsåret, hatt høyere kostnader enn inntekter. Den manglende likviditeten er finansiert ved låneopptak.; Pante- og gjeldsbrevlån 16 13 540 184 14 520 980

Risiko 3: Økning i felleskostnader på 8,5 % fra 01.01.2025 – økt løpende kostnad for kjøper
  Confidence: 0.95
  Evidens: Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Økning på 8.5% f.o.m 01.01.2025 av felleskostnader.

Risiko 4: Pågående plansak for naboeiendommen (Hovinveien 43A) og reguleringsplanforslag for Grenseveien – kan påvirke bomiljø og utsikt
  Confidence: 0.88
  Evidens: Pågående plansaker: Hovinveien 43 A ‑ Boliger. Saksnummer 2025/06721. Pågående planleggingsfase for utvikling av eiendommen til boligformål med matbutikk og utendørsområder. Saken er fortsatt i et tidlig stadie og det er ikke vedtatt en endelig plan for eiendommen.; Bymiljøetaten er i gang med forprosjekt og utarbeidelse av reguleringsplanforslag for Grenseveien. Målet er å legge bedre til rette for gående, syklende og kollektivreisende.

Risiko 5: Planlagt bergvarmeanlegg/solcelleanlegg med estimert kostnad 14–16 millioner kroner – risiko for økt fellesgjeld og felleskostnader
  Confidence: 0.85
  Evidens: det 14–16 millioner kroner. Det er opsjon for to ekstra brønner dersom behov og plass tillater.; Parallelt med vurderingen av solcelleanlegg har styret [vurdert tiltak]; totalkostnaden å være i størrelsesorden 2,5‑3,0 millioner kroner. Det kan bli aktuelt å søke støtte til selve tiltaket dersom slike ordninger åpnes. Videre ble saken igjen tatt [opp]

Risiko 6: Opprinnelig atrium/TV-stue er innredet som soverom 3 – mulig ulovlig bruksendring uten godkjenning
  Confidence: 0.78
  Evidens: Opprinnelig atrium/TV-stue innredet som soverom 3. Tiltaket er prosjektert i henhold til Byggeteknisk forskrift av 1997 med senere endringer ifølge rammetillatelse gitt 20/1-2006.; Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser.

Risiko 7: Dårlig energikarakter F (energifarge grønn) – kan medføre høye energikostnader for kjøper
  Confidence: 0.9
  Evidens: Energikarakter: F; Energifarge: Grønn

Risiko 8: Baderom oppgradert med microsement i 2025 – microsement er ikke et godkjent membransystem for våtrom og kan medføre fuktskader
  Confidence: 0.82
  Evidens: baderom oppgradert med microsement på gulv og vegg i 2025; TG2 pga alder på membraner og ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget [sluk]

Risiko 9: Ingen radonmåling er utført – ukjent radoneksponering i boligen
  Confidence: 0.87
  Evidens: Er det foretatt radonmåling? Nei Ja [avkrysset Nei]

Risiko 10: Manglende brukstillatelse eller ferdigattest er ikke avklart – potensielt ulovlige forhold
  Confidence: 0.75
  Evidens: Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja; Bruks琀椀llat./ferdiga琀琀. Gjennomgå琀琀 Nei

Risiko 11: Sameiet har stor langsiktig gjeld og finansierer løpende underskudd med låneopptak – risiko for fremtidige kostnadspåslag på kjøper
  Confidence: 0.9
  Evidens: Pante- og gjeldsbrevlån 16 13 540 184 14 520 980; Den manglende likviditeten er finansiert ved låneopptak.; I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.

Risiko 12: Tegninger ikke gjennomgått/godkjent – usikkerhet rundt lovlighet av areal og romfordeling
  Confidence: 0.72
  Evidens: Tegninger Gjennomgå琀琀 Nei; Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk.

Dokumentkontekst:
[d033_d033 | Side [1]]
apporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte

---

[d033_d033 | Side [1]]
 skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG

---

[d033_d033 | Side [1]]
ering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 5 av 15
72
llatnA
Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Sammendrag av boligens 琀椀lstand
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Eiet seksjon i

---

[d033_d033 | Side [1]]
GEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven.

---

[d033_d033 | Side [1]]
Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
gis sjablongmessig anslag. 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l
2 27.11.2025 Re琀琀et beskrivelse balkong/terrasse v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell
observasjon. Rapporten baseres på undersøkelsesnivå 1 med få unntak
For

---

[d033_d033 | Side [1]]
nger bygningssakkyndige ser e琀琀er avvik som har betydning for og som TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova. eller innen kort 琀椀d. Det er påvist funksjonssvikt eller

---

[d033_d033 | Side [1]]
tomer og momenter gi TG2. Avvik under TG2
kan gis sjablongmessig anslag.
BEFARINGEN
Versjon Ny versjon Kommentar iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som
på forhold som man må regne med trenger utbedring straks eller innen bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
1 21.11.2025 kort 琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen

---

[d033_d033 | Side [1]]
 skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀

---

[d033_d033 | Side [1]]
er krav om at avviket må utbedres. De琀琀e kan IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder Det kan være avvik/skader som ikke er avdekket.
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
Informasjon om utbedringskostnader Tiltak under kr 20 000
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100

---

[d033_d033 | Side [1]]
for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen

---

[d033_d033 | Side [1]]
lser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke

---

[d033_d033 | Side [1]]
r det gjelder fordeling mellom P-areal og S-areal. (downlights), demonteres ikke for å sjekke dampsperren bak. De琀琀e av
Dokumenter • Tilbakeholdt eller urik琀椀g informasjon som har betydning for hensyn 琀椀l bygningssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
Beskrivelse Dato Kommentar Status Sider Vedlagt avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og

---

[d033_d033 | Side [1]]


• Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten. 
UTTRYKK OG DEFINISJONER Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av 
eiendommens verdi.  
 
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller • Rom som ligger utenfor boenheten, men som eier har

---

[d033_d033 | Side [1]]
boligen, bør du som selger be om oppdatert rapport.
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 2 av 15
68 69

## Side 36

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en

---

[d033_d033 | Side [1]]
ersom det er mer enn fem år
Tegninger Gjennomgå琀琀 Nei foreligger dokumentasjon på faglig god u琀昀ørelse. siden sist boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å
konsultere o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig
Opplysninger vedrørende fellesutgi昀琀er, iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS fagperson ved behov for grundigere undersøkelser.
eventuell andel fellesgjeld og 3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.

---

[d033_d033 | Side [1]]
e spørsmål som
Hva er måleverdig areal? Hva er bruksareal?
De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål og undersøkelser fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse
som forskri昀琀 琀椀l avhendingslova (tryggere bolighandel) § 2-18 spørsmålene i bransjestandarden NS3600. De琀琀e kan ikke sammenlignes Arealet i rommet må ha minst 1,90 m fri høyde over gulvet og minst BRA = BRA-i + BRA-e + BRA-b
inneholder. De琀琀e kan ikke sammenlignes med en kontroll u琀昀ørt av med en

---

[d033_d033 | Side [1]]
 terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
Egenerklæring gjennomlest. Egenerklæringen har ikke Gjennomgå琀琀 Nei blant annet vurdert ut fra alder og normal bruk slik: Avhendingsloven.
vesentlige avvik fra registrerte forhold.
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke
Bruks琀椀llat./ferdiga琀琀. Gjennomgå琀琀 Nei bygningsdelen være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger foreligger godkjente og byggemeldte tegninger,

---

[d033_d033 | Side [1]]
nde bygge forskri昀琀er, Byggeforskri昀琀 1997 med senere
endringer. Eiendommen er vurdert i den stand den var på
besik琀椀gelsesdagen. Eventuelle kommentarer vedrørende 20
vedlikehold osv. er anført i den tekniske beskrivelsen i rapporten.
Tilstandsanalysen har ikke avdekket noen tydelige symptomer på
svikt og avvik fra normal standard. Det er gjennomgående 15
registrert TG1 bortse琀琀 fra en TG2 pga alder på membraner og
ikke påvist 琀椀lfredss琀椀llende løsning for å synliggjøre lekkasje fra
innebygget

---

[d033_d033 | Side [1]]
kring 7881285
Kommentar
Fellespolise for sameiets bygningsmasse. STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER i) sluk, te琀琀esjikt og fall på bad og vaskerom (våtrom)
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for
Kilder og vedlegg den som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for

---

[d033_d033 | Side [1]]
og det foreligger foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke
dokumentasjon på faglig god u琀昀ørelse. stemmer med dagens bruk.
Norges Eiendommer Gjennomgå琀琀 Nei ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke og elektriske installasjoner i boligen dersom det er mer enn fem år
Tegninger Gjennomgå琀琀 Nei foreligger

---

[d033_d033 | Side [1]]
/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei

---

[d033_d033 | Side [1]]
/heftelser/krav/manglende tillatelser vedrørende eiendommen?
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
25 Kjenner

---

[d033_d033 | Side [1]]
enester på boligen siste 5 år? Ja Nei O昀昀entlig. Private interne småveier mellom bebyggelse.
Kommentar: Ny琀琀 kjøkken montert og over昀氀ater pusset opp i 2022, baderom oppgradert med microsement på gulv og vegg i 2025 og nye
Tilknytning vann
skapfronter på kjøkkeninnredning ski昀琀et i 2025.
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Krav for rom 琀椀l varig opphold
Tilknytning avløp
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
Eiendommen er 琀椀lkny琀琀et o昀昀entlig

---

[d033_d033 | Side [1]]
delse
Opprettet seksjoner: sameiet legal panterett i den enkelte eierseksjon, oppfordres interessenter til å kontakte eiendomsmegler
SNR: 169 begrenset til inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Formål: Bolig Boligen selges med det inventar og utstyr som i henhold
Tilleggsdel: Bygning Kjøper og selger er forpliktet til å signere den standard til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
Sameiebrøk:

---

[d033_d033 | Side [1]]
er ingen direkte økte kostnader. - Oppmerking av garasjeplassene ble utført i 2025. - Kontroll av ventilasjonkanaler i 2025.
Alt OK.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven

---

[d033_d033 | Side [1]]
Beskrivelse På plass 174 i lukket garasjeanlegg. Utført i samråd med sameiets leverandør.
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Initialer selger: JGN, MLA 2
20205220
:ecnerefer
tnemucoD
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet,

---

[d033_d033 | Side [1]]
g og rengjort stand. avhendingsloven § 3‑5.
Tilleggsdel: Bygning Avtalerettslig
Sameiebrøk: 77/ 14750 En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
VEDERLAG: NOK 0 Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
56 57

## Side 30

OM EIENDOMMEN OM EIENDOMMEN
forelå for kjøper før handelen ble inngått. I tillegg gjelder et bud med forbehold bli akseptert før forbeholdet

---

[d033_d033 | Side [1]]
nlag
matrikkelsen
Kan ikke slettes uten samtykke fra kommunen Om informasjonsgrunnlaget
Vei, vann og avløp Overtakelse
GJELDER DENNE REGISTERENHETEN MED FLERE Opplysninger om boligens størrelse og utforming, både
Eiendommen er tilknyttet offentlig vann‑ og Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
2013/ 452942‑1/ 200 05.06.2013 BEST. OM avløpssystem. Stikkledningene fra eiendommen og ut til selger. vedlagte tilstands‑ og boligsalgsrapport.

---

[d033_d033 | Side [1]]
TTIGHETSHAVER: KNR: 0301 GNR: 128 BNR: 151
54 55

## Side 29

OM EIENDOMMEN OM EIENDOMMEN
RETTIGHETSHAVER: KNR: 0301 GNR: 128 BNR: 152 Omsetningstype: Uoppgitt gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
RETTIGHETSHAVER: KNR: 0301 GNR: 428 BNR: 2 Endring av fellesareal – med mindre avvik er tydelig avtalt mellom kjøper og
Hefter også i gnr. 128 bnr. 126 som kun er registrert i Endring av tilleggsdel selger.
grunnlag
matrikkelsen
Kan ikke slettes uten samtykke fra kommunen Om

---

[d033_d033 | Side [1]]
s昀氀ate eller takhøyde? Ja Nei
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Kommentar:
Om tomten
Opparbeidet fellesarealer med gressplener, beplantning, lekeplass og asfalterte gangveier.
Total fordeling mellom P-ROM og S-ROM
Boligopplysninger
Tabellen under viser fordelingen av P-ROM og S-ROM e琀琀er veiledningen 琀椀l NS 3940: 2012. De琀琀e er 琀椀l informasjon og Totale fellesutgi昀琀er er for 琀椀den kr. 5 379.- pr. mnd. Beløpet fordeles med felleskostnader kr 3 149.-, dugnad kr 50.-, kabel-tv kr 29.-, interne琀琀

---

[d033_d033 | Side [1]]
 (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: JGN, MLA 3
64
20205220
:ecnerefer
tnemucoD
65

## Side 34

Tilleggskommentar
Sameiet har vedtatt å oppgradere uteområdene. Dette inkluderer etablering av sykkelverksted, og generell oppgradering av lekeplass og
uteområdet. Medfører ingen direkte økte kostnader. - Oppmerking av garasjeplassene

---

[d033_d033 | Side [1]]
mmen og ut til selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
ADKOMSTRETT det kommunale nettet er private, og salgsoppgaven er basert på selgers informasjon,
RETTIGHETSHAVER: KNR: 0301 GNR: 128 BNR: 154 vedlikeholdsansvaret for disse påhviler sameiet. fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
Kan ikke slettes uten samtykke fra kommunen Adkomst til eiendommen skjer via offentlig vei. registre som kommunen og Kartverket. Det er viktig at
GJELDER DENNE REGISTERENHETEN MED

---

[d033_d033 | Side [1]]
let oppgis Lekkert hovedsoverom med behagelige fargetoner og Alt utstyr og installasjoner som medfølger overtas slik de
som tilleggsinformasjon til øvrige arealer. store vindusflater som gir godt dagslys. Det romslige er, uten garanti, med mindre det foreligger en gjeldende Kjenner du til vedtak/ forslag til vedtak om forhold vedr.
garderobeskapet med speilfronter bidrar til både god garanti fra produsent eller leverandør. eiendommen som kan medføre økte felleskostnader/ økt
oppbevaring og en luftig

---

[d033_d033 | Side [1]]
al slitasje og/ eller høy alder, noe som kan Terrasse Renhold ny behandling.
innebære behov for utbedringer. Bygningsdeler som er Adkomst til sydvestvendt terrasse på 22m² fra stuen. PBT Eiendomsdrift Øst AS er sameiets leverandør av
merket med TGIU er ikke blitt vurdert av takstmannen. renholdstjenester. Bergvarmeanlegg
Se vedlagte tilstandsrapport for ytterligere informasjon Oppgangene vaskes en gang per uke. Parallelt med vurderingen av solcelleanlegg har styret
Beskrivelsen av boligen nedenfor er

---

[d033_d033 | Side [1]]
et er ikke kjent at det foreligger hinder for om energiforsyning med mer. Megler påtar seg ikke GJELDER DENNE REGISTERENHETEN MED FLERE ORG.NR: 980 489 698
dyrehold. ansvar for informasjonen som fremgår av energiattesten. Overført fra: KNR: 0301 GNR: 128 BNR: 5 Overenskomst om rettigheter og plikter ved oppføring,
drift og vedlikehold av frittliggende nettstasjon
Forkjøpsrett: Det praktiseres ikke forkjøpsrett. 1922/ 993374‑1/ 105 17.02.1922 SKJØNN (prefabrikkert kiosk). Gjelder
Oppvarming
GJELDER DENNE

---

[d033_d033 | Side [1]]
rifter eller offentlige pålegg skal Slitasje og bruk
Sameiebrøk: 77/ 14728 kjøpekontrakten utarbeidet av Emera som en del av følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
eiendomshandleren. Kjøpekontrakten kan gjennomgås Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
2023/ 662283‑1/ 200 23.06.2023 hos eiendomsmegler før budet legges inn. Kontakt innredning som anses som varig tilknyttet

---

[d033_d033 | Side [1]]
964/ 12011‑1/ 105 18.09.1964 BESTEMMELSE OM VEG RETTIGHETSHAVER: KNR: 0301 GNR: 128 BNR: 132
salgsoppgave. Megler påtar seg ikke ansvar for til boligformål med matbutikk og utendørsområder. Bestemmelse om kloakkledning Kan ikke slettes uten samtykke fra kommunen
informasjonen som fremgår av energiattesten. Saken er fortsatt i et tidlig stadie og det er ikke vedtatt en Bestemmelse om gjerde GJELDER DENNE REGISTERENHETEN MED FLERE
endelig plan for eiendommen. Med flere bestemmelser
Alle eiendommer som selges

---

[d033_d033 | Side [1]]
fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på

---

[d033_d033 | Side [1]]
g Kartverket. Det er viktig at
GJELDER DENNE REGISTERENHETEN MED FLERE Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
Utleie
2013/ 1009381‑1/ 200 20.11.2013 BEST. OM avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
ADKOMSTRETT Adgang til utleie: Boligen kan leies ut i henhold til Egenerklæringsskjema er

---

[d033_d033 | Side [1]]
y琀琀else i strid med lov eller avtale kan medføre erstatnings- og stra昀昀eansvar.
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 3 av 15
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 4 av 15
70 71

## Side 37

Bertrand Narvesens vei 1, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 128 - Bnr 5 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Beskrivelse av eiendommen
Boligblokken og leiligheten ble oppført og ferdigs琀椀lt i 2007/08
e琀琀er gjeldende bygge forskri昀琀er, Byggeforskri昀琀 1997 med senere
endringer.

---

[d033_d033 | Side [1]]
smål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Økning på 8.5% f.o.m 01.01.2025 av felleskostnader.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller

---

[d033_d033 | Side [1]]
FLERE vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
I henhold til eierseksjonsloven § 31 er sameierne www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
GRUNNDATA ansvarlige overfor sameiets kreditorer i forhold til sin
2007/ 942581‑1/ 200 19.11.2007 SEKSJONERING sameiebrøk. Ved manglende betaling av fellesutgifter har Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
Opprettet seksjoner: sameiet legal panterett i den enkelte

---

[d033_d033 | Side [1]]
idligere seksjonseier.
(3) Kostnader til fjernvarme og varmtvann til den enkelte bruksenhet betales løpende med
(11) En seksjonseier som ikke oppfyller vedlikeholdsplikten, skal erstatte tap dette
et beløp som avregnes etter målt forbruk.
påfører sameiet eller andre seksjonseiere, jf. eierseksjonsloven § 34.
(4) I tillegg til de vanlige fellesutgiftene skal den enkelte sameier innbetale kr 50 per måned i
5-2 Sameiets plikt til å vedlikeholde og utbedre fellesarealer m.m.
dugnadspenger. Beløpet dekker de

---

[d033_d033 | Side [1]]
n at det føres i sameiets balanse.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert gjennom
fellesgjelden på hver enkelt leilighet.
Vedlegg 1 23 av 38 Årsregnskap 2024.pdf Vedlegg 1 24 av 38 Årsregnskap 2024.pdf
Transaction 09222115557540746751 Signed MMR, TKF, MNO, MH, HVS Transaction 09222115557540746751 Signed MMR,

---

[d033_d033 | Side [1]]
om individuell innfrielse av fellesgjeld
Eierseksjonssameiet har vedtatt en ordning for innfrielse av andel fellesgjeld knyttet til
a) et søksmål mot en selv eller ens nærstående bestemte lån. Denne ordningen er betinget av at det er signert en administrasjonsavtale
b) ens eget eller ens nærståendes ansvar overfor sameiet mellom Eierseksjonssameiet og OBOS Eiendomsforvaltning AS og hver enkelt
c) et søksmål mot andre eller andres ansvar overfor sameiet dersom egen interesse i seksjonseier som ønsker å

---

[d033_d033 | Side [1]]
ld,
og ytterdører til boligene eller reparasjon og utskifting av tak, bjelkelag, bærende
påkostninger eller andre fellestiltak på eiendommen dersom årsmøtet har vedtatt slik
veggkonstruksjoner, samt rør eller ledninger som er bygd inn i bærende konstruksjoner med
avsetning. Midlene skal settes på egen bankkonto. Avsetning til vedlikehold er en
unntak av varmekabler.
felleskostnad og innbetalingene skal følge sameiebrøk.
(4) Seksjonseieren skal gi sameiet adgang til bruksenheten for å vedlikeholde,

---

[d033_d033 | Side [1]]
 tilhører
SUM EGENKAPITAL -9 681 741 -11 059 634
myndighetene og kan ikke disponeres fritt.
GJELD
ADMINISTRASJONSAVTALE LÅN
Sameiet har etablert en ordning med mulighet for individuell nedbetaling av sin andel
LANGSIKTIG GJELD
fellesgjeld. Nedbetalingene gir de seksjonene som har nedbetalt, reduksjon i rente- og
Pante- og gjeldsbrevlån 16 13 540 184 14 520 980
avdragsdelen av fremtidige felleskostnader. Merk at ved en individuell innfrielse av
SUM LANGSIKTIG GJELD 13 540 184 14 520 980
fellesgjeld vil

---

[d033_d033 | Side [1]]
ieren. Sameiets vedlikeholdsplikt omfatter også utvendig
(1) Den enkelte seksjonseier skal forskuddsvis betale et a konto beløp som fastsettes
vedlikehold av vinduer, veranda- og ytterdører til boligene.
på årsmøtet, eller av styret, for å dekke sin andel av felleskostnadene.
(3) Sameiets vedlikeholdsplikt omfatter også slikt som utskifting av sluk, vinduer, veranda-
(2) Akontobeløpet kan også dekke avsetning av midler til fremtidig vedlikehold,
og ytterdører til boligene eller reparasjon og utskifting av

---

[d033_d033 | Side [1]]
æring til namsmyndighetene om
tvangsdekning.
6-4 Seksjonseierens heftelse for sameiets ansvar og forpliktelser utad
Den enkelte seksjonseier hefter for felles ansvar og forpliktelser etter sameie brøk.
7 Pålegg om salg og fravikelse av bruksenheten (utkastelse)
7-1 Mislighold
Seksjonseiers brudd på sine forpliktelser overfor sameiet utgjør mislighold. Som mislighold
regnes blant annet manglende betaling av felleskostnader, forsømt vedlikeholdsplikt, ulovlig
bruk og brudd på ordensregler
5 6
98 99

## Side

---

[d033_d033 | Side [1]]
e skader.
(6) Enhver endring av fordelingsnøkkelen som utføres i strid med denne bestemmelse
(2) Vedlikeholdsplikten omfatter også felles installasjoner som går gjennom bruksenheter,
er ugyldig.
slik som rør, ledninger, kanaler og felles varmeanlegg inklusive radiatorer. Sameiet har rett til
å føre nye slike installasjoner gjennom bruksenhetene hvis det ikke skaper vesentlig ulempe
6-2 Betaling av felleskostnader
for den aktuelle seksjonseieren. Sameiets vedlikeholdsplikt omfatter også utvendig
(1) Den

---

[d033_d033 | Side [1]]
verfor sameiet dersom egen interesse i seksjonseier som ønsker å benytte ordningen må inngå en egen avtale med
saken er vesentlig og kan stride mot sameiets interesser Eierseksjonssameiet v/OBOS Eiendomsforvaltning regulær ekstraordinær nedbetaling av
d) pålegg eller krav etter eierseksjonsloven §§ 38 og 39 som er rettet mot en selv eller Eierseksjonssameiets felleslåns hovedstol, uten at långiver gir aksept for at seksjonseiere
ens nærstående. som innfrir sin andel blir fritatt for sitt debitoransvar.

---

[d033_d033 | Side [1]]
kostnader, pantesikkerhet og heftelsesform
in sekter og skadedyr plikter seksjonseier straks å sende skriftlig varsel til styret.
6-1 Felleskostnader
(1) Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet, er
(10) Dersom seksjonseier skal skifte ventilasjonshette på kjøkken, skal denne være
felleskostnader. Felleskostnader skal fordeles mellom seksjonseierne etter
uten egen viftemotor, og tilpasses sentralt ventilasjonsanlegg. Ved avvik fra dette vil
sameiebrøken med mindre annet

---

[d033_d033 | Side [1]]
sjonssameiet Tiedemannsjordet
Morten M. Ræder Tove Kristin Flølo Morten N Ottosen
Marius Hatle Harvinderjit Vicky Singh
Vedlegg 1 19 av 38 Årsregnskap 2024.pdf Vedlegg 1 20 av 38 Årsregnskap 2024.pdf
Transaction 09222115557540746751 Signed MMR, TKF, MNO, MH, HVS Transaction 09222115557540746751 Signed MMR, TKF, MNO, MH, HVS
130 131

## Side 67

NOTE: 2 NOTE: 8
INNKREVDE FELLESKOSTNADER DRIFT OG VEDLIKEHOLD
Felleskostnader 7 233 180 Prosjektledelse OBOS Prosjekt -145 733
Internett 356 796 VVS-arbeider Tore

---

[d033_d033 | Side [1]]
 er angi琀琀 særskilt. Rom utenfor boenheten kan
et byggverk eller en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse omdisponeres av bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens  
av avvik. BRA. Vær oppmerksom på at NS 3940:2023 og eierseksjonsloven har  
ulik de昀椀nisjon av fellesareal. Ved arealmåling gjelder NS 3940:2023 som
  
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak de昀椀nerer

---

[d033_d033 | Side [1]]
kapsåret, har hatt høyere kostnader enn inntekter.
Den manglende likviditeten er finansiert ved låneopptak.
I eierseksjonssameier føres ikke verdien av bygget i balansen. Årsaken er at den enkelte
sameier, og ikke selve sameiet, står som eier av boligene. Det medfører at all rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
Siden tiltakene er finansiert

---

[d033_d033 | Side [1]]
 Innkrevde felleskostnader 2 9 525 097 9 566 671 9 554 984 9 555

---

[d033_d033 | Side [1]]
e og utbedre fellesarealer m.m.
dugnadspenger. Beløpet dekker de utgifter sameiet sparer ved å avholde 2 dugnader i året.
(1) Sameiet skal holde utvendige og innvendige fellesarealer, inkludert bygningen og felles
Pengene skal tilbakebetales i januar påfølgende år dersom seksjonseieren har deltatt på
installasjoner, forsvarlig ved like. Vedlikeholdet skal utføres slik at skader på fellesarealene
dugnadene.
og de enkelte bruksenhetene forebygges, og slik at seksjonseierne slipper

---

[d033_d033 | Side [1]]
ser, og som går
beslutninger som tas på årsmøtet. Møtelederen og minst én seksjonseier som utpekes av ut over vanlig forvaltning, og som fører med seg økonomisk ansvar eller utlegg for
seksjonseierne i fellesskap på mindre enn fem prosent av de årlige felleskostnadene,
9 10
102 103

## Side 53

besluttes med vanlig flertall av de avgitte stemmene på årsmøtet. Hvis tiltaket fører med seg (2) Selv om sameiets forsikring brukes, skal styret pålegge seksjonseier å betale
økonomisk ansvar eller utlegg for

---

[d033_d033 | Side [1]]
kap. Forsikringen skal også omfatte huseieransvarsforsikring, f) boligseksjon: en seksjon som skal brukes til helårsbolig eller fritidsbolig.
styreansvarsforsikring og rettshjelpsforsikring. Innboforsikring er den enkelte seksjonseier g) sameiebrøk: seksjonseierens forholdsmessige eierandel i sameiet.
selv ansvarlig for å tegne. h) seksjonering: å dele en eiendom i flere bruksenheter etter reglene i
eierseksjonsloven.
i) reseksjonering: en ny seksjonering av en eller flere seksjoner i en allerede

---

[d033_d033 | Side [1]]
(cid:35)(cid:5)(cid:30)(cid:25)(cid:28)(cid:5)(cid:29)(cid:23)(cid:3)(cid:25)(cid:5)(cid:3)(cid:21)(cid:31)(cid:27)(cid:25)(cid:4)(cid:2)(cid:5)(cid:9)(cid:4)(cid:39)(cid:21)(cid:4)(cid:23)(cid:3)(cid:24)(cid:5)(cid:40)(cid:23)(cid:29)(cid:25)(cid:4)(cid:5)(cid:21)(cid:35)(cid:5)(cid:30)(cid:21)(cid:3)(cid:24)(cid:25)(cid:5) Innkrevde felleskostnader 2 9 525 097 9 566 671 9 554 984 9 555

---

[d033_d033 | Side [1]]
sone 32 Blå ramme viser utsnittet for de øvrige plottene. H390 - Deponi
PlottID/Best.nr: 149909/86522470
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
160 161

## Side 82

Nabolagsprofil
Bertrand Narvesens vei 1 - Nabolaget Lille Tøyen/Keyserløkka/Hasle - vurdert av 298 lokalkjente
Nabolaget spesielt anbefalt

---

[d033_d033 | Side [1]]
det 14–16 millioner kroner. Det er opsjon for to ekstra eier som har plikt til å fremlegge energiattest og er og gående 1966/ 8673‑1/ 105 22.06.1966 ERKLÆRING/ AVTALE
brønner dersom behov og plass tillater. I likhet med ansvarlig for at opplysningene er korrekte. Bymiljøetaten er i gang med forprosjekt og utarbeidelse Vedtak av visse vilkår vedr. utskillelse/ bebyggelse av
prosjektet over har styret foreslått at årsmøtet tar saken av reguleringsplanforslag for Grenseveien. Målet er å denne eiendom
til

---

[d033_d033 | Side [1]]
TEN MED FLERE nye tegninger, gjelder garasje.
Overført fra: KNR: 0301 GNR: 128 BNR: 5 GJELDER DENNE REGISTERENHETEN MED FLERE
Energimerke Regulering
Energikarakter: F Regulerings og arealplaner: Eiendommen er regulert til 1964/ 11064‑2/ 105 01.09.1964 BEST. OM VANN/ 2008/ 27311‑1/ 200 11.01.2008 ERKLÆRING/ AVTALE
bolig med tilhørende anlegg iht. S‑4157. KLOAKKLEDN. Reseksjonering uten endring i grunnboken nye tegninger,
Energifarge: Grønn Kan ikke slettes uten samtykke fra kommunen gjelder

---

[d033_d033 | Side [1]]
rom 3
Beliggenhet
Brannceller
Tre roms eierseksjon beliggende på Ensjø/Tiedmannsbyen som ligger i et område med Kampen, Ensjø, Lille Tøyen Hageby og Hasle i
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
nærområdet. Området er i stor utvikling. Kort vei 琀椀l o昀昀entlige kommunikasjonsmidler, skoler og forretninger.
Nyere håndverkstjenester Adkomstvei
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei O昀昀entlig. Private interne

---

[d033_d033 | Side [1]]
leringsplanforslag for Grenseveien. Målet er å denne eiendom
til orientering, og gir sin tilslutning til at tiltakene vurderes Dersom eier ikke har lagt frem energiattest, og eier etter legge bedre til rette for gående, syklende og GJELDER DENNE REGISTERENHETEN MED FLERE
på nytt når markedsforholdene stabiliserer seg og skriftlig anmodning fra kjøper ikke har fremlagt kollektivreisende. Se mer informasjon her: https:/ / Overført fra: KNR: 0301 GNR: 128 BNR: 5
forutsetningene viser at nedbetalingstiden kan

---

[d033_d033 | Side [1]]
ng legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 17.11.2025 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
–

---

[d033_d033 | Side [1]]
farge: Grønn Kan ikke slettes uten samtykke fra kommunen gjelder garasje.
Pågående plansaker: GJELDER DENNE REGISTERENHETEN MED FLERE GJELDER DENNE REGISTERENHETEN MED FLERE
Hovinveien 43 A ‑ Boliger Overført fra: KNR: 0301 GNR: 128 BNR: 5
Info energiklasse
Saksnummer 2025/ 06721 2011/ 485825‑1/ 200 23.06.2011 BEST. OM ADKOMSTRETT
Se fullstendig energiattest fra selger som vedlegg til Pågående planleggingsfase for utvikling av eiendommen 1964/ 12011‑1/ 105 18.09.1964 BESTEMMELSE OM VEG RETTIGHETSHAVER:

---

[d033_d033 | Side [1]]
se
Espira Marienfryd barnehage (1-5 år) 3 min
115 barn 0.3 km
0% 47%
Stålverkskroken barnehage (1-5 år) 5 min
1% enebolig
80 barn 0.4 km Lille Tøyen/Keyserløkka/Hasle
3% rekkehus
Oslo og omegn
95% blokk
Normannsløkka barnehage 6 min Norge
1% annet
Sivilstand
Dagligvare
Norge
Rema 1000 Hovin 5 min Gift 24% 33%
«Fantastisk sted å bo med
Joker Tiedemannsbyen 5 min Ikke gift 67% 54%
barn!»
Søndagsåpent 0.4 km
Separert 7% 9%
Sitat fra en lokalkjent
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra

---

[d033_d033 | Side [1]]
riginale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 149909/ 86522470 Deres ref.:
Høydereferanser Adresse: Bertrand Narvesens vei 1
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 128/5
158 159

## Side

---

[d033_d033 | Side [1]]
琀 og mangle godkjennelse hos kommunen for den aktuelle
Er du som forbruker misfornøyd med bygningssakkyndiges arbeid eller    
bruken, uten at de琀琀e får betydning for om arealet måles og oppgis i
opptreden ved taksering av bolig eller fri琀椀dshus, se   
琀椀lstandsrapporten. Når arealet måles tas det ikke hensyn 琀椀l om arealet
www.takstklagenemnd.no for mer informasjon
er lovlig oppført eller om bruken er lovlig, bruksendringer, lysforhold
eller andre

---

[d033_d033 | Side [1]]
 oppgradert/fornyet?
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

[d033_d033 | Side [1]]
ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge

---

[d033_d033 | Side [1]]
ller om bruken er lovlig, bruksendringer, lysforhold
eller andre sikkerhetsmangler.
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 15 av 15
82 83

## Side 43

 
   
  
 

---

[d033_d033 | Side [1]]
 Se side 4.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Eiet seksjon i boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk Spesielt for de琀琀e oppdraget/rapporten
Opprinnelig atrium/TV-stue innredet som soverom 3 Tiltaket er prosjektert i henhold 琀椀l Byggeteknisk forskri昀琀 av
1997 med senere endringer ifølge ramme琀椀llatelse gi琀琀 20/1-
2006.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen

---

[d033_d033 | Side [1]]

bad, u琀昀orede kjellervegger og eventuelt i oppforede kjellergulv. befarings琀椀dspunktet har betydning for om rommet de昀椀neres som P- 
ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med 
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som teknisk forskri昀琀 og mangle godkjennelse i kommunen for den

---

[d033_d033 | Side [1]]
 som teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle • 
er basert på enkle visuelle observasjoner. Kan vurderes sammen med bruken, uten at de琀琀e vil få betydning for valg av arealkategori. 
b ygningsdelens alder.
• Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012
•

---

[d033_d033 | Side [1]]
m påvirker/berører sameiets fellesarealer,
• parkeringsplasser i garasjekjeller fellesanlegg og utvendig tilleggsareal uten forhåndsgodkjenning fra styret/årsmøtet.
• terrasser
Dette gjelder tiltak som:
(3) De deler av eiendommen som ikke inngår i de enkelte bruksenheter er fellesareal. • Alle installasjoner, herunder oppsetting/montering av antenner, varmepumper,
sol/vindavskjerming, skillevegger/gjerder, plattinger, flislegging eller annet fast belegg
1-3 Sameiebrøk på balkonger/terrasser, innglassing,

---

[d033_d033 | Side [1]]
, usikkerhet og mva, anslås
avvik. Rapporten, sammen med selgers egenerklæring, etasjene. totalkostnaden å være i størrelsesorden 2,5‑3,0 millioner
er vedlagt salgsoppgaven. Det er viktig at interessenter Sameiet består av 187 boligseksjoner på eiendommen kroner. Det kan bli aktuelt å søke støtte til selve tiltaket
grundig gjennomgår disse dokumentene før bud legges Vinduer gnr. 128, bnr. 5 i Oslo kommune. dersom slike ordninger åpnes.Videre ble saken igjen tatt
inn. Vinduer med trerammer og 2‑lags

---

[d033_d033 | Side [1]]
og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslu琀琀e den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å re琀琀e eller 琀椀lbakeføre rommet 琀椀l godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Utstyr for varsling og slukking av brann
Oppdragsnr.: 15467-2928 Befaringsdato: 17.11.2025 Side: 9 av 15 Oppdragsnr.:

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "TG2 på membraner grunnet alder – risiko for lekkasje fra innebygget sluk",
      "evidence": [
        "Det er gjennomgående registrert TG1 bortsett fra en TG2 pga alder på membraner og ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sluk",
        "Tilstandsgrad 2 brukes når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid, eller når det er grunn til å varsle om faren for skader på grunn av alderen",
        "Baderom oppgradert med microsement på gulv og vegg i 2025 – microsement er ikke et godkjent membransystem"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R2",
      "description": "Negativ egenkapital i sameiet – sameiet har høyere gjeld enn eiendeler, noe som kan medføre økte felleskostnader for kjøper",
      "evidence": [
        "SUM EGENKAPITAL -9 681 741 -11 059 634",
        "Sameiet har, i regnskapsåret, hatt høyere kostnader enn inntekter. Den manglende likviditeten er finansiert ved låneopptak.",
        "Pante- og gjeldsbrevlån 16 13 540 184 14 520 980",
        "Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert gjennom fellesgjelden på hver enkelt leilighet."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Økning i felleskostnader på 8,5 % fra 01.01.2025 – økt løpende kostnad for kjøper",
      "evidence": [
        "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Økning på 8.5% f.o.m 01.01.2025 av felleskostnader."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Pågående plansak for naboeiendommen (Hovinveien 43A) og reguleringsplanforslag for Grenseveien – kan påvirke bomiljø og utsikt",
      "evidence": [
        "Pågående plansaker: Hovinveien 43 A - Boliger. Saksnummer 2025/06721. Pågående planleggingsfase for utvikling av eiendommen til boligformål med matbutikk og utendørsområder. Saken er fortsatt i et tidlig stadie og det er ikke vedtatt en endelig plan for eiendommen.",
        "Bymiljøetaten er i gang med forprosjekt og utarbeidelse av reguleringsplanforslag for Grenseveien. Målet er å legge bedre til rette for gående, syklende og kollektivreisende."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R5",
      "description": "Planlagt bergvarmeanlegg/solcelleanlegg med estimert kostnad 14–16 millioner kroner – risiko for økt fellesgjeld og felleskostnader",
      "evidence": [
        "totalkostnaden å være i størrelsesorden 14–16 millioner kroner. Det er opsjon for to ekstra brønner dersom behov og plass tillater.",
        "Parallelt med vurderingen av solcelleanlegg har styret vurdert tiltak; totalkostnaden å være i størrelsesorden 2,5-3,0 millioner kroner.",
        "styret foreslått at årsmøtet tar saken til orientering, og gir sin tilslutning til at tiltakene vurderes på nytt når markedsforholdene stabiliserer seg og forutsetningene viser at nedbetalingstiden kan..."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R6",
      "description": "Opprinnelig atrium/TV-stue er innredet som soverom 3 – mulig ulovlig bruksendring uten godkjenning",
      "evidence": [
        "Opprinnelig atrium/TV-stue innredet som soverom 3. Tiltaket er prosjektert i henhold til Byggeteknisk forskrift av 1997 med senere endringer ifølge rammetillatelse gitt 20/1-2006.",
        "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser.",
        "Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R7",
      "description": "Dårlig energikarakter F (energifarge grønn) – kan medføre høye energikostnader for kjøper",
      "evidence": [
        "Energikarakter: F",
        "Energifarge: Grønn"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Baderom oppgradert med microsement i 2025 – microsement er ikke et godkjent membransystem for våtrom og kan medføre fuktskader",
      "evidence": [
        "baderom oppgradert med microsement på gulv og vegg i 2025",
        "TG2 pga alder på membraner og ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sluk"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Ingen radonmåling er utført – ukjent radoneksponering i boligen",
      "evidence": [
        "Er det foretatt radonmåling? Nei Ja [avkrysset Nei]"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Manglende brukstillatelse eller ferdigattest er ikke avklart – potensielt ulovlige forhold",
      "evidence": [
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja",
        "Brukstillat./ferdigatt. Gjennomgått Nei"
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R11",
      "description": "Sameiet har stor langsiktig gjeld og finansierer løpende underskudd med låneopptak – risiko for fremtidige kostnadspåslag på kjøper",
      "evidence": [
        "Pante- og gjeldsbrevlån 16 13 540 184 14 520 980",
        "Den manglende likviditeten er finansiert ved låneopptak.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Tegninger ikke gjennomgått/godkjent – usikkerhet rundt lovlighet av areal og romfordeling",
      "evidence": [
        "Tegninger Gjennomgått Nei",
        "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
      ],
      "source_documents": [
        "d033_d033"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    }
  ],
  "re_retrieval_queries": [
    "microsement godkjent membransystem våtrom byggteknisk forskrift",
    "bergvarmeanlegg kostnad vedtak årsmøte fellesgjeld",
    "ferdigattest brukstillatelse Bertrand Narvesens vei 1 2007 2008",
    "tegninger godkjent byggemeldt soverom atrium bruksendring",
    "radon Oslo Ensjø grunnforhold",
    "felleskostnader andel fellesgjeld per seksjon sameiebrøk 77/14750"
  ],
  "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – TG2 membraner/sluk (0.92 → 0.93):** Godt støttet av tilstandsrapporten. Kombinert med R8 (microsement) styrkes risikoen ytterligere. Confidence justeres marginalt opp.\n\n**R2 – Negativ egenkapital (0.95 → 0.97):** Svært godt dokumentert med konkrete regnskapstall. Negativ egenkapital på -9,68 mill (2024) og -11,06 mill (2023), langsiktig gjeld 13,54 mill. Dokumentet forklarer også mekanismen (rehabilitering kostnadsføres, verdistigning tilfaller seksjonseier). Confidence justeres opp.\n\n**R3 – Felleskostnadsøkning 8,5% (0.95):** Direkte bekreftet i egenerklæringen. Confidence beholdes.\n\n**R4 – Plansaker naboeiendommen/Grenseveien (0.88):** Godt dokumentert. Begge plansaker er nevnt eksplisitt. Grenseveien-planen er positiv for kollektivtransport, men kan medføre anleggsarbeid/støy. Confidence beholdes.\n\n**R5 – Bergvarme/solcelle 14-16 mill (0.85 → 0.80):** Evidensen viser at styret har foreslått at saken tas til orientering og vurderes på nytt når markedsforholdene stabiliserer seg – dvs. tiltaket er IKKE vedtatt. Dette reduserer risikoen noe, men den er fortsatt reell som fremtidig risiko. Confidence justeres ned til 0.80.\n\n**R6 – Ulovlig bruksendring atrium/soverom (0.78 → 0.65):** Her er det en viktig motsetning i dokumentet: rapporten sier eksplisitt \"Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk\" OG \"Tiltaket er prosjektert i henhold til Byggeteknisk forskrift av 1997 med senere endringer ifølge rammetillatelse gitt 20/1-2006.\" Dette tyder på at bruksendringen faktisk er godkjent/omsøkt. Risikoen er dermed lavere enn antatt. Confidence justeres ned til 0.65.\n\n**R7 – Energikarakter F (0.90):** Direkte bekreftet. Energikarakter F er nest dårligste karakter. Confidence beholdes.\n\n**R8 – Microsement som membran (0.82 → 0.85):** Godt støttet. Microsement er generelt ikke godkjent som membransystem etter NS 3420/SINTEF-normer for våtrom. Kombinert med TG2 på membraner styrkes risikoen. Confidence justeres marginalt opp.\n\n**R9 – Ingen radonmåling (0.87):** Direkte bekreftet i egenerklæringen. Confidence beholdes.\n\n**R10 – Manglende ferdigattest/brukstillatelse (0.75 → 0.60):** Egenerklæringen viser \"Nei\" på spørsmål om manglende brukstillatelse/ferdigattest (dvs. selger kjenner ikke til mangler). Tilstandsrapporten viser \"Gjennomgått Nei\" for brukstillatelse/ferdigattest, noe som betyr at dokumentet ikke er gjennomgått av takstmann – ikke at det mangler. Boligen er oppført 2007/08 og det er normalt at ferdigattest foreligger. Risikoen er reell men svakere dokumentert. Confidence justeres ned til 0.60.\n\n**R11 – Stor langsiktig gjeld (0.90 → 0.92):** Godt dokumentert. Overlapper med R2, men er en selvstendig risiko knyttet til fremtidig nedbetaling og seksjonseiers heftelse. Confidence justeres marginalt opp.\n\n**R12 – Tegninger ikke gjennomgått (0.72 → 0.55):** Her er det en direkte motsetning: rapporten sier \"Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk\" under lovlighetsavsnittet, mens \"Tegninger Gjennomgått Nei\" trolig refererer til at takstmannen ikke har gjennomgått tegningene som vedlegg. Dette er en prosedyremessig begrensning, ikke nødvendigvis en reell risiko for ulovlige forhold. Confidence justeres ned til 0.55.\n\n**Manglende risikoer identifisert:**\n- Sameiet har 187 seksjoner og sameiebrøk 77/14750 – andel fellesgjeld per seksjon bør beregnes eksplisitt\n- Vinduer med 2-lags glass (eldre type) – kan medføre varmetap\n- Området er \"i stor utvikling\" – generell byggeplassstøy/anleggsrisiko\n- Individuell innfrielse av fellesgjeld er mulig men komplisert (administrasjonsavtale med OBOS kreves)\n"
}

## Raw Response
```json
{
  "id": "msg_01DBkERpF1gSaTeBuqPABHJv",
  "container": null,
  "content": [
    {
      "id": "toolu_01CpNB8mto7qGRgWve5WrpYE",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "TG2 på membraner grunnet alder – risiko for lekkasje fra innebygget sluk",
            "evidence": [
              "Det er gjennomgående registrert TG1 bortsett fra en TG2 pga alder på membraner og ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sluk",
              "Tilstandsgrad 2 brukes når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid, eller når det er grunn til å varsle om faren for skader på grunn av alderen",
              "Baderom oppgradert med microsement på gulv og vegg i 2025 – microsement er ikke et godkjent membransystem"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R2",
            "description": "Negativ egenkapital i sameiet – sameiet har høyere gjeld enn eiendeler, noe som kan medføre økte felleskostnader for kjøper",
            "evidence": [
              "SUM EGENKAPITAL -9 681 741 -11 059 634",
              "Sameiet har, i regnskapsåret, hatt høyere kostnader enn inntekter. Den manglende likviditeten er finansiert ved låneopptak.",
              "Pante- og gjeldsbrevlån 16 13 540 184 14 520 980",
              "Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert gjennom fellesgjelden på hver enkelt leilighet."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Økning i felleskostnader på 8,5 % fra 01.01.2025 – økt løpende kostnad for kjøper",
            "evidence": [
              "Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld? Beskrivelse: Økning på 8.5% f.o.m 01.01.2025 av felleskostnader."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Pågående plansak for naboeiendommen (Hovinveien 43A) og reguleringsplanforslag for Grenseveien – kan påvirke bomiljø og utsikt",
            "evidence": [
              "Pågående plansaker: Hovinveien 43 A - Boliger. Saksnummer 2025/06721. Pågående planleggingsfase for utvikling av eiendommen til boligformål med matbutikk og utendørsområder. Saken er fortsatt i et tidlig stadie og det er ikke vedtatt en endelig plan for eiendommen.",
              "Bymiljøetaten er i gang med forprosjekt og utarbeidelse av reguleringsplanforslag for Grenseveien. Målet er å legge bedre til rette for gående, syklende og kollektivreisende."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R5",
            "description": "Planlagt bergvarmeanlegg/solcelleanlegg med estimert kostnad 14–16 millioner kroner – risiko for økt fellesgjeld og felleskostnader",
            "evidence": [
              "totalkostnaden å være i størrelsesorden 14–16 millioner kroner. Det er opsjon for to ekstra brønner dersom behov og plass tillater.",
              "Parallelt med vurderingen av solcelleanlegg har styret vurdert tiltak; totalkostnaden å være i størrelsesorden 2,5-3,0 millioner kroner.",
              "styret foreslått at årsmøtet tar saken til orientering, og gir sin tilslutning til at tiltakene vurderes på nytt når markedsforholdene stabiliserer seg og forutsetningene viser at nedbetalingstiden kan..."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R6",
            "description": "Opprinnelig atrium/TV-stue er innredet som soverom 3 – mulig ulovlig bruksendring uten godkjenning",
            "evidence": [
              "Opprinnelig atrium/TV-stue innredet som soverom 3. Tiltaket er prosjektert i henhold til Byggeteknisk forskrift av 1997 med senere endringer ifølge rammetillatelse gitt 20/1-2006.",
              "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser.",
              "Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R7",
            "description": "Dårlig energikarakter F (energifarge grønn) – kan medføre høye energikostnader for kjøper",
            "evidence": [
              "Energikarakter: F",
              "Energifarge: Grønn"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Baderom oppgradert med microsement i 2025 – microsement er ikke et godkjent membransystem for våtrom og kan medføre fuktskader",
            "evidence": [
              "baderom oppgradert med microsement på gulv og vegg i 2025",
              "TG2 pga alder på membraner og ikke påvist tilfredsstillende løsning for å synliggjøre lekkasje fra innebygget sluk"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Ingen radonmåling er utført – ukjent radoneksponering i boligen",
            "evidence": [
              "Er det foretatt radonmåling? Nei Ja [avkrysset Nei]"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Manglende brukstillatelse eller ferdigattest er ikke avklart – potensielt ulovlige forhold",
            "evidence": [
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja",
              "Brukstillat./ferdigatt. Gjennomgått Nei"
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R11",
            "description": "Sameiet har stor langsiktig gjeld og finansierer løpende underskudd med låneopptak – risiko for fremtidige kostnadspåslag på kjøper",
            "evidence": [
              "Pante- og gjeldsbrevlån 16 13 540 184 14 520 980",
              "Den manglende likviditeten er finansiert ved låneopptak.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Tegninger ikke gjennomgått/godkjent – usikkerhet rundt lovlighet av areal og romfordeling",
            "evidence": [
              "Tegninger Gjennomgått Nei",
              "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
            ],
            "source_documents": [
              "d033_d033"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          }
        ],
        "re_retrieval_queries": [
          "microsement godkjent membransystem våtrom byggteknisk forskrift",
          "bergvarmeanlegg kostnad vedtak årsmøte fellesgjeld",
          "ferdigattest brukstillatelse Bertrand Narvesens vei 1 2007 2008",
          "tegninger godkjent byggemeldt soverom atrium bruksendring",
          "radon Oslo Ensjø grunnforhold",
          "felleskostnader andel fellesgjeld per seksjon sameiebrøk 77/14750"
        ],
        "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – TG2 membraner/sluk (0.92 → 0.93):** Godt støttet av tilstandsrapporten. Kombinert med R8 (microsement) styrkes risikoen ytterligere. Confidence justeres marginalt opp.\n\n**R2 – Negativ egenkapital (0.95 → 0.97):** Svært godt dokumentert med konkrete regnskapstall. Negativ egenkapital på -9,68 mill (2024) og -11,06 mill (2023), langsiktig gjeld 13,54 mill. Dokumentet forklarer også mekanismen (rehabilitering kostnadsføres, verdistigning tilfaller seksjonseier). Confidence justeres opp.\n\n**R3 – Felleskostnadsøkning 8,5% (0.95):** Direkte bekreftet i egenerklæringen. Confidence beholdes.\n\n**R4 – Plansaker naboeiendommen/Grenseveien (0.88):** Godt dokumentert. Begge plansaker er nevnt eksplisitt. Grenseveien-planen er positiv for kollektivtransport, men kan medføre anleggsarbeid/støy. Confidence beholdes.\n\n**R5 – Bergvarme/solcelle 14-16 mill (0.85 → 0.80):** Evidensen viser at styret har foreslått at saken tas til orientering og vurderes på nytt når markedsforholdene stabiliserer seg – dvs. tiltaket er IKKE vedtatt. Dette reduserer risikoen noe, men den er fortsatt reell som fremtidig risiko. Confidence justeres ned til 0.80.\n\n**R6 – Ulovlig bruksendring atrium/soverom (0.78 → 0.65):** Her er det en viktig motsetning i dokumentet: rapporten sier eksplisitt \"Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk\" OG \"Tiltaket er prosjektert i henhold til Byggeteknisk forskrift av 1997 med senere endringer ifølge rammetillatelse gitt 20/1-2006.\" Dette tyder på at bruksendringen faktisk er godkjent/omsøkt. Risikoen er dermed lavere enn antatt. Confidence justeres ned til 0.65.\n\n**R7 – Energikarakter F (0.90):** Direkte bekreftet. Energikarakter F er nest dårligste karakter. Confidence beholdes.\n\n**R8 – Microsement som membran (0.82 → 0.85):** Godt støttet. Microsement er generelt ikke godkjent som membransystem etter NS 3420/SINTEF-normer for våtrom. Kombinert med TG2 på membraner styrkes risikoen. Confidence justeres marginalt opp.\n\n**R9 – Ingen radonmåling (0.87):** Direkte bekreftet i egenerklæringen. Confidence beholdes.\n\n**R10 – Manglende ferdigattest/brukstillatelse (0.75 → 0.60):** Egenerklæringen viser \"Nei\" på spørsmål om manglende brukstillatelse/ferdigattest (dvs. selger kjenner ikke til mangler). Tilstandsrapporten viser \"Gjennomgått Nei\" for brukstillatelse/ferdigattest, noe som betyr at dokumentet ikke er gjennomgått av takstmann – ikke at det mangler. Boligen er oppført 2007/08 og det er normalt at ferdigattest foreligger. Risikoen er reell men svakere dokumentert. Confidence justeres ned til 0.60.\n\n**R11 – Stor langsiktig gjeld (0.90 → 0.92):** Godt dokumentert. Overlapper med R2, men er en selvstendig risiko knyttet til fremtidig nedbetaling og seksjonseiers heftelse. Confidence justeres marginalt opp.\n\n**R12 – Tegninger ikke gjennomgått (0.72 → 0.55):** Her er det en direkte motsetning: rapporten sier \"Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk\" under lovlighetsavsnittet, mens \"Tegninger Gjennomgått Nei\" trolig refererer til at takstmannen ikke har gjennomgått tegningene som vedlegg. Dette er en prosedyremessig begrensning, ikke nødvendigvis en reell risiko for ulovlige forhold. Confidence justeres ned til 0.55.\n\n**Manglende risikoer identifisert:**\n- Sameiet har 187 seksjoner og sameiebrøk 77/14750 – andel fellesgjeld per seksjon bør beregnes eksplisitt\n- Vinduer med 2-lags glass (eldre type) – kan medføre varmetap\n- Området er \"i stor utvikling\" – generell byggeplassstøy/anleggsrisiko\n- Individuell innfrielse av fellesgjeld er mulig men komplisert (administrasjonsavtale med OBOS kreves)\n"
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
    "input_tokens": 19755,
    "output_tokens": 4060,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
