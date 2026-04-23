# Trace: agentic_reflecting_iter1
- **Run ID:** ce5b1541-24d8-4519-9208-cc79f4cf6695
- **Tidspunkt:** 2026-03-24T18:55:46.646052+00:00
- **Varighet:** 129.43s
- **Input tokens:** 24641
- **Output tokens:** 6165

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
Risiko 1: Ulovlig bruksendring av innvendig bod: Bod er innlemmet i stue og gjort om til rom for varig opphold uten at det fremgår klart om dette er godkjent av bygningsmyndighetene.
  Confidence: 0.6
  Evidens: Innvendig bod er innlemmet i stue og gjort om til rom for varig opphold.; Jf. byggesak 202457339 i Oslo Kommune. Tillatelse gitt av Oslo Kommune 29.07.2024. Ferdigattest utstedt av Oslo Kommune 25.10.2024.

Risiko 2: Pågående tvist mellom sameiet og utbygger om misfarging av glassrekkverk på balkonger. Tvisten er innstilt i forliksrådet og kan ende i domstol, noe som kan medføre kostnader for sameiet og potensielt økte felleskostnader.
  Confidence: 0.85
  Evidens: Sameiet har en tvist med utbygger om misfarging av glassrekverk på balkonger, men dette angår ikke denne leiligheten siden den har markterasse uten rekkverk.; Saken ble innstilt i forliksrådet høsten 2024. Det betyr at Forliksrådet mener at saken har et økonomisk omfang som bør vurderes avgjort i en domstol.

Risiko 3: Felleskostnadene ble økt med 20–25 % fra 1. januar 2025 og kan øke ytterligere. Sameiet har hatt ekstraordinære utgifter i de tre første driftsårene og har tidligere vært avhengig av kassakreditt.
  Confidence: 0.9
  Evidens: Høsten 2024 gjennomgikk styret budsjettet, noe som førte til en beslutning om å øke felleskostnadene med 20 % fra 1. januar 2025.; Økningen i felleskostnadene skyldes høyere driftsutgifter for sameiets ordinære drift og generell prisstigning på grunn av inflasjon.; I løpet av de tre første driftsårene etter overtakelsen har sameiet hatt ekstraordinære utgifter.; Budsjettet er basert på 25 % økning av felleskostnadene fra 01.01.2025.

Risiko 4: Solidaransvar for vedlikehold av bro: Sameiet er solidarisk ansvarlig for drift, vedlikehold og nødvendige oppgraderinger av broen over gnr./bnr. 129/115, noe som kan medføre uforutsette kostnader.
  Confidence: 0.85
  Evidens: Sameiet er også solidarisk ansvarlig, sammen med Gnr./bnr.129/32 og 129/34 for all drift, vedlikehold og nødvendige oppgraderinger av broen som er oppført over knr. gnr./bnr. 129/115, jfr tinglyst erklæring av 11.05.2021.; Uavhengig av skyld er eier av gnr./bnr.129/32 og 129/34 og 129/1 ansvarlig for eventuelle skader på broen som påføres eiendommen.

Risiko 5: Pågående utbyggingsprosjekt 'Tiedemannsfabrikken Felt G' med planlagt bebyggelse på ca. 317 boliger. Utbygger Selvaag Bolig ASA har rett til å utføre byggearbeider på eiendommen, noe som kan medføre støy, anleggstrafikk og ulemper for beboerne i en lengre periode.
  Confidence: 0.9
  Evidens: Utbyggingsprosjektet 'Tiedemannsfabrikken Felt G' er planlagt gjennomført ved utbygging i flere byggetrinn, med en planlagt bebyggelse på ca 317 boliger med 1 eller flere næringsseksjoner med underjordisk p-kjeller.; Selvaag Bolig ASA har som utbygger av eiendommen gnr 129 bnr 1 rett til å utføre nødvendige bygningsmessige arbeider for å fullføre prosjektet.; Denne retten omfatter etablering av adkomst over og under bakken, etablering av grøntanlegg, sammenføyning og tilknytning av bygningsmassen.

Risiko 6: Planlagt bekkeåpning av Hovinbekken kan påvirke eiendommene i området. Dagens bruk på nærliggende eiendommer forutsettes videreført, men driftsmulighetene kan bli påvirket.
  Confidence: 0.7
  Evidens: Eiendoms- og byfornyelsesetaten i Oslo kommune ønsker å omregulere Gladengveien 18 mfl. fra industri til grønnstruktur. Hensikten med planarbeidet er å legge til rette for gjenåpning av resterende del av hovedløpet for Hovinbekken på Ensjø.; Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.

Risiko 7: Støyproblem fra Aquashine i Gladengveien er uavklart. Saken er til behandling hos kommunen og utfallet er usikkert, noe som kan påvirke bomiljøet.
  Confidence: 0.75
  Evidens: Styret har sendt en redegjørelse til kommunen om støyproblemet fra Aquashine i Gladengveien.; Etter styrets innspill ble varslingen til slutt gjennomført, men saken er fortsatt uavklart. Vi venter nå på kommunens behandling og avgjørelse om Aquashines videre drift.

Risiko 8: Trafikksikkerhetsbekymringer knyttet til innkjøringsveien (gnr. 129, bnr. 117). Bymiljøetaten ser ikke behov for tiltak til tross for beboernes innspill, og saken er uavklart.
  Confidence: 0.65
  Evidens: Styret har fulgt opp beboernes bekymringer om innkjøringsveien overfor bymiljøetaten, utbygger og gårdeier.; Bymiljøetaten har redegjort for saken, men ser ikke behov for tiltak, til tross for beboernes innspill.

Risiko 9: Radonmåling er ikke utført av selger. Dette er en potensiell helserisiko, særlig dersom boligen leies ut.
  Confidence: 0.75
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 10: Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette vedlikeholdskostnader.
  Confidence: 0.7
  Evidens: Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 11: Legalpant: Kommunen og sameiet har legalpant i seksjonen med høy prioritet, noe som kan påvirke kjøpers finansiering og prioritet for egne lån.
  Confidence: 0.8
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.

Risiko 12: Området er under utvikling og endringer og oppføring av nye bygg vil kunne skje. Dette kan påvirke utsikt, sol, støy og bomiljø for kjøper.
  Confidence: 0.8
  Evidens: Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.; Det anbefales spesielt å følge med på de planer og prosesser som pågår for området via Oslo kommune, Plan- og bygningsetaten.

Risiko 13: Skjeggkre er observert på balkong og det er satt inn forebyggende tiltak utendørs. Dette kan indikere risiko for spredning til boligen.
  Confidence: 0.8
  Evidens: Kjenner du til om det er/har vært skjeggkre i boligen? (spørsmål 27 – svar Ja med beskrivelse); Vet at det er satt inn forebyggende tiltak utendørs av skadedyrfirma.; Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? (spørsmål 28)

Risiko 14: Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Dette innebærer at kjøper ikke har den beskyttelsen en sikringsordning ville gitt ved mislighold av fellesgjeld.
  Confidence: 0.7
  Evidens: Ikke tilknyttet sikringsordning.

Risiko 15: Planlagt ny barneskole og ungdomsskole på Ensjø (Grenseveien 73, 91 og 95) kan medføre økt trafikk og støy i nærområdet i bygge- og driftsperioden.
  Confidence: 0.55
  Evidens: Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.; Den nye barneskolen planlegges med fire paralleller (B4) for 840 elever med flerbrukshall, dansesal og en spesialavdeling for inntil 16 elever.

Dokumentkontekst:
[d072_d072 | Side [1]]
sterende del av hovedløpet for GJELDER DENNE REGISTERENHETEN MED FLERE
Hovinbekken på Ensjø i tråd med traseen i Veiledende Overført fra: KNR: 0301 GNR: 129 BNR: 1
prinsipplan for offentlige rom (VPOR Ensjø).
46

## Side 47

OM EIENDOMMEN
2018/ 715230‑1/ 200 02.05.2018 sameieforholdet, som felleskostnader. Legalpant er pant
ERKLÆRING/ AVTALE som ikke vises i grunnboksutskriften, og har prioritet
Rettighetshaver allmennheten foran tinglyste lån, for eksempel banklån på seksjonen.
Bestemmelse om fri ferdsel

---

[d072_d072 | Side [1]]
n, for eksempel banklån på seksjonen.
Bestemmelse om fri ferdsel Legalpant til kommunen har høyere prioritet enn
GJELDER DENNE REGISTERENHETEN MED FLERE legalpant til sameiet.
KAN IKKE SLETTES UTEN SAMTYKKE FRA: OSLO
KOMMUNE
Vei, vann og avløp
ORG.NR: 958 935 420
Overført fra: KNR: 0301 GNR: 129 BNR: 1 Eiendommen er tilknyttet offentlig vann‑ og
avløpssystem. Stikkledningene fra eiendommen og ut til
2021/5 56143‑2/ 200 11.05.2021 det kommunale nettet er private, og
BESTEMMELSE OM ADKOMSTRETT

---

[d072_d072 | Side [1]]
fter og eventuell Selger leverer eiendommen i ryddig og rengjort tilstand.
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til
47

## Side 48

OM EIENDOMMEN
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om informasjonsgrunnlaget
Overtakelse
Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og

---

[d072_d072 | Side [1]]
dommen eller av dens omgivelser?
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

[d072_d072 | Side [1]]
r er forpliktet til å signere den
Sameiebrøk: 65/ 20021 standard kjøpekontrakten som er utarbeidet av Emera i
Registrert feil formål for snr. 318 forbindelse med eiendomshandler. Kjøpekontrakten kan
11.03.2022 Arkivref. 17/ 44239‑44 gjennomgås hos eiendomsmegleren før budet legges
Rettet etter tingl. §18 inn. Ta kontakt med eiendomsmegler dersom det er
spørsmål.
Legalpant: Kommunen har legalpant som sikkerhet for
betaling av kommunale avgifter og eventuell Selger leverer eiendommen i ryddig og rengjort

---

[d072_d072 | Side [1]]
 pr. år mot innkrevd akontobeløp.
