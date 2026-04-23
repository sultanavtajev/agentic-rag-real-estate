# Trace: agentic_reflecting_iter1
- **Run ID:** f0a703fa-8140-45ad-a1f0-2a1f41c34389
- **Tidspunkt:** 2026-03-23T10:48:40.143817+00:00
- **Varighet:** 107.03s
- **Input tokens:** 19948
- **Output tokens:** 5657

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
Risiko 1: Badet har TG3 (store eller alvorlige avvik). Badet er av eldre dato med sluk og membran fra ukjent byggeår. Membran og sluk er ikke fornyet, og badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt. Det må påregnes oppgradering innen kort tid.
  Confidence: 0.98
  Evidens: Med bakgrunn i at badet er av eldre dato og har sluk og membran som var gjeldene da bygget ble oppført. Normalt slit og elde fra ukjent byggeår må badet påregnes oppgradert innen kort tid; Da hverken membran eller sluk er fornyet, vurderes badets alder samlet ut fra byggeår. Badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt, både på grunn av tettesjiktets (membranens) alder og på grunn av manglende tett...; Våtrom > 2 etasje > Bad/wc > Generell – STORE ELLER ALVORLIGE AVVIK

Risiko 2: Manglende samsvarserklæring for det elektriske anlegget. Det fremgår av selgers egenerklæringsskjema/tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.
  Confidence: 0.97
  Evidens: Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget.

Risiko 3: Avvik fra godkjente byggetegninger – rominndeling stemmer ikke med byggetegninger. Kjøkkenet er flyttet til åpen løsning med stuen, og et soverom er etablert der kjøkkenet sto tidligere. Dette kan innebære ulovlig bruksendring.
  Confidence: 0.96
  Evidens: Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Kommentar: Rominndeling stemmer ikke med byggetegninger.; Kjøkken er flyttet til åpen løsning med stuen og et soverom er etablert der kjøkkenet sto tidligere.; Det er ikke samsvar mellom byggegodkjente tegninger og dagens planløsning

Risiko 4: Borettslagets balanse viser negativ egenkapital. Balansen viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi og borettsinnskuddet. Selv om dette ikke har direkte konsekvens for andelseierne, er det en finansiell risikofaktor.
  Confidence: 0.92
  Evidens: Borettslagets balanse viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi (eiendommens kjøpesum for mange år siden) og kjøpesummen borettslaget betalte for aksjeselskapet eiendommen lå i.; Balansen viser en negativ...; SUM EGENKAPITAL OG GJELD 228 836 573 / Sum gjeld 369 714 714

Risiko 5: Høy gjeld til konsernselskap. Borettslaget har en gjeld til konsernselskap på kr 199 349 583, og langsiktig gjeld til konsern (borettsinnskudd) på kr 168 714 523. Total gjeld er kr 369 714 714, som overstiger sum eiendeler på kr 228 836 573.
  Confidence: 0.93
  Evidens: Gjeld til konsernselskap 199 349 583; Langsiktig gjeld til konsern (borettsinnskudd) 168 714 523; Sum gjeld 369 714 714; SUM EGENKAPITAL OG GJELD 228 836 573

Risiko 6: Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle skjulte feil og mangler etter overtakelse.
  Confidence: 0.95
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.

Risiko 7: Selger har ikke bebodd eiendommen og har begrenset kunnskap om boligens tilstand. Selger er et profesjonelt selskap (Heimstaden Bostad Invest 10 AS) og har ikke personlig kjennskap til boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.
  Confidence: 0.9
  Evidens: Selger har ikke bebodd eiendommen og har derfor ikke informasjon og strømforbruket.; Eier av: Heimstaden Bostad Invest 10 AS

Risiko 8: Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke vet om radonverdiene i boligen er innenfor akseptable grenser.
  Confidence: 0.88
  Evidens: Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.

Risiko 9: Eiendommen er registrert på byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger eller restaureringer, og byantikvaren skal gi rådgivende uttalelse i byggesaker.
  Confidence: 0.92
  Evidens: Verneklasse/SEFRAK: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.; Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.; Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen.

Risiko 10: Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut med styrets godkjenning og under visse vilkår i inntil 3 år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.
  Confidence: 0.9
  Evidens: Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5‑3 til § 5‑10.

Risiko 11: Styregodkjennelse kreves for kjøper, og risikoen for ikke å bli godkjent påhviler kjøper. Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper er godkjent på overtakelsestidspunktet, og har ikke rett til å ta eiendommen i bruk dersom godkjennelse mangler.
  Confidence: 0.88
  Evidens: Risikoen for å bli godkjent som ny andelseier påhviler Selger.; Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier.; Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper dog ikke rett til å ta eiendommen i bruk, jf. borettslagslovens § 4‑5 (2).

Risiko 12: Antatte avløpsrør av støpejern som ligger skjult i konstruksjonen. Støpejernsrør er eldre og kan være utsatt for korrosjon og lekkasjer. Disse er ikke undersøkt (TGIU).
  Confidence: 0.87
  Evidens: Det er antatt avløpsrør av støpejern. Ligger skjult i konstruksjonen.; Bygningsdeler som ikke har blitt undersøkt (TGIU): Tekniske installasjoner > Avløpsrør

Risiko 13: Bygningen er fra 1894 og har høy alder, noe som innebærer generell risiko for skjulte feil og mangler i konstruksjoner som ikke er synlig tilgjengelige ved befaring.
  Confidence: 0.9
  Evidens: Boligbygg med flere boenheter - Byggeår: 1894; Bygninger kan ha skjulte feil og mangler som er vanskelig å oppdage ved befaring.; Elde og utidsmessighet kombinert med endret bruk, kan over tid avdekke skjulte feil og mangler som ikke oppdages ved visuell kontroll.

Risiko 14: Energikarakter F (rød) – svært dårlig energimerking. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.
  Confidence: 0.95
  Evidens: Energikarakter: F; Energifarge: Rød

Risiko 15: Legalpant på inntil 2G – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader. Dette innebærer at kjøpers eventuelle lån kan ha dårligere prioritet enn borettslagets krav.
  Confidence: 0.88
  Evidens: Borettslaget har legalpant på inntil 2G som Borettslaget har legalpanterett i andelen for krav på sikkerhet for betaling av felleskostnader.; Dette betyr at dekning av felleskostnader og andre krav fra borettslaget har prioritet over tinglyste lån når det gjelder borettslaget, på inntil 2 ganger folketrygdens grunnbeløp.

Risiko 16: Borettslaget inngår i en cashpool-ordning med morselskapet Heimstaden Bostad Invest 10 AS, og har en stor fordring til konsern på kr 202 265 547. Dette innebærer en konsentrasjonsrisiko knyttet til konsernets finansielle stilling.
  Confidence: 0.85
  Evidens: Fordring til konsern 202 265 547; Selskapet går i en likviditetsordning (cashpool) hvor selskapet har felles likvider med mor, Heimstaden Bostad Invest 10 AS.

Risiko 17: Ny kommuneplan fra 2015 kan få betydning for eksisterende reguleringsplaner. Eiendommen er regulert etter bestemmelser fra 1977, og ny kommuneplan kan endre rammebetingelsene for eiendommen.
  Confidence: 0.8
  Evidens: Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.; Eiendommen er regulert til boligformål etter bestemmelser i S‑2255, datert 28.07.1977. Ny kommuneplan fra 23. september 2015.

Risiko 18: Vinduer med avvik – enkelte vinduer er vanskelige å åpne/lukke og karmer er slitte. Vinduene er fra 1985 og kan ha begrenset gjenværende levetid.
  Confidence: 0.82
  Evidens: Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.; Karmene i vinduer er slitte; Årstall: 1985 Kilde: Produksjonsår på produkt

Risiko 19: Boden som er medtatt i BRA-e ligger på sameiets/borettslagets fellesareal og kan på et senere tidspunkt omdisponeres av sameiet/borettslaget. Kjøper har dermed ingen garanti for varig bruksrett til boden.
  Confidence: 0.88
  Evidens: Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA‑e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette

Dokumentkontekst:
[d005_d005 | Side [1]]
orhold
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
301 OSLO 208 318 0 853.7 m² BEREGNET AREAL Ikke relevant
(Ambita) Regulering
Adresse
Regulert område.
Iduns gate 4 A
Om tomten
Hjemmelshaver
Planert og opparbeidet fellesareal.
Andelsobjekt Tinglyste/andre forhold
På forespørsel har eier opplyst at de ikke er kjent med at bebyggelsen er behe昀琀et med skjulte feil/mangler, o昀昀entlige pålegg som ikke er u琀昀ørt
Boligselskap Org.nr. Leil. nr. Forretningsfører Eier av

---

[d005_d005 | Side [1]]
inntil 2G som Borettslaget har legalpanterett i andelen for krav på
Tinglyste heftelser Lovanvendelse
sikkerhet for betaling av felleskostnader. Dette betyr at dekning av felleskostnader og andre krav fra
Tinglyste heftelser og rettigheter: På eiendommen er det borettslaget har prioritet over tinglyste lån når det gjelder borettslaget, på inntil 2 ganger folketrygdens grunnbeløp. Regelverk og generelle opplysninger
tinglyst følgende heftelser og rettigheter som følger betaling av felleskostnader, og kan

---

[d005_d005 | Side [1]]
ner > Avløpsrør borettslaget, og er tillatt så lenge det ikke er til ulempe for siden) og kjøpesummen borettslaget borettslaget betalte
‑ Tekniske installasjoner > Varmtvannstank andre beboere. for aksjeselskapet eiendommen lå i. Den Energiforbruket varierer fra husstand til husstand.
regnskapsmessige negative egenkapitalen har ingen
Forkjøpsrett: Ingen forkjøpsrett i borettslaget. konsekvens for borettslaget eller andelseierne, men
Regulering
forblir i regnskapet. Dette følger også av notene

