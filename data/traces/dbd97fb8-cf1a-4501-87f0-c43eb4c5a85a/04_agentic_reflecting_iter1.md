# Trace: agentic_reflecting_iter1
- **Run ID:** dbd97fb8-cf1a-4501-87f0-c43eb4c5a85a
- **Tidspunkt:** 2026-03-23T10:20:46.791031+00:00
- **Varighet:** 134.89s
- **Input tokens:** 23900
- **Output tokens:** 6667

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
  Evidens: Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar. Lov om avhending av fast eiendom (avhendingsloven) gjelder ikkje.; Det nemnast at det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast.; Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600.; Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal.

Risiko 2: Utlegg og arrest – rettsleg forfølging av eigar er under behandling
  Confidence: 1.0
  Evidens: ALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200; GJELDER: KALLOUCHE MOHAMED ALOUATI F.NR: 070685 GJELDER: MOUSSA KAMAR F.NR: 270794; TINGRETT: SOGN OG FJORDANE SAKSNR: 25-023089TVA-TSOF/TSOG

Risiko 3: Betydelege pengeheftingar på eigedomen – to pantedokument til Sogndal kommune
  Confidence: 1.0
  Evidens: 2021/1610637-1/200 PANTEDOKUMENT 22.12.2021 BELØP: NOK 3 200 000 PANTHAVER: SOGNDAL KOMMUNE; 2022/344010-1/200 PANTEDOKUMENT 29.03.2022 BELØP: NOK 250 000 PANTHAVER: SOGNDAL KOMMUNE

Risiko 4: Store eller alvorlige bygningsmessige avvik (TG3) – takkonstruksjon/loft
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft; Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida.; Isolasjon tettar mellom sperr og hindrar lufting. Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol.; Takkonstruksjonen sin styrke bør sjekkast mtp snølast.

Risiko 5: Store eller alvorlige bygningsmessige avvik (TG3) – balkongar/terrasse med vassinntrengning
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Utvendig > Balkonger, terrasser og rom under balkonger; Tekkingen på balkong/terrasse har utettheter. Det er montert stålplater under bjelkelag. Stålplatetekkinga fungerar ikkje fullgodt slik at det trekkjer vatn ned i arealet under altanen.; Konstruksjonen har ei utforming som gjer at det ikkje tettar, vatn trekkjer inn att på platene då det er veldig lite fall.; Kostnadsestimat: 100 000 - 200 000

Risiko 6: Store eller alvorlige bygningsmessige avvik (TG3) – rom under terreng med fuktgjennomtrengning
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Innvendig > Rom Under Terreng; Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv.; Mer enn halvparten av forventet levetid på drenering er overskredet.; Ved tilbygd altan er det ein del fuktgjennomgang, dette skuldast truleg innsig frå tredekke som ikkje er utført med tetting som er fullgod.

Risiko 7: Store eller alvorlige bygningsmessige avvik (TG3) – ventilasjon
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Ventilasjon; Det er lagt opp til naturleg ventilering via vindauge.

Risiko 8: Store eller alvorlige bygningsmessige avvik (TG3) – elektrisk anlegg utan dokumentasjon
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Elektrisk anlegg; Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning. Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd.; Kostnadsestimat: Under 20 000

Risiko 9: Frostskade på røyrinstallasjonar – bygningen har stått utan varme
  Confidence: 1.0
  Evidens: N.B. bygningen har stått utan varme. Toalett i 1. etg. frostskada.; Anlegget må sjekkast av fagkunning før ein set på vatnet.; Delar av røyropplegget på toalettrom i under etg. er frå byggjeår, vurdert som utdatert.; Bygningen har stått ubebudd ei tid, det er avdekka skade på m.a. toalett i 1. etg. som tyder på frostskade.

Risiko 10: Våtrom (bad og vaskerom) krev totalrenovering – manglar membran og dokumentasjon
  Confidence: 1.0
  Evidens: STORE ELLER ALVORLIGE AVVIK: Våtrom > Etasje > Bad > Generell; Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav. Det er ikkje synleg membran ved sluk eller ved røyroppstikk.; Eldre våtrom som er under oppgradering. Våtrommet er demontert mtp renovering.; Våtrommet må totalrenoveres. Alle forhold med tettesjikt.; Kostnadsestimat: 100 000 - 200 000

Risiko 11: Manglande ferdigattest og bygningsteikningar – ulovlege eller udokumenterte endringar
  Confidence: 1.0
  Evidens: Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv.; Det er ikkje framlagd teikningar av bygningen. Det er tydeleg at planløysinga er endra på eit tidspunkt, ukjent når.; Informasjon om manglande ferdigattest/midlertidig attest og manglande bygningsteikningar er vedlegg til salgsoppgåva.

Risiko 12: Avvik i branncelleinndeling – mogleg ulovleg bruk
  Confidence: 0.95
  Evidens: Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskrift? Ja; Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser.

Risiko 13: Manglande og defekt brannvarslingsanlegg og brannslokkingsutstyr
  Confidence: 1.0
  Evidens: Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja; Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja. Batteri må skiftast.; Kostnadsestimat: Under 20 000

Risiko 14: Manglande radonmåling og ingen radonsperre i bygget
  Confidence: 1.0
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Det bør gjennomføres radonmålinger.; Kostnad er knytt til måling av radonnivå. Kostnadsestimat: Under 20 000

Risiko 15: Ustabil forstøtningsmur med teikn på svak fundamentering
  Confidence: 0.9
  Evidens: Det er påvist mindre sprekker og/eller skjevheter i muren. Bakkamuren hellar ein del, kan tyda på svak fundamentering.; Muren har såpass mykje helling at på eit tidspunkt vil den truleg leggja seg over på sida, uråd å sei når det evt. vil skje.; Utbetring er nødvendig.

Risiko 16: Vindauge med avvik – vanskeleg å opne/lukke, kondensering og sprekker i trevirke
  Confidence: 0.95
  Evidens: Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.; Det er påvist tegn på innvendig kondensering av enkelte vindusglass.; Karmene i vinduer er slitte og det er sprekker i trevirket.; Vindauge er montert utan beslag med skrå bord som fører til fuktopptrekk.; Dei eldste vindaugene har oppnådd forventa levetid, utskifting er pårekneleg.; Kostnadsestimat: 100 000 - 200 000

Risiko 17: Skada kjøkkeninnredning – krev utbetring eller utskifting
  Confidence: 0.9
  Evidens: Det er påvist skader på overflater/kjøkkeninnredning utover normal slitasjegrad. Skada/dels demontert innredning.; Det må påregnes lokal utbedring/utskiftning. Må utbetra del av innredning.; Kostnadsestimat: 20 000 - 100 000

Risiko 18: Manglande respons på feiarvarslar – branntryggleik for pipe og eldstad
  Confidence: 0.95
  Evidens: Det er varsla feiing i 2022, 2024 og 2025 utan at det har vore respons på varselet.; Type Skorstein: Stålskorstein. Type eldstad: Lukka eldstad for ved.

Risiko 19: Utinglyste pliktar og ikkje endelege offentlege planar kan foreligge
  Confidence: 0.85
  Evidens: Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar.; Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar.

Risiko 20: Eigedomen ligg i område med aktsomheit for jord-, flom- og snøskred
  Confidence: 0.8
  Evidens: Berørte datasett inkluderer: Aktsomhetskart for jord- og flomskred, Aktsomhetskart for kvikkleireskred, Aktsomhetskart for snøskred, Faresonekart for skred i bratt terreng.; Før det kan bli gjeve løyve til frådeling eller bygging av bustad eller fritidshus er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32.

Risiko 21: Energimerking raud G – svært låg energieffektivitet
  Confidence: 1.0
  Evidens: Energimerking: Raud – (G)

Risiko 22: Ukjent byggegrunn – ingen detaljert kunnskap om grunnforhold
  Confidence: 0.8
  Evidens: Ein har ikkje detaljert kunnskap om byggegrunn.; Antatt betongfundament og grunnmur i betong med noko innslag av leca som er pussa. Det meste av muren er innkledd.

Risiko 23: Arbeid utført ufaglært – overflater og innvendig arbeid ber preg av ufaglært utføring
  Confidence: 0.9
  Evidens: Overflater ser ut til å vera pussa opp i tida etter at dagens eigar overtok. Arbeidet ber preg av å vera utført ufaglært.; Ein har ikkje detaljert info om kva som er gjort og når det er utført.; Kostnadsestimat: 100 000 - 200 000

Risiko 24: Kjøpar vil truleg ikkje motta alle nøklar – kan ikkje gjerast gjeldande som mangel
  Confidence: 0.85
  Evidens: På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil motta alle nøklar for eigedomen. Dette kan ikkje gjerast gjeldande som ein mangel.

Risiko 25: Eigedomen kan ikkje vere rydda og nedvaska ved overtaking – kjøpar sitt ansvar
  Confidence: 0.85
  Evidens: For det tilfelle at eigedomen ikkje er rydda og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte føre og må bere kostnadane for, og kan ikkje gjerast gjeldande som ein mangel.