13 500 (Boligkjøperforsikring* (valgfritt))
Eiendomsskatt
177 500 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Iht. eiendomsskattelisten for 2025 påløper det ikke
545 (Tinglysningsgebyr ‑ pantedokument) eiendomsskatt for denne seksjonen.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
178 590 (Omkostninger totalt (uten Boligkjøperforsikring))
Kommunale avgifter
192 090 (Omkostninger totalt (med
Boligkjøperforsikring)) Informasjon: Inkludert i

---

[d072_d072 | Side [1]]
tuelle skader på broen som påføres eiendommen. Slike skader skal rettes uten
ugrunnet opphold.
8. Eier av eiendommen er ikke ansvarlig for skader som påføres broen og det som
befinner seg på den ved normal drift og vedlikehold av arealet, med mindre skaden
skyldes uaktsomhet fra eier.
9. Denne erklæringen tinglyses som en heftelse på gnr./bnr.129/32, 129/34, 129/1 og
129/115 i 0301 Oslo kommune.
 Erklæringen kan ikke slettes uten samtykke fra partene.



95

## Side

---

[d072_d072 | Side [1]]
står behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og

---

[d072_d072 | Side [1]]
nt for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
Sameiet har en tvist med utbygger om misfarging av glassrekverk på balkonger, men dette angår ikke denne
Beskrivelse
leiligheten siden den har markterasse uten rekkverk.
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte

---

[d072_d072 | Side [1]]
1 det kommunale nettet er private, og
BESTEMMELSE OM ADKOMSTRETT vedlikeholdsansvaret for disse påhviler sameiet.
RETTIGHETSHAVER: KNR: 0301 GNR: 129 BNR: 34 Adkomst til eiendommen skjer via offentlig vei.
RETTIGHETSHAVER: KNR: 0301 GNR: 129 BNR: 115
Bestemmelse om solidaransvar for vedlikehold av bro
Utleie
Bestemmelse om sletting
GJELDER DENNE REGISTERENHETEN MED FLERE Adgang til utleie: Boligen kan leies ut i samsvar med
Overført fra: KNR: 0301 GNR: 129 BNR: 1 gjeldende lovverk, og vedtektene setter

---

[d072_d072 | Side [1]]
s redskap eller lignende.
Oppdragsnr.: 15467-2965 Befaringsdato: 03.02.2026 Side: 14 av 15
71

## Side 72

Stålverkskroken 20, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 129 - Bnr 1 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Tilstandsrapportens avgrensninger
betydning for om arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens

---

[d072_d072 | Side [1]]
leie i en
Bruks‑ og vedlikeholdsrett for lysmaster og tilhørende sammenhengende periode på opptil 30 døgn.
ledningsanlegg på eiendommen
GJELDER DENNE REGISTERENHETEN MED FLERE
Radonmåling
2021/ 635483‑1/ 200 31.05.2021 Selger har ikke utført radonmåling. Det er ikke krav om
SEKSJONERING dette med mindre boligen er helt eller delvis utleid.
Opprettet seksjoner:
SNR: 178
Diverse
Formål: Bolig
Tilleggsdel: Bygning Både kjøper og selger er forpliktet til å signere den
Sameiebrøk: 65/ 20021 standard

---

[d072_d072 | Side [1]]
beid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
Beskrivelse Innvendig bod er innlemmet i stue og gjort om til rom for varig opphold.
Initialer selger: JÅØ, TKD 2
52006220
:ecnerefer
tnemucoD
54

## Side

---

[d072_d072 | Side [1]]
erfølger. Denne vedtektsbestemmelse bortfaller uten behandling i årsmøtet når
utomhusanlegg og fellesarealer er overtatt for siste byggetrinn i utbyggingsprosjektet
”Tiedemannsfabrikken Felt G”.
ooOoo


93

## Side 94


Vedlegg 1 . Tinglyst erklæring bro
Vedlegg 2. Adkomst for vedlikehold tak, seksjon 78,86,235 og 314


94

## Side 95


VEDLEGG 1 (UTKAST)
ERKLÆRING OM ADKOMST OG VEDLIKEHOLD AV BRO
PÅ GNR. /BNR. 129/115 I 0301 OSLO

---

[d072_d072 | Side [1]]
v grøntanlegg, sammenføyning og
tilknytning av bygningsmassen og anleggelse av kulvert. I forbindelse med utføringen av
disse arbeidene har utbygger rett til å hå stående anleggsmaskiner, utstyr, brakker m.v.,
gjerder og skilt på eiendommene.
Inntil utbyggingsprosjektet ”Tiedemannsfabrikken Felt G” er ferdig utbygget, er sameiet og
seksjonseierne forpliktet til å yte nødvendig medvirkning til at utbygger, evt den utbygger
utpeker, kan gjennomføre en helhetlig utbygging i samsvar med utbyggers/selgers

---

[d072_d072 | Side [1]]
behørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
48

## Side 49

OM EIENDOMMEN
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
av om kjøper er forbrukerkjøper eller ikke, og dette er Dersom kjøper er en juridisk enhet, eller en fysisk person
nærmere

---

[d072_d072 | Side [1]]

eiet/festet tomt, tomteareal og byggeår
oppgi琀琀 ved elektronisk grunnbok, Norges
Eiendommer.
Tegninger Gjennomgå琀琀 Nei
Opplysninger vedrørende fellesutgi昀琀er,
eventuell andel fellesgjeld og
Forretningsfører Gjennomgå琀琀 Nei
forsikringsselskap oppgi琀琀 av
forretningsfører.
Revisjoner
Versjon Ny versjon Kommentar
1 06.02.2026
2 09.02.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 15467-2965 Befaringsdato: 03.02.2026 Side: 13 av 15
70

## Side 71

Stålverkskroken 20, 0661 OSLO Takstmann Jan Berby

---

[d072_d072 | Side [1]]
hver bruksenhet svarer til to ganger folketrygdens grunnbeløp på det
tidspunktet tvangsdekning besluttes gjennomført. Panteretten omfatter også krav som skulle
ha vært betalt etter at det er kommet inn en begjæring til namsmyndighetene om
tvangsdekning.
6-4 Seksjonseierens heftelse for sameiets ansvar og forpliktelser utad
Den enkelte seksjonseier hefter for felles ansvar og forpliktelser etter sin sameierbrøk.
7 Pålegg om salg og fravikelse av bruksenheten (utkastelse)
7-1 Mislighold


85

## Side

---

[d072_d072 | Side [1]]
fullført. Dersom tilbakeføring ikke er utført innen rimelig tid, kan eier av
eiendommen la tilbakeføringen utføres for eier av gnr./bnr.129/32 og 129/34 og 129/1
sin regning.
6. Dersom eier av eiendommen ønsker å gjennomføre tiltak som gjør det nødvendig å
beskytte broen kan det på seks – 6 – måneders skriftlig varsel kreve beskyttelsestiltak
iverksatt.
7. Uavhengig av skyld er eier av gnr./bnr.129/32 og 129/34 og 129/1 ansvarlig for
eventuelle skader på broen som påføres eiendommen. Slike skader skal

---

[d072_d072 | Side [1]]
indelse med salget er det blitt utført en Entredør i Brannklasse El‑30 og Lydklasse dB40.
tilstandsrapport av en bygningssakkyndig, som gir en Balkongdør med treramme og 3‑lags isolerglass.
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, Balkong
er vedlagt salgsoppgaven. Det er viktig at interessenter Adkomst vestvendt terrasse på bakkeplan på 29m² fra
grundig gjennomgår disse dokumentene før bud legges stue.
inn.
Se vedlagte tilstandsrapport for

---

[d072_d072 | Side [1]]
, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE

---

[d072_d072 | Side [1]]
lser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller symptomer
på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold eller 琀椀ltak trengs
i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder

---

[d072_d072 | Side [1]]
a bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være

---

[d072_d072 | Side [1]]
øknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under

---

[d072_d072 | Side [1]]
gsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele

---

[d072_d072 | Side [1]]
ntene før bud legges stue.
inn.
Se vedlagte tilstandsrapport for ytterligere informasjon
All informasjon i tilstandsrapporten anses som kjent for om eiendommen.
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert
Øvrig
med TG2 og TG3 bør vurderes nøye, da de indikerer
avvik fra normal slitasje og/ eller høy alder, noe som kan
informasjon
innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av

---

[d072_d072 | Side [1]]
tmann Jan Berby MNTF
Gnr 129 - Bnr 1 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder

---

[d072_d072 | Side [1]]
kade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d.

---

[d072_d072 | Side [1]]
 man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og TG1 gis det normalt ingen begrunnelse for valg av avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke

---

[d072_d072 | Side [1]]
slår hvor lenge man kan forvente at utstyr som er montert rik琀椀g og
Overnevnte bygningsdeler er en del av sameiets/bore琀琀slagets
brukes rik琀椀g vil fungere uten funksjonssvikt eller lekkasje.
vedlikeholdsansvar, og er ikke omfa琀琀et av denne rapporten.
Det blir ikke sa琀琀 琀椀lstandsgrad for disse bygningsdelene. Årstall: 2022
Årstall: 2022
1. ETASJE > BAD/VASKEROM
Vinduer Over昀氀ater vegger og himling
Vinduer med trerammer og tre-lags isolerglass. Flislagte vegger og malte plater i tak.
1. ETASJE >

---

[d072_d072 | Side [1]]
n, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens

---

[d072_d072 | Side [1]]
eng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av

---

[d072_d072 | Side [1]]
nt annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk.
være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger dokumentasjon på
faglig god u琀昀ørelse. • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold og
elektriske installasjoner i boligen dersom det er mer

---

[d072_d072 | Side [1]]
endingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
琀椀lstandsgrad, fordi bygningen eller bygningsdelen da bare har normal 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
slitasje. For anbefalte 琀椀ltak ved TG2 og TG3 må bruker av rapporten 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3,
vurdere om 琀椀ltakene er nødvendige og lønnsomme. Hva det vil koste å der undersøkelsesnivå 1 er det laveste og baseres på visuell observasjon.
utbedre rom eller

---

[d072_d072 | Side [1]]
slova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG

---

[d072_d072 | Side [1]]
porten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder,

