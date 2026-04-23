# Trace: agentic_reflecting_iter1
- **Run ID:** b1cb5cb7-e67c-4edb-a749-26545f123287
- **Tidspunkt:** 2026-03-27T20:34:20.331812+00:00
- **Varighet:** 96.74s
- **Input tokens:** 21750
- **Output tokens:** 4784

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
Risiko 1: Høy fellesgjeld og planlagt økning i felleskostnader
  Confidence: 0.97
  Evidens: Total fellesgjeld for Borettslaget Amalie Skramsvei 6 pr. 07.01.2026: 4 588 496,04; Andel fellesgjeld pr. 07.01.2026: 181 789,45; I styremøte 27.10.2025 ble det vedtatt en økning i felleskostnadene på 15% fra 01.01.2026; Leie av parkeringsplassen vil øke til kr 473,‑ og internett vil øke med kr 70 i mnd fra kr. 01.01.2026; Fellesgjelden er enda ikke helt fordelt på andelene, og denne økningen vil skje gradvis

Risiko 2: Pågående rehabilitering av fasade og vinduer med ytterligere låneopptak og fremtidige kostnadsøkninger
  Confidence: 0.96
  Evidens: Borettslaget er i gang med rehabilitering av vinduer og vedlikehold fasade. Dette har medført et låneopptak på kr 10,5 millioner; Denne leiligheten er enda ikke berørt da vestsiden er planlagt å bli rehabilitert mot våren 2026; Borettslaget har tatt opp et lån på 10,5 millioner kroner for å dekke kostnaden for rehabiliteringen; Vil på sikt gi økte felleskostnader og fellesgjeld

Risiko 3: Ingen radonmåling er foretatt og bygget mangler radonsperre
  Confidence: 0.98
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre; Det bør gjennomføres radonmålinger; Innvendig radon grunnet at det ikke er foretatt radonmåling, og bygget er heller ikke utført med radonsperre; Norge er et av de landene i verden som har høyest konsentrasjon av radongass i inneluften

Risiko 4: Elektrisk anlegg ikke kontrollert de siste 5 år
  Confidence: 0.95
  Evidens: Elektrisk anlegg på grunn av at det ikke er utført el-kontroll de siste 5 årene; Elektrisk anlegg er listet som bygningsdel vurdert med TG2

Risiko 5: Balkong med for lav rekkverkshøyde og rust på rekkverk
  Confidence: 0.97
  Evidens: Utvendig balkong med stue på grunn av for lav rekkverkshøyde i forhold til dagens krav og rust på rekkverk; Rekkverket er for lavt i forhold til dagens krav til rekkverkshøyder; Balkongen fremstår med eldre standard. Rust ble observert flere steder

Risiko 6: Avløpsrør og varmtvannstank med høy alder – risiko for plutselig svikt
  Confidence: 0.95
  Evidens: Avløpsrør på grunn av alder; Varmtvannstank på grunn av alder; Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger; Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg

Risiko 7: Støybelastning – eiendommen ligger i gul og rød støysone
  Confidence: 0.96
  Evidens: Gul støysone – Veistøy, dekningsgrad 36,3%; Rød støysone – Veistøy, dekningsgrad 8,8%; Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser

Risiko 8: Dårlig energikarakter – energimerke G (rød)
  Confidence: 0.95
  Evidens: Energikarakter: G; Energifarge: Rød

Risiko 9: Skjevheter i gulv/etasjeskille over akseptable grenser
  Confidence: 0.92
  Evidens: Ca. 05 mm – 29 mm skjevheter registrert v/ kontroll; Det er spesielt skjevt på hovedsoverom og soverom 2 i 1-etg; Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik

Risiko 10: Manglende håndløper i trappeløp
  Confidence: 0.93
  Evidens: Innvendige trapper på grunn av at det mangler håndløper på vegg i trappeløpet

Risiko 11: Fuktrisiko på bad – lite fall til sluk og bom på fliser
  Confidence: 0.93
  Evidens: Overflater gulv på bad på grunn av lite fall til sluk og noen fliser har bom; I bygninger av denne alder må det påregnes fare for fuktvandring i mur/gulv pga at det ikke var vanlig byggeskikk i aktuell tidsperiode å sikre mur/såle på samme metode som dagens

Risiko 12: Utført arbeid av ufaglærte – fjerning av vindfang og flislegging
  Confidence: 0.88
  Evidens: Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Ja; Har fjernet et vindfang og lagt flis på gulvet ved inngang; Lagt varmefolie selv i stue under parkett

Risiko 13: Takhøyde under 2,20 m i deler av stue/kjøkken
  Confidence: 0.94
  Evidens: Er det påvist avvik i forhold til rømningsvei, dagslysflate eller takhøyde? Ja; AVVIK TAKHØYDE: Takhøyden i nedsenket del av stue/kjøkken er under 2,20 m

Risiko 14: Kjøkken flyttet fra opprinnelig plassering uten søknad – mulig ulovlig bruksendring
  Confidence: 0.75
  Evidens: Kjøkkenet er flyttet fra sin opprinnelige plassering og det er laget åpen stue/kjøkkenløsning; Tegnet inn som kjøkken. Tiltaket er ikke søknadspliktig

Risiko 15: Planer om utbygging av ca. 400 leiligheter i nærområdet (Kristiansholm)
  Confidence: 0.85
  Evidens: Kristiansholm er under planlegging av OBOBS og der skal det bygge cirka 400 leiligheter fordelt på flere bygg; Reguleringsplaner under arbeid: PlanID 71720000. Bergenhus, Bybanen, Delstrekning

Risiko 16: Pipe og ildsted ikke undersøkt (TGIU)
  Confidence: 0.88
  Evidens: Innvendig > Pipe og ildsted – konstruksjoner som ikke er undersøkt; Pipe i murkonstruksjoner – ikke vurdert av takstmannen

Risiko 17: Eldre vinduer med slitasje – isolerglass fra 1980-tallet og 1998
  Confidence: 0.88
  Evidens: Utvendige vinduer på grunn av alder; Vinduer fra 1980-tallet, unntatt to stk. Isolerglass på kjøkkenvindu er fra 1998; Eldre vinduer bærer preg av elde/slitasje

Risiko 18: Styregodkjenning kreves for ny andelseier – risiko for avslag
  Confidence: 0.8
  Evidens: Ny andelseier må godkjennes av styret; Styret kan kun nekte godkjenning når det er saklig grunn til det

Risiko 19: Legalpant – borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader
  Confidence: 0.9
  Evidens: Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer

Dokumentkontekst:
[d101_d101 | Side [1]]
230
:ecnerefer
tnemucoD
49

## Side 26

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser

---