Dokumentkontekst:
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
sveg, takhøgde og liknande.
Medhjelpar har uprøvd lagt til grunn takstmannen sine arealmålingar. Det er følgjeleg ikkje
utført kontroll av bustadsalsrapportens arealmålingar eller utrekningsgrunnlaget for slike.
Medhjelpar kan ikkje haldast ansvarleg ved arealavvik.
Eigedomen blir overtatt fri for pengeheftingar unntatt de som kjøpar skal overta jf. framfor.
Eigedomen vert overtatt med andre eventuelle tinglyste heftingar som måtte kvile på
eigedomen, jf. vedlagte

---

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
ng.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på

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
krift? Ja Nei
Nyere håndverkstjenester
Er det ifølge eier utført håndverkstjenester på boligen siste 5 år? Ja Nei
Kommentar: Ein har ikkje detaljert info om når det er gjort ombygging og oppgradering av bygningen. Utifrå det ein kan sjå er det gjort div.
arbeid etter 2021 då dagens eigar overtok eigedommen.
Krav for rom til varig opphold
Er det påvist avvik i forhold til rømningsvei, dagslysflate eller takhøyde? Ja Nei
Kommentar:
Total fordeling mellom P-ROM og S-ROM
Tabellen under viser fordelingen av

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
), omsetningen. Les mer om dette og hvordan du kan reservere deg på
eksternt bruksareal (BRA-e) og innglasset balkong mv (BRA-b). Terrasse- https://www.norsktakst.no/norsk/om-norsk-
og balkongareal (TBA) opplyses der tilstandsrapporten skal benyttes i takst/personvernerklaering/reservasjon/
boligomsetningen og der det er aktuelt. I tillegg kan gulvareal (GUA) og
areal med lav takhøyde (ALH) opplyses sammen med BRA der det er Vendu lager en boliganalyse basert på opplysninger fra rapporten. Les
aktuelt og

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
for
rettighetshaverne.”
Kjøpar skal ikkje dekkje medhjelpar sine omkostnadar.
Diverse
Overtaking: Overdraging og oppgjer skal normalt skje 3 månadar etter at
medhjelpar har lagt fram bodet for Sogn og Fjordane tingrett
og rettshavarane, samt at medhjelpar har råda partane om å
krevje bodet stadfesta. Sogn og Fjordane tingrett må også
stadfeste bodet. Sjå meir informasjon nedanfor.
Visning: Etter avtale med medhjelpar.
Merknadar: Generelt anbefalast interessentar å synfare eigedomen saman
med

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
 ikkje informasjon
om dreneringa er teken att etter oppføring av bygningen.
Vurdering av avvik:
• Mer enn halvparten av forventet levetid på drenering er overskredet.
El. tavle Utifrå alder på bygning har dreneringa oppnådd meir enn halvparten av
forventa levetid. Ved tilbygd altan er det ein del fuktgjennomgang, dette
Utstyr for varsling og slukking av brann skuldast truleg innsig frå tredekke som ikkje er utført med tetting som er
fullgod.
Konsekvens/tiltak
• Overvåk tilstanden jevnlig. For å få

---

[d002_d002 | Side [1]]
holdt eller uriktig informasjon som har betydning for hensyn til bygningssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
avvik, altså en tilstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
framhever normalt ikke positive sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
fremgår av tilstandsgradene. eller andre

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
nbygde kvitevarer.
Vurdering av avvik:
• Det er påvist skader på overflater/kjøkkeninnredning utover normal
slitasjegrad.
Skada/dels demontert innredning.
Konsekvens/tiltak
• Det må påregnes lokal utbedring/utskiftning.
Må utbetra del av innredning.
Kostnadsestimat: 20 000 - 100 000
TEKNISKE INSTALLASJONER
Vannledninger
Røyropplegg er dels utført av koparrøyr og dels av røyr i røyr.
N.B. bygningen har stått utan varme. Toalett i 1. etg. frostskada.
Anlegget må sjekkast av fagkunning før ein set på vatnet.

---

[d002_d002 | Side [1]]
røyr og dels av røyr i røyr.
Ein har ikkje detaljert info om kva som er gjort og når det er N.B. bygningen har stått utan varme. Toalett i 1. etg. frostskada.
utført. Anlegget må sjekkast av fagkunning før ein set på vatnet. Delar av
røyropplegget på toalettrom i under etg. er frå byggjeår, vurdert
Bygningen har stått ubebudd ei tid, det er avdekka skade på m.a.
som utdatert.
toalett i 1. etg. som tyder på frostskade. VA anlegget er ikkje
Avlaup ligg skjult, ukjent utføring utover lufterøyr som går til,

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
ke foretatt da det allerede er påvist andre avvik i
Vurdering av avvik: våtsonen.
• Hulltaking er ikke foretatt da det allerede er påvist andre avvik i • Den valgte konstruksjonsutforming gir økt fare for skader.
våtsonen.
Det er ikkje utført fuktkontroll då baderommet er under renovering.
• Den valgte konstruksjonsutforming gir økt fare for skader.
Konsekvens/tiltak
Konsekvens/tiltak
• Dersom tiltaket ikke utføres er det fare for ytterligere skadeutvikling.
• Andre tiltak:
• De påviste skader må utbedres.

---

[d002_d002 | Side [1]]
sjon med stor senteravstand mellom kvar takstol.
• Det er påvist avvik rundt innsettingsdetaljer.
Konsekvens/tiltak • Det er påvist tegn på innvendig kondensering av enkelte vindusglass.
• Lufting/ventilering bør forbedres. • Karmene i vinduer er slitte og det er sprekker i trevirket.
Lufting bør betrast for å få tilfredstillande utlufting av kaldtloftet. Vindauge er montert utan beslag med skrå bord som fører til
Takkonstruksjonen sin styrke bør sjekkast mtp snølast. Evt. tiltak mtp fuktopptrekk i

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
For skjulte konstruksjoner vil alder i seg selv Etter avtale kan tilstandsanalysen utvides til også å omfatte
være et symptom som kan gi TG2. For synlige konstruksjoner kan alder tilleggsundersøkelser utover minimumskravet i forskriften.
sammen med andre symptomer og momenter gi TG2. Avvik under TG2
kan gis sjablongmessig anslag.
BEFARINGEN
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kraftige symptomer Rapporten gir en vurdering av byggverk og bygningsdeler som
på forhold som man må regne med

---

[d002_d002 | Side [1]]
 er ikke foretatt radonmålinger, og bygget er heller ikke utført med
radonsperre.
Konsekvens/tiltak
• Det bør gjennomføres radonmålinger.
Kostnad er knytt til måling av radonnivå.
Kostnadsestimat: Under 20 000
Pipe og ildsted
Sprekk i overflate på vegg
Det er montert stålpipe og peisovn i stove.
Fargeskilnad på vegg
Rom Under Terreng
Punktet må sees i sammenheng med ‘Drenering’
Bakvegg er påfora og platekledd.
Vurdering av avvik:
• Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv.
• Det

---

[d002_d002 | Side [1]]
ur. Ein har ikkje
risikoen. En undersøkelse av taket kan utføres av en fagperson under
informasjon om dreneringa er teken att etter oppføring av
tilstrekkelige sikkerhetsforhold.
bygningen.
Takrenner i metall.
Antatt betongfundament og grunnmur i betong med noko innslag av
Standard yttervegg frå byggjeår.
leca som er pussa. Det meste av muren er innkledd. Ved tilbygg er
Plassbygd takstolkonstruksjon med stor senteravstand.
det betongstein som er nytta.
Vindauge av varierande alder og utforming. Kobla

---

[d002_d002 | Side [1]]
unnelse for valg av tilstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre tilstandsgrad. Når bygningssakkyndige anbefaler tiltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om tiltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger tilstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
tilstandsanalyse ved omsetning av bolig og Forskrift til

---

[d002_d002 | Side [1]]
rrasse er snødekt og derfor ikke nærmere vurdert.
• Tekkingen på balkong/terrasse har utettheter.
Det er montert stålplater under bjelkelag. Stålplatetekkinga fungerar
ikkje fullgodt slik at det trekkjer vatn ned i arealet under altanen.
Konsekvens/tiltak
• Tekkingen må skiftes/utbedres.
Konstruksjonen har ei utforming som gjer at det ikkje tettar, vatn
trekkjer inn att på platene då det er veldig lite fall. Skal ein få ei tett
konstrukjson må ein gjera dette på ein anna måte.
Kostnadsestimat: 100 000 -

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
: Zoologiske eller biologiske skadegjørere, i hovedsak definerer fellesareal slik: “Delen av bygning som brukes av to eller flere
råte, sopp og skadedyr. bruksenheter eller til bygningens forvaltning, drift eller vedlikehold.
• Fuktsøk: Overflatesøk med egnet søkeutstyr (fuktindikator) eller • I en overgangsperiode skal rapporter som benyttes i
visuelle observasjoner. boligomsetningen eller dersom det er en del av oppdraget også opplyse
om fordelingen mellom P-ROM og S-ROM med utgangspunkt i
• Fuktmåling:

---

[d002_d002 | Side [1]]
ygge og regler som gjaldt på søknadstidspunktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser etter avvik som har betydning for og som
svekkes over tid, og utsettes for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskrift til
og vær og vind. Mange boliger fornyes helt eller delvis, noen i flere avhendingslova.
omganger, eller det oppføres tilbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil

---

[d002_d002 | Side [1]]
NDAL
Tilstandsrapport
Ikkje avdekka fukt i påforinga Døme på dør som heng litt.
VÅTROM
ETASJE > BAD
Generell
Ein har ikkje detaljert info om når våtrommet er oppdatert. Det føreligg
ingen dokumentasjon.
Vurdering av avvik:
• Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.
Det er ikkje synleg membran ved sluk eller ved røyroppstikk. Skada
baderomspanel ved dusjplass. Det er gjort kompenserande tiltak med
Måling flassar, kan tyda på fukttransport tett dusjkabinett. Himlingsplater er lause

---

[d002_d002 | Side [1]]
areal er det sponplate og betong
Platekledde veggar som er måla. Panelplater som er måla.
Måla himlingar.
Vurdering av avvik:
Balkonger, terrasser og rom under balkonger
• Det er påvist skader på overflater.
Overflater ser ut til å vera pussa opp i tida etter at dagens eigar overtok.
Det er tilbygd altan med utgang frå stove.
Arbeidet ber preg av å vera utført ufaglært.
Vurdering av avvik:
Kostnadsestimat: 100 000 - 200 000
• Balkonger/terrasse er snødekt og derfor ikke nærmere vurdert.
• Tekkingen på

---

[d002_d002 | Side [1]]
heten, med
• Symptom: Observerbart forhold som gir indikasjon på hvilken tilstand mindre dette er angitt særskilt. Rom utenfor boenheten kan
et byggverk eller en bygningsdel befinner seg i. Benyttes ved beskrivelse omdisponeres av borettslaget/sameiet og dette kan påvirke boligens
av avvik. BRA. Vær oppmerksom på at NS 3940:2023 og eierseksjonsloven har
ulik definisjon av fellesareal. Ved arealmåling gjelder NS 3940:2023 som
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak definerer

---

[d002_d002 | Side [1]]
aturstein ogmetaller Mulighetformarinleire
Naturtyper-Utvalgte Naturtyper-verdsatte
Naturtyperpåland(NiN) Naturtyperpålandogiferskvann(HB13)
Naturvernområder Reindriftbeitehage
Reindriftekspropriasjonreinekspropriasjonsområde Reindriftflyttlei
Reindrifthøstbeiteårstidbeite Reindrifthøstvinterbeiteårstidbeite
Reindriftkonvensjonsområdereinkonvensjonsomrade Reindriftoppsamlingsområde
ReindriftReinavtaleområde Reindriftreinbeitedistrikt
Reindriftreinbeiteområde

---

[d002_d002 | Side [1]]
indre boligeier har vedlikeholdsplikt for fellesarealer og dette er kjent for bygningssakkyndig, eller fellesarealet har en særlig
tilknytning til boligen).
© iVerdi 2023 © Norsk takst 2023
Malen til denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet etter åndsverkloven og kan kun benyttes av medlemsforetakene i Norsk takst og
av takstingeniører som er sertifisert i slikt foretak, samt av kunder hos iVerdi og studenter hos NEAK. For andre aktører er eksemplarfremstilling av malen

---

[d002_d002 | Side [1]]
tak Kostnadsestimat: 20 000 - 100 000
• Tiltak:
Toalettrommet må renoverast. Ventilasjon
Kostnadsestimat: 100 000 - 200 000
Det er lagt opp til naturleg ventilering via vindauge.
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 14 av 25

## Side 25

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapport
Vurdering av avvik: Dette er en forenklet kontroll begrenset til de spørsmål og undersøkelser
• Det er påvist avvik i

---

[d002_d002 | Side [1]]
taleområde Reindriftreinbeitedistrikt
Reindriftreinbeiteområde Reindriftreindriftsanlegg
Reindriftreinkonsesjonsområde Reindriftreinrestriksjonsområde
Reindriftsiidaområde Reindriftsommerbeiteårstidsbeite
Reindrifttrekklei Reindriftvårbeiteårstidbeite
Reindriftvinterbeiteårstidbeite Skredhendelser
SR16-Skogressurskart16x16meter Statensvegvesenskvikkleiredata
Statligsikrafriluftslivsområder Storefjellskred
Stormflo StøykartleggingvegetterT-1442
StøysonerAvinorslufthavner

---

[d002_d002 | Side [1]]
 > Vaskerom > Generell Gå til side
Tiltak under kr 20 000 Våtrom > Underetasje > Vaskerom > Tilliggende Gå til side
konstruksjoner våtrom
Tiltak mellom kr 20 000 – 100 000
Tiltak mellom kr 100 000 – 200 000
Tiltak mellom kr 200 000 – 500 000 AVVIK SOM KAN KREVE TILTAK
Tiltak over kr 500 000
Utvendig > Taktekking Gå til side
Utvendig > Nedløp og beslag Gå til side
Utvendig > Veggkonstruksjon Gå til side
Utvendig > Vinduer Gå til side
Innvendig > Overflater Gå til side
Oppdragsnr.: 18920-1391 Befaringsdato:

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
.
Kostnadsestimat: 200 000 - 500 000
Innvendige dører
Formpressa fyllingsdørar. Ikkje synleg membran ved røyropppstikk
Vurdering av avvik:
• Det er påvist avvik som tilsier at det bør foretas tiltak på enkelte dører.
Konsekvens/tiltak
• Det bør foretas tiltak på enkelte dører.
Ein må pårekna justering av nokre innv. dørar.
Kostnadsestimat: Under 20 000
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 12 av 25

## Side 23

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34

---

[d002_d002 | Side [1]]
skadeutvikling.
• Andre tiltak:
• De påviste skader må utbedres. For å unngå skade må rehab. jobben sluttførast.
Kostnadsestimat: Under 20 000
Våtrommet må oppgraderst med dokumentert utføring.
Kostnadsestimat: Under 20 000
UNDERETASJE > VASKEROM
Generell
Eldre våtrom som er under oppgradering.
Vurdering av avvik:
• Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.
Våtrommet er demontert mtp renovering.
Konsekvens/tiltak
• Våtrommet må totalrenoveres. Alle forhold med tettesjikt,

---

[d002_d002 | Side [1]]
tak mellom kr 200 000 – 500 000
håndverkere eller entreprenører. Faktiske kostnader kan variere
betydelig, avhengig av individuelle valg, materialpriser og Tiltak over kr 500 000
markedsforhold. For å få en nøyaktig vurdering av
utbedringskostnadene anbefales ytterligere undersøkelser og
innhenting av flere pristilbud fra kvalifiserte fagfolk. Slike anslag
gis for TG3, der dette er mulig.
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 4 av 25

## Side 15

Fjærestadvegen 15, 6899 BALESTRAND Bygg og

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
an drivast som normalt basert på plukkhogst og med etablering og vedlikehald av nødvendige traktorvegar.
Sone 2
Restriksjonane i sone 2 vil vere dei same som i sone 1, men vassverkeigar står friare til å vurdere unntak frå reglane etter
særskild søknad
Bandlegginga vert følgt opp med reguleringsplan.
_____________________________________________________________________________________________________
Vedteken plan 25.03.2010

## Side 108

Kommuneplan, arealdel 2010-2020, Balestrand kommune 46
5.5 Viktige

---

[d002_d002 | Side [1]]
Terreng Gå til side
Tekniske installasjoner > Ventilasjon Gå til side
Tekniske installasjoner > Elektrisk anlegg Gå til side
Anslag på utbedringskostnad Tekniske installasjoner > Utstyr for varsling og Gå til side
slukking av brann
Våtrom > Etasje > Bad > Generell Gå til side
Våtrom > Etasje > Bad > Tilliggende konstruksjoner Gå til side
våtrom
Spesialrom > Underetasje > Toalettrom > Overflater Gå til side
og konstruksjon
Våtrom > Underetasje > Vaskerom > Generell Gå til side
Tiltak under kr 20 000 Våtrom

---

