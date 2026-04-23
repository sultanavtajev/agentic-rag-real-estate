# Trace: agentic_reflecting_iter1
- **Run ID:** 04f5e04a-b3e0-4fb2-9936-de7c09f99c1d
- **Tidspunkt:** 2026-03-25T11:45:44.401206+00:00
- **Varighet:** 106.81s
- **Input tokens:** 20573
- **Output tokens:** 5526

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
Risiko 1: Badet har TG3 (store eller alvorlige avvik) – tettsjikt med usikker alder og tilstand, fare for fuktskader og følgeskader. Anbefalt totalrenovering med kostnadsestimat kr 200 000–500 000.
  Confidence: 0.98
  Evidens: Rommet har tegn til slitasje, og det er registrert avvik som kan indikere fare for fuktskader ved videre bruk.; Tettsjiktets alder og tilstand er usikker, og dagens konstruksjon tilfredsstiller ikke nødvendigvis dagens krav til våtrom.; Det anbefales at badet oppgraderes eller totalrenoveres før videre bruk for å unngå potensielle følgeskader som følge av fukt eller lekkasje.; Kostnadsestimat: 200 000 – 500 000; Våtrom > 1. Etasje > Bad > Sluk, membran og tettsjikt – STORE ELLER ALVORLIGE AVVIK

Risiko 2: Manglende ferdigattest, ekspedisjonsdokument og midlertidig brukstillatelse. Det finnes ingen dokumentasjon på at boligen lovlig kan tas i bruk, og kjøper påtar seg risikoen for eventuelle pålegg fra offentlige myndigheter.
  Confidence: 0.97
  Evidens: Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen.; Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.; Kjøper påtar seg risikoen for fortsatt bruk av boligen, samt eventuelle pålegg fra offentlige myndigheter.

Risiko 3: Innvendige vannledninger har passert mer enn halvparten av forventet brukstid (TG2). Røropplegg av eldre opprinnelse med risiko for lekkasje og behov for utskifting.
  Confidence: 0.95
  Evidens: Røropplegg av eldre opprinnelse. Det vurderes til at mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.; Tekniske installasjoner > Vannledninger – Det er avvik

Risiko 4: Sameiet er under stiftelse og mangler årsregnskap, husordensregler og vedtekter. Disse dokumentene er lovet ferdigstilt 01.04.2026, men foreligger ikke på salgstidspunktet.
  Confidence: 0.96
  Evidens: Leiligheten vil være en del av et sameie som er under stiftelse.; Det foreligger ikke på nåværende tidspunkt årsregnskap, husordensregler eller vedtekter.; Selger opplyser at dette skal være i orden 01.04.2026.

Risiko 5: Utearealene er ikke seksjonert som tilleggsdel grunn. Eksklusiv bruksavtale er tidsbegrenset til maks 30 år og kan ikke forlenges ved forhåndsavtale, noe som skaper usikkerhet om fremtidig bruksrett til utearealer.
  Confidence: 0.93
  Evidens: De utvendige arealene er ikke seksjonert som tilleggsdel grunn.; Det skal inngås en avtale om eksklusiv, og avtalen gjelder i maks 30 år fra inngåelsen.; Ved utløp av avtalen kan en ny avtale om eksklusiv bruk inngås, men det kan ikke på forhånd avtales noen plikt eller krav om forlengelse av den eksisterende avtalen.; Selger opplyser at utearealene skal vedtektfestes. Dette skal vedtas på et ekstraordinært årsmøte før det blir ført inn i vedtektene.

Risiko 6: Ukjent fundamentering og grunnforhold, samt ukjent byggeår. Tettesjikt på tak har kort/liten gjenværende restlevetid med risiko for skjulte avvik og svekket funksjon.
  Confidence: 0.9
  Evidens: Ukjent fundamentering og grunnforhold.; Foreløpig ukjent byggeår for undertegnede.; Tettesjikt har en alder som tilsier at det er kort/liten gjenværende restlevetid.; På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker...

Risiko 7: Legalpant – kommunen og øvrige seksjonseiere har legalpant i eiendommen. Kommunens legalpant for kommunale avgifter og eiendomsskatt har høyere prioritet enn banklån og vises ikke i grunnboken.
  Confidence: 0.92
  Evidens: Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.

Risiko 8: Eldre standard med etterslep på vedlikehold. Overflater, innredning og tekniske installasjoner er av eldre dato og boligen er moden for oppgradering, noe som innebærer betydelige fremtidige kostnader.
  Confidence: 0.91
  Evidens: Leiligheten inneholder eldre standard.; Det er etterslep på vedlikehold. Det må...; Fremstår som eldre og bærer preg av å være modent for oppgradering. Overflater, innredning og tekniske installasjoner er av eldre dato.

Risiko 9: Flisfuger og fliser på badet har riss/sprekker, og gulvet har motfall til sluk og fall mot terskel (TG2). Dette øker risikoen for fuktinntrenging og vannskader.
  Confidence: 0.94
  Evidens: Det er påvist at flisfuger har riss/sprekker.; Det er påvist sprekker i fliser.; Målinger viser at gulvet har motfall til sluk og fall mot terskel.; Våtrom > 1. Etasje > Bad > Overflater Gulv – Det er avvik

Risiko 10: Private stikkledninger for vann og avløp – vedlikeholdsansvaret påhviler sameiet. Eventuelle skader eller utskiftinger av stikkledninger er sameiets ansvar og kostnad.
  Confidence: 0.88
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 11: Fellesutgiftene er kun estimerte og vil bli endelig fastsatt av sameiermøtet. Størrelsen avhenger av antall enheter i prosjektet og hvilke tjenester sameiet velger, noe som gir usikkerhet om fremtidige løpende kostnader.
  Confidence: 0.87
  Evidens: Fellesutgifter er hovedsakelig estimert med et variabelt beløp pr. kvm. pr. mnd. basert på boligens eierbrøk.; Endelige fellesutgifter vil bli bestemt av sameiermøtet og vil være avhengig av hvilke tjenester sameiet ønsker utført i felles regi.; Størrelsen av fellesutgifter vil også være avhengig av endelig antall enheter i prosjektet.

Risiko 12: Grunnforurensning og kulturminner kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Manglende registrering utelukker ikke faktisk forekomst.
  Confidence: 0.72
  Evidens: Ingen grunnforurensing registrert på matrikkelenheten.; Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.; Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen.

Risiko 13: Dører tetter ikke helt (TG2) og det er påvist sprekker og slitasje på dørene. Dette kan medføre varmetap, trekk og økte energikostnader.
  Confidence: 0.85
  Evidens: Det er avvik: Døren tetter ikke helt mot...; Det er påvist sprekker og slitasje på dørene.; Utvendig > Dører – Vurdering av avvik: Det er avvik

Risiko 14: Egenerklæring fra selger er ikke gjennomgått av takstmann. Samsvarserklæring for elektrisk anlegg er heller ikke gjennomgått, noe som gir begrenset innsikt i anleggets tilstand.
  Confidence: 0.83
  Evidens: Egenerklæring – Ikke gjennomgått – Nei; Samsvarserklæring – Ikke gjennomgått – Nei; Ved kontroll av det elektriske anlegget og det rørtekniske anlegget er det ikke gjort vurderinger utover gjeldende instruks da dette ikke er takstmannens/bygningssakyndiges kjernekompetanse.

Dokumentkontekst:
[d170_d170 | Side [1]]
953. sameieforholdet, som felleskostnader. Legalpant er pant
For mer informasjon om reguleringsforhold, kontakt som ikke vises i grunnboksutskriften, og har prioritet
megler eller søk på saksnummer, adresse eller gårds‑ og foran tinglyste lån, for eksempel banklån på seksjonen.
bruksnummer på Plan‑ og bygningsetatens hjemmeside. Legalpant til kommunen har høyere prioritet enn
legalpant til sameiet.
Tinglyste heftelser
Tinglyste heftelser og rettigheter: På eiendommen er det Vei, vann og avløp
tinglyst

---

[d170_d170 | Side [1]]
idligere: Knr:3030 Gnr:78 Bnr:9 Snr:1
Eiendommen er regulert til frittliggende
småhusbebyggelse. Legalpant: Kommunen har legalpant som sikkerhet for
Gjeldende reguleringsbestemmelser: betaling av kommunale avgifter og eventuell
Id: 008/ 56 eiendomsskatt. De øvrige seksjonseierne i sameiet har
"Regulering‑ og bebyggelsesplan for Sagdalsveien legalpant på inntil 2G som sikkerhet for krav knyttet til
9‑11‑13" ‑ reg. best som Strømmenplanen av 1953. sameieforholdet, som felleskostnader. Legalpant er pant
For

---

[d170_d170 | Side [1]]
og rettigheter: På eiendommen er det Vei, vann og avløp
tinglyst følgende heftelser og rettigheter som følger Eiendommen er tilknyttet offentlig vann‑ og
eiendommens matrikkel ved overskjøting til ny avløpssystem. Stikkledningene fra eiendommen og ut til
hjemmelshaver: det kommunale nettet er private, og
vedlikeholdsansvaret for disse påhviler sameiet.
26

## Side 27

OM EIENDOMMEN
Adkomst til eiendommen skjer via offentlig vei. gjelder i maks 30 år fra inngåelsen. Ved utløp av avtalen
kan en ny avtale om

---

[d170_d170 | Side [1]]
 er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan

---

[d170_d170 | Side [1]]
 skråtak eller lav himlingshøyde. Arealet oppgis
ikke lenger kan avsluttes med ferdigattest. Kjøper påtar som tilleggsinformasjon til øvrige arealer.
seg risikoen for fortsatt bruk av boligen, samt eventuelle
pålegg fra offentlige myndigheter.
23

## Side 24

OM EIENDOMMEN
Det er påvist sprekker og slitasje på dørene.
Fellesarealer og rettigheter til
Tekniske installasjoner > Vannledninger
bruk Vurdering av avvik:
Eier opplyser at utearealene skal vedtektfestes. Dette • Det er avvik:
skal vedtas på et

---

[d170_d170 | Side [1]]
OENHETER til gjeldene instruks og retningslinjer. Takstmannen er ikke
ansvarlig for manglende opplysninger om feil og mangler som
ikke kunne oppdages etter å ha undersøkt takstobjektet etter
•Areal fastsettes etter Forskrift til avhendingsloven og Norsk gjeldende instruks og retningslinjer eller ved tilbakeholding av
Standard 3940 Areal- og volum-beregninger av bygninger fra opplysninger fra selger. Hjemmel er kontrollert utfra "Norges
2023. Eiendommer". Eventuelle heftelser og servitutter er

---

[d170_d170 | Side [1]]
 eller på https:/ / på forhold som burde ha vært oppdaget ved en ordinær
www.soderbergpartners.no/ eiendom/ boligkjoper/ gjennomgang.
Dersom det oppstår behov for ytterligere avklaringer,
Lovanvendelse oppfordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven §

---

[d170_d170 | Side [1]]
g bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel

---

[d170_d170 | Side [1]]
säkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 95






OVERSIKT OVER LØSØRE OG TILBEHØR TIL EIENDOMMEN
Oversikten er utarbeidet av Norges Eiendomsmeglerforbund, Eiendom Norge og
Advokatforeningens Eiendomsmeglingsgruppe, og er gjeldende fra 1. januar 2020.

Generelt
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. §

---

[d170_d170 | Side [1]]
r. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 12.03.2026 11:02 – Sist oppdatert 12.03.2026 11:02
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 1 av 7
55

## Side 56

Gårdsnummer 78, Bruksnummer 9, Seksjonsnummer 1 i 3205 LILLESTRØM kommune
Forretninger:
Type Dato Rolle Matrikkel

---

[d170_d170 | Side [1]]
ager, service琀椀lbud og rekreasjonsområder.
Adkomstvei
Eiendommen har adkomst via o昀昀entlig vei eller gate.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l sentrumsformål, dvs. bolig, forretning og kontor.
Om tomten
Opparbeidet tomt på 2658 m2 med asfaltert adkomst.
Tinglyste/andre forhold
Det oppfordres 琀椀l å lese

---

[d170_d170 | Side [1]]
 750 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Kommunale avgifter
545 (Tinglysningsgebyr ‑ pantedokument) Informasjon: Kommunale avgifter faktureres sameiet
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ samlet.
100 840 (Omkostninger totalt (uten
Boligkjøperforsikring))
114 340 (Omkostninger totalt (med Boligkjøperforsikring)) Andre kostnader:
Andre utgifter: Andre faste kostnader vil bl.a. være
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ innboforsikring, tv/ internett,

---

[d170_d170 | Side [1]]
på et ekstraordinært årsmøte før det blir ført
inn i vedtektene. Forsikring
De utvendige arealene er ikke seksjonert som tilleggsdel Boligkjøperforsikring: Kjøper har anledning til å tegne
grunn. Det skal inngås en avtale om eksklusiv, og avtalen boligkjøperforsikring. Vedlagt i salgsoppgaven følger
27

## Side 28

OM EIENDOMMEN
informasjon om Boligkjøperforsikring fra Söderberg & rom og det som er godkjent av myndighetene. Alle
Partners. Boligkjøperforsikring er en rettshjelpsforsikring interessenter

---

[d170_d170 | Side [1]]
Norges
2023. Eiendommer". Eventuelle heftelser og servitutter er ikke
undersøkt av takstmannen.
•Areal oppgis i hele kvadratmeter i rapporten, og gjelder for det
tidspunkt oppmålingen fant sted. Ved kontroll av det elektriske anlegget og det rørtekniske
anlegget er det ikke gjort vurderinger utover gjeldende instruks da
•Bruksareal (BRA) er det måleverdige arealet som er innenfor dette ikke er takstmannens/bygningssakyndiges
omsluttede vegger målt i gulvhøyde (bruttoareal minus arealet kjernekompetanse.

---

[d170_d170 | Side [1]]
het) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av av kunder hos iVerdi. For andre aktører er
eksemplarfrems琀椀lling av malen og standardtekster, som utskri昀琀 og annen kopiering 琀椀l bruk som grunnlag for 琀椀lsvarende rapporter, bare 琀椀lla琀琀 når det

---

[d170_d170 | Side [1]]
av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22.

---

[d170_d170 | Side [1]]
‑b ‑ Innglasset balkong, altan, terrasser.
Det foreligger verken ferdigattest,
ekspedisjonsdokument eller midlertidig brukstillatelse for Andre arealer:
eiendommen. Dette innebærer at det ikke finnes TBA ‑Terrasser og åpen altan som er tilknyttet boligen.
dokumentasjon på at boligen lovlig kan tas i bruk. ALH ‑ Areal med lav himlingshøyde måles på samme
måte som BRA, men man ser bort fra krav til
Eiendommen er oppført før 1998 og og i hht. plan‑ og himlingshøyde. Arealet inngår ikke i BRA, men

---

[d170_d170 | Side [1]]
lene skal vedtektfestes. Dette • Det er avvik:
skal vedtas på et ekstraordinært årsmøte før det blir ført Røropplegg av eldre opprinnelse. Det vurderes til at mer
inn i vedtektene. enn halvparten av forventet brukstid er passert på
De utvendige arealene er ikke seksjonert som tilleggsdel innvendige vannledninger.
grunn. Det skal inngås en avtale om eksklusiv, og avtalen
gjelder i maks 30 år fra inngåelsen. Ved utløp av avtalen Tekniske installasjoner > Varmtvannstank
kan en ny avtale om eksklusiv bruk

---

[d170_d170 | Side [1]]
. Det skal inngås en avtale om eksklusiv, og avtalen
22

## Side 23

OM EIENDOMMEN
gjelder i maks 30 år fra inngåelsen. Ved utløp av avtalen Det foreligger godkjente tegninger som stemmer med
kan en ny avtale om eksklusiv bruk inngås, men det kan dagens bruk.
ikke på forhånd avtales noen plikt eller krav om
forlengelse av den eksisterende avtalen.
Innhold
1.etasje: Entré, bad, kjøkken, kott, soverom, soverom 2,
stue
Beskrivelse av
eiendommen
Areal
BRA ‑ i: 92 m²
Type eiendom BRA totalt: 92 m²
Eieform:

---

[d170_d170 | Side [1]]
 innbo), felles belysning, sameiet legal panterett i den enkelte eierseksjon,
forretningsførsel, vaktmestertjeneste, trappevask, begrenset til inntil 2 ganger folketrygdens grunnbeløp.
snømåking m.v.
Kjøper og selger er forpliktet til å signere den standard
Endelige fellesutgifter vil bli bestemt av sameiermøtet og kjøpekontrakten utarbeidet av Emera som en del av
vil være avhengig av hvilke tjenester sameiet ønsker eiendomshandleren. Kjøpekontrakten kan gjennomgås
utført i felles regi. Fordelingsnøkkel

---

[d170_d170 | Side [1]]
avløp uten •Referansenivå: kravet til bygningsdelen eller rommet på
dokumentasjon, er kvalitet og alder vurdert. byggetidspunktet.
•Fastmonterte installasjoner, for eksempel innfelt belysning og •Tilstand: byggverkets eller bygningsdelens tekniske, funksjonelle
høyttalere, skal ikke demonteres for å sjekke dampsperren bak. eller estetiske status på et gitt tidspunkt.
Dette er av hensyn til bygningssakkyndiges kompetanse og
risikoen for skade.
•Symptom: forhold som gir indikasjon på hvilken tilstand

---

[d170_d170 | Side [1]]
old som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom under terreng kan det borres et

---

[d170_d170 | Side [1]]
al slitasje eller høy alder, og kan
medføre behov for utbedring. Bygningsdeler vurdert med Våtrom > 1. Etasje > Bad > Overflater Gulv
TGIU er ikke blitt undersøkt av takstmann. Vurdering av avvik:
• Det er påvist at flisfuger har riss/ sprekker.
Bygningsdeler med TG2: • Det er påvist sprekker i fliser.
Utvendig > Dører Det er påvist at flisfuger og fliser har riss/ sprekker.
Vurdering av avvik: Målinger viser at gulvet har motfall til sluk og fall mot
• Det er avvik: terskel.
Døren tetter ikke helt mot

---

[d170_d170 | Side [1]]
riften.
Rapporten beskriver avvik, det vil si en tilstand som er dårligere
enn referansenivået. Rapporten vil normalt ikke fremheve positive BEFARINGEN
sider ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og

---