[d101_d101 | Side [1]]
entrum, dekningsgrad 100% Tinglyste heftelser og rettigheter: På borettslagets ble det vedtatt en økning i felleskostnadene på 15% fra
Styregodkjennelse: Ny andelseier må godkjennes av ‑ Gul støysone ‑ Veistøy, dekningsgrad 36,3% eiendom er det tinglyst 5 heftelser og rettigheter som 01.01.2026 (dette er bakt inn i opplyste felleskostnader,
styret. Styret kan kun nekte godkjenning når det er saklig ‑ Rød støysone ‑ Veistøy, dekningsgrad 8,8% følger eiendommens matrikkel ved overskjøting til ny samt at leie

---

[d101_d101 | Side [1]]
til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
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

[d101_d101 | Side [1]]
ke en kjøper direkte. Fellesgjelden er enda ikke helt fordelt på andelene, og
regnskap ligger vedlagt i salgsoppgaven. Kaigaten ‑ Sandviken, saksnr: 202416958, dekningsgrad denne økningen vil skje gradvis. Fellesgjelden på denne
100% Legalpant: Borettslaget har legalpant på inntil 2G som andelen har økt ca 80.000,‑ siden man begynte å ta ut
PlanID 61690000. Bergenhus. Gnr 168, sikkerhet for betaling av felleskostnader. Dette betyr at fra rammen. Brøken for denne leiligheten, altså hvor stor
Vedtekter/

---

[d101_d101 | Side [1]]
ftet i 2024
14 Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte, utover det som er nevnt tidligere (f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Beskrivelse Har fjernet et vindfang og lagt flis på gulvet ved inngang.
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
Initialer selger: WSA, CG 2
48
35005230
:ecnerefer
tnemucoD
49

## Side 26

17 Selges eiendommen med

---

[d101_d101 | Side [1]]
lan‑ og bygningsetatens hjemmeside. millioner kroner for å dekke kostnaden for
er ingen som har meldt forkjøpsrett på leiligheten. rehabiliteringen, og styreleder opplyser om at de ikke ser
Hensynssoner: for seg å måtte bruke hele beløpet, og det er ikke
Tinglyste heftelser
Forkjøpsfrist: 2025‑10‑27T23:00:00Z ‑ Kulturmiljø ‑ Grendene, dekningsgrad 100% planlagt ytterligere låneopptak. I styremøte 27.10.2025
‑ Kulturmiljø ‑ Historisk sentrum, dekningsgrad 100% Tinglyste heftelser og rettigheter: På

---

[d101_d101 | Side [1]]
 Megler skal også opplyse om det foreligger ferdiga琀琀ester eller midler琀椀dig bruks琀椀llatelser. Vestvendt beliggenhet med utsikt over nærområdet/nabolaget, deler av By昀樀orden og omkringliggende 昀樀ell.
Området er hovedsakelig bebygget med 琀椀lsvarende blokkbebyggelse, trehusbebyggelse og bolighus.
De琀琀e innebærer at den bygningssakkyndige/takstmann har en plikt 琀椀l å påpeke åpenbare ulovligheter
som avdekkes. De har ikke et ansvar for å hente sist godkjente tegninger hos kommunen. De琀琀e ansvaret
Leiligheten

---

[d101_d101 | Side [1]]
ommen ligger i For mer informasjon om reguleringsforhold kontakt enda ikke berørt da vestsiden er planlagt å bli rehabilitert
Forkjøpsrett: Det er intern forkjøpsrett i borettslaget. uregulert område, men er i kommunedelplan datert megler eller søk på saksnummer/ adresse/ gnr. Bnr. på mot våren 2026. Borettslaget har tatt opp et lån på 10,5
Forkjøpsretten er utlyst i forkant av annonsering, og det 19.02.2001, avsatt til boligområder. plan‑ og bygningsetatens hjemmeside. millioner kroner for å dekke

---

[d101_d101 | Side [1]]
ølger eiendommens matrikkel ved overskjøting til ny samt at leie av parkeringsplassen vil øke til kr 473,‑ og
grunn til det. hjemmelshaver som omhandler festekontrakt, rettighet, internett vil øke med kr 70 i mnd fra kr. 01.01.2026.
Reguleringsplaner under arbeid: bestemmelse om veg og bestemmelse om bebyggelse.
Regnskap/ budsjett/ kostnadsøkninger: Borettslagets PlanID 71720000. Bergenhus, Bybanen, Delstrekning Ingen av disse vil påvirke en kjøper direkte. Fellesgjelden er enda ikke helt fordelt på

---

[d101_d101 | Side [1]]
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
utgifter. Manglende innbetaling av fellesutgiftene som Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
følge av andre andelshaveres mislighold, eller dersom til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
borettslaget sitter på fraflyttede og/ eller usolgte andeler, følge med eiendommen, jf.

---

[d101_d101 | Side [1]]
yste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner

---

[d101_d101 | Side [1]]
 Total fellesgjeld for
vedlagt i salgsoppgaven. Kristiansholm er under planlegging av OBOBS og der andre kreditorer, selv om de har lån registrert på andelen. Borettslaget Amalie Skramsvei 6 pr. 07.01.2026: 4 588
skal det bygge cirka 400 leiligheter fordelt på flere bygg. 496. Før deler av rammelånet ble tatt ut var fellesgjelden
til borettslaget kr. 2 532 673,16,‑ pr 16.10.2025 fordelt på
Energimerke Vei, vann og avløp
Planer i nærheten av eiendommen: andelene.
Energikarakter: G PlanID 71740000.

---

[d101_d101 | Side [1]]
boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: WSA, CG 3
35005230
:ecnerefer
tnemucoD
Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere

---

[d101_d101 | Side [1]]
 verdi.
osv.
•Rom som ligger utenfor boenheten, men som eier har påvist
• d F o o k r u m sk e ju n l t t a e s k jo o n n , s e tr r u k k v s a jo li n te e t r , o s g o a m ld v e a r n v n u r o d g e r a t. vløp uten • b R yg e g fe e r t a id n s s p e u n n iv k å te : t k . ravet til bygningsdelen eller rommet på o B g R / A el - l e e . r D op e p t l e y r s t ik a k t e t i f l r h e ø m re v r i s b t o d e o n k h u e m te e n n , t a e s r j o o p n p p m å å a lt t o ro g m in m k e lu t d

---

[d101_d101 | Side [1]]
 beløp på kr. 473,‑ som er medtatt i bygget er oppført i henhold til tillatelsen og gjeldende eksempel skråtak eller lav himlingshøyde. Arealet oppgis
summen for fellesutgifter pr mnd. Dersom man ikke har regelverk, eller at det senere er utført arbeid på bygget BRA ‑ i: 80 m² som tilleggsinformasjon til øvrige arealer.
bil vil biloppstillingsplassen bli leid ut til noen andre i som ikke er byggemeldt eller godkjent. BRA ‑ e: 9 m²
borettslaget og kostnaden blir sløyfet. BRA ‑ b: 0 m²
Fellesarealer og

---

[d101_d101 | Side [1]]
n medføre erstatnings- og stra昀昀eansvar.
Oppdragsnr.: 20286-2472 Befaringsdato: 22.10.2025 Side: 3 av 26
Oppdragsnr.: 20286-2472 Befaringsdato: 22.10.2025 Side: 4 av 26
54 55

## Side 29

Søndre Allmenningen 7, 5036 BERGEN Takstoppdrag AS Søndre Allmenningen 7, 5036 BERGEN Takstoppdrag AS
Gnr 168 - Bnr 779 Vallaskaret 32 Gnr 168 - Bnr 779 Vallaskaret 32
4601 BERGEN 5227 NESTTUN 4601 BERGEN 5227 NESTTUN
Beskrivelse av eiendommen Beskrivelse av eiendommen
Annet: Ny琀琀 rør i rør system i leiligheten i

---

[d101_d101 | Side [1]]
algt og kan innebære kontroll •Eiendommens markedsverdi kan ikke baseres på en rent
matematisk beregning i forhold til antall kvadratmeter opplyst i
under overflaten med spiss redskap eller lignende.
ii. forhold knyttet til brann, rømming, sikkerhet, for eksempel rapporten. Opplysninger om areal kan altså ikke alene benyttes
rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller UTTRYKK OG DEFINISJONER for beregning av eiendommens verdi.
osv.
•Rom som ligger utenfor boenheten, men som eier har

---

[d101_d101 | Side [1]]
munen.
Eiendomsopplysninger
ØVRIGE OPPLYSNINGER:
Det er fortsa琀琀 eiendomsmegler som har plikt 琀椀l å sørge for at boligkjøperen får opplysningene han
Beliggenhet
eller hun har grunn 琀椀l å regne med å få, og som kan ha betydning for avtalen. De琀琀e innebærer blant
annet opplysninger om bebyggelsens arealer og eventuell adgang 琀椀l utleie av hele eller deler av Sentral og a琀琀rak琀椀v beliggenhet i etablert boligområde i Sandviken.
bygningsmassen. Megler skal også opplyse om det foreligger ferdiga琀琀ester eller

---

[d101_d101 | Side [1]]
eten av eiendommen: andelene.
Energikarakter: G PlanID 71740000. Kommuneplanens arealdel KPA 2027. Eiendommen er tilknyttet offentlig vann‑ og
Saksnr: 202417461 avløpssystem. Stikkledningene fra eiendommen og ut til Borettslagsmodellen innebærer at borettslaget eier
Energifarge: Rød PlanID 65790000. Bergenhus. Bybanen fra sentrum til det kommunale nettet er private, og eiendommen, mens andelseierne eier andeler i
40 41

## Side 22

OM EIENDOMMEN OM EIENDOMMEN
borettslaget, som gir borett til en bestemt

---

[d101_d101 | Side [1]]
te visninger, samt påløpte utlegg. alarmtjenester
eiendomsmegler stanse gjennomføringen av Timepris ved slik beregning er kr 3500. SpareBank 1 SMN ‑ tilbyder av lånefinansiering.
Eiendomsmegler skal så snart som mulig bekrefte transaksjonen. Selger vil i et slikt tilfelle ha misligholdt
skriftlig overfor budgivere at budene deres er mottatt, og sine forpliktelser, og kjøper vil kunne ha et krav mot Hvilke produkter/ tjenester kjøper og selger får i
Oppdragsanvarlig
vil uoppfordret gi sin vurdering av det

---

[d101_d101 | Side [1]]
om og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren

---

[d101_d101 | Side [1]]
standsgrad er sa琀琀 u琀椀fra alder. Hovedstamme/avløpsrør er skjult og
琀椀lstandsvurdering må u琀昀øres av spesial昀椀rma. Varmtvannstank i ko琀琀. Deksel må monteres foran el.ledninger. Deksel
foreligger.
Vurdering av avvik:
• Mer enn halvparten av forventet bruks琀椀d er passert på innvendige
avløpsledninger.
Konsekvens/琀椀ltak
• Det er ikke behov for utbedrings琀椀ltak siden anlegget fungerer i dag,
Bunker/skjevheter i rist i ytre del av ven琀椀lator.
men ut ifra alder kan skader plutselig oppstå på eldre

---

[d101_d101 | Side [1]]
is i tilstandsrapporten. Når arealet måles tas det
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og ikke hensyn til om arealet er lovlig oppført eller om bruken er
Dette gjelder blant annet: materialer.). lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
i. våtrom (bad, vaskerom) og andre fuktutsatte rom •stikkprøvetakninger er tilfeldig valgt og kan innebære kontroll •Eiendommens markedsverdi kan ikke

---

[d101_d101 | Side [1]]
rem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle

---

[d101_d101 | Side [1]]
unktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere

---

[d101_d101 | Side [1]]
. Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje,

---

[d101_d101 | Side [1]]
 strid
med teknisk forskrift og mangle godkjennelse hos kommunen for
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del den aktuelle bruken, uten at dette får betydning for om arealet
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke måles og oppgis i tilstandsrapporten. Når arealet måles tas det
vurdert etter

---

[d101_d101 | Side [1]]
 bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av

---

[d101_d101 | Side [1]]
ategori.
(teknisk tilstandsanalyse ved omsetning av bolig), samt elektrofaglig fagperson. •Normal slitasjegrad: forventet slitasje av materiale i overflaten
Takstbransjens retningslinjer for arealmåling når det gjelder som er basert på enkle visuelle observasjoner. Kan vurderes •Se øvrig informasjon om areal i rapporten, Norsk Standard 3940
fordeling mellom P-areal og S-areal. TILLEGGSUNDERSØKELSER sammen med bygningsdelens alder. (2012 og 2023) og veiledningen til disse.
•Bygningssakkyndig er ikke

---

[d101_d101 | Side [1]]
g ikke er
bør utføres av faglærte, utover det som er nevnt avvik fra normal slitasje og/ eller høy alder, noe som kan rekkverk. foretatt siden det ikke er mulig.
tidligere? innebære behov for utbedringer. Bygningsdeler som er ‑ Utvendig balkong med stue på grunn av for lav
‑ Har fjernet et vindfang og lagt flis på gulvet ved merket med TGIU er ikke blitt vurdert av takstmannen. rekkverkshøyde i forhold til dagens krav og rust på
Øvrig
inngang. rekkverk.
Beskrivelsen av boligen nedenfor er hentet direkte

---

[d101_d101 | Side [1]]
lstanden, foreta utski昀琀ninger v/ behov. Tidspunkt for
eventuell utski昀琀ing av dører er vanskelig å anslå da de琀琀e vil variere ut i Vurdering av avvik: Oppgraderinger:
fra klima琀椀ske forhold, vedlikeholdsintervall etc. • Rekkverket er for lavt i forhold 琀椀l dagens krav 琀椀l rekkverkshøyder. - Nye over昀氀ater i leiligheten i forbindelse med innredning i 2003.
• Det er påvist andre avvik: - Nyt parke琀琀gulv i stue/kjøkken i 2020.
Balkongen fremstår med eldre standard. Rust ble observert 昀氀ere steder - Ny琀琀

---

[d101_d101 | Side [1]]
 er montert
Eiendommens
pågår fasadeoppgradering i Brl. Arbeidet utføres av uten et lukket fordelerskap og det er irr på rør.
2019: Berland Bygg AS. Fasadene er Brls ansvar. ‑ Avløpsrør på grunn av alder.
tilstand
‑ Montert ladestasjon for elbil, selve laderen på utsiden ‑ Varmtvannstank på grunn av alder.
Takstmann: Trond Bertelsen byttet ut med ny modell i 2024. Utført av firma. Taktekking: Saltak. Taksperrer er tekket med sutak, lekter ‑ Elektrisk anlegg på grunn av at det ikke er utført

---

[d101_d101 | Side [1]]
kjøkken har noen fuktskader.
Rust på rekkverk. Gammel parke琀琀 på soverom har noen slitasje 昀氀ekker.
Dører 琀椀l soverom og bad har noen hakk.
Balkonger, terrasser og rom under balkonger Lister har noe ulik u琀昀ørsel og stand.
Glip mellom dørblad - pakning. Vurdering av avvik:
Vestvendt balkong på 3,4 m² med utgang fra stue/kjøkken. Balkongen er
• Det er påvist andre avvik:
Dører overbygd.
Balkongen er oppført i betong og belagt med tretremmer. Parke琀琀 har en del slitasje/striper, spesielt på soverommene. Det

---

[d101_d101 | Side [1]]
r og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova. eller innen kort 琀椀d. Det er påvist funksjonssvikt eller sammenbrudd.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
forbedret.
Det kan være avvik/skader som ikke er avdekket.
Tilstandsrapporten beskriver ikke hele

---

[d101_d101 | Side [1]]
llet, unntatt to stk. Isolerglass på kjøkkenvindu er Skapfronter under vask har synlig merke etter skrue.
el‑anlegget eller andre installasjoner? er vedlagt salgsoppgaven. Det er viktig at interessenter fra 1998. ‑ Avtrekk på kjøkken på grunn av rist i ytre del av
‑ Lagt varmefolie selv i stue under parkett. grundig gjennomgår disse dokumentene før bud legges ventilator har bunker/ skjevheter.
inn. Bygningsdeler vurdert med TG2:
Har du ladeanlegg/ ladeboks for elbil i dag? ‑ Utvendige vinduer på grunn av

---

[d101_d101 | Side [1]]
1980-tallet, unnta琀琀 to stk. Isolerglass på kjøkkenvindu
Byggeår Kommentar er fra 1998.
1959 Oppgi琀琀 i boliginfo fra BOB Vinduene har normal slitasje, alder ta琀琀 i betraktning.
Tekniske installasjoner > Varmtvannstank Gå til side
Anvendelse Vinduer er Brls ansvar.
TG0: Ingen avvik Bolig
Tekniske installasjoner > Elektrisk anlegg Gå til side Forventet bruks琀椀d:
TG1: Mindre eller moderate avvik Vinduer har en normal bruks琀椀d på 20 琀椀l 60 år.
Standard
TG2: Avvik som kan kreve 琀椀ltak
Våtrom > U-etg > Bad (5,2

---

[d101_d101 | Side [1]]
nner seg i. Benyttes ved til bygningens forvaltning, drift eller vedlikehold.
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av avvik og alder.
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje
•I en overgangsperiode skal rapporter som benyttes i
og sokkeletasje) eller andre bygningsdeler, skal skje etter eiers
•Skadegjørere: i hovedsak råte, sopp og skadedyr. boligomsetningen eller dersom det er en del av oppdraget også
aksept. Hulltaking av våtrom og rom under

---

[d101_d101 | Side [1]]
ng eller
modernisering kan fremkomme feil og mangler. En må være klar
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
over at bygningen/leiligheten kan ha eldre bygningsdeler som ikke
Innvendig > Pipe og ildsted Gå til side er ski昀琀et og dermed kan være på slu琀琀en av sin leve琀椀d. Det er vik琀椀g
å påpeke at bygningen/leiligheten anses å være oppført i henhold
琀椀l de forskri昀琀er som gjaldt da denne bygningen ble oppført, og det
Våtrom > U-etg > Bad (5,2 m²) > Tilliggende Gå til side må derfor påregnes et avvik i forhold

---

[d101_d101 | Side [1]]
2 og 2023) og veiledningen til disse.
•Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å •Forventet gjenværende brukstid: anslått tid et byggverk eller en
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften. del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
Rapporten beskriver avvik, det vil si en tilstand som er dårligere termer og definisjoner

