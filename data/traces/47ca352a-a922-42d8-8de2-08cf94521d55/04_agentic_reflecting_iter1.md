# Trace: agentic_reflecting_iter1
- **Run ID:** 47ca352a-a922-42d8-8de2-08cf94521d55
- **Tidspunkt:** 2026-03-23T21:08:46.077696+00:00
- **Varighet:** 140.88s
- **Input tokens:** 25034
- **Output tokens:** 7579

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
Risiko 1: Uregistrert/ikke byggemeldt garasje: Det foreligger ikke dokumentasjon på at garasjen i garasjerekken er byggemeldt. Kommunen kan kreve tilbakeføring, omsøking, ilegge overtredelsesgebyr og pålegg. Kjøper overtar ansvar, risiko og eventuelle konsekvenser.
  Confidence: 0.95
  Evidens: Det foreligger ikke dokumentasjon på at tilhørende garasje i garasjerekke er byggemeldt.; Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette.

Risiko 2: Overbeheftelsesrisiko: Dersom summen av tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorer gir pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.
  Confidence: 0.9
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.; Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Risiko 3: Legalpant og prioritetsrisiko: Kommunen og sameiet har legalpant som ikke fremgår av grunnboksutskriften. Legalpant til kommunen har høyere prioritet enn legalpant til sameiet, og begge har prioritet foran tinglyste banklån.
  Confidence: 0.92
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.

Risiko 4: Ingen sikringsordning for fellesgjeld: Sameiet har ikke sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at sameiet misligholder fellesgjelden.
  Confidence: 0.9
  Evidens: Sameiet har ikke sikringsordning for fellesgjeld.; Sameiet har panterett i seksjonen for krav mot sameieren for et beløp som svarer til folketrygdens grunnbeløp.

Risiko 5: Fellesgjeld med flytende rente: Sameiet har lån med flytende rente, noe som medfører risiko for økte felleskostnader ved rentejusteringer.
  Confidence: 0.88
  Evidens: Ettersom sameiet har lån med flytende rente, kan fellesutgiftene endres ved rentejusteringer.; Restsaldo pr. 25.02.2026: kr 3 335 811,00. Andel av saldo: kr 298 028,49. Innfrielsesdato: 30.06.2050.

Risiko 6: Negativ egenkapital i sameiet: Sameiet hadde per 31.12.2024 negativ egenkapital, noe som kan indikere finansiell sårbarhet, selv om dette forklares med regnskapsmessige forhold knyttet til eierseksjonssameier.
  Confidence: 0.75
  Evidens: Sameiet hadde per 31.12.2024 en negativ egenkapital.; I notene til regnskapet forklares dette med at verdien av bygget ikke balanseføres i et eierseksjonssameie, og at påkostninger og rehabiliteringer kostnadsføres løpende.

Risiko 7: Manglende radonmåling og radonsperre: Det er ikke foretatt radonmålinger på eiendommen, og bygget er heller ikke utført med radonsperre. Dette utgjør en potensiell helserisiko for beboere.
  Confidence: 0.9
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Det bør gjennomføres radonmålinger.; Det er ikke utført radonmåling på eiendommen. Eiendommen ligger i et område vurdert med moderat til lav aktsomhetsgrad ifølge radonkart.

Risiko 8: Mangelfull ventilasjon: Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen. Vinduer må benyttes for tilførsel av luft i alle soverom, noe som ikke er tilfredsstillende.
  Confidence: 0.92
  Evidens: Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen.; Vinduer må benyttes for tilførsel av luft i alle soverom. Det er montert en lufteløsning på vindu i stuen som kan låse vinduet i åpen posisjon.; Det er ingen tilluftsventiler forøvrig; vinduer må benyttes for tilførsel av luft.

Risiko 9: Bad – sluk, membran og tettesjikt med passert brukstid: Mer enn halvparten av forventet brukstid er passert på membranløsningen på badet. Ukjent membranløsning i våtsoner på veggene, og det er ikke fremlagt dokumentasjon. Risiko for vannlekkasje.
  Confidence: 0.93
  Evidens: Bad - Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.; Ukjent membranløsning i våtsoner på veggene, og det er ikke fremlagt dokumentasjon. Tilstanden bør overvåkes.; Risikoen for vannlekkasje til tilstøtende rom.

Risiko 10: Eldre avløpsrør med økt lekkasjerisiko: Avløpsrørene er eldre og har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.
  Confidence: 0.88
  Evidens: Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.; Ukjent. Det finnes ikke noen fullgod oversikt fra tidligere eiere.

Risiko 11: Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir usikkerhet om byggets tekniske tilstand og fremtidige vedlikeholdskostnader.
  Confidence: 0.9
  Evidens: Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.; For å lukke avviket må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt.

Risiko 12: Elektrisk anlegg ikke kontrollert av takstmann: Det elektriske anlegget er ikke kontrollert som del av tilstandsrapporten. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
  Confidence: 0.85
  Evidens: Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.; Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.

Risiko 13: Ufaglært arbeid på bad/våtrom: Servantskap og dusjsett ble skiftet i 2025 av tømrer uten rørlegger. Ufaglært arbeid på våtrom kan medføre skjulte feil og mangler.
  Confidence: 0.78
  Evidens: Ufaglært arbeid: Hvilket år ble jobben fullført?: 2025. Beskrivelse av arbeidet: Servantskap og dusjsett ble skiftet. Dette arbeidet krever ikke rørlegger, og arbeidet ble utført av tømrer.

Risiko 14: Svertesopp på bad: I 2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Selv om dette er behandlet, kan det indikere underliggende fukt- og ventilasjonsproblemer.
  Confidence: 0.82
  Evidens: 2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Dette ble vasket og behandlet med soppfjerner. Parallelt ble det installert nytt ventilasjonssystem for badene for alle leiligheter i sameie da dårlig ventilasjon var felles.

Risiko 15: Historisk skadedyrsproblem (rotter/mus): I 2016 ble det observert rotter/mus i kjeller. Selv om problemet er håndtert, kan det ikke utelukkes at problemet kan gjenoppstå.
  Confidence: 0.7
  Evidens: I 2016(?) ble det observert rotter/mus i kjeller. Engasjert skadedyrsfirma som satte inn feller og mulig andre tiltak. Ikke vært et problem siden.

Risiko 16: Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2 i kommuneplanen, men det er ikke gitt en spesifikk forklaring på hva denne sonen innebærer for eiendommen. Dette skaper usikkerhet om fremtidige begrensninger.
  Confidence: 0.8
  Evidens: Eiendommen berøres av hensynssone H190_2: Andre sikringssoner, vist i kommuneplanen. Det er ikke gitt en spesifikk forklaring i de vedlagte dokumentene på hva denne sonen innebærer for eiendommen.

Risiko 17: Byutvikling og fortetting i nærområdet: Eiendommen ligger i et område definert som 'Indre by (utviklingsområder)' i kommuneplanen, noe som indikerer prioritert byutvikling og fortetting. En bygård bygges på andre siden av gaten med ferdigstilling i 2026, og halve veien er stengt i forbindelse med byggearbeidene.
  Confidence: 0.78
  Evidens: Eiendommen er avsatt til bebyggelse og anlegg og ligger i et område definert som 'Indre by (utviklingsområder)'. Dette indikerer at området er prioritert for byutvikling og fortetting.; Bygges bygård på andre siden av gaten, opplyses om ferdigstilling ila 2026. Halve veien er stengt ifm prosjektet.

Risiko 18: Eiendommen på byantikvarens gule liste: Eiendommen er registrert på byantikvarens gule liste, noe som kan medføre begrensninger på fremtidige endringer og rehabilitering av bygget.
  Confidence: 0.82
  Evidens: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at...; Regulert til boliger med tilhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste.

Risiko 19: Manglende energimerking: Boligen er ikke energimerket i forbindelse med salget. Kjøper har rett til å få utarbeidet energiattest på selgers regning innen ett år etter avtaleinngåelse, men manglende energimerking gir usikkerhet om energikostnader.
  Confidence: 0.75
  Evidens: Boligen er ikke energimerket i forbindelse med salget. Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått.

Risiko 20: Eiendomsskatt: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi, noe som representerer en løpende kostnad for kjøper.
  Confidence: 0.7
  Evidens: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.

Risiko 21: Ekstraordinær kapitalinnkalling i sameiet: I 2024 ble det fakturert ekstraordinær kapitalinnkalling på kr 159 998, noe som indikerer at sameiet har hatt uforutsette kostnader og at lignende innkallinger kan forekomme i fremtiden.
  Confidence: 0.8
  Evidens: Ekstraordinær kapitalinnkalling, fakturert 159 998; SUM ANDRE INNTEKTER 159 998

Risiko 22: Private stikkledninger for vann og avløp: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, noe som betyr at sameiet/seksjonseier er ansvarlig for vedlikehold og eventuelle reparasjoner av disse.
  Confidence: 0.78
  Evidens: Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private.

Risiko 23: Bygget fra 1892 – høy alder medfører generell slitasjerisiko: Bygget er fra 1892, noe som innebærer at mange bygningsdeler kan ha høy alder og økt risiko for skjulte feil, slitasje og behov for fremtidige utbedringer.
  Confidence: 0.85
  Evidens: Byggeår: 1892. Byggeåret er basert på opplysninger fra eiendomsmatrikkelen.; Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.

Dokumentkontekst:
[d027_d027 | Side [1]]
alpant på inntil 2G som sikkerhet for krav knyttet til
Tinglyste heftelser
sameieforholdet, som felleskostnader. Legalpant er pant
Tinglyste heftelser og rettigheter: Følgende tinglyste som ikke vises i grunnboksutskriften, og har prioritet
heftelser følger eiendommen ved salg, og ved inngivelse foran tinglyste lån, for eksempel banklån på seksjonen.
av bud vil disse være akseptert av budgiver/ kjøper: Legalpant til kommunen har høyere prioritet enn
45

## Side 46

OM EIENDOMMEN
legalpant til sameiet.

---

[d027_d027 | Side [1]]
tuasjonskart, kreditorer aksepterer å slette sitt pant uten å få full
målebrev, reguleringsplaner m/ bestemmelser etc. ligger innfrielse av det underliggende kravet.
vedlagt i salgsoppgaven eller kan fås ved henvendelse til
megler. Vi oppfordrer interessenter til å gjøre seg kjent Legalpant: Kommunen har legalpant som sikkerhet for
med disse. betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til
Tinglyste

---

