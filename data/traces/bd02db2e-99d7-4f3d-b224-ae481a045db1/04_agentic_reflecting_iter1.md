# Trace: agentic_reflecting_iter1
- **Run ID:** bd02db2e-99d7-4f3d-b224-ae481a045db1
- **Tidspunkt:** 2026-03-25T21:07:01.025498+00:00
- **Varighet:** 82.50s
- **Input tokens:** 21379
- **Output tokens:** 4235

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
Risiko 1: Manglende ferdigattest – kun midlertidig brukstillatelse foreligger
  Confidence: 0.98
  Evidens: Det foreligger ingen ferdigattest. Det foreligger midlertidig brukstillatelse er datert 30.04.2021.; Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Det foreligger midlertidig brukstillatelse for eiendommen datert 30.04.21; Det er utbygger/ tiltakshavers ansvar å sørge for at ferdigattest foreligger før midlertidig brukstillatelse løper ut på tid.; Frist for ferdigattest for hele prosjektet innen 01.07.2026, med varsel om tvangsmulkt.

Risiko 2: Negativt årsresultat i Sameiet Lilleby Triangel G og negativ egenkapital i tilknyttede realsameier – risiko for økte felleskostnader
  Confidence: 0.97
  Evidens: Sameiet hadde i 2024 samlede driftsinntekter på kr 4 578 192 og samlede driftskostnader på kr 4 750 538. Dette ga et negativt årsresultat på kr 118 997.; Boligselskapet har negativ egenkapital. Det anbefales at det budsjetteres med positivt resultat i årene fremover.; Det er iverksatt tiltak med ny avtale for kostnadsfordeling mot næringsdel samt gradvis opptrapping av kontingenten for å bedre betalingsevne. Om dagens budsjetterte kostnader står seg anbefales boligselskapet å øke kontingenten ytterligere for styrke kapitalen.; Sameiet Lilleby Triangel Parkering hadde i 2024 samlede driftsinntekter på kr 432 696 og samlede driftskostnader på kr 565 800. Dette ga et negativt årsresultat på kr 129 463.; Realsameiet hadde i 2024 samlede driftsinntekter på kr 1 756 125 og samlede driftskostnader på kr 1 782 033. Dette ga et negativt årsresultat på kr 19 238.

Risiko 3: Ekstraordinære innskudd fra sameiene til Realsameiet har tært på sameiets reserver
  Confidence: 0.95
  Evidens: Sameiet har frem til 2024 hatt en tilfredsstillende økonomi, men det har dessverre vært utfordringer knyttet til økonomien i Realsameiet, hvor det i perioder har vært behov for å gjøre ekstraordinære innskudd fra sameiene.; Dette har resultert i at det er brukt av sameiets reserver, noe som også er forklaringen på årets underskudd.; Basert på denne gjennomgangen så vi det som nødvendig med justeringer av kontingenten i juli 2024 og januar 2025.

Risiko 4: Kjente problemer med gulvvarmeanlegget i bygget – usikkerhet rundt omfang og fremtidige utbedringskostnader
  Confidence: 0.92
  Evidens: Det har vært utbedringer i bygget ifm problemer på gulvvarmeanlegget. Skal ha blitt blåst isolasjon i himlingen i denne leiligheten. Har ikke opplevd problemer tilknyttet dette selv.; Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken.; Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Ja.

Risiko 5: Ingen radonmåling er utført
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 6: Pågående og fremtidige reguleringsplaner i området kan medføre endringer i omgivelsene
  Confidence: 0.85
  Evidens: Plan-ID: k20110088 - Lade og Leangen (Regulering under arbeid). Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen.; Plan-ID: r20220031 - Fv 6668, Maskinistgata, del av Strandveien og Stiklestadveien. Planens formål er å sikre infrastruktur til fremtidig metrobusstrasé over Nyhavna.; Planforslag: r20180039 Reina, r20180046 Jarlheimsletta, r20220025 Fridheimveien 1 og 3 og Jarleveien 12.; Eiendommen er i kommuneplanens arealdel avsatt til sentrumsformål - framtidig og byggesone 1.

Risiko 7: Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset rekursmulighet mot selger
  Confidence: 0.9
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 8: El-anlegget er ikke kontrollert av el-tilsyn eller utvidet el-kontroll de siste 5 år
  Confidence: 0.85
  Evidens: Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei

Risiko 9: Boligselskapet er ikke med i sikringsordning for felleskostnader
  Confidence: 0.8
  Evidens: Boligselskapet er ikke med i sikringsordning.

Risiko 10: Begrensede bygningsopplysninger fra TOBB – usikkerhet rundt areal og bygningsendringer
  Confidence: 0.75
  Evidens: BYGNINGSINFO. TOBB har begrenset med informasjon om boligene og bygningene. Vi har kun opprinnelig areal og opprinnelig antall rom registrert på boligene. Kommunen har oversikt over søknadspliktige endringer som er utført.; EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt tomteforhold er ikke kontrollert av TOBB. Vi tar derfor forbehold om riktigheten.

Risiko 11: Tvister i sameiet knyttet til erklæringen mellom bolig og næring vedrørende rett til bruk av arealer
  Confidence: 0.8
  Evidens: Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken og erklæringen mellom bolig og næring vedrørende rett til bruk av arealer.

Risiko 12: Elbillader på parkeringsplass mangler strømavtale
  Confidence: 0.78
  Evidens: Har du ladeanlegg/ladeboks for elbil i dag? Ja. Det er tilrettelagt for elbillader på parkeringsplassen, men har ikke strømavtale på dette nå.

Dokumentkontekst:
[d196_d196 | Side [1]]
ter til å gjøre seg kjent med disse.
henhold til reguleringsplan r20130048.
Eiendommen er i kommuneplanens arealdel avsatt til
Tinglyste heftelser
sentrumsformål ‑ framtidig og byggesone 1.
Tinglyste heftelser og rettigheter: På eiendommen er det
Vi gjør oppmerksom på følgende saker i området: tinglyst følgende heftelser og rettigheter som følger
Plan‑ID: k20110088 ‑ Lade og Leangen (Regulering under eiendommens matrikkel ved overskjøting til ny
arbeid) hjemmelshaver:
Hensikten med planarbeidet er å

---

[d196_d196 | Side [1]]
r andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: SNO 2
92006250
:ecnerefer
tnemucoD
45

## Side 46

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei

---

[d196_d196 | Side [1]]
med TGIU er ikke blitt vurdert av takstmannen.
Kjenner du til om sameiet/ laget/ selskapet er involvert i
tvister av noe slag? Beskrivelsen av boligen nedenfor er hentet direkte fra
Ja. tilstandsrapporten:
Det har vært utbedringer i bygget ifm problemer på
gulvvarmeanlegget. Skal ha blitt blåst isolasjon i Boligen har ingen bygningsdeler med tilstandsgrad TG1,
himlingen i denne leiligheten. Har ikke opplevd problemer TG2 eller TG3.
tilknyttet dette selv.
35

## Side 36

OM EIENDOMMEN
Polisenummer

---

[d196_d196 | Side [1]]
 sameiets kreditorer i forhold til sin følge med eiendommen, jf. avhendingsloven § 3‑4.
sameiebrøk. Ved manglende betaling av fellesutgifter har Fastmonterte eller spesialtilpassede installasjoner og
sameiet legal panterett i den enkelte eierseksjon, innredning som anses som varig tilknyttet boligen, følger
begrenset til inntil 2 ganger folketrygdens grunnbeløp. normalt med i handelen, med mindre det foreligger en
særskilt avtale mellom partene om noe annet, jf.
avhendingsloven § 3‑5.
38

## Side 39

OM

---

[d196_d196 | Side [1]]
tført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller

---

[d196_d196 | Side [1]]
eiendom/ boligkjoper/
Det informeres om at ingen kan eie mer enn to
boligseksjoner i sameiet, i henhold til eierseksjonsloven §
Lovanvendelse
23. Seksjoner som eies av nærstående eller gjennom et
firma regnes også med. Regelverk og generelle opplysninger
Boligen selges med det inventar og utstyr som i henhold
I henhold til eierseksjonsloven § 31 er sameierne til gjeldende lover, forskrifter eller offentlige pålegg skal
ansvarlige overfor sameiets kreditorer i forhold til sin følge med eiendommen, jf.

---

