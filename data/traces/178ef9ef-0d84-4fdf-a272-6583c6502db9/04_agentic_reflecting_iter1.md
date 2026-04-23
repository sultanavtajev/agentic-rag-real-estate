# Trace: agentic_reflecting_iter1
- **Run ID:** 178ef9ef-0d84-4fdf-a272-6583c6502db9
- **Tidspunkt:** 2026-03-23T23:19:30.112850+00:00
- **Varighet:** 94.80s
- **Input tokens:** 23491
- **Output tokens:** 5235

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
Risiko 1: Skjeggkre observert i boligen. Selger har bekreftet funn av skjeggkre, som er et insekt som lever innendørs og trives i miljøer med høy fuktighet. Dette kan indikere fuktproblemer og kan være vanskelig å bli kvitt.
  Confidence: 0.95
  Evidens: Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre. Dette insektet lever utelukkende innendørs og trives best i miljøer med høy fuktighet, men har vist seg å klare seg i tørrere omgivelser enn sølvkre. Skjeggkre er funnet i bygninger over hele landet, inkludert mange nyere og moderne.

Risiko 2: Feil etasjeangivelse i tilstandsrapporten. Det er opplyst at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje. Dette er en skrivefeil som kan skape usikkerhet om boligens faktiske beliggenhet og verdi.
  Confidence: 0.9
  Evidens: Vi gjør oppmerksom på en skrivefeil i tilstandsrapporten: Der står det oppført at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje.

Risiko 3: Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av selgers egenerklæringsskjema og tilstandsrapporten at det mangler eller ikke er fremlagt samsvarserklæring for det elektriske anlegget, noe som kan innebære sikkerhetsrisiko og juridiske utfordringer.
  Confidence: 0.95
  Evidens: Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget. Se tilstandsrapport for mer informasjon om det elektriske anlegget.

Risiko 4: Økning i felleskostnader. Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader. Dette medfører økte løpende kostnader for kjøper etter overtakelse.
  Confidence: 0.95
  Evidens: Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader.; Felleskostnadene økte sist med 5% Januar 2026.; Kjenner du til vedtak som kan påvirke felleskostnader? Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader.

Risiko 5: Tidligere vannskade/fuktskade i stuen. Radiatoren i stuen hadde et drypp-problem som forårsaket en vannflekk på gulvet. Selv om dette er utbedret, kan det indikere risiko for skjulte fuktskader.
  Confidence: 0.8
  Evidens: Radiatoren i stuen hadde et lite drypp-problem tidligere i år, men ble fikset gjennom garantien hos Skanska. Rørlegger strammet en skrue, og en liten vannflekk på gulvet etter hendelsen ble pusset bort.

Risiko 6: Manglende radonmåling. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved langvarig eksponering.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 7: Legalpant og prioritetsrisiko. Kommunen har legalpant med høyere prioritet enn tinglyste lån, og sameiet har legalpant på inntil 2G. Dette kan påvirke kjøpers prioritet ved eventuelle betalingsproblemer.
  Confidence: 0.9
  Evidens: Legalpant til kommunen har høyere prioritet enn tinglyste heftelser og rettigheter.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.

Risiko 8: Reguleringsplan med blandede formål i nærområdet. Eiendommen ligger i et område regulert til blant annet bolig, forretning, kontor, barnehage og bevertning. Fremtidig utbygging og næringsvirksomhet i nærområdet kan påvirke bomiljøet negativt.
  Confidence: 0.75
  Evidens: Eiendommen ligger i område regulert etter reguleringsplan S-4420, vedtatt 17.12.2008. Formål: Bolig.; Området reguleres til: byggeområde: bolig, forretning, kontor, offentlig bygning/allmennyttig formål (barnehage), bevertning (felt A og B).

Risiko 9: Støykrav og støyskjermingstiltak i reguleringsplanen. Reguleringsplanen stiller krav til støyskjermingstiltak, noe som indikerer at eiendommen kan være utsatt for støy fra omgivelsene.
  Confidence: 0.7
  Evidens: Utendørs støy skal tilfredsstille Miljøverndepartementets retningslinjer for støy T-1442, tabell 2. Til grunn for avbøtende tiltak i felt A, B og G skal det foreligge en støyfaglig utredning som skal ligge ved søknad om rammetillatelse. Nødvendige støyskjermingstiltak skal være ferdigstilt før det gis midlertidig brukstillatelse.

Risiko 10: Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune. Eiendommen er påheftet en forpliktelse om fremtidig avståelse av veigrunn, noe som kan påvirke eiendommens areal og verdi.
  Confidence: 0.85
  Evidens: Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune.

Risiko 11: Midlertidig dispensasjon for adkomstvei. Joh. H. Andresens vei er godkjent kun inntil videre i sin nåværende bredde, noe som innebærer usikkerhet om fremtidig adkomst til eiendommen.
  Confidence: 0.8
  Evidens: Midlertidig dispensasjon fra bygningsloven: Joh. H. Andresens vei godkjennes inntil videre i sin nåværende bredde.

Risiko 12: Bygningsdeler vurdert med TG2 i tilstandsrapporten. Tilstandsrapporten har avdekket bygningsdeler med tilstandsgrad 2 (TG2), som indikerer vesentlige avvik som kan kreve tiltak og medføre fremtidige kostnader for kjøper.
  Confidence: 0.85
  Evidens: Bygningsdeler vurdert med TG2.; TG2: Avvik som kan kreve tiltak.; Spesielt forhold som er vurdert med TG2 og TG3 bør vurderes nøye, da de indikerer avvik fra normal slitasje og/eller høy alder, noe som kan innebære behov for utbedringer.

Risiko 13: Risiko for skjulte feil og mangler. Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler i boligen, noe som kan medføre uventede kostnader for kjøper.
  Confidence: 0.8
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Det kan være avvik/skader som ikke er avdekket.

Risiko 14: Eiersbegrensning i sameiet. Ingen kan eie mer enn to boligseksjoner i sameiet i henhold til eierseksjonsloven § 23. Dette kan begrense kjøpers muligheter dersom vedkommende allerede eier seksjoner i sameiet.
  Confidence: 0.85
  Evidens: Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med.

Risiko 15: Prisstigning og renteøkning kan øke felleskostnadene ytterligere. Salgsoppgaven advarer eksplisitt om at prisstigning og renteøkning kan medføre ytterligere økning i felleskostnadene utover den allerede varslede økningen.
  Confidence: 0.85
  Evidens: På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet.

Dokumentkontekst:
[d042_d042 | Side [1]]
r ikke har fremlagt som ikke vises i grunnboksutskriften, og har prioritet
energiattest før avtale om salg er inngått, kan kjøper få foran tinglyste lån, for eksempel banklån på seksjonen.
Tinglyste heftelser Diverse
laget en energiattest ved hjelp av ekspert for selgers Legalpant til kommunen har høyere prioritet enn
regning, innen ett år etter at avtale om salg er inngått. Tinglyste heftelser og rettigheter: På eiendommen er det legalpant til sameiet. Det informeres om at ingen kan eie mer enn to
Dette

---

[d042_d042 | Side [1]]
 allmennyttig Det hviler ikke odelsrett på eiendommen.
bygninger med et bruksareal mindre enn 50 m². Det er formål (barnehage) bevertning. Legalpant: Kommunen har legalpant som sikkerhet for
eier som har plikt til å fremlegge energiattest og er betaling av kommunale avgifter og eventuell
Radonmåling
ansvarlig for at opplysningene er korrekte. For mer informasjon om reguleringsforhold, kontakt eiendomsskatt. De øvrige seksjonseierne i sameiet har
megler eller søk på saksnummer, adresse eller gårds‑ og

---

[d042_d042 | Side [1]]
eiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Initialer selger: ATH, ECP 2
50
72205220
:ecnerefer
tnemucoD
51

## Side 27

20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende

---

[d042_d042 | Side [1]]
til sameiet. Det informeres om at ingen kan eie mer enn to
Dette følger av forskrift om energimerking av bygninger tinglyst følgende heftelser og rettigheter som følger boligseksjoner i sameiet, i henhold til eierseksjonsloven §
og tekniske anlegg § 5 (3). eiendommens matrikkel ved overskjøting til ny 23. Seksjoner som eies av nærstående eller gjennom et
Vei, vann og avløp
hjemmelshaver: firma regnes også med.
Energiattesten er basert på nåværende eiers/ Eiendommen er tilknyttet offentlig vann‑

---