---

[d101_d101 | Side [1]]
andard
TG2: Avvik som kan kreve 琀椀ltak
Våtrom > U-etg > Bad (5,2 m²) > Over昀氀ater vegger og Gå til side Takstobjektet: Vurdering av avvik:
TG3: Store eller alvorlige avvik himling 4 roms andelsleilighet over to plan (u-etg & 1-etg). • Det er påvist andre avvik:
TG IU: Konstruksjoner som ikke er undersøkt Vestvendt balkong på 3,4 m² med utgang fra stue/kjøkken. Eldre vinduer bærer preg av elde/slitasje. Kjøkkenvindu virker å ha
Våtrom > U-etg > Bad (5,2 m²) > Over昀氀ater Gulv Gå til side Balkongen er

---

[d101_d101 | Side [1]]
bilitering av vinduer og Før deler av rammelånet ble tatt ut var fellesgjelden til fjellene turmulighetene er gode, det å vandre rundt blant
Økonomi
vedlikehold fasade. Dette har medført et låneopptak på borettslaget kr. 2 532 673,16,‑ pr 16.10.2025 fordelt på nydelig trehusbebyggelse og mer ærverdige bygårder i
kr 10,5 millioner, og vil på sikt gi økte felleskostnader og andelene. Sandviken er en opplevelse i seg selv ‑ og en "tursti" du
Prisantydning
fellesgjeld. aldri blir lei av. Brosteinsbelagte

