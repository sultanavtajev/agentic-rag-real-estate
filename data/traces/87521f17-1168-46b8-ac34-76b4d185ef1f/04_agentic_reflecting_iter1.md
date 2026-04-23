# Trace: agentic_reflecting_iter1
- **Run ID:** 87521f17-1168-46b8-ac34-76b4d185ef1f
- **Tidspunkt:** 2026-03-26T09:30:55.944701+00:00
- **Varighet:** 115.90s
- **Input tokens:** 23937
- **Output tokens:** 5828

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
Risiko 1: Borettslagets økonomi viser underskudd og varslet økning i felleskostnader. Årsresultatet for 2024 viste et underskudd på kr 658 619. Det er varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 er allerede planlagt med 10% økning fra 01.07.25.
  Confidence: 0.95
  Evidens: Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.; I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.; Det er mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.; For 2025 var det budsjettert et underskudd på 32 585,-.; På generalforsamlingen i mai 2025 ble det vedtatt å holde husleien uendret for 2025, da oppspart kapital kan dekke et budsjettert underskudd.

Risiko 2: Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader ved renteøkninger. Borettslaget har lån i OBOS-banken med flytende rente, og total langsiktig gjeld er over 84 millioner kroner.
  Confidence: 0.92
  Evidens: Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.; SUM LANGSIKTIG GJELD 84 856 604 84 928 879; Andel av fellesgjeld: 225 885 kr pr. 16.03.2025; Innbetaling for dekning av lån endres i takt med endring i rentesats.

Risiko 3: Varmtvannstanken er over 20 år gammel og kan svikte uten forvarsel. Tilstandsgrad 2 er gitt, og det påpekes at skader plutselig kan oppstå på eldre tanker.
  Confidence: 0.9
  Evidens: Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.; Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.; Tekniske installasjoner > Varmtvannstank – avvik som kan kreve tiltak.

Risiko 4: Innvendige avløpsrør av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.
  Confidence: 0.9
  Evidens: Avløpsrør - støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.; Tekniske installasjoner > Avløpsrør - støpejern – avvik som kan kreve tiltak.

Risiko 5: Badet har flere avvik med tilstandsgrad 2: membranløsning har passert mer enn halvparten av forventet brukstid, ufagmessig silikonering i dusjsone, manglende fall til sluk og kun naturlig ventilasjon. Dette innebærer risiko for fuktskader.
  Confidence: 0.92
  Evidens: Mer enn halvparten av forventet brukstid er passert på membranløsningen.; Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.; Bad - Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk.; Bad - Ventilasjon | Rommet har kun naturlig ventilasjon. Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk.; Våtrom > 2. etasje > bad > Overflater vegger og himling – avvik som kan kreve tiltak.; Våtrom > 2. etasje > bad > Overflater Gulv – avvik som kan kreve tiltak.

Risiko 6: Kjøkkenventilasjonen er mangelfull og bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk. Konsekvensen er økt risiko for matos, lukt og dårlig innemiljø.
  Confidence: 0.85
  Evidens: Ventilasjonskanalen bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk fra kjøkkenet. Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø.

Risiko 7: Eiendommen mangler ferdigattest – kun ekspedisjonsdokument foreligger. Dette kan innebære juridisk usikkerhet knyttet til lovligheten av bygget og eventuelle fremtidige krav fra myndighetene.
  Confidence: 0.88
  Evidens: Det foreligger ikke ferdigattest, men ekspedisjonsdokument datert [dato ikke fullstendig angitt i teksten].

Risiko 8: Kjøper må godkjennes av styret i borettslaget, og risikoen for å ikke bli godkjent påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg av andelen.
  Confidence: 0.85
  Evidens: Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.; Risikoen for å bli godkjent som ny andelseier påhviler kjøper.; Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper ikke rett til å ta eiendommen i bruk jf. borettslagsloven § 4-5 (2).; Blir kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen.

Risiko 9: Borettslaget har legalpanterett i andelen for krav på inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader.
  Confidence: 0.88
  Evidens: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen.

Risiko 10: Energikarakter G er den dårligste mulige energikarakteren, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.
  Confidence: 0.87
  Evidens: Energikarakter: G; Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh.

Risiko 11: Eiendommen er registrert på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn eller restriksjoner på fremtidige endringer av bygget.
  Confidence: 0.78
  Evidens: Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr. [ikke fullstendig angitt].; Reguleringsplan S-132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten.

Risiko 12: Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, balkongoppføringer og rehabiliteringer. Dette kan medføre støy, anleggsarbeid og endringer i nærområdets karakter.
  Confidence: 0.75
  Evidens: Saksnummer 202514073: Vibes gate 20 A-C - oppføring av seks balkonger; Saksnummer 202522170: Vibes gate 13 D - utvidelse av åpning i bærevegg; Saksnummer 202509877: Vibes gate 19 A-D - oppføring av balkonger; Saksnummer 202508578: Vibes gate 21 A - bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer; Saksnummer 202205283: Holmboes gate 8 - Majorstuveien 5 B - Boliger. Detaljregulering. Status: Under behandling.

Risiko 13: Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.
  Confidence: 0.85
  Evidens: Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.; Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 14: Det er avvik på vinduer og innvendige overflater/etasjeskille som er listet som avvik som kan kreve tiltak (TG2). Dette kan medføre kostnader til utbedring for kjøper.
  Confidence: 0.82
  Evidens: Utvendig > Vinduer – avvik som kan kreve tiltak; Innvendig > Overflater – avvik som kan kreve tiltak; Innvendig > Etasjeskille/gulv mot grunn – avvik som kan kreve tiltak; Innvendig > Innvendig dør- bad – avvik som kan kreve tiltak

Risiko 15: Selger har ikke utført radonmåling. Selv om det ikke er krav om dette for boligen i dag, kan radon utgjøre en helserisiko for beboerne.
  Confidence: 0.72
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 16: Det er en uavklart differanse i borettsinnskudd mellom borettslagets egne tall og OBOS-oversikten fra 2017 på nærmere 5 millioner kroner, uten at årsaken er avdekket.
  Confidence: 0.8
  Evidens: SUM BORETTSINNSKUDD -78 445 000; Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.; Det er ikke avdekket hva årsaken til denne differansen skyldes.

Dokumentkontekst:
[d030_d030 | Side [1]]
et sitter på fraflyttede og/ eller usolgte andeler,
Tilleggsdel: Bygning må dekkes av de øvrige andelseierne.
Sameiebrøk: 1139/ 1412
Gjelder denne registerenheten med flere Borettslaget har legalpanterett i andelen for krav på
60

## Side 61

OM EIENDOMMEN
dekning av felleskostnader og andre krav fra
borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Lovanvendelse
Regelverk og generelle opplysninger
Kjøper og selger er forpliktet til å undertegne standard Boligen selges med det inventar og utstyr

---

[d030_d030 | Side [1]]
 gate 21 A ‑
bruksendring av lokale i underetasje fra næring til bolig
og fasadeendringer Vei, vann og avløp
‑ Saksnummer 202514073: Vibes gate 20 A‑C ‑ oppføring Eiendommen er tilknyttet offentlig vann‑ og
av seks balkonger avløpssystem. Stikkledningene fra eiendommen og ut til
det kommunale nettet er private. Adkomst til
eiendommen skjer via offentlig vei.
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det
tinglyst følgende heftelser og rettigheter som følger Utleie
eiendommens

---

[d030_d030 | Side [1]]
get har legalpant på inntil 2G som
‑ Saksnummer 202522170: Vibes gate 13 D ‑ utvidelse av sikkerhet for betaling av felleskostnader. Dette betyr at
åpning i bærevegg borettslaget har prioritet over tinglyste lån når det gjelder
‑ Saksnummer 202509877: Vibes gate 19 A‑D ‑ oppføring betaling av felleskostnader, og kan kreve inn pengene før
av balkonger andre kreditorer, selv om de har lån registrert på andelen.
‑ Saksnummer 202508578: Vibes gate 21 A ‑
bruksendring av lokale i underetasje fra næring til

---

[d030_d030 | Side [1]]
e 69

17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det

---

[d030_d030 | Side [1]]
lge med eiendommen, er en del av avtalen mellom kjøper og selger dersom ikke 
annet er opplyst i salgsoppgaven, kjøper har tatt forbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på

---

[d030_d030 | Side [1]]
kjøpsrett.
Styregodkjennelse: Kjøper skal godkjennes av styret i Energimerke
borettslaget. Dette kan ikke nektes uten saklig grunn. Energikarakter: G
Kjøper er forpliktet til å gjennomføre handelen uavhengig
58

## Side 59

OM EIENDOMMEN
Energifarge: Ikke angitt ‑ Reguleringsplan S‑132GO, Flate: Offentlig kjørebane/
veigrunn er registrert på tomten.
Info energiklasse Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet
Se fullstendig energiattest som vedlegg til salgsoppgave. og 3 treff vedr.

---

[d030_d030 | Side [1]]
ilsendt?
‑ Det ble for en liten stund tilbake etablert balkonger for
Andelsnummer: 13 enkelte andeler. Dette påvirket kun de andelene som fikk
57

