# Trace: agentic_reflecting_iter1
- **Run ID:** 718e8234-dbee-4360-9114-973a1dbc98b4
- **Tidspunkt:** 2026-03-26T08:14:10.436522+00:00
- **Varighet:** 89.64s
- **Input tokens:** 19492
- **Output tokens:** 4857

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
Risiko 1: Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av tilstandsrapporten at samsvarserklæring for det elektriske anlegget ikke er fremlagt. Dette kan indikere at elektriske arbeider er utført uten dokumentasjon på faglig forsvarlig utførelse, noe som kan medføre sikkerhetsrisiko og fremtidige kostnader.
  Confidence: 0.95
  Evidens: Det fremgår av tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget.; Er det gjennomført arbeider på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)? Svar Nei

Risiko 2: Negativt årsresultat i sameiet. Persaunet Ekstra 4 Boligsameie hadde i 2023 et negativt årsresultat på kr 357 768, der driftskostnadene (kr 1 629 728) oversteg driftsinntektene (kr 1 222 428) betydelig. Dette kan indikere risiko for fremtidige felleskostnadsøkninger.
  Confidence: 0.92
  Evidens: Sameiet hadde i 2023 samlede driftsinntekter på kr 1 222 428 og samlede driftskostnader på kr 1 629 728. Dette ga et negativt årsresultat på kr 357 768.; Årets største kostnad var drift og vedlikehold. Dette gjelder blant annet drift og vedlikehold av bygninger, heisanlegg, ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro og VVS.

Risiko 3: Økning i felleskostnader. Styret vedtok en økning i felleskostnader på 15 % fra januar 2024, og budsjettet for 2024 viser en betydelig økning i innkrevde felleskostnader fra kr 1 222 000 til kr 1 382 000. Dette representerer en direkte økt løpende kostnad for kjøper.
  Confidence: 0.9
  Evidens: Budsjettet er basert på 15 % økning av brøkfordelte felleskostnader og kr. 69,- i økning i kabel-TV og internett fra 01.01.2024.; Styret har behandlet budsjett for 2024 og det ble da vedtatt en økning i felleskostnadene fra og med januar måned. Dette med bakgrunn i den generelle prisøkningen som oppleves på de varer og tjenester vi etterspør.; Innkrevde felleskostnader: Budsjett 2023: 1 222 000, Budsjett 2024: 1 382 000

Risiko 4: Uløst vannlekkasje i parkeringsareal. Det er en tidvis vannlekkasje i sameiets parkeringsareal som ikke er reparert på tidspunktet for årsrapporten. Dette kan medføre fremtidige kostnader for sameiet og potensielt påvirke felleskostnadene.
  Confidence: 0.88
  Evidens: Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert. Det jobbes med å avdekke [årsaken].

Risiko 5: Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 6: Terrassen er ikke en del av seksjoneringen. Terrassen tilhører sameiets fellesareal, og seksjonen har kun midlertidig enerett til bruk. Dette innebærer at kjøper ikke har full juridisk råderett over terrassen, og at sameiet i prinsippet kan endre bruksretten.
  Confidence: 0.87
  Evidens: Det gjøres oppmerksom på at terrassen ikke er en del av selve seksjoneringen for leiligheten. Seksjonen har midlertidig enerett til bruk av bestemte deler av sameiets fellesareal.; Seksjoner i 1. etasje i Kyavegen 1, 3 og 5 har bruksrett til en utvidet platting/ terrasse.

Risiko 7: Boden ligger på sameiets fellesareal. Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal og disponeres kun av seksjonen. Kjøper har dermed ikke eksklusiv eiendomsrett til boden, noe som kan innebære usikkerhet rundt fremtidig bruk.
  Confidence: 0.85
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen.

Risiko 8: Pliktig medlemskap i bildeleordning. Sameiet og alle dets beboere er pliktig medlem i en kollektiv bildeleordning i henhold til pålegg fra Trondheim kommune. Dette innebærer en forpliktelse for kjøper som kan oppleves som en begrensning.
  Confidence: 0.8
  Evidens: Sameiet og alle dets beboere er pliktig medlem i kollektiv bildeleordning iht. pålegg fra Trondheim kommune og avtale med Trondheim Bilkollektiv av 20.10.2006, og stiller i denne forbindelse inntil to stk. biloppstillingsplasser vederlagsfritt til disposisjon for bilkollektivets bil(er).

Risiko 9: Ukjent status på avløpsrør og kloakkluftning. Det er ukjent om det er gjennomført arbeider på avløpsanlegget etter byggeår, og det er ukjent om det mangler lufting av kloakk over tak. Dette kan innebære skjulte feil eller fremtidige utbedringsbehov.
  Confidence: 0.75
  Evidens: Er det gjennomført arbeider på anlegget etter byggeår? Ukjent; Er det manglende lufting av kloakk over tak? Ukjent

Risiko 10: Selger har kun eid boligen i kort tid (ca. 1 år og 7 måneder). Selger kjøpte boligen i 2024 og har eid den i under 2 år. Dette kan bety begrenset kjennskap til boligens tilstand og historikk, noe som øker risikoen for at skjulte feil ikke er avdekket eller opplyst om.
  Confidence: 0.78
  Evidens: Når kjøpte du boligen? År 2024; Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7

Risiko 11: Eiendommen er avsatt til sentrumsformål i kommuneplanens arealdel 2022–2034. Selv om eiendommen i dag er regulert til boliger, er den i kommuneplanen avsatt til sentrumsformål. Dette kan på sikt medføre endringer i omgivelsene eller press på eiendommen ved fremtidige reguleringsendringer.
  Confidence: 0.7
  Evidens: I planen er eiendommen avsatt til sentrumsformål ‑ nåværende og byggesone 2.; Eiendommen omfattes av Kommuneplanens arealdel 2022‑2034, vedtatt 27.03.2025.

Risiko 12: Høy eiendomsskatt. Eiendomsskatten ble beregnet til kr 4 383 i 2023. Dette er en løpende kostnad for kjøper som kan øke i fremtiden, og bør hensyntas i den totale kostnadsberegningen.
  Confidence: 0.72
  Evidens: Eiendomsskatten ble beregnet til kr. 4 383,‑ i 2023.

Risiko 13: Bygningsdeler underlagt sameiet er ikke tilstandsvurdert. Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Dette innebærer at kjøper ikke har full informasjon om tilstanden på fellesarealer og felles bygningsdeler.
  Confidence: 0.82
  Evidens: Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet [fellesarealer og felles installasjoner].

Dokumentkontekst:
[d198_d198 | Side [1]]
ntar. Dette gjelder også om tilbehøret er
integrert.
Struktur og referansenivå
Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen

---

[d198_d198 | Side [1]]
Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften er endret ved forskrift av 16. desember 2025 nr. 2614. Tilstandsgrader i
rapporten er fastsatt i tråd med kriteriene i NS 3600:2018
Formålet med rapporten er å kartlegge boligens tekniske tilstand med tanke på behov for tiltak, samt å
vise resultatene av en utført tilstandsanalyse for å bidra til økt trygghet og redusert konfliktnivå ved
eierskifte.
Rapporten erstatter ikke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved

---

[d198_d198 | Side [1]]
også brukes når delen er ny, men der dokumentasjon på faglig god utførelse
mangler.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen
spesielt på grunn

---

[d198_d198 | Side [1]]
n, eller når det er grunn til å overvåke delen
spesielt på grunn av fare for større skader eller følgeskader
Tilstandsgrad 3: Store eller alvorlige avvik
Bygningsdelen har kraftige symptomer på forhold som man må regne med trenger
TG-3
utbedring straks eller innen kort tid. Graden skal også brukes ved påvist funksjonssvikt
eller sammenbrudd
Tilstandsgrad ikke undersøkt (TGIU) skal kun brukes unntaksvis. Eksempler kan være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på

---

[d198_d198 | Side [1]]
ke selgers opplysningsplikt eller kjøpers undersøkelsesplikt ved eierskifte.
Tilstandsrapporten gir en beskrivelse og vurdering av byggverk og bygningsdeler som bygningssakkyndig
har observert, og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Struktur og

---

[d198_d198 | Side [1]]
være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU
eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
dette angis særlig.
Kyavegen 5, 7045 Trondheim 2 av 13
56

## Side 57

2. Om rapporten
Om rapporten Tilstandsrapporten er utarbeidet i henhold til forskrift til avhendingslova (Tryggere bolighandel) av 8. juni
2021 nr. 1850, slik forskriften

