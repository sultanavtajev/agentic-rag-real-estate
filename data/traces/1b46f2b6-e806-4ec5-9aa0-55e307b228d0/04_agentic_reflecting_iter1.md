# Trace: agentic_reflecting_iter1
- **Run ID:** 1b46f2b6-e806-4ec5-9aa0-55e307b228d0
- **Tidspunkt:** 2026-03-23T20:02:16.192934+00:00
- **Varighet:** 107.62s
- **Input tokens:** 22124
- **Output tokens:** 5584

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
Risiko 1: Byggetegninger samsvarer ikke med dagens bruk – ulovlig bruksendring
  Confidence: 0.97
  Evidens: Det foreligger godkjente byggetegninger, men disse samsvarer ikke med dagens bruk. Kjøkken er flyttet til stue, og rom der kjøkken opprinnelig var, er innredet som soverom.; Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk

Risiko 2: Tidligere vannlekkasje fra øvre leilighet med påviste skader – risiko for skjulte fuktskader
  Confidence: 0.88
  Evidens: Det er opplyst av hjemmelshaver at det tidligere var en vannlekkasje fra øvre leilighet. Det ble påvist mindre skader på soverom (bak kjøkken). Alt utbedret av forsikringsselskap.; Deler av orginalt gulv i stue var skjært vekk i stue under parkett. Det var også sprukket maling i tak på samme sted, og på gjesterom.

Risiko 3: Pågående reguleringsplanarbeid (Bakgårdsslottet) kan medføre endringer i bruken av eiendommen og omgivelsene
  Confidence: 0.85
  Evidens: Det pågår et planarbeid for å videreutvikle bakgårdsdelen av kvartalet som omfatter Parkveien 29 sammen med naboeiendommene – kalt Bakgårdsslottet. Prosjektet er i en tidlig fase, og en utbyggingsavtale skal snart ut på høring før videre politisk behandling.; Saksnummer 201900078: Bakgårdsslottet (Parkveien 27, 29, 31 og Uranienborgveien 5). Hegdehaugsveien 28 - Detaljregulering – Utvikling av kvartalet og kulturminneverdier

Risiko 4: Pågående byggesak om mulig ulovlig stenging av passasje i Uranienborgveien 11
  Confidence: 0.9
  Evidens: Saksnummer 202504957: Uranienborgveien 11 – mulig ulovlig stenging av passasje. Status: Under behandling.

Risiko 5: Fellesgjeld med flytende rente – risiko for økte felleskostnader ved renteøkning
  Confidence: 0.92
  Evidens: Ettersom sameiets lån har flytende rente, kan felleskostnadene endres ved rentejusteringer. På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet.; Rentesats: 6,75% Restsaldo 4 984 093,00 Innfrielsesdato: 30.05.2038 Type rente: Flytende rente; Rentesats: 6,75% Restsaldo 1 934 530,00 Innfrielsesdato: 30.12.2050 Type rente: Flytende rente

Risiko 6: Ingen mulighet for individuell nedbetaling av fellesgjeld (IN-lån) – kjøper kan ikke redusere løpende felleskostnader
  Confidence: 0.85
  Evidens: Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN-lån): Nei.

Risiko 7: Sameiet har ingen sikringsordning – risiko ved manglende betaling av felleskostnader
  Confidence: 0.8
  Evidens: Sameiet har ikke sikringsordning.

Risiko 8: Elektrisk arbeid utført av ufaglært/på dugnad – manglende samsvarserklæring for deler av el-anlegget
  Confidence: 0.82
  Evidens: Ja, kun av ufaglært/ egeninnsats/ dugnad – Beskrivelse: Det er montert spotteskinner i stue. Ellers er alt slik det var ved kjøp. Samsvarserklæring medfulgte

Risiko 9: Tilstandsgrad 2 (TG2) på bad – sluk, membran og tettesjikt har passert mer enn halvparten av forventet brukstid
  Confidence: 0.93
  Evidens: Sluk, membran og tettesjikt, bad | Mer enn halvparten av forventet brukstid er passert på membranløsningen. Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.; Det bør vurderes tiltak for å begrense den direkte vannpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på fliser og tettesjikt. Enkelt tiltak kan være å sette inn et dusjkabinett.

Risiko 10: Tilstandsgrad 2 (TG2) på etasjeskille/gulv mot grunn – høydeforskjell på 15–30 mm gjennom hele rommet
  Confidence: 0.9
  Evidens: Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik. Avviket er målt gjennom stuerommet.

Risiko 11: Tilstandsgrad 2 (TG2) på vinduer – avvik som kan kreve tiltak
  Confidence: 0.8
  Evidens: Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK

Risiko 12: Pipe og ildsted ikke undersøkt (TGIU) – ukjent tilstand på mursteinspipe
  Confidence: 0.85
  Evidens: Pipe og ildsted | Boligen har mursteinspipe. – Bygningsdeler som ikke har blitt undersøkt (TGIU); Innvendig > Pipe og ildsted – KONSTRUKSJONER SOM IKKE ER UNDERSØKT

Risiko 13: Varmtvannstank ikke undersøkt (TGIU) – ukjent tilstand og alder
  Confidence: 0.8
  Evidens: Tekniske installasjoner > Varmtvannstank – KONSTRUKSJONER SOM IKKE ER UNDERSØKT

Risiko 14: Tilliggende konstruksjoner til våtrom ikke undersøkt (TGIU) – risiko for skjulte fuktskader
  Confidence: 0.82
  Evidens: Våtrom > 2. etasje > Bad > Tilliggende konstruksjoner våtrom – KONSTRUKSJONER SOM IKKE ER UNDERSØKT

Risiko 15: Vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselige skader
  Confidence: 0.88
  Evidens: Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg.

Risiko 16: Bygningen er fra 1936 – høy alder medfører generell risiko for skjulte feil og slitasje i konstruksjoner som ikke er undersøkt
  Confidence: 0.85
  Evidens: Boligblokk bygget i 1936. Bygningen er oppført etter byggeforskrifter som gjaldt på oppføringstidspunktet.; Det må også forventes at eiendommer som har vært i bruk over lengre tid vil ha slitasje og bruk.

Risiko 17: Legalpant – kommunen og sameiet har panterett som ikke fremgår av grunnboken og har prioritet foran tinglyste lån
  Confidence: 0.88
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 18: Tinglyst erklæring/avtale om anlegg og vedlikehold av ledninger fra 1932 – eldre heftelse som kan påvirke eiendommen
  Confidence: 0.75
  Evidens: 06.09.1932 – Dokumentnr: 990774 – Erklæring/avtale: Bestemmelse om anlegg og vedlikehold av ledninger m.v.

Risiko 19: Radonmåling ikke utført – ukjent radonkonsentrasjon i boligen
  Confidence: 0.8
  Evidens: Er det foretatt radonmåling? Nei

Risiko 20: Eiendomsskatt – risiko for fremtidig ilegning av eiendomsskatt i Oslo kommune
  Confidence: 0.75
  Evidens: Boligen har ifølge selger ikke blitt ilagt eiendomsskatt for inneværende år.; I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi.

Risiko 21: Styregodkjenning kreves ved kjøp og utleie – risiko for forsinkelse eller avslag
  Confidence: 0.72
  Evidens: Leier av seksjonen skal godkjennes av styret. Godkjenning kan bare nektes der det foreligger saklig grunn.; Styregodkjennelse: Erverver eller leier av seksjonen skal godkjennes av styret.

Risiko 22: Planlagt rehabilitering av fasade og avløpsrør i sameiet – risiko for økte felleskostnader og byggearbeider
  Confidence: 0.7
  Evidens: Gjennomført omfattende rehabilitering og vedlikehold av fasaden mot Hegdehaugsveien og Oscarsgate. Rømningsveiene ved brann utvides om til bruksbalkonger. Alle balkonger får ny front. Alle avløpsrør i bygningen, samt fra bygning til felles kum i atriet, styrkes innvendig.; 2006 – Omfattende rehabilitering av fasade/rør

Dokumentkontekst:
[d020_d020 | Side [1]]
ENDOMMEN ER OPPDELT I 46 SEKSJONER
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger 301/ 214/ 394:
eiendommens matrikkel ved overskjøting til ny 06.09.1932 ‑ Dokumentnr: 990774 ‑ Erklæring/ avtale
hjemmelshaver: Bestemmelse om anlegg og vedlikehold av ledninger
m.v.
301/ 214/ 398/ 15: Overført fra: Knr:0301 Gnr:214 Bnr:398
06.09.1932 ‑ Dokumentnr: 990774 ‑ Erklæring/ avtale Gjelder denne registerenheten med flere
Bestemmelse

---

[d020_d020 | Side [1]]
ikle bakgårdsdelen av kvartalet som omfatter Parkveien 29 sammen med
naboeiendommene – kalt Bakgårdsslottet. Prosjektet er i en tidlig fase, og en utbyggingsavtale skal snart ut på
Beskrivelse
høring før videre politisk behandling. Jeg har ikke kunnskap til å tyde hvordan prosessen videre vil være, eller
hvordan resultatet vil bli. Det må undersøkes nærmere.
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22

---

