# Trace: agentic_reflecting_iter1
- **Run ID:** 8aa448cf-56b6-4e96-a52e-0d97434b1a7c
- **Tidspunkt:** 2026-03-23T21:38:18.982015+00:00
- **Varighet:** 133.14s
- **Input tokens:** 24047
- **Output tokens:** 6944

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
Risiko 1: Borettslagets lån har flytende rente, og felleskostnadene kan øke ved rentejusteringer. Styret har varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 viser et planlagt underskudd på kr 32 585.
  Confidence: 0.95
  Evidens: Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.; I følge svar fra styre er det mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.; For 2025 var det budsjettert et underskudd på 32 585,‑.; I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.

Risiko 2: Borettslaget hadde et underskudd på kr 658 619 i 2024. Disponible midler er redusert fra kr 1 838 124 (2023) til kr 1 138 572 (2024), noe som indikerer en negativ økonomisk utvikling.
  Confidence: 0.95
  Evidens: Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.; Borettslagets disponible midler er en vesentlig størrelse knyttet til borettslagets økonomi og utgjorde pr. 31.12.2024 kr 1.138.572.; A. DISP. MIDLER PR. 01.01. 1 838 124 1 659 019 1 138 572 1 838 124

Risiko 3: Borettslaget har høy langsiktig gjeld på over 84 millioner kroner, med lån i OBOS-banken. Andel fellesgjeld for denne andelen er kr 225 885. Høy fellesgjeld øker risikoen for fremtidige kostnadsøkninger.
  Confidence: 0.9
  Evidens: SUM LANGSIKTIG GJELD 84 856 604 84 928 879; Andel fellesgjeld: 225 885 16.03.2026; Vibesgate 11 Borettslag har lån i OBOS-banken.

Risiko 4: Varmtvannstanken er over 20 år gammel (produsert i 2006) og kan svikte plutselig. Det er påpekt behov for tilfredsstillende el-tilkobling etter gjeldende forskrift.
  Confidence: 0.92
  Evidens: Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.; Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.; Varmtvannsberederen er på ca. 120 liter, produsert i 2006.

Risiko 5: Innvendige avløpsledninger av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.
  Confidence: 0.9
  Evidens: Avløpsrør ‑ støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.; Eldre og støpejern.

Risiko 6: Membranløsningen på badet (sluk, membran og tettesjikt) har passert mer enn halvparten av forventet brukstid, noe som øker risikoen for fuktskader og lekkasjer.
  Confidence: 0.92
  Evidens: Mer enn halvparten av forventet brukstid er passert på membranløsningen.; Det er plastsluk og smøremembran med ukjent utførelse.; Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membranløsningen er passert.

Risiko 7: Vinduer er av eldre dato og har oppnådd minste forventede brukstid. Det er fare for punktering av isolerglass, og ett vindu er vanskelig å lukke.
  Confidence: 0.88
  Evidens: Vinduer | Det registreres noe vanskelig å lukke et av vinduene i stuen.; Vinduer er av eldre dato og har oppnådd minste forventede brukstid.; Det er fare for punktering av isolerglass som følge av alder.

Risiko 8: Badet har kun naturlig ventilasjon, og det er vanskelig å etablere mekanisk/forsert avtrekk da dette muligens ikke er godkjent av borettslaget. Kjøkkenventilasjon er også mangelfull, noe som øker risiko for matos, lukt og dårlig innemiljø.
  Confidence: 0.87
  Evidens: Bad ‑ Ventilasjon | Rommet har kun naturlig ventilasjon.; Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk til felles luftekanaler i bygget.; Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø.

Risiko 9: Det elektriske anlegget er svært begrenset kontrollert i forbindelse med tilstandsrapporten, da dette krever Nemko-godkjent kompetanse. Manglende samsvarserklæring for utført arbeid på el-anlegget er også en risiko.
  Confidence: 0.85
  Evidens: Elektriske er veldig begrenset kontrollert i forbindelse med rapporten da dette krever Nemko godkjent kompetanse.; 11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)? Nei; På generelt grunnlag anbefales det kontroll av el-anlegget av autorisert firma.

Risiko 10: Bygget er fra 1893, og etasjeskillere er av trebjelkelag. Eldre bygningskonstruksjoner medfører generelt høyere risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.
  Confidence: 0.85
  Evidens: Bygård bygget i 1893. Boligen er en andelsleilighet.; Etasjeskillere er av trebjelkelag, antatt.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 11: Kjøper må godkjennes av styret i borettslaget. Risikoen for å bli godkjent som ny andelseier påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg.
  Confidence: 0.88
  Evidens: Kjøper skal godkjennes av styret i borettslaget. Dette kan ikke nektes uten saklig grunn.; Risikoen for å bli godkjent som ny andelseier påhviler kjøper.; Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper ikke rett til å ta eiendommen i bruk jf. borettslagsloven § 4-5 (2).; Blir kjøper ikke godkjent som ny eier må kjøper besørge videresalg av andelen.

Risiko 12: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold.
  Confidence: 0.85
  Evidens: Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.; Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer.

Risiko 13: Det er registrert en differanse i borettsinnskudd mellom regnskapet og oversikt fra OBOS (2017), uten at årsaken er avklart. Dette kan indikere uavklarte forhold i borettslagets økonomi.
  Confidence: 0.78
  Evidens: Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.; Det er ikke avdekket hva årsaken til denne differansen skyldes.; SUM BORETTSINNSKUDD -78 445 000

Risiko 14: Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, fasadeendringer og rehabiliteringsprosjekter. Ny kommuneplan kan påvirke eksisterende reguleringsplaner og eiendommens omgivelser.
  Confidence: 0.75
  Evidens: Saksnummer 202514073: Vibes gate 20 A‑C ‑ oppføring av seks balkonger; Saksnummer 202508578: Vibes gate 21 A ‑ bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer; Ny kommuneplan fra 23. september 2015. Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.; Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak fra 23.09.2015.

Risiko 15: Eiendommen slår ut på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn og begrensninger på fremtidige endringer av bygget.
  Confidence: 0.75
  Evidens: Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr.; Reguleringsplan S‑132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten.

Risiko 16: Energikarakter G er laveste mulige energikarakter, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper. Selger opplyser om et årlig strømforbruk på ca. 8000 kWh.
  Confidence: 0.82
  Evidens: Energikarakter: G; Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh.; Det er viktig å merke seg at energiforbruket kan variere fra husstand til husstand.

