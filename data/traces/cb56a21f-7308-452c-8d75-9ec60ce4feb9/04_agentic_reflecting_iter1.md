# Trace: agentic_reflecting_iter1
- **Run ID:** cb56a21f-7308-452c-8d75-9ec60ce4feb9
- **Tidspunkt:** 2026-03-23T19:24:01.983345+00:00
- **Varighet:** 111.31s
- **Input tokens:** 22013
- **Output tokens:** 5876

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
Risiko 1: Elektrisk anlegg ikke kontrollert (el-takst) – behov for gjennomgang grunnet alder
  Confidence: 0.97
  Evidens: Anlegget behøver en gjennomgang grunnet alder på kabler, brytere og andre komponenter.; Det er behov for at en kvalifisert elektrofaglig person kontrollerer det elektriske anlegget.; Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.; Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.

Risiko 2: Avløpsrør har høy alder – TG2 – risiko for lekkasje og behov for utskifting
  Confidence: 0.9
  Evidens: Tekniske installasjoner > Avløpsrør: Mer enn [X år gamle rør].; Avløpsrør – Grunnet alder.; Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 3: Ventilasjon har avvik fra gjeldende krav – manglende friskluftsventiler og spalteventiler
  Confidence: 0.95
  Evidens: Ventilasjon – Det er påvist avvik i ventilasjonsløsning i forhold til gjeldende krav på oppføringstidspunktet.; Det er ikke registrert friskluftsventiler i vegger eller spalteventiler i vinduer.

Risiko 4: Baderomsdør plassert i våtsone – uegnet materiale/løsning i henhold til forskrift
  Confidence: 0.92
  Evidens: Det er vindu/dør med ikke fuktbestandige materialer i våtsonen (ved vask, dusj, badekar, osv.), løsningen eller byggematerialet er uegnet.; Dør inn til badet er i følge forskriftene plassert i en våtsone siden rommet er mindre enn 4 m2, den er plassert på motsatt side av vask og dusjhjørnet.; Døren bør [tiltak ikke fullstendig gjengitt i kontekst].

Risiko 5: Plantegninger stemmer ikke med faktisk innredning og dagens bruk – mulig ulovlig bruksendring
  Confidence: 0.93
  Evidens: Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning.; Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk.; Rom er av takstmann definert etter dagens faktiske bruk, uavhengig av hva rommene faktisk er byggemeldt som.; Rommet brukes som et tredje soverom.

Risiko 6: Fellesgjeld med høy rente og betydelig restgjeld – risiko for økte felleskostnader
  Confidence: 0.92
  Evidens: Lånetype: Annuitetslån, Rentesats: 6,45%, Restsaldo: 23 911 229,00; Andel fellesgjeld: Kr 299 810 pr. 06.02.2026; Rentene har holdt seg høye gjennom 2024 og det er usikkerhet til når disse skal senkes og med hvor mye.; Nedbetaling av fellesgjeld (kapitalkostnader utgjør kr. 2 100,59,-)

Risiko 7: Felleskostnader kan økes når som helst av styret – risiko for uforutsette kostnadsøkninger
  Confidence: 0.88
  Evidens: Dersom det skulle bli nødvendig kan styret når som helst endre felleskostnadene eller vedta kapitalinnkallinger fra eierne.; På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne [salgsoppgaven er utarbeidet].; Styret ser ingen behov for å øke felleskostnader utover 1-2% årlig økning for å holde følge med prisstigningene.

Risiko 8: Legalpant – øvrige seksjonseiere og kommunen har panterett som ikke fremgår av grunnboken
  Confidence: 0.95
  Evidens: De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 9: Varmesentral ikke besiktiget av takstmann – ukjent tilstand på felles varmeanlegg
  Confidence: 0.85
  Evidens: Varmesentral – Varmesentral ikke besiktiget av takstmann. Forsyner leiligheten med varme til radiatorer og varmtvann.

Risiko 10: Reguleringsplan er helt eller delvis opphevet – usikkerhet om fremtidig arealbruk
  Confidence: 0.82
  Evidens: Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak.; Planen er helt eller delvis opphevet som følge av bystyrets vedtak 23.9.15, Kommuneplan 2015.

Risiko 11: Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset reklamasjonsvern
  Confidence: 0.93
  Evidens: Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.; Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.

Risiko 12: Radonmåling ikke utført – potensiell helserisiko kan ikke utelukkes
  Confidence: 0.72
  Evidens: Selger har ikke utført radonmåling.; Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.; Takstmann har informert om følgende: Boligen ligger minimum tre etasjer over bakkenivå og radonmåling er ikke relevant.

Risiko 13: Utleie krever styregodkjennelse – risiko for at ønsket leietaker ikke godkjennes
  Confidence: 0.87
  Evidens: I samsvar med sameiets vedtekter kreves det styregodkjennelse av leietaker ved utleie av boligen.; Kjøper bærer risikoen for at ønsket leietaker blir [godkjent].

Risiko 14: Byggets fellesarealer, tak, yttervegger, grunnmur og drenering er ikke tilstandsvurdert i rapporten
  Confidence: 0.88
  Evidens: Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som utvendig takkonstruksjon, yttervegger, grunnmur, drenering, fellesarealer innvendig og felles tekniske installasjoner. Disse bygningsdelene er i rapporten ikke tilstandsvurdert, men kun beskrevet.

Risiko 15: Eiendom under vurdering for SEFRAK-registrering/verneklasse – mulige fremtidige begrensninger på ombygning
  Confidence: 0.75
  Evidens: Eiendommen er under vurdering for oppføring på [SEFRAK-/verneliste].

Risiko 16: Energikarakter D (gul) – lavere energieffektivitet kan medføre høyere energikostnader
  Confidence: 0.83
  Evidens: Energikarakter: D; Energifarge: Gul

Risiko 17: Balkong nylig montert (2023) – ferdigattest foreligger, men garanti for samsvar med regelverk er begrenset
  Confidence: 0.78
  Evidens: Beskrivelse: Montering av ny balkong, ferdigstilt omtrent ved overtagelse i mars 2023. Arbeid utført av Balkongteam AS.; Det foreligger ferdigattest vedrørende balkonger, datert 09.11.2023.; En ferdigattest gir ingen garanti for at bygget er oppført i henhold til tillatelsen og gjeldende regelverk, eller at det senere er utført arbeid på bygget som ikke er byggemeldt eller godkjent.

Risiko 18: Innvendige dører har slitasje og avskalling av maling – estetisk og vedlikeholdsmessig risiko
  Confidence: 0.7
  Evidens: Enkelte av innvendige dører har en del slitasje.; Noe avskalling av maling på dør til stue og dør til soverommet har fått fjernet all maling på den ene siden.

Risiko 19: Fryseren har en sprekk og vegghyller er kun montert i gipsvegg – begrenset bæreevne
  Confidence: 0.65
  Evidens: Fryseren har en sprekk i seg.; Vegghyllene på stue 2 (den nordligste) er kun montert i gipsveggen, og tåler dermed ikke stor belastning.

Risiko 20: Selger har kun eid boligen i ca. 2 år og 11 måneder – begrenset kjennskap til boligens historikk og skjulte feil
  Confidence: 0.78
  Evidens: Når kjøpte du boligen? År 2023; Hvor lenge har du eid boligen? Antall år 2, Antall måneder 11

Risiko 21: Høyt bygg mot nordvest – kan gi redusert sol- og lysforhold for leiligheten
  Confidence: 0.75
  Evidens: Eiendommen har et høyt bygg mot nordvest.; Eiendommen har et høyt bygg mot nordvest og samme definisjon er brukt i markedsføring av boligen.

Dokumentkontekst:
[d016_d016 | Side [1]]
06.03.1981 ‑ Dokumentnr: 924408 ‑ Sammenslått med
kontakt megler eller se Plan‑ og bygningsetatens denne matrikkelenhet:
nettsider. Det anbefales å søke på saksnummer, adresse gnr.219 bnr.253 og 254.
eller gårds‑ og bruksnummer. Overført fra: Knr:0301 Gnr:219 Bnr:253
Gjelder denne registerenheten med flere
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det 27.12.1985 ‑ Dokumentnr: 80545 ‑ Seksjonering
tinglyst følgende heftelser og rettigheter som følger Opprettet

---

[d016_d016 | Side [1]]

tinglyst følgende heftelser og rettigheter som følger Opprettet seksjoner:
eiendommens matrikkel ved overskjøting til ny Snr: 10
hjemmelshaver: Formål: Bolig
Sameiebrøk: 114/ 9092
301/ 219/ 253/ 10: EIENDOMMEN ER OPPDELT I 76 SEKSJONER
25.06.1846 ‑ Dokumentnr: 912962 ‑ Bestemmelse om
gjerde
Overført fra: Knr:0301 Gnr:219 Bnr:253 Legalpant: Kommunen har legalpant som sikkerhet for
Gjelder denne registerenheten med flere betaling av kommunale avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i

---

[d016_d016 | Side [1]]
nterne veier og oppholdsarealer.
Eiendommen har et høyt bygg mot nordvest
Tinglyste/andre forhold
Ikke forkjøpsre琀琀 eller styregodkjennelse av ny kjøper.
Eventuelle andre forkjøpsre琀琀sklausuler: Se boligselskapets vedtekter.
Særskilte begrensninger/klausuler: Se boligselskapets vedtekter.
Dyrehold: se vedtekter/husordensreglene 琀椀l Boligsameiet
Fellesvaskeri og tørkelo昀琀
Se grunnbokutskri昀琀 for 琀椀nglyste servitu琀琀er og he昀琀elser.
Forsikring
Selskap Avtalenr Type Forsikringssum Årlig premie
Protector

---

[d016_d016 | Side [1]]
 har høyere prioritet enn
