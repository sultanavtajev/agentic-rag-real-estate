# Trace: agentic_reflecting_iter1
- **Run ID:** 12ecfd16-25f4-4844-8d2e-e6bd9f6d0858
- **Tidspunkt:** 2026-03-26T11:22:35.490345+00:00
- **Varighet:** 104.61s
- **Input tokens:** 20218
- **Output tokens:** 5420

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
Risiko 1: Tvangssal – avgrensa kjøparrettar og ingen avhendingslov
  Confidence: 1.0
  Evidens: Dette er eit tvangssal gjennom Sogn og Fjordane tingrett; Kjøparen har avgrensa mogelegheit til å gjera gjeldande manglar ved eit tvangssal (avhendingslova gjeld ikkje); det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast; Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar

Risiko 2: To tinglyste tvangssalgsbegjæringer på eiendommen
  Confidence: 1.0
  Evidens: 2025/729835-1/200 **TVANGSSALG BESLUTTET 26.06.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-060644TVA-TSOF/TSOG; 2025/983711-1/200 **TVANGSSALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-023089TVA-TSOF/TSOG

Risiko 3: Store pengeheftelser – pantedokumenter til Sogndal kommune på til sammen NOK 3 450 000
  Confidence: 1.0
  Evidens: 2021/1610637-1/200 PANTEDOKUMENT 22.12.2021 BELØP: NOK 3 200 000 PANTHAVER: SOGNDAL KOMMUNE; 2022/344010-1/200 PANTEDOKUMENT 29.03.2022 BELØP: NOK 250 000 PANTHAVER: SOGNDAL KOMMUNE

Risiko 4: Eiendommen ligger i rasfarlig og skredutsatt område
  Confidence: 1.0
  Evidens: Eigedomen ligg i eit rasfarleg og skredutsett område; For dette området er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32

Risiko 5: Store eller alvorlige avvik (TG3) på flere bygningsdeler – takkonstruksjon/loft, balkonger/terrasser, rom under terreng og ventilasjon
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft; Utvendig > Balkonger, terrasser og rom under balkonger; Innvendig > Rom Under Terreng; Tekniske installasjoner > Ventilasjon

Risiko 6: Frostskade på toalett og manglende funksjonstest av VA-anlegg
  Confidence: 1.0
  Evidens: Bustaden har stått ubudd ei tid, og det er mellom anna avdekka frostskade på toalett; Det er ikkje utført funksjonstest på VA-anlegget grunna dette

Risiko 7: Manglende tettesjikt/membran på våtrom – bad og vaskerom ikke tilfredsstillende
  Confidence: 1.0
  Evidens: Våtrommet har ikkje tettesjikt, renovering er påbegynt; Ikkje synleg membran ved sluk – UNDERETASJE > VASKEROM; Hulltaking er ikke foretatt da det allerede er påvist andre avvik

Risiko 8: Ingen lufting i takkonstruksjonen – risiko for fukt og råteskader
  Confidence: 0.95
  Evidens: Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida; Isolasjon tettar mellom sperr og hindrar lufting; Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol

Risiko 9: Utvendige VA-ledninger har passert mer enn halvparten av forventet brukstid – ukjent alder og utføring
  Confidence: 0.95
  Evidens: Ein har ikkje informasjon om alder og utføring av utv. VA anlegg. Føreset at anlegget frå byggjeår med den tids utføring; Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger; Mer enn halvparten av forventet brukstid er [passert]

Risiko 10: Manglende ferdigattest for eiendommen
  Confidence: 1.0
  Evidens: Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv; Informasjon om manglande ferdigattest/midlertidig attest

Risiko 11: Egenerklæring fra eier mangler – begrenset informasjon om eiendommens tilstand
  Confidence: 1.0
  Evidens: Oppdraget er et tvangssalg. Egenerklæring er ikke utfylt, og eierinformasjonen er dermed begrenset; Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600

Risiko 12: Mangler på brannslokningsutstyr og røykvarslere
  Confidence: 1.0
  Evidens: Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja; Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja; Er det skader på røykvarslere? Ja – Batteri må skiftast

Risiko 13: Elektrisk anlegg ikke kontrollert – anbefalt el-sjekk av fagkyndig
  Confidence: 0.95
  Evidens: Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning; Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd og såleis ikkje medrekna i kalkyle

Risiko 14: Ukjent drenering og fuktrisiko rundt grunnmur
  Confidence: 0.9
  Evidens: Det er synleg knotteplast på del av grunnmur. Ein har ikkje informasjon om dreneringa er teken att etter oppføring; Det bør foretas nærmere undersøkelser av tomta når den er snøfri. Ein må sikra god avrenning frå bygningen

Risiko 15: Oppgraderinger utført uten dokumentasjon – ukjent omfang og lovlighet
  Confidence: 0.9
  Evidens: det er gjort nokon oppgraderingar både innvendig og utvending utan nærare dokumentasjon; Arbeidet med oppgradering er ikkje sluttført, det gjenstår framleis ein del; Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar, eller om eventuelle ombygging krev godkjenning

Risiko 16: Kjøper bærer risiko for eventuelle konsesjonskrav
  Confidence: 0.85
  Evidens: Kjøparen ber risiko for eventuelle konsesjonskrav

Risiko 17: Ingen forsikringsdokumentasjon fremlagt for eiendommen
  Confidence: 0.85
  Evidens: Ikkje opplyst – Forsikring; Ikkje framlagd forsikringsdokument

Risiko 18: Risiko for at løsøre og tilbehør mangler ved overtakelse
  Confidence: 0.9
  Evidens: medhjelpar ikkje stå inne for at lausøyre og tilbehøyr som etter hovudregelen skal følgje eigedomen og som er til stades på visningstidspunkt, vil vere til stades på overtakingstidspunkt; Eventuelt manglande lausøyre og tilbehøyr kan ikkje gjerast gjeldande som ein mangel

Risiko 19: Eiendommen kan ikke selgerforsikres – ingen bustadseljarforsikring mulig
  Confidence: 1.0
  Evidens: Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal

Risiko 20: Energimerking rød G – svært dårlig energistandard med forventede høye energikostnader
  Confidence: 1.0
  Evidens: Energimerking: Raud – (G)

Risiko 21: Mulig grunnforurensning ikke registrert – kan likevel forekomme
  Confidence: 0.7
  Evidens: Ingen grunnforurensing registrert på matrikkelenheten; Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen

Risiko 22: Ukjente utinglyste forpliktelser og ikke-endelige offentlige planer kan foreligge
  Confidence: 0.8
  Evidens: Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar

Risiko 23: Stort fradrag i teknisk verdi – NOK 2 000 000 i fradrag for elde, vedlikeholdsmangler og gjenstående arbeider
  Confidence: 0.9
  Evidens: Fradrag (utidsmessighet, elde, vedlikeholdsmangler, gjenstående arbeider, svekkelser og forskriftsmangler) Kr. - 2 000 000; Normale byggekostnader (utregnet som for nybygg) Kr. 4 650 000; Sum teknisk verdi - Enebolig Kr. 2 650 000