[d196_d196 | Side [1]]
/9069 Fødselsdato eier: 24.07.1994
Ladeveien Type: Tingsrettslig sameie
7066 TRONDHEIM Eiere: Synne Nyvoll Olsen
Organisasjonsnr: 925 505 358 Seksjonsnr:
1: Felleskostnader
Tot. innev. måned: 219
Tilleggsytelser: Parkering (1/3) 219
Boligselskapet er ikke med i sikringsordning.
Ingen kollektiv avtale inngått
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 0 Gjeld siste årsoppg.: 0
Klient ajourf. lån: Klient gj. s. årsoppg.: 0
4: Særskilte opplysninger
Klausuler:
Styreleder: Per Halvor Bekkelund
Adresse:

---

[d196_d196 | Side [1]]
egges til grunn med mindre annet er spesifisert i
salgsoppgaven. Selgers egenerklæringsskjema følger vedlagt
salgsoppgaven. Interessenter oppfordres til å gjennomgå
Gjenstander som er nevnt i standardlisten, men som ikke dette nøye.
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de Samsvarserklæring: Det fremgår av tilstandsrapporten at
er, uten garanti, med mindre det foreligger en gjeldende det foreligger samsvarserklæring for det

---

[d196_d196 | Side [1]]
der/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: SNO 3
92006250
:ecnerefer
tnemucoD
46

## Side 47

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt

---

[d196_d196 | Side [1]]
ses som kjent for
Kjenner du til manglende brukstillatelse eller kjøper, og det vil ikke være mulig å reklamere på forhold
ferdigattest? som er nevnt i rapporten. Spesielt forhold som er vurdert
Ja. med TG2 og TG3 bør vurderes nøye, da de indikerer
Det foreligger midlertidig brukstillatelse for eiendommen avvik fra normal slitasje og/ eller høy alder, noe som kan
datert 30.04.21 innebære behov for utbedringer. Bygningsdeler som er
merket med TGIU er ikke blitt vurdert av takstmannen.
Kjenner du til om

---

[d196_d196 | Side [1]]
ra Söderberg &
Radonmåling
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
Selger har ikke utført radonmåling. Det er ikke krav om som gir trygghet og profesjonell juridisk hjelp dersom det
dette med mindre boligen er helt eller delvis utleid. oppdages uventede feil eller mangler ved boligen de
neste fem årene. Les mer om Boligkjøperforsikring i
vedlagte materiell eller på https:/ /
Diverse
www.soderbergpartners.no/ eiendom/ boligkjoper/
Det informeres om at ingen kan eie mer enn

---

[d196_d196 | Side [1]]
omt: Eiet
EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt tomteforhold er ikke kontrollert av TOBB. Vi tar derfor forbehold om
riktigheten. Opplysningene må også innhentes fra det offentlige registeret.
BYGNINGSINFO. TOBB har begrenset med informasjon om boligene og bygningene. Vi har kun opprinnelig areal og opprinnelig antall
rom registrert på boligene. Kommunen har oversikt over søknadspliktige endringer som er utført. De har også informasjon om eventuell
vernestatus på bygning,

---

[d196_d196 | Side [1]]
kjøper
avregnes årlig.
5 290 000,‑ (Prisantydning)
0,‑ (Andel av fellesgjeld)
Eiendomsskatt
Omkostninger: Kr 7 260,‑ (2024)
12 500,‑ (Boligkjøperforsikring (valgfritt))
260,‑ (Pantattest kjøper ‑ lagt ut av megler) Eiendomsskatten ble i 2024 beregnet til kr. 7 260,‑.
545,‑ (Tingl.gebyr pantedokument)
545,‑ (Tingl.gebyr skjøte)
Kommunale avgifter
132 250,‑ (Dokumentavgift (forutsatt salgssum: 5 290
000,‑)) Kr 12 746 (2025)
146 100,‑ (Omkostninger totalt) Informasjon: Kommunale avgifter inkluderer gebyrer

---

[d196_d196 | Side [1]]
Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
Beskrivelse Det foreligger midlertidig brukstillatelse for eiendommen datert 30.04.21
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om

---

[d196_d196 | Side [1]]
skifte
(ikke forhåndsvarsel).
GEBYR TOBB VED SALG I FRITTSTÅENDE SAMEIE. Eierskiftegebyr: kr 6 725,-. Vi tar forbehold om at prisene kan endres etter
oppstart av en sak. Noen av prisene beregnes ut fra rettsgebyret og reguleres i samsvar med disse ved årsskiftet. Se eget infoskriv til
megler.
68

## Side 69

Boligopplysninger:
Saksbehandler: Ida Viken Rønning Dato utkjørt: 19.02.26 Side 1 av 2
Sameiet Lilleby Triangel Parkering Vår ref.: 1135/9069 Fødselsdato eier: 24.07.1994
Ladeveien Type: Tingsrettslig

---

[d196_d196 | Side [1]]
lysninger
Klausuler:
Styreleder: Tomas Aarvak
Adresse: Ladeveien 24
Postnr/-sted: 7066 TRONDHEIM
E-post: triangelg@styrepost.no
5: Restanse felleskostnader pr. 19.02.2026
Felleskostnader: 0
Gebyr: 0
Rente: 0
6: Ligning - 2025
Gjeld: 0 Andre inntekter: 493
Annen formue: 25 245 Utgifter: 0
7: Pålydende
Pålydende: Opprinnelig innskudd:
Seksjonsnr: 153
8: Bygning/eiendom
Gårds/bruksnr:415/265 - seksjon:153
Bygningstype: Høyblokk
Feste/eiet tomt: Eiet
EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt

---

[d196_d196 | Side [1]]
ed hvordan bygningsmassen er forsikret.
10: Fasiliteter og andre enhetsopplysninger
SSBnr: H0505
Etasje: 5 Oppvarmingstype: El og fjernvarme
Heis: Ja BRA 74
Parkeringstype: Kjøpt bruksrett i p.kjeller. Følger leilighet ved salg. Se vedtektene. ()
Systemlås: Ja Antall rom: 0
Husdyrhold: Se vedtekter Oppr. antall rom: 4
Livsløp standard: Nei Kategori: Leilighet
Fasiliteter:
PARKERING:
Dersom selgers parkeringsplass(er) IKKE skal selges sammen med leilighet, må selger/megler opplyse dette til

---

[d196_d196 | Side [1]]
egge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel).

---

[d196_d196 | Side [1]]
2, ideell andel 1/ 275, sameietype: Forkjøpsrett: Det foreligger ingen forkjøpsrett på
realsameie eiendommen.
Gnr. 415, bnr. 257, ideell andel 1/ 187, sameietype:
realsameie Styregodkjennelse: Det kreves ikke styregodkjenning av
i Trondheim kommune. ny eier.
Regnskap/ budsjett/ kostnadsøkninger: Årsresultat ‑
Selger
Sameiet Lilleby Triangel G
Synne Nyvoll Olsen Sameiet hadde i 2024 samlede driftsinntekter på kr 4
578 192 og samlede driftskostnader på kr 4 750 538 .
Sameie
Dette ga et negativt årsresultat

---

[d196_d196 | Side [1]]
beidet av Emera som en del av
Eiendommen er tilknyttet offentlig vann‑ og eiendomshandleren. Kjøpekontrakten kan gjennomgås
avløpssystem. Stikkledningene fra eiendommen og ut til hos eiendomsmegler før budet legges inn. Kontakt
det kommunale nettet er private, og eiendomsmegler for eventuelle spørsmål.
vedlikeholdsansvaret for disse påhviler sameiet.
Adkomst til eiendommen skjer via offentlig vei. Selger leverer eiendommen i ryddig og rengjort stand.
Kontrakts‑
Utleie
Adgang til utleie: Seksjonseier

---

[d196_d196 | Side [1]]
tandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når

---

[d196_d196 | Side [1]]
likehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke

---

[d196_d196 | Side [1]]
 ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem

---

[d196_d196 | Side [1]]
malt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller

---

[d196_d196 | Side [1]]
 <10mm og totalt avvik <15 mm pr. rom.
6.4 Kjøkken
Overflater og innredning
Er det påvist fukt /skader rundt vask/kjøleskap/oppvaskmaskin? Nei
Er det påvist skader på kjøkkeninnredning utover normal slitasje? Nei
Oppsummering av overflater og innredning TG-0
Innredning framstår med normal tilstand i forhold til alder.
Avtrekk
Type avtrekk Mekanisk
Er det registrert avvik på avtrekk? Nei
Oppsummering av avtrekk TG-0
Avtrekk er testet med papir og det registreres sug i kanalen.
6.5 Lovlighet / HMS
Er det

