# Trace: agentic_reflecting_iter1
- **Run ID:** 1bf06fd1-81dd-49dd-929e-f7b616c33198
- **Tidspunkt:** 2026-03-25T10:23:47.138877+00:00
- **Varighet:** 93.88s
- **Input tokens:** 18010
- **Output tokens:** 5265

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
Risiko 1: Soverom og utleiedel i sokkeletasje er ikke godkjent for varig opphold. Tre soverom i sokkeletasjen mangler godkjenning, og kjellerstue er innredet med kjøkken uten godkjenning. Kjøper overtar risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.
  Confidence: 0.98
  Evidens: Det som i dag benyttes som tre soverom i sokkeletasjen er ikke godkjent for varig opphold.; Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om.; Adgang til utleie: Den del av boligen som i dag fremstår som en utleiedel, er ikke godkjent for varig opphold.; Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om bruksendring blir godkjent, samt alle kostnader forbundet med prosessen.

Risiko 2: Manglende ferdigattest for eiendommen. Det er bekreftet at ferdigattest mangler, noe som kan indikere ulovlige eller ikke-godkjente byggearbeider.
  Confidence: 0.97
  Evidens: Mangler ferdigattest; Ferdigattest utstedes ikke på tiltak som er søkt før 01.01.1998.; Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Beskrivelse: Mangler ferdigattest

Risiko 3: Elektrisk anlegg: Ingen samsvarserklæring er fremlagt. Arbeid på el-anlegget (lader for elbil) er utført av ufaglært/egeninnsats. Dette utgjør en sikkerhetsrisiko og kan medføre krav om utbedring.
  Confidence: 0.97
  Evidens: Det er ikke fremlagt samsvarserklæring på det elektriske anlegget (tilstandsgrad settes i henhold til NS3600).; Samsvarserklæring er ikke fremlagt på befaringstidspunktet.; Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Lader for elbil; Foreligger det samsvarserklæring? Nei

Risiko 4: Merkbare skjevheter i flere etasjer (gang, kjøkken og loftstue) med ukjent årsak. Skjevhetene er betydelige og kan indikere setningsskader eller strukturelle problemer. Selger har selv bekreftet settningskader.
  Confidence: 0.96
  Evidens: Skjevhetsmåling: Det er merkbare skjevheter i gangen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 40 mm. Årsak til skjevhetene er ikke kjent.; Skjevhetsmåling: Det er merkbare skjevheter på kjøkken. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 30 mm. Årsak til skjevhetene er ikke kjent.; Skjevhetsmåling: Det er merkbare skjevheter i loftstuen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 48 mm. Årsaken til skjevhetene er ikke kjent.; Kjenner du til om det foreligger skaderapporter/tilstandsvurderinger eller utførte målinger? Ja. Beskrivelse: Settningskader; Sjablongmessig prisanslag: kr 10 000 – 50 000 (Etasjeskiller – Sokkeletasje)

Risiko 5: Våtrom med TG2: Riss, avskallinger og sprekk i gulvfliser, manglende/avskalling av flisfuger rundt sluk, og riss/sprekker i veggflis ved dusjkabinett. Fare for fuktskader og behov for oppgradering.
  Confidence: 0.95
  Evidens: Det er riss, avskallinger og sprekk i enkelte gulvfliser.; Det er manglende/avskalling av flisfuger rundt slukene.; Det er riss/sprekker i veggflis ved siden av dusjkabinett.; Fornying/oppgradering av våtrommet bør påregnes.; Nivåforskjell fra døråpning på topp overflate gulv og til hovedsluk er på tilfeldig sted målt til ca. 10 mm. Dette er vurdert til å ikke være tilfredsstillende mht. lekkasjesikkerhet.

Risiko 6: Manglende tettesjikt i våtsone rundt utslagsvask med fare for fukt i konstruksjonen. Tilstrekkelig tettesjikt bør etableres.
  Confidence: 0.93
  Evidens: Manglende tettesjikt i våtsone rundt utslagsvask. Fare for fukt i konstruksjon. Tilstrekkelig tettesjikt bør etableres.

Risiko 7: Servant har sprekk/riss i porselen, noe som kan medføre lekkasjerisiko.
  Confidence: 0.88
  Evidens: Servant har sprekk/riss i porselen.

Risiko 8: Eiendommen ligger i et område med svært stor mulighet for marin leire (kvikkleire), noe som utgjør en geoteknisk risiko. Løsmassene er klassifisert som hav-/fjordavsetninger under marin grense.
  Confidence: 0.95
  Evidens: Løsmasser: Hav-/fjordavs., sammenh.; Marin grense: Areal under marin grense.; Mulighet for marin leire: Svært stor.

Risiko 9: Radonmåling er gammel (utført i 2015) og verdien er ikke oppgitt (angitt som 'o'). Det er usikkert om radonverdiene er innenfor akseptable grenser, og målingen er over 10 år gammel.
  Confidence: 0.82
  Evidens: Er det foretatt radonmåling? Ja. Beskrivelse: Målt på 3 steder i sokkel. År: 2015. Verdi: o; Radonmåling er ikke gjennomført. (referert til i en annen sammenheng i dokumentet)

Risiko 10: Byggetegninger fra 1997 og 1999 samsvarer ikke med dagens planløsning. Flere endringer er gjort uten godkjenning, inkludert innlemmelse av plassbygd garderobe i soverom og innredning av kjøkken i kjellerstue.
  Confidence: 0.94
  Evidens: Det foreligger godkjente byggetegninger datert 1997 og 1999, men disse samsvarer ikke med dagens planløsning.; Plassbebygdgarderobe er blitt innlemmet i de to mindre soverommene.; Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om.

Risiko 11: Arbeid på terrasse/garasje/tak/fasade er utført av ufaglært/egeninnsats, inkludert fjerning av utgangsdør fra vaskerom til terrasse. Dette kan medføre bygningstekniske og juridiske utfordringer.
  Confidence: 0.87
  Evidens: Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Huseier fjernet utgangsdør fra vaskerom til terrasse.

Risiko 12: Uferdige arbeider i boligen: Gulv i 2. etasje og VF 1. etasje mangler fliser, underetasje er ikke ferdig innredet, og noe planeringsarbeid gjenstår. Skorstein er heller ikke kontrollert.
  Confidence: 0.9
  Evidens: Både gulv i 2. etasje og gulv i V.F. 1. etasje er ikke ferdig, mangler fliser.; Underetasje er ikke ferdig innredet.; Noe planeringsarbeid står igjen.; Skorstein er ikke kontrollert.

Risiko 13: Forurenset grunn: Ukjent påvirkning fra forurenset grunn i tidligere Skedsmo kommune (deponi). Dette kan medføre kostnader til opprydding og begrensninger i bruk av eiendommen.
  Confidence: 0.85
  Evidens: Forurenset grunn: Ukjent påvirkning.; Forurenset grunn i tidligere Skedsmo kommune: Deponi

Risiko 14: Pliktig medlemskap i velforening med forpliktelse til å delta i vedlikehold av fellesarealer. Dette medfører løpende kostnader og forpliktelser for kjøper.
  Confidence: 0.88
  Evidens: Servitutten gjelder pliktig medlemskap i velforening og forpliktelse til å delta i vedlikehold av fellesarealer.; Pliktig medlemskap i velforening m.v.

Risiko 15: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet fremgår ikke av grunnboksutskriften og har prioritet foran tinglyste banklån.
  Confidence: 0.9
  Evidens: Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen.

Risiko 16: Utettheter i dobbelfløyet balkongdør, noe som kan medføre varmetap, fuktinntrenging og økte energikostnader.
  Confidence: 0.85
  Evidens: Dører: Det er utettheter i dobbelfløyet balkongdør.

Dokumentkontekst:
[d162_d162 | Side [1]]
s besiktigelse av eiendommen. Om ikke annet er
kommentert består undersøkelsene av visuelle observasjoner.
Rapporten er utarbeidet i henhold til forskrift til avhendingslova (tryggere bolighandel), gjeldende fra 1. januar 2022. Norsk Standard 3600:2018 er TG 1 Mindre eller moderate avvik (funksjonssvikt ikke oppdaget)
også lagt til grunn, men ikke alle standardens bestemmelser er tatt med. Dette gjelder for eksempel følgende bestemmelser:
Tilstandsgrad 1 gis når bygningsdelen har mindre avvik.

---

[d162_d162 | Side [1]]
nkter. Stikkprøveprinsippet er benyttet.
Tilstandsgrad 3 gis når bygningsdelen har store eller alvorlige avvik. Bygningsdelen har kraftige symptomer på forhold som man må regne med
I rapporten har alle TG 2, TG 3 og TG IU kommentarer for bedre forståelse. De sjekkpunkter som har fått TG 0 og 1 (ikke funnet funksjonssvikt) er
trenger utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt eller sammenbrudd.
listet opp horisontalt i starten av hvert hovedelement.

---