[d042_d042 | Side [1]]
dlikehold, kommunale avgifter, renhold fellesarealer,
156 250,00 (Dokumentavgift) felles forsikring, mm.
545,00 (Tinglysingsgebyr ‑ hjemmel)
545,00 (Tinglysningsgebyr ‑ pantedokument) På grunn av prisstigning og renteøkning kan
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ felleskostnadene øke etter at denne salgsoppgaven er
157 340,00 (Omkostninger totalt (uten utarbeidet. Felleskostnadene økte sist med 5% Januar
Boligkjøperforsikring)) 2026.
170 840,00 (Omkostninger totalt

---

[d042_d042 | Side [1]]
eiet har
megler eller søk på saksnummer, adresse eller gårds‑ og legalpant på inntil 2G som sikkerhet for krav knyttet til Selger har ikke utført radonmåling. Det er ikke krav om
Dersom eier ikke har lagt frem energiattest, og eier etter bruksnummer på Plan‑ og bygningsetatens hjemmeside. sameieforholdet, som felleskostnader. Legalpant er pant dette med mindre boligen er helt eller delvis utleid.
skriftlig anmodning fra kjøper ikke har fremlagt som ikke vises i grunnboksutskriften, og har

---

[d042_d042 | Side [1]]
y琀琀else i strid med lov eller avtale kan medføre erstatnings- og stra昀昀eansvar.
Oppdragsnr.: 15467-2940 Befaringsdato: 15.12.2025 Side: 3 av 15
Oppdragsnr.: 15467-2940 Befaringsdato: 15.12.2025 Side: 2 av 15
130 131

## Side 67

Sigurd Hoels vei 9, 0655 OSLO Takstmann Jan Berby MNTF Sigurd Hoels vei 9, 0655 OSLO Takstmann Jan Berby MNTF
Gnr 129 - Bnr 100 Pb. 80 Tåsen Gnr 129 - Bnr 100 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
Beskrivelse av eiendommen
De琀琀e trenger du å vite om

---

[d042_d042 | Side [1]]
ing, sikkerhet, for eksempel UTTRYKK OG DEFINISJONER eiendommens verdi.
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rom som ligger utenfor boenheten, men som eier har påvist og/eller
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er • Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller opplyst at 琀椀lhører boenheten, er oppmålt og

---

[d042_d042 | Side [1]]
 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
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

[d042_d042 | Side [1]]
il sin
familiemedlemmer, ønsket innetemperatur, egne avtaler veg vedlikeholdsansvaret for disse påhviler sameiet. sameiebrøk. Ved manglende betaling av fellesutgifter har
om energiforsyning med mer. Megler påtar seg ikke Midlertidig dispensasjon fra bygningsloven Adkomst til eiendommen skjer via offentlig vei. sameiet legal panterett i den enkelte eierseksjon,
ansvar for informasjonen som fremgår av energiattesten. Joh. H. Andresens vei godkjennes inntil videre i sin begrenset til inntil 2 ganger

---

[d042_d042 | Side [1]]
ntar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
fuktighet, men har vist seg å klare seg i tørrere til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
omgivelser enn sølvkre. Skjeggkre er funnet i bygninger følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
over hele landet, inkludert mange nyere og moderne Fastmonterte eller spesialtilpassede installasjoner og bruk, vil

---

[d042_d042 | Side [1]]
bart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
Jan Berby
© iVerdi 2023 © Norsk takst 2023
Uavhengig Taks琀椀ngeniør
jan@takstpartner.no Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av medlemsforetakene i Norsk takst og
av taks琀椀ngeniører som er ser琀椀昀椀sert i

---

[d042_d042 | Side [1]]
 
 Alternativt kanboligeier

---

[d042_d042 | Side [1]]
ulering
Opprettet seksjoner: om konsesjonsfrihet.
Regulerings og arealplaner: Eiendommen ligger i område Snr: 167
Info energiklasse
regulert etter reguleringsplan S‑4420, vedtatt 17.12.2008. Formål: Bolig
Odel
Alle eiendommer som selges eller leies ut skal ha en Eiendommen ligger i felt A, regulert til byggeområde for Sameiebrøk: 57/ 17479
energiattest. Unntak gjelder blant annet for frittstående boliger, forretning, kontor, offentlig bygning/ allmennyttig Det hviler ikke odelsrett på eiendommen.
bygninger

---

[d042_d042 | Side [1]]



Dine fordeler 
− Unngå bekymring og stress 
− Spar verdifull tid
− Få advokatkostnadene dekket

---

[d042_d042 | Side [1]]
dene økes med 5 % fra 1. januar 2026 på Vi gjør oppmerksom på en skrivefeil i tilstandsrapporten: Balkongdør med bakgården er ikke tillatt. Det må ikke legges ut mat til
grunn av økte driftskostnader. Der står det oppført at leiligheten ligger i 3. etasje, men treramme og 2‑lags isolerglass fugler og dyr.
korrekt etasjeplan er 2. etasje.
Er det andre forhold av betydning ved eiendommen som Balkong: Se særlig om vedtekter og husordensregler knyttet til
kan være relevant for kjøper å vite om? Beskrivelsen av

---

[d042_d042 | Side [1]]
ttet til
kan være relevant for kjøper å vite om? Beskrivelsen av boligen nedenfor er hentet direkte fra Adkomst til sydvestvendt balkong på 10m² fra stue husdyrhold, dugnader, trappevask o.l.
Radiatoren i stuen hadde et lite drypp‑problem tidligere i tilstandsrapporten:
år, men ble fikset gjennom garantien hos Skanska. Forkjøpsrett: Det praktiseres ikke forkjøpsrett i sameiet.
Øvrig
Rørlegger strammet en skrue, og en liten vannflekk på Bygningsdeler vurdert med TG2:
gulvet etter hendelsen ble pusset bort.

---

[d042_d042 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d042_d042 | Side [1]]
vei godkjennes inntil videre i sin begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Se fullstendig energiattest fra selger som vedlegg til nåværende bredde.
Utleie
salgsoppgave. Megler påtar seg ikke ansvar for Plikt til fremtidig vederlagsfri avståelse av veigrunn til Kjøper og selger er forpliktet til å signere den standard
informasjonen som fremgår av energiattesten. Oslo kommune. Adgang til utleie: Boligen kan leies ut i samsvar med kjøpekontrakten utarbeidet av Emera som en del av
Overført fra:

---

[d042_d042 | Side [1]]
nvendelse
Selger har observert skjeggkre i boligen. Skjeggkre er et oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
insekt i samme familie som sølvkre. Dette insektet lever Regelverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
utelukkende innendørs og trives best i miljøer med høy Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige

---

[d042_d042 | Side [1]]
es sammen med • Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 og
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS bygningsdelens alder. 2023) og veiledningen 琀椀l disse.
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak. I
denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2 som
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av et
krever 琀椀ltak og de som ikke krever umiddelbare 琀椀ltak.
byggverk fortsa琀琀 vil være

---

[d042_d042 | Side [1]]
O 0801 OSLO
Beskrivelse av eiendommen
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Boligblokken er oppført i 2018 e琀琀er gjeldende byggeskikk og
forskri昀琀er, TEK 10. Over昀氀ater og våtrom er vurdert mot hva som
Tilstanden vurderes med ulike 琀椀lstandsgrader
må forventes av standard som følge av bygningens alder.
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1 Tilstandsanalysen har ikke avdekket noen tydelige

---

[d042_d042 | Side [1]]
e som ikke krever umiddelbare 琀椀ltak.
byggverk fortsa琀琀 vil være tjenlig for si琀琀 formål (NS3600, Termer og
TILLEGGSUNDERSØKELSER de昀椀nisjoner punkt 3.9)
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
PERSONVERN
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
overvåke spesielt på grunn av fare for større

---

[d042_d042 | Side [1]]
kke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler. Arealer
Gå 琀椀l side
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Forutsetninger og vedlegg Gå 琀椀l side
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes Lovlighet Gå 琀椀l side
når delen

---

[d042_d042 | Side [1]]
frem琀椀d. Graden skal også brukes Lovlighet Gå 琀椀l side
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Eiet seksjon i boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
stemmer med dagens bruk
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med

---

[d042_d042 | Side [1]]
琀椀l også å omfa琀琀e
overvåke spesielt på grunn av fare for større skade eller følgeskade. For 琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en. iVerdi AS, bygningssakkyndig og taks琀昀oretaket behandler person-
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2. opplysninger som bygningssakkyndig trenger for å kunne utarbeide
For synlige konstruksjoner kan alder sammen med andre symptomer og rapporten. Personvernerklæring med informasjon om bruk av
momenter gi TG2. Avvik under

---

[d042_d042 | Side [1]]
rklæring med informasjon om bruk av
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. BEFARINGEN AREALBEREGNING FOR BOENHETER personopplysninger og dine re琀紀gheter 昀椀nner du her Personvernerklæring
Rapporten gir en vurdering av byggverk og bygningsdeler som - iVerdi
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
forhold som man må regne med trenger utbedring straks eller innen kort avhendingsloven.

---

[d042_d042 | Side [1]]

gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
Rapportansvarlig 琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner •

---

[d042_d042 | Side [1]]
installasjoner i boligen dersom det er mer enn fem år siden sist risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede -ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere kjellervegger og eventuelt i oppforede kjellergulv. teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
nødvendig. TG1 kan gis når bygningsdelen

---

[d042_d042 | Side [1]]
d salget er det blitt utført en støpt betong. Støpt kjellergulv. Prefabrikkerte Tiedemannsbyen Utsiktskvartalet sameie er registrert i vedlikeholdsfond som er plassert i fond for å møte
tilstandsrapport av en bygningssakkyndig, som gir en betongelementer i Foretaksregisteret med organisasjonsnummer 820 721 fremtidige behov.
teknisk gjennomgang av boligen og påpeker eventuelle etasjeskillere. Stål og betongkonstruksjoner i bærende 802. Sameiet består av totalt 254 seksjoner, fordelt på:
avvik. Rapporten,

---

[d042_d042 | Side [1]]
 琀椀l bygningens
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom • Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, forvaltning, dri昀琀 eller vedlikehold.
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje) sopp og skadedyr.
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller

---

