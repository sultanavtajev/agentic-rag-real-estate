# Trace: agentic_reflecting_iter1
- **Run ID:** 24313035-47a6-4f5b-87d0-fba307f0cc34
- **Tidspunkt:** 2026-03-25T22:47:16.153539+00:00
- **Varighet:** 113.36s
- **Input tokens:** 21649
- **Output tokens:** 5645

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
Risiko 1: Høy fellesgjeld med avdragsfri periode – risiko for betydelig økning i felleskostnader etter 2035
  Confidence: 0.97
  Evidens: Andel av fellesgjeld: kr 2 030 000; Felleslånet har en avdragsfri periode frem til 31.12.2035. Etter denne datoen vil kapitalkostnadene øke når avdragene begynner å løpe og dette vil medføre en økning av felleskostnadene.; Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.; Felleskostnader kr 11 006,- pr. mnd

Risiko 2: Nyetablert borettslag uten avholdt årsmøte, godkjent regnskap eller husordensregler – begrenset innsyn i økonomi og drift
  Confidence: 0.95
  Evidens: Dette er et nyetablert borettslag. Årsmøte er ennå ikke avholdt, og årsregnskap er derfor ikke utarbeidet.; Borettslaget har ikke utarbeidet husordensregler.; Første regnskapsår avsluttes 31.12.2026, og det er ikke avholdt noe årsmøte enda.

Risiko 3: Kun midlertidig brukstillatelse er gitt – ferdigattest foreligger ikke, og det gjenstår arbeid med frist til 01.12.2027
  Confidence: 0.96
  Evidens: Byggesakskontoret vurderer at det kan gis midlertidig brukstillatelse.; Det opplyses om følgende arbeid som gjenstår fram mot ferdigattest.; Dere må utføre arbeidet som gjenstår innen 01.12.2027.; Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja

Risiko 4: Gjenstående mangler som hindret midlertidig brukstillatelse – brannsikkerhet, rekkverk, ringeklokker og byggeavfall
  Confidence: 0.95
  Evidens: Byggesakskontoret vurderer derfor at vi ikke kan gi midlertidig brukstillatelse.; Før Byggesakskontoret kan gi midlertidig brukstillatelse, må følgende gjenstående mangler utbedres: Forhold knyttet til brannsikkerhet for tiltaket i sin helhet, Oppføring av rekkverk på uteområdet, Oppføring av ringeklokker, Fjerning av avfall og byggeutstyr, slik at alle områder kan benyttes til tiltenkt bruk.

Risiko 5: Pågående byggeaktivitet i området – kjøper må forvente anleggsarbeid, støy og ulemper i en periode
  Confidence: 0.93
  Evidens: Ettersom utbyggingsprosjektet «Saupstad Torg» fortsatt er under utvikling, må kjøpere være forberedt på byggeaktivitet i området.; I henhold til vedtektene har utbygger rett til å utføre nødvendige arbeider for å ferdigstille prosjektet. Dette inkluderer rett til adkomst, plassering av utstyr og anleggsmaskiner på eiendommen.

Risiko 6: Igangsatt reguleringsarbeid (r20240029) langs Kongsvegen kan påvirke omgivelsene og tilgjengeligheten til eiendommen
  Confidence: 0.8
  Evidens: Plan-ID: r20240029 – Deler av Kongsvegen og Øvre- og Nedre Flatåsveg; Miljøpakken planlegger 1200 m sykkelveg med fortau langs østsiden av Kongsvegen fra Saupstadringen (nord) til Anton Bergs veg.; Kongsvegen utgjør i dag en barriere som skal reduseres, samtidig som bussen må sikres god fremkommelighet og bedre adkomster til bussholdeplasser.

Risiko 7: Legalpant – borettslaget har prioritet foran tinglyste lån ved manglende betaling av felleskostnader
  Confidence: 0.92
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.; Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 8: Risiko for økte felleskostnader ved mislighold fra andre andelshavere eller usolgte andeler i borettslaget
  Confidence: 0.88
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 9: Flytende rente på felleslånet gir usikkerhet om fremtidige felleskostnader
  Confidence: 0.93
  Evidens: Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.; På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke.

Risiko 10: Uklar bodtilhørighet – det er ikke kjent hvilken bod i kjelleren som tilhører leiligheten
  Confidence: 0.88
  Evidens: Flere boder i kjeller ble oppmålt og de varierte mellom 2,5m² og 5m², men det er ikke kjent hvilken som eventuelt tilhører leiligheten.

Risiko 11: Eiendommen er avsatt til sentrumsformål – framtidig i kommuneplanen, noe som kan medføre fremtidige endringer i arealbruk og omgivelser
  Confidence: 0.78
  Evidens: Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1 og sentrumsformål – framtidig.; Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Sentrumsformål - Framtidig, Kommuneplanens arealdel 2022-2034 (27.3.2025).

Risiko 12: Stikkledninger for vann og avløp er private – vedlikeholdsansvar og kostnader påhviler eier/borettslaget
  Confidence: 0.82
  Evidens: Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private.

Risiko 13: Selger har ikke utført radonmåling – potensiell helserisiko er ikke avklart
  Confidence: 0.75
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 14: Tilstandsrapporten vurderer ikke bygningsdeler under borettslagets ansvarsområde – yttervegger, tak, drenering, grunnmur mv. er ikke undersøkt
  Confidence: 0.85
  Evidens: Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.

Risiko 15: Styregodkjenning kreves ved kjøp – styret kan nekte godkjenning av ny eier, noe som kan forsinke eller hindre gjennomføring av handelen
  Confidence: 0.8
  Evidens: Ved hvert eierskifte må erververen godkjennes av styret for å få rett til å bruke boligen. Styret kan nekte godkjenning når det er saklig grunn til det. Nekter styret å godkjenne erververen, må melding om dette komme fram til erververen senest 20 dager etter at søknaden om godkjenning kom fram til borettslaget.

Risiko 16: Omfattende tinglyste heftelser og rettigheter på eiendommen – inkludert bestemmelser om vedlikehold, adkomstrett, bruksrett, fordeling av kostnader og felles tekniske rom
  Confidence: 0.85
  Evidens: På eiendommen er det tinglyst følgende heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting.; Bestemmelse om vedlikehold, Bestemmelse om fordeling av kostnader, Bestemmelse om felles tekniske rom, sykkelparkering og boder, Bestemmelse om adkomstrett, Bruksrett.; Kan ikke slettes uten samtykke fra: Trondheim Kommune, Org.nr: 942 110 464.

Dokumentkontekst:
[d184_d184 | Side [1]]
r vedlagt i salgsoppgaven eller Knr:5001 Gnr:197 Bnr:499
kan fås ved henvendelse til megler. Vi oppfordrer OGSÅ FRADELT FRA UMATRIKULERT VEGGRUNN I
interessenter til å gjøre seg kjent med disse. FYLKESVEG U 812
PARKERINGSPLASS 1 SAUPSTAD
Tinglyste heftelser
01.01.2018 ‑ Dokumentnr: 55912 ‑ Omnummerering ved
Tinglyste heftelser og rettigheter: På eiendommen er det kommuneendring
tinglyst følgende heftelser og rettigheter som følger Tidligere: Knr:1601 Gnr:197 Bnr:540
eiendommens matrikkel ved overskjøting

---

[d184_d184 | Side [1]]
197 Bnr:992 Snr:4 Bestemmelse om vedlikehold
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:5 Gjelder denne registerenheten med flere
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:6
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:7 Dokumenter kan fås ved henvendelse til megler.
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:8
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:9
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:10 Legalpant: Borettslaget har legalpant på inntil 2G som
Rettighet hefter

---

[d184_d184 | Side [1]]
 hefter i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:36
Bestemmelse om felles tekniske rom, sykkelparkering og Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:37
boder Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:38
Bestemmelse om vedlikehold Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:39
Bestemmelse om fordeling av kostnader Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:40
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:41
08.10.2025 ‑ Dokumentnr: 1208824 ‑

---

[d184_d184 | Side [1]]
r lån registrert på andelen. dekning av felleskostnader og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.
Vei, vann og avløp
Kjøper og selger er forpliktet til å undertegne standard
Eiendommen er tilknyttet offentlig vann‑ og kjøpekontrakt utarbeidet av Emera i forbindelse med
avløpssystem. Stikkledningene fra eiendommen og ut til eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
det kommunale nettet er private, og hos eiendomsmegler før bud inngis.

---

[d184_d184 | Side [1]]
:5001 Gnr:197 Bnr:992 Snr:30
Bestemmelse om felles tekniske rom, sykkelparkering og Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:31
boder Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:32
Bestemmelse om fordeling av kostnader Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:33
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:34
08.10.2025 ‑ Dokumentnr: 1208824 ‑ Bruksrett Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:35
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001