[d162_d162 | Side [1]]
ader, hentet fra forskrift til avhendingsloven:
TG 0 Ingen avvik (funksjonssvikt ikke oppdaget)
Hvordan lese rapporten Tilstandsgrad 0 gis når bygningsdelen ikke har noen avvik. Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsrapporten viser hva som har blitt undersøkt i forbindelse med den bygningssakkyndiges besiktigelse av eiendommen. Om ikke annet er
kommentert består

---

[d162_d162 | Side [1]]
l A.1 (kun påfølgende deler): Punkt 22 (Geologiske forhold)
TG 2 Vesentlige avvik (alder, slitasje, skader mv.)
• Tabell A.3 - Undersøkelser av fellesdeler
• Tillegg C.2 - Tilstandsgrad for branntekniske forhold
Tilstandsgrad 2 gis når bygningsdelen har vesentlige avvik. Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
Det er gjort et utvalg med prinsippet kost / nytte basert på avhendingsloven. Annen relevant bygningsteknisk erfaring og forståelse er også lagt til

---

[d162_d162 | Side [1]]
for større skader eller følgeskader.
Bagatellmessige og åpenbare forhold som er synlige for enhver og ikke har vesentlig bygningsmessig betydning, er normalt ikke omtalt.
Gulv mot grunn og etasjeskillere kontrolleres ved bruk av krysslaser for eventuelle skjevheter. I utgangspunktet kontrolleres to rom i hver etasje TG 3 Store eller alvorlige avvik (strakstiltak nødvendig)
(eventuelt kryssmåling i ett rom), og i hvert rom er det 5 målepunkter. Stikkprøveprinsippet er benyttet.
Tilstandsgrad 3 gis når

---

[d162_d162 | Side [1]]
 ca. 10 mm. Dette er Elektrisk anlegg:
Oppsummering av avvik med tilstandsgrad 2 (TG2) og vurdert til å ikke være tilfredsstillende mht ‑ Forenklet vurdering av det elektriske anlegget: Det er
21 Er det foretatt radonmåling? tilstandsgrad 3 (TG3) fra vedlagt tilstandsrapport: lekkasjesikkerhet. Servant har sprekk/ riss i porselen. Det ikke fremlagt samsvarserklæring på det elektriske
Beskrivelse: Målt på 3 steder i sokkel er anlegget (tilstandsgrad settes i henhold til NS3600). Det
Følgende bygningsdeler

---

[d162_d162 | Side [1]]
henger av
boligen, som kjøper anbefales være spesielt oppmerksom på.
personlige valg av utførelse og produkter. Markedspris på materialer, produkter og håndverkertjenester vil også innvirke på utbedringskostnaden. For
bygningsdeler som er gitt TG3 settes et sjablongmessig prisanslag på utbedringskostnad for tilsvarende standard.
Forklaring av tilstandsgrader
Tilstandsgrader, forkortet til TG, beskriver på en enkel og visuell måte en tilstand eller en risiko opp mot referansenivå. I tillegg til graderingen

---

[d162_d162 | Side [1]]
mmelser:
Tilstandsgrad 1 gis når bygningsdelen har mindre avvik. Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
• 9 - Gjennomgang av dokumentasjon av boligen (kun påfølgende deler): Innhenting av informasjon fra kommunens tekniske etat Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler
• 13.2 - Vurdering av teknisk verdi
• 14.3 - Oppsummering
• Tabell A.1 (kun påfølgende deler): Punkt 22 (Geologiske forhold)
TG 2

---

[d162_d162 | Side [1]]
 utgangsdør fra vaskerom til rapportens TGIU (tilstandsgrad ikke undersøkt), samt TG2 tilhørende bygningsdeler) på grunn av alder, slitasjegrad, forhold som utvikles over tid. Det kan ikke utelukkes
terrasse og TG3 som angir avvik fra normal slitasje, høy alder, tekniske installasjoner og risiko for skjulte skader eller behov for reparasjon/ utskiftning. Jevnlig ettersyn
bygningsdel som må utbedres, og lignende. Det følgende avvik. Det er blant annet registrert følgende avvik: Det er anbefales slik at

---

[d162_d162 | Side [1]]
ide 14/19 EIENDOM |15074669, ENGELIA 18, 2019 SKEDSMOKORSET Side 15/19
72 73

## Side 38

Viktig om TG 2 Gyldighet
Rom for varig opphold
Rapporten skal ikke være eldre enn 12 måneder (fra befaringsdato). Er
TG 2 beskriver også elde/naturlig slitasje
rapporten eldre enn dette må Anticimex AS kontaktes angående videre
Takhøyder er målt på tilfeldige steder i boligen. Tilstandsgrad TG 2 (gul farge) benyttes i flere sammenhenger, blant bruk. Hvis rapporten skal benyttes ved videresalg innenfor
Loftsetasje:

---

[d162_d162 | Side [1]]
ndsgrad settes i henhold til NS3600). Det
Følgende bygningsdeler har fått TG2 (vesentlig avvik) i foretatt hulltaking og utført fuktmåling med egnet er
21.1 Radonmåling tilstandsrapporten: instrument (Protimeter MMS), i tilstøtende rom til våtsone. gjennomført en forenklet vurdering av det elektriske
År: 2015 Det ble ikke registrert forhøyede verdier eller andre avvik. anlegget, uten at det er registrert åpenbare avvik. Med
Verdi: o Våtrom ‑ Bad 2.etasje : Målingene viser følgende: RH 58,7 %, temperatur

---

[d162_d162 | Side [1]]
il å beskrive elde/naturlig slitasje, benyttes TG 2 også når det Rapporten må ikke oppfattes som en garanti eller en fullstendig
faktisk oppdages feil og skader der tiltak er nødvendige og anbefales. beskrivelse av boligens tilstand. Besiktigelsen baseres på
Omfanget av tiltakene kan være høyst forskjellige, fra å holde noe stikkprøveprinsippet og hovedsakelig med visuell observasjoner, men
under oppsikt til å utføre nødvendige utbedringer innen rimelig tid. med noe bruk av egnede instrumenter, når det er

---

[d162_d162 | Side [1]]
ex AS
ENGELIA 18
2019 SKEDSMOKORSET
Gnr./Bnr.: 23/111
Lillestrøm kommune
Areal Bygningssakkyndig selskap
Enebolig Anticimex AS
Bruksareal: 226 m²
www.anticimex.no
Tlf: 41414128
Totalt bruksareal (BRA): 226 m²
E-post: boliginspeksjoner.ost@anticimex.no
Befaring Orgnr: 923 856 781
Befaringsdato: 20.08.2025
Signatur inspektør: Henrik Huso
Mobil: 99225624
58 59

## Side 31

OOmm TTiillssttaannddssrraappppoorrtteenn Vurderinger for tilstandsgrader, hentet fra forskrift til avhendingsloven:
TG 0 Ingen avvik

---

[d162_d162 | Side [1]]
 ikke etablert tilstrekkelig utvikles over tid. Jevnlig ettersyn anbefales slik at
44 45

## Side 24

OM EIENDOMMEN OM EIENDOMMEN
nødvendige tiltak kan iverksettes ved behov. tinglyst følgende heftelser og rettigheter som følger
informasjon
Oppvarming
eiendommens matrikkel ved overskjøting til ny
Følgende bygningsdeler har fått TG3 (store eller alvorlige Oppvarming med elektrisitet og vedfyring. hjemmelshaver:
Adresse
avvik) i tilstandsrapporten:
Engelia 18, 2019 SKEDSMOKORSET Dersom rom for varig opphold

---

[d162_d162 | Side [1]]
enbrudd.
listet opp horisontalt i starten av hvert hovedelement. Hovedhensikten med denne tilstandsrapporten er å bidra til å vurdere boligens tilstand,
oppfylle selgers opplysningsplikt overfor kjøper av boligen, og gi den bygningssakkyndiges faglige vurderinger som gjelder byggetekniske forhold for Sjablongmessig prisanslag er gitt på generelt grunnlag og må ikke ses på som et pristilbud fra håndverker. Kostnader ved utbedring avhenger av
boligen, som kjøper anbefales være spesielt oppmerksom

---

[d162_d162 | Side [1]]
itasjegrad, tekniske installasjoner og risiko for skjulte skader eller avvik. Det er blant
annet registrert følgende avvik: Det er riss, avskallinger og sprekk i enkelte gulvfliser.
Det er menglende/avskallng av flisfuger rundt slukene. Det er foretatt hulltaking og utført fuktmåling med egnet instrument (Protimeter MMS),
i tilstøtende rom til våtsone. Det ble ikke registrert forhøyede verdier eller andre avvik.
Målingene viser følgende: RH 58,7 %, temperatur 21,5 grader C og duggpunkt 13,2
Det er foretatt

---

[d162_d162 | Side [1]]
relevant bygningsteknisk erfaring og forståelse er også lagt til slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid.
grunn, herunder forhold som har registrerte høye klagefrekvenser og/eller skadesaker. Graden skal også brukes når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn til å
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Bagatellmessige og åpenbare

