# Trace: agentic_reflecting_iter1
- **Run ID:** 6524968e-d6cb-4fa5-850d-088b0883096e
- **Tidspunkt:** 2026-03-25T11:24:25.196309+00:00
- **Varighet:** 146.82s
- **Input tokens:** 22127
- **Output tokens:** 7762

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
Risiko 1: Flomfare: Eiendommen ligger innenfor faresone for potensielt flomfareområde, inkludert 200-års og 1000-års flomsoner for Glomma, Nitelva og Leira.
  Confidence: 0.98
  Evidens: Deler av eiendommen ligger innenfor faresone som går på potensielt flomfareområde. Boligen ligger i et område for 200 års og 1000 års flomsoner.; § 8‑1.9 Hensynssone – fare for flom i Glomma, Nitelva og Leira sør for Leirsund bru H320_1 Innenfor hensynssonen er det fare for flom. Sonen er beregnet ut fra 200 års flomhøyde.

Risiko 2: Alvorlige fukt- og råteskader i kjeller og underetasje: Det er påvist råte i panel og fotlister, forhøyede fuktverdier langt over grenseverdier, saltutslag og indikasjoner på fuktgjennomtrenging i kjellergulv og kjellermur.
  Confidence: 0.99
  Evidens: Det er påvist råte i panel og fotlister i trapperom og kjellerstue.; Vektprosent målt i treverk inne i konstruksjonen på befaringsdatoen var fibermetting+fritt vann. Måleresultatet vurderes å være langt/over grenseverdier for og utelukke skjulte skader.; Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv. Det er påvist indikasjoner på noe fuktgjennomtrenging inn i kjellermur.; Det er påvist synlige fukt/råteskader i treverk i underetg./kjeller; Stedvise råteskader i treverk i utlektede vegger i kjeller.

Risiko 3: Sviktende drenering og manglende fuktsikring av grunnmur: Dreneringen har funksjonssvikt/svært begrenset effekt, og mer enn halvparten av forventet levetid er overskredet. Mangler utvendig fuktsikring av grunnmuren.
  Confidence: 0.99
  Evidens: Det mangler, eller på grunn av alder er det sannsynlig at det mangler, utvendig fuktsikring av grunnmuren ved kjeller/underetasje.; Mer enn halvparten av forventet levetid på drenering er overskredet.; Det er ut ifra observasjoner konstatert at drenering/tettesjikt har funksjonssvikt/svært begrenset effekt.; Det kan ikke observeres knotteplast rundt grunnmur. Det påvises fukt i kjeller, saltutslag.

Risiko 4: Alvorlige skader på takkonstruksjon/loft (TG3): Dårlig ventilering av takkonstruksjonen og punktering av dampsperre, noe som svekker dampsperrefunksjonen.
  Confidence: 0.97
  Evidens: Det er begrenset/dårlig ventilering av takkonstruksjonen.; Det er fra loft/kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen.

Risiko 5: Alvorlige skader på bad/våtrom (TG3): Våtrommet må totaloppgraderes, tettesjikt/membran er ikke tilfredsstillende, og det er observert svelleskader på baderomsplater samt utette overganger.
  Confidence: 0.98
  Evidens: Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.; En må forvente generell oppgradering av våtrommets tettesjikt/membran for at våtrommet skal tåle en normal bruk etter dagens krav (tettvåtsone).; Overgangen mellom sluk og gulvbelegg fremstår heller ikke tett. Det er i tillegg observert svelleskader på baderomsplater.; Kostnadsestimat: 200 000 ‑ 500 000

Risiko 6: Alvorlige skader på vaskerom i kjeller (TG3): Vaskerommet må oppgraderes for å tåle normal bruk, og badet/vaskerommet har ikke vært i bruk på 2 år med fuktpåvirkning fra underliggende fuktig kjeller.
  Confidence: 0.97
  Evidens: Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.; Til opplysning er boligen/badet ikke brukt på 2 år, så nærmere undersøkelser anbefales.; Det er registrert noe forhøyede fuktverdier i bunnsvill. Badet har ikke vært i bruk de siste to årene, og fuktpåvirkningen vurderes derfor hovedsakelig å skyldes kapillært oppsug fra underliggende fuktig kjeller.; Kostnadsestimat: 200 000 ‑ 500 000

Risiko 7: Alvorlige skader på forstøtningsmurer: Det er påvist større sprekker og/eller skjevheter i muren, med betydelige vertikale og horisontale sprekkdannelser.
  Confidence: 0.97
  Evidens: Det er påvist større sprekker og/eller skjevheter i muren.; Det registreres betydelige sprekkdannelser i muren, både vertikale og horisontale.; Kostnadsestimat: 200 000 ‑ 500 000

Risiko 8: Sprekker i grunnmur og betongdekke: Det er observert sprekkdannelser i grunnmuren og en betydelig gjennomgående sprekk i betongdekke på trapp/repos ved inngangspartiet med synlig åpning og delvis understøttet konstruksjon.
  Confidence: 0.96
  Evidens: Grunnmuren har sprekkdannelser. Det er observert enkelte mindre sprekker i grunnmuren.; Det er registrert sprekkdannelser i betongdekke på trapp/repos ved inngangspartiet. Sprekken er betydelig og gjennomgående, og det er synlig åpning i front hvor konstruksjonen fremstår delvis understøttet.; Det er også tegn til avskalling og slitasje i betongen.; Kostnadsestimat: 100 000 ‑ 200 000

Risiko 9: Ukjent byggegrunn – ingen grunnundersøkelser utført: Byggegrunn er ukjent og grunnundersøkelser er ikke foretatt, noe som gir usikkerhet rundt setninger og bæreevne.
  Confidence: 0.95
  Evidens: Byggegrunn er ukjent. Grunnundersøkelser er ikke foretatt.; Forholdet indikerer bevegelser/setninger i grunn og svekket bæreevne av takoverbygg.

Risiko 10: HMS-avvik: Manglende rekkverk på utvendige trapper, for store åpninger i innvendige rekkverk, manglende sikring på forstøtningsmurer og mangler/skader på brannslukningsutstyr.
  Confidence: 0.98
  Evidens: Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.; Det er ikke montert rekkverk på utvendige trapper.; Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.; Det er mangler/skader på brannslukningsutstyr ihht byggteknisk forskrift på søknadstidspunktet.

Risiko 11: Ingen radonmåling utført og ingen radonsperre installert: Det er ikke foretatt radonmålinger og bygget er ikke utført med radonsperre, noe som utgjør en potensiell helserisiko.
  Confidence: 0.97
  Evidens: Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.; Selger har ikke utført radonmåling.

Risiko 12: Slitt taktekking med mose, bulker og deformasjoner (TG2): Mer enn halvparten av forventet brukstid er passert på taktekkingen, med påviste bulker, mose, slitasje og deformasjoner i blybeslag.
  Confidence: 0.96
  Evidens: Mer enn halvparten av forventet brukstid er passert på taktekkingen.; Det er påvist bulker i enkelte metallplater på taktekking. Taktekkingen har mose og slitasje på grunn av elde.; Det er observert deformasjoner i blybeslag rundt rørgjennomføringen.; Det er også registrert mose på taktekkingen samt svertesopp på vindskiene.

Risiko 13: Mangelfulle nedløp og beslag: Ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur, manglende nedløp ved inngangspartiet og avvik i beslagløsninger.
  Confidence: 0.95
  Evidens: Det er ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur.; Det er påvist avvik i beslagløsninger. Det mangler snøfangere på hele eller deler av taket.; Det mangler nedløp ved inngangspartiet.

Risiko 14: Utgåtte utvendige vann- og avløpsledninger (TG2): Mer enn halvparten av forventet brukstid er passert på både utvendige avløps- og vannledninger, og utskiftinger må påregnes.
  Confidence: 0.95
  Evidens: Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.; Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.; Kombinasjonen av alder og materiale på utvendige vann og avløpssystemet tilsier at man må regne med utskiftinger.

Risiko 15: Utgåtte innvendige vannledninger (TG2): Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.
  Confidence: 0.93
  Evidens: Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.; Vurdering er basert på alder og materiale.

Risiko 16: Råteskader i utvendig kledning og port, ødelagt takrenne og tegn til vanninntrengning: Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.
  Confidence: 0.95
  Evidens: Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.; På bakgrunn av registrerte forhold må det påregnes betydelig vedlikehold og utbedringer.; Karmene i dører er værslitte utvendig og det er sprekker i trevirket. Ytterdøren fremstår værslitt med slitasje i overflatebehandlingen.

Risiko 17: Salg som dødsbo med begrenset selgerkunnskap: Selger har ikke bebodd eiendommen og har ikke spesifikk kunnskap om den. Arvingene er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.
  Confidence: 0.97
  Evidens: Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.; Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av normalt salgsmaterialet.

Risiko 18: Manglende byggetegninger og usikker godkjent planløsning: Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen, og det er ikke mulig å verifisere om dagens bruk samsvarer med godkjent bruk.
  Confidence: 0.95
  Evidens: Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen.; Megler har derfor ikke hatt mulighet til å verifisere om dagens bruk samsvarer med den godkjente bruken.; Det kan derfor ikke tas stilling til om planløsningen, slik den fremstod på befaringstidspunktet, samsvarer med godkjent planløsning fra tidspunktet bygget ble tatt i bruk.

Risiko 19: Bindende strømavtale (Norgespris) som følger boligen til 31.12.2026: Kjøper er forpliktet til å overta en bindende strømavtale med bindingstid til 31.12.2026.
  Confidence: 0.95
  Evidens: Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper.

Risiko 20: Støysone fra jernbane: Eiendommen er registrert innenfor støysone for Bane NORs jernbanenett.
  Confidence: 0.88
  Evidens: Forurensning: Støysoner for Bane NORs jernbanenett. Kilde Bane NOR SF. Antall treff 1.

Risiko 21: Dårlig energikarakter (E/Oransje): Boligen har energikarakter E med oransje energifarge, noe som indikerer høyt energiforbruk og potensielt høye driftskostnader.
  Confidence: 0.93
  Evidens: Energikarakter: E; Energifarge: Oransje

Risiko 22: Elektrisk anlegg anbefales gjennomgått: Boligen er et dødsbo og selger har begrenset kunnskap. Det anbefales gjennomgang av det elektriske anlegget av registrert elektrovirksomhet, og det må påregnes behov for økt elektrisk kapasitet.
  Confidence: 0.88
  Evidens: Anbefales det en gjennomgang av det elektriske anlegget av registrert elektrovirksomhet.; Ved eventuelle oppgraderinger eller modernisering av boligen må det påregnes behov for økt elektrisk kapasitet sammenlignet med dagens løsning.

Risiko 23: Unøyaktige tomtegrenser: Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten kan variere med 31–200 cm.
  Confidence: 0.85
  Evidens: Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten på tomtegrensene vil kunne variere med 31‑200 cm.

Risiko 24: Byggegrense nær vann- og avløpsledninger: Det er generelt ikke lov å bygge over vann- og avløpsledninger, og ledningskartet viser ikke nøyaktig hvordan ledningene går inn til eiendommen.
  Confidence: 0.82
  Evidens: Det er generelt ikke lov å bygge over vann og avløpsledninger, og gir ofte minimum en byggegrense 4 meter fra ledninger.; Ledningskart datert 02.03.2026 fra Lillestrøm kommune viser ikke hvordan ledningskartet for vann og avløp går inn til eiendommen.