Overført fra: Knr:0301 Gnr:219 Bnr:253 legalpant til sameiet.
Gjelder denne registerenheten med flere
Vei, vann og avløp
16.06.1898 ‑ Dokumentnr: 903296 ‑ Bestemmelse om Eiendommen er tilknyttet offentlig vann‑ og
bebyggelse avløpssystem. Stikkledningene fra eiendommen og ut til
Bestemmelse om veg det kommunale nettet er private, og
Overført fra: Knr:0301 Gnr:219 Bnr:253 vedlikeholdsansvaret for disse påhviler sameiet.
Gjelder denne registerenheten med flere Adkomst til eiendommen

---

[d016_d016 | Side [1]]
 avgifter og eventuell
eiendomsskatt. De øvrige seksjonseierne i sameiet har
legalpant på inntil 2G som sikkerhet for krav knyttet til
16.06.1898 ‑ Dokumentnr: 903295 ‑ Bestemmelse om sameieforholdet, som felleskostnader. Legalpant er pant
bebyggelse som ikke vises i grunnboksutskriften, og har prioritet
Bestemmelse om benyttelse foran tinglyste lån, for eksempel banklån på seksjonen.
Bestemmelse om vann/ kloakkledning Legalpant til kommunen har høyere prioritet enn
Overført fra: Knr:0301 Gnr:219 Bnr:253

---

[d016_d016 | Side [1]]
leieenheten. For mer informasjon
om radon og krav til nivåer, se https:/ / dsa.no/ radon. Selger leverer eiendommen i ryddig og rengjort stand.
Det gjøres oppmerksom på at megler ikke har innhentet
særskilte opplysninger om det finnes pålegg fra brann‑/
Konsesjon
feiervesen på eiendommen.
Kjøp av eiendommen krever ikke konsesjon. Dersom Det gjøres oppmerksom på at vedlagte plantegninger
eiendommen er større enn 2 mål, må kjøper undertegne ikke stemmer hva gjelder faktisk innredning og
nødvendige dokumenter

---

[d016_d016 | Side [1]]
inger i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste

---

[d016_d016 | Side [1]]
ært
Beskrivelse Montering av ny balkong, ferdigstilt omtrent ved overtagelse i mars 2023
Arbeid utført av Balkongteam AS
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20

---

[d016_d016 | Side [1]]
 o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse. Disse reguleringsplanene er gjeldende:
S-2255 Vedta琀琀: 28.07.1977, Formål: Bolig m.琀椀lh. anlegg
Om tomten
Felles eiet tomt i sameiet på 2 861,3 m². Tomten er opparbeidet med felles bakgård . Asfalterte og steinlagte interne veier og oppholdsarealer.
Eiendommen har et høyt bygg mot

---

[d016_d016 | Side [1]]
en selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en

---

[d016_d016 | Side [1]]
gattest foreligger, gir
Tomtetype: Eiet det ingen garanti for at bygget er oppført i henhold til
tillatelsen og gjeldende regelverk, eller at det senere er
Tomtestørrelse: 2861.3 m² utført arbeid på bygget som ikke er byggemeldt eller
godkjent.
Felles eiet tomt. Tomten er pent opparbeidet med felles
bakgård med asfalterte og steinlagte interne veier og Alle innvendige og utvendige arealangivelser samt
oppholdsarealer med sittegrupper, sykkelparkering og rombeskrivelse er hentet fra vedlagte

---

[d016_d016 | Side [1]]
.
Gjelder denne registerenheten med flere Adkomst til eiendommen skjer via offentlig vei.
Utleie
03.05.1930 ‑ Dokumentnr: 902495 ‑ Bestemmelse om
bebyggelse Adgang til utleie: Boligen kan leies ut i henhold til
Bestemmelse om anlegg og vedlikehold av ledninger gjeldende lovverk. I samsvar med sameiets vedtekter
m.v. kreves det styregodkjennelse av leietaker ved utleie av
Overført fra: Knr:0301 Gnr:219 Bnr:253 boligen. Kjøper bærer risikoen for at ønsket leietaker blir
Gjelder denne registerenheten med

---

[d016_d016 | Side [1]]
redning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra

---

[d016_d016 | Side [1]]
 av eiendommen
Leilighet i boligsameie ved St.Hanshaugen i Oslo. Leiligheten er Ny琀琀 plastsluk på gulvet i dusjen med påstøp med innstøpte
jevnlig oppgradert på over昀氀ater, noe slitasje på gulv. Ny琀琀 bad fra avløpsrør fra servanten og vaskemaskinen. Membran kan ses
2025. Tekniske anlegg er delvis oppgraderte. Ny balkong ut mot innunder klemring på sluket under påstøpen.
bakgården. Se 琀椀lstandsrapport for u琀昀yllende opplysninger. Badet har servant med e琀琀greps kran og skap under, speilskap med
innebygget

---

[d016_d016 | Side [1]]
g 琀椀l leiligheten, og det som normalt vil
omfa琀琀es av eiers eget vedlikeholdsansvar som seksjons-, andels
- eller aksjeeier. Normalt vil de琀琀e omfa琀琀e alt innenfor
leilighetens/seksjonens/andelens vegger.
Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler
som utvendig takkonstruksjon, y琀琀ervegger, grunnmur,
drenering, fellesarealer innvendig og felles tekniske
installasjoner. Disse bygningsdelene er i rapporten ikke
琀椀lstandsvurdert, men kun beskrevet.
Takstmannen tar forbehold om at

---

[d016_d016 | Side [1]]
m er nevnt i standardlisten, men som ikke
som et tredje soverom. finnes på eiendommen, vil heller ikke følge med i salget.
Baderom: Alt utstyr og installasjoner som medfølger overtas slik de
Baderommet ble oppusset og utvidet i 2025, og er, uten garanti, med mindre det foreligger en gjeldende
arbeidene er utført av Bjølsen Rørservice AS. garanti fra produsent eller leverandør.
Dokumentasjon foreligger. Badet har et moderne og
funksjonelt uttrykk med flislagte vegger i format 60 x 60 Kjøper aksepterer at

---

[d016_d016 | Side [1]]
sjonene (el‑takst) selv om bygningssakkyndig kan Brønnøysund med organisasjonsnummer 975 459 012.
ha knyttet noen kommentarer til elanlegget ut i fra helt Eiendommen ligger i bydel St. Hanshaugen i Oslo og skal
enkle vurderingskriterier. Siden elanlegget ikke er også i fremtiden være organisert som et
kontrollert er det sannsynlig at det siden kan avdekkes eierseksjonssameie.
avvik fra dagens forskriftskrav og oppstå funksjonssvikt.
Videre må kjøper være forberedt på det må foretas For sameiet gjelder lov

---

[d016_d016 | Side [1]]
 kontakt med eiendomsmegler dersom det er
Selger har ikke utført radonmåling. Det er ikke krav om spørsmål.
dette med mindre boligen er helt eller delvis utleid.
Takstmann har informert om følgende: Boligen ligger Selger leverer eiendommen i ryddig og rengjort tilstand.
minimum tre etasjer over bakkenivå og radonmåling er
ikke relevant . Foto: Henrik Fjørtoft Sporsheim.
Kontrakts‑
49

## Side 50

OM EIENDOMMEN
innvendig og utvendig, bygger på informasjon hentet fra
grunnlag
vedlagte tilstands‑ og

---

[d016_d016 | Side [1]]
rupper, sykkelparkering og rombeskrivelse er hentet fra vedlagte tilstandsrapport.
beplantning med bed og busker. Eiendommen har et Rom er av takstmann definert etter dagens faktiske bruk,
høyt bygg mot nordvest og samme definisjon er brukt i markedsføring av boligen
(prospekt, finn.no annonse og annet salgsmateriell),
uavhengig av hva rommene faktisk er byggemeldt
Beskrivelse av
som.Det foreligger godkjente og byggemeldte tegninger,
men de stemmer ikke med dagens bruk. Ved kontroll av
eiendommen
originale

---

[d016_d016 | Side [1]]
rson Boligen selges med det inventar og utstyr som i henhold
som handler hovedsakelig som ledd i til gjeldende lover, forskrifter eller offentlige pålegg skal
næringsvirksomhet. Det vil opplyses hvis konkurrerende følge med eiendommen, jf. avhendingsloven § 3‑4.
bud kommer fra en ikke‑forbruker. Fastmonterte eller spesialtilpassede installasjoner og
innredning som anses som varig tilknyttet boligen, følger
Forbrukerkjøp – definisjon og vilkår: normalt med i handelen, med mindre det foreligger en
Et

---

[d016_d016 | Side [1]]
rderes nøye, da de indikerer avvik fra
normal slitasje og/ eller høy alder, noe som kan innebære
behov for utbedringer. Leiligheten har ingen TG3.
Samsvarserklæring: Det fremgår av selgers Bygningsdeler som er merket med TGIU er ikke blitt
egenerklæringsskjema / tilstandsrapporten at det vurdert av takstmannen.
mangler/ ikke er fremlagt samsvarserklæring for deler av
det elektriske arbeidet i boligen. Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten:
Det er fremlagt

---

[d016_d016 | Side [1]]
agens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold

---

[d016_d016 | Side [1]]
iver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i rapporten og gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand
blant annet vurdert ut fra alder og

---

[d016_d016 | Side [1]]
let er lovlig oppført eller om bruken er
lovlig, bruksendringer, lysforhold eller andre sikkerhetsmangler.
UTTRYKK OG DEFINISJONER • Eiendommens markedsverdi kan ikke baseres på en rent matema琀椀sk
beregning i forhold 琀椀l antall kvadratmeter opplyst i rapporten.
• Tilstand: Byggverkets eller bygningsdelens tekniske, funksjonelle eller Opplysninger om areal kan altså ikke alene beny琀琀es for beregning av
este琀椀ske status på et gi琀琀 琀椀dspunkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir

---

[d016_d016 | Side [1]]
 andre komponenter. Ved kjøp av ny琀琀 hus/ leilighet