---

[d162_d162 | Side [1]]
x AS.
Sokkeletasje: I gang er takhøyden målt til 2,42 meter og i stue er takhøyden målt til 2,40 meter. gul farge nødvendigvis ikke alltid betyr at det gis et varsel om at noe er Eksempler på hva rapporten ikke vurderer
direkte feil eller har større bygningsskader, men en framskreden
Til informasjon: brukstid der vedlikeholdstiltak ikke må komme som en overraskelse. Tekniske installasjoner og innretninger er som hovedregel ikke vurdert,
Rom benyttet som soverom i sokkeletasje har ikke vindu mot det fri, og

---

[d162_d162 | Side [1]]
forholdene og kan endre seg med på et generelt grunnlag at dette gjennomføres.
ferdigattest? Ja. tekniske installasjoner og risiko for skjulte skader eller årstider, fukt‑ og temperaturforhold. Fornying/
Beskrivelse: Mangler ferdigattest avvik. Det er blant annet registrert følgende avvik: Det er oppgradering av våtrommet bør påregnes. Dører og vinduer:
riss, avskallinger og sprekk i enkelte gulvfliser. Det er ‑ Dører: Det er utettheter i dobbelfløyet balkongdør. Det er
23 Kjenner du til om det foreligger

---

[d162_d162 | Side [1]]
 blant annet registrert følgende avvik: Det er anbefales slik at eventuelle tiltak kan iverksettes ved
17 Selges eiendommen med utleiedel, leilighet, hybel eller er hentet fra den bygningssakkyndiges beskrivelse av riss/ sprekker i veggflis ved siden av dusjkabinett. behov.
tilsvarende? Ja. boligen: Nivåforskjell fra døråpning på topp overflate gulv og til
Beskrivelse: Leilighet med egen inngang i sokkel hovedsluk er på tilfeldig sted målt til ca. 10 mm. Dette er Elektrisk anlegg:
Oppsummering av avvik med

---

[d162_d162 | Side [1]]
entlige endringer for området og eiendommens m.m.
sjablongmessig prisanslag på punkt: eksisterende kvaliteter. Beskrivelse: Servitutten gjelder pliktig medlemskap i
Info energiklasse
"Etasjeskiller‑Sokkeletasje" velforening og forpliktelse til å delta i vedlikehold av
Alle eiendommer som selges eller leies ut skal ha en Utsnitt av plan med tilhørende bestemmelser kan fås ved fellesarealer.
Etasjeskiller ‑ Sokkeletasje : energiattest. Unntak gjelder blant annet for frittstående hendvendelse til megler.
‑

---

[d162_d162 | Side [1]]
odning fra kjøper ikke har fremlagt Forurenset grunn i tidligere Skedsmo kommune: Deponi Legalpant: Kommunen har legalpant som sikkerhet for
kr. 10.000 ‑ 50.000 energiattest før avtale om salg er inngått, kan kjøper få betaling av kommunale avgifter og eventuell
laget en energiattest ved hjelp av ekspert for selgers Geologi: eiendomsskatt. Legalpant er et pant som ikke vises i
regning, innen ett år etter at avtale om salg er inngått. Løsmasser: Hav‑/ fjordavs., sammenh. grunnboksutskriften, og har

---

[d162_d162 | Side [1]]
er Gnr. 23, bnr. 129, ideell andel 1/ 23, sameietype: realsameie Bestemmelse om anlegg og vedlikehold av ledninger
målt til 48 mm. Årsaken til skjevhetene er ikke kjent. i Lillestrøm kommune. m.m.
Regulerings og arealplaner
Sjablongmessing prisanslag må ses i sammenheng med Beskrivelse: Servitutten gjelder pliktig medlemskap i
sjablongmessig prisanslag på punkt: Eiendommen er regulert til frittliggende velforening og forpliktelse til å delta i vedlikehold av
Selger
"Etasjeskiller‑Sokkeletasje"

---

[d162_d162 | Side [1]]
 gjelder blant annet for frittstående hendvendelse til megler.
‑ Skjevhetsmåling: Det er merkbare skjevheter i gangen. bygninger med et bruksareal mindre enn 50 m². Det er For servitutter eldre enn fradelingsdato og eventuelle
Forskjellen mellom høyeste og laveste punkt i rommet er eier som har plikt til å fremlegge energiattest og er Følgende info er hentet fra Geodata: arealoppføringer som kan ha betydning for denne
målt til 40 mm. Årsak til skjevhetene er ikke kjent. ansvarlig for at opplysningene er

---

[d162_d162 | Side [1]]
lig vei.
spørsmål. familiemedlemmer, ønsket innetemperatur, egne avtaler
om energiforsyning med mer. Megler påtar seg ikke Offentlig vann: Ja
Tinglyste heftelser
ansvar for informasjonen som fremgår av energiattesten.
Øvrig
Tinglyste heftelser og rettigheter: På eiendommen er det Offentlig avløp: Ja
46 47

## Side 25

OM EIENDOMMEN OM EIENDOMMEN
gjelder som utgangspunkt for hva som inkluderes i salget avhendingsloven. Det gjelder ulike avtalevilkår avhengig
Kontrakts‑
– med mindre avvik er tydelig avtalt

---

[d162_d162 | Side [1]]
ent hos bygningsmyndighetene?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Målt

---

[d162_d162 | Side [1]]
?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Målt på 3 steder i sokkel
21.1 Radonmåling
År 2015
Verdi o
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
Beskrivelse Mangler ferdigattest
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
Beskrivelse Settningskader
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei

---

[d162_d162 | Side [1]]
slys og bidrar finnes på eiendommen, vil heller ikke følge med i salget. Svar: Ja, kun av ufaglært/ egeninnsats/ dugnad
overskap er det lagt fliser, og benkeskapsbelysning samt til en lys og trivelig atmosfære. Hovedsoverommet Alt utstyr og installasjoner som medfølger overtas slik de Beskrivelse: Lader for elbil
stikkontakter gir en funksjonell arbeidsflate. Kjøkkenet er utmerker seg med ekstra god plass og har tilknytning til er, uten garanti, med mindre det foreligger en gjeldende
utstyrt med

---

[d162_d162 | Side [1]]
mmene i
utstyrt med vegghengt servantskap, sokkeletasjen ikke er godkjent for varig

## Side 18

Plantegning

## Side 19

(Ingen tekst ekstrahert)

## Side 20

OM EIENDOMMEN
ENGELIA 18
OM EIENDOMMEN
renovasjon og feiing/ tilsyn.
Økonomi
Det kan forekomme variasjoner i avgiftene som følge av
Prisantydning
forbruk og eventuelle endringer i gebyrer/ avgifter.
Kr 8 500 000
Andre kostnader:
Omkostning kjøper
TV/ Internett/ Bredbånd: Det er kjøpers ansvar å foreta
Omkostninger: egne undersøkelser vedrørende

---