---

[d198_d198 | Side [1]]
er en del grundig gjennomgår disse dokumentene før bud legges
av overdragelsen. inn.
All informasjon i tilstandsrapporten anses som kjent for
Eiendommens
kjøper, og det vil ikke være mulig å reklamere på forhold
som er nevnt i rapporten. Spesielt forhold som er vurdert
tilstand
med TG2 og TG3 bør vurderes nøye, da de indikerer
Takstmann: Just Roar Dragsten avvik fra normal slitasje og/ eller høy alder, noe som kan
Type takst avholdt av takstmann: Tilstandsrapport innebære behov for utbedringer.

---

[d198_d198 | Side [1]]
alt ingen begrunnelse for valg av tilstandsgrad, fordi bygningen eller
bygningsdelen da bare har normal slitasje.
Hvis et rom eller en bygningsdel gis tilstandsgrad 2 eller 3 skal den bygningssakkyndige redegjøre for
årsaken til og konsekvensen av dette. Den bygningssakkyndige skal også gi et sjablongmessig anslag på
hva det vil koste å utbedre rom eller bygningsdeler som gis tilstandsgrad 3.
Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til

---

[d198_d198 | Side [1]]
t-Forum Trøndelag A/S 40004459 7045 Trondheim
55

## Side 56

1. Tilstandsgradene
Tilstandsgrad 0: Ingen avvik
Bygningsdelen skal være tilnærmet ny, ikke vise tegn på slitasje og det skal være lagt
TG-0
frem dokumentasjon på faglig god utførelse. Det er ingen merknader til delen.
Tilstandsgrad 1: Mindre eller moderate avvik
Bygningsdelen skal bare ha normal slitasje, og strakstiltak skal ikke anses som nødvendig.
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god

---

[d198_d198 | Side [1]]
d salget er det blitt utført en
er, uten garanti, med mindre det foreligger en gjeldende tilstandsrapport av en bygningssakkyndig, som gir en
garanti fra produsent eller leverandør. teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring,
Kjøper aksepterer at det kan forekomme hull og merker er vedlagt salgsoppgaven. Det er viktig at interessenter
etter montering av inventar og utstyr som ikke er en del grundig gjennomgår disse dokumentene før bud legges
av

---

[d198_d198 | Side [1]]
luderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt mellom kjøper og
selger.
grunnlag
Om informasjonsgrunnlaget
Overtakelse
Opplysninger om boligens størrelse og utforming, både
Tidspunkt for overtakelse avtales mellom kjøper og innvendig og utvendig, bygger på informasjon hentet fra
selger. vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
registre som kommunen og Kartverket.

---

[d198_d198 | Side [1]]
eier: Har det vært brann, branntilløp eller varmgang i anlegget? Nei
Oppsummering av elektrisk
Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser som forskrift til
avhendingslova (tryggere bolighandel) § 2-18 inneholder. Dette kan ikke sammenlignes med en
kontroll utført av offentlig myndighet (Det lokale eltilsyn) eller registrert elektrovirksomhet, og en
bygningssakkyndig har verken kompetanse eller lov til å foreta en slik kontroll. Tilstandsgraden er
vurdert ut fra den forenklede

---

[d198_d198 | Side [1]]
rt arbeider etter opprinnelig byggeår? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Er balkong / terrassen tekket? Nei
Oppsummering av balkong, terrasse, platting TG-1
Ingen vesentlige avvik ble registrert.
6.2 Vinduer og dører
Beskrivelse
Vinduer med 2-lags glass, ytterdør i malt utførelse, terrassedør med glass.
Er det gjennomført arbeider etter opprinnelig byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er

---

[d198_d198 | Side [1]]
msvar mellom dagens bruk og godkjente byggetegninger? Nei
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift?
Er det manglende ferdigattest / midlertidig brukstillatelse? Nei
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det avvik ved rekkverk, håndløper eller åpninger mellom trinn på Ikke relevant/finnes ikke
innvendig trapp i forhold til dagens forskriftskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i

---

[d198_d198 | Side [1]]
g bolighold. For å kunne gjøre dette benyttes det tilstands - og eiendomsinformasjon fra
rapporten. Les mer om tjenestene og få tilgang til å avstå fra bruk av dine data ved å gå til denne
nettsiden: https://samtykke.vendu.no/40432
Dokumentasjon på Dersom det har vært utført reparasjoner, vedlikehold, installasjoner, ombygging eller lignende i boligen de
siste fem årene, og arbeidet er utført av kvalifiserte håndverkere, skal den bygningssakkyndige be eieren
håndverkertjenester dokumentere bruken av

---

[d198_d198 | Side [1]]
Oversikt over løsøre og tilbehør", som Samsvarserklæring:
legges til grunn med mindre annet er spesifisert i Det fremgår av tilstandsrapporten at det mangler/ ikke er
salgsoppgaven. fremlagt samsvarserklæring for det elektriske anlegget.
Gjenstander som er nevnt i standardlisten, men som ikke
Byggemåte
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de I forbindelse med salget er det blitt utført en
er, uten garanti, med mindre det

---

[d198_d198 | Side [1]]
tskrav?
Er det avvik fra dagens forskrift på høyde og åpninger i rekkverk til Ikke relevant/finnes ikke
balkong/terrasse/utvendig trapp?
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei
6.5 Avløpsrør
Type avløpsrør Plast
Er det gjennomført arbeider på anlegget etter byggeår? Ukjent
Er det manglende lufting av kloakk over tak? Ukjent
Er det sen avrenning fra tappested? Nei
Mangler det

---

[d198_d198 | Side [1]]
byggeår? Nei
Er det påvist punkterte eller sprukne glass? Nei
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Oppsummering av vinduer og dører TG-1
6.3 Kjøkken
Overflater og innredning
Er det påvist fukt /skader rundt vask/kjøleskap/oppvaskmaskin? Nei
Er det påvist skader på kjøkkeninnredning utover normal slitasje? Nei
Kyavegen 5, 7045

---

[d198_d198 | Side [1]]
n skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
år på det tidspunkt kjøperen binder seg til å kjøpe boligen. Ved utgått rapport bør bygningssakkyndig
kontaktes for ny befaring og oppdatering.
Supertakst AS samarbeider med Vendu AS, som utvikler tjenester som bidrar til en trygg bolighandel og et
bærekraftig bolighold. For å kunne gjøre dette benyttes det tilstands - og

---

[d198_d198 | Side [1]]
refter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg

---

[d198_d198 | Side [1]]
nen er eiendommen døgn.
avsatt til sentrumsformål ‑ nåværende og byggesone 2.
Radonmåling
Kopi av situasjonskart, målebrev, reguleringsplaner m/
bestemmelser etc. ligger vedlagt i salgsoppgaven eller Selger har ikke utført radonmåling. Det er ikke krav om
kan fås ved henvendelse til megler. Vi oppfordrer dette med mindre boligen er helt eller delvis utleid.
interessenter til å gjøre seg kjent med disse.
Diverse
Tinglyste heftelser
Det informeres om at ingen kan eie mer enn to
Tinglyste heftelser og

---

[d198_d198 | Side [1]]
arsel eller offentlige vedtak som kan medføre endringer i bruken av
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
24 Er det andre forhold av betydning ved eiendommen som kan være relevant

---

[d198_d198 | Side [1]]
gningsdeler med tilstandsgrad TG2
eller TG3. Husdyr: Dyrehold er tillatt så lenge dette ikke på en
urimelig eller unødvendig måte er til skade eller ulempe
for de øvrige brukerne av eiendommen.
Øvrig
Forkjøpsrett: Det foreligger ingen forkjøpsrett på
informasjon
eiendommen.
Adresse
Styregodkjennelse: Det kreves ikke styregodkjennelse av
Kyavegen 5, 7045 TRONDHEIM ny eier.
Gnr. 9, bnr. 865, snr. 28, ideell andel 1/ 1
i Trondheim kommune. Regnskap/ budsjett/ kostnadsøkninger:
Årsresultat ‑ Persaunet Ekstra 4

---