[d042_d042 | Side [1]]
gning av samme alder
bidrar i næringspoli琀椀sk sammenheng, og har vært en pådriver for å sikre at lover og regler gir trygghet for forbrukerne og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
i boligomsetningen. boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
TAKSTPARTNER TÅSEN
Hva inneholder 琀椀lstandsrapporten?
Takstpartner Tåsen er et kontorfellesskap for

---

[d042_d042 | Side [1]]
ilstandsgrad 1 Tilstandsanalysen har ikke avdekket noen tydelige symptomer på
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har svikt og avvik fra normal standard. Det er gjennomgående
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel registrert TG1.
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og

---

[d042_d042 | Side [1]]
e med trenger utbedring straks eller innen kort avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan • Areal fastse琀琀es e琀琀er Forskri昀琀 琀椀l avhendingsloven og Norsk Standard
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk 3940 Areal- og volum-beregninger av bygninger fra 2023.
sjablongmessig anslag. 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3, DELING AV PERSONOPPLYSNINGER

---

[d042_d042 | Side [1]]
n
Tiltaket er prosjektert i henhold 琀椀l Byggteknisk forskri昀琀 av 2010
(TEK10) ifølge ramme琀椀llatelse gi琀琀 10/12-2012.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Sigurd Hoels vei 9, 0655 OSLO Takstmann Jan Berby MNTF Sigurd Hoels vei 9, 0655 OSLO Takstmann Jan Berby MNTF
Gnr 129 - Bnr 100 Pb. 80 Tåsen Gnr 129 - Bnr 100 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
Sammendrag av boligens 琀椀lstand
Tilstandsrapport
Fordeling av 琀椀lstandsgrader
EIET

---

[d042_d042 | Side [1]]
ruksjoner i bærende konstruksjoner, u琀昀yllende
TG1: Mindre eller moderate avvik fasader i bindingsverk utvendig forblendet med spekkmurt teglstein og
TG2: Avvik som kan kreve 琀椀ltak trepanel. VÅTROM
Fla琀琀 tak i betongkonstruksjon, tekket med folie og innvendig nedløp.
TG3: Store eller alvorlige avvik
Støpte trapper belagt med vinylbelegg og malte murvegger mellom 3.ETASJE > BAD/VASKEROM
TG IU: Konstruksjoner som ikke er undersøkt etasjene. Flislagt inngangspar琀椀.
Eiendommen har personheis med adkomst

---

[d042_d042 | Side [1]]
mmunen for den aktuelle
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov bruken, uten at de琀琀e vil få betydning for valg av arealkategori.
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser. • Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen med • Se øvrig informasjon om areal i rapporten, Norsk

---

[d042_d042 | Side [1]]
, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk Eiet seksjon i boligbygg med 昀氀ere boenheter - Byggeår:
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova. 2018
VÅTROM Gå 琀椀l side
Baderom er et prefabrikkert baderom med 昀氀islagte over昀氀ater og
montert som et ferdig rom under oppførelse av eiendommen.
TILSTANDSGRAD 0,

---

[d042_d042 | Side [1]]
sgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
Det kan være avvik/skader som ikke er avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller
uregelmessigheter, samt foreslå琀琀e 琀椀ltak. Disse

---

[d042_d042 | Side [1]]


Vedlegg 1 14 av 25 Årsrapport 2024 med regnskap.pdf Vedlegg 1 15 av 25 Årsrapport 2024 med regnskap.pdf
112 113

## Side 58

TIEDEMANNSBYEN UTSIKTSKVARTALET SAMEIE TIEDEMANNSBYEN UTSIKTSKVARTALET SAMEIE
ORG.NR. 820 721 802, KUNDENR. 7863 ORG.NR. 820 721 802, KUNDENR. 7863
RESULTATREGNSKAP BALANSE
Note Regnskap Regnskap Budsjett Budsjett Note 2024 2023
2024 2023 2024 2025 EIENDELER
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 10 757 905 9 654 785 10 141 000 10 499 000

---

[d042_d042 | Side [1]]
yste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
Beskrivelse Felleskostnader økes med 5% fra 1 januar 2026 pga økte driftskostnader
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet

---

[d042_d042 | Side [1]]
øppelanlegg -5 168
NOTE: 2
Egenandel forsikring -6 000
INNKREVDE FELLESKOSTNADER
SUM DRIFT OG VEDLIKEHOLD -2 113 801
Felleskostnader bolig 8 619 984
Garasje 679 508
NOTE: 9
Bredbånd 629 508
KOMMUNALE AVGIFTER
Vedlikeholdsfond 612 912
Vann- og avløpsavgift -1 816 603
Felleskostnader næring 210 828
Renovasjonsavgift -967 538
Felleskostnader bolig tidligere år 5 165
SUM KOMMUNALE AVGIFTER -2 784 140
SUM INNKREVDE FELLESKOSTNADER 10 757 905
NOTE: 10
NOTE: 3
ENERGI/FYRING
ANDRE INNTEKTER
Elektrisk energi -575

---

[d042_d042 | Side [1]]
vannmåler på hovedinntaket som et ledd i å senke kostnadene. 
 
 Styret beregner at forbedringene i eksisterende driftsavtaler og installasjon av vannmåler vil gi årlige
 besparelser på over 1 000 000 kr for sameiet.
 
 Informasjon og samhandling med

---

[d042_d042 | Side [1]]
vde felleskostnader 2 10 757 905 9 654 785 10 141 000 10 499 000 ANLEGGSMIDLER
Ladeinntekter EL-bil 178 194 117 351 0 0 Andre varige driftsmidler 14 8 718 13 948
Andre inntekter 3 9 196 229 260 0 0 SUM ANLEGGSMIDLER 8 718 13 948
SUM DRIFTSINNTEKTER 10 945 296 10 001 396 10 141 000 10 499 000
OMLØPSMIDLER
DRIFTSKOSTNADER: Restanser felleskostnader 0 137 328
Personalkostnader 4 -66 411 -63 450 -66 270 -68 385 Restanser felleskostnader/kundefordringer 30 054 -111 488
Styrehonorar 5 -471 000 -450 000 -471 000

---

[d042_d042 | Side [1]]
ringer 30 054 -111 488
Styrehonorar 5 -471 000 -450 000 -471 000 -488 000 Forskuddsbetalte kostnader 10 465 4 125
Avskrivninger -5 230 -1 743 0 0 Andre kortsiktige fordringer 0 210
Revisjonshonorar 6 -18 125 -21 625 -15 500 -16 120 Energiavregning 15 142 165 130 869
Forretningsførerhonorar -341 265 -324 538 -334 000 -350 700 Driftskonto OBOS-banken 2 513 215 1 060 853
Konsulenthonorar 7 -53 563 -274 540 -80 000 -80 000 Sparekonto OBOS-banken 2 399 319 2 868 208
Drift og vedlikehold 8 -2 113 801 -2 479 712

---

[d042_d042 | Side [1]]
ert på nåværende eiers/ Eiendommen er tilknyttet offentlig vann‑ og
husstandens forbruk og utgifter de siste årene. Forbruket 301/ 129/ 100/ 167: avløpssystem. Stikkledningene fra eiendommen og ut til I henhold til eierseksjonsloven § 31 er sameierne
kan variere avhengig av faktorer som antall 27.08.2012 ‑ Dokumentnr: 693079 ‑ Bestemmelse om det kommunale nettet er private, og ansvarlige overfor sameiets kreditorer i forhold til sin
familiemedlemmer, ønsket innetemperatur, egne avtaler veg

---

[d042_d042 | Side [1]]
roner.
egenerklæringsskjema / tilstandsrapporten at det Emma Che Pham og An Thien Huynh
mangler/ ikke er fremlagt samsvarserklæring for det Øvrige kontrollpunkter er vurdert til TG1/ 0 Sameiet er gjeldsfritt og har ingen lån. Det er lagt stor
Sameie
elektriske anlegget. Se tilstandsrapport for mer vekt på proaktiv forvaltning og kostnadsbesparende
informasjon om det elektriske anlegget. Byggemåte: Tiedemannsbyen Utsiktskvartalet Sameie tiltak; blant annet har reforhandling av driftsavtaler og
Boligblokk

---

[d042_d042 | Side [1]]
keplaten fungerer konstruksjoner våtrom i Oslo kommune. overført til sameiets egenkapital for å styrke den
utenom dette som normalt. Hulltaking er ikke foretatt da dette er en prefabrikkert økonomiske ryggraden. Per utgangen av 2024 hadde
baderomskabin og kan unnlates i henhold til §2‑2, i sameiet en solid arbeidskapital på nær 4,4 millioner
Selger
Samsvarserklæring: Det fremgår av selgers Forskrift til avhendingslova (tryggere bolighandel). kroner.
egenerklæringsskjema / tilstandsrapporten at det Emma Che

---

[d042_d042 | Side [1]]
‑ pr. mnd
Prisantydning
Kr 6 250 000 Felleskostnader inkulderer: Felleskostnadene inkluderer
og fordeles på følgende måte:
Omkostninger kjøpers beløp
Akonto energi bolig (kr. 562,‑), vedlikeholdsfond (kr.
6 250 000,00 (Prisantydning) 285,‑), felleskostnad bolig (kr. 2 820,30,‑) og bredbånd
(kr. 199,‑).
Omkostninger
I posten felleskostnader ligger foretningsførsel, felles drift
13 500,00 (Boligkjøperforsikring* (valgfritt)) og vedlikehold, kommunale avgifter, renhold fellesarealer,
156 250,00

