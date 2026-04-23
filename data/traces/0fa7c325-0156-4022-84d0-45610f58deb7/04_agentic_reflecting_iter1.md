# Trace: agentic_reflecting_iter1
- **Run ID:** 0fa7c325-0156-4022-84d0-45610f58deb7
- **Tidspunkt:** 2026-03-25T22:04:45.186275+00:00
- **Varighet:** 104.76s
- **Input tokens:** 21939
- **Output tokens:** 4932

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
Risiko 1: Skjeggkre påvist i borettslaget – både i fellesareal (bod) og opplyst av selger ved kjøp i 2020. Usikkerhet om omfang og status.
  Confidence: 0.92
  Evidens: Det ble oppgitt ved kjøp i 2020 at det hadde blitt observert skjeggkre i boden i borettslaget. Men at det har blitt gjort tiltak.; Det opplyses at det er observert noen få tilfeller med skjeggkre i bygget, men aldri i den aktuelle boenheten.; Som nevnt tidligere: sett i boden før kjøp i 2020. Usikker på tidshorisont, men ikke sett/hørt om noe siden.

Risiko 2: Mus observert i svalgang i 2024 – skadedyrproblem i borettslagets fellesareal er ikke fullstendig løst.
  Confidence: 0.9
  Evidens: Som tidligere nevnt, mus i 2024 i svalgang.; Videre bemerkes musefeller plassert stedvis på utvendig side. Omfanget av skadedyr i bygget er [ikke nærmere spesifisert].

Risiko 3: Membran og sluk på bad har TG2 – membranen er gammel og kan ikke visuelt kontrolleres, noe som innebærer risiko for lekkasje og følgeskader.
  Confidence: 0.93
  Evidens: Våtrom > 4. etasje > Bad > Sluk, membran og [TG2 – avvik som kan kreve tiltak]; Det er viktig å merke seg at levetiden til membraner/tettsjikt er varierende basert på kvalitet, installasjon og bruk. Eldre membraner kan bli sprø.; Siden membranen ligger skjult under fliser og øvrige overflater, lar tilstanden seg ikke visuelt kontrollere, og vurderingen baseres derfor primært på alder og opplysninger om utførelse.

Risiko 4: Rekkverk er like under dagens krav til høyde – utgjør en potensiell sikkerhetsrisiko, særlig for barn.
  Confidence: 0.8
  Evidens: Rekkverk – Deler av rekkverket er like under dagens krav.; Det er ikke krav om utbedring av rekkverkshøyde opp til dagens forskriftskrav. Ingen strakstiltak er nødvendig og avviket utgjør svært liten sikkerhetsrisiko. For å gjenopprette rekkverkshøyde som tilfredsstiller kravet, anbefales det å fjerne tremmer på gulvet.

Risiko 5: Lyder fra balkong – friksjonslyd mellom betong og metall som følge av klimatiske forhold. Årsak ikke fullt kartlagt, og styret bør involveres.
  Confidence: 0.75
  Evidens: Flat og skrå takkonstruksjon kan dette stamme fra utvidelser i metallkonstruksjoner som følge av klimatiske forhold, og en plutselig friksjonslyd mellom deler av betong og metall oppstår.; Det anbefales å orientere styret i borettslaget om forholdet tilknyttet lyder fra balkongen, slik at de kan stå i regi for videre kartlegging og eventuelle utbedringer.

Risiko 6: Vaskemaskin fyller seg tidvis med vann uten kjent årsak – mulig feil på maskin eller tilknyttet røropplegg.
  Confidence: 0.78
  Evidens: Vaskemaskin på badet fylles tidvis med vann. Vet ikke grunn og har ikke klart å identifisere et mønster på når. Vaskemaskinen var med når jeg kjøpte leiligheten og begynner å bli noen år.

Risiko 7: Ingen radonmåling er utført – kjøper har ikke dokumentasjon på radonnivå i boligen.
  Confidence: 0.72
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 8: Pågående reguleringsarbeid i nærområdet kan påvirke eiendommens omgivelser og verdi – tre aktive planprosesser berører eiendommen.
  Confidence: 0.82
  Evidens: Det pågår planarbeid i nærområdet som kan få betydning for eiendommen: r20180048: Detaljregulering for Olav Tryggvasons gate.; Planforslag: r20180001 Nordøstre kvadrant i Midtbyen og r20210037 Olav Trygvasons gate 30.; Hensikten med områdereguleringsplanen er å styrke Midtbyen som byens historiske og [kommersielle senter].

Risiko 9: Eiendommen ligger innenfor hyblifiseringsbestemmelse – krever særskilt tillatelse for oppdeling eller bruksendring til hybler, noe som begrenser fremtidig bruksfleksibilitet.
  Confidence: 0.8
  Evidens: Eiendommen ligger innenfor virkeområdet for kommunens hyblifiseringsbestemmelse. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler.

Risiko 10: Eiendommen er regulert til bevaring av bygninger og ligger i hensynssone for kulturmiljø og kulturminner (Trondheim middelalderby) – dette kan begrense muligheten for bygningsmessige endringer og påføre ekstra kostnader.
  Confidence: 0.85
  Evidens: Eiendommen er regulert til bevaring av bygninger og område for boliger/forretning/kontor etter reguleringsplan r0118ag.; Området er videre omfattet av hensynssoner for bevaring av kulturmiljø og naturmiljø, samt båndlegging etter lov om kulturminner knyttet til Trondheim middelalderby (arkeologi) i kommuneplanens arealdel.

Risiko 11: Borettslaget har legalpanterett i andelen for krav på felleskostnader inntil 2G – kjøper overtar denne heftelsen automatisk.
  Confidence: 0.88
  Evidens: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 12: Planlagt utvendig vedlikehold av nybygget (potensielt malingsarbeid) kan medføre økte felleskostnader i nær fremtid.
  Confidence: 0.75
  Evidens: Oppstart planlegging utvendig vedlikehold nybygget. Potensielt malingsarbeid.; Styret har mål om å holde en rimelig forutsigbar husleie. Nerbyen borettslag har ikke gjeld, og er derfor ikke påvirket av rentenivå. Husleien justeres i all hovedsak som følge av prisvekst og nødvendig vedlikehold.

Risiko 13: Bygningene er ikke avskrevet i regnskapet – styret begrunner dette med at tilstrekkelig vedlikehold er gjennomført, men dette innebærer en regnskapsmessig risiko og usikkerhet om faktisk verdiforringelse.
  Confidence: 0.7
  Evidens: Bygningene er ikke avskrevet. Styret har i stedet vurdert at tilstrekkelig vedlikehold er gjennomført, jf. noten om drift og vedlikehold.; Kostpris/bokført verdi bygninger 58 626 498.

Risiko 14: Lekkasjesikring på installasjon avviker fra dagens krav, men var i samsvar med regler på installasjonstidspunktet – fremtidig utbedring kan bli nødvendig.
  Confidence: 0.72
  Evidens: Det er blitt utført en lekkasjesikring [som] utgjør et avvik fra dagens krav, men løsningen var i samsvar med gjeldende regler på installasjonstidspunktet.

Risiko 15: Kjøper må godkjennes av borettslagets styre – dette kan forsinke eller i ytterste konsekvens hindre gjennomføring av handelen.
  Confidence: 0.7
  Evidens: Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.

Dokumentkontekst:
[d189_d189 | Side [1]]

Eiendommen er tilknyttet offentlig vann‑ og
Tinglyste heftelser og rettigheter: På eiendommen er det avløpssystem. Stikkledningene fra eiendommen og ut til
tinglyst følgende heftelser og rettigheter som følger det kommunale nettet er private, og
eiendommens matrikkel ved overskjøting til ny vedlikeholdsansvaret for disse påhviler borettslaget.
hjemmelshaver: Adkomst til eiendommen skjer via offentlig vei.
5001/ 401/ 20/ 1:
Utleie
Dokumentnr: 910014 ‑ Opprettelse av matrikkelenheten
OPPRETTELSE ‑ BESTÅENDE

---

[d189_d189 | Side [1]]
9 ‑ Omnummerering ved
Ta kontakt med megler for mer informasjon. kommuneendring
Tidligere: Knr:1601 Gnr:401 Bnr:20
Kopi av situasjonskart, målebrev, reguleringsplaner m/ Gjelder denne registerenheten med flere
bestemmelser etc. ligger vedlagt i salgsoppgaven eller
kan fås ved henvendelse til megler. Vi oppfordrer Dokumenter kan fås ved henvendelse til megler.
interessenter til å gjøre seg kjent med disse.
Vei, vann og avløp
Tinglyste heftelser
Eiendommen er tilknyttet offentlig vann‑ og
Tinglyste heftelser

---

[d189_d189 | Side [1]]
årene. Les mer om Boligkjøperforsikring i
borettslaget sitter på fraflyttede og/ eller usolgte andeler, vedlagte materiell eller på https:/ /
må dekkes av de øvrige andelseierne. www.soderbergpartners.no/ eiendom/ boligkjoper/
Borettslaget har legalpanterett i andelen for krav på
Lovanvendelse
dekning av felleskostnader og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
Kjøper og selger er

---

[d189_d189 | Side [1]]
planer, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Initialer selger: KRJ 2
71006250
:ecnerefer
tnemucoD
44

## Side 45

20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller

---