[d020_d020 | Side [1]]
628 111 (Pris inkl. fellesgjeld) etter at denne salgsoppgaven er utarbeidet. Styret i
sameiet bestemmer om og når felleskostnadene skal
Omkostninger justeres.
13 500 (Boligkjøperforsikring* (valgfritt))
Eiendomsskatt
190 700 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Boligen har ifølge selger ikke blitt ilagt eiendomsskatt for
545 (Tinglysningsgebyr ‑ pantedokument) inneværende år.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
191 790 (Omkostninger totalt (uten Boligkjøperforsikring)) I

---

[d020_d020 | Side [1]]
e?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
Det pågår et planarbeid for å videreutvikle bakgårdsdelen av kvartalet som omfatter Parkveien 29 sammen

---

[d020_d020 | Side [1]]
ierseksjon,
legalpant til sameiet. begrenset til inntil 2 ganger folketrygdens grunnbeløp.
Kjøper og selger er forpliktet til å signere den standard
Vei, vann og avløp
kjøpekontrakten utarbeidet av Emera som en del av
Eiendommen er tilknyttet offentlig vann‑ og eiendomshandleren. Kjøpekontrakten kan gjennomgås
avløpssystem. Stikkledningene fra eiendommen og ut til hos eiendomsmegler før budet legges inn. Kontakt
det kommunale nettet er private. eiendomsmegler for eventuelle spørsmål.
Adkomst til eiendommen

---

[d020_d020 | Side [1]]
ENDOMMEN
Sameiebrøk: 63/ 3510
Diverse
EIENDOMMEN ER OPPDELT I 46 SEKSJONER
Det informeres om at ingen kan eie mer enn to
Legalpant: Kommunen har legalpant som sikkerhet for boligseksjoner i sameiet, i henhold til eierseksjonsloven §
betaling av kommunale avgifter og eventuell 23. Seksjoner som eies av nærstående eller gjennom et
eiendomsskatt. De øvrige seksjonseierne i sameiet har firma regnes også med.
legalpant på inntil 2G som sikkerhet for krav knyttet til
sameieforholdet, som felleskostnader.

---

[d020_d020 | Side [1]]
ligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og

---

[d020_d020 | Side [1]]
erhet for krav knyttet til
sameieforholdet, som felleskostnader. Legalpant er pant I henhold til eierseksjonsloven § 31 er sameierne
som ikke vises i grunnboksutskriften, og har prioritet ansvarlige overfor sameiets kreditorer i forhold til sin
foran tinglyste lån, for eksempel banklån på seksjonen. sameiebrøk. Ved manglende betaling av fellesutgifter har
Legalpant til kommunen har høyere prioritet enn sameiet legal panterett i den enkelte eierseksjon,
legalpant til sameiet. begrenset til inntil 2 ganger

---

[d020_d020 | Side [1]]
(f.eks. drenering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
Byttet inngangsdør til leilighet. Kvittering på materialer kan fremvises. Jobben er utført av en faglært på dugnad.
Beskrivelse
Døren er godkjent leilighetsdør iht brannstandard. 30/35db.
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
Initialer selger: NNF, AL 2
32006210
:ecnerefer
tnemucoD
75

## Side 76

16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel

---

[d020_d020 | Side [1]]
vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg •

---

[d020_d020 | Side [1]]
evarer: Integrerte hvitevarer medfølger. ‑ Ja. Deler av orginalt gulv i stue var skjært vekk i stue
under parkett. Det var også sprukket maling i tak på
Innbo og løsøre: Følgende løsøre og tilbehør følger ikke samme sted, og på gjesterom. Det ble fra forrige
med: takstrapport for kjøp av leilighet i feb 2025 opplyst
‑ Vegghengt TV følgende "Det er opplyst av hjemmelshaver at det
‑ Skap på soverom tidligere var en vannlekkasje fra øvre leilighet. Det ble
påvist mindre skader på soverom (bak kjøkken).

---

[d020_d020 | Side [1]]
ført arbeid på
finnes på eiendommen, vil heller ikke følge med i salget. el‑anlegget eller andre installasjoner (f.eks. oljetank,
Alt utstyr og installasjoner som medfølger overtas slik de sentralfyr, ventilasjon)?
er, uten garanti, med mindre det foreligger en gjeldende ‑ Ja, kun av ufaglært/ egeninnsats/ dugnad
garanti fra produsent eller leverandør. ‑ Beskrivelse: Det er montert spotteskinner i stue. Ellers
er alt slik det var ved kjøp. Samsvarserklæring medfulgte
Kjøper aksepterer at det kan forekomme

---

[d020_d020 | Side [1]]
. eiendomsmegler for eventuelle spørsmål.
Adkomst til eiendommen skjer via offentlig vei, med Selger leverer eiendommen i ryddig og rengjort stand.
privat vei frem til bygget.
Foto: Joakim Karlsen.
Utleie
Kontrakts‑
Adgang til utleie: Leier av seksjonen skal godkjennes av
styret. Godkjenning kan bare nektes der det foreligger
grunnlag
saklig grunn. Ved overføring eller bortleie av seksjon skal
det straks sendes melding til styret for registrering av
Overtakelse
erverver eller leietaker. Seksjonseier som

---

[d020_d020 | Side [1]]
 er medta琀琀 som BRA-e og i totalt BRA ligger på fellesareal, men disponeres av denne
leiligheten.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk
Kommentar: Det foreligger godkjente byggetegninger, men disse samsvarer ikke med dagens bruk. Kjøkken er 昀氀y琀琀et 琀椀l stue, og rom der
kjøkken opprinnelig var, er innredet som soverom.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Oppdragsnr.:

---

[d020_d020 | Side [1]]
re slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er

---

[d020_d020 | Side [1]]
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
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er

---

[d020_d020 | Side [1]]
 i forbindelse med aksept av budet.
Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
Hvitvasking
er estimert til ca. kr 29 125,00, og omfatter vanligvis
Eiendomsmeglere er underlagt lov om hvitvasking, og er innhenting av informasjon fra kommunen, eventuell
blant annet forpliktet til å gjennomføre kundetiltak av forretningsfører, samt kopi av tinglyste dokumenter.
både selger og kjøper. Total kostnad ved salg til prisantydning: kr 139 675,00
Dette inkluderer både vederlag og stipulerte

---

[d020_d020 | Side [1]]
dringer i bruken av eiendommen eller av dens Boligblokk bygget i 1936. Bygningen er oppført etter
omgivelser? byggeforskrifter som gjaldt på oppføringstidspunktet.
‑ Ja. Det pågår et planarbeid for å videreutvikle Yttervegger er oppført med betong. Etasjeskillere er av
bakgårdsdelen av kvartalet som omfatter Parkveien 29 betong. Grunnmur er av betong. Bygningen antas å være
sammen med naboeiendommene kalt Bakgårdsslottet. fundamentert med betong til stedlige masser.
Prosjektet er i en tidlig fase, og en

---

[d020_d020 | Side [1]]
ader, drift og vedlikehold,
Kr 7 500 000 forsikringer, kommunale avgifter samt TV‑anlegg/
bredbånd. Felleskotander pr. 20.02.2026 utgjør kr. 5
001,70,‑
Omkostning kjøper
7 500 000,00 (Prisantydning) Ettersom sameiets lån har flytende rente, kan
128 111 (Andel av fellesgjeld) fellesutgiftene endres ved rentejusteringer. På grunn av
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ prisstigning og renteøkning kan felleskostnadene øke
7 628 111 (Pris inkl. fellesgjeld) etter at denne salgsoppgaven er

---

[d020_d020 | Side [1]]
på samme sted,
og på gjesterom. Det ble fra forrige takstrapport før kjøp av leilighet i feb 2025 opplyst følgende "Det er opplyst av
Beskrivelse hjemmelshaver at det tidligere var en vannlekkasje fra øvre leilighet. Det ble påvist mindre skader på soverom (bak
kjøkken). Alt utbedret av forsikringsselskap." I mitt eie er tak malt, og gulvet utbedret av snekkerfirma slik at det
orginale gulvet ble komplett.
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus,

---

[d020_d020 | Side [1]]
riften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og

---

[d020_d020 | Side [1]]
Kjøkken > Avtrekk Gå til side
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
Selveierleilighet
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Innvendig > Pipe og ildsted Gå til side
Tekniske installasjoner > Varmtvannstank Gå til side
Våtrom > 2. etasje > Bad > Tilliggende Gå til side
konstruksjoner våtrom
AVVIK SOM KAN KREVE TILTAK
Utvendig > Vinduer Gå til side
Innvendig > Etasjeskille/gulv mot grunn Gå

---

[d020_d020 | Side [1]]
å en tilstandsgrad 2 eller 3 uten at det
eller skjult, blir ikke kontrollert.
nødvendigvis er krav om at avviket må utbedres.
•det blir ikke utført funksjonsprøving av bygningsdeler, som
isolasjon, piper, ventilasjon, elektrisk anlegg, osv.
PRESISERINGER
•det gis ikke en vurdering av boligens tilbehør, hvite- og
brunevarer og annet inventar. Dette gjelder også integrert
Tilstandsrapporten gjelder hovedbygget. Tilleggsbygninger, som tilbehør.
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering

---

[d020_d020 | Side [1]]
derer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den

---

[d020_d020 | Side [1]]
, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan

---

[d020_d020 | Side [1]]
ommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør eller håndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste

---

[d020_d020 | Side [1]]
9 m osv. Et rom kan være i strid
med teknisk forskrift og mangle godkjennelse hos kommunen for
den aktuelle bruken, uten at dette får betydning for om arealet
måles og oppgis i tilstandsrapporten. Når arealet måles tas det
ikke hensyn til om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
•Eiendommens markedsverdi kan ikke baseres på en rent
matematisk beregning i forhold til antall kvadratmeter opplyst i
rapporten. Opplysninger om areal kan

---

[d020_d020 | Side [1]]

89

## Side 90

Uranienborgveien 11G, 0351 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 398 Vesterheimsveien 2
0301 OSLO 1712 GRÅLUM
Tilstandsrapport
Vurdering av avvik:
• Det er avvik:
Over昀氀atene ser visuelt bra ut, 琀椀lstandsgraden se琀琀es av hensyn 琀椀l alder.
Konsekvens/琀椀ltak
• Tiltak:
Det bør vurderes 琀椀ltak for å begrense den direkte vannpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på 昀氀iser og
te琀琀esjikt. Enkelt 琀椀ltak kan være å se琀琀e inn et dusjkabine琀琀.
2. ETASJE >

---

[d020_d020 | Side [1]]
 skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand et
byggverk eller en bygningsdel befinner seg i. Benyttes ved
•Kontroll av fukt i konstruksjonen ved hulltaking i bad og beskrivelse av avvik og alder.
vaskerom (våtrom), rom under terreng (kjelleretasje, underetasje
og sokkeletasje) eller andre bygningsdeler, skal skje etter eiers
•Skadegjørere: i hovedsak råte, sopp og skadedyr.
aksept. Hulltaking av våtrom og rom under terreng kan i visse
tilfeller unnlates (ref. forskrift til

---

[d020_d020 | Side [1]]
er. Bygningsdeler som er
leilighet. Kvittering på materialer kan fremvises. Jobben merket med TGIU er ikke blitt vurdert av takstmannen.
er utført av en faglært på dugnad. Døren er godkjent
leilighetsdør iht brannstandard. 30/ 35db. Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten:
19. Kjenner du til forslag eller vedtatte reguleringsplaner,
andre planer, nabovarsel eller offentlige vedtak som kan Bygning:
medføre endringer i bruken av eiendommen eller av dens Boligblokk bygget i

---

[d020_d020 | Side [1]]
ndelse med salget er det blitt utført en Vannrør er av kobber og rør‑i‑rør. Avløpsrør er av plast.
tilstandsrapport av en bygningssakkyndig, som gir en Varmtvann kommer fra sentralt varmtvannsberedning.
teknisk gjennomgang av boligen og påpeker eventuelle
avvik. Rapporten, sammen med selgers egenerklæring, Ventilasjon:
er vedlagt salgsoppgaven. Det er viktig at interessenter Boligen har naturlig ventilasjon. Badet har en elektrisk
61

## Side 62

OM EIENDOMMEN
styrt vifte. Kjøkkenet har en

---

[d020_d020 | Side [1]]
 i Bygningsdeler vurdert med TG3:
våtsonen som følge av alder på fliser og tettesjikt. Enkelt ‑ Det er ikke avdekket forhold som gir TG3.
tiltak kan være å sette inn et dusjkabinett.
‑ Sluk, membran og tettesjikt, bad | Mer enn halvparten Bygningsdeler som ikke har blitt undersøkt (TGIU):
av forventet brukstid er passert på membranløsningen.
Det er viktig å merke seg at levetiden til en membran ‑ Pipe og ildsted | Boligen har mursteinspipe. Ved ovn i
varierer basert på kvalitet, installasjon og bruk. Eldre

---

[d020_d020 | Side [1]]
asjeskille/gulv mot grunn
Etasjeskillere av betong.
Oppdragsnr.: 22371-1572 Befaringsdato: 14.02.2026 Side: 7 av 17
88

## Side 89

Uranienborgveien 11G, 0351 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 398 Vesterheimsveien 2
0301 OSLO 1712 GRÅLUM
Tilstandsrapport
Vurdering av avvik:
• Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav 琀椀l godkjente måleavvik.
Avviket er målt gjennom stuerommet. Det er påregnelig med stedvis retningsavvik i

---

[d020_d020 | Side [1]]
med bygningsdelens alder. seksjonseier. Normalt utgjør dette alt innenfor
leilighetens/seksjonens vegger.
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
som for eksempel tak, yttervegger, grunnmur, drenering, og felles
termer og definisjoner punkt 3.9).
tekniske installasjoner. Balkonger/terrasser og vindu vurderes
dersom takstmannen finner det relevant for

---

[d020_d020 | Side [1]]
sjikt. Enkelt brukstid er passert på anlegg for vannbåren varme. Det
tiltak kan være å sette inn et dusjkabinett. er ikke behov for utbedringstiltak siden anlegget
fungerer i dag, men ut ifra alder kan skader plutselig
‑ Overflater gulv, bad | Overflatene ser visuelt bra ut, oppstå på eldre anlegg.
tilstandsgraden settes av hensyn til alder. Det bør
vurderes tiltak for å begrense den direkte
vannpåkjenningen eller foreta oppussing/ vedlikehold i Bygningsdeler vurdert med TG3:
våtsonen som følge av alder på

---

[d020_d020 | Side [1]]
tasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for

---

[d020_d020 | Side [1]]
g som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker

---

[d020_d020 | Side [1]]
avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand

---

[d020_d020 | Side [1]]
ler, kontaktpunkter ‑ Etasjeskille/ gulv mot grunn | Det er målt høydeforskjell
eller lignende) i boligens elektriske anlegg? på mellom 15‑30 mm gjennom hele rommet.
‑ Nei Tilstandsgrad 2 gis med bakgrunn i standardens krav til
Er det tegn til at det har vært termiske skader (tegn på godkjente måleavvik. Avviket er målt gjennom
varmgang) på kabler, brytere, downlights, stikkontakter stuerommet. Det er påregnelig med stedvis
og elektrisk utstyr? Sjekk samtidig tilstanden på elektrisk retningsavvik i eldre