## Side 58

OM EIENDOMMEN
balkong, med tanke på fellesutgifter i etterkant. Ikke av om kjøper på overtakelsestidspunktet er godkjent av
ellers noen store oppdateringer, annet en ordinær drift. borettslaget som ny andelseier. Risikoen for å bli
Er det noen planer om å justere fellesutgifter og/ eller godkjent som ny andelseier påhviler kjøper. Dersom
fellesgjeld?

---

[d030_d030 | Side [1]]
 medfølger overtas slik de 2026
er, uten garanti, med mindre det foreligger en gjeldende
garanti fra produsent eller leverandør. 16. Kjenner du til om det har vært utført arbeid på
terrasse/ garasje/ tak/ fasade?
Kjøper aksepterer at det kan forekomme hull og merker ‑ Ja, kun av faglært
etter montering av inventar og utstyr som ikke er en del ‑ Beskrivelse Høsten 2024. Fullført ‑ En rekke funksjonelle
av overdragelsen. og kosmetiske utbedringer i borettslaget: Det har blitt
satt opp nye kjellergitter på

---

[d030_d030 | Side [1]]
AMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi

---

[d030_d030 | Side [1]]
assering av kjøkken ‑
‑ Eiendommen er regulert til Bolig m.tilh. anlegg, jf. H0101
S‑2255. Reguleringsbestemmelser i tilknytning til endret ‑ Saksnummer 202601297: Industrigata 47A ‑
reguleringsplan for Oslo sentrum og indre sone i Oslo rehabilitering av våtrom med nye sluk og rør gjennom
kommune. etasjeskiller til kjøkken og bad
59

## Side 60

OM EIENDOMMEN
‑ Saksnummer 202522774: Vibes gate 13 G ‑
rehabilitering av bad Legalpant: Borettslaget har legalpant på inntil 2G som
‑ Saksnummer 202522170: Vibes

---

[d030_d030 | Side [1]]
/ legges til grunn med mindre annet er spesifisert i
53

## Side 54

OM EIENDOMMEN
salgsoppgaven. 12. Kjenner du til om det er utført kontroll av el‑anlegget
og/ eller andre installasjoner (f.eks. oljetank, sentralfyr,
Gjenstander som er nevnt i standardlisten, men som ikke ventilasjon)?
finnes på eiendommen, vil heller ikke følge med i salget. ‑Ja. Eltilsyn 2025 (godkjent), nye sikringer (jordbrytere)
Alt utstyr og installasjoner som medfølger overtas slik de 2026
er, uten garanti, med mindre det

---

[d030_d030 | Side [1]]
ngsgebyr ‑ hjemmel) eventuelt vedtas på generalforsamlingen.
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Borettslagets lån har flytende rente, og felleskostnadene
1 090 (Omkostninger totalt) kan derfor endres ved rentejusteringer. I følge svar fra
styre er det mulig at det blir en økning i fellesutgifter etter
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ årets generalforsamling, men dette er ikke bestemt enda.
5 976 975 (Totalpris inkl.

---

[d030_d030 | Side [1]]
endom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og

---

[d030_d030 | Side [1]]
ignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: EHL 3
95006210
:ecnerefer
tnemucoD
69

## Side 70

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller

---

[d030_d030 | Side [1]]
e vegger til bad, bruk av personopplysninger og dine rettigheter finner du her
utforede kjellervegger og eventuelt i oppforede kjellergulv. Personvernerklæring - iVerdi
•Normal slitasjegrad: forventet slitasje av materiale i overflaten Rapporten begrenser seg til leiligheten, og det som normalt vil
som er basert på enkle visuelle observasjoner. Kan vurderes omfattes av eiers selvstendige vedlikeholdsansvar som
sammen med bygningsdelens alder. andelseier. Normalt utgjør dette alt innenfor

---

[d030_d030 | Side [1]]
 godkjent som ny andelseier påhviler kjøper. Dersom
fellesgjeld? kjøper på overtakelsestidspunktet ikke er godkjent som
‑ Det er mulig at det blir en økning i fellesutgifter etter ny andelseier, har kjøper ikke rett til å ta eiendommen i
årets generalforsamling, men dette er ikke bestemt enda. bruk jf. borettslagsloven § 4‑5 (2). Blir kjøper ikke
Det vil i sånne fall hovedsakelig være en økning i lys av godkjent som ny eier må kjøper besørge videresalg av
kostnadsøkninger generelt i samfunnet, og ikke for

---

[d030_d030 | Side [1]]
ettshjelpsforsikring rom og det som er godkjent av myndighetene. Alle
som gir trygghet og profesjonell juridisk hjelp dersom det interessenter anbefales derfor å undersøke eiendommen
oppdages uventede feil eller mangler ved boligen de nøye, gjerne sammen med fagperson, før bud gis.
neste fem årene. Les mer om Boligkjøperforsikring i Dersom kjøper velger å kjøpe uten å ha sett
vedlagte materiell eller på https:/ / eiendommen, kan det ikke etter overtakelse reklameres
www.soderbergpartners.no/ eiendom/

---

[d030_d030 | Side [1]]
oblemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som

---

[d030_d030 | Side [1]]
aderen er 
montert. 
17. SOLCELLEANLEGG med tilhørende teknisk infrastruktur medfølger.
En komplett meglertjeneste En prosess du fortjener
18. GASSBEHOLDER til gasskomfyr og gasspeis medfølger.
Emera Eiendomsmegling tilbyr en komplett Vårt mål er at du, enten du er selger eller kjøper,
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger 
medfølger ikke. meglertjeneste – fra verdivurdering, klargjøring skal føle engasjement, ærlighet og
og koordinering av all

---

[d030_d030 | Side [1]]
ngselementer, by琀紀ng av vinduer ol. Annet 昀椀lformat, sni琀琀 eller 3D-modell kan bes琀椀lles på
www.romly.no
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, som stemmer med dagens bruk
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Oppdragsnr.: 22372-1562 Befaringsdato: 16.03.2026 Side: 14 av 18
93

## Side 94

Vibes gate 11B, 0356 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 412 Vesterheimsveien 2
0301 OSLO 1712 GRÅLUM
Befarings - og

---

[d030_d030 | Side [1]]
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet:

---

[d030_d030 | Side [1]]
avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand

---

[d030_d030 | Side [1]]
. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller

---

[d030_d030 | Side [1]]
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

[d030_d030 | Side [1]]
ten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som

---

[d030_d030 | Side [1]]
joner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning

---

[d030_d030 | Side [1]]
ningsdelens alder. andelseier. Normalt utgjør dette alt innenfor leilighetens/andelens
vegger.
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
som for eksempel tak, yttervegger, grunnmur, drenering, og felles
termer og definisjoner punkt 3.9).
tekniske installasjoner. Balkonger/terrasser og vindu vurderes
dersom takstmannen finner det relevant for

---

[d030_d030 | Side [1]]
 vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og

---

[d030_d030 | Side [1]]
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på forhold som man må regne med trenger utbedring straks
eller innen kort 琀椀d. Det er påvist

---

[d030_d030 | Side [1]]
nnpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på 昀氀iser og
te琀琀esjikt. Et enkelt 琀椀ltak kan være å se琀琀e inn et dusjkabine琀琀. Overvåk konstruksjonen jevnlig.
2. ETASJE > BAD
Sluk, membran og te琀琀esjikt
Beskrivelse
Det er plastsluk og smøremembran med ukjent u琀昀ørelse.
Vurdering av avvik:
• Mer enn halvparten av forventet bruks琀椀d er passert på membranløsningen.
Vurdering basert på alder. Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet bruks琀椀d for

---

[d030_d030 | Side [1]]
ren bør utbedres eller skiftes for å sikre
dusjkabinett. Overvåk konstruksjonen jevnlig. tilstrekkelig avtrekk fra kjøkkenet. Konsekvensen av
manglende avtrekk er økt risiko for matos, lukt og dårlig
‑ Bad ‑ Overflater gulv | Krav til fall (høydeforskjell) er ikke innemiljø.
oppfylt, men det er fall til sluk. Overflatene ser visuelt bra
56

## Side 57

OM EIENDOMMEN
‑ Avløpsrør ‑ støpejern | Mer enn halvparten av forventet
brukstid er passert på innvendige avløpsledninger. Eldre Vibesgate 11 Borettslag

---

[d030_d030 | Side [1]]
or og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av Forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE

---

[d030_d030 | Side [1]]
eller eventuelt skifte ut døren for ‑ Bad ‑ Ventilasjon | Rommet har kun naturlig ventilasjon.
å forhindre videre svelling og skade. Det er vanskelig å etablere en annen løsning på bakgrunn
av at det muligens ikke er godkjent av sameiet/
‑ Bad ‑ Overflater vegger og himling | Det registreres noe borettslaget å etablere mekanisk/ forsert avtrekk til felles
ufagmessige utførelser ved silikonering i dusjsonen. luftekanaler i bygget.
Overflatene ser visuelt bra ut, tilstandsgraden settes av
hensyn til alder og

