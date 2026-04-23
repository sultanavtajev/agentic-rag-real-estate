# Trace: agentic_reflecting_iter1
- **Run ID:** 85a12de4-343c-4d9f-8042-bf5eba279df2
- **Tidspunkt:** 2026-03-25T10:06:49.334869+00:00
- **Varighet:** 97.94s
- **Input tokens:** 20015
- **Output tokens:** 5204

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
Risiko 1: Lekkasje ved pipe/tak i sameiet: Selger opplyser at sameiet har hatt lekkasje ved pipe/tak, og at dette skal ha blitt utbedret. Det er usikkerhet knyttet til om utbedringen er fullstendig og om det kan oppstå nye lekkasjer.
  Confidence: 0.9
  Evidens: Sameiet skal ha utbedret lekkasje ved pipe/tak; Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Svar: Ja. Beskrivelse: Sameiet skal ha utbedret lekkasje ved pipe/tak

Risiko 2: Ufullstendig tilstandsvurdering grunnet snødekke: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snø. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan ha blitt oversett.
  Confidence: 0.95
  Evidens: Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.; For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.

Risiko 3: Tvist mellom sameiet og utbygger: Selger opplyser at sameiet har vært i tvist med utbygger. Det er usikkerhet knyttet til om tvisten er endelig avsluttet, og eventuelle konsekvenser for sameiet og dets økonomi er uklare.
  Confidence: 0.85
  Evidens: Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Svar: Ja. Beskrivelse: Sameiet har vært i tvist med utbygger, men tror den er avsluttet nå.; Kjenner du til om sameiet/ laget/ selskapet er involvert i tvister av noe slag? Svar: Ja. Beskrivelse: Sameiet har vært i tvist med utbygger, men tror den er avsluttet nå.

Risiko 4: Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026: Kjøper er forpliktet til å overta selgers strømavtale med bindingstid, noe som begrenser kjøpers valgfrihet og kan medføre uønskede forpliktelser.
  Confidence: 0.9
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.

Risiko 5: Manglende radonmåling: Selger har ikke utført radonmåling. Eiendommen ligger i et middels til lavt aktsomhetsområde for radon, og det er ikke dokumentert at radonnivåene er innenfor anbefalte grenseverdier.
  Confidence: 0.8
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Eiendommen ligger i et middels til lavt aktsomhetsområde for radon.; Den bygningskyndige har ikke foretatt radonmålinger. Grenseverdi for radon er den høyeste årsmiddelverdien som generelt er anbefalt i et oppholdsrom. Grenseverdi er satt til 200 Bq/m3.

Risiko 6: Manglende dokumentasjon på elektrisk arbeid (dimmerbytte): Det er utført elektrisk arbeid (bytte av dimmer) av elektriker, men det foreligger ingen dokumentasjon på dette arbeidet. Dette kan innebære risiko for at arbeidet ikke er utført i henhold til gjeldende forskrifter.
  Confidence: 0.85
  Evidens: Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon; Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon - Sameiet skal ha utbedret lekkasje ved pipe/tak

Risiko 7: Komfyrvakt gir av og til feilsignal uten kjent årsak: Komfyrvakten gir sporadiske feilsignaler uten at årsaken er funnet. Dette kan indikere en feil ved komfyrvakten eller tilknyttede installasjoner, og kan utgjøre en sikkerhetsrisiko.
  Confidence: 0.8
  Evidens: Komfyrvakta gir av og til fra seg signal om feil uten at man har funnet ut hvorfor.

Risiko 8: Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og andre relevante vedlikeholdsbehov.
  Confidence: 0.85
  Evidens: Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.; Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.; Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.

Risiko 9: Legalpant fra sameiet og kommunen med prioritet foran tinglyste lån: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Disse heftelsene vises ikke i grunnboksutskriften og har prioritet foran banklån på seksjonen.
  Confidence: 0.8
  Evidens: De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 10: Skjulte feil og mangler kan forekomme: Tilstandsrapporten er basert på visuelle observasjoner og kan ikke avdekke alle skjulte feil og mangler. Fundament er ikke tilgjengelig for inspeksjon, og det er ikke utført geologiske undersøkelser.
  Confidence: 0.75
  Evidens: Selv om takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.; Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.; Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.

Risiko 11: Privat stikkledning for vann og avløp med vedlikeholdsansvar for sameiet: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre fremtidige kostnader for sameiet og dermed økte felleskostnader.
  Confidence: 0.7
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 12: Hengsel på kjøkken er limt og ikke fagmessig reparert: En hengsel på kjøkkenet er limt, noe som kan indikere en midlertidig løsning som ikke er fagmessig utbedret.
  Confidence: 0.65
  Evidens: En hengsel på kjøkkenet er limt.

Dokumentkontekst:
[d160_d160 | Side [1]]
©mstr.no 2/18
www.bmtf.no
39

## Side 40

EIERSKIFTERAPPORT™
MER OM TILSTANDSGRADENE I DENNE RAPPORTEN:
TG 0 betyr at bygningsdelen ikke har noen avvik.
* Det er ingen tegn til slitasje.
TG 0
* Dokumentert fagmessig godt utført.
* Det er ingen merknader.
TG1 betyr at bygningsdelen kan ha mindre avvik.
TG 1 * Som forventet i forhold til alder/bruksslitasje.
* Strakstiltak anses ikke som nødvendig.
TG 2 betyr at bygningsdelen kan ha vesentlige avvik. Eksempler på TG2 kan være at bygningsdelen er:
* Feil

---

[d160_d160 | Side [1]]
 strakstiltak utover normalt vedlikehold. Det gis tilstandgrader i.h.t standarden som denne rapporten bygger på,
med noen skjønnsmessige vurderinger. Ellers vises det til beskrivelser og vurderinger for de enkelte bygningsdeler i rapporten.
ANNET:
Boligselskap: Sameiet Vormvikstubben Bk1
Organisasjonsnr: 922025460
DOKUMENTKONTROLL:
- Megler (kommunale opplysninger) 04.03.2026
- Egenerklæringsskjema 04.03.2026
- Byggetegninger fra byggeår
- Ferdigattest 21.11.2018
- Samsvarserklæring utført av Sigvartsen

---

[d160_d160 | Side [1]]
g romhøyde, ut ifra gjeldende forskrifter for da boligen/rommene ble
byggemeldt.
Tilleggsopplysninger:
Det anbefales å sette seg godt inn i vedlagt dokumentasjon til salgsoppgave samt selgers egenerklæring.
Tilstandsrapporten har en gyldighet på 12 mnd. fra rapportdato. Skulle det oppstå skader, endringer eller annet av
betydning ved boligen, oppfordres hjemmelshaver/selger til å informere om forholdene og oppdatere tilstandsrapporten.
I tilstandsrapporten har den bygningssakkyndige ikke gjort

---

[d160_d160 | Side [1]]
t at det ikke er noen avvik i forhold til det som kan
forventes. Alder tatt i betraktning.
Takstmannens utdypende vurdering av bygningsdeler med TG 2 og TG 3 finnes på siste siden(e) i denne rapporten.
Denne rapporten er gyldig i 12 mnd.
©mstr.no 1/18
www.bmtf.no
38

## Side 39

EIERSKIFTERAPPORT™
OM EIERSKIFTERAPPORT™
Rapporten er utarbeidet med utgangspunkt i BMTFs faglige rammeverk for tilstandsanalyse ved boligsalg, samt avhendingslova med
tilhørende forskrift (tryggere bolighandel).
Som del av en

---

[d160_d160 | Side [1]]
 og eventuelle reparasjoner av disse bygningene. Enkelte
forhold og skader som måtte oppstå, håndteres dermed gjennom sameiets eller borettslagets vedlikeholdsplan og budsjett.
©mstr.no 6/18
www.bmtf.no
43

## Side 44

EIERSKIFTERAPPORT™
FORUTSETNINGER: (Værforhold, hindringer, etc.):
Oppholdsvær/sol og 1 plussgrad.
Leiligheten ble kontrollert/inspisert i dagslys.
Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette

---

[d160_d160 | Side [1]]
sjeskiller i
trevirke, innervegger oppført i tre/plater/gips med varierende overflater.
Det er ikke satt tilstandsgrad på utvendig kledning, takrenner, yttertak, terrasser/balkonger og utvendig terreng da dette er en del av
sameiets felles bygningsmasse og vedlikeholdsansvar. Ved taksering av leilighet i sameier er det primært innvending i leiligheten og de
arealene som tilhører denne som er vurdert.
Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten. På