---

[d101_d101 | Side [1]]
ysninger fra Enhetsregisteret:
Organisasjonsnummer: 947 060 112. Revisjoner
Navn/foretaksnavn: Bore琀琀slaget Amalie Skramsvei 6.
Organisasjonsform: Bore琀琀slag.
Registrert i Enhetsregisteret: 19. februar 1995.
S琀椀昀琀elsesdato: 14. april 1961.
Næringskode(r): 97.001 Ak琀椀viteter i bore琀琀slag og boligsameier.
Versjon Ny versjon Kommentar
Vedlikehold:
1 24.10.2025
Bore琀琀slaget har igangsa琀琀 utski昀琀ing av vinduer og vedlikehold fasade. De琀琀e vil
medføre låneopptak og kan gi økte felleskostnader. Kontakt styret for

---

[d101_d101 | Side [1]]
finner du et eldorado
Felleskostnader kr 5 727,‑ Fellesgjeld pr. 07.01.2026: 181 789,45 av områder med utallige turmuligheter, hvor idyllene Barnehage/ Skole/ Fritid: Barnehager:
Parkering: kr. 473,‑ ligger tallrike og venter på deg. Eksempler på dette er ‑ 7 min gange til Kidsa Christinegård (1‑5 år)
Total fellesgjeld for Borettslaget Amalie Skramsvei 6 pr. nevneverdige Fjellveien, Permisjonsstien, ‑ 7 min gange til Sandviken barnehage (1‑5 år)
Videre gjøres det oppmerksom på at borettslaget 07.01.2026: 4

---

[d101_d101 | Side [1]]
er (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen). markedspris på materialer og tjenesteyter. Tiltak mellom kr 50 000 - 100 000
I rapporten skal det se琀琀es anslag for utbedringskostnad for TG3,
© iVerdi 2023 og slikt anslag kan også gis ved TG2. Tiltak mellom kr 100 000 - 300 000
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es

---

[d101_d101 | Side [1]]
rammen. Brøken for denne leiligheten, altså hvor stor
Vedtekter/ husordensregler
områdereguleringsplan for Kristianholms, Sadvikstorget borettslaget har prioritet over tinglyste lån når det gjelder andel denne vil få av en fremtidig fellesgjeld er 34248 /
Borettslagets vedtekter og husordensregler ligger og Rosegrenden, dekningsgrad 100%. Prosjektet på betaling av felleskostnader, og kan kreve inn pengene før 864444, tilsvarende ca 3,962%. Total fellesgjeld for
vedlagt i salgsoppgaven. Kristiansholm er

---

[d101_d101 | Side [1]]
 kan foreligge
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og Tiltak mellom kr 10 000 - 50 000
avvik og 琀椀ltak som ikke kommer frem av rapporten.
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
Utbedringskostnad avhenger blant annet av personlige valg av og
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer

---

[d101_d101 | Side [1]]
u
Prisantydning
fellesgjeld. aldri blir lei av. Brosteinsbelagte gater, små smau og
Kr 5 290 000 grønne lunger. Det må også nevnes at du har flere flotte
Sikringsordning
I styremøte 27.10.2025 ble det vedtatt en økning i parkanlegg i nabolaget, herunder Meyermarken et par
felleskostnadene på 15% fra 01.01.2026 (dette er bakt inn Borettslaget er dekket av Klare Finans AS, minutter unna. Perfekt om du ønsker å sole deg eller nyte
Omkostninger kjøpers beløp
i opplyste felleskostnader, samt at leie av

---

[d101_d101 | Side [1]]
 2019 men ladestasjonen ble i 琀椀llegg
boliglag eller bore琀琀slag. For 琀椀lstandsopplysninger om kjøkkeninnredning i 2013. ski昀琀et i 2024.
bygningsmassen henvises det 琀椀l bore琀琀slaget/sameiets og deres En-stavs eikeparke琀琀 på gulv, malt strie på vegger, takplater i
vedlikeholdsru琀椀ner, og ev. 琀椀lstandsrapporter. Det anbefales at alle himling.
sameier, boliglag og bore琀琀slag foretar jevnlig kontroll av IKEA kjøkkeninnredning med sle琀琀e hvite fronter i høyglans. Takhøy
bygningsmassen. innredning. Arealer Gå 琀椀l

---

[d101_d101 | Side [1]]
opp med
Fellesgjelden var pr 16.10.25 kr. kr 100 341,‑ Da noe av hyppige avganger inn mot UIB, BI og HVL og og i andre
rammen er tatt ut er fellesgjeld pr 06.01.2026 kr. 181 789,‑ Info om formuesverdi: Skatteetaten beregner en retningen mot NHH.
Estimert totalpris ink. omk
boligverdi (beregnet markedsverdi for bolig) basert på
Kr 5 482 039 Lånebetingelser fellesgjeld: Spesifikasjon av lån SSBs statistiske opplysninger om omsatte boliger. I
Barnehage/ Skole
Bank: Dnb Bank ASA beregningen tas det hensyn til

---

[d101_d101 | Side [1]]
DOMMEN OM EIENDOMMEN
borettslaget, som gir borett til en bestemt bolig. Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
Lovanvendelse
Andelseierne har ikke personlig ansvar for borettslagets oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
fellesgjeld, men de må dekke borettslagets løpende Regelverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og synlig

---

[d101_d101 | Side [1]]
 tekst ekstrahert)

## Side 8

(Ingen tekst ekstrahert)

## Side 9

(Ingen tekst ekstrahert)

## Side 10

(Ingen tekst ekstrahert)

## Side 11

(Ingen tekst ekstrahert)

## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

(Ingen tekst ekstrahert)

## Side 15

(Ingen tekst ekstrahert)

## Side 16

Plantegning

## Side 17

OM EIENDOMMEN

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
borettslaget er i gang med rehabilitering av vinduer og Før deler av rammelånet ble tatt ut var

---

[d101_d101 | Side [1]]
len. vedlikeholdsansvaret for disse påhviler sameiet.
Borettslag Info energiklasse
S. Saksnr: 202220560 Adkomst til eiendommen skjer via offentlig vei.
Amalie Skramsvei 6 Borettslaget Se fullstendig energiattest fra selger som vedlegg til
salgsoppgave. Megler påtar seg ikke ansvar for Planer i nærheten av eiendommen
Utleie
Organisasjonsnummer: 947060112 informasjonen som fremgår av energiattesten. Eiendom 168/ 535. Ekregaten 14, bruksendring fra
tilleggsdel til hoveddel bolig. Saksnr: 202417068 Adgang til

---

[d101_d101 | Side [1]]
ninger kjøpers beløp
i opplyste felleskostnader, samt at leie av www.klarefinans.no. Laget er sikret mot tap som følge av en piknik med venner.
5 290 000 (Prisantydning) parkeringsplassen vil øke til kr 473,‑ og internett vil øke at en andelseier ikke betaler sine felleskostnader, etter
181 789 (Andel av fellesgjeld) med kr 70 i mnd fra kr. 01.01.2026. gjeldende vilkår. Avtalen om sikring er gyldig til den sies Det er flere dagligvarebutikker i området, herunder
opp av en av partene. Nærbutikken Sandviken

---

[d101_d101 | Side [1]]
måle radon i hjemmet si琀琀. • Det er påvist andre avvik:
Mrk. For boliger som leies ut, er det gi琀琀 grenser for radonnivået i Innerdør 琀椀l soverom 2 i 1-etg tar i karm og badedør glir delvis igjen når
Det er stedvis knirk i gulv. strålevernforskri昀琀en. den er åpen. Det er slitasje/bruksmerker/hakk noen steder på
innerdører.
Lydisolering i etasjeskillere er dårligere enn dagens standard slik at lyder Radonkart: h琀琀ps://geo.ngu.no/kart/radon_mobil/
Konsekvens/琀椀ltak
vil merkes mer i bygninger fra denne

---

