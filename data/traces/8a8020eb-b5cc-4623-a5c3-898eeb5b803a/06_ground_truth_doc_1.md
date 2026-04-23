# Trace: ground_truth_doc_1
- **Run ID:** 8a8020eb-b5cc-4623-a5c3-898eeb5b803a
- **Tidspunkt:** 2026-03-18T10:41:06.650148+00:00
- **Varighet:** 150.20s
- **Input tokens:** 77352
- **Output tokens:** 8192

## System Prompt
Du er en ekspert-annotator for risikoer i norske eiendomsdokumenter. Din oppgave er å lage en UTTØMMENDE ground truth-annotering av alle risikoer i de gitte dokumentene.

Du skal identifisere risikoer i alle fire kategorier:
- structural_defect: Strukturelle feil eller skader (TG2/TG3-graderinger, fukt, råte, setninger, dårlig tilstand)
- area_discrepancy: Avvik i arealtall mellom dokumenter (P-ROM, BRA, BTA som ikke stemmer overens)
- price_discrepancy: Uvanlige prisforhold eller avvik (prisantydning vs takst, lave/høye verdier)
- contractual_issue: Kontraktsmessige problemer eller mangler (manglende klausuler, uklare vilkår, forbehold)

Alvorlighetsgrad:
- critical: Alvorlig risiko som krever umiddelbar oppmerksomhet (TG3, store avvik, alvorlige mangler)
- warning: Moderat risiko som bør undersøkes (TG2 med anmerkninger, mindre avvik)
- info: Informasjon som kan være relevant (TG1 med kommentarer, generelle opplysninger)

VIKTIG:
- Vær UTTØMMENDE. Inkluder ALLE risikoer du finner, selv små.
- Bruk EKSAKTE sitater fra dokumentene som evidens.
- Oppgi KORREKTE sidenumre for hver risiko.
- TG-grader (Tilstandsgrad): TG0=ingen avvik, TG1=mindre avvik, TG2=vesentlige avvik, TG3=store/alvorlige avvik.
- P-ROM=primært rom, BRA=bruksareal, BTA=bruttoareal.
- Inkluder relevante detaljer i details-objektet (f.eks. TG-grad, arealtall, beløp).

## User Prompt
Analyser følgende eiendomsdokument og identifiser ALLE risikoer.

=== DOKUMENT: Salgsoppgave (1).pdf ===

--- Side 1 ---

Velkommen til
Gustav Granhaugs veg 85A,
2070 Råholt

--- Side 2 ---



--- Side 3 ---

Velkommen til
Gustav Granhaugs veg 85A,
2070 Råholt

--- Side 4 ---

Strøken & smakfull kjedet enebolig med
flotte uteplasser |Generøs
himlingshøyde i 2. etg |Peisovn |Garasje
|Barnevennlig
Velkommen til Gustav Granhaugs Veg 85A!
Utvendig gir boligen et godt førsteinntrykk med asfaltert
gårdsplass og overbygget inngangsparti.
Innvendig venter en god planløsning som egner seg godt til
hele familien. Boligen fordeler seg fint over to etasjer og gir
fine oppholdsrom for både store og små. Oppe i 2. etg. får du
boligens samlingspunkt i den åpne stue‑/ kjøkkenløsningen med
videre utgang til hyggelige uteplasser.
Høydepunkter:
‑ Oppgradert i 2025 med nye overflater
‑ Generøs takhøyde på opptil 4,3 m i stue/ kjøkken sonen
‑ Peis & varmepumpe
‑ Hyggelig hage & uteplasser
Her vil du kunne nyte å bo i barnevennlige omgivelser, med
nærhet til skoler, barnehager og turområder. Det er kort vei til
Eidsvoll Verk stasjon, som enkelt frakter deg til Oslo S og
Gardermoen.

--- Side 5 ---

Les salgsoppgaven nøye
Som megler møter jeg hele tiden mennesker på jakt etter
drømmeboligen. Fordi boligkjøp er en av de viktigste
investeringene du gjør i livet ditt, har jeg full forståelse for at det
kan være en krevende prosess. Det er mye informasjon man skal
sette seg inn i, og mange spørsmål som dukker opp underveis.
Hovedmålet med denne salgsoppgaven er å gi deg nettopp all
informasjonen du trenger, slik at du har det beste grunnlaget for
å bestemme deg for om du ønsker å bli med i budrunden eller
ikke.
Jeg anbefaler deg å lese nøye gjennom salgsoppgaven, slik at du
stiller mest mulig forberedt på visning. Uansett hvilke spørsmål du
har, er det bare å ta kontakt med meg.
Lykke til!
Cathrine Gundersen
eiendomsmegler
Tlf: 456 13 442
E‑post: cathrine.gundersen@em1ostlandet.no

--- Side 6 ---

Nøkkelinformasjon
Prisantydning kr 6 200 000
Omkostninger kr 156 090
Total pris inkl. omkostninger kr 6 356 090
Felleskostnader pr. mnd. kr 776
BRA Total/ BRA‑i 143/ 118 m²
Antall soverom 3
Eiendomstype Kjedet enebolig
Eierform Eierseksjon
Tomtetype Eiet
Byggeår 2015
Energimerking Bokstav: B, farge: Oransje
6

--- Side 7 ---

Informasjon om eiendommen
Området
Adresse
Gustav Granhaugs veg 85A, 2070 RÅHOLT
Registerbetegnelse
Gnr. 96, bnr. 615, snr. 10, ideell andel 1/ 1 i Sameiet Bekkedalshøgda med orgnr.: 925258296 i
Eidsvoll kommune.
Adkomst
Se digitalt kart i finn‑annonsen. Ved å trykke på kartet får du enkelt tilgang til en spesifisert
reiserute fra din startdestinasjon til boligen. På visningsdagen vil det bli skiltet med
visningsskilter fra EiendomsMegler 1.
Beliggenhet
Velkommen til Gustav Granhaugs veg 85A. Her bor du i et etablert nabolag preget av moderne
bebyggelse og en trygg atmosfære. Dette er et område som kombinerer det landlige og
fredelige med umiddelbar nærhet til alt en aktiv familie behøver i hverdagen. Nabolaget er
ideelt for barnefamilier og etablerere som ønsker trygge rammer, gode oppvekstvilkår og kort
vei til både natur og bymessige fasiliteter.
Hverdagslogistikken er enkel med flere skoler og barnehager innen korte kjøreavstander. Råholt
barneskole ligger i nærheten, samt at det er 3 andre barnehager i nærheten i tillegg til
Bønsmoen: Råholtbråtan barnehage, Råholt Naturbarnehage, Ladderud Barnehage AS. Råholt
ungdomsskole kan nås til fots på ca. et kvarter. For fritidsaktiviteter finnes det et bredt tilbud i
nærområdet. Haugenfeltet, med muligheter for ballspill og skøyting, er en kort spasertur unna,
og ved ungdomsskolen er det både aktivitetshall og fotballbaner. Råholt Bad – moderne
badeanlegg med klatrevegg og stupetårn. I Letohallen finner man et stort og moderne
klatresenter, "Høyt Under Taket".
Dagligvare innkjøpene gjør du enkelt på Spar, Kiwi, Rema eller Coop ‑ her finnes det et bredt
utvalg av matbutikker. AMFI Eidsvoll dekker de fleste shoppingbehov med over 50 butikker,
apotek og spisesteder som NIO Restaurant og Bar.
Området gir umiddelbar tilgang til skog og mark, perfekt for turer, løping og rekreasjon rett
utenfor døren. For lengre utflukter er turstiene opp til Mistberget, med sin panoramautsikt, et
populært mål. Samtidig er beliggenheten svært praktisk for pendlere. Med bil er du på Eidsvoll
Verk stasjon på 5 minutter, hvor toget tar deg til Oslo S på ca. en halvtime og til Oslo Lufthavn på
kun 6 minutter. Dette gir en unik kombinasjon av en rolig og naturnær base med effektiv tilgang
til hovedstaden og resten av verden.
Barnehage/ Skole/ Fritid
Se vedlagt nabolagsprofil. Dersom skole‑ og barnehagetilbud er av betydning for kjøpet, ber vi
om at det rettes en særskilt henvendelse til kommunen/ bydelsadministrasjonen for oppdatert
informasjon.
Bebyggelsen
Eiendomstype
Kjedet enebolig.
Boligen er matrikkelført som eierseksjon, hvor enhetene på rekken henger sammen i
carporten/garasjen. Det er utstedt ferdigattest på 8 tomannsboliger og enebolig, se vedlagt
ferdigattest.
7

--- Side 8 ---

Areal
BRA ‑ i: 118 m²
BRA ‑ e: 25 m²
BRA totalt: 143 m²
TBA: 50 m²
Bruksareal fordelt på etasje
1. etasje
BRA‑i: 59 m² Gang, bad, vaskerom, 3 soverom.
BRA‑e: 25 m² Garasje og bod.
2. etasje
BRA‑i: 59 m² Kjøkken, stue, toalett.
TBA fordelt på etasje
1. etasje
21 m² Vestvendt platting og pergola.
2. etasje
29 m² Terrasse over garasje.
Arealene er oppgitt av bygningssakkyndig på grunnlag av NS3940(2023).
Internt bruksareal (BRA‑i) er areal innenfor boligens omsluttende vegger. Det er for eksempel
stue, soverom, kjøkken, entré, bad, loftsrom, innvendig bod og ganger mellom disse. Dersom
boligen består av en bruksenhet med flere selvstendige boenheter, skal de selvstendige
boenhetene kategoriseres som BRA‑i. Et eksempel på dette kan være en enebolig med adskilt
utleieenhet.
Eksternt bruksareal (BRA‑e) er for eksempel en ekstern bod, kjellerstue med egen inngang,
gjesterom, tilleggsbygg eller andre rom som tilhører boenheten, men som ikke er direkte
tilknyttet det interne arealet. Tilleggsbygg kan være for eksempel garasje, naust eller utvendig
bod.
Innglasset balkong (BRA‑b) er innglassede balkonger, verandaer og altaner som disponeres av
boenheten.
Terrasse‑ og balkongareal (TBA) er arealet av terrasser, altaner, verandaer og åpne balkonger
som er tilknyttet boenheten.
Boligens gulvareal (GUA) er boligens samlede gulvareal og areal med lav takhøyde ALH er areal
uten krav til minste himlingshøyde.
Antall soverom
3
Se for øvrig informasjon under «Innhold»‑feltet.
Antall soverom er angitt etter Forbrukertilsynets retningslinjer, og inkluderer kun soverom som er
godkjent til varig opphold. Antall soverom angitt av bygningssakkyndige i tilstandsrapport er
angitt etter takstbransjens retningslinjer, der det er den faktiske bruken av rommet på
markedsføringstidspunktet som er avgjørende. Bruken av rommet kan likevel være i strid med
byggetekniske forskrifter og/ eller manglende godkjennelse, bruksendringer til rom for varig
8

--- Side 9 ---

opphold m.m. I de tilfeller det er opplysninger fra selger og/ eller kommunen om at rom ikke er
godkjent til varig opphold, vil årsaken til dette fremkomme i salgsoppgaven.
Antall bad
1
Byggemåte
Informasjon er hentet fra vedlagte tilstandsrapport, datert 22.01.2026.
Bygning:
Kjedet enebolig oppført i 2015. Boligen er opprinnelig oppført i normalt gode og kjente
konstruksjoner med den byggemåte som var vanlig ved oppføringstidspunktet. Boligen har en
planløsning over to plan og har gjennomgått vesentlige oppgraderinger etter byggeår, spesielt
i 2025. Ytterveggene har liggende, hvitmalt kledning med god lufting og montert musebånd.
Fundamenteringen består av støpt plate på mark på en byggegrunn av pukk/ stein og løsmasser.
Tak:
Boligen har en pulttak‑konstruksjon, tekket med antatt pappshingel. Takkonstruksjonen er
innredet (lukket) med full takhøyde innvendig, og det er ikke etablert loft. Det er etablert god
lufting av konstruksjonen. Bortleding av vann fra taknedløp er ivaretatt, og det er montert
snøfangere fra nabo til terrasse.
Pipe/ Ildsted:
Det er montert en lukket peis eller ovn i stuen i 2. etasje.
Vinduer:
Boligen har hvitmalte vinduer med tre‑lags isolerglass fra 2015. I 2025 ble det montert nye
lameller og plissegardiner fra Norgesmarkiser.
Dører:
Innvendige dører er hvitmalte, profilerte dører fra Swedoor. Ytterdør og terrassedører er
hvitmalte med tre‑lags glass. I 2025 ble det montert nye sorte håndtak på de innvendige dørene,
og alle gerikter rundt dørene ble sparklet og malt.
Trapper/ adkomst:
Innvendig er det en lukket, hvitmalt tretrapp med filt i trappetrinn, samt rekkverk og håndløper.
Trapp og rekkverk ble malt med to strøk og fikk nye teppefliser i 2025. Utvendig er det trapp fra
terrassen ned til platting/ hage.
Balkong/ terrasse:
Boligen har en vestvendt terrasse på 29 m² over garasjen med utgang fra stue/ kjøkken, og en
vestvendt platting på bakkenivå med pergola. Det er også en terrasse/ platting i 1. etasje med
utgang fra et soverom. Terrasser og platting er dekket med impregnert trevirke. Eier renset og
beiset terrasser, plattinger og gjerder med to strøk i 2025.
VVS‑installasjoner:
Boligen har avløpsrør av plast og vannledninger i et rør‑i‑rør system. Fordelerskapet er plassert
på vaskerommet og inneholder stoppekran og waterguard. I 2025/ 2026 ble det etablert
avløpsrør fra vasken på vaskerommet. I 2026 ble det montert tilbakeslagsventil og
ekspansjonskar. Varmtvannsberederen er en Høiax Titanium Standard 200 fra 2015, plassert på
vaskerommet.
9

--- Side 10 ---

Ventilasjon:
Boligen har balansert ventilasjon av typen Flexit, som gjenvinner varme fra ventilasjonsluften.
Anlegget er plassert på vaskerommet, og filter byttes årlig. Kjøkkenet har en kjøkkenventilator
med avtrekk ut.
Tekniske detaljer:
Oppvarming skjer med en Samsung varmepumpe i stuen i 2. etasje, samt varmekabler i gang,
bad og vaskerom. Service på varmepumpen ble utført i 2022. Boligen har også et ildsted/ lukket
peis, sentralstøvsuger, røykvarslere og brannslukningsapparat.
Garasje og bod:
Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over. Innerst i garasjen
er det en lukket bod med egen utgang til hagen på baksiden. Det er også utekran i garasjen.
Garasjen er 6,6 m x 3,1 m og boden er 3,0 m x 1,9 m.
Elektrisk anlegg: Sikringsskap er plassert på vaskerom og har automatsikringer.
Er det foretatt kontroll av det lokale el‑tilsyn eller utført utvidet el‑kontroll i løpet av de siste 5
år?
‑ Nei
Har eier opplyst om arbeider utført etter opprinnelig byggeår?
‑ Ja. Tidligere eier har opplyst at det er satt opp utvendige lykter, arbeid utført av Næss
Instalasjon AS. Utover dette er det ikke utført arbeid på anlegget etter byggeår.
Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999?
‑ Nei
Er det manglende kursfortegnelse?
‑ Nei
Er det manglende samsvar mellom kursfortegnelse og antall sikringer?
‑ Nei
Er det tegn på varmgang (termiske skader) på kabler, brytere, downlight, stikkkontakter, og
elektrisk utstyr?
‑ Nei
Er plugg (støpsel) på berederen brunsvidd?
‑ Ikke relevant, fast tilkobling
Er kabler utilstrekkelig festet?
‑ Nei
Er det tegn til at kabelinnføringer og hull i inntak og sikringsskap ikke er tette?
‑ Nei
Spørsmål til eier: Løses sikringene ofte ut?
‑ Nei
Spørsmål til eier: Har det vært brann, branntilløp eller varmgang i anlegget?
‑ Nei
TG2 ‑ Avvik som kan kreve tiltak:
‑ Våtrom ‑ Bad ‑ Overflater | Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp
membran ved dør, er tilfredsstillende. Det måles en høydeforskjell på ca 3,5 cm. Det registreres
ikke tegn til skader eller avvik utover normal slitasje. Det registreres bom i en flis mellom
dusjsone og vask/ servant (manglende heft til underlaget) med risiko for at flis kan løsne.
TGIU ‑ Ikke undersøkt/ utilgjengelig:
‑ Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra
10

--- Side 11 ---

taknedløp er ivaretatt.
‑ Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og
skader i plate på mark vil ikke være synlig da konstruksjonen er tildekket og ligger under
bakkenivå.
‑ Balkong, terrasse, platting | TG‑IU settes på bakgrunn av at terrasse og platting er dekket med
snø. Terrasse og platting er ikke vurdert. Det bør foretas nærmere undersøkelser av platting/
terrasser når den er snøfri.
‑ Skorstein over tak | Pipe over tak er ikke undersøkt pga snø. På generelt grunnlag vil det alltid
anbefales at det utføres en undersøkelse av tak/ tekking, beslag og pipe når forholdene gjør det
mulig.
‑ Takkonstruksjon og loft | Konstruksjonen var snødekt på befaringstidspunktet, og utvendig
inspeksjon kunne derfor ikke utføres. Det gjøres oppmerksom på at det er synlig lufting av
konstruksjonen. På generelt grunnlag anbefales det en ytterligere undersøkelse av tak/
konstruksjonen når det er snøfritt.
‑ Taktekking | Kontrollen er kun utført fra bakkenivå, samt at tak/ tekking er dekket med snø. Det
er derfor ikke foretatt kontroll av alle beslag, overganger eller tekking. Inspeksjon og vurdering
av taktekking anbefales når forholdene gjør det mulig.
Opplistingen over er ikke uttømmende og du oppfordres til å lese og sette deg grundig inn i alt
salgsmateriell.
For ordens skyld nevner vi at TGIU står for tilstandsgrad ikke undersøkt, f.eks. fordi en del av
bygget ikke har vært tilgjengelig for inspeksjon. Disse delene kan dermed ha feil eller mangler
som ikke er avdekket.
Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de
elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer
til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det
sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
Videre må kjøper være forberedt på det må foretas oppgraderinger på grunn av slitasje,
fraværende vedlikehold, arbeider som er utført av ufaglærte, utidsmessighet eller tekniske
løsninger som ikke holder dagens standard. I Norge er det en av oppgavene til Det lokale
el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg i boliger og fritidsboliger. Alle boliger skal ha
periodisk kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres hvert 30 år. El‑anlegget er en
bygningsdel som er gjenstand for konstant utvikling, det må derfor påregnes at dagens anlegg
ikke nødvendigvis er dimensjonert for oppgradering av kjøkken med nye elektriske apparater,
rehabilitering av bad m/ varmekabler eller installeringer elbillader.
Parkering
Parkering på egen grunn, samt i garasje (opprinnelig carport hvor det er montert garasjeport).
Megler har ikke undersøkt om det er mulig med eller tilrettelagt for lading av el.biler i
borettslaget/ sameiet/ aksjelaget. Interessenter og budgivere må selv undersøke hvorvidt dette
er mulig.
Standard
Kjedet enebolig fra 2015 som er vesentlig oppgradert i 2025 og byr på en gjennomtenkt
planløsning over to plan. Første etasje er en privat sone med tre soverom, bad og vaskerom,
mens andre etasje er et åpent og sosialt rom med stue og kjøkken samt toalett. Her gir den
11

--- Side 12 ---

ekstra takhøyden, som strekker seg opptil 4,3 meter, en luftig og romslig atmosfære. Boligen har
gjennomgående nye overflater og moderne løsninger, noe som gir et helhetlig og
innflyttingsklart inntrykk.
Entré/ Gang:
I første etasje blir du møtt av en innbydende gang med flislagt gulv og varmekabler. I gangen er
det en praktisk skyvedørsgarderobe hvor det er godt med plass til yttertøyet. Gangen leder
videre til etasjens øvrige rom og har en hvitmalt, lukket tretrapp med trappetrinnsteppe i
trinnene som fører opp til andre etasje. Trappen ble malt og fikk nytt trappetrinnsteppe i 2025.
Soverom:
Boligen har tre soverom, alle praktisk plassert i første etasje. Samtlige rom fikk nye én‑stavs
laminatgulv med eikelister i 2025, og veggene er behandlet med malt gips og tapet. To av
soverommene har nye plisségardiner og lystett plisségardin. Ett av soverommene har en ny,
romslig skyvedørsgarderobe fra 2025, mens soverommet som er innredet som kontor og
garderoberom har direkte utgang til hagen.
Bad:
Badet er fra byggeåret og har flislagte overflater med mørke 20x20 fliser på gulvet og veggene
har en kombinasjon av hvite 40x25 fliser og sorte 20x20 fliser i dusjsonen. Rommet har
varmekabler i gulvet og dimmbare spotter i himlingen. I 2025 ble det installert ny
baderomsinnredning med tre høyskap, servantskap, vask og dobbelt speilskap med lys. Badet
er videre utstyrt med et dusjhjørne med innfellbare glassdører og et veggmontert toalett med
innebygd sisterne.
Vaskerom:
Et praktisk vaskerom med flislagt gulv med varmekabler. Rommet ble oppgradert i 2025 med ny
innredning med hvite, profilerte fronter og utslagsvask. Her er det opplegg for vaskemaskin og
tørketrommel, og rommet huser også boligens tekniske installasjoner som Flexit balansert
ventilasjonsanlegg, sentralstøvsuger, sikringsskap, fordelerskap for rør‑i‑rør‑systemet og en
200‑liters varmtvannsbereder fra Høiax.
Stue og kjøkken:
I andre etasje er det en åpen løsning mellom stue og kjøkken, noe som skaper en god sosial
atmosfære. Den imponerende takhøyden med skråtak gir en fantastisk romfølelse, og store
vindusflater slipper inn rikelig med lys. Stuen har et ildsted for ekstra varme og hygge, samt en
effektiv Samsung varmepumpe. Fra stuen er det utgang til en romslig terrasse på 29 m² over
garasjen, med trapp ned til hagen. Kjøkkenet er en moderne AUBO‑innredning med hvite, glatte
fronter og laminatbenkeplate. Det har integrert komfyr, induksjonstopp, mikrobølgeovn,
kjøleskap og oppvaskmaskin. Nytt ett‑greps blandebatteri i sort. I 2025 ble kjøkkenet ytterligere
oppgradert med herdet glass med steintapet mellom benk og overskap, tre glassdører i herdet
glass over benken, og en underlimt vask med ett‑greps blandebatteri. Hele etasjen har nye
overflater fra 2025 med én‑stavs laminat på gulvet, eikelister og malte gipsvegger og tapet. Nye
lameller og plisségardiner fra Norgesmarkiser på flere av vinduene.
Toalettrom:
I andre etasje er det et praktisk toalettrom med flislagte vegger, speil fra gulv til tak og
moderne vask.
Overflater:
Gulvoverflater: Én‑stavs laminat og eikelister i alle oppholdsrom (2025). Fliser i gang, vaskerom,
bad og toalettrom fra byggeår. Varmekabler i gulv i gang, bad og vaskerom.
Vegger: Overflatebehandlet med malt gips og tapet i alle oppholdsrom (2025). Fliser på bad og
12

--- Side 13 ---

