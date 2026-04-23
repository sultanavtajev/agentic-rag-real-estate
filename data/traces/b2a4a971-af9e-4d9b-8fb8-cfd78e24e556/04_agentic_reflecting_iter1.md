# Trace: agentic_reflecting_iter1
- **Run ID:** b2a4a971-af9e-4d9b-8fb8-cfd78e24e556
- **Tidspunkt:** 2026-03-23T23:28:16.215638+00:00
- **Varighet:** 99.46s
- **Input tokens:** 21860
- **Output tokens:** 5209

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
Risiko 1: Salget gjelder et dødsbo, noe som innebærer begrenset kunnskap om eiendommens tilstand. Arvingene har ikke bodd i boligen og kan ikke gi spesifikk informasjon om feil eller mangler utover det som fremkommer av salgsmaterialet.
  Confidence: 0.97
  Evidens: Selger er et dødsbo. Selv om egenerklæring er utfylt, er eierinformasjonen dermed begrenset. Takstmann fikk utlevert nøkler og var alene under befaring.; Det gjøres spesielt oppmerksom på at dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.; Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.; Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig.

Risiko 2: Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikringen normalt gir ved eventuelle krav mot selger etter overtakelse.
  Confidence: 0.95
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 3: Våtrom i leiligheten er ikke hulltatt og ikke fullt undersøkt (TGIU – Ikke undersøkt). Baderomskabin er prefabrikkert og hulltaking er unnlatt. Dette betyr at skjulte fuktskader eller konstruksjonsfeil bak våtrommet ikke kan utelukkes.
  Confidence: 0.88
  Evidens: Bygningsdeler som ikke har blitt undersøkt (TGIU): Våtrom > 7. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom; Hulltaking er ikke foretatt da dette er en prefabrikkert baderomskabin og kan unnlates i henhold til §2-2, i Forskrift til avhendingslova (tryggere bolighandel).; Bygningsdeler som er merket med TGIU er ikke blitt vurdert av takstmannen.

Risiko 4: Borettslaget har betydelig fellesgjeld (pantelån på kr 223 042 000) med avdragsfrihet frem til 29.02.2028. Etter avdragsfrihetsperioden vil felleskostnadene øke, estimert med kr 1 300,- per måned fra 29.02.2028. Dette kan påvirke kjøpers løpende kostnader vesentlig.
  Confidence: 0.95
  Evidens: Estimert økning i felleskostnader etter avdragsfrihetsperioden er over, estimert til kr. 1300,- fra 29.02.2028.; Dette er kun et estimat og endringer kan forekomme.; Pantelån 223 042 000; Første avdrag er 30/03-2028; Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene skal økes og fra hvilket tidspunkt.

Risiko 5: Borettslaget har legalpant (lovbestemt panterett) i andelen på inntil 2 ganger folketrygdens grunnbeløp (2G) for dekning av felleskostnader. Dette betyr at borettslagets krav på felleskostnader har prioritet foran alle andre heftelser, inkludert kjøpers egne lån.
  Confidence: 0.92
  Evidens: Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.; Borettslaget har en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet tvangsdekning besluttes gjennomført.; Borettslaget kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 6: Det er forkjøpsrett knyttet til andelen, både intern forkjøpsrett for beboere i borettslaget og for OBOS-medlemmer. Dette kan forsinke salgsprosessen og innebærer en risiko for at en akseptert kjøper kan bli utkonkurrert av en forkjøpsberettiget part.
  Confidence: 0.93
  Evidens: Forkjøpsrett: Det er både intern forkjøpsrett for beboerne i borettslaget, samt for OBOS-medlemmer. Ta kontakt med megler for ytterligere informasjon om forkjøpsretten.; Forhåndsvarsling forkjøpsrett: kr 8 212,00

Risiko 7: Kjøper må godkjennes av styret i borettslaget. Dersom styregodkjennelse ikke innvilges, kan kjøpet ikke gjennomføres. Dette representerer en usikkerhet for kjøper.
  Confidence: 0.9
  Evidens: Styregodkjennelse: Kjøper må godkjennes av styret.

Risiko 8: Det er eiendomsskatt på boliger i Oslo kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad for kjøper som kan variere over tid.
  Confidence: 0.82
  Evidens: I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi. Informasjonen over er hentet fra...

Risiko 9: Selger har ikke utført radonmåling av boligen. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonkonsentrasjonen i boligen.
  Confidence: 0.85
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 10: Eiendommen er del av et komplekst eierforhold med borettslag, eierseksjonssameie og tingsrettslig sameie for utomhusareal. Dette innebærer at kjøper er eksponert for kostnader og beslutninger i flere juridiske enheter, noe som kan gi uforutsette utgifter.
  Confidence: 0.88
  Evidens: Borettslaget eier seksjon 1 i Enghumla eierseksjonssameie på gnr. 83 og bnr. 536 i Oslo kommune, som er en samleseksjon for borettslagets 70 boliger.; Eierseksjonssameiet har felles grøntområde/utomhusareal på gnr. 83 og bnr. 94 sammen med øvrige borettslag og eierseksjonssameier som er etablert i prosjektet Løren Botaniske. Utomhusarealet er organisert som et tingsrettslig sameie.; Selskapets andel av driftskostnadene og årsresultatet i Børsteveien 1-11 ESEK er inntatt i resultatregnskapet under posten 'kostnader sameie'.

Risiko 11: Sameierne i eierseksjonssameiet er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, jf. eierseksjonsloven § 31. Dette innebærer at kjøper kan bli holdt ansvarlig for andres mislighold av fellesutgifter.
  Confidence: 0.87
  Evidens: I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp.

Risiko 12: Tilstandsrapporten er basert på visuelle observasjoner og enkle hjelpemidler. Skjulte konstruksjoner, etasjeskillere og andre ikke-tilgjengelige bygningsdeler er ikke undersøkt. Det kan derfor foreligge skjulte feil og mangler som ikke er avdekket.
  Confidence: 0.85
  Evidens: Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.; Det kan være avvik/skader som ikke er avdekket.; Bygningssakkyndige ser for eksempel ikke på: etasjeskillere, vanlig slitasje og normal vedlikeholdstilstand, bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig.; Rapporten er likevel ingen garanti for at det ikke kan forekomme avvik.

Risiko 13: Eiendommen ligger i et område med flere hensynssoner i kommuneplanen, blant annet H310_1 (kvikkleire), H310_2 (steinsprang), H320_1 (stormflo) og H320_2 (elveflom). Dette kan innebære naturfarerelaterte risikoer for eiendommen.
  Confidence: 0.78
  Evidens: H310_1 - Kvikkleire; H310_2 - Steinsprang; H320_1 - Stormflo; H320_2 - Elveflom; H390 - Deponi

Risiko 14: Kapitalkostnader knyttet til IN-lån (individuell nedbetaling av fellesgjeld) utgjør en svært stor andel av borettslagets inntekter (kr 12 571 890 av totalt kr 15 611 360 i 2024). Dette indikerer høy eksponering mot renteendringer og at borettslagets økonomi er sterkt avhengig av disse kapitalkostnadene.
  Confidence: 0.83
  Evidens: Kapitalkostnader 12 571 890 (2024); Innkrevde felleskostnader 3 039 470 (2024); SUM DRIFTSINNTEKTER 15 611 360 (2024); Kapitalkostnader på IN-lån 12 487 502; Pantelån 223 042 000

Dokumentkontekst:
[d043_d043 | Side [1]]
esutgifter har boligselgerforsikring.
med megler for ytterligere informasjon om sameiet legal panterett i den enkelte eierseksjon,
Tinglyste heftelser
forkjøpsretten. begrenset til inntil 2 ganger folketrygdens grunnbeløp. Boligkjøperforsikring: Kjøper har anledning til å tegne
Legalpant: Borettslaget har legalpant på inntil 2G som boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Styregodkjennelse: Kjøper må godkjennes av sikkerhet for betaling av felleskostnader. Dette betyr at Kjøper og selger er

---

[d043_d043 | Side [1]]
kkmurt teglstein og trepanel. Eiendommen har Borettslaget består av 70 andelsleiligheter. Enghumla
Alt utstyr og installasjoner som medfølger overtas slik de I forbindelse med salget er det blitt utført en personheis med adkomst garasje. Overnevnte Borettslag er registrert i Foretaksregisteret i
er, uten garanti, med mindre det foreligger en gjeldende tilstandsrapport av en bygningssakkyndig, som gir en bygningsdeler er en del av sameiets/ borettslagets Brønnøysund med organisasjons‑nummer

---

