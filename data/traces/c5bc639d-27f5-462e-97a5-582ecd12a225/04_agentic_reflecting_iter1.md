# Trace: agentic_reflecting_iter1
- **Run ID:** c5bc639d-27f5-462e-97a5-582ecd12a225
- **Tidspunkt:** 2026-03-25T22:13:10.715933+00:00
- **Varighet:** 98.95s
- **Input tokens:** 18769
- **Output tokens:** 4885

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
Risiko 1: Krypekjeller med alvorlige fuktproblemer (TG3) – fritt vann på grunnen, tilsig av fukt, søyler i kontakt med vann, ingen dampsperre. Strakstiltak nødvendig.
  Confidence: 0.98
  Evidens: Det observeres tilsig av fukt og fritt vann på grunnen.; Enkelte søyler har kontakt med fritt vann som kan føre til oppsug av vann med forkortet levetid og skader som resultat.; Det er ingen dampsperre mot grunnen. Krypkjellere er en risikokonstruksjon. Strakstiltak vurderes som nødvendig.; Det bør gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand.; Sjablongmessig prisanslag: kr 10 000 - 50 000

Risiko 2: Fuktproblematikk i drenering (TG2) – symptomer på fuktproblematikk observert fra innsiden. Bør ses i sammenheng med krypekjeller. Ytterligere undersøkelser anbefales.
  Confidence: 0.92
  Evidens: Fra innsiden observeres symptomer på fuktproblematikk. Vann fra yttertaket bør ses i sammenheng med avsnitt 'Krypekjeller'.; Basert på alle ovennevnte forhold bør det gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand og hvilke tiltak som eventuelt skulle være nødvendig.

Risiko 3: Fundamenter ikke tilgjengelig for undersøkelse – tilstand og utførelse kunne ikke kontrolleres. Ukjent byggegrunn øker risikoen.
  Confidence: 0.88
  Evidens: Fundamentene var ikke tilgjengelig for undersøkelser, slik at utførelsen/tilstanden ikke lot seg kontrollere. Se også punkt om krypkjeller.; Fundamentert på ukjent byggegrunn.

Risiko 4: Yttertak ikke besiktiget – restlevetid ukjent. Taket er tekket med shingel og er ikke undersøkt innvendig eller utvendig fra tett hold.
  Confidence: 0.87
  Evidens: Saltak i trekonstruksjoner (ikke besiktiget).; Undersøkelse krever stillas. Jevnlig ettersyn anbefales. Restlevetiden er ikke kjent.

Risiko 5: Ulovlig/ikke godkjent bygningsmessig endring – soverom utvidet ved fjerning av vegg mot kott uten søknad eller godkjenning. Kjøper overtar ansvar og risiko.
  Confidence: 0.95
  Evidens: Ett av soverommene er utvidet ved at vegg mot tidligere kott er fjernet, slik at arealet er tatt i bruk som en del av soverommet. Dette er et søknadpliktig tiltak og megler har ikke fått opplysninger eller dokumentasjon som viser at dette er søkt om eller godkjent.; Boligen er opprinnelig godkjent med 3 soverom.; Kjøper overtar ansvar og risiko for nevnte forhold.

Risiko 6: Tilbygg uten fullstendige godkjente tegninger – ferdigattest foreligger for tilbygg (1985/1987), men ingen innvendige tegninger med rombeskrivelse. Dagens bruk kan avvike fra godkjent utforming.
  Confidence: 0.9
  Evidens: Det er oppført et tilbygg til bolig som ikke er vist på tegningene. Det foreligger en ferdigattest for tilbygg til bolig datert 1985, men det følger ingen innvendige tegninger av tilbygget hvor rommene er beskrevet.; Megler har derfor ikke hatt mulighet til å kontrollere eller sammenligne tilbyggets godkjente utforming med dagens bruk eller planløsning.; Det foreligger tegninger fra kommunen datert 1969. Disse samsvarer ikke med dagens bruk av boligen.

Risiko 7: Manglende samsvarserklæring for elektrisk anlegg – samsvarserklæring ikke fremlagt på befaringstidspunktet. Forbehold om at andre arbeider kan mangle erklæring.
  Confidence: 0.9
  Evidens: Elektriske anlegg utført etter 1999-01-01: Samsvarserklæring er ikke fremlagt på befaringstidspunktet.; Det tas forbehold om at det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring.

Risiko 8: Ufaglært arbeid på terrasse, carport-tak, bordkledning/etterisolering og vinduer – alt utført av selger selv i 2023 uten dokumentasjon på faglig utførelse.
  Confidence: 0.88
  Evidens: Ny veranda 2023. Nytt carport tak 2023. Byttet bordkledning, etterisolert med 5cm. I 2023. Nye vinduer i 2023.; Arbeid utført av: Meg selv.

Risiko 9: Eiendommen ligger i støysone (gul sone iht. T-1442) og har byggeforbud rundt veg, bane og flyplass. Dette kan påvirke fremtidig bruk og verdi.
  Confidence: 0.92
  Evidens: Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming, gul sone iht. T-1442 og byggeforbud rundt veg, bane og flyplass.; KPSikring: Byggeforbud rundt veg, bane og flyplass.; KPStøy: Gul sone iht. T-1442.

Risiko 10: Eiendommen er avsatt til omforming i kommuneplanen – fremtidig arealbruk kan endres, noe som kan påvirke nabolaget og eiendommens omgivelser.
  Confidence: 0.8
  Evidens: Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming.; KPGjennomføring: Omforming.; Kommuneplanens arealdel-2022 har status Planforslag.

Risiko 11: Ingen radonmåling utført – selger har ikke foretatt radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre boliger med krypekjeller.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei.

Risiko 12: Utvendige vann- og avløpsledninger fra ukjent årstall – alder og tilstand på stikkledninger er ukjent, noe som kan medføre uforutsette kostnader.
  Confidence: 0.78
  Evidens: Utvendige vann- og avløpsledninger er fra ukjent årstall.; Boligen har private stikkledninger tilknyttet kommunalt vann og avløp.

Risiko 13: Boligen er fra 1971 og har ikke ferdigattest – kun innflyttingstillatelse. Ulovlig oppførte tiltak fra denne perioden blir ikke automatisk lovlige.
  Confidence: 0.8
  Evidens: Det er utstedt innflyttingstillatelse for nybygg av 12 boliger datert 04.06.1971.; Jf. plan- og bygningsloven § 21-10 (5) utstedes det ikke lengre ferdigattest for tiltak det er søkt om før 01.01.1998. Dette innebærer at byggverkene lovlig kan brukes og omsettes uten at det foreligger ferdigattest. Det betyr imidlertid ikke at ulovlige bygde tiltak blir lovlige.

Risiko 14: Selger har kun eid boligen i ca. 3,5 år – begrenset kjennskap til boligens historikk og eventuelle skjulte feil fra tidligere eiere.
  Confidence: 0.72
  Evidens: Når kjøpte du boligen? År 2022.; Antall år 3, Antall måneder 6.

Dokumentkontekst:
[d188_d188 | Side [1]]
 rom i hver etasje
(eventuelt kryssmåling i ett rom), og i hvert rom er det 5 målepunkter. Stikkprøveprinsippet er benyttet.
I rapporten har alle TG 2, TG 3 og TG IU kommentarer for bedre forståelse. De sjekkpunkter som har fått TG 0 og 1 (ikke funnet funksjonssvikt) er
listet opp horisontalt i starten av hvert hovedelement. Hovedhensikten med denne tilstandsrapporten er å bidra til å vurdere boligens tilstand,
oppfylle selgers opplysningsplikt overfor kjøper av boligen, og gi den bygningssakkyndiges

---

[d188_d188 | Side [1]]
gsplikt overfor kjøper av boligen, og gi den bygningssakkyndiges faglige vurderinger som gjelder byggetekniske forhold for
boligen, som kjøper anbefales være spesielt oppmerksom på.
Forklaring av tilstandsgrader
Tilstandsgrader, forkortet til TG, beskriver på en enkel og visuell måte en tilstand eller en risiko opp mot referansenivå. I tillegg til graderingen med
tall, benyttes trafikklysets prinsipp med fargene grønt, gult og rødt.
TG 0 og TG 1 benyttes når tiltak vurderes som ikke nødvendig. Alle TG 2 og

---

[d188_d188 | Side [1]]
rapporten
Tilstandsrapporten viser hva som har blitt undersøkt i forbindelse med den bygningssakkyndiges besiktigelse av eiendommen. Om ikke annet er
kommentert består undersøkelsene av visuelle observasjoner.
Rapporten er utarbeidet i henhold til forskrift til avhendingslova (tryggere bolighandel), gjeldende fra 1. januar 2022. Norsk Standard 3600:2018 er
også lagt til grunn, men ikke alle standardens bestemmelser er tatt med. Dette gjelder for eksempel følgende bestemmelser:
• 9 - Gjennomgang av