Dokumentkontekst:
[d002_d002 | Side [1]]
edutsett område.
Parkering: Eigedomen har ein garasjeplass, samt ytterlegare
parkeringsmoglegheiter på eiga tomt.
Energimerking: Raud – (G)
Tinglyste plikter
Hefte og servituttar: Det visast til vedlagt utskrift frå eigedomsregisteret.
Registrerte pengeheftingar vil bli slettet i samband med
overdraginga, med unntak av de tilfelle kjøpar skal overta
nokre av disse. Kjøpar vil i desse tilfella særskilt bli gjort
merksam på om, og eventuelt, kva for heftingar dette gjeld.
Grunnareal
Tomt: 808,6 m2 (eigd

---

[d002_d002 | Side [1]]
krift.
Servitutter tinglyst på hovedbruket/avgivereiendommen før fradelingsdatoen,
eller før eventuelle arealoverføringer, er heller ikke overført. Disse finner
du på grunnboksutskriften til hovedbruket/avgivereiendommen. For festenummer
gjelder dette servitutter eldre enn festekontrakten.
2021/1610637-1/200 PANTEDOKUMENT
22.12.2021 21.00 BELØP: NOK 3 200 000
PANTHAVER: SOGNDAL KOMMUNE
ORG.NR: 922 121 893
2022/344010-1/200 PANTEDOKUMENT
29.03.2022 11.53 BELØP: NOK 250 000
PANTHAVER: SOGNDAL KOMMUNE
ORG.NR:

---

[d002_d002 | Side [1]]
sveg, takhøgde og liknande.
Medhjelpar har uprøvd lagt til grunn takstmannen sine arealmålingar. Det er følgjeleg ikkje
utført kontroll av bustadsalsrapportens arealmålingar eller utrekningsgrunnlaget for slike.
Medhjelpar kan ikkje haldast ansvarleg ved arealavvik.
Eigedomen blir overtatt fri for pengeheftingar unntatt de som kjøpar skal overta jf. framfor.
Eigedomen vert overtatt med andre eventuelle tinglyste heftingar som måtte kvile på
eigedomen, jf. vedlagte

---

[d002_d002 | Side [1]]
e tinglyste heftingar som måtte kvile på
eigedomen, jf. vedlagte grunnbokutskrift.
__________________________________________________________________________________
Salgsoppgave utferdiget 22.03.26
Gnr. 306 bnr. 34 Sogndal kommune

## Side 10

Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje
endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar.
Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar, eller

---

[d002_d002 | Side [1]]
0.00 TIDLIGERE: KNR:1418 GNR:6 BNR:34
For eventuelle utleggs- og arrestforretninger, samt forbehold tatt ved
avhendelse, som tinglyses samme dag som andre frivillige rettsstiftelser,
gjelder særskilte prioritetsregler, se tinglysingsloven § 20 andre ledd og § 21
tredje ledd.
Side 4 av 4

## Side 40

Utskrift basert på matrikkeldata
Matrikkelenhetens registerbetegnelse og adresse
Matrikkelenhet: Gårdsnr 306, Bruksnr 34 Kommune: 4640 Sogndal
Adresse:
Veiadresse: Fjærestadvegen 15, gatenr 18017 Grunnkrets:

---

[d002_d002 | Side [1]]
ALG BESLUTTET
22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200
GJELDER: KALLOUCHE MOHAMED ALOUATI
F.NR: 070685
GJELDER: MOUSSA KAMAR
F.NR: 270794
TINGRETT: SOGN OG FJORDANE
SAKSNR: 25-023089TVA-TSOF/TSOG
HEFTELSER
Dokumenter fra den manuelle grunnboken som antas å kun ha historisk betydning,
eller som vedrører en matrikkelenhets grenser og areal, er ikke overført til
denne matrikkelenheten sin grunnboksutskrift.
Servitutter tinglyst på hovedbruket/avgivereiendommen før

---

[d002_d002 | Side [1]]
ablert bustadområde like vest for Balestrand sentrum. Området er utbygd med einebustadar av varierande alder.
Adkomstvei
Eiendommen har adkomst via offentlig veg eller gate.
Tilknytning vann
Eiendommen er tilknyttet offentlig vannforsyning via private stikkledninger.
Tilknytning avløp
Eiendommen er tilknyttet offentlig avløpsnett via private stikkledninger.
Regulering
Eiendommen ligger i et område regulert til boligbebyggelse.
Om tomten
Tomta er opparbeida med parkering og noko uteområde.
Tinglyste/andre

---

[d002_d002 | Side [1]]
rt som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed

---

[d002_d002 | Side [1]]
ller om bruken er lovlig, bruksendringer, lysforhold
eller andre sikkerhetsmangler.
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 25 av 25

## Side 36

Grunnboksinformasjon fra Statens kartverk Data uthentet: 22.03.2026 kl. 09.22
Oppdatert per: 22.03.2026 kl. 09.07
Kommune: 4640 SOGNDAL
Gnr: 306 Bnr: 34
Grunnboksinformasjon
HJEMMELSOPPLYSNINGER
Rettighetshavere til eiendomsrett
2021/1610610-1/200 HJEMMEL TIL EIENDOMSRETT
22.12.2021 21.00 VEDERLAG: NOK 2 500 000
KALLOUCHE MOHAMED ALOUATI IDEELL:

---

[d002_d002 | Side [1]]
ikkje er høve til å heve kjøpet, og at
kjøpesummen skal betalast sjølv om prisavslag krevjast.
Det framhevast derfor at det er særskilt viktig at kjøpar gjer
forundersøkingar, herunder at eigedomen undersøkjast
grundig før det blir gitt bod.
__________________________________________________________________________________
Salgsoppgave utferdiget 22.03.26
Gnr. 306 bnr. 34 Sogndal kommune

## Side 7

Ettersom dette er eit tvangssal, kan medhjelpar ikkje stå inne
for at lausøyre og tilbehøyr som etter

---

[d002_d002 | Side [1]]
ensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 26.01.2026 14:51 – Sist oppdatert 26.01.2026 14:51
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 3

## Side 41

Gårdsnummer 306, Bruksnummer 34 i 4640 SOGNDAL kommune
Forretninger:
Type Dato Rolle Matrikkel Arealendring
Annen forretningstype Forretning: 28.06.2023

---

[d002_d002 | Side [1]]
en er ubunden.
Stadfestar retten eit bod, løysast samtidig andre bodgjevarar
frå sine bod. Nektar retten ved kjenning å stadfeste noko bod,
løyasast samtlege bodgjevarar fra sine bod.
Det er retten som tar endeleg stilling til boda.
Manglar: Eigedomen seljast som den er, og ved tvangssal har kjøparen
avgrensa tilgang til å påberope manglar. Lov om avhending av
fast eiendom (avhendingsloven) gjelder ikkje. Det nemnast at
det ved tvangssal ikkje er høve til å heve kjøpet, og at
kjøpesummen skal betalast

---

[d002_d002 | Side [1]]
, kva for heftingar dette gjeld.
Grunnareal
Tomt: 808,6 m2 (eigd tomt)
Bygningane sitt areal og opplysning om alder og byggemåte
Se vedlagte takst: Tilstandsrapport datert 19.12.2025 - vedlegg 1.
Bruksareal (BRA) 164 m2
Internt bruksareal (BRA-i) 132 m2
__________________________________________________________________________________
Salgsoppgave utferdiget 22.03.26
Gnr. 306 bnr. 34 Sogndal kommune

## Side 3

Likningsverdi og offentlege avgifter
Formueverdi: Kommunens likningsgrunnlag pr 2025: kr 2 209

---

[d002_d002 | Side [1]]
MÅ LEVERAST SAMAN MED BODSKJEMA
Adresse: Fjærestadvegen 15, 6899 Balestrand
Gnr. 306 bnr. 34 Sogndal Kommune
Dette er eit tvangssal gjennom Sogn og Fjordane tingrett (nedanfor berre tingretten).
Kjøpesummen skal betalast til advokat Silje Flugheim Heggestad
Kjøparen har avgrensa mogelegheit til å gjera gjeldande manglar ved eit tvangssal (avhendingslova
gjeld ikkje), og det vert difor framheva at det er svært viktig at kjøpar undersøker eigedomen
grundig.
Kjøparen ber risiko for eventuelle konsesjonskrav.

---

[d002_d002 | Side [1]]
ringsinstitusjon nr. 2:
BUDET STÅR VED MAKT:
Ved tvangssalg skal budet iflg. tvangsfullbyrdelsesloven § 11-26 være bindende for byder i minst 6 -seks- uker.
Eiendommen overtas i den stilling den befinner seg, og hvormed budgiver har gjort seg kjent ved besiktigelse. Eiendommen
forutsettes overtatt fri for andre pengeheftelser enn de lån som byder eventuelt skal overta. Ved tvangssalg har kjøper etter
bestemmelser i tvangsfullbyrdelseslovens § 11-39 begrenset adgang til å gjøre innsigelser gjeldende p.g.a.

---

[d002_d002 | Side [1]]
gifter
Formueverdi: Kommunens likningsgrunnlag pr 2025: kr 2 209 200,-
Primærbustad: (25 % av verditakst): kr 775 000,-
Sekundærbustad (100% av verditakst): Kr 3 100 000,-
Offentlege avgifter Kr 9 309,20,- (ekskl. eigedomsskatt)
Eigedomsskatt Kr 8 837,- (basert på kommunens likningsgrunnlag)
Offentlege avgifter totalt Kr 18 146,20,-
Prisantydning og totalkostnadar
Prisantydning Kr 3 100 000
Dokumentavgift 2,5 % Kr 77 500*
Tinglysningsgebyr skjøte/hjemmelsdokument: Kr 545
Tinglysningsgebyr panterett (pr.)

---

[d002_d002 | Side [1]]
og bod.
Eigedomen er i hovudsak oppført med standard og utføring frå
byggjeår, men det er gjort nokon oppgraderingar både
innvendig og utvending utan nærare dokumentasjon.
Bustaden har stått ubudd ei tid, og det er mellom anna
avdekka frostskade på toalett. Det er ikkje utført funksjonstest
på VA-anlegget grunna dette. Det må påreknast utgifter til
vedlikehald og oppgraderingar. Eigedomen ligg i eit rasfarleg
og skredutsett område.
Parkering: Eigedomen har ein garasjeplass, samt

---

[d002_d002 | Side [1]]
TVA-TSOF/TSOG, med advokat Silje Heggestad
oppnemnd som rettsleg medhjelpar.
Adresse: Fjærestadvegen 15, 6899 Balestrand.
Kort skildring: Eigedomen ligg i eit etablert bustadområde like vest for
Balestrand sentrum. Einebustaden er frå 1968, og ligg i eit
utbygd område med einebustadar med varierande aldrar.
Hovudetasjen består av gang, stue/kjøkken, to soverom og eit
bad. Underetasjen rommar to soverom, toalettrom, vaskerom,
gang og bod.
Eigedomen er i hovudsak oppført med standard og utføring

---

[d002_d002 | Side [1]]
a er opparbeida med parkering og noko uteområde.
Tinglyste/andre forhold
Viser til grunnboka.
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Ikkje opplyst
Kommentar
Ikkje framlagd forsikringsdokument.
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 22 av 25

## Side 33

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring Finnes

---

[d002_d002 | Side [1]]
Adresse:
Veiadresse: Fjærestadvegen 15, gatenr 18017 Grunnkrets: 607 Balestrand
6899 Balestrand Valgkrets: 5 Balestrand
Oppdatert: 28.06.2023 Kirkesogn: 7091001 Balestrand
Tettsted: 5541 Balestrand
Eiendomsopplysninger
Matrikkel:
Type: Best. grunneiendom Tinglyst: Ja Reg.landbruksreg.: Nei
Bruksnavn: Utsyn II Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 30.03.1968 Har festegrunn: Nei Seksjonert: Nei
Areal: 808,6 kvm Skyld: 0,01
Arealkilde: Beregnet Areal
Arealmerknad:
Om fullstendighet og

---

[d002_d002 | Side [1]]
g av tilstandsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve tiltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
10
8
6
4
2
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Sammendrag av boligens tilstand
Spesielt for dette oppdraget/rapporten
Oppdraget er et tvangssalg. Egenerklæring er ikke utfylt,

---

[d002_d002 | Side [1]]
For skjulte konstruksjoner vil alder i seg selv Etter avtale kan tilstandsanalysen utvides til også å omfatte
være et symptom som kan gi TG2. For synlige konstruksjoner kan alder tilleggsundersøkelser utover minimumskravet i forskriften.
sammen med andre symptomer og momenter gi TG2. Avvik under TG2
kan gis sjablongmessig anslag.
BEFARINGEN
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kraftige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som
på forhold som man må regne med

---

[d002_d002 | Side [1]]
av byggverk og bygningsdeler som
på forhold som man må regne med trenger utbedring straks eller innen bygningssakkyndig har observert, og som fremkommer av Forskrift til
kort tid. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal avhendingsloven. Rapporten er likevel ingen garanti for at det ikke kan
gis sjablongmessig anslag. finnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
tilstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 til
v)Tilstandsgrad TGiU:Ikke