Risiko 17: Det er ikke utført radonmåling av selger. Selv om det ikke er krav om dette for boligen, kan radon utgjøre en helserisiko for beboerne.
  Confidence: 0.72
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; 21 Er det foretatt radonmåling? Nei

Risiko 18: Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.
  Confidence: 0.83
  Evidens: Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne.

Risiko 19: Badet har ufagmessige utførelser ved silikonering i dusjsonen, og krav til fall (høydeforskjell) er ikke oppfylt på gulvet. Dette kan medføre fuktskader over tid.
  Confidence: 0.82
  Evidens: Bad ‑ Overflater vegger og himling | Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.; Bad ‑ Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk.

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
avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand

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
. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller

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
 hentet direkte fra elektriske er veldig begrenset kontrollert i forbindelse
tilstandsrapporten: med rapporten da dette krever Nemko godkjent
kompetanse. På generelt grunnlag anbefales det kontroll
Bygning: av el‑ anlegget av autorisert firma.
Bygård bygget i 1893. Boligen er en andelsleilighet.
Yttervegger er oppført med murverk, med pussede og Foreligger det eltilsynsrapport de siste 5 år, og det er ikke
malte fasader. Etasjeskillere er av trebjelkelag, antatt foretatt arbeid på anlegget etter denne,

---

[d030_d030 | Side [1]]
琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den

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
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet:

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
eller eventuelt skifte ut døren for ‑ Bad ‑ Ventilasjon | Rommet har kun naturlig ventilasjon.
å forhindre videre svelling og skade. Det er vanskelig å etablere en annen løsning på bakgrunn
av at det muligens ikke er godkjent av sameiet/
‑ Bad ‑ Overflater vegger og himling | Det registreres noe borettslaget å etablere mekanisk/ forsert avtrekk til felles
ufagmessige utførelser ved silikonering i dusjsonen. luftekanaler i bygget.
Overflatene ser visuelt bra ut, tilstandsgraden settes av
hensyn til alder og

---

[d030_d030 | Side [1]]
t på rapporten se forside
Oppdragsnr.: 22372-1562 Befaringsdato: 16.03.2026 Side: 16 av 18
95

## Side 96

Vibes gate 11B, 0356 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 412 Vesterheimsveien 2
0301 OSLO 1712 GRÅLUM
Forutsetninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det er mer

---

[d030_d030 | Side [1]]
ilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen •

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
ler bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke kan finnes skjulte feil, skader og mangler. NS
basert på prisintervaller. Anslaget må ikke forveksles med en 3600:2018 (teknisk tilstandsanalyse ved omsetning av bolig) har
konkret vurdering og tilbud fra en entreprenør eller håndverker. undersøkelsesnivå 1 til 3, hvor nivå 1 er det laveste og basert

---

[d030_d030 | Side [1]]
rykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
79

## Side 80

Tilstandsrapport
Andelsleilighet
Vibes gate 11B, 0356 OSLO OSLO kommune
gnr. 214, bnr. 412
Andelsnummer 13
Sum areal alle bygg: BRA: 50 m² BRA-i: 45 m²
Befaringsdato: 16.03.2026 Rapportdato: 21.03.2026 Oppdragsnr.: 22372-1562 Referansenummer: EN1165
Foretak: Takstkonsulent1 AS Taks琀椀ngeniør: Marcus Pe琀琀ersen
Rapporten kan brukes i inn琀椀l e琀琀 år e琀琀er

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
orstyrrende på naboene. Det skal være ro i boligselskapet mellom klokken 23:00–
06:00. I dette tidsrommet skal det ikke spilles høy musikk eller utføres annen
aktivitet som forstyrrer nattesøvnen, eller på annet vis virker sjenerende på
omgivelsene. Ved spesielle anledninger, som medfører ekstra støy etter klokken
23:00, varsles beboerne i tilstøtende boliger i god tid.
Ved innflytting, modernisering eller reparasjoner i boligen som medfører banking,
boring, sliping, saging etc, varsles naboer, og det

---

[d030_d030 | Side [1]]
rer banking,
boring, sliping, saging etc, varsles naboer, og det tillates i tidsrommet:
• På hverdager klokken 07:00–20:00.
• Lørdager klokken 10:00–18:00.
3. Bruk av boligen og eventuelle tilknyttede arealer
Beboerne skal sørge for:
• At boligen er tilstrekkelig oppvarmet ved fravær, flytting eller lignende i den
kalde årstiden slik.
• At vann/avløpsrør ikke blir frostskadet.
• At avtrekksventiler på kjøkken, bad og toalett holdes åpne for å unngå
kondensskader og muggdannelse i boligen.
• Å opptre

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
tvannstank iht. gjeldende forskrift. sykkelbod.
Det er påvist at varmtvannstank er over 20 år. Det bør ‑ Det er en serviceavtale med Oslo Pumpeservice for en
etableres tilfredsstillende el‑tilkobling etter gjeldende felles kloakkpumpe i kjelleren
forskrift. Det er ikke behov for utbedringstiltak siden ‑ Det skal være ro i boligselskapet mellom klokken 23:00
tanken fungerer i dag, men ut ifra alder kan skader og 06:00. Støyende arbeider er tillatt på hverdager kl.
plutselig oppstå på eldre tanker.

---

[d030_d030 | Side [1]]
av/manglende tillatelser vedrørende eiendommen?
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
25 Kjenner du til om

---

[d030_d030 | Side [1]]
omgeometri og veggtykkelser. Plantegning
er måleverdige så lenge den ikke endres. Det anbefales
Fra 01.01.24 er det innført nye regler for måling og alltid å ta kontrollmål på ste det ved bestilling av
opplysning av areal på boliger. innredningselementer, bytting av vinduer ol. Annet
De nye arealbegrepene er: filformat, snitt eller 3D‑modell kan bestilles på
www.romly.no
Bruksareal BRA:
52

## Side 53