---

[d020_d020 | Side [1]]
feil/mangler i profilen. Copyright © Finn.no AS 2026
81

## Side 82

Tilstandsrapport
Selveierleilighet
Uranienborgveien 11G, 0351 OSLO OSLO kommune
gnr. 214, bnr. 398, snr. 15
Sum areal alle bygg: BRA: 76 m² BRA-i: 65 m²
Befaringsdato: 14.02.2026 Rapportdato: 05.03.2026 Oppdragsnr.: 22371-1572 Referansenummer: OR1027
Foretak: Takstkonsulent1 AS Taks琀椀ngeniør: Marcus Bratland
Rapporten kan brukes i inn琀椀l e琀琀 år e琀琀er befaringsdato, og kan ikke gjenbrukes ved 昀氀ere boligsalg i denne perioden.
Skjer det

---

[d020_d020 | Side [1]]
attende rehabilitering og vedlikehold av
Beboernes forpliktelser og
fasaden mot Hegdehaugsveien og Oscarsgate.
Rømningsveiene ved brann utvides om til
dugnader
bruksbalkonger. Alle balkonger får ny front. Alle avløpsrør
i bygningen, samt fra bygning til felles kum i atriet, Dugnad må kunne påregnes.
styrkes innvendig.
Energimerke
Innmelding i OBOS kr 500,–:
Forretningsfører krever OBOS‑medlemskap. Innmelding Energikarakter: D
innebærer en engangssum på 300 kroner for
andelskapital, samt en årlig kontingent

---

[d020_d020 | Side [1]]
rer at all rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert gjennom
fellesgjelden på hver enkelt leilighet.
Vedlegg 1 22 av

---

[d020_d020 | Side [1]]
2038
Type rente: Flytende rente
Felleskostnader
Terminer i året: 12
Felleskostnader kr 5 002,‑ pr. mnd Administrasjonsavtale: Nei
55

## Side 56

OM EIENDOMMEN
inkludert i de månedlige felleskostnadene. Tv‑tjenester
Bank: OBOS‑banken AS må bestilles og bekostes av den enkelte eier.
Lånenr.: 98207920274
Lånetype: Annuitetslån
Formue:
Rentesats: 6,75%
Restsaldo 1 934 530,00 Andel fellesformue: Kr 14 163 pr. 31.12.2025
Innfrielsesdato: 30.12.2050
Type rente: Flytende rente
Formuesverdi
Terminer i året:

---

[d020_d020 | Side [1]]
ngssum på 300 kroner for
andelskapital, samt en årlig kontingent på 200 kroner. Energifarge: Gul
Forretningsfører: Obos Eiendomsforvaltning AS
Info energiklasse
Sameiets forsikringsselskap: Gjensidige Forsikring Asa Alle eiendommer som selges eller leies ut, skal ha
energiattest. Unntak gjelder blant annet for frittstående
Polisenummer fellesforsikring: 80678342 bygninger med bruksareal mindre enn 50 m². Det er eier
som plikter å fremlegge energiattest og er selv ansvarlig
Husdyr: Husdyrhold er i

---

[d020_d020 | Side [1]]
esarrangement med nabogårdene installert i atriet, som er felles med 11 B. 11 A avsluttet
ordningen med felles avfallscontainere.
Svar fra styre 12.02.2026: 2007 ‑ Skifte av alle radioventiler
Foreligger det noen planer om vedlikehold/ prosjekter 2007 ‑ Oppussing av fasader og rehab. avløpsrør
eller lignende i sameiet i nær fremtid? 2006 ‑ Omfattende rehabilitering av fasade/ rør: Det ble
64