---

[d002_d002 | Side [1]]
gens lovverk, med fradrag for
utidsmessighet, elde, vedlikeholds mangler,
gjenstående arbeider, tilstandssvekkelser og
forskriftsmangler.
Konklusjon markedsverdi 3 100 000
Les mer om teknisk verdi på siste side i rapporten.
Markedsvurdering
Einebustad oppført i 1968 med den tids tekniske standard. Etter oppføring er det gjort oppgradering og vedlikehald i ulike bolkar. Einhar ikkje
detaljert informasjon om kva som er gjort og når.
Arbeidet med oppgradering er ikkje sluttført, det gjenstår framleis ein del

---

[d002_d002 | Side [1]]
kan TG2 i Rapportsammendrag være inndelt i TG2
som krever tiltak og de som ikke krever umiddelbare tiltak.
Konstruksjonen har normalt enten feil utførelse, en skade eller
symptomer på skade, sterk slitasje eller nedsatt funksjon. Vedlikehold
TILLEGGSUNDERSØKELSER
eller tiltak trengs i nær fremtid, det er grunn til å varsle fare for skader
på grunn av alder eller overvåke spesielt på grunn av fare for større
skade eller følgeskade. For skjulte konstruksjoner vil alder i seg selv Etter avtale kan

---

[d002_d002 | Side [1]]
g regler som gjaldt da
boligen ble oppført (søknadstidspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
etter normal bruk regnes ikke som avvik.
Hva inneholder tilstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskrift til
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre

---

[d002_d002 | Side [1]]
porten
Oppdraget er et tvangssalg. Egenerklæring er ikke utfylt, og
eierinformasjonen er dermed begrenset.
Faste tekstfelt er skrivne på bokmål ellers er rapporten skriven
på nynorsk.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Enebolig
STORE ELLER ALVORLIGE AVVIK
Utvendig > Takkonstruksjon/Loft Gå til side
Utvendig > Balkonger, terrasser og rom under Gå til side
balkonger
Innvendig > Rom Under Terreng Gå til side
Tekniske installasjoner > Ventilasjon Gå til

---

[d002_d002 | Side [1]]
sje > Stue/kjøkken > Avtrekk Gå til side
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 7 av 25

## Side 18

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapport
ENEBOLIG
Undertaksbord er ikkje ilappa
Byggeår Kommentar
1968 Opplyst ved tidlegare synfaring.
Standard
Bygningen har teknisk standard frå oppføringstidspunkt
Vedlikehold
Det er gjort ein del løpande vedlikehald og utskifting på
eigedommen.
UTVENDIG
Tak er

---

[d002_d002 | Side [1]]
installasjoner i boligen dersom det er mer enn fem år
foreligger dokumentasjon på faglig god utførelse. siden sist boligen hadde el-tilsyn. Bygningssakkyndig kan anbefale å
konsultere offentlige myndigheter eller kvalifisert elektrofaglig
iii)Tilstandsgrad 2, TG2:Vesentlige avvik, og mindre avvik som etter NS fagperson ved behov for grundigere undersøkelser.
3600 gir TG 2, men som ikke nødvendigvis krever umiddelbare tiltak. I
denne rapporten kan TG2 i Rapportsammendrag være inndelt i TG2
som krever tiltak

---

[d002_d002 | Side [1]]
aksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapport
• Det bør foretas nærmere undersøkelser av tomta når den er snøfri.
Ein må sikra god avrenning frå bygningen.
Utvendige vann- og avløpsledninger
Ein har ikkje informasjon om alder og utføring av utv. VA anlegg. Føreset
at anlegget frå byggjeår med den tids utføring.
Vurdering av avvik:
• Mer enn halvparten av forventet brukstid er passert på utvendige
avløpsledninger.
• Mer enn halvparten av forventet brukstid er

---

[d002_d002 | Side [1]]
etasje og sokkeletasje)
fremgår av tilstandsgradene. eller andre bygningsdeler skjer etter eiers aksept. Hulltaking av våtrom
• Tilstanden angis i rapporten og gir uttrykk for en gitt forventet tilstand og rom under terreng kan unntaksvis unnlates, se Forskrift til
blant annet vurdert ut fra alder og normal bruk slik: Avhendingsloven.
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I tillegg må • Kontroll av romfunksjoner for P-ROM utføres kun når det ikke
bygningsdelen være tilnærmet ny, mindre enn 5 år,

---

[d002_d002 | Side [1]]
om, Garasje, Vaskerom eiendomsmarkedet på vurderingstidspunkt. I tilfelle
det er andel fellesgjeld/fellesformue, borett, bruksrett
eller festet tomt, er det gjort fradrag/tillegg for dette.
Detaljert oppstilling over areal finnes i rapporten.
Les mer om markedsverdi på siste side i rapporten.
Teknisk verdi bygninger, med tomteverdi Markedsverdi 3 100 000
Kr 3 150 000
Kostnaden ved å oppføre et tilsvarende bygg i
henhold til dagens lovverk, med fradrag for
utidsmessighet, elde, vedlikeholds

---

[d002_d002 | Side [1]]
ierande alder og utforming. Kobla vindauge i del av
Vurdering av avvik: kjellar, vindauge frå byggjeår på baderom i 1. etg. 2 lags og 3 lags glas i
• Det er ingen lufting i konstruksjonen. måla trekarm.
Det er ikkje lufting langs raft. Raftekasse er tett på baksida, på nedsida
Vurdering av avvik:
er det spalte. Isolasjon tettar mellom sperr og hindrar lufting.
• Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.
Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol.
• Det er påvist

---

[d002_d002 | Side [1]]
de: 3 av 25

## Side 14

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Dette trenger du å vite om tilstandsrapporten
Tilstanden vurderes med ulike tilstandsgrader
Tilstanden gir uttrykk for en gitt forventet tilstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av tilstandsgrad. Grunnen er at bygningen eller

---

[d002_d002 | Side [1]]
dvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapport
Frostsprengd toalett
UNDERETASJE > VASKEROM
Ikkje synleg membran ved sluk
ETASJE > BAD Tilliggende konstruksjoner våtrom
Tilliggende konstruksjoner våtrom Våtrommet har ikkje tettesjikt, renovering er påbegynt.
Vurdering av avvik:
Våtrommet har ei utforming som gjer det naudsynt med oppgradering.
• Hulltaking er ikke foretatt da det allerede er påvist andre avvik i
Vurdering av

---

[d002_d002 | Side [1]]
rivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring Finnes ikke Nei
Revisjoner
Versjon Ny versjon Kommentar
1 19.12.2025
For gyldighet på rapporten se forside
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 23 av 25

## Side 34

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapportens avgrensninger
STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER i) sluk, tettesjikt og fall på bad og vaskerom (våtrom)
ii) Forhold rundt

---

