# Trace: agentic_reflecting_iter1
- **Run ID:** 4e23bda7-cda0-4341-b979-c0c0d9a156f0
- **Tidspunkt:** 2026-03-24T00:03:12.105917+00:00
- **Varighet:** 74.62s
- **Input tokens:** 18601
- **Output tokens:** 4456

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
Risiko 1: Manglende membran på baderomsvegger – ukjent fuktsikring
  Confidence: 0.95
  Evidens: Det er ukjent om det er noen form for membran på veggene.; Manglende dokumentasjon medfører usikkerhet om fuktsikringen er tilstrekkelig, noe som kan øke risikoen for fuktskader.; Det bør gjennomføres nærmere undersøkelser for å avklare om det er etablert membran på veggene.

Risiko 2: Avvik i fallforhold til sluk på våtrom – ikke i henhold til krav
  Confidence: 0.95
  Evidens: Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.; Det er påvist avvik i krav til høydeforskjell/fall-løsning på våtrommet.; Fra høyeste punkt ved døråpning er det tilnærmet flatt frem til sone rundt sluket.

Risiko 3: Ufaglært arbeid utført i boligen – servantskap og dusjkabinett
  Confidence: 0.92
  Evidens: Servantskap ble satt opp av onkelen min som er snekker.; Dusjkabinett ble satt opp [av ufaglært].; det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.

Risiko 4: Manglende komfyrvakt på kjøkkenet – avvik fra krav
  Confidence: 0.93
  Evidens: Det er ikke montert komfyrvakt i kjøkkenet som er krav på dette kjøkkenet ut ifra alder.; Det bør monteres komfyrvakt i kjøkkenet, da dette er [krav].

Risiko 5: Manglende samsvarserklæring for elektrisk anlegg
  Confidence: 0.9
  Evidens: det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.; Begrenset kontroll av det elektriske anlegget.; Ved kjøp av nytt hus/leilighet bør det gjennomføres en elektrisk tilstandskontroll.

Risiko 6: Avvik i kullfilterventilasjon/mekanisk avtrekk fra kokesone på kjøkken
  Confidence: 0.88
  Evidens: Det er påvist avvik i krav til kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen.; Det er vanskelig å etablere andre løsninger. Det bør vurderes [tiltak].

Risiko 7: Hensynssoner for steinsprang og elveflom på eiendommen
  Confidence: 0.92
  Evidens: Hensynssone H310_2: Steinsprang; Hensynssone H320_2: Elveflom; Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned.

Risiko 8: Ingen radonmåling er utført av selger
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling.; Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Er det foretatt radonmåling? Nei

Risiko 9: Fellesgjeld med flytende rente – risiko for økte felleskostnader
  Confidence: 0.87
  Evidens: Renteutgifter på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.; Styret kan også endre felleskostnadene med én måneds skriftlig varsel.; I henhold til vedtektene kan styret endre felleskostnadene med én måneds skriftlig varsel.

Risiko 10: Negativ bokført egenkapital i borettslaget
  Confidence: 0.82
  Evidens: Balansen viser en negativ bokført egenkapital, men styret vurderer den faktiske egenkapitalen til å være positiv, da eiendelene er [høyere enn bokført verdi].; Styret vurderer den reelle verdien av eiendelene til å være betydelig høyere enn den bokførte verdien.

Risiko 11: Oslo kommunes særskilte forkjøpsrett for spesialleiligheter tilpasset bevegelseshemmede
  Confidence: 0.9
  Evidens: Borettslaget har ni spesialleiligheter tilpasset bevegelseshemmede, hvor det stilles særskilte krav til eier.; For disse ni leilighetene har Oslo kommune en spesiell forkjøpsrett som går foran all annen forkjøpsrett.; Dersom en andel til en spesialleilighet ønskes overdratt har Oslo Kommune forkjøpsrett.

Risiko 12: Eldre stråleovn på badet – potensiell sikkerhetsrisiko og utdatert oppvarming
  Confidence: 0.72
  Evidens: Det er en eldre stråleovn på badet.

Risiko 13: Manglende lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum
  Confidence: 0.78
  Evidens: Det bør monteres lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum.

Risiko 14: Skjulte feil og mangler kan ikke utelukkes – begrenset undersøkelsesnivå i tilstandsrapporten
  Confidence: 0.85
  Evidens: Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.; Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.; Det kan være avvik/skader som ikke er avdekket.

Risiko 15: Tinglyste heftelser og bestemmelser om vann/kloakkledninger som ikke kan slettes uten samtykke fra kommunen
  Confidence: 0.8
  Evidens: 1981/34389-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen; 1981/34391-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen; 1981/34399-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN.

Dokumentkontekst:
[d047_d047 | Side [1]]
. Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje,

---

[d047_d047 | Side [1]]
rklæring med informasjon om bruk av
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. BEFARINGEN AREALBEREGNING FOR BOENHETER personopplysninger og dine re琀紀gheter 昀椀nner du her Personvernerklæring
Rapporten gir en vurdering av byggverk og bygningsdeler som - iVerdi
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
forhold som man må regne med trenger utbedring straks eller innen kort avhendingsloven.

---

[d047_d047 | Side [1]]
ar
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende

---

[d047_d047 | Side [1]]
enger du å vite om 琀椀lstandsrapporten De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn

---

[d047_d047 | Side [1]]
e med trenger utbedring straks eller innen kort avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan • Areal fastse琀琀es e琀琀er Forskri昀琀 琀椀l avhendingsloven og Norsk Standard
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk 3940 Areal- og volum-beregninger av bygninger fra 2023.
sjablongmessig anslag. 琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l 3, DELING AV PERSONOPPLYSNINGER

---

[d047_d047 | Side [1]]
ing, sikkerhet, for eksempel UTTRYKK OG DEFINISJONER eiendommens verdi.
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
• Rom som ligger utenfor boenheten, men som eier har påvist og/eller
• Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova • For skjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er • Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller opplyst at 琀椀lhører boenheten, er oppmålt og

---

[d047_d047 | Side [1]]
rem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle

---

[d047_d047 | Side [1]]
es sammen med • Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 og
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som e琀琀er NS bygningsdelens alder. 2023) og veiledningen 琀椀l disse.
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare 琀椀ltak. I
denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2 som
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av et
krever 琀椀ltak og de som ikke krever umiddelbare 琀椀ltak.
byggverk fortsa琀琀 vil være

---

[d047_d047 | Side [1]]
om og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren

---

[d047_d047 | Side [1]]
unktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere

---

[d047_d047 | Side [1]]
t også opplyse om fordelingen
琀椀lstandsgradene. Avhendingsloven. observasjoner. mellom P-ROM og S-ROM med utgangspunkt i de昀椀nisjonene som
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand fremkommer av veiledningen 琀椀l Norsk Standard 3940 Areal- og volum-
blant annet vurdert ut fra alder og normal bruk slik: • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke foreligger • Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende beregninger av bygninger

---

[d047_d047 | Side [1]]
ndigvis betyr at bygningsdeler under er uten at det nødvendigvis er krav om at avviket må utbedres. De琀琀e kan IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder Det kan være avvik/skader som ikke er avdekket.
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
Informasjon om utbedringskostnader Tiltak under kr 20 000
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
Utbedringskostnadene i

---

[d047_d047 | Side [1]]
 琀椀l bygningens
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom • Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, forvaltning, dri昀琀 eller vedlikehold.
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje) sopp og skadedyr.
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller

---