[d198_d198 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
Initialer selger: EØ 2
33006250
:ecnerefer
tnemucoD
46

## Side 47

18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken

---

[d198_d198 | Side [1]]
informeres om at ingen kan eie mer enn to
Tinglyste heftelser og rettigheter: På eiendommen er det boligseksjoner i sameiet, i henhold til eierseksjonsloven §
tinglyst følgende heftelser og rettigheter som følger 23. Seksjoner som eies av nærstående eller gjennom et
eiendommens matrikkel ved overskjøting til ny firma regnes også med.
hjemmelshaver:
I henhold til eierseksjonsloven § 31 er sameierne
5001/ 9/ 865/ 28: ansvarlige overfor sameiets kreditorer i forhold til sin
28.09.2012 ‑ Dokumentnr: 802754 ‑

---

[d198_d198 | Side [1]]
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

[d198_d198 | Side [1]]
Del av gnr 56 bnr 1 m.fl. (31.10.2013)
r20140037 Tyholtveien fra Persaunvegen til Kong Øysteins veg (29.8.2019)
r20190016 Marie Michelets vei 9a og b (30.9.2020)
r20210021 Fernanda Nissens veg og del av Kong Øysteins veg (7.3.2024)
BEBYGGELSESPLAN
Omfattes eiendommen eller en del av eiendommen av en bebyggelsesplan etter eldre PBL?
PLANID Plannavn
Nei
REGULERING UNDER ARBEID
Er det igangsatt planleggingsarbeid på et område som inkluderer/berører eiendommen?
PLANID Plannavn
Nei
PLANFORSLAG
Eksisterer det

---

[d198_d198 | Side [1]]
et ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje

---

[d198_d198 | Side [1]]
eligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
40

## Side 41

OM EIENDOMMEN
Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en
mellom partene, og all tilgjengelig dokumentasjon som egenandel).
forelå for kjøper før handelen ble inngått. I tillegg gjelder
avhendingsloven. Det gjelder ulike avtalevilkår avhengig

---

[d198_d198 | Side [1]]
rører eiendommen?
PLANID Plannavn
Nei
PLANFORSLAG
Eksisterer det planforslag som berører eiendommen?
PLANID Plannavn
Nei
KOMMENTARFELT:
Det tas forbehold om feil og mangler.
25.02.2026 14:31:12 Side 2 av 2
111

## Side 112

112

## Side 113

Kommuneplanens arealdel
Eiendom: Gnr: 9 Bnr: 865 Fnr: 0 Snr: 28
Adresse: Kyavegen 5
Målestokk
7045 TRONDHEIM
Trondheim 1:5000
Annen info:
25.02.2026 14:31:18 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
113

## Side

---

[d198_d198 | Side [1]]
eldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag

---

[d198_d198 | Side [1]]
er du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: EØ 3
33006250
:ecnerefer
tnemucoD
47

## Side 48

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller

---

[d198_d198 | Side [1]]
 nettet er private, og
Oppvarming
vedlikeholdsansvaret for disse påhviler sameiet.
Boligen varmes opp med fjernvarme via vannbåren Adkomst til eiendommen skjer via privat vei.
varme og radiatorer.
Dersom beboelsesrom ikke har vegg‑ eller fastmonterte
Utleie
varmekilder ved visning følger dette heller ikke med.
Adgang til utleie: Boligen kan leies ut i samsvar med
gjeldende lovverk, og vedtektene setter ingen
Regulerings og arealplaner
begrensninger på eierens utleieadgang. Korttidsutleie er
Eiendommen er

---

[d198_d198 | Side [1]]
ks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank,

---

[d198_d198 | Side [1]]
 er ikke søknadspliktig.
sameiene/ lagene Persaunet Ekstra 1 til 4. Sameiet og alle
dets beboere er pliktig medlem i kollektiv bildeleordning Ferdigattest datert: 05.07.2013.
iht. pålegg fra Trondheim kommune og avtale med
Trondheim Bilkollektiv av 20.10.2006, og stiller i denne
Innhold
forbindelse inntil to stk. biloppstillingsplasser
vederlagsfritt til disposisjon for bilkollektivets bil(er). Leiligheten ligger i 1. etasje og består av stue, kjøkken,
bad, soverom og en innvendig bod.
Adkomst
Terrasse på

---

[d198_d198 | Side [1]]
ulert tomtegrense Eiendomsgrense som skal Bygg, kulturminner, mm som
oppheves skal bevares
Byggegrense Planlagt bebyggelse Bebyggelse som inngår i
planen
Bebyggelse som forutsettes Regulert senterlinje Frisiktlinje
fjernet
Regulert parkeringsfelt Regulert støyskjerm Måle- og avstandslinje
Midlertidig bygg- og Bevaring av bygninger og Frisiktsone ved veg
anleggsområde anlegg
Bolig Blokkbebyggelse Forretning
Kjøreveg Gang-/sykkelveg Felles avkjørsel
Felles gangareal Felles lekeareal Bevaring

---

[d198_d198 | Side [1]]
rs 2025 til februar 2026 var kr.
Valgfri omkostninger: 10 307,‑. Kommunale avgifter og gebyrer kan avvike fra
Kr 12 500 Boligkjøperforsikring en termin til en annen.
Sum omkostninger kr 88 340 ved prisantydning eksl.
Fellesgjeld
forsikring.
Lånebetingelser fellesgjeld: Sameiet har ingen lån.
Det tas forbehold om endring i gebyrer
Estimert totalpris ink. omk Andre kostnader:
Kr 3 578 340 Velforening: Sameiet har pliktig medlemskap i Strinda
Velforening, som har som formål å drive og vedlikeholde
felles

---

[d198_d198 | Side [1]]
 elbil i dag?
10 kvm og parkeringsplass i parkeringskjeller. Alt dette er Ja. El‑bil lader montert på parkeringsplass i
inkludert i felleskostnadene sammen med blant annet parkeringskjeller.
kabel‑TV/ internett og fjernvarme.
Selgers egenerklæringsskjema følger vedlagt
Hvitevarer: Integrerte hvitevarer medfølger. salgsoppgaven. Interessenter oppfordres til å gjennomgå
dette nøye.
Innbo og løsøre: Salgsoppgaven inkluderer NEFs
standardliste "Oversikt over løsøre og tilbehør", som Samsvarserklæring:
legges

---

[d198_d198 | Side [1]]
ske forbruket avregnes årlig eller kvartalsvis.
Prisantydning
Kr 3 490 000
Eiendomsskatt
Eiendomsskatten ble beregnet til kr. 4 383,‑ i 2023.
Omkostning kjøper
Kommunale avgifter
Kr 3 490 000 Prisantydning
Kr 10 307 (2025)
Omkostninger:
Kr 87 250 Dokumentavgift (2,5%) Informasjon: Kommunale avgifter inkluderer vann, avløp,
Kr 545 Tingl.gebyr pantedokument feiing, eiendomsskatt og renovasjon.
Kr 545 Tingl.gebyr skjøte
Fakturert beløp fra mars 2025 til februar 2026 var kr.
Valgfri omkostninger: 10 307,‑.

---

[d198_d198 | Side [1]]
kel slik:
a/ Boligsameier og borettslag fast pris med én del pr. registrerte bolig.
b/ Næringsareal med registrert, bebygd areal (BYA) fra Kartverket/Grunnboka multiplisert
med antall etasjer over bakkenivå.
Styret har ansvar for å ajourføre endringer i bruksenhetene innenfor området.
6.2 Medlemmene har ansvar for felleskostnadene uavhengig av om vedkommende velger
å benytte seg av installasjoner, innretninger, parkeringsplasser eller området for øvrig (jfr.
reguleringsplan). Unntak fra dette kan gjøres

---

[d198_d198 | Side [1]]
tter ferien. Det var
lang ventetid på ny dør og øvrig utstyr. Etter litt justeringer av dørlås ser nå dette ut til å
fungere tilfredsstillende.
Styret har behandlet budsjett for 2024 og det ble da vedtatt en økning i felleskostnadene
fra og med januar måned. Dette med bakgrunn i den generelle prisøkningen som oppleves
på de varer og tjenester vi etterspør. Økt felleskostnad harmonerer med det forventede
kostnadsnivå.
Styret har igjennom perioden jobbet med

---

[d198_d198 | Side [1]]
ap/ budsjett/ kostnadsøkninger:
Årsresultat ‑ Persaunet Ekstra 4 Boligsameie
Sameiet hadde i 2023 samlede driftsinntekter på kr
Selger
1 222 428 og samlede driftskostnader på kr 1 629 728.
Elsie Øyan Dette ga et negativt årsresultat på kr 357 768. Årets
største kostnad var drift og vedlikehold. Dette gjelder
Sameie
blant annet drift og vedlikehold av bygninger, heisanlegg,
Persaunet Ekstra 4 Boligsameie ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro
og VVS.
Organisasjonsnummer:

---

[d198_d198 | Side [1]]
ameie har ikke lån.
Felleskostnader
I budsjettet har styret tatt hensyn til ovennevnte, samt øvrige prisendringer knyttet til
produkter og tjenester sameiet anskaffer. Dette danner grunnlaget for foreløpig
fastsettelse av felleskostnader for 2024.
Budsjettet er basert på 15 % økning av brøkfordelte felleskostnader og kr. 69,- i økning i
kabel-TV og internett fra 01.01.2024.
For øvrig vises til de enkelte tallene i budsjettet.
Ved legg 1 13 av 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
101

## Side

---

[d198_d198 | Side [1]]
a
Velforening, som har som formål å drive og vedlikeholde
felles uteområder, installasjoner, parkeringsplasser og
Felleskostnader
friarealer. Kontingenten til velforeningen er inkludert i
Felleskostnader kr 2 876,‑ pr. mnd felleskostnadene.
Dette inkluderer blant annet felleskostnader, TV/ Velforeningens forretningsfører er Kjeldsberg
bredbånd, garasje, kontingent til Strinda Velforening og Boligforvaltning AS.
a‑konto fjernvarme.
Andre utgifter: I tillegg til felleskostnader påløper
Fellesutgiftene er

---

[d198_d198 | Side [1]]
vm med gode solforhold. Perfekt for fine
sommerdager og utendørs samvær. Sameiet har pent
opparbeidet fellesområder som bidrar til trivsel.
Fellesarealer og rettigheter til
Kjøkken
bruk
Moderne og stilrent kjøkken med integrerte hvitevarer og
Det gjøres særskilt oppmerksom på at boden som er godt med skapplass. Kjøkkenfrontene er glatte og hvite,
medtatt i BRA‑e og totalt BRA, ligger på sameiets som gir et rent og tidløst uttrykk, og den mørke
fellesareal, men disponeres av denne seksjonen. Sameiet

---

[d198_d198 | Side [1]]
rt i dialog med beboere og andelseiere og behandlet
diverse forhold/saker vedr eget eierforhold og boligsameiets anliggende.
Ved legg 1 12 av 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
100

## Side 101

6 Persaunet Ekstra 4 Boligsameie
KOMMENTARER TIL ÅRSREGNSKAPET FOR 2023
Styret mener at årsregnskapet gir et riktig bilde av sameiets eiendeler og gjeld, finansielle
stilling og resultat. Informasjon om sameiets forventede økonomiske utvikling er omtalt i
årsrapportens punkt om budsjett for

---

[d198_d198 | Side [1]]
890
Overføringer:
Til opptjent egenkapital 0 75 875
Fra opptjent egenkapital -357 768 0
Ved legg 1 17 av 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
102

## Side 103

11 Persaunet Ekstra 4 Boligsameie
PERSAUNET EKSTRA 4 BOLIGSAMEIE
ORG.NR. 999 162 444, KUNDENR. 7182
BALANSE
Note 2023 2022
EIENDELER
OMLØPSMIDLER
Restanser på felleskostnader 0 50
Forskuddsbetalte kostnader 97 743 91 394
Energiavregning 12 44 092 5 255
Driftskonto OBOS-banken 664 027 546 521
Sparekonto OBOS-banken 547 707 714

---

[d198_d198 | Side [1]]
r om
montering av elbil lader i perioden. Disse godkjennes, forutsatt at godkjent leverandør og
utstyr benyttes, samt at Samsvarserklæring leveres styret i etterkant.
Det er også mottatt søknad om montering av trampoline på fellesområdet vårt. Søknad
avslått.
Ved legg 1 10 av 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
98

## Side 99

4 Persaunet Ekstra 4 Boligsameie
Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert. Det jobbes med å
avdekke

---

[d198_d198 | Side [1]]
fo vedr. fremdrift innglassing trapp Kyavegen 1
• Julehilsen fra styret
• Info vedr. parkering
• Info vedr. driftsproblemer heis, garasjeport, radiatorvarme, dør inn til bodområdet, lys i
bodområdet
• Røykvarslerens dag (minner om bytte av batterier)
• Div. info fra Strinda Velforening


Det ble avholdt dugnad i sameiet mandag 8. mai 2023.

Søknad om etablering av El-Bil lader – Styret har mottatt, og godkjent, flere søknader om
montering av elbil lader i perioden.

---

[d198_d198 | Side [1]]
v 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
101

## Side 102

10 Persaunet Ekstra 4 Boligsameie
PERSAUNET EKSTRA 4 BOLIGSAMEIE
ORG.NR. 999 162 444, KUNDENR. 7182
RESULTATREGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2023 2022 2023 2024
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 1 222 428 1 193 808 1 222 000 1 382 000
SUM DRIFTSINNTEKTER 1 222 428 1 193 808 1 222 000 1 382 000
DRIFTSKOSTNADER:
Personalkostnader 3 -14 100 -14 100 -14 100 -15 510
Styrehonorar 4 -100 000 -100 000 -100 000 -110

---

[d198_d198 | Side [1]]
vurderes til anskaffelseskost, men nedskrives til
virkelig verdi dersom verdifallet ikke forventes å være forbigående. Langsiktig gjeld
balanseføres til nominelt beløp på etableringstidspunktet. Andre varige driftsmidler
balanseføres og avskrives lineært over driftsmidlenes økonomiske levetid.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 815 808
TV/bredbånd 314

---

[d198_d198 | Side [1]]
en antar at strømstøtten
videreføres og at mange har fått et mer bevisst forhold til energiforbruk og energisparing.
Vi antar dermed at energikostnadene vil ligge på omtrent samme kostnadsnivå som i
2023.
Forsikring
Premieendringen er en følge av indeksjustering på bygninger på 5,2 % fra 1. januar, samt
forsikringsselskapets individuelle prisjustering basert på skadehistorikken i Persaunet
Ekstra 4 Boligsameie.
Lån
Persaunet Ekstra 4 Boligsameie har ikke lån.
Felleskostnader
I budsjettet har styret tatt

---

[d198_d198 | Side [1]]
0 -14 100 -15 510
Styrehonorar 4 -100 000 -100 000 -100 000 -110 000
Revisjonshonorar 5 -9 398 -11 138 -11 000 -11 500
Forretningsførerhonorar -78 020 -75 008 -79 000 -82 400
Konsulenthonorar 6 -15 750 -2 640 -5 000 -15 000
Drift og vedlikehold 7 -625 433 -218 133 -690 000 -573 500
Forsikringer -153 686 -133 029 -146 000 -170 000
Kommunale avgifter 8 -2 971 -1 601 0 -3 000
Kostnader sameie 0 -112 268 -112 268 -121 250
Energi/fyring -46 844 -43 853 -70 000 -70 000
TV-anlegg/bredbånd -322 404 -296 918 -315

---

[d198_d198 | Side [1]]
NNKREVDE FELLESKOSTNADER
Felleskostnader 815 808
TV/bredbånd 314 820
Garasje 91 800
SUM INNKREVDE FELLESKOSTNADER 1 222 428
NOTE: 3
PERSONALKOSTNADER
Arbeidsgiveravgift -14 100
SUM PERSONALKOSTNADER -14 100
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året. Selskapet er
derav ikke pliktig til å ha tjenestepensjonsordning etter lov om obligatorisk tjenestepensjon.
Arbeidsgiveravgiften knytter seg til styrehonoraret.
NOTE: 4
STYREHONORAR
Honorar til styret gjelder for perioden

---

[d198_d198 | Side [1]]
et for øvrig (jfr.
reguleringsplan). Unntak fra dette kan gjøres dersom årsmøtet fastsetter at
noen av medlemmene kan gis disposisjonsrett til deler av arealet.
6.3 Unnlatelse av å betale medlemskontingent beløp anses som mislighold fra
85

## Side 86

medlemmenes side og kan inndrives av styret eller de styret bemyndiger.
6.4 Som felleskostnader anses blant annet:
✓ Forsikring
✓ Kostnader til drift og vedlikehold
✓ Gatebelysning
✓ Kostnader ved forretningsførsel, revisjon og styrehonorar
§7 Medlemmenes

---

