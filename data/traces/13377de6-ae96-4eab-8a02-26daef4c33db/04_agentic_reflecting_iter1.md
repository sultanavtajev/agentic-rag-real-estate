# Trace: agentic_reflecting_iter1
- **Run ID:** 13377de6-ae96-4eab-8a02-26daef4c33db
- **Tidspunkt:** 2026-03-24T22:53:21.331429+00:00
- **Varighet:** 111.45s
- **Input tokens:** 18819
- **Output tokens:** 5445

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
Risiko 1: Fuktskade på sanitærutstyr (TG2): Innredning på bad er litt fukteskadet i bunn. Dette kan indikere underliggende fuktproblemer som kan utvikle seg videre og medføre kostbare utbedringer.
  Confidence: 0.9
  Evidens: Innredning litt fukt-skadet i bunn; TG2 ‑ Avvik som ikke krever umiddelbare tiltak: ‑ Bad ‑ Sanitærutstyr | Innredning litt fukt‑skadet i bunn. Tiltak ikke [umiddelbart nødvendig]

Risiko 2: Overflateskader (TG2): Det er registrert bruksmerker på flere dørkarmer, store sprekker i laminatgulvet og sprekker i hjørner av gipsvegger. Sprekker i gulv og vegger kan indikere setningsskader eller strukturelle problemer.
  Confidence: 0.85
  Evidens: Det er bruksmerker på flere dører og dørkarmer; Store sprekker i laminatgulvet; Sprekker i hjørne av gipsvegger; Anbefalte tiltak / ytterligere undersøkelser anbefales

Risiko 3: Elektrisk anlegg ikke kontrollert: Det elektriske anlegget er ikke kontrollert av el-tilsyn de siste 5 år, og det er ikke foretatt el-takst. Det kan dermed foreligge avvik fra gjeldende forskriftskrav som ikke er avdekket.
  Confidence: 0.9
  Evidens: Er det foretatt kontroll av det lokale el tilsyn i løpet av de siste 5 år: Nei; Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el‑takst); Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt

Risiko 4: Skjeggkre bekreftet i sameiet: Det er bekreftet skjeggkre i en annen leilighet i sameiet. Skjeggkre er svært vanskelig å bli kvitt og kan spre seg til andre leiligheter, inkludert den aktuelle boligen.
  Confidence: 0.95
  Evidens: Kjenner du til om det er/ har vært skjeggkre i sameiet/ laget/ selskapet (fellesareal eller i andre boliger)? Ja. i en annen leilighet; Firmanavn: Ostberg norge A/S

Risiko 5: Kvikkleireskred-hensynssone (H310): Eiendommen ligger i aktsomhetsområde for kvikkleireskred. Ved reguleringsplan og byggesak må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, noe som kan begrense fremtidig utbygging og medføre kostnader.
  Confidence: 0.9
  Evidens: H310 Aktsomhetsområde kvikkleireskred: I henhold til Kommuneplanens § 8‑1.8: Ved utarbeiding av reguleringsplan og byggesak innenfor hensynssonen må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, jf. krav i TEK17 § 7‑3 med veiledning; Sikkerhet mot områdeskred utredes i samsvar med NVEs veileder 1/2019

Risiko 6: Støysone (rød og gul): Eiendommen ligger i rød og gul støysone for veg. Dette kan påvirke bokvaliteten og stiller særskilte krav til støyfølsomme rom og fasadeutforming.
  Confidence: 0.9
  Evidens: Rød og gul støysone (veg): Eiendommen ligger i 'Sone 1 sentrumsformål' for differensierte støykrav; Utenfor 50 % av støyfølsomme rom (soverom og stue/oppholdsrom) skal det være stille side på fasade

Risiko 7: Sikringssone for fjellanlegg (H190) og restriksjonsområde for nedlagt avfallsdeponi (H390_2): Eiendommen berøres av sikringssone for underjordisk avløpsanlegg og restriksjonsområde for nedlagt avfallsdeponi. Dette begrenser muligheten for tiltak i grunnen og kan medføre risiko for forurensning.
  Confidence: 0.85
  Evidens: H190 Sikringssone fjellanlegg (avløpsanlegg): Sonen gjelder under bakken (Vertikalnivå 1). I sikringssonen kan ikke tiltak på bakkeplan som krever tillatelse etter plan‑ og bygningslovens § 20‑1 og som medfører sprengning, peleramming, spunting, boring i grunnen iverksettes uten spesiell tillatelse fra NRVA; H390_2 Fare, restriksjonsområde for nedlagt avfallsdeponi: Innenfor området tillates ikke etablering av teknisk infrastruktur i form av vann‑, avløps‑ og fjernvarmeledninger eller el‑ og telekabler

Risiko 8: Sameiets økonomi er ikke god nok: Styret har selv uttalt at sameiets økonomi ikke er god nok til å sette i gang tiltak. Dette kan medføre økte felleskostnader i fremtiden for nødvendig vedlikehold og oppgraderinger.
  Confidence: 0.9
  Evidens: Det fremgår av protokollen fra årsmøtet at «økonomien i sameiet er fortsatt ikke god nok til å sette i gang tiltak på nåværende tidspunkt»; Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette; Kjøper må påregne at felleskostnadene kan endres som følge av årsmøtevedtak eller endringer i sameiets kostnader

Risiko 9: Boden disponeres av seksjonen, men ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.
  Confidence: 0.95
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet.

Risiko 10: Selgers egenerklæring ikke gjennomgått av bygningssakkyndig: Selgers egenerklæring er ikke fremlagt og gjennomgått av bygningssakkyndig ved befaring. Dette svekker kvalitetssikringen av opplysningene i tilstandsrapporten.
  Confidence: 0.85
  Evidens: Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei; Tilbakeholdt eller uriktig informasjon som har betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar

Risiko 11: Radonmåling ikke foretatt: Det er ikke foretatt radonmåling i boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner.
  Confidence: 0.8
  Evidens: Er det foretatt radonmåling? Nei

Risiko 12: Tinglyst heftelse – bestemmelse om veg og vann/kloakkledninger: Det er tinglyst flere heftelser på eiendommen knyttet til veg og vann/kloakkledninger med flere rettighetshavere. Disse kan ikke slettes uten samtykke fra kommunen og kan begrense bruken av eiendommen.
  Confidence: 0.8
  Evidens: 2012/676379‑3/200 21.08.2012 BESTEMMELSE OM VEG RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687; 2012/676401‑1/200 21.08.2012 BEST. OM VANN/KLOAKKLEDN.; Kan ikke slettes uten samtykke fra kommunen

Risiko 13: Risiko for overbeheftelse: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, kan handel ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette kan forsinke eller hindre gjennomføring av handelen.
  Confidence: 0.75
  Evidens: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres.

Risiko 14: Eiendomsskatt: Det er eiendomsskatt på boliger og fast eiendom i Lillestrøm kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad som kjøper må påregne i tillegg til felleskostnader.
  Confidence: 0.75
  Evidens: I Lillestrøm kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.

Risiko 15: Ungdommer som ruser seg i bakgården: Sameiet har hatt utfordringer med ungdommer som ruser seg i bakgården, noe som ble tatt opp som sak på årsmøtet. Dette kan påvirke trivselen og sikkerheten for beboerne.
  Confidence: 0.8
  Evidens: D. Ungdommer som ruser seg i bakgården, Securitas tilbud; Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette

Risiko 16: Området er under stadig endring og utvikling: Området rundt eiendommen er i kontinuerlig utvikling med bygg som settes opp, rehabiliteres og rives. Dette kan medføre støy, støv og endringer i nærområdet som påvirker bokvaliteten.
  Confidence: 0.75
  Evidens: Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser.

Dokumentkontekst:
[d097_d097 | Side [1]]
 dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig

---

[d097_d097 | Side [1]]
g sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå Rapportens omfang, struktur, metode og begrepsbruk følger i hovedsak Norsk Standard NS 3600
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke

---

[d097_d097 | Side [1]]
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten

---

[d097_d097 | Side [1]]
 ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er

---

[d097_d097 | Side [1]]
utført tilstandsanalyse for å bidra til økt
trygghet og redusert konfliktnivå ved eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens

---

[d097_d097 | Side [1]]
derobeskap på soverommet og et
separat omkledningsrom for ekstra lagringsplass. Sammendrag selgers egenerklæring: Selger har i
forbindelse med salget fylt ut egenerklæringsskjema
For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet som vedlagt salgsoppgaven. I skjemaet fremkommer
Byggemåte i salgsoppgaven. følgende informasjon:
Interessenter oppfordres spesielt til å undersøke disse Kjenner du til om det er/ har vært utført arbeid på
forholdene som er gitt TG2 og 3 nærmere, da gitte el‑anlegget eller

---

[d097_d097 | Side [1]]
til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal- og
moderniseringsdepartementet 21.06.2021. I tillegg beskriver rapporten følgende kontrollpunkter utover
minimumskravet i forskriften; støttemurer, tilleggsbygninger ( garasje mm ), etasjeskillere, renner / nedløp,
toalettrom, ildsted / piper og trapper. Formålet med rapporten er å kartlegge boligens tekniske tilstand
med tanke på behov for tiltak, samt å vise resultatene av en utført tilstandsanalyse for å bidra til økt
trygghet og redusert

---

[d097_d097 | Side [1]]
 av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
I tillegg kan det gis TG3 iht. NS3600 på enkelte bygningsdeler slik som etasjeskiller og terrengforhold uten
at det nødvendigvis krever umiddelbare tiltak.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn

---

[d097_d097 | Side [1]]
ien 77 C,
Tore Haugstulen th@min-takst.no
GNR: 77 BNR: 1685 Snr: 2
Min-takst AS 90418516 2010 STRØMMEN
46

## Side 47

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen

---

[d097_d097 | Side [1]]
taksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Strømsveien 77 C, 2010 STRØMMEN 2 av 14
47

## Side 48

2. Om rapporten
Om rapporten Rapporten følger kravene i ny forskrift til avhendingsloven (tryggere bolighandel) fastsatt av Kommunal-

---

[d097_d097 | Side [1]]
pportsammendrag
Alle bygningsdeler angitt med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er angitt i rapportsammendraget. Ytterligere opplysninger er gitt i hovedrapporten.
Bygningsdeler med TG3
Strømsveien 77 C, 2010 STRØMMEN 4 av 14
49

## Side 50

Bygningsdeler med TG2
Sanitærutstyr
Oppsummering av sanitærutstyr TG-2
• Innredning litt fukt-skadet i bunn,
Anbefalte tiltak / ytterligere undersøkelser anbefales
Overflater Oppsummering av overflater TG-2
• Det er bruksmerker på flere dører og

---

[d097_d097 | Side [1]]
kkyndige skal flytte på tepper, møbler og annet inventar når det er
nødvendig for å komme til det rommet eller den bygningsdelen som skal undersøkes. Dette gjelder likevel
ikke for særlig tunge møbler og inventar, når disse ikke skjuler vesentlige installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Strømsveien 77 C, 2010 STRØMMEN 3 av 14
48

## Side 49

3. Rapportsammendrag
Alle bygningsdeler angitt med tilstandsgrad TG2,

---

[d097_d097 | Side [1]]
pet av de ikke undersøkt, f.eks. fordi en del av bygget ikke har vært
siste 5 år tilgjengelig for inspeksjon. Disse delene kan dermed ha
‑ Nei feil eller mangler som ikke er avdekket.
Er det gjennomført arbeider etter opprinnelig byggeår?
‑ Nei Tilstandsrapporten beskriver byggverkets tekniske
Er det manglende samsvarserklæring på arbeider utført tilstand. Det er ikke foretatt kontroll av de elektriske
etter 01.01.1999? installasjonene (el‑takst) selv om bygningssakkyndig kan
‑ Nei ha knyttet noen

---

[d097_d097 | Side [1]]
å også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes

---

[d097_d097 | Side [1]]
 datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
45

## Side 46

Strømsveien 77 C,
2010 STRØMMEN
Tilstandsrapport
Eierskifte
Boligtype: Boligblokk
Byggeår:2019
BRA: 48m2
BRA-i: 48 m2
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
1 10 2 0 0
Strømsveien 77 C,
Tore Haugstulen th@min-takst.no
GNR: 77 BNR: 1685 Snr:

---

[d097_d097 | Side [1]]
 tiltak:
Ventilasjon: ‑ Overflater | Det er bruksmerker på flere dørkarmer,
Systemet er balansert ventilasjon. Ventilasjonsanlegget store sprekker i laminatgulvet og sprekker i hjørne av
er plassert i taket i omkledningsrom/ rom 2. Kjøkkenet har gipsvegger.
balansert avtrekk. Badet har mekanisk avtrekk og tilluft
ved dør. TG2 ‑ Avvik som ikke krever umiddelbare tiltak:
Tekniske detaljer: ‑ Bad ‑ Sanitærutstyr | Innredning litt fukt‑skadet i bunn.
Det er varme i gulv i entré, soverom 1, rom 1, Tiltak ikke

---

[d097_d097 | Side [1]]
ns størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
32

## Side 33

OM EIENDOMMEN
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger

---

[d097_d097 | Side [1]]
il/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Dokumentasjon på Dersom det har vært utført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be eieren
håndverkertjenester dokumentere bruken av kvalifiserte håndverkere.

---

[d097_d097 | Side [1]]
mering av overflater TG-2
• Det er bruksmerker på flere dører og dørkarmer,
• Store sprekker i laminatgulvet
• Sprekker i hjørne av gipsvegger
Anbefalte tiltak / ytterligere undersøkelser anbefales
Strømsveien 77 C, 2010 STRØMMEN 5 av 14
50

## Side 51

4. Informasjon om oppdraget
Befaringsdato Rapportdato
10.02.2026 10.02.2026
Hjemmelshavere
Navn: Mohammad Sharif Moghal Tilstede ved inspeksjon: Nei
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Informasjon om

---

[d097_d097 | Side [1]]
ppgaven inkluderer NEFs Det fremgår av tilstandsrapporten at det foreligger
standardliste "Oversikt over løsøre og tilbehør", som samsvarserklæring for det elektriske arbeidet i boligen.
legges til grunn med mindre annet er spesifisert i
salgsoppgaven. Det tas forbehold om at det kan være utført andre
arbeider på det elektriske anlegget som ikke har
Gjenstander som er nevnt i standardlisten, men som ikke samsvarserklæring.
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og

---

[d097_d097 | Side [1]]
 RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687
30

## Side 31

OM EIENDOMMEN
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 509 med i handelen. Gjennomføring av handelen er betinget
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 1527 av det ikke er tinglyst heftelser som ikke lar seg innfri/
Kan ikke slettes uten samtykke fra kommunen slette.
GJELDER DENNE REGISTERENHETEN MED FLERE
Overført fra: KNR: 3205 GNR: 77 BNR: 1685 Dersom eiendommen skulle bli overbeheftet i
salgsprosessen, det vil si at summen av

---

[d097_d097 | Side [1]]
å terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Initialer selger: MSM 2
65006220
:ecnerefer
tnemucoD
39

## Side 40

19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du

---

[d097_d097 | Side [1]]
ken av
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
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller

---

[d097_d097 | Side [1]]
gt i salgsoppgaven eller kan fås ved henvendelse til
bruksformål i rød støysone dersom følgende krav innfris: megler. Vi oppfordrer interessenter til å gjøre seg kjent
Utenfor 50 % av støyfølsomme rom (soverom og stue/ med disse.
oppholdsrom) skal det være stille side på fasade. Av
disse skal minst ett rom være soverom. Det skal være
Tinglyste heftelser
gjennomgående leiligheter dersom stille side ikke kan
oppnås ved plangrep. Tinglyste heftelser og rettigheter: Følgende tinglyste
‑ H310 Aktsomhetsområde