[d027_d027 | Side [1]]
ndikerer at området er prioritert for byutvikling og
fortetting. Selger bærer risikoen for at kjøper kan få tinglyst skjøte
uten andre heftelser enn de som det er avtalt at følger
Eiendommen omfattes også av kommunedelplan KDP‑17 med i handelen. Gjennomføring av handelen er betinget
for torg og møteplasser, vedtatt 22.04.2009. Dette er en av det ikke er tinglyst heftelser som ikke lar seg innfri/
temaplan som gir en overordnet ramme for utvikling av slette.
torg og møteplasser i bydelene.
Dersom eiendommen

---

[d027_d027 | Side [1]]
ing av slette.
torg og møteplasser i bydelene.
Dersom eiendommen skulle bli overbeheftet i
Eiendommen berøres av hensynssone H190_2: Andre salgsprosessen, det vil si at summen av fremtidige
sikringssoner, vist i kommuneplanen. Det er ikke gitt en tinglyste heftelser overstiger den forventede
spesifikk forklaring i de vedlagte dokumentene på hva salgssummen, er det en forutsetning for at handel skal
denne sonen innebærer for eiendommen. kunne gjennomføres at kreditorene gir nødvendig
pantefrafall. Dersom

---

[d027_d027 | Side [1]]
ioritet enn
45

## Side 46

OM EIENDOMMEN
legalpant til sameiet. sameiet legal panterett i den enkelte eierseksjon,
begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Vei, vann og avløp
Kjøper og selger er forpliktet til å signere den standard
Eiendommen er tilknyttet offentlig vann‑ og kjøpekontrakten utarbeidet av Emera som en del av
avløpssystem. Stikkledningene fra eiendommen og ut til eiendomshandleren. Kjøpekontrakten kan gjennomgås
det kommunale nettet er private, og hos eiendomsmegler før

---

[d027_d027 | Side [1]]
Det er ikke
uvanlig at det i mange kommuner er mangelfulle arkiv for
Tomt
tiden før 1965, da bygningsloven ble landsdekkende.
Tomtetype: Eiet
Det foreligger ikke dokumentasjon på at tilhørende
Tomtestørrelse: 590 m² garasje i garasjerekke er byggemeldt.
Felles eiet tomt på 590 m². Fra kommunen kan det komme reaksjoner overfor ny
eier, ved f.eks. krav om tilbakeføring eller krav om
Eiendommen har et pent opparbeidet felles gårdsrom omsøking, ileggelse av overtredelsesgebyr og pålegg
med sittegrupper og

---

[d027_d027 | Side [1]]
sameiet har lån med flytende rente, kan
545 (Tinglysningsgebyr ‑ pantedokument) fellesutgiftene endres ved rentejusteringer.
545 (Tinglysningsgebyr skjøte)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Eiendomsskatt
146 040 (Omkostninger totalt (uten
Boligkjøperforsikring)) I Oslo kommune er det eiendomsskatt på boliger og fast
159 540 (Omkostninger totalt (med eiendom som overstiger en fastsatt verdi. Informasjonen
Boligkjøperforsikring)) over er hentet fra eiendomsskattelistene.
http:/ /

---

[d027_d027 | Side [1]]
 avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Regulert 琀椀l boliger med 琀椀lhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste.
Ska琀琀etakst og formuesverdi
År Kommentar
2024 Fås ved henvendelse 琀椀l ligningskontoret
Oppdragsnr.: 13722-3031 Befaringsdato: 13.03.2025 Side: 15 av 18
80

## Side 81

Bjerregaards gate 16 A, 0172 OSLO Øyum Takst og Eiendom AS
Gnr 218 - Bnr 58 Heggelibakken 4
0301 OSLO 0375 OSLO
Forsikring
Selskap Avtalenr Type

---

[d027_d027 | Side [1]]
til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
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
Spørsmål for bolig i

---

[d027_d027 | Side [1]]
e gjennomføres at kreditorene gir nødvendig
pantefrafall. Dersom pantefrafall ikke oppnås vil handel
Området er stadig under endring/ utvikling, bygg settes ikke kunne gjennomføres. Skulle det bli tinglyst flere
opp, rehabiliteres og rives ned. Vi anbefaler derfor alle utleggspant på eiendommen, kan handel bare
budgivere å sette seg inn i gjeldende gjennomføres forutsatt at også eventuelle fremtidige
reguleringsbestemmelser. Kopi av situasjonskart, kreditorer aksepterer å slette sitt pant uten å få

---

[d027_d027 | Side [1]]
i
23. Seksjoner som eies av nærstående eller gjennom et vedlagte materiell eller på https:/ /
firma regnes også med. www.soderbergpartners.no/ eiendom/ boligkjoper/
I henhold til eierseksjonsloven § 31 er sameierne
Lovanvendelse
ansvarlige overfor sameiets kreditorer i forhold til sin
sameiebrøk. Ved manglende betaling av fellesutgifter har Regelverk og generelle opplysninger
46

## Side 47

OM EIENDOMMEN
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller

---

[d027_d027 | Side [1]]
edtatte reguleringsplaner,
som vedlagt salgsoppgaven. I skjemaet fremkommer andre planer, nabovarsel eller offentlige vedtak som kan
følgende informasjon: medføre endringer i bruken av eiendommen eller av dens
omgivelser?
Følgende informasjon fremkommer: Ja.
Avtrekksvifter på bad m.m. ble skiftet i 2023 Ikke endringer i bruken av selve eiendommen, men:
Bygges bygård på andre siden av gaten, opplyses om
Kjenner du til om det er/ har vært feil tilknyttet ferdigstilling ila 2026. Halve veien er stengt

---

[d027_d027 | Side [1]]
g, ileggelse av overtredelsesgebyr og pålegg
med sittegrupper og beplantning. mv. Uavhengig av reaksjonsform fra kommunen, overtar
kjøper ansvar, risiko og eventuelle konsekvenser knyttet
Oppgitt tomteareal er hentet fra eiendomsregisteret og til dette.
kan avvike fra nøyaktig areal.
Innhold
Beskrivelse av
Leiligheten ligger i 2. etasje og består av følgende rom:
eiendommen
Entré, bad, kjøkken, stue og tre soverom.
Type eiendom
Leiligheten disponerer en kjellerbod på 6,8 m² og har
Eieform: Eierseksjon egen

---

[d027_d027 | Side [1]]
ruk.
§ 3
Rettslig råderett
Den enkelte sameier har full rettslig råderett over sin seksjon med evt. tilleggsareal, herunder rett
til salg, pantsettelse og utleie. De andre sameierne har likevel panterett i seksjonen for krav mot
sameieren for et beløp som svarer til folketrygdens grunnbeløp, jfr eierseksjonsloven § 25.
Ethvert salg eller bortleie av seksjoner skal meldes skriftlig til sameiets styre/forretningsfører med
opplysning om hvem som er ny eier/leietaker.
§ 4
Rett til bruk
4.1 Seksjonen
Den

---

[d027_d027 | Side [1]]
a knyttet noen kommentarer til elanlegget ut i fra helt Sameiets forsikringsselskap: Protector Forsikring Asa
enkle vurderingskriterier. Siden elanlegget ikke er
kontrollert er det sannsynlig at det siden kan avdekkes Polisenummer fellesforsikring: 1600309
avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
43

## Side 44

OM EIENDOMMEN
Husdyr: Dyrehold søkes styret.
Oppvarming
Forkjøpsrett: Det er ingen forkjøpsrett på eiendommen. Elektrisk oppvarming med panelovner. Det er elektrisk
gulvvarme på

---

[d027_d027 | Side [1]]
 med nettingvegger søknadspliktig tiltak er utført i samsvar med tillatelsen og
og har egen kjøreport, med et målbart areal på ca. 8 m². øvrige krav etter plan‑ og bygningslovgivningen. Det er
Maksimal kjørehøyde er 192 cm og kjørebredde er ca. viktig å merke seg at selv om ferdigattest foreligger, gir
230 cm. det ingen garanti for at bygget er oppført i henhold til
tillatelsen og gjeldende regelverk, eller at det senere er
utført arbeid på bygget som ikke er byggemeldt eller
Adkomst
godkjent.
På høyre

---