toalettrom fra byggeår.
Himling: Gips i himling på bad og entré/ gang med dimmbare spotter.
For beskrivelse av tilstandsgrad (TG) 2 og 3, se punktet Byggemåte i salgsoppgaven.
Interessenter oppfordres spesielt til å undersøke disse forholdene som er gitt TG2 og 3
nærmere, da gitte tilstandsgrader her er et konkret uttrykk for alder/ slitasje/ ødeleggelser/
konsekvenser som innebærer kostnader til utbedring. Kjøper må innta disse vurderingene og
medfølgende utbedringskostnader i sin kjøpsbeslutning, jf. avhl. § 3‑10. Det samme gjelder
eventuelt andre opplysninger om kjente risikofaktorer, som for eksempel ufaglært arbeid,
begrenset kontroll av det elektriske anlegget og opplysninger fra selgers
egenerklæringsskjema.
Innhold
Eiendommen er en kjedet enebolig over to plan og består av følgende rom:
1. etasje: Gang, bad, vaskerom og tre soverom.
2. etasje: Stue, kjøkken og toalettrom.
Eiendommen har fine uteplasser på til sammen 50 m².
Eiendommen disponerer garasje (opprinnelig carport) og bod.
Byggeår
Ca. 2015 iht. Eidsvoll kommune.
Moderniseringer og påkostninger
Selger opplyser følgende oppgraderinger i 2025:
Nye overflater: én‑stavs laminat/ parkett og eikelister i alle oppholdsrom (2025).
Vegger er overflatebehandlet med malt gips og tapet i alle oppholdsrom (2025).
Stikkontakter er malt for å tilpasses veggfargene (2025).
Hvitmalte, profilerte innerdører med nye sorte håndtak (2025).
Alle gerikter rundt dører er sparklet og malt (2025).
Det er montert nye lameller og plissegardiner (2025).
Ny skyvedørsgarderobe er installert (2025).
Ny baderomsinnredning (2025).
Oppgradert vaskerom med ny innredning og vask (2025).
Hagen er inngjerdet med spile gjerdet i treverk og port (2025).
Tomteforhold
Tomtetype
Eiet
Tomteareal
Tomtestørrelse 439.8 m²
Beskrivelse av tomten
Seksjonen har egen tomt med hage og beplantning på 439,80m². Felles eiet tomt på 1063m²
tilhørende sameiet. Fellesarealene er pent opparbeidet med asfaltert adkomstvei,
grøntområder og beplantning, samt en lekeplass med huskestativ.
13

--- Side 14 ---

Økonomi
Pris
Prisantydning Kr 6 200 000,‑
Omkostninger Kr 156 090,‑
Totalpris inkl. omk. Kr 6 356 090,‑
Kjøpsomkostninger
Omkostninger:
Kr 155 000 Dokumentavgift til staten, 2,5%
Kr 545 Tinglysing av skjøte
Kr 545 Tinglysing av pantedokument (per stk.)
Kr 156 090 Sum omkostninger
Kr 12 500 Boligkjøperforsikring (valgfritt)
Kr 168 590 Sum omkostninger inkl. boligkjøperforsikring
Dokumentavgiftens størrelse forutsetter at eiendommen kjøper til prisantydning.
Det tas forbehold om endringer i offentlige gebyrer, satser etc.
Andel felleskostnader
Kr 776,‑ per måned i følge opplysninger innhentet fra forretningsfører.
Felleskostnader inkluderer
Felleskostnader: kr 167,‑ per måned
Beløpet er basert på en halvårlig kontingent på kr 1 000,‑. Dette dekker:
‑ Snørydding og strøing av sameiets private vei
‑ Strøm til fellesarealer
‑ Drift og vedlikehold av pumpekum og lekeplass
‑ Forsikring for pumpeanlegg og styreansvar
TV og internett: kr 609,‑ per måned
‑ Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har
bindingstid i 3 år fra 1. desember 2024.
Vær oppmerksom på at felleskostnadene og avgiften for TV/ internett faktureres forskuddsvis to
ganger i året (januar og juni), og ikke månedlig. Halvårlig beløp er kr 3 654 for TV/ Internett, og kr
1 000 for felleskostnader. Sameiet har ingen fellesgjeld, og styret har vurdert at det ikke er
behov for å øke felleskostnadene for 2026.
Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre
samt andre kostnader som ikke dekkes av felleskostnadene. Sameiet har ikke felles
bygningsforsikring.
Lånebetingelser fellesgjeld:
Sameiet har ingen lån registrert.
Andel Fellesformue
Kr 4 281 datert 31.12.2025.
14

--- Side 15 ---

Kommunale avgifter
Kommunale avgifter: Kr 16 243 pr 2025
De kommunale avgiftene inkluderer renovasjon, feiing, vann‑ og avløpsavgifter. Den totale årlige
kostnaden vil variere etter eget forbruk. Dersom det er installert vannmåler, så vil estimert
forbruk variere fra kommune til kommune, i gjennomsnitt ca. 50m³ pr. person i vannforbruk.
Avgiften er en kombinasjon av forskuddsbetaling for tjenester, abonnement og enkeltgebyrer
som faktureres etter levert tjeneste. Først når året er omme vil kommunen ha informasjon om
samlet gebyr for denne eiendommen.
Fakturert i 2025:
Avløp: 5 815,60 kr
Feiing: 526,40 kr
Renovasjon: 5 441,00 kr
Vann: 4 460,00 kr
Sum: 16 243 kr
Eiendomsskatt
Kr 5 075 pr 2025
I kommunen som eiendommen ligger, er det innført eiendomsskatt på boliger og annen fast
eiendom. Eiendomsskatten utgjør 1,8 promille av eiendomsskattegrunnlaget minus
bunnfradraget. Bunnfradraget for 2026 er på inntil 415 000 kroner. Se kommunens nettsider for
mer informasjon.
Formuesverdi
Formuesverdi primær: Kr 1 081 274 for år 2024
Formuesverdi sekundær: Kr 4 325 097 for år 2024
Formuesverdien er oppgitt av Skatteetaten.
Ligningsverdien for primærboliger utgjør 25% av markedsverdi. Ligningsverdien for
sekundærboliger utgjør 100% av markedsverdi. For nærmere info, se www.skatteetaten.no.
Videre informeres det om at formuesverdien som er oppgitt antageligvis er noe lav. Det må
påregnes at denne vil øke ved et eierskifte.
Polisenummer
SP4876777
Forsikringsselskap
If skadeforsikring
Eiendommen
Eierform
Eierseksjon
Ferdigattest/ brukstillatelse
Det er utstedt ferdigattest den 01.11.2016 for 8 tomannsboliger og enebolig. At slike tillatelser/
attester eksisterer gir ingen garanti for at det ikke senere er utført arbeider som ikke er
byggemeldt/ godkjent.
Det foreligger godkjente byggetegninger datert 17.01.2013. Det er ikke fullstendig samsvar
mellom godkjente byggetegninger og dagens bruk.
15

--- Side 16 ---

Boligens planløsning i 2. etasje er speilvendt opp mot dagens løsning. Det kan se ut til at
trappen i dagens løsning går opp motsatt fra hva byggetegningene viser. Endringen har
antageligvis skjedd ifm. oppføring av boligen, hvor utbygger ikke har sendt inn revideringen til
kommunen.
På vestsiden av boligen er det satt inn dør (på det soverommet) som går ut. Dette i tillegg til
vinduet på soverommet. Videre er det på østsiden satt inn garasjeport mot opprinnelig carport.
Disse endringene er ikke en del av fasadetegningene, og endringer på fasade er
søknadspliktige tiltak. Det er ukjent når endringen på vestfasaden ble utført. Selger opplyser om
at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017.
Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og
fasadeendringene er ikke godkjent hos kommunen.
Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere
eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende
utvendig trapp.
Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.
Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt
byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra
kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann og avløp. Alle eiendommer som er tilknyttet offentlig
vann og avløp har private stikkledninger, som vedlikeholdes for eiers egen regning. For
ytterligere opplysninger om de private stikkledningene, ta kontakt med kommunen. Sameiet har
felles pumpekum. Den private veien som eiendommen er tilknyttet vedlikeholdes av brukerne.
Reguleringsplan
Eiendommen er regulert til frittliggende småhusbebyggelse med et areal på 1952 m² (feltnavn
B5). Videre er 564 m² regulert til lekeplass (feltnavn f_F3) og 245 m² til felles avkjørsel (feltnavn
FV4). Dette følger av reguleringsplan "Del av gbnr 96/ 14 med adkomstveg, og
reguleringsendring for del av gbnr 96/ 43" (plan‑ID 023711400), vedtatt 27.04.1998.
Eiendommen omfattes også av reguleringsplan "Eiendommene 96/ 264 og 36 m.fl., med
adkomstveger, Bekkedalshøgda" (plan‑ID 023709000), vedtatt 15.02.1993. I denne planen er 5552
m² av eiendommen regulert til frittliggende småhusbebyggelse (feltnavn B4) og 167 m² til felles
avkjørsel (feltnavn FV4).
Eiendommen omfattes av Kommuneplanens arealdel for 2021‑2031 (plan‑ID 0237202001), vedtatt
13.04.2021. I kommuneplanen er totalt 8487 m² av eiendommen avsatt til nåværende
boligbebyggelse, og 67 m² er avsatt til LNRF areal for nødvendige tiltak for landbruk og reindrift
og gårdstilknyttet næringsvirksomhet basert på gårdens ressursgrunnlag.
Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann. I kommuneplanens
bestemmelser § 29 står det:
Sikringssonen omfatter drikkevannskildene Hurdalssjøen, Tisjøen, Rødtjern og Damtjern med
nedslagsfelt. Forurensning direkte i drikkevann/ bygge‑ og anleggsvirksomhet, lagring og andre
tiltak på land som kan medføre skadelig avrenning og forurensning i drikkevann ‑ er forbudt.
Alle tiltak som kan få konsekvenser for drikkevannskvaliteten innenfor Hurdalssjøen og Tisjøen
hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning
16

--- Side 17 ---

på vannkvalitet både under utførelse og etter tiltaket er ferdig. Det er krav til at tiltaket ikke
medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå
drikkevannskvalitet.
Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/ 22 ‑ Bekkedal. Denne
ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for
utbygging av boliger. Reguleringsplanen har id 303531800. Det er usikkert når en utbygging vil
skje, og hvor veien skal gå. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye
boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på
den eksisterende veien gjennom sameiet. For mer info se
https://arealplaner.no/eidsvoll3240/arealplaner/343?term=303531800. Det oppfores til å ta
kontakt med kommunen for ytterligere opplysninger.
Videre opplyses det at gnr. 96/1 ligger i kommuneplanen for boligbebyggelse.
Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige
tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.
Området er stadig under endring/ utvikling, bygg settes opp, rehabiliteres og rives ned. Vi
anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser. Kopi av
situasjonskart, målebrev, reguleringsplaner m/ bestemmelser etc. ligger vedlagt i salgsoppgaven
eller kan fås ved henvendelse til megler. Vi oppfordrer interessenter til å gjøre seg kjent med
disse.
Radonmåling
Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon
vedrørende radon se www.dsa.no.Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle
utbedringstiltak som senere må igangsettes og betales.
Heftelser
Følgende tinglyste heftelser følger eiendommen ved salg, og ved inngivelse av bud vil disse
være akseptert av budgiver/ kjøper:
2015/ 590447‑2/ 200 30.06.2015 BEST. OM ADKOMSTRETT
RETTIGHETSHAVER: KNR: 3240 GNR: 96 BNR: 609
RETTIGHETSHAVER: KNR: 3240 GNR: 96 BNR: 614
Bestemmelse om lekeplass
Bestemmelse om renovasjon
GJELDER DENNE REGISTERENHETEN MED FLERE
Sameiet "Bekkedalshøgda" (gnr. 96, bnr. 615) har bruksrett til fellesareal på eiendommene gnr. 96,
bnr. 609 og gnr. 96, bnr. 614. Fellesarealet er avsatt til adkomstvei, lekeplass og renovasjon, som
vist på situasjonskartet.
2015/ 590447‑1/ 200 30.06.2015 SEKSJONERING
Opprettet seksjoner:
SNR: 10
Formål: Bolig
Tilleggsdel: Carport og tilhørende bod.
Sameiebrøk: 126/ 2152
Selger bærer risikoen for at kjøper kan få tinglyst skjøte uten andre heftelser enn de som det er
avtalt at følger med i handelen. Gjennomføring av handelen er betinget av det ikke er tinglyst
heftelser som ikke lar seg innfri/ slette.
Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige
17

--- Side 18 ---

tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel
skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke
oppnås vil handel ikke kunne gjennomføres. Skulle det bli tinglyst flere utleggspant på
eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer
aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet.
Legalpant
Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt
panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil
2 G (folketrygdens grunnbeløp). Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan,
opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye
tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse.
TV/ Internett/ Bredbånd
Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen.
Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget. Det betales kr 3 654
to ganger i året.
Sameie
Sameiet Bekkedalshøgda
Om sameiet
Sameiet Bekkedalshøgda er et eierseksjonssameie bestående av 16 boligseksjoner. Sameiet har
ikke fellesgjeld.
Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret
har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal
fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for
seksjonseierne, med unntak av fremtidig vedlikehold.
Det er begrensninger på eierskap i sameiet. Kun fysiske personer kan kjøpe, og ingen kan eie
mer enn to boligseksjoner. For utleie gjelder at korttidsutleie (under 30 dager
sammenhengende) av hele boligen er begrenset til maksimalt 90 dager per år.
Alle utvendige bygningsmessige endringer, som for eksempel oppsetting av markiser, endring
av fasadefarge eller utskifting av vinduer og dører, må meldes til og godkjennes av styret. Større
tiltak som tilbygg krever også styregodkjenning før byggesøknad sendes til kommunen.
Parkering skal skje på den enkelte seksjons private parkeringsplass. Kortvarig parkering langs
veien er kun tillatt dersom det ikke er til hinder for fremkommelighet for utrykningskjøretøy,
renovasjon og andre beboere. Sameiet har avtaler for brøyting og strøing av felles adkomstvei.
Styreleder informerer på mail at det er enkelte seksjonseiere som har fått pålegg fra kommunen
om tilbakeslagssikring, dette omhandlet blant annet denne seksjonen. Dette har selger ordnet
iht. pålegg.
Organisasjonsnummer
925258296
Eierbrøk
126/ 2152
18

--- Side 19 ---

Forretningsfører
Sameiet Bekkedalshøgda
Styregodkjennelse
Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e‑postadresse til
kjøper må meldes til styret innen 14 dager etter overtakelse, jf vedtektene paragraf 9.
Vedtekter/ husordensregler
Eier forplikter seg til å gjøre seg kjent med vedtekter og eventuelle husordensregler. Kopi av
disse ligger vedlagt i salgsoppgaven.
Dyrehold
Det er tillatt med dyr.
Energi
Oppvarming
Elektrisk oppvarming med varmepumpe i stue, samt varmekabler i gang, på bad og vaskerom.
Det er i tillegg montert ildsted i stuen.
Dersom beboelsesrom ikke har vegg‑ eller fastmonterte varmekilder ved visning følger dette
heller ikke med.
Strømforbruk
Boligen er tilknyttet strømavtalen Norgespris, en fastprisavtale vedtatt av Stortinget som trer i
kraft fra 1. oktober 2025.
Avtalen følger målepunktet (strømmåleren) i boligen, og overtas automatisk av ny eier eller
leietaker ved eierskifte.
Bindingstid:
Gjelder ut 2026 dersom avtalen er inngått mellom 1. oktober 2025 og 31. desember 2026.Ved
avtaleinngåelse fra 2027 og videre gjelder bindingstiden ut kalenderåret fra
bestillingstidspunktet.
Ny eier må være innforstått med at boligen har en aktiv Norgespris‑avtale, og at denne
videreføres i henhold til gjeldende vilkår.
Energimerking
Energifarge Oransje og bokstav B.
Energiklasse
Denne boligen er energimerket. På en skala fra A til G, der A er best, har denne boligen
oppnådd oransje B (standardboliger ligger vanligvis i området C‑F). Energiattesten ligger
vedlagt i salgsoppgaven.
Utleie
Adgang til utleie
Sameiet har ingen begrensninger i forhold til utleie. Dog må styret varsles. Korttidsutleie av hele
boligseksjonen i mer enn 90 døgn årlig er ikke tillatt. Med korttidsutleie menes utleie i inntil 30
døgn sammenhengende.
19

--- Side 20 ---

Takst og tilstand
Bygningssakkyndig
Stian Berger Larsen
stian@protakstservice.no
976 06 007
Type takst
Tilstandsrapport. Befaringsdato 15.01.2026
Sammendrag selgers egenerklæring
Selger har i forbindelse med salget fylt ut egenerklæringsskjema som vedlagt salgsoppgaven. I
skjemaet fremkommer følgende informasjon:
Vet du om det er gjort arbeid på bad eller våtrom, enten av deg eller tidligere eiere?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Vaskerom i 1. etasje Det er installert utslagsvask med tilhørende
avløpsrør, nytt opplegg for vaskemaskin, samt montert tilbakeslagsventil og ekspansjonskar i
henhold til gjeldende forskrifter. Kommunen installerte ny vannmåler i 2025.
Ufaglært arbeid:
Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Bad i 1. etasje Det er byttet baderomsinnredning, inkludert tre høyskap
med 2 dører og speil innvendig , servantskap med to skuffer, vask og blandebatteri. Det er også
montert speilskap med lys. 1. etg. Vaskeromsinnredning
Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?
Nei, ikke som jeg kjenner til
Vet du om det er utført arbeid på garasje eller øvrige tilleggsbygninger, av enten deg eller
tidligere eiere?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2017
Firmanavn: Monter AS,
Beskrivelse av arbeidet: Opplysning om tidligere utførte tiltak (til orientering) Tidligere eier har
opplyst at selger ved deres kjøp informerte om at det var montert elektrisk port i carporten for
å gjøre den om til garasje, og at dette arbeidet ble utført av snekker fra Monter AS. Det ble
samtidig opplyst at de ikke kjenner til om det ble søkt om bruksendring fra carport til garasje.
Ufaglært arbeid:
1. Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Det er montert "spile"‑ gjerde i tre materialer med port i hagen på
baksiden av huset. All eksisterende platting, terrasser, rekkverk, bjelker/ spilevegg pergola og
trapp er "vasket/ renset" og beiset to ganger med Tyrilin sommer 2025.
2. Hvilket år ble jobben fullført?: 2017
Beskrivelse av arbeidet: Opplysninger fra tidligere eier (til orientering) Tidligere eier opplyste at
de som solgte de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod
under den eksisterende utvendige trappen mot hagen.
Vet du om det er gjort arbeid på vann og avløp, enten av deg eller tidligere eiere?
Ja.
Faglært arbeid:
20

--- Side 21 ---

1. Hvilket år ble jobben fullført?: 2022
Firmanavn: Waterstop AS
Beskrivelse av arbeidet: Tidligere eier opplyser at ventil er byttet til Waterstop.
2. Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Byttet til ett greps blandebatteri på kjøkken‑ rør i rør system. Se pkt.
Våtrom, tak og fasade vedr. vaskerom
Vet du om eiendommen har privat vannforsyning, vannbrønn, septiktank, pumpekum,
avløpskvern eller lignende?
Ja.
Har du opplevd at dette har vært ustabilt?
Nei, ikke som jeg kjenner til
Vet du om det er, eller har vært, feil eller skader knyttet til sentralfyr, radiator, ventilasjon,
varmepumpe, kjøkkenvifte, baderomsvifte eller andre installasjoner?
Ja.
Tidligere eier har opplyst i egenerklæring at dersom det ligger mye snø på taket ( dvs. over
ventilhatt til kjøkkenvifte) kan det renne litt vann ned i ventilatorrøret. Løsning er å fjerne snø
rundt ventilatorhatt eller sette vifte på max, blåser ut vannet. Det er ikke avdekket følgeskader
av dette. Jeg har eid boligen gjennom 2 vintre og opplevd en liten "vanndam" på komfyrtopp (
ca 5 x 5 cm). Ingen følgeskader. I min eietid har jeg tilbragt mye tid i boligen med oppsussing og
kun opplevd dette en gang.
Er det gjort tiltak, eller er feilen/ skaden utbedret?
Nei, ikke som jeg kjenner til
Vet du om det er gjort arbeid på sentralfyr, radiator, ventilasjon, varmepumpe eller andre
installasjoner, enten av deg eller tidligere eiere?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2022
Firmanavn: RE Varmepumpe AS
Beskrivelse av arbeidet: Ordinær service på varmepumpe
Ufaglært arbeid:
Hvilket år ble jobben fullført?: 2024
Beskrivelse av arbeidet: Byttet Flexit filter på ventilasjonsanlegg.
Vet du om det er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av
fikk satt opp utvendige lykter på tomten.
Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
Ja.
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår,
enten av deg eller tidligere eiere?
Ja.
21

--- Side 22 ---

Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at
carporten dermed ble bygget om til garasje. Det er også opplyst at en tidligere eier har
oppført en pergola i hagen på ca. 9 m², samt bygget en vedbod under den utvendige trappen
mot hagen. Stor asfaltert parkeringsplass på egen tomt med kantstein og hekk.
Det er gjennomført betydelig oppgradering / oppussing i 2025.
Utvendig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2 strøk.
Terrasse/ platting/ utetrapp i 1. etasje beiset i 2 strøk.
Treverk på pergola beiset i 2 strøk.
Inngjerdet hage etablert med spilegjerde i treverk og port.
Rundstein i ulike størrelser i bed mot gjerde/ hekk.
Satt opp rikelig med hyller og kroker i utebod tilknyttet garasje.
Innvendig (2025)
Nye gulv: én#stavs laminat/ parkett og eikelister i alle rom (unntatt rom med fliser som er fra
byggeår).
Vegger malt / kalkmalt og tapetsert i alle rom.
Stikkontakter spraymalt i matchende farge tilpasset de ulike rommene.
Nye sorte dørhåndtak på hvitmalte innerdører.
Gerikter rundt dører sparklet og malt.
Ny skyvedørsgarderobe med speil er installert.
Nye lameller og plissegardiner montert, hvorav én lystett plissegardin på soverom i 1. etasje.
Trapp og rekkverk malt i 2 strøk, samt nye teppefliser lagt.
Montert ny ringeklokke.
Kjøkken (2025)
Herdet glass med steinmotiv montert mellom benkeplate og overskap.
Tre overskap med farget, herdet glass montert.
Nytt ettgreps blandebatteri.
Bad (2025)
Nytt servantskap/ innredning med vask og speilskap med lys.
Tre nye høyskap (160 × 40 cm) med to dører og innvendig speil.
Nytt blandebatteri til vask/ innredning.
Ny "dorullholder".
Vaskerom ( 2025 )
Ny innredning
Ny utslagsvask med ett greps blandebatteri
Nytt opplegg for vaskemaskin
Innstallert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter ( 2026 ).
Er tiltaket godkjent av kommunen?
Nei, ikke som jeg kjenner til
Har boligen garasje eller øvrige tilleggsbygninger?
Ja.
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
Nei, ikke som jeg kjenner til
Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
Ja.
Faglært arbeid:
Hvilket år ble jobben fullført?: 2025
Firmanavn: Bygg & Malerexpert AS, Glass Service AS, Norges Markiser ASEidsvoll Rør AS
Beskrivelse av arbeidet: Se oversikt pkt. 26.
Ufaglært arbeid:
22