## Side 65

OM EIENDOMMEN
gjennomført omfattende rehabilitering og vedlikehold av
Beboernes forpliktelser

---

[d020_d020 | Side [1]]
kehold brannsikring -2 321
Drift/vedlikehold parkeringsanlegg -1 890
Drift/vedlikehold søppelanlegg -5 719
Egenandel forsikring -22 000
SUM DRIFT OG VEDLIKEHOLD -325 507
NOTE: 9
KOMMUNALE AVGIFTER
Vann- og avløpsavgift -391 156
Feieavgift -7 888
Renovasjonsavgift -122 912
SUM KOMMUNALE AVGIFTER -521 956
NOTE: 10
ENERGI/FYRING
Elektrisk energi -210 710
Strøm fyringsanlegg -61 347
SUM ENERGI / FYRING -272 057
NOTE: 11
ANDRE DRIFTSKOSTNADER
Container -12 618
Skadedyrarbeid/soppkontroll -8

---

[d020_d020 | Side [1]]
pet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 2 961 503
Parkering 60 840
Bod 4 785
SUM INNKREVDE FELLESKOSTNADER 3 027 128
NOTE: 3
ANDRE INNTEKTER
Opprydding kundereskontro 40
Leie skapplass, bod 1 106
Nøkler 2 190
Refusjon skadesak 9 563
SUM ANDRE INNTEKTER 12 899
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -8 460
SUM PERSONALKOSTNADER -8 460
Det har verken vært ansatte eller

---

[d020_d020 | Side [1]]
‑‑‑
191 790 (Omkostninger totalt (uten Boligkjøperforsikring)) I Oslo kommune er det eiendomsskatt på boliger og fast
205 290 (Omkostninger totalt (med eiendom som overstiger en fastsatt verdi. Informasjonen
Boligkjøperforsikring)) over er hentet fra eiendomsskattelistene.
http:/ / www.oslo.kommune.no/ skatt‑og‑naring/
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ skatt‑og‑avgift/ eiendomsskatt/ eiendomsskatt
7 819 901 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring))
Fellesgjeld
7 833

---

[d020_d020 | Side [1]]
eholdet
for vedkommendes regning.
For skade på fellesareal eller andre boenheter som skyldes at sameieren har forsømt
sin vedlikeholdsplikt, eller ved forsettlig eller uaktsom adferd voldt slik skade, står
sameieren ansvarlig overfor sameiet og eventuelle andre skadelidte. Der skaden
dekkes av sameiets forsikring kan sameieren holdes ansvarlig for eventuell
egenandel på forsikringen.
Ytre vedlikehold av eiendommen med bygninger, fellesrom, fellesarealer, anlegg og
utstyr, herunder trappeoppganger og

---

[d020_d020 | Side [1]]
er unna.

## Side 50

Slottsparken er en av flere grønne oaser
i nærområdet, ideell for turer og
avslapning.

## Side 51

(Ingen tekst ekstrahert)

## Side 52

Plantegning

## Side 53

Plantegning

## Side 54

URANIENBORGVEIEN 11G
OM EIENDOMMEN

## Side 55

OM EIENDOMMEN
OM EIENDOMMEN
Økonomi
Felleskostnader inkulderer: Felleskostnadene inkluderer
bl.a vaktmestertjenester, varmtvann/ fyring, div.
Prisantydning
honorarer og personalkostnader, drift og vedlikehold,
Kr 7 500 000 forsikringer, kommunale

---

[d020_d020 | Side [1]]
kl. omkostninger (uten
Boligkjøperforsikring))
Fellesgjeld
7 833 401 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring)) Kr 128 111 pr. 11.02.2026
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Lånebetingelser fellesgjeld: Selskapets totale lån og
vilkår:
Bank: OBOS‑banken AS
Lånenr.: 98207536067
Lånetype: Annuitetslån
Estimert totalpris ink. omk
Rentesats: 6,75%
Kr 7 833 401 Restsaldo 4 984 093,00
Innfrielsesdato: 30.05.2038
Type rente: Flytende rente
Felleskostnader
Terminer i året:

---

[d020_d020 | Side [1]]
ter seg til den enkelte bruksenhet
(felleskostnader) fordeles på sameierne etter sameiebrøken.
Der særlige grunner taler for det kan en kostnad fordeles etter nytten for den enkelte
bruksenhet eller etter forbruk.
Den enkelte sameier betaler akontobeløp fastsatt av sameiermøtet eller styret til
dekning av sin andel av felleskostnadene. Akontobeløpet skal også dekke avsetning
av midler til fremtidig vedlikehold, påkostninger eller andre fellestiltak på
eiendommen.
Ved forsinket betaling kan Sameiet, i

---

[d020_d020 | Side [1]]
NORAR
Revisjonshonoraret er i sin helhet knyttet til revisjon og beløper seg til kr 6 988.
NOTE: 7
KONSULENTHONORAR
Juridisk bistand -6 188
SUM KONSULENTHONORAR -6 188
NOTE: 8
DRIFT OG VEDLIKEHOLD
Drift/vedlikehold bygninger -50 581
Drift/vedlikehold VVS -15 244
Drift/vedlikehold elektro -15 625
Drift/vedlikehold utvendig anlegg -70 418
Drift/vedlikehold heisanlegg -92 071
Drift/vedlikehold fyringsanlegg -49 639
Drift/vedlikehold brannsikring -2 321
Drift/vedlikehold parkeringsanlegg -1

---

[d020_d020 | Side [1]]
formasjon
oppgraderinger i sameiet som vi kan få tilsendt?
‑ Det finnes listet i årsmøteprotokoll som nåværende
Adresse
innehaver av bolig har tilgang til
Uranienborgveien 11G, 0351 OSLO Er det noen planer om å justere fellesutgifter og/ eller
fellesgjeld?
Gnr. 214, bnr. 398, snr. 15, ideell andel 1/ 1 ‑ Nei
Gnr. 214, bnr. 394, ideell andel 1/ 135, sameietype: Ser sameie har felles internett, som er inkludert i
realsameie fellesutgiftene. Hvilken leverandør?
i Oslo kommune. ‑ Bredbånd leveres av Global

---

[d020_d020 | Side [1]]
5 290,‑ Eierseksjon 1345 m² (eiet)
TOTALPRIS EIEFORM
7 833 401,‑ Eierseksjon
FELLESKOSTNADER ANTALL SOVEROM
5 002,‑ pr. mnd 2
FELLESGJELD ETASJE
Kr 128 111,‑ 2
FELLESFORMUE BYGGEÅR
14 163,‑ 1936
6

## Side 7

NØKKELINFORMASJON
Didrik Tollefsen
Eiendomsmeglerfullmektig MNEF | Partner
didrik.tollefsen@emera.no
+47 469 28 782
7

## Side 8

(Ingen tekst ekstrahert)

## Side 9

BESKRIVELSE
Lys og klassisk 3‑roms på
beste Uranienborg med rosett
og stukkatur. Orginalt tregulv.
Peis. Felles takterrasse.

---

[d020_d020 | Side [1]]
apitalkostnader: 248,70 ‑ sentralt, urbant og samtidig skjermet. Leiligheten ligger
Administrasjonsavtale: Nei tilbaketrukket i et rolig og hyggelig atrium mellom
Sum andel fellesgjeld (kun lån) kr 128 110,93,‑, pr. dags Parkveien og Oscars gate, med minimal trafikk og et
dato. behagelig bomiljø, samtidig som byens puls er rett
utenfor døren.
Fordeling mellom renter og avdrag er ikke mottatt av
forretningsfører. Her bor du med umiddelbar nærhet til Bogstadveien og
Hegdehaugsveien, blant Oslos mest

---

[d020_d020 | Side [1]]
,30 %. Løpetiden er 30 år.
Opprinnelig 2021 -2 100 000
Nedbetalt tidligere 111 751
Nedbetalt i år 24 557
-1 963 692
SUM PANTE- OG GJELDSBREVLÅN -7 211 048
Vedlegg 1 23 av 28 5332 Årsregnskap 2024.pdf
145

## Side 146

Resultatanalyse 2024
Sameiet Uranienborgveien 11 Nord
Regnskap Budsjett Differanse kr Differanse %
Driftsinntekter
Innkrevde felleskostnader 3 027 128 3 037 000 9 872 0 %
Ladeinntekter EL-bil 6 983 10 000 3 017 30 %
Andre inntekter 12 899 0 -12 899 100 %
Sum driftsinntekter 3 047 010 3 047

---

[d020_d020 | Side [1]]
Organisasjonsnummer: 971273194 utarbeidet rapport om ildsteder i samtlige leiligheter som
har ildsted
Sameiet Uranienborgveien 11 Nord er et 2021 ‑ Heis: Renovert heisene
eierseksjonssameie som består av 46 seksjoner, hvorav 2020 ‑ Grillplass: Renovert plassen med nye steinheller,
44 er boligseksjoner og 2 er næringsseksjoner. Sameiet møbler og beplantning
forvaltes av OBOS Eiendomsforvaltning AS. 2019 ‑ Fibernett: HomeNet installert fiber i alle leiligheter
2018 ‑ Elbil ladning etablert: 8 av sameiets

---