---

[d005_d005 | Side [1]]
er og rettigheter som følger betaling av felleskostnader, og kan kreve inn pengene før Boligen selges med det inventar og utstyr som i henhold
eiendommens matrikkel ved overskjøting til ny andre kreditorer, selv om de har lån registrert på andelen. Kjøper og selger er forpliktet til å undertegne standard til gjeldende lover, forskrifter eller offentlige pålegg skal
hjemmelshaver: kjøpekontrakt utarbeidet av Emera i forbindelse med følge med eiendommen, jf. avhendingsloven § 3‑4.
eiendomstransaksjonen.

---

[d005_d005 | Side [1]]
lene/ leilighetene er en del sagt opp av leietaker eller hatt en tidsbestemt bygninger med bruksareal mindre enn 50 m². Det er eier https:/ / www.oslo.kommune.no/ plan‑bygg‑og‑eiendom/
av eierseksjonssameiet Idunsgate 4 (gnr. 208, bnr. 318). leiekontrakt som er utløpt og er en andel i et nyetablert som plikter å fremlegge energiattest og er selv ansvarlig
32 33

## Side 18

OM EIENDOMMEN OM EIENDOMMEN
Legalpant: Borettslaget har legalpant på inntil 2G som Borettslaget har legalpanterett i andelen for krav

---

[d005_d005 | Side [1]]
ed eiendommen, jf. avhendingsloven § 3‑4.
eiendomstransaksjonen. Kjøpekontrakten kan besiktiges Fastmonterte eller spesialtilpassede installasjoner og
Vei, vann og avløp
1893/ 993034‑1/ 105 07.09.1893 BESTEMMELSE OM hos eiendomsmegler før bud inngis. Kontakt innredning som anses som varig tilknyttet boligen, følger
BEBYGGELSE Eiendommen er tilknyttet offentlig vann‑ og eiendomsmegler for spørsmål. normalt med i handelen, med mindre det foreligger en
GJELDER DENNE REGISTERENHETEN MED FLERE avløpssystem.

---

[d005_d005 | Side [1]]
kan det ikke etter overtakelse reklameres
reflekterer det som er tilfellet for alle snr. som borettslaget sitter på fraflyttede og/ eller usolgte andeler, www.soderbergpartners.no/ eiendom/ boligkjoper/ på forhold som burde ha vært oppdaget ved en ordinær
borettslaget eier. må dekkes av de øvrige andelseierne. gjennomgang.
34 35

## Side 19

OM EIENDOMMEN OM EIENDOMMEN
Dersom det oppstår behov for ytterligere avklaringer, samme gjelder hvis eiendommen ikke samsvarer med signatur fra budgiver. Kravet til

---

[d005_d005 | Side [1]]
kjer via offentlig vei. En standard tilbehørsliste utarbeidet av Norges
Kan ikke slettes uten samtykke fra kommunen Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og
Kontrakts‑
Bestemmelse om trafostasjon/ kiosk gjelder som utgangspunkt for hva som inkluderes i salget
Utleie
GJELDER DENNE REGISTERENHETEN MED FLERE – med mindre avvik er tydelig avtalt mellom kjøper og
grunnlag
Overført fra: KNR: 0301 GNR: 208 BNR: 318 Adgang til utleie: Det er begrenset adgang til å leie ut selger.
bolig i borettslag.

---