--- Side 23 ---

Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Se oversikt pkt. 26.
Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen?
Ja.
Opplysning om koketopp (til orientering). Tidligere eier opplyste i sin egenerklæring at
koketoppen i noen tilfeller kunne slå seg av ved svært høy samtidig belastning. Dette ble
beskrevet som situasjonsbetinget og kunne forebygges ved å sørge for god varmeavledning,
for eksempel ved å holde skuffen under delvis åpen. Dersom den koblet ut, lot den seg enkelt
starte opp igjen ved å slå automatsikringen av og på. Jeg har ikke opplevd dette ved bruk i min
eiertid.
Er det gjort tiltak, eller er feilen/ skaden utbedret?
Nei, ikke som jeg kjenner til
Er det bestilt Norgespris på strøm?
Ja.
Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr.
kilowattime (prisen gjelder frem til 31. Desember 2026). Ordningen gjelder både boliger og
fritidsboliger. Når en bolig med Norgespris bytter eier, vil ny eier fortsatt være bundet til
Norgespris ut bindingstiden. Les mer på Regjeringens nettsider.
Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
Ja.
Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/ Altibox (frivillig tilvalg) til en
månedlig kostnad på kr 609,‑ per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for
denne tjenesten. I tillegg faktureres det felleskostnader på kr 1 000,‑ per halvår til hver
seksjonseier. Dette dekker vedlikehold av fellesarealer og øvrige fellesutgifter. Ved feietilsyn må
eier stille stige til disposisjon. Da enten ved å låne av nabo eller kjøpe inn selv.
Eier
Eier
Laila Irene Hollstedt
Vilkår og bestemmelser
Budgivning
Forbrukerinformasjon om budgivning er vedlagt salgsoppgaven. Megler kan ikke formidle bud
med kortere akseptfrist enn klokken 12:00 første virkedag etter siste annonserte visning, dersom
selger er forbruker. Det kan hende at fristene for å akseptere bud blir kortere etter hvert som
det kommer inn nye bud. Det er budgiver som setter fristen for når et bud må være akseptert
og denne fristen er absolutt. Det betyr at selger må akseptere budet og kjøper må ha mottatt
aksepten innen fristens utløp. Dersom du legger inn bud tett opp mot akseptfristen, er det en
reell fare for at eiendommen blir solgt før budet når frem til megler. Husk å ringe til megler etter
du har sendt et bud eller budforhøyelse, for å forsikre deg om at budet er mottatt av megler.
Megler tar ikke ansvar for forsinkelser på el‑ eller telenettet, eller andre tekniske feil.
Alle bud og budforhøyelser med eventuelle forbehold, opplysning om finansiering og ønsket
overtakelse, skal sendes skriftlig til megler.
Megler kan ikke formidle bud med forbehold om at budet eller forbehold i budet (hemmelige
bud og/ eller hemmelige forbehold) skal holdes skjult for andre budgivere og interessenter.
Megler skal sende skriftlig varsel om bud og budforhøyelser, som kan formidles, til budgiver,
23

--- Side 24 ---

selger og interessenter. Når et bud aksepteres, skal megler sende skriftlig beskjed om det til
både budgiver og selger.
Megler skal kontrollere budgivers finansiering før handel inngås. Dersom slik kontroll ikke lar seg
gjennomføre, skal selger motta skriftlig informasjon om dette, og mulige konsekvenser. Dersom
megler ikke får kontrollert budgivers finansiering, kan det derfor medføre at en annen budgiver ‑
også en med lavere bud ‑ anbefales overfor selger.
For å legge inn bud kan du enkelt legge inn bud via EiendomsMegler 1s «gi bud»‑knapp i
nettannonsen, eller benytte budskjema, elektronisk budgivning, skannet budskjema sendt på
e‑post eller annen godkjent skriftlig metode.
Skal du legge inn bud må du legitimere deg med kopi av legitimasjon og signatur. Kravet til
legitimasjon og signatur er oppfylt dersom budgiver benytter e‑signatur, for eksempel BankID.
Ta en prat med megler om hvordan du legger inn bud.
Lovanvendelse
Eiendommen selges etter reglene i avhendingsloven.
Salgsoppgaven er basert på de opplysningene selger har gitt til bygningssakkyndig og megler,
samt opplysninger innhentet fra kommunen, Statens kartverk og andre tilgjengelige kilder.
Eiendommen skal overleveres kjøper i tråd med det som er avtalt. Det er viktig at kjøper setter
seg grundig inn i alle salgsdokumentene, herunder salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses kjent med forhold som er tydelig beskrevet i salgsdokumentene.
Forhold som er beskrevet i salgsdokumentene kan ikke påberopes som mangler. Dette gjelder
uavhengig av om kjøper har lest dokumentene. Alle interessenter oppfordres til å undersøke
eiendommen nøye, gjerne sammen med fagkyndig før bud inngis. Kjøper som velger å kjøpe
usett kan ikke gjøre gjeldende som mangel noe han burde blitt kjent med ved undersøkelsen.
Dersom det er behov for avklaringer, anbefaler vi at kjøper rådfører seg med eiendomsmegler
eller en bygningssakyndig før det legges inn bud.
Dersom kjøper ikke er forbruker selges eiendommen «som den er», og selgers ansvar er da
begrenset jf.avhendingsloven § 3‑9 1. ledd 2. pkt. Informasjon om kjøpers undersøkelsesplikt,
herunder oppfordringen om å undersøke eiendommen nøye, gjelder også for kjøpere som ikke
anses som forbrukere.
På grunn av ulike avtalevilkår kan selger vurdere bud fra en som ikke er forbruker, ulikt fra en
forbrukers bud. Dersom kjøper ikke er forbruker, er selger sitt mulige mangelsansvar begrenset
fordi eiendommen selges "som den er". Selger kan ikke ta «som den er» forbehold ovenfor en
forbrukerkjøper. Selv et lavere bud fra en som ikke er forbruker kan foretrekkes fordi
begrensningen i mulig mangelsansvar kan ha egenverdi for selger. Selger står fritt til å forkaste
eller akseptere ethvert bud, og er for eksempel ikke forpliktet til å akseptere høyeste bud.
Budgivere får informasjon dersom andre bud er inngitt av en som ikke er forbruker.
Forbrukerkjøp ‑ definisjon
Med forbrukerkjøp menes kjøp av eiendom når kjøperen er en fysisk person som ikke
hovedsakelig handler som ledd i næringsvirksomhet.
Forbruker ‑ avtalevilkår
Eiendommen har en mangel dersom den ikke er i samsvar med kravene som følger av avtalen,
eller det foreligger brudd på bestemmelsene i avhendingsloven §§ 3‑2 til 3‑8. Hvis eiendommen
ikke er i samsvar med det kjøperen må kunne forvente ut ifra alder, type og synlig tilstand, kan
24

--- Side 25 ---

det være grunnlag for mangelskrav. Det samme gjelder hvis det er holdt tilbake eller gitt uriktige
opplysninger om eiendommen. Dette gjelder likevel bare dersom man kan gå ut ifra at det virket
inn på avtalen at opplysningen ikke ble gitt eller at uriktige opplysninger ikke blir rettet i tide på
en tydelig måte.
En bolig som har blitt brukt i en viss tid, har vanligvis blitt utsatt for slitasje og skader kan ha
oppstått. Slik bruksslitasje må kjøper regne med, og det kan avdekkes enkelte forhold etter
overtakelse som nødvendiggjør utbedringer. Normal slitasje og skader som nødvendiggjør
utbedring, er innenfor hva kjøper må forvente og vil ikke utgjøre en mangel.
Boligen kan ha en mangel etter avhendingsloven § 3‑3 dersom det er avvik mellom opplyst og
faktisk innvendig areal, forutsatt at avviket er på 2% eller mer og minimum 1 kvm.
Ved beregning av et eventuelt prisavslag eller erstatning må kjøper selv dekke tap/ kostnader
opptil et beløp på kr 10 000 (egenandel).
Ikke‑forbruker (næringsdrivende) ‑ definisjon
Dersom kjøper er en juridisk person, eller en fysisk person som hovedsakelig handler som ledd i
næringsvirksomhet, vil kjøpet ikke anses som et forbrukerkjøp.
Ikke‑forbruker ‑ avtalevilkår
Eiendommen har en mangel dersom den ikke er i samsvar med kravene som følger av avtalen.
Eiendommen selges «som den er», og selgers ansvar utover det konkret avtalte er da begrenset
etter avhendingsloven § 3‑9, første ledd andre setning.
Avhendingsloven § 3‑3 andre ledd fravikes, og hvorvidt boligens arealsvikt utgjør en mangel
vurderes etter avhendingsloven § 3‑8.
En forutsetning for salget er at skjøtet for eiendommen tinglyses på kjøper. Interessenter og
kjøper må godta at selger og megler bruker elektronisk kommunikasjon i salgsprosessen.
I tråd med eiendomsmeglingsforskriften vil informasjon om oppdragsgiver, salgsobjektet,
interessenter og kjøper bli lagret av meglerforetaket i min. 10 år. Se em1.no for mer informasjon
om vår behandling av personopplysninger.
Betalingsbetingelser
Kjøpesum og alle omkostninger skal være innbetalt fra kjøpers konto i norsk finansinstitusjon til
meglerforetakets klientkonto før overtakelse. Det forutsettes at skjøte tinglyses på ny eier.
Dersom kjøper ikke ønsker tinglysing av skjøtet med overføring av hjemmel til seg, må det tas
forbehold om dette i bud. Ved forsinket betaling påløper forsinkelsesrenter av hele
kjøpesummen frem til betaling skjer, selv om deler av kjøpesummen er gjort opp til rett tid.
Hvitvaskingsregler
Eiendomsmeglere er underlagt lov om hvitvasking og er forpliktet til å rapportere til Økokrim
om mistenkelige transaksjoner. Meglerforetaket har blant annet plikt til å gjennomføre
kundetiltak. Dersom kundetiltak ikke kan gjennomføres, skal meglerforetaket ikke etablere
kundeforholdet eller gjennomføre transaksjonen med kjøper. Ved meglerforetakets avvikling av
kundeforholdet, vil avtalen mellom partene være bindende, men meglerforetaket kan ikke bidra i
gjennomføringen av handelen. Det kan ikke gjøres ansvar gjeldende mot meglerforetaket som
følge av at meglerforetaket overholder sine plikter etter hvitvaskingsloven. Det oppfordres til at
alle inn‑og utbetalinger skjer via norske banker. Det gjøres oppmerksom på at meglerforetaket
vil be om å få opplyst disponenter til konti som benyttes i oppgjøret.
Personopplysningsloven
25

--- Side 26 ---

Iht. personopplysningsloven vil vi behandle interessenter og kjøpers personopplysninger, i den
utstrekning dette er nødvendig for å oppfylle våre lovpålagte forpliktelser, herunder for å kunne
foreta kundekontroll etter hvitvaskingsloven samt for å utføre oppgaver som vi er pålagt etter
eiendomsmeglingsloven. For å bidra til effektive og sikre transaksjoner, er det nødvendig at
eiendomsmeglingsforetakene og finansieringsforetakene raskt kan utveksle opplysninger,
herunder personopplysninger, av betydning for transaksjonen. For dette formålet er det utviklet
en løsning som gjør at kjøpers og selgers finansieringsforbindelse vil kunne hente ut
kjøpekontrakten og strukturerte data fra denne (navn, kjøpesum, overtakelsesdato o.l.) gjennom
Altinn. Ved bruk av elektronisk tinglysing vil personopplysninger utveksles med Ambita og
Kartverket.
Vedlegg
Tilstandsrapport, datert 22.01.26
Selgers egenerklæring, datert 01.02.2026
Kommunal info, datert 22.01.26
Ferdigattest
Byggetegninger
Informasjon fra forretningsfører
Vedtekter
Energiattest
Diverse
Diverse
Noe tekst, bildetekst og sammenstilling av informasjon i dette oppdraget er laget ved hjelp av
AI, og kvalitetssikret av ansvarlig megler.
Selger har ikke bebodd eiendommen, og er derfor ikke er kjent med feil eller mangler utover
det som fremkommer av salgsmaterialet . Siden selgers kunnskap om eiendommen er
begrenset, oppfordres interessenter og budgivere til å foreta en særlig grundig undersøkelse
av eiendommen.
Det informeres om at taklampene i 2. etasje og i trapperom ikke medfølger boligen ved salg.
Det informeres om at kveldsbildene er hentet fra forrige salg, og det vil forekomme avvik.
Boligselgerforsikring
Selgeren har kjøpt boligselgerforsikring hos Fremtind. Forsikringen dekker selgerens
økonomiske ansvar hvis kjøper oppdager feil eller mangler som omfattes av avhendingsloven.
Forsikringen gjelder fra kjøpers overtagelse av eiendommen og varer i fem år. I tillegg dekker
forsikringen perioden mellom budaksept og overtagelse begrenset til 12 måneder.
Forsikringsdekningen er begrenset til salgssum, maksimalt 14 millioner kroner. For
kombinasjonseiendommer gjelder forsikringen kun for boligdelen.
Boligkjøperforsikring
Kjøper har anledning til å tegne boligkjøperforsikring. Boligkjøperforsikring er en
rettshjelpsforsikring som dekker utgifter forbundet med juridisk bistand, fagkyndig uttalelse og
saksomkostninger. Forsikringen er valgfri og kr 12 500.
Forsikringen er meglet frem av Söderberg & Partners og er plassert hos Gar‑Bo Försäkring AB.
Skadebehandlingsselskapet er Crawford & Company
Kjøper logger selv inn i portalen til Söderberg & Partners og bekrefter at de ønsker å inngå et
26

--- Side 27 ---

forsikringsmeglingsoppdrag og dermed få mulighet til å tegne boligkjøperforsikring. For at
anmodningen om kjøp av forsikring skal imøtekommes og portalen kunne benyttes, utleverer
meglerforetaket informasjon om kjøperne til Söderberg & Partners, så snart bud er akseptert.
Søderberg & Partners sletter opplysningene som innhentes når tidspunktet for kontraktsmøtet
har passert og det er klart at kjøper ikke velger å tegne Boligkjøperforsikring. For de kjøperne
som tegner forsikring, vil opplysningene lagres av Söderberg & Partners for ulike formål med
ulike lagringstid i tråd med beskrivelsen i personvernerklæringen: https:/ /
www.soderbergpartners.no/ personopplysninger‑og‑informasjonskapsler/
Les mer om forsikringen i vedlagte materiell eller på https:/ / eiendom.soderbergpartners.no/
Det gjøres oppmerksom på at meglerforetaket mottar kr 6 856 i honorar for hver
forsikringsavtale som formidles for seksjonert eiendom/ aksjebolig. Boligkjøperforsikring kan kun
tegnes av privatpersoner som kjøper bolig til eget formål, og gjelder ikke for foretak.
Hvitevarer
Det gjøres oppmerksom på at det kun er de integrerte hvitevarene på kjøkkenet som
medfølger i kjøpet. Hvitevarene leveres uten noen form for garantier, utover eventuelle
gjenværende leverandørgaranti.
Overtakelse
Overtakelse
Etter nærmere avtale med selger. Vær vennlig å angi ønsket overtagelsesdato i vedlagte
budskjema.
Visning
Visningsinformasjon
Velkommen til hyggelig visning!
Alle våre visninger har påmelding. På denne måten sikrer vi at megler har god oversikt og tid til
å imøtekomme alle interessenter. Meld deg på visning ved å trykke på lenken
visningspåmelding. Passer ikke tidspunktet, ta kontakt med megler og avtal tid for privatvisning.
27

--- Side 28 ---

Meglers vederlag og utlegg
Meglers vederlag (betales av selger)
Det er mellom selger og meglerforetaket inngått avtale om kr 45 000 i fastpris, innhenting
kommunale opplysninger fra kr 4 500, forretningsfører fra kr 5 000, oppgjørshonorar kr 9 900,
registersøk/ screening kr 1950, tilretteleggingsgebyr kr 17 900, markedspakke kr 22 900, honorar
for visning/ overtakelse kr 3 500, servitutter pr. stk. kr 260, panterett med urådighet ‑ Statens
Kartverk kr 545 og tingl. hjemmelserklæring ‑ Statens Kartverk kr 545. Dersom eiendommen ikke
blir solgt skal selger betale kr 15 000 i tillegg til utlegg og faste vederlag.
EiendomsMegler 1 Østlandet AS har samarbeid med følgende foretak som tilbyr produkter eller
tjenester i forbindelse med oppdraget:
‑ Fremtind Forsikring AS, som leverer boligselgerforsikring til selger
‑ Gar‑bo Försäkring AB, som leverer boligkjøperforsikring til kjøper
‑ Vend Marketplaces AS, som eier annonseplattformen FINN.no
‑ Meglerfront, som leverer digital overtakelsesprotokoll og tilbyr partene flyttetjenester,
internett og TV, brann‑ og innbruddsalarm og strømabonnement
‑ Fotograf ImageDay
‑ Fremtind Forsikring AS, som tilbyr forsikringsprodukter til kjøper i forbindelse med ny bolig
EiendomsMegler 1 Østlandet AS har tilknytning til SpareBank 1 Østlandet AS, som er eier av
meglerforetaket. SpareBank 1 Østlandet AS tilbyr finansieringstjenester til kjøpere i forbindelse
med oppdraget.
Finansiering
Verdivurdering
Vi tilbyr verdivurdering av boligen din dersom du planlegger å selge. Verdivurdering er en
beregning av eiendommens markedsverdi, basert på solid erfaring og kunnskap om
eiendomsmarkedet der du bor.
Megler
Oppdragsanvarlig
Cathrine Gundersen
eiendomsmegler
cathrine.gundersen@em1ostlandet.no
Tlf: 456 13 442
28

--- Side 29 ---

Nyttig informasjon ved kjøp av
brukt eiendom
Når du kjøper brukt eiendom er det viktig å ha riktige forventninger. Du må ha som utgangspunkt at
bruksslitasje, aldersforringelse, værpåkjenninger med videre forverrer tilstanden gradvis. Husk at alle
bygningsdeler og tekniske installasjoner har begrenset levetid. Forhold som kunne vært oppdaget på
visning, er normalt ikke en mangel.
Det er viktig at du setter deg grundig inn i alle salgsdokumentene, herunder salgsoppgave,
tilstandsrapport og selgers egenerklæring. Du anses å være kjent med forhold som er tydelig
beskrevet i salgsdokumentene. Forhold som er beskrevet i salgsdokumentene kan ikke gjøres gjeldende
som mangler. Dette gjelder uavhengig av om du har lest dokumentene eller ikke. Du oppfordres til å
undersøke eiendommen nøye. Ta gjerne med en fagkyndig på visning, før bud inngis. Kjøper du
eiendommen usett kan du ikke reklamere på forhold som du ville blitt kjent med ved visningen.
Det kan foreligge mangel dersom selger har holdt tilbake eller gitt uriktige opplysninger, og dette har
innvirket på avtalen.
Dersom du oppdager forhold du mener kan være en mangel, stiller avhendingsloven krav om at du
reklamerer snarlig og «innen rimelig tid» overfor boligselgerforsikringsselskapet/selger. Vi anbefaler at
du reklamerer umiddelbart etter at du oppdaget eller burde oppdaget mangelen.
Ta kontakt med megler eller forsikringsselskapet straks du oppdager forhold du mener kan være en
mangel.
29

--- Side 30 ---

30

--- Side 31 ---

31

--- Side 32 ---

32

--- Side 33 ---

33

--- Side 34 ---

34

--- Side 35 ---

35

--- Side 36 ---

36

--- Side 37 ---

37

--- Side 38 ---

38

--- Side 39 ---

39

--- Side 40 ---

40

--- Side 41 ---

41

--- Side 42 ---

42

--- Side 43 ---

43

--- Side 44 ---

44

--- Side 45 ---

45

--- Side 46 ---

46

--- Side 47 ---

47

--- Side 48 ---

48

--- Side 49 ---

49

--- Side 50 ---

50

--- Side 51 ---

51

--- Side 52 ---

52

--- Side 53 ---

53

--- Side 54 ---

54

--- Side 55 ---

55

--- Side 56 ---

Tilbehør og løsøre
Tilbehør og løsøre
I henhold til avhendingsloven § 3 -4 skal eiendommen overdras med innredninger og utstyr som etter lov, forskrift eller annet
offentlig vedtak skal følge med. Det samme gjelder varig innredning og utstyr som enten er fastmontert eller er særskilt tilpasset
bygningen, jf. avhendingsloven § 3- 5. Partene kan imidlertid fritt avtale hva som skal følge med eiendommen ved salg.
VEILEDENDE LISTE OVER HVA SOM FØLGER EIENDOMMEN
Dersom ikke annet er avtalt eller fremgår av salgsoppgaven.
1. HVITEVARER medfølger der dette er spesielt angitt i salgs- 13. UTVENDIGE SØPPELKASSER og eventuelt holder/hus til
oppgaven. disse medfølger.
2. HELDEKKENDE TEPPER følger med uansett festemåte. 14. POSTKASSE medfølger.
3. VARMEKILDER, slik som ovner, kaminer, peiser, varmepumper 15. UTENDØRS INNRETNINGER slik som flaggstang, fastmontert
og panelovner, følger med uansett festemåte. Frittstående tørkestativ, samt andre faste utearrangementer som f.eks. ba-
biopeiser/varmeovner og terrassevarmere medfølger ikke. destamp, boblekar/jacuzzi og liknende utendørs kar, lekestue,
Det følger ikke med varmekilder i rom som ikke har vegg- lekestativ, utepeis, fastmontert trommel til vannslange, med-
eller fastmonterte varmekilder på visning. følger. Guidekabel/avgrensingskabel til robotgressklipper
medfølger, men robotgressklipper og ladestasjon for denne
4. TV, RADIO OG MUSIKKANLEGG. TV-antenner og fellesanlegg
medfølger ikke.
for TV, herunder parabolantenne, og tuneren/dekoder/
tv-boks medfølger der dette eies av selger. Veggmontert 16. FASTMONTERT VEGGLADER/LADESTASJON TIL EL-BIL
TV/flatskjerm med tilhørende festeordning samt musikk- medfølger uavhengig av hvor laderen er montert.
anlegg følger ikke med (se også punkt 12).
17. SOLCELLEANLEGG med tilhørende teknisk infrastruktur
5. BADEROMSINNREDNING/UTSTYR. Badekar, dusjkabinett, medfølger.
dusjvegger, alle fastmonterte speil og hyller, fastmonterte
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
glass- og håndkleholdere, herunder håndklevarmere samt
baderomsinnredning, medfølger. 19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger
der dette er påbudt. Løse stiger medfølger ikke.
6. GARDEROBESKAP medfølger, selv om disse er løse.
Fast monterte garderobehyller og knagger medfølger. 20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYK-
Innredning i garderobe skap, for eksempel løse eller fast- VARSLER medfølger der dette er påbudt. Det er eier og
monterte trådkurver, hyller, stenger og lignende, medfølger. brukers plikt til å se til at utstyret forefinnes på enhver
eiendom. Hvis annet ikke er uttrykkelig avtalt, skal dette
7. KJØKKENINNREDNING medfølger, herunder også åpne,
derfor alltid følge med ved salg av eiendom.
fastmonterte hyller og løs eller fastmontert kjøkkenøy.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse
8. MARKISER, PERSIENNER og annen type innvendig og
av skal overleveres kjøper på overtakelsen, herunder nøkler
utvendig solskjerming, gardinoppheng,lamellgardiner
til eventuelle boder, uthus, garasjeportåpner el. Låses boder,
og liftgardiner medfølger.
uthus el. med hengelås, skal lås og nøkler til disse medfølge.
9. AVTREKKSVIFTER av alle slag, samt fastmonterte aircondition/
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng
ventilasjonsanlegg, medfølger.
til bildekk medfølger såfremt de er fastmontert.
10. SENTRALSTØVSUGER medfølger med komplett anlegg,
herunder slange, munnstykke mm.
Planter, busker og trær som er plantet på tomten, eller fast-
11. LYSKILDER. Kupler, lysstoffarmatur, fastmonterte “spotlights”, monterte kasser og lignende er en del av eiendommen og
oppheng og skinner med spotlights samt utelys og hage- medfølger i handelen.
belysning medfølger. Vegglamper, krokhengte lamper,
lysekroner, prismelamper og lignende som er koblet til
sukkerbit eller stikkontakt følger likevel ikke med. Oversikten er utarbeidet av Norges Eiendomsmeglerforbund,
Eiendom Norge og Advokatforeningens Eiendomsmeglings-
12. INSTALLERTE SMARTHUSLØSNINGER med sentral som
gruppe, og er gjeldende fra 1. januar 2020.
styrer lys, varme, lyd o.l., samt tilhørende trådløse enheter
som brytere, sensorer, kameraer, integrerte høyttalere el.
medfølger. Enkle lysstyringssystem f.eks. med en sentral
som kun styrer lyspærer eller smartpærer montert i sokkel Oppdatert 10.12.19
medfølger likevel ikke.
56

--- Side 57 ---