gjennom hele rommet. Tilstandsgrad 2 gis med
bør det gjennomføres en elektrisk 琀椀lstandskontroll.
bakgrunn i standardens krav 琀椀l godkjente måleavvik.
Innvendig > Innvendige dører Gå til side
Enkelte av innvendige dører har en del slitasje.
Noe avskalling av maling på dør 琀椀l stue og dør 琀椀l
soverommet har få琀琀 昀樀ernet all maling på den ene
siden, de琀琀e er et bevisst u琀琀rykk for leiligheten.
Tekniske installasjoner > Avløpsrør Gå til side
Mer enn

---

[d016_d016 | Side [1]]
uffen i inn.
fryseren har en sprekk i seg. Vegghyllene på stue 2 (den
nordligste) er kun montert i gipsveggen, og tåler dermed All informasjon i tilstandsrapporten anses som kjent for
ikke stor belastning. De er derfor ikke brukt til f.eks. å kjøper, og det vil ikke være mulig å reklamere på forhold
fylles helt med bøker, men til å ha noen bøker og andre som er nevnt i rapporten. Spesielt forhold som er vurdert
pyntegjenstander. med TG2 bør vurderes nøye, da de indikerer avvik fra
normal slitasje og/ eller

---

[d016_d016 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d016_d016 | Side [1]]
bevisst uttrykk for leiligheten.
oppvarming. Avløpsrør – Grunnet alder.
Sikringsskapet er på vegg i entré inne i et skap, ‑ Ventilasjon ‑ Det er påvist avvik i ventilasjonsløsning i
hovedsikring i felles rom utenfor leiligheten. Det er delvis forhold til gjeldende krav på oppføringstidspunktet. Det
skjult og åpent elektrisk anlegg. Porttelefon med er ikke registrert friskluftsventiler i vegger eller
videofunksjon ved inngangsdør. spalteventiler i vinduer.
44

## Side 45

OM EIENDOMMEN
elbillader.
‑

---

[d016_d016 | Side [1]]
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

[d016_d016 | Side [1]]
unkt. eiendommens verdi.
• Symptom: Observerbart forhold som gir indikasjon på hvilken 琀椀lstand et • Rom som ligger utenfor boenheten, men som eier har påvist og/eller
byggverk eller en bygningsdel be昀椀nner seg i. Beny琀琀es ved beskrivelse av opplyst at 琀椀lhører boenheten, er oppmålt og inkludert i BRA-e. Det er ikke
avvik. fremvist dokumentasjon på at rommet 琀椀lhører boenheten, med mindre
de琀琀e er angi琀琀 særskilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske

---

[d016_d016 | Side [1]]
ltak Det er ikke 昀氀y琀琀et på gjenstander under befaring og det er ikke
TG3: Store eller alvorlige avvik kontrollert for skjulte feil og mangler eller u琀昀ørt inngrep i
konstruksjonene.
TG IU: Konstruksjoner som ikke er undersøkt
Takstmannen har ikke innhentet dokumentasjon fra o昀昀entlige
myndigheter, 琀椀lsendt dokumentasjon er brukt i
琀椀lstandsvurderingen.
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
KONSTRUKSJONER SOM IKKE ER

---

[d016_d016 | Side [1]]
 eller forhold som krever spesialundersøkelser. Forhold vurderes e琀琀er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Boligen ligger minimum tre etasjer over bakkenivå og radonmåling er ikke relevant .
Anlegget behøver en gjennomgang grunnet alder på kabler, brytere og andre komponenter. Ved kjøp av ny琀琀 hus/ leilighet bør det gjennomføres en
elektrisk 琀椀lstandskontroll.
Vurdering av avvik:
• Det er behov for at en kvali昀椀sert elektrofaglig person kontrollerer det elektriske anlegget.
Anlegget behøver en

---

[d016_d016 | Side [1]]
kjulte konstruksjoner slik som vann og avløp uten dokumentasjon, er
(tryggere bolighandel). Formålet er å gi en 琀椀lstandsanalyse 琀椀l bruk for den kvalitet og alder vurdert.
som bes琀椀ller og/eller i et salg 琀椀l forbruker, og ikke for andre tredjeparter.
Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk • Fastmonterte installasjoner, for eksempel innfelt belysning (downlights),
Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved omsetning av bolig), demonteres ikke for å sjekke dampsperren

---

[d016_d016 | Side [1]]
der 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et hull for å gjøre
enkle undersøkelser slik som fuktsøk.
Når du kjøper en brukt bolig Vurdering mot

---

[d016_d016 | Side [1]]
tandsvurdert, men kun beskrevet.
Takstmannen tar forbehold om at opplysninger gi琀琀 av
hjemmelshaver, eier eller kjentmann er korrekte. I 琀椀llegg
inneholder 琀椀lstandsrapporten opplysninger gi琀琀 av
hjemmelshaver.
Kunden/rekvirenten skal lese gjennom 琀椀lstandsrapporten før
TG0: Ingen avvik
bruk og gi 琀椀lbakemelding 琀椀l takstmannen hvis det 昀椀nnes
TG1: Mindre eller moderate avvik feil/mangler som bør re琀琀es opp.
TG2: Avvik som kan kreve 琀椀ltak Det er ikke 昀氀y琀琀et på gjenstander under befaring og det er

---

[d016_d016 | Side [1]]
te 62 A, 0173 OSLO Vestre Aker Takst og Eiendom AS
Gnr 219 - Bnr 253 Finnhaugveien 34
0301 OSLO 0760 OSLO
Tilstandsrapport
Årstall: 2025 Kilde: Eier
Vurdering av avvik:
• Det er vindu/dør med ikke fuktbestandige materialer i våtsonen (ved vask, dusj, badekar, osv.), løsningen eller byggematerialet er uegnet.
Dør inn 琀椀l badet er i følge forskri昀琀ene plassert i en våtsone siden rommet er mindre enn 4 m2, den er plassert på motsa琀琀 side av vask og dusjhjørnet.
Konsekvens/琀椀ltak
• Andre 琀椀ltak:
Døren bør

---

[d016_d016 | Side [1]]
e har blitt undersøkt (TGIU):
‑ Varmesentral – Varmesentral ikke besiktiget av Sameiet Wdm.thranes Gate 60‑62
takstmann. Forsyner leiligheten med varme til radiatorer
og varmtvann. Organisasjonsnummer: 975459012
Tilstandsrapporten beskriver byggverkets tekniske Sameiet Waldemar Thranes gate 60/ 62 SE består av 76
tilstand. Det er ikke foretatt kontroll av de elektriske seksjoner og er registrert i Foretaksregisteret i
installasjonene (el‑takst) selv om bygningssakkyndig kan Brønnøysund med

---

[d016_d016 | Side [1]]
, og ikke selve sameiet, står som eier av boligene. Det medfører at all rehabilitering,
også evt. påkostning, kostnadsføres i perioden arbeidene utføres. Eventuelle verdiøkninger
som følge av tiltakene, tilfaller den enkelte sameier uten at det føres i sameiets balanse.
Siden tiltakene er finansiert gjennom felles låneopptak i sameiet, fremkommer låne-
opptaket som gjeld i balansen og nedbetales gjennom fremtidige felleskostnader.
Ved kjøp og salg av bolig er udekket tap (negativ egenkapital) reflektert

---

[d016_d016 | Side [1]]
 kjøper være forberedt på det må foretas For sameiet gjelder lov av 1. januar 2018 om eierseksjoner
oppgraderinger på grunn av slitasje, fraværende (eierseksjonsloven), som er en del av sameierkontrakten.
vedlikehold, arbeider som er utført av ufaglærte, Hver seksjon har en tilhørende sameiepart som angir
utidsmessighet eller tekniske løsninger som ikke holder eierens andel av fellesarealene og grunnlaget for
dagens standard. I Norge er det en av oppgavene til Det fordeling av fellesutgifter. Sameierne har

---

[d016_d016 | Side [1]]
med driften av sameiet, herunder
skatter og offentlige avgifter, forsikringer, olje og strøm til fellesanleggene,
vedlikeholdsutgifter, administrasjonsutgifter og lignende.
4.3 Det skal til enhver tid avsettes en viss del av de månedlige innbetalingene til et
vedlikeholdsfond. Beløpet fastsettes i henhold til det vedtatte budsjettet.
4.4 Nyanskaffelser, utskiftninger og større utbedrings- og vedlikeholdsomkostninger som
ikke dekkes av det ordinære driftsbudsjettet, skal finansieres av sameierne i henhold

---

[d016_d016 | Side [1]]
enstand for konstant utvikling, det må derfor påregnes beløp som utlignes på hver sameier og betales
at dagens anlegg ikke nødvendigvis er dimensjonert for forskuddsvis. Alle fellesutgifter fordeles etter størrelsen
oppgradering av kjøkken med nye elektriske apparater, på den enkelte sameiepart. Med fellesutgifter menes alle
rehabilitering av bad m/ varmekabler eller installeringer kostnader knyttet til drift av sameiet, herunder skatter og
45

## Side 46

OM EIENDOMMEN
offentlige avgifter, forsikringer,

---

[d016_d016 | Side [1]]
an være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre

---

[d016_d016 | Side [1]]
Strømprisene holder seg fortsatt høye, men bergvarmeanlegget som Sameiet
installerte skåner oss for kostnadene vi kunne ha fått uten dette. Vi oppfordrer igjen
eiere til å bytte til konvektorovner når man skal skifte ut sin radiator.
Vedlikeholdsplanen
Etter flere år med store vedlikeholdsprosjekter har vi endelig hatt tid til å fokusere på
de mindre prosjektene som skal løfte uttrykket til gården.
De fleste har sikkert fått med seg at det monteres et nytt gjerde på fremsiden. Styret
har benyttet noe av

---

[d016_d016 | Side [1]]
 én ganger folketrygdens
grunnbeløp, «1G»- i hver sameiepart for mulig udekkede forpliktelser overfor sameiet med
prioritet etter de pantelån som er tinglyst på den enkelte seksjon.
4.1 Sameiets fellesutgifter dekkes ved at det på hver sameier utlignes et fast månedlig
beløp som betales forskuddsvis. Alle fellesutgifter fordeles mellom sameierne etter
størrelsen på sameieparten.
4.2 Med fellesutgifter menes samtlige utgifter forbundet med driften av sameiet, herunder
skatter og offentlige avgifter,