[d005_d005 | Side [1]]
ingskilde.
‑ Våtrom > 2 etasje > Bad/ wc > Generell Polisenummer fellesforsikring: NOFRNA07234 Borettslagets balanse viser en negativ egenkapital som
representerer differansen mellom eiendommens Selger har ikke bebodd eiendommen og har derfor ikke
Bygningsdeler som ikke har blitt undersøkt (TGIU): Husdyr: Dyrehold skal godkjennes av styret i bokførte verdi (eiendommens kjøpesum for mange år informasjon og strømforbruket.
‑ Tekniske installasjoner > Avløpsrør borettslaget, og er tillatt så lenge det ikke er

---

[d005_d005 | Side [1]]
l om det er/ har vært sopp/ råteskader/
‑ Kjøkken er flyttet til åpen løsning med stuen og et om sammen med BRA som et tillegg. Hvitevarer: Integrerte hvitevarer medfølger. insekter/ skadedyr i sameiet/ laget/ selskapet (fellesareal
soverom er etablert der kjøkkenet sto tidligere. GUA – summen av BRA og AHL. Brukes når boligen har eller i andre boliger) som: rotter, mus, maur eller
gulvareal som ikke er måleverdig på grunn av for Innbo og løsøre: Salgsoppgaven inkluderer NEFs lignende?
eksempel skråtak

---

[d005_d005 | Side [1]]
n de må dekke borettslagets løpende oppdages uventede feil eller mangler ved boligen de nøye, gjerne sammen med fagperson, før bud gis.
utgifter. Manglende innbetaling av fellesutgiftene som neste fem årene. Les mer om Boligkjøperforsikring i Dersom kjøper velger å kjøpe uten å ha sett
Grunnbokbladet for snr. 47 er vist som et eksempel, men følge av andre andelshaveres mislighold, eller dersom vedlagte materiell eller på https:/ / eiendommen, kan det ikke etter overtakelse reklameres
reflekterer det som er

---

[d005_d005 | Side [1]]
sarealer og rettigheter til
I tillegg disponerer boligen en bod. Gjenstander som er nevnt i standardlisten, men som ikke Det fremgår av selgers egenerklæringsskjema /
finnes på eiendommen, vil heller ikke følge med i salget. tilstandsrapporten at det mangler/ ikke er fremlagt
bruk
Det gjøres særskilt oppmerksom på at bod som er Alt utstyr og installasjoner som medfølger overtas slik de samsvarserklæring for det elektriske anlegget.
medtatt som BRA‑e og i totalt BRA ligger på fellesareal, Det gjøres

---

[d005_d005 | Side [1]]
r innredet. Skader eller mangler som er skjult bak
innredninger, møbler, tepper e.l. vil derfor ikke kunne oppdages
ved befaringen. Servitu琀琀er og he昀琀elser som he昀琀er ved
eiendommen er ikke vurdert, med mindre det er angi琀琀 i
rapporten. Normalt slit og elde beskrives ikke. Forholdene er
likevel hensynta琀琀. Takstobjektet/bygningen vil kunne ha
mangler og skader som takstrapporten ikke omtaler pga.
presisjonsnivået i en ordinær takstrapport, men de琀琀e er likevel
hensynta琀琀 i selve vurderingen. Takstmannens

---

[d005_d005 | Side [1]]
eiendommens status, se:
med orgnr. 934306430 borettslaget som ny andelseier. http:/ / riksantikvaren.maps.arcgis.com/ apps/
Vedtekter/ husordensregler
webappviewer/ index.html?
Risikoen for å bli godkjent som ny andelseier påhviler Husordensregler og vedtekter ligger vedlagt id=545b8e996b6e4e1fbcb65f69299a7167
Selger
kjøper. Dersom kjøper på overtakelsestidspunktet ikke er salgsoppgaven.
Heimstaden Bostad Invest 10 AS godkjent som ny andelseier, har kjøper dog ikke rett til å Regulerings og arealplaner:

---

[d005_d005 | Side [1]]
e, tilstandsrapport og selgers
Forsikring
LØPENR: 1150747 Selger har ikke utført radonmåling. Det er ikke krav om egenerklæring. Kjøper anses for å være kjent med
GJELDER DENNE REGISTERENHETEN MED FLERE dette med mindre boligen er helt eller delvis utleid. Boligselgerforsikring: Selger har ikke tegnet forhold som er tydelig beskrevet i salgsdokumentene,
Overført fra: KNR: 0301 GNR: 208 BNR: 318 boligselgerforsikring. slike forhold kan ikke senere gjøres gjeldende som en
mangel ved boligen. Dette gjelder

---

[d005_d005 | Side [1]]
men
Regulering
forblir i regnskapet. Dette følger også av notene til
Øvrig
Styregodkjennelse: Andelseier(e), bortsett fra stifter, kan regnskapet. Verneklasse/ SEFRAK: Eiendommen er registrert på
kun eie en andel i borettslaget. Kun fysiske personer kan byantikvarens gule liste, noe som betyr at eiendommen
informasjon
eie andelen. Kjøper skal godkjennes av borettslagets Borettslagets langsiktige gjeld består utelukket av er ansett som bevaringsverdig, enten helt eller delvis.
styre for at kjøper skal

---

[d005_d005 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d005_d005 | Side [1]]
udd som langsiktig gjeld i borettslagets Byantikvaren skal gi en rådgivende uttalelse i byggesaker
regnskap. I praksis utgjør det ikke en gjeld for som berører eiendommen.
Gnr. 208, bnr. 318, ideell andel 1/ 1 Kjøper er forpliktet til å gjennomføre handelen uavhengig borettslaget som skal tilbakebetales
i Oslo kommune.Andelsnr. 11 i Idunsgate 4 Borettslag av om kjøper på overtakelsestidspunktet er godkjent av For en fullstendig oversikt over eiendommens status, se:
med orgnr. 934306430 borettslaget som ny

---

[d005_d005 | Side [1]]
 Det kan være forskjell mellom boligens faktiske bruk av
SNR: 47 borettslaget, som gir borett til en bestemt bolig. Partners. Boligkjøperforsikring er en rettshjelpsforsikring rom og det som er godkjent av myndighetene. Alle
Formål: Bolig Andelseierne har ikke personlig ansvar for borettslagets som gir trygghet og profesjonell juridisk hjelp dersom det interessenter anbefales derfor å undersøke eiendommen
Sameiebrøk: 452/ 16475 fellesgjeld, men de må dekke borettslagets løpende oppdages uventede feil eller

---

[d005_d005 | Side [1]]

Hvis din nye bolig har skjulte feil kan dette koste 
deg både tid og

---

[d005_d005 | Side [1]]
emåte da boligen ble TOMTEFORHOLD Gå 琀椀l side
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀 oppført. Bygninger kan ha skjulte feil og mangler som er vanskelig å Ikke vurdert, fellesareal.
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes oppdage ved befaring. Særlig kri琀椀ske områder er risiko
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen,

---

[d005_d005 | Side [1]]
eldre dato og har sluk og membran
som var gjeldene da bygget ble oppført. Normalt slit og elde fra ukjent byggeår må badet påregnes oppgradert innen kort 琀椀d,
Tilstanden vurderes med ulike 琀椀lstandsgrader
beskrives ikke. Forholdene er hensynta琀琀. Der svikt ikke er de琀琀e med bakgrunn i at eldre sluk med og uten klemring
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1 registrert er 琀椀lstandsgrad sa琀琀 ut fra

---

[d005_d005 | Side [1]]
t er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn konstruksjoner, rom under terreng, membranløsninger, isolasjon i
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
gulv, vegger og himling, vann og avløpsne琀琀. Elde og u琀椀dsmessig het
Arealer
kombinert med endret bruk, kan over 琀椀d avdekke skjulte feil og Gå 琀椀l side
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK mangler som ikke oppdages ved visuell kontroll.
Denne 琀椀lstandsgraden

---

[d005_d005 | Side [1]]
rukt bolig. Slitasje, u琀椀dsmessighet og feil som følge av Det er kjøkkenven琀椀lator med kull昀椀lter.
normal bruksslitasje ikke er bemerket.
TILSTANDSGRAD 0, TG0: INGEN AVVIK Ingen synlige feil eller mangler ved bygningens bærende TEKNISKE INSTALLASJONER Gå 琀椀l side
konstruksjoner. Innvendige vannledninger er av plast (rør i rør). Det er besik琀椀get i
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l

---

[d005_d005 | Side [1]]
nadene anbefales y琀琀erligere undersøkelser og
ved lekkasje eller manglende rengjøring, vil vann kunne komme inn i
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
konstruksjoner og det vil kunne oppstå fuktskader. Da hverken
gis for TG3, der de琀琀e er mulig.
membran eller sluk er fornyet, vurderes badets alder samlet ut fra
byggeår. Badet oppfyller ikke funksjonskravet i teknisk forskri昀琀 om
te琀琀esjikt, både på grunn av te琀琀esjiktets (membranens) alder og på
grunn av manglende te琀琀

---

[d005_d005 | Side [1]]
okumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen. En 琀椀lstandsbeskrivelse har 琀椀l hensikt å oppfordre bruker 琀椀l å rørskap.
foreta en kri琀椀sk gjennomgang av de anmerkede punktene. Det er anta琀琀 avløpsrør av støpejern. Ligger skjult i konstruksjonen.
Boligen har mekanisk ven琀椀lasjon.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK Boligbygg med 昀氀ere boenheter - Byggeår: 1894 Anta琀琀 felles beredre.
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan

---

[d005_d005 | Side [1]]
sle fare for skader
på grunn av alder eller overvåke spesielt på grunn av fare for større
skade eller følgeskade. For skjulte konstruksjoner vil alder i seg selv E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
være et symptom som kan gi TG2. For synlige konstruksjoner kan alder 琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
sammen med andre symptomer og momenter gi TG2. Avvik under TG2
kan gis sjablongmessig anslag.
BEFARINGEN
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik.

---

[d005_d005 | Side [1]]
tasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også Sikringsskap med automatsikringer.
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler. Brannvarslingsanlegg på gården, pulverapparat.
UTVENDIG Gå 琀椀l side
Beskrivelse av bygningsdeler bygger på kjente opplysninger for
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2 boliger i området samt det som var vanlig byggemåte da boligen ble TOMTEFORHOLD Gå 琀椀l side
Bygningsdelen skal

---

[d005_d005 | Side [1]]
 3 av 18
Oppdragsnr.: 18745-3141 Befaringsdato: 04.12.2025 Side: 2 av 18
52 53

## Side 28

Iduns gate 4 A, 0178 OSLO Nyverdi AS Iduns gate 4 A, 0178 OSLO Nyverdi AS
Gnr 208 - Bnr 318 Mellomdammen 31 Gnr 208 - Bnr 318 Mellomdammen 31
0301 OSLO 3475 SÆTRE 0301 OSLO 3475 SÆTRE
Beskrivelse av eiendommen
De琀琀e trenger du å vite om 琀椀lstandsrapporten
Skader, feil og mangler er avhengig av forskri昀琀er og byggeskikk Med bakgrunn i at badet er av eldre dato og har sluk og membran
som var gjeldene da bygget ble

---

[d005_d005 | Side [1]]
ne 琀椀l NTF. Rommenes bruk kan være i strid
med byggeforskri昀琀ene selv om de er måleverdige e琀琀er NS3940.
MERK: Kunden/rekvirenten skal lese gjennom dokumentet før
Anslag på utbedringskostnad bruk og gi 琀椀lbakemelding 琀椀l takstmannen hvis det 昀椀nnes feil/
mangler som bør re琀琀es opp.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
STORE ELLER ALVORLIGE AVVIK
Våtrom > 2 etasje > Bad/wc > Generell Gå til side
KONSTRUKSJONER SOM IKKE ER

---

[d005_d005 | Side [1]]
nnglasset balkong
Etasje
(BRA-i) (BRA-e) (BRA-b)
2 etasje Entré, bad/wc, soverom, stue/kjøkken
Lovlighet
Byggetegninger
Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse.
Kommentar: Rominndeling stemmer ikke med byggetegninger.
Brannceller
Er det påvist synlige tegn på avvik i branncelleinndeling ut ifra dagens byggteknisk forskri昀琀? Ja Nei
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja Nei
Krav for rom 琀椀l varig opphold
Er det

---

[d005_d005 | Side [1]]
joner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning

---

[d005_d005 | Side [1]]
pel
termiske skader på deksler, kontaktpunkter eller lignende) i boligens 1. Er det mangler for brannslukningsutstyr i boligen iht. forskri昀琀skrav
elektriske anlegg? på søknads琀椀dspunktet, men minst Byggeforskri昀琀 1985?
Ven琀椀lasjon Nei Nei
Boligen har mekanisk ven琀椀lasjon. 2. Er det skader på brannslokkingsutstyr eller er apparatet eldre enn 10
Generelt om anlegget år?
8. Er det tegn 琀椀l at det har vært termiske skader (tegn på varmgang) på Nei
Varmtvannstank kabler, brytere, downlights, s琀椀kkontakter og

---

[d005_d005 | Side [1]]
sig anslag. 昀椀nnes skjulte feil, skader og mangler. NS 3600:2018 (Teknisk
琀椀lstandsanalyse ved omsetning av bolig) har undersøkelsesnivå fra 1 琀椀l
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. 3, der undersøkelsesnivå 1 er det laveste og baseres på visuell
observasjon. Rapporten baseres på undersøkelsesnivå 1 med få unntak
• Ved TG0 og TG1 gis normalt ingen begrunnelse, da de琀琀e kun viser (våtrom og rom under terreng). I praksis betyr de琀琀e at
normal slitasje eller mindre avvik

---

[d005_d005 | Side [1]]
琀椀kkprøvetakninger er utvalgt 琀椀lfeldig og kan innebære kontroll under
bygget. Noen bygningsdeler vurderes e琀琀er gjeldende teknisk forskri昀琀 over昀氀aten med spiss redskap eller lignende.
på befarings琀椀dspunktet. De琀琀e gjelder blant annet:
Oppdragsnr.: 18745-3141 Befaringsdato: 04.12.2025 Side: 16 av 18 Oppdragsnr.: 18745-3141 Befaringsdato: 04.12.2025 Side: 17 av 18
66 67

## Side 35

Iduns gate 4 A, 0178 OSLO Nyverdi AS
Gnr 208 - Bnr 318 Mellomdammen 31
0301 OSLO 3475 SÆTRE
Tilstandsrapportens

---

[d005_d005 | Side [1]]
od nummer 201 på ca. 5,5 kvm.
Vedlikehold
Normalt vedlikehold må påregnes.
UTVENDIG
Eldre plastsluk
Vinduer 2 ETASJE > BAD/WC
Bygningen har malte trevinduer med 3-lags glass. Tilliggende konstruksjoner våtrom
Årstall: 1985 Kilde: Produksjonsår på produkt
Hulltaking er foreta琀琀 uten å påvise unormale forhold. Hulltaking er
Vurdering av avvik: foreta琀琀 i soverom.
• Det er påvist at enkelte vinduer er vanskelig å åpne/lukke. Nivellering stue/kjøkken + entré, avvik registrert
• Karmene i vinduer er sli琀琀e og

---

[d005_d005 | Side [1]]
derer boligen ut fra hva man kan forvente av en bygning av samme alder
bidrar i næringspoli琀椀sk sammenheng, og har vært en pådriver for å sikre at lover og regler gir trygghet for forbrukerne og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
i boligomsetningen. boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Taksering næring/bolig/琀椀lstand – Verdivurdering -