[d027_d027 | Side [1]]
), renter og avdrag på
5 500 000,00 (Prisantydning) fellesgjeld, bygningsforsikring og forretningsførsel.
298 028 (Andel av fellesgjeld)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Fellesutgiftene er fordelt slik:
5 798 028 (Pris inkl. fellesgjeld)
‑ Felleskostnader: kr 6 562,50
Omkostninger ‑ Get‑TV/ Bredbånd: kr 199,00
‑ Garasje: kr 173,00
13 500 (Boligkjøperforsikring* (valgfritt))
144 950 (Dokumentavgift) Ettersom sameiet har lån med flytende rente, kan
545 (Tinglysningsgebyr ‑

---

[d027_d027 | Side [1]]
v fellesgjelden (IN‑ordning). vei til alt bydelen har å by på av servicetilbud, butikker,
kaféer, restauranter og utdanningsinstitusjoner. Den
populære St. Hanshaugen park ligger kun få meter fra
Sikringsordning
boligen.
Sameiet har ikke sikringsordning for fellesgjeld. Sameiet
har panterett i seksjonen for krav mot sameieren for et Det er kort gangavstand til St. Hanshaugen Senter med
beløp som svarer til folketrygdens grunnbeløp, jf. blant annet Rema 1000, postkontor, Giardini Frisører

---

[d027_d027 | Side [1]]
res i et eierseksjonssameie, og at www.regjeringen.no/ no/ tema/ energi/ strom/
påkostninger og rehabiliteringer kostnadsføres løpende. sporsmal‑og‑svar‑om‑norgespris
Strømforbruket til selger i 2025 var 4562kWh, kostnad: 4
Vedtekter/ husordensregler
525 kr (377kr/ mnd i snitt).
Eier forplikter seg til å gjøre seg kjent med vedtekter og
eventuelle husordensregler. Kopi av disse ligger vedlagt i
Verneklasse/ SEFRAK
salgsoppgaven.
Eiendommen er registrert på byantikvarens gule liste,
noe som betyr at

---

[d027_d027 | Side [1]]
 med begrensninger som følger av at boligen
•Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det er innredet på befaringen. Tunge møbler o.l. blir normalt ikke
tidspunkt oppmålingen fant sted. flyttet på. Skader eller mangler som kan være skjult bak
innredning kan derfor ikke oppdages ved befaringen. Servitutter
•Bruksareal (BRA) er det måleverdige arealet som er innenfor og heftelser som hefter ved eiendommen er ikke vurdert, med
omsluttede vegger målt i gulvhøyde (bruttoareal minus arealet

---

[d027_d027 | Side [1]]
 for 琀椀lstandsanalysen. Rapportens alder skal framkomme."
Gla琀琀e innerdører med terskler. Håndtak er by琀琀et i 2025. Dørene er malt
"Mangel av rapport for fellesdeler registreres som et avvik." i 2025.
Vurdering av avvik:
• Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l.
for fellesdeler i bygget. Innvendige dører - 2
I denne sammenhengen skal det se琀琀es TG 2 når det ikke foreligger
teknisk rapport og også når det er behov for vedlikehold og utbedring av Soverom 1: Gla琀琀 innerdør med

---

[d027_d027 | Side [1]]
 gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når

---

[d027_d027 | Side [1]]
t
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra

---

[d027_d027 | Side [1]]
ad
Sameie
ikke undersøkt, f.eks. fordi en del av bygget ikke har vært
tilgjengelig for inspeksjon. Disse delene kan dermed ha Bjerregaardsgate 16 Sameie
feil eller mangler som ikke er avdekket.
Organisasjonsnummer: 914638534
Tilstandsrapporten beskriver byggverkets tekniske
tilstand. Det er ikke foretatt kontroll av de elektriske Forretningsfører: Obos Eiendomsforvaltning
installasjonene (el‑takst) selv om bygningssakkyndig kan
ha knyttet noen kommentarer til elanlegget ut i fra helt Sameiets

---

[d027_d027 | Side [1]]
or og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE

---

[d027_d027 | Side [1]]
. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller

---

[d027_d027 | Side [1]]
endringer, brannceller UTTRYKK OG DEFINISJONER
osv.
•For skjulte konstruksjoner, som vann og avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges

---

[d027_d027 | Side [1]]
rderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som

---

[d027_d027 | Side [1]]
 NS 3600.2018 må det utarbeides en
BOLIGBYGG MED FLERE BOENHETER Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da
de琀琀e er opp 琀椀l bore琀琀slag/sameie å rekvirere er kostnadses琀椀mat ikke
sa琀琀.
Byggeår Kommentar
1892 Byggeåret er basert på opplysninger
INNVENDIG
fra eiendomsmatrikkelen.
Anvendelse
Bolig Over昀氀ater
Standard Gulv: 3- stavs parke琀琀. Vegg昀氀ater: Malte 昀氀ater. Malte 昀氀iser mellom
benkeskap og overskap på kjøkkenet. Himling: Malt gla琀琀 himling.
Leiligheten har en standard med

---

[d027_d027 | Side [1]]
v rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE

---

[d027_d027 | Side [1]]
 (35 db) inngangsdør. Vurdering av avvik:
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med
radonsperre.
Andre utvendige forhold Konsekvens/琀椀ltak
• Det bør gjennomføres radonmålinger.
Fra gjeldende standard: "For boliger med fellesdel skal teknisk rapport
for fellesdelene e琀琀erspørres. Dersom det foreligger en rapport, så skal
den vurderes med hensyn på relevans og egnethet og vedlegges som Innvendige dører
grunnlag for 琀椀lstandsanalysen. Rapportens alder skal framkomme."
Gla琀琀e

---

[d027_d027 | Side [1]]
 vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og

---

[d027_d027 | Side [1]]
ategori.
•Normal slitasjegrad: forventet slitasje av materiale i overflaten
som er basert på enkle visuelle observasjoner. Kan vurderes •Se øvrig informasjon om areal i rapporten, Norsk Standard 3940
sammen med bygningsdelens alder. (2012 og 2023) og veiledningen til disse.
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
termer og definisjoner punkt 3.9). PERSONVERN
AREALBEREGNING FOR BOENHETER
Verdi, takstingeniøren og

---

[d027_d027 | Side [1]]
e Eltilsyn (DLE) eller eventuelt andre tilsvarende fellesdeler i bygget. For å lukke avviket må det utarbeides
kontrollinstanser med avvik som ikke er utbedret eller en Tilstandsanalyserapport/ vedlikeholdsplan for
kontrollen er over 5 år? fellesdeler i bygget. Da dette er opp til borettslag/ sameie
‑ Nei å rekvirere er kostnadsestimat ikke satt.
Forekommer det ofte at sikringene løses ut? ‑ Radon | Det er ikke foretatt radonmålinger, og bygget er
‑ Nei heller ikke utført med radonsperre. Det bør

---

[d027_d027 | Side [1]]
snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som

---

[d027_d027 | Side [1]]
 vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør

---

[d027_d027 | Side [1]]
ilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen •

---

[d027_d027 | Side [1]]
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Ved avvik som ikke krever umiddelbare 琀椀ltak (ingen umiddelbar kostnad) så blir TG2 markert med en lysere farge.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved

---

[d027_d027 | Side [1]]
snr.: 13722-3031 Befaringsdato: 13.03.2025 Side: 10 av 18
75

## Side 76

Bjerregaards gate 16 A, 0172 OSLO Øyum Takst og Eiendom AS
Gnr 218 - Bnr 58 Heggelibakken 4
0301 OSLO 0375 OSLO
Tilstandsrapport
Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre Ukjent.
琀椀l vannskader. 3. Er alle elektriske arbeider/anlegg i boligen u琀昀ørt av en registrert
elektroinstallasjonsvirksomhet?
Ukjent Det 昀椀nnes ikke noen fullgod oversikt fra 琀椀dligere eiere.
Ven琀椀lasjon
4. Er det elektriske anlegget

---

[d027_d027 | Side [1]]
 Ny versjon Kommentar
1 26.02.2026
2 26.02.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 13722-3031 Befaringsdato: 13.03.2025 Side: 16 av 18
81

## Side 82

Bjerregaards gate 16 A, 0172 OSLO Øyum Takst og Eiendom AS
Gnr 218 - Bnr 58 Heggelibakken 4
0301 OSLO 0375 OSLO
Forutsetninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av

---

[d027_d027 | Side [1]]
 avtale om
For 2025 er det budsjettert med et overskudd på kr 34 Norgespris bortfaller eventuell strømstøtte.
000,‑. Sameiets disponible midler var per 31.12.2024 på kr
114 790,‑. Som boligeier må du fortsatt ha en strømavtale med en
strømleverandør.
Sameiet hadde per 31.12.2024 en negativ egenkapital. I
notene til regnskapet forklares dette med at verdien av Du kan lese mer om Norgespris blant annet her: https:/ /
bygget ikke balanseføres i et eierseksjonssameie, og at www.regjeringen.no/ no/ tema/

---

[d027_d027 | Side [1]]
er forbruk.
Næringsseksjonen skal dekke alle særskilte kostnader forbundet med at sameiet har påtatt seg
administrasjonen av drift, vedlikehold, regnskapsførsel og innkreving, jf § 20.
§ 8
Den enkelte sameiers vedlikeholdsplikt
Den enkelte sameier skal fullt ut og for egen regning holde bruksenheten med tilleggsareal i
forsvarlig stand og vedlikeholde slikt som overflater av mark og takterrasser, balkonger, dører og
vinduer innvendig, rør, sikringsskap fra og med første hovedsikring/inntakssikring,

---

[d027_d027 | Side [1]]
, og ikke selve sameiet, står som eier av boligene. Det medfører at all rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert

---

[d027_d027 | Side [1]]
eskostnader)
fordeles på sameierne etter sameiebrøken med mindre annet fremgår av denne bestemmelse
eller særlige grunner taler for å fordele kostnadene etter nytten for den enkelte bruksenhet eller
etter forbruk.
Kostnader forbundet med kollektiv tv og evt. bredbånd fordeles med lik andel pr. boligseksjon.
Kostnader til styrehonorar, revisjon, forretningsførsel og andre administrasjonskostnader skal
fordeles med lik andel pr seksjon.
Den enkelte sameier betaler akontobeløp fastsatt av sameiermøtet eller

---

[d027_d027 | Side [1]]
ler fastmontert inventar som naturlig hører bruksenheten/boligen til, skal skaden utbedres av
sameiet. Utgiftene kan kreves dekket av sameier etter tredje ledd.
Skade på innbo og løsøre skal utbedres av skadelidte sameier. Sameiet hefter ikke for eventuelle
skader på skadelidtes innbo og/eller løsøre.
Sameiet og skadelidte sameiere kan kreve erstatning for tap som følger av at sameieren
misligholder sine plikter, etter samme regler som i borettslagslovens §§ 5-13 og 5-15.
Sameier kan kreve erstatning for

---

[d027_d027 | Side [1]]
(cid:41)(cid:24)(cid:21)(cid:36)(cid:24)(cid:25)(cid:2)(cid:5)
6 av 13
(cid:5)
101

## Side 102

BJERREGAARDSGATE 16 SAMEIE
ORG.NR. 914 638 534, KUNDENR. 7445
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 841 937 714 777 775 000 848 000
Andre inntekter 3 159 998 58 0 0
SUM DRIFTSINNTEKTER 1 001 935 714 835 775 000 848 000
DRIFTSKOSTNADER:
Personalkostnader 4 -4 230 -4 230 -4 230 -4 000
Styrehonorar 5 -30 000 -30 000 -30 000 -30

---

[d027_d027 | Side [1]]
 ulempe for sameieren. Sameieren skal gi adgang til bruksenheten for nødvendig
ettersyn og vedlikehold av installasjonene.
En sameier kan med styrets godkjenning gjennomføre tiltak på fellesarealene som er nødvendige
på grunn av sameierens eller husstandsmedlemmenes funksjonshemming. Godkjenning kan ikke
nektes uten saklig grunn.
§ 7
Felleskostnader
7.1 Generelt
Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet (felleskostnader)
fordeles på sameierne etter sameiebrøken med mindre

---

[d027_d027 | Side [1]]
l ha forretningsfører. Styret ansetter forretningsfører og andre funksjonærer i
samsvar med lov om eierseksjoner § 41
§ 16
Forsikring
Sameiet er ansvarlig for at eiendommen til enhver tid holdes forsvarlig forsikret i et godkjent
selskap. Andre forsikringer er den enkelte sameier ansvarlig for.
§ 17
Mindretallsvern
Sameiermøtet, styret eller andre som representer sameiet kan ikke treffe beslutning som er egnet
til å gi visse sameiere eller andre en urimelig fordel på andre sameieres bekostning.
§

---

[d027_d027 | Side [1]]
yste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
I 2016(?)

---

[d027_d027 | Side [1]]
lige rådigheten over
seksjonen,
113

## Side 114

 Innføring av vedtektsbestemmelsene om en annen fordeling av felleskostnadene enn
bestemt i § 7.
3. Det kreves tilslutning fra samtlige sameiere for vedtak om salg eller bortfeste av
hele eller deler av eiendommen.
Sameiermøtet kan ikke treffe beslutning som er egnet til å gi visse sameiere eller andre en
urimelig fordel på andre sameieres bekostning.
§ 15
Forretningsfører
Sameiet skal ha forretningsfører. Styret ansetter forretningsfører og andre