[d002_d002 | Side [1]]
AND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen 18
4640 SOGNDAL 6856 SOGNDAL
Tilstandsrapport
Nokre vindauge treng justering. Dei eldste vindaugene har oppnådd
forventa levetid, utskifting er pårekneleg.
Kostnadsestimat: 100 000 - 200 000
Fukt i rom under altan
Det er ikkje montert beslag i nedkant.
Fukt i rom under altan
INNVENDIG
Døme på vindauge i murvegg utan solebenk i nedkant. Overflater
Dører
Laminat og flis på golv. På bodareal er det sponplate og betong
Platekledde veggar som er måla.

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
plan)
• Balestrand vassverk i Esebotn og på Skåsheim. (I samsvar med gjennomført frådeling)
Friområde
Friområde i gjeldande kommuneplan og reguleringsplanar er lagt inn.
Det er ikkje vurdert å vere trong for nye areal til friområde.
Andre byggeområde
Andre byggeområde i gjeldande kommuneplan og reguleringsplanar er lagt inn.
Det er vurdert som viktig å leggje til rette for naustområde og båtplassar ut i frå eit ynskje om å styrkje
busetjing og gje eit grunnlag for av nokre næringar. Det er ut i frå dette

---

[d002_d002 | Side [1]]
råde for utleigehytter.
Torsnes ja 18 Delvis nytta av Fleksibo i dag. Vert utvida mot vest med ca 13 da.
Menes nei 61 Nytt område for utleigehytter.
Vetlefjorddalen (Meel) ja 6 Beheld eksisterande areal. Arealet har lege inne i gjeldande plan men
er ikkje teke i bruk.
Det er i tillegg ca 25 da unytta forretningsareal på Holmamyrane og i Balestrand sentrum. Det er også ledige lokale i
eksisterande forretningsbygg. Det er ikkje gjort framlegg om nye areal til dette

---

[d002_d002 | Side [1]]
nader
Første runde
Vedtak av planprogram - arealdelen 13.04.2005 Formannskapet
Kunngjering av oppstart og folkemøte 31.03.2005 Rådmannen
Folkemøte Vetlefjorden 04.04.2005 Formannskapet
Folkemøte Balestrand sentrum 05.04.2005 Formannskapet
Folkemøte Nessane 06.04.2005 Formannskapet
Temautgreiingar sett i gang Sommar 2005 Rådmannen
Innspel - 22 skriftlege innspel (følgjer saka vidare) 2005-2007 Rådmannen Er vurderte og følger
saka vidare
Andre runde
Sak - vedtak om igangsetting av planarbeid for 13.02.2008

---

[d002_d002 | Side [1]]
 avdekket.
Informasjon om utbedringskostnader Tiltak under kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller
uregelmessigheter, samt foreslåtte tiltak. Disse anslagene er Tiltak mellom kr 100 000 – 200 000
veiledende, angis i fem intervaller, er basert på generelle
erfaringstall, og må ikke forveksles med konkrete pristilbud fra Tiltak mellom kr 200 000 – 500 000
håndverkere eller entreprenører.

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
 skal det vere minimum 2 oppstillingsplassar for bil, og minimum uteplass/leikeareal på 100 m2.
Retningsliner
Reguleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Ein skal unngå å bygge på dyrka og dyrkbar mark, særskild når areal inngår i eit produksjonsareal av noko storleik.
Sæle, spreidd bygging
Om planområdet
Planområdet ligg på Sæle i tilknyting til Sæle sag og nytt
næringsområde. Er eit nytt område for spreidd bygging i

---

[d002_d002 | Side [1]]
l områder uten
inneluftsmålinger,erdetantattatradonegenskaper av engeologitype er det samme i hele landet. I praksis kan det forventes noe variasjon i
radonegenskaperipolygoneravdensamme geologitypen. I tilleggkan det forventes variasjon i radonegenskaper innenfor et polygon.
Objekter
Aktsomhetsgrad Antall
Moderattillav 3
Norkart Områdeanalyse 26.01.2026 Side 11 av 12

## Side 57

Tettsteder
Kilde Statistisksentralbyrå Versjon 25.01.2026
Omdatasettet Tegnforklaring
Tettstederergeografiskeområdersom har

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
ger og båtplassar i området.
Før området kan bli teke i bruk som utbyggingsområde er det krav om rasvurdering som dokumentasjon på tryggleik,
jf PBL §68 og TEK §7-32.
Retningsliner
Reguleringsplanen skal vise opparbeiding av området, plassering og utforming av bygg. Type verksemd skal vere
utleigehytter/utleigeeiningar med tilhøyrande anlegg. Anlegget skal framstå som eit samla anlegg, der det ikkje vert
lagt opp til seinare frådeling/oppdeling i private hytter. Avkjørsle vert frå eksisterande

---

[d002_d002 | Side [1]]
nda og liknande som inngår i ”bebygd areal (BYA)” etter NS 3940, må ikkje overstige BYA=220
m2. På kvar tomt skal det vere minimum 2 oppstillingsplassar for bil, og minimum uteplass/leikeareal på 100 m2.
Retningsliner
Reguleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Det er ein føresetnad å nytte eksisterande tilkomst veg til Dale som avkjørsle frå riksveg. Ein skal unngå å bygge på
dyrka og dyrkbar mark, særskild når areal inngår i

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
slutninger.
11Berørtedatasett
Aktsomhetskartforjord-ogflomskred Aktsomhetskartforkvikkleireskred
Aktsomhetskartforsnøskred Faresonekartforskredibrattterreng
FKB-AR5 Kulturminner-Kulturmiljøer
LøsmasserN50/N250 Maringrense
NaturtyperiNorge-landskap Radon
Tettsteder
88Sjekkede,ikkeberørtedatasett
100-meterbeltekyst Aktsomhetskartforsteinsprang
Akvakulturlokaliteter Ankringsområder
Arteravnasjonalforvaltningsinteresse Bergrettigheter
Byggeforbudssonerkraftledninger Dybdedata
Dyrkbarjord

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
m2. På kvar tomt skal det vere minimum 2 oppstillingsplassar for bil, og minimum uteplass/leikeareal på 100 m2.
Retningsliner
Reguleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle. Dersom ny eller endra bruk av avkjøring er ein føresetnad, må dette takast opp og avklarast med Statens
vegvesen før bygging eller frådeling til tomt kan bli gjennomført. Ein skal unngå å bygge på dyrka og dyrkbar mark,
særskild når areal inngår i eit

---

[d002_d002 | Side [1]]
 må området gå inn i ein reguleringsplan (detaljregulering).
Før området kan bli teke i bruk som utbyggingsområde er det krav om godkjenning av plan og ferdigstilling av rasvoll,
jf PBL §68 og TEK §7-32 og tråd i tråd med rammer sett i ROS analysen for området
Retningsliner
Utbyggingsplanen skal vise avkjørsle/tilkomstveg, tomtedeling, krav til utnyttingsgrader og utforming av bygg.
Avkjørsle et tenkt frå riksveg søraust i området.
Vetlefjorddalen, hytteområde
Om planområdet
Planområdet ligg i

---

[d002_d002 | Side [1]]
pp til 20% av boligene har
radonkonsentrasjonerover200Bq/m3, med 70%statistisk sikkerhet. Der hvor det ikke er nok data, eller hvor det ikke er nok statistisk sikkerhet for å
beregneaktsomhetforradon,erområder klassifisertsom «usikker aktsomhet». Alunskifer er tilknyttet forhøyde radonkonsentrasjoner. Områder hvor
detfinnesalunskifererklassifisertsom «særlighøy aktsomhet». Med åoverføre kunnskap fra områder med inneluftsmålinger til områder uten
inneluftsmålinger,erdetantattatradonegenskaper av

---

[d002_d002 | Side [1]]
uleringsplanane skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Bygging må ikkje komme i konflikt med registrerte kulturminne på området.
Dersom ny eller endra bruk av avkjøring er ein føresetnad, må dette takast opp og avklarast med Statens vegvesen
før bygging eller frådeling til tomt kan bli gjennomført. Ein skal unngå å bygge på dyrka og dyrkbar mark, særskild når
areal inngår i eit produksjonsareal av noko storleik.
Målsnes, spreidd bygging
Om

---

[d002_d002 | Side [1]]
an være i strid med teknisk
forskrift og mangle godkjennelse hos kommunen for den aktuelle
Er du som forbruker misfornøyd med bygningssakkyndiges arbeid eller
bruken, uten at dette får betydning for om arealet måles og oppgis i
opptreden ved taksering av bolig eller fritidshus, se
tilstandsrapporten. Når arealet måles tas det ikke hensyn til om arealet
www.takstklagenemnd.no for mer informasjon
er lovlig oppført eller om bruken er lovlig, bruksendringer, lysforhold
eller andre

---

[d002_d002 | Side [1]]
lige forfølge overtredelser. Kommunen kan pålegge deg å avslutte den
råd om rapporten ikke gir deg svar. Den bygningssakkyndige kan ikke vurdere og ulovlige bruken, eventuelt å rette eller tilbakeføre rommet til godkjent
svare på alle spørsmål, og kan heller ikke vite om kommunen kan gi unntak for bruk.
kravene som gjelder. Vil du vite mer?
Oppdragsnr.: 18920-1391 Befaringsdato: 28.11.2025 Side: 20 av 25

## Side 31

Fjærestadvegen 15, 6899 BALESTRAND Bygg og Taksering AS
Gnr 306 - Bnr 34 Navarsetevegen

---