---

[d005_d005 | Side [1]]
rdeling mellom P-areal og S-areal. (downlights), demonteres ikke for å sjekke dampsperren bak. De琀琀e av
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for hensyn 琀椀l bygningssakkyndiges kompetanse og risikoen for skade.
vurderingen, er ikke bygningssakkyndiges ansvar. Rapporten beskriver
avvik, altså en 琀椀lstand som er dårligere enn referansenivået. Rapporten •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
framhever normalt ikke posi琀椀ve sider ved boligen ut over det som

---

[d005_d005 | Side [1]]
ramhever normalt ikke posi琀椀ve sider ved boligen ut over det som (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
fremgår av 琀椀lstandsgradene. eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand og rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
blant annet vurdert ut fra alder og normal bruk slik: Avhendingsloven.
i)Tilstandsgrad 0, TG0:Ingen avvik eller skader. I 琀椀llegg

---

[d005_d005 | Side [1]]
(TG0) og Tilstandsgrad 1 registrert er 琀椀lstandsgrad sa琀琀 ut fra bygningsdelens alder, dvs. erfaringsmessig er mere utsa琀琀 for lekkasjer i overgang membran 琀椀l
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har anta琀琀 gjenværende leve琀椀d: sluk i 琀椀llegg 琀椀l at sluken og membranen i seg selv er over forventet
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige

---

[d005_d005 | Side [1]]
r u琀昀ørt
Boligselskap Org.nr. Leil. nr. Forretningsfører Eier av adkomstdokumenter eller vedtak som medfører eller har medført ny琀琀 låneopptak/økning av fellesutgi昀琀er i bore琀琀slaget utover det som er nevnt i de琀琀e
201/IDUNSGATE 4 934306430 201 Heimstaden Bostad Invest 10 AS dokumentet. Det henvises forøvrig 琀椀l bore琀琀slagets årsberetning og regnskap, eventuelt vedlikeholdsplan for bore琀琀slaget. Ifølge eier foreligger
BORETTSLAG det ingen o昀昀entlige krav eller påbud. Denne opplysning er ikke kontrollert av

---

[d005_d005 | Side [1]]
琀slaget/sameiet og de琀琀e kan påvirke boligens
av avvik. BRA. Vær oppmerksom på at NS 3940:2023 og eierseksjonsloven har
ulik de昀椀nisjon av fellesareal. Ved arealmåling gjelder NS 3940:2023 som
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak de昀椀nerer fellesareal slik: “Delen av bygning som brukes av to eller 昀氀ere
råte, sopp og skadedyr. bruksenheter eller 琀椀l bygningens forvaltning, dri昀琀 eller vedlikehold.
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller • I en

---

[d005_d005 | Side [1]]
obligatorisk tjenestepensjon.
3) borettslagets regnskapstall for 2024 er relatert til aksjeselskapets virksomhet i 2024
Revisor
Resultatregnskapet Revisjonshonorar er 33 812 ,- eksl.mva.
Fra 1. januar 2025 vil borettslaget ikke lenger ha leieinntekter og driftskostnader slik regnskapet for 2024
viser (dette var siste året med selskapslikning). Derimot vil borettslaget ha inntekter fra felleskostnader og
løpende driftskostnader fra borettslagets virksomhet.
Balanseoppstillingen
Balansen viser en negativ

---

[d005_d005 | Side [1]]
.
Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 10 Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 11
84 85

## Side 44

Noter 2024 Noter 2024
Idunsgate 4 Borettslag Idunsgate 4 Borettslag
Note 5 Varige driftsmidler Note 6 Mellomværende med selskap i samme konsern
Tomter, bygninger o.a. fast eiendom Totalt 2024
Tilgang 26 073 232 26 073 232 Fordringer
Anskaffelseskost 31.12.2024 26 073 232 26 073 232 Fordring til konsern 202 265 547
Sum 202 265 547
Bokført verdi 31.12.2024 26 073 232 26 073

---

[d005_d005 | Side [1]]
går i en likviditetsordning (cashpool) hvor selskapet har felles likvider med mor, Heimstaden
Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 6 Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 7
80 81

## Side 42

Noter 2024 Noter 2024
Idunsgate 4 Borettslag Idunsgate 4 Borettslag
Bostad Invest 10 AS. Rente- inntekt/kostnad beregnes kvartalsvis av banken etter markedsrenten. Note 2 Fusjon
Selskapet er et datterselskap av Heimstaden AB konsernet. Konsernregnskap utarbeides av Heimstaden
Bostad AB og

---

[d005_d005 | Side [1]]
5 547
Sum 202 265 547
Bokført verdi 31.12.2024 26 073 232 26 073 232
Langsiktig gjeld
Langsiktig gjeld til konsern (borettsinnskudd) 168 714 523
Sum gjeld 168 714 523
Driftsmidler består av boligeiendom i Idunsgate 4. Driftsmidlet avskrives ikke.
Gjeld
Gjeld til konsernselskap 199 349 583
Sum 199 349 583
Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 12 Idunsgate 4 Borettslag, orgnr. 934 306 430 Side 13
86 87

## Side 45

Noter 2024 Noter 2024
Idunsgate 4 Borettslag Idunsgate 4 Borettslag
Note 7 Skatt

---

[d005_d005 | Side [1]]
etid. Avskrivningene er som hovedregel fordelt
Sum gjeld 369 714 714
lineært over antatt økonomisk levetid.
SUM EGENKAPITAL OG GJELD 228 836 573
Boligeiendommer som anses å ha en åpenbar høyere verdi enn bokført er ikke avskrevet, jfr egen note om
varige driftsmidler.
Oslo, 26.05.2025 Fordringer
Styret i Idunsgate 4 Borettslag Kundefordringer og andre fordringer oppføres til pålydende etter fradrag for avsetning til forventet tap.
Avsetning til tap gjøres på grunnlag av en individuell vurdering av de

---

[d005_d005 | Side [1]]
en ny kommuneplan som kan
få betydning for en rekke eksisterende reguleringsplaner
Organisasjonsnummer: 934306430 Regnskap/ budsjett/ kostnadsøkninger: Regnskap for Energifarge: Rød i kommunen.
borettslaget for 2024 ligger vedlagt i salgsoppgaven.
Andelsnummer: 11 Heimstaden Bostad Invest 10 AS (Heimstaden Bostad) For informasjon om eventuelle arbeider eller prosjekter i
Info energiklasse
eier cirka 3,000 boliger i Norge. De fleste av Heimstaden nærliggende områder, anbefales det å gjøre søk i Oslo
De som

---

[d005_d005 | Side [1]]
tatt som BRA‑e og i totalt BRA ligger på fellesareal, Det gjøres særskilt oppmerksom på at boden som er er, uten garanti, med mindre det foreligger en gjeldende
men disponeres av denne leiligheten. medtatt i BRA‑e og totalt BRA, ligger på sameiets garanti fra produsent eller leverandør.
Byggemåte
fellesareal, men disponeres av denne seksjonen. Sameiet
kan på et senere tidspunkt omdisponere bruken av dette Kjøper aksepterer at det kan forekomme hull og merker Bygningen har malte trevinduer med 3‑lags glass

---

[d005_d005 | Side [1]]
varingsverdig, enten helt eller delvis.
styre for at kjøper skal godkjennes av borettslagets styre borettsinnskuddet innbetalt av opprinnelig andelseier Dette kan påvirke mulighetene for fremtidige
Adresse
for at ervervet skal bli gyldig. Styregodkjennelse kan ikke ved stiftelse av borettslaget. Norsk praksis klassifiserer ombygginger eller restaureringer av eiendommen.
Iduns gate 4 ‑ 201, 0178 OSLO nektes uten saklig grunn. borettsinnskudd som langsiktig gjeld i borettslagets Byantikvaren skal gi en

---

[d005_d005 | Side [1]]
13

Plantegning

## Side 14

OM EIENDOMMEN
IDUNS GATE 4 ‑ 201
OM EINDOMMEN
Økonomi
Felleskostnader
Felleskostnader kr 2 139,‑ pr. mnd
Prisantydning
Kr 3 690 000 Felleskostnader inkulderer: Drift og vedlikehold av
borettslaget, varmtvann, kommunale avgifter, strøm
fellesareal, internett fra Telia, felles bygningsforsikring,
Omkostninger kjøpers beløp
trappevask og vaktmestertjenester.
3 690 000,00 (Prisantydning)
Herunder:
Omkostninger Felleskostnader: kr 2 071
TV/ Bredbånd: kr 68
9 300,00

---

