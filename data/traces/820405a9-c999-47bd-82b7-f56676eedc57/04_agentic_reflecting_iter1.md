# Trace: agentic_reflecting_iter1
- **Run ID:** 820405a9-c999-47bd-82b7-f56676eedc57
- **Tidspunkt:** 2026-03-25T03:37:32.275613+00:00
- **Varighet:** 108.93s
- **Input tokens:** 19937
- **Output tokens:** 5950

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
Risiko 1: Fuktproblemer i kjeller og rom under terreng: Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør. Det kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Kjelleren mangler kapillærbrytende sjikt, noe som er vanlig for boliger fra 1946. Utskifting av drenering anbefales på sikt.
  Confidence: 0.97
  Evidens: Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør; Kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Vann svabres enkelt til sluk.; Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt.; Utskifting av drenering anbefales på sikt for en gammel bolig; Fuktsikring og drenering har fått tilstandsgrad 2

Risiko 2: Eldre taktekking og takkonstruksjon uten moderne diffusjonsåpent undertak: Taket har passert over halvparten av forventet levetid. Undertaket består kun av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak. Dette øker risikoen for fuktskader i takkonstruksjonen. Tilstandsgrad 2 er gitt.
  Confidence: 0.96
  Evidens: Taktekking og takkonstruksjon: Eldre, passert over halvparten av forventet levetid; Undertaket kun består av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak; Taktekking har fått tilstandsgrad 2; Fremtidige kostnader må påregnes, spesielt for drenering og tak på sikt

Risiko 3: Ulovlige/ikke-søkte bygningsendringer: Planløsningen avviker fra godkjente byggetegninger, både for første og andre etasje. En bærende vegg er flyttet uten at tiltaket er omsøkt eller meldt til kommunen. Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det foreligger heller ikke tegninger på den opprinnelige boligen.
  Confidence: 0.97
  Evidens: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.; Endring av planløsning i første etasje og endring av planløsning i andre etasje.; Eier opplyser at i forbindelse med ombygging av planløsningen i andre etasje er én lastbærende vegg flyttet; Tiltaket er ikke omsøkt til kommunen.; Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det anbefales å melde inn ny planløsning til kommunen.; Det er ikke fremlagt tegninger på den opprinnelige boligen.

Risiko 4: Terrengfall mot grunnmur og garasje: Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning mot grunnmuren. Justering av terreng anbefales for å redusere risiko for vannansamling. Tilstandsgrad 2 er gitt.
  Confidence: 0.93
  Evidens: Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning.; Justering av terreng anbefales for å redusere risiko for vannansamling.; Det bør foretas terrengjusteringer. En justering av terrenget vil være nødvendig for å lukke avviket.; Kostnadses timat: Under 20 000

Risiko 5: Råteskade avdekket i yttervegg: Under rivningsarbeid ble det oppdaget en råteskade i yttervegg. Risiko for skjulte råteskader i veggkonstruksjonen kan ikke utelukkes, særlig gitt at ny panel er montert direkte på eksisterende eldre panel.
  Confidence: 0.92
  Evidens: Under rivningsarbeidene ble det oppdaget en råteskade i yttervegg; Den synlige panelen er montert direkte på eksisterende eldre panel.; Uten tilstrekkelig lufting bak bordkledningen kan fuktighet som trenger inn bak bordene eller gjennom veggen innenfra ikke tørke opp. Dette skaper ideelle forhold for råtesopp og muggvekst.; Veggkonstruksjon har fått tilstandsgrad 2

Risiko 6: Sprekk i grunnmur: Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Sprekken er nå overmalt og ikke visuelt synlig, noe som gjør det vanskelig å vurdere om den har utviklet seg videre.
  Confidence: 0.85
  Evidens: Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Denne er nå overmalt og ikke visuelt synlig.; Den er typisk for en bolig fra 1946 og indikerer normal aldring av betongkonstruksjonen.; Det er registrert løs puss og noe avskalling på grunnmur i kjeller.

Risiko 7: Eldre garasjeport og dør med passert forventet levetid: Garasjeporten og døren til garasjen er av ukjent alder og har passert forventet levetid. Utskifting må påregnes i nær fremtid. Tilstandsgrad 2 er gitt med kostnadsestimat 20 000–100 000 kr.
  Confidence: 0.88
  Evidens: Alderen på porten og døren har passert den forventede levetiden.; Porten og døren fungerer som de skal, men på grunn av alderen må det regnes med en utskifting i tiden som kommer.; Kostnadses timat: 20 000 - 100 000

Risiko 8: Bindende strømavtale (Norgespris) med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers valgfrihet for strømleverandør i bindingsperioden.
  Confidence: 0.9
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026.; Avtalen følger boligen, og må derfor overtas av kjøper.

Risiko 9: Veirett over eiendommen og delt vedlikeholdsansvar: Det er tinglyst veirett fra hovedvei over eiendommen 16A til eiendommen 16B. Vedlikeholdsutgifter for veien deles mellom eiendommene 16A og 16B, noe som innebærer løpende kostnader og potensielle konflikter med nabo.
  Confidence: 0.88
  Evidens: Det er tinglyst veirett fra hovedvei over eiendommen 16 A til eiendommen 16 B.; Vedlikeholdsutgifter for veien deles mellom eiendommene 16 A og 16 B.; Den som bruker veien skal dekke sin forholdsmessige del av drift og vedlikehold. Tinglysningen kan ikke oppheves uten samtykke fra Nannestad kommune.

Risiko 10: Balkong med rekkverk lavere enn dagens krav og aldrende tettesjikt: Rekkverket på balkong/terrasse er lavere enn dagens krav, og tettesjiktet på balkong i 2. etasje er aldrende. Selv om utbedring ikke er pålagt, utgjør dette en sikkerhetsrisiko og risiko for fremtidige fuktskader.
  Confidence: 0.87
  Evidens: Rekkverk lavere enn dagens krav (ikke pålagt utbedring), samt aldrende tettesjikt på balkong i 2. etasje.; Balkonger, terrasser og rom under balkonger har fått tilstandsgrad 2

Risiko 11: Ukjent byggegrunn: Byggegrunn er ukjent, noe som innebærer usikkerhet knyttet til grunnforholdene under boligen. Dette kan ha betydning for fundamentering og fremtidige setningsskader.
  Confidence: 0.82
  Evidens: Ukjent byggegrunn; Byggegrunn: Det bør foretas terrengjusteringer.

Risiko 12: Skjulte konstruksjoner og begrensninger i tilstandsrapporten: Rapporten dekker ikke alle deler av boligen. Det er ikke foretatt åpning av vegger eller andre bygningsdeler, og skjulte avvik kan finnes uten å være nevnt. Horisontal- og vertikalmålinger av gulv, vegger og himlinger er ikke utført, og skjevheter er ikke dokumentert.
  Confidence: 0.91
  Evidens: Rapporten beskriver ikke alle deler av boligen, og avvik eller skader kan fortsatt finnes uten å være nevnt.; Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.; Horisontal- og vertikalmålinger av gulv, vegger, himlinger og andre konstruksjoner inngår ikke i dette oppdraget. Skjevheter er derfor ikke dokumentert.; Det kan være avvik/skader som ikke er avdekket.

Risiko 13: Energikarakter G (dårligste klasse): Boligen har energikarakter G, som er den dårligste energiklassen. Dette indikerer høyt energiforbruk og kan medføre betydelige strømkostnader for kjøper.
  Confidence: 0.93
  Evidens: Energikarakter: G; Energifarge: Gul

Risiko 14: Tidligere fukt-, mugg- og soppskader i kjeller: Det har tidligere vært problemer med mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon. Selv om tiltak er utført, kan risikoen for gjentakelse ikke utelukkes gitt boligens alder og manglende kapillærbrytende sjikt.
  Confidence: 0.89
  Evidens: Tidligere fuktproblemer grunnet manglende ventilasjon; mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon; nye klaffventiler er montert i kjeller; Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt.

Risiko 15: Nedløp og beslag med tilstandsgrad 2: Renner, nedløpsrør og beslag i metall har fått tilstandsgrad 2, noe som indikerer avvik som kan kreve tiltak og medføre kostnader.
  Confidence: 0.85
  Evidens: Nedløp og beslag har fått tilstandsgrad 2; Renner og nedløpsrør i stål utførelse. Type: Takrenner, nedløp og øvrige beslag i metall.; Kostnadses timat: 20 000 - 100 000

Dokumentkontekst:
[d128_d128 | Side [1]]
orten beskriver ikke alle deler av boligen, og avvik eller AVVIK SOM KAN KREVE TILTAK
skader kan fortsa琀琀 昀椀nnes uten å være nevnt. Den viser
vurderte bygningsdeler og observasjoner. For forhold utenfor Utvendig > Taktekking Gå til side
rapportens omfang, anbefales fagfolks vurderinger.
Utvendig > Nedløp og beslag Gå til side
Tilstandsgradene (TG) viser undersøkelser e琀琀er forskri昀琀 琀椀l
avhendingsloven, men metodens og oppdragets begrensninger
Utvendig > Veggkonstruksjon Gå til side
avdekker ikke alle

---

[d128_d128 | Side [1]]
rmal slitasjegrad: Forventet slitasje av materiale i over昀氀aten, basert på
referansenivået. Posi琀椀ve sider ved boligen, ut over det som kommer frem enkle, visuelle observasjoner. Kan vurderes sammen med bygningsdelens
av 琀椀lstandsgradene, blir normalt ikke fremhevet. alder.
Rapporten baserer seg på krav i forskri昀琀 琀椀l avhendingslova (tryggere Areal
bolighandel). For valg av 琀椀lstandsgrad blir NS 3600:2018 (teknisk
琀椀lstandsanalyse ved omsetning av bolig) lagt 琀椀l grunn. Areal fastse琀琀es e琀琀er forskri昀琀

