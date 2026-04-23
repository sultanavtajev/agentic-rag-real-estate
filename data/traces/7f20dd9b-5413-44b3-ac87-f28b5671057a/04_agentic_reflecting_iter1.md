# Trace: agentic_reflecting_iter1
- **Run ID:** 7f20dd9b-5413-44b3-ac87-f28b5671057a
- **Tidspunkt:** 2026-03-24T00:28:00.416063+00:00
- **Varighet:** 98.67s
- **Input tokens:** 23337
- **Output tokens:** 5193

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
Risiko 1: TG3 på etasjeskiller – høydeavvik
  Confidence: 0.97
  Evidens: TG 3 er gitt pga høydeavvik på etasjeskiller.; Tilstandsgrad 3, TG3: Store eller alvorlige avvik. Kraftige symptomer på forhold som man må regne med trenger utbedring straks eller innen kort tid. Påvist funksjonssvikt eller sammenbrudd.; Avvik under TG3 skal gis sjablongmessig anslag.

Risiko 2: TG2 på membran/tettesjikt på bad – mer enn halvparten av forventet brukstid er oppbrukt
  Confidence: 0.97
  Evidens: TG 2 er blant annet gitt pga alder på entredør og membran på bad.; Det er avvik: membran/tettesjikt er oppbrukt.; Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.; Dette badet er nå snart 20 år gammelt.; TG 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt.

Risiko 3: TG2 på ventilasjon av bad/kjøkken – avvik fra krav
  Confidence: 0.92
  Evidens: TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken.; Naturlig ventilasjon med tilluft via ventiler gis automatisk behov for godkjenning av styret.

Risiko 4: TG2 på fallforhold på badegulv – avvik fra krav
  Confidence: 0.92
  Evidens: TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken.

Risiko 5: TG2 på entredør – høy alder (antatt fra 1980/90-tallet), anbefalt brukstid overskredet
  Confidence: 0.93
  Evidens: TG 2 er blant annet gitt pga alder på entredør og membran på bad.; Entredør i B30 og dB35 kvalitet. Antatt fra 1980/90 tallet.; Anbefalt brukstid for entredører er på [ikke fullstendig sitert, men TG2 er gitt].

Risiko 6: Hulltaking av våtrom ikke utført – begrenset undersøkelse av fukt bak flater
  Confidence: 0.88
  Evidens: Hulltaking er ikke foretatt da det ikke er fysisk mulig pga tilliggende konstruksjoner er av mur.; Takstmannen har derfor kontrollert med fuktindikator i våtsoner uten at det er registrert fukt i området.; Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler.

Risiko 7: Ingen radonmåling er utført av selger
  Confidence: 0.95
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette.; Spørsmål 21: Er det foretatt radonmåling? – Nei

Risiko 8: Ekspedisjonsdokument i stedet for ferdigattest – bygget er ikke formelt ferdigattestert etter dagens regelverk
  Confidence: 0.88
  Evidens: Ekspedisjonsdokumentet er forgjengeren til ferdigattest. Dokumentet er attestert og bekrefter at bygget er registrert som lovlig oppført.; At ekspedisjonsdokument [foreligger i stedet for ferdigattest].

Risiko 9: Betydelig fellesgjeld og høy rente – andel fellesgjeld kr 371 468 med flytende rente på 5,75 % og 6,20 %
  Confidence: 0.93
  Evidens: Pr. 31/12-2024 er andel av felles gjeld kr. 371 468.; Rentesats: 5,75 % – Restsaldo: 6 393 923,00 – Andel fellesgjeld: 114 042,42; OBOS-banken (lån 3): Rentesatsen pr. 31.12.24 var 6,20 %. Løpetiden er 5 år.; OBOS-banken: Renter 31.12.24: 6,20 % løpetid 20 år; Finanskostnader: Renter og gebyr på lån OBOS-banken (lån 2) -394 678; Finanskostnader 12 -1 056 775

Risiko 10: Risiko for økte felleskostnader ved mislighold eller usolgte aksjer – øvrige aksjeeierne må dekke underskuddet
  Confidence: 0.9
  Evidens: Dersom boligaksjeselskapet ved mislighold, eller dersom boligaksjeselskapet sitter på fraflyttede og/eller usolgte aksjer, må dekkes av de øvrige aksjeeierne.

Risiko 11: Begrenset utleieadgang – krever styregodkjenning, og korttidsutleie er begrenset til 30 døgn per år
  Confidence: 0.92
  Evidens: Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning og under visse [vilkår].; Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.; Styregodkjenning, jf. borettslagsloven § 5-4.

Risiko 12: Pågående plansaker i nærområdet kan påvirke eiendommens omgivelser – bl.a. fremkommelighetstiltak for trikk og fasadeendringer
  Confidence: 0.82
  Evidens: Pågående plansak – Saksnr: 202315257 – Saken gjelder: Vogts gate – Toftes gate – Fremkommelighetstiltak for trikk; Saksnr: 202515903 – Øvrefoss 14 A – rehabilitering av syv piper; Saksnr: 202515903 – Øvrefoss 14 A – bruksendring fra apotek til kafe; Saksnr: 202522008 – Thorvald Meyers gate 7 – forhåndskonferanse, fasadeoppgradering; Sannergata 2 og 4 – bruksendring, tilbygg, fasadeendring og påbygg

Risiko 13: Avløpsrør i støpejern – eldre rørinstallasjon med begrenset gjenværende levetid
  Confidence: 0.8
  Evidens: Avløpsrør/soilrør i støpejern.; Avløpsrør fra kjeller til alle leiligheter ble skiftet i ca 2007 samtidig med våtromsrehabilitering.

Risiko 14: El-tilsyn ikke gjennomgått / dokumentasjon mangler – forretningsfører-opplysninger ikke gjennomgått
  Confidence: 0.78
  Evidens: Foreligger det kontrollrapport fra offentlig myndighet – Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende kontrollinstanser med avvik som ikke er utbedret eller kontrollen er over 5 år?; Forretningsfører nummer, aksjonær og forsikringsselskap – Gjennomgått: Nei

Risiko 15: Hensynssone kvikkleire (H310_1) og steinsprang (H310_2) registrert i kommuneplankartet for området
  Confidence: 0.75
  Evidens: H310_1 - Kvikkleire; H310_2 - Steinsprang

Risiko 16: Stikkledninger for vann og avløp er private fra eiendommen til det kommunale nettet – vedlikeholdsansvar påhviler sameiet
  Confidence: 0.85
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 17: Tegninger ikke gjennomgått – kan innebære avvik mellom faktisk bruk og godkjente tegninger
  Confidence: 0.8
  Evidens: Tegninger – Gjennomgått: Nei; Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk.

Risiko 18: Aksjeboliger har ikke personlig ansvar for selskapets gjeld, men legalpanterett i aksjen for krav på inntil 2G kan benyttes mot kjøper
  Confidence: 0.85
  Evidens: Aksjeeierne har ikke personlig ansvar for [selskapets gjeld].; Aksjeboligselskapet har legalpanterett i aksjen for krav på dekning av felleskostnader og andre krav fra selskapet, på inntil 2 ganger folketrygdens grunnbeløp.; Legalpanteretten følger av borettslagsloven § 5-20, da denne gjelder tilsvarende for boligaksjeselskaper.

Dokumentkontekst:
[d050_d050 | Side [1]]
ftelser
2011/ 666820‑1/ 200 24.08.2011 ** TRANSPORT AV
Tinglyste heftelser og rettigheter: Heftelser i PANTHAVER Selger leverer eiendommen i ryddig og rengjort stand.
Utleie
eiendomsrett: FRA: OBOS EIENDOMSFORVALTNING AS
1939/ 400442‑1/ 105 16.01.1939 ERKLÆRING/ AVTALE LØPENR: 5474756 Adgang til utleie: Det er begrenset adgang til å leie ut
Bestemmelse om kloakkledning TIL: Sannerg 5 AS bolig i boligaksjeselskap. Med styrets godkjenning og
Bestemmelse om septiktank m.v. ORG.NR: 933 120 260 under visse

---

[d050_d050 | Side [1]]
dommen og ut til kjøpekontrakt utarbeidet av Emera i forbindelse med
fasadeendringer Prioritet etter obligasjon til Husbanken, som til enhver tid det kommunale nettet er private, og eiendomstransaksjonen. Kjøpekontrakten kan besiktiges
hviler på eiendommen vedlikeholdsansvaret for disse påhviler sameiet. hos eiendomsmegler før bud inngis. Kontakt
Adkomst til eiendommen skjer via offentlig vei. eiendomsmegler for spørsmål.
Tinglyste heftelser
2011/ 666820‑1/ 200 24.08.2011 ** TRANSPORT AV
Tinglyste

---

[d050_d050 | Side [1]]
rslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: LAK 2
67105220
:ecnerefer
tnemucoD
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/

---

[d050_d050 | Side [1]]
ndardlisten, men som ikke
Ekspedisjonsdokumentet er forgjengeren til ferdigattest. Andre arealer: entré med gode plasseringsmuligheter for finnes på eiendommen, vil heller ikke følge med i salget.
Dokumentet er attestert og bekrefter at bygget er TBA ‑Terrasser og åpen altan som er tilknyttet boligen. oppbevaringsmøbler, samt veggmonterte knagger for Alt utstyr og installasjoner som medfølger overtas slik de
registrert som lovlig oppført. At ekspedisjonsdokument ALH ‑ Areal med lav himlingshøyde måles på

---

[d050_d050 | Side [1]]
everandørgjeld 29 643 116 210
ekstraordinært, har fått sikkerhet ved inntrederett i pantobligasjonen som borettslagets
Påløpte renter 5 646 92 250
långiver har tinglyst på eiendommen. Borettslagets beregnede forpliktelse overfor
Påløpte avdrag 0 48 823
andelseiere som har nedbetalt, fremgår som egenkapital fra IN, under noten for annen
Andel kortsiktig gjeld i fellesanlegg 21 342 998 110 359
egenkapital.
SUM KORTSIKTIG GJELD 378 287 367 642
SUM EGENKAPITAL OG GJELD 3 301 379 2 767 510
NOTE: 2
Pantstillelse