[d005_d005 | Side [1]]
egnes utnyttelsesgraden etter en teoretisk etasjehøyde
3. 0 på 3 meter.
Høydereferanse: OSLOLOKAL k 2
dta
§ 6. Reguleringsplaner innenfor planområdet som er stadfestet i tidsrommet mellom 4.9.1974 og stadfestelse av
Merknader: Planenerheltellerdelvveisopphevetsomfølgeavbystyretsvedtak23.9.15, nærværende plan, skal gjelde foran denne plan.
Kommuneplan2015. SeogsåS
y
-
s
2t y9
re
3
ts
7,1.10.87endr.reg.best.
Knytning(er)motandreplaanv b er:V300589,V290689,V300187,V080384,26394,20483, S-2937, 01.10.87 (se

---

[d005_d005 | Side [1]]
n for Oslo sentrum og indre sone, med noen endringer foretatt av departementet,
V22038
he
0
lt,el
V
ler
130679,36982,8786,33390,V030993,V190192,V080285,24385,V160895, P gf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.
V270
n
e3r98,V030806N2,V181209N2,V190902,V120105,V121010,V311002,V221096,
Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale
VP2la3
ne
1095,V231296,V011002,V151100,V120297,V200905N2,2306,V150796,V161001, m

---

[d005_d005 | Side [1]]
boligen siste 5 år? Ja Nei
Krav for rom 琀椀l varig opphold
Er det påvist avvik i forhold 琀椀l rømningsvei, dagslys昀氀ate eller takhøyde? Ja Nei
Kommentar:
Arealet kan ikke all琀椀d fastse琀琀es nøyak琀椀g Om brannceller
Areal kan være komplisert eller umulig å måle opp nøyak琀椀g fordi det er vanskelig å En branncelle er hele eller avgrensede deler av en bygning hvor en
Total fordeling mellom P-ROM og S-ROM
fastslå tykkelsen på innervegger, skjevheter i og u琀昀orming av brann fri琀琀 kan utvikle seg uten at den kan spre

---

[d005_d005 | Side [1]]
mentet.
n
n).
Ny paragraf ble vedtatt av Oslo bystyre 1.10.1987, S-2937.
gr
ø
o g § 1. Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne begrensningslinjen skal
g
g arealene nyttes som vist på planen.
y
S-2255 tr
mart,
§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på
S planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer.
-
3
0
Reguleringsbestemmelser i tilknytning til

---

[d005_d005 | Side [1]]
angavstand til et yrende liv på Vulkan med trafikantene er flere nabogater gjort om til hyggelige ‑ Bensin‑, diesel‑ og hybridbiler samt ladbare hybrider: kr
hensyn til din boligs beliggenhet, areal, byggeår og type Mathallen, butikker og treningssenter med mer. Det er miljøgater med brosteinsbelagte parkeringsarealer, 6.200 per år
bolig. Formuesverdien er en prosentandeldel av denne også gangavstand til St. Hanshaugen med brede fortau og beplantning i form av trær, busker og ‑ Motorsykler og mopeder: kr

---

[d005_d005 | Side [1]]
o, Tannlegehøyskolen, HiO med flere. mindre annet er uttrykkelig avtalt i avtale eller at det
beliggenhet i et etablert boligområde på Fredensborg. I grøntområder og rekreasjonsmuligheter i nærheten til følger av vedtektene.
nabolaget finner man idylliske Damstredet med sine glede for store og små. Her er flere treningssentre,
Parkering
sjarmerende småhus. For å bedre ivareta de myke turveier langs Akerselven og grønne lunger som parken
Beskrivelse av
trafikantene er flere nabogater gjort om til hyggelige

---

[d005_d005 | Side [1]]
nhet i et etablert boligområde på Fredensborg. I St. Hanshaugen, Gamle Oslo, Grünerløkka og Sagene –
Skatteetaten beregner en boligverdi (beregnet fiskevann og flere fine badeplasser. nabolaget finner man idylliske Damstredet med sine innenfor sonene A, B, C, D og E – er som følger:
markedsverdi for bolig) basert på SSBs statistiske sjarmerende småhus. For å bedre ivareta de myke
opplysninger om omsatte boliger. I beregningen tas det Det er gangavstand til et yrende liv på Vulkan med trafikantene er flere

---

[d005_d005 | Side [1]]
ivelse av
trafikantene er flere nabogater gjort om til hyggelige på Vulkan, Kubaparken, St. Hanshaugen og Botanisk Det er beboerparkering tilgjengelig i området. Med
miljøgater med brosteinsbelagte parkeringsarealer, hage. For naturopplevelser i skog og mark er Maridalen i beboerparkeringstillatelse kan man parkere hele døgnet,
eiendommen
brede fortau og beplantning i form av trær, busker og sykkelavstand og et populært utfartssted hele året. også utover eventuell maksparkeringstid, på plasser
blomster.

---

[d005_d005 | Side [1]]
 琀椀l lagring, og tekniske rom. Bruken av et rom på
bad, u琀昀orede kjellervegger og eventuelt i oppforede kjellergulv. befarings琀椀dspunktet har betydning for om rommet de昀椀neres som P-
ROM eller S-ROM. De琀琀e betyr at rommet både kan være i strid med
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som teknisk forskri昀琀 og mangle godkjennelse i kommunen for den aktuelle
er basert på enkle visuelle observasjoner. Kan vurderes sammen med bruken, uten at de琀琀e vil få betydning for valg av

---

[d005_d005 | Side [1]]
boligen er vedlagt salgsoppgaven. sentralfyr, ventilasjon)? Hvis nei, gå videre til punkt 12
ALH ‑ Areal med lav himlingshøyde måles på samme For mer detaljert informasjon om tilstandsgradene, ‑ Noe El‑arbeider ved nytt kjøkken i 2021
Det er ikke samsvar mellom byggegodkjente tegninger måte som BRA, men man ser bort fra krav til vennligst se rapporten.
og dagens planløsning: himlingshøyde. Arealet inngår ikke i BRA, men opplyses Kjenner du til om det er/ har vært sopp/ råteskader/
‑ Kjøkken er flyttet til

---

[d005_d005 | Side [1]]
300589,V290689,V300187,V080384,26394,20483, S-2937, 01.10.87 (se tidl. S-2255)
ge
16578, 37684, 21884,mVf ø 1 l 31284, V100495, 5984, 23383, 39183, 6382, 41871, 2390, FORSLAG TIL ENDREDE REGULSERINGSBESTEMMELSER (NY PARAGRAF 7) FOR
o SENTRUM OG INDRE SONE (SONEPLANEN).
s
V160184, V28018
h
6
ev
,etV190482N2, 43392, 1491, V240993, 2490, 20090, 17490, 9993,
Miljøverndepartementet har i brev av 28. juli 1977 og 19. oktober 1977 i medhold av paragraf 28,1,jfr. paragraf
p
V190482,3483,o

---

[d005_d005 | Side [1]]
eier, har kjøper dog ikke rett til å Regulerings og arealplaner: Eiendommen er regulert til
ta eiendommen i bruk, jf. borettslagslovens § 4‑5 (2). boligformål etter bestemmelser i S‑2255, datert
Borettslag Energimerke
Kjøper kan gå til søksmål mot borettslaget dersom kjøper 28.07.1977. Ny kommuneplan fra 23. september 2015.
Idunsgate 4 Borettslag mener manglende godkjennelse ikke er saklig begrunnet. Energikarakter: F Oslo kommune har vedtatt en ny kommuneplan som kan
få betydning for en rekke eksisterende

---

[d005_d005 | Side [1]]
ersjon Kommentar STRUKTUR•REFERANSENIVÅ•TILSTANDSGRADER i) sluk, te琀琀esjikt og fall på bad og vaskerom (våtrom)
ii) Forhold rundt brann, rømming, sikkerhet, for eksempel
1 04.12.2025 • Rapporten er basert på innholdskrav i Forskri昀琀 琀椀l avhendingslova rekkverkshøyder/åpninger, ulovlige bruksendringer, brannceller mv.
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for
den som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for andre • For skjulte konstruksjoner slik som vann og

---

[d005_d005 | Side [1]]
/100
Naboskapet
Offentlig transport Høflige 58/100
Møllerveien 2 min
Linje 34, 54 0.2 km
Aldersfordeling
Schous plass 8 min
Linje 11, 12, 18 0.7 km
Stortinget 13 min T-bane, buss, flybuss, trikk 1.1 km Stortinget 15 min
Linje 1, 2, 3, 4, 5 1.1 km
Oslo S 16 min
Totalt 24 ulike linjer 1.3 km
Skoler
Møllergata skole (1-7 kl.) 4 min
210 elever, 15 klasser 0.3 km
St Sunniva skole (1-10 kl.) 5 min
508 elever, 26 klasser 0.4 km
Ila skole (1-7 kl.) 15 min
550 elever, 28 klasser 1.2 km
Sofienberg skole (8-10 kl.)

---

[d005_d005 | Side [1]]
og matvareforretninger like i nærheten av boligen. Borettslagets tomt.
Hanshaugen og Botaniskhage. For naturopplevelser i Leiligheten har en fin beliggenhet i en rolig og fredelig Tomten er fellesareal. At tomten er fellesareal innebærer
skog og mark er Maridalen i sykkelavstand og et gate samtidig som det er gangavstand til alt et rikt byliv Boligen ligger i gangavstand til utdanningsinstitusjoner at borettslaget eier og disponerer over de aktuelle
populært utfartssted hele året. kan tilby. som AHO, KhiO,

---

[d005_d005 | Side [1]]
et er begrenset adgang til å leie ut selger.
bolig i borettslag. Med styrets godkjenning og under
Overtakelse
1977/ 518251‑1/ 105 30.09.1977 BEST. OM ADKOMSTRETT visse vilkår kan boligen leies ut i inntil 3 år, jf. Om informasjonsgrunnlaget
Rettighetshaver: fredensborgvn 29 borettslagsloven § 5‑3 til § 5‑10. Andelseier som selv bor i Tidspunkt for overtakelse avtales mellom kjøper og Opplysninger om boligens størrelse og utforming, både
GJELDER DENNE REGISTERENHETEN MED FLERE boligen, har imidlertid rett

---