---

[d160_d160 | Side [1]]
or eksempel hullborring i vegger.
Det kan utføres inngrep i vegg eller etasjeskillere ved bad og i rom under terreng for undersøkelse av fukt ved mistanke til alvorlige avvik.
Alle bygningsdeler blir undersøkt, med stor vekt på de områdene som takstmannen, erfaringsmessig, kjenner som svake punkter. Selv om
takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.
For bolig er referansenivået for de ulike rom og bygningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten

---

[d160_d160 | Side [1]]
, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan
innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen. For å få en fullverdig
vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.
Rapporten legger til grunn boligens tilstand på befaringsdagen og byggeår.
Utvendige konstruksjoner over terreng er inspisert fra bakkeplan.
Inspeksjonen ble kun utført på lett

---

[d160_d160 | Side [1]]
nger formålet
TG 3
* Er en fare for liv og helse
Det er et akutt behov for tiltak, og/eller det er avvik fra lover eller forskrifter som gjelder for den aktuelle bygningsdelen
eller byggverket.
TG iu betyr at bygningsdelen ikke er undersøkt. Denne tilstandsgraden skal kun benyttes unntaksvis. Eksempler kan
være:
TG iu
* Snødekket tak og krypekjeller uten inspeksjonsmulighet på tidspunktet for analysen
* Bygningsdelen, arealet eller rommet er ikke tilgjengelig for inspeksjon på tidspunktet for

---

[d160_d160 | Side [1]]
e of signing.
→ For more information about document formats, see https://doc.ingroupe.com/developer
45006240
:ecnerefer
tnemucoD
37

## Side 38

EIERSKIFTERAPPORT™
Leilighet
Vormvikstubben 17
2080 Eidsvoll
www.e3.no
Boligens tekniske tilstand:
Antall TG
0
10
0
0
0
Utført av: Postboks 31
Takstmann Jessheim 2051
August Magnus 98023301
Dato: 05/03/2026 august@tmam.no
Dersom bygningsdelen kun har en tilstandsgrad og ikke er beskrevet, betyr det at det ikke er noen avvik i forhold til det som kan
forventes.

---

[d160_d160 | Side [1]]
Ferdigattest 21.11.2018
- Samsvarserklæring utført av Sigvartsen Elektro AS 03.02.2023
- Samsvarserklæring utført av Graderomen Elektro AS 21.09.2019
- Samsvarserklæring utført av Aina Elektro AS 13.09.2018
BESKRIVELSE AV INNVENDIGE OVERFLATER (vegger, tak og gulv):
Vegger: Malt gips og fliser.
Tak/himlinger: Malt gips.
Gulv: Laminat, parkett og fliser.
FORMÅL MED ANALYSEN:
Tilstandsvurderingen er gjennomført for å avdekke eventuelle avvik og mangler ved boligen. Rapporten er utarbeidet i forbindelse

---

[d160_d160 | Side [1]]
å hull etter gamle veggfester og
bilder som må forventes ut ifra bruk. TG1
Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.
Årsak: Det er ikke ett krav i Avhendingsloven for å vurdere eller satt tilstandsgrad på dette.
Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.
Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.
Anbefalt tiltak: Det anbefales å gjennomføre ytterligere

---

[d160_d160 | Side [1]]
ige avvik. Eksempler på TG2 kan være at bygningsdelen er:
* Feil utført.
* Skadet, eller symptomer på skade.
* Svært slitt.
TG 2 * Nedsatt funksjon.
* Utgått på dato.
* Kort gjenværende brukstid.
* Det er behov for tiltak i nær fremtid.
* Det er grunn til overvåkning av denne bygningsdelen.
TG 3 betyr at bygningsdelen kan ha store eller alvorlige avvik. Eksempler på TG3 kan være at bygningsdelen er:
* Har total funksjonssvikt
* Fyller ikke lenger formålet
TG 3
* Er en fare for liv og helse
Det er et akutt

---

[d160_d160 | Side [1]]
liger. Rapporten erstatter ikke kjøpers undersøkelsesplikt eller selgers
opplysningsplikt i henhold til lov om avhending av fast eigedom.
NIVÅ AV ANALYSEN:
Tilstandsanalysen utføres ved grundige visuelle observasjoner kombinert med undersøkelser, målinger, bruk av egnede instrumenter og
registreringer. Dersom det er mistanke til høyt fuktnivå i vegger mot våtrom, eller i rom under terreng kan tilstandsanalysen omfatte
destruktive inngrep som for eksempel hullborring i vegger.
Det kan utføres inngrep i vegg

---

[d160_d160 | Side [1]]
det betegnes som i rapporten.
Arealopplysninger som er basert på fysisk oppmåling etter ferdigstillelse, vil kunne avvike fra arealopplysninger som er basert på
byggetegninger.
Dersom det ikke er framlagt byggetegninger for boligen, vil bygningssakkyndig ikke kunne måle opp arealer av hulrom i sjakter o.l.
som er skjult, og som dermed ikke er tilgjengelig for oppmåling.
Arealet avrundes og oppgis i hele kvadratmeter (m2), og gjelder for tidspunktet da boligen ble målt.
Ved måling av bruksareal med to eller

---

[d160_d160 | Side [1]]
a med
tilhørende forskrift (tryggere bolighandel).
Som del av en overgangsordning benyttes NS 3600:2018 – Teknisk tilstandsanalyse ved omsetning av bolig som normativt grunnlag
for struktur, begrepsbruk og fastsettelse av tilstandsgrader.
AVGRENSNING:
EIERSKIFTERAPPORT™ er godkjent av Byggmestrenes Takseringsforbund og kan kun benyttes av BMTF-sertifiserte takstmenn.
Rapporten er spesielt godt egnet ved eierskifte av boliger. Rapporten erstatter ikke kjøpers undersøkelsesplikt eller

---

[d160_d160 | Side [1]]
ningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten skader og fagmessig
riktig utført og i henhold til gjeldende lov/forskrift som gjelder for den aktuelle boligen der ikke tilleggene angir annet. Generelt er
referansenivået byggeforskrifter som var gjeldende når bygningen/bygningsdelen ble byggesøkt.
LEVETIDSBETRAKTNINGER:
Når det refereres til levetid er dette basert på takstmannens erfaringstall og Byggforskserien 700.320 Intervaller for vedlikehold og
utskifting av bygningsdeler, SINTEF

---

[d160_d160 | Side [1]]
inger. Grenseverdi for radon er den høyeste
årsmiddelverdien som generelt er anbefalt i et oppholdsrom. Grenseverdi er satt til 200 Bq/m3. Det skal gjennomføres radonreduserende
tiltak dersom radonnivået overstiger 100 Bq/m3 (tiltaksgrense).
OVERORDNET FAGLIG VURDERING AV EIENDOMMEN:
Leiligheten vurderes å ha normalt god stand og er greit vedlikeholdt på befaringtidspunktet. Det ble ikke registrert eller avdekket noen
behov for bygningsmessige strakstiltak utover normalt vedlikehold. Det gis tilstandgrader

---

[d160_d160 | Side [1]]
onomi, sikkerhet, funksjon
eller andre brukerønsker, er lagt til grunn.
VÆR OPPMERKSOM PÅ
Egenerklæringsskjema skal alltid legges frem for rapportansvarlig før tilstandsanalysen påbegynnes. Dersom egenerklæring ikke
foreligger, vil dette komme tydelig frem på en av de siste sidene av rapporten under ovenstående overskrift.
Dersom det er lagt frem dokumentasjon av pågående byggesaker og/eller manglende ferdigattest, og/eller midlertidig brukstillatelse. Så
vil også dette komme tydelig frem på en av de siste

---

[d160_d160 | Side [1]]
r om de er del av fellesareal. Slike arealer kan omdisponeres av borettslag/sameie, noe som kan påvirke
boligens tilgjengelige bruksareal.
Fellesareal – rettslig avgrensning:
Ved arealmåling er det NS 3940 som legges til grunn. Standarden har en annen definisjon av fellesareal enn eierseksjonsloven. Dette kan innebære at
arealer som er måleverdig etter NS 3940, ikke nødvendigvis følger boenheten rettslig.
Viktig merknad om måleregler:
Eventuelle arealavvik mellom ulike rapporter kan skyldes endringer i