---

[d050_d050 | Side [1]]
 over 30 mm gjennom hele ‑ Skader som en hund måtte forårsake er hundeeiers
44 45

## Side 24

OM EIENDOMMEN OM EIENDOMMEN
1939/ 400443‑1/ 105 16.01.1939 BEST. OM VANN/ Beløp: NOK 11 125 000 styregodkjenning, jf. borettslagsloven § 5‑4.
Regulering
KLOAKKLEDN. Panthaver: OBOS‑BANKEN AS Korttidsutleie er tillatt i opptil 30 døgn per år uten
Regulerings og arealplaner: Eiendommen er regulert til Med flere bestemmelser ORG.NR: 911 986 884 samtykke fra styret.
bolig med tilhørende anlegg iht. S‑2255. Saken

---

[d050_d050 | Side [1]]
tover det som er nevnt tidligere (f.eks. drenering,
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
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel

---

[d050_d050 | Side [1]]
N MED FLERE ELEKTRONISK INNSENDT Aksjeboligmodellen innebærer at aksjeselskapet eier
Pågående plansak eiendommen, mens aksjeeierne eier aksjer i
Saksnr: 202315257 1939/ 401438‑1/ 105 15.02.1939 ERKLÆRING/ AVTALE 2018/ 1394704‑1/ 200 11.10.2018 aksjeselskapet, som gir aksjeeier leierett til en bestemt
Saken gjelder: Vogts gate ‑ Toftes gate ‑ Bestemmelser om felles gårdsplass m.v. PANTEDOKUMENT bolig. Aksjeeierne har ikke personlig ansvar for
Fremkommelighetstiltak for trikk GJELDER DENNE REGISTERENHETEN

---

[d050_d050 | Side [1]]
ende for boligaksjeselskaper, jf.
Øvrefoss 14 A ‑ rehabilitering av syv piper 2000/ 42849‑1/ 105 26.07.2000 OBLIGASJON borettslagsloven § 1‑4.
Vei, vann og avløp
Beløp: NOK 138 700
Saksnr: 202515903 Panthaver: Sannerg 5 AS Eiendommen er tilknyttet offentlig vann‑ og Kjøper og selger er forpliktet til å undertegne standard
Øvrefoss 14 A ‑ bruksendring fra apotek til kafe og ORG.NR: 933 120 260 avløpssystem. Stikkledningene fra eiendommen og ut til kjøpekontrakt utarbeidet av Emera i forbindelse

---

[d050_d050 | Side [1]]
mislighold, eller dersom boligaksjeselskapet
Sannergata 2 og 4 ‑ bruksendring, tilbygg, fasadeendring sitter på fraflyttede og/ eller usolgte aksjer, må dekkes av
og påbygg 1940/ 400178‑1/ 105 10.01.1940 ERKLÆRING/ AVTALE 2023/ 682603‑1/ 200 28.06.2023 de øvrige aksjeeierne.
vedr. varme og varmtvann m.v. PANTEDOKUMENT
Saksnr: 202522008 Beløp: NOK 1 000 000 Aksjeboligselskapet har legalpanterett i aksjen for krav
Thorvald Meyers gate 7 ‑ forhåndskonferanse, 1940/ 401106‑1/ 105 09.02.1940 ERKLÆRING/ AVTALE

---

[d050_d050 | Side [1]]
tykke fra styret.
bolig med tilhørende anlegg iht. S‑2255. Saken gjelder Kan ikke slettes uten samtykke fra kommunen Uomsettelig
reguleringsbestemmelser i tilknytning til endret ELEKTRONISK INNSENDT
Radonmåling
reguleringsplan for Oslo sentrum og indre sone i Oslo 1939/ 401436‑1/ 105 15.02.1939 ERKLÆRING/ AVTALE
kommune. vedr. felles vaskeri‑ og tørreanlegg m.v. 2018/ 310925‑1/ 200 10.01.2018 Selger har ikke utført radonmåling. Det er ikke krav om
GJELDER DENNE REGISTERENHETEN MED FLERE PANTEDOKUMENT dette

---

[d050_d050 | Side [1]]
k/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: LAK 3
54
67105220
:ecnerefer
tnemucoD
55

## Side 29

Tilleggskommentar
Jeg bekrefter at

---

[d050_d050 | Side [1]]
heter.
Befaring Parker og friarealer i nærheten. Gangavstand 琀椀l sentrum.
Adkomstvei
Dato Til stede Rolle
O昀昀entlig.
20.10.2025 Jan Berby Taks琀椀ngeniør
Tilknytning vann
Luna Aino Kulsrud Kunde
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning.
Tilknytning avløp
Matrikkeldata Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀.
Kommune gnr. bnr. fnr. snr. Areal Kilde Eieforhold Om tomten
301 OSLO 228 289 0 1077.2 m² BEREGNET AREAL Eiet Indre gård, felles med naboeiendom, opparbeidet med beplantning, plass for

---

[d050_d050 | Side [1]]
tasje og sokkeletasje)
bruksnummer, eiet/festet tomt, fremgår av 琀椀lstandsgradene. eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom
Norges Eiendommer tomteareal og byggeår oppgi琀琀 ved Gjennomgå琀琀 Nei • Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand og rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
blant annet vurdert ut fra alder og normal bruk slik: Avhendingsloven.
elektronisk grunnbok, Norges
Eiendommer. i)Tilstandsgrad 0, TG0:Ingen avvik

---

[d050_d050 | Side [1]]



Dine fordeler 
− Unngå bekymring og stress 
− Spar verdifull tid
− Få advokatkostnadene dekket

---

[d050_d050 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d050_d050 | Side [1]]
M EGENKAPITAL OG GJELD 3 301 379 2 767 510
NOTE: 2
Pantstillelse 20 26 263 700 26 263 700
INNKREVDE FELLESKOSTNADER
Garantiansvar 21 770 782 457 754
Felleskostnader 3 096 696
Balkonglån 283 584
Oslo, 03.04.2025
Eiendomsskatt 9 508
Styret i AS Sannergaten 5
Kapitalkostnader på IN-lån 730 698
Kapitalkostnader regulert på IN-lån 1 551
Janne Britt Hauge /s/ Camilla Kolderup /s/ Anna Kristine Lund /s/
Overført til kapitalkostnader -732 249
SUM INNKREVDE FELLESKOSTNADER 3 389 788
Bård Stordahl /s/
Vedlegg 2 10

---

[d050_d050 | Side [1]]

UTTRYKK OG DEFINISJONER Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av 
eiendommens verdi.  
 
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller • Rom som ligger utenfor boenheten, men som eier har påvist og/eller  
este琀椀ske status på et gi琀琀 琀椀dspunkt. opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er  
ikke fremvist

---

[d050_d050 | Side [1]]
 finansieringsplan, akseptfrist, overtakelsesdato og
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen kjøper selv dekke kostnader med inntil kr 10 000 (som en eventuelle forbehold som for eksempel usikker
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som egenandel). finansiering, salg av nåværende bolig ol. Normalt vil ikke
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper

---

[d050_d050 | Side [1]]
 frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.
129

## Side 66

7.
 Fra hvilepuls
8.
 til

---

[d050_d050 | Side [1]]
r i seg selv E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
være et symptom som kan gi TG2. For synlige konstruksjoner kan alder 琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
sammen med andre symptomer og momenter gi TG2. Avvik under TG2
Versjon Ny versjon Kommentar
kan gis sjablongmessig anslag.
BEFARINGEN
1 04.12.2025 iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som
på forhold som man må regne

---

[d050_d050 | Side [1]]
t var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje TILSTANDSGRAD 0, TG0: INGEN AVVIK
e琀琀er normal bruk regnes ikke som avvik.
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
Hva inneholder 琀椀lstandsrapporten?
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og

---

[d050_d050 | Side [1]]
nndelt i TG2
som krever 琀椀ltak og de som ikke krever umiddelbare 琀椀ltak.
Konstruksjonen har normalt enten feil u琀昀ørelse, en skade eller
Revisjoner symptomer på skade, sterk slitasje eller nedsa琀琀 funksjon. Vedlikehold
TILLEGGSUNDERSØKELSER
eller 琀椀ltak trengs i nær frem琀椀d, det er grunn 琀椀l å varsle fare for skader
på grunn av alder eller overvåke spesielt på grunn av fare for større
skade eller følgeskade. For skjulte konstruksjoner vil alder i seg selv E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også

---

[d050_d050 | Side [1]]
unnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen. utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger

---

[d050_d050 | Side [1]]
ing av byggverk og bygningsdeler som
på forhold som man må regne med trenger utbedring straks eller innen bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
kort 琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen garan琀椀 for at det ikke kan
For gyldighet på rapporten se forside
gis sjablongmessig anslag. 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra

---

[d050_d050 | Side [1]]
else av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få TG2 eller TG3
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er uten at det nødvendigvis er krav om at avviket må utbedres. De琀琀e kan IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE
forbedret.
gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som gjelder Det kan være avvik/skader som ikke er avdekket.
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
Informasjon om

---

[d050_d050 | Side [1]]
jøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk. TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du

---

[d050_d050 | Side [1]]
AD 1, TG1: MINDRE AVVIK
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller

---

[d050_d050 | Side [1]]
dning fra 2014 og framstår i dag som en lys og pent
vedlikeholdt leilighet.
Tilstandsanalysen har avdekket noen symptomer svikt og avvik
fra normal standard. Det er gjennomgående registrert TG 1 og
0
TG 2, samt en TG 3. TG 2 er blant annet gi琀琀 pga alder på
entredør og membran på bad. I 琀椀llegg er TG 2 gi琀琀 pga fallforhold
på badegulv og ven琀椀lasjon av bad/kjøkken. TG 3 er gi琀琀 pga
høydeavvik på etasjeskiller.
Arealer Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Gå 琀椀l side
Forutsetninger og vedlegg Gå