[d189_d189 | Side [1]]
 (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan

---

[d189_d189 | Side [1]]
s lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse,
miljø og sikkerhet) • fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller
fellesarealet har en særlig 琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og

---

[d189_d189 | Side [1]]
g bodområde). Alle andre Eiendommen ligger innenfor virkeområdet for
anvises til private boder for oppbevaring av sykler. kommunens hyblifiseringsbestemmelse. Dette
innebærer at det kreves særskilt tillatelse fra kommunen
Vedtekter for Nerbyen borettslag og Eierseksjonssameiet for å dele opp eller bruksendre en boenhet til hybler.
Nerbyen, samt husordensregler for Nerbyen borettslag,
er vedlagt salgsoppgaven. Det pågår planarbeid i nærområdet som kan få
betydning for eiendommen:
‑ r20180048:

---

[d189_d189 | Side [1]]
 blitt gjort tiltak. Etter dette har det ikke vært
Alt utstyr og installasjoner som medfølger overtas slik de observert noe mer skjeggkre som jeg er bevisst. Jeg har
32

## Side 33

OM EIENDOMMEN
ikke sett noe tegn til noe slikt i egen bolig. som er tekket med takmembran. Vinduer med 2‑lags
glass. Det er heis i bygget. Byggemåte iht. takstmann.
Kjenner du til om det er/ har vært sopp/ råteskader/ Bygningsdeler med TG2:
insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal
eller i andre boliger) som

---

[d189_d189 | Side [1]]
 Salgsoppgaven inkluderer NEFs mer.
standardliste "Oversikt over løsøre og tilbehør", som
legges til grunn med mindre annet er spesifisert i Kjenner du til om det er/ har vært skjeggkre i boligen?
salgsoppgaven. Ja.
Det ble oppgitt ved kjøp i 2020 at det hadde blitt
Gjenstander som er nevnt i standardlisten, men som ikke observert skjeggkre i boden i borettslaget. Men at det
finnes på eiendommen, vil heller ikke følge med i salget. har blitt gjort tiltak. Etter dette har det ikke vært
Alt utstyr og

---

[d189_d189 | Side [1]]
til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt

---

[d189_d189 | Side [1]]
orhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
Beskrivelse Som tidligere nevnt, mus i 2024 i svalgang.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Beskrivelse Som nevnt tidligere: sett i boden før kjøp i 2020. Usikker på

---

[d189_d189 | Side [1]]
nerer noen eller
Selger
etterlater ekskrementer på borettslagets område.
Kristoffer Robin Jonassen
Forkjøpsrett: Det praktiseres ikke forkjøpsrett i
borettslaget.
Borettslag
NERBYEN BORETTSLAG Styregodkjennelse: Kjøper må godkjennes av
borettslagets styre. Styret kan kun nekte godkjenning
Organisasjonsnummer: 987162880 dersom det foreligger saklig grunnlag, jf. borettslagsloven
§ 4‑4.
34

## Side 35

OM EIENDOMMEN
Regulerings og arealplaner
Regnskap/ budsjett/ kostnadsøkninger: Borettslaget
hadde i 2024

---

[d189_d189 | Side [1]]
Fellesgjeld
Kr 2 990 000 Prisantydning
Kr 0 Andel av fellesgjeld Det er ingen lån registrert for borettslaget.
Andre kostnader:
Kr 2 990 000 Pris inkl. fellesgjeld
TV/ Internett/ Bredbånd: Borettslaget har en kollektiv
Omkostninger avtale med Telenor for kabel‑TV og internett. Kostnadene
Kr 260 Panteattest kjøper for disse tjenestene er inkludert i felleskostnadene,
Kr 545 Tinglysingsgebyr BRL ‑ pantedokument spesifisert som kr 392,‑ per måned for kabel‑TV og kr
Kr 545 Tinglysingsgebyr BRL ‑ skjøte 262,‑

---

[d189_d189 | Side [1]]
 tilknyttet boligen, følger
eiendomsmegler for spørsmål. normalt med i handelen, med mindre det foreligger en
særskilt avtale mellom partene om noe annet, jf.
37

## Side 38

OM EIENDOMMEN
avhendingsloven § 3‑5. reklamasjon eller prisavslag.
En standard tilbehørsliste utarbeidet av Norges Avtalerettslig
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og Partenes rettigheter og plikter reguleres av avtalen
gjelder som utgangspunkt for hva som inkluderes i salget mellom partene, og all tilgjengelig

---

[d189_d189 | Side [1]]
 fasadeplater. Flat og skrå takkonstruksjon kan dette stamme fra utvidelser i metallkonstruksjoner
33

## Side 34

OM EIENDOMMEN
som følge av klimatiske forhold, og en plutselig Andelsnummer: 9
friksjonslyd mellom deler av betong og metall oppstår.
Det anbefales å orientere styret i borettslaget om
forholdet tilknyttet lyder fra balkongen, slik at de kan stå i Nerbyen Borettslag er et samvirkeforetak som har til
regi for videre kartlegging og eventuelle formål å gi andelseierne bruksrett til egen bolig i

---

[d189_d189 | Side [1]]
000 000,‑.
dette med mindre boligen er helt eller delvis utleid. Egenerklæringsskjema er vedlagt salgsoppgaven og
interessenter oppfordres til å gjennomgå denne før bud
inngis.
Diverse
Borettslagsmodellen innebærer at borettslaget eier Boligkjøperforsikring: Kjøper har anledning til å tegne
eiendommen, mens andelseierne eier andeler i boligkjøperforsikring. Vedlagt i salgsoppgaven følger
borettslaget, som gir borett til en bestemt bolig. informasjon om Boligkjøperforsikring fra Söderberg &
Andelseierne har

---

[d189_d189 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d189_d189 | Side [1]]
g eventuelle formål å gi andelseierne bruksrett til egen bolig i lagets
utbedringer. eiendom (borett). Borettslaget består av 43
andelsleiligheter. Kun fysiske personer kan eie andeler,
‑ Det opplyses at det er observert noen få tilfeller med og ingen kan eie mer enn én andel.
skjeggkre i bygget, men aldri i den aktuelle boenheten.
Videre bemerkes musefeller plassert stedvis Eiendommen er seksjonert. Borettslagets tomt er
på utvendig side. Omfanget av skadedyr i bygget er seksjon 1 i Eiersekjonssameiet

---

[d189_d189 | Side [1]]
 i forbindelse med aksept av budet.
Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
Hvitvasking
er estimert til ca. kr 21 725,00, og omfatter vanligvis
Eiendomsmeglere er underlagt lov om hvitvasking, og er innhenting av informasjon fra kommunen, eventuell
blant annet forpliktet til å gjennomføre kundetiltak av forretningsfører, samt kopi av tinglyste dokumenter. Total
både selger og kjøper. kostnad ved salg til prisantydning: kr 103 115,00. Dette
inkluderer både vederlag og stipulerte

---

[d189_d189 | Side [1]]
åvirke boligens BRA-e.
Avvik er vurdert mot regler som gjaldt da boligen ble oppført, med mindre Opplysninger om areal kan ikke alene beny琀琀es for beregning av
annet er spesi昀椀sert i forskri昀琀 琀椀l avhendingslova, eller gjeldende versjon av markedsverdi.
NS 3600.
Personvern
Hulltaking ved våtrom, i rom under terreng eller andre bygningsdeler,
krever eiers samtykke. Tilstandsrapporten er utarbeidet som en del av Frem琀椀nd Forsikring AS si琀琀
takstkonsept. Frem琀椀nd Forsikring AS, iVerdi AS, taks琀昀oretaket og

---

[d189_d189 | Side [1]]
ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller

---

[d189_d189 | Side [1]]
ngssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare

---

[d189_d189 | Side [1]]
g funksjonen svekkes gradvis
laget/ selskapet (fellesareal eller i andre boliger)? som følge av aldring, slitasje og belastning fra normal
Ja. bruk. Siden membranen ligger skjult under fliser og
Som nevnt tidligere: sett i boden før kjøp i 2020. Usikker øvrige overflater, lar tilstanden seg ikke visuelt
på tidshorisont, men ikke sett/ hørt om noe siden. kontrollere, og vurderingen baseres derfor primært på
alder og opplysninger om utførelse.
Samsvarserklæring: Det fremgår av tilstandsrapporten at
det

---

[d189_d189 | Side [1]]
verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke

---

[d189_d189 | Side [1]]
tandsrapporten.
Vedlikehold
Boligen fremstår generelt med normal bruksslitasje og alderstypiske forhold. Det må likevel forventes at det vil være behov for jevnlig vedlikehold
og oppgraderinger i 琀椀den fremover. Det må tas høyde for at skjulte feil og skader kan forekomme, selv om disse ikke nødvendigvis lar seg avdekke
ved visuell befaring.
Ved kjøp av bolig må det påregnes løpende vedlikehold, utski昀琀ing av tekniske komponenter og justeringer e琀琀er individuelle behov og ønsker.
De琀琀e er å anse som

---

[d189_d189 | Side [1]]
4

## Side 55

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
Tilstandsrapport
Over昀氀ater
Innvendige over昀氀ater er fra byggeår.
Som 琀椀lvalg 琀椀l rapporten er det utarbeidet en egen beskrivelse (standardbeskrivelse) av over昀氀ater, innredninger og teknisk utstyr i hvert enkelt rom.
Normal bruksslitasje legges også 琀椀l grunn for TG1, slik at det kan være slitasje, hull e琀琀er innfes琀椀ng, mindre hakk og sår uten at de琀琀e betegnes som

