# Trace: agentic_reflecting_iter1
- **Run ID:** 77b2ee54-c7d6-48f0-9d57-d9a7cb637ae2
- **Tidspunkt:** 2026-03-25T12:20:44.014680+00:00
- **Varighet:** 102.05s
- **Input tokens:** 18187
- **Output tokens:** 5094

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
Risiko 1: Ulovlig romendring uten godkjente byggetegninger: Opprinnelige byggetegninger viser kun 1 soverom, men tidligere eiere har delt av kjøkkenet for å lage et ekstra soverom. Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligens faktiske tilstand.
  Confidence: 0.95
  Evidens: Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen i dag. Opprinnelige byggetegningen er tegnet inn kun med 1 stk soverom, men tidligere eiere har i ettertid delt av kjøkkenet med 1 ekstra soverom.; Det er ukjent om det ligger oppdaterte byggetegninger hos kommunen som viser til denne romdelingen.; Kjøper bør derfor undersøke nærmere med kommunen om den faktiske romløsningen er formelt godkjent, og være oppmerksom på at endringer av denne typen kan utløse krav om bruksendring og godkjenning.

Risiko 2: Rekkverk tilfredsstiller ikke gjeldende forskriftskrav: Utvendig rekkverkshøyde er ikke tilstrekkelig i henhold til krav på oppføringstidspunktet (minimum 1 meter), noe som utgjør en sikkerhetsrisiko.
  Confidence: 0.95
  Evidens: Utvendig rekkverkshøyde er ikke tilstrekkelig, da kravet på oppføringstidspunktet var minimum 1 meter. Dette innebærer at dagens rekkverk ikke tilfredsstiller gjeldende forskriftskrav, og det anbefales å øke høyden for å ivareta sikkerheten.

Risiko 3: Sameiets negative årsresultat og risiko for økte felleskostnader: Sameiet hadde et negativt årsresultat på kr. 1 037 291 i 2024, og det er innkalt til årsmøte for å avklare om felleskostnader skal økes. Det kan bli nødvendig med ekstra innbetalinger for å unngå låneopptak.
  Confidence: 0.93
  Evidens: Av årsregnskapet 2024 fremgår det at sameiet hadde et negativt årsresultat på kr. 1 037 291 som ble overført til annen egenkapital. Sum egenkapital pr. 31.12.2024 var kr. 4 12 101.; Det er innkalt til årsmøte 17.03.2026 hvor det vil bli avklart om felleskostnader skal økes.; Sameiet følger en vedlikeholdsplan og for å følge denne blir det nødvendig med innbetalinger utover månedlige fellekostnader for å unngå låneopptak.

Risiko 4: Kvikkleirefare: Boligen ligger i et område under marin grense, og der det finnes marin leire kan det også forekomme kvikkleire. Det er ikke foretatt geologiske undersøkelser.
  Confidence: 0.8
  Evidens: Temakart fra NGU viser at boligen ligger i ett område under marin grense.; Der det finnes marin leire, kan det også være kvikkleire.; Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.

Risiko 5: Manglende vurdering av utvendige bygningsdeler grunnet snø: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snødekke. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan dermed være uoppdaget.
  Confidence: 0.88
  Evidens: Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.; Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.; For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.

Risiko 6: Manglende funksjonstesting av elektrisk anlegg og installasjoner: Elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser og persienner er ikke funksjonstestet. Selger opplyser heller ikke om utført kontroll av el-anlegget.
  Confidence: 0.85
  Evidens: Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.; Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Svar: Nei

Risiko 7: Vinduer og balkongdør har passert forventet levetid: Vinduer og balkongdør er vurdert til TG1, men har passert sin forventede levetid, noe som innebærer økt risiko for fremtidige feil og behov for utskifting.
  Confidence: 0.85
  Evidens: Vinduer, balkong- og terrassedør har passert sin forventede levetid.; Det ble foretatt en enkel funksjonstest av tilfeldige valgte vinduer, balkongdør i boligen, ingen funksjonsavvik.; Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller utskifting.

Risiko 8: Utilstrekkelig ventilasjon på bad: Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad, noe som kan medføre fuktproblemer og dårlig inneklima.
  Confidence: 0.82
  Evidens: Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad.

Risiko 9: Risiko for skjulte skader i trapper, garderobeskap og etasjeskille: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og vedlikeholdsbehov.
  Confidence: 0.78
  Evidens: Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.; Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.; Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.

Risiko 10: Usikkerhet rundt rettslig tilhørighet for eksterne arealer (BRA-e): Bod i felles kjeller er inkludert som BRA-e basert på opplysninger fra eier, men det er ikke kontrollert om arealet rettslig tilhører boenheten. Slike arealer kan omdisponeres av sameiet.
  Confidence: 0.75
  Evidens: Arealer utenfor boenheten er kun inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er ikke kontrollert om disse arealene rettslig tilhører boenheten eller om de er del av fellesareal.; Slike arealer kan omdisponeres av borettslag/sameie, noe som kan påvirke boligens tilgjengelige bruksareal.

Risiko 11: Legalpant og prioritetsrisiko: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.
  Confidence: 0.8
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.

Risiko 12: Manglende radonmåling: Selger bekrefter at det ikke er foretatt radonmåling av boligen, noe som innebærer usikkerhet rundt radonkonsentrasjonen i inneluften.
  Confidence: 0.78
  Evidens: Er det foretatt radonmåling? Nei

Risiko 13: Mulig punktert glass i vinduer: Det er registrert punktert glass i vinduer, og det utelukkes ikke at det kan forekomme ytterligere punkterte glass som ikke ble oppdaget under befaringen.
  Confidence: 0.72
  Evidens: Punktert glass er bare synlig under spesielle omstendigheter og det utelukkes ikke at det kan forkomme punktert glass som ikke ble registrert på befaringsdagen.

Risiko 14: Manglende oppdatert energimerking: Boligen har ikke angitt energikarakter eller energifarge, noe som gir kjøper begrenset informasjon om boligens energieffektivitet og fremtidige energikostnader.
  Confidence: 0.7
  Evidens: Energikarakter: Ikke angitt; Energifarge: Ikke angitt

Dokumentkontekst:
[d174_d174 | Side [1]]
I forbindelse med salget er det utarbeidet en
Innvendige arealer er oppmålt med laser tilstandsrapport fra bygningssakkyndig. Rapporten gir en
(avstandsmåler). teknisk vurdering av boligen og påviser eventuelle avvik.
Ved arealmåling for salg eller avhending av bolig, skal Det er viktig å merke seg at forhold som er vurdert med
bruksareal (BRA) benyttes. Hele boenheten skal måles TG2 og TG3 bør gjennomgås nøye, ettersom disse
og summeres i BRA. indikerer avvik fra normal slitasje eller høy alder, og

---

[d174_d174 | Side [1]]
grad og ikke er beskrevet, betyr det at det ikke er noen avvik i forhold til det som kan
forventes. Alder tatt i betraktning.
Takstmannens utdypende vurdering av bygningsdeler med TG 2 og TG 3 finnes på siste siden(e) i denne rapporten.
Denne rapporten er gyldig i 12 mnd.
©mstr.no 1/23
www.bmtf.no
34

## Side 35

EIERSKIFTERAPPORT™
OM EIERSKIFTERAPPORT™
Rapporten er utarbeidet med utgangspunkt i BMTFs faglige rammeverk for tilstandsanalyse ved boligsalg, samt avhendingslova med
tilhørende forskrift

---

[d174_d174 | Side [1]]
g eller
salg.
Tilstandsrapporten har en gyldighet på 12 mnd. fra rapportdato. Skulle det oppstå skader, endringer eller annet av
betydning ved boligen, oppfordres hjemmelshaver/selger til å informere om forholdene og oppdatere tilstandsrapporten.
I tilstandsrapporten har den bygningssakkyndige ikke gjort undersøkelser/vurderinger av bygningens estetikk eller
arkitektur.
Den bygningssakkyndige har ikke kontrollert om det foreligger offentligrettslige pålegg fra kommunen. Det er ikke
kontrollert om det er

---

[d174_d174 | Side [1]]
l av både
det elektriske og det branntekniske anlegget.
©mstr.no 2/23
www.bmtf.no
35

## Side 36

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
TG 2 betyr at bygningsdelen kan ha vesentlige avvik.

---

[d174_d174 | Side [1]]
rne produkter eller tjenester i
forbindelse med et salgsoppdrag. Våre
samarbeidspartene er:
Søderberg & Partners AS ‑ formidler av boligselger‑ og
32

## Side 33

PÆREHAGEN 3

## Side 34