[d002_d002 | Side [1]]
unnelse for valg av tilstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad. Når bygningssakkyndige anbefaler tiltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om tiltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger tilstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
tilstandsanalyse ved omsetning av bolig og Forskrift til

---

[d002_d002 | Side [1]]
n når det ikke
bygningsdelen være tilnærmet ny, mindre enn 5 år, og det foreligger foreligger godkjente og byggemeldte tegninger, eller når tegninger ikke
dokumentasjon på faglig god utførelse. stemmer med dagens bruk.
ii)Tilstandsgrad 1, TG1:Mindre avvik. Normal slitasje. Strakstiltak ikke • Bygningssakkyndig gir en forenklet vurdering av branntekniske forhold
nødvendig. TG1 kan gis når bygningsdelen er tilnærmet ny og det ikke og elektriske installasjoner i boligen dersom det er mer enn fem år
foreligger

---

[d002_d002 | Side [1]]
s når delen er ny, men der dokumentasjon på faglig god utførelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk slitasje eller nedsatt
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller tiltak i nær fremtid. Graden skal også brukes
når delen er gammel og det er grunn til å varsle om faren for skader på grunn av alderen, eller når det er grunn
til å overvåke delen

---

[d002_d002 | Side [1]]
joråret, med summer fordelt per
fagområde.Tjenestenevilnormaltha enprisøkninghvertår, samtat forbruk på ulike tjenester kan variere fra år til år.
Gebyr Fakturertbeløpi2025
Avløp 3093,60kr
Eiendomsskatt 8780,00kr
Feiing 670,00kr
Vann 4726,80kr
Sum 17270,40kr
Prognose kommunale gebyrer på eiendommen inneværende år
Fakt.
Vare Mva Grunnlag Enhetspris Andel Korreksjon Årsprognose hittiliår
Vatn60m2>x<110m2 15% 1Stk 2372.45 1/1 0% 2372,45kr 0,00kr
Vatnfastledd 15% 1Abon. 2283.90 1/1 0% 2283,90kr

---

[d002_d002 | Side [1]]
er 2026
EM§6-7 Oppdragstakerensundersøkelses-og opplysningsplikt Kilde:Sogndalkommune
Kommunenr. 4640 Gårdsnr. 306 Bruksnr. 34 Festenr. Seksjonsnr.
Adresse Fjærestadvegen15,6899BALESTRAND
Kommunale gebyrer fakturert på eiendommen i 2025
Kommunalegebyrererenkombinasjon av forskudd, abonnement ogenkeltgebyrer fakturert etter levert tjeneste. Vi kjenner ikke
samletgebyrforeneiendomforetårfør året er omme. Denne rapporten sammenstiller dette for fjoråret, med summer fordelt per
fagområde.Tjenestenevilnormaltha

---

[d002_d002 | Side [1]]
372,45kr 0,00kr
Vatnfastledd 15% 1Abon. 2283.90 1/1 0% 2283,90kr 0,00kr
Avløp60m2x<110m2 15% 1Stk 1773.30 1/1 0% 1773,30kr 0,00kr
Avløpfastledd 15% 1Abon. 2089.55 1/1 0% 2089,55kr 0,00kr
Feiingogtilsynkvart2.år 0% 1Stk 790.00 1/1 0% 790,00kr 0,00kr
Eigedomsskattbustad 0% 2209200 4.00 1/1 0% 8837,00kr 0,00kr
(bustadverdi/FGSkatteetaten) Prom
Sum 18146,20kr 0,00kr
Løpendegebyrbrukesforåfordeleen årlig kostnad påflere innbetalinger.

## Side 122

Mva-feltet gir informasjon om varens merverdiavgiftsats, og

---

[d002_d002 | Side [1]]
odt utviklingspotensiale.
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 18 av 25

## Side 29

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Sammenlignbare salg
EIENDOM SALGSDATO PRISANT PRIS FELLESGJ. TOTALPRIS M² PRIS
Skåsheimsvegen 24 ,6899 BALESTRAND
1 19-09-2021 2 800 000 3 150 000 3 150 000 19 207
164 m² 1984 3 sov
Fjærestad 36 ,6899 BALESTRAND
2 12-09-2021 2 600 000 3 150 000 3 150 000 19 091
165 m² 1978 4

---

[d002_d002 | Side [1]]
iltak
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 17 av 25

## Side 28

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Konklusjon og markedsvurdering
Formål med takseringen: Tvangssalg/konkurssalg
Hovedbyggets BRA/BRA-i Markedsverdi
164 m²/144 m² Kr 3 100 000
Enebolig: 2 Gang, Stue/kjøkken, 4 Soverom, Bad, Bod, Vurdering av hva verdien er i det åpne
Toalettrom, Garasje, Vaskerom eiendomsmarkedet på vurderingstidspunkt. I

---

[d002_d002 | Side [1]]
kningsutstyr i boligen iht. forskriftskrav
Generell kommentar
på søknadstidspunktet, men minst Byggeforskrift 1985?
Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el.
Nei
skekk av fagkunning. Kostnad er knytt til kontroll, evt. reparasjonsbehov
er ikkje kartlagd og såleis ikkje medrekna i kalkyle. 2. Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10
år?
Kostnadsestimat: Under 20 000 Ja
3. Er det mangler på røykvarsler i boligen iht. forskriftskrav

---

[d002_d002 | Side [1]]
Det er montert stålpipe og peisovn i stove.
Bakvegg er påfora og platekledd.
Befaring - og eiendomsopplysninger
Lakka tretrapp med glas rekkverk. Gå til side
Formpressa fyllingsdørar. Tomteverdi og teknisk verdi bygninger 3 150 000
Forutsetninger og vedlegg Gå til side
VÅTROM Gå til side
Lovlighet Gå til side
Bad
Ein har ikkje detaljert info om når våtrommet er oppdatert. Det Enebolig
føreligg ingen dokumentasjon.
• Det foreligger ikke tegninger
Våtrommet har ei utforming som gjer det naudsynt med
Det er

---

[d002_d002 | Side [1]]
net som for nybygg) Kr. 4 650 000
Fradrag (utidsmessighet, elde, vedlikeholdsmangler, gjenstående arbeider, svekkelser og forskriftsmangler) Kr. - 2 000 000
Sum teknisk verdi - Enebolig Kr. 2 650 000
Sum teknisk verdi bygninger Kr. 2 650 000
Tomteverdi
Tomteverdi er en beregnet verdi for tomten slik den fremstår på befaringstidspunktet. Tomteverdien består av normal tomtekostnad i det
aktuelle området og en vurdert verdi for beliggenhet. Normal tomtekostnad fremkommer ved å beregne teknisk verdi for

---

[d002_d002 | Side [1]]
ggenhet, solforhold, utsyn mm. I tillegg vil det også kunne være store forskjeller i teknisk
standard på de sammenlignbare boligene. Utvalget vil også kunne inneholde omsetningspriser som går vesentlig tilbake i tid. De ovennevnte
forskjeller vil derfor være vurdert av takstmann og korrigert for i fastsettelsen basert på en skjønnsmessig vurdering av markedsverdi.
Beregninger
Teknisk verdi bygninger
Enebolig
Normale byggekostnader (utregnet som for nybygg) Kr. 4 650 000
Fradrag (utidsmessighet, elde,

---

[d002_d002 | Side [1]]
set.till.:
Energikilde: BRA annet: Ferdigattest:
Oppvarming: BRA totalt: 100,0 Midl. brukstil.:
Avløp: Har heis: Nei Tatt ibruk (GAB):
Vannforsyning: Tilkn. off. vannverk Antall boliger: 1
Bygningsnr: 177064238 Antall etasjer: 1
Etasjeopplysninger:
Nr Ant. boliger BRA: Bolig Annet Totalt BTA: Bolig Annet Totalt
H01 1 100,0 100,0
Kulturminner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret foretatt 26.01.2026 14:51 – Sist oppdatert 26.01.2026 14:51
Utskriften er levert av:

---

[d002_d002 | Side [1]]
 21.00 VEDERLAG: NOK 2 500 000
KALLOUCHE MOHAMED ALOUATI IDEELL: 1/2
F.NR: 070685
MOUSSA KAMAR IDEELL: 1/2
F.NR: 270794
Påtegning til hjemmelsdokumenter
2025/729835-1/200 **TVANGSSALG BESLUTTET
26.06.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200
GJELDER: KALLOUCHE MOHAMED ALOUATI
F.NR: 070685
GJELDER: MOUSSA KAMAR
F.NR: 270794
TINGRETT: SOGNE OG FJORDANE
SAKSNR: 25-060644TVA-TSOF/TSOG
2025/983711-1/200 **TVANGSSALG BESLUTTET
22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT

---

[d002_d002 | Side [1]]
tadvegen15,6899BALESTRAND
Informasjon om ferdigattest/mellombels bruksløyve
Ferdigattest/mellombelsbruksløyveerikkjeåfinneivårearkiv.
FORBEHOLDVEDUTLEVERINGAVINFORMASJONIFORBINDELSEMEDEIENDOMSFORESPØRSLER:
Dettasforbeholdomatdetkanværeavvikivåreregistreiforholdtildenfaktiskesituasjonenogatdetkanforeliggeforholdomkring
eiendomogbygningersomkommunenikkeerkjentmed.Kommunenkanikkestillesøkonomiskansvarligforbrukavinformasjonsom
oppgisisammenhengmedeiendomsforespørsler.

## Side

---

[d002_d002 | Side [1]]
a
3. Er det mangler på røykvarsler i boligen iht. forskriftskrav på
søknadstidspunktet, men minst Byggeforskrift 1985?
Ja
4. Er det skader på røykvarslere?
Ja Batteri må skiftast.
Kostnadsestimat: Under 20 000
TOMTEFORHOLD
Byggegrunn
Lause kablar, uisolerte
Ein har ikkje detaljert kunnskap om byggegrunn.
Fuktsikring og drenering
Punktet må sees i sammenheng ‘Rom under terreng’
Det er synleg knotteplast på del av grunnmur. Ein har ikkje informasjon
om dreneringa er teken att etter oppføring av

---

[d002_d002 | Side [1]]
ng.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på

---

[d002_d002 | Side [1]]
 mot Sentrum. Storleik ca 32 da. Området har
tidlegare inngått i reguleringsplan for Brattland - Øvre Sande og
kommuneplanen som landbruksområde/LNF-område.
Føresegner
Før området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering).
Ved etablering av avkjøring til riksveg er det krav om tilrettelegging av gangveg langs riksvegen i retning av
Balestrand sentrum før området vert teke i bruk. Det skal leggast til rette for utbygging av småhus som einebustader
eller