---

[d189_d189 | Side [1]]
er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0:

---

[d189_d189 | Side [1]]
blitt utført en lekkasjesikring utgjør et avvik fra dagens krav, men
tilstandsrapport av en bygningssakkyndig, som gir en løsningen var i samsvar med gjeldende regler på
teknisk gjennomgang av boligen og påpeker eventuelle installasjonstidspunktet.
avvik. Rapporten, sammen med selgers egenerklæring,
er vedlagt salgsoppgaven. Det er viktig at interessenter Helse, miljø og sikkerhet:
grundig gjennomgår disse dokumentene før bud legges
inn. ‑ Rekkverk ‑ Deler av rekkverket er like under dagens
krav, som er

---

[d189_d189 | Side [1]]
itasjegrad: Forventet slitasje av materiale i over昀氀aten, basert på
referansenivået. Posi琀椀ve sider ved boligen, ut over det som kommer frem enkle, visuelle observasjoner. Kan vurderes sammen med bygningsdelens
av 琀椀lstandsgradene, blir normalt ikke fremhevet. alder.
Rapporten baserer seg på krav i forskri昀琀 琀椀l avhendingslova (tryggere Areal
bolighandel). For valg av 琀椀lstandsgrad blir NS 3600:2018 (teknisk
琀椀lstandsanalyse ved omsetning av bolig) lagt 琀椀l grunn. Areal fastse琀琀es e琀琀er forskri昀琀 琀椀l

---

[d189_d189 | Side [1]]
d.
Tilstandsrapporten bygger på visuell befaring og uten inngrep i
konstruksjoner, og det tas forbehold om forhold som ikke lar
seg avdekke.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
Sammendrag av boligens 琀椀lstand
Leilighet i 4. etasje
Fordeling av 琀椀lstandsgrader
AVVIK SOM KAN KREVE TILTAK
Våtrom > 4. etasje > Bad > Sluk, membran og Gå

---

[d189_d189 | Side [1]]
g normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • skjulte
installasjoner • installasjoner utenfor bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering
på grunnen • bygningens planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg •
bygningens este琀椀kk og arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold

---

[d189_d189 | Side [1]]
overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige

---

[d189_d189 | Side [1]]
VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje.

---

[d189_d189 | Side [1]]
snr.: 21667-1948 Befaringsdato: 14.01.2026 Side: 16 av 17
63

## Side 64

Ørjaveita 2, 7010 TRONDHEIM VerdiAnalyse AS
Gnr 401 - Bnr 20 O琀琀o Nielsens veg 12
5001 TRONDHEIM 7052 TRONDHEIM
Tilstandsrapportens avgrensninger
Forutsetninger og pigger.
Hulltaking: Boring av hull for inspeksjon og fuktmåling i risikoutsa琀琀e
Struktur og referansenivå konstruksjoner.
Rapporten beskriver avvik, det vil si en 琀椀lstand som er dårligere enn Normal slitasjegrad: Forventet slitasje av materiale i over昀氀aten, basert

---

[d189_d189 | Side [1]]
nden
seg ikke visuelt kontrollere, og vurderingen baseres derfor primært på alder og opplysninger om u琀昀ørelse.
Konsekvens/琀椀ltak
• Andre 琀椀ltak:
Oppdragsnr.: 21667-1948 Befaringsdato: 14.01.2026 Side: 8 av 17
55

## Side 56

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
Tilstandsrapport
Det er vik琀椀g å merke seg at leve琀椀den 琀椀l membraner/te琀琀esjikt er varierende basert på kvalitet, installasjon og bruk. Eldre membraner kan bli sprø

---

[d189_d189 | Side [1]]
: 21667-1948 Befaringsdato: 14.01.2026 Side: 6 av 17
53

## Side 54

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
Tilstandsrapport
LEILIGHET I 4. ETASJE
Byggeår Kommentar
2005 Opplysninger om byggeår er hentet
fra Eiendomsverdi.no.
Anvendelse
Bolig
Standard
Bygget har normal standard iht. alder/konstruksjon. Konstruksjonsdeler er nærmere beskrevet i de respek琀椀ve punkter i 琀椀lstandsrapporten.
Vedlikehold
Boligen fremstår generelt med normal

---

[d189_d189 | Side [1]]
 Side 59

VerdiAnalyse AS
O琀琀o Nielsens veg 12
Ørjaveita 2, 7010 TRONDHEIM 7052 TRONDHEIM
Gnr 401 - Bnr 20
5001 TRONDHEIM
Tilstandsrapport
De琀琀e punktet inneholder tydelige og le琀琀 synlige forhold ved boligen som åpenbart kan påvirke helse, miljø og sikkerhet, og som bygningssakkyndige har
oppdaget. Terskelen for hva som anses som åpenbart er høy, og det u琀昀øres ikke undersøkelser med sikte på å avdekke slike forhold. Punktet omfa琀琀er ikke
skjulte eller ikke-synlige forhold, tekniske vurderinger eller

---

[d189_d189 | Side [1]]
er Det er ikke krav om utbedring av rekkverkshøyde opp til
avvik fra normal slitasje og/ eller høy alder, noe som kan dagens forskriftskrav. Ingen strakstiltak er nødvendig og
innebære behov for utbedringer. Bygningsdeler som er avviket utgjør svært liten sikkerhetsrisiko. For å
merket med TGIU er ikke blitt vurdert av takstmannen. gjenopprette rekkverkshøyde som tilfredsstiller kravet,
anbefales det å fjerne tremmer på gulvet.
Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten: ‑

---

[d189_d189 | Side [1]]
 av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE

---

[d189_d189 | Side [1]]
gningsdelens tekniske, funksjonelle eller
este琀椀ske status på et gi琀琀 琀椀dspunkt.
Symptom: Forhold som gir indikasjon på hvilken 琀椀lstand et byggverk eller
en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse av avvik og alder.
Skadegjørere: I hovedsak råte, sopp og skadedyr.
Fuktsøk: Over昀氀atesøk med egnet søkeutstyr som fuk琀椀ndikator eller visuelle
observasjoner.
Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende
konstruksjon ved bruk av egnet måleutstyr, blant annet

---

[d189_d189 | Side [1]]
Plantegning

## Side 27

Plantegning

## Side 28

ØRJAVEITA 2
OM EIENDOMMEN

## Side 29

OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Styret har som mål å holde en rimelig og forutsigbar
husleie. Justeringer av felleskostnadene skjer i hovedsak
som følge av prisvekst og nødvendig vedlikehold.
Prisantydning
Kommunale avgifter
Kr 2 990 000
Kommunale avgifter faktureres borettslaget og er dekket
gjennom de månedlige felleskostnadene.
Omkostning kjøper
Fellesgjeld
Kr 2 990 000 Prisantydning
Kr 0 Andel av fellesgjeld

---

[d189_d189 | Side [1]]
essige overskuddet tar ikke hensyn til en
del viktige økonomiske forhold som påvirker borettslagets disponible midler. Dette gjelder for
eksempel opptak og avdrag på lån, samt kjøp og salg av anleggsmidler. Borettslagets
disponible midler er de økonomiske midlene som borettslaget har til rådighet, og de defineres
som omløpsmidler fratrukket kortsiktig gjeld. Størrelsen på de disponible midlene kan blant
annet benyttes til å vurdere om det er nødvendig å endre størrelsen på innkrevde
felleskostnader som den

---

[d189_d189 | Side [1]]
034
SPESIFIKASJON AV DISPONIBLE MIDLER:
Omløpsmidler 2 682 901 2 178 244
Kortsiktig gjeld -331 573 -214 210
C. DISP. MIDLER PR. 31.12. 2 351 328 1 964 034
Vedlegg 1 11 av 19 Årsrapport og årsregnskap 2024.pdf
99

## Side 100

NERBYEN BORETTSLAG
ORG.NR. 987 162 880, KUNDENR. 9266
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 2 345 495 2 227 205 2 381 000 2 381 000
Andre inntekter 0 0 0 0
SUM DRIFTSINNTEKTER 2 345 495 2 227 205 2

---

[d189_d189 | Side [1]]
IG GJELD 32 043 000 32 043 000
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 46 986 22 563
Leverandørgjeld 257 521 116 478
Annen kortsiktig gjeld 14 27 066 75 169
SUM KORTSIKTIG GJELD 331 573 214 210
SUM EGENKAPITAL OG GJELD 61 309 399 60 804 742
Pantstillelse 15 61 706 525 61 706 525
Garantiansvar 0 0
Trondheim, 12.05.2025
Styret i Nerbyen Borettslag
Frank Robert Jørgensen /s/ Lena Warholm /s/ Jan Ketil Simonsen /s/
Vedlegg 1 13 av 19 Årsrapport og årsregnskap 2024.pdf
101

## Side 102

NOTE:

---

[d189_d189 | Side [1]]