---

[d128_d128 | Side [1]]
en
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og

---

[d128_d128 | Side [1]]
2632-1004 Befaringsdato: 18.12.2025 Side: 5 av 22
84 85

## Side 44

20
15
10
5
0
Vil du vite mer om 琀椀lstandsgrader? Se side 4.
Spesielt for de琀琀e oppdraget/rapporten
Horisontal- og ver琀椀kalmålinger av gulv, vegger, himlinger og
andre konstruksjoner inngår ikke i de琀琀e oppdraget. Skjevheter
er derfor ikke dokumentert. Dersom planlagt bruk eller
llatnA
Fordeling av 琀椀lstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU:

---

[d128_d128 | Side [1]]
som eier har påvist eller opplyst at
materialer og tjenesteyter. 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke fremvist
dokumentasjon på at rommet 琀椀lhører boenheten, med mindre de琀琀e er
Tilstandsrapporten gjelder hovedbygget og 琀椀lleggsbygninger som den angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres av
bygningssakkyndige anser at har nær 琀椀lknytning 琀椀l funksjon som bolig. bore琀琀slaget/sameiet, og de琀琀e kan påvirke boligens BRA-e.
Avvik er vurdert mot regler som gjaldt da

---

[d128_d128 | Side [1]]
der 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot

---

[d128_d128 | Side [1]]
IENDOM AS
Gnr 148 - Bnr 23 Haneborgveien 52B
3238 NANNESTAD 1463 FJELLHAMAR Reguleringsplankart
Eiendom: 148/23
Tilstandsrapportens avgrensninger Adresse: Gamle Dalsveg 16B
Dato: 01.12.2025
UTM-32
Nannestad kommune Målestokk: 1:1000
Forutsetninger og pigger.
Hulltaking: Boring av hull for inspeksjon og fuktmåling i risikoutsa琀琀e
Struktur og referansenivå konstruksjoner.
Rapporten beskriver avvik, det vil si en 琀椀lstand som er dårligere enn Normal slitasjegrad: Forventet slitasje av materiale i over昀氀aten,

---

[d128_d128 | Side [1]]
ammendrag av boligens 琀椀lstand
ombygging forutse琀琀er re琀琀e gulv, etasjeskillere, vegger eller Vil du vite mer? Se på rommet eller bygningsdelen senere i
himlinger, bør det gjøres nødvendige vurderinger med målinger rapporten.
av fagkyndig under visning før kjøp. Tilstandsanalysen følger
Forskri昀琀 琀椀l avhendingslova (tryggere bolighandel) og det er ikke
Enebolig
foreta琀琀 vurderinger av bygg, bygningsdeler eller rom som ikke
fremgår her.
Rapporten beskriver ikke alle deler av boligen, og avvik eller AVVIK

---

[d128_d128 | Side [1]]
t 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1 kjøkken, bad, tekniske installasjoner (VVS og elektro), vinduer, • Det foreligger godkjente og byggemeldte tegninger, men
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har dører, oppvarming og ven琀椀lasjon. Det er etablert 昀椀re soverom, det er avvik fra disse.
normal slitasje. Ved skjulte konstruksjoner kan alder

---

[d128_d128 | Side [1]]
ilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • skjulte
installasjoner • installasjoner utenfor bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering
Rapportansvarlig på grunnen • bygningens planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng

---

[d128_d128 | Side [1]]
inger
Utvendig > Veggkonstruksjon Gå til side
avdekker ikke alle avvik. TG 2 indikerer avvik som kan gi
kostnader, uten es琀椀mat. Ved TG 3 dekker es琀椀mater kun
rimeligste utbedring av angi琀琀e avvik, ikke standardheving. For Utvendig > Takkonstruksjon/Lo昀琀 Gå til side
nøyak琀椀ge kostnader, innhent 琀椀lbud e琀琀er grundigere
undersøkelser. Rapporten angir normalt ikke 琀椀ltak; de琀琀e krever Utvendig > Dører - 2 Gå til side
videre vurderinger.
Utvendig > Balkonger, terrasser og rom under Gå til side
Bilder i

---

[d128_d128 | Side [1]]
åvirke boligens BRA-e.
Avvik er vurdert mot regler som gjaldt da boligen ble oppført, med mindre Opplysninger om areal kan ikke alene beny琀琀es for beregning av
annet er spesi昀椀sert i forskri昀琀 琀椀l avhendingslova, eller gjeldende versjon av markedsverdi.
NS 3600.
Personvern
Hulltaking ved våtrom, i rom under terreng eller andre bygningsdeler,
krever eiers samtykke. Tilstandsrapporten er utarbeidet som en del av Frem琀椀nd Forsikring AS si琀琀
takstkonsept. Frem琀椀nd Forsikring AS, iVerdi AS, taks琀昀oretaket og

---

[d128_d128 | Side [1]]
ngssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk følgende avvik fra plantegninger ved forrige salg av boligen:
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova. Arealer: Endring av planløsning i første etasje og endring av
Enebolig BRA: ca. 183 m² planløsning i andre etasje.
Kjeller på ca. 59 m² regnes som ikke målbart areal pga. lav Eier opplyser at i forbindelse med ombygging av
takhøyde, brukes som

---

[d128_d128 | Side [1]]
nadsplik琀椀g, men det anbefales
generelt at ny planløsning meldes inn 琀椀l kommunen.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2 Vesentlige forhold og avvik (TG2):
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀 Taktekking og takkonstruksjon: Eldre, passert over halvparten av Taks琀椀ngeniørens vurdering bygger på visuell befaring og
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær

---

[d128_d128 | Side [1]]
 begrenset 琀椀l de spørsmål som
fremkommer under. Tilstandsgraden er basert på retningslinjer 琀椀l disse Byggegrunn • Det bør foretas terrengjusteringer.
spørsmålene i bransjestandarden NS3600. De琀琀e kan ikke sammenlignes En justering av terrenget vil være nødvendig for å lukke avviket.
med en fullstendig kontroll av branntekniske forhold av o昀昀entlig Ukjent byggegrunn Kostnadses琀椀mat: Under 20 000
myndighet, eller en vurdering av boligens branntekniske forhold eller
prosjektering fra en rådgiver med

---

[d128_d128 | Side [1]]
fra rapportdato. Oppstår det skader eller skjer det endringer på eiendommen, bør du som selger be om en oppdatert
琀椀lstandsrapport.
80 81

## Side 42

WP TAKST OG EIENDOM AS
Haneborgveien 52B
Gamle Dalsveg 16 B, 2032 MAURA 1463 FJELLHAMAR
Gnr 148 - Bnr 23
3238 NANNESTAD
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Hva er en 琀椀lstandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva

---

[d128_d128 | Side [1]]
engning ved kraftig
‑ Nye innfelte kontakter og brytere med smal profil. ‑ Ny varmepumpe installert. byggets alder og utvendige forhold. nedbør. Dette indikerer redusert funksjon på drenering
‑ Elbillader Zaptec Go installert på egen kurs. ‑ Rehabilitert trapp mellom kjeller og 1. etasje, samt ny og gir grunnlag for videre oppfølging.
‑ Ny belysning i hele huset og garasje, med dimmere på innbygging av trappeløsningen. Følgende har fått tilstandsgrad 2:
de fleste punkter. ‑ Taktekking ‑ Fuktsikring og

---

[d128_d128 | Side [1]]
tvendig > Balkonger, terrasser og rom under Gå til side
Bilder i rapporten er eksempler og viser ikke alle avvik eller
balkonger
forhold. Rapporten beskriver eiendommens 琀椀lstand på
befarings琀椀dspunktet og gir ingen garan琀椀er for frem琀椀dige
forhold eller skader som ikke oppdages med Innvendig > Rom Under Terreng Gå til side
undersøkelsesmetoden. Endringer eller skader e琀琀er befaringen
er selgers ansvar å melde fra om, slik at rapporten kan Tomteforhold > Fuktsikring og drenering Gå til side
oppdateres.

---

[d128_d128 | Side [1]]
fra disse.
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel ny琀琀 bad og separat WC, ny琀琀 kjøkken og ny琀琀 elektrisk anlegg Det er fremlagt tegninger på 琀椀lbygg fra 1994, men det er ikke
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme. med dokumentasjon. fremlagt tegninger på den opprinnelige boligen. Det er
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste

---

[d128_d128 | Side [1]]
 rørarbeid er nytt fra hovedinntaket. fungerer godt til lagring. særlig tak, drenering og kjellerforhold, samt enkelte vedlikehold og utskifting må påregnes på sikt.
‑ Hovedinntaket for strøm er flyttet og oppgradert, med ‑ Tidligere fuktproblemer grunnet manglende ventilasjon utvendige konstruksjoner. Det er ikke avdekket forhold
nytt utvendig sikringsskap. ‑ nye klaffventiler er montert i kjeller. med tilstandsgrad 3. Samlet sett fremstår boligen som ‑ Rom under terreng
‑ Hele det elektriske anlegget i

---

[d128_d128 | Side [1]]
 og rettigheter: På eiendommen er det Dokumentet innebærer ingen plikter for ny eier i dag, og
tinglyst følgende heftelser og rettigheter som følger det gjelder kun som historisk samtykke til oppført bygg.
Ingen deler av boligen har fått tilstandsgrad 3. I tillegg er det montert ny vedovn i 2025. Pipen er eiendommens matrikkel ved overskjøting til ny
kontrollert innvendig av feiervesenet. Boligen er utstyrt hjemmelshaver: 30.07.2025 ‑ Dokumentnr: 876432 ‑ Bestemmelse om
Se tilstandsrapporten vedlagt for

---

[d128_d128 | Side [1]]
 opprettholdes. og avløp, med adkomst via private stikkvei.