---

[d160_d160 | Side [1]]

## Side 26

OM EIENDOMMEN
Legalpant: Kommunen har legalpant som sikkerhet for
Tinglyste heftelser
betaling av kommunale avgifter og eventuell
Tinglyste heftelser og rettigheter: På eiendommen er det eiendomsskatt. De øvrige seksjonseierne i sameiet har
tinglyst følgende heftelser og rettigheter som følger legalpant på inntil 2G som sikkerhet for krav knyttet til
eiendommens matrikkel ved overskjøting til ny sameieforholdet, som felleskostnader. Legalpant er pant
hjemmelshaver: som ikke vises i

---

[d160_d160 | Side [1]]
lleskostnader. Legalpant er pant
hjemmelshaver: som ikke vises i grunnboksutskriften, og har prioritet
foran tinglyste lån, for eksempel banklån på seksjonen.
3240/1 7/ 391/ 1: Legalpant til kommunen har høyere prioritet enn
08.01.2018 ‑ Dokumentnr: 298002 ‑ Bestemmelse om legalpant til sameiet.
jordkabel/ jordkabelanlegg
Rettighetshaver: Knr:3240 Gnr:17 Bnr:277
Vei, vann og avløp
Kan ikke slettes uten samtykke fra: Eidsvoll Kommune
Org.nr: 964 950 113 Eiendommen er tilknyttet offentlig vann‑

---

[d160_d160 | Side [1]]
ig og behandlet terrasen.
Arbeid utført av Mg maleservice Marcin Tomasz Gregorzewski
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
Initialer selger: KST 2
45006240
:ecnerefer
tnemucoD
34

## Side 35

18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen

---

[d160_d160 | Side [1]]
fentlige vedtak som kan medføre endringer i bruken av
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
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å

---

[d160_d160 | Side [1]]
une
Org.nr: 964 950 113 Eiendommen er tilknyttet offentlig vann‑ og
Rettighetshaver er også gnr 520 bnr 1 i Eidsvoll avløpssystem. Stikkledningene fra eiendommen og ut til
kommune det kommunale nettet er private, og
Bestemmelser om nedgraving av kabelanlegg vedlikeholdsansvaret for disse påhviler sameiet.
Rettigheten gjelder også fremtidige parseller og enheter Adkomst til eiendommen skjer via offentlig vei.
av avgivers eiendom
Overført fra: Knr:3240 Gnr:17 Bnr:391
Utleie
Gjelder denne registerenheten med

---

[d160_d160 | Side [1]]
Feltnavn f_R1
ovnen) til dette ligger i boden, og fulgte med fra da
leiligheten var ny i 2018. Utvendig pipe er allerede Delareal 1 110 m2
tilstede. Formål Boligbebyggelse‑konsentrert småhusbebyggelse
Feltnavn BK1
Nåværende eier har tegnet avtale om Norgespris på
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen Eiendommen ligger i et middels til lavt
følger boligen, og må derfor overtas av kjøper. aktsomhetsområde for radon.
25

## Side 26

OM EIENDOMMEN
Legalpant: Kommunen har legalpant som

---

[d160_d160 | Side [1]]
d av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
Beskrivelse Sameiet har vært i tvist med utbygger, men tror den er avsluttet nå.
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner

---

[d160_d160 | Side [1]]
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
27

## Side 28

OM EIENDOMMEN
Slik

---

[d160_d160 | Side [1]]
lbegrepene er: finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de
Bruksareal BRA: er, uten garanti, med mindre det foreligger en gjeldende
BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. garanti fra produsent eller leverandør.
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
boenheten og som tilhører denne, for eksempel eksterne Kjøper aksepterer at det kan forekomme hull og merker
boder. etter montering av inventar og utstyr

---

[d160_d160 | Side [1]]
meiets kreditorer i forhold til sin
vann/k loakk sameiebrøk. Ved manglende betaling av fellesutgifter har
Rettighet hefter i: Knr:3240 Gnr:17 Bnr:390 sameiet legal panterett i den enkelte eierseksjon,
Rettighet hefter i: Knr:3240 Gnr:17 Bnr:404 begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Bestemmelse om vedlikehold av anlegg/ ledninger
Gjelder denne registerenheten med flere Kjøper og selger er forpliktet til å signere den standard
26

## Side 27

OM EIENDOMMEN
kjøpekontrakten utarbeidet av

---

[d160_d160 | Side [1]]
 medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: KST 3
45006240
:ecnerefer
tnemucoD
35

## Side 36

Tilleggskommentar
Rørlegger la opp til vaskemaskin i teknisk rom i 2023. Utført av E & H

---

[d160_d160 | Side [1]]
 kostnad må avklares gjennom nærmere
undersøkelser og tilbud fra fagperson.
EIENDOMSDATA:
Matrikkeldata: Gnr:17, Bnr: 391
Hjemmelshaver: Kari-Lene Skalland Tangen
Seksjonsnummer: 1
Festenummer: -
Andelsnummer: -
Byggeår: 2018
Tomt: Felleseie tomt 1 560 m²
Kommune: 3240 EIDSVOLL
BEFARINGEN:
Oppdragsgiver: Kari-Lene Skalland Tangen
Befaringsdato: 04.03.2026
Fuktmåler benyttet: MMS3 PROTIMETER
Vann: OFFENTLIG
Avløp: OFFENTLIG
Adkomst: OFFENTLIG
©mstr.no 3/18
www.bmtf.no
40

## Side 41

EIERSKIFTERAPPORT™
OM

---

[d160_d160 | Side [1]]
er informasjon
Ingen reguleringsplaner under arbeid innenfor 100 meter fra eiendommen.
Side 2 av 2
71

## Side 72

Reguleringsplankart
Eiendom: 17/391/0/1
Adresse: Vormvikstubben 17
Utskriftsdato: 16.02.2026
UTM-32
Eidsvoll kommune Målestokk: 1:1000
©Norkart 2026
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring.
Presentasjonen av informasjon er i samsvar med nasjonal standard.
Kartet kan inneholde feil, mangler eller

---

[d160_d160 | Side [1]]
ar‑om‑norgespris
Husdyr: Det er ikke tillatt å holde husdyr uten styrets
forhåndsgodkjenning. Godkjenning er avhengig av at
Regulerings og arealplaner
husdyret ikke er til sjenanse eller ulempe for andre
seksjonseiere. Eiendommen ligger i et område regulert til
boligbebyggelse.
Vedtekter/ husordensregler
Gjeldende reguleringsplaner:
Følger vedlagt i salgsoppgaven. Id 023725900
Navn Kastellåsen felt K4, del av gbnr. 17/ 303
Plantype Detaljregulering
Energimerke
Status Endelig vedtatt

---