---

[d196_d196 | Side [1]]
etongdekke med ukjent bruk av membran/tettesjikt.
Ingen avvik er registrert.
6.2 Vinduer og dører
Beskrivelse
Vinduer med 3-lags glass.
Ytterdør i malt utførelse.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer

---

[d196_d196 | Side [1]]
pir og det registreres sug i kanalen.
6.5 Lovlighet / HMS
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Nei
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Ja
Det foreligger ingen ferdigattest. Det foreligger midlertidig brukstillatelse er datert 30.04.2021.
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk,

---

[d196_d196 | Side [1]]
ato: 24.2.2026 (Gyldig til 24.2.2027)
Samlet vurdering
TG-0 TG-1 TG-2 TG-3 TG-IU
14 0 0 0 0
Tommy Sandersen ts@tft.no Ladeveien 32
GNR: 415 BNR: 265 SNR: 153
Takst-Forum Trøndelag AS 45228072 7066 Trondheim
49

## Side 50

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare

---

[d196_d196 | Side [1]]
s ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Ladeveien 32, 7066 Trondheim 2 av 13
50

## Side 51

2. Om rapporten
Om rapporten

---

[d196_d196 | Side [1]]
for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Er vindu eller dør plassert i våtsone (utsatt for vannsprut)? Nei
Er det gjennomføringer i vegg/tak mot kald sone? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv)
Oppsummering av overflater TG-0
Fallforhold til sluk, og høydeforskjell mellom topp sluk og

---

[d196_d196 | Side [1]]
g luftutskifting i leiligheten, ventilasjonen vurderes å fungere som
tiltenkt. For egen vurdering av avtrekk fra våtrom og kjøkken se respektive punkter i rapporten.
6.11 Våtrom: Bad
Overflate
Ladeveien 32, 7066 Trondheim 11 av 13
59

## Side 60

Beskrivelse av overflate
Flislagt gulv og vegg.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Nei
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket?

---

[d196_d196 | Side [1]]
t sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler

---

[d196_d196 | Side [1]]
relse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Oppsummering av membran, tettesjikt og sluk TG-0
Klemring og membran er ikke synlig på denne type sluk/ utførelse.
Ingen avvik er registrert.
Sanitærutstyr
Beskrivelse
Det er etablert servantskap, klosett med innebygd sisterne, opplegg for vaskemaskin og
innfellbare dusjvegger.
Er det skader på utstyr og innredning? Nei
Ladeveien 32, 7066

---

[d196_d196 | Side [1]]
rt i støpt
Eiendommens
betong. Veggkonstruksjon i betong og tre, utvendige
fasader er med pusset overflate. Taket er
tilstand
flatt og er utvendig tekket med papp eller lignende.
Takstmann: Tommy Sandersen Etasjeskille er et betongdekke. Vindu med 3‑lags
isolerglass.
Type takst avholdt av takstmann: Tilstandsrapport
I forbindelse med salget er det blitt utført en
Sammendrag selgers egenerklæring: Utdrag fra selgers tilstandsrapport av en bygningssakkyndig, som gir en
egenerklæring: teknisk gjennomgang av

---

[d196_d196 | Side [1]]
g, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Ladeveien 32, 7066 Trondheim 8 av 13
56

## Side 57

Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Nei
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10

---

[d196_d196 | Side [1]]
de tilgjengelighet til stoppekran? Nei
Er det dårlig funksjon på stoppekran? Nei
Oppsummering av vannledninger TG-0
Ved enkel test og visuell kontroll av synlige vannrør ble det ikke registrert avvik.
6.8 Elektrisk
Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste Nei
5 år?
Type sikringer Automatsikringer
Sikringsskap er lokalisert i entrè.
Har eier opplyst om arbeider utført etter opprinnelig byggeår? Nei
Er det manglende samsvarserklæring på arbeider

---

[d196_d196 | Side [1]]
6 Trondheim 2 av 13
50

## Side 51

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt

---

[d196_d196 | Side [1]]
testet med papir og det registreres sug i kanalen.
Fuktmåling
Er det foretatt hulltaking fra tilstøtende rom? Nei
Er det påvist indikasjon på skader/fukt ved bruk av fuktsøk/fuktmåling? Nei
Oppsummering av fukt TG-0
Hulltaking er ikke foretatt da badet er en prefabrikkert baderomskabin.
TG-IU er gitt ut ifra manglende mulighet (bygningsmessige hindringer) for hulltaking mot våtsone.
Dokumentasjon
Fremlagt dokumentasjon Nei
Badet er bygd etter TEK 10 eller senere forskrift, og det foreligger ferdigattest.

---

[d196_d196 | Side [1]]
vtale med TOBB Byggdrift, for å nevne noen. I tillegg er avtalen for vaktmester- og
renholdstjenester gjennom TOBB Byggdrift reforhandlet, slik at det nå er inngått en felles
avtale for hele Lilleby Triangel, inkludert Sameiet Lilleby Triangel F.
Økonomisk situasjon:
Sameiet har frem til 2024 hatt en tilfredsstillende økonomi, men det har dessverre vært
utfordringer knyttet til økonomien i Realsameiet, hvor det i perioder har vært behov for å
gjøre ekstraordinære innskudd fra sameiene. Dette har resultert

---

[d196_d196 | Side [1]]



 




93

## Side 94

–

94

## Side 95

Sameiet Lilleby Triangel G - Resultatregnskap 2024
Note Regnskap 2024 Regnskap 2023 Budsjett 2024 Budsjett 2025
Driftsinntekter
Felleskostnader driftsdel 2 581 056 2 909 256 2

---

[d196_d196 | Side [1]]
inger totalt) Informasjon: Kommunale avgifter inkluderer gebyrer for
vann, avløp, renovasjon, eiendomsskatt og feiing. Beløpet
5 436 100,‑ (Totalpris inkl. omkostninger) er basert på fakturerte kostnader fra februar 2024 til
januar 2025.
Estimert totalpris ink. omk
Fellesgjeld
Kr 5 423 600
Lånebetingelser fellesgjeld: Sameiet har ingen lån.
Felleskostnader
Andre kostnader:
Felleskostnader kr 3 686,‑ pr. mnd
TV/ Internett/ Bredbånd: Sameiet har kollektivavtale med
Felleskostnader inkulderer: Totale

---

[d196_d196 | Side [1]]
en i juli 2024 og januar 2025.
På den positive siden ønsker vi å trekke frem at sameiet fra 2024 har startet en
systematisk avsetning til fremtidig vedlikehold. Det er i regnskapet for 2024 avsatt kr.
3.000,- per seksjon, totalt kr. 603.000,-, som avsettes på en konto for øremerket midler til
fremtidig vedlikehold. Dette er et viktig grep for å skape langvarig økonomisk trygghet for
beboerne på Lilleby Triangel.
Fellesaktiviteter:
I 2024 har det blitt gjennomført et beboermøte med blant annet enkel

---

[d196_d196 | Side [1]]
0 -603 000 -603 000
Elektroniske fellesavtaler -1 028 915 -1 088 913 -1 061 280 -976 860
Forsikring -436 327 -522 037 -430 000 -570 000
Kommunale tjenester og renovasjon -12 217 -13 827 -8 000 -8 000
Energi, felles 80 000 -123 347 -120 000 -50 000
Andre driftsutgifter 8 -80 663 -110 622 -30 000 -6 500
Sum driftskostnader -4 750 538 -5 858 214 -4 365 357 -5 092 080
DRIFTSRESULTAT -172 346 -1 194 273 -1 -45 770
Finansinntekter og kostnader
Finansinntekter 54 274 93 707 20 000 50 000
Finanskostnader -925 0 0

---

[d196_d196 | Side [1]]

gjøre ekstraordinære innskudd fra sameiene. Dette har resultert i at det er brukt av
sameiets reserver, noe som også er forklaringen på årets underskudd. En av våre første
aksjoner i Realsameiet var, på bakgrunn av dette, å ta en grundig gjennomgang av
økonomi og drift, slik at vi kunne fastsette en kontingent som var tilstrekkelig for å dekke
nødvendig drift. Basert på denne gjennomgangen så vi det som nødvendig med justeringer
av kontingenten i juli 2024 og januar 2025.
På den positive siden ønsker vi å

---