---

[d188_d188 | Side [1]]
 ikke oppdaget)
Tilstandsgrad 1 gis når bygningsdelen har mindre avvik. Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler
TG 2 Vesentlige avvik (alder, slitasje, skader mv.)
Tilstandsgrad 2 gis når bygningsdelen har vesentlige avvik. Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
slitasje eller nedsatt funksjon. Graden gis når

---

[d188_d188 | Side [1]]
gate 46, 7506 STJØRDAL Side 2/17
55

## Side 56

Vurderinger for tilstandsgrader, hentet fra forskrift til avhendingsloven:
TG 0 Ingen avvik (funksjonssvikt ikke oppdaget)
Tilstandsgrad 0 gis når bygningsdelen ikke har noen avvik. Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
TG 1 Mindre eller moderate avvik (funksjonssvikt ikke oppdaget)
Tilstandsgrad 1 gis når bygningsdelen har mindre

---

[d188_d188 | Side [1]]
or
Tilstandsgrad TG 2 (gul farge) benyttes i flere sammenhenger, blant
gyldighetsperioden på 12 måneder, må det innhentes skriftlig tillatelse
annet for å synliggjøre at enkelte bygningselementer ikke er nye (eldre
fra Anticimex AS.
boliger) og således derfor har naturlig og påregnelig slitasje. Det vil si at
gul farge nødvendigvis ikke alltid betyr at det gis et varsel om at noe er Eksempler på hva rapporten ikke vurderer
direkte feil eller har større bygningsskader, men en framskreden
brukstid der

---

[d188_d188 | Side [1]]
lse av arbeidet: Ny veranda avvik. Rapporten, sammen med selgers egenerklæring,
er vedlagt salgsoppgaven. Det er viktig at interessenter
2. Hvilket år ble jobben fullført?: 2023 grundig gjennomgår disse dokumentene før bud legges
Beskrivelse av arbeidet: Nytt carport tak inn.
3. Hvilket år ble jobben fullført?: 2023 All informasjon i tilstandsrapporten anses som kjent for
Beskrivelse av arbeidet: Byttet bordkledning, etterisolert kjøper, og det vil ikke være mulig å reklamere på forhold
med 5cm som er

---

[d188_d188 | Side [1]]
 likevel herunder
TG 2 kan også bety en feil eller skade! f.eks. avstand til brennbare materialer) og ildsteder.
I tillegg til å beskrive elde/naturlig slitasje, benyttes TG 2 også når det Rapporten må ikke oppfattes som en garanti eller en fullstendig
faktisk oppdages feil og skader der tiltak er nødvendige og anbefales. beskrivelse av boligens tilstand. Besiktigelsen baseres på
Omfanget av tiltakene kan være høyst forskjellige, fra å holde noe stikkprøveprinsippet og hovedsakelig med visuell

---

[d188_d188 | Side [1]]
 på skade, sterk
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid.
Graden skal også brukes når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn til å
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TG 3 Store eller alvorlige avvik (strakstiltak nødvendig)
Tilstandsgrad 3 gis når bygningsdelen har store eller alvorlige avvik. Bygningsdelen har kraftige

---

[d188_d188 | Side [1]]
 det foreligger skaderapporter/ Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsvurderinger eller utførte målinger? tilstandsrapporten:
Ja.
Beskrivelse: Tilstandsrapport. Bygningsdeler med TG3:
‑ Krypekjeller ‑ Innvendig inspeksjon | Vurderingene er
kun gjort via luke i grunnmuren. Det observeres tilsig av
Samsvarserklæring: fukt og fritt vann på grunnen. Enkelte søyler har kontakt
Det fremgår av selgers egenerklæringsskjema at det med fritt vann som kan føre til oppsug av vann

---

[d188_d188 | Side [1]]
oligens tilstandsgrad
78 % 6 % 2 % 14 %
TG 1 i orden TG 2 Alder, slitasje, skader mv. TG 3 Strakstiltak nødvendig TGIU Ikke undersøkt
Element Status Kontrollpunkt Side Sjablongmessig prisanslag
Krypekjeller Utvendig inspeksjon 10
Innvendig inspeksjon 10 Kr 10 000 - 50 000
Yttertak Helhetsvurdering 12
Grunnmur, fundamenter Fundamenter 14
Drenering Helhetsvurdering 14
Frittstående byggverk Helhetsvurdering 14
EIENDOM |15071255, Mathias Lunds gate 46, 7506 STJØRDAL Side 5/17
58

## Side

---

[d188_d188 | Side [1]]
og det vil ikke være mulig å reklamere på forhold
med 5cm som er nevnt i rapporten. Spesielt forhold som er vurdert
med TG2 og TG3 bør vurderes nøye, da de indikerer
4. Hvilket år ble jobben fullført?: 2023 avvik fra normal slitasje og/ eller høy alder, noe som kan
Beskrivelse av arbeidet: Nye vinduer innebære behov for utbedringer. Bygningsdeler som er
Utført av: Meg selv merket med TGIU er ikke blitt vurdert av takstmannen.
Kjenner du til om det foreligger skaderapporter/ Beskrivelsen av boligen nedenfor

---

[d188_d188 | Side [1]]
e er tilkoblet kommunal forsyning
Egenerklæringsskjema Fremlagt, signert og datert 20.06.2025.
EIENDOM |15071255, Mathias Lunds gate 46, 7506 STJØRDAL Side 15/17
68

## Side 69

Viktig om TG 2 Gyldighet
Rapporten skal ikke være eldre enn 12 måneder (fra befaringsdato). Er
TG 2 beskriver også elde/naturlig slitasje
rapporten eldre enn dette må Anticimex AS kontaktes angående videre
bruk. Hvis rapporten skal benyttes ved videresalg innenfor
Tilstandsgrad TG 2 (gul farge) benyttes i flere sammenhenger,

---

[d188_d188 | Side [1]]
test?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse Tilstandsrapport
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: IO, TAK 3
41006250
:ecnerefer
tnemucoD
51

## Side 52

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige,

---

[d188_d188 | Side [1]]
oligen tross alt bruksslitasjer. Helt normale og påregnelige
har tilfredsstillende og forsvarlig inspeksjonsmulighet.
vedlikeholdstiltak og kostnader må det alltid tas høyde for når
bygningselementer når en viss alder. Ytterligere noen eksempler på hva den bygningssakkyndige ikke
vurderer:
Når en rapport inneholder mange TG 2, trenger dermed ikke det være Eventuelle tilhørende bruksrettigheter på annens eiendom, herunder
«farlig». De fleste boliger i Norge er av eldre årgang og for eksempel naust og

---

[d188_d188 | Side [1]]
ygningssakkyndige på egen selvstendig vurdering anser
er kanskje ikke skiftet siden byggeår. Av den grunn vil disse kunne få en den som forsvarlig å bruke. I andre tilfeller besiktiges yttertaket fra
TG 2 (gul farge) for å gi beskjed til kjøpere om å være oppmerksomme bakkenivå og inne fra loftet.
på at selv om husets synlige overflater fremstår uten svekkelser, har
Krypekjeller og krypeloft inspiseres der det er klargjort for det, og ellers
boligen tross alt bruksslitasjer. Helt normale og påregnelige
har

---

[d188_d188 | Side [1]]
elen har store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med
trenger utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt eller sammenbrudd.
Sjablongmessig prisanslag er gitt på generelt grunnlag og må ikke ses på som et pristilbud fra håndverker. Kostnader ved utbedring avhenger av
personlige valg av utførelse og produkter. Markedspris på materialer, produkter og håndverkertjenester vil også innvirke på utbedringskostnaden.

---

[d188_d188 | Side [1]]
sjoner. Bygget er oppført med
krypkjeller med inngang via luke i bjelkelag. Boligen er på
Kjenner du til om det har vært utført arbeid på terrasse/ ett plan samt kaldtloft.
garasje/t ak/ fasade?
Ja. I forbindelse med salget er det blitt utført en
Faglært og ufaglært arbeid: tilstandsrapport av en bygningssakkyndig, som gir en
1. Hvilket år ble jobben fullført?: 2023 teknisk gjennomgang av boligen og påpeker eventuelle
Beskrivelse av arbeidet: Ny veranda avvik. Rapporten, sammen med selgers

---

