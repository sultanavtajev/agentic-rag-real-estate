# Trace: agentic_reflecting_iter1
- **Run ID:** fed8f014-65d3-4053-b151-d1ce04285d49
- **Tidspunkt:** 2026-03-23T21:18:12.094277+00:00
- **Varighet:** 119.23s
- **Input tokens:** 23512
- **Output tokens:** 5899

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
Risiko 1: Ingen radonmåling er utført. Selger har ikke gjennomført radonmåling av boligen, noe som innebærer en potensiell helserisiko for kjøper dersom radonverdiene er høye.
  Confidence: 0.95
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 2: Flere pågående reguleringsplaner og plansaker i nærområdet kan medføre vesentlige endringer i omgivelsene, herunder økt byggehøyde, støy og endret arealbruk nær vassdrag og kulturminner.
  Confidence: 0.92
  Evidens: Det pågår flere konkrete detaljreguleringssaker i nærområdet. Blant disse er forprosjekt med reguleringsplan for Frognerparken (saksnr. 202461838).; Planforslaget avviker fra gjeldende kommuneplan blant annet når det gjelder byggehøyder, støyforhold og tiltak nær vassdrag.; Tiltaket vil bli konsekvensutredet på grunn av prosjektets omfang og beliggenhet nær kulturminner og vassdrag.; Eiendommen ligger i et område med flere pågående plansaker og byggesaker. Vi oppfordrer alle interessenter til å undersøke forholdene grundigere.

Risiko 3: Legalpant som ikke fremgår av grunnboken. Kommunen og sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan overraske kjøper.
  Confidence: 0.95
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 4: Tilstandsrapporten er kun en visuell befaring (nivå 1) uten åpning av konstruksjoner. Skjulte feil og mangler kan eksistere som ikke er avdekket, og kjøper bærer risikoen for disse.
  Confidence: 0.93
  Evidens: Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.; Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.; IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket.

Risiko 5: Tilstandsrapporten vurderer ikke bygningens fellesdeler som tak, yttervegger, grunnmur og drenering. Kjøper har dermed begrenset informasjon om tilstanden til disse kritiske bygningsdelene.
  Confidence: 0.9
  Evidens: Tilstandsrapporten tilstandsvurderer derfor ikke bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles...; Rapporten begrenser seg til boligen/leiligheten og det som normalt vil omfattes av eiers selvstendige vedlikeholdsansvar som eier.

Risiko 6: Vanninstallasjoner er klassifisert som risikokonstruksjon. Alder, foretting og brudd kan være risikomomenter, og det anbefales regelmessig service og vedlikehold.
  Confidence: 0.88
  Evidens: Vanninstallasjoner anses som en risikokonstruksjon/utsatt bygningsdel og det anbefales regelmessig service og vedlikehold.; Alder, foretting og brudd kan være risikomomenter i et hvert anlegg.

Risiko 7: Sameiet har ingen sikringsordning for fellesgjeld. Dersom sameiet pådrar seg gjeld, er sameierne ansvarlige i henhold til sin sameiebrøk uten noen form for sikring.
  Confidence: 0.87
  Evidens: Sameiet har ingen sikringsordning.; I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.

Risiko 8: Parkeringsplasser, boder og tekniske rom ligger i en separat fradelt anleggseiendom (gnr 38, bnr 334). Eiere med parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplassen til andre leilighetseiere, noe som begrenser selgers frihet.
  Confidence: 0.85
  Evidens: Parkeringsplasser, sykkelparkering, boder og tekniske rom ligger i en egen fradelt anleggseiendom under bakken med gnr 38, bnr 334.; Eiere som har leilighet og parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplass til eiere av leilighet i boligsameiet.; Anleggseiendommen ligger i et tingsrettslig sameie mellom eierne av parkeringsplassene og det er fastsatt egne vedtekter for sameiet som eier...

Risiko 9: Tinglyste heftelser og rettigheter fra 1926 og 1928 som ikke kan slettes uten samtykke fra kommunen. Disse gamle heftelsene kan medføre begrensninger på eiendommens bruk.
  Confidence: 0.82
  Evidens: 03.09.1926 – Dokumentnr: 900851 – Best. om adkomstrett. Med flere bestemmelser.; 09.03.1928 – Dokumentnr: 901271 – Bestemmelse om bebyggelse. Bestemmelse om benyttelse. Med flere bestemmelser.; Kan ikke slettes eller endres uten samtykke fra kommunen.

Risiko 10: Eiendommen tilfredsstiller ikke nødvendigvis dagens byggeforskrifter for tetthet, ventilasjon og varmeisolering, da den er vurdert etter regler gjeldende på byggetidspunktet.
  Confidence: 0.88
  Evidens: Den tilfredsstiller ikke nødvendigvis alle de krav som dagens byggeforskrifter stiller til bl.a. tetthet, ventilasjon og varmeisolering.; Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.

Risiko 11: Felleskostnadene kan øke over tid som følge av beslutninger i sameiet. Kjøper bør være oppmerksom på at nåværende felleskostnader på kr 6 208,- pr. mnd ikke er garantert å forbli uendret.
  Confidence: 0.85
  Evidens: Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over tid som følge av beslutninger foretatt i sameiet.; Felleskostnader TV/Internett/Bredbånd: kr 6 208,- pr. mnd.

Risiko 12: Begrensning på eierskap – ingen kan eie mer enn to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes også med, noe som kan begrense investorer.
  Confidence: 0.8
  Evidens: Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23.; Seksjoner som eies av nærstående eller gjennom et firma regnes også med.

Risiko 13: Planlagt utbygging ved Sørkedalsveien 10 (Wahl Eiendom AS) kan påvirke nærområdet med økt trafikk, støy og endret bylandskap. Tiltaket krever dispensasjon fra plan- og bygningsloven.
  Confidence: 0.83
  Evidens: Det er igangsatt detaljreguleringsarbeid for Sørkedalsveien 10 på vegne av Wahl Eiendom AS og BA Wahl Invest AS.; Økning i gesimshøyde medfører at tiltaket er avhengig av dispensasjon fra pbl § 29-4 angående høyde og avstand til nabogrense.; Tiltakets bruksareal ønskes økt fra 13010m² til 14761m², en økning på 1751m².

Risiko 14: Ladeinntekter for el-bil er vesentlig lavere enn budsjettert (kr 35 970 mot budsjettert kr 90 000, en avvik på 60%). Dette kan indikere underbudsjettering eller lavere inntekter enn forventet for sameiet.
  Confidence: 0.78
  Evidens: Ladeinntekter EL-bil: Regnskap 35 970, Budsjett 90 000, Differanse kr 54 030, Differanse % 60%.

Risiko 15: Kjøper er forpliktet til å signere en standardkjøpekontrakt utarbeidet av Emera. Dette kan begrense kjøpers forhandlingsrom og mulighet til å tilpasse kontraktsvilkårene.
  Confidence: 0.75
  Evidens: Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren.

Dokumentkontekst:
[d028_d028 | Side [1]]
i Tinglyste heftelser
nærområdet. Blant disse er forprosjekt med Tinglyste heftelser og rettigheter: På eiendommen er det
reguleringsplan for Frognerparken (saksnr. 202461838). tinglyst følgende heftelser og rettigheter som følger
Videre arbeides det med regulering av boligutvikling i eiendommens matrikkel ved overskjøting til ny
Holmboes gate 8 og Majorstuveien 5 B (saksnr. hjemmelshaver:
202205283), samt detaljregulering for området
Kristinelundveien/ Halvdan Svartes gate m.fl. (saksnr. 301/ 38/ 90/

---

[d028_d028 | Side [1]]
ten med flere
Gjelder denne registerenheten med flere
15.12.2016 ‑ Dokumentnr: 1166203 ‑ Erklæring/ avtale
01.11.2016 ‑ Dokumentnr: 1004076 ‑ Bestemmelse om veg Rettighetshaver: Knr:0301 Gnr:38 Bnr:333
Rettighetshaver: Knr:0301 Gnr:38 Bnr:334 Bestemmelse om rett til ferdsel og opphold
Kan ikke slettes eller endres uten samtykke fra Bestemmelse om midlertidig plassering av lift i
kommunen forbindelse med vindusvask
Overført fra: Knr:0301 Gnr:38 Bnr:90 Med flere bestemmelser
Gjelder denne registerenheten med

---

[d028_d028 | Side [1]]
ameiebrøk: 87/ 8587
bygningsmasse/ anlegg
Kan ikke slettes eller endres uten samtykke fra Legalpant: Kommunen har legalpant som sikkerhet for
kommunen betaling av kommunale avgifter og eventuell
44

## Side 45

OM EIENDOMMEN
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til Diverse
sameieforholdet, som felleskostnader. Legalpant er pant Det informeres om at ingen kan eie mer enn to
som ikke vises i grunnboksutskriften, og har prioritet

---

[d028_d028 | Side [1]]
r det eiendomsskatt på boliger og fast
eiendom som overstiger en fastsatt verdi. Informasjonen
320 000 (Dokumentavgift) over er hentet fra eiendomsskattelistene.
545 (Tinglysingsgebyr ‑ hjemmel) http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
545 (Tinglysningsgebyr ‑ pantedokument) skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
321 090 (Omkostninger totalt)
Kommunale avgifter
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Informasjon:

---

[d028_d028 | Side [1]]
er enn to
som ikke vises i grunnboksutskriften, og har prioritet boligseksjoner i sameiet, i henhold til eierseksjonsloven §
foran tinglyste lån, for eksempel banklån på seksjonen. 23. Seksjoner som eies av nærstående eller gjennom et
Legalpant til kommunen har høyere prioritet enn firma regnes også med.
legalpant til sameiet.
I henhold til eierseksjonsloven § 31 er sameierne
ansvarlige overfor sameiets kreditorer i forhold til sin
Vei, vann og avløp sameiebrøk. Ved manglende betaling av fellesutgifter

---

[d028_d028 | Side [1]]
t hviler ikke odelsrett på eiendommen. boligselgerforsikring som dekker selgers ansvar etter
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Egenerklæringsskjema er vedlagt salgsoppgaven og
Radonmåling interessenter oppfordres til å gjennomgå denne før bud
Selger har ikke utført radonmåling. Det er ikke krav om inngis.
dette med mindre boligen er helt eller delvis utleid.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om

---

[d028_d028 | Side [1]]
kjøper og selger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1.

---

[d028_d028 | Side [1]]
tektsendring) som på en urimelig eller unødvendig måte
begrenser eller vanskeliggjør lovlig næringsvirksomhet i eiendommens næringsseksjoner.
Parkeringsplasser, sykkelparkering, boder og tekniske rom ligger i en egen fradelt
anleggseiendom under bakken med gnr 38, bnr 334. Sameiets rett til bruk er sikret gjennom en
tinglyst erklæring 2016/1004076. Anleggseiendommen ligger i et tingsrettslig sameie mellom
eierne av parkeringsplassene og det er fastsatt egne vedtekter for sameiet som eier