[d020_d020 | Side [1]]
nergiforbruket
kan variere fra husstand til husstand.
Vedtekter/ husordensregler
Vedtekter og husordensregler ligger vedlagt
Regulerings og arealplaner
salgsoppgaven.
Ny kommuneplan fra 23. september 2015. Oslo
kommune har vedtatt en ny kommuneplan som kan få
65

## Side 66

OM EIENDOMMEN
betydning for en rekke eksisterende reguleringsplaner i Under behandling.
kommunen. For informasjon om eventuelle arbeider eller ‑ Saksnummer 202313406: Henrik Ibsens gate og
prosjekter i nærliggende områder, anbefales

---

[d020_d020 | Side [1]]
ing for indre Oslo. Under behandling.
Kommunedelplan for torg og møteplasser.
Oppstart av forhandlinger om utbyggingsavtale (nevnt i
Eiendommen er regulert til selgers egenerklæringsskjema):
‑ S‑5183 Detaljregulering med konsekvensutredning og ‑ Saksnummer 201900078: Bakgårdsslottet (Parkveien
med reguleringsbestemmelser for Hegdehaugsveien 28 27, 29, 31 og Uranienborgveien 5). Hegdehaugsveien 28 ‑
m.fl. Flate: Kombinert bebyggelse og anleggsformål. Detaljregulering ‑ Utvikling av kvartalet og
Flate:

---

[d020_d020 | Side [1]]
leggsformål. Detaljregulering ‑ Utvikling av kvartalet og
Flate: Bevaring kulturmiljø. kulturminneverdier ‑ Lille Uranienborg ‑ S‑5183. Status:
Saken er avsluttet. Siste oppfølging i saken: 03.04.202.
For mer informasjon om reguleringsforhold, kontakt
megler eller søk på saksnummer, adresse eller gårds‑ og Pågående byggesaker i området:
bruksnummer på Plan‑ og bygningsetatens hjemmeside. ‑ Saksnummer 202504957: Uranienborgveien 11 ‑ mulig
ulovlig stenging av passasje. Status: Under behandling.
Eiendommen

---

[d020_d020 | Side [1]]
mlegge energiattest og er selv ansvarlig
Husdyr: Husdyrhold er i utgangspunktet ikke tillatt, men for at opplysningene er korrekte.
styret kan gi dispensasjon dersom gode grunner taler for Selger har fylt ut fullstendig energiattest, som er lagt ved
det og dyreholdet ikke er til ulempe for de øvrige salgsoppgaven. Megler påtar seg ikke ansvar for
beboerne. informasjonen som fremgår av energiattesten.
Forkjøpsrett: Sameiet praktiserer ikke forkjøpsrett.
Oppvarming
Styregodkjennelse: Erverver eller leier av

---

[d020_d020 | Side [1]]
asje. Det etableres både private
Pågående plansaker i nærområde: og felles uteoppholdsarealer, inkludert beboerhage og
‑ Saksnummer 202218347: St. Olavs gate 32 ‑ Utvikling takhage. Tiltaket er prosjektert med materialbruk og
av kvartal. Detaljregulering. Status: Under behandling. uttrykk som følger reguleringsplanens krav om høy
‑ Saksnummer 202451198: Frederiks gate 2 ‑ arkitektonisk kvalitet og tilpasning til det historiske
Nationaltheatret på Tullinløkka. Detaljregulering. Status: bygningsmiljøet i

---

[d020_d020 | Side [1]]
bar nærhet til Bogstadveien og
Hegdehaugsveien, blant Oslos mest populære
Mulighet for individuell nedbetaling på hele eller deler av handlegater, med et bredt utvalg av butikker, kaféer,
fellesgjeld (IN‑lån): Nei. restauranter og servicetilbud. Området byr på alt fra
hyggelige nabolagskafeer til anerkjente restauranter,
dagligvarebutikker, bakerier og spesialforretninger, noe
Sikringsordning
som gjør hverdagen enkel og komfortabel.
Sameiet har ikke sikringsordning.
Beliggenheten gir kort gangavstand til

---

[d020_d020 | Side [1]]
har ikke sikringsordning.
Beliggenheten gir kort gangavstand til attraktive og
levende bydeler som Majorstuen, Frogner, Vika, Bislett og
Andre kostnader:
St. Hanshaugen, med rikt kultur‑ og bylivstilbud. For
TV/ Internett/ Bredbånd: Bredbånd fra Global Connect er rekreasjon og friluftsliv ligger både Slottsparken og
56

## Side 57

OM EIENDOMMEN
Uranienborgparken like i nærheten, og det er også kort ‑ Motorsykler og mopeder: kr 1.925 per år
vei til Frognerparken, Stensparken og St. Hanshaugen. ‑ Elbiler:

---

[d020_d020 | Side [1]]
ilator med kullfilter er vanlig i feil eller mangler som ikke er avdekket.
blokkleiligheter, og det er normalt ikke tillat med forsert
avtrekk til felles kanaler for bygget. Det er ikke behov for
utbedringstiltak. Det er ikke alltid det er godkjent av
63

## Side 64

OM EIENDOMMEN
‑ Det er alltid noen planer, men ingen nye som det ikke er
Øvrig
informert om til nåværende eier av leilighet
Har du/ dere en oversikt over tidligere vedlikehold/
informasjon
oppgraderinger i sameiet som vi kan få tilsendt?
‑ Det

---

[d020_d020 | Side [1]]
ebærer at arealene er tilgjengelige
seksjonen. Det er installert fellesanlegg for lading på flere for alle beboere, uten eksklusiv bruksrett for den enkelte
av plassene. Sameiet har ikke gjesteparkering, men seksjon, med mindre annet følger av avtale eller
korttidsparkering for av‑ og pålessing er unntaksvis tillatt vedtekter.
i atriet. I følge selger er leieprisen pr. mnd. er kr. 507,‑.
Megler har ikke avklart tilgjengelig kapasitet ifm. Eiendommen er pent opparbeidet med felles gårdsrom
utarbeidelse av

---

[d020_d020 | Side [1]]
åndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste og basert på
Utbedringskostnadene vil også avhenge av personlige visuell observasjon. Rapporten er basert på undersøkelsesnivå 1,
preferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under terreng.
•Vurdering mot byggeregler I praksis betyr dette at:
Den bygningssakyndige vil vurdere boligen mot hvordan det var
vanlig å bygge og regler som gjaldt på søknadstidspunktet. Noen •befaringen skal begrenses til

---

[d020_d020 | Side [1]]
ligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i

---

[d020_d020 | Side [1]]
l orientering.
grønne omgivelser og umiddelbar tilgang til byens beste
tilbud gjør Uranienborgveien 11G til et svært attraktivt
Tomt
sted å bo.
Tomtetype: Eiet
Parkering
Tomtestørrelse: 1345 m²
Sameiet disponerer 10 reserverte parkeringsplasser i
bakgården, som tildeles av styret etter eieransiennitet. Tomten er fellesareal og eies og disponeres av sameiet i
Bruksretten er personlig og bortfaller ved framleie av fellesskap. Dette innebærer at arealene er tilgjengelige
seksjonen. Det er installert

---

[d020_d020 | Side [1]]
, soverom, kjøkken og stue
eksisterer, gir derimot ingen garanti for at bygget er 8. etasje
oppført i samsvar med tillatelsen og gjeldende regelverk, BRA‑e: 3 m² Loftsbod
eller at det senere er utført arbeid på bygget som ikke er
byggemeldt eller godkjent. Fra 01.01.24 er det innført nye regler for måling og
opplysning av areal på boliger.
Det foreligger ekspedisjonsdokumentet attestert De nye arealbegrepene er:
10.11.1993 for varmeanlegg.
Bruksareal BRA:
Det foreligger ferdigattest for: BRA‑i ‑ Internt

---

[d020_d020 | Side [1]]
aler:
Det foreligger godkjente og byggemeldte tegninger, men TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
de stemmer ikke med dagens bruk. ALH ‑ Areal med lav himlingshøyde måles på samme
Kommentar: Det foreligger godkjente byggetegninger, måte som BRA, men man ser bort fra krav til
men disse samsvarer ikke med dagens bruk. Kjøkken er himlingshøyde. Arealet inngår ikke i BRA, men opplyses
flyttet til stue, og rom der kjøkken opprinnelig var, er om sammen med BRA som et tillegg.
innredet som

---

[d020_d020 | Side [1]]
isk tilstandsanalyse ved omsetning av bolig), samt elektrofaglig fagperson.
Takstbransjens retningslinjer for arealmåling når det gjelder
fordeling mellom P-areal og S-areal. TILLEGGSUNDERSØKELSER
•Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er

---

[d020_d020 | Side [1]]
Bruksareal BRA:
Det foreligger ferdigattest for: BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
‑ Uranienborgveien 11 E‑F‑G ‑ Oppføring balkonger, datert BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
10.09.2007. boenheten og som tilhører denne, for eksempel eksterne
‑ Uranienborgveien 11 E‑F‑G ‑modernisering av heiser, boder.
datert 17.07.2025 BRA‑b ‑ Innglasset balkong, altan, terrasser.
Lovlighet, byggetegninger: Andre arealer:
Det foreligger godkjente og byggemeldte tegninger, men TBA

---

[d020_d020 | Side [1]]
琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt

---