[d162_d162 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Huseier fjernet utgangsdør fra vaskerom til terrasse
Initialer selger: FCM 2
54
12006240
:ecnerefer
tnemucoD
55

## Side 29

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
Beskrivelse Leilighet med egen inngang i sokkel
17.1 Er ovenfornevnte godkjent hos bygningsmyndighetene?
Nei Ja
18 Kjenner du til om det er

---

[d162_d162 | Side [1]]
til å delta i vedlikehold av
Selger
"Etasjeskiller‑Sokkeletasje" småhusbebyggelse iht. reguleringsplan, datert fellesarealer.
Fred Casper Mellum 22.08.2025. For øvrig ligger eiendommen i et område som
Etasjeskiller ‑ 1.etasje : er avsatt til boligbebyggelse i kommuneplanens arealdel, Dnr. 8211, tgl. 04.06.1998 ‑ Bestemmelse iflg. skjøte
Energimerke
‑ Skjevhetsmåling: Det er merkbare skjevheter på datert 22.08.2025. Bestemmelse om bebyggelse
kjøkken. Forskjellen mellom høyeste og laveste punkt i

---

[d162_d162 | Side [1]]
 eiendomsmegler dersom det er Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk påvirket avtalen.
spørsmål. til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i
følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Kjøper og selger er forpliktet til å signere den standard Fastmonterte eller spesialtilpassede

---

[d162_d162 | Side [1]]
bjektstype: Enebolig eventuelle pålegg fra det offentlige. Dette inkluderer også
Her får du med andre ord en perfekt kombinasjon av et risikoen for om søknad om bruksendring blir godkjent, Andre arealer:
stille og barnevennlig bomiljø – samtidig som du bor med samt alle kostnader forbundet med prosessen. Kopi av TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
Ferdigattest/ brukstillatelse:
kort vei til både natur, idrettstilbud og storbyens fasiliteter. tegninger og eventuelle attester kan fås ved

---

[d162_d162 | Side [1]]
e er BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
Type eiendom
bussen tar deg direkte til Økern. Fra Lillestrøm stasjon tar søkt om. boenheten og som tilhører denne, for eksempel eksterne
toget bare 12 minutter til Gardermoen, og med bil bruker Eieform: Eiet boder.
du ca. 20 minutter til Oslo og 25 minutter til Gardermoen. Kjøper påtar seg risikoen for fremtidig bruk av rommet og BRA‑b ‑ Innglasset balkong, altan, terrasser.
Objektstype: Enebolig eventuelle pålegg fra det offentlige. Dette

---

[d162_d162 | Side [1]]
ten:
Engelia 18, 2019 SKEDSMOKORSET Dersom rom for varig opphold ikke har vegg‑ eller Dnr. 15551, tgl. 08.10.1997 ‑ Bestemmelse iflg. skjøte
Etasjeskiller ‑ Loft: fastmonterte varmekilder ved visning følger dette heller Bestemmelse om bebyggelse
‑ Skjevhetsmåling: Det er merkbare skjevheter i loftstuen. Gnr. 23, bnr. 111, ideell andel 1/ 1 ikke med. Pliktig medlemskap i velforening m.v.
Forskjellen mellom høyeste og laveste punkt i rommet er Gnr. 23, bnr. 129, ideell andel 1/ 23, sameietype: realsameie

---

[d162_d162 | Side [1]]
til skjevhetene er ikke kjent. ansvarlig for at opplysningene er korrekte. matrikkelenhet henvises det til avgivereiendommen. Ta
Sjablongmessig prisanslag gjelder ytterligere Forurensning: kontakt med megler for mer informasjon.
undersøkelser for å avklare eksakt årsak. Ytterligere Dersom eier ikke har lagt frem energiattest, og eier etter Forurenset grunn: Ukjent påvirkning.
påkostninger må påregnes. Sjablongmessig prisanslag: skriftlig anmodning fra kjøper ikke har fremlagt Forurenset grunn i tidligere

---

[d162_d162 | Side [1]]
er er det rør‑i‑rør system funksjonelt og komfortabelt – perfekt som en privat Kjøper aksepterer at det kan forekomme hull og merker ventilasjon)? Ja.
for vannrør og avløpsrør i plast. foreldresone. etter montering av inventar og utstyr som ikke er en del Beskrivelse: Forsikringsselskapet hadde elsjekk 2021??
av overdragelsen.
13 Har du ladeanlegg/ ladeboks for elbil i dag? Ja.
42 43

## Side 23

OM EIENDOMMEN OM EIENDOMMEN
Beskrivelse: 3fas lader på vegg og må leses nøye av interessenter før det legges

---

[d162_d162 | Side [1]]
 gjennomgås normalt med i handelen, med mindre det foreligger en reklamasjon eller prisavslag. avhendingsloven.
hos eiendomsmegler før budet legges inn. Kontakt særskilt avtale mellom partene om noe annet, jf.
eiendomsmegler for eventuelle spørsmål. avhendingsloven § 3‑5. Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
Selger leverer eiendommen i ryddig og rengjort tilstand.

---

[d162_d162 | Side [1]]
Løsmasser: Hav‑/ fjordavs., sammenh. grunnboksutskriften, og har prioritet foran for eksempel
Ovennevnte punkter er på ingen måte utfyllende. For Dette følger av forskrift om energimerking av bygninger Marin grense: Areal under marin grense. tinglyste banklån på eiendommen.
ytterligere informasjon om byggemåte, årsak bak og tekniske anlegg § 5 (3). Mulighet for marin leire: Svært stor.
tilstandsgrader, konsekvens og anslag på eventuelle Radon aktsomhet: Moderat/ lav aktsomhetsgrad.
utbedringskostnader, se

---