---

[d016_d016 | Side [1]]
5 Kr 299 810 pr. 06.02.2026
Lånebetingelser fellesgjeld: Sameiet har ett lån felles lån,
Felleskostnader
med følgende betngelser:
Felleskostnader kr 6 312,‑ pr. mnd
Bank: Svenska Handelsbanken AB NUF
Felleskostnader inkulderer: Felleskostnadene inkluderer Lånenr.: 90537084404
bl.a.: Lånetype: Annuitetslån
Nedbetaling av fellesgjeld (kapitalkostnader utgjør kr. 2 Rentesats: 6,45%
100,59,‑),varmtvann, fyring, forsikring, kommunale Restsaldo: 23 911 229,00
avgifter, vask av trappeoppgang, styre‑/ og Andel

---

[d016_d016 | Side [1]]
dinære driftsbudsjettet, skal finansieres av sameierne i henhold til
de respektive sameiepartene. Sameiemøtet kan likevel bestemme at en bestemt omkostning
fordeles på sameierne med like store andeler dersom det faller mest naturlig.
122

## Side 123

5.1 Den enkelte sameier har ansvaret for det innvendige vedlikeholdet av den enkeltes
seksjon. Dette gjelder
- Bygningsmessige konstruksjoner så som skillevegger, vinduer, dører, entredører, baderoms-
og kjøkkeninnredninger og lignende
- Radiatorer

---

[d016_d016 | Side [1]]
både eier og rentekostnader benyttes til ytterligere nedbetaling av
eventuelle håndverkere. I tillegg skal naboer som berøres lånet.
av arbeidet varsles via oppslagstavlen innen rimelig frist.
Arbeid som ikke er tilstrekkelig varslet, og som påfører Rentene har holdt seg høye gjennom 2024 og det er
sameiet eller øvrige sameiere vesentlig ulempe, kan usikkerhet til når disse skal senkes og med hvor mye.
beordres stanset av styret. Styret ønsker å videreføre de ekstra nedbetalingene inntil
videre, da det vil

---

[d016_d016 | Side [1]]
 en enkel forklaring på arbeidet som skal gjøres, hvilke tidsrom og
datoer arbeidet skal utføres, samt kontaktinformasjon til eier og håndverkere.
Alle naboer som berøres av arbeidene skal varsles via oppslagstavlen, med rimelig frist, om
arbeider som kan påvirke dem.
Arbeid som ikke er tilstrekkelig varslet og som påfører en vesentlig ulempe for Sameiet eller
øvrige sameiere kan beordres stanset av Styret.
5.3 Sameiet svarer for følgende fellesanlegg innenfor den enkeltes seksjon: tilførsel for
varmt og

---

[d016_d016 | Side [1]]
 kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
observasjoner.

---

[d016_d016 | Side [1]]
ttegrupper, her blir det grønt og fint på
våren.
Her kan du bo i et hyggelig sameie, med
godt naboskap.

## Side 34

Plantegning

## Side 35

Plantegning

## Side 36

WALDEMAR THRANES GATE 62A
OM EIENDOMMEN

## Side 37

OM EIENDOMMEN
OM EIENDOMMEN
Dersom det skulle bli nødvendig kan styret når som helst
Økonomi
endre felleskostnadene eller vedta kapitalinnkallinger fra
eierne.
Prisantydning
Kr 7 700 000 På grunn av prisstigning og renteøkning er det forventet
at felleskostnadene vil øke etter at denne

---

[d016_d016 | Side [1]]
 av oppgavene til Det fordeling av fellesutgifter. Sameierne har enerett til bruk
lokale el‑tilsynet (DLE) å foreta tilsyn av elektriske anlegg av sine respektive seksjoner, som utelukkende benyttes
i boliger og fritidsboliger. Alle boliger skal ha periodisk til boligformål.
kontroll hvert 20 år og hytter/ fritidsboliger kontrolleres
hvert 30 år. El‑anlegget er en bygningsdel som er Sameiets fellesutgifter dekkes gjennom et fast månedlig
gjenstand for konstant utvikling, det må derfor påregnes beløp som

---

[d016_d016 | Side [1]]
dører, baderoms-
og kjøkkeninnredninger og lignende
- Radiatorer m/tilkoblinger
- Seksjonens elektriske anlegg fra strømmåleren, men ikke kabel mellom hovedsikringer og til
seksjonens sikringsskap.
- Signalanlegg for TV-/Internet fra seksjonens tilknytningspunkt i fellesareal
- Callinganlegg montert inne i seksjonen.
Ved renovering av bad skal sameier bekoste etablering av godkjent membranløsning i
rommet, samt kostnader til utskiftning av sluk eller tilkobling til rørfornyingsløsningen i
soilrøret som

---

[d016_d016 | Side [1]]
rag for
avsetning til forventet tap. Avsetning til tap gjøres på grunnlag av individuelle vurderinger av
de
enkelte fordringene.
SKATTETREKKSKONTO
Selskapet har egen separat skattetrekkskonto i OBOS-banken. Innskuddet tilhører
myndighetene og kan ikke disponeres fritt.
NOTE: 2
INNKREVDE FELLESKOSTNADER
Felleskostnader 5 873 216
SUM INNKREVDE FELLESKOSTNADER 5 873 216
NOTE: 3
ANDRE INNTEKTER
Innflyttingsgebyr 3 000
Nøkler 8 283
SUM ANDRE INNTEKTER 11 283
NOTE: 4
PERSONALKOSTNADER
Lønn dugnadsarbeid

---

[d016_d016 | Side [1]]
 arbeidsgiveravgift -17 625
SUM SKYLDIGE OFFENTLIGE AVGIFTER -51 212

Vedlegg 2 16 av 25 5404 Årsregnskap 2024.pdf
106

## Side 107

Styrets arbeid
Økonomi:
Sameiets økonomi er for tiden god og styret ser ingen behov for å øke
felleskostnader utover 1-2% årlig økning for å holde følge med prisstigningene. Vi
velger da å benytte deler av beløpet til ekstraordinære nedbetalinger for å dekke opp
eventuelle avvik.
De ekstra nedbetalingene på lånet hjelper oss kutte rentekostnadene.
I løpet av 2024 har vi

---

[d016_d016 | Side [1]]
45

## Side 46

OM EIENDOMMEN
offentlige avgifter, forsikringer, energi til fellesanlegg, behov for å øke felleskostnader utover 1‑2% årlig økning
vedlikehold, administrasjon og øvrige driftsrelaterte for å holde følge med prisstigningene. Vi velger da å
utgifter. benytte deler av beløpet til ekstraordinære nedbetalinger
for å dekke opp eventuelle avvik.
Alle arbeider som kan medføre ulemper for sameiet eller
naboer, eller som innebærer inngrep i bygningens De ekstra nedbetalingene på lånet hjelper oss

---

[d016_d016 | Side [1]]
orkjøpsrett: Sameiet praktiserer ikke forkjøpsrett.
Vedtekter og husordensregler ligger vedlagt
Styregodkjennelse: Sameiet praktiserer ikke salgsoppgaven.
styregodkjennelse.
Energimerke
Regnskap/ budsjett/ kostnadsøkninger: Utdrag fra
årsberettning for 2025: Energikarakter: D
Sameiets økonomi er for tiden god og styret ser ingen
46

## Side 47

OM EIENDOMMEN
Energifarge: Gul
Verneklasse/ SEFRAK
Info energiklasse
Eiendommen er under vurdering for oppføring på
Alle eiendommer som selges eller leies ut skal

---

[d016_d016 | Side [1]]
nenfor denne begrensningslinjen skal
arealene nyttes som vist på planen.
§ 2. Tidligere stadfestede reguleringsplaner for trafikkområde opprettholdes i den utstrekning de er vist på
planen. Videre opprettholdes tidligere stadfestede reguleringer for felles areal for flere eiendommer.
§ 3. Før byggetillatelse kan gis, skal det foreligge detaljert bebyggelsesplan for vedkommende eiendom. Etter
bygningsrådets bestemmelse i det enkelte tilfelle kan bebyggelsen tillates oppført i inntil 5 etasjer.
§ 4. I

---

[d016_d016 | Side [1]]
ndepartementet har i brev av 28. juli 1977 og 19. Oktober 1977 i medhold av par 28,1, jfr. par 27 i
bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av departementet.
Ny paragraf ble vedtatt av Oslo bystyre 1.10.1987, S-2937.
§ 1. Det regulerte området er på planen vist med reguleringsgrense. Innenfor denne begrensningslinjen skal
arealene nyttes som vist på

---

[d016_d016 | Side [1]]
elle kan bebyggelsen tillates oppført i inntil 5 etasjer.
§ 4. I områder regulert til blanding av bolig/kontor/forretning skal det ved nybygging innpasses flest mulig
boliger, minimum det antall boliger som fantes pr. 1.1.73. Bruksendring av eksisterende bolig tillates ikke.
Hvor det er regulert til blanding av forretning/kontor eller bolig/forretning/kontor, skal det søkes
innpasset forretninger i 1.etasje mot gate. Bruksendring av eksisterende forretning i 1.etasje mot gate
kan kun tillates i særlige

---

[d016_d016 | Side [1]]
 28,1,jfr. paragraf
27 i bygningslov av 18. juni 1965 stadfestet Oslo kommunestyres vedtak av 29. april 1976 om bestemmelser i
tilknytning til reguleringsplan for Oslo sentrum og indre sone, med noen endringer foretatt av departementet,
S-2255.
Pgf. 7. I denne reguleringsplan er det ikke tatt stilling til bevaringsspørsmålet.
Før prosjektering tar til, anbefales byggherrer og forslagsstillere å kontakte berørte kommunale
myndigheter for å bringe klarhet i eventuelle bevaringsinteresser.
Når behandling av

---