---

[d072_d072 | Side [1]]
forhold og
elektriske installasjoner i boligen dersom det er mer enn fem år siden sist
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig fagperson ved behov
foreligger dokumentasjon på faglig god u琀昀ørelse. for grundigere undersøkelser.
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik

---

[d072_d072 | Side [1]]

Gnr 129 - Bnr 1 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Beskrivelse av eiendommen
Boligblokken er oppført og gi琀琀 midler琀椀dig bruks琀椀llatelse i 2021
og ferdiga琀琀est i 2023 e琀琀er gjeldende byggeskikk og forskri昀琀er,
TEK 17. Over昀氀ater og våtrom er vurdert mot hva som må
forventes av standard som følge av bygningens alder.
Eiendommen er vurdert i den stand den var på
besik琀椀gelsesdagen. Kommentarer vedrørende vedlikehold osv.
er anført i den tekniske beskrivelsen i rapporten.
Tilstandsanalysen har ikke avdekket

---

[d072_d072 | Side [1]]
r andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske status på et gi琀琀 琀椀dspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men som eier har

---

[d072_d072 | Side [1]]
unktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset

---

[d072_d072 | Side [1]]
 (1 av 8)
Vedlegg 1 21 av 59 2421 Årsrapport og årsregnskap 2024 (1).pdf
124

## Side 125

iii) Økonomistyring
Høsten 2024 gjennomgikk styret budsjettet, noe som førte til en beslutning om å øke felleskostnadene
med 20 % fra 1. januar 2025. Økningen i felleskostnadene skyldes høyere driftsutgifter for sameiets
ordinære drift og generell prisstigning på grunn av inflasjon. De største kostnadsøkningene gjelder
kommunale avgifter, med 18 % økning for vann og avløp og 4 % for renovasjon, samt

---

[d072_d072 | Side [1]]
felles
installasjoner på tak, jfr vedlegg 2
Kontroll og arbeid i bruksenhetene skal varsles i rimelig tid og gjennomføres slik at det ikke
skaper unødvendig ulempe for seksjonseieren eller andre brukere
(5) Et sameie som ikke oppfyller sin vedlikeholdsplikt, skal erstatte tap dette påfører
seksjonseierne gjennom skader på bruksenhetene, jf. eierseksjonsloven § 35.
6. Felleskostnader, pantesikkerhet og heftelsesform
6-1 Felleskostnader
(1) Kostnader med eiendommen som ikke knytter seg til den enkelte

---

[d072_d072 | Side [1]]
ger totalt (med
Boligkjøperforsikring)) Informasjon: Inkludert i fellekostnadene.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Fellesgjeld
7 278 590 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring)) Lånebetingelser fellesgjeld: Seksjonen og sameiet har
7 292 090 (Totalpris inkl. omkostninger (med ikke fellesgjeld.
Boligkjøperforsikring))
Sikringsordning
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
Ikke tilknyttet sikringsordning.
Estimert totalpris ink. omk
Andre

---

[d072_d072 | Side [1]]
 seksjonseiere i Tiedemannsparken Sameie.
Rettigheter og plikter fremgår av næringsseksjonens vedtekter, se vedlegg X.
4-3 Vedlikehold
Tiedemannsparken Sameie er ansvarlig for drift, vedlikehold og administrasjon av
næringsseksjon 318, garasjeanlegget med adkomst, kjørebane og parkeringsarealer, jfr
næringsseksjonens vedtekter, se vedlegg X
4-4 Felleskostnader


81

## Side 82


Felleskostnader knyttet til drift og vedlikehold av garasjeanlegget, fordeles mellom sameierne
i

---

[d072_d072 | Side [1]]
egnskapsførsel.
Regnskapet skal revideres av en revisor valgt av årsmøtet. Revisor tjenestegjør inntil annen
revisor blir valgt.
10-3 Forsikring
(1) Styret er ansvarlig for at eiendommen til enhver tid er forsvarlig forsikret i et godkjent
forsikringsselskap. Forsikringen skal også omfatte huseieransvarsforsikring,
styreansvarsforsikring og rettshjelpsforsikring. Innboforsikring er den enkelte sameier selv
ansvarlig for å tegne
(2) Selv om sameiets forsikring brukes, skal styret pålegge seksjonseier å

---

[d072_d072 | Side [1]]
m.
(1) Sameiet skal holde utvendige og innvendige fellesarealer, inkludert bygningen og felles
installasjoner, forsvarlig ved like.
Sameiet er også solidarisk ansvarlig, sammen med Gnr./bnr.129/32 og 129/34 for all drift,
vedlikehold og nødvendige oppgraderinger av broen som er oppført over knr. gnr./bnr.
129/115, jfr tinglyst erklæring av 11.05.2021
Vedlikeholdet skal utføres slik at skader på fellesarealene og de enkelte bruksenhetene
forebygges, og slik at seksjonseierne slipper ulemper.

---

[d072_d072 | Side [1]]
t og vedlikehold av garasjeanlegget, fordeles mellom sameierne
i næringsseksjon parkering i forhold til hvor mange parkeringsplasser den enkelte eier
disponerer. Felleskostnader for garasjeplass
Dette gjelder for eksempel kostnader til:
• snørydding/feiing
• rengjøring av garasjekjeller
• reparasjon av garasjeport
• forsikring
• strøm
• kjøre- og adkomstarealer
• tekniske anlegg
• andre drifts og administrasjonskostnader for næringsseksjon 158
4-5 Ladepunkt for el-bil og ladbare hybrider
(1) En

---

[d072_d072 | Side [1]]
r, med 18 % økning for vann og avløp og 4 % for renovasjon, samt høyere
forsikringspremier. I tillegg ønsker styret å bygge opp kapital til fremtidig vedlikehold, og økningen vil
bidra til dette.
Videre har styret jobbet intensivt med økonomistyring, noe som har medført at vi per mars 2025 ikke
lenger er avhengige av kassakreditten.
I løpet av de tre første driftsårene etter overtakelsen har sameiet hatt ekstraordinære utgifter. En detaljert
kostnadsoversikt som styret har utarbeidet, viser at disse

---

[d072_d072 | Side [1]]
under et •
•
sameiets finansielle stilling per 31.
sammendrag av viktige
desember 2024, og av dets resultater for
regnskapsprinsipper.
regnskapsåret i samsvar med
regnskapslovens regler og god
regnskapsskikk i Norge.
Andre forhold
Budsjettallene som fremkommer i årsregnskapet er ikke revidert.
Grunnlag for konklusjonen
Vi har gjennomført revisjonen i samsvar med International Standards on Auditing (ISA-ene). Våre
oppgaver og plikter i henhold til disse standardene er beskrevet nedenfor under Revisors

---

[d072_d072 | Side [1]]
siale arrangementer.
• Henvendelser: Håndtere beboerhenvendelser 24/7; telefon, e-post, vibbo.
• Informasjon: Lage nyhetsbrev og annen informasjon.
• Leverandører: Følge opp leverandører og serviceavtaler.
• Valgkomiteen: Kartlegge kandidater og lage innstilling til årsmøte.
• Øvrige: Følge opp vedtak fra årsmøter.
Sameiet har en forretningsføreravtale med OBOS, som inkluderer rådgivning, innkreving av
felleskostnader, regnskapsføring, inkassosaker og andre administrative oppgaver. Vår kontaktperson i
OBOS

---

[d072_d072 | Side [1]]
tiltak på eiendommen dersom årsmøtet har vedtatt slik avsetning. Midlene
skal settes på egen bankkonto. Avsetning til vedlikehold er en felleskostnad og
innbetalingene skal følge sameiebrøk.
6-3 Panterett for seksjonseiernes forpliktelse
De andre seksjonseierne har lovbestemt panterett i seksjonen for krav mot seksjonseieren
som følger av sameieforholdet, jf. eierseksjonslovens § 31. Pantekravet kan ikke overstige et
beløp som for hver bruksenhet svarer til to ganger folketrygdens grunnbeløp på

---

[d072_d072 | Side [1]]
EN
OM EIENDOMMEN
Fordeles slik:
Økonomi
Akonto fjernvarme 612
TV 369
Prisantydning
Felleskostnader 3 026,52
Kr 7 100 000 Internett 236
Boligselskapet har avtale med Techem om leveranse av
Omkostning kjøper
energiservicetjenester. OBOS fakturerer den enkelte
7 100 000,00 (Prisantydning) beboer a konto på vegne av Techem sammen med
ordinær innkreving av felleskostnader. Techem avregner
Omkostninger faktisk energiforbruk pr. år mot innkrevd akontobeløp.
13 500 (Boligkjøperforsikring*

---

[d072_d072 | Side [1]]
1) Kostnader med eiendommen som ikke knytter seg til den enkelte bruksenhet, er
felleskostnader. Felleskostnader skal fordeles mellom seksjonseierne etter sameiebrøken
med mindre annet følger av disse vedtektene.


84

## Side 85


(2) Dersom særlige grunner taler for det, kan kostnadene fordeles etter nytten for den
enkelte bruksenhet eller etter forbruk.
Kostnader forbundet med kollektivt bredbånd og tv fordeles med en lik andel pr. tilknyttet
seksjon.
Kostnader til fjernvarme

---

[d072_d072 | Side [1]]
inkluderer felles forsikring, o昀昀entlige avgi昀琀er, trappevask og vaktmestertjeneste.
Parkering
Parkering i omkringliggende veier e琀琀er gjeldende bestemmelser.
Oppdragsnr.: 15467-2965 Befaringsdato: 03.02.2026 Side: 12 av 15
69

## Side 70

Stålverkskroken 20, 0661 OSLO Takstmann Jan Berby MNTF
Gnr 129 - Bnr 1 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Tryg Forsikring 7869264
Kommentar
Fellespolise for sameiets bygningsmasse.
Kilder og

---