---

[d027_d027 | Side [1]]
kelte sameier betaler akontobeløp fastsatt av sameiermøtet eller styret til dekning av sin
andel av felleskostnadene. Akontobeløpet skal også dekke avsetning til fremtidig vedlikehold,
påkostninger eller andre fellestiltak på eiendommen dersom dette er besluttet av sameiermøtet.
7. 2 Særskilt fordeling av kostnader for næringsseksjon nr 17
Parkeringsplassene i garasjen er organisert i egen næringsseksjon nr 17.
For hver parkeringsplass i garasjen skal det, betales like stort utgiftsbidrag.
110

## Side

---

[d027_d027 | Side [1]]
vlån 13 3 387 891 3 431 709
SUM LANGSIKTIG GJELD 3 387 891 3 431 709
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 4 406 5 193
Leverandørgjeld 8 492 10 116
Påløpte renter 1 360 22 402
Påløpte avdrag 0 3 036
SUM KORTSIKTIG GJELD 14 258 40 747
SUM EGENKAPITAL OG GJELD 129 048 111 188
Pantstillelse 0 0
Garantiansvar 0 0
Oslo, __.__.2025
Styret i Bjerregaardsgate 16 Sameie
Kristoffer Eppeland Sondre Barli Ylva Helene Hallingby
Kirsten Kierulf-vieira
Vedlegg 1 8 av 13 Årsregnskap 7445.pdf
103

## Side

---

[d027_d027 | Side [1]]
r driftsmidlenes økonomiske levetid.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 793 349
Kabel-TV 38 208
Garasjeleie 10 380
SUM INNKREVDE FELLESKOSTNADER 841 937
NOTE: 3
ANDRE INNTEKTER
Ekstraordinær kapitalinnkalling, fakturert 159 998
SUM ANDRE INNTEKTER 159 998
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -4 230
SUM PERSONALKOSTNADER -4 230
Det har verken

---

[d027_d027 | Side [1]]
ter er inkludert i
felleskostnadene og faktureres boligselskapet samlet.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
Kr 298 028 pr. 25.02.2026
Lånebetingelser fellesgjeld: Sameiet har følgende lån og
Estimert totalpris ink. omk
vilkår:
Kr 5 957 568
Bank: OBOS‑banken AS
Lånenummer: 98207886475
Type: Annuitetslån, 12 terminer per år
35

## Side 36

OM EIENDOMMEN
Restsaldo pr. 25.02.2026: kr 3 335 811,00
Beliggenhet
Andel av saldo: kr 298 028,49
Innfrielsesdato: 30.06.2050 Leiligheten

---

[d027_d027 | Side [1]]
eksjonsbegjæring av ___/___ 201X (vedlegg 1), med situasjonsplan og
plantegninger.
Sameiet har til formål å ivareta sameiernes fellesinteresser og administrasjon av eiendommen
med fellesanlegg.
§ 2
Organisering av sameiet
Sameiet består av 16 boligseksjoner (heretter i fellesskap omtalt som ”bolig”) og 1
næringsseksjon. For hver seksjon er det fastsatt en sameiebrøk som uttrykker sameieandelens
størrelse. For boligseksjonene bygger sameiebrøkene på hoveddelens BRA areal, eksklusive evt
tilleggsareal. For

---

[d027_d027 | Side [1]]
t -70 985
Feieavgift -2 720
Renovasjonsavgift -77 535
Miljøgebyr (is/snø fra tak) -5 000
SUM KOMMUNALE AVGIFTER -156 239
NOTE: 9
ANDRE DRIFTSKOSTNADER
Renhold ved firmaer -26 325
Andre fremmede tjenester -246
Kontingenter -2 130
Bank- og kortgebyr -2 331
SUM ANDRE DRIFTSKOSTNADER -31 032
NOTE: 10
FINANSINNTEKTER
Renter av driftskonto i OBOS-banken 610
Andre renteinntekter 180
SUM FINANSINNTEKTER 790
NOTE: 11
FINANSKOSTNADER
Renter og gebyr på lån OBOS-banken -253 784
OBOS-banken -31
SUM FINANSKOSTNADER

---

[d027_d027 | Side [1]]
het, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Ikke endringer i bruken av selve eiendommen, men: Bygges bygård på andre siden av gaten, opplyses om
ferdigstilling ila 2026. Halve veien er stengt ifm

---

[d027_d027 | Side [1]]
elde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
89

## Side 90

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende
Sporveg,

---

[d027_d027 | Side [1]]
tnyttelsesgraden etter en teoretisk etasjehøyde
på 3 meter.
§ 6. Reguleringsplaner innenfor planområdet som er stadfestet i tidsrommet mellom 4.9.1974 og stadfestelse av
nærværende plan, skal gjelde foran denne plan.
S-2937, 01.10.87 (se tidl. S-2255)
FORSLAG TIL ENDREDE REGULSERINGSBESTEMMELSER (NY PARAGRAF 7) FOR
SENTRUM OG INDRE SONE (SONEPLANEN).
Miljøverndepartementet har i brev av 28. juli 1977 og 19. oktober 1977 i medhold av paragraf 28,1,jfr. paragraf
27 i bygningslov av 18. juni 1965 stadfestet

---

[d027_d027 | Side [1]]
an S‑2255 KLOAKKLEDN.
«Reguleringsplan for Oslo sentrum og indre sone», Overført fra: KNR: 0301 GNR: 218 BNR: 58
vedtatt 28.07.1977. Formålet er regulert til bolig/
forretning/ kontor. I henhold til planens § 4 skal det ved 1960/ 519062‑1/ 105 12.11.1960 BEST OM GARASJE/
nybygging i områder regulert til blanding av bolig/ kontor/ PARKERING
forretning innpasses flest mulig boliger. Planen er helt Kan ikke slettes uten samtykke fra bygningsrådet
eller delvis opphevet som følge av Kommuneplan 2015, Overført

---

[d027_d027 | Side [1]]
nenfor denne begrensningslinjen skal
arealene nyttes som vist på planen.
§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på
planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer.
§ 3. Før byggetillatelse kan gis, skal det foreligge detaljert bebyggelsesplan for vedkommende eiendom. Etter
bygningsrådets bestemmelse i det enkelte tilfelle kan bebyggelsen tillates oppført i inntil 5 etasjer.
§ 4. I

---

[d027_d027 | Side [1]]
.
med entreprenør om gratis parkering ved siden av
byggeområdet. Ikke varslet at veien skal stenges igjen Ventilasjon:
ifm prosjektet. Det er mekanisk avtrekk på badet, installert i 2023. På
kjøkkenet er det kjøkkenventilator med kullfilter og en
Kjenner du til om det er/ har vært sopp/ råteskader/ avtrekksventil i himling. Det er ingen tilluftsventiler
insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal forøvrig; vinduer må benyttes for tilførsel av luft.
eller i andre boliger) som rotter, mus,

---

[d027_d027 | Side [1]]
 28,1,jfr. paragraf
27 i bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av departementet,
S-2255.
Pgf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.
Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale
myndigheter for å bringe klarhet i eventuelle bevaringsinteresser.
Når behandling av

---

[d027_d027 | Side [1]]
veflom
H390 - Deponi
90

## Side 91

n).
n
ø
gr
g
o
g
g
y
S-2255 tr
mart,
S
-
0
3
Reguleringsbestemmelser i tilknytning til endret reguleringsplan for O2s0lo sentrum og in-
ot
m
dresoneiOslokommune. Osl o
-
5
1
0
2
n
pla
ne
u
Vedtaksdato: 28.07.1977 m
m
Ko
Vedtattav: Miljøverndepartementet 2(
6
2
k
Vedtaksdokumenter: 197701394 sa
5,
1
0
Lovverk: BL1965 9. 2
0
3.
Høydereferanse: OSLOLOKAL k 2
dta
Merknader: Planenerheltellerdelvveisopphevetsomfølgeavbystyretsvedtak23.9.15,
Kommuneplan2015. SeogsåS
y
-
s
2t

---

[d027_d027 | Side [1]]
ret 23.09.2015, sak 262
Dato: 25.02.2026 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 153660/86527460
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt

---

[d027_d027 | Side [1]]

Boligen er ikke energimerket i forbindelse med salget. http:/ / riksantikvaren.maps.arcgis.com/ apps/
Det gjøres oppmerksom på at kjøper kan få utarbeidet en webappviewer/ index.html?
energiattest på selgers regning, innen ett år etter at id=545b8e996b6e4e1fbcb65f69299a7167
avtalen om salg er inngått.
44

## Side 45

OM EIENDOMMEN
Regulerings og arealplaner
1953/ 300887‑1/ 105 20.03.1953 BEST. OM VANN/
Eiendommen er omfattet av reguleringsplan S‑2255 KLOAKKLEDN.
«Reguleringsplan for Oslo sentrum og indre

---

[d027_d027 | Side [1]]
7460 Deres ref.:
Høydereferanser Adresse: Bjerregaards gate 16
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 218/58
87

## Side 88

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
88

## Side 89

0074466
0044466
0014466
0083466
6644700
6644400
6644100
6643800
597000 597300 597600
597000 597300 597600
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 25.02.2026 Kartet viser utsnitt av

---

[d027_d027 | Side [1]]
ndepartementet har i brev av 28. juli 1977 og 19. Oktober 1977 i medhold av par 28,1, jfr. par 27 i
bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av departementet.
Ny paragraf ble vedtatt av Oslo bystyre 1.10.1987, S-2937.
§ 1. Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne begrensningslinjen skal
arealene nyttes som vist på

---

[d027_d027 | Side [1]]
et
eller delvis opphevet som følge av Kommuneplan 2015, Overført fra: KNR: 0301 GNR: 218 BNR: 58
som gjelder foran ved eventuell motstrid.
2014/ 202886‑1/ 200 11.03.2014 SEKSJONERING
Eiendommen omfattes av Kommuneplan 2015‑2030, Opprettet seksjoner:
vedtatt 23.09.2015. I kommuneplanen er eiendommen SNR: 6
avsatt til bebyggelse og anlegg og ligger i et område Formål: Bolig
definert som «Indre by (utviklingsområder)». Dette Sameiebrøk: 52/ 597
indikerer at området er prioritert for byutvikling og
fortetting.

---

[d027_d027 | Side [1]]
følgeavbystyretsvedtak23.9.15,
Kommuneplan2015. SeogsåS
y
-
s
2t y9
re
3
ts
7,1.10.87endr.reg.best.
b
Knytning(er)motandreplaanver:V300589,V290689,V300187,V080384,26394,20483,
ge
øl
16578, 37684, 21884,mVf131284, V100495, 5984, 23383, 39183, 6382, 41871, 2390,
o
s
V160184, V28018
h
6
ev
,etV190482N2, 43392, 1491, V240993, 2490, 20090, 17490, 9993,
p
V190482,3483,o

---

[d027_d027 | Side [1]]
årav2side(r)inkludertdenne.
Besøksadresse:
Plan-ogbygningsetaten Sentralbord:+4721802180
Vahlsgate1,0187Oslo
Oslokommune Kundesenteret:+4723491000
Postadresse:
postmottak@pbe.oslo.kommune.no
Boks364Sentrum,
oslo.kommune.no/plan-bygg-og-eiendom Org.Nr.:NO971040823MVA
0102Oslo
91

## Side 92

S-2255
S-2255, 28.7.77 (SE ENDR.§7, S-2937)
REGULERINGSBESTEMMELSER TIL ENDRET REGULERINGSPLAN FOR OSLO SENTRUM OG INDRE
SONE I OSLO KOMMUNE.
Miljøverndepartementet har i brev av 28. juli 1977 og 19. Oktober 1977 i

---

[d027_d027 | Side [1]]
idisk) Spredt fritidsbebyggelse, fremtidig
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 -