[d047_d047 | Side [1]]
installasjoner i boligen dersom det er mer enn fem år siden sist risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede -ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å konsultere kjellervegger og eventuelt i oppforede kjellergulv. teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
nødvendig. TG1 kan gis når bygningsdelen

---

[d047_d047 | Side [1]]
 som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og • I en overgangsperiode skal rapporter som beny琀琀es i boligomsetningen
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l • Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle eller dersom det er en del av oppdraget også opplyse om fordelingen
琀椀lstandsgradene. Avhendingsloven.

---

[d047_d047 | Side [1]]
t er påvist avvik i fallforhold 琀椀l sluk i forhold 琀椀l krav
bruk og gi 琀椀lbakemelding 琀椀l takstmannen hvis det 昀椀nnes
TG1: Mindre eller moderate avvik feil/mangler som bør re琀琀es opp. i forskri昀琀 på bygge琀椀dspunktet.
Det er påvist avvik i krav 琀椀l høydeforskjell/fall-løsning
TG2: Avvik som kan kreve 琀椀ltak Det er ikke 昀氀y琀琀et på gjenstander under befaring og det er ikke
på våtrommet.
TG3: Store eller alvorlige avvik kontrollert for skjulte feil og mangler eller u琀昀ørt inngrep i
konstruksjonene. Fra høyeste

---

[d047_d047 | Side [1]]
ngGå til side
琀椀lstandsvurdert, men kun beskrevet.
Det er påvist andre avvik:
Takstmannen tar forbehold om at opplysninger gi琀琀 av Det er ukjent om det er noen form for membran på
hjemmelshaver, eier eller kjentmann er korrekte. I 琀椀llegg veggene.
inneholder 琀椀lstandsrapporten opplysninger gi琀琀 av
hjemmelshaver.
Våtrom > Etasje > Bad > Over昀氀ater Gulv Gå til side
Kunden/rekvirenten skal lese gjennom 琀椀lstandsrapporten før
TG0: Ingen avvik Det er påvist avvik i fallforhold 琀椀l sluk i forhold 琀椀l krav
bruk

---

[d047_d047 | Side [1]]
ld i materiale eller i bakenforliggende beregninger av bygninger fra 2012. Fordelingen mellom P-ROM og S-ROM
godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med konstruksjon ved bruk av egnet måleutstyr (blant annet hammerelektrode er basert på veiledningen og bygningssakkyndiges eget skjønn. P-ROM er
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må bygningsdelen dagens bruk. og pigger). måleverdige rom som beny琀琀es 琀椀l kort eller langt opphold. S-ROM er
være 琀椀lnærmet ny,

---

[d047_d047 | Side [1]]
g slukking av brann
De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål som fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse spørsmålene i
bransjestandarden NS3600. De琀琀e kan ikke sammenlignes med en fullstendig kontroll av branntekniske forhold av o昀昀entlig myndighet, eller en vurdering
av boligens branntekniske forhold eller prosjektering fra en rådgiver med spesialkompetanse. En bygningssakkyndig har verken kompetanse 琀椀l å gi slik
veiledning eller lov 琀椀l å foreta en slik

---

[d047_d047 | Side [1]]
isponeres av
Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk • Fastmonterte installasjoner, for eksempel innfelt belysning (downlights), • Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved omsetning av bolig), demonteres ikke for å sjekke dampsperren bak. De琀琀e av hensyn 琀椀l byggverk eller en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse

---

[d047_d047 | Side [1]]
t med utekatt. dekket ved overføring fra egenkapitalen. Balansen viser Det er en eldre stråleovn på badet. Tinglyste heftelser og rettigheter: Følgende tinglyste
Hunder skal føres i bånd på borettslagets område. Utleie en negativ bokført egenkapital, men styret vurderer den heftelser følger eiendommen ved salg, og ved inngivelse
(bruksoverlating) krever godkjenning fra styret og er faktiske egenkapitalen til å være positiv, da eiendelene er Dersom beboelsesrom ikke har vegg‑ eller fastmonterte av bud vil

---

[d047_d047 | Side [1]]
ene.
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets vedtekter.
Særskilte begrensninger/klausuler: Se boligselskapets vedtekter.
Dyrehold: se vedtekter/husordensreglene 琀椀l Boligsameiet Versjon Ny versjon Kommentar
Egen P-plass i felles garasjeanlegg. 1 08.01.2026
Se grunnbokutskri昀琀 for 琀椀nglyste servitu琀琀er og he昀琀elser.
For gyldighet på rapporten se forside
Forkjøpsre琀琀
Det gjøres oppmerksom på at denne leiligheten er 琀椀lre琀琀elagt for brukere med nedsa琀琀 bevegelighet og kalles

---

[d047_d047 | Side [1]]
tskifting av skilting i hele borettslaget.
36 37

## Side 20

OM EIENDOMMEN OM EIENDOMMEN
‑ Hensynssone H310_2: Steinsprang
Info energiklasse
Det er også vedtatt å bygge en sykkelsløyfe på området, Forkjøpsrett: Forkjøpsretten avklares parallelt med salget. ‑ Hensynssone H320_2: Elveflom
et prosjekt som er eksternt finansiert og ikke medfører Konferer megler. Alle eiendommer som selges eller leies ut, skal ha
kostnader for borettslaget. energiattest. Unntak gjelder blant annet for frittstående Området er

---

[d047_d047 | Side [1]]
nde eiendommen?
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
Det gjøres oppmerksom på at denne leiligheten er tilrettelagt for brukere med nedsatt bevegelighet og

---

[d047_d047 | Side [1]]
eiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22

---

[d047_d047 | Side [1]]
pet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: HOT

---

[d047_d047 | Side [1]]
en: VEKET FOR: PANTEDOKUMENT 2003/ 85067‑1
38 39

## Side 21

OM EIENDOMMEN OM EIENDOMMEN
med i handelen. Gjennomføring av handelen er betinget avhendingsloven begrenset oppad kr. 20 000 000,‑.
Radonmåling
1981/ 34389‑1/ 105 29.12.1981 BEST. OM VANN/ av det ikke er tinglyst heftelser som ikke lar seg innfri/ Egenerklæringsskjema er vedlagt salgsoppgaven og
KLOAKKLEDN. slette. Selger har ikke utført radonmåling. Det er ikke krav om interessenter oppfordres til å gjennomgå denne før bud
Kan ikke slettes uten

---

[d047_d047 | Side [1]]
nen vedlikeholdsansvaret for disse påhviler borettslaget. Selger leverer eiendommen i ryddig og rengjort stand. En standard tilbehørsliste utarbeidet av Norges
GJELDER DENNE REGISTERENHETEN MED FLERE Adkomst til eiendommen skjer via offentlig til privat vei. Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
gjelder som utgangspunkt for hva som inkluderes i salget
Kontrakts‑
1981/ 34399‑1/ 105 29.12.1981 BEST. OM VANN/ – med mindre avvik er tydelig avtalt mellom kjøper og
Utleie
KLOAKKLEDN.

---

[d047_d047 | Side [1]]
gg, Naturvernområde, Spesialområde bevaring
Tegninger 04.01.2026 Gjennomgå琀琀 Nei
Om tomten
Felles eiet tomt i bore琀琀slaget på 40296,5 m2. Tomten er opparbeidet med beplantning, plen, områder for lek og opphold. Asfalterte interne
veier og parkeringsarealer. Eiendommen ligger i rela琀椀vt skrånende terreng.
Revisjoner
Tinglyste/andre forhold
Det er forkjøpsre琀琀 og styregodkjenning ved kjøp av boligen. Se info fra forretningsfører og vedtektene.
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets

---

[d047_d047 | Side [1]]
jøpsrett som går foran all annen forkjøpsrett. kjent med punkter Eiendommen omfattes også av følgende planer: FORHØYET TIL NOK 35,338,800
Punkt 2‑2 (2) Bebyggelsesplan 12779, vedtatt 03.05.1979. ** PRIORITETSBESTEMMELSE
Forretningsfører: Obos forkjøp Punkt 3‑5 Endret reguleringsplan V060181, vedtatt 06.01.1981. Prioritet etter kr 2.800.000 Storebrand
Punkt 4‑3 (6) Kommuneplan 2015‑2030, vedtatt 23.09.2015. ** PRIORITETSBESTEMMELSE
Borettslagets forsikringsselskap: If Skadeforsikring Kommunedelplan KDP‑17

---

[d047_d047 | Side [1]]
N. borettslaget har prioritet over tinglyste lån når det gjelder dekning av felleskostnader og andre krav fra Boligen selges med det inventar og utstyr som i henhold
Kan ikke slettes uten samtykke fra kommunen betaling av felleskostnader, og kan kreve inn pengene før borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. til gjeldende lover, forskrifter eller offentlige pålegg skal
andre kreditorer, selv om de har lån registrert på andelen. følge med eiendommen, jf. avhendingsloven § 3‑4.
1981/

---

[d047_d047 | Side [1]]
HUSBANKEN SOM TIL ENHVER TID HVILER PÅ
ansiennitet. Borettslaget har ni spesialleiligheter tilpasset byggeområde for boliger i henhold til reguleringsplan EIENDOMMEN
Vedtekter/ husordensregler
bevegelseshemmede, hvor det stilles særskilte krav til S‑2387, vedtatt 23.04.1979. GJELDER DENNE REGISTERENHETEN MED FLERE
eier. For disse ni leilighetene har Oslo kommune en Vedlagt salgsoppgaven. Kjøper må gjøre seg spesielt ** FORHØYELSE
spesiell forkjøpsrett som går foran all annen forkjøpsrett. kjent med punkter

---

[d047_d047 | Side [1]]
r. Egenerklæring Nei
gjennomgå琀琀
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger. Grunnbokutskri昀琀 17.12.2025 Gjennomgå琀琀 Nei
Regulering
Ikke
Megler Nei
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er gjeldende: gjennomgå琀琀
V060181 Vedta琀琀: 06.01.1981, Formål: Barnehage m.琀椀lh.anlegg, Bolig m.琀椀lh. anlegg kan 昀椀nnes på Oslo Kommune sin
Reguleringsplaner 03.01.2026 Gjennomgå琀琀 Nei
12779 Vedta琀琀: 03.05.1979, Formål: Annet

---

[d047_d047 | Side [1]]
r oppfordres til å gjennomgå denne før bud
Kan ikke slettes uten samtykke fra kommunen dette med mindre boligen er helt eller delvis utleid. inngis.
Dersom eiendommen skulle bli overbeheftet i
1981/ 34391‑1/ 105 29.12.1981 BEST. OM VANN/ salgsprosessen, det vil si at summen av fremtidige Boligkjøperforsikring: Kjøper har anledning til å tegne
Diverse
KLOAKKLEDN. tinglyste heftelser overstiger den forventede boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Kan ikke slettes uten samtykke fra kommunen

---

[d047_d047 | Side [1]]
giattest. Unntak gjelder blant annet for frittstående Området er stadig under endring/ utvikling, bygg settes
Styregodkjennelse: Ved ethvert eierskifte må erververen bygninger med bruksareal mindre enn 50 m². Det er eier opp, rehabiliteres og rives ned. Vi anbefaler derfor alle
Hver andel har en fast plass i felles garasjeanlegg. Det er godkjennes av styret for å få rett til å bruke boligen. som plikter å fremlegge energiattest og er selv ansvarlig budgivere å sette seg inn i gjeldende
tilrettelagt for

---

[d047_d047 | Side [1]]
 fuktverdier i dusjsonen. Da vi rev gulvet fant ikke