[d072_d072 | Side [1]]
legge styre-, budsjett-, og årsmøte.
• Økonomistyring: Godkjenne fakturaer, revidere budsjett.
• Forsikringssaker: Dokumentere og følge opp forsikringsrelaterte saker.
• Reklamasjoner: Følge opp reklamasjonssaker med Selvaag.
• HMS ansvarlig: Organisere brannøvelser og dokumentere.
• Reforhandling: Innhente tilbud og reforhandle avtaler.
• Tilgangsbestilling: Bestille nøkler og håndtere adgangskontroll.
• Sosialt: Planlegge og gjennomføre sosiale arrangementer.
• Henvendelser: Håndtere beboerhenvendelser

---

[d072_d072 | Side [1]]
t på estimerte tall, det er tatt høyde for prisøkninger på drift &
vedlikehold i den grad det foreligger estimater.
Felleskostnader
Budsjettet danner grunnlaget for fastsettelsen av felleskostnader.
Budsjettet er basert på 25 % økning av felleskostnadene 4% økning Tv og internett
fra 01.01.2025.
For øvrig vises til de enkelte tallene i budsjettet.
Vedlegg 1 30 av 59 2421 Årsrapport og årsregnskap 2024 (1).pdf
133

## Side 134

Vedlegg 1 31 av 59 2421 Årsrapport og årsregnskap 2024 (1).pdf
134

## Side

---

[d072_d072 | Side [1]]
lle
03.2.2026 Jan Berby Taks琀椀ngeniør
Tore Krøvel Dahl Kunde
Jan Åge Øyen Kunde
Matrikkeldata
Kommune gnr. bnr. fnr. snr. Areal Kilde Eieforhold
301 OSLO 129 1 178 11370.4 m² I følge Norges Eiet
Eiendommer. Areal for
hele sameiet.
Adresse
Stålverkskroken 20
Hjemmelshaver
Tore Krøvel Dahl og Jan Åge Øyen
Boligselskap Eierandel Forretningsfører Organisasjonsnr
Tiedemannsparken 65 / 20021 OBOS Eiendomsforvaltning 927377128
Sameie Telefon: 22 86 59 99
Felles gjeld:
Kr. 708

---

[d072_d072 | Side [1]]
åte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
observasjoner. forvaltning, dri昀琀 eller vedlikehold.
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i

---

[d072_d072 | Side [1]]
om er rettet mot en selv eller
ens nærstående.


90

## Side 91


Dette gjelder også for den som opptrer ved eller som fullmektig.
10 Forretningsfører, regnskap, revisjon og forsikring
10-1 Forretningsfører
Sameiet skal ha forretningsfører. Styret ansetter forretningsfører og andre funksjonærer i
samsvar med eierseksjonsloven § 61.

10-2 Regnskap og revisjon
Styret skal sørge for ordentlig og tilstrekkelig regnskapsførsel.
Regnskapet skal revideres av en revisor valgt av

---

[d072_d072 | Side [1]]
snr. 202460006 forutsettes videreført, men driftsmulighetene kan bli
Hovedhensikten med planen er å etablere et eget anlegg påvirket av bekkeåpningen. Reguleringen følger opp
for syklende og legge bedre til rette for gående. VPOR Ensjø, men avviker formelt fra arealbruksformål
Tilretteleggingen innebærer at vegarealet får større total «byggeområde» fastsatt i kommuneplanen for Oslo.
bredde enn i dag.
Les dokumentet med planen
Grenseveien 73, 91 og 95 ‑ Regulering til barneskole, https:/ /

---

[d072_d072 | Side [1]]
t).
Husdyr: Dyrehold er tillatt så lenge dette ikke på en Det er viktig å merke seg at energiforbruket kan variere
urimelig eller unødvendig måte er til skade eller ulempe fra husstand til husstand.
for de øvrige brukerne av eiendommen.
Regulerings og arealplaner
Forkjøpsrett: Det praktiseres ikke forkjøpsrett.
Eiendommen er regulert til boligformål iht.
Styregodkjennelse: Det praktiseres ikke reguleringsplan S‑4420.
styregodkjennelse.
Det gjøres oppmerksom på at området er under utvikling
og at endringer

---

[d072_d072 | Side [1]]
nes
innspill. De skriver: «Adkomstsonen er opparbeidet i samsvar med godkjent avkjørselsplan og
trafikknotat. Bymiljøetaten ser ingen umiddelbar grunn til å gjøre tiltak i dette området for
gående/syklende. Det er viktig at bilistene viser hensyn til myke trafikanter og at det ivaretas god
frisikt i området til enhver tid. Avkjørselen er en privat avkjørsel som må skiltes i hht bruken».
Styret oppfordrer beboerne til å melde inn avvik og problemer direkte til kommunen via deres nettside.
Flere innspill vil

---

[d072_d072 | Side [1]]
til å melde sin interesse for å delta i arbeidsgruppen, som skal komme
med en anbefaling før det kan fattes et vedtak.
Styrets arbeid (3 av 8)
Vedlegg 1 23 av 59 2421 Årsrapport og årsregnskap 2024 (1).pdf
126

## Side 127

✓ Naboklager: Styret har fått flere henvendelser om brudd på husordensreglene, blant annet knyttet til
støy, hensatte gjenstander i rømningsveier, forsøpling og ulovlig kameraovervåking. Vi har fulgt opp
disse sakene ved å snakke med de involverte eller sende skriftlig beskjed. Når det

---

[d072_d072 | Side [1]]
m følger av kommunens
seksjoneringsvedtak, lov om eierseksjoner, disse vedtekter samt eventuelle ordensregler
fastsatt av årsmøtet. Dersom ikke annet følger av disse vedtekter, gjelder reglene i
eierseksjonsloven av 16. juni 2017 nr 65.


92

## Side 93


11-6 Midlertidige bestemmelser i byggetiden
Utbyggingsprosjektet ”Tiedemannsfabrikken Felt G ” er planlagt gjennomført ved utbygging i
flere byggetrinn, med en planlagt bebyggelse på ca 317boliger med 1 eller

---

[d072_d072 | Side [1]]
øres oppmerksom på at området er under utvikling
og at endringer og oppføring av nye bygg vil kunne skje.
Det anbefales spesielt å følge med på de planer og
prosesser som pågår for området via Oslo kommune,
Plan‑ og bygningsetaten.
45

## Side 46

OM EIENDOMMEN
Pågående plansaker i området: Bekkeåpningen vil berøre deler av eiendommene
Grenseveien mellom Økernveien og Grensesvingen ‑ Gladengveien 18 og 16. Dagens bruk på eiendommene
Saksnr. 202460006 forutsettes videreført, men driftsmulighetene kan

---

[d072_d072 | Side [1]]
øteplasser for hele
nabolaget. Området rundt pipa kan brukes til ulike aktiviteter, som konserter, markeder og sosiale
samlinger. I tillegg planlegges det fellesarrangementer som gatefrokost og volleyballturnering, der
beboere fra flere borettslag kan delta. Sletta og området rundt pipa blir viktige samlingspunkter, hvor
alle kan møtes for å styrke naboskapet.
Styrets arbeid (4 av 8)
Vedlegg 1 24 av 59 2421 Årsrapport og årsregnskap 2024 (1).pdf
127

## Side 128

v) Øvrige saker
Oppfølging på reklamasjon

---

[d072_d072 | Side [1]]
emer direkte til kommunen via deres nettside.
Flere innspill vil styrke muligheten for å få gjennomslag for nødvendige tiltak..
✓ Aquashine-foretaket i Gladengveien: Styret har sendt en redegjørelse til kommunen om
støyproblemet fra Aquashine i Gladengveien. Dette skjedde i forbindelse med nabovarslingen, som
opprinnelig ikke ble gjennomført. Etter styrets innspill ble varslingen til slutt gjennomført, men saken
er fortsatt uavklart. Vi venter nå på kommunens behandling og avgjørelse om Aquashines videre

---

[d072_d072 | Side [1]]
aler selger: JÅØ, TKD 2
52006220
:ecnerefer
tnemucoD
54

## Side 55

18.1 Er innredning/utbyggingen godkjent hos bygningsmyndighetene?
Nei Ja
Jf. byggesak 202457339 i Oslo Kommune. Tillatelse gitt av Oslo Kommune 29.07.2024. Ferdigattest utstedt av Oslo
Beskrivelse
Kommune 25.10.2024.
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det

---

[d072_d072 | Side [1]]

Grenseveien 73, 91 og 95 ‑ Regulering til barneskole, https:/ / innsyn.pbe.oslo.kommune.no/ saksinnsyn/
barnehage og park ‑ Saksnr. 202118619 showfile.asp?fileid=9922718&jno=2021154015
Tiltaket vil bidra til en grønnere bydel med ny park og
omgjøring av industribebyggelse til skole og barnehage
Tinglyste heftelser
med utearealer med høy kvalitet.
Tinglyste heftelser og rettigheter: Heftelser i
Ensjøskolene eiendomsrett:
Ensjø skal få ny barneskole og ny ungdomsskole. Det har 1915/ 900806‑1/ 105 05.03.1915

---

[d072_d072 | Side [1]]
l primært
foregå i ordinær arbeidstid. Støyende arbeid utført av innleide håndverkere skal kun foregå
på hverdager mellom kl. 07:00 og kl. 18:00. Det er beboers ansvar å sørge for at innleide
håndverkere overholder dette. Naboers eventuelle saklige og begrunnede innsigelser knyttet
til støy og sjenanse utenfor normal arbeidstid, skal tas til følge av den som har ansvaret for
arbeidet.
§ 3. Orden i fellesområdene
Sykler, barnevogner, sportsutstyr, leker og lignende skal ikke hensettes i oppganger,
svalgang,

---

[d072_d072 | Side [1]]
getrinn, med en planlagt bebyggelse på ca 317boliger med 1 eller flere
næringssekjsoner med underjordisk p-kjeller. Utbygger Selvaag Bolig ASA, evt den disse
utpeker, står fritt til å igangsette og ferdigstille byggetrinn.
Selvaag Bolig ASA har som utbygger av eiendommen gnr 129 bnr 1 rett til å utføre
nødvendige bygningsmessige arbeider for å fullføre prosjektet. Denne retten omfatter
etablering av adkomst over og under bakken, etablering av grøntanlegg, sammenføyning og
tilknytning av bygningsmassen og

---