Info energiklasse
Erklæringen ligger som en heftelse på eiendommen, men
Regulering
Se fullstendig energiattest fra selger som vedlegg til innebærer ingen løpende plikter for ny eier – den I 2025 ble det tinglyst en veirett som gir eiendommen
salgsoppgave. Megler påtar seg ikke ansvar for Regulerings og arealplaner: Eiendommen ligger i et dokumenterer kun at nabo i sin tid fikk bygge nærmere rett til å bruke del av naboens tomt som adkomstvei

---

[d128_d128 | Side [1]]
entnr: 876432 ‑ Bestemmelse om
Se tilstandsrapporten vedlagt for ytterligere informasjon. med friskluftsventiler i alle soverom, stue og gang, samt veg
mekanisk avtrekk på bad og WC, noe som bidrar til et Heftelser i eiendommen: Rettighet hefter i: Knr:3238 Gnr:148 Bnr:166
balansert inneklima og god varmefordeling. Ingen heftelser i eiendommen. Kan ikke slettes uten samtykke fra: Nannestad Kommune
Øvrig
Org.nr: 964 950 202
Nåværende eier har tegnet avtale om Norgespris på Eiendommens rettigheter:

---

[d128_d128 | Side [1]]
i Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Tinglyste forhold: Det er tinglyst veirett fra hovedvei over eiendommen 16 A til eiendommen 16 B.
Vedlikeholdsutgifter for veien deles mellom eiendommene 16 A og 16 B. Kjeller og lagring: Eiendommen har kjeller
Beskrivelse på cirka 59 kvadratmeter som fungerer som bodlagring. Selv om takhøyden er lav og trappen er smal, gir kjelleren
betydelig

---

[d128_d128 | Side [1]]
eier har tegnet avtale om Norgespris på Eiendommens rettigheter: Bestemmelse om vedlikehold
informasjon
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen Kort fortalt: I 2025 ble det tinglyst en veirett som gir
følger boligen, og må derfor overtas av kjøper. 3238/ 148/ 23: eiendommen rett til å bruke del av naboens tomt som
Adresse
29.06.1982 ‑ Dokumentnr: 4888 ‑ Bestemmelse om adkomstvei frem til kommunal vei. Dette er en formell og
Gamle Dalsveg 16 B, 2032 MAURA Norgespris er en ny, statlig

---

[d128_d128 | Side [1]]
illende. Denne
garasjen er primært egnet som lagringsplass eller vedbod.
Arbeid utført av Extemplo Entreprenør AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner

---

[d128_d128 | Side [1]]
bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
Initialer selger: CO 3
76
21005240
:ecnerefer
tnemucoD
77

## Side 40

21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan

---

[d128_d128 | Side [1]]
enget har delvis fall mot grunnmur og garasje, noe kjeller er av nyere dato. Videre er det etablert nabogrensen enn fire meter. Erklæringen ble tinglyst som
Tinglyste heftelser
som kan føre til økt fuktbelastning. Justering av terreng varmekabler på bad, WC og i gang, samt varmefolie en formell godkjenning av dette avstandsunntaket.
anbefales for å redusere risiko for vannansamling. under laminatgulv i hele første etasje. Tinglyste heftelser og rettigheter: På eiendommen er det Dokumentet innebærer ingen

---

[d128_d128 | Side [1]]
re. finnes på eiendommen, vil heller ikke følge med i salget.
om sammen med BRA som et tillegg. en ny peisovn fra Aduro med glass på tre sider og stort Alt utstyr og installasjoner som medfølger overtas slik de
GUA – summen av BRA og AHL. Brukes når boligen har flammebilde. Den lune stuen har videre varmefolie i To av rommene er ekstra romslige og fra er, uten garanti, med mindre det foreligger en gjeldende
gulvareal som ikke er måleverdig på grunn av for gulvet, samt en varmepumpe som også gir kjøling om

---

[d128_d128 | Side [1]]
ygge nærmere rett til å bruke del av naboens tomt som adkomstvei frem
informasjonen som fremgår av energiattesten. område som i kommuneplanens arealdel er avsatt til grensen enn vanlig. til kommunal vei. Dette er en formell og varig rettighet
boligformål. som følger eiendommen.
14.10.1982 ‑ Dokumentnr: 7956 ‑ Bestemmelse om Den som bruker veien skal dekke sin forholdsmessige del
Tomten til Gamle Dalsveg 16A er fradelt, og det må bebyggelse av drift og vedlikehold. Tinglysningen kan ikke oppheves
68 69

##

---

[d128_d128 | Side [1]]
es også derfor 琀椀l selv å undersøke over昀氀atene
Kostnadses琀椀mat: Under 20 000 under visning og gjøre egne vurderinger.
Over昀氀atene har bruksslitasje, som innebærer bruksmerker, noe som
påregnes generelt i brukte boliger. Vurderingen av over昀氀ater er stort
Dører - 2 se琀琀 subjek琀椀v og interessenter oppfordres derfor 琀椀l å gjøre egne
vurderinger.
Garasjeport og dør 琀椀l garasje av ukjent alder. Bilde av terrasse 2. Etg Det kan være forhold som ikke er nevnt i rapporten som likevell kan
Eier opplyser om at port

---

[d128_d128 | Side [1]]
boligen som ‑ Rom under terreng
‑ Hele det elektriske anlegget i huset er nytt (garasje og ‑ Kan forekomme vannopptrekk ved vårløsning og kraftig teknisk godt oppgradert innvendig, men med behov for å Det er påvist forhøyede fuktverdier i kjeller, og eier
utelys har eksisterende føringsveier). nedbør (inntil ca. 5 cm). Vann svabres enkelt til sluk. påregne fremtidig vedlikehold og enkelte tiltak knyttet til opplyser om tidligere vanninntrengning ved kraftig
‑ Nye innfelte kontakter og brytere med smal

---

[d128_d128 | Side [1]]
oden er gulvene ikke perfekt plane. Det oppleves
Beskrivelse noe knirk og vibrasjoner, noe som er normalt i eldre trebygninger. Det ble oppdaget en sprekk i grunnmuren under
kjøkkenvinduet ved forrige eierskifte. Denne er nå overmalt og ikke visuelt synlig. Den er typisk for en bolig fra 1946
og indikerer normal aldring av betongkonstruksjonen.
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
Ved overtakelse i 2024 var

---

[d128_d128 | Side [1]]
ling av kommunale avgifter og eventuell
Cato Olsen Som boligeier må du fortsatt ha en strømavtale med en Gjelder denne registerenheten med flere eiendomsskatt. Legalpant er et pant som ikke vises i
strømleverandør. Kort fortalt: I 1982 ble det tinglyst en erklæring som gir en grunnboksutskriften, og har prioritet foran for eksempel
naboeiendom tillatelse til å bygge nærmere felles tinglyste banklån på eiendommen.
Energimerke
Du kan lese mer om Norgespris blant annet her: https:/ / nabogrense enn normalt

---

[d128_d128 | Side [1]]
ke bli vasket ytterligere enn den fremstår på Boligen selges med det inventar og utstyr som i henhold tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
visning. til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk påvirket avtalen.
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Både kjøper og selger er forpliktet til å signere standard Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn

---

[d128_d128 | Side [1]]
delvis utleid. på bestemmelser i avhendingsloven §§ 3‑2 til 3‑8. Det
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler det som med rimelighet kunne forventes ut fra blant
Diverse
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud. annet alder, type og synlig tilstand – eller hvis det er
Boligen vil ikke bli vasket ytterligere enn den fremstår på Boligen selges med

---

[d128_d128 | Side [1]]
esultat. Det er 16. Kjenner du til om det har vært utført arbeid på
etter kort tid. Kjelleren har forhøyede fuktverdier som er ikke observert gnagskader på isolasjon, kabler eller terrasse, garasje, tak eller fasade Moderniseringer og påkostninger: Oppgraderinger og
vanlige for en bolig fra 1946 uten kapillærbrytende sjikt. treverk. Under rivningsarbeidene ble det oppdaget en Svar: Ja, kun av faglært arbeider utført på eiendommen
Utskifting av drenering anbefales på sikt for en gammel råteskade i yttervegg

---

[d128_d128 | Side [1]]
innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg •
bygningens este琀椀kk og arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse,
miljø og sikkerhet) • fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller
fellesarealet har en særlig 琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Bror Werner Werenskiold
Uavhengig Taks琀椀ngeniør Malen 琀椀l denne rapporten,

---

[d128_d128 | Side [1]]
 drift og vedlikehold. Tinglysningen kan ikke oppheves
68 69

## Side 36

OM EIENDOMMEN OM EIENDOMMEN
uten samtykke fra Nannestad kommune. som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis. eiendom uten at formålet hovedsakelig er knyttet til
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett næringsvirksomhet.
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse

---

[d128_d128 | Side [1]]
skostnadene anbefales y琀琀erligere undersøkelser og med klassiske risikoforhold kny琀琀et 琀椀l alder, særlig tak, drenering
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag og kjeller. Frem琀椀dige kostnader må påregnes, spesielt for
gis for TG3, der de琀琀e er mulig. drenering og tak på sikt.
Arealer
Gå 琀椀l side
Forutsetninger og vedlegg Gå 琀椀l side
Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side: 4 av 22
Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side: 5 av 22
84 85

## Side

---

[d128_d128 | Side [1]]
gperson, i samråd med brann- og
feiervesen eller annen o昀昀entlig godkjenningsmyndighet.
Informasjon om 琀椀lkny琀琀ede arealer, fellesarealer,
Tiltak under kr 20 000
oppgraderinger, oppvarmingskilder, årstall og generelle
Tiltak mellom kr 20 000 – 100 000 opplysninger er basert på opplysninger fra selger eller selgers
Tiltak mellom kr 100 000 – 200 000 representant, hvis ikke annet er oppgi琀琀.
Tiltak mellom kr 200 000 – 500 000
Oppgi琀琀e utbedringskostnader er kun es琀椀mater og avvik kan
Tiltak over kr 500 000