[d198_d198 | Side [1]]
arasjeanlegg, brannsikring, elektro
og VVS.
Organisasjonsnummer: 999162444
Årsresultat ‑ Strinda velforening
Persaunet Ekstra 4 Boligsameie er et eierseksjonssameie Velforeningen hadde i 2024 samlede driftsinntekter på kr
bestående av 45 boligseksjoner. Forretningsfører er 1 711 724 og samlede driftskostnader på kr 1 629 771.
OBOS Eiendomsforvaltning AS. Dette ga et positivt årsresultat på kr 86 967.
Det gjøres oppmerksom på at terrassen ikke er en del av
Vedtekter/ husordensregler
selve seksjoneringen for

---

[d198_d198 | Side [1]]
em som eget forslag ovenfor
det kommende Årsmøtet.
Ved legg 1 11 av 23 7182 Årsrapport Sameiet Persaunet Ekstra 4.pdf
99

## Side 100

5 Persaunet Ekstra 4 Boligsameie
Styret har valgt å ha videre drift via eksiterende serviceleverandører.
Det har vært dialog med de fleste serviceleverandørene i perioden.
Serviceleverandører har 1 eller 2 periodiske vedlikehold på installasjonene hvert år.
Normalt vår og høst med mindre annet avtales.
Utbedring av avvik rapportert via service utbedres

---

[d198_d198 | Side [1]]
r fra offentlige
Forsikring
registre som kommunen og Kartverket. Det er viktig at
Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
avhendingsloven begrenset oppad kr. 20 000 000,‑. egenerklæring. Kjøper anses for å være kjent med
Egenerklæringsskjema er vedlagt salgsoppgaven og forhold som er tydelig beskrevet i salgsdokumentene,
interessenter oppfordres

---

[d198_d198 | Side [1]]
r tydelig beskrevet i salgsdokumentene,
interessenter oppfordres til å gjennomgå denne før bud slike forhold kan ikke senere gjøres gjeldende som en
inngis. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners.

---

[d198_d198 | Side [1]]
r klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet

---

[d198_d198 | Side [1]]
 Elsie Øyan Tilstede ved inspeksjon: Ja
Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Ja
Informasjon om bygningssakkyndig
Navn: Just Roar Dragsten Telefon: 40004459
Firma: Takst-Forum Trøndelag A/S Epost: just@tft.no
Tittel: Adresse: Vestre Rosten 69, 7072 Heimdal
Profesjonsansvarsforsikring: Frende Forsikring
Egne premisser:
Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet

---

[d198_d198 | Side [1]]
2012. Leiligheten ligger i 1.
Ja. etasje i en boligblokk oppført i fire etasjer. Grunnmur er
37

## Side 38

OM EIENDOMMEN
oppført i støpt betong. Veggkonstruksjon er oppført i Forretningsfører: Obos Eiendomsforvaltning AS
bindingsverk og betong og er utvendig kledd med
stående panel og teglstein. Etasjeskille er et Sameiets forsikringsselskap: Gjensidige Forsikring Asa
betongdekke.
Polisenummer fellesforsikring: 85116153
Boligen har ingen bygningsdeler med tilstandsgrad TG2
eller TG3. Husdyr: Dyrehold er

---

[d198_d198 | Side [1]]
erg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på

---

[d198_d198 | Side [1]]
gjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest

---

[d198_d198 | Side [1]]
men?
Nei Ja
Når kjøpte du boligen?
År 2024
Hvor lenge har du eid boligen?
Antall år 1
Antall måneder 7
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap Fremtind
Polise/avtalenr. 35049804
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: EØ 1
33006250
:ecnerefer
tnemucoD
45

## Side 46

2 Kjenner du

---

[d198_d198 | Side [1]]
78615 ‑ Omnummerering ved eiendomshandleren. Kjøpekontrakten kan gjennomgås
kommuneendring hos eiendomsmegler før budet legges inn. Kontakt
Tidligere: Knr:1601 Gnr:9 Bnr:865 Snr:28 eiendomsmegler for eventuelle spørsmål.
39

## Side 40

OM EIENDOMMEN
Selger leverer eiendommen i ryddig og rengjort stand. En standard tilbehørsliste utarbeidet av Norges
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
– med mindre avvik er tydelig avtalt

---

[d198_d198 | Side [1]]
eil/mangler i profilen. Copyright © Finn.no AS 2026
133

## Side 134

Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
134

## Side 135

135

## Side 136

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
−

---

[d198_d198 | Side [1]]
sninger på eierens utleieadgang. Korttidsutleie er
Eiendommen er regulert til boliger og frisiktsone i tillatt i inntil 90 døgn per år, jf. eierseksjonsloven § 24.
henhold til reguleringsplan r0455. Denne grensen kan endres i vedtektene, men den må
være satt mellom 60 og 120 døgn. Med korttidsutleie
Eiendommen omfattes av Kommuneplanens arealdel menes utleie i en sammenhengende periode på opptil 30
2022‑2034, vedtatt 27.03.2025. I planen er eiendommen døgn.
avsatt til sentrumsformål ‑ nåværende og

---

[d198_d198 | Side [1]]
formål - Nåværende Kommuneplanens arealdel 2022-2034 (27.3.2025) 3413.76m2
GJELDENDE REGULERING
Ligger eiendommen i et regulert område?
PLANID Plannavn (vedtaksdato) Reguleringsformål Areal
Ja
5001 r0455 Persaunet. (26.8.2004) Boliger 2970.14m2
5001 r0455 Persaunet. (26.8.2004) Frisiktsone 4.49m2
RELATERTE PLANER
PLANID Plannavn (vedtaksdato)
k0001a Kommuneplanens arealdel 2001-2012 (19.2.2004)
r0126 Tyholtveien - Persaunet Hageby og utvidelse av Persaunveien. (18.4.1951)
r0126a Bromstad - Tyholtmo m.fl.

---

[d198_d198 | Side [1]]
øyskolen, BI Trondheim nås enkelt fra boligen.
Formuesverdien er en prosentandel av den beregnede Området er godt tilrettelagt for barnefamilier, med flere
boligverdien. barnehager som Aurora Baldershage og Majorstuen i
nabolaget. Strindheim skole ligger også i trygg
Den nye utregningsmodellen kan medføre en høyere gangavstand. Det er også kort vei til Tingssletta balløkke
eller lavere markedsverdien enn tidligere. Det tas derfor og aktivitetshallen ved skolen som gir gode muligheter
forbehold om at

---

[d198_d198 | Side [1]]
Byggesone 2 Byggesone 3
Offentlig eller privat Næringsbebyggelse Blå/grønnstruktur
tjenesteyting
Framtidig blå/grønnstruktur
25.02.2026 14:31:18 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 2 av 2
114

## Side 115

Reguleringsplaner
Eiendom: Gnr: 9 Bnr: 865 Fnr: 0 Snr: 28
Adresse: Kyavegen 5
Målestokk
7045 TRONDHEIM
Trondheim 1:1000
Annen info:
25.02.2026 14:31:39 Det kan forekomme feil eller manglende opplysninger i informasjonen. Side 1 av 2
115

## Side

---

[d198_d198 | Side [1]]
manglende opplysninger i informasjonen. Side 1 av 2
113

## Side 114

Tegnforklaring
KpOmråde kommuneplan Eiendomsgrense god Eiendomsgrense dårlig
gjeldende nøyaktighet nøyaktighet
Eiendomsgrense fiktiv Veg Bestemmelsesområde #6
Offentlig tjenesteyting
Hensyn bevaring kulturmiljø Turveg / turdrag Framtidig turveg / turdrag
Jernbane - på bakken Jernbane - tunell Kollektivtrase
Fjernveg tunnel Hovedveg Hovedvegnett sykkel
Byggesone 1 Byggesone 2 Byggesone 3
Offentlig eller privat Næringsbebyggelse

---

[d198_d198 | Side [1]]
enhet med nærhet til byens
fasiliteter. Dette er et nabolag hvor hverdagslogistikken
er enkel, enten du skal på jobb, levere i barnehagen eller
handle inn til middag. Området er preget av en blanding
av historisk bebyggelse og nyere leilighetskomplekser,
noe som skaper et hyggelig og variert bomiljø.
34

## Side 35

OM EIENDOMMEN
Parkering Ferdigattest/ brukstillatelse:
Det følger rett til bruk av en parkeringsplass i felles Det er utstedt ferdigattest for nybygg boliger datert
parkeringskjeller. Det er

---

[d198_d198 | Side [1]]
manglende opplysninger i informasjonen. Side 1 av 2
115