[d020_d020 | Side [1]]
opplyses
der tilstandsrapporten skal benyttes i boligomsetningen og der det
er aktuelt. I tillegg kan gulvareal (GUA) og areal med lav
takhøyde (ALH) opplyses sammen med BRA der det er aktuelt og
en del av oppdraget. Rom skal ha atkomst og gangbart gulv for å
kunne regnes som BRA/måleverdig areal.
•Arealet måles og oppgis dersom arealet oppfyller krav til
måleverdighet, slik som at arealet må ha minst en bredde på
0,6m og minst en høyde på 1,9 m osv. Et rom kan være i strid
med teknisk forskrift og mangle

---

[d020_d020 | Side [1]]
e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et rom
beny琀琀es for å beregne eiendommens verdi. fra bod 琀椀l soverom eller arbeidsrom,eller hvis du endrer en bolig 琀椀l to
Den bygningssakkyndige kan avdekke eventuelle separate boliger.
bruksendringer og avvik i branncelleinndeling Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om

---

[d020_d020 | Side [1]]
tført av faglært, men på dugnad.
2.1 Ble tettesjikt/membran/sluk oppgradert/fornyet?
Nei Ja
2.2 Er arbeidet byggemeldt?
Nei Ja
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i

---

[d020_d020 | Side [1]]
dre
bygningskonstruksjoner som karnapp, buer og vinkler som ikke er re琀琀e, åpne rom bygninger eller andre deler av bygningen i løpet av en fastsa琀琀 琀椀d.
over 昀氀ere etasjer og så videre.
Om bruksendring
Eiendommens markedsverdi kan ikke baseres på en matema琀椀sk beregning basert på Bruksendring er å endre bruken av et rom fra en 琀椀lla琀琀 bruk 琀椀l en annen.
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene De琀琀e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et

---