Regnskap/ budsjett/ kostnadsøkninger: Borettslaget
hadde i 2024 samlede driftsinntekter på kr 2 345 495 og Eiendommen er regulert til bevaring av bygninger og
samlede driftskostnader på kr 2 026 246. Dette ga et område for boliger/ forretning/ kontor etter
positivt årsresultat på kr 387 294. reguleringsplan r0118ag.
Eiendommen er i kommuneplanens arealdel avsatt til
Vedtekter/ husordensregler
byggesone 1 og sentrumsformål ‑ framtidig. Området er
Det er tillatt med elektrisk grill og gassgrill på

---

[d189_d189 | Side [1]]
 innbetalte felleskostnader 643
SUM FINANSINNTEKTER 68 045
NOTE: 12
BYGNINGER
Kostpris/bokført verdi bygninger 58 626 498
SUM BYGNINGER 58 626 498
Tomten er kjøpt.
Gnr.401/bnr.20
Bygningene er ikke avskrevet. Styret har i stedet vurdert at tilstrekkelig vedlikehold er
gjennomført, jf. noten om drift og vedlikehold.
NOTE: 13
BORETTSINNSKUDD
Opprinnelig -32 043 000
SUM BORETTSINNSKUDD -32 043 000
NOTE: 14
ANNEN KORTSIKTIG GJELD
Energi desember -27 066
SUM ANNEN KORTSIKTIG GJELD -27 066
NOTE:

---

[d189_d189 | Side [1]]
er i borettslaget.
Gjennomført større renovering av tre vaskerom i Tempogården.
Oppstart planlegging utvendig vedlikehold nybygget. Potensielt malingsarbeid.
Styret har mål om å holde en rimelig forutsigbar husleie. Nerbyen borettslag har ikke gjeld,
og er derfor ikke påvirket av rentenivå. Husleien justeres i all hovedsak som følge av
prisvekst og nødvendig vedlikehold.
Trondheim 30.04.2025
For styret
i
NERBYEN BORETTSLAG
Frank Jørgensen
styrets leder
Lena Warholm Jan Ketil Simonsen
styremedlem

---

[d189_d189 | Side [1]]
 annet at man må gi informasjon i form av noter, og utarbeide en oversikt
over de disponible midlene i årsregnskapet. På de neste sidene presenteres borettslagets
resultatregnskap, balanse og tilhørende noter.
Boligselskapets resultatregnskap gir imidlertid ikke en fullstendig oversikt over borettslagets
disponible midler ved årsskiftet. I resultatregnskapet presenteres det en oversikt over
borettslagets inntekter og kostnader. Det regnskapsmessige overskuddet tar ikke hensyn til en
del viktige økonomiske

---

[d189_d189 | Side [1]]
ONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 1 625 640
Kabel-TV 202 272
Akonto energi 179 964
Fjernvarme 149 856
Internett 135 192
Trappevask 37 800
Drift vaskerom 36 000
Ventilasjon 14 400
Avregning energi -35 629
SUM INNKREVDE FELLESKOSTNADER 2 345 495
NOTE: 3
PERSONALKOSTNADER
Arbeidsgiveravgift -18 330
SUM PERSONALKOSTNADER -18 330
Det har verken vært ansatte eller

---

[d189_d189 | Side [1]]
 opp
under forutsetning av fortsatt drift og styret bekrefter at forutsetningen for fortsatt drift er til
stede.
Vedlegg 1 6 av 19 Årsrapport og årsregnskap 2024.pdf
97

## Side 98

UTDRAG AV STYRETS ARBEID
Daglig drift.
Godkjenne budsjett.
Oppfølging vaktmester.
Oppfølging renholdservice.
Avlesning energi for 31 leiligheter med felles strøm og vann, ved årsskiftet.
Diverse mindre løpende vedlikehold.
Planlagt ytterligere bytting av lysarmaturer i borettslaget.
Gjennomført større renovering av tre vaskerom

---

[d189_d189 | Side [1]]
5
Kr 2 991 350 inkl. boligkjøperforsikring
Formuesverdi
Kr 3 000 250 inkl. boligkjøperforsikring
Formuesverdi primær: Kr 746 323 (2025)
Felleskostnader
Formuesverdi sekundær: Kr 2 985 290 (2025)
Felleskostnader kr 4 817,‑ pr. mnd
Felleskostnadene er fordelt slik: Info om formuesverdi: Skatteetaten beregner en
‑ Felleskostnader: kr 3 280,‑ boligverdi (beregnet markedsverdi for bolig) basert på
‑ A konto strøm: kr 450,‑ SSBs statistiske opplysninger om omsatte boliger. I
‑ Fjernvarme: kr 433,‑ beregningen

---

[d189_d189 | Side [1]]
4 742
Drift/vedlikehold vaskerianlegg -196 911
Drift/vedlikehold ventilasjonsanlegg -10 511
SUM DRIFT OG VEDLIKEHOLD -405 762
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
bygningene.
NOTE: 8
KOMMUNALE AVGIFTER
Eiendomsskatt -118 951
Vann- og avløpsavgift -120 498
Renovasjonsavgift -60 708
SUM KOMMUNALE AVGIFTER -300 156
NOTE: 9
ENERGI/FYRING
Elektrisk energi -140 490
Fjernvarme -126 465
Energiavregning flyttede beboere -3 633
SUM ENERGI / FYRING -270

---

[d189_d189 | Side [1]]
Energiavregning flyttede beboere -3 633
SUM ENERGI / FYRING -270 589
NOTE: 10
ANDRE DRIFTSKOSTNADER
Vaktmestertjenester -171 585
Vakthold -46 533
Renhold ved firmaer -59 492
Andre fremmede tjenester -714
Andre kontorkostnader -55
Bank- og kortgebyr -3 001
SUM ANDRE DRIFTSKOSTNADER -281 379
Vedlegg 1 15 av 19 Årsrapport og årsregnskap 2024.pdf
103

## Side 104

NOTE: 11
FINANSINNTEKTER
Renter bankinnskudd 67 402
Renter av for sent innbetalte felleskostnader 643
SUM FINANSINNTEKTER 68 045
NOTE:

---

[d189_d189 | Side [1]]
ødvendig å endre størrelsen på innkrevde
felleskostnader som den enkelte beboer betaler, og om det er behov for å ta opp lån eller om
det er mulighet til å betale ned ekstra på eksisterende gjeld.
DISPONIBLE MIDLER
Note 2024 2023
A. DISP. MIDLER PR. 01.01. 1 964 034 1 390 225
B. ENDRING I DISP. MIDLER:
Årets resultat (se res.regnskapet) 387 294 573 809
B. ÅRETS ENDR. I DISP. MIDLER 387 294 573 809
C. DISP. MIDLER PR. 31.12. 2 351 327 1 964 034
SPESIFIKASJON AV DISPONIBLE MIDLER:
Omløpsmidler 2 682 901 2

---

[d189_d189 | Side [1]]
ed for kabel‑TV og kr
Kr 545 Tinglysingsgebyr BRL ‑ skjøte 262,‑ per måned for internett.
Kr 8 900 Boligkjøperforsikring (valgfritt)
Andre utgifter: I tillegg til felleskostnader påløper
Kr 1 350 Omkostninger eksl. boligkjøperforsikring kostnader til for eksempel innboforsikring, diverse
Kr 10 250 Omkostninger inkl. boligkjøperforsikring abonnementer og lignende.
Formue:
Estimert totalpris ink. omk
Andel fellesformue: Kr 71 204 pr. 31.12.2025
Kr 2 991 350 inkl. boligkjøperforsikring
Formuesverdi
Kr 3 000

---

[d189_d189 | Side [1]]
T./-KOSTNADER 68 045 39 227 0 30 000
ÅRSRESULTAT 387 294 573 809 378 580 308 000
Overføringer:
Til opptjent egenkapital 387 294 573 809
Vedlegg 1 12 av 19 Årsrapport og årsregnskap 2024.pdf
100

## Side 101

NERBYEN BORETTSLAG
ORG.NR. 987 162 880, KUNDENR. 9266
BALANSE
Note 2024 2023
EIENDELER
ANLEGGSMIDLER
Bygninger 12 58 626 498 58 626 498
SUM ANLEGGSMIDLER 58 626 498 58 626 498
OMLØPSMIDLER
Restanser felleskostnader/kundefordringer 4 957 -14 992
Forskuddsbetalte kostnader 180 282 171 168
Driftskonto

---

[d189_d189 | Side [1]]

REVISJONSHONORAR
Revisjonshonoraret er i sin helhet knyttet til revisjon og beløper seg til kr 12 500.
NOTE: 6
KONSULENTHONORAR
Tilleggstjenester, OBOS Eiendomsforvaltning AS -18 323
OBOS Prosjekt AS -8 278
SUM KONSULENTHONORAR -26 600
NOTE: 7
DRIFT OG VEDLIKEHOLD
Drift/vedlikehold bygninger -119 474
Drift/vedlikehold VVS -37 500
Drift/vedlikehold elektro -3 301
Drift/vedlikehold heisanlegg -23 323
Drift/vedlikehold brannsikring -14 742
Drift/vedlikehold vaskerianlegg -196 911
Drift/vedlikehold

---

[d189_d189 | Side [1]]
tene består av de fire gatene Olav
Info energiklasse
Tryggvasons gate, Kongens gate, Innherredsveien og
Se fullstendig energiattest som ligger vedlagt Elgeseter gate. Det er lagt opp til nær samordning
salgsoppgave. mellom gateprosjektene og tilgrensende prosjekter.
‑ r20180001: Områderegulering for Nordøstre kvadrant i
Oppvarming
Midtbyen (status: planforslag).
Boligen har følgende oppvarmingskilder: Hensikten med områdereguleringsplanen er å styrke
‑ Fjernvarme. Midtbyen som byens historiske og