---

[d030_d030 | Side [1]]
msetning av bolig), samt elektrofaglig fagperson.
Takstbransjens retningslinjer for arealmåling når det gjelder
fordeling mellom P-areal og S-areal. TILLEGGSUNDERSØKELSER
•Bygningssakkyndig er ikke ansvarlig for tilbakeholdt eller uriktig Etter avtale med eier kan tilstandsanalysen utvides til også å
informasjon, som har betydning for tilstandsvurderingen. omfatte tilleggsundersøkelser utover minimumskravet i forskriften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn

---

[d030_d030 | Side [1]]
ler bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør eller håndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste og basert

---

[d030_d030 | Side [1]]
d malte plater, innfelt downlights. Vegger med 昀氀iser.
Vurdering av avvik:
• Det er avvik:
Det registreres noe ufagmessige u琀昀ørelser ved silikonering i dusjsonen. Over昀氀atene ser visuelt bra ut, 琀椀lstandsgraden se琀琀es av hensyn 琀椀l alder og nevnt
avvik.
Konsekvens/琀椀ltak
• Tiltak:
Det bør vurderes 琀椀ltak for å begrense den direkte vannpåkjenningen eller foreta oppussing/vedlikehold i våtsonen som følge av alder på 昀氀iser og
te琀琀esjikt. Et enkelt 琀椀ltak kan være å se琀琀e inn et dusjkabine琀琀. Overvåk

---

[d030_d030 | Side [1]]
ilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen •

---

[d030_d030 | Side [1]]
pporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE

---

[d030_d030 | Side [1]]
, Spesielt forhold som er vurdert med TG2 og TG3 bør
sentralfyr, ventilasjon)? vurderes nøye, da de indikerer avvik fra normal slitasje
‑ Ja, kun av faglært og/ eller høy alder, noe som kan innebære behov for
‑ Beskrivelse: Nye sikringer (jordbrytere) utbedringer. Bygningsdeler som er merket med TGIU er
‑ Arbeid utført av: Boligelektrikeren AS ikke blitt vurdert av takstmannen.
54

## Side 55

OM EIENDOMMEN
Beskrivelsen av boligen nedenfor er hentet direkte fra elektriske er veldig begrenset kontrollert i

---

[d030_d030 | Side [1]]
sjoner som ikke er undersøkt
Andelsleilighet
AVVIK SOM KAN KREVE TILTAK
Utvendig > Vinduer Gå til side
Innvendig > Over昀氀ater Gå til side
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Innvendig > Innvendig dør- bad Gå til side
Tekniske installasjoner > Avløpsrør - støpejern Gå til side
Tekniske installasjoner > Varmtvannstank Gå til side
Våtrom > 2. etasje > bad > Over昀氀ater vegger og Gå til side
himling
Våtrom > 2. etasje > bad > Over昀氀ater Gulv Gå til side
Oppdragsnr.: 22372-1562 Befaringsdato:

---

[d030_d030 | Side [1]]
ift og vedlikehold
Det er satt av kr. 200 000 til generell drift og vedlikehold for 2025.
Forsikring
Forsikringspremien for 2025 er budsjettert med 160.000. Forsikringen løper hos Gjensidige
Forsikring.
Lån
Vibesgate 11 Borettslag har lån i OBOS-banken.
For opplysninger om opprinnelig lånebeløp og restsaldo henvises til note i regnskapet.
Felleskostnader
I budsjettet har styret tatt hensyn til ovennevnte, samt øvrige prisendringer knyttet til produkter
og tjenester borettslaget anskaffer. Dette danner

---

[d030_d030 | Side [1]]
Budsjett for 2025
VEDTAK: Husleien holdes uendret i 2025, det er oppspart kapital i borettslaget som
man kan dekke inn et underskudd med i 2025.
3. GODTGJØRELSER
A) Styret
VEDTAK: Kostnadsført honorar til styret ble godkjent. Revisors honorar godkjennes
mot faktura.
4. INNKOMNE FORSLAG
A) Forslag om å holde dugnad. Styret vil sende ut nærmere informasjon om dette.
Vibesgate 11 Borettslag – protokoll generalforsamling 20.5.2025 Side 1
Electronically signed / Sähköisesti allekirjoitettu / Elektroniskt

---

[d030_d030 | Side [1]]
 til produkter
og tjenester borettslaget anskaffer. Dette danner grunnlaget for foreløpig fastsettelse av
felleskostnader for 2025.
I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.mens innbetaling
for dekning av lån endres i takt med endring i rentesats.
For øvrig vises til de enkelte tallene i budsjettet.
Oslo 12.05.2025
Styret i Vibesgate 11 Borettslag
Julie Bjørnov Brustad /s/ Valera Kristiansen /s/ Pål Ødeskaug /s/ 
109

## Side 110

VIBESGATE 11 BORETTSLAG
INFORMASJON OM

---

[d030_d030 | Side [1]]
r 1 228 276 1 984 945
Kortsiktig gjeld -89 704 -146 821
C. DISP. MIDLER PR. 31.12. 1 138 572 1 838 124
110

## Side 111

VIBESGATE 11 BORETTSLAG
RESULTATREGNSKAP
Regnskap Regnskap Budsjett Budsjett
Note 2024 2023 2025 2024
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 1 338 588 1 277 081 1 383 815 1 338 588
Innfridd fellesgjeld 0 0 0 0
Andre inntekter 3 187 556 167 772 150 000 150 000
SUM DRIFTSINNTEKTER 1 526 144 1 444 853 1 533 815 1 488 588
DRIFTSKOSTNADER:
Styrehonorar 4 -60 000 -60 000 -60 000 -60

---

[d030_d030 | Side [1]]
videresalg av
kostnadsøkninger generelt i samfunnet, og ikke for å andelen. Hjemmelen overføres til kjøper og oppgjør
dekke et dedikert prosjekt. Mer info her får du sikkert ifra utbetales til selger.
vår forretningsfører SK Eiendom.
Ser borettslaget har felles grunnpakke for tv/ internett, Regnskap/ budsjett/ kostnadsøkninger: Årsresultatet for
som er inkludert i fellesutgiftene. Hvilken leverandør? 2024 viste et underskudd på kr 658 619,‑. Borettslagets
‑ Telenor er korrekt, vi byttet fra Telia for en

---

[d030_d030 | Side [1]]
t eier
Formål: Næring eiendommen, mens andelseierne eier andeler i
Sameiebrøk: 41/ 1412 borettslaget, som gir borett til en bestemt bolig.
Snr: 3 Andelseierne har ikke personlig ansvar for borettslagets
Formål: Næring fellesgjeld, men de må dekke borettslagets løpende
Sameiebrøk: 55/ 1412 utgifter. Manglende innbetaling av fellesutgiftene som
Snr: 4 følge av andre andelshaveres mislighold, eller dersom
Formål: Samleseksjon bolig borettslaget sitter på fraflyttede og/ eller usolgte andeler,
Tilleggsdel:

---

[d030_d030 | Side [1]]
nebærer blant annet at man må gi informasjon i form av noter, og utarbeide en oversikt
over de disponible midlene i årsregnskapet. Det vil også være informasjon om borettslagets
økonomi i styrets årsmelding. På de neste sidene presenteres borettslagets resultatregnskap,
balanse og tilhørende noter.
Årsregnskapet gir imidlertid ikke en fullstendig oversikt over borettslagets disponible midler ved
årsskiftet. I resultatregnskapet presenteres det en oversikt over borettslagets inntekter og
kostnader. Det

---

[d030_d030 | Side [1]]
.
Resultat
Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.
Disponible midler
Borettslagets disponible midler er en vesentlig størrelse knyttet til borettslagets økonomi og
utgjorde pr. 31.12.2024 kr 1.138.572.
For øvrig vises det til de enkelte tallene i resultatregnskapet, balansen og notene.
Styret er ikke kjent med hendelser etter 31.12.2024 som påvirker regnskapet i vesentlig grad.
KOMMENTARER TIL BUDSJETT FOR 2025
Til orientering for generalforsamlingen legger styret

---

[d030_d030 | Side [1]]
. Borettslagets
‑ Telenor er korrekt, vi byttet fra Telia for en liten stund disponible midler var kr 1 138 572,‑ per 31.12.2024. For
tilbake. 2025 var det budsjettert et underskudd på 32 585,‑.
Er det ellers noe som styret ønsker at vi informerer nye
eiere om? På generalforsamlingen i mai 2025 ble det vedtatt å
‑ Nei, ikke noe øvrig holde husleien uendret for 2025, da oppspart kapital kan
dekke et budsjettert underskudd.
Forretningsfører: Sk Eiendom AS
Det vurderes å endre fordelingen av kostnaden for

---