[d005_d005 | Side [1]]
tet ("hemmelige megler i forbindelse med aksept av budet.
som et forbrukerkjøp. bud") vil ikke bli formidlet til selger. Alle interessenter
Budgivning og selgers vurdering oppfordres til å inngi bud via eiendomsmegler.
Hvitvasking
På grunn av ulike ansvarsforhold kan selger velge å Ved slike kjøp selges eiendommen «som den er», og
prioritere bud fra ikke‑forbrukere, selv om budet er lavere selgers ansvar er begrenset til det som følger direkte av Megler skal legge til rette for en forsvarlig avvikling av

---

[d005_d005 | Side [1]]
gn til slitasje og eventuelle skader. Dersom det er avvik mellom oppgitt og faktisk innvendig kjøpsfullmakt må megler kontaktes og fullmakten via en fullmektig.
Slik normal bruksslitasje og behov for vedlikehold må areal på minst 2 % og samtidig minst 1 kvadratmeter, kan oversendes før budgivning.
kjøper påregne, og dette vil normalt ikke gi grunnlag for dette utløse rett til kompensasjon etter § 3‑3 i For mer informasjon om budgivningsprosessen, se
reklamasjon eller prisavslag. avhendingsloven. Et bud bør

---

[d005_d005 | Side [1]]
 til å foreta grundige undersøkelser gjelder som er lang nok til at budet og eventuelle forbehold kan kundetiltak og dette fører til at avtalen ikke kan
også fullt ut for kjøpere som ikke omfattes av videreformidles til alle involverte parter slik at disse får tid gjennomføres eller blir forsinket, er dette et mislighold fra
Alle budgivere må ved inngivelse av bud opplyse om de forbrukerdefinisjonen. til å områ seg, jf. forskrift om eiendomsmegling § 6‑3. kjøpers side. Et vesentlig mislighold kan gi selger

---

[d005_d005 | Side [1]]
senere gjøres gjeldende som en
mangel ved boligen. Dette gjelder uavhengig av om
Diverse
Seksjonering: Boligkjøperforsikring: Kjøper har anledning til å tegne dokumentene er lest.
2003/ 37248‑1/ 105 20.06.2003 SEKSJONERING Borettslagsmodellen innebærer at borettslaget eier boligkjøperforsikring. Vedlagt i salgsoppgaven følger
Opprettet seksjoner: eiendommen, mens andelseierne eier andeler i informasjon om Boligkjøperforsikring fra Söderberg & Det kan være forskjell mellom boligens faktiske bruk av
SNR: 47

---

[d005_d005 | Side [1]]
 kostnader med inntil kr 10 000 (som en eventuelle forbehold som for eksempel usikker
Betalingsbetingelser
mellom partene, og all tilgjengelig dokumentasjon som egenandel). finansiering, salg av nåværende bolig ol. Normalt vil ikke
forelå for kjøper før handelen ble inngått. I tillegg gjelder et bud med forbehold bli akseptert før forbeholdet er Hele oppgjøret må betales samlet fra en norsk
avhendingsloven. Det gjelder ulike avtalevilkår avhengig Ikke‑forbruker – definisjon og vilkår: avklart. Konferer

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Badet har TG3 (store eller alvorlige avvik). Badet er av eldre dato med sluk og membran fra ukjent byggeår. Membran og sluk er ikke fornyet, og badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt. Det må påregnes oppgradering innen kort tid.",
      "evidence": [
        "Med bakgrunn i at badet er av eldre dato og har sluk og membran som var gjeldene da bygget ble oppført.",
        "Normalt slit og elde fra ukjent byggeår må badet påregnes oppgradert innen kort tid.",
        "Da hverken membran eller sluk er fornyet, vurderes badets alder samlet ut fra byggeår. Badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt, både på grunn av tettesjiktets (membranens) alder og på grunn av manglende tett...",
        "Våtrom > 2 etasje > Bad/wc > Generell – STORE ELLER ALVORLIGE AVVIK"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R02",
      "description": "Manglende samsvarserklæring for det elektriske anlegget. Det fremgår av selgers egenerklæringsskjema/tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
      "evidence": [
        "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R03",
      "description": "Avvik fra godkjente byggetegninger – rominndeling stemmer ikke med byggetegninger. Kjøkkenet er flyttet til åpen løsning med stuen, og et soverom er etablert der kjøkkenet sto tidligere. Dette kan innebære ulovlig bruksendring.",
      "evidence": [
        "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Kommentar: Rominndeling stemmer ikke med byggetegninger.",
        "Kjøkken er flyttet til åpen løsning med stuen og et soverom er etablert der kjøkkenet sto tidligere.",
        "Det er ikke samsvar mellom byggegodkjente tegninger og dagens planløsning."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R04",
      "description": "Borettslagets balanse viser negativ egenkapital. Balansen viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi og borettsinnskuddet. Selv om dette ikke har direkte konsekvens for andelseierne, er det en finansiell risikofaktor.",
      "evidence": [
        "Borettslagets balanse viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi (eiendommens kjøpesum for mange år siden) og kjøpesummen borettslaget betalte for aksjeselskapet eiendommen lå i.",
        "SUM EGENKAPITAL OG GJELD 228 836 573 / Sum gjeld 369 714 714",
        "Den regnskapsmessige negative egenkapitalen har ingen konsekvens for borettslaget eller andelseierne, men forblir i regnskapet."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R05",
      "description": "Høy gjeld til konsernselskap. Borettslaget har en gjeld til konsernselskap på kr 199 349 583, og langsiktig gjeld til konsern (borettsinnskudd) på kr 168 714 523. Total gjeld er kr 369 714 714, som overstiger sum eiendeler på kr 228 836 573.",
      "evidence": [
        "Gjeld til konsernselskap 199 349 583",
        "Langsiktig gjeld til konsern (borettsinnskudd) 168 714 523",
        "Sum gjeld 369 714 714",
        "SUM EGENKAPITAL OG GJELD 228 836 573"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R06",
      "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle skjulte feil og mangler etter overtakelse.",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R07",
      "description": "Selger har ikke bebodd eiendommen og har begrenset kunnskap om boligens tilstand. Selger er et profesjonelt selskap (Heimstaden Bostad Invest 10 AS) og har ikke personlig kjennskap til boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.",
      "evidence": [
        "Selger har ikke bebodd eiendommen og har derfor ikke informasjon og strømforbruket.",
        "Eier av: Heimstaden Bostad Invest 10 AS"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R08",
      "description": "Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke vet om radonverdiene i boligen er innenfor akseptable grenser.",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R09",
      "description": "Eiendommen er registrert på byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger eller restaureringer, og byantikvaren skal gi rådgivende uttalelse i byggesaker.",
      "evidence": [
        "Verneklasse/SEFRAK: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.",
        "Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.",
        "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut med styrets godkjenning og under visse vilkår i inntil 3 år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.",
      "evidence": [
        "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R11",
      "description": "Styregodkjennelse kreves for kjøper, og risikoen for ikke å bli godkjent påhviler kjøper. Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper er godkjent på overtakelsestidspunktet, og har ikke rett til å ta eiendommen i bruk dersom godkjennelse mangler.",
      "evidence": [
        "Risikoen for å bli godkjent som ny andelseier påhviler Selger.",
        "Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier.",
        "Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper dog ikke rett til å ta eiendommen i bruk, jf. borettslagslovens § 4-5 (2)."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R12",
      "description": "Antatte avløpsrør av støpejern som ligger skjult i konstruksjonen. Støpejernsrør er eldre og kan være utsatt for korrosjon og lekkasjer. Disse er ikke undersøkt (TGIU).",
      "evidence": [
        "Det er antatt avløpsrør av støpejern. Ligger skjult i konstruksjonen.",
        "Bygningsdeler som ikke har blitt undersøkt (TGIU): Tekniske installasjoner > Avløpsrør"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R13",
      "description": "Bygningen er fra 1894 og har høy alder, noe som innebærer generell risiko for skjulte feil og mangler i konstruksjoner som ikke er synlig tilgjengelige ved befaring.",
      "evidence": [
        "Boligbygg med flere boenheter - Byggeår: 1894",
        "Bygninger kan ha skjulte feil og mangler som er vanskelig å oppdage ved befaring.",
        "Elde og utidsmessighet kombinert med endret bruk, kan over tid avdekke skjulte feil og mangler som ikke oppdages ved visuell kontroll."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R14",
      "description": "Energikarakter F (rød) – svært dårlig energimerking. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.",
      "evidence": [
        "Energikarakter: F",
        "Energifarge: Rød"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R15",
      "description": "Legalpant på inntil 2G – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader. Dette innebærer at kjøpers eventuelle lån kan ha dårligere prioritet enn borettslagets krav.",
      "evidence": [
        "Borettslaget har legalpant på inntil 2G som Borettslaget har legalpanterett i andelen for krav på sikkerhet for betaling av felleskostnader.",
        "Dette betyr at dekning av felleskostnader og andre krav fra borettslaget har prioritet over tinglyste lån når det gjelder borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R16",
      "description": "Borettslaget inngår i en cashpool-ordning med morselskapet Heimstaden Bostad Invest 10 AS, og har en stor fordring til konsern på kr 202 265 547. Dette innebærer en konsentrasjonsrisiko knyttet til konsernets finansielle stilling.",
      "evidence": [
        "Fordring til konsern 202 265 547",
        "Selskapet går i en likviditetsordning (cashpool) hvor selskapet har felles likvider med mor, Heimstaden Bostad Invest 10 AS."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R17",
      "description": "Ny kommuneplan fra 2015 kan få betydning for eksisterende reguleringsplaner. Eiendommen er regulert etter bestemmelser fra 1977, og ny kommuneplan kan endre rammebetingelsene for eiendommen.",
      "evidence": [
        "Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.",
        "Eiendommen er regulert til boligformål etter bestemmelser i S-2255, datert 28.07.1977. Ny kommuneplan fra 23. september 2015."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R18",
      "description": "Vinduer med avvik – enkelte vinduer er vanskelige å åpne/lukke og karmer er slitte. Vinduene er fra 1985 og kan ha begrenset gjenværende levetid.",
      "evidence": [
        "Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.",
        "Karmene i vinduer er slitte.",
        "Årstall: 1985 Kilde: Produksjonsår på produkt"
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R19",
      "description": "Boden som er medtatt i BRA-e ligger på sameiets/borettslagets fellesareal og kan på et senere tidspunkt omdisponeres av sameiet/borettslaget. Kjøper har dermed ingen garanti for varig bruksrett til boden.",
      "evidence": [
        "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R20",
      "description": "Overgang fra selskapslikning til borettslagsbeskatning fra 2025 – usikkerhet rundt fremtidige felleskostnader. Borettslaget vil fra 2025 ikke lenger ha leieinntekter og driftskostnader slik regnskapet for 2024 viser, noe som kan påvirke felleskostnadenes størrelse fremover.",
      "evidence": [
        "Fra 1. januar 2025 vil borettslaget ikke lenger ha leieinntekter og driftskostnader slik regnskapet for 2024 viser (dette var siste året med selskapslikning). Derimot vil borettslaget ha inntekter fra felleskostnader og løpende driftskostnader fra borettslagets virksomhet."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R21",
      "description": "Kun fysiske personer kan eie andelen i borettslaget. Andelseier kan kun eie én andel. Dette begrenser kjøperkretsen og kan påvirke videresalg.",
      "evidence": [
        "Andelseier(e), bortsett fra stifter, kan kun eie en andel i borettslaget. Kun fysiske personer kan eie andelen."
      ],
      "source_documents": [
        "d005_d005"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    }
  ],
  "re_retrieval_queries": [
    "branncelleavvik tilstandsrapport Iduns gate 4",
    "el-arbeider kjøkken 2021 samsvarserklæring dokumentasjon",
    "varmtvannstank alder tilstand TGIU",
    "fukt råte sopp skader konstruksjon",
    "fellesgjeld andel borettslag fremtidig kostnadsøkning",
    "styregodkjennelse risiko påhviler selger eller kjøper",
    "kommunale pålegg offentlige krav borettslaget",
    "brannslokkingsutstyr brannvarslingsanlegg avvik",
    "nivellering stue kjøkken avvik registrert",
    "borettslagets vedlikeholdsplan fremtidige kostnader"
  ],
  "reasoning": "\nGjennomgangen av alle 19 opprinnelig identifiserte risikoer er foretatt mot dokumentchunkene. Samtlige risikoer er støttet av direkte sitater fra salgsoppgaven/tilstandsrapporten. Følgende justeringer er gjort:\n\nR01 (Bad TG3): Svært godt dokumentert med flere direkte sitater. Confidence justert opp til 0.99.\n\nR04 (Negativ egenkapital): Confidence justert ned til 0.88 fordi dokumentet selv presiserer at den negative egenkapitalen ikke har konsekvens for borettslaget eller andelseierne. Risikoen er reell men noe moderert av denne opplysningen.\n\nR11 (Styregodkjennelse): Evidensen inneholder en inkonsistens – det ene stedet står det at risikoen påhviler 'Selger', mens det andre stedet fremgår at kjøper er forpliktet til å gjennomføre handelen. Dette er sannsynligvis en skrivefeil i dokumentet (skal være 'Kjøper'). Confidence justert ned til 0.85 og dette bør undersøkes nærmere.\n\nR17 (Kommuneplan): Confidence justert ned til 0.75 da dette er en generell opplysning som gjelder mange eiendommer i Oslo, og det er ikke dokumentert konkrete konsekvenser for denne spesifikke eiendommen.\n\nTo nye risikoer er identifisert og lagt til:\n\nR20 (Overgang fra selskapslikning 2025): Borettslaget har hatt en helt annen driftsmodell frem til 2024 (selskapslikning med leieinntekter). Fra 2025 endres dette fundamentalt, og historiske regnskapstall gir begrenset veiledning om fremtidige felleskostnader. Dette er en vesentlig risiko som ikke var identifisert.\n\nR21 (Kun fysiske personer kan eie andelen): Begrenser kjøperkretsen og kan påvirke videresalg. Dokumentert i salgsoppgaven.\n\nYtterligere forhold som bør undersøkes nærmere:\n- Branncelleavvik er nevnt i tilstandsrapporten (avvik registrert), men ikke tilstrekkelig utdypet i de tilgjengelige chunkene.\n- Varmtvannstank er listet som TGIU (ikke undersøkt) – dette bør undersøkes.\n- Nivellering i stue/kjøkken viser registrerte avvik – omfang er uklart.\n- El-arbeider ved nytt kjøkken i 2021 er nevnt, men det er uklart om dette er dokumentert med samsvarserklæring.\n- Styregodkjennelse-formuleringen om hvem risikoen påhviler bør avklares.\n"
}

## Raw Response
```json
{
  "id": "msg_01VpJpENpnGJjd8YT6dRH734",
  "container": null,
  "content": [
    {
      "id": "toolu_016qfTg8sw9W5KPAVcgENrYZ",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Badet har TG3 (store eller alvorlige avvik). Badet er av eldre dato med sluk og membran fra ukjent byggeår. Membran og sluk er ikke fornyet, og badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt. Det må påregnes oppgradering innen kort tid.",
            "evidence": [
              "Med bakgrunn i at badet er av eldre dato og har sluk og membran som var gjeldene da bygget ble oppført.",
              "Normalt slit og elde fra ukjent byggeår må badet påregnes oppgradert innen kort tid.",
              "Da hverken membran eller sluk er fornyet, vurderes badets alder samlet ut fra byggeår. Badet oppfyller ikke funksjonskravet i teknisk forskrift om tettesjikt, både på grunn av tettesjiktets (membranens) alder og på grunn av manglende tett...",
              "Våtrom > 2 etasje > Bad/wc > Generell – STORE ELLER ALVORLIGE AVVIK"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R02",
            "description": "Manglende samsvarserklæring for det elektriske anlegget. Det fremgår av selgers egenerklæringsskjema/tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for det elektriske anlegget.",
            "evidence": [
              "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ ikke er fremlagt samsvarserklæring for det elektriske anlegget."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R03",
            "description": "Avvik fra godkjente byggetegninger – rominndeling stemmer ikke med byggetegninger. Kjøkkenet er flyttet til åpen løsning med stuen, og et soverom er etablert der kjøkkenet sto tidligere. Dette kan innebære ulovlig bruksendring.",
            "evidence": [
              "Det foreligger godkjente og byggemeldte tegninger, men det er avvik fra disse. Kommentar: Rominndeling stemmer ikke med byggetegninger.",
              "Kjøkken er flyttet til åpen løsning med stuen og et soverom er etablert der kjøkkenet sto tidligere.",
              "Det er ikke samsvar mellom byggegodkjente tegninger og dagens planløsning."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R04",
            "description": "Borettslagets balanse viser negativ egenkapital. Balansen viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi og borettsinnskuddet. Selv om dette ikke har direkte konsekvens for andelseierne, er det en finansiell risikofaktor.",
            "evidence": [
              "Borettslagets balanse viser en negativ egenkapital som representerer differansen mellom eiendommens bokførte verdi (eiendommens kjøpesum for mange år siden) og kjøpesummen borettslaget betalte for aksjeselskapet eiendommen lå i.",
              "SUM EGENKAPITAL OG GJELD 228 836 573 / Sum gjeld 369 714 714",
              "Den regnskapsmessige negative egenkapitalen har ingen konsekvens for borettslaget eller andelseierne, men forblir i regnskapet."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R05",
            "description": "Høy gjeld til konsernselskap. Borettslaget har en gjeld til konsernselskap på kr 199 349 583, og langsiktig gjeld til konsern (borettsinnskudd) på kr 168 714 523. Total gjeld er kr 369 714 714, som overstiger sum eiendeler på kr 228 836 573.",
            "evidence": [
              "Gjeld til konsernselskap 199 349 583",
              "Langsiktig gjeld til konsern (borettsinnskudd) 168 714 523",
              "Sum gjeld 369 714 714",
              "SUM EGENKAPITAL OG GJELD 228 836 573"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R06",
            "description": "Selger har ikke tegnet boligselgerforsikring. Dette innebærer at kjøper ikke har den ekstra sikkerheten som boligselgerforsikring normalt gir ved eventuelle skjulte feil og mangler etter overtakelse.",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R07",
            "description": "Selger har ikke bebodd eiendommen og har begrenset kunnskap om boligens tilstand. Selger er et profesjonelt selskap (Heimstaden Bostad Invest 10 AS) og har ikke personlig kjennskap til boligens faktiske tilstand, noe som øker risikoen for skjulte feil og mangler.",
            "evidence": [
              "Selger har ikke bebodd eiendommen og har derfor ikke informasjon og strømforbruket.",
              "Eier av: Heimstaden Bostad Invest 10 AS"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R08",
            "description": "Selger har ikke utført radonmåling. Manglende radonmåling innebærer at kjøper ikke vet om radonverdiene i boligen er innenfor akseptable grenser.",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R09",
            "description": "Eiendommen er registrert på byantikvarens gule liste som bevaringsverdig. Dette kan begrense mulighetene for fremtidige ombygginger eller restaureringer, og byantikvaren skal gi rådgivende uttalelse i byggesaker.",
            "evidence": [
              "Verneklasse/SEFRAK: Eiendommen er registrert på byantikvarens gule liste, noe som betyr at eiendommen er ansett som bevaringsverdig, enten helt eller delvis.",
              "Dette kan påvirke mulighetene for fremtidige ombygginger eller restaureringer av eiendommen.",
              "Byantikvaren skal gi en rådgivende uttalelse i byggesaker som berører eiendommen."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Begrenset adgang til utleie i borettslag. Boligen kan kun leies ut med styrets godkjenning og under visse vilkår i inntil 3 år. Dette begrenser kjøpers fleksibilitet til å leie ut boligen.",
            "evidence": [
              "Adgang til utleie: Det er begrenset adgang til å leie ut bolig i borettslag. Med styrets godkjenning og under visse vilkår kan boligen leies ut i inntil 3 år, jf. borettslagsloven § 5-3 til § 5-10."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R11",
            "description": "Styregodkjennelse kreves for kjøper, og risikoen for ikke å bli godkjent påhviler kjøper. Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper er godkjent på overtakelsestidspunktet, og har ikke rett til å ta eiendommen i bruk dersom godkjennelse mangler.",
            "evidence": [
              "Risikoen for å bli godkjent som ny andelseier påhviler Selger.",
              "Kjøper er forpliktet til å gjennomføre handelen uavhengig av om kjøper på overtakelsestidspunktet er godkjent av borettslaget som ny andelseier.",
              "Dersom kjøper på overtakelsestidspunktet ikke er godkjent som ny andelseier, har kjøper dog ikke rett til å ta eiendommen i bruk, jf. borettslagslovens § 4-5 (2)."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R12",
            "description": "Antatte avløpsrør av støpejern som ligger skjult i konstruksjonen. Støpejernsrør er eldre og kan være utsatt for korrosjon og lekkasjer. Disse er ikke undersøkt (TGIU).",
            "evidence": [
              "Det er antatt avløpsrør av støpejern. Ligger skjult i konstruksjonen.",
              "Bygningsdeler som ikke har blitt undersøkt (TGIU): Tekniske installasjoner > Avløpsrør"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R13",
            "description": "Bygningen er fra 1894 og har høy alder, noe som innebærer generell risiko for skjulte feil og mangler i konstruksjoner som ikke er synlig tilgjengelige ved befaring.",
            "evidence": [
              "Boligbygg med flere boenheter - Byggeår: 1894",
              "Bygninger kan ha skjulte feil og mangler som er vanskelig å oppdage ved befaring.",
              "Elde og utidsmessighet kombinert med endret bruk, kan over tid avdekke skjulte feil og mangler som ikke oppdages ved visuell kontroll."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R14",
            "description": "Energikarakter F (rød) – svært dårlig energimerking. Dette indikerer høyt energiforbruk og kan medføre høye strømkostnader for kjøper.",
            "evidence": [
              "Energikarakter: F",
              "Energifarge: Rød"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R15",
            "description": "Legalpant på inntil 2G – borettslaget har prioritet over tinglyste lån ved manglende betaling av felleskostnader. Dette innebærer at kjøpers eventuelle lån kan ha dårligere prioritet enn borettslagets krav.",
            "evidence": [
              "Borettslaget har legalpant på inntil 2G som Borettslaget har legalpanterett i andelen for krav på sikkerhet for betaling av felleskostnader.",
              "Dette betyr at dekning av felleskostnader og andre krav fra borettslaget har prioritet over tinglyste lån når det gjelder borettslaget, på inntil 2 ganger folketrygdens grunnbeløp."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R16",
            "description": "Borettslaget inngår i en cashpool-ordning med morselskapet Heimstaden Bostad Invest 10 AS, og har en stor fordring til konsern på kr 202 265 547. Dette innebærer en konsentrasjonsrisiko knyttet til konsernets finansielle stilling.",
            "evidence": [
              "Fordring til konsern 202 265 547",
              "Selskapet går i en likviditetsordning (cashpool) hvor selskapet har felles likvider med mor, Heimstaden Bostad Invest 10 AS."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R17",
            "description": "Ny kommuneplan fra 2015 kan få betydning for eksisterende reguleringsplaner. Eiendommen er regulert etter bestemmelser fra 1977, og ny kommuneplan kan endre rammebetingelsene for eiendommen.",
            "evidence": [
              "Oslo kommune har vedtatt en ny kommuneplan som kan få betydning for en rekke eksisterende reguleringsplaner i kommunen.",
              "Eiendommen er regulert til boligformål etter bestemmelser i S-2255, datert 28.07.1977. Ny kommuneplan fra 23. september 2015."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R18",
            "description": "Vinduer med avvik – enkelte vinduer er vanskelige å åpne/lukke og karmer er slitte. Vinduene er fra 1985 og kan ha begrenset gjenværende levetid.",
            "evidence": [
              "Det er påvist at enkelte vinduer er vanskelig å åpne/lukke.",
              "Karmene i vinduer er slitte.",
              "Årstall: 1985 Kilde: Produksjonsår på produkt"
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R19",
            "description": "Boden som er medtatt i BRA-e ligger på sameiets/borettslagets fellesareal og kan på et senere tidspunkt omdisponeres av sameiet/borettslaget. Kjøper har dermed ingen garanti for varig bruksrett til boden.",
            "evidence": [
              "Det gjøres særskilt oppmerksom på at boden som er medtatt i BRA-e og totalt BRA, ligger på sameiets fellesareal, men disponeres av denne seksjonen. Sameiet kan på et senere tidspunkt omdisponere bruken av dette."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R20",
            "description": "Overgang fra selskapslikning til borettslagsbeskatning fra 2025 – usikkerhet rundt fremtidige felleskostnader. Borettslaget vil fra 2025 ikke lenger ha leieinntekter og driftskostnader slik regnskapet for 2024 viser, noe som kan påvirke felleskostnadenes størrelse fremover.",
            "evidence": [
              "Fra 1. januar 2025 vil borettslaget ikke lenger ha leieinntekter og driftskostnader slik regnskapet for 2024 viser (dette var siste året med selskapslikning). Derimot vil borettslaget ha inntekter fra felleskostnader og løpende driftskostnader fra borettslagets virksomhet."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R21",
            "description": "Kun fysiske personer kan eie andelen i borettslaget. Andelseier kan kun eie én andel. Dette begrenser kjøperkretsen og kan påvirke videresalg.",
            "evidence": [
              "Andelseier(e), bortsett fra stifter, kan kun eie en andel i borettslaget. Kun fysiske personer kan eie andelen."
            ],
            "source_documents": [
              "d005_d005"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          }
        ],
        "re_retrieval_queries": [
          "branncelleavvik tilstandsrapport Iduns gate 4",
          "el-arbeider kjøkken 2021 samsvarserklæring dokumentasjon",
          "varmtvannstank alder tilstand TGIU",
          "fukt råte sopp skader konstruksjon",
          "fellesgjeld andel borettslag fremtidig kostnadsøkning",
          "styregodkjennelse risiko påhviler selger eller kjøper",
          "kommunale pålegg offentlige krav borettslaget",
          "brannslokkingsutstyr brannvarslingsanlegg avvik",
          "nivellering stue kjøkken avvik registrert",
          "borettslagets vedlikeholdsplan fremtidige kostnader"
        ],
        "reasoning": "\nGjennomgangen av alle 19 opprinnelig identifiserte risikoer er foretatt mot dokumentchunkene. Samtlige risikoer er støttet av direkte sitater fra salgsoppgaven/tilstandsrapporten. Følgende justeringer er gjort:\n\nR01 (Bad TG3): Svært godt dokumentert med flere direkte sitater. Confidence justert opp til 0.99.\n\nR04 (Negativ egenkapital): Confidence justert ned til 0.88 fordi dokumentet selv presiserer at den negative egenkapitalen ikke har konsekvens for borettslaget eller andelseierne. Risikoen er reell men noe moderert av denne opplysningen.\n\nR11 (Styregodkjennelse): Evidensen inneholder en inkonsistens – det ene stedet står det at risikoen påhviler 'Selger', mens det andre stedet fremgår at kjøper er forpliktet til å gjennomføre handelen. Dette er sannsynligvis en skrivefeil i dokumentet (skal være 'Kjøper'). Confidence justert ned til 0.85 og dette bør undersøkes nærmere.\n\nR17 (Kommuneplan): Confidence justert ned til 0.75 da dette er en generell opplysning som gjelder mange eiendommer i Oslo, og det er ikke dokumentert konkrete konsekvenser for denne spesifikke eiendommen.\n\nTo nye risikoer er identifisert og lagt til:\n\nR20 (Overgang fra selskapslikning 2025): Borettslaget har hatt en helt annen driftsmodell frem til 2024 (selskapslikning med leieinntekter). Fra 2025 endres dette fundamentalt, og historiske regnskapstall gir begrenset veiledning om fremtidige felleskostnader. Dette er en vesentlig risiko som ikke var identifisert.\n\nR21 (Kun fysiske personer kan eie andelen): Begrenser kjøperkretsen og kan påvirke videresalg. Dokumentert i salgsoppgaven.\n\nYtterligere forhold som bør undersøkes nærmere:\n- Branncelleavvik er nevnt i tilstandsrapporten (avvik registrert), men ikke tilstrekkelig utdypet i de tilgjengelige chunkene.\n- Varmtvannstank er listet som TGIU (ikke undersøkt) – dette bør undersøkes.\n- Nivellering i stue/kjøkken viser registrerte avvik – omfang er uklart.\n- El-arbeider ved nytt kjøkken i 2021 er nevnt, men det er uklart om dette er dokumentert med samsvarserklæring.\n- Styregodkjennelse-formuleringen om hvem risikoen påhviler bør avklares.\n"
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
    "input_tokens": 19948,
    "output_tokens": 5657,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