GUSTAV GRANHAUGS VEG 85A
Nabolaget Amundrud/Sagmoen - vurdert av 59 lokalkjente
OPPLEVD TRYGGHET
NABOLAGET SPESIELT ANBEFALT FOR
Veldig trygt 92/100
Familier med barn
Etablerere KVALITET PÅ SKOLENE
Godt voksne
Veldig bra 83/100
NABOSKAPET
OFFENTLIG TRANSPORT
Godt vennskap 69/100
Øvre Grindaveg 8 min
Linje 432 0.8 km
ALDERSFORDELING
Eidsvoll verk stasjon 5 min
Linje RE11, R12 2.3 km
Oslo Gardermoen 20 min
SKOLER
Bønsmoen skole (1-7 kl.) 4 min
334 elever, 20 klasser 2.3 km
Eidsvoll Verk skole (1-7 kl.) 6 min
231 elever, 13 klasser 2.9 km
Råholt skole (1-7 kl.) 6 min
450 elever, 24 klasser 3.6 km
Råholt ungdomsskole (8-10 kl.) 16 min
631 elever, 29 klasser 1.5 km
Eidsvoll videregående skole 19 min
700 elever 12.6 km
Hoppensprett vgs Jessheim 21 min
LADEPUNKT FOR EL-BIL
AMFI Eidsvoll 20 min
57
% 3.61 % 9.61 % 5.41 %
6.7
%
7.7
%
2.7
% 7.12 % 3.02 % 2.12
% 04 % 6.04 % 9.83
% 4.41 % 5.41 % 3.81
Barn Ungdom Unge voksne Voksne Eldre
(0-12 år) (13-18 år) (19-34 år) (35-64 år) (over 65 år)
Område Personer Husholdninger
Amundrud/Sagmoen 2 464 1 087
Råholt 15 002 6 363
Norge 5 425 412 2 654 586
BARNEHAGER
Bønsmoen barnehage (1-5 år) 4 min
147 barn 2.2 km
Ankertunet barnehage (1-5 år) 6 min
64 barn 3.4 km
Råholt naturbarnehage (0-5 år) 6 min
123 barn 3.4 km
DAGLIGVARE
Spar Råholt 18 min
Post i butikk, PostNord 1.7 km
Kiwi Råholthallen 19 min
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir
uttrykk for hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026

--- Side 58 ---

PRIMÆRE TRANSPORTMIDLER VARER/TJENESTER
AMFI Eidsvoll 21 min
1. Egen bil
Vitusapotek Råholt 21 min
2. Tog
ALDERSFORDELING BARN (0-18 ÅR)
TURMULIGHETENE
Nærhet til skog og mark 96/100
31% i barnehagealder
37% 6-12 år
STØYNIVÅET
16% 13-15 år
Lite støynivå 86/100 16% 16-18 år
GATEPARKERING
Lett 86/100
FAMILIESAMMENSETNING
SPORT
Par m. barn
Haugenfeltet - ballspill- og skøyteb...17 min
Ballspill 1.1 km
Par u. barn
Råholt ungdomsskole 15 min
Aktivitetshall, fotball, sandhåndball 1.4 km
Enslig m. barn
MOVA Eidsvoll 20 min
Fitnesspoint Råholt 4 min
Enslig u. barn
BOLIGMASSE Flerfamilier
36% enebolig 0% 43%
19% rekkehus
Amundrud/Sagmoen
25% blokk
Råholt
20% annet
Norge
SIVILSTAND
Norge
«På bygda, men nært alt...»
Gift 32% 33%
Sitat fra en lokalkjent
Ikke gift 54% 54%
Separert 11% 9%
Enke/Enkemann 3% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir
uttrykk for hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
58

--- Side 59 ---

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir
uttrykk for hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
59

--- Side 60 ---