## Side 116

Tegnforklaring
RpOmråde vedtatt linje - på RpOmråde vedtatt - på Eiendomsgrense god
bakkenivå bakkenivå nøyaktighet
Eiendomsgrense fiktiv Veg Kommunalveg gatenavn .
Privatveg gatenavn . Midlertidig bygge- og Plan dispensasjon punkt
anleggsområde
RpFormålGrense RpAngittHensynGrense RpGrense
RpSikringGrense Avkjørsel - både inn og Regulert møneretning
utkjøring
Regulert tomtegrense Eiendomsgrense som skal Bygg, kulturminner, mm

---

[d198_d198 | Side [1]]
# Side 27

(Ingen tekst ekstrahert)

## Side 28

Her bor du i et rolig og barnevennlig
område, samtidig som Trondheim
sentrum nås på en kort kjøretur.

## Side 29

(Ingen tekst ekstrahert)

## Side 30

Plantegning

## Side 31

Plantegning

## Side 32

KYAVEGEN 5
OM EIENDOMMEN

## Side 33

OM EIENDOMMEN
OM EIENDOMMEN
Sameiet har en avtale med Techem for energitjenester.
Økonomi
Kostnaden for fjernvarme betales som et a‑kontobeløp,
og det faktiske forbruket avregnes årlig eller kvartalsvis.
Prisantydning
Kr

---