[d043_d043 | Side [1]]
rioden er over, estimert til kr. 1300,‑ fra 29.02.2028.
Dette er kun et estimat og endringer kan forekomme.
9 300,00 (Boligkjøperforsikring* (valgfritt))
8 212,00 (Forhåndsvarsling forkjøpsrett)
Eiendomsskatt
545,00 (Tinglysingsgebyr ‑ hjemmel)
545,00 (Tinglysningsgebyr ‑ pantedokument) I Oslo kommune er det eiendomsskatt på boliger og fast
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ eiendom som overstiger en fastsatt verdi. Informasjonen
9 302,00 (Omkostninger totalt (uten over er hentet fra

---

[d043_d043 | Side [1]]
ttet er private, og salg av eiendom for et dødsbo. Arvingene har begrenset
vedlikeholdsansvaret for disse påhviler sameiet. kjennskap til eiendommen, og de er derfor ikke kjent med Regelverk og generelle opplysninger
Energimerke
Adkomst til eiendommen skjer via offentlig vei. feil eller mangler Boligen selges med det inventar og utstyr som i henhold
Energikarakter: D utover det som fremkommer av salgsmaterialet. til gjeldende lover, forskrifter eller offentlige pålegg skal
Energifarge: Grønn Interessenter

---

[d043_d043 | Side [1]]
å dekning av felleskostnader og andre krav fra lagsforholdet har borettslaget en
bjelkelag, bærende veggkonstruksjoner, sluk og rør eller ledninger som er bygd inn i lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er begrenset til en
bærende konstruksjoner med unntak av varmekabler. sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet tvangsdekning
besluttes gjennomført.
(4) Andelseieren skal gi adgang til boligen slik at borettslaget kan utføre sin
vedlikeholdsplikt,

---

[d043_d043 | Side [1]]
sloven betaling av felleskostnader, og kan kreve inn pengene før eiendomshandleren. Kjøpekontrakten kan gjennomgås som gir trygghet og profesjonell juridisk hjelp dersom det
§ 4‑4. andre kreditorer, selv om de har lån registrert på andelen. hos eiendomsmegler før budet legges inn. Kontakt oppdages uventede feil eller mangler ved boligen de
eiendomsmegler for eventuelle spørsmål. neste fem årene. Les mer om Boligkjøperforsikring i
vedlagte materiell eller på https:/ /
Vedtekter/ husordensregler Vei, vann og

---

[d043_d043 | Side [1]]
riell eller på https:/ /
Vedtekter/ husordensregler Vei, vann og avløp
Selger leverer eiendommen i ryddig og rengjort stand. www.soderbergpartners.no/ eiendom/ boligkjoper/
Både vedtekter og husordensregler ligger vedlagt Eiendommen er tilknyttet offentlig vann‑ og
salgsoppgaven. avløpssystem. Stikkledningene fra eiendommen og ut til Dødsbo: Det gjøres spesielt oppmerksom på at dette er
Lovanvendelse
det kommunale nettet er private, og salg av eiendom for et dødsbo. Arvingene har

---

[d043_d043 | Side [1]]
barnehage, annen offentlig eller privat
Forsikring
tjenesteyting (kultur, helse, velvære, nærmiljøsenter), I henhold til eierseksjonsloven § 31 er sameierne
Forkjøpsrett: Det er både intern forkjøpsrett for beboerne kontor og bevertning iht. S‑5039. ansvarlige overfor sameiets kreditorer i forhold til sin Boligselgerforsikring: Selger har ikke tegnet
i borettslaget, samt for OBOS‑medlemmer. Ta kontakt sameiebrøk. Ved manglende betaling av fellesutgifter har boligselgerforsikring.
med megler for ytterligere

---

[d043_d043 | Side [1]]

Hvis din nye bolig har skjulte feil kan dette koste 
deg både tid og

---

[d043_d043 | Side [1]]
er? Se side 4.
Lovlighet Gå 琀椀l side
Andelsleilighet i boligbygg med 昀氀ere boenheter
• Det foreligger godkjente og byggemeldte tegninger, som
stemmer med dagens bruk
Spesielt for de琀琀e oppdraget/rapporten
Selger er et dødsbo. Selv om egenerklæring er u琀昀ylt, er
eierinformasjonen dermed begrenset. Takstmann 昀椀kk utlevert
nøkler og var alene under befaring.
Tiltaket er prosjektert i henhold 琀椀l Byggteknisk forskri昀琀 av 2017
(TEK17) ifølge ramme琀椀llatelse gi琀琀 21/2-2020.
Oppsummering av avvik
Vil du vite mer?

---

[d043_d043 | Side [1]]
edtekter som regulerer bruken av garasjen
 og forholdet mellom sameierne.

 (4) Eierseksjonssameiet har felles grøntområde/utomhusareal på gnr. 83 og bnr. 94
 sammen med øvrige borettslag og eierseksjonssameier som er etablert i prosjektet Løren
 Botaniske. Utomhusarealet er organisert som et tingsrettslig sameie. Bruken av


---

[d043_d043 | Side [1]]
og/ eller høy alder, noe som kan
innebære behov for utbedringer. Bygningsdeler som er Balkong Forsikring
Type takst avholdt av takstmann: Tilstandsrapport merket med TGIU er ikke blitt vurdert av takstmannen. Adkomst til nordvestvendt balkong på 7m² fra stue. Borettslagets eiendommer er forsikret i Tryg.
Forsikringen dekker bygningene og fellesareal.
Sammendrag selgers egenerklæring: Selger har ikke Beskrivelsen av boligen nedenfor er hentet direkte fra Se vedlagte tilstandsrapport for ytterligere

---

[d043_d043 | Side [1]]
den som OBOS utpeker, forkjøpsrett på beste prioritet. Ved slike eierskifter kan ikke
forkjøpsrett gjøres gjeldende av andre enn OBOS eller den som OBOS utpeker. (4) Noen andelseiere i første etasje disponerer et avgrenset utomhusareal i tilknytning til
boligen. Borettslaget kan foreta justeringer av grensene for hver boligs utomhusareal når
(5) Om sameiet i andelen som OBOS BBL har en eierandel i, oppløses i henhold til det foreligger saklig grunn til det. Andelseierne kan ikke etablere gjerder, tak,

---

[d043_d043 | Side [1]]
lse Dato Kommentar Status Sider Vedlagt
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for
Eiers egenerklæring er mo琀琀a琀琀 og den som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for andre • For skjulte konstruksjoner slik som vann og avløp uten
Egenerklæring gjennomlest. Egenerklæringen har ikke Gjennomgå琀琀 Nei tredjeparter. Rapportens

---

[d043_d043 | Side [1]]
 hentet direkte fra Se vedlagte tilstandsrapport for ytterligere informasjon Forsikringen dekker også veggfast utstyr,
bebodd eiendommen og har derfor ikke spesifikk tilstandsrapporten: om eiendommen. bygningsmessige tilleggsinnretninger og forbedringer i
kunnskap om den. Det kan derfor være skader og andre den enkelte bolig.
forhold ved eiendommen som ikke er spesifikt opplyst. Bygningsdeler som ikke har blitt undersøkt (TGIU):
Øvrig
Kjøper oppfordres derfor til å foreta en særlig grundig Våtrom > 7.

---

[d043_d043 | Side [1]]
 sammenheng med dette.

 (2) Borettslaget eier seksjon 1 i Enghumla eierseksjonssameie på gnr. 83 og bnr. 536 i
 Oslo kommune, som er en samleseksjon for borettslagets 70 boliger. I tillegg til
 boligseksjonen er det etablert en

---

[d043_d043 | Side [1]]



Dine fordeler 
− Unngå bekymring og stress 
− Spar verdifull tid
− Få advokatkostnadene dekket

---

[d043_d043 | Side [1]]
d hulltaking i bad og vaskerom
eiendomsbetegnelser, gårdsnummer, framhever normalt ikke posi琀椀ve sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
bruksnummer, eiet/festet tomt, fremgår av 琀椀lstandsgradene. eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom
Norges Eiendommer tomteareal og byggeår oppgi琀琀 ved Gjennomgå琀琀 Nei • Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand og rom under terreng kan

---

[d043_d043 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d043_d043 | Side [1]]
sjonsfarlige stoffer skjer i betryggende former og i henhold til gjeldende lover og
eller nedstigende linje eller fosterbarn av andelseieren eller ektefellen, forskrifter.
- det gjelder bruksrett til noen som har krav på det etter ekteskapslovens § 68 eller
husstandsfellesskapsloven. (5) Andelseieren skal holde boligen fri for insekter og skadedyr.
Ved mistanke om insekter og skadedyr plikter andelseieren straks å melde fra skriftlig til
Godkjenning kan i disse tilfellene bare nektes dersom brukerens

---

[d043_d043 | Side [1]]
aldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀

---

[d043_d043 | Side [1]]
grad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres

---

[d043_d043 | Side [1]]
elser.
forsikringsselskap oppgi琀琀 av 3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak. I
forretningsfører. denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2
som krever 琀椀ltak og de som ikke krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller
symptomer på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold
TILLEGGSUNDERSØKELSER
Revisjoner eller 琀椀ltak trengs i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader
på grunn av alder

---

[d043_d043 | Side [1]]
ndersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under

---

[d043_d043 | Side [1]]
 TG2
kan gis sjablongmessig anslag.
Versjon Ny versjon Kommentar BEFARINGEN
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som
1 21.10.2025 på forhold som man må regne med trenger utbedring straks eller innen bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
kort 琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
gis

---

[d043_d043 | Side [1]]
te tegninger, eller når tegninger ikke
Tegninger Gjennomgå琀琀 Nei dokumentasjon på faglig god u琀昀ørelse. stemmer med dagens bruk.
Årsberetning/regnskap Årsmøte 2025 med regnskap for 2024. Gjennomgå琀琀 Nei ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke og elektriske installasjoner i boligen dersom det er mer enn fem år
Opplysninger vedrørende

---

[d043_d043 | Side [1]]
琀椀d, det er grunn 琀椀l å varsle fare for skader
på grunn av alder eller overvåke spesielt på grunn av fare for større
skade eller følgeskade. For skjulte konstruksjoner vil alder i seg selv E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
være et symptom som kan gi TG2. For synlige konstruksjoner kan alder 琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
sammen med andre symptomer og momenter gi TG2. Avvik under TG2
kan gis sjablongmessig anslag.
Versjon Ny versjon Kommentar

---

[d043_d043 | Side [1]]
vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen

---

[d043_d043 | Side [1]]
en, uten at de琀琀e vil få betydning for valg av arealkategori. • 
b ygningsdelens alder.
• Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012
• 
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av og 2023) og veiledningen 琀椀l disse.

---

[d043_d043 | Side [1]]
01 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En

---

[d043_d043 | Side [1]]
eal. (downlights), demonteres ikke for å sjekke dampsperren bak. De琀琀e av
Bruks琀椀llat./ferdiga琀琀. Gjennomgå琀琀 Nei
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for hensyn 琀椀l bygningssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
Opplysninger vedrørende avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
eiendomsbetegnelser, gårdsnummer,

---

[d043_d043 | Side [1]]
 av sameiets/ borettslagets Brønnøysund med organisasjons‑nummer 930476919,
garanti fra produsent eller leverandør. teknisk gjennomgang av boligen og påpeker eventuelle vedlikeholdsansvar, og er ikke omfattet av denne og ligger i bydel Grunerløkka i Oslo kommune.
avvik. Rapporten, sammen med selgers egenerklæring, rapporten. Det blir ikke satt tilstandsgrad for disse
Kjøper aksepterer at det kan forekomme hull og merker er vedlagt salgsoppgaven. Det er viktig at interessenter bygningsdelene.

---

[d043_d043 | Side [1]]
r i boligen dersom det er mer enn fem år
Opplysninger vedrørende husleie, foreligger dokumentasjon på faglig god u琀昀ørelse. siden sist boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å
konsultere o昀昀entlige myndigheter eller kvali昀椀sert elektrofaglig
Forretningsfører andelsnummer, andelseiere og Gjennomgå琀琀 Nei iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS fagperson ved behov for grundigere undersøkelser.
forsikringsselskap oppgi琀琀 av 3600 gir TG 2, men som ikke

---

[d043_d043 | Side [1]]
else av eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få TG2 eller TG3
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
uten at det nødvendigvis er krav om at avviket må utbedres. De琀琀e kan
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
sikkerhet mot brann, rekkverk, trapper, osv.
Det kan være avvik/skader som ikke er

---

[d043_d043 | Side [1]]
n, rekkverk, trapper, osv.
Det kan være avvik/skader som ikke er avdekket.
Tilstandsrapporten beskriver ikke hele boligen
Hva er et anslag på utbedringskostnad? Ingen umiddelbare kostnader
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
Hva det vil koste å utbedre rom eller bygningsdeler, er et forsik琀椀g Tiltak under kr 10 000
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere • anslag basert på nåværende kvalitet,

---

[d043_d043 | Side [1]]
Gnr 83 - Bnr 537 Pb. 80 Tåsen
0301 OSLO 0801 OSLO
Beskrivelse av eiendommen
Boligblokken er oppført og gi琀琀 midler琀椀dig bruks琀椀llatelse i 2023
og ferdiga琀琀est i 2025 e琀琀er gjeldende byggeskikk og forskri昀琀er,
TEK 17. Over昀氀ater og våtrom er vurdert mot hva som må
forventes av standard som følge av bygningens alder. 30
Tilstandsanalysen har ikke avdekket noen symptomer på svikt og
avvik fra normal standard. Det er gjennomgående registrert TG 0 25
og TG 1.
20
Andelsleilighet i boligbygg med 昀氀ere boenheter -

---

[d043_d043 | Side [1]]
 琀椀l
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
Noen bygningsdeler og forhold vil den bygningssakyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av eller innen kort 琀椀d. Det er påvist funksjonssvikt eller

---

[d043_d043 | Side [1]]
 Måten bygge og regler som gjaldt på søknads琀椀dspunktet. Den Ved avvik som ikke krever umiddelbare 琀椀ltak (ingen umiddelbar kostnad) så blir TG2 markert med en lysere farge.
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
og vær og

---

[d043_d043 | Side [1]]
ring på grunnen • bygningens forveksles med et pris琀椀lbud fra en håndverker. Det kan foreligge
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og avvik og 琀椀ltak som ikke kommer frem av rapporten. Tiltak mellom kr 50 000 - 100 000
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) • Utbedringskostnad avhenger blant annet av personlige valg av

