# Trace: agentic_reflecting_iter1
- **Run ID:** 1d543ecf-84ab-425b-9cf5-b83b62be74f9
- **Tidspunkt:** 2026-03-25T03:22:49.475298+00:00
- **Varighet:** 120.38s
- **Input tokens:** 22856
- **Output tokens:** 6047

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
Risiko 1: Ulovlig bruksendring fra 1986 – ikke omsøkt eller formelt godkjent. Forholdet ble avdekket etter kjøp i 2019 og er først brakt i orden i 2026 med ferdigattest og godkjent reseksjonering.
  Confidence: 0.95
  Evidens: Leiligheten ble kjøpt i 2019 og benyttet som fast bolig. I ettertid ble det avdekket at bruksendringen fra 1986 ikke var omsøkt eller formelt godkjent.; Forholdet er nå brakt i orden, og det foreligger ferdigattest samt godkjent reseksjonering fra 2026.; Som følge av dette måtte jeg flytte ut i den aktuelle perioden.

Risiko 2: Reseksjonering gjennomført så sent som januar 2026 – eiendommens juridiske status har vært uklar frem til nylig, og kjøper bør undersøke om alle forhold er korrekt registrert.
  Confidence: 0.9
  Evidens: Tinglyst 16.01.2026 – Dokumentnr: 59412 – Reseksjonering Snr: 1 Formål: Bolig Sameiebrøk: 17/100; De delene av underetasjen som tidligere var fellesareal, tillegges seksjonsnummer 1 som del av denne.; leiligheten ble reseksjonert i 2026

Risiko 3: Fuktproblematikk i rom under terreng (kjeller/underetasje) – konstruksjoner mot terreng er ikke undersøkt (TGIU), og det er gjort tidligere utbedringstiltak av ukjent kvalitet.
  Confidence: 0.92
  Evidens: Bakre del av boligen har vegger mot terreng. Det er av tidligere eier foretatt utbedring.; Mot grunnmuren er det innvendig montert grunnmursplate. Mot grunnmursplaten oppmurt vegg i Leca rehab-blokk. Veggene er senere smurt med sementbasert membran.; Innvendig > Rom Under Terreng – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT); Våtrom > Kjeller > Bad 4m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT); Våtrom > Kjeller > Vaskerom 4,7m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)

Risiko 4: Etasjeskille/gulv mot grunn er vurdert med TG2 – vesentlig avvik som kan kreve tiltak. Høydeforskjeller er påvist.
  Confidence: 0.88
  Evidens: Bygningsdeler vurdert med TG2: Etasjeskille/gulv mot grunn grunnet høydeforskjell.; Innvendig > Etasjeskille/gulv mot grunn – Gå til side (AVVIK SOM KAN KREVE TILTAK); må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.

Risiko 5: Varmtvannstank er vurdert med TG2 – ikke påvist tilfredsstillende el-tilkobling av varmtvannstank i henhold til gjeldende forskrift.
  Confidence: 0.9
  Evidens: Bygningsdeler vurdert med TG2: Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift.; Tekniske installasjoner > Varmtvannstank – Gå til side (AVVIK SOM KAN KREVE TILTAK)

Risiko 6: Utbedringskostnader over kr 500 000 er anslått i tilstandsrapporten – dette indikerer alvorlige avvik (TG3) med potensielt store kostnader for kjøper.
  Confidence: 0.85
  Evidens: Tiltak over kr 500 000; Anslag på utbedringskostnad: Tiltak under kr 20 000 / Tiltak mellom kr 20 000 – 100 000 / Tiltak mellom kr 100 000 – 200 000 / Tiltak mellom kr 200 000 – 500 000 / Tiltak over kr 500 000

Risiko 7: Eldre bygg fra 1936 med teglpipe fra byggeår – begrenset kontroll av pipen da den går gjennom flere etasjer/boliger. Risiko for skjulte skader.
  Confidence: 0.82
  Evidens: Teglpipe fra byggeår. Pipeløpet er rørfornyet.; Begrenset kontroll av pipen da den går gjennom flere etasjer/boliger.; Byggeår: 1936

Risiko 8: Tinglyste heftelser fra 1939 med bestemmelser om bebyggelse, vann/kloakkledning og rettigheter for naboeiendommer – kan begrense fremtidig bruk og utbygging.
  Confidence: 0.87
  Evidens: Tinglyst 29.06.1939 – Dokumentnr: 402856 – Rettigheter iflg. skjøte, Bestemmelse om bebyggelse, Bestemmelse om vann/kloakkledning; RETTIGHETSHAVER: LAKSEVÅG MASKIN OG JERNSKIBSBYGGERI AS; Selgeren forbeholder sig og senere ervhervere av gr.nr. 53 br.nr. 234, rett til å anlegge vann-, gass- og kloakkledninger over den solgte parsell; På eiendommen kan kun opføres 1 – et – hus for beboelse.

Risiko 9: Eiendommen ligger i uregulert område, men er avsatt til byfortettningssone i kommuneplanens arealdel. Pågående revisjon av KPA-bestemmelsene kan medføre endringer i tillatt bruk og bebyggelse.
  Confidence: 0.8
  Evidens: Eiendommen ligger i uregulert område men er i henhold til kommuneplanens arealdel 2018 datert 19.06.2019, avsatt til byfortettningssone.; PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.

Risiko 10: Planlagte infrastrukturprosjekter i nærheten – konsekvensutredning for bybane og gang-/sykkelbro mellom Dokken og Laksevåg er lagt ut på høring. Kan medføre anleggsarbeid, støy og endringer i nærområdet.
  Confidence: 0.75
  Evidens: Bergen kommune har fått utarbeidet konsekvensutredning for bybanetrasé mellom Dokken og Lyngbø, og for gang- og sykkelbro mellom Dokken og indre Laksevåg.; Byrådet har i møte 10.03.2026 fattet vedtak om å legge konsekvensutredning for Bybanen og konsekvensutredning for gang- og sykkelbro på høring.

Risiko 11: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg – kan medføre tilknytningsplikt eller kostnader knyttet til fjernvarme.
  Confidence: 0.72
  Evidens: Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg.

Risiko 12: Legalpant – kommunen og sameiet har legalpant i eiendommen som ikke fremgår av grunnboken, og som har prioritet foran tinglyste lån. Kommunens legalpant har høyere prioritet enn sameiets.
  Confidence: 0.88
  Evidens: Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.; De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.; Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.; Legalpant til kommunen har høyere prioritet enn legalpant til sameiet.

Risiko 13: Energimerking E – boligen har dårlig energikarakter, noe som kan medføre høye oppvarmingskostnader og behov for energioppgradering.
  Confidence: 0.8
  Evidens: ENERGIMERKING: E – Ikke angitt

Risiko 14: El-anlegget er delvis utført på egeninnsats (trekking av rør) – dette kan innebære risiko for avvik fra gjeldende forskrifter og potensielle sikkerhetsproblemer.
  Confidence: 0.82
  Evidens: Alt arbeid er utført av fagfolk, bortsett fra trekking av rør som er gjort på egeninnsats. Arbeid utført av Sæterdal Elektro AS.

Risiko 15: Eiendommen ligger i kulturmiljøhensyne sone (Historiske senter Laksevåg) – kan medføre restriksjoner på fremtidige bygningsmessige endringer og rehabilitering.
  Confidence: 0.78
  Evidens: Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø. Historiske senter Laksevåg, berøringsgrad 100%

Risiko 16: Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet – uforutsette kostnader til vedlikehold og reparasjon kan oppstå.
  Confidence: 0.75
  Evidens: Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.

Risiko 17: Terrassen utenfor leiligheten er fellesareal – kjøper får ikke eksklusiv bruksrett til uteplassen, noe som kan oppleves som en begrensning.
  Confidence: 0.85
  Evidens: Fliselagt terrasse utenfor leiligheten er felles arealer.

Dokumentkontekst:
[d126_d126 | Side [1]]
e.
Tinglyste heftelser
Eiendommen befinner seg innenfor følgende henyssoner: Tinglyste heftelser og rettigheter: På eiendommen er det
‑ Kulturmiljø. Historiske senter Laksevåg, berøringsgraf tinglyst følgende heftelser og rettigheter som følger
100% eiendommens matrikkel ved overskjøting til ny
hjemmelshaver:
Eiendommen ligger i følgende bestemmelsesområder:
‑ Byggegrense, utb. volum, funksjonskrav, berøringsgrad Tinglyst 29.06.1939 ‑ Dokumentnr: 402856 ‑ Rettigheter
100% iflg. skjøte, Bestemmelse om

---

[d126_d126 | Side [1]]
t har hos eiendomsmegler før budet legges inn. Kontakt
legalpant på inntil 2G som sikkerhet for krav knyttet til eiendomsmegler for eventuelle spørsmål.
sameieforholdet, som felleskostnader. Legalpant er pant
som ikke vises i grunnboksutskriften, og har prioritet Selger leverer eiendommen i ryddig og rengjort stand.
foran tinglyste lån, for eksempel banklån på seksjonen.
Legalpant til kommunen har høyere prioritet enn
Kontrakts‑
legalpant til sameiet.
grunnlag
Vei, vann og avløp
Eiendommen er tilknyttet

---

[d126_d126 | Side [1]]
gen mangler fast installert
oppvarmingskilde, vil ikke dette bli inkludert i handelen.
36

## Side 37

OM EIENDOMMEN
For mer informasjon om reguleringsforhold, kontakt
Regulerings‑ og arealplaner megler eller søk på saksnummer, adresse eller gårds‑ og
Eiendommen ligger i uregulert område men er i henhold bruksnummer på Plan‑ og bygningsetatens hjemmeside.
til kommuneplanens arealdel 2018 datert 19.06.2019,
avsatt til byfortettningssone.
Tinglyste heftelser
Eiendommen befinner seg innenfor følgende

---

[d126_d126 | Side [1]]
il sameiet.
grunnlag
Vei, vann og avløp
Eiendommen er tilknyttet offentlig vann‑ og Overtakelse
avløpssystem. Stikkledningene fra eiendommen og ut til Tidspunkt for overtakelse avtales mellom kjøper og
det kommunale nettet er private, og selger.
vedlikeholdsansvaret for disse påhviler sameiet.
Adkomst til eiendommen skjer via offentlig vei.
Forsikring
Boligselgerforsikring: Selger har tegnet
Utleie boligselgerforsikring som dekker selgers ansvar etter
Adgang til utleie: Boligen kan leies ut i samsvar med

---

[d126_d126 | Side [1]]
deretasjen som tidligere var fellesareal, begrenset til inntil 2 ganger folketrygdens grunnbeløp.
tillegges seksjonsnummer 1 som del av denne.
Kjøper og selger er forpliktet til å signere den standard
Legalpant: Kommunen har legalpant som sikkerhet for kjøpekontrakten utarbeidet av Emera som en del av
betaling av kommunale avgifter og eventuell eiendomshandleren. Kjøpekontrakten kan gjennomgås
eiendomsskatt. De øvrige seksjonseierne i sameiet har hos eiendomsmegler før budet legges inn. Kontakt
legalpant

---

[d126_d126 | Side [1]]
fordres interessenter til å kontakte eiendomsmegler
Regelverk og generelle opplysninger eller egne rådgivere før de gir bud.
Boligen selges med det inventar og utstyr som i henhold
til gjeldende lover, forskrifter eller offentlige pålegg skal Slitasje og bruk
følge med eiendommen, jf. avhendingsloven § 3‑4. Det må også forventes at eiendommer som har vært i
Fastmonterte eller spesialtilpassede installasjoner og bruk, vil kunne ha tegn til slitasje og eventuelle skader.
innredning som anses som varig

---

[d126_d126 | Side [1]]
 eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper og selgers 
rettigheter og plikter ved overdragelse av fast eiendom og andeler i borettslag.