Risiko 25: Plantegninger stemmer ikke med faktisk innredning: Vedlagte plantegninger er ikke målbare og stemmer ikke med faktisk innredning og møblering.
  Confidence: 0.85
  Evidens: Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning og møblering etc. Den er ikke målbar, avvik og feil kan forekomme.

Dokumentkontekst:
[d168_d168 | Side [1]]
no/ no/ tema/ energi/ strom/ Tinglyste heftelser og rettigheter: På eiendommen er det
sporsmal‑og‑svar‑om‑norgespris tinglyst følgende heftelser og rettigheter som følger
eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Regulerings og arealplaner
Boligen ligger i kommuneplanen avsatt til 18.10.1957 ‑ Dokumentnr: 403213 ‑ Registrering av grunn
boligbebyggelse nåværende. Denne matrikkelenhet opprettet fra:
Eiendommen er ikke regulert. Knr:3205 Gnr:413 Bnr:3
Deler av eiendommen ligger innenfor

---

[d168_d168 | Side [1]]
registrert i Matrikkelen. Ambitas eiendomsutskrift viser arealet som er en geometrisk
beregning basert på eiendommens grenselinjer. I de tilfeller grensene er markert som fiktive brukes i stedet oppgitt areal hvis
dette finnes i Matrikkelen. Ambita er ikke ansvarlig for tap som oppstår som følge av feil i Eiendomsutskriften.
Ikke tinglyst eierforhold:
Ingen ikke tinglyste eierforhold registrert på matrikkelenheten.
Kulturminner:
Ingen kulturminner registrert på matrikkelenheten.
I Matrikkelen fremgår kun

---

[d168_d168 | Side [1]]
lert. Knr:3205 Gnr:413 Bnr:3
Deler av eiendommen ligger innenfor faresone som går
på potensielt flomfareområde. Boligen ligger i et område Legalpant: Kommunen har legalpant som sikkerhet for
for 200 års og 1000 års flomsoner. betaling av kommunale avgifter og eventuell
Det står i kommuneplanen angående om flomsone: eiendomsskatt. Legalpant er et pant som ikke vises i
"§ 8‑1.9 Hensynssone – fare for flom i Glomma, Nitelva og grunnboksutskriften, og har prioritet foran for eksempel
Leira sør for Leirsund bru

---

[d168_d168 | Side [1]]
ikke i drift lengre. Det er usikkert.
1984 nr. 1892 eller senere byggeregler.
Hvis et rom på visningen mangler fast installert
oppvarmingskilde, vil ikke dette bli inkludert i handelen.
40

## Side 41

OM EIENDOMMEN
reguleringsplan, dersom området ikke allerede er
Nåværende eier har tegnet avtale om Norgespris på regulert eller inntatt i kommuneplanbestemmelsene §
strøm, og avtalen har bindingstid til 31.12.2026. Avtalen 2‑2.1.
følger boligen, og må derfor overtas av kjøper. Innenfor hensynssonen skal

---

[d168_d168 | Side [1]]
ave.
Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper og
Utleie
selger.
Adgang til utleie: Boligen kan fritt leies ut, men har ingen
egen utleiedel.
Forsikring
Boligselgerforsikring: Selger har tegnet
Radonmåling
boligselgerforsikring som dekker selgers ansvar etter
Selger har ikke utført radonmåling. Det er ikke krav om avhendingsloven begrenset oppad kr. 20 000 000,‑.
dette med mindre boligen er helt eller delvis utleid. Egenerklæringsskjema er vedlagt salgsoppgaven og
interessenter oppfordres

---

[d168_d168 | Side [1]]
 er passert på
Type takst avholdt av takstmann: Tilstandsrapport undertak.
Det er påvist bulker i enkelte metallplater på taktekking.
Sammendrag selgers egenerklæring: Selger har ikke Taktekkingen har mose og slitasje på grunn av elde. Det
bebodd eiendommen og har derfor ikke spesifikk er observert deformasjoner i blybeslag rundt
kunnskap om den. Det kan derfor være skader og andre rørgjennomføringen.
forhold ved Det er også registrert mose på taktekkingen samt
eiendommen som ikke er spesifikt opplyst.

---

[d168_d168 | Side [1]]
inger om det finnes pålegg fra brann‑/ www.soderbergpartners.no/ eiendom/ boligkjoper/
feiervesen på eiendommen.
Det gjøres oppmerksom på at vedlagte plantegninger
Lovanvendelse
ikke stemmer hva gjelder faktisk innredning og
møblering etc. Den er ikke målbar, avvik og feil kan Regelverk og generelle opplysninger
forekomme. Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal
Dødsbo: Det gjøres spesielt oppmerksom på at dette er følge med

---

[d168_d168 | Side [1]]
gir ingen erstatning for tettesjikt/ membran.
39

## Side 40

OM EIENDOMMEN
Kostnadsestimat: 200 000 ‑ 500 000
Øvrig
Bygningsdeler som ikke har blitt undersøkt (TGIU):
informasjon
Tekniske installasjoner > Andre VVS‑installasjoner
Adresse
HMS (forhold av betydning for Helse, miljø og sikkerhet):
Åpninger i rekkverk er større enn dagens Hovinåssvingen 12, 1900 FETSUND
forskriftskrav til rekkverk i innvendige trapper.
Gnr. 413, bnr. 78, ideell andel 1/ 1
Det er ikke foretatt radonmålinger, og bygget er

---

[d168_d168 | Side [1]]
 avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse.
Om tomten
Eiendommen har en rela琀椀vt 昀氀at tomt. Tomten er opparbeidet med plen, diverse beplantning og støpt trapp.
Oppdragsnr.: 22713-1004 Befaringsdato: 03.03.2026 Side: 30 av 33
79

## Side 80

Hovinåssvingen 12, 1900 FETSUND Rambøll Norge AS
Gnr 413 - Bnr 78 Vestvollveien 34 D
3205 LILLESTRØM 2019 SKEDSMOKORSET
Kilder og vedlegg
Dokumenter
Beskrivelse

---

[d168_d168 | Side [1]]
ligen selges som et dødsbo og selger ikke har spesi昀椀kk kunnskap om
eiendommen, og har i begrenset grad kunnet supplere og/eller kontrollere opplysningene anbefales det en gjennomgang av det elektriske anlegget av
registrert elektrovirksomhet. Ved eventuelle oppgraderinger eller modernisering av boligen må det påregnes behov for økt elektrisk kapasitet
sammenlignet med dagens løsning.
TOMTEFORHOLD
Byggegrunn
Beskrivelse
Byggegrunn er ukjent. Grunnundersøkelser er ikke foreta琀琀.
Oppdragsnr.: 22713-1004

---

[d168_d168 | Side [1]]
s spesielt oppmerksom på at boligen selges for et
Veggover昀氀ater av: Malt betong og ubehandlet trepanel.
dødsbo. Selger har ikke bebodd den eiendom som legges ut
Himlingsover昀氀ater av: Trepanel og malte sle琀琀e over昀氀ater.
for salg. Selger har derfor ikke spesi昀椀kk kunnskap om
eiendommen, og har i begrenset grad kunnet supplere
Etasjeskille av trebjelkelag mellom 1. og 2. etasje.
og/eller kontrollere opplysningene. Kjøper oppfordres 琀椀l å Etasjeskille av betong med 琀椀lfarergulv mellom 1.etasje og

---

[d168_d168 | Side [1]]
st: Ja Reg.landbruksreg.: Nei
Bruksnavn: Askly Matrikkelført: Ja Antall teiger: 1
Etableringsdato: 18.10.1957 Har festegrunn: Nei Seksjonert: Nei
Areal: 1 356,5 kvm Skyld: 0,04
Arealkilde: Beregnet Areal
Arealmerknad:
Om fullstendighet og nøyaktighet i matrikkelutskriften:
Ambita tar forbehold om at informasjon som hentes fra Matrikkelen kan avvike fra de faktiske forhold, og at grensepunkter mv.
kan mangle helt eller delvis eller være feil registrert i Matrikkelen. Ambitas eiendomsutskrift viser arealet

---

[d168_d168 | Side [1]]
vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg •

---

[d168_d168 | Side [1]]
eell andel 1/ 1
Det er ikke foretatt radonmålinger, og bygget er heller i Lillestrøm kommune.
ikke utført med radonsperre.
Selger
Det er ikke montert rekkverk på utvendige trapper.
Det er manglende rekkverk/ annen sikring på Oddveig Irene Stensberg
forstøtningsmurer som krever dette utifra dagens
Energimerke
krav.
Energikarakter: E
Det er mangler/ skader på brannslukningsutstyr ihht
byggteknisk forskrift på søknadstidspunktet. Dersom Energifarge: Oransje
søknadstidspunktet er før 15.november 1984

---

[d168_d168 | Side [1]]
mmune gnr. bnr. fnr. snr. Areal Kilde Eieforhold
3205 LILLESTRØM 413 78 0 1356.5 m² BEREGNET AREAL Eiet
(Ambita)
Adresse
Hovinåssvingen 12
Hjemmelshaver
Stensberg Oddveig Irene
Eiendomsopplysninger
Beliggenhet
Eiendommen ligger på Hovin/Nerdrum på Fetsund i Lillestrøm kommune, Viken fylke.
Adkomstvei
Kommunal vei.
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private

---

[d168_d168 | Side [1]]
 som er vurdert med TG2 og TG3 bør
Kjeller 197cm. vurderes nøye, da de indikerer avvik fra normal slitasje
og/ eller høy alder, noe som kan innebære behov for
Innbo og løsøre: Boligen vaskes ikke ytterligere enn hva utbedringer. Bygningsdeler som er merket med TGIU er
som oppleves på visning før overtakelse. ikke blitt vurdert av takstmannen.
Boligen selges slik den står med møbler, og selger
forbeholder seg retten til å kunne ta med eventuelt Beskrivelsen av boligen nedenfor er hentet direkte fra
møbler

---

[d168_d168 | Side [1]]
I forbindelse med salget er det blitt utført en krav om dette på byggemeldingstidspunktet.
tilstandsrapport av en kvalifisert bygningssakkyndig. Mer enn halvparten av forventet brukstid er passert på
35

## Side 36

OM EIENDOMMEN
renner/ nedløp/ beslag. Karmene i dører er værslitte utvendig og det er sprekker i
Det mangler nedløp ved inngangspartiet. Utkast ved ett trevirket. Ytterdøren fremstår værslitt med slitasje i
av hjørnene er tildekket med søppelsekker av ukjent overflatebehandlingen som følge av

---

[d168_d168 | Side [1]]

Dødsbo: Det gjøres spesielt oppmerksom på at dette er følge med eiendommen, jf. avhendingsloven § 3‑4.
salg av eiendom for et dødsbo. Arvingene har begrenset Fastmonterte eller spesialtilpassede installasjoner og
kjennskap til eiendommen, og de er derfor ikke kjent med innredning som anses som varig tilknyttet boligen, følger
feil eller mangler utover det som fremkommer av normalt med i handelen, med mindre det foreligger en
salgsmaterialet. Interessenter oppfordres til å foreta særskilt avtale mellom

---

[d168_d168 | Side [1]]
dningskart datert 02.03.2026 fra Lillestrøm kommune
k), l) og m) innenfor hensynssonen må det utarbeides viser ikke hvordan ledningskartet for vann og avløp går
41

## Side 42