---

[d028_d028 | Side [1]]
salgsoppgaven, kan du kontakte megler for å få tilsendt
området. dokumentasjonen.F or mer informasjon om
reguleringsforhold, kontakt megler eller søk på
Tiltaket vil bli konsekvensutredet på grunn av prosjektets saksnummer, adresse eller gårds‑ og bruksnummer på
omfang og beliggenhet nær kulturminner og vassdrag. Plan‑ og bygningsetatens hjemmeside.
Det er ikke krav om eget planprogram.
Det pågår flere konkrete detaljreguleringssaker i Tinglyste heftelser
nærområdet. Blant disse er forprosjekt med

---

[d028_d028 | Side [1]]
/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: CVH 2
53006210
:ecnerefer
tnemucoD
52

## Side 53

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til

---

[d028_d028 | Side [1]]
nn og avløp sameiebrøk. Ved manglende betaling av fellesutgifter har
Adkomst vei : Offentlig, interne gang‑ og stikkveier. sameiet legal panterett i den enkelte eierseksjon,
Tilknytning vann : Offentlig begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Tilknytning avløp : Offentlig
Kjøper og selger er forpliktet til å signere den standard
kjøpekontrakten utarbeidet av Emera som en del av
Utleie eiendomshandleren. Kjøpekontrakten kan gjennomgås
Adgang til utleie: Boligen kan leies ut i samsvar med hos

---

[d028_d028 | Side [1]]
 Bnr:90 Med flere bestemmelser
Gjelder denne registerenheten med flere Overført fra: Knr:0301 Gnr:38 Bnr:90
Gjelder denne registerenheten med flere
01.11.2016 ‑ Dokumentnr: 1004076 ‑ Erklæring/ avtale
Rettighetshaver: Knr:0301 Gnr:38 Bnr:333 22.12.2016 ‑ Dokumentnr: 1194036 ‑ Erklæring/ avtale
Bestemmelse om reperasjon og vedlikehold av Bestemmelse om utleie og overdragelse av
bygningsmasse/ anlegg parkeringsrett for bnr. 90 og 333 i bnr. 334
Kan ikke slettes eller endres uten samtykke fra Overført fra:

---

[d028_d028 | Side [1]]
en å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr

---

[d028_d028 | Side [1]]
bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og standardtekster, som

---

[d028_d028 | Side [1]]
sgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt

---

[d028_d028 | Side [1]]
ler gjennom vedtektsendring) som på en urimelig eller unødvendig måte
begrenser eller vanskeliggjør lovlig næringsvirksomhet i eiendommens næringsseksjoner.
Parkeringsplasser, sykkelparkering, boder og tekniske rom ligger i en egen fradelt
anleggseiendom under bakken med gnr 38, bnr 334. Sameiets rett til bruk er sikret gjennom en
tinglyst erklæring 2016/1004076. Anleggseiendommen ligger i et tingsrettslig sameie mellom
eierne av parkeringsplassene og det er fastsatt egne vedtekter for sameiet som eier

---

[d028_d028 | Side [1]]
dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av

---

[d028_d028 | Side [1]]
34
Kan ikke slettes eller endres uten samtykke fra Overført fra: Knr:0301 Gnr:38 Bnr:90
kommunen Gjelder denne registerenheten med flere
Overført fra: Knr:0301 Gnr:38 Bnr:90
Gjelder denne registerenheten med flere 03.01.2017 ‑ Dokumentnr: 4931 ‑ Seksjonering
Opprettet seksjoner:
01.11.2016 ‑ Dokumentnr: 1004076 ‑ Erklæring/ avtale Snr: 64
Rettighetshaver: Knr:0301 Gnr:38 Bnr:334 Formål: Bolig
Bestemmelse om reperasjon og vedlikehold av Sameiebrøk: 87/ 8587
bygningsmasse/ anlegg
Kan ikke slettes eller

---

[d028_d028 | Side [1]]
dkomst vei : O昀昀entlig, interne gang- og s琀椀kkveier.
Tilknytning vann : O昀昀entlig
Tilknytning avløp : O昀昀entlig
Eiendomsopplysninger
Om tomten
Tomten er omkranset av variert vegetasjon.
Parkering er 琀椀lgjengelig i samsvar med gjeldende regler for området.
Samlet se琀琀 utgjør tomten et a琀琀rak琀椀vt og funksjonelt miljø.
Tinglyste/andre forhold
Felleskostnadene inkluderer fellesutgi昀琀er, kapitalkostnader, kommunale avgi昀琀er, felles bygningsforsikring, forretningsførsel, dri昀琀 og
vedlikehold m.m.
På generelt

---

[d028_d028 | Side [1]]
 til felles kjeller
Sammendrag selgers egenerklæring: Selgers og garasjeanlegg.
egenerklæringsskjema følger vedlagt salgsoppgaven. Yttervegger i bærende konstruksjon i stål og betong.
Interessenter oppfordres til å gjennomgå dette nøye. Det er prefabrikkert hulldekke elementer av betong som
etasjeskille.
Flat takkonstruksjon, utvendig tekket med takpapp/
Samsvarserklæring: Det fremgår av selgers dukmembran.
egenerklæringsskjema / tilstandsrapporten at det Grunnmur i betong og støpt såle, antatt

---

[d028_d028 | Side [1]]
 mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller

---

[d028_d028 | Side [1]]
avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand

---

[d028_d028 | Side [1]]
ordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som

---

[d028_d028 | Side [1]]
re i strid Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes
med teknisk forskrift og mangle godkjennelse hos kommunen for også utover det som er omtalt i rapporten.
den aktuelle bruken, uten at dette får betydning for om arealet Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå
måles og oppgis i tilstandsrapporten. Når arealet måles tas det 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.
ikke hensyn til om arealet er lovlig oppført eller om bruken er
lovlig,

---

[d028_d028 | Side [1]]
byggeåret.
Eier opplyser at anlegget varmer opp alle rom unnta琀琀 bod og baderom (sistnevnte med varmekabler).
Oppdragsnr.: 22030-26086 Befaringsdato: 03.03.2026 Side: 17 av 27
72

## Side 73

Fridtjof Nansens vei 5 B, 0369 OSLO Taksator AS
Gnr 38 - Bnr 90 Olaf Helsets vei 6
0301 OSLO 0694 OSLO
Tilstandsrapport
___
Vanninstallasjoner anses som en risikokonstruksjon/utsa琀琀 bygningsdel og det anbefales regelmessig service og vedlikehold.
Alder, forte琀紀ng og brudd kan være risikomomenter i et hvert

---

[d028_d028 | Side [1]]
ten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som

---

[d028_d028 | Side [1]]
et foreligger avvik fra normal slitasje eller
høy alder, som kan medføre behov for utbedringer.
Eiendommens
Bygningsdeler som er markert med TGIU er ikke
undersøkt av takstmannen.
tilstand
Takstmann: Taksator AS Nedenfor følger en beskrivelse av boligen basert på
tilstandsrapporten:
Type takst avholdt av takstmann: Tilstandsrapport Området består hovedsakelig av blokker.
Boligblokk oppført over 10 etasjer i tillegg til felles kjeller
Sammendrag selgers egenerklæring: Selgers og

---

[d028_d028 | Side [1]]
gen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN

---

[d028_d028 | Side [1]]
svar for bore琀琀slaget/sameiet er beskrevet men ikke nødvendigvis 琀椀lstandsvurdert.
Alder i seg selv er de昀椀nert som symptom på slitasje/u琀椀dsmessighet/svikt osv.
Det gjelder samtlige konstruksjoner, uanse琀琀 alder og 琀椀lstand.
Det betyr at en bygningsdel og konstruksjon kan få TG2 på bakgrunn av høy alder men fortsa琀琀 være i en brukbar 琀椀lstand og funksjon.
Bygningsdelers og konstruksjoners alder er i hovedsak vurdert ut fra Sintef sine leve琀椀dstabeller.
INNVENDIG
Over昀氀ater
Oppdragsnr.: 22030-26086