---

[d128_d128 | Side [1]]
10 av 22 Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side: 11 av 22
90 91

## Side 47

WP TAKST OG EIENDOM AS WP TAKST OG EIENDOM AS
Gamle Dalsveg 16 B, 2032 MAURA Gamle Dalsveg 16 B, 2032 MAURA
Haneborgveien 52B Haneborgveien 52B
Gnr 148 - Bnr 23 Gnr 148 - Bnr 23
1463 FJELLHAMAR 1463 FJELLHAMAR
3238 NANNESTAD 3238 NANNESTAD
Tilstandsrapport Tilstandsrapport
Boligen har gulv mot grunn i kjeller i betong og etasjeskille i treverk. Det Kostnadses琀椀mat: 20 000 - 100 000 Over昀氀ater vegger og himling

---

[d128_d128 | Side [1]]
erverte u琀昀ørende Vurderingen er basert på synlige forhold, uten bruk av s琀椀ge, drone,
Det er montert nye innerdører i hele Det er lokalt ski昀琀et ut utvendig kledning blikkenslager at undertaket kun består av gammelt tretak med over- og inngrep eller demontering. Det er u琀昀ørt s琀椀kkprøvekontroll med et
boligen. med elde og slitasje, og det er etablert underligger, uten moderne di昀昀usjonsåpent undertak. De琀琀e var helt skarpt redskap på enkelte utvalgte steder for å undersøke e琀琀er skader,
Ny trapp mellom 1.

---

[d128_d128 | Side [1]]
l og
Gamle Dalsveg 16 B, 2032 MAURA Norgespris er en ny, statlig ordning, som gir en bebyggelse varig rettighet som følger eiendommen.
forutsigbar og fast strømpris på 50 øre per kWh med Rettighet hefter i: Knr:3238 Gnr:148 Bnr:6 Den som bruker veien skal dekke sin forholdsmessige del
Gnr. 148, bnr. 23 mva (40 øre uten mva)gjennom året. Norgespris har et Rettighet hefter i: Knr:3238 Gnr:148 Bnr:162 av drift og vedlikehold. Tinglysningen kan ikke oppheves
i Nannestad kommune. forbrukstak på 5 000 kWh per

---

[d128_d128 | Side [1]]
 eiendommen 16 A til eiendommen 16 B.
mugg og sopp på vegger som følge av fukt og eller sentralfyr på eiendommen. Vedlikeholdsutgifter for veien deles mellom
5. Kjenner du til om det er/ har vært problemer med manglende luftsirkulasjon. I forbindelse med Arbeid utført av: Dal Elektriske AS og Extemplo eiendommene 16 A og 16 B. Kjeller og lagring:
drenering, fuktinnsig, øvrig fukt eller fuktmerker i rehabiliteringen i 2025 er omfattende tiltak utført: Alle Entreprenør AS. Eiendommen har kjeller på cirka 59

---

[d128_d128 | Side [1]]
skille/gulv mot grunn
Alderen på porten og døren har passert den forventede leve琀椀den.
Bilde av fuktmerker på pipe Konsekvens/琀椀ltak
• Andre 琀椀ltak:
Porten og døren fungerer som de skal, men på grunn av alderen må det
regnes med en utski昀琀ing i 琀椀den som kommer.
Kostnadses琀椀mat: 20 000 - 100 000 Bilde av beslag på dør og terrasse mot kledning
Balkonger, terrasser og rom under balkonger
Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side: 10 av 22 Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side:

---

[d128_d128 | Side [1]]
ostbare reparasjoner av
servant og vegghengt toale琀琀. Over昀氀ater er malt. underliggende konstruksjoner dersom en ikke foretar 琀椀ltak på Konsekvens/琀椀ltak
• Uten 琀椀lstrekkelig lu昀琀ing bak bordkledningen kan fuk琀椀ghet som
2025 Oppussing Kjøkken konstruksjonene før de琀琀e oppstår.
2025 Oppussing Diverse trenger inn bak bordene eller gjennom veggen innenfra ikke tørke opp.
Det er montert ny琀琀 kjøkken med
Det er 昀樀ernet stubbelo昀琀sleiere fra Kostnadses琀椀mat: Under 20 000 De琀琀e skaper ideelle forhold for råtesopp

---

[d128_d128 | Side [1]]
 ikke oppheves
i Nannestad kommune. forbrukstak på 5 000 kWh per måned for husholdninger Rettighet hefter i: Knr:3238 Gnr:148 Bnr:163 uten samtykke fra Nannestad kommune.
og 1 000 kWh for hytter. Når det er tegnet avtale om Rettighet hefter i: Knr:3238 Gnr:148 Bnr:164
Norgespris bortfaller eventuell strømstøtte. Byggetillatelse gitt etter dispensasjon i henhold til Legalpant: Kommunen har legalpant som sikkerhet for
Selger
Bygningsloven betaling av kommunale avgifter og eventuell
Cato Olsen Som boligeier

---

[d128_d128 | Side [1]]
d, bør dette monteres for å redusere luftutskiftningen og dermed overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
varmetapet.
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
Tiltak 22: Skifte avtrekksvifte på bad til ny med fuktstyring aksjebolig:
Dersom avtrekksvifte på bad kun har manuell styring av/på kan det vurderes å montere ny avtrekksvifte med fuktstyring,
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
dvs. at den starter/stopper

---

[d128_d128 | Side [1]]

 
medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,

stenger og lignende, medfølger.
Planter, busker og trær som er plantet på tomten, eller fastmonterte kasser og lignende er
en del av eiendommen og medfølger i handelen.
118 119

## Side 61

Fra hvilepuls
til makspuls.
Det er Emera
I Emera følger vi

---

[d128_d128 | Side [1]]
ses琀椀mat: Under 20 000 De琀琀e skaper ideelle forhold for råtesopp og muggvekst.
integrerte hvitevarer.
etasjeskiller, som er ersta琀琀et med
2025 Oppussing Tekniske installasjoner og infrastruktur isolasjon. Nedløp og beslag Kostnadses琀椀mat: 20 000 - 100 000
Fri琀琀liggende garasje er re琀琀et opp.
Alt av rør er ny琀琀 fra hovedinntaket.
Det er etablert ny琀琀 fordelerskap med Renner og nedløpsrør i stål u琀昀lørelse. Type: Takrenner, nedløp og øvrige
lekkasjesikring. UTVENDIG beslag i metall.
S琀椀kkledning er

---

[d128_d128 | Side [1]]
gsloven. Kjøpet finansieres slik:
BANK/FINANSIERINGSINSTITUSJON: REFERANSE & TELEFONNUMMER SUM:
Informasjonen er utarbeidet av Forbrukerrådet, Advokatforeningen ved Lovutvalget for eiendomsmegling, Eiendom Norge og Kr.
Norges Eiendomsmeglerforbund, på grunnlag av bl.a. eiendomsmeglingsloven § 6-8.
Kr.
Kr.
Nedenfor gis en oversikt over de retningslinjer som anbefales ved budgivning på eiendommen. Avslutningsvis gis også en kort
oversikt over de viktigste rettsreglene tilknyttet budgivning. Kr.
EGENKAPITAL:

---

[d128_d128 | Side [1]]
 konto: 1.098 kr
Omkostninger
Vann fastgebyr: 1.748 kr
6 700 000 (Prisantydning) Vanngebyr à konto: 454 kr
Vannmålerleie: 455 kr
Omkostninger Feiegebyr per pipeløp: 393 kr
Tilsynsgebyr per pipeløp: 195 kr
18 900 (Boligkjøperforsikring* (valgfritt)) Sum kommunale gebyrer per år: 6.899 kr
167 500 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel)
Formuesverdi
545 (Tinglysningsgebyr ‑ pantedokument)
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Formuesverdi primær: Kr 937 500 (2024)
168 590

---

[d128_d128 | Side [1]]
 og
fremstår som en skjermet oase om barnevennlig boligområde på Maura.
sommeren.

## Side 27

Nærområdet omkranses av flotte
turområder og ligger kun 10 min kjøring
fra OSL.

## Side 28

Plantegning

## Side 29

(Ingen tekst ekstrahert)

## Side 30

OM EIENDOMMEN
GAMLE DALSVEG 16 B
OM EIENDOMMEN
Økonomi
Kommunale avgifter
Kr 6 899 (2025)
Prisantydning
Kr 6 700 000 Informasjon: Prognose for 2025:
Avløp fastgebyr: 2.554 kr
Avløpsgebyr à konto: 1.098 kr
Omkostninger
Vann fastgebyr: 1.748 kr
6 700 000

---

[d128_d128 | Side [1]]
 sol og selges slik den fremstår med hensyn til dette. Kjøper
og skole. Maura barneskole og Maura ungdomsskole uteopphold. Det er også etablert levegg mot overtar ansvar for eventuell videre oppfølging overfor Bruksareal fordelt på etasje
ligger i nærområdet og har enkel adkomst til fots eller naboeiendom som skjermer uteplassen og bidrar til en kommunen dersom det skulle oppstå behov for fremtidig 1. etasje
med sykkel, noe som gir en forutsigbar og praktisk mer privat atmosfære. dokumentasjon.

---

[d128_d128 | Side [1]]
 om Norgespris blant annet her: https:/ / nabogrense enn normalt tillatt etter datidens
Energikarakter: G www.regjeringen.no/ no/ tema/ energi/ strom/ bygningslov. Eier av den aktuelle eiendommen ga
Vei, vann og avløp
Energifarge: Gul sporsmal‑og‑svar‑om‑norgespris samtykke til dette, under forutsetning av at den
nødvendige avstanden mellom bygningene samlet sett Eiendommen er tilknyttet offentlig vei samt offentlig vann
skulle opprettholdes. og avløp, med adkomst via private stikkvei.
Info