[d196_d196 | Side [1]]
tnader på kr 4 750 538 .
Sameie
Dette ga et negativt årsresultat på kr 118 997. Årets
Sameiet Lilleby Triangel G største kostnad var kontigent/ felleskostnader og
elektroniske fellesavtaler. Tapet ble dekt gjennom
Organisasjonsnummer: 925 226 092 opptjent egenkapital.
Sameiet Lilleby Triangel G er et eierseksjonssameie som Årsresultat ‑ Realsameiet Lilleby Triangel Fellesarealer
består av 201 boligseksjoner. Forretningsfører er Realsameiet hadde i 2024 samlede driftsinntekter på kr 1
Boligbyggelaget TOBB.

---

[d196_d196 | Side [1]]
olig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
Det har vært utbedringer i bygget ifm problemer på gulvvarmeanlegget. Skal ha blitt blåst isolasjon i himlingen i
Beskrivelse
denne leiligheten. Har ikke opplevd problemer tilknyttet dette selv.
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært

---

[d196_d196 | Side [1]]
dde i 2024 samlede driftsinntekter på kr 1
Boligbyggelaget TOBB. Det ble i 2023 vedtatt en 756 125 og samlede driftskostnader på kr 1 782 033 .
sammenslåing av flere sameier. Dette ga et negativt årsresultat på kr 19 238.
Boligselskapet har negativ egenkapital. Det anbefales at
Alle seksjonseiere eier en ideell andel i Realsameiet det budsjetteres med positivt resultat i årene fremover,
Lilleby Triangel Parkering (org.nr. 925 505 358) og som over tid vil bidra til positiv egenkapital. Det er
Realsameiet

---

[d196_d196 | Side [1]]
 1094/153 Fødselsdato eier: 24.07.1994
Ladeveien 32 Type: Sameie frittstående
7066 TRONDHEIM Eiere: Synne Nyvoll Olsen
Organisasjonsnr: 925 226 092 Seksjonsnr: 153
1: Felleskostnader
Tot. innev. måned: 3 467
Felleskostnader: Felleskostnader drift 1 397
Felleskostnad driftsdel 374
Tilleggsytelser: Kontingent fellesareal 552
Fastbeløp måling og avregning energi 127
Tillegg elektroniske fellesavtaler 498
Bod 189
Måler: 1094 Varme Lilleby Triangel G: 1094/153 A konto Fjernvarme ( 227 - 330
153)
MÅLERE:

---

[d196_d196 | Side [1]]
norar administrative tjenester -3 569 -22 855 -19 000 0
Eksterne honorar 3 -94 574 -1 091 106 -26 000 -18 750
Kontingent/felleskostnader 4 -1 389 091 -1 455 281 -779 076 -1 411 020
Drifts- og serviceavtaler 5 -208 398 -194 884 -260 000 -252 500
Vaktmestertjenester -147 185 -147 763 -170 000 -135 000
Renholdstjenester -199 488 -338 743 -275 000 -332 100
Løpende vedlikehold 6 -163 395 -73 350 -100 000 -100 000
Periodisk vedlikehold 7 -603 000 0 -603 000 -603 000
Elektroniske fellesavtaler -1 028 915 -1 088

---

[d196_d196 | Side [1]]
m over tid vil bidra til positiv egenkapital. Det er
Realsameiet Lilleby Triangel Fellesarealer (org.nr. 825 215 iverksatt tiltak med ny avtale for kostnadsfordeling mot
972). Sameiets fellesarealer, parkeringsplasser, boder og næringsdel samt. gradvis opptrapping av kontingenten
sykkelparkering er organisert i disse to realsameiene. for å bedre betalingsevne. Om dagens budsjetterte
kostnader står seg anbefales boligselskapet å øke
Grilling på balkong er kun tillatt med elektrisk‑ eller kontingenten

---

[d196_d196 | Side [1]]

Driftsinntekter
Felleskostnader driftsdel 2 581 056 2 909 256 2 525 000 2 658 430
Tillegg elektroniske fellesavtaler 1 061 280 974 913 1 061 280 976 860
Andre tillegg 1 935 856 779 772 779 076 1 411 020
Sum driftsinntekter 4 578 192 4 663 941 4 365 356 5 046 310
Driftskostnader
Personalkostnader 2 -32 500 -33 292 -32 501 -49 350
Styrehonorar -230 496 -236 114 -230 500 -350 000
Forretningsførerhonorar -200 718 -406 079 -221 000 -229 000
Honorar administrative tjenester -3 569 -22 855 -19 000 0
Eksterne

---

[d196_d196 | Side [1]]
ling på balkong er kun tillatt med elektrisk‑ eller kontingenten ytterligere for styrke kapitalen.
gassgrill.
Årsresultat ‑ Sameiet Lilleby Triangel Parkering
Forretningsfører: TOBB boligbyggelag Sameiet hadde i 2024 samlede driftsinntekter på kr 432
696 og samlede driftskostnader på kr 565 800 . Dette ga
Sameiets forsikringsselskap: Gjensidige Forsikring et negativt årsresultat på kr 129 463. Tapet ble dekt
gjennom opptjent egenkapital.
36

## Side 37

OM EIENDOMMEN
Plan‑ID: r20220031 ‑ Fv 6668,

---

[d196_d196 | Side [1]]
eskostnader forfaller til betaling den 1. i hver måned. Ved salg faktureres felleskostnadene til kjøper fra
1. i første hele måned. Ved overtakelse på annen dato enn 1. må kjøper og selger gjøre opp seg imellom. Felleskostnadene bør sjekkes
før overtakelse, da det kan ha skjedd endringer etter avgitt informasjon.
3: Fellesgjeld
Ajourf. Andel f.gj. (lån): 0 Gjeld siste årsoppg.: 0
Klient ajourf. lån: Klient gj. s. årsoppg.: 0
4: Særskilte opplysninger
Klausuler:
Styreleder: Tomas Aarvak
Adresse: Ladeveien

---

[d196_d196 | Side [1]]
ing, hvor det er avholdt 20
styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken og
erklæringen mellom bolig og næring vedrørende rett til bruk av arealer. Det har også blitt
gjennomført femårsbefaring i regi av Realsameiet.
Sammenslåing og stordriftsfordeler:
Et av de mest sentrale argumentene for sammenslåing var stordriftsfordeler og
kostnadsbesparelse ved sammenslåing av sameiene. Vi opplevde allerede fra
sammenslåingsdatoen besparelser ved redusert forretningsfører- og

---

[d196_d196 | Side [1]]
24 har det blitt gjennomført et beboermøte med blant annet enkel servering i vår egen
Side 13 av 14
96

## Side 97

paviljong. På eget initiativ er det opprettet et designert hagelag som jobber for å holde våre
felles grøntområdene i stell. Vi ønsker også å trekke frem Lillebyfestivalen, som er et
positivt tilskudd til nærmiljøet, hvor sameiet bidrar aktivt.
Styret i Sameiet Lilleby Triangel G
Årsmeldingen er godkjent av styret.
Side 14 av 14
97

## Side 98

Planstatus
Trondheim
MATRIKKELENHET
Kommune Gnr

---

[d196_d196 | Side [1]]
ed både seng og
kontorløsning.

## Side 28

Plantegning

## Side 29

Plantegning

## Side 30

LADEVEIEN 32
OM EIENDOMMEN

## Side 31