---

[d027_d027 | Side [1]]
erket ABC). Det er sprinkleranlegg i
leiligheten.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Referansen er byggetegninger som ligger i kommunens
elektroniske byggesaksarkiv fra 2009.
Oppdragsnr.: 13722-3031 Befaringsdato: 13.03.2025 Side: 6 av 18
71

## Side 72

10
8
6
4
2
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer?

---

[d027_d027 | Side [1]]
466
0014466
597300 597400 597500
597300 597400 597500
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 25.02.2026 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og

---

[d027_d027 | Side [1]]
edringskostnader i sin
Leiligheten har tre soverom av varierende størrelse, noe kjøpsbeslutning, jf. avhl. § 3‑10. Det samme gjelder
39

## Side 40

OM EIENDOMMEN
eventuelt andre opplysninger om kjente risikofaktorer, 2023 oppsto svertesopp i tak på bad på grunn av dårlig
som for eksempel ufaglært arbeid, begrenset kontroll av ventilasjon. Dette ble vasket og behandlet med
det elektriske anlegget og opplysninger fra selgers soppfjerner. Parallelt ble det installert nytt
egenerklæringsskjema.

---

[d027_d027 | Side [1]]
 ble skiftet i 2023
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven

---

[d027_d027 | Side [1]]
ang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
47

## Side 48

OM EIENDOMMEN
tilbakeholdt, eller gitt feilaktige opplysninger, og dette

---

[d027_d027 | Side [1]]
tig at den er», noe som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som

---

[d027_d027 | Side [1]]
vilkår:
interessenter anbefales derfor å undersøke eiendommen Et forbrukerkjøp foreligger når en fysisk person kjøper
nøye, gjerne sammen med fagperson, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til
Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
eiendommen, kan det ikke etter overtakelse reklameres
på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på

---

[d027_d027 | Side [1]]
navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2014
Hvor lenge har du eid boligen?
Antall år 11
Antall måneder 4
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
Initialer selger: MLR 1
44006210
:ecnerefer
tnemucoD
52

## Side 53

1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks.

---

[d027_d027 | Side [1]]
vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei

---

[d027_d027 | Side [1]]
r og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette

---

[d027_d027 | Side [1]]
fjerner. Parallelt ble det installert nytt
egenerklæringsskjema. ventilasjonssystem for badene for alle leiligheter i sameie
da dårlig ventilasjon var felles. Har ikke hatt noen
Hvitevarer: Integrerte hvitevarer medfølger. problemer med sopp siden.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Kjenner du til om det er utført arbeid på bad/ våtrom?
standardliste "Oversikt over løsøre og tilbehør", som Ja.
legges til grunn med mindre annet er spesifisert i Ufaglært arbeid:
salgsoppgaven. Hvilket år ble

---

[d027_d027 | Side [1]]
t for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger

---

[d027_d027 | Side [1]]
ekker selgers ansvar etter
Radonmåling
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Det er ikke utført radonmåling på eiendommen. Egenerklæringsskjema er vedlagt salgsoppgaven og
interessenter oppfordres til å gjennomgå denne før bud
Eiendommen ligger i et område vurdert med moderat til inngis.
lav aktsomhetsgrad ifølge radonkart.
Boligkjøperforsikring: Kjøper har anledning til å tegne
For mer informasjon om radon, se www.dsa.no/ radon. boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon

---

[d027_d027 | Side [1]]
ersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d027_d027 | Side [1]]
 fasade?
Eiendommens
Ja.
Faglært arbeid:
tilstand
Hvilket år ble jobben fullført?: 2020
Takstmann: Erik Øyum Firmanavn: Francke Bygg AS
Beskrivelse av arbeidet: Alle vinduer ble skiftet, fasaden
Type takst avholdt av takstmann: Tilstandsrapport ble overhalt/ malt, og en lekkasje i tak i øverste etasje ble
utbedret.
Sammendrag selgers egenerklæring: Selger har i
forbindelse med salget fylt ut egenerklæringsskjema Kjenner du til forslag eller vedtatte reguleringsplaner,
som vedlagt salgsoppgaven. I skjemaet

---

[d027_d027 | Side [1]]
 er spesifisert i Ufaglært arbeid:
salgsoppgaven. Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Servantskap og dusjsett ble
Gjenstander som er nevnt i standardlisten, men som ikke skiftet. Dette arbeidet krever ikke rørlegger, og arbeidet
finnes på eiendommen, vil heller ikke følge med i salget. ble utført av tømrer.
Alt utstyr og installasjoner som medfølger overtas slik de
er, uten garanti, med mindre det foreligger en gjeldende Kjenner du til om det er utført kontroll av el‑anlegget

---

[d027_d027 | Side [1]]
sikoen for
‑ Nei vannlekkasje til tilstøtende rom. I daglig bruk fungerer
badet og dusjvann renner til sluk.
Er der synlig defekter på kabler eller er disse ikke
tilstrekkelig festet? ‑ Bad ‑ Sluk, membran og tettesjikt | Mer enn halvparten
‑ Nei av forventet brukstid er passert på membranløsningen.
Ukjent membranløsning i våtsoner på veggene, og det er
Er det tegn på at kabelinnføringer og hull i inntak og ikke fremlagt dokumentasjon. Tilstanden bør overvåkes
sikringsskap ikke er tette, så langt dette er

---

[d027_d027 | Side [1]]
jeldende Kjenner du til om det er utført kontroll av el‑anlegget og/
garanti fra produsent eller leverandør. eller andre installasjoner (f.eks. oljetank, sentralfyr,
ventilasjon)?
Kjøper aksepterer at det kan forekomme hull og merker Ja.
etter montering av inventar og utstyr som ikke er en del Jeg gjennomførte el‑kontroll i 2025. Ingen feil oppdaget.
av overdragelsen.
Kjenner du til om det har vært utført arbeid på terrasse/
garasje/ tak/ fasade?
Eiendommens
Ja.
Faglært arbeid:
tilstand
Hvilket år ble

---

[d027_d027 | Side [1]]
t fra 琀椀dligere eiere.
Ven琀椀lasjon
4. Er det elektriske anlegget u琀昀ørt eller er det foreta琀琀 琀椀lleggsarbeider
Avtrekksven琀椀l på kjøkkenet og på badet. Det er ingen ven琀椀ler forøvrig.
på det elektriske anlegget e琀琀er 1.1.1999?
Vinduer må beny琀琀es for 琀椀lførsel av lu昀琀 i alle soverom. Det er montert
Ja
en lu昀琀eløsning på vindu i stuen som kan låse vinduet i åpen posisjon.
Eksisterer det samsvarserklæring?
Vurdering av avvik: Ja
• Det er påvist mangelfull ven琀椀lasjon på e琀琀 eller 昀氀ere rom i boligen.
Det er

---

[d027_d027 | Side [1]]
 boliger) som rotter, mus,
maur eller lignende?
Nei Ja
I 2016(?) ble det observert rotter/mus i kjeller. Engasjert skadedyrsfirma som satte inn feller og mulig andre tiltak.
Beskrivelse
Ikke vært et problem siden.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: MLR 3
44006210
:ecnerefer
tnemucoD
54

## Side 55