EIERSKIFTERAPPORT™
Leilighet
Pærehagen 3
2040 Kløfta
www.e3.no
Boligens tekniske tilstand:
Antall TG
0
3
7
0
0
Utført av: Postboks 31
Takstmann Jessheim 2051
August Magnus 98023301
Dato: 13/03/2026 august@tmam.no
Dersom bygningsdelen kun har en tilstandsgrad og ikke er beskrevet, betyr det at det ikke er noen avvik i

---

[d174_d174 | Side [1]]
ygningsdelen er:
* Har total funksjonssvikt
* Fyller ikke lenger formålet
TG 3
* Er en fare for liv og helse
Det er et akutt behov for tiltak, og/eller det er avvik fra lover eller forskrifter som gjelder for den aktuelle bygningsdelen
eller byggverket.
TG iu betyr at bygningsdelen ikke er undersøkt. Denne tilstandsgraden skal kun benyttes unntaksvis. Eksempler kan
være:
TG iu
* Snødekket tak og krypekjeller uten inspeksjonsmulighet på tidspunktet for analysen
* Bygningsdelen, arealet eller rommet er ikke

---

[d174_d174 | Side [1]]
t, i.h.t. NS 3940. Mindre areal
avvik kan forekomme.
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift.
Det er bruken av rommene på befaringsdagen som vurderes om hva det betegnes som i rapporten.
Grunnet leilighetens skåvegger og vinkler kan det forkomme noe arealavvik.
Arealopplysninger som er basert på fysisk oppmåling etter ferdigstillelse, vil kunne avvike fra arealopplysninger som er basert på
byggetegninger.
Dersom det ikke er framlagt byggetegninger for boligen, vil

---

[d174_d174 | Side [1]]
gnet ved eierskifte av boliger. Rapporten erstatter ikke kjøpers undersøkelsesplikt eller selgers
opplysningsplikt i henhold til lov om avhending av fast eigedom.
NIVÅ AV ANALYSEN:
Tilstandsanalysen utføres ved grundige visuelle observasjoner kombinert med undersøkelser, målinger, bruk av egnede instrumenter og
registreringer. Dersom det er mistanke til høyt fuktnivå i vegger mot våtrom, eller i rom under terreng kan tilstandsanalysen omfatte
destruktive inngrep som for eksempel hullborring i vegger.
Det

---

[d174_d174 | Side [1]]
rte vindusglass på befaringsdagen.
Punktert glass er bare synlig under spesielle omstendigheter og det utelukkes ikke at det kan forkomme punktert glass
som ikke ble registrert på befaringsdagen.
Det ble foretatt en enkel funksjonstest av enkelte innedører og ytterdør, små merker på ytterdør og nedre del av karmer.
TG1
Det ble foretatt en enkel funksjonstest av tilfeldige valgte vinduer, balkongdør i boligen, ingen funksjonsavvik.
Vinduer, balkong- og terrassedør har passert sin forventede levetid.

---

[d174_d174 | Side [1]]
lyse ved boligsalg, samt avhendingslova med
tilhørende forskrift (tryggere bolighandel).
Som del av en overgangsordning benyttes NS 3600:2018 – Teknisk tilstandsanalyse ved omsetning av bolig som normativt grunnlag
for struktur, begrepsbruk og fastsettelse av tilstandsgrader.
AVGRENSNING:
EIERSKIFTERAPPORT™ er godkjent av Byggmestrenes Takseringsforbund og kan kun benyttes av BMTF-sertifiserte takstmenn.
Rapporten er spesielt godt egnet ved eierskifte av boliger. Rapporten erstatter ikke kjøpers

---

[d174_d174 | Side [1]]
eransenivået for de ulike rom og bygningsdeler gitt som krav til tilstandsgrad TG 1, det vil si uten skader og fagmessig
riktig utført og i henhold til gjeldende lov/forskrift som gjelder for den aktuelle boligen der ikke tilleggene angir annet. Generelt er
referansenivået byggeforskrifter som var gjeldende når bygningen/bygningsdelen ble byggesøkt.
LEVETIDSBETRAKTNINGER:
Når det refereres til levetid er dette basert på takstmannens erfaringstall og Byggforskserien 700.320 Intervaller for vedlikehold

---

[d174_d174 | Side [1]]
a
soverom. Det er ukjent om det ligger oppdaterte byggetegninger hos kommunen som viser til denne romdeleingen.
Kjøper bør derfor undersøke nærmere med kommunen om den faktiske romløsningen er formelt godkjent, og være
oppmerksom på at endringer av denne typen kan utløse krav om bruksendring og godkjenning. Det anbefales å innhente
dokumentasjon før eventuelle tiltak iverksettes, slik at man unngår fremtidige utfordringer ved bruk, ombygging eller
salg.
Tilstandsrapporten har en gyldighet på 12 mnd. fra

---

[d174_d174 | Side [1]]
nsvaret for både vedlikehold og eventuelle reparasjoner av disse bygningene.
Enkelte forhold og skader som måtte oppstå, håndteres dermed gjennom sameiets eller borettslagets vedlikeholdsplan og budsjett.
©mstr.no 6/23
www.bmtf.no
39

## Side 40

EIERSKIFTERAPPORT™
FORUTSETNINGER: (Værforhold, hindringer, etc.):
Overskyet/regn og 2 plussgrad.
Leiligheten ble kontrollert/inspisert i dagslys.
Rapporten legger til grunn boligens tilstand på befaringsdagen og bygningens byggeår.
Der hvor anbefalinger fra nyere

---

[d174_d174 | Side [1]]
endet med fasadeplater og trepanel, armertbetong i etasjeskiller og
innervegger oppført i betong/gips med varierende overflater. Felles trappegang, med heis og felles parkeringskjeller.
Det er ikke satt tilstandsgrad på utvendig kledning, takrenner, yttertak, terrasser/balkonger og utvendig terreng da dette er en del av
sameiets felles bygningsmasse og vedlikeholdsansvar. Ved taksering av leilighet i sameier er det primært innvending i leiligheten og de
arealene som tilhører denne som er vurdert.
Det ble

---

[d174_d174 | Side [1]]
tid, som for eksempel vedlikehold, estetikk, økonomi, sikkerhet, funksjon
eller andre brukerønsker, er lagt til grunn.
VÆR OPPMERKSOM PÅ
Egenerklæringsskjema skal alltid legges frem for rapportansvarlig før tilstandsanalysen påbegynnes. Dersom egenerklæring ikke
foreligger, vil dette komme tydelig frem på en av de siste sidene av rapporten under ovenstående overskrift.
Dersom det er lagt frem dokumentasjon av pågående byggesaker og/eller manglende ferdigattest, og/eller midlertidig brukstillatelse. Så
vil

---

[d174_d174 | Side [1]]
ingsdagen og bygningens byggeår.
Der hvor anbefalinger fra nyere tekniske forskrifter er nevnt på eventuelt enkelte punkter i rapporten, er det ikke å anse som ett avvik
men kun en anbefaling.
Utvendige konstruksjoner over terreng er inspisert fra bakkeplan.
Inspeksjonen ble kun utført på lett tilgjengelige deler av konstruksjonene. Dette kan medføre at skader/mangler som er tildekket/skjult
ikke fremkommer i taksten.
Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og

---

[d174_d174 | Side [1]]
ikkleire.
Dataene kommer fra NGU. For mer informasjon om kartet, se internettsiden til NGU.
OVERORDNET FAGLIG VURDERING AV EIENDOMMEN:
Leiligheten fremstår i grei stand med noe alderslitasje i bod og på badet. Det ble ikke registrert eller avdekket noen behov for
bygningsmessige strakstiltak utover normalt vedlikehold. Viser til beskrivelser og vurderinger for de enkelte bygningsdeler i rapporten.
ANNET:
Boligselskap: Sameiet Pærehagen 3
Organisasjonsnr: 984397534
Forretningsfører: Team Regnskap Jessheim

---

[d174_d174 | Side [1]]
ngstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på. Dette kan
innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen. For å få en fullverdig
vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det.
Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.
Det er kun

---

[d174_d174 | Side [1]]
vitevarer, markiser, persienner o.l er ikke foretatt.
Det er kun stedvis gjort enkelte målinger (krysslaser og avstandsmåler) eller inngrep i konstruksjonen der hvor dette er beskrevet.
Tomteareal er opplysninger som er innhentet av bygningssakkyndig fra Kartverket og Eiendomsverdi.no, avvik kan forekomme.
Hjemmelshaver ga muntlig og skriftlig beskrivelse om årstall og bygningsmessige påkostninger om de forskjellige beskrivende
byggedeler i rapporten.
ANDRE MERKNADER:
Leiligheten blir oppvarmet av