---

[d189_d189 | Side [1]]
ommuneplanens arealdel 2022-2034 (27.3.2025) 1212.55m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
Bevaring av bygninger 901.98m2
5001 r0118ag Nordre gate 26 og 28,30 Fjordgata 33 og 35 og Ørjaveita 4
(22.5.2003)
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r0118 Midtbyplanen (28.8.1981)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER

---

[d189_d189 | Side [1]]
g. Området er
Det er tillatt med elektrisk grill og gassgrill på balkonger, videre omfattet av hensynssoner for bevaring av
men kullgrill er forbudt. kulturmiljø og naturmiljø, samt båndlegging etter lov om
kulturminner knyttet til Trondheim middelalderby
Det er begrenset antall parkeringsplasser for sykler. De (arkeologi) i kommuneplanens arealdel.
som bruker sykler daglig og hyppig har fortrinnsrett til
sykkelparkeringen (portrom og bodområde). Alle andre Eiendommen ligger innenfor virkeområdet

---

[d189_d189 | Side [1]]
tighet nøyaktighet
Eiendomsgrense generert Eiendomsgrense fiktiv Veg
Hensyn bevaring naturmiljø Hensyn bevaring kulturmiljø Turveg / turdrag
Framtidig turveg / turdrag Jernbane - på bakken Sporveg
Kollektivtrase Fjernveg Hovedveg
Hovedvegnett sykkel Båndlegging etter lov om Byggesone 1
kulturminner, Trondheim
middelalderby (arkeologi)
Byggesone 2 Offentlig eller privat Bane
tjenesteyting
Havn Blå/grønnstruktur Framtidig blå/grønnstruktur
Bruk og vern av sjø og Ferdsel Farled
vassdrag mm
Friluftsområde i

---

[d189_d189 | Side [1]]
gelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
03.02.2026 17:05:30 Side 1 av 2
105

## Side 106

5001 r20180048 Olav Tryggvasons gate
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Ja
5001 r20180001 Nordøstre kvadrant i Midtbyen
5001 r20210037 Olav Trygvasons gate 30
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
03.02.2026 17:05:30 Side 2 av

---

[d189_d189 | Side [1]]
rmasjonen. Side 1 av 2
111

## Side 112

Tegnforklaring
RpOmråde igangsatt RpOmråde forslag RpOmråde vedtatt linje - på
bakkenivå
RpOmråde vedtatt - under RpOmråde vedtatt - på Eiendomsgrense god
bakkenivå bakkenivå nøyaktighet
Eiendomsgrense dårlig Eiendomsgrense generert Veg
nøyaktighet
Fylkesveg gatenavn . Kommunalveg gatenavn . Privatveg gatenavn .
Plan dispensasjon punkt RpFormålGrense RpBåndleggingGrense
RpGrense Byggegrense Planlagt bebyggelse
Bebyggelse som forutsettes Bevaring av bygninger

---

[d189_d189 | Side [1]]
le bygg, strukturer og byrom.
35

## Side 36

OM EIENDOMMEN
Snr: 4
Formål: Næring
‑ r20210037: Detaljregulering for Olav Trygvasons gate Sameiebrøk: 365/ 4099
30 (status: planforslag). Bestemmelser om tilleggsdel, se under servitutter.
Hensikten med planen er å revitalisere eiendommen og Gjelder seksjon nr.1,2 og 4
styrke Midtbyen som et levende bolig‑ og Gjelder denne registerenheten med flere
næringsområde.
01.01.2018 ‑ Dokumentnr: 116579 ‑ Omnummerering ved
Ta kontakt med megler for mer informasjon.

---

[d189_d189 | Side [1]]
d i nærområdet som kan få
betydning for eiendommen:
‑ r20180048: Detaljregulering for Olav Tryggvasons gate
Energimerke
Hovedformålet med prosjektet er å legge til rette for at
Energikarakter: B oppnå målet om at veksten i persontransporten skal tas
med gåing, sykling og kollektivtransport. Fornying av fire
Energifarge: Lys grønn sentrale gater i kollektivbuen er et tverretatlig
samarbeidsprosjekt som ble startet opp i april 2018.
Gateprosjektene består av de fire gatene Olav
Info energiklasse
Tryggvasons

---

[d189_d189 | Side [1]]
uk og vern av sjø og Ferdsel Farled
vassdrag mm
Friluftsområde i sjø
03.02.2026 17:05:40 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
108

## Side 109

109

## Side 110

110

## Side 111

Reguleringsplaner
Eiendom: Gnr: 401 Bnr: 20 Fnr: 0 Snr: 1
Adresse: Nordre gate 26
Målestokk
7010 TRONDHEIM, m.fl.
Trondheim 1:1000
Annen info:
03.02.2026 17:06:02 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
111

## Side 112

Tegnforklaring
RpOmråde

---

[d189_d189 | Side [1]]
lagt bebyggelse
Bebyggelse som forutsettes Bevaring av bygninger Kjøreveg
fjernet
Gang-/sykkelveg Jernbane Båndlegging etter lov om
kulturminner
Forretning/Kontor/Tjenesteytin Samferdselsanlegg og teknisk Kombinerte formål for
g infrastruktur (arealer) samferdselsanlegg og/eller
teknisk infrastrukturtraseer
RpFormålGrense RpGrense Parkeringshus/-anlegg
03.02.2026 17:06:02 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
112

## Side 113

113

## Side 114

114

## Side

---

[d189_d189 | Side [1]]

    



 

122

## Side 123

Nabolagsprofil
Ørjaveita 2 - Nabolaget Midtbyen nordre - vurdert av 136 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Studenter Veldig trygt 78/100
Enslige
Kvalitet på skolene
Godt

---