I henhold til avhl. § 3-4 skal eiendommen, når annet ikke er avtalt, overdras med innredninger og 
utstyr som etter lov, forskrift eller annet o昀昀entlig vedtak skal følge med. Det samme gjelder varig 
innredning og utstyr som enten er fastmontert eller er særskilt tilpasset bygningen, jf. avhl. § 3-5. 
Loven inneholder ingen detaljert oversikt

---

[d126_d126 | Side [1]]
rbehold i bud eller avtale på annen måte er 
inngått. Der intet annet er avtalt, vil løsøre og tilbehør medfølge slik dette fremkommer av avhl. § 3-4 
og § 3-5 og denne oversikt. 

Produkter og installasjoner som medfølger overdras uten noen form for garantier, utover eventuell 
gjenværende leverandørgaranti.

Dersom det er noe i nedenstående liste som ikke 昀椀nnes på eiendommen, vil det heller ikke medfølge.
1. HVITEVARER medfølger der dette er spesielt angitt i salgsoppgaven.
2. HELDEKKENDE

---

[d126_d126 | Side [1]]
AS sitt Rettet vedr. bnr.335 den 24.10.1996
konsesjonsområde for fjernvarmeanlegg.
37

## Side 38

om eiendommen
Tinglyst 16.01.2026 ‑ Dokumentnr: 59412 ‑ Reseksjonering I henhold til eierseksjonsloven § 31 er sameierne
Snr: 1 ansvarlige overfor sameiets kreditorer i forhold til sin
Formål: Bolig sameiebrøk. Ved manglende betaling av fellesutgifter har
Sameiebrøk: 17/ 100 sameiet legal panterett i den enkelte eierseksjon,
De delene av underetasjen som tidligere var fellesareal, begrenset til inntil 2

---

[d126_d126 | Side [1]]
oligbebyggelse.
Om tomten
Eiendommen ligger i rela琀椀vt skrånende terreng. Tomten er opparbeidet med støpt pla琀紀ng og trapp,
Tomten er felleseiendom.
Tinglyste/andre forhold
Felles sykkelbod bak bygget.
leiligheten ble reseksjonert i 2026
Fliselagt terrasse utenfor leiligheten er felles arealer.
Kilder og vedlegg
Dokumenter
Beskrivelse Dato Kommentar Status Sider Vedlagt
Ikke
Egenerklæring Nei
gjennomgå琀琀
Revisjoner
Versjon Ny versjon Kommentar
1 11.03.2026
For gyldighet på rapporten se forside
Oppdragsnr.:

---

[d126_d126 | Side [1]]
a rehab‑blokk.
Veggene er senere smurt med sementbasert membran. Husdyr: Dyrehold er tillat så lenge det ikke er sjenerende
Vegger er dels utlektet og platekledd for naboer.
Bygningsdeler vurdert med TG2: Forkjøpsrett: De har ikke forkjøpsrett i sameiet.
‑ Etasjeskille/ gulv mot grunn grunnet høydeforskjell.
‑ Varmtvannstank grunnet ikke påvist tilfredsstillende Styregodkjennelse: Det kreves ikke styregodkjenning av
el‑tilkobling av varmtvannstank iht. gjeldende forskrift. ny seksjonseier.
Bygningsdeler

---

[d126_d126 | Side [1]]
 i forbindelse med aksept av budet.
Utlegg:
Selger dekker utlegg i henhold til oppdragsavtalen. Disse
Hvitvasking er estimert til ca. kr 17 795,00, og omfatter vanligvis
Eiendomsmeglere er underlagt lov om hvitvasking, og er innhenting av informasjon fra kommunen, eventuell
blant annet forpliktet til å gjennomføre kundetiltak av forretningsfører, samt kopi av tinglyste dokumenter.
både selger og kjøper. Total kostnad ved salg til prisantydning: kr 111 250,00
Dette inkluderer både vederlag og stipulerte

---

[d126_d126 | Side [1]]
kumentnr: 402856 ‑ Rettigheter
100% iflg. skjøte, Bestemmelse om bebyggelse
Bestemmelse om vann/ kloakkledning
Planer i nærheten av eiendommen: RETTIGHETSHAVER:LAKSEVÅG MASKIN OG
‑ PlanID: 71740000. Kommuneplanens arealdel KPA 2027. JERNSKIBSBYGGERI AS
Bystyret legger til grunn at revisjon av Overført fra: Knr:4601 Gnr:153 Bnr:271
KPA‑bestemmelsene skal sluttføres med vedtak Bystyret Selgeren forbeholder sig og senere ervhervere av gr.nr.
i første kvartal 2027. Hovedmålet med revisjon av 53 br.nr. 234,

---

[d126_d126 | Side [1]]

20. BRANNSLUKNINGSAPPARAT, BRANNSLANGE og RØYKVARSLER medfølger der dette er påbudt. 
overtakelse og gjennomføring av salget.
Det er eier og brukers plikt til å se til at utstyret fore昀椀nnes på enhver eiendom. Hvis annet ikke er 
uttrykkelig avtalt, skal dette derfor alltid følge med ved salg av eiendom.
21. SAMTLIGE NØKLER til eiendommen som selger er i besittelse av skal overleveres kjøper på 
overtakelsen, herunder nøkler til eventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus

---

[d126_d126 | Side [1]]
ventuelle boder, uthus, garasjeportåpner e.l. Låses boder, uthus 
Ærlighet varer lengst Erfaring som gir resultater
e.l. med hengelås, skal lås og nøkler til disse medfølge. 
22. GARASJEHYLLER, bodhyller, lagringshyller og oppheng til bildekk medfølger såfremt de er 
Vi tror sterkt på åpenhet og ærlighet og gir ingen Vi sier det som det er – enkelt og greit – fordi vi
fastmontert.
urealistiske løfter eller forskjønnede beskrivelser. vet at det gir de beste resultatene. Erfaringen

vår bekrefter det,

---

[d126_d126 | Side [1]]
ergen, og By昀樀ellene.
Kort vei 琀椀l buss, stor skole, turterreng, store arbeidsplasser, sentrum, Fyllingsdalen, og
kjøpesentrene.
Adkomstvei
Eiendommen har adkomst via o昀昀entlig 琀椀l interne s琀椀kkveier
Tilknytning vann
Eiendommen er 琀椀lkny琀琀et o昀昀entlig vannforsyning via private s琀椀kkledninger.
Tilknytning avløp
Eiendommen er 琀椀lkny琀琀et o昀昀entlig avløpsne琀琀 via private s琀椀kkledninger.
Regulering
Eiendommen ligger i et område regulert 琀椀l boligbebyggelse.
Om tomten
Eiendommen ligger i rela琀椀vt skrånende

---

[d126_d126 | Side [1]]
tekst ekstrahert)

## Side 25

(Ingen tekst ekstrahert)

## Side 26

(Ingen tekst ekstrahert)

## Side 27

(Ingen tekst ekstrahert)

## Side 28

Plantegning

## Side 29

Plantegning

## Side 30

OM EIENDOMMEN

## Side 31

LILLE DAMSGÅRDSVEIEN 44A
OM EIENDOMMEN

## Side 32

OM EIENDOMMEN
Økonomi
Eiendomsskatt
Kr 4 278,‑ (2026)
Prisantydning
Kr 4 390 000 Informasjon om eiendomsskatt er innhentet fra Bergen
kommune. Oppgitt beløp er et estimat for hele året. Det
fakturerte beløpet kan avvike fra estimatet.

---

[d126_d126 | Side [1]]
ar vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i andre boliger)?
Nei Ja
Initialer selger: HAAA 3
54006230
:ecnerefer
tnemucoD
46

## Side 47

Tilleggskommentar
Leiligheten ble kjøpt i 2019 og benyttet som fast bolig. I ettertid ble det avdekket at bruksendringen fra 1986 ikke var omsøkt eller formelt
godkjent. Forholdet er nå brakt i orden, og det foreligger ferdigattest samt godkjent reseksjonering fra 2026. Som følge av dette måtte jeg flytte
ut i den aktuelle perioden.
Jeg bekrefter at

---

[d126_d126 | Side [1]]
ering,
murerarbeid, tømrerarbeid etc)?
Nei Ja
15 Er det nedgravd oljetank på eiendommen?
Nei Ja
16 Kjenner du til om det har vært utført arbeid på terrasse/garasje/tak/fasade?
Svar Ja, kun av faglært
Beskrivelse Utskifting av tak 2007
Arbeid utført av Fana Blikk
17 Selges eiendommen med utleiedel, leilighet, hybel eller tilsvarende?
Nei Ja
18 Kjenner du til om det er innredet/bruksendret/bygget ut i kjeller eller loft eller andre deler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte

---

[d126_d126 | Side [1]]
eler av boligen?
Nei Ja
19 Kjenner du til forslag eller vedtatte reguleringsplaner, andre planer, nabovarsel eller offentlige vedtak som kan medføre endringer i bruken av
eiendommen eller av dens omgivelser?
Nei Ja
20 Kjenner du til om det foreligger påbud/heftelser/krav/manglende tillatelser vedrørende eiendommen?
Nei Ja
21 Er det foretatt radonmåling?
Nei Ja
Beskrivelse Radonmaling ble påført i forbindelse med byggesaken. Ferdigattest fra 2026 foreligger.
21.1 Radonmåling
År 2025
Verdi 20 Bq/m3
22

---

[d126_d126 | Side [1]]
nfugen mellon vagg og tak samt ved gjennomføringer.
Teglpipe fra byggeår. Piopeløpet er rørfornyet.
Begrenset kontroll av pipen da den går gjennom
昀氀ere etasjer/boliger.
Ny peisovn montert i stuen.
Bakre del av boligen har vegger mot terreng.
Det er av 琀椀dligere eier foreta琀琀 utbedring.
Mot grunnmuren er det innvendig montert grunnmursplate.
Mot grunnmursplaten oppmurt vegg i Leca rehab-blokk.
Veggene er senere smurt med sementbasert membran.
Vegger er dels utlektet og platekledd.
Fuk琀昀orhold ble

---

[d126_d126 | Side [1]]
 mangler.
TILSTANDSGRAD 2, TG2: VESENTLIGE AVVIK OG MINDRE AVVIK SOM ETTER NS 3600 GIR TG 2
Bygningsdelen skal enten ha feil u琀昀ørelse, en skade eller symptomer på skade, sterk slitasje eller nedsa琀琀
funksjon. Graden gis når bygningsdelen trenger vedlikehold eller 琀椀ltak i nær frem琀椀d. Graden skal også brukes
når delen er gammel og det er grunn 琀椀l å varsle om faren for skader på grunn av alderen, eller når det er grunn
琀椀l å overvåke delen spesielt på grunn av fare for større skader eller

---

[d126_d126 | Side [1]]
speksjon og fuktmåling i
risikoutsa琀琀e konstruksjoner, primært i 琀椀lstøtende vegger 琀椀l bad, u琀昀orede
kjellervegger og eventuelt i oppforede kjellergulv.
• Normal slitasjegrad: Forventet nedsli琀椀ng av materiale i over昀氀aten som er
basert på enkle visuelle observasjoner. Kan vurderes sammen med
PERSONVERN
bygningsdelens alder.
• Forventet gjenværende bruks琀椀d: Anslå琀琀 琀椀d et byggverk eller en del av et iVerdi AS, bygningssakkyndig og taks琀昀oretaket behandler person-
byggverk fortsa琀琀 vil være tjenlig for

---

[d126_d126 | Side [1]]
琀椀d, det er grunn 琀椀l å varsle fare for skader på grunn av alder eller
overvåke spesielt på grunn av fare for større skade eller følgeskade. For
TILLEGGSUNDERSØKELSER
skjulte konstruksjoner vil alder i seg selv være et symptom som kan gi TG2.
For synlige konstruksjoner kan alder sammen med andre symptomer og
momenter gi TG2. Avvik under TG2 kan gis sjablongmessig anslag. E琀琀er avtale kan 琀椀lstandsanalysen utvides 琀椀l også å omfa琀琀e
琀椀lleggsundersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad

---

[d126_d126 | Side [1]]
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere mot
pusset opp eller endret, er det vik琀椀g å merke seg at fornyelse av
dagens regelverk. E琀琀er dagens regelverk vil disse kunne få avvik og/eller
over昀氀ater ikke nødvendigvis betyr at bygningsdeler under er
TG2 eller TG3 uten at det nødvendigvis er krav om at avviket utbedres.
forbedret.
De琀琀e kan gjelde sluk, te琀琀esjikt og fall på bad og vaskerom, forhold som
gjelder sikkerhet mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver

---

[d126_d126 | Side [1]]
琀椀dspunktet. Den
boligen ble bygget på kan være annerledes enn i dag. Bygninger bygningssakkyndige ser e琀琀er avvik som har betydning for og som
svekkes over 琀椀d, og utse琀琀es for slitasje blant annet på grunn av bruk reduserer boligens funksjon og verdi, og som kommer frem av forskri昀琀 琀椀l
og vær og vind. Mange boliger fornyes helt eller delvis, noen i 昀氀ere avhendingslova.
omganger, eller det oppføres 琀椀lbygg. Særlig for boliger som er
Noen bygningsdeler og forhold vil den bygningssakkyndige vurdere

---

[d126_d126 | Side [1]]
jonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og bygningens plassering på grunnen • bygningens
planløsning • bygningens innredning • løsøre slik som hvitevarer • utendørs svømmebasseng og pumpeanlegg • bygningens este琀椀kk og
arkitektur • bygningens lovlighet (bortse琀琀 fra bruksendringer, brannceller og forhold som åpenbart kan påvirke helse, miljø og sikkerhet) •
fellesarealer (med mindre boligeier har vedlikeholdsplikt for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller

---

[d126_d126 | Side [1]]
ve 琀椀ltak
TG3: Store eller alvorlige avvik
TG IU: Konstruksjoner som ikke er undersøkt
2
1.5
1
0.5
0
Hva er anslag på utbedringskostnad? Se side 4.
llatnA
Lille Damsgårdsveien 44 A, 5162 LAKSEVÅG AASEBØ TAKST AS
Gnr 153 - Bnr 271 Storebotn 10B
4601 BERGEN 5309 KLEPPESTØ
Sammendrag av boligens 琀椀lstand
Oppsummering av avvik
Vil du vite mer? Se på rommet eller bygningsdelen senere i
rapporten.
4Roms Leilighet.
KONSTRUKSJONER SOM IKKE ER UNDERSØKT
Innvendig > Rom Under Terreng Gå til side
Våtrom > Kjeller >

---

[d126_d126 | Side [1]]
skilt. Rom utenfor boenheten kan omdisponeres av
• Skadegjørere: Zoologiske eller biologiske skadegjørere, i hovedsak råte, bore琀琀slaget/sameiet og de琀琀e kan påvirke boligens BRA. Vær oppmerksom
sopp og skadedyr. på at NS 3940:2023 og eierseksjonsloven har ulik de昀椀nisjon av fellesareal.
Ved arealmåling gjelder NS 3940:2023 som de昀椀nerer fellesareal slik: “Delen
• Fuktsøk: Over昀氀atesøk med egnet søkeutstyr (fuk琀椀ndikator) eller visuelle av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l

---

[d126_d126 | Side [1]]
e av bygning som brukes av to eller 昀氀ere bruksenheter eller 琀椀l bygningens
observasjoner. forvaltning, dri昀琀 eller vedlikehold.
• Fuktmåling: Måling av fuk琀椀nnhold i materiale eller i bakenforliggende
konstruksjon ved bruk av egnet måleutstyr (blant annet hammerelektrode • Se øvrig informasjon om areal i rapporten, Norsk Standard 3940 (2012 og
og pigger). 2023) og veiledningen 琀椀l disse.
• Utvidet fuktsøk (hulltaking): Boring av hull for inspeksjon og fuktmåling i
risikoutsa琀琀e konstruksjoner, primært i

---

[d126_d126 | Side [1]]
ført (søknads琀椀dspunktet). Forhold som er vanlige for bygningens alder, slik som slitasje
e琀琀er normal bruk regnes ikke som avvik.
Hva inneholder 琀椀lstandsrapporten?
Den bygningssakkyndige undersøker rom og bygningsdeler slik det kommer frem av Forskri昀琀 琀椀l
avhendingsloven. Tilstandsrapporten inneholder bare avvik som den bygningssakkyndige kan se eller
kontrollere med enkle hjelpemidler. Det gjøres ikke nærmere undersøkelser slik som åpning av vegger
eller andre bygningsdeler. I vegg mot våtrom og rom

---

[d126_d126 | Side [1]]
r eksempel innfelt belysning (downlights),
Standard NS 3600:2018 (Teknisk 琀椀lstandsanalyse ved omsetning av bolig), demonteres ikke for å sjekke dampsperren bak. De琀琀e av hensyn 琀椀l
samt Takstbransjens retningslinjer for arealmåling når det gjelder fordeling bygningssakkyndiges kompetanse og risikoen for skade.
mellom P-areal og S-areal.
• Tilbakeholdt eller urik琀椀g informasjon som har betydning for vurderingen, •Kontroll av fukt i konstruksjonen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges

---

[d126_d126 | Side [1]]
eldende som en mangel.
Kjenner du til om det er/ har vært utført arbeid på Spesielt forhold som er vurdert med TG2 og TG3 bør
el‑anlegget eller andre installasjoner? vurderes nøye, da de indikerer avvik fra normal slitasje
‑ Alt arbeid er utført av fagfolk, bortsett fra trekking av rør og/ eller høy alder, noe som kan innebære behov for
som er gjort på egeninnsats. Arbeid utført av Sæterdal utbedringer. Bygningsdeler som er merket med TGIU er
Elektro AS. ikke blitt vurdert av takstmannen.
35

## Side

---

[d126_d126 | Side [1]]
t bygningen eller bygningsdelen da bare har
normal slitasje. Ved skjulte konstruksjoner kan alder alene avgjøre 琀椀lstandsgrad. Når bygningssakkyndige anbefaler 琀椀ltak, for eksempel
utbedringer, må brukeren av rapporten vurdere om 琀椀ltakene er nødvendige og lønnsomme.
Når den bygningssakkyndige velger 琀椀lstandsgrad, baseres vurderingen på faste kriterier som følger av gjeldende bransjestandard for Teknisk
琀椀lstandsanalyse ved omsetning av bolig og Forskri昀琀 琀椀l avhendingslova.
TILSTANDSGRAD 0, TG0: INGEN

---

[d126_d126 | Side [1]]
t mot brann, rekkverk, trapper osv.
Tilstandsrapporten beskriver ikke hele boligen
BYGNINGSSAKKYNDIGE SER FOR EKSEMPEL IKKE PÅ
• vanlig slitasje og normal vedlikeholds琀椀lstand • bagatellmessige forhold som ikke påvirker bygningens bruk eller verdi vesentlig • etasjeskillere •
琀椀lleggsbygg slik som garasje, bod, anneks, naust også videre • utvendige trapper • stø琀琀emurer • skjulte installasjoner • installasjoner utenfor
bygningen • full funksjonstes琀椀ng av el- og VVS-installasjoner • geologiske forhold og

---

[d126_d126 | Side [1]]
ersøkelser utover minimumskravet i forskri昀琀en.
iv)Tilstandsgrad 3, TG3:Store eller alvorlige avvik. Kra昀琀ige symptomer på
forhold som man må regne med trenger utbedring straks eller innen kort
琀椀d. Påvist funksjonssvikt eller sammenbrudd. Avvik under TG3 skal gis
sjablongmessig anslag.
BEFARINGEN
v)Tilstandsgrad TGiU:Ikke undersøkt/ikke 琀椀lgjengelig for undersøkelse. Rapporten gir en vurdering av byggverk og bygningsdeler som
bygningssakkyndig har observert, og som fremkommer av Forskri昀琀 琀椀l
• Ved TG0 og

---

[d126_d126 | Side [1]]
remembran og Byggemåte
sementbassert membran. Slukmansjett under klemmring I forbindelse med salget er det blitt utført en
i sluk. tilstandsrapport av en kvalifisert bygningssakkyndig.
Rapporten gir en grundig vurdering av boligens tilstand
Er arbeidet byggemeldt? og påpeker eventuelle avvik som ble oppdaget under
‑ Våtrom er byggemeldt og det er gjennomført uavhengig befaringen. Tilstandsrapporten og selgers egenerklæring
kontroll i forbindelse med byggesaken er vedlagt salgsoppgaven, og det er viktig

---

[d126_d126 | Side [1]]
e gi et målbart resultat.
Det er opplyst om at hele bakveggen er bygget ut med en leca vegg på innsiden av den oprinnelige bakveggen,og at denne er smurt med di昀昀usjonsåpen
membran i alle overganger.
Eier har bildedokumentasjon av u琀昀ørt arbeid.
da jobben er gjort av fagfolk med bildedokumentasjon må en anta at 琀椀lstrekkelig prosjektering og u琀昀ørelse med garan琀椀 er i henhold 琀椀l byggteknisk
forskri昀琀.
Det er ikke registrert fukt på befaringsdag
luker i vegg er plassert på bad,vaskerom og soverom ved

---

[d126_d126 | Side [1]]
nen ved hulltaking i bad og vaskerom
er ikke bygningssakkyndiges ansvar. Rapporten beskriver avvik, altså en (våtrom), rom under terreng (kjelleretasje, underetasje og sokkeletasje)
琀椀lstand som er dårligere enn referansenivået. Rapporten framhever eller andre bygningsdeler skjer e琀琀er eiers aksept. Hulltaking av våtrom og
normalt ikke posi琀椀ve sider ved boligen ut over det som fremgår av rom under terreng kan unntaksvis unnlates, se Forskri昀琀 琀椀l
琀椀lstandsgradene. Avhendingsloven.
• Tilstanden angis i

---

[d126_d126 | Side [1]]
ingsgebyr ‑ pantedokument) Det fakturerte beløpet kan avvike fra estimatet.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑ Fakturering skjer månedlig eller kvartalsvis.
110 840 (Omkostninger totalt (uten Boligkjøperforsikring))
124 340 (Omkostninger totalt (med
Boligkjøperforsikring)) Fellesgjeld
Lånebetingelser fellesgjeld: Sameiet har ikke fellesgjeld.
‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
4 500 840 (Totalpris inkl. omkostninger (uten
Boligkjøperforsikring)) Formuesverdi
4

---

[d126_d126 | Side [1]]
 boliger. I
Kr 4 514 340 beregningen tas det hensyn til boligens beliggenhet,
areal, byggeår og type bolig. Stortinget har vedtatt en ny
modell for beregning som skal benyttes fra og med
Felleskostnader inntektesåret 2026, og den nye modellen henter
Felleskostnader kr 1 688,‑ pr. mnd informasjon om omsatte boliger fra grunnkretser i stedet
for kommuner.
Felleskostnader inkluderer: Felles byggforsikring og drift
og vedlikehold. Formuesverdien er en prosentandel av den beregnede
boligverdien.
32

## Side

---

[d126_d126 | Side [1]]
IU er
Elektro AS. ikke blitt vurdert av takstmannen.
35

## Side 36

OM EIENDOMMEN
Beskrivelsen av boligen nedenfor er hentet direkte fra
tilstandsrapporten: Sameie
Lille Damsgårdsvei 44 A Esek
Byggemåte:
Vinduer er skiftet i 2022. Isolerglass i trekarmer. Organisasjonsnummer: 990038260
Bygningen har malt hovedytterdør og brann‑ og
lydklassifisert entrédør. Ytterdør skiftet i 2022. Sameiet har en total felles formue på kr 200 000,‑
Etasjeskiller: Himlingen er i det vesentlige isolert på nytt
med tung,