[d170_d170 | Side [1]]
forbindelse med salget er det utarbeidet en
tilstandsrapport fra bygningssakkyndig. Rapporten gir en Våtrom > 1. Etasje > Bad > Overflater vegger og himling
teknisk vurdering av boligen og påviser eventuelle avvik. Vurdering av avvik:
Det er viktig å merke seg at forhold som er vurdert med • Det er avvik:
TG2 og TG3 bør gjennomgås nøye, ettersom disse Det er slitasje på overflater spesielt i fuger og malte flater.
indikerer avvik fra normal slitasje eller høy alder, og kan
medføre behov for utbedring.

---

[d170_d170 | Side [1]]
er du å vite om 琀椀lstandsrapporten
Tilstanden vurderes med ulike 琀椀lstandsgrader
Tilstanden gir u琀琀rykk for en gi琀琀 forventet 琀椀lstand, blant annet vurdert ut fra alder og normal bruk. Ved Tilstandsgrad 0 (TG0) og Tilstandsgrad 1
(TG1) gir den bygningssakkyndige normalt ingen begrunnelse for valg av 琀椀lstandsgrad. Grunnen er at bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for

---

[d170_d170 | Side [1]]
mstår som eldre og bærer preg av å være modent for oppgradering. Over昀氀ater, innredning og tekniske installasjoner er av eldre dato, og
det er ikke kjent når badet sist ble totalrenovert. Rommet har tegn 琀椀l slitasje, og det er registrert avvik som kan indikere fare for fuktskader ved videre
bruk.
Te琀琀esjiktets alder og 琀椀lstand er usikker, og dagens konstruksjon 琀椀lfredss琀椀ller ikke nødvendigvis dagens krav 琀椀l våtrom. Det anbefales at badet
oppgraderes eller totalrenoveres før videre bruk for å unngå

---

[d170_d170 | Side [1]]
ingsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller følgeskader.
TILSTANDSGRAD 3, TG3: STORE ELLER ALVORLIGE AVVIK
Denne 琀椀lstandsgraden brukes ved kra昀琀ige tegn på

---

[d170_d170 | Side [1]]
nærmet ny, ikke vise tegn på slitasje og det skal være lagt frem dokumentasjon på
faglig god u琀昀ørelse. Det er ingen merknader 琀椀l delen.
TILSTANDSGRAD 1, TG1: MINDRE AVVIK
Bygningsdelen skal bare ha normal slitasje, og straks琀椀ltak skal ikke anses som nødvendig. Graden kan også
brukes når delen er ny, men der dokumentasjon på faglig god u琀昀ørelse mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer

---

[d170_d170 | Side [1]]
 merke seg at fornyelse av
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
forbedret.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full

---

[d170_d170 | Side [1]]
edet loftsetasje og
Vurdering av avvik: kjeller.
• Det er avvik: Ukjent fundamentering og grunnforhold. Yttervegger
Konsekvens/ tiltak utvendig kledd med liggende panel og
• Tiltak: saltakskonstruksjon tekket med takstein.
Overvåk tilstanden jevnlig. Tettesjikt har en alder som
tilsier at det er kort/ liten gjenværende restlevetid. På Innvendig:
bakgrunn av alderen er det grunn til å varsle om risiko for Leiligheten har klikklaminat i entré og laminat i øvrige
skjulte avvik, svekket funksjon, usikker

---

[d170_d170 | Side [1]]
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

[d170_d170 | Side [1]]
for eksempel garasje, gis kun en enkel beskrivelse.
•inspisering av yttertak er basert på det som er synlig, normalt på
Avvik er vurdert ut fra tekniske forskrifter på innsiden fra loftet og utvendig fra stige/bakkenivå. I en del
godkjenningstidspunktet for bygget. Noen bygningsdeler er situasjoner er det ikke sikkerhetsmessig forsvarlig å undersøke
vurdert etter gjeldende teknisk forskrift på befaringstidspunktet. taket fra utsiden, og da vil vurderingen være basert på alder og
Dette gjelder blant annet:

---

[d170_d170 | Side [1]]
tandsrapport?
En 琀椀lstandsrapport beskriver synlige skader/avvik eller tegn på skader/avvik på boligen. Rapporten
fremhever vanligvis ikke posi琀椀ve egenskaper ved boligen.
Hva vurderer en bygningssakkyndig?
Den bygningssakkyndige vurderer boligen ut fra hva man kan forvente av en bygning av samme alder
og type. Vurderingen gjøres som regel mot hvordan det var vanlig å bygge og regler som gjaldt da
boligen ble oppført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er

---

[d170_d170 | Side [1]]
ide
Tiltak mellom kr 20 000 – 100 000
Tiltak mellom kr 100 000 – 200 000
Tiltak mellom kr 200 000 – 500 000
Tiltak over kr 500 000
Oppdragsnr.: 20409-26036 Befaringsdato: 25.02.2026 Side: 6 av 19
38

## Side 39

Sagdalsveien 7 A, 2010 STRØMMEN M-Takst AS
Gnr 78 - Bnr 9 Bjørnveien 13B
3205 LILLESTRØM 0774 OSLO
Tilstandsrapport
BOLIGBYGG MED FLERE BOENHETER
Kommentar
Foreløpig ukjent byggeår for
undertegnede
Standard
Leiligheten inneholder eldre standard
Vedlikehold
Det er e琀琀erslep på vedlikehold. Det må

---

[d170_d170 | Side [1]]
reg av å være modent
for oppgradering. Over昀氀ater, innredning og tekniske installasjoner
er av eldre dato, og det er ikke kjent når badet sist ble
totalrenovert. Rommet har tegn 琀椀l slitasje, og det er registrert avvik
som kan indikere fare for fuktskader ved videre bruk.
Te琀琀esjiktets alder og 琀椀lstand er usikker, og dagens konstruksjon
琀椀lfredss琀椀ller ikke nødvendigvis dagens krav 琀椀l våtrom. Det
anbefales at badet oppgraderes eller totalrenoveres før videre bruk
for å unngå potensielle følgeskader som

---

[d170_d170 | Side [1]]
6
For gyldighet på rapporten se forside
Oppdragsnr.: 20409-26036 Befaringsdato: 25.02.2026 Side: 17 av 19
49

## Side 50

Sagdalsveien 7 A, 2010 STRØMMEN M-Takst AS
Gnr 78 - Bnr 9 Bjørnveien 13B
3205 LILLESTRØM 0774 OSLO
Forutsetninger
Tilstandsrapportens avgrensninger foreligger godkjente og byggemeldte tegninger, eller når tegninger
ikke stemmer med dagens bruk.
STRUKTUR OG REFERANSENIVÅ
•Bygningssakkyndig gir en forenklet vurdering av branntekniske
forhold og elektriske installasjoner i boligen hvis det

---

[d170_d170 | Side [1]]
 på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med 昀氀ere boenheter
STORE ELLER ALVORLIGE AVVIK
Våtrom > 1. Etasje > Bad > Sluk, membran og Gå til side
te琀琀esjikt
AVVIK SOM KAN KREVE TILTAK
Utvendig > Dører Gå til side
Innvendig > Over昀氀ater Gå til side
Innvendig > Innvendige dører Gå til side
Tekniske installasjoner > Vannledninger Gå til side
Tekniske installasjoner > Varmtvannstank Gå til side
Våtrom > 1. Etasje > Bad > Over昀氀ater vegger og Gå til side
Anslag på utbedringskostnad

---

[d170_d170 | Side [1]]
jøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN AVVIK
Bygningsdelen skal være 琀椀lnærmet ny, ikke vise tegn på slitasje og det skal være lagt frem

---

[d170_d170 | Side [1]]
ndsgrader
TG0: Ingen avvik
TG1: Mindre eller moderate avvik
TG2: Avvik som kan kreve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
1
0.8
0.6
0.4
0.2
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
Sagdalsveien 7 A, 2010 STRØMMEN M-Takst AS
Gnr 78 - Bnr 9 Bjørnveien 13B
3205 LILLESTRØM 0774 OSLO
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Boligbygg med

---

[d170_d170 | Side [1]]
kontrakten kan gjennomgås
utført i felles regi. Fordelingsnøkkel for fordeling av hos eiendomsmegler før budet legges inn. Kontakt
utgifter reguleres i sameiets vedtekter og fordeles i eiendomsmegler for eventuelle spørsmål.
utgangspunktet etter sameiebrøken. Enkelte elementer i
budsjettet kan i vedtektene fastsettes med lik fordeling Selger leverer eiendommen i ryddig og rengjort stand.
på alle seksjoner, eller etter forbruk. Størrelsen av
fellesutgifter vil også være avhengig av endelig

---

[d170_d170 | Side [1]]
ALTERNATIV PLANTEGNING

## Side 18

(Ingen tekst ekstrahert)

## Side 19

(Ingen tekst ekstrahert)

## Side 20

SAGDALSVEIEN 7A
OM EIENDOMMEN

## Side 21

OM EIENDOMMEN
OM EIENDOMMEN
innbo), felles belysning, forretningsførsel,
Økonomi
vaktmestertjeneste, trappevask, snømåking m.v.
Prisantydning Endelige fellesutgifter vil bli bestemt av sameiermøtet og
Kr 3 990 000 vil være avhengig av hvilke tjenester sameiet ønsker
utført i felles regi. Fordelingsnøkkel for fordeling av
utgifter reguleres i sameiets

---

[d170_d170 | Side [1]]