Gustav Granhaugs veg 85
A
2070 RÅHOLT
Tilstandsrapport
Eierskifte
Boligtype: Enebolig i kjede
Byggeår: 2015
BRA: 143 m2
BRA-i: 118 m2
Rapportdato: 22.1.2026 (Gyldig til 22.1.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
0 20 1 0 6
Stian Larsen
stian@protakstservice.no Gustav Granhaugs veg 85 A
GNR: 96 BNR: 615 SNR: 10 Takstmann
97606007 2070 Råholt
Proff Takstservice AS
60

--- Side 61 ---

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Gustav Granhaugs veg 85 A, 2070 Råholt 2 av 30
61

--- Side 62 ---

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler tjenester som bidrar til en trygg bolighandel og et
bærekraftig bolighold. For å kunne gjøre dette benyttes det tilstands - og eiendomsinformasjon fra
rapporten. Les mer om tjenestene og få tilgang til å avstå fra bruk av dine data ved å gå til denne
nettsiden: https://samtykke.vendu.no/38947
Dokumentasjon på Dersom det har vært utført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be eieren
håndverkertjenester dokumentere bruken av kvalifiserte håndverkere. Som dokumentasjon regnes blant annet skriftlig
bekreftelse fra den eller de håndverkerne som ble brukt.
Hvordan undersøkelsene skal Med mindre det fremgår at et rom eller en bygningsdel skal undersøkes med målinger, at det skal bores
hull, at det skal stikkes i treverk eller annet, skal den bygningssakkyndige basere sine undersøkelser på det
skje som er synlig. Den bygningssakkyndige skal flytte på tepper, møbler og annet inventar når det er
nødvendig for å komme til det rommet eller den bygningsdelen som skal undersøkes. Dette gjelder likevel
ikke for særlig tunge møbler og inventar, når disse ikke skjuler vesentlige installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Gustav Granhaugs veg 85 A, 2070 Råholt 3 av 30
62

--- Side 63 ---

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.
Bygningsdeler med TG-IU
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Drenering TG-IU settes på bakgrunn av at tomten er snødekt.
Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.
Balkong, terrasse, platting TG-IU settes på bakgrunn av terrasse og platting er dekket med snø.
Skorstein over tak TG-IU settes på bakgrunn av at tak/beslag er snødekt.
Takkonstruksjon og loft TG-IU settes på bakgrunn av tak/konstruksjonen er dekket med snø.
Taktekking TG-IU settes på bakgrunn av at taket er dekket med snø.
Gustav Granhaugs veg 85 A, 2070 Råholt 4 av 30
63

--- Side 64 ---

4. Informasjon om oppdraget
Befaringsdato Rapportdato
15.1.2026 22.1.2026
Hjemmelshavere
Navn: Laila Irene Hollstedt Tilstede ved inspeksjon: Ja
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Egenerklæring er mottatt og gjennomgått av takstmann.
Informasjon om bygningssakkyndig
Navn: Stian Larsen Telefon: 97606007
Firma: Proff Takstservice AS Epost: stian@protakstservice.no
Tittel: Takstmann Adresse: Brobekkveien 80C, 0582 Oslo
Egne premisser:
Det er foretatt en forenklet vurdering av deler av det elektriske og rør anlegget.
Vurderingen omfatter ikke funksjonstesting, eller kontroll av åpent eller skjult anlegg. Det legges vekt på at takstmann ikke er fagmann innenfor elektro eller
rør. Vurderingen er derfor begrenset til visuelle vurderinger og selgers informasjon. På generelt grunnlag anbefales det alltid å gjennomføre en utvidet
kontroll av EL-anlegg og rørsystemer.
Informasjon om boligen
Adresse: Gustav Granhaugs veg 85 A, 2070 Råholt
Kommunenr: 3240 Gårdsnr: 96 Bruksnr: 615 Festenr:
Seksjonsnr: 10 Andelsnr: Leilighetsnr:
Byggeår: 2015 - Enebolig i kjede oppført i 2015. Boligen er opprinnelig oppført i normalt gode og kjente konstruksjoner med den byggemåte som
var vanlig ved oppføringstidspunktet.
Boligtype: Enebolig i kjede
Generell beskrivelse av boligen:
Basert på visuell befaring, enkel funksjonstesting, stikktakinger, enkle fuktindikasjonssøk, opplysninger fra rekvirent/eier og offentlige registre, har
takstmann kommet frem til følgende konklusjon:
Innbydende, moderne og godt vedlikeholdt tomannsbolig med god planløsning over to plan som er oppført i 2015
Boligen har vesentlige oppgraderinger etter byggeår, da spesielt i 2025.
1. Etasje: Gang/entre, vaskerom, bad og tre stk soverom.
2. Etasje: Stue, kjøkken og toalettrom.
Boligen har en vestvendt platting og terrasse over garasje.
Utvendig:
Vestvendt platting med pergola.
Terrasse over garasje med utgang fra stue/kjøkken, rekkverk og trapp ned til platting/hage. Beiset i 2 strøk i 2025.
Terrasse/platting i 1. etasje med utgang fra soverom, beiset i 2 strøk i 2025.
Garasje med elektrisk port og innvendig bod, tilknyttet boligen.
Inngjerdet hage med impregnerte materialer og port, utført i 2025.
Innvendig:
Boligen er vesentlig oppgradert i 2025.
Nye overflater: én-stavs laminat/parkett og eikelister i alle rom (2025).
Gustav Granhaugs veg 85 A, 2070 Råholt 5 av 30
64

--- Side 65 ---

Fliser i gang, vaskerom, bad og WC fra byggeår.
Vegger er overflatebehandlet med malt gips og tapet i alle rom (2025), samt fliser på bad og WC.
Stikkontakter er malt for å tilpasses veggfargene (2025).
Hvitmalte, profilerte innerdører med nye sorte håndtak (2025).
Alle gerikter rundt dører er sparklet og malt (2025).
Det er montert nye lameller og plissegardiner (2025).
Ny skyvedørsgarderobe er installert (2025).
Ny baderomsinnredning (2025).
Oppgradert vaskerom med ny innredning og vask (2025).
Ildsted montert i stue i 2. etasje.
Balansert ventilasjon, varmepumpe og sentralstøvsuger.
Varmekabler i gang, bad og vaskerom.
Kjøkken:
Innbydende og moderne AUBO‑kjøkken med hvite, glatte fronter og mørk benkeplate i laminat.
Montert herdet glass med steinmotiv mellom benkeplate og overskap (2025).
Tre glassdører i herdet, farget glass plassert over benkeplaten (2025).
Underlimt vask med ett‑greps blandebatteri ( 2025)og rør‑i‑rør‑system.
Integrerte hvitevarer: komfyr, induksjonsplatetopp, mikrobølgeovn, kjøleskap og oppvaskmaskin.
Kjøkkenventilator med avtrekk ut.
Waterguard og komfyrvakt er installert.
Bad:
Innbydende bad fra byggeår.
Fliser på gulv og vegger. Gips i himling.
Mørke gulvfliser og kombinasjon av hvite/mørke veggfliser.
Varmekabler i gulv.
Dimmbare spotter i himling.
Dusjhjørne med innfellbare glassdører.
Servantskap/vask med speil og lys ( 2025 ).
Veggmontert toalett.
Servantskap og innredning med mørke, glatte fronter, hvit vask og krom blandebatteri ( 2025).
Balansert ventilasjon.
Det gjøres oppmerksom på:
- Innbydende og godt vedlikeholdt bolig.
- Vesentlige oppgraderinger utført etter byggeår.
- Tidsriktig og moderne preg med gjennomgående gode materialvalg.
- God lagringsplass og garderobeløsninger.
- Gode solforhold og inngjerdet, beplantet hage.
- Skjermet uteplass med terrasse og pergola.
- Ildsted.
- Balansert ventilasjon.
- Planløsning med ekstra takhøyde i 2. etasje.
- Varmepumpe og varmekabler.
- Sentralstøvsuger.
- Gode parkeringsmuligheter på egen eiendom, asfaltert og med utelys.
- Garasje med elektrisk port og integrert bod med inngang/utgang til både garasje og hage.
5. Arealinformasjon
Gustav Granhaugs veg 85 A, 2070 Råholt 6 av 30
65

--- Side 66 ---

Arealmålingen er basert på Norsk standard 3940:2023 Areal- og volum-beregninger av bygninger. Arealet gjelder for tidspunktet da boligen ble målt.
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift
Arealet beskriver boligens bruksareal i tre definerte kategorier:
Internt
BRA-i Bruksareal innenfor boenhetens omsluttende vegger. Bruksenheten kan bestå av flere boenheter.
bruksareal
Eksternt Bruksareal av rom som tilhører boenheten med adkomst via fellesarealer eller utvendig adkomst. Veggareal mellom
BRA-e
bruksareal BRA-i og BRA-e legges til BRA-e hvis dette ligger vegg i vegg.
Innglasset Innglassede balkong tilknyttet boenheten. Veggareal mellom innglasset balkong og annet bruksareal tillegges areal
BRA-b
balkong innglasset balkong.
Terrasse- og balkongareal (TBA) dekker areal som åpne balkonger, altaner og verandaer. Dette arealet vil ikke bli inkludert i boligens bruksareal.
Ikke måleverdige arealer som skyldes skråtak eller lav himlingshøyde (ALH) kan opplyses som tilleggsinformasjon. Slike arealer skal ikke oppføres alene,
men skal alltid opplyses sammen med korrekt målt BRA. BRA og ALH kan summeres, og utgjør boligens gulvareal (GUA).
For mer informasjon se her: https://eiendomnorge.no/nyheter/viktig-informasjon-om-arealmaling-article2588-919.html
Bygning: Bolig
Hovedareal
Etasje BRA BRA-i (internt bruksareal) BRA-e (eksternt bruksareal) BRA-b (Innglasset balkong) TBA (terrasse- og balkongareal)
1. etasje 84 59 25 0 21
Romfordeling: Romfordeling:
1. Etasje inneholder tre stk Garasje og bod
soverom, gang, bad og
vaskerom.
2. etasje 59 59 0 0 29
Romfordeling:
2. Etasje inneholder kjøkken, stue
og toalettrom.
Totalt m2 143 118 25 0 50
Kommentar til arealberegning
Rom som ligger utenfor boenheten, men som eier har påvist og/eller opplyst at tilhører boenheten, er oppmålt og inkludert i BRA-e.
BRA-e: Garasje/Bod
Terrasser er snødekte og derfor er målene noe ca.
Gustav Granhaugs veg 85 A, 2070 Råholt 7 av 30
66

--- Side 67 ---

6. Hovedrapport
6.1 Drenering
Type grunnmur? Støpt plate på mark
Boligen er oppført med støpt plate på mark.
Er bygningen utsatt for tilsig av overflatevann (terrengfall inn mot boligen)? Ikke kontrollerbart
Er kontrollert bortleding av vann fra taknedløp ved grunnmur mangelfull? Nei
Oppsummering av drenering TG-IU
Tomten er snødekt og terrengforhold er ikke kontrollert.
Bortleding av vann fra taknedløp er ivaretatt.
6.2 Grunnmur og fundament
Type Fundament/Grunnmur Plate på mark
Boligen er oppført med støpt plate på mark.
Type byggegrunn Byggegrunn av løsmasse, Byggegrunn av pukk/stein
Byggegrunn av pukk/stein og løsmasser.
Er det påvist sprekker/riss eller skader? Ikke kontrollerbart
Oppsummering av grunnmur og fundament TG-IU
Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i plate på mark vil ikke
være synlig da konstruksjonen er tildekket og ligger under bakkenivå.
6.3 Balkong, terrasse, platting
Gustav Granhaugs veg 85 A, 2070 Råholt 8 av 30
67

--- Side 68 ---

Type Terrasse, Platting
Boligen er oppført med en terrasse over garasje, samt en vestvendt platting på bakkenivå.
Terrasser og platting er dekket med impregnert trevirke.
Det gjøres oppmerksom på at terrasse/platting er dekket med snø.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Eier har renset terrasse, utetemperatur, plattinger og gjerder- samt beistet to strøk i 2025
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Ja
Er det ufullstendig/manglende tettesjikt ved oppkant mot vegg og dør? Nei
Oppsummering av balkong, terrasse, platting TG-IU
TG-IU settes på bakgrunn av at terrasse og platting er dekket med snø.
Terrasse og platting er ikke vurdert.
Anbefalte tiltak / ytterligere undersøkelser anbefales
Det bør foretas nærmere undersøkelser av platting/terrasser når den er snøfri.
6.4 Vinduer og dører: Vinduer
Gustav Granhaugs veg 85 A, 2070 Råholt 9 av 30
68

--- Side 69 ---

Beskrivelse
Boligen er oppført med hvitmalte vinduer med tre-lags isolerglass fra 2015.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Eier opplyser om at det er montert nye lammeller og plissegardiner fra Norgesmarkiser i 2025.
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
Gustav Granhaugs veg 85 A, 2070 Råholt 10 av 30
69

--- Side 70 ---

6.5 Vinduer og dører: Dører
Beskrivelse
Innvendige dører er hvitmalte med profilert utførelse og sorte håndtak.
Ytterdør og terrassedører er hvitmalte med tre-lags glass.
Innvendige dører fra Swedoor.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Det er montert nye/sorte håndtak på de innvendige dørene, alle gerikter rundt dører er sparklet og
malt i 2025.
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
Det registreres ikke tegn til avvik eller skader utover normal bruksslitasje.
Gustav Granhaugs veg 85 A, 2070 Råholt 11 av 30
70

--- Side 71 ---

6.6 Yttervegger
Type fasade Liggende kledning
Boligen er oppført med liggende kledning som er overflatebehandlet hvit.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Eier opplyser om at det ikke er utført arbeid utover normal vedlikehold som vask.
Er det påvist skjevheter/riss/sprekker/setninger? Nei
Er det påvist fuktskade/sopp/råte eller slitt overflate? Nei
Er det liten eller ingen lufting av kledningen? Nei
Er det manglende musetetting i nedkant av kledning/plater? Nei
Oppsummering av yttervegger TG-1
Det registreres ikke tegn til skader eller avvik på befaringstidspunktet.
Det er etablert god lufting av kledning, samt at det er montert musebånd.
Det gjøres oppmerksom på at undersøkelsen er utført fra bakkenivå og begrenser seg til dette.
Gustav Granhaugs veg 85 A, 2070 Råholt 12 av 30
71

--- Side 72 ---

6.7 Skorstein over tak
Tilgjengelighet Ikke tilgjengelig
Totalvurdering av skorstein over tak TG-IU
Pipe over tak er ikke undersøkt pga snø.
Anbefalte tiltak / ytterligere undersøkelser anbefales
På generelt grunnlag vil det alltid anbefales at det utføres en undersøkelse av tak/tekking, beslag
og pipe når forholdene gjør det mulig.
6.8 Takkonstruksjon og loft
Type takkonstruksjon Pulttak
Boligen er oppført med pulttak.
Type loft Innredet (lukket konstruksjon)
Boligen er oppført med pulttak og full takhøyde innvendig i boligen.
Det er ikke etablert loft.
Utvendig inspeksjon Fra bakken
Er det registrert symptom på svekkelser/vesentlige skjevheter/nebøyninger i Ikke kontrollerbart
konstruksjonen?
Det er ikke utført en helhetlig vurdering av konstruksjonen pga snø.
Av det som er synlig fra bakkenivå registreres det ikke tegn til avvik på befaringstidspunktet.
Gustav Granhaugs veg 85 A, 2070 Råholt 13 av 30
72

--- Side 73 ---

Er det manglende eller utilstrekkelig lufting av konstruksjonen? Nei
Det er etablert god lufting av konstruksjonen.
Er det tegn til fukt fra lekkasjer eller kondensering på innvendige overflater? Nei
Boligen har full takhøyde i 2. Etasje- det registreres ikke tegn til skader eller fukt/lekkasjer på
innvendige overflater.
Er det tegn til sopp/råte eller spor etter treskadeinnsekt? Nei
Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart
Det er ikke kontrollert tetting rundt gjennomføringer pga snø.
Totalvurdering av takkonstruksjon og loft TG-IU
Konstruksjonen var snødekt på befaringstidspunktet, og utvendig inspeksjon kunne derfor ikke
utføres.
Det gjøres oppmerksom på at det er synlig lufting av konstruksjonen.
Anbefalte tiltak / ytterligere undersøkelser anbefales
På generelt grunnlag anbefales det en ytterligere undersøkelse av tak/konstruksjonen når det er
snøfritt.
6.9 Taktekking
Type takkonstruksjon Pulttak
Boligen er oppført med pulttak.
Type tekking Pappshingel
Taket er tekket med antatt pappshingel.
Tekking er ikke synlig pga snø.
Inspisert fra Fra bakken
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Eier opplyser om at det ikke er utført arbeid etter byggeår.
Er det registrert skader, deformasjoner eller begroing på taktekkingen? Ikke kontrollert
Er det synlige avvik på beslag/inndekning rundt pipe og andre Ikke kontrollert
takgjennomføringer?
Har tekkingen nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av taktekking TG-IU
Kontrollen er kun utført fra bakkenivå, samt at at tak/tekking er dekket med snø. Det er derfor ikke
foretatt kontroll av alle beslag, overganger eller tekking.
Gustav Granhaugs veg 85 A, 2070 Råholt 14 av 30
73

--- Side 74 ---

Anbefalte tiltak / ytterligere undersøkelser anbefales
Inspeksjon og vurdering av taktekking anbefales når forholdene gjør det mulig.
6.10 Kjøkken
Overflater og innredning
Er det påvist fukt /skader rundt vask/kjøleskap/oppvaskmaskin? Nei
Er det påvist skader på kjøkkeninnredning utover normal slitasje? Nei
Oppsummering av overflater og innredning TG-1
Moderne AUBO‑kjøkken (dansk) med hvite, glatte fronter og mørk benkeplate i laminat.
Rikelig med skap- og benkeplass.
Underlimt vask med ett‑greps blandebatteri (2025) og rør‑i‑rør‑system.
Herdet glassplate montert mellom benkeplate og overskap, med steinmotiv bak glassplaten (2025).
Tre glassdører i herdet, farget glass over benkeplaten (2025).
Integrerte hvitevarer: komfyr, induksjonsplatetopp, mikrobølgeovn, kjøleskap og oppvaskmaskin.
Mekanisk kjøkkenventilator med avtrekk ut.
Waterguard og komfyrvakt installert.
Avtrekk
Type avtrekk Mekanisk
Det er montert mekanisk avtrekk over platetopp.
Er det registrert avvik på avtrekk? Nei
Oppsummering av avtrekk TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
Gustav Granhaugs veg 85 A, 2070 Råholt 15 av 30
74

--- Side 75 ---

Gustav Granhaugs veg 85 A, 2070 Råholt 16 av 30
75

--- Side 76 ---

6.11 Lovlighet / HMS
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Nei
Det er samsvar mellom dagens bruk og godkjente byggetegninger.
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Det er ikke åpnet vegger for ytterligere undersøkelser av dette.
Er det manglende ferdigattest / midlertidig brukstillatelse? Nei
Det foreligger ferdigattest fra 01.11.2016
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Takhøyde 1. Etasje: Ca 2,4m
Takhøyde 2. Etasje: Ca 2,4m - 4,3m(Skråtak).
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på innvendig trapp i forhold Nei
til dagens forskriftskrav?
Det er montert rekkverk og håndløper i trapp. Trappen er een lukket tretrapp som er
overflatebehandlet hvit med filt i trappetrinn.
Eier opplyser om at trapp/rekkverk er malt to strøk i 2025. Nye teppefliser.
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Nei
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Det er montert røykvarslere og satt inn brannslukningsapparat i boligen.
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
Er det krav til snøfanger? Ja
Gustav Granhaugs veg 85 A, 2070 Råholt 17 av 30
76

--- Side 77 ---

Er det manglende og/eller feil/skader på snøfanger? Nei
Det er montert snøfangere fra nabo til terrasse.
Er det krav til stige for adkomst feier? Ja
Er det manglende stige/adkomst for feier og eller skader på stige? Nei
6.12 Avløpsrør
Gustav Granhaugs veg 85 A, 2070 Råholt 18 av 30
77

--- Side 78 ---

Type avløpsrør Plast
Boligen har avløpsrør av plast.
Det gjøres oppmerksom på at det kun er foretatt inspeksjon av synlige avløpsrør innvendig i
boligen.
Er det gjennomført arbeider på anlegget etter byggeår? Ja
Eier opplyser at det i 2025/2026 er etablert avløpsrør fra vask, montert tilbakeslagsventil og
installert ekspansjonskar på vaskerom av faglært. Kommunen installerte ny vannmåler i 2025.
Utover dette er det ikke utført arbeid på anlegget etter byggeår.
Er det manglende lufting av kloakk over tak? Ukjent
Er det sen avrenning fra tappested? Nei
Mangler det stakemuligheter på avløpsanlegget? Nei
Har avløpsrør nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av avløpsrør TG-1
Det registreres ikke tegn til skader eller avvik på befaringstidspunktet.
Det gjøres oppmerksom på at undersøkelsen er begrenset til det som er synlig på kjøkken, bad og
vaskerom.
TG settes på bakgrunn av hva som er synlig.
Gustav Granhaugs veg 85 A, 2070 Råholt 19 av 30
78

--- Side 79 ---

6.13 Vannledninger
Type anlegg Rør i rør system
Boligen er oppført med vannledninger av rør-i-rør system.
Det gjøres oppmerksom på at det kun er foretatt inspeksjon av synlige vannledninger innvendig i
boligen.
Er det utført arbeider på anlegget etter byggeår? Ja
Eier opplyser at det i 2026 er montert tilbakeslagsventil og ekspansjonskar i henhold til gjeldende
forskrifter.
Arbeidet er utført som følge av kommunalt pålegg
Er det etablert fordelerskap? Ja
Er det manglende vannstoppesystem i tilknytning til, eller manglende avrenning til Nei
sluk/avløp fra fordelerskap?
Har vannrør nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Er det manglende isolering av vannrør hvor det er risiko for frost eller kondens? Nei
Er det registrert tegn til lekkasjer eller skader på vannrør? Nei
Er det redusert vanntrykk ved prøving av to tappesteder samtidig? Nei
Er det manglende tilgjengelighet til stoppekran? Nei
Er det dårlig funksjon på stoppekran? Nei
Oppsummering av vannledninger TG-1
Fordelerskap er plassert på vaskerom. Det er etablert drensåpning fra fordelerskap ved evt
lekkasje.
Det er også montert waterguard i fordelerskap.
Stoppekran er plassert i fordelerskap.
Det registreres ikke tegn til skader eller lekkasjer på befaringstidspunktet.
Gustav Granhaugs veg 85 A, 2070 Råholt 20 av 30
79

--- Side 80 ---

Gustav Granhaugs veg 85 A, 2070 Råholt 21 av 30
80

--- Side 81 ---

6.14 Elektrisk
Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Automatsikringer
Sikringsskap er plassert på vaskerom og har automatsikringer.
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Ja
Tidligere eier har opplyst at det er satt opp utvendige lykter, arbeid utført av Næss Instalasjon AS.
Utover dette er det ikke utført arbeid på anlegget etter byggeår.
Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Nei
Er det manglende kursfortegnelse? Nei
Er det manglende samsvar mellom kursfortegnelse og antall sikringer? Nei
Er det tegn på varmgang (termiske skader) på kabler, brytere, downlight, stikkkontakter, og Nei
elektrisk utstyr?
Er plugg (støpsel) på berederen brunsvidd? Ikke relevant, fast tilkobling
Er kabler utilstrekkelig festet? Nei
Er det tegn til at kabelinnføringer og hull i inntak og sikringsskap ikke er tette? Nei
Spørsmål til eier: Løses sikringene ofte ut? Nei
Spørsmål til eier: Har det vært brann, branntilløp eller varmgang i anlegget? Nei
Oppsummering av elektrisk
Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser som forskrift til
avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en
kontroll utført av offentlig myndighet (Det lokale eltilsyn) eller registrert elektrovirksomhet, og en
bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll. Tilstandsgraden er
vurdert ut fra den forenklede og begrensede kontrollen som forskriften inneholder. El-anlegget kan
ha feil og mangler som en slik forenklet undersøkelse ikke vil avdekke. Vær derfor oppmerksom på
denne risikoen, og søk videre veiledning eller få en fullstendig kontroll utført av registrert
elektrovirksomhet.
Anbefalte tiltak / ytterligere undersøkelser anbefales Ja
På generelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.
6.15 Varmesentral
Gustav Granhaugs veg 85 A, 2070 Råholt 22 av 30
81

--- Side 82 ---

Type anlegg Varmepumpe
Det er montert varmepumpe i stue 2. Etasje.
Varmepumpe er av typen; Samsung
Er det utført arbeider på anlegget etter byggeår? Nei
Eier opplyser om at det ikke er utført arbeid på varmepumpe.
Når var siste service på anlegget?
Det ble utført service på varmepumpe i 2022 - dette ble utført av RE Varmepumpe AS
Totalvurdering av varmesentral TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
6.16 Varmtvannsbereder
Plassering bereder
Vaskerom
Fundament
Plassert på gulv
Årstall
2015
Størrelse
200
Er det manglende lekkasjesikring av bereder? Nei
Er det tegn til lekkasjer fra bereder? Nei
Er bereder over 20 år? Nei
Oppsummering av varmtvannsbereder TG-1
Varmtvannsbereder er av typen; Høiax Titanium Standard 200.
Bereder er plassert i rom med sluk og har fast tilkobling.
Det registreres ikke tegn til skader eller lekkasjer på befaringstidspunktet.
Gustav Granhaugs veg 85 A, 2070 Råholt 23 av 30
82

--- Side 83 ---

6.17 Ventilasjon
Type ventilering Balansert ventilasjon
Boligen er oppført med balansert ventilasjon av typen; Flexit.
Ventilasjonsanlegg er plassert på vaskerom.
Er det utført arbeider på anlegget etter byggeår? Nei
Eier opplyser om at det ikke er utført arbeid på anlegget etter byggeår.
Når var siste service på anlegget?
Ukjent
Er det tegn på fukt eller mugg i filter? Nei
Er det rom med manglende tilluft/avtrekk? Nei
Er det tegn på utilstrekkelig luftutveksling? Nei
Oppsummering av ventilasjon TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
Det opplyses om at det er byttet filter årlig.
6.18 Våtrom: Bad
Gustav Granhaugs veg 85 A, 2070 Råholt 24 av 30
83

--- Side 84 ---

Overflate
Beskrivelse av overflate
Badet har flislagte overflater på gulv og vegger.
Mørke 20x20 fliser på gulv og hvite 40x25fliser på vegger. Sorte 20x20 fliser i dusjsone.
Badet har varmekabler på gulv og spotter ei himling.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Eier opplyser om at det er byttet baderomsinnredning inkl. vask med blandebatteri i 2025.
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Nullpunkt laser: 18,5
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-2
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca 3,5cm.
Det registreres ikke tegn til skader eller avvik utover normal slitasje.
Det registreres bom i en flis mellom dusjsone og vask/servant(manglende heft til underlaget) med
risiko for at flis kan løsne.
Membran, tettesjikt og sluk
Er det manglende mulighet for renhold og inspeksjonsmulighet av sluk? Nei
Type sluk Plast
Sluk av typen plast.
Er det påvist avvik ved utførelsen av membran/tettesjikt/klemring rundt sluk? Nei
Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 25 av 30
84

--- Side 85 ---

Oppsummering av membran, tettesjikt og sluk TG-1
Det registreres at membran er ført inn under klemring med riktig utførelse.
Sanitærutstyr
Beskrivelse
Badet er innredet med 3 høyskap, servantskap/vask med belyst speil (2025), vegghengt innebygd
toalett og dusjhjørne med innfellbare dører. Servantskapet har mørke, glatte fronter og hvit vask
med krom blandebatteri (2025).
Er det skader på utstyr og innredning? Nei
Er det innebygd sisterne til klosett? Ja
Er det manglende drenering av lekkasjevann fra innebygd sisterne? Nei
Oppsummering av sanitærutstyr TG-1
Det registreres ikke tegn til skader eller avvik på befaringstidspunktet.
Det er etablert drensåpning fra innebygd sisterne som leder vann til sluk ved evt lekkasje.
Ventilasjon
Type ventilering Mekanisk avtrekk
Boligen er oppført med balansert ventilasjon.
Er ventilasjonen funksjonstestet? Ja
Oppsummering av ventilasjon TG-1
Det registreres trekk i kanalen.
Det registreres ikke tegn til avvik på befaringstidspunktet.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Ja
Er det registrert fukt eller andre skader ved hulltaking? Nei
Oppsummering av fukt TG-1
Det er foretatt hulltaking fra tilstøtende rom mot dusjsone fra tidligere takstmann.
Det registreres ikke tegn til fukt via hulltaking eller på overflater.
Dokumentasjon
Fremlagt dokumentasjon Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 26 av 30
85

--- Side 86 ---

6.19 Våtrom: Vaskerom
Overflate
Beskrivelse av overflate
Badet har flislagte overflater på gulv og overflatebehandlet gips på vegger.
Mørke 20x20 fliser på gulv og hvite overflater på vegger.
Vaskerommet har varmekabler på gulv.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Eier opplyser om at det er etablert vask og ny innredning på rommet i 2025.
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Nullpunkt laser: 18,5
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 27 av 30
86

--- Side 87 ---

Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-1
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca 3,5cm.
Det registreres ikke tegn til skader eller avvik utover normal bruksslitasje.
Membran, tettesjikt og sluk
Er det manglende mulighet for renhold og inspeksjonsmulighet av sluk? Nei
Type sluk Plast
Sluk av typen plast.
Er det påvist avvik ved utførelsen av membran/tettesjikt/klemring rundt sluk? Nei
Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av membran, tettesjikt og sluk TG-1
Det registreres riktig utførelse av membran, tettesjikt og sluk på rommet.
Sanitærutstyr
Beskrivelse
Vaskerommet har plassering av ventilasjonsanlegg, sentralstøvsuger, sikringsskap, fordelerskap,
varmtvannsbereder, opplegg for vaskemaskin/tørketrommel og innredning/servantskap med
utslagsvask.
Innredning med hvite/profilerte fronter.
Er det skader på utstyr og innredning? Nei
Er det innebygd sisterne til klosett? Nei
Oppsummering av sanitærutstyr TG-1
Det registreres ikke tegn til avvik eller skader på befaringstidspunktet.
Ventilasjon
Type ventilering Mekanisk avtrekk
Boligen er oppført med balansert ventilasjon.
Er ventilasjonen funksjonstestet? Ja
Gustav Granhaugs veg 85 A, 2070 Råholt 28 av 30
87

--- Side 88 ---

Oppsummering av ventilasjon TG-1
Det registreres trekk i kanalen.
Det registreres ikke tegn til avvik på befaringstidspunktet.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Nei
Er det påvist indikasjon på skader/fukt ved bruk av fuktsøk/fuktmåling? Nei
Oppsummering av fukt TG-1
Det er ikke foretatt hulltaking fra tilstøtende rom da det ikke er belastning av fritt vann på overflater.
Det er søkt etter fukt på gulvoverflater- det registreres ikke tegn til fukt via dette søket.
Dokumentasjon
Fremlagt dokumentasjon Nei
6.20 Garasje/Bod
Beskrivelse
Det er garasje med elektrisk portåpner tilknyttet boligen, med terrasse over.
Innerst i garasjen er det en lukket bod med egen utgang til hagen på baksiden. Det er også utekran
i garasjen.
Garasje: Ca 6,6m x 3,1m
Bod: 3,0m x 1,9m
Oppsummering TG-1
Det registreres ikke tegn til avvik på befaringstidspunktet.
6.21 Ikke relevante bygningsdeler
Gustav Granhaugs veg 85 A, 2070 Råholt 29 av 30
88

--- Side 89 ---

g
Oljetank
Vannbåren varme
Gustav Granhaugs veg 85 A, 2070 Råholt 30 av 30
89

--- Side 90 ---

Boligselgerforsikring fra Fremtind
Når du kjøper eller selger eiendom, er trygghet og forutsigbarhet viktig for både
kjøper og selger. Med boligselgerforsikring fra Fremtind er både kjøper og selger
godt ivaretatt dersom det oppdages feil eller mangler i etterkant av salget.
Boligselgerforsikringen dekker selgers økonomiske ansvar etter avhendingsloven.
Hvis kjøper oppdager feil eller mangler etter overtakelsen, vil Fremtind behandle
reklamasjonen på vegne av selger. Dette betyr at kjøper kan forholde seg til en
profesjonell part, noe som bidrar til en ryddig prosess for begge parter.
Fordeler med boligselgerforsikring fra Fremtind
Enkelt å reklamere på mangler for både kjøper og selger
Profesjonell håndtering av reklamasjon
Rask og rettferdig saksbehandling for begge parter
Hvis boligselger har kjøpt boligselgerforsikring fra Fremtind er dette informert om i selgers
egenerklæringsskjema
Forsikringen er levert av Fremtind
90

--- Side 91 ---

Selgers egenerklæring
Egenerklæringen er boligselgers egen beskrivelse av tilstanden til
boligen. Her kan du finne viktige opplysninger som du som kjøper bør
vite om før du bestemmer deg for et eventuelt kjøp. Har du spørsmål
til egenerklæringen kan du snakke med megleren som står for salget.
Selgere
Laila Irene Hollstedt
Boligen
Boligen ble kjøpt 2024
Selger har ikke bodd i boligen de 12 siste månedene
Gustav Granhaugs Veg85A Boligselger har kjøpt boligselgerforsikring
2070Råholt
3240-96/615/0/10
Meglers oppdragsnummer: 6032261899 1
91

--- Side 92 ---

Våtrom, tak og fasade
1. Vet du om det er, eller har vært, feil eller skader på bad/våtrom?
◆ Nei, ikke som jeg kjenner til
2. Vet du om det er gjort arbeid på bad eller våtrom, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Vaskerom i 1. etasje Det er installert utslagsvask med tilhørende avløpsrør, nytt
opplegg for vaskemaskin, samt montert tilbakeslagsventil og ekspansjonskar i henhold til gjeldende forskrifter.
Kommunen installerte ny vannmåler i 2025.
Ufaglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Bad i 1. etasje Det er byttet baderomsinnredning, inkludert tre høyskap med 2 dører
og speil innvendig , servantskap med to skuffer, vask og blandebatteri. Det er også montert speilskap med lys.
1. etg. Vaskeromsinnredning
Vet du om tettesjikt, membran eller sluk ble fornyet eller oppgradert?
◆ Nei, ikke som jeg kjenner til
3. Vet du om det finnes dokumentasjon på hvordan bad/våtrom er bygget opp?
◆ Nei, ikke som jeg kjenner til
4. Vet du om det er, eller har vært, vannlekkasje eller andre typer feil eller skader på tak, yttervegg, vinduer, dører,
garasje, tilleggsbygninger eller lignende?
◆ Nei, ikke som jeg kjenner til
5. Vet du om det er utført arbeid på tak, yttervegg, vindu, dører eller annen fasade, enten av deg eller tidligere
eiere?
◆ Nei, ikke som jeg kjenner til
6. Vet du om det er, eller har vært, feil eller skader på vinduene, som for eksempel kondens, fuktskader eller
vanninntrengning? Eller er noen av vinduene i boligen punktert?
◆ Nei, ikke som jeg kjenner til
7. Vet du om det er utført arbeid på garasje eller øvrige tilleggsbygninger, av enten deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
2
92

--- Side 93 ---

1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Monter AS,
Beskrivelse av arbeidet: Opplysning om tidligere utførte tiltak (til orientering) Tidligere eier har opplyst at selger
ved deres kjøp informerte om at det var montert elektrisk port i carporten for å gjøre den om til garasje, og at
dette arbeidet ble utført av snekker fra Monter AS. Det ble samtidig opplyst at de ikke kjenner til om det ble søkt
om bruksendring fra carport til garasje.
Ufaglært arbeid:
1.
Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Det er montert "spile"- gjerde i tre materialer med port i hagen på baksiden av huset.
All eksisterende platting, terrasser, rekkverk, bjelker/ spilevegg pergola og trapp er "vasket/renset" og beiset to
ganger med Tyrilin sommer 2025.
2.
Hvilket år ble jobben fullført?: 2017
Beskrivelse av arbeidet: Opplysninger fra tidligere eier (til orientering) Tidligere eier opplyste at de som solgte
de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige
trappen mot hagen.
8. Vet du om det er, eller har vært, skjevheter eller setningsskader i boligen, støttemur, terrasse eller lignende?
◆ Nei, ikke som jeg kjenner til
Drenering, fukt og lekkasje
9. Vet du om det er, eller har vært, feil eller skader med dreneringen?
◆ Nei, ikke som jeg kjenner til
10. Vet du om det er, eller har vært, fukt, råte eller vanninntrengning i underetasje, kjeller eller krypkjeller?
◆ Nei, ikke som jeg kjenner til
11. Vet du om det er gjort arbeid med drenering, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
12. Vet du om det er, eller har vært, fukt, sopp eller råteskader i boligen/sameiet/borettslaget?
◆ Nei, ikke som jeg kjenner til
13. Vet du om det er, eller har vært, skadedyr eller sjenerende insekter på eiendommen eller i boligen?
◆ Nei, ikke som jeg kjenner til
Tekniske installasjoner
14. Vet du om det er, eller har vært, feil på vann- eller avløpsanlegg?
◆ Nei, ikke som jeg kjenner til
15. Vet du om det er gjort arbeid på vann og avløp, enten av deg eller tidligere eiere?
3
93

--- Side 94 ---

◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2022
Firmanavn: Waterstop AS
Beskrivelse av arbeidet: Tidligere eier opplyser at ventil er byttet til
Waterstop.
2.
Hvilket år ble jobben fullført?: 2025
Firmanavn: Org. nr. 970011455 Knut A. Stubergh og Eidsvoll Rør As
Beskrivelse av arbeidet: Byttet til ett greps blandebatteri på kjøkken- rør i rør system. Se pkt. Våtrom, tak og
fasade vedr. vaskerom
16. Vet du om eiendommen har privat vannforsyning, vannbrønn, septiktank, pumpekum, avløpskvern eller
lignende?
◆ Ja
Har du opplevd at dette har vært ustabilt?
◆ Nei, ikke som jeg kjenner til
17. Vet du om det er, eller har vært, feil eller skader knyttet til sentralfyr, radiator, ventilasjon, varmepumpe,
kjøkkenvifte, baderomsvifte eller andre installasjoner?
◆ Ja
Tidligere eier har opplyst i egenerklæring at dersom det ligger mye snø på taket ( dvs. over ventilhatt til
kjøkkenvifte) kan det renne litt vann ned i ventilatorrøret. Løsning er å fjerne snø rundt ventilatorhatt eller sette
vifte på max, blåser ut vannet. Det er ikke avdekket følgeskader av dette.
Jeg har eid boligen gjennom 2 vintre og opplevd en liten "vanndam" på komfyrtopp ( ca 5 x 5 cm).
Ingen følgeskader. I min eietid har jeg tilbragt mye tid i boligen med oppsussing og kun opplevd dette en gang.
Er det gjort tiltak, eller er feilen/skaden utbedret?
◆ Nei, ikke som jeg kjenner til
18. Vet du om det er gjort arbeid på sentralfyr, radiator, ventilasjon, varmepumpe eller andre installasjoner, enten
av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2022
Firmanavn: RE Varmepumpe AS
Beskrivelse av arbeidet: Ordinær service på
varmepumpe
Ufaglært arbeid:
1. Hvilket år ble jobben fullført?: 2024
Beskrivelse av arbeidet: Byttet Flexit filter på
ventilasjonsanlegg.
19. Vet du om det er, eller har vært, feil eller skader knyttet til ildsted eller pipe?
◆ Nei, ikke som jeg kjenner til
4
94

--- Side 95 ---

20. Vet du om det er gjort arbeid på ildsted eller pipe, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
21. Vet du om det finnes oljetank på eiendommen?
◆ Nei, ikke som jeg kjenner til
22. Vet du om det er, eller har vært, feil eller skader på det elektriske anlegget?
◆ Nei, ikke som jeg kjenner til
23. Vet du om det er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
◆ Ja
Faglært arbeid:
1.
Hvilket år ble jobben fullført?: 2017
Firmanavn: Næss Instalasjon AS
Beskrivelse av arbeidet: Tidligere eier opplyste i sin egenerklæring at den de kjøpte boligen av fikk satt opp
utvendige lykter på tomten.
Eiendommen og omgivelsene
24. Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
25. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Ja
Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed
ble bygget om til garasje. Det er også opplyst at en tidligere eier har oppført en pergola i hagen på ca. 9 m², samt
bygget en vedbod under den utvendige trappen mot hagen.
Stor asfaltert parkeringsplass på egen tomt med kantstein og hekk.
Det er gjennomført betydelig oppgradering /oppussing i 2025.
Utvendig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2 strøk.
Terrasse/platting/ utetrapp i 1. etasje beiset i 2 strøk.
Treverk på pergola beiset i 2 strøk.
Inngjerdet hage etablert med spilegjerde i treverk og port.
Rundstein i ulike størrelser i bed mot gjerde/hekk.
Satt opp rikelig med hyller og kroker i utebod tilknyttet garasje.
Innvendig (2025)
5
95

--- Side 96 ---

Nye gulv: én#stavs laminat/parkett og eikelister i alle rom (unntatt rom med fliser som er fra byggeår).
Vegger malt / kalkmalt og tapetsert i alle rom.
Stikkontakter spraymalt i matchende farge tilpasset de ulike rommene.
Nye sorte dørhåndtak på hvitmalte innerdører.
Gerikter rundt dører sparklet og malt.
Ny skyvedørsgarderobe med speil er installert.
Nye lameller og plissegardiner montert, hvorav én lystett plissegardin på soverom i 1. etasje.
Trapp og rekkverk malt i 2 strøk, samt nye teppefliser lagt.
Montert ny ringeklokke.
Kjøkken (2025)
Herdet glass med steinmotiv montert mellom benkeplate og overskap.
Tre overskap med farget, herdet glass montert.
Nytt ettgreps blandebatteri.
Bad (2025)
Nytt servantskap/innredning med vask og speilskap med lys.
Tre nye høyskap (160 × 40 cm) med to dører og innvendig speil.
Nytt blandebatteri til vask/innredning.
Ny "dorullholder".
Vaskerom ( 2025 )
Ny innredning
Ny utslagsvask med ett greps blandebatteri
Nytt opplegg for vaskemaskin
Innstallert tilbakeslagsventil og ekspansjonskar i trådd med gjeldende forskrifter ( 2026 ).
Er tiltaket godkjent av kommunen?
◆ Nei, ikke som jeg kjenner til
27. Vet du om kjelleren eller loftet er innredet etter opprinnelig byggeår, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
28. Vet du om det mangler midlertidige brukstillatelser eller ferdigattester fra kommunen?
◆ Nei, ikke som jeg kjenner til
29. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
30. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
31. Består boligen av flere, selvstendige boenheter?
◆ Nei, ikke som jeg kjenner til
32. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
34. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
6
96

--- Side 97 ---

35. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer, vedtak eller forslag som kan føre til økte utgifter, som festeavgift, fellesutgifter,
fellesgjeld eller kommunale avgifter?
◆ Nei, ikke som jeg kjenner til
Generelt
37. Har boligen garasje eller øvrige tilleggsbygninger?
◆ Ja
Vet du om det feil eller skader ved garasje eller øvrige tilleggsbygninger?
◆ Nei, ikke som jeg kjenner til
38. Vet du om det er gjort arbeid på eiendommen som ikke er nevnt i de andre spørsmålene?
◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2025
Firmanavn: Bygg & Malerexpert AS, Glass Service AS, Norges Markiser ASEidsvoll Rør AS
Beskrivelse av arbeidet: Se oversikt pkt. 26.
Ufaglært arbeid:
1. Hvilket år ble jobben fullført?: 2025
Beskrivelse av arbeidet: Se oversikt pkt.
26.
39. Vet du om det er, eller har vært, feil på tilbehør som følger med eiendommen?
◆ Ja
Opplysning om koketopp (til orientering).
Tidligere eier opplyste i sin egenerklæring at koketoppen i noen tilfeller kunne slå seg av ved svært høy samtidig
belastning. Dette ble beskrevet som situasjonsbetinget og kunne forebygges ved å sørge for god varmeavledning,
for eksempel ved å holde skuffen under delvis åpen. Dersom den koblet ut, lot den seg enkelt starte opp igjen
ved å slå automatsikringen av og på. Jeg har ikke opplevd dette ved bruk i min eiertid.
Er det gjort tiltak, eller er feilen/skaden utbedret?
◆ Nei, ikke som jeg kjenner til
40. Er det bestilt Norgespris på strøm?
Ja. Norgespris er en statlig ordning som gir husholdninger tilbud om strøm til fast pris på 50 øre pr. kilowattime
(prisen gjelder frem til 31. Desember 2026). Ordningen gjelder både boliger og fritidsboliger. Når en bolig med
Norgespris bytter eier, vil ny eier fortsatt være bundet til Norgespris ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
◆ Ja
7
97

--- Side 98 ---

Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr
609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten.
I tillegg faktureres det felleskostnader på kr 1 000,- per halvår til hver seksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige fellesutgifter.
Ved feietilsyn må eier stille stige til disposisjon. Da enten ved å låne av nabo eller kjøpe inn selv.
8
98

--- Side 99 ---

Bolig selges med boligselgerforsikring
Selger har kjøpt Fremtind boligselgerforsikring.
Boligselgerforsikringen dekker mangler som selger er ansvarlig for etter avhendingsloven,
med de unntakene som følger av forsikringsvilkårene.
Hvis du oppdager noe du mener kan være en mangel, må du reklamere til Fremtind innen
to måneder etter at du oppdaget, eller burde oppdaget, forholdet. Dette gjør du på fremtind.
no.
Husk at du som kjøper ikke må begynne å utbedre forholdet før du har fått svar på
reklamasjonen. Da kan du som kjøper miste retten til å reklamere over forholdet. Du har
likevel en plikt til å begrense en eventuell skade - for eksempel ved å tørke opp vannsøl etter
en vannlekkasje og sørge for at lekkasjen stopper.
9
99

--- Side 100 ---

Megleropplysninger Sameiet Bekkedalgshøgda

Beløp felleskostnader:
Kontingent/felleskostnader for denne seksjonen er per dags dato 1000 kroner per
halvår.
Kontingent/felleskostnader faktureres per halvår (januar og juni).

Hva er inkludert i felleskostnadene?
Kontingent/felleskostnader dekker snørydding og strøing av sameiets private veg,
strøm til lys på sameiets private veg, kostnader til drift og vedlikehold av sameiets
pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til
pumpeanlegget og styreansvar. Varmtvann, fyring og parkering er ikke inkludert i
kontingent/felleskostnader.

Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og
internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen
med bindingstid følger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres seksjonseierne to ganger i året (januar og juni) med forskuddsbetaling
for de påfølgende seks månedene. Avtalen har fra og med 1. februar 2026 en
månedspris på 609 kroner per boenhet. Hollstedt har betalt for januar til juni
2026 og er for øvrig a jour med kontingenter/felleskostnader.

Har sameie felles lån?
Sameiet har per dags dato ikke felles lån.

Foreligger det husordensregler?
Det foreligger per dags dato ikke ordensregler, men se vedtekter om parkering
langs veg mv.

Kreves det styregodkjennelse av ny eier?
Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e-
postadresse til kjøper må meldes til styret inne 14 dager etter overtakelse, jf
vedtektene paragraf 9. I tillegg ber vi som nevnt om fødsels- og personnummer til
rapportering av tredjepartsopplysninger til Skatteetaten.

Vennlig hilsen
Christer Holtet Dahlin

100

--- Side 101 ---














 
 

 
 
 
 
 
 

 

 


 


101

--- Side 102 ---


 
 
 
 
 
102

--- Side 103 ---


      
        
        
        
       
        
        
        
        
       
       
        
       
       
       
       
       
       
        
        
        
       
       
        
        
        
        
        
        
        
        
       
        
       
        
       
       
       
       
        
        
        
        
        
        
        
       
        
        
        
        
        
        
        
        
        
        
        

        
        
        
        
103
       
        
        
       
        
        
       
       
       
       
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
        
        
        
        
       
        
        
       
       
   
   
   
   
   



--- Side 104 ---

















 





 

104

--- Side 105 ---









 
 

 
 
 
 
 
 
 
 
105

--- Side 106 ---













 

 


 

 

106

--- Side 107 ---











































107

--- Side 108 ---










































108

--- Side 109 ---









































109

--- Side 110 ---











































110

--- Side 111 ---









































111

--- Side 112 ---



































 
 
 

 


112

--- Side 113 ---



















113

--- Side 114 ---

114

--- Side 115 ---

115

--- Side 116 ---

Laila Irene Hollstedt
Gustav Granhaugs Veg 85A
2070 Råholt
16. januar 2026
Årsoppgave for inntektsåret 2025 – Sameiet Bekkedalshøgda
Tredjepartsopplysninger rapportert til Skatteetaten 
Andel inntekter kr 0
Andel kostnader kr 0
Andel formue kr 4281
Andel gjeld kr 0

Beløpene kontrolleres mot tall under temaet «Bolig og
eiendeler» i Skattemeldingen

Matrikkelnummer 3240
Gårdnummer 96
Bruksnummer 615
Seksjonsnummer 10
 
Eiertid i fjor fra og med 01.01
Eiertid i fjor til og med 31.12

Boligsameie Sameiet Bekkedalshøgda
Adresse c/o Christer Holtet Dahlin
 Gustav Granhaugs Veg 80B
 2070 Råholt
Organisasjonsnummer 925258 296

Informasjonen over er også sendt til Skatteetaten. 
Alle som mottar forhåndsutfylt skattemelding fra Skatteetaten skal bruke oppgaven til
kontroll av tallene. Ta derfor godt vare på den. Det er kun sendt en oppgave per boenhet.
Ønskes en fordeling av kostnadene mellom ektefeller/registrerte partnere/meldepliktige
samboer må det foretas endring i skattemeldingen for begge parter. Du må endre/tilføye
informasjon om boligsameiet, fordelingen av formue og årsaken til endring.
Du 昀椀nner mer informasjon på skatteetaten.no. 
116

--- Side 117 ---

Eidsvoll kommune Deres ref:
Vårref.: 2012/3531/ESA
byggesak Dato: 01.11.2016
Saksbehandler: Endre Sandland
NORSK BYGGSERVICE AS
Johan Sverdrups gate 3
3256 LARVIK
Att. Elin Stokkeskog
Gbnr. 96/609, 615 snr. 1-16 - Gustav Granhaugsveg - Ferdigattest
for 8 tomannsboliger og enebolig
Kommunen har den 10.10.16mottatt din søknad om ferdigattest.
Ferdigattest gisi medhold av plan-og bygningsloven (pbl.) § 21-10 og
byggesaksforskriften (SAK 10)§§ 8-1 og 8-2.
Ferdigattesten gjelderfor 8 tomannsboliger og eneboligbeskrevet i tillatelsen med
senere tillegg.
Rammetillatelse ble gitt den 26.05.14.
Igangsettingstillatelse(r) ble gitt den 11.09.14 og 16.02.15.
Endringstillatelse for tiltaket ble gitt den 17.04.15, 18.06.15. 28.09.15
Midlertidig brukstillatelse ble gitt den
26.06.15,01.07.15,07.10.15,08.10.15,23.10.15,07.12.15,16.03.16,17.03.16,02.06.16,23.0
6.16,28.06.16.
Det er bekreftet at det foreligger tilstrekkelig dokumentasjon over byggverkets og
byggeproduktenes egenskaper som grunnlag for forvaltning, drift og vedlikehold av bygget
(FDV).
Det forutsettes at produkter som benyttes i byggverk, tilfredsstiller kravene i Teknisk
forskrift vedrørende produkter til byggverk, jf. TEK 10 kapittel 3.
Bygningen eller deler av den må ikke tas i bruk til annet formål enn det tillatelsen fastsetter,
jf. pbl. § 20-1.
Tilsyn
Det gjøres oppmerksom på at kommunen kan føre tilsyn og gi pålegg i inntil 5 år etter at
ferdigattest er gitt, jf. pbl. § 25-2, 2. ledd. Gebyr for tilsyn beregnes etter kommunens
gebyrregulativ, jf. pbl. § 33-1.
Avsenderadresse.: Besøksadresse.: Bankkonto: IBAN: BIC-adr.:
Postboks 90 Rådhusgata 1 8601.41.88209 NO9286014188209 DABANO22
2081 Eidsvoll 2080 Eidsvoll 7855.05.02371 (skatt) NO2178550502371 DNBAOKK
Telefon:66107000 Dir.telefon: 66107153 Org.nr.:
Telefaks:66107001 Telefaks: 964 950 113
E-post: Internettadr.:
post@eidsvoll.kommune.no www.eidsvoll.kommune.no
117

--- Side 118 ---

Side 2av 2
Klageadgang
Klage på vedtaket kan sendes til kommuneninnen 3 uker etter at dette brevet er mottatt,
se plan-og bygningsloven § 1-9, jf. forvaltningsloven §§ 28 og 29.Klageinstans er
Fylkesmannen i Oslo og Akershus. Saken vil få en ny vurdering og behandles i kommunens
utvalg for næring, plan og miljø, før den eventuelt videresendes til fylkesmannen.
Med hilsen
Na Stephansen
Bygningssjef
Endre Sandland
avd.ing.byggesak
Dokumentet er elektronisk godkjent.
Eksterne kopimottakere:
JESSHEIM BYGG OG EIENDOM AS Øyungveien 22 2034 HOLTER
Interne kopimottakere:
Arne Müller Kommunal drift
Zainab Adel Hameed Kommunal drift
2
118

--- Side 119 ---

15 x 190 = 2 850
16 x 169 = 2 700
V/T
Bygg 5
BYA hele bygg 204,7m2 BYA parkering 15,0m2 BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda boligområde
Klient:
Jessheim Bygg og Eiendom AS
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle PTelagnneinrg: Tegningsnr.:E-01
119
41 31 21 11 01 9 8 7 6 5 4 3 2 1 15 x 190 = 2 850
16 x 169 = 2 700
V/T
058
8
058
6
000
2
41 31 21 11 01 9 8 7 6 5 4 3 2 1
1etg 1:100
13 950 10 750
3 650 530 3 650
3 730 900 3 225 1 200 2 370 1 600 925 900 3 225 1 200 2 370 1 600 925
2 100 1 300 1 300 1 300 1 300
Bod Bod
5,3 m2 Sov. 5,6 m2 Sov.
ss 12,5 m2 Sov. ss 12,5 m2 Sov.
8,7 m2 8,7 m2
Carport Carport 15,4 m2 30,7 m2 Bad Bad
6,8 m2 6,8 m2 A-A A-A
Gang Gang
13,2 m2 13,2 m2
vv vv
Sov. Sov.
10,1 m2 10,1 m2
Bod/Vask Bod/Vask 6,0 m2 6,0 m2
570 418 570 3 970 900 1 530 1 600 1 535 1 000 1 226 1 200 770 900 1 530 1 600 1 535 1 000 1 226 1 200 418 2 100 1 300 2 100 1 300 1 300 2 100 1 300

--- Side 120 ---

Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda boligområde
Klient:
Jessheim Bygg og Eiendom AS
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle PTelagnneinrg: Tegningsnr.:E-02
120
007 2 = 961 x 61
15 x 190 = 2 850 41 31 21 11 01 9 8 7 6 5 4 3 2 1
007 2 = 961 x 61
15 x 190 = 2 850
F
41 31 21 11 01 9 8 7 6 5 4 3 2 1
F
1 200 3 650
3 200 607 1 563 3 045 1 200 1 135 3 200 570 1 600 3 045 1 200 1 135
1 300 1 100 1 300
A-A
6 400 570 1 600 2 680 1 200 1 500 3 200 570 1 600 2 680 1 200 1 500
1 100 1 300 1 100 1 300
050
1
002
1
006
6
003
1
2etg 1:100
13 950 10 750
1 200 3 650
Stue Stue
Terrasse 20,9 m2 27,5 m2 27,5 m2
Terrasse 20,9 m2
wc wc 1,9 m2 1,9 m2 Gang Gang
6,3 m2 6,3 m2
Kjøkken Kjøkken
23,3 m2 23,3 m2

--- Side 121 ---

Nord 1:100
c+237,0
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Grense vei
c+231,0 Tomtegrense
c+230,0
+228,76 c+229,0 Avkjøring til carport +228,55
c+228,0
c+227,0
Sør 1:100
c+237,0
c+236,0
c+235,0
Bygg 5
c+234,0
c+233,0 B B Y Y A A h p e a l r e k e b r y in g g g 2 0 1 4 5 , , 7 0 m m 2 2
BYA totalt 219,7m2
Tomtegrense c+232,0 B B R R A A 2 1 . . e e t t g g . . 6 6 0 5 , , 0 8 m m2 2
c+231,0 Grense vei B B R R A A p to e ta r l b t y g g 2 1 5 2 1 5 , , 6 8 m m 2 2
BYA og BRA er utregnet ihht norsk standard
c+230,0 P-rom per bolig 116,3m2
c+229,0 +228,55 +228,59 Prosjekt: Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Bekkedalshøgda boligområde
c+228,0 K Je li s e s n h t e : im Bygg og Eiendom AS
c+227,0 B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-03
121

--- Side 122 ---

Øst 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
Tomtegrense
c+230,0
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda boligområde
Klient:
Jessheim Bygg og Eiendom AS
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-04
122

--- Side 123 ---

Vest 1:100
c+236,0
c+235,0
c+234,0
c+233,0
c+232,0
Tomtegrense
c+231,0
c+230,0 Tomtegrense
c+229,0 +228,55
c+228,0
c+227,0
Bygg 5
BYA hele bygg 204,7m2
BYA parkering 15,0m2
BYA totalt 219,7m2
BRA 1. etg. 65,8m2
BRA 2. etg. 60,0m2
BRA per bygg 125,8m2
BRA totalt 251,6m2
BYA og BRA er utregnet ihht norsk standard
P-rom per bolig 116,3m2
Situasjonskartet er hentet fra kommunens kart base, men kan inneholde feil.
Prosjekt:
Bekkedalshøgda boligområde
Klient:
Jessheim Bygg og Eiendom AS
B B B G e y y n k g g r. k g g e 9 e e d 6 a s a d t l B e s r d n h e : r ø s . s g 4 e d 3 : a S E i - g p n o a st t : u f r i : J r o m h Fa T a E ap n l3 . kf o .2 S S ss :: 5 t v t 3 @ o 6 3 e 3 k r 8 L n k d 1 1o e a5 r 5r r s u s 6 v k p 6k 9i o 9 sk - g g 0 b0 a 0 y1 t g e g 3 service.no
i Eidsvoll kommune. Kontroll:
R R e e v v . . A B 2 0 4 2 . . 0 0 2 3 . . 1 1 5 5 E E n n d d r r e e t t h ca ø r y p d o e r t p . å U b tv o id lig e d i t m er o r t e s n y g d + 3 7 ,2 0 m cm opp Revisjon:B
Plusshus ref.: NArokitreskkto nBisykg Pgrossejerkvteirceend Ae:S
I 636423 Tegningsfase: Format: Utskriftsdato:
J 636424 Byggemeldingstegninger A3 17.01.2013
Produktet er Norsk byggservice AS sin eiendom inntil varen er betalt til fulle FTeagsnaidneg:r Tegningsnr.:E-05
123

--- Side 124 ---

Utskriftsdato: 22.01.2026
Eidsvoll kommune
Adresse: Rådhusgata 1, 2080 Eidsvoll
Telefon: +4766107000
Kommunale gebyrer 2026
EM §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Eidsvoll kommune
Kommunenr. 3240 Gårdsnr. 96 Bruksnr. 615 Festenr. Seksjonsnr. 10
Adresse Gustav Granhaugs veg 85A, 2070 RÅHOLT
Kommunale gebyrer fakturert på eiendommen i 2025
Kommunale gebyrer er en kombinasjon av forskudd, abonnement og enkeltgebyrer fakturert etter levert tjeneste. Vi kjenner ikke
samlet gebyr for en eiendom for et år før året er omme. Denne rapporten sammenstiller dette for fjoråret, med summer fordelt per
fagområde. Tjenestene vil normalt ha en prisøkning hvert år, samt at forbruk på ulike tjenester kan variere fra år til år.
Gebyr Fakturert beløp i 2025
Avløp 5 815,60 kr
Eiendomsskatt 5 075,20 kr
Feiing 526,40 kr
Renovasjon 5 441,00 kr
Vann 4 460,00 kr
Sum 21 318,20 kr
Prognose kommunale gebyrer på eiendommen inneværende år
Fakt. hittil i
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose år
Grunngebyr avløp 15% 1 Boenhet 2400.00 1/1 0 % 2 400,00 kr 0,00 kr
Avløp etter måler 25% mva 25% 2 m³ 47.00 1/1 0 % 94,00 kr 0,00 kr
Avløp etter måler 15% mva 15% 2 m3 43.24 1/1 0 % 86,48 kr 0,00 kr
Forskudd avløpsgebyr 15% 4 m3 38.00 1/1 0 % 151,98 kr 0,00 kr
Innbetalt forskrudd avløpsgebyr 25% -56.5 m³ 47.00 1/1 0 % -2 655,50 kr 0,00 kr
25% mva
Innbetalt forskudd avløpsgebyr 15% -56.5 m3 43.24 1/1 0 % -2 443,06 kr 0,00 kr
15% mva
Grunngebyr vann 15% 1 Boenhet 1652.00 1/1 0 % 1 652,00 kr 0,00 kr
124

--- Side 125 ---

Fakt. hittil i
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose år
Vannmålerleie 3/4" 15% 1 stk 304.00 1/1 0 % 304,00 kr 0,00 kr
Vann etter måler 25% mva 25% 2 m³ 34.00 1/1 0 % 68,00 kr 0,00 kr
Vann etter måler 15% mva 15% 2 m3 31.28 1/1 0 % 62,56 kr 0,00 kr
Forskudd vanngebyr 15% 4 m3 26.00 1/1 0 % 104,01 kr 0,00 kr
Innbetalt forskudd vanngebyr 25% -56.5 m3 34.00 1/1 0 % -1 921,00 kr 0,00 kr
25% mva
Innbetalt forskudd vanngebyr 15% -56.5 m3 31.28 1/1 0 % -1 767,32 kr 0,00 kr
15% mva
Feiegebyr 0% 1 PIPE 318.00 1/1 0 % 318,00 kr 0,00 kr
Tilsynsgebyr 0% 1 PIPE 318.00 1/1 0 % 318,00 kr 0,00 kr
Eiendomsskatt - bolig 0% 2612500 1.80 1/1 0 % 4 702,00 kr 0,00 kr
prom
Sum 1 474,15 kr 0,00 kr
Løpende gebyr brukes for å fordele en årlig kostnad på flere innbetalinger.
Mva-feltet gir informasjon om varens merverdiavgiftsats, og beløp er inkludert merverdiavgift. De som har 0% er unntatt
merverdiavgift.
Prognosene for inneværende år kan avvike, spesielt ved årsskifte. Dette kan skyldes at enhetspriser ikke er oppdatert for nytt år
eller at noen gebyr foreløpig ikke er opprettet for nytt år.
FORBEHOLD VED UTLEVERING AV INFORMASJON I FORBINDELSE MED EIENDOMSFORESPØRSLER:
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse
opplysningene benyttes som grunnlag for beslutninger.
125

--- Side 126 ---

Utskriftsdato: 22.01.2026
Eidsvoll kommune
Adresse: Rådhusgata 1, 2080 Eidsvoll
Telefon: +4766107000
Planopplysninger
EM §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Eidsvoll kommune
Kommunenr. 3240 Gårdsnr. 96 Bruksnr. 615 Festenr. Seksjonsnr. 10
Adresse Gustav Granhaugs veg 85A, 2070 RÅHOLT
Opplysningene omfatter gjeldende planer og pågående planarbeid for eiendommen. Nærmere opplysninger om den enkelte plan
med dokumenter, mindre endringer, etc finnes på internett, se lenker under. Oppgitte delarealer viser planinformasjon på
eiendommen.
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Reguleringsplaner
Plantyper uten treff
Kommuneplaner under arbeid Kommunedelplaner
Kommunedelplaner under arbeid Reguleringsplaner under bakken
Reguleringsplaner over bakken Reguleringsplaner under arbeid
Reguleringsplaner bunn Reguleringsplaner under arbeid i nærheten
Bebyggelsesplaner Bebyggelsesplaner over bakken
Bebyggelsesplaner under bakken Midlertidige forbud
Kommuneplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 0237202001
Navn Kommuneplanens arealdel for 2021-2031
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 13.04.2021
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/2549/Bestemmelser%20og%20retningslinjer.pdf
Delarealer Delareal 8 487 m2
Arealbruk Boligbebyggelse,Nåværende
OmrådenavnSe detaljregulering
Delareal 67 m2
LNRF areal for nødvendige tiltak for landbruk og reindrift og gårdstilknyttet næringsvirksomhet
Arealbruk
basert på gårdens ressursgrunnlag,Nåværende
OmrådenavnSe detaljregulering
Delareal 69 m2
Arealbruk Boligbebyggelse,Nåværende
Områdenavna_G
Side 1 av 2
126

--- Side 127 ---

Delareal 220 m2
KPHensynsonenavnH110
KPSikring Nedslagsfelt drikkevann
Reguleringsplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 023711400
Navn Del av gbnr 96/14 med adkomstveg, og reguleringsendring for del av gbnr 96/43
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 27.04.1998
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/114/023711400%20(2).pdf
Delarealer Delareal 1 952 m2
Formål Frittliggende småhusbebyggelse
Feltnavn B5
Delareal 564 m2
Formål Lekeplass
Feltnavn f_F3
Delareal 245 m2
Formål Felles avkjørsel
Feltnavn FV4
Id 023709000
Navn Eiendommene 96/264 og 36 m.fl., med adkomstveger, Bekkedalshøgda
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 15.02.1993
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/195/023709000.pdf
Delarealer Delareal 5 552 m2
Formål Frittliggende småhusbebyggelse
Feltnavn B4
Delareal 167 m2
Formål Felles avkjørsel
Feltnavn FV4
Reguleringsplaner under arbeid i nærheten (100 meter)
Besøk kommunens hjemmeside for mer informasjon
Ingen reguleringsplaner under arbeid innenfor 100 meter fra eiendommen.
Side 2 av 2
127

--- Side 128 ---










   
  
  
   
 

 

 
 
 

 
 

 

 
 

 
 


 


 



 


 


 


 
















 
128

--- Side 129 ---









 










 











 




 






















 
129

--- Side 130 ---













 



 


 
 






 
130

--- Side 131 ---

Reguleringsplankart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg 85A
Utskriftsdato: 22.01.2026
UTM-32
Eidsvoll kommune Målestokk: 1:1000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
131

--- Side 132 ---

Tegnforklaring
132

--- Side 133 ---

Kommuneplankart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg 85A
Utskriftsdato: 22.01.2026
UTM-32
Eidsvoll kommune Målestokk: 1:2000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
133

--- Side 134 ---

Tegnforklaring
134

--- Side 135 ---

Grunnkart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg 85A
Dato: 22.01.2026
UTM-32
Eidsvoll kommune Målestokk: 1:1000
Eiendomsgr. nøyaktig <= 10 cm Eiendomsgr. mindre nøyaktig >200<=500 cm Eiendomsgr. omtvistet Hjelpelinje vannkant
Eiendomsgr. middels nøyaktig >10<=30 cm Eiendomsgr. lite nøyaktig >=500 cm Hjelpelinje veikant Hjelpelinje fiktiv
Eiendomsgr. mindre nøyaktig >30<=200 cm Eiendomsgr. uviss nøyaktighet Hjelpelinje punktfeste Vannledning
Overvannsledning Kum Hydrant Spillvannsledning
Avløp felles Sluk
©Norkart 2026
Det tas forbehold om at det kan forekomme feil, mangler eller avvik i kartet. Spesielt gjelder dette usikre eiendomsgrenser.
Dette kartet kan ikke brukes som erstatning for situasjonskart i byggesaker.
135

--- Side 136 ---

Utskriftsdato: 22.01.2026
Vegstatuskart for eiendom 3240 - 96/615//10
20 m
© 2016 Norkart AS/Geovekst og kommunene/OpenStreetMap/NASA, Meti
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av at disse opplysningene benyttes som grunnlag for beslutninger.
136

--- Side 137 ---

Matrikkelkart og -rapport (tilsvarer målebrev)
Matrikkelenhetens registerbetegnelse og adresse
Matrikkelenhet: Gårdsnr 96, Bruksnr 615, Seksjonsnr 10 Kommune: 3240 Eidsvoll
Adresse:
Veiadresse: Gustav Granhaugs veg 85 A, gatenr Grunnkrets: 506 Amundrud
(fra bruksenhet) 10210
2070 Råholt Valgkrets: 3 Eidsvoll Verk
Oppdatert: 01.01.2024 Kirkesogn: 2070304 Råholt
Tettsted: 675 Råholt
Eiendomsopplysninger
Matrikkel:
Type: Best. eierseksjon Tinglyst: Ja Reg.landbruksreg.: Nei
Bruksnavn: Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 30.06.2015 Har festegrunn: Nei Formål: Bolig
Areal: 439,8 kvm Skyld: Sameiebrøk: 126/2 152
Arealkilde: Beregnet Areal Areal felles tomt: 1 062,6 kvm
Arealmerknad:
Om fullstendighet og nøyaktighet i matrikkelutskriften:
Ambita tar forbehold om at informasjon som hentes fra Matrikkelen kan avvike fra de faktiske forhold, og at grensepunkter mv.
kan mangle helt eller delvis eller være feil registrert i Matrikkelen. Ambitas eiendomsutskrift viser arealet som er en geometrisk
beregning basert på eiendommens grenselinjer. I de tilfeller grensene er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 11
137

--- Side 138 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Forretninger:
Type Dato Rolle Matrikkel Arealendring
Omnummerering Forretning: 01.01.2024 Mottaker 3240/96/615 0,0
Matrikkelført: 01.01.2024 Mottaker 3240/96/615/0/1 0,0
Mottaker 3240/96/615/0/2 0,0
Mottaker 3240/96/615/0/3 0,0
Mottaker 3240/96/615/0/4 0,0
Mottaker 3240/96/615/0/5 0,0
Mottaker 3240/96/615/0/6 0,0
Mottaker 3240/96/615/0/7 0,0
Mottaker 3240/96/615/0/8 0,0
Mottaker 3240/96/615/0/9 0,0
Mottaker 3240/96/615/0/10 0,0
Mottaker 3240/96/615/0/11 0,0
Mottaker 3240/96/615/0/12 0,0
Mottaker 3240/96/615/0/13 0,0
Mottaker 3240/96/615/0/14 0,0
Mottaker 3240/96/615/0/15 0,0
Mottaker 3240/96/615/0/16 0,0
Omnummerering Forretning: 01.01.2020 Mottaker 3240/96/615 0,0
Matrikkelført: 01.01.2020 Mottaker 3240/96/615/0/1 0,0
Mottaker 3240/96/615/0/2 0,0
Mottaker 3240/96/615/0/3 0,0
Mottaker 3240/96/615/0/4 0,0
Mottaker 3240/96/615/0/5 0,0
Mottaker 3240/96/615/0/6 0,0
Mottaker 3240/96/615/0/7 0,0
Mottaker 3240/96/615/0/8 0,0
Mottaker 3240/96/615/0/9 0,0
Mottaker 3240/96/615/0/10 0,0
Mottaker 3240/96/615/0/11 0,0
Mottaker 3240/96/615/0/12 0,0
Mottaker 3240/96/615/0/13 0,0
Mottaker 3240/96/615/0/14 0,0
Mottaker 3240/96/615/0/15 0,0
Mottaker 3240/96/615/0/16 0,0
Oppmålingsforretning Forretning: 28.09.2016 Avgiver 3240/96/43 -1 331,8
Matrikkelført: 10.11.2016 Berørt 3240/96/22 0,0
Berørt 3240/96/36 0,0
Berørt 3240/96/197 0,0
Berørt 3240/96/200 0,0
Berørt 3240/96/369 0,0
Berørt 3240/96/579 0,0
Berørt 3240/96/581 0,0
Berørt 3240/96/583 0,0
Berørt 3240/96/584 0,0
Berørt 3240/96/615/0/1 0,0
Berørt 3240/96/615/0/2 0,0
Berørt 3240/96/615/0/3 0,0
Berørt 3240/96/615/0/9 0,0
Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/621 0,0
Berørt 3240/96/629 0,0
Berørt 3240/96/630 0,0
Berørt 3240/96/631 0,0
Mottaker 3240/96/632 1 331,8
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 2 av 11
138

--- Side 139 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Oppmålingsforretning Forretning: 27.04.2016 Avgiver 3240/96/43 -938,8
Matrikkelført: 22.08.2016 Berørt 3240/96/14 0,0
Berørt 3240/96/614 0,0
Berørt 3240/96/615 0,0
Berørt 3240/96/615/0/2 0,0
Berørt 3240/96/615/0/3 0,0
Berørt 3240/96/615/0/4 0,0
Berørt 3240/96/615/0/5 0,0
Berørt 3240/96/615/0/6 0,0
Berørt 3240/96/615/0/7 0,0
Berørt 3240/96/615/0/8 0,0
Berørt 3240/96/615/0/9 0,0
Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/615/0/11 0,0
Berørt 3240/96/615/0/12 0,0
Mottaker 3240/96/621 938,8
Oppmålingsforretning Forretning: 27.04.2016 Avgiver 3240/96/615 -458,9
Matrikkelført: 22.08.2016 Berørt 3240/96/36 0,0
Berørt 3240/96/43 0,0
Berørt 3240/96/579 0,0
Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/615/0/13 0,0
Berørt 3240/96/621 0,0
Mottaker 3240/96/615/0/9 458,9
Oppmålingsforretning Forretning: 27.04.2016 Avgiver 3240/96/615 -439,8
Matrikkelført: 22.08.2016 Berørt 3240/96/43 0,0
Berørt 3240/96/615/0/9 0,0
Berørt 3240/96/615/0/11 0,0
Berørt 3240/96/621 0,0
Mottaker 3240/96/615/0/10 439,8
Oppmålingsforretning Forretning: 27.04.2016 Avgiver 3240/96/615 -383,7
Matrikkelført: 22.08.2016 Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/615/0/12 0,0
Berørt 3240/96/621 0,0
Mottaker 3240/96/615/0/11 383,7
Oppmålingsforretning Forretning: 04.02.2016 Avgiver 3240/96/43 -938,9
Matrikkelført: 04.02.2016 Berørt 3240/96/14 0,0
Berørt 3240/96/614 0,0
Berørt 3240/96/615 0,0
Berørt 3240/96/615/0/2 0,0
Berørt 3240/96/615/0/3 0,0
Berørt 3240/96/615/0/4 0,0
Berørt 3240/96/615/0/5 0,0
Berørt 3240/96/615/0/6 0,0
Berørt 3240/96/615/0/7 0,0
Berørt 3240/96/615/0/8 0,0
Berørt 3240/96/615/0/9 0,0
Berørt 3240/96/615/0/10 0,0
Berørt 3240/96/615/0/11 0,0
Berørt 3240/96/615/0/12 0,0
Mottaker 3240/96/621 938,9
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 3 av 11
139

--- Side 140 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Feilretting Forretning: 29.06.2015 Etablert/Endret 3240/96/615 0,0
Matrikkelført: 29.06.2015 Etablert/Endret 3240/96/615/0/1 0,0
Etablert/Endret 3240/96/615/0/2 0,0
Etablert/Endret 3240/96/615/0/3 0,0
Etablert/Endret 3240/96/615/0/4 0,0
Etablert/Endret 3240/96/615/0/5 0,0
Etablert/Endret 3240/96/615/0/6 0,0
Etablert/Endret 3240/96/615/0/7 0,0
Etablert/Endret 3240/96/615/0/8 0,0
Etablert/Endret 3240/96/615/0/9 0,0
Etablert/Endret 3240/96/615/0/10 0,0
Etablert/Endret 3240/96/615/0/11 0,0
Etablert/Endret 3240/96/615/0/12 0,0
Etablert/Endret 3240/96/615/0/13 0,0
Etablert/Endret 3240/96/615/0/14 0,0
Etablert/Endret 3240/96/615/0/15 0,0
Etablert/Endret 3240/96/615/0/16 0,0
Seksjonering Forretning: 18.06.2015 Avgiver 3240/96/615 -7 559,1
Matrikkelført: 18.06.2015 Berørt 3240/96/14 0,0
Berørt 3240/96/15 0,0
Berørt 3240/96/36 0,0
Berørt 3240/96/43 0,0
Berørt 3240/96/199 0,0
Berørt 3240/96/200 0,0
Berørt 3240/96/202 0,0
Berørt 3240/96/286 0,0
Berørt 3240/96/579 0,0
Berørt 3240/96/601 0,0
Mottaker 3240/96/615/0/1 405,4
Mottaker 3240/96/615/0/2 442,9
Mottaker 3240/96/615/0/3 498,6
Mottaker 3240/96/615/0/4 472,2
Mottaker 3240/96/615/0/5 496,6
Mottaker 3240/96/615/0/6 495,3
Mottaker 3240/96/615/0/7 505,5
Mottaker 3240/96/615/0/8 649,7
Mottaker 3240/96/615/0/9 455,5
Mottaker 3240/96/615/0/10 443,1
Mottaker 3240/96/615/0/11 383,7
Mottaker 3240/96/615/0/12 453,5
Mottaker 3240/96/615/0/13 439,3
Mottaker 3240/96/615/0/14 459,0
Mottaker 3240/96/615/0/15 438,5
Mottaker 3240/96/615/0/16 520,4
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 4 av 11
140

--- Side 141 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Bebyggelsens arealer mv., antall boenheter
Tomannsbolig, vertikaldelt
Opplysninger om boliger/bruksenheter:
Adresse Type BRA Kjøkkenkode Antall rom Bad WC
Gustav Granhaugs veg 85 A Bolig 125,8 Kjøkken 4 1 1
Bygningsopplysninger:
Næringsgruppe: Bolig Bebygd areal: 88,7 Rammetillatelse: 26.05.2014
Bygningsstatus: Ferdigattest BRA bolig: 125,8 Igangset.till.: 12.02.2015
Energikilde: Elektrisitet BRA annet: Ferdigattest: 01.11.2016
Oppvarming: Elektrisk BRA totalt: 125,8 Midl. brukstil.: 23.10.2015
Avløp: Offentlig kloakk Har heis: Nei Tatt ibruk (GAB):
Vannforsyning: Tilkn. off. vannverk Antall boliger: 1
Bygningsnr: 300457943 Antall etasjer: 2
Etasjeopplysninger:
Nr Ant. boliger BRA: Bolig Annet Totalt BTA: Bolig Annet Totalt
H01 1 65,8 65,8 65,8 65,8
H02 60,0 60,0 60,0 60,0
Kulturminner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 5 av 11
141

--- Side 142 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Oversiktskart
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 6 av 11
142

--- Side 143 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Teig 1 (Hovedteig)
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 7 av 11
143

--- Side 144 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Areal og koordinater
Areal: 439,80m² Arealmerknad:
Koordinatsystem: EUREF89 UTM sone 32
Ytre avgrensing
Punkt Nord Øst Lengde¹ Målemetode Nøyaktighet Radius Merke nedsatt i Hjelpelinje Grensepunkttype
1 6 684 351,01 619 582,52 16,59m GNSS: Fasemåling 9 -55,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
2 6 684 366,41 619 588,53 28,27m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
3 6 684 362,60 619 616,54 3,62m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
4 6 684 359,02 619 615,99 1,64m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
5 6 684 357,89 619 614,80 1,78m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
6 6 684 357,12 619 613,20 3,18m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
7 6 684 354,03 619 613,94 33,46m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
8 6 684 345,26 619 581,65 5,95m GNSS: Fasemåling 9 8,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
(¹) Lengden fra punktet til neste punkt i rekken.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 8 av 11
144

--- Side 145 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Teig 1 (Hovedteig) felles tomt
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 9 av 11
145

--- Side 146 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Areal og koordinater
Areal: 1 062,60m² Arealmerknad:
Koordinatsystem: EUREF89 UTM sone 32
Ytre avgrensing
Punkt Nord Øst Lengde¹ Målemetode Nøyaktighet Radius Merke nedsatt i Hjelpelinje Grensepunkttype
1 6 684 362,60 619 616,54 13,34m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
2 6 684 375,78 619 618,62 9,02m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
3 6 684 384,69 619 620,03 2,38m GNSS: Fasemåling 9 -6,98 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
4 6 684 387,06 619 620,00 0,33m GNSS: Fasemåling 9 Ikke spesifisert Nei Umerket
(Real time kinematic)
5 6 684 387,11 619 619,67 8,06m GNSS: Fasemåling 9 -7,00 Ikke spesifisert Nei Umerket
(Real time kinematic)
6 6 684 392,65 619 614,43 13,71m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
7 6 684 395,56 619 601,03 11,19m GNSS: Fasemåling 9 -10,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
8 6 684 390,70 619 591,59 19,20m GNSS: Fasemåling 9 75,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
9 6 684 408,71 619 598,09 3,65m GNSS: Fasemåling 9 Ikke spesifisert Nei Umerket
(Real time kinematic)
10 6 684 412,01 619 599,64 14,35m GNSS: Fasemåling 9 -8,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
11 6 684 400,80 619 605,18 7,16m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
12 6 684 399,28 619 612,18 3,46m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
13 6 684 398,54 619 615,56 13,46m GNSS: Fasemåling 9 13,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
14 6 684 390,19 619 625,35 5,43m GNSS: Fasemåling 9 Ikke spesifisert Nei Umerket
(Real time kinematic)
15 6 684 390,87 619 630,74 29,79m GNSS: Fasemåling 9 Ikke spesifisert Nei Annen detalj
(Real time kinematic)
16 6 684 403,66 619 657,65 12,02m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
17 6 684 395,33 619 666,31 9,93m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
18 6 684 385,50 619 664,92 6,17m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
19 6 684 379,41 619 663,96 38,42m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
20 6 684 385,99 619 626,11 2,25m GNSS: Fasemåling 9 13,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
21 6 684 383,75 619 625,95 11,06m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
22 6 684 372,82 619 624,23 12,13m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
23 6 684 360,84 619 622,33 6,30m GNSS: Fasemåling 9 -11,00 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
24 6 684 354,81 619 623,82 3,08m GNSS: Fasemåling 9 Ikke spesifisert Nei Umerket
(Real time kinematic)
25 6 684 352,55 619 621,73 3,54m GNSS: Fasemåling 9 -2,00 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
26 6 684 352,15 619 618,66 4,45m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
27 6 684 347,77 619 617,86 7,39m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
28 6 684 342,66 619 612,52 3,14m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
29 6 684 345,79 619 612,26 1,54m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
30 6 684 346,70 619 613,50 1,91m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
31 6 684 348,41 619 614,34 4,75m GNSS: Fasemåling 9 -15,01 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
32 6 684 353,12 619 614,79 1,25m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
33 6 684 354,03 619 613,94 3,18m GNSS: Fasemåling 9 Ikke spesifisert Nei Asfaltspiker
(Real time kinematic)
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 10 av 11
146

--- Side 147 ---

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
34 6 684 357,12 619 613,20 1,78m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
35 6 684 357,89 619 614,80 1,64m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
36 6 684 359,02 619 615,99 3,62m GNSS: Fasemåling 9 Ikke spesifisert Nei Offentlig godkjent
(Real time kinematic) grensemerke
(¹) Lengden fra punktet til neste punkt i rekken.
Om fullstendighet og nøyaktighet i utskriften:
Ambita tar forbehold om at informasjon som hentes fra Matrikkelen kan avvike fra de faktiske forhold, og at grensepunkter mv.
kan mangle helt eller delvis eller være feil registrert i Matrikkelen. Ambitas kartutskrift viser arealet som er en geometrisk
beregning basert på eiendommens grenselinjer. I de tilfeller grensene er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i kartutskriften.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 11 av 11
147

--- Side 148 ---




148

--- Side 149 ---




149

--- Side 150 ---




150

--- Side 151 ---

Adresse Gustav Granhaugs veg 85 A
Postnr 2070
Sted Råholt
Andels- /
/leilighetsnr.
Gnr. 96
Bnr. 615
Seksjonsnr. 10
Festenr.
Bygn. nr.
Bolignr.
Merkenr. A2018-861322
Dato 06.03.2018
Eier Kjell Johnny Kristiansen
Innmeldt av Ole-Magnus Kaksrud
Energiattesten er bekreftet og offisiell. Bygningens identitet og eierforhold er ikke bekreftet fra Matrikkelen
Energimerketangir boligens energistandard. boligen er lite energieffektiv. En bolig bygget etter
Energimerket består av en energikarakter og en opp- byggeforskriftene vedtatt i 2010 vil normalt få C.
varmingskarakter, se i figuren. Energimerket
symboliseres med et hus, hvor fargen viser oppvarmings- Oppvarmingskarakterenforteller hvor stor andel av
karakter, og bokstaven viser energikarakter. oppvarmingsbehovet (romoppvarming og varmtvann)
som dekkes av elektrisitet, olje eller gass.
Energikarakterenangir hvor energieffektiv boligen er, Grønn farge betyr lav andel el, olje og gass,
inkludert oppvarmingsanlegget. Energikarakteren er mens rød farge betyr høy andel el, olje og gass.
beregnet ut fra den typiske energibruken for boligtypen. Oppvarmingskarakteren skal stimulere til økt bruk
Beregningene er gjort ut fra normal bruk ved et gjennom- av varmepumper, solenergi, biobrensel og fjernvarme.
snittlig klima. Det er boligens energimessige standard og
ikke bruken som bestemmer energikarakteren. Om bakgrunnen for beregningene,
A betyr at boligen er energieffektiv, mens G betyr at sewww.energimerking.no
Målt energibruk
Brukeren har valgt å ikke oppgi målt energibruk.
151

--- Side 152 ---

Hvordan boligen benyttes har betydning for energibehovet
Energibehovet påvirkes av hvordan man benytter boligen, (cid:135)(cid:3)deler av boligen ikke er i bruk,
og kan forklare avvik mellom beregnet og målt (cid:135)(cid:3)færre personer enn det som regnes som normalt
energibruk. Gode energivaner bidrar til at energibehovet bruker boligen, eller
reduseres. Energibehovet kan også bli lavere enn normalt (cid:135)(cid:3)den ikke brukes hele året.
dersom:
Gode energivaner
Ved å følge enkle tips kan du redusere ditt energibehov, Energimerkingen kan kun endres gjennom fysiske endringer
men dette vil ikke påvirke boligens energimerke. på boligen.
Tips 1: Følg med på energibruken i boligen
Tips 2: Luft kort og effektivt
Tips 3: Redusér innetemperaturen
Tips 4: Bruk varmtvann fornuftig
Mulige forbedringer for boligens energistandard
Ut fra opplysningene som er oppgitt om boligen, Noen av tiltakene kan i tillegg være svært lønnsomme.
anbefales følgende energieffektiviserende tiltak. Dette Tiltakene bør spesielt vurderes ved modernisering av
er tiltak som kan gi bygningen et bedre energimerke. bygningen eller utskifting av teknisk utstyr.
Tiltaksliste (For full beskrivelse av tiltakene, se Tiltaksliste - vedlegg 1)
- Utføre service på ventilasjonsanlegg - Temperatur- og tidsstyring av panelovner
Det tas forbehold om at tiltakene er foreslått ut fra de med gjeldende lovverk, og det må tas hensyn til krav
opplysninger som er gitt om boligen. Fagfolk bør til godt inneklima og forebygging av fuktskader og
derfor kontaktes for å vurdere tiltakene nærmere. andre byggskader.
Eventuell gjennomføring av tiltak må skje i samsvar
152

--- Side 153 ---

Boligdata som er grunnlag for energimerket
Energimerket og andre data i denne attesten Der opplysninger ikke er oppgitt, brukes typiske stan-
er beregnet ut fra opplysninger som er gitt av boligeier dardverdier for den aktuelle bygningstypen. For mer
da attesten ble registrert. Nedenfor er en oversikt over informasjon om beregninger, se
oppgitte opplysninger, som boligeier er ansvarlig for. www.energimerking.no/beregninger
Registrering: Attest utstedt med enkel registrering.
Bygningskategori: Småhus
Bygningstype: Kjedet enebolig
Byggeår: 2015
Bygningsmateriale: Tre
BRA: 144
Ant. etg. med oppv. BRA: 2
Detaljert vegger: Nei
Detaljert vindu: Nei
Teknisk installasjon
Oppvarming: Elektrisitet
Varmepumpe
Ved
Varmepumpe: Henter varme fra ventilasjonsluft
Ventilasjon: Balansert
Detaljering varmesystem: Elektriske ovner og/eller varmekabler
Lukket peis eller ovn
153

--- Side 154 ---

Om grunnlaget for energiattesten
Oppgitte opplysninger om boligen kan finnes av aktuell attest under Offisielle energiattester i
ved å gå inn på www.energimerking.no, og logge skjermbildet "Valgt eiendom". Boligeier er ansvarlig
inn via ID-porten/Altinn. På siden "Eiendommer" kan du for at det blir brukt riktige opplysninger. Eventuelle gale
søke opp bygninger og hente fram energiattester som er opplysninger må derfor tas opp med selger eller utleier da
laget tidligere. For å se detaljer for en bolig hvor dette kan ha betydning for prisfastsettelsen.
det er brukt detaljert registrering må du velge "Gjenbruk" Det kan når som helst lage en ny energiattest.
Om energimerkeordningen
Enova er ansvarlig for energimerkeordingen. Energimerket Spørsmål om energiattesten, energimerkeordningen
beregnes på grunnlag av oppgitte opplysninger om eller gjennomføring av energieffektivisering og
boligen. For informasjon som ikke er oppgitt, brukes tilskuddsordninger kan rettes til Enova Svarer på
typiske standardverdier for den aktuelle bygningstypen tlf. 800 49 003 eller svarer@enova.no
fra tidsperioden den ble bygd i. Beregningsmetodene
for energikarakteren baserer seg på NS 3031 Plikten til energimerking er beskrevet i
(www.energimerking.no/NS3031) energimerkeforskriften (bygninger).
Nærmere opplysninger om energimerkeordningen
kan du finne på www.energimerking.no
For ytterligere råd og veiledning om effektiv energibruk, vennligst se www.enova.no/hjemme
eller ring Enova svarer på tlf. 800 49 003.
154

--- Side 155 ---

Tiltaksliste: Vedlegg til energiattesten
Attesten gjelder for følgende eiendom (Vedlegg 1)
Adresse: Gustav Granhaugs veg 85 A Gnr: 96
Postnr/Sted: 2070 Råholt Bnr: 615
Leilighetsnummer: Seksjonsnr: 10
Bolignr: Festenr:
Dato: 06.03.2018 14:07:58 Bygnnr:
Energimerkenummer: A2018-861322
Ansvarlig for energiattesten: Kjell Johnny Kristiansen
Energimerking er utført av: Ole-Magnus Kaksrud
Tiltak på luftbehandlingsanlegg
Tiltak 1: Utføre service på ventilasjonsanlegg
Balanserte ventilasjonsanlegg bør kontrolleres jevnlig for å sikre at de fungerer som de skal. Filtere bør skiftes jevnlig.
Tiltak på elektriske anlegg
Tiltak 2: Temperatur- og tidsstyring av panelovner
Evt. eldre elektriske varmeovner uten termostat skiftes ut med nye termostatregulerte ovner med tidsstyring, eller det ettermonteres
termostat / spareplugg på eksisterende ovn. Dersom mange ovner skiftes ut bør det vurderes et system hvor temperatur og
tidsinnstillinger i ulike rom i boligen styres fra en sentral enhet.
Brukertiltak
Tips 1: Følg med på energibruken i boligen
Gjør det til en vane å følge med energiforbruket. Les av måleren månedlig eller oftere for å være bevisst energibruken. Ca halvparten av
boligens energibruk går til oppvarming.
Tips 2: Luft kort og effektivt
Ikke la vinduer stå på gløtt over lengre tid. Luft heller kort og effektivt, da får du raskt skifta lufta i rommet og du unngår nedkjøling av
gulv, tak og vegger.
Tips 3: Redusér innetemperaturen
Ha en moderat innetemperatur, for hver grad temperatursenkning reduseres oppvarmingsbehovet med 5 %. Mennesker er også
varmekilder; jo flere gjester (cid:177)(cid:3)desto større grunn til å dempe varmen. Ha lavere temperatur i rom som brukes sjelden eller bare deler av
døgnet. Montér tetningslister rundt trekkfulle vinduer og dører (kan sjekkes ved bruk av myggspiral/røyk eller stearinlys). Sett ikke møbler
foran varmeovner, det hindrer varmen i å sirkulere. Trekk for gardiner og persienner om kvelden, det reduserer varmetap gjennom
vinduene.
Tips 4: Bruk varmtvann fornuftig
Bytt til sparedusj hvis du ikke har. For å finne ut om du bør bytte til sparedusj eller allerede har sparedusj kan du ta tiden på fylling av ei
vaskebøtte; nye sparedusjer har et forbruk på kun 9 liter per minutt. Ta dusj i stedet for karbad. Skift pakning på dryppende kraner.
Dersom varmtvannsberederen har nok kapasitet kan temperaturen i berederen reduseres til 70gr.
155

--- Side 156 ---

Tips 5: Slå av lyset og bruk sparepærer
Slå av lys i rom som ikke er i bruk. Utnytt dagslyset. Bruk sparepærer, spesielt til utelys og rom som er kalde eller bare delvis oppvarmet.
Tips 6: Vask med fulle maskiner
Fyll opp vaske- og oppvaskmaskinen før bruk. De fleste maskiner bruker like mye energi enten de er fulle eller ikke.
Tips 7: Slå el.apparater helt av
Elektriske apparater som har stand-by modus trekker strøm selv når de ikke er i bruk, og må derfor slås helt av.
Tips 8: Spar strøm på kjøkkenet
Ikke la vannet renne når du vasker opp eller skyller. Bruk kjeler med plan bunn som passer til platen, bruk lokk, kok ikke opp mer vann
enn nødvendig og slå ned varmen når det har begynt å koke. Slå av kjøkkenventilatoren når det ikke lenger er behov. Bruk av
microbølgeovn til mindre mengder mat er langt mer energisparende enn komfyren. Tin frossenmat i kjøleskapet. Kjøl- og frys skal
avrimes ved behov for å hindre unødvendig energibruk og for høy temperatur inne i skapet/boksen (nye kjølekap har ofte automatisk
avriming). Fjern støv på kjøleribber og kompressor på baksiden. Slå av kaffetraker når kaffen er ferdig traktet og bruk termos.
Oppvaskmaskinen har innebygde varmeelementer for oppvarming av vann og skal kobles til kaldvannet, kobles den til varmtvannet øker
energibruken med 20 - 40 % samtidig som enkelte vaske- og skylleprosesser foregår i feil temperatur.
Tips 9: Velg hvitevarer med lavt forbruk
Når du skal kjøpe nye hvitevarer så velg et produkt med lavt strømforbruk. Produktene deles inn i energiklasser fra A til G, hvor A er det
minst energikrevende. Mange produsenter tilbyr nå varer som går ekstra langt i å være energieffektive. A+ og det enda bedre A++ er
merkinger som har kommet for å skille de gode fra de ekstra gode produktene.
Tips 10: Fyr riktig med ved
Bruk tørr ved, god trekk, og legg ikke i for mye av gangen. Fyring i åpen peis er mest for kosens skyld. Hold spjeldet lukket når peisen
ikke er i bruk.
156

--- Side 157 ---

Grønt energilån
Pusse opp, etterisolere
eller bytte varmekilde?
Tenk energibesparende løsninger helt fra start, så
sparer du strøm og øker verdien på boligen din.
Vi hjelper deg med prosjektet ditt -
Grønt energilån for en mer
energieffektiv bolig
Les mer på
sb1ostlandet.no,
eller ring oss på
915 070 40.
Eff.rente ,3 %,
5 8
2 mill., o/25 år,
kostnad kr 1.593.715,
totalt kr 3.593.715.
157

--- Side 158 ---

Boligkjøperforsikring
Boligkjøperforsikring
Med vår boligkjøperforsikring får du en rettshjelpsforsikring
som dekker juridisk bistand i eventuelle reklamasjonssaker mot
selger. Med boligkjøperforsikring er du i trygge hender dersom du
oppdager feil eller mangler ved boligen du har kjøpt.
Hvis boligen du har kjøpt har feil eller mangler du
ikke ble gjort kjent med av selger eller megler, kan
det være både frustrerende, tidkrevende og kostbart.
Gjennom vår boligkjøperforsikring får du tilgang på
hjelp fra advokater, saksbehandlere og jurister som
er spesialiserte på eiendomskjøp. Forsikringen løper i
5 år etter overtakelsen, og dekker egne og eventuelle
idømte saksomkostninger.
Kostnader for reparasjon av eventuelle feil eller
mangler dekkes ikke av boligkjøperforsikringen. Slike
kostnader vil man kunne kreve dekket av selger dersom
eiendommen er mangelfull etter avhendingsloven.
Skjulte feil, tilbakeholdte opplysninger og/eller mangel-
fulle/uriktige opplysninger gir grunnlag for henven-
delse. Våre saksbehandlere vil da vurdere det rettslige
grunnlaget basert på informasjonen som er mottatt.
Fordeler
Du trenger ikke betale saksomkostninger
En boligkjøperforsikrings hovedfunksjon er å dekke
eventuelle saksomkostninger knyttet til en klage på
boligkjøpet. Dette inkluderer kostnader til advokat
og eventuelle rapporter som må utføres. Forsikringen Hva koster forsikringen?
dekker beløpet enten du taper eller vinner. Forsikringspremien trekkes i oppgjøret.
Forsikringen har ikke et tak
Andel: kr 8 600
Mens en vanlig innbo- og husforsikring vanligvis har et
Seksjonert bolig kr 12 500
tak på rundt kr 100 000 og en egenandel på ca. 20 %,
Enebolig/fritid/tomt: kr 17 900
så trenger du med boligkjøperforsikring ikke å bekymre
deg for beløpet på saksomkostningene. Dette dekkes
av forsikringsselskapet uansett hvor høyt det blir.
Den gir deg en ekstra trygghet
Er du bekymret for at du kanskje kan komme i konflikt
med boligselger og at du ikke har råd eller lyst til å
dekke sakskostnader, kan det være betryggende å
kjøpe en boligkjøperforsikring. Selger har i de fleste
soderbergpartners.no/eiendom
tilfeller tilgang til prosfesjonell hjelp, da bør du som
kjøper av bolig også ha det.
158

--- Side 159 ---

Boligkjøperforsikring
Dersom du ønsker å tegne boligkjøperforsikring, vil Partners (kr 688 for borettslagseiendom, kr 1 000 for
dette være en omkostning ved kjøpet og premien seksjonert eiendom/aksjebolig og kr 1 432 for ene-
finansieres gjennom din boligfinansiering. bolig/fritid/tomt) samt fakturagebyr, er medregnet
i premie tabellen ovenfor, slik at du kun betaler den
Både distribusjonskostnad til EiendomsMegler 1 oppgitte premien.
Østlandet (kr 4 873 for Borettslags eiendom, kr 6
856 for seksjonert eiendom/aksjebolig og kr 7 709 Det tas forbehold om pris- og vilkårsendringer.
for enebolig/fritid/tomt) og honorar til Söderberg &
Produkt og leverandørinformasjon
Forsikringen er plassert hos Gar-Bo Försäkring AB og Klage
er formidlet gjennom Söderberg & Partners. Söderberg & Partners har fremforhandlet den beste
løsningen for boligkjøperforsikring for våre kunder.
Söderberg & Partners er en uavhengig og objektiv Dersom du er misfornøyd med forsikringsmeglerens
forsikringsmegler med konsesjon fra Finanstilsynet og tjenester kan du sende inn en klage. Klagen sendes
er oppført i Finanstilsynets virksomhetsregister. per e-post til klage@soderbergpartners.no eller per
brev til Söderberg & Partners, Postboks 324, 1326
Boligkjøperforsikringen gjelder for kjøp av eiendom LYSAKER v/klageansvarlig.
solgt etter avhendingsloven.
Söderberg & Partners vil bekrefte at klagen er mottatt
Forsikringen kan ikke tegnes dersom boligen kjøpes og registrert senest innen 5 virkedager, og klagen skal
som ledd i egen næringsvirksomhet, mellom personer være ferdig behandlet senest innen 8 uker. Dersom
som bor eller har bodd på boligeiendommen eller du ikke er fornøyd med vurderingen av den fremsatte
kjøpes fra nærstående. Som nær stående regnes fami- klagen, er det anledning for å fremlegge saken til
lie i opp- og ned stigende linje, samt søsken. Forsikrin- vurdering hos en uavhengig nemnd:
gen kan ikke tegnes ved kjøp av næringseiendom, Klagenemnda for forsikrings- og gjenforsikrings-
eller obligasjons leilighet. meglingsvirksomhet, Sekretariatet v/Finanstilsynet,
Postboks 1187
Crawford & Company er spesialister på avhend- Sentrum. 0107 Oslo.
ingsrett og vil på vegne av forsikringsselskapet bistå
deg dersom du oppdager en mangel ved boligen du
nettopp har kjøpt.
Spørsmål om forsikringen
Jeg samtykker til at informasjon om min forsikring Söderberg & Partners (org.nr 965 575 162)
kan brukes til statistiske formål av Söderberg & Part- Postboks 324
ners. Informasjonen skal kun brukes som beregnings- 1326 Lysaker
grunnlag for forsikringsformål, og er alltid anonymi- Tlf. 93 00 00 20
sert. Informasjon kan ikke overleveres til tredjepart. boligkjoperforsikring@soderbergpartners.com
soderbergpartners.no/eiendom
Garantifond for skadeforsikring
Garantifondet har til hensikt å sikre forsikringstak- Skade/krav
ere dersom forsikringsselskapet ikke er i stand til å Crawford & Company
oppfylle sine betalingsforpliktelser. Garantiordningen Postboks 133
omfatter kun forsikringsselskap som har hjemstat, 1338 Sandvika
eller har etablert filial, i Norge. Forsikringsgiver for Tlf. 67 20 91 44 |
boligkjøperforsikring er Gar-Bo Försäkring AB, som boligkjoperforsikring@crawco.no
ikke er omfattet av Garantiordningen. Det er ingen www.kjoperforsikring.com
tilsvarende garantiordning i hjemstaten til forsikrings-
selskapet.
159

--- Side 160 ---

Boligeierfordelen
(cid:18)w(cid:3)0(cid:27)(cid:11)(cid:128)&(cid:27)--(cid:27)|(cid:11)(cid:137)w||(cid:11)-(cid:27)(cid:137)(cid:11)
peZw(cid:2)(cid:27)w(cid:27)0(cid:1)e0(cid:137)(cid:27)Z(cid:27)@
fjlonlh^Violcgnldlba‘‘olYj^[_liohlXg^jhojoncgnio^o‘lqm
o‘la‘jblcgnio^l]gWlhjnliohlUQlLng]o‘YlnV[VYYlLdl
[g^jhcgn]jbnj‘hlioYlckn]YoldnoYAl‘dnlial=VnlbFkLYl[g^jhl
h7o‘‘gWl\jo‘igW]2oh^onlC
(cid:30)(cid:26)(cid:6)(cid:24)(cid:14)(cid:6)(cid:24)(cid:22)(cid:26)(cid:13)(cid:10)(cid:132)(cid:13)(cid:22)(cid:142)(cid:6)(cid:10)(cid:29)(cid:132)(cid:13)(cid:29)(cid:13)(cid:24)(cid:14)(cid:6)(cid:24)(cid:4)(cid:13)(cid:10)(cid:13)(cid:139)(cid:138)
(cid:134) (cid:145)(cid:133)(cid:21)(cid:8)(cid:23)(cid:7)(cid:130)(cid:12)(cid:140)(cid:129)(cid:21)(cid:23)(cid:17)(cid:127)(cid:17)(cid:129)(cid:129)(cid:21)(cid:8)~(cid:21)(cid:15)(cid:7)(cid:23)(cid:130)(cid:28)(cid:136)(cid:23)(cid:28)(cid:140)(cid:131)(cid:12)(cid:140)lioYlckn]YoldnoYAl‘dnl ,)’*$(%l"’##!l+l (% (cid:31)
ialbFkLonl[g^jhlh7o‘‘gWl\jo‘igW]2oh^onlCzl}V[VYYo‘l
h7o^ionlij‘l‘_ol[g^jhlghlonlaVv=o‘hjhlVvl=vj^bo‘l
4yfo^hl6<;>9:<91?8536ljlgLLh7kn]]bFoWVoYlial
iob‘j‘hlialvo^honlLdl[g^jhcgn]jbnj‘ho‘lij‘zl\YYonlCUl
c_^^onlaYloYYonlVYlial=VnlbFkLYl[g^jho‘z(cid:20)
Wd‘oionlcgn‘_onlvjlcgn]jbnj‘ho‘lYj^lgnij‘(cid:5)nlLnj]AlWo‘lial
[o=g^ionl]VW^o{lghl[V‘bnV[VYYo‘y /y\‘lndihjvonlcnVlrLVnoXV‘blClbg‘YVbYonliohl
cgnldl]oYYolgLLlo‘lcgn]jbnj‘h]VvYV^oy
(cid:134) u(cid:135)(cid:9)(cid:9)(cid:21)(cid:129)(cid:23)(cid:16)(cid:131)(cid:131)t(cid:12)(cid:129)(cid:21)(cid:15)(cid:23)(cid:17)(cid:21)(cid:144)(cid:17)(cid:131)(cid:21)x(cid:140)(cid:21)(cid:15)(cid:7)(cid:23)(cid:144)(cid:28)lcgn]jbnj‘ho‘lij‘liobbonl
V^YlcnVl]bVionlLdl=a]lghlj‘‘[gAlYj^lacgnaY]oYYol=o‘io^]onl .y2oilcgn]jbnj‘ho‘lLdlL^V]]Al=Vnlialcgn]jbnj‘hl
]gWlvV‘‘^obbV]FonAlY_vonjlghl‘VYan]bVionzl(cid:20) WoilUQlLng]o‘YlnV[VYYlioYlckn]YoldnoYz
(cid:134) (cid:141)(cid:12)(cid:130)(cid:136)(cid:16)(cid:129)(cid:129)(cid:12)(cid:9)(cid:130)(cid:12)(cid:21)(cid:17)(cid:25)(cid:21)(cid:12)(cid:28)(cid:12)(cid:140)(cid:144)(cid:12)(cid:9)(cid:12)(cid:140)(cid:12)(cid:21)(cid:144)(cid:28)(cid:140)(cid:12)(cid:21)(cid:135)(cid:140)(cid:144)(cid:12)(cid:23)(cid:21)(cid:15)(cid:9)(cid:16)(cid:129)(cid:129)(cid:28)(cid:140)(cid:131)l]^jblVYlial
cdnliobboYlbg]Y‘Vionlb‘_YYoYlYj^lovo‘Yao^^ol]bVionlo^^onl
YVLl]gWlbV‘lgLL]Ydljlc^_YYoLng]o]]o‘zl(cid:20) THOSGORSGONEGOMORPSKJSOISD
(cid:134) s(cid:17)(cid:130)(cid:136)(cid:21)(cid:7)(cid:8)(cid:8)(cid:15)(cid:143)(cid:9)(cid:131)(cid:28)(cid:140)(cid:131)lcnVlndihjvonljlrLVnoXV‘blCl]gWlYVnl fjljlrLVnoXV‘blClonlgLLYVYYlVvlVYl=vonl[g^jhlghl=vonlba‘iol
bg‘YVbYlWoiliohlj‘‘o‘lYnolvjnboiVhon(cid:19)oYYonlVYlial=Vnl onla‘jbzlBoncgnlYVnlvjlg]]lYjilYj^ldlhdlh7o‘‘gWll
c_^YlaYlgLLh7kn]]bFoWVoYzl}dihjvono‘l]knhonlcgnlVYl cgn]jbnj‘h][o=gvo‘olij‘ozl\YYonlo‘(cid:19)bgnYl]VWYV^olWoilg]]Al
[g^jho‘lij‘l[^jn(cid:19)cgn]jbnoYlWoilio‘l[o]Yoliob‘j‘ho‘lYj^l bV‘lialck^oliohlYn_hhlLdlVYlial=Vnlio‘liob‘j‘ho‘l]gWlonl
io‘l[o]YolLnj]o‘AlghlVYlbgnnobYlnV[VYYlonl^VhYlj‘‘z(cid:19) [o]YlcgnliohlghlioYl‘_ol=FoWWoYlijYYz
160

--- Side 161 ---












 
 

 
 
 

 
 
 
 
 
(cid:621)(cid:432)(cid:316)(cid:432)(cid:488)(cid:398)(cid:359)(cid:480)(cid:398)(cid:432)(cid:385)(cid:488)(cid:477)(cid:421)(cid:316)(cid:432)(cid:1006)(cid:1093)(cid:316)(cid:418)(cid:488)(cid:359)(cid:477)(cid:501)(cid:384)(cid:480)(cid:398)(cid:488)(cid:501)(cid:1006)(cid:1093)(cid:442)(cid:532)(cid:359)(cid:480)(cid:501)(cid:316)(cid:418)(cid:359)(cid:421)(cid:488)(cid:359)(cid:488)(cid:351)(cid:316)(cid:501)(cid:442)(cid:1093)(cid:442)(cid:385) 
 
(cid:621)(cid:432)(cid:316)(cid:432)(cid:488)(cid:398)(cid:359)(cid:480)(cid:398)(cid:432)(cid:385)(cid:1006)(cid:1093)(cid:488) 
 
 




















 
 


 
 
 

 
(cid:343)(cid:470)(cid:480)(cid:1093)(cid:351)(cid:359)(cid:480)(cid:384)(cid:442)(cid:480)(cid:1093)(cid:398)(cid:418)(cid:418)(cid:359)(cid:1093)(cid:385)(cid:398)(cid:1093)(cid:343)(cid:509)(cid:351)(cid:1093)(cid:477)(cid:338)(cid:1093)(cid:622)(cid:359)(cid:480)(cid:359)(cid:1093)(cid:359)(cid:398)(cid:359)(cid:432)(cid:351)(cid:442)(cid:430)(cid:430)(cid:359)(cid:480)(cid:1093)(cid:488)(cid:316)(cid:430)(cid:501)(cid:398)(cid:351)(cid:398)(cid:385) 
(cid:351)(cid:359)(cid:480)(cid:488)(cid:442)(cid:430)(cid:1093)(cid:430)(cid:316)(cid:432)(cid:1093)(cid:398)(cid:418)(cid:418)(cid:359)(cid:1093)(cid:470)(cid:432)(cid:488)(cid:418)(cid:359)(cid:480)(cid:1093)(cid:338)(cid:1093)(cid:418)(cid:415)(cid:470)(cid:477)(cid:359)(cid:1093)(cid:622)(cid:359)(cid:480)(cid:359)(cid:1093)(cid:359)(cid:432)(cid:432)(cid:1093)(cid:359)(cid:432)(cid:1093)(cid:359)(cid:398)(cid:359)(cid:432)(cid:351)(cid:442)(cid:430)(cid:1005) 

161

--- Side 162 ---

Budskjema
Bindende bud på eiendommen
Gustav Granhaugs veg 85A, 2070 RÅHOLT
Gnr 96, bnr 615, snr 10, , i Sameiet Bekkedalshøgda med orgnr.: 925258296 i Eidsvoll kommune.
Oppdragsnr. 6032261899
Bud stort kr.:
(I tillegg kommer omkostninger iht. salgsoppgaven. Evt. andel fellesgjeld kommer i tillegg til budet).
Eventuelle forbehold:
Ønsket overtagelsesdato: / Akseptfrist: / kl.:
Finansieringsplan
Lån i v/ tlf. kr
Lån i v/ tlf. kr
Egenkapital i v/ tlf. kr
Hvor kommer egenkapitalen fra?:
(salg av bolig, BSU, bankinnskudd, oppsparte midler)
Jeg/vi ønsker 昀椀nansieringstilbud fra SpareBank 1: Ja Nei
Jeg/vi ønsker verdivurdering fra EiendomsMegler 1 Ja Nei
Jeg gir bud som: Forbruker Ledd i næringsvirksomhet/juridisk person (selskap)
Forbruker: Med forbruker menes en fysisk person som ikke hovedsakelig handler som ledd i næringsvirksomhet.
Ledd i næringsvirksomhet/juridisk person (selskap): Der kjøper er en privatperson kan man likevel anses for å kjøpe eiendommen som ledd
i næringsvirksomhet. Dette kan for eksempel være der en privatperson kjøper bolig for utleie/salg, og driver med dette i et slikt omfang
at virksomheten blir ansett for å være næringsvirksomhet. Dersom du representerer en juridisk person (selskap) som skal stå som kjøper
av eiendommen skal dette alternativet velges. Dersom du er i tvil om du anses som forbruker eller for å kjøpe eiendommen som ledd i
næringsvirksomhet bes det om at du tar kontakt med megler på oppdraget.
Undertegnede bekrefter med dette å ha lest salgsoppgaven med tilhørende vedlegg, samt å ha besiktiget eiendommen.
Budet er avgitt iht. de avtalebetingelser som fremgår av salgsoppgaven. Undertegnede er kjent med forbrukerinformasjon om budgivning.
Budgiverne samtykker i at hver av partene forplikter hverandre i forbindelse med endring/inngivelse av bud og/eller vilkår.
EiendomsMegler 1 anbefaler bruk av Gi Bud-funksjonen som er tilgjengelig på eiendomsmegler1.no og Finn.no. Alternativt kan budskjema
printes, fylles ut, signeres, leveres vårt kontor, eller skannes og sendes pr. e-post til megler eller meglerkontor. Vi anbefaler at budet sendes
kryptert hvis det sendes pr. e-post. Uavhengig av forsendelsesmetode må du ringe megler og forsikre deg om at budet er mottatt.
Budgiver 1 Budgiver 2
Navn: Navn:
Fødselsnr.: Fødselsnr.:
Tlf.: Mobil: Tlf.: Mobil:
E-post: E-post:
Adresse: Adresse:
Postadr.: Postadr.:
Sted/Dato: Sted/Dato:
Underskrift: Underskrift:
Budgiver 1: Kopi av gyldig legitimasjon (f.eks. førerkort) Budgiver 2: Kopi av gyldig legitimasjon (f.eks. førerkort)
EiendomsMegler 1 Østlandet avd. Nybygg, 0102 Youngstorget 5 T: E: nybygg@em1ostlandet.no

--- Side 163 ---

Notater
163

--- Side 164 ---

Visste du at...
Du har mange fordeler
gjennom EiendomsMegler 1,
enten du er boligkjøper eller boligselger.
Ta kontakt med oss for å høre mer.
164

--- Side 165 ---



--- Side 166 ---

Oppdragsnummer 6032261899
Sist oppdatert 01.02.2026
Cathrine Gundersen EiendomsMegler 1 Østlandet AS
eiendomsmegler ‑ En del av SpareBank 1 Østlandet
Telefon: 456 13 442
E‑post: cathrine.gundersen@em1ostlandet.no
eiendomsmegler1.no

## Response
[tool_use: annotate_risks]
{}

## Raw Response
```json
{
  "id": "msg_01TMy8UehftGRtC8Jhwr8B3W",
  "container": null,
  "content": [
    {
      "id": "toolu_01WDNYDQceWdGxLRoyLRUr4Q",
      "caller": {
        "type": "direct"
      },
      "input": {},
      "name": "annotate_risks",
      "type": "tool_use"
    }
  ],
  "model": "claude-sonnet-4-6",
  "role": "assistant",
  "stop_reason": "max_tokens",
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
    "input_tokens": 77352,
    "output_tokens": 8192,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