---

[d042_d042 | Side [1]]
NNTEKTER
Container -34 984 Forskuddsinnbetalinger (a konto) -509 778
Skadedyrarbeid/soppkontroll -1 625 SUM INNTEKTER -509 778
Annen leiekostnad -119 076
Annet driftsmateriale -14 311 KOSTNADER
Vaktmestertjenester -382 500 Techem 88 348
Vakthold -237 455 Fjernvarme 563 595
Renhold ved firmaer -409 070 SUM KOSTNADER 651 943
Snørydding -94 953
Andre fremmede tjenester -99 630 SUM ENERGIAVREGNING 142 165
Trykksaker -712
Andre kostnader tillitsvalgte -7 145
Oppstillingen ovenfor viser hvilke energikostnader

---

[d042_d042 | Side [1]]
valgte -7 145
Oppstillingen ovenfor viser hvilke energikostnader som avregnes etter hver enkelts forbruk.
Andre kontorkostnader 8
For å dekke de løpende kostnadene, krever selskapet inn et forskuddsbeløp fra hver enkelt.
Telefon u/mva -9 775
På fastsatte frister, blir deretter inntektene avregnet mot kostnadene. For lite innbetalt blir
Porto -75
krevd inn, og for mye innbetalt blir tilbakebetalt. På den måten betaler hver enkelt kun for
Kontingenter -4 925
sitt eget forbruk.
Bank- og kortgebyr -3

---

[d042_d042 | Side [1]]
OMMEN
mars 2025. Arbeidet ble utført av faglærte. innebære behov for utbedringer. Bygningsdeler som er Husdyr: Beboere kan holde dyr dersom gode grunner
merket med TGIU er ikke blitt vurdert av takstmannen. Dører: taler for det, og at dyreholdet ikke er til ulempe for de
Kjenner du til vedtak som kan påvirke felleskostnader? Entredør i Brannklasse El‑30 og Lydklasse dB40. øvrige brukere av eiendommen. Lufting av husdyr i
Felleskostnadene økes med 5 % fra 1. januar 2026 på Vi gjør oppmerksom på en

---

[d042_d042 | Side [1]]

SUM ANNEN KORTSIKTIG GJELD -4 381
Renter av for sent innbetalte felleskostnader 1 792
Andre renteinntekter 76
SUM FINANSINNTEKTER 97 746
NOTE: 17
EGENKAPITAL
NOTE: 13
INTERN FORDELING AV EGENKAPITAL
FINANSKOSTNADER
2024 Endring 2023
Renter på leverandørgjeld -237
Andel bolig 4 076 802 1 091 232 2 985 570
SUM FINANSKOSTNADER -237
Andel garasje 173 119 48 801 124 318
Andel næring 155 514 58 166 97 348
NOTE: 14
SUM EGENKAPITAL 4 405 435 1 198 199 3 207 236
VARIGE DRIFTSMIDLER
Dette er en internfordeling av

---

[d042_d042 | Side [1]]
 449 989 -1 399 066 -1 442 306
SUM DRIFTSKOSTNADER -9 844 606 -9 671 381 -9 712 836 -10 431 499
EGENKAPITAL
Opptjent egenkapital 17 4 405 435 3 207 236
DRIFTSRESULTAT 1 100 690 330 015 428 164 67 501
SUM EGENKAPITAL 4 405 435 3 207 236
FINANSINNTEKTER/-KOSTNADER:
GJELD
Finansinntekter 12 97 746 76 731 0 0
Finanskostnader 13 -237 -1 630 0 0
KORTSIKTIG GJELD
RES. FINANSINNT./-KOSTNADER 97 509 75 101 0 0
Forskuddsbetalte felleskostnader 211 559 137 328
Leverandørgjeld 482 560 759 489
ÅRSRESULTAT 1 198 199 405

---

[d042_d042 | Side [1]]
iktig til å ha tjenestepensjonsordning etter lov om obligatorisk tjenestepensjon.
Arbeidsgiveravgiften knytter seg til styrehonoraret.
VVeeddlleegggg 11 198 aavv 2215 ÅÅrsrsrarepgpnosrkt a2p0 2204 2m4e (do prepgdnastkeartp)..ppddff VVeeddlleegggg 11 1190 aavv 2251 ÅÅrsrsrarepgpnosrkt a2p0 2204 2m4e (do prepgdnastkeartp)..ppddff
116 117

## Side 60

NOTE: 11 NOTE: 15
ANDRE DRIFTSKOSTNADER ENERGIAVREGNING
Lokalleie -6 000 INNTEKTER
Container -34 984 Forskuddsinnbetalinger (a konto) -509

---

[d042_d042 | Side [1]]
en fastsatt verdi. Informasjonen
Boligkjøperforsikring)) over er hentet fra eiendomsskattelistene.
http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
Fellesgjeld
Lånebetingelser fellesgjeld: Ingen lån registrert for
leiligheten.
Eierskiftegebyr
Kr 6725
Andre kostnader:
TV/ Internett/ Bredbånd: Grunnpakke bredbånd er
Estimert totalpris ink. omk
inkludert i de månedlige felleskostnadene.
Kr 6 420 840
35

##

---

[d042_d042 | Side [1]]
ringstidspunktet. Andre varige driftsmidler SUM KONSULENTHONORAR -53 563
balanseføres og avskrives lineært over driftsmidlenes økonomiske levetid.
NOTE: 8
FORDRINGER DRIFT OG VEDLIKEHOLD
Kundefordringer og andre fordringer er oppført i balansen til pålydende etter fradrag for Drift/vedlikehold bygninger -439 450
avsetning til forventet tap. Avsetning til tap gjøres på grunnlag av individuelle vurderinger Drift/vedlikehold VVS -292 740
Drift/vedlikehold elektro -110 974
av de enkelte

---

[d042_d042 | Side [1]]
ld VVS -292 740
Drift/vedlikehold elektro -110 974
av de enkelte fordringene.
Drift/vedlikehold utvendig anlegg -130 552
Drift/vedlikehold heisanlegg -310 380
SKATTETREKKSKONTO
Drift/vedlikehold brannsikring -474 557
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
Drift/vedlikehold ventilasjonsanlegg -174 076
myndighetene og kan ikke disponeres fritt.
Drift/vedlikehold garasjeanlegg -169 904
Drift/vedlikehold søppelanlegg -5 168
NOTE: 2
Egenandel forsikring -6 000
INNKREVDE

---

[d042_d042 | Side [1]]
ss.
utgjøre maksimum 15 % av takflaten på det enkelte bygg.
3.10 Forurensning
3.3 Avkjørsler Utendørs støy skal tilfredsstille Miljøverndepartementets retningslinjer for støy T-1442, tabell 2, eller senere
Inntil tre avkjørsler kan etableres fra Joh. H. Andersens vei på strekningen tilliggende felt A og B. I tillegg tillates vedtatte retningslinjer som erstatter disse. Til grunn for avbøtende tiltak i felt A, B og G skal det foreligge en
S-4420.doc Side 2 av 6 S-4420.doc Side 3 av 6
58 59

## Side

---

[d042_d042 | Side [1]]
 en
S-4420.doc Side 2 av 6 S-4420.doc Side 3 av 6
58 59

## Side 31

S-4420 S-4420
støyfaglig utredning som skal ligge ved søknad om rammetillatelse. Nødvendige støyskjermingstiltak skal være § 9. Felt F: Byggeområde for boliger.
ferdigstilt før det gis midlertidig brukstillatelse. Maksimalt bruksareal er BRA = 12 200 m2. For bebyggelse som ligger innenfor området merket ”redusert
toppetasje” er maksimal bygningsdybde 12 meter. Maksimal dybde med balkonger og karnapper kan tillates
§ 4. Felt A: Byggeområde

---

[d042_d042 | Side [1]]
rådet ikke er tilstrekkelig for å dekke behovet i området.
§ 15. Fellesområder, felles avkjørsler (Felt FA1 og FA3) og annet fellesareal (FA2)
Utforming skal fremgå av en byggeplan som innsendes sammen med rammesøknaden.
Felles avkjørsel, felt FA1, skal være felles for gnr/bnr 128/31, 128/32 og 128/33 (felt B) og senere utskilte
parseller av disse. Annet fellesareal, felt FA2, skal være felles for felt G og H. FA2 skal opparbeides som
kjørbar gangvei for nødvendig tilbringertransport. Felles avkjørsel,

---

[d042_d042 | Side [1]]
ære sikret opparbeidet eller
opparbeidet i henhold til gjeldende regulering og regulert Tiedemannspark:
• Vestre parkdrag (felt FR1, 2 og 3), med tillegg av del av Vestre parkdrag regulert i reguleringsplan for
Gladengveien 10 med flere.
• Tiedemannsparken.
• Vestre bekkedrag sør med Hovinbekken (felt FR6), med tillegg av del av Vestre bekkedrag i
forlengelsen av FR6 til turvei D2.
• Resterende del av Petersborgparken (felt FR4).
• Bertrand Narvesens vei innenfor planområdet.
16.6 Oppgradering av turvei

---