---

[d043_d043 | Side [1]]
tvise 3009, 4016 3 850
forsiktighet med å bruke beregningene som grunnlag for økonomisk planlegging eller 5017 4 000
investeringer. 5010 4 150
Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt FORKLARING AV ORD OG BEGREPER
avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene Disponible midler/arbeidskapital
skal økes og fra hvilket tidspunkt. Dersom avdragsfriheten gjelder lån hvor det er inngått Beregnes som omløpsmidler

---

[d043_d043 | Side [1]]

Vedlegg 3 16 av 27 0758 Årsregnskap 2024.pdf Vedlegg 3 17 av 27 0758 Årsregnskap 2024.pdf
118 119

## Side 61

NOTE: 1 NOTE: 2
REGNSKAPSPRINSIPPER INNKREVDE FELLESKOSTNADER
Borettslagets årsregnskap er satt opp i samsvar med regnskapslovens og god Felleskostnader 2 978 220
regnskapsskikk for små foretak samt forskrift om årsregnskap og årsberetning for Diverse 61 250
borettslag. Kapitalkostnader på IN-lån 12 487 502
Kapitalkostnader regulert på IN-lån 84 388
INNTEKTER Overført til kapitalkostnader -12 571

---

[d043_d043 | Side [1]]
gets långiver via en klientkonto, og påvirker ikke borettslagets likviditet.
Drift/vedlikehold heisanlegg -101 172
Nedbetalingene gir de andelseiere som har nedbetalt, reduksjon i rente- og
Drift/vedlikehold brannsikring -76 210
avdragsdelen av fremtidige felleskostnader. Andelseierne som har nedbetalt
Drift/vedlikehold ventilasjonsanlegg -54 123
ekstraordinært, har fått sikkerhet ved inntrederett i pantobligasjonen som borettslagets
SUM DRIFT OG VEDLIKEHOLD -445 505
långiver har tinglyst på eiendommen.

---

[d043_d043 | Side [1]]
ponible
midler er de økonomiske midlene som borettslaget har til rådighet, og de defineres som
omløpsmidler fratrukket kortsiktig gjeld. Størrelsen på de disponible midlene kan blant annet
benyttes til å vurdere om det er nødvendig å endre størrelsen på innkrevde felleskostnader som
den enkelte beboer betaler, og om det er behov for å ta opp lån eller om det er mulighet til å
betale ned ekstra på eksisterende gjeld.
DISPONIBLE MIDLER
Note 2024 2023
A. DISP. MIDLER PR. 01.01. 1 031 976 350 243
B. ENDRING I

---