[d020_d020 | Side [1]]
eller pr SMS til megler.
påvirket avtalen.
Hvis budgiver skal by på eiendommen i henhold til en
Dersom det er avvik mellom oppgitt og faktisk innvendig kjøpsfullmakt må megler kontaktes og fullmakten
areal på minst 2 % og samtidig minst 1 kvadratmeter, kan oversendes før budgivning.
dette utløse rett til kompensasjon etter § 3‑3 i
avhendingsloven. Et bud bør inneholde eiendommens adresse (eventuelt
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon,
Ved beregning av krav om prisavslag eller erstatning må

---

[d020_d020 | Side [1]]
er godkjente byggetegninger, men disse samsvarer
ikke med dagens bruk. Kjøkken er 昀氀y琀琀et 琀椀l stue, og rom der
kjøkken opprinnelig var, er innredet som soverom.
Oppdragsnr.: 22371-1572 Befaringsdato: 14.02.2026 Side: 5 av 17
86

## Side 87

10
8
6
4
2
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
llatnA
Uranienborgveien 11G, 0351 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 398 Vesterheimsveien 2
0301 OSLO 1712

---

[d020_d020 | Side [1]]
ser og vindu vurderes
dersom takstmannen finner det relevant for leiligheten.
AREALBEREGNING FOR BOENHETER
Det anbefales på generelt grunnlag å sette seg inn i sameiets
vedtekter vedr. ansvarsfordeling av vedlikeholdsplikter.
•Areal fastsettes etter Forskrift til avhendingsloven og Norsk
Standard 3940 Areal- og volum-beregninger av bygninger fra
2023.
•Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det
tidspunkt oppmålingen fant sted.
•Bruksareal (BRA) er det måleverdige arealet som er

---

[d020_d020 | Side [1]]
kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
Deler av orginalt gulv i stue var skjært vekk i stue under parkett. Det var også sprukket maling i tak på samme sted,
og på gjesterom. Det ble fra forrige takstrapport

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Byggetegninger samsvarer ikke med dagens bruk – ulovlig bruksendring",
      "evidence": [
        "Det foreligger godkjente byggetegninger, men disse samsvarer ikke med dagens bruk. Kjøkken er flyttet til stue, og rom der kjøkken opprinnelig var, er innredet som soverom.",
        "Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk.",
        "Bruksendring som krever godkjenning, og som ikke er søkt om, er ulovlig."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Tidligere vannlekkasje fra øvre leilighet med påviste skader – risiko for skjulte fuktskader",
      "evidence": [
        "Det er opplyst av hjemmelshaver at det tidligere var en vannlekkasje fra øvre leilighet. Det ble påvist mindre skader på soverom (bak kjøkken). Alt utbedret av forsikringsselskap.",
        "Deler av orginalt gulv i stue var skjært vekk i stue under parkett. Det var også sprukket maling i tak på samme sted, og på gjesterom.",
        "I mitt eie er tak malt, og gulvet utbedret av snekkerfirma slik at det orginale gulvet ble komplett."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Pågående reguleringsplanarbeid (Bakgårdsslottet) kan medføre endringer i bruken av eiendommen og omgivelsene",
      "evidence": [
        "Det pågår et planarbeid for å videreutvikle bakgårdsdelen av kvartalet som omfatter Parkveien 29 sammen med naboeiendommene – kalt Bakgårdsslottet. Prosjektet er i en tidlig fase, og en utbyggingsavtale skal snart ut på høring før videre politisk behandling.",
        "Saksnummer 201900078: Bakgårdsslottet (Parkveien 27, 29, 31 og Uranienborgveien 5). Hegdehaugsveien 28 - Detaljregulering – Utvikling av kvartalet og kulturminneverdier"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R4",
      "description": "Pågående byggesak om mulig ulovlig stenging av passasje i Uranienborgveien 11",
      "evidence": [
        "Saksnummer 202504957: Uranienborgveien 11 – mulig ulovlig stenging av passasje. Status: Under behandling."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Fellesgjeld med flytende rente – risiko for økte felleskostnader ved renteøkning",
      "evidence": [
        "Ettersom sameiets lån har flytende rente, kan felleskostnadene endres ved rentejusteringer. På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet.",
        "Rentesats: 6,75% Restsaldo 4 984 093,00 Innfrielsesdato: 30.05.2038 Type rente: Flytende rente",
        "Rentesats: 6,75% Restsaldo 1 934 530,00 Innfrielsesdato: 30.12.2050 Type rente: Flytende rente"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Ingen mulighet for individuell nedbetaling av fellesgjeld (IN-lån) – kjøper kan ikke redusere løpende felleskostnader",
      "evidence": [
        "Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN-lån): Nei."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Sameiet har ingen sikringsordning – risiko ved manglende betaling av felleskostnader",
      "evidence": [
        "Sameiet har ikke sikringsordning.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "description": "Elektrisk arbeid utført av ufaglært/på dugnad – manglende samsvarserklæring for deler av el-anlegget",
      "evidence": [
        "Ja, kun av ufaglært/ egeninnsats/ dugnad – Beskrivelse: Det er montert spotteskinner i stue. Ellers er alt slik det var ved kjøp. Samsvarserklæring medfulgte."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R9",
      "description": "Tilstandsgrad 2 (TG2) på bad – sluk, membran og tettesjikt har passert mer enn halvparten av forventet brukstid",
      "evidence": [
        "Sluk, membran og tettesjikt, bad | Mer enn halvparten av forventet brukstid er passert på membranløsningen. Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.",
        "Det bør vurderes tiltak for å begrense den direkte vannpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på fliser og tettesjikt. Enkelt tiltak kan være å sette inn et dusjkabinett."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R10",
      "description": "Tilstandsgrad 2 (TG2) på etasjeskille/gulv mot grunn – høydeforskjell på 15–30 mm gjennom hele rommet",
      "evidence": [
        "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik. Avviket er målt gjennom stuerommet."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Tilstandsgrad 2 (TG2) på vinduer – avvik som kan kreve tiltak",
      "evidence": [
        "Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R12",
      "description": "Pipe og ildsted ikke undersøkt (TGIU) – ukjent tilstand på mursteinspipe",
      "evidence": [
        "Pipe og ildsted | Boligen har mursteinspipe. – Bygningsdeler som ikke har blitt undersøkt (TGIU)",
        "Innvendig > Pipe og ildsted – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R13",
      "description": "Varmtvannstank ikke undersøkt (TGIU) – ukjent tilstand og alder",
      "evidence": [
        "Tekniske installasjoner > Varmtvannstank – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R14",
      "description": "Tilliggende konstruksjoner til våtrom ikke undersøkt (TGIU) – risiko for skjulte fuktskader",
      "evidence": [
        "Våtrom > 2. etasje > Bad > Tilliggende konstruksjoner våtrom – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselige skader",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R16",
      "description": "Bygningen er fra 1936 – høy alder medfører generell risiko for skjulte feil og slitasje i konstruksjoner som ikke er undersøkt",
      "evidence": [
        "Boligblokk bygget i 1936. Bygningen er oppført etter byggeforskrifter som gjaldt på oppføringstidspunktet.",
        "Det må også forventes at eiendommer som har vært i bruk over lengre tid vil ha slitasje og bruk.",
        "Særlig for boliger som er pusset opp eller endret, er det viktig å merke seg at fornyelse av overflater ikke nødvendigvis betyr at bygningsdeler under er forbedret."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Legalpant – kommunen og sameiet har panterett som ikke fremgår av grunnboken og har prioritet foran tinglyste lån",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R18",
      "description": "Tinglyst erklæring/avtale om anlegg og vedlikehold av ledninger fra 1932 – eldre heftelse som kan påvirke eiendommen",
      "evidence": [
        "06.09.1932 – Dokumentnr: 990774 – Erklæring/avtale: Bestemmelse om anlegg og vedlikehold av ledninger m.v."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R19",
      "description": "Radonmåling ikke utført – ukjent radonkonsentrasjon i boligen",
      "evidence": [
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R20",
      "description": "Eiendomsskatt – risiko for fremtidig ilegning av eiendomsskatt i Oslo kommune",
      "evidence": [
        "Boligen har ifølge selger ikke blitt ilagt eiendomsskatt for inneværende år.",
        "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R21",
      "description": "Styregodkjenning kreves ved kjøp og utleie – risiko for forsinkelse eller avslag",
      "evidence": [
        "Leier av seksjonen skal godkjennes av styret. Godkjenning kan bare nektes der det foreligger saklig grunn.",
        "Styregodkjennelse: Erverver eller leier av seksjonen skal godkjennes av styret."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R22",
      "description": "Planlagt rehabilitering av fasade og avløpsrør i sameiet – risiko for økte felleskostnader og byggearbeider",
      "evidence": [
        "Gjennomført omfattende rehabilitering og vedlikehold av fasaden mot Hegdehaugsveien og Oscarsgate. Rømningsveiene ved brann utvides om til bruksbalkonger. Alle balkonger får ny front. Alle avløpsrør i bygningen, samt fra bygning til felles kum i atriet, styrkes innvendig.",
        "2006 – Omfattende rehabilitering av fasade/rør"
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R23",
      "description": "Sameier er ansvarlig overfor sameiets kreditorer i forhold til sameiebrøk – risiko for solidaransvar ved mislighold",
      "evidence": [
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R24",
      "description": "Ingen forkjøpsrett i sameiet – kjøper har ikke beskyttelse mot videresalg til uønskede parter",
      "evidence": [
        "Forkjøpsrett: Sameiet praktiserer ikke forkjøpsrett."
      ],
      "source_documents": [
        "d020_d020"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.6
    }
  ],
  "re_retrieval_queries": [
    "Hva er den eksakte tilstandsgraden og beskrivelsen for vinduer i tilstandsrapporten?",
    "Er det dokumentert hvilke konkrete tiltak som er nødvendige for vinduer TG2?",
    "Hva er alderen og tilstanden på varmtvannstanken i leiligheten?",
    "Er det opplyst om fremtidige vedlikeholdsplaner eller budsjetterte kostnader i sameiet?",
    "Hva er status på byggesaken om ulovlig stenging av passasje i Uranienborgveien 11 – påvirker dette direkte adkomst til eiendommen?",
    "Er det opplyst om husdyrforbud eller andre bruksbegrensninger i vedtektene som kan påvirke kjøper?",
    "Finnes det informasjon om naturlig ventilasjon og eventuelle avvik knyttet til dette i leiligheten?"
  ],
  "reasoning": "\nGjennomgangen av de 22 identifiserte risikoene mot dokumentevidensen viser at de fleste risikoene er godt underbygget. Følgende justeringer og merknader er gjort:\n\n**Justert ned i confidence:**\n- R8 (El-arbeid/dugnad): Justert ned fra 0.82 til 0.65. Evidensen viser at samsvarserklæring faktisk fulgte med arbeidet (\"Samsvarserklæring medfulgte\"), noe som reduserer risikoen betydelig. Arbeidet gjelder kun spotteskinner i stue – begrenset omfang.\n- R11 (Vinduer TG2): Justert ned fra 0.80 til 0.72. Evidensen er svak – kun en overskrift i avviksoppsummeringen, ingen detaljert beskrivelse av avvikets art eller omfang er funnet i dokumentchunkene.\n- R13 (Varmtvannstank TGIU): Justert ned fra 0.80 til 0.72. Dokumentet opplyser at varmtvann kommer fra sentralt varmtvannsberedning, noe som betyr at risikoen for den individuelle leiligheten er noe redusert sammenlignet med en privat tank.\n- R18 (Heftelse fra 1932): Justert ned fra 0.75 til 0.70. Heftelsen er dokumentert, men det er ingen informasjon om hva den konkret innebærer for dagens bruk.\n- R22 (Rehabilitering fasade/rør): Justert ned fra 0.70 til 0.55. Evidensen viser at rehabiliteringen allerede er GJENNOMFØRT (2006/2007), ikke planlagt fremover. Styret svarer \"Nei\" på spørsmål om planer om å justere fellesutgifter/fellesgjeld. Risikoen er dermed historisk, ikke fremtidig – og bør omformuleres.\n\n**Ny risiko identifisert:**\n- R23: Sameier er ansvarlig overfor sameiets kreditorer i forhold til sameiebrøk (eierseksjonsloven § 31) – dette er en reell risiko som ikke var eksplisitt identifisert.\n- R24: Ingen forkjøpsrett i sameiet – dette er en nøytral opplysning, men kan ses som en svak risiko. Confidence satt lavt (0.60).\n\n**Risikoer som bør omformuleres:**\n- R22 bør omformuleres fra \"planlagt rehabilitering\" til \"historisk rehabilitering finansiert via fellesgjeld – gjeld nedbetales via fremtidige felleskostnader\". Evidensen støtter ikke at det er nye planlagte rehabiliteringer.\n\n**Manglende risikoer som burde vært identifisert:**\n- Husdyrforbud (styret kan gi dispensasjon) – relevant for kjøpere med dyr.\n- Naturlig ventilasjon uten mekanisk avtrekk – kan være en komfortrisiko.\n- Begrensning på maks to seksjoner per eier (eierseksjonsloven § 23) – relevant for investorer.\n- Sentralt varmtvannssystem – avhengighet av fellesanlegg.\n\n**Re-retrieval queries** er formulert for å avklare uklarheter rundt vinduer (TG2 detaljer), varmtvannstank (sentralt vs. privat), fremtidige vedlikeholdsplaner og byggesaken om passasjen.\n"
}

## Raw Response
```json
{
  "id": "msg_01TgTmz5YdHYFk8x86S2Sr5A",
  "container": null,
  "content": [
    {
      "id": "toolu_0143t8qg1469uyFdwNtu7uW5",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Byggetegninger samsvarer ikke med dagens bruk – ulovlig bruksendring",
            "evidence": [
              "Det foreligger godkjente byggetegninger, men disse samsvarer ikke med dagens bruk. Kjøkken er flyttet til stue, og rom der kjøkken opprinnelig var, er innredet som soverom.",
              "Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk.",
              "Bruksendring som krever godkjenning, og som ikke er søkt om, er ulovlig."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Tidligere vannlekkasje fra øvre leilighet med påviste skader – risiko for skjulte fuktskader",
            "evidence": [
              "Det er opplyst av hjemmelshaver at det tidligere var en vannlekkasje fra øvre leilighet. Det ble påvist mindre skader på soverom (bak kjøkken). Alt utbedret av forsikringsselskap.",
              "Deler av orginalt gulv i stue var skjært vekk i stue under parkett. Det var også sprukket maling i tak på samme sted, og på gjesterom.",
              "I mitt eie er tak malt, og gulvet utbedret av snekkerfirma slik at det orginale gulvet ble komplett."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Pågående reguleringsplanarbeid (Bakgårdsslottet) kan medføre endringer i bruken av eiendommen og omgivelsene",
            "evidence": [
              "Det pågår et planarbeid for å videreutvikle bakgårdsdelen av kvartalet som omfatter Parkveien 29 sammen med naboeiendommene – kalt Bakgårdsslottet. Prosjektet er i en tidlig fase, og en utbyggingsavtale skal snart ut på høring før videre politisk behandling.",
              "Saksnummer 201900078: Bakgårdsslottet (Parkveien 27, 29, 31 og Uranienborgveien 5). Hegdehaugsveien 28 - Detaljregulering – Utvikling av kvartalet og kulturminneverdier"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R4",
            "description": "Pågående byggesak om mulig ulovlig stenging av passasje i Uranienborgveien 11",
            "evidence": [
              "Saksnummer 202504957: Uranienborgveien 11 – mulig ulovlig stenging av passasje. Status: Under behandling."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Fellesgjeld med flytende rente – risiko for økte felleskostnader ved renteøkning",
            "evidence": [
              "Ettersom sameiets lån har flytende rente, kan felleskostnadene endres ved rentejusteringer. På grunn av prisstigning og renteøkning kan felleskostnadene øke etter at denne salgsoppgaven er utarbeidet.",
              "Rentesats: 6,75% Restsaldo 4 984 093,00 Innfrielsesdato: 30.05.2038 Type rente: Flytende rente",
              "Rentesats: 6,75% Restsaldo 1 934 530,00 Innfrielsesdato: 30.12.2050 Type rente: Flytende rente"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Ingen mulighet for individuell nedbetaling av fellesgjeld (IN-lån) – kjøper kan ikke redusere løpende felleskostnader",
            "evidence": [
              "Mulighet for individuell nedbetaling på hele eller deler av fellesgjeld (IN-lån): Nei."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Sameiet har ingen sikringsordning – risiko ved manglende betaling av felleskostnader",
            "evidence": [
              "Sameiet har ikke sikringsordning.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "description": "Elektrisk arbeid utført av ufaglært/på dugnad – manglende samsvarserklæring for deler av el-anlegget",
            "evidence": [
              "Ja, kun av ufaglært/ egeninnsats/ dugnad – Beskrivelse: Det er montert spotteskinner i stue. Ellers er alt slik det var ved kjøp. Samsvarserklæring medfulgte."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R9",
            "description": "Tilstandsgrad 2 (TG2) på bad – sluk, membran og tettesjikt har passert mer enn halvparten av forventet brukstid",
            "evidence": [
              "Sluk, membran og tettesjikt, bad | Mer enn halvparten av forventet brukstid er passert på membranløsningen. Det er viktig å merke seg at levetiden til en membran varierer basert på kvalitet, installasjon og bruk.",
              "Det bør vurderes tiltak for å begrense den direkte vannpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på fliser og tettesjikt. Enkelt tiltak kan være å sette inn et dusjkabinett."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R10",
            "description": "Tilstandsgrad 2 (TG2) på etasjeskille/gulv mot grunn – høydeforskjell på 15–30 mm gjennom hele rommet",
            "evidence": [
              "Det er målt høydeforskjell på mellom 15-30 mm gjennom hele rommet. Tilstandsgrad 2 gis med bakgrunn i standardens krav til godkjente måleavvik. Avviket er målt gjennom stuerommet."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Tilstandsgrad 2 (TG2) på vinduer – avvik som kan kreve tiltak",
            "evidence": [
              "Utvendig > Vinduer – AVVIK SOM KAN KREVE TILTAK"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R12",
            "description": "Pipe og ildsted ikke undersøkt (TGIU) – ukjent tilstand på mursteinspipe",
            "evidence": [
              "Pipe og ildsted | Boligen har mursteinspipe. – Bygningsdeler som ikke har blitt undersøkt (TGIU)",
              "Innvendig > Pipe og ildsted – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R13",
            "description": "Varmtvannstank ikke undersøkt (TGIU) – ukjent tilstand og alder",
            "evidence": [
              "Tekniske installasjoner > Varmtvannstank – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R14",
            "description": "Tilliggende konstruksjoner til våtrom ikke undersøkt (TGIU) – risiko for skjulte fuktskader",
            "evidence": [
              "Våtrom > 2. etasje > Bad > Tilliggende konstruksjoner våtrom – KONSTRUKSJONER SOM IKKE ER UNDERSØKT"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Vannbåren varme har passert mer enn halvparten av forventet brukstid – risiko for plutselige skader",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på anlegg for vannbåren varme. Det er ikke behov for utbedringstiltak siden anlegget fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre anlegg."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R16",
            "description": "Bygningen er fra 1936 – høy alder medfører generell risiko for skjulte feil og slitasje i konstruksjoner som ikke er undersøkt",
            "evidence": [
              "Boligblokk bygget i 1936. Bygningen er oppført etter byggeforskrifter som gjaldt på oppføringstidspunktet.",
              "Det må også forventes at eiendommer som har vært i bruk over lengre tid vil ha slitasje og bruk.",
              "Særlig for boliger som er pusset opp eller endret, er det viktig å merke seg at fornyelse av overflater ikke nødvendigvis betyr at bygningsdeler under er forbedret."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Legalpant – kommunen og sameiet har panterett som ikke fremgår av grunnboken og har prioritet foran tinglyste lån",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R18",
            "description": "Tinglyst erklæring/avtale om anlegg og vedlikehold av ledninger fra 1932 – eldre heftelse som kan påvirke eiendommen",
            "evidence": [
              "06.09.1932 – Dokumentnr: 990774 – Erklæring/avtale: Bestemmelse om anlegg og vedlikehold av ledninger m.v."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R19",
            "description": "Radonmåling ikke utført – ukjent radonkonsentrasjon i boligen",
            "evidence": [
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R20",
            "description": "Eiendomsskatt – risiko for fremtidig ilegning av eiendomsskatt i Oslo kommune",
            "evidence": [
              "Boligen har ifølge selger ikke blitt ilagt eiendomsskatt for inneværende år.",
              "I Oslo kommune er det eiendomsskatt på boliger og fast eiendom som overstiger en fastsatt verdi."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R21",
            "description": "Styregodkjenning kreves ved kjøp og utleie – risiko for forsinkelse eller avslag",
            "evidence": [
              "Leier av seksjonen skal godkjennes av styret. Godkjenning kan bare nektes der det foreligger saklig grunn.",
              "Styregodkjennelse: Erverver eller leier av seksjonen skal godkjennes av styret."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R22",
            "description": "Planlagt rehabilitering av fasade og avløpsrør i sameiet – risiko for økte felleskostnader og byggearbeider",
            "evidence": [
              "Gjennomført omfattende rehabilitering og vedlikehold av fasaden mot Hegdehaugsveien og Oscarsgate. Rømningsveiene ved brann utvides om til bruksbalkonger. Alle balkonger får ny front. Alle avløpsrør i bygningen, samt fra bygning til felles kum i atriet, styrkes innvendig.",
              "2006 – Omfattende rehabilitering av fasade/rør"
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R23",
            "description": "Sameier er ansvarlig overfor sameiets kreditorer i forhold til sameiebrøk – risiko for solidaransvar ved mislighold",
            "evidence": [
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk. Ved manglende betaling av fellesutgifter har sameiet legal panterett i den enkelte eierseksjon, begrenset til inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R24",
            "description": "Ingen forkjøpsrett i sameiet – kjøper har ikke beskyttelse mot videresalg til uønskede parter",
            "evidence": [
              "Forkjøpsrett: Sameiet praktiserer ikke forkjøpsrett."
            ],
            "source_documents": [
              "d020_d020"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.6
          }
        ],
        "re_retrieval_queries": [
          "Hva er den eksakte tilstandsgraden og beskrivelsen for vinduer i tilstandsrapporten?",
          "Er det dokumentert hvilke konkrete tiltak som er nødvendige for vinduer TG2?",
          "Hva er alderen og tilstanden på varmtvannstanken i leiligheten?",
          "Er det opplyst om fremtidige vedlikeholdsplaner eller budsjetterte kostnader i sameiet?",
          "Hva er status på byggesaken om ulovlig stenging av passasje i Uranienborgveien 11 – påvirker dette direkte adkomst til eiendommen?",
          "Er det opplyst om husdyrforbud eller andre bruksbegrensninger i vedtektene som kan påvirke kjøper?",
          "Finnes det informasjon om naturlig ventilasjon og eventuelle avvik knyttet til dette i leiligheten?"
        ],
        "reasoning": "\nGjennomgangen av de 22 identifiserte risikoene mot dokumentevidensen viser at de fleste risikoene er godt underbygget. Følgende justeringer og merknader er gjort:\n\n**Justert ned i confidence:**\n- R8 (El-arbeid/dugnad): Justert ned fra 0.82 til 0.65. Evidensen viser at samsvarserklæring faktisk fulgte med arbeidet (\"Samsvarserklæring medfulgte\"), noe som reduserer risikoen betydelig. Arbeidet gjelder kun spotteskinner i stue – begrenset omfang.\n- R11 (Vinduer TG2): Justert ned fra 0.80 til 0.72. Evidensen er svak – kun en overskrift i avviksoppsummeringen, ingen detaljert beskrivelse av avvikets art eller omfang er funnet i dokumentchunkene.\n- R13 (Varmtvannstank TGIU): Justert ned fra 0.80 til 0.72. Dokumentet opplyser at varmtvann kommer fra sentralt varmtvannsberedning, noe som betyr at risikoen for den individuelle leiligheten er noe redusert sammenlignet med en privat tank.\n- R18 (Heftelse fra 1932): Justert ned fra 0.75 til 0.70. Heftelsen er dokumentert, men det er ingen informasjon om hva den konkret innebærer for dagens bruk.\n- R22 (Rehabilitering fasade/rør): Justert ned fra 0.70 til 0.55. Evidensen viser at rehabiliteringen allerede er GJENNOMFØRT (2006/2007), ikke planlagt fremover. Styret svarer \"Nei\" på spørsmål om planer om å justere fellesutgifter/fellesgjeld. Risikoen er dermed historisk, ikke fremtidig – og bør omformuleres.\n\n**Ny risiko identifisert:**\n- R23: Sameier er ansvarlig overfor sameiets kreditorer i forhold til sameiebrøk (eierseksjonsloven § 31) – dette er en reell risiko som ikke var eksplisitt identifisert.\n- R24: Ingen forkjøpsrett i sameiet – dette er en nøytral opplysning, men kan ses som en svak risiko. Confidence satt lavt (0.60).\n\n**Risikoer som bør omformuleres:**\n- R22 bør omformuleres fra \"planlagt rehabilitering\" til \"historisk rehabilitering finansiert via fellesgjeld – gjeld nedbetales via fremtidige felleskostnader\". Evidensen støtter ikke at det er nye planlagte rehabiliteringer.\n\n**Manglende risikoer som burde vært identifisert:**\n- Husdyrforbud (styret kan gi dispensasjon) – relevant for kjøpere med dyr.\n- Naturlig ventilasjon uten mekanisk avtrekk – kan være en komfortrisiko.\n- Begrensning på maks to seksjoner per eier (eierseksjonsloven § 23) – relevant for investorer.\n- Sentralt varmtvannssystem – avhengighet av fellesanlegg.\n\n**Re-retrieval queries** er formulert for å avklare uklarheter rundt vinduer (TG2 detaljer), varmtvannstank (sentralt vs. privat), fremtidige vedlikeholdsplaner og byggesaken om passasjen.\n"
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
    "input_tokens": 22124,
    "output_tokens": 5584,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