OM EIENDOMMEN
OM EIENDOMMEN
‑ Tillegg elektroniske fellesavtaler (TV/ internett): kr 498,‑
Økonomi
‑ Bod: kr 189,‑
‑ A konto Fjernvarme: kr 330,‑
Prisantydning
‑ Parkering: kr 219,‑
Kr 5 290 000
Sameiet har fellesmåling for fjernvarme og varmt‑ og
kaldtvann med månedlig a‑konto‑betaling. Forbruket
Omkostning kjøper
avregnes årlig.
5 290 000,‑ (Prisantydning)
0,‑ (Andel av

---

[d196_d196 | Side [1]]
es til rette for inntil 400
oppvarmingskilde, vil ikke dette bli inkludert i handelen. boliger og 1 200 m2 næringsformål.
Kopi av situasjonskart, målebrev, reguleringsplaner m/
Regulerings og arealplaner
bestemmelser etc. ligger vedlagt i salgsoppgaven eller
Eiendommen er regulert til kombinert bebyggelse og kan fås ved henvendelse til megler. Vi oppfordrer
anleggsformål, bolig/ forretning/ tjenesteyting/ næring i interessenter til å gjøre seg kjent med disse.
henhold til reguleringsplan

---

[d196_d196 | Side [1]]
Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r20130048 Jarleveien/Ladeveien, del av Lilleby (25.8.2016) Kombinert bebyggelse og anleggsformål 1773.02m2
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
r0343 Jarleveien, Stjørdalsveien, Ladeveien og jernbanen (7.3.1991)
r0634 Jarleveien - Lade Alle´ - Bygrensen - Stjørdalsveien (21.2.1963)
r20090017 Lillebyområdet (26.9.2013)
r20130010 Lillebyområdet B1 - B2 (25.9.2014)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en

---

[d196_d196 | Side [1]]
rmasjonen. Side 1 av 2
103

## Side 104

Tegnforklaring
KpOmråde kommuneplan Eiendomsgrense god Eiendomsgrense dårlig
gjeldende nøyaktighet nøyaktighet
Eiendomsgrense generert Eiendomsgrense fiktiv Veg
Bestemmelsesområde #3 Bestemmelsesområde #4 Bestemmelseområde #12
Mobilitetsfunksjon Sjøbad Strandveikaia Bynaturpark
Hensyn bevaring naturmiljø Hensyn bevaring kulturmiljø Turveg / turdrag
Framtidig turveg / turdrag Jernbane - på bakken Jernbane - bro
Kollektivtrase Framtidig kollektivtrase

---

[d196_d196 | Side [1]]
-/sykkelveg Felles avkjørsel
Kontor/Industri RpBestemmelseOmråde Bevaring kulturmiljø
Frisikt Andre sikringssoner Boligbebyggelse
Boligbebyggelse- Renovasjonsanlegg Kombinert bebyggelse og
blokkbebyggelse anleggsformål
Veg Kjøreveg Fortau
Gatetun Gangveg/gangareal/gågate Sykkelveg/-felt
Annen veggrunn - grøntareal Kollektivholdeplass Parkeringsplasser
Kombinerte formål for Turveg Park
samferdselsanlegg og/eller
teknisk infrastrukturtraseer
RpFormålGrense RpGrense Byggegrense
RpBestemmelseOmråde Parkering

---

[d196_d196 | Side [1]]
on punkt Avslag dispensasjon
RpFormålGrense RpAngittHensynGrense RpGrense
RpSikringGrense Stengning av avkjørsel Avkjørsel - både inn og
utkjøring
Bygg, kulturminner, mm som Byggegrense Planlagt bebyggelse
skal bevares
Bebyggelse som inngår i Bebyggelse som forutsettes Regulert senterlinje
planen fjernet
Frisiktlinje Måle- og avstandslinje RpRegulertHøyde
Bevaring av landskap og Frisiktsone ved veg Blokkbebyggelse
vegetasjon
Kjøreveg Gang-/sykkelveg Felles avkjørsel
Kontor/Industri RpBestemmelseOmråde

---

[d196_d196 | Side [1]]

97

## Side 98

Planstatus
Trondheim
MATRIKKELENHET
Kommune Gnr Bnr Fnr Snr Adresse
5001 - Trondheim 415 265 0 153 Ladeveien 32, 7066 TRONDHEIM
KOMMUNEPLAN/KOMMUNEDELPLAN
Eiendommen ligger i område som i kommuneplanen/kommunedelplanen er avsatt til Plan (vedtaksdato) Areal
Sentrumsformål - Framtidig Kommuneplanens arealdel 2022-2034 (27.3.2025) 2825.04m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r20130048

---

[d196_d196 | Side [1]]
på bakken Jernbane - bro
Kollektivtrase Framtidig kollektivtrase Hovedveg
Hovedvegnett sykkel Byggesone 1 Byggesone 2
Byggesone 3 Offentlig eller privat Idrettsanlegg
tjenesteyting
Grav og urnelund Blå/grønnstruktur
19.02.2026 12:31:33 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
104

## Side 105




  





           

 





 

---

[d196_d196 | Side [1]]
tal.
36

## Side 37

OM EIENDOMMEN
Plan‑ID: r20220031 ‑ Fv 6668, Maskinistgata, del av
Vedtekter/ husordensregler
Strandveien og Stiklestadveien
Eier forplikter seg til å gjøre seg kjent med vedtekter og Planens formål er å sikre infrastruktur til fremtidig
husordensregler. Kopi av disse ligger vedlagt i metrobusstrasé over Nyhavna, ivareta gode løsninger for
salgsoppgaven. gående og syklende, og å sikre tilstrekkelig adkomst til
området.
Energimerke
Plan‑ID: r20180039 ‑ Reina (Planforslag)
Energikarakter:

---

[d196_d196 | Side [1]]
liger.
av hele prosjektet innen 01.07.2026, med varsel om De nye arealbegrepene er:
tvangsmulkt. Det er utbygger/ tiltakshavers ansvar å
sørge for at ferdigattest foreligger før midlertidig Bruksareal BRA:
brukstillatelse løper ut på tid. BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
Det er mottatt byggetegninger fra kommunen, datert boenheten og som tilhører denne, for eksempel eksterne
2017. Dagens planløsning samsvarer med tegningene.

---

[d196_d196 | Side [1]]
GGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Ja
5001 k20110088 Lade og Leangen
19.02.2026 12:31:14 Side 1 av 2
98

## Side 99

5001 r20220031 Fv 6668, Maskinistgata, del av Strandveien og Stiklestadveien
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Ja
5001 r20180039 Reina
5001

---

[d196_d196 | Side [1]]
0 m2 til boligformål
salgsoppgave. og 4 150 m2 til forretninger, bevertning, tjenesteyting og
kontor.
Oppvarming
Plan‑ID: r20220025 ‑ Fridheimveien 1 og 3 og Jarleveien
Boligen varmes opp med fjernvarme via vannbåren 12 (Planforslag)
gulvvarme. Hensikten med planarbeidet er å legge til rette for bolig,
næring, parkeringskjeller, torg og gate ved Fridheimveien
Hvis et rom på visningen mangler fast installert 1 til 3 og Jarleveien 12. Det legges til rette for inntil 400
oppvarmingskilde, vil ikke dette bli

---

[d196_d196 | Side [1]]
g sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
109

## Side 110

Primære transportmidler Varer/Tjenester
LadeTorget 9 min
1. Buss
Boots apotek LadeTorget 9 min
2. Egen bil
3. Sykkel
Aldersfordeling barn (0-18 år)
Kollektivtilbud 63% i barnehagealder
18% 6-12 år
Veldig bra 88/100
8% 13-15 år
11% 16-18 år
Turmulighetene
Nærhet til skog og mark 78/100
Matvareutvalg
Stort mangfold

---

[d196_d196 | Side [1]]
ng til ny
arbeid) hjemmelshaver:
Hensikten med planarbeidet er å fastsette nye rammer 30.04.2020 ‑ Dokumentnr: 2398390 ‑ Seksjonering
for detaljplanlegging innenfor utbyggingsområdene på Opprettet seksjoner:
Lade og Leangen. Snr: 153
Formål: Bolig
Sameiebrøk: 74/ 2898
Dokumenter kan fås ved henvendelse til megler.
37

## Side 38

OM EIENDOMMEN
Kjøper og selger er forpliktet til å signere den standard
Vei, vann og avløp
kjøpekontrakten utarbeidet av Emera som en del av
Eiendommen er tilknyttet offentlig

---

[d196_d196 | Side [1]]
manglende opplysninger i informasjonen. Side 1 av 2
100

## Side 101

Tegnforklaring
RpOmråde igangsatt RpOmråde forslag RpOmråde vedtatt linje - på
bakkenivå
RpOmråde vedtatt - under RpOmråde vedtatt - på RpOmråde vedtatt - under
bakkenivå bakkenivå bakkenivå
Eiendomsgrense god Eiendomsgrense dårlig Eiendomsgrense fiktiv
nøyaktighet nøyaktighet
Veg Fylkesveg gatenavn . Kommunalveg gatenavn .
Privatveg gatenavn . Plan dispensasjon punkt Avslag dispensasjon
RpFormålGrense RpAngittHensynGrense

---

[d196_d196 | Side [1]]
berører eiendommen?
PLANID Plannavn
Ja
5001 r20180039 Reina
5001 r20180046 Jarlheimsletta
5001 r20220025 Fridheimveien 1 og 3 og Jarleveien 12
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
19.02.2026 12:31:14 Side 2 av 2
99

## Side 100

Reguleringsplaner
Eiendom: Gnr: 415 Bnr: 265 Fnr: 0 Snr: 153
Adresse: Ladeveien 32
Målestokk
7066 TRONDHEIM
Trondheim 1:1000
Annen info:
19.02.2026 12:31:51 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
100