[d072_d072 | Side [1]]
 beboere kan samles og bli bedre kjent. Vi legger også til rette for felles innsats
gjennom dugnader, som bidrar til å holde uteområdene pene og velstelte. For de som ønsker
møteplasser for voksne, finnes det muligheter for samlinger i bakgården vår. I tillegg er grønne
områder en viktig del av bomiljøet, med blomster og beplantning som gir rom for både dyrking og
rekreasjon.
Nabolagshuset Petersborg/Ensjø har som mål å skape gode sosiale møteplasser for hele
nabolaget. Området rundt pipa kan brukes til

---

[d072_d072 | Side [1]]
ormasjon om plankunngjøring for Vestre bekkedrag/ Bestemmelse om adkomstrett
Hovinbekken Gangforbindelse åpen for allmennheten som ikke tillates
Eiendoms‑ og byfornyelsesetaten i Oslo kommune, stengt med gjerder, porter med videre
ønsker å omregulere Gladengveien 18 mfl. fra industri til fra Plan‑ og bygningsetaten i Oslo kommune.
grønnstruktur. Hensikten med planarbeidet er å legge til Kan ikke slettes uten samtykke
rette for gjenåpning av resterende del av hovedløpet for GJELDER DENNE REGISTERENHETEN MED

---

[d072_d072 | Side [1]]
tiv deltakelse i planlegging og gjennomføring. Petersborg
ønsker flere engasjerte naboer i sine prosjekter, og ber folk stille opp når de har arrangementer. De
vil også ha innspill fra både styrer, og ikke minst naboer om nye prosjekter.
Samarbeidet med Petersborg gir oss muligheter til å bidra til et godt naboskap uten å pålegge styret
unødvendig arbeid eller forpliktelser. Vi har en samarbeidsavtale som fungerer godt, og vi har frihet
til å delta på arrangementer, komme med forslag og være med på å skape

---

[d072_d072 | Side [1]]
noe GF anbefaler gjennomført i
april eller mai når værforholdene tillater det. Testresultatene vil styrke grunnlaget for videre
oppfølging av reklamasjonen.
✓ Innkjøringsveien: trafikksikkerhet og bemerkninger til innkjøringsvei gnr. 129, bnr. 117: Styret
har fulgt opp beboernes bekymringer om innkjøringsveien overfor bymiljøetaten, utbygger og
gårdeier. Bymiljøetaten har redegjort for saken, men ser ikke behov for tiltak, til tross for beboernes
innspill. De skriver: «Adkomstsonen er opparbeidet i samsvar

---

[d072_d072 | Side [1]]
 snakke med de involverte eller sende skriftlig beskjed. Når det gjelder
nabokonflikter, oppfordrer vi alltid partene til først å prøve å finne en løsning sammen. Om det ikke
lar seg gjøre, kan styret eller politiet kontaktes ved behov. Vi setter pris på at alle bidrar til et godt
bomiljø!
✓ Nabolagshuset Petersborg: Styret har hatt en god dialog med Nabolagshuset Petersborg for å
styrke fellesskapet med nabosameiene og støtte lokale arrangementer. Vi var glade for å bidra til
«Jul på Ensjø» med hest og

---