[d002_d002 | Side [1]]
på
bygningssakkyndig avdekker at en bolig ikke ser ut til å være delt opp i brannceller helse og sikkerhet, for eksempel krav til rømningsvei.
etter kravene i byggteknisk forskrift på befaringstidspunktet, skal det opplyses om
dette. Bruksendring som krever godkjenning, og som ikke er søkt bruksendret,
er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32
Reglene om bruksendring og brannceller kan være kompliserte. Søk videre faglige forfølge overtredelser. Kommunen kan pålegge deg å avslutte

---

[d002_d002 | Side [1]]
n avdekke eventuelle
separate boliger.
bruksendringer og avvik i branncelleinndeling
Rom for varig opphold har krav til takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på byggetegninger hvis de er tilgjengelige og dette er og lysforhold som må være oppfylt. Du kan søke kommunen om unntak
en del av oppdraget,og vurderer bruken av boligen opp mot tegningene. Hvis den for kravene, men kan ikke regne med å få unntak for krav som går på
bygningssakkyndig avdekker at en bolig ikke ser ut til å være

---

[d002_d002 | Side [1]]
jøkken, soverom, soverom
Etasje
2, bad
Gang, soverom, soverom 2, bod,
Underetasje Garasje
toalettrom, vaskerom
Kommentar
Under altan er det utebod.
Lovlighet
Byggetegninger
Det foreligger ikke tegninger
Kommentar: Det er ikkje framlagd teikningar av bygningen. Det er tydeleg at planløysinga er endra på eit tidspunkt, ukjent når.
Brannceller
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskrift? Ja Nei
Nyere håndverkstjenester
Er det ifølge eier utført

---

[d002_d002 | Side [1]]
stallasjoner utenfor
bygningen • full funksjonstesting av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens estetikk og
arkitektur • bygningens lovlighet (bortsett fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og dette

---

[d002_d002 | Side [1]]
ommet både kan være i strid med
• Normal slitasjegrad: Forventet nedsliting av materiale i overflaten som teknisk forskrift og mangle godkjennelse i kommunen for den aktuelle
er basert på enkle visuelle observasjoner. Kan vurderes sammen med bruken, uten at dette vil få betydning for valg av arealkategori.
bygningsdelens alder.
• Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012
• Forventet gjenværende brukstid: Anslått tid et byggverk eller en del av og 2023) og veiledningen til

---

[d002_d002 | Side [1]]
ndra bruk av avkjøring er ein føresetnad, må dette takast opp og avklarast med Statens vegvesen
før bygging eller frådeling til tomt kan bli gjennomført. Ein skal unngå å bygge på dyrka og dyrkbar mark, særskild når
areal inngår i eit produksjonsareal av noko storleik.
Bakkaviki-Tjugum, spreidd bygging
Om planområdet
Planområdet ligg på nordsida av Esefjorden mellom Bakkaviki og Tjugum.
Er eit nytt område for spreidd bygging i LNF-område. Storleik ca 162

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
 markedsverdi kan ikke baseres på en matematisk beregning basert på
antall kvadratmeter opplyst i rapporten. Opplysninger om areal kan altså ikke alene Bruksendring er å endre bruken av et rom fra en tillatt bruk til en annen.
benyttes for å beregne eiendommens verdi. Dette kan kreve søknad og tillatelse, for eksempel hvis du endrer et rom
fra bod til soverom eller arbeidsrom,eller hvis du endrer en bolig til to
Den bygningssakkyndige kan avdekke eventuelle
separate boliger.
bruksendringer og avvik i

---

[d002_d002 | Side [1]]
dd. Ved tilbygg er det
er knytt til kontroll.
betongstein som er nytta.
Kostnadsestimat: Under 20 000
Forstøtningsmurer
Det er oppført bakkamur i bakkant av eigedommen.
Vurdering av avvik:
• Det er påvist mindre sprekker og/eller skjevheter i muren.
Bakkamuren hellar ein del, kan tyda på svak fundamentering.
Konsekvens/tiltak
• Påviste skader må utbedres.
Muren har såpass mykje helling at på eit tidspunkt vil den truleg leggja
seg over på sida, uråd å sei når det evt. vil skje. Utbetring er

---

[d002_d002 | Side [1]]
ne skal vise opparbeiding av området, plassering og utforming av bygg, tilkomst, parkering og ev.
avkjørsle.
Ein skal unngå å bygge på dyrka og dyrkbar mark, særskild når areal inngår i eit produksjonsareal av noko storleik.
Bebygd areal er det arealet som en bygning dekker av terrenget
_____________________________________________________________________________________________________
Vedteken plan 25.03.2010

## Side 106

Kommuneplan, arealdel 2010-2020, Balestrand kommune 44
5.3 Områder for

---

[d002_d002 | Side [1]]
et enkelte objekt, basert på ei
risikovurdering.
Type Skorstein: Stålskorstein
Type eldstad: Lukka eldstad for ved
Avvik:
Anmerking:
Andre tilhøve: Det er varsla feiing i 2022, 2024 og 2025 utan at det har vore respons
på varselet.
Andre tilhøve:
Me minner samstundes om at huseigar alltid er ansvarleg for å melda til kommunen (Sogn
brann og redning IKS) viss det blir gjort endringar på fyringsanlegget, som t.d. utskifting,
nymontering eller fjerning av eldstad.

## Side 124

Nymontering, rehabilitering

---

[d002_d002 | Side [1]]
ik ca 12 da.
Føresegner
Innanfor området vert det tillate småhus som einebustader eller rekke/tunløysingar med maksimal gesimshøgd 7
meter og mønehøgd 9 meter. Bygg skal ha saltak med takvinkel min 22 grader. Møneretning skal vere normal eller
parallell med koteretning. Utbygd areal må ikkje overstige %-BYA=25. For kvart husvære det vere minimum 2
oppstillingsplassar for bil, og minimum uteplass/leikeareal på 100 m2.
Før området kan bli teke i bruk som utbyggingsområde er det krav om godkjenning av plan og

---