[d030_d030 | Side [1]]
Egenandel forsikringsskade 10 000
Diverse innkjøp ved styret 105 985
Diverse ekstraarbeid vatkm. og innkjøp (bortkjøring avfall/lysmateriell m.m.) 17 687
SUM DRIFT OG VEDLIKEHOLD 914 472
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av
bygningene.
NOTE: 7
KOMMUNALE AVGIFTER
Vann- og avløpsavgift 169 982
Feieavgift 3 808
Eiendomsskatt 0
Renovasjonsavgift 73 884
SUM KOMMUNALE AVGIFTER 247 673
NOTE: 8
ANDRE DRIFTSKOSTNADER
Adm. IN lån 2024 2 500
Miljøgebyr Oslo

---

[d030_d030 | Side [1]]
ed sameie i en andel
må sameierne bo eller ha til hensikt å bo i boligen.
Selger
Emil Hübert Lakhmari Svar fra styre 17.03.2026:
Foreligger det noen planer om vedlikehold/ prosjekter
Borettslag eller lignende i borettslaget i nær fremtid?
VIBESGATE 11 BORETTSLAG ‑ Nei, ingen større prosjekter planlagt.
Har du/ dere en oversikt over tidligere vedlikehold/
Organisasjonsnummer: 992 885 645 oppgraderinger i borettslaget som vi kan få tilsendt?
‑ Det ble for en liten stund tilbake etablert balkonger

---

[d030_d030 | Side [1]]
LL ANSATTE
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året. Selskapet er
derav ikke pliktig til å ha tjenestepensjonsordning etter lov om obligatorisk tjenestepensjon.
Utbetalt honorar til styret fremkommer av regnskapet.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 904 536
Renter og avdrag lån 434 052
SUM INNKREVDE FELLESKOSTNADER 1 338 588
NOTE: 3
ANDRE INNTEKTER
Fortausleie 2024 54 228
Kundeutbytte Gjensidige 13 832
Andre inntekter 2 000
Avregning næring 2024 117

---

[d030_d030 | Side [1]]
 12 78 445 000 78 445 000
SUM LANGSIKTIG GJELD 84 856 604 84 928 879
KORTSIKTIG GJELD
Forskuddsbetalte felleskostnader 73 255 69 979
Leverandørgjeld/kreditorer 19 610 16 978
Mellomregning lån -5 299 26 043
Påløpte renter 2 138 33 821
SUM KORTSIKTIG GJELD 89 704 146 821
SUM EGENKAPITAL OG GJELD 89 348 276 90 104 945
Pantstillelse 13 84 856 604 85 374 987
Garantiansvar 0 0
Oslo,
Styret i Vibesgate 11 Borettslag
Julie Brustad /s/ Valera Kristiansen /s/ Pål Ødeskaug /s/
112

## Side 113

NOTE:

---

[d030_d030 | Side [1]]
av hvordan vi skal løse problemet.
108

## Side 109

KOMMENTARER TIL ÅRSREGNSKAPET FOR 2024
Styret mener at årsregnskapet gir et rettvisende bilde av borettslagets eiendeler og gjeld,
finansielle stilling og resultat. Informasjon om borettslagets forventede økonomiske utvikling er
omtalt i årsrapportens punkt om budsjett for 2025.
Forutsetningen om fortsatt drift er til stede, og årsregnskapet for 2024 er satt opp under denne
forutsetning.
Resultat
Årets resultat fremkommer i resultatregnskapet som et

---

[d030_d030 | Side [1]]
r andel: Sum:
26, 27, 28 137 391 412 173
4 151 131 151 131
5 174 029 174 029
8 196 928 196 928
3, 6, 10 219 826 659 478
9 og 11 - 25 228 986 3 663 776
1 1 154 089 1 154 089
SUM 6 411 604
NOTE: 12
BORETTSINNSKUDD
Opprinnelig .... -80 495 000
Korrigert andel 7 i 2011 2 050 000
SUM BORETTSINNSKUDD -78 445 000
Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.
Det er ikke avdekket hva årsaken til denne differansen skyldes.
NOTE: 13
PANTSTILLELSE
Av anleggets bokførte gjeld er følgende

---

[d030_d030 | Side [1]]
ld. Størrelsen på de disponible midlene kan blant annet benyttes til å
vurdere om det er nødvendig å endre størrelsen på innkrevde felleskostnader som den enkelte
beboer betaler, og om det er behov for å ta opp lån eller om det er mulighet til å betale ned
ekstra på eksisterende gjeld.
DISPONIBLE MIDLER
.
Regnskap Regnskap Budsjett Budsjett
Note 2024 2023 2025 2024
A. DISP. MIDLER PR. 01.01. 1 838 124 1 659 019 1 138 572 1 838 124
B. ENDRING I DISP. MIDLER:
Årets resultat (se res.regnskapet) -627 277 251

---

[d030_d030 | Side [1]]
jensidige 13 832
Andre inntekter 2 000
Avregning næring 2024 117 496
SUM ANDRE INNTEKTER 187 556
NOTE: 4
STYREHONORAR
Utbetalt styrehonorar for styret 2023-2024 60 000
SUM STYREHONORAR 60 000
113

## Side 114

NOTE: 5
REVISJONSHONORAR
Revisjonshonoraret er i sin helhet knyttet til revisjon og beløper seg til kr 13 500
NOTE: 6
DRIFT OG VEDLIKEHOLD
Drift/vedlikehold bygninger 723 059
Drift/vedlikehold VVS 24 544
Drift/vedlikehold Elektro 33 197
Egenandel forsikringsskade 10 000
Diverse innkjøp ved styret 105

---

[d030_d030 | Side [1]]
e 48

VIBES GATE 11B
OM EIENDOMMEN

## Side 49

OM EIENDOMMEN
OM EIENDOMMEN
styrehonorar og arbeidsgiveravgift, revisjons‑ og
Økonomi
forretningsførerhonorar, HMS, drift og vedlikehold,
vaktmester og renhold, forsikringer, kommunale avgifter,
Prisantydning felles strøm og en kollektiv avtale med Telenor.
Kr 5 750 000
Felleskostnadene er fordelt slik:
‑ Husleie (felleskostnader): kr 2 789,‑
Omkostning kjøper ‑ Nedbetaling av IN‑lån: kr 1 292,‑ *
5 750 000,00 (Prisantydning)
225 885 (Andel av fellesgjeld)

---

[d030_d030 | Side [1]]
else
10 390 (Omkostninger totalt (med Boligkjøperforsikring)) av salgsoppgaven.
6 236 275 (Totalpris inkl. omkostninger (med
Boligkjøperforsikring))
Eiendomsskatt
Boligen er ikke ilagt eiendomsskatt.
Estimert totalpris ink. omk
Kr 5 976 975 Fellesgjeld
Kr 225 885 pr. 16.03.2025
Felleskostnader Lånebetingelser fellesgjeld: Borettslaget har følgende lån
Felleskostnader kr 4 081,‑ pr. mnd og vilkår:
Felleskostnader inkulderer: Totale felleskostnader er kr 4 Bank: OBOS Banken
081,‑ per måned. Dette inkluderer

---

[d030_d030 | Side [1]]
rt av: Byantikvaren i Oslo.
oppvarmingskilde, vil ikke dette bli inkludert i handelen.
Pågående plansaker i nærområde:
Selger opplyser at det årlige strømforbruket har vært ca. ‑ Saksnummer 202205283: Holmboes gate 8 ‑
8000 kWh. Det er viktig å merke seg at energiforbruket Majorstuveien 5 B ‑ Boliger. Detaljregulering. Status:
kan variere fra husstand til husstand. Under behandling.
Pågående byggesaker i området:
Regulerings og arealplaner ‑ Saksnummer 202602003: Rosenborggata 6B ‑
Ny kommuneplan fra 23.

---

[d030_d030 | Side [1]]
 Saksnummer 202602003: Rosenborggata 6B ‑
Ny kommuneplan fra 23. september 2015. Oslo utvidelse av bad
kommune har vedtatt en ny kommuneplan som kan få ‑ Saksnummer 202507226: Vibes gate 1 B ‑ endring av
betydning for en rekke eksisterende reguleringsplaner i boenheter og endringer i planløsning
kommunen. For informasjon om eventuelle arbeider eller ‑ Saksnummer 202601505: Vibes gate 2 ‑ bruksendring
prosjekter i nærliggende områder, anbefales det å gjøre fra atelier på loft til bolig
søk i Oslo kommunes

---

[d030_d030 | Side [1]]
 seg i boligselskapet. Andelseierne er
ansvarlig for å etterleve reglene, og for at eventuelle egne husstandsmedlemmer,
besøkende og leietakere gjøres kjent med og overholder dem.
Dersom boligselskapet har særlige regler for parkering, behandling av teknisk
utstyr, rengjøring eller annet, er disse å anse som en del av ordensreglene.
2. Aktiviteter og støynivå
Beboerne i boligselskapet oppfordres til å begrense alle aktiviteter som kan virke
forstyrrende på naboene. Det skal være ro i boligselskapet mellom

---

