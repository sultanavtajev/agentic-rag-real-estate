# Trace: agentic_reflecting_iter1
- **Run ID:** 5d55a4d6-3274-43ef-9a5b-c796d475d204
- **Tidspunkt:** 2026-03-22T19:49:36.453606+00:00
- **Varighet:** 91.29s
- **Input tokens:** 19878
- **Output tokens:** 4988

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
Risiko 1: Elektrisk anlegg ikke kontrollert (el-takst mangler). Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav. Takstmann anbefaler utvidet el-kontroll av ny eier.
  Confidence: 0.95
  Evidens: Det er ikke foretatt kontroll av de elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.; Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav; På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.

Risiko 2: Bad har TG-2 på grunn av bom (hulrom) i flis mellom dusjsone og vask/servant. Flisen har manglende heft til underlaget med risiko for at flis kan løsne.
  Confidence: 0.95
  Evidens: Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.; Det registreres bom i en flis mellom dusjsone og vask/servant(manglende heft til underlaget) med risiko for at flis kan løsne.

Risiko 3: Drenering er ikke undersøkt (TG-IU) fordi tomten var snødekt på befaringstidspunktet. Eventuelle dreneringsproblemer kan dermed ikke utelukkes.
  Confidence: 0.9
  Evidens: Drenering TG-IU settes på bakgrunn av at tomten er snødekt.; Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert.

Risiko 4: Grunnmur og fundament er ikke undersøkt (TG-IU). Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.
  Confidence: 0.9
  Evidens: Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.; Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]

Risiko 5: Pipe/skorstein over tak er ikke undersøkt (TG-IU) på grunn av snø på befaringstidspunktet. Eventuelle feil eller skader på pipe kan ikke utelukkes.
  Confidence: 0.9
  Evidens: Pipe over tak er ikke undersøkt pga snø.; Tilgjengelighet Ikke tilgjengelig. Totalvurdering av skorstein over tak TG-IU.

Risiko 6: Garasjeport (ombygging fra carport til garasje) er ikke godkjent av kommunen. Arbeidet ble utført av snekker uten fremlagt dokumentasjon, og fasadeendringene er ikke godkjent.
  Confidence: 0.95
  Evidens: Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.; Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.

Risiko 7: Pergola og vedbod er oppført uten at det er bekreftet at disse er godkjent av kommunen. Tiltak over 15 kvm er søknadspliktige, og kjøper overtar risikoen.
  Confidence: 0.85
  Evidens: Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.; Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.; Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid.

Risiko 8: Ingen radonmåling er utført på eiendommen. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak.
  Confidence: 0.85
  Evidens: Det er ikke utført radonmåling og det er heller ikke krav til dette.; Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til; Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales.

Risiko 9: Planlagt utbygging av nytt boligfelt i nærheten kan medføre økt trafikk, byggestøy og potensielt en ringvei gjennom sameiets eksisterende vei. Eksisterende vei er ikke dimensjonert for økt trafikk.
  Confidence: 0.9
  Evidens: Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.; En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.; Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet.

Risiko 10: Eiendommen ligger i hensynssone H110 (nedslagsfelt drikkevann for Hurdalssjøen). Dette kan medføre restriksjoner på fremtidige tiltak og krav om konsekvensanalyse.
  Confidence: 0.85
  Evidens: Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.; hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning på vannkvalitet både under utførelse og etter tiltaket er ferdig.; Det er krav til at tiltaket ikke medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå drikkevannskvalitet.

Risiko 11: Sameiet har ingen felles bygningsforsikring. Kjøper må selv tegne forsikring for innbo og løsøre, og er eksponert for risiko knyttet til manglende kollektiv bygningsforsikring.
  Confidence: 0.85
  Evidens: Sameiet har ikke felles bygningsforsikring.; Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene.

Risiko 12: Bindende TV/internett-avtale med Viken Fiber følger seksjonen med 3 års bindingstid fra desember 2024. Kjøper er forpliktet til denne avtalen og kan ikke fritt velge leverandør.
  Confidence: 0.9
  Evidens: Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.; Denne avtalen med bindingstid følger seksjonen.; TV og internett: kr 609,‑ per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024.

Risiko 13: Legalpant: Andre seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Dette er en skjult heftelse som ikke fremgår av grunnboken.
  Confidence: 0.8
  Evidens: Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp).

Risiko 14: Tetting rundt gjennomføringer i takkonstruksjonen er ikke kontrollerbar. Eventuelle utetthetsproblemer kan ikke utelukkes.
  Confidence: 0.75
  Evidens: Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart; Det er ikke kontrollert tetting rundt gjennomføringer pga [tekst avbrutt]

Risiko 15: Grunnforurensning kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Ikke-registrert forurensning kan dermed allikevel eksistere.
  Confidence: 0.6
  Evidens: Ingen grunnforurensing registrert på matrikkelenheten.; Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.

Dokumentkontekst:
[d002_Salgsoppgave | Side [1]]
kt, f.eks. fordi en del av
bygget ikke har vært tilgjengelig for inspeksjon. Disse delene kan dermed ha feil eller mangler
som ikke er avdekket.
Tilstandsrapporten beskriver byggverkets tekniske tilstand. Det er ikke foretatt kontroll av de
elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer
til elanlegget ut i fra helt enkle vurderingskriterier. Siden elanlegget ikke er kontrollert er det
sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og

---

[d002_Salgsoppgave | Side [1]]
es en høydeforskjell på ca 3,5 cm. Det registreres
ikke tegn til skader eller avvik utover normal slitasje. Det registreres bom i en flis mellom
dusjsone og vask/ servant (manglende heft til underlaget) med risiko for at flis kan løsne.
TGIU ‑ Ikke undersøkt/ utilgjengelig:
‑ Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert. Bortleding av vann fra
10

## Side 11

taknedløp er ivaretatt.
‑ Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og
skader i

---

[d002_Salgsoppgave | Side [1]]
okumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen

---

[d002_Salgsoppgave | Side [1]]
e installasjoner eller innretninger, og
det heller ikke er andre grunner til å mistenke at flytting vil kunne avdekke vesentlige forhold.
Gustav Granhaugs veg 85 A, 2070 Råholt 3 av 30
62

## Side 63

3. Rapportsammendrag
Alle bygningsdeler med tilstandsgrad TG2, TG3 eller TGIU (ikke undersøkt) er oppsummert nedenfor. Feltet Begrunnelse gir en kort forklaring på hvorfor tilstandsgraden er
satt, og er ment som et forenklet sammendrag. Utfyllende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
På

---

[d002_Salgsoppgave | Side [1]]
p/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-2
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca 3,5cm.
Det registreres ikke tegn til skader eller avvik utover normal slitasje.
Det registreres bom i en flis mellom dusjsone og vask/servant(manglende heft til underlaget) med
risiko for at flis kan

---

[d002_Salgsoppgave | Side [1]]
 dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig

---

[d002_Salgsoppgave | Side [1]]
015
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

## Side 61

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til

---

[d002_Salgsoppgave | Side [1]]
ende vurderinger finnes i hovedrapporten.
Utvidet el-kontroll
På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier.
Bygningsdeler med TG2
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.
Bygningsdeler med TG-IU
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Drenering TG-IU settes på bakgrunn av at tomten er snødekt.
Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på

---

[d002_Salgsoppgave | Side [1]]
-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal

---

[d002_Salgsoppgave | Side [1]]
omføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Gustav Granhaugs veg 85 A, 2070 Råholt 27 av 30
86

## Side 87

Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-1
Fallforhold til sluk, og høydeforskjell mellom topp sluk og topp membran ved dør, er tilfredsstillende.
Det måles en høydeforskjell på ca

---

[d002_Salgsoppgave | Side [1]]
te konstruksjoner, skal
dette angis særlig.
Gustav Granhaugs veg 85 A, 2070 Råholt 2 av 30
61

## Side 62

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt

---

[d002_Salgsoppgave | Side [1]]
iggende kledning
Boligen er oppført med liggende kledning som er overflatebehandlet hvit.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Eier opplyser om at det ikke er utført arbeid utover normal vedlikehold som vask.
Er det påvist skjevheter/riss/sprekker/setninger? Nei
Er det påvist fuktskade/sopp/råte eller slitt overflate? Nei
Er det liten eller ingen lufting av kledningen? Nei
Er det manglende musetetting i nedkant av kledning/plater? Nei
Oppsummering av yttervegger TG-1
Det registreres

---

[d002_Salgsoppgave | Side [1]]
ldt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke

---

[d002_Salgsoppgave | Side [1]]
ing/plater? Nei
Oppsummering av yttervegger TG-1
Det registreres ikke tegn til skader eller avvik på befaringstidspunktet.
Det er etablert god lufting av kledning, samt at det er montert musebånd.
Det gjøres oppmerksom på at undersøkelsen er utført fra bakkenivå og begrenser seg til dette.
Gustav Granhaugs veg 85 A, 2070 Råholt 12 av 30
71

## Side 72

6.7 Skorstein over tak
Tilgjengelighet Ikke tilgjengelig
Totalvurdering av skorstein over tak TG-IU
Pipe over tak er ikke undersøkt pga snø.
Anbefalte

---

[d002_Salgsoppgave | Side [1]]
ervant(manglende heft til underlaget) med
risiko for at flis kan løsne.
Membran, tettesjikt og sluk
Er det manglende mulighet for renhold og inspeksjonsmulighet av sluk? Nei
Type sluk Plast
Sluk av typen plast.
Er det påvist avvik ved utførelsen av membran/tettesjikt/klemring rundt sluk? Nei
Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd

---

[d002_Salgsoppgave | Side [1]]
dning inkl. vask med blandebatteri i 2025.
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Nullpunkt laser: 18,5
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Ja
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det

---

[d002_Salgsoppgave | Side [1]]
e boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen,

---

[d002_Salgsoppgave | Side [1]]
ette er det ikke utført arbeid på anlegget etter byggeår.
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
Er det tegn til at

---

[d002_Salgsoppgave | Side [1]]
 av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst

---

[d002_Salgsoppgave | Side [1]]
ig lufting av konstruksjonen? Nei
Det er etablert god lufting av konstruksjonen.
Er det tegn til fukt fra lekkasjer eller kondensering på innvendige overflater? Nei
Boligen har full takhøyde i 2. Etasje- det registreres ikke tegn til skader eller fukt/lekkasjer på
innvendige overflater.
Er det tegn til sopp/råte eller spor etter treskadeinnsekt? Nei
Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart
Det er ikke kontrollert tetting rundt gjennomføringer pga

---

[d002_Salgsoppgave | Side [1]]
tinglyst skjøte uten andre heftelser enn de som det er
avtalt at følger med i handelen. Gjennomføring av handelen er betinget av det ikke er tinglyst
heftelser som ikke lar seg innfri/ slette.
Dersom eiendommen skulle bli overbeheftet i salgsprosessen, det vil si at summen av fremtidige
17

## Side 18

tinglyste heftelser overstiger den forventede salgssummen, er det en forutsetning for at handel
skal kunne gjennomføres at kreditorene gir nødvendig pantefrafall. Dersom pantefrafall ikke
oppnås vil handel

---

[d002_Salgsoppgave | Side [1]]
tvendig trapp.
Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.
Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt
byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra
kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår.
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann og avløp. Alle eiendommer som er tilknyttet offentlig
vann og avløp har private stikkledninger, som

---

[d002_Salgsoppgave | Side [1]]
a overtakelsesdagen ansvaret for eventuelle
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
Sameiet "Bekkedalshøgda" (gnr. 96, bnr.

---

[d002_Salgsoppgave | Side [1]]
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
Faglært

---

[d002_Salgsoppgave | Side [1]]
g bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel

---

[d002_Salgsoppgave | Side [1]]
rsel, offentlige vedtak eller lignende?
◆ Ja
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
25. Vet du om det finnes kommunale pålegg, heftelser eller krav knyttet til eiendommen eller boligen?
◆ Nei, ikke som jeg kjenner til
26. Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår, enten av deg
eller tidligere eiere?
◆ Ja
Opplysninger fra tidligere eier
Tidligere eier opplyser at selgeren de kjøpte av hadde satt inn en

---

[d002_Salgsoppgave | Side [1]]
 er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan

---

[d002_Salgsoppgave | Side [1]]
rer, som for eksempel ufaglært arbeid,
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
Selger opplyser følgende

---

[d002_Salgsoppgave | Side [1]]
Opplysninger fra tidligere eier (til orientering) Tidligere eier opplyste at de som solgte
de boligen satt opp en pergola i hagen på ca. 9 m², samt bygget en vedbod under den eksisterende utvendige
trappen mot hagen.
8. Vet du om det er, eller har vært, skjevheter eller setningsskader i boligen, støttemur, terrasse eller lignende?
◆ Nei, ikke som jeg kjenner til
Drenering, fukt og lekkasje
9. Vet du om det er, eller har vært, feil eller skader med dreneringen?
◆ Nei, ikke som jeg kjenner til
10. Vet du om

---

[d002_Salgsoppgave | Side [1]]
ed salg av eiendom.
fastmonterte hyller og løs eller fastmontert kjøkkenøy.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse
8. MARKISER, PERSIENNER og annen type innvendig og
av skal overleveres kjøper på overtakelsen, herunder nøkler
utvendig solskjerming, gardinoppheng,lamellgardiner
til eventuelle boder, uthus, garasjeportåpner el. Låses boder,
og liftgardiner medfølger.
uthus el. med hengelås, skal lås og nøkler til disse medfølge.
9. AVTREKKSVIFTER av alle slag, samt fastmonterte

---

[d002_Salgsoppgave | Side [1]]
il
29. Vet du om det har vært flom, ras, skred eller lignende på eiendommen, eller om den ligger i et fareområde?
◆ Nei, ikke som jeg kjenner til
30. Har eiendommen utleiedel, for eksempel en leilighet, hybel eller lignende?
◆ Nei, ikke som jeg kjenner til
31. Består boligen av flere, selvstendige boenheter?
◆ Nei, ikke som jeg kjenner til
32. Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
33. Vet du om det finnes skaderapporter,

---

[d002_Salgsoppgave | Side [1]]
ebyggelse (feltnavn B4) og 167 m² til felles
avkjørsel (feltnavn FV4).
Eiendommen omfattes av Kommuneplanens arealdel for 2021‑2031 (plan‑ID 0237202001), vedtatt
13.04.2021. I kommuneplanen er totalt 8487 m² av eiendommen avsatt til nåværende
boligbebyggelse, og 67 m² er avsatt til LNRF areal for nødvendige tiltak for landbruk og reindrift
og gårdstilknyttet næringsvirksomhet basert på gårdens ressursgrunnlag.
Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann. I kommuneplanens
bestemmelser §

---

[d002_Salgsoppgave | Side [1]]
kke som jeg kjenner til
33. Vet du om det finnes skaderapporter, tilstandsvurderinger, boligsalgsrapporter eller om det er utført målinger
for boligen?
◆ Nei, ikke som jeg kjenner til
34. Vet du om noe i nabolaget som kan være plagsomt eller ubehagelig for kjøperen?
◆ Nei, ikke som jeg kjenner til
6
96

## Side 97

35. Vet du om du selv eller sameiet/borettslaget/laget/selskapet er innblandet i uenigheter eller konflikter rundt
eiendommen?
◆ Nei, ikke som jeg kjenner til
36. Vet du om det finnes planer,

---

[d002_Salgsoppgave | Side [1]]
r. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 11
137

## Side 138

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Forretninger:
Type Dato Rolle Matrikkel

---

[d002_Salgsoppgave | Side [1]]
«som den er», og selgers ansvar utover det konkret avtalte er da begrenset
etter avhendingsloven § 3‑9, første ledd andre setning.
Avhendingsloven § 3‑3 andre ledd fravikes, og hvorvidt boligens arealsvikt utgjør en mangel
vurderes etter avhendingsloven § 3‑8.
En forutsetning for salget er at skjøtet for eiendommen tinglyses på kjøper. Interessenter og
kjøper må godta at selger og megler bruker elektronisk kommunikasjon i salgsprosessen.
I tråd med eiendomsmeglingsforskriften vil informasjon om

---

[d002_Salgsoppgave | Side [1]]
 )
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
Faglært

