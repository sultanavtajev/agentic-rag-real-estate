# Trace: agentic_reflecting_iter1
- **Run ID:** 39547546-4d93-461d-a9a9-f3570c74e926
- **Tidspunkt:** 2026-03-24T23:54:55.762163+00:00
- **Varighet:** 124.44s
- **Input tokens:** 17305
- **Output tokens:** 6521

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
Risiko 1: Rotteproblemer i kjeller – gjentatte tilfeller i 2017 og 2022
  Confidence: 0.95
  Evidens: Har vært rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i mur murt igjen både innenfra og fra utsiden.; Har vært rotter i kjeller tidlig vinter 2022. Problem fjernet.

Risiko 2: Balkong mangler byggesøknad/tillatelse – søknad foreligger ikke i kommunens arkiver
  Confidence: 0.95
  Evidens: Det gjøres oppmerksom på at balkongen er tegnet inn på seksjoneringen som er stemplet og tinglyst, men søknaden for oppføringen av balkongen foreligger ikke i kommunens arkiver.

Risiko 3: Balkong har svak fuktsikring av dekke og for lav dørterskel med fare for fuktinnsig – TG2
  Confidence: 0.95
  Evidens: Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.; Balkong på grunn av svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.

Risiko 4: Rekkverk på balkong har lavere høyde enn dagens forskriftskrav
  Confidence: 0.9
  Evidens: Rekkverk har høyde som er lavere enn dagens forskriftskrav, men tilfredsstiller krav på oppføringstidspunktet.; Er det avvik på rekkverkshøyde og åpninger i rekkverket i forhold til gjeldene byggteknisk forskrift på befaringstidspunktet? Ja

Risiko 5: Yttervegger har slitasje og svak ventilering – TG2. Kledning buler og har vedlikeholdsetterslep
  Confidence: 0.9
  Evidens: Yttervegger TG 2 pga slitasje og svak ventilering.; Registreres noen skjevheter i kledning og stedvis svak innfesting (kledning buler ute enkelte steder). Kledning fremstår noe slitt med vedlikeholdsetterslep.; Er det liten eller ingen lufting av kledningen? Ja

Risiko 6: Elektrisk anlegg mangler dokumentasjon – ingen samsvarserklæring og kursfortegnelse ikke oppdatert
  Confidence: 0.95
  Evidens: Elektrisk på grunn av manglende dokumentasjon. Det er ikke fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999.; Kursfortegnelse er ikke oppdatert og ikke i samsvar med antall sikringer.

Risiko 7: Soverom 2 mangler dokumentasjon på godkjent planløsning fra kommunen
  Confidence: 0.9
  Evidens: Megler har forsøkt å finne ut om soverom 2 er godkjent, men det foreligger ingen dokumentasjon fra kommunen på leilighetens planløsning. Kjøper påtar seg risikoen og eventuelle pålegg fra offentlige myndigheter.

Risiko 8: Loft ikke undersøkt (TG-IU) – ingen tilkomst, ukjent tilstand
  Confidence: 0.85
  Evidens: Loft (konstruksjonsoppbygging) TG-IU pga ingen tilkomst.; Tilgjengelighet: Ikke tilgjengelig

Risiko 9: Pipe innkledd mot garderoberom – TG2, anbefales kontroll av brann- og feiervesen
  Confidence: 0.9
  Evidens: Ildsted/skorstein innvendig i boligen TG-2 pga innkledd pipe mot garderoberom.; Pipa er innkledd mot garderoberom (TG 2). Det må påregnes vedlikehold av utvendig kledning.; Med bakgrunn i påviste avvik og for en vurdering av eventuelle tiltak anbefales en ytterligere kontroll av pipa/ildsteder utført av brann- og feiervesen.

Risiko 10: Ventilasjon er svak – kullfilter uten direkte avsug til det fri på kjøkken, TG2
  Confidence: 0.9
  Evidens: Ventilasjon TG 2 pga noe svak ventilering.; Kjøkken på grunn av svak ventilering. Kullfilter uten direkte avsug til det fri.; Oppsummering av avtrekk TG-2. Kullfilter uten direkte avsug til det fri.

Risiko 11: Bad har TG2 på grunn av alder – membran, tettesjikt og sluk kan ha begrenset restlevetid
  Confidence: 0.9
  Evidens: Våtrom: Bad TG 2 pga alder.; Membran, tettesjikt og sluk bad på grunn av alder.; Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja

Risiko 12: Tidligere lekkasje på bad (2015) – forsikringssak, bad totalrehabilitert
  Confidence: 0.85
  Evidens: Lekkasje på bad våren 2015. Forsikringssak som gikk via vår husforsikring i Tryg. Badet ble total rehabilitert fra bunn og nytt rørsystem installert.

Risiko 13: Etasjeskille og gulv har TG2 – avvik fra godkjente måleavvik, skjevheter ikke uvanlig for eldre bolig
  Confidence: 0.85
  Evidens: Etasjeskille og gulv på grunn TG 2 gis med bakgrunn i standardens krav til godkjente måleavvik.; Skjevheter i gulv er ikke uvanlig for eldre boliger, og skyldes erfaringsmessig underdimensjonering/ujevn dimensjonering av materialer.

Risiko 14: Kjeller har fuktig inneklima – TG2, ikke fremvist ved befaring
  Confidence: 0.85
  Evidens: Kjeller under terreng TG 2 pga fuktig inneklima.; Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres.

Risiko 15: Eiendommen ligger i uregulert område avsatt til sentrumsformål i KPA 2018 – fremtidig regulering kan påvirke bruken
  Confidence: 0.8
  Evidens: Eiendommen ligger i et uregulert område, men er i kommuneplanens arealdel 2018 avsatt til sentrumsformål.; KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.

Risiko 16: Nærliggende reguleringsplan for Laksevåg verftsområde – kan medføre utfylling i sjø og bymessig bebyggelse i nærheten
  Confidence: 0.75
  Evidens: PlanID: 64940000. Laksevåg/Bergenhus. Gnr 153 Bnr 1, Laksevåg verftsområde 2. Planen skal legge til rette for utfylling i sjø, samt omdanning av verftsområdet til sentrumsformål med bymessig bebyggelse.

Risiko 17: Nærliggende rammetillatelse for stort boligbygg på 3 og 4 etasjer – kan påvirke sol, utsikt og nærområde
  Confidence: 0.75
  Evidens: Eiendom 153/271. Ombygging. Stort frittliggende boligbygg på 3 og 4 etg., rammetillatelse datert 23.09.2025. Saksnr: 202415914

Risiko 18: Legalpant – kommunen og sameiet har legalpant i seksjonen med prioritet foran tinglyste lån
  Confidence: 0.85
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 19: Selgers egenerklæring ikke gjennomgått av bygningssakkyndig
  Confidence: 0.8
  Evidens: Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei

Risiko 20: Vannrøropplegg har ukjent alder – kun antatt oppgradert i forbindelse med badrehabilitering i 2015
  Confidence: 0.75
  Evidens: Ukjent alder. Man kan kun anta at røropplegg er oppgradert ifm bad i 2015.; Er det utført arbeider på anlegget etter byggeår? Ja

Risiko 21: Avløpsrør under bakken er ikke vurdert – ukjent tilstand på fellesanlegg
  Confidence: 0.75
  Evidens: Avløpsrør fra leiligheten og ut til offentlig kloakk eller septik ligger under bakken og er ikke vurdert.; Kontrollen er avgrenset til innvendig i leiligheten, og kontrollen stopper ved sluket/etasjeskille.

Risiko 22: Boligen er fra 1920 – høy alder medfører generell risiko for skjulte feil og behov for løpende vedlikehold
  Confidence: 0.85
  Evidens: Byggeår: 1920 - Kilde: Eiendomsverdi; Alle bygningsdeler er under vedvarende aldring. I mange tilfeller kan levetid i praksis være både kortere og lengre enn hva som oppgis under tabeller for forventet brukstid og «levealder» for bygningsdeler.

Risiko 23: Energimerke G (oransje energifarge) – boligen har svært dårlig energieffektivitet, noe som kan medføre høye oppvarmingskostnader
  Confidence: 0.85
  Evidens: Energikarakter: G; Energifarge: Oransje

Risiko 24: Radonmåling ikke utført
  Confidence: 0.8
  Evidens: Er det foretatt radonmåling? Nei

Risiko 25: Eiendommen ligger i konsesjonsområde for fjernvarme (Eviny Termo AS) – kan begrense valg av oppvarmingsløsning
  Confidence: 0.75
  Evidens: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg.

Dokumentkontekst:
[d104_d104 | Side [1]]
nt for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som

---

[d104_d104 | Side [1]]
ommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Nei
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om

---

[d104_d104 | Side [1]]
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
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller

---

[d104_d104 | Side [1]]
de gir bud. tilbakeholdt, eller gitt feilaktige opplysninger, og dette har
sameiet legal panterett i den enkelte eierseksjon, Regelverk og generelle opplysninger påvirket avtalen.
begrenset til inntil 2 ganger folketrygdens grunnbeløp. Boligen selges med det inventar og utstyr som i henhold Slitasje og bruk
til gjeldende lover, forskrifter eller offentlige pålegg skal Det må også forventes at eiendommer som har vært i Dersom det er avvik mellom oppgitt og faktisk innvendig
Kjøper og selger er forpliktet

---

[d104_d104 | Side [1]]
lplaner: Eiendommen ligger i et menes utleie i en sammenhengende periode på opptil 30
Tinglyste heftelser
Lille Damsgårdsveien 37A, 5162 LAKSEVÅG uregulert område, men er i kommuneplanens arealdel døgn.
2018 avsatt til sentrumsformål. Tinglyste heftelser og rettigheter: På eiendommen er det
Gnr. 153, bnr. 695, snr. 2, ideell andel 1/ 1 ikke tinglyst noen heftelser og rettigheter som følger
Diverse
i Bergen kommune. Eiendommen befinner seg i følgende hensynssoner: eiendommens matrikkel ved overskjøting til