---

[d097_d097 | Side [1]]
elser og rettigheter: Følgende tinglyste
‑ H310 Aktsomhetsområde kvikkleireskred: I henhold til heftelser følger eiendommen ved salg, og ved inngivelse
Kommuneplanens § 8‑1.8: Ved utarbeiding av av bud vil disse være akseptert av budgiver/ kjøper:
reguleringsplan og byggesak innenfor hensynssonen må
det dokumenteres tilstrekkelig sikkerhet mot 2012/ 676379‑3/ 200 21.08.2012 BESTEMMELSE OM VEG
områdeskred, jf. krav i TEK17 § 7‑3 med veiledning. RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687
30

## Side 31

OM

---

[d097_d097 | Side [1]]
kulle bli overbeheftet i
salgsprosessen, det vil si at summen av fremtidige
2012/ 676379‑4/ 200 21.08.2012 BESTEMMELSE OM VEG tinglyste heftelser overstiger den forventede
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 509 salgssummen, er det en forutsetning for at handel skal
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 1527 kunne gjennomføres at kreditorene gir nødvendig
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 1685 pantefrafall. Dersom pantefrafall ikke oppnås vil handel
Kan ikke slettes uten samtykke fra kommunen

---

[d097_d097 | Side [1]]
 64

Andreopplysninger:
Felleskostnadeneinkluderer:Kommunaleavgifter,bygningsforsikring,internett,fjernvarme,
heiskostnader,regnskapshonorar,reparasjonogvedlikeholdbygninger.
Styretskalinformeresomeiendomsoverdragelser.Deterikkeforkjøpsrettforøvrige
seksjonseiere.
Deteringenkjentevarslervedr.reguleringsplan/byggearbeider.
Dyreholdertillatt.
Omkostninger:
Boligopplysningerkr.2550,-inkl.mva.
Eierskiftegebyrkr.6570,-inkl.mva.
Medvennlighilsen
Strømsveien77COgD
HeidiSkarsemPedersen
Regnskapsfører
Tlf:93202356
6

---

[d097_d097 | Side [1]]
e (el‑takst) selv om bygningssakkyndig kan
‑ Nei ha knyttet noen kommentarer til elanlegget ut i fra helt
Er det manglende kursfortegnelse? enkle vurderingskriterier. Siden elanlegget ikke er
‑ Nei kontrollert er det sannsynlig at det siden kan avdekkes
Er det manglende samsvar mellom kursfortegnelse og avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
antall sikringer? Videre må kjøper være forberedt på det må foretas
28

## Side 29

OM EIENDOMMEN
oppgraderinger på grunn av slitasje,

---

[d097_d097 | Side [1]]
 prioritert vekstområde i henhold
bakken som berører eiendommen. til kommunens arealstrategi. Eiendommen er også
innenfor konsesjonsområdet for fjernvarme. Langs
Eiendommen omfattes av Kommuneplanens arealdel Strømsveien er det en graveforbudssone på grunn av
2023 – 2035, vedtatt 14.06.2023. Arealbruken er i planen gatevarme.
avsatt til sentrumsformål (nåværende).
Området er stadig under endring/ utvikling, bygg settes
Eiendommen berøres av følgende hensynssoner i opp, rehabiliteres og rives ned. Vi

---

[d097_d097 | Side [1]]
n bevaringsverdige bebyggelsen i Felt 2. infrastruktur i form av vann‑, avløps‑ og
fjernvarmeledninger eller el‑ og telekabler. Etablering av
Eiendommen omfattes også av detaljregulering 579 infrastruktur for håndtering av overvann/ sigevann og
"Renseanlegget Nedre Romerike vann‑ og avløpsselskap deponigass er tillatt."
(NRVA)", vedtatt 24.11.2023. Planen gjelder for
naboeiendommen, men etablerer en sikringssone under Eiendommen ligger i et prioritert vekstområde i henhold
bakken som berører eiendommen.

---

[d097_d097 | Side [1]]
 sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Beskrivelse i enn andre leilihet
Initialer selger: MSM 3
65006220
:ecnerefer
tnemucoD
40

## Side 41

Tilleggskommentar
nei
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om

---

[d097_d097 | Side [1]]
ke oppnås vil handel
Kan ikke slettes uten samtykke fra kommunen ikke kunne gjennomføres. Skulle det bli tinglyst flere
GJELDER DENNE REGISTERENHETEN MED FLERE utleggspant på eiendommen, kan handel bare
Overført fra: KNR: 3205 GNR: 77 BNR: 1685 gjennomføres forutsatt at også eventuelle fremtidige
kreditorer aksepterer å slette sitt pant uten å få full
2012/ 676401‑1/ 200 21.08.2012 BEST. OM VANN/ innfrielse av det underliggende kravet.
KLOAKKLEDN.
RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687 Legalpant:

---

[d097_d097 | Side [1]]
nt for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som

---

[d097_d097 | Side [1]]
egalpant er pant
Kan ikke slettes uten samtykke fra kommunen som ikke vises i grunnboksutskriften, og har prioritet
GJELDER DENNE REGISTERENHETEN MED FLERE foran tinglyste lån, for eksempel banklån på seksjonen.
Overført fra: KNR: 3205 GNR: 77 BNR: 1685 Legalpant til kommunen har høyere prioritet enn
legalpant til sameiet.
2012/ 676401‑2/ 200 21.08.2012 BEST. OM VANN/
KLOAKKLEDN.
Vei, vann og avløp
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 509
Bestemmelse om anlegg og vedlikehold av ledninger Eiendommen er

---

[d097_d097 | Side [1]]
rt utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
Beskrivelse se tilstandsrapport
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i

---

[d097_d097 | Side [1]]

Bestemmelse om anlegg og vedlikehold av ledninger Eiendommen er tilknyttet offentlig vann‑ og
m.m. avløpssystem. Stikkledningene fra eiendommen og ut til
Kan ikke slettes uten samtykke fra kommunen det kommunale nettet er private, og
GJELDER DENNE REGISTERENHETEN MED FLERE vedlikeholdsansvaret for disse påhviler sameiet.
Overført fra: KNR: 3205 GNR: 77 BNR: 1685 Adkomst til eiendommen skjer via offentlig vei.
2020/ 2767425‑1/ 200 20.07.2020 SEKSJONERING
Utleie
Opprettet seksjoner:
SNR: 2 Adgang til

---

[d097_d097 | Side [1]]
AKKLEDN.
RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687 Legalpant: Kommunen har legalpant som sikkerhet for
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 509 betaling av kommunale avgifter og eventuell
RETTIGHETSHAVER: KNR: 3205 GNR: 77 BNR: 1527 eiendomsskatt. De øvrige seksjonseierne i sameiet har
Bestemmelse om anlegg og vedlikehold av ledninger legalpant på inntil 2G som sikkerhet for krav knyttet til
m.m. sameieforholdet, som felleskostnader. Legalpant er pant
Kan ikke slettes uten samtykke fra kommunen som

---

[d097_d097 | Side [1]]
0. Det samme gjelder eventuelt andre Firmanavn: Ostberg norge A/ S
opplysninger om kjente risikofaktorer, som for eksempel
ufaglært arbeid, begrenset kontroll av det elektriske Kjenner du til om det er/ har vært skjeggkre i sameiet/
anlegget og opplysninger fra selgers laget/ selskapet (fellesareal eller i andre boliger)?
egenerklæringsskjema. Ja.
i en annen leilighet
Hvitevarer: Integrerte hvitevarer medfølger.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Det fremgår av tilstandsrapporten at det

---

[d097_d097 | Side [1]]
om ferdigattest foreligger, gir
Parkering i gate etter gjeldende bestemmelser. det ingen garanti for at bygget er oppført i henhold til
tillatelsen og gjeldende regelverk, eller at det senere er
utført arbeid på bygget som ikke er byggemeldt eller
Adkomst
godkjent.
På høyre side i annonsen finner du et kartutsnitt. Ved å
klikke på kartet kan du enkelt planlegge din rute fra valgt Byggetegninger samsvarer med dagens planløsning.
startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger

---

[d097_d097 | Side [1]]
r31.12.2025er:
 Andelfellesgjeld(*) 5 009
 Andelformue 6 019
* Detgjøresoppmerksompåatpostengjeldikkebareomfatterlangsiktigfellesgjeld,
menogsåkortsiktiggjeld,evt.kapitalisertverdiavfesteavgift,forskuddsbetalte
fellesutgifter,m.m.
Langsiktiggjeld:
Sesameietsregnskapmednoter.
Forsikring:
SameieterforsikretiFremtindForsikringAS,polisenr.28519718.Seksjonseiermåselv
tegnehjem-/innboforsikring.
63

## Side

---

[d097_d097 | Side [1]]
ge overfor sameiets kreditorer i forhold til sin
sameiebrøk. Ved manglende betaling av fellesutgifter har
Lovanvendelse
sameiet legal panterett i den enkelte eierseksjon,
begrenset til inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
Kjøper og selger er forpliktet til å signere den standard til gjeldende lover, forskrifter eller offentlige pålegg skal
kjøpekontrakten utarbeidet av Emera som en del av følge med eiendommen,

---

[d097_d097 | Side [1]]
 460 (Omkostninger totalt (med Boligkjøperforsikring))
Kommunale avgifter
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Informasjon: Inkludert i felleskostnader.
3 480 969 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring))
Fellesgjeld
3 494 469 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring)) Kr 5 009 pr. 31.12.2025
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Lånebetingelser fellesgjeld: Sameiet har ingen lån
registrert.
Sikringsordning
De andre seksjonseierne har

---

[d097_d097 | Side [1]]
leskostnadene er à konto og inkluderer:
Kr 3 390 000 ‑ Kommunale avgifter
‑ Bygningsforsikring
‑ Internett
Omkostning kjøper
‑ Fjernvarme
3 390 000,00 (Prisantydning) ‑ Heiskostnader
5 009 (Andel av fellesgjeld) ‑ Regnskapshonorar
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ ‑ Reparasjon og vedlikehold av bygninger
3 395 009 (Pris inkl. fellesgjeld)
Kjøper må påregne at felleskostnadene kan endres som
Omkostninger følge av årsmøtevedtak eller endringer i sameiets
kostnader.
13 500

---

[d097_d097 | Side [1]]
Kontrolleratdette
samsvarermedDeresopplysninger/grunnboken.
Fellesutgifter:
Akontofellesutgifterforseksjonenerfortidenkr.4440,00permåned.Takontaktvedoppgjør
foropplysningeromrestanserogeventuelleandreuoppgjortekravsompåhvilerboligen.
Ligningsmessigfordeling:
Seksjonensforholdsmessigedelavsameietsligningsposterper31.12.2025er:
 Andelfellesgjeld(*) 5 009
 Andelformue 6 019
*

---

[d097_d097 | Side [1]]
er. Alle boliger skal ha periodisk pantsette og leie ut sin egen seksjon. Sameiets styre skal
kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres underrettes om alle overdragelser og leieforhold.
hvert 30 år. El‑anlegget er en bygningsdel som er
gjenstand for konstant utvikling, det må derfor påregnes Regnskap/ budsjett/ kostnadsøkninger: På årsmøtet 20.
at dagens anlegg ikke nødvendigvis er dimensjonert for mai 2025 ble revidert årsregnskap for 2024 enstemmig
oppgradering av kjøkken med nye

---

[d097_d097 | Side [1]]
ngen lån
registrert.
Sikringsordning
De andre seksjonseierne har panterett i seksjonen for
Estimert totalpris ink. omk
krav mot seksjonseieren som følger av sameieforholdet.
Kr 3 494 469 Pantekravet kan ikke overstige et beløp som for hver
bruksenhet svarer til to ganger folketrygdens grunnbeløp
på det tidspunktet tvangsdekning besluttes gjennomført.
Felleskostnader
Felleskostnader kr 4 440,‑ pr. mnd
23

## Side 24

OM EIENDOMMEN
er ca. 21 minutter. Fra Lillestrøm stasjon tar det rundt 11
Andre

---

[d097_d097 | Side [1]]
t årsregnskap for 2024 enstemmig
oppgradering av kjøkken med nye elektriske apparater, godkjent. Styrets forslag til budsjett for 2025 ble gitt til
rehabilitering av bad m/ varmekabler eller installeringer orientering.
elbillader.
Det fremgår av protokollen fra årsmøtet at «økonomien i
sameiet er fortsatt ikke god nok til å sette i gang tiltak på
Øvrig
nåværende tidspunkt». Styret vurderer et tilbud på
vakthold til en månedlig kostnad på kr 2 750, men det er
informasjon
ikke fattet vedtak om

---

[d097_d097 | Side [1]]
ge av årsmøtevedtak eller endringer i sameiets
kostnader.
13 500 (Boligkjøperforsikring* (valgfritt))
84 870 (Dokumentavgift)
Eiendomsskatt
545 (Tinglysingsgebyr ‑ hjemmel)
545 (Tinglysningsgebyr ‑ pantedokument) I Lillestrøm kommune er det eiendomsskatt på boliger og
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ fast eiendom som overstiger en fastsatt verdi.
85 960 (Omkostninger totalt (uten Boligkjøperforsikring))
99 460 (Omkostninger totalt (med Boligkjøperforsikring))
Kommunale

---

[d097_d097 | Side [1]]
ostnad på kr 2 750, men det er
informasjon
ikke fattet vedtak om dette.
Adresse
Seksjonens ligningsmessige andel av sameiets
Strømsveien 77C, 2010 STRØMMEN fellesgjeld var kr 5 009 per 31.12.2025, og andel formue
var kr 6 019.
Gnr. 77, bnr. 1685, snr. 2, ideell andel 1/ 1
i Lillestrøm kommune.
Vedtekter/ husordensregler
Vedlagt prospektet.
Selger
Mohammad Sharif Moghal
Energimerke
Sameie
Energikarakter: C
Strømsveien 77 C og D
Energifarge: Ikke angitt
Organisasjonsnummer: 929601351
Info

---

[d097_d097 | Side [1]]
igseksjoner i sameiet, i henhold til eierseksjonsloven § som gir trygghet og profesjonell juridisk hjelp dersom det
23. Seksjoner som eies av nærstående eller gjennom et oppdages uventede feil eller mangler ved boligen de
firma regnes også med. neste fem årene. Les mer om Boligkjøperforsikring i
vedlagte materiell eller på https:/ /
I henhold til eierseksjonsloven § 31 er sameierne www.soderbergpartners.no/ eiendom/ boligkjoper/
ansvarlige overfor sameiets kreditorer i forhold til sin
sameiebrøk. Ved

---

[d097_d097 | Side [1]]
tekst ekstrahert)

## Side 15

(Ingen tekst ekstrahert)

## Side 16

(Ingen tekst ekstrahert)

## Side 17

(Ingen tekst ekstrahert)

## Side 18

(Ingen tekst ekstrahert)

## Side 19

(Ingen tekst ekstrahert)

## Side 20

Plantegning

## Side 21

Plantegning

## Side 22

STRØMSVEIEN 77C
OM EIENDOMMEN

## Side 23

OM EIENDOMMEN
OM EIENDOMMEN
Felleskostnader inkulderer: Totale felleskostnader per
Økonomi
måned: kr 4 440,‑
Prisantydning
Felleskostnadene er à konto og inkluderer:
Kr 3 390 000 ‑ Kommunale

---

[d097_d097 | Side [1]]
gsorden
3) Saker 琀椀l behandling
A. Revidert regnskap for 2024
B. Styrets forslag 琀椀l budsje琀琀 2025
C. Valg av leder og medlemmer 琀椀l styret
D. Ungdommer som ruser seg i bakgården, Securitas 琀椀lbud
E. Hvordan regulere 昀樀ernvarme i din bolig
Vi oppfordrer alle 琀椀l å delta for å sikre at sameiet tar gode og velinformerte beslutninger.
Strømmen, 02.05.2025
Vennlig hilsen,
Styret i Sameiet Strømsveien 77C
Rune Staurvik (styreleder)
Lasse Øien (styremedlem)
Trond Olstad (styremedlem)
82