---

[d128_d128 | Side [1]]
r går det både lokal‑ og samme boenhet. Eiendommen har totalt to garasjer, én sammenbygget
regiontog med hyppige avganger mot Oslo, Gardermoen Tomtetype: Eiet garasje og én frittstående garasje.
og Eidsvoll. I tillegg gir nærhet til E6 gode I forbindelse med ombyggingen i andre etasje
kjøreforbindelser for bilpendling. Samlet sett gir dette Tomtestørrelse: 640.8 m² opplyser eier at én bærende vegg er flyttet for å tilpasse
Areal
fleksible og forutsigbare pendlermuligheter både med ny rominndeling. Lastene

---

[d128_d128 | Side [1]]
t er utført av BRA ‑ b: 0 m²
Barnehage/ Skole
gårdsplass med god plass til parkering. Uteområdene er en fagperson med byggfaglig kompetanse. Tiltaket er BRA totalt: 183 m²
Eiendommen ligger i et veletablert skolekretsområde delvis oppgradert, med terrasse på bakkeplan og ikke omsøkt eller meldt til kommunen, og eiendommen TBA: 30 m²
med korte og oversiktlige avstander til både barnehager balkong i andre etasje, som gir fine soner for både sol og selges slik den fremstår med hensyn til dette. Kjøper
og

---

[d128_d128 | Side [1]]
for fra tilgjengelig dokumentasjon både i opplysning av areal på boliger.
Det er også skolebussordning til Nannestad skole med første og andre etasje. De nye arealbegrepene er:
holdeplass ca. 180 meter fra eiendommen. Kjøper oppfordres til å sette seg grundig inn i
Avstander: Mauratunet barnehage: ca. 180 meter tilstandsrapport og selgers egenerklæring for nærmere
60 61

## Side 32

OM EIENDOMMEN OM EIENDOMMEN
Bruksareal BRA: veggmontert toalett, speil og pen servantinnredning med servant på nøttebrun

---

[d128_d128 | Side [1]]
rmålet det er utlevert til uten samtykke fra kommunen jf. lov om åndsverk.
Oppdragsnr.: 22632-1004 Befaringsdato: 18.12.2025 Side: 22 av 22
102 103

## Side 53

Tegnforklaring
Kommuneplankart
Eiendom: 148/23
Adresse: Gamle Dalsveg 16B
Dato: 01.12.2025
UTM-32
Nannestad kommune Målestokk: 1:5000
©Norkart 2025
Kartet er produsert fra kommunens beste digitale kartbaser for området og inneholder viktige opplysninger om eiendommen og området omkring. Presentasjonen av informasjon er
i samsvar med nasjonal

---

[d128_d128 | Side [1]]
t eller sammenbrudd.
fuktskader.
Terrengforhold: Delvis fall mot grunnmur/garasje – bør justeres.
IKKE UNDERSØKT/IKKE TILGJENGELIG FOR UNDERSØKELSE Balkonger/terrasser: Rekkverk lavere enn dagens krav (ikke
Det kan være avvik/skader som ikke er avdekket. pålagt utbedring), samt aldrende te琀琀esjikt på balkong i 2. etasje.
Lovlighet:
Det 昀椀nnes godkjente tegninger for 琀椀lbygg, men dagens
Informasjon om utbedringskostnader Tiltak under kr 20 000 planløsning avviker fra godkjente tegninger. Endringene

---

[d128_d128 | Side [1]]
den for kravene, men kan ikke regne med å få unntak for krav som går på Krav for rom 琀椀l varig opphold
bygningssakkyndig avdekker at en bolig ikke ser ut 琀椀l å være delt opp i brannceller helse og sikkerhet, for eksempel krav 琀椀l rømningsvei. Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
e琀琀er kravene i byggteknisk forskri昀琀 på befarings琀椀dspunktet, skal det opplyses om
de琀琀e. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan

---

[d128_d128 | Side [1]]
 ikke målbart grunnet lav takhøyde, men arealet kan beny琀琀es 琀椀l lagring/bod.
Arealmålingen er u琀昀ørt med laser. Det er bruken av rommene på befaringsdagen som de昀椀nerer P-rom og S-rom, rommene kan likevel være i
strid med teknisk forskri昀琀 og mangle godkjennelse fra kommunen.
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.
Kommentar: Det er fremlagt tegninger på 琀椀lbygg fra 1994, men det er ikke fremlagt tegninger på den opprinnelige boligen. Det er

---

[d128_d128 | Side [1]]
 Grunnmur påregnes fremtidig utbygging på denne. Tomten er per i Rettighet hefter i: Knr:3238 Gnr:148 Bnr:3
Oppvarming
Det er registrert løs puss og noe avskalling på grunnmur i dag til salgs. Interessenter kan få kontaktinformasjon for Byggetillatelse gitt etter dispensasjon i henhold til
kjeller. Forholdet vurderes ikke som alvorlig og krever Boligen har en kombinert og oppgradert videre dialog knyttet til kjøp av tomten. Bygningsloven
normalt kun lokal utbedring. oppvarmingsløsning. Det er installert

---

[d128_d128 | Side [1]]
 ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
bruksendringer og avvik i branncelleinndeling
Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei Kommentar: Se 琀椀lbygg/modernisering
Den bygningssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som

---

[d128_d128 | Side [1]]
t er ikke fremlagt tegninger på den opprinnelige boligen. Det er følgende
avvik fra plantegninger ved forrige salg av boligen:
Endring av planløsning i første etasje og endring av planløsning i andre etasje.
Eier opplyser at i forbindelse med ombygging av planløsningen i andre etasje er én lastbærende vegg 昀氀y琀琀et for å endre
romdeling. Grunnet konstruksjonens u琀昀ørelse kunne all last 昀氀y琀琀es 琀椀l sentral bærevegg og videreføres ned i bygget. For
sikkerhetsskyld er takstolen forsterket og laster fordelt

---

[d128_d128 | Side [1]]
arbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Fasade: Deler av den utvendige kledningen er skiftet ut lokalt der det var elde og slitasje. Det ble da avdekket at
den synlige panelen er montert direkte på eksisterende eldre panel. Den underliggende panelen ble kontrollert ved
utskifting, og det ble ikke funnet skader. Hele fasaden er malt i 2025. Det er etablert

---

[d128_d128 | Side [1]]
 det skal være lagt frem dokumentasjon på
fordelt over et større område. Las琀昀ordelingen er u琀昀ørt i
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen. Ny琀琀 bad, WC og kjøkken (2025)
henhold 琀椀l Trehusboka. Arbeidet er u琀昀ørt av fagperson med
Nye rør og ny琀琀 elektrisk anlegg med samsvarserklæring
byggfaglig kompetanse uten vederlag. Tiltaket er ikke omsøkt
Nye vinduer og dører (2024–2025)
TILSTANDSGRAD 1, TG1: MINDRE AVVIK 琀椀l kommunen. Konstruksjonen er nå innkledd bak gips og kan
Oppgradert

---

[d128_d128 | Side [1]]
tning av bolig) lagt 琀椀l grunn. Areal fastse琀琀es e琀琀er forskri昀琀 琀椀l avhendingslova og gjeldende versjon av NS
3940 (areal- og volumberegninger av bygninger).
Bygningssakkyndig er ikke ansvarlig for 琀椀lbakeholdt eller urik琀椀g
informasjon, som har betydning for 琀椀lstandsvurderingen. Et rom kan være i strid med teknisk forskri昀琀 og mangle godkjennelse hos
kommunen for den aktuelle bruken, uten at de琀琀e får betydning for om
Presiseringer arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet måles tas det

---

[d128_d128 | Side [1]]
tet.
utski昀琀et anlegg fra inntakssikring og videre.
Det ble ikke avdekket synlige tegn 琀椀l svekkelser eller lukt av betydning
2025 Eier opplyser om at anlegget ble ski昀琀et ut i 2025.
fra vann og avløpsrør, men en bør være Ven琀椀lasjon
oppmerksom på at vann og avløpsrør er en bygningsdel som har en
3. Er alle elektriske arbeider/anlegg i boligen u琀昀ørt av en registrert
forventet leve琀椀d. Det bemerkes at kun le琀琀 synlig/琀椀lgjengelig røropplegg Boligen har naturlig ven琀椀lasjon via spalter i vinduene og

---

[d128_d128 | Side [1]]
r 20 000 planløsning avviker fra godkjente tegninger. Endringene gjelder
både bærende og ikke-bærende vegger og er delvis
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller søknadsplik琀椀ge. Det anbefales å melde inn ny planløsning 琀椀l
uregelmessigheter, samt foreslå琀琀e 琀椀ltak. Disse anslagene er Tiltak mellom kr 100 000 – 200 000 kommunen.
veiledende, angis i fem intervaller, er basert på generelle
erfaringstall,

---