---

[d002_d002 | Side [1]]
unnargarden, næringsområde (industri)
Om planområdet
Planområdet ligg på Nessane aust for riksvegbrua. Er eit nytt område for
næring. Storleik ca 10 da.
Føresegner
Før området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering).
Før området kan byggast ut må området vurderast med omsyn på flaumfare frå elva i samsvar med delrapport til
konsekvensutgreiingane ”Rasvurdering av potensielle utbyggingsområde”
Retningsliner
Reguleringsplanen skal vise avkjørsle/tilkomstveg, opparbeiding av

---

[d002_d002 | Side [1]]
ata. Området har
tidlegare inngått kommuneplanen som LNF-område, og dels i
reguleringsplan for Område ved Midtnes pensjonat som jordbruksområde.
Storleik ca 40 da. Område med høg bukvalitet.
Føresegner
Før området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering).
Det skal takast omsyn til registrert kulturminne (gravrøys) ved lokalisering av bygg og anlegg.
Det skal leggast til rette for utbygging av småhus som einebustader eller rekke- eller

---

[d002_d002 | Side [1]]
 areal må ikkje
overstige %-BYA=25, eller BYA=100 m2 . Fargebruk skal vere dempa.
Retningsliner
Reguleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Det er ein føresetnad å nytte eksisterande tilkomst veg til Dale som avkjørsle frå riksveg. Ein skal unngå å bygge på
dyrka og dyrkbar mark, særskild når areal inngår i eit produksjonsareal av noko storleik.
Menes, spreidd bygging
Om planområdet
Planområdet ligg på Menes mellom

---

[d002_d002 | Side [1]]
lagt til vidare regulering til motorsportføremål.
Storleik ca 62 da.
Retningsliner
Det må utarbeidast ein reguleringsplan (detaljregulering) for området før det kan takast i bruk som permanent område
for motorsport. Det må bli gjort eigne støyvurderingar som skal ligge til grunn for utforming av reguleringsplanen.
Reguleringsplanen skal vise plassering av bygg og anlegg og ha føresegner som klargjer reglar og ev avgrensingar i
bruken av området. Det skal takast særskild omsyn til skiområdet som ligg inntil

---

[d002_d002 | Side [1]]
ikkje undersøkt om det er føreteke innvendige ombyggingar, eller om
eventuelle ombygging krev godkjenning, og om godkjenninga evt. kan være gitt. Medhjelpar
har ikkje undersøkt riktigheit av eventuelle framlagde teikningar, og kan ikkje haldast
ansvarleg for evt. avvik i forhold til teikningar.
Kjøpar blir oppfordra særskilt til å undersøkja bustaden sin tekniske tilstand samen med
fagkyndige. Kjøpar blir oppfordra til å kontrollere alle opplysningar om eigedommen samt
reguleringa for området.
Eventuelle

---

[d002_d002 | Side [1]]
rmflo StøykartleggingvegetterT-1442
StøysonerAvinorslufthavner StøysonerforBaneNORsjernbanenett
StøysonerforForsvaretsflyplasser StøysonerforForsvaretsskyte-ogøvingsfelt etter T-1442
Strategiskstøykartleggingveg Tilgjengelighet
Trafikkmengde Trafikkulykker
Turrutebasen Vannforekomster
Vannkraft,Utbygdogikkeutbygd VegsenterlinjeElveg2.0
Verneplanforvassdrag Vernskog
Villreinområder Vindkraft
Norkart Områdeanalyse 26.01.2026 Side 1 av 12

## Side 47

Aktsomhetskartforjord-ogflomskred
Kilde

---

[d002_d002 | Side [1]]
Føresegner til reguleringsplan og kart
8. Kommuneplan arealdel – vedtatt 25.03.2010
9. Kommuneplankart, Reguleringsplankart og Vegstatuskart
10. Lenke til informasjon om planar under arbeid
11. Informasjon om manglande ferdigattest/midlertidig attest
12. Informasjon om manglande bygningsteikningar
13. Vann- og avløpsinformasjon
14. Kommunale gebyr
15. Informasjon frå Sogn brann og redning
16. Bilete
17. Bodskjema
18. Tillegg til salsoppgåve og bodskjema
19. Legitimasjon av bodgjevar
Utan ansvar for moglege

---

[d002_d002 | Side [1]]
e er det krav om rasvurdering som dokumentasjon på tryggleik,
jf PBL §68 og TEK §7-32.
Retningsliner
Reguleringsplanen skal vise opparbeiding av området, utforming av bygg, type verksemd, avkjørsle og ev.
rassikringstiltak.
_____________________________________________________________________________________________________
Vedteken plan 25.03.2010

## Side 90

Kommuneplan, arealdel 2010-2020, Balestrand kommune 28
Menes utleigehytter (forretning)
Om planområdet
Planområdet ligg på Menes. Er eit nytt

---

[d002_d002 | Side [1]]
en. Området har tidlegare inngått i
reguleringsplan for Bala som landbruksområde.
Storleik ca 9 da.
Føresegner
Før området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering)
Innanfor området vert det tillate småhus som einebustader eller rekke/tunløysingar med maksimal gesimshøgd 7
meter og mønehøgd 9 meter. Bygg skal ha saltak med takvinkel min 22 grader. Møneretning skal vere normal eller
parallell med koteretning. Utbygd areal må ikkje overstige %-BYA=25. For kvart husvære det

---

[d002_d002 | Side [1]]
r området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering).
Det skal leggast til rette for utbygging av småhus som einebustader eller rekke/tunløysingar.
Det skal leggast til rette for ferdslevegar ned til friområdet ved sjøen, særskild mot neset mot aust rett nedom
bustadområdet.
Retningsliner
Avkjørsle skal vere frå vegen ned til industriområdet ved Nesseplast. Skal vurdere gangvegtilkomst i

---

[d002_d002 | Side [1]]
råde er det krav om geoteknisk rasvurdering som dokumentasjon
på tryggleik, jf PBL §68 og TEK §7-32.
Retningsliner
Reguleringsplanen skal vise avkjørsle/tilkomstveg, tomtedeling, krav til utnyttingsgrader og utforming av bygg.
Avkjørsle vert frå Tuftadalsvegen.
Bruhjell, hytteområde
Om planområdet
Planområdet oppom riksvegen på Bruhjell like sør for Balestrand tettstad.
Storleik ca 25 da.
Føresegner
Før området kan byggast ut må området gå inn i ein reguleringsplan (detaljregulering).
Reguleringsplanen

---

[d002_d002 | Side [1]]
, tilkomst, parkering og ev.
avkjørsle.
Bygging må ikkje komme i konflikt med registrerte kulturminne på området. Dersom ny eller endra bruk av avkjøring er
ein føresetnad, må dette takast opp og avklarast med Statens vegvesen før bygging eller frådeling til tomt kan bli
gjennomført. Ein skal unngå å bygge på dyrka og dyrkbar mark, særskild når areal inngår i eit produksjonsareal av
noko storleik.
Kvamsøy, spreidd bygging
Om planområdet
Planområdet ligg på Kvamsøy og vil opne for å bygge innimellom

---

[d002_d002 | Side [1]]
areal på 100 m2.
Før det kan bli gjeve løyve til frådeling eller bygging av bustad eller fritidshus er det krav om rasvurdering som
dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32..
Retningsliner
Reguleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Dersom ny eller endra bruk av avkjøring er ein føresetnad, må dette takast opp og avklarast med Statens vegvesen
før bygging eller frådeling til tomt kan bli gjennomført. Ein skal unngå