## Side

---

[d097_d097 | Side [1]]
lesarealer og rettigheter til
Soverom:
bruk
Soverommet er av god størrelse, med plass til
Det gjøres særskilt oppmerksom på at boden som er dobbeltseng og tilhørende møblement. Et garderobeskap
medtatt i BRA‑e og totalt BRA, ligger på sameiets for oppbevaring av klær medfølger.
fellesareal, men disponeres av denne seksjonen. Sameiet
kan på et senere tidspunkt omdisponere bruken av dette Kontor og omkledningsrom:
arealet. Leiligheten har to praktiske tilleggsrom. Det ene er
innredet som kontor, perfekt for

---

[d097_d097 | Side [1]]
s av følgende hensynssoner i opp, rehabiliteres og rives ned. Vi anbefaler derfor alle
henhold til kommuneplanen og reguleringsplaner: budgivere å sette seg inn i gjeldende
‑ Rød og gul støysone (veg): Eiendommen ligger i 'Sone 1 reguleringsbestemmelser. Kopi av situasjonskart,
sentrumsformål' for differensierte støykrav. I henhold til målebrev, reguleringsplaner m/ bestemmelser etc. ligger
Kommuneplanens § 1‑14.1.2 tillates støyfølsomt vedlagt i salgsoppgaven eller kan fås ved henvendelse til
bruksformål

---

[d097_d097 | Side [1]]
gssonen kan ikke
tiltak på bakkeplan som krever tillatelse etter plan‑ og
Regulerings og arealplaner
bygningslovens § 20‑1 og som medfører sprengning,
Eiendommen er regulert til byggeområde for blandet peleramming, spunting, boring i grunnen, tunneldriving,
formål (bolig/ forretning/ kontor) innenfor Felt 1, i henhold fundamentering og påføring av tilleggslaster, eller som
til detaljregulering 400/ 05 "Kvartalet som avgrenses av på annen måte kan skade fjellanlegget, iverksettes uten
Støperiveien, felles

---

[d097_d097 | Side [1]]
e kan skade fjellanlegget, iverksettes uten
Støperiveien, felles avkjørsel og Strømsveien ‑ spesiell tillatelse fra NRVA."
Strømmen", vedtatt 09.11.2005. Tillatt bebygd areal ‑ H390_2 Fare, restriksjonsområde for nedlagt
(%‑BYA) er 75 %. Planen stiller særskilte estetiske krav, avfallsdeponi: I henhold til Kommuneplanens § 8‑1.18:
og bygningsvolum mot Strømsveien skal nedtrappes mot "Innenfor området tillates ikke etablering av teknisk
den bevaringsverdige bebyggelsen i Felt 2. infrastruktur i form av

---

[d097_d097 | Side [1]]
. Dyreholdet må ikke være til
sjenanse for de øvrige brukerne av eiendommen.
29

## Side 30

OM EIENDOMMEN
Sikkerhet mot områdeskred utredes i samsvar med
Oppvarming
NVEs veileder 1/ 2019.
Elektrisk oppvarming via gulvvarme i entré, soverom 1, ‑ H190 Sikringssone fjellanlegg (avløpsanlegg): Sonen
rom 1, omkledningsrom/ rom 2, bad, kjøkken og stue. gjelder under bakken (Vertikalnivå 1). I henhold til
reguleringsplan 579, § 3.2.1: "I sikringssonen kan ikke
tiltak på bakkeplan som krever tillatelse etter

---

[d097_d097 | Side [1]]
d til Strømmen togstasjon med forbindelser bil. Det er også kort avstand til videregående skoler på
til blant annet Oslo og Gardermoen. Reisetiden til Oslo S Strømmen, Skedsmo og i Lillestrøm, samt OsloMet på
24

## Side 25

OM EIENDOMMEN
Kjeller. I nærområdet finnes flere private og offentlige
Ferdigattest/ brukstillatelse:
barnehager. Noas Ark barnehage ligger kun fem
minutters gange fra leiligheten. Det er utstedt ferdigattest for oppføring av nybygg bolig
med næringsdel og parkeringskjeller datert

---

[d097_d097 | Side [1]]
 med byggteknisk forskrift og mangle godkjennelse
i kommunen for den aktuelle bruken, uten at dette vil få betydning for takstmannens valg.
Strømsveien 77 C, 2010 STRØMMEN 9 av 14
54

## Side 55

Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Nei
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det manglende brannslukkingsutstyr og røykvarsler i boligen

---

[d097_d097 | Side [1]]
30 ‑ 35 dB (brann‑ og lyddør). Hvite ‑ Nei
ettspeils innerdører. Spørsmål til eier: Løses sikringene ofte ut?
‑ Nei
VVS‑installasjoner: Spørsmål til eier: Har det vært brann, branntilløp eller
Avløpsrør og vannledninger er av plast. Det er varmgang i anlegget?
rørfordelingsskap i entré og et rom. Stoppekran er ‑ Nei
plassert i kontorrom. Det er installert waterguard på
kjøkken. Badet har innebygd WC‑sisterne. TG2 ‑ Avvik som kan kreve tiltak:
Ventilasjon: ‑ Overflater | Det er bruksmerker på flere

---

[d097_d097 | Side [1]]
eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
43

## Side 44

Primære transportmidler Varer/Tjenester
Strømmen Storsenter 6 min
1. Egen bil
Ditt Apotek Strømmen 6 min
2. Buss
3. Tog
Aldersfordeling barn (0-18 år)
Kollektivtilbud 37% i barnehagealder
32% 6-12 år
Veldig bra 84/100
16% 13-15 år
15% 16-18 år
Støynivået
Lite støynivå

---

[d097_d097 | Side [1]]
r i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha

---

[d097_d097 | Side [1]]
r det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
Strømsveien 77 C, 2010 STRØMMEN 10 av 14
55

## Side 56

6.18 Elektrisk
Er det foretatt kontroll av det lokale el tilsyn i løpet av de siste 5 år Nei
Type sikringer Automatsikringer
Type anlegg Skjult
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det manglende samsvarserklæring på arbeider utført etter

---

[d097_d097 | Side [1]]
inat benkeplate med vaskekum. integrerte hvitevarer
Avtrekk
Type avtrekk balansert
Oppsummering av avtrekk TG-1
6.14 Lovlighet
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Nei
Rombenevnelse er iht dagens bruk på befaringstidspunkt, uten hensyn til byggeforskriftens krav. Det
er bruken av rommet på befaringstidspunktet som avgjør om rommet defineres som P-ROM eller S-
ROM. Dette betyr at rommet både kan være i strid med byggteknisk forskrift og mangle godkjennelse
i kommunen for

---

[d097_d097 | Side [1]]
0
:ecnerefer
tnemucoD
38

## Side 39

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du

---

[d097_d097 | Side [1]]
 er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
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
17 Selges eiendommen med

---

[d097_d097 | Side [1]]
i
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
6.15 Vinduer og dører
Beskrivelse
Vinduer med 3- lags glass i trekarmer, brann og lydvinduer(Ei30/35 db). Malt
glatt entrédør B30 - 35 dB (brann- og lyddør). Hvite ett speils innerdører.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen?

---