[d072_d072 | Side [1]]
Enslige
Veldig bra 84/100
Naboskapet
Offentlig transport Høflige 66/100
Gladengveien 5 min
Linje 5N, FB5A, 21, 126 0.4 km
Aldersfordeling
Ensjø 9 min
Linje 1, 2, 3, 4, 5 0.7 km
Tøyen stasjon 13 min Linje RE30, R31 1 km
Helsfyr 15 min
T-bane, buss 1.2 km
Carl Berners plass 20 min
Linje 17 1.6 km
Skoler
Hasle skole (1-7 kl.) 7 min
757 elever, 35 klasser 0.5 km
Kampen skole (1-7 kl.) 12 min
495 elever, 21 klasser 0.9 km
Teglverket skole (1-10 kl.) 12 min
694 elever, 51 klasser 1 km
Fyrstikkalleen skole (8-10

---

[d072_d072 | Side [1]]


178

## Side 179

 



















179

## Side 180

Nabolagsprofil
Stålverkskroken 20 - Nabolaget Ensjø - vurdert av 332 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 86/100
Etablerere
Kvalitet på skolene
Enslige
Veldig bra 84/100
Naboskapet
Offentlig transport Høflige

---

[d072_d072 | Side [1]]
ver. Det legges til rette 1977/ 28868‑1/ 105 16.12.1977 BEST. OM VANN/
for meråpne lokaler i skoleanlegget og flerbrukshallen KLOAKKLEDN.
slik at naboer og organisasjoner kan bruke bygget Bestemmelse om anlegg og vedlikehold av ledninger
utenom skoletid. m.v.
Den nye barneskolen planlegges med fire paralleller (B4) GJELDER DENNE REGISTERENHETEN MED FLERE
for 840 elever med flerbrukshall, dansesal og en Overført fra: KNR: 0301 GNR: 129 BNR: 1
spesialavdeling for inntil 16 elever. Beliggenhetene til
begge

---

[d072_d072 | Side [1]]
orsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper

---

[d072_d072 | Side [1]]
lysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet

---

[d072_d072 | Side [1]]
parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med

---

[d072_d072 | Side [1]]

Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave,

---

[d072_d072 | Side [1]]
edyr på egen balkong. Vet at det er satt inn forebyggende tiltak utendørs av
skadedyrfirma.
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: JÅØ, TKD 3
52006220
:ecnerefer
tnemucoD
55

## Side 56

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel

---

[d072_d072 | Side [1]]
 forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene

---

[d072_d072 | Side [1]]
gsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller

---

[d072_d072 | Side [1]]
elges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre

---

[d072_d072 | Side [1]]
lg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2022
Hvor lenge har du eid boligen?
Antall år 3
Antall måneder 4
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: JÅØ, TKD

---

[d072_d072 | Side [1]]
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

[d072_d072 | Side [1]]
entet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
182

## Side 183

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge

---

[d072_d072 | Side [1]]
nnforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: JÅØ, TKD 4
52006220
:ecnerefer
tnemucoD
56

## Side 57

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Jan Åge Øyen

---

[d072_d072 | Side [1]]
oe slag?
Alt utstyr og installasjoner som medfølger overtas slik de Sameiet har en tvist med utbygger om misfarging av
er, uten garanti, med mindre det foreligger en gjeldende glassrekverk på balkonger, men dette angår ikke denne
garanti fra produsent eller leverandør. leiligheten siden den har markterasse uten rekkverk.
Kjøper aksepterer at det kan forekomme hull og merker Kjenner du til om det er/ har vært sopp/ råteskader/
etter montering av inventar og utstyr som ikke er en del insekter/ skadedyr i

---

[d072_d072 | Side [1]]
areal mindre enn 50 m². Det er eier
anbefalte metoder. Saken ble innstilt i forliksrådet høsten som plikter å fremlegge energiattest og er selv ansvarlig
2024. Det betyr at Forliksrådet mener at saken har et for at opplysningene er korrekte. Selger har fylt ut
økonomisk omfang som bør vurderes avgjort i en fullstendig energiattest, som er lagt ved salgsoppgaven.
domstol. Etter dette har styret arbeidet videre med saken Megler påtar seg ikke ansvar for informasjonen som
for å innhente et bedre faglig og

---

[d072_d072 | Side [1]]
salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig

---

[d072_d072 | Side [1]]
er og selger får i
forbindelse med oppdraget, kan variere ut fra hvor i
landet eiendommen ligger.
51

## Side 52

STÅLVERKSKROKEN 20

## Side 53

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Oslo Øst
Oppdragsnr.
02260025
Selger 1 navn Selger 2 navn
Jan Åge Øyen Tore Krøvel Dahl
Gateadresse
Stålverkskroken 20
Poststed Postnr
OSLO 0661
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til

---

[d072_d072 | Side [1]]
ell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres

---

[d072_d072 | Side [1]]
vhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson,

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Bruksendring av innvendig bod til rom for varig opphold: Bod er innlemmet i stue og gjort om til rom for varig opphold. Ifølge egenerklæringen er dette godkjent av bygningsmyndighetene via byggesak 202457339, med tillatelse gitt 29.07.2024 og ferdigattest utstedt 25.10.2024. Risikoen er dermed lavere enn opprinnelig antatt, men det bør bekreftes at ferdigattesten faktisk dekker den aktuelle bruksendringen.",
      "evidence": [
        "Innvendig bod er innlemmet i stue og gjort om til rom for varig opphold.",
        "Jf. byggesak 202457339 i Oslo Kommune. Tillatelse gitt av Oslo Kommune 29.07.2024. Ferdigattest utstedt av Oslo Kommune 25.10.2024.",
        "Det kan være forskjell mellom boligens faktiske bruk av rom og det som er godkjent av myndighetene. Alle interessenter anbefales derfor å undersøke eiendommen nøye, gjerne sammen med fagperson."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        54,
        55
      ],
      "confidence": 0.35
    },
    {
      "risk_id": "R2",
      "description": "Pågående tvist mellom sameiet og utbygger om misfarging av glassrekkverk på balkonger. Tvisten er innstilt i forliksrådet og kan ende i domstol, noe som kan medføre kostnader for sameiet og potensielt økte felleskostnader. Denne leiligheten har markterrasse uten rekkverk og er ikke direkte berørt, men som seksjonseier bærer kjøper en andel av sameiets eventuelle kostnader.",
      "evidence": [
        "Sameiet har en tvist med utbygger om misfarging av glassrekverk på balkonger, men dette angår ikke denne leiligheten siden den har markterasse uten rekkverk.",
        "Saken ble innstilt i forliksrådet høsten 2024. Det betyr at Forliksrådet mener at saken har et økonomisk omfang som bør vurderes avgjort i en domstol.",
        "Etter dette har styret arbeidet videre med saken for å innhente et bedre faglig og [juridisk grunnlag]."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        54,
        55
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R3",
      "description": "Felleskostnadene ble økt med 20–25 % fra 1. januar 2025 og kan øke ytterligere. Sameiet har hatt ekstraordinære utgifter i de tre første driftsårene og har tidligere vært avhengig av kassakreditt. Per mars 2025 er kassakreditten ikke lenger i bruk, men historikken indikerer en sårbar økonomi.",
      "evidence": [
        "Høsten 2024 gjennomgikk styret budsjettet, noe som førte til en beslutning om å øke felleskostnadene med 20 % fra 1. januar 2025.",
        "Økningen i felleskostnadene skyldes høyere driftsutgifter for sameiets ordinære drift og generell prisstigning på grunn av inflasjon.",
        "I løpet av de tre første driftsårene etter overtakelsen har sameiet hatt ekstraordinære utgifter.",
        "Budsjettet er basert på 25 % økning av felleskostnadene fra 01.01.2025.",
        "Videre har styret jobbet intensivt med økonomistyring, noe som har medført at vi per mars 2025 ikke lenger er avhengige av kassakreditten."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        124,
        125,
        133
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Solidaransvar for vedlikehold av bro: Sameiet er solidarisk ansvarlig for drift, vedlikehold og nødvendige oppgraderinger av broen over gnr./bnr. 129/115, noe som kan medføre uforutsette kostnader. Erklæringen er tinglyst og kan ikke slettes uten samtykke fra partene.",
      "evidence": [
        "Sameiet er også solidarisk ansvarlig, sammen med Gnr./bnr.129/32 og 129/34 for all drift, vedlikehold og nødvendige oppgraderinger av broen som er oppført over knr. gnr./bnr. 129/115, jfr tinglyst erklæring av 11.05.2021.",
        "Uavhengig av skyld er eier av gnr./bnr.129/32 og 129/34 og 129/1 ansvarlig for eventuelle skader på broen som påføres eiendommen. Slike skader skal rettes uten ugrunnet opphold.",
        "Denne erklæringen tinglyses som en heftelse på gnr./bnr.129/32, 129/34, 129/1 og 129/115 i 0301 Oslo kommune. Erklæringen kan ikke slettes uten samtykke fra partene."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        95
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R5",
      "description": "Pågående utbyggingsprosjekt 'Tiedemannsfabrikken Felt G' med planlagt bebyggelse på ca. 317 boliger. Utbygger Selvaag Bolig ASA har rett til å utføre byggearbeider på eiendommen, inkludert anleggsmaskiner, brakker og gjerder, noe som kan medføre støy, anleggstrafikk og ulemper for beboerne i en lengre periode.",
      "evidence": [
        "Utbyggingsprosjektet 'Tiedemannsfabrikken Felt G' er planlagt gjennomført ved utbygging i flere byggetrinn, med en planlagt bebyggelse på ca 317 boliger med 1 eller flere næringsseksjoner med underjordisk p-kjeller.",
        "Selvaag Bolig ASA har som utbygger av eiendommen gnr 129 bnr 1 rett til å utføre nødvendige bygningsmessige arbeider for å fullføre prosjektet.",
        "Denne retten omfatter etablering av adkomst over og under bakken, etablering av grøntanlegg, sammenføyning og tilknytning av bygningsmassen og anleggelse av kulvert. I forbindelse med utføringen av disse arbeidene har utbygger rett til å ha stående anleggsmaskiner, utstyr, brakker m.v., gjerder og skilt på eiendommene."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        92,
        93
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Planlagt bekkeåpning av Hovinbekken kan påvirke eiendommene i nærområdet. Dagens bruk forutsettes videreført, men driftsmulighetene kan bli påvirket. Reguleringen avviker formelt fra arealbruksformål 'byggeområde' fastsatt i kommuneplanen.",
      "evidence": [
        "Eiendoms- og byfornyelsesetaten i Oslo kommune ønsker å omregulere Gladengveien 18 mfl. fra industri til grønnstruktur. Hensikten med planarbeidet er å legge til rette for gjenåpning av resterende del av hovedløpet for Hovinbekken på Ensjø.",
        "Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.",
        "Reguleringen følger opp VPOR Ensjø, men avviker formelt fra arealbruksformål «byggeområde» fastsatt i kommuneplanen for Oslo."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        45,
        46
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R7",
      "description": "Støyproblem fra Aquashine i Gladengveien er uavklart. Saken er til behandling hos kommunen og utfallet er usikkert, noe som kan påvirke bomiljøet negativt dersom virksomheten fortsetter.",
      "evidence": [
        "Styret har sendt en redegjørelse til kommunen om støyproblemet fra Aquashine i Gladengveien.",
        "Etter styrets innspill ble varslingen til slutt gjennomført, men saken er fortsatt uavklart. Vi venter nå på kommunens behandling og avgjørelse om Aquashines videre drift."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        127
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R8",
      "description": "Trafikksikkerhetsbekymringer knyttet til innkjøringsveien (gnr. 129, bnr. 117). Bymiljøetaten ser ikke behov for tiltak til tross for beboernes innspill. Saken er i praksis avvist av myndighetene, noe som reduserer risikoen noe, men beboernes bekymringer er reelle.",
      "evidence": [
        "Styret har fulgt opp beboernes bekymringer om innkjøringsveien overfor bymiljøetaten, utbygger og gårdeier.",
        "Bymiljøetaten har redegjort for saken, men ser ikke behov for tiltak, til tross for beboernes innspill.",
        "Bymiljøetaten skriver: «Adkomstsonen er opparbeidet i samsvar med godkjent avkjørselsplan og trafikknotat. Bymiljøetaten ser ingen umiddelbar grunn til å gjøre tiltak i dette området for gående/syklende.»"
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        127
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R9",
      "description": "Radonmåling er ikke utført av selger. Dette er en potensiell helserisiko, særlig dersom boligen leies ut, da det da vil være et lovkrav om radonmåling.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        47
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R10",
      "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette vedlikeholdskostnader som fordeles på seksjonseierne.",
      "evidence": [
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        47
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R11",
      "description": "Legalpant: Kommunen og sameiet har legalpant i seksjonen med høy prioritet foran tinglyste lån. Kommunens legalpant har høyere prioritet enn sameiets legalpant. Dette kan påvirke kjøpers finansiering og prioritet for egne lån.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        47
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R12",
      "description": "Området er under utvikling og endringer og oppføring av nye bygg vil kunne skje. Dette kan påvirke utsikt, sol, støy og bomiljø for kjøper. Kjøper anbefales å følge med på planer via Oslo kommune, Plan- og bygningsetaten.",
      "evidence": [
        "Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.",
        "Det anbefales spesielt å følge med på de planer og prosesser som pågår for området via Oslo kommune, Plan- og bygningsetaten."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        45
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R13",
      "description": "Skjeggkre er observert på balkong og det er satt inn forebyggende tiltak utendørs av skadedyrfirma. Selger bekrefter kjennskap til skjeggkre på balkong, men det er uklart om det er skjeggkre inne i boligen eller i fellesarealer/andre boliger i sameiet.",
      "evidence": [
        "Kjenner du til om det er/har vært skjeggkre i boligen? (spørsmål 27 – svar Ja med beskrivelse): Vet at det er satt inn forebyggende tiltak utendørs av skadedyrfirma.",
        "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? (spørsmål 28)"
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        55
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R14",
      "description": "Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Seksjonen og sameiet har imidlertid ingen fellesgjeld per salgsoppgavedato, noe som reduserer den umiddelbare risikoen. Manglende sikringsordning er likevel relevant dersom sameiet tar opp lån i fremtiden.",
      "evidence": [
        "Ikke tilknyttet sikringsordning.",
        "Seksjonen og sameiet har ikke fellesgjeld."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        47
      ],
      "confidence": 0.45
    },
    {
      "risk_id": "R15",
      "description": "Planlagt ny barneskole og ungdomsskole på Ensjø (Grenseveien 73, 91 og 95) kan medføre økt trafikk og støy i nærområdet i bygge- og driftsperioden. Skolen planlegges med 840 elever og flerbrukshall.",
      "evidence": [
        "Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.",
        "Den nye barneskolen planlegges med fire paralleller (B4) for 840 elever med flerbrukshall, dansesal og en spesialavdeling for inntil 16 elever.",
        "Tiltaket vil bidra til en grønnere bydel med ny park og omgjøring av industribebyggelse til skole og barnehage med utearealer med høy kvalitet."
      ],
      "source_documents": [
        "d072_d072"
      ],
      "source_pages": [
        45,
        46
      ],
      "confidence": 0.5
    }
  ],
  "re_retrieval_queries": [
    "Skjeggkre sameiet fellesareal andre boliger spørsmål 28 svar",
    "Forliksrådet tvist glassrekkverk kostnadsestimat domstol",
    "Kassakreditt sameiet beløp historikk ekstraordinære utgifter detaljer",
    "Byggesak 202457339 bruksendring bod ferdigattest omfang",
    "Reklamasjon Selvaag utbygger pågående saker status 2024 2025"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Bruksendring bod (justert ned fra 0.6 til 0.35):**\nEvidensen viser tydelig at bruksendringen ER godkjent: byggesak 202457339, tillatelse 29.07.2024, ferdigattest 25.10.2024. Den opprinnelige risikobeskrivelsen antyder at godkjenning er uklar, men dokumentene viser at den er på plass. Risikoen er reell men lav – primært knyttet til om ferdigattesten faktisk dekker alle aspekter av endringen. Confidence justeres ned til 0.35.\n\n**R2 – Tvist glassrekkverk (beholdes 0.85):**\nGodt dokumentert. Saken er innstilt i forliksrådet og kan gå til domstol. Leiligheten er ikke direkte berørt (markterrasse), men seksjonseier bærer andel av sameiets kostnader. Confidence opprettholdes.\n\n**R3 – Økte felleskostnader (beholdes 0.9):**\nSvært godt dokumentert med konkrete tall (20% vedtatt, 25% budsjettert), årsaker (kommunale avgifter, inflasjon, forsikring), historikk med kassakreditt og ekstraordinære utgifter. Positivt at kassakreditten er avviklet per mars 2025, men dette demper ikke risikoen vesentlig. Confidence opprettholdes.\n\n**R4 – Solidaransvar bro (beholdes 0.85):**\nGodt dokumentert gjennom tinglyst erklæring og vedtekter. Erklæringen kan ikke slettes uten samtykke. Confidence opprettholdes.\n\n**R5 – Utbyggingsprosjekt Felt G (beholdes 0.9):**\nSvært godt dokumentert. Utbyggers rettigheter er nedfelt i vedtektene. Confidence opprettholdes.\n\n**R6 – Bekkeåpning Hovinbekken (justert ned fra 0.7 til 0.65):**\nDokumentert, men gjelder primært naboeiendommer (Gladengveien 18 og 16), ikke direkte denne eiendommen. Indirekte påvirkning er mulig. Confidence justeres ned noe.\n\n**R7 – Aquashine støy (beholdes 0.75):**\nGodt dokumentert. Saken er uavklart og avventer kommunens avgjørelse. Confidence opprettholdes.\n\n**R8 – Trafikksikkerhet innkjøringsvei (justert ned fra 0.65 til 0.55):**\nDokumentert, men Bymiljøetaten har konkludert med at det ikke er behov for tiltak. Risikoen er reell men myndighetene har vurdert den som akseptabel. Confidence justeres ned.\n\n**R9 – Radonmåling (beholdes 0.75):**\nGodt dokumentert. Selger bekrefter at måling ikke er utført. Confidence opprettholdes.\n\n**R10 – Private stikkledninger (justert ned fra 0.7 til 0.65):**\nDokumentert, men dette er en standardsituasjon for de fleste sameier og representerer ikke en uvanlig risiko. Confidence justeres ned noe.\n\n**R11 – Legalpant (beholdes 0.8):**\nGodt dokumentert. Legalpant er en reell risiko for kjøpers finansiering. Confidence opprettholdes.\n\n**R12 – Område under utvikling (beholdes 0.8):**\nGodt dokumentert, og understøttes av de øvrige risikoene (Felt G, bekkeåpning, skoleutbygging). Confidence opprettholdes.\n\n**R13 – Skjeggkre (justert ned fra 0.8 til 0.75):**\nDokumentert at selger bekrefter skjeggkre på balkong med forebyggende tiltak. Svar på spørsmål 28 (sameiet/fellesareal) er ikke tydelig gjengitt i dokumentchunkene. Trenger mer informasjon. Confidence justeres ned noe.\n\n**R14 – Ingen sikringsordning (justert ned fra 0.7 til 0.45):**\nDokumentert at sameiet ikke er tilknyttet sikringsordning, MEN det fremgår også tydelig at sameiet ikke har fellesgjeld. Sikringsordning er primært relevant ved fellesgjeld. Uten fellesgjeld er denne risikoen minimal i dag. Confidence justeres ned betydelig.\n\n**R15 – Ny barneskole (justert ned fra 0.55 til 0.5):**\nDokumentert som pågående plansak, men skolen er på Grenseveien (ikke umiddelbar nabo) og tiltaket beskrives som positivt for bydelen. Byggestøy er en midlertidig ulempe. Confidence justeres ned noe.\n\n**Manglende risikoer identifisert:**\n- Reklamasjonssaker mot Selvaag: Årsrapporten nevner at styret følger opp reklamasjonssaker med Selvaag, men omfanget er ikke spesifisert i de tilgjengelige chunkene. Dette bør undersøkes nærmere.\n- Naboklager og brudd på husordensregler: Nevnt i årsrapporten (støy, hensatte gjenstander, ulovlig kameraovervåking). Indikerer potensielle bomiljøutfordringer.\n- Grenseveien sykkelvei/gangvei (saksnr. 202460006): Reguleringsplan for bredere vei kan påvirke nærområdet.\n"
}

## Raw Response
```json
{
  "id": "msg_016E7asHK7dr3q6KJwN4xWuP",
  "container": null,
  "content": [
    {
      "id": "toolu_019X3o2ySX77nuy2WKsZ2nNZ",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Bruksendring av innvendig bod til rom for varig opphold: Bod er innlemmet i stue og gjort om til rom for varig opphold. Ifølge egenerklæringen er dette godkjent av bygningsmyndighetene via byggesak 202457339, med tillatelse gitt 29.07.2024 og ferdigattest utstedt 25.10.2024. Risikoen er dermed lavere enn opprinnelig antatt, men det bør bekreftes at ferdigattesten faktisk dekker den aktuelle bruksendringen.",
            "evidence": [
              "Innvendig bod er innlemmet i stue og gjort om til rom for varig opphold.",
              "Jf. byggesak 202457339 i Oslo Kommune. Tillatelse gitt av Oslo Kommune 29.07.2024. Ferdigattest utstedt av Oslo Kommune 25.10.2024.",
              "Det kan være forskjell mellom boligens faktiske bruk av rom og det som er godkjent av myndighetene. Alle interessenter anbefales derfor å undersøke eiendommen nøye, gjerne sammen med fagperson."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              54,
              55
            ],
            "confidence": 0.35
          },
          {
            "risk_id": "R2",
            "description": "Pågående tvist mellom sameiet og utbygger om misfarging av glassrekkverk på balkonger. Tvisten er innstilt i forliksrådet og kan ende i domstol, noe som kan medføre kostnader for sameiet og potensielt økte felleskostnader. Denne leiligheten har markterrasse uten rekkverk og er ikke direkte berørt, men som seksjonseier bærer kjøper en andel av sameiets eventuelle kostnader.",
            "evidence": [
              "Sameiet har en tvist med utbygger om misfarging av glassrekverk på balkonger, men dette angår ikke denne leiligheten siden den har markterasse uten rekkverk.",
              "Saken ble innstilt i forliksrådet høsten 2024. Det betyr at Forliksrådet mener at saken har et økonomisk omfang som bør vurderes avgjort i en domstol.",
              "Etter dette har styret arbeidet videre med saken for å innhente et bedre faglig og [juridisk grunnlag]."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              54,
              55
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R3",
            "description": "Felleskostnadene ble økt med 20–25 % fra 1. januar 2025 og kan øke ytterligere. Sameiet har hatt ekstraordinære utgifter i de tre første driftsårene og har tidligere vært avhengig av kassakreditt. Per mars 2025 er kassakreditten ikke lenger i bruk, men historikken indikerer en sårbar økonomi.",
            "evidence": [
              "Høsten 2024 gjennomgikk styret budsjettet, noe som førte til en beslutning om å øke felleskostnadene med 20 % fra 1. januar 2025.",
              "Økningen i felleskostnadene skyldes høyere driftsutgifter for sameiets ordinære drift og generell prisstigning på grunn av inflasjon.",
              "I løpet av de tre første driftsårene etter overtakelsen har sameiet hatt ekstraordinære utgifter.",
              "Budsjettet er basert på 25 % økning av felleskostnadene fra 01.01.2025.",
              "Videre har styret jobbet intensivt med økonomistyring, noe som har medført at vi per mars 2025 ikke lenger er avhengige av kassakreditten."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              124,
              125,
              133
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Solidaransvar for vedlikehold av bro: Sameiet er solidarisk ansvarlig for drift, vedlikehold og nødvendige oppgraderinger av broen over gnr./bnr. 129/115, noe som kan medføre uforutsette kostnader. Erklæringen er tinglyst og kan ikke slettes uten samtykke fra partene.",
            "evidence": [
              "Sameiet er også solidarisk ansvarlig, sammen med Gnr./bnr.129/32 og 129/34 for all drift, vedlikehold og nødvendige oppgraderinger av broen som er oppført over knr. gnr./bnr. 129/115, jfr tinglyst erklæring av 11.05.2021.",
              "Uavhengig av skyld er eier av gnr./bnr.129/32 og 129/34 og 129/1 ansvarlig for eventuelle skader på broen som påføres eiendommen. Slike skader skal rettes uten ugrunnet opphold.",
              "Denne erklæringen tinglyses som en heftelse på gnr./bnr.129/32, 129/34, 129/1 og 129/115 i 0301 Oslo kommune. Erklæringen kan ikke slettes uten samtykke fra partene."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              95
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R5",
            "description": "Pågående utbyggingsprosjekt 'Tiedemannsfabrikken Felt G' med planlagt bebyggelse på ca. 317 boliger. Utbygger Selvaag Bolig ASA har rett til å utføre byggearbeider på eiendommen, inkludert anleggsmaskiner, brakker og gjerder, noe som kan medføre støy, anleggstrafikk og ulemper for beboerne i en lengre periode.",
            "evidence": [
              "Utbyggingsprosjektet 'Tiedemannsfabrikken Felt G' er planlagt gjennomført ved utbygging i flere byggetrinn, med en planlagt bebyggelse på ca 317 boliger med 1 eller flere næringsseksjoner med underjordisk p-kjeller.",
              "Selvaag Bolig ASA har som utbygger av eiendommen gnr 129 bnr 1 rett til å utføre nødvendige bygningsmessige arbeider for å fullføre prosjektet.",
              "Denne retten omfatter etablering av adkomst over og under bakken, etablering av grøntanlegg, sammenføyning og tilknytning av bygningsmassen og anleggelse av kulvert. I forbindelse med utføringen av disse arbeidene har utbygger rett til å ha stående anleggsmaskiner, utstyr, brakker m.v., gjerder og skilt på eiendommene."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              92,
              93
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Planlagt bekkeåpning av Hovinbekken kan påvirke eiendommene i nærområdet. Dagens bruk forutsettes videreført, men driftsmulighetene kan bli påvirket. Reguleringen avviker formelt fra arealbruksformål 'byggeområde' fastsatt i kommuneplanen.",
            "evidence": [
              "Eiendoms- og byfornyelsesetaten i Oslo kommune ønsker å omregulere Gladengveien 18 mfl. fra industri til grønnstruktur. Hensikten med planarbeidet er å legge til rette for gjenåpning av resterende del av hovedløpet for Hovinbekken på Ensjø.",
              "Bekkeåpningen vil berøre deler av eiendommene Gladengveien 18 og 16. Dagens bruk på eiendommene forutsettes videreført, men driftsmulighetene kan bli påvirket av bekkeåpningen.",
              "Reguleringen følger opp VPOR Ensjø, men avviker formelt fra arealbruksformål «byggeområde» fastsatt i kommuneplanen for Oslo."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              45,
              46
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R7",
            "description": "Støyproblem fra Aquashine i Gladengveien er uavklart. Saken er til behandling hos kommunen og utfallet er usikkert, noe som kan påvirke bomiljøet negativt dersom virksomheten fortsetter.",
            "evidence": [
              "Styret har sendt en redegjørelse til kommunen om støyproblemet fra Aquashine i Gladengveien.",
              "Etter styrets innspill ble varslingen til slutt gjennomført, men saken er fortsatt uavklart. Vi venter nå på kommunens behandling og avgjørelse om Aquashines videre drift."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              127
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R8",
            "description": "Trafikksikkerhetsbekymringer knyttet til innkjøringsveien (gnr. 129, bnr. 117). Bymiljøetaten ser ikke behov for tiltak til tross for beboernes innspill. Saken er i praksis avvist av myndighetene, noe som reduserer risikoen noe, men beboernes bekymringer er reelle.",
            "evidence": [
              "Styret har fulgt opp beboernes bekymringer om innkjøringsveien overfor bymiljøetaten, utbygger og gårdeier.",
              "Bymiljøetaten har redegjort for saken, men ser ikke behov for tiltak, til tross for beboernes innspill.",
              "Bymiljøetaten skriver: «Adkomstsonen er opparbeidet i samsvar med godkjent avkjørselsplan og trafikknotat. Bymiljøetaten ser ingen umiddelbar grunn til å gjøre tiltak i dette området for gående/syklende.»"
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              127
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R9",
            "description": "Radonmåling er ikke utført av selger. Dette er en potensiell helserisiko, særlig dersom boligen leies ut, da det da vil være et lovkrav om radonmåling.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              47
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R10",
            "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre uforutsette vedlikeholdskostnader som fordeles på seksjonseierne.",
            "evidence": [
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem. Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              47
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R11",
            "description": "Legalpant: Kommunen og sameiet har legalpant i seksjonen med høy prioritet foran tinglyste lån. Kommunens legalpant har høyere prioritet enn sameiets legalpant. Dette kan påvirke kjøpers finansiering og prioritet for egne lån.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              47
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R12",
            "description": "Området er under utvikling og endringer og oppføring av nye bygg vil kunne skje. Dette kan påvirke utsikt, sol, støy og bomiljø for kjøper. Kjøper anbefales å følge med på planer via Oslo kommune, Plan- og bygningsetaten.",
            "evidence": [
              "Det gjøres oppmerksom på at området er under utvikling og at endringer og oppføring av nye bygg vil kunne skje.",
              "Det anbefales spesielt å følge med på de planer og prosesser som pågår for området via Oslo kommune, Plan- og bygningsetaten."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              45
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R13",
            "description": "Skjeggkre er observert på balkong og det er satt inn forebyggende tiltak utendørs av skadedyrfirma. Selger bekrefter kjennskap til skjeggkre på balkong, men det er uklart om det er skjeggkre inne i boligen eller i fellesarealer/andre boliger i sameiet.",
            "evidence": [
              "Kjenner du til om det er/har vært skjeggkre i boligen? (spørsmål 27 – svar Ja med beskrivelse): Vet at det er satt inn forebyggende tiltak utendørs av skadedyrfirma.",
              "Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)? (spørsmål 28)"
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              55
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R14",
            "description": "Sameiet er ikke tilknyttet sikringsordning for fellesgjeld. Seksjonen og sameiet har imidlertid ingen fellesgjeld per salgsoppgavedato, noe som reduserer den umiddelbare risikoen. Manglende sikringsordning er likevel relevant dersom sameiet tar opp lån i fremtiden.",
            "evidence": [
              "Ikke tilknyttet sikringsordning.",
              "Seksjonen og sameiet har ikke fellesgjeld."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              47
            ],
            "confidence": 0.45
          },
          {
            "risk_id": "R15",
            "description": "Planlagt ny barneskole og ungdomsskole på Ensjø (Grenseveien 73, 91 og 95) kan medføre økt trafikk og støy i nærområdet i bygge- og driftsperioden. Skolen planlegges med 840 elever og flerbrukshall.",
            "evidence": [
              "Grenseveien 73, 91 og 95 – Regulering til barneskole, barnehage og park – Saksnr. 202118619.",
              "Den nye barneskolen planlegges med fire paralleller (B4) for 840 elever med flerbrukshall, dansesal og en spesialavdeling for inntil 16 elever.",
              "Tiltaket vil bidra til en grønnere bydel med ny park og omgjøring av industribebyggelse til skole og barnehage med utearealer med høy kvalitet."
            ],
            "source_documents": [
              "d072_d072"
            ],
            "source_pages": [
              45,
              46
            ],
            "confidence": 0.5
          }
        ],
        "re_retrieval_queries": [
          "Skjeggkre sameiet fellesareal andre boliger spørsmål 28 svar",
          "Forliksrådet tvist glassrekkverk kostnadsestimat domstol",
          "Kassakreditt sameiet beløp historikk ekstraordinære utgifter detaljer",
          "Byggesak 202457339 bruksendring bod ferdigattest omfang",
          "Reklamasjon Selvaag utbygger pågående saker status 2024 2025"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Bruksendring bod (justert ned fra 0.6 til 0.35):**\nEvidensen viser tydelig at bruksendringen ER godkjent: byggesak 202457339, tillatelse 29.07.2024, ferdigattest 25.10.2024. Den opprinnelige risikobeskrivelsen antyder at godkjenning er uklar, men dokumentene viser at den er på plass. Risikoen er reell men lav – primært knyttet til om ferdigattesten faktisk dekker alle aspekter av endringen. Confidence justeres ned til 0.35.\n\n**R2 – Tvist glassrekkverk (beholdes 0.85):**\nGodt dokumentert. Saken er innstilt i forliksrådet og kan gå til domstol. Leiligheten er ikke direkte berørt (markterrasse), men seksjonseier bærer andel av sameiets kostnader. Confidence opprettholdes.\n\n**R3 – Økte felleskostnader (beholdes 0.9):**\nSvært godt dokumentert med konkrete tall (20% vedtatt, 25% budsjettert), årsaker (kommunale avgifter, inflasjon, forsikring), historikk med kassakreditt og ekstraordinære utgifter. Positivt at kassakreditten er avviklet per mars 2025, men dette demper ikke risikoen vesentlig. Confidence opprettholdes.\n\n**R4 – Solidaransvar bro (beholdes 0.85):**\nGodt dokumentert gjennom tinglyst erklæring og vedtekter. Erklæringen kan ikke slettes uten samtykke. Confidence opprettholdes.\n\n**R5 – Utbyggingsprosjekt Felt G (beholdes 0.9):**\nSvært godt dokumentert. Utbyggers rettigheter er nedfelt i vedtektene. Confidence opprettholdes.\n\n**R6 – Bekkeåpning Hovinbekken (justert ned fra 0.7 til 0.65):**\nDokumentert, men gjelder primært naboeiendommer (Gladengveien 18 og 16), ikke direkte denne eiendommen. Indirekte påvirkning er mulig. Confidence justeres ned noe.\n\n**R7 – Aquashine støy (beholdes 0.75):**\nGodt dokumentert. Saken er uavklart og avventer kommunens avgjørelse. Confidence opprettholdes.\n\n**R8 – Trafikksikkerhet innkjøringsvei (justert ned fra 0.65 til 0.55):**\nDokumentert, men Bymiljøetaten har konkludert med at det ikke er behov for tiltak. Risikoen er reell men myndighetene har vurdert den som akseptabel. Confidence justeres ned.\n\n**R9 – Radonmåling (beholdes 0.75):**\nGodt dokumentert. Selger bekrefter at måling ikke er utført. Confidence opprettholdes.\n\n**R10 – Private stikkledninger (justert ned fra 0.7 til 0.65):**\nDokumentert, men dette er en standardsituasjon for de fleste sameier og representerer ikke en uvanlig risiko. Confidence justeres ned noe.\n\n**R11 – Legalpant (beholdes 0.8):**\nGodt dokumentert. Legalpant er en reell risiko for kjøpers finansiering. Confidence opprettholdes.\n\n**R12 – Område under utvikling (beholdes 0.8):**\nGodt dokumentert, og understøttes av de øvrige risikoene (Felt G, bekkeåpning, skoleutbygging). Confidence opprettholdes.\n\n**R13 – Skjeggkre (justert ned fra 0.8 til 0.75):**\nDokumentert at selger bekrefter skjeggkre på balkong med forebyggende tiltak. Svar på spørsmål 28 (sameiet/fellesareal) er ikke tydelig gjengitt i dokumentchunkene. Trenger mer informasjon. Confidence justeres ned noe.\n\n**R14 – Ingen sikringsordning (justert ned fra 0.7 til 0.45):**\nDokumentert at sameiet ikke er tilknyttet sikringsordning, MEN det fremgår også tydelig at sameiet ikke har fellesgjeld. Sikringsordning er primært relevant ved fellesgjeld. Uten fellesgjeld er denne risikoen minimal i dag. Confidence justeres ned betydelig.\n\n**R15 – Ny barneskole (justert ned fra 0.55 til 0.5):**\nDokumentert som pågående plansak, men skolen er på Grenseveien (ikke umiddelbar nabo) og tiltaket beskrives som positivt for bydelen. Byggestøy er en midlertidig ulempe. Confidence justeres ned noe.\n\n**Manglende risikoer identifisert:**\n- Reklamasjonssaker mot Selvaag: Årsrapporten nevner at styret følger opp reklamasjonssaker med Selvaag, men omfanget er ikke spesifisert i de tilgjengelige chunkene. Dette bør undersøkes nærmere.\n- Naboklager og brudd på husordensregler: Nevnt i årsrapporten (støy, hensatte gjenstander, ulovlig kameraovervåking). Indikerer potensielle bomiljøutfordringer.\n- Grenseveien sykkelvei/gangvei (saksnr. 202460006): Reguleringsplan for bredere vei kan påvirke nærområdet.\n"
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
    "input_tokens": 24641,
    "output_tokens": 6165,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