## Side

---

[d196_d196 | Side [1]]
pFormålGrense RpGrense Byggegrense
RpBestemmelseOmråde Parkering Parkeringshus/-anlegg
19.02.2026 12:31:51 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
101

## Side 102

102

## Side 103

Kommuneplanens arealdel
Eiendom: Gnr: 415 Bnr: 265 Fnr: 0 Snr: 153
Adresse: Ladeveien 32
Målestokk
7066 TRONDHEIM
Trondheim 1:5000
Annen info:
19.02.2026 12:31:33 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
103

## Side 104

Tegnforklaring
KpOmråde

---

[d196_d196 | Side [1]]
tene
Nærhet til skog og mark 78/100
Matvareutvalg
Stort mangfold 76/100
Familiesammensetning
Par m. barn
Sport
Jarlebanen - kgb 4 min
Par u. barn
Fotball 0.3 km
Lilleby skole 5 min
Enslig m. barn
Aktivitetshall, ballspill 0.4 km
Flex Gym 2 min
Enslig u. barn
Impulse Treningssenter Lade 10 min
Flerfamilier
Boligmasse
0% 54%
6% rekkehus
Lilleby
93% blokk
Trondheim
1% annet
Norge
Sivilstand
Norge
Gift 16% 33%
«Stille, rolig, nært det meste»
Ikke gift 77% 54%
Sitat fra en lokalkjent
Separert 6%

---

[d196_d196 | Side [1]]
andre seksjonseiere i Sameiet Lilleby Triangel
Beliggenhet
G. En seksjonseier kan eie og erverve en eller flere
Eiendommen har en attraktiv beliggenhet på Lilleby, med parkeringsplasser i realsameiet. Plassen kan kun leies ut
sentral, men skjermet plassering i et område som har til andre seksjonseiere.
utviklet seg fra industri til et moderne og populært
boligstrøk. Her bor du med nærhet til alt, enten det er
Adkomst
dagligvare, jobb eller byens utvalg av restauranter og
servicetilbud. På høyre side i

---

[d196_d196 | Side [1]]
kke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg

---

[d196_d196 | Side [1]]
eder 11
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: SNO 1
92006250
:ecnerefer
tnemucoD
44

## Side 45

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av

---

[d196_d196 | Side [1]]
s skriftlig om alle
overdragelser og leieforhold. Ved eierskifte betales et Boligselgerforsikring: Selger har ikke tegnet
eierskiftegebyr til forretningsfører for sameiet. Ingen kan boligselgerforsikring.
kjøpe eller på annen måte erverve flere enn to
boligseksjoner i sameiet. Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg &
Radonmåling
Partners. Boligkjøperforsikring er en

---

[d196_d196 | Side [1]]
r vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks.

---

[d196_d196 | Side [1]]
gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver

---

[d196_d196 | Side [1]]
ningssakkyndig, som gir en
egenerklæring: teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring,
Har du ladeanlegg/ ladeboks for elbil i dag? er vedlagt salgsoppgaven. Det er viktig at interessenter
Ja. grundig gjennomgår disse dokumentene før bud legges
Det er tilrettelagt for elbillader på parkeringsplassen, men inn.
har ikke strømavtale på dette nå
All informasjon i tilstandsrapporten anses som kjent for
Kjenner du til manglende brukstillatelse eller

---

[d196_d196 | Side [1]]
 Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle

---

[d196_d196 | Side [1]]
om har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
39

## Side 40

OM EIENDOMMEN
Ved beregning av krav om prisavslag eller erstatning må finansieringsplan, akseptfrist,

---

[d196_d196 | Side [1]]
på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved

---

[d196_d196 | Side [1]]
 datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
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
Med vår boligkjøperforsikring er du i trygge hender
hvis du

---