---

[d184_d184 | Side [1]]
r:5001 Gnr:197 Bnr:992 Snr:41
08.10.2025 ‑ Dokumentnr: 1208824 ‑ Bruksrett Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:42
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:1 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:43
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:2 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:44
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:3 Bestemmelse om gjesterom
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:4 Bestemmelse om vedlikehold
Rettighet hefter i:

---

[d184_d184 | Side [1]]
nt: Borettslaget har legalpant på inntil 2G som
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:11 sikkerhet for betaling av felleskostnader. Dette betyr at
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:12 borettslaget har prioritet over tinglyste lån når det gjelder
38

## Side 39

OM EIENDOMMEN
betaling av felleskostnader, og kan kreve inn pengene før Borettslaget har legalpanterett i andelen for krav på
andre kreditorer, selv om de har lån registrert på andelen. dekning av felleskostnader og andre

---

[d184_d184 | Side [1]]
i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:25
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:26
08.10.2025 ‑ Dokumentnr: 1208824 ‑ Bestemmelse om Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:27
adkomstrett Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:28
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:29
Bestemmelse om vedlikehold Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:30
Bestemmelse om felles tekniske rom,

---

[d184_d184 | Side [1]]
 Knr:1601 Gnr:197 Bnr:540
eiendommens matrikkel ved overskjøting til ny
hjemmelshaver: 28.10.2024 ‑ Dokumentnr: 2154485 ‑ Registrering av
grunn
28.10.2024 ‑ Dokumentnr: 2154643 ‑ Bestemmelse om Utskilt fra denne matrikkelenhet:
vann/k loakk Knr:5001 Gnr:197 Bnr:983
Kan ikke slettes uten samtykke fra: Trondheim Kommune
Org.nr: 942 110 464 28.10.2024 ‑ Dokumentnr: 2154623 ‑ Registrering av
Bestemmelse om gjensidig rett grunn
Bestemmelse om vedlikehold av anlegg/ ledninger Utskilt fra denne

---

[d184_d184 | Side [1]]
estemmelse om vedlikehold av anlegg/ ledninger Utskilt fra denne matrikkelenhet:
Gjelder denne registerenheten med flere Knr:5001 Gnr:197 Bnr:990
28.10.2024 ‑ Dokumentnr: 2154643 ‑ Bestemmelse om 28.10.2024 ‑ Dokumentnr: 2154643 ‑ Bestemmelse om
elektriske ledninger/ kabler adkomstrett
37

## Side 38

OM EIENDOMMEN
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:13
Kan ikke slettes uten samtykke fra: Trondheim Kommune Rettighet hefter i: Knr:5001 Gnr:197

---

[d184_d184 | Side [1]]
k som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: AGD 2
90006250
:ecnerefer
tnemucoD
46

## Side 47

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av

---

[d184_d184 | Side [1]]
8835 Eiendommen er regulert til
boligbebyggelse‑blokkbebyggelse, frisikt og
Husdyr: Det fremgår ikke noen begrensninger for uteoppholdsareal etter reguleringsplan r20190029.
36

## Side 37

OM EIENDOMMEN
Eiendommen er i kommuneplanens arealdel avsatt til Kan ikke slettes uten samtykke fra: Trondheim Kommune
byggesone 1 og sentrumsformål ‑ framtidig. Org.nr: 942 110 464
Bestemmelse om gjensidig rett
Vi gjør oppmerksom på at det eksisterer følgende Bestemmelse om vedlikehold av anlegg/

---

[d184_d184 | Side [1]]
nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens

---

[d184_d184 | Side [1]]
ld)
Felleslånet har en avdragsfri periode frem til 31.12.2035.
2 920 000 (Pris inkl. fellesgjeld) Etter denne datoen vil kapitalkostnadene øke når
avdragene begynner å løpe og dette vil medføre en
Omkostninger økning av felleskostnadene.
8 900 (Boligkjøperforsikring (valgfritt))
260 (Panteattest kjøper) Borettslaget har en IN‑ordning som gir mulighet for
545 (Tinglysingsgebyr BRL ‑ pantedokument) individuell nedbetaling av fellesgjeld. Renten på
545 (Tinglysingsgebyr BRL ‑ skjøte) felleslånet er flytende,

---

[d184_d184 | Side [1]]
ringer eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har

---

[d184_d184 | Side [1]]
angler ved boligen de
fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring i
utgifter. Manglende innbetaling av fellesutgiftene som vedlagte materiell eller på https:/ /
følge av andre andelshaveres mislighold, eller dersom www.soderbergpartners.no/ eiendom/ boligkjoper/
borettslaget sitter på fraflyttede og/ eller usolgte andeler,
må dekkes av de øvrige andelseierne.
Lovanvendelse
39

## Side 40

OM EIENDOMMEN
Regelverk og generelle opplysninger eller egne

---

[d184_d184 | Side [1]]
ostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AGD 3
90006250
:ecnerefer
tnemucoD
47

## Side 48

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har

---

[d184_d184 | Side [1]]
40

OM EIENDOMMEN
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal

---

[d184_d184 | Side [1]]
klameres
på forhold som burde ha vært oppdaget ved en ordinær En eiendom anses å ha en mangel dersom den ikke
gjennomgang. oppfyller kravene som følger av avtalen, eller ved brudd
på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
40

## Side 41

OM EIENDOMMEN
annet alder, type og synlig tilstand

---

[d184_d184 | Side [1]]
:5001 Gnr:197 Bnr:992 Snr:19
Kan ikke slettes uten samtykke fra: Trondheim Kommune Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:20
Org.nr: 942 110 464 Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:21
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:22
08.10.2025 ‑ Dokumentnr: 1208790 ‑ Bestemmelse om Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:23
parkering Rettighet hefter i: Knr:5001 Gnr:197 Bnr:992 Snr:24
Rettighet hefter i: Knr:5001 Gnr:197 Bnr:983 Rettighet hefter i: Knr:5001 Gnr:197

---

[d184_d184 | Side [1]]
trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller

---

[d184_d184 | Side [1]]

Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også

---

[d184_d184 | Side [1]]
ier Søbstads veg 16, 7078 Saupstad 2 av 12
51

## Side 52

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse

---

[d184_d184 | Side [1]]
t sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler

---

[d184_d184 | Side [1]]
or vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem

---

[d184_d184 | Side [1]]
malt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller

---

[d184_d184 | Side [1]]
or tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten

---

[d184_d184 | Side [1]]
Salgsoppgaven inkluderer NEFs som er nevnt i rapporten. Spesielt forhold som er vurdert
standardliste "Oversikt over løsøre og tilbehør", som med TG2 og TG3 bør vurderes nøye, da de indikerer
legges til grunn med mindre annet er spesifisert i avvik fra normal slitasje og/ eller høy alder, noe som kan
salgsoppgaven. innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av takstmannen.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil

---

[d184_d184 | Side [1]]
aksepterer at det kan forekomme hull og merker er utvendig kledd med fasadeplater. Taket er
etter montering av inventar og utstyr som ikke er en del flatt tekket med papp, Etasjeskille er et betongdekke.
av overdragelsen. Vindu med 3‑lags isolerglass.
Boligen har ingen bygningsdeler med tilstandsgrad TG1,
Eiendommens
TG2 eller TG3.
tilstand
Øvrig
Takstmann: Jan Arve Ræder
informasjon
Type takst avholdt av takstmann: Tilstandsrapport
Adresse
Sammendrag selgers egenerklæring: Selger har ingen
anmerkninger om

---