[d097_d097 | Side [1]]
gssakkyndig har verken kompetanse eller lov til å
foreta en slik kontroll etter retningslinjer fra FEL (forsirkrift for elektrisk lavspenningsanlegg) da dette krever
spesiell kompetanse og autorisasjon.
Iht. veileder fra direktoratet for byggkvalitet skal ikke den bygningssakkyndige sette tilstandsgrad på det elektriske
anlegget (https://www.dibk.no/regelverk/forskrift-til-avhendingslova-tryggere-bolighandel).
6.19 Avløpsrør
Type avløpsrør Plast
Er det gjennomført arbeider på anlegget etter byggeår? Nei
Er

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Fuktskade på sanitærutstyr (TG2): Innredning på bad er litt fukteskadet i bunn. Dette kan indikere underliggende fuktproblemer som kan utvikle seg videre og medføre kostbare utbedringer.",
      "evidence": [
        "Innredning litt fukt-skadet i bunn",
        "TG2 – Avvik som ikke krever umiddelbare tiltak: Bad – Sanitærutstyr | Innredning litt fukt-skadet i bunn. Tiltak ikke umiddelbart nødvendig",
        "Anbefalte tiltak / ytterligere undersøkelser anbefales"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        50
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R2",
      "description": "Overflateskader (TG2): Det er registrert bruksmerker på flere dørkarmer, store sprekker i laminatgulvet og sprekker i hjørner av gipsvegger. Sprekker i gulv og vegger kan indikere setningsskader eller strukturelle problemer.",
      "evidence": [
        "Det er bruksmerker på flere dører og dørkarmer",
        "Store sprekker i laminatgulvet",
        "Sprekker i hjørne av gipsvegger",
        "Anbefalte tiltak / ytterligere undersøkelser anbefales",
        "TG2 – Avvik som kan kreve tiltak: Overflater"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        50,
        54
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R3",
      "description": "Elektrisk anlegg ikke kontrollert: Det elektriske anlegget er ikke kontrollert av el-tilsyn de siste 5 år, og det er ikke foretatt el-takst. Det kan dermed foreligge avvik fra gjeldende forskriftskrav som ikke er avdekket.",
      "evidence": [
        "Er det foretatt kontroll av det lokale el tilsyn i løpet av de siste 5 år: Nei",
        "Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst)",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt",
        "Alle boliger skal ha periodisk kontroll hvert 20 år"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        28,
        55
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Skjeggkre bekreftet i sameiet: Det er bekreftet skjeggkre i en annen leilighet i sameiet. Skjeggkre er svært vanskelig å bli kvitt og kan spre seg til andre leiligheter, inkludert den aktuelle boligen.",
      "evidence": [
        "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja. i en annen leilighet",
        "Firmanavn: Ostberg norge A/S"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        40
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Kvikkleireskred-hensynssone (H310): Eiendommen ligger i aktsomhetsområde for kvikkleireskred. Ved reguleringsplan og byggesak må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, noe som kan begrense fremtidig utbygging og medføre kostnader.",
      "evidence": [
        "H310 Aktsomhetsområde kvikkleireskred: I henhold til Kommuneplanens § 8-1.8: Ved utarbeiding av reguleringsplan og byggesak innenfor hensynssonen må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, jf. krav i TEK17 § 7-3 med veiledning",
        "Sikkerhet mot områdeskred utredes i samsvar med NVEs veileder 1/2019"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        30
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Støysone (rød og gul): Eiendommen ligger i rød og gul støysone for veg. Dette kan påvirke bokvaliteten og stiller særskilte krav til støyfølsomme rom og fasadeutforming.",
      "evidence": [
        "Rød og gul støysone (veg): Eiendommen ligger i 'Sone 1 sentrumsformål' for differensierte støykrav",
        "Utenfor 50 % av støyfølsomme rom (soverom og stue/oppholdsrom) skal det være stille side på fasade",
        "Av disse skal minst ett rom være soverom. Det skal være gjennomgående leiligheter dersom stille side ikke kan oppnås ved plangrep"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        30
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Sikringssone for fjellanlegg (H190) og restriksjonsområde for nedlagt avfallsdeponi (H390_2): Eiendommen berøres av sikringssone for underjordisk avløpsanlegg og restriksjonsområde for nedlagt avfallsdeponi. Dette begrenser muligheten for tiltak i grunnen og kan medføre risiko for forurensning.",
      "evidence": [
        "H190 Sikringssone fjellanlegg (avløpsanlegg): Sonen gjelder under bakken (Vertikalnivå 1). I sikringssonen kan ikke tiltak på bakkeplan som krever tillatelse etter plan- og bygningslovens § 20-1 og som medfører sprengning, peleramming, spunting, boring i grunnen iverksettes uten spesiell tillatelse fra NRVA",
        "H390_2 Fare, restriksjonsområde for nedlagt avfallsdeponi: Innenfor området tillates ikke etablering av teknisk infrastruktur i form av vann-, avløps- og fjernvarmeledninger eller el- og telekabler"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        30
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Sameiets økonomi er ikke god nok: Styret har selv uttalt at sameiets økonomi ikke er god nok til å sette i gang tiltak. Dette kan medføre økte felleskostnader i fremtiden for nødvendig vedlikehold og oppgraderinger.",
      "evidence": [
        "Det fremgår av protokollen fra årsmøtet at «økonomien i sameiet er fortsatt ikke god nok til å sette i gang tiltak på nåværende tidspunkt»",
        "Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette",
        "Kjøper må påregne at felleskostnadene kan endres som følge av årsmøtevedtak eller endringer i sameiets kostnader"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Boden disponeres av seksjonen, men ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R10",
      "description": "Selgers egenerklæring ikke gjennomgått av bygningssakkyndig: Selgers egenerklæring er ikke fremlagt og gjennomgått av bygningssakkyndig ved befaring. Dette svekker kvalitetssikringen av opplysningene i tilstandsrapporten.",
      "evidence": [
        "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei",
        "Tilbakeholdt eller uriktig informasjon som har betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        51,
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Radonmåling ikke foretatt: Det er ikke foretatt radonmåling i boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner.",
      "evidence": [
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        40
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R12",
      "description": "Tinglyst heftelse – bestemmelse om veg og vann/kloakkledninger: Det er tinglyst flere heftelser på eiendommen knyttet til veg og vann/kloakkledninger med flere rettighetshavere. Disse kan ikke slettes uten samtykke fra kommunen og kan begrense bruken av eiendommen.",
      "evidence": [
        "2012/676379-3/200 21.08.2012 BESTEMMELSE OM VEG RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687",
        "2012/676401-1/200 21.08.2012 BEST. OM VANN/KLOAKKLEDN.",
        "Kan ikke slettes uten samtykke fra kommunen"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        30,
        31
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Risiko for overbeheftelse: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, kan handel ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette kan forsinke eller hindre gjennomføring av handelen.",
      "evidence": [
        "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        31
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R14",
      "description": "Eiendomsskatt: Det er eiendomsskatt på boliger og fast eiendom i Lillestrøm kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad som kjøper må påregne i tillegg til felleskostnader.",
      "evidence": [
        "I Lillestrøm kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R15",
      "description": "Ungdommer som ruser seg i bakgården: Sameiet har hatt utfordringer med ungdommer som ruser seg i bakgården, noe som ble tatt opp som sak på årsmøtet. Dette kan påvirke trivselen og sikkerheten for beboerne.",
      "evidence": [
        "D. Ungdommer som ruser seg i bakgården, Securitas tilbud",
        "Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette"
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        82,
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Området er under stadig endring og utvikling: Området rundt eiendommen er i kontinuerlig utvikling med bygg som settes opp, rehabiliteres og rives. Dette kan medføre støy, støv og endringer i nærområdet som påvirker bokvaliteten.",
      "evidence": [
        "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R17",
      "description": "Graveforbudssone langs Strømsveien: Det er en graveforbudssone langs Strømsveien på grunn av gatevarme. Dette kan begrense fremtidige tiltak og infrastrukturarbeid i nærområdet.",
      "evidence": [
        "Langs Strømsveien er det en graveforbudssone på grunn av gatevarme."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R18",
      "description": "Legalpant – risiko for skjulte heftelser: Kommunen og øvrige seksjonseiere har legalpant i seksjonen som ikke fremgår av grunnboksutskriften. Dette innebærer at kjøper kan overta skjulte forpliktelser knyttet til kommunale avgifter og felleskostnader.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
      ],
      "source_documents": [
        "d097_d097"
      ],
      "source_pages": [
        31
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Hva er de konkrete tiltakene som er planlagt eller vedtatt for å utbedre fuktskaden på badet?",
    "Er det foretatt ytterligere undersøkelser av sprekkene i laminatgulvet og gipsveggene – setningsskader eller strukturelle årsaker?",
    "Hva er sameiets konkrete vedlikeholdsplan og budsjett for 2025 og fremover?",
    "Er det dokumentert hvilke tiltak skjeggkre-bekjempelsen hos Ostberg Norge AS omfatter, og om den aktuelle leiligheten er behandlet?",
    "Foreligger det geoteknisk rapport eller risikovurdering knyttet til kvikkleireskred-hensynssonen for denne eiendommen?",
    "Er det foretatt støymålinger inne i leiligheten, og oppfyller fasaden kravene i støysoneplanen?",
    "Hva er status for nedlagt avfallsdeponi – er det foretatt forurensningsundersøkelser av grunnen?",
    "Hva er sameiets totale gjeld og likviditetssituasjon per dags dato, utover andelsgjeld på kr 5 009?",
    "Er boden formelt registrert som tilleggsdel (BRA-e) i seksjoneringsvedtaket, eller er bruken kun basert på avtale?"
  ],
  "reasoning": "\nGjennomgangen av de 16 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer er gjort:\n\n**Justert ned i confidence:**\n- R2 (Overflateskader): Justert fra 0.85 til 0.75. Evidensen bekrefter overflateskadene, men dokumentene gir ingen indikasjoner på at sprekkene skyldes setningsskader eller strukturelle problemer – dette er en spekulativ tilleggsrisiko som ikke støttes direkte av rapporten. Bygget er fra 2019 og er relativt nytt.\n- R13 (Overbeheftelse): Justert fra 0.75 til 0.60. Dette er standardformulering i de fleste salgsoppgaver og representerer en hypotetisk risiko, ikke en konkret og aktuell risiko for denne eiendommen. Evidensen er boilerplate-tekst.\n- R14 (Eiendomsskatt): Justert fra 0.75 til 0.60. Eiendomsskatt er en generell kommunal ordning og ikke en spesifikk risiko for denne eiendommen. Det er ikke oppgitt konkret skattebeløp, noe som svekker risikorelevansen.\n- R11 (Radon): Justert fra 0.80 til 0.75. Boligen er i en høyblokk (boligblokk, byggeår 2019) og ligger ikke i kjeller eller på bakkeplan, noe som reduserer radonrisikoen noe, men manglende måling er likevel et reelt informasjonsgap.\n\n**Opprettholdt:**\n- R1, R3, R4, R5, R6, R7, R8, R9, R10, R12, R15, R16 er alle godt støttet av konkret evidens i dokumentene og beholdes med uendret eller tilnærmet uendret confidence.\n\n**Nye risikoer identifisert:**\n- R17 (Graveforbudssone langs Strømsveien): Fremgår eksplisitt av dokumentet og er ikke fanget opp i de opprinnelige risikoene. Relevant for fremtidige infrastrukturtiltak.\n- R18 (Legalpant – skjulte heftelser): Legalpant fra kommunen og sameiet fremgår tydelig av dokumentet og har prioritet foran tinglyste lån. Dette er en reell risiko som ikke var identifisert.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkrete tiltak og status for skjeggkre-bekjempelse\n- Geoteknisk vurdering av kvikkleireskred-risiko\n- Støymålinger inne i leiligheten\n- Forurensningsstatus for nedlagt avfallsdeponi\n- Sameiets fullstendige økonomi og likviditet\n- Formell registrering av boden i seksjoneringsvedtaket\n"
}

## Raw Response
```json
{
  "id": "msg_01N2XNeroJzVzuhwYUnfdBb3",
  "container": null,
  "content": [
    {
      "id": "toolu_01U2Z25EiVeGUh5rii3Qqb3N",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Fuktskade på sanitærutstyr (TG2): Innredning på bad er litt fukteskadet i bunn. Dette kan indikere underliggende fuktproblemer som kan utvikle seg videre og medføre kostbare utbedringer.",
            "evidence": [
              "Innredning litt fukt-skadet i bunn",
              "TG2 – Avvik som ikke krever umiddelbare tiltak: Bad – Sanitærutstyr | Innredning litt fukt-skadet i bunn. Tiltak ikke umiddelbart nødvendig",
              "Anbefalte tiltak / ytterligere undersøkelser anbefales"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              50
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R2",
            "description": "Overflateskader (TG2): Det er registrert bruksmerker på flere dørkarmer, store sprekker i laminatgulvet og sprekker i hjørner av gipsvegger. Sprekker i gulv og vegger kan indikere setningsskader eller strukturelle problemer.",
            "evidence": [
              "Det er bruksmerker på flere dører og dørkarmer",
              "Store sprekker i laminatgulvet",
              "Sprekker i hjørne av gipsvegger",
              "Anbefalte tiltak / ytterligere undersøkelser anbefales",
              "TG2 – Avvik som kan kreve tiltak: Overflater"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              50,
              54
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R3",
            "description": "Elektrisk anlegg ikke kontrollert: Det elektriske anlegget er ikke kontrollert av el-tilsyn de siste 5 år, og det er ikke foretatt el-takst. Det kan dermed foreligge avvik fra gjeldende forskriftskrav som ikke er avdekket.",
            "evidence": [
              "Er det foretatt kontroll av det lokale el tilsyn i løpet av de siste 5 år: Nei",
              "Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst)",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt",
              "Alle boliger skal ha periodisk kontroll hvert 20 år"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              28,
              55
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Skjeggkre bekreftet i sameiet: Det er bekreftet skjeggkre i en annen leilighet i sameiet. Skjeggkre er svært vanskelig å bli kvitt og kan spre seg til andre leiligheter, inkludert den aktuelle boligen.",
            "evidence": [
              "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? Ja. i en annen leilighet",
              "Firmanavn: Ostberg norge A/S"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              40
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Kvikkleireskred-hensynssone (H310): Eiendommen ligger i aktsomhetsområde for kvikkleireskred. Ved reguleringsplan og byggesak må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, noe som kan begrense fremtidig utbygging og medføre kostnader.",
            "evidence": [
              "H310 Aktsomhetsområde kvikkleireskred: I henhold til Kommuneplanens § 8-1.8: Ved utarbeiding av reguleringsplan og byggesak innenfor hensynssonen må det dokumenteres tilstrekkelig sikkerhet mot områdeskred, jf. krav i TEK17 § 7-3 med veiledning",
              "Sikkerhet mot områdeskred utredes i samsvar med NVEs veileder 1/2019"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              30
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Støysone (rød og gul): Eiendommen ligger i rød og gul støysone for veg. Dette kan påvirke bokvaliteten og stiller særskilte krav til støyfølsomme rom og fasadeutforming.",
            "evidence": [
              "Rød og gul støysone (veg): Eiendommen ligger i 'Sone 1 sentrumsformål' for differensierte støykrav",
              "Utenfor 50 % av støyfølsomme rom (soverom og stue/oppholdsrom) skal det være stille side på fasade",
              "Av disse skal minst ett rom være soverom. Det skal være gjennomgående leiligheter dersom stille side ikke kan oppnås ved plangrep"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              30
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Sikringssone for fjellanlegg (H190) og restriksjonsområde for nedlagt avfallsdeponi (H390_2): Eiendommen berøres av sikringssone for underjordisk avløpsanlegg og restriksjonsområde for nedlagt avfallsdeponi. Dette begrenser muligheten for tiltak i grunnen og kan medføre risiko for forurensning.",
            "evidence": [
              "H190 Sikringssone fjellanlegg (avløpsanlegg): Sonen gjelder under bakken (Vertikalnivå 1). I sikringssonen kan ikke tiltak på bakkeplan som krever tillatelse etter plan- og bygningslovens § 20-1 og som medfører sprengning, peleramming, spunting, boring i grunnen iverksettes uten spesiell tillatelse fra NRVA",
              "H390_2 Fare, restriksjonsområde for nedlagt avfallsdeponi: Innenfor området tillates ikke etablering av teknisk infrastruktur i form av vann-, avløps- og fjernvarmeledninger eller el- og telekabler"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              30
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Sameiets økonomi er ikke god nok: Styret har selv uttalt at sameiets økonomi ikke er god nok til å sette i gang tiltak. Dette kan medføre økte felleskostnader i fremtiden for nødvendig vedlikehold og oppgraderinger.",
            "evidence": [
              "Det fremgår av protokollen fra årsmøtet at «økonomien i sameiet er fortsatt ikke god nok til å sette i gang tiltak på nåværende tidspunkt»",
              "Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette",
              "Kjøper må påregne at felleskostnadene kan endres som følge av årsmøtevedtak eller endringer i sameiets kostnader"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Boden disponeres av seksjonen, men ligger på sameiets fellesareal: Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet, noe som kan medføre at kjøper mister tilgang til boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette arealet."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R10",
            "description": "Selgers egenerklæring ikke gjennomgått av bygningssakkyndig: Selgers egenerklæring er ikke fremlagt og gjennomgått av bygningssakkyndig ved befaring. Dette svekker kvalitetssikringen av opplysningene i tilstandsrapporten.",
            "evidence": [
              "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei",
              "Tilbakeholdt eller uriktig informasjon som har betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              51,
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Radonmåling ikke foretatt: Det er ikke foretatt radonmåling i boligen. Radon er en usynlig og luktfri gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner.",
            "evidence": [
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              40
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R12",
            "description": "Tinglyst heftelse – bestemmelse om veg og vann/kloakkledninger: Det er tinglyst flere heftelser på eiendommen knyttet til veg og vann/kloakkledninger med flere rettighetshavere. Disse kan ikke slettes uten samtykke fra kommunen og kan begrense bruken av eiendommen.",
            "evidence": [
              "2012/676379-3/200 21.08.2012 BESTEMMELSE OM VEG RETTIGHETSHAVER: KNR: 0231 GNR: 77 BNR: 1687",
              "2012/676401-1/200 21.08.2012 BEST. OM VANN/KLOAKKLEDN.",
              "Kan ikke slettes uten samtykke fra kommunen"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              30,
              31
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Risiko for overbeheftelse: Dersom eiendommen skulle bli overbeheftet i salgsprosessen, kan handel ikke gjennomføres uten at kreditorene gir nødvendig pantefrafall. Dette kan forsinke eller hindre gjennomføring av handelen.",
            "evidence": [
              "Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke oppnås vil handel ikke kunne gjennomføres."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              31
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R14",
            "description": "Eiendomsskatt: Det er eiendomsskatt på boliger og fast eiendom i Lillestrøm kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad som kjøper må påregne i tillegg til felleskostnader.",
            "evidence": [
              "I Lillestrøm kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R15",
            "description": "Ungdommer som ruser seg i bakgården: Sameiet har hatt utfordringer med ungdommer som ruser seg i bakgården, noe som ble tatt opp som sak på årsmøtet. Dette kan påvirke trivselen og sikkerheten for beboerne.",
            "evidence": [
              "D. Ungdommer som ruser seg i bakgården, Securitas tilbud",
              "Styret vurderer et tilbud på vakthold til en månedlig kostnad på kr 2 750, men det er ikke fattet vedtak om dette"
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              82,
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Området er under stadig endring og utvikling: Området rundt eiendommen er i kontinuerlig utvikling med bygg som settes opp, rehabiliteres og rives. Dette kan medføre støy, støv og endringer i nærområdet som påvirker bokvaliteten.",
            "evidence": [
              "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned. Vi anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R17",
            "description": "Graveforbudssone langs Strømsveien: Det er en graveforbudssone langs Strømsveien på grunn av gatevarme. Dette kan begrense fremtidige tiltak og infrastrukturarbeid i nærområdet.",
            "evidence": [
              "Langs Strømsveien er det en graveforbudssone på grunn av gatevarme."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R18",
            "description": "Legalpant – risiko for skjulte heftelser: Kommunen og øvrige seksjonseiere har legalpant i seksjonen som ikke fremgår av grunnboksutskriften. Dette innebærer at kjøper kan overta skjulte forpliktelser knyttet til kommunale avgifter og felleskostnader.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
            ],
            "source_documents": [
              "d097_d097"
            ],
            "source_pages": [
              31
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Hva er de konkrete tiltakene som er planlagt eller vedtatt for å utbedre fuktskaden på badet?",
          "Er det foretatt ytterligere undersøkelser av sprekkene i laminatgulvet og gipsveggene – setningsskader eller strukturelle årsaker?",
          "Hva er sameiets konkrete vedlikeholdsplan og budsjett for 2025 og fremover?",
          "Er det dokumentert hvilke tiltak skjeggkre-bekjempelsen hos Ostberg Norge AS omfatter, og om den aktuelle leiligheten er behandlet?",
          "Foreligger det geoteknisk rapport eller risikovurdering knyttet til kvikkleireskred-hensynssonen for denne eiendommen?",
          "Er det foretatt støymålinger inne i leiligheten, og oppfyller fasaden kravene i støysoneplanen?",
          "Hva er status for nedlagt avfallsdeponi – er det foretatt forurensningsundersøkelser av grunnen?",
          "Hva er sameiets totale gjeld og likviditetssituasjon per dags dato, utover andelsgjeld på kr 5 009?",
          "Er boden formelt registrert som tilleggsdel (BRA-e) i seksjoneringsvedtaket, eller er bruken kun basert på avtale?"
        ],
        "reasoning": "\nGjennomgangen av de 16 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer er gjort:\n\n**Justert ned i confidence:**\n- R2 (Overflateskader): Justert fra 0.85 til 0.75. Evidensen bekrefter overflateskadene, men dokumentene gir ingen indikasjoner på at sprekkene skyldes setningsskader eller strukturelle problemer – dette er en spekulativ tilleggsrisiko som ikke støttes direkte av rapporten. Bygget er fra 2019 og er relativt nytt.\n- R13 (Overbeheftelse): Justert fra 0.75 til 0.60. Dette er standardformulering i de fleste salgsoppgaver og representerer en hypotetisk risiko, ikke en konkret og aktuell risiko for denne eiendommen. Evidensen er boilerplate-tekst.\n- R14 (Eiendomsskatt): Justert fra 0.75 til 0.60. Eiendomsskatt er en generell kommunal ordning og ikke en spesifikk risiko for denne eiendommen. Det er ikke oppgitt konkret skattebeløp, noe som svekker risikorelevansen.\n- R11 (Radon): Justert fra 0.80 til 0.75. Boligen er i en høyblokk (boligblokk, byggeår 2019) og ligger ikke i kjeller eller på bakkeplan, noe som reduserer radonrisikoen noe, men manglende måling er likevel et reelt informasjonsgap.\n\n**Opprettholdt:**\n- R1, R3, R4, R5, R6, R7, R8, R9, R10, R12, R15, R16 er alle godt støttet av konkret evidens i dokumentene og beholdes med uendret eller tilnærmet uendret confidence.\n\n**Nye risikoer identifisert:**\n- R17 (Graveforbudssone langs Strømsveien): Fremgår eksplisitt av dokumentet og er ikke fanget opp i de opprinnelige risikoene. Relevant for fremtidige infrastrukturtiltak.\n- R18 (Legalpant – skjulte heftelser): Legalpant fra kommunen og sameiet fremgår tydelig av dokumentet og har prioritet foran tinglyste lån. Dette er en reell risiko som ikke var identifisert.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkrete tiltak og status for skjeggkre-bekjempelse\n- Geoteknisk vurdering av kvikkleireskred-risiko\n- Støymålinger inne i leiligheten\n- Forurensningsstatus for nedlagt avfallsdeponi\n- Sameiets fullstendige økonomi og likviditet\n- Formell registrering av boden i seksjoneringsvedtaket\n"
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
    "input_tokens": 18819,
    "output_tokens": 5445,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