---

[d050_d050 | Side [1]]
v.
Tilstandsrapporten beskriver ikke hele boligen
Informasjon om utbedringskostnader Tiltak under kr 20 000
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere • basert på observerte forhold som feil, skader eller
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre •

---

[d050_d050 | Side [1]]
 det vil ikke være mulig å reklamere på forhold
BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor For øvrig gjelder NEF sin standardliste "Oversikt over som er nevnt i rapporten. Spesielt forhold som er vurdert
42 43

## Side 23

OM EIENDOMMEN OM EIENDOMMEN
med TG2 og TG3 bør vurderes nøye, da de indikerer rommet. Tilstandsgrad 3 gis med bakgrunn i ansvar.
Øvrig
avvik fra normal slitasje og/ eller høy alder, noe som kan standardens krav til godkjente
innebære behov for utbedringer. Bygningsdeler som

---

[d050_d050 | Side [1]]
 grunnbok, Norges
Eiendommer. i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg må • Kontroll av romfunksjoner for P-ROM u琀昀øres kun når det ikke
bygningsdelen være 琀椀lnærmet ny, mindre enn 5 år, og det foreligger foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke
Tegninger Gjennomgå琀琀 Nei dokumentasjon på faglig god u琀昀ørelse. stemmer med dagens bruk.
Opplysninger vedrørende husleie, aksje ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke •

---

[d050_d050 | Side [1]]
nr 228 - Bnr 289 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
De琀琀e trenger du å vite om 琀椀lstandsrapporten De琀琀e trenger du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Hva er en 琀椀lstandsrapport? Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller

---

[d050_d050 | Side [1]]
styrets årsberetning for mer
informasjon om u琀昀ørte og planlagte vedlikeholdsarbeider.
Eiendommen er vurdert i den stand den var på
10
besik琀椀gelsesdagen. Kommentarer vedrørende vedlikehold osv.
er anført i den tekniske beskrivelsen i rapporten.
Over昀氀ater og våtrom er vurdert mot hva som må forventes av
standard som følge av bygningens alder.
Leiligheten ligger i 3. etasje og har foruten rehabilitert baderom 5
kjøkkeninnredning fra 2014 og framstår i dag som en lys og pent
vedlikeholdt

---

[d050_d050 | Side [1]]
nset 琀椀l de spørsmål som
fuk琀椀ndikator i våtsoner uten at det er registrert fukt i området. Avløpsrør/soilrør i støpejern. 5. Foreligger det kontrollrapport fra o昀昀entlig myndighet – Det Lokale fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse
El琀椀lsyn (DLE) eller eventuelt andre 琀椀lsvarende kontrollinstanser med spørsmålene i bransjestandarden NS3600. De琀琀e kan ikke sammenlignes
Vurdering av avvik: avvik som ikke er utbedret eller kontrollen er over 5 år? med en fullstendig kontroll

---

[d050_d050 | Side [1]]
kle visuelle observasjoner. Kan vurderes sammen med bruken, uten at de琀琀e vil få betydning for valg av arealkategori. • 
bygningsdelens alder.

• Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012

---

[d050_d050 | Side [1]]
ngssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
Opplysninger vedrørende avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
eiendomsbetegnelser, gårdsnummer, framhever normalt ikke posi琀椀ve sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
bruksnummer, eiet/festet tomt, fremgår av

---

[d050_d050 | Side [1]]
ehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
Når du kjøper en brukt bolig Vurdering mot byggeregler når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
Når du kjøper en brukt bolig, er det vik琀椀g å være oppmerksom på at Den bygningssakkyndige vil vurdere boligen mot hvordan det var vanlig å
de琀琀e ikke kan sammenlignes med å kjøpe en ny bolig. Måten

---

[d050_d050 | Side [1]]
emaskin.
i en bolig som de琀琀e og det vil også lage problemer ved dører ut og inn Smøremembran på vegg som er over 15 år og banemembran over 20 år
av rommet. blir vurdert 琀椀l TG2 i rapporten.
Entredør i B30 og dB35 kvalitet. Anta琀琀 fra 1980/90 tallet.
De琀琀e badet er nå snart 20 år gammelt.
3. ETASJE > BAD/VASKEROM
Vurdering av avvik: TG 2 gis med bakgrunn i at mer enn halvparten av forventet bruks琀椀d for
Radon
• Det er avvik: membran/te琀琀esjikt er oppbrukt. Ven琀椀lasjon
Anbefalt bruks琀椀d for entredører er på

---

[d050_d050 | Side [1]]
ANNERGATA-ØVRE FOSS FELLESREGNSKAP
ORG.NR. 985 080 968, KUNDENR. 5322 ORG.NR. 985 080 968, KUNDENR. 5322
RESULTATREGNSKAP BALANSE
Note Regnskap Regnskap Budsjett Budsjett Note 2024 2023
2 024 2 023 2024 2025 EIENDELER
DRIFTSINNTEKTER:
Innkrevde felleskostnader 2 1 655 652 1 655 652 1 656 000 1 821 600 ANLEGGSMIDLER
Innbetalinger -223 031 68 533 Andre varige driftsmidler 12 228 999 259 532
Andre inntekter 3 264 271 183 365 50 000 50 000 SUM ANLEGGSMIDLER 228 999 259 532
SUM DRIFTSINNTEKTER 1 696 892 1 907

---

[d050_d050 | Side [1]]
er eiendels- og
Nedbetalt tidligere 1 196 102 gjeldssiden, under posten "andel omløpsmidler i fellesanlegg" og andel
Nedbetalt i år 179 961 kortsiktig gjeld i fellesanlegget".
-6 553 620
OBOS-banken (lån 3) Selskapets andel av driftskostnadene i Sannergata Øvre Foss Felles er inntatt i
Lånet er et annuitetslån med flytende rente. resultatregnskapet under posten "kostnader sameie".
Rentesatsen pr. 31.12.24 var 6,20 %. Løpetiden er 5 år.
Opprinnelig 2023 -500 000 Til orientering vedlegges sameiets

---

[d050_d050 | Side [1]]
irkelunden eller Olaf Ryes Plass. Her er det ‑ El‑motorsykler og el‑mopeder: kr 1.045 per år
Andre kostnader:
Rentesats: 5,75% alt fra gressplener, fontener, uteserveringer, konserter og
Restsaldo: 6 393 923,00 Andre utgifter: I tillegg til felleskostnader påløper hyggelige kafeer. Videre er det kort gåavstand fra Det tas forbehold om endringer i prisene. For oppdatert
Andel fellesgjeld: 114 042,42 kostnader til for eksempel strøm, innboforsikring, diverse leiligheten til Akerselva med sine koselige

---

[d050_d050 | Side [1]]
orar 6 -7 910 -9 416 -12 000 -12 000
Forretningsførerhonorar -94 753 -90 108 -95 000 -100 000
Konsulenthonorar 7 -19 942 -16 850 -10 000 -10 000
Drift og vedlikehold 8 -102 796 -362 696 -210 000 -210 000
Forsikringer -200 519 -174 465 -191 000 -225 000
Kommunale avgifter 9 -477 780 -424 227 -465 000 -523 000
Kostnader sameie 21 -727 073 -811 531 -737 000 -737 000
Energi/fyring -26 491 -29 096 -30 000 -30 000
TV-anlegg/bredbånd -143 280 -397 295 -200 000 -208 000
Andre driftskostnader 10 -137 371 -145 516

---

[d050_d050 | Side [1]]
oten om drift og vedlikehold.
Drift/vedlikehold vaskerianlegg -4 473
Egenandel forsikring -12 000 NOTE: 14
SUM DRIFT OG VEDLIKEHOLD -102 796 ANDRE KORTSIKTIGE FORDRINGER
Avregningskonto(IN-lån) 2 483
Styret mener at det gjennomførte vedlikeholdet er tilstrekkelig for å oppveie verdiforringelse av SE Sannergata Øvre Foss Felles, avregning 2024 99 248
bygningene. SE Sannergata Øvre Foss Felles, avregning 2023 -30 498
SE Sannergata Øvre Foss Felles, avregning 2022 123 837
NOTE: 9 SUM ANDRE KORTSIKTIGE

---

[d050_d050 | Side [1]]
år.
Opprinnelig 2023 -500 000 Til orientering vedlegges sameiets regnskap.
Nedbetalt tidligere 0
Nedbetalt i år 99 447
-400 553
OBOS-banken
Renter 31.12.24: 6,20 % løpetid 20 år
Opprinnelig, 2017 -9 747 759
Nedbetalt tidligere, ordinære avdrag 2 431 415
Vedlegg 2 14 av 24 Årsregnskap 2024 - Sannergaten 5 AS.pdf Vedlegg 2 15 av 24 Årsregnskap 2024 - Sannergaten 5 AS.pdf
108 109

## Side 56

SAMEIET SANNERGATA-ØVRE FOSS FELLESREGNSKAP SAMEIET SANNERGATA-ØVRE FOSS FELLESREGNSKAP
ORG.NR. 985 080 968, KUNDENR.

---

[d050_d050 | Side [1]]
KTER
Renter av driftskonto i OBOS-banken 2 576
NOTE: 5 Renter av sparekonto i OBOS-banken 1
STYREHONORAR Andel renteinntekter, SE Sannergata Øvre Foss Felles 557
Honorar til styret gjelder for perioden 2023/2024, og er på kr 100 000. SUM FINANSINNTEKTER 3 134
I tillegg har styret fått dekket bevertning for kr 4 176, jf. noten om andre driftskostnader.
NOTE: 12
NOTE: 6 FINANSKOSTNADER
REVISJONSHONORAR Renter og gebyr på lån OBOS-banken(lån 2) -394 678
Revisjonshonoraret er i sin helhet knyttet til revisjon

---