[d160_d160 | Side [1]]
vgifter
545 (Tinglysingsgebyr ‑ hjemmel) og eiendomsskatt kommer felleskostnader, strøm,
545 (Tinglysningsgebyr ‑ pantedokument) innboforsikring mm. Listen er ikke uttømmende.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
74 840 (Omkostninger totalt (uten Boligkjøperforsikring))
Formue:
88 340 (Omkostninger totalt (med Boligkjøperforsikring))
Andel fellesformue: Kr 25 399 pr. 31.12.2025
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
3 024 840 (Totalpris inkl. omkostninger

---

[d160_d160 | Side [1]]
omme hull og merker
boder. etter montering av inventar og utstyr som ikke er en del
BRA‑b ‑ Innglasset balkong, altan, terrasser. av overdragelsen.
Andre arealer:
Eiendommens
TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
ALH ‑ Areal med lav himlingshøyde måles på samme
tilstand
måte som BRA, men man ser bort fra krav til
himlingshøyde. Arealet inngår ikke i BRA, men opplyses Takstmann: August Magnus
om sammen med BRA som et tillegg.
GUA – summen av BRA og AHL. Brukes når boligen har Type takst

---

[d160_d160 | Side [1]]
ndsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i

---

[d160_d160 | Side [1]]
ne. For 2025 avstand til alle nødvendige fasiliteter. Her bor du med
utgjorde eiendomsskatten 3002,10 kr. Eiendomsskatt er nærhet til butikker, frisør, kino, kulturhus og offentlig
inkludert i oppgitt beløp for kommunale avgifter. kommunikasjon. Det er i tillegg kort vei til barnehager,
barneskole, ungdomsskole og videregående skole.
21

## Side 22

OM EIENDOMMEN
Dagligvarehandelen kan gjøres på Coop Extra Eidsvoll
Beskrivelse av
som ligger ca. 900m unna.
eiendommen
Fra togstasjonen på Eidsvoll er det

---

[d160_d160 | Side [1]]
g.
GUA – summen av BRA og AHL. Brukes når boligen har Type takst avholdt av takstmann: Tilstandsrapport
gulvareal som ikke er måleverdig på grunn av for
eksempel skråtak eller lav himlingshøyde. Arealet oppgis Sammendrag selgers egenerklæring: Kjenner du til om
som tilleggsinformasjon til øvrige arealer. det er/ har vært utettheter i terrasse/ garasje/ tak/ fasade?
Svar: Ja
Beskrivelse: Sameiet skal ha utbedret lekkasje ved pipe/
Bygningssakkyndigs
tak
kommentar til
Kjenner du til om det er/ har vært

---

[d160_d160 | Side [1]]
litasje og eventuelle skader.
27

## Side 28

OM EIENDOMMEN
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i
reklamasjon eller prisavslag. avhendingsloven.
Avtalerettslig Ved beregning av krav om prisavslag eller erstatning må
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som

---

[d160_d160 | Side [1]]
lass i
fellesgarasje og carport oppmålt, men kun retten til bruk blir beskrevet.
MERKNADER OM ANDRE BYGNINGSDELER:
Sportsbod på 5 m2 med utvendig adkomst.
1 stk biloppstillingsplass i felles carportanlegg (med egen stikkontakt).
Sportsbod og carport er sameiets/borettslagets felles byggemasse og vedlikeholdsansvar, derfor ikke satt tilstandgrad. Det betyr at det er
fellesskapet i sameiet eller borettslaget som har ansvaret for både vedlikehold og eventuelle reparasjoner av disse bygningene. Enkelte
forhold

---

[d160_d160 | Side [1]]
 utvendig kledning,
Gregorzewski takrenner, yttertak, terrasser/ balkonger og utvendig
terreng da dette er en del av sameiets felles
Kjenner du til om sameiet/ laget/ selskapet er involvert i bygningsmasse og vedlikeholdsansvar. Ved taksering av
tvister av noe slag? leilighet i sameier er det primært innvending i leiligheten
Svar: Ja og de arealene som tilhører denne som er vurdert.
Beskrivelse: Sameiet har vært i tvist med utbygger, men
tror den er avsluttet nå. Innvendig:
Vegger: Malt gips og

---

[d160_d160 | Side [1]]
ilighetsnr.: 1
Forsikringsselskap: Eika Forsikring AS
Polisenr.: 1186474
Eier: Kaia-Lene Skalland Tangen
Adresse: Vormvikstubben 17, 2080 EIDSVOLL
Ligningsmessig fordeling:
Andel fellesgjeld pr 31.12.2025 2.913
Andel formue pr 31.12.2025 25.399
Felleskostnader pr måned:
2 150,00
FELLESKOSTNADER
Totale felleskostnader pr. måned 2 150,-
Vennligst sjekk evt. restanse ved oppgjør. Eventuelt forfalte, ikke betalte krav på eierseksjonen
pr. dags dato: 0,00
Kontaktinformasjon
Styreleder: Kim André

---

[d160_d160 | Side [1]]
dermoen elektro i 2019. Bytte
av en dimmer, gjort av elektriker, men ingen dokumentasjon
- Sameiet skal ha utbedret lekkasje ved pipe/tak
FELLESKOSTNADER:
Totale felleskostnader pr. d.d. kr 2 150.- pr. mnd.
©mstr.no 4/18
www.bmtf.no
41

## Side 42

EIERSKIFTERAPPORT™
AREALER OG ANVENDELSE:
Arealmåling
Arealmålingene i denne rapporten er utført i samsvar med Norsk Standard NS 3940 slik målereglene var praktisert i bransjen på måletidspunktet.
Arealer oppgis i hele kvadratmeter og gjelder for det tidspunkt

---

[d160_d160 | Side [1]]
SSBs statistiske opplysninger om omsatte boliger. I
Kr 3 041 253 beregningen tas det hensyn til din boligs beliggenhet,
areal, byggeår og type bolig. Formuesverdien er en
prosentandel av denne boligverdien.For mer informasjon
Felleskostnader
om formuesverdi, se Skatteetatens nettsider.
Felleskostnader kr 2 150,‑ pr. mnd
Beliggenhet
Eiendomsskatt
Vormvikstubben ligger meget sentralt i Eidsvoll med kort
Det er eiendomsskatt i Eidsvoll kommune. For 2025 avstand til alle nødvendige fasiliteter. Her bor du

---

[d160_d160 | Side [1]]
ytt laminatgulv
‑ Rørlegger la opp til vaskemaskin i teknisk rom i 2023.
informasjon
Utført av E & H rørleggerbedrift AS
‑ Sjekk og rens av ventilasjonsanlegget høsten 2025
Adresse
‑ Montert stikkontakter i teknisk rom i 2023 av
Sigvartsen Elektro AS Vormvikstubben 17, 2080 EIDSVOLL
‑ Stikkontakt montert i carport av Gardermoen elektro i
2019 Gnr. 17, bnr. 391, snr. 1, ideell andel 1/ 1
‑ Bytte av en dimmer, gjort av elektriker, men ingen i Eidsvoll kommune.
dokumentasjon
‑ Sameiet skal ha utbedret

---

[d160_d160 | Side [1]]
gen i Eidsvoll kommune.
dokumentasjon
‑ Sameiet skal ha utbedret lekkasje ved pipe/ tak
Selger
Kari‑Lene Skalland Tangen
24

## Side 25

OM EIENDOMMEN
Sameie
Norgespris er en ny, statlig ordning, som gir en
SAMEIET VORMVIKSTUBBEN BK1 forutsigbar og fast strømpris på 50 øre per kWh med
mva (40 øre uten mva)gjennom året. Norgespris har et
Organisasjonsnummer: 922 025 460 forbrukstak på 5 000 kWh per måned for husholdninger
og 1 000 kWh for hytter. Når det er tegnet avtale om
Sameiet Vormvikstubben BK1 består

---

[d160_d160 | Side [1]]
OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Kommunale avgifter
Kr 15 275 (2025)
Prisantydning
Kr 2 950 000
Fellesgjeld
Kr 2 913 pr. 31.12.2025
Omkostning kjøper
2 950 000,00 (Prisantydning)
Andre kostnader:
Omkostninger Velforening: Pliktig medlemskap i Kastellåsen velforening
som betales gjennom felleskostnadene til sameiet.
13 500 (Boligkjøperforsikring* (valgfritt))
73 750 (Dokumentavgift) Andre utgifter: I tillegg til offentlige/ kommunale avgifter
545 (Tinglysingsgebyr ‑ hjemmel) og eiendomsskatt kommer

---

[d160_d160 | Side [1]]
kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
Beskrivelse Sameiet skal ha utbedret lekkasje ved pipe/tak
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur

---

[d160_d160 | Side [1]]
nsanlegget høsten 2025
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Sameiet malt bygget utvendig og behandlet terrasen.
Arbeid utført av Mg maleservice Marcin

---

[d160_d160 | Side [1]]
r. Når det er tegnet avtale om
Sameiet Vormvikstubben BK1 består av 8 eierseksjoner. Norgespris bortfaller eventuell strømstøtte.
Forretningsfører: Phm Forvaltning AS Som boligeier må du fortsatt ha en strømavtale med en
strømleverandør.
Sameiets forsikringsselskap: Eika Forsikring AS
Du kan lese mer om Norgespris blant annet her: https:/ /
Polisenummer fellesforsikring: 1186474 www.regjeringen.no/ no/ tema/ energi/ strom/
sporsmal‑og‑svar‑om‑norgespris
Husdyr: Det er ikke tillatt å holde husdyr uten

---

[d160_d160 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d160_d160 | Side [1]]
 bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000

---

[d160_d160 | Side [1]]
avers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2018
Hvor lenge har du eid boligen?
Antall år 7
Antall måneder 6
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: KST 1
45006240
:ecnerefer
tnemucoD
33

##

---

[d160_d160 | Side [1]]
selgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom

---

[d160_d160 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det

---

[d160_d160 | Side [1]]
heimsvegen ‑ Kløfta 59 , 2040 KLØFTA
Tlf: 638 40 001
30

## Side 31

OM EIENDOMMEN
31

## Side 32

VORMVIKSTUBBEN 17

## Side 33

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260054
Selger 1 navn
Kari-Lene Skalland Tangen
Gateadresse
Vormvikstubben 17
Poststed Postnr
EIDSVOLL 2080
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du

---

[d160_d160 | Side [1]]
linger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende

---

[d160_d160 | Side [1]]
jøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved

---

[d160_d160 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d160_d160 | Side [1]]
trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger!

---

[d160_d160 | Side [1]]
ra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: KST 4
45006240
:ecnerefer
tnemucoD
36

## Side 37

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
KariLene Tangen 791858015c800e584aee7 04.03.2026 Signer authenticated by
42fe3ea35615234f443 08:35:54

---

[d160_d160 | Side [1]]
fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk

---

[d160_d160 | Side [1]]
il grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova

---

[d160_d160 | Side [1]]
 har mulighet til,
budrunde avsluttes uten at handel er kommet i stand, kan
så langt det er nødvendig, å orientere selger, budgivere og
en budgiver kreve kopi av budjournalen i anonymisert
øvrige interessenter om bud og forbehold. Dersom bud
form.
inngis med en frist som åpenbart er for kort til at
megleren kan avvikle budrunden på en forsvarlig måte
som sikrer selger og interessenter et tilstrekkelig grunnlag
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger

---

[d160_d160 | Side [1]]
ger la opp til vaskemaskin i teknisk rom i 2023. Utført av E & H rørleggerbedrift AS. Komfyrvakta gir av og til fra seg signal om feil uten
at man har funnet ut hvorfor. En hengsel på kjøkkenet er limt.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår

---

[d160_d160 | Side [1]]
er under arbeid Kommunedelplaner
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
Status Endelig vedtatt

---

[d160_d160 | Side [1]]
Detaljregulering
Status Endelig vedtatt arealplan
Ikrafttredelse 07.03.2017
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/575/Bestemmelser.PDF
Delarealer Delareal 427 m2
Formål Parkeringsplasser
Feltnavn f_PK1
Delareal 22 m2
Formål Renovasjonsanlegg
Feltnavn f_R1
Delareal 1 110 m2
Formål Boligbebyggelse-konsentrert småhusbebyggelse
Feltnavn BK1
Reguleringsplaner under arbeid i nærheten (100 meter)
Besøk kommunens hjemmeside for mer informasjon
Ingen reguleringsplaner under arbeid innenfor 100

---

[d160_d160 | Side [1]]
den enkelte plan
med dokumenter, mindre endringer, etc finnes på internett, se lenker under. Oppgitte delarealer viser planinformasjon på
eiendommen.
Det tas forbehold om riktigheten eller fullstendigheten av opplysningene i dette dokumentet. Det kan ikke rettes krav som følge av
at disse opplysningene benyttes som grunnlag for beslutninger.
Plantyper med treff
Kommuneplaner Reguleringsplaner
Plantyper uten treff
Kommuneplaner under arbeid Kommunedelplaner
Kommunedelplaner under arbeid

---

[d160_d160 | Side [1]]
303
Plantype Detaljregulering
Energimerke
Status Endelig vedtatt arealplan
Energikarakter: C Ikrafttredelse 07.03.2017
Bestemmelser ‑ https:/ / www.arealplaner.no/ 3240/
Energifarge: Ikke angitt dokumenter/ 575/ Bestemmelser.PDF
Delareal 427 m2
Formål Parkeringsplasser
Oppvarming
Feltnavn f_PK1
Gulvvarme på bad og entrè.
Elektriske panelovner. Delareal 22 m2
Formål Renovasjonsanlegg
Mulighet for å sette inn en vedovn. Deler (ikke selve Feltnavn f_R1
ovnen) til dette ligger i boden, og fulgte med fra

---

[d160_d160 | Side [1]]
021-2031
Plantype Kommuneplanens arealdel
Status Endelig vedtatt arealplan
Ikrafttredelse 13.04.2021
Bestemmelser - https://www.arealplaner.no/3240/dokumenter/2549/Bestemmelser%20og%20retningslinjer.pdf
Delarealer Delareal 1 560 m2
Arealbruk Boligbebyggelse,Nåværende
Områdenavna_B
Reguleringsplaner
Besøk kommunens hjemmeside for mer informasjon.
Id 023725900
Navn Kastellåsen felt K4, del av gbnr. 17/303
Side 1 av 2
70

## Side 71

Plantype Detaljregulering
Status Endelig vedtatt arealplan
Ikrafttredelse

---

[d160_d160 | Side [1]]
ersøkelser i forbindelse med utarbeidelse av denne rapporten. På bakgrunn av observasjoner gjort på
befaringsdagen, vurderes grunnforholdene å være stabile. Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Temakart fra NGU viser at boligen ligger i ett område over marin grense.
Dataene kommer fra NGU. For mer informasjon om kartet, se internettsiden til NGU.
Radonmålinger: Den bygningskyndige har ikke foretatt radonmålinger. Grenseverdi for radon er den høyeste
årsmiddelverdien som

---

[d160_d160 | Side [1]]


## Side 69

69

## Side 70

Utskriftsdato: 16.02.2026
Eidsvoll kommune
Adresse: Rådhusgata 1, 2080 Eidsvoll
Telefon: +4766107000
Planopplysninger
EM §6-7 Oppdragstakerens undersøkelses- og opplysningsplikt Kilde: Eidsvoll kommune
Kommunenr. 3240 Gårdsnr. 17 Bruksnr. 391 Festenr. Seksjonsnr. 1
Adresse Vormvikstubben 17, 2080 EIDSVOLL
Opplysningene omfatter gjeldende planer og pågående planarbeid for eiendommen. Nærmere opplysninger om den enkelte plan
med dokumenter, mindre endringer, etc finnes på

---

[d160_d160 | Side [1]]
in
Linje RE10, RE11, R12, R13 2 km
Eidsvoll stasjon 23 min
Buss, tog 2 km
Oslo Gardermoen 27 min
Skoler
Vilberg skole (1-7 kl.) 14 min
377 elever, 21 klasser 1.2 km
Vilberg ungdomsskole (8-10 kl.) 18 min
365 elever, 18 klasser 1.5 km
Eidsvoll videregående skole 21 min
700 elever 1.8 km
Aldersfordeling barn (0-18 år)
37% i barnehagealder
36% 6-12 år
18% 13-15 år
10% 16-18 år
Sivilstand
Norge
Gift 35% 33%
Ikke gift 44% 54%
Separert 11% 9%
Enke/Enkemann 10% 4%
%
8.9
% 9.51 % 5.41
% 7.3
%
4.7
%
2.7
% 1.22 %

---

[d160_d160 | Side [1]]
råd og veiledning om effektiv energibruk
oppgitt, brukes typiske standardverdier for den aktuelle
se våre nettsider.
bygningstypen fra tidsperioden den ble bygd i.
Beregningsmetodene for energikarakteren baserer seg https://www.enova.no
på NS 3031.
https://www.enova.no/energimerking
60

## Side 61

Nabolagsprofil
Vormvikstubben 17
Offentlig transport Aldersfordeling
Vilberggarasjen 8 min Linje 121, 441, 442, 444 0.7 km Eidsvoll stasjon 23 min
Linje RE10, RE11, R12, R13 2 km
Eidsvoll stasjon 23 min
Buss,

---

[d160_d160 | Side [1]]
Knr:3240 Gnr:17 Bnr:391
Utleie
Gjelder denne registerenheten med flere
Adgang til utleie: Utleie er tillatt iht. vedtektene.
30.05.2018 ‑ Dokumentnr: 820604 ‑ Seksjonering
Opprettet seksjoner:
Radonmåling
Snr: 1
Formål: Bolig Selger har ikke utført radonmåling. Det er ikke krav om
Sameiebrøk: 1/ 8 dette med mindre boligen er helt eller delvis utleid.
01.01.2020 ‑ Dokumentnr: 1434279 ‑ Omnummerering
Diverse
ved kommuneendring
Tidligere: Knr:0237 Gnr:17 Bnr:391 Snr:1 Det informeres om at ingen kan eie mer

---

[d160_d160 | Side [1]]
 med nasjonal standard.
Kartet kan inneholde feil, mangler eller avvik i forhold til kravene i oppgitt standard.
Kartet kan ikke benyttes til andre formål enn det formålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
72

## Side 73

Tegnforklaring
73

## Side 74

  
 
  
 
  
 




---

[d160_d160 | Side [1]]
ykk i vannkran.
Det er ikke påvist avvik i forhold til avrenning fra avløp.
Det er ikke påvist symptomer på fukt og råte i nabokonstruksjoner.
Vegger: Malt gips. Laminatplater mellom kjøkkeninnredning og benkeplate.
Tak/himling: Malt gips.
Gulv: Laminat.
Åpen kjøkkenløsning fra 2018 inneholder:
- Kjøkkeninnredning med laminerte fronter og skuffer
- Laminatbenkeplate med overlimt vask i kompositt og 1-greps blandebatteri
- Hvitevarer: Stekeovn, induksjonskoketopp, mikrobølgeovn, oppvaskmaskin og kjøleskap
-

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Lekkasje ved pipe/tak i sameiet: Selger opplyser at sameiet har hatt lekkasje ved pipe/tak, og at dette skal ha blitt utbedret. Det er usikkerhet knyttet til om utbedringen er fullstendig og om det kan oppstå nye lekkasjer.",
      "evidence": [
        "Egenerklæring spørsmål 6: 'Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Svar: Ja. Beskrivelse: Sameiet skal ha utbedret lekkasje ved pipe/tak'",
        "Tilstandsrapportens sammendrag av egenerklæring bekrefter samme opplysning",
        "Salgsoppgavens liste over utførte arbeider nevner: 'Sameiet skal ha utbedret lekkasje ved pipe/tak'",
        "Selger bruker formuleringen 'skal ha utbedret', noe som indikerer usikkerhet om utbedringens omfang og kvalitet"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R2",
      "description": "Ufullstendig tilstandsvurdering grunnet snødekke: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snø. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan ha blitt oversett.",
      "evidence": [
        "Tilstandsrapport: 'Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.'",
        "Tilstandsrapport: 'For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.'",
        "TG iu-definisjonen i rapporten bekrefter at snødekket tak er en typisk årsak til at bygningsdeler ikke kan undersøkes"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Tvist mellom sameiet og utbygger: Selger opplyser at sameiet har vært i tvist med utbygger. Det er usikkerhet knyttet til om tvisten er endelig avsluttet, og eventuelle konsekvenser for sameiet og dets økonomi er uklare.",
      "evidence": [
        "Egenerklæring spørsmål 25: 'Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Svar: Ja. Beskrivelse: Sameiet har vært i tvist med utbygger, men tror den er avsluttet nå.'",
        "Formuleringen 'men tror den er avsluttet nå' indikerer at selger ikke har sikker kunnskap om tvistens status",
        "Ingen dokumentasjon på forlik eller dom er vedlagt salgsoppgaven"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R4",
      "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026: Kjøper er forpliktet til å overta selgers strømavtale med bindingstid, noe som begrenser kjøpers valgfrihet og kan medføre uønskede forpliktelser.",
      "evidence": [
        "Salgsoppgaven: 'Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.'",
        "Salgsoppgaven beskriver Norgespris som en statlig ordning med fast pris på 50 øre per kWh inkl. mva, med forbrukstak på 5 000 kWh per måned",
        "Det fremgår at eventuell strømstøtte bortfaller ved tegning av Norgespris-avtale"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Eiendommen ligger i et middels til lavt aktsomhetsområde for radon, og det er ikke dokumentert at radonnivåene er innenfor anbefalte grenseverdier.",
      "evidence": [
        "Salgsoppgaven: 'Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.'",
        "Salgsoppgaven: 'Eiendommen ligger i et middels til lavt aktsomhetsområde for radon.'",
        "Tilstandsrapport: 'Den bygningskyndige har ikke foretatt radonmålinger. Grenseverdi for radon er den høyeste årsmiddelverdien som generelt er anbefalt i et oppholdsrom. Grenseverdi er satt til 200 Bq/m3.'",
        "Egenerklæring spørsmål 21: 'Er det foretatt radonmåling? Nei'"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R6",
      "description": "Manglende dokumentasjon på elektrisk arbeid (dimmerbytte): Det er utført elektrisk arbeid (bytte av dimmer) av elektriker, men det foreligger ingen dokumentasjon på dette arbeidet. Dette kan innebære risiko for at arbeidet ikke er utført i henhold til gjeldende forskrifter.",
      "evidence": [
        "Egenerklæring/tilleggskommentar: 'Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon'",
        "Salgsoppgavens liste over utførte arbeider bekrefter: 'Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon'",
        "Øvrige elektriske arbeider i boligen har samsvarserklæringer (Sigvartsen Elektro AS 03.02.2023, Graderomen Elektro AS 21.09.2019, Aina Elektro AS 13.09.2018), noe som understreker at manglende dokumentasjon for dimmerbyttet er et avvik fra normalen"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Komfyrvakt gir av og til feilsignal uten kjent årsak: Komfyrvakten gir sporadiske feilsignaler uten at årsaken er funnet. Dette kan indikere en feil ved komfyrvakten eller tilknyttede installasjoner, og kan utgjøre en sikkerhetsrisiko.",
      "evidence": [
        "Egenerklæring/tilleggskommentar: 'Komfyrvakta gir av og til fra seg signal om feil uten at man har funnet ut hvorfor.'",
        "Komfyrvakt er et brannsikkerhetstiltak – uforklarte feilsignaler kan indikere funksjonssvikt eller feil installasjon, noe som er en potensiell sikkerhetsrisiko"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "description": "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og andre relevante vedlikeholdsbehov.",
      "evidence": [
        "Tilstandsrapport: 'Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.'",
        "Tilstandsrapport: 'Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.'",
        "Tilstandsrapport: 'Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.'"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Legalpant fra sameiet og kommunen med prioritet foran tinglyste lån: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Disse heftelsene vises ikke i grunnboksutskriften og har prioritet foran banklån på seksjonen.",
      "evidence": [
        "Salgsoppgaven: 'De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.'",
        "Salgsoppgaven: 'Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.'",
        "Grunnboksutskriften viser tinglyst bestemmelse om jordkabel/jordkabelanlegg, men legalpant fremgår ikke av denne"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Skjulte feil og mangler kan forekomme: Tilstandsrapporten er basert på visuelle observasjoner og kan ikke avdekke alle skjulte feil og mangler. Fundament er ikke tilgjengelig for inspeksjon, og det er ikke utført geologiske undersøkelser.",
      "evidence": [
        "Tilstandsrapport: 'Selv om takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.'",
        "Tilstandsrapport: 'Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.'",
        "Tilstandsrapport: 'Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.'",
        "Tilstandsrapport: 'På bakgrunn av observasjoner gjort på befaringsdagen, vurderes grunnforholdene å være stabile.' – dette er en skjønnsmessig vurdering uten geologisk dokumentasjon"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Privat stikkledning for vann og avløp med vedlikeholdsansvar for sameiet: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre fremtidige kostnader for sameiet og dermed økte felleskostnader.",
      "evidence": [
        "Salgsoppgaven: 'Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.'",
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem, men de private stikkledningene er sameiets ansvar"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Hengsel på kjøkken er limt og ikke fagmessig reparert: En hengsel på kjøkkenet er limt, noe som kan indikere en midlertidig løsning som ikke er fagmessig utbedret.",
      "evidence": [
        "Egenerklæring/tilleggskommentar: 'En hengsel på kjøkkenet er limt.'",
        "Forholdet er opplyst av selger selv i egenerklæringen, men det er ikke gitt noen ytterligere beskrivelse av omfang eller konsekvens"
      ],
      "source_documents": [
        "d160_d160"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    }
  ],
  "re_retrieval_queries": [
    "tvist utbygger sameiet avsluttet resultat forlik dom",
    "fellesgjeld sameiet økonomi budsjett vedlikeholdsplan",
    "elektrisk anlegg samsvarserklæring dimmer dokumentasjon",
    "komfyrvakt feilsignal brann sikkerhet",
    "radon måling aktsomhetsområde grenseverdi",
    "pipe tak lekkasje utbedring dokumentasjon",
    "vedlikeholdsplan sameiet fremtidige kostnader",
    "etasjeskille konstruksjon tilstandsgrad"
  ],
  "reasoning": "\nGjennomgangen av alle 12 identifiserte risikoer mot dokumentevidensen viser følgende:\n\n**R1 – Lekkasje ved pipe/tak (confidence 0.9 – opprettholdes):**\nEvidensen er solid og bekreftet i både egenerklæring og salgsoppgavens arbeidsliste. Formuleringen \"skal ha utbedret\" er usikker og gir grunnlag for bekymring. Confidence opprettholdes på 0.9.\n\n**R2 – Snødekke/ufullstendig vurdering (confidence 0.95 – opprettholdes):**\nDirekte sitert fra tilstandsrapporten med klar anbefaling om ny inspeksjon. Meget godt dokumentert. Confidence opprettholdes på 0.95.\n\n**R3 – Tvist med utbygger (confidence 0.85 – opprettholdes):**\nBekreftet i egenerklæringen. Usikkerheten rundt tvistens status (\"tror den er avsluttet nå\") er et vesentlig forbehold. Ingen dokumentasjon på avslutning foreligger. Confidence opprettholdes på 0.85.\n\n**R4 – Bindende strømavtale Norgespris (confidence 0.9 – opprettholdes):**\nKlart dokumentert i salgsoppgaven. Kjøper er forpliktet til å overta avtalen. Confidence opprettholdes på 0.9.\n\n**R5 – Manglende radonmåling (confidence 0.8 – opprettholdes):**\nBekreftet i egenerklæring, salgsoppgave og tilstandsrapport. Middels til lavt aktsomhetsområde reduserer risikoen noe, men manglende dokumentasjon er likevel en risiko. Confidence opprettholdes på 0.8.\n\n**R6 – Manglende dokumentasjon elektrisk arbeid (confidence 0.85 – opprettholdes):**\nGodt dokumentert. Det faktum at øvrige elektriske arbeider har samsvarserklæringer styrker risikoen ved at dimmerbyttet mangler dette. Confidence opprettholdes på 0.85.\n\n**R7 – Komfyrvakt feilsignal (confidence 0.8 – opprettholdes):**\nBekreftet i egenerklæringen. Komfyrvakt er et brannsikkerhetstiltak, og uforklarte feilsignaler er en reell sikkerhetsrisiko. Confidence opprettholdes på 0.8.\n\n**R8 – Trapper/garderobeskap/etasjeskille ikke vurdert (confidence 0.85 – opprettholdes):**\nDirekte sitert fra tilstandsrapporten med eksplisitt risikovurdering. Confidence opprettholdes på 0.85.\n\n**R9 – Legalpant (confidence 0.8 – opprettholdes):**\nGodt dokumentert i salgsoppgaven. Dette er en standardrisiko ved seksjonskjøp, men er likevel viktig å fremheve. Confidence opprettholdes på 0.8.\n\n**R10 – Skjulte feil og mangler (confidence 0.75 – opprettholdes):**\nDokumentert i tilstandsrapporten. Dette er en generell risiko, men er likevel relevant gitt manglende geologiske undersøkelser og utilgjengelig fundament. Confidence opprettholdes på 0.75.\n\n**R11 – Private stikkledninger (confidence 0.7 – opprettholdes):**\nBekreftet i salgsoppgaven. Risikoen er reell men noe generell. Confidence opprettholdes på 0.7.\n\n**R12 – Limt hengsel på kjøkken (confidence justeres ned til 0.55):**\nBekreftet i egenerklæringen, men dette er en svært begrenset og bagatellmessig risiko. Ingen ytterligere beskrivelse av konsekvens eller omfang. Confidence justeres ned fra 0.65 til 0.55 da dette knapt kvalifiserer som en vesentlig risiko.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Rørleggerarbeid uten fullstendig dokumentasjon: Rørlegger la opp til vaskemaskin i teknisk rom i 2023 (E & H rørleggerbedrift AS) – det er ikke nevnt om det foreligger samsvarserklæring for dette arbeidet.\n2. Fellesgjeld og økonomi i sameiet: Andel fellesgjeld er svært lav (kr 2 913 pr. 31.12.2025), men det er ikke opplyst om vedlikeholdsplan eller fremtidige planlagte tiltak i sameiet som kan medføre økte felleskostnader.\n3. Husdyrrestriksjoner: Vedtektene krever styrets forhåndsgodkjenning for husdyrhold – relevant for kjøpere med dyr.\n4. Boligen ligger over marin grense (NGU-data), noe som normalt er positivt, men grunnforhold er ikke nærmere undersøkt.\n"
}

## Raw Response
```json
{
  "id": "msg_01JXHDmgX5hy5UnrTt4T7GjE",
  "container": null,
  "content": [
    {
      "id": "toolu_01Msvrhfb6BYHxpYEHWFQPNG",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Lekkasje ved pipe/tak i sameiet: Selger opplyser at sameiet har hatt lekkasje ved pipe/tak, og at dette skal ha blitt utbedret. Det er usikkerhet knyttet til om utbedringen er fullstendig og om det kan oppstå nye lekkasjer.",
            "evidence": [
              "Egenerklæring spørsmål 6: 'Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade? Svar: Ja. Beskrivelse: Sameiet skal ha utbedret lekkasje ved pipe/tak'",
              "Tilstandsrapportens sammendrag av egenerklæring bekrefter samme opplysning",
              "Salgsoppgavens liste over utførte arbeider nevner: 'Sameiet skal ha utbedret lekkasje ved pipe/tak'",
              "Selger bruker formuleringen 'skal ha utbedret', noe som indikerer usikkerhet om utbedringens omfang og kvalitet"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R2",
            "description": "Ufullstendig tilstandsvurdering grunnet snødekke: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snø. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan ha blitt oversett.",
            "evidence": [
              "Tilstandsrapport: 'Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.'",
              "Tilstandsrapport: 'For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.'",
              "TG iu-definisjonen i rapporten bekrefter at snødekket tak er en typisk årsak til at bygningsdeler ikke kan undersøkes"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Tvist mellom sameiet og utbygger: Selger opplyser at sameiet har vært i tvist med utbygger. Det er usikkerhet knyttet til om tvisten er endelig avsluttet, og eventuelle konsekvenser for sameiet og dets økonomi er uklare.",
            "evidence": [
              "Egenerklæring spørsmål 25: 'Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag? Svar: Ja. Beskrivelse: Sameiet har vært i tvist med utbygger, men tror den er avsluttet nå.'",
              "Formuleringen 'men tror den er avsluttet nå' indikerer at selger ikke har sikker kunnskap om tvistens status",
              "Ingen dokumentasjon på forlik eller dom er vedlagt salgsoppgaven"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R4",
            "description": "Bindende strømavtale (Norgespris) med bindingstid til 31.12.2026: Kjøper er forpliktet til å overta selgers strømavtale med bindingstid, noe som begrenser kjøpers valgfrihet og kan medføre uønskede forpliktelser.",
            "evidence": [
              "Salgsoppgaven: 'Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.'",
              "Salgsoppgaven beskriver Norgespris som en statlig ordning med fast pris på 50 øre per kWh inkl. mva, med forbrukstak på 5 000 kWh per måned",
              "Det fremgår at eventuell strømstøtte bortfaller ved tegning av Norgespris-avtale"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Manglende radonmåling: Selger har ikke utført radonmåling. Eiendommen ligger i et middels til lavt aktsomhetsområde for radon, og det er ikke dokumentert at radonnivåene er innenfor anbefalte grenseverdier.",
            "evidence": [
              "Salgsoppgaven: 'Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.'",
              "Salgsoppgaven: 'Eiendommen ligger i et middels til lavt aktsomhetsområde for radon.'",
              "Tilstandsrapport: 'Den bygningskyndige har ikke foretatt radonmålinger. Grenseverdi for radon er den høyeste årsmiddelverdien som generelt er anbefalt i et oppholdsrom. Grenseverdi er satt til 200 Bq/m3.'",
              "Egenerklæring spørsmål 21: 'Er det foretatt radonmåling? Nei'"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R6",
            "description": "Manglende dokumentasjon på elektrisk arbeid (dimmerbytte): Det er utført elektrisk arbeid (bytte av dimmer) av elektriker, men det foreligger ingen dokumentasjon på dette arbeidet. Dette kan innebære risiko for at arbeidet ikke er utført i henhold til gjeldende forskrifter.",
            "evidence": [
              "Egenerklæring/tilleggskommentar: 'Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon'",
              "Salgsoppgavens liste over utførte arbeider bekrefter: 'Bytte av en dimmer, gjort av elektriker, men ingen dokumentasjon'",
              "Øvrige elektriske arbeider i boligen har samsvarserklæringer (Sigvartsen Elektro AS 03.02.2023, Graderomen Elektro AS 21.09.2019, Aina Elektro AS 13.09.2018), noe som understreker at manglende dokumentasjon for dimmerbyttet er et avvik fra normalen"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Komfyrvakt gir av og til feilsignal uten kjent årsak: Komfyrvakten gir sporadiske feilsignaler uten at årsaken er funnet. Dette kan indikere en feil ved komfyrvakten eller tilknyttede installasjoner, og kan utgjøre en sikkerhetsrisiko.",
            "evidence": [
              "Egenerklæring/tilleggskommentar: 'Komfyrvakta gir av og til fra seg signal om feil uten at man har funnet ut hvorfor.'",
              "Komfyrvakt er et brannsikkerhetstiltak – uforklarte feilsignaler kan indikere funksjonssvikt eller feil installasjon, noe som er en potensiell sikkerhetsrisiko"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "description": "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og andre relevante vedlikeholdsbehov.",
            "evidence": [
              "Tilstandsrapport: 'Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.'",
              "Tilstandsrapport: 'Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.'",
              "Tilstandsrapport: 'Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.'"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Legalpant fra sameiet og kommunen med prioritet foran tinglyste lån: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Disse heftelsene vises ikke i grunnboksutskriften og har prioritet foran banklån på seksjonen.",
            "evidence": [
              "Salgsoppgaven: 'De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader. Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.'",
              "Salgsoppgaven: 'Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.'",
              "Grunnboksutskriften viser tinglyst bestemmelse om jordkabel/jordkabelanlegg, men legalpant fremgår ikke av denne"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Skjulte feil og mangler kan forekomme: Tilstandsrapporten er basert på visuelle observasjoner og kan ikke avdekke alle skjulte feil og mangler. Fundament er ikke tilgjengelig for inspeksjon, og det er ikke utført geologiske undersøkelser.",
            "evidence": [
              "Tilstandsrapport: 'Selv om takstmannens analyser er svært grundig, kan det forekomme skjulte feil og mangler.'",
              "Tilstandsrapport: 'Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.'",
              "Tilstandsrapport: 'Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.'",
              "Tilstandsrapport: 'På bakgrunn av observasjoner gjort på befaringsdagen, vurderes grunnforholdene å være stabile.' – dette er en skjønnsmessig vurdering uten geologisk dokumentasjon"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Privat stikkledning for vann og avløp med vedlikeholdsansvar for sameiet: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret påhviler sameiet. Dette kan medføre fremtidige kostnader for sameiet og dermed økte felleskostnader.",
            "evidence": [
              "Salgsoppgaven: 'Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.'",
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem, men de private stikkledningene er sameiets ansvar"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Hengsel på kjøkken er limt og ikke fagmessig reparert: En hengsel på kjøkkenet er limt, noe som kan indikere en midlertidig løsning som ikke er fagmessig utbedret.",
            "evidence": [
              "Egenerklæring/tilleggskommentar: 'En hengsel på kjøkkenet er limt.'",
              "Forholdet er opplyst av selger selv i egenerklæringen, men det er ikke gitt noen ytterligere beskrivelse av omfang eller konsekvens"
            ],
            "source_documents": [
              "d160_d160"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          }
        ],
        "re_retrieval_queries": [
          "tvist utbygger sameiet avsluttet resultat forlik dom",
          "fellesgjeld sameiet økonomi budsjett vedlikeholdsplan",
          "elektrisk anlegg samsvarserklæring dimmer dokumentasjon",
          "komfyrvakt feilsignal brann sikkerhet",
          "radon måling aktsomhetsområde grenseverdi",
          "pipe tak lekkasje utbedring dokumentasjon",
          "vedlikeholdsplan sameiet fremtidige kostnader",
          "etasjeskille konstruksjon tilstandsgrad"
        ],
        "reasoning": "\nGjennomgangen av alle 12 identifiserte risikoer mot dokumentevidensen viser følgende:\n\n**R1 – Lekkasje ved pipe/tak (confidence 0.9 – opprettholdes):**\nEvidensen er solid og bekreftet i både egenerklæring og salgsoppgavens arbeidsliste. Formuleringen \"skal ha utbedret\" er usikker og gir grunnlag for bekymring. Confidence opprettholdes på 0.9.\n\n**R2 – Snødekke/ufullstendig vurdering (confidence 0.95 – opprettholdes):**\nDirekte sitert fra tilstandsrapporten med klar anbefaling om ny inspeksjon. Meget godt dokumentert. Confidence opprettholdes på 0.95.\n\n**R3 – Tvist med utbygger (confidence 0.85 – opprettholdes):**\nBekreftet i egenerklæringen. Usikkerheten rundt tvistens status (\"tror den er avsluttet nå\") er et vesentlig forbehold. Ingen dokumentasjon på avslutning foreligger. Confidence opprettholdes på 0.85.\n\n**R4 – Bindende strømavtale Norgespris (confidence 0.9 – opprettholdes):**\nKlart dokumentert i salgsoppgaven. Kjøper er forpliktet til å overta avtalen. Confidence opprettholdes på 0.9.\n\n**R5 – Manglende radonmåling (confidence 0.8 – opprettholdes):**\nBekreftet i egenerklæring, salgsoppgave og tilstandsrapport. Middels til lavt aktsomhetsområde reduserer risikoen noe, men manglende dokumentasjon er likevel en risiko. Confidence opprettholdes på 0.8.\n\n**R6 – Manglende dokumentasjon elektrisk arbeid (confidence 0.85 – opprettholdes):**\nGodt dokumentert. Det faktum at øvrige elektriske arbeider har samsvarserklæringer styrker risikoen ved at dimmerbyttet mangler dette. Confidence opprettholdes på 0.85.\n\n**R7 – Komfyrvakt feilsignal (confidence 0.8 – opprettholdes):**\nBekreftet i egenerklæringen. Komfyrvakt er et brannsikkerhetstiltak, og uforklarte feilsignaler er en reell sikkerhetsrisiko. Confidence opprettholdes på 0.8.\n\n**R8 – Trapper/garderobeskap/etasjeskille ikke vurdert (confidence 0.85 – opprettholdes):**\nDirekte sitert fra tilstandsrapporten med eksplisitt risikovurdering. Confidence opprettholdes på 0.85.\n\n**R9 – Legalpant (confidence 0.8 – opprettholdes):**\nGodt dokumentert i salgsoppgaven. Dette er en standardrisiko ved seksjonskjøp, men er likevel viktig å fremheve. Confidence opprettholdes på 0.8.\n\n**R10 – Skjulte feil og mangler (confidence 0.75 – opprettholdes):**\nDokumentert i tilstandsrapporten. Dette er en generell risiko, men er likevel relevant gitt manglende geologiske undersøkelser og utilgjengelig fundament. Confidence opprettholdes på 0.75.\n\n**R11 – Private stikkledninger (confidence 0.7 – opprettholdes):**\nBekreftet i salgsoppgaven. Risikoen er reell men noe generell. Confidence opprettholdes på 0.7.\n\n**R12 – Limt hengsel på kjøkken (confidence justeres ned til 0.55):**\nBekreftet i egenerklæringen, men dette er en svært begrenset og bagatellmessig risiko. Ingen ytterligere beskrivelse av konsekvens eller omfang. Confidence justeres ned fra 0.65 til 0.55 da dette knapt kvalifiserer som en vesentlig risiko.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Rørleggerarbeid uten fullstendig dokumentasjon: Rørlegger la opp til vaskemaskin i teknisk rom i 2023 (E & H rørleggerbedrift AS) – det er ikke nevnt om det foreligger samsvarserklæring for dette arbeidet.\n2. Fellesgjeld og økonomi i sameiet: Andel fellesgjeld er svært lav (kr 2 913 pr. 31.12.2025), men det er ikke opplyst om vedlikeholdsplan eller fremtidige planlagte tiltak i sameiet som kan medføre økte felleskostnader.\n3. Husdyrrestriksjoner: Vedtektene krever styrets forhåndsgodkjenning for husdyrhold – relevant for kjøpere med dyr.\n4. Boligen ligger over marin grense (NGU-data), noe som normalt er positivt, men grunnforhold er ikke nærmere undersøkt.\n"
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
    "input_tokens": 20015,
    "output_tokens": 5204,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