OM EIENDOMMEN
Lovlighet, byggetegninger fryseskap, noe som gir et sømløst preg. Belysning over
Det

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
77: Vibes gate 2 ‑ bruksendring
fra atelier på loft til bolig og fasadeendringer
Reguleringsplanen som gjelder for eiendommen er helt ‑ Saksnummer 202523557: Vibes gate 2 ‑ bruksendring
eller delvis opphevet som følge av bystyrets vedtak fra tidligere butikklokale til boligformål
23.09.2015 (sak 262) – Kommuneplan 2015 – Oslo mot ‑ Saksnummer 202602635: Ole Vigs gate 8B ‑ ny
2030: Smart, trygg og grønn. rørføring av vann og avløp til ny plassering av kjøkken ‑
‑ Eiendommen er regulert til Bolig m.tilh.

---

[d030_d030 | Side [1]]
og støpejern.
Varmtvannsberederen er på ca. 120 liter, produsert i Bygningsdeler vurdert med TG2:
2006 og er plassert over himling på badet. Det er
plastsluk på badet. ‑ Vinduer | Det registreres noe vanskelig å lukke et av
vinduene i stuen. Vinduer er av eldre dato og har
Ventilasjon: oppnådd minste forventede brukstid. Det er fare for
Boligen har naturlig oppdriftsventilasjon med lufteluker i punktering av isolerglass som følge av alder, og
vegg og spalter i vinduene. Badet har naturlig ventilering

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
gen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei.
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan e琀琀er plan- og bygningsloven kapi琀琀el 32
Reglene om bruksendring og brannceller kan

---

[d030_d030 | Side [1]]
edring og dekke kostnader selv. Ønsker eier av leilighet
å pusse opp/rehabilitere egen leilighet, står eier av leilighet for dette selv.
7.1 Ved rehabilitering og oppussing av leiligheter som vil medføre støy, støv,
hensetning av bygningmateriale, med mer skal beboere og styret varsles i forkant.
Seksjonseier må besørge løpende renhold og opprydding.

Brudd på ordensreglene
Brudd på ordensreglene er å anse som mislighold, og kan føre til sanksjoner.
Husholdningsregler ble sist revidert april 2018
140

##

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
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
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
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller

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
 er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Ja, kun av faglært
Beskrivelse Nye sikringer (jordbrytere)
Arbeid utført av Boligelektrikeren AS
11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)?
Nei

---

[d030_d030 | Side [1]]
tar
Det forutse琀琀es at boligen er fullverdi forsikret.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
EGENERKLÆRINGSSKJEM
Gjennomgå琀琀 Nei
A
Tegninger Gjennomgå琀琀 Nei
Oppdragsnr.: 22372-1562 Befaringsdato: 16.03.2026 Side: 15 av 18
94

## Side 95

Vibes gate 11B, 0356 OSLO Takstkonsulent1 AS
Gnr 214 - Bnr 412 Vesterheimsveien 2
0301 OSLO 1712 GRÅLUM
Revisjoner
Versjon Ny versjon Kommentar
1 21.03.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 22372-1562 Befaringsdato:

---

[d030_d030 | Side [1]]
i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total

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
lknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: EHL 1
95006210
:ecnerefer
tnemucoD
67

## Side 68

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i

---

[d030_d030 | Side [1]]
ser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot byggeregler
Når du kjøper en brukt bolig, er det vik琀椀g å være oppmerksom på at Den bygningssakkyndige vil vurdere boligen mot hvordan det var vanlig å
de琀琀e ikke kan sammenlignes med å kjøpe en ny bolig. Måten bygge og regler som gjaldt på søknads琀椀dspunktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet

---

[d030_d030 | Side [1]]
utsetninger
•Fuktmåling: måling av fuktinnhold i materiale eller i
bakenforliggende konstruksjon ved bruk av egnet måleutstyr,
blant annet hammerelektrode og pigger. Verdi, takstingeniøren og takstforetaket behandler
personopplysninger som takstingeniøren trenger for å kunne
•Hulltaking: boring av hull for inspeksjon og fuktmåling i utarbeide rapporten. Personvernerklæring med informasjon om
risikoutsatte konstruksjoner, primært i tilstøtende vegger til bad, bruk av personopplysninger og dine rettigheter

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
 for å unngå
kondensskader og muggdannelse i boligen.
• Å opptre ansvarlig med ild og varme, slik at det ikke oppstår brann i
boligselskapet.
• Straks å melde fra til styret dersom det oppdages veggedyr, kakerlakker eller
lignende i boligen. Andelseier må for egen regning sørge for desinfeksjon.
• Å melde alle skadesaker til styret. Styret avklarer hvorvidt det er
forsikringsdekning for skaden og kontrollerer hvorvidt bygningen kan være
skadet.
138

## Side 139

• Å begrense skaden, for eksempel å kontakte

---

[d030_d030 | Side [1]]
 Eier av adkomstdokumenter