[d030_d030 | Side [1]]
77: Vibes gate 2 ‑ bruksendring
fra atelier på loft til bolig og fasadeendringer
Reguleringsplanen som gjelder for eiendommen er helt ‑ Saksnummer 202523557: Vibes gate 2 ‑ bruksendring
eller delvis opphevet som følge av bystyrets vedtak fra tidligere butikklokale til boligformål
23.09.2015 (sak 262) – Kommuneplan 2015 – Oslo mot ‑ Saksnummer 202602635: Ole Vigs gate 8B ‑ ny
2030: Smart, trygg og grønn. rørføring av vann og avløp til ny plassering av kjøkken ‑
‑ Eiendommen er regulert til Bolig m.tilh.

---

[d030_d030 | Side [1]]
b og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
77

## Side 78

Primære transportmidler Varer/Tjenester
Valkyrien 5 min
1. Trikk
Boots apotek Bogstadveien 3 min
2. Gående
Aldersfordeling barn (0-18 år)
Kollektivtilbud
Veldig bra 93/100
47% i barnehagealder
27% 6-12 år
Matvareutvalg
11% 13-15 år
Stort mangfold 81/100 15% 16-18 år
Vedlikehold veier
Godt velholdt 78/100
Familiesammensetning
Sport
Par m.

---

[d030_d030 | Side [1]]
orstyrrende på naboene. Det skal være ro i boligselskapet mellom klokken 23:00–
06:00. I dette tidsrommet skal det ikke spilles høy musikk eller utføres annen
aktivitet som forstyrrer nattesøvnen, eller på annet vis virker sjenerende på
omgivelsene. Ved spesielle anledninger, som medfører ekstra støy etter klokken
23:00, varsles beboerne i tilstøtende boliger i god tid.
Ved innflytting, modernisering eller reparasjoner i boligen som medfører banking,
boring, sliping, saging etc, varsles naboer, og det

---

[d030_d030 | Side [1]]
dene for energikarakteren baserer seg https://www.enova.no
på NS 3031.
https://www.enova.no/energimerking
76

## Side 77

Nabolagsprofil
Vibes gate 11B - Nabolaget Majorstuen østre - vurdert av 219 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Enslige Veldig trygt 85/100
Studenter
Kvalitet på skolene
Etablerere
Veldig bra 77/100
Naboskapet
Offentlig transport Høflige 57/100
Bogstadveien 2 min
Linje 11, 19 0.2 km
Aldersfordeling
Bogstadveien 2 min
Linje 1N, 2N, 11N 0.2 km
Majorstuen 7

---

[d030_d030 | Side [1]]
er er tillatt på hverdager kl.
plutselig oppstå på eldre tanker. 07:00–20:00 og lørdager kl. 10:00–18:00
‑ Inngrep i yttervegger/ utearealer, som oppsett av
markiser, parabolantenne eller varmepumpe, krever
Bygningsdeler vurdert med TG3: søknad til styret
‑ Det er ikke avdekket forhold som er vurdert med TG3. ‑ Ballspill på gårdsplasser og plener er forbudt
‑ Mopeder og motorsykler kan ikke plasseres innendørs
‑ En rekke funksjonelle og kosmetiske utbedringer i
Opplistingen over er ikke uttømmende og du

---

[d030_d030 | Side [1]]
arker og svært gode kollektivforbindelser.
Type eiendom
Eieform: Borettslag
Parkering
Det er beboerparkering tilgjengelig i området. Med Objektstype: Andelsleilighet
beboerparkeringstillatelse kan man parkere hele døgnet,
også utover eventuell maksparkeringstid, på plasser
reservert for beboere. Ferdigattest/ brukstillatelse:
Gjeldende priser for beboerparkering i bydelene Frogner, Det foreligger ikke ferdigattest, men
St. Hanshaugen, Gamle Oslo, Grünerløkka og Sagene – ekspedisjonsdokument datert

---

[d030_d030 | Side [1]]
n om omsatte boliger fra grunnkretser i stedet
for kommuner. For rekreasjon og grøntområder ligger flere av byens
flotteste parker innen kort gangavstand. Frognerparken
Formuesverdien er en prosentandel av den beregnede med Vigelandsparken, Frognerbadet og store
boligverdien. grøntområder er et naturlig samlingspunkt for turer,
50

## Side 51

OM EIENDOMMEN
jogging og parkliv. I tillegg finner du Stensparken, St.
Hanshaugen park, Uranienborgparken og Slottsparken i
nærheten. Området byr også på gode

---

[d030_d030 | Side [1]]
tvannstank iht. gjeldende forskrift. sykkelbod.
Det er påvist at varmtvannstank er over 20 år. Det bør ‑ Det er en serviceavtale med Oslo Pumpeservice for en
etableres tilfredsstillende el‑tilkobling etter gjeldende felles kloakkpumpe i kjelleren
forskrift. Det er ikke behov for utbedringstiltak siden ‑ Det skal være ro i boligselskapet mellom klokken 23:00
tanken fungerer i dag, men ut ifra alder kan skader og 06:00. Støyende arbeider er tillatt på hverdager kl.
plutselig oppstå på eldre tanker.

---

[d030_d030 | Side [1]]
old veier
Godt velholdt 78/100
Familiesammensetning
Sport
Par m. barn
Dronning Astrids plass streetbasket 2 min
Ballspill 0.1 km
Par u. barn
Den tysk-norske 4 min
Aktivitetshall 0.3 km
SATS Yoga Majorstuen 4 min Enslig m. barn
Fresh Fitness Majorstuen 4 min
Enslig u. barn
Boligmasse
Flerfamilier
100% blokk
0% 61%
Majorstuen østre
Oslo og omegn
Norge
Sivilstand
Norge
Gift 11% 33%
Ikke gift 80% 54%
Separert 8% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller

---

[d030_d030 | Side [1]]
fredelig og stille, samtidig
som du har umiddelbar nærhet til et av Oslos mest
Andre kostnader: levende og populære byområder. Beliggenheten gir en
TV/ Internett/ Bredbånd: Grunnpakke kabel‑tv og perfekt kombinasjon av urbant byliv og rolige omgivelser.
bredbånd fra Telenor er inkludert i de månedlige
felleskostnadene. Kun få minutters gange unna finner du Bogstadveien og
Hegdehaugsveien, hovedstadens kanskje mest
ettertraktede handlegater. Her ligger et stort utvalg av
Formue: butikker, kafeer,

---

[d030_d030 | Side [1]]
m Smalhans,
beregningen tas det hensyn til boligens beliggenhet, Delicatessen, Kverneriet, Villa Paradiso, Java Kaffebar og
areal, byggeår og type bolig. Stortinget har vedtatt en ny Baker Hansen. I tillegg arrangeres det jevnlig marked på
modell for beregning som skal benyttes fra og med Valkyrieplassen, som Bondens Marked, samt det
inntektesåret 2026, og den nye modellen henter tradisjonsrike lørdagsmarkedet på Vestkanttorvet.
informasjon om omsatte boliger fra grunnkretser i stedet
for kommuner. For

---

[d030_d030 | Side [1]]
 selv sørge for
matrikkelenheten at leietaker er gjort kjent med husordensregler og
OPPRETTELSE ‑ FRADELT FRA ROSENBORGGT 12B ‑ overholder disse.
UTGÅTT
Radonmåling
02.06.2006 ‑ Dokumentnr: 263108 ‑ Seksjonering Selger har ikke utført radonmåling. Det er ikke krav om
Opprettet seksjoner: dette med mindre boligen er helt eller delvis utleid.
Snr: 1
Formål: Næring
Sameiebrøk: 177/ 1412 Diverse
Snr: 2 Borettslagsmodellen innebærer at borettslaget eier
Formål: Næring eiendommen, mens andelseierne eier andeler

---

[d030_d030 | Side [1]]
gen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan

---

[d030_d030 | Side [1]]
ra bolig til næring ‑ Kafé. Andre arealer:
Datert 15.03.2011 TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
‑ Vibes gate 11 A‑B ‑ Bruksendring fra næringsdrift til ALH ‑ Areal med lav himlingshøyde måles på samme
bolig. Datert 17.06.2016 måte som BRA, men man ser bort fra krav til
‑ Vibes gate 11 A og B ‑ Oppføring av fem balkonger. himlingshøyde. Arealet inngår ikke i BRA, men opplyses
Datert 08.01.2025 om sammen med BRA som et tillegg.
GUA – summen av BRA og AHL. Brukes når boligen

---

[d030_d030 | Side [1]]
 opparbeidet
trikkavganger i flere retninger. Dette gir enkel og rask med bl.a. asfalt, platting, utemøblement og
forbindelse til blant annet Oslo sentrum, Blindern, sykkelparkering.
Nydalen, Sagene, Aker Brygge og Oslo S. Flybussen går
også fra Majorstukrysset i nærheten.
Beskrivelse av
Samlet sett er dette en beliggenhet som kombinerer det
eiendommen
beste Oslo har å by på; sentralt byliv, gode servicetilbud,
flotte parker og svært gode kollektivforbindelser.
Type eiendom
Eieform:

---

[d030_d030 | Side [1]]
gger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf

---