[d016_d016 | Side [1]]
ity=&c
husstandens forbruk og utgifter de siste årene. Forbruket p=1&bounds=69.93030017617484,‑11.42578125,56.5110175
kan variere avhengig av faktorer som antall 04952164,53.173828125&zoom=5&id=281000
familiemedlemmer, ønsket innetemperatur, egne avtaler
om energiforsyning med mer. Megler påtar seg ikke
ansvar for informasjonen som fremgår av energiattesten.
Regulerings og arealplaner
Reguleringsplanen som gjelder for eiendommen er helt
Oppvarming
eller delvis opphevet som følge av bystyrets vedtak
Boligen

---

[d016_d016 | Side [1]]
tnyttelsesgraden etter en teoretisk etasjehøyde
på 3 meter.
§ 6. Reguleringsplaner innenfor planområdet som er stadfestet i tidsrommet mellom 4.9.1974 og stadfestelse av
nærværende plan, skal gjelde foran denne plan.
S-2937, 01.10.87 (se tidl. S-2255)
FORSLAG TIL ENDREDE REGULSERINGSBESTEMMELSER (NY PARAGRAF 7) FOR
SENTRUM OG INDRE SONE (SONEPLANEN).
Miljøverndepartementet har i brev av 28. juli 1977 og 19. oktober 1977 i medhold av paragraf 28,1,jfr. paragraf
27 i bygningslov av 18. juni 1965 stadfestet

---

[d016_d016 | Side [1]]
følgeavbystyretsvedtak23.9.15,
Kommuneplan2015. SeogsåS
y
-
s
2t y9
re
3
ts
7,1.10.87endr.reg.best.
b
Knytning(er)motandreplaanver:V300589,V290689,V300187,V080384,26394,20483,
ge
øl
16578, 37684, 21884,mVf131284, V100495, 5984, 23383, 39183, 6382, 41871, 2390,
o
s
V160184, V28018
h
6
ev
,etV190482N2, 43392, 1491, V240993, 2490, 20090, 17490, 9993,
p
V190482,3483,o

---

[d016_d016 | Side [1]]
se:oslo.kommune.no – beboerparkering bygget er oppført i samsvar med tillatelsen og gjeldende
regelverk, eller at det senere er utført arbeid på bygget
Tidvis mulighet for kjøp/ leie av parkeringsplass i som ikke er byggemeldt eller godkjent.
området.
Det foreligger ferdigattest vedrørende balkonger, datert
09.11.2023.
Adkomst
Det foreligger ferdigattest vedrørende åpning i
På høyre side i annonsen finner du et kartutsnitt. Ved å bærevegg, datert 15.10.2019.
klikke på kartet kan du enkelt planlegge din

---

[d016_d016 | Side [1]]
yggeår og type bolig. Formuesverdien er en
prosentandel av denne boligverdien.For mer informasjon Det er beboerparkering tilgjengelig i området. Med
om formuesverdi, se Skatteetatens nettsider. beboerparkeringstillatelse kan man parkere hele døgnet,
også utover eventuell maksparkeringstid, på plasser
reservert for beboere.
Beliggenhet
Gjeldende priser for beboerparkering i bydelene Frogner,
Leiligheten ligger sentralt til i et attraktivt St. Hanshaugen, Gamle Oslo, Grünerløkka og Sagene –
boligblokkområde

---

[d016_d016 | Side [1]]

129

## Side 130

130

## Side 131