[d043_d043 | Side [1]]
eholdsplikten omfatter også utvendig vedlikehold 6-2 Betaling av felleskostnader
av vinduer. (1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget kan endre
felleskostnadene med én måneds skriftlig varsel.
(2) Felles rør, ledninger, kanaler og andre felles installasjoner som går gjennom boligen,
skal borettslaget holde ved like. Borettslaget har rett til å føre nye slike installasjoner (2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til en

---

[d043_d043 | Side [1]]
rk og
Borettslaget har en avtale med OBOS om garantert Nordby og Kaffebrenneriet er hyggelige møtesteder. Ved flerbrukshall på 2.500 kvm åpnet i september. Nærmeste nabolag, Økernområdet er i stadig utvikling,
betaling av felleskostnader. OBOS garanterer for Krydderhagen finner du WB Samson, Sugar & Spice, 8 Hasle‑Løren IL holder til ved Lørenhallen og har et bredt og er spådd til å bli et av Oslos viktigste knutepunkter.
overførsel til borettslaget hver måned og overtar deretter Fish Sushi, Smoothie Zone

---

[d043_d043 | Side [1]]
ne er behandlet etter
DRIFT OG VEDLIKEHOLD
egenkapitalløsningen. Egenkapitalløsningen innebærer at individuelle nedbetalinger fra
Drift/vedlikehold bygninger -62 528
andelseiernes side inntektføres i selskapet det året nedbetalingen finner sted, og føres
Drift/vedlikehold elektro -149 874
via balansen som egenkapital. Individuelle nedbetalinger fra andelseierne går direkte
Drift/vedlikehold utvendig anlegg -1 598
videre til borettslagets långiver via en klientkonto, og påvirker ikke borettslagets

---

[d043_d043 | Side [1]]
en ligger fast og kan bare endres etter borettslagslovens kreves samtidig med pålegg om salg.
§ 5-19.
(2) Felleskostnader fremkommer ved at 50% av kostnadene fordeles likt mellom andelene, 8. Styret og dets vedtak
og 50% etter leilighetenes innbyrdes areal (hoveddelens BRA areal, eksklusive balkonger,
terrasser og lignende). 8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og to til fire andre
(3) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter nytten

---

[d043_d043 | Side [1]]
IFT OG VEDLIKEHOLD -445 505
långiver har tinglyst på eiendommen. Borettslagets beregnede forpliktelse overfor
andelseiere som har nedbetalt, fremgår som egenkapital fra IN, under noten for annen
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
egenkapital.
bygningene.
NOTE: 8
ENERGI/FYRING
Elektrisk energi -78 018
Andre fyringskostnader -60 204
SUM ENERGI / FYRING -138 222
Vedlegg 3 18 av 27 0758 Årsregnskap 2024.pdf Vedlegg 3 19 av 27 0758 Årsregnskap

---

[d043_d043 | Side [1]]
esultatregnskap gir imidlertid ikke en fullstendig oversikt over borettslagets
disponible midler ved årsskiftet. I resultatregnskapet presenteres det en oversikt over
borettslagets inntekter og kostnader. Det regnskapsmessige overskuddet tar ikke hensyn til en
del viktige økonomiske forhold som påvirker borettslagets disponible midler. Dette gjelder for
eksempel opptak og avdrag på lån, samt kjøp og salg av anleggsmidler. Borettslagets disponible
midler er de økonomiske midlene som borettslaget har til

---

[d043_d043 | Side [1]]
EKKSKONTO NOTE: 6
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører KONSULENTHONORAR
myndighetene og kan ikke disponeres fritt.
Tilleggstjenester, OBOS Eiendomsforvaltning AS -1 219
SUM KONSULENTHONORAR -1 219
INDIVIDUELL NEDBETALING AV FELLESGJELD
Borettslaget har etablert en ordning med mulighet for individuell nedbetaling av
NOTE: 7
borettslagets fellesgjeld. Individuelle nedbetalinger fra andelseierne er behandlet etter
DRIFT OG VEDLIKEHOLD
egenkapitalløsningen.

---

[d043_d043 | Side [1]]
el i Børsteveien 1-11 ESEK vises som anleggsmidler
anleggsmidler under posten "andel egenkapital i fellesanlegg".
Selskapets andel av driftskostnadene og årsresultatet i Børsteveien 1-11 ESEK er inntatt i
resultatregnskapet under posten "kostnader sameie". Andelene som er innarbeidet er fra
selskapets godkjente årsregnskap for fjoråret. Til orientering vedlegges resultat og balanse fra
fra selskapets godkjente årsregnskap for fjoråret.
Vedlegg 3 20 av 27 0758 Årsregnskap 2024.pdf Vedlegg 3 21 av 27 0758

---

[d043_d043 | Side [1]]
rbruket knyttet til lading
med et fast beløp hver måned fastsatt av styret. (5) Overlating av bruken reduserer ikke andelseierens plikter overfor borettslaget.
(9) Samtlige andeler i borettslaget disponerer en bod hver i anleggseiendommen under 4-3 Bygningsmessige arbeider
sameiet. Disse bodene kan kun omsettes/selges sammen med borettslagsandelen de er (1) En andelseier kan med styrets godkjenning gjennomføre tiltak på eiendommen som er
knyttet til, da boden ivaretar det offentliges krav til bodplass for

---

[d043_d043 | Side [1]]
for være positivt.
Alle tall er avrundet til nærmeste 50 kroner. Leverandørgjeld
Gjeld som selskapet har til leverandører av varer og tjenester.
Leilighetsnr OBOS-banken Første avdrag er 30/03-2028 Annen innkreving (kundefordringer)
Potensiell endring i felleskostnader fra 01/03-2028 Alt som ikke er felleskostnader faktureres særskilt ved behov. Vi holder oversikt over hva som
3019 500 er innbetalt og ikke-innbetalt på en egen spesifikasjon. Vi følger opp alle beløpene etter avtalen
7015, 7020 1 150 vår

---

[d043_d043 | Side [1]]
8
RESULTATREGNSKAP BALANSE
Note 2024 2023
Note Regnskap Regnskap Budsjett Budsjett EIENDELER
2024 2023 2024 2025 ANLEGGSMIDLER
DRIFTSINNTEKTER: Bygninger 12 328 941 000 328 941 000
Kapitalkostnader 12 571 890 9 756 897 12 697 968 12 155 760 Tomt 36 549 000 36 549 000
Innkrevde felleskostnader 2 3 039 470 2 670 790 3 108 032 3 167 240 Andel egenkapital i fellesanlegg 13 536 775 0
SUM DRIFTSINNTEKTER 15 611 360 12 427 687 15 806 000 15 323 000 SUM ANLEGGSMIDLER 366 026 775 365 490 000
DRIFTSKOSTNADER:

---

[d043_d043 | Side [1]]
Bruken av
  utomhusområdet og forholdet mellom sameierne er regulert i egne vedtekter.

 1-2 Forretningskontor, forretningsførsel og tilknytningsforhold
 (1) Borettslaget har forretningskontor i Oslo kommune.

  (2) Borettslaget er tilknyttet OBOS som er

---

[d043_d043 | Side [1]]
. Vi følger opp alle beløpene etter avtalen
7015, 7020 1 150 vår med selskapet.
7016, 7017 1 300
2010 1 550 NOTE: 18
7014 1 600 BORETTSINNSKUDD
2017, 3017, 4017 1 700 Opprinnelig i år 2023 -109 647 000
1009 1 750 SUM BORETTSINNSKUDD -109 647 000
1010, 2011, 6017 2 000
3011, 4011 2 050 NOTE: 19
1012 2 150 PANTSTILLELSE
3010 2 200 Av anleggets bokførte gjeld er følgende sikret ved pant:
4019, 5012 2 250
1011, 4010, 7019 2 300 Borettsinnskudd 109 647 000
6012 2 350 Pantelån 223 042 000
2012, 5011 2 400

---

[d043_d043 | Side [1]]
, som f.eks.
garasjeport, renhold av garasjeanlegget, forsikring og lignende fordeles med lik andel pr.
p-plass som disponeres.
(6) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om overlating
5-2 Borettslagets vedlikeholdsplikt av bruk betales av den andelseier som har søkt.
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så langt
plikten ikke ligger på andelseierne. Vedlikeholdsplikten omfatter også utvendig vedlikehold 6-2 Betaling av

---

[d043_d043 | Side [1]]
se (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse
Indre by (utviklingsområder)
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka
H710 - Båndlegging for regulering etter pbl.
H810_1 - Krav om felles planlegging (områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 -

---

[d043_d043 | Side [1]]
remtidig LNF-areal, eksisterende
Jernbane (tunnel), eksisterende LNF-areal, fremtidig
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende
Turvei Spredt boligbebyggelse, fremtidig
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende
T-banestasjon (ikke juridisk) Spredt fritidsbebyggelse, fremtidig
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn,

---

[d043_d043 | Side [1]]
de 70

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende ENERGIATTEST
Markagrense Havn, eksisterende
Plangrense Havn, fremtidig
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende
Sporveg, eksisterende Grønnstruktur, fremtidig
Sporveg, fremtidig Forsvaret
Jernbane (tunnel), fremtidig LNF-areal, eksisterende
Jernbane (tunnel), eksisterende

---

[d043_d043 | Side [1]]
planer: KDP-15, KDP-17
Målestokk 1:1000 – Naturmangfold innenfor kartutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 148447/ 86520750 Deres ref.:
Høydereferanser Adresse: Børsteveien 9
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 83/537
135

## Side 69

TEGNFORKLARING - REGULERING (for gjeldende

---

[d043_d043 | Side [1]]
/537
135

## Side 69

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
136
0065466
0035466
0005466
6645600
6645300
6645000
600000 600300 600600
600000 600300 600600
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 10.10.2025 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk

---

[d043_d043 | Side [1]]
https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 148447/86520750
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
137

## Side 70

Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg,

---

[d043_d043 | Side [1]]
ebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 10.10.2025 – re K g a u r le tu ri t n s g n i i t t v e e t r g ti j k e a ld ln e i r v v å e 2 rtikalnivå 1 (dvs. under bakken). I tillegg finnes det r P e la g n u e le n r s in o g r s i p g l i a n n a k le a r v t e e d t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g e e n l g ig - o i g S a to k m sin te n s s i y tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-15,

---

[d043_d043 | Side [1]]
ringsplanen ble vedtatt. Det nye sammenstilte
Dato: 10.10.2025 – re K g a u r le tu ri t n s g n i i t t v e e t r g ti j k e a ld ln e i r v v å e 1 rtikalnivå 2 (dvs. på bakkenivå). I tillegg finnes det r P e la g n u e le n r s in o g r s i p g l i a n n a k le a r v t e e d t t v a is k e sk r a d r a t g e e r n ti s lg t j e e r n r g e e n l g ig - o i g S a to k m sin te n s s i y tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-15, KDP-17
Målestokk 1:1000 – Naturmangfold innenfor

---

[d043_d043 | Side [1]]
. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 83/537
134
0045466
0035466
0025466
0045466
0035466
0025466
600200 600300 600400
600200 600300 600400
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 10.10.2025 –

---

[d043_d043 | Side [1]]
alkong beliggende på Løren i etablert boligstrøk med ny og eldre bebyggelse. Sentralt
beliggende med korte avstander 琀椀l skoler, barnehage, forretninger, nærbu琀椀kk og o昀昀entlige kommunikasjonsmidler (trikk, T-bane og buss). Kort
Befaring vei 琀椀l tur- og rekreasjonsområder og 昀氀o琀琀 park med statuer og lekeapparater.
Adkomstvei
Dato Til stede Rolle
O昀昀entlig. Private interne småveier mellom bebyggelse.
15.10.2025 Jan Berby Taks琀椀ngeniør
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig

---

[d043_d043 | Side [1]]
styrres.
      
       Hamring, boring og annet arbeid som skaper støy må skje til tider der det er til minst mulig sjenanse
for naboene. På søndager og helligdager bør støyende arbeider unngås.
      
      
Skal det arrangeres selskapelige sammenkomster i boligen bør naboene varsles på forhånd.
       Det skal være ro mellom kl 23.00 og 07.00 alle dager.
      
  

---

[d043_d043 | Side [1]]

ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med • 
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle • 
er basert på enkle visuelle observasjoner. Kan vurderes sammen med bruken, uten at de琀琀e vil få betydning for valg av arealkategori. •

---

[d043_d043 | Side [1]]
tu n a . sjon.
Bruker: FME – Gjeldende kommunedelplaner: KDP-15, KDP-17
Målestokk 1:1000 – Naturmangfold innenfor kartutsnittet. Se eget kart. Se tegnforklaring på eget ark
– Kartet er sammenstilt for: . Kan ikke brukes til byggesak.
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 148447/ 86520750 Deres ref.:
Høydereferanser Adresse: Børsteveien 9
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr:

---

[d043_d043 | Side [1]]
(områderegulering)
H810 _2 - Krav om felles planlegging
H820_1 - Omforming (kabling og høystentledninger)
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann
H190 - Andre sikringssoner
H310_1 - Kvikkleire
H310_2 - Steinsprang
H320_1 - Stormflo
H320_2 - Elveflom
H390 - Deponi
138
retkarakigrenE
vitkeffeigrenE
vitkeffeigrene
etiL
Adresse Børsteveien 9
Postnummer 0585
A
Sted OSLO
Kommunenavn Oslo B
Gårdsnummer 83 C
Bruksnummer 537 D D
Seksjonsnummer 1
E
Andelsnummer —
F Festenummer

---

[d043_d043 | Side [1]]
ofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
145

## Side 74

Primære transportmidler Varer/Tjenester
Løren Torg 5 min
1. Tog/t-bane
Apotek 1 Løren Torg 5 min
2. Egen bil
3. Buss
Aldersfordeling barn (0-18 år)
Shoppingutvalg 54% i barnehagealder
29% 6-12 år
Meget bra 87/100
10% 13-15

---

[d043_d043 | Side [1]]
on 09222115557547570809 Signert JI, SMT, AG (cid:12) Transaksjon 09222115557547570809 Signert JI, SMT, AG
132 133

## Side 68

0045466
0035466
0025466
0045466
0035466
0025466
600200 600300 600400
600200 600300 600400
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen

---

[d043_d043 | Side [1]]
kterrasser – se også borettslagets vedtekter. Merk at oppsett
av permanente løsninger kan være søknadspliktig til Plan- og bygningsetaten.
§ 4 Parkering
Parkering skal skje på anviste plasser i garasjekjeller som ligger på egen anleggseiendom. Den
som disponerer garasjeplass må følge de bestemmelser som blir vedtatt.
14 1
98 99

## Side 51

§ 5 Dyrehold § 10 Endring av husordensreglene
Det er tillatt å holde dyr så lenge dyreholdet ikke er til sjenanse for de øvrige beboerne. Dyrehold Husordensreglene kan

---

[d043_d043 | Side [1]]
yret boligseksjoner i sameiet, i henhold til eierseksjonsloven § Tidspunkt for overtakelse avtales mellom kjøper og
Regulering
fjernet hvis ikke en minnelig ordning med klageren kan 23. Seksjoner som eies av nærstående eller gjennom et selger.
oppnås. I tvilstilfeller avgir styret etter forhandling med Regulerings og arealplaner: Eiendommen er regulert til firma regnes også med.
partene hvorvidt en klage er berettiget. bolig, forretning, barnehage, annen offentlig eller privat
Forsikring
tjenesteyting

---

[d043_d043 | Side [1]]
ller
angst, kan styret kreve dyret fjernet hvis ikke en minnelig ordning med klageren kan oppnås. I
tvilstilfeller avgir styret etter forhandling med partene hvorvidt en klage er berettiget.
§ 6 Antenner
Etter søknad til styret kan det gis tillatelse til oppsetting av antenner. Det tillates ikke satt opp
parabol/ eller andre antenner som virker skjemmende eller som er skadelig for bygningene.
§ 7 Avfall
Avfallsbrønnene er kun beregnet til husholdningsavfall. Avfallsposene skal være grundig knyttet
igjen.

---

[d043_d043 | Side [1]]
ingsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d043_d043 | Side [1]]
år kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova

---

[d043_d043 | Side [1]]
g, dri昀琀 eller vedlikehold.  
 
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller • I en overgangsperiode skal rapporter som beny琀琀es i  
visuelle observasjoner. boligomsetningen eller dersom det er en del av oppdraget også opplyse   
om fordelingen mellom P-ROM og S-ROM med utgangspunkt i   
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende

---

[d043_d043 | Side [1]]
 eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen

---

[d043_d043 | Side [1]]
 som er spesialiserte på Forsikringspremien trekkes i oppgjøret. 4.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter 
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300 
og eventuelle idømte

---

[d043_d043 | Side [1]]
rementer som dyret
Lee Paulsen måtte etterlate på eiendommen.
3. Dyr må holdes borte fra lekeplasser og sandkasser.
4. Eier av dyret er ansvarlig og erstatningspliktig for
48 49

## Side 26

OM EIENDOMMEN OM EIENDOMMEN
enhver skade som dyret måtte påføre person eller Selger har ikke utført radonmåling. Det er ikke krav om
Kontrakts‑
Oppvarming
eiendom, f.eks. oppskraping av dører og karmer, skade dette med mindre boligen er helt eller delvis utleid.
på blomster, planter, grøntanlegg m.v. Leiligheten er

---

[d043_d043 | Side [1]]
 brukeren regnes som
godkjent. (7) Oppdager andelseieren skade i boligen som borettslaget er ansvarlig for å utbedre,
plikter andelseieren straks å melde fra skriftlig til borettslaget.
6 7
90 91

## Side 47

(8) Ny eier av andelen har plikt til å utføre vedlikehold medregnet reparasjon og utskifting i
boligen, selv om det skulle vært utført av den forrige andelseieren. (5) Kostnader knyttet til drift og vedlikehold av p-plass i garasjekjeller, som f.eks.
garasjeport, renhold av garasjeanlegget, forsikring

---

[d043_d043 | Side [1]]
per oppfordres derfor til å foreta en særlig grundig Våtrom > 7. etasje > Bad/ vaskerom > Tilliggende Forretningsfører: Obos forkjøp
undersøkelse av eiendommen, gjerne med bistand av konstruksjoner våtrom
informasjon
teknisk sakkyndig. Hulltaking er ikke foretatt da dette er en prefabrikkert Husdyr: Det er tillatt å holde dyr så lenge dyreholdet ikke
baderomskabin og kan unnlates i henhold til §2‑2, i er til sjenanse for de øvrige beboerne. Dyrehold tillates
Adresse
Leiligheten er såpass ny og har fortsatt

---

[d043_d043 | Side [1]]
rehold tillates
Adresse
Leiligheten er såpass ny og har fortsatt garanti på seg, Forskrift til avhendingslova (tryggere bolighandel). kun etter søknad til styret og undertegning av
leiligheten ble ferdigstilt i 2023. Jeg som arvtaker står Børsteveien 9, 0585 OSLO borettslagets dyreholdserklæring. Ved dyrehold gjelder
bak leiligheten med å selge. Våtrom > 7. etasje > Bad > Tilliggende konstruksjoner følgende bestemmelser:
våtrom Gnr. 83, bnr. 537, ideell andel 1/ 1 1. Det forutsettes at eier av dyret er

---

[d043_d043 | Side [1]]

og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500 5.
aksjebolig:

Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900

− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.

---

[d043_d043 | Side [1]]
år e琀琀er rapportdato, og kan ikke gjenbrukes ved 昀氀ere boligsalg i denne perioden.
Skjer det endringer, oppstår skader også videre på boligen, bør du som selger be om oppdatert rapport.
Oppdragsnr.: 15467-2913 Befaringsdato: 15.10.2025 Side: 2 av 17
60 61

## Side 32

Børsteveien 9, 0585 OSLO Takstmann Jan Berby MNTF Børsteveien 9, 0585 OSLO Takstmann Jan Berby MNTF
Gnr 83 - Bnr 537 Pb. 80 Tåsen Gnr 83 - Bnr 537 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om

---

[d043_d043 | Side [1]]
et på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025 hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
146 147

## Side 75

Boligkjøperforsikring


Hvis din nye bolig har skjulte feil

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Salget gjelder et dødsbo, noe som innebærer begrenset kunnskap om eiendommens tilstand. Arvingene har ikke bodd i boligen og kan ikke gi spesifikk informasjon om feil eller mangler utover det som fremkommer av salgsmaterialet.",
      "evidence": [
        "Selger er et dødsbo. Selv om egenerklæring er utfylt, er eierinformasjonen dermed begrenset. Takstmann fikk utlevert nøkler og var alene under befaring.",
        "Det gjøres spesielt oppmerksom på at dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
        "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikringen normalt gir ved eventuelle krav mot selger etter overtakelse.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Våtrom i leiligheten er ikke hulltatt og ikke fullt undersøkt (TGIU – Ikke undersøkt). Baderomskabin er prefabrikkert og hulltaking er unnlatt. Dette betyr at skjulte fuktskader eller konstruksjonsfeil bak våtrommet ikke kan utelukkes.",
      "evidence": [
        "Bygningsdeler som ikke har blitt undersøkt (TGIU): Våtrom > 7. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom",
        "Hulltaking er ikke foretatt da dette er en prefabrikkert baderomskabin og kan unnlates i henhold til §2-2, i Forskrift til avhendingslova (tryggere bolighandel).",
        "Bygningsdeler som er merket med TGIU er ikke blitt vurdert av takstmannen.",
        "Våtrom > 7. etasje > Bad > Tilliggende konstruksjoner våtrom"
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R4",
      "description": "Borettslaget har betydelig fellesgjeld (pantelån på kr 223 042 000) med avdragsfrihet frem til 29.02.2028. Etter avdragsfrihetsperioden vil felleskostnadene øke, estimert med kr 1 300,- per måned fra 29.02.2028. Dette kan påvirke kjøpers løpende kostnader vesentlig.",
      "evidence": [
        "Estimert økning i felleskostnader etter avdragsfrihetsperioden er over, estimert til kr. 1300,- fra 29.02.2028.",
        "Dette er kun et estimat og endringer kan forekomme.",
        "Pantelån 223 042 000",
        "Første avdrag er 30/03-2028",
        "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene skal økes og fra hvilket tidspunkt."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Borettslaget har legalpant (lovbestemt panterett) i andelen på inntil 2 ganger folketrygdens grunnbeløp (2G) for dekning av felleskostnader. Dette betyr at borettslagets krav på felleskostnader har prioritet foran alle andre heftelser, inkludert kjøpers egne lån.",
      "evidence": [
        "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
        "Borettslaget har en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet tvangsdekning besluttes gjennomført.",
        "Borettslaget kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Det er forkjøpsrett knyttet til andelen, både intern forkjøpsrett for beboere i borettslaget og for OBOS-medlemmer. Dette kan forsinke salgsprosessen og innebærer en risiko for at en akseptert kjøper kan bli utkonkurrert av en forkjøpsberettiget part.",
      "evidence": [
        "Forkjøpsrett: Det er både intern forkjøpsrett for beboerne i borettslaget, samt for OBOS-medlemmer. Ta kontakt med megler for ytterligere informasjon om forkjøpsretten.",
        "Forhåndsvarsling forkjøpsrett: kr 8 212,00",
        "den som OBOS utpeker, forkjøpsrett på beste prioritet. Ved slike eierskifter kan ikke forkjøpsrett gjøres gjeldende av andre enn OBOS eller den som OBOS utpeker."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R7",
      "description": "Kjøper må godkjennes av styret i borettslaget. Dersom styregodkjennelse ikke innvilges, kan kjøpet ikke gjennomføres. Dette representerer en usikkerhet for kjøper.",
      "evidence": [
        "Styregodkjennelse: Kjøper må godkjennes av styret."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Det er eiendomsskatt på boliger i Oslo kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad for kjøper som kan variere over tid.",
      "evidence": [
        "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi. Informasjonen over er hentet fra..."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R9",
      "description": "Selger har ikke utført radonmåling av boligen. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonkonsentrasjonen i boligen.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R10",
      "description": "Eiendommen er del av et komplekst eierforhold med borettslag, eierseksjonssameie og tingsrettslig sameie for utomhusareal. Dette innebærer at kjøper er eksponert for kostnader og beslutninger i flere juridiske enheter, noe som kan gi uforutsette utgifter.",
      "evidence": [
        "Borettslaget eier seksjon 1 i Enghumla eierseksjonssameie på gnr. 83 og bnr. 536 i Oslo kommune, som er en samleseksjon for borettslagets 70 boliger.",
        "Eierseksjonssameiet har felles grøntområde/utomhusareal på gnr. 83 og bnr. 94 sammen med øvrige borettslag og eierseksjonssameier som er etablert i prosjektet Løren Botaniske. Utomhusarealet er organisert som et tingsrettslig sameie.",
        "Selskapets andel av driftskostnadene og årsresultatet i Børsteveien 1-11 ESEK er inntatt i resultatregnskapet under posten 'kostnader sameie'."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Sameierne i eierseksjonssameiet er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, jf. eierseksjonsloven § 31. Dette innebærer at kjøper kan bli holdt ansvarlig for andres mislighold av fellesutgifter.",
      "evidence": [
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Tilstandsrapporten er basert på visuelle observasjoner og enkle hjelpemidler. Skjulte konstruksjoner, etasjeskillere og andre ikke-tilgjengelige bygningsdeler er ikke undersøkt. Det kan derfor foreligge skjulte feil og mangler som ikke er avdekket.",
      "evidence": [
        "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
        "Det kan være avvik/skader som ikke er avdekket.",
        "Bygningssakkyndige ser for eksempel ikke på: etasjeskillere, vanlig slitasje og normal vedlikeholdstilstand, bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig.",
        "Rapporten er likevel ingen garanti for at det ikke kan forekomme avvik."
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Eiendommen ligger i et område med flere hensynssoner i kommuneplanen, blant annet H310_1 (kvikkleire), H310_2 (steinsprang), H320_1 (stormflo) og H320_2 (elveflom). Dette kan innebære naturfarerelaterte risikoer for eiendommen.",
      "evidence": [
        "H310_1 - Kvikkleire",
        "H310_2 - Steinsprang",
        "H320_1 - Stormflo",
        "H320_2 - Elveflom",
        "H390 - Deponi"
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R14",
      "description": "Kapitalkostnader knyttet til IN-lån (individuell nedbetaling av fellesgjeld) utgjør en svært stor andel av borettslagets inntekter (kr 12 571 890 av totalt kr 15 611 360 i 2024). Dette indikerer høy eksponering mot renteendringer og at borettslagets økonomi er sterkt avhengig av disse kapitalkostnadene.",
      "evidence": [
        "Kapitalkostnader 12 571 890 (2024)",
        "Innkrevde felleskostnader 3 039 470 (2024)",
        "SUM DRIFTSINNTEKTER 15 611 360 (2024)",
        "Kapitalkostnader på IN-lån 12 487 502",
        "Pantelån 223 042 000"
      ],
      "source_documents": [
        "d043_d043"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "eiendomsskatt Oslo beløp sats 2024 2025",
    "radon helserisiko leilighet 7. etasje høyblokk",
    "hensynssoner kvikkleire steinsprang stormflo elveflom Løren Børsteveien konsekvenser",
    "borettslaget disponible midler likviditet økonomi 2024",
    "IN-lån individuell nedbetaling renteeksponering borettslag risiko",
    "styregodkjennelse borettslag avslagsgrunnlag kriterier",
    "tilstandsrapport avvik TG2 TG3 Børsteveien 9",
    "fellesgjeld andel per leilighet borettslag 223 millioner"
  ],
  "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Dødsbo (0.97):** Meget godt dokumentert med flere direkte sitater fra salgsoppgaven. Confidence opprettholdes på 0.97.\n\n**R2 – Ingen boligselgerforsikring (0.95):** Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.95.\n\n**R3 – TGIU våtrom (0.88):** Evidensen bekrefter at hulltaking er unnlatt og at tilliggende konstruksjoner ikke er undersøkt. Imidlertid er boligen ny (ferdigstilt 2023, TEK17), og tilstandsanalysen viser gjennomgående TG0 og TG1. Prefabrikkert baderomskabin er en lovlig unntagelse etter forskriften. Risikoen er reell men noe redusert av boligens unge alder. Confidence justeres ned til 0.82.\n\n**R4 – Fellesgjeld og avdragsfrihet (0.95):** Meget godt dokumentert med konkrete tall. Første avdrag er 30/03-2028 (ikke 29.02.2028 som angitt i risikobeskrivelsen – en liten unøyaktighet). Confidence opprettholdes på 0.95.\n\n**R5 – Legalpant 2G (0.92):** Godt dokumentert. Dette er en standardbestemmelse i borettslag, men viktig å kjenne til. Confidence opprettholdes på 0.92.\n\n**R6 – Forkjøpsrett (0.93):** Godt dokumentert med både intern og OBOS-forkjøpsrett. Confidence opprettholdes på 0.93.\n\n**R7 – Styregodkjennelse (0.88):** Bekreftet i dokumentet, men evidensen er knapp (kun én setning). Confidence justeres ned til 0.88 (uendret, men noteres at mer kontekst om avslagsgrunnlag mangler).\n\n**R8 – Eiendomsskatt (0.82):** Evidensen er svak – kun en generell omtale uten konkrete beløp eller satser. Det er uklart om denne boligen faktisk overstiger terskelverdien. Confidence justeres ned til 0.70.\n\n**R9 – Radonmåling (0.85):** Bekreftet i dokumentet. Boligen er i 7. etasje, noe som typisk gir lavere radonkonsentrasjon enn boliger i bakkeplan. Risikoen er reell men noe redusert av etasjeplassering. Confidence justeres ned til 0.72.\n\n**R10 – Komplekst eierforhold (0.88):** Godt dokumentert med tre juridiske nivåer. Confidence opprettholdes på 0.88.\n\n**R11 – Solidaransvar eierseksjonssameie (0.87):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.87.\n\n**R12 – Begrensninger i tilstandsrapport (0.85):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**R13 – Hensynssoner naturfarer (0.78):** Hensynssonene er bekreftet i kommuneplankartet, men det er uklart om disse faktisk berører den aktuelle eiendommen direkte eller kun er i nærheten. Hensynssoner i kommuneplanen dekker ofte større områder. Confidence justeres ned til 0.65.\n\n**R14 – Kapitalkostnader IN-lån (0.83):** Tallene er bekreftet i regnskapet. Imidlertid er dette en regnskapsteknisk presentasjon – IN-lån-betalingene går direkte til långiver og påvirker ikke borettslagets likviditet. Risikoen er mer knyttet til renteeksponering på fellesgjelden enn til borettslagets driftsøkonomi. Confidence justeres ned til 0.75.\n\n**Manglende risikoer identifisert:**\n- Boligen er ny (2023/TEK17) med garanti – garantiperioder og hva som dekkes bør undersøkes nærmere.\n- OBOS-garantiordning for felleskostnader er nevnt, men omfang og betingelser er ikke fullt klarlagt.\n- Fellesgjeld per andel er ikke eksplisitt beregnet (223 042 000 / 70 andeler ≈ kr 3 186 314 per andel) – dette er en vesentlig risiko som burde vært tydeligere fremhevet.\n- Deponi (H390) er nevnt i hensynssonene men ikke kommentert som risiko.\n"
}

## Raw Response
```json
{
  "id": "msg_01TagtaKzf98R3bzzRGSuUdR",
  "container": null,
  "content": [
    {
      "id": "toolu_01DhPs6Cmp46gvjsVtp9psrq",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Salget gjelder et dødsbo, noe som innebærer begrenset kunnskap om eiendommens tilstand. Arvingene har ikke bodd i boligen og kan ikke gi spesifikk informasjon om feil eller mangler utover det som fremkommer av salgsmaterialet.",
            "evidence": [
              "Selger er et dødsbo. Selv om egenerklæring er utfylt, er eierinformasjonen dermed begrenset. Takstmann fikk utlevert nøkler og var alene under befaring.",
              "Det gjøres spesielt oppmerksom på at dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
              "Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med bistand av teknisk sakkyndig."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikringen normalt gir ved eventuelle krav mot selger etter overtakelse.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Våtrom i leiligheten er ikke hulltatt og ikke fullt undersøkt (TGIU – Ikke undersøkt). Baderomskabin er prefabrikkert og hulltaking er unnlatt. Dette betyr at skjulte fuktskader eller konstruksjonsfeil bak våtrommet ikke kan utelukkes.",
            "evidence": [
              "Bygningsdeler som ikke har blitt undersøkt (TGIU): Våtrom > 7. etasje > Bad/ vaskerom > Tilliggende konstruksjoner våtrom",
              "Hulltaking er ikke foretatt da dette er en prefabrikkert baderomskabin og kan unnlates i henhold til §2-2, i Forskrift til avhendingslova (tryggere bolighandel).",
              "Bygningsdeler som er merket med TGIU er ikke blitt vurdert av takstmannen.",
              "Våtrom > 7. etasje > Bad > Tilliggende konstruksjoner våtrom"
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R4",
            "description": "Borettslaget har betydelig fellesgjeld (pantelån på kr 223 042 000) med avdragsfrihet frem til 29.02.2028. Etter avdragsfrihetsperioden vil felleskostnadene øke, estimert med kr 1 300,- per måned fra 29.02.2028. Dette kan påvirke kjøpers løpende kostnader vesentlig.",
            "evidence": [
              "Estimert økning i felleskostnader etter avdragsfrihetsperioden er over, estimert til kr. 1300,- fra 29.02.2028.",
              "Dette er kun et estimat og endringer kan forekomme.",
              "Pantelån 223 042 000",
              "Første avdrag er 30/03-2028",
              "Det understrekes at felleskostnadene i et borettslag ikke nødvendigvis vil øke fra det tidspunkt avdragene begynner å løpe. Det er borettslagets styre som bestemmer om felleskostnadene skal økes og fra hvilket tidspunkt."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Borettslaget har legalpant (lovbestemt panterett) i andelen på inntil 2 ganger folketrygdens grunnbeløp (2G) for dekning av felleskostnader. Dette betyr at borettslagets krav på felleskostnader har prioritet foran alle andre heftelser, inkludert kjøpers egne lån.",
            "evidence": [
              "Legalpant: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader.",
              "Borettslaget har en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på tidspunktet tvangsdekning besluttes gjennomført.",
              "Borettslaget kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Det er forkjøpsrett knyttet til andelen, både intern forkjøpsrett for beboere i borettslaget og for OBOS-medlemmer. Dette kan forsinke salgsprosessen og innebærer en risiko for at en akseptert kjøper kan bli utkonkurrert av en forkjøpsberettiget part.",
            "evidence": [
              "Forkjøpsrett: Det er både intern forkjøpsrett for beboerne i borettslaget, samt for OBOS-medlemmer. Ta kontakt med megler for ytterligere informasjon om forkjøpsretten.",
              "Forhåndsvarsling forkjøpsrett: kr 8 212,00",
              "den som OBOS utpeker, forkjøpsrett på beste prioritet. Ved slike eierskifter kan ikke forkjøpsrett gjøres gjeldende av andre enn OBOS eller den som OBOS utpeker."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R7",
            "description": "Kjøper må godkjennes av styret i borettslaget. Dersom styregodkjennelse ikke innvilges, kan kjøpet ikke gjennomføres. Dette representerer en usikkerhet for kjøper.",
            "evidence": [
              "Styregodkjennelse: Kjøper må godkjennes av styret."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Det er eiendomsskatt på boliger i Oslo kommune som overstiger en fastsatt verdi. Dette er en løpende kostnad for kjøper som kan variere over tid.",
            "evidence": [
              "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi. Informasjonen over er hentet fra..."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R9",
            "description": "Selger har ikke utført radonmåling av boligen. Radon kan utgjøre en helserisiko, og manglende måling gir kjøper usikkerhet om radonkonsentrasjonen i boligen.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R10",
            "description": "Eiendommen er del av et komplekst eierforhold med borettslag, eierseksjonssameie og tingsrettslig sameie for utomhusareal. Dette innebærer at kjøper er eksponert for kostnader og beslutninger i flere juridiske enheter, noe som kan gi uforutsette utgifter.",
            "evidence": [
              "Borettslaget eier seksjon 1 i Enghumla eierseksjonssameie på gnr. 83 og bnr. 536 i Oslo kommune, som er en samleseksjon for borettslagets 70 boliger.",
              "Eierseksjonssameiet har felles grøntområde/utomhusareal på gnr. 83 og bnr. 94 sammen med øvrige borettslag og eierseksjonssameier som er etablert i prosjektet Løren Botaniske. Utomhusarealet er organisert som et tingsrettslig sameie.",
              "Selskapets andel av driftskostnadene og årsresultatet i Børsteveien 1-11 ESEK er inntatt i resultatregnskapet under posten 'kostnader sameie'."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Sameierne i eierseksjonssameiet er solidarisk ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk, jf. eierseksjonsloven § 31. Dette innebærer at kjøper kan bli holdt ansvarlig for andres mislighold av fellesutgifter.",
            "evidence": [
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Tilstandsrapporten er basert på visuelle observasjoner og enkle hjelpemidler. Skjulte konstruksjoner, etasjeskillere og andre ikke-tilgjengelige bygningsdeler er ikke undersøkt. Det kan derfor foreligge skjulte feil og mangler som ikke er avdekket.",
            "evidence": [
              "Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
              "Det kan være avvik/skader som ikke er avdekket.",
              "Bygningssakkyndige ser for eksempel ikke på: etasjeskillere, vanlig slitasje og normal vedlikeholdstilstand, bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig.",
              "Rapporten er likevel ingen garanti for at det ikke kan forekomme avvik."
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Eiendommen ligger i et område med flere hensynssoner i kommuneplanen, blant annet H310_1 (kvikkleire), H310_2 (steinsprang), H320_1 (stormflo) og H320_2 (elveflom). Dette kan innebære naturfarerelaterte risikoer for eiendommen.",
            "evidence": [
              "H310_1 - Kvikkleire",
              "H310_2 - Steinsprang",
              "H320_1 - Stormflo",
              "H320_2 - Elveflom",
              "H390 - Deponi"
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R14",
            "description": "Kapitalkostnader knyttet til IN-lån (individuell nedbetaling av fellesgjeld) utgjør en svært stor andel av borettslagets inntekter (kr 12 571 890 av totalt kr 15 611 360 i 2024). Dette indikerer høy eksponering mot renteendringer og at borettslagets økonomi er sterkt avhengig av disse kapitalkostnadene.",
            "evidence": [
              "Kapitalkostnader 12 571 890 (2024)",
              "Innkrevde felleskostnader 3 039 470 (2024)",
              "SUM DRIFTSINNTEKTER 15 611 360 (2024)",
              "Kapitalkostnader på IN-lån 12 487 502",
              "Pantelån 223 042 000"
            ],
            "source_documents": [
              "d043_d043"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "eiendomsskatt Oslo beløp sats 2024 2025",
          "radon helserisiko leilighet 7. etasje høyblokk",
          "hensynssoner kvikkleire steinsprang stormflo elveflom Løren Børsteveien konsekvenser",
          "borettslaget disponible midler likviditet økonomi 2024",
          "IN-lån individuell nedbetaling renteeksponering borettslag risiko",
          "styregodkjennelse borettslag avslagsgrunnlag kriterier",
          "tilstandsrapport avvik TG2 TG3 Børsteveien 9",
          "fellesgjeld andel per leilighet borettslag 223 millioner"
        ],
        "reasoning": "\nGjennomgang av alle 14 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Dødsbo (0.97):** Meget godt dokumentert med flere direkte sitater fra salgsoppgaven. Confidence opprettholdes på 0.97.\n\n**R2 – Ingen boligselgerforsikring (0.95):** Direkte bekreftet i dokumentet. Confidence opprettholdes på 0.95.\n\n**R3 – TGIU våtrom (0.88):** Evidensen bekrefter at hulltaking er unnlatt og at tilliggende konstruksjoner ikke er undersøkt. Imidlertid er boligen ny (ferdigstilt 2023, TEK17), og tilstandsanalysen viser gjennomgående TG0 og TG1. Prefabrikkert baderomskabin er en lovlig unntagelse etter forskriften. Risikoen er reell men noe redusert av boligens unge alder. Confidence justeres ned til 0.82.\n\n**R4 – Fellesgjeld og avdragsfrihet (0.95):** Meget godt dokumentert med konkrete tall. Første avdrag er 30/03-2028 (ikke 29.02.2028 som angitt i risikobeskrivelsen – en liten unøyaktighet). Confidence opprettholdes på 0.95.\n\n**R5 – Legalpant 2G (0.92):** Godt dokumentert. Dette er en standardbestemmelse i borettslag, men viktig å kjenne til. Confidence opprettholdes på 0.92.\n\n**R6 – Forkjøpsrett (0.93):** Godt dokumentert med både intern og OBOS-forkjøpsrett. Confidence opprettholdes på 0.93.\n\n**R7 – Styregodkjennelse (0.88):** Bekreftet i dokumentet, men evidensen er knapp (kun én setning). Confidence justeres ned til 0.88 (uendret, men noteres at mer kontekst om avslagsgrunnlag mangler).\n\n**R8 – Eiendomsskatt (0.82):** Evidensen er svak – kun en generell omtale uten konkrete beløp eller satser. Det er uklart om denne boligen faktisk overstiger terskelverdien. Confidence justeres ned til 0.70.\n\n**R9 – Radonmåling (0.85):** Bekreftet i dokumentet. Boligen er i 7. etasje, noe som typisk gir lavere radonkonsentrasjon enn boliger i bakkeplan. Risikoen er reell men noe redusert av etasjeplassering. Confidence justeres ned til 0.72.\n\n**R10 – Komplekst eierforhold (0.88):** Godt dokumentert med tre juridiske nivåer. Confidence opprettholdes på 0.88.\n\n**R11 – Solidaransvar eierseksjonssameie (0.87):** Direkte bekreftet med lovhenvisning. Confidence opprettholdes på 0.87.\n\n**R12 – Begrensninger i tilstandsrapport (0.85):** Godt dokumentert. Confidence opprettholdes på 0.85.\n\n**R13 – Hensynssoner naturfarer (0.78):** Hensynssonene er bekreftet i kommuneplankartet, men det er uklart om disse faktisk berører den aktuelle eiendommen direkte eller kun er i nærheten. Hensynssoner i kommuneplanen dekker ofte større områder. Confidence justeres ned til 0.65.\n\n**R14 – Kapitalkostnader IN-lån (0.83):** Tallene er bekreftet i regnskapet. Imidlertid er dette en regnskapsteknisk presentasjon – IN-lån-betalingene går direkte til långiver og påvirker ikke borettslagets likviditet. Risikoen er mer knyttet til renteeksponering på fellesgjelden enn til borettslagets driftsøkonomi. Confidence justeres ned til 0.75.\n\n**Manglende risikoer identifisert:**\n- Boligen er ny (2023/TEK17) med garanti – garantiperioder og hva som dekkes bør undersøkes nærmere.\n- OBOS-garantiordning for felleskostnader er nevnt, men omfang og betingelser er ikke fullt klarlagt.\n- Fellesgjeld per andel er ikke eksplisitt beregnet (223 042 000 / 70 andeler ≈ kr 3 186 314 per andel) – dette er en vesentlig risiko som burde vært tydeligere fremhevet.\n- Deponi (H390) er nevnt i hensynssonene men ikke kommentert som risiko.\n"
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
    "input_tokens": 21860,
    "output_tokens": 5209,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