[d198_d198 | Side [1]]
er en del av
Vedtekter/ husordensregler
selve seksjoneringen for leiligheten. Seksjonen har
midlertidig enerett til bruk av bestemte deler av sameiets Eier forplikter seg til å gjøre seg kjent med vedtekter og
fellesareal. Seksjoner i 1. etasje i Kyavegen 1, 3 og 5 har husordensregler. Kopi av disse ligger vedlagt i
bruksrett til en utvidet platting/ terrasse. salgsoppgaven.
Vi gjør oppmerksom på følgende saker i sameiet:
Energimerke
‑ Montering av overvåkningskamera i parkeringskjelleren
og ved inngang

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av tilstandsrapporten at samsvarserklæring for det elektriske anlegget ikke er fremlagt. Dette kan indikere at elektriske arbeider er utført uten dokumentasjon på faglig forsvarlig utførelse, noe som kan medføre sikkerhetsrisiko og fremtidige kostnader.",
      "evidence": [
        "Det fremgår av tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
        "Er det gjennomført arbeider på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)? Svar Nei",
        "Tilstandsgrad 1 kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Negativt årsresultat i sameiet. Persaunet Ekstra 4 Boligsameie hadde i 2023 et negativt årsresultat på kr 357 768, der driftskostnadene (kr 1 629 728) oversteg driftsinntektene (kr 1 222 428) betydelig. Dette kan indikere risiko for fremtidige felleskostnadsøkninger.",
      "evidence": [
        "Sameiet hadde i 2023 samlede driftsinntekter på kr 1 222 428 og samlede driftskostnader på kr 1 629 728. Dette ga et negativt årsresultat på kr 357 768.",
        "Årets største kostnad var drift og vedlikehold. Dette gjelder blant annet drift og vedlikehold av bygninger, heisanlegg, ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro og VVS.",
        "Drift og vedlikehold 7 -625 433 -218 133 -690 000 -573 500"
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R3",
      "description": "Økning i felleskostnader. Styret vedtok en økning i felleskostnader på 15 % fra januar 2024, og budsjettet for 2024 viser en betydelig økning i innkrevde felleskostnader fra kr 1 222 000 til kr 1 382 000. Dette representerer en direkte økt løpende kostnad for kjøper.",
      "evidence": [
        "Budsjettet er basert på 15 % økning av brøkfordelte felleskostnader og kr. 69,- i økning i kabel-TV og internett fra 01.01.2024.",
        "Styret har behandlet budsjett for 2024 og det ble da vedtatt en økning i felleskostnadene fra og med januar måned. Dette med bakgrunn i den generelle prisøkningen som oppleves på de varer og tjenester vi etterspør.",
        "Innkrevde felleskostnader: Budsjett 2023: 1 222 000, Budsjett 2024: 1 382 000"
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Uløst vannlekkasje i parkeringsareal. Det er en tidvis vannlekkasje i sameiets parkeringsareal som ikke er reparert på tidspunktet for årsrapporten. Dette kan medføre fremtidige kostnader for sameiet og potensielt påvirke felleskostnadene.",
      "evidence": [
        "Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert. Det jobbes med å avdekke [årsaken]."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R5",
      "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs. Risikoen er særlig relevant ettersom boligen ligger i 1. etasje.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei",
        "Leiligheten ligger i 1. etasje og består av stue, kjøkken, bad, soverom og en innvendig bod."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R6",
      "description": "Terrassen er ikke en del av seksjoneringen. Terrassen tilhører sameiets fellesareal, og seksjonen har kun midlertidig enerett til bruk. Dette innebærer at kjøper ikke har full juridisk råderett over terrassen, og at sameiet i prinsippet kan endre bruksretten.",
      "evidence": [
        "Det gjøres oppmerksom på at terrassen ikke er en del av selve seksjoneringen for leiligheten. Seksjonen har midlertidig enerett til bruk av bestemte deler av sameiets fellesareal.",
        "Seksjoner i 1. etasje i Kyavegen 1, 3 og 5 har bruksrett til en utvidet platting/ terrasse."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R7",
      "description": "Boden ligger på sameiets fellesareal. Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal og disponeres kun av seksjonen. Kjøper har dermed ikke eksklusiv eiendomsrett til boden, noe som kan innebære usikkerhet rundt fremtidig bruk.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Pliktig medlemskap i bildeleordning. Sameiet og alle dets beboere er pliktig medlem i en kollektiv bildeleordning i henhold til pålegg fra Trondheim kommune. Dette innebærer en forpliktelse for kjøper som kan oppleves som en begrensning.",
      "evidence": [
        "Sameiet og alle dets beboere er pliktig medlem i kollektiv bildeleordning iht. pålegg fra Trondheim kommune og avtale med Trondheim Bilkollektiv av 20.10.2006, og stiller i denne forbindelse inntil to stk. biloppstillingsplasser vederlagsfritt til disposisjon for bilkollektivets bil(er)."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R9",
      "description": "Ukjent status på avløpsrør og kloakkluftning. Det er ukjent om det er gjennomført arbeider på avløpsanlegget etter byggeår, og det er ukjent om det mangler lufting av kloakk over tak. Dette kan innebære skjulte feil eller fremtidige utbedringsbehov.",
      "evidence": [
        "Er det gjennomført arbeider på anlegget etter byggeår? Ukjent",
        "Er det manglende lufting av kloakk over tak? Ukjent",
        "Type avløpsrør: Plast"
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R10",
      "description": "Selger har kun eid boligen i kort tid (ca. 1 år og 7 måneder). Selger kjøpte boligen i 2024 og har eid den i under 2 år. Dette kan bety begrenset kjennskap til boligens tilstand og historikk, noe som øker risikoen for at skjulte feil ikke er avdekket eller opplyst om.",
      "evidence": [
        "Når kjøpte du boligen? År 2024",
        "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7",
        "Har du bodd i boligen siste 12 måneder? Nei"
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen er avsatt til sentrumsformål i kommuneplanens arealdel 2022–2034. Selv om eiendommen i dag er regulert til boliger, er den i kommuneplanen avsatt til sentrumsformål. Dette kan på sikt medføre endringer i omgivelsene eller press på eiendommen ved fremtidige reguleringsendringer.",
      "evidence": [
        "I planen er eiendommen avsatt til sentrumsformål ‑ nåværende og byggesone 2.",
        "Eiendommen omfattes av Kommuneplanens arealdel 2022‑2034, vedtatt 27.03.2025.",
        "Eiendommen er regulert til boliger og frisiktsone i henhold til reguleringsplan r0455."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Løpende eiendomsskatt. Eiendomsskatten ble beregnet til kr 4 383 i 2023. Dette er en løpende kostnad for kjøper som kan øke i fremtiden, og bør hensyntas i den totale kostnadsberegningen.",
      "evidence": [
        "Eiendomsskatten ble beregnet til kr. 4 383,‑ i 2023."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R13",
      "description": "Bygningsdeler underlagt sameiet er ikke tilstandsvurdert. Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Dette innebærer at kjøper ikke har full informasjon om tilstanden på fellesarealer og felles bygningsdeler.",
      "evidence": [
        "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet [fellesarealer og felles installasjoner]."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R14",
      "description": "Selger har ikke bodd i boligen siste 12 måneder. Kombinert med kort eiertid øker dette risikoen for at selger har begrenset kunnskap om boligens faktiske tilstand, og at eventuelle skjulte feil ikke er kjent eller opplyst om.",
      "evidence": [
        "Har du bodd i boligen siste 12 måneder? Nei",
        "Når kjøpte du boligen? År 2024",
        "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7"
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R15",
      "description": "Høye og variable drifts- og vedlikeholdskostnader i sameiet. Drift og vedlikehold utgjorde kr 625 433 i 2023, en dramatisk økning fra kr 218 133 i 2022. Selv om budsjettet for 2024 er satt til kr 573 500, indikerer volatiliteten at uforutsette vedlikeholdskostnader kan oppstå og påvirke felleskostnadene.",
      "evidence": [
        "Drift og vedlikehold 7 -625 433 -218 133 -690 000 -573 500",
        "Årets største kostnad var drift og vedlikehold. Dette gjelder blant annet drift og vedlikehold av bygninger, heisanlegg, ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro og VVS.",
        "Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert."
      ],
      "source_documents": [
        "d198_d198"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "Hva er tilstandsgraden (TG) for det elektriske anlegget i tilstandsrapporten?",
    "Er det planlagte vedlikeholdsprosjekter eller rehabiliteringsplaner i sameiet Persaunet Ekstra 4?",
    "Hva er status på vannlekkasjen i parkeringsarealet – er den nå utbedret?",
    "Hva er sameiets egenkapital og likviditetssituasjon per 2023?",
    "Er det tinglyst noen bruksrettsavtale eller vedtektsbestemmelse som sikrer seksjonens rett til terrassen og boden?",
    "Hva er de kommunale avgiftene for eiendommen og hvordan er disse beregnet?",
    "Er det gjennomført el-kontroll av anlegget, og hva viste denne?",
    "Hva er forsikringspremiens utvikling og skadehistorikk i sameiet?"
  ],
  "reasoning": "\nGjennomgangen av de 13 opprinnelig identifiserte risikoene viser at alle er støttet av konkret evidens fra dokumentene. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R5 (Radon): Justert opp fra 0.85 til 0.88 fordi boligen ligger i 1. etasje, noe som øker radonrisikoen betydelig. Dette fremgår eksplisitt av dokumentet.\n- R10 (Kort eiertid): Justert opp fra 0.78 til 0.82 fordi det også fremgår at selger IKKE har bodd i boligen siste 12 måneder, noe som forsterker risikoen ytterligere.\n\n**Nedjusterte risikoer:**\n- R9 (Avløpsrør): Justert ned fra 0.75 til 0.72 fordi \"ukjent\" er et standardsvar i egenerklæringen og ikke nødvendigvis indikerer et faktisk problem. Avløpsrørene er av plast og det er ikke registrert sen avrenning.\n- R11 (Sentrumsformål): Justert ned fra 0.70 til 0.70 (uendret) – evidensen er klar, men risikoen er spekulativ og langsiktig.\n- R12 (Eiendomsskatt): Justert ned fra 0.72 til 0.65 fordi eiendomsskatt er en kjent og forutsigbar kostnad som ikke representerer en uventet risiko. Beløpet er relativt moderat.\n\n**Nye risikoer identifisert:**\n- R14: Selger har ikke bodd i boligen siste 12 måneder. Dette er en selvstendig risikofaktor som forsterker R10, men er distinkt nok til å stå alene.\n- R15: Høy volatilitet i drifts- og vedlikeholdskostnader. Kostnaden økte fra kr 218 133 i 2022 til kr 625 433 i 2023 – nesten en tredobling. Dette er en vesentlig risiko som ikke var eksplisitt identifisert, selv om den delvis er dekket av R2.\n\n**Risikoer som vurderes å mangle tilstrekkelig evidens:**\n- Ingen av de opprinnelige risikoene fjernes, men R12 nedgraderes betydelig da eiendomsskatt er en ordinær og forutsigbar kostnad.\n\n**Manglende informasjon som bør innhentes:**\n- Tilstandsgraden for el-anlegget er ikke eksplisitt oppgitt i de fremlagte dokumentchunkene.\n- Status på vannlekkasjen etter årsrapporten 2023 er ukjent.\n- Det mangler informasjon om eventuelle planlagte større vedlikeholdsprosjekter i sameiet.\n- Sameiets egenkapitalsituasjon bør undersøkes nærmere.\n- Rettslig grunnlag for bruksretten til terrassen og boden bør verifiseres mot vedtektene.\n"
}

## Raw Response
```json
{
  "id": "msg_01WTS2vz6dTLc48ketEYgv1B",
  "container": null,
  "content": [
    {
      "id": "toolu_01LaSM48bgBQgLBFPWfsPEq1",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende samsvarserklæring for elektrisk anlegg. Det fremgår av tilstandsrapporten at samsvarserklæring for det elektriske anlegget ikke er fremlagt. Dette kan indikere at elektriske arbeider er utført uten dokumentasjon på faglig forsvarlig utførelse, noe som kan medføre sikkerhetsrisiko og fremtidige kostnader.",
            "evidence": [
              "Det fremgår av tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
              "Er det gjennomført arbeider på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)? Svar Nei",
              "Tilstandsgrad 1 kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse mangler."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Negativt årsresultat i sameiet. Persaunet Ekstra 4 Boligsameie hadde i 2023 et negativt årsresultat på kr 357 768, der driftskostnadene (kr 1 629 728) oversteg driftsinntektene (kr 1 222 428) betydelig. Dette kan indikere risiko for fremtidige felleskostnadsøkninger.",
            "evidence": [
              "Sameiet hadde i 2023 samlede driftsinntekter på kr 1 222 428 og samlede driftskostnader på kr 1 629 728. Dette ga et negativt årsresultat på kr 357 768.",
              "Årets største kostnad var drift og vedlikehold. Dette gjelder blant annet drift og vedlikehold av bygninger, heisanlegg, ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro og VVS.",
              "Drift og vedlikehold 7 -625 433 -218 133 -690 000 -573 500"
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R3",
            "description": "Økning i felleskostnader. Styret vedtok en økning i felleskostnader på 15 % fra januar 2024, og budsjettet for 2024 viser en betydelig økning i innkrevde felleskostnader fra kr 1 222 000 til kr 1 382 000. Dette representerer en direkte økt løpende kostnad for kjøper.",
            "evidence": [
              "Budsjettet er basert på 15 % økning av brøkfordelte felleskostnader og kr. 69,- i økning i kabel-TV og internett fra 01.01.2024.",
              "Styret har behandlet budsjett for 2024 og det ble da vedtatt en økning i felleskostnadene fra og med januar måned. Dette med bakgrunn i den generelle prisøkningen som oppleves på de varer og tjenester vi etterspør.",
              "Innkrevde felleskostnader: Budsjett 2023: 1 222 000, Budsjett 2024: 1 382 000"
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Uløst vannlekkasje i parkeringsareal. Det er en tidvis vannlekkasje i sameiets parkeringsareal som ikke er reparert på tidspunktet for årsrapporten. Dette kan medføre fremtidige kostnader for sameiet og potensielt påvirke felleskostnadene.",
            "evidence": [
              "Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert. Det jobbes med å avdekke [årsaken]."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R5",
            "description": "Ingen radonmåling er utført. Selger har ikke utført radonmåling av boligen. Radon er en usynlig og luktfri radioaktiv gass som kan utgjøre en helserisiko ved forhøyede konsentrasjoner innendørs. Risikoen er særlig relevant ettersom boligen ligger i 1. etasje.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei",
              "Leiligheten ligger i 1. etasje og består av stue, kjøkken, bad, soverom og en innvendig bod."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R6",
            "description": "Terrassen er ikke en del av seksjoneringen. Terrassen tilhører sameiets fellesareal, og seksjonen har kun midlertidig enerett til bruk. Dette innebærer at kjøper ikke har full juridisk råderett over terrassen, og at sameiet i prinsippet kan endre bruksretten.",
            "evidence": [
              "Det gjøres oppmerksom på at terrassen ikke er en del av selve seksjoneringen for leiligheten. Seksjonen har midlertidig enerett til bruk av bestemte deler av sameiets fellesareal.",
              "Seksjoner i 1. etasje i Kyavegen 1, 3 og 5 har bruksrett til en utvidet platting/ terrasse."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R7",
            "description": "Boden ligger på sameiets fellesareal. Boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal og disponeres kun av seksjonen. Kjøper har dermed ikke eksklusiv eiendomsrett til boden, noe som kan innebære usikkerhet rundt fremtidig bruk.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Pliktig medlemskap i bildeleordning. Sameiet og alle dets beboere er pliktig medlem i en kollektiv bildeleordning i henhold til pålegg fra Trondheim kommune. Dette innebærer en forpliktelse for kjøper som kan oppleves som en begrensning.",
            "evidence": [
              "Sameiet og alle dets beboere er pliktig medlem i kollektiv bildeleordning iht. pålegg fra Trondheim kommune og avtale med Trondheim Bilkollektiv av 20.10.2006, og stiller i denne forbindelse inntil to stk. biloppstillingsplasser vederlagsfritt til disposisjon for bilkollektivets bil(er)."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R9",
            "description": "Ukjent status på avløpsrør og kloakkluftning. Det er ukjent om det er gjennomført arbeider på avløpsanlegget etter byggeår, og det er ukjent om det mangler lufting av kloakk over tak. Dette kan innebære skjulte feil eller fremtidige utbedringsbehov.",
            "evidence": [
              "Er det gjennomført arbeider på anlegget etter byggeår? Ukjent",
              "Er det manglende lufting av kloakk over tak? Ukjent",
              "Type avløpsrør: Plast"
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R10",
            "description": "Selger har kun eid boligen i kort tid (ca. 1 år og 7 måneder). Selger kjøpte boligen i 2024 og har eid den i under 2 år. Dette kan bety begrenset kjennskap til boligens tilstand og historikk, noe som øker risikoen for at skjulte feil ikke er avdekket eller opplyst om.",
            "evidence": [
              "Når kjøpte du boligen? År 2024",
              "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7",
              "Har du bodd i boligen siste 12 måneder? Nei"
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen er avsatt til sentrumsformål i kommuneplanens arealdel 2022–2034. Selv om eiendommen i dag er regulert til boliger, er den i kommuneplanen avsatt til sentrumsformål. Dette kan på sikt medføre endringer i omgivelsene eller press på eiendommen ved fremtidige reguleringsendringer.",
            "evidence": [
              "I planen er eiendommen avsatt til sentrumsformål ‑ nåværende og byggesone 2.",
              "Eiendommen omfattes av Kommuneplanens arealdel 2022‑2034, vedtatt 27.03.2025.",
              "Eiendommen er regulert til boliger og frisiktsone i henhold til reguleringsplan r0455."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Løpende eiendomsskatt. Eiendomsskatten ble beregnet til kr 4 383 i 2023. Dette er en løpende kostnad for kjøper som kan øke i fremtiden, og bør hensyntas i den totale kostnadsberegningen.",
            "evidence": [
              "Eiendomsskatten ble beregnet til kr. 4 383,‑ i 2023."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R13",
            "description": "Bygningsdeler underlagt sameiet er ikke tilstandsvurdert. Takstmannen har ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets ansvarsområde. Dette innebærer at kjøper ikke har full informasjon om tilstanden på fellesarealer og felles bygningsdeler.",
            "evidence": [
              "Det er ikke foretatt tilstandsvurdering av bygningsdeler som er underlagt sameiets/ borettslagets ansvarsområde. Det gjelder blant annet [fellesarealer og felles installasjoner]."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R14",
            "description": "Selger har ikke bodd i boligen siste 12 måneder. Kombinert med kort eiertid øker dette risikoen for at selger har begrenset kunnskap om boligens faktiske tilstand, og at eventuelle skjulte feil ikke er kjent eller opplyst om.",
            "evidence": [
              "Har du bodd i boligen siste 12 måneder? Nei",
              "Når kjøpte du boligen? År 2024",
              "Hvor lenge har du eid boligen? Antall år 1, Antall måneder 7"
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R15",
            "description": "Høye og variable drifts- og vedlikeholdskostnader i sameiet. Drift og vedlikehold utgjorde kr 625 433 i 2023, en dramatisk økning fra kr 218 133 i 2022. Selv om budsjettet for 2024 er satt til kr 573 500, indikerer volatiliteten at uforutsette vedlikeholdskostnader kan oppstå og påvirke felleskostnadene.",
            "evidence": [
              "Drift og vedlikehold 7 -625 433 -218 133 -690 000 -573 500",
              "Årets største kostnad var drift og vedlikehold. Dette gjelder blant annet drift og vedlikehold av bygninger, heisanlegg, ventilasjonsanlegg, garasjeanlegg, brannsikring, elektro og VVS.",
              "Den tidvise vannlekkasjen i vårt parkeringsareal er fortsatt ikke reparert."
            ],
            "source_documents": [
              "d198_d198"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "Hva er tilstandsgraden (TG) for det elektriske anlegget i tilstandsrapporten?",
          "Er det planlagte vedlikeholdsprosjekter eller rehabiliteringsplaner i sameiet Persaunet Ekstra 4?",
          "Hva er status på vannlekkasjen i parkeringsarealet – er den nå utbedret?",
          "Hva er sameiets egenkapital og likviditetssituasjon per 2023?",
          "Er det tinglyst noen bruksrettsavtale eller vedtektsbestemmelse som sikrer seksjonens rett til terrassen og boden?",
          "Hva er de kommunale avgiftene for eiendommen og hvordan er disse beregnet?",
          "Er det gjennomført el-kontroll av anlegget, og hva viste denne?",
          "Hva er forsikringspremiens utvikling og skadehistorikk i sameiet?"
        ],
        "reasoning": "\nGjennomgangen av de 13 opprinnelig identifiserte risikoene viser at alle er støttet av konkret evidens fra dokumentene. Følgende justeringer er gjort:\n\n**Oppjusterte risikoer:**\n- R5 (Radon): Justert opp fra 0.85 til 0.88 fordi boligen ligger i 1. etasje, noe som øker radonrisikoen betydelig. Dette fremgår eksplisitt av dokumentet.\n- R10 (Kort eiertid): Justert opp fra 0.78 til 0.82 fordi det også fremgår at selger IKKE har bodd i boligen siste 12 måneder, noe som forsterker risikoen ytterligere.\n\n**Nedjusterte risikoer:**\n- R9 (Avløpsrør): Justert ned fra 0.75 til 0.72 fordi \"ukjent\" er et standardsvar i egenerklæringen og ikke nødvendigvis indikerer et faktisk problem. Avløpsrørene er av plast og det er ikke registrert sen avrenning.\n- R11 (Sentrumsformål): Justert ned fra 0.70 til 0.70 (uendret) – evidensen er klar, men risikoen er spekulativ og langsiktig.\n- R12 (Eiendomsskatt): Justert ned fra 0.72 til 0.65 fordi eiendomsskatt er en kjent og forutsigbar kostnad som ikke representerer en uventet risiko. Beløpet er relativt moderat.\n\n**Nye risikoer identifisert:**\n- R14: Selger har ikke bodd i boligen siste 12 måneder. Dette er en selvstendig risikofaktor som forsterker R10, men er distinkt nok til å stå alene.\n- R15: Høy volatilitet i drifts- og vedlikeholdskostnader. Kostnaden økte fra kr 218 133 i 2022 til kr 625 433 i 2023 – nesten en tredobling. Dette er en vesentlig risiko som ikke var eksplisitt identifisert, selv om den delvis er dekket av R2.\n\n**Risikoer som vurderes å mangle tilstrekkelig evidens:**\n- Ingen av de opprinnelige risikoene fjernes, men R12 nedgraderes betydelig da eiendomsskatt er en ordinær og forutsigbar kostnad.\n\n**Manglende informasjon som bør innhentes:**\n- Tilstandsgraden for el-anlegget er ikke eksplisitt oppgitt i de fremlagte dokumentchunkene.\n- Status på vannlekkasjen etter årsrapporten 2023 er ukjent.\n- Det mangler informasjon om eventuelle planlagte større vedlikeholdsprosjekter i sameiet.\n- Sameiets egenkapitalsituasjon bør undersøkes nærmere.\n- Rettslig grunnlag for bruksretten til terrassen og boden bør verifiseres mot vedtektene.\n"
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
    "input_tokens": 19492,
    "output_tokens": 4857,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