[d050_d050 | Side [1]]
REGNSKAP
Note Regnskap Regnskap Budsjett Budsjett
2024 2023 2024 2025
DRIFTSINNTEKTER:
Kapitalkostnader 732 249 709 256 717 648 732 180
Innkrevde felleskostnader 2 3 389 788 2 823 404 3 380 352 3 379 820
Andre inntekter 3 190 234 212 884 190 000 190 000
SUM DRIFTSINNTEKTER 4 312 271 3 745 544 4 288 000 4 302 000
DRIFTSKOSTNADER:
Personalkostnader 4 -14 100 -14 100 -14 100 -14 000
Styrehonorar 5 -100 000 -100 000 -100 000 -100 000
Revisjonshonorar 6 -7 910 -9 416 -12 000 -12 000
Forretningsførerhonorar -94

---

[d050_d050 | Side [1]]
, felles med naboeiendom, opparbeidet med beplantning, plass for si琀琀egruppe og hellelagte gangarealer.
(Ambita)
Boligopplysninger
Adresse
Totale fellesutgi昀琀er er for 琀椀den kr. 6 636.- pr. mnd. Beløpet fordeles med felleskostnader kr 4 602.-, balkonglån kr 844.-, a konto renter kr 577.-
Sannergata 5 B
og a konto avdrag kr 613.-. Felleskostnader inkluderer felles forsikring, o昀昀entlige avgi昀琀er, kabel-tv/bredbånd og vaktmestertjeneste.
Hjemmelshaver Pr. 31/12-2024 er andel av felles gjeld kr. 371 468.- og

---

[d050_d050 | Side [1]]
tap 0 0
SUM EGENKAPITAL 0 0
DRIFTSRESULTAT -1 252 520 20 860 177 200
GJELD
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 11 1 252 918 0 0 KORTSIKTIG GJELD
Finanskostnader 0 -1 438 0 0 Leverandørgjeld 337 995 247 999
RES. FINANSINNT./-KOSTNADER 1 252 -520 0 0 Annen kortsiktig gjeld 13 432 786 209 755
SUM KORTSIKTIG GJELD 770 782 457 754
ÅRSRESULTAT 0 0 20 860 177 200
SUM EGENKAPITAL OG GJELD 770 782 457 754
Pantstillelse 0 0
Garantiansvar 0 0
Oslo, 03.04.2025
Styret i Sameiet Sannergata-Øvre Foss

---

[d050_d050 | Side [1]]
NKREVDE FELLESKOSTNADER 3 389 788
Bård Stordahl /s/
Vedlegg 2 10 av 24 Årsregnskap 2024 - Sannergaten 5 AS.pdf Vedlegg 2 11 av 24 Årsregnskap 2024 - Sannergaten 5 AS.pdf
104 105

## Side 54

NOTE: 3 NOTE: 10
ANDRE INNTEKTER ANDRE DRIFTSKOSTNADER
Leie av plass til basestasjon 190 234 Skadedyrarbeid/soppkontroll -21 085
SUM ANDRE INNTEKTER 190 234 Renhold ved firmaer -98 310
Andre fremmede tjenester -11 317
NOTE: 4 Andre kostnader tillitsvalgte -4 176
PERSONALKOSTNADER Andre kontorkostnader

---

[d050_d050 | Side [1]]
 og føres
Annen langsiktig gjeld 19 138 700 138 700
via balansen som egenkapital. Individuelle nedbetalinger fra andelseierne går direkte
SUM LANGSIKTIG GJELD 16 801 605 17 484 995
videre til borettslagets långiver via en klientkonto, og påvirker ikke borettslagets likviditet.
Nedbetalingene gir de andelseiere som har nedbetalt, reduksjon i rente- og
KORTSIKTIG GJELD
avdragsdelen av fremtidige felleskostnader. Andelseierne som har nedbetalt
Leverandørgjeld 29 643 116 210
ekstraordinært, har fått sikkerhet

---

[d050_d050 | Side [1]]
dding -23 555
Andre fremmede tjenester -1 000
Bank- og kortgebyr -2 070
Velferdskostnader -3 801
SUM ANDRE DRIFTSKOSTNADER -252 326
NOTE: 11
FINANSINNTEKTER
Renter bank 1 252
SUM FINANSINNTEKTER 1 252
NOTE: 12
VARIGE DRIFTSMIDLER
Miljøstasjon
Tilgang 2022 305 332
Avskrevet tidligere -45 800
Avskrevet i år -30 533
228 999
SUM VARIGE DRIFTSMIDLER 228 999
SUM ÅRETS AVSKRIVNINGER -30 533
Vedlegg 3 20 av 24Årsregnskap 2024 - SannergataØvreFoss Fellesregnskap.pdf Vedlegg 3 21 av 24Årsregnskap 2024 -

---

[d050_d050 | Side [1]]
oss Felles, avregning 2022 123 837
NOTE: 9 SUM ANDRE KORTSIKTIGE FORDRINGER 195 070
KOMMUNALE AVGIFTER
Eiendomsskatt -9 510 NOTE: 15
Vann- og avløpsavgift -284 052 AKSJEKAPITAL
Feieavgift -272 Aksjekapitalen er på kr 100 800 fordelt på 63 aksjer à kr 1600.
Renovasjonsavgift -183 946 Styremedlemmer som også er leieboere eier aksjer på lik linje med øvrige beboere.
SUM KOMMUNALE AVGIFTER -477 780
Vedlegg 2 12 av 24 Årsregnskap 2024 - Sannergaten 5 AS.pdf Vedlegg 2 13 av 24 Årsregnskap 2024 - Sannergaten 5

---

[d050_d050 | Side [1]]
s fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 1 655 652
SUM INNKREVDE FELLESKOSTNADER 1 655 652
NOTE: 3
ANDRE INNTEKTER
AS Sannergaten 5, ekstra kapitalinnkreving 89 000
AS Øvre Foss 6, ekstra kapitalinnkreving 46 600
Øvre Foss 8 AS, ekstra kapitalinnkreving 64 400
Øvre Foss 10 AS, andel uteområdet 2024 64 271
SUM ANDRE INNTEKTER 264 271
NOTE: 4
PERSONALKOSTNADER
Arbeidsgiveravgift -5 640
SUM PERSONALKOSTNADER -5 640
Det har verken vært ansatte eller lønnsutbetalinger i selskapet gjennom året.

---

[d050_d050 | Side [1]]
295 -200 000 -208 000
Andre driftskostnader 10 -137 371 -145 516 -153 000 -160 000
SUM DRIFTSKOSTNADER -2 052 016 -2 575 299 -2 217 100 -2 329 000
DRIFTSRESULTAT FØR IN: 2 260 255 1 170 245 2 070 900 1 973 000
Innbetalt andel fellesgjeld 0 279 179 0 0
DRIFTSRESULTAT 2 260 255 1 449 424 2 070 900 1 973 000
FINANSINNTEKTER/-KOSTNADER:
Finansinntekter 11 3 134 1 274 0 0
Finanskostnader 12 -1 056 775 -932 073 -1 033 000 -1 015 000
RES. FINANSINNT./-KOSTNADER -1 053 641 -930 800 -1 033 000 -1 015

---

[d050_d050 | Side [1]]
åndskonferanse, 1940/ 401106‑1/ 105 09.02.1940 ERKLÆRING/ AVTALE Panthaver: OBOS‑BANKEN AS på dekning av felleskostnader og andre krav fra
fasadeoppgradering Bestemmelse om anlegg og vedlikehold av ledningerm.v. ORG.NR: 911 986 884 selskapet, på inntil 2 ganger folketrygdens grunnbeløp.
Kan ikke slettes uten samtykke fra kommunen ELEKTRONISK INNSENDT Legalpanteretten følger av borettslagsloven § 5‑20, da
Saksnr: 202510729 denne gjelder tilsvarende for boligaksjeselskaper, jf.
Øvrefoss 14 A ‑ rehabilitering

---

[d050_d050 | Side [1]]
IVIDUELL NEDBETALING AV FELLESGJELD
Borettslaget har etablert en ordning med mulighet for individuell nedbetaling av
GJELD
borettslagets fellesgjeld. Individuelle nedbetalinger fra andelseierne er behandlet etter
LANGSIKTIG GJELD
egenkapitalløsningen. Egenkapitalløsningen innebærer at individuelle nedbetalinger fra
Pante- og gjeldsbrevlån 18 16 662 905 17 346 295
andelseiernes side inntektføres i selskapet det året nedbetalingen finner sted, og føres
Annen langsiktig gjeld 19 138 700 138 700
via balansen

---

[d050_d050 | Side [1]]
.
PlottID/Best.nr: 150306/86522979
Deres ref.: Reguleringsplaner vedtatt etter 17.09.2014 og til 23.09.2015 vil gjelde foran kommuneplanen ved motstrid.
Reguleringsplaner vedtatt etter kommuneplanen vil gjelde foran kommuneplanen ved motstrid.
Se tegnforklaring på eget ark.
123

## Side 63

Nabolagsprofil
Tegnforklaring - kommuneplan
Farled Bebyggelse og anlegg, eksisterende
Sannergata 5B - Nabolaget Paulus' plass/Øvrefoss - vurdert av 118 lokalkjente
Fjernveg (tunnel) Bebyggelse og anlegg,

---

[d050_d050 | Side [1]]
km
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende kollektivknutepunkt Naturområde
Friluftsområde Skoler
Fremtidig kollektivknutepunkt
Ytre by (utviklingsområder)
Spredt boligbebyggelse Grünerløkka skole (1-7 kl.) 5 min
Indre by (utviklingsområder)
538 elever, 22 klasser 0.4 km
Bestemmelsesgrense
H570 - Bevaring kulturmiljø
Aktivitetssone marka Sagene skole (1-10 kl.) 6 min
H710 - Båndlegging for regulering etter pbl. 517 elever, 27 klasser 0.5 km
H810_1 - Krav om felles planlegging

---