---

[d104_d104 | Side [1]]
ger kan avsluttes med ferdigattest. Kjøper påtar 4 m² Balkong av overdragelsen. maur eller lignende?
seg risikoen for fortsatt bruk av boligen, samt eventuelle ‑ Henviser til egenerklæring fra forrige eier: Har vært
pålegg fra offentlige myndigheter. Fra 01.01.24 er det innført nye regler for måling og rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i mur
Eiendommens
opplysning av areal på boliger. murt igjen både innenfra og fra utsiden. Har vært rotter i
Det gjøres oppmerksom på at

---

[d104_d104 | Side [1]]
erforsikring er en rettshjelpsforsikring nøye, gjerne sammen med fagperson, før bud gis. næringsvirksomhet.
Det informeres om at ingen kan eie mer enn to som gir trygghet og profesjonell juridisk hjelp dersom det Dersom kjøper velger å kjøpe uten å ha sett
boligseksjoner i sameiet, i henhold til eierseksjonsloven § oppdages uventede feil eller mangler ved boligen de eiendommen, kan det ikke etter overtakelse reklameres En eiendom anses å ha en mangel dersom den ikke
23. Seksjoner som eies av nærstående

---

[d104_d104 | Side [1]]
porten. Spesielt forhold som er vurdert
TBA: 4 m² med TG2 og TG3 bør vurderes nøye, da de indikerer
For øvrig gjelder NEF sin standardliste "Oversikt over Kjenner du til om det er/ har vært utettheter i terrasse/ avvik fra normal slitasje og/ eller høy alder, noe som kan
Bruksareal fordelt på etasje løsøre og tilbehør" med mindre annet fremkommer av garasje/ tak/ fasade? innebære behov for utbedringer. Bygningsdeler som er
Kjeller salgsoppgaven. Listen er vedlagt. ‑ Det har vært en små lekkasje fra

---

[d104_d104 | Side [1]]
 sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: AE 3
38
46005230
:ecnerefer
tnemucoD
39

## Side 21

Tilleggskommentar
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne

---

[d104_d104 | Side [1]]
lag
med utemembran
7 Kjenner du til om det er/har vært problemer med ildsted/skorstein/pipe f.eks. dårlig trekk, sprekker, pålegg, fyringsforbud eller lignende?
Nei Ja
8 Kjenner du til om det er/har vært f.eks. sprekker i mur, skjeve gulv eller lignende?
Nei Ja
9 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende?
Nei Ja
Henviser til egenerklæring fra forrige eier: Har vært rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i

---

[d104_d104 | Side [1]]
r boenheten. ‑ Montert varmepumpe
henvendelse til megler. Megler har forsøkt å finne ut om BRA‑e ‑ Eksternt bruksareal. Areal av alle rom utenfor Type takst avholdt av takstmann: Tilstandsrapport
soverom 2 er godkjent, men det foreligger ingen boenheten og som tilhører denne, for eksempel eksterne 2015:
dokumentasjon fra kommunen på leilighetens boder. Sammendrag selgers egenerklæring: Selgers ‑ Oppgradert bad
planløsning. Kjøper påtar seg risikoen og eventuelle BRA‑b ‑ Innglasset balkong, altan,

---

[d104_d104 | Side [1]]
 KPA‑bestemmelsene skal sluttføres med vedtak Bystyret
‑ Balkong på grunn av svak fuktsikring av dekke og for Husdyr: Dyrehold er tillatt i første kvartal 2027. Hovedmålet med revisjon av Legalpant: Kommunen har legalpant som sikkerhet for
lav høyde på dørterskel med fare for fuktinnsig. Rekkverk KPA‑bestemmelsene er forenkling, fortgang og betaling av kommunale avgifter og eventuell
har høyde som er lavere enn dagens forskriftskrav, men forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre

---

[d104_d104 | Side [1]]
ringen når du kjøper en brukt
bolig. Da gjelder avhendingsloven. 6.
− Hvor: Hos eiendomsmegler senest ved medfølger. Innredning i garderobeskap, for eksempel løse eller fastmonterte trådkurver, hyller,
kontraktsmøte. stenger og lignende, medfølger.
− Hvordan: Krysses av i kjøpekontrakten.
Forsikringsbevis og vilkår sendes per e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er

---

[d104_d104 | Side [1]]
llom oppgitt og faktisk innvendig
Kjøper og selger er forpliktet til å signere den standard følge med eiendommen, jf. avhendingsloven § 3‑4. bruk, vil kunne ha tegn til slitasje og eventuelle skader. areal på minst 2 % og samtidig minst 1 kvadratmeter, kan
kjøpekontrakten utarbeidet av Emera som en del av Fastmonterte eller spesialtilpassede installasjoner og Slik normal bruksslitasje og behov for vedlikehold må dette utløse rett til kompensasjon etter § 3‑3 i
eiendomshandleren. Kjøpekontrakten kan

---

[d104_d104 | Side [1]]
søkt før 01.01.1998. Det vil
26 27

## Side 15

OM EIENDOMMEN OM EIENDOMMEN
dermed ikke være mulig å be om ferdigattest for slike TBA fordelt på etasje Kjøper aksepterer at det kan forekomme hull og merker Kjenner du til om det er/ har vært sopp/ råteskader/
tiltak. Dette betyr ikke at tiltak blir lovlige, men at saken 2. etasje etter montering av inventar og utstyr som ikke er en del insekter/ skadedyr på eiendommen som rotter, mus,
ikke lenger kan avsluttes med ferdigattest. Kjøper påtar 4 m² Balkong av

---

[d104_d104 | Side [1]]
g er sameiet / borettslaget sitt ansvar. For vurdering av riktig teknisk
tilstand anbefales dette utført av rørlegger.
6.9 Lovlighet
Er det manglende samsvar mellom dagens bruk og godkjente byggetegninger? Ikke kontrollert 6.11 Vannledninger
Har boligen åpenbare ulovligheter (F.eks ulovlige bruksendringer)? Nei
Type anlegg Rør i rør system
Er det avdekt forhold som tyder på at boenhet ikke er delt opp i brannceller etter kravene i Nei
teknisk forskrift? Er det utført arbeider på anlegget etter byggeår?

---

[d104_d104 | Side [1]]
av krav om prisavslag eller erstatning må
avhendingsloven § 3‑5. Avtalerettslig kjøper selv dekke kostnader med inntil kr 10 000 (som en
Selger leverer eiendommen i ryddig og rengjort stand. Partenes rettigheter og plikter reguleres av avtalen egenandel).
En standard tilbehørsliste utarbeidet av Norges mellom partene, og all tilgjengelig dokumentasjon som
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og forelå for kjøper før handelen ble inngått. I tillegg gjelder Ikke‑forbruker – definisjon og

---

[d104_d104 | Side [1]]
plysninger fra offentlige den er», noe som kan være av verdi for selger. Det
Boligselgerforsikring: Selger har tegnet registre som kommunen og Kartverket. Det er viktig at understrekes at selger står fritt til å velge hvilket bud som Kjøperens plikt til å foreta grundige undersøkelser gjelder
boligselgerforsikring som dekker selgers ansvar etter kjøper setter seg grundig inn i alle salgsdokumentene, aksepteres, og er ikke forpliktet til å velge det høyeste. også fullt ut for kjøpere som ikke omfattes

---

[d104_d104 | Side [1]]
nder terreng TG 2 pga fuktig inneklima. Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei
Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres.
Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare
for fuktinnsig.
Informasjon om bygningssakkyndig
Yttervegger TG 2 pga slitasje og svak ventilering.
Etasjeskille og gulv på grunn TG 2 gis med bakgrunn i standardens krav til godkjente måleavvik. Navn: Thomas

---

[d104_d104 | Side [1]]
v, men forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre eiendomsskatt. De øvrige seksjonseierne i sameiet har
Energimerke
tilfredsstiller krav på oppføringstidspunktet. gode boliger og nabolag. legalpant på inntil 2G som sikkerhet for krav knyttet til
‑ Yttervegger på grunn av slitasje og svak ventilering. Energikarakter: G ‑ PlanID: 64090000. Kommunedelplan for sameieforholdet, som felleskostnader. Legalpant er pant
‑ Etasjeskille og gulv med bakgrunn i standardens krav til kollektivsystemet fra

---

[d104_d104 | Side [1]]
 ulike roller i byggebransjen og videre fordypning i byggteknikk og prosjektering.
Ventilasjon TG 2 pga noe svak ventilering. Egne premisser:
Det er ikke gjort kontroll av bygningsdeler som ikke har direkte nær tilknytning til den aktuelle boenheten. Dette gjelder bl.a yttertak, loft samt fellesarealer i
Våtrom: Bad TG 2 pga alder. kjeller.
Boligens tilstandsgrader er satt ut ifra tilstanden på befaringsdagen. Det gjøres oppmerksomt på at enkelte elementer kan svikte eller forverres med tiden
etter

---

[d104_d104 | Side [1]]
r delen er gammel og det er grunn til å bygningsdelen. Rapporten beskriver avvik, altså en tilstand som er dårligere enn referansenivået.
varsle om faren for skader på grunn av alderen, eller når det er grunn til å overvåke delen Rapporten framhever normalt ikke positive sider ved boligen ut over det som kommer frem av
spesielt på grunn av fare for større skader eller følgeskader tilstandsgraden på rom og bygningsdeler.
Ved tilstandsgrad 0 og 1 gis det normalt ingen begrunnelse for valg av tilstandsgrad,

---

