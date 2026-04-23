# Trace: agentic_reflecting_iter1
- **Run ID:** 10ea1449-0b92-47c1-be46-158b6be898d2
- **Tidspunkt:** 2026-03-25T03:13:20.092537+00:00
- **Varighet:** 140.88s
- **Input tokens:** 22798
- **Output tokens:** 6957

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
Risiko 1: Betydelig planlagt rehabilitering med usikker kostnad og felleskostnadsøkning: Borettslaget har vedtatt renovering av vannrør og rehabilitering av fellesgarasjer med en kostnadsramme på kr 41 000 000, tilsvarende ca. kr 331 000 per andel i tillegg til eksisterende fellesgjeld. I tillegg utredes hel eller delvis renovering av fasader, utskifting av vinduer og balansert ventilasjon – ennå ikke vedtatt. Dette vil medføre økte felleskostnader, men størrelsen er ukjent.
  Confidence: 0.98
  Evidens: Kostnadsrammen er på kr 41 000 000,‑ som utgjør ca kr 331 000,‑ pr andel i tillegg til det vi har i dag.; Det foreligger planer om renovering av vannrør i 2026.; Det foreligger utredninger/planer om hel eller delvis renovering av fasader/utskifting av vinduer/balansert ventilasjon. Ennå ikke vedtatt pr 06/03-2026. Husleieøkning må påregnes.; Garasjelaget utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes.; per tid er for tidlig å si hvor mye felleskostnadene vil øke som følge av dette.

Risiko 2: Høy radonverdi i kjellerstue: Radonmåling utført januar 2024 viser en verdi på 133 Bq/m³ i kjellerstuen, som overstiger Folkehelseinstituttets anbefalte tiltaksgrense på 100 Bq/m³. Dette utgjør en helserisiko og kan kreve tiltak.
  Confidence: 0.95
  Evidens: Radonmålinger med sporfilm uført av Progressa AS januar 2024.; Kjellerstue 133. Sov v bad 49. Sov v trapp 81. Stue 41. Verdier oppgitt i Bq/m3 som årsmiddelverdi.

Risiko 3: Ulovlig innredet bod til disponibelt rom i kjeller: Selger opplyser at bod er innredet til disponibelt rom i kjeller uten at dette er byggemeldt eller godkjent av bygningsmyndighetene. Dette er en åpenbar ulovlighet som kan medføre pålegg om tilbakeføring.
  Confidence: 0.97
  Evidens: Innredet bod til disprom kjeller.; Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei; Innredet bod til disp. rom kjeller. Ikke byggemeldt.

Risiko 4: Takkonstruksjonen er ikke undersøkt (TGIU): Hele takkonstruksjonen er gjenbygget og kan ikke vurderes av takstmann. Eventuelle skjulte feil og mangler i taket er dermed ukjente, noe som representerer en vesentlig usikkerhet for kjøper.
  Confidence: 0.93
  Evidens: Takkonstruksjon/loft grunnet takkonstruksjonen er gjenbygget. Ikke mulig å vurdere.; Hele takkonstruksjonen er gjenbygget. Det er ingen mulighet til vurdering utover alder og observasjoner fra underliggende etg.

Risiko 5: Sluk, membran og tettesjikt på bad i underetasje har passert mer enn halvparten av forventet brukstid (TG2): Badet ble renovert i 2014, men membranløsningen er gammel og sluk har begrenset mulighet for inspeksjon og rengjøring. Eldre membraner svekkes over tid og øker risikoen for lekkasjer og følgeskader.
  Confidence: 0.92
  Evidens: Sluk, membran og tettesjikt på bad (5,8 m²) i underetasje grunnet alder og sluk har begrenset mulighet for inspeksjon og rengjøring.; Mer enn halvparten av forventet brukstid er passert på membranløsningen.; Eldre membraner svekkes naturlig over tid, noe som kan medføre redusert tettefunksjon og øke risikoen for utetthet.

Risiko 6: HMS-avvik: Rekkverk og håndløper tilfredsstiller ikke dagens krav: Åpninger i innvendig rekkverk er større enn dagens forskriftskrav, håndløper mangler på vegg i innvendig trapp, og rekkverket på balkong/terrasse er for lavt i forhold til dagens forskriftskrav. Dette utgjør en sikkerhetsrisiko, særlig for barn.
  Confidence: 0.95
  Evidens: Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.; Det mangler håndløper på vegg i det innvendige trappeløpet.; Rekkverket på balkong eller terrasse er for lavt i forhold til dagens forskriftskrav.; Håndløper på innvendig trapp må monteres på vegg for å tilfredsstille krav på byggetidspunktet.

Risiko 7: Støyeksponering: Eiendommen er berørt av gul og rød støysone fra veistøy: Eiendommen har henholdsvis 20,1% dekningsgrad i gul støysone og 1,4% i rød støysone. Dette kan medføre utredningsplikt og krav om avbøtende tiltak ved fremtidige plan- og byggesaker.
  Confidence: 0.9
  Evidens: Gul støysone, veistøy, dekningsgrad: 20,1%; Rød støysone, veistøy, dekningsgrad: 1,4%; Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter.; Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagstiller og eventuelt krav om avbøtende tiltak.

Risiko 8: Strømavtale med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers frihet til å velge strømleverandør frem til utløpsdato.
  Confidence: 0.88
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.

Risiko 9: Fellesgjeld og høy totalpris: Andel fellesgjeld er kr 112 583 med flytende rente (Husbanken 4,08% og Svenska Handelsbanken 5,14%). Samlet totalpris inkl. fellesgjeld og omkostninger er kr 6 121 479. Flytende rente innebærer risiko for økte rentekostnader som vil påvirke felleskostnadene.
  Confidence: 0.85
  Evidens: Andel av fellesgjeld: Kr 112 583 pr. 09.03.2026; Husbanken, annuitetslån. Rentesats 4,08%, flytende rente.; Svenska Handelsbanken AB NUF, annuitetslån. Rentesats 5,14%, flytende rente.; Totalpris inkl. omk. (med Boligkjøperforsikring): 6 121 479

Risiko 10: Rom under terreng vurdert som risikokonstruksjon: Fuktsikring, drenering og isolasjon fra byggeåret (1975) kan avvike betydelig fra dagens standarder. Høy luftfuktighet, mangelfull drenering eller dårlig lufting kan over tid føre til sopp, muggdannelse og skadeinsekter.
  Confidence: 0.87
  Evidens: Rom under terreng i eldre boliger må derfor generelt sees på som en risikokonstruksjon.; Fuktsikring, drenering og isolasjon fra byggeåret kan avvike betydelig fra dagens standarder.; Høy luftfuktighet, mangelfull drenering eller dårlig lufting over tid kan føre til utfordringer som utvikling av sopper, muggdannelse og angrep fra skadeinsekter.

Risiko 11: 6 tinglyste heftelser og rettigheter på eiendommen: Det er tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting, herunder bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett. Disse kan begrense kjøpers rådighet over eiendommen.
  Confidence: 0.88
  Evidens: På eiendommen er det tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting til ny hjemmelshaver.; Disse omhandler bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett.

Risiko 12: Begrenset adgang til utleie: Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers mulighet til å leie ut boligen og kan påvirke investeringsverdien.
  Confidence: 0.85
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.

Risiko 13: Eiendommen er berørt av fjernvarmekonsesjonsområde: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg. Dette kan innebære tilknytningsplikt til fjernvarme ved fremtidige bygge- eller rehabiliteringstiltak.
  Confidence: 0.8
  Evidens: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg.

Risiko 14: Garasjebygg er ikke tilstandsvurdert: Garasjeplassen i rekke har ukjent byggeår og er ikke tilstandsvurdert. Det kan dermed foreligge feil, mangler eller vedlikeholdsbehov som ikke er omtalt i rapporten.
  Confidence: 0.82
  Evidens: Ukjent byggeår.; Det er ikke foretatt tilstandsvurdering av bygningen. Det betyr at det kan være feil, mangler eller vedlikeholdsbehov som ikke er videre omtalt i denne rapporten.; Merk: Bygget er ikke tilstandsvurdert

Risiko 15: Energimerke D – dårlig energieffektivitet: Boligen har energikarakter D (gul), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere strøm- og oppvarmingskostnader for kjøper, og boligen vil sannsynligvis ikke tilfredsstille fremtidige energikrav uten oppgradering.
  Confidence: 0.83
  Evidens: Energikarakter: D; Energifarge: Gul; Periodisk avtrekk 174,52 kWh/m² 25 041 kWh

Risiko 16: Vedtatt områderegulering og pågående kommuneplanrevisjon kan påvirke eiendommens omgivelser: Fyllingsdalen er under betydelig byutvikling med vedtatt områderegulering (PlanID 63860000, ikrafttredelse 02.11.2023) og pågående revisjon av kommuneplanens arealdel (KPA 2027). Dette kan medføre økt fortetting, trafikk og endrede omgivelser rundt eiendommen.
  Confidence: 0.78
  Evidens: Vedtatt områderegulering i nærheten av eiendommen: PlanID: 63860000. Ikrafttredelsesdato: 02.11.2023.; PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.; tilrettelegges for at trafikkvekst tas med kollektiv, gange og sykkel, og ikke med bil

Dokumentkontekst:
[d125_d125 | Side [1]]
res, og det Tinglyste heftelser og rettigheter: På eiendommen er det
legges til rette for økt bruk som samtidig ivaretar tinglyst 6 heftelser og rettigheter som følger
naturmangfold. Det sikres et sammenhengende byrom‑ eiendommens matrikkel ved overskjøting til ny
og gangnett mot sentrumsområdet, og til de store hjemmelshaver. Disse omhandler bestemmelse om
friluftsområdene rundt byggesonen. Det skal gjerde, bruksrett, erklæring/ avtale og forkjøpsrett.
62

## Side 63

OM EIENDOMMEN
Legalpant: Borettslaget

---

[d125_d125 | Side [1]]
og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Lovanvendelse
Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
63

## Side 64

OM EIENDOMMEN
til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader.
Fastmonterte eller spesialtilpassede installasjoner og Slik normal

---