[d050_d050 | Side [1]]
rdert av 118 lokalkjente
Fjernveg (tunnel) Bebyggelse og anlegg, fremtidig
Fjernveg Bane, eksisterende
Nabolaget spesielt anbefalt for
Opplevd trygghet
Markagrense Havn, eksisterende
Studenter Veldig trygt 82/100
Plangrense Havn, fremtidig
Enslige
Kvalitet på skolene
Sporveg (tunnel), fremtig Kollektivknutepunkt, fremtidig
Etablerere
Veldig bra 77/100
Sporveg (tunnel), eksisterende Grønnstruktur, eksisterende
Sporveg, eksisterende Grønnstruktur, fremtidig Naboskapet
Sporveg, fremtidig Forsvaret Offentlig

---

[d050_d050 | Side [1]]
tur, fremtidig Naboskapet
Sporveg, fremtidig Forsvaret Offentlig transport Høflige 62/100
Jernbane (tunnel), fremtidig LNF-areal, eksisterende
Sannergata 1 min
Jernbane (tunnel), eksisterende LNF-areal, fremtidig
Linje FB5A, FB5B, 21 0.1 km
Aldersfordeling
Jernbane, eksisterende Spredt boligbebyggelse, eksisterende
Birkelunden 4 min
Turvei Spredt boligbebyggelse, fremtidig Linje 11, 12, 18 0.3 km
Ny T-bane-/jernbanestasjon (ikke juridisk) Spredt fritidsbebyggelse, eksisterende Carl Berners plass 18

---

[d050_d050 | Side [1]]
gelse ut fra terrenghøydene slik de var da
reguleringsplanen ble vedtatt. Det nye sammenstilte
Dato: 28.11.2025 – Kartutsnittet gjelder vertikalnivå 2 (dvs. på bakkenivå). reguleringsplankartet viser dagens terreng- og tomtesituasjon.
– Gjeldende kommunedelplaner: KDP-17, KDP-4 Planens originale vedtakskart er tilgjengelig i Saksinnsyn.
Bruker: FME
– Naturmangfold innenfor kartutsnittet. Se eget kart.
Målestokk 1:1000 – Kartet er sammenstilt for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget

---

[d050_d050 | Side [1]]
t for: . Kan ikke brukes til byggesak. Se tegnforklaring på eget ark
Ekvidistanse 1m
Koord.system: EUREF89 - UTM sone 32 PlottID/Best.nr: 150306/ 86522979 Deres ref.:
Høydereferanser Adresse: Sannergata 5
- Reguleringsplan: Se reg.best. Kommentar:
- Bakgrunnskart: NN2000
Originalformat: A3 Gnr/Bnr: 228/289
121

## Side 62

TEGNFORKLARING - REGULERING (for gjeldende kartutsnitt)
122
0005466
0074466
0044466
6645000
6644700
6644400
597900 598200 598500
597900 598200 598500
© Plan- og bygningsetaten, Oslo

---

[d050_d050 | Side [1]]
8200 598500
597900 598200 598500
© Plan- og bygningsetaten, Oslo kommune
Kommuneplanen 2015–2030
Vedtatt av bystyret 23.09.2015, sak 262
Dato: 28.11.2025 Kartet viser utsnitt av «Plankart 1-2 Arealbruk» og «Plankart 2-2 Hensynssoner». For øvrige juridisk bindende
kart, se Planinnsyn - https://od2.pbe.oslo.kommune.no/kart/?mode=kommuneplan
Målestokk 1:3000
Koordinatsystem: EUREF89 - UTM sone 32 Blå ramme viser utsnittet for de øvrige plottene.
PlottID/Best.nr: 150306/86522979
Deres ref.: Reguleringsplaner

---

[d050_d050 | Side [1]]
sk) Spredt fritidsbebyggelse, eksisterende Carl Berners plass 18 min
T-banestasjon (ikke juridisk) Spredt fritidsbebyggelse, fremtidig Linje 5 1.4 km
Jernbanestasjon (ikke juridisk) Bruk og vern av sjø og vassdrag med tilhørende strandsone Carl Berners plass 18 min
T-bane, buss, trikk 1.4 km
Banetrase (ikke juridisk) Farled
Fjordtrikk (ikke juridisk) Småbåthavn, eksisterende Oslo S/Bussterminal 7 min
T-bane, buss, flytog, tog, trikk 2.3 km
Samferdsel (ikke juridisk) Småbåthavn, fremtidig
Eksisterende

---

[d050_d050 | Side [1]]
17 elever, 27 klasser 0.5 km
H810_1 - Krav om felles planlegging (områderegulering)
Ila skole (1-7 kl.) 11 min
H810 _2 - Krav om felles planlegging 550 elever, 28 klasser 0.9 km
H820_1 - Omforming (kabling og høystentledninger) Sofienberg skole (8-10 kl.) 15 min
429 elever, 30 klasser 1.2 km
H820_2 - Omforming (trafostasjoner)
H110 - Nedlagsfelt drikkevann Bentsebrua skole (8-10 kl.) 16 min
104 elever, 8 klasser 1.4 km
H190 - Andre sikringssoner
Foss videregående skole 3 min
H310_1 - Kvikkleire
600 elever,

---

[d050_d050 | Side [1]]
et på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2025
125

## Side 64

Primære transportmidler Varer/Tjenester
Kiellands Hus 5 min
1. Trikk
Apotek 1 Ringnes Park Senter 2 min
2. Buss
3. Gående
Aldersfordeling barn (0-18 år)
Kollektivtilbud 44% i barnehagealder
34% 6-12 år
Veldig bra 94/100
9% 13-15 år
14% 16-18 år
Matvareutvalg
Stort mangfold 88/100
Shoppingutvalg
Meget bra

---

[d050_d050 | Side [1]]
 år
Matvareutvalg
Stort mangfold 88/100
Shoppingutvalg
Meget bra 87/100
Familiesammensetning
Par m. barn
Sport
Sagene skole 3 min
Par u. barn
Aktivitetshall, ballspill, squash 0.2 km
Øvre Foss kunstgressbane 3 min
Enslig m. barn
Fotball 0.2 km
SATS Ringnes Park 3 min
Enslig u. barn
SATS Ila 3 min
Flerfamilier
Boligmasse
0% 58%
100% blokk
Paulus' plass/Øvrefoss
Oslo og omegn
Norge
Sivilstand
Norge
Gift 12% 33%
«Sentralt og urbant»
Ikke gift 80% 54%
Sitat fra en lokalkjent
Separert 8% 9%
Enke/Enkemann 1%

---

[d050_d050 | Side [1]]
琀椀lstandsrapporten. Når arealet måles tas det ikke hensyn 琀椀l om arealet
www.takstklagenemnd.no for mer informasjon
er lovlig oppført eller om bruken er lovlig, bruksendringer, lysforhold
eller andre sikkerhetsmangler.
Oppdragsnr.: 15467-2918 Befaringsdato: 20.10.2025 Side: 17 av 17
74 75

## Side 39

 
 
       

---

[d050_d050 | Side [1]]
k i nærområdet i form av
Tomt
Type Rente: Flytende rente Info om formuesverdi: Skatteetaten beregner en trikk og buss. Trikkeholdeplass like ved for trikk nr. 11, 12
Terminer i året 12 boligverdi (beregnet markedsverdi for bolig) basert på og 18, og busser bl.a. fra Ringnes park (nr. 30, 20, 21 og Tomtetype: Eiet
IN‑avtale: Nei SSBs statistiske opplysninger om omsatte boliger. I 33) i nærheten. Ca. 10 minutters gange til T‑banestopp på
beregningen tas det hensyn til din boligs beliggenhet, Carl Berner.

---

[d050_d050 | Side [1]]
n: Joakim Selsvold-Stensson /s/
Navn: Marie Saxeide /s/
(cid:11) Transaksjon 09222115557547100539 Signert TW2, JS, MS
120
0084466
0074466
0064466
0084466
0074466
0064466
598100 598200 598300
598100 598200 598300
*=regulert kotehøyde med Oslo lokal som høydereferanse. Ved prosjektering legges 37 cm til denne kotehøyden. © Plan- og bygningsetaten, Oslo kommune
Reguleringskart
Opprinnelig reguleringsplan gir rammer for høyder på planlagt
bebyggelse ut fra terrenghøydene slik de var da
reguleringsplanen ble

---

[d050_d050 | Side [1]]
om fredelige
Type eiendom
omgivelser og det urbane livet. Det er beboerparkering tilgjengelig i området. Med
beboerparkeringstillatelse kan man parkere hele døgnet, Eieform: Aksje
Sikringsordning
I umiddelbar nærhet finner du alt du trenger i hverdagen. også utover eventuell maksparkeringstid, på plasser
Borettslaget har en avtale med OBOS Factoring om Nærbutikker som Meny Ringnes Park i nabobygget, Kiwi, reservert for beboere. Objektstype: Aksjeleilighet
garantert betaling av felleskostnader. OBOS

---

[d050_d050 | Side [1]]
 80% 54%
Sitat fra en lokalkjent
Separert 8% 9%
Enke/Enkemann 1% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no

---

[d050_d050 | Side [1]]
vrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av og 2023) og veiledningen 琀椀l disse.

et byggverk fortsa琀琀 vil være tjenlig for si琀琀 formål (NS3600, Termer og
de昀椀nisjoner punkt 3.9) •

---

[d050_d050 | Side [1]]
er
Foss videregående skole 3 min
H310_1 - Kvikkleire
600 elever, 20 klasser 0.2 km
H310_2 - Steinsprang
Elvebakken videregående skole 14 min
H320_1 - Stormflo
576 elever 1.2 km
H320_2 - Elveflom
H390 - Deponi
124
% 5.8 % 7.41 % 5.41 % 5.2 % 5.6 % 2.7
%
05
% 6.52 %
2.12
%
3.43
% 3.93 % 9.83
% 8.4 % 1.41
%
3.81
Barn Ungdom Unge voksne Voksne Eldre
(0-12 år) (13-18 år) (19-34 år) (35-64 år) (over 65 år)
Område Personer Husholdninger
Paulus' plass/Øvrefoss 1 171 737
Oslo og omegn 999 185 490 708
Norge 5 425