basseng. Av integrerte hvitevarer finnes oppvaskmaskin, opplysninger om kjente risikofaktorer, som for eksempel fagpersonen noen fuktskader før han la nytt gulv. Er det andre forhold av betydning ved eiendommen som
stekeovn, induksjonstopp og kjøl/ frys. Laminatplate ufaglært arbeid, begrenset kontroll av det elektriske kan være relevant for kjøper å vite om (f.eks. rasfare,
mellom benk og overskap. Kjøkkenet har en åpen løsning anlegget og opplysninger

---

[d047_d047 | Side [1]]
BOS kan eie PRIORITET ETTER BYGGELÅNSOBLIGASJON(ER) OG /
andel i borettslaget, og man kan kun eie én andel. Ved I henhold til vedtektene kan styret endre ELLER SENERER FASTSATTE LÅN.
Regulering
salg gjelder forkjøpsrett for andelseiere i borettslaget, og felleskostnadene med én måneds skriftlig varsel. ANF. PRIORITET ETTER OBLIGASJON(ER) TIL
deretter for øvrige OBOS‑medlemmer, basert på Regulerings og arealplaner: Eiendommen er regulert til HUSBANKEN SOM TIL ENHVER TID HVILER PÅ
ansiennitet. Borettslaget

---

[d047_d047 | Side [1]]
le Alt utstyr og installasjoner som medfølger overtas slik de 1. Beskrivelse av arbeidet: Servantskap ble satt opp av det mangler/ ikke er fremlagt samsvarserklæring for deler
skiftet ut i 2025. Opplegg for vaskemaskin. Oppvarming er, uten garanti, med mindre det foreligger en gjeldende onkelen min som er snekker. av det elektriske arbeidet i boligen.
via stråleovn på vegg. Felles mekanisk ventilasjon for garanti fra produsent eller leverandør. 2. Beskrivelse av arbeidet: Dusjkabinett ble satt opp

---

[d047_d047 | Side [1]]
er
tnemucoD
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Utført av boretslaget.
Arbeid utført av Valgt av boretslaget
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du

---

[d047_d047 | Side [1]]
lleskostnader og pantesikkerhet
ikke er til vesentlig ulempe for andelseieren.
6-1 Felleskostnader
(3) Borettslagets vedlikeholdsplikt omfatter også utskifting av vinduer, herunder (1) Den enkelte andelseier er ansvarlig for felleskostnadene etter en nøkkel
nødvendig utskiftning av termoruter, og ytterdører til den enkelte andel og fastsatt ved stiftelsen av borettslaget. Nøkkelen ligger fast og kan bare endres
reparasjon eller utskiftning av tak, bjelkelag, bærende veggkonstruksjoner, sluk og etter

---

[d047_d047 | Side [1]]
om er anskaffet i andelseierens egen (3) Borettslagets kostnader til behandling og eventuell oppfølging av søknad om
regi før 21.04.2022, under forutsetning av at arbeidene er innmeldt til og godkjent overlating av bruk betales av den andelseier som har søkt, se pkt. 4-2 (6).
av plan-og bygningsmyndighetene, og med det forbehold at borettslaget ikke er
ansvarlig for offentlige pålegg som skyldes at de bygningsmessige endringene ikke 6-2 Betaling av felleskostnader
er korrekt innmeldt til plan- og

---

[d047_d047 | Side [1]]
ing av tak, bjelkelag, bærende veggkonstruksjoner, sluk og etter borettslagslovens § 5-19.
rør eller ledninger som er bygd inn i bærende konstruksjoner med unntak av
varmekabler, og konvektorer. (2) Når særlige grunner taler for det, skal en kostnad likevel fordeles etter
nytten for den enkelte bolig eller etter forbruk.
(4) Borettslaget har ansvar for vedlikehold og utskifting av nye vinduer og
ytterdører som endrer opprinnelig fasade og som er anskaffet i andelseierens egen (3) Borettslagets kostnader

---

[d047_d047 | Side [1]]
p som følge av at borettslaget ikke
langt plikten ikke ligger på andelseierne. Vedlikeholdsplikten omfatter også oppfyller pliktene sine, jf borettslagslovens § 5-18.
utvendig vedlikehold av vinduer.
(2) Konvektorer med koblinger, felles rør, ledninger, kanaler og andre felles
installasjoner som går gjennom boligen, skal borettslaget holde ved like.
Borettslaget har rett til å føre nye slike installasjoner gjennom boligen dersom det
6. Felleskostnader og pantesikkerhet
ikke er til vesentlig ulempe for

---

[d047_d047 | Side [1]]
otalt (med som er inkludert i felleskostnadene. Borettslaget har en
Boligkjøperforsikring)) IN‑ordning som gir mulighet for individuell nedbetaling av
fellesgjeld. Renteutgifter på fellesgjelden er flytende og
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ kan endres, noe som vil påvirke størrelsen på
4 333 434,00 (Totalpris inkl. omkostninger (uten felleskostnadene. Styret kan også endre
Boligkjøperforsikring)) felleskostnadene med én måneds skriftlig varsel.
4 342 734,00 (Totalpris inkl.

---

[d047_d047 | Side [1]]
areal
eller andres andelsområder, og kan pålegges vedlikehold av disse for egen regning (3) Borettslaget og skadelidte andelseiere kan kreve erstatning for tap som følger av at
om de forfaller. andelseieren misligholder sine plikter, jf borettslagslovens
§§ 5-13 og 5-15.
5-2 Borettslagets vedlikeholdsplikt
(1) Borettslaget skal holde bygninger og eiendommen for øvrig i forsvarlig stand så (4) Andelseier kan kreve erstatning for tap som følge av at borettslaget ikke
langt plikten ikke ligger på

---

[d047_d047 | Side [1]]
6-2 Betaling av felleskostnader
er korrekt innmeldt til plan- og bygningsmyndighetene. Borettslaget har heller ikke (1) Felleskostnadene forfaller til betaling den 1. i hver måned. Borettslaget
ansvar for å utbedre feil eller mangler som skyldes feil, slitasje og forfall eller kan endre felleskostnadene med èn måneds skriftlig varsel.
dårlig teknisk utførelse.
(2) For felleskostnader som ikke blir betalt ved forfall, svarer andelseieren den til en
(5) Andelseieren skal gi adgang til boligen slik at

---

[d047_d047 | Side [1]]
av på dekning av felleskostnader og andre krav fra lagsforholdet har
rettspraksis at borettslaget står ansvarlig for offentlige pålegg om vedlikehold og borettslaget en lovbestemt panterett i andelen foran alle andre heftelser. Pantekravet
sikkerhetsutstyr, herunder ansvar for at røykvarslere og manuelt slukkeutstyr er er begrenset til en sum som svarer til to ganger folketrygdens grunnbeløp på
installert i boligene. Grunnlaget for dette er at borettslaget er eier av brannobjektet, tidspunktet

---

[d047_d047 | Side [1]]
e mulighet til å nedbetale
avklare om det er etablert membran på veggene. bør monteres lekkasjedeteksjon ved oppvaskmaskin/ i boliger og fritidsboliger. Alle boliger skal ha periodisk sin andel av fellesgjelden to ganger i året.
Manglende dokumentasjon medfører usikkerhet om oppvaskkum. Det bør monteres komfyrvakt i kjøkkenet, kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres Felleskostnadene inkluderer blant annet kommunale
fuktsikringen er tilstrekkelig, noe som kan øke risikoen for da dette er

---

[d047_d047 | Side [1]]
g utskifting av nye
vinduer og ytterdører som endrer opprinnelig fasade og som er satt inn etter
(5) Overlating av bruken reduserer ikke andelseierens plikter overfor borettslaget. 21.04.2022. Herunder har andelseier ansvar for at disse innmeldt til og godkjent av
plan- og bygningsmyndighetene, og er oppført i henhold til de til enhver tid
(6) Borettslaget kan kreve kostnader forbundet med behandlingen og eventuell gjeldende bygningsforskrifter og andre offentlige bestemmelser.
oppfølging av en søknad om

---

[d047_d047 | Side [1]]
styr som borettslaget er ansvarlig
leilighetene må godkjennes av styret på forhånd, eventuelt med krav om at leiligheten for å utbedre, plikter andelseieren straks å melde fra skriftlig til borettslaget.
tilbakestilles til tilpasset standard for andelshavers regning ved eierskifte.
(10) Ny eier av andelen har plikt til å utføre vedlikehold medregnet reparasjon og
4-4 Kameraovervåkning av garasjeanlegg utskifting i boligen, selv om det skulle vært utført av den forrige andelseieren.
Borettslaget kan

---

[d047_d047 | Side [1]]
orvaltes av OBOS. Borettslaget består av en blanding av
Ved kjøp av nytt hus/ leilighet bør det gjennomføres en konstruksjoner. avvik fra dagens forskriftskrav og oppstå funksjonssvikt. rekkehus og terrasseleiligheter. Styret har de siste årene
elektrisk tilstandskontroll. Kostnadsestimatet gjelder Videre må kjøper være forberedt på det må foretas fokusert på modernisering og vedlikehold, og det er
elektrisk tilstandskontroll, ikke utbedringer. ‑ Kjøkken ‑ Kjøkken ‑ Overflater og innredning | Det er

---

[d047_d047 | Side [1]]
n den til en
(5) Andelseieren skal gi adgang til boligen slik at borettslaget kan utføre sin hver tid gjeldende forsinkelsesrente etter lov av 17. desember 1976 nr 100.
vedlikeholdsplikt, herunder ettersyn, reparasjon eller utskifting. Ettersyn og
utføring av arbeid skal gjennomføres slik at det ikke er til unødig ulempe for 6-3 Borettslagets pantesikkerhet
andelseieren eller annen bruker av boligen. Det følger av juridisk teori og For krav på dekning av felleskostnader og andre krav fra lagsforholdet

---

[d047_d047 | Side [1]]
ns este琀椀kk og erfaringstall, og må ikke forveksles med konkrete pris琀椀lbud fra Tiltak mellom kr 200 000 – 500 000
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) • håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig betydelig, avhengig av individuelle

---

[d047_d047 | Side [1]]
likehold av brannforebyggende
7-1 Mislighold
installasjoner m.m. jfr. Forskrift om brannforbyggende tiltak og tilsyn § 2-1, siste
Andelseiers brudd på sine forpliktelser overfor borettslaget utgjør mislighold.
ledd. Mellom borettslagets årlige kontroller tilligger det borettshaver å føre kontroll
Som mislighold regnes blant annet manglende betaling av felleskostnader,
med at røykvarsler fungerer og at brannslukkers manometer står i grønn sone. Ved
forsømt vedlikeholdsplikt, ulovlig bruk eller overlating av

---