OM EIENDOMMEN
inn til eiendommen. Det antas at det går inn fra innkjøring
Kontrakts‑
fra Hovinåssvingen. Det er generelt ikke lov å bygge over
vann og avløpsledninger, og gir ofte minimum en
grunnlag
byggegrense 4 meter fra ledninger. Se vedlagt
ledningskart i salgsoppgave.
Overtakelse
Tidspunkt for overtakelse avtales mellom kjøper

---

[d168_d168 | Side [1]]
, og har prioritet foran for eksempel
Leira sør for Leirsund bru H320_1 Innenfor hensynssonen tinglyste banklån på eiendommen.
er det fare for flom. Sonen er beregnet ut fra 200 års
flomhøyde. Ved utarbeiding av reguleringsplan og
Vei, vann og avløp
søknad om tillatelse til tiltak innenfor hensynssonen skal
tiltak etter sikkerhetsklasse F1 og F2 plasseres, Eiendommen er tilknyttet offentlig vann‑ og
dimensjoneres eller sikres mot flom i henhold til teknisk avløpssystem. Stikkledningene fra eiendommen og ut

---

[d168_d168 | Side [1]]
sk gran).
Til opplysning er boligen/badet ikke brukt på 2 år, så nærmere undersøkelser anbefales.
Vurdering av avvik:
• Hulltaking er foreta琀琀 og det er påvist avvik i konstruksjonen.
• Det er registrert symptom på fuktskader.
Det er registrert noe forhøyede fuktverdier i bunnsvill. Badet har ikke vært i bruk de siste to årene, og fuktpåvirkningen vurderes derfor hovedsakelig å
skyldes kapillært oppsug fra underliggende fuk琀椀g kjeller. Fukten antas å trekke gjennom etasjeskillet av betong og videre opp i

---

[d168_d168 | Side [1]]
lt Beskrivelsen av boligen nedenfor er hentet direkte fra
møbler eller gjenstander de ønsker. Det de ikke ønsker tilstandsrapporten:
medfølger handelen.
Det medfølger også robotklipper. LIM INN BYGGEMÅTE FRA TILSTANDSRAPPORT
Bygningsdeler vurdert med TG2:
Eiendommens
Utvendig > Taktekking
tilstand
Mer enn halvparten av forventet brukstid er passert på
Takstmann: Lasse Sandaker taktekkingen.
Mer enn halvparten av forventet brukstid er passert på
Type takst avholdt av takstmann: Tilstandsrapport

---

[d168_d168 | Side [1]]
ler > Vaskerom > Tilliggende Det er registrert sprekkdannelser i betongdekke på
konstruksjoner våtrom trapp/ repos ved inngangspartiet. Sprekken er betydelig
Det er registrert symptom på fuktskader. og gjennomgående, og det er synlig åpning
Det er registrert saltutslag og forhøyede fuktverdier i i front hvor konstruksjonen fremstår delvis understøttet.
38

## Side 39

OM EIENDOMMEN
Det er også tegn til avskalling og slitasje i betongen. Stedvise råteskader i treverk i utlektede vegger i kjeller.
Forholdet

---

[d168_d168 | Side [1]]
 22713-1004 Befaringsdato: 03.03.2026 Side: 19 av 33
68

## Side 69

Hovinåssvingen 12, 1900 FETSUND Rambøll Norge AS
Gnr 413 - Bnr 78 Vestvollveien 34 D
3205 LILLESTRØM 2019 SKEDSMOKORSET
Tilstandsrapport
Beskrivelse
Det ble ikke foreta琀琀 hullboring da alle vegger mot våtsoner er av støpt betong.
Vurdering av avvik:
• Det er registrert symptom på fuktskader.
Det er registrert saltutslag og forhøyede fuktverdier i vegg og gulv ved over昀氀atemåling. Forholdet vurderes hovedsakelig å skyldes sviktende

---

[d168_d168 | Side [1]]
eklimaet nega琀椀vt og redusere materialenes leve琀椀d.
Vurdering av avvik:
• Det er i hulltaking påvist fukt-/råteskader.
• Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv.
• Det er påvist indikasjoner på noe fuktgjennomtrenging inn i kjellermur.
• Det er påvist synlige fukt/råteskader i treverk i underetg./kjeller, hulltaking er derfor ikke nødvendig
Det observeres saltutslag rundt om på alle ikke utlektede y琀琀ervegger av mur. Det er påvist råte i panel og fotlister i trapperom og

---

[d168_d168 | Side [1]]
er byggteknisk forskri昀琀 på
befarings琀椀dpunktet.
Helse, miljø og sikkerhet
Vurdering av avvik:
• Åpninger i rekkverk er større enn dagens forskri昀琀skrav 琀椀l rekkverk i innvendige trapper.
• Det er ikke foreta琀琀 radonmålinger, og bygget er heller ikke u琀昀ørt med radonsperre.
• Det er ikke montert rekkverk på utvendige trapper.
• Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever de琀琀e u琀椀fra dagens krav.
• Det er mangler/skader på brannslukningsutstyr ihht byggteknisk forskri昀琀 på

---

[d168_d168 | Side [1]]
e på taktekkingen samt
eiendommen som ikke er spesifikt opplyst. Kjøper svertesopp på vindskiene.
oppfordres derfor til å foreta en særlig grundig
undersøkelse av eiendommen, gjerne med bistand av Utvendig > Nedløp og beslag
teknisk sakkyndig. Det er ikke tilfredsstillende bortledning av vann fra
taknedløp ved grunnmur.
Det er påvist avvik i beslagløsninger. Det mangler
Byggemåte
snøfangere på hele eller deler av taket, men det var ikke
I forbindelse med salget er det blitt utført en krav om dette på

---

[d168_d168 | Side [1]]
r registrert dørhåndtak som henger og Tomteforhold > Grunnmur og fundamenter
fremstår slarkete, og enkelte dører er vanskelige å Grunnmuren har sprekkdannelser.
åpne og lukke. Det er observert enkelte mindre sprekker i
grunnmuren. Nærmere undersøkelser anbefales for å
Tekniske installasjoner > Vannledninger avklare om sprekkene er begrenset til overflate/ puss
Mer enn halvparten av forventet brukstid er passert eller om de går dypere i konstruksjonen.
på innvendige vannledninger.
Vurdering er basert på

---

[d168_d168 | Side [1]]
ng av avvik:
• Det er ikke 琀椀lfredss琀椀llende bortledning av vann fra taknedløp ved grunnmur.
• Det er påvist avvik i beslagløsninger.
• Det mangler snøfangere på hele eller deler av taket, men det var ikke krav om de琀琀e på byggemeldings琀椀dspunktet.
Oppdragsnr.: 22713-1004 Befaringsdato: 03.03.2026 Side: 9 av 33
58

## Side 59

Hovinåssvingen 12, 1900 FETSUND Rambøll Norge AS
Gnr 413 - Bnr 78 Vestvollveien 34 D
3205 LILLESTRØM 2019 SKEDSMOKORSET
Tilstandsrapport
• Mer enn halvparten av forventet bruks琀椀d er

---

[d168_d168 | Side [1]]
 på utvendige
vann og avløpssystemet tilsier at man må regne med Bygningsdeler vurdert med TG3:
utskiftinger. Tidspunktet for dette er det vanskelig og
si noe om Takkonstruksjon / loft (utvendig)
Det er begrenset/ dårlig ventilering av takkonstruksjonen.
Kjøkken > 1.Etasje > Kjøkken > Overflater og Det er fra loft/ kryploft påvist indikasjoner på at det er
innredning punktering av dampsperre, som medfører svekket effekt
Det er påvist fuktskjolder i overflater. av dampsperrefunksjonen.
Det er påvist

---

[d168_d168 | Side [1]]
r vedlagt salgsoppgaven, og det er viktig at
Stue 1. etg. 20 mm. interessenter setter seg grundig inn i disse dokumentene
Soverom 2. etg. 20 mm. før bud legges inn.
Kjeller 15 mm.
Kjøper anses kjent med opplysninger som kommer
Det ble på tilfeldige steder målt takhøyde i rom: tydelig frem i tilstandsrapporten, og det vil ikke være
Stue 1. etg. 240 cm. mulig å gjøre slike forhold gjeldende som en mangel.
Soverom 2. etg. 204 cm. Spesielt forhold som er vurdert med TG2 og TG3 bør
Kjeller 197cm. vurderes nøye,

---

[d168_d168 | Side [1]]
er ved boligen ut over det som fremgår av tilstandsgradene.
•For anbefalte tiltak ved TG2 og TG3 må du vurdere om tiltakene Rapporten gir en vurdering av byggverk og bygningsdeler som
er nødvendige og lønnsomme. Hva det vil koste å utbedre rom bygningssakkyndig har observert, og som fremkommer av
eller bygningsdeler vil avhenge av registrerte avvik og tiltak som forskrift til avhendingslova. Rapporten er likevel ingen garanti for
kommer frem i rapporten. Anslaget er gitt på generelt grunnlag at det ikke

---

[d168_d168 | Side [1]]
r av mur. Det er påvist råte i panel og fotlister i trapperom og kjellerstue.
Det ble med egnet instrument målt vektprosent i utlektet veggkonstruksjon under terreng.
Hull ble ta琀琀 under trapp og i kjellerstue.
Vektprosent målt i treverk inne i konstruksjonen på befaringsdatoen var 昀椀bermetning+fri琀琀 vann.
Måleresultatet vurderes å være langt/over grenseverdier for og utelukke skjulte skader.
Instrumentet er kalibrert for tresorten det måles i (Nordisk gran).
Det er også indikasjoner på forhøyde

---

[d168_d168 | Side [1]]
 kan påvirke boligens kjeller/underetasje nega琀椀vt.
Drenering er nedgravd og skjult.
Vurdering av avvik:
• Det mangler, eller på grunn av alder er det sannsynlig at det mangler, utvendig fuktsikring av grunnmuren ved kjeller/underetasje.
• Mer enn halvparten av forventet leve琀椀d på drenering er overskredet.
• Det er ut ifra observasjoner konstatert at drenering/te琀琀esjikt har funksjonssvikt/svært begrenset e昀昀ekt.
Det kan ikke observeres kno琀琀eplast rundt grunnmur. Det påvises fukt i kjeller, saltutslag og

---

[d168_d168 | Side [1]]
3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
4
3
2
1
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
Hovinåssvingen 12, 1900 FETSUND Rambøll Norge AS
Gnr 413 - Bnr 78 Vestvollveien 34 D
3205 LILLESTRØM 2019 SKEDSMOKORSET
SSaammmmeennddrraagg aavv bboolliiggeennss 琀椀琀椀llssttaanndd
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
Enebolig
STORE ELLER ALVORLIGE AVVIK
Utvendig > Takkonstruksjon/Lo昀琀 Gå til side
Utvendig > Vinduer

---

[d168_d168 | Side [1]]
trommet må oppgraderes for å tåle normal bruk etter
Det mangler, eller på grunn av alder er det sannsynlig at dagens krav.
det mangler, utvendig fuktsikring av grunnmuren ved En må forvente generell oppgradering av våtrommets
kjeller/ underetasje. tettesjikt/ membran for at våtrommet skal tåle en normal
Mer enn halvparten av forventet levetid på drenering er bruk etter dagens krav (tettvåtsone). En samlet TG 3 for
overskredet. Det er ut ifra observasjoner konstatert at rommet er satt med bakgrunn i alder

---