[d042_d042 | Side [1]]
s med prioritering av myke trafikanter, men slik at det samtidig er
snumulighet for bil og liten lastebil. Bygningsmyndighetene kan tillate midlertidige snuplasser for å legge til
§ 7. Felt D: Byggeområde for boliger, forretning, kontor, bevertning. rette for trinnvis utbygging av atkomstveier.
Maksimalt bruksareal er BRA = 19 150 m2. For bebyggelse som er orientert langs felt GT1 og GT2 og for
bebyggelse som ligger innenfor området merket ”redusert toppetasje” er maksimal bygningsdybde 12 meter. § 13.

---

[d042_d042 | Side [1]]
å minimum 5 meter. § 12. Offentlige trafikkområder: vei, fortau, plass, gatetun, annet veiareal, sykkelfelt
Det tillates overvannsrenner innenfor offentlig gategrunn, fortrinnsvis på regulert fortau og plass. Det tillates
§ 6. Felt C: Byggeområde for boliger, forretning, kontor, bevertning. besøksparkering og parkering for bevegelseshemmede. Byggeplan for offentlige trafikkområder skal
Maksimalt bruksareal er BRA = 18 350 m2. Det skal være minimum 18 meters avstand mellom lamellene mot forelegges

---

[d042_d042 | Side [1]]
 Ved etappevis utbygging skal
- spesialområde: bevaring (kontor, bevertning, offentlig bygning/allmennyttig formål (kultur, barnehage)) utomhusplan ved rammesøknad også vise midlertidig utforming av tilliggende offentlige arealer. Sammen med
(felt SB) utomhusplanen skal det gjøres rede for hvordan utearealene forholder seg til de offentlig regulerte arealene.
- fellesområde: felles avkjørsel (FA1 og FA3), annet fellesareal (kjørbar gangvei) (FA2) Det skal utarbeides takplan som viser takterrasser,

---

[d042_d042 | Side [1]]
med moderne infrastruktur, parker, skoler og Torg, som byr på et rikt utvalg av restauranter og lekeapparater, bekk, vannspeil, gangbru, beplantning og BRA ‑ i: 57 m²
barnehager, noe som gjør fremtidsutsiktene her svært kulturtilbud. Dette er en unik mulighet til å sikre seg en bålplass. Området godt skjermet fra biltrafikk. BRA ‑ e: 5 m²
lyse. Som en spennende del av nabolagets videre bolig i et grønt og trygt kvartal med alt storbyen har å by BRA totalt: 62 m²
utvikling er det planlagt at NRK skal flytte

---

[d042_d042 | Side [1]]
 området merket av et friområde. Friområde FR1, FR2, FR3, FR5 og FR6 skal være utformet med atkomst for brannbil.
”redusert toppetasje” skal bebyggelse som har gulvplan over kote + 85,0 ha redusert toppetasje. Toppetasjens Friområde FR1, FR2 og FR3 er del av ”Vestre parkdrag” som skal opparbeides som en naturpark med
BRA skal da være maksimalt 50 % av underliggende etasjes BRA. Boenheter i første etasje i området merket betydelig vegetasjon og mulighet for lek og opphold. Eksisterende vegetasjon skal i

---

[d042_d042 | Side [1]]
plan for Stålverksparken. I tilknytning til Hovinbekken skal det etableres
sørvest (Felt GT3) og boligenes gårdsrom og et portrom mellom offentlig trafikkområde (snuplass) og Vestre ”vannarrangement” som skal framstå som et attraktivt og estetisk parkelement.
parkdrag i øst. Portrom og passasje skal hver ha en bredde på minimum 5 meter og en høyde på minimum 5
meter. § 14. Spesialområde: bevaring (kontor, bevertning, offentlig bygning/allmennyttig formål (kultur og barnehage))
(felt SB)
S-4420.doc Side 4

---

[d042_d042 | Side [1]]
ng/allmennyttig formål toppetasje. Toppetasjens BRA skal da være maksimalt 50 % av underliggende etasjes BRA. Boenheter i første
barnehage. Det skal være minimum 18 meters avstand mellom lamellene mot Vestre parkdrag, regnet fra etasje i området merket ”redusert toppetasje” skal være gjennomgående eller gå over to plan.
dominerende fasadeliv. Dominerende fasadeliv er fasadelivet som den største del av fasaden har. Barnehage Det skal etableres et portrom mellom boligenes gårdsrom og offentlig trafikkområde

---

[d042_d042 | Side [1]]
omsikring. Det tillates en underjordisk atkomsttunnel under felt FR6 (mellom
felt G og felt FA3/eiendommen Gladengenveien 12, gnr. 129, bnr. 32). ”Stålverksparken” (Friområde FR7)
§ 8. Felt E: Byggeområde for boliger. skal opparbeides parkmessig med Hovinbekken som et viktig miljøskapende element. Hovinbekkens trasé
Maksimalt bruksareal er BRA = 16 100 m2. Det skal etableres et portrom eller en passasje mellom gatetun i skal fastsettes i byggeplan for Stålverksparken. I tilknytning til Hovinbekken skal det

---

[d042_d042 | Side [1]]
ngvei) (FA2) Det skal utarbeides takplan som viser takterrasser, takoppbygg og atkomster til tak, samt kotehøyder.
§ 3. Fellesbestemmelser 3.6 Overvannshåndtering
3.1 Grad av utnytting og fordeling av formål Lokal overvannshåndtering skal legges til grunn ved detaljutforming av tiltaket. Åpne overvannsløsninger skal
Maksimalt bruksareal (BRA) for hele planområdet er BRA = 133 150 m2 og er nærmere angitt i bestemmelser benyttes for å heve områdets miljøkvalitet. Ved søknad om rammetillatelse skal det

---

[d042_d042 | Side [1]]
 rygging inn fra eller ut på offentlig vei.
§ 1. Avgrensning
Det regulerte området er vist på plankart merket OP3-200601213 og datert 02.02.2007, revidert 3.4 Parkering
01.04.2008. Parkering i byggeområdene skal være i henhold til den til enhver tid gjeldende parkeringsnorm for Oslo
kommune. I felt GT1, GT2 og GT3 tillates til sammen inntil 15 plasser på terreng. I felt B, mot Ensjøveien,
§ 2. Formål tillates inntil 15 plasser på terreng. For øvrig skal all parkering på byggeområdene anordnes under

---

[d042_d042 | Side [1]]
ggende på Ensjø/Tiedmannsbyen som ligger i et område med Kampen, Ensjø, Lille Tøyen Hageby og Hasle i
nærområdet. Området er i stor utvikling. Kort vei 琀椀l o昀昀entlige kommunikasjonsmidler, skoler og forretninger.
For gyldighet på rapporten se forside
Adkomstvei
O昀昀entlig. Private interne småveier mellom bebyggelse.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Om tomten
Pent opparbeidet fellesarealer med gressplener,

---

[d042_d042 | Side [1]]
 Narvesens vei innenfor planområdet.
16.6 Oppgradering av turvei D2
Før det gis igangsettingstillatelse for felt A, B, C, D, E, F og G skal oppgradering av turvei D2 være sikret
opparbeidet eller opparbeidet.
16.7 Trinnvis utbygging
Ved trinnvis utbygging av et enkelt felt skal det redegjøres for hvordan tilfredsstillende atkomst, uteareal og
parkering er ivaretatt for både ny bebyggelse og næringsbebyggelse som opprettholdes på feltet.
S-4420.doc Side 6 av 6
62 63

## Side 33

Energiattest
Adresse
Sigurd

---

[d042_d042 | Side [1]]
per skal ha et begrenset disse bygningene skal det i byggesakene spesielt redegjøres for hvordan variasjon og arkitektonisk kvalitet er i
omfang og utgjøre maksimalt 20 % av fasaden. Innenfor området merket ”redusert toppetasje” skal varetatt i utformingen.
bygningsvolumene ha minimum 12 meters avstand, regnet fra dominerende fasadeliv. Innenfor området merket
”redusert toppetasje” skal bebyggelse som har gulvplan over kote + 83,0 ha redusert toppetasje. Toppetasjens § 11. Felt H: Byggeområde for offentlig

---

[d042_d042 | Side [1]]
ng. For øvrig skal all parkering på byggeområdene anordnes under bebyggelse
Området reguleres til: eller terreng. Hvis parkering plasseres i sokkeletasjer skal parkering ikke eksponeres i fasader. Minimum 5 % av
- byggeområde: bolig, forretning, kontor, offentlig bygning/allmennyttig formål(barnehage), bevertning alle parkeringsplassene skal være utformet for og kunne reserveres for bevegelseshemmede.
(felt A og B)
- byggeområde: bolig, forretning, kontor, bevertning (felt C og D) 3.5 Utomhusplan/takplan
-

---

[d042_d042 | Side [1]]
dregnes. Dersom
eller delvis under terreng skal ikke medregnes i BRA. utearealet etableres på dekke skal det sikres tilfredsstillende overdekning slik at området kan beplantes med
trær og annen vegetasjon. Innenfor hvert felt skal det etableres lekeareal for barn.
Innenfor felt B kan det til sammen være inntil 1 900 m2 BRA næring og av dette inntil 150 m2 BRA forretning og Uteoppholdsarealer som ligger innenfor regulerte byggeområder for boliger og som hører til det enkelte
100 m2 BRA bevertning. Innenfor

---

[d042_d042 | Side [1]]
parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med

---

[d042_d042 | Side [1]]
salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig

---

[d042_d042 | Side [1]]
elges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre

---

[d042_d042 | Side [1]]
ar tegnet kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes

---

[d042_d042 | Side [1]]
eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan

---

[d042_d042 | Side [1]]
gsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller

---

[d042_d042 | Side [1]]
tendige
All informasjon i tilstandsrapporten anses som kjent for murvegger mellom etasjene. Flislagt inngangsparti. fremtidsutsikter for 2026 ennå. Dette vil bli presentert i
kjøper, og det vil ikke være mulig å reklamere på forhold Eiendommen har personheis med adkomst garasje. Sameiets forsikringsselskap: Tryg forsikring sameiets årsberetning som legges frem i løpet av våren/
som er nevnt i rapporten. Spesielt forhold som er vurdert forsommeren i år. Sameiet fremstår totalt sett som et
med TG2 og TG3 bør

---

[d042_d042 | Side [1]]
g er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på

---

[d042_d042 | Side [1]]
 et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
Forsikring
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,

---

[d042_d042 | Side [1]]

Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra ikke‑forbrukere, selv om budet er lavere selgers ansvar er begrenset til det som følger direkte av
salgsoppgaven er basert på selgers informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf.

---

[d042_d042 | Side [1]]
kunnskap har over 琀椀d bygget troverdighet og 琀椀llit. Både selger og kjøper skal kunne stole på En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
bygningssakkyndiges vurderinger. For 琀椀lfeller der det likevel skulle oppstå misnøye med u琀昀ørt arbeid, har vi sammen fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
med Forbrukerrådet etablert en klagenemnd.
Norsk takst har en sentral rolle i utviklingen av norske standarder, regler og

---

[d042_d042 | Side [1]]

s
t S
m
s
r
n
j v
å
r j
e
o
E
e
o
m
e
- n
o
n
R
d
n
r
r
å
/
p
d o
e
e
V
o l
p
a r
g
,
b
s
g
A
n
l
s
y
e
k
h
a a
S
s
- d
n
e
m n
n
J
u
y
r
d
i
O
:
琀琀
t
n
k
r u
g
e
e
N
a
e
t
r
n
a v
r
p
i k
r
k
f
e
e
t
r
l ø
r
s
a
in
s
e
r
o
r
g e
r
a
n
v
r o
p
e
o
i g
p
r
p
b
e
o
d
p
o
r
r
d
l
l
t
y
i i
e
昀琀
e
g
s
g
-
n
n
a
.
i
p
v
n
L
å
g
e
e
s
r
m
fr
e
a
r
feil eller avvik, eller forhold som ikke er avdekket, kan medføre ekstra KLAGEORDNING FOR FORBRUKERE
kostnader. Verken bygningssakkyndig eller rapportens utsteder kan

---

[d042_d042 | Side [1]]

Rapporten kan brukes i inn琀椀l e琀琀 år e琀琀er rapportdato, og kan ikke gjenbrukes ved 昀氀ere boligsalg i denne perioden.
Skjer det endringer, oppstår skader også videre på boligen, bør du som selger be om oppdatert rapport.


128 129

## Side 66

Sigurd Hoels vei 9, 0655 OSLO Takstmann Jan Berby MNTF
Gnr 129 - Bnr 100 Pb. 80 Tåsen
Norsk takst
0301 OSLO 0801 OSLO
Norsk takst er bransjeorganisasjonen for landets bygningssakkyndige og taks琀昀oretak, med om lag 1400

---

[d042_d042 | Side [1]]
ren i år. Sameiet fremstår totalt sett som et
med TG2 og TG3 bør vurderes nøye, da de indikerer Vinduer: Polisenummer fellesforsikring: 6623428 trygt og forutsigbart valg for boligkjøpere.
avvik fra normal slitasje og/ eller høy alder, noe som kan Vinduer med trerammer og tre‑lags isolerglass
40 41

## Side 22

OM EIENDOMMEN OM EIENDOMMEN
Budgiver oppfordres til å sette seg inn i vedleggene til tillatt i inntil 90 døgn per år, jf. eierseksjonsloven § 24.
Oppvarming
salgsoppgaven, hvor protokoll,

---

[d042_d042 | Side [1]]
nnforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: ATH, ECP 4
52
72205220
:ecnerefer
tnemucoD
53

## Side 28

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
An Thien Huynh

---