---

[d050_d050 | Side [1]]
nge har du eid boligen?
Antall år 5
Antall måneder 3
Har du bodd i boligen siste 12 måneder?
Nei Ja
I hvilket forsikringsselskap har du tegnet villa/husforsikring?
Forsikringsselskap IF
Polise/avtalenr.
Spørsmål for alle typer eiendommer
1 Kjenner du til om det er/har vært feil tilknyttet våtrommene, f.eks. sprekker, lekkasje, råte, lukt eller soppskader?
Nei Ja
Initialer selger: LAK 1
67105220
:ecnerefer
tnemucoD
53

## Side 28

2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du

---

[d050_d050 | Side [1]]
gså i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til

---

[d050_d050 | Side [1]]
rag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til

---

[d050_d050 | Side [1]]
r av energiattesten.
gis med bakgrunn i at mer enn halvparten av forventet
brukstid for membran/ tettesjikt er oppbrukt. Se vedlagte tilstandsrapport for ytterligere informasjon Polisenummer fellesforsikring: 6603683
Oppvarming
om eiendommen.
Våtrom > 3. etasje > Bad/ vaskerom > Ventilasjon Husdyr: Hund og katt er godtatt i borettslaget (det er ikke Leiligheten er oppvarmet med radiatorer tilknyttet sentral
Naturlig ventilasjon med tilluft via ventiler gis automatisk behov for godkjenning av styret).

---

[d050_d050 | Side [1]]
 vedlikehold.   
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller • I en overgangsperiode skal rapporter som beny琀琀es i 
visuelle observasjoner. boligomsetningen eller dersom det er en del av oppdraget også opplyse • 
om fordelingen mellom P-ROM og S-ROM med utgangspunkt i
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende de昀椀nisjonene som fremkommer av veiledningen 琀椀l Norsk Standard •

---

[d050_d050 | Side [1]]
 BRA. Vær oppmerksom på at NS 3940:2023 og eierseksjonsloven har  
ulik de昀椀nisjon av fellesareal. Ved arealmåling gjelder NS 3940:2023 som
 
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak de昀椀nerer fellesareal slik: “Delen av bygning som brukes av to eller 昀氀ere   
råte, sopp og skadedyr. bruksenheter eller 琀椀l bygningens forvaltning, dri昀琀 eller vedlikehold.   
• Fuktsøk: Over昀氀atesøk med

---

[d050_d050 | Side [1]]
 som er spesialiserte på Forsikringspremien trekkes i oppgjøret. 4.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter 
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300 
og eventuelle idømte

---

[d050_d050 | Side [1]]
OSLO Takstmann Jan Berby MNTF
Gnr 228 - Bnr 289 Pb. 80 Tåsen Gnr 228 - Bnr 289 Pb. 80 Tåsen
0301 OSLO 0801 OSLO 0301 OSLO 0801 OSLO
Tilstandsrapport Tilstandsrapport
Hulltaking er ikke foreta琀琀 da det ikke er fysisk mulig pga 琀椀lliggende Avløpsrør fra kjeller 琀椀l alle leiligheter ble ski昀琀et i ca 2007 sam琀椀dig med Nei
konstruksjoner er av mur. Takstmannen har derfor kontrollert med våtromsrehabilitering. De琀琀e er en forenklet kontroll begrenset 琀椀l de spørsmål som
fuk琀椀ndikator i våtsoner uten at det er

---

[d050_d050 | Side [1]]
til om det er utført arbeid på bad/våtrom?
Svar Nei
3 Kjenner du til om det er/har vært tilbakeslag av avløpsvann i sluk eller lignende?
Nei Ja
4 Kjenner du til feil eller om har vært utført arbeid/kontroll på vann/avløp?
Svar Nei
5 Kjenner du til om det er/har vært problemer med drenering, fuktinnsig, øvrig fukt eller fuktmerker i underetasje/kjeller?
Nei Ja
6 Kjenner du til om det er/har vært utettheter i terrasse/garasje/tak/fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med

---