---

[d028_d028 | Side [1]]
e.
Den 琀椀lfredss琀椀ller ikke nødvendigvis alle de krav som dagens byggeforskri昀琀er s琀椀ller 琀椀l bl.a. te琀琀het, ven琀椀lasjon og varmeisolering.
Rapporten begrenser seg 琀椀l boligen/leiligheten og det som normalt vil omfa琀琀es av eiers selvstendige vedlikeholdsansvar som eier.
Normalt utgjør de琀琀e alt innenfor boligens/leilighetens y琀琀ervegger.
Tilstandsrapporten 琀椀lstandsvurderer derfor ikke bygningens fellesdeler som for eksempel tak, y琀琀ervegger, grunnmur, drenering, og felles

---

[d028_d028 | Side [1]]
arings琀椀dspunktet ikke observert forhold som indikerer vesentlig funksjonsnedse琀琀else eller behov for umiddelbare 琀椀ltak. Det bemerkes at
utvendige konstruksjoner kan forringes raskere over 琀椀d som følge av værpåvirkning, og jevnlig e琀琀ersyn anbefales.
Tilstandsgrad er sa琀琀 ut fra en helhetlig vurdering.
Andre utvendige forhold
Beskrivelse
Beskrivelse av bygningen:
Boligblokk oppført over 10 etasjer i 琀椀llegg 琀椀l felles kjeller og garasjeanlegg.
Y琀琀ervegger i bærende konstruksjon i stål og betong.
Det er

---

[d028_d028 | Side [1]]
å en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering

---

[d028_d028 | Side [1]]
va.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre •

---

[d028_d028 | Side [1]]
ngslova.
Tilstandsgrader settes i henhold til NS3600.
Hjemmel er kontrollert utfra Norges eiendommer/Ambita.
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
Rapporten omfatter ikke tekniske vurderinger av fagområder som
termer og definisjoner punkt 3.9).
krever særskilt godkjenning eller kompetanse, herunder elektriske
anlegg, VVS-installasjoner og ildsteder.
AREALBEREGNING FOR BOENHETER Eier av boligen bør jevnlig sørge for

---

[d028_d028 | Side [1]]
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet:

---