[d184_d184 | Side [1]]
: 2.2.2026 (Gyldig til 2.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
13 0 0 0 0
Jan Arve Ræder jan@tft.no Reier Søbstads veg 16
GNR: 197 BNR: 540 ANR: 88
Takst-Forum Trøndelag AS 40004461 7078 Saupstad
50

## Side 51

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal

---

[d184_d184 | Side [1]]
eier Søbstads veg 16, 7078 Saupstad 10 av 12
59

## Side 60

Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av membran, tettesjikt og sluk TG-0
Ingen symptom på skade.
Sanitærutstyr
Beskrivelse
Det er etablert servantskap, klosett med innebygd sisterne, og innfellbare dusjvegger.
Er det skader på utstyr og innredning? Nei
Er det innebygd sisterne til klosett? Ja
Er det manglende drenering av lekkasjevann fra innebygd sisterne? Annen godkjent

---

[d184_d184 | Side [1]]

Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting TG-0
Ingen symptom på skade.
5.2 Vinduer og dører
Beskrivelse
Vinduer med 3-lags glass.
Ytterdør i malt utførelse.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er

---

[d184_d184 | Side [1]]
er byggeår? Nei
Har vannrør nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Er det tegn på skader ved gjennomføringer i vegg eller gulv? Nei
Er det påvist lekkasjer eller korrosjon ved synlige koblinger eller ventiler? Nei
Oppsummering av vannbåren varme TG-0
Anlegget er nytt.
5.9 Ventilasjon
Type ventilering Balansert ventilasjon
Er det utført arbeider på anlegget etter byggeår? Nei
Når var siste service på anlegget?
Anlegget er nytt.
Reier Søbstads veg 16, 7078 Saupstad 9 av 12
58

##

---

[d184_d184 | Side [1]]
r
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Nei
Reier Søbstads veg 16, 7078 Saupstad 8 av 12
57

## Side 58

Er det manglende samsvarserklæring på arbeider utført etter 01.01.1999? Nei
Er det manglende kursfortegnelse? Nei
Er det manglende samsvar mellom kursfortegnelse og antall sikringer? Nei
Er det tegn på varmgang (termiske skader) på kabler, brytere, downlight, stikkkontakter, og Nei
elektrisk utstyr?
Er plugg (støpsel) på berederen brunsvidd? Ikke relevant, fast tilkobling
Er

---

[d184_d184 | Side [1]]
nnslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
5.5 Avløpsrør
Type avløpsrør Plast
Er det gjennomført arbeider på anlegget etter byggeår? Nei
Er det manglende lufting av kloakk over tak? Ukjent
Er det sen avrenning fra tappested? Nei
Reier Søbstads veg 16, 7078 Saupstad 7 av 12
56

## Side 57

Mangler det stakemuligheter på avløpsanlegget? Nei
Har avløpsrør nådd en alder som gir økt risiko for skader

---

[d184_d184 | Side [1]]
ort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Reier Søbstads veg 16, 7078 Saupstad 2 av 12
51

## Side 52

2. Om

---

[d184_d184 | Side [1]]
get er nytt.
Reier Søbstads veg 16, 7078 Saupstad 9 av 12
58

## Side 59

Er det tegn på fukt eller mugg i filter? Nei
Er det rom med manglende tilluft/avtrekk? Nei
Er det tegn på utilstrekkelig luftutveksling? Nei
Oppsummering av ventilasjon TG-0
Anlegget er nytt.
5.10 Våtrom: Bad.
Overflate
Beskrivelse av overflate
Flislagt gulv og vegg.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann

---

[d184_d184 | Side [1]]
gningen. Flere boder i kjeller ble oppmålt og de varierte mellom 2,5m² og 5m², men det er ikke
kjent hvilken som eventuelt tilhører leiligheten..
Reier Søbstads veg 16, 7078 Saupstad 5 av 12
54

## Side 55

5. Hovedrapport
5.1 Balkong, terrasse, platting
Type Balkong
Benevnelsen "Balkong" benyttes også for veranda og altan.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong?

---

[d184_d184 | Side [1]]
sealing the contents with a certificate issued to IN Groupe by
a third party. Validating the signature confirms that the contents have not been modified since the time of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
90006250
:ecnerefer
tnemucoD
49

## Side 50

Reier Søbstads veg 16
7078 SAUPSTAD
Tilstandsrapport
Eierskifte
Boligtype: Leilighet
Byggeår: 2025
BRA: 40 m2
BRA-i: 40 m2
Rapportdato: 2.2.2026 (Gyldig til 2.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2

---

[d184_d184 | Side [1]]
r
I forbindelse med salget er det blitt utført en Aslak Glosimot Dalen
tilstandsrapport av en bygningssakkyndig, som gir en
Borettslag
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, SAUPSTAD TORG HUS D OG E BORETTSLAG
er vedlagt salgsoppgaven. Det er viktig at interessenter
grundig gjennomgår disse dokumentene før bud legges Organisasjonsnummer: 934220900
35

## Side 36

OM EIENDOMMEN
dyrehold i vedtektene. Det kan fastsettes

---

[d184_d184 | Side [1]]
nnå ikke avholdt, og
eiendommen. Borettslaget og andelseierne er forpliktet årsregnskap er derfor ikke utarbeidet.
til å medvirke til en helhetlig gjennomføring av
utbyggingen. Disse midlertidige bestemmelsene gjelder
Vedtekter/ husordensregler
frem til siste byggetrinn er ferdigstilt og overtatt.
Borettslaget har ikke utarbeidet husordensregler.
Borettslaget har en avtale om individuell nedbetaling av Vedtekter ligger vedlagt salgsoppgaven.
fellesgjeld (IN‑ordning), som gir andelseiere mulighet til

---

[d184_d184 | Side [1]]
MEN
Felleskostnadene er fordelt slik:
Økonomi
‑ Kapitalkostnader lån, andel fellesgjeld: kr 8 272,25,‑
‑ Felleskostnader: kr 2 100,‑
Prisantydning
‑ A konto Fjernvarme: kr 375,‑
Kr 890 000 ‑ Bredbånd Telenor Frihet S: kr 259,‑
A‑konto fjernvarme vil avregnes mot faktisk forbruk.
Omkostning kjøper
Avtale er ikke på plass enda, så det er ikke satt hvor
890 000 (Prisantydning) mange avregninger det vil bli per år.
2 030 000 (Andel av fellesgjeld)
Felleslånet har en avdragsfri periode frem til 31.12.2035.
2

---

[d184_d184 | Side [1]]
skostnadene inkluderer kommunale avgifter, renter
Fellesgjeld
på fellesgjeld, drift og avsetning vedlikehold fellesarealer
og bygningsmasse, forretningsførsel, a konto fjernvarme, Kr 2 030 000 pr. 29.01.2026
forsikring bygg (ikke innbo), grunnabonnement for
kabel‑TV/ internett og andre driftskostnader m.m. Lånebetingelser fellesgjeld: Selskapets totale lån og
vilkår:
31

## Side 32

OM EIENDOMMEN
Bank: OBOS‑banken AS
Beliggenhet
Lånenummer: 98208692062
Type: Annuitetslån, 12 terminer per år. Med

---

[d184_d184 | Side [1]]
kostnadene. Innbetaling
forutsetter at andelseier har inngått en egen avtale med
borettslaget.
Estimert totalpris ink. omk
Kr 2 930 250 På grunn av prisstigning og renteøkning tas det
forbehold om at felleskostnader kan øke.
Felleskostnader
Felleskostnader kr 11 006,‑ pr. mnd
Kommunale avgifter
Felleskostnader inkulderer: Totale felleskostnader per Informasjon: Kommunale avgifter inngår i
måned: kr 11 006,25,‑ felleskostnadene.
Felleskostnadene inkluderer kommunale avgifter, renter
Fellesgjeld
på

---

[d184_d184 | Side [1]]
naden om godkjenning kom fram til
er under utvikling, må kjøpere være forberedt på borettslaget. I motsatt fall skal godkjenning regnes som
byggeaktivitet i området. I henhold til vedtektene har gitt.
utbygger rett til å utføre nødvendige arbeider for å
ferdigstille prosjektet. Dette inkluderer rett til adkomst, Regnskap/ budsjett/ kostnadsøkninger: Dette er et
plassering av utstyr og anleggsmaskiner på nyetablert borettslag. Årsmøte er ennå ikke avholdt, og
eiendommen. Borettslaget og andelseierne er

---

[d184_d184 | Side [1]]
aven.
fellesgjeld (IN‑ordning), som gir andelseiere mulighet til å
nedbetale sin andel av fellesgjelden to ganger i året.
Energimerke
Felleslånet har en avdragsfri periode frem til 31.12.2035.
Etter denne datoen vil kapitalkostnadene øke når Energikarakter: B
avdragene på lånet begynner å løpe.
Energifarge: Lys grønn
Det er viktig å merke seg at det er restriksjoner på
endringer av fellesarealer og fasader. Montering av blant
Oppvarming
annet varmepumper, solskjerming, gjerder, plattinger,
innglassing av

---

[d184_d184 | Side [1]]
 til dagligvarebutikker
som Coop Extra og Rema 1000, samt apotek ved
Saupstadsenteret.
Sikringsordning
Borettslaget er tilknyttet OBOS Factoring AS ( GBF). For den aktive er mulighetene mange og lett tilgjengelige.
Rett i nærheten finner du treningssenteret 3T‑Saupstad,
Husebyhallen og Husebybadet. Området byr også på
Andre kostnader:
flotte grøntområder og rekreasjonsmuligheter.
TV/ Internett/ Bredbånd: Borettslaget har en kollektiv Saupstadparken fungerer som et grønt pusterom, mens
avtale for bredbånd

---

[d184_d184 | Side [1]]
rma: Takst-Forum Trøndelag AS Epost: jan@tft.no
Tittel: Adresse: Vestre Rosten 69, 7072 Heimdal
Egne premisser:
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet yttervegger,
takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.
Informasjon om boligen
Adresse: Reier Søbstads veg 16, 7078 Saupstad
Kommunenr: 5001 Gårdsnr: 197 Bruksnr: 540 Festenr:
Seksjonsnr:

---

[d184_d184 | Side [1]]
hvert eierskifte må erververen
utomhusanlegg. Siden borettslaget er nytt, vil første godkjennes av styret for å få rett til å bruke boligen.
regnskapsår avsluttes 31.12.2026, og det er ikke avholdt Styret kan nekte godkjenning når det er saklig grunn til
noe årsmøte enda. det. Nekter styret å godkjenne erververen, må melding
om dette komme fram til erververen senest 20 dager
Ettersom utbyggingsprosjektet «Saupstad Torg» fortsatt etter at søknaden om godkjenning kom fram til
er under utvikling, må kjøpere

---

[d184_d184 | Side [1]]
 på
545 (Tinglysingsgebyr BRL ‑ skjøte) felleslånet er flytende, og endringer i rentenivået vil
0 (Gebyr utlysing forkjøpsrett) påvirke størrelsen på felleskostnadene. Nedbetaling kan
skje 20.03.XX og 20.09.XX. Minimumsbeløpet for
10 250 (Omkostninger totalt) innbetaling er kr 60 000 pr. gang. Andelseieren vil da få
redusert sine kapitalutgifter (andel renter og avdrag) som
2 930 250 (Totalpris inkl. omkostninger) kreves inn sammen med felleskostnadene. Innbetaling
forutsetter at andelseier har inngått en

---

[d184_d184 | Side [1]]
.frihet til og med/ Første avdrag: Avdragsfrihet til nå foran en spennende fornyelse, med mål om å øke
31.12.2035 livskvaliteten for beboerne gjennom en helhetlig og
smart organisering av bygninger og funksjoner som
Det er mulighet for individuell nedbetaling av fellesgjeld. bidrar til attraktive og levende byrom. Hverdagen er enkel
Nedbetaling kan skje 20.03.XX og 20.09.XX. med kun et par minutters gange til dagligvarebutikker
som Coop Extra og Rema 1000, samt apotek

---

[d184_d184 | Side [1]]
ktet Saupstad Torg vil by
på et komplett servicetilbud.

## Side 21

(Ingen tekst ekstrahert)

## Side 22

(Ingen tekst ekstrahert)

## Side 23

(Ingen tekst ekstrahert)

## Side 24

(Ingen tekst ekstrahert)

## Side 25

(Ingen tekst ekstrahert)

## Side 26

Velkommen!

## Side 27

(Ingen tekst ekstrahert)

## Side 28

Plantegning

## Side 29

Plantegning

## Side 30

REIER SØBSTADS VEG 16
OM EIENDOMMEN

## Side 31

OM EIENDOMMEN
OM EIENDOMMEN
Felleskostnadene er fordelt slik:
Økonomi
‑ Kapitalkostnader

---

[d184_d184 | Side [1]]
elt
fjernet
Regulert fotgjengerfelt Regulert støyskjerm Måle- og avstandslinje
RpRegulertHøyde Bevaring av bygninger og Bolig
anlegg
Forretning Offentlig bebyggelse Offentlig bygg - institusjon
Offentlig bygg - kirke Bensinstasjon Jord- og skogbruk
Kjøreveg Gang-/sykkelveg Gangveg
Torg Park Turveg
Bolig/Offentlig Frisikt Boligbebyggelse-
blokkbebyggelse
Renovasjonsanlegg Uteoppholdsareal Kombinert bebyggelse og
anleggsformål
Kjøreveg Fortau Torg
Gang-/sykkelveg Annen veggrunn - tekniske Annen veggrunn -

---

[d184_d184 | Side [1]]
STAD
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 4163.33m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r20190029 Reier Søbstads veg gnr/bnr 197/535, 540, 579 m.fl. (8.12.2022) Boligbebyggelse-blokkbebyggelse 2137.84m2
5001 r20190029 Reier Søbstads veg gnr/bnr 197/535, 540,

---

[d184_d184 | Side [1]]
e god
bakkenivå bakkenivå nøyaktighet
Veg Kommunalveg gatenavn . Privatveg gatenavn .
Plan dispensasjon punkt RpFormålGrense RpGrense
RpSikringGrense Avkjørsel - både inn og Avkjørsel - kun innkjøring
utkjøring
Avkjørsel - kun utkjøring Eksisterende tre som skal Eiendomsgrense som skal
bevares oppheves
Byggegrense Planlagt bebyggelse Bebyggelse som inngår i
planen
Bebyggelse som forutsettes Frisiktlinje Regulert parkeringsfelt
fjernet
Regulert fotgjengerfelt Regulert støyskjerm Måle- og

---

[d184_d184 | Side [1]]
ertidig brukstillatelse når det gjenstår mindre vesentlig arbeid og
dokumentasjonen er tilfredsstillende. Vi viser til plan- og bygningsloven § 21-10.
Det er krav til at o_KV1, o_KV2, o_KV3 og o_KV4 med tilhørende sideareal og adkomster skal være
opparbeidet før ny bebyggelse BKB og BB1 og BB2 kan tas i bruk, jf. reguleringsplanen(r20190029)
§ 9.3. Sideareal til o_KV4 vil ikke kunne opparbeides grunnet framtidig bebyggelse i BKB. Det har
derfor blitt gitt midlertidig dispensasjon fra bestemmelsen i vedtak

---

[d184_d184 | Side [1]]
dringen (nord) Org.nr: 942 110 464
til Anton Bergs veg i tillegg til en delstrekning langs Øvre Bestemmelse om gjensidig rett
Flatåsveg. Formålet med planarbeidet er å sikre et Tillatt å bygge nærmere tomtegrensen enn 4 m
sammenhengende, trygt og enkelt sykkel‑ og gangtilbud Gjelder denne registerenheten med flere
med god fremkommelighet langs strekningen. I tillegg
ønsker en å knytte lokale sentrum Flatåsen og Saupstad 08.10.2025 ‑ Dokumentnr: 1208824 ‑ Bruksrett
bedre sammen. Kongsvegen utgjør i dag en

---

[d184_d184 | Side [1]]
 Torg
Gang-/sykkelveg Annen veggrunn - tekniske Annen veggrunn - grøntareal
anlegg
Kollektivholdeplass Parkering Park
RpFormålGrense RpGrense Parkeringshus/-anlegg
27.01.2026 16:01:00 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
88

## Side 89

Kommuneplanens arealdel
Eiendom: Gnr: 197 Bnr: 540 Fnr: 0 Snr: 0
Adresse: Reier Søbstads veg 14
Målestokk
7078 SAUPSTAD, m.fl.
Trondheim 1:5000
Annen info:
27.01.2026 16:00:38 Det kan forekomme feil eller manglende opplysninger i

---

[d184_d184 | Side [1]]
ide 87

Reguleringsplaner
Eiendom: Gnr: 197 Bnr: 540 Fnr: 0 Snr: 0
Adresse: Reier Søbstads veg 14
Målestokk
7078 SAUPSTAD, m.fl.
Trondheim 1:1000
Annen info:
27.01.2026 16:01:00 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
87

## Side 88

Tegnforklaring
RpOmråde igangsatt RpOmråde vedtatt linje - på RpOmråde vedtatt - under
bakkenivå bakkenivå
RpOmråde vedtatt - på RpOmråde vedtatt - under Eiendomsgrense god
bakkenivå bakkenivå nøyaktighet
Veg Kommunalveg gatenavn .

---

[d184_d184 | Side [1]]
BL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
27.01.2026 16:00:26 Side 1 av 2
85

## Side 86

5001 r20240029 Deler av Kongsvegen og Øvre- og Nedre Flatåsvegg
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Nei
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
27.01.2026 16:00:26 Side 2 av 2
86

## Side 87

Reguleringsplaner
Eiendom: Gnr: 197 Bnr: 540 Fnr: 0 Snr:

---

[d184_d184 | Side [1]]
137.84m2
5001 r20190029 Reier Søbstads veg gnr/bnr 197/535, 540, 579 m.fl. (8.12.2022) Frisikt 1.38m2
5001 r20190029 Reier Søbstads veg gnr/bnr 197/535, 540, 579 m.fl. (8.12.2022) Uteoppholdsareal 1441.52m2
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r1127ag Saupstad senter (25.9.2008)
r1127m Saupstad, gnr. 197/4 m.fl. (19.9.1974)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt

---

[d184_d184 | Side [1]]
nr: 1208824 ‑ Bruksrett
bedre sammen. Kongsvegen utgjør i dag en barriere som Rettighetshaver: Knr:5001 Gnr:197 Bnr:535
skal reduseres, samtidig som bussen må sikres god Bestemmelse om fellesrom
fremkommelighet og bedre adkomster til Bestemmelse om vedlikehold
bussholdeplasser.
07.05.1974 ‑ Dokumentnr: 6542 ‑ Registrering av grunn
Kopi av situasjonskart, målebrev, reguleringsplaner m/ Denne matrikkelenhet opprettet fra:
bestemmelser etc. ligger vedlagt i salgsoppgaven eller Knr:5001 Gnr:197 Bnr:499
kan fås

---

[d184_d184 | Side [1]]



 





84

## Side 85

Planstatus
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr Adresse
5001 - Trondheim 197 540 0 0 Reier Søbstads veg 14, 7078 SAUPSTAD
Reier Søbstads veg 14P, 7078 SAUPSTAD
Reier Søbstads veg 16, 7078 SAUPSTAD
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i

---

[d184_d184 | Side [1]]
dveg bru
Hovedvegnett sykkel Byggesone 1 Byggesone 2
Byggesone 3 Offentlig eller privat Framtidig næringsbebyggelse
tjenesteyting
Idrettsanlegg Grav og urnelund Blå/grønnstruktur
Framtidig blå/grønnstruktur LNFR
27.01.2026 16:00:38 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
90

## Side 91

91

## Side 92

92

## Side 93

93

## Side 94

94

## Side 95

95

## Side 96

96

## Side 97

97

## Side 98

98

## Side 99

99

## Side 100

100

## Side 101

101

## Side

---

[d184_d184 | Side [1]]
at det eksisterer følgende Bestemmelse om vedlikehold av anlegg/ ledninger
planleggingsarbeid på et område som berører Gjelder denne registerenheten med flere
eiendommen:
Plan‑ID: r20240029 ‑ Deler av Kongsvegen og Øvre‑ og 28.10.2024 ‑ Dokumentnr: 2154643 ‑ Bestemmelse om
Nedre Flatåsveg bebyggelse
Miljøpakken planlegger 1200 m sykkelveg med fortau Kan ikke slettes uten samtykke fra: Trondheim Kommune
langs østsiden av Kongsvegen fra Saupstadringen (nord) Org.nr: 942 110 464
til Anton Bergs veg i tillegg

---

[d184_d184 | Side [1]]
om
ubetenkelig, jf. plan- og bygningsloven § 21-10. Det gjenstår arbeid som har vesentlig betydning,
og Byggesakskontoret vurderer derfor at vi ikke kan gi midlertidig brukstillatelse.
Før Byggesakskontoret kan gi midlertidig brukstillatelse, må følgende gjenstående mangler
utbedres:
- Forhold knyttet til brannsikkerhet for tiltaket i sin helhet
- Oppføring av rekkverk på uteområdet
- Oppføring av ringeklokker
- Fjerning av avfall og byggeutstyr, slik at alle områder kan benyttes til tiltenkt bruk
Listen

---

[d184_d184 | Side [1]]
6 16:00:38 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
89

## Side 90

Tegnforklaring
KpOmråde kommuneplan Eiendomsgrense god Eiendomsgrense dårlig
gjeldende nøyaktighet nøyaktighet
Eiendomsgrense fiktiv Veg Område med innsigelse
Område for Hensyn friluftsliv (marka) Hensyn bevaring kulturmiljø
grunnvannsforsyning
Byggegrense - marka Turveg / turdrag Framtidig turveg / turdrag
Kollektivtrase Hovedveg Hovedveg bru
Hovedvegnett sykkel Byggesone 1 Byggesone 2
Byggesone 3

---

[d184_d184 | Side [1]]
or blitt gitt midlertidig dispensasjon fra bestemmelsen i vedtak BYGG-23/80065-57, den
08.12.2025. Søker bekrefter at øvrige arealer som nevnes i bestemmelsen har blitt opparbeidet.
Det søkes om midlertidig brukstillatelse for hus D og E, som ligger i henholdsvis BB1 og BB2, i
tillegg til tilhørende uteareal i f_BUT.
På bakgrunn av befaring den 09.12.2025 vurderer Byggesakskontoret at det kan gis midlertidig
brukstillatelse.
Det opplyses om følgende arbeid som gjenstår fram mot ferdigattest:
 Innenfor den

---

[d184_d184 | Side [1]]
 ligger i delfelt BKB
Dere må utføre arbeidet som gjenstår innen 01.12.2027.
GEBYRER OG VIDERE OPPFØLGING
Gebyrer og avgifter
Saksbehandling av plan- og bygningstjenester er gebyrbelagt og faktura vil bli ettersendt. Vi ber
om at dere betaler gebyrer og avgifter innen fristen. Ved en eventuell klage må også gebyrer og
avgifter betales.
Under er en oppstilling over bestemmelser i gebyrforskrift for plan- og bygningstjenester i
Trondheim kommune som legges til grunn for dette vedtaket:
§ 3-16 Midlertidig

---

[d184_d184 | Side [1]]
ring: Selger har tegnet
boligselgerforsikring som dekker selgers ansvar etter
avhendingsloven begrenset oppad kr. 20 000 000,‑.
Radonmåling
Egenerklæringsskjema er vedlagt salgsoppgaven og
Selger har ikke utført radonmåling. Det er ikke krav om interessenter oppfordres til å gjennomgå denne før bud
dette med mindre boligen er helt eller delvis utleid. inngis.
Boligkjøperforsikring: Kjøper har anledning til å tegne
Diverse
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Borettslagsmodellen innebærer

---

[d184_d184 | Side [1]]
te 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: AGD 1
90006250
:ecnerefer
tnemucoD
45

## Side 46

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4

---

[d184_d184 | Side [1]]
r vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei

---

[d184_d184 | Side [1]]
årlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12

---

[d184_d184 | Side [1]]
entet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
113

## Side 114

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge

---

[d184_d184 | Side [1]]
et registrert tegn til lekkasjer eller skader på vannrør? Nei
Er det redusert vanntrykk ved prøving av to tappesteder samtidig? Nei
Er det manglende tilgjengelighet til stoppekran? Nei
Er det dårlig funksjon på stoppekran? Nei
Oppsummering av vannledninger TG-0
Ingen symptom på skade.
5.7 Elektrisk
Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Automatsikringer
Har eier opplyst om arbeider utført etter opprinnelig byggeår?

---

[d184_d184 | Side [1]]
på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Nei
Oppsummering av overflater TG-0
Fallforhold er i henhold til forskrift.
Membran,

---

[d184_d184 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d184_d184 | Side [1]]
atkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr

---

[d184_d184 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d184_d184 | Side [1]]
lasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det

---

[d184_d184 | Side [1]]
joner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be eieren
håndverkertjenester dokumentere bruken av kvalifiserte håndverkere. Som dokumentasjon regnes blant annet skriftlig
bekreftelse fra den eller de håndverkerne som ble brukt.
Hvordan undersøkelsene skal Med mindre det fremgår at et rom eller en bygningsdel skal undersøkes med målinger, at det skal bores
hull, at det skal stikkes i treverk eller annet, skal den

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Høy fellesgjeld med avdragsfri periode – risiko for betydelig økning i felleskostnader etter 2035",
      "evidence": [
        "Andel av fellesgjeld: kr 2 030 000",
        "Felleslånet har en avdragsfri periode frem til 31.12.2035. Etter denne datoen vil kapitalkostnadene øke når avdragene begynner å løpe og dette vil medføre en økning av felleskostnadene.",
        "Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.",
        "Felleskostnader kr 11 006,- pr. mnd",
        "Kapitalkostnader lån, andel fellesgjeld: kr 8 272,25 pr. mnd – utgjør ca. 75 % av totale felleskostnader"
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Nyetablert borettslag uten avholdt årsmøte, godkjent regnskap eller husordensregler – begrenset innsyn i økonomi og drift",
      "evidence": [
        "Dette er et nyetablert borettslag. Årsmøte er ennå ikke avholdt, og årsregnskap er derfor ikke utarbeidet.",
        "Borettslaget har ikke utarbeidet husordensregler.",
        "Første regnskapsår avsluttes 31.12.2026, og det er ikke avholdt noe årsmøte enda."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Kun midlertidig brukstillatelse er gitt – ferdigattest foreligger ikke, og det gjenstår arbeid med frist til 01.12.2027",
      "evidence": [
        "På bakgrunn av befaring den 09.12.2025 vurderer Byggesakskontoret at det kan gis midlertidig brukstillatelse.",
        "Det opplyses om følgende arbeid som gjenstår fram mot ferdigattest.",
        "Dere må utføre arbeidet som gjenstår innen 01.12.2027.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja"
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Gjenstående mangler som hindret midlertidig brukstillatelse – brannsikkerhet, rekkverk, ringeklokker og byggeavfall",
      "evidence": [
        "Byggesakskontoret vurderer derfor at vi ikke kan gi midlertidig brukstillatelse.",
        "Før Byggesakskontoret kan gi midlertidig brukstillatelse, må følgende gjenstående mangler utbedres: Forhold knyttet til brannsikkerhet for tiltaket i sin helhet, Oppføring av rekkverk på uteområdet, Oppføring av ringeklokker, Fjerning av avfall og byggeutstyr, slik at alle områder kan benyttes til tiltenkt bruk."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Pågående byggeaktivitet i området – kjøper må forvente anleggsarbeid, støy og ulemper i en periode",
      "evidence": [
        "Ettersom utbyggingsprosjektet «Saupstad Torg» fortsatt er under utvikling, må kjøpere være forberedt på byggeaktivitet i området.",
        "I henhold til vedtektene har utbygger rett til å utføre nødvendige arbeider for å ferdigstille prosjektet. Dette inkluderer rett til adkomst, plassering av utstyr og anleggsmaskiner på eiendommen.",
        "Borettslaget og andelseierne er forpliktet til å medvirke til en helhetlig gjennomføring av utbyggingen. Disse midlertidige bestemmelsene gjelder frem til siste byggetrinn er ferdigstilt og overtatt."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R6",
      "description": "Igangsatt reguleringsarbeid (r20240029) langs Kongsvegen kan påvirke omgivelsene og tilgjengeligheten til eiendommen",
      "evidence": [
        "Plan-ID: r20240029 – Deler av Kongsvegen og Øvre- og Nedre Flatåsveg",
        "Miljøpakken planlegger 1200 m sykkelveg med fortau langs østsiden av Kongsvegen fra Saupstadringen (nord) til Anton Bergs veg.",
        "Kongsvegen utgjør i dag en barriere som skal reduseres, samtidig som bussen må sikres god fremkommelighet og bedre adkomster til bussholdeplasser.",
        "Planarbeidet er kun igangsatt (ikke vedtatt) – konsekvensene er usikre og kan være både positive og negative for eiendommen."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R7",
      "description": "Legalpant – borettslaget har prioritet foran tinglyste lån ved manglende betaling av felleskostnader",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Risiko for økte felleskostnader ved mislighold fra andre andelshavere eller usolgte andeler i borettslaget",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
        "Borettslaget er tilknyttet OBOS Factoring AS (GBF) – sikringsordning som delvis reduserer denne risikoen."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R9",
      "description": "Flytende rente på felleslånet gir usikkerhet om fremtidige felleskostnader",
      "evidence": [
        "Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.",
        "På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R10",
      "description": "Uklar bodtilhørighet – det er ikke kjent hvilken bod i kjelleren som tilhører leiligheten",
      "evidence": [
        "Flere boder i kjeller ble oppmålt og de varierte mellom 2,5m² og 5m², men det er ikke kjent hvilken som eventuelt tilhører leiligheten."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen er avsatt til sentrumsformål – framtidig i kommuneplanen, noe som kan medføre fremtidige endringer i arealbruk og omgivelser",
      "evidence": [
        "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1 og sentrumsformål – framtidig.",
        "Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Sentrumsformål - Framtidig, Kommuneplanens arealdel 2022-2034 (27.3.2025).",
        "Eiendommen er regulert til boligbebyggelse-blokkbebyggelse etter gjeldende reguleringsplan r20190029 – det er altså et sprik mellom gjeldende regulering og kommuneplanens fremtidige arealformål."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R12",
      "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvar og kostnader påhviler eier/borettslaget",
      "evidence": [
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Selger har ikke utført radonmåling – potensiell helserisiko er ikke avklart",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Egenerklæringsskjema er vedlagt salgsoppgaven."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R14",
      "description": "Tilstandsrapporten vurderer ikke bygningsdeler under borettslagets ansvarsområde – yttervegger, tak, drenering, grunnmur mv. er ikke undersøkt",
      "evidence": [
        "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.",
        "Boligen har ingen bygningsdeler med tilstandsgrad TG1, TG2 eller TG3 – alle 13 vurderte bygningsdeler er TG-0, men dette gjelder kun leilighetens egne bygningsdeler."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R15",
      "description": "Styregodkjenning kreves ved kjøp – styret kan nekte godkjenning av ny eier, noe som kan forsinke eller hindre gjennomføring av handelen",
      "evidence": [
        "Ved hvert eierskifte må erververen godkjennes av styret for å få rett til å bruke boligen. Styret kan nekte godkjenning når det er saklig grunn til det. Nekter styret å godkjenne erververen, må melding om dette komme fram til erververen senest 20 dager etter at søknaden om godkjenning kom fram til borettslaget.",
        "I motsatt fall skal godkjenning regnes som gitt."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R16",
      "description": "Omfattende tinglyste heftelser og rettigheter på eiendommen – inkludert bestemmelser om vedlikehold, adkomstrett, bruksrett, fordeling av kostnader og felles tekniske rom",
      "evidence": [
        "På eiendommen er det tinglyst følgende heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting.",
        "Bestemmelse om vedlikehold, Bestemmelse om fordeling av kostnader, Bestemmelse om felles tekniske rom, sykkelparkering og boder, Bestemmelse om adkomstrett, Bruksrett.",
        "Kan ikke slettes uten samtykke fra: Trondheim Kommune, Org.nr: 942 110 464.",
        "Bestemmelse om parkering (Dokumentnr: 1208790), Bestemmelse om gjesterom, Bestemmelse om fellesrom – heftelsene er svært omfattende og berører mange andeler (Snr:1–44)."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R17",
      "description": "Ny risiko: Restriksjoner på endringer av fellesarealer og fasader – begrenser eiers råderett over egen bolig",
      "evidence": [
        "Det er viktig å merke seg at det er restriksjoner på endringer av fellesarealer og fasader. Montering av blant annet varmepumper, solskjerming, gjerder, plattinger, innglassing av [balkong]..."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R18",
      "description": "Ny risiko: A-konto fjernvarme avregnes mot faktisk forbruk – avtale om antall avregninger er ikke på plass, noe som gir usikkerhet om løpende kostnader",
      "evidence": [
        "A konto Fjernvarme: kr 375,-",
        "A-konto fjernvarme vil avregnes mot faktisk forbruk. Avtale er ikke på plass enda, så det er ikke satt hvor mange avregninger det vil bli per år."
      ],
      "source_documents": [
        "d184_d184"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    }
  ],
  "re_retrieval_queries": [
    "Saupstad Torg ferdigstillelse tidslinje siste byggetrinn",
    "fellesgjeld total borettslaget SAUPSTAD TORG HUS D OG E rente vilkår OBOS",
    "midlertidig brukstillatelse ferdigattest gjenstående arbeid BKB delfelt",
    "fjernvarme avtale avregning felleskostnader",
    "restriksjoner fasadeendringer varmepumpe vedtekter borettslaget",
    "parkeringsrettigheter borettslaget Saupstad Torg",
    "forkjøpsrett borettslaget OBOS",
    "energimerke B lys grønn oppvarming fjernvarme"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld / avdragsfri periode:** Meget godt dokumentert. Fellesgjeld kr 2 030 000, avdragsfrihet til 31.12.2035, kapitalkostnadene utgjør kr 8 272,25 av totale felleskostnader på kr 11 006 pr. mnd (ca. 75 %). Confidence justeres marginalt opp til 0.98.\n\n**R2 – Nyetablert borettslag:** Godt dokumentert. Tre separate evidenspunkter bekrefter manglende regnskap, husordensregler og årsmøte. Confidence opprettholdes 0.95.\n\n**R3 – Midlertidig brukstillatelse:** Godt dokumentert. Dokumentene viser at midlertidig brukstillatelse ble gitt etter befaring 09.12.2025, men ferdigattest gjenstår med frist 01.12.2027. Confidence justeres marginalt opp til 0.97.\n\n**R4 – Gjenstående mangler:** Godt dokumentert med konkret liste fra Byggesakskontoret. Confidence opprettholdes 0.95. Merk: disse manglene gjaldt FØR midlertidig brukstillatelse ble gitt – det er noe uklart om alle er utbedret. Bør undersøkes nærmere.\n\n**R5 – Byggeaktivitet:** Godt dokumentert. Vedtektene gir utbygger rett til adkomst og plassering av maskiner. Confidence justeres opp til 0.95.\n\n**R6 – Reguleringsarbeid r20240029:** Dokumentert som igangsatt planarbeid (ikke vedtatt plan). Konsekvensene er usikre – kan være positive (bedre sykkelinfrastruktur) eller negative (anleggsarbeid, støy). Confidence justeres ned til 0.75 da risikoen er mer uklar.\n\n**R7 – Legalpant:** Godt dokumentert med to separate evidenspunkter. Confidence opprettholdes 0.92.\n\n**R8 – Mislighold fra andre andelshavere:** Godt dokumentert. Borettslaget er tilknyttet OBOS Factoring AS (GBF) som sikringsordning, noe som delvis reduserer risikoen. Confidence opprettholdes 0.88.\n\n**R9 – Flytende rente:** Godt dokumentert. Confidence opprettholdes 0.93.\n\n**R10 – Uklar bodtilhørighet:** Godt dokumentert. Confidence opprettholdes 0.88.\n\n**R11 – Sentrumsformål framtidig:** Dokumentert. Sprik mellom gjeldende regulering (boligbebyggelse-blokkbebyggelse) og kommuneplanens fremtidige arealformål (sentrumsformål) er en reell risiko. Confidence opprettholdes 0.78.\n\n**R12 – Private stikkledninger:** Godt dokumentert. Confidence opprettholdes 0.82.\n\n**R13 – Radonmåling:** Dokumentert. Risikoen er noe begrenset da boligen er ny (byggeår 2025) og det ikke er utleiedel. Confidence justeres ned til 0.72.\n\n**R14 – Tilstandsrapport dekker ikke borettslagets bygningsdeler:** Godt dokumentert. Alle 13 vurderte bygningsdeler er TG-0, men dette gjelder kun leilighetens egne deler. Confidence justeres marginalt opp til 0.87.\n\n**R15 – Styregodkjenning:** Godt dokumentert. Confidence opprettholdes 0.80.\n\n**R16 – Tinglyste heftelser:** Godt dokumentert. Heftelsene er svært omfattende og berører mange andeler. Confidence justeres opp til 0.87.\n\n**Nye risikoer identifisert:**\n\n**R17 – Restriksjoner på fasadeendringer:** Dokumentert i salgsoppgaven. Begrenser eiers råderett. Confidence 0.82.\n\n**R18 – A-konto fjernvarme uten avtale:** Dokumentert. Avtale om avregningsfrekvens er ikke på plass. Confidence 0.78.\n\n**Mulige manglende risikoer som bør undersøkes:**\n- Parkeringsrettigheter: Er det parkering inkludert? Bestemmelse om parkering er tinglyst (Dokumentnr: 1208790).\n- Forkjøpsrett OBOS: Gjelder forkjøpsrett for OBOS-medlemmer?\n- Energimerke B og fjernvarme: Avhengighet av fjernvarmeleverandør og fremtidige prisøkninger.\n- Ferdigstillelse av BKB-delfelt: Gjenstående arbeid i delfelt BKB kan påvirke utearealer.\n"
}

## Raw Response
```json
{
  "id": "msg_017t9GmC3pybyhy3rYLy6L5u",
  "container": null,
  "content": [
    {
      "id": "toolu_016UZN1wHjLCGJwJ9tL2smYD",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Høy fellesgjeld med avdragsfri periode – risiko for betydelig økning i felleskostnader etter 2035",
            "evidence": [
              "Andel av fellesgjeld: kr 2 030 000",
              "Felleslånet har en avdragsfri periode frem til 31.12.2035. Etter denne datoen vil kapitalkostnadene øke når avdragene begynner å løpe og dette vil medføre en økning av felleskostnadene.",
              "Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.",
              "Felleskostnader kr 11 006,- pr. mnd",
              "Kapitalkostnader lån, andel fellesgjeld: kr 8 272,25 pr. mnd – utgjør ca. 75 % av totale felleskostnader"
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Nyetablert borettslag uten avholdt årsmøte, godkjent regnskap eller husordensregler – begrenset innsyn i økonomi og drift",
            "evidence": [
              "Dette er et nyetablert borettslag. Årsmøte er ennå ikke avholdt, og årsregnskap er derfor ikke utarbeidet.",
              "Borettslaget har ikke utarbeidet husordensregler.",
              "Første regnskapsår avsluttes 31.12.2026, og det er ikke avholdt noe årsmøte enda."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Kun midlertidig brukstillatelse er gitt – ferdigattest foreligger ikke, og det gjenstår arbeid med frist til 01.12.2027",
            "evidence": [
              "På bakgrunn av befaring den 09.12.2025 vurderer Byggesakskontoret at det kan gis midlertidig brukstillatelse.",
              "Det opplyses om følgende arbeid som gjenstår fram mot ferdigattest.",
              "Dere må utføre arbeidet som gjenstår innen 01.12.2027.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Nei Ja"
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Gjenstående mangler som hindret midlertidig brukstillatelse – brannsikkerhet, rekkverk, ringeklokker og byggeavfall",
            "evidence": [
              "Byggesakskontoret vurderer derfor at vi ikke kan gi midlertidig brukstillatelse.",
              "Før Byggesakskontoret kan gi midlertidig brukstillatelse, må følgende gjenstående mangler utbedres: Forhold knyttet til brannsikkerhet for tiltaket i sin helhet, Oppføring av rekkverk på uteområdet, Oppføring av ringeklokker, Fjerning av avfall og byggeutstyr, slik at alle områder kan benyttes til tiltenkt bruk."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Pågående byggeaktivitet i området – kjøper må forvente anleggsarbeid, støy og ulemper i en periode",
            "evidence": [
              "Ettersom utbyggingsprosjektet «Saupstad Torg» fortsatt er under utvikling, må kjøpere være forberedt på byggeaktivitet i området.",
              "I henhold til vedtektene har utbygger rett til å utføre nødvendige arbeider for å ferdigstille prosjektet. Dette inkluderer rett til adkomst, plassering av utstyr og anleggsmaskiner på eiendommen.",
              "Borettslaget og andelseierne er forpliktet til å medvirke til en helhetlig gjennomføring av utbyggingen. Disse midlertidige bestemmelsene gjelder frem til siste byggetrinn er ferdigstilt og overtatt."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R6",
            "description": "Igangsatt reguleringsarbeid (r20240029) langs Kongsvegen kan påvirke omgivelsene og tilgjengeligheten til eiendommen",
            "evidence": [
              "Plan-ID: r20240029 – Deler av Kongsvegen og Øvre- og Nedre Flatåsveg",
              "Miljøpakken planlegger 1200 m sykkelveg med fortau langs østsiden av Kongsvegen fra Saupstadringen (nord) til Anton Bergs veg.",
              "Kongsvegen utgjør i dag en barriere som skal reduseres, samtidig som bussen må sikres god fremkommelighet og bedre adkomster til bussholdeplasser.",
              "Planarbeidet er kun igangsatt (ikke vedtatt) – konsekvensene er usikre og kan være både positive og negative for eiendommen."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R7",
            "description": "Legalpant – borettslaget har prioritet foran tinglyste lån ved manglende betaling av felleskostnader",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader. Dette betyr at borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.",
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Risiko for økte felleskostnader ved mislighold fra andre andelshavere eller usolgte andeler i borettslaget",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.",
              "Borettslaget er tilknyttet OBOS Factoring AS (GBF) – sikringsordning som delvis reduserer denne risikoen."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R9",
            "description": "Flytende rente på felleslånet gir usikkerhet om fremtidige felleskostnader",
            "evidence": [
              "Renten på felleslånet er flytende, og endringer i rentenivået vil påvirke størrelsen på felleskostnadene.",
              "På grunn av prisstigning og renteøkning tas det forbehold om at felleskostnader kan øke."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R10",
            "description": "Uklar bodtilhørighet – det er ikke kjent hvilken bod i kjelleren som tilhører leiligheten",
            "evidence": [
              "Flere boder i kjeller ble oppmålt og de varierte mellom 2,5m² og 5m², men det er ikke kjent hvilken som eventuelt tilhører leiligheten."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen er avsatt til sentrumsformål – framtidig i kommuneplanen, noe som kan medføre fremtidige endringer i arealbruk og omgivelser",
            "evidence": [
              "Eiendommen er i kommuneplanens arealdel avsatt til byggesone 1 og sentrumsformål – framtidig.",
              "Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Sentrumsformål - Framtidig, Kommuneplanens arealdel 2022-2034 (27.3.2025).",
              "Eiendommen er regulert til boligbebyggelse-blokkbebyggelse etter gjeldende reguleringsplan r20190029 – det er altså et sprik mellom gjeldende regulering og kommuneplanens fremtidige arealformål."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R12",
            "description": "Stikkledninger for vann og avløp er private – vedlikeholdsansvar og kostnader påhviler eier/borettslaget",
            "evidence": [
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Selger har ikke utført radonmåling – potensiell helserisiko er ikke avklart",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Egenerklæringsskjema er vedlagt salgsoppgaven."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R14",
            "description": "Tilstandsrapporten vurderer ikke bygningsdeler under borettslagets ansvarsområde – yttervegger, tak, drenering, grunnmur mv. er ikke undersøkt",
            "evidence": [
              "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/borettslagets ansvarsområde. Det gjelder blant annet yttervegger, takkonstruksjon, taktekking, drenering, grunnmur, grunn/fundamenter, felles trapper, felles kjeller, og felles loft.",
              "Boligen har ingen bygningsdeler med tilstandsgrad TG1, TG2 eller TG3 – alle 13 vurderte bygningsdeler er TG-0, men dette gjelder kun leilighetens egne bygningsdeler."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R15",
            "description": "Styregodkjenning kreves ved kjøp – styret kan nekte godkjenning av ny eier, noe som kan forsinke eller hindre gjennomføring av handelen",
            "evidence": [
              "Ved hvert eierskifte må erververen godkjennes av styret for å få rett til å bruke boligen. Styret kan nekte godkjenning når det er saklig grunn til det. Nekter styret å godkjenne erververen, må melding om dette komme fram til erververen senest 20 dager etter at søknaden om godkjenning kom fram til borettslaget.",
              "I motsatt fall skal godkjenning regnes som gitt."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R16",
            "description": "Omfattende tinglyste heftelser og rettigheter på eiendommen – inkludert bestemmelser om vedlikehold, adkomstrett, bruksrett, fordeling av kostnader og felles tekniske rom",
            "evidence": [
              "På eiendommen er det tinglyst følgende heftelser og rettigheter som følger eiendommens matrikkel ved overskjøting.",
              "Bestemmelse om vedlikehold, Bestemmelse om fordeling av kostnader, Bestemmelse om felles tekniske rom, sykkelparkering og boder, Bestemmelse om adkomstrett, Bruksrett.",
              "Kan ikke slettes uten samtykke fra: Trondheim Kommune, Org.nr: 942 110 464.",
              "Bestemmelse om parkering (Dokumentnr: 1208790), Bestemmelse om gjesterom, Bestemmelse om fellesrom – heftelsene er svært omfattende og berører mange andeler (Snr:1–44)."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R17",
            "description": "Ny risiko: Restriksjoner på endringer av fellesarealer og fasader – begrenser eiers råderett over egen bolig",
            "evidence": [
              "Det er viktig å merke seg at det er restriksjoner på endringer av fellesarealer og fasader. Montering av blant annet varmepumper, solskjerming, gjerder, plattinger, innglassing av [balkong]..."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R18",
            "description": "Ny risiko: A-konto fjernvarme avregnes mot faktisk forbruk – avtale om antall avregninger er ikke på plass, noe som gir usikkerhet om løpende kostnader",
            "evidence": [
              "A konto Fjernvarme: kr 375,-",
              "A-konto fjernvarme vil avregnes mot faktisk forbruk. Avtale er ikke på plass enda, så det er ikke satt hvor mange avregninger det vil bli per år."
            ],
            "source_documents": [
              "d184_d184"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          }
        ],
        "re_retrieval_queries": [
          "Saupstad Torg ferdigstillelse tidslinje siste byggetrinn",
          "fellesgjeld total borettslaget SAUPSTAD TORG HUS D OG E rente vilkår OBOS",
          "midlertidig brukstillatelse ferdigattest gjenstående arbeid BKB delfelt",
          "fjernvarme avtale avregning felleskostnader",
          "restriksjoner fasadeendringer varmepumpe vedtekter borettslaget",
          "parkeringsrettigheter borettslaget Saupstad Torg",
          "forkjøpsrett borettslaget OBOS",
          "energimerke B lys grønn oppvarming fjernvarme"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Høy fellesgjeld / avdragsfri periode:** Meget godt dokumentert. Fellesgjeld kr 2 030 000, avdragsfrihet til 31.12.2035, kapitalkostnadene utgjør kr 8 272,25 av totale felleskostnader på kr 11 006 pr. mnd (ca. 75 %). Confidence justeres marginalt opp til 0.98.\n\n**R2 – Nyetablert borettslag:** Godt dokumentert. Tre separate evidenspunkter bekrefter manglende regnskap, husordensregler og årsmøte. Confidence opprettholdes 0.95.\n\n**R3 – Midlertidig brukstillatelse:** Godt dokumentert. Dokumentene viser at midlertidig brukstillatelse ble gitt etter befaring 09.12.2025, men ferdigattest gjenstår med frist 01.12.2027. Confidence justeres marginalt opp til 0.97.\n\n**R4 – Gjenstående mangler:** Godt dokumentert med konkret liste fra Byggesakskontoret. Confidence opprettholdes 0.95. Merk: disse manglene gjaldt FØR midlertidig brukstillatelse ble gitt – det er noe uklart om alle er utbedret. Bør undersøkes nærmere.\n\n**R5 – Byggeaktivitet:** Godt dokumentert. Vedtektene gir utbygger rett til adkomst og plassering av maskiner. Confidence justeres opp til 0.95.\n\n**R6 – Reguleringsarbeid r20240029:** Dokumentert som igangsatt planarbeid (ikke vedtatt plan). Konsekvensene er usikre – kan være positive (bedre sykkelinfrastruktur) eller negative (anleggsarbeid, støy). Confidence justeres ned til 0.75 da risikoen er mer uklar.\n\n**R7 – Legalpant:** Godt dokumentert med to separate evidenspunkter. Confidence opprettholdes 0.92.\n\n**R8 – Mislighold fra andre andelshavere:** Godt dokumentert. Borettslaget er tilknyttet OBOS Factoring AS (GBF) som sikringsordning, noe som delvis reduserer risikoen. Confidence opprettholdes 0.88.\n\n**R9 – Flytende rente:** Godt dokumentert. Confidence opprettholdes 0.93.\n\n**R10 – Uklar bodtilhørighet:** Godt dokumentert. Confidence opprettholdes 0.88.\n\n**R11 – Sentrumsformål framtidig:** Dokumentert. Sprik mellom gjeldende regulering (boligbebyggelse-blokkbebyggelse) og kommuneplanens fremtidige arealformål (sentrumsformål) er en reell risiko. Confidence opprettholdes 0.78.\n\n**R12 – Private stikkledninger:** Godt dokumentert. Confidence opprettholdes 0.82.\n\n**R13 – Radonmåling:** Dokumentert. Risikoen er noe begrenset da boligen er ny (byggeår 2025) og det ikke er utleiedel. Confidence justeres ned til 0.72.\n\n**R14 – Tilstandsrapport dekker ikke borettslagets bygningsdeler:** Godt dokumentert. Alle 13 vurderte bygningsdeler er TG-0, men dette gjelder kun leilighetens egne deler. Confidence justeres marginalt opp til 0.87.\n\n**R15 – Styregodkjenning:** Godt dokumentert. Confidence opprettholdes 0.80.\n\n**R16 – Tinglyste heftelser:** Godt dokumentert. Heftelsene er svært omfattende og berører mange andeler. Confidence justeres opp til 0.87.\n\n**Nye risikoer identifisert:**\n\n**R17 – Restriksjoner på fasadeendringer:** Dokumentert i salgsoppgaven. Begrenser eiers råderett. Confidence 0.82.\n\n**R18 – A-konto fjernvarme uten avtale:** Dokumentert. Avtale om avregningsfrekvens er ikke på plass. Confidence 0.78.\n\n**Mulige manglende risikoer som bør undersøkes:**\n- Parkeringsrettigheter: Er det parkering inkludert? Bestemmelse om parkering er tinglyst (Dokumentnr: 1208790).\n- Forkjøpsrett OBOS: Gjelder forkjøpsrett for OBOS-medlemmer?\n- Energimerke B og fjernvarme: Avhengighet av fjernvarmeleverandør og fremtidige prisøkninger.\n- Ferdigstillelse av BKB-delfelt: Gjenstående arbeid i delfelt BKB kan påvirke utearealer.\n"
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
    "input_tokens": 21649,
    "output_tokens": 5645,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