[d050_d050 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har

---

[d050_d050 | Side [1]]
fasade?
Nei Ja
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på

---

[d050_d050 | Side [1]]
dsgrad 1, TG1:Mindre avvik. Normal slitasje. Straks琀椀ltak ikke • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold
nødvendig. TG1 kan gis når bygningsdelen er 琀椀lnærmet ny og det ikke og elektriske installasjoner i boligen dersom det er mer enn fem år
Forretningsfører nummer, aksjonær og forsikringsselskap Gjennomgå琀琀 Nei
foreligger dokumentasjon på faglig god u琀昀ørelse. siden sist boligen hadde el-琀椀lsyn. Bygningssakkyndig kan anbefale å
oppgi琀琀 av forretningsfører.
konsultere

---

[d050_d050 | Side [1]]
og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge

---

[d050_d050 | Side [1]]
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

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "TG3 på etasjeskiller – høydeavvik",
      "evidence": [
        "TG 3 er gitt pga høydeavvik på etasjeskiller.",
        "Tilstandsgrad 3, TG3: Store eller alvorlige avvik. Kraftige symptomer på forhold som man må regne med trenger utbedring straks eller innen kort tid. Påvist funksjonssvikt eller sammenbrudd.",
        "Avvik under TG3 skal gis sjablongmessig anslag.",
        "Det er gjennomgående registrert TG 1 og TG 2, samt en TG 3."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "TG2 på membran/tettesjikt på bad – mer enn halvparten av forventet brukstid er oppbrukt",
      "evidence": [
        "TG 2 er blant annet gitt pga alder på entredør og membran på bad.",
        "Det er avvik: membran/tettesjikt er oppbrukt.",
        "Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.",
        "Dette badet er nå snart 20 år gammelt.",
        "TG 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R03",
      "description": "TG2 på ventilasjon av bad/kjøkken – naturlig ventilasjon med tilluft via ventiler krever godkjenning av styret",
      "evidence": [
        "TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken.",
        "Naturlig ventilasjon med tilluft via ventiler gis automatisk behov for godkjenning av styret."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R04",
      "description": "TG2 på fallforhold på badegulv – avvik fra krav",
      "evidence": [
        "TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R05",
      "description": "TG2 på entredør – høy alder (antatt fra 1980/90-tallet), anbefalt brukstid trolig overskredet",
      "evidence": [
        "TG 2 er blant annet gitt pga alder på entredør og membran på bad.",
        "Entredør i B30 og dB35 kvalitet. Antatt fra 1980/90 tallet."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R06",
      "description": "Hulltaking av våtrom ikke utført – begrenset undersøkelse av fukt bak flater grunnet murkonstruksjoner",
      "evidence": [
        "Hulltaking er ikke foretatt da det ikke er fysisk mulig pga tilliggende konstruksjoner er av mur.",
        "Takstmannen har derfor kontrollert med fuktindikator i våtsoner uten at det er registrert fukt i området.",
        "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R07",
      "description": "Ingen radonmåling er utført av selger",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette.",
        "Spørsmål 21: Er det foretatt radonmåling? – Nei"
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R08",
      "description": "Ekspedisjonsdokument i stedet for ferdigattest – bygget er ikke formelt ferdigattestert etter dagens regelverk",
      "evidence": [
        "Ekspedisjonsdokumentet er forgjengeren til ferdigattest. Dokumentet er attestert og bekrefter at bygget er registrert som lovlig oppført.",
        "At ekspedisjonsdokument foreligger i stedet for ferdigattest."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R09",
      "description": "Betydelig fellesgjeld og høy rente – andel fellesgjeld kr 371 468 med flytende rente på 5,75 % og 6,20 %",
      "evidence": [
        "Pr. 31/12-2024 er andel av felles gjeld kr. 371 468.",
        "Rentesats: 5,75 % – Restsaldo: 6 393 923,00 – Andel fellesgjeld: 114 042,42",
        "OBOS-banken (lån 3): Rentesatsen pr. 31.12.24 var 6,20 %. Løpetiden er 5 år.",
        "OBOS-banken: Renter 31.12.24: 6,20 % løpetid 20 år",
        "Finanskostnader: Renter og gebyr på lån OBOS-banken (lån 2) -394 678",
        "Finanskostnader 12 -1 056 775"
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R10",
      "description": "Risiko for økte felleskostnader ved mislighold eller usolgte aksjer – øvrige aksjeeiere må dekke underskuddet",
      "evidence": [
        "Dersom boligaksjeselskapet ved mislighold, eller dersom boligaksjeselskapet sitter på fraflyttede og/eller usolgte aksjer, må dekkes av de øvrige aksjeeierne."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Begrenset utleieadgang – krever styregodkjenning, og korttidsutleie er begrenset til 30 døgn per år",
      "evidence": [
        "Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning og under visse vilkår.",
        "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.",
        "Styregodkjenning, jf. borettslagsloven § 5-4."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R12",
      "description": "Pågående plansaker i nærområdet kan påvirke eiendommens omgivelser – bl.a. fremkommelighetstiltak for trikk og fasadeendringer",
      "evidence": [
        "Pågående plansak – Saksnr: 202315257 – Saken gjelder: Vogts gate – Toftes gate – Fremkommelighetstiltak for trikk",
        "Saksnr: 202515903 – Øvrefoss 14 A – rehabilitering av syv piper",
        "Saksnr: 202515903 – Øvrefoss 14 A – bruksendring fra apotek til kafe",
        "Saksnr: 202522008 – Thorvald Meyers gate 7 – forhåndskonferanse, fasadeoppgradering",
        "Sannergata 2 og 4 – bruksendring, tilbygg, fasadeendring og påbygg"
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Avløpsrør i støpejern – eldre rørinstallasjon, men avløpsrør fra kjeller til leiligheter ble skiftet ca. 2007",
      "evidence": [
        "Avløpsrør/soilrør i støpejern.",
        "Avløpsrør fra kjeller til alle leiligheter ble skiftet i ca 2007 samtidig med våtromsrehabilitering."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R14",
      "description": "El-tilsyn ikke gjennomgått / dokumentasjon mangler – forretningsfører-opplysninger ikke gjennomgått",
      "evidence": [
        "Foreligger det kontrollrapport fra offentlig myndighet – Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende kontrollinstanser med avvik som ikke er utbedret eller kontrollen er over 5 år?",
        "Forretningsfører nummer, aksjonær og forsikringsselskap – Gjennomgått: Nei"
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R15",
      "description": "Hensynssone kvikkleire (H310_1) og steinsprang (H310_2) registrert i kommuneplankartet for området",
      "evidence": [
        "H310_1 - Kvikkleire",
        "H310_2 - Steinsprang"
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R16",
      "description": "Stikkledninger for vann og avløp er private fra eiendommen til det kommunale nettet – vedlikeholdsansvar påhviler sameiet",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Tegninger ikke gjennomgått – kan innebære avvik mellom faktisk bruk og godkjente tegninger",
      "evidence": [
        "Tegninger – Gjennomgått: Nei",
        "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18",
      "description": "Aksjeboliger har ikke personlig ansvar for selskapets gjeld, men legalpanterett i aksjen for krav på inntil 2G kan benyttes mot kjøper",
      "evidence": [
        "Aksjeeierne har ikke personlig ansvar for selskapets gjeld.",
        "Aksjeboligselskapet har legalpanterett i aksjen for krav på dekning av felleskostnader og andre krav fra selskapet, på inntil 2 ganger folketrygdens grunnbeløp.",
        "Legalpanteretten følger av borettslagsloven § 5-20, da denne gjelder tilsvarende for boligaksjeselskaper."
      ],
      "source_documents": [
        "d050_d050"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "TG3 etasjeskiller høydeavvik utbedringskostnad sjablongmessig anslag",
    "entredør anbefalt brukstid TG2 alder 1980 1990",
    "ventilasjon bad kjøkken TG2 naturlig ventilasjon avvik krav",
    "fallforhold badegulv TG2 avvik krav spesifikasjon",
    "el-tilsyn DLE kontrollrapport avvik dokumentasjon",
    "kvikkleire steinsprang H310 hensynssone konsekvens byggetiltak",
    "avløpsrør støpejern levetid tilstandsgrad vedlikehold",
    "planlagte vedlikeholdsarbeider fellesgjeld budsjett 2025 økte felleskostnader",
    "tegninger godkjente byggemeldte avvik romfunksjoner P-ROM",
    "boligaksjeselskap IN-lån individuell nedbetaling fellesgjeld"
  ],
  "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – TG3 etasjeskiller (0.97):** Godt dokumentert. Eksplisitt nevnt i sammendrag og TG3-definisjon er sitert. Confidence opprettholdes på 0.97. Merk: Sjablongmessig kostnadsanslag er nevnt men ikke spesifisert i de tilgjengelige chunkene – bør hentes ut.\n\n**R02 – TG2 membran/bad (0.97):** Svært godt dokumentert med flere konkrete evidenspunkter inkl. alder (~20 år) og terskelregel (15/20 år). Confidence opprettholdes på 0.97.\n\n**R03 – TG2 ventilasjon bad/kjøkken (0.92):** Evidensen er noe tynn – kun én setning om naturlig ventilasjon og styregodkjenning. Selve TG2-begrunnelsen er ikke fullt utdypet i chunkene. Justerer ned til 0.88.\n\n**R04 – TG2 fallforhold badegulv (0.92):** Evidensen er svak – kun én setning som nevner TG2 for fallforhold. Ingen spesifikasjon av avviket. Justerer ned til 0.85.\n\n**R05 – TG2 entredør (0.93):** Evidensen bekrefter TG2 og alder (1980/90-tall), men anbefalt brukstid er ikke fullstendig sitert i chunkene. Justerer ned til 0.88.\n\n**R06 – Hulltaking ikke utført (0.88):** Godt dokumentert med forklaring (murkonstruksjoner) og alternativ metode (fuktindikator). Confidence opprettholdes på 0.88.\n\n**R07 – Ingen radonmåling (0.95):** Klart dokumentert. Confidence opprettholdes på 0.95.\n\n**R08 – Ekspedisjonsdokument (0.88):** Dokumentert, men noe begrenset evidens om konsekvensene. Justerer ned til 0.85.\n\n**R09 – Fellesgjeld og høy rente (0.93):** Svært godt dokumentert med konkrete tall fra regnskap. Confidence justeres opp til 0.95 grunnet sterk tallmessig evidens.\n\n**R10 – Økte felleskostnader ved mislighold (0.90):** Dokumentert med én setning. Confidence justeres til 0.88.\n\n**R11 – Begrenset utleieadgang (0.92):** Godt dokumentert med lovhenvisning og 30-døgnsregel. Confidence opprettholdes på 0.92.\n\n**R12 – Pågående plansaker (0.82):** Godt dokumentert med konkrete saksnumre. Confidence opprettholdes på 0.82.\n\n**R13 – Avløpsrør støpejern (0.80):** Evidensen viser at rørene fra kjeller til leiligheter ble skiftet i 2007, noe som reduserer risikoen noe. Confidence justeres ned til 0.70 siden den primære risikoen (eldre rør) er delvis avhjulpet.\n\n**R14 – El-tilsyn ikke gjennomgått (0.78):** Evidensen er svak – kun spørsmålsformulering og \"Gjennomgått: Nei\" for forretningsfører. Det er uklart om DLE-rapport faktisk mangler eller bare ikke er gjennomgått av takstmann. Justerer ned til 0.72.\n\n**R15 – Kvikkleire og steinsprang (0.75):** Dokumentert i kommuneplankartet, men ingen ytterligere konsekvensanalyse i chunkene. Confidence opprettholdes på 0.75.\n\n**R16 – Private stikkledninger (0.85):** Klart dokumentert. Confidence opprettholdes på 0.85.\n\n**R17 – Tegninger ikke gjennomgått (0.80):** Dokumentert. Confidence justeres til 0.78.\n\n**R18 – Legalpanterett 2G (0.85):** Godt dokumentert med lovhenvisning. Confidence opprettholdes på 0.85.\n\n**Mulige manglende risikoer identifisert:**\n1. Høye totale felleskostnader (kr 6 636/mnd) – kan være belastende for kjøper\n2. Budsjettert økning i felleskostnader 2025 (fra 3 380 352 til 3 379 820 – relativt stabilt, men kommunale avgifter øker fra 465 000 til 523 000)\n3. Finanskostnader på -1 056 775 i 2024 – høy rentebelastning for selskapet totalt\n4. Selger har ikke utført arbeid på bad/våtrom (spørsmål 2: Nei) – kombinert med nær 20 år gammelt bad øker risikoen\n5. Hensynssone H320_1 (stormflo) og H320_2 (elveflom) er også registrert i kommuneplankartet – ikke identifisert som risiko\n"
}

## Raw Response
```json
{
  "id": "msg_012rFFBTqRLJ8xCopMcG7tPA",
  "container": null,
  "content": [
    {
      "id": "toolu_01HDf6rUZqybAhN5tnzGttnY",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "TG3 på etasjeskiller – høydeavvik",
            "evidence": [
              "TG 3 er gitt pga høydeavvik på etasjeskiller.",
              "Tilstandsgrad 3, TG3: Store eller alvorlige avvik. Kraftige symptomer på forhold som man må regne med trenger utbedring straks eller innen kort tid. Påvist funksjonssvikt eller sammenbrudd.",
              "Avvik under TG3 skal gis sjablongmessig anslag.",
              "Det er gjennomgående registrert TG 1 og TG 2, samt en TG 3."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "TG2 på membran/tettesjikt på bad – mer enn halvparten av forventet brukstid er oppbrukt",
            "evidence": [
              "TG 2 er blant annet gitt pga alder på entredør og membran på bad.",
              "Det er avvik: membran/tettesjikt er oppbrukt.",
              "Smøremembran på vegg som er over 15 år og banemembran over 20 år blir vurdert til TG2 i rapporten.",
              "Dette badet er nå snart 20 år gammelt.",
              "TG 2 gis med bakgrunn i at mer enn halvparten av forventet brukstid for membran/tettesjikt er oppbrukt."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R03",
            "description": "TG2 på ventilasjon av bad/kjøkken – naturlig ventilasjon med tilluft via ventiler krever godkjenning av styret",
            "evidence": [
              "TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken.",
              "Naturlig ventilasjon med tilluft via ventiler gis automatisk behov for godkjenning av styret."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R04",
            "description": "TG2 på fallforhold på badegulv – avvik fra krav",
            "evidence": [
              "TG 2 er gitt pga fallforhold på badegulv og ventilasjon av bad/kjøkken."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R05",
            "description": "TG2 på entredør – høy alder (antatt fra 1980/90-tallet), anbefalt brukstid trolig overskredet",
            "evidence": [
              "TG 2 er blant annet gitt pga alder på entredør og membran på bad.",
              "Entredør i B30 og dB35 kvalitet. Antatt fra 1980/90 tallet."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R06",
            "description": "Hulltaking av våtrom ikke utført – begrenset undersøkelse av fukt bak flater grunnet murkonstruksjoner",
            "evidence": [
              "Hulltaking er ikke foretatt da det ikke er fysisk mulig pga tilliggende konstruksjoner er av mur.",
              "Takstmannen har derfor kontrollert med fuktindikator i våtsoner uten at det er registrert fukt i området.",
              "Rapporten er likevel ingen garanti for at det ikke kan finnes skjulte feil, skader og mangler."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R07",
            "description": "Ingen radonmåling er utført av selger",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette.",
              "Spørsmål 21: Er det foretatt radonmåling? – Nei"
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R08",
            "description": "Ekspedisjonsdokument i stedet for ferdigattest – bygget er ikke formelt ferdigattestert etter dagens regelverk",
            "evidence": [
              "Ekspedisjonsdokumentet er forgjengeren til ferdigattest. Dokumentet er attestert og bekrefter at bygget er registrert som lovlig oppført.",
              "At ekspedisjonsdokument foreligger i stedet for ferdigattest."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R09",
            "description": "Betydelig fellesgjeld og høy rente – andel fellesgjeld kr 371 468 med flytende rente på 5,75 % og 6,20 %",
            "evidence": [
              "Pr. 31/12-2024 er andel av felles gjeld kr. 371 468.",
              "Rentesats: 5,75 % – Restsaldo: 6 393 923,00 – Andel fellesgjeld: 114 042,42",
              "OBOS-banken (lån 3): Rentesatsen pr. 31.12.24 var 6,20 %. Løpetiden er 5 år.",
              "OBOS-banken: Renter 31.12.24: 6,20 % løpetid 20 år",
              "Finanskostnader: Renter og gebyr på lån OBOS-banken (lån 2) -394 678",
              "Finanskostnader 12 -1 056 775"
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R10",
            "description": "Risiko for økte felleskostnader ved mislighold eller usolgte aksjer – øvrige aksjeeiere må dekke underskuddet",
            "evidence": [
              "Dersom boligaksjeselskapet ved mislighold, eller dersom boligaksjeselskapet sitter på fraflyttede og/eller usolgte aksjer, må dekkes av de øvrige aksjeeierne."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Begrenset utleieadgang – krever styregodkjenning, og korttidsutleie er begrenset til 30 døgn per år",
            "evidence": [
              "Det er begrenset adgang til å leie ut bolig i boligaksjeselskap. Med styrets godkjenning og under visse vilkår.",
              "Korttidsutleie er tillatt i opptil 30 døgn per år uten samtykke fra styret.",
              "Styregodkjenning, jf. borettslagsloven § 5-4."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R12",
            "description": "Pågående plansaker i nærområdet kan påvirke eiendommens omgivelser – bl.a. fremkommelighetstiltak for trikk og fasadeendringer",
            "evidence": [
              "Pågående plansak – Saksnr: 202315257 – Saken gjelder: Vogts gate – Toftes gate – Fremkommelighetstiltak for trikk",
              "Saksnr: 202515903 – Øvrefoss 14 A – rehabilitering av syv piper",
              "Saksnr: 202515903 – Øvrefoss 14 A – bruksendring fra apotek til kafe",
              "Saksnr: 202522008 – Thorvald Meyers gate 7 – forhåndskonferanse, fasadeoppgradering",
              "Sannergata 2 og 4 – bruksendring, tilbygg, fasadeendring og påbygg"
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Avløpsrør i støpejern – eldre rørinstallasjon, men avløpsrør fra kjeller til leiligheter ble skiftet ca. 2007",
            "evidence": [
              "Avløpsrør/soilrør i støpejern.",
              "Avløpsrør fra kjeller til alle leiligheter ble skiftet i ca 2007 samtidig med våtromsrehabilitering."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R14",
            "description": "El-tilsyn ikke gjennomgått / dokumentasjon mangler – forretningsfører-opplysninger ikke gjennomgått",
            "evidence": [
              "Foreligger det kontrollrapport fra offentlig myndighet – Det Lokale Eltilsyn (DLE) eller eventuelt andre tilsvarende kontrollinstanser med avvik som ikke er utbedret eller kontrollen er over 5 år?",
              "Forretningsfører nummer, aksjonær og forsikringsselskap – Gjennomgått: Nei"
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R15",
            "description": "Hensynssone kvikkleire (H310_1) og steinsprang (H310_2) registrert i kommuneplankartet for området",
            "evidence": [
              "H310_1 - Kvikkleire",
              "H310_2 - Steinsprang"
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R16",
            "description": "Stikkledninger for vann og avløp er private fra eiendommen til det kommunale nettet – vedlikeholdsansvar påhviler sameiet",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Tegninger ikke gjennomgått – kan innebære avvik mellom faktisk bruk og godkjente tegninger",
            "evidence": [
              "Tegninger – Gjennomgått: Nei",
              "Kontroll av romfunksjoner for P-ROM utføres kun når det ikke foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke stemmer med dagens bruk."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18",
            "description": "Aksjeboliger har ikke personlig ansvar for selskapets gjeld, men legalpanterett i aksjen for krav på inntil 2G kan benyttes mot kjøper",
            "evidence": [
              "Aksjeeierne har ikke personlig ansvar for selskapets gjeld.",
              "Aksjeboligselskapet har legalpanterett i aksjen for krav på dekning av felleskostnader og andre krav fra selskapet, på inntil 2 ganger folketrygdens grunnbeløp.",
              "Legalpanteretten følger av borettslagsloven § 5-20, da denne gjelder tilsvarende for boligaksjeselskaper."
            ],
            "source_documents": [
              "d050_d050"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "TG3 etasjeskiller høydeavvik utbedringskostnad sjablongmessig anslag",
          "entredør anbefalt brukstid TG2 alder 1980 1990",
          "ventilasjon bad kjøkken TG2 naturlig ventilasjon avvik krav",
          "fallforhold badegulv TG2 avvik krav spesifikasjon",
          "el-tilsyn DLE kontrollrapport avvik dokumentasjon",
          "kvikkleire steinsprang H310 hensynssone konsekvens byggetiltak",
          "avløpsrør støpejern levetid tilstandsgrad vedlikehold",
          "planlagte vedlikeholdsarbeider fellesgjeld budsjett 2025 økte felleskostnader",
          "tegninger godkjente byggemeldte avvik romfunksjoner P-ROM",
          "boligaksjeselskap IN-lån individuell nedbetaling fellesgjeld"
        ],
        "reasoning": "\nGjennomgang av alle 18 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – TG3 etasjeskiller (0.97):** Godt dokumentert. Eksplisitt nevnt i sammendrag og TG3-definisjon er sitert. Confidence opprettholdes på 0.97. Merk: Sjablongmessig kostnadsanslag er nevnt men ikke spesifisert i de tilgjengelige chunkene – bør hentes ut.\n\n**R02 – TG2 membran/bad (0.97):** Svært godt dokumentert med flere konkrete evidenspunkter inkl. alder (~20 år) og terskelregel (15/20 år). Confidence opprettholdes på 0.97.\n\n**R03 – TG2 ventilasjon bad/kjøkken (0.92):** Evidensen er noe tynn – kun én setning om naturlig ventilasjon og styregodkjenning. Selve TG2-begrunnelsen er ikke fullt utdypet i chunkene. Justerer ned til 0.88.\n\n**R04 – TG2 fallforhold badegulv (0.92):** Evidensen er svak – kun én setning som nevner TG2 for fallforhold. Ingen spesifikasjon av avviket. Justerer ned til 0.85.\n\n**R05 – TG2 entredør (0.93):** Evidensen bekrefter TG2 og alder (1980/90-tall), men anbefalt brukstid er ikke fullstendig sitert i chunkene. Justerer ned til 0.88.\n\n**R06 – Hulltaking ikke utført (0.88):** Godt dokumentert med forklaring (murkonstruksjoner) og alternativ metode (fuktindikator). Confidence opprettholdes på 0.88.\n\n**R07 – Ingen radonmåling (0.95):** Klart dokumentert. Confidence opprettholdes på 0.95.\n\n**R08 – Ekspedisjonsdokument (0.88):** Dokumentert, men noe begrenset evidens om konsekvensene. Justerer ned til 0.85.\n\n**R09 – Fellesgjeld og høy rente (0.93):** Svært godt dokumentert med konkrete tall fra regnskap. Confidence justeres opp til 0.95 grunnet sterk tallmessig evidens.\n\n**R10 – Økte felleskostnader ved mislighold (0.90):** Dokumentert med én setning. Confidence justeres til 0.88.\n\n**R11 – Begrenset utleieadgang (0.92):** Godt dokumentert med lovhenvisning og 30-døgnsregel. Confidence opprettholdes på 0.92.\n\n**R12 – Pågående plansaker (0.82):** Godt dokumentert med konkrete saksnumre. Confidence opprettholdes på 0.82.\n\n**R13 – Avløpsrør støpejern (0.80):** Evidensen viser at rørene fra kjeller til leiligheter ble skiftet i 2007, noe som reduserer risikoen noe. Confidence justeres ned til 0.70 siden den primære risikoen (eldre rør) er delvis avhjulpet.\n\n**R14 – El-tilsyn ikke gjennomgått (0.78):** Evidensen er svak – kun spørsmålsformulering og \"Gjennomgått: Nei\" for forretningsfører. Det er uklart om DLE-rapport faktisk mangler eller bare ikke er gjennomgått av takstmann. Justerer ned til 0.72.\n\n**R15 – Kvikkleire og steinsprang (0.75):** Dokumentert i kommuneplankartet, men ingen ytterligere konsekvensanalyse i chunkene. Confidence opprettholdes på 0.75.\n\n**R16 – Private stikkledninger (0.85):** Klart dokumentert. Confidence opprettholdes på 0.85.\n\n**R17 – Tegninger ikke gjennomgått (0.80):** Dokumentert. Confidence justeres til 0.78.\n\n**R18 – Legalpanterett 2G (0.85):** Godt dokumentert med lovhenvisning. Confidence opprettholdes på 0.85.\n\n**Mulige manglende risikoer identifisert:**\n1. Høye totale felleskostnader (kr 6 636/mnd) – kan være belastende for kjøper\n2. Budsjettert økning i felleskostnader 2025 (fra 3 380 352 til 3 379 820 – relativt stabilt, men kommunale avgifter øker fra 465 000 til 523 000)\n3. Finanskostnader på -1 056 775 i 2024 – høy rentebelastning for selskapet totalt\n4. Selger har ikke utført arbeid på bad/våtrom (spørsmål 2: Nei) – kombinert med nær 20 år gammelt bad øker risikoen\n5. Hensynssone H320_1 (stormflo) og H320_2 (elveflom) er også registrert i kommuneplankartet – ikke identifisert som risiko\n"
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
    "input_tokens": 23337,
    "output_tokens": 5193,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