[d028_d028 | Side [1]]
ld.
Alder, forte琀紀ng og brudd kan være risikomomenter i et hvert anlegg.
Tegn 琀椀l de琀琀e ble ikke observert på befaringsdagen.
Eier opplyste at systemet fungerer som det skal.
Tilstandsgrad er sa琀琀 ut ifra at anlegget fungerer som 琀椀ltenkt på nåværende 琀椀dspunkt.
Elektrisk anlegg
De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål og undersøkelser som forskri昀琀 琀椀l avhendingslova (tryggere bolighandel) § 2-18 inneholder. De琀琀e
kan ikke sammenlignes med en kontroll u琀昀ørt av o昀昀entlig myndighet (Det

---

[d028_d028 | Side [1]]
nsyn til om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler. Merk at dagens krav til isolering og tetthet mv er strengere enn da
bygget ble oppført. Tilstandsanalysen er basert på en visuell
befaring og registrering av symptomer.
•Eiendommens markedsverdi kan ikke baseres på en rent
matematisk beregning i forhold til antall kvadratmeter opplyst i
Rapporten begrenser seg til leiligheten/boligen og det som
rapporten. Opplysninger om areal kan

---

[d028_d028 | Side [1]]
 vei 5 B, 0369 OSLO Taksator AS
Gnr 38 - Bnr 90 Olaf Helsets vei 6
0301 OSLO 0694 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte

---

[d028_d028 | Side [1]]
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige

---

[d028_d028 | Side [1]]
lig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK

---

[d028_d028 | Side [1]]
orar, revisjon, forretningsførsel skal
fordeles med lik andel pr seksjon. Dersom eier/eierne av næringsseksjonene ikke krever
honorering av sine representanter i styret, skal kostnader etter dette avsnitt kun fordeles mellom
boligseksjonene.
Den enkelte sameier betaler akontobeløp fastsatt av sameiermøtet eller styret til dekning av sin
andel av felleskostnadene.
§ 8
Den enkelte sameiers vedlikeholdsplikt
Den enkelte sameier skal fullt ut og for egen regning holde bruksenheten med tilleggsareal

---

[d028_d028 | Side [1]]
orar, revisjon, forretningsførsel skal
fordeles med lik andel pr seksjon. Dersom eier/eierne av næringsseksjonene ikke krever
honorering av sine representanter i styret, skal kostnader etter dette avsnitt kun fordeles mellom
boligseksjonene.
Den enkelte sameier betaler akontobeløp fastsatt av sameiermøtet eller styret til dekning av sin
andel av felleskostnadene.
§ 8
Den enkelte sameiers vedlikeholdsplikt
Den enkelte sameier skal fullt ut og for egen regning holde bruksenheten med tilleggsareal

---

[d028_d028 | Side [1]]
er
Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet (felleskostnader)
fordeles på sameierne etter sameiebrøken med mindre annet fremgår av denne bestemmelse
eller særlige grunner taler for å fordele kostnadene etter nytten for den enkelte bruksenhet eller
etter forbruk.
Kostnader forbundet med fellesarealer hvor det er gitt rett til eksklusiv bruk, jf §§ 4.2.1, 4.2.2, skal
fordeles på de sameierne som har bruksretten. Uavhengig av denne bestemmelsen skal
kostnader som i det

---

[d028_d028 | Side [1]]
er
Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet (felleskostnader)
fordeles på sameierne etter sameiebrøken med mindre annet fremgår av denne bestemmelse
eller særlige grunner taler for å fordele kostnadene etter nytten for den enkelte bruksenhet eller
etter forbruk.
Kostnader forbundet med fellesarealer hvor det er gitt rett til eksklusiv bruk, jf §§ 4.2.1, 4.2.2, skal
fordeles på de sameierne som har bruksretten. Uavhengig av denne bestemmelsen skal
kostnader som i det

---

[d028_d028 | Side [1]]
lseier. Sameiet hefter
ikke for eventuelle skader på skadelidtes innbo og/eller løsøre.
Sameiet og skadelidte sameiere eller andelseiere kan kreve erstatning for tap som følger av at
sameieren misligholder sine plikter, etter samme regler i borettslagslovens §§ 5-13 og 5-15.
Sameier kan kreve erstatning for tap som følge av at sameiet ikke oppfyller pliktene sine, etter
samme regler som borettslagslovens § 5-18.

92

## Side 93

§ 11
Mislighold. Pålegg om salg og krav om fravikelse
Hvis en

---

[d028_d028 | Side [1]]
lseier. Sameiet hefter
ikke for eventuelle skader på skadelidtes innbo og/eller løsøre.
Sameiet og skadelidte sameiere eller andelseiere kan kreve erstatning for tap som følger av at
sameieren misligholder sine plikter, etter samme regler i borettslagslovens §§ 5-13 og 5-15.
Sameier kan kreve erstatning for tap som følge av at sameiet ikke oppfyller pliktene sine, etter
samme regler som borettslagslovens § 5-18.

100

## Side 101

§ 11
Mislighold. Pålegg om salg og krav om fravikelse
Hvis en

---

[d028_d028 | Side [1]]
 av
hele eller deler av eiendommen.
Sameiermøtet kan ikke treffe beslutning som er egnet til å gi visse sameiere eller andre en
urimelig fordel på andre sameieres bekostning.
§ 15
Forretningsfører
Sameiet skal ha forretningsfører. Styret ansetter forretningsfører og andre funksjonærer i
samsvar med lov om eierseksjoner § 41
§ 16
Forsikring
Sameiet er ansvarlig for at eiendommen til enhver tid holdes forsvarlig forsikret i et godkjent
selskap. Andre forsikringer er den enkelte sameier ansvarlig

---

[d028_d028 | Side [1]]
 av
hele eller deler av eiendommen.
Sameiermøtet kan ikke treffe beslutning som er egnet til å gi visse sameiere eller andre en
urimelig fordel på andre sameieres bekostning.
§ 15
Forretningsfører
Sameiet skal ha forretningsfører. Styret ansetter forretningsfører og andre funksjonærer i
samsvar med lov om eierseksjoner § 41
§ 16
Forsikring
Sameiet er ansvarlig for at eiendommen til enhver tid holdes forsvarlig forsikret i et godkjent
selskap. Andre forsikringer er den enkelte sameier ansvarlig

---

[d028_d028 | Side [1]]
anlegg" og
"andel kortsiktig gjeld i fellesanlegget".
Selskapets andel av driftkostnadene i selskapet er inntatt i resultatregnskapet under
posten "Garasjer".
Til orientering vedlegges sameiets regnskap.
Vedlegg 1 15 av 20 7536 Årsregnskap 2024.pdf
126

## Side 127

Resultatanalyse 2024
Rift Colosseum Eierseksjonssameie
Regnskap Budsjett Differanse kr Differanse %
Driftsinntekter
Innkrevde felleskostnader 4 608 036 4 276 000 -332 036 -8 %
Ladeinntekter EL-bil 35 970 90 000 54 030 60 %
Andre inntekter 196

---

[d028_d028 | Side [1]]
aketrukket
atmosfære og byliv.

## Side 32

Plantegning

## Side 33

Plantegning

## Side 34

FRIDTJOF NANSENS VEI 5B
OM EIENDOMMEN

## Side 35

OM EIENDOMMEN
OM EIENDOMMEN
er utarbeidet.
Økonomi
Sameiet har avtale med Ista om måleravregning. Det
Prisantydning betales a‑konto energi hver måned gjennom
Kr 12 800 000 felleskostnadene.
Omkostning kjøper Eiendomsskatt
12 800 000,00 (Prisantydning) Kr 4 606,‑ (2026)
Omkostninger I Oslo kommune er det eiendomsskatt på boliger og fast
eiendom som overstiger en

---

[d028_d028 | Side [1]]
uksenheter fra boligformål til et annet
formål.
• Tiltak som har sammenheng med sameiernes bo- eller bruksinteresser og som går utover
vanlig forvaltning og vedlikehold, når tiltaket fører med seg økonomisk ansvar eller utlegg
for sameierne på mer enn fem prosent av de årlige fellesutgiftene.
2. Følgende beslutninger krever tilslutning fra de sameierne det gjelder:
• At eierne av bestemte seksjoner skal ha plikt til å holde deler av fellesarealet ved like
utover det som følger av disse vedtekter jf. §§

---

[d028_d028 | Side [1]]
uksenheter fra boligformål til et annet
formål.
• Tiltak som har sammenheng med sameiernes bo- eller bruksinteresser og som går utover
vanlig forvaltning og vedlikehold, når tiltaket fører med seg økonomisk ansvar eller utlegg
for sameierne på mer enn fem prosent av de årlige fellesutgiftene.
2. Følgende beslutninger krever tilslutning fra de sameierne det gjelder:
• At eierne av bestemte seksjoner skal ha plikt til å holde deler av fellesarealet ved like
utover det som følger av disse vedtekter jf. §§

---

[d028_d028 | Side [1]]
-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 3 670 872
TV/bredbånd 603 432
Felleskostn.næring 214 392
Garasje 119 340
SUM INNKREVDE FELLESKOSTNADER 4 608 036
NOTE: 3
ANDRE INNTEKTER
Regnskapskorrigering 19
Fordeling vann 196 299
SUM ANDRE INNTEKTER 196 318
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -29 610
SUM PERSONALKOSTNADER -29 610
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året. Selskapet

---

[d028_d028 | Side [1]]
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Informasjon: Kommunale avgifter er iht
13 121 090 (Totalpris inkl. omkostninger) resultatregnskapet inkl i felleskostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Ingen lån registrert på selskap.
Sikringsordning
Estimert totalpris ink. omk Sameiet har ingen sikringsordning.
Kr 13 121 090
Andre kostnader:
Felleskostnader TV/ Internett/ Bredbånd: TV/ Internet inkludert i
Felleskostnader kr 6 208,‑ pr. mnd fellesavgiften er

---

[d028_d028 | Side [1]]
ke. Tepperens i gangene gjennomføres på
våren. Det vaskes også i fellesarealene for bodene en til Regnskap/ budsjett/ kostnadsøkninger: Regnskap ligger
to ganger per år. vedlagt i salgsoppgave.
Parkeringsplasser, sykkelparkering, boder, tekniske rom
ligger i fradelt anleggseiendom under bakken med gnr Vedtekter/ husordensregler
38 bnr 334, ideell 1/ 91. Realkobling der seksjon står som Vedtekter og husordensregler ligger vedlagt i
eier, skal følge v/ salg. Egne vedtekter for sameiet som salgsoppgave.
eier

---

[d028_d028 | Side [1]]
til vesentlig ulempe for sameieren. Sameieren skal gi adgang til bruksenheten for nødvendig
ettersyn og vedlikehold av installasjonene.
En sameier kan med styrets godkjenning gjennomføre tiltak på fellesarealene som er nødvendige
på grunn av sameierens eller husstandsmedlemmenes funksjonshemming. Godkjenning kan ikke
nektes uten saklig grunn. Denne bestemmelsen gjelder ikke for fellesarealer omfattet av § 4.2.1
over.
§ 7
Felleskostnader
Kostnader med eiendommen som ikke knytter seg til den enkelte

---

[d028_d028 | Side [1]]
til vesentlig ulempe for sameieren. Sameieren skal gi adgang til bruksenheten for nødvendig
ettersyn og vedlikehold av installasjonene.
En sameier kan med styrets godkjenning gjennomføre tiltak på fellesarealene som er nødvendige
på grunn av sameierens eller husstandsmedlemmenes funksjonshemming. Godkjenning kan ikke
nektes uten saklig grunn. Denne bestemmelsen gjelder ikke for fellesarealer omfattet av § 4.2.1
over.
§ 7
Felleskostnader
Kostnader med eiendommen som ikke knytter seg til den enkelte

---

[d028_d028 | Side [1]]
ent
selskap. Andre forsikringer er den enkelte sameier ansvarlig for.
§17
Mindretallsvern
Sameiermøtet, styret eller andre som representer sameiet kan ikke treffe beslutning som er egnet
til å gi visse sameiere eller andre en urimelig fordel på andre sameieres bekostning.
§ 18
Endringer i vedtektene

102

## Side 103

Endringer i sameiets vedtekter kan besluttes av sameiermøtet med minst 2/3 av de avgitte
stemmer om ikke lov om eierseksjoner stiller strengere krav. Endringer som angår én av

---

[d028_d028 | Side [1]]
kten ikke
ligger på sameierne.
Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom seksjonene, skal
sameiet holde ved like.
Sameiets vedlikeholdsplikt omfatter også utskifting av vinduer, herunder nødvendig utskiftning av
termoruter, og ytterdører knyttet til fellesarealer, reparasjon eller utskiftning av tak, bjelkelag,
bærende veggkonstruksjoner, balkonger, sluk og rør eller ledninger som er bygd inn i bærende
konstruksjoner med unntak av varmekabler.
Sameieren skal gi adgang

---

[d028_d028 | Side [1]]
e med flere pågående
plansaker og byggesaker. Vi oppfordrer alle interessenter
Planforslaget avviker fra gjeldende kommuneplan blant til å undersøke forholdene grundigere. Vi anbefaler at
annet når det gjelder byggehøyder, støyforhold og tiltak man setter seg godt inn i gjeldende reguleringskart og
nær vassdrag. Samtidig åpner kommunens bestemmelser. Dersom kopi av disse ikke følger
høyhusstrategi for vurdering av høyere bebyggelse i salgsoppgaven, kan du kontakte megler for å få tilsendt
området.

---

[d028_d028 | Side [1]]
angående høyde og avstand til nabogrense.
offentlig eller privat tjenesteyting. Tiltakets gesimshøyde fremgår av godkjente tegninger.
Kommuneplan: Bebyggelse og anlegg (fremtidig) Reguleringsarbeid – Sørkedalsveien 10
Området er avsatt til fremtidig bebyggelse og anlegg. Det Det er igangsatt detaljreguleringsarbeid for
kan være boligbebyggelse, fritidsbebyggelse, Sørkedalsveien 10 på vegne av Wahl Eiendom AS og BA
sentrumsformål, kjøpesenter, forretninger, bebyggelse for Wahl Invest AS. Planområdet

---

[d028_d028 | Side [1]]
senter, forretninger, bebyggelse for Wahl Invest AS. Planområdet omfatter eiendommen med
offentlig eller privat tjenesteyting, fritids‑ og turistformål, tilhørende veiarealer og grøntområder, og inkluderer
råstoffutvinning, næringsbebyggelse, idrettsanlegg, også deler av Fridthjof Nansens vei og Middelthuns gate
andre typer anlegg, uteoppholdsarealer og grav‑ og for å sikre helhetlige løsninger for trafikk og infrastruktur. I
urnelunder. tillegg vurderes tilgrensende friområder for å ivareta

---

[d028_d028 | Side [1]]
h. Det er viktig å merke seg at energiforbruket kan Det aktuelle tiltaket gjelder søknad om påbygg til
variere fra husstand til husstand. eksisterende kontorbygg. Dagens formål som kontor
videreføres. Tiltakets bruksareal ønskes økt fra 13010m²
til 14761m², en økning på 1751m². Økning i gesimshøyde
Regulerings og arealplaner medfører at tiltaket er avhengig av dispensasjon fra pbl §
Eiendommen er regulert til bolig/ forretning/ annen 29‑4 angående høyde og avstand til nabogrense.
offentlig eller privat

---

[d028_d028 | Side [1]]
g
effektiv adkomst til resten av byen. Flybussen stopper Det tas forbehold om endringer i prisene. For oppdatert
også i området, med enkel forbindelse til Oslo lufthavn. informasjon, se:oslo.kommune.no – beboerparkering
Området byr på et godt utvalg av barnehager og skoler i
36

## Side 37

OM EIENDOMMEN
Ferdigattest utstedes av bygningsmyndighetene basert
Adkomst på dokumentasjon mottatt fra kontrollansvarlig når et
På høyre side i annonsen finner du et kartutsnitt. Ved å søknadspliktig tiltak er utført i

---

[d028_d028 | Side [1]]
nelunder. tillegg vurderes tilgrensende friområder for å ivareta en
sammenhengende grønnstruktur langs Frognerbekken.
Pågående byggesaker Varslingsområdet utgjør ca. 23,4 dekar, og endelig
42

## Side 43

OM EIENDOMMEN
avgrensning fastsettes i videre planprosess. byutvikling fra Lysaker til og med Skøyen, som kan ses
på som en utvidelse av Fjordbyen. Fornebubanen er en
I kommuneplanen er eiendommen avsatt til fremtidig utvidelse av det eksisterende T‑banenettverket, fra
utbygging og inngår i

---

[d028_d028 | Side [1]]
ikring, forretningsførsel, dri昀琀 og
vedlikehold m.m.
På generelt grunnlag oppfordres alle 琀椀l å se琀琀e seg inn i vedtekter, husordensregler, regnskap, budsje琀琀 og årsberetning.
Dokumentene vil være 琀椀lgjengelig hos meglerforetaket. Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over 琀椀d som
følge av beslutninger foreta琀琀 i sameiet.
Bebyggelsen
Området består hovedsakelig av blokker.
Boligblokk oppført over 10 etasjer i 琀椀llegg 琀椀l felles kjeller og garasjeanlegg.
Y琀琀ervegger i

---

[d028_d028 | Side [1]]
stinelundveien/ Halvdan Svartes gate m.fl. (saksnr. 301/ 38/ 90/ 64:
202302013). 03.09.1926 ‑ Dokumentnr: 900851 ‑ Best. om
adkomstrett
For Sørkedalsveien 35–37 (gnr./ bnr. 39/ 53) foreligger det Med flere bestemmelser
et planforslag om utvikling til boligformål (saksnr. Overført fra: Knr:0301 Gnr:38 Bnr:90
201216928). Planen har tidligere vært på offentlig Gjelder denne registerenheten med flere
ettersyn.
09.03.1928 ‑ Dokumentnr: 901271 ‑ Bestemmelse om
Planprogram for Fornebubanen:

---

[d028_d028 | Side [1]]
lanprosess.
legger til rette for oppgradering og videreutvikling av
eksisterende bygningsmasse, inkludert oppføring av to Les mer om Fornebubanen her: https:/ /
bygg med boliger, kontor og næring. Eksisterende www.oslo.kommune.no/ slik‑bygger‑vi‑oslo/
parkeringsarealer foreslås omdisponert til torg. fornebubanen/ #toc‑1
Prosjektet kan gi rundt 70 boliger og ca. 9 000 m² nytt
næringsareal. Eiendommen ligger i et område med flere pågående
plansaker og byggesaker. Vi oppfordrer alle

---

[d028_d028 | Side [1]]
okumentnr: 901271 ‑ Bestemmelse om
Planprogram for Fornebubanen: bebyggelse
Planprogrammet er første fase i arbeidet med Bestemmelse om benyttelse
reguleringsplaner for Fornebubanen og tilknyttet Med flere bestemmelser
43

## Side 44

OM EIENDOMMEN
Overført fra: Knr:0301 Gnr:38 Bnr:90 Overført fra: Knr:0301 Gnr:38 Bnr:90
Gjelder denne registerenheten med flere Gjelder denne registerenheten med flere
12.12.1956 ‑ Dokumentnr: 15082 ‑ Skjønn 01.11.2016 ‑ Dokumentnr: 1004076 ‑ Best. om vann/
OVERFØRT FRA:

---

[d028_d028 | Side [1]]
erere
Veldig trygt 83/100
Naboskapet
Offentlig transport Høflige 52/100
Majorstuen i Sørkedalsveien 2 min
Linje FB1, 2B, 2N, 28, 45 0.2 km
Aldersfordeling
Majorstuen 3 min
T-bane, buss, trikk 0.3 km
Majorstuen 5 min Linje 1, 2, 3, 4, 5 0.4 km
Majorstuen i Majorstukrysset 5 min
Linje 11 0.4 km
Skøyen stasjon 6 min
Buss, flytog, tog, trikk 2.9 km
Skoler
Majorstuen skole (1-10 kl.) 3 min
658 elever, 43 klasser 0.3 km
Marienlyst skole (1-10 kl.) 17 min
971 elever, 65 klasser 1.4 km
Skøyen skole (1-7 kl.) 16

---

[d028_d028 | Side [1]]
e turmuligheter året også utover eventuell maksparkeringstid, på plasser
rundt, store friarealer og et unikt skulpturlandskap. reservert for beboere.
Gjeldende priser for beboerparkering i bydelene Frogner,
For den trenings‑ og aktivitetsglade er området ideelt, St. Hanshaugen, Gamle Oslo, Grünerløkka og Sagene –
med gangavstand til idrettsanlegg og innenfor sonene A, B, C, D og E – er som følger:
rekreasjonsområder. Det er også kort vei til Universitetet i
Oslo på Blindern, noe som gjør boligen attraktiv

---

[d028_d028 | Side [1]]
 av det eksisterende T‑banenettverket, fra
utbygging og inngår i utviklingsområde U2, som gjelder Majorstuen til Fornebu. Banen bygges i samarbeid med
sentrumsnære områder og knutepunkter. Oslo kommune og Viken fylkeskommune.
T‑banestrekningen skal gå i tunnel fra Majorstuen til
Dagens eiendom består av kjøpesenter, kontorer, Fornebu. Planprogrammet redegjør for videre planarbeid
tjenesteyting samt parkering på bakkeplan. Planforslaget og planprosess.
legger til rette for oppgradering og videreutvikling

---

[d028_d028 | Side [1]]
, garasjesameiet. Eiere som har leilighet og
samtidig som du har umiddelbar nærhet til byens parkeringsplass er ved salg av leilighet pliktet til å selge
pulserende tilbud. parkeringsplass til eiere av leilighet i boligsameiet. Salg
og utleie av parkeringsplass håndteres direkte mellom
Fra boligen er det kort gange til populære handlegater, eiere, ofte via enten Vibbo eller en ikke offisiell fb‑gruppe
kaféer og restauranter på Majorstuen, samt et bredt som noen beboere har tatt initiativ til. Det medfølger

---

[d028_d028 | Side [1]]
rfamilier
Boligmasse
0% 59%
99% blokk
Colosseum
1% annet
Oslo og omegn
Norge
Sivilstand
Norge
Gift 20% 33%
«Majorstua er et sentralt sted med
Ikke gift 65% 54%
mange hyggelige mennesker. Alt i alt,
et fint sted.» Separert 11% 9%
Sitat fra en lokalkjent
Enke/Enkemann 4% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for

---

[d028_d028 | Side [1]]
og til annet som er i samsvar med tiden og forholdene.
Bruken av fellesarealene må ikke på en urimelig eller unødvendig måte være til skade eller
ulempe for andre sameiere.
Det er avtalt rett til eksklusiv bruk av enkelte fellesarealer for hhv. boligseksjonene og
næringsseksjonene iht eierseksjonsloven § 19, 5. ledd, jf. pkt. 4.2.1 og 4.2.2 nedenfor. Den
eksklusive bruken gis varighet så lenge loven tillater. Arealene er nærmere angitt i en bruks- og
vedlikeholdsplan vedlagt disse vedtektene (vedlegg

---

[d028_d028 | Side [1]]
sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: CVH 3
53006210
:ecnerefer
tnemucoD
53

## Side 54

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og

---

[d028_d028 | Side [1]]
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks –

---

[d028_d028 | Side [1]]
endingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven §

---

[d028_d028 | Side [1]]
rk at en oppdatering av rapport etter en viss tid kan medføre
en merkostnad.
NB!
Takstrapporten er en viktig del av avtalegrunnlaget.
Kunden/rekvirent må derfor lese nøye igjennom for å sjekke at de
opplysningene som er gitt er korrekte.
Vi minner om at selger er pliktig til å opplyse om alle forhold ved
eiendommen som kan ha betydning for en kjøper.
Dersom det er presiseringer etter ytterligere informasjon som må
inntas, ber vi om å få beskjed om dette snarest etter utkastet er
sendt.
Oppdragsnr.:

---

[d028_d028 | Side [1]]
.
inngis med en frist som åpenbart er for kort til at
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller

---

[d028_d028 | Side [1]]
s «som
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold

---

[d028_d028 | Side [1]]
 er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller

---

[d028_d028 | Side [1]]
øke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom

---

[d028_d028 | Side [1]]
avers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2021
Hvor lenge har du eid boligen?
Antall år 5
Antall måneder 1
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap If
Polise/avtalenr. 6905319
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: CVH

---

[d028_d028 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til

---

[d028_d028 | Side [1]]
gkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg &
45

## Side 46

OM EIENDOMMEN
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i

---

[d028_d028 | Side [1]]
igkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe

---

[d028_d028 | Side [1]]
er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: CVH 4
53006210
:ecnerefer
tnemucoD
54

## Side 55

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Cecilie Haakull a3c471099970089f62f85 03.03.2026 Signer authenticated by
835bbd89df1706c1e63 19:30:58 UTC One time code
→ This is a

---

[d028_d028 | Side [1]]
åre
samarbeidspartene er:
Søderberg & Partners AS ‑ formidler av boligselger‑ og
49

## Side 50

FRIDTJOF NANSENS VEI 5B

## Side 51

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Oslo Vest
Oppdragsnr.
01260035
Selger 1 navn
Cecilie Vik Haakull
Gateadresse
Fridtjof Nansens vei 5B
Poststed Postnr
OSLO 0369
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du

---

[d028_d028 | Side [1]]
forsinket, er dette et mislighold fra
kjøpers side. Et vesentlig mislighold kan gi selger rett til å Ved avbrutt oppdrag:
heve avtalen og til å gjennomføre dekningssalg for Dersom oppdraget sies opp eller utløper uten at salget
kjøpers regning. gjennomføres, har megler krav på rimelig vederlag for
medgått tid og for utført arbeid. Dette omfatter blant
Dersom selger ikke bidrar til at megler får gjennomført annet vederlag knyttet til tilrettelegging, markedsføring
løpende kundetiltak underveis i oppdraget,

---

[d028_d028 | Side [1]]
gjengelig dokumentasjon som
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon

---

[d028_d028 | Side [1]]
ene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
135

## Side 136

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
136

## Side 137

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette

---

[d028_d028 | Side [1]]
slitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder som utgangspunkt for hva som

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ingen radonmåling er utført. Selger har ikke gjennomført radonmåling av boligen, noe som innebærer en potensiell helserisiko for kjøper dersom radonverdiene er høye.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Egenerklæringsskjema spørsmål 21: 'Er det foretatt radonmåling? Nei'"
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Flere pågående reguleringsplaner og plansaker i nærområdet kan medføre vesentlige endringer i omgivelsene, herunder økt byggehøyde, støy og endret arealbruk nær vassdrag og kulturminner.",
      "evidence": [
        "Det pågår flere konkrete detaljreguleringssaker i nærområdet. Blant disse er forprosjekt med reguleringsplan for Frognerparken (saksnr. 202461838).",
        "Planforslaget avviker fra gjeldende kommuneplan blant annet når det gjelder byggehøyder, støyforhold og tiltak nær vassdrag.",
        "Tiltaket vil bli konsekvensutredet på grunn av prosjektets omfang og beliggenhet nær kulturminner og vassdrag.",
        "Eiendommen ligger i et område med flere pågående plansaker og byggesaker. Vi oppfordrer alle interessenter til å undersøke forholdene grundigere.",
        "Planprogram for Fornebubanen er første fase i arbeidet med reguleringsplaner for Fornebubanen og tilknyttet byutvikling."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Legalpant som ikke fremgår av grunnboken. Kommunen og sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan overraske kjøper.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Tilstandsrapporten er kun en visuell befaring (nivå 1) uten åpning av konstruksjoner. Skjulte feil og mangler kan eksistere som ikke er avdekket, og kjøper bærer risikoen for disse.",
      "evidence": [
        "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.",
        "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.",
        "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket.",
        "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Tilstandsrapporten vurderer ikke bygningens fellesdeler som tak, yttervegger, grunnmur og drenering. Kjøper har dermed begrenset informasjon om tilstanden til disse kritiske bygningsdelene.",
      "evidence": [
        "Tilstandsrapporten tilstandsvurderer derfor ikke bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles...",
        "Rapporten begrenser seg til boligen/leiligheten og det som normalt vil omfattes av eiers selvstendige vedlikeholdsansvar som eier.",
        "Boligblokk oppført over 10 etasjer i tillegg til felles kjeller og garasjeanlegg. Yttervegger i bærende konstruksjon i stål og betong. Flat takkonstruksjon, utvendig tekket med takpapp/dukmembran. Grunnmur i betong og støpt såle, antatt."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Vanninstallasjoner er klassifisert som risikokonstruksjon. Alder, foretting og brudd kan være risikomomenter, og det anbefales regelmessig service og vedlikehold.",
      "evidence": [
        "Vanninstallasjoner anses som en risikokonstruksjon/utsatt bygningsdel og det anbefales regelmessig service og vedlikehold.",
        "Alder, foretting og brudd kan være risikomomenter i et hvert anlegg.",
        "Tegn til dette ble ikke observert på befaringsdagen. Eier opplyste at systemet fungerer som det skal."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Sameiet har ingen sikringsordning for fellesgjeld. Dersom sameiet pådrar seg gjeld, er sameierne ansvarlige i henhold til sin sameiebrøk uten noen form for sikring.",
      "evidence": [
        "Sameiet har ingen sikringsordning.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.",
        "Ingen lån registrert på selskap (per nå, men ingen garanti for fremtiden)."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R8",
      "description": "Parkeringsplasser, boder og tekniske rom ligger i en separat fradelt anleggseiendom (gnr 38, bnr 334). Eiere med parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplassen til andre leilighetseiere, noe som begrenser selgers frihet.",
      "evidence": [
        "Parkeringsplasser, sykkelparkering, boder og tekniske rom ligger i en egen fradelt anleggseiendom under bakken med gnr 38, bnr 334.",
        "Eiere som har leilighet og parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplass til eiere av leilighet i boligsameiet.",
        "Anleggseiendommen ligger i et tingsrettslig sameie mellom eierne av parkeringsplassene og det er fastsatt egne vedtekter for sameiet som eier.",
        "Salg og utleie av parkeringsplass håndteres direkte mellom eiere, ofte via enten Vibbo eller en ikke offisiell fb-gruppe."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R9",
      "description": "Tinglyste heftelser og rettigheter fra 1926 og 1928 som ikke kan slettes uten samtykke fra kommunen. Disse gamle heftelsene kan medføre begrensninger på eiendommens bruk.",
      "evidence": [
        "03.09.1926 – Dokumentnr: 900851 – Best. om adkomstrett. Med flere bestemmelser.",
        "09.03.1928 – Dokumentnr: 901271 – Bestemmelse om bebyggelse. Bestemmelse om benyttelse. Med flere bestemmelser.",
        "Kan ikke slettes eller endres uten samtykke fra kommunen.",
        "Overført fra: Knr:0301 Gnr:38 Bnr:90 – Gjelder denne registerenheten med flere."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen tilfredsstiller ikke nødvendigvis dagens byggeforskrifter for tetthet, ventilasjon og varmeisolering, da den er vurdert etter regler gjeldende på byggetidspunktet.",
      "evidence": [
        "Den tilfredsstiller ikke nødvendigvis alle de krav som dagens byggeforskrifter stiller til bl.a. tetthet, ventilasjon og varmeisolering.",
        "Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.",
        "Avvik er vurdert ut fra tekniske forskrifter på godkjenningstidspunktet for bygget."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Felleskostnadene kan øke over tid som følge av beslutninger i sameiet. Kjøper bør være oppmerksom på at nåværende felleskostnader på kr 6 208,- pr. mnd ikke er garantert å forbli uendret.",
      "evidence": [
        "Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over tid som følge av beslutninger foretatt i sameiet.",
        "Felleskostnader TV/Internett/Bredbånd: kr 6 208,- pr. mnd.",
        "Innkrevde felleskostnader 2024: Regnskap 4 608 036 mot budsjett 4 276 000 – en overskridelse på 8%."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Begrensning på eierskap – ingen kan eie mer enn to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes også med, noe som kan begrense investorer.",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23.",
        "Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Planlagt utbygging ved Sørkedalsveien 10 (Wahl Eiendom AS) kan påvirke nærområdet med økt trafikk, støy og endret bylandskap. Tiltaket krever dispensasjon fra plan- og bygningsloven.",
      "evidence": [
        "Det er igangsatt detaljreguleringsarbeid for Sørkedalsveien 10 på vegne av Wahl Eiendom AS og BA Wahl Invest AS.",
        "Økning i gesimshøyde medfører at tiltaket er avhengig av dispensasjon fra pbl § 29-4 angående høyde og avstand til nabogrense.",
        "Tiltakets bruksareal ønskes økt fra 13010m² til 14761m², en økning på 1751m².",
        "Planområdet inkluderer også deler av Fridthjof Nansens vei og Middelthuns gate for å sikre helhetlige løsninger for trafikk og infrastruktur."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Ladeinntekter for el-bil er vesentlig lavere enn budsjettert (kr 35 970 mot budsjettert kr 90 000, en avvik på 60%). Dette kan indikere underbudsjettering eller lavere inntekter enn forventet for sameiet.",
      "evidence": [
        "Ladeinntekter EL-bil: Regnskap 35 970, Budsjett 90 000, Differanse kr 54 030, Differanse % 60%.",
        "Innkrevde felleskostnader 2024: Regnskap 4 608 036 mot budsjett 4 276 000 – overskridelse på 8%."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R15",
      "description": "Kjøper er forpliktet til å signere en standardkjøpekontrakt utarbeidet av Emera. Dette kan begrense kjøpers forhandlingsrom og mulighet til å tilpasse kontraktsvilkårene.",
      "evidence": [
        "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R16",
      "description": "Felleskostnadene oversteg budsjettet med 8% i 2024 (kr 4 608 036 mot budsjettert kr 4 276 000). Dette kan indikere et underbudsjettert sameie og risiko for fremtidige kostnadsøkninger.",
      "evidence": [
        "Innkrevde felleskostnader: Regnskap 4 608 036, Budsjett 4 276 000, Differanse kr -332 036, Differanse % -8%.",
        "Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over tid som følge av beslutninger foretatt i sameiet."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R17",
      "description": "Elektrisk anlegg er kun forenklet kontrollert etter forskrift til avhendingslova, og kan ikke sammenlignes med en fullstendig kontroll utført av offentlig myndighet. Skjulte feil i det elektriske anlegget kan foreligge.",
      "evidence": [
        "Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser som forskrift til avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en kontroll utført av offentlig myndighet.",
        "Rapporten omfatter ikke tekniske vurderinger av fagområder som krever særskilt godkjenning eller kompetanse, herunder elektriske anlegg, VVS-installasjoner og ildsteder."
      ],
      "source_documents": [
        "d028_d028"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Hva er tilstandsgraden (TG) for bad, våtrom og kjøkken i tilstandsrapporten?",
    "Er det registrert konkrete TG2 eller TG3 avvik i tilstandsrapporten for leiligheten?",
    "Hva er sameiets vedlikeholdsplan og planlagte større vedlikeholdsarbeider fremover?",
    "Hva er energimerking og energikarakter for boligen?",
    "Er det registrert fukt, lekkasje eller vannskader i boligen eller bygget?",
    "Hva er sameiets totale økonomi og likviditet – er det opparbeidet tilstrekkelig vedlikeholdsfond?",
    "Hva er alder på bygget og hvilke bygningsdeler nærmer seg forventet levetid?",
    "Er det tinglyst servitutter eller bruksrettigheter som begrenser bruken av boligen eller fellesarealene?",
    "Hva er status for Fornebubanen og hvilken konkret påvirkning kan dette ha på eiendommen?",
    "Er det registrert ufaglært arbeid eller ulovlige byggetiltak i boligen?"
  ],
  "reasoning": "\nGjennomgangen av de 15 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og vurderinger er gjort:\n\n**Bekreftede og justerte risikoer:**\n- R1 (Radon): Bekreftet med høy confidence (0.95). Egenerklæringen bekrefter \"Nei\" på spørsmål om radonmåling.\n- R2 (Reguleringsplaner): Confidence justert opp til 0.93 da Fornebubanen-planprogrammet er et ytterligere moment som styrker risikoen.\n- R3 (Legalpant): Godt dokumentert, beholdes på 0.95.\n- R4 (Tilstandsrapport nivå 1): Confidence justert opp til 0.95 da tilleggsbevis fra rapporten styrker dette ytterligere.\n- R5 (Fellesdeler ikke vurdert): Confidence justert opp til 0.92 da bygningsbeskrivelsen (flat takkonstruksjon, betong, stål) understreker viktigheten av manglende vurdering.\n- R6 (Vanninstallasjoner): Confidence justert ned til 0.85 da det eksplisitt fremgår at ingen tegn til problemer ble observert og eier opplyser at systemet fungerer.\n- R7 (Ingen sikringsordning): Beholdes på 0.87. Ingen lån er registrert per nå, men mangel på sikringsordning er likevel en risiko.\n- R8 (Parkeringsplass): Confidence justert opp til 0.87 da det fremgår at salg håndteres uformelt via Vibbo/Facebook-gruppe, noe som er en tilleggsrisiko.\n- R9 (Gamle heftelser): Confidence justert ned til 0.80 da det ikke fremgår konkret hva heftelsene innebærer i praksis for kjøper.\n- R10 (Byggeforskrifter): Beholdes på 0.88, godt dokumentert.\n- R11 (Felleskostnader): Confidence justert opp til 0.87 da regnskapet viser 8% overskridelse av budsjettet i 2024.\n- R12 (Eierskapsbegrensning): Beholdes på 0.80. Relevant for investorer, men lavere praktisk risiko for ordinære kjøpere.\n- R13 (Sørkedalsveien 10): Beholdes på 0.85, godt dokumentert.\n- R14 (Ladeinntekter): Confidence justert ned til 0.75 da dette er et isolert regnskapsavvik som ikke nødvendigvis påvirker den individuelle kjøper direkte.\n- R15 (Standardkjøpekontrakt): Confidence justert ned til 0.70 da dette er en vanlig praksis i bransjen og ikke nødvendigvis en vesentlig risiko.\n\n**Nye risikoer identifisert:**\n- R16: Felleskostnadene oversteg budsjettet med 8% i 2024, noe som er et selvstendig risikosignal utover den generelle varselen om at kostnader kan variere.\n- R17: Elektrisk anlegg er kun forenklet kontrollert og ikke fullstendig gjennomgått av fagmyndighet.\n\n**Manglende informasjon som bør undersøkes:**\n- Konkrete TG2/TG3-avvik i tilstandsrapporten er ikke gjengitt i evidensen – dette er kritisk informasjon.\n- Sameiets vedlikeholdsfond og planlagte større vedlikeholdsarbeider er ikke dokumentert.\n- Energimerking er ikke nevnt i evidensen.\n- Alder på bygget og nærmer seg levetidsgrenser for kritiske bygningsdeler er ikke dokumentert.\n- Fukt/lekkasjehistorikk er ikke dokumentert (egenerklæringen spør om dette men svaret er ikke gjengitt).\n- Status for Fornebubanen og konkret påvirkning på eiendommen bør undersøkes nærmere.\n"
}

## Raw Response
```json
{
  "id": "msg_01FjwihCeGY5rX5892MgCpzd",
  "container": null,
  "content": [
    {
      "id": "toolu_01Go78LFzf2YhtEsfJEnsXBV",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ingen radonmåling er utført. Selger har ikke gjennomført radonmåling av boligen, noe som innebærer en potensiell helserisiko for kjøper dersom radonverdiene er høye.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Egenerklæringsskjema spørsmål 21: 'Er det foretatt radonmåling? Nei'"
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Flere pågående reguleringsplaner og plansaker i nærområdet kan medføre vesentlige endringer i omgivelsene, herunder økt byggehøyde, støy og endret arealbruk nær vassdrag og kulturminner.",
            "evidence": [
              "Det pågår flere konkrete detaljreguleringssaker i nærområdet. Blant disse er forprosjekt med reguleringsplan for Frognerparken (saksnr. 202461838).",
              "Planforslaget avviker fra gjeldende kommuneplan blant annet når det gjelder byggehøyder, støyforhold og tiltak nær vassdrag.",
              "Tiltaket vil bli konsekvensutredet på grunn av prosjektets omfang og beliggenhet nær kulturminner og vassdrag.",
              "Eiendommen ligger i et område med flere pågående plansaker og byggesaker. Vi oppfordrer alle interessenter til å undersøke forholdene grundigere.",
              "Planprogram for Fornebubanen er første fase i arbeidet med reguleringsplaner for Fornebubanen og tilknyttet byutvikling."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Legalpant som ikke fremgår av grunnboken. Kommunen og sameiet har legalpant som ikke vises i grunnboksutskriften, og som har prioritet foran tinglyste lån. Dette kan overraske kjøper.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Tilstandsrapporten er kun en visuell befaring (nivå 1) uten åpning av konstruksjoner. Skjulte feil og mangler kan eksistere som ikke er avdekket, og kjøper bærer risikoen for disse.",
            "evidence": [
              "Det gjøres oppmerksom på at dette er en tilstandsrapport på nivå 1, dvs. kun en visuell befaring, uten åpning av konstruksjoner.",
              "Ved evt. åpning av konstruksjoner kan feil og mangler avdekkes også utover det som er omtalt i rapporten.",
              "IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE: Det kan være avvik/skader som ikke er avdekket.",
              "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Tilstandsrapporten vurderer ikke bygningens fellesdeler som tak, yttervegger, grunnmur og drenering. Kjøper har dermed begrenset informasjon om tilstanden til disse kritiske bygningsdelene.",
            "evidence": [
              "Tilstandsrapporten tilstandsvurderer derfor ikke bygningens fellesdeler som for eksempel tak, yttervegger, grunnmur, drenering, og felles...",
              "Rapporten begrenser seg til boligen/leiligheten og det som normalt vil omfattes av eiers selvstendige vedlikeholdsansvar som eier.",
              "Boligblokk oppført over 10 etasjer i tillegg til felles kjeller og garasjeanlegg. Yttervegger i bærende konstruksjon i stål og betong. Flat takkonstruksjon, utvendig tekket med takpapp/dukmembran. Grunnmur i betong og støpt såle, antatt."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Vanninstallasjoner er klassifisert som risikokonstruksjon. Alder, foretting og brudd kan være risikomomenter, og det anbefales regelmessig service og vedlikehold.",
            "evidence": [
              "Vanninstallasjoner anses som en risikokonstruksjon/utsatt bygningsdel og det anbefales regelmessig service og vedlikehold.",
              "Alder, foretting og brudd kan være risikomomenter i et hvert anlegg.",
              "Tegn til dette ble ikke observert på befaringsdagen. Eier opplyste at systemet fungerer som det skal."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Sameiet har ingen sikringsordning for fellesgjeld. Dersom sameiet pådrar seg gjeld, er sameierne ansvarlige i henhold til sin sameiebrøk uten noen form for sikring.",
            "evidence": [
              "Sameiet har ingen sikringsordning.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk.",
              "Ingen lån registrert på selskap (per nå, men ingen garanti for fremtiden)."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R8",
            "description": "Parkeringsplasser, boder og tekniske rom ligger i en separat fradelt anleggseiendom (gnr 38, bnr 334). Eiere med parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplassen til andre leilighetseiere, noe som begrenser selgers frihet.",
            "evidence": [
              "Parkeringsplasser, sykkelparkering, boder og tekniske rom ligger i en egen fradelt anleggseiendom under bakken med gnr 38, bnr 334.",
              "Eiere som har leilighet og parkeringsplass er ved salg av leilighet pliktet til å selge parkeringsplass til eiere av leilighet i boligsameiet.",
              "Anleggseiendommen ligger i et tingsrettslig sameie mellom eierne av parkeringsplassene og det er fastsatt egne vedtekter for sameiet som eier.",
              "Salg og utleie av parkeringsplass håndteres direkte mellom eiere, ofte via enten Vibbo eller en ikke offisiell fb-gruppe."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R9",
            "description": "Tinglyste heftelser og rettigheter fra 1926 og 1928 som ikke kan slettes uten samtykke fra kommunen. Disse gamle heftelsene kan medføre begrensninger på eiendommens bruk.",
            "evidence": [
              "03.09.1926 – Dokumentnr: 900851 – Best. om adkomstrett. Med flere bestemmelser.",
              "09.03.1928 – Dokumentnr: 901271 – Bestemmelse om bebyggelse. Bestemmelse om benyttelse. Med flere bestemmelser.",
              "Kan ikke slettes eller endres uten samtykke fra kommunen.",
              "Overført fra: Knr:0301 Gnr:38 Bnr:90 – Gjelder denne registerenheten med flere."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen tilfredsstiller ikke nødvendigvis dagens byggeforskrifter for tetthet, ventilasjon og varmeisolering, da den er vurdert etter regler gjeldende på byggetidspunktet.",
            "evidence": [
              "Den tilfredsstiller ikke nødvendigvis alle de krav som dagens byggeforskrifter stiller til bl.a. tetthet, ventilasjon og varmeisolering.",
              "Merk at dagens krav til isolering og tetthet mv er strengere enn da bygget ble oppført.",
              "Avvik er vurdert ut fra tekniske forskrifter på godkjenningstidspunktet for bygget."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Felleskostnadene kan øke over tid som følge av beslutninger i sameiet. Kjøper bør være oppmerksom på at nåværende felleskostnader på kr 6 208,- pr. mnd ikke er garantert å forbli uendret.",
            "evidence": [
              "Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over tid som følge av beslutninger foretatt i sameiet.",
              "Felleskostnader TV/Internett/Bredbånd: kr 6 208,- pr. mnd.",
              "Innkrevde felleskostnader 2024: Regnskap 4 608 036 mot budsjett 4 276 000 – en overskridelse på 8%."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Begrensning på eierskap – ingen kan eie mer enn to boligseksjoner i sameiet. Seksjoner eid av nærstående eller gjennom firma regnes også med, noe som kan begrense investorer.",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23.",
              "Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Planlagt utbygging ved Sørkedalsveien 10 (Wahl Eiendom AS) kan påvirke nærområdet med økt trafikk, støy og endret bylandskap. Tiltaket krever dispensasjon fra plan- og bygningsloven.",
            "evidence": [
              "Det er igangsatt detaljreguleringsarbeid for Sørkedalsveien 10 på vegne av Wahl Eiendom AS og BA Wahl Invest AS.",
              "Økning i gesimshøyde medfører at tiltaket er avhengig av dispensasjon fra pbl § 29-4 angående høyde og avstand til nabogrense.",
              "Tiltakets bruksareal ønskes økt fra 13010m² til 14761m², en økning på 1751m².",
              "Planområdet inkluderer også deler av Fridthjof Nansens vei og Middelthuns gate for å sikre helhetlige løsninger for trafikk og infrastruktur."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Ladeinntekter for el-bil er vesentlig lavere enn budsjettert (kr 35 970 mot budsjettert kr 90 000, en avvik på 60%). Dette kan indikere underbudsjettering eller lavere inntekter enn forventet for sameiet.",
            "evidence": [
              "Ladeinntekter EL-bil: Regnskap 35 970, Budsjett 90 000, Differanse kr 54 030, Differanse % 60%.",
              "Innkrevde felleskostnader 2024: Regnskap 4 608 036 mot budsjett 4 276 000 – overskridelse på 8%."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R15",
            "description": "Kjøper er forpliktet til å signere en standardkjøpekontrakt utarbeidet av Emera. Dette kan begrense kjøpers forhandlingsrom og mulighet til å tilpasse kontraktsvilkårene.",
            "evidence": [
              "Kjøper og selger er forpliktet til å signere den standard kjøpekontrakten utarbeidet av Emera som en del av eiendomshandleren."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R16",
            "description": "Felleskostnadene oversteg budsjettet med 8% i 2024 (kr 4 608 036 mot budsjettert kr 4 276 000). Dette kan indikere et underbudsjettert sameie og risiko for fremtidige kostnadsøkninger.",
            "evidence": [
              "Innkrevde felleskostnader: Regnskap 4 608 036, Budsjett 4 276 000, Differanse kr -332 036, Differanse % -8%.",
              "Det gjøres oppmerksom på at fellesgjeld og felleskostnader kan variere over tid som følge av beslutninger foretatt i sameiet."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R17",
            "description": "Elektrisk anlegg er kun forenklet kontrollert etter forskrift til avhendingslova, og kan ikke sammenlignes med en fullstendig kontroll utført av offentlig myndighet. Skjulte feil i det elektriske anlegget kan foreligge.",
            "evidence": [
              "Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser som forskrift til avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en kontroll utført av offentlig myndighet.",
              "Rapporten omfatter ikke tekniske vurderinger av fagområder som krever særskilt godkjenning eller kompetanse, herunder elektriske anlegg, VVS-installasjoner og ildsteder."
            ],
            "source_documents": [
              "d028_d028"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Hva er tilstandsgraden (TG) for bad, våtrom og kjøkken i tilstandsrapporten?",
          "Er det registrert konkrete TG2 eller TG3 avvik i tilstandsrapporten for leiligheten?",
          "Hva er sameiets vedlikeholdsplan og planlagte større vedlikeholdsarbeider fremover?",
          "Hva er energimerking og energikarakter for boligen?",
          "Er det registrert fukt, lekkasje eller vannskader i boligen eller bygget?",
          "Hva er sameiets totale økonomi og likviditet – er det opparbeidet tilstrekkelig vedlikeholdsfond?",
          "Hva er alder på bygget og hvilke bygningsdeler nærmer seg forventet levetid?",
          "Er det tinglyst servitutter eller bruksrettigheter som begrenser bruken av boligen eller fellesarealene?",
          "Hva er status for Fornebubanen og hvilken konkret påvirkning kan dette ha på eiendommen?",
          "Er det registrert ufaglært arbeid eller ulovlige byggetiltak i boligen?"
        ],
        "reasoning": "\nGjennomgangen av de 15 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og vurderinger er gjort:\n\n**Bekreftede og justerte risikoer:**\n- R1 (Radon): Bekreftet med høy confidence (0.95). Egenerklæringen bekrefter \"Nei\" på spørsmål om radonmåling.\n- R2 (Reguleringsplaner): Confidence justert opp til 0.93 da Fornebubanen-planprogrammet er et ytterligere moment som styrker risikoen.\n- R3 (Legalpant): Godt dokumentert, beholdes på 0.95.\n- R4 (Tilstandsrapport nivå 1): Confidence justert opp til 0.95 da tilleggsbevis fra rapporten styrker dette ytterligere.\n- R5 (Fellesdeler ikke vurdert): Confidence justert opp til 0.92 da bygningsbeskrivelsen (flat takkonstruksjon, betong, stål) understreker viktigheten av manglende vurdering.\n- R6 (Vanninstallasjoner): Confidence justert ned til 0.85 da det eksplisitt fremgår at ingen tegn til problemer ble observert og eier opplyser at systemet fungerer.\n- R7 (Ingen sikringsordning): Beholdes på 0.87. Ingen lån er registrert per nå, men mangel på sikringsordning er likevel en risiko.\n- R8 (Parkeringsplass): Confidence justert opp til 0.87 da det fremgår at salg håndteres uformelt via Vibbo/Facebook-gruppe, noe som er en tilleggsrisiko.\n- R9 (Gamle heftelser): Confidence justert ned til 0.80 da det ikke fremgår konkret hva heftelsene innebærer i praksis for kjøper.\n- R10 (Byggeforskrifter): Beholdes på 0.88, godt dokumentert.\n- R11 (Felleskostnader): Confidence justert opp til 0.87 da regnskapet viser 8% overskridelse av budsjettet i 2024.\n- R12 (Eierskapsbegrensning): Beholdes på 0.80. Relevant for investorer, men lavere praktisk risiko for ordinære kjøpere.\n- R13 (Sørkedalsveien 10): Beholdes på 0.85, godt dokumentert.\n- R14 (Ladeinntekter): Confidence justert ned til 0.75 da dette er et isolert regnskapsavvik som ikke nødvendigvis påvirker den individuelle kjøper direkte.\n- R15 (Standardkjøpekontrakt): Confidence justert ned til 0.70 da dette er en vanlig praksis i bransjen og ikke nødvendigvis en vesentlig risiko.\n\n**Nye risikoer identifisert:**\n- R16: Felleskostnadene oversteg budsjettet med 8% i 2024, noe som er et selvstendig risikosignal utover den generelle varselen om at kostnader kan variere.\n- R17: Elektrisk anlegg er kun forenklet kontrollert og ikke fullstendig gjennomgått av fagmyndighet.\n\n**Manglende informasjon som bør undersøkes:**\n- Konkrete TG2/TG3-avvik i tilstandsrapporten er ikke gjengitt i evidensen – dette er kritisk informasjon.\n- Sameiets vedlikeholdsfond og planlagte større vedlikeholdsarbeider er ikke dokumentert.\n- Energimerking er ikke nevnt i evidensen.\n- Alder på bygget og nærmer seg levetidsgrenser for kritiske bygningsdeler er ikke dokumentert.\n- Fukt/lekkasjehistorikk er ikke dokumentert (egenerklæringen spør om dette men svaret er ikke gjengitt).\n- Status for Fornebubanen og konkret påvirkning på eiendommen bør undersøkes nærmere.\n"
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
    "input_tokens": 23512,
    "output_tokens": 5899,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