---

[d126_d126 | Side [1]]
ligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er involvert i tvister av noe slag?
Nei Ja
26 Kjenner du til vedtak/forslag til vedtak om forhold vedr. eiendommen som kan medføre økte felleskostnader/økt fellesgjeld?
Nei Ja
27 Kjenner du til om det er/har vært sopp/råteskader/insekter/skadedyr i sameiet/laget/selskapet (fellesareal eller i andre boliger) som rotter, mus,
maur eller lignende?
Nei Ja
28 Kjenner du til om det er/har vært skjeggkre i sameiet/laget/selskapet (fellesareal eller i

---

[d126_d126 | Side [1]]
 fra 2026 foreligger.
21.1 Radonmåling
År 2025
Verdi 20 Bq/m3
22 Kjenner du til manglende brukstillatelse eller ferdigattest?
Nei Ja
23 Kjenner du til om det foreligger skaderapporter/ tilstandsvurderinger eller utførte målinger?
Nei Ja
24 Er det andre forhold av betydning ved eiendommen som kan være relevant for kjøper å vite om (f.eks. rasfare, tinglyste forhold eller private
avtaler)?
Nei Ja
Spørsmål for bolig i sameie/borettslag/boligaksjeselskap:
25 Kjenner du til om sameiet/laget/selskapet er

---

[d126_d126 | Side [1]]
eprenører. Fak琀椀ske kostnader kan variere
betydelig, avhengig av individuelle valg, materialpriser og Tiltak over kr 500 000
markedsforhold. For å få en nøyak琀椀g vurdering av
utbedringskostnadene anbefales y琀琀erligere undersøkelser og
innhen琀椀ng av 昀氀ere pris琀椀lbud fra kvali昀椀serte fagfolk. Slike anslag
gis for TG3, der de琀琀e er mulig.
Oppdragsnr.: 22512-1101 Befaringsdato: 04.03.2026 Side: 4 av 26
51

## Side 52

Lille Damsgårdsveien 44 A, 5162 LAKSEVÅG AASEBØ TAKST AS
Gnr 153 - Bnr 271 Storebotn 10B
4601

---

[d126_d126 | Side [1]]
for fellesarealer og de琀琀e er kjent for bygningssakkyndig, eller fellesarealet har en særlig
琀椀lknytning 琀椀l boligen).
© iVerdi 2023 © Norsk takst 2023
Malen 琀椀l denne rapporten, inkludert standardtekstene fra Norsk takst, er vernet e琀琀er åndsverkloven og kan kun beny琀琀es av medlemsforetakene i Norsk takst og
av taks琀椀ngeniører som er ser琀椀昀椀sert i slikt foretak, samt av kunder hos iVerdi og studenter hos NEAK. For andre aktører er eksemplarfrems琀椀lling av malen og
standardtekster, som utskri昀琀 og annen

---

[d126_d126 | Side [1]]
# d126.pdf

## Side 1

LAKSEVÅG/ DAMSGÅRD ‑ SE VIDEO!
Lille Damsgårdsveien 44A

## Side 2

Velkommen til
din nye bolig

## Side 3

Velkommen til
din nye bolig

## Side 4

(Ingen tekst ekstrahert)

## Side 5

(Ingen tekst ekstrahert)

## Side 6

NØKKELINFORMASJON
PRISANTYDNING EIEFORM
Kr 4 390 000,‑ Eierseksjon
OMKOSTNING KJØPER ANTALL SOVEROM
124 340,‑ 3
TOTALPRIS ETASJE
4 514 340,‑ 1
FELLESKOSTNADER BYGGEÅR
1 688,‑ pr. mnd 1936
BRA‑I/ BRA TOTAL ENERGIMERKING
85/ 85 kvm E ‑ Ikke angitt
BOLIGTYPE

---

[d126_d126 | Side [1]]
føringen av befaringen
grunnlag og basert på erfaringstall i fem intervaller, og kan ikke forveksles begrenses som følger:
med en konkret vurdering og 琀椀lbud fra en entreprenør eller håndverker.
Det må eventuelt innhentes 琀椀lbud for en nærmere undersøkelse, og • Det u琀昀øres kun visuelle observasjoner på 琀椀lgjengelige 昀氀ater uten fysiske
konkret og nøyak琀椀g vurdering av utbedringskostnad. Kostnader 琀椀l ikke inngrep (f.eks. riving).
oppdagede avvik/utbedringer/feil kan forekomme. Utbedringskostnad
avhenger

---

[d126_d126 | Side [1]]
# Side 87

Forbrukerinformasjon
om budgivning
Sist oppdatert med virkning fra 1. juli 2025, i forbindelse med
ikrafttredelse av endringer i eiendomsmeglingsloven.
Informasjonen er utarbeidet av Forbrukerrådet, Advokatforeningen ved Lovutvalget for eiendomsmegling, Eiendom Norge og
Norges Eiendomsmeglerforbund, på grunnlag av bl.a. eiendomsmeglingsloven § 6-8.
Nedenfor gis en oversikt over de retningslinjer som anbefales ved budgivning på eiendommen. Avslutningsvis gis også en kort
oversikt over de

---

[d126_d126 | Side [1]]
 må høydeforskjeller re琀琀es opp. Det vil imidler琀椀d sjelden være økonomisk rasjonelt som et enkeltstående 琀椀ltak i en bolig
som de琀琀e. Dersom boligen en gang skal renoveres, kan man vurdere slike 琀椀ltak.
Avviket er lite relevant, det merkes kun hvis man måler med laser
Kostnadses琀椀mat: Under 20 000
Oppdragsnr.: 22512-1101 Befaringsdato: 04.03.2026 Side: 8 av 26
55

## Side 56

Lille Damsgårdsveien 44 A, 5162 LAKSEVÅG AASEBØ TAKST AS
Gnr 153 - Bnr 271 Storebotn 10B
4601 BERGEN 5309

---

[d126_d126 | Side [1]]
 for hele året. Det
fakturerte beløpet kan avvike fra estimatet. Fakturering
Omkostning kjøper skjer månedlig eller kvartalsvis.
4 390 000,00 (Prisantydning)
Omkostninger Kommunale avgifter
Kr 8 660 (2026)
13 500 (Boligkjøperforsikring* (valgfritt))
109 750 (Dokumentavgift) Informasjon: Kommunale avgifter inkluderer vann, avløp
545 (Tinglysingsgebyr ‑ hjemmel) og renovasjon. Oppgitt beløp er et estimat for hele året.
545 (Tinglysningsgebyr ‑ pantedokument) Det fakturerte beløpet kan avvike fra

---

[d126_d126 | Side [1]]
er kr 20 000
Utbedringskostnadene i rapporten er sjablongmessige anslag Tiltak mellom kr 20 000 – 100 000
basert på observerte forhold som feil, skader eller
uregelmessigheter, samt foreslå琀琀e 琀椀ltak. Disse anslagene er Tiltak mellom kr 100 000 – 200 000
veiledende, angis i fem intervaller, er basert på generelle
erfaringstall, og må ikke forveksles med konkrete pris琀椀lbud fra Tiltak mellom kr 200 000 – 500 000
håndverkere eller entreprenører. Fak琀椀ske kostnader kan variere
betydelig, avhengig av

---

[d126_d126 | Side [1]]
er Legg ID her

## Side 89

Budskjema
KJØPESUM KR + omkostninger ihht. opplysninger i salgsoppgaven
Kjøpet finansieres slik:
Din bolig.
BANK/FINANSIERINGSINSTITUSJON: REFERANSE & TELEFONNUMMER SUM:
Kr.
Kr.
Din historie.
Kr.
Kr.
Det er Emera.
EGENKAPITAL: Kr.
TOTALT:
EGENKAPITAL BESTÅR AV:
Salg av nåværende bolig eller annen fast eindom
Disponibelt kontant beløp (bankinnskudd)
Ønsket overtagelsesdato:
NÅVÆRENDE BUD ER BINDENDE FOR UNDERTEGNEDE TIL OG MED DEN:
Budet er bindende til klokken: 16.00 den dagen,

---

[d126_d126 | Side [1]]
ØKT
Innvendig > Rom Under Terreng Gå til side
Våtrom > Kjeller > Bad 4m2 > Tilliggende Gå til side
konstruksjoner våtrom
Våtrom > Kjeller > Vaskerom 4,7m2 > Tilliggende Gå til side
konstruksjoner våtrom
AVVIK SOM KAN KREVE TILTAK
Innvendig > Etasjeskille/gulv mot grunn Gå til side
Tekniske installasjoner > Varmtvannstank Gå til side
Anslag på utbedringskostnad
Tiltak under kr 20 000
Tiltak mellom kr 20 000 – 100 000
Tiltak mellom kr 100 000 – 200 000
Tiltak mellom kr 200 000 – 500 000
Tiltak over kr 500

---

[d126_d126 | Side [1]]
elplan for eiendommen kan kun opföres 1 ‑ et ‑ hus for beboelse. På
kollektivsystemet fra Bergen sentrum til Bergen vest. eiendommen må ikke drives nogen virksomhet som ved
Planforslagets formål er å anbefale et helhetlig og stöi, larm eller lukt eller på annen måte kan genere
overordnet kollektivsystem naboer. Gjerdeplikt påhviler parsellen.
med hovedkorridorer for buss og bane mellom Bergen
sentrum og Bergen vest. Tinglyst 15.12.1986 ‑ Dokumentnr: 41260 ‑ Erklæring/
‑ PlanID: 64940000. Laksevåg/

---

[d126_d126 | Side [1]]
i første kvartal 2027. Hovedmålet med revisjon av 53 br.nr. 234, hvorfra parsellen er utskilt, rett til å anlegge
KPA‑bestemmelsene er forenkling, fortgang og vann‑, gass‑ og kloakkledninger over den solgte parsell til
forutsigbarhet i plan‑ og byggesaksprosesser, for å sikre bruk for ovenforliggende bebyggelse, såvel på
gode boliger og nabolag. hovedbruket som på gr.nr. 52 br.nr. 11 "Rotadalen". På
‑ PlanID: 64090000. Kommunedelplan for eiendommen kan kun opföres 1 ‑ et ‑ hus for beboelse.

---

[d126_d126 | Side [1]]
6 ‑ Dokumentnr: 41260 ‑ Erklæring/
‑ PlanID: 64940000. Laksevåg/ Bergenhus. Gnr 153 Bnr 1, avtale
Laksevåg verftsområde 2. Planen skal legge til rette for Gnr 153 Bnr 271 og Bnr 335 er seksjonert i 5 seksjoner.
utfylling i sjø, samt omdanning av verftsområdet til Alle dokumenter er registrert på Bnr 271
sentrumsformål med bymessig bebyggelse.
‑ PlanID: 72050000. Bergen kommune har fått utarbeidet Tinglyst 15.12.1986 ‑ Dokumentnr: 41260 ‑ Seksjonering
konsekvensutredning for bybanetrasé mellom Dokken og

---

[d126_d126 | Side [1]]
kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
79

## Side 80

Primære transportmidler Varer/Tjenester
Laksevåg Senter 8 min
1. Egen bil
Apotek 1 Laksevåg 8 min
2. Buss
3. Gående
Aldersfordeling barn (0-18 år)
Turmulighetene 33% i barnehagealder
37% 6-12 år
Nærhet til skog og mark 95/100
15% 13-15 år
15% 16-18 år
Kvalitet på barnehagene
Veldig bra

---