Tilleggskommentar
Avtrekksvifter på bad m.m. ble skiftet i 2023
Jeg bekrefter at opplysningene er gitt etter

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Uregistrert/ikke byggemeldt garasje: Det foreligger ikke dokumentasjon på at garasjen i garasjerekken er byggemeldt. Kommunen kan kreve tilbakeføring, omsøking, ilegge overtredelsesgebyr og pålegg. Kjøper overtar ansvar, risiko og eventuelle konsekvenser.",
      "evidence": [
        "Det foreligger ikke dokumentasjon på at tilhørende garasje i garasjerekke er byggemeldt.",
        "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Overbeheftelsesrisiko: Dersom summen av tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorer gir pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
        "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R03",
      "description": "Legalpant og prioritetsrisiko: Kommunen og sameiet har legalpant som ikke fremgår av grunnboksutskriften. Legalpant til kommunen har høyere prioritet enn legalpant til sameiet, og begge har prioritet foran tinglyste banklån.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R04",
      "description": "Ingen sikringsordning for fellesgjeld: Sameiet har ikke sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at sameiet misligholder fellesgjelden.",
      "evidence": [
        "Sameiet har ikke sikringsordning for fellesgjeld.",
        "Sameiet har panterett i seksjonen for krav mot sameieren for et beløp som svarer til folketrygdens grunnbeløp, jf. eierseksjonsloven."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R05",
      "description": "Fellesgjeld med flytende rente: Sameiet har lån med flytende rente, noe som medfører risiko for økte felleskostnader ved rentejusteringer. Andel fellesgjeld er kr 298 028 med innfrielsesdato 30.06.2050.",
      "evidence": [
        "Ettersom sameiet har lån med flytende rente, kan fellesutgiftene endres ved rentejusteringer.",
        "Restsaldo pr. 25.02.2026: kr 3 335 811,00. Andel av saldo: kr 298 028,49. Innfrielsesdato: 30.06.2050."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R06",
      "description": "Negativ egenkapital i sameiet: Sameiet hadde per 31.12.2024 negativ egenkapital. Dette forklares regnskapsmessig med at byggets verdi ikke balanseføres og at påkostninger kostnadsføres løpende, men representerer likevel en finansiell sårbarhet.",
      "evidence": [
        "Sameiet hadde per 31.12.2024 en negativ egenkapital.",
        "I notene til regnskapet forklares dette med at verdien av bygget ikke balanseføres i et eierseksjonssameie, og at påkostninger og rehabiliteringer kostnadsføres løpende.",
        "Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låneopptak som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.",
        "Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert i prisen."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R07",
      "description": "Manglende radonmåling og radonsperre: Det er ikke foretatt radonmålinger på eiendommen, og bygget er heller ikke utført med radonsperre. Eiendommen ligger i et område med moderat til lav aktsomhetsgrad. Dette utgjør en potensiell helserisiko.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Det bør gjennomføres radonmålinger.",
        "Det er ikke utført radonmåling på eiendommen. Eiendommen ligger i et område vurdert med moderat til lav aktsomhetsgrad ifølge radonkart."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R08",
      "description": "Mangelfull ventilasjon: Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen. Vinduer må benyttes for tilførsel av luft i alle soverom. Det er ingen tilluftsventiler forøvrig.",
      "evidence": [
        "Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen.",
        "Vinduer må benyttes for tilførsel av luft i alle soverom. Det er montert en lufteløsning på vindu i stuen som kan låse vinduet i åpen posisjon.",
        "Det er ingen tilluftsventiler forøvrig; vinduer må benyttes for tilførsel av luft."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R09",
      "description": "Bad – sluk, membran og tettesjikt med passert brukstid: Mer enn halvparten av forventet brukstid er passert på membranløsningen på badet. Ukjent membranløsning i våtsoner på veggene uten dokumentasjon. Risiko for vannlekkasje til tilstøtende rom.",
      "evidence": [
        "Bad - Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
        "Ukjent membranløsning i våtsoner på veggene, og det er ikke fremlagt dokumentasjon. Tilstanden bør overvåkes.",
        "Risikoen for vannlekkasje til tilstøtende rom. I daglig bruk fungerer badet og dusjvann renner til sluk."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R10",
      "description": "Eldre avløpsrør med økt lekkasjerisiko: Avløpsrørene er eldre og har større sannsynlighet for lekkasjer, noe som kan føre til vannskader. Det finnes ikke fullgod oversikt fra tidligere eiere.",
      "evidence": [
        "Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.",
        "Ukjent. Det finnes ikke noen fullgod oversikt fra tidligere eiere."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir usikkerhet om byggets tekniske tilstand og fremtidige vedlikeholdskostnader.",
      "evidence": [
        "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
        "For å lukke avviket må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R12",
      "description": "Elektrisk anlegg ikke kontrollert av takstmann: Det elektriske anlegget er ikke kontrollert som del av tilstandsrapporten. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt. Merk: Selger opplyser om gjennomført el-kontroll i 2025 uten funn.",
      "evidence": [
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
        "Jeg gjennomførte el-kontroll i 2025. Ingen feil oppdaget."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R13",
      "description": "Ufaglært arbeid på bad/våtrom: Servantskap og dusjsett ble skiftet i 2025 av tømrer uten rørlegger. Selger opplyser at arbeidet ikke krever rørlegger, men ufaglært arbeid på våtrom kan medføre skjulte feil og mangler.",
      "evidence": [
        "Ufaglært arbeid: Hvilket år ble jobben fullført?: 2025. Beskrivelse av arbeidet: Servantskap og dusjsett ble skiftet. Dette arbeidet krever ikke rørlegger, og arbeidet ble utført av tømrer."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R14",
      "description": "Historisk svertesopp på bad: I 2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Problemet er behandlet og nytt ventilasjonssystem er installert for alle leiligheter i sameiet. Risiko for gjentakelse er redusert, men kan ikke utelukkes.",
      "evidence": [
        "2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Dette ble vasket og behandlet med soppfjerner. Parallelt ble det installert nytt ventilasjonssystem for badene for alle leiligheter i sameie da dårlig ventilasjon var felles.",
        "Har ikke hatt noen problemer med sopp siden."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R15",
      "description": "Historisk skadedyrsproblem (rotter/mus): I 2016 ble det observert rotter/mus i kjeller. Problemet er håndtert av skadedyrsfirma og har ikke vært et problem siden, men kan ikke utelukkes å gjenoppstå.",
      "evidence": [
        "I 2016(?) ble det observert rotter/mus i kjeller. Engasjert skadedyrsfirma som satte inn feller og mulig andre tiltak. Ikke vært et problem siden."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R16",
      "description": "Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2 i kommuneplanen. Det er ikke gitt en spesifikk forklaring på hva denne sonen innebærer for eiendommen, noe som skaper usikkerhet om fremtidige begrensninger.",
      "evidence": [
        "Eiendommen berøres av hensynssone H190_2: Andre sikringssoner, vist i kommuneplanen. Det er ikke gitt en spesifikk forklaring i de vedlagte dokumentene på hva denne sonen innebærer for eiendommen."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Byutvikling og fortetting i nærområdet: Eiendommen ligger i et område definert som 'Indre by (utviklingsområder)' i kommuneplanen. En bygård bygges på andre siden av gaten med ferdigstilling i 2026, og halve veien er stengt i forbindelse med byggearbeidene.",
      "evidence": [
        "Eiendommen er avsatt til bebyggelse og anlegg og ligger i et område definert som 'Indre by (utviklingsområder)'. Dette indikerer at området er prioritert for byutvikling og fortetting.",
        "Bygges bygård på andre siden av gaten, opplyses om ferdigstilling ila 2026. Halve veien er stengt ifm prosjektet."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R18",
      "description": "Eiendommen på byantikvarens gule liste: Eiendommen er registrert på byantikvarens gule liste, noe som kan medføre begrensninger på fremtidige endringer og rehabilitering av bygget. Reguleringsplan S-2255 gjelder.",
      "evidence": [
        "Eiendommen er registrert på byantikvarens gule liste.",
        "Regulert til boliger med tilhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste.",
        "Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale myndigheter for å bringe klarhet i eventuelle bevaringsinteresser."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R19",
      "description": "Manglende energimerking: Boligen er ikke energimerket i forbindelse med salget. Kjøper kan kreve energiattest utarbeidet på selgers regning innen ett år etter avtaleinngåelse, men manglende energimerking gir usikkerhet om energikostnader.",
      "evidence": [
        "Boligen er ikke energimerket i forbindelse med salget. Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R20",
      "description": "Eiendomsskatt: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi, noe som representerer en løpende kostnad for kjøper.",
      "evidence": [
        "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R21",
      "description": "Ekstraordinær kapitalinnkalling i sameiet: I 2024 ble det fakturert ekstraordinær kapitalinnkalling på kr 159 998, noe som indikerer at sameiet har hatt uforutsette kostnader. Lignende innkallinger kan forekomme i fremtiden.",
      "evidence": [
        "Ekstraordinær kapitalinnkalling, fakturert 159 998",
        "SUM ANDRE INNTEKTER 159 998"
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R22",
      "description": "Private stikkledninger for vann og avløp: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, noe som betyr at sameiet/seksjonseier er ansvarlig for vedlikehold og eventuelle reparasjoner av disse.",
      "evidence": [
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R23",
      "description": "Bygget fra 1892 – høy alder medfører generell slitasjerisiko: Bygget er fra 1892, noe som innebærer at mange bygningsdeler kan ha høy alder og økt risiko for skjulte feil, slitasje og behov for fremtidige utbedringer.",
      "evidence": [
        "Byggeår: 1892. Byggeåret er basert på opplysninger fra eiendomsmatrikkelen.",
        "Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.",
        "Avvik er vurdert ut fra tekniske forskrifter på godkjenningstidspunktet for bygget."
      ],
      "source_documents": [
        "d027_d027"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "Hva innebærer hensynssone H190_2 Andre sikringssoner for Bjerregaards gate 16?",
    "Hva betyr byantikvarens gule liste for fremtidige byggetiltak og rehabilitering?",
    "Er det vedtak eller forslag om økte felleskostnader eller økt fellesgjeld i Bjerregaardsgate 16 Sameie?",
    "Hva er tilstanden på yttertak, fasade og fellesarealer i bygget fra 1892?",
    "Er det dokumentert samsvarserklæring for elektrisk anlegg etter el-kontroll i 2025?",
    "Hva er sameiets disponible midler og budsjett for 2025 – er det planlagt større vedlikeholdsarbeider?",
    "Er det tinglyst bestemmelse om garasje/parkering fra 1960 som kan påvirke bruken av garasjen?"
  ],
  "reasoning": "\n**Generell vurdering:**\nAlle 23 identifiserte risikoer er støttet av konkret evidens fra dokumentchunkene. Ingen risikoer mangler evidensgrunnlag og ingen bør fjernes, men noen justeringer i confidence er gjort basert på nyansert lesning av dokumentene:\n\n**Justeringer og begrunnelser:**\n\n- **R01 (Uregistrert garasje):** Confidence justert opp til 0.97. Risikoen er eksplisitt og tydelig beskrevet i salgsoppgaven med direkte konsekvenser for kjøper. Svært sterk evidens.\n\n- **R02 (Overbeheftelse):** Confidence justert opp til 0.92. Direkte sitert fra salgsoppgaven med klare konsekvenser.\n\n- **R03 (Legalpant):** Confidence justert opp til 0.95. Tre separate evidenspunkter bekrefter risikoen tydelig.\n\n- **R04 (Ingen sikringsordning):** Confidence justert opp til 0.92. Eksplisitt bekreftet i salgsoppgaven.\n\n- **R05 (Flytende rente):** Confidence beholdt på 0.90. Godt dokumentert med konkrete lånedetaljer.\n\n- **R06 (Negativ egenkapital):** Confidence justert ned til 0.72. Risikoen er reell, men dokumentene gir en god forklaring på hvorfor negativ egenkapital er normalt for eierseksjonssameier, og at dette er reflektert i prisen ved kjøp/salg. Risikoen er dermed noe lavere enn opprinnelig vurdert.\n\n- **R07 (Radon):** Confidence beholdt på 0.90. Godt dokumentert, men aktsomhetsgraden er moderat til lav, noe som demper risikoen noe.\n\n- **R08 (Ventilasjon):** Confidence justert opp til 0.95. Svært tydelig dokumentert med TG2-avvik i tilstandsrapporten.\n\n- **R09 (Bad membran):** Confidence justert opp til 0.95. Tydelig TG2-avvik med konkrete beskrivelser av risiko.\n\n- **R10 (Avløpsrør):** Confidence beholdt på 0.88. Godt dokumentert, men noe usikkerhet pga. manglende oversikt.\n\n- **R11 (Manglende vedlikeholdsplan):** Confidence justert opp til 0.93. Eksplisitt avvik registrert i tilstandsrapporten.\n\n- **R12 (El-anlegg):** Confidence justert ned til 0.72. Tilstandsrapporten har ikke kontrollert el-anlegget, men selger opplyser om gjennomført el-kontroll i 2025 uten funn og med samsvarserklæring. Dette reduserer risikoen noe, men usikkerheten rundt uavhengig kontroll består.\n\n- **R13 (Ufaglært arbeid bad):** Confidence justert ned til 0.65. Selger presiserer at arbeidet (servantskap og dusjsett) ikke krever rørlegger, og at tømrer er faglig kompetent for dette arbeidet. Risikoen er reell men lavere enn opprinnelig vurdert.\n\n- **R14 (Svertesopp):** Confidence justert ned til 0.70. Problemet er behandlet og nytt ventilasjonssystem er installert for hele sameiet. Selger bekrefter ingen problemer siden. Risikoen er redusert men ikke eliminert.\n\n- **R15 (Skadedyr):** Confidence justert ned til 0.60. Hendelsen er fra 2016 (~10 år siden), problemet er håndtert og ikke gjentatt. Lav aktuell risiko, men opplysningsplikten er oppfylt.\n\n- **R16 (H190_2):** Confidence beholdt på 0.78. Sonen er bekreftet i dokumentene, men innholdet er ikke nærmere forklart, noe som i seg selv er en risiko.\n\n- **R17 (Byutvikling):** Confidence justert opp til 0.80. Godt dokumentert med konkrete opplysninger om pågående byggeprosjekt.\n\n- **R18 (Gul liste):** Confidence justert opp til 0.85. Bekreftet i flere dokumenter, og reguleringsbestemmelsene anbefaler kontakt med kommunale myndigheter om bevaringsinteresser.\n\n- **R19 (Energimerking):** Confidence beholdt på 0.75. Eksplisitt bekreftet, men konsekvensen er begrenset da kjøper har rett til attest på selgers regning.\n\n- **R20 (Eiendomsskatt):** Confidence beholdt på 0.70. Bekreftet, men dette er en generell og kjent kostnad for alle boligkjøpere i Oslo.\n\n- **R21 (Ekstraordinær kapitalinnkalling):** Confidence justert opp til 0.82. Bekreftet i regnskapet. Indikerer at sameiet har hatt behov for ekstraordinær finansiering.\n\n- **R22 (Private stikkledninger):** Confidence justert opp til 0.80. Eksplisitt bekreftet i salgsoppgaven.\n\n- **R23 (Byggeår 1892):** Confidence beholdt på 0.88. Godt dokumentert med byggeår og konkrete eksempler på aldersrelaterte avvik.\n\n**Mulige manglende risikoer identifisert:**\n\n1. **Tinglyst bestemmelse om garasje/parkering fra 1960:** Grunnboksutskriften viser en tinglyst bestemmelse fra 1960 om garasje/parkering (1960/519062-1/105) som ikke kan slettes uten samtykke fra bygningsrådet. Dette kan ha implikasjoner for bruken av garasjen og bør undersøkes nærmere.\n\n2. **Sameierens ansvar overfor sameiets kreditorer (sameiebrøk):** I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Dette er en risiko som ikke er eksplisitt identifisert som egen risiko.\n\n3. **Begrenset kjørehøyde i garasje (192 cm):** Maksimal kjørehøyde er 192 cm og kjørebredde ca. 230 cm, noe som kan begrense hvilke kjøretøy som kan benytte garasjen.\n\n4. **Manglende dokumentasjon på elektriske arbeider:** Det er usikkert om alle elektriske arbeider etter 1.1.1999 er utført av registrert elektroinstallasjonsvirksomhet, selv om samsvarserklæring skal foreligge.\n\nDisse bør undersøkes nærmere gjennom re-retrieval.\n"
}

## Raw Response
```json
{
  "id": "msg_01RURu78U2QowgdtUjN29GX9",
  "container": null,
  "content": [
    {
      "id": "toolu_015zwRnB8VMNSu9ThRm3Gdim",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Uregistrert/ikke byggemeldt garasje: Det foreligger ikke dokumentasjon på at garasjen i garasjerekken er byggemeldt. Kommunen kan kreve tilbakeføring, omsøking, ilegge overtredelsesgebyr og pålegg. Kjøper overtar ansvar, risiko og eventuelle konsekvenser.",
            "evidence": [
              "Det foreligger ikke dokumentasjon på at tilhørende garasje i garasjerekke er byggemeldt.",
              "Fra kommunen kan det komme reaksjoner overfor ny eier, ved f.eks. krav om tilbakeføring eller krav om omsøking, ileggelse av overtredelsesgebyr og pålegg mv. Uavhengig av reaksjonsform fra kommunen, overtar kjøper ansvar, risiko og eventuelle konsekvenser knyttet til dette."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Overbeheftelsesrisiko: Dersom summen av tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorer gir pantefrafall. Dersom pantefrafall ikke oppnås, kan handel ikke gjennomføres.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
              "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R03",
            "description": "Legalpant og prioritetsrisiko: Kommunen og sameiet har legalpant som ikke fremgår av grunnboksutskriften. Legalpant til kommunen har høyere prioritet enn legalpant til sameiet, og begge har prioritet foran tinglyste banklån.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R04",
            "description": "Ingen sikringsordning for fellesgjeld: Sameiet har ikke sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke er beskyttet mot at sameiet misligholder fellesgjelden.",
            "evidence": [
              "Sameiet har ikke sikringsordning for fellesgjeld.",
              "Sameiet har panterett i seksjonen for krav mot sameieren for et beløp som svarer til folketrygdens grunnbeløp, jf. eierseksjonsloven."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R05",
            "description": "Fellesgjeld med flytende rente: Sameiet har lån med flytende rente, noe som medfører risiko for økte felleskostnader ved rentejusteringer. Andel fellesgjeld er kr 298 028 med innfrielsesdato 30.06.2050.",
            "evidence": [
              "Ettersom sameiet har lån med flytende rente, kan fellesutgiftene endres ved rentejusteringer.",
              "Restsaldo pr. 25.02.2026: kr 3 335 811,00. Andel av saldo: kr 298 028,49. Innfrielsesdato: 30.06.2050."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R06",
            "description": "Negativ egenkapital i sameiet: Sameiet hadde per 31.12.2024 negativ egenkapital. Dette forklares regnskapsmessig med at byggets verdi ikke balanseføres og at påkostninger kostnadsføres løpende, men representerer likevel en finansiell sårbarhet.",
            "evidence": [
              "Sameiet hadde per 31.12.2024 en negativ egenkapital.",
              "I notene til regnskapet forklares dette med at verdien av bygget ikke balanseføres i et eierseksjonssameie, og at påkostninger og rehabiliteringer kostnadsføres løpende.",
              "Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låneopptak som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.",
              "Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert i prisen."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R07",
            "description": "Manglende radonmåling og radonsperre: Det er ikke foretatt radonmålinger på eiendommen, og bygget er heller ikke utført med radonsperre. Eiendommen ligger i et område med moderat til lav aktsomhetsgrad. Dette utgjør en potensiell helserisiko.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre. Det bør gjennomføres radonmålinger.",
              "Det er ikke utført radonmåling på eiendommen. Eiendommen ligger i et område vurdert med moderat til lav aktsomhetsgrad ifølge radonkart."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R08",
            "description": "Mangelfull ventilasjon: Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen. Vinduer må benyttes for tilførsel av luft i alle soverom. Det er ingen tilluftsventiler forøvrig.",
            "evidence": [
              "Det er påvist mangelfull ventilasjon på ett eller flere rom i boligen.",
              "Vinduer må benyttes for tilførsel av luft i alle soverom. Det er montert en lufteløsning på vindu i stuen som kan låse vinduet i åpen posisjon.",
              "Det er ingen tilluftsventiler forøvrig; vinduer må benyttes for tilførsel av luft."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R09",
            "description": "Bad – sluk, membran og tettesjikt med passert brukstid: Mer enn halvparten av forventet brukstid er passert på membranløsningen på badet. Ukjent membranløsning i våtsoner på veggene uten dokumentasjon. Risiko for vannlekkasje til tilstøtende rom.",
            "evidence": [
              "Bad - Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
              "Ukjent membranløsning i våtsoner på veggene, og det er ikke fremlagt dokumentasjon. Tilstanden bør overvåkes.",
              "Risikoen for vannlekkasje til tilstøtende rom. I daglig bruk fungerer badet og dusjvann renner til sluk."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R10",
            "description": "Eldre avløpsrør med økt lekkasjerisiko: Avløpsrørene er eldre og har større sannsynlighet for lekkasjer, noe som kan føre til vannskader. Det finnes ikke fullgod oversikt fra tidligere eiere.",
            "evidence": [
              "Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.",
              "Ukjent. Det finnes ikke noen fullgod oversikt fra tidligere eiere."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler: Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir usikkerhet om byggets tekniske tilstand og fremtidige vedlikeholdskostnader.",
            "evidence": [
              "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
              "For å lukke avviket må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da dette er opp til borettslag/sameie å rekvirere er kostnadsestimat ikke satt."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R12",
            "description": "Elektrisk anlegg ikke kontrollert av takstmann: Det elektriske anlegget er ikke kontrollert som del av tilstandsrapporten. Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt. Merk: Selger opplyser om gjennomført el-kontroll i 2025 uten funn.",
            "evidence": [
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
              "Jeg gjennomførte el-kontroll i 2025. Ingen feil oppdaget."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R13",
            "description": "Ufaglært arbeid på bad/våtrom: Servantskap og dusjsett ble skiftet i 2025 av tømrer uten rørlegger. Selger opplyser at arbeidet ikke krever rørlegger, men ufaglært arbeid på våtrom kan medføre skjulte feil og mangler.",
            "evidence": [
              "Ufaglært arbeid: Hvilket år ble jobben fullført?: 2025. Beskrivelse av arbeidet: Servantskap og dusjsett ble skiftet. Dette arbeidet krever ikke rørlegger, og arbeidet ble utført av tømrer."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R14",
            "description": "Historisk svertesopp på bad: I 2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Problemet er behandlet og nytt ventilasjonssystem er installert for alle leiligheter i sameiet. Risiko for gjentakelse er redusert, men kan ikke utelukkes.",
            "evidence": [
              "2023 oppsto svertesopp i tak på bad på grunn av dårlig ventilasjon. Dette ble vasket og behandlet med soppfjerner. Parallelt ble det installert nytt ventilasjonssystem for badene for alle leiligheter i sameie da dårlig ventilasjon var felles.",
              "Har ikke hatt noen problemer med sopp siden."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R15",
            "description": "Historisk skadedyrsproblem (rotter/mus): I 2016 ble det observert rotter/mus i kjeller. Problemet er håndtert av skadedyrsfirma og har ikke vært et problem siden, men kan ikke utelukkes å gjenoppstå.",
            "evidence": [
              "I 2016(?) ble det observert rotter/mus i kjeller. Engasjert skadedyrsfirma som satte inn feller og mulig andre tiltak. Ikke vært et problem siden."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R16",
            "description": "Hensynssone H190_2 (Andre sikringssoner): Eiendommen berøres av hensynssone H190_2 i kommuneplanen. Det er ikke gitt en spesifikk forklaring på hva denne sonen innebærer for eiendommen, noe som skaper usikkerhet om fremtidige begrensninger.",
            "evidence": [
              "Eiendommen berøres av hensynssone H190_2: Andre sikringssoner, vist i kommuneplanen. Det er ikke gitt en spesifikk forklaring i de vedlagte dokumentene på hva denne sonen innebærer for eiendommen."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Byutvikling og fortetting i nærområdet: Eiendommen ligger i et område definert som 'Indre by (utviklingsområder)' i kommuneplanen. En bygård bygges på andre siden av gaten med ferdigstilling i 2026, og halve veien er stengt i forbindelse med byggearbeidene.",
            "evidence": [
              "Eiendommen er avsatt til bebyggelse og anlegg og ligger i et område definert som 'Indre by (utviklingsområder)'. Dette indikerer at området er prioritert for byutvikling og fortetting.",
              "Bygges bygård på andre siden av gaten, opplyses om ferdigstilling ila 2026. Halve veien er stengt ifm prosjektet."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R18",
            "description": "Eiendommen på byantikvarens gule liste: Eiendommen er registrert på byantikvarens gule liste, noe som kan medføre begrensninger på fremtidige endringer og rehabilitering av bygget. Reguleringsplan S-2255 gjelder.",
            "evidence": [
              "Eiendommen er registrert på byantikvarens gule liste.",
              "Regulert til boliger med tilhørende anlegg. Reguleringsplan S-2255. Gården er oppført på såkalt gul liste.",
              "Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale myndigheter for å bringe klarhet i eventuelle bevaringsinteresser."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R19",
            "description": "Manglende energimerking: Boligen er ikke energimerket i forbindelse med salget. Kjøper kan kreve energiattest utarbeidet på selgers regning innen ett år etter avtaleinngåelse, men manglende energimerking gir usikkerhet om energikostnader.",
            "evidence": [
              "Boligen er ikke energimerket i forbindelse med salget. Det gjøres oppmerksom på at kjøper kan få utarbeidet en energiattest på selgers regning, innen ett år etter at avtalen om salg er inngått."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R20",
            "description": "Eiendomsskatt: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi, noe som representerer en løpende kostnad for kjøper.",
            "evidence": [
              "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R21",
            "description": "Ekstraordinær kapitalinnkalling i sameiet: I 2024 ble det fakturert ekstraordinær kapitalinnkalling på kr 159 998, noe som indikerer at sameiet har hatt uforutsette kostnader. Lignende innkallinger kan forekomme i fremtiden.",
            "evidence": [
              "Ekstraordinær kapitalinnkalling, fakturert 159 998",
              "SUM ANDRE INNTEKTER 159 998"
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R22",
            "description": "Private stikkledninger for vann og avløp: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, noe som betyr at sameiet/seksjonseier er ansvarlig for vedlikehold og eventuelle reparasjoner av disse.",
            "evidence": [
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R23",
            "description": "Bygget fra 1892 – høy alder medfører generell slitasjerisiko: Bygget er fra 1892, noe som innebærer at mange bygningsdeler kan ha høy alder og økt risiko for skjulte feil, slitasje og behov for fremtidige utbedringer.",
            "evidence": [
              "Byggeår: 1892. Byggeåret er basert på opplysninger fra eiendomsmatrikkelen.",
              "Eldre avløpsrør har større sannsynlighet for lekkasjer, noe som kan føre til vannskader.",
              "Avvik er vurdert ut fra tekniske forskrifter på godkjenningstidspunktet for bygget."
            ],
            "source_documents": [
              "d027_d027"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "Hva innebærer hensynssone H190_2 Andre sikringssoner for Bjerregaards gate 16?",
          "Hva betyr byantikvarens gule liste for fremtidige byggetiltak og rehabilitering?",
          "Er det vedtak eller forslag om økte felleskostnader eller økt fellesgjeld i Bjerregaardsgate 16 Sameie?",
          "Hva er tilstanden på yttertak, fasade og fellesarealer i bygget fra 1892?",
          "Er det dokumentert samsvarserklæring for elektrisk anlegg etter el-kontroll i 2025?",
          "Hva er sameiets disponible midler og budsjett for 2025 – er det planlagt større vedlikeholdsarbeider?",
          "Er det tinglyst bestemmelse om garasje/parkering fra 1960 som kan påvirke bruken av garasjen?"
        ],
        "reasoning": "\n**Generell vurdering:**\nAlle 23 identifiserte risikoer er støttet av konkret evidens fra dokumentchunkene. Ingen risikoer mangler evidensgrunnlag og ingen bør fjernes, men noen justeringer i confidence er gjort basert på nyansert lesning av dokumentene:\n\n**Justeringer og begrunnelser:**\n\n- **R01 (Uregistrert garasje):** Confidence justert opp til 0.97. Risikoen er eksplisitt og tydelig beskrevet i salgsoppgaven med direkte konsekvenser for kjøper. Svært sterk evidens.\n\n- **R02 (Overbeheftelse):** Confidence justert opp til 0.92. Direkte sitert fra salgsoppgaven med klare konsekvenser.\n\n- **R03 (Legalpant):** Confidence justert opp til 0.95. Tre separate evidenspunkter bekrefter risikoen tydelig.\n\n- **R04 (Ingen sikringsordning):** Confidence justert opp til 0.92. Eksplisitt bekreftet i salgsoppgaven.\n\n- **R05 (Flytende rente):** Confidence beholdt på 0.90. Godt dokumentert med konkrete lånedetaljer.\n\n- **R06 (Negativ egenkapital):** Confidence justert ned til 0.72. Risikoen er reell, men dokumentene gir en god forklaring på hvorfor negativ egenkapital er normalt for eierseksjonssameier, og at dette er reflektert i prisen ved kjøp/salg. Risikoen er dermed noe lavere enn opprinnelig vurdert.\n\n- **R07 (Radon):** Confidence beholdt på 0.90. Godt dokumentert, men aktsomhetsgraden er moderat til lav, noe som demper risikoen noe.\n\n- **R08 (Ventilasjon):** Confidence justert opp til 0.95. Svært tydelig dokumentert med TG2-avvik i tilstandsrapporten.\n\n- **R09 (Bad membran):** Confidence justert opp til 0.95. Tydelig TG2-avvik med konkrete beskrivelser av risiko.\n\n- **R10 (Avløpsrør):** Confidence beholdt på 0.88. Godt dokumentert, men noe usikkerhet pga. manglende oversikt.\n\n- **R11 (Manglende vedlikeholdsplan):** Confidence justert opp til 0.93. Eksplisitt avvik registrert i tilstandsrapporten.\n\n- **R12 (El-anlegg):** Confidence justert ned til 0.72. Tilstandsrapporten har ikke kontrollert el-anlegget, men selger opplyser om gjennomført el-kontroll i 2025 uten funn og med samsvarserklæring. Dette reduserer risikoen noe, men usikkerheten rundt uavhengig kontroll består.\n\n- **R13 (Ufaglært arbeid bad):** Confidence justert ned til 0.65. Selger presiserer at arbeidet (servantskap og dusjsett) ikke krever rørlegger, og at tømrer er faglig kompetent for dette arbeidet. Risikoen er reell men lavere enn opprinnelig vurdert.\n\n- **R14 (Svertesopp):** Confidence justert ned til 0.70. Problemet er behandlet og nytt ventilasjonssystem er installert for hele sameiet. Selger bekrefter ingen problemer siden. Risikoen er redusert men ikke eliminert.\n\n- **R15 (Skadedyr):** Confidence justert ned til 0.60. Hendelsen er fra 2016 (~10 år siden), problemet er håndtert og ikke gjentatt. Lav aktuell risiko, men opplysningsplikten er oppfylt.\n\n- **R16 (H190_2):** Confidence beholdt på 0.78. Sonen er bekreftet i dokumentene, men innholdet er ikke nærmere forklart, noe som i seg selv er en risiko.\n\n- **R17 (Byutvikling):** Confidence justert opp til 0.80. Godt dokumentert med konkrete opplysninger om pågående byggeprosjekt.\n\n- **R18 (Gul liste):** Confidence justert opp til 0.85. Bekreftet i flere dokumenter, og reguleringsbestemmelsene anbefaler kontakt med kommunale myndigheter om bevaringsinteresser.\n\n- **R19 (Energimerking):** Confidence beholdt på 0.75. Eksplisitt bekreftet, men konsekvensen er begrenset da kjøper har rett til attest på selgers regning.\n\n- **R20 (Eiendomsskatt):** Confidence beholdt på 0.70. Bekreftet, men dette er en generell og kjent kostnad for alle boligkjøpere i Oslo.\n\n- **R21 (Ekstraordinær kapitalinnkalling):** Confidence justert opp til 0.82. Bekreftet i regnskapet. Indikerer at sameiet har hatt behov for ekstraordinær finansiering.\n\n- **R22 (Private stikkledninger):** Confidence justert opp til 0.80. Eksplisitt bekreftet i salgsoppgaven.\n\n- **R23 (Byggeår 1892):** Confidence beholdt på 0.88. Godt dokumentert med byggeår og konkrete eksempler på aldersrelaterte avvik.\n\n**Mulige manglende risikoer identifisert:**\n\n1. **Tinglyst bestemmelse om garasje/parkering fra 1960:** Grunnboksutskriften viser en tinglyst bestemmelse fra 1960 om garasje/parkering (1960/519062-1/105) som ikke kan slettes uten samtykke fra bygningsrådet. Dette kan ha implikasjoner for bruken av garasjen og bør undersøkes nærmere.\n\n2. **Sameierens ansvar overfor sameiets kreditorer (sameiebrøk):** I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Dette er en risiko som ikke er eksplisitt identifisert som egen risiko.\n\n3. **Begrenset kjørehøyde i garasje (192 cm):** Maksimal kjørehøyde er 192 cm og kjørebredde ca. 230 cm, noe som kan begrense hvilke kjøretøy som kan benytte garasjen.\n\n4. **Manglende dokumentasjon på elektriske arbeider:** Det er usikkert om alle elektriske arbeider etter 1.1.1999 er utført av registrert elektroinstallasjonsvirksomhet, selv om samsvarserklæring skal foreligge.\n\nDisse bør undersøkes nærmere gjennom re-retrieval.\n"
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
    "input_tokens": 25034,
    "output_tokens": 7579,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