[d042_d042 | Side [1]]
s. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Skjeggkre observert i boligen. Selger har bekreftet funn av skjeggkre, som er et insekt som lever innendørs og trives i miljøer med høy fuktighet. Dette kan indikere fuktproblemer og kan være vanskelig å bli kvitt.",
      "evidence": [
        "Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre. Dette insektet lever utelukkende innendørs og trives best i miljøer med høy fuktighet, men har vist seg å klare seg i tørrere omgivelser enn sølvkre. Skjeggkre er funnet i bygninger over hele landet, inkludert mange nyere og moderne."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R2",
      "description": "Feil etasjeangivelse i tilstandsrapporten. Det er opplyst at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje. Dette er en skrivefeil som kan skape usikkerhet om boligens faktiske beliggenhet og verdi.",
      "evidence": [
        "Vi gjør oppmerksom på en skrivefeil i tilstandsrapporten: Der står det oppført at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R3",
      "description": "Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av selgers egenerklæringsskjema og tilstandsrapporten at det mangler eller ikke er fremlagt samsvarserklæring for det elektriske anlegget, noe som kan innebære sikkerhetsrisiko og juridiske utfordringer.",
      "evidence": [
        "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget. Se tilstandsrapport for mer informasjon om det elektriske anlegget."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Økning i felleskostnader. Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader. Dette medfører økte løpende kostnader for kjøper etter overtakelse.",
      "evidence": [
        "Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader.",
        "Felleskostnadene økte sist med 5% Januar 2026.",
        "Kjenner du til vedtak som kan påvirke felleskostnader? Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Tidligere vannskade/fuktskade i stuen. Radiatoren i stuen hadde et drypp-problem som forårsaket en vannflekk på gulvet. Selv om dette er utbedret, kan det indikere risiko for skjulte fuktskader.",
      "evidence": [
        "Radiatoren i stuen hadde et lite drypp-problem tidligere i år, men ble fikset gjennom garantien hos Skanska. Rørlegger strammet en skrue, og en liten vannflekk på gulvet etter hendelsen ble pusset bort."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R6",
      "description": "Manglende radonmåling. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved langvarig eksponering.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R7",
      "description": "Legalpant og prioritetsrisiko. Kommunen har legalpant med høyere prioritet enn tinglyste lån, og sameiet har legalpant på inntil 2G. Dette kan påvirke kjøpers prioritet ved eventuelle betalingsproblemer.",
      "evidence": [
        "Legalpant til kommunen har høyere prioritet enn tinglyste heftelser og rettigheter.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "Reguleringsplan med blandede formål i nærområdet. Eiendommen ligger i et område regulert til blant annet bolig, forretning, kontor, barnehage og bevertning. Fremtidig utbygging og næringsvirksomhet i nærområdet kan påvirke bomiljøet negativt.",
      "evidence": [
        "Eiendommen ligger i område regulert etter reguleringsplan S-4420, vedtatt 17.12.2008. Formål: Bolig.",
        "Området reguleres til: byggeområde: bolig, forretning, kontor, offentlig bygning/allmennyttig formål (barnehage), bevertning (felt A og B)."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R9",
      "description": "Støykrav og støyskjermingstiltak i reguleringsplanen. Reguleringsplanen stiller krav til støyskjermingstiltak, noe som indikerer at eiendommen kan være utsatt for støy fra omgivelsene.",
      "evidence": [
        "Utendørs støy skal tilfredsstille Miljøverndepartementets retningslinjer for støy T-1442, tabell 2. Til grunn for avbøtende tiltak i felt A, B og G skal det foreligge en støyfaglig utredning som skal ligge ved søknad om rammetillatelse. Nødvendige støyskjermingstiltak skal være ferdigstilt før det gis midlertidig brukstillatelse."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R10",
      "description": "Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune. Eiendommen er påheftet en forpliktelse om fremtidig avståelse av veigrunn, noe som kan påvirke eiendommens areal og verdi.",
      "evidence": [
        "Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R11",
      "description": "Midlertidig dispensasjon for adkomstvei. Joh. H. Andresens vei er godkjent kun inntil videre i sin nåværende bredde, noe som innebærer usikkerhet om fremtidig adkomst til eiendommen.",
      "evidence": [
        "Midlertidig dispensasjon fra bygningsloven: Joh. H. Andresens vei godkjennes inntil videre i sin nåværende bredde."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R12",
      "description": "Bygningsdeler vurdert med TG2 i tilstandsrapporten. Tilstandsrapporten har avdekket bygningsdeler med tilstandsgrad 2 (TG2), som indikerer vesentlige avvik som kan kreve tiltak og medføre fremtidige kostnader for kjøper.",
      "evidence": [
        "Bygningsdeler vurdert med TG2.",
        "TG2: Avvik som kan kreve tiltak.",
        "Spesielt forhold som er vurdert med TG2 og TG3 bør vurderes nøye, da de indikerer avvik fra normal slitasje og/eller høy alder, noe som kan innebære behov for utbedringer."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Risiko for skjulte feil og mangler. Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler i boligen, noe som kan medføre uventede kostnader for kjøper.",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Det kan være avvik/skader som ikke er avdekket."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R14",
      "description": "Eiersbegrensning i sameiet. Ingen kan eie mer enn to boligseksjoner i sameiet i henhold til eierseksjonsloven § 23. Dette kan begrense kjøpers muligheter dersom vedkommende allerede eier seksjoner i sameiet.",
      "evidence": [
        "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R15",
      "description": "Prisstigning og renteøkning kan øke felleskostnadene ytterligere. Salgsoppgaven advarer eksplisitt om at prisstigning og renteøkning kan medføre ytterligere økning i felleskostnadene utover den allerede varslede økningen.",
      "evidence": [
        "På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R16",
      "description": "Høye driftskostnader i sameiet. Regnskapet for 2024 viser betydelige driftskostnader, inkludert brannsikring (kr 474 557), heisanlegg (kr 310 380) og VVS (kr 292 740). Disse kostnadene kan øke fremtidige felleskostnader.",
      "evidence": [
        "Drift/vedlikehold brannsikring -474 557",
        "Drift/vedlikehold heisanlegg -310 380",
        "Drift/vedlikehold VVS -292 740",
        "SUM DRIFT OG VEDLIKEHOLD -2 113 801"
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R17",
      "description": "Boligen selges 'som den er'. Avhendingsloven § 3-9 gjelder, noe som begrenser kjøpers reklamasjonsrett og øker risikoen for at skjulte feil ikke gir grunnlag for prisavslag eller heving.",
      "evidence": [
        "selges ansvar begrenses ettersom boligen selges «som den er»",
        "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9."
      ],
      "source_documents": [
        "d042_d042"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "Hvilke spesifikke bygningsdeler er vurdert med TG2 eller TG3 i tilstandsrapporten?",
    "Er det dokumentert fuktskader eller fuktmålinger i boligen eller bygget?",
    "Hva er status på ferdigattest og brukstillatelse for boligen?",
    "Er det pågående eller planlagte byggeprosjekter i nærområdet som kan påvirke støy eller bomiljø?",
    "Hva er sameiets vedlikeholdsplan og vedlikeholdsfond fremover?",
    "Er det registrert sopp, råte eller andre skadedyr i sameiet utover skjeggkre?"
  ],
  "reasoning": "\nGjennomgang av alle 15 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Skjeggkre (0.95 → 0.90):** Evidensen er klar og direkte fra selgers egenerklæring. Confidence justeres marginalt ned fra 0.95 til 0.90 fordi dokumentet selv presiserer at skjeggkre er funnet i bygninger over hele landet inkludert nyere bygg, noe som nyanserer alvorlighetsgraden noe. Risikoen er reell men ikke nødvendigvis knyttet til fuktproblemer.\n\n**R2 – Feil etasjeangivelse (0.90 → 0.85):** Evidensen bekrefter skrivefeilen. Confidence justeres ned noe fordi dette primært er en administrativ feil som er erkjent og opplyst, og ikke nødvendigvis en reell risiko for kjøper utover forvirring. Risikoen er lav i praksis.\n\n**R3 – Manglende samsvarserklæring elektrisk (0.95):** Godt dokumentert i både egenerklæring og tilstandsrapport. Confidence opprettholdes på 0.95.\n\n**R4 – Økning i felleskostnader (0.95):** Bekreftet i tre separate steder i dokumentet. Confidence opprettholdes.\n\n**R5 – Tidligere vannskade (0.80 → 0.75):** Evidensen bekrefter hendelsen, men beskriver den som utbedret. Risikoen for skjulte skader er spekulativ. Confidence justeres ned til 0.75.\n\n**R6 – Manglende radonmåling (0.85 → 0.80):** Bekreftet i egenerklæring. Dokumentet presiserer at det ikke er krav om radonmåling med mindre boligen er utleid, noe som reduserer alvorlighetsgraden noe. Confidence justeres til 0.80.\n\n**R7 – Legalpant (0.90):** Godt dokumentert. Confidence opprettholdes.\n\n**R8 – Reguleringsplan blandede formål (0.75 → 0.70):** Evidensen bekrefter reguleringsformålene, men dette er en eldre reguleringsplan (2008) og området er allerede i stor grad utbygd. Risikoen er noe spekulativ. Confidence justeres til 0.70.\n\n**R9 – Støykrav (0.70 → 0.65):** Evidensen bekrefter støykrav i reguleringsplanen, men dette gjelder byggefasen og er ikke nødvendigvis en løpende risiko for beboere. Confidence justeres ned til 0.65.\n\n**R10 – Vederlagsfri avståelse veigrunn (0.85):** Bekreftet i dokumentet. Confidence opprettholdes.\n\n**R11 – Midlertidig dispensasjon adkomstvei (0.80 → 0.75):** Bekreftet, men usikkert om dette fortsatt er aktuelt gitt at bygget er fra 2018. Confidence justeres til 0.75.\n\n**R12 – TG2 bygningsdeler (0.85 → 0.80):** Evidensen bekrefter at det finnes TG2-vurderinger, men de spesifikke bygningsdelene er ikke identifisert i de tilgjengelige dokumentchunkene. Confidence justeres til 0.80.\n\n**R13 – Skjulte feil og mangler (0.80 → 0.75):** Dette er en generell risiko som gjelder alle boligsalg. Evidensen er standardformuleringer fra tilstandsrapporten. Confidence justeres til 0.75.\n\n**R14 – Eiersbegrensning (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R15 – Prisstigning/renteøkning (0.85):** Bekreftet i dokumentet. Confidence opprettholdes.\n\n**Nye risikoer identifisert:**\n- **R16 – Høye driftskostnader i sameiet:** Regnskapet viser betydelige driftskostnader (totalt 2,1 mill kr i 2024), særlig brannsikring og heisanlegg. Dette er relevant for fremtidige felleskostnader.\n- **R17 – Boligen selges 'som den er':** Avhendingsloven § 3-9 begrenser kjøpers reklamasjonsrett. Dette er en viktig juridisk risiko som ikke var eksplisitt identifisert.\n\n**Risikoer som mangler tilstrekkelig spesifikk evidens:**\n- TG2-vurderingene mangler detaljer om hvilke spesifikke bygningsdeler som er berørt.\n- Ferdigattest/brukstillatelse er nevnt i egenerklæringen (spørsmål 22) men svaret er ikke synlig i dokumentchunkene.\n- Sameiets vedlikeholdsplan og fremtidige kostnader er ikke fullt ut dokumentert.\n"
}

## Raw Response
```json
{
  "id": "msg_01YAqeWq8Xe4CdXkhi95e8B2",
  "container": null,
  "content": [
    {
      "id": "toolu_01YHBwDMGmaD53oyGCfTaU6P",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Skjeggkre observert i boligen. Selger har bekreftet funn av skjeggkre, som er et insekt som lever innendørs og trives i miljøer med høy fuktighet. Dette kan indikere fuktproblemer og kan være vanskelig å bli kvitt.",
            "evidence": [
              "Selger har observert skjeggkre i boligen. Skjeggkre er et insekt i samme familie som sølvkre. Dette insektet lever utelukkende innendørs og trives best i miljøer med høy fuktighet, men har vist seg å klare seg i tørrere omgivelser enn sølvkre. Skjeggkre er funnet i bygninger over hele landet, inkludert mange nyere og moderne."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R2",
            "description": "Feil etasjeangivelse i tilstandsrapporten. Det er opplyst at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje. Dette er en skrivefeil som kan skape usikkerhet om boligens faktiske beliggenhet og verdi.",
            "evidence": [
              "Vi gjør oppmerksom på en skrivefeil i tilstandsrapporten: Der står det oppført at leiligheten ligger i 3. etasje, men korrekt etasjeplan er 2. etasje."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R3",
            "description": "Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av selgers egenerklæringsskjema og tilstandsrapporten at det mangler eller ikke er fremlagt samsvarserklæring for det elektriske anlegget, noe som kan innebære sikkerhetsrisiko og juridiske utfordringer.",
            "evidence": [
              "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget. Se tilstandsrapport for mer informasjon om det elektriske anlegget."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Økning i felleskostnader. Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader. Dette medfører økte løpende kostnader for kjøper etter overtakelse.",
            "evidence": [
              "Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader.",
              "Felleskostnadene økte sist med 5% Januar 2026.",
              "Kjenner du til vedtak som kan påvirke felleskostnader? Felleskostnadene økes med 5 % fra 1. januar 2026 på grunn av økte driftskostnader."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Tidligere vannskade/fuktskade i stuen. Radiatoren i stuen hadde et drypp-problem som forårsaket en vannflekk på gulvet. Selv om dette er utbedret, kan det indikere risiko for skjulte fuktskader.",
            "evidence": [
              "Radiatoren i stuen hadde et lite drypp-problem tidligere i år, men ble fikset gjennom garantien hos Skanska. Rørlegger strammet en skrue, og en liten vannflekk på gulvet etter hendelsen ble pusset bort."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R6",
            "description": "Manglende radonmåling. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved langvarig eksponering.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R7",
            "description": "Legalpant og prioritetsrisiko. Kommunen har legalpant med høyere prioritet enn tinglyste lån, og sameiet har legalpant på inntil 2G. Dette kan påvirke kjøpers prioritet ved eventuelle betalingsproblemer.",
            "evidence": [
              "Legalpant til kommunen har høyere prioritet enn tinglyste heftelser og rettigheter.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "Reguleringsplan med blandede formål i nærområdet. Eiendommen ligger i et område regulert til blant annet bolig, forretning, kontor, barnehage og bevertning. Fremtidig utbygging og næringsvirksomhet i nærområdet kan påvirke bomiljøet negativt.",
            "evidence": [
              "Eiendommen ligger i område regulert etter reguleringsplan S-4420, vedtatt 17.12.2008. Formål: Bolig.",
              "Området reguleres til: byggeområde: bolig, forretning, kontor, offentlig bygning/allmennyttig formål (barnehage), bevertning (felt A og B)."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R9",
            "description": "Støykrav og støyskjermingstiltak i reguleringsplanen. Reguleringsplanen stiller krav til støyskjermingstiltak, noe som indikerer at eiendommen kan være utsatt for støy fra omgivelsene.",
            "evidence": [
              "Utendørs støy skal tilfredsstille Miljøverndepartementets retningslinjer for støy T-1442, tabell 2. Til grunn for avbøtende tiltak i felt A, B og G skal det foreligge en støyfaglig utredning som skal ligge ved søknad om rammetillatelse. Nødvendige støyskjermingstiltak skal være ferdigstilt før det gis midlertidig brukstillatelse."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R10",
            "description": "Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune. Eiendommen er påheftet en forpliktelse om fremtidig avståelse av veigrunn, noe som kan påvirke eiendommens areal og verdi.",
            "evidence": [
              "Plikt til fremtidig vederlagsfri avståelse av veigrunn til Oslo kommune."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R11",
            "description": "Midlertidig dispensasjon for adkomstvei. Joh. H. Andresens vei er godkjent kun inntil videre i sin nåværende bredde, noe som innebærer usikkerhet om fremtidig adkomst til eiendommen.",
            "evidence": [
              "Midlertidig dispensasjon fra bygningsloven: Joh. H. Andresens vei godkjennes inntil videre i sin nåværende bredde."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R12",
            "description": "Bygningsdeler vurdert med TG2 i tilstandsrapporten. Tilstandsrapporten har avdekket bygningsdeler med tilstandsgrad 2 (TG2), som indikerer vesentlige avvik som kan kreve tiltak og medføre fremtidige kostnader for kjøper.",
            "evidence": [
              "Bygningsdeler vurdert med TG2.",
              "TG2: Avvik som kan kreve tiltak.",
              "Spesielt forhold som er vurdert med TG2 og TG3 bør vurderes nøye, da de indikerer avvik fra normal slitasje og/eller høy alder, noe som kan innebære behov for utbedringer."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Risiko for skjulte feil og mangler. Tilstandsrapporten er ingen garanti for at det ikke finnes skjulte feil, skader og mangler i boligen, noe som kan medføre uventede kostnader for kjøper.",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Det kan være avvik/skader som ikke er avdekket."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R14",
            "description": "Eiersbegrensning i sameiet. Ingen kan eie mer enn to boligseksjoner i sameiet i henhold til eierseksjonsloven § 23. Dette kan begrense kjøpers muligheter dersom vedkommende allerede eier seksjoner i sameiet.",
            "evidence": [
              "Det informeres om at ingen kan eie mer enn to boligseksjoner i sameiet, i henhold til eierseksjonsloven § 23. Seksjoner som eies av nærstående eller gjennom et firma regnes også med."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R15",
            "description": "Prisstigning og renteøkning kan øke felleskostnadene ytterligere. Salgsoppgaven advarer eksplisitt om at prisstigning og renteøkning kan medføre ytterligere økning i felleskostnadene utover den allerede varslede økningen.",
            "evidence": [
              "På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R16",
            "description": "Høye driftskostnader i sameiet. Regnskapet for 2024 viser betydelige driftskostnader, inkludert brannsikring (kr 474 557), heisanlegg (kr 310 380) og VVS (kr 292 740). Disse kostnadene kan øke fremtidige felleskostnader.",
            "evidence": [
              "Drift/vedlikehold brannsikring -474 557",
              "Drift/vedlikehold heisanlegg -310 380",
              "Drift/vedlikehold VVS -292 740",
              "SUM DRIFT OG VEDLIKEHOLD -2 113 801"
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R17",
            "description": "Boligen selges 'som den er'. Avhendingsloven § 3-9 gjelder, noe som begrenser kjøpers reklamasjonsrett og øker risikoen for at skjulte feil ikke gir grunnlag for prisavslag eller heving.",
            "evidence": [
              "selges ansvar begrenses ettersom boligen selges «som den er»",
              "Ved slike kjøp selges eiendommen «som den er», og selgers ansvar er begrenset til det som følger direkte av avtalen, jf. avhendingsloven § 3-9."
            ],
            "source_documents": [
              "d042_d042"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "Hvilke spesifikke bygningsdeler er vurdert med TG2 eller TG3 i tilstandsrapporten?",
          "Er det dokumentert fuktskader eller fuktmålinger i boligen eller bygget?",
          "Hva er status på ferdigattest og brukstillatelse for boligen?",
          "Er det pågående eller planlagte byggeprosjekter i nærområdet som kan påvirke støy eller bomiljø?",
          "Hva er sameiets vedlikeholdsplan og vedlikeholdsfond fremover?",
          "Er det registrert sopp, råte eller andre skadedyr i sameiet utover skjeggkre?"
        ],
        "reasoning": "\nGjennomgang av alle 15 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 – Skjeggkre (0.95 → 0.90):** Evidensen er klar og direkte fra selgers egenerklæring. Confidence justeres marginalt ned fra 0.95 til 0.90 fordi dokumentet selv presiserer at skjeggkre er funnet i bygninger over hele landet inkludert nyere bygg, noe som nyanserer alvorlighetsgraden noe. Risikoen er reell men ikke nødvendigvis knyttet til fuktproblemer.\n\n**R2 – Feil etasjeangivelse (0.90 → 0.85):** Evidensen bekrefter skrivefeilen. Confidence justeres ned noe fordi dette primært er en administrativ feil som er erkjent og opplyst, og ikke nødvendigvis en reell risiko for kjøper utover forvirring. Risikoen er lav i praksis.\n\n**R3 – Manglende samsvarserklæring elektrisk (0.95):** Godt dokumentert i både egenerklæring og tilstandsrapport. Confidence opprettholdes på 0.95.\n\n**R4 – Økning i felleskostnader (0.95):** Bekreftet i tre separate steder i dokumentet. Confidence opprettholdes.\n\n**R5 – Tidligere vannskade (0.80 → 0.75):** Evidensen bekrefter hendelsen, men beskriver den som utbedret. Risikoen for skjulte skader er spekulativ. Confidence justeres ned til 0.75.\n\n**R6 – Manglende radonmåling (0.85 → 0.80):** Bekreftet i egenerklæring. Dokumentet presiserer at det ikke er krav om radonmåling med mindre boligen er utleid, noe som reduserer alvorlighetsgraden noe. Confidence justeres til 0.80.\n\n**R7 – Legalpant (0.90):** Godt dokumentert. Confidence opprettholdes.\n\n**R8 – Reguleringsplan blandede formål (0.75 → 0.70):** Evidensen bekrefter reguleringsformålene, men dette er en eldre reguleringsplan (2008) og området er allerede i stor grad utbygd. Risikoen er noe spekulativ. Confidence justeres til 0.70.\n\n**R9 – Støykrav (0.70 → 0.65):** Evidensen bekrefter støykrav i reguleringsplanen, men dette gjelder byggefasen og er ikke nødvendigvis en løpende risiko for beboere. Confidence justeres ned til 0.65.\n\n**R10 – Vederlagsfri avståelse veigrunn (0.85):** Bekreftet i dokumentet. Confidence opprettholdes.\n\n**R11 – Midlertidig dispensasjon adkomstvei (0.80 → 0.75):** Bekreftet, men usikkert om dette fortsatt er aktuelt gitt at bygget er fra 2018. Confidence justeres til 0.75.\n\n**R12 – TG2 bygningsdeler (0.85 → 0.80):** Evidensen bekrefter at det finnes TG2-vurderinger, men de spesifikke bygningsdelene er ikke identifisert i de tilgjengelige dokumentchunkene. Confidence justeres til 0.80.\n\n**R13 – Skjulte feil og mangler (0.80 → 0.75):** Dette er en generell risiko som gjelder alle boligsalg. Evidensen er standardformuleringer fra tilstandsrapporten. Confidence justeres til 0.75.\n\n**R14 – Eiersbegrensning (0.85):** Godt dokumentert. Confidence opprettholdes.\n\n**R15 – Prisstigning/renteøkning (0.85):** Bekreftet i dokumentet. Confidence opprettholdes.\n\n**Nye risikoer identifisert:**\n- **R16 – Høye driftskostnader i sameiet:** Regnskapet viser betydelige driftskostnader (totalt 2,1 mill kr i 2024), særlig brannsikring og heisanlegg. Dette er relevant for fremtidige felleskostnader.\n- **R17 – Boligen selges 'som den er':** Avhendingsloven § 3-9 begrenser kjøpers reklamasjonsrett. Dette er en viktig juridisk risiko som ikke var eksplisitt identifisert.\n\n**Risikoer som mangler tilstrekkelig spesifikk evidens:**\n- TG2-vurderingene mangler detaljer om hvilke spesifikke bygningsdeler som er berørt.\n- Ferdigattest/brukstillatelse er nevnt i egenerklæringen (spørsmål 22) men svaret er ikke synlig i dokumentchunkene.\n- Sameiets vedlikeholdsplan og fremtidige kostnader er ikke fullt ut dokumentert.\n"
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
    "input_tokens": 23491,
    "output_tokens": 5235,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