[d126_d126 | Side [1]]
100
15% 13-15 år
15% 16-18 år
Kvalitet på barnehagene
Veldig bra 81/100
Støynivået
Lite støynivå 81/100
Familiesammensetning
Par m. barn
Sport
Holen skole ballbinge 8 min
Par u. barn
Ballspill 0.7 km
Damsgård, Jansonmarken 9 min
Enslig m. barn
Ballspill, sandvolleyball 0.8 km
Energi Treningssenter 8 min
Enslig u. barn
SATS Damsgård 14 min
Flerfamilier
Boligmasse
0% 51%
13% enebolig
Store og Lille Damsgård
25% rekkehus
Bergen
34% blokk
Norge
28% annet
Sivilstand
Norge
Gift 25% 33%
«Barnevennlig, sentralt,

---

[d126_d126 | Side [1]]
Veldig trygt 75/100
Studenter
Kvalitet på skolene
Etablerere
Bra 68/100
Naboskapet
Offentlig transport Høflige 55/100
Laksevåg 3 min
Linje 6, 20, 85 0.3 km
Aldersfordeling
Bergen busstasjon 8 min
Buss, tog, trikk 4 km
Danmarks plass 8 min Buss, trikk 3.6 km
Bergen Nøstet kystrutekai 8 min
Linje HAV, HUR 3.5 km
Danmarks plass 9 min
Linje 1 3.8 km
Skoler
Damsgård skole (1-7 kl.) 9 min
401 elever, 29 klasser 0.7 km
Holen skole (1-10 kl.) 9 min
540 elever, 35 klasser 0.8 km
Laksevåg videregående skole 7

---

[d126_d126 | Side [1]]
eksjonering
konsekvensutredning for bybanetrasé mellom Dokken og Opprettet seksjoner:
Lyngbø, og for gang‑ og sykkelbro mellom Dokken og Snr: 1
indre Laksevåg. Byrådet har i møte 10.03.2026 fattet Formål: Bolig
vedtak om å legge konsekvensutredning for Bybanen og Sameiebrøk: 17/ 100
konsekvensutredning for gang‑ og sykkelbro på høring. SEKSJONERINGEN GJELDER GNR. 153, BNR.335 OG
BNR. 271.
Eiendommen er berørt av Eviny Termo AS sitt Rettet vedr. bnr.335 den 24.10.1996
konsesjonsområde for

---

[d126_d126 | Side [1]]
som restauranter,
apotek, treningssenter, dagligvare og mye mer. Parkering
Parkering i gaten etter gjeldende bestemmelser.
Kollektivtilbudet i området er bra, med Laksevåg
busstopp kun 3 minutters gange unna. Her går det
hyppig busser mot Bergen sentrum og Bergen Adkomst
Busstasjon som er et sentralt knutepunkt for en rekke På høyre side i annonsen finner du et kartutsnitt. Ved å
busslinjer. klikke på kartet kan du enkelt planlegge din rute fra valgt
startpunkt og helt frem til boligen. Det vil være

---

[d126_d126 | Side [1]]
ntralt nabolag
som passer for hele familien
• Svært påkostet med gjennomgående høy standard. Omfattende
renovert i 2022
• Nydelig sjøutsikt og gode solforhold fra privat uteplass
• Egen inngang
• Peis og varmekabler i alle gulv
• Sameie med god økonomi
• 6 min gange til Rema 1000
• 8 min gange til Laksevåg senter
• 3 min gange til busstopp ‑ Hyppige avganger til sentrum
• Kort vei til barnehage og skole
11

## Side 12

(Ingen tekst ekstrahert)

## Side 13

(Ingen tekst ekstrahert)

## Side 14

