# Trace: agentic_reflecting_iter1
- **Run ID:** 9c64cd56-0526-45f8-9bdc-bd9494388a78
- **Tidspunkt:** 2026-03-27T20:24:11.356677+00:00
- **Varighet:** 115.74s
- **Input tokens:** 23653
- **Output tokens:** 6112

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
Risiko 1: Radonmåling over tiltaksgrensen: Målt radonnivå på 113 Bq/m³ overstiger tiltaksgrensen på 100 Bq/m³. DSA anbefaler tiltak ved slike målinger. Selger antyder at manglende ventilasjon kan være årsaken, og ny måling er planlagt høst 2026.
  Confidence: 0.95
  Evidens: Radonmåling ble gjennomført i 2026. Resultatet viste et nivå på 113 becquerel per kubikkmeter, noe som ligger over tiltaksgrensen på 100 becquerel.; Direktoratet for strålevern og atomsikkerhet (DSA) anbefaler at det alltid gjennomføres tiltak ved slike målinger.; Det er antatt at manglende ventilasjon på grunn av vintertid er årsaken, ventilasjonslukene burde derfor være åpne. Ny måling høst 2026.

Risiko 2: Avdragsfrihet på fellesgjeld frem til november 2039: Et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader for andelseierne når avdragene begynner å løpe.
  Confidence: 0.97
  Evidens: Et av borettslagets lån har avdragsfrihet til og med november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.; Det er viktig å være oppmerksom på at et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.

Risiko 3: Planlagt kostbar utskiftning av automatisk parkeringsanlegg: Borettslaget har et automatisk parkeringsanlegg med høye driftskostnader, og det er planlagt fremtidig utskiftning med estimert kostnad på ca. 13 millioner kroner (per 2025). Kjøpere må påregne økte leiepriser for garasjeplass.
  Confidence: 0.97
  Evidens: Borettslaget har et automatisk parkeringsanlegg. Styret har informert om at anlegget har høye driftskostnader og at det er planlagt en fremtidig utskiftning med en estimert kostnad på ca. 13 millioner kroner (per 2025).; Kjøpere må derfor påregne økte leiepriser for garasjeplass i årene som kommer for å dekke vedlikehold og sparing til utskiftning.

Risiko 4: Membran på bad har passert mer enn halvparten av forventet brukstid (TG2): Tilstandsrapporten gir TG2 for sluk, membran og tettesjikt på badet, noe som innebærer risiko for vannlekkasje og behov for tiltak i nær fremtid.
  Confidence: 0.93
  Evidens: Bad – Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.; Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.; TG2 – Avvik som kan kreve tiltak: risikoen for vannlekkasje til tilstøtende rom.

Risiko 5: Arbeid på bad/våtrom utført av ufaglært: Selger opplyser at blandebatteriet i dusj er skiftet av ufaglært/egeninnsats. Dette kan innebære manglende samsvarserklæring og økt risiko for skjulte feil.
  Confidence: 0.88
  Evidens: Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Blandebatteriet i dusj er skiftet selv.; Det er ukjent om det er utført andre arbeider på anlegget av tidligere eiere som løser ut krav om samsvarserklæring.

Risiko 6: Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler (TG2): Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir TG2 og innebærer usikkerhet om byggets tekniske tilstand.
  Confidence: 0.92
  Evidens: Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.; For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.

Risiko 7: Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane): Eiendommen ligger innenfor sikringssone for jernbane, noe som innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen.
  Confidence: 0.85
  Evidens: Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane) i kommuneplanen. Sonen innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen for å ivareta sikkerheten.

Risiko 8: Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorene gir nødvendig pantefrafall. Dersom dette ikke oppnås, kan handel ikke gjennomføres.
  Confidence: 0.82
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.; Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Risiko 9: Høy fellesgjeld i borettslaget: Borettslaget har et pantedokument på NOK 309 309 000 med OBOS BBL som panthaver, samt ytterligere lån. Andelseierne er indirekte eksponert for denne gjelden gjennom felleskostnader.
  Confidence: 0.88
  Evidens: 2009/893801-1/200 23.11.2009 PANTEDOKUMENT Beløp: NOK 309 309 000 Panthaver: OBOS BBL ORG.NR: 937 052 766; 2021/714686-1/200 15.06.2021 PANTEDOKUMENT Beløp: NOK 1 600 000 Panthaver: OBOS-BANKEN AS; 2025/781056-1/200 04.07.2025 PANTEDOKUMENT Beløp: NOK 300 000 Panthaver: OBOS-BANKEN AS

Risiko 10: Legalpanterett for borettslaget: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp, med prioritet over tinglyste lån. Dette kan påvirke kjøpers finansiering.
  Confidence: 0.85
  Evidens: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 11: Risiko for økte felleskostnader ved andre andelshaveres mislighold: Dersom andre andelshavere misligholder sine betalinger, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke disse kostnadene.
  Confidence: 0.8
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 12: Utvendig avvik (TG2) – andre utvendige forhold: Tilstandsrapporten angir TG2 for utvendige forhold, noe som kan innebære behov for vedlikehold eller tiltak.
  Confidence: 0.75
  Evidens: TG2 – Avvik som kan kreve tiltak: Utvendig – Andre utvendige forhold.

Risiko 13: Skjulte feil og mangler kan ikke utelukkes: Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler. Tunge møbler ble ikke flyttet, og skjulte konstruksjoner er ikke åpnet.
  Confidence: 0.8
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.; Tunge møbler o.l. blir normalt ikke flyttet på.

Risiko 14: Fareområde for høyspenningsanlegg i reguleringsplan: Reguleringsplanen S-4293 inkluderer et fareområde for høyspenningsanlegg i nærheten av eiendommen, noe som kan medføre begrensninger og risiko.
  Confidence: 0.78
  Evidens: Området reguleres til: ... Fareområde (høyspenningsanlegg); Eiendommen omfattes av reguleringsplan S-4293 «Endret reguleringsplan med reg.best. for Ensjøveien 25, Øster-dalsgt. 11 og 13», vedtatt 28.02.2007. Planen regulerer området til formålene bolig, offentlig trafikkområde, friområde, fareområde og fellesområde.

Risiko 15: Stikkledninger for vann og avløp er private med vedlikeholdsansvar for eier/borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler borettslaget/andelseierne.
  Confidence: 0.78
  Evidens: Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler [borettslaget/andelseierne].

Dokumentkontekst:
[d059_d059 | Side [1]]
nnbåren varme (fjernvarme). I tillegg er det elektrisk vedlagt i salgsoppgaven eller kan fås ved henvendelse til
gulvvarme på badet. megler. Vi oppfordrer interessenter til å gjøre seg kjent
med disse.
Dersom beboelsesrom ikke har vegg‑ eller fastmonterte
varmekilder ved visning følger dette heller ikke med.
Tinglyste heftelser
Tinglyste heftelser og rettigheter: Følgende tinglyste
Regulerings og arealplaner
heftelser følger eiendommen ved salg, og ved inngivelse
Eiendommen omfattes av reguleringsplan

---

[d059_d059 | Side [1]]
prioritet over tinglyste lån når det gjelder
ORG.NR: 911 986 884 betaling av felleskostnader, og kan kreve inn pengene før
andre kreditorer, selv om de har lån registrert på andelen.
2025/ 781056‑1/ 200 04.07.2025 PANTEDOKUMENT
Beløp: NOK 300 000
Vei, vann og avløp
Panthaver: OBOS‑BANKEN AS
ORG.NR: 911 986 884 Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
Eiendommens rettigheter: det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler

---

[d059_d059 | Side [1]]
re andelshaveres mislighold, eller dersom Regelverk og generelle opplysninger
borettslaget sitter på fraflyttede og/ eller usolgte andeler, Boligen selges med det inventar og utstyr som i henhold
må dekkes av de øvrige andelseierne. til gjeldende lover, forskrifter eller offentlige pålegg skal
følge med eiendommen, jf. avhendingsloven § 3‑4.
Borettslaget har legalpanterett i andelen for krav på Fastmonterte eller spesialtilpassede installasjoner og
dekning av felleskostnader og andre krav fra innredning

---