[d125_d125 | Side [1]]
t)) Fellesgjeld
8 506 (Forhåndsvarsling forkjøpsrett) Kr 112 583 pr. 09.03.2026
545 (Tinglysingsgebyr ‑ hjemmel) Det gjøres oppmerksom på at det foreligger planer om
545 (Tinglysningsgebyr ‑ pantedokument) blant annet renovering av fasader, utskifting av vindu og
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ eventuelt balansert ventilasjon. Dette er ikke vedtatt,
9 596 (Omkostninger totalt (uten Boligkjøperforsikring)) men kjøper må påregne at dersom det vedtas vil
18 896 (Omkostninger totalt

---

[d125_d125 | Side [1]]
kjøpsrett.
62

## Side 63

OM EIENDOMMEN
Legalpant: Borettslaget har legalpant på inntil 2G som Kjøper og selger er forpliktet til å undertegne standard
sikkerhet for betaling av felleskostnader. Dette betyr at kjøpekontrakt utarbeidet av Emera i forbindelse med
borettslaget har prioritet over tinglyste lån når det gjelder eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
betaling av felleskostnader, og kan kreve inn pengene før hos eiendomsmegler før bud inngis. Kontakt
andre kreditorer, selv om de

---

[d125_d125 | Side [1]]
ndomsmegler før bud inngis. Kontakt
andre kreditorer, selv om de har lån registrert på andelen. eiendomsmegler for spørsmål.
Selger leverer eiendommen i ryddig og rengjort stand.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
Kontrakts‑
det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet.
grunnlag
Adkomst til eiendommen skjer via offentlig vei.
Utleie
Adgang til utleie: Det er begrenset adgang til å leie

---

[d125_d125 | Side [1]]
trykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og

---

[d125_d125 | Side [1]]
tasjen
Forkjøpsrett: Dersom andel skifter eier, har andelseierne i
borettslaget og dernest de øvrige andelseierne i Hvis et rom på visningen mangler fast installert
boligbyggelaget forkjøpsrett. Vennligst se vedtekter og oppvarmingskilde, vil ikke dette bli inkludert i handelen.
bob.no for regler rundt forkjøpsrett. Forkjøpsretten er
forhåndsutlyst i forkant av annonsering. Nåværende eier har tegnet avtale om Norgespris på
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen
Styregodkjennelse: Kjøper

---

[d125_d125 | Side [1]]
guleringsforhold, kontakt
med bolig, næring og annen service. De eksisterende megler eller søk på saksnummer, adresse eller gårds‑ og
borettslagene i Fyllingsdalen gis mulighet for noe bruksnummer på Plan‑ og bygningsetatens hjemmeside.
stedstilpasset fortetting, som bygger opp under
Fyllingsdalen som et boområde med god tilgang på
grøntområder og andre herlighetsverdier. De Tinglyste heftelser
eksisterende blågrønne verdiene videreføres, og det Tinglyste heftelser og rettigheter: På eiendommen er

---

[d125_d125 | Side [1]]
ten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak

---

[d125_d125 | Side [1]]
les ev. interessenter å lese gjennom skjema før et evt
salg/kjøp gjennomføres. Det kan være 昀氀ere relevante/ny琀紀ge
opplysninger i de琀琀e skjema som ikke er videre beskrevet i
denne rapport.
Eier av takstobjektet må selv gå gjennom denne rapport og
straks melde fra hvis noen av opplysningene ikke er korrekte,
eller om det foreligger relevante opplysninger eier har
kjennskap 琀椀l som burde vært opplyst om.
Besik琀椀gelse er foreta琀琀 med de begrensninger som følger av at
bygningen er

---

[d125_d125 | Side [1]]
øp er
med i oppgi琀琀 areal. Arealer i ovenstående tabell kan ikke summeres for å kontrollere BRA, da innervegger, sjakter etc. ikke er medregnet i
disse arealene. BRA er avrundet 琀椀l nærmeste hele tall iht. takstbransjens retningslinjer for arealmåling. Oppmålingen er ikke kontrollert opp
mot tegninger (ikke mo琀琀a琀琀).
Lovlighet
Byggetegninger
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Åpenbare ulovligheter
Er det avdekket at boligen har åpenbare

---

[d125_d125 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Innredet bod til disprom kjeller.
18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller

---

[d125_d125 | Side [1]]
 hjelp dersom det
følge av andre andelshaveres mislighold, eller dersom oppdages uventede feil eller mangler ved boligen de
borettslaget sitter på fraflyttede og/ eller usolgte andeler, neste fem årene. Les mer om Boligkjøperforsikring i
må dekkes av de øvrige andelseierne. vedlagte materiell eller på https:/ /
www.soderbergpartners.no/ eiendom/ boligkjoper/
Borettslaget har legalpanterett i andelen for krav på
dekning av felleskostnader og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens

---

[d125_d125 | Side [1]]
lg. Bransjens liste over løsøre og 
tilbehør som skal følge med eiendommen, er en del av avtalen mellom kjøper og selger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende

---

[d125_d125 | Side [1]]
eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Radonmålinger med sporfilm uført av Progressa AS januar 2024.
21.1 Radonmåling
År 2024
Verdi Kjellerstue 133. Sov v bad 49. Sov v trapp 81. Stue 41. Verdier oppgitt i Bq/m3 som

---

[d125_d125 | Side [1]]
takplater i himling.
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vann- og avløpsledninger via Innfelte spo琀琀er.
Oppdragsnr.: 20932-3246 Befaringsdato: 09.03.2026 Side: 5 av 29
73

## Side 74

Lyshovden 211, 5148 FYLLINGSDALEN Bang Takst AS
Gnr 22 - Bnr 420 Møllendalsveien 65A
4601 BERGEN 5009 BERGEN
Beskrivelse av eiendommen
Garderobeskap.
Arealer
Gå 琀椀l side
Bod (8,0 m²)
Lamina琀昀liser på gulv, malte 昀氀ater på vegger og i himling.
Varmtvannsbereder, radonvi昀琀e og fordelerskap 琀椀l rør-i-rør. Forutsetninger og

---

[d125_d125 | Side [1]]
 utgjør ca kr 331 000,‑ pr andel i tillegg til
112 583 (Andel av fellesgjeld) det vi har i dag. Resterende vil bli stemt over på
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ generalforsamlingen 27.05.2026. Videre opplyser han om
6 102 583 (Pris inkl. fellesgjeld) at det per tid er for tidlig å si hvor mye felleskostnadene
vil øke som følge av dette. Kontakt megler for mer info.
Omkostninger
9 300 (Boligkjøperforsikring* (valgfritt)) Fellesgjeld
8 506 (Forhåndsvarsling forkjøpsrett) Kr 112 583

---

[d125_d125 | Side [1]]
ørt i henhold til
innover og ta av til høyre mot Lyshovden. Kjør ned tillatelsen og gjeldende regelverk, eller at det senere er
bakken. Det er skiltet med husnummer. utført arbeid på bygget som ikke er byggemeldt eller
godkjent.
57

## Side 58

OM EIENDOMMEN
Andre arealer:
Innhold
TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
Boligen går over 2 plan og inneholder: ALH ‑ Areal med lav himlingshøyde måles på samme
måte som BRA, men man ser bort fra krav til
Underetasje (BRA‑i 68m²): Gang/trappehus,

---

[d125_d125 | Side [1]]
kke.
16. FASTMONTERT VEGGLADER/LADESTASJON TIL EL-BIL medfølger uavhengig av hvor laderen er 
montert. 
17. SOLCELLEANLEGG med tilhørende teknisk infrastruktur medfølger.
En komplett meglertjeneste En prosess du fortjener
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
Emera Eiendomsmegling tilbyr en komplett Vårt mål er at du, enten du er selger eller kjøper,
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger 
medfølger ikke. meglertjeneste – fra

---

[d125_d125 | Side [1]]
unktet.
• Håndløper på innvendig trapp må monteres på vegg for å 琀椀lfredss琀椀lle krav på bygge琀椀dspunktet.
• Det er ikke krav om utbedring av rekkverkshøyde opp 琀椀l dagens forskri昀琀skrav.
Oppdragsnr.: 20932-3246 Befaringsdato: 09.03.2026 Side: 22 av 29
90

## Side 91

Lyshovden 211, 5148 FYLLINGSDALEN Bang Takst AS
Gnr 22 - Bnr 420 Møllendalsveien 65A
4601 BERGEN 5009 BERGEN
Bygninger på eiendommen
Garasjeplass i rekke
Anvendelse
Byggeår Kommentar
Ukjent byggeår.
Standard
Asfaltert dekke.
Y琀琀ervegger av

---

[d125_d125 | Side [1]]
det vil ikke være mulighet for inspeksjon og rengjøring.
mulig å gjøre slike forhold gjeldende som en mangel. ‑ Sluk, membran og tettesjikt på bad (5,8 m²) i
Spesielt forhold som er vurdert med TG2 og TG3 bør underetasje grunnet alder og sluk har begrenset
vurderes nøye, da de indikerer avvik fra normal slitasje mulighet for inspeksjon og rengjøring.
og/ eller høy alder, noe som kan innebære behov for
utbedringer. Bygningsdeler som er merket med TGIU er Bygningsdeler som ikke har blitt undersøkt

---

[d125_d125 | Side [1]]
r med
produsentens anvisninger.
Skjulte feil og mangler kan ikke utelukkes ved en forenklet vurdering. Ved nærmere e琀琀ersyn kan det fremkomme avvik eller kostnader 琀椀l utbedring som
ikke fremgår av denne rapporten.
TOMTEFORHOLD
Byggegrunn
Beskrivelse
Bygningen er fundamentert på anta琀琀 faste masser. Bygningsdelen er enklere vurdert på bakgrunn av alder. Felles bygningsmasse er sameiet/bore琀琀slagets
ansvar.
Fuktsikring og drenering
Punktet må sees i sammenheng ‘Rom under terreng’
Beskrivelse
Tilbakefyllt

---

[d125_d125 | Side [1]]
eldende krav og forskri昀琀er. Fuktsikring, drenering og isolasjon fra
byggeåret kan avvike betydelig fra dagens standarder. Rom under terreng i eldre boliger må derfor generelt sees på som en risikokonstruksjon.
Høy lu昀琀fuk琀椀ghet, mangelfull drenering eller dårlig lu昀琀ing over 琀椀d kan føre 琀椀l u琀昀ordringer som utvikling av sopper, muggdannelse og angrep fra
skadeinsekter. Hvis det oppstår tegn på fukt, som lukt, misfarging eller synlige skader, bør de琀琀e undersøkes nærmere av fagkyndige for å

---

[d125_d125 | Side [1]]
ningen 琀椀l disse.
• Utvidet fuktsøk (hulltaking): Boring av hull for inspeksjon og fuktmåling i
risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede
kjellervegger og eventuelt i oppforede kjellergulv.
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen med
PERSONVERN
bygningsdelens alder.
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av et iVerdi AS, bygningssakkyndig og

---

[d125_d125 | Side [1]]
 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser

---

[d125_d125 | Side [1]]
d
Boligen har normal standard ut fra byggeskikk og tekniske krav som gjaldt ved oppførings琀椀dspunktet, samt for de 琀椀dspunktene det er u琀昀ørt
oppgraderinger og renoveringer. Det er gjort 昀氀ere oppgraderinger i de senere år. Det henvises for øvrig 琀椀l rapportens enkeltpunkter for nærmere
detaljer.
Vedlikehold
Boligen er jevnlig vedlikeholdt. Felles bygningsmasse inngår i bore琀琀slagets vedlikeholdsansvar.
UTVENDIG
Taktekking
Punktet må sees i sammenheng med Takkonstruksjon/Lo昀琀
Beskrivelse
Flat

---

[d125_d125 | Side [1]]
mmentar
Ukjent byggeår.
Standard
Asfaltert dekke.
Y琀琀ervegger av bindingsverk med stående panel.
Pul琀琀ak tekket med takpapp.
Elbillader og el. portåpner.
Det er ikke foreta琀琀 琀椀lstandsvurdering av bygningen. Det betyr at det kan
være feil, mangler eller vedlikeholdsbehov som ikke er videre omtalt i
denne rapporten.
Vedlikehold
Felles bygningsmasse inngår i bore琀琀slagets vedlikeholdsansvar.
Merk: Bygget er ikke 琀椀lstandsvurdert
Oppdragsnr.: 20932-3246 Befaringsdato: 09.03.2026 Side: 23 av 29
91

## Side

---

[d125_d125 | Side [1]]
å til side
membran og te琀琀esjikt
Mer enn halvparten av forventet bruks琀椀d er passert
på membranløsningen.
Sluk har begrenset mulighet for inspeksjon og
rengjøring.
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet
Åpninger i rekkverk er større enn dagens Gå til side
forskri昀琀skrav 琀椀l rekkverk i innvendige trapper.
Det mangler håndløper på vegg i det innvendige
trappeløpet.
Rekkverket på balkong eller terrasse er for lavt i
forhold 琀椀l dagens

---

[d125_d125 | Side [1]]
unktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset

---

[d125_d125 | Side [1]]
er merket med TGIU er Bygningsdeler som ikke har blitt undersøkt (TGIU):
ikke blitt vurdert av takstmannen. ‑ Takkonstruksjon/ loft grunnet takkonstruksjonen er
gjenbygget. Ikke mulig å vurdere.
Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten: HMS (forhold av betydning for Helse, miljø og sikkerhet):
Vurdering av avvik:
Byggemåte: ‑ Åpninger i rekkverk er større enn dagens forskriftskrav
Grunn og fundamenter: Bygningen er fundamentert på til rekkverk i innvendige trapper.
antatt

---

[d125_d125 | Side [1]]
kke oppfylle dagens krav. Mange av
boligens egenskaper, som bla. te琀琀het, varmeisolering og Dører:
ven琀椀lasjon, kan derfor forventes å være dårligere enn det som Y琀琀erdør og balkongdører med malte dørblad og isolerglass.
kreves e琀琀er dagens byggeforskri昀琀er. Balkongdør i underetasjen fra 2000-tallet. Balkongdør i
hovedetasjen fra 1997. Elektronisk dørlås fra Yale Doorman.
BEGRENSNINGER
Det tas forbehold om at det ved oppussing eller åpning av Takkonstruksjon:
konstruksjoner kan avdekkes feil og mangler som

---

[d125_d125 | Side [1]]
gsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele

---

[d125_d125 | Side [1]]
, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE

---

[d125_d125 | Side [1]]
elen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være

---

[d125_d125 | Side [1]]
椀d (iht. Byggforskserien 700.320):
- Murte piper / elementpiper: ca. 30–60 år
- Pusset skorstein: ca. 10–30 år mellom pussarbeider
- Ildsteder / vedovner: ca. 20–30 år
Rom Under Terreng
Punktet må sees i sammenheng med ‘Drenering’
Beskrivelse
Det ble foreta琀琀 hulltaking i påforet kjellervegg i den største boden i underetasjen.
Rela琀椀v lu昀琀fuk琀椀ghet ble målt med probe. Den viste rela琀椀v lu昀琀fuk琀椀ghet på 32,9% ved en temperatur på 22,1 grader.
De昀椀nisjon av målte verdier:
Rela琀椀v lu昀琀fuk琀椀ghet under 60 %

---

[d125_d125 | Side [1]]
kri昀琀er som gjaldt for oppføringsåret, som vil avvike fra dagens krav/anbefalinger. Ved oppussing eller ombygging der
konstruksjoner åpnes vil det kunne avdekkes feil og mangler. Det gjøres ikke destruk琀椀ve inngrep og åpning av konstruksjoner på de琀琀e
undersøkelsesnivået.
Oppdragsnr.: 20932-3246 Befaringsdato: 09.03.2026 Side: 9 av 29
77

## Side 78

Lyshovden 211, 5148 FYLLINGSDALEN Bang Takst AS
Gnr 22 - Bnr 420 Møllendalsveien 65A
4601 BERGEN 5009 BERGEN
Tilstandsrapport
Takkonstruksjon/Lo昀琀
Punktet må

---

[d125_d125 | Side [1]]
 halvparten av forventet bruks琀椀d for eldre deler av anlegget er oppbrukt.
Konsekvens/琀椀ltak
• Det er ikke behov for utbedrings琀椀ltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.
Avløpsrør
Beskrivelse
Synlige avløpsrør av plast.
Vurdering gjelder for avløp i den aktuelle andelen. Tilstandsgrad er i hovedsak sa琀琀 på bakgrunn av alder. Evt. åpenbare feil og mangler kommenteres
dersom disse er synlige på befaring. Felles avløpsrør, s琀椀geledninger e.l. er ikke

---

[d125_d125 | Side [1]]
abilitert e琀琀er
Byggteknisk forskri昀琀 av 1997 (TEK97).
Vurdering av avvik:
• Mer enn halvparten av forventet bruks琀椀d er passert på membranløsningen.
• Sluk har begrenset mulighet for inspeksjon og rengjøring.
Konsekvens/琀椀ltak
• Overvåk 琀椀lstanden jevnlig. For å få 琀椀lstandsgrad 0 eller 1 må te琀琀esjiktet ski昀琀es ut, men 琀椀dspunktet for når de琀琀e er nødvendig er vanskelig å si noe om.
• Eldre membraner svekkes naturlig over 琀椀d, noe som kan medføre redusert te琀琀efunksjon og øke risikoen for ute琀琀heter og

---

[d125_d125 | Side [1]]
tski昀琀ing av bygningsdeler". Det Vinduer med isolerglass i malte trekarmer.
må forventes at vedlikehold eller utski昀琀ing er nødvendig for Vinduer i underetasjen fra 2000-tallet.
eldre bygningsdeler når deres leve琀椀d nærmer seg slu琀琀en. Eldre Vinduer i hovedetasjen fra hovedsakelig 1997.
konstruksjoner og bygningsdeler har si琀琀 utgangspunkt i eldre Utvendig vedlikehold inngår i bore琀琀slagets vedlikeholdsansvar.
forskri昀琀er og vil normalt ikke oppfylle dagens krav. Mange av
boligens egenskaper, som bla.

---

[d125_d125 | Side [1]]
e er foreta琀琀 med de begrensninger som følger av at
bygningen er innredet/utstyrt.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Rekkehus i bore琀琀slag
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Utvendig > Takkonstruksjon/Lo昀琀 Gå til side
Hele takkonstruksjonen er gjenbygget. Det er ingen
mulighet 琀椀l vurdering utover alder og observasjoner
fra underliggende etg.
AVVIK SOM KAN KREVE TILTAK
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Oppdragsnr.: 20932-3246

---

[d125_d125 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Det foreligger planer om renovering av vannrør i 2026. Evt vedtak om dette gjøres på ekstraordinær
generalforsamling 06/03-2026. Det foreligger utredninger/planer om hel eller delvis renovering av fasader/utskifting
Beskrivelse
av

---

[d125_d125 | Side [1]]
OMMEN
og vedlikehold.
Økonomi
Felleskostnadene fordeles slik:
Tv og internett kr 470,‑
Dugnad kr 150,‑
Felleskostnader kr 6 390,‑
Prisantydning
Kr 5 990 000 Felleskostnadene kan bli besluttet å øke etter
utarbeidelsen av salgsoppgaven. Styreleder opplyser om
at foreløpig renovering/ utskiftning av rør og rehabilitering
Omkostning kjøper av fellesgarasjer er vedtatt. Kostnadsrammen er på kr 41
5 990 000,00 (Prisantydning) 000 000,‑ som utgjør ca kr 331 000,‑ pr andel i tillegg til
112 583 (Andel av

---

[d125_d125 | Side [1]]
usholdninger
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets og 1 000 kWh for hytter. Når det er tegnet avtale om
årsregnskap ligger vedlagt i salgsoppgaven. Norgespris bortfaller eventuell strømstøtte.
Som boligeier må du fortsatt ha en strømavtale med en
Vedtekter/ husordensregler strømleverandør.
Borettslagets vedtekter ligger vedlagt i salgsoppgaven
Du kan lese mer om Norgespris blant annet her: https:/ /
www.regjeringen.no/ no/ tema/ energi/ strom/
Beboeres forpliktelser/dugnad

---

[d125_d125 | Side [1]]
hel eller delvis renovering av fasader/utskifting
Beskrivelse
av vinduer/balansert ventilasjon. Ennå ikke vedtatt pr 06/03-2026. Husleieøkning må påregnes. Garasjelaget
utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes.
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i

---

[d125_d125 | Side [1]]
stnader/ økt
fellesgjeld?
Takstmann: Patrick Bang Det foreligger planer om renovering av vannrør i 2026.
Type takst avholdt av takstmann: Tilstandsrapport Evt vedtak om dette gjøres på ekstraordinær
generalforsamling 06/ 03‑2026. Det foreligger
Sammendrag selgers egenerklæring: Selgers utredninger/ planer om hel eller delvis renovering av
egenerklæringsskjema følger vedlagt salgsoppgaven. fasader/ utskifting av vinduer/ balansert ventilasjon. Ennå
Interessenter oppfordres til å gjennomgå dette nøye. ikke

---

[d125_d125 | Side [1]]
Totalpris inkl. omk. (med Boligkjøperforsikring)) opplyser om at porten på garasjen fungerer bra.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Lånebetingelser fellesgjeld: Borettslaget har en samlet
fellesgjeld på kr 13.960.318,‑ fordelt på andelene:
Estimert totalpris ink. omk Husbanken, annuitetslån
Kr 6 121 479 Rentesats 4,08%, flytende rente
Andel av saldo per 09.03.2026: kr 20.886,09,‑
Total saldo lån: kr 2.589.869,40,‑
Felleskostnader Innfrielsesdato: 31.12.2028
Felleskostnader kr 7 010,‑

---

[d125_d125 | Side [1]]
kumentasjon på at rommet 琀椀lhører boenheten, med mindre
de琀琀e er angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller

---

[d125_d125 | Side [1]]
ar tegnet
Korttidsutleie er tillatt i opptil 30 døgn per år uten boligselgerforsikring som dekker selgers ansvar etter
samtykke fra styret. avhendingsloven begrenset oppad kr. 20 000 000,‑.
Egenerklæringsskjema er vedlagt salgsoppgaven og
interessenter oppfordres til å gjennomgå denne før bud
Diverse inngis.
Borettslagsmodellen innebærer at borettslaget eier
eiendommen, mens andelseierne eier andeler i Boligkjøperforsikring: Kjøper har anledning til å tegne
borettslaget, som gir borett til en bestemt

---

[d125_d125 | Side [1]]
ar bindingstid til 31.12.2026. Avtalen
Styregodkjennelse: Kjøper må godkjennes av følger boligen, og må derfor overtas av kjøper.
borettslagets styre. Styret kan kun nekte godkjenning Norgespris er en ny, statlig ordning, som gir en
dersom det foreligger saklig grunnlag, jf. borettslagsloven forutsigbar og fast strømpris på 50 øre per kWh med
§ 4‑4. mva (40 øre uten mva)gjennom året. Norgespris har et
forbrukstak på 5 000 kWh per måned for husholdninger
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets

---

[d125_d125 | Side [1]]
kostnader Innfrielsesdato: 31.12.2028
Felleskostnader kr 7 010,‑ pr. mnd
Svenska Handelsbanken AB NUF, annuitetslån
Felleskostnader inkulderer: Internett/ grunnpakke tv, Rentesats 5,14%, flytende rente
forsikring, kommunale avgifter, eiendomsskatt, Andel av saldo per 09.03.2026: kr 91.697,19,‑
forretningsførsel, styrehonorar, renter lån, avdrag lån, drift Total saldo lån: kr 11.370.449,‑
55

## Side 56

OM EIENDOMMEN
Innfrielsesdato: 30.12.2034
Beliggenhet
Sikringsordning Lyshovden 211 har en attraktiv og

---

[d125_d125 | Side [1]]
. Ennå
Interessenter oppfordres til å gjennomgå dette nøye. ikke vedtatt pr 06/ 03‑2026. Husleieøkning må påregnes.
Garasjelaget utreder utskifting av garasjeporter.
Følgende opplysninger er spesielt viktig å merke seg: Kostnader ifm dette må påregnes.
‑ Kjenner du til om det er utført arbeid på bad/ våtrom? Moderniseringer og påkostninger: 2014
Renovering bad 1 og 2 inkl ny varmtvannstank, fullført ‑ Pusset opp begge bad
des 2014, utført av Komplett bad AS. ‑ Ny varmepumpe
‑ Ble tettesjikt/ membran/ sluk

---

[d125_d125 | Side [1]]
ingen.no/ no/ tema/ energi/ strom/
Beboeres forpliktelser/dugnad sporsmal‑og‑svar‑om‑norgespris
Dugnad praktiseres 1‑2 ganger i året.
Regulerings og arealplaner
Energimerke Eiendommen er i henhold til reguleringsplan
Energikarakter: D Fyllingsdalen, regulering‑ og bebyggelsesplan for
Energifarge: Gul boligfelt XI, datert 29.07.1967, regulert til frittliggende
eneboliger, en‑etasjes rekkehus, to‑etasjes rekkehus,
leiligheter, turveg, gangsti, lekeplasser, daghjem/
møtelokale og ball‑plass.
61

## Side

---

[d125_d125 | Side [1]]
34
Beliggenhet
Sikringsordning Lyshovden 211 har en attraktiv og sentral beliggenhet i
Borettslaget er dekket av Klare Finans AS, fine og etablerte omgivelser i Fyllingsdalen, tett på flotte
www.klarefinans.no. Laget er sikret mot tap som følge av naturopplevelser. Her er det tilrettelagt for en enkel
at en andelseier ikke betaler sine felleskostnader etter hverdag med gangavstand til det meste man trenger i
gjeldende vilkår. Avtalen om sikring er gyldig til den sies hverdagen! Perfekt for barnefamilier,

---

[d125_d125 | Side [1]]
 av inventar og utstyr som ikke er en del Innredet bod til disp. rom kjeller. Ikke byggemeldt.
av overdragelsen. ‑ Er det foretatt radonmåling?
Radonmålinger med sporfilm uført av Progressa AS
januar 2024.
‑ Radonmåling
Eiendommens
Kjellerstue 133. Sov v bad 49. Sov v trapp 81. Stue 41.
Verdier oppgitt i Bq/ m3 som årsmiddelverdi.
tilstand
‑ Kjenner du til vedtak/ forslag til vedtak om forhold vedr.
eiendommen som kan medføre økte felleskostnader/ økt
fellesgjeld?
Takstmann: Patrick Bang Det foreligger

---

[d125_d125 | Side [1]]
 må påregne at dersom det vedtas vil
18 896 (Omkostninger totalt (med Boligkjøperforsikring)) felleskostnadene økes. Garasjelaget planlegger
utskiftning av garasjeporter, men dette er per tid ikke
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ vedtatt. Utskifting av garasjeport vil være frivillig og
6 112 179 (Totalpris inkl. omk. (uten Boligkjøperforsikring)) betales enkeltvis av de som ønsker å skifte ut port. Eier
6 121 479 (Totalpris inkl. omk. (med Boligkjøperforsikring)) opplyser om at

---

[d125_d125 | Side [1]]
v v bad 49. Sov v trapp 81. Stue 41. Verdier oppgitt i Bq/m3 som årsmiddelverdi.
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om

---

[d125_d125 | Side [1]]
# d125.pdf

## Side 1

ROMSLIG REKKEHUS I FYLLINGSDALEN
Lyshovden 211

## Side 2

Velkommen til
din nye bolig

## Side 3

Velkommen til
din nye bolig

## Side 4

NØKKELINFORMASJON
PRISANTYDNING BOLIGTYPE TOMTEAREAL
Kr 5 990 000,‑ Rekkehus 76 001 m² (eiet)
OMKOSTNING KJØPER EIEFORM
18 896,‑ Borettslag
TOTALPRIS ANTALL SOVEROM
6 121 479,‑ 3
FELLESKOSTNADER ETASJER
7 010,‑ pr. mnd 2
FELLESGJELD BYGGEÅR
Kr 112 583,‑ 1975
BRA‑I/ BRA TOTAL ENERGIMERKING
135/ 135 kvm D ‑ Ikke angitt
4

## Side

---

[d125_d125 | Side [1]]
 antas å være berørt av
utvikles som et levende bydelssentrum og støy fra veitrafikk over grenseverdier gitt av statlige
kollektivknutepunkt. Fyllingsdalen skal ha trygge myndigheter og i kommuneplanens bestemmelser.
gangforbindelser, attraktive offentlige møtesteder og en Antakelsen er basert på overordnede støyberegninger.
tetthet som skaper aktivitet og mangfold. Dette vil kunne få betydning for behandlingen av plan‑
Sentrumsområdene sentralt i Fyllingsdalen skal utvikles og byggesaker som omfatter den

---

[d125_d125 | Side [1]]
alt i Fyllingsdalen skal utvikles og byggesaker som omfatter den aktuelle eiendommen,
til et urbant, attraktivt og lett tilgjengelig bydelssentrum, blant annet medføre utredningsplikt for tiltakshaver/
med offentlige byrom av høy kvalitet og god forslagstiller og eventuelt krav om avbøtende tiltak.
kollektivdekning. Utviklingen skal skje i form av en
bystruktur, der det tilrettelegges for variert arealbruk For mer informasjon om reguleringsforhold, kontakt
med bolig, næring og annen service. De

---

[d125_d125 | Side [1]]
tillatelse, datert. 18.11.2025. Saksnr.
Vedtatt områderegulering i nærheten av eiendommen: 202515765.
‑ PlanID: 63860000. Ikrafttredelsesdato dato: 02.11.2023.
Plannavn: Fyllingsdalen. Gnr 22, 23 og 24, Fyllingsdalen Eiendommen er berørt av Eviny Termo AS sitt
sentrale deler. konsesjonsomra°de for fjernvarmeanlegg.
Fyllingsdalen skal videreutvikles som den grønne
bydelen, med boområder av høy kvalitet. Oasen skal Hele eller deler av eiendommen antas å være berørt av
utvikles som et levende bydelssentrum og

---

[d125_d125 | Side [1]]
sti, lekeplasser, daghjem/
møtelokale og ball‑plass.
61

## Side 62

OM EIENDOMMEN
Eiendommen befinner seg innenfor følgende tilrettelegges for at trafikkvekst tas med kollektiv, gange
hensynssoner: og sykkel, og ikke med bil, og det avsettes areal til
‑ Andre sikringssoner, dekningsgrad: 82% framtidig behov for offentlig sosial infrastruktur. Saksnr:
‑ Båndlegging. Sentral‑/ Regionalnett elforsyning, 202220442.
dekningsgrad: 19,8%
‑ Gul støysone, veistøy, dekningsgrad: 20,1% Godkjente tiltak i nærheten av

---

[d125_d125 | Side [1]]
one, veistøy, dekningsgrad: 20,1% Godkjente tiltak i nærheten av eiendommen:
‑ Rød støysone, veistøy, dekningsgrad: 1,4% ‑ Eiendom 26/ 166, bruksendring, fasadeendring,
bærende konstruksjon, igangsettingstillatelse, datert
Planer i nærheten av eiendommen: 09.10.2025. Saksnr, 202516283.
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. ‑ Eiendom 26/ 269, Tilbygg bolig m.m.
Bystyret legger til grunn at revisjon av Igangsettingstilltatelse, datert 02.01.2024. Saksnr.
KPA‑bestemmelsene skal sluttføres med

---

[d125_d125 | Side [1]]
r
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
104

## Side 105

Primære transportmidler Varer/Tjenester
Oasen 13 min
1. Egen bil
Boots apotek Oasen 13 min
2. Buss
Aldersfordeling barn (0-18 år)
Turmulighetene
Nærhet til skog og mark 96/100
32% i barnehagealder
34% 6-12 år
Støynivået
17% 13-15 år
Lite støynivå 90/100 18% 16-18 år
Trafikk
Lite trafikk 85/100
Familiesammensetning
Sport
Par m. barn
Mowinckelbanen 6

---

[d125_d125 | Side [1]]
 i den minste boden i underetasjen.
Det er montert radonvi昀琀er i regi av bore琀琀slaget i alle rekkehusene.
Elektrisk anlegg
De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål og undersøkelser som forskri昀琀 琀椀l avhendingslova (tryggere bolighandel) § 2-18 inneholder. De琀琀e
kan ikke sammenlignes med en kontroll u琀昀ørt av o昀昀entlig myndighet (Det lokale el琀椀lsyn) eller registrert elektrovirksomhet, og en bygningssakkyndig har
verken kompetanse eller lov 琀椀l å foreta en slik kontroll.
Tilstanden er

---

[d125_d125 | Side [1]]
e overflater er oppgradert og det
er montert peis og varmepumpe. Totalt sett er det
gjennomgående tidsriktig og pen standard.
Her bor du trygt og godt, i en tilnærmet bilfri gate som sørger for
fantastiske oppvekstvilkår!
Mye inkl. i felleskostnader, bla tv/ internett, kommunale avgifter/
eiendomsskatt, forsikring.
• Peis og varmepumpe
• Svært familievennlig planløsning
• Fast parkering i garasje med elbil‑lader
• Veldrevet borettslag
GANGAVSTANDER
• 5 min til buss
• 9 min til Ospeli barnehage
• 13 min til

---

[d125_d125 | Side [1]]
gget. Vestvendt balkong
knutepunkt for handel, helsetjenester og o昀昀entlige kontorer. på 13,8 m² med utgang fra stue i hovedetasjen. Terrasse og
Området er 琀椀lre琀琀elagt for ulike livsfaser med barnehager og balkong er oppført i trekonstruksjoner. Trykkimpregnerte
skoler i gangavstand fra boligene. terrassebord. Rekkverk med stående bord og håndløper på
Hyppige bussavganger fra holdeplassen Sælemyr og Bybanen fra balkong.
Fyllingsdalen terminal mot Bergen sentrum og Flesland.
Kjøre琀椀den 琀椀l Bergen sentrum

---

[d125_d125 | Side [1]]
jon Pr. KVM pr. år Totalt levert pr. år
Periodisk avtrekk 174,52 kWh/m² 25 041 kWh
103

## Side 104

Nabolagsprofil
Lyshovden 211 - Nabolaget Lyshovden - vurdert av 27 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 88/100
Etablerere
Naboskapet
Husdyreiere
Godt vennskap 75/100
Kvalitet på skolene
Offentlig transport Bra 74/100
Lyshovden nord 5 min
Linje 15, 49 0.3 km
Aldersfordeling
Fyllingsdalen terminal 15 min
Linje 2 1.1 km
Oasen terminal 16 min Totalt 13

---

[d125_d125 | Side [1]]
 med
inntektesåret 2026, og den nye modellen henter Fra barna er små, til de er ferdig med grunnskolen er det
informasjon om omsatte boliger fra grunnkretser i stedet korte avstander fra inngangsdøren til både barnehager
for kommuner. og skoler. Det ligger tre barnehager i gangavstand fra
Formuesverdien er en prosentandel av den beregnede boligen, Kidsa Ospeli, Minken barnehage og Lekeklossen
boligverdien. Vestre barnehage, noe som gjør at henting og levering
kan skje på en effektiv måte i en travel

---

[d125_d125 | Side [1]]
datert 02.01.2024. Saksnr.
KPA‑bestemmelsene skal sluttføres med vedtak Bystyret 201916835.
i første kvartal 2027. Hovedmålet med revisjon av ‑ Eiendom 26/ 288, Tilbygg bolig m.m.
KPA‑bestemmelsene er forenkling, fortgang og Igangsettingstillatelse, datert 20.09.2024. Saksnr.
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre 202415557.
gode boliger og nabolag. ‑ Eiendom 26/ 218, Tilbygg til eksisterende garasje ‑
carport. Igangsettingstillatelse, datert. 18.11.2025. Saksnr.
Vedtatt områderegulering

---

[d125_d125 | Side [1]]
randørens anbefalinger for å sikre op琀椀mal dri昀琀 og lengst mulig leve琀椀d.
Forventet leve琀椀d (iht. Byggforskserien 700.320):
- Lu昀琀-琀椀l-lu昀琀 varmepumpe: ca. 10–15 år
Varmtvannstank
Beskrivelse
Varmtvannsbereder på 198 liter fra Oso Hotwater, plassert i bod i underetasjen.
Bereder ble produsert i 2014.
Forventet leve琀椀d (iht. Byggforskserien 700.320):
- Varmtvannsbereder: ca. 15–25 år.
Radonvi昀琀e
Beskrivelse
Radonvi昀琀e fra Progressa, montert i den minste boden i underetasjen.
Det er montert radonvi昀琀er i

---

[d125_d125 | Side [1]]
porten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder,

---

[d125_d125 | Side [1]]
 av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har

---

[d125_d125 | Side [1]]
r/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på

---

[d125_d125 | Side [1]]
te 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: TØ 1
64006230
:ecnerefer
tnemucoD
98

## Side 99

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Ja, kun av faglært
Beskrivelse Renovering bad 1 og 2 inkl ny varmtvannstank, fullført des

---

[d125_d125 | Side [1]]
som anses som åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å avdekke slike forhold. Punktet omfa琀琀er ikke
skjulte eller ikke-synlige forhold, tekniske vurderinger eller forhold som krever spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet. Røykvarslere og håndholdt brannslukningsutstyr vurderes e琀琀er gjeldende forskri昀琀 om brannforebygging.
Helse, miljø og sikkerhet
Vurdering av avvik:
• Åpninger i rekkverk er større enn dagens forskri昀琀skrav 琀椀l

---

[d125_d125 | Side [1]]
ar vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: TØ 3
64006230
:ecnerefer
tnemucoD
100

## Side 101

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring

---

[d125_d125 | Side [1]]
øknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under

---

[d125_d125 | Side [1]]
r moderate avvik
TG2: Avvik som kan kreve 琀椀ltak Opplysninger om oppgradering/modernisering i leilighet/bygg
TG3: Store eller alvorlige avvik er hentet fra eiendomsverdi.no, med forbehold om evt. feil
opplysninger.
TG IU: Konstruksjoner som ikke er undersøkt
Egenerklæringsskjema er ikke kontrollert.
Egenerklæringsskjema blir u琀昀ylt av hjemmelshaver og levert
ansvarlig megler. Skjema vil følge som vedlegg 琀椀l salgsoppgave,
det anbefales ev. interessenter å lese gjennom skjema før et evt
salg/kjøp

---

[d125_d125 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til

---

[d125_d125 | Side [1]]
vokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos

---

[d125_d125 | Side [1]]
ller er det foreta琀琀 琀椀lleggsarbeider på det elektriske anlegget e琀琀er 1.1.1999?
Ja
Eksisterer det samsvarserklæring?
Ja
5. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med avvik som
ikke er utbedret eller kontrollen er over 5 år?
Nei
6. Forekommer det o昀琀e at sikringene løses ut?
Nei
7. Har det vært brann, brann琀椀lløp eller varmgang (for eksempel termiske skader på deksler, kontaktpunkter eller lignende) i boligens

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Betydelig planlagt rehabilitering med usikker kostnad og felleskostnadsøkning: Borettslaget har vedtatt renovering av vannrør og rehabilitering av fellesgarasjer med en kostnadsramme på kr 41 000 000, tilsvarende ca. kr 331 000 per andel i tillegg til eksisterende fellesgjeld. I tillegg utredes hel eller delvis renovering av fasader, utskifting av vinduer og balansert ventilasjon – ennå ikke vedtatt. Dette vil medføre økte felleskostnader, men størrelsen er ukjent.",
      "evidence": [
        "Kostnadsrammen er på kr 41 000 000,‑ som utgjør ca kr 331 000,‑ pr andel i tillegg til det vi har i dag.",
        "Det foreligger planer om renovering av vannrør i 2026.",
        "Det foreligger utredninger/planer om hel eller delvis renovering av fasader/utskifting av vinduer/balansert ventilasjon. Ennå ikke vedtatt pr 06/03-2026. Husleieøkning må påregnes.",
        "Garasjelaget utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes.",
        "per tid er for tidlig å si hvor mye felleskostnadene vil øke som følge av dette.",
        "Felleskostnadene kan bli besluttet å øke etter utarbeidelsen av salgsoppgaven. Styreleder opplyser om at foreløpig renovering/utskiftning av rør og rehabilitering av fellesgarasjer er vedtatt."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Høy radonverdi i kjellerstue: Radonmåling utført januar 2024 viser en verdi på 133 Bq/m³ i kjellerstuen, som overstiger Folkehelseinstituttets anbefalte tiltaksgrense på 100 Bq/m³. Dette utgjør en helserisiko og kan kreve tiltak.",
      "evidence": [
        "Radonmålinger med sporfilm uført av Progressa AS januar 2024.",
        "Kjellerstue 133. Sov v bad 49. Sov v trapp 81. Stue 41. Verdier oppgitt i Bq/m3 som årsmiddelverdi.",
        "Det er montert radonvifter i regi av borettslaget i alle rekkehusene."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Ulovlig innredet bod til disponibelt rom i kjeller: Selger opplyser at bod er innredet til disponibelt rom i kjeller uten at dette er byggemeldt eller godkjent av bygningsmyndighetene. Dette er en åpenbar ulovlighet som kan medføre pålegg om tilbakeføring.",
      "evidence": [
        "Innredet bod til disprom kjeller.",
        "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei",
        "Innredet bod til disp. rom kjeller. Ikke byggemeldt."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Takkonstruksjonen er ikke undersøkt (TGIU): Hele takkonstruksjonen er gjenbygget og kan ikke vurderes av takstmann. Eventuelle skjulte feil og mangler i taket er dermed ukjente, noe som representerer en vesentlig usikkerhet for kjøper.",
      "evidence": [
        "Takkonstruksjon/loft grunnet takkonstruksjonen er gjenbygget. Ikke mulig å vurdere.",
        "Hele takkonstruksjonen er gjenbygget. Det er ingen mulighet til vurdering utover alder og observasjoner fra underliggende etg."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Sluk, membran og tettesjikt på bad i underetasje har passert mer enn halvparten av forventet brukstid (TG2): Badet ble renovert i 2014, men membranløsningen er gammel og sluk har begrenset mulighet for inspeksjon og rengjøring. Eldre membraner svekkes over tid og øker risikoen for lekkasjer og følgeskader.",
      "evidence": [
        "Sluk, membran og tettesjikt på bad (5,8 m²) i underetasje grunnet alder og sluk har begrenset mulighet for inspeksjon og rengjøring.",
        "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
        "Eldre membraner svekkes naturlig over tid, noe som kan medføre redusert tettefunksjon og øke risikoen for utetthet.",
        "Renovering bad 1 og 2 inkl ny varmtvannstank, fullført des 2014, utført av Komplett bad AS."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "HMS-avvik: Rekkverk og håndløper tilfredsstiller ikke dagens krav: Åpninger i innvendig rekkverk er større enn dagens forskriftskrav, håndløper mangler på vegg i innvendig trapp, og rekkverket på balkong/terrasse er for lavt i forhold til dagens forskriftskrav. Dette utgjør en sikkerhetsrisiko, særlig for barn.",
      "evidence": [
        "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
        "Det mangler håndløper på vegg i det innvendige trappeløpet.",
        "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens forskriftskrav.",
        "Håndløper på innvendig trapp må monteres på vegg for å tilfredsstille krav på byggetidspunktet.",
        "Det er ikke krav om utbedring av rekkverkshøyde opp til dagens forskriftskrav."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R7",
      "description": "Støyeksponering: Eiendommen er berørt av gul og rød støysone fra veistøy: Eiendommen har henholdsvis 20,1% dekningsgrad i gul støysone og 1,4% i rød støysone. Dette kan medføre utredningsplikt og krav om avbøtende tiltak ved fremtidige plan- og byggesaker.",
      "evidence": [
        "Gul støysone, veistøy, dekningsgrad: 20,1%",
        "Rød støysone, veistøy, dekningsgrad: 1,4%",
        "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter.",
        "Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagstiller og eventuelt krav om avbøtende tiltak."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Strømavtale med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers frihet til å velge strømleverandør frem til utløpsdato. Merk: Norgespris er en statlig ordning med fast pris på 50 øre/kWh inkl. mva, og strømstøtte bortfaller ved tegning av Norgespris.",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året.",
        "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Fellesgjeld og høy totalpris: Andel fellesgjeld er kr 112 583 med flytende rente (Husbanken 4,08% og Svenska Handelsbanken 5,14%). Samlet totalpris inkl. fellesgjeld og omkostninger er kr 6 121 479. Flytende rente innebærer risiko for økte rentekostnader som vil påvirke felleskostnadene. Merk: Denne risikoen må ses i sammenheng med R1, da vedtatt rehabilitering vil tilføre ytterligere ca. kr 331 000 i gjeld per andel.",
      "evidence": [
        "Andel av fellesgjeld: Kr 112 583 pr. 09.03.2026",
        "Husbanken, annuitetslån. Rentesats 4,08%, flytende rente.",
        "Svenska Handelsbanken AB NUF, annuitetslån. Rentesats 5,14%, flytende rente.",
        "Totalpris inkl. omk. (med Boligkjøperforsikring): 6 121 479",
        "Borettslaget har en samlet fellesgjeld på kr 13.960.318,‑ fordelt på andelene."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R10",
      "description": "Rom under terreng vurdert som risikokonstruksjon: Fuktsikring, drenering og isolasjon fra byggeåret (1975) kan avvike betydelig fra dagens standarder. Høy luftfuktighet, mangelfull drenering eller dårlig lufting kan over tid føre til sopp, muggdannelse og skadeinsekter. Merk: Hulltaking ble utført og relativ luftfuktighet ble målt til 32,9% ved 22,1°C, som er under kritisk grense på 60%, noe som demper risikoen noe.",
      "evidence": [
        "Rom under terreng i eldre boliger må derfor generelt sees på som en risikokonstruksjon.",
        "Fuktsikring, drenering og isolasjon fra byggeåret kan avvike betydelig fra dagens standarder.",
        "Høy luftfuktighet, mangelfull drenering eller dårlig lufting over tid kan føre til utfordringer som utvikling av sopper, muggdannelse og angrep fra skadeinsekter.",
        "Det ble foretatt hulltaking i påforet kjellervegg i den største boden i underetasjen. Relativ luftfuktighet ble målt med probe. Den viste relativ luftfuktighet på 32,9% ved en temperatur på 22,1 grader.",
        "Relativ luftfuktighet under 60%"
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "6 tinglyste heftelser og rettigheter på eiendommen: Det er tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting, herunder bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett. Disse kan begrense kjøpers rådighet over eiendommen.",
      "evidence": [
        "På eiendommen er det tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting til ny hjemmelshaver.",
        "Disse omhandler bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett.",
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Begrenset adgang til utleie: Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers mulighet til å leie ut boligen og kan påvirke investeringsverdien.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Eiendommen er berørt av fjernvarmekonsesjonsområde: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg. Dette kan innebære tilknytningsplikt til fjernvarme ved fremtidige bygge- eller rehabiliteringstiltak.",
      "evidence": [
        "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R14",
      "description": "Garasjebygg er ikke tilstandsvurdert: Garasjeplassen i rekke har ukjent byggeår og er ikke tilstandsvurdert. Det kan dermed foreligge feil, mangler eller vedlikeholdsbehov som ikke er omtalt i rapporten.",
      "evidence": [
        "Ukjent byggeår.",
        "Det er ikke foretatt tilstandsvurdering av bygningen. Det betyr at det kan være feil, mangler eller vedlikeholdsbehov som ikke er videre omtalt i denne rapporten.",
        "Merk: Bygget er ikke tilstandsvurdert",
        "Garasjelaget utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Energimerke D – dårlig energieffektivitet: Boligen har energikarakter D (gul), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere strøm- og oppvarmingskostnader for kjøper, og boligen vil sannsynligvis ikke tilfredsstille fremtidige energikrav uten oppgradering.",
      "evidence": [
        "Energikarakter: D",
        "Energifarge: Gul",
        "Periodisk avtrekk 174,52 kWh/m² 25 041 kWh"
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Vedtatt områderegulering og pågående kommuneplanrevisjon kan påvirke eiendommens omgivelser: Fyllingsdalen er under betydelig byutvikling med vedtatt områderegulering (PlanID 63860000, ikrafttredelse 02.11.2023) og pågående revisjon av kommuneplanens arealdel (KPA 2027). Dette kan medføre økt fortetting, trafikk og endrede omgivelser rundt eiendommen.",
      "evidence": [
        "Vedtatt områderegulering i nærheten av eiendommen: PlanID: 63860000. Ikrafttredelsesdato: 02.11.2023.",
        "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
        "tilrettelegges for at trafikkvekst tas med kollektiv, gange og sykkel, og ikke med bil",
        "De eksisterende borettslagene i Fyllingsdalen gis mulighet for noe stedstilpasset fortetting."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Eldre vannrør og VVS-anlegg nærmer seg slutten av forventet levetid: Boligen er fra 1975 og mer enn halvparten av forventet brukstid for eldre deler av VVS-anlegget er oppbrukt. Skader kan plutselig oppstå på eldre anlegg, noe som kan medføre uventede kostnader for kjøper.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid for eldre deler av anlegget er oppbrukt.",
        "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.",
        "Det foreligger planer om renovering av vannrør i 2026."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Styregodkjennelse kreves for kjøper: Kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte godkjenning ved saklig grunnlag, representerer dette en usikkerhet i kjøpsprosessen som kan forsinke eller i ytterste konsekvens hindre gjennomføring av handelen.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4."
      ],
      "source_documents": [
        "d125_d125"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "tilstandsgrad TG2 TG3 etasjeskille gulv mot grunn underetasje",
    "drenering fuktinnsig kjeller underetasje tilstandsrapport",
    "elektrisk anlegg alder tilstandsgrad sikringsskap",
    "pipe ildsted peis tilstandsgrad vedovn",
    "varmepumpe alder levetid tilstandsgrad",
    "garasjeporter utskifting kostnad frivillig enkeltvis",
    "generalforsamling 27.05.2026 vedtak rehabilitering",
    "båndlegging sentralnett elforsyning hensynssone konsekvens"
  ],
  "reasoning": "\nGjennomgang av alle 16 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Rehabilitering/fellesgjeld:** Meget godt dokumentert. Kostnadsramme kr 41 mill vedtatt, tilsvarer kr 331 000 per andel. Ytterligere tiltak under utredning. Confidence justeres opp til 0,99 da dokumentasjonen er svært klar og konsistent på tvers av flere steder i salgsoppgaven.\n\n**R2 – Radon:** Godt dokumentert med konkrete måleverdier. Kjellerstue 133 Bq/m³ overstiger tiltaksgrensen på 100 Bq/m³. Det er montert radonvifter av borettslaget, noe som er et positivt tiltak, men verdien er fortsatt over grensen. Confidence justeres marginalt ned til 0,97 da radonvifter allerede er installert.\n\n**R3 – Ulovlig innredning:** Meget godt dokumentert med tre separate bekreftelser i dokumentet. Confidence opprettholdes på 0,97.\n\n**R4 – Takkonstruksjon TGIU:** Godt dokumentert. Confidence opprettholdes på 0,93.\n\n**R5 – Bad underetasje TG2:** Godt dokumentert. Renovert 2014, membran passert halvparten av levetid. Confidence opprettholdes på 0,92.\n\n**R6 – HMS rekkverk/håndløper:** Meget godt dokumentert. Viktig presisering: det er ikke krav om utbedring av rekkverkshøyde til dagens krav, men håndløper på vegg er et krav fra byggetidspunktet. Confidence opprettholdes på 0,95.\n\n**R7 – Støysoner:** Godt dokumentert med konkrete dekningsgrader. Confidence opprettholdes på 0,90.\n\n**R8 – Strømavtale Norgespris:** Godt dokumentert. Viktig tillegg: ved Norgespris bortfaller strømstøtte, noe som kan være negativt for kjøper. Confidence opprettholdes på 0,88.\n\n**R9 – Fellesgjeld/totalpris:** Godt dokumentert. Viktig å se i sammenheng med R1 – den vedtatte rehabiliteringen vil øke gjelden per andel med ytterligere ca. kr 331 000. Confidence justeres marginalt opp til 0,87.\n\n**R10 – Rom under terreng risikokonstruksjon:** Dokumentert, men hulltaking viste relativ luftfuktighet på 32,9% som er godt under kritisk grense på 60%. Dette demper risikoen noe. Confidence justeres ned til 0,80.\n\n**R11 – Tinglyste heftelser:** Godt dokumentert. Legalpant er også relevant å nevne. Confidence justeres marginalt ned til 0,85 da innholdet i heftelsene ikke er fullstendig beskrevet.\n\n**R12 – Begrenset utleie:** Godt dokumentert. Confidence opprettholdes på 0,85.\n\n**R13 – Fjernvarmekonsesjon:** Dokumentert med én kilde. Konsekvensene er ikke nærmere beskrevet i dokumentet. Confidence justeres ned til 0,75.\n\n**R14 – Garasje ikke tilstandsvurdert:** Godt dokumentert. Garasjeporter under utredning for utskifting, men dette er frivillig og betales enkeltvis. Confidence opprettholdes på 0,82.\n\n**R15 – Energimerke D:** Dokumentert. Confidence justeres ned til 0,80 da energimerke D ikke nødvendigvis er uvanlig for boliger fra 1975, og konsekvensene for fremtidige krav er usikre.\n\n**R16 – Reguleringsplaner/byutvikling:** Dokumentert. Confidence opprettholdes på 0,78 da dette er en indirekte risiko.\n\n**Nye risikoer identifisert:**\n\n**R17 – Eldre VVS-anlegg:** Dokumentet nevner eksplisitt at mer enn halvparten av forventet brukstid for eldre deler av VVS-anlegget er oppbrukt, og at skader plutselig kan oppstå. Dette er en selvstendig risiko utover den planlagte rørrenovasjonen. Confidence 0,85.\n\n**R18 – Styregodkjennelse:** Kjøper må godkjennes av styret. Selv om dette er standard for borettslag og sjelden et problem, representerer det en prosessrisiko. Confidence 0,70.\n\n**Vurderte men ikke inkluderte risikoer:**\n- Båndlegging sentralnett elforsyning (19,8% dekningsgrad): Nevnt i dokumentet men konsekvensene er ikke beskrevet nærmere. Bør undersøkes nærmere.\n- Etasjeskille/gulv mot grunn: Nevnt i oppsummeringen av avvik men ikke beskrevet i detalj i de tilgjengelige dokumentchunkene. Bør undersøkes.\n- Pipe/ildsted: Peis er nevnt som positivt salgsargument, men tilstandsgrad er ikke beskrevet i de tilgjengelige chunkene.\n"
}

## Raw Response
```json
{
  "id": "msg_01JQgTkmx8to1G4m2SnDp2D8",
  "container": null,
  "content": [
    {
      "id": "toolu_01QGmJKridTDuBDHzsMTUoLC",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Betydelig planlagt rehabilitering med usikker kostnad og felleskostnadsøkning: Borettslaget har vedtatt renovering av vannrør og rehabilitering av fellesgarasjer med en kostnadsramme på kr 41 000 000, tilsvarende ca. kr 331 000 per andel i tillegg til eksisterende fellesgjeld. I tillegg utredes hel eller delvis renovering av fasader, utskifting av vinduer og balansert ventilasjon – ennå ikke vedtatt. Dette vil medføre økte felleskostnader, men størrelsen er ukjent.",
            "evidence": [
              "Kostnadsrammen er på kr 41 000 000,‑ som utgjør ca kr 331 000,‑ pr andel i tillegg til det vi har i dag.",
              "Det foreligger planer om renovering av vannrør i 2026.",
              "Det foreligger utredninger/planer om hel eller delvis renovering av fasader/utskifting av vinduer/balansert ventilasjon. Ennå ikke vedtatt pr 06/03-2026. Husleieøkning må påregnes.",
              "Garasjelaget utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes.",
              "per tid er for tidlig å si hvor mye felleskostnadene vil øke som følge av dette.",
              "Felleskostnadene kan bli besluttet å øke etter utarbeidelsen av salgsoppgaven. Styreleder opplyser om at foreløpig renovering/utskiftning av rør og rehabilitering av fellesgarasjer er vedtatt."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Høy radonverdi i kjellerstue: Radonmåling utført januar 2024 viser en verdi på 133 Bq/m³ i kjellerstuen, som overstiger Folkehelseinstituttets anbefalte tiltaksgrense på 100 Bq/m³. Dette utgjør en helserisiko og kan kreve tiltak.",
            "evidence": [
              "Radonmålinger med sporfilm uført av Progressa AS januar 2024.",
              "Kjellerstue 133. Sov v bad 49. Sov v trapp 81. Stue 41. Verdier oppgitt i Bq/m3 som årsmiddelverdi.",
              "Det er montert radonvifter i regi av borettslaget i alle rekkehusene."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Ulovlig innredet bod til disponibelt rom i kjeller: Selger opplyser at bod er innredet til disponibelt rom i kjeller uten at dette er byggemeldt eller godkjent av bygningsmyndighetene. Dette er en åpenbar ulovlighet som kan medføre pålegg om tilbakeføring.",
            "evidence": [
              "Innredet bod til disprom kjeller.",
              "Er innredning/utbyggingen godkjent hos bygningsmyndighetene? Nei",
              "Innredet bod til disp. rom kjeller. Ikke byggemeldt."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Takkonstruksjonen er ikke undersøkt (TGIU): Hele takkonstruksjonen er gjenbygget og kan ikke vurderes av takstmann. Eventuelle skjulte feil og mangler i taket er dermed ukjente, noe som representerer en vesentlig usikkerhet for kjøper.",
            "evidence": [
              "Takkonstruksjon/loft grunnet takkonstruksjonen er gjenbygget. Ikke mulig å vurdere.",
              "Hele takkonstruksjonen er gjenbygget. Det er ingen mulighet til vurdering utover alder og observasjoner fra underliggende etg."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Sluk, membran og tettesjikt på bad i underetasje har passert mer enn halvparten av forventet brukstid (TG2): Badet ble renovert i 2014, men membranløsningen er gammel og sluk har begrenset mulighet for inspeksjon og rengjøring. Eldre membraner svekkes over tid og øker risikoen for lekkasjer og følgeskader.",
            "evidence": [
              "Sluk, membran og tettesjikt på bad (5,8 m²) i underetasje grunnet alder og sluk har begrenset mulighet for inspeksjon og rengjøring.",
              "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
              "Eldre membraner svekkes naturlig over tid, noe som kan medføre redusert tettefunksjon og øke risikoen for utetthet.",
              "Renovering bad 1 og 2 inkl ny varmtvannstank, fullført des 2014, utført av Komplett bad AS."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "HMS-avvik: Rekkverk og håndløper tilfredsstiller ikke dagens krav: Åpninger i innvendig rekkverk er større enn dagens forskriftskrav, håndløper mangler på vegg i innvendig trapp, og rekkverket på balkong/terrasse er for lavt i forhold til dagens forskriftskrav. Dette utgjør en sikkerhetsrisiko, særlig for barn.",
            "evidence": [
              "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
              "Det mangler håndløper på vegg i det innvendige trappeløpet.",
              "Rekkverket på balkong eller terrasse er for lavt i forhold til dagens forskriftskrav.",
              "Håndløper på innvendig trapp må monteres på vegg for å tilfredsstille krav på byggetidspunktet.",
              "Det er ikke krav om utbedring av rekkverkshøyde opp til dagens forskriftskrav."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R7",
            "description": "Støyeksponering: Eiendommen er berørt av gul og rød støysone fra veistøy: Eiendommen har henholdsvis 20,1% dekningsgrad i gul støysone og 1,4% i rød støysone. Dette kan medføre utredningsplikt og krav om avbøtende tiltak ved fremtidige plan- og byggesaker.",
            "evidence": [
              "Gul støysone, veistøy, dekningsgrad: 20,1%",
              "Rød støysone, veistøy, dekningsgrad: 1,4%",
              "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter.",
              "Dette vil kunne få betydning for behandlingen av plan- og byggesaker som omfatter den aktuelle eiendommen, blant annet medføre utredningsplikt for tiltakshaver/forslagstiller og eventuelt krav om avbøtende tiltak."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Strømavtale med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers frihet til å velge strømleverandør frem til utløpsdato. Merk: Norgespris er en statlig ordning med fast pris på 50 øre/kWh inkl. mva, og strømstøtte bortfaller ved tegning av Norgespris.",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året.",
              "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Fellesgjeld og høy totalpris: Andel fellesgjeld er kr 112 583 med flytende rente (Husbanken 4,08% og Svenska Handelsbanken 5,14%). Samlet totalpris inkl. fellesgjeld og omkostninger er kr 6 121 479. Flytende rente innebærer risiko for økte rentekostnader som vil påvirke felleskostnadene. Merk: Denne risikoen må ses i sammenheng med R1, da vedtatt rehabilitering vil tilføre ytterligere ca. kr 331 000 i gjeld per andel.",
            "evidence": [
              "Andel av fellesgjeld: Kr 112 583 pr. 09.03.2026",
              "Husbanken, annuitetslån. Rentesats 4,08%, flytende rente.",
              "Svenska Handelsbanken AB NUF, annuitetslån. Rentesats 5,14%, flytende rente.",
              "Totalpris inkl. omk. (med Boligkjøperforsikring): 6 121 479",
              "Borettslaget har en samlet fellesgjeld på kr 13.960.318,‑ fordelt på andelene."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R10",
            "description": "Rom under terreng vurdert som risikokonstruksjon: Fuktsikring, drenering og isolasjon fra byggeåret (1975) kan avvike betydelig fra dagens standarder. Høy luftfuktighet, mangelfull drenering eller dårlig lufting kan over tid føre til sopp, muggdannelse og skadeinsekter. Merk: Hulltaking ble utført og relativ luftfuktighet ble målt til 32,9% ved 22,1°C, som er under kritisk grense på 60%, noe som demper risikoen noe.",
            "evidence": [
              "Rom under terreng i eldre boliger må derfor generelt sees på som en risikokonstruksjon.",
              "Fuktsikring, drenering og isolasjon fra byggeåret kan avvike betydelig fra dagens standarder.",
              "Høy luftfuktighet, mangelfull drenering eller dårlig lufting over tid kan føre til utfordringer som utvikling av sopper, muggdannelse og angrep fra skadeinsekter.",
              "Det ble foretatt hulltaking i påforet kjellervegg i den største boden i underetasjen. Relativ luftfuktighet ble målt med probe. Den viste relativ luftfuktighet på 32,9% ved en temperatur på 22,1 grader.",
              "Relativ luftfuktighet under 60%"
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "6 tinglyste heftelser og rettigheter på eiendommen: Det er tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting, herunder bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett. Disse kan begrense kjøpers rådighet over eiendommen.",
            "evidence": [
              "På eiendommen er det tinglyst 6 heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting til ny hjemmelshaver.",
              "Disse omhandler bestemmelse om gjerde, bruksrett, erklæring/avtale og forkjøpsrett.",
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Begrenset adgang til utleie: Korttidsutleie er kun tillatt i opptil 30 døgn per år uten samtykke fra styret. Dette begrenser kjøpers mulighet til å leie ut boligen og kan påvirke investeringsverdien.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Eiendommen er berørt av fjernvarmekonsesjonsområde: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg. Dette kan innebære tilknytningsplikt til fjernvarme ved fremtidige bygge- eller rehabiliteringstiltak.",
            "evidence": [
              "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R14",
            "description": "Garasjebygg er ikke tilstandsvurdert: Garasjeplassen i rekke har ukjent byggeår og er ikke tilstandsvurdert. Det kan dermed foreligge feil, mangler eller vedlikeholdsbehov som ikke er omtalt i rapporten.",
            "evidence": [
              "Ukjent byggeår.",
              "Det er ikke foretatt tilstandsvurdering av bygningen. Det betyr at det kan være feil, mangler eller vedlikeholdsbehov som ikke er videre omtalt i denne rapporten.",
              "Merk: Bygget er ikke tilstandsvurdert",
              "Garasjelaget utreder utskifting av garasjeporter. Kostnader ifm dette må påregnes."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Energimerke D – dårlig energieffektivitet: Boligen har energikarakter D (gul), noe som indikerer relativt høyt energiforbruk. Dette kan medføre høyere strøm- og oppvarmingskostnader for kjøper, og boligen vil sannsynligvis ikke tilfredsstille fremtidige energikrav uten oppgradering.",
            "evidence": [
              "Energikarakter: D",
              "Energifarge: Gul",
              "Periodisk avtrekk 174,52 kWh/m² 25 041 kWh"
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Vedtatt områderegulering og pågående kommuneplanrevisjon kan påvirke eiendommens omgivelser: Fyllingsdalen er under betydelig byutvikling med vedtatt områderegulering (PlanID 63860000, ikrafttredelse 02.11.2023) og pågående revisjon av kommuneplanens arealdel (KPA 2027). Dette kan medføre økt fortetting, trafikk og endrede omgivelser rundt eiendommen.",
            "evidence": [
              "Vedtatt områderegulering i nærheten av eiendommen: PlanID: 63860000. Ikrafttredelsesdato: 02.11.2023.",
              "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
              "tilrettelegges for at trafikkvekst tas med kollektiv, gange og sykkel, og ikke med bil",
              "De eksisterende borettslagene i Fyllingsdalen gis mulighet for noe stedstilpasset fortetting."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Eldre vannrør og VVS-anlegg nærmer seg slutten av forventet levetid: Boligen er fra 1975 og mer enn halvparten av forventet brukstid for eldre deler av VVS-anlegget er oppbrukt. Skader kan plutselig oppstå på eldre anlegg, noe som kan medføre uventede kostnader for kjøper.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid for eldre deler av anlegget er oppbrukt.",
              "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.",
              "Det foreligger planer om renovering av vannrør i 2026."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Styregodkjennelse kreves for kjøper: Kjøper må godkjennes av borettslagets styre. Selv om styret kun kan nekte godkjenning ved saklig grunnlag, representerer dette en usikkerhet i kjøpsprosessen som kan forsinke eller i ytterste konsekvens hindre gjennomføring av handelen.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4."
            ],
            "source_documents": [
              "d125_d125"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "tilstandsgrad TG2 TG3 etasjeskille gulv mot grunn underetasje",
          "drenering fuktinnsig kjeller underetasje tilstandsrapport",
          "elektrisk anlegg alder tilstandsgrad sikringsskap",
          "pipe ildsted peis tilstandsgrad vedovn",
          "varmepumpe alder levetid tilstandsgrad",
          "garasjeporter utskifting kostnad frivillig enkeltvis",
          "generalforsamling 27.05.2026 vedtak rehabilitering",
          "båndlegging sentralnett elforsyning hensynssone konsekvens"
        ],
        "reasoning": "\nGjennomgang av alle 16 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Rehabilitering/fellesgjeld:** Meget godt dokumentert. Kostnadsramme kr 41 mill vedtatt, tilsvarer kr 331 000 per andel. Ytterligere tiltak under utredning. Confidence justeres opp til 0,99 da dokumentasjonen er svært klar og konsistent på tvers av flere steder i salgsoppgaven.\n\n**R2 – Radon:** Godt dokumentert med konkrete måleverdier. Kjellerstue 133 Bq/m³ overstiger tiltaksgrensen på 100 Bq/m³. Det er montert radonvifter av borettslaget, noe som er et positivt tiltak, men verdien er fortsatt over grensen. Confidence justeres marginalt ned til 0,97 da radonvifter allerede er installert.\n\n**R3 – Ulovlig innredning:** Meget godt dokumentert med tre separate bekreftelser i dokumentet. Confidence opprettholdes på 0,97.\n\n**R4 – Takkonstruksjon TGIU:** Godt dokumentert. Confidence opprettholdes på 0,93.\n\n**R5 – Bad underetasje TG2:** Godt dokumentert. Renovert 2014, membran passert halvparten av levetid. Confidence opprettholdes på 0,92.\n\n**R6 – HMS rekkverk/håndløper:** Meget godt dokumentert. Viktig presisering: det er ikke krav om utbedring av rekkverkshøyde til dagens krav, men håndløper på vegg er et krav fra byggetidspunktet. Confidence opprettholdes på 0,95.\n\n**R7 – Støysoner:** Godt dokumentert med konkrete dekningsgrader. Confidence opprettholdes på 0,90.\n\n**R8 – Strømavtale Norgespris:** Godt dokumentert. Viktig tillegg: ved Norgespris bortfaller strømstøtte, noe som kan være negativt for kjøper. Confidence opprettholdes på 0,88.\n\n**R9 – Fellesgjeld/totalpris:** Godt dokumentert. Viktig å se i sammenheng med R1 – den vedtatte rehabiliteringen vil øke gjelden per andel med ytterligere ca. kr 331 000. Confidence justeres marginalt opp til 0,87.\n\n**R10 – Rom under terreng risikokonstruksjon:** Dokumentert, men hulltaking viste relativ luftfuktighet på 32,9% som er godt under kritisk grense på 60%. Dette demper risikoen noe. Confidence justeres ned til 0,80.\n\n**R11 – Tinglyste heftelser:** Godt dokumentert. Legalpant er også relevant å nevne. Confidence justeres marginalt ned til 0,85 da innholdet i heftelsene ikke er fullstendig beskrevet.\n\n**R12 – Begrenset utleie:** Godt dokumentert. Confidence opprettholdes på 0,85.\n\n**R13 – Fjernvarmekonsesjon:** Dokumentert med én kilde. Konsekvensene er ikke nærmere beskrevet i dokumentet. Confidence justeres ned til 0,75.\n\n**R14 – Garasje ikke tilstandsvurdert:** Godt dokumentert. Garasjeporter under utredning for utskifting, men dette er frivillig og betales enkeltvis. Confidence opprettholdes på 0,82.\n\n**R15 – Energimerke D:** Dokumentert. Confidence justeres ned til 0,80 da energimerke D ikke nødvendigvis er uvanlig for boliger fra 1975, og konsekvensene for fremtidige krav er usikre.\n\n**R16 – Reguleringsplaner/byutvikling:** Dokumentert. Confidence opprettholdes på 0,78 da dette er en indirekte risiko.\n\n**Nye risikoer identifisert:**\n\n**R17 – Eldre VVS-anlegg:** Dokumentet nevner eksplisitt at mer enn halvparten av forventet brukstid for eldre deler av VVS-anlegget er oppbrukt, og at skader plutselig kan oppstå. Dette er en selvstendig risiko utover den planlagte rørrenovasjonen. Confidence 0,85.\n\n**R18 – Styregodkjennelse:** Kjøper må godkjennes av styret. Selv om dette er standard for borettslag og sjelden et problem, representerer det en prosessrisiko. Confidence 0,70.\n\n**Vurderte men ikke inkluderte risikoer:**\n- Båndlegging sentralnett elforsyning (19,8% dekningsgrad): Nevnt i dokumentet men konsekvensene er ikke beskrevet nærmere. Bør undersøkes nærmere.\n- Etasjeskille/gulv mot grunn: Nevnt i oppsummeringen av avvik men ikke beskrevet i detalj i de tilgjengelige dokumentchunkene. Bør undersøkes.\n- Pipe/ildsted: Peis er nevnt som positivt salgsargument, men tilstandsgrad er ikke beskrevet i de tilgjengelige chunkene.\n"
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
    "input_tokens": 22798,
    "output_tokens": 6957,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