[d047_d047 | Side [1]]
efrafall ikke oppnås vil handel borettslaget, som gir borett til en bestemt bolig. som gir trygghet og profesjonell juridisk hjelp dersom det
KLOAKKLEDN. ikke kunne gjennomføres. Skulle det bli tinglyst flere Andelseierne har ikke personlig ansvar for borettslagets oppdages uventede feil eller mangler ved boligen de
Kan ikke slettes uten samtykke fra kommunen utleggspant på eiendommen, kan handel bare fellesgjeld, men de må dekke borettslagets løpende neste fem årene. Les mer om Boligkjøperforsikring

---

[d047_d047 | Side [1]]
m ikke holder
ukjent om det er noen form for membran på veggene. kjøkkenet ut ifra alder. Det er ikke montert komfyrvakt i dagens standard. I Norge er det en av oppgavene til Det Borettslaget har en IN‑ordning (individuell nedbetaling av
Det bør gjennomføres nærmere undersøkelser for å kjøkkenet som er krav på dette kjøkkenet ut ifra alder. Det lokale el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg fellesgjeld), som gir andelseiere mulighet til å nedbetale
avklare om det er etablert membran på

---

[d047_d047 | Side [1]]
pittel 13. økonomisk ansvar eller utlegg for borettslaget på mer enn fem prosent av de årlige
Fravikelse kan tidligst kreves samtidig med pålegg om salg. felleskostnadene.
8-4 Representasjon og fullmakt
Styrets leder og ett styremedlem representerer i fellesskap borettslaget utad og
tegner dets navn.
8. Styret og dets vedtak
8-1 Styret
(1) Borettslaget skal ha et styre som skal bestå av en styreleder og minst 2 og høyst
4 andre medlemmer med like mange varamedlemmer. 9. Generalforsamlingen
(2)

---

[d047_d047 | Side [1]]
fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: HOT 3
48
30006220
:ecnerefer
tnemucoD
49

## Side 26

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven

---

[d047_d047 | Side [1]]
 i alle salgsdokumentene,
uten andre heftelser enn de som det er avtalt at følger boligselgerforsikring som dekker selgers ansvar etter herunder salgsoppgave, tilstandsrapport og selgers
40 41

## Side 22

OM EIENDOMMEN OM EIENDOMMEN
egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes av videreformidles til alle involverte parter slik at disse får tid
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de

---

[d047_d047 | Side [1]]
ikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det

---

[d047_d047 | Side [1]]
ater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
OBOS Eiendoms- aksjebolig:
forvaltning AS Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
Hammersborg torg 1 − Når: Du kjøper forsikringen når du kjøper en

---

[d047_d047 | Side [1]]
, jf. borettslagsloven § 5‑4. salgsoppgaven er basert på selgers informasjon,
GJELDER DENNE REGISTERENHETEN MED FLERE Korttidsutleie er tillatt i opptil 30 døgn per år uten fagkyndig vurdering, samt opplysninger fra offentlige
Forsikring
samtykke fra styret. registre som kommunen og Kartverket. Det er viktig at
Selger bærer risikoen for at kjøper kan få tinglyst skjøte Boligselgerforsikring: Selger har tegnet kjøper setter seg grundig inn i alle salgsdokumentene,
uten andre heftelser enn de som det er

---

[d047_d047 | Side [1]]
dresse
Sloreåsen 10
Poststed Postnr
OSLO 1257
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2019
Hvor lenge har du eid boligen?
Antall år 6
Antall måneder 9
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap If Skadeforsikring NUF
Polise/avtalenr. 1932222
Spørsmål for alle typer eiendommer
Initialer selger: HOT

---

[d047_d047 | Side [1]]
n er 琀椀lre琀琀elagt for brukere med nedsa琀琀 bevegelighet og kalles spesialleiligheter. Dersom en
andel 琀椀l en spesialleilighet ønskes overdra琀琀 har Oslo Kommune forkjøpsre琀琀. Forkjøpsre琀琀en gjøres gjeldende i samråd med Oslo Fylkeslag av
Norges Handikapforbund. Oslo kommunes forkjøpsre琀琀 går foran all annen forkjøpsre琀琀.
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
IF skadeforsikring 1932222
Kommentar
Oppdragsnr.: 21155-1630 Befaringsdato: 19.12.2025 Side: 23 av 26 Oppdragsnr.: 21155-1630

---

[d047_d047 | Side [1]]
 mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for

---

[d047_d047 | Side [1]]
ensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 151343/86524533
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
93

## Side

---

[d047_d047 | Side [1]]
y琀琀es for å beregne eiendommens verdi. De琀琀e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et rom
2. Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? fra bod 琀椀l soverom eller arbeidsrom,eller hvis du endrer en bolig 琀椀l to
Nei Den bygningssakkyndige kan avdekke eventuelle separate boliger.
bruksendringer og avvik i branncelleinndeling
3. Er det mangler på røykvarsler i boligen iht. forskri昀琀skrav på søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985? Rom for varig

---

[d047_d047 | Side [1]]
leringsplaner m/ bestemmelser etc. ligger
dette skjer på anviste gjesteplasser. Borettslaget har grunn til det, eller dersom ervervet vil være i strid med salgsoppgaven. Megler påtar seg ikke ansvar for vedlagt i salgsoppgaven eller kan fås ved henvendelse til
også vedtatt å sette opp et mindre lekestativ med benk vedtektene. Søknad om styregodkjenning av ny informasjonen som fremgår av energiattesten. megler. Vi oppfordrer interessenter til å gjøre seg kjent
for å styrke bomiljøet. andelseier sendes til

---

[d047_d047 | Side [1]]
løpet av en fastsa琀琀 琀椀d.
over 昀氀ere etasjer og så videre.
1. Er det mangler for brannslukningsutstyr i boligen iht. forskri昀琀skrav på søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985? Eiendommens markedsverdi kan ikke baseres på en matema琀椀sk beregning basert på Om bruksendring
Nei antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene Bruksendring er å endre bruken av et rom fra en 琀椀lla琀琀 bruk 琀椀l en annen.
beny琀琀es for å beregne eiendommens verdi. De琀琀e kan kreve søknad og

---

[d047_d047 | Side [1]]
varlig for at det utføres funksjonskontroll på egne røykvarslere minst
varsles. Styret avgjør hvilke naboer dette gjelder. Naboene må forevises tegninger og
en gang pr. år.
informeres om planene for utbygginger, og også for bygging av gjerder og plattinger. De
signerer for ovenstående på fastsatt skjema, som kan fås ved henvendelse til styret. Husk å
Kun lovlig mengde brennbare materialer som gass, bioetanol kan oppbevares inne i en bygning
datere signaturen. Berørte naboer kvitterer bare for at de har

---

[d047_d047 | Side [1]]
ets forsikringsselskap: If Skadeforsikring Kommunedelplan KDP‑17 for torg og møteplasser, vedtatt VEKET FOR: OBLIGASJON 1986/ 18148‑3
22.04.2009. ** PRIORITETSBESTEMMELSE
Energimerke
Polisenummer fellesforsikring: 1932222 VEKET FOR: OBLIGASJON 1986/ 9207‑2
Energikarakter: D Reguleringsplan S‑2387 omfatter et spesialområde for ** FORHØYELSE
Husdyr: Det er tillatt å holde dyr, med unntak av utekatt, bevaring hvor endringer krever samråd med FORHØYET TIL NOK 35,442,400
så lenge dyreholdet ikke er til sjenanse

---