[d188_d188 | Side [1]]
er og tilstand som viser tegn til
synlig slitasje/ elde, noe som medfører risiko for skjulte
Oppvarming
avvik og svekket funksjon. Restlevetiden er usikker.
Ytterligere undersøkelser av fagkyndige bør Boligen har følgende oppvarmingskilder:
gjennomføres for å kartlegge tilstand og nødvendige ‑ Varmepumpe
tiltak. ‑ Elektrisk
Opplistingen over er ikke uttømmende. Interessenter Hvis et rom på visningen mangler fast installert
oppfordres til å sette seg inn i tilstandsrapporten som oppvarmingskilde, vil ikke

---

[d188_d188 | Side [1]]
sert på avhendingsloven. Annen relevant bygningsteknisk erfaring og forståelse er også lagt til
grunn, herunder forhold som har registrerte høye klagefrekvenser og/eller skadesaker.
Bagatellmessige og åpenbare forhold som er synlige for enhver og ikke har vesentlig bygningsmessig betydning, er normalt ikke omtalt.
Gulv mot grunn og etasjeskillere kontrolleres ved bruk av krysslaser for eventuelle skjevheter. I utgangspunktet kontrolleres to rom i hver etasje
(eventuelt kryssmåling i ett rom), og i hvert

---

[d188_d188 | Side [1]]
senter til å gjøre seg kjent med disse. standard kjøpekontrakten som er utarbeidet av Emera i
forbindelse med eiendomshandler. Kjøpekontrakten kan
gjennomgås hos eiendomsmegleren før budet legges
Tinglyste heftelser
inn. Ta kontakt med eiendomsmegler dersom det er
Tinglyste heftelser og rettigheter: På eiendommen er det spørsmål.
tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny Selger leverer eiendommen i ryddig og rengjort

---

[d188_d188 | Side [1]]
t eller delvis eller være feil registrert i Matrikkelen. Ambitas eiendomsutskrift viser arealet som er en geometrisk
beregning basert på eiendommens grenselinjer. I de tilfeller grensene er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på

---

[d188_d188 | Side [1]]
matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I

---

[d188_d188 | Side [1]]
ller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/

---

[d188_d188 | Side [1]]
else ‑ nåværende og er merket omforming,
gul sone iht. T‑1442 og byggeforbud rundt veg, bane og Selger har ikke utført radonmåling. Det er ikke krav om
flyplass. dette med mindre boligen er helt eller delvis utleid.
Kopi av situasjonskart, målebrev, reguleringsplaner m/
Diverse
bestemmelser etc. ligger vedlagt i salgsoppgaven eller
kan fås ved henvendelse til megler. Vi oppfordrer Både kjøper og selger er forpliktet til å signere den
interessenter til å gjøre seg kjent med disse. standard kjøpekontrakten

---

[d188_d188 | Side [1]]
ring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
Vei, vann og avløp
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Eiendommen er tilknyttet offentlig vann og avløp. Alle Egenerklæringsskjema er vedlagt salgsoppgaven og
eiendommer som er tilknyttet offentlig vann og avløp har interessenter oppfordres til å gjennomgå denne før bud
private stikkledninger, som vedlikeholdes for eiers egen inngis.
regning. For ytterligere opplysninger om de private
stikkledningene tar man kontakt

---

[d188_d188 | Side [1]]
ligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og

---

[d188_d188 | Side [1]]
ette seg inn i tilstandsrapporten som oppvarmingskilde, vil ikke dette bli inkludert i handelen.
ligger vedlagt salgsoppgaven.
42

## Side 43

OM EIENDOMMEN
Regulerings og arealplaner Utleie
Eiendommen er regulert til boliger og felles avkjørsel i Adgang til utleie: Dette er en selveierbolig som kan fritt
henhold til reguleringsplan 1‑001‑E. leies ut til boligformål.
Eiendommen er i kommuneplanens arealdel avsatt til
Radonmåling
boligbebyggelse ‑ nåværende og er merket omforming,
gul sone iht. T‑1442 og

---

[d188_d188 | Side [1]]
ensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 06.02.2026 09:25 – Sist oppdatert 06.02.2026 09:25
Utskriften er levert av: Ambita as, Postboks 2923

---

[d188_d188 | Side [1]]
erdien er en
Kr 4 417 100 prosentandel av denne boligverdien.For mer informasjon
om formuesverdi, se Skatteetatens nettsider.
Eiendomsskatt
Beliggenhet
Kommunen har ikke innført eiendomsskatt for bolig.
Boligen ligger i et rolig og familievennlig boligfelt i
Husbymyra. Området er rolig med kort vei til det meste
Kommunale avgifter
av hverdagslige behov. Her bor du skjermet til, samtidig
Kr 17 696 (2025) som skoler, barnehager og fritidstilbud er lett tilgjengelig.
Informasjon: Kommunale avgifter inkluderer

---

[d188_d188 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, av faglært og ufaglært/egeninnsats/dugnad
Beskrivelse Ny veranda2023. Nytt carport tak 2023. Byttet bordkledning, etterisolert med 5cm. I 2023. Nye vinduer i 2023.
Arbeid utført av Meg selv
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til

---

[d188_d188 | Side [1]]
est. grunneiendom Tinglyst: Ja Reg.landbruksreg.: Nei
Bruksnavn: Mathias Lunds Gt Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 25.10.1971 Har festegrunn: Nei Seksjonert: Nei
Areal: 383,1 kvm Skyld: 0,01
Arealkilde: Beregnet Areal
Arealmerknad:
Om fullstendighet og nøyaktighet i matrikkelutskriften:
Ambita tar forbehold om at informasjon som hentes fra Matrikkelen kan avvike fra de faktiske forhold, og at grensepunkter mv.
kan mangle helt eller delvis eller være feil registrert i Matrikkelen. Ambitas

---

[d188_d188 | Side [1]]
eidet med asfalt, steinheller, diverse beplantninger, plenareal, terrasse på terreng
og biloppstillingsplass. Frittstående uthus.
Boligbygg oppført i 1971. Grunnmur av betong. Fundamentert på ukjent byggegrunn. Bygget er oppført med krypkjeller. Yttervegger av
trekonstruksjoner. Fasaden er kledd med stående trekledning. Etasjeskillere av trekonstruksjoner. Saltak i trekonstruksjoner (ikke besiktiget).
Yttertak er utvendig tekket med shingel. Entrédør med sikkerhetslås og glassfelter. Vinduer og balkongdør

---

[d188_d188 | Side [1]]
in,
vegghengt innredning samt fordelerskap for Kjenner du til om det er utført arbeid på bad/ våtrom?
rør‑i‑rør‑system og 200 liters varmtvannsbereder. Ja.
Faglært og ufaglært arbeid:
Eiendommen har et frittstående, uisolert uthus samt Firmanavn: Stjørdal hus å hage service
uinnredet kaldtloft med adkomst via takluke, som gir Beskrivelse av arbeidet: Membran
gode lagringsmuligheter. Ble tettesjikt/ membran/ sluk oppgradert/ fornyet?
Ja.
Parkering skjer i carport hvor det er montert elbillader og

---

[d188_d188 | Side [1]]
ventilasjon)?
Alt utstyr og installasjoner som medfølger overtas slik de Ja.
er, uten garanti, med mindre det foreligger en gjeldende Faglært arbeid:
garanti fra produsent eller leverandør. Firmanavn: Skansen elektro
Beskrivelse av arbeidet: Nytt skjultanlegg
40

## Side 41

OM EIENDOMMEN
Kjenner du til om det er utført kontroll av el‑anlegget og/
Byggemåte
eller andre installasjoner (f.eks. oljetank, sentralfyr,
ventilasjon)? Enebolig oppført i 1971. Bygget er fundamentert på
Ja. søyler/ pilarer av betong

---

[d188_d188 | Side [1]]

Ja.
Parkering skjer i carport hvor det er montert elbillader og Beskrivelse: Ny membran
øvrige parkeringsmuligheter på gårdsplassen til Er arbeidet byggemeldt?
eiendommen. Adkomst til boligen skjer via blindvei, noe Nei.
som gir rolige og trafikksikre omgivelser.
Kjenner du til feil eller om har vært utført arbeid/ kontroll
Hvitevarer: Integrerte hvitevarer medfølger. på vann/ avløp?
Ja.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Faglært arbeid:
standardliste "Oversikt over løsøre og tilbehør", som

---

[d188_d188 | Side [1]]
erskjøting til ny Selger leverer eiendommen i ryddig og rengjort tilstand.
hjemmelshaver:
Kontrakts‑
5035/1 02/ 604:
25.10.1971 ‑ Dokumentnr: 7909 ‑ Registrering av grunn
grunnlag
Denne matrikkelenhet opprettet fra:
Knr:5035 Gnr:102 Bnr:459
Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper og
01.01.2018 ‑ Dokumentnr: 263726 ‑ Omnummerering ved selger.
kommuneendring
Tidligere: Knr:1714 Gnr:102 Bnr:604
Forsikring
Boligselgerforsikring: Selger har tegnet
boligselgerforsikring som dekker selgers