---

[d002_d002 | Side [1]]
lysningar om eigedommen samt
reguleringa for området.
Eventuelle spørsmål i høve bodgjeving kan rettast til medhjelpar.
*****
Medhjelper: Advokat Silje Flugheim Heggestad
Stedjevegen 37
6856 Sogndal
E-post: silje@advokat-tollefsen.no
Tlf: 916 44 035
Vedlegg:
1. Tilstandsrapport – 19.12.25
2. Grunnboksutskrift – 22.03.26
3. Matrikkelutskrift – 20.01.26
4. Eigedomsgrenser – 26.01.26
5. Områdeanalyse av Norkart – 26.01.26
6. Planopplysningar
7. Føresegner til reguleringsplan og kart
8. Kommuneplan arealdel –

---

[d002_d002 | Side [1]]
F-området på plankartet. Tal tomter
gjeld for planperioden eller fram til denne vert rullert. Det vert lagt opp til at det vert høve til bygging av bustader i
desse områda, og fritidsbustader i Dalsdalen. Desse områda er i all hovudsak klarerte ut i frå andre interesser. I
samband med byggeløyve eller før det vert frådelt tomt må følgjande bli avklart:
(cid:57) Godkjent avkjørsle og byggegrense til riksveg dersom ikkje kommunal veg kan nyttast
(cid:57) Godkjent avløpsløysing
(cid:57) Godkjent

---

[d002_d002 | Side [1]]
 Generelt anbefalast interessentar å synfare eigedomen saman
med bygningskyndige personar. Det visast for øvrig til vedlagt
tilstandsrapport.
Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette
er eit avvik frå NS 3600.
Det blir vist til vedlagt takstrapport, som bør gjennomgåast
grundig.
Det er ikkje mogleg å teikne bustadseljarforsikring på
eigedomar som seljes på tvangssal.
__________________________________________________________________________________
Salgsoppgave utferdiget

---

[d002_d002 | Side [1]]
 at for det tilfelle at eigedomen ikkje er rydda
og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte
føre og må bere kostnadane for, og kan ikkje gjerast gjeldande
som ein mangel.
På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil
motta alle nøklar for eigedomen. Dette kan ikkje gjerast
gjeldande som ein mangel.
Kjøpar kan ikkje påberope at det føreligg mangelfulle
opplysningar om forhold som kan avdekkjast ved ein
gjennomgang av saka sine fullstendige

---

[d002_d002 | Side [1]]
som kan avdekkjast ved ein
gjennomgang av saka sine fullstendige dokumenter.
__________________________________________________________________________________
Salgsoppgave utferdiget 22.03.26
Gnr. 306 bnr. 34 Sogndal kommune

## Side 8

__________________________________________________________________________________
Salgsoppgave utferdiget 22.03.26
Gnr. 306 bnr. 34 Sogndal kommune

## Side 9

Se fleire bilete i vedlegg 16
Salsoppgåva er basert på eventuelle opplysningar frå eigar, offentlege

---

[d002_d002 | Side [1]]
gere
undersøkelser og flere pristilbud fra kvalifiserte fagfolk. Anslagene gir • Det gis ingen vurdering av boligens tilbehør, hvite- og brunevarer og
kun et overordnet bilde og er ikke bindende. Skjulte feil eller avvik, eller annet inventar. Dette gjelder også integrert tilbehør.
forhold som ikke er avdekket, kan medføre ekstra kostnader. Verken
bygningssakkyndig eller rapportens utsteder kan holdes ansvarlig for • Inspisering av yttertak er basert på det som er synlig, normalt på
forskjeller mellom

---

[d002_d002 | Side [1]]
n som er nytta.
Vindauge av varierande alder og utforming. Kobla vindauge i del av
Det er oppført bakkamur i bakkant av eigedommen.
kjellar, vindauge frå byggjeår på baderom i 1. etg. 2 lags og 3 lags
Eigedommen ligg i eit område med hellande terreng.
glas i måla trekarm.
Ein har ikkje informasjon om alder og utføring av utv. VA anlegg.
Det er tilbygd altan med utgang frå stove.
Føreset at anlegget frå byggjeår med den tids utføring.
INNVENDIG Gå til side
Laminat og flis på golv. På bodareal er det

---

[d002_d002 | Side [1]]
rom, forhold som gjelder
sikkerhet mot brann, rekkverk, trapper, osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholdstilstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
tilleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • støttemurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstesting av el- og

---

[d002_d002 | Side [1]]
medhjelpar ikkje stå inne
for at lausøyre og tilbehøyr som etter hovudregelen skal følgje
eigedomen og som er til stades på visningstidspunkt, vil vere til
stades på overtakingstidspunkt. Kjøpar bør såleis legge til
grunn at det ved overtaking heilt eller delvis vil mangle
lausøyre eller tilbehøyr som etter hovudregelen skal følgje
eigedomen. Eventuelt manglande lausøyre og tilbehøyr kan
ikkje gjerast gjeldande som ein mangel.
Det presiserast at for det tilfelle at eigedomen ikkje er rydda
og nedvaska pr.

---