[d168_d168 | Side [1]]
ntydning)
Kommunale avgifter
Omkostninger Kr 9 582 (2025)
18 900 (Boligkjøperforsikring* (valgfritt)) Informasjon: Fakturert beløp i 2025:
108 750 (Dokumentavgift) Avløp 2 316 kr
545 (Tinglysingsgebyr ‑ hjemmel) Feiing 555 kr
545 (Tinglysningsgebyr ‑ pantedokument) Renovasjon 4 920 kr
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Vann 1 789 kr
109 840 (Omkostninger totalt (uten Sum 9 582 kr
Boligkjøperforsikring))
128 740 (Omkostninger totalt (med Boligkjøperforsikring)) Årsprognose for 2026 er

---

[d168_d168 | Side [1]]
re slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Verdi er vernet e琀琀er

---

[d168_d168 | Side [1]]
0

HOVINÅSSVINGEN 12
OM EIENDOMMEN

## Side 31

OM EIENDOMMEN
OM EIENDOMMEN
boligtakst.
Økonomi
Eiendomsskatten tar utgangpunkt i boligverdien fra
Skatteetaten eller kommunal boligtakst. Først reduseres
Prisantydning
verdien med 30 % og deretter gis det et bunnfradrag på
Kr 4 350 000 kroner 4 000 000 for hver godkjent boenhet. Det gir oss
skattegrunnlaget som det skal betales 1,5 promille av i
2026.
Omkostning kjøper
4 350 000,00 (Prisantydning)
Kommunale avgifter
Omkostninger Kr 9 582 (2025)
18 900

---

[d168_d168 | Side [1]]
nger totalt (med Boligkjøperforsikring)) Årsprognose for 2026 er 6.949,‑
Det er installert vannmåler på eiendommen. Oppgitt
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ beløp er et estimat basert på selgers forbruk for
4 459 840 (Totalpris inkl. omkostninger (uten foregående år. Forbruket vil variere fra husstand til
Boligkjøperforsikring)) husstand, og det endelige fakturerte beløpet kan derfor
4 478 740 (Totalpris inkl. omkostninger (med

---

[d168_d168 | Side [1]]
elleren. for avløp og vannføringer til 2. etasje. Overgangen
Til Informasjon. (Vektposent over 20 betegnes som mellom sluk og gulvbelegg fremstår heller ikke tett. Det
skadelig fukt.) Instrumentet er kalibrert for tresorten det er i tillegg observert svelleskader på baderomsplater.
måles i (Nordisk gran). Kostnadsestimat: 200 000 ‑ 500 000
Kostnadsestimat: 100 000 ‑ 200 000
Vaskerom – kjeller (våtrom)
Fuktsikring og drenering (tomteforhold) Våtrommet må oppgraderes for å tåle normal bruk etter
Det mangler,

---

[d168_d168 | Side [1]]
år etter
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
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners

---

[d168_d168 | Side [1]]
har påvist
og/eller opplyst at tilhører boenheten, er oppmålt og inkludert i
BRA-e. Det er ikke fremvist dokumentasjon på at rommet tilhører
boenheten, med mindre dette er angitt særskilt. Rom utenfor
boenheten kan omdisponeres av borettslaget/sameiet og dette
kan påvirke boligens BRA. Vær oppmerksom på at NS 3940:2023
og eierseksjonsloven har ulik definisjon av fellesareal. Ved
arealmåling gjelder NS 3940:2023 som definerer fellesareal slik:
“Delen av bygning som brukes av to eller flere bruksenheter

---

[d168_d168 | Side [1]]
d til teknisk avløpssystem. Stikkledningene fra eiendommen og ut til
forskrift (TEK17) § 7‑2 og tilhørende veiledning. NVEs det kommunale nettet er private, og
retningslinjer 2/ 2011 ”Flaum og skredfare i arealplanar” vedlikeholdsansvaret for disse påhviler sameiet.
skal legges til grunn ved planlegging og utførelse av nye Adkomst til eiendommen skjer via kommunal vei.
tiltak.
Ved tiltak etter plan‑ og bygningsloven § 20‑1 a), b) d), g), Ledningskart datert 02.03.2026 fra Lillestrøm kommune
k), l) og m)

---