---

[d174_d174 | Side [1]]
 nødvendig.
TG 2 betyr at bygningsdelen kan ha vesentlige avvik. Eksempler på TG2 kan være at bygningsdelen er:
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
* Fyller ikke lenger

---

[d174_d174 | Side [1]]
Kjøpekontrakten kan
Rettighet hefter i: Knr:3209 Gnr:29 Bnr:1009 Snr:1 ‑ 50 gjennomgås hos eiendomsmegleren før budet legges
BESTEM.OM RETT TIL PLASSERING AV BYGNING inn. Ta kontakt med eiendomsmegler dersom det er
NÆRMERE GRENSE spørsmål.
ENN 4 M M.V.
Overført fra: Knr:3209 Gnr:29 Bnr:1010 Selger leverer eiendommen i ryddig og rengjort tilstand.
Gjelder denne registerenheten med flere
Legalpant: Kommunen har legalpant som sikkerhet for
Kontrakts‑
betaling av kommunale avgifter og eventuell
eiendomsskatt.

---

[d174_d174 | Side [1]]
kter Tinglyste heftelser og rettigheter: På eiendommen er det
og husordensregler. Evt. dokumenter følger vedlagt i tinglyst følgende heftelser og rettigheter som følger
salgsoppgaven. eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Beboernes forpliktelser og
3209/ 29/ 1010/ 11:
07.05.2003 ‑ Dokumentnr: 5010 ‑ Erklæring/ avtale
dugnader
Pliktig medlemskap i velforening m.v.
Seksjonseier/ leietaker er ansvarlig for renhold/ Kan ikke slettes uten samtykke fra Bjerkejordet
snømåking av svalgang

---

[d174_d174 | Side [1]]
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: AR 2
96006240
:ecnerefer
tnemucoD
58

## Side 59

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant

---