[d189_d189 | Side [1]]
t
Studenter Veldig trygt 78/100
Enslige
Kvalitet på skolene
Godt voksne
Bra 72/100
Naboskapet
Offentlig transport Høflige 47/100
Søndre gate Regionbuss 3 min
Linje FB73 0.2 km
Aldersfordeling
Trondheim Sentrum 5 min
Totalt 65 ulike linjer 0.4 km
Trondheim S 6 min Linje F6, F7, R60, R70, R71 0.5 km
St. Olavs gate 7 min
Linje 9 0.6 km
Trondheim hurtigbåtterminal 9 min
Linje 800, 805, 810 0.7 km
Skoler
Birralee International School Trondheim (1...14 min
293 elever, 20 klasser 1.1 km
Bispehaugen skole (1-7

---

[d189_d189 | Side [1]]
in Enslig m. barn
Trondheim Helse og Figursalong 3 min
Enslig u. barn
Boligmasse
Flerfamilier
6% rekkehus
66% blokk 0% 64%
28% annet
Midtbyen nordre
Trondheim
Norge
Sivilstand
Norge
«Fint for urbane mennesker, som liker
kafeer, shopping og uteliv.» Gift 13% 33%
Sitat fra en lokalkjent Ikke gift 81% 54%
Separert 5% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan

---

[d189_d189 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d189_d189 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det

---

[d189_d189 | Side [1]]
er eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for

---

[d189_d189 | Side [1]]
il grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova

---

[d189_d189 | Side [1]]
selgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom

---

[d189_d189 | Side [1]]
g at selges ansvar begrenses ettersom boligen selges «som
kjøper setter seg grundig inn i alle salgsdokumentene, den er», noe som kan være av verdi for selger. Det
herunder salgsoppgave, tilstandsrapport og selgers understrekes at selger står fritt til å velge hvilket bud som
egenerklæring. Kjøper anses for å være kjent med aksepteres, og er ikke forpliktet til å velge det høyeste.
forhold som er tydelig beskrevet i salgsdokumentene,
slike forhold kan ikke senere gjøres gjeldende som en Alle budgivere må

---

[d189_d189 | Side [1]]
nd – eller hvis det er
Slitasje og bruk tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Det må også forventes at eiendommer som har vært i påvirket avtalen.
bruk, vil kunne ha tegn til slitasje og eventuelle skader.
Slik normal bruksslitasje og behov for vedlikehold må Dersom det er avvik mellom oppgitt og faktisk innvendig
kjøper påregne, og dette vil normalt ikke gi grunnlag for areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
38

## Side 39

OM EIENDOMMEN
dette utløse rett til

---

[d189_d189 | Side [1]]
kstkonsept. Frem琀椀nd Forsikring AS, iVerdi AS, taks琀昀oretaket og andre
Befaring begrenses 琀椀l visuelle observasjoner av 琀椀lgjengelige 昀氀ater. Den relevante interessenter beny琀琀er personopplysninger fra 琀椀lstandsrapporten
bygningssakkyndige gjør ikke fysiske inngrep for å avdekke avvik, utover de for analyse- og sta琀椀s琀椀kkformål, utvikling og dri昀琀 av produkter og tjenester i
som er beskrevet i forskri昀琀 琀椀l avhendingslova. Rapporten gir ingen garan琀椀 takstbransjen og boligomsetningen. Frem琀椀nd Forsikring

---

[d189_d189 | Side [1]]
 hva som inkluderes i salget mellom partene, og all tilgjengelig dokumentasjon som
– med mindre avvik er tydelig avtalt mellom kjøper og forelå for kjøper før handelen ble inngått. I tillegg gjelder
selger. avhendingsloven. Det gjelder ulike avtalevilkår avhengig
av om kjøper er forbrukerkjøper eller ikke, og dette er
Om informasjonsgrunnlaget nærmere forklart nedenfor.
Opplysninger om boligens størrelse og utforming, både
innvendig og utvendig, bygger på informasjon hentet fra Budgivning og selgers

---

[d189_d189 | Side [1]]
budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende

---

[d189_d189 | Side [1]]
 person). Dersom styret Tidspunkt for overtakelse avtales mellom kjøper og
ikke har sendt svar på skriftlig søknad om godkjenning selger.
innen 1 måned etter at søknaden er mottatt, skal
brukeren regnes som godkjent.
Forsikring
Boligselgerforsikring: Selger har tegnet
Radonmåling
boligselgerforsikring som dekker selgers ansvar etter
Selger har ikke utført radonmåling. Det er ikke krav om avhendingsloven begrenset oppad kr. 20 000 000,‑.
dette med mindre boligen er helt eller delvis utleid.

---

[d189_d189 | Side [1]]
ra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: KRJ 4
71006250
:ecnerefer
tnemucoD
46

## Side 47

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Kristoffer Jonassen e83214e2b699899ec131d 15.02.2026 Signer authenticated by
04e4a06fe7fb6a4dad5

---

[d189_d189 | Side [1]]
utvendig, bygger på informasjon hentet fra Budgivning og selgers vurdering
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i På grunn av ulike ansvarsforhold kan selger velge å
salgsoppgaven er basert på selgers informasjon, prioritere bud fra ikke‑forbrukere, selv om budet er lavere
fagkyndig vurdering, samt opplysninger fra offentlige enn et forbrukerbud. Når kjøper ikke er forbruker, kan
registre som kommunen og Kartverket. Det er viktig at selges ansvar begrenses ettersom boligen selges «som
kjøper

---

[d189_d189 | Side [1]]
e bli formidlet til selger. Alle interessenter
selgers ansvar er begrenset til det som følger direkte av oppfordres til å inngi bud via eiendomsmegler.
avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
fravikes § 3‑3 andre ledd, og eventuelle arealavvik Megler skal legge til rette for en forsvarlig avvikling av
vurderes etter § 3‑8. budrunden. I forbrukerforhold (dvs. der selger er
forbruker) skal megleren ikke formidle bud med kortere
Kjøperens plikt til å foreta grundige undersøkelser gjelder

---

[d189_d189 | Side [1]]
. Vaskemaskin på badet fylles tidvis
med vann. Vet ikke grunn og har ikke klart å identifisere et mønster på når. Vaskemaskinen var med når jeg kjøpte leiligheten og begynner å bli
noen år.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Skjeggkre påvist i borettslaget – både i fellesareal (bod) og opplyst av selger ved kjøp i 2020. Usikkerhet om omfang og status.",
      "evidence": [
        "Det ble oppgitt ved kjøp i 2020 at det hadde blitt observert skjeggkre i boden i borettslaget. Men at det har blitt gjort tiltak.",
        "Det opplyses at det er observert noen få tilfeller med skjeggkre i bygget, men aldri i den aktuelle boenheten.",
        "Som nevnt tidligere: sett i boden før kjøp i 2020. Usikker på tidshorisont, men ikke sett/hørt om noe siden."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R2",
      "description": "Mus observert i svalgang i 2024 – skadedyrproblem i borettslagets fellesareal er ikke fullstendig løst.",
      "evidence": [
        "Som tidligere nevnt, mus i 2024 i svalgang.",
        "Videre bemerkes musefeller plassert stedvis på utvendig side. Omfanget av skadedyr i bygget er ikke nærmere spesifisert."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R3",
      "description": "Membran og sluk på bad har TG2 – membranen er gammel og kan ikke visuelt kontrolleres, noe som innebærer risiko for lekkasje og følgeskader.",
      "evidence": [
        "Våtrom > 4. etasje > Bad > Sluk, membran og [TG2 – avvik som kan kreve tiltak]",
        "Det er viktig å merke seg at levetiden til membraner/tettsjikt er varierende basert på kvalitet, installasjon og bruk. Eldre membraner kan bli sprø.",
        "Siden membranen ligger skjult under fliser og øvrige overflater, lar tilstanden seg ikke visuelt kontrollere, og vurderingen baseres derfor primært på alder og opplysninger om utførelse."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Rekkverk er like under dagens krav til høyde – utgjør en potensiell sikkerhetsrisiko, særlig for barn.",
      "evidence": [
        "Rekkverk – Deler av rekkverket er like under dagens krav.",
        "Det er ikke krav om utbedring av rekkverkshøyde opp til dagens forskriftskrav. Ingen strakstiltak er nødvendig og avviket utgjør svært liten sikkerhetsrisiko. For å gjenopprette rekkverkshøyde som tilfredsstiller kravet, anbefales det å fjerne tremmer på gulvet."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R5",
      "description": "Lyder fra balkong – friksjonslyd mellom betong og metall som følge av klimatiske forhold. Årsak ikke fullt kartlagt, og styret bør involveres.",
      "evidence": [
        "Flat og skrå takkonstruksjon kan dette stamme fra utvidelser i metallkonstruksjoner som følge av klimatiske forhold, og en plutselig friksjonslyd mellom deler av betong og metall oppstår.",
        "Det anbefales å orientere styret i borettslaget om forholdet tilknyttet lyder fra balkongen, slik at de kan stå i regi for videre kartlegging og eventuelle utbedringer."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R6",
      "description": "Vaskemaskin fyller seg tidvis med vann uten kjent årsak – mulig feil på maskin eller tilknyttet røropplegg.",
      "evidence": [
        "Vaskemaskin på badet fylles tidvis med vann. Vet ikke grunn og har ikke klart å identifisere et mønster på når. Vaskemaskinen var med når jeg kjøpte leiligheten og begynner å bli noen år."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R7",
      "description": "Ingen radonmåling er utført – kjøper har ikke dokumentasjon på radonnivå i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R8",
      "description": "Pågående reguleringsarbeid i nærområdet kan påvirke eiendommens omgivelser og verdi – tre aktive planprosesser berører eiendommen.",
      "evidence": [
        "Det pågår planarbeid i nærområdet som kan få betydning for eiendommen: r20180048: Detaljregulering for Olav Tryggvasons gate.",
        "Planforslag: r20180001 Nordøstre kvadrant i Midtbyen og r20210037 Olav Trygvasons gate 30.",
        "Hensikten med områdereguleringsplanen er å styrke Midtbyen som byens historiske og kommersielle senter."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger innenfor hyblifiseringsbestemmelse – krever særskilt tillatelse for oppdeling eller bruksendring til hybler, noe som begrenser fremtidig bruksfleksibilitet.",
      "evidence": [
        "Eiendommen ligger innenfor virkeområdet for kommunens hyblifiseringsbestemmelse. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen er regulert til bevaring av bygninger og ligger i hensynssone for kulturmiljø og kulturminner (Trondheim middelalderby) – dette kan begrense muligheten for bygningsmessige endringer og påføre ekstra kostnader.",
      "evidence": [
        "Eiendommen er regulert til bevaring av bygninger og område for boliger/forretning/kontor etter reguleringsplan r0118ag.",
        "Området er videre omfattet av hensynssoner for bevaring av kulturmiljø og naturmiljø, samt båndlegging etter lov om kulturminner knyttet til Trondheim middelalderby (arkeologi) i kommuneplanens arealdel."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Borettslaget har legalpanterett i andelen for krav på felleskostnader inntil 2G – kjøper overtar denne heftelsen automatisk.",
      "evidence": [
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Planlagt utvendig vedlikehold av nybygget (potensielt malingsarbeid) kan medføre økte felleskostnader i nær fremtid.",
      "evidence": [
        "Oppstart planlegging utvendig vedlikehold nybygget. Potensielt malingsarbeid.",
        "Styret har mål om å holde en rimelig forutsigbar husleie. Nerbyen borettslag har ikke gjeld, og er derfor ikke påvirket av rentenivå. Husleien justeres i all hovedsak som følge av prisvekst og nødvendig vedlikehold."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R13",
      "description": "Bygningene er ikke avskrevet i regnskapet – styret begrunner dette med at tilstrekkelig vedlikehold er gjennomført, men dette innebærer en regnskapsmessig risiko og usikkerhet om faktisk verdiforringelse.",
      "evidence": [
        "Bygningene er ikke avskrevet. Styret har i stedet vurdert at tilstrekkelig vedlikehold er gjennomført, jf. noten om drift og vedlikehold.",
        "Kostpris/bokført verdi bygninger 58 626 498.",
        "Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av bygningene."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R14",
      "description": "Lekkasjesikring på installasjon avviker fra dagens krav, men var i samsvar med regler på installasjonstidspunktet – fremtidig utbedring kan bli nødvendig.",
      "evidence": [
        "Det er blitt utført en lekkasjesikring som utgjør et avvik fra dagens krav, men løsningen var i samsvar med gjeldende regler på installasjonstidspunktet."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Kjøper må godkjennes av borettslagets styre – dette kan forsinke eller i ytterste konsekvens hindre gjennomføring av handelen.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.",
        "Dersom styret ikke har sendt svar på skriftlig søknad om godkjenning innen 1 måned etter at søknaden er mottatt, skal brukeren regnes som godkjent."
      ],
      "source_documents": [
        "d189_d189"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    }
  ],
  "re_retrieval_queries": [
    "Hva er omfanget av skjeggkre-tiltak i borettslaget etter 2020, og er det dokumentert at problemet er løst?",
    "Er det utført skadedyrkontroll eller profesjonell bekjempelse av mus i borettslaget etter 2024?",
    "Hva er byggeåret for badet og når ble membranen installert – er det dokumentert utbedring av våtrom?",
    "Hvilke konkrete konsekvenser har reguleringsplan r20180048 og r20210037 for eiendommen Ørjaveita 2?",
    "Er det andre TG2- eller TG3-avvik i tilstandsrapporten som ikke er nevnt i risikolisten?",
    "Hva er status på stikkledninger og privat vedlikeholdsansvar for vann og avløp?",
    "Er det dokumentert ferdigattest eller brukstillatelse for boligen?",
    "Hva er energikarakteren og er det risiko knyttet til fjernvarme-leveransen?"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Skjeggkre (justert ned fra 0.92 til 0.88):** Evidensen er solid og treffsikker. Tre separate kilder bekrefter observasjoner. Imidlertid er siste observasjon fra 2020 og selger opplyser at det ikke er sett noe siden. Tiltak er gjennomført. Risikoen er reell men noe lavere enn 0.92 siden det ikke er nyere observasjoner i selve boenheten.\n\n**R2 – Mus (beholdes 0.90):** Godt dokumentert med observasjon i 2024 og musefeller på utvendig side. Omfang er ikke spesifisert, noe som er en usikkerhetsfaktor. Confidence opprettholdes.\n\n**R3 – Membran/sluk TG2 (justert opp fra 0.93 til 0.95):** Svært godt dokumentert i tilstandsrapporten. Byggeår 2005 betyr membranen er ca. 20 år gammel. Skjult konstruksjon som ikke kan visuelt kontrolleres. Dette er den mest konkrete tekniske risikoen med direkte TG2-klassifisering.\n\n**R4 – Rekkverk (justert ned fra 0.80 til 0.70):** Evidensen bekrefter avviket, men tilstandsrapporten selv nedtoner risikoen kraftig: \"svært liten sikkerhetsrisiko\", ingen strakstiltak nødvendig, og løsningen er enkel (fjerne tremmer). Confidence justeres ned.\n\n**R5 – Lyder fra balkong (beholdes 0.75):** Evidensen støtter risikoen. Årsak er ikke fullt kartlagt og styret anbefales involvert. Usikkerhet om omfang og kostnad ved utbedring.\n\n**R6 – Vaskemaskin (justert ned fra 0.78 til 0.72):** Evidensen er kun selgers egenerklæring. Vaskemaskinen er gammel og medfølger salget. Risikoen er reell men begrenset i omfang – dreier seg primært om en hvitevare, ikke nødvendigvis røropplegg. Noe usikkerhet om dette er en vesentlig risiko.\n\n**R7 – Radon (beholdes 0.72):** Klart dokumentert at måling ikke er utført. Leiligheten er i 4. etasje, noe som normalt reduserer radonrisiko, men dette er ikke eksplisitt nevnt i dokumentene. Confidence opprettholdes.\n\n**R8 – Reguleringsarbeid (beholdes 0.82):** Tre aktive planprosesser er dokumentert. Konsekvensene for eiendommen er ikke fullt spesifisert, men planarbeidet er bekreftet.\n\n**R9 – Hyblifisering (justert opp fra 0.80 til 0.85):** Direkte og entydig dokumentert i salgsoppgaven. Klar begrensning på fremtidig bruksfleksibilitet.\n\n**R10 – Bevaring/kulturminner (justert opp fra 0.85 til 0.90):** Svært godt dokumentert med både reguleringsplan og hensynssoner. Direkte konsekvenser for bygningsmessige endringer er reelle.\n\n**R11 – Legalpanterett 2G (beholdes 0.92):** Direkte sitert fra salgsoppgaven. Standardheftelse i borettslag, men reell risiko for kjøper.\n\n**R12 – Vedlikehold nybygg (beholdes 0.75):** Dokumentert i styrets årsberetning. Usikkerhet om kostnadsnivå og tidspunkt.\n\n**R13 – Manglende avskrivning (beholdes 0.70):** Dokumentert i regnskapet. Styrets begrunnelse er angitt, men regnskapsmessig risiko er reell. Bygningsverdi på 58,6 MNOK uten avskrivning er en vesentlig post.\n\n**R14 – Lekkasjesikring (beholdes 0.72):** Dokumentert avvik fra dagens krav. Begrenset evidens om hvilken installasjon dette gjelder og konsekvenser.\n\n**R15 – Styregodkjennelse (justert ned fra 0.70 til 0.65):** Dokumentert, men risikoen er lav i praksis siden styret kun kan nekte ved saklig grunnlag og taushet regnes som godkjenning etter 1 måned. Dette er mer en prosedyremessig formalitet enn en reell risiko.\n\n**Manglende risikoer identifisert:**\n1. Stikkledninger er private og vedlikeholdsansvaret påhviler borettslaget – potensielle kostnader ved rørbrudd.\n2. Ferdigattest/brukstillatelse – spørsmål 22 i egenerklæringen er besvart, men svaret er ikke gjengitt i dokumentchunkene.\n3. Energikarakter B (lys grønn) – relativt god, men fjernvarme som eneste oppvarmingskilde gir avhengighet av ekstern leverandør.\n4. Boligen er i 4. etasje med heis – heisanlegg har vedlikeholdskostnader (kr 23 323 i 2024) og risiko for driftsavbrudd.\n"
}

## Raw Response
```json
{
  "id": "msg_015s1JUXbWv3HsgrPJ4gjPDt",
  "container": null,
  "content": [
    {
      "id": "toolu_01X4UNPM7BAuEy8Qp9dTbBs4",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Skjeggkre påvist i borettslaget – både i fellesareal (bod) og opplyst av selger ved kjøp i 2020. Usikkerhet om omfang og status.",
            "evidence": [
              "Det ble oppgitt ved kjøp i 2020 at det hadde blitt observert skjeggkre i boden i borettslaget. Men at det har blitt gjort tiltak.",
              "Det opplyses at det er observert noen få tilfeller med skjeggkre i bygget, men aldri i den aktuelle boenheten.",
              "Som nevnt tidligere: sett i boden før kjøp i 2020. Usikker på tidshorisont, men ikke sett/hørt om noe siden."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R2",
            "description": "Mus observert i svalgang i 2024 – skadedyrproblem i borettslagets fellesareal er ikke fullstendig løst.",
            "evidence": [
              "Som tidligere nevnt, mus i 2024 i svalgang.",
              "Videre bemerkes musefeller plassert stedvis på utvendig side. Omfanget av skadedyr i bygget er ikke nærmere spesifisert."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R3",
            "description": "Membran og sluk på bad har TG2 – membranen er gammel og kan ikke visuelt kontrolleres, noe som innebærer risiko for lekkasje og følgeskader.",
            "evidence": [
              "Våtrom > 4. etasje > Bad > Sluk, membran og [TG2 – avvik som kan kreve tiltak]",
              "Det er viktig å merke seg at levetiden til membraner/tettsjikt er varierende basert på kvalitet, installasjon og bruk. Eldre membraner kan bli sprø.",
              "Siden membranen ligger skjult under fliser og øvrige overflater, lar tilstanden seg ikke visuelt kontrollere, og vurderingen baseres derfor primært på alder og opplysninger om utførelse."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Rekkverk er like under dagens krav til høyde – utgjør en potensiell sikkerhetsrisiko, særlig for barn.",
            "evidence": [
              "Rekkverk – Deler av rekkverket er like under dagens krav.",
              "Det er ikke krav om utbedring av rekkverkshøyde opp til dagens forskriftskrav. Ingen strakstiltak er nødvendig og avviket utgjør svært liten sikkerhetsrisiko. For å gjenopprette rekkverkshøyde som tilfredsstiller kravet, anbefales det å fjerne tremmer på gulvet."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R5",
            "description": "Lyder fra balkong – friksjonslyd mellom betong og metall som følge av klimatiske forhold. Årsak ikke fullt kartlagt, og styret bør involveres.",
            "evidence": [
              "Flat og skrå takkonstruksjon kan dette stamme fra utvidelser i metallkonstruksjoner som følge av klimatiske forhold, og en plutselig friksjonslyd mellom deler av betong og metall oppstår.",
              "Det anbefales å orientere styret i borettslaget om forholdet tilknyttet lyder fra balkongen, slik at de kan stå i regi for videre kartlegging og eventuelle utbedringer."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R6",
            "description": "Vaskemaskin fyller seg tidvis med vann uten kjent årsak – mulig feil på maskin eller tilknyttet røropplegg.",
            "evidence": [
              "Vaskemaskin på badet fylles tidvis med vann. Vet ikke grunn og har ikke klart å identifisere et mønster på når. Vaskemaskinen var med når jeg kjøpte leiligheten og begynner å bli noen år."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R7",
            "description": "Ingen radonmåling er utført – kjøper har ikke dokumentasjon på radonnivå i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R8",
            "description": "Pågående reguleringsarbeid i nærområdet kan påvirke eiendommens omgivelser og verdi – tre aktive planprosesser berører eiendommen.",
            "evidence": [
              "Det pågår planarbeid i nærområdet som kan få betydning for eiendommen: r20180048: Detaljregulering for Olav Tryggvasons gate.",
              "Planforslag: r20180001 Nordøstre kvadrant i Midtbyen og r20210037 Olav Trygvasons gate 30.",
              "Hensikten med områdereguleringsplanen er å styrke Midtbyen som byens historiske og kommersielle senter."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger innenfor hyblifiseringsbestemmelse – krever særskilt tillatelse for oppdeling eller bruksendring til hybler, noe som begrenser fremtidig bruksfleksibilitet.",
            "evidence": [
              "Eiendommen ligger innenfor virkeområdet for kommunens hyblifiseringsbestemmelse. Dette innebærer at det kreves særskilt tillatelse fra kommunen for å dele opp eller bruksendre en boenhet til hybler."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen er regulert til bevaring av bygninger og ligger i hensynssone for kulturmiljø og kulturminner (Trondheim middelalderby) – dette kan begrense muligheten for bygningsmessige endringer og påføre ekstra kostnader.",
            "evidence": [
              "Eiendommen er regulert til bevaring av bygninger og område for boliger/forretning/kontor etter reguleringsplan r0118ag.",
              "Området er videre omfattet av hensynssoner for bevaring av kulturmiljø og naturmiljø, samt båndlegging etter lov om kulturminner knyttet til Trondheim middelalderby (arkeologi) i kommuneplanens arealdel."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Borettslaget har legalpanterett i andelen for krav på felleskostnader inntil 2G – kjøper overtar denne heftelsen automatisk.",
            "evidence": [
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Planlagt utvendig vedlikehold av nybygget (potensielt malingsarbeid) kan medføre økte felleskostnader i nær fremtid.",
            "evidence": [
              "Oppstart planlegging utvendig vedlikehold nybygget. Potensielt malingsarbeid.",
              "Styret har mål om å holde en rimelig forutsigbar husleie. Nerbyen borettslag har ikke gjeld, og er derfor ikke påvirket av rentenivå. Husleien justeres i all hovedsak som følge av prisvekst og nødvendig vedlikehold."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R13",
            "description": "Bygningene er ikke avskrevet i regnskapet – styret begrunner dette med at tilstrekkelig vedlikehold er gjennomført, men dette innebærer en regnskapsmessig risiko og usikkerhet om faktisk verdiforringelse.",
            "evidence": [
              "Bygningene er ikke avskrevet. Styret har i stedet vurdert at tilstrekkelig vedlikehold er gjennomført, jf. noten om drift og vedlikehold.",
              "Kostpris/bokført verdi bygninger 58 626 498.",
              "Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av bygningene."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R14",
            "description": "Lekkasjesikring på installasjon avviker fra dagens krav, men var i samsvar med regler på installasjonstidspunktet – fremtidig utbedring kan bli nødvendig.",
            "evidence": [
              "Det er blitt utført en lekkasjesikring som utgjør et avvik fra dagens krav, men løsningen var i samsvar med gjeldende regler på installasjonstidspunktet."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Kjøper må godkjennes av borettslagets styre – dette kan forsinke eller i ytterste konsekvens hindre gjennomføring av handelen.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av borettslagets styre. Styret kan kun nekte godkjenning dersom det foreligger saklig grunnlag, jf. borettslagsloven § 4-4.",
              "Dersom styret ikke har sendt svar på skriftlig søknad om godkjenning innen 1 måned etter at søknaden er mottatt, skal brukeren regnes som godkjent."
            ],
            "source_documents": [
              "d189_d189"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          }
        ],
        "re_retrieval_queries": [
          "Hva er omfanget av skjeggkre-tiltak i borettslaget etter 2020, og er det dokumentert at problemet er løst?",
          "Er det utført skadedyrkontroll eller profesjonell bekjempelse av mus i borettslaget etter 2024?",
          "Hva er byggeåret for badet og når ble membranen installert – er det dokumentert utbedring av våtrom?",
          "Hvilke konkrete konsekvenser har reguleringsplan r20180048 og r20210037 for eiendommen Ørjaveita 2?",
          "Er det andre TG2- eller TG3-avvik i tilstandsrapporten som ikke er nevnt i risikolisten?",
          "Hva er status på stikkledninger og privat vedlikeholdsansvar for vann og avløp?",
          "Er det dokumentert ferdigattest eller brukstillatelse for boligen?",
          "Hva er energikarakteren og er det risiko knyttet til fjernvarme-leveransen?"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Skjeggkre (justert ned fra 0.92 til 0.88):** Evidensen er solid og treffsikker. Tre separate kilder bekrefter observasjoner. Imidlertid er siste observasjon fra 2020 og selger opplyser at det ikke er sett noe siden. Tiltak er gjennomført. Risikoen er reell men noe lavere enn 0.92 siden det ikke er nyere observasjoner i selve boenheten.\n\n**R2 – Mus (beholdes 0.90):** Godt dokumentert med observasjon i 2024 og musefeller på utvendig side. Omfang er ikke spesifisert, noe som er en usikkerhetsfaktor. Confidence opprettholdes.\n\n**R3 – Membran/sluk TG2 (justert opp fra 0.93 til 0.95):** Svært godt dokumentert i tilstandsrapporten. Byggeår 2005 betyr membranen er ca. 20 år gammel. Skjult konstruksjon som ikke kan visuelt kontrolleres. Dette er den mest konkrete tekniske risikoen med direkte TG2-klassifisering.\n\n**R4 – Rekkverk (justert ned fra 0.80 til 0.70):** Evidensen bekrefter avviket, men tilstandsrapporten selv nedtoner risikoen kraftig: \"svært liten sikkerhetsrisiko\", ingen strakstiltak nødvendig, og løsningen er enkel (fjerne tremmer). Confidence justeres ned.\n\n**R5 – Lyder fra balkong (beholdes 0.75):** Evidensen støtter risikoen. Årsak er ikke fullt kartlagt og styret anbefales involvert. Usikkerhet om omfang og kostnad ved utbedring.\n\n**R6 – Vaskemaskin (justert ned fra 0.78 til 0.72):** Evidensen er kun selgers egenerklæring. Vaskemaskinen er gammel og medfølger salget. Risikoen er reell men begrenset i omfang – dreier seg primært om en hvitevare, ikke nødvendigvis røropplegg. Noe usikkerhet om dette er en vesentlig risiko.\n\n**R7 – Radon (beholdes 0.72):** Klart dokumentert at måling ikke er utført. Leiligheten er i 4. etasje, noe som normalt reduserer radonrisiko, men dette er ikke eksplisitt nevnt i dokumentene. Confidence opprettholdes.\n\n**R8 – Reguleringsarbeid (beholdes 0.82):** Tre aktive planprosesser er dokumentert. Konsekvensene for eiendommen er ikke fullt spesifisert, men planarbeidet er bekreftet.\n\n**R9 – Hyblifisering (justert opp fra 0.80 til 0.85):** Direkte og entydig dokumentert i salgsoppgaven. Klar begrensning på fremtidig bruksfleksibilitet.\n\n**R10 – Bevaring/kulturminner (justert opp fra 0.85 til 0.90):** Svært godt dokumentert med både reguleringsplan og hensynssoner. Direkte konsekvenser for bygningsmessige endringer er reelle.\n\n**R11 – Legalpanterett 2G (beholdes 0.92):** Direkte sitert fra salgsoppgaven. Standardheftelse i borettslag, men reell risiko for kjøper.\n\n**R12 – Vedlikehold nybygg (beholdes 0.75):** Dokumentert i styrets årsberetning. Usikkerhet om kostnadsnivå og tidspunkt.\n\n**R13 – Manglende avskrivning (beholdes 0.70):** Dokumentert i regnskapet. Styrets begrunnelse er angitt, men regnskapsmessig risiko er reell. Bygningsverdi på 58,6 MNOK uten avskrivning er en vesentlig post.\n\n**R14 – Lekkasjesikring (beholdes 0.72):** Dokumentert avvik fra dagens krav. Begrenset evidens om hvilken installasjon dette gjelder og konsekvenser.\n\n**R15 – Styregodkjennelse (justert ned fra 0.70 til 0.65):** Dokumentert, men risikoen er lav i praksis siden styret kun kan nekte ved saklig grunnlag og taushet regnes som godkjenning etter 1 måned. Dette er mer en prosedyremessig formalitet enn en reell risiko.\n\n**Manglende risikoer identifisert:**\n1. Stikkledninger er private og vedlikeholdsansvaret påhviler borettslaget – potensielle kostnader ved rørbrudd.\n2. Ferdigattest/brukstillatelse – spørsmål 22 i egenerklæringen er besvart, men svaret er ikke gjengitt i dokumentchunkene.\n3. Energikarakter B (lys grønn) – relativt god, men fjernvarme som eneste oppvarmingskilde gir avhengighet av ekstern leverandør.\n4. Boligen er i 4. etasje med heis – heisanlegg har vedlikeholdskostnader (kr 23 323 i 2024) og risiko for driftsavbrudd.\n"
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
    "input_tokens": 21939,
    "output_tokens": 4932,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