[d196_d196 | Side [1]]
RSIKRING SAMEIE. Det varierer hvordan bygningsmassen i et sameie er forsikret. Enkelte sameier har felles bygningsforsikring evt.
felles forsikring av deler av bygningsmassen. Andre har ikke inngått felles forsikringsavtale. Hver enkelt seksjonseier må alltid skaffe
egen innboforsikring. Ved skifte av forsikringsselskap kan det ta tid før våre opplysninger er oppdatert. Vi gjør derfor eiere/ kjøpere
oppmerksom på at de må gjøre seg kjent med hvordan bygningsmassen er forsikret.
10: Fasiliteter og andre

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende ferdigattest – kun midlertidig brukstillatelse foreligger",
      "evidence": [
        "Det foreligger ingen ferdigattest. Det foreligger midlertidig brukstillatelse er datert 30.04.2021.",
        "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Det foreligger midlertidig brukstillatelse for eiendommen datert 30.04.21",
        "Det er utbygger/tiltakshavers ansvar å sørge for at ferdigattest foreligger før midlertidig brukstillatelse løper ut på tid.",
        "Frist for ferdigattest for hele prosjektet innen 01.07.2026, med varsel om tvangsmulkt."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Negativt årsresultat i Sameiet Lilleby Triangel G og negativ egenkapital i tilknyttede realsameier – risiko for økte felleskostnader",
      "evidence": [
        "Sameiet hadde i 2024 samlede driftsinntekter på kr 4 578 192 og samlede driftskostnader på kr 4 750 538. Dette ga et negativt årsresultat på kr 118 997.",
        "Boligselskapet har negativ egenkapital. Det anbefales at det budsjetteres med positivt resultat i årene fremover.",
        "Det er iverksatt tiltak med ny avtale for kostnadsfordeling mot næringsdel samt gradvis opptrapping av kontingenten for å bedre betalingsevne. Om dagens budsjetterte kostnader står seg anbefales boligselskapet å øke kontingenten ytterligere for styrke kapitalen.",
        "Sameiet Lilleby Triangel Parkering hadde i 2024 samlede driftsinntekter på kr 432 696 og samlede driftskostnader på kr 565 800. Dette ga et negativt årsresultat på kr 129 463.",
        "Realsameiet hadde i 2024 samlede driftsinntekter på kr 1 756 125 og samlede driftskostnader på kr 1 782 033. Dette ga et negativt årsresultat på kr 19 238."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Ekstraordinære innskudd fra sameiene til Realsameiet har tært på sameiets reserver",
      "evidence": [
        "Sameiet har frem til 2024 hatt en tilfredsstillende økonomi, men det har dessverre vært utfordringer knyttet til økonomien i Realsameiet, hvor det i perioder har vært behov for å gjøre ekstraordinære innskudd fra sameiene.",
        "Dette har resultert i at det er brukt av sameiets reserver, noe som også er forklaringen på årets underskudd.",
        "Basert på denne gjennomgangen så vi det som nødvendig med justeringer av kontingenten i juli 2024 og januar 2025."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Kjente problemer med gulvvarmeanlegget i bygget – usikkerhet rundt omfang og fremtidige utbedringskostnader",
      "evidence": [
        "Det har vært utbedringer i bygget ifm problemer på gulvvarmeanlegget. Skal ha blitt blåst isolasjon i himlingen i denne leiligheten. Har ikke opplevd problemer tilknyttet dette selv.",
        "Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken.",
        "Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Ja."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Ingen radonmåling er utført",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R6",
      "description": "Pågående og fremtidige reguleringsplaner i området kan medføre endringer i omgivelsene",
      "evidence": [
        "Plan-ID: k20110088 - Lade og Leangen (Regulering under arbeid). Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen.",
        "Plan-ID: r20220031 - Fv 6668, Maskinistgata, del av Strandveien og Stiklestadveien. Planens formål er å sikre infrastruktur til fremtidig metrobusstrasé over Nyhavna.",
        "Planforslag: r20180039 Reina, r20180046 Jarlheimsletta, r20220025 Fridheimveien 1 og 3 og Jarleveien 12.",
        "Eiendommen er i kommuneplanens arealdel avsatt til sentrumsformål - framtidig og byggesone 1."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R7",
      "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset rekursmulighet mot selger",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R8",
      "description": "El-anlegget er ikke kontrollert av el-tilsyn eller utvidet el-kontroll de siste 5 år",
      "evidence": [
        "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei"
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Boligselskapet er ikke med i sikringsordning for felleskostnader",
      "evidence": [
        "Boligselskapet er ikke med i sikringsordning."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R10",
      "description": "Begrensede bygningsopplysninger fra TOBB – usikkerhet rundt areal og bygningsendringer",
      "evidence": [
        "BYGNINGSINFO. TOBB har begrenset med informasjon om boligene og bygningene. Vi har kun opprinnelig areal og opprinnelig antall rom registrert på boligene. Kommunen har oversikt over søknadspliktige endringer som er utført.",
        "EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt tomteforhold er ikke kontrollert av TOBB. Vi tar derfor forbehold om riktigheten."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R11",
      "description": "Tvister i sameiet knyttet til erklæringen mellom bolig og næring vedrørende rett til bruk av arealer",
      "evidence": [
        "Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken og erklæringen mellom bolig og næring vedrørende rett til bruk av arealer."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R12",
      "description": "Elbillader på parkeringsplass mangler strømavtale",
      "evidence": [
        "Har du ladeanlegg/ladeboks for elbil i dag? Ja. Det er tilrettelagt for elbillader på parkeringsplassen, men har ikke strømavtale på dette nå."
      ],
      "source_documents": [
        "d196_d196"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "gulvvarmesak tvist omfang kostnad utbedring sameiet Lilleby Triangel",
    "ferdigattest tvangsmulkt frist 2026 utbygger ansvar",
    "erklæring bolig næring arealbruk tvist status løsning",
    "egenkapital balanse sameiet Lilleby Triangel G 2024 regnskap",
    "sikringsordning felleskostnader konsekvens manglende",
    "radonmåling leilighet 5. etasje risiko",
    "vedlikeholdsplan fremtidig kostnad sameiet Lilleby Triangel",
    "kollektiv el-kontroll sameiet bygning felles anlegg"
  ],
  "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende ferdigattest (0.98):** Meget godt dokumentert. Bekreftet i tilstandsrapport (lovlighet/HMS-seksjonen), selgers egenerklæring og salgsoppgaven. Frist 01.07.2026 med tvangsmulkt er kritisk. Confidence opprettholdes på 0.98.\n\n**R2 – Negativt årsresultat og negativ egenkapital (0.97):** Meget godt dokumentert med konkrete tall fra resultatregnskap for alle tre enheter (Sameiet Lilleby Triangel G, Parkering og Realsameiet). Styret anbefaler økt kontingent. Confidence opprettholdes på 0.97.\n\n**R3 – Ekstraordinære innskudd tært på reserver (0.95):** Godt dokumentert i styrets årsmelding. Direkte årsakssammenheng mellom ekstraordinære innskudd og årets underskudd er bekreftet. Confidence opprettholdes på 0.95.\n\n**R4 – Gulvvarmeanlegg (0.92 → 0.90):** Dokumentert i egenerklæring og nevnt som årsak til ekstraordinære styremøter. Selger opplyser at det er blåst isolasjon i himlingen i denne leiligheten, men har ikke opplevd problemer selv. Omfang og fremtidige kostnader er uklare. Justeres marginalt ned til 0.90 da det mangler konkret informasjon om tvistens status og kostnadsestimat.\n\n**R5 – Ingen radonmåling (0.88 → 0.80):** Bekreftet i egenerklæring og salgsoppgave. Risikoen er reell men begrenset for en leilighet i 5. etasje (radon er typisk høyere i lavere etasjer/kjeller). Justeres ned til 0.80.\n\n**R6 – Reguleringsplaner (0.85 → 0.82):** Godt dokumentert med konkrete plan-IDer. Kommuneplanens arealdel viser \"sentrumsformål – framtidig\", noe som indikerer potensiell fremtidig utvikling. Justeres marginalt ned til 0.82 da det er usikkert hvilken konkret påvirkning planene vil ha på denne eiendommen.\n\n**R7 – Ingen boligselgerforsikring (0.90):** Klart bekreftet i salgsoppgaven. Kjøper kan tegne boligkjøperforsikring, men selger er ikke dekket. Confidence opprettholdes på 0.90.\n\n**R8 – El-anlegg ikke kontrollert (0.85 → 0.82):** Bekreftet i tilstandsrapporten. Boligen er fra 2021 (relativt ny), noe som reduserer risikoen noe, men manglende kontroll er likevel et avvik. Justeres til 0.82.\n\n**R9 – Ikke med i sikringsordning (0.80 → 0.78):** Bekreftet i TOBB-dokumentet. Konsekvensen er at ved manglende betaling av felleskostnader fra andre sameiere er det ingen forsikring som dekker dette. Justeres marginalt ned til 0.78.\n\n**R10 – Begrensede bygningsopplysninger fra TOBB (0.75 → 0.72):** Bekreftet i TOBB-dokumentet. Risikoen er reell men begrenset da tilstandsrapporten er utarbeidet og samsvarer med byggetegninger fra 2017. Justeres til 0.72.\n\n**R11 – Tvist bolig/næring arealbruk (0.80 → 0.82):** Bekreftet i årsmelding. Dette er en separat tvist fra gulvvarmesaken og er godt dokumentert. Justeres opp til 0.82 da dette er en pågående tvist som kan ha økonomiske konsekvenser.\n\n**R12 – Elbillader uten strømavtale (0.78 → 0.75):** Bekreftet i egenerklæring. Risikoen er begrenset men reell – kjøper kan ikke bruke laderen uten å etablere strømavtale. Justeres til 0.75.\n\n**Manglende risikoer identifisert:**\n- Ingen identifisert risiko knyttet til at boligen varmes opp med fjernvarme via vannbåren gulvvarme, kombinert med kjente problemer i gulvvarmeanlegget i bygget – dette bør undersøkes nærmere.\n- Ingen risiko knyttet til vedlikeholdsplan/fond: Sameiet har startet avsetning til vedlikehold (kr 603 000 i 2024), men det er uklart om dette er tilstrekkelig for et relativt nytt bygg med kjente tekniske problemer.\n- Ingen risiko knyttet til at sameiet nylig har gjennomgått sammenslåing (2023), noe som kan medføre uforutsette kostnader og administrative utfordringer.\n- Ingen eksplisitt risiko knyttet til at parkeringsplassen er organisert i et realsameie med negativt årsresultat (kr -129 463 i 2024).\n"
}

## Raw Response
```json
{
  "id": "msg_01L6pjdGDK1c3vCmFzwGgGxw",
  "container": null,
  "content": [
    {
      "id": "toolu_01KWoCq3QRVY9DUUT44phGvQ",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende ferdigattest – kun midlertidig brukstillatelse foreligger",
            "evidence": [
              "Det foreligger ingen ferdigattest. Det foreligger midlertidig brukstillatelse er datert 30.04.2021.",
              "Kjenner du til manglende brukstillatelse eller ferdigattest? Ja. Det foreligger midlertidig brukstillatelse for eiendommen datert 30.04.21",
              "Det er utbygger/tiltakshavers ansvar å sørge for at ferdigattest foreligger før midlertidig brukstillatelse løper ut på tid.",
              "Frist for ferdigattest for hele prosjektet innen 01.07.2026, med varsel om tvangsmulkt."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Negativt årsresultat i Sameiet Lilleby Triangel G og negativ egenkapital i tilknyttede realsameier – risiko for økte felleskostnader",
            "evidence": [
              "Sameiet hadde i 2024 samlede driftsinntekter på kr 4 578 192 og samlede driftskostnader på kr 4 750 538. Dette ga et negativt årsresultat på kr 118 997.",
              "Boligselskapet har negativ egenkapital. Det anbefales at det budsjetteres med positivt resultat i årene fremover.",
              "Det er iverksatt tiltak med ny avtale for kostnadsfordeling mot næringsdel samt gradvis opptrapping av kontingenten for å bedre betalingsevne. Om dagens budsjetterte kostnader står seg anbefales boligselskapet å øke kontingenten ytterligere for styrke kapitalen.",
              "Sameiet Lilleby Triangel Parkering hadde i 2024 samlede driftsinntekter på kr 432 696 og samlede driftskostnader på kr 565 800. Dette ga et negativt årsresultat på kr 129 463.",
              "Realsameiet hadde i 2024 samlede driftsinntekter på kr 1 756 125 og samlede driftskostnader på kr 1 782 033. Dette ga et negativt årsresultat på kr 19 238."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Ekstraordinære innskudd fra sameiene til Realsameiet har tært på sameiets reserver",
            "evidence": [
              "Sameiet har frem til 2024 hatt en tilfredsstillende økonomi, men det har dessverre vært utfordringer knyttet til økonomien i Realsameiet, hvor det i perioder har vært behov for å gjøre ekstraordinære innskudd fra sameiene.",
              "Dette har resultert i at det er brukt av sameiets reserver, noe som også er forklaringen på årets underskudd.",
              "Basert på denne gjennomgangen så vi det som nødvendig med justeringer av kontingenten i juli 2024 og januar 2025."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Kjente problemer med gulvvarmeanlegget i bygget – usikkerhet rundt omfang og fremtidige utbedringskostnader",
            "evidence": [
              "Det har vært utbedringer i bygget ifm problemer på gulvvarmeanlegget. Skal ha blitt blåst isolasjon i himlingen i denne leiligheten. Har ikke opplevd problemer tilknyttet dette selv.",
              "Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken.",
              "Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Ja."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Ingen radonmåling er utført",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R6",
            "description": "Pågående og fremtidige reguleringsplaner i området kan medføre endringer i omgivelsene",
            "evidence": [
              "Plan-ID: k20110088 - Lade og Leangen (Regulering under arbeid). Hensikten med planarbeidet er å fastsette nye rammer for detaljplanlegging innenfor utbyggingsområdene på Lade og Leangen.",
              "Plan-ID: r20220031 - Fv 6668, Maskinistgata, del av Strandveien og Stiklestadveien. Planens formål er å sikre infrastruktur til fremtidig metrobusstrasé over Nyhavna.",
              "Planforslag: r20180039 Reina, r20180046 Jarlheimsletta, r20220025 Fridheimveien 1 og 3 og Jarleveien 12.",
              "Eiendommen er i kommuneplanens arealdel avsatt til sentrumsformål - framtidig og byggesone 1."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R7",
            "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset rekursmulighet mot selger",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R8",
            "description": "El-anlegget er ikke kontrollert av el-tilsyn eller utvidet el-kontroll de siste 5 år",
            "evidence": [
              "Er det foretatt kontroll av det lokale el-tilsyn eller utført utvidet el-kontroll i løpet av de siste 5 år? Nei"
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Boligselskapet er ikke med i sikringsordning for felleskostnader",
            "evidence": [
              "Boligselskapet er ikke med i sikringsordning."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R10",
            "description": "Begrensede bygningsopplysninger fra TOBB – usikkerhet rundt areal og bygningsendringer",
            "evidence": [
              "BYGNINGSINFO. TOBB har begrenset med informasjon om boligene og bygningene. Vi har kun opprinnelig areal og opprinnelig antall rom registrert på boligene. Kommunen har oversikt over søknadspliktige endringer som er utført.",
              "EIENDOMSINFO. Opplysningene ang gårds- og bruksnr samt tomteforhold er ikke kontrollert av TOBB. Vi tar derfor forbehold om riktigheten."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R11",
            "description": "Tvister i sameiet knyttet til erklæringen mellom bolig og næring vedrørende rett til bruk av arealer",
            "evidence": [
              "Det har blitt gjennomført 20 styremøter hver, i tillegg til flere ekstraordinære møter knyttet til gulvvarmesaken og erklæringen mellom bolig og næring vedrørende rett til bruk av arealer."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R12",
            "description": "Elbillader på parkeringsplass mangler strømavtale",
            "evidence": [
              "Har du ladeanlegg/ladeboks for elbil i dag? Ja. Det er tilrettelagt for elbillader på parkeringsplassen, men har ikke strømavtale på dette nå."
            ],
            "source_documents": [
              "d196_d196"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "gulvvarmesak tvist omfang kostnad utbedring sameiet Lilleby Triangel",
          "ferdigattest tvangsmulkt frist 2026 utbygger ansvar",
          "erklæring bolig næring arealbruk tvist status løsning",
          "egenkapital balanse sameiet Lilleby Triangel G 2024 regnskap",
          "sikringsordning felleskostnader konsekvens manglende",
          "radonmåling leilighet 5. etasje risiko",
          "vedlikeholdsplan fremtidig kostnad sameiet Lilleby Triangel",
          "kollektiv el-kontroll sameiet bygning felles anlegg"
        ],
        "reasoning": "\nGjennomgang av alle 12 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende ferdigattest (0.98):** Meget godt dokumentert. Bekreftet i tilstandsrapport (lovlighet/HMS-seksjonen), selgers egenerklæring og salgsoppgaven. Frist 01.07.2026 med tvangsmulkt er kritisk. Confidence opprettholdes på 0.98.\n\n**R2 – Negativt årsresultat og negativ egenkapital (0.97):** Meget godt dokumentert med konkrete tall fra resultatregnskap for alle tre enheter (Sameiet Lilleby Triangel G, Parkering og Realsameiet). Styret anbefaler økt kontingent. Confidence opprettholdes på 0.97.\n\n**R3 – Ekstraordinære innskudd tært på reserver (0.95):** Godt dokumentert i styrets årsmelding. Direkte årsakssammenheng mellom ekstraordinære innskudd og årets underskudd er bekreftet. Confidence opprettholdes på 0.95.\n\n**R4 – Gulvvarmeanlegg (0.92 → 0.90):** Dokumentert i egenerklæring og nevnt som årsak til ekstraordinære styremøter. Selger opplyser at det er blåst isolasjon i himlingen i denne leiligheten, men har ikke opplevd problemer selv. Omfang og fremtidige kostnader er uklare. Justeres marginalt ned til 0.90 da det mangler konkret informasjon om tvistens status og kostnadsestimat.\n\n**R5 – Ingen radonmåling (0.88 → 0.80):** Bekreftet i egenerklæring og salgsoppgave. Risikoen er reell men begrenset for en leilighet i 5. etasje (radon er typisk høyere i lavere etasjer/kjeller). Justeres ned til 0.80.\n\n**R6 – Reguleringsplaner (0.85 → 0.82):** Godt dokumentert med konkrete plan-IDer. Kommuneplanens arealdel viser \"sentrumsformål – framtidig\", noe som indikerer potensiell fremtidig utvikling. Justeres marginalt ned til 0.82 da det er usikkert hvilken konkret påvirkning planene vil ha på denne eiendommen.\n\n**R7 – Ingen boligselgerforsikring (0.90):** Klart bekreftet i salgsoppgaven. Kjøper kan tegne boligkjøperforsikring, men selger er ikke dekket. Confidence opprettholdes på 0.90.\n\n**R8 – El-anlegg ikke kontrollert (0.85 → 0.82):** Bekreftet i tilstandsrapporten. Boligen er fra 2021 (relativt ny), noe som reduserer risikoen noe, men manglende kontroll er likevel et avvik. Justeres til 0.82.\n\n**R9 – Ikke med i sikringsordning (0.80 → 0.78):** Bekreftet i TOBB-dokumentet. Konsekvensen er at ved manglende betaling av felleskostnader fra andre sameiere er det ingen forsikring som dekker dette. Justeres marginalt ned til 0.78.\n\n**R10 – Begrensede bygningsopplysninger fra TOBB (0.75 → 0.72):** Bekreftet i TOBB-dokumentet. Risikoen er reell men begrenset da tilstandsrapporten er utarbeidet og samsvarer med byggetegninger fra 2017. Justeres til 0.72.\n\n**R11 – Tvist bolig/næring arealbruk (0.80 → 0.82):** Bekreftet i årsmelding. Dette er en separat tvist fra gulvvarmesaken og er godt dokumentert. Justeres opp til 0.82 da dette er en pågående tvist som kan ha økonomiske konsekvenser.\n\n**R12 – Elbillader uten strømavtale (0.78 → 0.75):** Bekreftet i egenerklæring. Risikoen er begrenset men reell – kjøper kan ikke bruke laderen uten å etablere strømavtale. Justeres til 0.75.\n\n**Manglende risikoer identifisert:**\n- Ingen identifisert risiko knyttet til at boligen varmes opp med fjernvarme via vannbåren gulvvarme, kombinert med kjente problemer i gulvvarmeanlegget i bygget – dette bør undersøkes nærmere.\n- Ingen risiko knyttet til vedlikeholdsplan/fond: Sameiet har startet avsetning til vedlikehold (kr 603 000 i 2024), men det er uklart om dette er tilstrekkelig for et relativt nytt bygg med kjente tekniske problemer.\n- Ingen risiko knyttet til at sameiet nylig har gjennomgått sammenslåing (2023), noe som kan medføre uforutsette kostnader og administrative utfordringer.\n- Ingen eksplisitt risiko knyttet til at parkeringsplassen er organisert i et realsameie med negativt årsresultat (kr -129 463 i 2024).\n"
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
    "input_tokens": 21379,
    "output_tokens": 4235,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