[d101_d101 | Side [1]]
le eiendommen,
Diverse
dyr. Styret kan samtykke i at brukeren av boligen holder blant annet medføre utredningsplikt for tiltakshaver/
dyr dersom gode grunner taler for det, og dyreholdet ikke forslagstiller og eventuelt krav om avbøtende tiltak. Det oppmerksom på at borettslaget er i gang med
Regulering
er til ulempe for de andre brukerne av eiendommen. rehabilitering av fasade og vinduer. Denne leiligheten er
Regulerings og arealplaner: Eiendommen ligger i For mer informasjon om reguleringsforhold kontakt

---

[d101_d101 | Side [1]]
byggeår/alder. Norge er et av de landene i verden som har høyest konsentrasjon Innerdørene har normal slitasje, alder ta琀琀 i betraktning.
Ca 05 mm - 29 mm skjevheter registrert v/kontroll. Det er spesielt skjevt av radongass i innelu昀琀en. De琀琀e skyldes blant annet geologiske og
på hovedsoverom og soverom 2 i 1-etg. klima琀椀ske forhold. Radongassen kan verken sees, luktes eller Vurdering av avvik:
smakes. Statens strålevern anbefaler alle å måle radon i hjemmet si琀琀. • Det er påvist andre avvik:
Mrk. For

---

[d101_d101 | Side [1]]
on_mobil/
Konsekvens/琀椀ltak
vil merkes mer i bygninger fra denne 琀椀dsperioden. Eiendommen ligger i område med aktomhetsgrad moderat 琀椀l lav.
• Andre 琀椀ltak:
Slitasje/striper i parke琀琀gulv. Kommentar: Vurdering av avvik: Noen innerdører bør justeres. Oppgraderinger må påregnes dersom
Målingen er u琀昀ørt med laser på 琀椀lfeldig punkter. Ujevnheter kan ikke • Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med man ønsker dagens standard.
utelukkes. Vurdering er ikke u琀昀ørt e琀琀er NS 3600, men

---

[d101_d101 | Side [1]]
 etasjeskille/ gulv mot grunn på grunn av
sprengstein/ grov pukk på fjell. Videre grunnforhold er ujevnheter/ skjevheter er normalt i.h.h til byggeår/ alder. Søndre Allmenningen 7, 5036 BERGEN
2020: ikke kjent. Grunnmur/ fundamenter av betong. Gulv mot Ca. 05 mm ‑ 29 mm skjevheter registrert v/ kontroll.
‑ Eik heltre trappetrinn lagt i trapp. Utført i privat regi. grunn i betong. ‑ Innvendig radon grunnet at det ikke er foretatt Gnr. 168, bnr. 779, ideell andel 1/ 1
radonmåling, og bygget er heller ikke

---

[d101_d101 | Side [1]]
 i
‑ Varmekabler i entre/ gang/ trapperom, bad og soverom i Hele eller deler av eiendommen antas å være berørt av boligen, har imidlertid rett til å leie ut deler av boligen til
Borettslagets forsikringsselskap: If Skadeforsikring NUF u‑etg. støy fra veitrafikk over grenseverdier gitt av statlige andre uten styregodkjenning, jf. borettslagsloven § 5‑4.
‑ Folie gulvvarme i stue/ kjøkken (fra 2020). myndigheter og i kommuneplanens bestemmelser. Korttidsutleie er tillatt i opptil 30 døgn per år

---

[d101_d101 | Side [1]]
nr. 779, ideell andel 1/ 1
radonmåling, og bygget er heller ikke utført med i Bergen kommune.Andelsnr. 34 i Amalie Skramsvei 6
2020: Veggkonstruksjon: Bygningen er oppført i plasstøpte radonsperre. Borettslaget med orgnr. 947060112
‑ Parkett med varmefolie lagt i stue. Utført i privat regi konstruksjoner som bærevegger og etasjeskillere. ‑ Innvendige trapper på grunn av at det mangler
Ytterveggene er utført som bindingsverk. Ytterkledning håndløper på vegg i trappeløpet.
Selger
2020: av fasadeplater.

---

[d101_d101 | Side [1]]
 har stand-by modus trekker strøm selv når de ikke er i bruk, og må derfor slås helt av.
Bygningsmessige tiltak
82 83

## Side 43

Nabolagsprofil
Søndre Allmenningen 7 - Nabolaget Sandvikstorget/Wilhelmineborg - vurdert av 70 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Enslige Veldig trygt 84/100
Familier med barn
Kvalitet på skolene
Studenter
Bra 66/100
Naboskapet
Offentlig transport Høflige 59/100
Amalie Skrams vei 2 min
Linje 18 0.1 km
Aldersfordeling
Norges Fiskerimuseum 4 min
Linje

---

[d101_d101 | Side [1]]
 bestemmelser. Korttidsutleie er tillatt i opptil 30 døgn per år uten
Polisenummer fellesforsikring: SP0003231454 Antakelsen er basert på overordnede støyberegninger. samtykke fra styret.
Hvis et rom på visningen mangler fast installert Det vil kunne få betydning for behandlingen av plan‑ og
Husdyr: Det søkes til styret om brukeren ønsker å holde oppvarmingskilde, vil ikke dette bli inkludert i handelen. byggesaker som omfatter den aktuelle eiendommen,
Diverse
dyr. Styret kan samtykke i at brukeren av

---

[d101_d101 | Side [1]]
8 - Bnr 779 Vallaskaret 32 Gnr 168 - Bnr 779 Vallaskaret 32
4601 BERGEN 5227 NESTTUN 4601 BERGEN 5227 NESTTUN
Tilstandsrapport Tilstandsrapport
Plasstøpt betong. Gulv mot grunn i betong. Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med Furu fyllingsdører (hvitmalte).
Gulv ble kontrollert med laser. radonsperre.
Innerdørene ble montert i 2003. Innerdørene er malt i 2025.
Mindre ujevnheter/skjevheter er normalt i.h.h 琀椀l byggeår/alder. Norge er et av de landene i verden som har høyest

---

[d101_d101 | Side [1]]
standard.
utelukkes. Vurdering er ikke u琀昀ørt e琀琀er NS 3600, men vil gi en indikator radonsperre.
på skjevheter i etasjeskille. Konsekvens/琀椀ltak VÅTROM
• Det bør gjennomføres radonmålinger.
Vurdering av avvik:
U-ETG > BAD (5,2 M²)
• Det er målt høydeforskjell på mellom 15-30 mm gjennom hele
rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l Pipe og ildsted Generell
godkjente måleavvik.
Konsekvens/琀椀ltak Pipe i murkonstruksjoner. Bad. Areal: 5,2 m².
• For å få 琀椀lstandsgrad 0 eller 1 må

---

[d101_d101 | Side [1]]
r)
Videre gjøres det oppmerksom på at borettslaget 07.01.2026: 4 588 496,04 Sandviksbatteriet, Stoltzen og Fløyen. Det er ikke bare i ‑ 11 min gange til Mulesvingen barnehage (0‑5 år)
34 35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
mottatt fra kontrollansvarlig når et søknadspliktig tiltak er tegnet inn som kjøkken. Tiltaket er ikke søknadspliktig. himlingshøyde. Arealet inngår ikke i BRA, men opplyses
Parkering
utført i samsvar med tillatelsen og øvrige krav etter plan‑ Se punkt ferdigattest for mer info.

---

[d101_d101 | Side [1]]
w Antczak
54 74 00. www.bob.no
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
Innskudd, pålydende mm
Kommentar: AVVIK TAKHØYDE:
Takhøyden i nedsenket del av stue/kjøkken er under 2,20 m.
Andelsnummer Pålydende Andel fellesformue Andel fellesgjeld
34 100 49 824 31.12.2024 100 341 16.10.2025
TEGNINGER/LOVLIGHET:
Det er framlagt byggetegninger. Kommentar
Kjøkkenet er 昀氀y琀琀et fra sin opprinnelige plassering og det er laget åpen stue/kjøkkenløsning. Månedlig andel

---

[d101_d101 | Side [1]]
 gulvhøyde gjelder regler
vanlig å bygge og regler som gjaldt på søknadstidspunktet. Noen •befaringen skal begrenses til kun visuelle observasjoner på om fri bredde for at arealet skal være måleverdig, med betydning Opplysninger om årstall og og utskiftinger/fornyelser av rom og
rom og bygningsdeler slik som bad og vaskerom, og forhold som tilgjengelige flater uten fysiske inngrep (f.eks. riving). for BRA av for eksempel loft med skråtak. BRA består av internt bygningsdeler er gitt fra eier/oppdragsgiver,

---

[d101_d101 | Side [1]]
25 Side: 22 av 26
72 73

## Side 38