---

[d002_Salgsoppgave | Side [1]]
s (feltnavn f_F3) og 245 m² til felles avkjørsel (feltnavn
FV4). Dette følger av reguleringsplan "Del av gbnr 96/ 14 med adkomstveg, og
reguleringsendring for del av gbnr 96/ 43" (plan‑ID 023711400), vedtatt 27.04.1998.
Eiendommen omfattes også av reguleringsplan "Eiendommene 96/ 264 og 36 m.fl., med
adkomstveger, Bekkedalshøgda" (plan‑ID 023709000), vedtatt 15.02.1993. I denne planen er 5552
m² av eiendommen regulert til frittliggende småhusbebyggelse (feltnavn B4) og 167 m² til felles
avkjørsel (feltnavn

---

[d002_Salgsoppgave | Side [1]]
dragstakerens undersøkelses- og opplysningsplikt Kilde: Eidsvoll kommune
Kommunenr. 3240 Gårdsnr. 96 Bruksnr. 615 Festenr. Seksjonsnr. 10
Adresse Gustav Granhaugs veg 85A, 2070 RÅHOLT
Opplysningene omfatter gjeldende planer og pågående planarbeid for eiendommen. Nærmere opplysninger om den enkelte plan
med dokumenter, mindre endringer, etc finnes på internett, se lenker under. Oppgitte delarealer viser planinformasjon på
eiendommen.
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i

---

[d002_Salgsoppgave | Side [1]]
dligere eier opplyser at selgeren de kjøpte av hadde satt inn en motorisert garasjeport, og at carporten dermed
ble bygget om til garasje. Det er også opplyst at en tidligere eier har oppført en pergola i hagen på ca. 9 m², samt
bygget en vedbod under den utvendige trappen mot hagen.
Stor asfaltert parkeringsplass på egen tomt med kantstein og hekk.
Det er gjennomført betydelig oppgradering /oppussing i 2025.
Utvendig (2025)
Terrasse / rekkverk over garasje og ellers beiset i 2 strøk.
Terrasse/platting/

---

[d002_Salgsoppgave | Side [1]]
minner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 5 av 11
141

## Side 142

Gårdsnummer 96, Bruksnummer 615, Seksjonsnummer 10 i 3240 EIDSVOLL kommune
Oversiktskart
Utskrift fra eiendomsregisteret foretatt 22.01.2026 09:58 – Sist oppdatert 22.01.2026 09:58
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230

---

[d002_Salgsoppgave | Side [1]]
anger i året (januar og juni), og ikke månedlig. Halvårlig beløp er kr 3 654 for TV/ Internett, og kr
1 000 for felleskostnader. Sameiet har ingen fellesgjeld, og styret har vurdert at det ikke er
behov for å øke felleskostnadene for 2026.
Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre
samt andre kostnader som ikke dekkes av felleskostnadene. Sameiet har ikke felles
bygningsforsikring.
Lånebetingelser fellesgjeld:
Sameiet har ingen lån registrert.
Andel

---

[d002_Salgsoppgave | Side [1]]
ølger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres seksjonseierne to ganger i året (januar og juni) med forskuddsbetaling
for de påfølgende seks månedene. Avtalen har fra og med 1. februar 2026 en
månedspris på 609 kroner per boenhet. Hollstedt har betalt for januar til juni
2026 og er for øvrig a jour med kontingenter/felleskostnader.

Har sameie felles lån?
Sameiet har per dags dato ikke felles lån.

Foreligger det husordensregler?
Det foreligger per dags dato ikke ordensregler, men

---

[d002_Salgsoppgave | Side [1]]
betingelser fellesgjeld:
Sameiet har ingen lån registrert.
Andel Fellesformue
Kr 4 281 datert 31.12.2025.
14

## Side 15

Kommunale avgifter
Kommunale avgifter: Kr 16 243 pr 2025
De kommunale avgiftene inkluderer renovasjon, feiing, vann‑ og avløpsavgifter. Den totale årlige
kostnaden vil variere etter eget forbruk. Dersom det er installert vannmåler, så vil estimert
forbruk variere fra kommune til kommune, i gjennomsnitt ca. 50m³ pr. person i vannforbruk.
Avgiften er en kombinasjon av forskuddsbetaling

---

[d002_Salgsoppgave | Side [1]]
Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget. Det betales kr 3 654
to ganger i året.
Sameie
Sameiet Bekkedalshøgda
Om sameiet
Sameiet Bekkedalshøgda er et eierseksjonssameie bestående av 16 boligseksjoner. Sameiet har
ikke fellesgjeld.
Det er vedtatt å planlegge en oppgradering av sameiets lekeplass med nye lekestativer. Styret
har fått fullmakt til å utrede og søke om midler for prosjektet. Målet er at tiltaket skal
fullfinansieres gjennom eksterne tilskudd, slik at det ikke

---

[d002_Salgsoppgave | Side [1]]
 seksjonen for krav mot eieren som følger av sameieforholdet for inntil
2 G (folketrygdens grunnbeløp). Rentenivå, eventuelt nye låneopptak, endret nedbetalingsplan,
opphør av avdragsfri periode, investeringer, vedlikehold, rehabilitering, inngåelse av nye
tjenesteavtaler og årsmøtevedtak kan påvirke felleskostnadenes størrelse.
TV/ Internett/ Bredbånd
Det er inngått avtale med Viken Fiber om leveranse av TV og internett til denne seksjonen.
Avtalen gjelder i tre år fra desember 2024, og følger automatisk

---

[d002_Salgsoppgave | Side [1]]
en vannlekkasje og sørge for at lekkasjen stopper.
9
99

## Side 100

Megleropplysninger Sameiet Bekkedalgshøgda

Beløp felleskostnader:
Kontingent/felleskostnader for denne seksjonen er per dags dato 1000 kroner per
halvår.
Kontingent/felleskostnader faktureres per halvår (januar og juni).

Hva er inkludert i felleskostnadene?
Kontingent/felleskostnader dekker snørydding og strøing av sameiets private veg,
strøm til lys på sameiets private veg, kostnader til drift og vedlikehold av

---

[d002_Salgsoppgave | Side [1]]
000,‑. Dette dekker:
‑ Snørydding og strøing av sameiets private vei
‑ Strøm til fellesarealer
‑ Drift og vedlikehold av pumpekum og lekeplass
‑ Forsikring for pumpeanlegg og styreansvar
TV og internett: kr 609,‑ per måned
‑ Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har
bindingstid i 3 år fra 1. desember 2024.
Vær oppmerksom på at felleskostnadene og avgiften for TV/ internett faktureres forskuddsvis to
ganger i året (januar og juni), og ikke månedlig. Halvårlig beløp

---

[d002_Salgsoppgave | Side [1]]
EGISTERENHETEN MED FLERE
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
avtalt at

---

[d002_Salgsoppgave | Side [1]]
 ut bindingstiden. Les mer på Regjeringens
nettsider.
41. Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
◆ Ja
7
97

## Side 98

Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/Altibox (frivillig tilvalg) til en månedlig kostnad på kr
609,- per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for denne tjenesten.
I tillegg faktureres det felleskostnader på kr 1 000,- per halvår til hver seksjonseier. Dette dekker vedlikehold av
fellesarealer og øvrige

---

[d002_Salgsoppgave | Side [1]]
s på sameiets private veg, kostnader til drift og vedlikehold av sameiets
pumpekum og annen eiendom (for eksempel lekeplass) og forsikringer knyttet til
pumpeanlegget og styreansvar. Varmtvann, fyring og parkering er ikke inkludert i
kontingent/felleskostnader.

Hollstedt er del av en kollektivavtale som er inngått med Viken Fiber om TV og
internett gjeldende fra 1. desember 2024 med tre års bindingstid. Denne avtalen
med bindingstid følger seksjonen. Årsmøtet har bestemt at avtalen skal
faktureres

---

[d002_Salgsoppgave | Side [1]]
igkjøperforsikring (valgfritt)
Kr 168 590 Sum omkostninger inkl. boligkjøperforsikring
Dokumentavgiftens størrelse forutsetter at eiendommen kjøper til prisantydning.
Det tas forbehold om endringer i offentlige gebyrer, satser etc.
Andel felleskostnader
Kr 776,‑ per måned i følge opplysninger innhentet fra forretningsfører.
Felleskostnader inkluderer
Felleskostnader: kr 167,‑ per måned
Beløpet er basert på en halvårlig kontingent på kr 1 000,‑. Dette dekker:
‑ Snørydding og strøing av sameiets private

---

[d002_Salgsoppgave | Side [1]]
dvendig pantefrafall. Dersom pantefrafall ikke
oppnås vil handel ikke kunne gjennomføres. Skulle det bli tinglyst flere utleggspant på
eiendommen, kan handel bare gjennomføres forutsatt at også eventuelle fremtidige kreditorer
aksepterer å slette sitt pant uten å få full innfrielse av det underliggende kravet.
Legalpant
Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt
panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for

---

[d002_Salgsoppgave | Side [1]]





113

## Side 114

114

## Side 115

115

## Side 116

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
Gårdnummer

---

[d002_Salgsoppgave | Side [1]]
t bindingstiden. Les mer på Regjeringens nettsider.
Har du andre opplysninger om boligen eller eiendommen, utover det du har svart?
Ja.
Sameiet Bekkedalshøgda har en felles avtale med Viken Fiber/ Altibox (frivillig tilvalg) til en
månedlig kostnad på kr 609,‑ per 01.01.26. Sameiet fakturerer hver seksjonseier halvårlig for
denne tjenesten. I tillegg faktureres det felleskostnader på kr 1 000,‑ per halvår til hver
seksjonseier. Dette dekker vedlikehold av fellesarealer og øvrige fellesutgifter. Ved

---

[d002_Salgsoppgave | Side [1]]
skal
fullfinansieres gjennom eksterne tilskudd, slik at det ikke medfører økte kostnader for
seksjonseierne, med unntak av fremtidig vedlikehold.
Det er begrensninger på eierskap i sameiet. Kun fysiske personer kan kjøpe, og ingen kan eie
mer enn to boligseksjoner. For utleie gjelder at korttidsutleie (under 30 dager
sammenhengende) av hele boligen er begrenset til maksimalt 90 dager per år.
Alle utvendige bygningsmessige endringer, som for eksempel oppsetting av markiser, endring
av fasadefarge eller

---

[d002_Salgsoppgave | Side [1]]
e beboere. Sameiet har avtaler for brøyting og strøing av felles adkomstvei.
Styreleder informerer på mail at det er enkelte seksjonseiere som har fått pålegg fra kommunen
om tilbakeslagssikring, dette omhandlet blant annet denne seksjonen. Dette har selger ordnet
iht. pålegg.
Organisasjonsnummer
925258296
Eierbrøk
126/ 2152
18

## Side 19

Forretningsfører
Sameiet Bekkedalshøgda
Styregodkjennelse
Det kreves ikke styregodkjennelse av ny eier, men navn, telefonnummer og e‑postadresse til
kjøper må meldes

---

[d002_Salgsoppgave | Side [1]]
lknyttet offentlig
vann og avløp har private stikkledninger, som vedlikeholdes for eiers egen regning. For
ytterligere opplysninger om de private stikkledningene, ta kontakt med kommunen. Sameiet har
felles pumpekum. Den private veien som eiendommen er tilknyttet vedlikeholdes av brukerne.
Reguleringsplan
Eiendommen er regulert til frittliggende småhusbebyggelse med et areal på 1952 m² (feltnavn
B5). Videre er 564 m² regulert til lekeplass (feltnavn f_F3) og 245 m² til felles avkjørsel (feltnavn
FV4).

---

[d002_Salgsoppgave | Side [1]]
 nye lameller og plissegardiner (2025).
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
grøntområder og

---

[d002_Salgsoppgave | Side [1]]
3?term=303531800. Det oppfores til å ta
kontakt med kommunen for ytterligere opplysninger.
Videre opplyses det at gnr. 96/1 ligger i kommuneplanen for boligbebyggelse.
Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige
tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.
Området er stadig under endring/ utvikling, bygg settes opp, rehabiliteres og rives ned. Vi
anbefaler derfor alle budgivere å sette seg inn i gjeldende

---

[d002_Salgsoppgave | Side [1]]
æring at den de kjøpte boligen av
fikk satt opp utvendige lykter på tomten.
Vet du om bruken av eiendommen eller området rundt kan endres av foreslåtte eller vedtatte
reguleringsplaner, nabovarsel, offentlige vedtak eller lignende?
Ja.
Er kjent med at det foreligger detaljregulering for området, som omhandler boligbebyggelse.
Vet du om boligen eller eiendommen har blitt endret eller bygget ut etter opprinnelig byggeår,
enten av deg eller tidligere eiere?
Ja.
21

## Side 22

Opplysninger fra tidligere

---

[d002_Salgsoppgave | Side [1]]
den ble utført. Selger opplyser om
at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017.
Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og
fasadeendringene er ikke godkjent hos kommunen.
Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere
eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende
utvendig trapp.
Det gjøres informeres om at mindre tiltak over 15

---

[d002_Salgsoppgave | Side [1]]
å det elektriske anlegget, enten av deg eller tidligere eiere?
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
Er kjent med at det

---

[d002_Salgsoppgave | Side [1]]
tført arbeid på tak, yttervegg, vindu, dører eller annen fasade, enten av deg eller tidligere
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

## Side 93

1.
Hvilket år ble

---

[d002_Salgsoppgave | Side [1]]
r med dreneringen?
◆ Nei, ikke som jeg kjenner til
10. Vet du om det er, eller har vært, fukt, råte eller vanninntrengning i underetasje, kjeller eller krypkjeller?
◆ Nei, ikke som jeg kjenner til
11. Vet du om det er gjort arbeid med drenering, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
12. Vet du om det er, eller har vært, fukt, sopp eller råteskader i boligen/sameiet/borettslaget?
◆ Nei, ikke som jeg kjenner til
13. Vet du om det er, eller har vært, skadedyr eller sjenerende

---

[d002_Salgsoppgave | Side [1]]

13. Vet du om det er, eller har vært, skadedyr eller sjenerende insekter på eiendommen eller i boligen?
◆ Nei, ikke som jeg kjenner til
Tekniske installasjoner
14. Vet du om det er, eller har vært, feil på vann- eller avløpsanlegg?
◆ Nei, ikke som jeg kjenner til
15. Vet du om det er gjort arbeid på vann og avløp, enten av deg eller tidligere eiere?
3
93

## Side 94

◆ Ja
Faglært arbeid:
1. Hvilket år ble jobben fullført?: 2022
Firmanavn: Waterstop AS
Beskrivelse av arbeidet: Tidligere eier opplyser at

---

[d002_Salgsoppgave | Side [1]]
ader knyttet til ildsted eller pipe?
◆ Nei, ikke som jeg kjenner til
4
94

## Side 95

20. Vet du om det er gjort arbeid på ildsted eller pipe, enten av deg eller tidligere eiere?
◆ Nei, ikke som jeg kjenner til
21. Vet du om det finnes oljetank på eiendommen?
◆ Nei, ikke som jeg kjenner til
22. Vet du om det er, eller har vært, feil eller skader på det elektriske anlegget?
◆ Nei, ikke som jeg kjenner til
23. Vet du om det er gjort arbeid på det elektriske anlegget, enten av deg eller tidligere eiere?
◆

---

[d002_Salgsoppgave | Side [1]]
interessenter oppfordres til å undersøke
eiendommen nøye, gjerne sammen med fagkyndig før bud inngis. Kjøper som velger å kjøpe
usett kan ikke gjøre gjeldende som mangel noe han burde blitt kjent med ved undersøkelsen.
Dersom det er behov for avklaringer, anbefaler vi at kjøper rådfører seg med eiendomsmegler
eller en bygningssakyndig før det legges inn bud.
Dersom kjøper ikke er forbruker selges eiendommen «som den er», og selgers ansvar er da
begrenset jf.avhendingsloven § 3‑9 1. ledd 2. pkt. Informasjon

---

[d002_Salgsoppgave | Side [1]]
arbeid
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
Delarealer Delareal 8

---

[d002_Salgsoppgave | Side [1]]
gende småhusbebyggelse
Feltnavn B4
Delareal 167 m2
Formål Felles avkjørsel
Feltnavn FV4
Reguleringsplaner under arbeid i nærheten (100 meter)
Besøk kommunens hjemmeside for mer informasjon
Ingen reguleringsplaner under arbeid innenfor 100 meter fra eiendommen.
Side 2 av 2
127

## Side 128










  

---

[d002_Salgsoppgave | Side [1]]
rbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Reguleringsplaner
Plantyper uten treff
Kommuneplaner under arbeid Kommunedelplaner
Kommunedelplaner under arbeid Reguleringsplaner under bakken
Reguleringsplaner over bakken Reguleringsplaner under arbeid
Reguleringsplaner bunn Reguleringsplaner under arbeid i

---

[d002_Salgsoppgave | Side [1]]
127

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
Formål

---

[d002_Salgsoppgave | Side [1]]
21, og formålet med planen er å legge til rette for
utbygging av boliger. Reguleringsplanen har id 303531800. Det er usikkert når en utbygging vil
skje, og hvor veien skal gå. Eksisterende vei er ikke dimensjonert for trafikk inn til det nye
boligfeltet. En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på
den eksisterende veien gjennom sameiet. For mer info se
https://arealplaner.no/eidsvoll3240/arealplaner/343?term=303531800. Det oppfores til å ta
kontakt med kommunen for

---

[d002_Salgsoppgave | Side [1]]
rittliggende småhusbebyggelse
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
Formål Felles

---

[d002_Salgsoppgave | Side [1]]
. Vi
anbefaler derfor alle budgivere å sette seg inn i gjeldende reguleringsbestemmelser. Kopi av
situasjonskart, målebrev, reguleringsplaner m/ bestemmelser etc. ligger vedlagt i salgsoppgaven
eller kan fås ved henvendelse til megler. Vi oppfordrer interessenter til å gjøre seg kjent med
disse.
Radonmåling
Det er ikke utført radonmåling og det er heller ikke krav til dette, for mer informasjon
vedrørende radon se www.dsa.no.Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle
utbedringstiltak som

---

[d002_Salgsoppgave | Side [1]]
549/Bestemmelser%20og%20retningslinjer.pdf
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

## Side 127

Delareal 220 m2
KPHensynsonenavnH110
KPSikring Nedslagsfelt

---

[d002_Salgsoppgave | Side [1]]

 
130

## Side 131

Reguleringsplankart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg 85A
Utskriftsdato: 22.01.2026
UTM-32
Eidsvoll kommune Målestokk: 1:1000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i

---

[d002_Salgsoppgave | Side [1]]
unens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
133

## Side 134

Tegnforklaring
134

## Side 135

Grunnkart
Eiendom: 96/615/0/10
Adresse: Gustav Granhaugs veg

---

[d002_Salgsoppgave | Side [1]]
isjøen
hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning
16

## Side 17

på vannkvalitet både under utførelse og etter tiltaket er ferdig. Det er krav til at tiltaket ikke
medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå
drikkevannskvalitet.
Det foreligger reguleringsbestemmelser for detaljregulering av gbnr. 96/ 22 ‑ Bekkedal. Denne
ble vedtatt av kommunestyret i februar 2021, og formålet med planen er å legge til rette for
utbygging av

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Elektrisk anlegg ikke kontrollert (el-takst mangler). Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav. Takstmann anbefaler utvidet el-kontroll av ny eier.",
      "evidence": [
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav",
        "På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R02",
      "description": "Bad har TG-2 på grunn av bom (hulrom) i flis mellom dusjsone og vask/servant. Flisen har manglende heft til underlaget med risiko for at flis kan løsne.",
      "evidence": [
        "Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.",
        "Det registreres bom i en flis mellom dusjsone og vask/servant (manglende heft til underlaget) med risiko for at flis kan løsne."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R03",
      "description": "Drenering er ikke undersøkt (TG-IU) fordi tomten var snødekt på befaringstidspunktet. Eventuelle dreneringsproblemer kan dermed ikke utelukkes.",
      "evidence": [
        "Drenering TG-IU settes på bakgrunn av at tomten er snødekt.",
        "Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R04",
      "description": "Grunnmur og fundament er ikke undersøkt (TG-IU). Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.",
      "evidence": [
        "Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.",
        "Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R05",
      "description": "Pipe/skorstein over tak er ikke undersøkt (TG-IU) på grunn av snø på befaringstidspunktet. Eventuelle feil eller skader på pipe kan ikke utelukkes.",
      "evidence": [
        "Pipe over tak er ikke undersøkt pga snø.",
        "Tilgjengelighet Ikke tilgjengelig. Totalvurdering av skorstein over tak TG-IU."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R06",
      "description": "Garasjeport (ombygging fra carport til garasje) er ikke godkjent av kommunen. Arbeidet ble utført av snekker uten fremlagt dokumentasjon, og fasadeendringene er ikke godkjent. Kjøper overtar risikoen.",
      "evidence": [
        "Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.",
        "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R07",
      "description": "Pergola og vedbod er oppført uten bekreftet kommunal godkjenning. Tiltak over 15 kvm er søknadspliktige. Kjøper overtar risikoen for eventuelle pålegg fra kommunen. Merk: Pergolaen er oppgitt til ca. 9 m² og er dermed under søknadsgrensen på 15 m², men vedboden er ikke arealoppgitt og godkjenningsstatus er uklar.",
      "evidence": [
        "Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.",
        "Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.",
        "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R08",
      "description": "Ingen radonmåling er utført på eiendommen. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak.",
      "evidence": [
        "Det er ikke utført radonmåling og det er heller ikke krav til dette.",
        "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til",
        "Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R09",
      "description": "Planlagt utbygging av nytt boligfelt i nærheten kan medføre økt trafikk, byggestøy og potensielt en ringvei gjennom sameiets eksisterende vei. Eksisterende vei er ikke dimensjonert for økt trafikk.",
      "evidence": [
        "Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.",
        "En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.",
        "Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen ligger i hensynssone H110 (nedslagsfelt drikkevann for Hurdalssjøen). Dette kan medføre restriksjoner på fremtidige tiltak og krav om konsekvensanalyse.",
      "evidence": [
        "Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.",
        "hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning på vannkvalitet både under utførelse og etter tiltaket er ferdig.",
        "Det er krav til at tiltaket ikke medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå drikkevannskvalitet."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Sameiet har ingen felles bygningsforsikring. Kjøper må selv tegne forsikring for innbo og løsøre, og er eksponert for risiko knyttet til manglende kollektiv bygningsforsikring.",
      "evidence": [
        "Sameiet har ikke felles bygningsforsikring.",
        "Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R12",
      "description": "Bindende TV/internett-avtale med Viken Fiber følger seksjonen med 3 års bindingstid fra desember 2024. Kjøper er forpliktet til denne avtalen og kan ikke fritt velge leverandør.",
      "evidence": [
        "Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.",
        "Denne avtalen med bindingstid følger seksjonen.",
        "TV og internett: kr 609,‑ per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R13",
      "description": "Legalpant: Andre seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Dette er en skjult heftelse som ikke fremgår av grunnboken.",
      "evidence": [
        "Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp)."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "Tetting rundt gjennomføringer i takkonstruksjonen er ikke kontrollerbar. Eventuelle utetthetsproblemer kan ikke utelukkes.",
      "evidence": [
        "Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart",
        "Det er ikke kontrollert tetting rundt gjennomføringer pga [tekst avbrutt]"
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R15",
      "description": "Grunnforurensning kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Ikke-registrert forurensning kan dermed allikevel eksistere.",
      "evidence": [
        "Ingen grunnforurensing registrert på matrikkelenheten.",
        "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen."
      ],
      "source_documents": [
        "d002_Salgsoppgave"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    }
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – El-takst mangler (0.95 → 0.95):** Godt støttet av tre separate tekstpassasjer i tilstandsrapporten. Evidensen er klar og direkte. Confidence opprettholdes.\n\n**R02 – Bad TG-2, bom i flis (0.95 → 0.95):** Direkte støttet av tilstandsrapportens sammendrag og detaljbeskrivelse. Confidence opprettholdes.\n\n**R03 – Drenering TG-IU (0.90 → 0.90):** Klart støttet av to tekstpassasjer. Confidence opprettholdes.\n\n**R04 – Grunnmur/fundament TG-IU (0.90 → 0.90):** Støttet, men teksten er avbrutt. Likevel tilstrekkelig evidens. Confidence opprettholdes.\n\n**R05 – Pipe/skorstein TG-IU (0.90 → 0.90):** Direkte støttet av tilstandsrapporten. Confidence opprettholdes.\n\n**R06 – Garasjeombygging ikke godkjent (0.95 → 0.95):** Meget godt støttet. Eksplisitt nevnt at fasadeendringer ikke er godkjent og at kjøper overtar risikoen. Confidence opprettholdes.\n\n**R07 – Pergola/vedbod ikke godkjent (0.85 → 0.70):** Evidensen viser at pergolaen er ca. 9 m², altså UNDER søknadsgrensen på 15 m². Risikobeskrivelsen er delvis misvisende – den antyder at tiltak over 15 kvm er søknadspliktige, men pergolaen er under denne grensen. Vedboden har ukjent areal. Risikoen er reell men svakere enn angitt. Confidence justeres ned til 0.70.\n\n**R08 – Ingen radonmåling (0.85 → 0.80):** Støttet av evidensen, men det presiseres at det heller ikke er krav til radonmåling. Risikoen er reell men noe begrenset. Confidence justeres marginalt ned til 0.80.\n\n**R09 – Utbygging/ringvei (0.90 → 0.90):** Meget godt støttet av reguleringsplaninformasjon og meglertekst. Confidence opprettholdes.\n\n**R10 – Hensynssone H110 (0.85 → 0.85):** Godt støttet av kommuneplaninformasjon og bestemmelser. Confidence opprettholdes.\n\n**R11 – Ingen felles bygningsforsikring (0.85 → 0.90):** Direkte og eksplisitt støttet av to tekstpassasjer. Confidence justeres opp til 0.90 da evidensen er svært klar.\n\n**R12 – Bindende Viken Fiber-avtale (0.90 → 0.90):** Meget godt støttet av tre separate tekstpassasjer. Confidence opprettholdes.\n\n**R13 – Legalpant 2G (0.80 → 0.80):** Støttet av én tekstpassasje. Dette er en standardbestemmelse i eierseksjonsloven, men er likevel en reell risiko. Confidence opprettholdes.\n\n**R14 – Tetting rundt gjennomføringer (0.75 → 0.70):** Støttet av to tekstpassasjer, men den ene er avbrutt. Risikoen er reell men evidensen er svak. Confidence justeres ned til 0.70.\n\n**R15 – Grunnforurensning (0.60 → 0.50):** Evidensen er kun en standardformulering om at ikke-registrert forurensning kan forekomme. Det er ingen konkrete indikasjoner på faktisk forurensning. Dette er en generisk ansvarsfraskrivelse fra Ambita, ikke en spesifikk risiko for denne eiendommen. Confidence justeres ned til 0.50.\n\n**Manglende risikoer som bør vurderes:**\n1. Vaskerom: Det er gjort arbeid på vaskerom i 2025 (ny innredning, utslagsvask, opplegg for vaskemaskin, tilbakeslagsventil). Det er spurt om tiltaket er godkjent av kommunen, og svaret er \"Nei, ikke som jeg kjenner til\". Dette kan være en risiko.\n2. Tilbakeslagssikring: Styreleder informerer om at denne seksjonen har fått pålegg fra kommunen om tilbakeslagssikring, som selger har ordnet. Dette er positivt, men bør bekreftes.\n3. Seksjonering: Tilleggsdelen er registrert som \"Carport og tilhørende bod\" i seksjoneringsdokumentet, men er nå ombygget til garasje. Dette kan skape juridiske uklarheter rundt seksjonens tilleggsdel.\n4. Begrensninger på eierskap og utleie i sameiet (maks 90 dager korttidsutleie per år) kan være en risiko for kjøpere som planlegger utleie.\n",
  "re_retrieval_queries": [
    "vaskerom arbeid godkjent kommunen 2025 tilbakeslagsventil",
    "tilbakeslagssikring pålegg kommunen seksjon",
    "seksjonering tilleggsdel carport garasje juridisk",
    "korttidsutleie begrensning sameiet 90 dager",
    "pipe ildsted skorstein tilstand kontroll",
    "takkonstruksjon gjennomføringer tetting snø ikke kontrollert"
  ]
}

## Raw Response
```json
{
  "id": "msg_01ArEczjFhMbdZFLbVjnDgRr",
  "container": null,
  "content": [
    {
      "id": "toolu_014HStzZ1VpqoZ7JywcnQva5",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Elektrisk anlegg ikke kontrollert (el-takst mangler). Det er sannsynlig at det kan avdekkes avvik fra dagens forskriftskrav. Takstmann anbefaler utvidet el-kontroll av ny eier.",
            "evidence": [
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el‑takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget ut i fra helt enkle vurderingskriterier.",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav",
              "På genrelt grunnlag vil det alltid anbefales en EL-kontroll utført av ny eier."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R02",
            "description": "Bad har TG-2 på grunn av bom (hulrom) i flis mellom dusjsone og vask/servant. Flisen har manglende heft til underlaget med risiko for at flis kan løsne.",
            "evidence": [
              "Våtrom: Bad TG-2 settes på bakgrunn av stedvis «bom» i flis.",
              "Det registreres bom i en flis mellom dusjsone og vask/servant (manglende heft til underlaget) med risiko for at flis kan løsne."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R03",
            "description": "Drenering er ikke undersøkt (TG-IU) fordi tomten var snødekt på befaringstidspunktet. Eventuelle dreneringsproblemer kan dermed ikke utelukkes.",
            "evidence": [
              "Drenering TG-IU settes på bakgrunn av at tomten er snødekt.",
              "Drenering | Tomten er snødekt og terrengforhold er ikke kontrollert."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R04",
            "description": "Grunnmur og fundament er ikke undersøkt (TG-IU). Boligen er oppført med støpt plate på mark, og eventuelle sprekker og skader er ikke kontrollert.",
            "evidence": [
              "Grunnmur og fundament TG-IU settes på bakgrunn av boligen er oppført med støpt plate på mark.",
              "Grunnmur og fundament | Boligen er oppført med støpt plate på mark. Eventuelle sprekker og skader i [ikke fullstendig tekst]"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R05",
            "description": "Pipe/skorstein over tak er ikke undersøkt (TG-IU) på grunn av snø på befaringstidspunktet. Eventuelle feil eller skader på pipe kan ikke utelukkes.",
            "evidence": [
              "Pipe over tak er ikke undersøkt pga snø.",
              "Tilgjengelighet Ikke tilgjengelig. Totalvurdering av skorstein over tak TG-IU."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R06",
            "description": "Garasjeport (ombygging fra carport til garasje) er ikke godkjent av kommunen. Arbeidet ble utført av snekker uten fremlagt dokumentasjon, og fasadeendringene er ikke godkjent. Kjøper overtar risikoen.",
            "evidence": [
              "Selger opplyser om at en tidligere eier monterte elektrisk port i carporten for å gjøre det om til garasje i 2017. Arbeidet ble utført av snekker. Det er ikke fremlagt dokumentasjon på arbeidet og fasadeendringene er ikke godkjent hos kommunen.",
              "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid. Uavhengig av reaksjonsform fra kommunen, blir dette kjøpers ansvar og risiko siden boligen selges slik den fremstår."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R07",
            "description": "Pergola og vedbod er oppført uten bekreftet kommunal godkjenning. Tiltak over 15 kvm er søknadspliktige. Kjøper overtar risikoen for eventuelle pålegg fra kommunen. Merk: Pergolaen er oppgitt til ca. 9 m² og er dermed under søknadsgrensen på 15 m², men vedboden er ikke arealoppgitt og godkjenningsstatus er uklar.",
            "evidence": [
              "Det er oppført en pergola på eiendommen. Selger informerer i egenerklæring om at en tidligere eier oppførte pergolaen, og at den er på ca. 9m², samt bygget en vedbod under eksisterende utvendig trapp.",
              "Det gjøres informeres om at mindre tiltak over 15 kvm er søknadspliktige.",
              "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å eventuelt byggemelde eller få godkjent ovenstående avvik nå i ettertid."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R08",
            "description": "Ingen radonmåling er utført på eiendommen. Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak.",
            "evidence": [
              "Det er ikke utført radonmåling og det er heller ikke krav til dette.",
              "Vet du om det er gjort radonmåling på eiendommen, enten av deg eller tidligere eiere? Nei, ikke som jeg kjenner til",
              "Kjøper overtar fra overtakelsesdagen ansvaret for eventuelle utbedringstiltak som senere må igangsettes og betales."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R09",
            "description": "Planlagt utbygging av nytt boligfelt i nærheten kan medføre økt trafikk, byggestøy og potensielt en ringvei gjennom sameiets eksisterende vei. Eksisterende vei er ikke dimensjonert for økt trafikk.",
            "evidence": [
              "Det må påregnes byggeaktivitet og byggestøy ifm. fremtidig utbygging av området/ledige tomter. Videre må det påregnes økt trafikk når utbyggingsområdene står ferdigstilt.",
              "En av de to treseene som det kan være aktuelt å bygge er en ringvei med trasé på den eksisterende veien gjennom sameiet.",
              "Eksisterende vei er ikke dimensjonert for trafikk inn til det nye boligfeltet."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen ligger i hensynssone H110 (nedslagsfelt drikkevann for Hurdalssjøen). Dette kan medføre restriksjoner på fremtidige tiltak og krav om konsekvensanalyse.",
            "evidence": [
              "Eiendommen berøres av hensynssone H110: Nedslagsfelt drikkevann.",
              "hensynssoner H110 skal utarbeide en konsekvensanalyse som belyser om tiltaket har påvirkning på vannkvalitet både under utførelse og etter tiltaket er ferdig.",
              "Det er krav til at tiltaket ikke medfører at vannet i Hurdalssjøen trenger mer rensing enn i dag for å oppnå drikkevannskvalitet."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Sameiet har ingen felles bygningsforsikring. Kjøper må selv tegne forsikring for innbo og løsøre, og er eksponert for risiko knyttet til manglende kollektiv bygningsforsikring.",
            "evidence": [
              "Sameiet har ikke felles bygningsforsikring.",
              "Eier må selv dekke kostnader forbundet med eget strømforbruk, forsikring av innbo og løsøre samt andre kostnader som ikke dekkes av felleskostnadene."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R12",
            "description": "Bindende TV/internett-avtale med Viken Fiber følger seksjonen med 3 års bindingstid fra desember 2024. Kjøper er forpliktet til denne avtalen og kan ikke fritt velge leverandør.",
            "evidence": [
              "Avtalen gjelder i tre år fra desember 2024, og følger automatisk med salget.",
              "Denne avtalen med bindingstid følger seksjonen.",
              "TV og internett: kr 609,‑ per måned – Leveres av Viken Fiber gjennom en kollektiv avtale som følger seksjonen. Avtalen har bindingstid i 3 år fra 1. desember 2024."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R13",
            "description": "Legalpant: Andre seksjonseiere har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2G. Dette er en skjult heftelse som ikke fremgår av grunnboken.",
            "evidence": [
              "Sameierne er solidarisk ansvarlig for sameiets økonomi. Andre seksjonseierne har lovbestemt panterett (utinglyst pant) i seksjonen for krav mot eieren som følger av sameieforholdet for inntil 2 G (folketrygdens grunnbeløp)."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "Tetting rundt gjennomføringer i takkonstruksjonen er ikke kontrollerbar. Eventuelle utetthetsproblemer kan ikke utelukkes.",
            "evidence": [
              "Er det tegn på utilstrekkelig tetting rundt gjennomføringer i konstruksjonen? Ikke kontrollerbart",
              "Det er ikke kontrollert tetting rundt gjennomføringer pga [tekst avbrutt]"
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R15",
            "description": "Grunnforurensning kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Ikke-registrert forurensning kan dermed allikevel eksistere.",
            "evidence": [
              "Ingen grunnforurensing registrert på matrikkelenheten.",
              "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen."
            ],
            "source_documents": [
              "d002_Salgsoppgave"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          }
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – El-takst mangler (0.95 → 0.95):** Godt støttet av tre separate tekstpassasjer i tilstandsrapporten. Evidensen er klar og direkte. Confidence opprettholdes.\n\n**R02 – Bad TG-2, bom i flis (0.95 → 0.95):** Direkte støttet av tilstandsrapportens sammendrag og detaljbeskrivelse. Confidence opprettholdes.\n\n**R03 – Drenering TG-IU (0.90 → 0.90):** Klart støttet av to tekstpassasjer. Confidence opprettholdes.\n\n**R04 – Grunnmur/fundament TG-IU (0.90 → 0.90):** Støttet, men teksten er avbrutt. Likevel tilstrekkelig evidens. Confidence opprettholdes.\n\n**R05 – Pipe/skorstein TG-IU (0.90 → 0.90):** Direkte støttet av tilstandsrapporten. Confidence opprettholdes.\n\n**R06 – Garasjeombygging ikke godkjent (0.95 → 0.95):** Meget godt støttet. Eksplisitt nevnt at fasadeendringer ikke er godkjent og at kjøper overtar risikoen. Confidence opprettholdes.\n\n**R07 – Pergola/vedbod ikke godkjent (0.85 → 0.70):** Evidensen viser at pergolaen er ca. 9 m², altså UNDER søknadsgrensen på 15 m². Risikobeskrivelsen er delvis misvisende – den antyder at tiltak over 15 kvm er søknadspliktige, men pergolaen er under denne grensen. Vedboden har ukjent areal. Risikoen er reell men svakere enn angitt. Confidence justeres ned til 0.70.\n\n**R08 – Ingen radonmåling (0.85 → 0.80):** Støttet av evidensen, men det presiseres at det heller ikke er krav til radonmåling. Risikoen er reell men noe begrenset. Confidence justeres marginalt ned til 0.80.\n\n**R09 – Utbygging/ringvei (0.90 → 0.90):** Meget godt støttet av reguleringsplaninformasjon og meglertekst. Confidence opprettholdes.\n\n**R10 – Hensynssone H110 (0.85 → 0.85):** Godt støttet av kommuneplaninformasjon og bestemmelser. Confidence opprettholdes.\n\n**R11 – Ingen felles bygningsforsikring (0.85 → 0.90):** Direkte og eksplisitt støttet av to tekstpassasjer. Confidence justeres opp til 0.90 da evidensen er svært klar.\n\n**R12 – Bindende Viken Fiber-avtale (0.90 → 0.90):** Meget godt støttet av tre separate tekstpassasjer. Confidence opprettholdes.\n\n**R13 – Legalpant 2G (0.80 → 0.80):** Støttet av én tekstpassasje. Dette er en standardbestemmelse i eierseksjonsloven, men er likevel en reell risiko. Confidence opprettholdes.\n\n**R14 – Tetting rundt gjennomføringer (0.75 → 0.70):** Støttet av to tekstpassasjer, men den ene er avbrutt. Risikoen er reell men evidensen er svak. Confidence justeres ned til 0.70.\n\n**R15 – Grunnforurensning (0.60 → 0.50):** Evidensen er kun en standardformulering om at ikke-registrert forurensning kan forekomme. Det er ingen konkrete indikasjoner på faktisk forurensning. Dette er en generisk ansvarsfraskrivelse fra Ambita, ikke en spesifikk risiko for denne eiendommen. Confidence justeres ned til 0.50.\n\n**Manglende risikoer som bør vurderes:**\n1. Vaskerom: Det er gjort arbeid på vaskerom i 2025 (ny innredning, utslagsvask, opplegg for vaskemaskin, tilbakeslagsventil). Det er spurt om tiltaket er godkjent av kommunen, og svaret er \"Nei, ikke som jeg kjenner til\". Dette kan være en risiko.\n2. Tilbakeslagssikring: Styreleder informerer om at denne seksjonen har fått pålegg fra kommunen om tilbakeslagssikring, som selger har ordnet. Dette er positivt, men bør bekreftes.\n3. Seksjonering: Tilleggsdelen er registrert som \"Carport og tilhørende bod\" i seksjoneringsdokumentet, men er nå ombygget til garasje. Dette kan skape juridiske uklarheter rundt seksjonens tilleggsdel.\n4. Begrensninger på eierskap og utleie i sameiet (maks 90 dager korttidsutleie per år) kan være en risiko for kjøpere som planlegger utleie.\n",
        "re_retrieval_queries": [
          "vaskerom arbeid godkjent kommunen 2025 tilbakeslagsventil",
          "tilbakeslagssikring pålegg kommunen seksjon",
          "seksjonering tilleggsdel carport garasje juridisk",
          "korttidsutleie begrensning sameiet 90 dager",
          "pipe ildsted skorstein tilstand kontroll",
          "takkonstruksjon gjennomføringer tetting snø ikke kontrollert"
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
    "input_tokens": 19878,
    "output_tokens": 4988,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