Forretningsfører er Obos Eiendomsforvaltning. firma regnes også med.
Fellesutgifter er hovedsakelig estimert med et variabelt I henhold til eierseksjonsloven § 31 er sameierne
beløp pr. kvm. pr. mnd. basert på boligens eierbrøk. ansvarlige overfor sameiets kreditorer i forhold til sin
Fellesutgiftene dekker normale driftskostnader for sameiebrøk. Ved manglende betaling av fellesutgifter har
sameiet, herunder forsikring (ikke innbo), felles belysning, sameiet legal panterett i den enkelte

---

[d170_d170 | Side [1]]
. Størrelsen av
fellesutgifter vil også være avhengig av endelig antall
Kontrakts‑
enheter i prosjektet.
grunnlag
De kommunale avgiftene blir i dag sendt til sameiet. Det
må forventes at dette fordeles etter sameieeierbrøk eller
at hver enkelt seksjon blir fakturert for sin boenhet Overtakelse
direkte fra kommunen. Tidspunkt for overtakelse avtales mellom kjøper og
selger.
Selger opplyser at utearealene skal vedtektfestes. Dette
skal vedtas på et ekstraordinært årsmøte før det blir ført
inn i vedtektene.

---

[d170_d170 | Side [1]]
 Fordelingsnøkkel for fordeling av
utgifter reguleres i sameiets vedtekter og fordeles i
Omkostning kjøper utgangspunktet etter sameiebrøken. Enkelte elementer i
3 990 000,00 (Prisantydning) budsjettet kan i vedtektene fastsettes med lik fordeling
på alle seksjoner, eller etter forbruk. Størrelsen av
Omkostninger fellesutgifter vil også være avhengig av endelig antall
enheter i prosjektet.
13 500 (Boligkjøperforsikring* (valgfritt))
99 750 (Dokumentavgift)
545 (Tinglysingsgebyr ‑ hjemmel) Kommunale

---

[d170_d170 | Side [1]]
d > Over昀氀ater vegger og Gå til side
Anslag på utbedringskostnad himling
Våtrom > 1. Etasje > Bad > Over昀氀ater Gulv Gå til side
Våtrom > 1. Etasje > Bad > Sanitærutstyr og Gå til side
innredning
Kjøkken > 1. Etasje > Kjøkken > Over昀氀ater og Gå til side
innredning
HELSE, MILJØ OG SIKKERHET
Forhold som åpenbart kan medføre fare for helse, miljø og sikkerhet
Tiltak under kr 20 000 Det er påvist avvik innen helse miljø eller sikkerhet. Gå til side
Tiltak mellom kr 20 000 – 100 000
Tiltak mellom kr 100 000 –

---

[d170_d170 | Side [1]]
lå eksakt byggeår da det ikke foreligger
Diverse noe ytterligere informasjon.
Leiligheten vil være en del av et sameie som er under
stiftelse. Det foreligger ikke på nåværende tidspunkt Det informeres om at ingen kan eie mer enn to
årsregnskap, husordensregler eller vedtekter. Selger boligseksjoner i sameiet, i henhold til eierseksjonsloven §
opplyser at dette skal være i orden 01.04.2026. 23. Seksjoner som eies av nærstående eller gjennom et
Forretningsfører er Obos Eiendomsforvaltning. firma regnes også

---

[d170_d170 | Side [1]]
: Skatteetaten beregner en
boligverdi (beregnet markedsverdi for bolig) basert på
Estimert totalpris ink. omk SSBs statistiske opplysninger om omsatte boliger. I
Kr 4 104 340 beregningen tas det hensyn til din boligs beliggenhet,
areal, byggeår og type bolig. Formuesverdien er en
prosentandel av denne boligverdien.For mer informasjon
Felleskostnader om formuesverdi, se Skatteetatens nettsider.
Felleskostnader inkulderer: Fellesutgifter er hovedsakelig
estimert med et variabelt beløp pr. kvm. pr. mnd.

---