Søndre Allmenningen 7, 5036 BERGEN Takstoppdrag AS Søndre Allmenningen 7, 5036 BERGEN Takstoppdrag AS
Gnr 168 - Bnr 779 Vallaskaret 32 Gnr 168 - Bnr 779 Vallaskaret 32
4601 BERGEN 5227 NESTTUN 4601 BERGEN 5227 NESTTUN
Regulering
Eiendommen omfa琀琀es av kommunedelplan (15750000). Formål: Bolig. Kilder og vedlegg
Planid: 15750000.
Saksnr: 1996/14460, 2000/1992
Planens navn: BERGENHUS. KDP SANDVIKEN - FJELLSIDEN NORD.
Type plan: Kommunedelplan.
Planstatus: Endelig vedta琀琀

---

[d101_d101 | Side [1]]
er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å

---

[d101_d101 | Side [1]]
vertakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen

---

[d101_d101 | Side [1]]
ke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept).

---

[d101_d101 | Side [1]]
er i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende

---

[d101_d101 | Side [1]]
trygghet og profesjonell juridisk hjelp dersom det interessenter anbefales derfor å undersøke eiendommen Et forbrukerkjøp foreligger når en fysisk person kjøper Eiendomsmegler kan også kontaktes for tilsendelse av
oppdages uventede feil eller mangler ved boligen de nøye, gjerne sammen med fagperson, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til budkjema, og budskjema finnes også i salgsoppgaven.
neste fem årene. Les mer om Boligkjøperforsikring i Dersom kjøper velger å kjøpe uten å ha

---

[d101_d101 | Side [1]]
ktefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er

---

[d101_d101 | Side [1]]
s
− Spar verdifull tid
− Få advokatkostnadene dekket


Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte

---

[d101_d101 | Side [1]]
ietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan

---

[d101_d101 | Side [1]]
gers ‑ Hovedsikring skiftet til automatsikring. Utført av firma. Generelt: I bygninger av denne alder må det påregnes overgang mellom baderomsplater ‑ sokkellist.
egenerklæringsskjema følger vedlagt salgsoppgaven. Dokumentasjon foreligger. fare for fuktvandring i mur/ gulv pga at det ikke var vanlig ‑ Overflater gulv på bad på grunn av lite fall til sluk og
Interessenter oppfordres til å gjennomgå dette nøye. byggeskikk i aktuell tidsperiode å sikre mur/ såle på noen fliser har bom.
samme metode som dagens

---

[d101_d101 | Side [1]]
ttslaget
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.
116

## Side 60

7.

8.


---

[d101_d101 | Side [1]]
lg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2018
Hvor lenge har du eid boligen?
Antall år 7
Antall måneder 0
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: WSA, CG

---

[d101_d101 | Side [1]]
e deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
 kontraktsmøte.

− Hvordan: Krysses av i kjøpekontrakten.
Helsing
Forsikringsbevis og vilkår sendes per e-post.
Styret i burettslaget
Forsikringen er meglet frem av Söderberg & Partners og

---

[d101_d101 | Side [1]]
ingsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til

---

[d101_d101 | Side [1]]
tak, lekter ‑ Elektrisk anlegg på grunn av at det ikke er utført BKK
Dokumentasjon foreligger. og betongtakstein. Renner og nedløp i sort aluminium. el‑kontroll de siste 5 årene.
Type takst avholdt av takstmann: Tilstandsrapport Taktekking er av nyere årgang. Taktekking er Brls ansvar. ‑ Overflater vegger og himling på bad på grunn av noe
2025: slitasje på nedre del av vegger i dusjsone. Det er usikker
Sammendrag selgers egenerklæring: Selgers ‑ Hovedsikring skiftet til automatsikring. Utført av firma.

---

[d101_d101 | Side [1]]
 og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
Kontrakts‑
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra ikke‑forbrukere, selv om budet er lavere selgers ansvar er begrenset til det som følger direkte av
salgsoppgaven er basert på selgers informasjon, enn et forbrukerbud. Når kjøper ikke er forbruker, kan avtalen, jf. avhendingsloven § 3‑9. I disse tilfellene
grunnlag
fagkyndig

---

[d101_d101 | Side [1]]
å velge hvilket bud som
Tidspunkt for overtakelse avtales mellom kjøper og herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste. Kjøperens plikt til å foreta grundige undersøkelser gjelder
selger. egenerklæring. Kjøper anses for å være kjent med også fullt ut for kjøpere som ikke omfattes av
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen.
slike forhold kan ikke senere

---

[d101_d101 | Side [1]]
jf. avhendingsloven § 3‑9. I disse tilfellene
grunnlag
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som fravikes § 3‑3 andre ledd, og eventuelle arealavvik
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det vurderes etter § 3‑8.
Overtakelse
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
Tidspunkt for overtakelse avtales mellom

---