[d059_d059 | Side [1]]
ostnader og
9 300 (Boligkjøperforsikring* (valgfritt)) at det er planlagt en fremtidig utskiftning med en
8 406 (Forhåndsvarsling forkjøpsrett) estimert kostnad på ca. 13 millioner kroner (per 2025).
545 (Tinglysingsgebyr ‑ hjemmel) Kjøpere må derfor påregne økte leiepriser for
545 (Tinglysningsgebyr ‑ pantedokument) garasjeplass i årene som kommer for å dekke
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ vedlikehold og sparing til utskiftning.
9 496 (Omkostninger totalt (uten

---

[d059_d059 | Side [1]]
 er eiendommen (gnr. 133, bnr. 20) 1941/ 12470‑1/ 105 15.12.1941 BESTEMMELSE OM VEG
del av et fellesområde regulert til felles avkjørsel. Bestemmelse om benyttelse
GJELDER DENNE REGISTERENHETEN MED FLERE
Eiendommen omfattes også av KDP‑17
«Kommunedelplan for torg og møteplasser», vedtatt 1947/ 10654‑1/ 105 30.08.1947 ERKLÆRING/ AVTALE
35

## Side 36

OM EIENDOMMEN
Bestemmelse om benyttelse salgsprosessen, det vil si at summen av fremtidige
tinglyste heftelser overstiger den forventede
1955/ 783‑1/ 105

---

[d059_d059 | Side [1]]
e
tinglyste heftelser overstiger den forventede
1955/ 783‑1/ 105 20.01.1955 BESTEMMELSE OM VEG salgssummen, er det en forutsetning for at handel skal
Bestemmelse om kloakkledning kunne gjennomføres at kreditorene gir nødvendig
Bestemmelse om gjerde pantefrafall. Dersom pantefrafall ikke oppnås vil handel
ikke kunne gjennomføres. Skulle det bli tinglyst flere
2009/ 893801‑1/ 200 23.11.2009 PANTEDOKUMENT utleggspant på eiendommen, kan handel bare
Beløp: NOK 309 309 000 gjennomføres forutsatt at også

---

[d059_d059 | Side [1]]
joner og
dekning av felleskostnader og andre krav fra innredning som anses som varig tilknyttet boligen, følger
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. normalt med i handelen, med mindre det foreligger en
særskilt avtale mellom partene om noe annet, jf.
Kjøper og selger er forpliktet til å undertegne standard avhendingsloven § 3‑5.
kjøpekontrakt utarbeidet av Emera i forbindelse med
37

## Side 38

OM EIENDOMMEN
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og

---

[d059_d059 | Side [1]]
lle observasjoner. Kan vurderes er innredet på befaringen. Tunge møbler o.l. blir normalt ikke
sammen med bygningsdelens alder. flyttet på. Skader eller mangler som kan være skjult bak
innredning kan derfor ikke oppdages ved befaringen. Servitutter
og heftelser som hefter ved eiendommen er ikke vurdert, med
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
mindre det er angitt i rapporten. Der det i rapporten er foretatt
del av et byggverk vil kunne tjene sitt formål (NS

---

[d059_d059 | Side [1]]
 det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
Initialer selger: KJC 2
03006220
:ecnerefer
tnemucoD
44

## Side 45

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens

---

[d059_d059 | Side [1]]
andel bare
Beløp: NOK 309 309 000 gjennomføres forutsatt at også eventuelle fremtidige
Panthaver: OBOS BBL kreditorer aksepterer å slette sitt pant uten å få full
ORG.NR: 937 052 766 innfrielse av det underliggende kravet.
2021/ 714686‑1/ 200 15.06.2021 PANTEDOKUMENT Legalpant: Borettslaget har legalpant på inntil 2G som
Beløp: NOK 1 600 000 sikkerhet for betaling av felleskostnader. Dette betyr at
Panthaver: OBOS‑BANKEN AS borettslaget har prioritet over tinglyste lån når det gjelder
ORG.NR: 911 986 884

---

[d059_d059 | Side [1]]
det
Oppdragsnr.: 13722-3250 Befaringsdato: 27.01.2026 Side: 5 av 18
59

## Side 60

Rolf Hofmos gate 17, 0655 OSLO Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Beskrivelse av eiendommen
ikke avdekket avvik).
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Lovlighet Gå 琀椀l side
Boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Referansen er byggetegninger som ligger i kommunens
elektroniske

---

[d059_d059 | Side [1]]

uteplassene. Andelseierne kan ikke uten styrets samtykke foreta bygningsmessige
endringer på uteplassen. Andelseierne kan herunder, uten styrets samtykke, verken
erstatte helleleggingen med platting eller en annen type konstruksjon, eller sette opp
gjerde eller andre faste innretninger på eller ved sin uteplass.
(5) Det er knyttet en uomsettelig bruksrett til parkeringsplass i borettslagets
garasjeeiendom til følgende leiligheter:
1001, 1006, 1007, 1010, 1013, 1014, 1016, 1019, 1020, 1021, 1022, 1023,

---

[d059_d059 | Side [1]]
kelen for hva som anses som
åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å
avdekke slike forhold. Punktet omfa琀琀er ikke skjulte eller ikke-synlige
forhold, tekniske vurderinger eller forhold som krever
spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Oppdragsnr.: 13722-3250 Befaringsdato: 27.01.2026 Side: 12 av 18
66

## Side 67

Rolf Hofmos gate 17, 0655 OSLO Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Arealer,

---

[d059_d059 | Side [1]]
ettslaget eier neste fem årene. Les mer om Boligkjøperforsikring i
eiendommen, mens andelseierne eier andeler i vedlagte materiell eller på https:/ /
borettslaget, som gir borett til en bestemt bolig. www.soderbergpartners.no/ eiendom/ boligkjoper/
Andelseierne har ikke personlig ansvar for borettslagets
fellesgjeld, men de må dekke borettslagets løpende
Lovanvendelse
utgifter. Manglende innbetaling av fellesutgiftene som
følge av andre andelshaveres mislighold, eller dersom Regelverk og generelle

---

[d059_d059 | Side [1]]
gn per år uten
samtykke fra styret.
Selger bærer risikoen for at kjøper kan få tinglyst skjøte
uten andre heftelser enn de som det er avtalt at følger For utleie av parkeringsplass skal dette fortrinnsvis skje
med i handelen. Gjennomføring av handelen er betinget internt i borettslaget. Ved utleie til eksterne parter må
av det ikke er tinglyst heftelser som ikke lar seg innfri/ styret søkes om godkjenning, og leietakers navn,
slette. adresse, telefonnummer og e‑postadresse skal oppgis.
Styret vil da sende

---

[d059_d059 | Side [1]]
bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og standardtekster, som

---

[d059_d059 | Side [1]]
eplan 2015, vedtatt 23.09.2015, er
Energimerke
eiendommen avsatt til bebyggelse og anlegg,
Energikarakter: D eksisterende.
Energifarge: Grønn Eiendommen berøres av hensynssone H190_1
(Sikringssone jernbane) i kommuneplanen. Sonen
innebærer restriksjoner for bygging og andre tiltak i
Info energiklasse
nærheten av jernbanen for å ivareta sikkerheten.
Alle eiendommer som selges eller leies ut, skal ha
energiattest. Unntak gjelder blant annet for frittstående Eiendommen ligger i Ensjø, som er et av Oslos

---

[d059_d059 | Side [1]]
gifter faktureres borettslaget
og er dekket gjennom de månedlige felleskostnadene.
Felleskostnader
Fellesgjeld
Felleskostnader kr 3 939,‑ pr. mnd
Kr 812 pr. 23.01.2026
25

## Side 26

OM EIENDOMMEN
andelen foran alle andre heftelser. Pantekravet er
Lånebetingelser fellesgjeld: Selskapets totale lån og begrenset til en sum som svarer til to ganger
vilkår: folketrygdens grunnbeløp på tidspunktet tvangsdekning
besluttes gjennomført.
Bank: OBOS‑banken AS
Lånenummer: 98207357723
Andre kostnader:
Type:

---

[d059_d059 | Side [1]]

av leiligheten går HC-plassen tilbake til opprinnelig innehaver av plassen.
(6) Dersom Statens Kartverk ikke tillater tinglysing av bruksretter til disse andre
kjøperne, plikter borettslaget å vedtektsfeste også disse bruksrettene.
(7) Ajourhold av listene over hvem som har bruksretter regnes ikke som
vedtektsendringer i punkt 11-1 (1) sin forstand, og kan gjøres av
styret/forretningsfører.
(8) Noen av parkeringsplassene er tilrettelagt som ladeplass for elbil og ladbar
hybridbil. Installasjonskostnadene,

---

[d059_d059 | Side [1]]
ydel Gamle Oslo,
garanterer for overførsel til borettslaget hver måned og med umiddelbar nærhet til idylliske Kampen, Jordal,
overtar deretter alt ansvar og risiko for eventuell Vålerenga og Valle Hovin.
manglende innbetaling av felleskostnader. For krav på
dekning av felleskostnader og andre krav fra Ensjø er en ny og moderne bydel under full utvikling, med
lagsforholdet har borettslaget en lovbestemt panterett i svært sentral beliggenhet, samtidig skjermet fra
26

## Side 27

OM EIENDOMMEN
bykjernen.

---

[d059_d059 | Side [1]]
st og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Tilstandsrapport
Vurdering av avvik:
BOLIGBYGG MED FLERE BOENHETER
• Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l.
for fellesdeler i bygget.
Byggeår Kommentar I denne sammenhengen skal det se琀琀es TG 2 når det ikke foreligger
2009 Byggeåret er basert på opplysninger teknisk rapport og også når det er behov for vedlikehold og utbedring av
fra eiendomsmatrikkelen. mindre skader.
Anvendelse Konsekvens/琀椀ltak
Bolig •

---

[d059_d059 | Side [1]]
 mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller

---

[d059_d059 | Side [1]]
t var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av

---

[d059_d059 | Side [1]]
thet og vedlegges som
Radiatorer 琀椀lkoblet fellesanlegg. Varme i baderomsgulvet. Eier opplyser
grunnlag for 琀椀lstandsanalysen. Rapportens alder skal framkomme."
at alle varmekilder fungerer.
"Mangel av rapport for fellesdeler registreres som et avvik."
De琀琀e punktet er kun ment som informasjon og er ikke vurdert med
琀椀lstandsgrad.
Det er en oppramsing av u琀昀ørt vedlikehold og planlagte fokusområder i
årsmøteinnkallingen, men de琀琀e er å betrakte som teknisk rapport i
denne sammenheng.
Oppdragsnr.:

---

[d059_d059 | Side [1]]
nventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på

---

[d059_d059 | Side [1]]
e for nærmere også når det er behov for vedlikehold og utbedring av
spesifikasjon. Det er ukjent om det er utført andre mindre skader. For å lukke avviket iht. NS 3600.2018 må
arbeider på anlegget av tidligere eiere som løser ut krav det utarbeides en Tilstandsanalyserapport/
om samsvarserklæring. vedlikeholdsplan for fellesdeler i bygget. Da dette er opp
Foreligger det kontrollrapport fra offentlig myndighet – til borettslag/ sameie å rekvirere er kostnadsestimat ikke
Det Lokale Eltilsyn (DLE) eller

---

[d059_d059 | Side [1]]
høyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER
osv.
•For skjulte konstruksjoner, som vann og avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av

---

[d059_d059 | Side [1]]
g for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har

---

[d059_d059 | Side [1]]
t bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN

---

[d059_d059 | Side [1]]
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

[d059_d059 | Side [1]]
riell.
Kai Jeu Chiem
For ordens skyld nevner vi at TGIU står for tilstandsgrad
Borettslag
ikke undersøkt, f.eks. fordi en del av bygget ikke har vært
tilgjengelig for inspeksjon. Disse delene kan dermed ha Rolf Hofmos Borettslag
feil eller mangler som ikke er avdekket.
Organisasjonsnummer: 994036971
Tilstandsrapporten beskriver byggverkets tekniske
tilstand. Det er ikke foretatt kontroll av de elektriske Andelsnummer: 104
installasjonene (el‑takst) selv om bygningssakkyndig kan
ha knyttet noen kommentarer

---

[d059_d059 | Side [1]]
matrikkelen. mindre skader.
Anvendelse Konsekvens/琀椀ltak
Bolig • For å lukke avviket iht. NS 3600.2018 må det utarbeides en
Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget. Da
de琀琀e er opp 琀椀l bore琀琀slag/sameie å rekvirere er kostnadses琀椀mat ikke
Standard
sa琀琀.
Leiligheten har en standard med parke琀琀, malte 昀氀ater og 昀氀iser. Se
også beskrivelse under konstruksjoner.
INNVENDIG
Vedlikehold
Boligen fremstår med normal bruksslitasje. Se punkter under
konstruksjoner for eventuelle behov i

---

[d059_d059 | Side [1]]
 dagens
•flater som er skjult av snø eller på annen måte ikke er tilgjengelig
regelverk vil disse kunne få en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder

---

[d059_d059 | Side [1]]
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige

---

[d059_d059 | Side [1]]
lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud

---

[d059_d059 | Side [1]]
 å betrakte som teknisk rapport i
denne sammenheng.
Oppdragsnr.: 13722-3250 Befaringsdato: 27.01.2026 Side: 8 av 18
62

## Side 63

Rolf Hofmos gate 17, 0655 OSLO Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Tilstandsrapport
VÅTROM Vurdering av avvik:
• Mer enn halvparten av forventet bruks琀椀d er passert på
1. ETASJE > BAD membranløsningen.
Konsekvens/琀椀ltak
Generell • Det er vik琀椀g å merke seg at leve琀椀den 琀椀l en membran varierer basert
på kvalitet, installasjon og bruk.

---

[d059_d059 | Side [1]]
mos gate 17, 0655 OSLO Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved

---

[d059_d059 | Side [1]]
 risikoen for
TG2 ‑ Avvik som kan kreve tiltak: vannlekkasje til tilstøtende rom. I daglig bruk så fungerer
badet. Dusjvann renner til sluk. Det er ved eventuelle
‑ Utvendig ‑ Andre utvendige forhold | Det er ikke lekkasjer fra rørskap man kan oppleve at vann ikke
32

## Side 33

OM EIENDOMMEN
renner til sluk. kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres
hvert 30 år. El‑anlegget er en bygningsdel som er
‑ Bad ‑ Sluk, membran og tettesjikt | Mer enn halvparten gjenstand for konstant

---

[d059_d059 | Side [1]]
01.2026 Side: 11 av 18
65

## Side 66

Rolf Hofmos gate 17, 0655 OSLO Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Tilstandsrapport
Det er u琀昀ørt en enkel vurdering av HMS (helse, miljø og sikkerhet) i
forhold i h.h.t. gjeldende regler. Sjekkpunkter er blant annet høyde på
Generelt om anlegget
balkongrekkverk, manglende rekkverk, radon, elektrisk anlegg,
8. Er det tegn 琀椀l at det har vært termiske skader (tegn på varmgang) på brannvarsling med mer. Eventuelle avvik skal

---

[d059_d059 | Side [1]]
 økte felleskostnader når
avdragene begynner å løpe. Betaling av felleskostnader Forretningsfører: Obos forkjøp
er sikret gjennom en avtale med OBOS Factoring.
Borettslagets forsikringsselskap: If Skadeforsikring Nuf
Borettslaget har et automatisk parkeringsanlegg. Styret
har informert om at anlegget har høye driftskostnader og Polisenummer fellesforsikring: 1740275
at det er planlagt en fremtidig utskiftning med en
estimert kostnad på ca. 13 millioner kroner (per 2025). Husdyr: Det er tillatt å holde dyr

---

[d059_d059 | Side [1]]
verskuddet tar ikke hensyn til en del viktige økonomiske forhold som
påvirker borettslagets disponible midler. Dette gjelder for eksempel opptak og avdrag på lån, samt kjøp
og salg av anleggsmidler. Borettslagets disponible midler er de økonomiske midlene som borettslaget
har til rådighet, og de defineres som omløpsmidler fratrukket kortsiktig gjeld. Størrelsen på de disponible
midlene kan blant annet benyttes til å vurdere om det er nødvendig å endre størrelsen på innkrevde
felleskostnader som den enkelte

---

[d059_d059 | Side [1]]
Borettslagets beregnede forpliktelse overfor
andelseiere som har nedbetalt, fremgår som egenkapital fra IN, under noten for annen
egenkapital.
Vedlegg 2 23 av 35 649 Årsregnskap 2024.pdf
137

## Side 138

NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 4 955 820
Kapitalkostnader IN lån II 1 352 269
Kabel-TV 811 800
Eiendomsskatt 62 416
Diverse 18 675
Ekstra kjellerbod 8 400
Eiendomsskatt -59 652
Kapitalkostnader på IN-lån 9 020 626
Kapitalkostnader regulert på IN-lån 19 210
Kapitalkostnader regulert på

---

[d059_d059 | Side [1]]
inger.
Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt
avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene
skal økes og fra hvilket tidspunkt. Dersom avdragsfriheten gjelder lån hvor det er inngått
avtale om mulighet for individuell nedbetaling, vil de månedlige felleskostnadene
økes med det beløp som er angitt i tabellen under.
Alle tall er avrundet til nærmeste 50 kroner.
Vedlegg 2 28 av 35 649 Årsregnskap

---

[d059_d059 | Side [1]]

egenkapital var kr 133 414 239 per 31.12.2024.
Borettslaget har avtale med Telia for TV og bredbånd
(250/ 200 Mbps), som er inkludert i felleskostnadene. Budsjettet for 2025 viser et forventet overskudd på kr 1
Beboerne har tilgang til felles utearealer, sykkelparkering 254 800.
og mulighet for å kjøpe ekstra boder. Det er etablert
ladeinfrastruktur for elbil i garasjen, og andelseiere kan Det er varslet at det automatiske parkeringsanlegget har
installere egen lader på sin plass etter avtale med styret.

---

[d059_d059 | Side [1]]
 har
installere egen lader på sin plass etter avtale med styret. høye driftskostnader, og at man må regne med økte
leiepriser for garasjeplass i årene fremover for å dekke
Styret har de siste årene gjennomført en rekke vedlikehold og fremtidig utskiftning. Et av borettslagets
vedlikeholdsprosjekter. Blant de større tiltakene er maling lån har avdragsfrihet til og med november 2039, noe som
av fasader (2021), oppgradering av brannsikkerheten vil medføre økte felleskostnader når avdragene begynner
med nye

---

[d059_d059 | Side [1]]

Påløpte kostnader 0 16 194
Annen kortsiktig gjeld 24 -140 0
SUM KORTSIKTIG GJELD 441 966 1 906 517
SUM EGENKAPITAL OG GJELD 443 176 121 444 603 583
Pantstillelse 25 310 909 000 310 909 000
Garantiansvar 0 0
Oslo, 18.03.2025
Styret i Rolf Hofmos Borettslag
Grethe Neufeld Jan Ove Fjællingsdal Raymond Olsen
Juan Pablo Verano Geir Solstad
Vedlegg 2 22 av 35 649 Årsregnskap 2024.pdf
136

## Side 137

NOTE: 1
REGNSKAPSPRINSIPPER
Borettslagets årsregnskap er satt opp i samsvar med regnskapslovens og

---

[d059_d059 | Side [1]]
orettslaget ikke oppfyller
pliktene sine, jf borettslagslovens § 5-18.
6. Felleskostnader og pantesikkerhet
6-1 Felleskostnader
(1) Den enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel fastsatt
ved stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres etter
borettslagslovens § 5-19.
(2) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter nytten for
den enkelte bolig eller etter forbruk.
(3) Borettslagets kostnader til behandling og eventuell

---

[d059_d059 | Side [1]]
k ansvar eller utlegg for borettslaget på mer enn fem prosent av de
årlige felleskostnadene.
8-4 Representasjon og fullmakt
Styrets leder og ett styremedlem representerer i fellesskap borettslaget
utad og tegner dets navn.
9. Generalforsamlingen
9-1 Myndighet
Generalforsamlingen er øverste myndighet i borettslaget.
9-2 Tidspunkt for generalforsamling
(1) Ordinær generalforsamling skal holdes hvert år innen utgangen av juni.
(2) Ekstraordinær generalforsamling holdes når styret finner det nødvendig, eller

---

[d059_d059 | Side [1]]
må gi informasjon i form av noter, og utarbeide en oversikt over de disponible midlene
i årsregnskapet. På de neste sidene presenteres borettslagets resultatregnskap, balanse og tilhørende
noter.
Boligselskapets resultatregnskap gir imidlertid ikke en fullstendig oversikt over borettslagets disponible
midler ved årsskiftet. I resultatregnskapet presenteres det en oversikt over borettslagets inntekter og
kostnader. Det regnskapsmessige overskuddet tar ikke hensyn til en del viktige økonomiske forhold

---

[d059_d059 | Side [1]]
kostnader regulert på IN-lån 19 210
Kapitalkostnader regulert på IN-lån 2 6 435
Overført til kapitalkostnader -10 398 540
SUM INNKREVDE FELLESKOSTNADER 5 797 459
REDUKSJON GRUNNET TOMME LEIEFORHOLD
MC-plass -2 425
SUM INNKREVDE FELLESKOSTNADER 5 795 034
NOTE: 3
ANDRE INNTEKTER
Vifteutbytte 12 000
Miljøfond 33 437
Nettinnbetalinger 699
Oslo Kommune 2023 4 185
Porttelefon 3 875
Bytte av radiatortermostat 3 440
SUM ANDRE INNTEKTER 57 636
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -21 150
SUM

---

[d059_d059 | Side [1]]
onskanal for beboerne.
Videre må kjøper være forberedt på det må foretas
oppgraderinger på grunn av slitasje, fraværende Borettslaget har en IN‑ordning som gir andelseiere
vedlikehold, arbeider som er utført av ufaglærte, mulighet for individuell nedbetaling av sin andel av
utidsmessighet eller tekniske løsninger som ikke holder fellesgjelden. Fristene for innfrielse er 28. februar og 30.
dagens standard. I Norge er det en av oppgavene til Det august. Forbruk av varmtvann og fyring belastes a konto
lokale

---

[d059_d059 | Side [1]]
t august. Forbruk av varmtvann og fyring belastes a konto
lokale el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg månedlig, med årlig avregning basert på individuelt
i boliger og fritidsboliger. Alle boliger skal ha periodisk forbruk. Det er viktig å være oppmerksom på at et av
33

## Side 34

OM EIENDOMMEN
borettslagets lån har avdragsfrihet frem til november radiatorvannet for å forbedre varmeanleggets drift.
2039, noe som vil medføre økte felleskostnader når
avdragene begynner å løpe. Betaling av

---

[d059_d059 | Side [1]]
den enkelte andel vil øke med pr. måned når selskapet begynner å betale
avdrag, og fra hvilket tidspunkt avdragene begynner å løpe. Estimatet forutsetter at avdrags-
og rentebetingelsene pr. 31.12 beholdes uendret. Da fremtidige endringer i lånebetingelsene
vil kunne medføre endringer i den informasjon som fremkommer av tabellen, må man utvise
forsiktighet med å bruke beregningene som grunnlag for økonomisk planlegging eller
investeringer.
Det understrekes at felleskostnadene i et borettslag ikke

---

[d059_d059 | Side [1]]
otsatt fall skal
av en dyreholdserklæring. Det er ikke tillatt å montere godkjenning regnes som gitt.
parabolantenner. Bruk av kull‑ og engangsgrill på
balkonger og terrasser er forbudt av Regnskap/ budsjett/ kostnadsøkninger: Årsregnskapet
brannsikkerhetshensyn. Gass‑ og elektrisk grill er tillatt, for 2024 viste et overskudd på kr 10 351 277, som ble
så lenge det tas hensyn til naboer. overført til egenkapitalen. Borettslagets opptjente
egenkapital var kr 133 414 239 per 31.12.2024.
Borettslaget har

---

[d059_d059 | Side [1]]
113
Drift/vedlikehold utvendig anlegg -175 836
Drift/vedlikehold heisanlegg -211 510
Drift/vedlikehold brannsikring -140 901
Drift/vedlikehold ventilasjonsanlegg -33 474
Drift/vedlikehold garasjeanlegg -13 061
Egenandel forsikring -20 000
Kostnader dugnader -7 714
SUM DRIFT OG VEDLIKEHOLD -1 361 717
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
bygningene.
NOTE: 9
KOMMUNALE AVGIFTER
Vann- og avløpsavgift -1 084 679
Renovasjonsavgift -289 851
SUM KOMMUNALE

---

[d059_d059 | Side [1]]
fentlig trafikkområde (plass, gangvei)
Plan for opparbeidelse av plass skal være godkjent samtidig med rammetillatelse for byggetiltak i
Ensjøveien 25 og Østerdalsgata 11. Plan for opparbeidelse av gangvei skal være godkjent samtidig med
rammetillatelse for Østerdalsgata 13.
§ 5. Offentlig trafikkområde (jernbane)
Det tillates oppført støyvoll på del av gnr.231 bnr. 111 for å skjerme uteområdene på bnr. 32 og 33. For
øvrig gjelder S-1101, vedtatt 12.12.1963.
§ 6. Friområde (park)
Plan for opparbeidelse av

---

[d059_d059 | Side [1]]
telse. Utearealet skal utgjøre minimum 25 % av
samlet bruksareal for leilighetene. Utomhusplanen skal vise avkjørsler, gangveier, oppholdsareal,
lekeareal, håndtering av overflatevann, bearbeiding av nivåforskjeller samt belegg og beplantning. Planen
skal redegjøre for eksisterende og fremtidig terreng. Støyreduserende tiltak skal vises på utomhusplanen
og være godkjent før det gis rammetillatelse. Før det gis midlertidig brukstillatelse skal støytiltak være utført
og utomhusanlegg skal være opparbeidet i

---

[d059_d059 | Side [1]]
ATA 11 OG 13. GNR. 133, BNR.
20 OG GNR. 237, BNR. 32 OG 33.
§ 1. Avgrensning
Det regulerte området er vist med reguleringsgrense på kart nr. OP2-200306087, datert 21.04.2004,
revidert 28.11.2005.
§ 2. Formål
Området reguleres til:
- Byggeområde for bolig
- Offentlig trafikkområde (plass, gangvei)
- Offentlig trafikkområde (jernbane)
- Friområde (park)
- Fareområde (høyspenningsanlegg)
- Fellesområder (felles avkjørsel)
§ 3. Byggeområde
3.1 Grad av utnytting
Tillatt bruksareal skal ikke overstige T-BRA =

---

[d059_d059 | Side [1]]
 støytiltak være utført
og utomhusanlegg skal være opparbeidet i henhold til godkjent utomhusplan.
S-4293.doc Side 2 av 3
84

## Side 85

S-4293
3.7 Forurensning
Krav til skjerming mot støy skal tilfredsstilles i henhold til Miljøverndepartementets retningslinje T-1442 eller
de til enhver tid gjeldende retningslinjer. Til grunn for avbøtende tiltak skal det foreligge en støyfaglig
utredning som skal ligge ved søknad om rammetillatelse.
§ 4. Offentlig trafikkområde (plass, gangvei)
Plan for opparbeidelse av

---

[d059_d059 | Side [1]]
k som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Det er antatt at manglende ventilasjon på grunn av vintertid er årsaken, ventilasjonslukene burde derfor være åpne.
Beskrivelse
Ny måling høst 2026
21.1 Radonmåling
År 2026
Verdi 113 ± 46 Bq/m³
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du

---

[d059_d059 | Side [1]]
 vil medføre økte felleskostnader når avdragene begynner
med nye røykdetektorer og nødlys (2023), samt å løpe.
betydelige reparasjoner på parkeringsanlegget
(2023‑2024). I 2025 ble det installert et filter på
34

## Side 35

OM EIENDOMMEN
22.04.2009. Dette er en tematisk plan som skal sikre et
Vedtekter/ husordensregler
tilbud av torg og møteplasser i Oslo, og gjelder som et
Vedlagt prospektet. tillegg til andre planer.
I henhold til Kommuneplan 2015, vedtatt 23.09.2015, er
Energimerke
eiendommen avsatt

---

[d059_d059 | Side [1]]

Endretreguleringsplanmedreg.best. forEnsjøveien25,Øster-dalsgt. 11og13,somom-
regulerestilbyggeområdeforbollig,offtra昀椀kkomr.(plass,gangvei),off. tra昀椀kkomr. (jern-
bane),friomr. (park),fareomr. (høyspenningsanl.),fellesomr.(fellesavkj)
Vedtaksdato: 28.02.2007
Vedtattav: Bystyret,egengodkjenning
Vedtaksdokumenter: 200306087
Lovverk: PBL1985
Høydereferanse: Oslolokal
Merknader:
Knytning(er)motandreplaner: V050907,200306087
Dokumentetbestårav3side(r)inkludertdenne.
Besøksadresse:
Plan-ogbygningsetaten

---

[d059_d059 | Side [1]]
adonmåling i bore琀琀slaget, men det er
ikke fremlagt målerapport. Det er gi琀琀 opplysninger om måleverdier i
9. Er der synlig defekter på kabler eller er disse ikke 琀椀lstrekkelig festet? egenerklæringen. Oppgi琀琀e resultater ligger under 琀椀ltaksgrensen. Det
Nei 昀椀nnes 昀椀re aktsomhetsgrader: Usikker, moderat 琀椀l lav, høy og særlig høy.
I følge radonkart over de琀琀e området er området vurdert med moderat
琀椀l lav aktsomhetsgrad. (h琀琀p://geo.ngu.no/kart/radon/).
Inntak og sikringsskap
10. Er det tegn på at

---

[d059_d059 | Side [1]]
d salg, og ved inngivelse
Eiendommen omfattes av reguleringsplan S‑4293 av bud vil disse være akseptert av budgiver/ kjøper:
«Endret reguleringsplan med reg.best. for Ensjøveien 25,
Øster‑ dalsgt. 11 og 13», vedtatt 28.02.2007. Planen 1941/ 12099‑2/ 105 05.12.1941 ERKLÆRING/ AVTALE
regulerer området til formålene bolig, offentlig Bestemmelse om benyttelse
trafikkområde, friområde, fareområde og fellesområde. I
henhold til planens § 8 er eiendommen (gnr. 133, bnr. 20) 1941/ 12470‑1/ 105 15.12.1941

---

[d059_d059 | Side [1]]
videre utvikling i området.
salgsoppgaven. Megler påtar seg ikke ansvar for
informasjonen som fremgår av energiattesten. Området er stadig under endring/ utvikling, bygg settes
opp, rehabiliteres og rives ned. Vi anbefaler derfor alle
budgivere å sette seg inn i gjeldende
Oppvarming
reguleringsbestemmelser. Kopi av situasjonskart,
Oppvarming med radiatorer tilknyttet fellesanlegg for målebrev, reguleringsplaner m/ bestemmelser etc. ligger
vannbåren varme (fjernvarme). I tillegg er det elektrisk vedlagt i

---

[d059_d059 | Side [1]]
 tillatt etter klokken 16 på
påske- pinse- og julaften.
Skal det arrangeres sammenkomster i boligen som kan medføre unormalt mye støy bør naboene
varsles på forhånd ved oppslag i oppgangen.
§ 3 - Borettslagets fellesarealer utendørs
Borettslagets utendørs fellesarealer står til beboernes benyttelse. Beboerne skal verne om
grøntanlegget med beplantninger, særlig om våren da gresset tåler mindre tråkk. Beboerne skal ikke
kaste søppel, sigarettsneiper etc. på fellesarealene, eller andre beboeres utearealer.

---

[d059_d059 | Side [1]]
tand.
mulig, og må aldri overstige 200 becquerel per
kubikkmeter luft.
Kontrakts‑
Radonmåling ble gjennomført i 2026. Resultatet viste et
grunnlag
nivå på 113 becquerel per kubikkmeter, noe som ligger
over tiltaksgrensen på 100 becquerel. Direktoratet for
Overtakelse
strålevern og atomsikkerhet (DSA) anbefaler at det alltid
gjennomføres tiltak ved slike målinger. Tidspunkt for overtakelse avtales mellom kjøper og
selger.
I henhold til strålevernforskriften er utleier pliktig til å
sørge for at

---

[d059_d059 | Side [1]]
 telefonnummer og e‑postadresse skal oppgis.
Styret vil da sende leietaker et orienteringsskriv om
Dersom eiendommen skulle bli overbeheftet i bruken av garasjen.
36

## Side 37

OM EIENDOMMEN
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hos eiendomsmegler før bud inngis. Kontakt
eiendomsmegler for spørsmål.
Radonmåling
Radonnivået i boliger bør holdes så lavt som praktisk Selger leverer eiendommen i ryddig og rengjort stand.
mulig, og må aldri overstige 200 becquerel per
kubikkmeter

---

[d059_d059 | Side [1]]
som kommunen skal godkjenne, før midlertidig brukstillatelse gis for
Østerdalsgata 13.
9.4 Etablering av støyvoll innenfor offentlig trafikkområde (jernbane) skal være opparbeidet før midlertidig
brukstillatelse gis for Østerdalsgata 11 og 13.
S-4293.doc Side 3 av 3
85

## Side 86










---

[d059_d059 | Side [1]]
s tillatt
etablering av flere parkeringsplasser dersom disse kan dokumenteres er plasser for beboere i gnr 133 bnr.
8, 9 10 og gnr.237 bnr.31 og 26, og at disse plassene er del av eiendommenes krav til parkeringsplasser i
henhold til den enhver tid gjeldende parkeringsnorm. 5 % av parkeringsplassene skal tilrettelegges for
forflytningshemmede.
3.6 Utomhusplan og krav til uteoppholdsareal
Utomhusplan skal være godkjent samtidig med rammetillatelse. Utearealet skal utgjøre minimum 25 % av
samlet bruksareal

---

[d059_d059 | Side [1]]
https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 152037/86525457
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
80

## Side 81

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg,

---

[d059_d059 | Side [1]]
d
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
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og

---

[d059_d059 | Side [1]]
tutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 152037/ 86525457 Deres ref.:
Høydereferanser Adresse: Rolf Hofmos gate 17
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 133/20
78

## Side 79

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
79

## Side

---

[d059_d059 | Side [1]]
O Øyum Takst og Eiendom AS
Gnr 133 - Bnr 20 Heggelibakken 4
0301 OSLO 0375 OSLO
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
IF skadeforsikring 1740275
Kommentar
Eiere må selv tegne nødvendige forsikringer.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 25.01.2026 Gjennomgå琀琀 Nei
Forretningsfører 25.01.2026 Gjennomgå琀琀 Nei
Eiendomsverdi.no 25.01.2026 Gjennomgå琀琀 Nei
Tegninger 25.01.2026 Gjennomgå琀琀 Nei
Revisjoner
Versjon Ny versjon Kommentar
1

---

[d059_d059 | Side [1]]
 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring.

---

[d059_d059 | Side [1]]
jyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende

---

[d059_d059 | Side [1]]
ritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle

---

[d059_d059 | Side [1]]
dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Oslo Øst
Oppdragsnr.
02260030
Selger 1 navn
Kai Jeu Chiem
Gateadresse
Rolf Hofmos gate 17
Poststed Postnr
OSLO 0655
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn Kai Jeu Chiem
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2021
Hvor lenge har du eid boligen?
Antall år 4
Antall måneder 4
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet

---

[d059_d059 | Side [1]]
e
Beskrivelse
leilighetene. Ingen maur er sett i leiligheten.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: KJC 3
03006220
:ecnerefer
tnemucoD
45

## Side 46

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine

---

[d059_d059 | Side [1]]
het eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte

---

[d059_d059 | Side [1]]
r klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet

---

[d059_d059 | Side [1]]
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

[d059_d059 | Side [1]]
lvis leies ut. Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
For ytterligere informasjon, se:www.dsa.no/ radon informasjon om Boligkjøperforsikring fra Söderberg &
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
Diverse
oppdages uventede feil eller mangler ved boligen de
Borettslagsmodellen innebærer at borettslaget eier neste fem årene. Les mer om Boligkjøperforsikring

---

[d059_d059 | Side [1]]
nglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om

---

[d059_d059 | Side [1]]
også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges

---

[d059_d059 | Side [1]]
ling: Malt glatt himling med synlige elementskjøter.
29

## Side 30

OM EIENDOMMEN
tilstand
Oppbevaring:
Leiligheten har god lagringsplass med en innvendig bod Takstmann: Erik Øyum
hvor sikringsskapet er plassert. I tillegg medfølger en
kjellerbod på ca. 5 m², merket med leilighetsnummer Type takst avholdt av takstmann: Tilstandsrapport
1021.
Sammendrag selgers egenerklæring: Selgers
For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet egenerklæringsskjema følger vedlagt salgsoppgaven.
Byggemåte i

---

[d059_d059 | Side [1]]
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

[d059_d059 | Side [1]]
spremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i

---

[d059_d059 | Side [1]]
orsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen

---

[d059_d059 | Side [1]]
te 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: KJC 1
03006220
:ecnerefer
tnemucoD
43

## Side 44

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Blandebatteriet i dusj er skiftet selv.
2.1

---

[d059_d059 | Side [1]]
t egenerklæringsskjema følger vedlagt salgsoppgaven.
Byggemåte i salgsoppgaven. Interessenter oppfordres til å gjennomgå dette nøye.
Interessenter oppfordres spesielt til å undersøke disse Følgende opplysninger er spesielt viktig å merke seg:
forholdene som er gitt TG2 og 3 nærmere, da gitte Kjenner du til om det er utført arbeid på bad/ våtrom?
tilstandsgrader her er et konkret uttrykk for alder/ slitasje/ Svar Ja, kun av ufaglært/ egeninnsats/ dugnad
ødeleggelser/ konsekvenser som innebærer kostnader til

---

[d059_d059 | Side [1]]
domsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: KJC 4
03006220
:ecnerefer
tnemucoD
46

## Side 47

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Kai Jeu Chiem 63651442a0e0c3f57edfb 02.02.2026

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Radonmåling over tiltaksgrensen: Målt radonnivå på 113 Bq/m³ overstiger tiltaksgrensen på 100 Bq/m³. DSA anbefaler tiltak ved slike målinger. Selger antyder at manglende ventilasjon kan være årsaken, og ny måling er planlagt høst 2026.",
      "evidence": [
        "Radonmåling ble gjennomført i 2026. Resultatet viste et nivå på 113 becquerel per kubikkmeter, noe som ligger over tiltaksgrensen på 100 becquerel.",
        "Direktoratet for strålevern og atomsikkerhet (DSA) anbefaler at det alltid gjennomføres tiltak ved slike målinger.",
        "Det er antatt at manglende ventilasjon på grunn av vintertid er årsaken, ventilasjonslukene burde derfor være åpne. Ny måling høst 2026.",
        "Radonnivået i boliger bør holdes så lavt som praktisk mulig, og må aldri overstige 200 becquerel per kubikkmeter luft.",
        "Egenerklæring: År 2026, Verdi 113 ± 46 Bq/m³"
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Avdragsfrihet på fellesgjeld frem til november 2039: Et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader for andelseierne når avdragene begynner å løpe.",
      "evidence": [
        "Et av borettslagets lån har avdragsfrihet til og med november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.",
        "Det er viktig å være oppmerksom på at et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.",
        "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene skal økes og fra hvilket tidspunkt.",
        "Dersom avdragsfriheten gjelder lån hvor det er inngått avtale om mulighet for individuell nedbetaling, vil de månedlige felleskostnadene økes med det beløp som er angitt i tabellen under."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Planlagt kostbar utskiftning av automatisk parkeringsanlegg: Borettslaget har et automatisk parkeringsanlegg med høye driftskostnader, og det er planlagt fremtidig utskiftning med estimert kostnad på ca. 13 millioner kroner (per 2025). Kjøpere må påregne økte leiepriser for garasjeplass.",
      "evidence": [
        "Borettslaget har et automatisk parkeringsanlegg. Styret har informert om at anlegget har høye driftskostnader og at det er planlagt en fremtidig utskiftning med en estimert kostnad på ca. 13 millioner kroner (per 2025).",
        "Kjøpere må derfor påregne økte leiepriser for garasjeplass i årene som kommer for å dekke vedlikehold og sparing til utskiftning.",
        "Det er varslet at det automatiske parkeringsanlegget har høye driftskostnader, og at man må regne med økte leiepriser for garasjeplass i årene fremover for å dekke vedlikehold og fremtidig utskiftning.",
        "Betydelige reparasjoner på parkeringsanlegget (2023-2024)."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Membran på bad har passert mer enn halvparten av forventet brukstid (TG2): Tilstandsrapporten gir TG2 for sluk, membran og tettesjikt på badet, noe som innebærer risiko for vannlekkasje og behov for tiltak i nær fremtid.",
      "evidence": [
        "Bad – Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
        "Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.",
        "TG2 – Avvik som kan kreve tiltak: risikoen for vannlekkasje til tilstøtende rom.",
        "I daglig bruk så fungerer badet. Dusjvann renner til sluk. Det er ved eventuelle lekkasjer fra rørskap man kan oppleve at vann ikke renner til sluk."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Arbeid på bad/våtrom utført av ufaglært: Selger opplyser at blandebatteriet i dusj er skiftet av ufaglært/egeninnsats. Dette kan innebære manglende samsvarserklæring og økt risiko for skjulte feil.",
      "evidence": [
        "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Blandebatteriet i dusj er skiftet selv.",
        "Det er ukjent om det er utført andre arbeider på anlegget av tidligere eiere som løser ut krav om samsvarserklæring.",
        "Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler (TG2): Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir TG2 og innebærer usikkerhet om byggets tekniske tilstand.",
      "evidence": [
        "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
        "For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.",
        "I denne sammenhengen skal det settes TG 2 når det ikke foreligger teknisk rapport og også når det er behov for vedlikehold og utbedring av mindre skader.",
        "Det er en oppramsing av utført vedlikehold og planlagte fokusområder i årsmøteinnkallingen, men dette er å betrakte som teknisk rapport i denne sammenheng."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R7",
      "description": "Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane): Eiendommen ligger innenfor sikringssone for jernbane, noe som innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen.",
      "evidence": [
        "Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane) i kommuneplanen. Sonen innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen for å ivareta sikkerheten.",
        "Reguleringsplan S-4293 regulerer området til bl.a. offentlig trafikkområde (jernbane).",
        "Det tillates oppført støyvoll på del av gnr.231 bnr. 111 for å skjerme uteområdene på bnr. 32 og 33."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorene gir nødvendig pantefrafall. Dersom dette ikke oppnås, kan handel ikke gjennomføres.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
        "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
        "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Høy fellesgjeld i borettslaget: Borettslaget har et pantedokument på NOK 309 309 000 med OBOS BBL som panthaver, samt ytterligere lån. Andelseierne er indirekte eksponert for denne gjelden gjennom felleskostnader.",
      "evidence": [
        "2009/893801-1/200 23.11.2009 PANTEDOKUMENT Beløp: NOK 309 309 000 Panthaver: OBOS BBL ORG.NR: 937 052 766",
        "2021/714686-1/200 15.06.2021 PANTEDOKUMENT Beløp: NOK 1 600 000 Panthaver: OBOS-BANKEN AS",
        "2025/781056-1/200 04.07.2025 PANTEDOKUMENT Beløp: NOK 300 000 Panthaver: OBOS-BANKEN AS",
        "Pantstillelse 310 909 000 (fra balansen per 31.12.2024)",
        "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Legalpanterett for borettslaget: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp, med prioritet over tinglyste lån. Dette kan påvirke kjøpers finansiering.",
      "evidence": [
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Risiko for økte felleskostnader ved andre andelshaveres mislighold: Dersom andre andelshavere misligholder sine betalinger, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke disse kostnadene.",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Borettslaget garanterer for overførsel til borettslaget hver måned og overtar deretter alt ansvar og risiko for eventuell manglende innbetaling av felleskostnader (OBOS Factoring-avtale)."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R12",
      "description": "Utvendig avvik (TG2) – andre utvendige forhold: Tilstandsrapporten angir TG2 for utvendige forhold, noe som kan innebære behov for vedlikehold eller tiltak.",
      "evidence": [
        "TG2 – Avvik som kan kreve tiltak: Utvendig – Andre utvendige forhold."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R13",
      "description": "Skjulte feil og mangler kan ikke utelukkes: Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler. Tunge møbler ble ikke flyttet, og skjulte konstruksjoner er ikke åpnet.",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.",
        "Tunge møbler o.l. blir normalt ikke flyttet på.",
        "Det gjøres ikke nærmere undersøkelser slik som åpning av skjulte konstruksjoner."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Fareområde for høyspenningsanlegg i reguleringsplan: Reguleringsplanen S-4293 inkluderer et fareområde for høyspenningsanlegg i nærheten av eiendommen, noe som kan medføre begrensninger og risiko.",
      "evidence": [
        "Området reguleres til: ... Fareområde (høyspenningsanlegg)",
        "Eiendommen omfattes av reguleringsplan S-4293 «Endret reguleringsplan med reg.best. for Ensjøveien 25, Øster-dalsgt. 11 og 13», vedtatt 28.02.2007. Planen regulerer området til formålene bolig, offentlig trafikkområde, friområde, fareområde og fellesområde."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Stikkledninger for vann og avløp er private med vedlikeholdsansvar for eier/borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler borettslaget/andelseierne.",
      "evidence": [
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler [borettslaget/andelseierne]."
      ],
      "source_documents": [
        "d059_d059"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "utvendig TG2 andre utvendige forhold beskrivelse tiltak kostnad",
    "radon tiltaksgrense tiltak ventilasjon borettslag",
    "parkeringsanlegg utskiftning kostnad tidspunkt finansiering",
    "fellesgjeld andel beløp IN-ordning individuell nedbetaling",
    "støy jernbane reguleringsplan S-4293 støyvoll tiltak",
    "elektrisk anlegg el-tilsyn samsvarserklæring avvik",
    "OBOS Factoring mislighold garanti felleskostnader",
    "høyspenningsanlegg fareområde avstand konsekvens"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Radon (0.95 → 0.97):** Meget godt dokumentert. Egenerklæringen bekrefter 113 ± 46 Bq/m³, salgsoppgaven bekrefter DSA-anbefaling og tiltaksgrense på 100 Bq/m³. Usikkerhetsintervallet (±46) betyr at faktisk nivå kan ligge mellom 67 og 159 Bq/m³, noe som er en tilleggsrisiko. Confidence økes til 0.97.\n\n**R2 – Avdragsfrihet (0.97):** Meget godt dokumentert fra flere steder i dokumentet. Viktig presisering funnet: Salgsoppgaven understreker at felleskostnadene ikke nødvendigvis vil øke automatisk – styret bestemmer. Dette nyanserer risikoen noe, men økt kostnad er reell. Confidence beholdes på 0.97.\n\n**R3 – Parkeringsanlegg (0.97):** Meget godt dokumentert. Bekreftet fra både salgsoppgave og årsregnskap. Confidence beholdes på 0.97.\n\n**R4 – Membran bad (0.93 → 0.95):** Godt dokumentert med TG2 og konkret begrunnelse. Tilleggsevidents funnet om at badet fungerer i daglig bruk. Confidence justeres til 0.95.\n\n**R5 – Ufaglært arbeid bad (0.88):** Godt dokumentert. Egenerklæringen bekrefter ufaglært arbeid. Risikoen er reell men begrenset til blandebatteri. Confidence beholdes på 0.88.\n\n**R6 – Manglende vedlikeholdsplan (0.92):** Godt dokumentert. Tilstandsrapporten bekrefter TG2 og kravet om tilstandsanalyserapport. Confidence beholdes på 0.92.\n\n**R7 – Sikringssone jernbane (0.85):** Godt dokumentert. Bekreftet i kommuneplan og reguleringsplan. Confidence beholdes på 0.85.\n\n**R8 – Overbeheftelse (0.82):** Godt dokumentert med konkret tekst om pantefrafall. Confidence beholdes på 0.82.\n\n**R9 – Høy fellesgjeld (0.88 → 0.90):** Godt dokumentert. Balansen bekrefter pantstillelse på 310 909 000 per 31.12.2024. Confidence justeres til 0.90.\n\n**R10 – Legalpanterett (0.85 → 0.88):** Godt dokumentert fra flere steder. Confidence justeres til 0.88.\n\n**R11 – Mislighold andre andelshavere (0.80 → 0.75):** Dokumentert, men det fremgår at borettslaget har avtale med OBOS Factoring som garanterer for overførsler. Dette reduserer risikoen noe. Confidence justeres ned til 0.75.\n\n**R12 – Utvendig TG2 (0.75 → 0.65):** Svakt dokumentert – kun én setning uten nærmere beskrivelse av hva avviket gjelder, omfang eller kostnad. Confidence justeres ned til 0.65. Bør hentes mer informasjon.\n\n**R13 – Skjulte feil (0.80):** Godt dokumentert som generell risiko. Confidence beholdes på 0.80.\n\n**R14 – Fareområde høyspenning (0.78 → 0.72):** Dokumentert i reguleringsplan, men det er uklart om fareområdet faktisk overlapper med selve boligeiendommen (gnr. 133, bnr. 20) eller kun tilstøtende arealer. Confidence justeres ned til 0.72.\n\n**R15 – Private stikkledninger (0.78 → 0.75):** Dokumentert, men teksten har en placeholder \"[borettslaget/andelseierne]\" som antyder at det ikke er helt avklart hvem som har ansvaret. Confidence justeres ned til 0.75.\n\n**Mulige manglende risikoer:**\n- Støyrisiko fra jernbane: Reguleringsplanen nevner støyvoll og støyfaglig utredning, men dette er ikke identifisert som en separat risiko.\n- Energikarakter D: Boligen har energikarakter D (grønn farge), noe som kan indikere høyere energikostnader.\n- Radonusikkerhet: Måleusikkerheten på ±46 Bq/m³ er ikke eksplisitt nevnt som risiko.\n- Byggeår 2009 og alder på tekniske installasjoner: Bygget er ca. 17 år gammelt, og flere tekniske installasjoner kan nærme seg vedlikeholdsbehov.\n"
}

## Raw Response
```json
{
  "id": "msg_01Dw7NKnCyuWxcpMdtmeZKjy",
  "container": null,
  "content": [
    {
      "id": "toolu_01PNAeHk6h3ujXHvsp46o8hH",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Radonmåling over tiltaksgrensen: Målt radonnivå på 113 Bq/m³ overstiger tiltaksgrensen på 100 Bq/m³. DSA anbefaler tiltak ved slike målinger. Selger antyder at manglende ventilasjon kan være årsaken, og ny måling er planlagt høst 2026.",
            "evidence": [
              "Radonmåling ble gjennomført i 2026. Resultatet viste et nivå på 113 becquerel per kubikkmeter, noe som ligger over tiltaksgrensen på 100 becquerel.",
              "Direktoratet for strålevern og atomsikkerhet (DSA) anbefaler at det alltid gjennomføres tiltak ved slike målinger.",
              "Det er antatt at manglende ventilasjon på grunn av vintertid er årsaken, ventilasjonslukene burde derfor være åpne. Ny måling høst 2026.",
              "Radonnivået i boliger bør holdes så lavt som praktisk mulig, og må aldri overstige 200 becquerel per kubikkmeter luft.",
              "Egenerklæring: År 2026, Verdi 113 ± 46 Bq/m³"
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Avdragsfrihet på fellesgjeld frem til november 2039: Et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader for andelseierne når avdragene begynner å løpe.",
            "evidence": [
              "Et av borettslagets lån har avdragsfrihet til og med november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.",
              "Det er viktig å være oppmerksom på at et av borettslagets lån har avdragsfrihet frem til november 2039, noe som vil medføre økte felleskostnader når avdragene begynner å løpe.",
              "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene skal økes og fra hvilket tidspunkt.",
              "Dersom avdragsfriheten gjelder lån hvor det er inngått avtale om mulighet for individuell nedbetaling, vil de månedlige felleskostnadene økes med det beløp som er angitt i tabellen under."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Planlagt kostbar utskiftning av automatisk parkeringsanlegg: Borettslaget har et automatisk parkeringsanlegg med høye driftskostnader, og det er planlagt fremtidig utskiftning med estimert kostnad på ca. 13 millioner kroner (per 2025). Kjøpere må påregne økte leiepriser for garasjeplass.",
            "evidence": [
              "Borettslaget har et automatisk parkeringsanlegg. Styret har informert om at anlegget har høye driftskostnader og at det er planlagt en fremtidig utskiftning med en estimert kostnad på ca. 13 millioner kroner (per 2025).",
              "Kjøpere må derfor påregne økte leiepriser for garasjeplass i årene som kommer for å dekke vedlikehold og sparing til utskiftning.",
              "Det er varslet at det automatiske parkeringsanlegget har høye driftskostnader, og at man må regne med økte leiepriser for garasjeplass i årene fremover for å dekke vedlikehold og fremtidig utskiftning.",
              "Betydelige reparasjoner på parkeringsanlegget (2023-2024)."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Membran på bad har passert mer enn halvparten av forventet brukstid (TG2): Tilstandsrapporten gir TG2 for sluk, membran og tettesjikt på badet, noe som innebærer risiko for vannlekkasje og behov for tiltak i nær fremtid.",
            "evidence": [
              "Bad – Sluk, membran og tettesjikt | Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
              "Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.",
              "TG2 – Avvik som kan kreve tiltak: risikoen for vannlekkasje til tilstøtende rom.",
              "I daglig bruk så fungerer badet. Dusjvann renner til sluk. Det er ved eventuelle lekkasjer fra rørskap man kan oppleve at vann ikke renner til sluk."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Arbeid på bad/våtrom utført av ufaglært: Selger opplyser at blandebatteriet i dusj er skiftet av ufaglært/egeninnsats. Dette kan innebære manglende samsvarserklæring og økt risiko for skjulte feil.",
            "evidence": [
              "Kjenner du til om det er utført arbeid på bad/våtrom? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Blandebatteriet i dusj er skiftet selv.",
              "Det er ukjent om det er utført andre arbeider på anlegget av tidligere eiere som løser ut krav om samsvarserklæring.",
              "Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje, fraværende vedlikehold, arbeider som er utført av ufaglærte."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Manglende tilstandsanalyserapport/vedlikeholdsplan for fellesdeler (TG2): Det er ikke utarbeidet tilstandsanalyserapport eller vedlikeholdsplan for fellesdeler i bygget, noe som gir TG2 og innebærer usikkerhet om byggets tekniske tilstand.",
            "evidence": [
              "Det er ikke utarbeidet Tilstandsanalyserapport, vedlikeholdsplan e.l. for fellesdeler i bygget.",
              "For å lukke avviket iht. NS 3600.2018 må det utarbeides en Tilstandsanalyserapport/vedlikeholdsplan for fellesdeler i bygget.",
              "I denne sammenhengen skal det settes TG 2 når det ikke foreligger teknisk rapport og også når det er behov for vedlikehold og utbedring av mindre skader.",
              "Det er en oppramsing av utført vedlikehold og planlagte fokusområder i årsmøteinnkallingen, men dette er å betrakte som teknisk rapport i denne sammenheng."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R7",
            "description": "Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane): Eiendommen ligger innenfor sikringssone for jernbane, noe som innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen.",
            "evidence": [
              "Eiendommen berøres av hensynssone H190_1 (Sikringssone jernbane) i kommuneplanen. Sonen innebærer restriksjoner for bygging og andre tiltak i nærheten av jernbanen for å ivareta sikkerheten.",
              "Reguleringsplan S-4293 regulerer området til bl.a. offentlig trafikkområde (jernbane).",
              "Det tillates oppført støyvoll på del av gnr.231 bnr. 111 for å skjerme uteområdene på bnr. 32 og 33."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Risiko for at handel ikke kan gjennomføres ved overbeheftelse: Dersom tinglyste heftelser overstiger forventet salgssum, er gjennomføring av handelen betinget av at kreditorene gir nødvendig pantefrafall. Dersom dette ikke oppnås, kan handel ikke gjennomføres.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall.",
              "Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.",
              "Skulle det bli tinglyst flere utleggspant på eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Høy fellesgjeld i borettslaget: Borettslaget har et pantedokument på NOK 309 309 000 med OBOS BBL som panthaver, samt ytterligere lån. Andelseierne er indirekte eksponert for denne gjelden gjennom felleskostnader.",
            "evidence": [
              "2009/893801-1/200 23.11.2009 PANTEDOKUMENT Beløp: NOK 309 309 000 Panthaver: OBOS BBL ORG.NR: 937 052 766",
              "2021/714686-1/200 15.06.2021 PANTEDOKUMENT Beløp: NOK 1 600 000 Panthaver: OBOS-BANKEN AS",
              "2025/781056-1/200 04.07.2025 PANTEDOKUMENT Beløp: NOK 300 000 Panthaver: OBOS-BANKEN AS",
              "Pantstillelse 310 909 000 (fra balansen per 31.12.2024)",
              "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Legalpanterett for borettslaget: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp, med prioritet over tinglyste lån. Dette kan påvirke kjøpers finansiering.",
            "evidence": [
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Risiko for økte felleskostnader ved andre andelshaveres mislighold: Dersom andre andelshavere misligholder sine betalinger, eller borettslaget sitter på fraflyttede/usolgte andeler, må de øvrige andelseierne dekke disse kostnadene.",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Borettslaget garanterer for overførsel til borettslaget hver måned og overtar deretter alt ansvar og risiko for eventuell manglende innbetaling av felleskostnader (OBOS Factoring-avtale)."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R12",
            "description": "Utvendig avvik (TG2) – andre utvendige forhold: Tilstandsrapporten angir TG2 for utvendige forhold, noe som kan innebære behov for vedlikehold eller tiltak.",
            "evidence": [
              "TG2 – Avvik som kan kreve tiltak: Utvendig – Andre utvendige forhold."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R13",
            "description": "Skjulte feil og mangler kan ikke utelukkes: Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler. Tunge møbler ble ikke flyttet, og skjulte konstruksjoner er ikke åpnet.",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Skader eller mangler som kan være skjult bak innredning kan derfor ikke oppdages ved befaringen.",
              "Tunge møbler o.l. blir normalt ikke flyttet på.",
              "Det gjøres ikke nærmere undersøkelser slik som åpning av skjulte konstruksjoner."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Fareområde for høyspenningsanlegg i reguleringsplan: Reguleringsplanen S-4293 inkluderer et fareområde for høyspenningsanlegg i nærheten av eiendommen, noe som kan medføre begrensninger og risiko.",
            "evidence": [
              "Området reguleres til: ... Fareområde (høyspenningsanlegg)",
              "Eiendommen omfattes av reguleringsplan S-4293 «Endret reguleringsplan med reg.best. for Ensjøveien 25, Øster-dalsgt. 11 og 13», vedtatt 28.02.2007. Planen regulerer området til formålene bolig, offentlig trafikkområde, friområde, fareområde og fellesområde."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Stikkledninger for vann og avløp er private med vedlikeholdsansvar for eier/borettslaget: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler borettslaget/andelseierne.",
            "evidence": [
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler [borettslaget/andelseierne]."
            ],
            "source_documents": [
              "d059_d059"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "utvendig TG2 andre utvendige forhold beskrivelse tiltak kostnad",
          "radon tiltaksgrense tiltak ventilasjon borettslag",
          "parkeringsanlegg utskiftning kostnad tidspunkt finansiering",
          "fellesgjeld andel beløp IN-ordning individuell nedbetaling",
          "støy jernbane reguleringsplan S-4293 støyvoll tiltak",
          "elektrisk anlegg el-tilsyn samsvarserklæring avvik",
          "OBOS Factoring mislighold garanti felleskostnader",
          "høyspenningsanlegg fareområde avstand konsekvens"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Radon (0.95 → 0.97):** Meget godt dokumentert. Egenerklæringen bekrefter 113 ± 46 Bq/m³, salgsoppgaven bekrefter DSA-anbefaling og tiltaksgrense på 100 Bq/m³. Usikkerhetsintervallet (±46) betyr at faktisk nivå kan ligge mellom 67 og 159 Bq/m³, noe som er en tilleggsrisiko. Confidence økes til 0.97.\n\n**R2 – Avdragsfrihet (0.97):** Meget godt dokumentert fra flere steder i dokumentet. Viktig presisering funnet: Salgsoppgaven understreker at felleskostnadene ikke nødvendigvis vil øke automatisk – styret bestemmer. Dette nyanserer risikoen noe, men økt kostnad er reell. Confidence beholdes på 0.97.\n\n**R3 – Parkeringsanlegg (0.97):** Meget godt dokumentert. Bekreftet fra både salgsoppgave og årsregnskap. Confidence beholdes på 0.97.\n\n**R4 – Membran bad (0.93 → 0.95):** Godt dokumentert med TG2 og konkret begrunnelse. Tilleggsevidents funnet om at badet fungerer i daglig bruk. Confidence justeres til 0.95.\n\n**R5 – Ufaglært arbeid bad (0.88):** Godt dokumentert. Egenerklæringen bekrefter ufaglært arbeid. Risikoen er reell men begrenset til blandebatteri. Confidence beholdes på 0.88.\n\n**R6 – Manglende vedlikeholdsplan (0.92):** Godt dokumentert. Tilstandsrapporten bekrefter TG2 og kravet om tilstandsanalyserapport. Confidence beholdes på 0.92.\n\n**R7 – Sikringssone jernbane (0.85):** Godt dokumentert. Bekreftet i kommuneplan og reguleringsplan. Confidence beholdes på 0.85.\n\n**R8 – Overbeheftelse (0.82):** Godt dokumentert med konkret tekst om pantefrafall. Confidence beholdes på 0.82.\n\n**R9 – Høy fellesgjeld (0.88 → 0.90):** Godt dokumentert. Balansen bekrefter pantstillelse på 310 909 000 per 31.12.2024. Confidence justeres til 0.90.\n\n**R10 – Legalpanterett (0.85 → 0.88):** Godt dokumentert fra flere steder. Confidence justeres til 0.88.\n\n**R11 – Mislighold andre andelshavere (0.80 → 0.75):** Dokumentert, men det fremgår at borettslaget har avtale med OBOS Factoring som garanterer for overførsler. Dette reduserer risikoen noe. Confidence justeres ned til 0.75.\n\n**R12 – Utvendig TG2 (0.75 → 0.65):** Svakt dokumentert – kun én setning uten nærmere beskrivelse av hva avviket gjelder, omfang eller kostnad. Confidence justeres ned til 0.65. Bør hentes mer informasjon.\n\n**R13 – Skjulte feil (0.80):** Godt dokumentert som generell risiko. Confidence beholdes på 0.80.\n\n**R14 – Fareområde høyspenning (0.78 → 0.72):** Dokumentert i reguleringsplan, men det er uklart om fareområdet faktisk overlapper med selve boligeiendommen (gnr. 133, bnr. 20) eller kun tilstøtende arealer. Confidence justeres ned til 0.72.\n\n**R15 – Private stikkledninger (0.78 → 0.75):** Dokumentert, men teksten har en placeholder \"[borettslaget/andelseierne]\" som antyder at det ikke er helt avklart hvem som har ansvaret. Confidence justeres ned til 0.75.\n\n**Mulige manglende risikoer:**\n- Støyrisiko fra jernbane: Reguleringsplanen nevner støyvoll og støyfaglig utredning, men dette er ikke identifisert som en separat risiko.\n- Energikarakter D: Boligen har energikarakter D (grønn farge), noe som kan indikere høyere energikostnader.\n- Radonusikkerhet: Måleusikkerheten på ±46 Bq/m³ er ikke eksplisitt nevnt som risiko.\n- Byggeår 2009 og alder på tekniske installasjoner: Bygget er ca. 17 år gammelt, og flere tekniske installasjoner kan nærme seg vedlikeholdsbehov.\n"
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
    "input_tokens": 23653,
    "output_tokens": 6112,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