/VIBESGATE 11 BORETTSLAG 992885645 SK EIENDOM AS Emil Hübert Lakhmari
Organisasjonsnummer:
981 135 792
Innskudd, pålydende mm
Andelsnummer Andel fellesformue Andel fellesgjeld
13 40 774 31.12.2025 225 885 16.03.2026
Kommentar
Ligningsposter pr. 31.12.2025 og 16.03.2026 (med forbehold om endringer).
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Gjensidige Forsikring 88897493
Kommentar
Det forutse琀琀es at boligen er fullverdi forsikret.
Kilder og

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Borettslagets lån har flytende rente, og felleskostnadene kan øke ved rentejusteringer. Styret har varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 viser et planlagt underskudd på kr 32 585. I tillegg er felleskostnadene foreslått økt med 10% fra 01.07.25.",
      "evidence": [
        "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.",
        "I følge svar fra styre er det mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.",
        "For 2025 var det budsjettert et underskudd på 32 585,-.",
        "I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.",
        "På generalforsamlingen i mai 2025 ble det vedtatt å holde husleien uendret for 2025, da oppspart kapital kan dekke et budsjettert underskudd."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Borettslaget hadde et underskudd på kr 658 619 i 2024. Disponible midler er redusert fra kr 1 838 124 (2023) til kr 1 138 572 (2024), noe som indikerer en negativ økonomisk utvikling og redusert buffer.",
      "evidence": [
        "Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.",
        "Borettslagets disponible midler er en vesentlig størrelse knyttet til borettslagets økonomi og utgjorde pr. 31.12.2024 kr 1.138.572.",
        "A. DISP. MIDLER PR. 01.01. 1 838 124 1 659 019 1 138 572 1 838 124",
        "Forutsetningen om fortsatt drift er til stede, og årsregnskapet for 2024 er satt opp under denne forutsetning."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R3",
      "description": "Borettslaget har høy langsiktig gjeld på over 84 millioner kroner, med lån i OBOS-banken. Andel fellesgjeld for denne andelen er kr 225 885. Høy fellesgjeld øker risikoen for fremtidige kostnadsøkninger, særlig ved renteendringer.",
      "evidence": [
        "SUM LANGSIKTIG GJELD 84 856 604 84 928 879",
        "Andel fellesgjeld: 225 885 16.03.2026",
        "Vibesgate 11 Borettslag har lån i OBOS-banken.",
        "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer."
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
      "risk_id": "R4",
      "description": "Varmtvannstanken er over 20 år gammel (produsert i 2006) og kan svikte plutselig. Det er påpekt behov for tilfredsstillende el-tilkobling etter gjeldende forskrift.",
      "evidence": [
        "Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.",
        "Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.",
        "Varmtvannsberederen er på ca. 120 liter, produsert i 2006."
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
      "risk_id": "R5",
      "description": "Innvendige avløpsledninger av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.",
      "evidence": [
        "Avløpsrør - støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
        "Eldre og støpejern."
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
      "risk_id": "R6",
      "description": "Membranløsningen på badet (sluk, membran og tettesjikt) har passert mer enn halvparten av forventet brukstid, noe som øker risikoen for fuktskader og lekkasjer.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
        "Det er plastsluk og smøremembran med ukjent utførelse.",
        "Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membranløsningen er passert."
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
      "risk_id": "R7",
      "description": "Vinduer er av eldre dato og har oppnådd minste forventede brukstid. Det er fare for punktering av isolerglass, og ett vindu er vanskelig å lukke.",
      "evidence": [
        "Vinduer | Det registreres noe vanskelig å lukke et av vinduene i stuen.",
        "Vinduer er av eldre dato og har oppnådd minste forventede brukstid.",
        "Det er fare for punktering av isolerglass som følge av alder."
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
      "risk_id": "R8",
      "description": "Badet har kun naturlig ventilasjon, og det er vanskelig å etablere mekanisk/forsert avtrekk da dette muligens ikke er godkjent av borettslaget. Kjøkkenventilasjon er også mangelfull, noe som øker risiko for matos, lukt og dårlig innemiljø.",
      "evidence": [
        "Bad - Ventilasjon | Rommet har kun naturlig ventilasjon.",
        "Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk til felles luftekanaler i bygget.",
        "Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø."
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
      "risk_id": "R9",
      "description": "Det elektriske anlegget er svært begrenset kontrollert i forbindelse med tilstandsrapporten. Manglende samsvarserklæring for utført arbeid på el-anlegget (nye sikringer/jordbrytere) er en risiko. Eltilsyn fra 2025 er godkjent, men samsvarserklæring mangler.",
      "evidence": [
        "Elektriske er veldig begrenset kontrollert i forbindelse med rapporten da dette krever Nemko godkjent kompetanse.",
        "11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)? Nei",
        "På generelt grunnlag anbefales det kontroll av el-anlegget av autorisert firma.",
        "Ja, kun av faglært - Beskrivelse: Nye sikringer (jordbrytere) - Arbeid utført av: Boligelektrikeren AS",
        "Eltilsyn 2025 (godkjent), nye sikringer (jordbrytere) 2026"
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R10",
      "description": "Bygget er fra 1893, og etasjeskillere er av trebjelkelag. Eldre bygningskonstruksjoner medfører generelt høyere risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.",
      "evidence": [
        "Bygård bygget i 1893. Boligen er en andelsleilighet.",
        "Etasjeskillere er av trebjelkelag, antatt.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
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
      "risk_id": "R11",
      "description": "Kjøper må godkjennes av styret i borettslaget. Risikoen for å bli godkjent som ny andelseier påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg.",
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
      "confidence": 0.88
    },
    {
      "risk_id": "R12",
      "description": "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader.",
      "evidence": [
        "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
        "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer."
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
      "risk_id": "R13",
      "description": "Det er registrert en differanse i borettsinnskudd mellom regnskapet (kr 78 445 000) og oversikt fra OBOS fra 2017 (kr 83 430 000), uten at årsaken er avklart. Dette kan indikere uavklarte forhold i borettslagets økonomi.",
      "evidence": [
        "Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.",
        "Det er ikke avdekket hva årsaken til denne differansen skyldes.",
        "SUM BORETTSINNSKUDD -78 445 000"
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
      "risk_id": "R14",
      "description": "Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, fasadeendringer og rehabiliteringsprosjekter. Ny kommuneplan kan påvirke eksisterende reguleringsplaner og eiendommens omgivelser.",
      "evidence": [
        "Saksnummer 202514073: Vibes gate 20 A-C - oppføring av seks balkonger",
        "Saksnummer 202508578: Vibes gate 21 A - bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer",
        "Ny kommuneplan fra 23. september 2015. Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.",
        "Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak fra 23.09.2015."
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
      "risk_id": "R15",
      "description": "Eiendommen slår ut på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn og begrensninger på fremtidige endringer av bygget.",
      "evidence": [
        "Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr.",
        "Reguleringsplan S-132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.68
    },
    {
      "risk_id": "R16",
      "description": "Energikarakter G er laveste mulige energikarakter, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper. Selger opplyser om et årlig strømforbruk på ca. 8000 kWh.",
      "evidence": [
        "Energikarakter: G",
        "Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh.",
        "Det er viktig å merke seg at energiforbruket kan variere fra husstand til husstand."
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
      "risk_id": "R17",
      "description": "Det er ikke utført radonmåling av selger. Selv om det ikke er krav om dette for boligen, kan radon utgjøre en helserisiko for beboerne.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "21 Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R18",
      "description": "Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.",
      "evidence": [
        "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R19",
      "description": "Badet har ufagmessige utførelser ved silikonering i dusjsonen, og krav til fall (høydeforskjell) er ikke oppfylt på gulvet. Dette kan medføre fuktskader over tid.",
      "evidence": [
        "Bad - Overflater vegger og himling | Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.",
        "Bad - Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk."
      ],
      "source_documents": [
        "d030_d030"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    }
  ],
  "re_retrieval_queries": [
    "Gul liste kulturminner begrensninger Oslo bygård 1893",
    "borettsinnskudd differanse OBOS 2017 forklaring",
    "radon Oslo Majorstuen risiko kjeller underetasje",
    "TG3 tilstandsgrad tre alvorlige avvik Vibes gate 11B",
    "felles kloakkpumpe serviceavtale Oslo Pumpeservice kjeller",
    "IN-lån individuell nedbetaling fellesgjeld borettslag risiko",
    "borettslagets vedlikeholdsplan fremtidige prosjekter tak drenering",
    "skjeggkre insekter skadedyr borettslag",
    "kjøkkenventilasjon vifte mangelfull tilstandsgrad",
    "balkong etablert fellesutgifter endring andeler"
  ],
  "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Flytende rente og økning i felleskostnader (0.95 → 0.97):**\nEvidensen er svært sterk og direkte. Dokumentene bekrefter flytende rente, varslet økning, budsjettert underskudd på kr 32 585 og konkret forslag om 10% økning fra 01.07.25. Generalforsamlingsprotokollen bekrefter at husleien holdes uendret i 2025 med bruk av oppspart kapital. Confidence justeres opp til 0.97 da alle elementer er godt dokumentert.\n\n**R2 – Underskudd 2024 og reduserte disponible midler (0.95 → 0.95):**\nEvidensen er direkte og tallmessig bekreftet. Underskudd kr 658 619, disponible midler ned fra kr 1 838 124 til kr 1 138 572. Styret bekrefter fortsatt drift. Confidence opprettholdes på 0.95.\n\n**R3 – Høy langsiktig gjeld (0.90 → 0.92):**\nEvidensen er direkte bekreftet med eksakte tall fra balansen. Andel fellesgjeld kr 225 885 er dokumentert. Flytende rente forsterker risikoen. Confidence justeres opp til 0.92.\n\n**R4 – Varmtvannstank over 20 år (0.92 → 0.92):**\nEvidensen er direkte fra tilstandsrapporten. Produksjonsår 2006 bekreftet, alder over 20 år bekreftet, manglende el-tilkobling etter forskrift påpekt. Confidence opprettholdes.\n\n**R5 – Avløpsrør støpejern (0.90 → 0.90):**\nEvidensen er direkte fra tilstandsrapporten. Halvparten av brukstid passert bekreftet. Confidence opprettholdes.\n\n**R6 – Membranløsning bad (0.92 → 0.92):**\nEvidensen er direkte fra tilstandsrapporten med TG2. Ukjent utførelse av smøremembran er en tilleggsrisiko. Confidence opprettholdes.\n\n**R7 – Eldre vinduer (0.88 → 0.88):**\nEvidensen er direkte fra tilstandsrapporten. Vanskelig å lukke ett vindu, fare for punktering bekreftet. Confidence opprettholdes.\n\n**R8 – Ventilasjon bad og kjøkken (0.87 → 0.87):**\nEvidensen er direkte fra tilstandsrapporten. Naturlig ventilasjon, vanskelig å etablere mekanisk løsning, risiko for matos bekreftet. Confidence opprettholdes.\n\n**R9 – El-anlegg begrenset kontrollert (0.85 → 0.83):**\nEvidensen er direkte bekreftet. Manglende samsvarserklæring er dokumentert. Eltilsyn 2025 er godkjent, noe som delvis reduserer risikoen, men samsvarserklæring for nyere arbeid mangler fortsatt. Confidence justeres ned til 0.83.\n\n**R10 – Bygget fra 1893, trebjelkelag (0.85 → 0.85):**\nEvidensen er direkte bekreftet. Byggeår 1893 og trebjelkelag dokumentert. Rapporten er ikke garanti mot skjulte feil. Confidence opprettholdes.\n\n**R11 – Styregodkjennelse (0.88 → 0.88):**\nEvidensen er direkte og juridisk korrekt. Alle elementer bekreftet i dokumentene. Confidence opprettholdes.\n\n**R12 – Legalpanterett (0.85 → 0.85):**\nEvidensen er direkte bekreftet. Legalpant inntil 2G dokumentert. Confidence opprettholdes.\n\n**R13 – Differanse borettsinnskudd (0.78 → 0.72):**\nEvidensen bekrefter differansen (kr 83 430 000 vs kr 78 445 000), men det er ikke avdekket årsak. Differansen kan skyldes korrigeringer (f.eks. korrigert andel 7 i 2011 på kr 2 050 000 er nevnt i note 12). Risikoen er reell men noe usikker i sin praktiske betydning. Confidence justeres ned til 0.72.\n\n**R14 – Pågående byggesaker og plansaker (0.75 → 0.70):**\nEvidensen bekrefter pågående saker i nærområdet, men de fleste er i nabogater og har begrenset direkte påvirkning på denne eiendommen. Kommuneplanen fra 2015 er gammel. Risikoen er reell men lav i praktisk betydning. Confidence justeres ned til 0.70.\n\n**R15 – Gul liste kulturminner (0.75 → 0.68):**\nEvidensen er fragmentert – teksten er avskåret (\"3 treff vedr.\"). Det er uklart hva de tre treffene gjelder utover lokalitet. Risikoen er reell for en bygård fra 1893, men evidensen er utilstrekkelig til å vurdere omfanget. Confidence justeres ned til 0.68.\n\n**R16 – Energikarakter G (0.82 → 0.82):**\nEvidensen er direkte bekreftet. Energikarakter G og strømforbruk ca. 8000 kWh dokumentert. Confidence opprettholdes.\n\n**R17 – Ingen radonmåling (0.72 → 0.65):**\nEvidensen bekrefter manglende radonmåling, men det er ikke krav for denne boligen. Boligen er i 2. etasje (bad er i 2. etasje ifølge tilstandsrapporten), noe som reduserer radonrisikoen betydelig. Confidence justeres ned til 0.65.\n\n**R18 – Solidaransvar for fellesutgifter (0.83 → 0.83):**\nEvidensen er direkte bekreftet. Confidence opprettholdes.\n\n**R19 – Ufagmessig silikonering og manglende fall på bad (0.82 → 0.82):**\nEvidensen er direkte fra tilstandsrapporten. Begge avvik bekreftet. Confidence opprettholdes.\n\n**Manglende risikoer som bør vurderes:**\n1. **IN-lån risiko**: Andelen har individuell nedbetaling av fellesgjeld (IN-lån kr 1 292/mnd). Dersom rentene endres, endres denne betalingen direkte. Dette er en separat risiko fra de generelle felleskostnadene.\n2. **Felles kloakkpumpe**: Det er nevnt en serviceavtale med Oslo Pumpeservice for en felles kloakkpumpe i kjelleren – dette kan indikere risiko for kjelleroversvømmelse ved pumpesvikt.\n3. **Ingen TG3-avvik**: Positivt funn – ingen bygningsdeler er vurdert med TG3, noe som begrenser de mest alvorlige risikoene.\n4. **Boligkjøperforsikring**: Selger har tegnet boligselgerforsikring, noe som gir kjøper en viss beskyttelse.\n\nConfidence for R13 og R15 er justert ned pga. svakere eller ufullstendig evidens. R17 er justert ned pga. lav praktisk relevans for denne boligen. R1 er justert opp pga. ytterligere bekreftet evidens om 10%-økning.\n"
}

## Raw Response
```json
{
  "id": "msg_014asnVmDSZjczKRATL4bzSQ",
  "container": null,
  "content": [
    {
      "id": "toolu_01M1Cvy2DMKhSHvfVvQLp4t5",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Borettslagets lån har flytende rente, og felleskostnadene kan øke ved rentejusteringer. Styret har varslet mulig økning i fellesutgifter etter generalforsamlingen, og budsjettet for 2025 viser et planlagt underskudd på kr 32 585. I tillegg er felleskostnadene foreslått økt med 10% fra 01.07.25.",
            "evidence": [
              "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer.",
              "I følge svar fra styre er det mulig at det blir en økning i fellesutgifter etter årets generalforsamling, men dette er ikke bestemt enda.",
              "For 2025 var det budsjettert et underskudd på 32 585,-.",
              "I budsjettet er felleskostnadene foreslått økt med 10% fra og med 01.07.25.",
              "På generalforsamlingen i mai 2025 ble det vedtatt å holde husleien uendret for 2025, da oppspart kapital kan dekke et budsjettert underskudd."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Borettslaget hadde et underskudd på kr 658 619 i 2024. Disponible midler er redusert fra kr 1 838 124 (2023) til kr 1 138 572 (2024), noe som indikerer en negativ økonomisk utvikling og redusert buffer.",
            "evidence": [
              "Årets resultat fremkommer i resultatregnskapet som et underskudd på kr 658.619.",
              "Borettslagets disponible midler er en vesentlig størrelse knyttet til borettslagets økonomi og utgjorde pr. 31.12.2024 kr 1.138.572.",
              "A. DISP. MIDLER PR. 01.01. 1 838 124 1 659 019 1 138 572 1 838 124",
              "Forutsetningen om fortsatt drift er til stede, og årsregnskapet for 2024 er satt opp under denne forutsetning."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R3",
            "description": "Borettslaget har høy langsiktig gjeld på over 84 millioner kroner, med lån i OBOS-banken. Andel fellesgjeld for denne andelen er kr 225 885. Høy fellesgjeld øker risikoen for fremtidige kostnadsøkninger, særlig ved renteendringer.",
            "evidence": [
              "SUM LANGSIKTIG GJELD 84 856 604 84 928 879",
              "Andel fellesgjeld: 225 885 16.03.2026",
              "Vibesgate 11 Borettslag har lån i OBOS-banken.",
              "Borettslagets lån har flytende rente, og felleskostnadene kan derfor endres ved rentejusteringer."
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
            "risk_id": "R4",
            "description": "Varmtvannstanken er over 20 år gammel (produsert i 2006) og kan svikte plutselig. Det er påpekt behov for tilfredsstillende el-tilkobling etter gjeldende forskrift.",
            "evidence": [
              "Det er påvist at varmtvannstank er over 20 år. Det bør etableres tilfredsstillende el-tilkobling etter gjeldende forskrift.",
              "Det er ikke behov for utbedringstiltak siden tanken fungerer i dag, men ut ifra alder kan skader plutselig oppstå på eldre tanker.",
              "Varmtvannsberederen er på ca. 120 liter, produsert i 2006."
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
            "risk_id": "R5",
            "description": "Innvendige avløpsledninger av støpejern har passert mer enn halvparten av forventet brukstid, noe som innebærer risiko for lekkasje og kostbare utbedringer.",
            "evidence": [
              "Avløpsrør - støpejern | Mer enn halvparten av forventet brukstid er passert på innvendige avløpsledninger.",
              "Eldre og støpejern."
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
            "risk_id": "R6",
            "description": "Membranløsningen på badet (sluk, membran og tettesjikt) har passert mer enn halvparten av forventet brukstid, noe som øker risikoen for fuktskader og lekkasjer.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på membranløsningen.",
              "Det er plastsluk og smøremembran med ukjent utførelse.",
              "Tilstandsgrad 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membranløsningen er passert."
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
            "risk_id": "R7",
            "description": "Vinduer er av eldre dato og har oppnådd minste forventede brukstid. Det er fare for punktering av isolerglass, og ett vindu er vanskelig å lukke.",
            "evidence": [
              "Vinduer | Det registreres noe vanskelig å lukke et av vinduene i stuen.",
              "Vinduer er av eldre dato og har oppnådd minste forventede brukstid.",
              "Det er fare for punktering av isolerglass som følge av alder."
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
            "risk_id": "R8",
            "description": "Badet har kun naturlig ventilasjon, og det er vanskelig å etablere mekanisk/forsert avtrekk da dette muligens ikke er godkjent av borettslaget. Kjøkkenventilasjon er også mangelfull, noe som øker risiko for matos, lukt og dårlig innemiljø.",
            "evidence": [
              "Bad - Ventilasjon | Rommet har kun naturlig ventilasjon.",
              "Det er vanskelig å etablere en annen løsning på bakgrunn av at det muligens ikke er godkjent av sameiet/borettslaget å etablere mekanisk/forsert avtrekk til felles luftekanaler i bygget.",
              "Konsekvensen av manglende avtrekk er økt risiko for matos, lukt og dårlig innemiljø."
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
            "risk_id": "R9",
            "description": "Det elektriske anlegget er svært begrenset kontrollert i forbindelse med tilstandsrapporten. Manglende samsvarserklæring for utført arbeid på el-anlegget (nye sikringer/jordbrytere) er en risiko. Eltilsyn fra 2025 er godkjent, men samsvarserklæring mangler.",
            "evidence": [
              "Elektriske er veldig begrenset kontrollert i forbindelse med rapporten da dette krever Nemko godkjent kompetanse.",
              "11.1 Foreligger det samsvarserklæring (i henhold til forskrift om elektriske lavspenningsanlegg)? Nei",
              "På generelt grunnlag anbefales det kontroll av el-anlegget av autorisert firma.",
              "Ja, kun av faglært - Beskrivelse: Nye sikringer (jordbrytere) - Arbeid utført av: Boligelektrikeren AS",
              "Eltilsyn 2025 (godkjent), nye sikringer (jordbrytere) 2026"
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R10",
            "description": "Bygget er fra 1893, og etasjeskillere er av trebjelkelag. Eldre bygningskonstruksjoner medfører generelt høyere risiko for skjulte feil og mangler som ikke er avdekket i tilstandsrapporten.",
            "evidence": [
              "Bygård bygget i 1893. Boligen er en andelsleilighet.",
              "Etasjeskillere er av trebjelkelag, antatt.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
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
            "risk_id": "R11",
            "description": "Kjøper må godkjennes av styret i borettslaget. Risikoen for å bli godkjent som ny andelseier påhviler kjøper. Dersom kjøper ikke godkjennes, kan kjøper ikke ta eiendommen i bruk og må besørge videresalg.",
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
            "confidence": 0.88
          },
          {
            "risk_id": "R12",
            "description": "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader på inntil 2 ganger folketrygdens grunnbeløp. Dette betyr at borettslaget har prioritet over tinglyste lån ved mislighold av felleskostnader.",
            "evidence": [
              "Borettslaget har legalpanterett i andelen for krav på dekning av felleskostnader og andre krav fra borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.",
              "Borettslaget har prioritet over tinglyste lån når det gjelder betaling av felleskostnader, og kan kreve inn pengene før andre kreditorer."
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
            "risk_id": "R13",
            "description": "Det er registrert en differanse i borettsinnskudd mellom regnskapet (kr 78 445 000) og oversikt fra OBOS fra 2017 (kr 83 430 000), uten at årsaken er avklart. Dette kan indikere uavklarte forhold i borettslagets økonomi.",
            "evidence": [
              "Oversikt fra OBOS fra 2017 viser sum borettsinnskudd på kr. 83.430.000.",
              "Det er ikke avdekket hva årsaken til denne differansen skyldes.",
              "SUM BORETTSINNSKUDD -78 445 000"
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
            "risk_id": "R14",
            "description": "Det er flere pågående byggesaker og plansaker i nærområdet, inkludert bruksendringer, fasadeendringer og rehabiliteringsprosjekter. Ny kommuneplan kan påvirke eksisterende reguleringsplaner og eiendommens omgivelser.",
            "evidence": [
              "Saksnummer 202514073: Vibes gate 20 A-C - oppføring av seks balkonger",
              "Saksnummer 202508578: Vibes gate 21 A - bruksendring av lokale i underetasje fra næring til bolig og fasadeendringer",
              "Ny kommuneplan fra 23. september 2015. Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.",
              "Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak fra 23.09.2015."
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
            "risk_id": "R15",
            "description": "Eiendommen slår ut på Gul liste med 3 treff vedrørende lokalitet, noe som kan indikere kulturminnehensyn og begrensninger på fremtidige endringer av bygget.",
            "evidence": [
              "Eiendommen slår ut på Gul liste med 3 treff vedr. lokalitet og 3 treff vedr.",
              "Reguleringsplan S-132GO, Flate: Offentlig kjørebane/veigrunn er registrert på tomten."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.68
          },
          {
            "risk_id": "R16",
            "description": "Energikarakter G er laveste mulige energikarakter, noe som indikerer høyt energiforbruk og potensielt høye strømkostnader for kjøper. Selger opplyser om et årlig strømforbruk på ca. 8000 kWh.",
            "evidence": [
              "Energikarakter: G",
              "Selger opplyser at det årlige strømforbruket har vært ca. 8000 kWh.",
              "Det er viktig å merke seg at energiforbruket kan variere fra husstand til husstand."
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
            "risk_id": "R17",
            "description": "Det er ikke utført radonmåling av selger. Selv om det ikke er krav om dette for boligen, kan radon utgjøre en helserisiko for beboerne.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "21 Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R18",
            "description": "Andelseierne er solidarisk ansvarlige for borettslagets løpende utgifter dersom andre andelshavere misligholder sine forpliktelser, eller dersom borettslaget sitter på fraflyttede/usolgte andeler.",
            "evidence": [
              "Manglende innbetaling av fellesutgiftene som følge av andre andelshaveres mislighold, eller dersom borettslaget sitter på fraflyttede og/eller usolgte andeler, må dekkes av de øvrige andelseierne."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R19",
            "description": "Badet har ufagmessige utførelser ved silikonering i dusjsonen, og krav til fall (høydeforskjell) er ikke oppfylt på gulvet. Dette kan medføre fuktskader over tid.",
            "evidence": [
              "Bad - Overflater vegger og himling | Det registreres noe ufagmessige utførelser ved silikonering i dusjsonen.",
              "Bad - Overflater gulv | Krav til fall (høydeforskjell) er ikke oppfylt, men det er fall til sluk."
            ],
            "source_documents": [
              "d030_d030"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          }
        ],
        "re_retrieval_queries": [
          "Gul liste kulturminner begrensninger Oslo bygård 1893",
          "borettsinnskudd differanse OBOS 2017 forklaring",
          "radon Oslo Majorstuen risiko kjeller underetasje",
          "TG3 tilstandsgrad tre alvorlige avvik Vibes gate 11B",
          "felles kloakkpumpe serviceavtale Oslo Pumpeservice kjeller",
          "IN-lån individuell nedbetaling fellesgjeld borettslag risiko",
          "borettslagets vedlikeholdsplan fremtidige prosjekter tak drenering",
          "skjeggkre insekter skadedyr borettslag",
          "kjøkkenventilasjon vifte mangelfull tilstandsgrad",
          "balkong etablert fellesutgifter endring andeler"
        ],
        "reasoning": "\nGjennomgang av alle 19 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Flytende rente og økning i felleskostnader (0.95 → 0.97):**\nEvidensen er svært sterk og direkte. Dokumentene bekrefter flytende rente, varslet økning, budsjettert underskudd på kr 32 585 og konkret forslag om 10% økning fra 01.07.25. Generalforsamlingsprotokollen bekrefter at husleien holdes uendret i 2025 med bruk av oppspart kapital. Confidence justeres opp til 0.97 da alle elementer er godt dokumentert.\n\n**R2 – Underskudd 2024 og reduserte disponible midler (0.95 → 0.95):**\nEvidensen er direkte og tallmessig bekreftet. Underskudd kr 658 619, disponible midler ned fra kr 1 838 124 til kr 1 138 572. Styret bekrefter fortsatt drift. Confidence opprettholdes på 0.95.\n\n**R3 – Høy langsiktig gjeld (0.90 → 0.92):**\nEvidensen er direkte bekreftet med eksakte tall fra balansen. Andel fellesgjeld kr 225 885 er dokumentert. Flytende rente forsterker risikoen. Confidence justeres opp til 0.92.\n\n**R4 – Varmtvannstank over 20 år (0.92 → 0.92):**\nEvidensen er direkte fra tilstandsrapporten. Produksjonsår 2006 bekreftet, alder over 20 år bekreftet, manglende el-tilkobling etter forskrift påpekt. Confidence opprettholdes.\n\n**R5 – Avløpsrør støpejern (0.90 → 0.90):**\nEvidensen er direkte fra tilstandsrapporten. Halvparten av brukstid passert bekreftet. Confidence opprettholdes.\n\n**R6 – Membranløsning bad (0.92 → 0.92):**\nEvidensen er direkte fra tilstandsrapporten med TG2. Ukjent utførelse av smøremembran er en tilleggsrisiko. Confidence opprettholdes.\n\n**R7 – Eldre vinduer (0.88 → 0.88):**\nEvidensen er direkte fra tilstandsrapporten. Vanskelig å lukke ett vindu, fare for punktering bekreftet. Confidence opprettholdes.\n\n**R8 – Ventilasjon bad og kjøkken (0.87 → 0.87):**\nEvidensen er direkte fra tilstandsrapporten. Naturlig ventilasjon, vanskelig å etablere mekanisk løsning, risiko for matos bekreftet. Confidence opprettholdes.\n\n**R9 – El-anlegg begrenset kontrollert (0.85 → 0.83):**\nEvidensen er direkte bekreftet. Manglende samsvarserklæring er dokumentert. Eltilsyn 2025 er godkjent, noe som delvis reduserer risikoen, men samsvarserklæring for nyere arbeid mangler fortsatt. Confidence justeres ned til 0.83.\n\n**R10 – Bygget fra 1893, trebjelkelag (0.85 → 0.85):**\nEvidensen er direkte bekreftet. Byggeår 1893 og trebjelkelag dokumentert. Rapporten er ikke garanti mot skjulte feil. Confidence opprettholdes.\n\n**R11 – Styregodkjennelse (0.88 → 0.88):**\nEvidensen er direkte og juridisk korrekt. Alle elementer bekreftet i dokumentene. Confidence opprettholdes.\n\n**R12 – Legalpanterett (0.85 → 0.85):**\nEvidensen er direkte bekreftet. Legalpant inntil 2G dokumentert. Confidence opprettholdes.\n\n**R13 – Differanse borettsinnskudd (0.78 → 0.72):**\nEvidensen bekrefter differansen (kr 83 430 000 vs kr 78 445 000), men det er ikke avdekket årsak. Differansen kan skyldes korrigeringer (f.eks. korrigert andel 7 i 2011 på kr 2 050 000 er nevnt i note 12). Risikoen er reell men noe usikker i sin praktiske betydning. Confidence justeres ned til 0.72.\n\n**R14 – Pågående byggesaker og plansaker (0.75 → 0.70):**\nEvidensen bekrefter pågående saker i nærområdet, men de fleste er i nabogater og har begrenset direkte påvirkning på denne eiendommen. Kommuneplanen fra 2015 er gammel. Risikoen er reell men lav i praktisk betydning. Confidence justeres ned til 0.70.\n\n**R15 – Gul liste kulturminner (0.75 → 0.68):**\nEvidensen er fragmentert – teksten er avskåret (\"3 treff vedr.\"). Det er uklart hva de tre treffene gjelder utover lokalitet. Risikoen er reell for en bygård fra 1893, men evidensen er utilstrekkelig til å vurdere omfanget. Confidence justeres ned til 0.68.\n\n**R16 – Energikarakter G (0.82 → 0.82):**\nEvidensen er direkte bekreftet. Energikarakter G og strømforbruk ca. 8000 kWh dokumentert. Confidence opprettholdes.\n\n**R17 – Ingen radonmåling (0.72 → 0.65):**\nEvidensen bekrefter manglende radonmåling, men det er ikke krav for denne boligen. Boligen er i 2. etasje (bad er i 2. etasje ifølge tilstandsrapporten), noe som reduserer radonrisikoen betydelig. Confidence justeres ned til 0.65.\n\n**R18 – Solidaransvar for fellesutgifter (0.83 → 0.83):**\nEvidensen er direkte bekreftet. Confidence opprettholdes.\n\n**R19 – Ufagmessig silikonering og manglende fall på bad (0.82 → 0.82):**\nEvidensen er direkte fra tilstandsrapporten. Begge avvik bekreftet. Confidence opprettholdes.\n\n**Manglende risikoer som bør vurderes:**\n1. **IN-lån risiko**: Andelen har individuell nedbetaling av fellesgjeld (IN-lån kr 1 292/mnd). Dersom rentene endres, endres denne betalingen direkte. Dette er en separat risiko fra de generelle felleskostnadene.\n2. **Felles kloakkpumpe**: Det er nevnt en serviceavtale med Oslo Pumpeservice for en felles kloakkpumpe i kjelleren – dette kan indikere risiko for kjelleroversvømmelse ved pumpesvikt.\n3. **Ingen TG3-avvik**: Positivt funn – ingen bygningsdeler er vurdert med TG3, noe som begrenser de mest alvorlige risikoene.\n4. **Boligkjøperforsikring**: Selger har tegnet boligselgerforsikring, noe som gir kjøper en viss beskyttelse.\n\nConfidence for R13 og R15 er justert ned pga. svakere eller ufullstendig evidens. R17 er justert ned pga. lav praktisk relevans for denne boligen. R1 er justert opp pga. ytterligere bekreftet evidens om 10%-økning.\n"
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
    "input_tokens": 24047,
    "output_tokens": 6944,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