[d168_d168 | Side [1]]
åteskader i kledning og port, ødelagt
eksempel skråtak eller lav himlingshøyde. Arealet oppgis takrenne samt tegn
som tilleggsinformasjon til øvrige arealer. til vanninntrengning gjennom tak og vegg. På bakgrunn
av registrerte
forhold må det påregnes betydelig vedlikehold og
Enebolig
utbedringer.
Bruksareal fordelt på etasje Varmtvannstanken er på ca. 200 liter plassert på
Underetasje vaskerom. Årstall: 2022
BRA‑i: 67 m² : Trapperom, bod benyttet som vaskerom,
bod, bod 2, bod 3 (kjelleren har også egen

---

[d168_d168 | Side [1]]
mer informasjon om budgivningsprosessen, se
Et bud bør inneholde eiendommens adresse (eventuelt «Forbrukerinformasjon om budgivning», som er vedlagt
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon, salgsoppgaven, eller ta kontakt med megler.
finansieringsplan, akseptfrist, overtakelsesdato og
eventuelle forbehold som for eksempel usikker
finansiering, salg av nåværende bolig ol. Normalt vil ikke
44

## Side 45

OM EIENDOMMEN
Visninger/ overtagelser: kr 3 000 pr. stk.
Betalingsbetingelser
Markedspakke: kr

---

[d168_d168 | Side [1]]
ise råteskader i treverk i utlektede vegger i kjeller.
Forholdet indikerer bevegelser/ setninger i grunn og Kostnadsestimat: 200 000 ‑ 500 00
svekket bæreevne av takoverbygg.
Betongtrappen ned til kjeller har også mindre sprekker Forstøtningsmurer (tomteforhold)
og skader i overflate. Det er påvist større sprekker og/ eller skjevheter i muren.
Kostnadsestimat: 100 000 ‑ 200 000 Det registreres betydelige sprekkdannelser i muren, både
vertikale og horisontale. Sprekkene fremstår
Rom under terreng (kjeller)

---

[d168_d168 | Side [1]]
 avløpsledninger
men at utbedringer bør planlegges innen rimelig tid. Mer enn halvparten av forventet brukstid er passert
37

## Side 38

OM EIENDOMMEN
på utvendige avløpsledninger. vegg og gulv ved overflatemåling. Forholdet vurderes
Mer enn halvparten av forventet brukstid er passert hovedsakelig å skyldes sviktende drenering og
på utvendige vannledninger. fuktsikring, samt kapillært oppsug fra grunnen.
Kombinasjonen av alder og materiale på utvendige
vann og avløpssystemet tilsier at man må regne med

---

[d168_d168 | Side [1]]
 om omsatte boliger. I
beregningen tas det hensyn til din boligs beliggenhet,
Eiendomsskatt
areal, byggeår og type bolig. Formuesverdien er en
Det er eiendomsskatt i Lillestrøm kommune, men prosentandel av denne boligverdien.For mer informasjon
eiendommen har ikke betalt eiendomsskatt. om formuesverdi, se Skatteetatens nettsider.
Eiendommen har vært unntatt eiendomsskatt grunn
utgangspunktet i boligverdi fra skatteetaten / kommunal
31

## Side 32

OM EIENDOMMEN
bindingsverkskonstruksjon av treverk og

---

[d168_d168 | Side [1]]
rag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til

---

[d168_d168 | Side [1]]
minner registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om fredet kulturminne der det er registrert i Riksantikvarens arkiv på eiendom og bygning.
Kulturminner som ikke er registrert i Matrikkelen kan dermed allikevel forekomme på eiendommen. Merk at disse opplysningene
ikke omfatter informasjon om eventuell verning / verneklasse for eiendom eller bygningsmasse.
Grunnforurensing:
Ingen grunnforurensing registrert på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om

---

[d168_d168 | Side [1]]
 feil i kartutskriften.
Utskrift fra eiendomsregisteret foretatt 01.03.2026 23:13 – Sist oppdatert 01.03.2026 23:13
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side 6 av 6
93

## Side 94

94

## Side 95

95

## Side 96

96

## Side 97

97

## Side 98

98

## Side 99

Forurensning: Støysoner for Bane NORs jernbanenett
Kilde Bane NOR SF Oppdatert 12.03.2025
Antall treff 1 Nedlastet 17.03.2025
Dokumentasjon (GeoNorge) Klikk her Sist sjekket

---

[d168_d168 | Side [1]]
o.
Tomtetype: Eiet
Området oppleves som rolig og familievennlig, samtidig
som man har kort vei til kollektivtransport, skoler og Tomtestørrelse: 1356.5 m²
øvrige servicetilbud.
Eiendommen har en relativt flat tomt. Tomten er
opparbeidet med plen, diverse beplantning og støpt
Offentlig kommunikasjon
trapp.
Det er ca. 850 meter til Nerdrum togstasjon /
bussholdeplass. Lillestrøm kommune opplyser at tomtegrensene ikke er
nøyaktig oppmålt, og nøyaktigheten på tomtegrensene
vil kunne variere med 31‑200 cm. På

---

[d168_d168 | Side [1]]
d standard fra byggeåret og må anses som et
oppussingsobjekt med behov for oppgraderinger. Samtidig gir
eiendommen gode muligheter for deg som ønsker å skape en
bolig etter egne ønsker og behov. Eiendommen ligger i et etablert
og barnevennlig boligområde på Nerdrum / Fetsund i Lillestrøm
kommune, med kort vei til skole, barnehage og offentlig
kommunikasjon.
Verdt å merke seg:
Enebolig over 2 plan med kjeller
Oppussingsobjekt med potensial
Stor tomt på ca. 1 356 m²
Kjeller med egen inngang
Varmepumpe fra

---

[d168_d168 | Side [1]]
rt på matrikkelenheten.
I Matrikkelen fremgår kun informasjon om grunnforurensning som eventuelt er registrert på eiendommen i
forurensningsmyndighetenes arkiver. Grunnforurensning som ikke er registrert kan dermed allikevel forekomme på eiendommen.
Klage på vedtak i Matrikkelen:
Ingen klage registrert på matrikkelenheten.
Utskrift fra eiendomsregisteret foretatt 01.03.2026 23:13 – Sist oppdatert 01.03.2026 23:13
Utskriften er levert av: Ambita as, Postboks 2923 Solli, 0230 Oslo. (Org.nr. 945 811 714) Side

---

[d168_d168 | Side [1]]
r: Dokumentene ville ha avklart hvilken bruk de ulike
"1.etasje: kjøkken, spisestue, stue, soverom, bad, w.c og rommene i boligen er godkjent til. Megler har derfor ikke
entre hatt mulighet til å verifisere om dagens bruk samsvarer
Kjeller: vanlig kjellerrom". med den godkjente bruken.
Lillestrøm kommune har ikke byggemeldte tegninger på
Innhold
eiendommen. Kommunen bekrefter pr. mail 9.mars at
"Finner ingen andre byggesaker enn de vedlagt.".
Areal
Dagens planløsning i første etasje stemmer overens

---

[d168_d168 | Side [1]]
annonsen finner du et kartutsnitt. Ved å
klikke på kartet kan du enkelt planlegge din rute fra valgt
Kollektivtilbudet er godt. Det er ca. 850 meter til Nerdrum startpunkt og helt frem til boligen. Det vil være skiltet ved
togstasjon og bussholdeplass, hvor det går tog på fellesvisninger for enkel orientering.
Kongsvingerbanen samt bussforbindelser i området.
Herfra er det enkel pendleravstand til blant annet
Tomt
Lillestrøm og Oslo.
Tomtetype: Eiet
Området oppleves som rolig og familievennlig,

---

[d168_d168 | Side [1]]
ningsstatus: Tatt i bruk BRA bolig: Igangset.till.:
Energikilde: BRA annet: Ferdigattest:
Oppvarming: BRA totalt: Midl. brukstil.:
Avløp: Har heis: Nei Tatt ibruk (GAB):
Vannforsyning: Antall boliger:
Bygningsnr: 150363543 Antall etasjer:
Etasjeopplysninger:
Ingen etasjeopplysninger registrert på bygningen.
Kulturminner:
Ingen kulturminner registrert på bygningen.
Utskrift fra eiendomsregisteret foretatt 01.03.2026 23:13 – Sist oppdatert 01.03.2026 23:13
Utskriften er levert av: Ambita as, Postboks 2923

---

[d168_d168 | Side [1]]
sjon. Rapporten er basert på undersøkelsesnivå 1,
preferanser og markedspris på materialer og tjenesteyter. med noen få unntak: våtrom og rom under terreng.
•Vurdering mot byggeregler I praksis betyr dette at:
Den bygningssakyndige vil vurdere boligen mot hvordan det var
vanlig å bygge og regler som gjaldt på søknadstidspunktet. Noen •befaringen skal begrenses til kun visuelle observasjoner på
rom og bygningsdeler slik som bad og vaskerom, og forhold som tilgjengelige flater uten fysiske inngrep (f.eks.

---

[d168_d168 | Side [1]]
slik den fremstår i dag. Det kan
derfor ikke tas s琀椀lling 琀椀l om planløsningen, slik den fremstod på befarings琀椀dspunktet, samsvarer med godkjent planløsning fra
琀椀dspunktet bygget ble ta琀琀 i bruk. De琀琀e kan medføre usikkerhet kny琀琀et 琀椀l om dagens rominndeling og bruk er i samsvar med
godkjente forhold hos Plan- og bygningsetaten (PBE). Det anbefales derfor å innhente y琀琀erligere informasjon fra
PBE/kommunen.
Nyere håndverkstjenester
Er det ifølge eier u琀昀ørt håndverkstjenester på boligen siste 5 år? Ja

---

[d168_d168 | Side [1]]
und
Norge
Sivilstand
Norge
«Det er veldig rolig og fredelig her! Fint
for barn og for de med husdyr!» Gift 38% 33%
Sitat fra en lokalkjent Ikke gift 51% 54%
Separert 7% 9%
Enke/Enkemann 4% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
104

## Side 105

Innholdet i

---

[d168_d168 | Side [1]]
tor tomt på ca. 1 356 m²
Kjeller med egen inngang
Varmepumpe fra 2020
Varmtvannsbereder byttet
Ca. 850 meter til togstasjon.
9

## Side 10

(Ingen tekst ekstrahert)

## Side 11

(Ingen tekst ekstrahert)

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

(Ingen tekst ekstrahert)

## Side 18

(Ingen tekst ekstrahert)

## Side 19

(Ingen tekst ekstrahert)

##

---

[d168_d168 | Side [1]]
# Side 32

OM EIENDOMMEN
bindingsverkskonstruksjon av treverk og utvendig kledd
Beliggenhet
med liggende trekledning. Gulvet er utført som støpt
Boligen i Hovinåssvingen 12 ligger i et etablert og plate på mark. Takkonstruksjonen er utført som saltak.
barnevennlig boligområde. Området har kort avstand til Takrenner og nedløp er av metall.
skoler, barnehager og gode kollektivforbindelser, noe Det er observert råteskader i kledning og port, ødelagt
som gjør hverdagen enkel for både barnefamilier og takrenne

---

[d168_d168 | Side [1]]
gså i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til

---

[d168_d168 | Side [1]]
ommen, gjerne med
bistand av teknisk sakkyndig.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven,

---

[d168_d168 | Side [1]]
ohanne Stensberg
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers navn
Har du kjennskap til eiendommen?
Nei Ja
Initialer selger: OIS 1
46006240
:ecnerefer
tnemucoD
48

## Side 49

Tilleggskommentar
Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved
eiendommen som ikke er spesifikt opplyst. Kjøper oppfordres derfor til å foreta en særlig grundig undersøkelse av eiendommen, gjerne med
bistand av teknisk sakkyndig.
Jeg bekrefter at

---

[d168_d168 | Side [1]]
ringsskjema er vedlagt salgsoppgaven og
interessenter oppfordres til å gjennomgå denne før bud
inngis.
Diverse
Både kjøper og selger er forpliktet til å signere den Boligkjøperforsikring: Kjøper har anledning til å tegne
standard kjøpekontrakten som er utarbeidet av Emera i boligkjøperforsikring. Vedlagt i salgsoppgaven følger
forbindelse med eiendomshandler. Kjøpekontrakten kan informasjon om Boligkjøperforsikring fra Söderberg &
gjennomgås hos eiendomsmegleren før budet legges Partners.

---

[d168_d168 | Side [1]]
attest utstedes av kommunen. Eiendommen selges slik den fremstår og
bygningsmyndighetene basert på dokumentasjon selger påtar seg ikke ansvar for å byggemelde eller få
mottatt fra kontrollansvarlig når et søknadspliktig tiltak er godkjent arbeidet nå i ettertid. Kjøper overtar ansvar,
utført i samsvar med tillatelsen og øvrige krav etter plan‑ risiko og eventuelle konsekvenser knyttet til dette.
og bygningslovgivningen. Det er viktig å merke seg at
selv om ferdigattest foreligger, gir det ingen garanti for

---

[d168_d168 | Side [1]]
er dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på

---

[d168_d168 | Side [1]]
ilke produkter/ tjenester kjøper og selger får i
forbindelse med oppdraget, kan variere ut fra hvor i
landet eiendommen ligger.
46

## Side 47

HOVINÅSSVINGEN 12

## Side 48

EGENERKLÆRINGSSKJEMA
Til orientering vil dette skjema være en del av salgsoppgaven
Meglerfirma
EMERA Lillestrøm
Oppdragsnr.
04260064
Selger 1 navn
Oddveig Irene Stensberg
Gateadresse
Hovinåssvingen 12
Poststed Postnr
FETSUND 1900
Er det dødsbo?
Nei Ja
Avdødes navn Inger Johanne Stensberg
Er det salg ved fullmakt?
Nei Ja
Hjemmelshavers

---

[d168_d168 | Side [1]]
rientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når

---

[d168_d168 | Side [1]]
og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge

---

[d168_d168 | Side [1]]
li avvist.
Evt. forbehold (eks. finansiering, salg av egen bolig etc.):
NAVN: NAVN:
PERSONNR: PERSONNR:
ADRESSE: ADRESSE:
POSTNR: POSTSTED: POSTNR: POSTSTED:
MOB TLF: MOB TLF:
E-POST: E-POST:
DATO: STED: DATO: STED:
SIGNATUR: SIGNATUR:
Jeg ønsker boligkjøperforsikring Hvis mitt bud blir akseptert, ønsker jeg at megler forbereder en
kjøpekontrakt med boligkjøperforsikring. Avtale om forsikring inngås ikke
før jeg undertegner kjøpekontrakten.
Minnene fra da du eide huset lever videre. Derfor har vi i Emera

---

[d168_d168 | Side [1]]
ntene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er tydelig beskrevet i salgsdokumentene, Alle budgivere må ved inngivelse av bud opplyse om de
slike forhold kan ikke senere gjøres gjeldende som en opptrer som forbruker eller som næringsdrivende/ person
mangel ved boligen. Dette gjelder uavhengig av om som handler

---

[d168_d168 | Side [1]]
erg &
gjennomgås hos eiendomsmegleren før budet legges Partners. Boligkjøperforsikring er en rettshjelpsforsikring
inn. Ta kontakt med eiendomsmegler dersom det er som gir trygghet og profesjonell juridisk hjelp dersom det
spørsmål. oppdages uventede feil eller mangler ved boligen de
neste fem årene. Les mer om Boligkjøperforsikring i
Det gjøres oppmerksom på at megler ikke har innhentet vedlagte materiell eller på https:/ /
særskilte opplysninger om det finnes pålegg fra brann‑/ www.soderbergpartners.no/

---

[d168_d168 | Side [1]]
gler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: OIS 2
46006240
:ecnerefer
tnemucoD
49

## Side 50

Tilstandsrapport
Enebolig
Hovinåssvingen 12, 1900 FETSUND LILLESTRØM kommune
gnr. 413, bnr. 78
Sum areal alle bygg: BRA: 203 m² BRA-i: 175 m²
Befaringsdato: 03.03.2026 Rapportdato: 11.03.2026 Oppdragsnr.: 22713-1004 Referansenummer: IV6138
Foretak: Rambøll Norge AS Taks琀椀ngeniør: Lasse Sandaker
Rapporten kan brukes i inn琀椀l e琀琀 år e琀琀er

---

[d168_d168 | Side [1]]
og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe

---

[d168_d168 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Flomfare: Eiendommen ligger innenfor faresone for potensielt flomfareområde, inkludert 200-års og 1000-års flomsoner for Glomma, Nitelva og Leira.",
      "evidence": [
        "Deler av eiendommen ligger innenfor faresone som går på potensielt flomfareområde. Boligen ligger i et område for 200 års og 1000 års flomsoner.",
        "§ 8‑1.9 Hensynssone – fare for flom i Glomma, Nitelva og Leira sør for Leirsund bru H320_1 Innenfor hensynssonen er det fare for flom. Sonen er beregnet ut fra 200 års flomhøyde.",
        "Ved tiltak etter plan- og bygningsloven § 20-1 a), b) d), g), k), l) og m) innenfor hensynssonen må det utarbeides reguleringsplan, og tiltak skal plasseres, dimensjoneres eller sikres mot flom i henhold til TEK17 § 7-2."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R2",
      "description": "Alvorlige fukt- og råteskader i kjeller og underetasje: Det er påvist råte i panel og fotlister, forhøyede fuktverdier langt over grenseverdier, saltutslag og indikasjoner på fuktgjennomtrenging i kjellergulv og kjellermur.",
      "evidence": [
        "Det er påvist råte i panel og fotlister i trapperom og kjellerstue.",
        "Vektprosent målt i treverk inne i konstruksjonen på befaringsdatoen var fibermetting+fritt vann. Måleresultatet vurderes å være langt/over grenseverdier for og utelukke skjulte skader.",
        "Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv. Det er påvist indikasjoner på noe fuktgjennomtrenging inn i kjellermur.",
        "Det er påvist synlige fukt/råteskader i treverk i underetg./kjeller.",
        "Stedvise råteskader i treverk i utlektede vegger i kjeller.",
        "Forholdet indikerer bevegelser/setninger i grunn og svekket bæreevne av takoverbygg."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R3",
      "description": "Sviktende drenering og manglende fuktsikring av grunnmur: Dreneringen har funksjonssvikt/svært begrenset effekt, og mer enn halvparten av forventet levetid er overskredet. Mangler utvendig fuktsikring av grunnmuren.",
      "evidence": [
        "Det mangler, eller på grunn av alder er det sannsynlig at det mangler, utvendig fuktsikring av grunnmuren ved kjeller/underetasje.",
        "Mer enn halvparten av forventet levetid på drenering er overskredet.",
        "Det er ut ifra observasjoner konstatert at drenering/tettesjikt har funksjonssvikt/svært begrenset effekt.",
        "Det kan ikke observeres knotteplast rundt grunnmur. Det påvises fukt i kjeller, saltutslag."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.99
    },
    {
      "risk_id": "R4",
      "description": "Alvorlige skader på takkonstruksjon/loft (TG3): Dårlig ventilering av takkonstruksjonen og punktering av dampsperre, noe som svekker dampsperrefunksjonen.",
      "evidence": [
        "Det er begrenset/dårlig ventilering av takkonstruksjonen.",
        "Det er fra loft/kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R5",
      "description": "Alvorlige skader på bad/våtrom (TG3): Våtrommet må totaloppgraderes, tettesjikt/membran er ikke tilfredsstillende, og det er observert svelleskader på baderomsplater samt utette overganger.",
      "evidence": [
        "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
        "En må forvente generell oppgradering av våtrommets tettesjikt/membran for at våtrommet skal tåle en normal bruk etter dagens krav (tettvåtsone).",
        "Overgangen mellom sluk og gulvbelegg fremstår heller ikke tett. Det er i tillegg observert svelleskader på baderomsplater.",
        "Kostnadsestimat: 200 000 ‑ 500 000"
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R6",
      "description": "Alvorlige skader på vaskerom i kjeller (TG3): Vaskerommet må oppgraderes for å tåle normal bruk, og badet/vaskerommet har ikke vært i bruk på 2 år med fuktpåvirkning fra underliggende fuktig kjeller.",
      "evidence": [
        "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
        "Til opplysning er boligen/badet ikke brukt på 2 år, så nærmere undersøkelser anbefales.",
        "Det er registrert noe forhøyede fuktverdier i bunnsvill. Badet har ikke vært i bruk de siste to årene, og fuktpåvirkningen vurderes derfor hovedsakelig å skyldes kapillært oppsug fra underliggende fuktig kjeller.",
        "Kostnadsestimat: 200 000 ‑ 500 000"
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R7",
      "description": "Alvorlige skader på forstøtningsmurer: Det er påvist større sprekker og/eller skjevheter i muren, med betydelige vertikale og horisontale sprekkdannelser.",
      "evidence": [
        "Det er påvist større sprekker og/eller skjevheter i muren.",
        "Det registreres betydelige sprekkdannelser i muren, både vertikale og horisontale.",
        "Kostnadsestimat: 200 000 ‑ 500 000"
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R8",
      "description": "Sprekker i grunnmur og betongdekke: Det er observert sprekkdannelser i grunnmuren og en betydelig gjennomgående sprekk i betongdekke på trapp/repos ved inngangspartiet med synlig åpning og delvis understøttet konstruksjon.",
      "evidence": [
        "Grunnmuren har sprekkdannelser. Det er observert enkelte mindre sprekker i grunnmuren.",
        "Det er registrert sprekkdannelser i betongdekke på trapp/repos ved inngangspartiet. Sprekken er betydelig og gjennomgående, og det er synlig åpning i front hvor konstruksjonen fremstår delvis understøttet.",
        "Det er også tegn til avskalling og slitasje i betongen.",
        "Kostnadsestimat: 100 000 ‑ 200 000"
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R9",
      "description": "Ukjent byggegrunn – ingen grunnundersøkelser utført: Byggegrunn er ukjent og grunnundersøkelser er ikke foretatt, noe som gir usikkerhet rundt setninger og bæreevne.",
      "evidence": [
        "Byggegrunn er ukjent. Grunnundersøkelser er ikke foretatt.",
        "Forholdet indikerer bevegelser/setninger i grunn og svekket bæreevne av takoverbygg."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R10",
      "description": "HMS-avvik: Manglende rekkverk på utvendige trapper, for store åpninger i innvendige rekkverk, manglende sikring på forstøtningsmurer og mangler/skader på brannslukningsutstyr.",
      "evidence": [
        "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
        "Det er ikke montert rekkverk på utvendige trapper.",
        "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.",
        "Det er mangler/skader på brannslukningsutstyr ihht byggteknisk forskrift på søknadstidspunktet."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.98
    },
    {
      "risk_id": "R11",
      "description": "Ingen radonmåling utført og ingen radonsperre installert: Det er ikke foretatt radonmålinger og bygget er ikke utført med radonsperre, noe som utgjør en potensiell helserisiko.",
      "evidence": [
        "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
        "Selger har ikke utført radonmåling."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R12",
      "description": "Slitt taktekking med mose, bulker og deformasjoner (TG2): Mer enn halvparten av forventet brukstid er passert på taktekkingen, med påviste bulker, mose, slitasje og deformasjoner i blybeslag.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på taktekkingen.",
        "Det er påvist bulker i enkelte metallplater på taktekking. Taktekkingen har mose og slitasje på grunn av elde.",
        "Det er observert deformasjoner i blybeslag rundt rørgjennomføringen.",
        "Det er også registrert mose på taktekkingen samt svertesopp på vindskiene."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.96
    },
    {
      "risk_id": "R13",
      "description": "Mangelfulle nedløp og beslag: Ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur, manglende nedløp ved inngangspartiet og avvik i beslagløsninger.",
      "evidence": [
        "Det er ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur.",
        "Det er påvist avvik i beslagløsninger. Det mangler snøfangere på hele eller deler av taket.",
        "Det mangler nedløp ved inngangspartiet."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R14",
      "description": "Utgåtte utvendige vann- og avløpsledninger (TG2): Mer enn halvparten av forventet brukstid er passert på både utvendige avløps- og vannledninger, og utskiftinger må påregnes.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
        "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
        "Kombinasjonen av alder og materiale på utvendige vann og avløpssystemet tilsier at man må regne med utskiftinger."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R15",
      "description": "Utgåtte innvendige vannledninger (TG2): Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
      "evidence": [
        "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
        "Vurdering er basert på alder og materiale."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R16",
      "description": "Råteskader i utvendig kledning og port, ødelagt takrenne og tegn til vanninntrengning: Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.",
      "evidence": [
        "Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.",
        "På bakgrunn av registrerte forhold må det påregnes betydelig vedlikehold og utbedringer.",
        "Karmene i dører er værslitte utvendig og det er sprekker i trevirket. Ytterdøren fremstår værslitt med slitasje i overflatebehandlingen."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R17",
      "description": "Salg som dødsbo med begrenset selgerkunnskap: Selger har ikke bebodd eiendommen og har ikke spesifikk kunnskap om den. Arvingene er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
      "evidence": [
        "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
        "Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av normalt salgsmaterialet."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R18",
      "description": "Manglende byggetegninger og usikker godkjent planløsning: Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen, og det er ikke mulig å verifisere om dagens bruk samsvarer med godkjent bruk.",
      "evidence": [
        "Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen.",
        "Megler har derfor ikke hatt mulighet til å verifisere om dagens bruk samsvarer med den godkjente bruken.",
        "Det kan derfor ikke tas stilling til om planløsningen, slik den fremstod på befaringstidspunktet, samsvarer med godkjent planløsning fra tidspunktet bygget ble tatt i bruk."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R19",
      "description": "Bindende strømavtale (Norgespris) som følger boligen til 31.12.2026: Kjøper er forpliktet til å overta en bindende strømavtale med bindingstid til 31.12.2026.",
      "evidence": [
        "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R20",
      "description": "Støysone fra jernbane: Eiendommen er registrert innenfor støysone for Bane NORs jernbanenett.",
      "evidence": [
        "Forurensning: Støysoner for Bane NORs jernbanenett. Kilde Bane NOR SF. Antall treff 1."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R21",
      "description": "Dårlig energikarakter (E/Oransje): Boligen har energikarakter E med oransje energifarge, noe som indikerer høyt energiforbruk og potensielt høye driftskostnader.",
      "evidence": [
        "Energikarakter: E",
        "Energifarge: Oransje"
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R22",
      "description": "Elektrisk anlegg anbefales gjennomgått: Boligen er et dødsbo og selger har begrenset kunnskap. Det anbefales gjennomgang av det elektriske anlegget av registrert elektrovirksomhet, og det må påregnes behov for økt elektrisk kapasitet.",
      "evidence": [
        "Anbefales det en gjennomgang av det elektriske anlegget av registrert elektrovirksomhet.",
        "Ved eventuelle oppgraderinger eller modernisering av boligen må det påregnes behov for økt elektrisk kapasitet sammenlignet med dagens løsning.",
        "Da boligen selges som et dødsbo og selger ikke har spesifikk kunnskap om eiendommen, og har i begrenset grad kunnet supplere og/eller kontrollere opplysningene."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R23",
      "description": "Unøyaktige tomtegrenser: Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten kan variere med 31–200 cm.",
      "evidence": [
        "Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten på tomtegrensene vil kunne variere med 31‑200 cm."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R24",
      "description": "Byggegrense nær vann- og avløpsledninger: Det er generelt ikke lov å bygge over vann- og avløpsledninger, og ledningskartet viser ikke nøyaktig hvordan ledningene går inn til eiendommen.",
      "evidence": [
        "Det er generelt ikke lov å bygge over vann og avløpsledninger, og gir ofte minimum en byggegrense 4 meter fra ledninger.",
        "Ledningskart datert 02.03.2026 fra Lillestrøm kommune viser ikke hvordan ledningskartet for vann og avløp går inn til eiendommen."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R25",
      "description": "Plantegninger stemmer ikke med faktisk innredning: Vedlagte plantegninger er ikke målbare og stemmer ikke med faktisk innredning og møblering.",
      "evidence": [
        "Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning og møblering etc. Den er ikke målbar, avvik og feil kan forekomme."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R26",
      "description": "Fuktskjolder på kjøkken og tilliggende konstruksjoner: Det er påvist fuktskjolder i overflater på kjøkken, samt saltutslag og forhøyede fuktverdier i vegg og gulv ved vaskerom i kjeller.",
      "evidence": [
        "Det er påvist fuktskjolder i overflater (kjøkken).",
        "Det er registrert saltutslag og forhøyede fuktverdier i vegg og gulv ved overflatemåling. Forholdet vurderes hovedsakelig å skyldes sviktende drenering og fuktsikring, samt kapillært oppsug fra grunnen.",
        "Det er registrert symptom på fuktskader (tilliggende konstruksjoner vaskerom)."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R27",
      "description": "Ingen ferdigattest eller manglende dokumentasjon på byggesaker: Det fremgår at kommunen ikke har byggemeldte tegninger, og det er usikkerhet knyttet til om arbeid er utført i samsvar med tillatelser. Kjøper overtar ansvar og risiko for eventuelle ulovlige forhold.",
      "evidence": [
        "Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen. Kommunen bekrefter pr. mail 9.mars at 'Finner ingen andre byggesaker enn de vedlagt.'",
        "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å byggemelde eller få godkjent arbeidet nå i ettertid. Kjøper overtar ansvar, risiko og eventuelle konsekvenser knyttet til dette."
      ],
      "source_documents": [
        "d168_d168"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    }
  ],
  "re_retrieval_queries": [
    "elektrisk anlegg tilstandsgrad avvik TG2 TG3",
    "kjøkken fuktskjolder tilstandsgrad",
    "vinduer tilstandsgrad TG3 avvik",
    "ferdigattest byggesak ulovlig bruksendring kjeller",
    "innvendige avløpsledninger tilstandsgrad",
    "støysone jernbane støyklasse gul rød sone",
    "setningsskader strukturelle skader bærekonstruksjon",
    "asbest miljøfarlige stoffer eldre bygg"
  ],
  "reasoning": "\nGjennomgang av alle 25 identifiserte risikoer mot dokumentevidensen:\n\n**Validerte risikoer med sterk evidens (beholdes uendret eller med mindre justeringer):**\n- R1 (Flomfare): Godt dokumentert i kommuneplan og salgsoppgave. Confidence 0.98 opprettholdes.\n- R2 (Fukt/råte kjeller): Svært godt dokumentert med målinger og observasjoner. Confidence 0.99 opprettholdes.\n- R3 (Drenering/fuktsikring): Svært godt dokumentert. Confidence 0.99 opprettholdes.\n- R4 (Takkonstruksjon TG3): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R5 (Bad TG3): Godt dokumentert med kostnadsestimat. Confidence 0.98 opprettholdes.\n- R6 (Vaskerom kjeller TG3): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R7 (Forstøtningsmurer): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R8 (Grunnmur/betongdekke): Godt dokumentert. Confidence 0.96 opprettholdes.\n- R9 (Ukjent byggegrunn): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R10 (HMS-avvik): Svært godt dokumentert. Confidence 0.98 opprettholdes.\n- R11 (Radon): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R12 (Taktekking TG2): Godt dokumentert. Confidence 0.96 opprettholdes.\n- R13 (Nedløp/beslag): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R14 (Utvendige VA-ledninger): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R15 (Innvendige vannledninger): Dokumentert, men noe svakere evidens. Confidence 0.93 opprettholdes.\n- R16 (Råte kledning/port): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R17 (Dødsbo): Svært godt dokumentert. Confidence 0.97 opprettholdes.\n- R18 (Manglende byggetegninger): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R19 (Norgespris strømavtale): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R20 (Støysone jernbane): Dokumentert, men kun ett treff og ingen støyklasse angitt. Justerer confidence ned til 0.85.\n- R21 (Energikarakter E): Godt dokumentert. Confidence 0.93 opprettholdes.\n- R22 (Elektrisk anlegg): Dokumentert, men ingen TG-gradering funnet. Confidence 0.88 opprettholdes.\n- R23 (Tomtegrenser): Godt dokumentert. Confidence 0.85 opprettholdes.\n- R24 (Byggegrense VA): Godt dokumentert. Confidence 0.82 opprettholdes.\n- R25 (Plantegninger): Godt dokumentert. Confidence 0.85 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R26: Fuktskjolder på kjøkken og saltutslag/forhøyede fuktverdier i tilliggende konstruksjoner ved vaskerom – dokumentert i tilstandsrapporten men ikke eksplisitt nevnt som egen risiko.\n- R27: Manglende ferdigattest/byggesak-dokumentasjon og kjøpers overtakelse av ansvar – dokumentert i salgsoppgaven.\n\n**Manglende informasjon som bør undersøkes:**\n- Vinduer er nevnt som TG3 i sammendraget (\"Utvendig > Vinduer\" under STORE ELLER ALVORLIGE AVVIK), men evidens for dette er ikke tilstrekkelig hentet ut fra dokumentchunkene.\n- Elektrisk anlegg: Ingen TG-gradering er funnet i de tilgjengelige chunkene.\n- Innvendige avløpsledninger: Ikke nevnt eksplisitt.\n- Støysoneklasse (gul/rød) er ikke spesifisert.\n- Asbest/miljøfarlige stoffer i eldre bygg er ikke nevnt.\n- Setningsskader i bærekonstruksjoner utover det som er nevnt under R8/R9.\n"
}

## Raw Response
```json
{
  "id": "msg_01Rh5RGUCjCSCiwHhQ8c7ftR",
  "container": null,
  "content": [
    {
      "id": "toolu_01Fiqb8RvCj5ygEappGujzEP",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Flomfare: Eiendommen ligger innenfor faresone for potensielt flomfareområde, inkludert 200-års og 1000-års flomsoner for Glomma, Nitelva og Leira.",
            "evidence": [
              "Deler av eiendommen ligger innenfor faresone som går på potensielt flomfareområde. Boligen ligger i et område for 200 års og 1000 års flomsoner.",
              "§ 8‑1.9 Hensynssone – fare for flom i Glomma, Nitelva og Leira sør for Leirsund bru H320_1 Innenfor hensynssonen er det fare for flom. Sonen er beregnet ut fra 200 års flomhøyde.",
              "Ved tiltak etter plan- og bygningsloven § 20-1 a), b) d), g), k), l) og m) innenfor hensynssonen må det utarbeides reguleringsplan, og tiltak skal plasseres, dimensjoneres eller sikres mot flom i henhold til TEK17 § 7-2."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R2",
            "description": "Alvorlige fukt- og råteskader i kjeller og underetasje: Det er påvist råte i panel og fotlister, forhøyede fuktverdier langt over grenseverdier, saltutslag og indikasjoner på fuktgjennomtrenging i kjellergulv og kjellermur.",
            "evidence": [
              "Det er påvist råte i panel og fotlister i trapperom og kjellerstue.",
              "Vektprosent målt i treverk inne i konstruksjonen på befaringsdatoen var fibermetting+fritt vann. Måleresultatet vurderes å være langt/over grenseverdier for og utelukke skjulte skader.",
              "Det er påvist indikasjoner på noe fuktgjennomtrenging i kjellergulv. Det er påvist indikasjoner på noe fuktgjennomtrenging inn i kjellermur.",
              "Det er påvist synlige fukt/råteskader i treverk i underetg./kjeller.",
              "Stedvise råteskader i treverk i utlektede vegger i kjeller.",
              "Forholdet indikerer bevegelser/setninger i grunn og svekket bæreevne av takoverbygg."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R3",
            "description": "Sviktende drenering og manglende fuktsikring av grunnmur: Dreneringen har funksjonssvikt/svært begrenset effekt, og mer enn halvparten av forventet levetid er overskredet. Mangler utvendig fuktsikring av grunnmuren.",
            "evidence": [
              "Det mangler, eller på grunn av alder er det sannsynlig at det mangler, utvendig fuktsikring av grunnmuren ved kjeller/underetasje.",
              "Mer enn halvparten av forventet levetid på drenering er overskredet.",
              "Det er ut ifra observasjoner konstatert at drenering/tettesjikt har funksjonssvikt/svært begrenset effekt.",
              "Det kan ikke observeres knotteplast rundt grunnmur. Det påvises fukt i kjeller, saltutslag."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.99
          },
          {
            "risk_id": "R4",
            "description": "Alvorlige skader på takkonstruksjon/loft (TG3): Dårlig ventilering av takkonstruksjonen og punktering av dampsperre, noe som svekker dampsperrefunksjonen.",
            "evidence": [
              "Det er begrenset/dårlig ventilering av takkonstruksjonen.",
              "Det er fra loft/kryploft påvist indikasjoner på at det er punktering av dampsperre, som medfører svekket effekt av dampsperrefunksjonen."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R5",
            "description": "Alvorlige skader på bad/våtrom (TG3): Våtrommet må totaloppgraderes, tettesjikt/membran er ikke tilfredsstillende, og det er observert svelleskader på baderomsplater samt utette overganger.",
            "evidence": [
              "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
              "En må forvente generell oppgradering av våtrommets tettesjikt/membran for at våtrommet skal tåle en normal bruk etter dagens krav (tettvåtsone).",
              "Overgangen mellom sluk og gulvbelegg fremstår heller ikke tett. Det er i tillegg observert svelleskader på baderomsplater.",
              "Kostnadsestimat: 200 000 ‑ 500 000"
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R6",
            "description": "Alvorlige skader på vaskerom i kjeller (TG3): Vaskerommet må oppgraderes for å tåle normal bruk, og badet/vaskerommet har ikke vært i bruk på 2 år med fuktpåvirkning fra underliggende fuktig kjeller.",
            "evidence": [
              "Våtrommet må oppgraderes for å tåle normal bruk etter dagens krav.",
              "Til opplysning er boligen/badet ikke brukt på 2 år, så nærmere undersøkelser anbefales.",
              "Det er registrert noe forhøyede fuktverdier i bunnsvill. Badet har ikke vært i bruk de siste to årene, og fuktpåvirkningen vurderes derfor hovedsakelig å skyldes kapillært oppsug fra underliggende fuktig kjeller.",
              "Kostnadsestimat: 200 000 ‑ 500 000"
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R7",
            "description": "Alvorlige skader på forstøtningsmurer: Det er påvist større sprekker og/eller skjevheter i muren, med betydelige vertikale og horisontale sprekkdannelser.",
            "evidence": [
              "Det er påvist større sprekker og/eller skjevheter i muren.",
              "Det registreres betydelige sprekkdannelser i muren, både vertikale og horisontale.",
              "Kostnadsestimat: 200 000 ‑ 500 000"
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R8",
            "description": "Sprekker i grunnmur og betongdekke: Det er observert sprekkdannelser i grunnmuren og en betydelig gjennomgående sprekk i betongdekke på trapp/repos ved inngangspartiet med synlig åpning og delvis understøttet konstruksjon.",
            "evidence": [
              "Grunnmuren har sprekkdannelser. Det er observert enkelte mindre sprekker i grunnmuren.",
              "Det er registrert sprekkdannelser i betongdekke på trapp/repos ved inngangspartiet. Sprekken er betydelig og gjennomgående, og det er synlig åpning i front hvor konstruksjonen fremstår delvis understøttet.",
              "Det er også tegn til avskalling og slitasje i betongen.",
              "Kostnadsestimat: 100 000 ‑ 200 000"
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R9",
            "description": "Ukjent byggegrunn – ingen grunnundersøkelser utført: Byggegrunn er ukjent og grunnundersøkelser er ikke foretatt, noe som gir usikkerhet rundt setninger og bæreevne.",
            "evidence": [
              "Byggegrunn er ukjent. Grunnundersøkelser er ikke foretatt.",
              "Forholdet indikerer bevegelser/setninger i grunn og svekket bæreevne av takoverbygg."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R10",
            "description": "HMS-avvik: Manglende rekkverk på utvendige trapper, for store åpninger i innvendige rekkverk, manglende sikring på forstøtningsmurer og mangler/skader på brannslukningsutstyr.",
            "evidence": [
              "Åpninger i rekkverk er større enn dagens forskriftskrav til rekkverk i innvendige trapper.",
              "Det er ikke montert rekkverk på utvendige trapper.",
              "Det er manglende rekkverk/annen sikring på forstøtningsmurer som krever dette utifra dagens krav.",
              "Det er mangler/skader på brannslukningsutstyr ihht byggteknisk forskrift på søknadstidspunktet."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.98
          },
          {
            "risk_id": "R11",
            "description": "Ingen radonmåling utført og ingen radonsperre installert: Det er ikke foretatt radonmålinger og bygget er ikke utført med radonsperre, noe som utgjør en potensiell helserisiko.",
            "evidence": [
              "Det er ikke foretatt radonmålinger, og bygget er heller ikke utført med radonsperre.",
              "Selger har ikke utført radonmåling."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R12",
            "description": "Slitt taktekking med mose, bulker og deformasjoner (TG2): Mer enn halvparten av forventet brukstid er passert på taktekkingen, med påviste bulker, mose, slitasje og deformasjoner i blybeslag.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på taktekkingen.",
              "Det er påvist bulker i enkelte metallplater på taktekking. Taktekkingen har mose og slitasje på grunn av elde.",
              "Det er observert deformasjoner i blybeslag rundt rørgjennomføringen.",
              "Det er også registrert mose på taktekkingen samt svertesopp på vindskiene."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.96
          },
          {
            "risk_id": "R13",
            "description": "Mangelfulle nedløp og beslag: Ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur, manglende nedløp ved inngangspartiet og avvik i beslagløsninger.",
            "evidence": [
              "Det er ikke tilfredsstillende bortledning av vann fra taknedløp ved grunnmur.",
              "Det er påvist avvik i beslagløsninger. Det mangler snøfangere på hele eller deler av taket.",
              "Det mangler nedløp ved inngangspartiet."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R14",
            "description": "Utgåtte utvendige vann- og avløpsledninger (TG2): Mer enn halvparten av forventet brukstid er passert på både utvendige avløps- og vannledninger, og utskiftinger må påregnes.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på utvendige avløpsledninger.",
              "Mer enn halvparten av forventet brukstid er passert på utvendige vannledninger.",
              "Kombinasjonen av alder og materiale på utvendige vann og avløpssystemet tilsier at man må regne med utskiftinger."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R15",
            "description": "Utgåtte innvendige vannledninger (TG2): Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
            "evidence": [
              "Mer enn halvparten av forventet brukstid er passert på innvendige vannledninger.",
              "Vurdering er basert på alder og materiale."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R16",
            "description": "Råteskader i utvendig kledning og port, ødelagt takrenne og tegn til vanninntrengning: Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.",
            "evidence": [
              "Det er observert råteskader i kledning og port, ødelagt takrenne samt tegn til vanninntrengning gjennom tak og vegg.",
              "På bakgrunn av registrerte forhold må det påregnes betydelig vedlikehold og utbedringer.",
              "Karmene i dører er værslitte utvendig og det er sprekker i trevirket. Ytterdøren fremstår værslitt med slitasje i overflatebehandlingen."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R17",
            "description": "Salg som dødsbo med begrenset selgerkunnskap: Selger har ikke bebodd eiendommen og har ikke spesifikk kunnskap om den. Arvingene er ikke kjent med feil eller mangler utover det som fremkommer av salgsmaterialet.",
            "evidence": [
              "Selger har ikke bebodd eiendommen og har derfor ikke spesifikk kunnskap om den. Det kan derfor være skader og andre forhold ved eiendommen som ikke er spesifikt opplyst.",
              "Dette er salg av eiendom for et dødsbo. Arvingene har begrenset kjennskap til eiendommen, og de er derfor ikke kjent med feil eller mangler utover det som fremkommer av normalt salgsmaterialet."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R18",
            "description": "Manglende byggetegninger og usikker godkjent planløsning: Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen, og det er ikke mulig å verifisere om dagens bruk samsvarer med godkjent bruk.",
            "evidence": [
              "Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen.",
              "Megler har derfor ikke hatt mulighet til å verifisere om dagens bruk samsvarer med den godkjente bruken.",
              "Det kan derfor ikke tas stilling til om planløsningen, slik den fremstod på befaringstidspunktet, samsvarer med godkjent planløsning fra tidspunktet bygget ble tatt i bruk."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R19",
            "description": "Bindende strømavtale (Norgespris) som følger boligen til 31.12.2026: Kjøper er forpliktet til å overta en bindende strømavtale med bindingstid til 31.12.2026.",
            "evidence": [
              "Nåværende eier har tegnet avtale om Norgespris på strøm, og avtalen har bindingstid til 31.12.2026. Avtalen følger boligen, og må derfor overtas av kjøper."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R20",
            "description": "Støysone fra jernbane: Eiendommen er registrert innenfor støysone for Bane NORs jernbanenett.",
            "evidence": [
              "Forurensning: Støysoner for Bane NORs jernbanenett. Kilde Bane NOR SF. Antall treff 1."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R21",
            "description": "Dårlig energikarakter (E/Oransje): Boligen har energikarakter E med oransje energifarge, noe som indikerer høyt energiforbruk og potensielt høye driftskostnader.",
            "evidence": [
              "Energikarakter: E",
              "Energifarge: Oransje"
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R22",
            "description": "Elektrisk anlegg anbefales gjennomgått: Boligen er et dødsbo og selger har begrenset kunnskap. Det anbefales gjennomgang av det elektriske anlegget av registrert elektrovirksomhet, og det må påregnes behov for økt elektrisk kapasitet.",
            "evidence": [
              "Anbefales det en gjennomgang av det elektriske anlegget av registrert elektrovirksomhet.",
              "Ved eventuelle oppgraderinger eller modernisering av boligen må det påregnes behov for økt elektrisk kapasitet sammenlignet med dagens løsning.",
              "Da boligen selges som et dødsbo og selger ikke har spesifikk kunnskap om eiendommen, og har i begrenset grad kunnet supplere og/eller kontrollere opplysningene."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R23",
            "description": "Unøyaktige tomtegrenser: Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten kan variere med 31–200 cm.",
            "evidence": [
              "Lillestrøm kommune opplyser at tomtegrensene ikke er nøyaktig oppmålt, og nøyaktigheten på tomtegrensene vil kunne variere med 31‑200 cm."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R24",
            "description": "Byggegrense nær vann- og avløpsledninger: Det er generelt ikke lov å bygge over vann- og avløpsledninger, og ledningskartet viser ikke nøyaktig hvordan ledningene går inn til eiendommen.",
            "evidence": [
              "Det er generelt ikke lov å bygge over vann og avløpsledninger, og gir ofte minimum en byggegrense 4 meter fra ledninger.",
              "Ledningskart datert 02.03.2026 fra Lillestrøm kommune viser ikke hvordan ledningskartet for vann og avløp går inn til eiendommen."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R25",
            "description": "Plantegninger stemmer ikke med faktisk innredning: Vedlagte plantegninger er ikke målbare og stemmer ikke med faktisk innredning og møblering.",
            "evidence": [
              "Det gjøres oppmerksom på at vedlagte plantegninger ikke stemmer hva gjelder faktisk innredning og møblering etc. Den er ikke målbar, avvik og feil kan forekomme."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R26",
            "description": "Fuktskjolder på kjøkken og tilliggende konstruksjoner: Det er påvist fuktskjolder i overflater på kjøkken, samt saltutslag og forhøyede fuktverdier i vegg og gulv ved vaskerom i kjeller.",
            "evidence": [
              "Det er påvist fuktskjolder i overflater (kjøkken).",
              "Det er registrert saltutslag og forhøyede fuktverdier i vegg og gulv ved overflatemåling. Forholdet vurderes hovedsakelig å skyldes sviktende drenering og fuktsikring, samt kapillært oppsug fra grunnen.",
              "Det er registrert symptom på fuktskader (tilliggende konstruksjoner vaskerom)."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R27",
            "description": "Ingen ferdigattest eller manglende dokumentasjon på byggesaker: Det fremgår at kommunen ikke har byggemeldte tegninger, og det er usikkerhet knyttet til om arbeid er utført i samsvar med tillatelser. Kjøper overtar ansvar og risiko for eventuelle ulovlige forhold.",
            "evidence": [
              "Lillestrøm kommune har ikke byggemeldte tegninger på eiendommen. Kommunen bekrefter pr. mail 9.mars at 'Finner ingen andre byggesaker enn de vedlagt.'",
              "Eiendommen selges slik den fremstår og selger påtar seg ikke ansvar for å byggemelde eller få godkjent arbeidet nå i ettertid. Kjøper overtar ansvar, risiko og eventuelle konsekvenser knyttet til dette."
            ],
            "source_documents": [
              "d168_d168"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          }
        ],
        "re_retrieval_queries": [
          "elektrisk anlegg tilstandsgrad avvik TG2 TG3",
          "kjøkken fuktskjolder tilstandsgrad",
          "vinduer tilstandsgrad TG3 avvik",
          "ferdigattest byggesak ulovlig bruksendring kjeller",
          "innvendige avløpsledninger tilstandsgrad",
          "støysone jernbane støyklasse gul rød sone",
          "setningsskader strukturelle skader bærekonstruksjon",
          "asbest miljøfarlige stoffer eldre bygg"
        ],
        "reasoning": "\nGjennomgang av alle 25 identifiserte risikoer mot dokumentevidensen:\n\n**Validerte risikoer med sterk evidens (beholdes uendret eller med mindre justeringer):**\n- R1 (Flomfare): Godt dokumentert i kommuneplan og salgsoppgave. Confidence 0.98 opprettholdes.\n- R2 (Fukt/råte kjeller): Svært godt dokumentert med målinger og observasjoner. Confidence 0.99 opprettholdes.\n- R3 (Drenering/fuktsikring): Svært godt dokumentert. Confidence 0.99 opprettholdes.\n- R4 (Takkonstruksjon TG3): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R5 (Bad TG3): Godt dokumentert med kostnadsestimat. Confidence 0.98 opprettholdes.\n- R6 (Vaskerom kjeller TG3): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R7 (Forstøtningsmurer): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R8 (Grunnmur/betongdekke): Godt dokumentert. Confidence 0.96 opprettholdes.\n- R9 (Ukjent byggegrunn): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R10 (HMS-avvik): Svært godt dokumentert. Confidence 0.98 opprettholdes.\n- R11 (Radon): Godt dokumentert. Confidence 0.97 opprettholdes.\n- R12 (Taktekking TG2): Godt dokumentert. Confidence 0.96 opprettholdes.\n- R13 (Nedløp/beslag): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R14 (Utvendige VA-ledninger): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R15 (Innvendige vannledninger): Dokumentert, men noe svakere evidens. Confidence 0.93 opprettholdes.\n- R16 (Råte kledning/port): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R17 (Dødsbo): Svært godt dokumentert. Confidence 0.97 opprettholdes.\n- R18 (Manglende byggetegninger): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R19 (Norgespris strømavtale): Godt dokumentert. Confidence 0.95 opprettholdes.\n- R20 (Støysone jernbane): Dokumentert, men kun ett treff og ingen støyklasse angitt. Justerer confidence ned til 0.85.\n- R21 (Energikarakter E): Godt dokumentert. Confidence 0.93 opprettholdes.\n- R22 (Elektrisk anlegg): Dokumentert, men ingen TG-gradering funnet. Confidence 0.88 opprettholdes.\n- R23 (Tomtegrenser): Godt dokumentert. Confidence 0.85 opprettholdes.\n- R24 (Byggegrense VA): Godt dokumentert. Confidence 0.82 opprettholdes.\n- R25 (Plantegninger): Godt dokumentert. Confidence 0.85 opprettholdes.\n\n**Nye risikoer identifisert:**\n- R26: Fuktskjolder på kjøkken og saltutslag/forhøyede fuktverdier i tilliggende konstruksjoner ved vaskerom – dokumentert i tilstandsrapporten men ikke eksplisitt nevnt som egen risiko.\n- R27: Manglende ferdigattest/byggesak-dokumentasjon og kjøpers overtakelse av ansvar – dokumentert i salgsoppgaven.\n\n**Manglende informasjon som bør undersøkes:**\n- Vinduer er nevnt som TG3 i sammendraget (\"Utvendig > Vinduer\" under STORE ELLER ALVORLIGE AVVIK), men evidens for dette er ikke tilstrekkelig hentet ut fra dokumentchunkene.\n- Elektrisk anlegg: Ingen TG-gradering er funnet i de tilgjengelige chunkene.\n- Innvendige avløpsledninger: Ikke nevnt eksplisitt.\n- Støysoneklasse (gul/rød) er ikke spesifisert.\n- Asbest/miljøfarlige stoffer i eldre bygg er ikke nevnt.\n- Setningsskader i bærekonstruksjoner utover det som er nevnt under R8/R9.\n"
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
    "input_tokens": 22127,
    "output_tokens": 7762,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