[d128_d128 | Side [1]]
bruken av et rom fra en 琀椀lla琀琀 bruk 琀椀l en annen. Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
beny琀琀es for å beregne eiendommens verdi. De琀琀e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et rom
fra bod 琀椀l soverom eller arbeidsrom,eller hvis du endrer en bolig 琀椀l to Nyere håndverkstjenester
Den bygningssakkyndige kan avdekke eventuelle separate boliger.
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Fuktproblemer i kjeller og rom under terreng: Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør. Det kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Kjelleren mangler kapillærbrytende sjikt, noe som er vanlig for boliger fra 1946. Utskifting av drenering anbefales på sikt.",
      "evidence": [
        "Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør",
        "Kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Vann svabres enkelt til sluk.",
        "Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt.",
        "Utskifting av drenering anbefales på sikt for en gammel bolig",
        "Fuktsikring og drenering har fått tilstandsgrad 2",
        "Dette indikerer redusert funksjon på drenering og gir grunnlag for videre oppfølging"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R2",
      "description": "Eldre taktekking og takkonstruksjon uten moderne diffusjonsåpent undertak: Taket har passert over halvparten av forventet levetid. Undertaket består kun av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak. Dette øker risikoen for fuktskader i takkonstruksjonen. Tilstandsgrad 2 er gitt.",
      "evidence": [
        "Taktekking og takkonstruksjon: Eldre, passert over halvparten av forventet levetid",
        "Undertaket kun består av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak",
        "Taktekking har fått tilstandsgrad 2",
        "Fremtidige kostnader må påregnes, spesielt for drenering og tak på sikt",
        "Blikkenslager bekrefter at undertaket kun består av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R3",
      "description": "Ulovlige/ikke-søkte bygningsendringer: Planløsningen avviker fra godkjente byggetegninger, både for første og andre etasje. En bærende vegg er flyttet uten at tiltaket er omsøkt eller meldt til kommunen. Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det foreligger heller ikke tegninger på den opprinnelige boligen.",
      "evidence": [
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
        "Endring av planløsning i første etasje og endring av planløsning i andre etasje.",
        "Eier opplyser at i forbindelse med ombygging av planløsningen i andre etasje er én lastbærende vegg flyttet for å endre romdeling.",
        "Tiltaket er ikke omsøkt eller meldt til kommunen.",
        "Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det anbefales å melde inn ny planløsning til kommunen.",
        "Det er ikke fremlagt tegninger på den opprinnelige boligen.",
        "Kjøper overtar ansvar for eventuell videre oppfølging overfor kommunen dersom det skulle oppstå behov for fremtidig dokumentasjon."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R4",
      "description": "Terrengfall mot grunnmur og garasje: Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning mot grunnmuren. Justering av terreng anbefales for å redusere risiko for vannansamling. Tilstandsgrad 2 er gitt.",
      "evidence": [
        "Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning.",
        "Justering av terreng anbefales for å redusere risiko for vannansamling.",
        "Det bør foretas terrengjusteringer. En justering av terrenget vil være nødvendig for å lukke avviket.",
        "Kostnadsestimat: Under 20 000"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R5",
      "description": "Råteskade avdekket i yttervegg: Under rivningsarbeid ble det oppdaget en råteskade i yttervegg. Risiko for skjulte råteskader i veggkonstruksjonen kan ikke utelukkes, særlig gitt at ny panel er montert direkte på eksisterende eldre panel.",
      "evidence": [
        "Under rivningsarbeidene ble det oppdaget en råteskade i yttervegg",
        "Den synlige panelen er montert direkte på eksisterende eldre panel.",
        "Uten tilstrekkelig lufting bak bordkledningen kan fuktighet som trenger inn bak bordene eller gjennom veggen innenfra ikke tørke opp. Dette skaper ideelle forhold for råtesopp og muggvekst.",
        "Veggkonstruksjon har fått tilstandsgrad 2",
        "Det er lokalt skiftet ut utvendig kledning med elde og slitasje"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R6",
      "description": "Sprekk i grunnmur: Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Sprekken er nå overmalt og ikke visuelt synlig, noe som gjør det vanskelig å vurdere om den har utviklet seg videre. Løs puss og avskalling er også registrert.",
      "evidence": [
        "Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Denne er nå overmalt og ikke visuelt synlig.",
        "Den er typisk for en bolig fra 1946 og indikerer normal aldring av betongkonstruksjonen.",
        "Det er registrert løs puss og noe avskalling på grunnmur i kjeller. Forholdet vurderes ikke som alvorlig og krever normalt kun lokal utbedring."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R7",
      "description": "Eldre garasjeport og dør med passert forventet levetid: Garasjeporten og døren til garasjen er av ukjent alder og har passert forventet levetid. Utskifting må påregnes i nær fremtid. Tilstandsgrad 2 er gitt med kostnadsestimat 20 000–100 000 kr.",
      "evidence": [
        "Alderen på porten og døren har passert den forventede levetiden.",
        "Porten og døren fungerer som de skal, men på grunn av alderen må det regnes med en utskifting i tiden som kommer.",
        "Kostnadsestimat: 20 000 - 100 000"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R8",
      "description": "Bindende strømavtale (Norgespris) med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers valgfrihet for strømleverandør i bindingsperioden.",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026.",
        "Avtalen følger boligen, og må derfor overtas av kjøper.",
        "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året. Norgespris har et forbrukstak på 5 000 kWh per måned for husholdninger.",
        "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R9",
      "description": "Veirett over eiendommen og delt vedlikeholdsansvar: Det er tinglyst veirett fra hovedvei over eiendommen 16A til eiendommen 16B. Vedlikeholdsutgifter for veien deles mellom eiendommene 16A og 16B, noe som innebærer løpende kostnader og potensielle konflikter med nabo.",
      "evidence": [
        "Det er tinglyst veirett fra hovedvei over eiendommen 16 A til eiendommen 16 B.",
        "Vedlikeholdsutgifter for veien deles mellom eiendommene 16 A og 16 B.",
        "Den som bruker veien skal dekke sin forholdsmessige del av drift og vedlikehold. Tinglysningen kan ikke oppheves uten samtykke fra Nannestad kommune."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R10",
      "description": "Balkong med rekkverk lavere enn dagens krav og aldrende tettesjikt: Rekkverket på balkong/terrasse er lavere enn dagens krav, og tettesjiktet på balkong i 2. etasje er aldrende. Selv om utbedring ikke er pålagt, utgjør dette en sikkerhetsrisiko og risiko for fremtidige fuktskader.",
      "evidence": [
        "Rekkverk lavere enn dagens krav (ikke pålagt utbedring), samt aldrende tettesjikt på balkong i 2. etasje.",
        "Balkonger, terrasser og rom under balkonger har fått tilstandsgrad 2"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R11",
      "description": "Ukjent byggegrunn: Byggegrunn er ukjent, noe som innebærer usikkerhet knyttet til grunnforholdene under boligen. Dette kan ha betydning for fundamentering og fremtidige setningsskader.",
      "evidence": [
        "Ukjent byggegrunn",
        "Det bør foretas terrengjusteringer. En justering av terrenget vil være nødvendig for å lukke avviket."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R12",
      "description": "Skjulte konstruksjoner og begrensninger i tilstandsrapporten: Rapporten dekker ikke alle deler av boligen. Det er ikke foretatt åpning av vegger eller andre bygningsdeler, og skjulte avvik kan finnes uten å være nevnt. Horisontal- og vertikalmålinger av gulv, vegger og himlinger er ikke utført, og skjevheter er ikke dokumentert.",
      "evidence": [
        "Rapporten beskriver ikke alle deler av boligen, og avvik eller skader kan fortsatt finnes uten å være nevnt.",
        "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
        "Horisontal- og vertikalmålinger av gulv, vegger, himlinger og andre konstruksjoner inngår ikke i dette oppdraget. Skjevheter er derfor ikke dokumentert.",
        "Det kan være avvik/skader som ikke er avdekket."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R13",
      "description": "Energikarakter G (dårligste klasse): Boligen har energikarakter G, som er den dårligste energiklassen. Dette indikerer høyt energiforbruk og kan medføre betydelige strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: G",
        "Energifarge: Gul"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R14",
      "description": "Tidligere fukt-, mugg- og soppskader i kjeller: Det har tidligere vært problemer med mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon. Selv om tiltak er utført (nye klaffventiler), kan risikoen for gjentakelse ikke utelukkes gitt boligens alder og manglende kapillærbrytende sjikt.",
      "evidence": [
        "Tidligere fuktproblemer grunnet manglende ventilasjon; mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon",
        "Nye klaffventiler er montert i kjeller",
        "Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt."
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.89
    },
    {
      "risk_id": "R15",
      "description": "Nedløp og beslag med tilstandsgrad 2: Renner, nedløpsrør og beslag i metall har fått tilstandsgrad 2, noe som indikerer avvik som kan kreve tiltak og medføre kostnader på 20 000–100 000 kr.",
      "evidence": [
        "Nedløp og beslag har fått tilstandsgrad 2",
        "Renner og nedløpsrør i stål utførelse. Type: Takrenner, nedløp og øvrige beslag i metall.",
        "Kostnadsestimat: 20 000 - 100 000"
      ],
      "source_documents": [
        "d128_d128"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    }
  ],
  "re_retrieval_queries": [
    "tilstandsgrad 3 alvorlige avvik Gamle Dalsveg 16B",
    "elektrisk anlegg samsvarserklæring tilstand",
    "radonmåling resultat Gamle Dalsveg 16B",
    "vinduer dører tilstandsgrad alder",
    "garasje tilstand konstruksjon avvik",
    "branntekniske forhold brannceller rømningsvei",
    "energikarakter G tiltak energimerking",
    "norgespris bindingstid konsekvenser kjøper",
    "ukjent byggegrunn setningsskader fundamentering",
    "sprekk grunnmur utvikling alvorlighetsgrad"
  ],
  "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Fuktproblemer i kjeller (0.97):** Meget godt dokumentert. Flere uavhengige kilder bekrefter forhøyede fuktverdier, vanninntrengning, manglende kapillærbrytende sjikt og TG2 på fuktsikring/drenering. Confidence opprettholdes på 0.97.\n\n**R2 – Eldre taktekking uten diffusjonsåpent undertak (0.96):** Godt dokumentert. Blikkenslager bekrefter manglende moderne undertak, TG2 er gitt, og fremtidige kostnader er eksplisitt nevnt. Confidence opprettholdes på 0.96.\n\n**R3 – Ulovlige/ikke-søkte bygningsendringer (0.97):** Meget godt dokumentert. Avvik fra godkjente tegninger, bærende vegg flyttet uten søknad, kjøper overtar ansvar. Confidence opprettholdes på 0.97.\n\n**R4 – Terrengfall mot grunnmur (0.93):** Godt dokumentert med direkte sitat og kostnadsestimat. Confidence opprettholdes på 0.93.\n\n**R5 – Råteskade i yttervegg (0.92):** Godt dokumentert. Råteskade bekreftet under rivning, panel montert direkte på eldre panel uten lufting, TG2 på veggkonstruksjon. Confidence opprettholdes på 0.92.\n\n**R6 – Sprekk i grunnmur (0.85):** Dokumentert, men rapporten karakteriserer sprekken som \"typisk for en bolig fra 1946\" og \"normal aldring\". Løs puss og avskalling er registrert, men vurderes ikke som alvorlig. Risikoen er reell men noe overdrevet i confidence – justeres ned til 0.78 da rapporten selv nedtoner alvorlighetsgraden.\n\n**R7 – Eldre garasjeport og dør (0.88):** Godt dokumentert med TG2 og kostnadsestimat. Confidence opprettholdes på 0.88.\n\n**R8 – Bindende strømavtale Norgespris (0.90):** Meget godt dokumentert. Viktig tilleggsinformasjon: bortfall av strømstøtte ved Norgespris-avtale er en ekstra risikofaktor som styrker risikoen. Confidence opprettholdes på 0.90.\n\n**R9 – Veirett og delt vedlikeholdsansvar (0.88):** Godt dokumentert. Tinglyst, kan ikke oppheves uten kommunens samtykke. Confidence opprettholdes på 0.88.\n\n**R10 – Balkong med lavt rekkverk og aldrende tettesjikt (0.87):** Dokumentert med TG2. Confidence opprettholdes på 0.87.\n\n**R11 – Ukjent byggegrunn (0.82):** Svakt dokumentert. Eneste evidens er \"Ukjent byggegrunn\" og terrengjusteringsanbefaling. Ingen informasjon om setningsskader eller faktiske grunnproblemer. Justeres ned til 0.70 da risikobeskrivelsen (setningsskader, fundamenteringsproblemer) ikke er direkte støttet av dokumentene – kun ukjent status er bekreftet.\n\n**R12 – Skjulte konstruksjoner og rapportbegrensninger (0.91):** Meget godt dokumentert med eksplisitte metodebegrensninger. Confidence opprettholdes på 0.91.\n\n**R13 – Energikarakter G (0.93):** Dokumentert med energikarakter G og gul energifarge. Merk: Energifarge \"Gul\" er ikke den dårligste fargen (rød er dårligst), men karakter G er dårligst på karakterskalaen. Beskrivelsen er noe upresis. Justeres ned til 0.88 da \"dårligste klasse\" er korrekt for bokstav G, men energifarge gul er ikke dårligst mulig.\n\n**R14 – Tidligere fukt-, mugg- og soppskader (0.89):** Godt dokumentert. Tiltak er utført (klaffventiler), men grunnproblemet (manglende kapillærbrytende sjikt) er ikke løst. Confidence opprettholdes på 0.89.\n\n**R15 – Nedløp og beslag TG2 (0.85):** Godt dokumentert med TG2 og kostnadsestimat. Confidence opprettholdes på 0.85.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Bortfall av strømstøtte ved Norgespris-avtale (delvis dekket i R8, men fortjener egen omtale)\n2. Elektrisk anlegg – selv om det er nytt, bør samsvarserklæring verifiseres\n3. Radonmåling – spørsmål 21 i egenerklæringen er besvart, men resultatet er ikke dokumentert i de tilgjengelige chunkene\n4. Branntekniske forhold – rapporten nevner brannceller og rømningsvei, men dette er ikke identifisert som risiko\n5. Nabotomt (16A) til salgs – kan påvirke fremtidig bruk og nærhet\n\nRe-retrieval-spørsmål er formulert for å avdekke disse potensielt manglende risikoene.\n"
}

## Raw Response
```json
{
  "id": "msg_01T8VjhsYBeWadjwah8LNauN",
  "container": null,
  "content": [
    {
      "id": "toolu_01V3cwAosjDNgZK3yRpjhKqe",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Fuktproblemer i kjeller og rom under terreng: Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør. Det kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Kjelleren mangler kapillærbrytende sjikt, noe som er vanlig for boliger fra 1946. Utskifting av drenering anbefales på sikt.",
            "evidence": [
              "Det er påvist forhøyede fuktverdier i kjeller, og eier opplyser om tidligere vanninntrengning ved kraftig nedbør",
              "Kan forekomme vannopptrekk ved vårløsning og kraftig nedbør (inntil ca. 5 cm). Vann svabres enkelt til sluk.",
              "Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt.",
              "Utskifting av drenering anbefales på sikt for en gammel bolig",
              "Fuktsikring og drenering har fått tilstandsgrad 2",
              "Dette indikerer redusert funksjon på drenering og gir grunnlag for videre oppfølging"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R2",
            "description": "Eldre taktekking og takkonstruksjon uten moderne diffusjonsåpent undertak: Taket har passert over halvparten av forventet levetid. Undertaket består kun av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak. Dette øker risikoen for fuktskader i takkonstruksjonen. Tilstandsgrad 2 er gitt.",
            "evidence": [
              "Taktekking og takkonstruksjon: Eldre, passert over halvparten av forventet levetid",
              "Undertaket kun består av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak",
              "Taktekking har fått tilstandsgrad 2",
              "Fremtidige kostnader må påregnes, spesielt for drenering og tak på sikt",
              "Blikkenslager bekrefter at undertaket kun består av gammelt tretak med over- og underligger, uten moderne diffusjonsåpent undertak"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R3",
            "description": "Ulovlige/ikke-søkte bygningsendringer: Planløsningen avviker fra godkjente byggetegninger, både for første og andre etasje. En bærende vegg er flyttet uten at tiltaket er omsøkt eller meldt til kommunen. Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det foreligger heller ikke tegninger på den opprinnelige boligen.",
            "evidence": [
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.",
              "Endring av planløsning i første etasje og endring av planløsning i andre etasje.",
              "Eier opplyser at i forbindelse med ombygging av planløsningen i andre etasje er én lastbærende vegg flyttet for å endre romdeling.",
              "Tiltaket er ikke omsøkt eller meldt til kommunen.",
              "Endringene gjelder både bærende og ikke-bærende vegger og er delvis søknadspliktige. Det anbefales å melde inn ny planløsning til kommunen.",
              "Det er ikke fremlagt tegninger på den opprinnelige boligen.",
              "Kjøper overtar ansvar for eventuell videre oppfølging overfor kommunen dersom det skulle oppstå behov for fremtidig dokumentasjon."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R4",
            "description": "Terrengfall mot grunnmur og garasje: Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning mot grunnmuren. Justering av terreng anbefales for å redusere risiko for vannansamling. Tilstandsgrad 2 er gitt.",
            "evidence": [
              "Terrenget har delvis fall mot grunnmur og garasje, noe som kan føre til økt fuktbelastning.",
              "Justering av terreng anbefales for å redusere risiko for vannansamling.",
              "Det bør foretas terrengjusteringer. En justering av terrenget vil være nødvendig for å lukke avviket.",
              "Kostnadsestimat: Under 20 000"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R5",
            "description": "Råteskade avdekket i yttervegg: Under rivningsarbeid ble det oppdaget en råteskade i yttervegg. Risiko for skjulte råteskader i veggkonstruksjonen kan ikke utelukkes, særlig gitt at ny panel er montert direkte på eksisterende eldre panel.",
            "evidence": [
              "Under rivningsarbeidene ble det oppdaget en råteskade i yttervegg",
              "Den synlige panelen er montert direkte på eksisterende eldre panel.",
              "Uten tilstrekkelig lufting bak bordkledningen kan fuktighet som trenger inn bak bordene eller gjennom veggen innenfra ikke tørke opp. Dette skaper ideelle forhold for råtesopp og muggvekst.",
              "Veggkonstruksjon har fått tilstandsgrad 2",
              "Det er lokalt skiftet ut utvendig kledning med elde og slitasje"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R6",
            "description": "Sprekk i grunnmur: Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Sprekken er nå overmalt og ikke visuelt synlig, noe som gjør det vanskelig å vurdere om den har utviklet seg videre. Løs puss og avskalling er også registrert.",
            "evidence": [
              "Det ble oppdaget en sprekk i grunnmuren under kjøkkenvinduet ved forrige eierskifte. Denne er nå overmalt og ikke visuelt synlig.",
              "Den er typisk for en bolig fra 1946 og indikerer normal aldring av betongkonstruksjonen.",
              "Det er registrert løs puss og noe avskalling på grunnmur i kjeller. Forholdet vurderes ikke som alvorlig og krever normalt kun lokal utbedring."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R7",
            "description": "Eldre garasjeport og dør med passert forventet levetid: Garasjeporten og døren til garasjen er av ukjent alder og har passert forventet levetid. Utskifting må påregnes i nær fremtid. Tilstandsgrad 2 er gitt med kostnadsestimat 20 000–100 000 kr.",
            "evidence": [
              "Alderen på porten og døren har passert den forventede levetiden.",
              "Porten og døren fungerer som de skal, men på grunn av alderen må det regnes med en utskifting i tiden som kommer.",
              "Kostnadsestimat: 20 000 - 100 000"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R8",
            "description": "Bindende strømavtale (Norgespris) med bindingstid som følger boligen: Selger har tegnet avtale om Norgespris med bindingstid til 31.12.2026. Avtalen følger boligen og må overtas av kjøper, noe som begrenser kjøpers valgfrihet for strømleverandør i bindingsperioden.",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026.",
              "Avtalen følger boligen, og må derfor overtas av kjøper.",
              "Norgespris er en ny, statlig ordning, som gir en forutsigbar og fast strømpris på 50 øre per kWh med mva (40 øre uten mva) gjennom året. Norgespris har et forbrukstak på 5 000 kWh per måned for husholdninger.",
              "Når det er tegnet avtale om Norgespris bortfaller eventuell strømstøtte."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R9",
            "description": "Veirett over eiendommen og delt vedlikeholdsansvar: Det er tinglyst veirett fra hovedvei over eiendommen 16A til eiendommen 16B. Vedlikeholdsutgifter for veien deles mellom eiendommene 16A og 16B, noe som innebærer løpende kostnader og potensielle konflikter med nabo.",
            "evidence": [
              "Det er tinglyst veirett fra hovedvei over eiendommen 16 A til eiendommen 16 B.",
              "Vedlikeholdsutgifter for veien deles mellom eiendommene 16 A og 16 B.",
              "Den som bruker veien skal dekke sin forholdsmessige del av drift og vedlikehold. Tinglysningen kan ikke oppheves uten samtykke fra Nannestad kommune."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R10",
            "description": "Balkong med rekkverk lavere enn dagens krav og aldrende tettesjikt: Rekkverket på balkong/terrasse er lavere enn dagens krav, og tettesjiktet på balkong i 2. etasje er aldrende. Selv om utbedring ikke er pålagt, utgjør dette en sikkerhetsrisiko og risiko for fremtidige fuktskader.",
            "evidence": [
              "Rekkverk lavere enn dagens krav (ikke pålagt utbedring), samt aldrende tettesjikt på balkong i 2. etasje.",
              "Balkonger, terrasser og rom under balkonger har fått tilstandsgrad 2"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R11",
            "description": "Ukjent byggegrunn: Byggegrunn er ukjent, noe som innebærer usikkerhet knyttet til grunnforholdene under boligen. Dette kan ha betydning for fundamentering og fremtidige setningsskader.",
            "evidence": [
              "Ukjent byggegrunn",
              "Det bør foretas terrengjusteringer. En justering av terrenget vil være nødvendig for å lukke avviket."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R12",
            "description": "Skjulte konstruksjoner og begrensninger i tilstandsrapporten: Rapporten dekker ikke alle deler av boligen. Det er ikke foretatt åpning av vegger eller andre bygningsdeler, og skjulte avvik kan finnes uten å være nevnt. Horisontal- og vertikalmålinger av gulv, vegger og himlinger er ikke utført, og skjevheter er ikke dokumentert.",
            "evidence": [
              "Rapporten beskriver ikke alle deler av boligen, og avvik eller skader kan fortsatt finnes uten å være nevnt.",
              "Det gjøres ikke nærmere undersøkelser slik som åpning av vegger eller andre bygningsdeler.",
              "Horisontal- og vertikalmålinger av gulv, vegger, himlinger og andre konstruksjoner inngår ikke i dette oppdraget. Skjevheter er derfor ikke dokumentert.",
              "Det kan være avvik/skader som ikke er avdekket."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R13",
            "description": "Energikarakter G (dårligste klasse): Boligen har energikarakter G, som er den dårligste energiklassen. Dette indikerer høyt energiforbruk og kan medføre betydelige strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: G",
              "Energifarge: Gul"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R14",
            "description": "Tidligere fukt-, mugg- og soppskader i kjeller: Det har tidligere vært problemer med mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon. Selv om tiltak er utført (nye klaffventiler), kan risikoen for gjentakelse ikke utelukkes gitt boligens alder og manglende kapillærbrytende sjikt.",
            "evidence": [
              "Tidligere fuktproblemer grunnet manglende ventilasjon; mugg og sopp på vegger som følge av fukt og manglende luftsirkulasjon",
              "Nye klaffventiler er montert i kjeller",
              "Kjelleren har forhøyede fuktverdier som er vanlige for en bolig fra 1946 uten kapillærbrytende sjikt."
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.89
          },
          {
            "risk_id": "R15",
            "description": "Nedløp og beslag med tilstandsgrad 2: Renner, nedløpsrør og beslag i metall har fått tilstandsgrad 2, noe som indikerer avvik som kan kreve tiltak og medføre kostnader på 20 000–100 000 kr.",
            "evidence": [
              "Nedløp og beslag har fått tilstandsgrad 2",
              "Renner og nedløpsrør i stål utførelse. Type: Takrenner, nedløp og øvrige beslag i metall.",
              "Kostnadsestimat: 20 000 - 100 000"
            ],
            "source_documents": [
              "d128_d128"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          }
        ],
        "re_retrieval_queries": [
          "tilstandsgrad 3 alvorlige avvik Gamle Dalsveg 16B",
          "elektrisk anlegg samsvarserklæring tilstand",
          "radonmåling resultat Gamle Dalsveg 16B",
          "vinduer dører tilstandsgrad alder",
          "garasje tilstand konstruksjon avvik",
          "branntekniske forhold brannceller rømningsvei",
          "energikarakter G tiltak energimerking",
          "norgespris bindingstid konsekvenser kjøper",
          "ukjent byggegrunn setningsskader fundamentering",
          "sprekk grunnmur utvikling alvorlighetsgrad"
        ],
        "reasoning": "\nGjennomgang av alle 15 identifiserte risikoer mot dokumentevidensen:\n\n**R1 – Fuktproblemer i kjeller (0.97):** Meget godt dokumentert. Flere uavhengige kilder bekrefter forhøyede fuktverdier, vanninntrengning, manglende kapillærbrytende sjikt og TG2 på fuktsikring/drenering. Confidence opprettholdes på 0.97.\n\n**R2 – Eldre taktekking uten diffusjonsåpent undertak (0.96):** Godt dokumentert. Blikkenslager bekrefter manglende moderne undertak, TG2 er gitt, og fremtidige kostnader er eksplisitt nevnt. Confidence opprettholdes på 0.96.\n\n**R3 – Ulovlige/ikke-søkte bygningsendringer (0.97):** Meget godt dokumentert. Avvik fra godkjente tegninger, bærende vegg flyttet uten søknad, kjøper overtar ansvar. Confidence opprettholdes på 0.97.\n\n**R4 – Terrengfall mot grunnmur (0.93):** Godt dokumentert med direkte sitat og kostnadsestimat. Confidence opprettholdes på 0.93.\n\n**R5 – Råteskade i yttervegg (0.92):** Godt dokumentert. Råteskade bekreftet under rivning, panel montert direkte på eldre panel uten lufting, TG2 på veggkonstruksjon. Confidence opprettholdes på 0.92.\n\n**R6 – Sprekk i grunnmur (0.85):** Dokumentert, men rapporten karakteriserer sprekken som \"typisk for en bolig fra 1946\" og \"normal aldring\". Løs puss og avskalling er registrert, men vurderes ikke som alvorlig. Risikoen er reell men noe overdrevet i confidence – justeres ned til 0.78 da rapporten selv nedtoner alvorlighetsgraden.\n\n**R7 – Eldre garasjeport og dør (0.88):** Godt dokumentert med TG2 og kostnadsestimat. Confidence opprettholdes på 0.88.\n\n**R8 – Bindende strømavtale Norgespris (0.90):** Meget godt dokumentert. Viktig tilleggsinformasjon: bortfall av strømstøtte ved Norgespris-avtale er en ekstra risikofaktor som styrker risikoen. Confidence opprettholdes på 0.90.\n\n**R9 – Veirett og delt vedlikeholdsansvar (0.88):** Godt dokumentert. Tinglyst, kan ikke oppheves uten kommunens samtykke. Confidence opprettholdes på 0.88.\n\n**R10 – Balkong med lavt rekkverk og aldrende tettesjikt (0.87):** Dokumentert med TG2. Confidence opprettholdes på 0.87.\n\n**R11 – Ukjent byggegrunn (0.82):** Svakt dokumentert. Eneste evidens er \"Ukjent byggegrunn\" og terrengjusteringsanbefaling. Ingen informasjon om setningsskader eller faktiske grunnproblemer. Justeres ned til 0.70 da risikobeskrivelsen (setningsskader, fundamenteringsproblemer) ikke er direkte støttet av dokumentene – kun ukjent status er bekreftet.\n\n**R12 – Skjulte konstruksjoner og rapportbegrensninger (0.91):** Meget godt dokumentert med eksplisitte metodebegrensninger. Confidence opprettholdes på 0.91.\n\n**R13 – Energikarakter G (0.93):** Dokumentert med energikarakter G og gul energifarge. Merk: Energifarge \"Gul\" er ikke den dårligste fargen (rød er dårligst), men karakter G er dårligst på karakterskalaen. Beskrivelsen er noe upresis. Justeres ned til 0.88 da \"dårligste klasse\" er korrekt for bokstav G, men energifarge gul er ikke dårligst mulig.\n\n**R14 – Tidligere fukt-, mugg- og soppskader (0.89):** Godt dokumentert. Tiltak er utført (klaffventiler), men grunnproblemet (manglende kapillærbrytende sjikt) er ikke løst. Confidence opprettholdes på 0.89.\n\n**R15 – Nedløp og beslag TG2 (0.85):** Godt dokumentert med TG2 og kostnadsestimat. Confidence opprettholdes på 0.85.\n\n**Manglende risikoer som burde vært identifisert:**\n1. Bortfall av strømstøtte ved Norgespris-avtale (delvis dekket i R8, men fortjener egen omtale)\n2. Elektrisk anlegg – selv om det er nytt, bør samsvarserklæring verifiseres\n3. Radonmåling – spørsmål 21 i egenerklæringen er besvart, men resultatet er ikke dokumentert i de tilgjengelige chunkene\n4. Branntekniske forhold – rapporten nevner brannceller og rømningsvei, men dette er ikke identifisert som risiko\n5. Nabotomt (16A) til salgs – kan påvirke fremtidig bruk og nærhet\n\nRe-retrieval-spørsmål er formulert for å avdekke disse potensielt manglende risikoene.\n"
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
    "input_tokens": 19937,
    "output_tokens": 5950,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