[d162_d162 | Side [1]]
1999
Etasjeskiller - Sokkeletasje Skjevhetsmåling 12 Kr 10 000 - 50 000
Byggemåte
Etasjeskiller - Loft Skjevhetsmåling 12
Enebolig med hybel beliggende på Skedsmokorset i Lillestrøm kommune. Tomt opparbeidet med blant annet gruslagt oppkjørsel, overbygget Tekniske anlegg, VVS
terrasse på fremsiden av boligen. Plenarealer og diverse beplantning. anlegg (Sjekkpunkter utover Varmtvannsbereder (Sjekkpunkter utover det som er inkludert i
12
det som er inkludert i andre andre rom)
Boligen er oppført med støpt

---

[d162_d162 | Side [1]]
ebyggelse
kjøkken. Forskjellen mellom høyeste og laveste punkt i Energikarakter: Ikke angitt Pliktig medlemskap i velforening m.v.
rommet er målt til 30 mm. Årsak til skjevhetene er ikke Kommunen er for tiden ikke kjent med Med flere bestemmelser
kjent. Energifarge: Ikke angitt reguleringsmessige forhold som tilsier at det kan bli Bestemmelse om anlegg og vedlikehold av ledninger
Sjablongmessing prisanslag må ses i sammenheng med vesentlige endringer for området og eiendommens m.m.
sjablongmessig

---

[d162_d162 | Side [1]]
VEDTAK:
SAKSFRAMLEGG
Arbeidene godkjennes i henhold til plan- og bygningsloven § 93e, samt SAK § 14 nr 5f.
Skedsmo kommune
Fred Casper Mellum godkjennes som ansvarshavende for omsøkte arbeider.
Det ska! i henhold ti! ssbyirssai—tivet ^qt hy^^cssksbskdiidlin*^ innbetales fø!®ende:
Ansvarsrett.....................................................................kr 446,-
Arkivsaksnr: 97/5 647 Utv.saksnr: Å DS 99/551
Skorsteiner/ildsteder.......................................................kr

---

[d162_d162 | Side [1]]
 relevant. forestående eller først skje mange år frem i tid. Når anbefalt brukstid (eks.vis rom under terreng, loft eller andre uinnredete arealer),
etter beste skjønn er vurdert oppnådd, har restlevetiden dermed større vurdering av boligens markedsverdi, teknisk verdi, om boligen og
Dokumentasjon på drikkevannskvalitet hvis Ikke relevant. usikkerhet. eventuelle ombygginger/bruksendringer er byggemeldte og godkjente,
boligen ikke er tilkoblet kommunal forsyning samt om rom i boligen som brukes til varig

---

[d162_d162 | Side [1]]
tur unna finner du
Kommunale avgifter
Tæruddalen, med milevis av merkede tur‑ og sykkelstier.
Kr 32 869 (2024) Vinterstid kan du spenne på deg skiene og følge løypene
innover i Romeriksåsen, mens sommeren byr på bade‑
Informasjon: I dette inngår gebyr for: vann, avløp, og fiskevann idyllisk plassert i marka.
39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
Tomtetype: Eiet TBA fordelt på etasje
Skedsmokorset er også kjent for sitt brede Første etasje: 1. etasje
aktivitetstilbud. Her finner du moderne

---

[d162_d162 | Side [1]]
ering av fellesdeler i
utbedringsbehov er påregnelig og normalt. sameier-borettslag og lignende, vurdering av energiforbruk,
Dokumentasjon på el-tilsyn Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet. Eksempler energimerking, støy, vibrasjoner, lydforhold, radonmålinger, inneklima,
miljø, elektromagnetisme, funksjonskrav (universell utforming,
Eventuelle tilsynsrapporter fra offentlige Ikke fremlagt på befaringstidspunktet. En tilårskommen membran vil ofte få TG 2, selv om det ikke er

---

[d162_d162 | Side [1]]
n bygningssakkyndige ikke
vurderer:
For elektriske anlegg utført etter 1999-01-01: Samsvarserklæring er ikke fremlagt på befaringstidspunktet. Når en rapport inneholder mange TG 2, trenger dermed ikke det være Eventuelle tilhørende bruksrettigheter på annens eiendom, herunder
Erklæring om samsvar for det elektriske anlegget «farlig». De fleste boliger i Norge er av eldre årgang og for eksempel naust og brygge, kartlegging og vurdering av fellesdeler i
utbedringsbehov er påregnelig og normalt.

---

[d162_d162 | Side [1]]
et
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av ufaglært/egeninnsats/dugnad
Beskrivelse Lader for elbil
11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)?
Nei Ja
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr,

---

[d162_d162 | Side [1]]
en er innredet og har utlektede kjellervegger. Gulvflater belagt med laminat og fliser. Veggflater med malte flater, tapet og malt panel. Skorsteiner inne i boligen - Ildsteder inne i boligen
Himlingsflater med malt panel. Profilerte innerdører. Naturlig ventilasjon via ventiler. Oppvarming med elektrisitet.
TG 1 Følgende sjekkpunkter er vurdert, og det er ikke oppdaget funksjonssvikt: Innvendige trapper
Overflater himling - Overflater vegger - Innerdører - Konstruksjoner (tilfarergulv, himling og vegger).

---

[d162_d162 | Side [1]]
rt, eller siste gang totalt rehabilitert: Byggeår
Foreligger det el-tilsynrapport fra de siste fem år: Nei
Forekommer det at sikringer løses ut: Nei
Har det vært brann, branntilløp eller varmgang i anlegget: Nei
Finnes det kursfortegnelse, og er antallet sikringer i samsvar med denne: Ja
Etasjeskiller - Loft Har det vært utført egeninnsats eller ufaglært arbeid på det elektriske anlegget: Nei
Fungerer hvitevarer som følger boligen: Ja
Etasjeskille av trekonstruksjoner. Sikringsskap med automatsikringer er

---

[d162_d162 | Side [1]]
 aktsomhet: Moderat/ lav aktsomhetsgrad.
utbedringskostnader, se tilstandsrapport som ligger Energiattesten er basert på nåværende eiers/
Vei, vann og avløp
vedlagt. Interessenter oppfordres til å kontakte husstandens forbruk og utgifter de siste årene. Forbruket Landskap:
bygningssakyndig ved eventuelle bygningstekniske kan variere avhengig av faktorer som antall Naturtyper i Norge: Innlandslandskap. Eiendommen har adkomst via offentlig vei.
spørsmål. familiemedlemmer, ønsket innetemperatur, egne

---

[d162_d162 | Side [1]]
m (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Initialer selger: FCM 3
12006240
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven

---

[d162_d162 | Side [1]]
ikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det

---

[d162_d162 | Side [1]]
era i oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
Lovanvendelse
forbindelse med eiendomshandler. Kjøpekontrakten kan eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
gjennomgås hos eiendomsmegleren før budet legges inn. Regelverk og generelle opplysninger tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Ta kontakt med eiendomsmegler dersom det er Boligen selges med det inventar og

---

[d162_d162 | Side [1]]
oligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til

---

[d162_d162 | Side [1]]
ed slike kjøp selges eiendommen «som den er», og Eiendomsmeglere er underlagt lov om hvitvasking, og er sander.svendsen@emera.no
selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av blant annet forpliktet til å gjennomføre kundetiltak av Tlf: 418 53 331
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene fravikes budrunden. I forbrukerforhold (dvs. der selger er både selger og kjøper.
§ 3‑3 andre ledd, og eventuelle arealavvik vurderes

---

[d162_d162 | Side [1]]
ar tegnet kjøper setter seg grundig inn i alle salgsdokumentene, aksepteres, og er ikke forpliktet til å velge det høyeste.
eiendommen er større enn 2 mål, må kjøper undertegne boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
nødvendige dokumenter for å søke om konsesjonsfrihet. avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med forhold Alle budgivere må ved inngivelse av bud opplyse om

---

[d162_d162 | Side [1]]

EMERA Lillestrøm
Oppdragsnr.
04260021
Selger 1 navn
Fred Casper Mellum
Gateadresse
Engelia 18
Poststed Postnr
SKEDSMOKORSET 2019
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 1998
Hvor lenge har du eid boligen?
Antall år 27
Antall måneder 0
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap

---

[d162_d162 | Side [1]]
t med forhold Alle budgivere må ved inngivelse av bud opplyse om de
Egenerklæringsskjema er vedlagt salgsoppgaven og som er tydelig beskrevet i salgsdokumentene, slike opptrer som forbruker eller som næringsdrivende/ person
interessenter oppfordres til å gjennomgå denne før bud forhold kan ikke senere gjøres gjeldende som en mangel som handler hovedsakelig som ledd i næringsvirksomhet.
Radonmåling
inngis. ved boligen. Dette gjelder uavhengig av om dokumentene Det vil opplyses hvis konkurrerende bud kommer

---

[d162_d162 | Side [1]]
odd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men

---

[d162_d162 | Side [1]]
s lader på vegg og må leses nøye av interessenter før det legges inn bud. tettesjikt i våtsone rundt utslagsvask. Fare for fukt i Tekniske anlegg, VVS anlegg (Sjekkpunkter utover det
Kjøper anses kjent med de opplysninger som tydelig gis i konstruksjon. Tilstrekkelig tettesjikt bør etableres. som er inkludert i andre rom):
16 Kjenner du til om det har vært utført arbeid på en offentlig godkjent tilstandsrapport, og kan følgelig ikke ‑ Varmtvannsbereder (Sjekkpunkter utover det som er
terrasse/g arasje/

---

[d162_d162 | Side [1]]
r uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026 hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
80 81

## Side 42

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår

---

[d162_d162 | Side [1]]
 mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for

---

[d162_d162 | Side [1]]
av om dokumentene Det vil opplyses hvis konkurrerende bud kommer fra en
Radonmåling er ikke gjennomført. er lest. ikke‑forbruker.
Boligkjøperforsikring: Kjøper har anledning til å tegne
Det gjøres oppmerksom på at det ved utleie er krav til å boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av Forbrukerkjøp – definisjon og vilkår:
gjennomføre radonmåling, og at forsvarlige nivåer skal informasjon om Boligkjøperforsikring fra Söderberg & rom og det

---

[d162_d162 | Side [1]]
rofilen i salgsoppgavens vedleggsdel, for ‑ Noe planeringsarbeid står igjen. som tilleggsinformasjon til øvrige arealer.
Areal
oversikt over andre skoler og barnehager i nærheten. ‑ Skorstein er ikke kontrollert.
BRA ‑ i: 226 m²
Bygningssakkyndigs
Søknaden om godkjenning av skorstein ble 30. juli 1999 BRA totalt: 226 m²
Parkering
godkjent. TBA: 59 m²
kommentar til
Parkering på egen tomt.
Ferdigattest utstedes ikke på tiltak som er søkt før Bruksareal fordelt på etasje
arealoppmåling
01.01.1998. Kjøper

---

[d162_d162 | Side [1]]
klikke på kartet kan du enkelt planlegge din rute fra valgt blir godkjent, samt alle kostnader forbundet med BRA‑i: 88 m² Første etasje måleverdig som bruksareal. De delene av arealene som
startpunkt og helt frem til boligen. Det vil være skiltet ved prosessen. har lav himlingshøyde (ALH) utgjør 10 m².
fellesvisninger for enkel orientering.
Det foreligger godkjente byggetegninger datert 1997 og 2. etasje
1999 men disse samsvarer ikke med dagens planløsning BRA‑i: 54 m² Andre etasje Vedlagte plantegninger

---

[d162_d162 | Side [1]]
t. Fra Skedsmo kirke Sokkeletasje:
bussholdeplass, kun 500 meter fra boligen, går buss 360 ‑ Det som i dag benyttes som tre soverom i sokkeletasjen Bruksareal BRA:
eiendommen
mot både Lillestrøm og Skedsmokorset sentrum. Følger er ikke godkjent for varig opphold. BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
du gangveien forbi fotballbanen, når du Holt senter hvor ‑ Kjellerstue er blitt innredet med kjøkken uten at dette er BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
Type

---

[d162_d162 | Side [1]]
rnehage/ Skole/ Fritid: Dersom skole‑ og ‑ Både gulv i 2. etasje og gulv i V .F. 1. etasje er ikke ferdig, GUA – summen av BRA og AHL. Brukes når boligen har
barnehagetilbud er av betydning for kjøpet, må mangler fliser. gulvareal som ikke er måleverdig på grunn av for
Innhold
interessenter selv sjekke dette med skolesjefens kontor. ‑ Underetasje er ikke ferdig innredet. eksempel skråtak eller lav himlingshøyde. Arealet oppgis
Se nabolagsprofilen i salgsoppgavens vedleggsdel, for ‑ Noe planeringsarbeid

---

[d162_d162 | Side [1]]
).
Skedsmo IK (ishockey), Skedsmo Skiklubb og Skedsmo overbygget terrasse på fremsiden av boligen. Plenarealer Andre etasje:
HK (håndball) sørger for et levende idrettsmiljø for både og diverse beplantning. ‑ Plassbebygdgarderobe er blitt innlemmet i de to mindre Fra 01.01.24 er det innført nye regler for måling og
små og store. soverommene. opplysning av areal på boliger.
De nye arealbegrepene er:
Beskrivelse av
Kollektivtilbudet er svært godt. Fra Skedsmo kirke Sokkeletasje:
bussholdeplass, kun 500 meter

---

[d162_d162 | Side [1]]
rolig og
familievennlig boligområde på Skedsmokorset, med nærhet til
barnehager, skoler, bussforbindelser og dagligvare. Området er
godt etablert og byr på trygge omgivelser for både store og små.
Kvaliteter verdt å bemerke:
‑ Enebolig over tre plan med lys og gjennomtenkt planløsning
‑ Velholdt standard – flytt rett inn!
‑ Flere solrike uteplasser
‑ Pent opparbeidet hage
‑ Rolig og familievennlig beliggenhet på Skedsmokorset
Velkommen til hyggelig!
9

## Side 6

Sander Svendsen v/ Emera
Eiendomsmegling

---

[d162_d162 | Side [1]]
evilkår avhengig
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og av om kjøper er forbrukerkjøper eller ikke, og dette er
Utleie
selger. nærmere forklart nedenfor.
grunnlag
Adgang til utleie: Den del av boligen som i dag fremstår
som en utleiedel, er ikke godkjent for varig opphold. Om informasjonsgrunnlaget Budgivning og selgers vurdering
Overtakelse
Eventuell søknad om bruksendring skjer for kjøpers Opplysninger om boligens størrelse og utforming, både På grunn av ulike ansvarsforhold kan

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Soverom og utleiedel i sokkeletasje er ikke godkjent for varig opphold. Tre soverom i sokkeletasjen mangler godkjenning, og kjellerstue er innredet med kjøkken uten godkjenning. Kjøper overtar risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.",
      "evidence": [
        "Det som i dag benyttes som tre soverom i sokkeletasjen er ikke godkjent for varig opphold.",
        "Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om.",
        "Adgang til utleie: Den del av boligen som i dag fremstår som en utleiedel, er ikke godkjent for varig opphold.",
        "Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om bruksendring blir godkjent, samt alle kostnader forbundet med prosessen.",
        "Rom benyttet som soverom i sokkeletasje har ikke vindu mot det fri"
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R2",
      "description": "Manglende ferdigattest for eiendommen. Det er bekreftet at ferdigattest mangler, noe som kan indikere ulovlige eller ikke-godkjente byggearbeider.",
      "evidence": [
        "Mangler ferdigattest",
        "Ferdigattest utstedes ikke på tiltak som er søkt før 01.01.1998.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Beskrivelse: Mangler ferdigattest"
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Elektrisk anlegg: Ingen samsvarserklæring er fremlagt. Arbeid på el-anlegget (lader for elbil) er utført av ufaglært/egeninnsats. Dette utgjør en sikkerhetsrisiko og kan medføre krav om utbedring.",
      "evidence": [
        "Det er ikke fremlagt samsvarserklæring på det elektriske anlegget (tilstandsgrad settes i henhold til NS3600).",
        "Samsvarserklæring er ikke fremlagt på befaringstidspunktet.",
        "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Lader for elbil",
        "Foreligger det samsvarserklæring? Nei",
        "Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Merkbare skjevheter i flere etasjer (gang, kjøkken og loftstue) med ukjent årsak. Skjevhetene er betydelige og kan indikere setningsskader eller strukturelle problemer. Selger har selv bekreftet settningskader. Sjablongmessig prisanslag kr 10 000–50 000.",
      "evidence": [
        "Skjevhetsmåling: Det er merkbare skjevheter i gangen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 40 mm. Årsak til skjevhetene er ikke kjent.",
        "Skjevhetsmåling: Det er merkbare skjevheter på kjøkken. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 30 mm. Årsak til skjevhetene er ikke kjent.",
        "Skjevhetsmåling: Det er merkbare skjevheter i loftstuen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 48 mm. Årsaken til skjevhetene er ikke kjent.",
        "Kjenner du til om det foreligger skaderapporter/tilstandsvurderinger eller utførte målinger? Ja. Beskrivelse: Settningskader",
        "Sjablongmessig prisanslag: kr 10 000 – 50 000 (Etasjeskiller – Sokkeletasje)"
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R5",
      "description": "Våtrom med TG2: Riss, avskallinger og sprekk i gulvfliser, manglende/avskalling av flisfuger rundt sluk, og riss/sprekker i veggflis ved dusjkabinett. Utilstrekkelig fall mot sluk. Fare for fuktskader og behov for oppgradering.",
      "evidence": [
        "Det er riss, avskallinger og sprekk i enkelte gulvfliser.",
        "Det er manglende/avskalling av flisfuger rundt slukene.",
        "Det er riss/sprekker i veggflis ved siden av dusjkabinett.",
        "Fornying/oppgradering av våtrommet bør påregnes.",
        "Nivåforskjell fra døråpning på topp overflate gulv og til hovedsluk er på tilfeldig sted målt til ca. 10 mm. Dette er vurdert til å ikke være tilfredsstillende mht. lekkasjesikkerhet."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R6",
      "description": "Manglende tettesjikt i våtsone rundt utslagsvask med fare for fukt i konstruksjonen. Tilstrekkelig tettesjikt bør etableres.",
      "evidence": [
        "Manglende tettesjikt i våtsone rundt utslagsvask. Fare for fukt i konstruksjon. Tilstrekkelig tettesjikt bør etableres."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Servant har sprekk/riss i porselen, noe som kan medføre lekkasjerisiko.",
      "evidence": [
        "Servant har sprekk/riss i porselen."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Eiendommen ligger i et område med svært stor mulighet for marin leire (kvikkleire), noe som utgjør en geoteknisk risiko. Løsmassene er klassifisert som hav-/fjordavsetninger under marin grense.",
      "evidence": [
        "Løsmasser: Hav-/fjordavs., sammenh.",
        "Marin grense: Areal under marin grense.",
        "Mulighet for marin leire: Svært stor."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R9",
      "description": "Radonmåling er gammel (utført i 2015) og verdien er ikke oppgitt (angitt som 'o'). Det er usikkert om radonverdiene er innenfor akseptable grenser. Målingen er over 10 år gammel og verdien er ikke lesbar/dokumentert. Ny måling bør gjennomføres, særlig ved utleie.",
      "evidence": [
        "Er det foretatt radonmåling? Ja. Beskrivelse: Målt på 3 steder i sokkel. År: 2015. Verdi: o",
        "Radonmåling er ikke gjennomført. (referert til i en annen sammenheng i dokumentet)",
        "Det gjøres oppmerksom på at det ved utleie er krav til å gjennomføre radonmåling, og at forsvarlige nivåer skal..."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Byggetegninger fra 1997 og 1999 samsvarer ikke med dagens planløsning. Flere endringer er gjort uten godkjenning, inkludert innlemmelse av plassbygd garderobe i soverom og innredning av kjøkken i kjellerstue.",
      "evidence": [
        "Det foreligger godkjente byggetegninger datert 1997 og 1999, men disse samsvarer ikke med dagens planløsning.",
        "Plassbebygdgarderobe er blitt innlemmet i de to mindre soverommene.",
        "Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R11",
      "description": "Arbeid på terrasse/garasje/tak/fasade er utført av ufaglært/egeninnsats, inkludert fjerning av utgangsdør fra vaskerom til terrasse. Dette kan medføre bygningstekniske og juridiske utfordringer.",
      "evidence": [
        "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Huseier fjernet utgangsdør fra vaskerom til terrasse."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Uferdige arbeider i boligen: Gulv i 2. etasje og VF 1. etasje mangler fliser, underetasje er ikke ferdig innredet, noe planeringsarbeid gjenstår, og skorstein er ikke kontrollert.",
      "evidence": [
        "Både gulv i 2. etasje og gulv i V.F. 1. etasje er ikke ferdig, mangler fliser.",
        "Underetasje er ikke ferdig innredet.",
        "Noe planeringsarbeid står igjen.",
        "Skorstein er ikke kontrollert."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Forurenset grunn: Ukjent påvirkning fra forurenset grunn i tidligere Skedsmo kommune (deponi). Dette kan medføre kostnader til opprydding og begrensninger i bruk av eiendommen.",
      "evidence": [
        "Forurenset grunn: Ukjent påvirkning.",
        "Forurenset grunn i tidligere Skedsmo kommune: Deponi"
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Pliktig medlemskap i velforening med forpliktelse til å delta i vedlikehold av fellesarealer. Dette medfører løpende kostnader og forpliktelser for kjøper.",
      "evidence": [
        "Servitutten gjelder pliktig medlemskap i velforening og forpliktelse til å delta i vedlikehold av fellesarealer.",
        "Pliktig medlemskap i velforening m.v."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet fremgår ikke av grunnboksutskriften og har prioritet foran tinglyste banklån.",
      "evidence": [
        "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R16",
      "description": "Utettheter i dobbelfløyet balkongdør, noe som kan medføre varmetap, fuktinntrenging og økte energikostnader.",
      "evidence": [
        "Dører: Det er utettheter i dobbelfløyet balkongdør."
      ],
      "source_documents": [
        "d162_d162"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "skorstein kontroll tilstandsgrad ildsted",
    "varmtvannsbereder alder tilstand TG",
    "tak membran lekkasje tilstandsgrad",
    "drenering fukt grunnmur sokkeletasje",
    "vinduer alder tilstand TG2 TG3",
    "radon verdi måleresultat sokkel akseptabelt nivå",
    "kvikkleire geoteknisk vurdering rapport",
    "el-anlegg sikringsskap alder tilstandsgrad",
    "prisantydning 8500000 takst verdi",
    "konsesjon odel forkjøpsrett"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ulovlige rom i sokkel (0.98 → 0.99):** Svært godt dokumentert. Evidensen er eksplisitt og mangfoldig: tre soverom ikke godkjent, kjøkken ikke søkt om, utleiedel ikke godkjent, manglende vindu mot det fri i soverom. Confidence justeres marginalt opp til 0.99 da dette er en av de mest alvorlige og klart dokumenterte risikoene.\n\n**R2 – Manglende ferdigattest (0.97):** Godt dokumentert. Selger bekrefter manglende ferdigattest. Noten om at ferdigattest ikke utstedes for tiltak søkt før 01.01.1998 er relevant kontekst. Confidence beholdes på 0.97.\n\n**R3 – El-anlegg uten samsvarserklæring (0.97):** Godt dokumentert. Både manglende samsvarserklæring og ufaglært arbeid er bekreftet. El-tilsynsrapport er heller ikke fremlagt. Confidence beholdes på 0.97.\n\n**R4 – Skjevheter/setningsskader (0.96):** Godt dokumentert med konkrete målinger i tre rom (40mm, 30mm, 48mm). Selger bekrefter settningskader. Årsak ukjent er en tilleggsrisiko. Confidence beholdes på 0.96.\n\n**R5 – Våtrom TG2 (0.95):** Godt dokumentert med konkrete avvik. Utilstrekkelig fall mot sluk (10mm) er særlig alvorlig. Confidence beholdes på 0.95.\n\n**R6 – Manglende tettesjikt utslagsvask (0.93):** Direkte sitert i dokumentet. Confidence beholdes på 0.93.\n\n**R7 – Servant med sprekk (0.88 → 0.85):** Dokumentert, men dette er et relativt begrenset avvik. Confidence justeres ned marginalt til 0.85 da dette er et mindre alvorlig forhold sammenlignet med de øvrige risikoene.\n\n**R8 – Kvikkleire/marin leire (0.95):** Godt dokumentert fra Geodata-informasjon. \"Svært stor\" mulighet for marin leire er eksplisitt angitt. Ingen geoteknisk rapport er nevnt, noe som er en tilleggsrisiko. Confidence beholdes på 0.95.\n\n**R9 – Radonmåling gammel/uklar (0.82 → 0.80):** Dokumentert, men noe tvetydig. Verdien \"o\" kan bety null eller at den ikke er lesbar. Dokumentet nevner også \"Radonmåling er ikke gjennomført\" i en annen sammenheng, noe som skaper forvirring. Radon aktsomhetsgrad er angitt som \"Moderat/lav\". Confidence justeres ned til 0.80.\n\n**R10 – Byggetegninger samsvarer ikke (0.94):** Godt dokumentert. Eksplisitt nevnt at tegninger fra 1997/1999 ikke samsvarer med dagens planløsning. Confidence beholdes på 0.94.\n\n**R11 – Ufaglært arbeid terrasse/fasade (0.87):** Dokumentert. Fjerning av dør er et konkret tiltak. Confidence beholdes på 0.87.\n\n**R12 – Uferdige arbeider (0.90):** Godt dokumentert med fire konkrete punkter. Confidence beholdes på 0.90.\n\n**R13 – Forurenset grunn (0.85):** Dokumentert fra Geodata. \"Ukjent påvirkning\" er noe vagt, men deponi er nevnt. Confidence beholdes på 0.85.\n\n**R14 – Velforening (0.88):** Dokumentert som tinglyst servitutt. Confidence beholdes på 0.88.\n\n**R15 – Legalpant (0.90):** Direkte sitert i dokumentet. Confidence beholdes på 0.90.\n\n**R16 – Balkongdør utetthet (0.85):** Dokumentert. Confidence beholdes på 0.85.\n\n**Mulige manglende risikoer identifisert:**\n1. Varmtvannsbereder – nevnt i dokumentet men tilstand/alder ikke vurdert\n2. Tak/membran – ikke eksplisitt vurdert i de fremlagte chunkene\n3. Drenering/fukt i grunnmur – sokkeletasje med potensielle fuktproblemer ikke eksplisitt nevnt\n4. Vinduer – alder og tilstand ikke vurdert\n5. Skorstein – ikke kontrollert (delvis dekket av R12)\n6. Geoteknisk rapport – ingen rapport foreligger til tross for svært stor kvikkleirerisiko\n7. Konsesjon/odel – ikke vurdert\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
}

## Raw Response
```json
{
  "id": "msg_01CK12MsYSkXJkeA6kJtDHCt",
  "container": null,
  "content": [
    {
      "id": "toolu_01DQjaQB6vmNJ2vn6Wvu5Thp",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Soverom og utleiedel i sokkeletasje er ikke godkjent for varig opphold. Tre soverom i sokkeletasjen mangler godkjenning, og kjellerstue er innredet med kjøkken uten godkjenning. Kjøper overtar risikoen for fremtidig bruk og eventuelle pålegg fra det offentlige.",
            "evidence": [
              "Det som i dag benyttes som tre soverom i sokkeletasjen er ikke godkjent for varig opphold.",
              "Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om.",
              "Adgang til utleie: Den del av boligen som i dag fremstår som en utleiedel, er ikke godkjent for varig opphold.",
              "Kjøper påtar seg risikoen for fremtidig bruk av rommet og eventuelle pålegg fra det offentlige. Dette inkluderer også risikoen for om søknad om bruksendring blir godkjent, samt alle kostnader forbundet med prosessen.",
              "Rom benyttet som soverom i sokkeletasje har ikke vindu mot det fri"
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R2",
            "description": "Manglende ferdigattest for eiendommen. Det er bekreftet at ferdigattest mangler, noe som kan indikere ulovlige eller ikke-godkjente byggearbeider.",
            "evidence": [
              "Mangler ferdigattest",
              "Ferdigattest utstedes ikke på tiltak som er søkt før 01.01.1998.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Beskrivelse: Mangler ferdigattest"
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Elektrisk anlegg: Ingen samsvarserklæring er fremlagt. Arbeid på el-anlegget (lader for elbil) er utført av ufaglært/egeninnsats. Dette utgjør en sikkerhetsrisiko og kan medføre krav om utbedring.",
            "evidence": [
              "Det er ikke fremlagt samsvarserklæring på det elektriske anlegget (tilstandsgrad settes i henhold til NS3600).",
              "Samsvarserklæring er ikke fremlagt på befaringstidspunktet.",
              "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Lader for elbil",
              "Foreligger det samsvarserklæring? Nei",
              "Dokumentasjon på el-tilsyn er ikke fremlagt på befaringstidspunktet."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Merkbare skjevheter i flere etasjer (gang, kjøkken og loftstue) med ukjent årsak. Skjevhetene er betydelige og kan indikere setningsskader eller strukturelle problemer. Selger har selv bekreftet settningskader. Sjablongmessig prisanslag kr 10 000–50 000.",
            "evidence": [
              "Skjevhetsmåling: Det er merkbare skjevheter i gangen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 40 mm. Årsak til skjevhetene er ikke kjent.",
              "Skjevhetsmåling: Det er merkbare skjevheter på kjøkken. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 30 mm. Årsak til skjevhetene er ikke kjent.",
              "Skjevhetsmåling: Det er merkbare skjevheter i loftstuen. Forskjellen mellom høyeste og laveste punkt i rommet er målt til 48 mm. Årsaken til skjevhetene er ikke kjent.",
              "Kjenner du til om det foreligger skaderapporter/tilstandsvurderinger eller utførte målinger? Ja. Beskrivelse: Settningskader",
              "Sjablongmessig prisanslag: kr 10 000 – 50 000 (Etasjeskiller – Sokkeletasje)"
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R5",
            "description": "Våtrom med TG2: Riss, avskallinger og sprekk i gulvfliser, manglende/avskalling av flisfuger rundt sluk, og riss/sprekker i veggflis ved dusjkabinett. Utilstrekkelig fall mot sluk. Fare for fuktskader og behov for oppgradering.",
            "evidence": [
              "Det er riss, avskallinger og sprekk i enkelte gulvfliser.",
              "Det er manglende/avskalling av flisfuger rundt slukene.",
              "Det er riss/sprekker i veggflis ved siden av dusjkabinett.",
              "Fornying/oppgradering av våtrommet bør påregnes.",
              "Nivåforskjell fra døråpning på topp overflate gulv og til hovedsluk er på tilfeldig sted målt til ca. 10 mm. Dette er vurdert til å ikke være tilfredsstillende mht. lekkasjesikkerhet."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R6",
            "description": "Manglende tettesjikt i våtsone rundt utslagsvask med fare for fukt i konstruksjonen. Tilstrekkelig tettesjikt bør etableres.",
            "evidence": [
              "Manglende tettesjikt i våtsone rundt utslagsvask. Fare for fukt i konstruksjon. Tilstrekkelig tettesjikt bør etableres."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Servant har sprekk/riss i porselen, noe som kan medføre lekkasjerisiko.",
            "evidence": [
              "Servant har sprekk/riss i porselen."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Eiendommen ligger i et område med svært stor mulighet for marin leire (kvikkleire), noe som utgjør en geoteknisk risiko. Løsmassene er klassifisert som hav-/fjordavsetninger under marin grense.",
            "evidence": [
              "Løsmasser: Hav-/fjordavs., sammenh.",
              "Marin grense: Areal under marin grense.",
              "Mulighet for marin leire: Svært stor."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R9",
            "description": "Radonmåling er gammel (utført i 2015) og verdien er ikke oppgitt (angitt som 'o'). Det er usikkert om radonverdiene er innenfor akseptable grenser. Målingen er over 10 år gammel og verdien er ikke lesbar/dokumentert. Ny måling bør gjennomføres, særlig ved utleie.",
            "evidence": [
              "Er det foretatt radonmåling? Ja. Beskrivelse: Målt på 3 steder i sokkel. År: 2015. Verdi: o",
              "Radonmåling er ikke gjennomført. (referert til i en annen sammenheng i dokumentet)",
              "Det gjøres oppmerksom på at det ved utleie er krav til å gjennomføre radonmåling, og at forsvarlige nivåer skal..."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Byggetegninger fra 1997 og 1999 samsvarer ikke med dagens planløsning. Flere endringer er gjort uten godkjenning, inkludert innlemmelse av plassbygd garderobe i soverom og innredning av kjøkken i kjellerstue.",
            "evidence": [
              "Det foreligger godkjente byggetegninger datert 1997 og 1999, men disse samsvarer ikke med dagens planløsning.",
              "Plassbebygdgarderobe er blitt innlemmet i de to mindre soverommene.",
              "Kjellerstue er blitt innredet med kjøkken uten at dette er søkt om."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R11",
            "description": "Arbeid på terrasse/garasje/tak/fasade er utført av ufaglært/egeninnsats, inkludert fjerning av utgangsdør fra vaskerom til terrasse. Dette kan medføre bygningstekniske og juridiske utfordringer.",
            "evidence": [
              "Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade? Svar: Ja, kun av ufaglært/egeninnsats/dugnad. Beskrivelse: Huseier fjernet utgangsdør fra vaskerom til terrasse."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Uferdige arbeider i boligen: Gulv i 2. etasje og VF 1. etasje mangler fliser, underetasje er ikke ferdig innredet, noe planeringsarbeid gjenstår, og skorstein er ikke kontrollert.",
            "evidence": [
              "Både gulv i 2. etasje og gulv i V.F. 1. etasje er ikke ferdig, mangler fliser.",
              "Underetasje er ikke ferdig innredet.",
              "Noe planeringsarbeid står igjen.",
              "Skorstein er ikke kontrollert."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Forurenset grunn: Ukjent påvirkning fra forurenset grunn i tidligere Skedsmo kommune (deponi). Dette kan medføre kostnader til opprydding og begrensninger i bruk av eiendommen.",
            "evidence": [
              "Forurenset grunn: Ukjent påvirkning.",
              "Forurenset grunn i tidligere Skedsmo kommune: Deponi"
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Pliktig medlemskap i velforening med forpliktelse til å delta i vedlikehold av fellesarealer. Dette medfører løpende kostnader og forpliktelser for kjøper.",
            "evidence": [
              "Servitutten gjelder pliktig medlemskap i velforening og forpliktelse til å delta i vedlikehold av fellesarealer.",
              "Pliktig medlemskap i velforening m.v."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Dette pantet fremgår ikke av grunnboksutskriften og har prioritet foran tinglyste banklån.",
            "evidence": [
              "Legalpant: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt. Legalpant er et pant som ikke vises i grunnboksutskriften, og har prioritet foran for eksempel tinglyste banklån på eiendommen."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R16",
            "description": "Utettheter i dobbelfløyet balkongdør, noe som kan medføre varmetap, fuktinntrenging og økte energikostnader.",
            "evidence": [
              "Dører: Det er utettheter i dobbelfløyet balkongdør."
            ],
            "source_documents": [
              "d162_d162"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "skorstein kontroll tilstandsgrad ildsted",
          "varmtvannsbereder alder tilstand TG",
          "tak membran lekkasje tilstandsgrad",
          "drenering fukt grunnmur sokkeletasje",
          "vinduer alder tilstand TG2 TG3",
          "radon verdi måleresultat sokkel akseptabelt nivå",
          "kvikkleire geoteknisk vurdering rapport",
          "el-anlegg sikringsskap alder tilstandsgrad",
          "prisantydning 8500000 takst verdi",
          "konsesjon odel forkjøpsrett"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ulovlige rom i sokkel (0.98 → 0.99):** Svært godt dokumentert. Evidensen er eksplisitt og mangfoldig: tre soverom ikke godkjent, kjøkken ikke søkt om, utleiedel ikke godkjent, manglende vindu mot det fri i soverom. Confidence justeres marginalt opp til 0.99 da dette er en av de mest alvorlige og klart dokumenterte risikoene.\n\n**R2 – Manglende ferdigattest (0.97):** Godt dokumentert. Selger bekrefter manglende ferdigattest. Noten om at ferdigattest ikke utstedes for tiltak søkt før 01.01.1998 er relevant kontekst. Confidence beholdes på 0.97.\n\n**R3 – El-anlegg uten samsvarserklæring (0.97):** Godt dokumentert. Både manglende samsvarserklæring og ufaglært arbeid er bekreftet. El-tilsynsrapport er heller ikke fremlagt. Confidence beholdes på 0.97.\n\n**R4 – Skjevheter/setningsskader (0.96):** Godt dokumentert med konkrete målinger i tre rom (40mm, 30mm, 48mm). Selger bekrefter settningskader. Årsak ukjent er en tilleggsrisiko. Confidence beholdes på 0.96.\n\n**R5 – Våtrom TG2 (0.95):** Godt dokumentert med konkrete avvik. Utilstrekkelig fall mot sluk (10mm) er særlig alvorlig. Confidence beholdes på 0.95.\n\n**R6 – Manglende tettesjikt utslagsvask (0.93):** Direkte sitert i dokumentet. Confidence beholdes på 0.93.\n\n**R7 – Servant med sprekk (0.88 → 0.85):** Dokumentert, men dette er et relativt begrenset avvik. Confidence justeres ned marginalt til 0.85 da dette er et mindre alvorlig forhold sammenlignet med de øvrige risikoene.\n\n**R8 – Kvikkleire/marin leire (0.95):** Godt dokumentert fra Geodata-informasjon. \"Svært stor\" mulighet for marin leire er eksplisitt angitt. Ingen geoteknisk rapport er nevnt, noe som er en tilleggsrisiko. Confidence beholdes på 0.95.\n\n**R9 – Radonmåling gammel/uklar (0.82 → 0.80):** Dokumentert, men noe tvetydig. Verdien \"o\" kan bety null eller at den ikke er lesbar. Dokumentet nevner også \"Radonmåling er ikke gjennomført\" i en annen sammenheng, noe som skaper forvirring. Radon aktsomhetsgrad er angitt som \"Moderat/lav\". Confidence justeres ned til 0.80.\n\n**R10 – Byggetegninger samsvarer ikke (0.94):** Godt dokumentert. Eksplisitt nevnt at tegninger fra 1997/1999 ikke samsvarer med dagens planløsning. Confidence beholdes på 0.94.\n\n**R11 – Ufaglært arbeid terrasse/fasade (0.87):** Dokumentert. Fjerning av dør er et konkret tiltak. Confidence beholdes på 0.87.\n\n**R12 – Uferdige arbeider (0.90):** Godt dokumentert med fire konkrete punkter. Confidence beholdes på 0.90.\n\n**R13 – Forurenset grunn (0.85):** Dokumentert fra Geodata. \"Ukjent påvirkning\" er noe vagt, men deponi er nevnt. Confidence beholdes på 0.85.\n\n**R14 – Velforening (0.88):** Dokumentert som tinglyst servitutt. Confidence beholdes på 0.88.\n\n**R15 – Legalpant (0.90):** Direkte sitert i dokumentet. Confidence beholdes på 0.90.\n\n**R16 – Balkongdør utetthet (0.85):** Dokumentert. Confidence beholdes på 0.85.\n\n**Mulige manglende risikoer identifisert:**\n1. Varmtvannsbereder – nevnt i dokumentet men tilstand/alder ikke vurdert\n2. Tak/membran – ikke eksplisitt vurdert i de fremlagte chunkene\n3. Drenering/fukt i grunnmur – sokkeletasje med potensielle fuktproblemer ikke eksplisitt nevnt\n4. Vinduer – alder og tilstand ikke vurdert\n5. Skorstein – ikke kontrollert (delvis dekket av R12)\n6. Geoteknisk rapport – ingen rapport foreligger til tross for svært stor kvikkleirerisiko\n7. Konsesjon/odel – ikke vurdert\n\nDisse bør undersøkes nærmere via re-retrieval.\n"
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
    "input_tokens": 18010,
    "output_tokens": 5265,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