[d170_d170 | Side [1]]
met tilhører
boenheten, med mindre dette er angitt særskilt. Rom utenfor
boenheten kan omdisponeres av borettslaget/sameiet og dette
kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023
og eierseksjonsloven har ulik definisjon av fellesareal. Ved
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik:
“Delen av bygning som brukes av to eller flere bruksenheter eller
til bygningens forvaltning, drift eller vedlikehold.
•Se øvrig informasjon om areal i rapporten, Norsk Standard 3940
(2012 og

---

[d170_d170 | Side [1]]
il bad, bruk av personopplysninger og dine rettigheter finner du her
utforede kjellervegger og eventuelt i oppforede kjellergulv. Personvernerklæring - iVerdi
•Normal slitasjegrad: forventet slitasje av materiale i overflaten Tekniske installasjoner som er skjulte og tilhører
som er basert på enkle visuelle observasjoner. Kan vurderes sameiet/borettslaget er ikke vurdert i denne rapporten. Vurdering
sammen med bygningsdelens alder. av dette tilhører sameiet/borettslaget.
Ved kontroll av planhet er

---

[d170_d170 | Side [1]]
skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt

---

[d170_d170 | Side [1]]
 dette tilhører sameiet/borettslaget.
Ved kontroll av planhet er toleranseklasse PB lagt til grunn for
•Forventet gjenværende brukstid: anslått tid et byggverk eller en
målinger. Målinger foregår med laser og som oftes fra dørterskel
del av et byggverk vil kunne tjene sitt formål (NS 3600:2018,
mot motstående hjørne i rommet.
termer og definisjoner punkt 3.9).
Rapporten/befaringen er avholdt etter beste skjønn og i henhold
AREALBEREGNING FOR BOENHETER til gjeldene instruks og retningslinjer. Takstmannen er

---

[d170_d170 | Side [1]]
琀椀lkny琀琀et byggets felles brannvarslingssystem med
Takstmann ber kjøper om å gjøre seg kjent med årsberetning,
senor i leiligheten.
husordensregler og sameiets/bore琀琀slagets regnskap.
_
Viser 琀椀l de øvrige kontrollpunktene i rapporten for detaljert Arealer Gå 琀椀l side
beskrivelse av 琀椀lstand på konstruksjonene i objektet og
selgers egenerklæringsskjema
Forutsetninger og vedlegg Gå 琀椀l side
Boligbygg med 昀氀ere boenheter Lovlighet Gå 琀椀l side
INNVENDIG Gå 琀椀l side Boligbygg med 昀氀ere boenheter
Leiligheten

---

[d170_d170 | Side [1]]
r hovedsakelig
estimert med et variabelt beløp pr. kvm. pr. mnd. basert
Beliggenhet
på boligens eierbrøk. Fellesutgiftene dekker normale
driftskostnader for sameiet, herunder forsikring (ikke Eiendommen i Sagdalsveien 7A ligger i et etablert
21

## Side 22

OM EIENDOMMEN
boligområde i Sagdalen på Strømmen i Lillestrøm Sagdalen skole, Linje 100, 110 0.4 km
kommune. Området kjennetegnes av en rolig og hyggelig Lillestrøm stasjon, Buss, flytog, tog 2.4 km
småhusbebyggelse, samtidig som det er kort vei til et

---

[d170_d170 | Side [1]]
 potensielle følgeskader som følge av fukt
eller lekkasje.
Øvrig informasjon
Kostnadsestimat: 200 000 ‑ 500 000
Innbo og løsøre: Salgsoppgaven inkluderer NEFs Adresse
standardliste "Oversikt over løsøre og tilbehør", som Sagdalsveien 7A, 2010 STRØMMEN
legges til grunn med mindre annet er spesifisert i
salgsoppgaven. Gnr. 78, bnr. 9, snr. 1, ideell andel 1/ 1
i Lillestrøm kommune.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og

---

[d170_d170 | Side [1]]
en tidlige klikke på kartet kan du enkelt planlegge din rute fra valgt
industriperioden på Strømmen. Husene sto frem til startpunkt og helt frem til boligen. Det vil være skiltet ved
slutten av 1950‑tallet og er en del av områdets fellesvisninger for enkel orientering.
lokalhistorie.
Tomt
I dag fremstår området som et etablert og attraktivt
bomiljø med kort vei til barnehager, skoler, idrettstilbud Tomtetype: Eiet
og rekreasjonsområder. Den rolige nabolagsfølelsen,
kombinert med sentrumsnær beliggenhet og

---

[d170_d170 | Side [1]]
olige nabolagsfølelsen,
kombinert med sentrumsnær beliggenhet og gode Tomtestørrelse: 2657.8 m²
kommunikasjoner, gjør området godt egnet for utvikling
av et hyggelig og skjermet boligtun. Selger opplyser at utearealene skal vedtektfestes. Dette
skal vedtas på et ekstraordinært årsmøte før det blir ført
inn i vedtektene.
Offentlig kommunikasjon De utvendige arealene er ikke seksjonert som tilleggsdel
Strømmen stasjon, Linje L1 0.4 km grunn. Det skal inngås en avtale om eksklusiv, og avtalen
22

## Side

---

[d170_d170 | Side [1]]
komme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
52

## Side 53

Primære transportmidler Varer/Tjenester
Strømmen Storsenter 9 min
1. Egen bil
Ditt Apotek Strømmen 9 min
2. Buss
3. Tog
Aldersfordeling barn (0-18 år)
Kollektivtilbud 35% i barnehagealder
40% 6-12 år
Veldig bra 90/100
11% 13-15 år
14% 16-18 år
Turmulighetene
Nærhet til skog og mark

---

[d170_d170 | Side [1]]
g informasjon om areal i rapporten, Norsk Standard 3940
(2012 og 2023) og veiledningen til disse.
PERSONVERN
Oppdragsnr.: 20409-26036 Befaringsdato: 25.02.2026 Side: 19 av 19
51

## Side 52

Nabolagsprofil
Sagdalsveien 7A - Nabolaget Sagdalen - vurdert av 29 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 78/100
Godt voksne
Kvalitet på skolene
Etablerere
Veldig bra 75/100
Naboskapet
Offentlig transport Høflige 63/100
Strømmen stasjon 5 min
Linje L1 0.4

---

[d170_d170 | Side [1]]
ere enkle arbeiderboliger i området for å
huse arbeidere som kom til stedet. Parkering
Det følger én biloppstillingsplass på felles område.
På eiendommen hvor Sagdalsveien 7 ligger i dag, lå
tidligere de såkalte «Ambgårdene», oppført på
1890‑tallet av handelsmannen Johan Amb. Bebyggelsen Adkomst
besto av en liten klynge med tre enkle trehus som På høyre side i annonsen finner du et kartutsnitt. Ved å
fungerte som arbeiderboliger i den tidlige klikke på kartet kan du enkelt planlegge din rute fra

---

[d170_d170 | Side [1]]
eiebrøk: 3/ 37
verneverdien skal gjøres før en søknad om endring eller
riving kan godkjennes. Kommunen kan likevel gi tillatelse 01.01.2020 ‑ Dokumentnr: 226540 ‑ Omnummerering
til rivning eller endring, selv om ved kommuneendring
kulturminnemyndighetene i fylkeskommunen kan ha Tidligere: Knr:0231 Gnr:78 Bnr:9 Snr:1
innsigelser.
01.01.2024 ‑ Dokumentnr: 157763 ‑ Omnummerering ved
kommuneendring
Regulerings og arealplaner Tidligere: Knr:3030 Gnr:78 Bnr:9 Snr:1
Eiendommen er regulert til

---

[d170_d170 | Side [1]]
tog 2.4 km
småhusbebyggelse, samtidig som det er kort vei til et Oslo S, Totalt 24 ulike linjer 18.8 km
bredt utvalg av service‑ og kollektivtilbud. Beliggenheten Hovedøya, Linje B1, B2 19.9 km
kombinerer nærheten til natur og turmuligheter langs
Sagelva med enkel tilgang til Strømmen sentrum og
regionale transportforbindelser. Barnehage/ Skole
Barnehage/ Skole/ Fritid: Noahs Ark barnehage (1‑5 år) 0.4
Strømmen sentrum og Strømmen Storsenter ligger i kort km
avstand fra eiendommen. Her finnes et stort

---

[d170_d170 | Side [1]]
skape en hyggelig uteplass. Boligen har behov for
oppussing, men byr samtidig på mange muligheter. Planløsningen
gir rom for alternative løsninger og tilpasninger etter eget behov
og stil.
Det medfølger én parkeringsplass til leiligheten.
11

## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

(Ingen tekst ekstrahert)

## Side 15

(Ingen tekst ekstrahert)

## Side 16

(Ingen tekst ekstrahert)

## Side 17

ALTERNATIV PLANTEGNING

## Side 18

(Ingen tekst ekstrahert)

##

---

[d170_d170 | Side [1]]
 arealbegrepene er:
Det foreligger approbasjonsdokument hvor det fremgår
at det er gjort bruksendring av 2. og 3.etasje, datert Bruksareal BRA:
18.10.1977. BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten.
Det er utstedt byggetillatelseskort for Sagdalsveien 7 i BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor
forbindelse med bruksendring datert 30.03.1978. boenheten og som tilhører denne, for eksempel eksterne
boder.
BRA‑b ‑ Innglasset balkong, altan, terrasser.
Det foreligger verken

---

[d170_d170 | Side [1]]
ter ligger i kort km
avstand fra eiendommen. Her finnes et stort utvalg av Bråtejordet barnehage (1‑6 år) 0.6 km
butikker, serveringssteder, treningssentre og daglige Sagelva barnehage (1‑5 år) 0.8 km
servicetilbud. Fra Strømmen stasjon går det hyppige
togavganger til Oslo sentrum med en reisetid på rundt 20 Sagdalen skole (1‑7 kl.) 0.4 km
minutter, og området har også gode bussforbindelser. Frydenlund skole og ressurssenter (1‑10 kl.) 0.6 km
Skjetten skole (1‑7 kl.) 1.5 km
Sagdalen og områdene langs

---

[d170_d170 | Side [1]]
 Boligkjøperforsikring er en rettshjelpsforsikring interessenter anbefales derfor å undersøke eiendommen
som gir trygghet og profesjonell juridisk hjelp dersom det nøye, gjerne sammen med fagperson, før bud gis.
oppdages uventede feil eller mangler ved boligen de Dersom kjøper velger å kjøpe uten å ha sett
neste fem årene. Les mer om Boligkjøperforsikring i eiendommen, kan det ikke etter overtakelse reklameres
vedlagte materiell eller på https:/ / på forhold som burde ha vært oppdaget ved en

---

[d170_d170 | Side [1]]
oligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og eventuelle idømte saksomkostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen

---

[d170_d170 | Side [1]]
gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper

---

[d170_d170 | Side [1]]
edfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE TEPPER følger med uansett festemåte.
3. VARMEKILDER, slik som ovner, kaminer, peiser, varmepumper og

---

[d170_d170 | Side [1]]
t mål er at du, enten du er selger eller kjøper,
19. BRANNSTIGE, BRANNTAU, feiestige og lignende medfølger der dette er påbudt. Løse stiger 
medfølger ikke. meglertjeneste – fra verdivurdering, klargjøring skal føle engasjement, ærlighet og
og koordinering av all markedsføring til profesjonalitet gjennom hele prosessen.
20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret

---

[d170_d170 | Side [1]]
på eiendommen, vil heller ikke følge med i salget.
Alt utstyr og installasjoner som medfølger overtas slik de Selger
er, uten garanti, med mindre det foreligger en gjeldende Sagdalsveien 7 AS
garanti fra produsent eller leverandør.
Sameie
Kjøper aksepterer at det kan forekomme hull og merker Forretningsfører: Obos Eiendomsforvaltning
etter montering av inventar og utstyr som ikke er en del
av overdragelsen.
Energimerke
Energikarakter: Ikke angitt
Eiendommens
Energifarge: Ikke angitt
tilstand
Takstmann:

---

[d170_d170 | Side [1]]

Kommentar
Seksjonseier må selv tegne innboforsikring.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Ikke
Egenerklæring Nei
gjennomgå琀琀
Eiendomsverdi.no 25.02.2026 Informasjon og matrikkeldata Gjennomgå琀琀 Nei
Ikke
Forretningsfører Nei
gjennomgå琀琀
Ikke
Rekvirent Nei
gjennomgå琀琀
Ikke
Salgsprospekt Nei
gjennomgå琀琀
Ikke
Samsvarserklæring Nei
gjennomgå琀琀
Revisjoner
Versjon Ny versjon Kommentar
1 27.02.2026
2 27.02.2026
For gyldighet på rapporten se forside
Oppdragsnr.: 20409-26036

---

[d170_d170 | Side [1]]
llegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens størrelse og utforming, både Budgivning og selgers vurdering
innvendig og utvendig, bygger på informasjon hentet fra På grunn av ulike ansvarsforhold kan selger velge å
vedlagte tilstands‑ og boligsalgsrapport. Innholdet i prioritere bud fra

---

[d170_d170 | Side [1]]
g inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen. Dette gjelder

---

[d170_d170 | Side [1]]
kostninger.
Seksjonert eiendom/
kr 13 500
aksjebolig:
Få hjelpen du trenger! Enebolig/fritid/tomt: kr 18 900
− Når: Du kjøper forsikringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven.
− Hvor: Hos eiendomsmegler senest ved
kontraktsmøte.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

##

---

[d170_d170 | Side [1]]
TSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
E-POST: E-POST:
DATO: STED: DATO: STED:
SIGNATUR: SIGNATUR:
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge, sertifi sert med miljømerket
Svanen og medlem av Grønt Punkt Norge.
samarbeidet med de beste i Norge for å skape et

---

[d170_d170 | Side [1]]
 79

79

## Side 80

80

## Side 81

81

## Side 82

82

## Side 83

83

## Side 84

84

## Side 85

85

## Side 86

86

## Side 87

87

## Side 88

88

## Side 89

89

## Side 90

90

## Side 91

91

## Side 92

92

## Side 93

93

## Side 94

Boligkjøperforsikring
Hvis din nye bolig har skjulte feil kan dette koste
deg både tid og penger.
Dine fordeler
− Unngå bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil

---

[d170_d170 | Side [1]]
perforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera Trykt i Norge, sertifi sert med miljømerket
Svanen og medlem av Grønt Punkt Norge.
samarbeidet med de beste i Norge for å skape et prospekt som du
ønsker å ta vare på. Men enda viktigere, som tar miljøet på alvor.
IDENTIFIKASJON IDENTIFIKASJON Los Digital

---

[d170_d170 | Side [1]]
kal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf.

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Badet har TG3 (store eller alvorlige avvik) – tettsjikt med usikker alder og tilstand, fare for fuktskader og følgeskader. Anbefalt totalrenovering med kostnadsestimat kr 200 000–500 000.",
      "evidence": [
        "Rommet har tegn til slitasje, og det er registrert avvik som kan indikere fare for fuktskader ved videre bruk.",
        "Tettsjiktets alder og tilstand er usikker, og dagens konstruksjon tilfredsstiller ikke nødvendigvis dagens krav til våtrom.",
        "Det anbefales at badet oppgraderes eller totalrenoveres før videre bruk for å unngå potensielle følgeskader som følge av fukt eller lekkasje.",
        "Kostnadsestimat: 200 000 – 500 000",
        "Våtrom > 1. Etasje > Bad > Sluk, membran og tettsjikt – STORE ELLER ALVORLIGE AVVIK"
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Manglende ferdigattest, ekspedisjonsdokument og midlertidig brukstillatelse. Det finnes ingen dokumentasjon på at boligen lovlig kan tas i bruk, og kjøper påtar seg risikoen for eventuelle pålegg fra offentlige myndigheter.",
      "evidence": [
        "Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen.",
        "Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.",
        "Kjøper påtar seg risikoen for fortsatt bruk av boligen, samt eventuelle pålegg fra offentlige myndigheter.",
        "Eiendommen er oppført før 1998 og og i hht. plan- og bygningsloven ikke lenger kan avsluttes med ferdigattest."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R3",
      "description": "Innvendige vannledninger har passert mer enn halvparten av forventet brukstid (TG2). Røropplegg av eldre opprinnelse med risiko for lekkasje og behov for utskifting.",
      "evidence": [
        "Røropplegg av eldre opprinnelse. Det vurderes til at mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
        "Tekniske installasjoner > Vannledninger – Det er avvik"
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R4",
      "description": "Sameiet er under stiftelse og mangler årsregnskap, husordensregler og vedtekter. Disse dokumentene er lovet ferdigstilt 01.04.2026, men foreligger ikke på salgstidspunktet.",
      "evidence": [
        "Leiligheten vil være en del av et sameie som er under stiftelse.",
        "Det foreligger ikke på nåværende tidspunkt årsregnskap, husordensregler eller vedtekter.",
        "Selger opplyser at dette skal være i orden 01.04.2026.",
        "Forretningsfører er Obos Eiendomsforvaltning."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R5",
      "description": "Utearealene er ikke seksjonert som tilleggsdel grunn. Eksklusiv bruksavtale er tidsbegrenset til maks 30 år og kan ikke forlenges ved forhåndsavtale, noe som skaper usikkerhet om fremtidig bruksrett til utearealer.",
      "evidence": [
        "De utvendige arealene er ikke seksjonert som tilleggsdel grunn.",
        "Det skal inngås en avtale om eksklusiv, og avtalen gjelder i maks 30 år fra inngåelsen.",
        "Ved utløp av avtalen kan en ny avtale om eksklusiv bruk inngås, men det kan ikke på forhånd avtales noen plikt eller krav om forlengelse av den eksisterende avtalen.",
        "Selger opplyser at utearealene skal vedtektfestes. Dette skal vedtas på et ekstraordinært årsmøte før det blir ført inn i vedtektene."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R6",
      "description": "Ukjent fundamentering og grunnforhold, samt ukjent byggeår. Tettesjikt på tak har kort/liten gjenværende restlevetid med risiko for skjulte avvik og svekket funksjon.",
      "evidence": [
        "Ukjent fundamentering og grunnforhold.",
        "Foreløpig ukjent byggeår for undertegnede.",
        "Tettesjikt har en alder som tilsier at det er kort/liten gjenværende restlevetid.",
        "På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker...",
        "Overvåk tilstanden jevnlig."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R7",
      "description": "Legalpant – kommunen og øvrige seksjonseiere har legalpant i eiendommen. Kommunens legalpant for kommunale avgifter og eiendomsskatt har høyere prioritet enn banklån og vises ikke i grunnboken.",
      "evidence": [
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R8",
      "description": "Eldre standard med etterslep på vedlikehold. Overflater, innredning og tekniske installasjoner er av eldre dato og boligen er moden for oppgradering, noe som innebærer betydelige fremtidige kostnader.",
      "evidence": [
        "Leiligheten inneholder eldre standard.",
        "Det er etterslep på vedlikehold.",
        "Fremstår som eldre og bærer preg av å være modent for oppgradering. Overflater, innredning og tekniske installasjoner er av eldre dato.",
        "Boligen har behov for oppussing."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.91
    },
    {
      "risk_id": "R9",
      "description": "Flisfuger og fliser på badet har riss/sprekker, og gulvet har motfall til sluk og fall mot terskel (TG2). Dette øker risikoen for fuktinntrenging og vannskader.",
      "evidence": [
        "Det er påvist at flisfuger har riss/sprekker.",
        "Det er påvist sprekker i fliser.",
        "Målinger viser at gulvet har motfall til sluk og fall mot terskel.",
        "Våtrom > 1. Etasje > Bad > Overflater Gulv – Det er avvik"
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.94
    },
    {
      "risk_id": "R10",
      "description": "Private stikkledninger for vann og avløp – vedlikeholdsansvaret påhviler sameiet. Eventuelle skader eller utskiftinger av stikkledninger er sameiets ansvar og kostnad.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem via private stikkledninger."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R11",
      "description": "Fellesutgiftene er kun estimerte og vil bli endelig fastsatt av sameiermøtet. Størrelsen avhenger av antall enheter i prosjektet og hvilke tjenester sameiet velger, noe som gir usikkerhet om fremtidige løpende kostnader.",
      "evidence": [
        "Fellesutgifter er hovedsakelig estimert med et variabelt beløp pr. kvm. pr. mnd. basert på boligens eierbrøk.",
        "Endelige fellesutgifter vil bli bestemt av sameiermøtet og vil være avhengig av hvilke tjenester sameiet ønsker utført i felles regi.",
        "Størrelsen av fellesutgifter vil også være avhengig av endelig antall enheter i prosjektet."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R12",
      "description": "Grunnforurensning og kulturminner kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Manglende registrering utelukker ikke faktisk forekomst.",
      "evidence": [
        "Ingen grunnforurensing registrert på matrikkelenheten.",
        "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.",
        "Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.65
    },
    {
      "risk_id": "R13",
      "description": "Dører tetter ikke helt (TG2) og det er påvist sprekker og slitasje på dørene. Dette kan medføre varmetap, trekk og økte energikostnader.",
      "evidence": [
        "Det er avvik: Døren tetter ikke helt mot...",
        "Det er påvist sprekker og slitasje på dørene.",
        "Utvendig > Dører – Vurdering av avvik: Det er avvik"
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Egenerklæring fra selger er ikke gjennomgått av takstmann. Samsvarserklæring for elektrisk anlegg er heller ikke gjennomgått, noe som gir begrenset innsikt i anleggets tilstand.",
      "evidence": [
        "Egenerklæring – Ikke gjennomgått – Nei",
        "Samsvarserklæring – Ikke gjennomgått – Nei",
        "Ved kontroll av det elektriske anlegget og det rørtekniske anlegget er det ikke gjort vurderinger utover gjeldende instruks da dette ikke er takstmannens/bygningssakyndiges kjernekompetanse."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.83
    },
    {
      "risk_id": "R15",
      "description": "Varmtvannstank har avvik (TG2). Tanken er listet som bygningsdel med avvik som kan kreve tiltak, noe som indikerer risiko for svikt og behov for utskifting.",
      "evidence": [
        "Tekniske installasjoner > Varmtvannstank – listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R16",
      "description": "Innvendige overflater og innvendige dører har avvik (TG2). Slitasje på overflater, fuger og malte flater samt avvik på innvendige dører er registrert.",
      "evidence": [
        "Innvendig > Overflater – listet under AVVIK SOM KAN KREVE TILTAK.",
        "Innvendig > Innvendige dører – listet under AVVIK SOM KAN KREVE TILTAK.",
        "Det er slitasje på overflater spesielt i fuger og malte flater."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R17",
      "description": "Helse-, miljø- og sikkerhetsavvik er påvist i tilstandsrapporten. Det er registrert avvik innen HMS-kategorien, noe som kan innebære fare for beboere.",
      "evidence": [
        "HELSE, MILJØ OG SIKKERHET – Det er påvist avvik innen helse miljø eller sikkerhet."
      ],
      "source_documents": [
        "d170_d170"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    }
  ],
  "re_retrieval_queries": [
    "varmtvannstank tilstand alder TG2 avvik kostnadsestimat",
    "elektrisk anlegg sikringsskap avvik tilstand samsvarserklæring",
    "helse miljø sikkerhet avvik detaljer HMS tilstandsrapport",
    "innvendige dører avvik TG2 detaljer",
    "kjøkken overflater innredning avvik tilstand",
    "bad sanitærutstyr innredning avvik TG2",
    "reguleringsplan fremtidig utvikling nabobygg sameie",
    "approbasjonsdokument bruksendring lovlighet 1977 1978",
    "sameiebrøk 3/37 antall seksjoner totalt prosjekt",
    "energimerke energikarakter bolig"
  ],
  "reasoning": "\nGjennomgang av alle 14 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 (Bad TG3):** Meget godt dokumentert. Flere tekstpassasjer bekrefter TG3, usikkert tettsjikt, fuktfare og kostnadsestimat 200 000–500 000. Confidence opprettholdes på 0.98.\n\n**R2 (Manglende ferdigattest):** Direkte sitert i dokumentet. Ytterligere evidens funnet: eiendommen er oppført før 1998 og kan ikke lenger avsluttes med ferdigattest. Confidence opprettholdes på 0.97.\n\n**R3 (Vannledninger TG2):** Godt dokumentert med direkte sitat om eldre røropplegg og passert halvparten av brukstid. Confidence opprettholdes på 0.95.\n\n**R4 (Sameie under stiftelse):** Godt dokumentert. Forretningsfører (Obos) er nevnt som tilleggsevidens. Confidence opprettholdes på 0.96.\n\n**R5 (Utearealer ikke seksjonert):** Godt dokumentert med flere tekstpassasjer. Confidence opprettholdes på 0.93.\n\n**R6 (Ukjent fundamentering/byggeår/tak):** Dokumentert, men evidensen er noe fragmentert. \"Overvåk tilstanden jevnlig\" er funnet som tilleggsevidens. Confidence opprettholdes på 0.90.\n\n**R7 (Legalpant):** Godt dokumentert med direkte sitater om prioritet og 2G-grense. Tilleggsevidens om eierseksjonsloven § 31 funnet. Confidence opprettholdes på 0.92.\n\n**R8 (Eldre standard/vedlikeholdsetterslep):** Godt dokumentert. \"Boligen har behov for oppussing\" funnet som tilleggsevidens. Confidence opprettholdes på 0.91.\n\n**R9 (Flisfuger/motfall bad):** Godt dokumentert med direkte sitater. Confidence opprettholdes på 0.94.\n\n**R10 (Private stikkledninger):** Godt dokumentert. Tilleggsevidens om offentlig tilknytning via private stikkledninger funnet. Confidence opprettholdes på 0.88.\n\n**R11 (Estimerte fellesutgifter):** Godt dokumentert med tre separate tekstpassasjer. Confidence opprettholdes på 0.87.\n\n**R12 (Grunnforurensning/kulturminner):** Dokumentert, men dette er standardformuleringer fra Matrikkelen som gjelder alle eiendommer. Risikoen er reell men generisk og ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.65 da det ikke er spesifikke indikasjoner på faktisk forurensning eller kulturminner.\n\n**R13 (Dører TG2):** Dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 (Egenerklæring/samsvarserklæring ikke gjennomgått):** Godt dokumentert. Confidence opprettholdes på 0.83.\n\n**Nye risikoer identifisert:**\n\n**R15 (Varmtvannstank TG2):** Varmtvannstank er eksplisitt listet under \"AVVIK SOM KAN KREVE TILTAK\" i tilstandsrapporten. Dette er en separat risiko fra vannledninger og bør identifiseres. Confidence 0.78 da detaljert beskrivelse mangler i de tilgjengelige dokumentchunkene.\n\n**R16 (Innvendige overflater og dører TG2):** Innvendig > Overflater og Innvendig > Innvendige dører er begge listet under avvik. Slitasje på overflater i fuger og malte flater er dokumentert. Confidence 0.80.\n\n**R17 (HMS-avvik):** Tilstandsrapporten lister eksplisitt \"Det er påvist avvik innen helse miljø eller sikkerhet\" men detaljene er ikke tilgjengelige i de gjennomgåtte chunkene. Dette er en potensielt alvorlig risiko som bør undersøkes nærmere. Confidence 0.75 inntil mer detaljer er tilgjengelige.\n\n**Manglende risikoer som bør undersøkes:**\n- Kjøkken overflater og innredning er listet under avvik i tilstandsrapporten men ikke identifisert som egen risiko\n- Elektrisk anlegg: samsvarserklæring ikke gjennomgått og begrenset vurdering gjort\n- Energimerke er \"ikke angitt\" – dette kan ha konsekvenser for energikostnader\n- Approbasjonsdokument fra 1977/1978 for bruksendring – lovligheten av dagens bruk bør undersøkes nærmere\n- Sameiebrøk 3/37 indikerer et prosjekt med mange enheter – risiko knyttet til prosjektets gjennomføring\n"
}

## Raw Response
```json
{
  "id": "msg_01G6qCnHD8DwXyazptdgdR8z",
  "container": null,
  "content": [
    {
      "id": "toolu_01EJWK1hQJG7fvYL4hb9UpVy",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Badet har TG3 (store eller alvorlige avvik) – tettsjikt med usikker alder og tilstand, fare for fuktskader og følgeskader. Anbefalt totalrenovering med kostnadsestimat kr 200 000–500 000.",
            "evidence": [
              "Rommet har tegn til slitasje, og det er registrert avvik som kan indikere fare for fuktskader ved videre bruk.",
              "Tettsjiktets alder og tilstand er usikker, og dagens konstruksjon tilfredsstiller ikke nødvendigvis dagens krav til våtrom.",
              "Det anbefales at badet oppgraderes eller totalrenoveres før videre bruk for å unngå potensielle følgeskader som følge av fukt eller lekkasje.",
              "Kostnadsestimat: 200 000 – 500 000",
              "Våtrom > 1. Etasje > Bad > Sluk, membran og tettsjikt – STORE ELLER ALVORLIGE AVVIK"
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Manglende ferdigattest, ekspedisjonsdokument og midlertidig brukstillatelse. Det finnes ingen dokumentasjon på at boligen lovlig kan tas i bruk, og kjøper påtar seg risikoen for eventuelle pålegg fra offentlige myndigheter.",
            "evidence": [
              "Det foreligger verken ferdigattest, ekspedisjonsdokument eller midlertidig brukstillatelse for eiendommen.",
              "Dette innebærer at det ikke finnes dokumentasjon på at boligen lovlig kan tas i bruk.",
              "Kjøper påtar seg risikoen for fortsatt bruk av boligen, samt eventuelle pålegg fra offentlige myndigheter.",
              "Eiendommen er oppført før 1998 og og i hht. plan- og bygningsloven ikke lenger kan avsluttes med ferdigattest."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R3",
            "description": "Innvendige vannledninger har passert mer enn halvparten av forventet brukstid (TG2). Røropplegg av eldre opprinnelse med risiko for lekkasje og behov for utskifting.",
            "evidence": [
              "Røropplegg av eldre opprinnelse. Det vurderes til at mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
              "Tekniske installasjoner > Vannledninger – Det er avvik"
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R4",
            "description": "Sameiet er under stiftelse og mangler årsregnskap, husordensregler og vedtekter. Disse dokumentene er lovet ferdigstilt 01.04.2026, men foreligger ikke på salgstidspunktet.",
            "evidence": [
              "Leiligheten vil være en del av et sameie som er under stiftelse.",
              "Det foreligger ikke på nåværende tidspunkt årsregnskap, husordensregler eller vedtekter.",
              "Selger opplyser at dette skal være i orden 01.04.2026.",
              "Forretningsfører er Obos Eiendomsforvaltning."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R5",
            "description": "Utearealene er ikke seksjonert som tilleggsdel grunn. Eksklusiv bruksavtale er tidsbegrenset til maks 30 år og kan ikke forlenges ved forhåndsavtale, noe som skaper usikkerhet om fremtidig bruksrett til utearealer.",
            "evidence": [
              "De utvendige arealene er ikke seksjonert som tilleggsdel grunn.",
              "Det skal inngås en avtale om eksklusiv, og avtalen gjelder i maks 30 år fra inngåelsen.",
              "Ved utløp av avtalen kan en ny avtale om eksklusiv bruk inngås, men det kan ikke på forhånd avtales noen plikt eller krav om forlengelse av den eksisterende avtalen.",
              "Selger opplyser at utearealene skal vedtektfestes. Dette skal vedtas på et ekstraordinært årsmøte før det blir ført inn i vedtektene."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R6",
            "description": "Ukjent fundamentering og grunnforhold, samt ukjent byggeår. Tettesjikt på tak har kort/liten gjenværende restlevetid med risiko for skjulte avvik og svekket funksjon.",
            "evidence": [
              "Ukjent fundamentering og grunnforhold.",
              "Foreløpig ukjent byggeår for undertegnede.",
              "Tettesjikt har en alder som tilsier at det er kort/liten gjenværende restlevetid.",
              "På bakgrunn av alderen er det grunn til å varsle om risiko for skjulte avvik, svekket funksjon, usikker...",
              "Overvåk tilstanden jevnlig."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R7",
            "description": "Legalpant – kommunen og øvrige seksjonseiere har legalpant i eiendommen. Kommunens legalpant for kommunale avgifter og eiendomsskatt har høyere prioritet enn banklån og vises ikke i grunnboken.",
            "evidence": [
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån, for eksempel banklån på seksjonen.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "I henhold til eierseksjonsloven § 31 er sameierne ansvarlige overfor sameiets kreditorer i forhold til sin sameiebrøk."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R8",
            "description": "Eldre standard med etterslep på vedlikehold. Overflater, innredning og tekniske installasjoner er av eldre dato og boligen er moden for oppgradering, noe som innebærer betydelige fremtidige kostnader.",
            "evidence": [
              "Leiligheten inneholder eldre standard.",
              "Det er etterslep på vedlikehold.",
              "Fremstår som eldre og bærer preg av å være modent for oppgradering. Overflater, innredning og tekniske installasjoner er av eldre dato.",
              "Boligen har behov for oppussing."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.91
          },
          {
            "risk_id": "R9",
            "description": "Flisfuger og fliser på badet har riss/sprekker, og gulvet har motfall til sluk og fall mot terskel (TG2). Dette øker risikoen for fuktinntrenging og vannskader.",
            "evidence": [
              "Det er påvist at flisfuger har riss/sprekker.",
              "Det er påvist sprekker i fliser.",
              "Målinger viser at gulvet har motfall til sluk og fall mot terskel.",
              "Våtrom > 1. Etasje > Bad > Overflater Gulv – Det er avvik"
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.94
          },
          {
            "risk_id": "R10",
            "description": "Private stikkledninger for vann og avløp – vedlikeholdsansvaret påhviler sameiet. Eventuelle skader eller utskiftinger av stikkledninger er sameiets ansvar og kostnad.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem via private stikkledninger."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R11",
            "description": "Fellesutgiftene er kun estimerte og vil bli endelig fastsatt av sameiermøtet. Størrelsen avhenger av antall enheter i prosjektet og hvilke tjenester sameiet velger, noe som gir usikkerhet om fremtidige løpende kostnader.",
            "evidence": [
              "Fellesutgifter er hovedsakelig estimert med et variabelt beløp pr. kvm. pr. mnd. basert på boligens eierbrøk.",
              "Endelige fellesutgifter vil bli bestemt av sameiermøtet og vil være avhengig av hvilke tjenester sameiet ønsker utført i felles regi.",
              "Størrelsen av fellesutgifter vil også være avhengig av endelig antall enheter i prosjektet."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R12",
            "description": "Grunnforurensning og kulturminner kan forekomme på eiendommen selv om ingen er registrert i Matrikkelen. Manglende registrering utelukker ikke faktisk forekomst.",
            "evidence": [
              "Ingen grunnforurensing registrert på matrikkelenheten.",
              "Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.",
              "Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.65
          },
          {
            "risk_id": "R13",
            "description": "Dører tetter ikke helt (TG2) og det er påvist sprekker og slitasje på dørene. Dette kan medføre varmetap, trekk og økte energikostnader.",
            "evidence": [
              "Det er avvik: Døren tetter ikke helt mot...",
              "Det er påvist sprekker og slitasje på dørene.",
              "Utvendig > Dører – Vurdering av avvik: Det er avvik"
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Egenerklæring fra selger er ikke gjennomgått av takstmann. Samsvarserklæring for elektrisk anlegg er heller ikke gjennomgått, noe som gir begrenset innsikt i anleggets tilstand.",
            "evidence": [
              "Egenerklæring – Ikke gjennomgått – Nei",
              "Samsvarserklæring – Ikke gjennomgått – Nei",
              "Ved kontroll av det elektriske anlegget og det rørtekniske anlegget er det ikke gjort vurderinger utover gjeldende instruks da dette ikke er takstmannens/bygningssakyndiges kjernekompetanse."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.83
          },
          {
            "risk_id": "R15",
            "description": "Varmtvannstank har avvik (TG2). Tanken er listet som bygningsdel med avvik som kan kreve tiltak, noe som indikerer risiko for svikt og behov for utskifting.",
            "evidence": [
              "Tekniske installasjoner > Varmtvannstank – listet under AVVIK SOM KAN KREVE TILTAK i tilstandsrapporten."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R16",
            "description": "Innvendige overflater og innvendige dører har avvik (TG2). Slitasje på overflater, fuger og malte flater samt avvik på innvendige dører er registrert.",
            "evidence": [
              "Innvendig > Overflater – listet under AVVIK SOM KAN KREVE TILTAK.",
              "Innvendig > Innvendige dører – listet under AVVIK SOM KAN KREVE TILTAK.",
              "Det er slitasje på overflater spesielt i fuger og malte flater."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R17",
            "description": "Helse-, miljø- og sikkerhetsavvik er påvist i tilstandsrapporten. Det er registrert avvik innen HMS-kategorien, noe som kan innebære fare for beboere.",
            "evidence": [
              "HELSE, MILJØ OG SIKKERHET – Det er påvist avvik innen helse miljø eller sikkerhet."
            ],
            "source_documents": [
              "d170_d170"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          }
        ],
        "re_retrieval_queries": [
          "varmtvannstank tilstand alder TG2 avvik kostnadsestimat",
          "elektrisk anlegg sikringsskap avvik tilstand samsvarserklæring",
          "helse miljø sikkerhet avvik detaljer HMS tilstandsrapport",
          "innvendige dører avvik TG2 detaljer",
          "kjøkken overflater innredning avvik tilstand",
          "bad sanitærutstyr innredning avvik TG2",
          "reguleringsplan fremtidig utvikling nabobygg sameie",
          "approbasjonsdokument bruksendring lovlighet 1977 1978",
          "sameiebrøk 3/37 antall seksjoner totalt prosjekt",
          "energimerke energikarakter bolig"
        ],
        "reasoning": "\nGjennomgang av alle 14 opprinnelige risikoer mot dokumentevidensen:\n\n**R1 (Bad TG3):** Meget godt dokumentert. Flere tekstpassasjer bekrefter TG3, usikkert tettsjikt, fuktfare og kostnadsestimat 200 000–500 000. Confidence opprettholdes på 0.98.\n\n**R2 (Manglende ferdigattest):** Direkte sitert i dokumentet. Ytterligere evidens funnet: eiendommen er oppført før 1998 og kan ikke lenger avsluttes med ferdigattest. Confidence opprettholdes på 0.97.\n\n**R3 (Vannledninger TG2):** Godt dokumentert med direkte sitat om eldre røropplegg og passert halvparten av brukstid. Confidence opprettholdes på 0.95.\n\n**R4 (Sameie under stiftelse):** Godt dokumentert. Forretningsfører (Obos) er nevnt som tilleggsevidens. Confidence opprettholdes på 0.96.\n\n**R5 (Utearealer ikke seksjonert):** Godt dokumentert med flere tekstpassasjer. Confidence opprettholdes på 0.93.\n\n**R6 (Ukjent fundamentering/byggeår/tak):** Dokumentert, men evidensen er noe fragmentert. \"Overvåk tilstanden jevnlig\" er funnet som tilleggsevidens. Confidence opprettholdes på 0.90.\n\n**R7 (Legalpant):** Godt dokumentert med direkte sitater om prioritet og 2G-grense. Tilleggsevidens om eierseksjonsloven § 31 funnet. Confidence opprettholdes på 0.92.\n\n**R8 (Eldre standard/vedlikeholdsetterslep):** Godt dokumentert. \"Boligen har behov for oppussing\" funnet som tilleggsevidens. Confidence opprettholdes på 0.91.\n\n**R9 (Flisfuger/motfall bad):** Godt dokumentert med direkte sitater. Confidence opprettholdes på 0.94.\n\n**R10 (Private stikkledninger):** Godt dokumentert. Tilleggsevidens om offentlig tilknytning via private stikkledninger funnet. Confidence opprettholdes på 0.88.\n\n**R11 (Estimerte fellesutgifter):** Godt dokumentert med tre separate tekstpassasjer. Confidence opprettholdes på 0.87.\n\n**R12 (Grunnforurensning/kulturminner):** Dokumentert, men dette er standardformuleringer fra Matrikkelen som gjelder alle eiendommer. Risikoen er reell men generisk og ikke spesifikk for denne eiendommen. Confidence justeres ned til 0.65 da det ikke er spesifikke indikasjoner på faktisk forurensning eller kulturminner.\n\n**R13 (Dører TG2):** Dokumentert. Confidence opprettholdes på 0.85.\n\n**R14 (Egenerklæring/samsvarserklæring ikke gjennomgått):** Godt dokumentert. Confidence opprettholdes på 0.83.\n\n**Nye risikoer identifisert:**\n\n**R15 (Varmtvannstank TG2):** Varmtvannstank er eksplisitt listet under \"AVVIK SOM KAN KREVE TILTAK\" i tilstandsrapporten. Dette er en separat risiko fra vannledninger og bør identifiseres. Confidence 0.78 da detaljert beskrivelse mangler i de tilgjengelige dokumentchunkene.\n\n**R16 (Innvendige overflater og dører TG2):** Innvendig > Overflater og Innvendig > Innvendige dører er begge listet under avvik. Slitasje på overflater i fuger og malte flater er dokumentert. Confidence 0.80.\n\n**R17 (HMS-avvik):** Tilstandsrapporten lister eksplisitt \"Det er påvist avvik innen helse miljø eller sikkerhet\" men detaljene er ikke tilgjengelige i de gjennomgåtte chunkene. Dette er en potensielt alvorlig risiko som bør undersøkes nærmere. Confidence 0.75 inntil mer detaljer er tilgjengelige.\n\n**Manglende risikoer som bør undersøkes:**\n- Kjøkken overflater og innredning er listet under avvik i tilstandsrapporten men ikke identifisert som egen risiko\n- Elektrisk anlegg: samsvarserklæring ikke gjennomgått og begrenset vurdering gjort\n- Energimerke er \"ikke angitt\" – dette kan ha konsekvenser for energikostnader\n- Approbasjonsdokument fra 1977/1978 for bruksendring – lovligheten av dagens bruk bør undersøkes nærmere\n- Sameiebrøk 3/37 indikerer et prosjekt med mange enheter – risiko knyttet til prosjektets gjennomføring\n"
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
    "input_tokens": 20573,
    "output_tokens": 5526,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