[d101_d101 | Side [1]]
gsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som egenandel).
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
hos eiendomsmegler før bud inngis. Kontakt – med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår:
eiendomsmegler for spørsmål. selger. av om kjøper er

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Høy fellesgjeld og planlagt økning i felleskostnader",
      "evidence": [
        "Total fellesgjeld for Borettslaget Amalie Skramsvei 6 pr. 07.01.2026: 4 588 496,04",
        "Andel fellesgjeld pr. 07.01.2026: 181 789,45",
        "I styremøte 27.10.2025 ble det vedtatt en økning i felleskostnadene på 15% fra 01.01.2026",
        "Leie av parkeringsplassen vil øke til kr 473,‑ og internett vil øke med kr 70 i mnd fra kr. 01.01.2026",
        "Fellesgjelden er enda ikke helt fordelt på andelene, og denne økningen vil skje gradvis",
        "Fellesgjelden på denne andelen har økt ca 80.000,‑ siden man begynte å ta ut fra rammen"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Pågående rehabilitering av fasade og vinduer med ytterligere låneopptak og fremtidige kostnadsøkninger",
      "evidence": [
        "Borettslaget er i gang med rehabilitering av vinduer og vedlikehold fasade. Dette har medført et låneopptak på kr 10,5 millioner",
        "Denne leiligheten er enda ikke berørt da vestsiden er planlagt å bli rehabilitert mot våren 2026",
        "Borettslaget har tatt opp et lån på 10,5 millioner kroner for å dekke kostnaden for rehabiliteringen",
        "Vil på sikt gi økte felleskostnader og fellesgjeld",
        "Styreleder opplyser om at de ikke ser for seg å måtte bruke hele beløpet, og det er ikke planlagt ytterligere låneopptak"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Ingen radonmåling er foretatt og bygget mangler radonsperre",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre",
        "Det bør gjennomføres radonmålinger",
        "Innvendig radon grunnet at det ikke er foretatt radonmåling, og bygget er heller ikke utført med radonsperre",
        "Norge er et av de landene i verden som har høyest konsentrasjon av radongass i inneluften",
        "Eiendommen ligger i område med aktomhetsgrad moderat til lav"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R4",
      "description": "Elektrisk anlegg ikke kontrollert de siste 5 år",
      "evidence": [
        "Elektrisk anlegg på grunn av at det ikke er utført el-kontroll de siste 5 årene",
        "Elektrisk anlegg er listet som bygningsdel vurdert med TG2"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R5",
      "description": "Balkong med for lav rekkverkshøyde og rust på rekkverk",
      "evidence": [
        "Utvendig balkong med stue på grunn av for lav rekkverkshøyde i forhold til dagens krav og rust på rekkverk",
        "Rekkverket er for lavt i forhold til dagens krav til rekkverkshøyder",
        "Balkongen fremstår med eldre standard. Rust ble observert flere steder"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R6",
      "description": "Avløpsrør og varmtvannstank med høy alder – risiko for plutselig svikt",
      "evidence": [
        "Avløpsrør på grunn av alder",
        "Varmtvannstank på grunn av alder",
        "Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger",
        "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R7",
      "description": "Støybelastning – eiendommen ligger i gul og rød støysone",
      "evidence": [
        "Gul støysone – Veistøy, dekningsgrad 36,3%",
        "Rød støysone – Veistøy, dekningsgrad 8,8%",
        "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser",
        "Antakelsen er basert på overordnede støyberegninger"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R8",
      "description": "Dårlig energikarakter – energimerke G (rød)",
      "evidence": [
        "Energikarakter: G",
        "Energifarge: Rød"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R9",
      "description": "Skjevheter i gulv/etasjeskille over akseptable grenser",
      "evidence": [
        "Ca. 05 mm – 29 mm skjevheter registrert v/ kontroll",
        "Det er spesielt skjevt på hovedsoverom og soverom 2 i 1-etg",
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Manglende håndløper i trappeløp",
      "evidence": [
        "Innvendige trapper på grunn av at det mangler håndløper på vegg i trappeløpet"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R11",
      "description": "Fuktrisiko på bad – lite fall til sluk og bom på fliser",
      "evidence": [
        "Overflater gulv på bad på grunn av lite fall til sluk og noen fliser har bom",
        "I bygninger av denne alder må det påregnes fare for fuktvandring i mur/gulv pga at det ikke var vanlig byggeskikk i aktuell tidsperiode å sikre mur/såle på samme metode som dagens"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Utført arbeid av ufaglærte – fjerning av vindfang og flislegging",
      "evidence": [
        "Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Ja",
        "Har fjernet et vindfang og lagt flis på gulvet ved inngang",
        "Lagt varmefolie selv i stue under parkett"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Takhøyde under 2,20 m i deler av stue/kjøkken",
      "evidence": [
        "Er det påvist avvik i forhold til rømningsvei, dagslysflate eller takhøyde? Ja",
        "AVVIK TAKHØYDE: Takhøyden i nedsenket del av stue/kjøkken er under 2,20 m"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R14",
      "description": "Kjøkken flyttet fra opprinnelig plassering – mulig avvik fra godkjente tegninger",
      "evidence": [
        "Kjøkkenet er flyttet fra sin opprinnelige plassering og det er laget åpen stue/kjøkkenløsning",
        "Tegnet inn som kjøkken. Tiltaket er ikke søknadspliktig"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    },
    {
      "risk_id": "R15",
      "description": "Planer om utbygging av ca. 400 leiligheter i nærområdet (Kristiansholm) – kan påvirke utsikt, trafikk og markedsverdi",
      "evidence": [
        "Kristiansholm er under planlegging av OBOBS og der skal det bygge cirka 400 leiligheter fordelt på flere bygg",
        "Reguleringsplaner under arbeid: PlanID 71720000. Bergenhus, Bybanen, Delstrekning"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R16",
      "description": "Pipe og ildsted ikke undersøkt (TGIU) – ukjent tilstand",
      "evidence": [
        "Innvendig > Pipe og ildsted – konstruksjoner som ikke er undersøkt",
        "Pipe i murkonstruksjoner – ikke vurdert av takstmannen"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R17",
      "description": "Eldre vinduer med slitasje – isolerglass fra 1980-tallet og 1998",
      "evidence": [
        "Utvendige vinduer på grunn av alder",
        "Vinduer fra 1980-tallet, unntatt to stk. Isolerglass på kjøkkenvindu er fra 1998",
        "Eldre vinduer bærer preg av elde/slitasje"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R18",
      "description": "Styregodkjenning kreves for ny andelseier – risiko for avslag",
      "evidence": [
        "Ny andelseier må godkjennes av styret",
        "Styret kan kun nekte godkjenning når det er saklig grunn til det"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R19",
      "description": "Legalpant – borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R20",
      "description": "Slitasje på baderomsvegger og himling – usikker overgang mellom baderomsplater og sokkellist",
      "evidence": [
        "Overflater vegger og himling på bad på grunn av noe slitasje på nedre del av vegger i dusjsone. Det er usikker overgang mellom baderomsplater – sokkellist"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R21",
      "description": "Byggeår 1959 – generell aldersrisiko med mange skjulte konstruksjoner nær eller over forventet levetid",
      "evidence": [
        "Byggeår: 1959 oppgitt i boliginfo fra BOB",
        "En må være klar over at bygningen/leiligheten kan ha eldre bygningsdeler som ikke er skiftet og dermed kan være på slutten av sin levetid",
        "Lydisolering i etasjeskillere er dårligere enn dagens standard slik at lyder vil merkes mer i bygninger fra denne tidsperioden"
      ],
      "source_documents": [
        "d101_d101"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "Hva er tilstandsgraden (TG) for varmtvannstanken og hva er alderen?",
    "Er det dokumentert el-kontroll eller avvik på det elektriske anlegget utover manglende kontroll?",
    "Hva er status på ferdigattest eller brukstillatelse for leiligheten?",
    "Hvilke konkrete tiltak er anbefalt for balkongrekkverket og hva er estimert kostnad?",
    "Er det avvik på kjøkkenavtrekk og hva er tilstandsgraden?",
    "Hva er borettslagets totale økonomi – regnskap og budsjett?",
    "Er det registrert fuktskader eller lekkasjer i boligen tidligere?",
    "Hva er andel fellesgjeld etter at hele rammelånet er trukket ut?"
  ],
  "reasoning": "\nGjennomgangen av dokumentchunkene bekrefter at de fleste identifiserte risikoer er godt underbygget av konkret evidens fra salgsoppgaven og tilstandsrapporten. Følgende justeringer og vurderinger er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Fellesgjeld/felleskostnader): Oppjustert til 0.98 – svært godt dokumentert med konkrete tall, vedtaksdato og gradvis økning av fellesgjeld.\n- R3 (Radon): Beholdt på 0.98 – direkte bekreftet i egenerklæring og tilstandsrapport. Aktomhetsgrad er moderat til lav, men mangelen på radonsperre og måling er uansett en klar risiko.\n\n**Nedjusterte risikoer:**\n- R7 (Støy): Nedjustert til 0.93 – støyberegningene er overordnede og ikke eksakte målinger, noe dokumentet selv presiserer.\n- R14 (Kjøkken flyttet): Nedjustert til 0.60 – dokumentet sier eksplisitt at tiltaket ikke er søknadspliktig, så risikoen for ulovlig bruksendring er lav. Risikoen er mer knyttet til avvik fra originale tegninger.\n- R18 (Styregodkjenning): Nedjustert til 0.72 – dette er en standardbestemmelse i borettslag og ikke en spesifikk risiko for denne eiendommen. Loven begrenser styrets mulighet til å nekte.\n\n**Nye risikoer identifisert:**\n- R20: Slitasje på baderomsvegger/himling med usikker overgang mellom baderomsplater og sokkellist – dette er nevnt i dokumentet men ikke fanget opp som egen risiko.\n- R21: Generell aldersrisiko (byggeår 1959) med mange skjulte konstruksjoner – dokumentet advarer eksplisitt om dette.\n\n**Risikoer som vurderes fjernet eller kraftig nedjustert:**\n- R14 reduseres betydelig siden dokumentet eksplisitt sier tiltaket ikke er søknadspliktig.\n\n**Manglende informasjon som bør hentes inn:**\n- Konkret alder og TG for varmtvannstank\n- Status på ferdigattest\n- Fullstendig regnskap/budsjett for borettslaget\n- Estimerte utbedringskostnader for TG2-poster\n- Andel fellesgjeld når hele rammelånet er trukket ut (brøk 3,962% av fremtidig total)\n"
}

## Raw Response
```json
{
  "id": "msg_01RfSYQtD3Mfi7PZXEKMYDqY",
  "container": null,
  "content": [
    {
      "id": "toolu_01Lnx6bZ3jdgbS6NFCBAEuYa",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Høy fellesgjeld og planlagt økning i felleskostnader",
            "evidence": [
              "Total fellesgjeld for Borettslaget Amalie Skramsvei 6 pr. 07.01.2026: 4 588 496,04",
              "Andel fellesgjeld pr. 07.01.2026: 181 789,45",
              "I styremøte 27.10.2025 ble det vedtatt en økning i felleskostnadene på 15% fra 01.01.2026",
              "Leie av parkeringsplassen vil øke til kr 473,‑ og internett vil øke med kr 70 i mnd fra kr. 01.01.2026",
              "Fellesgjelden er enda ikke helt fordelt på andelene, og denne økningen vil skje gradvis",
              "Fellesgjelden på denne andelen har økt ca 80.000,‑ siden man begynte å ta ut fra rammen"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Pågående rehabilitering av fasade og vinduer med ytterligere låneopptak og fremtidige kostnadsøkninger",
            "evidence": [
              "Borettslaget er i gang med rehabilitering av vinduer og vedlikehold fasade. Dette har medført et låneopptak på kr 10,5 millioner",
              "Denne leiligheten er enda ikke berørt da vestsiden er planlagt å bli rehabilitert mot våren 2026",
              "Borettslaget har tatt opp et lån på 10,5 millioner kroner for å dekke kostnaden for rehabiliteringen",
              "Vil på sikt gi økte felleskostnader og fellesgjeld",
              "Styreleder opplyser om at de ikke ser for seg å måtte bruke hele beløpet, og det er ikke planlagt ytterligere låneopptak"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Ingen radonmåling er foretatt og bygget mangler radonsperre",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre",
              "Det bør gjennomføres radonmålinger",
              "Innvendig radon grunnet at det ikke er foretatt radonmåling, og bygget er heller ikke utført med radonsperre",
              "Norge er et av de landene i verden som har høyest konsentrasjon av radongass i inneluften",
              "Eiendommen ligger i område med aktomhetsgrad moderat til lav"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R4",
            "description": "Elektrisk anlegg ikke kontrollert de siste 5 år",
            "evidence": [
              "Elektrisk anlegg på grunn av at det ikke er utført el-kontroll de siste 5 årene",
              "Elektrisk anlegg er listet som bygningsdel vurdert med TG2"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R5",
            "description": "Balkong med for lav rekkverkshøyde og rust på rekkverk",
            "evidence": [
              "Utvendig balkong med stue på grunn av for lav rekkverkshøyde i forhold til dagens krav og rust på rekkverk",
              "Rekkverket er for lavt i forhold til dagens krav til rekkverkshøyder",
              "Balkongen fremstår med eldre standard. Rust ble observert flere steder"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R6",
            "description": "Avløpsrør og varmtvannstank med høy alder – risiko for plutselig svikt",
            "evidence": [
              "Avløpsrør på grunn av alder",
              "Varmtvannstank på grunn av alder",
              "Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger",
              "Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R7",
            "description": "Støybelastning – eiendommen ligger i gul og rød støysone",
            "evidence": [
              "Gul støysone – Veistøy, dekningsgrad 36,3%",
              "Rød støysone – Veistøy, dekningsgrad 8,8%",
              "Hele eller deler av eiendommen antas å være berørt av støy fra veitrafikk over grenseverdier gitt av statlige myndigheter og i kommuneplanens bestemmelser",
              "Antakelsen er basert på overordnede støyberegninger"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R8",
            "description": "Dårlig energikarakter – energimerke G (rød)",
            "evidence": [
              "Energikarakter: G",
              "Energifarge: Rød"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R9",
            "description": "Skjevheter i gulv/etasjeskille over akseptable grenser",
            "evidence": [
              "Ca. 05 mm – 29 mm skjevheter registrert v/ kontroll",
              "Det er spesielt skjevt på hovedsoverom og soverom 2 i 1-etg",
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Manglende håndløper i trappeløp",
            "evidence": [
              "Innvendige trapper på grunn av at det mangler håndløper på vegg i trappeløpet"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R11",
            "description": "Fuktrisiko på bad – lite fall til sluk og bom på fliser",
            "evidence": [
              "Overflater gulv på bad på grunn av lite fall til sluk og noen fliser har bom",
              "I bygninger av denne alder må det påregnes fare for fuktvandring i mur/gulv pga at det ikke var vanlig byggeskikk i aktuell tidsperiode å sikre mur/såle på samme metode som dagens"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Utført arbeid av ufaglærte – fjerning av vindfang og flislegging",
            "evidence": [
              "Kjenner du til om ufaglærte har utført arbeid som normalt bør utføres av faglærte? Ja",
              "Har fjernet et vindfang og lagt flis på gulvet ved inngang",
              "Lagt varmefolie selv i stue under parkett"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Takhøyde under 2,20 m i deler av stue/kjøkken",
            "evidence": [
              "Er det påvist avvik i forhold til rømningsvei, dagslysflate eller takhøyde? Ja",
              "AVVIK TAKHØYDE: Takhøyden i nedsenket del av stue/kjøkken er under 2,20 m"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R14",
            "description": "Kjøkken flyttet fra opprinnelig plassering – mulig avvik fra godkjente tegninger",
            "evidence": [
              "Kjøkkenet er flyttet fra sin opprinnelige plassering og det er laget åpen stue/kjøkkenløsning",
              "Tegnet inn som kjøkken. Tiltaket er ikke søknadspliktig"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          },
          {
            "risk_id": "R15",
            "description": "Planer om utbygging av ca. 400 leiligheter i nærområdet (Kristiansholm) – kan påvirke utsikt, trafikk og markedsverdi",
            "evidence": [
              "Kristiansholm er under planlegging av OBOBS og der skal det bygge cirka 400 leiligheter fordelt på flere bygg",
              "Reguleringsplaner under arbeid: PlanID 71720000. Bergenhus, Bybanen, Delstrekning"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R16",
            "description": "Pipe og ildsted ikke undersøkt (TGIU) – ukjent tilstand",
            "evidence": [
              "Innvendig > Pipe og ildsted – konstruksjoner som ikke er undersøkt",
              "Pipe i murkonstruksjoner – ikke vurdert av takstmannen"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R17",
            "description": "Eldre vinduer med slitasje – isolerglass fra 1980-tallet og 1998",
            "evidence": [
              "Utvendige vinduer på grunn av alder",
              "Vinduer fra 1980-tallet, unntatt to stk. Isolerglass på kjøkkenvindu er fra 1998",
              "Eldre vinduer bærer preg av elde/slitasje"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R18",
            "description": "Styregodkjenning kreves for ny andelseier – risiko for avslag",
            "evidence": [
              "Ny andelseier må godkjennes av styret",
              "Styret kan kun nekte godkjenning når det er saklig grunn til det"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R19",
            "description": "Legalpant – borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som sikkerhet for betaling av felleskostnader",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R20",
            "description": "Slitasje på baderomsvegger og himling – usikker overgang mellom baderomsplater og sokkellist",
            "evidence": [
              "Overflater vegger og himling på bad på grunn av noe slitasje på nedre del av vegger i dusjsone. Det er usikker overgang mellom baderomsplater – sokkellist"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R21",
            "description": "Byggeår 1959 – generell aldersrisiko med mange skjulte konstruksjoner nær eller over forventet levetid",
            "evidence": [
              "Byggeår: 1959 oppgitt i boliginfo fra BOB",
              "En må være klar over at bygningen/leiligheten kan ha eldre bygningsdeler som ikke er skiftet og dermed kan være på slutten av sin levetid",
              "Lydisolering i etasjeskillere er dårligere enn dagens standard slik at lyder vil merkes mer i bygninger fra denne tidsperioden"
            ],
            "source_documents": [
              "d101_d101"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "Hva er tilstandsgraden (TG) for varmtvannstanken og hva er alderen?",
          "Er det dokumentert el-kontroll eller avvik på det elektriske anlegget utover manglende kontroll?",
          "Hva er status på ferdigattest eller brukstillatelse for leiligheten?",
          "Hvilke konkrete tiltak er anbefalt for balkongrekkverket og hva er estimert kostnad?",
          "Er det avvik på kjøkkenavtrekk og hva er tilstandsgraden?",
          "Hva er borettslagets totale økonomi – regnskap og budsjett?",
          "Er det registrert fuktskader eller lekkasjer i boligen tidligere?",
          "Hva er andel fellesgjeld etter at hele rammelånet er trukket ut?"
        ],
        "reasoning": "\nGjennomgangen av dokumentchunkene bekrefter at de fleste identifiserte risikoer er godt underbygget av konkret evidens fra salgsoppgaven og tilstandsrapporten. Følgende justeringer og vurderinger er gjort:\n\n**Oppjusterte risikoer:**\n- R1 (Fellesgjeld/felleskostnader): Oppjustert til 0.98 – svært godt dokumentert med konkrete tall, vedtaksdato og gradvis økning av fellesgjeld.\n- R3 (Radon): Beholdt på 0.98 – direkte bekreftet i egenerklæring og tilstandsrapport. Aktomhetsgrad er moderat til lav, men mangelen på radonsperre og måling er uansett en klar risiko.\n\n**Nedjusterte risikoer:**\n- R7 (Støy): Nedjustert til 0.93 – støyberegningene er overordnede og ikke eksakte målinger, noe dokumentet selv presiserer.\n- R14 (Kjøkken flyttet): Nedjustert til 0.60 – dokumentet sier eksplisitt at tiltaket ikke er søknadspliktig, så risikoen for ulovlig bruksendring er lav. Risikoen er mer knyttet til avvik fra originale tegninger.\n- R18 (Styregodkjenning): Nedjustert til 0.72 – dette er en standardbestemmelse i borettslag og ikke en spesifikk risiko for denne eiendommen. Loven begrenser styrets mulighet til å nekte.\n\n**Nye risikoer identifisert:**\n- R20: Slitasje på baderomsvegger/himling med usikker overgang mellom baderomsplater og sokkellist – dette er nevnt i dokumentet men ikke fanget opp som egen risiko.\n- R21: Generell aldersrisiko (byggeår 1959) med mange skjulte konstruksjoner – dokumentet advarer eksplisitt om dette.\n\n**Risikoer som vurderes fjernet eller kraftig nedjustert:**\n- R14 reduseres betydelig siden dokumentet eksplisitt sier tiltaket ikke er søknadspliktig.\n\n**Manglende informasjon som bør hentes inn:**\n- Konkret alder og TG for varmtvannstank\n- Status på ferdigattest\n- Fullstendig regnskap/budsjett for borettslaget\n- Estimerte utbedringskostnader for TG2-poster\n- Andel fellesgjeld når hele rammelånet er trukket ut (brøk 3,962% av fremtidig total)\n"
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
    "input_tokens": 21750,
    "output_tokens": 4784,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