[d002_d002 | Side [1]]
holdt eller uriktig informasjon som har betydning for hensyn til bygningssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
avvik, altså en tilstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
framhever normalt ikke positive sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
fremgår av tilstandsgradene. eller andre

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Tvangssal – avgrensa kjøparrettar og ingen avhendingslov",
      "evidence": [
        "Dette er eit tvangssal gjennom Sogn og Fjordane tingrett",
        "Kjøparen har avgrensa mogelegheit til å gjera gjeldande manglar ved eit tvangssal (avhendingslova gjeld ikkje)",
        "Det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast",
        "Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R02",
      "description": "To tinglyste tvangssalgsbegjæringer på eiendommen",
      "evidence": [
        "2025/729835-1/200 TVANGSSALG BESLUTTET 26.06.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-060644TVA-TSOF/TSOG",
        "2025/983711-1/200 TVANGSSALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-023089TVA-TSOF/TSOG"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R03",
      "description": "Store pengeheftelser – pantedokumenter til Sogndal kommune på til sammen NOK 3 450 000",
      "evidence": [
        "2021/1610637-1/200 PANTEDOKUMENT 22.12.2021 BELØP: NOK 3 200 000 PANTHAVER: SOGNDAL KOMMUNE",
        "2022/344010-1/200 PANTEDOKUMENT 29.03.2022 BELØP: NOK 250 000 PANTHAVER: SOGNDAL KOMMUNE"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R04",
      "description": "Eiendommen ligger i rasfarlig og skredutsatt område",
      "evidence": [
        "Eigedomen ligg i eit rasfarleg og skredutsett område",
        "For dette området er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R05",
      "description": "Store eller alvorlige avvik (TG3) på flere bygningsdeler – takkonstruksjon/loft, balkonger/terrasser, rom under terreng og ventilasjon",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft",
        "Utvendig > Balkonger, terrasser og rom under balkonger",
        "Innvendig > Rom Under Terreng",
        "Tekniske installasjoner > Ventilasjon"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R06",
      "description": "Frostskade på toalett og manglende funksjonstest av VA-anlegg",
      "evidence": [
        "Bustaden har stått ubudd ei tid, og det er mellom anna avdekka frostskade på toalett",
        "Det er ikkje utført funksjonstest på VA-anlegget grunna dette"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R07",
      "description": "Manglende tettesjikt/membran på våtrom – bad og vaskerom ikke tilfredsstillende",
      "evidence": [
        "Våtrommet har ikkje tettesjikt, renovering er påbegynt",
        "Ikkje synleg membran ved sluk – UNDERETASJE > VASKEROM",
        "Hulltaking er ikke foretatt da det allerede er påvist andre avvik"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R08",
      "description": "Ingen lufting i takkonstruksjonen – risiko for fukt og råteskader",
      "evidence": [
        "Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida",
        "Isolasjon tettar mellom sperr og hindrar lufting",
        "Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R09",
      "description": "Utvendige VA-ledninger har passert mer enn halvparten av forventet brukstid – ukjent alder og utføring",
      "evidence": [
        "Ein har ikkje informasjon om alder og utføring av utv. VA anlegg. Føreset at anlegget frå byggjeår med den tids utføring",
        "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R10",
      "description": "Manglende ferdigattest for eiendommen",
      "evidence": [
        "Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv",
        "Informasjon om manglande ferdigattest/midlertidig attest"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R11",
      "description": "Egenerklæring fra eier mangler – begrenset informasjon om eiendommens tilstand",
      "evidence": [
        "Oppdraget er et tvangssalg. Egenerklæring er ikke utfylt, og eierinformasjonen er dermed begrenset",
        "Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R12",
      "description": "Mangler på brannslokningsutstyr og røykvarslere",
      "evidence": [
        "Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja",
        "Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja",
        "Er det skader på røykvarslere? Ja – Batteri må skiftast"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R13",
      "description": "Elektrisk anlegg ikke kontrollert – anbefalt el-sjekk av fagkyndig",
      "evidence": [
        "Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning",
        "Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd og såleis ikkje medrekna i kalkyle"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R14",
      "description": "Ukjent drenering og fuktrisiko rundt grunnmur",
      "evidence": [
        "Det er synleg knotteplast på del av grunnmur. Ein har ikkje informasjon om dreneringa er teken att etter oppføring",
        "Det bør foretas nærmere undersøkelser av tomta når den er snøfri. Ein må sikra god avrenning frå bygningen"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Oppgraderinger utført uten dokumentasjon – ukjent omfang og lovlighet",
      "evidence": [
        "Det er gjort nokon oppgraderingar både innvendig og utvending utan nærare dokumentasjon",
        "Arbeidet med oppgradering er ikkje sluttført, det gjenstår framleis ein del",
        "Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar, eller om eventuelle ombygging krev godkjenning"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R16",
      "description": "Kjøper bærer risiko for eventuelle konsesjonskrav",
      "evidence": [
        "Kjøparen ber risiko for eventuelle konsesjonskrav"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Ingen forsikringsdokumentasjon fremlagt for eiendommen",
      "evidence": [
        "Ikkje opplyst – Forsikring",
        "Ikkje framlagd forsikringsdokument"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R18",
      "description": "Risiko for at løsøre og tilbehør mangler ved overtakelse",
      "evidence": [
        "Medhjelpar ikkje stå inne for at lausøyre og tilbehøyr som etter hovudregelen skal følgje eigedomen og som er til stades på visningstidspunkt, vil vere til stades på overtakingstidspunkt",
        "Eventuelt manglande lausøyre og tilbehøyr kan ikkje gjerast gjeldande som ein mangel"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R19",
      "description": "Eiendommen kan ikke selgerforsikres – ingen bustadseljarforsikring mulig",
      "evidence": [
        "Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R20",
      "description": "Energimerking rød G – svært dårlig energistandard med forventede høye energikostnader",
      "evidence": [
        "Energimerking: Raud – (G)"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 1.0
    },
    {
      "risk_id": "R21",
      "description": "Mulig grunnforurensning ikke registrert – kan likevel forekomme",
      "evidence": [
        "Ingen grunnforurensing registrert på matrikkelenheten",
        "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    },
    {
      "risk_id": "R22",
      "description": "Ukjente utinglyste forpliktelser og ikke-endelige offentlige planer kan foreligge",
      "evidence": [
        "Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R23",
      "description": "Stort fradrag i teknisk verdi – NOK 2 000 000 i fradrag for elde, vedlikeholdsmangler og gjenstående arbeider",
      "evidence": [
        "Fradrag (utidsmessighet, elde, vedlikeholdsmangler, gjenstående arbeider, svekkelser og forskriftsmangler) Kr. - 2 000 000",
        "Normale byggekostnader (utregnet som for nybygg) Kr. 4 650 000",
        "Sum teknisk verdi - Enebolig Kr. 2 650 000"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R24",
      "description": "Eiendommen er fra 1968 – høy alder medfører generell risiko for skjulte feil og utdatert teknisk standard",
      "evidence": [
        "Einebustaden er frå 1968, og ligg i eit utbygd område med einebustadar med varierande aldrar",
        "Bygningen har teknisk standard frå oppføringstidspunkt",
        "Einebustad oppført i 1968 med den tids tekniske standard"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R25",
      "description": "Manglende bygningsteikningar – ukjent om tegninger stemmer med faktisk bruk",
      "evidence": [
        "Informasjon om manglande bygningsteikningar",
        "Det foreligger ikke tegninger",
        "Medhjelpar har ikkje undersøkt riktigheit av eventuelle framlagde teikningar, og kan ikkje haldast ansvarleg for evt. avvik i forhold til teikningar"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R26",
      "description": "Eiendommen ikke ryddet/vasket ved overtakelse – kjøpers ansvar og kostnad",
      "evidence": [
        "For det tilfelle at eigedomen ikkje er rydda og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte føre og må bere kostnadane for, og kan ikkje gjerast gjeldande som ein mangel"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R27",
      "description": "Kjøper vil trolig ikke motta alle nøkler til eiendommen",
      "evidence": [
        "På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil motta alle nøklar for eigedomen. Dette kan ikkje gjerast gjeldande som ein mangel"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "rasvurdering dokumentasjon tryggleik Fjærestadvegen 15",
    "ventilasjon TG3 avvik tilstandsrapport",
    "rom under terreng TG3 fukt kjellar",
    "balkonger terrasser TG3 avvik tilstand",
    "el-anlegg siste tilsyn dato kontroll",
    "konsesjon landbruk boplikt Sogndal",
    "manglande bygningsteikningar arkiv kommune",
    "lause kablar uisolerte byggegrunn tomteforhold"
  ],
  "reasoning": "\nAlle 23 opprinnelig identifiserte risikoer er godt støttet av direkte sitat fra dokumentchunkene og beholder sine confidence-nivåer. Følgende justeringer og tillegg er gjort:\n\n**Bekreftede risikoer (R01–R23):**\nSamtlige 23 risikoer har tydelig evidens i dokumentene. Ingen risikoer fjernes. Confidence-nivåene opprettholdes som angitt, da evidensen er direkte og eksplisitt.\n\n**Nye risikoer identifisert (R24–R27):**\n\n- R24 (Høy alder/skjulte feil): Eiendommen er fra 1968 og har teknisk standard fra oppføringstidspunktet. Dette er en selvstendig risikofaktor som ikke var eksplisitt nevnt som egen risiko, men som understøttes av flere dokumentpassasjer.\n\n- R25 (Manglende bygningsteikningar): Salgsoppgaven lister eksplisitt \"Informasjon om manglande bygningsteikningar\" som eget vedlegg/punkt, og tilstandsrapporten bekrefter at det ikke foreligger tegninger. Dette er en risiko for ulovlige ombygginger og avvik fra faktisk bruk.\n\n- R26 (Eiendommen ikke ryddet): Eksplisitt nevnt i salgsoppgaven at dette er kjøpers risiko og kostnad – en praktisk risiko som bør fremheves.\n\n- R27 (Manglende nøkler): Eksplisitt nevnt i salgsoppgaven som en kjent risiko ved tvangssalg.\n\n**Confidence-justeringer:**\n- R21 (Grunnforurensning) beholder lav confidence (0.7) da det kun er en generell forbehold-formulering uten konkrete indikasjoner på faktisk forurensning.\n- R16 (Konsesjonskrav) beholder 0.85 da det kun er en standardformulering uten konkrete opplysninger om konsesjonspliktig bruk.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkret innhold i TG3-avvikene for balkonger, rom under terreng og ventilasjon er ikke fullt ut gjengitt i de tilgjengelige chunkene – re-retrieval anbefales.\n- El-anleggets alder og siste tilsynsdato er ukjent – viktig for å vurdere alvorlighetsgrad av R13.\n- Om konsesjonsplikten faktisk er aktuell for denne eiendommen bør avklares.\n- Løse kabler og uisolerte forhold nevnt under tomteforhold bør undersøkes nærmere.\n"
}

## Raw Response
```json
{
  "id": "msg_01Q3Z3NasAiWULK7TkuUaiTD",
  "container": null,
  "content": [
    {
      "id": "toolu_018a2aHvhQSciqHodHXjEa5q",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Tvangssal – avgrensa kjøparrettar og ingen avhendingslov",
            "evidence": [
              "Dette er eit tvangssal gjennom Sogn og Fjordane tingrett",
              "Kjøparen har avgrensa mogelegheit til å gjera gjeldande manglar ved eit tvangssal (avhendingslova gjeld ikkje)",
              "Det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast",
              "Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R02",
            "description": "To tinglyste tvangssalgsbegjæringer på eiendommen",
            "evidence": [
              "2025/729835-1/200 TVANGSSALG BESLUTTET 26.06.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-060644TVA-TSOF/TSOG",
              "2025/983711-1/200 TVANGSSALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200 SAKSNR: 25-023089TVA-TSOF/TSOG"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R03",
            "description": "Store pengeheftelser – pantedokumenter til Sogndal kommune på til sammen NOK 3 450 000",
            "evidence": [
              "2021/1610637-1/200 PANTEDOKUMENT 22.12.2021 BELØP: NOK 3 200 000 PANTHAVER: SOGNDAL KOMMUNE",
              "2022/344010-1/200 PANTEDOKUMENT 29.03.2022 BELØP: NOK 250 000 PANTHAVER: SOGNDAL KOMMUNE"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R04",
            "description": "Eiendommen ligger i rasfarlig og skredutsatt område",
            "evidence": [
              "Eigedomen ligg i eit rasfarleg og skredutsett område",
              "For dette området er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R05",
            "description": "Store eller alvorlige avvik (TG3) på flere bygningsdeler – takkonstruksjon/loft, balkonger/terrasser, rom under terreng og ventilasjon",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft",
              "Utvendig > Balkonger, terrasser og rom under balkonger",
              "Innvendig > Rom Under Terreng",
              "Tekniske installasjoner > Ventilasjon"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R06",
            "description": "Frostskade på toalett og manglende funksjonstest av VA-anlegg",
            "evidence": [
              "Bustaden har stått ubudd ei tid, og det er mellom anna avdekka frostskade på toalett",
              "Det er ikkje utført funksjonstest på VA-anlegget grunna dette"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R07",
            "description": "Manglende tettesjikt/membran på våtrom – bad og vaskerom ikke tilfredsstillende",
            "evidence": [
              "Våtrommet har ikkje tettesjikt, renovering er påbegynt",
              "Ikkje synleg membran ved sluk – UNDERETASJE > VASKEROM",
              "Hulltaking er ikke foretatt da det allerede er påvist andre avvik"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R08",
            "description": "Ingen lufting i takkonstruksjonen – risiko for fukt og råteskader",
            "evidence": [
              "Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida",
              "Isolasjon tettar mellom sperr og hindrar lufting",
              "Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R09",
            "description": "Utvendige VA-ledninger har passert mer enn halvparten av forventet brukstid – ukjent alder og utføring",
            "evidence": [
              "Ein har ikkje informasjon om alder og utføring av utv. VA anlegg. Føreset at anlegget frå byggjeår med den tids utføring",
              "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R10",
            "description": "Manglende ferdigattest for eiendommen",
            "evidence": [
              "Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv",
              "Informasjon om manglande ferdigattest/midlertidig attest"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R11",
            "description": "Egenerklæring fra eier mangler – begrenset informasjon om eiendommens tilstand",
            "evidence": [
              "Oppdraget er et tvangssalg. Egenerklæring er ikke utfylt, og eierinformasjonen er dermed begrenset",
              "Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R12",
            "description": "Mangler på brannslokningsutstyr og røykvarslere",
            "evidence": [
              "Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja",
              "Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja",
              "Er det skader på røykvarslere? Ja – Batteri må skiftast"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R13",
            "description": "Elektrisk anlegg ikke kontrollert – anbefalt el-sjekk av fagkyndig",
            "evidence": [
              "Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning",
              "Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd og såleis ikkje medrekna i kalkyle"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R14",
            "description": "Ukjent drenering og fuktrisiko rundt grunnmur",
            "evidence": [
              "Det er synleg knotteplast på del av grunnmur. Ein har ikkje informasjon om dreneringa er teken att etter oppføring",
              "Det bør foretas nærmere undersøkelser av tomta når den er snøfri. Ein må sikra god avrenning frå bygningen"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Oppgraderinger utført uten dokumentasjon – ukjent omfang og lovlighet",
            "evidence": [
              "Det er gjort nokon oppgraderingar både innvendig og utvending utan nærare dokumentasjon",
              "Arbeidet med oppgradering er ikkje sluttført, det gjenstår framleis ein del",
              "Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar, eller om eventuelle ombygging krev godkjenning"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R16",
            "description": "Kjøper bærer risiko for eventuelle konsesjonskrav",
            "evidence": [
              "Kjøparen ber risiko for eventuelle konsesjonskrav"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Ingen forsikringsdokumentasjon fremlagt for eiendommen",
            "evidence": [
              "Ikkje opplyst – Forsikring",
              "Ikkje framlagd forsikringsdokument"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R18",
            "description": "Risiko for at løsøre og tilbehør mangler ved overtakelse",
            "evidence": [
              "Medhjelpar ikkje stå inne for at lausøyre og tilbehøyr som etter hovudregelen skal følgje eigedomen og som er til stades på visningstidspunkt, vil vere til stades på overtakingstidspunkt",
              "Eventuelt manglande lausøyre og tilbehøyr kan ikkje gjerast gjeldande som ein mangel"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R19",
            "description": "Eiendommen kan ikke selgerforsikres – ingen bustadseljarforsikring mulig",
            "evidence": [
              "Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R20",
            "description": "Energimerking rød G – svært dårlig energistandard med forventede høye energikostnader",
            "evidence": [
              "Energimerking: Raud – (G)"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 1.0
          },
          {
            "risk_id": "R21",
            "description": "Mulig grunnforurensning ikke registrert – kan likevel forekomme",
            "evidence": [
              "Ingen grunnforurensing registrert på matrikkelenheten",
              "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          },
          {
            "risk_id": "R22",
            "description": "Ukjente utinglyste forpliktelser og ikke-endelige offentlige planer kan foreligge",
            "evidence": [
              "Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R23",
            "description": "Stort fradrag i teknisk verdi – NOK 2 000 000 i fradrag for elde, vedlikeholdsmangler og gjenstående arbeider",
            "evidence": [
              "Fradrag (utidsmessighet, elde, vedlikeholdsmangler, gjenstående arbeider, svekkelser og forskriftsmangler) Kr. - 2 000 000",
              "Normale byggekostnader (utregnet som for nybygg) Kr. 4 650 000",
              "Sum teknisk verdi - Enebolig Kr. 2 650 000"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R24",
            "description": "Eiendommen er fra 1968 – høy alder medfører generell risiko for skjulte feil og utdatert teknisk standard",
            "evidence": [
              "Einebustaden er frå 1968, og ligg i eit utbygd område med einebustadar med varierande aldrar",
              "Bygningen har teknisk standard frå oppføringstidspunkt",
              "Einebustad oppført i 1968 med den tids tekniske standard"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R25",
            "description": "Manglende bygningsteikningar – ukjent om tegninger stemmer med faktisk bruk",
            "evidence": [
              "Informasjon om manglande bygningsteikningar",
              "Det foreligger ikke tegninger",
              "Medhjelpar har ikkje undersøkt riktigheit av eventuelle framlagde teikningar, og kan ikkje haldast ansvarleg for evt. avvik i forhold til teikningar"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R26",
            "description": "Eiendommen ikke ryddet/vasket ved overtakelse – kjøpers ansvar og kostnad",
            "evidence": [
              "For det tilfelle at eigedomen ikkje er rydda og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte føre og må bere kostnadane for, og kan ikkje gjerast gjeldande som ein mangel"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R27",
            "description": "Kjøper vil trolig ikke motta alle nøkler til eiendommen",
            "evidence": [
              "På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil motta alle nøklar for eigedomen. Dette kan ikkje gjerast gjeldande som ein mangel"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "rasvurdering dokumentasjon tryggleik Fjærestadvegen 15",
          "ventilasjon TG3 avvik tilstandsrapport",
          "rom under terreng TG3 fukt kjellar",
          "balkonger terrasser TG3 avvik tilstand",
          "el-anlegg siste tilsyn dato kontroll",
          "konsesjon landbruk boplikt Sogndal",
          "manglande bygningsteikningar arkiv kommune",
          "lause kablar uisolerte byggegrunn tomteforhold"
        ],
        "reasoning": "\nAlle 23 opprinnelig identifiserte risikoer er godt støttet av direkte sitat fra dokumentchunkene og beholder sine confidence-nivåer. Følgende justeringer og tillegg er gjort:\n\n**Bekreftede risikoer (R01–R23):**\nSamtlige 23 risikoer har tydelig evidens i dokumentene. Ingen risikoer fjernes. Confidence-nivåene opprettholdes som angitt, da evidensen er direkte og eksplisitt.\n\n**Nye risikoer identifisert (R24–R27):**\n\n- R24 (Høy alder/skjulte feil): Eiendommen er fra 1968 og har teknisk standard fra oppføringstidspunktet. Dette er en selvstendig risikofaktor som ikke var eksplisitt nevnt som egen risiko, men som understøttes av flere dokumentpassasjer.\n\n- R25 (Manglende bygningsteikningar): Salgsoppgaven lister eksplisitt \"Informasjon om manglande bygningsteikningar\" som eget vedlegg/punkt, og tilstandsrapporten bekrefter at det ikke foreligger tegninger. Dette er en risiko for ulovlige ombygginger og avvik fra faktisk bruk.\n\n- R26 (Eiendommen ikke ryddet): Eksplisitt nevnt i salgsoppgaven at dette er kjøpers risiko og kostnad – en praktisk risiko som bør fremheves.\n\n- R27 (Manglende nøkler): Eksplisitt nevnt i salgsoppgaven som en kjent risiko ved tvangssalg.\n\n**Confidence-justeringer:**\n- R21 (Grunnforurensning) beholder lav confidence (0.7) da det kun er en generell forbehold-formulering uten konkrete indikasjoner på faktisk forurensning.\n- R16 (Konsesjonskrav) beholder 0.85 da det kun er en standardformulering uten konkrete opplysninger om konsesjonspliktig bruk.\n\n**Manglende informasjon som bør undersøkes nærmere:**\n- Konkret innhold i TG3-avvikene for balkonger, rom under terreng og ventilasjon er ikke fullt ut gjengitt i de tilgjengelige chunkene – re-retrieval anbefales.\n- El-anleggets alder og siste tilsynsdato er ukjent – viktig for å vurdere alvorlighetsgrad av R13.\n- Om konsesjonsplikten faktisk er aktuell for denne eiendommen bør avklares.\n- Løse kabler og uisolerte forhold nevnt under tomteforhold bør undersøkes nærmere.\n"
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
    "input_tokens": 20218,
    "output_tokens": 5420,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