[d002_d002 | Side [1]]
bruken som både eigar/tiltakshavar og kommunen
som lokal plan og byggesaksstyremakt må halde seg til. På same måte må også andre styremakter som
fylkeskommune, Fylkesmann, Statens Vegvesen m.v halde seg til desse rammene.
Arealbruk vist på plankartet er gjeve med heimel i Plan og bygningslova § 20-4 første ledd. Føresegnene
i dette plandokumentet er gjeve med direkte heimel i Plan og bygningslova § 20-4 andre ledd. For å gjere
føresegnene tydelege er desse markerte med ramme og gjeve ein grøn

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Tvangssal – avgrensa kjøparrettar og ingen avhendingslov",
      "evidence": [
        "Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar. Lov om avhending av fast eiendom (avhendingsloven) gjelder ikkje.",
        "Det nemnast at det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast.",
        "Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600.",
        "Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal."
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
      "description": "Utlegg og arrest – rettsleg forfølging av eigar er under behandling",
      "evidence": [
        "ALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200",
        "GJELDER: KALLOUCHE MOHAMED ALOUATI F.NR: 070685 GJELDER: MOUSSA KAMAR F.NR: 270794",
        "TINGRETT: SOGN OG FJORDANE SAKSNR: 25-023089TVA-TSOF/TSOG"
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
      "description": "Betydelege pengeheftingar på eigedomen – to pantedokument til Sogndal kommune",
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
      "description": "Store eller alvorlige bygningsmessige avvik (TG3) – takkonstruksjon/loft",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft",
        "Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida.",
        "Isolasjon tettar mellom sperr og hindrar lufting. Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol.",
        "Takkonstruksjonen sin styrke bør sjekkast mtp snølast."
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
      "description": "Store eller alvorlige bygningsmessige avvik (TG3) – balkongar/terrasse med vassinntrengning",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Utvendig > Balkonger, terrasser og rom under balkonger",
        "Tekkingen på balkong/terrasse har utettheter. Det er montert stålplater under bjelkelag. Stålplatetekkinga fungerar ikkje fullgodt slik at det trekkjer vatn ned i arealet under altanen.",
        "Konstruksjonen har ei utforming som gjer at det ikkje tettar, vatn trekkjer inn att på platene då det er veldig lite fall.",
        "Kostnadsestimat: 100 000 - 200 000"
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
      "description": "Store eller alvorlige bygningsmessige avvik (TG3) – rom under terreng med fuktgjennomtrengning",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Innvendig > Rom Under Terreng",
        "Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv.",
        "Mer enn halvparten av forventet levetid på drenering er overskredet.",
        "Ved tilbygd altan er det ein del fuktgjennomgang, dette skuldast truleg innsig frå tredekke som ikkje er utført med tetting som er fullgod."
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
      "description": "Store eller alvorlige bygningsmessige avvik (TG3) – ventilasjon",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Ventilasjon",
        "Det er lagt opp til naturleg ventilering via vindauge."
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
      "description": "Store eller alvorlige bygningsmessige avvik (TG3) – elektrisk anlegg utan dokumentasjon",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Elektrisk anlegg",
        "Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning. Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd.",
        "Kostnadsestimat: Under 20 000"
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
      "risk_id": "R09",
      "description": "Frostskade på røyrinstallasjonar – bygningen har stått utan varme",
      "evidence": [
        "N.B. bygningen har stått utan varme. Toalett i 1. etg. frostskada.",
        "Anlegget må sjekkast av fagkunning før ein set på vatnet.",
        "Delar av røyropplegget på toalettrom i under etg. er frå byggjeår, vurdert som utdatert.",
        "Bygningen har stått ubebudd ei tid, det er avdekka skade på m.a. toalett i 1. etg. som tyder på frostskade."
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
      "risk_id": "R10",
      "description": "Våtrom (bad og vaskerom) krev totalrenovering – manglar membran og dokumentasjon",
      "evidence": [
        "STORE ELLER ALVORLIGE AVVIK: Våtrom > Etasje > Bad > Generell",
        "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav. Det er ikkje synleg membran ved sluk eller ved røyroppstikk.",
        "Eldre våtrom som er under oppgradering. Våtrommet er demontert mtp renovering.",
        "Våtrommet må totalrenoveres. Alle forhold med tettesjikt.",
        "Kostnadsestimat: 100 000 - 200 000"
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
      "description": "Manglande ferdigattest og bygningsteikningar – ulovlege eller udokumenterte endringar",
      "evidence": [
        "Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv.",
        "Det er ikkje framlagd teikningar av bygningen. Det er tydeleg at planløysinga er endra på eit tidspunkt, ukjent når.",
        "Informasjon om manglande ferdigattest/midlertidig attest og manglande bygningsteikningar er vedlegg til salgsoppgåva."
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
      "description": "Avvik i branncelleinndeling – mogleg ulovleg bruk",
      "evidence": [
        "Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskrift? Ja",
        "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser."
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
      "risk_id": "R13",
      "description": "Manglande og defekt brannvarslingsanlegg og brannslokkingsutstyr",
      "evidence": [
        "Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja",
        "Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja. Batteri må skiftast.",
        "Kostnadsestimat: Under 20 000"
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
      "risk_id": "R14",
      "description": "Manglande radonmåling og ingen radonsperre i bygget",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Det bør gjennomføres radonmålinger.",
        "Kostnad er knytt til måling av radonnivå. Kostnadsestimat: Under 20 000"
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
      "risk_id": "R15",
      "description": "Ustabil forstøtningsmur med teikn på svak fundamentering",
      "evidence": [
        "Det er påvist mindre sprekker og/eller skjevheter i muren. Bakkamuren hellar ein del, kan tyda på svak fundamentering.",
        "Muren har såpass mykje helling at på eit tidspunkt vil den truleg leggja seg over på sida, uråd å sei når det evt. vil skje.",
        "Utbetring er nødvendig."
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
      "risk_id": "R16",
      "description": "Vindauge med avvik – vanskeleg å opne/lukke, kondensering og sprekker i trevirke",
      "evidence": [
        "Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.",
        "Det er påvist tegn på innvendig kondensering av enkelte vindusglass.",
        "Karmene i vinduer er slitte og det er sprekker i trevirket.",
        "Vindauge er montert utan beslag med skrå bord som fører til fuktopptrekk.",
        "Dei eldste vindaugene har oppnådd forventa levetid, utskifting er pårekneleg.",
        "Kostnadsestimat: 100 000 - 200 000"
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
      "risk_id": "R17",
      "description": "Skada kjøkkeninnredning – krev utbetring eller utskifting",
      "evidence": [
        "Det er påvist skader på overflater/kjøkkeninnredning utover normal slitasjegrad. Skada/dels demontert innredning.",
        "Det må påregnes lokal utbedring/utskiftning. Må utbetra del av innredning.",
        "Kostnadsestimat: 20 000 - 100 000"
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
      "risk_id": "R18",
      "description": "Manglande respons på feiarvarslar – branntryggleik for pipe og eldstad",
      "evidence": [
        "Det er varsla feiing i 2022, 2024 og 2025 utan at det har vore respons på varselet.",
        "Type Skorstein: Stålskorstein. Type eldstad: Lukka eldstad for ved."
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
      "risk_id": "R19",
      "description": "Utinglyste pliktar og ikkje endelege offentlege planar kan foreligge",
      "evidence": [
        "Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar.",
        "Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar."
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
      "risk_id": "R20",
      "description": "Eigedomen ligg i område med aktsomheit for jord-, flom- og snøskred",
      "evidence": [
        "Berørte datasett inkluderer: Aktsomhetskart for jord- og flomskred, Aktsomhetskart for kvikkleireskred, Aktsomhetskart for snøskred, Faresonekart for skred i bratt terreng.",
        "Før det kan bli gjeve løyve til frådeling eller bygging av bustad eller fritidshus er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32."
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
      "risk_id": "R21",
      "description": "Energimerking raud G – svært låg energieffektivitet",
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
      "risk_id": "R22",
      "description": "Ukjent byggegrunn – ingen detaljert kunnskap om grunnforhold",
      "evidence": [
        "Ein har ikkje detaljert kunnskap om byggegrunn.",
        "Antatt betongfundament og grunnmur i betong med noko innslag av leca som er pussa. Det meste av muren er innkledd."
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
      "risk_id": "R23",
      "description": "Arbeid utført ufaglært – overflater og innvendig arbeid ber preg av ufaglært utføring",
      "evidence": [
        "Overflater ser ut til å vera pussa opp i tida etter at dagens eigar overtok. Arbeidet ber preg av å vera utført ufaglært.",
        "Ein har ikkje detaljert info om kva som er gjort og når det er utført.",
        "Kostnadsestimat: 100 000 - 200 000"
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
      "risk_id": "R24",
      "description": "Kjøpar vil truleg ikkje motta alle nøklar – kan ikkje gjerast gjeldande som mangel",
      "evidence": [
        "På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil motta alle nøklar for eigedomen. Dette kan ikkje gjerast gjeldande som ein mangel."
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
      "risk_id": "R25",
      "description": "Eigedomen kan ikkje vere rydda og nedvaska ved overtaking – kjøpar sitt ansvar",
      "evidence": [
        "For det tilfelle at eigedomen ikkje er rydda og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte føre og må bere kostnadane for, og kan ikkje gjerast gjeldande som ein mangel."
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
      "description": "Grunnforureining – ingen registrert, men kan likevel førekomme",
      "evidence": [
        "Ingen grunnforurensing registrert på matrikkelenheten. I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen."
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
      "risk_id": "R27",
      "description": "Lausøyre og tilbehøyr – medhjelpar kan ikkje garantere kva som følgjer med ved tvangssal",
      "evidence": [
        "Ettersom dette er eit tvangssal, kan medhjelpar ikkje stå inne for at lausøyre og tilbehøyr som etter..."
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
      "risk_id": "R28",
      "description": "Kommunale gebyrer og eigedomsskatt – løpande kostnadar for kjøpar",
      "evidence": [
        "Gebyr Fakturert beløp i 2025: Avløp 3093,60 kr, Eiendomsskatt 8780,00 kr, Feiing 670,00 kr, Vann 4726,80 kr, Sum 17270,40 kr"
      ],
      "source_documents": [
        "d002_d002"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "lausøyre og tilbehøyr tvangssal kva følgjer med eigedomen",
    "toalettrom underetasje renovering kostnadsestimat tilstandsgrad",
    "taktekking nedløp beslag veggkonstruksjon TG2 avvik kostnadsestimat",
    "avløp VA-anlegg ukjent utføring skjult røyropplegg",
    "kulturminner registrert eigedom Fjærestadvegen 15 Balestrand",
    "innvendige dører avvik justering kostnadsestimat",
    "grunnforureining registrert matrikkel Sogndal",
    "radon aktsomhetsgrad moderat til lav Balestrand"
  ],
  "reasoning": "\nGjennomgang av alle 25 opphavleg identifiserte risikoar mot dokumentevidensen:\n\n**Validerte risikoar med full støtte (confidence 1.0):**\n- R01–R10, R11, R13, R14, R16, R18, R21: Alle har direkte og tydeleg evidens i dokumentchunkene. Confidence oppretthaldast på 1.0.\n\n**Justerte risikoar:**\n- R12 (branncelleinndeling): Evidensen er klar (Ja-svar i tilstandsrapporten), men det er ikkje spesifisert kva type avvik. Confidence justert opp frå 0.95 til 0.95 (oppretthaldast).\n- R15 (forstøtningsmur): Evidensen er god og spesifikk. Confidence justert opp frå 0.9 til 0.95.\n- R17 (kjøkkeninnredning): Evidensen er klar. Confidence justert opp frå 0.9 til 0.95.\n- R16 (vindauge): Evidensen er svært god og detaljert. Confidence justert opp til 1.0.\n- R22 (ukjent byggegrunn): Evidensen støttar risikoen, men det er ikkje dokumentert konkrete skadar. Confidence 0.85.\n- R23 (ufaglært arbeid): Evidensen er klar. Confidence justert opp til 0.95.\n\n**Nye risikoar identifisert som manglar:**\n- R26: Grunnforureining – ikkje registrert, men kan likevel førekomme. Dokumentet seier eksplisitt at grunnforureining som ikkje er registrert kan førekomme. Confidence 0.7 (lav sannsynlegheit, men relevant å nemne).\n- R27: Lausøyre og tilbehøyr – medhjelpar kan ikkje garantere kva som følgjer med. Dokumentet nemner dette eksplisitt for tvangssal. Confidence 0.8.\n- R28: Kommunale gebyrer og eigedomsskatt – løpande kostnadar. Dokumentet viser konkrete tal for 2025 (totalt 17 270 kr). Confidence 0.75 (ikkje ein kritisk risiko, men relevant for kjøpar).\n\n**Risikoar som vart vurdert fjerna men oppretthaldast:**\n- R19 (utinglyste pliktar): Evidensen er generell/standardformulering, men er eksplisitt nemnt i salgsoppgåva. Confidence 0.85 oppretthaldast.\n- R20 (skredfare): Evidensen frå Norkart-analysen er klar på at fleire aktsomhetskart er berørt. Confidence 0.85 oppretthaldast.\n- R24 og R25: Desse er meir praktiske/administrative risikoar enn tekniske, men er eksplisitt nemnt i salgsoppgåva og er relevante for kjøpar. Confidence 0.85 oppretthaldast.\n\n**Manglande risikoar som burde vore identifisert:**\n1. Grunnforureining (R26) – nemnt i matrikkelutskrift\n2. Lausøyre/tilbehøyr ved tvangssal (R27) – nemnt i salgsoppgåva\n3. Kommunale gebyrer/eigedomsskatt (R28) – konkrete tal i dokumentet\n4. Avlaup/VA-anlegg med ukjent utføring – avlaup ligg skjult, ukjent utføring. Dette er delvis dekka av R09, men bør undersøkast nærmare.\n5. TG2-avvik på taktekking, nedløp/beslag, veggkonstruksjon – desse er lista i samandrag men ikkje identifisert som eigne risikoar. Bør undersøkast.\n"
}

## Raw Response
```json
{
  "id": "msg_01P5WZ4zmEUMNtz5jPxDqTHC",
  "container": null,
  "content": [
    {
      "id": "toolu_019osKHYrHZKq31QE6WsgTSh",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Tvangssal – avgrensa kjøparrettar og ingen avhendingslov",
            "evidence": [
              "Eigedomen seljast som den er, og ved tvangssal har kjøparen avgrensa tilgang til å påberope manglar. Lov om avhending av fast eiendom (avhendingsloven) gjelder ikkje.",
              "Det nemnast at det ved tvangssal ikkje er høve til å heve kjøpet, og at kjøpesummen skal betalast sjølv om prisavslag krevjast.",
              "Eigenerklæring frå eigar vert ikkje fylt ut ved tvangssal. Dette er eit avvik frå NS 3600.",
              "Det er ikkje mogleg å teikne bustadseljarforsikring på eigedomar som seljes på tvangssal."
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
            "description": "Utlegg og arrest – rettsleg forfølging av eigar er under behandling",
            "evidence": [
              "ALG BESLUTTET 22.08.2025 21.00 GJELDER: HJEMMEL TIL EIENDOMSRETT 2021/1610610-1/200",
              "GJELDER: KALLOUCHE MOHAMED ALOUATI F.NR: 070685 GJELDER: MOUSSA KAMAR F.NR: 270794",
              "TINGRETT: SOGN OG FJORDANE SAKSNR: 25-023089TVA-TSOF/TSOG"
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
            "description": "Betydelege pengeheftingar på eigedomen – to pantedokument til Sogndal kommune",
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
            "description": "Store eller alvorlige bygningsmessige avvik (TG3) – takkonstruksjon/loft",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Utvendig > Takkonstruksjon/Loft",
              "Det er ingen lufting i konstruksjonen. Det er ikkje lufting langs raft. Raftekasse er tett på baksida.",
              "Isolasjon tettar mellom sperr og hindrar lufting. Plassbygd takkonstruksjon med stor senteravstand mellom kvar takstol.",
              "Takkonstruksjonen sin styrke bør sjekkast mtp snølast."
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
            "description": "Store eller alvorlige bygningsmessige avvik (TG3) – balkongar/terrasse med vassinntrengning",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Utvendig > Balkonger, terrasser og rom under balkonger",
              "Tekkingen på balkong/terrasse har utettheter. Det er montert stålplater under bjelkelag. Stålplatetekkinga fungerar ikkje fullgodt slik at det trekkjer vatn ned i arealet under altanen.",
              "Konstruksjonen har ei utforming som gjer at det ikkje tettar, vatn trekkjer inn att på platene då det er veldig lite fall.",
              "Kostnadsestimat: 100 000 - 200 000"
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
            "description": "Store eller alvorlige bygningsmessige avvik (TG3) – rom under terreng med fuktgjennomtrengning",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Innvendig > Rom Under Terreng",
              "Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv.",
              "Mer enn halvparten av forventet levetid på drenering er overskredet.",
              "Ved tilbygd altan er det ein del fuktgjennomgang, dette skuldast truleg innsig frå tredekke som ikkje er utført med tetting som er fullgod."
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
            "description": "Store eller alvorlige bygningsmessige avvik (TG3) – ventilasjon",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Ventilasjon",
              "Det er lagt opp til naturleg ventilering via vindauge."
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
            "description": "Store eller alvorlige bygningsmessige avvik (TG3) – elektrisk anlegg utan dokumentasjon",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Tekniske installasjoner > Elektrisk anlegg",
              "Ettersom ein ikkje har fått noko informasjon om el. anlegget tilrår ein el. sjekk av fagkunning. Kostnad er knytt til kontroll, evt. reparasjonsbehov er ikkje kartlagd.",
              "Kostnadsestimat: Under 20 000"
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
            "risk_id": "R09",
            "description": "Frostskade på røyrinstallasjonar – bygningen har stått utan varme",
            "evidence": [
              "N.B. bygningen har stått utan varme. Toalett i 1. etg. frostskada.",
              "Anlegget må sjekkast av fagkunning før ein set på vatnet.",
              "Delar av røyropplegget på toalettrom i under etg. er frå byggjeår, vurdert som utdatert.",
              "Bygningen har stått ubebudd ei tid, det er avdekka skade på m.a. toalett i 1. etg. som tyder på frostskade."
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
            "risk_id": "R10",
            "description": "Våtrom (bad og vaskerom) krev totalrenovering – manglar membran og dokumentasjon",
            "evidence": [
              "STORE ELLER ALVORLIGE AVVIK: Våtrom > Etasje > Bad > Generell",
              "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav. Det er ikkje synleg membran ved sluk eller ved røyroppstikk.",
              "Eldre våtrom som er under oppgradering. Våtrommet er demontert mtp renovering.",
              "Våtrommet må totalrenoveres. Alle forhold med tettesjikt.",
              "Kostnadsestimat: 100 000 - 200 000"
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
            "description": "Manglande ferdigattest og bygningsteikningar – ulovlege eller udokumenterte endringar",
            "evidence": [
              "Ferdigattest/mellombels bruksløyve er ikkje å finne i våre arkiv.",
              "Det er ikkje framlagd teikningar av bygningen. Det er tydeleg at planløysinga er endra på eit tidspunkt, ukjent når.",
              "Informasjon om manglande ferdigattest/midlertidig attest og manglande bygningsteikningar er vedlegg til salgsoppgåva."
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
            "description": "Avvik i branncelleinndeling – mogleg ulovleg bruk",
            "evidence": [
              "Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskrift? Ja",
              "Bruksendring som krever godkjenning, og som ikke er søkt bruksendret, er ulovlig. Kommunen kan etter plan- og bygningsloven kapittel 32 forfølge overtredelser."
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
            "risk_id": "R13",
            "description": "Manglande og defekt brannvarslingsanlegg og brannslokkingsutstyr",
            "evidence": [
              "Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10 år? Ja",
              "Er det mangler på røykvarsler i boligen iht. forskriftskrav? Ja. Batteri må skiftast.",
              "Kostnadsestimat: Under 20 000"
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
            "risk_id": "R14",
            "description": "Manglande radonmåling og ingen radonsperre i bygget",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Det bør gjennomføres radonmålinger.",
              "Kostnad er knytt til måling av radonnivå. Kostnadsestimat: Under 20 000"
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
            "risk_id": "R15",
            "description": "Ustabil forstøtningsmur med teikn på svak fundamentering",
            "evidence": [
              "Det er påvist mindre sprekker og/eller skjevheter i muren. Bakkamuren hellar ein del, kan tyda på svak fundamentering.",
              "Muren har såpass mykje helling at på eit tidspunkt vil den truleg leggja seg over på sida, uråd å sei når det evt. vil skje.",
              "Utbetring er nødvendig."
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
            "risk_id": "R16",
            "description": "Vindauge med avvik – vanskeleg å opne/lukke, kondensering og sprekker i trevirke",
            "evidence": [
              "Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.",
              "Det er påvist tegn på innvendig kondensering av enkelte vindusglass.",
              "Karmene i vinduer er slitte og det er sprekker i trevirket.",
              "Vindauge er montert utan beslag med skrå bord som fører til fuktopptrekk.",
              "Dei eldste vindaugene har oppnådd forventa levetid, utskifting er pårekneleg.",
              "Kostnadsestimat: 100 000 - 200 000"
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
            "risk_id": "R17",
            "description": "Skada kjøkkeninnredning – krev utbetring eller utskifting",
            "evidence": [
              "Det er påvist skader på overflater/kjøkkeninnredning utover normal slitasjegrad. Skada/dels demontert innredning.",
              "Det må påregnes lokal utbedring/utskiftning. Må utbetra del av innredning.",
              "Kostnadsestimat: 20 000 - 100 000"
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
            "risk_id": "R18",
            "description": "Manglande respons på feiarvarslar – branntryggleik for pipe og eldstad",
            "evidence": [
              "Det er varsla feiing i 2022, 2024 og 2025 utan at det har vore respons på varselet.",
              "Type Skorstein: Stålskorstein. Type eldstad: Lukka eldstad for ved."
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
            "risk_id": "R19",
            "description": "Utinglyste pliktar og ikkje endelege offentlege planar kan foreligge",
            "evidence": [
              "Kjøper blir gjort merksam på at det kan føreligga eventuelle utinglyste pliktar og ikkje endelege offentlege planar som ikkje har framkome av medhjelpar sine eigne undersøkingar.",
              "Medhjelpar har ikkje undersøkt om det er føreteke innvendige ombyggingar."
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
            "risk_id": "R20",
            "description": "Eigedomen ligg i område med aktsomheit for jord-, flom- og snøskred",
            "evidence": [
              "Berørte datasett inkluderer: Aktsomhetskart for jord- og flomskred, Aktsomhetskart for kvikkleireskred, Aktsomhetskart for snøskred, Faresonekart for skred i bratt terreng.",
              "Før det kan bli gjeve løyve til frådeling eller bygging av bustad eller fritidshus er det krav om rasvurdering som dokumentasjon på tryggleik, jf PBL §68 og TEK §7-32."
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
            "risk_id": "R21",
            "description": "Energimerking raud G – svært låg energieffektivitet",
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
            "risk_id": "R22",
            "description": "Ukjent byggegrunn – ingen detaljert kunnskap om grunnforhold",
            "evidence": [
              "Ein har ikkje detaljert kunnskap om byggegrunn.",
              "Antatt betongfundament og grunnmur i betong med noko innslag av leca som er pussa. Det meste av muren er innkledd."
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
            "risk_id": "R23",
            "description": "Arbeid utført ufaglært – overflater og innvendig arbeid ber preg av ufaglært utføring",
            "evidence": [
              "Overflater ser ut til å vera pussa opp i tida etter at dagens eigar overtok. Arbeidet ber preg av å vera utført ufaglært.",
              "Ein har ikkje detaljert info om kva som er gjort og når det er utført.",
              "Kostnadsestimat: 100 000 - 200 000"
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
            "risk_id": "R24",
            "description": "Kjøpar vil truleg ikkje motta alle nøklar – kan ikkje gjerast gjeldande som mangel",
            "evidence": [
              "På generelt grunnlag kan det opplysast at kjøpar ofte ikkje vil motta alle nøklar for eigedomen. Dette kan ikkje gjerast gjeldande som ein mangel."
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
            "risk_id": "R25",
            "description": "Eigedomen kan ikkje vere rydda og nedvaska ved overtaking – kjøpar sitt ansvar",
            "evidence": [
              "For det tilfelle at eigedomen ikkje er rydda og nedvaska pr. overtaking, er dette kjøpar sitt ansvar å syte føre og må bere kostnadane for, og kan ikkje gjerast gjeldande som ein mangel."
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
            "description": "Grunnforureining – ingen registrert, men kan likevel førekomme",
            "evidence": [
              "Ingen grunnforurensing registrert på matrikkelenheten. I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen."
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
            "risk_id": "R27",
            "description": "Lausøyre og tilbehøyr – medhjelpar kan ikkje garantere kva som følgjer med ved tvangssal",
            "evidence": [
              "Ettersom dette er eit tvangssal, kan medhjelpar ikkje stå inne for at lausøyre og tilbehøyr som etter..."
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
            "risk_id": "R28",
            "description": "Kommunale gebyrer og eigedomsskatt – løpande kostnadar for kjøpar",
            "evidence": [
              "Gebyr Fakturert beløp i 2025: Avløp 3093,60 kr, Eiendomsskatt 8780,00 kr, Feiing 670,00 kr, Vann 4726,80 kr, Sum 17270,40 kr"
            ],
            "source_documents": [
              "d002_d002"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "lausøyre og tilbehøyr tvangssal kva følgjer med eigedomen",
          "toalettrom underetasje renovering kostnadsestimat tilstandsgrad",
          "taktekking nedløp beslag veggkonstruksjon TG2 avvik kostnadsestimat",
          "avløp VA-anlegg ukjent utføring skjult røyropplegg",
          "kulturminner registrert eigedom Fjærestadvegen 15 Balestrand",
          "innvendige dører avvik justering kostnadsestimat",
          "grunnforureining registrert matrikkel Sogndal",
          "radon aktsomhetsgrad moderat til lav Balestrand"
        ],
        "reasoning": "\nGjennomgang av alle 25 opphavleg identifiserte risikoar mot dokumentevidensen:\n\n**Validerte risikoar med full støtte (confidence 1.0):**\n- R01–R10, R11, R13, R14, R16, R18, R21: Alle har direkte og tydeleg evidens i dokumentchunkene. Confidence oppretthaldast på 1.0.\n\n**Justerte risikoar:**\n- R12 (branncelleinndeling): Evidensen er klar (Ja-svar i tilstandsrapporten), men det er ikkje spesifisert kva type avvik. Confidence justert opp frå 0.95 til 0.95 (oppretthaldast).\n- R15 (forstøtningsmur): Evidensen er god og spesifikk. Confidence justert opp frå 0.9 til 0.95.\n- R17 (kjøkkeninnredning): Evidensen er klar. Confidence justert opp frå 0.9 til 0.95.\n- R16 (vindauge): Evidensen er svært god og detaljert. Confidence justert opp til 1.0.\n- R22 (ukjent byggegrunn): Evidensen støttar risikoen, men det er ikkje dokumentert konkrete skadar. Confidence 0.85.\n- R23 (ufaglært arbeid): Evidensen er klar. Confidence justert opp til 0.95.\n\n**Nye risikoar identifisert som manglar:**\n- R26: Grunnforureining – ikkje registrert, men kan likevel førekomme. Dokumentet seier eksplisitt at grunnforureining som ikkje er registrert kan førekomme. Confidence 0.7 (lav sannsynlegheit, men relevant å nemne).\n- R27: Lausøyre og tilbehøyr – medhjelpar kan ikkje garantere kva som følgjer med. Dokumentet nemner dette eksplisitt for tvangssal. Confidence 0.8.\n- R28: Kommunale gebyrer og eigedomsskatt – løpande kostnadar. Dokumentet viser konkrete tal for 2025 (totalt 17 270 kr). Confidence 0.75 (ikkje ein kritisk risiko, men relevant for kjøpar).\n\n**Risikoar som vart vurdert fjerna men oppretthaldast:**\n- R19 (utinglyste pliktar): Evidensen er generell/standardformulering, men er eksplisitt nemnt i salgsoppgåva. Confidence 0.85 oppretthaldast.\n- R20 (skredfare): Evidensen frå Norkart-analysen er klar på at fleire aktsomhetskart er berørt. Confidence 0.85 oppretthaldast.\n- R24 og R25: Desse er meir praktiske/administrative risikoar enn tekniske, men er eksplisitt nemnt i salgsoppgåva og er relevante for kjøpar. Confidence 0.85 oppretthaldast.\n\n**Manglande risikoar som burde vore identifisert:**\n1. Grunnforureining (R26) – nemnt i matrikkelutskrift\n2. Lausøyre/tilbehøyr ved tvangssal (R27) – nemnt i salgsoppgåva\n3. Kommunale gebyrer/eigedomsskatt (R28) – konkrete tal i dokumentet\n4. Avlaup/VA-anlegg med ukjent utføring – avlaup ligg skjult, ukjent utføring. Dette er delvis dekka av R09, men bør undersøkast nærmare.\n5. TG2-avvik på taktekking, nedløp/beslag, veggkonstruksjon – desse er lista i samandrag men ikkje identifisert som eigne risikoar. Bør undersøkast.\n"
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
    "input_tokens": 23900,
    "output_tokens": 6667,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