---

[d188_d188 | Side [1]]
rson eventuelle forbehold som for eksempel usikker
som handler i næringssammenheng, regnes kjøpet ikke finansiering, salg av nåværende bolig ol. Normalt vil ikke
som et forbrukerkjøp. et bud med forbehold bli akseptert før forbeholdet er
avklart. Konferer gjerne med megler før bud avgis.
Ved slike kjøp selges eiendommen «som den er», og
selgers ansvar er begrenset til det som følger direkte av Bud som har forbehold om konfidensialitet ("hemmelige
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene bud")

---

[d188_d188 | Side [1]]
al og Iselin Olsen
undersøkelse krever stillas. Jevnlig ettersyn anbefales.
Sameie
Restlevetiden er ikke kjent.
Sameiets forsikringsselskap: Lofavør
‑ Grunnmur, fundamenter ‑ Fundamenter |
Fundamentene var ikke tilgjengelig for undersøkelser, slik Polisenummer fellesforsikring: 28156751
at utførelsen/ tilstanden ikke lot seg kontrollere. Se også
punkt om krypkjeller.
Energimerke
‑ Drenering ‑ Helhetsvurdering | Fra innsiden observeres Energikarakter: C
symptomer på fuktproblematikk. Vann fra yttertaket

---

[d188_d188 | Side [1]]
gjelder for eksempel følgende bestemmelser:
• 9 - Gjennomgang av dokumentasjon av boligen (kun påfølgende deler): Innhenting av informasjon fra kommunens tekniske etat
• 13.2 - Vurdering av teknisk verdi
• 14.3 - Oppsummering
• Tabell A.1 (kun påfølgende deler): Punkt 22 (Geologiske forhold)
• Tabell A.3 - Undersøkelser av fellesdeler
• Tillegg C.2 - Tilstandsgrad for branntekniske forhold
Det er gjort et utvalg med prinsippet kost / nytte basert på avhendingsloven. Annen relevant bygningsteknisk erfaring

---

[d188_d188 | Side [1]]
tal investerer mye i å ha en moderne og ny maskinpark. 2041 0848 NO-3619
Dette bidrar til en vesentlig mer miljøvennlig produksjon.
Legg ID her Legg ID her

## Side 119

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

[d188_d188 | Side [1]]
er lett tilgjengelig.
Informasjon: Kommunale avgifter inkluderer vann, avløp, Flere barnehager, blant annet Sandskogan og
feiing og renovasjon. Husbymyra, ligger kun få minutters gange unna. Det er
også trygg og kort skolevei til Fosslia barneskole og
Fakturert beløp i 2025: Stokkan ungdomsskole, og Ole Vig videregående skole
Avløp, vann og feiing: 10 796,‑ nås til fots. For en aktiv hverdag finner du både
Renovasjon: 6 900,‑ Øverlands Minde og Nye Blink‑banen rundt seks
Totalt: 17 696,‑ minutters gange

---

[d188_d188 | Side [1]]
este boliger i Norge er av eldre årgang og for eksempel naust og brygge, kartlegging og vurdering av fellesdeler i
utbedringsbehov er påregnelig og normalt. sameier-borettslag og lignende, vurdering av energiforbruk,
Eksempler energimerking, støy, vibrasjoner, lydforhold, radonmålinger, inneklima,
miljø, elektromagnetisme, funksjonskrav (universell utforming,
En tilårskommen membran vil ofte få TG 2, selv om det ikke er egnethet),undersøkelse av skjulte tekniske anlegg,
oppdaget synlig lekkasje. Eksakt

---

[d188_d188 | Side [1]]
ingsskjema at det med fritt vann som kan føre til oppsug av vann med
foreligger samsvarserklæring for det elektriske arbeidet i forkortet levetid og skader som resultat. Det er ingen
boligen. dampsperre mot grunnen. Krypkjellere er en
risikokonstruksjon. Strakstiltak vurderes som nødvendig.
Det tas forbehold om at det kan være utført andre Det bør gjennomføres ytterligere undersøkelser av
arbeider på det elektriske anlegget som ikke har fagkyndige for å kartlegge eksakt tilstand,
samsvarserklæring.

---

[d188_d188 | Side [1]]
nehage og skoler.

## Side 33

(Ingen tekst ekstrahert)

## Side 34

Plantegning

## Side 35

Plantegning

## Side 36

MATHIAS LUNDS GATE 46
OM EIENDOMMEN

## Side 37

OM EIENDOMMEN
OM EIENDOMMEN
Årsprognose for 2026 er totalt kr 17 482,‑. Dette
Økonomi
inkluderer renovasjon på kr 6 900,‑ og vann/ avløp på kr
10 582,‑.
Prisantydning
Kr 4 290 000 Oppgitt beløp er et estimat for hele året. Det fakturerte
beløpet kan avvike fra estimatet.
Omkostning kjøper
Andre kostnader:
4 290 000,‑ (Prisantydning)
Andre

---

[d188_d188 | Side [1]]
entilasjon)?
Nei Ja
Beskrivelse El kontroll 17.11.2025
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
Beskrivelse Ladeboks for elbil
Initialer selger: IO, TAK 2
41006250
:ecnerefer
tnemucoD
50

## Side 51

14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på

---

[d188_d188 | Side [1]]
henger og
hvilke tiltak som skulle være nødvendig.
Underliggende sjablongmessig prisanslag gjelder for vidre vurderinger og
fuktmålinger av etasjeskille.
Sjablongmessig prisanslag: kr 10 000 - 50 000
Loft - uinnredet / råloft
Uinnredet kaldtloft.
Adkomst via takluke og stige.
Synlige trebjelker og isolasjon mot underliggende etasje.
Synlige taksperrer.
Panelbord i himling.
TG 1 Følgende sjekkpunkter er vurdert, og det er ikke oppdaget funksjonssvikt:
Inspeksjonsmulighet - Overflater vegger/undertak -

---

[d188_d188 | Side [1]]
triske anlegg utført etter 1999-01-01: Samsvarserklæring er ikke fremlagt på befaringstidspunktet.
Erklæring om samsvar for det elektriske anlegget
Dokumentasjon på el-tilsyn Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet.
Eventuelle tilsynsrapporter fra offentlige Ikke aktuelt.
myndigheter
Tilsynsrapport for olje- eller septiktanker Ikke relevant.
Dokumentasjon på drikkevannskvalitet hvis Ikke relevant.
boligen ikke er tilkoblet kommunal forsyning
Egenerklæringsskjema Fremlagt,

---

[d188_d188 | Side [1]]
stning kjøper
Andre kostnader:
4 290 000,‑ (Prisantydning)
Andre utgifter: Andre utgifter: I tillegg til felleskostnader
Omkostninger: påløper kostnader til for eksempel strøm, innboforsikring,
18 500,‑ (Boligkjøperforsikring (valgfritt)) diverse abonnementer og lignende.
260,‑ (Pantattest kjøper ‑ lagt ut av megler)
545,‑ (Tingl.gebyr pantedokument)
Formuesverdi
545,‑ (Tingl.gebyr skjøte)
107 250,‑ (Dokumentavgift (forutsatt salgssum: 4 290 Formuesverdi primær: Kr 952 880 (2025)
000))
Formuesverdi

---

[d188_d188 | Side [1]]
 bør ses i
sammenheng med avsnitt "Krypekjeller". Basert på alle ovennevnte forhold bør det
gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand
og hvilke tiltak som eventuelt skulle være nødvendig.
Stikkledninger og tanker
Boligen har private stikkledninger tilknyttet kommunalt vann og avløp.
Utvendige vann- og avløpsledninger er fra ukjent årstall.
TG 1 Følgende sjekkpunkter er vurdert, og det er ikke oppdaget funksjonssvikt:
Vann- og avløpsledninger (ink.

---

[d188_d188 | Side [1]]
 til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av faglært
Beskrivelse Nytt skjultanlegg
Arbeid utført av Skansen elektro
11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)?
Nei Ja
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Nei Ja
Beskrivelse El kontroll 17.11.2025
13 Har du

---