[d030_d030 | Side [1]]
elger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det

---

[d030_d030 | Side [1]]
ress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av

---

[d030_d030 | Side [1]]
g: Selger har tegnet registre som kommunen og Kartverket. Det er viktig at
boligselgerforsikring som dekker selgers ansvar etter kjøper setter seg grundig inn i alle salgsdokumentene,
avhendingsloven begrenset oppad kr. 20 000 000,‑. herunder salgsoppgave, tilstandsrapport og selgers
Egenerklæringsskjema er vedlagt salgsoppgaven og egenerklæring. Kjøper anses for å være kjent med
interessenter oppfordres til å gjennomgå denne før bud forhold som er tydelig beskrevet i salgsdokumentene,
inngis. slike

---

[d030_d030 | Side [1]]
 tydelig avtalt mellom kjøper og
grunnlag
selger.
Overtakelse Om informasjonsgrunnlaget
Tidspunkt for overtakelse avtales mellom kjøper og Opplysninger om boligens størrelse og utforming, både
selger. innvendig og utvendig, bygger på informasjon hentet fra
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Forsikring fagkyndig vurdering, samt opplysninger fra offentlige
Boligselgerforsikring: Selger har tegnet registre som kommunen og Kartverket. Det er

---

[d030_d030 | Side [1]]
rhold som er tydelig beskrevet i salgsdokumentene,
inngis. slike forhold kan ikke senere gjøres gjeldende som en
mangel ved boligen. Dette gjelder uavhengig av om
Boligkjøperforsikring: Kjøper har anledning til å tegne dokumentene er lest.
boligkjøperforsikring. Vedlagt i salgsoppgaven følger
informasjon om Boligkjøperforsikring fra Söderberg & Det kan være forskjell mellom boligens faktiske bruk av
Partners. Boligkjøperforsikring er en rettshjelpsforsikring rom og det som er godkjent av myndighetene.

---