[d104_d104 | Side [1]]
tlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade eller symptomer på skade, sterk Struktur og referansenivå Rapportens struktur, metode og begrepsbruk følger i hovedsak Norsk Standard NS 3600
TG-2
slitasje eller nedsatt funksjon. Graden gis når bygningsdelen trenger vedlikehold eller Normalt vil referansenivået være byggeskikken og tilstanden ved byggeåret for boligen eller
tiltak i nær fremtid. Graden skal også brukes når delen er gammel og det er grunn til å bygningsdelen. Rapporten

---

[d104_d104 | Side [1]]
være
snødekket tak eller krypkjeller uten inspeksjonsmulighet på undersøkelsestidspunktet;
TG-IU eller bygningsdelen eller arealet eller rommet er ikke tilgjengelig for inspeksjon på Takstrapporten Kunden/rekvirenten skal lese gjennom dokumentet før bruk og gi tilbakemelding til den
bygningssakkyndige hvis det finnes feil/mangler som bør rettes opp. Rapporten kan ikke være eldre enn 1
tidspunktet for analysen. Dersom TGIU omfatter særlig fuktutsatte konstruksjoner, skal
år på det tidspunkt kjøperen binder

---

[d104_d104 | Side [1]]
gnes vedlikehold av utvendig kledning. Enkelte kledningsbord bør erstattes samt det
anbefales å kontrollere veggkonstruksjon bak kledning rundt innfesting av balkonger i fasade med Pipe og ildsted er kun visuelt vurdert og ikke røyktrykkprøvd eller kamerakontrollert ved
hensyn til fuktskader. besiktigelsen. Undertegnede har ikke spesiell kompetanse vedr. vurdering av piper og ildsteders
forskriftsmessige tilstand. For detaljert informasjon og krav anbefales kontakt med lokalt brann- og
feievesen.
Anbefalte

---

[d104_d104 | Side [1]]
lass? Nei
Er det gjennomført arbeider etter opprinnelig byggeår? Ja
Er det påvist værslitte karmer, fuktskader eller råteskader? Nei
Se «tiltak» for mer informasjon vedr oppgraderinger.
Er det ved stikkprøver registrert avvik ved åpne/lukkemekanismen? Nei
Er det synlig tegn på skjevheter/konstruksjonssvikt? Nei
Er det påvist avvik ved utvendig tetting som beslag, vannbord, og omramming? Nei
Er det tegn på sopp/råteskader i treverk eller skader i betong? Nei
Oppsummering av vinduer og dører TG-1
Er det krav

---

[d104_d104 | Side [1]]
 at enkelte elementer kan svikte eller forverres med tiden
etter befaringsdato. Alle bygningsdeler er under vedvarende aldring. I mange tilfeller kan levetid i praksis være både kortere og lengre enn hva som oppgis
under tabeller for forventet brukstid og «levealder» for bygningsdeler. Graden TG2 er i enkelte tilfeller benyttet på forhold og bygningsdeler som ikke har
Bygningsdeler med TG-IU
synlig svekkelse, men der normal levetid er marginal eller har usikker restlevetid. For boliger der yttervegger

---