n).
n
ø
gr
g
o
g
g
y
S-2255 tr
mart,
S
-
0
3
Reguleringsbestemmelser i tilknytning til endret reguleringsplan for O2s0lo sentrum og in-
ot
m
dresoneiOslokommune. Osl o
-
5
1
0
2
n
pla
ne
u
Vedtaksdato: 28.07.1977 m
m
Ko
Vedtattav: Miljøverndepartementet 2(
6
2
k
Vedtaksdokumenter: 197701394 sa
5,
1
0
Lovverk: BL1965 9. 2
0
3.
Høydereferanse: OSLOLOKAL k 2
dta
Merknader: Planenerheltellerdelvveisopphevetsomfølgeavbystyretsvedtak23.9.15,
Kommuneplan2015. SeogsåS
y
-
s
2t

---

[d016_d016 | Side [1]]
ludert i handelen. 29, 40 og 54
‑ Saksnummer 202216828: Waldemar Thranes gate 51 D
Selger opplyser at det årlige strømforbruket er ca. 3.996 ‑ Bruksendring av lager/ garasje til enebolig og
kWh. Det er viktig å merke seg at energiforbruket kan fasadeendringer
variere fra husstand til husstand. ‑ Saksnummer 202461122: Fougstads gate 25 A ‑
47

## Side 48

OM EIENDOMMEN
Oppføring av balkong
For mer informasjon om gjeldende reguleringsforhold, 06.03.1981 ‑ Dokumentnr: 924408 ‑ Sammenslått med
kontakt megler

---

[d016_d016 | Side [1]]
gt 琀椀lfeldig og kan innebære kontroll under
over昀氀aten med spiss redskap eller lignende.
Oppdragsnr.: 21155-1657 Befaringsdato: 06.02.2026 Side: 26 av 27
85

## Side 86

Waldemar Thranes gate 62 A, 0173 OSLO Vestre Aker Takst og Eiendom AS
Gnr 219 - Bnr 253 Finnhaugveien 34
0301 OSLO 0760 OSLO
Tilstandsrapportens avgrensninger
betydning for om arealet måles og oppgis i 琀椀lstandsrapporten. Når arealet
måles tas det ikke hensyn 琀椀l om arealet er lovlig oppført eller om bruken er
lovlig, bruksendringer,

---

[d016_d016 | Side [1]]
erende forretning i 1.etasje mot gate
kan kun tillates i særlige tilfelle.
§ 5. I denne planen betyr utnyttelsesgrad (U) det samlede brutto gulvareal for et avgrenset område
(inkludert garasjeanlegg over terreng) dividert med brutto grunnareal for byggeområdene innenfor området.
Brutto grunnareal kan regnes inntil midten av tilgrensende trafikkområde/friområde og maksimum 10 meter.
Hvor det er større brutto etasjehøyde enn 3 meter regnes utnyttelsesgraden etter en teoretisk etasjehøyde
på 3 meter.
§ 6.

---

[d016_d016 | Side [1]]
y琀琀es for å beregne eiendommens verdi. De琀琀e kan kreve søknad og 琀椀llatelse, for eksempel hvis du endrer et rom
fra bod 琀椀l soverom eller arbeidsrom,eller hvis du endrer en bolig 琀椀l to
Den bygningssakkyndige kan avdekke eventuelle separate boliger.
bruksendringer og avvik i branncelleinndeling
Rom for varig opphold har krav 琀椀l takhøyde, romstørrelse,rømningsvei
Den bygningssakkyndige ser på byggetegninger hvis de er 琀椀lgjengelige og de琀琀e er og lysforhold som må være oppfylt. Du kan søke kommunen om

---

[d016_d016 | Side [1]]
bygger på informasjon hentet fra
grunnlag
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i
salgsoppgaven er basert på selgers informasjon,
Overtakelse
fagkyndig vurdering, samt opplysninger fra offentlige
Tidspunkt for overtakelse avtales mellom kjøper og registre som kommunen og Kartverket. Det er viktig at
selger. kjøper setter seg grundig inn i alle salgsdokumentene,
herunder salgsoppgave, tilstandsrapport og selgers
egenerklæring. Kjøper anses for å være kjent med
Forsikring
forhold som er tydelig

---

[d016_d016 | Side [1]]
es mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse
oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende

---

[d016_d016 | Side [1]]
 forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene

---

[d016_d016 | Side [1]]
ndommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at

---

[d016_d016 | Side [1]]
ERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Oslo Vest
Oppdragsnr.
01260016
Selger 1 navn Selger 2 navn
Ane Kristine Granli Kallset Sindre Nås
Gateadresse
Waldemar Thranes gate 62A
Poststed Postnr
OSLO 0173
Er det dødsbo?
Nei Ja
Avdødes navn
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Når kjøpte du boligen?
År 2023
Hvor lenge har du eid boligen?
Antall år 2
Antall måneder 11
Har du bodd i boligen siste 12

---

[d016_d016 | Side [1]]
per anses for å være kjent med
Forsikring
forhold som er tydelig beskrevet i salgsdokumentene,
Boligselgerforsikring: Selger har ikke tegnet slike forhold kan ikke senere gjøres gjeldende som en
boligselgerforsikring. mangel ved boligen. Dette gjelder uavhengig av om
dokumentene er lest.
Boligkjøperforsikring: Kjøper har anledning til å tegne
boligkjøperforsikring. Vedlagt i salgsoppgaven følger Det kan være forskjell mellom boligens faktiske bruk av
informasjon om Boligkjøperforsikring fra Söderberg & rom

---

[d016_d016 | Side [1]]
rsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i

---

[d016_d016 | Side [1]]
er forbereder en
megleren kan avvikle budrunden på en forsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
høyeste bud.
2.Når et bud er inngitt til megler og

---

[d016_d016 | Side [1]]
rsvarlig måte
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
som sikrer selger og interessenter et tilstrekkelig grunnlag før jeg undertegner kjøpekontrakten.
VIKTIGE AVTALERETTSLIGE FORHOLD:
1.Det eksisterer ingen angrerett ved salg/kjøp av fast 3.Selger står fritt til å forkaste eller akseptere ethvert
eiendom. bud, og er for eksempel ikke forpliktet til å akseptere
høyeste bud.
2.Når et bud er inngitt til megler og innholdet i budet er
formidlet til selger (slik at selger har

---

[d016_d016 | Side [1]]
ar gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er

---

[d016_d016 | Side [1]]

− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side

---

[d016_d016 | Side [1]]
erforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil

---

[d016_d016 | Side [1]]
gnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: AKGK, SN 4
61006210
:ecnerefer
tnemucoD
58

## Side 59

E-Signing validated secured by
NAME OF SIGNER

---

[d016_d016 | Side [1]]
nnpakke bolig Info: kr 9.900
Eierskiftegebyr: kr 6 725 Emera No1 AS
Organisasjonsnummer 934963385
Henrik Ibsens gate 40‑42, 0255 OSLO
Tlf: 222 52 222
Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
Salgsoppgavedato
er estimert til ca. kr 24 625,00, og omfatter vanligvis
innhenting av informasjon fra kommunen, eventuell 23.02.2026
forretningsfører, samt kopi av tinglyste dokumenter.
Total kostnad ved salg til prisantydning: kr 123 175,00
Samarbeidspartnere og
Dette inkluderer både vederlag

---

[d016_d016 | Side [1]]
ring
Selskap Avtalenr Type Forsikringssum Årlig premie
Protector Forsikring ASA 3019029
Kommentar
Oppdragsnr.: 21155-1657 Befaringsdato: 06.02.2026 Side: 24 av 27
83

## Side 84

Waldemar Thranes gate 62 A, 0173 OSLO Vestre Aker Takst og Eiendom AS
Gnr 219 - Bnr 253 Finnhaugveien 34
0301 OSLO 0760 OSLO
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Egenerklæring 19.02.2026 Gjennomgå琀琀 Nei
Grunnbokutskri昀琀 09.02.2026 Gjennomgå琀琀 Nei
Megler 11.02.2026 Gjennomgå琀琀 Nei
kan 昀椀nnes

---

[d016_d016 | Side [1]]
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

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Elektrisk anlegg ikke kontrollert (el-takst) – behov for gjennomgang grunnet alder",
      "evidence": [
        "Anlegget behøver en gjennomgang grunnet alder på kabler, brytere og andre komponenter.",
        "Det er behov for at en kvalifisert elektrofaglig person kontrollerer det elektriske anlegget.",
        "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
        "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
        "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R02",
      "description": "Avløpsrør har høy alder – TG2 – risiko for lekkasje og behov for utskifting",
      "evidence": [
        "Tekniske installasjoner > Avløpsrør: Mer enn [X år gamle rør].",
        "Avløpsrør – Grunnet alder.",
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R03",
      "description": "Ventilasjon har avvik fra gjeldende krav – manglende friskluftsventiler og spalteventiler",
      "evidence": [
        "Ventilasjon – Det er påvist avvik i ventilasjonsløsning i forhold til gjeldende krav på oppføringstidspunktet.",
        "Det er ikke registrert friskluftsventiler i vegger eller spalteventiler i vinduer."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R04",
      "description": "Baderomsdør plassert i våtsone – uegnet materiale/løsning i henhold til forskrift",
      "evidence": [
        "Det er vindu/dør med ikke fuktbestandige materialer i våtsonen (ved vask, dusj, badekar, osv.), løsningen eller byggematerialet er uegnet.",
        "Dør inn til badet er i følge forskriftene plassert i en våtsone siden rommet er mindre enn 4 m2, den er plassert på motsatt side av vask og dusjhjørnet."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R05",
      "description": "Plantegninger stemmer ikke med faktisk innredning og dagens bruk – mulig ulovlig bruksendring",
      "evidence": [
        "Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning.",
        "Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk.",
        "Rom er av takstmann definert etter dagens faktiske bruk, uavhengig av hva rommene faktisk er byggemeldt som.",
        "Rommet brukes som et tredje soverom."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R06",
      "description": "Fellesgjeld med høy rente og betydelig restgjeld – risiko for økte felleskostnader",
      "evidence": [
        "Lånetype: Annuitetslån, Rentesats: 6,45%, Restsaldo: 23 911 229,00",
        "Andel fellesgjeld: Kr 299 810 pr. 06.02.2026",
        "Rentene har holdt seg høye gjennom 2024 og det er usikkerhet til når disse skal senkes og med hvor mye.",
        "Nedbetaling av fellesgjeld (kapitalkostnader utgjør kr. 2 100,59,-)"
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R07",
      "description": "Felleskostnader kan økes når som helst av styret – risiko for uforutsette kostnadsøkninger",
      "evidence": [
        "Dersom det skulle bli nødvendig kan styret når som helst endre felleskostnadene eller vedta kapitalinnkallinger fra eierne.",
        "På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne salgsoppgaven er utarbeidet.",
        "Styret ser ingen behov for å øke felleskostnader utover 1-2% årlig økning for å holde følge med prisstigningene."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R08",
      "description": "Legalpant – øvrige seksjonseiere og kommunen har panterett som ikke fremgår av grunnboken",
      "evidence": [
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R09",
      "description": "Varmesentral ikke besiktiget av takstmann – ukjent tilstand på felles varmeanlegg",
      "evidence": [
        "Varmesentral – Varmesentral ikke besiktiget av takstmann. Forsyner leiligheten med varme til radiatorer og varmtvann."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R10",
      "description": "Reguleringsplan er helt eller delvis opphevet – usikkerhet om fremtidig arealbruk",
      "evidence": [
        "Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak.",
        "Planen er helt eller delvis opphevet som følge av bystyrets vedtak 23.9.15, Kommuneplan 2015.",
        "S-2255 Vedtatt: 28.07.1977, Formål: Bolig m.tilh. anlegg – Merknader: Planen er helt eller delvis opphevet."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R11",
      "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset reklamasjonsvern",
      "evidence": [
        "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
        "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R12",
      "description": "Radonmåling ikke utført – potensiell helserisiko kan ikke utelukkes",
      "evidence": [
        "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
        "Takstmann har informert om følgende: Boligen ligger minimum tre etasjer over bakkenivå og radonmåling er ikke relevant."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    },
    {
      "risk_id": "R13",
      "description": "Utleie krever styregodkjennelse – risiko for at ønsket leietaker ikke godkjennes",
      "evidence": [
        "I samsvar med sameiets vedtekter kreves det styregodkjennelse av leietaker ved utleie av boligen.",
        "Kjøper bærer risikoen for at ønsket leietaker blir godkjent."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R14",
      "description": "Byggets fellesarealer, tak, yttervegger, grunnmur og drenering er ikke tilstandsvurdert i rapporten",
      "evidence": [
        "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som utvendig takkonstruksjon, yttervegger, grunnmur, drenering, fellesarealer innvendig og felles tekniske installasjoner. Disse bygningsdelene er i rapporten ikke tilstandsvurdert, men kun beskrevet."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R15",
      "description": "Eiendom under vurdering for SEFRAK-registrering/verneklasse – mulige fremtidige begrensninger på ombygning",
      "evidence": [
        "Eiendommen er under vurdering for oppføring på [SEFRAK-/verneliste].",
        "Verneklasse/SEFRAK: Eiendommen er under vurdering for oppføring på [liste]."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R16",
      "description": "Energikarakter D (gul) – lavere energieffektivitet kan medføre høyere energikostnader",
      "evidence": [
        "Energikarakter: D",
        "Energifarge: Gul"
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R17",
      "description": "Balkong nylig montert (2023) – ferdigattest foreligger, men garanti for samsvar med regelverk er begrenset",
      "evidence": [
        "Beskrivelse: Montering av ny balkong, ferdigstilt omtrent ved overtagelse i mars 2023. Arbeid utført av Balkongteam AS.",
        "Det foreligger ferdigattest vedrørende balkonger, datert 09.11.2023.",
        "En ferdigattest gir ingen garanti for at bygget er oppført i henhold til tillatelsen og gjeldende regelverk, eller at det senere er utført arbeid på bygget som ikke er byggemeldt eller godkjent."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R18",
      "description": "Innvendige dører har slitasje og avskalling av maling – estetisk og vedlikeholdsmessig risiko",
      "evidence": [
        "Enkelte av innvendige dører har en del slitasje.",
        "Noe avskalling av maling på dør til stue og dør til soverommet har fått fjernet all maling på den ene siden."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.55
    },
    {
      "risk_id": "R19",
      "description": "Fryseren har en sprekk og vegghyller er kun montert i gipsvegg – begrenset bæreevne",
      "evidence": [
        "Fryseren har en sprekk i seg.",
        "Vegghyllene på stue 2 (den nordligste) er kun montert i gipsveggen, og tåler dermed ikke stor belastning."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.5
    },
    {
      "risk_id": "R20",
      "description": "Selger har kun eid boligen i ca. 2 år og 11 måneder – begrenset kjennskap til boligens historikk og skjulte feil",
      "evidence": [
        "Når kjøpte du boligen? År 2023",
        "Hvor lenge har du eid boligen? Antall år 2, Antall måneder 11"
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R21",
      "description": "Høyt bygg mot nordvest – kan gi redusert sol- og lysforhold for leiligheten",
      "evidence": [
        "Eiendommen har et høyt bygg mot nordvest.",
        "Eiendommen har et høyt bygg mot nordvest og samme definisjon er brukt i markedsføring av boligen."
      ],
      "source_documents": [
        "d016_d016"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    }
  ],
  "re_retrieval_queries": [
    "Avløpsrør alder TG2 antall år tilstandsrapport",
    "SEFRAK verneklasse vurdering konsekvenser begrensninger",
    "Baderom oppussing 2025 Bjølsen Rørservice dokumentasjon membran",
    "Åpning bærevegg ferdigattest 2019 tillatelse",
    "Styregodkjennelse leietaker vedtekter konsekvenser avslag",
    "Bergvarmeanlegg sameiet teknisk tilstand felles installasjoner",
    "Reguleringsplan S-2255 opphevet kommuneplan 2015 konsekvenser fremtidig bruk",
    "Boligselgerforsikring reklamasjon kjøper rettigheter avhendingsloven"
  ],
  "reasoning": "\nGjennomgang av alle 21 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Elektrisk anlegg (0.97):** Meget godt dokumentert. Flere uavhengige tekstpassasjer bekrefter risikoen: manglende el-takst, alder på komponenter, manglende samsvarserklæring. Confidence opprettholdes på 0.97.\n\n**R02 – Avløpsrør alder (0.90 → 0.85):** Evidensen bekrefter TG2 og alder som begrunnelse, men eksakt alder på rørene er ikke gjengitt i dokumentchunkene (fremstår som [X år]). Vedlikeholdsansvar for stikkledninger bekreftes. Confidence justeres ned til 0.85 pga. manglende konkret aldersangivelse.\n\n**R03 – Ventilasjon (0.95):** Godt dokumentert med direkte sitat fra tilstandsrapporten. Confidence opprettholdes.\n\n**R04 – Baderomsdør i våtsone (0.92):** Godt dokumentert. Direkte sitat fra tilstandsrapport bekrefter avviket. Confidence opprettholdes.\n\n**R05 – Plantegninger/bruksendring (0.93):** Godt dokumentert. Flere passasjer bekrefter avvik mellom tegninger og faktisk bruk, inkl. tredje soverom. Confidence opprettholdes.\n\n**R06 – Fellesgjeld/rente (0.92):** Meget godt dokumentert med konkrete tall: 6,45% rente, restsaldo 23,9 mill., andel fellesgjeld 299 810 kr. Confidence opprettholdes.\n\n**R07 – Felleskostnader kan økes (0.88 → 0.85):** Dokumentert, men styret signaliserer kun 1-2% økning og god økonomi. Risikoen er reell men noe moderert av styrets uttalelse. Confidence justeres ned til 0.85.\n\n**R08 – Legalpant (0.95):** Meget godt dokumentert med detaljerte beskrivelser av både kommunens og sameiets legalpant, prioritetsrekkefølge. Confidence justeres opp til 0.97.\n\n**R09 – Varmesentral ikke besiktiget (0.85):** Dokumentert med direkte sitat. Confidence opprettholdes.\n\n**R10 – Reguleringsplan opphevet (0.82 → 0.80):** Dokumentert, men konsekvensene for fremtidig arealbruk er uklare. Kommuneplan 2015 gjelder nå. Confidence justeres ned til 0.80.\n\n**R11 – Ingen boligselgerforsikring (0.93 → 0.95):** Meget godt dokumentert. Selger har aktivt valgt bort forsikringen. Confidence justeres opp til 0.95.\n\n**R12 – Radonmåling (0.72 → 0.50):** Takstmann har eksplisitt vurdert at radonmåling ikke er relevant fordi boligen ligger minimum tre etasjer over bakkenivå. Dette er en faglig vurdering som i stor grad avkrefter risikoen. Confidence justeres ned til 0.50 – risikoen er marginal.\n\n**R13 – Styregodkjennelse utleie (0.87):** Godt dokumentert. Confidence opprettholdes.\n\n**R14 – Fellesarealer ikke tilstandsvurdert (0.88 → 0.90):** Meget godt dokumentert med direkte sitat. Confidence justeres opp til 0.90.\n\n**R15 – SEFRAK/verneklasse (0.75 → 0.72):** Kun én kort referanse uten detaljer om konsekvenser. Usikkerhet om hva vurderingen innebærer. Confidence justeres ned til 0.72.\n\n**R16 – Energikarakter D (0.83 → 0.80):** Dokumentert, men energikarakter D er ikke uvanlig for eldre bygg og representerer en moderat risiko. Bergvarmeanlegg i sameiet skåner noe for energikostnader. Confidence justeres ned til 0.80.\n\n**R17 – Balkong 2023 (0.78 → 0.72):** Ferdigattest foreligger, noe som reduserer risikoen. Standardforbeholdet om ferdigattest er generisk. Confidence justeres ned til 0.72.\n\n**R18 – Innvendige dører slitasje (0.70 → 0.55):** Dokumentet antyder at avskalling er et bevisst estetisk uttrykk (\"dette er et bevisst uttrykk for leiligheten\"). Dette reduserer risikoen betydelig. Confidence justeres ned til 0.55.\n\n**R19 – Fryser/vegghyller (0.65 → 0.50):** Lav risiko. Fryseren er løsøre og vegghyllene er allerede beskrevet med bruksbegrensning. Ikke en vesentlig risiko for kjøper. Confidence justeres ned til 0.50.\n\n**R20 – Kort eiertid (0.78):** Dokumentert. Selger har eid boligen i under 3 år, noe som begrenser kjennskapet til historikk. Confidence opprettholdes.\n\n**R21 – Høyt bygg nordvest (0.75 → 0.72):** Dokumentert, men konsekvensene for lysforhold er ikke nærmere beskrevet. Confidence justeres ned til 0.72.\n\n**Manglende risikoer identifisert:**\n- Åpning i bærevegg (ferdigattest 2019) er nevnt i dokumentet men ikke identifisert som egen risiko – bør undersøkes nærmere.\n- Baderom oppusset 2025 av Bjølsen Rørservice – dokumentasjon foreligger, men garanti og kvalitet bør verifiseres.\n- Bergvarmeanlegget i sameiet er en felles installasjon som ikke er tilstandsvurdert – kan representere en risiko.\n- Sameiet har 76 seksjoner – stor organisasjon med potensielt kompleks beslutningsprosess for vedlikehold.\n"
}

## Raw Response
```json
{
  "id": "msg_01Fyx6KJLcHMZ1jqu2HWzCFu",
  "container": null,
  "content": [
    {
      "id": "toolu_01Pw675XN1GZeJUfU73npdfB",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Elektrisk anlegg ikke kontrollert (el-takst) – behov for gjennomgang grunnet alder",
            "evidence": [
              "Anlegget behøver en gjennomgang grunnet alder på kabler, brytere og andre komponenter.",
              "Det er behov for at en kvalifisert elektrofaglig person kontrollerer det elektriske anlegget.",
              "Siden elanlegget ikke er kontrollert er det sannsynlig at det siden kan avdekkes avvik fra dagens forskriftskrav og oppstå funksjonssvikt.",
              "Det fremgår av selgers egenerklæringsskjema / tilstandsrapporten at det mangler/ikke er fremlagt samsvarserklæring for deler av det elektriske arbeidet i boligen.",
              "Det er ikke foretatt kontroll av de elektriske installasjonene (el-takst) selv om bygningssakkyndig kan ha knyttet noen kommentarer til elanlegget."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R02",
            "description": "Avløpsrør har høy alder – TG2 – risiko for lekkasje og behov for utskifting",
            "evidence": [
              "Tekniske installasjoner > Avløpsrør: Mer enn [X år gamle rør].",
              "Avløpsrør – Grunnet alder.",
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R03",
            "description": "Ventilasjon har avvik fra gjeldende krav – manglende friskluftsventiler og spalteventiler",
            "evidence": [
              "Ventilasjon – Det er påvist avvik i ventilasjonsløsning i forhold til gjeldende krav på oppføringstidspunktet.",
              "Det er ikke registrert friskluftsventiler i vegger eller spalteventiler i vinduer."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R04",
            "description": "Baderomsdør plassert i våtsone – uegnet materiale/løsning i henhold til forskrift",
            "evidence": [
              "Det er vindu/dør med ikke fuktbestandige materialer i våtsonen (ved vask, dusj, badekar, osv.), løsningen eller byggematerialet er uegnet.",
              "Dør inn til badet er i følge forskriftene plassert i en våtsone siden rommet er mindre enn 4 m2, den er plassert på motsatt side av vask og dusjhjørnet."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R05",
            "description": "Plantegninger stemmer ikke med faktisk innredning og dagens bruk – mulig ulovlig bruksendring",
            "evidence": [
              "Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning.",
              "Det foreligger godkjente og byggemeldte tegninger, men de stemmer ikke med dagens bruk.",
              "Rom er av takstmann definert etter dagens faktiske bruk, uavhengig av hva rommene faktisk er byggemeldt som.",
              "Rommet brukes som et tredje soverom."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R06",
            "description": "Fellesgjeld med høy rente og betydelig restgjeld – risiko for økte felleskostnader",
            "evidence": [
              "Lånetype: Annuitetslån, Rentesats: 6,45%, Restsaldo: 23 911 229,00",
              "Andel fellesgjeld: Kr 299 810 pr. 06.02.2026",
              "Rentene har holdt seg høye gjennom 2024 og det er usikkerhet til når disse skal senkes og med hvor mye.",
              "Nedbetaling av fellesgjeld (kapitalkostnader utgjør kr. 2 100,59,-)"
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R07",
            "description": "Felleskostnader kan økes når som helst av styret – risiko for uforutsette kostnadsøkninger",
            "evidence": [
              "Dersom det skulle bli nødvendig kan styret når som helst endre felleskostnadene eller vedta kapitalinnkallinger fra eierne.",
              "På grunn av prisstigning og renteøkning er det forventet at felleskostnadene vil øke etter at denne salgsoppgaven er utarbeidet.",
              "Styret ser ingen behov for å øke felleskostnader utover 1-2% årlig økning for å holde følge med prisstigningene."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R08",
            "description": "Legalpant – øvrige seksjonseiere og kommunen har panterett som ikke fremgår av grunnboken",
            "evidence": [
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R09",
            "description": "Varmesentral ikke besiktiget av takstmann – ukjent tilstand på felles varmeanlegg",
            "evidence": [
              "Varmesentral – Varmesentral ikke besiktiget av takstmann. Forsyner leiligheten med varme til radiatorer og varmtvann."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R10",
            "description": "Reguleringsplan er helt eller delvis opphevet – usikkerhet om fremtidig arealbruk",
            "evidence": [
              "Reguleringsplanen som gjelder for eiendommen er helt eller delvis opphevet som følge av bystyrets vedtak.",
              "Planen er helt eller delvis opphevet som følge av bystyrets vedtak 23.9.15, Kommuneplan 2015.",
              "S-2255 Vedtatt: 28.07.1977, Formål: Bolig m.tilh. anlegg – Merknader: Planen er helt eller delvis opphevet."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R11",
            "description": "Selger har ikke tegnet boligselgerforsikring – kjøper har begrenset reklamasjonsvern",
            "evidence": [
              "Boligselgerforsikring: Selger har ikke tegnet boligselgerforsikring.",
              "Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R12",
            "description": "Radonmåling ikke utført – potensiell helserisiko kan ikke utelukkes",
            "evidence": [
              "Selger har ikke utført radonmåling. Det er ikke krav om dette med mindre boligen er helt eller delvis utleid.",
              "Takstmann har informert om følgende: Boligen ligger minimum tre etasjer over bakkenivå og radonmåling er ikke relevant."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          },
          {
            "risk_id": "R13",
            "description": "Utleie krever styregodkjennelse – risiko for at ønsket leietaker ikke godkjennes",
            "evidence": [
              "I samsvar med sameiets vedtekter kreves det styregodkjennelse av leietaker ved utleie av boligen.",
              "Kjøper bærer risikoen for at ønsket leietaker blir godkjent."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R14",
            "description": "Byggets fellesarealer, tak, yttervegger, grunnmur og drenering er ikke tilstandsvurdert i rapporten",
            "evidence": [
              "Tilstandsrapporten tar derfor ikke for seg bygningens fellesdeler som utvendig takkonstruksjon, yttervegger, grunnmur, drenering, fellesarealer innvendig og felles tekniske installasjoner. Disse bygningsdelene er i rapporten ikke tilstandsvurdert, men kun beskrevet."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R15",
            "description": "Eiendom under vurdering for SEFRAK-registrering/verneklasse – mulige fremtidige begrensninger på ombygning",
            "evidence": [
              "Eiendommen er under vurdering for oppføring på [SEFRAK-/verneliste].",
              "Verneklasse/SEFRAK: Eiendommen er under vurdering for oppføring på [liste]."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R16",
            "description": "Energikarakter D (gul) – lavere energieffektivitet kan medføre høyere energikostnader",
            "evidence": [
              "Energikarakter: D",
              "Energifarge: Gul"
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R17",
            "description": "Balkong nylig montert (2023) – ferdigattest foreligger, men garanti for samsvar med regelverk er begrenset",
            "evidence": [
              "Beskrivelse: Montering av ny balkong, ferdigstilt omtrent ved overtagelse i mars 2023. Arbeid utført av Balkongteam AS.",
              "Det foreligger ferdigattest vedrørende balkonger, datert 09.11.2023.",
              "En ferdigattest gir ingen garanti for at bygget er oppført i henhold til tillatelsen og gjeldende regelverk, eller at det senere er utført arbeid på bygget som ikke er byggemeldt eller godkjent."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R18",
            "description": "Innvendige dører har slitasje og avskalling av maling – estetisk og vedlikeholdsmessig risiko",
            "evidence": [
              "Enkelte av innvendige dører har en del slitasje.",
              "Noe avskalling av maling på dør til stue og dør til soverommet har fått fjernet all maling på den ene siden."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.55
          },
          {
            "risk_id": "R19",
            "description": "Fryseren har en sprekk og vegghyller er kun montert i gipsvegg – begrenset bæreevne",
            "evidence": [
              "Fryseren har en sprekk i seg.",
              "Vegghyllene på stue 2 (den nordligste) er kun montert i gipsveggen, og tåler dermed ikke stor belastning."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.5
          },
          {
            "risk_id": "R20",
            "description": "Selger har kun eid boligen i ca. 2 år og 11 måneder – begrenset kjennskap til boligens historikk og skjulte feil",
            "evidence": [
              "Når kjøpte du boligen? År 2023",
              "Hvor lenge har du eid boligen? Antall år 2, Antall måneder 11"
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R21",
            "description": "Høyt bygg mot nordvest – kan gi redusert sol- og lysforhold for leiligheten",
            "evidence": [
              "Eiendommen har et høyt bygg mot nordvest.",
              "Eiendommen har et høyt bygg mot nordvest og samme definisjon er brukt i markedsføring av boligen."
            ],
            "source_documents": [
              "d016_d016"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          }
        ],
        "re_retrieval_queries": [
          "Avløpsrør alder TG2 antall år tilstandsrapport",
          "SEFRAK verneklasse vurdering konsekvenser begrensninger",
          "Baderom oppussing 2025 Bjølsen Rørservice dokumentasjon membran",
          "Åpning bærevegg ferdigattest 2019 tillatelse",
          "Styregodkjennelse leietaker vedtekter konsekvenser avslag",
          "Bergvarmeanlegg sameiet teknisk tilstand felles installasjoner",
          "Reguleringsplan S-2255 opphevet kommuneplan 2015 konsekvenser fremtidig bruk",
          "Boligselgerforsikring reklamasjon kjøper rettigheter avhendingsloven"
        ],
        "reasoning": "\nGjennomgang av alle 21 identifiserte risikoer mot dokumentevidensen:\n\n**R01 – Elektrisk anlegg (0.97):** Meget godt dokumentert. Flere uavhengige tekstpassasjer bekrefter risikoen: manglende el-takst, alder på komponenter, manglende samsvarserklæring. Confidence opprettholdes på 0.97.\n\n**R02 – Avløpsrør alder (0.90 → 0.85):** Evidensen bekrefter TG2 og alder som begrunnelse, men eksakt alder på rørene er ikke gjengitt i dokumentchunkene (fremstår som [X år]). Vedlikeholdsansvar for stikkledninger bekreftes. Confidence justeres ned til 0.85 pga. manglende konkret aldersangivelse.\n\n**R03 – Ventilasjon (0.95):** Godt dokumentert med direkte sitat fra tilstandsrapporten. Confidence opprettholdes.\n\n**R04 – Baderomsdør i våtsone (0.92):** Godt dokumentert. Direkte sitat fra tilstandsrapport bekrefter avviket. Confidence opprettholdes.\n\n**R05 – Plantegninger/bruksendring (0.93):** Godt dokumentert. Flere passasjer bekrefter avvik mellom tegninger og faktisk bruk, inkl. tredje soverom. Confidence opprettholdes.\n\n**R06 – Fellesgjeld/rente (0.92):** Meget godt dokumentert med konkrete tall: 6,45% rente, restsaldo 23,9 mill., andel fellesgjeld 299 810 kr. Confidence opprettholdes.\n\n**R07 – Felleskostnader kan økes (0.88 → 0.85):** Dokumentert, men styret signaliserer kun 1-2% økning og god økonomi. Risikoen er reell men noe moderert av styrets uttalelse. Confidence justeres ned til 0.85.\n\n**R08 – Legalpant (0.95):** Meget godt dokumentert med detaljerte beskrivelser av både kommunens og sameiets legalpant, prioritetsrekkefølge. Confidence justeres opp til 0.97.\n\n**R09 – Varmesentral ikke besiktiget (0.85):** Dokumentert med direkte sitat. Confidence opprettholdes.\n\n**R10 – Reguleringsplan opphevet (0.82 → 0.80):** Dokumentert, men konsekvensene for fremtidig arealbruk er uklare. Kommuneplan 2015 gjelder nå. Confidence justeres ned til 0.80.\n\n**R11 – Ingen boligselgerforsikring (0.93 → 0.95):** Meget godt dokumentert. Selger har aktivt valgt bort forsikringen. Confidence justeres opp til 0.95.\n\n**R12 – Radonmåling (0.72 → 0.50):** Takstmann har eksplisitt vurdert at radonmåling ikke er relevant fordi boligen ligger minimum tre etasjer over bakkenivå. Dette er en faglig vurdering som i stor grad avkrefter risikoen. Confidence justeres ned til 0.50 – risikoen er marginal.\n\n**R13 – Styregodkjennelse utleie (0.87):** Godt dokumentert. Confidence opprettholdes.\n\n**R14 – Fellesarealer ikke tilstandsvurdert (0.88 → 0.90):** Meget godt dokumentert med direkte sitat. Confidence justeres opp til 0.90.\n\n**R15 – SEFRAK/verneklasse (0.75 → 0.72):** Kun én kort referanse uten detaljer om konsekvenser. Usikkerhet om hva vurderingen innebærer. Confidence justeres ned til 0.72.\n\n**R16 – Energikarakter D (0.83 → 0.80):** Dokumentert, men energikarakter D er ikke uvanlig for eldre bygg og representerer en moderat risiko. Bergvarmeanlegg i sameiet skåner noe for energikostnader. Confidence justeres ned til 0.80.\n\n**R17 – Balkong 2023 (0.78 → 0.72):** Ferdigattest foreligger, noe som reduserer risikoen. Standardforbeholdet om ferdigattest er generisk. Confidence justeres ned til 0.72.\n\n**R18 – Innvendige dører slitasje (0.70 → 0.55):** Dokumentet antyder at avskalling er et bevisst estetisk uttrykk (\"dette er et bevisst uttrykk for leiligheten\"). Dette reduserer risikoen betydelig. Confidence justeres ned til 0.55.\n\n**R19 – Fryser/vegghyller (0.65 → 0.50):** Lav risiko. Fryseren er løsøre og vegghyllene er allerede beskrevet med bruksbegrensning. Ikke en vesentlig risiko for kjøper. Confidence justeres ned til 0.50.\n\n**R20 – Kort eiertid (0.78):** Dokumentert. Selger har eid boligen i under 3 år, noe som begrenser kjennskapet til historikk. Confidence opprettholdes.\n\n**R21 – Høyt bygg nordvest (0.75 → 0.72):** Dokumentert, men konsekvensene for lysforhold er ikke nærmere beskrevet. Confidence justeres ned til 0.72.\n\n**Manglende risikoer identifisert:**\n- Åpning i bærevegg (ferdigattest 2019) er nevnt i dokumentet men ikke identifisert som egen risiko – bør undersøkes nærmere.\n- Baderom oppusset 2025 av Bjølsen Rørservice – dokumentasjon foreligger, men garanti og kvalitet bør verifiseres.\n- Bergvarmeanlegget i sameiet er en felles installasjon som ikke er tilstandsvurdert – kan representere en risiko.\n- Sameiet har 76 seksjoner – stor organisasjon med potensielt kompleks beslutningsprosess for vedlikehold.\n"
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
    "input_tokens": 22013,
    "output_tokens": 5876,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