[d030_d030 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

---

[d030_d030 | Side [1]]
og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
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
− Hvordan:

---

[d030_d030 | Side [1]]
selgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom

---

[d030_d030 | Side [1]]
 og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
Slitasje og bruk påvirket avtalen.
Det må også forventes at eiendommer som har vært i
bruk, vil kunne ha tegn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon

---

[d030_d030 | Side [1]]

− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 163






OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er

---

[d030_d030 | Side [1]]
jøring skal føle engasjement, ærlighet og
og koordinering av all markedsføring til profesjonalitet gjennom hele prosessen.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal

---

[d030_d030 | Side [1]]
 når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring

---

[d030_d030 | Side [1]]
ra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: EHL 4
95006210
:ecnerefer
tnemucoD
70

## Side 71

E-Signing validated secured by
NAME OF SIGNER IDENTIFIER TIME ELECTRONIC ID
Emil Lakhmari 20435061acf4bcbb88452 16.03.2026 Signer authenticated by
927162bd9812458b37d 20:14:18

---

[d030_d030 | Side [1]]
 etter overtakelse reklameres
www.soderbergpartners.no/ eiendom/ boligkjoper/ på forhold som burde ha vært oppdaget ved en ordinær
gjennomgang.
61

## Side 62

OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
tilbakeholdt, eller gitt

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Borettslagets økonomi viser underskudd og varslet økning i felleskostnader. Årsresultatet for 2024 viste et underskudd på kr 658 619. Det er varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 er allerede planlagt med 10% økning fra 01.07.25.",
      "evidence": [
        "Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.",
        "I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.",
        "Det er mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.",
        "For 2025 var det budsjettert et underskudd på 32 585,-.",
        "På generalforsamlingen i mai 2025 ble det vedtatt å holde husleien uendret for 2025, da oppspart kapital kan dekke et budsjettert underskudd.",
        "Borettslagets disponible midler var kr 1 138 572,- per 31.12.2024."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R2",
      "description": "Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader ved renteøkninger. Borettslaget har lån i OBOS-banken med flytende rente, og total langsiktig gjeld er over 84 millioner kroner.",
      "evidence": [
        "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.",
        "SUM LANGSIKTIG GJELD 84 856 604 84 928 879",
        "Andel av fellesgjeld: 225 885 kr pr. 16.03.2025",
        "Innbetaling for dekning av lån endres i takt med endring i rentesats."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R3",
      "description": "Varmtvannstanken er over 20 år gammel og kan svikte uten forvarsel. Tilstandsgrad 2 er gitt, og det påpekes at skader plutselig kan oppstå på eldre tanker.",
      "evidence": [
        "Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.",
        "Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.",
        "Tekniske installasjoner > Varmtvannstank – avvik som kan kreve tiltak."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R4",
      "description": "Innvendige avløpsrør av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.",
      "evidence": [
        "Avløpsrør - støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
        "Tekniske installasjoner > Avløpsrør - støpejern – avvik som kan kreve tiltak."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R5",
      "description": "Badet har flere avvik med tilstandsgrad 2: membranløsning har passert mer enn halvparten av forventet brukstid, ufagmessig silikonering i dusjsone, manglende fall til sluk og kun naturlig ventilasjon. Dette innebærer risiko for fuktskader.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
        "Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.",
        "Bad - Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk.",
        "Bad - Ventilasjon | Rommet har kun naturlig ventilasjon. Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk.",
        "Våtrom > 2. etasje > bad > Overflater vegger og himling – avvik som kan kreve tiltak.",
        "Våtrom > 2. etasje > bad > Overflater Gulv – avvik som kan kreve tiltak."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Kjøkkenventilasjonen er mangelfull og bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk. Konsekvensen er økt risiko for matos, lukt og dårlig innemiljø.",
      "evidence": [
        "Ventilasjonskanalen bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk fra kjøkkenet. Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R7",
      "description": "Eiendommen mangler ferdigattest – kun ekspedisjonsdokument foreligger. Dette kan innebære juridisk usikkerhet knyttet til lovligheten av bygget og eventuelle fremtidige krav fra myndighetene.",
      "evidence": [
        "Det foreligger ikke ferdigattest, men ekspedisjonsdokument datert [dato ikke fullstendig angitt i teksten]."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R8",
      "description": "Kjøper må godkjennes av styret i borettslaget, og risikoen for å ikke bli godkjent påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg av andelen.",
      "evidence": [
        "Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.",
        "Risikoen for å bli godkjent som ny andelseier påhviler kjøper.",
        "Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper ikke rett til å ta eiendommen i bruk jf. borettslagsloven § 4-5 (2).",
        "Blir kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R9",
      "description": "Borettslaget har legalpanterett i andelen for krav på inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader.",
      "evidence": [
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Energikarakter G er den dårligste mulige energikarakteren, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: G",
        "Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen er registrert på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn eller restriksjoner på fremtidige endringer av bygget.",
      "evidence": [
        "Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr. [ikke fullstendig angitt].",
        "Reguleringsplan S-132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R12",
      "description": "Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, balkongoppføringer og rehabiliteringer. Dette kan medføre støy, anleggsarbeid og endringer i nærområdets karakter.",
      "evidence": [
        "Saksnummer 202514073: Vibes gate 20 A-C - oppføring av seks balkonger",
        "Saksnummer 202522170: Vibes gate 13 D - utvidelse av åpning i bærevegg",
        "Saksnummer 202509877: Vibes gate 19 A-D - oppføring av balkonger",
        "Saksnummer 202508578: Vibes gate 21 A - bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer",
        "Saksnummer 202205283: Holmboes gate 8 - Majorstuveien 5 B - Boliger. Detaljregulering. Status: Under behandling."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R13",
      "description": "Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.",
      "evidence": [
        "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.",
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Det er avvik på vinduer og innvendige overflater/etasjeskille som er listet som avvik som kan kreve tiltak (TG2). Dette kan medføre kostnader til utbedring for kjøper.",
      "evidence": [
        "Utvendig > Vinduer – avvik som kan kreve tiltak",
        "Innvendig > Overflater – avvik som kan kreve tiltak",
        "Innvendig > Etasjeskille/gulv mot grunn – avvik som kan kreve tiltak",
        "Innvendig > Innvendig dør- bad – avvik som kan kreve tiltak"
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R15",
      "description": "Selger har ikke utført radonmåling. Selv om det ikke er krav om dette for boligen i dag, kan radon utgjøre en helserisiko for beboerne.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R16",
      "description": "Det er en uavklart differanse i borettsinnskudd mellom borettslagets egne tall og OBOS-oversikten fra 2017 på nærmere 5 millioner kroner, uten at årsaken er avdekket.",
      "evidence": [
        "SUM BORETTSINNSKUDD -78 445 000",
        "Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.",
        "Det er ikke avdekket hva årsaken til denne differansen skyldes."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "ferdigattest ekspedisjonsdokument dato byggeår",
    "Gul liste kulturminner byantikvaren restriksjoner",
    "varmtvannstank el-tilkobling forskrift tilstandsgrad",
    "vinduer tilstandsgrad avvik beskrivelse",
    "etasjeskille gulv avvik beskrivelse kostnad",
    "borettsinnskudd differanse OBOS forklaring",
    "IN-lån individuell nedbetaling fellesgjeld betingelser",
    "drenering fukt kjeller grunnmur tilstand",
    "el-anlegg tilstandsgrad avvik sikringer"
  ],
  "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Borettslagets økonomi (underskudd/økning felleskostnader):**\nGodt støttet av dokumentene. Underskudd på kr 658 619 bekreftes i resultatregnskapet. 10% økning fra 01.07.25 er budsjettert. Imidlertid nyanseres risikoen noe av at generalforsamlingen i mai 2025 vedtok å holde husleien uendret for 2025, og at disponible midler (kr 1 138 572) kan dekke underskuddet. Confidence justeres marginalt ned fra 0.95 til 0.93 da det finnes en buffer.\n\n**R2 – Høy fellesgjeld og flytende rente:**\nMeget godt støttet. Langsiktig gjeld på over 84 millioner bekreftes i balansen. Flytende rente bekreftes eksplisitt. Andel fellesgjeld på kr 225 885 er oppgitt. Confidence opprettholdes på 0.92.\n\n**R3 – Varmtvannstank over 20 år:**\nGodt støttet. TG2 bekreftes, alder over 20 år bekreftes, risiko for plutselig svikt er eksplisitt nevnt. Confidence opprettholdes på 0.90.\n\n**R4 – Avløpsrør støpejern:**\nGodt støttet. TG2 bekreftes, mer enn halvparten av forventet brukstid passert bekreftes. Confidence opprettholdes på 0.90.\n\n**R5 – Bad, multiple avvik:**\nMeget godt støttet av dokumentene. Alle fire avvik (membran, silikonering, fall, ventilasjon) bekreftes i tilstandsrapporten. Confidence opprettholdes på 0.92.\n\n**R6 – Kjøkkenventilasjon:**\nStøttet av ett sitat i dokumentene. Evidensen er noe begrenset (kun ett tekstutdrag), men er klar og direkte. Confidence opprettholdes på 0.85.\n\n**R7 – Manglende ferdigattest:**\nStøttet av dokumentene. Ekspedisjonsdokument bekreftes, men dato er ikke fullstendig angitt i de tilgjengelige chunkene. Risikoen er reell, men datoen for ekspedisjonsdokumentet er ukjent fra tilgjengelig evidens. Confidence justeres marginalt ned til 0.85 (fra 0.88) da fullstendig dokumentasjon mangler i chunkene.\n\n**R8 – Styregodkjennelse:**\nMeget godt støttet. Alle aspekter av risikoen bekreftes direkte i dokumentene, inkludert lovhenvisning (borettslagsloven § 4-5 (2)). Confidence opprettholdes på 0.85.\n\n**R9 – Legalpanterett 2G:**\nGodt støttet. Legalpanterett på inntil 2G bekreftes eksplisitt, og prioritet over tinglyste lån bekreftes. Confidence opprettholdes på 0.88.\n\n**R10 – Energikarakter G:**\nGodt støttet. Energikarakter G bekreftes direkte. Strømforbruk på ca. 8000 kWh/år er oppgitt av selger. Confidence opprettholdes på 0.87.\n\n**R11 – Gul liste:**\nDelvis støttet. Gul liste med 3 treff bekreftes, men det andre settet med treff er ikke fullstendig angitt i chunkene. Reguleringsplan S-132GO med offentlig kjørebane/veigrunn er nevnt, men sammenhengen med Gul liste er uklar. Confidence justeres ned til 0.72 (fra 0.78) da evidensen er ufullstendig.\n\n**R12 – Pågående byggesaker i nærområdet:**\nGodt støttet. Alle nevnte saksnumre bekreftes i dokumentene. Risikoen er reell men av moderat alvorlighetsgrad. Confidence opprettholdes på 0.75.\n\n**R13 – Solidaransvar for løpende utgifter:**\nGodt støttet. Begge aspekter bekreftes direkte i dokumentene. Confidence opprettholdes på 0.85.\n\n**R14 – Vinduer og innvendige overflater TG2:**\nStøttet av avvikslisten i tilstandsrapporten. Imidlertid mangler detaljert beskrivelse av hva avvikene konkret innebærer og estimerte utbedringskostnader i de tilgjengelige chunkene. Confidence justeres marginalt ned til 0.82.\n\n**R15 – Manglende radonmåling:**\nStøttet av ett sitat. Risikoen er reell men av lavere alvorlighetsgrad siden det ikke er krav om radonmåling for denne boligen. Confidence justeres ned til 0.70 (fra 0.72).\n\n**R16 – Differanse borettsinnskudd:**\nGodt støttet. Differansen på ca. 4,985 millioner kroner mellom borettslagets tall (78 445 000) og OBOS-oversikten fra 2017 (83 430 000) bekreftes, og det bekreftes at årsaken ikke er avdekket. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer som burde vært identifisert:**\n1. IN-lån (individuell nedbetaling): Dokumentene nevner nedbetaling av IN-lån på kr 1 292/mnd. Dette er en særskilt risiko da IN-lån innebærer at andelen har en ekstra gjeldspost utover ordinær fellesgjeld, og betingelsene for dette lånet bør undersøkes nærmere.\n2. El-anlegg: Eltilsyn 2025 er godkjent, men nye sikringer (jordbrytere) er planlagt til 2026. Dette kan indikere at el-anlegget har mangler som krever utbedring.\n3. Drenering/fukt i kjeller: Tilstandsrapporten dekker ikke fellesarealer, men det er en kloakkpumpe i kjelleren (serviceavtale med Oslo Pumpeservice), noe som kan indikere dreneringsproblemer.\n\nDisse manglende risikoene bør undersøkes nærmere gjennom tilleggsforespørsler.\n"
}

## Raw Response
```json
{
  "id": "msg_01RNn5dUReRqdw53Cc7kTr3W",
  "container": null,
  "content": [
    {
      "id": "toolu_014SwmT2y2k3efxu7xJjsa6N",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Borettslagets økonomi viser underskudd og varslet økning i felleskostnader. Årsresultatet for 2024 viste et underskudd på kr 658 619. Det er varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 er allerede planlagt med 10% økning fra 01.07.25.",
            "evidence": [
              "Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.",
              "I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.",
              "Det er mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.",
              "For 2025 var det budsjettert et underskudd på 32 585,-.",
              "På generalforsamlingen i mai 2025 ble det vedtatt å holde husleien uendret for 2025, da oppspart kapital kan dekke et budsjettert underskudd.",
              "Borettslagets disponible midler var kr 1 138 572,- per 31.12.2024."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R2",
            "description": "Høy fellesgjeld og flytende rente på borettslagets lån medfører risiko for økte felleskostnader ved renteøkninger. Borettslaget har lån i OBOS-banken med flytende rente, og total langsiktig gjeld er over 84 millioner kroner.",
            "evidence": [
              "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.",
              "SUM LANGSIKTIG GJELD 84 856 604 84 928 879",
              "Andel av fellesgjeld: 225 885 kr pr. 16.03.2025",
              "Innbetaling for dekning av lån endres i takt med endring i rentesats."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R3",
            "description": "Varmtvannstanken er over 20 år gammel og kan svikte uten forvarsel. Tilstandsgrad 2 er gitt, og det påpekes at skader plutselig kan oppstå på eldre tanker.",
            "evidence": [
              "Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.",
              "Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.",
              "Tekniske installasjoner > Varmtvannstank – avvik som kan kreve tiltak."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R4",
            "description": "Innvendige avløpsrør av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.",
            "evidence": [
              "Avløpsrør - støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
              "Tekniske installasjoner > Avløpsrør - støpejern – avvik som kan kreve tiltak."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R5",
            "description": "Badet har flere avvik med tilstandsgrad 2: membranløsning har passert mer enn halvparten av forventet brukstid, ufagmessig silikonering i dusjsone, manglende fall til sluk og kun naturlig ventilasjon. Dette innebærer risiko for fuktskader.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
              "Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.",
              "Bad - Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk.",
              "Bad - Ventilasjon | Rommet har kun naturlig ventilasjon. Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk.",
              "Våtrom > 2. etasje > bad > Overflater vegger og himling – avvik som kan kreve tiltak.",
              "Våtrom > 2. etasje > bad > Overflater Gulv – avvik som kan kreve tiltak."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Kjøkkenventilasjonen er mangelfull og bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk. Konsekvensen er økt risiko for matos, lukt og dårlig innemiljø.",
            "evidence": [
              "Ventilasjonskanalen bør utbedres eller skiftes for å sikre tilstrekkelig avtrekk fra kjøkkenet. Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R7",
            "description": "Eiendommen mangler ferdigattest – kun ekspedisjonsdokument foreligger. Dette kan innebære juridisk usikkerhet knyttet til lovligheten av bygget og eventuelle fremtidige krav fra myndighetene.",
            "evidence": [
              "Det foreligger ikke ferdigattest, men ekspedisjonsdokument datert [dato ikke fullstendig angitt i teksten]."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R8",
            "description": "Kjøper må godkjennes av styret i borettslaget, og risikoen for å ikke bli godkjent påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg av andelen.",
            "evidence": [
              "Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.",
              "Risikoen for å bli godkjent som ny andelseier påhviler kjøper.",
              "Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper ikke rett til å ta eiendommen i bruk jf. borettslagsloven § 4-5 (2).",
              "Blir kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R9",
            "description": "Borettslaget har legalpanterett i andelen for krav på inntil 2G (to ganger folketrygdens grunnbeløp). Dette betyr at borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader.",
            "evidence": [
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer, selv om de har lån registrert på andelen."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Energikarakter G er den dårligste mulige energikarakteren, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: G",
              "Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen er registrert på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn eller restriksjoner på fremtidige endringer av bygget.",
            "evidence": [
              "Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr. [ikke fullstendig angitt].",
              "Reguleringsplan S-132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R12",
            "description": "Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, balkongoppføringer og rehabiliteringer. Dette kan medføre støy, anleggsarbeid og endringer i nærområdets karakter.",
            "evidence": [
              "Saksnummer 202514073: Vibes gate 20 A-C - oppføring av seks balkonger",
              "Saksnummer 202522170: Vibes gate 13 D - utvidelse av åpning i bærevegg",
              "Saksnummer 202509877: Vibes gate 19 A-D - oppføring av balkonger",
              "Saksnummer 202508578: Vibes gate 21 A - bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer",
              "Saksnummer 202205283: Holmboes gate 8 - Majorstuveien 5 B - Boliger. Detaljregulering. Status: Under behandling."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R13",
            "description": "Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.",
            "evidence": [
              "Andelseierne har ikke personlig ansvar for borettslagets fellesgjeld, men de må dekke borettslagets løpende utgifter.",
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Det er avvik på vinduer og innvendige overflater/etasjeskille som er listet som avvik som kan kreve tiltak (TG2). Dette kan medføre kostnader til utbedring for kjøper.",
            "evidence": [
              "Utvendig > Vinduer – avvik som kan kreve tiltak",
              "Innvendig > Overflater – avvik som kan kreve tiltak",
              "Innvendig > Etasjeskille/gulv mot grunn – avvik som kan kreve tiltak",
              "Innvendig > Innvendig dør- bad – avvik som kan kreve tiltak"
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R15",
            "description": "Selger har ikke utført radonmåling. Selv om det ikke er krav om dette for boligen i dag, kan radon utgjøre en helserisiko for beboerne.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R16",
            "description": "Det er en uavklart differanse i borettsinnskudd mellom borettslagets egne tall og OBOS-oversikten fra 2017 på nærmere 5 millioner kroner, uten at årsaken er avdekket.",
            "evidence": [
              "SUM BORETTSINNSKUDD -78 445 000",
              "Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.",
              "Det er ikke avdekket hva årsaken til denne differansen skyldes."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "ferdigattest ekspedisjonsdokument dato byggeår",
          "Gul liste kulturminner byantikvaren restriksjoner",
          "varmtvannstank el-tilkobling forskrift tilstandsgrad",
          "vinduer tilstandsgrad avvik beskrivelse",
          "etasjeskille gulv avvik beskrivelse kostnad",
          "borettsinnskudd differanse OBOS forklaring",
          "IN-lån individuell nedbetaling fellesgjeld betingelser",
          "drenering fukt kjeller grunnmur tilstand",
          "el-anlegg tilstandsgrad avvik sikringer"
        ],
        "reasoning": "\nGjennomgang av alle 16 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Borettslagets økonomi (underskudd/økning felleskostnader):**\nGodt støttet av dokumentene. Underskudd på kr 658 619 bekreftes i resultatregnskapet. 10% økning fra 01.07.25 er budsjettert. Imidlertid nyanseres risikoen noe av at generalforsamlingen i mai 2025 vedtok å holde husleien uendret for 2025, og at disponible midler (kr 1 138 572) kan dekke underskuddet. Confidence justeres marginalt ned fra 0.95 til 0.93 da det finnes en buffer.\n\n**R2 – Høy fellesgjeld og flytende rente:**\nMeget godt støttet. Langsiktig gjeld på over 84 millioner bekreftes i balansen. Flytende rente bekreftes eksplisitt. Andel fellesgjeld på kr 225 885 er oppgitt. Confidence opprettholdes på 0.92.\n\n**R3 – Varmtvannstank over 20 år:**\nGodt støttet. TG2 bekreftes, alder over 20 år bekreftes, risiko for plutselig svikt er eksplisitt nevnt. Confidence opprettholdes på 0.90.\n\n**R4 – Avløpsrør støpejern:**\nGodt støttet. TG2 bekreftes, mer enn halvparten av forventet brukstid passert bekreftes. Confidence opprettholdes på 0.90.\n\n**R5 – Bad, multiple avvik:**\nMeget godt støttet av dokumentene. Alle fire avvik (membran, silikonering, fall, ventilasjon) bekreftes i tilstandsrapporten. Confidence opprettholdes på 0.92.\n\n**R6 – Kjøkkenventilasjon:**\nStøttet av ett sitat i dokumentene. Evidensen er noe begrenset (kun ett tekstutdrag), men er klar og direkte. Confidence opprettholdes på 0.85.\n\n**R7 – Manglende ferdigattest:**\nStøttet av dokumentene. Ekspedisjonsdokument bekreftes, men dato er ikke fullstendig angitt i de tilgjengelige chunkene. Risikoen er reell, men datoen for ekspedisjonsdokumentet er ukjent fra tilgjengelig evidens. Confidence justeres marginalt ned til 0.85 (fra 0.88) da fullstendig dokumentasjon mangler i chunkene.\n\n**R8 – Styregodkjennelse:**\nMeget godt støttet. Alle aspekter av risikoen bekreftes direkte i dokumentene, inkludert lovhenvisning (borettslagsloven § 4-5 (2)). Confidence opprettholdes på 0.85.\n\n**R9 – Legalpanterett 2G:**\nGodt støttet. Legalpanterett på inntil 2G bekreftes eksplisitt, og prioritet over tinglyste lån bekreftes. Confidence opprettholdes på 0.88.\n\n**R10 – Energikarakter G:**\nGodt støttet. Energikarakter G bekreftes direkte. Strømforbruk på ca. 8000 kWh/år er oppgitt av selger. Confidence opprettholdes på 0.87.\n\n**R11 – Gul liste:**\nDelvis støttet. Gul liste med 3 treff bekreftes, men det andre settet med treff er ikke fullstendig angitt i chunkene. Reguleringsplan S-132GO med offentlig kjørebane/veigrunn er nevnt, men sammenhengen med Gul liste er uklar. Confidence justeres ned til 0.72 (fra 0.78) da evidensen er ufullstendig.\n\n**R12 – Pågående byggesaker i nærområdet:**\nGodt støttet. Alle nevnte saksnumre bekreftes i dokumentene. Risikoen er reell men av moderat alvorlighetsgrad. Confidence opprettholdes på 0.75.\n\n**R13 – Solidaransvar for løpende utgifter:**\nGodt støttet. Begge aspekter bekreftes direkte i dokumentene. Confidence opprettholdes på 0.85.\n\n**R14 – Vinduer og innvendige overflater TG2:**\nStøttet av avvikslisten i tilstandsrapporten. Imidlertid mangler detaljert beskrivelse av hva avvikene konkret innebærer og estimerte utbedringskostnader i de tilgjengelige chunkene. Confidence justeres marginalt ned til 0.82.\n\n**R15 – Manglende radonmåling:**\nStøttet av ett sitat. Risikoen er reell men av lavere alvorlighetsgrad siden det ikke er krav om radonmåling for denne boligen. Confidence justeres ned til 0.70 (fra 0.72).\n\n**R16 – Differanse borettsinnskudd:**\nGodt støttet. Differansen på ca. 4,985 millioner kroner mellom borettslagets tall (78 445 000) og OBOS-oversikten fra 2017 (83 430 000) bekreftes, og det bekreftes at årsaken ikke er avdekket. Confidence opprettholdes på 0.80.\n\n**Manglende risikoer som burde vært identifisert:**\n1. IN-lån (individuell nedbetaling): Dokumentene nevner nedbetaling av IN-lån på kr 1 292/mnd. Dette er en særskilt risiko da IN-lån innebærer at andelen har en ekstra gjeldspost utover ordinær fellesgjeld, og betingelsene for dette lånet bør undersøkes nærmere.\n2. El-anlegg: Eltilsyn 2025 er godkjent, men nye sikringer (jordbrytere) er planlagt til 2026. Dette kan indikere at el-anlegget har mangler som krever utbedring.\n3. Drenering/fukt i kjeller: Tilstandsrapporten dekker ikke fellesarealer, men det er en kloakkpumpe i kjelleren (serviceavtale med Oslo Pumpeservice), noe som kan indikere dreneringsproblemer.\n\nDisse manglende risikoene bør undersøkes nærmere gjennom tilleggsforespørsler.\n"
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
    "input_tokens": 23937,
    "output_tokens": 5828,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