[d047_d047 | Side [1]]
n styret vurderer den reelle verdien av
byggetidspunktet. Det er påvist avvik i krav til kullfilterventilator på kjøkkenet og heller ikke andre elbillader. eiendelene til å være betydelig høyere enn den bokførte
høydeforskjell/ fall‑løsning på våtrommet. Fra høyeste forserte/ mekaniske avtrekksløsninger fra kokesonen. Det verdien.
punkt ved døråpning er det tilnærmet flatt frem til sone er vanskelig å etablere andre løsninger. Det bør vurderes
Øvrig
rundt sluket. I døråpning ble det ikke tillatt å lage

---

[d047_d047 | Side [1]]
vurderes ut fra tekniske forskri昀琀er på søknads琀椀dspunktet for • S琀椀kkprøvetakninger er utvalgt 琀椀lfeldig og kan innebære kontroll under
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
bygget. Noen bygningsdeler vurderes e琀琀er gjeldende teknisk forskri昀琀 på over昀氀aten med spiss redskap eller lignende.
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
befarings琀椀dspunktet. De琀琀e gjelder blant annet:
• Eiendommens markedsverdi kan ikke baseres på en rent

---

[d047_d047 | Side [1]]
bebyggelse skal garasjekjeller i sin helhet ligge under terreng. Garasjeplassering skal være vist i
bebyggelsesplanen.
Gesimshøyden skal ikke for noen av boligene ligge høyere enn kote + 95.
b) For boligbebyggelsen skal det avsettes 1,4 biloppstillingsplasser pr. bolig, hvorav 1,2 plasser skal S-2387
opparbeides.
§ 2. Områder for offentlig bebyggelse.
Bebyggelse oppføres i 1 etasje + underetasje. Reguleringsplanmedreguleringsbestemmelserforbyggeområdeforboliger,offentligbygn-
§ 4. Trafikkområder

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Manglende membran på baderomsvegger – ukjent fuktsikring",
      "evidence": [
        "Det er ukjent om det er noen form for membran på veggene.",
        "Manglende dokumentasjon medfører usikkerhet om fuktsikringen er tilstrekkelig, noe som kan øke risikoen for fuktskader.",
        "Det bør gjennomføres nærmere undersøkelser for å avklare om det er etablert membran på veggene."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Avvik i fallforhold til sluk på våtrom – ikke i henhold til krav",
      "evidence": [
        "Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.",
        "Det er påvist avvik i krav til høydeforskjell/fall-løsning på våtrommet.",
        "Fra høyeste punkt ved døråpning er det tilnærmet flatt frem til sone rundt sluket."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Ufaglært arbeid utført i boligen – servantskap og dusjkabinett, samt manglende samsvarserklæring",
      "evidence": [
        "Servantskap ble satt opp av onkelen min som er snekker.",
        "Dusjkabinett ble satt opp [av ufaglært].",
        "det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
        "opplysninger om kjente risikofaktorer, som for eksempel ufaglært arbeid, begrenset kontroll av det elektriske anlegget."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Manglende komfyrvakt på kjøkkenet – avvik fra krav",
      "evidence": [
        "Det er ikke montert komfyrvakt i kjøkkenet som er krav på dette kjøkkenet ut ifra alder.",
        "Det bør monteres komfyrvakt i kjøkkenet, da dette er krav."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Manglende samsvarserklæring for elektrisk anlegg – begrenset kontroll",
      "evidence": [
        "det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
        "Begrenset kontroll av det elektriske anlegget.",
        "Ved kjøp av nytt hus/leilighet bør det gjennomføres en elektrisk tilstandskontroll."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Avvik i kullfilterventilasjon/mekanisk avtrekk fra kokesone på kjøkken",
      "evidence": [
        "Det er påvist avvik i krav til kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen.",
        "Det er vanskelig å etablere andre løsninger. Det bør vurderes tiltak."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Hensynssoner for steinsprang og elveflom på eiendommen",
      "evidence": [
        "Hensynssone H310_2: Steinsprang",
        "Hensynssone H320_2: Elveflom",
        "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R8",
      "description": "Ingen radonmåling er utført av selger",
      "evidence": [
        "Selger har ikke utført radonmåling.",
        "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Fellesgjeld med flytende rente – risiko for økte felleskostnader",
      "evidence": [
        "Renteutgifter på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.",
        "Styret kan også endre felleskostnadene med én måneds skriftlig varsel.",
        "I henhold til vedtektene kan styret endre felleskostnadene med én måneds skriftlig varsel."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Negativ bokført egenkapital i borettslaget",
      "evidence": [
        "Balansen viser en negativ bokført egenkapital, men styret vurderer den faktiske egenkapitalen til å være positiv, da eiendelene er høyere enn bokført verdi.",
        "Styret vurderer den reelle verdien av eiendelene til å være betydelig høyere enn den bokførte verdien."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R11",
      "description": "Oslo kommunes særskilte forkjøpsrett for spesialleiligheter tilpasset bevegelseshemmede",
      "evidence": [
        "Borettslaget har ni spesialleiligheter tilpasset bevegelseshemmede, hvor det stilles særskilte krav til eier.",
        "For disse ni leilighetene har Oslo kommune en spesiell forkjøpsrett som går foran all annen forkjøpsrett.",
        "Dersom en andel til en spesialleilighet ønskes overdratt har Oslo Kommune forkjøpsrett.",
        "Oslo kommunes forkjøpsrett går foran all annen forkjøpsrett."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R12",
      "description": "Eldre stråleovn på badet – potensiell sikkerhetsrisiko og utdatert oppvarming",
      "evidence": [
        "Det er en eldre stråleovn på badet."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R13",
      "description": "Manglende lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum",
      "evidence": [
        "Det bør monteres lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R14",
      "description": "Skjulte feil og mangler kan ikke utelukkes – begrenset undersøkelsesnivå i tilstandsrapporten",
      "evidence": [
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
        "Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.",
        "Det kan være avvik/skader som ikke er avdekket."
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Tinglyste heftelser og bestemmelser om vann/kloakkledninger som ikke kan slettes uten samtykke fra kommunen",
      "evidence": [
        "1981/34389-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen",
        "1981/34391-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen",
        "1981/34399-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen"
      ],
      "source_documents": [
        "d047_d047"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "stråleovn bad sikkerhetsrisiko elektrisk godkjenning",
    "lekkasjedeteksjon oppvaskmaskin krav forskrift",
    "negativ egenkapital borettslag årsregnskap",
    "fellesgjeld størrelse borettslag lånevilkår",
    "radon måling leilighet Oslo risiko",
    "dusjkabinett ufaglært montering konsekvenser",
    "kullfilterventilator kjøkken avvik tiltak kostnad",
    "steinsprang elveflom hensynssone konsekvenser kjøper",
    "elektrisk tilstandskontroll kostnad anbefaling",
    "spesialleilighet bevegelseshemmede krav eier Oslo kommune"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende membran på baderomsvegger (0.95 → 0.95):**\nEvidensen er direkte og eksplisitt bekreftet i dokumentet: \"Det er ukjent om det er noen form for membran på veggene.\" Confidence opprettholdes på 0.95. Dette er en TG2-observasjon med klar dokumentasjon.\n\n**R2 – Avvik i fallforhold til sluk (0.95 → 0.97):**\nSvært godt dokumentert med tre separate evidenspunkter, inkludert konkret beskrivelse av at det er \"tilnærmet flatt frem til sone rundt sluket.\" Confidence justeres opp til 0.97 da dette er et påvist, konkret avvik.\n\n**R3 – Ufaglært arbeid (0.92 → 0.93):**\nGodt dokumentert. Egenerklæringen bekrefter servantskap satt opp av onkel (snekker, ikke nødvendigvis faglært rørlegger/elektriker), og dusjkabinett satt opp. Manglende samsvarserklæring for elektrisk arbeid er også bekreftet. Confidence justeres marginalt opp til 0.93.\n\n**R4 – Manglende komfyrvakt (0.93 → 0.95):**\nDirekte bekreftet i dokumentet med eksplisitt formulering om at dette er et krav. Confidence justeres opp til 0.95.\n\n**R5 – Manglende samsvarserklæring elektrisk anlegg (0.90 → 0.92):**\nGodt dokumentert. Overlapper delvis med R3, men er en selvstendig risiko knyttet til det elektriske anlegget generelt. Confidence justeres marginalt opp.\n\n**R6 – Avvik kullfilterventilasjon (0.88 → 0.90):**\nDirekte bekreftet i dokumentet. Confidence justeres marginalt opp da avviket er eksplisitt påvist.\n\n**R7 – Hensynssoner steinsprang og elveflom (0.92 → 0.95):**\nDirekte bekreftet med navngitte hensynssoner H310_2 og H320_2. Dette er en vesentlig risiko for kjøper. Confidence justeres opp til 0.95.\n\n**R8 – Ingen radonmåling (0.88 → 0.90):**\nDirekte bekreftet i egenerklæring og salgsoppgave. Confidence justeres marginalt opp.\n\n**R9 – Fellesgjeld med flytende rente (0.87 → 0.88):**\nGodt dokumentert. Confidence opprettholdes på 0.88.\n\n**R10 – Negativ bokført egenkapital (0.82 → 0.82):**\nBekreftet i dokumentet, men styrets vurdering om positiv reell egenkapital er også nevnt. Confidence opprettholdes på 0.82 da det er en reell usikkerhet. Mangler detaljer om størrelsen på negativ egenkapital og årsregnskap.\n\n**R11 – Oslo kommunes forkjøpsrett spesialleiligheter (0.90 → 0.95):**\nSvært godt dokumentert med flere eksplisitte referanser. Confidence justeres opp til 0.95 da dette er en klar og vesentlig risiko/begrensning for kjøper.\n\n**R12 – Eldre stråleovn på badet (0.72 → 0.60):**\nKun én setning i dokumentet: \"Det er en eldre stråleovn på badet.\" Det er ingen ytterligere informasjon om tilstand, alder, godkjenning eller konkret sikkerhetsrisiko. Rapporten gir ingen TG-vurdering av denne. Confidence justeres ned til 0.60 da evidensgrunnlaget er svakt og risikoen ikke er nærmere spesifisert.\n\n**R13 – Manglende lekkasjedeteksjon (0.78 → 0.75):**\nKun én setning som anbefaling: \"Det bør monteres lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum.\" Dette er en anbefaling, ikke et påvist avvik med TG-vurdering. Confidence justeres ned til 0.75.\n\n**R14 – Skjulte feil og mangler (0.85 → 0.88):**\nGodt dokumentert med tre evidenspunkter. Dette er en generell, men viktig risiko. Confidence justeres marginalt opp.\n\n**R15 – Tinglyste heftelser vann/kloakkledninger (0.80 → 0.82):**\nTre separate tinglyste heftelser er bekreftet. Confidence justeres marginalt opp.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Styregodkjenning ved eierskifte – kjøper må godkjennes av styret, noe som kan forsinke eller hindre handel.\n2. Energikarakter D – relativt dårlig energimerking som kan medføre høyere energikostnader.\n3. Skrånende terreng – eiendommen ligger i relativt skrånende terreng, noe som kan påvirke drenering og stabilitet.\n4. Borettslagets lovbestemte panterett – borettslaget har prioritet foran andre kreditorer for felleskostnader, noe kjøper bør være klar over.\n5. Kameraovervåkning av garasjeanlegg – personvernmessige implikasjoner.\n6. Korttidsutleie begrenset til 30 døgn per år uten styresamtykke – begrensning for kjøper som ønsker utleie.\n\nDe viktigste manglende risikoene er styregodkjenning og energikarakter D, samt begrensninger på utleie.\n"
}

## Raw Response
```json
{
  "id": "msg_0127K5PzzqzKVL6xGeKTsZhz",
  "container": null,
  "content": [
    {
      "id": "toolu_017WxBBk512PRgQYvazC3eJD",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Manglende membran på baderomsvegger – ukjent fuktsikring",
            "evidence": [
              "Det er ukjent om det er noen form for membran på veggene.",
              "Manglende dokumentasjon medfører usikkerhet om fuktsikringen er tilstrekkelig, noe som kan øke risikoen for fuktskader.",
              "Det bør gjennomføres nærmere undersøkelser for å avklare om det er etablert membran på veggene."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Avvik i fallforhold til sluk på våtrom – ikke i henhold til krav",
            "evidence": [
              "Det er påvist avvik i fallforhold til sluk i forhold til krav i forskrift på byggetidspunktet.",
              "Det er påvist avvik i krav til høydeforskjell/fall-løsning på våtrommet.",
              "Fra høyeste punkt ved døråpning er det tilnærmet flatt frem til sone rundt sluket."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Ufaglært arbeid utført i boligen – servantskap og dusjkabinett, samt manglende samsvarserklæring",
            "evidence": [
              "Servantskap ble satt opp av onkelen min som er snekker.",
              "Dusjkabinett ble satt opp [av ufaglært].",
              "det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
              "opplysninger om kjente risikofaktorer, som for eksempel ufaglært arbeid, begrenset kontroll av det elektriske anlegget."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Manglende komfyrvakt på kjøkkenet – avvik fra krav",
            "evidence": [
              "Det er ikke montert komfyrvakt i kjøkkenet som er krav på dette kjøkkenet ut ifra alder.",
              "Det bør monteres komfyrvakt i kjøkkenet, da dette er krav."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Manglende samsvarserklæring for elektrisk anlegg – begrenset kontroll",
            "evidence": [
              "det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
              "Begrenset kontroll av det elektriske anlegget.",
              "Ved kjøp av nytt hus/leilighet bør det gjennomføres en elektrisk tilstandskontroll."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Avvik i kullfilterventilasjon/mekanisk avtrekk fra kokesone på kjøkken",
            "evidence": [
              "Det er påvist avvik i krav til kullfilterventilator på kjøkkenet og heller ikke andre forserte/mekaniske avtrekksløsninger fra kokesonen.",
              "Det er vanskelig å etablere andre løsninger. Det bør vurderes tiltak."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Hensynssoner for steinsprang og elveflom på eiendommen",
            "evidence": [
              "Hensynssone H310_2: Steinsprang",
              "Hensynssone H320_2: Elveflom",
              "Området er stadig under endring/utvikling, bygg settes opp, rehabiliteres og rives ned."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R8",
            "description": "Ingen radonmåling er utført av selger",
            "evidence": [
              "Selger har ikke utført radonmåling.",
              "Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Fellesgjeld med flytende rente – risiko for økte felleskostnader",
            "evidence": [
              "Renteutgifter på fellesgjelden er flytende og kan endres, noe som vil påvirke størrelsen på felleskostnadene.",
              "Styret kan også endre felleskostnadene med én måneds skriftlig varsel.",
              "I henhold til vedtektene kan styret endre felleskostnadene med én måneds skriftlig varsel."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Negativ bokført egenkapital i borettslaget",
            "evidence": [
              "Balansen viser en negativ bokført egenkapital, men styret vurderer den faktiske egenkapitalen til å være positiv, da eiendelene er høyere enn bokført verdi.",
              "Styret vurderer den reelle verdien av eiendelene til å være betydelig høyere enn den bokførte verdien."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R11",
            "description": "Oslo kommunes særskilte forkjøpsrett for spesialleiligheter tilpasset bevegelseshemmede",
            "evidence": [
              "Borettslaget har ni spesialleiligheter tilpasset bevegelseshemmede, hvor det stilles særskilte krav til eier.",
              "For disse ni leilighetene har Oslo kommune en spesiell forkjøpsrett som går foran all annen forkjøpsrett.",
              "Dersom en andel til en spesialleilighet ønskes overdratt har Oslo Kommune forkjøpsrett.",
              "Oslo kommunes forkjøpsrett går foran all annen forkjøpsrett."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R12",
            "description": "Eldre stråleovn på badet – potensiell sikkerhetsrisiko og utdatert oppvarming",
            "evidence": [
              "Det er en eldre stråleovn på badet."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R13",
            "description": "Manglende lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum",
            "evidence": [
              "Det bør monteres lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R14",
            "description": "Skjulte feil og mangler kan ikke utelukkes – begrenset undersøkelsesnivå i tilstandsrapporten",
            "evidence": [
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.",
              "Det er ikke flyttet på gjenstander under befaring og det er ikke kontrollert for skjulte feil og mangler eller utført inngrep i konstruksjonene.",
              "Det kan være avvik/skader som ikke er avdekket."
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Tinglyste heftelser og bestemmelser om vann/kloakkledninger som ikke kan slettes uten samtykke fra kommunen",
            "evidence": [
              "1981/34389-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen",
              "1981/34391-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen",
              "1981/34399-1/105 29.12.1981 BEST. OM VANN/KLOAKKLEDN. Kan ikke slettes uten samtykke fra kommunen"
            ],
            "source_documents": [
              "d047_d047"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "stråleovn bad sikkerhetsrisiko elektrisk godkjenning",
          "lekkasjedeteksjon oppvaskmaskin krav forskrift",
          "negativ egenkapital borettslag årsregnskap",
          "fellesgjeld størrelse borettslag lånevilkår",
          "radon måling leilighet Oslo risiko",
          "dusjkabinett ufaglært montering konsekvenser",
          "kullfilterventilator kjøkken avvik tiltak kostnad",
          "steinsprang elveflom hensynssone konsekvenser kjøper",
          "elektrisk tilstandskontroll kostnad anbefaling",
          "spesialleilighet bevegelseshemmede krav eier Oslo kommune"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Manglende membran på baderomsvegger (0.95 → 0.95):**\nEvidensen er direkte og eksplisitt bekreftet i dokumentet: \"Det er ukjent om det er noen form for membran på veggene.\" Confidence opprettholdes på 0.95. Dette er en TG2-observasjon med klar dokumentasjon.\n\n**R2 – Avvik i fallforhold til sluk (0.95 → 0.97):**\nSvært godt dokumentert med tre separate evidenspunkter, inkludert konkret beskrivelse av at det er \"tilnærmet flatt frem til sone rundt sluket.\" Confidence justeres opp til 0.97 da dette er et påvist, konkret avvik.\n\n**R3 – Ufaglært arbeid (0.92 → 0.93):**\nGodt dokumentert. Egenerklæringen bekrefter servantskap satt opp av onkel (snekker, ikke nødvendigvis faglært rørlegger/elektriker), og dusjkabinett satt opp. Manglende samsvarserklæring for elektrisk arbeid er også bekreftet. Confidence justeres marginalt opp til 0.93.\n\n**R4 – Manglende komfyrvakt (0.93 → 0.95):**\nDirekte bekreftet i dokumentet med eksplisitt formulering om at dette er et krav. Confidence justeres opp til 0.95.\n\n**R5 – Manglende samsvarserklæring elektrisk anlegg (0.90 → 0.92):**\nGodt dokumentert. Overlapper delvis med R3, men er en selvstendig risiko knyttet til det elektriske anlegget generelt. Confidence justeres marginalt opp.\n\n**R6 – Avvik kullfilterventilasjon (0.88 → 0.90):**\nDirekte bekreftet i dokumentet. Confidence justeres marginalt opp da avviket er eksplisitt påvist.\n\n**R7 – Hensynssoner steinsprang og elveflom (0.92 → 0.95):**\nDirekte bekreftet med navngitte hensynssoner H310_2 og H320_2. Dette er en vesentlig risiko for kjøper. Confidence justeres opp til 0.95.\n\n**R8 – Ingen radonmåling (0.88 → 0.90):**\nDirekte bekreftet i egenerklæring og salgsoppgave. Confidence justeres marginalt opp.\n\n**R9 – Fellesgjeld med flytende rente (0.87 → 0.88):**\nGodt dokumentert. Confidence opprettholdes på 0.88.\n\n**R10 – Negativ bokført egenkapital (0.82 → 0.82):**\nBekreftet i dokumentet, men styrets vurdering om positiv reell egenkapital er også nevnt. Confidence opprettholdes på 0.82 da det er en reell usikkerhet. Mangler detaljer om størrelsen på negativ egenkapital og årsregnskap.\n\n**R11 – Oslo kommunes forkjøpsrett spesialleiligheter (0.90 → 0.95):**\nSvært godt dokumentert med flere eksplisitte referanser. Confidence justeres opp til 0.95 da dette er en klar og vesentlig risiko/begrensning for kjøper.\n\n**R12 – Eldre stråleovn på badet (0.72 → 0.60):**\nKun én setning i dokumentet: \"Det er en eldre stråleovn på badet.\" Det er ingen ytterligere informasjon om tilstand, alder, godkjenning eller konkret sikkerhetsrisiko. Rapporten gir ingen TG-vurdering av denne. Confidence justeres ned til 0.60 da evidensgrunnlaget er svakt og risikoen ikke er nærmere spesifisert.\n\n**R13 – Manglende lekkasjedeteksjon (0.78 → 0.75):**\nKun én setning som anbefaling: \"Det bør monteres lekkasjedeteksjon ved oppvaskmaskin/oppvaskkum.\" Dette er en anbefaling, ikke et påvist avvik med TG-vurdering. Confidence justeres ned til 0.75.\n\n**R14 – Skjulte feil og mangler (0.85 → 0.88):**\nGodt dokumentert med tre evidenspunkter. Dette er en generell, men viktig risiko. Confidence justeres marginalt opp.\n\n**R15 – Tinglyste heftelser vann/kloakkledninger (0.80 → 0.82):**\nTre separate tinglyste heftelser er bekreftet. Confidence justeres marginalt opp.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Styregodkjenning ved eierskifte – kjøper må godkjennes av styret, noe som kan forsinke eller hindre handel.\n2. Energikarakter D – relativt dårlig energimerking som kan medføre høyere energikostnader.\n3. Skrånende terreng – eiendommen ligger i relativt skrånende terreng, noe som kan påvirke drenering og stabilitet.\n4. Borettslagets lovbestemte panterett – borettslaget har prioritet foran andre kreditorer for felleskostnader, noe kjøper bør være klar over.\n5. Kameraovervåkning av garasjeanlegg – personvernmessige implikasjoner.\n6. Korttidsutleie begrenset til 30 døgn per år uten styresamtykke – begrensning for kjøper som ønsker utleie.\n\nDe viktigste manglende risikoene er styregodkjenning og energikarakter D, samt begrensninger på utleie.\n"
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
    "input_tokens": 18601,
    "output_tokens": 4456,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