[d174_d174 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om

---

[d174_d174 | Side [1]]
akts‑
betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har
grunnlag
legalpant på inntil 2G som sikkerhet for krav knyttet til
sameieforholdet, som felleskostnader. Legalpant er pant
Overtakelse
som ikke vises i grunnboksutskriften, og har prioritet
28

## Side 29

OM EIENDOMMEN
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er

---

[d174_d174 | Side [1]]
 andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i

---

[d174_d174 | Side [1]]
Alt utstyr og installasjoner som medfølger overtas slik de
eller utskifting. er, uten garanti, med mindre det foreligger en gjeldende
Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller garanti fra produsent eller leverandør.
utskifting.
Følgende medfølger ikke:
Ventilasjon Hyller i innvendig bod og garderobe oppheng i gang.
Det er ikke tilstrekkelig lufting mellom dørterskel og dør
inn til bad.. Kjøper aksepterer at det kan forekomme hull og merker
25

## Side 26

OM EIENDOMMEN
etter montering av

---

[d174_d174 | Side [1]]
n. regelverk, eller at det senere er utført arbeid på bygget
som ikke er byggemeldt eller godkjent.
Parkering
Et rom som på opprinnelige byggetegninger er angitt
Det disponeres egen parkeringsplass med lader i som spisestue benyttes i dag som soverom. Det
garasjekjeller foreligger således et avvik mellom byggetegninger og
dagens bruk. Endret bruk mellom oppholdsrom anses
normalt ikke som søknadspliktig bruksendring, men
Adkomst
kjøper gjøres oppmerksom på forholdet.
På høyre side i annonsen finner du et

---

[d174_d174 | Side [1]]
kke slettes uten samtykke fra Bjerkejordet
snømåking av svalgang utenfor egen leilighet. Vis hensyn Huseierforening eller Thongård AS
27

## Side 28

OM EIENDOMMEN
Gjelder denne registerenheten med flere foran tinglyste lån, for eksempel banklån på seksjonen.
Legalpant til kommunen har høyere prioritet enn
29.11.2006 ‑ Dokumentnr: 591250 ‑ Best. om vann/ legalpant til sameiet.
kloakkledn.
Rettighetshaver: Ullensaker Kommune
Vei, vann og avløp
Org.nr: 933 649 768
Bestemmelse om bebyggelse Offentlig
Rett for

---

[d174_d174 | Side [1]]
r løsøre og tilbehør", som
nedbøyning av terrassebordene, og det kan oppstå legges til grunn med mindre annet er spesifisert i
ujevnheter salgsoppgaven.
som gir dårligere brukskomfort. Over tid kan dette også
føre til skade på selve konstruksjonen og økt Gjenstander som er nevnt i standardlisten, men som ikke
vedlikeholdsbehov. finnes på eiendommen, vil heller ikke følge med i salget.
Konsekvens: Forholdet kan medføre behov for utbedring Alt utstyr og installasjoner som medfølger overtas slik de
eller

---

[d174_d174 | Side [1]]
elverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov

---

[d174_d174 | Side [1]]
gulv på bad
salgsoppgaven.
Hvis et rom på visningen mangler fast installert
oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Vedtekter/ husordensregler
Grilling på terrasser og balkonger er tillatt med elektrisk
Regulerings og arealplaner
grill og gass grill. Ved grilling skal en ta hensyn til
naboene og omgivelsene. I tillegg må vanlig Eiendommen er regulert til lavblokk/ rekkehus i mindre
brannsikkerhet ivaretas. vesentlig endring av reguleringsplan for "Eiendommer v/
Kløfta stasjon, felt ‑ A2"

---

[d174_d174 | Side [1]]
er levert i forbindelse med oppdraget.
Det er fremlagt godkjente tegninger av boligen.
Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen, se under.
Tilleggsopplysninger:
Det anbefales å sette seg godt inn i vedlagt dokumentasjon til salgsoppgave samt selgers egenerklæring. Det anbefales å
sette seg godt inn i vedlagt dokumentasjon til salgsoppgave samt selgers egenerklæring. Dette gir et bedre grunnlag for å
forstå boligens tilstand og eventuelle avvik, og kan hjelpe deg med

---

[d174_d174 | Side [1]]
tervegger i betong forblendet med Polisenummer fellesforsikring: SP6989311.1.7
fasadeplater og trepanel, armertbetong i etasjeskiller og
innervegger oppført i betong/ gips med varierende Husdyr: Det er tillatt å ha innekatt, men den kan ikke gå
overflater. Felles trappegang, med heis og felles løs på sameiets eiendom.
parkeringskjeller.
Hundehold er ikke tillatt, unntatt er anskaffelse av
tjenestehund, førerhund eller om beboer av
Øvrig
helsemessige årsaker må ha hund. I disse tilfellene skal
styret

---

[d174_d174 | Side [1]]
av reguleringsplan for "Eiendommer v/
Kløfta stasjon, felt ‑ A2" vedtatt 05.03.2001. m/ best.
Balkongkasser skal av sikkerhetshensyn henges inne på vedtatt 29.10.1999. og en mindre vesentlig endring
balkongene og ikke på utsiden av rekkverket. Vanning 05.03.2001
skal skje slik at det ikke berører naboen under. Det
samme gjelder vasking av balkonger og terrasser.
Tinglyste heftelser
Vi oppfordrer alle til å sette seg inn i gjeldende vedtekter Tinglyste heftelser og rettigheter: På eiendommen er det
og

---

[d174_d174 | Side [1]]
ig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig

---

[d174_d174 | Side [1]]
rettslige pålegg fra kommunen. Det er ikke
kontrollert om det er pågående byggesaker, endringer i reguleringsplan som berører den aktuelle eiendommen eller
andre ytre påvirkninger.
Utvendig rekkverkshøyde er ikke tilstrekkelig, da kravet på oppføringstidspunktet var minimum 1 meter. Dette
innebærer at dagens rekkverk ikke tilfredsstiller gjeldende forskriftskrav, og det anbefales å øke høyden for å ivareta
sikkerheten.
Takstmannens vurdering ved TG2:
1.1.1Bad Overflate vegger og himling
Vegger og

---

[d174_d174 | Side [1]]
vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank,

---

[d174_d174 | Side [1]]


## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

(Ingen tekst ekstrahert)

## Side 15

(Ingen tekst ekstrahert)

## Side 16

(Ingen tekst ekstrahert)

## Side 17

(Ingen tekst ekstrahert)

## Side 18

Plantegning

## Side 19

Plantegning

## Side 20

PÆREHAGEN 3
OM EIENDOMMEN

## Side 21

OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Kommunale avgifter
Prisantydning
Kr 12 931 (2026)
Kr 4 050 000
Informasjon: Kommunale avgifter inkluderer gebyr for
vann, avløp og renovasjon og

---

[d174_d174 | Side [1]]
e knyttet til valgt løsning. Endelig kostnad må avklares gjennom nærmere
undersøkelser og tilbud fra fagperson.
EIENDOMSDATA:
Matrikkeldata: Gnr:29, Bnr: 1010
Hjemmelshaver: Aina Radford
Seksjonsnummer: 11
Festenummer: -
Andelsnummer: -
Byggeår: 2002
Tomt: Felleseie tomt 3 643,5 m²
Kommune: 3209 ULLENSAKER
BEFARINGEN:
Oppdragsgiver: Aina Radford
Befaringsdato: 11.03.2026
Fuktmåler benyttet: MMS3 PROTIMETER
Vann: OFFENTLIG
Avløp: OFFENTLIG
Adkomst: OFFENTLIG
©mstr.no 3/23
www.bmtf.no
36

## Side

---

[d174_d174 | Side [1]]
et legal panterett i den enkelte fellesarealer med minst 2 ukers varsel. Hensikten med
eierseksjon, begrenset til inntil 2 ganger folketrygdens dugnaden er ekstra opprydding og spare kostnader,
grunnbeløp. samt at det er sosialt.
Regnskap/ budsjett/ kostnadsøkninger: Av årsregnskapet
Energimerke
2024 fremgår det at sameiet hadde et negativt
årsresultat på kr. 1 037 291 som ble overført til annen Energikarakter: Ikke angitt
egenkapital. Sum egenkapital pr. 31.12.2024 var kr. 4 12
101. Energifarge: Ikke

---

[d174_d174 | Side [1]]
etype: boligseksjoner i sameiet, i henhold til eierseksjonsloven §
realsameie 23. Seksjoner som eies av nærstående eller gjennom et
26

## Side 27

OM EIENDOMMEN
firma regnes også med. I henhold til eierseksjonsloven § overfor naboer ved siden av og under.
31 er sameierne ansvarlige overfor sameiets kreditorer i
forhold til sin sameiebrøk. Ved manglende betaling av Styret kan innkalle til dugnad om våren på sameiets
fellesutgifter har sameiet legal panterett i den enkelte fellesarealer med minst 2 ukers

---

[d174_d174 | Side [1]]
n til bruk blir beskrevet.
MERKNADER OM ANDRE BYGNINGSDELER:
Bod på 6 m2 i felles kjeller.
Parkering på 1 stk biloppstillingsplass i felles parkeringskjeller. Opplegg for elbillader. Hjemmelshaver opplyser om at elbillading
faktureres via sameiet
Boder og biloppstillingsplass er sameiets/borettslagets felles byggemasse og vedlikeholdsansvar, derfor ikke satt tilstandgrad. Det betyr
at det er fellesskapet i sameiet eller borettslaget som har ansvaret for både vedlikehold og eventuelle reparasjoner av disse

---

[d174_d174 | Side [1]]
m egenkapital pr. 31.12.2024 var kr. 4 12
101. Energifarge: Ikke angitt
Det er innkalt til årsmøte 17.03.2026 hvor det vil bli avklart
Oppvarming
om felleskostnader skal økes. Sameiet følger en
vedlikeholdsplan og for å følge denne blir det nødvendig Boligen har følgende oppvarmingskilder:
med innbetalinger utover månedlige fellekostnader for å ‑ Panelovner i oppholdsrom
unngå låneopptak. Se innkalling til årsmøte i ‑ Varme i gulv på bad
salgsoppgaven.
Hvis et rom på visningen mangler fast

---

[d174_d174 | Side [1]]
tnader kan variere over tid som følge av
Ja, egen elbil‑lader på parkeringsplass i garasje beslutninger foretatt i sameiets styre og/ eller
generalforsamling.
Byggemåte
Forretningsfører: Team Regnskap Jessheim AS
Boligblokk i sameie oppført i 2002, leiligheten ligger i
1.etasje. Støpt fundament til grunn med grunnmur i støpt Sameiets forsikringsselskap: If Skadeforsikring
betong, yttertak i betongkonstruksjon tekket med
asfaltbelegg, yttervegger i betong forblendet med Polisenummer fellesforsikring:

---

[d174_d174 | Side [1]]
r vedlagt salgsoppgaven. Eierseksjonen hører til boligsameie. Vi oppfordrer alle til å
Interessenter oppfordres til å gjennomgå dette nøye. sette seg inn i vedtekter, husordensregler, regnskap,
budsjett og årsberetning.
Følgende opplysninger er kommentert av selger i Dokumentene vil være tilgjengelig hos meglerforetaket.
egenerklæringsskjema: Det gjøres oppmerksom på at fellesgjeld og
Har du ladeanlegg/ ladeboks for elbil i dag? felleskostnader kan variere over tid som følge av
Ja, egen elbil‑lader på

---

[d174_d174 | Side [1]]
varierte
Felleskostnader
friluftsområder som byr på alt fra tur‑ og sykkelstier,
Felleskostnader kr 3 524,‑ pr. mnd badeplasser, fiskemuligheter og skianlegg.
Romeriksåsen ligger langs hele vestsiden av Nannestad
Felleskostnader inkulderer: Vedlikehold og drift av kommune. Her finnes et rolig skoglandskap med
sameiet, felles forsikring, grunnpakke tv/ internett bølgende åser og mange innsjøer med gode fiskevann.
21

## Side 22

OM EIENDOMMEN
utført i samsvar med tillatelsen og øvrige krav etter plan‑
Kort

---

[d174_d174 | Side [1]]
 boenheten er kun inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er ikke kontrollert om
disse arealene rettslig tilhører boenheten eller om de er del av fellesareal. Slike arealer kan omdisponeres av borettslag/sameie, noe som kan påvirke
boligens tilgjengelige bruksareal.
Fellesareal – rettslig avgrensning:
Ved arealmåling er det NS 3940 som legges til grunn. Standarden har en annen definisjon av fellesareal enn eierseksjonsloven. Dette kan innebære at
arealer som er måleverdig

---

[d174_d174 | Side [1]]
gen er gjennomført for å avdekke eventuelle avvik og mangler ved boligen. Rapporten er utarbeidet i forbindelse med
salg av den aktuelle eiendommen.
VESENTLIGE ENDRINGER ETTER BYGGEÅR:
Hjemmelshaver opplyser om:
- Montert ny kjøkkeninnredning fra IKEA og hvitevarer kjøpt hos Elkjøp
- Malt alle vegger i alle øvrige rom, ikke i bod
FELLESKOSTNADER:
Totale felleskostnader pr. d.d. kr 3 524.- pr. mnd.
©mstr.no 4/23
www.bmtf.no
37

## Side 38

EIERSKIFTERAPPORT™
AREALER OG ANVENDELSE:
Arealmåling
Arealmålingene

---

[d174_d174 | Side [1]]
er du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AR 3
96006240
:ecnerefer
tnemucoD
59

## Side 60

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller

---

[d174_d174 | Side [1]]
# d174.pdf

## Side 1

KLØFTA
Pærehagen 3

## Side 2

Velkommen til
din nye bolig

## Side 3

Velkommen til
din nye bolig

## Side 4

NØKKELINFORMASJON
PRISANTYDNING BOLIGTYPE TOMTEAREAL
Kr 4 050 000,‑ Eierseksjon 3643.5 m² (eiet)
OMKOSTNING KJØPER EIEFORM
115 840,‑ Eierseksjon
TOTALPRIS ANTALL SOVEROM
4 165 840,‑ 2
FELLESKOSTNADER ETASJE
3 524,‑ pr. mnd 1
FELLESFORMUE BYGGEÅR
19 260,‑ 2002
BRA‑I/ BRA TOTAL ENERGIMERKING
76/ 82 kvm ‑ Ikke angitt
4

## Side 5

NØKKELINFORMASJON
Eirik Jørgen

---

[d174_d174 | Side [1]]
 hull og merker
25

## Side 26

OM EIENDOMMEN
etter montering av inventar og utstyr som ikke er en del i Ullensaker kommune.
av overdragelsen.
Selger
Eiendommens
Aina Radford
tilstand
Sameie
Takstmann: August Magnus Pærehagen 3 Boligsameie
Type takst avholdt av takstmann: Eierskifterapport Organisasjonsnummer: 984 397 534
Sammendrag selgers egenerklæring: Selgers Pærehagen 3 Boligsameie består av 45 boligseksjoner.
egenerklæringsskjema følger vedlagt salgsoppgaven. Eierseksjonen hører til boligsameie. Vi

---

[d174_d174 | Side [1]]
ført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9

---

[d174_d174 | Side [1]]
stå boligens tilstand og eventuelle avvik, og kan hjelpe deg med å ta informerte valg før kjøp. Det er også lurt å
kontakte fagpersoner eller kommunen dersom det er spørsmål knyttet til dokumentasjon eller godkjenningsstatus.
Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen i dag. Opprinnelige
byggetegningen er tegnet inn kun med 1 stk soverom, men tidligere eiere har i ettertid delt av kjøkkenet med 1 ekstra
soverom. Det er ukjent om det ligger oppdaterte byggetegninger

---

[d174_d174 | Side [1]]
l av el-anlegget og/eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Nei Ja
13 Har du ladeanlegg/ladeboks for elbil i dag?
Nei Ja
Beskrivelse Egen elbil-lader på parkeringsplass i garasje.
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på

---

[d174_d174 | Side [1]]
utskifting.
Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller utskifting.
Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.
Årsak: Det er ikke ett krav i Avhendingsloven for å vurdere eller satt tilstandsgrad på dette.
Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.
Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov.
Anbefalt tiltak: Det anbefales å gjennomføre ytterligere

---

[d174_d174 | Side [1]]
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: AR 1
96006240
:ecnerefer
tnemucoD
57

## Side 58

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om

---

[d174_d174 | Side [1]]
alitet og feil eller mangler ved anlegget.
Konsekvens: Forholdet kan medføre til behov for utbedring eller utskiftning.
Anbefalt tiltak: Det anbefales å undersøke anlegget nærmere, utført av fagperson, for å avklare omfang og
behov for utbedring.
Takstmannens vurdering ved TG3:
©mstr.no 23/23
www.bmtf.no
56

## Side 57

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260069
Selger 1 navn
Aina Radford
Gateadresse
Pærehagen

---

[d174_d174 | Side [1]]
gheten og de
arealene som tilhører denne som er vurdert.
Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten. På bakgrunn av observasjoner gjort på
befaringsdagen, vurderes grunnforholdene å være stabile. Fundament ligger under bakkenivå og er ikke tilgjengelig for inspeksjon.
Temakart fra NGU viser at boligen ligger i ett område under marin grense.
Der det finnes marin leire, kan det også være kvikkleire.
Dataene kommer fra NGU. For mer informasjon om kartet,

---

[d174_d174 | Side [1]]
anisasjonsnr: 984397534
Forretningsfører: Team Regnskap Jessheim AS
DOKUMENTKONTROLL:
- Egenerklæringsskjema 04.03.2026
- Byggetegninger fra byggeår
- Megler (meglerpakken) 12.03.2026
- Ferdigattest 01.12.2006
BESKRIVELSE AV INNVENDIGE OVERFLATER (vegger, tak og gulv):
Vegger: Malt strie, malt gips og fliser.
Tak/himlinger: Malte betongelementer og malt gips.
Gulv: Parkett, laminat, fliser og vinylbelegg.
FORMÅL MED ANALYSEN:
Tilstandsvurderingen er gjennomført for å avdekke eventuelle avvik og mangler ved

---

[d174_d174 | Side [1]]
ger.
Dersom det ikke er framlagt byggetegninger for boligen, vil bygningssakkyndig ikke kunne måle opp arealer av hulrom i sjakter o.l.
som er skjult, og som dermed ikke er tilgjengelig for oppmåling.
Arealet avrundes og oppgis i hele kvadratmeter (m2), og gjelder for tidspunktet da boligen ble målt.
Leiligheten har skråvegger og veggdeling/hjørner som vanskeligjør arealmålingen, mindre avvik kan derfor forekomme.
Ved måling av bruksareal med to eller flere bruksenheter per plan blir det målet til innside

---

[d174_d174 | Side [1]]
kke finnes noen ytre begrensinger, som rekkverk
eksempel skråtak eller lav himlingshøyde. Arealet oppgis o.l.
som tilleggsinformasjon til øvrige arealer. Ved taksering av leiligheter, rekkehus o.l i borettslag eller
sameier blir ikke arealet for parkeringsplass/
biloppstillingsplass i
Bygningssakkyndigs
fellesgarasje og carport oppmålt, men kun retten til bruk
blir beskrevet.
kommentar til
Standard
arealoppmåling
Målt takhøyde i stue 2.40 m. I forbindelse med salget er det utarbeidet en
Innvendige arealer

---

[d174_d174 | Side [1]]
 to eller flere bruksenheter per plan blir det målet til innside av vegg mellom bruksenhetene.
Arealer på terrasser, balkonger og verandaer er målt på innsiden av rekkverk/brystning, eller som fotavtrykket der det ikke finnes noen
ytre begrensinger, som rekkverk o.l.
Ved taksering av leiligheter, rekkehus o.l i borettslag eller sameier blir ikke arealet for parkeringsplass/biloppstillingsplass i
fellesgarasje og carport oppmålt, men kun retten til bruk blir beskrevet.
MERKNADER OM ANDRE BYGNINGSDELER:
Bod

---

[d174_d174 | Side [1]]
jengelig for oppmåling.
boder. Arealet avrundes og oppgis i hele kvadratmeter (m2), og
BRA‑b ‑ Innglasset balkong, altan, terrasser. gjelder for tidspunktet da boligen ble målt.
Leiligheten har skråvegger og veggdeling/ hjørner som
Andre arealer: vanskeligjør arealmålingen, mindre avvik kan derfor
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. forekomme.
ALH ‑ Areal med lav himlingshøyde måles på samme Ved måling av bruksareal med to eller flere bruksenheter
måte som BRA, men man ser bort fra krav

---

[d174_d174 | Side [1]]
illelse, vil kunne avvike fra arealopplysninger
som er basert på byggetegninger.
Bruksareal BRA: Dersom det ikke er framlagt byggetegninger for boligen,
BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. vil bygningssakkyndig ikke kunne måle opp arealer av
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor hulrom i sjakter o.l. som er skjult, og som dermed ikke er
boenheten og som tilhører denne, for eksempel eksterne tilgjengelig for oppmåling.
boder. Arealet avrundes og oppgis i hele

---

[d174_d174 | Side [1]]
Org.nr: 933 649 768
Bestemmelse om bebyggelse Offentlig
Rett for kommunen til å anlegge og vedlikeholde
ledninger m.m.
Utleie
Kan ikke slettes uten samtykke fra kommunen
Gjelder denne registerenheten med flere Adgang til utleie: Boligen kan leies ut i samsvar med
gjeldende lovverk, og vedtektene setter ingen
22.01.2002 ‑ Dokumentnr: 762 ‑ Seksjonering begrensninger på eierens utleieadgang. Korttidsutleie er
Opprettet seksjoner: tillatt i inntil 90 døgn per år, jf. eierseksjonsloven § 24.
Snr: 11 Denne

---

[d174_d174 | Side [1]]
eller flere bruksenheter
måte som BRA, men man ser bort fra krav til per plan blir det målet til innside av vegg mellom
himlingshøyde. Arealet inngår ikke i BRA, men opplyses bruksenhetene.
om sammen med BRA som et tillegg. Arealer på terrasser, balkonger og verandaer er målt på
GUA – summen av BRA og AHL. Brukes når boligen har innsiden av rekkverk/ brystning, eller som fotavtrykket
gulvareal som ikke er måleverdig på grunn av for der det ikke finnes noen ytre begrensinger, som rekkverk
eksempel skråtak

---

[d174_d174 | Side [1]]
erseksjonsloven. Dette kan innebære at
arealer som er måleverdig etter NS 3940, ikke nødvendigvis følger boenheten rettslig.
Viktig merknad om måleregler:
Eventuelle arealavvik mellom ulike rapporter kan skyldes endringer i måleregler eller ulik standardpraktisering over tid, og er ikke nødvendigvis
uttrykk for målefeil.
AREAL BOLIG:
Etasje: BRA-i BRA-e BRA-b TBA
1.etasje 76 21
Underetasje 6
SUM BYGNING 76 6 0 21
SUM BRA 82
AREAL GARASJE/UTHUS:
Etasje: BRA-i BRA-e BRA-b TBA
SUM BYGNING
SUM

---

[d174_d174 | Side [1]]
aljert beskrivelse om
endringen på nettsiden til Standard Norge. https://standard.no/nyheter/ny-utgave-av-standarden-for-areal- og
volumberegningeravbygg/. Fra og med 01.01.2026 vill ikke P-rom og S-rom bli ført opp ikke opp i tabellen over.
BRA-i: 76 m2.
1.etasje: Entré, gang, soverom 1, bad, bod, stue med åpen kjøkkenløsning og soverom 2.
BRA-e: 6 m2.
Underetasje: Bod i felles kjeller.
BRA-b: 0m2.
Sum BRA: 82 m2.
1.etasje: Entré, gang, soverom 1, bad, bod, stue med åpen kjøkkenløsning og soverom

---

[d174_d174 | Side [1]]
nne
måles. Rom kan være måleverdig etter NS 3940 selv om de ikke tilfredsstiller gjeldende byggeforskrifter eller krav til godkjent bruk.
Måleverdig areal etter NS 3940 er ikke det samme som godkjent oppholdsareal etter plan- og bygningslovgivningen.
AREALBEGREPER:
BRA-i: Internt bruksareal
BRA-e: Eksternt bruksareal
BRA-b: Innglasset balkong
TBA: Terrasse- og balkongareal
Arealer utenfor boenheten (BRA-e):
Arealer som ligger utenfor selve boenheten er kun inkludert som BRA-e basert på opplysninger fra

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ulovlig romendring uten godkjente byggetegninger: Opprinnelige byggetegninger viser kun 1 soverom, men tidligere eiere har delt av kjøkkenet for å lage et ekstra soverom. Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligens faktiske tilstand.",
      "evidence": [
        "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen i dag.",
        "Opprinnelige byggetegningen er tegnet inn kun med 1 stk soverom, men tidligere eiere har i ettertid delt av kjøkkenet med 1 ekstra soverom.",
        "Det er ukjent om det ligger oppdaterte byggetegninger hos kommunen som viser til denne romdelingen.",
        "Kjøper bør derfor undersøke nærmere med kommunen om den faktiske romløsningen er formelt godkjent, og være oppmerksom på at endringer av denne typen kan utløse krav om bruksendring og godkjenning.",
        "Et rom som på opprinnelige byggetegninger er angitt som spisestue benyttes i dag som soverom. Det foreligger således et avvik mellom byggetegninger og dagens bruk. Endret bruk mellom oppholdsrom anses normalt ikke som søknadspliktig bruksendring, men kjøper gjøres oppmerksom på forholdet."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R2",
      "description": "Rekkverk tilfredsstiller ikke gjeldende forskriftskrav: Utvendig rekkverkshøyde er ikke tilstrekkelig i henhold til krav på oppføringstidspunktet (minimum 1 meter), noe som utgjør en sikkerhetsrisiko.",
      "evidence": [
        "Utvendig rekkverkshøyde er ikke tilstrekkelig, da kravet på oppføringstidspunktet var minimum 1 meter.",
        "Dette innebærer at dagens rekkverk ikke tilfredsstiller gjeldende forskriftskrav, og det anbefales å øke høyden for å ivareta sikkerheten."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Sameiets negative årsresultat og risiko for økte felleskostnader: Sameiet hadde et negativt årsresultat på kr. 1 037 291 i 2024, og det er innkalt til årsmøte for å avklare om felleskostnader skal økes. Det kan bli nødvendig med ekstra innbetalinger for å unngå låneopptak.",
      "evidence": [
        "Av årsregnskapet 2024 fremgår det at sameiet hadde et negativt årsresultat på kr. 1 037 291 som ble overført til annen egenkapital.",
        "Sum egenkapital pr. 31.12.2024 var kr. 4 12 101.",
        "Det er innkalt til årsmøte 17.03.2026 hvor det vil bli avklart om felleskostnader skal økes.",
        "Sameiet følger en vedlikeholdsplan og for å følge denne blir det nødvendig med innbetalinger utover månedlige fellekostnader for å unngå låneopptak."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Kvikkleirefare: Boligen ligger i et område under marin grense, og der det finnes marin leire kan det også forekomme kvikkleire. Det er ikke foretatt geologiske undersøkelser.",
      "evidence": [
        "Temakart fra NGU viser at boligen ligger i ett område under marin grense.",
        "Der det finnes marin leire, kan det også være kvikkleire.",
        "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.",
        "På bakgrunn av observasjoner gjort på befaringsdagen, vurderes grunnforholdene å være stabile."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R5",
      "description": "Manglende vurdering av utvendige bygningsdeler grunnet snø: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snødekke. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan dermed være uoppdaget.",
      "evidence": [
        "Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.",
        "Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
        "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R6",
      "description": "Manglende funksjonstesting av elektrisk anlegg og installasjoner: Elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser og persienner er ikke funksjonstestet. Selger opplyser heller ikke om utført kontroll av el-anlegget.",
      "evidence": [
        "Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.",
        "Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Svar: Nei",
        "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Svar: Nei"
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R7",
      "description": "Vinduer og balkongdør har passert forventet levetid: Vinduer og balkongdør er vurdert til TG1, men har passert sin forventede levetid, noe som innebærer økt risiko for fremtidige feil og behov for utskifting.",
      "evidence": [
        "Vinduer, balkong- og terrassedør har passert sin forventede levetid.",
        "Det ble foretatt en enkel funksjonstest av tilfeldige valgte vinduer, balkongdør i boligen, ingen funksjonsavvik.",
        "Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller utskifting."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Utilstrekkelig ventilasjon på bad: Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad, noe som kan medføre fuktproblemer og dårlig inneklima.",
      "evidence": [
        "Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R9",
      "description": "Risiko for skjulte skader i trapper, garderobeskap og etasjeskille: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og vedlikeholdsbehov.",
      "evidence": [
        "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.",
        "Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.",
        "Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R10",
      "description": "Usikkerhet rundt rettslig tilhørighet for eksterne arealer (BRA-e): Bod i felles kjeller er inkludert som BRA-e basert på opplysninger fra eier, men det er ikke kontrollert om arealet rettslig tilhører boenheten. Slike arealer kan omdisponeres av sameiet.",
      "evidence": [
        "Arealer utenfor boenheten er kun inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er ikke kontrollert om disse arealene rettslig tilhører boenheten eller om de er del av fellesareal.",
        "Slike arealer kan omdisponeres av borettslag/sameie, noe som kan påvirke boligens tilgjengelige bruksareal.",
        "Arealer som er måleverdig etter NS 3940, ikke nødvendigvis følger boenheten rettslig."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R11",
      "description": "Legalpant og prioritetsrisiko: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Manglende radonmåling: Selger bekrefter at det ikke er foretatt radonmåling av boligen, noe som innebærer usikkerhet rundt radonkonsentrasjonen i inneluften.",
      "evidence": [
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R13",
      "description": "Mulig punktert glass i vinduer: Det er registrert punktert glass i vinduer, og det utelukkes ikke at det kan forekomme ytterligere punkterte glass som ikke ble oppdaget under befaringen.",
      "evidence": [
        "Punktert glass er bare synlig under spesielle omstendigheter og det utelukkes ikke at det kan forkomme punktert glass som ikke ble registrert på befaringsdagen."
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R14",
      "description": "Manglende oppdatert energimerking: Boligen har ikke angitt energikarakter eller energifarge, noe som gir kjøper begrenset informasjon om boligens energieffektivitet og fremtidige energikostnader.",
      "evidence": [
        "Energikarakter: Ikke angitt",
        "Energifarge: Ikke angitt"
      ],
      "source_documents": [
        "d174_d174"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "tilstandsgrad TG2 TG3 bad fukt skader",
    "balkong terrasse tilstand nedbøyning skader",
    "ferdigattest byggetillatelse godkjenning soverom bruksendring",
    "el-anlegg alder samsvarserklæring dokumentasjon",
    "årsregnskap sameiet budsjett vedlikeholdsplan fellesgjeld",
    "radon tiltak anbefaling leilighet i 1. etasje"
  ],
  "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ulovlig romendring (confidence justert ned til 0.90):**\nEvidensen er solid og direkte sitert fra tilstandsrapporten. Imidlertid nyanseres risikoen noe av salgsoppgaven som presiserer at \"endret bruk mellom oppholdsrom anses normalt ikke som søknadspliktig bruksendring\" – dette er en viktig modererende faktor som reduserer alvorlighetsgraden noe. Risikoen er reell, men ikke nødvendigvis en ulovlighet. Confidence justeres marginalt ned fra 0.95 til 0.90.\n\n**R2 – Rekkverk (confidence beholdes 0.95):**\nDirekte sitert fra tilstandsrapporten. Klar TG3-indikasjon (avvik fra lover/forskrifter). Evidensen er entydig og sterk.\n\n**R3 – Sameiets økonomi (confidence beholdes 0.93):**\nAlle tre evidenspunkter er direkte bekreftet i dokumentene. Negativt årsresultat, innkalt årsmøte og vedlikeholdsplan som krever ekstra innbetalinger er alle dokumentert.\n\n**R4 – Kvikkleire (confidence justert ned til 0.75):**\nEvidensen bekrefter NGU-kartdata og potensiell kvikkleire, men rapporten modererer med at \"grunnforholdene vurderes å være stabile\" basert på befaringsobservasjoner. Dette er en leilighet i 1. etasje i en blokk fra 2002 med støpt fundament – risikoen er reell men noe moderert. Confidence justeres ned fra 0.80 til 0.75.\n\n**R5 – Snødekke (confidence justert ned til 0.85):**\nEvidensen er klar, men det presiseres i dokumentet at utvendige konstruksjoner er sameiets ansvar og ikke primært vurdert uansett. Dette modererer risikoen noe for kjøper av leiligheten spesifikt. Confidence justeres fra 0.88 til 0.85.\n\n**R6 – El-anlegg (confidence justert opp til 0.88):**\nEvidensen styrkes av at selger også bekrefter at det ikke er utført arbeid på el-anlegget (spørsmål 11: Nei) og ikke utført kontroll (spørsmål 12: Nei). Dobbel bekreftelse fra egenerklæring. Confidence justeres opp fra 0.85 til 0.88.\n\n**R7 – Vinduer/balkongdør (confidence beholdes 0.85):**\nEvidensen er klar og direkte sitert. TG1 men passert levetid er dokumentert.\n\n**R8 – Ventilasjon bad (confidence beholdes 0.82):**\nEvidensen er enkel men direkte. Kun ett evidenspunkt, men det er eksplisitt nevnt i rapporten.\n\n**R9 – Skjulte skader (confidence justert ned til 0.72):**\nRapporten presiserer at dette ikke er et krav etter avhendingsloven å vurdere. Risikoen er reell men noe generisk. Confidence justeres ned fra 0.78 til 0.72.\n\n**R10 – BRA-e rettslig tilhørighet (confidence justert opp til 0.78):**\nEvidensen styrkes av at rapporten eksplisitt nevner at arealer etter NS 3940 ikke nødvendigvis følger boenheten rettslig. Confidence justeres opp fra 0.75 til 0.78.\n\n**R11 – Legalpant (confidence justert opp til 0.85):**\nEvidensen er sterk med direkte sitat fra salgsoppgaven, inkludert prioritetsrekkefølge. Confidence justeres opp fra 0.80 til 0.85.\n\n**R12 – Radon (confidence beholdes 0.78):**\nEnkel men direkte evidens fra egenerklæring. Leiligheten ligger i 1. etasje noe som øker radonrisikoen, men dette er ikke eksplisitt nevnt i dokumentene.\n\n**R13 – Punktert glass (confidence beholdes 0.72):**\nEvidensen er noe svak – det er kun nevnt at det ikke kan utelukkes, ikke at det faktisk er registrert punktert glass. Confidence beholdes på 0.72.\n\n**R14 – Energimerking (confidence beholdes 0.70):**\nEvidensen er klar men risikoen er av lavere alvorlighetsgrad. Manglende energimerking er en formell mangel.\n\n**Manglende risikoer identifisert:**\n1. Balkong/terrasse med nedbøyning av terrassebord er nevnt i dokumentet (\"nedbøyning av terrassebordene, og det kan oppstå ujevnheter\") – dette er ikke fanget opp som egen risiko.\n2. Alderslitasje på bad og bod er nevnt i den overordnede vurderingen men ikke som separat risiko.\n3. Ingen vurdering av om ferdigattest fra 2006 dekker alle endringer som er gjort.\n\nForeslår re-retrieval for å undersøke balkong/terrasse-tilstand nærmere, samt bad-tilstand og ferdigattest-dekning.\n"
}

## Raw Response
```json
{
  "id": "msg_01Ffo8RpgCRPb9VXnC7tZ34H",
  "container": null,
  "content": [
    {
      "id": "toolu_01V7QfQaHq3bJazPHEewv9Qo",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ulovlig romendring uten godkjente byggetegninger: Opprinnelige byggetegninger viser kun 1 soverom, men tidligere eiere har delt av kjøkkenet for å lage et ekstra soverom. Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligens faktiske tilstand.",
            "evidence": [
              "Det foreligger ikke oppdaterte godkjente byggetegninger som samsvarer med boligen i dag.",
              "Opprinnelige byggetegningen er tegnet inn kun med 1 stk soverom, men tidligere eiere har i ettertid delt av kjøkkenet med 1 ekstra soverom.",
              "Det er ukjent om det ligger oppdaterte byggetegninger hos kommunen som viser til denne romdelingen.",
              "Kjøper bør derfor undersøke nærmere med kommunen om den faktiske romløsningen er formelt godkjent, og være oppmerksom på at endringer av denne typen kan utløse krav om bruksendring og godkjenning.",
              "Et rom som på opprinnelige byggetegninger er angitt som spisestue benyttes i dag som soverom. Det foreligger således et avvik mellom byggetegninger og dagens bruk. Endret bruk mellom oppholdsrom anses normalt ikke som søknadspliktig bruksendring, men kjøper gjøres oppmerksom på forholdet."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R2",
            "description": "Rekkverk tilfredsstiller ikke gjeldende forskriftskrav: Utvendig rekkverkshøyde er ikke tilstrekkelig i henhold til krav på oppføringstidspunktet (minimum 1 meter), noe som utgjør en sikkerhetsrisiko.",
            "evidence": [
              "Utvendig rekkverkshøyde er ikke tilstrekkelig, da kravet på oppføringstidspunktet var minimum 1 meter.",
              "Dette innebærer at dagens rekkverk ikke tilfredsstiller gjeldende forskriftskrav, og det anbefales å øke høyden for å ivareta sikkerheten."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Sameiets negative årsresultat og risiko for økte felleskostnader: Sameiet hadde et negativt årsresultat på kr. 1 037 291 i 2024, og det er innkalt til årsmøte for å avklare om felleskostnader skal økes. Det kan bli nødvendig med ekstra innbetalinger for å unngå låneopptak.",
            "evidence": [
              "Av årsregnskapet 2024 fremgår det at sameiet hadde et negativt årsresultat på kr. 1 037 291 som ble overført til annen egenkapital.",
              "Sum egenkapital pr. 31.12.2024 var kr. 4 12 101.",
              "Det er innkalt til årsmøte 17.03.2026 hvor det vil bli avklart om felleskostnader skal økes.",
              "Sameiet følger en vedlikeholdsplan og for å følge denne blir det nødvendig med innbetalinger utover månedlige fellekostnader for å unngå låneopptak."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Kvikkleirefare: Boligen ligger i et område under marin grense, og der det finnes marin leire kan det også forekomme kvikkleire. Det er ikke foretatt geologiske undersøkelser.",
            "evidence": [
              "Temakart fra NGU viser at boligen ligger i ett område under marin grense.",
              "Der det finnes marin leire, kan det også være kvikkleire.",
              "Det ble ikke foretatt geologiske undersøkelser i forbindelse med utarbeidelse av denne rapporten.",
              "På bakgrunn av observasjoner gjort på befaringsdagen, vurderes grunnforholdene å være stabile."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R5",
            "description": "Manglende vurdering av utvendige bygningsdeler grunnet snø: Utvendig terreng, yttertak, takrenner og nedløp ble ikke vurdert eller satt tilstandsgrad på under befaringen på grunn av snødekke. Eventuelle skader eller vedlikeholdsbehov på disse områdene kan dermed være uoppdaget.",
            "evidence": [
              "Grunnet snø på befaringstidspunktet ble ikke utvendig terreng, yttertak, takrenner og nedløp vurdert eller satt tilstandsgrad på.",
              "Dette kan innebære at eventuelle skader eller vedlikeholdsbehov på disse områdene ikke har blitt oppdaget under befaringen.",
              "For å få en fullverdig vurdering av eiendommens tilstand på disse punktene anbefales det derfor en ny inspeksjon når snøforholdene tillater det."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R6",
            "description": "Manglende funksjonstesting av elektrisk anlegg og installasjoner: Elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser og persienner er ikke funksjonstestet. Selger opplyser heller ikke om utført kontroll av el-anlegget.",
            "evidence": [
              "Funksjonstesting av elektrisk anlegg, varmekabler, panelovner, hvitevarer, markiser, persienner o.l er ikke foretatt.",
              "Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner? Svar: Nei",
              "Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner? Svar: Nei"
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R7",
            "description": "Vinduer og balkongdør har passert forventet levetid: Vinduer og balkongdør er vurdert til TG1, men har passert sin forventede levetid, noe som innebærer økt risiko for fremtidige feil og behov for utskifting.",
            "evidence": [
              "Vinduer, balkong- og terrassedør har passert sin forventede levetid.",
              "Det ble foretatt en enkel funksjonstest av tilfeldige valgte vinduer, balkongdør i boligen, ingen funksjonsavvik.",
              "Anbefalt tiltak: Det anbefales å vurdere vedlikehold eller utskifting."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Utilstrekkelig ventilasjon på bad: Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad, noe som kan medføre fuktproblemer og dårlig inneklima.",
            "evidence": [
              "Det er ikke tilstrekkelig lufting mellom dørterskel og dør inn til bad."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R9",
            "description": "Risiko for skjulte skader i trapper, garderobeskap og etasjeskille: Disse bygningsdelene er ikke vurdert eller satt tilstandsgrad på, noe som gir økt risiko for skjulte skader, skeivheter og vedlikeholdsbehov.",
            "evidence": [
              "Trapper, garderobeskap, hyllesystemer og etasjeskille er ikke vurdert eller satt tilstandsgrad på.",
              "Risiko: Dette gir økt risiko for skjulte skade, skeivheter og andre relevante vedlikeholdsbehov.",
              "Konsekvens: Forholdet kan medføre behov for utbedring og vedlikeholdsbehov."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R10",
            "description": "Usikkerhet rundt rettslig tilhørighet for eksterne arealer (BRA-e): Bod i felles kjeller er inkludert som BRA-e basert på opplysninger fra eier, men det er ikke kontrollert om arealet rettslig tilhører boenheten. Slike arealer kan omdisponeres av sameiet.",
            "evidence": [
              "Arealer utenfor boenheten er kun inkludert som BRA-e basert på opplysninger fra eier om faktisk bruk. Det er ikke kontrollert om disse arealene rettslig tilhører boenheten eller om de er del av fellesareal.",
              "Slike arealer kan omdisponeres av borettslag/sameie, noe som kan påvirke boligens tilgjengelige bruksareal.",
              "Arealer som er måleverdig etter NS 3940, ikke nødvendigvis følger boenheten rettslig."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R11",
            "description": "Legalpant og prioritetsrisiko: Kommunen har legalpant for kommunale avgifter og eiendomsskatt, og de øvrige seksjonseierne i sameiet har legalpant på inntil 2G for krav knyttet til sameieforholdet. Legalpant vises ikke i grunnboksutskriften og har prioritet foran tinglyste lån.",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Manglende radonmåling: Selger bekrefter at det ikke er foretatt radonmåling av boligen, noe som innebærer usikkerhet rundt radonkonsentrasjonen i inneluften.",
            "evidence": [
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R13",
            "description": "Mulig punktert glass i vinduer: Det er registrert punktert glass i vinduer, og det utelukkes ikke at det kan forekomme ytterligere punkterte glass som ikke ble oppdaget under befaringen.",
            "evidence": [
              "Punktert glass er bare synlig under spesielle omstendigheter og det utelukkes ikke at det kan forkomme punktert glass som ikke ble registrert på befaringsdagen."
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R14",
            "description": "Manglende oppdatert energimerking: Boligen har ikke angitt energikarakter eller energifarge, noe som gir kjøper begrenset informasjon om boligens energieffektivitet og fremtidige energikostnader.",
            "evidence": [
              "Energikarakter: Ikke angitt",
              "Energifarge: Ikke angitt"
            ],
            "source_documents": [
              "d174_d174"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "tilstandsgrad TG2 TG3 bad fukt skader",
          "balkong terrasse tilstand nedbøyning skader",
          "ferdigattest byggetillatelse godkjenning soverom bruksendring",
          "el-anlegg alder samsvarserklæring dokumentasjon",
          "årsregnskap sameiet budsjett vedlikeholdsplan fellesgjeld",
          "radon tiltak anbefaling leilighet i 1. etasje"
        ],
        "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Ulovlig romendring (confidence justert ned til 0.90):**\nEvidensen er solid og direkte sitert fra tilstandsrapporten. Imidlertid nyanseres risikoen noe av salgsoppgaven som presiserer at \"endret bruk mellom oppholdsrom anses normalt ikke som søknadspliktig bruksendring\" – dette er en viktig modererende faktor som reduserer alvorlighetsgraden noe. Risikoen er reell, men ikke nødvendigvis en ulovlighet. Confidence justeres marginalt ned fra 0.95 til 0.90.\n\n**R2 – Rekkverk (confidence beholdes 0.95):**\nDirekte sitert fra tilstandsrapporten. Klar TG3-indikasjon (avvik fra lover/forskrifter). Evidensen er entydig og sterk.\n\n**R3 – Sameiets økonomi (confidence beholdes 0.93):**\nAlle tre evidenspunkter er direkte bekreftet i dokumentene. Negativt årsresultat, innkalt årsmøte og vedlikeholdsplan som krever ekstra innbetalinger er alle dokumentert.\n\n**R4 – Kvikkleire (confidence justert ned til 0.75):**\nEvidensen bekrefter NGU-kartdata og potensiell kvikkleire, men rapporten modererer med at \"grunnforholdene vurderes å være stabile\" basert på befaringsobservasjoner. Dette er en leilighet i 1. etasje i en blokk fra 2002 med støpt fundament – risikoen er reell men noe moderert. Confidence justeres ned fra 0.80 til 0.75.\n\n**R5 – Snødekke (confidence justert ned til 0.85):**\nEvidensen er klar, men det presiseres i dokumentet at utvendige konstruksjoner er sameiets ansvar og ikke primært vurdert uansett. Dette modererer risikoen noe for kjøper av leiligheten spesifikt. Confidence justeres fra 0.88 til 0.85.\n\n**R6 – El-anlegg (confidence justert opp til 0.88):**\nEvidensen styrkes av at selger også bekrefter at det ikke er utført arbeid på el-anlegget (spørsmål 11: Nei) og ikke utført kontroll (spørsmål 12: Nei). Dobbel bekreftelse fra egenerklæring. Confidence justeres opp fra 0.85 til 0.88.\n\n**R7 – Vinduer/balkongdør (confidence beholdes 0.85):**\nEvidensen er klar og direkte sitert. TG1 men passert levetid er dokumentert.\n\n**R8 – Ventilasjon bad (confidence beholdes 0.82):**\nEvidensen er enkel men direkte. Kun ett evidenspunkt, men det er eksplisitt nevnt i rapporten.\n\n**R9 – Skjulte skader (confidence justert ned til 0.72):**\nRapporten presiserer at dette ikke er et krav etter avhendingsloven å vurdere. Risikoen er reell men noe generisk. Confidence justeres ned fra 0.78 til 0.72.\n\n**R10 – BRA-e rettslig tilhørighet (confidence justert opp til 0.78):**\nEvidensen styrkes av at rapporten eksplisitt nevner at arealer etter NS 3940 ikke nødvendigvis følger boenheten rettslig. Confidence justeres opp fra 0.75 til 0.78.\n\n**R11 – Legalpant (confidence justert opp til 0.85):**\nEvidensen er sterk med direkte sitat fra salgsoppgaven, inkludert prioritetsrekkefølge. Confidence justeres opp fra 0.80 til 0.85.\n\n**R12 – Radon (confidence beholdes 0.78):**\nEnkel men direkte evidens fra egenerklæring. Leiligheten ligger i 1. etasje noe som øker radonrisikoen, men dette er ikke eksplisitt nevnt i dokumentene.\n\n**R13 – Punktert glass (confidence beholdes 0.72):**\nEvidensen er noe svak – det er kun nevnt at det ikke kan utelukkes, ikke at det faktisk er registrert punktert glass. Confidence beholdes på 0.72.\n\n**R14 – Energimerking (confidence beholdes 0.70):**\nEvidensen er klar men risikoen er av lavere alvorlighetsgrad. Manglende energimerking er en formell mangel.\n\n**Manglende risikoer identifisert:**\n1. Balkong/terrasse med nedbøyning av terrassebord er nevnt i dokumentet (\"nedbøyning av terrassebordene, og det kan oppstå ujevnheter\") – dette er ikke fanget opp som egen risiko.\n2. Alderslitasje på bad og bod er nevnt i den overordnede vurderingen men ikke som separat risiko.\n3. Ingen vurdering av om ferdigattest fra 2006 dekker alle endringer som er gjort.\n\nForeslår re-retrieval for å undersøke balkong/terrasse-tilstand nærmere, samt bad-tilstand og ferdigattest-dekning.\n"
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
    "input_tokens": 18187,
    "output_tokens": 5094,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