[d188_d188 | Side [1]]
gler kontaktes og fullmakten
Ved beregning av krav om prisavslag eller erstatning må oversendes før budgivning.
kjøper selv dekke kostnader med inntil kr 10 000 (som en
egenandel). Et bud bør inneholde eiendommens adresse (eventuelt
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon,
Ikke‑forbruker – definisjon og vilkår: finansieringsplan, akseptfrist, overtakelsesdato og
Dersom kjøper er en juridisk enhet, eller en fysisk person eventuelle forbehold som for eksempel usikker
som handler i

---

[d188_d188 | Side [1]]
A%20Bestemmelser%20og%20retningslinjer%2020182211.pdf
Delarealer Delareal 383 m2
KPHensynsonenavnH130
KPSikring Byggeforbud rundt veg, bane og flyplass
Delareal 383 m2
KPHensynsonenavnBF1
KPGjennomføring Omforming
Delareal 383 m2
ArealbrukBoligbebyggelse,Nåværende
Side 1 av 2
77

## Side 78

Delareal 383 m2
KPHensynsonenavnH220
KPStøy Gul sone iht. T-1442
Kommuneplaner under arbeid
Besøk kommunens hjemmeside for mer informasjon.
Id 0-0-2023
Navn Kommuneplanens arealdel-2022
Status Planforslag
Plantype

---

[d188_d188 | Side [1]]
mmen.
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Kommuneplaner under arbeid
Reguleringsplaner
Plantyper uten treff
Kommunedelplaner Kommunedelplaner under arbeid
Reguleringsplaner under bakken Reguleringsplaner over bakken
Reguleringsplaner under arbeid Reguleringsplaner bunn
Reguleringsplaner under arbeid i

---

[d188_d188 | Side [1]]
t
søknadsfri dersom den ligger inntil 0,5 m over terreng og
ikke medfører vesentlige terrenginngrep eller brudd på
Beskrivelse av
reguleringsplan.
eiendommen
‑ Ett av soverommene er utvidet ved at vegg mot
tidligere kott er fjernet, slik at arealet er tatt i bruk som en
Type eiendom
del av soverommet. Dette er et søknadpliktig tiltak og
Eieform: Eiet megler har ikke fått opplysninger eller dokumentasjon
som viser at dette er søkt om eller godkjent. Boligen er
Objektstype: Enebolig opprinnelig godkjent med

---

[d188_d188 | Side [1]]
arbeid Reguleringsplaner bunn
Reguleringsplaner under arbeid i nærheten Bebyggelsesplaner
Bebyggelsesplaner over bakken Bebyggelsesplaner under bakken
Midlertidige forbud
Kommuneplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 0-0-2017
Navn Kommuneplanens arealdel-endring
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 05.10.2017
Bestemmelser - https://www.arealplaner.no/5035/dokumenter/2099/KPA%20Bestemmelser%20og%20retningslinjer%2020182211.pdf
Delarealer

---

[d188_d188 | Side [1]]
23
Navn Kommuneplanens arealdel-2022
Status Planforslag
Plantype Kommuneplanens arealdel
Reguleringsplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 1-001-E
Navn Del av Husbymyra
Plantype Eldre reguleringsplan
Status Endelig vedtatt arealplan
Ikrafttredelse 05.04.1984
Bestemmelser - https://www.arealplaner.no/5035/dokumenter/2398/1399883974270.pdf
Delarealer Delareal 322 m2
Formål Boliger
Delareal 61 m2
Formål Felles avkjørsel
Side 2 av 2
78

## Side 79

Kommuneplankart
Eiendom: 102/604
Adresse:

---

[d188_d188 | Side [1]]
 §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Stjørdal kommune
Kommunenr. 5035 Gårdsnr. 102 Bruksnr. 604 Festenr. Seksjonsnr.
Adresse Mathias Lunds gate 46, 7506 STJØRDAL
Opplysningene omfatter gjeldende planer og pågående planarbeid for eiendommen. Nærmere opplysninger om den enkelte plan
med dokumenter, mindre endringer, etc finnes på internett, se lenker under. Oppgitte delarealer viser planinformasjon på
eiendommen.
Det tas forbehold om riktigheten eller fullstendigheten av

---

[d188_d188 | Side [1]]
de bussforbindelser i nærheten, kort vei til
Stjørdal stasjon og ca. 10 minutters kjøring til Trondheim Jf. plan‑ og bygningsloven § 21‑10 (5) utstedes det ikke
lufthavn Værnes. lengre ferdigattest for tiltak det er søkt om før 01.01.1998.
Dette innebærer at byggverkene lovlig kan brukes og
omsettes uten at det foreligger ferdigattest. Det betyr
Parkering
imidlertid ikke at ulovlige bygde tiltak blir lovlige.
Eiendommen har parkering i carport med montert
elbillader. I tillegg er det parkering på egen

---

[d188_d188 | Side [1]]
kjent. Boligen er
Objektstype: Enebolig opprinnelig godkjent med 3 soverom.
38

## Side 39

OM EIENDOMMEN
‑ Det er oppført et tilbygg til bolig som ikke er vist på Fra 01.01.24 er det innført nye regler for måling og
tegningene. Det foreligger en ferdigattest for tilbygg til opplysning av areal på boliger.
bolig datert 1985, men det følger ingen innvendige De nye arealbegrepene er:
tegninger av tilbygget hvor rommene er beskrevet.
Megler har derfor ikke hatt mulighet til å kontrollere eller Bruksareal

---

[d188_d188 | Side [1]]
e og Nye Blink‑banen rundt seks
Totalt: 17 696,‑ minutters gange fra boligen.
37

## Side 38

OM EIENDOMMEN
Dagligvarehandelen gjøres enkelt på Rema 1000
Ferdigattest/ brukstillatelse:
Husbyfaret, og Torgkvartalet med et bredt utvalg av
butikker og servicetilbud ligger en kort kjøretur unna. Det er utstedt innflyttingstillatelse for nybygg av 12
Nærområdet byr i tillegg på fine turmuligheter i skog og boliger datert 04.06.1971.
mark. Det er gode bussforbindelser i nærheten, kort vei til
Stjørdal stasjon og

---

[d188_d188 | Side [1]]
har derfor ikke hatt mulighet til å kontrollere eller Bruksareal BRA:
sammenligne tilbyggets godkjente utforming med BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
dagens bruk eller planløsning. BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
boenheten og som tilhører denne, for eksempel eksterne
Kjøper overtar ansvar og risiko for nevnte forhold. boder.
Innflyttingstillatelse datert: 04.06.1971. BRA‑b ‑ Innglasset balkong, altan, terrasser.
Andre arealer:
Innhold
TBA ‑Terrasser og åpen

---

[d188_d188 | Side [1]]
resse Unummerert
bruksenhet
Bygningsopplysninger:
Næringsgruppe: Ikke oppgitt Bebygd areal: Rammetillatelse:
Bygningsstatus: Tatt i bruk BRA bolig: Igangset.till.:
Energikilde: BRA annet: Ferdigattest:
Oppvarming: BRA totalt: Midl. brukstil.:
Avløp: Har heis: Nei Tatt ibruk (GAB):
Vannforsyning: Antall boliger:
Bygningsnr: 185368955 Antall etasjer:
Etasjeopplysninger:
Ingen etasjeopplysninger registrert på bygningen.
Kulturminner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret

---

[d188_d188 | Side [1]]
rport med montert
elbillader. I tillegg er det parkering på egen gårdsplass. Det er utstedt ferdigattest for tilbygg til bolig datert
03.02.1987.
Adkomst
Det foreligger tegninger fra kommunen datert 1969.
På høyre side i annonsen finner du et kartutsnitt. Ved å Disse samsvarer ikke med dagens bruk av boligen.
klikke på kartet kan du enkelt planlegge din rute fra valgt Følgende er bemerket:
startpunkt og helt frem til boligen. Det vil være skiltet ved
fellesvisninger for enkel orientering. ‑ Rom som

---

[d188_d188 | Side [1]]
ør overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med

---

[d188_d188 | Side [1]]
e skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg

---

[d188_d188 | Side [1]]
gen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å

---

[d188_d188 | Side [1]]

Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2022
Hvor lenge har du eid boligen?
Antall år 3
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Lofavør
Polise/avtalenr. 28156751
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: IO, TAK

---

[d188_d188 | Side [1]]
ofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
111

## Side 112

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er

---

[d188_d188 | Side [1]]
et og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere

---

[d188_d188 | Side [1]]
nneholder tilbud til
forbruker om tilpassede strøm‑, internett ‑ og
alarmtjenester
47

## Side 48

MATHIAS LUNDS GATE 46

## Side 49

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Trondheim
Oppdragsnr.
05260014
Selger 1 navn Selger 2 navn
Iselin Olsen Tom André Kvaal
Gateadresse
Mathias Lunds gate 46
Poststed Postnr
STJØRDAL 7506
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei

---

[d188_d188 | Side [1]]
igere opplysninger om de private
stikkledningene tar man kontakt med kommunen. Boligkjøperforsikring: Kjøper har anledning til å tegne
Adkomsten til eiendommen skjer via privat vei. boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg &
43

## Side 44

OM EIENDOMMEN
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen

---

[d188_d188 | Side [1]]
e, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen. Dette gjelder uavhengig av om som handler hovedsakelig som ledd i
dokumentene er lest. næringsvirksomhet. Det vil opplyses hvis

---

[d188_d188 | Side [1]]
rsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at

---

[d188_d188 | Side [1]]
d
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Krypekjeller med alvorlige fuktproblemer (TG3) – fritt vann på grunnen, tilsig av fukt, søyler i kontakt med vann, ingen dampsperre. Strakstiltak nødvendig.",
      "evidence": [
        "Det observeres tilsig av fukt og fritt vann på grunnen.",
        "Enkelte søyler har kontakt med fritt vann som kan føre til oppsug av vann med forkortet levetid og skader som resultat.",
        "Det er ingen dampsperre mot grunnen. Krypkjellere er en risikokonstruksjon. Strakstiltak vurderes som nødvendig.",
        "Det bør gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand.",
        "Sjablongmessig prisanslag: kr 10 000 - 50 000"
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Fuktproblematikk i drenering (TG2) – symptomer på fuktproblematikk observert fra innsiden. Bør ses i sammenheng med krypekjeller. Ytterligere undersøkelser anbefales.",
      "evidence": [
        "Fra innsiden observeres symptomer på fuktproblematikk. Vann fra yttertaket bør ses i sammenheng med avsnitt 'Krypekjeller'.",
        "Basert på alle ovennevnte forhold bør det gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand og hvilke tiltak som eventuelt skulle være nødvendig.",
        "Underliggende sjablongmessig prisanslag gjelder for videre vurderinger og fuktmålinger av etasjeskille."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R3",
      "description": "Fundamenter ikke tilgjengelig for undersøkelse – tilstand og utførelse kunne ikke kontrolleres. Ukjent byggegrunn øker risikoen.",
      "evidence": [
        "Fundamentene var ikke tilgjengelig for undersøkelser, slik at utførelsen/tilstanden ikke lot seg kontrollere. Se også punkt om krypkjeller.",
        "Fundamentert på ukjent byggegrunn.",
        "Bygget er fundamentert på søyler/pilarer av betong."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Yttertak ikke besiktiget – restlevetid ukjent. Taket er tekket med shingel og er ikke undersøkt innvendig eller utvendig fra tett hold.",
      "evidence": [
        "Saltak i trekonstruksjoner (ikke besiktiget).",
        "Undersøkelse krever stillas. Jevnlig ettersyn anbefales. Restlevetiden er ikke kjent.",
        "Yttertak er utvendig tekket med shingel."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R5",
      "description": "Ulovlig/ikke godkjent bygningsmessig endring – soverom utvidet ved fjerning av vegg mot kott uten søknad eller godkjenning. Kjøper overtar ansvar og risiko.",
      "evidence": [
        "Ett av soverommene er utvidet ved at vegg mot tidligere kott er fjernet, slik at arealet er tatt i bruk som en del av soverommet. Dette er et søknadpliktig tiltak og megler har ikke fått opplysninger eller dokumentasjon som viser at dette er søkt om eller godkjent.",
        "Boligen er opprinnelig godkjent med 3 soverom.",
        "Kjøper overtar ansvar og risiko for nevnte forhold."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R6",
      "description": "Tilbygg uten fullstendige godkjente tegninger – ferdigattest foreligger for tilbygg (1985/1987), men ingen innvendige tegninger med rombeskrivelse. Dagens bruk kan avvike fra godkjent utforming.",
      "evidence": [
        "Det er oppført et tilbygg til bolig som ikke er vist på tegningene. Det foreligger en ferdigattest for tilbygg til bolig datert 1985, men det følger ingen innvendige tegninger av tilbygget hvor rommene er beskrevet.",
        "Megler har derfor ikke hatt mulighet til å kontrollere eller sammenligne tilbyggets godkjente utforming med dagens bruk eller planløsning.",
        "Det foreligger tegninger fra kommunen datert 1969. Disse samsvarer ikke med dagens bruk av boligen.",
        "Det er utstedt ferdigattest for tilbygg til bolig datert 03.02.1987."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R7",
      "description": "Manglende samsvarserklæring for elektrisk anlegg – samsvarserklæring ikke fremlagt på befaringstidspunktet. Forbehold om at andre arbeider kan mangle erklæring.",
      "evidence": [
        "Elektriske anlegg utført etter 1999-01-01: Samsvarserklæring er ikke fremlagt på befaringstidspunktet.",
        "Det tas forbehold om at det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring.",
        "Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Ufaglært arbeid på terrasse, carport-tak, bordkledning/etterisolering og vinduer – alt utført av selger selv i 2023 uten dokumentasjon på faglig utførelse.",
      "evidence": [
        "Ny veranda 2023. Nytt carport tak 2023. Byttet bordkledning, etterisolert med 5cm. I 2023. Nye vinduer i 2023.",
        "Arbeid utført av: Meg selv.",
        "TG 1 gis også når delen er ny, men der dokumentasjon på faglig god utførelse mangler."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger i støysone (gul sone iht. T-1442) og har byggeforbud rundt veg, bane og flyplass. Dette kan påvirke fremtidig bruk og verdi.",
      "evidence": [
        "Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming, gul sone iht. T-1442 og byggeforbud rundt veg, bane og flyplass.",
        "KPSikring: Byggeforbud rundt veg, bane og flyplass.",
        "KPStøy: Gul sone iht. T-1442.",
        "Ca. 10 minutters kjøring til Trondheim lufthavn Værnes."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen er avsatt til omforming i kommuneplanen – fremtidig arealbruk kan endres, noe som kan påvirke nabolaget og eiendommens omgivelser.",
      "evidence": [
        "Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming.",
        "KPGjennomføring: Omforming.",
        "Kommuneplanens arealdel-2022 har status Planforslag."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Ingen radonmåling utført – selger har ikke foretatt radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre boliger med krypekjeller.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei.",
        "Bygget er oppført med krypkjeller – en konstruksjonstype med økt radonrisiko."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Utvendige vann- og avløpsledninger fra ukjent årstall – alder og tilstand på stikkledninger er ukjent, noe som kan medføre uforutsette kostnader.",
      "evidence": [
        "Utvendige vann- og avløpsledninger er fra ukjent årstall.",
        "Boligen har private stikkledninger tilknyttet kommunalt vann og avløp.",
        "Private stikkledninger vedlikeholdes for eiers egen regning."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Boligen er fra 1971 og har ikke ferdigattest – kun innflyttingstillatelse. Ulovlig oppførte tiltak fra denne perioden blir ikke automatisk lovlige.",
      "evidence": [
        "Det er utstedt innflyttingstillatelse for nybygg av 12 boliger datert 04.06.1971.",
        "Jf. plan- og bygningsloven § 21-10 (5) utstedes det ikke lengre ferdigattest for tiltak det er søkt om før 01.01.1998. Dette innebærer at byggverkene lovlig kan brukes og omsettes uten at det foreligger ferdigattest. Det betyr imidlertid ikke at ulovlige bygde tiltak blir lovlige."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Selger har kun eid boligen i ca. 3,5 år – begrenset kjennskap til boligens historikk og eventuelle skjulte feil fra tidligere eiere.",
      "evidence": [
        "Når kjøpte du boligen? År 2022.",
        "Antall år 3, Antall måneder 6.",
        "Har du bodd i boligen siste 12 måneder? Ja."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R15",
      "description": "Membranarbeid på bad ikke byggemeldt – ny membran er utført av fagkyndig (Stjørdal hus og hage service), men arbeidet er ikke byggemeldt. Kan innebære manglende offentlig godkjenning.",
      "evidence": [
        "Firmanavn: Stjørdal hus å hage service. Beskrivelse av arbeidet: Membran. Ble tettesjikt/membran/sluk oppgradert/fornyet? Ja.",
        "Er arbeidet byggemeldt? Nei."
      ],
      "source_documents": [
        "d188_d188"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "krypekjeller fukt tilstand tiltak kostnad",
    "elektrisk anlegg samsvarserklæring el-kontroll dokumentasjon",
    "tilbygg ferdigattest tegninger godkjenning rom beskrivelse",
    "membran bad byggemeldt fagkyndig dokumentasjon",
    "radon krypekjeller helserisiko måling",
    "støysone T-1442 byggeforbud flyplass Værnes konsekvenser",
    "selger eierhistorikk kjennskap skjulte feil tidligere eiere",
    "stikkledninger vann avløp alder tilstand privat vedlikehold"
  ],
  "reasoning": "\nGjennomgang av alle 14 opprinnelig identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Krypekjeller TG3:** Svært godt dokumentert. Flere direkte sitater fra tilstandsrapporten bekrefter fritt vann, søyler i kontakt med vann, ingen dampsperre og strakstiltak. Confidence økes marginalt til 0.99.\n\n**R2 – Drenering TG2:** Godt dokumentert. Fuktproblematikk observert fra innsiden, og kobling til krypekjeller er eksplisitt nevnt. Prisanslag for fuktmålinger av etasjeskille er også funnet i dokumentet. Confidence opprettholdes på 0.93.\n\n**R3 – Fundamenter ikke undersøkt:** Godt dokumentert. Tilleggsevidens funnet: \"Bygget er fundamentert på søyler/pilarer av betong\" bekrefter konstruksjonstype. Confidence økes til 0.90.\n\n**R4 – Yttertak ikke besiktiget:** Godt dokumentert. Shingel-tekking bekreftet, stillas nødvendig, restlevetid ukjent. Confidence opprettholdes på 0.88.\n\n**R5 – Ulovlig bygningsmessig endring (soverom):** Svært godt dokumentert. Eksplisitt nevnt som søknadspliktig tiltak uten godkjenning, kjøper overtar ansvar. Confidence økes til 0.96.\n\n**R6 – Tilbygg uten fullstendige tegninger:** Godt dokumentert. Tilleggsevidens: ferdigattest datert 03.02.1987 er funnet, i tillegg til 1985-attesten. Tegninger fra 1969 samsvarer ikke med dagens bruk. Confidence økes til 0.91.\n\n**R7 – Manglende samsvarserklæring el:** Godt dokumentert. Tilleggsevidens: \"Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet\" styrker risikoen ytterligere. Confidence justeres ned til 0.88 da selger oppgir at samsvarserklæring foreligger i egenerklæringen (noe motstridende informasjon).\n\n**R8 – Ufaglært arbeid:** Godt dokumentert. Selger bekrefter selv at arbeidet er utført av \"meg selv\". TG1-definisjonen om manglende fagdokumentasjon er relevant. Confidence opprettholdes på 0.87.\n\n**R9 – Støysone og byggeforbud:** Svært godt dokumentert. Nærhet til Trondheim lufthavn Værnes (ca. 10 min kjøring) gir kontekst til byggeforbud. Confidence økes til 0.93.\n\n**R10 – Omforming i kommuneplan:** Godt dokumentert. Planforslag-status for ny kommuneplan er bekreftet. Confidence opprettholdes på 0.80.\n\n**R11 – Ingen radonmåling:** Godt dokumentert. Tilleggsevidens: krypekjeller er en konstruksjonstype med økt radonrisiko. Confidence økes til 0.87.\n\n**R12 – Ukjent årstall stikkledninger:** Godt dokumentert. Tilleggsevidens: private stikkledninger vedlikeholdes for eiers regning. Confidence økes til 0.80.\n\n**R13 – Ingen ferdigattest (1971):** Godt dokumentert. Lovhenvisning til PBL § 21-10(5) er eksplisitt sitert. Confidence opprettholdes på 0.80.\n\n**R14 – Kort eiertid:** Dokumentert, men risikoen er noe indirekte. Selger har bodd i boligen siste 12 måneder (bekreftet), noe som faktisk gir noe kjennskap. Confidence justeres ned til 0.70.\n\n**NY RISIKO R15 – Membranarbeid på bad ikke byggemeldt:** Funnet i dokumentet. Fagkyndig firma utførte membranarbeid, men arbeidet er eksplisitt bekreftet som IKKE byggemeldt. Dette er en selvstendig risiko som ikke var identifisert i opprinnelig liste. Confidence settes til 0.78.\n\n**Vurdering av manglende risikoer:**\n- Membranarbeid ikke byggemeldt (R15) – NY, lagt til\n- Adkomst via privat vei – nevnt i dokumentet, men lav risiko\n- Ingen el-tilsynsdokumentasjon fremlagt – delvis dekket av R7\n- Boligselgerforsikring tegnet – reduserer noe risiko for kjøper, men er ikke en risiko i seg selv\n"
}

## Raw Response
```json
{
  "id": "msg_016kQRWDu8ewRAwszpDC1URP",
  "container": null,
  "content": [
    {
      "id": "toolu_01UpntygzSnczqziBoDNAtKR",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Krypekjeller med alvorlige fuktproblemer (TG3) – fritt vann på grunnen, tilsig av fukt, søyler i kontakt med vann, ingen dampsperre. Strakstiltak nødvendig.",
            "evidence": [
              "Det observeres tilsig av fukt og fritt vann på grunnen.",
              "Enkelte søyler har kontakt med fritt vann som kan føre til oppsug av vann med forkortet levetid og skader som resultat.",
              "Det er ingen dampsperre mot grunnen. Krypkjellere er en risikokonstruksjon. Strakstiltak vurderes som nødvendig.",
              "Det bør gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand.",
              "Sjablongmessig prisanslag: kr 10 000 - 50 000"
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Fuktproblematikk i drenering (TG2) – symptomer på fuktproblematikk observert fra innsiden. Bør ses i sammenheng med krypekjeller. Ytterligere undersøkelser anbefales.",
            "evidence": [
              "Fra innsiden observeres symptomer på fuktproblematikk. Vann fra yttertaket bør ses i sammenheng med avsnitt 'Krypekjeller'.",
              "Basert på alle ovennevnte forhold bør det gjennomføres ytterligere undersøkelser av fagkyndige for å kartlegge eksakt tilstand og hvilke tiltak som eventuelt skulle være nødvendig.",
              "Underliggende sjablongmessig prisanslag gjelder for videre vurderinger og fuktmålinger av etasjeskille."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R3",
            "description": "Fundamenter ikke tilgjengelig for undersøkelse – tilstand og utførelse kunne ikke kontrolleres. Ukjent byggegrunn øker risikoen.",
            "evidence": [
              "Fundamentene var ikke tilgjengelig for undersøkelser, slik at utførelsen/tilstanden ikke lot seg kontrollere. Se også punkt om krypkjeller.",
              "Fundamentert på ukjent byggegrunn.",
              "Bygget er fundamentert på søyler/pilarer av betong."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Yttertak ikke besiktiget – restlevetid ukjent. Taket er tekket med shingel og er ikke undersøkt innvendig eller utvendig fra tett hold.",
            "evidence": [
              "Saltak i trekonstruksjoner (ikke besiktiget).",
              "Undersøkelse krever stillas. Jevnlig ettersyn anbefales. Restlevetiden er ikke kjent.",
              "Yttertak er utvendig tekket med shingel."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R5",
            "description": "Ulovlig/ikke godkjent bygningsmessig endring – soverom utvidet ved fjerning av vegg mot kott uten søknad eller godkjenning. Kjøper overtar ansvar og risiko.",
            "evidence": [
              "Ett av soverommene er utvidet ved at vegg mot tidligere kott er fjernet, slik at arealet er tatt i bruk som en del av soverommet. Dette er et søknadpliktig tiltak og megler har ikke fått opplysninger eller dokumentasjon som viser at dette er søkt om eller godkjent.",
              "Boligen er opprinnelig godkjent med 3 soverom.",
              "Kjøper overtar ansvar og risiko for nevnte forhold."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R6",
            "description": "Tilbygg uten fullstendige godkjente tegninger – ferdigattest foreligger for tilbygg (1985/1987), men ingen innvendige tegninger med rombeskrivelse. Dagens bruk kan avvike fra godkjent utforming.",
            "evidence": [
              "Det er oppført et tilbygg til bolig som ikke er vist på tegningene. Det foreligger en ferdigattest for tilbygg til bolig datert 1985, men det følger ingen innvendige tegninger av tilbygget hvor rommene er beskrevet.",
              "Megler har derfor ikke hatt mulighet til å kontrollere eller sammenligne tilbyggets godkjente utforming med dagens bruk eller planløsning.",
              "Det foreligger tegninger fra kommunen datert 1969. Disse samsvarer ikke med dagens bruk av boligen.",
              "Det er utstedt ferdigattest for tilbygg til bolig datert 03.02.1987."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R7",
            "description": "Manglende samsvarserklæring for elektrisk anlegg – samsvarserklæring ikke fremlagt på befaringstidspunktet. Forbehold om at andre arbeider kan mangle erklæring.",
            "evidence": [
              "Elektriske anlegg utført etter 1999-01-01: Samsvarserklæring er ikke fremlagt på befaringstidspunktet.",
              "Det tas forbehold om at det kan være utført andre arbeider på det elektriske anlegget som ikke har samsvarserklæring.",
              "Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Ufaglært arbeid på terrasse, carport-tak, bordkledning/etterisolering og vinduer – alt utført av selger selv i 2023 uten dokumentasjon på faglig utførelse.",
            "evidence": [
              "Ny veranda 2023. Nytt carport tak 2023. Byttet bordkledning, etterisolert med 5cm. I 2023. Nye vinduer i 2023.",
              "Arbeid utført av: Meg selv.",
              "TG 1 gis også når delen er ny, men der dokumentasjon på faglig god utførelse mangler."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger i støysone (gul sone iht. T-1442) og har byggeforbud rundt veg, bane og flyplass. Dette kan påvirke fremtidig bruk og verdi.",
            "evidence": [
              "Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming, gul sone iht. T-1442 og byggeforbud rundt veg, bane og flyplass.",
              "KPSikring: Byggeforbud rundt veg, bane og flyplass.",
              "KPStøy: Gul sone iht. T-1442.",
              "Ca. 10 minutters kjøring til Trondheim lufthavn Værnes."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen er avsatt til omforming i kommuneplanen – fremtidig arealbruk kan endres, noe som kan påvirke nabolaget og eiendommens omgivelser.",
            "evidence": [
              "Eiendommen er i kommuneplanens arealdel avsatt til boligbebyggelse – nåværende og er merket omforming.",
              "KPGjennomføring: Omforming.",
              "Kommuneplanens arealdel-2022 har status Planforslag."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Ingen radonmåling utført – selger har ikke foretatt radonmåling. Radon kan utgjøre en helserisiko, særlig i eldre boliger med krypekjeller.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei.",
              "Bygget er oppført med krypkjeller – en konstruksjonstype med økt radonrisiko."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Utvendige vann- og avløpsledninger fra ukjent årstall – alder og tilstand på stikkledninger er ukjent, noe som kan medføre uforutsette kostnader.",
            "evidence": [
              "Utvendige vann- og avløpsledninger er fra ukjent årstall.",
              "Boligen har private stikkledninger tilknyttet kommunalt vann og avløp.",
              "Private stikkledninger vedlikeholdes for eiers egen regning."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Boligen er fra 1971 og har ikke ferdigattest – kun innflyttingstillatelse. Ulovlig oppførte tiltak fra denne perioden blir ikke automatisk lovlige.",
            "evidence": [
              "Det er utstedt innflyttingstillatelse for nybygg av 12 boliger datert 04.06.1971.",
              "Jf. plan- og bygningsloven § 21-10 (5) utstedes det ikke lengre ferdigattest for tiltak det er søkt om før 01.01.1998. Dette innebærer at byggverkene lovlig kan brukes og omsettes uten at det foreligger ferdigattest. Det betyr imidlertid ikke at ulovlige bygde tiltak blir lovlige."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Selger har kun eid boligen i ca. 3,5 år – begrenset kjennskap til boligens historikk og eventuelle skjulte feil fra tidligere eiere.",
            "evidence": [
              "Når kjøpte du boligen? År 2022.",
              "Antall år 3, Antall måneder 6.",
              "Har du bodd i boligen siste 12 måneder? Ja."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R15",
            "description": "Membranarbeid på bad ikke byggemeldt – ny membran er utført av fagkyndig (Stjørdal hus og hage service), men arbeidet er ikke byggemeldt. Kan innebære manglende offentlig godkjenning.",
            "evidence": [
              "Firmanavn: Stjørdal hus å hage service. Beskrivelse av arbeidet: Membran. Ble tettesjikt/membran/sluk oppgradert/fornyet? Ja.",
              "Er arbeidet byggemeldt? Nei."
            ],
            "source_documents": [
              "d188_d188"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "krypekjeller fukt tilstand tiltak kostnad",
          "elektrisk anlegg samsvarserklæring el-kontroll dokumentasjon",
          "tilbygg ferdigattest tegninger godkjenning rom beskrivelse",
          "membran bad byggemeldt fagkyndig dokumentasjon",
          "radon krypekjeller helserisiko måling",
          "støysone T-1442 byggeforbud flyplass Værnes konsekvenser",
          "selger eierhistorikk kjennskap skjulte feil tidligere eiere",
          "stikkledninger vann avløp alder tilstand privat vedlikehold"
        ],
        "reasoning": "\nGjennomgang av alle 14 opprinnelig identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Krypekjeller TG3:** Svært godt dokumentert. Flere direkte sitater fra tilstandsrapporten bekrefter fritt vann, søyler i kontakt med vann, ingen dampsperre og strakstiltak. Confidence økes marginalt til 0.99.\n\n**R2 – Drenering TG2:** Godt dokumentert. Fuktproblematikk observert fra innsiden, og kobling til krypekjeller er eksplisitt nevnt. Prisanslag for fuktmålinger av etasjeskille er også funnet i dokumentet. Confidence opprettholdes på 0.93.\n\n**R3 – Fundamenter ikke undersøkt:** Godt dokumentert. Tilleggsevidens funnet: \"Bygget er fundamentert på søyler/pilarer av betong\" bekrefter konstruksjonstype. Confidence økes til 0.90.\n\n**R4 – Yttertak ikke besiktiget:** Godt dokumentert. Shingel-tekking bekreftet, stillas nødvendig, restlevetid ukjent. Confidence opprettholdes på 0.88.\n\n**R5 – Ulovlig bygningsmessig endring (soverom):** Svært godt dokumentert. Eksplisitt nevnt som søknadspliktig tiltak uten godkjenning, kjøper overtar ansvar. Confidence økes til 0.96.\n\n**R6 – Tilbygg uten fullstendige tegninger:** Godt dokumentert. Tilleggsevidens: ferdigattest datert 03.02.1987 er funnet, i tillegg til 1985-attesten. Tegninger fra 1969 samsvarer ikke med dagens bruk. Confidence økes til 0.91.\n\n**R7 – Manglende samsvarserklæring el:** Godt dokumentert. Tilleggsevidens: \"Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet\" styrker risikoen ytterligere. Confidence justeres ned til 0.88 da selger oppgir at samsvarserklæring foreligger i egenerklæringen (noe motstridende informasjon).\n\n**R8 – Ufaglært arbeid:** Godt dokumentert. Selger bekrefter selv at arbeidet er utført av \"meg selv\". TG1-definisjonen om manglende fagdokumentasjon er relevant. Confidence opprettholdes på 0.87.\n\n**R9 – Støysone og byggeforbud:** Svært godt dokumentert. Nærhet til Trondheim lufthavn Værnes (ca. 10 min kjøring) gir kontekst til byggeforbud. Confidence økes til 0.93.\n\n**R10 – Omforming i kommuneplan:** Godt dokumentert. Planforslag-status for ny kommuneplan er bekreftet. Confidence opprettholdes på 0.80.\n\n**R11 – Ingen radonmåling:** Godt dokumentert. Tilleggsevidens: krypekjeller er en konstruksjonstype med økt radonrisiko. Confidence økes til 0.87.\n\n**R12 – Ukjent årstall stikkledninger:** Godt dokumentert. Tilleggsevidens: private stikkledninger vedlikeholdes for eiers regning. Confidence økes til 0.80.\n\n**R13 – Ingen ferdigattest (1971):** Godt dokumentert. Lovhenvisning til PBL § 21-10(5) er eksplisitt sitert. Confidence opprettholdes på 0.80.\n\n**R14 – Kort eiertid:** Dokumentert, men risikoen er noe indirekte. Selger har bodd i boligen siste 12 måneder (bekreftet), noe som faktisk gir noe kjennskap. Confidence justeres ned til 0.70.\n\n**NY RISIKO R15 – Membranarbeid på bad ikke byggemeldt:** Funnet i dokumentet. Fagkyndig firma utførte membranarbeid, men arbeidet er eksplisitt bekreftet som IKKE byggemeldt. Dette er en selvstendig risiko som ikke var identifisert i opprinnelig liste. Confidence settes til 0.78.\n\n**Vurdering av manglende risikoer:**\n- Membranarbeid ikke byggemeldt (R15) – NY, lagt til\n- Adkomst via privat vei – nevnt i dokumentet, men lav risiko\n- Ingen el-tilsynsdokumentasjon fremlagt – delvis dekket av R7\n- Boligselgerforsikring tegnet – reduserer noe risiko for kjøper, men er ikke en risiko i seg selv\n"
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
    "input_tokens": 18769,
    "output_tokens": 4885,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