[d104_d104 | Side [1]]
økelser anbefales
Ikke behov for umiddelbare tiltak men ved evt. legging av nytt gulv som stiller krav til planhet av
Er det påvist fuktskade/sopp/råte eller slitt overflate? Ja
underlaget, må tiltak påregnes.
Er det liten eller ingen lufting av kledningen? Ja
6.7 Ildsted/Skorstein innvendig i boligen
Er det manglende musetetting i nedkant av kledning/plater? Ikke kontrollerbart
Oppsummering av yttervegger TG-2 Type pipe Tegl
Registreres noen skjevheter i kledning og stedvis svak innfesting (kledning buler

---

[d104_d104 | Side [1]]
n. GUA – summen av BRA og AHL. Brukes når boligen har ‑ Henviser til egenerklæring fra forrige eier: Lekkasje på tilstandsrapport av en bygningssakkyndig, som gir en
BRA‑e (3m²): Ekstern bod i underetasje gulvareal som ikke er måleverdig på grunn av for bad våren 2015. Forsikringssak som gikk via vår hus teknisk gjennomgang av boligen og påpeker eventuelle
TBA (4m²): Balkong eksempel skråtak eller lav himlingshøyde. Arealet oppgis forsikring i Tryg. Badet ble total rehabilitert fra bunn og avvik.

---

[d104_d104 | Side [1]]
skjevheter i kledning og stedvis svak innfesting (kledning buler ute enkelte
steder). Kledning fremstår noe slitt med vedlikeholdsetterslep. Er det montert ildsted? Nei
Det er ikke mulig å kontrollere lufting mellom kledning og veggkonstruksjon. Ikke registrert luting
under vannstokk (TG 2) Dersom teglpipe - er 1 eller flere sider av pipen innkledd? Ja
Selve veggkonstruksjonen ble ikke inspisert da det er en lukket konstruksjon. For inspeksjon kreves
Er det påvist avvik ved ildsted/feieluke/sotluke i

---

[d104_d104 | Side [1]]
isk forskrift? Er det utført arbeider på anlegget etter byggeår? Ja
Ukjent alder. Man kan kun anta at røropplegg er oppgradert ifm bad i 2015.
Er det manglende ferdigattest / midlertidig brukstillatelse? Ikke kontrollert
Er det etablert fordelerskap? Ja
Er det avvik på krav til rømning, dagslysforhold eller takhøyde? Nei
Er det manglende vannstoppesystem i tilknytning til, eller manglende avrenning til Nei
Er det manglende brannslukkingsutstyr og røykvarsler i boligen iht forskrift? Nei sluk/avløp fra

---

[d104_d104 | Side [1]]
 og som har betydning ved eierskifte. Tilbakeholdt eller uriktig informasjon som har
TG-1
Graden kan også brukes når delen er ny, men der dokumentasjon på faglig god utførelse betydning for vurderingen, er ikke bygningssakkyndig sitt ansvar. Rapporten gir normalt ingen vurdering av
mangler. boligens tilbehør, som hvitevarer, brunevarer og annet inventar. Dette gjelder også om tilbehøret er
integrert.
Tilstandsgrad 2: Bygningsdelen har vesentlige avvik
Bygningsdelen skal enten ha feil utførelse, en skade

---

[d104_d104 | Side [1]]
 visuell kontroll i sluk.
Fliser på gulv- og veggflater
TG 2 pga alder.
Er det gjennomført arbeider etter opprinnelig byggeår? Ja Anbefalte tiltak membran, tettesjikt og sluk
Se «tiltak» for mer informasjon vedr oppgraderinger. Ikke behov for akutte tiltak.
(2015)
Sanitærutstyr
Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja
Beskrivelse
Er det fare for at lekkasjevann fra installasjoner i rommet ikke når sluket? Nei
Inneholder:
- Vegghengt toalett
Er vindu eller dør plassert i

---

[d104_d104 | Side [1]]

54 55

## Side 29

Anbefalte tiltak / ytterligere undersøkelser anbefales Er det påvist tegn på utettheter f.eks. rundt rørføringer eller andre overganger? Nei
Klaffventiler på yttervegg anbefales etablert. Det presiseres at det bør avklares med
Er det påvist feil utførelse, feil materialvalg, eller skader i tettesjikt med fare for fuktskade? Nei
sameiet/borettslaget om muligheten for dette.
Har membran/tettesjikt nådd en alder som gir økt risiko for skader eller følgeskader? Nei
6.16 Våtrom:

---

[d104_d104 | Side [1]]
krav anbefales kontakt med lokalt brann- og
feievesen.
Anbefalte tiltak / ytterligere undersøkelser anbefales
6.5 Loft (konstruksjonsoppbygging)
Med bakgrunn i påviste avvik og for en vurdering av eventuelle tiltak anbefales en ytterligere
kontroll av pipa/ildsteder utført av brann- og feiervesen.
Tilgjengelighet Ikke tilgjengelig
Oppsummering av loft (konstruksjonsoppbygging) TG-IU
6.8 Kjøkken
TIlhører annen seksjon og er derfor ikke kontrollert.
Overflater og innredning
Er det påvist fukt /skader rundt

---

[d104_d104 | Side [1]]
ginal eller har usikker restlevetid. For boliger der yttervegger vurderes kontrolleres disse normalt ikke med
rettningsmålere med mindre det er mistanke om skjevheter/setningsskader.
Bygningsdel Oppsummert begrunnelse for tilstandsgrad
Loft (konstruksjonsoppbygging) TG-IU pga ingen tilkomst. Informasjon om boligen
Adresse: Lille Damsgårdsveien 37 A, 5162 Laksevåg
Kommunenr: 4601 Gårdsnr: 153 Bruksnr: 695 Festenr:
Seksjonsnr: 2 Andelsnr: Leilighetsnr:
Byggeår: 1920 - Kilde: Eiendomsverdi
Boligtype:

---

[d104_d104 | Side [1]]
i følgende bestemmelsesområder: Opprettet seksjoner: som vil stå for denne kostnaden, og arbeidet starter
‑ Byggegrense, utb. volum, funksjonskrav, berøringsgrad Snr: 2 snarest. Entreprenør skal utføre følgende arbeid: Fjerne
Sameie
100% Formål: Bolig alt som er løst på oversiden av balkongen, demontere
Lille Damsgårdsvei 37A Tilleggsdel: Bod i fellesareal eksisterende balkong dør, heve døren 50 mm, fjerne
Planer i nærheten av eiendommen: Sameiebrøk: 68/ 197 klednings bord på oversiden og under balkongen

---

[d104_d104 | Side [1]]
 like ved butikken og Laksevåg
Kr 3 397 350 boligverdi (beregnet markedsverdi for bolig) basert på kirke. I tillegg er det kaianlegg på Holmen hvor det er
eiendommen
SSBs statistiske opplysninger om omsatte boliger. I mulig å bade på sommerstid.
beregningen tas det hensyn til din boligs beliggenhet,
Felleskostnader Type eiendom
areal, byggeår og type bolig. Formuesverdien er en
Barnehage/ Skole
Felleskostnader kr 1 852,‑ pr. mnd prosentandel av denne boligverdien.For mer informasjon Eieform: Eierseksjon
om

---

[d104_d104 | Side [1]]
ommen ikke samsvarer med
I henhold til eierseksjonsloven § 31 er sameierne Dersom det oppstår behov for ytterligere avklaringer, det som med rimelighet kunne forventes ut fra blant
ansvarlige overfor sameiets kreditorer i forhold til sin oppfordres interessenter til å kontakte eiendomsmegler annet alder, type og synlig tilstand – eller hvis det er
Lovanvendelse
sameiebrøk. Ved manglende betaling av fellesutgifter har eller egne rådgivere før de gir bud. tilbakeholdt, eller gitt feilaktige opplysninger, og

---

[d104_d104 | Side [1]]
gen. Det vil være skiltet ved
260,‑ (Pantattest kjøper ‑ lagt ut av megler) eller Ulriken som ikke er lange veien fra boligen. Det er fellesvisninger for enkel orientering.
545,‑ (Tingl.gebyr pantedokument) Informasjon: Kommunale avgifter inkluderer vann, avløp også klatresenter på Laksevåg med flere
545,‑ (Tingl.gebyr skjøte) og renovasjon. Oppgitt beløp er et estimat for hele året. vanskelighetsgrader. Er det ønskelig å delta i organisert
Tomt
82 250,‑ (Dokumentavgift (forutsatt salgssum: 3 290 Det

---

[d104_d104 | Side [1]]
 som er spesialiserte på Forsikringspremien trekkes i oppgjøret. 4.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter 
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300 
og eventuelle idømte

---

[d104_d104 | Side [1]]
ngssak som gikk via vår hus
Beskrivelse forsikring i Tryg. Badet ble total rehabilitert fra bunn og nytt rørsystem installert. Rehabliteringsjobben ble utført av
Årstad bygg, selve rør arbeidet av Svalland Comfort.
2 Kjenner du til om det er utført arbeid på bad/våtrom?
Svar Ja, kun av faglært
Henviser til egenerklæring fra forrige eier :Rehabliteringsjobben ble utført av Årstad bygg, selve rør arbeidet av
Beskrivelse Svalland Comfort.
Arbeid utført av Årstad bygg, Svalland Comfort.
2.1 Ble

---

[d104_d104 | Side [1]]
ra og fra utsiden. Har vært rotter i
Det gjøres oppmerksom på at balkongen er tegnet inn på De nye arealbegrepene er: kjeller tidlig vinter 2022. Problem fjernet.
tilstand
seksjoneringen som er stemplet og tinglyst, men
søknaden for oppføringen av balkongen foreligger ikke i Bruksareal BRA: Takstmann: Thomas Frøyen Moderniseringer og påkostninger: 2022:
kommunens arkiver. Seksjoneringen kan fås ved BRA‑i ‑ Internt bruksareal. Arealet innenfor boenheten. ‑ Montert varmepumpe
henvendelse til megler. Megler

---

[d104_d104 | Side [1]]
i samsvar med antall sikringer. det kommunale nettet er private, og
Oppvarming
‑ Ventilasjon på grunn av noe svak ventilering. Godkjente tiltak i nærheten av eiendommen: vedlikeholdsansvaret for disse påhviler sameiet.
‑ Membran, tettesjikt og sluk bad på grunn av alder. Boligen har følgende oppvarmingskilder: ‑ Eiendom 153/ 513. Garasjehus anneks til bolig, Adkomst til eiendommen skjer via offentlig vei.
‑ Varmepumpe i stue igangsettingstillatelse datert 11.06.2018. Saksnr:
Bygningsdeler som ikke har

---

[d104_d104 | Side [1]]
t arbeid på bad/ våtrom?
BRA ‑ e: 3 m² Innbo og løsøre: Følgende løsøre og tilbehør følger med: ‑ Henviser til egenerklæring fra forrige eier All informasjon i tilstandsrapporten anses som kjent for
BRA ‑ b: 0 m² ‑ Integrerte hvitevarer på kjøkken. :Rehabliteringsjobben ble utført av Årstad bygg, selve rør kjøper, og det vil ikke være mulig å reklamere på forhold
BRA totalt: 68 m² ‑ Vaskemaskin arbeidet av Svalland Comfort. som er nevnt i rapporten. Spesielt forhold som er vurdert
TBA: 4 m² med TG2 og TG3

---

[d104_d104 | Side [1]]
v denne boligverdien.For mer informasjon Eieform: Eierseksjon
om formuesverdi, se Skatteetatens nettsider. Skolekrets: Barne‑ og ungdomsskoler:
Felleskostnader inkulderer: Felles byggforsikring, strøm i ‑ 7 min gange til Damsgård skole (1‑7 kl.) Objektstype: Eierseksjon
trappehus, oppsparing til fremtidig vedlikehold. ‑ 10 min gange til Holen skole (1‑10 kl.)
Beliggenhet
‑ 7 min kjøring til Nygårdslien skole (1‑7 kl.)
Ferdigattest/ brukstillatelse:
Det gjøres oppmerksom på at det er planlagt oppussing

---

[d104_d104 | Side [1]]
 rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i mur murt
Beskrivelse
igjen både innenfra og fra utsiden. Har vært rotter i kjeller tidlig vinter 2022. Problem fjernet.
10 Kjenner du til om det er/har vært skjeggkre i boligen?
Nei Ja
11 Kjenner du til om det er/har vært utført arbeid på el-anlegget eller andre installasjoner (f.eks. oljetank, sentralfyr, ventilasjon)?
Svar Nei
12 Kjenner du til om det er utført kontroll av el-anlegget og/eller andre installasjoner (f.eks. oljetank,

---

[d104_d104 | Side [1]]
: kr 10.000,‑
gnr/ bnr), kjøpesum, budgivers kontaktinformasjon, Visninger/ overtagelser: kr 3.900,‑ pr. stk.
Samarbeidspartnere og
finansieringsplan, akseptfrist, overtakelsesdato og Markedspakke: kr 24.850,‑
Betalingsbetingelser
eventuelle forbehold som for eksempel usikker Oppgjørshonorar inkl. factoring: kr 7.500,‑
tilknyttede foretak
finansiering, salg av nåværende bolig ol. Normalt vil ikke Hele oppgjøret må betales samlet fra en norsk Grunnpakke bolig Info: kr 9.300,‑
et bud med forbehold bli

---

[d104_d104 | Side [1]]
 i handelen.
emera.no
70 71

## Side 37

Forbrukerinformasjon
om budgivning
Sist oppdatert med virkning fra 1. juli 2025, i forbindelse med
ikrafttredelse av endringer i eiendomsmeglingsloven.
Informasjonen er utarbeidet av Forbrukerrådet, Advokatforeningen ved Lovutvalget for eiendomsmegling, Eiendom Norge og
Norges Eiendomsmeglerforbund, på grunnlag av bl.a. eiendomsmeglingsloven § 6-8.
Nedenfor gis en oversikt over de retningslinjer som anbefales ved budgivning på eiendommen. Avslutningsvis gis også en

---

[d104_d104 | Side [1]]
rsikring i Tryg. Badet ble total rehabilitert fra bunn og avvik. Rapporten, sammen med selgers egenerklæring,
som tilleggsinformasjon til øvrige arealer. nytt rørsystem installert. Rehabliteringsjobben ble utført er vedlagt salgsoppgaven. Det er viktig at interessenter
av Årstad bygg, selve rør arbeidet av Svalland Comfort. grundig gjennomgår disse dokumentene før bud legges
Areal
inn.
Standard
BRA ‑ i: 65 m² Kjenner du til om det er utført arbeid på bad/ våtrom?
BRA ‑ e: 3 m² Innbo og løsøre: Følgende

---

[d104_d104 | Side [1]]
 ansvar for Laksevåg verftsområde 2. Planen skal legge til rette for
ikke fremlagt samsvarserklæring på elektrisk arbeid/ informasjonen som fremgår av energiattesten. utfylling i sjø, samt omdanning av verftsområdet til Eiendommen er tilknyttet offentlig vann‑ og
anlegg montert etter 01.01.1999. Kursfortegnelse er ikke sentrumsformål med bymessig bebyggelse. avløpssystem. Stikkledningene fra eiendommen og ut til
oppdatert og ikke i samsvar med antall sikringer. det kommunale nettet er private,

---

[d104_d104 | Side [1]]
joner (f.eks. toalett eller sluk). Det er dog stakeluke i felles kjellerbod.
Det anbefales å etablere mekanisk avtrekk. Det presiseres at det bør avklares med
sameiet/borettslaget om muligheten for dette.
Avløpsrør fra leiligheten og ut til offentlig kloakk eller septik ligger under bakken og er ikke vurdert.
Kontrollen er avgrenset til innvendig i leiligheten, og kontrollen stopper ved sluket/etasjeskille.
Resterende avløpsanlegg er sameiet / borettslaget sitt ansvar. For vurdering av riktig

---

[d104_d104 | Side [1]]
meiebrøk: 68/ 197 klednings bord på oversiden og under balkongen som
Organisasjonsnummer: 998174422 ‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. har fått skader etter vann, legge på nytt beslag, støpe
30 31

## Side 17

om eiendommen OM EIENDOMMEN
nytt fall utover mot sluk, ha på ute primer, ha på 2 lag Boligkjøperforsikring: Kjøper har anledning til å tegne Det kan være forskjell mellom boligens faktiske bruk av Forbrukerkjøp – definisjon og vilkår:
med utemembran, tilbakeføre dør, tilbakeføre ny

---

[d104_d104 | Side [1]]
g gulv med bakgrunn i standardens krav til kollektivsystemet fra Bergen sentrum til Bergen vest. som ikke vises i grunnboksutskriften, og har prioritet
godkjente måleavvik. Energifarge: Oransje Planforslagets formål er å anbefale et helhetlig og foran tinglyste lån, for eksempel banklån på seksjonen.
‑ Ildsted/ skorstein innvendig i boligen på grunn av overordnet kollektivsystem Legalpant til kommunen har høyere prioritet enn
innkledd pipe mot garderoberom. med hovedkorridorer for buss og bane mellom

---

[d104_d104 | Side [1]]
pe mot garderoberom. med hovedkorridorer for buss og bane mellom Bergen legalpant til sameiet.
Info energiklasse
‑ Kjøkken på grunn av svak ventilering. Kullfilter uten sentrum og Bergen vest.
direkte avsug til det fri. Se fullstendig energiattest fra selger som vedlegg til ‑ PlanID: 64940000. Laksevåg/ Bergenhus. Gnr 153 Bnr 1,
Vei, vann og avløp
‑ Elektrisk på grunn av manglende dokumentasjon. Det er salgsoppgave. Megler påtar seg ikke ansvar for Laksevåg verftsområde 2. Planen skal legge til rette

---

[d104_d104 | Side [1]]
ar seg risikoen og eventuelle BRA‑b ‑ Innglasset balkong, altan, terrasser. egenerklæringsskjema følger vedlagt salgsoppgaven.
pålegg fra offentlige myndigheter. Interessenter oppfordres til å gjennomgå dette nøye. 2009:
Andre arealer: ‑ Nye vinduer og altandør
TBA ‑Terrasser og åpen altan som er tilknyttet boligen. Følgende opplysninger er spesielt viktig å merke seg: ‑ Ny ytterkledning og nye balkonger
Innhold
ALH ‑ Areal med lav himlingshøyde måles på samme
Leiligheten ligger i byggets 2. etasje og

---

[d104_d104 | Side [1]]
tstyr og røykvarsler i boligen iht forskrift? Nei sluk/avløp fra fordelerskap?
Er det skader på brannslukkingsutstyr, røykvarsler, eller er apparat eldre enn 10 år? Nei Har vannrør nådd en alder som gir økt risiko for skader eller følgeskader? Nei
Er det manglende isolering av vannrør hvor det er risiko for frost eller kondens? Nei
6.10 Avløpsrør
Er det registrert tegn til lekkasjer eller skader på vannrør? Nei
Type avløpsrør Plast
Er det redusert vanntrykk ved prøving av to tappesteder samtidig? Nei
Er

---

[d104_d104 | Side [1]]
dtektene setter ingen
Øvrig
oppvarmingskilde, vil ikke dette bli inkludert i handelen. begrensninger på eierens utleieadgang. Korttidsutleie er
Eiendommen er berørt av Eviny Termo AS sitt tillatt i inntil 90 døgn per år, jf. eierseksjonsloven § 24.
informasjon
konsesjonsområde for fjernvarmeanlegg. Denne grensen kan endres i vedtektene, men den må
Regulering
være satt mellom 60 og 120 døgn. Med korttidsutleie
Adresse
Regulerings og arealplaner: Eiendommen ligger i et menes utleie i en sammenhengende

---

[d104_d104 | Side [1]]
ot kald Nei
sone?
Er det manglende drenering av lekkasjevann fra innebygd sisterne? Nei
Er det registrert riss, sprekker i fuger, bom (hulrom) under flis? Nei
Oppsummering av sanitærutstyr TG-1
Er det påvist tegn på sopp/råteskader/fuktskader på overflater eller skadedyr? Nei Ikke funnet nevneverdige avvik basert på visuell kontroll.
Er det registrert knirk i gulvet? Ikke aktuelt (gjelder ikke flislagt gulv) Ventilasjon
Type ventilering Mekanisk avtrekk
Oppsummering av overflater TG-1
Fallforhold:
Er

---

[d104_d104 | Side [1]]
å ofte utføres i sammeheng med
etterisoleringstiltak.
Tiltak 21: Etterisolering av yttervegg
Yttervegg etterisoleres. Metode avhenger av dagens løsning. For å sjekke vindtetting av yttervegg anbefales
termografering og tetthetsprøving.
Tiltak på elektriske anlegg
64 65

## Side 34

Nabolagsprofil
Lille Damsgårdsveien 37A
Offentlig transport Aldersfordeling
Laksevåg 4 min
Linje 6, 20, 85 0.3 km
Bergen busstasjon 8 min Buss, tog, trikk 3.9 km
Danmarks plass 8 min
Buss, trikk 3.4 km
Bergen Nøstet kystrutekai

---

[d104_d104 | Side [1]]
 i betong? Nei
Oppsummering av vinduer og dører TG-1
Er det krav til rekkverk? Ja
Det gjøres oppmerksom på at punkterte vindusglass tidvis kan være svært vanskelig å avdekke.
- Det ble ikke avdekket punkterte glass på befaringsdagen.
Er det avvik på rekkverkshøyde og åpninger i rekkverket i forhold til gjeldene byggteknisk Ja
forskrift på befaringstidspunktet? Ikke funnet nevneverdige avvik basert på visuell kontroll utover alminnelig bruksslitasje. Noe
vedlikehold må påregnes.
Er balkong / terrassen

---

[d104_d104 | Side [1]]
tillatelse datert 11.06.2018. Saksnr:
Bygningsdeler som ikke har blitt undersøkt (TGIU): ‑ Gulvvarme på bad 201739041
Utleie
‑ Loft på grunn av ingen tilkomst ‑ Elektrisk oppvarming ‑ Eiendom 153/ 271. Ombygging. Stort frittliggende
boligbygg på 3 og 4 etg., rammetillatelse datert Adgang til utleie: Boligen kan leies ut i samsvar med
Hvis et rom på visningen mangler fast installert 23.09.2025,. Saksnr: 202415914 gjeldende lovverk, og vedtektene setter ingen
Øvrig
oppvarmingskilde, vil ikke dette bli

---

[d104_d104 | Side [1]]
 skyldes differansen bestående
Rommene kan være måleverdige selv om bruken er i strid med byggteknisk forskrift av innvendige vegger, piper, sjakter etc. Netto romareal inkluderer innebyggede garderrobeskap, innkassinger/pipeløp etc. Arealene er beregnet og rom er
definert etter dagens faktiske bruk, uavhengig av hva som er godkjent av bygningsmyndighetene.
Arealet beskriver boligens bruksareal i tre definerte kategorier:
Opplyst tillegsreal som eksterne boder i fellesarealer er målt på stedet dersom

---

[d104_d104 | Side [1]]
eksjon kreves
Er det påvist avvik ved ildsted/feieluke/sotluke i forhold til avstand brennbart materiale? Nei
destruktive åpninger, noe som ikke ble foretatt på befaringsdagen. Det ble ikke registrert tegn til
sopp- eller råteskader ved innvendig og utvendig besiktigelse.
Oppsummering av ildsted/skorstein innvendig i boligen TG-2
Anbefalte tiltak / ytterligere undersøkelser anbefales
Pipa er innkledd mot garderoberom (TG 2)
Det må påregnes vedlikehold av utvendig kledning. Enkelte kledningsbord bør

---

[d104_d104 | Side [1]]

Skjevheter i gulv er ikke uvanlig for eldre boliger, og skyldes erfaringsmessig underdimensjonering/
ujevn dimensjonering av materialer.
TG 2 gis med bakgrunn i standardens krav til godkjente måleavvik.
Avtrekk
Type avtrekk Omluftsvifte (kullfilter)
Lille Damsgårdsveien 37 A, 5162 Laksevåg 10 av 18 Lille Damsgårdsveien 37 A, 5162 Laksevåg 11 av 18
50 51

## Side 27

Oppsummering av avtrekk TG-2 Oppsummering av avløpsrør TG-1
Kullfilter uten direkte avsug til det fri. Lufting av kloakk over tak er ikke

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R01",
      "description": "Rotteproblemer i kjeller – gjentatte tilfeller i 2017 og 2022",
      "evidence": [
        "Har vært rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i mur murt igjen både innenfra og fra utsiden.",
        "Har vært rotter i kjeller tidlig vinter 2022. Problem fjernet.",
        "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R02",
      "description": "Balkong mangler byggesøknad/tillatelse – søknad foreligger ikke i kommunens arkiver",
      "evidence": [
        "Det gjøres oppmerksom på at balkongen er tegnet inn på seksjoneringen som er stemplet og tinglyst, men søknaden for oppføringen av balkongen foreligger ikke i kommunens arkiver."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R03",
      "description": "Balkong har svak fuktsikring av dekke og for lav dørterskel med fare for fuktinnsig – TG2. Tiltak er planlagt: heve dør 50 mm, nytt beslag, støpe nytt fall mot sluk og legge 2 lag utemembran.",
      "evidence": [
        "Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.",
        "Balkong på grunn av svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.",
        "Fjerne alt som er løst på oversiden av balkongen, demontere eksisterende balkong dør, heve døren 50 mm, fjerne kledningsbord på oversiden og under balkongen som har fått skader etter vann, legge på nytt beslag, støpe nytt fall utover mot sluk, ha på ute primer, ha på 2 lag med utemembran, tilbakeføre dør."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.97
    },
    {
      "risk_id": "R04",
      "description": "Rekkverk på balkong har lavere høyde enn dagens forskriftskrav – avvik bekreftet ved befaring",
      "evidence": [
        "Rekkverk har høyde som er lavere enn dagens forskriftskrav, men tilfredsstiller krav på oppføringstidspunktet.",
        "Er det avvik på rekkverkshøyde og åpninger i rekkverket i forhold til gjeldene byggteknisk forskrift på befaringstidspunktet? Ja"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R05",
      "description": "Yttervegger har slitasje og svak ventilering – TG2. Kledning buler og har vedlikeholdsetterslep. Anbefalt kontroll av veggkonstruksjon bak kledning rundt balkongfeste.",
      "evidence": [
        "Yttervegger TG 2 pga slitasje og svak ventilering.",
        "Registreres noen skjevheter i kledning og stedvis svak innfesting (kledning buler ute enkelte steder). Kledning fremstår noe slitt med vedlikeholdsetterslep.",
        "Er det liten eller ingen lufting av kledningen? Ja",
        "Enkelte kledningsbord bør erstattes samt det anbefales å kontrollere veggkonstruksjon bak kledning rundt innfesting av balkonger i fasade med hensyn til fuktskader."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R06",
      "description": "Elektrisk anlegg mangler dokumentasjon – ingen samsvarserklæring for arbeid etter 01.01.1999 og kursfortegnelse ikke oppdatert",
      "evidence": [
        "Elektrisk på grunn av manglende dokumentasjon. Det er ikke fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999.",
        "Kursfortegnelse er ikke oppdatert og ikke i samsvar med antall sikringer."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R07",
      "description": "Soverom 2 mangler dokumentasjon på godkjent planløsning fra kommunen – kjøper påtar seg risiko for offentlige pålegg",
      "evidence": [
        "Megler har forsøkt å finne ut om soverom 2 er godkjent, men det foreligger ingen dokumentasjon fra kommunen på leilighetens planløsning. Kjøper påtar seg risikoen og eventuelle pålegg fra offentlige myndigheter."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R08",
      "description": "Loft ikke undersøkt (TG-IU) – ingen tilkomst, tilstand ukjent. Tilhører annen seksjon og er derfor ikke kontrollert.",
      "evidence": [
        "Loft (konstruksjonsoppbygging) TG-IU pga ingen tilkomst.",
        "Tilgjengelighet: Ikke tilgjengelig",
        "TIlhører annen seksjon og er derfor ikke kontrollert."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R09",
      "description": "Pipe innkledd mot garderoberom – TG2, anbefales kontroll av brann- og feiervesen",
      "evidence": [
        "Ildsted/skorstein innvendig i boligen TG-2 pga innkledd pipe mot garderoberom.",
        "Pipa er innkledd mot garderoberom (TG 2). Det må påregnes vedlikehold av utvendig kledning.",
        "Med bakgrunn i påviste avvik og for en vurdering av eventuelle tiltak anbefales en ytterligere kontroll av pipa/ildsteder utført av brann- og feiervesen."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R10",
      "description": "Ventilasjon er svak – kullfilter uten direkte avsug til det fri på kjøkken, TG2. Mekanisk avtrekk anbefales etablert.",
      "evidence": [
        "Ventilasjon TG 2 pga noe svak ventilering.",
        "Kjøkken på grunn av svak ventilering. Kullfilter uten direkte avsug til det fri.",
        "Oppsummering av avtrekk TG-2. Kullfilter uten direkte avsug til det fri.",
        "Det anbefales å etablere mekanisk avtrekk. Det presiseres at det bør avklares med sameiet/borettslaget om muligheten for dette."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.92
    },
    {
      "risk_id": "R11",
      "description": "Bad har TG2 på grunn av alder – membran, tettesjikt og sluk kan ha begrenset restlevetid. Avvik i høydeforskjell på tettesjikt/fall til sluk bekreftet.",
      "evidence": [
        "Våtrom: Bad TG 2 pga alder.",
        "Membran, tettesjikt og sluk bad på grunn av alder.",
        "Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja",
        "Ikke behov for akutte tiltak."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R12",
      "description": "Tidligere lekkasje på bad (2015) – forsikringssak, bad totalrehabilitert av Årstad bygg og Svalland Comfort",
      "evidence": [
        "Lekkasje på bad våren 2015. Forsikringssak som gikk via vår husforsikring i Tryg. Badet ble total rehabilitert fra bunn og nytt rørsystem installert.",
        "Rehabliteringsjobben ble utført av Årstad bygg, selve rør arbeidet av Svalland Comfort."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R13",
      "description": "Etasjeskille og gulv har TG2 – avvik fra godkjente måleavvik, skjevheter ikke uvanlig for eldre bolig",
      "evidence": [
        "Etasjeskille og gulv på grunn TG 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
        "Skjevheter i gulv er ikke uvanlig for eldre boliger, og skyldes erfaringsmessig underdimensjonering/ujevn dimensjonering av materialer."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.85
    },
    {
      "risk_id": "R14",
      "description": "Kjeller har fuktig inneklima – TG2. Ikke fremvist ved befaring – rapport må suppleres med ettersendt dokumentasjon.",
      "evidence": [
        "Kjeller under terreng TG 2 pga fuktig inneklima.",
        "Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R15",
      "description": "Eiendommen ligger i uregulert område avsatt til sentrumsformål i KPA 2018 – KPA-bestemmelser sluttføres med bystyrevedtak i Q1 2027, fremtidig regulering kan påvirke bruken",
      "evidence": [
        "Eiendommen ligger i et uregulert område, men er i kommuneplanens arealdel 2018 avsatt til sentrumsformål.",
        "KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R16",
      "description": "Nærliggende reguleringsplan for Laksevåg verftsområde (PlanID 64940000) – kan medføre utfylling i sjø og bymessig bebyggelse i nærheten",
      "evidence": [
        "PlanID: 64940000. Laksevåg/Bergenhus. Gnr 153 Bnr 1, Laksevåg verftsområde 2. Planen skal legge til rette for utfylling i sjø, samt omdanning av verftsområdet til sentrumsformål med bymessig bebyggelse."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R17",
      "description": "Nærliggende rammetillatelse for stort boligbygg på 3 og 4 etasjer (eiendom 153/271, saksnr 202415914, datert 23.09.2025) – kan påvirke sol, utsikt og nærområde",
      "evidence": [
        "Eiendom 153/271. Ombygging. Stort frittliggende boligbygg på 3 og 4 etg., rammetillatelse datert 23.09.2025. Saksnr: 202415914"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R18",
      "description": "Legalpant – kommunen og sameiet har legalpant i seksjonen med prioritet foran tinglyste lån",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R19",
      "description": "Selgers egenerklæring ikke gjennomgått av bygningssakkyndig – svekker kvalitetssikringen av selgers opplysninger",
      "evidence": [
        "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R20",
      "description": "Vannrøropplegg har ukjent alder – kun antatt oppgradert i forbindelse med badrehabilitering i 2015",
      "evidence": [
        "Ukjent alder. Man kan kun anta at røropplegg er oppgradert ifm bad i 2015.",
        "Er det utført arbeider på anlegget etter byggeår? Ja"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R21",
      "description": "Avløpsrør under bakken er ikke vurdert – ukjent tilstand på fellesanlegg som er sameiets ansvar",
      "evidence": [
        "Avløpsrør fra leiligheten og ut til offentlig kloakk eller septik ligger under bakken og er ikke vurdert.",
        "Kontrollen er avgrenset til innvendig i leiligheten, og kontrollen stopper ved sluket/etasjeskille.",
        "Resterende avløpsanlegg er sameiet / borettslaget sitt ansvar."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R22",
      "description": "Boligen er fra 1920 – høy alder medfører generell risiko for skjulte feil og behov for løpende vedlikehold",
      "evidence": [
        "Byggeår: 1920 - Kilde: Eiendomsverdi",
        "Alle bygningsdeler er under vedvarende aldring. I mange tilfeller kan levetid i praksis være både kortere og lengre enn hva som oppgis under tabeller for forventet brukstid og «levealder» for bygningsdeler."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R23",
      "description": "Energimerke G (oransje energifarge) – svært dårlig energieffektivitet, kan medføre høye oppvarmingskostnader",
      "evidence": [
        "Energikarakter: G",
        "Energifarge: Oransje"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R24",
      "description": "Radonmåling ikke utført – ukjent radoneksponering i boligen",
      "evidence": [
        "Er det foretatt radonmåling? Nei"
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R25",
      "description": "Eiendommen ligger i konsesjonsområde for fjernvarme (Eviny Termo AS) – kan begrense valg av oppvarmingsløsning",
      "evidence": [
        "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R26",
      "description": "NY RISIKO: Balkong har dokumenterte vannskader på kledningsbord – tiltak er planlagt men ikke nødvendigvis utført på salgstidspunktet",
      "evidence": [
        "Fjerne kledningsbord på oversiden og under balkongen som har fått skader etter vann, legge på nytt beslag, støpe nytt fall utover mot sluk, ha på ute primer, ha på 2 lag med utemembran.",
        "Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R27",
      "description": "NY RISIKO: Ferdigattest/brukstillatelse – søkt før 01.01.1998, ferdigattest kan ikke utstedes. Kjøper påtar seg risiko for fortsatt bruk og eventuelle offentlige pålegg.",
      "evidence": [
        "Det er søkt før 01.01.1998. Det vil dermed ikke være mulig å be om ferdigattest for slike tiltak. Dette betyr ikke at tiltak blir lovlige, men at saken ikke lenger kan avsluttes med ferdigattest. Kjøper påtar seg risikoen for fortsatt bruk av boligen, samt eventuelle pålegg fra offentlige myndigheter."
      ],
      "source_documents": [
        "d104_d104"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    }
  ],
  "re_retrieval_queries": [
    "balkong tiltak utført ferdigstilt status",
    "kjeller fuktig inneklima ettersendt dokumentasjon rapport",
    "soverom 2 godkjenning bruksendring kommunen",
    "elektrisk anlegg el-kontroll samsvarserklæring dokumentasjon",
    "ferdigattest brukstillatelse manglende godkjenning",
    "skjeggkre sameie fellesareal",
    "fellesgjeld sameie vedlikeholdsplan oppsparing",
    "stikkledninger vann avløp privat ansvar sameie"
  ],
  "reasoning": "\nGjennomgang av alle 25 opprinnelige risikoer mot dokumentevidensen:\n\n**Justerte risikoer:**\n\nR03 (Balkong fuktsikring): Confidence justert OPP fra 0.95 til 0.97 fordi dokumentene også inneholder konkret beskrivelse av planlagte utbedringstiltak (heve dør 50 mm, nytt beslag, 2 lag utemembran), noe som bekrefter alvoret i avviket. Beskrivelsen er oppdatert for å inkludere tiltaksinformasjonen.\n\nR05 (Yttervegger): Confidence justert OPP fra 0.90 til 0.92 fordi dokumentene eksplisitt anbefaler kontroll av veggkonstruksjon bak kledning rundt balkongfeste – dette er et tilleggselement som styrker risikoen.\n\nR08 (Loft TG-IU): Confidence justert NED fra 0.85 til 0.80 fordi dokumentene presiserer at loftet tilhører annen seksjon og derfor ikke er kontrollert – dette er en viktig nyanse som reduserer direkte relevans for kjøper av denne seksjonen, men ukjent tilstand er fortsatt en risiko.\n\nR14 (Kjeller fuktig): Confidence justert OPP fra 0.85 til 0.88 fordi dokumentene eksplisitt sier at kjelleren ikke ble fremvist ved befaring og at dokumentasjon må ettersendes – dette er en ekstra usikkerhetsfaktor.\n\nR18 (Legalpant): Confidence justert NED fra 0.85 til 0.88 (beholdt høy) fordi evidensen er svært klar og detaljert med prioritetsrekkefølge.\n\nR19 (Egenerklæring ikke gjennomgått): Beholdt, men confidence justert ned fra 0.80 til 0.80 – evidensen er klar (direkte svar \"Nei\"), men risikoen er noe begrenset da tilstandsrapporten uansett er utarbeidet av bygningssakkyndig.\n\n**Nye risikoer identifisert:**\n\nR26 (Balkong vannskader på kledningsbord): Dokumentene beskriver eksplisitt at kledningsbord på balkong har fått vannskader og må erstattes. Dette er en konkret, dokumentert skade som ikke var eksplisitt skilt ut som egen risiko (var delvis dekket av R03, men fortjener egen omtale).\n\nR27 (Ferdigattest kan ikke utstedes): Dokumentene inneholder en klar advarsel om at det er søkt før 01.01.1998 og at ferdigattest ikke kan utstedes. Kjøper påtar seg risiko for offentlige pålegg. Dette er en selvstendig juridisk/regulatorisk risiko som ikke var identifisert i den opprinnelige listen.\n\n**Risikoer som vurderes tilstrekkelig dokumentert og beholdes uendret:**\nR01, R02, R04, R06, R07, R09, R10, R11, R12, R13, R15, R16, R17, R20, R21, R22, R23, R24, R25.\n\n**Manglende informasjon som bør undersøkes videre:**\n- Status på planlagte balkong-tiltak: Er de faktisk utført før salg?\n- Kjeller: Er ettersendt dokumentasjon mottatt og godkjent?\n- Soverom 2: Nærmere avklaring av lovlighetsstatusen\n- Skjeggkre: Spørsmål 28 i egenerklæringen er besvart, men svaret fremgår ikke tydelig av de fremlagte dokumentchunkene\n- Fellesgjeld/vedlikeholdsplan i sameiet: Ikke omtalt i fremlagte chunks\n- El-kontroll: Om det er utført periodisk el-kontroll (utover samsvarserklæring)\n"
}

## Raw Response
```json
{
  "id": "msg_01Uo3mnCnZCuXTLb25Qar8bR",
  "container": null,
  "content": [
    {
      "id": "toolu_013eYb5ecXPBUm3zvHvCm3cC",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R01",
            "description": "Rotteproblemer i kjeller – gjentatte tilfeller i 2017 og 2022",
            "evidence": [
              "Har vært rotter i kjeller tidlig vinter 2017. Feller ble satt ut. Hull i mur murt igjen både innenfra og fra utsiden.",
              "Har vært rotter i kjeller tidlig vinter 2022. Problem fjernet.",
              "Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr på eiendommen som rotter, mus, maur eller lignende? Ja"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R02",
            "description": "Balkong mangler byggesøknad/tillatelse – søknad foreligger ikke i kommunens arkiver",
            "evidence": [
              "Det gjøres oppmerksom på at balkongen er tegnet inn på seksjoneringen som er stemplet og tinglyst, men søknaden for oppføringen av balkongen foreligger ikke i kommunens arkiver."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R03",
            "description": "Balkong har svak fuktsikring av dekke og for lav dørterskel med fare for fuktinnsig – TG2. Tiltak er planlagt: heve dør 50 mm, nytt beslag, støpe nytt fall mot sluk og legge 2 lag utemembran.",
            "evidence": [
              "Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.",
              "Balkong på grunn av svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig.",
              "Fjerne alt som er løst på oversiden av balkongen, demontere eksisterende balkong dør, heve døren 50 mm, fjerne kledningsbord på oversiden og under balkongen som har fått skader etter vann, legge på nytt beslag, støpe nytt fall utover mot sluk, ha på ute primer, ha på 2 lag med utemembran, tilbakeføre dør."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.97
          },
          {
            "risk_id": "R04",
            "description": "Rekkverk på balkong har lavere høyde enn dagens forskriftskrav – avvik bekreftet ved befaring",
            "evidence": [
              "Rekkverk har høyde som er lavere enn dagens forskriftskrav, men tilfredsstiller krav på oppføringstidspunktet.",
              "Er det avvik på rekkverkshøyde og åpninger i rekkverket i forhold til gjeldene byggteknisk forskrift på befaringstidspunktet? Ja"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R05",
            "description": "Yttervegger har slitasje og svak ventilering – TG2. Kledning buler og har vedlikeholdsetterslep. Anbefalt kontroll av veggkonstruksjon bak kledning rundt balkongfeste.",
            "evidence": [
              "Yttervegger TG 2 pga slitasje og svak ventilering.",
              "Registreres noen skjevheter i kledning og stedvis svak innfesting (kledning buler ute enkelte steder). Kledning fremstår noe slitt med vedlikeholdsetterslep.",
              "Er det liten eller ingen lufting av kledningen? Ja",
              "Enkelte kledningsbord bør erstattes samt det anbefales å kontrollere veggkonstruksjon bak kledning rundt innfesting av balkonger i fasade med hensyn til fuktskader."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R06",
            "description": "Elektrisk anlegg mangler dokumentasjon – ingen samsvarserklæring for arbeid etter 01.01.1999 og kursfortegnelse ikke oppdatert",
            "evidence": [
              "Elektrisk på grunn av manglende dokumentasjon. Det er ikke fremlagt samsvarserklæring på elektrisk arbeid/anlegg montert etter 01.01.1999.",
              "Kursfortegnelse er ikke oppdatert og ikke i samsvar med antall sikringer."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R07",
            "description": "Soverom 2 mangler dokumentasjon på godkjent planløsning fra kommunen – kjøper påtar seg risiko for offentlige pålegg",
            "evidence": [
              "Megler har forsøkt å finne ut om soverom 2 er godkjent, men det foreligger ingen dokumentasjon fra kommunen på leilighetens planløsning. Kjøper påtar seg risikoen og eventuelle pålegg fra offentlige myndigheter."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R08",
            "description": "Loft ikke undersøkt (TG-IU) – ingen tilkomst, tilstand ukjent. Tilhører annen seksjon og er derfor ikke kontrollert.",
            "evidence": [
              "Loft (konstruksjonsoppbygging) TG-IU pga ingen tilkomst.",
              "Tilgjengelighet: Ikke tilgjengelig",
              "TIlhører annen seksjon og er derfor ikke kontrollert."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R09",
            "description": "Pipe innkledd mot garderoberom – TG2, anbefales kontroll av brann- og feiervesen",
            "evidence": [
              "Ildsted/skorstein innvendig i boligen TG-2 pga innkledd pipe mot garderoberom.",
              "Pipa er innkledd mot garderoberom (TG 2). Det må påregnes vedlikehold av utvendig kledning.",
              "Med bakgrunn i påviste avvik og for en vurdering av eventuelle tiltak anbefales en ytterligere kontroll av pipa/ildsteder utført av brann- og feiervesen."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R10",
            "description": "Ventilasjon er svak – kullfilter uten direkte avsug til det fri på kjøkken, TG2. Mekanisk avtrekk anbefales etablert.",
            "evidence": [
              "Ventilasjon TG 2 pga noe svak ventilering.",
              "Kjøkken på grunn av svak ventilering. Kullfilter uten direkte avsug til det fri.",
              "Oppsummering av avtrekk TG-2. Kullfilter uten direkte avsug til det fri.",
              "Det anbefales å etablere mekanisk avtrekk. Det presiseres at det bør avklares med sameiet/borettslaget om muligheten for dette."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.92
          },
          {
            "risk_id": "R11",
            "description": "Bad har TG2 på grunn av alder – membran, tettesjikt og sluk kan ha begrenset restlevetid. Avvik i høydeforskjell på tettesjikt/fall til sluk bekreftet.",
            "evidence": [
              "Våtrom: Bad TG 2 pga alder.",
              "Membran, tettesjikt og sluk bad på grunn av alder.",
              "Er det påvist avvik i krav om høydeforskjell på tettesjikt/fall til sluk? Ja",
              "Ikke behov for akutte tiltak."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R12",
            "description": "Tidligere lekkasje på bad (2015) – forsikringssak, bad totalrehabilitert av Årstad bygg og Svalland Comfort",
            "evidence": [
              "Lekkasje på bad våren 2015. Forsikringssak som gikk via vår husforsikring i Tryg. Badet ble total rehabilitert fra bunn og nytt rørsystem installert.",
              "Rehabliteringsjobben ble utført av Årstad bygg, selve rør arbeidet av Svalland Comfort."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R13",
            "description": "Etasjeskille og gulv har TG2 – avvik fra godkjente måleavvik, skjevheter ikke uvanlig for eldre bolig",
            "evidence": [
              "Etasjeskille og gulv på grunn TG 2 gis med bakgrunn i standardens krav til godkjente måleavvik.",
              "Skjevheter i gulv er ikke uvanlig for eldre boliger, og skyldes erfaringsmessig underdimensjonering/ujevn dimensjonering av materialer."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.85
          },
          {
            "risk_id": "R14",
            "description": "Kjeller har fuktig inneklima – TG2. Ikke fremvist ved befaring – rapport må suppleres med ettersendt dokumentasjon.",
            "evidence": [
              "Kjeller under terreng TG 2 pga fuktig inneklima.",
              "Ikke fremvist ved befaring. Må ettersendes for kontroll før rapport publiseres."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R15",
            "description": "Eiendommen ligger i uregulert område avsatt til sentrumsformål i KPA 2018 – KPA-bestemmelser sluttføres med bystyrevedtak i Q1 2027, fremtidig regulering kan påvirke bruken",
            "evidence": [
              "Eiendommen ligger i et uregulert område, men er i kommuneplanens arealdel 2018 avsatt til sentrumsformål.",
              "KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R16",
            "description": "Nærliggende reguleringsplan for Laksevåg verftsområde (PlanID 64940000) – kan medføre utfylling i sjø og bymessig bebyggelse i nærheten",
            "evidence": [
              "PlanID: 64940000. Laksevåg/Bergenhus. Gnr 153 Bnr 1, Laksevåg verftsområde 2. Planen skal legge til rette for utfylling i sjø, samt omdanning av verftsområdet til sentrumsformål med bymessig bebyggelse."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R17",
            "description": "Nærliggende rammetillatelse for stort boligbygg på 3 og 4 etasjer (eiendom 153/271, saksnr 202415914, datert 23.09.2025) – kan påvirke sol, utsikt og nærområde",
            "evidence": [
              "Eiendom 153/271. Ombygging. Stort frittliggende boligbygg på 3 og 4 etg., rammetillatelse datert 23.09.2025. Saksnr: 202415914"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R18",
            "description": "Legalpant – kommunen og sameiet har legalpant i seksjonen med prioritet foran tinglyste lån",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R19",
            "description": "Selgers egenerklæring ikke gjennomgått av bygningssakkyndig – svekker kvalitetssikringen av selgers opplysninger",
            "evidence": [
              "Er selgers egenerklæring fremlagt og gjennomgått av bygningssakkyndig? Nei"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R20",
            "description": "Vannrøropplegg har ukjent alder – kun antatt oppgradert i forbindelse med badrehabilitering i 2015",
            "evidence": [
              "Ukjent alder. Man kan kun anta at røropplegg er oppgradert ifm bad i 2015.",
              "Er det utført arbeider på anlegget etter byggeår? Ja"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R21",
            "description": "Avløpsrør under bakken er ikke vurdert – ukjent tilstand på fellesanlegg som er sameiets ansvar",
            "evidence": [
              "Avløpsrør fra leiligheten og ut til offentlig kloakk eller septik ligger under bakken og er ikke vurdert.",
              "Kontrollen er avgrenset til innvendig i leiligheten, og kontrollen stopper ved sluket/etasjeskille.",
              "Resterende avløpsanlegg er sameiet / borettslaget sitt ansvar."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R22",
            "description": "Boligen er fra 1920 – høy alder medfører generell risiko for skjulte feil og behov for løpende vedlikehold",
            "evidence": [
              "Byggeår: 1920 - Kilde: Eiendomsverdi",
              "Alle bygningsdeler er under vedvarende aldring. I mange tilfeller kan levetid i praksis være både kortere og lengre enn hva som oppgis under tabeller for forventet brukstid og «levealder» for bygningsdeler."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R23",
            "description": "Energimerke G (oransje energifarge) – svært dårlig energieffektivitet, kan medføre høye oppvarmingskostnader",
            "evidence": [
              "Energikarakter: G",
              "Energifarge: Oransje"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R24",
            "description": "Radonmåling ikke utført – ukjent radoneksponering i boligen",
            "evidence": [
              "Er det foretatt radonmåling? Nei"
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R25",
            "description": "Eiendommen ligger i konsesjonsområde for fjernvarme (Eviny Termo AS) – kan begrense valg av oppvarmingsløsning",
            "evidence": [
              "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R26",
            "description": "NY RISIKO: Balkong har dokumenterte vannskader på kledningsbord – tiltak er planlagt men ikke nødvendigvis utført på salgstidspunktet",
            "evidence": [
              "Fjerne kledningsbord på oversiden og under balkongen som har fått skader etter vann, legge på nytt beslag, støpe nytt fall utover mot sluk, ha på ute primer, ha på 2 lag med utemembran.",
              "Balkong, terrasse, platting TG 2 pga svak fuktsikring av dekke og for lav høyde på dørterskel med fare for fuktinnsig."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R27",
            "description": "NY RISIKO: Ferdigattest/brukstillatelse – søkt før 01.01.1998, ferdigattest kan ikke utstedes. Kjøper påtar seg risiko for fortsatt bruk og eventuelle offentlige pålegg.",
            "evidence": [
              "Det er søkt før 01.01.1998. Det vil dermed ikke være mulig å be om ferdigattest for slike tiltak. Dette betyr ikke at tiltak blir lovlige, men at saken ikke lenger kan avsluttes med ferdigattest. Kjøper påtar seg risikoen for fortsatt bruk av boligen, samt eventuelle pålegg fra offentlige myndigheter."
            ],
            "source_documents": [
              "d104_d104"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          }
        ],
        "re_retrieval_queries": [
          "balkong tiltak utført ferdigstilt status",
          "kjeller fuktig inneklima ettersendt dokumentasjon rapport",
          "soverom 2 godkjenning bruksendring kommunen",
          "elektrisk anlegg el-kontroll samsvarserklæring dokumentasjon",
          "ferdigattest brukstillatelse manglende godkjenning",
          "skjeggkre sameie fellesareal",
          "fellesgjeld sameie vedlikeholdsplan oppsparing",
          "stikkledninger vann avløp privat ansvar sameie"
        ],
        "reasoning": "\nGjennomgang av alle 25 opprinnelige risikoer mot dokumentevidensen:\n\n**Justerte risikoer:**\n\nR03 (Balkong fuktsikring): Confidence justert OPP fra 0.95 til 0.97 fordi dokumentene også inneholder konkret beskrivelse av planlagte utbedringstiltak (heve dør 50 mm, nytt beslag, 2 lag utemembran), noe som bekrefter alvoret i avviket. Beskrivelsen er oppdatert for å inkludere tiltaksinformasjonen.\n\nR05 (Yttervegger): Confidence justert OPP fra 0.90 til 0.92 fordi dokumentene eksplisitt anbefaler kontroll av veggkonstruksjon bak kledning rundt balkongfeste – dette er et tilleggselement som styrker risikoen.\n\nR08 (Loft TG-IU): Confidence justert NED fra 0.85 til 0.80 fordi dokumentene presiserer at loftet tilhører annen seksjon og derfor ikke er kontrollert – dette er en viktig nyanse som reduserer direkte relevans for kjøper av denne seksjonen, men ukjent tilstand er fortsatt en risiko.\n\nR14 (Kjeller fuktig): Confidence justert OPP fra 0.85 til 0.88 fordi dokumentene eksplisitt sier at kjelleren ikke ble fremvist ved befaring og at dokumentasjon må ettersendes – dette er en ekstra usikkerhetsfaktor.\n\nR18 (Legalpant): Confidence justert NED fra 0.85 til 0.88 (beholdt høy) fordi evidensen er svært klar og detaljert med prioritetsrekkefølge.\n\nR19 (Egenerklæring ikke gjennomgått): Beholdt, men confidence justert ned fra 0.80 til 0.80 – evidensen er klar (direkte svar \"Nei\"), men risikoen er noe begrenset da tilstandsrapporten uansett er utarbeidet av bygningssakkyndig.\n\n**Nye risikoer identifisert:**\n\nR26 (Balkong vannskader på kledningsbord): Dokumentene beskriver eksplisitt at kledningsbord på balkong har fått vannskader og må erstattes. Dette er en konkret, dokumentert skade som ikke var eksplisitt skilt ut som egen risiko (var delvis dekket av R03, men fortjener egen omtale).\n\nR27 (Ferdigattest kan ikke utstedes): Dokumentene inneholder en klar advarsel om at det er søkt før 01.01.1998 og at ferdigattest ikke kan utstedes. Kjøper påtar seg risiko for offentlige pålegg. Dette er en selvstendig juridisk/regulatorisk risiko som ikke var identifisert i den opprinnelige listen.\n\n**Risikoer som vurderes tilstrekkelig dokumentert og beholdes uendret:**\nR01, R02, R04, R06, R07, R09, R10, R11, R12, R13, R15, R16, R17, R20, R21, R22, R23, R24, R25.\n\n**Manglende informasjon som bør undersøkes videre:**\n- Status på planlagte balkong-tiltak: Er de faktisk utført før salg?\n- Kjeller: Er ettersendt dokumentasjon mottatt og godkjent?\n- Soverom 2: Nærmere avklaring av lovlighetsstatusen\n- Skjeggkre: Spørsmål 28 i egenerklæringen er besvart, men svaret fremgår ikke tydelig av de fremlagte dokumentchunkene\n- Fellesgjeld/vedlikeholdsplan i sameiet: Ikke omtalt i fremlagte chunks\n- El-kontroll: Om det er utført periodisk el-kontroll (utover samsvarserklæring)\n"
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
    "input_tokens": 17305,
    "output_tokens": 6521,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