(Ingen tekst

---

[d126_d126 | Side [1]]
28% annet
Sivilstand
Norge
Gift 25% 33%
«Barnevennlig, sentralt, og fin
Ikke gift 64% 54%
utsikt»
Separert 9% 9%
Sitat fra en lokalkjent
Enke/Enkemann 2% 4%
Innholdet i nabolagsprofilen er hentet fra ulike datakilder, og feil eller mangler kan forekomme. Vurderinger og sitater er innhentet på web og gir uttrykk for
hvordan naboene vurderer nabolaget. FINN.no AS kan ikke holdes ansvarlig for feil/mangler i profilen. Copyright © Finn.no AS 2026
80

## Side 81

Innholdet i nabolagsprofilen er hentet fra ulike

---

[d126_d126 | Side [1]]
rfornyet, og det er lagt betydelig
og dusjvegger/hjørne.
vekt på støyisolering mot etasjen over for å sikre et mer
Det er mekanisk avtrekk.
komfortabelt bomiljø. Hele oppgraderingsprosessen er godt
dokumentert, og arbeidet er u琀昀ørt fagmessig.
Vaskerom 4,7m2
Leiligheten er romslig og har en fantas琀椀sk utsikt over Aktuell byggeforskri昀琀 er teknisk forskri昀琀 2017. Dokumentasjon:
innseilingen 琀椀l byen og de omkringliggende by昀樀ellene. I 琀椀llegg er kontrollerklæringer og bilder.
det et 昀氀o琀琀 felles uteareal på

---

[d126_d126 | Side [1]]
bruk
oppgitt, brukes typiske standardverdier for den aktuelle
se våre nettsider.
bygningstypen fra tidsperioden den ble bygd i.
Beregningsmetodene for energikarakteren baserer seg https://www.enova.no
på NS 3031.
https://www.enova.no/energimerking
78

## Side 79

Nabolagsprofil
Lille Damsgårdsveien 44A - Nabolaget Store og Lille Damsgård - vurdert av 120 lokalkjente
Nabolaget spesielt anbefalt for
Opplevd trygghet
Familier med barn Veldig trygt 75/100
Studenter
Kvalitet på skolene
Etablerere
Bra

---

[d126_d126 | Side [1]]
 min
540 elever, 35 klasser 0.8 km
Laksevåg videregående skole 7 min
850 elever, 59 klasser 3.4 km
Årstad videregående skole 9 min
1400 elever, 100 klasser 3.8 km
Ladepunkt for el-bil
Laksevåg Senter 8 min
Laksevåg kirke 8 min
% 1.31 % 8.31 % 5.41 %
7.5
%
4.6
%
2.7
%
5.23 %
1.62 % 2.12
% 6.83 % 6.73 % 9.83
%
01
% 1.61 % 3.81
Barn Ungdom Unge voksne Voksne Eldre
(0-12 år) (13-18 år) (19-34 år) (35-64 år) (over 65 år)
Område Personer Husholdninger
Store og Lille Damsgård 1 618 887
Bergen 265 933 136

---

[d126_d126 | Side [1]]
e 9 minutter unna til
fots. Videregående skoler finner man innen kort Tomtestørrelse: 720.5 m²
kjøreavstand.
Eiendommen ligger i relativt skrånende terreng. Tomten
For den aktive er det flere tur‑ og idrettsmuligheter i er opparbeidet med støpt platting og trapp. Tomten er
nærområdet. Boligen ligger like ved Damsgårdsfjellet felleseiendom for sameiet.
som fører videre opp mot Gravdalsfjellet. Her finner man
flere turstier for både store og små. Det også ballbinger
og sandvolleyballbane i nærheten. For den

---

[d126_d126 | Side [1]]
te måtte jeg flytte
ut i den aktuelle perioden.
Jeg bekrefter at opplysningene er gitt etter beste skjønn. Jeg er kjent med at dersom jeg har gitt ufullstendige, uriktige eller misvisende
opplysninger om eiendommen, vil forsikringsselskapet kunne søke hel eller delvis regress for sine utbetalinger eller redusere sitt ansvar helt
eller delvis, jfr. vilkår for boligselgerforsikring punkt 7.1 og forsikringsavtaleloven kapittel 4.
Jeg er orientert om mitt mulige ansvar som selger etter avhendingsloven,

---

[d126_d126 | Side [1]]
gså i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har gitt skriftlig samtykke, kan erstatningen bortfalle.
Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge parter, begrenset til siste 12 måneder før overtakelse.
Forøvrig oppfordrer selger potensielle kjøpere til å undersøke eiendommen grundig, jf avhendigsloven § 3-10 og kjøpsloven § 20
(aksjeboliger).
Gyldig forsikring forutsetter at det for helårs- og fritidsbolig foreligger tilstandsrapport som er i henhold til

---

[d126_d126 | Side [1]]
rientert om mitt mulige ansvar som selger etter avhendingsloven, eventuelt etter kjøpsloven (aksjeboliger), og om forsikringsgiver sitt
boligselgerforsikringstilbud.
Jeg er klar over at avtale om forsikring er bindende. Jeg er også klar over at premietilbudet først kan påberopes når boligen er solgt
(budaksept). Premietilbudet som er gitt av megler er bindende for forsikringsgiver i 6 – seks – måneder fra oppdragsinngåelse med megler.
Etter dette vil premien og forsikringsvilkårene kunne justeres. Når

---

[d126_d126 | Side [1]]
rag trer forsikringen i kraft når kontrakten er signert av begge parter,
begrenset til siste 12 måneder før overtakelse. Jeg bekrefter med dette at eiendommen ikke er en næringseiendom, at den ikke
selges som ledd i næringsvirksomhet eller mellom ektefeller eller slektninger i rett oppstigende eller nedstigende linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen. Gyldig forsikring forutsetter at det for helårs- og fritidsbolig
foreligger tilstandsrapport som er i henhold til

---

[d126_d126 | Side [1]]
 bekymring og stress
− Spar verdifull tid
− Få advokatkostnadene dekket
Med vår boligkjøperforsikring er du i trygge hender
hvis du oppdager feil eller mangler ved boligen du har
kjøpt. Forsikringen gir deg tilgang på hjelp fra advokater, Hva koster forsikringen?
saksbehandlere og jurister som er spesialiserte på Forsikringspremien trekkes i oppgjøret.
eiendomskjøp. De står klare til å hjelpe deg i fem år etter
overtagelse – uten at du trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
og

---

[d126_d126 | Side [1]]
og fritidsbolig foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Jeg ønsker boligselgerforsikring, og bekrefter å ha mottatt og lest forsikringsvilkårene og informasjonsbrosjyre til selger i
forbindelse med kjøp av boligselgerforsikring. Forsikringen trer i kraft på det tidspunkt det foreligger en budaksept mellom partene,
begrenset til tolv måneder før overtagelse. Ved oppgjørsoppdrag trer forsikringen i kraft når kontrakten er signert av begge

---

[d126_d126 | Side [1]]
og fritidsbolig
foreligger tilstandsrapport som er i henhold til Forskrift til avhendingslova (tryggere bolighandel). Forsikringen er ugyldig dersom
den tegnes i strid med forsikringsvilkårene. Jeg er innforstått med at eiendomsmegleren ikke har fullmakt til å gjøre unntak fra
ovennevnte begrensninger. Jeg er oppmerksom på at 8% av total forsikringspremie er honorar til Söderberg & Partners.
Jeg ønsker ikke boligselgerforsikring, men megler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe

---

[d126_d126 | Side [1]]
gler har tilbudt meg å kjøpe slik forsikring.
Jeg kan ikke kjøpe boligselgerforsikring ihht vilkår.
Initialer selger: HAAA 4
54006230
:ecnerefer
tnemucoD
47

## Side 48

Tilstandsrapport
4Roms Leilighet.
Lille Damsgårdsveien 44 A, 5162 LAKSEVÅG
BERGEN kommune
gnr. 153, bnr. 271, snr. 1
Sum areal alle bygg: BRA: 85 m² BRA-i: 85 m²
Befaringsdato: 04.03.2026 Rapportdato: 11.03.2026 Oppdragsnr.: 22512-1101 Eiendomsverdi ref nr: ER1253
Autorisert foretak: AASEBØ TAKST AS Ser琀椀昀椀sert Taks琀椀ngeniør: Eirik

---

[d126_d126 | Side [1]]
r e-post.
Forsikringen er meglet frem av Söderberg & Partners og soderbergpartners.no/eiendom
er plassert hos Gar-Bo Försäkring AB.
*Det tas forbehold om pris- og vilkårsendringer.

## Side 83

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
Lov om avhending av fast eigedom (avhendingslova/avhl.) av 3. juli 1992 regulerer kjøper

---

[d126_d126 | Side [1]]
gsoppgaven. Listen er vedlagt.
stue/ kjøkken.
Gjenstander som er nevnt i standardlisten, men som ikke
finnes på eiendommen, vil heller ikke følge med i salget.
Areal Alt utstyr og installasjoner som medfølger overtas slik de
BRA ‑ i: 85 m² er, uten garanti, med mindre det foreligger en gjeldende
BRA totalt: 85 m² garanti fra produsent eller leverandør.
34

## Side 35

OM EIENDOMMEN
Kjøper aksepterer at det kan forekomme hull og merker Kjenner du til om det er utført kontroll av el‑anlegget og/
etter

---

[d126_d126 | Side [1]]
, men den må
være satt mellom 60 og 120 døgn. Med korttidsutleie Boligkjøperforsikring: Kjøper har anledning til å tegne
menes utleie i en sammenhengende periode på opptil 30 boligkjøperforsikring. Vedlagt i salgsoppgaven følger
døgn. informasjon om Boligkjøperforsikring fra Söderberg &
Partners. Boligkjøperforsikring er en rettshjelpsforsikring
som gir trygghet og profesjonell juridisk hjelp dersom det
Diverse oppdages uventede feil eller mangler ved boligen de
Det informeres om at ingen kan eie mer enn

---

[d126_d126 | Side [1]]
e linje, søsken, eller
mellom personer som bor eller har bodd på boligeiendommen og/eller
når salget skjer som ledd i sikredes næringsvirksomhet/er en næringseiendom
etter at boligeiendommen er lagt ut for salg.
ved salg av helårs- og fritidsbolig er det krav til at det foreligger tilstandsrapport i henhold til Forskrift til avhendingslova (tryggere
bolighandel).
Forsikringsselskapet kan ved skriftlig samtykke akseptere tegning av forsikring også i ovennevnte tilfeller.
Dersom forsikringsselskapet ikke har

---

[d126_d126 | Side [1]]
 plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger salgsoppgaven, og mellom partene, og all tilgjengelig dokumentasjon som
gjelder som utgangspunkt for hva som inkluderes i salget forelå for kjøper før handelen ble inngått. I tillegg gjelder
– med mindre avvik er tydelig avtalt mellom kjøper og avhendingsloven. Det gjelder ulike avtalevilkår avhengig
selger. av om kjøper er forbrukerkjøper eller ikke, og dette er
nærmere forklart nedenfor.
Om informasjonsgrunnlaget
Opplysninger om boligens

---

[d126_d126 | Side [1]]
u trenger å bekymre deg for egne Borettslagseiendom: kr 9 300
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
Forsikringen er meglet frem av Söderberg & Partners og

---

[d126_d126 | Side [1]]
er dette vil premien og forsikringsvilkårene kunne justeres. Når premietilbudet ikke lenger er bindende for forsikringsselskapet må
egenerklæringsskjemaet signeres på nytt og eventuelle endringer påføres. Det vil da være forsikringspremien og forsikringsvilkårene på ny
signeringsdato som legges til grunn.
Det kan ikke tegnes boligselgerforsikring ved følgende salg:
mellom ektefeller eller slektninger i rett oppstigende eller nedstigenede linje, søsken, eller
mellom personer som bor eller har bodd på

---

[d126_d126 | Side [1]]
kan
fagkyndig vurdering, samt opplysninger fra offentlige selges ansvar begrenses ettersom boligen selges «som
registre som kommunen og Kartverket. Det er viktig at den er», noe som kan være av verdi for selger. Det
kjøper setter seg grundig inn i alle salgsdokumentene, understrekes at selger står fritt til å velge hvilket bud som
herunder salgsoppgave, tilstandsrapport og selgers aksepteres, og er ikke forpliktet til å velge det høyeste.
egenerklæring. Kjøper anses for å være kjent med
forhold som er

---

[d126_d126 | Side [1]]
il slitasje og eventuelle skader.
innredning som anses som varig tilknyttet boligen, følger Slik normal bruksslitasje og behov for vedlikehold må
normalt med i handelen, med mindre det foreligger en kjøper påregne, og dette vil normalt ikke gi grunnlag for
særskilt avtale mellom partene om noe annet, jf. reklamasjon eller prisavslag.
avhendingsloven § 3‑5.
Avtalerettslig
En standard tilbehørsliste utarbeidet av Norges Partenes rettigheter og plikter reguleres av avtalen
Eiendomsmeglerforbund (NEF) følger

## Response
[tool_use: validate_risks]
{
  "validated_risks": [
    {
      "risk_id": "R1",
      "description": "Ulovlig bruksendring fra 1986 – ikke omsøkt eller formelt godkjent. Forholdet ble avdekket etter kjøp i 2019 og er først brakt i orden i 2026 med ferdigattest og godkjent reseksjonering.",
      "evidence": [
        "Leiligheten ble kjøpt i 2019 og benyttet som fast bolig. I ettertid ble det avdekket at bruksendringen fra 1986 ikke var omsøkt eller formelt godkjent.",
        "Forholdet er nå brakt i orden, og det foreligger ferdigattest samt godkjent reseksjonering fra 2026.",
        "Som følge av dette måtte jeg flytte ut i den aktuelle perioden.",
        "Tinglyst 15.12.1986 – Dokumentnr: 41260 – Erklæring/Seksjonering"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.95
    },
    {
      "risk_id": "R2",
      "description": "Reseksjonering gjennomført så sent som januar 2026 – eiendommens juridiske status har vært uklar frem til nylig. Kjøper bør undersøke om alle forhold er korrekt registrert og at reseksjoneringen ikke medfører uavklarte rettigheter eller forpliktelser.",
      "evidence": [
        "Tinglyst 16.01.2026 – Dokumentnr: 59412 – Reseksjonering Snr: 1 Formål: Bolig Sameiebrøk: 17/100",
        "De delene av underetasjen som tidligere var fellesareal, tillegges seksjonsnummer 1 som del av denne.",
        "leiligheten ble reseksjonert i 2026"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R3",
      "description": "Fuktproblematikk i rom under terreng (kjeller/underetasje) – konstruksjoner mot terreng er ikke undersøkt (TGIU), og det er gjort tidligere utbedringstiltak av ukjent omfang. Risiko for skjulte fuktskader.",
      "evidence": [
        "Bakre del av boligen har vegger mot terreng. Det er av tidligere eier foretatt utbedring.",
        "Mot grunnmuren er det innvendig montert grunnmursplate. Mot grunnmursplaten oppmurt vegg i Leca rehab-blokk. Veggene er senere smurt med sementbasert membran.",
        "Innvendig > Rom Under Terreng – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
        "Våtrom > Kjeller > Bad 4m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
        "Våtrom > Kjeller > Vaskerom 4,7m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
        "Det er opplyst om at hele bakveggen er bygget ut med en leca vegg på innsiden av den opprinnelige bakveggen, og at denne er smurt med diffusjonsåpen membran i alle overganger. Eier har bildedokumentasjon av utført arbeid."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.93
    },
    {
      "risk_id": "R4",
      "description": "Etasjeskille/gulv mot grunn er vurdert med TG2 – vesentlig avvik som kan kreve tiltak. Høydeforskjeller er påvist, men kostnadsestimat er under kr 20 000.",
      "evidence": [
        "Bygningsdeler vurdert med TG2: Etasjeskille/gulv mot grunn grunnet høydeforskjell.",
        "Innvendig > Etasjeskille/gulv mot grunn – Gå til side (AVVIK SOM KAN KREVE TILTAK)",
        "må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
        "Kostnadses timat: Under 20 000"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R5",
      "description": "Varmtvannstank er vurdert med TG2 – ikke påvist tilfredsstillende el-tilkobling av varmtvannstank i henhold til gjeldende forskrift. Kan kreve utbedring.",
      "evidence": [
        "Bygningsdeler vurdert med TG2: Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift.",
        "Tekniske installasjoner > Varmtvannstank – Gå til side (AVVIK SOM KAN KREVE TILTAK)"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R6",
      "description": "Utbedringskostnader over kr 500 000 er anslått i tilstandsrapporten for TG3-avvik – dette indikerer alvorlige avvik med potensielt store kostnader for kjøper. Merk: Rapporten lister opp alle kostnadskategorier, og det er uklart hvilke spesifikke poster som utgjør TG3-anslaget.",
      "evidence": [
        "Tiltak over kr 500 000",
        "Anslag på utbedringskostnad: Tiltak under kr 20 000 / Tiltak mellom kr 20 000 – 100 000 / Tiltak mellom kr 100 000 – 200 000 / Tiltak mellom kr 200 000 – 500 000 / Tiltak over kr 500 000",
        "Slike anslag gis for TG3, der dette er mulig."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R7",
      "description": "Eldre bygg fra 1936 med teglpipe fra byggeår – begrenset kontroll av pipen da den går gjennom flere etasjer/boliger. Risiko for skjulte skader, selv om pipeløpet er rørfornyet.",
      "evidence": [
        "Teglpipe fra byggeår. Pipeløpet er rørfornyet.",
        "Begrenset kontroll av pipen da den går gjennom flere etasjer/boliger.",
        "Byggeår: 1936",
        "Ny peisovn montert i stuen."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R8",
      "description": "Tinglyste heftelser fra 1939 med bestemmelser om bebyggelse, vann/kloakkledning og rettigheter for naboeiendommer – kan begrense fremtidig bruk og utbygging. Kun ett hus for beboelse tillatt på eiendommen.",
      "evidence": [
        "Tinglyst 29.06.1939 – Dokumentnr: 402856 – Rettigheter iflg. skjøte, Bestemmelse om bebyggelse, Bestemmelse om vann/kloakkledning",
        "RETTIGHETSHAVER: LAKSEVÅG MASKIN OG JERNSKIBSBYGGERI AS",
        "Selgeren forbeholder sig og senere ervhervere av gr.nr. 53 br.nr. 234, rett til å anlegge vann-, gass- og kloakkledninger over den solgte parsell",
        "På eiendommen kan kun opføres 1 – et – hus for beboelse."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.87
    },
    {
      "risk_id": "R9",
      "description": "Eiendommen ligger i uregulert område, men er avsatt til byfortettningssone i kommuneplanens arealdel. Pågående revisjon av KPA-bestemmelsene kan medføre endringer i tillatt bruk og bebyggelse.",
      "evidence": [
        "Eiendommen ligger i uregulert område men er i henhold til kommuneplanens arealdel 2018 datert 19.06.2019, avsatt til byfortettningssone.",
        "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
        "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R10",
      "description": "Planlagte infrastrukturprosjekter i nærheten – konsekvensutredning for bybane og gang-/sykkelbro mellom Dokken og Laksevåg er lagt ut på høring. Kan medføre anleggsarbeid, støy og endringer i nærområdet.",
      "evidence": [
        "Bergen kommune har fått utarbeidet konsekvensutredning for bybanetrasé mellom Dokken og Lyngbø, og for gang- og sykkelbro mellom Dokken og indre Laksevåg.",
        "Byrådet har i møte 10.03.2026 fattet vedtak om å legge konsekvensutredning for Bybanen og konsekvensutredning for gang- og sykkelbro på høring."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R11",
      "description": "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg – kan medføre tilknytningsplikt eller kostnader knyttet til fjernvarme.",
      "evidence": [
        "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.68
    },
    {
      "risk_id": "R12",
      "description": "Legalpant – kommunen og sameiet har legalpant i eiendommen som ikke fremgår av grunnboken, og som har prioritet foran tinglyste lån. Kommunens legalpant har høyere prioritet enn sameiets.",
      "evidence": [
        "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
        "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
        "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.",
        "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.88
    },
    {
      "risk_id": "R13",
      "description": "Energimerking E – boligen har dårlig energikarakter, noe som kan medføre høye oppvarmingskostnader og behov for energioppgradering.",
      "evidence": [
        "ENERGIMERKING: E – Ikke angitt",
        "Byggeår: 1936"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.8
    },
    {
      "risk_id": "R14",
      "description": "El-anlegget er delvis utført på egeninnsats (trekking av rør) – dette kan innebære risiko for avvik fra gjeldende forskrifter og potensielle sikkerhetsproblemer.",
      "evidence": [
        "Alt arbeid er utført av fagfolk, bortsett fra trekking av rør som er gjort på egeninnsats. Arbeid utført av Sæterdal Elektro AS.",
        "Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.78
    },
    {
      "risk_id": "R15",
      "description": "Eiendommen ligger i kulturmiljøhensyne sone (Historiske senter Laksevåg) – kan medføre restriksjoner på fremtidige bygningsmessige endringer og rehabilitering.",
      "evidence": [
        "Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø. Historiske senter Laksevåg, berøringsgrad 100%",
        "Eiendommen befinner seg innenfor følgende bestemmelsesområder: Byggegrense, utb. volum, funksjonskrav, berøringsgrad 100%"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.82
    },
    {
      "risk_id": "R16",
      "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet – uforutsette kostnader til vedlikehold og reparasjon kan oppstå.",
      "evidence": [
        "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
        "Eiendommen er tilknyttet offentlig vann- og avløpssystem via private stikkledninger."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.75
    },
    {
      "risk_id": "R17",
      "description": "Terrassen utenfor leiligheten er fellesareal – kjøper får ikke eksklusiv bruksrett til uteplassen, noe som kan oppleves som en begrensning til tross for at salgsoppgaven markedsfører 'privat uteplass'.",
      "evidence": [
        "Fliselagt terrasse utenfor leiligheten er felles arealer.",
        "Nydelig sjøutsikt og gode solforhold fra privat uteplass (fra salgsannonsen)"
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.9
    },
    {
      "risk_id": "R18",
      "description": "MULIG MANGLENDE RISIKO – Laksevåg verftsområde reguleringsplan (PlanID: 64940000) legger til rette for utfylling i sjø og omdanning til sentrumsformål med bymessig bebyggelse i nærheten. Dette kan påvirke utsikt, nærområde og bomiljø vesentlig.",
      "evidence": [
        "PlanID: 64940000. Laksevåg/Bergenhus. Laksevåg verftsområde 2. Planen skal legge til rette for utfylling i sjø, samt omdanning av verftsområdet til sentrumsformål med bymessig bebyggelse."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.72
    },
    {
      "risk_id": "R19",
      "description": "MULIG MANGLENDE RISIKO – Salgsoppgaven markedsfører boligen som 'svært påkostet med gjennomgående høy standard' og 'privat uteplass', men terrassen er fellesareal og el-anlegget har avvik. Potensiell interessekonflikt mellom markedsføring og faktiske forhold.",
      "evidence": [
        "Svært påkostet med gjennomgående høy standard. Omfattende renovert i 2022",
        "Nydelig sjøutsikt og gode solforhold fra privat uteplass",
        "Fliselagt terrasse utenfor leiligheten er felles arealer.",
        "Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift."
      ],
      "source_documents": [
        "d126_d126"
      ],
      "source_pages": [
        1
      ],
      "confidence": 0.7
    }
  ],
  "re_retrieval_queries": [
    "Hvilke spesifikke bygningsdeler er vurdert med TG3 og hva er de konkrete utbedringskostnadene over 500 000 kr?",
    "Er det dokumentert hvilke rom eller arealer som inngår i reseksjoneringen fra 2026, og hva var tidligere sameiebrøk?",
    "Finnes det informasjon om tilstand på tak, fasade og fellesarealer i sameiet?",
    "Er det gjennomført el-kontroll (samsvarserklæring) av el-anlegget etter renovering i 2022?",
    "Hva er konsekvensene av fjernvarmekonsesjonsområdet – er det tilknytningsplikt eller kun mulighet?",
    "Er det opplyst om radon i fellesarealer eller kun i boenheten?",
    "Hva er sameiets vedlikeholdsplan og økonomi utover felles formue på kr 200 000?"
  ],
  "reasoning": "\nGjennomgangen av de 17 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og observasjoner er gjort:\n\n**Justert ned i confidence:**\n- R2 (Reseksjonering): Justert fra 0.90 til 0.88 – forholdet er formelt avklart, men det er fortsatt usikkerhet rundt om alle rettigheter er korrekt overført.\n- R4 (Etasjeskille TG2): Justert fra 0.88 til 0.80 – kostnadsestimatet er under kr 20 000 og takstmann beskriver avviket som lite relevant i praksis. Risikoen er reell men begrenset.\n- R6 (Utbedringskostnader over 500 000): Justert fra 0.85 til 0.75 – dokumentet lister opp alle kostnadskategorier uten å tydelig spesifisere hvilke TG3-poster som utgjør beløpet over 500 000. Det er uklart om dette er ett tiltak eller summen av flere. Ytterligere undersøkelse anbefales.\n- R11 (Fjernvarme): Justert fra 0.72 til 0.68 – kun én setning i dokumentet, ingen informasjon om faktisk tilknytningsplikt eller kostnader.\n- R14 (El-egeninnsats): Justert fra 0.82 til 0.78 – egeninnsats på rørlegging er ikke nødvendigvis ulovlig, men kombinert med TG2 på varmtvannstank styrker dette risikobildet noe.\n\n**Justert opp i confidence:**\n- R3 (Fukt under terreng): Justert fra 0.92 til 0.93 – ytterligere evidens funnet om at takstmann ikke har kunnet undersøke konstruksjonene, og at det er gjort tiltak av tidligere eier.\n- R17 (Terrasse fellesareal): Justert fra 0.85 til 0.90 – det er en klar diskrepans mellom markedsføringen ('privat uteplass') og det faktiske forholdet (fellesareal), noe som er en vesentlig risiko for kjøper.\n\n**Nye risikoer identifisert:**\n- R18: Laksevåg verftsområde reguleringsplan (PlanID: 64940000) legger til rette for betydelig byutvikling i nærområdet, inkludert utfylling i sjø og bymessig bebyggelse. Dette kan påvirke utsikt og bomiljø vesentlig, og er ikke eksplisitt fremhevet som risiko i den opprinnelige analysen.\n- R19: Det er en potensiell interessekonflikt mellom salgsoppgavens markedsføring ('privat uteplass', 'svært påkostet') og de faktiske forholdene (fellesareal, el-avvik). Dette kan være relevant under avhendingsloven § 3-8 om uriktige opplysninger.\n\n**Manglende informasjon som bør undersøkes:**\n1. Hvilke konkrete TG3-poster utgjør anslaget over kr 500 000? Dette er kritisk for kjøpers risikovurdering.\n2. Er det utstedt samsvarserklæring for el-anlegget etter renovering i 2022?\n3. Hva er sameiets vedlikeholdsplan og langsiktige økonomi?\n4. Hva er konsekvensene av fjernvarmekonsesjonsområdet i praksis?\n5. Hva var tidligere sameiebrøk og hvilke arealer inngår i reseksjoneringen?\n"
}

## Raw Response
```json
{
  "id": "msg_016rYix9KpFtkRJKLrHTEB9o",
  "container": null,
  "content": [
    {
      "id": "toolu_01AMRpGrxDhC2TbK1fZVuM9V",
      "caller": {
        "type": "direct"
      },
      "input": {
        "validated_risks": [
          {
            "risk_id": "R1",
            "description": "Ulovlig bruksendring fra 1986 – ikke omsøkt eller formelt godkjent. Forholdet ble avdekket etter kjøp i 2019 og er først brakt i orden i 2026 med ferdigattest og godkjent reseksjonering.",
            "evidence": [
              "Leiligheten ble kjøpt i 2019 og benyttet som fast bolig. I ettertid ble det avdekket at bruksendringen fra 1986 ikke var omsøkt eller formelt godkjent.",
              "Forholdet er nå brakt i orden, og det foreligger ferdigattest samt godkjent reseksjonering fra 2026.",
              "Som følge av dette måtte jeg flytte ut i den aktuelle perioden.",
              "Tinglyst 15.12.1986 – Dokumentnr: 41260 – Erklæring/Seksjonering"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.95
          },
          {
            "risk_id": "R2",
            "description": "Reseksjonering gjennomført så sent som januar 2026 – eiendommens juridiske status har vært uklar frem til nylig. Kjøper bør undersøke om alle forhold er korrekt registrert og at reseksjoneringen ikke medfører uavklarte rettigheter eller forpliktelser.",
            "evidence": [
              "Tinglyst 16.01.2026 – Dokumentnr: 59412 – Reseksjonering Snr: 1 Formål: Bolig Sameiebrøk: 17/100",
              "De delene av underetasjen som tidligere var fellesareal, tillegges seksjonsnummer 1 som del av denne.",
              "leiligheten ble reseksjonert i 2026"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R3",
            "description": "Fuktproblematikk i rom under terreng (kjeller/underetasje) – konstruksjoner mot terreng er ikke undersøkt (TGIU), og det er gjort tidligere utbedringstiltak av ukjent omfang. Risiko for skjulte fuktskader.",
            "evidence": [
              "Bakre del av boligen har vegger mot terreng. Det er av tidligere eier foretatt utbedring.",
              "Mot grunnmuren er det innvendig montert grunnmursplate. Mot grunnmursplaten oppmurt vegg i Leca rehab-blokk. Veggene er senere smurt med sementbasert membran.",
              "Innvendig > Rom Under Terreng – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
              "Våtrom > Kjeller > Bad 4m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
              "Våtrom > Kjeller > Vaskerom 4,7m2 > Tilliggende konstruksjoner våtrom – Gå til side (KONSTRUKSJONER SOM IKKE ER UNDERSØKT)",
              "Det er opplyst om at hele bakveggen er bygget ut med en leca vegg på innsiden av den opprinnelige bakveggen, og at denne er smurt med diffusjonsåpen membran i alle overganger. Eier har bildedokumentasjon av utført arbeid."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.93
          },
          {
            "risk_id": "R4",
            "description": "Etasjeskille/gulv mot grunn er vurdert med TG2 – vesentlig avvik som kan kreve tiltak. Høydeforskjeller er påvist, men kostnadsestimat er under kr 20 000.",
            "evidence": [
              "Bygningsdeler vurdert med TG2: Etasjeskille/gulv mot grunn grunnet høydeforskjell.",
              "Innvendig > Etasjeskille/gulv mot grunn – Gå til side (AVVIK SOM KAN KREVE TILTAK)",
              "må høydeforskjeller rettes opp. Det vil imidlertid sjelden være økonomisk rasjonelt som et enkeltstående tiltak i en bolig som dette.",
              "Kostnadses timat: Under 20 000"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R5",
            "description": "Varmtvannstank er vurdert med TG2 – ikke påvist tilfredsstillende el-tilkobling av varmtvannstank i henhold til gjeldende forskrift. Kan kreve utbedring.",
            "evidence": [
              "Bygningsdeler vurdert med TG2: Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift.",
              "Tekniske installasjoner > Varmtvannstank – Gå til side (AVVIK SOM KAN KREVE TILTAK)"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R6",
            "description": "Utbedringskostnader over kr 500 000 er anslått i tilstandsrapporten for TG3-avvik – dette indikerer alvorlige avvik med potensielt store kostnader for kjøper. Merk: Rapporten lister opp alle kostnadskategorier, og det er uklart hvilke spesifikke poster som utgjør TG3-anslaget.",
            "evidence": [
              "Tiltak over kr 500 000",
              "Anslag på utbedringskostnad: Tiltak under kr 20 000 / Tiltak mellom kr 20 000 – 100 000 / Tiltak mellom kr 100 000 – 200 000 / Tiltak mellom kr 200 000 – 500 000 / Tiltak over kr 500 000",
              "Slike anslag gis for TG3, der dette er mulig."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R7",
            "description": "Eldre bygg fra 1936 med teglpipe fra byggeår – begrenset kontroll av pipen da den går gjennom flere etasjer/boliger. Risiko for skjulte skader, selv om pipeløpet er rørfornyet.",
            "evidence": [
              "Teglpipe fra byggeår. Pipeløpet er rørfornyet.",
              "Begrenset kontroll av pipen da den går gjennom flere etasjer/boliger.",
              "Byggeår: 1936",
              "Ny peisovn montert i stuen."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R8",
            "description": "Tinglyste heftelser fra 1939 med bestemmelser om bebyggelse, vann/kloakkledning og rettigheter for naboeiendommer – kan begrense fremtidig bruk og utbygging. Kun ett hus for beboelse tillatt på eiendommen.",
            "evidence": [
              "Tinglyst 29.06.1939 – Dokumentnr: 402856 – Rettigheter iflg. skjøte, Bestemmelse om bebyggelse, Bestemmelse om vann/kloakkledning",
              "RETTIGHETSHAVER: LAKSEVÅG MASKIN OG JERNSKIBSBYGGERI AS",
              "Selgeren forbeholder sig og senere ervhervere av gr.nr. 53 br.nr. 234, rett til å anlegge vann-, gass- og kloakkledninger over den solgte parsell",
              "På eiendommen kan kun opføres 1 – et – hus for beboelse."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.87
          },
          {
            "risk_id": "R9",
            "description": "Eiendommen ligger i uregulert område, men er avsatt til byfortettningssone i kommuneplanens arealdel. Pågående revisjon av KPA-bestemmelsene kan medføre endringer i tillatt bruk og bebyggelse.",
            "evidence": [
              "Eiendommen ligger i uregulert område men er i henhold til kommuneplanens arealdel 2018 datert 19.06.2019, avsatt til byfortettningssone.",
              "PlanID: 71740000. Kommuneplanens arealdel KPA 2027. Bystyret legger til grunn at revisjon av KPA-bestemmelsene skal sluttføres med vedtak Bystyret i første kvartal 2027.",
              "Hovedmålet med revisjon av KPA-bestemmelsene er forenkling, fortgang og forutsigbarhet i plan- og byggesaksprosesser."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R10",
            "description": "Planlagte infrastrukturprosjekter i nærheten – konsekvensutredning for bybane og gang-/sykkelbro mellom Dokken og Laksevåg er lagt ut på høring. Kan medføre anleggsarbeid, støy og endringer i nærområdet.",
            "evidence": [
              "Bergen kommune har fått utarbeidet konsekvensutredning for bybanetrasé mellom Dokken og Lyngbø, og for gang- og sykkelbro mellom Dokken og indre Laksevåg.",
              "Byrådet har i møte 10.03.2026 fattet vedtak om å legge konsekvensutredning for Bybanen og konsekvensutredning for gang- og sykkelbro på høring."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R11",
            "description": "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg – kan medføre tilknytningsplikt eller kostnader knyttet til fjernvarme.",
            "evidence": [
              "Eiendommen er berørt av Eviny Termo AS sitt konsesjonsområde for fjernvarmeanlegg."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.68
          },
          {
            "risk_id": "R12",
            "description": "Legalpant – kommunen og sameiet har legalpant i eiendommen som ikke fremgår av grunnboken, og som har prioritet foran tinglyste lån. Kommunens legalpant har høyere prioritet enn sameiets.",
            "evidence": [
              "Kommunen har legalpant som sikkerhet for betaling av kommunale avgifter og eventuell eiendomsskatt.",
              "De øvrige seksjonseierne i sameiet har legalpant på inntil 2G som sikkerhet for krav knyttet til sameieforholdet, som felleskostnader.",
              "Legalpant er pant som ikke vises i grunnboksutskriften, og har prioritet foran tinglyste lån.",
              "Legalpant til kommunen har høyere prioritet enn legalpant til sameiet."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.88
          },
          {
            "risk_id": "R13",
            "description": "Energimerking E – boligen har dårlig energikarakter, noe som kan medføre høye oppvarmingskostnader og behov for energioppgradering.",
            "evidence": [
              "ENERGIMERKING: E – Ikke angitt",
              "Byggeår: 1936"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.8
          },
          {
            "risk_id": "R14",
            "description": "El-anlegget er delvis utført på egeninnsats (trekking av rør) – dette kan innebære risiko for avvik fra gjeldende forskrifter og potensielle sikkerhetsproblemer.",
            "evidence": [
              "Alt arbeid er utført av fagfolk, bortsett fra trekking av rør som er gjort på egeninnsats. Arbeid utført av Sæterdal Elektro AS.",
              "Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.78
          },
          {
            "risk_id": "R15",
            "description": "Eiendommen ligger i kulturmiljøhensyne sone (Historiske senter Laksevåg) – kan medføre restriksjoner på fremtidige bygningsmessige endringer og rehabilitering.",
            "evidence": [
              "Eiendommen befinner seg innenfor følgende hensynssoner: Kulturmiljø. Historiske senter Laksevåg, berøringsgrad 100%",
              "Eiendommen befinner seg innenfor følgende bestemmelsesområder: Byggegrense, utb. volum, funksjonskrav, berøringsgrad 100%"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.82
          },
          {
            "risk_id": "R16",
            "description": "Stikkledninger for vann og avløp er private og vedlikeholdsansvaret påhviler sameiet – uforutsette kostnader til vedlikehold og reparasjon kan oppstå.",
            "evidence": [
              "Stikkledningene fra eiendommen og ut til det kommunale nettet er private, og vedlikeholdsansvaret for disse påhviler sameiet.",
              "Eiendommen er tilknyttet offentlig vann- og avløpssystem via private stikkledninger."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.75
          },
          {
            "risk_id": "R17",
            "description": "Terrassen utenfor leiligheten er fellesareal – kjøper får ikke eksklusiv bruksrett til uteplassen, noe som kan oppleves som en begrensning til tross for at salgsoppgaven markedsfører 'privat uteplass'.",
            "evidence": [
              "Fliselagt terrasse utenfor leiligheten er felles arealer.",
              "Nydelig sjøutsikt og gode solforhold fra privat uteplass (fra salgsannonsen)"
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.9
          },
          {
            "risk_id": "R18",
            "description": "MULIG MANGLENDE RISIKO – Laksevåg verftsområde reguleringsplan (PlanID: 64940000) legger til rette for utfylling i sjø og omdanning til sentrumsformål med bymessig bebyggelse i nærheten. Dette kan påvirke utsikt, nærområde og bomiljø vesentlig.",
            "evidence": [
              "PlanID: 64940000. Laksevåg/Bergenhus. Laksevåg verftsområde 2. Planen skal legge til rette for utfylling i sjø, samt omdanning av verftsområdet til sentrumsformål med bymessig bebyggelse."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.72
          },
          {
            "risk_id": "R19",
            "description": "MULIG MANGLENDE RISIKO – Salgsoppgaven markedsfører boligen som 'svært påkostet med gjennomgående høy standard' og 'privat uteplass', men terrassen er fellesareal og el-anlegget har avvik. Potensiell interessekonflikt mellom markedsføring og faktiske forhold.",
            "evidence": [
              "Svært påkostet med gjennomgående høy standard. Omfattende renovert i 2022",
              "Nydelig sjøutsikt og gode solforhold fra privat uteplass",
              "Fliselagt terrasse utenfor leiligheten er felles arealer.",
              "Varmtvannstank grunnet ikke påvist tilfredsstillende el-tilkobling av varmtvannstank iht. gjeldende forskrift."
            ],
            "source_documents": [
              "d126_d126"
            ],
            "source_pages": [
              1
            ],
            "confidence": 0.7
          }
        ],
        "re_retrieval_queries": [
          "Hvilke spesifikke bygningsdeler er vurdert med TG3 og hva er de konkrete utbedringskostnadene over 500 000 kr?",
          "Er det dokumentert hvilke rom eller arealer som inngår i reseksjoneringen fra 2026, og hva var tidligere sameiebrøk?",
          "Finnes det informasjon om tilstand på tak, fasade og fellesarealer i sameiet?",
          "Er det gjennomført el-kontroll (samsvarserklæring) av el-anlegget etter renovering i 2022?",
          "Hva er konsekvensene av fjernvarmekonsesjonsområdet – er det tilknytningsplikt eller kun mulighet?",
          "Er det opplyst om radon i fellesarealer eller kun i boenheten?",
          "Hva er sameiets vedlikeholdsplan og økonomi utover felles formue på kr 200 000?"
        ],
        "reasoning": "\nGjennomgangen av de 17 identifiserte risikoene viser at de fleste er godt underbygget av dokumentevidensen. Følgende justeringer og observasjoner er gjort:\n\n**Justert ned i confidence:**\n- R2 (Reseksjonering): Justert fra 0.90 til 0.88 – forholdet er formelt avklart, men det er fortsatt usikkerhet rundt om alle rettigheter er korrekt overført.\n- R4 (Etasjeskille TG2): Justert fra 0.88 til 0.80 – kostnadsestimatet er under kr 20 000 og takstmann beskriver avviket som lite relevant i praksis. Risikoen er reell men begrenset.\n- R6 (Utbedringskostnader over 500 000): Justert fra 0.85 til 0.75 – dokumentet lister opp alle kostnadskategorier uten å tydelig spesifisere hvilke TG3-poster som utgjør beløpet over 500 000. Det er uklart om dette er ett tiltak eller summen av flere. Ytterligere undersøkelse anbefales.\n- R11 (Fjernvarme): Justert fra 0.72 til 0.68 – kun én setning i dokumentet, ingen informasjon om faktisk tilknytningsplikt eller kostnader.\n- R14 (El-egeninnsats): Justert fra 0.82 til 0.78 – egeninnsats på rørlegging er ikke nødvendigvis ulovlig, men kombinert med TG2 på varmtvannstank styrker dette risikobildet noe.\n\n**Justert opp i confidence:**\n- R3 (Fukt under terreng): Justert fra 0.92 til 0.93 – ytterligere evidens funnet om at takstmann ikke har kunnet undersøke konstruksjonene, og at det er gjort tiltak av tidligere eier.\n- R17 (Terrasse fellesareal): Justert fra 0.85 til 0.90 – det er en klar diskrepans mellom markedsføringen ('privat uteplass') og det faktiske forholdet (fellesareal), noe som er en vesentlig risiko for kjøper.\n\n**Nye risikoer identifisert:**\n- R18: Laksevåg verftsområde reguleringsplan (PlanID: 64940000) legger til rette for betydelig byutvikling i nærområdet, inkludert utfylling i sjø og bymessig bebyggelse. Dette kan påvirke utsikt og bomiljø vesentlig, og er ikke eksplisitt fremhevet som risiko i den opprinnelige analysen.\n- R19: Det er en potensiell interessekonflikt mellom salgsoppgavens markedsføring ('privat uteplass', 'svært påkostet') og de faktiske forholdene (fellesareal, el-avvik). Dette kan være relevant under avhendingsloven § 3-8 om uriktige opplysninger.\n\n**Manglende informasjon som bør undersøkes:**\n1. Hvilke konkrete TG3-poster utgjør anslaget over kr 500 000? Dette er kritisk for kjøpers risikovurdering.\n2. Er det utstedt samsvarserklæring for el-anlegget etter renovering i 2022?\n3. Hva er sameiets vedlikeholdsplan og langsiktige økonomi?\n4. Hva er konsekvensene av fjernvarmekonsesjonsområdet i praksis?\n5. Hva var tidligere sameiebrøk og hvilke arealer inngår i reseksjoneringen?\n"
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
    "input_tokens": 22856,
    "output_tokens": 6047,
    "server_tool_use": null,
    "service_tier": "standard"
  }
}
```
